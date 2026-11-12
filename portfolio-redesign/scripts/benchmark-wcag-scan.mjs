// Pomiar trafności skanera statycznego względem axe-core na skanie sklepów WooCommerce.
// node scripts/benchmark-wcag-scan.mjs <results.jsonl> <katalog-cache> [wynik.json]
// Pierwsze uruchomienie pobiera HTML stron do cache, kolejne liczą tylko z cache.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
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

const [plikWynikowAxe, katalogCache, plikWyjscia = "benchmark-wcag-scan.json"] = process.argv.slice(2);
fs.mkdirSync(katalogCache, { recursive: true });

// nasz test -> reguły axe o tym samym znaczeniu
const MAPA = {
  "html-lang": ["html-has-lang"],
  "document-title": ["document-title"],
  "image-alt": ["image-alt"],
  "input-label": ["label", "select-name"],
  "link-name": ["link-name"],
  "button-name": ["button-name"],
  "frame-title": ["frame-title"],
  "meta-viewport": ["meta-viewport"],
  "aria-role": ["aria-roles"],
  "nested-interactive": ["nested-interactive"],
  "aria-hidden-focus": ["aria-hidden-focus"],
  "list": ["list"],
  "listitem": ["listitem"],
};

const strony = fs.readFileSync(plikWynikowAxe, "utf8").trim().split("\n").map((l) => JSON.parse(l))
  .flatMap((sklep) => (sklep.pages || []).filter((p) => p.status === 200 && p.axe).map((p) => ({ host: sklep.host, ...p })));

async function html(url) {
  const plik = path.join(katalogCache, crypto.createHash("sha1").update(url).digest("hex") + ".html");
  if (fs.existsSync(plik)) return fs.readFileSync(plik, "utf8");
  try {
    const { html: tresc } = await fetchHtml(url);
    fs.writeFileSync(plik, tresc);
    return tresc;
  } catch (e) {
    fs.writeFileSync(plik + ".err", String(e.message));
    return null;
  }
}

const statystyki = Object.fromEntries(Object.keys(MAPA).map((k) => [k, { oba: 0, tylkoMy: 0, tylkoAxe: 0, zadne: 0, przyklady: { tylkoMy: [], tylkoAxe: [] } }]));
let zliczone = 0, bledyPobrania = 0;
const kolejka = [...strony];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (kolejka.length) {
    const s = kolejka.shift();
    const tresc = await html(s.url);
    if (!tresc) { bledyPobrania++; continue; }
    const nasze = new Map(runChecks(tresc, s.url).map((i) => [i.id, i]));
    const axeIds = new Map(s.axe.map((a) => [a.id, a]));
    for (const [nasz, regulyAxe] of Object.entries(MAPA)) {
      const my = nasze.has(nasz);
      const axe = regulyAxe.some((r) => axeIds.has(r));
      const st = statystyki[nasz];
      if (my && axe) st.oba++;
      else if (my) { st.tylkoMy++; if (st.przyklady.tylkoMy.length < 8) st.przyklady.tylkoMy.push({ url: s.url, nasze: nasze.get(nasz).examples }); }
      else if (axe) { st.tylkoAxe++; if (st.przyklady.tylkoAxe.length < 8) st.przyklady.tylkoAxe.push({ url: s.url, axe: regulyAxe.flatMap((r) => axeIds.get(r)?.sample || []).slice(0, 3) }); }
      else st.zadne++;
    }
    zliczone++;
  }
}));

console.log(`stron ${strony.length} | policzone ${zliczone} | błędy pobrania ${bledyPobrania}`);
console.log("test".padEnd(16), "oba".padStart(5), "tylkoMy".padStart(8), "tylkoAxe".padStart(9), "precyzja".padStart(9), "czułość".padStart(8));
for (const [k, st] of Object.entries(statystyki)) {
  const precyzja = st.oba + st.tylkoMy ? Math.round((100 * st.oba) / (st.oba + st.tylkoMy)) + "%" : "-";
  const czulosc = st.oba + st.tylkoAxe ? Math.round((100 * st.oba) / (st.oba + st.tylkoAxe)) + "%" : "-";
  console.log(k.padEnd(16), String(st.oba).padStart(5), String(st.tylkoMy).padStart(8), String(st.tylkoAxe).padStart(9), precyzja.padStart(9), czulosc.padStart(8));
}
fs.writeFileSync(plikWyjscia, JSON.stringify(statystyki, null, 1));
