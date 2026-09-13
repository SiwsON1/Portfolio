# ROUTEMAPA marcinsiwonia.pl

Czytaj na starcie każdej sesji przy tym projekcie.
Utworzona 2026-08-24. Dane rynkowe i źródła: `C:\Users\mahin\Desktop\research-zarobki\`.

Serwis ma dziś 13 usług w `lib/services.ts` plus landingi branżowe w `/branze/[branza]`.
Poniżej dwa nowe kierunki zarobkowe, w kolejności wynikającej z siły dowodu rynkowego.

---

## KIERUNEK 1: Dostępność cyfrowa WCAG (priorytet)

Dlaczego pierwszy: to jedyna usługa, którą klient **musi** kupić.
Obowiązek od 28.06.2025, podstawa: ustawa z 26 kwietnia 2024, Dz.U. 2024 poz. 731,
wdrażająca dyrektywę 2019/882. Zwolnieni są **mikroprzedsiębiorcy świadczący usługi**,
czyli firmy zatrudniające mniej niż 10 osób **oraz** mające obrót lub sumę bilansową
do 2 mln euro. Oba warunki muszą być spełnione naraz, a zwolnienie obejmuje usługi,
nie produkty. Wymagany standard to **WCAG 2.1 na poziomie AA** przez normę
zharmonizowaną EN 301 549 V3.2.1. Kara: do 10-krotności przeciętnego wynagrodzenia,
w 2026 około 89 000 zł, nie więcej niż 10% obrotu, poprzedzona wezwaniem do działań
naprawczych.

> **Korekta z 25.08.2026.** Wcześniejsza wersja tej sekcji zawierała trzy błędy, które
> trafiłyby na stronę sprzedażową:
> 1. Kary 10 000 zł i 5 000 zł należą do **ustawy z 2019 o podmiotach publicznych**,
>    nie do EAA. Dla firm prywatnych obowiązuje kara opisana wyżej.
> 2. Próg był podany odwrotnie: obowiązek dotyczy firm **powyżej** progu mikroprzedsiębiorcy,
>    a nie „powyżej 10 osób lub 2 mln euro" jako warunku zwolnienia.
> 3. „Deklaracja dostępności" to obowiązek podmiotów publicznych. Firma prywatna podaje
>    **informację o dostępności usługi w regulaminie**.
>
> Liczba „średnia cena audytu 9750 zł" pochodziła z content farmy. Realne ceny rynkowe
> to **499 zł do 10 000 zł**, wojna cenowa jest faktem.

**Uwaga o konkurencji (ustalone 2026-08-24).** Rynek NIE jest pusty. Dedykowane domeny:
audytwcag.pl, wcag-audyt.pl, audyt-dostepnosci.pl, audytdostepnosciwcag.pl,
dostepnastrona.pl, wcaghelper.pl, plus agencje (Logonet, Empressia, Evostudio)
i narzędzie DockWCAG z API i monitoringiem. **Wojna cenowa już trwa: audyt WCAG 2.2 AA
od 999 zł** przy średniej rynkowej 9750 zł. Dziesięciokrotny rozstrzał znaczy,
że dół rynku się commodityzuje.

Wniosek: **nie wchodzimy jako kolejny audytor**, bo w tej roli przegramy z ceną 999 zł.
Wchodzimy jako **audyt plus wdrożenie poprawek sprzedawane jako jeden wynik**,
z pozyskiwaniem przez skan wychodzący zamiast czekania na leada. Audytor za 999 zł
nie naprawi strony, a klient i tak musi znaleźć dewelopera. Jesteśmy obiema stronami
tej transakcji i to jest cała przewaga.

### 1.1. Money page `/uslugi/audyt-dostepnosci-wcag/`

- Audyt 4000-6000 zł, audyt plus wdrożenie 6000-10 000 zł, deklaracja osobno
- **Przewaga do wyeksponowania: audytuję i naprawiam.** Firmy audytorskie
  oddają raport i znikają, klient zostaje z listą 60 błędów i szuka dewelopera
- Schema Service plus FAQPage, sprawdzić kanibalizację z `sklepy-internetowe-woocommerce`

### 1.2. Narzędzie `/sprawdz-dostepnosc/` jako lead magnet

Strona z jednym polem na URL. Endpoint `app/api/scan-wcag/route.ts`
pobiera HTML i sprawdza deterministycznie, **bez przeglądarki i bez LLM**:
fetch, cheerio, własne checki, wynik z severity i konkretnym fixem per check.

Checki wykonalne ze statycznego HTML, czyli mieszczące się w limicie 10 s na Vercelu:
- brak `lang` na `<html>` (oblewa to 22,5 proc. polskich dokumentów)
- brak albo pusty `<title>`
- obrazki bez `alt`, obrazki z altem będącym nazwą pliku
- pola formularza bez `<label for>` albo `aria-label`
- linki i przyciski bez dostępnej nazwy (puste, „tutaj", „czytaj więcej")
- porządek nagłówków: brak H1, przeskoki poziomów
- zduplikowane atrybuty `id`
- `<iframe>` bez `title`
- tabele bez `<th>` i bez powiązań nagłówków
- `user-scalable=no` albo `maximum-scale=1` w viewport (blokada zoomu)
- autoodtwarzane audio i wideo
- puste albo błędne role ARIA

**Czego skan NIE sprawdzi i trzeba to napisać wprost:** kontrastu (wymaga
policzenia stylów), obsługi klawiaturą, pułapek fokusa, kolejności czytania,
sensowności opisów alternatywnych.

**To ograniczenie jest argumentem sprzedażowym, nie wadą.** Narzędzia automatyczne
wykrywają wyłącznie problemy podstawowe i dokładnie dlatego audyt kosztuje na rynku
prawie 10 tys. zł, mimo że skanery są darmowe. Płaci się za ocenę człowieka
i za podpis pod deklaracją. Komunikat na wyniku:

> Automatycznie wykryłem 23 błędy. To ta część kryteriów WCAG, którą da się
> sprawdzić maszynowo. Większości maszyna nie sprawdzi, bo wymagają testu
> klawiaturą i oceny człowieka. Pełny audyt obejmuje jedno i drugie.

**Nigdy nie pisz, że zielony wynik oznacza zgodność z ustawą.** To ryzyko prawne.

**Bramka na e-mail:** na ekranie wyniku pokazujesz wynik punktowy, liczby błędów
po severity i **trzy konkretne przykłady z linią kodu**. Reszta listy plus PDF
idzie na maila. Podpiąć pod istniejący `app/api/contact/route.ts`, Resend już
skonfigurowany i domena zweryfikowana. Jedno dodatkowe pole: adres sklepu.

**Drugie zastosowanie, ważniejsze od formularza:** ten sam silnik puszczasz
na liście cudzych sklepów, zamiast czekać, aż ktoś sam wejdzie. Skanujesz 100
sklepów z branży, dostajesz posortowaną listę tych z największą liczbą błędów
krytycznych i wiesz, do kogo napisać i co pokazać w pierwszym zdaniu maila.
Nie czekasz na leada, przychodzisz z dowodem.

### 1.3. Płatny audyt, czyli co klient dostaje za 4000-6000 zł

Uruchamiane lokalnie, nie na Vercelu: axe-core plus Playwright
(jest `playwright-skill`), przejście klawiaturą, test czytnikiem ekranu,
ocena kontrastów, ocena sensowności altów, raport z priorytetami
i kosztorysem naprawy, na końcu deklaracja dostępności.

### 1.4. Wpisy blogowe zasilające

- „Czy mój sklep musi spełniać WCAG" (kalkulator obowiązku: liczba osób i obrót)
- „Ile kosztuje dostosowanie sklepu do WCAG" (fraza cenowa, wysoka intencja)
- „Deklaracja dostępności dla sklepu internetowego, wzór i obowiązki"
- „Najczęstsze błędy dostępności w WooCommerce"

---

## KIERUNEK 2: E-commerce operacyjny, BaseLinker i Allegro

Pełny plan: `research-zarobki/plan/oferta-marcinsiwonia.md`.
Strona `/uslugi/integracja-baselinker-allegro/`, dwa pakiety.

**Ratunkowy 300-500 zł**, naprawa awarii w 24 h. Nie produkt zarobkowy,
tylko kanał pozyskania. Frazy: „BaseLinker nie pobiera zamówień", duplikaty
zamówień ze zdublowanych webhooków, wygasłe tokeny Allegro, rozjechane stany.

**Wdrożenie 2500-4000 zł plus opieka 500-900 zł/mc.** Konfiguracja, integracje,
porządek w katalogu (EAN, SKU, nazwy) przed włączeniem automatyzacji,
opisy i tytuły ofert, optymalizacja pod Trafność.

Dorzucić **porządkowanie danych GPSR** (1500-3000 zł jednorazowo). Brak danych
GPSR blokuje wystawianie ofert na Allegro, a sprzedawcy z setkami marek
duplikują je ręcznie między kontami.

**To jest ten sam klient co kierunek 1.** Sklep zatrudniający 15 osób ma
jednocześnie obowiązek WCAG i rozjechane integracje. Jeden lead, dwie usługi,
dlatego oba kierunki idą razem.

---

## Kolejność działań

**Najbliższy tydzień**
1. Potwierdzenie widełek cenowych obu kierunków
2. Decyzja o VAT i wystawienie faktury TrustLunie (wisi od 11.08)

**Tydzień 2-3**
3. Silnik skanu WCAG: endpoint plus strona `/sprawdz-dostepnosc/`
4. Money page `/uslugi/audyt-dostepnosci-wcag/`

**Tydzień 4**
5. Money page `/uslugi/integracja-baselinker-allegro/`
6. Dwa wpisy blogowe: „ile kosztuje dostosowanie do WCAG" i fraza ratunkowa BaseLinkera
7. Skan puszczony na liście 100 sklepów, pierwsze maile z dowodem

## Status

- 2026-09-13: **wdrożone zaległe zmiany z 01.09** (produkcja do 13.09 wciąż pokazywała ceny i 404 na wpisie WCAG).
  Wydajność mobile: element LCP na każdej podstronie był literą z ekranu ładowania, teraz intro tylko
  na `/`; Fraunces przycięty 494 → 156 KB; `/projekty` 27 MB obrazów → 240 KB, CLS 0,81 → 0.
  LCP mobile usług 4,7 → 2,0 s. Schema: jedna encja `/#person`, ProfilePage, ContactPage, og:image
  na wpisach/branżach/WCAG, prawdziwe `lastmod`, bio autora pod wpisami, `llms-full.txt` bez kwot.
  Plany: `plans/wydajnosc-2026-09-13.md`, `plans/schema-geo-2026-09-13.md`.
  **Do decyzji usera:** wpis `ile-kosztuje-strona-na-next-js` mówi „projekty, które realizuję:
  15-30 tys. zł” (to cennik, nie rynek); brak strony `/polityka-prywatnosci`, do której linkuje baner cookies.
