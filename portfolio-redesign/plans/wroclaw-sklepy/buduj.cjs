const fs = require("fs");
const path = require("path");
const dir = __dirname;
const raw = fs.readFileSync(path.join(dir, "gpt-wynik.txt"), "utf8").replace(/^﻿/, "");

const get = (k) => {
  const m = raw.match(new RegExp("^" + k + ":\\s*(.*)$", "m"));
  if (!m) throw new Error("brak " + k);
  return m[1].trim();
};
const pairs = (prefix, n) =>
  Array.from({ length: n }, (_, i) => {
    const [t, b] = get(prefix + "_" + (i + 1)).split(" | ");
    return [t.trim(), b.trim()];
  });

const fix = (s) =>
  s
    .replace(
      "Sklepy WooCommerce Wrocław to usługa, którą realizuję jako niezależny programista WordPress i WooCommerce.",
      "Sklepy WooCommerce we Wrocławiu tworzę jako niezależny programista WordPress i WooCommerce."
    )
    .replace("W latach 2020 do 2022", "W latach 2020-2022")
    .replace(
      "Tworzenie sklepów WooCommerce Wrocław opieram na własnym kodzie",
      "Sklepy WooCommerce opieram na własnym kodzie"
    )
    .replace("Wdrożenie WooCommerce Wrocław może obejmować", "Wdrożenie WooCommerce może obejmować")
    .replace(/(\d+) do (\d+) tygodni/g, "$1-$2 tygodni");

const intro2 = fix(get("WSTĘP_2"))
  .replace("W sklepie Części Jaworscy", "W sklepie [Części Jaworscy](/projekty/czesci-jaworscy)")
  .replace("W Kosmotece,", "W [Kosmotece](/projekty/kosmoteka),");
const intro3 = fix(get("WSTĘP_3"))
  .replace("integracje z BaseLinkerem i Allegro", "[integracje z BaseLinkerem i Allegro](/uslugi/integracja-woocommerce-z-baselinker)")
  .replace("feed produktowy do Google Merchant Center", "[feed produktowy do Google Merchant Center](/uslugi/google-merchant-center-woocommerce)");
for (const [s, l] of [[intro2, "Jaworscy"], [intro2, "Kosmotece"], [intro3, "baselinker"], [intro3, "merchant"]])
  if (!s.includes("](/")) throw new Error("link nie wstawiony: " + l);

const entry = {
  slug: "sklepy-woocommerce-wroclaw",
  title: "Sklepy WooCommerce Wrocław",
  local: { city: "Wrocław" },
  keyword: "sklepy WooCommerce Wrocław",
  metaTitle: "Sklepy WooCommerce Wrocław | Marcin Siwonia, freelancer",
  metaDescription: get("META_DESCRIPTION"),
  h1: get("H1"),
  lead: fix(get("LEAD")),
  intro: [fix(get("WSTĘP_1")), intro2, intro3],
  pains: pairs("PROBLEM", 4).map(([title, body]) => ({ title, body: fix(body) })),
  mustHave: pairs("ELEMENT", 6).map(([title, body]) => ({ title, body: fix(body) })),
  stack: pairs("TECH", 4).map(([label, body]) => ({ label, body: fix(body) })),
  pricing: { time: "6-14 tygodni", note: fix(get("KOSZT_OPIS")) + " " + fix(get("CZAS")) },
  headings: {
    pains: get("H2_PROBLEMY"),
    mustHave: get("H2_CO_DOSTAJESZ"),
    cases: "Sklepy WooCommerce z mojego portfolio",
    stack: get("H2_TECHNOLOGIE"),
    pricing: get("H2_CZAS_I_KOSZT"),
    faq: get("H2_FAQ").replace("Wrocław, najczęstsze pytania", "Wrocław: pytania"),
  },
  process: pairs("KROK", 5).map(([title, body], i) => ({ step: "0" + (i + 1), title, body: fix(body) })),
  notFor: [1, 2, 3].map((i) => fix(get("NIE_" + i))),
  faq: Array.from({ length: 9 }, (_, i) => {
    const [q, a] = get("FAQ_" + (i + 1)).split(" | ");
    return { q: q.trim(), a: fix(a.trim()) };
  }),
  cta: get("CTA"),
};

const all = JSON.stringify(entry);
if (/[–—]/.test(all)) throw new Error("półpauza/pauza w tekście");
if (/\bwarto\b/i.test(all)) throw new Error("słowo warto");
if (entry.metaTitle.length > 65) throw new Error("metaTitle za długi");

const ts = "  " + JSON.stringify(entry, null, 2).replace(/\n/g, "\n  ").replace(/"([a-zA-Z]+)":/g, "$1:") + ",\n";
fs.writeFileSync(path.join(dir, "entry.ts.txt"), ts);
console.log("OK", ts.length, "znaków, metaTitle", entry.metaTitle.length, "desc", entry.metaDescription.length);
