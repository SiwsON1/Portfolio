// node wpis-do-posts.cjs <wynik.md> '<json z polami: date, tags, relatedServices, hero, readingMinutes>'
// Zamienia wynik z ChatGPT (format === WPIS ===) na posts.push({...}) i wstawia przed blokiem REDIRECTED_POSTS w lib/posts.ts.
const fs = require("fs");
const path = require("path");
const [src, extraJson] = process.argv.slice(2);
const extra = JSON.parse(extraJson);
const lines = fs.readFileSync(src, "utf8").replace(/\r/g, "").split("\n");

const meta = {};
let slug = "";
const sections = [];
const faq = [];
let cur = null;
let inFaq = false;
let tableBuf = [];

const flushTable = () => {
  if (!cur || !tableBuf.length) return;
  const rows = tableBuf
    .filter((l) => !/^\|\s*:?-{2,}/.test(l))
    .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  const [head, ...body] = rows;
  cur.table = { caption: cur.heading, head, rows: body };
  cur.tableAt = cur.body.length;
  tableBuf = [];
};

for (const raw of lines) {
  const l = raw.trim();
  const m = l.match(/^=== WPIS: (.+?) ===$/);
  if (m) { slug = m[1]; continue; }
  if (!inFaq && !cur) {
    const k = l.match(/^(KEYWORD|TITLE|METATITLE|METADESCRIPTION|EXCERPT|LEAD):\s*(.*)$/);
    if (k) { meta[k[1]] = k[2]; continue; }
  }
  if (/^FAQ:?$/.test(l)) { flushTable(); inFaq = true; cur = null; continue; }
  if (inFaq) {
    const f = l.match(/^-\s*P:\s*(.+?)\s*\|\s*O:\s*(.+)$/);
    if (f) faq.push({ q: f[1], a: f[2] });
    continue;
  }
  const h = l.match(/^##\s+(.+)$/);
  if (h) { flushTable(); cur = { heading: h[1], body: [] }; sections.push(cur); continue; }
  if (!cur || !l) { if (!l) flushTable(); continue; }
  if (l.startsWith("|")) { tableBuf.push(l); continue; }
  flushTable();
  const li = l.match(/^(?:-|\d+\.)\s+(.+)$/);
  if (li && cur.body.length && cur.body[cur.body.length - 1].startsWith("- ")) {
    cur.body[cur.body.length - 1] += "\n- " + li[1];
  } else if (li) {
    cur.body.push("- " + li[1]);
  } else {
    cur.body.push(l);
  }
}
flushTable();
for (const s of sections) if (s.table && s.tableAt === s.body.length) delete s.tableAt;

const post = {
  slug,
  title: meta.TITLE,
  excerpt: meta.EXCERPT,
  date: extra.date,
  updatedAt: extra.date,
  readingMinutes: extra.readingMinutes,
  tags: extra.tags,
  keyword: meta.KEYWORD,
  relatedServices: extra.relatedServices,
  hero: extra.hero,
  metaTitle: meta.METATITLE,
  metaDescription: meta.METADESCRIPTION,
  lead: meta.LEAD,
  body: [meta.LEAD],
  sections,
  faq,
};
const out = "posts.push(" + JSON.stringify(post, null, 2) + ");\n\n";
const target = path.join(__dirname, "../../lib/posts.ts");
const ts = fs.readFileSync(target, "utf8");
const marker = "// Wpisy przekierowane 301";
if (ts.includes(`slug": "${slug}"`) || ts.includes(`slug: "${slug}"`)) throw new Error("slug już jest: " + slug);
fs.writeFileSync(target, ts.replace(marker, out + marker));
console.log(JSON.stringify({ slug, sekcje: sections.length, faq: faq.length, tabele: sections.filter((s) => s.table).length, meta: Object.keys(meta) }));
