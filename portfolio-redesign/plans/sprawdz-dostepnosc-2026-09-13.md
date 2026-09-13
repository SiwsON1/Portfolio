# Narzędzie /sprawdz-dostepnosc (lead magnet WCAG)

Data: 2026-09-13. Źródło: ROUTEMAPA 1.2. Wpis z danymi: `/blog/dostepnosc-woocommerce`.

## Cel

Właściciel sklepu wkleja adres strony i w kilka sekund dostaje wynik automatycznych testów
WCAG ze statycznego HTML, z przykładami i poprawkami. Pełna lista idzie na e-mail, a Marcin dostaje
leada z adresem strony i wynikiem. Ten sam silnik posłuży później do skanu listy sklepów pod outreach.

## Architektura

- `lib/wcag-scan/fetch.ts`: bezpieczne pobranie HTML
- `lib/wcag-scan/checks.ts`: czyste funkcje sprawdzające, wejście string HTML + URL, wyjście lista wyników
- `app/api/scan-wcag/route.ts`: POST `{ url }` → wynik skrócony; POST `{ url, email, consent }` → wysyłka pełnego raportu
- `app/sprawdz-dostepnosc/page.tsx` + `components/scan/ScanTool.tsx`: UI
- Parser: `node-html-parser` (tylko serwer)

## Bezpieczeństwo (warunek konieczny)

- tylko `http:` i `https:`, porty 80/443 albo domyślne
- rozwiązanie DNS przed pobraniem i blokada adresów prywatnych, loopback, link-local, CGNAT, multicast,
  IPv6 ULA/link-local, `localhost`, adresów IP w notacjach dziesiętnych/ósemkowych
- przekierowania obsługiwane ręcznie (maks. 3), każdy cel sprawdzany tak samo
- limit czasu 8 s, limit rozmiaru 3 MB (przerwanie strumienia), tylko `text/html`
- limit zapytań: 5 skanów na 10 min na IP (w pamięci instancji, wystarczy przeciw prostemu nadużyciu)
- honeypot w formularzu e-mail, walidacja e-maila, wymagany checkbox zgody
- żadnego wykonywania JS ze strony, żadnej przeglądarki

## Testy (deterministyczne, statyczny HTML)

Każdy wynik: `id`, `title` (po polsku), `wcag` (kryterium), `severity` (krytyczny/poważny/umiarkowany),
`count`, `examples` (maks. 3 fragmenty HTML do 160 znaków), `fix` (jedno zdanie po polsku).

1. `html-lang`: brak albo pusty `lang` na `<html>` (3.1.1)
2. `document-title`: brak albo pusty `<title>` (2.4.2)
3. `image-alt`: `<img>` bez atrybutu `alt` (1.1.1); `role="presentation"`/`aria-hidden="true"` zwalnia
4. `image-alt-filename`: alt wyglądający jak nazwa pliku (`.jpg`, `.png`, `IMG_1234`, `DSC`) (1.1.1)
5. `input-label`: `input` (bez hidden/submit/button/image/reset), `select`, `textarea` bez `<label for>`,
   bez owijającego `<label>`, bez `aria-label`/`aria-labelledby`/`title` (1.3.1, 4.1.2)
6. `link-name`: `<a href>` bez tekstu, bez `aria-label`/`aria-labelledby`/`title` i bez `img[alt]` w środku (2.4.4)
7. `button-name`: `<button>` bez tekstu i bez nazwy jak wyżej (4.1.2)
8. `link-text-generic`: tekst linku z listy: „kliknij tutaj”, „tutaj”, „więcej”, „czytaj więcej”,
   „zobacz więcej”, „link”, „kliknij” (2.4.4), waga umiarkowana
9. `heading-order`: brak `h1` oraz przeskoki poziomów (np. h2 → h4) (1.3.1), waga umiarkowana
10. `duplicate-id`: powtórzone `id` (4.1.1 w 2.1), waga umiarkowana
11. `frame-title`: `<iframe>` bez `title` (4.1.2)
12. `table-headers`: `<table>` z danymi (więcej niż 1 wiersz) bez żadnego `<th>` (1.3.1)
13. `meta-viewport`: `user-scalable=no` albo `maximum-scale` < 2 (1.4.4)
14. `media-autoplay`: `<video autoplay>` albo `<audio autoplay>` bez `muted` (1.4.2)
15. `aria-role`: wartość `role` spoza listy ról WAI-ARIA 1.2 (4.1.2)

Wynik punktowy: 100 minus (krytyczny 12, poważny 6, umiarkowany 2) za każdy **rodzaj** błędu,
minimum 0. Liczba wystąpień nie obniża wyniku ponad rodzaj (inaczej duże sklepy zawsze mają 0).

## Czego skan NIE sprawdzi (musi być na ekranie wyniku)

Kontrast, obsługa klawiaturą, pułapki fokusa, kolejność czytania, sens tekstów alternatywnych,
treści dokładane przez JavaScript po załadowaniu. Komunikat: automat pokrywa tylko część kryteriów.
**Nigdy nie pisać, że dobry wynik oznacza zgodność z ustawą.**

## Ekran wyniku i bramka e-mail

- widoczne od razu: wynik punktowy, liczba problemów wg wagi, **3 najpoważniejsze problemy z przykładem i poprawką**
- pełna lista: po podaniu e-maila i zaznaczeniu zgody → mail przez Resend do użytkownika (HTML z tabelą)
  + powiadomienie do `marcin.siwonia.firma@gmail.com` z adresem strony, e-mailem i wynikiem
- zgoda: „Chcę dostać pełny raport na e-mail. Marcin Siwonia może odpisać w sprawie wyników.
  Szczegóły w polityce prywatności.”
- polityka prywatności: dopisać sekcję o narzędziu (dane: adres strony, e-mail, wynik; podstawa: zgoda)

## UI

Styl serwisu (DESIGN.md). Formularz: jedno pole URL z etykietą, przycisk min. 52 px, stan ładowania
z `aria-live`, błędy przy polu z `aria-invalid`. Wynik: liczba w Fraunces, lista problemów jako
`<details>` albo prosta lista. Strona sama musi przejść axe z 0 naruszeń na 1440 i 375.

Treść strony pod frazę informacyjno-narzędziową „sprawdź dostępność strony” / „test dostępności strony WCAG”.
Anty-kanibalizacja: `/audyt-wcag` bierze „audyt WCAG”. Link z narzędzia do audytu i do wpisu.

## Kryteria akceptacji

1. `npx next build` przechodzi, `node scripts/test-wcag-scan.mjs` przechodzi (testy na fixturach HTML)
2. SSRF: `http://127.0.0.1`, `http://localhost:3197`, `http://169.254.169.254`, `http://[::1]`,
   `http://2130706433`, `http://10.0.0.1`, `file:///etc/passwd` → odrzucone
3. skan `https://www.marcinsiwonia.pl` < 5 s, wynik sensowny
4. mail z pełnym raportem dochodzi (test na własny adres)
5. axe 0 naruszeń na stronie narzędzia, zrzuty 1440/768/375
