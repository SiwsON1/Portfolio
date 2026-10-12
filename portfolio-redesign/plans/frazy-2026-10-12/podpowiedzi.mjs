// node podpowiedzi.mjs seeds.txt > wynik.txt — podpowiedzi Google (pl) dla fraz z pliku, plus warianty z literami a-z
import fs from "fs";
const seeds = fs.readFileSync(process.argv[2], "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
const deep = process.argv[3] === "az";
const get = async (q) => {
  const r = await fetch("https://suggestqueries.google.com/complete/search?client=firefox&hl=pl&gl=pl&q=" + encodeURIComponent(q));
  const buf = Buffer.from(await r.arrayBuffer());
  const txt = new TextDecoder("utf-8").decode(buf);
  try { return JSON.parse(txt)[1]; } catch { return []; }
};
const all = new Set();
for (const s of seeds) {
  const qs = deep ? [s, ...[..."abcdefghijklmnoprstuwz"].map((l) => s + " " + l)] : [s];
  for (const q of qs) {
    for (const x of await get(q)) all.add(x);
    await new Promise((r) => setTimeout(r, 150));
  }
}
console.log([...all].sort().join("\n"));
