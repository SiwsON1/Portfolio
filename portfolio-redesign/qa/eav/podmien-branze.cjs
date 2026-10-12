// Podmienia treść strony branżowej w lib/industries.ts i jej blok w lib/seoBlocks.ts na wynik z ChatGPT.
// node qa/eav/podmien-branze.cjs <slug> <obecna.json> <plik-branza.md> <plik-blok.md>
// Pola spoza wyniku (slug, title, keyword, headings) zostają z obecnej wersji.
const fs = require("fs");
const { execFileSync } = require("child_process");
const [slug, fObecna, fBranza, fBlok] = process.argv.slice(2);
const S = fs.readFileSync(fBranza, "utf8").replace(/\r/g, "");
const cur = JSON.parse(fs.readFileSync(fObecna, "utf8")).page;
const field = (name) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*(.*)$", "m")); if (!m) throw name; return m[1].trim(); };
const section = (name, next) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*\\n?([^]*?)\\n+" + next + ":", "m")); if (!m) throw name; return m[1].trim(); };
const pipe = (block, a, b) => block.split("\n").filter((l) => l.startsWith("- ")).map((l) => { const [x, y] = l.slice(2).split(" | "); return [x.replace(a, "").trim(), y.replace(b, "").trim()]; });

const next = {
  ...cur,
  metaTitle: field("METATITLE"),
  metaDescription: field("METADESCRIPTION"),
  h1: field("H1"),
  lead: section("LEAD", "INTRO"),
  intro: section("INTRO", "PAINS").split(/\n\n+/).map((x) => x.trim()).filter(Boolean),
  pains: pipe(section("PAINS", "MUSTHAVE"), "Tytuł:", "Treść:").map(([title, body]) => ({ title, body })),
  mustHave: pipe(section("MUSTHAVE", "STACK"), "Tytuł:", "Treść:").map(([title, body]) => ({ title, body })),
  stack: pipe(section("STACK", "PRICING"), "Etykieta:", "Treść:").map(([label, body]) => ({ label, body })),
  pricing: { ...cur.pricing, note: field("PRICING") },
  deliverables: pipe(section("DELIVERABLES", "PROCES"), "Etykieta:", "Treść:").map(([label, body]) => ({ label, body })),
  process: pipe(section("PROCES", "NOTFOR"), "Tytuł:", "Treść:").map(([title, body], i) => ({ step: String(i + 1).padStart(2, "0"), title, body })),
  notFor: section("NOTFOR", "FAQ").split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2).trim()),
  faq: pipe(section("FAQ", "CTA"), "P:", "O:").map(([q, a]) => ({ q, a })),
  cta: field("CTA"),
};
// Zachowaj kolejność kluczy jak w obecnym wpisie.
const ordered = {};
for (const k of Object.keys(cur)) ordered[k] = next[k];

const f = "lib/industries.ts";
let s = fs.readFileSync(f, "utf8");
const marker = `slug: "${slug}"`;
const at = s.indexOf(marker);
if (at < 0) throw new Error("brak branży " + slug);
const open = s.lastIndexOf("{", at);
let depth = 0, i = open, inStr = null;
for (; i < s.length; i++) {
  const c = s[i];
  if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
  if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
  if (c === "{") depth++;
  else if (c === "}") { depth--; if (depth === 0) break; }
}
const body = JSON.stringify(ordered, null, 2)
  .replace(/^(\s*)"([a-zA-Z0-9]+)":/gm, "$1$2:")
  .replace(/\n/g, "\n  ");
s = s.slice(0, open) + body + s.slice(i + 1);
fs.writeFileSync(f, s);
console.log(slug, "| intro", ordered.intro.length, "pains", ordered.pains.length, "mustHave", ordered.mustHave.length, "stack", ordered.stack.length, "deliverables", ordered.deliverables.length, "process", ordered.process.length, "notFor", ordered.notFor.length, "faq", ordered.faq.length);

// Blok tym samym parserem co usługi.
execFileSync(process.execPath, ["qa/eav/podmien-blok.cjs", slug, fBlok], { stdio: "inherit" });
