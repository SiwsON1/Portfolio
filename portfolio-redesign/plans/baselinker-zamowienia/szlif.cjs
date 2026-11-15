const fs = require("fs");
const p = __dirname + "/wynik.md";
let s = fs.readFileSync(p, "utf8").replace(/\r/g, "");
const rep = (a, b) => {
  if (!s.includes(a)) throw new Error("brak: " + a.slice(0, 70));
  s = s.replace(a, b);
};

s = s.replace(/^(#{2,3}) \*\*(.+?)\*\*\s*$/gm, "$1 $2");
s = s.replace(/^LEAD: \*\*(.+?)\*\*/m, "LEAD: $1");
s = s.replace(/(\|[^\n]*\|)\n\n(?=\|)/g, "$1\n");
s = s.replace(/(\|[^\n]*\|)\n\n(?=\|)/g, "$1\n");

rep("wyjaśniam to również we wpisie BaseLinker: co to jest.", "wyjaśniam to również we wpisie [BaseLinker: co to jest](/blog/baselinker-co-to-jest).");
rep("mogę też przygotować kompletną integracja WooCommerce z BaseLinker, zamiast", "mogę też przygotować kompletną [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), zamiast");
rep("możesz zlecić mi naprawa sklepu WooCommerce.", "możesz zlecić mi [naprawę sklepu WooCommerce](/uslugi/naprawa-sklepu-woocommerce).");
rep("mogę również zapewnić opiekę nad sklepem z integracjami, obejmującą", "mogę również zapewnić [opiekę nad sklepem z integracjami](/uslugi/opieka-wordpress#cennik), obejmującą");

rep("Warto rozdzielić te przypadki, zanim", "Rozdziel te przypadki, zanim");
rep("W tym miejscu warto również zweryfikować obecność oficjalnej wtyczki Base.", "W tym miejscu sprawdź też, czy w sklepie jest oficjalna wtyczka Base.");
rep("Dlatego zawsze warto sprawdzić rzeczywisty status", "Dlatego zawsze sprawdzaj rzeczywisty status");
rep(
  "Przy okazji zwróć uwagę na wersję dokumentacji wykorzystywanej podczas wcześniejszej konfiguracji. Od WooCommerce 9.0 stare Legacy REST API nie jest już częścią rdzenia WooCommerce i wymaga osobnej wtyczki. Nie oznacza to, że musisz ją instalować. Najpierw ustal, z którego mechanizmu korzysta Twoje połączenie.",
  "Jeśli połączenie konfigurował ktoś dawno temu, sprawdź też, czy nie opiera się na starym Legacy REST API. Od WooCommerce 9.0 nie jest ono częścią rdzenia i wymaga osobnej wtyczki. Obecna integracja Base korzysta ze zwykłego REST API, więc zwykle wystarczy połączenie na nowych kluczach."
);

if (/[–—]/.test(s)) throw new Error("pauzy");
const links = (s.match(/\]\(\//g) || []).length;
fs.writeFileSync(p, s);
console.log("ok, linki:", links, "warto:", (s.match(/\bwarto\b/gi) || []).length);
