import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;
  module._compile(output, filename);
};

const { runChecks, scoreIssues } = require("../lib/wcag-scan/checks.ts");
const { assertPublicUrl, ScanFetchError } = require("../lib/wcag-scan/fetch.ts");

let failures = 0;

async function test(name, callback) {
  try {
    await callback();
    console.log(`PASS ${name}`);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function equal(actual, expected, label) {
  if (actual !== expected) throw new Error(`${label}: oczekiwano ${expected}, otrzymano ${actual}`);
}

const brokenHtml = `<!doctype html>
<html>
  <head>
    <title> </title>
    <meta name="viewport" content="width=device-width, maximum-scale=1">
    <meta name="viewport" content="user-scalable=no">
  </head>
  <body>
    <img src="one.png">
    <img src="decorative.png" role="presentation">
    <img src="photo.jpg" alt="photo.jpg">
    <img src="camera.jpg" alt="IMG_1234">
    <input id="email">
    <select><option>Opcja</option></select>
    <input type="hidden">
    <label>Opisane <textarea></textarea></label>
    <a href="/empty"></a>
    <a href="/more">Czytaj więcej</a>
    <a href="/here">tutaj</a>
    <button></button>
    <h2>Sekcja</h2>
    <h4>Podsekcja</h4>
    <h6>Szczegół</h6>
    <div id="same"></div><span id="same"></span><p id="same"></p>
    <iframe src="/one"></iframe><iframe src="/two" title=" "></iframe>
    <table><tr><td>A</td></tr><tr><td>B</td></tr></table>
    <table><tr><td>Tylko jeden wiersz</td></tr></table>
    <video autoplay></video><audio autoplay></audio><video autoplay muted></video>
    <div role="nieistniejaca"></div><div role=" "></div><nav role="navigation"></nav>
  </body>
</html>`;

const expectedCounts = {
  "html-lang": 1,
  "document-title": 1,
  "image-alt": 1,
  "image-alt-filename": 2,
  "input-label": 2,
  "link-name": 1,
  "button-name": 1,
  "link-text-generic": 2,
  "heading-order": 3,
  "duplicate-id": 2,
  "frame-title": 2,
  "table-headers": 1,
  "meta-viewport": 2,
  "media-autoplay": 2,
  "aria-role": 2,
};

const cleanHtml = `<!doctype html>
<html lang="pl">
  <head><title>Dostępna strona</title><meta name="viewport" content="width=device-width, maximum-scale=5"></head>
  <body>
    <h1>Tytuł</h1><h2>Sekcja</h2>
    <img src="product.jpg" alt="Czerwony kubek">
    <label for="name">Imię</label><input id="name">
    <a href="/kontakt">Kontakt</a><button aria-label="Zamknij"></button>
    <div id="first"></div><div id="second"></div>
    <iframe src="/mapa" title="Mapa dojazdu"></iframe>
    <table><tr><th scope="col">Produkt</th></tr><tr><td>Kubek</td></tr></table>
    <video autoplay muted></video><nav role="navigation">Menu</nav>
  </body>
</html>`;

await test("fixture wykrywa wszystkie 15 rodzajów błędów z poprawnymi licznikami", () => {
  const issues = runChecks(brokenHtml, "https://example.com");
  equal(issues.length, 15, "liczba rodzajów błędów");
  const byId = new Map(issues.map((issue) => [issue.id, issue]));
  for (const [id, count] of Object.entries(expectedCounts)) {
    if (!byId.has(id)) throw new Error(`brak wyniku ${id}`);
    equal(byId.get(id).count, count, `licznik ${id}`);
    if (byId.get(id).examples.some((example) => example.length > 160)) {
      throw new Error(`przykład ${id} przekracza 160 znaków`);
    }
  }
});

await test("czysty fixture ma zero problemów", () => {
  equal(runChecks(cleanHtml, "https://example.com").length, 0, "liczba problemów");
});

await test("wynik punktowy zawsze mieści się w granicach 0 do 100", () => {
  const brokenScore = scoreIssues(runChecks(brokenHtml, "https://example.com"));
  const cleanScore = scoreIssues([]);
  if (brokenScore < 0 || brokenScore > 100) throw new Error(`wynik poza zakresem: ${brokenScore}`);
  equal(cleanScore, 100, "wynik czystej strony");
  const repeatedType = { id: "same", title: "x", wcag: "1.1.1", severity: "krytyczny", count: 1, examples: [], fix: "Napraw ten problem." };
  equal(scoreIssues([repeatedType, repeatedType]), 88, "jeden rodzaj błędu jest liczony tylko raz");
  const many = Array.from({ length: 20 }, (_, index) => ({
    id: String(index), title: "x", wcag: "1.1.1", severity: "krytyczny", count: 1, examples: [], fix: "Napraw ten problem.",
  }));
  equal(scoreIssues(many), 0, "dolna granica wyniku");
});

const blockedUrls = [
  "http://127.0.0.1",
  "http://localhost:3197",
  "http://169.254.169.254",
  "http://[::1]",
  "http://2130706433",
  "http://10.0.0.1",
  "file:///etc/passwd",
  "http://0x7f.1",
  "http://127.1",
  "http://0.1.2.3",
  "http://100.64.0.1",
  "http://172.16.0.1",
  "http://192.168.0.1",
  "http://198.18.0.1",
  "http://224.0.0.1",
  "http://240.0.0.1",
  "http://[fc00::1]",
  "http://[fe80::1]",
  "http://[::ffff:127.0.0.1]",
  "http://[::127.0.0.1]",
  "http://[::7f00:1]",
  "http://[64:ff9b::a9fe:a9fe]",
  "http://[2002:a9fe:a9fe::1]",
  "http://[fd00::1]",
  "http://192.0.0.1",
];

for (const url of blockedUrls) {
  await test(`SSRF odrzuca ${url}`, async () => {
    try {
      await assertPublicUrl(url);
    } catch (error) {
      if (error instanceof ScanFetchError && error.status === 400) return;
      throw error;
    }
    throw new Error("adres nie został odrzucony");
  });
}

if (failures > 0) {
  console.error(`FAIL: ${failures} testów nie przeszło.`);
  process.exitCode = 1;
} else {
  console.log("PASS: wszystkie testy przeszły.");
}
