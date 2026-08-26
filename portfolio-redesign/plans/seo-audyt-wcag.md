# Plan SEO: /audyt-wcag/

Money page numer 1 z routemapy. Data: 2026-08-25.
Research konkurencji i fakty prawne: zweryfikowane, źródła na końcu.

## Pozycjonowanie strony

Odbiorca: właściciel lub manager w firmie, która **już wie, że obowiązek ją dotyczy**,
i szuka wykonawcy. Nie zaczynamy straszakiem, bo tak robi cała konkurencja i wszyscy
brzmią identycznie. Zaczynamy od zakresu, ceny i dowodu. Kwalifikacja prawna zostaje,
ale jako narzędzie w środku strony, dla tych, którzy jeszcze nie wiedzą.

**Zdanie pozycjonujące:** audytuję i naprawiam w jednym. Audytor za 999 zł oddaje raport
z 60 błędami i znika, a klient i tak musi znaleźć programistę. Jestem obiema stronami tej transakcji.

## Frazy

| rola | fraza | uwagi |
|---|---|---|
| główna | audyt WCAG | w URL, H1, title, pierwsze zdanie |
| poboczna 1 | audyt dostępności cyfrowej | równie mocna, synonim, wchodzi w H2 i lead |
| poboczna 2 | audyt dostępności strony internetowej | dłuższy wariant, wchodzi w H2 |
| cenowa | ile kosztuje audyt WCAG, audyt WCAG cena, cennik | **osobne H2**, tam jest największa luka rynkowa |
| kwalifikacyjna | kogo dotyczy Europejski Akt o Dostępności, czy sklep musi spełniać WCAG | H2 z drzewkiem |
| standardowa | WCAG 2.1 AA, WCAG 2.2, EN 301 549 | w tabeli faktów i FAQ |
| ratunkowa | kary za brak dostępności, kontrola dostępności | FAQ, luka rynkowa |

Frazy wykluczone, żeby nie kanibalizować: „deklaracja dostępności" jako fraza główna
(to reżim podmiotów publicznych, osobny temat, ewentualnie osobny wpis).

## Meta

- **URL:** `/audyt-wcag/`
- **metaTitle** (max 60 znaków, fraza na początku): `Audyt WCAG 2.1 AA, cena i zakres | Marcin Siwonia`
- **metaDescription** (145-155, BLUF, konkret zamiast obietnicy): zawiera cenę wprost
  i różnicę audyt kontra naprawa. Cena w opisie to przewaga, bo agencje kwot nie podają.

## Struktura H2 (każdy pod frazę, nie pod efekt copywriterski)

1. **Co obejmuje audyt WCAG** — zakres, deliverable, format raportu
2. **Ile kosztuje audyt WCAG** — widełki wprost, czynniki wyceny, re-audyt
3. **Czy Twoja firma musi spełniać WCAG** — drzewko kwalifikacji, próg mikroprzedsiębiorcy
4. **Jak przebiega audyt WCAG, krok po kroku** — proces z czasami
5. **Co sprawdzam: 50 kryteriów WCAG 2.1 na poziomie AA** — tabela, nikt tego nie ma
6. **Audyt WCAG to nie to samo co naprawa** — sekcja różnicująca, sedno oferty
7. **Podstawa prawna: EAA i ustawa z 26 kwietnia 2024** — tabela faktów z datami i kwotami
8. **Czego audyt WCAG nie obejmuje** — odsiew, buduje zaufanie, nikt tego nie robi
9. **Pytania o audyt WCAG** — FAQ, 12 pytań

## Atrybuty EAV do podania wprost

Konkurencja podaje ceny i czasy. **Nie podaje** liczby kryteriów, normy z wersją,
kwoty kary ani progu mikroprzedsiębiorcy. To nasza przewaga w AI Overviews.

| atrybut | wartość |
|---|---|
| liczba kryteriów WCAG 2.1 A+AA | 50 (A: 30, AA: +20) |
| liczba kryteriów WCAG 2.2 A+AA | 56 (9 nowych, 1 usunięte) |
| norma zharmonizowana | EN 301 549 V3.2.1 (2021-03), zawiera WCAG 2.1 AA |
| obowiązuje od | 28 czerwca 2025 |
| podstawa prawna | ustawa z 26.04.2024, Dz.U. 2024 poz. 731 |
| próg zwolnienia | mikroprzedsiębiorca: mniej niż 10 osób ORAZ obrót lub suma bilansowa ≤ 2 mln EUR |
| kara maksymalna | 10-krotność przeciętnego wynagrodzenia, w 2026 ok. 89 036 zł, nie więcej niż 10% obrotu |
| okres przejściowy, umowy | do 28 czerwca 2030 |
| cena audytu | podana wprost, widełki plus czynniki |
| czas realizacji | podany w dniach roboczych |

## Trzy pułapki, których nie wolno powtórzyć

Powielane w całym polskim internecie, część konkurencji wprowadza w błąd:

1. **Nie mieszać ustawy z 2019 (podmioty publiczne) z ustawą z 2024 (przedsiębiorcy).**
   Kary 10 000 zł i 5 000 zł należą do reżimu publicznego. Cytowanie ich przy e-commerce to błąd.
2. **Nie pisać, że WCAG 2.2 jest obowiązkowe.** Prawnie operacyjne jest WCAG 2.1 AA
   przez normę EN 301 549. WCAG 2.2 sprzedajemy jako zabezpieczenie na przyszłość.
3. **Nie pisać „deklaracja dostępności" o firmach prywatnych.** Poprawnie: informacja
   o dostępności usługi w regulaminie.

Dodatkowo: nie pisać „każdy sklep musi". Zwolnienie mikroprzedsiębiorcy jest realne i szerokie.

## Czego konkurencja nie ma, a my mamy

- lista kryteriów z numerami zamiast ogólników
- rozróżnienie dwóch reżimów prawnych
- drzewko „czy mnie to dotyczy"
- uczciwa informacja, że nakładka i widżet nie dają zgodności
- sekcja „czego audyt nie obejmuje"
- schema Service z ceną, Offer i FAQPage, praktycznie nikt tego nie ma
- audyt i naprawa jako jeden wynik

## Schema

`Service` z `offers.priceSpecification` (liczbowe min i max), `provider` Person,
`areaServed` Poland, plus `BreadcrumbList` i `FAQPage` z 12 pytaniami.
Wzorzec gotowy w `app/[branza]/page.tsx`, przeniosę go i rozszerzę.

## Linkowanie

W górę do nowej strony: FAQ branży gabinetów i klinik („Czy strona gabinetu musi
spełniać wymogi dostępności?"). Z nowej strony w dół: `/uslugi/sklepy-internetowe-woocommerce`,
`/uslugi/przyspieszanie-stron-wordpress`, `/kontakt`. Limit 3-4 linki wewnętrzne.

Wpięcie: `sitemap.ts`, `llms.txt`, `ServicesMegaMenu`, `Footer`, `MobileMenu`.

## Źródła

- ISAP Dz.U. 2024 poz. 731 (ustawa wdrażająca EAA)
- ISAP Dz.U. 2019 poz. 848 (reżim podmiotów publicznych, dla kontrastu)
- biznes.gov.pl/pl/portal/005142 (kogo dotyczy, progi)
- ETSI EN 301 549 V3.2.1
- W3C WAI, WCAG 2.1 i 2.2
- GUS, przeciętne wynagrodzenie 2025, M.P. 2026 poz. 192 (podstawa wyliczenia kary)
