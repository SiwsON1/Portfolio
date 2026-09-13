# Usunięcie cen ze stron sprzedażowych

Data: 2026-09-01. Decyzja usera: **na stronach sprzedażowych nie ma być żadnych cen.**
Zamiast liczby: wycena ustalana indywidualnie po briefie, z zaproszeniem do kontaktu.

Powód: widełki na stronie pochodziły z researchu cenników konkurencji, a nie ze stawek
Marcina. Były zawyżone (np. 5-9 tys. zł za stronę kancelarii, 18-35 tys. za stronę firmową),
co odbijało klientów, którzy by kupili.

## Zakres

W zakresie:
- 8 landingów branżowych (`lib/industries.ts`, `app/[branza]/page.tsx`)
- 13 stron usług (`lib/services.ts`)
- money page `/audyt-wcag` (`lib/wcag.ts`, `app/audyt-wcag/page.tsx`)
- `app/llms.txt/route.ts` (linijka z cenami audytu podawana modelom AI)

Poza zakresem:
- **blog (`lib/posts.ts`) zostaje nietknięty.** To ceny rynkowe w treści poradnikowej,
  nie cennik Marcina. Post „Ile kosztuje strona na Next.js" jest w top 5 i wycięcie
  liczb by go wypatroszyło.

## Kryteria akceptacji

1. `grep -nE '[0-9][ .]?[0-9]{3} zł|tys\. zł|zł netto|zł/h|za godzinę'` na
   `lib/industries.ts`, `lib/services.ts`, `lib/wcag.ts`, `app/audyt-wcag/page.tsx`,
   `app/llms.txt/route.ts`, `app/[branza]/page.tsx` zwraca **zero trafień**
2. W JSON-LD żadnej ze stron nie ma `offers`, `priceSpecification`, `minPrice`,
   `maxPrice`, `priceCurrency`
3. `npx next build` przechodzi bez błędów typów
4. Nagłówki i pytania FAQ typu „Ile kosztuje strona dla X" **zostają bez zmian**
   (to realne frazy wyszukiwane), zmienia się tylko odpowiedź
5. Nic nie jest dopisane z głowy: żadnych nowych faktów, terminów, gwarancji ani
   liczb. Wolno tylko usuwać zdania z cenami i sklejać resztę w poprawną polszczyznę
6. Czasy realizacji (`pricing.time`, „4-6 tygodni") **zostają**, to nie jest cena

## Stan wyjściowy: UWAGA, repo jest w połowie zmiany

W `app/[branza]/page.tsx` usunięty został już blok `const priceBounds = (() => {...})()`,
ale obiekt `serviceSchema` **nadal się do niego odwołuje** w `offers.priceSpecification`.
Build jest w tej chwili zepsuty. Pierwszy krok naprawia właśnie to.

## Kroki

### 1. `app/[branza]/page.tsx`
- usunąć całe pole `offers: {...}` z `serviceSchema` (to ono referuje `priceBounds`)
- pasek faktów: usunąć pierwszą komórkę („Widełki ↓" + `ind.pricing.range`),
  siatkę `sm:grid-cols-3` zmienić na `sm:grid-cols-2`, poprawić bordery i paddingi
  tak, żeby dwie pozostałe komórki („Czas realizacji", „Realizacje w tej branży")
  wyglądały spójnie
- sekcja `#wycena`: usunąć wielki akapit z `{ind.pricing.range}`.
  Zostaje nagłówek, `Realizacja {ind.pricing.time}`, `{ind.pricing.note}` i lista
  `deliverables`
- podpis nad listą deliverables: `W tej cenie` -> `W zakresie wdrożenia`
- tekst w aside: `Widełki, nie „zapytaj o cenę".` -> `Zakres i termin, wycena po briefie.`

### 2. `lib/industries.ts`
- z typu `pricing` usunąć pole `range`; usunąć je z wszystkich 8 obiektów
- `pricing.note` x8: usunąć zdania zawierające kwoty. Zdanie pierwsze, wyliczające
  co wpływa na wycenę, zostaje. Na końcu dodać jedno zdanie w brzmieniu:
  `Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.`
- FAQ „Ile kosztuje…" x8: pytanie zostaje, odpowiedź przepisać tak, żeby wymieniała
  te same czynniki wyceny co dotąd, ale bez kwoty, i kończyła się zaproszeniem
  do kontaktu po wycenę

### 3. `lib/services.ts`
- odpowiedzi FAQ z cenami (linie ok. 55, 102, 151, 199, 246-247, 338, 411, 493, 573,
  633, 735) oraz zdania z cenami w treści sekcji (ok. 211, 216, 357): usunąć kwoty
- gdzie cena była całą treścią odpowiedzi, zastąpić opisem tego, co wpływa na wycenę,
  **wyłącznie na podstawie faktów już obecnych w tym pliku** (zakres, liczba podstron,
  integracje, technologia), plus zdanie o wycenie po briefie
- uwaga na `sklepy-internetowe-woocommerce`, `nowoczesna-strona-firmowa-2026`,
  `aplikacje-react` (stawka godzinowa 220 zł netto i pakiet 20h) oraz
  `przyspieszanie-stron-wordpress` (audyt 300 zł odliczany od wdrożenia)

### 4. `lib/wcag.ts` i `app/audyt-wcag/page.tsx`
- z `WCAG_CENNIK` usunąć pole `price` (3 pozycje)
- w `app/audyt-wcag/page.tsx` usunąć render `{p.price}` i całe `offers` z JSON-LD;
  kolumna, w której stała cena, zostaje z samym czasem realizacji
- sprawdzić resztę treści strony pod kątem kwot w prozie

### 5. `app/llms.txt/route.ts`
- z linii o audycie WCAG usunąć `4000-6000 zł` i `6000-10 000 zł`,
  zostawić zakres merytoryczny i czas realizacji

## Edge case'y

- `pricing.range` jest polem wymaganym w typie: usunięcie z typu i z 8 obiektów musi
  iść razem, inaczej build padnie
- po usunięciu komórki z paska faktów zostają dwie: na mobile to dalej jeden słupek,
  na `sm` i wyżej muszą być dwie równe kolumny bez wiszącego prawego bordera
- „Realizacje w tej branży: jeszcze żadnej" dla influencerów i streamerów **zostaje
  jak jest** w tym zadaniu, to osobna decyzja
- nie ruszać `lib/posts.ts`
- nie zmieniać `metaTitle` ani `metaDescription`, nawet jeśli zawierają słowo „cena"
