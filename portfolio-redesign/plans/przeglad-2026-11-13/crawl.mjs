// Techniczne SEO: przejście po sitemapie na żywo, kontrola każdej strony i linków wewnętrznych.
import fs from "node:fs";
const BASE = "https://www.marcinsiwonia.pl";
const sm = await (await fetch(BASE + "/sitemap.xml")).text();
const wpisy = [...sm.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>(.*?)<\/loc>/)?.[1], lastmod: m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1] ?? null,
}));
const robots = await (await fetch(BASE + "/robots.txt")).text();
const linki = new Map();
const wyniki = [];
const txt = (s) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').trim();
const kolejka = [...wpisy];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (kolejka.length) {
    const w = kolejka.shift();
    const t0 = Date.now();
    const r = await fetch(w.loc, { redirect: "manual" });
    const ms = Date.now() - t0;
    const html = r.status === 200 ? await r.text() : "";
    const head = html.slice(0, html.indexOf("</head>") + 7);
    const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
    const title = txt(head.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "");
    const desc = head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    const canon = head.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? null;
    const h1 = [...html.matchAll(/<h1[\s\S]*?<\/h1>/g)].map((m) => txt(m[0]));
    const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => {
      try { const j = JSON.parse(m[1]); const arr = j["@graph"] ?? (Array.isArray(j) ? j : [j]); return arr.map((x) => x["@type"]).flat(); } catch { return ["BLAD_JSON"]; }
    });
    const imgs = [...main.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
    for (const m of main.matchAll(/href="(\/[^"#?]*)/g)) linki.set(m[1], (linki.get(m[1]) ?? new Set()).add(w.loc));
    wyniki.push({
      url: w.loc, status: r.status, ms, kb: Math.round(html.length / 1024), lastmod: w.lastmod,
      xrobots: r.headers.get("x-robots-tag"), robotsMeta: head.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? null,
      title, titleLen: title.length, descLen: desc.length, canonOk: canon === w.loc, canon,
      h1: h1.length, h1Text: h1[0]?.slice(0, 80), ld: [...new Set(ld)],
      og: /property="og:image"/.test(head), imgBezAlt: imgs.filter((i) => !/\balt=/.test(i)).length,
      slowaMain: txt(main).split(/\s+/).length,
    });
    process.stdout.write(".");
  }
}));
const bledneLinki = [];
const doSpr = [...linki.keys()].filter((p) => !wpisy.some((w) => w.loc === BASE + p || w.loc === BASE + p.replace(/\/$/, "")));
for (const p of doSpr) {
  const r = await fetch(BASE + p, { redirect: "manual" });
  if (r.status !== 200) bledneLinki.push({ path: p, status: r.status, location: r.headers.get("location"), z: [...linki.get(p)].slice(0, 3) });
}
const sierotki = wpisy.filter((w) => { const p = w.loc.replace(BASE, "") || "/"; return !linki.has(p) && p !== "/"; }).map((w) => w.loc);
fs.writeFileSync("crawl-wynik.json", JSON.stringify({ robots, liczba: wpisy.length, wyniki, bledneLinki, sierotki }, null, 1));
console.log("\nstron", wpisy.length, "bledne linki", bledneLinki.length, "sierotki", sierotki.length);
