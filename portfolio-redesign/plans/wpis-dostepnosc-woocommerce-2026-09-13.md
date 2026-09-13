# Wpis: dostępność WooCommerce, błędy WCAG w 110 polskich sklepach

Data: 2026-09-13. Wpis oparty na własnym skanie, nie na cudzych statystykach.
Dane surowe (z nazwami sklepów, NIE do repo): `Desktop\research-zarobki\data\skan-woocommerce-2026-09-13\`.

## Fraza i intencja

- Fraza główna: **dostępność WooCommerce** (informacyjna). Wariant: „błędy dostępności WooCommerce”.
- SERP 13.09.2026: same ogólne poradniki WCAG, zero danych o polskich sklepach WooCommerce.
- Anty-kanibalizacja: `/audyt-wcag` bierze „audyt WCAG” (transakcyjna), `/blog/wcag-2-1-aa` bierze
  „WCAG 2.1 AA” (definicja, prawo, próg, kary). Ten wpis NIE powtarza prawa ani progu, tylko linkuje.

## Metodologia (musi być we wpisie)

- Skan 13.09.2026, axe-core 4.13, reguły WCAG 2.0 i 2.1 na poziomach A i AA, Chromium, ekran 1366×900.
- Próba: 114 sklepów na WooCommerce z polskojęzyczną stroną, platforma potwierdzona w kodzie strony.
  74 znalezione przez wyszukiwarkę po domyślnych adresach WooCommerce (`/kategoria-produktu/`, `/produkt/`)
  w 38 branżach, 40 z portfoliów 13 agencji (maks. 12 z jednej). Sklepy z obu źródeł wypadły prawie
  identycznie (mediana 5 i 4 rodzaje naruszeń, krytyczne w 73% i 69%).
- 110 sklepów odpowiedziało poprawnie. Na każdym: strona główna, kategoria, karta produktu. Razem 301 stron.
- Nie skanowano koszyka ani kasy (wymagałoby dodawania produktów do koszyka).
- Automat wykrywa tylko część problemów. Nie ocenia obsługi klawiaturą, kolejności czytania ani sensu
  tekstów alternatywnych. Wynik to dolna granica.
- Nazw sklepów nie podajemy.

## Wyniki: odsetek sklepów z naruszeniem (na dowolnej z 3 stron)

| Reguła axe | Po ludzku | Sklepów | Kryterium WCAG | Waga axe |
|---|---|---|---|---|
| color-contrast | za niski kontrast tekstu | 96% | 1.4.3 | poważny |
| link-name | link bez dostępnej nazwy | 85% | 2.4.4, 4.1.2 | poważny |
| image-alt | obrazek bez tekstu alternatywnego | 35% | 1.1.1 | krytyczny |
| meta-viewport | blokada powiększania na telefonie | 31% | 1.4.4 | umiarkowany |
| link-in-text-block | link w tekście odróżniony tylko kolorem | 29% | 1.4.1 | poważny |
| nested-interactive | element klikalny w klikalnym | 26% | 4.1.2 | poważny |
| button-name | przycisk bez dostępnej nazwy | 24% | 4.1.2 | krytyczny |
| list | błędna struktura listy | 18% | 1.3.1 | poważny |
| label | pole formularza bez etykiety | 16% | 4.1.2 | krytyczny |
| aria-allowed-attr | niedozwolony atrybut ARIA | 15% | 4.1.2 | krytyczny |
| aria-hidden-focus | ukryty element dostępny z klawiatury | 13% | 4.1.2 | poważny |
| select-name | lista rozwijana bez etykiety | 11% | 4.1.2 | krytyczny |

Rozkład:
- 2 sklepy na 110 bez żadnego wykrytego naruszenia
- mediana: 5 różnych rodzajów naruszeń na sklep, 96 elementów z błędem na 3 stronach
- 70% sklepów ma co najmniej jedno naruszenie o wadze krytycznej, 98% poważne lub krytyczne
- kontrast: mediana 73 elementów z za niskim kontrastem na sklep
- link-name: mediana 15 elementów na sklep

## Wzorce typowe dla WooCommerce (dolna granica: axe zapisywał maks. 2 przykłady na regułę na stronę)

| Wzorzec | Sklepów |
|---|---|
| zakładki na karcie produktu („Opis”, „Informacje dodatkowe”): zagnieżdżone elementy i błędne role ARIA | 24% |
| przekreślona stara cena albo cena o za niskim kontraście | 24% |
| ikony serwisów społecznościowych jako linki bez nazwy | 20% |
| link zdjęcia produktu na liście bez nazwy | 15% |
| slajdy karuzeli ukryte przed czytnikiem, ale dostępne z klawiatury | 13% |
| przycisk wyszukiwarki bez nazwy (sama ikona lupy) | 11% |
| plakietka promocji o za niskim kontraście | 10% |
| kropki i strzałki slidera bez nazwy | 6% |
| przyciski plus i minus przy ilości bez nazwy | 5% |
| lista życzeń albo porównywarka jako ikona bez nazwy | 5% |

Inne obserwacje:
- elementy z za niskim kontrastem w próbkach: linki, przyciski, plakietki, ceny, menu
- blokada powiększania to prawie zawsze `maximum-scale=1.0, user-scalable=no` w znaczniku viewport motywu
- 38% stron głównych nie ma nagłówka H1 (to nie jest samodzielne naruszenie WCAG, ale utrudnia nawigację czytnikiem)
- link „przejdź do treści” ma 39% stron głównych
- page builder słabo różnicuje wynik: Elementor (67 sklepów) krytyczne w 67%, Divi (22) w 77%,
  sklepy bez buildera (16, mała próba) w 63%. Wniosek: problem siedzi w motywach, wtyczkach i treści,
  nie w samym builderze. Nie przedstawiać buildera jako głównej przyczyny.
- nie publikować wyniku heurystyki fokusu (za mało pewna)

## Struktura

Lead (BLUF z liczbami) + sekcje H2 + FAQ 5-6. Sekcje mogą mieć pole `table` (caption, head, rows).

1. Jak sprawdziłem 110 sklepów WooCommerce (metodologia i ograniczenia)
2. Najczęstsze błędy dostępności w sklepach WooCommerce (tabela głównych reguł)
3. Kontrast: ceny, promocje i jasnoszare linki
4. Linki i przyciski bez nazwy: ikony, lupa, slidery (tabela wzorców)
5. Karta produktu: zakładki opisu, warianty, galeria
6. Blokada powiększania na telefonie
7. Obrazki bez tekstu alternatywnego
8. Czy page builder psuje dostępność sklepu
9. Co z tego wynika dla właściciela sklepu (automat to nie audyt; linki do wpisu WCAG 2.1 AA i audytu)

Przy każdym błędzie: jedno zdanie, czym grozi użytkownikowi (czytnik ekranu, słabowidzący, telefon),
i jak to naprawić w WooCommerce (np. `aria-label` na ikonie, usunięcie `user-scalable=no`, kontrast min. 4,5:1
dla zwykłego tekstu i 3:1 dla dużego).

## Zasady redakcyjne

- styl: gęsta, rzeczowa proza ekspercka, pierwsza osoba („sprawdziłem”), bez haków copywriterskich
- żadnych pauz ani myślników jako interpunkcji w prozie (tytuł i metaTitle mogą mieć)
- żadnych cen i kwot, żadnych cudzych statystyk, nic spoza tego dokumentu i `lib/wcag.ts`
- fakty prawne tylko jeśli naprawdę potrzebne i dosłownie z `lib/wcag.ts`; lepiej linkować do wpisu WCAG 2.1 AA
- linki wewnętrzne 3-4: `/audyt-wcag` (anchor „audyt WCAG”), `/blog/wcag-2-1-aa`,
  `/uslugi/sklepy-internetowe-woocommerce`, ewentualnie `/uslugi/opieka-wordpress`. Format `[anchor](/url)`.
- fraza „dostępność WooCommerce” dosłownie w pierwszym zdaniu leadu, dalej warianty
- nie nazywać sklepów, agencji ani motywów z nazwy (poza neutralnym „Elementor”, „Divi”)
