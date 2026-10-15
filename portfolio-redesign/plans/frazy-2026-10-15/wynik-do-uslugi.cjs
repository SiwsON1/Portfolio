// node wynik-do-uslugi.cjs <wynik.md>
// Zamienia wynik z ChatGPT (=== STRONA / === BLOK) na wpis w lib/services.ts i blok w lib/seoBlocks.ts.
// Plik wynik.md musi mieć dodatkowo linie TITLE: i HEADINGS: (bullets | process | faq) w części STRONA.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "../..");
const src = fs.readFileSync(process.argv[2], "utf8").replace(/\r/g, "");
const [stronaRaw, blokRaw] = src.split(/^=== BLOK: .+ ===$/m);
const slug = stronaRaw.match(/^=== STRONA: (.+?) ===$/m)[1];

const meta = {};
let mode = null;
const intro = [], bullets = [], process_ = [], faq = [];
for (const raw of stronaRaw.split("\n")) {
  const l = raw.trim();
  if (!l || l.startsWith("===")) continue;
  const k = l.match(/^(TITLE|METATITLE|METADESCRIPTION|H1|LEAD|HEADINGS|CTA):\s*(.*)$/);
  if (k) { meta[k[1]] = k[2]; mode = null; continue; }
  const s = l.match(/^(INTRO|KORZYŚCI|PROCES|FAQ):$/);
  if (s) { mode = s[1]; continue; }
  if (mode === "INTRO") intro.push(l);
  else if (mode === "KORZYŚCI" || mode === "PROCES") {
    const m = l.match(/^-\s*Tytuł:\s*(.+?)\s*\|\s*Treść:\s*(.+)$/);
    if (!m) throw new Error("zła linia " + mode + ": " + l);
    (mode === "KORZYŚCI" ? bullets : process_).push({ title: m[1], body: m[2] });
  } else if (mode === "FAQ") {
    const m = l.match(/^-\s*P:\s*(.+?)\s*\|\s*O:\s*(.+)$/);
    if (!m) throw new Error("zła linia FAQ: " + l);
    faq.push({ q: m[1], a: m[2] });
  }
}
const [hb, hp, hf] = meta.HEADINGS.split("|").map((x) => x.trim());
const service = {
  slug,
  title: meta.TITLE,
  metaTitle: meta.METATITLE,
  metaDescription: meta.METADESCRIPTION,
  h1: meta.H1,
  headings: { bullets: hb, process: hp, faq: hf },
  lead: meta.LEAD,
  intro,
  bullets,
  process: process_.map((p, i) => ({ step: String(i + 1).padStart(2, "0"), ...p })),
  faq,
  cta: meta.CTA,
};

const slugify = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const block = { heading: "", intro: [], sections: [] };
let cur = null, tbl = [];
const flush = () => {
  if (!cur || !tbl.length) return;
  const rows = tbl.filter((l) => !/^\|\s*:?-{2,}/.test(l)).map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  cur.table = { caption: cur.heading, head: rows[0], rows: rows.slice(1) };
  tbl = [];
};
for (const raw of blokRaw.split("\n")) {
  const l = raw.trim();
  if (!l) continue;
  const h1 = l.match(/^#\s+(.+)$/);
  if (h1) { block.heading = h1[1]; continue; }
  const h2 = l.match(/^##\s+(.+)$/);
  if (h2) { flush(); cur = { id: slugify(h2[1]), heading: h2[1], body: [] }; block.sections.push(cur); continue; }
  if (!cur) { block.intro.push(l); continue; }
  if (l.startsWith("|")) { tbl.push(l); continue; }
  flush();
  const li = l.match(/^-\s+(.+)$/);
  if (li) { (cur.list ||= []).push(li[1]); continue; }
  if (cur.list || cur.table) (cur.outro ||= []).push(l);
  else cur.body.push(l);
}
flush();

const svcPath = path.join(root, "lib/services.ts");
let svc = fs.readFileSync(svcPath, "utf8");
if (svc.includes(`slug: "${slug}"`)) throw new Error("usługa już jest: " + slug);
const svcMarker = "];\n\nexport const servicesIndex";
if (!svc.replace(/\r/g, "").includes(svcMarker)) throw new Error("brak znacznika w services.ts");
const objTs = JSON.stringify(service, null, 2).replace(/^/gm, "  ").trimStart();
svc = svc.replace(/\];(\r?\n\r?\n)export const servicesIndex/, (m, nl) => `  ${objTs},\n];${nl}export const servicesIndex`);
fs.writeFileSync(svcPath, svc);

const sbPath = path.join(root, "lib/seoBlocks.ts");
let sb = fs.readFileSync(sbPath, "utf8");
if (sb.includes(`"${slug}": {`)) throw new Error("blok już jest: " + slug);
const blockTs = JSON.stringify(block, null, 2).replace(/^/gm, "  ").trimStart();
sb = sb.replace(/\n\};\s*$/, `\n  "${slug}": ${blockTs},\n};\n`);
fs.writeFileSync(sbPath, sb);

const words = (a) => a.join(" ").split(/\s+/).length;
console.log(JSON.stringify({
  slug, metaTitle: service.metaTitle.length, metaDesc: service.metaDescription.length,
  bullets: bullets.length, process: process_.length, faq: faq.length,
  slowaStrona: words([service.lead, ...intro, ...bullets.map((b) => b.body), ...process_.map((p) => p.body)]),
  sekcjeBloku: block.sections.length, tabele: block.sections.filter((s) => s.table).length,
  slowaBlok: words([...block.intro, ...block.sections.flatMap((s) => [...s.body, ...(s.list || []), ...(s.outro || [])])]),
}));