- 2026-08-24: routemapa utworzona, nic jeszcze nie zaimplementowane
- 2026-09-01: **DECYZJA: na stronach sprzedażowych nie ma żadnych cen.** Widełki podane
  wcześniej pochodziły z researchu cenników konkurencji, a nie ze stawek Marcina, i były
  zawyżone (strona kancelarii 5-9 tys. zł przy realnej stawce rzędu 3 tys.). Usunięte z:
  8 landingów branżowych, 13 stron usług, `/audyt-wcag`, huba `/branze`, `llms.txt`
  oraz ze schematów JSON-LD (`offers`, `priceSpecification`). Zostają: czasy realizacji
  i kwoty kar ustawowych w `lib/wcag.ts`, bo to fakty prawne, nie cennik. Blog nietknięty.
  Plan: `plans/usuniecie-cen-2026-09-01.md`. **Nie przywracać cen bez decyzji usera.**
  Widełki wypisane w sekcjach wyżej w tym dokumencie są nieaktualne jako treść na stronę.
- 2026-09-01: pod WCAG zostaje **jedna strona usługowa** `/audyt-wcag`. Zamiast podstron
  usługowych powstał wpis `/blog/wcag-2-1-aa` (fraza informacyjna „WCAG 2.1 AA”), który
  linkuje do money page. Plan: `plans/wpis-wcag-2-1-aa-2026-09-01.md`.
