// Wsadowy skan stron głównych listy sklepów pod maile (ROUTEMAPA 1.2, plan skaner-wcag-rozwoj E5).
// node scripts/skan-listy.mjs <lista.json> <katalog-wyniku>
// lista.json: ["sklep.pl", ...] albo [{ "host": "sklep.pl" }, ...]
// Wynik: ranking.json i ranking.md z akapitem dowodu per sklep. Maile wysyła user.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: filename,
  }).outputText;
  module._compile(output, filename);
};
const { runChecks } = require("../lib/wcag-scan/checks.ts");
const { fetchHtml } = require("../lib/wcag-scan/fetch.ts");

// Tylko testy z precyzją co najmniej 85% względem axe-core (plans/skaner-wcag-trafnosc-2026-09-15.md).
// Słabszych nie pokazujemy obcej firmie, bo jeden fałszywy alarm podważa cały mail.
const PEWNE = new Set(["html-lang", "document-title", "image-alt", "link-name", "meta-viewport"]);
const WAGA = { krytyczny: 3, "poważny": 2, umiarkowany: 1 };

const [plikListy, katalog] = process.argv.slice(2);
if (!plikListy || !katalog) {
  console.error("Użycie: node scripts/skan-listy.mjs <lista.json> <katalog-wyniku>");
  process.exit(1);
}
fs.mkdirSync(katalog, { recursive: true });
const hosty = [...new Set(JSON.parse(fs.readFileSync(plikListy, "utf8")).map((h) => (typeof h === "string" ? h : h.host).trim().toLowerCase()))];

const odmiana = (n, jeden, kilka, wiele) =>
  n === 1 ? jeden : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? kilka : wiele;

const czytelny = (kod) => kod.replace(/(["'])data:[^"']{12,}/g, "$1data:…");
const przyklad = (p) => czytelny(p.examples.find((e) => !e.includes("data:")) ?? p.examples[0] ?? "");

function akapit(host, problemy) {
  const wystapienia = problemy.reduce((s, p) => s + p.count, 0);
  const linie = problemy.slice(0, 3).map((p, i) =>
    `${i + 1}. ${p.title} (WCAG ${p.wcag}): ${p.count} ${odmiana(p.count, "miejsce", "miejsca", "miejsc")}, np. \`${przyklad(p)}\``);
  return [
    `Na stronie głównej ${host} automatyczny test wykrył ${wystapienia} ${odmiana(wystapienia, "miejsce", "miejsca", "miejsc")}, w których czytnik ekranu albo powiększenie nie zadziała prawidłowo. Przykłady:`,
    ...linie,
  ].join("\n");
}

const wyniki = [];
const kolejka = [...hosty];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (kolejka.length) {
    const host = kolejka.shift();
    try {
      const { finalUrl, html } = await fetchHtml(`https://${host}/`);
      const problemy = runChecks(html, finalUrl)
        .filter((p) => PEWNE.has(p.id))
        .sort((a, b) => WAGA[b.severity] - WAGA[a.severity] || b.count - a.count);
      const punkty = problemy.reduce((s, p) => s + WAGA[p.severity] * Math.min(p.count, 20), 0);
      wyniki.push({ host, url: finalUrl, punkty, problemy, akapit: problemy.length ? akapit(host, problemy) : null });
    } catch (e) {
      wyniki.push({ host, blad: String(e.message).slice(0, 200) });
    }
    process.stdout.write(".");
  }
}));

wyniki.sort((a, b) => (b.punkty ?? -1) - (a.punkty ?? -1));
fs.writeFileSync(path.join(katalog, "ranking.json"), JSON.stringify(wyniki, null, 1));

const ok = wyniki.filter((w) => !w.blad);
const md = [
  `# Ranking sklepów: pewne błędy dostępności na stronie głównej`,
  ``,
  `Skan ${new Date().toISOString().slice(0, 10)}, ${hosty.length} sklepów, pobrane ${ok.length}, bez błędów ${ok.filter((w) => !w.problemy.length).length}.`,
  `Tylko testy o precyzji co najmniej 85%: ${[...PEWNE].join(", ")}. Wynik nie jest audytem ani oceną zgodności z ustawą.`,
  `Przed mailem sprawdź wielkość firmy: mikroprzedsiębiorca (poniżej 10 osób i do 2 mln euro obrotu) świadczący usługi jest zwolniony z obowiązku dostępności, więc takiej firmie nie pisz o ustawie. Pomiń też agencje i producentów wtyczek.`,
  ``,
  ...ok.filter((w) => w.problemy.length).flatMap((w, i) => [
    `## ${i + 1}. ${w.host} (punkty ${w.punkty})`,
    ``,
    w.akapit,
    ``,
  ]),
  `## Nie udało się pobrać`,
  ``,
  ...wyniki.filter((w) => w.blad).map((w) => `- ${w.host}: ${w.blad}`),
].join("\n");
fs.writeFileSync(path.join(katalog, "ranking.md"), md);
console.log(`\nGotowe: ${ok.length}/${hosty.length} pobranych, wynik w ${katalog}`);
