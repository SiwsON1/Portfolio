# Wydajność mobile, 13.09.2026

## Dane wyjściowe (produkcja, Playwright 375 px, CPU ×4, 1,6 Mbit)

| Strona | LCP | Uwagi |
|---|---|---|
| `/` | 9,3 s | TBT 14,5 s |
| `/projekty` | 10,7 s | 7,4 MB obrazów mobile, 27 MB desktop, `load` > 90 s, CLS 0,245 |
| usługi, blog, branże, WCAG | 4,5-4,9 s | fonty 577 KB |

Element LCP na **każdej** stronie: `SPAN.relative inline-block`, czyli litera „M” z `LoadingIntro`.
Overlay jest renderowany w HTML na każdej trasie i znika dopiero po hydracji.

## Zmiany

1. **LoadingIntro tylko przy twardym wejściu na `/`.** Inne trasy: komponent zwraca `null` już w SSR.
   Na `/` przy powrocie w tej samej sesji inline script ukrywa overlay przed pierwszym malowaniem
   (dziś zostaje widoczny do hydracji mimo flagi `intro-seen`).
2. **Fraunces jako `next/font/local`, przycięty.** Zmierzone na 95 stronach z sitemap: Fraunces
   renderuje się wyłącznie w wadze 400 (normal i italic); 700 tylko w niewidocznej masce SVG intra.
   `WONK` nigdzie inny niż 0. Subset: Basic Latin, Latin-1, Latin Extended-A, interpunkcja
   ogólna, strzałki. Osie `opsz` i `SOFT` zostają zmienne, `wght` przypięte do 400, `WONK` do 0.
   494 KB w 4 plikach → 156 KB w 2 plikach. Źródło: google/fonts `ofl/fraunces`, narzędzie
   `subset-font` (HarfBuzz).
3. **Sześcian `/projekty`:** surowy `<img>` z kartą 3200×2000 → `getImageProps` z `next/image`,
   szerokość 384, `sizes` pod komórkę ok. 160 px.

## Kryteria akceptacji

- build przechodzi, 0 błędów typów
- na `/uslugi/*` w HTML brak overlaya intro
- wizualnie bez zmian: zrzuty 1440/768/375 przed i po dla `/`, `/uslugi/tworzenie-stron-wordpress`, `/projekty`
- pomiar tym samym skryptem: LCP mobile na usługach < 3 s, `/projekty` obrazy < 2 MB
