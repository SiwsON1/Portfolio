// Wstawia NOWĄ usługę do lib/services.ts i jej blok do lib/seoBlocks.ts z wyniku ChatGPT (format jak w briefach EAV).
// node qa/eav/nowa-usluga.cjs <slug> "<tytuł w menu>" '<headings JSON>' <wynik.md>
// wynik.md zawiera obie części: === STRONA: slug === ... i === BLOK: slug === ...
const fs = require("fs");
const [slug, title, headingsJson, file] = process.argv.slice(2);
if (!slug || !title || !headingsJson || !file) throw new Error("użycie: <slug> <tytuł> <headings JSON> <wynik.md>");
const headings = JSON.parse(headingsJson);
const raw = fs.readFileSync(file, "utf8").replace(/\r/g, "");
const bi = raw.indexOf("=== BLOK");
if (bi < 0) throw new Error("brak części BLOK");
const S = raw.slice(0, bi);
const B = raw.slice(raw.indexOf("\n", bi) + 1).trim();
const q = (s) => JSON.stringify(s);
const field = (name) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*(.*)$", "m")); if (!m) throw name; return m[1].trim(); };
const section = (name, next) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*\\n?([^]*?)\\n+" + next + ":", "m")); if (!m) throw name; return m[1].trim(); };
const pipe = (block, a, b) => block.split("\n").filter((l) => l.startsWith("- ")).map((l) => { const [x, y] = l.slice(2).split(" | "); return [x.replace(a, "").trim(), y.replace(b, "").trim()]; });
const lead = section("LEAD", "INTRO").split(/\n+/).join(" ");
const intro = section("INTRO", "KORZYŚCI").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const bullets = pipe(section("KORZYŚCI", "PROCES"), "Tytuł:", "Treść:");
const proc = pipe(section("PROCES", "FAQ"), "Tytuł:", "Treść:");
const faq = pipe(section("FAQ", "CTA"), "P:", "O:");
const svc = `  {
    slug: ${q(slug)},
    title: ${q(title)},
    metaTitle: ${q(field("METATITLE"))},
    metaDescription:
      ${q(field("METADESCRIPTION"))},
    h1: ${q(field("H1"))},
    headings: ${JSON.stringify(headings).replace(/","/g, '", "').replace(/":"/g, '": "').replace(/^\{/, "{ ").replace(/\}$/, " }")},
    lead:
      ${q(lead)},
    intro: [
${intro.map((p) => "      " + q(p) + ",").join("\n")}
    ],
    bullets: [
${bullets.map(([t, b]) => `      { title: ${q(t)}, body: ${q(b)} },`).join("\n")}
    ],
    process: [
${proc.map(([t, b], i) => `      { step: "${String(i + 1).padStart(2, "0")}", title: ${q(t)}, body: ${q(b)} },`).join("\n")}
    ],
    faq: [
${faq.map(([a, b]) => `      { q: ${q(a)}, a: ${q(b)} },`).join("\n")}
    ],
    cta: ${q(field("CTA"))},
  },
`;
// blok: # nagłówek, intro, ## sekcje (akapity, jedna lista, jedna tabela)
const heading = B.split("\n")[0].replace(/^#+ /, "").trim();
const parts = B.split(/\n## /);
const introB = parts[0].split("\n").slice(1).join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const toId = (h) => h.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60).replace(/-$/, "");
const sections = parts.slice(1).map((p) => {
  const [h, ...rest] = p.split("\n");
  const paras = rest.join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
  const sec = { id: toId(h), heading: h.trim(), body: [] };
  let after = false;
  for (const para of paras) {
    if (para.startsWith("|")) {
      // Wiersz separatora („| --- |”) nie jest wierszem danych.
      const rows = para.split("\n").filter((r) => !/^\|?\s*:?-{2,}/.test(r.trim())).map((r) => r.trim().replace(/^\|\s*|\s*\|$/g, "").split("|").map((c) => c.trim()));
      sec.table = { caption: h.trim(), head: rows[0], rows: rows.slice(1) };
      after = true;
    } else if (para.split("\n").every((l) => l.startsWith("- "))) {
      sec.list = [...(sec.list || []), ...para.split("\n").map((l) => l.replace(/^- /, "").trim())];
      after = true;
    } else if (after) (sec.outro ||= []).push(para);
    else sec.body.push(para);
  }
  return sec;
});
const blok = `  ${q(slug)}: ${JSON.stringify({ heading, intro: introB, sections }, null, 2).replace(/\n/g, "\n  ")},
`;
function insert(f, anchor, text, exists) {
  let s = fs.readFileSync(f, "utf8");
  if (s.includes(exists)) throw new Error("już jest w " + f);
  const i = s.lastIndexOf(anchor);
  if (i < 0) throw new Error("brak kotwicy w " + f);
  fs.writeFileSync(f, s.slice(0, i) + text + s.slice(i));
}
insert("lib/services.ts", "];\n\nexport const servicesIndex", svc, `slug: ${q(slug)}`);
insert("lib/seoBlocks.ts", "};\n", blok, `${q(slug)}: {`);
console.log(slug, "| intro", intro.length, "korzyści", bullets.length, "proces", proc.length, "faq", faq.length, "| blok sekcji", sections.length, "tabel", sections.filter((s) => s.table).length);
