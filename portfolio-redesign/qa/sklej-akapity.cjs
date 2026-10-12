// node qa/sklej-akapity.cjs <plik.md>
// Skleja akapity rozbite przez pogrubienia przy kopiowaniu z ChatGPT: akapit zaczynający się małą literą
// lub interpunkcją dołącza do poprzedniego; krótki fragment po dwukropku też.
const fs = require("fs");
const f = process.argv[2];
const paras = fs.readFileSync(f, "utf8").replace(/\r/g, "").split(/\n{2,}/);
const out = [];
const special = (p) => /^(#|\||- |\d+\. |```|[A-Z]+:|FAQ:|===)/.test(p);
for (const p of paras) {
  const prev = out[out.length - 1];
  if (prev !== undefined && !special(p) && !special(prev)) {
    if (/^[,.;:)!?]/.test(p)) { out[out.length - 1] = prev + p; continue; }
    if (/^[a-ząćęłńóśźż]/.test(p)) { out[out.length - 1] = prev + " " + p; continue; }
    if (/:$/.test(prev) && prev.length < 60) { out[out.length - 1] = prev + " " + p; continue; }
    if (!/[.?!:”"]$/.test(prev)) { out[out.length - 1] = prev + " " + p; continue; }
  }
  out.push(p);
}
fs.writeFileSync(f, out.join("\n\n"));
console.log(paras.length, "->", out.length);
