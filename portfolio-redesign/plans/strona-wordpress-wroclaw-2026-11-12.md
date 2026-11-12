# Strona lokalna „Strony WordPress Wrocław” (12.11.2026)

## Cel
Złapać lokalne zapytania z GSC bez ruszania ogólnopolskich stron usług (user cofnął „Wrocław” z ich tytułów).
GSC 3 mies.: strony wordpress wrocław 74, wordpress wrocław 64, strony internetowe wordpress wrocław 28,
tworzenie wtyczek wordpress wrocław 18, tworzenie sklepów woocommerce wrocław 37, sklepy wordpress wrocław 33,
sklepy woocommerce wrocław 8. Pozycje 24-41 na stronach usług.

## Decyzje
- Jedna strona (nie trzy), żeby nie robić stron-kopii z doklejonym miastem.
- URL `/strony-wordpress-wroclaw`, H1 i H2 w języku frazy (feedback-money-page-keyword-first).
- Szablon `app/[branza]` z opcjonalnym polem `local` w typie `Industry`: bez „Branża NN/NN”, bez linków
  poprzednia/następna branża, okruszki bez „Branże”, eyebrow „Wrocław”, link wstecz do /uslugi.
  Wyłączona z huba `/branze`, z listy branż w llms.txt i llms-full.txt, z powiązań branż na usługach
  (`app/uslugi/[slug]`) i realizacjach (`app/projekty/[slug]`), z liczenia idx/prev/next. Zostaje w sitemap.
- Tekst: Mistrz Kategorii (ChatGPT) z briefem, Claude dostarcza fakty i szlifuje.
- Bez cen (decyzja 01.09). Bez obietnic spotkań na żywo, dopóki user tego nie potwierdzi.

## Fakty (tylko te)
- Siedziba firmy we Wrocławiu; 2020-2022 frontend developer w software house we Wrocławiu; od końca 2022 freelancer.
- Apartamenty Złota Grota: WordPress, Stare Miasto we Wrocławiu, rezerwacja bezpośrednia, self check-in.
- Części Jaworscy: WooCommerce, ponad 11 tys. części, BaseLinker i Allegro, przeprowadzka na nowy serwer.
- Kancelaria Piontek (Łódź) jako przykład pracy zdalnej z firmą spoza Wrocławia.
- Usługi WordPress: własny motyw bez Elementora, WooCommerce, wtyczki na zamówienie, opieka, przyspieszanie.
- Cel Lighthouse 90+ i LCP < 2,5 s, WCAG, SEO techniczne (z treści usługi tworzenie-stron-wordpress).

## Kroki
1. Top 3 Google na „strony wordpress wrocław”: pytania, które pokrywają.
2. Brief do Mistrza Kategorii, wynik do pliku, szlif (bez dashy, fakty).
3. Codex: pole `local` w typie i obsługa w szablonie oraz konsumentach (spec wyżej).
4. Claude: wpis w `lib/industries.ts` + INDUSTRY_CASES + INDUSTRY_SERVICES z tekstu z kroku 2.
5. Linki: ze stron usług WordPress i WooCommerce jedno zdanie z linkiem.
6. tsc, build, zrzuty 1440/768/375 x3, codex-review, deploy, sprawdzenie na żywo, ROUTEMAPA.

## Akceptacja
- `/strony-wordpress-wroclaw` 200, tytuł ≤ 65 znaków z frazą, brak w `/branze`, jest w sitemap.
- Strony usług bez zmian w tytułach.
