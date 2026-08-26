# Fala 1: landingi branżowe pod frazy „tworzenie stron dla X"

> **Korekta 2026-07-28 (po uwadze klienta):** pierwsza wersja miała URL `/strony-dla/{branza}`
> i nagłówki pisane pod wrażenie („Strona, która zdobywa zlecenia budowlane"). To błąd na money page:
> URL, H1, wszystkie H2 i treść mają być spójne z frazą. Struktura przebudowana na keyword-first,
> szczegóły w sekcji „Struktura keyword-first" niżej. Poniższe fragmenty planu opisujące `/strony-dla/*`
> są historyczne.

Data: 2026-07-28. Cel biznesowy: zdobywanie klientów z fraz zakupowych o niższej konkurencji niż lokalne
"tworzenie stron internetowych + miasto", z wykorzystaniem realnych realizacji z portfolio jako dowodu.

Fala 2 (osobny plan): strony per miasto. Fala 3: drip blogowy z `blog-plan-wsparcie-uslug-2026-07.md`.

## Dlaczego branże przed miastami

Research SERP 2026-07-28:

- "tworzenie stron internetowych Kraków" — top zajęte przez katalogi (Oferteo: 1424 firmy w bazie, 3489 opinii)
  i lokalne agencje z NAP + opiniami. Freelancer spoza miasta wchodzi bez sygnałów lokalnych.
- Frazy branżowe mają tę samą intencję transakcyjną, ale konkurencja to głównie taniej pozycjonowane landingi
  agencji bez konkretów (patrz audyt EAV niżej).
- Mamy dowód w portfolio dla 6 z 8 branż. Dowód > deklaracja.

## Architektura URL

```
/strony-dla                      → listing (hub, "strony internetowe dla branż")
/strony-dla/{slug}               → landing branżowy
```

Osobny segment, nie `/uslugi/*`, bo:
- `/uslugi/*` = usługa wg technologii (WordPress, Next.js, WooCommerce) — intencja "czym to zrobisz"
- `/strony-dla/*` = usługa wg odbiorcy — intencja "czy robisz to dla mnie"

Hub `/strony-dla` linkuje w dół do branż i w bok do `/uslugi`. Każdy landing branżowy linkuje do
technologicznej money page, nie odwrotnie w exact matchu (żeby nie rozmyć fraz głównych).

## Mapa fraz i anty-kanibalizacja

Frazy główne money pages (z memory `portfolio-keyword-map-uslugi`) NIE są używane w `title`/`h1` żadnego
landingu branżowego. Wzór frazy branżowej: `strony internetowe dla {odbiorca}` — head term nie kolidujący
z `tworzenie stron www {miasto}`.

| Slug | Fraza główna | Frazy wspierające | Dowód z portfolio |
|---|---|---|---|
| `kancelarie-prawne` | strony internetowe dla kancelarii prawnych | strona dla adwokata, strona dla radcy prawnego, strona dla notariusza | Kancelaria Maria Piontek, Ceny Notarialne |
| `gabinety-i-kliniki` | strony internetowe dla gabinetów i klinik | strona dla stomatologa, rejestracja online, strona dla fizjoterapeuty | Queen Scarlet (klinika kosmetologii), Magia Orientu |
| `producenci-mebli` | strony internetowe dla producentów mebli | katalog B2B mebli, strona dla stolarza, hurtownia mebli | AdMeble, Multikon, Stys-Glass |
| `hotele-i-pensjonaty` | strony internetowe dla hoteli i pensjonatów | strona dla apartamentów, silnik rezerwacji, obiekt noclegowy | Złota Grota, Maciejanka, AdAwards Hotel |
| `firmy-budowlane` | strony internetowe dla firm budowlanych | strona dla firmy remontowej, galeria przed i po, wykonawca | Dom Bez Wad, Galabau Darius |
| `marki-odziezowe` | sklep internetowy dla marki odzieżowej | sklep z odzieżą WooCommerce, integracja Allegro, tabela rozmiarów | LumiKids, Kosmoteka |
| `influencerzy` | strona internetowa dla influencera | strona dla content creatora, media kit, sklep z merchem | brak — dowód = własne projekty i portfolio |
| `streamerzy` | strona internetowa dla streamera | strona dla twórcy Twitch, panel z linkami, harmonogram streamów | brak — dowód = własne projekty i portfolio |

Konflikt do rozwiązania: `blog-plan-wsparcie-uslug-2026-07.md` poz. 15 ("Strona dla kancelarii adwokackiej:
czego wymaga i ile kosztuje") kanibalizowałby `/strony-dla/kancelarie-prawne`. Post zostaje przepisany na
temat czysto edukacyjny (RODO i tajemnica zawodowa na stronie kancelarii) albo wypada z planu.

## Audyt EAV konkurencji (co mają, czego nie mają)

Sprawdzone landingi konkurencji per branża. Wnioski wspólne:

| Atrybut | Konkurencja | Nasza decyzja |
|---|---|---|
| Cena | Zwykle "bezpłatna wycena", rzadziej widełki (meble od 1490 zł, kancelarie od 3000-4500 zł, stomatolodzy od 3200 zł, budowlane od 3500 zł) | Zawsze widełki netto + co je zmienia. Bez "od", z górnym pułapem |
| Czas realizacji | Rzadko podawany, albo nierealny ("7-10 dni", "3-5 dni roboczych") | Zawsze przedział w tygodniach, uczciwy, z rozbiciem na etapy |
| FAQ | Często brak (np. landing influencerski Pixelis: zero FAQ, zero cen, zero terminów) | 5-7 pytań + schema FAQPage |
| Case study | Realizacje z innej branży podpięte pod landing branżowy | Tylko realne, branżowo pasujące. Gdzie nie ma, mówimy wprost |
| Integracje | Wymienione hasłowo | Konkretne nazwy systemów per branża (Docplanner, Booksy, Przelewy24, InPost, Allegro, PIM/ERP) |
| Metryki | "szybka strona", "SEO friendly" | Lighthouse 90+ mobile przed oddaniem, LCP < 2,5 s, INP < 200 ms |

Benchmark rynkowy per branża (do wpleceniaenia w treść, nie do przepisania wprost):

- kancelarie: 3000-8000 netto (one-page 3000, standard 4500-8000)
- stomatologia: 3200 podstawowa z rejestracją, 5500-10000 rozbudowana
- meble: 1490 wizytówka / 2990 wielopodstronowa u taniego dostawcy, wdrożenia B2B wyżej
- budowlane: od 3500, standard 2-4 tygodnie
- influencerzy / streamerzy: rynek bez ofert dedykowanych — cena nieustalona, pozycjonujemy własną

Nasze widełki (spójne z `/uslugi/*`, nie mogą być z nimi sprzeczne):

| Branża | Cena netto | Czas |
|---|---|---|
| kancelarie-prawne | 5-9 tys. | 4-6 tyg. |
| gabinety-i-kliniki | 5-9 tys. | 4-6 tyg. |
| producenci-mebli | 7-14 tys. | 6-8 tyg. |
| hotele-i-pensjonaty | 6-12 tys. | 5-8 tyg. |
| firmy-budowlane | 4-8 tys. | 4-6 tyg. |
| marki-odziezowe (sklep) | 12-25 tys. | 6-8 tyg. |
| influencerzy | 4-8 tys. | 3-5 tyg. |
| streamerzy | 3-6 tys. | 2-4 tyg. |

## Struktura landingu (szablon)

Wzorowany na `/uslugi/[slug]`, ale z sekcjami dowodowymi zamiast procesu technologicznego:

1. Hero: h1 + lead (1 akapit, BLUF: dla kogo, co dostaje, ile kosztuje)
2. `pains` — 3-4 realne problemy branży (nie "brak nowoczesnego designu", tylko konkret: np. kancelaria bez
   zabezpieczonego formularza kontaktowego, meblarz bez katalogu do wysłania hurtownikowi)
3. `mustHave` — 5-6 elementów, które strona w tej branży musi mieć, z uzasadnieniem
4. `caseStudy` — 1-2 realizacje z `lib/projects.ts` (slug + jedno zdanie kontekstu branżowego)
5. `stack` — technologia i integracje właściwe dla branży
6. `pricing` — widełki + czas + co wpływa na cenę
7. `faq` — 5-7 pytań (PAA-owe, cenowe, proceduralne)
8. CTA do `/kontakt`

## Dane i implementacja

Nowe pliki:

- `lib/industries.ts` — typ `Industry` + tablica 8 wpisów (analogicznie do `lib/services.ts`)
- `app/strony-dla/page.tsx` — hub z listingiem
- `app/strony-dla/[slug]/page.tsx` — szablon (`generateStaticParams`, `generateMetadata`)

Zmiany w istniejących:

- `app/sitemap.ts` — dodanie hubu (priority 0.85) i landingów (0.8)
- `components/layout/Nav.tsx` + `MobileMenu.tsx` — wejście do hubu `/strony-dla`
- `components/layout/Footer.tsx` — 4-6 linków do najważniejszych branż
- `lib/breadcrumbs.ts` — segment `strony-dla`
- `app/llms.txt/route.ts` — sekcja z branżami

Schema JSON-LD na landingu: `Service` (+ `areaServed: PL`, `provider: Person`), `FAQPage`, `BreadcrumbList`.
Bez `LocalBusiness` — to zostawiamy na falę 2 (miasta).

Linkowanie wewnętrzne (minimum na landing):
- 2-3 linki do `/uslugi/*` (technologia właściwa dla branży), anchor niebędący exact matchem frazy głównej usługi
- 1-2 linki do `/projekty/{slug}` z case study
- 1 link do hubu `/strony-dla`
- 1-2 linki do postów blogowych, jeśli tematycznie pasują

## Podział pracy

1. Ja: plan, mapa fraz, EAV, spec dla każdej branży (ten plik + brief per branża)
2. Codex (`codex exec`, spec przez stdin, output do logu): pierwszy draft copy dla 8 branż jako obiekt JS
3. Ja: humanizacja (`seo-humanize-pl`), kontrola deklinacji, usunięcie kalk i AI-fluffu, weryfikacja że
   żadna liczba nie jest zmyślona i żaden case study nie jest podpięty do złej branży
4. Codex albo ja: kod (typ, routing, szablon, schema) — kod jest deterministyczny, idzie do Codexa
5. Ja: build, weryfikacja wizualna 3 rozdzielczości × 3 iteracje, commit, deploy

## Stan wykonania (2026-07-28)

Copy wygenerowane przez Codexa w dwóch batchach (`plans/codex-task-branze-A.md`, `-B.md`, logi
`codex-branze-A.log`, `-B.log`). Poprawki po mojej stronie:

- frazy główne i metaTitle: uzupełnione polskie znaki (brief szedł bez ogonków ze względów technicznych,
  Codex przepisał je 1:1 do `keyword` i `metaTitle`)
- metaTitle: ujednolicone do konwencji projektu (fraza + pauza + korzyść), bez sufiksu z nazwiskiem
- metaDescription: przepisane, wszystkie w zakresie 145-155 znaków
- lead: przepisany na pierwszą osobę i konkret (wersja Codexa była poprawna, ale sztywna)
- „twoja/twój" podniesione do wielkiej litery zgodnie z konwencją `lib/services.ts`
- influencerzy i streamerzy: linki dowodowe przekierowane na `/projekty` zamiast pojedynczego projektu
  z obcej branży

Realna objętość: 700-800 słów prozy na landing plus 6 pytań FAQ. Świadomie NIE dopychałem do 900-1400,
bo jedyne, co dało się dodać, to wata, a to psuje dokładnie ten sygnał, który ma budować stronę.

Kolejność w katalogu (od najmocniejszego dowodu): kancelarie, gabinety, marki odzieżowe, producenci
mebli, hotele, budowlanka, influencerzy, streamerzy.

### Znaleziony przy okazji błąd: schema tylko po stronie klienta

Cały serwis wstrzykiwał JSON-LD przez `next/script`, który renderuje się dopiero w przeglądarce.
W statycznym HTML nie było ani `Service`, ani `FAQPage`, ani `Article`, tylko zaszyfrowany ładunek RSC.
Google renderuje JavaScript, ale Bing i crawlery modeli językowych zwykle nie, więc dane strukturalne
w praktyce nie istniały poza Google.

Naprawione przez zamianę na zwykły `<script type="application/ld+json">` w komponencie serwerowym
(taki wzorzec był już w `app/blog/page.tsx` i `app/projekty/page.tsx`, więc to była niespójność,
nie decyzja). Objęte pliki: `app/page.tsx`, `app/uslugi/[slug]`, `app/blog/[slug]`, `app/projekty/[slug]`
plus nowe `app/strony-dla/*`. Zysk: schema w HTML na 13 usługach, 26 wpisach bloga, 34 projektach
i 9 nowych stronach branżowych.

## Kryteria akceptacji

- [x] `npx next build` przechodzi, 8 nowych stron statycznych + hub
- [x] każdy landing: 700+ słów unikalnej treści, zero zdań powtórzonych między landingami
- [ ] każdy landing: metaTitle ≤ 65 znaków, metaDescription 145-155, fraza główna w H1 i w pierwszym akapicie
- [ ] FAQ 5-7 pytań, schema waliduje się w Rich Results Test
- [ ] żaden `title`/`h1` nie powiela frazy głównej z mapy money pages
- [ ] case studies podpięte wyłącznie do branż, w których realnie coś zrobiliśmy; przy influencerach
      i streamerach żadnego udawanego dowodu
- [ ] widełki cenowe niesprzeczne z `/uslugi/*`
- [ ] linkowanie wewnętrzne wg reguł wyżej, sitemap zawiera nowe URL-e
- [ ] Lighthouse mobile 90+ na nowym szablonie
- [ ] brak em-dashy w prozie (konwencja projektu), brak anglicyzmów w zwykłych zdaniach

## Przegląd wizualny (1440 / 768 / 375)

Trzy rundy na produkcyjnym buildzie (`next build` + `next start -p 3080`), zrzuty przez Playwright.

- runda 1: hub i landingi renderują się poprawnie, hierarchia zgodna z systemem (Fraunces italic + mono
  eyebrow + hairline). Znalezione: „1 REALIZACJE" zamiast „1 realizacja" na hubie
- runda 2: poprawiona odmiana, poprawione „ci" na „Ci" w bloku dla branż bez realizacji. Znalezione:
  na 768 px kolumna z ceną łamała się na dwie linie („5-9 TYS. ZŁ / NETTO")
- runda 3: opis przeniesiony na `lg`, cena dostaje 7 kolumn na `md` plus `whitespace-nowrap`

Uwaga niezwiązana z tą falą: nakładka `LoadingIntro` (niezacommitowany WIP) potrafi przykryć hero,
identycznie na `/uslugi` i na stronie głównej, więc problem jest zastany, nie wniesiony tutaj.

## Struktura keyword-first (wersja obowiązująca)

URL = fraza główna, na poziomie roota, żeby nie rozcieńczać jej segmentem nadrzędnym:

| URL | Fraza główna | H1 |
|---|---|---|
| `/tworzenie-stron-dla-kancelarii-prawnych` | tworzenie stron dla kancelarii prawnych | to samo |
| `/tworzenie-stron-dla-gabinetow-i-klinik` | tworzenie stron dla gabinetów i klinik | to samo |
| `/tworzenie-sklepow-internetowych-dla-marek-odziezowych` | tworzenie sklepów internetowych dla marek odzieżowych | to samo |
| `/tworzenie-stron-dla-producentow-mebli` | tworzenie stron dla producentów mebli | to samo |
| `/tworzenie-stron-dla-hoteli-i-pensjonatow` | tworzenie stron dla hoteli i pensjonatów | to samo |
| `/tworzenie-stron-dla-firm-budowlanych` | tworzenie stron dla firm budowlanych | to samo |
| `/tworzenie-stron-dla-influencerow` | tworzenie stron dla influencerów | to samo |
| `/tworzenie-stron-dla-streamerow` | tworzenie stron dla streamerów | to samo |

Hub katalogowy: `/branze` (nawigacyjny, nie celuje we frazę transakcyjną, żeby nie bić w huba
`/uslugi/tworzenie-stron-www` z frazą „tworzenie stron www Wrocław").

Każdy landing ma sześć H2 z danych (`headings` w `lib/industries.ts`), wszystkie w języku frazy:

- „Co nie działa na stronach firm budowlanych"
- „Czego wymaga strona firmy budowlanej"
- „Strony dla firm budowlanych, które zrobiłem"
- „Jak tworzę strony dla firm budowlanych"
- „Ile kosztuje strona dla firmy budowlanej"
- „Tworzenie stron dla firm budowlanych: pytania"

Treść przepisana przez Codexa według metody ze skilla `seo-keyword-optimizer`: fraza dosłownie
w pierwszym zdaniu pierwszego akapitu, wariantowanie przez synonimy, meronimy, hiponimy i hipernimy,
uzupełnienie terminów współwystępujących (brief, wycena, CMS, Core Web Vitals, RODO, hosting, domena).
Kontrola po stronie Claude'a: liczby, ceny, nazwy klientów i linki wewnętrzne nietknięte (walidator
w `merge-optim.mjs` porównuje liczbę elementów tablic i ścieżki linków przed i po).

Stan pokrycia po optymalizacji: 3-4 wystąpienia frazy w H1, title i nagłówkach, 1-2 dosłowne
plus 1-3 wariantowe w treści, 9 pytań FAQ w języku branży, ok. 800 słów na landing.

## Audyt po przebudowie keyword-first (2026-07-28)

Codex wyczerpał limit ChatGPT Plus do 4 sierpnia, więc audyt poszedł ręcznie plus skryptami.

**Spójność technologiczna.** Trzy landingi nie mówiły, kiedy wchodzi WordPress, a kiedy Next.js:
gabinety miały w sekcji warsztatowej same integracje (Booksy, Profil Firmy, galeria, RODO), hotele tylko
WordPressa, a sklepy nie tłumaczyły, że WooCommerce to WordPress. Poprawione: każdy landing nazywa bazę
i granicę wyboru (Next.js przy własnym systemie zapisów, przy kilku obiektach, przy headless dla kilku
tysięcy indeksów). Anchor teksty sprawdzone skryptem: 34 linki, zero kolizji z frazami głównymi money pages.

**Humanizacja.** Metryki przed poprawką: średnia długość zdania 12,0-12,9 słowa, odchylenie 3,1-4,0,
zero zdań powyżej 25 słów, mało poniżej 8. Równy oddech to najmocniejszy sygnał tekstu maszynowego.
Dorzucone 16 krótkich zdań w leadach i pierwszych diagnozach, wyczyszczone „w zakresie" i „warto
rozdzielić". Po: odchylenie 3,3-4,2, zdań krótkich 5-12 na landing. Do dokończenia ręcznie: powtarzalne
początki zdań (formularz ×4 u influencerów, przed ×4 w sklepach odzieżowych).

**FAQ.** Dziewięć pytań na landing, wszystkie w języku branży, odpowiedzi z konkretem w pierwszym zdaniu.
Uwaga rynkowa: od 2023 Google pokazuje wyniki rozszerzone FAQ tylko witrynom rządowym i medycznym,
więc wartość jest w treści i w tym, że modele językowe to czytają, nie w gwiazdkach w wynikach.

**Dane strukturalne.** Był realny błąd: `Offer` miał `priceCurrency` i `priceSpecification` z opisem
tekstowym („4-8 tys. zł netto"), czyli dla maszyny bezużyteczne. Teraz `minPrice` i `maxPrice` liczbowo,
`valueAddedTaxIncluded: false`, `availability`, `inLanguage: pl-PL` oraz `image`. Zweryfikowane
w wygenerowanym HTML (`"minPrice":4000` dla budowlanki).

**Hero.** Dodany `components/industry/IndustryHeroVisual.tsx`: osiem motywów SVG plus CSS (pismo
z pieczęcią, terminarz, warianty rozmiarów, rysunek techniczny, kalendarz dostępności, suwak przed i po,
media kit, panel transmisji), na wspólnej scenie z wygaszaną siatką, dwiema orbitami i pyłem.
Zero JavaScriptu na kliencie, animacje wyłącznie na transform i opacity, `prefers-reduced-motion`
wycisza ruch. Trzy iteracje: pierwsza była za blada, druga dostała maskę i orbity, trzecia wydłużyła
czas widoczności rysowanych linii.

## Runda 2 szablonu (2026-07-28, po pytaniu „czy szablon jest idealny")

Nie był. Braki i co z nimi zrobiłem:

| Brak | Poprawka |
|---|---|
| Zero procesu (usługi mają „Krok po kroku", branże nie miały) | Sekcja 05 Proces: pięć kroków konkretnych dla branży, poziomy stepper z peachową osią, czyli inny rytm niż reszta strony |
| Zero dowodu społecznego | Pasek zaufania po sekcji dowodu: od 2020, 25+ wdrożeń, Lighthouse 90+ (wszystko fakty z PRODUCT.md, żadnych zmyślonych metryk) |
| CTA tylko na dole strony | CTA w połowie (przy pasku zaufania) plus klikalny „Widełki ↓" w pasku faktów prowadzący do sekcji wyceny |
| Brak filtra leadów | Sekcja „Kiedy powiem, że to nie u mnie": trzy punkty per branża, wąska wyśrodkowana kolumna |
| Monotonia: siedem sekcji o identycznym układzie | Zakres na trzy kolumny zamiast dwóch z pustą rynną, proces poziomo, odsiew wyśrodkowany i wąski, wycena na podniesionym tle z peachową kreską u góry |

Kotwice `#dowod`, `#wycena`, `#faq` z `scroll-mt-24` pod przyklejoną nawigacją.

Decyzja o osobnych landingach per stack (WordPress osobno, Next.js osobno w każdej branży): **odłożona**.
Wolumen fraz typu „tworzenie stron WordPress dla firm budowlanych" jest marginalny, a strony biłyby
jednocześnie w landing branżowy i w `/uslugi/tworzenie-stron-wordpress`. Kolejność: najpierw dane
z Search Console, które branże łapią ruch, potem rozbudowa zwycięzców o sekcję porównania stacków,
osobne strony dopiero przy realnym popycie.

## Ryzyka

- Cienka treść przy 8 stronach naraz → mitygacja: różne sekcje `pains`/`mustHave` per branża, pisane
  z researchu branżowego, nie z szablonu z podmienioną nazwą
- Kanibalizacja z `/uslugi/*` → mitygacja: rozdział fraz (odbiorca vs technologia), sprawdzony w tabeli wyżej
- Influencerzy i streamerzy: niski wolumen wyszukiwań → traktujemy jako zakład niszowy (zero konkurencji
  w SERP), nie jako główny kanał. Koszt niski, bo to 2 z 8 stron
