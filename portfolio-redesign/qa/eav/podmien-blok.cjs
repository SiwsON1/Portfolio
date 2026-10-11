// Podmienia blok SEO w lib/seoBlocks.ts na wynik z ChatGPT (Markdown: # nagłówek, intro, ## sekcje, listy „- ”, tabela „| ”).
// node qa/eav/podmien-blok.cjs <slug> <plik-blok.md>
const fs = require("fs");
const [slug, fBlok] = process.argv.slice(2);
const B = fs.readFileSync(fBlok, "utf8").replace(/\r/g, "");
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
const f = "lib/seoBlocks.ts";
let blk = fs.readFileSync(f, "utf8");
const bs = blk.indexOf(`  "${slug}": {`);
if (bs < 0) throw new Error("brak bloku " + slug);
const rest = blk.slice(bs + 5);
const nextKey = rest.search(/\n  "[a-z0-9-]+": \{|\n\};/);
const be = bs + 5 + nextKey + 1;
blk = blk.slice(0, bs) + `  "${slug}": ${JSON.stringify({ heading, intro: introB, sections }, null, 2).replace(/\n/g, "\n  ")},\n` + blk.slice(be);
fs.writeFileSync(f, blk);
console.log(slug, "| blok sekcji", sections.length, "tabel", sections.filter((s) => s.table).length);
