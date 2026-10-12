// node qa/podmien-wpis.cjs qa/wpis-<slug>.md
// Format wejścia jak w briefach: === WPIS: slug ===, TITLE:, METATITLE:, METADESCRIPTION:, EXCERPT:, LEAD:, ## sekcje, FAQ: - P: … | O: …
const fs = require("fs");
const raw = fs.readFileSync(process.argv[2], "utf8").replace(/\r\n/g, "\n");
const slug = (raw.match(/=== WPIS: ([\w-]+) ===/) || [])[1];
if (!slug) throw new Error("brak slug");
const field = (k) => ((raw.match(new RegExp(`^${k}:\\s*(.+)$`, "m")) || [])[1] || "").trim();
const title = field("TITLE"), metaTitle = field("METATITLE"), metaDescription = field("METADESCRIPTION");
const excerpt = field("EXCERPT"), lead = field("LEAD");
const faqStart = raw.search(/^FAQ:\s*$/m);
const bodyPart = raw.slice(raw.search(/^## /m), faqStart < 0 ? undefined : faqStart);
const sections = bodyPart.split(/^## /m).filter((x) => x.trim()).map((chunk) => {
  const lines = chunk.split("\n");
  const heading = lines.shift().trim();
  const body = [];
  let table;
  const tbl = lines.filter((l) => /^\s*\|/.test(l));
  if (tbl.length >= 2) {
    const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    const rows = tbl.filter((l) => !/^\s*\|?\s*:?-{2,}/.test(l)).map(cells);
    table = { caption: heading, head: rows[0], rows: rows.slice(1) };
  }
  let tableAt;
  let code = null;
  for (const l of lines) {
    const t = l.trim();
    // Blok kodu zostaje jednym akapitem zaczynającym się od ```, z zachowanymi wcięciami i pustymi wierszami.
    if (code !== null) {
      code.push(l.replace(/\s+$/, ""));
      if (t.startsWith("```")) { body.push(code.join("\n")); code = null; }
      continue;
    }
    if (t.startsWith("```")) { code = [t]; continue; }
    if (t.startsWith("|")) { if (tableAt === undefined) tableAt = body.length; continue; }
    if (!t) continue;
    body.push(t.replace(/^- /, "• "));
  }
  // lista punktowana: sklejam kolejne punkty w jeden akapit z punktorami w osobnych wierszach nie istnieje w szablonie, więc każdy punkt to akapit
  if (!table) return { heading, body };
  // tableAt: tabela stoi tam, gdzie w tekście, a nie zawsze pod ostatnim akapitem.
  return tableAt < body.length ? { heading, body, table, tableAt } : { heading, body, table };
});
const faq = faqStart < 0 ? [] : raw.slice(faqStart).split("\n").filter((l) => /^- P:/.test(l.trim())).map((l) => {
  const m = l.trim().match(/^- P:\s*(.+?)\s*\|\s*O:\s*(.+)$/);
  return { q: m[1].trim(), a: m[2].trim() };
});
const words = [lead, ...sections.flatMap((s) => s.body)].join(" ").split(/\s+/).length;

let s = fs.readFileSync("lib/posts.ts", "utf8");
const crlf = s.includes("\r\n");
s = s.replace(/\r\n/g, "\n");
// Wpisy w tablicy mają wcięcie 4 spacji, wpisy dodane przez posts.push({...}) mają 2.
let ind4 = true;
let start = s.indexOf(`    slug: "${slug}",`);
if (start < 0) { start = s.indexOf(`\n  slug: "${slug}",`) + 1; ind4 = false; }
if (start <= 0) {
  // Nowy wpis: dopisz pusty posts.push na końcu; tagi, frazę, usługi i hero bierze z nagłówka pliku (TAGS/KEYWORD/RELATED/HERO).
  s = s.replace(/\n*$/, "") + `\n\nposts.push({\n  slug: "${slug}",\n  date: "${new Date().toISOString().slice(0, 10)}",\n});\n`;
  start = s.indexOf(`\n  slug: "${slug}",`) + 1;
  ind4 = false;
}
const header = {
  // Pusty posts.push nie ma przecinka po dacie, więc keep("date") jej nie znajduje.
  date: field("DATE") ? q0(field("DATE")) : null,
  tags: field("TAGS") && q0(field("TAGS").split(",").map((t) => t.trim())),
  keyword: field("KEYWORD") && q0(field("KEYWORD")),
  relatedServices: field("RELATED") && q0(field("RELATED").split(",").map((t) => t.trim())),
  hero: field("HERO") && `{ kind: ${q0(field("HERO"))} }`,
};
function q0(v) { return JSON.stringify(v); }
// Ostatni wpis w tablicy kończy się "\n  }\n" bez przecinka; brak dopasowania dawał -1 i ucinał resztę pliku.
const ends = ind4 ? [s.indexOf("\n  },\n", start), s.indexOf("\n  }\n", start)] : [s.indexOf("\n});", start)];
const end = Math.min(...ends.filter((x) => x > 0));
if (!Number.isFinite(end)) throw new Error("brak końca wpisu " + slug);
const block = s.slice(start, end);
const keep = (key) => {
  const p = ind4 ? "    " : "  ";
  if (header[key]) return header[key];
  const m = block.match(new RegExp(`\\n${p}${key}: ([^\\n]+(?:\\n${p}  [^\\n]+)*),?\\n`));
  return m ? m[1].replace(/,$/, "") : null;
};
const q = JSON.stringify;
const ind = (arr) => arr.map((x) => "      " + q(x) + ",").join("\n");
const out = [
  `    slug: ${q(slug)},`,
  `    title: ${q(title)},`,
  `    excerpt:`,
  `      ${q(excerpt)},`,
  `    date: ${keep("date")},`,
  `    updatedAt: "${new Date().toISOString().slice(0, 10)}",`,
  `    readingMinutes: ${Math.max(3, Math.round(words / 200))},`,
  `    tags: ${keep("tags")},`,
  keep("keyword") ? `    keyword: ${keep("keyword")},` : null,
  keep("relatedServices") ? `    relatedServices: ${keep("relatedServices")},` : null,
  keep("hero") ? `    hero: ${keep("hero")},` : null,
  `    metaTitle: ${q(metaTitle)},`,
  `    metaDescription:`,
  `      ${q(metaDescription)},`,
  `    lead:`,
  `      ${q(lead)},`,
  `    body: [${q(lead)}],`,
  `    sections: [`,
  ...sections.map((sec) => [
    `      {`,
    `        heading: ${q(sec.heading)},`,
    `        body: [`,
    sec.body.map((p) => `          ${q(p)},`).join("\n"),
    `        ],`,
    sec.table ? `        table: ${q(sec.table)},` : null,
    sec.tableAt !== undefined ? `        tableAt: ${sec.tableAt},` : null,
    `      },`,
  ].filter(Boolean).join("\n")),
  `    ],`,
  `    faq: [`,
  ...faq.map((f) => `      { q: ${q(f.q)}, a: ${q(f.a)} },`),
  `    ],`,
].filter((x) => x !== null).join("\n");
const outFinal = ind4 ? out : out.split("\n").map((l) => l.replace(/^  /, "")).join("\n");
s = s.slice(0, start) + outFinal + s.slice(end);
fs.writeFileSync("lib/posts.ts", crlf ? s.replace(/\n/g, "\r\n") : s);
console.log(slug, "sekcje", sections.length, "faq", faq.length, "słowa", words, "tytuł", title.length, "meta", metaTitle.length, metaDescription.length);
