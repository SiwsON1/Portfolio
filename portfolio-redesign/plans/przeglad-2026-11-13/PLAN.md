# Przegląd marcinsiwonia.pl 13.11.2026: kanibalizacja, linkowanie, konkurencja, GEO

Dane: GSC 3 mies. (304 zapytania), graf linków z buildu (tylko <main>), top 5 Google dla 7 fraz (Gemini/agy, `konkurencja.md`, część danych NIEPEWNA).

## Kanibalizacja (GSC, zapytanie -> strony)
- migracja wordpress na next.js (124): wpis 7,0 | headless 30,2 | strona-firmowa-2026 36,2. Tytuł headless cofnięty (a3b08b5).
- ile kosztuje strona na next.js (112): wpis 6,2 | /uslugi/aplikacje-nextjs 33,1 (64 wyśw.). Usługa nie linkuje do wpisu.
- jamstack co to jest (70): /uslugi/strony-jamstack 7,5 (60) | wpis 5,7 (15). Łagodne.
- next.js co to jest: tylko wpis, poz. 47. Brak kanibalizacji, trudna fraza.
- Reszta top 25 zapytań: po jednej stronie.

## Linkowanie (linki przychodzące z treści / z bloga)
Najsłabsze usługi: audyt-sklepu 4/0, migracja-sklepu 5/0, naprawa-sklepu 5/1, konfigurator 6/0, consent-mode 6/2, merchant 7/0, wdrozenia-ai 8/1, integracje-woocommerce 9/1.
/strony-wordpress-wroclaw: 1. Brak linków usługa -> wpis: aplikacje-nextjs -> ile-kosztuje-strona-na-next-js, sklepy -> woocommerce-co-to-jest.

## Konkurencja (top 5, 35 stron)
Dla kogo 35/35, proces 32/35, długa treść 32/35, gwarancje 30/35, porównania 29/35, case studies 26/35, cennik 20/35 (opieka 5/5, strony WP 5/5), FAQ 19/35, opinie 16/35, kalkulator 7/35.
Luki u nas: opieka bez czasu reakcji/zakresu w tabeli; sklepy bez porównania WooCommerce vs Shoper/Shopify; wtyczki bez deklaracji własności kodu; brak cen (decyzja 01.09); brak opinii (user nie chce prosić).
Przewagi u nas: FAQ na wtyczkach i BaseLinkerze (konkurencja 0/5 i 2/5), realne case studies.

## GEO
OK: boty AI wpuszczone, llms.txt + llms-full, Person z sameAs, Service, FAQPage, Article z autorem.
Do poprawy: updatedAt starszy niż date (woocommerce-co-to-jest) i nieodświeżony po zmianach 12.11; llms.txt bez strony Wrocław; własne dane (skan 110 sklepów) słabo eksponowane.

## Plan
A (od razu): linki usługa->wpis i blog->usługi sklepowe, Wrocław z realizacji Złota Grota, updatedAt.
B (treść usług): opieka zakres i czas reakcji (fakty od usera), sklepy porównanie z SaaS, wtyczki własność kodu (potwierdzenie usera).
C (nowe treści): wpis „Ile kosztuje sklep WooCommerce” (52 wyśw., poz. 15-27) przez Mistrza Blogowania.
D (decyzja usera): ceny „od X zł” przynajmniej na opiece.
