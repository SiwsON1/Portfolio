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

## Runda 2 (13.11): prędkość, techniczne SEO, typy stron, blog

Zrobione i LIVE (a003d48): linki aplikacje-nextjs -> wpis o koszcie, sklepy -> woocommerce-co-to-jest + naprawa + migracja, Złota Grota -> Wrocław (tylko realizacje z miasta), updatedAt 3 wpisów, strony lokalne w llms.txt, OG testu dostępności.

Techniczne SEO (crawl.mjs, 101 stron): 200 wszędzie, canonical OK, 0 noindex, title/desc OK, 1 H1, 0 złych linków, 0 sierot. Do poprawy: brak lastmod dla 72 stron (usługi, branże, realizacje), realizacje cienkie 150-330 słów.

Prędkość (Lighthouse mobile lokalnie, lh-batch.sh, psi/): nasze usługi 67-82, wpis 76, home 56 (intro, decyzja usera). Konkurencja 35-77, wyjątek intexstudio 91. CLS 0,163 na /uslugi/tworzenie-stron-wordpress: całe hero przesuwa się w 3,7 s (źródła: hwC-glow, svc-in, nagłówek), do diagnozy (Codex).

Typy stron (agy-geo-wynik.md, 15 fraz): poradnik krok po kroku 23/75 w top 5 i 39 cytatów AI, porównanie X vs Y 15/23, „ile kosztuje” 12/17, cennik 7/11, kalkulator 5/7. Strony miejskie freelancerów w obcych miastach: 0 w top 5 -> nie robimy kolejnych miast.

Popyt z podpowiedzi Google (blog-ac/): EAA co to/kogo dotyczy (11), umowa na stronę (9), prawa autorskie do strony (5+4), ile kosztuje sklep (6+3+3), własny sklep czy Allegro (5), deklaracja dostępności (wiele po 3-4), czy aktualizacja WordPress bezpieczna (4), woocommerce czy shoper/shopify (3).

Kolejka wpisów (Mistrz Blogowania, po jednym): 1 EAA kogo dotyczy + dane ze skanu 110 sklepów, 2 ile kosztuje sklep WooCommerce, 3 WooCommerce, Shoper czy Shopify, 4 umowa na stronę i prawa autorskie, 5 deklaracja dostępności, 6 własny sklep czy Allegro, 7 aktualizacja WordPress bezpiecznie.
Bez wpisu (kanibalizacja money pages): migracja z Shopera -> rozbudowa usługi migracji o etapy; BaseLinker jak połączyć -> później, po sprawdzeniu GSC usługi.
