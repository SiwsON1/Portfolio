// Podmienia treść usługi w lib/services.ts i jej blok w lib/seoBlocks.ts na wynik z ChatGPT.
// node qa/eav/podmien-usluge.cjs <slug> <plik-strona.md> <plik-blok.md>
const fs = require("fs");
const [slug, fStrona, fBlok] = process.argv.slice(2);
if (!slug || !fStrona || !fBlok) throw new Error("użycie: <slug> <strona.md> <blok.md>");
const S = fs.readFileSync(fStrona, "utf8").replace(/\r/g, "");
const B = fs.readFileSync(fBlok, "utf8").replace(/\r/g, "");
const q = (s) => JSON.stringify(s);
const field = (name) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*(.*)$", "m")); if (!m) throw name; return m[1].trim(); };
const section = (name, next) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*\\n?([^]*?)\\n+" + next + ":", "m")); if (!m) throw name; return m[1].trim(); };
const pipe = (block, a, b) => block.split("\n").filter((l) => l.startsWith("- ")).map((l) => { const [x, y] = l.slice(2).split(" | "); return [x.replace(a, "").trim(), y.replace(b, "").trim()]; });

const svcFile = "lib/services.ts";
let svc = fs.readFileSync(svcFile, "utf8");
const start = svc.indexOf(`  {\n    slug: "${slug}"`);
if (start < 0) throw new Error("brak usługi " + slug);
let end = svc.indexOf("\n  },\n", start);
end = end + "\n  },\n".length;
const old = svc.slice(start, end);
const keep = (re) => { const m = old.match(re); return m ? m[0] : null; };
const title = keep(/^    title: .*$/m);
const headings = keep(/^    headings: .*$/m);
const lead = section("LEAD", "INTRO");
const intro = section("INTRO", "KORZYŚCI").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const bullets = pipe(section("KORZYŚCI", "PROCES"), "Tytuł:", "Treść:");
const proc = pipe(section("PROCES", "FAQ"), "Tytuł:", "Treść:");
const faq = pipe(section("FAQ", "CTA"), "P:", "O:");
const entry = `  {
    slug: "${slug}",
${title}
    metaTitle: ${q(field("METATITLE"))},
    metaDescription:
      ${q(field("METADESCRIPTION"))},
    h1: ${q(field("H1"))},
${headings ? headings + "\n" : ""}    lead:
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
svc = svc.slice(0, start) + entry + svc.slice(end);
fs.writeFileSync(svcFile, svc);

// blok
const heading = B.split("\n")[0].replace(/^# /, "").trim();
const parts = B.split(/\n## /);
const introB = parts[0].split("\n").slice(1).join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const slugify = (h) => h.toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60).replace(/-$/, "");
const sections = parts.slice(1).map((p) => {
  const [h, ...rest] = p.split("\n");
  const paras = rest.join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
  const sec = { id: slugify(h), heading: h.trim(), body: [] };
  let after = false;
  for (const para of paras) {
    if (para.startsWith("| ")) {
      const rows = para.split("\n").filter(Boolean).map((r) => r.replace(/^\|\s*|\s*\|$/g, "").split(" | ").map((c) => c.trim()));
      sec.table = { caption: h.trim(), head: rows[0], rows: rows.slice(1) };
      after = true;
    } else if (para.startsWith("- ")) {
      sec.list = para.split("\n").map((l) => l.replace(/^- /, "").trim());
      after = true;
    } else if (after) (sec.outro ||= []).push(para);
    else sec.body.push(para);
  }
  return sec;
});
const blokFile = "lib/seoBlocks.ts";
let blk = fs.readFileSync(blokFile, "utf8");
const bs = blk.indexOf(`  "${slug}": {`);
if (bs < 0) throw new Error("brak bloku " + slug);
const rest = blk.slice(bs + 5);
const nextKey = rest.search(/\n  "[a-z0-9-]+": \{|\n\};/);
const be = bs + 5 + nextKey + 1;
const newBlk = `  "${slug}": ${JSON.stringify({ heading, intro: introB, sections }, null, 2).replace(/\n/g, "\n  ")},\n`;
blk = blk.slice(0, bs) + newBlk + blk.slice(be);
fs.writeFileSync(blokFile, blk);
console.log(slug, "| intro", intro.length, "korzyści", bullets.length, "proces", proc.length, "faq", faq.length, "| blok sekcji", sections.length, "tabel", sections.filter((s) => s.table).length);