- 2026-08-25: **money page numer 1 zbudowana: `/audyt-wcag/`**, plan SEO w `plans/seo-audyt-wcag.md`.
  Adres na roocie, nie pod `/uslugi/`, bo na money page URL ma być frazą. Zweryfikowane, że
  statyczna trasa wygrywa z dynamicznym segmentem `[branza]`. Wpięta w sitemap, llms.txt,
  stopkę i mega menu. Kontrola axe: 0 naruszeń WCAG A i AA na 1440 i 375 px.
  Poprawione fakty prawne w tym dokumencie, patrz korekta wyżej.
- 2026-08-25: **uwaga o adresach landingów branżowych** — ten dokument pisał wcześniej
  o `/branze/[branza]`, a realna implementacja to root-level `/[branza]`. Hub stoi pod `/branze`.
- 2026-08-25: **token `--ink-faint` podniesiony** z `oklch(48%)` na `oklch(63%)` w `app/globals.css`.
  Poprzednia wartość dawała kontrast 3,04:1 przy wymaganych 4,5:1 i generowała 123 naruszenia
  kryterium 1.4.3 **na każdej podstronie serwisu**, bo token siedzi w `.eyebrow`, w stopce
  i w ekranie ładowania. Zmiana dotyczy całego serwisu, nie tylko nowej strony.

---

## KIERUNEK 3: Migracja sklepu z gwarancją zachowania widoczności

Dodany 2026-08-25. Trzeci pakiet, ten sam klient co kierunki 1 i 2.

`/uslugi/migracja-sklepu-internetowego/`

**Ceny:** do 1000 produktów od 3000 zł, do 10 000 od 8000 zł,
duże z historią zamówień i integracjami od 15 000 zł.

**Przewaga:** migracja pęka po stronie SEO, nie danych. Deweloper przeniesie
dane i nie zauważy nadpisanych meta, agencja SEO zrobi przekierowania
i nie ruszy wariantów w bazie. Robimy obie połowy.

**Na stronie wypisać wprost typowe awarie**, bo klient, który raz się sparzył,
rozpozna każdą: brak mapy przekierowań albo wszystko na stronę główną,
meta nadpisane szablonem nowej platformy, warianty scalone albo rozbite
(każda platforma modeluje je inaczej), zamówienia bez historii statusów
i powiązania z bramką płatności, produkty dodane w trakcie migracji przepadają,
za wczesne wyłączenie starego sklepu.

**Do zrobienia poza stroną:** odezwać się do Shopera, który ma własną stronę
„Przenieś sklep internetowy na nowe oprogramowanie" i aktywnie chce migracji
przychodzących. To jest rozmowa o przepływie leadów.

**Narzędzie do mapowania 301 budujemy na własny użytek**, jako przewagę
kosztową przy wycenie, nie jako produkt (Redirect PRO Mapper już istnieje).
