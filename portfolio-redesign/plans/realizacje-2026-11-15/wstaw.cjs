// node wstaw.cjs <slug> <wynik.md> '<json: [[szukany tekst, zamiana], ...]>'
// Podmienia description i body realizacji w lib/projects.ts wynikiem z ChatGPT (format === REALIZACJA ===).
const fs = require("fs");
const path = require("path");
const [slug, src, linksJson] = process.argv.slice(2);
const links = JSON.parse(linksJson || "[]");
let raw = fs.readFileSync(src, "utf8").replace(/^﻿/, "").replace(/\r/g, "").replace(/[–—]/g, "-");
for (const [a, b] of links) {
  if (!raw.includes(a)) throw new Error("brak frazy do linku: " + a);
  raw = raw.replace(a, b);
}
const desc = (raw.match(/^DESCRIPTION:\s*(.+)$/m) || [])[1];
if (!desc) throw new Error("brak DESCRIPTION");
const bodyRaw = raw.slice(raw.indexOf("BODY:") + 5);
const body = bodyRaw
  .split(/\n+/)
  .map((l) => l.trim())
  .filter(Boolean)
  .map((l) => (l.startsWith("#") ? "## " + l.replace(/^#+\s*/, "") : l));
if (body.length < 5) throw new Error("za krótkie body");
if (/\bwarto\b/i.test(raw)) console.warn("UWAGA: jest słowo warto");

const f = path.join(__dirname, "../../lib/projects.ts");
let s = fs.readFileSync(f, "utf8");
const start = s.indexOf(`slug: "${slug}",`);
if (start < 0) throw new Error("brak projektu " + slug);
const end = s.indexOf("stack:", start);
let block = s.slice(start, end);
block = block.replace(/description:\s*\n?\s*"(?:[^"\\]|\\.)*",/, `description:\n      ${JSON.stringify(desc)},`);
const bodyTs = "body: [\n" + body.map((p) => "      " + JSON.stringify(p) + ",").join("\n") + "\n    ],\n    ";
if (/body:\s*\[/.test(block)) block = block.replace(/body:\s*\[[\s\S]*?\n    \],\n    /, bodyTs);
else block = block.trimEnd() + "\n    " + bodyTs;
s = s.slice(0, start) + block + s.slice(end);
fs.writeFileSync(f, s);
const words = body.join(" ").split(/\s+/).length;
console.log(JSON.stringify({ slug, opis: desc.length, akapity: body.length, slowa: words, linki: (body.join(" ").match(/\]\(\//g) || []).length }));
