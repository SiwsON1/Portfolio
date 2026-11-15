const fs = require("fs");
const f = "lib/services.ts";
let s = fs.readFileSync(f, "utf8");
const start = s.indexOf('slug: "opieka-wordpress"');
const end = s.indexOf('slug: "przyspieszanie-stron-wordpress"');
let b = s.slice(start, end);

const rep = (re, to) => {
  const m = b.match(re);
  if (!m) throw new Error("brak: " + re);
  b = b.replace(re, to);
};

rep(/metaDescription:\s*"[^"]*"/, 'metaDescription:\n      "Opieka nad stroną WordPress od 249 zł miesięcznie, cena końcowa, bez umowy na rok. Aktualizacje z kopią, monitoring i opieka nad sklepami WooCommerce."');
rep(/(\{ q: "Ile kosztuje opieka nad stroną WordPress\?", a: )"[^"]*"/, '$1"Opieka nad stroną firmową kosztuje 249 zł miesięcznie, nad sklepem WooCommerce 449 zł, a nad sklepem z integracjami, takimi jak BaseLinker, Allegro czy Google Merchant, od 749 zł. To ceny końcowe: jestem zwolniony z VAT, więc nic do nich nie doliczasz. Każda godzina ponad pakiet kosztuje 150 zł. Większe naprawy i nowe funkcje wyceniam osobno przed rozpoczęciem pracy."');
rep(/(\{ q: "Jak szybko reagujesz na awarię\?", a: )"[^"]*"/, '$1"Przy stronie firmowej odpowiadam na zgłoszenie w ciągu jednego dnia roboczego. Awarię sklepu WooCommerce zaczynam sprawdzać tego samego dnia roboczego, a w pakiecie sklepu z integracjami reaguję w ciągu 4 godzin w dni robocze między 9 a 17. Monitoring dostępności wychwytuje część problemów, zanim je zgłosisz. Nie deklaruję całodobowego dyżuru."');

const pricing = `pricing: {
      heading: "Ile kosztuje opieka nad stroną WordPress",
      note: "Podane kwoty są cenami końcowymi: jestem zwolniony z VAT, więc nic do nich nie doliczasz. Każda godzina ponad pakiet kosztuje 150 zł. Nie wymagam umowy na rok, opiekę wypowiadasz z miesięcznym wyprzedzeniem. Jeśli strona wymaga najpierw większych napraw, wyceniam je osobno, a wolne ładowanie rozwiązuję zleceniem [przyspieszenia strony WordPress](/uslugi/przyspieszanie-stron-wordpress).",
      plans: [
        { name: "Strona firmowa", price: 249, unit: "zł / mies.", features: ["Aktualizacje WordPressa, motywu i wtyczek 2 razy w miesiącu, z kopią przed i sprawdzeniem po", "Codzienna kopia zapasowa poza serwerem", "Monitoring dostępności strony", "1 godzina drobnych zmian w miesiącu"], response: "Do 1 dnia roboczego" },
        { name: "Sklep WooCommerce", price: 449, unit: "zł / mies.", featured: true, features: ["Wszystko z pakietu strony firmowej", "Testowe zamówienie po każdej aktualizacji", "Kontrola płatności i statusów zamówień", "2 godziny drobnych zmian w miesiącu"], response: "Awaria sklepu: tego samego dnia roboczego" },
        { name: "Sklep z integracjami", price: 749, from: true, unit: "zł / mies.", features: ["Wszystko z pakietu sklepu WooCommerce", "Pilnowanie synchronizacji stanów i zamówień z BaseLinkerem, Allegro i Google Merchant", "Miesięczny raport anulowań, cofniętych statusów i nieudanych płatności", "4 godziny drobnych zmian w miesiącu"], response: "Do 4 godzin w dni robocze, 9-17" },
      ],
    },
    faq: [`;
rep(/faq: \[/, pricing);

s = s.slice(0, start) + b + s.slice(end);
fs.writeFileSync(f, s);
console.log("ok");
