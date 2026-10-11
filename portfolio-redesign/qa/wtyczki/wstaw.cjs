// Wstawia usługę tworzenie-wtyczek-wordpress do lib/services.ts i blok do lib/seoBlocks.ts z plików wynikowych ChatGPT.
const fs = require("fs");
const dir = "plans/research-wtyczki-2026-10-11/";
const S = fs.readFileSync(dir + "wynik-strona.md", "utf8").replace(/\r/g, "");
const B = fs.readFileSync(dir + "wynik-blok.md", "utf8").replace(/\r/g, "");
const q = (s) => JSON.stringify(s);
const field = (name) => { const m = S.match(new RegExp("^" + name + ":[ \\t]*(.*)$", "m")); if (!m) throw name; return m[1].trim(); };
const section = (name, next) => { const m = S.match(new RegExp("^" + name + ":\\n([^]*?)\\n" + next + ":", "m")); if (!m) throw name; return m[1].trim(); };
const lead = section("LEAD", "INTRO");
const intro = section("INTRO", "KORZYŚCI").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const pipe = (block, a, b) => block.split("\n").filter((l) => l.startsWith("- ")).map((l) => { const [x, y] = l.slice(2).split(" | "); return [x.replace(a, "").trim(), y.replace(b, "").trim()]; });
const bullets = pipe(section("KORZYŚCI", "PROCES"), "Tytuł:", "Treść:");
const process = pipe(section("PROCES", "FAQ"), "Tytuł:", "Treść:");
const faq = pipe(section("FAQ", "CTA"), "P:", "O:");
const cta = field("CTA");
const svc = `  {
    slug: "tworzenie-wtyczek-wordpress",
    title: "Tworzenie wtyczek WordPress",
    metaTitle: ${q(field("METATITLE"))},
    metaDescription:
      ${q(field("METADESCRIPTION"))},
    h1: ${q(field("H1"))},
    headings: { bullets: "Co daje wtyczka na zamówienie", process: "Jak powstaje wtyczka WordPress", faq: "Tworzenie wtyczek WordPress: pytania" },
    lead:
      ${q(lead)},
    intro: [
${intro.map((p) => "      " + q(p) + ",").join("\n")}
    ],
    bullets: [
${bullets.map(([t, b]) => `      { title: ${q(t)}, body: ${q(b)} },`).join("\n")}
    ],
    process: [
${process.map(([t, b], i) => `      { step: "0${i + 1}", title: ${q(t)}, body: ${q(b)} },`).join("\n")}
    ],
    faq: [
${faq.map(([a, b]) => `      { q: ${q(a)}, a: ${q(b)} },`).join("\n")}
    ],
    cta: ${q(cta)},
  },
`;
// blok
const lines = B.split("\n");
const heading = lines[0].replace(/^# /, "").trim();
const parts = B.split(/\n## /);
const introB = parts[0].split("\n").slice(1).join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
const slug = (h) => h.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60).replace(/-$/, "");
const sections = parts.slice(1).map((p) => {
  const [h, ...rest] = p.split("\n");
  const paras = rest.join("\n").split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
  const sec = { id: slug(h), heading: h.trim(), body: [] };
  let after = false;
  for (const para of paras) {
    if (para.startsWith("| ")) {
      const rows = para.split("\n").map((r) => r.replace(/^\|\s*|\s*\|$/g, "").split(" | ").map((c) => c.trim()));
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
const blok = `  "tworzenie-wtyczek-wordpress": ${JSON.stringify({ heading, intro: introB, sections }, null, 2).replace(/\n/g, "\n  ")},
`;
function insert(f, anchor, text, before = true) {
  let s = fs.readFileSync(f, "utf8");
  if (s.includes('"tworzenie-wtyczek-wordpress"') && f.includes("seoBlocks")) throw "juz jest " + f;
  if (s.includes('slug: "tworzenie-wtyczek-wordpress"')) throw "juz jest " + f;
  const i = s.lastIndexOf(anchor); if (i < 0) throw "brak kotwicy " + f;
  s = s.slice(0, i) + text + s.slice(i);
  fs.writeFileSync(f, s);
  console.log("ok", f);
}
insert("lib/services.ts", "];\n\nexport const servicesIndex", svc);
insert("lib/seoBlocks.ts", "};\n", blok);
console.log(bullets.length, process.length, faq.length, intro.length, sections.length);
