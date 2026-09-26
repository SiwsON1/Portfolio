# Audyt humanizacji: strony usług i landingi branżowe

Data: 2026-09-26. Materiał: `lib/services.ts` (14 usług), `lib/industries.ts` (8 branż). Pominięto `lib/seoBlocks.ts`.
Lista kontrolna: skill `humanizer` (43 wzorce AI), `seo-humanize-pl`, ton z `PRODUCT.md` (pierwsza osoba, redakcyjnie, bez korpomowy, bez półpauz i pauz w prozie, „dowód > deklaracja”).

Skala: 0 = brzmi jak człowiek, 100 = oczywisty szablon AI. Priorytet: P1 przepisać najpierw, P2 w drugiej fali, P3 lekki szlif.

Tylko cytaty i diagnoza, bez przepisywania.

---

## Szybki przegląd

| Strona | Wynik AI | H1/lead: co, dla kogo, gdzie | Priorytet |
|---|---|---|---|
| nowoczesne-strony-internetowe | 85 | nie (slogan, brak miejsca) | **P1** |
| next-js-software-house | 78 | nie (slogan, angielski) | **P1** |
| strony-jamstack | 75 | częściowo (co tak, dla kogo i gdzie nie) | **P1** |
| wdrozenia-ai | 72 | nie (slogan) | **P1** |
| aplikacje-nextjs | 70 | tak (co i gdzie), dla kogo mgliście | **P1** |
| headless-wordpress | 70 | częściowo (brak miejsca) | P2 |
| nowoczesna-strona-firmowa-2026 | 65 | częściowo (brak miejsca w H1) | **P1** |
| aplikacje-react | 65 | nie (żargon) | P2 |
| sklepy-internetowe-woocommerce | 60 | tak | P2 |
| tworzenie-stron-wordpress | 55 | częściowo (Wrocław tak, cała Polska dopiero w FAQ) | P2 |
| tworzenie-stron-www | 50 | częściowo (brak „dla kogo”) | P2 |
| przyspieszanie-stron-wordpress | 40 | częściowo (brak miejsca) | P3 |
| opieka-wordpress | 35 | tak (co, dla kogo), brak miejsca | P3 |
| integracja-woocommerce-z-baselinker | 25 | co tak, dla kogo i gdzie nie | P3 |
| **Branże** | | | |
| kancelarie prawne | 60 | co i dla kogo tak, gdzie nie | P2 |
| producenci mebli | 60 | tak, ale sprzeczne z deliverables | **P1** (spójność) |
| influencerzy | 58 | co i dla kogo tak, gdzie nie | P2 |
| gabinety i kliniki | 55 | co i dla kogo tak, gdzie nie | P2 |
| streamerzy | 55 | co i dla kogo tak, gdzie nie | P3 |
| hotele i pensjonaty | 50 | co i dla kogo tak, gdzie nie | P3 |
| firmy budowlane | 50 | co i dla kogo tak, gdzie nie | P2 (deliverables) |
| marki odzieżowe | 50 | co i dla kogo tak, gdzie nie | P3 |

Uwaga ogólna do branż: żaden H1 ani lead branżowy nie mówi, gdzie działasz (Wrocław / zdalnie cała Polska). Przy frazach ogólnopolskich to OK dla H1, ale jedno zdanie w leadzie lub intro („pracuję z Wrocławia, zdalnie z całą Polską”) domyka intencję lokalną i zaufanie.

---

## Część 1. Usługi (`lib/services.ts`)

### 1. tworzenie-stron-wordpress (wynik 55, P2)

H1 „Tworzenie stron WordPress. Wrocław, edycja bez kodu.” mówi co i gdzie, nie mówi dla kogo. Lead dobry w rytmie (kontrast „zrobiony dobrze / zrobiony źle”), ale to też klasyczna figura AI (paralelizm).

Problemy:
1. **Sprzeczność z własnym stanowiskiem**: „ACF Pro lub Bricks Builder dla pól dynamicznych” obok „Bez gotowych motywów” i FAQ „Dlaczego nie używasz Avada / Divi / Elementor?”. Bricks to kreator stron tej samej klasy co Elementor. Czytelnik, który zna temat, wyłapie to od razu.
2. **Liczby z sufitu**: „wygląda jak 800 innych stron z Elementora”, „dokładają 200-400 KB JavaScriptu do każdej podstrony”. Pierwsze to hiperbola udająca statystykę, drugie wymaga źródła albo własnego pomiaru.
3. **Anglicyzmy w zwykłych zdaniach**: meta „WordPress z custom theme”, FAQ „LiteSpeed cache + custom theme”, „customowej logiki”. Na tej samej stronie jest „własny motyw”, więc „custom theme” to niekonsekwencja.
4. **Żargon dla nietechnicznego właściciela**: „schema.org Person/Service/Article”, „nagłówki bezpieczeństwa w .htaccess”, „LCP poniżej 2.5s, INP poniżej 200ms”. Brak tłumaczenia, co to daje. Do tego kropka dziesiętna zamiast przecinka („2.5s” zamiast „2,5 s”).
5. **Plusy zamiast zdań**: „LiteSpeed cache + custom theme + obrazki WebP/AVIF + lazy loading”, „Wdrożenie + szkolenie”, „Plus dokumentacja PDF.”
6. **Obietnica bez zastrzeżeń**: „Migracja na produkcję bez przerwy.” (patrz sprzeczności: strona kliniki mówi, że krótka przerwa może wystąpić).
7. **Szablonowe FAQ o cenie**: „Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.” (to samo zdanie na 11 stronach).
8. Półpauza w `metaTitle`: „Tworzenie stron WordPress Wrocław — własny motyw”.

### 2. sklepy-internetowe-woocommerce (wynik 60, P2)

H1 „Sklepy internetowe WooCommerce. Wrocław i cała Polska.” jest informacyjny. Lead otwiera się statystyką bez źródła.

Problemy:
1. **Podejrzana statystyka i kalka**: „WooCommerce robi 30% sklepów online na świecie.” „Robi” to kalka z angielskiego („powers”), a liczba bez źródła i daty (udziały różnią się zależnie od metodologii).
2. **Obietnica totalna**: „integruje się ze wszystkim, czego potrzebujesz w polskim e-commerce”.
3. **Sprzeczność wewnętrzna**: intro „Dla większych sklepów (1000+ SKU, multistore, headless) sugeruję inne technologie” kontra bullet „Cel: poniżej 2s LCP nawet przy 1000+ produktach”. Do tego branża odzieżowa mówi o granicy „kilku tysięcy produktów”.
4. **Twierdzenie bez dowodu**: „głównie branża meblowa i odzieżowa, m.in. LumiKids”. Odzieżowa jest udokumentowana, meblowego sklepu w linkach brak.
5. **Anglicyzmy**: „Custom theme”, „end-to-end”, „conversion tracking”, „GA4 enhanced ecommerce”, „Allegro Sync”, nagłówki „Design + UX”, „Testy + GA4”, „Start + opieka”.
6. **Błąd merytoryczny w skrócie**: „Polskie wymogi RODO” (RODO to rozporządzenie unijne).
7. **Nieweryfikowalne liczby**: „wytrzymuje 10-50 tys. wizyt dziennie”.
8. **Powtórzenia w obrębie strony**: B2B opisane w bullecie i w osobnym FAQ, wersje językowe w bullecie i FAQ, „kiedy nie WooCommerce” w intro i w FAQ. Strona ma 12 pytań, z czego 3-4 powtarzają bullet.
9. CTA „wycena w 48h” kontra „w 24h” na pozostałych stronach.

### 3. headless-wordpress (wynik 70, P2)

H1 „Headless WordPress — szybkość Next.js, edycja WordPress” to slogan z półpauzą, bez miejsca i odbiorcy. Lead jest dla programisty, nie dla właściciela.

Problemy:
1. **Żargon w leadzie**: „frontendem w Next.js (szybki, SEO-friendly, deploy na CDN)”. „SEO-friendly” i „deploy” to anglicyzmy, „CDN” bez wyjaśnienia.
2. **Sprzeczne liczby**: intro „użytkownik dostaje 3x szybszą stronę”, FAQ „ładuje się 2-5x szybciej”. Jamstack twierdzi „Od 5 do 50 razy szybciej”.
3. **Fałszywe lub przesadzone twierdzenie SEO**: „SEO: Lighthouse 95+ wpływa na rankingi”. Wynik Lighthouse nie jest czynnikiem rankingowym (sygnałem są dane polowe Core Web Vitals).
4. **Angielski wtręt**: „redukuje attack surface”, „własne resolvery”, „DNS przełącza root domenę”, „Inwentarz custom post types, ACF, kategorii, planów” („planów” niejasne).
5. **Mylące podmioty**: „Klient widzi to samo co dotąd, użytkownik dostaje 3x szybszą stronę” oraz „Treści wystawiasz przez REST API” (czytelnik nie wystawia niczego przez API).
6. **Kalka „Plus”**: „Plus dwa hostingi (WP backend + Vercel frontend)”.
7. „LCP poniżej 1.5s globalnie” (kropka dziesiętna, obietnica „globalnie” bez pomiaru).

### 4. nowoczesne-strony-internetowe (wynik 85, P1)

Najgorsza strona w zestawie. H1 „Nowoczesne strony internetowe. Design-led, nie stack-led.” to angielski slogan, który nic nie mówi właścicielowi firmy. Brak odbiorcy i miejsca.

Problemy:
1. **Kalki w H1**: „Design-led, nie stack-led.” Nietechniczny właściciel nie wie, co to „stack”.
2. **Podejrzane porównania i name-dropping**: „Strony na poziomie realizacji nagradzanych w Awwwards.”, „wejść na poziom Lusion, ActiveTheory czy raviklaassens.com”. Brak nagrody, brak porównywalnego projektu w portfolio; jeden z wymienionych to strona osoby prywatnej (inspiracja z PRODUCT.md trafiła do copy).
3. **Protekcjonalny frazes**: „konkurencja wciąż ma strony z 2018 roku”.
4. **Personifikacja i ozdobniki**: „Każda sekcja wita się inaczej.”, „głębia przez gradienty i szum”.
5. **Kod w copy**: „Hovery dopracowane w detalu, nie tylko `color: peach`.”, „respektuje `prefers-reduced-motion`”.
6. **Żargon**: „GSAP ScrollTrigger”, „R3F”, „Paleta OKLCH”, „tokeny Tailwind”, „Vercel preview deploys per PR”, „content-first”, „end-to-end”, „parallaxu i transitions”.
7. **Sprzeczność w obrębie strony**: intro „Jeśli strona to głównie treści... wybieram headless WordPress”, a proces „Next.js App Router, Sanity/Contentful jako CMS”.
8. **„My” zamiast „ja”**: „Technologię dobieramy do projektu”, „Stack ... dobieramy do potrzeb”, „Mierzymy wyjściową wydajność” przy solo freelancerze. Plus „standardy 2026” i „schema.org dla AI search” (buzzword).
9. Meta z anglicyzmem „custom cursor” obok „własny kursor” w treści.

### 5. nowoczesna-strona-firmowa-2026 (wynik 65, P1)

H1 „Strona firmowa dla małej firmy. Pakiet, nie projekt na rok.” mówi co i dla kogo, druga część to slogan. Brak miejsca (jest tylko w meta).

Problemy:
1. **Sprzeczność pakietu z procesem**: bullet „WordPress z własnym motywem (najtaniej) albo Sanity (droższe)”, a proces krok 03 „Next.js App Router + Sanity CMS + Vercel deploy” i krok 02 „custom design system i prototyp animacji”. Tani pakiet opisany procesem drogiej strony.
2. **Statystyka bez źródła**: „Mobile-first, bo 70% ruchu”, „70% Twoich klientów wchodzi z telefonu.” (to zależy od branży).
3. **Fałszywe twierdzenie SEO**: „Google daje wtedy lepszą widoczność w lokalnym Map Pack” (podtyp schema LocalBusiness nie wpływa na Map Pack). Także „Google Business Profile sync” (nie ma takiej synchronizacji; do tego inna nazwa niż „Profil Firmy w Google” na stronach branżowych).
4. **Obietnica wyniku**: „pokazać w Google Search Console rosnące rankingi”.
5. **Hiperbole**: „bez 200-stronicowego briefu”.
6. **Kalki**: „strony, którą można obronić przed klientem”, „30-min discovery”, „efekt brandowy”, „Mobile-first”, „Staging od dnia 3”, „customową logiką”.
7. Lead „Wycena w 24h, wdrożenie 3-6 tygodni”, FAQ „Wizytówka 2-3 tygodnie, pakiet 4-6 tygodni”: dolna granica 3 czy 2? Nieostre.
8. Nazwa w `title`: „Strona firmowa MŚP” (skrót urzędowy), a na innej stronie „SME”.

### 6. next-js-software-house (wynik 78, P1)

H1 „Solo Next.js — micro software house dla startupów i SME” ma półpauzę, trzy anglicyzmy i zero informacji dla polskiego właściciela firmy.

Problemy:
1. **Kalki w H1 i meta**: „micro software house”, „SME”, „Solo Next.js”, meta „Outsourcing Next.js”.
2. **Liczby o konkurencji bez źródła**: „Większość polskich agencji Next.js liczy 30-50 ludzi”, „bez 30% marży agencji”.
3. **Sprzeczność stażu**: „jedna osoba z sześcioletnim stażem w tych technologiach”, a strona Next.js mówi „od 2024 roku mój główny obszar pracy”.
4. **Sprzeczne terminy**: lead „aplikacja Next.js w 4-12 tygodni”, bullet „MVP w 4-6 tygodni”, „Aplikacje średniej skali... 8-16 tygodni”.
5. **Obietnica przesadzona**: „Jakikolwiek dev Next.js wejdzie po mnie bez problemu.”, „Zero niespodzianek na końcu.”
6. **Pleonazm i lista technologii zamiast korzyści**: „Pełen full-stack od bazy do animacji.”, zdanie z 13 nazwami narzędzi.
7. **Angielski w procesie**: „Sprint 1: szkielet”, „feedback”, „conventional commits”, „TypeScript strict”, „dev”.
8. Fraza powtórzona na stronie Next.js: „bez archeologii”.

### 7. strony-jamstack (wynik 75, P1)

H1 „Strony Jamstack — szybkość statyki, dynamika SPA” to żargon z półpauzą. Właściciel firmy nie szuka „Jamstack”, a „SPA” nic mu nie mówi.

Problemy:
1. **Superlatywy nie do obrony**: „Najszybsza możliwa konfiguracja webowa w 2026: strony ładują się w <1s globalnie.”
2. **Fałsz o Google**: „Pre-renderowany HTML Google indeksuje natychmiast.”, „dają wyższe rankingi niż typowy WordPress.”
3. **Liczby z sufitu**: „Od 5 do 50 razy szybciej”, „strona jest w 90% statyczna”, „Mapa: co statyczne (90%), co dynamiczne (10%)”, „Vercel ma 100+, Cloudflare 300+” (do weryfikacji), „Odpowiedź nadal poniżej 100 ms”.
4. **Żargon i kalki**: „Pre-render przy buildzie”, „edge functions”, „Kilka frontendów może jechać na tych samych danych”, „Vercel preview per PR”, „payment + auth provider”, „zewnętrzne APIs”.
5. **Symbol w prozie**: „<1s”, „WordPress → Jamstack”.
6. **CTA z błędem interpunkcyjnym i kalką**: „Sprawdź czy Jamstack to dla Ciebie” (brak przecinka przed „czy”, „to dla Ciebie” to kalka „is it for you”).
7. Strona w dużej części dubluje headless-wordpress i aplikacje-nextjs (ISR, CDN, Sanity, 301).

### 8. tworzenie-stron-www (wynik 50, P2)

H1 „Tworzenie stron www. Wrocław, od 2020.” mówi co i gdzie. Brak odbiorcy. Pierwsza część strony ludzka, końcowe 6 pytań FAQ w innym, urzędowym głosie.

Problemy:
1. **Anglicyzm i kalka w leadzie**: „Hub usług webowych dla firm.”, „idź od razu do specyficznej usługi” („specific” to „konkretnej”).
2. **Twierdzenie bez dowodu**: „Większość klientów wraca po kolejne projekty albo poleca dalej.”
3. **Slogan zamiast informacji**: „Dwa stacki, jedna jakość”.
4. **Frazesy**: „Bez ukrytych kosztów.”, „Idealnie.”, „klient nawet nie zauważy, że coś się zmieniło”.
5. **Pęknięcie głosu**: wcześniejsze FAQ są krótkie i w pierwszej osobie, ostatnie brzmią jak z generatora: „Przy wdrożeniu uwzględniam między innymi SSL i techniczną konfigurację strony, a dalsze wymagania zależą od użytej technologii i funkcji serwisu.”, „W typowej stronie firmowej często sprawdza się WordPress”.
6. **Żargon**: „marketing chce wydajności Vercela”, „3 breakpointy”, „Lighthouse 90+ na mobile”.
7. **Powtórzenie liczby i lat w dwóch zdaniach z rzędu**: „od 2020 roku. Sześć lat tworzenia stron internetowych, ponad 30 wdrożeń”.
8. Duplikat z WordPress: „Brief i wycena: 30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h.” słowo w słowo.

### 9. aplikacje-nextjs (wynik 70, P1)

H1 „Tworzenie stron Next.js. Wrocław i cała Polska.” jest dobry. Lead to pakiet superlatywów.

Problemy:
1. **Superlatyw nieweryfikowalny**: „firm, które chcą najszybszej technologii webowej dostępnej w 2026 roku”.
2. **Liczba nie do obrony**: „pierwsze wyświetlenie poniżej 200 ms niezależnie od tego, skąd wchodzi użytkownik”, „często wychodzi 100”.
3. **Anglicyzmy w meta**: „App Router, edge, premium”, „Premium, headless e-commerce”; w treści „strony firmowe premium”, „Vercel jako default (zero ops dla klienta)”, „customowego dashboardu”.
4. **Sprzeczność rynków**: „klienci są z całej Polski oraz z Niemiec, Holandii i USA”, a inne strony i PRODUCT.md: „PL + DE”. Holandia i USA wymagają pokrycia w realizacjach.
5. **Adres w prozie**: „(ul. Kurkowa 32/57)” w zdaniu. Jeśli to adres domowy, lepiej w stopce/NAP niż w treści oferty. Decyzja usera.
6. **Brak przecinków**: „Jeśli zastanawiasz się czy potrzebujesz”, „Kiedy Next.js a kiedy WordPress?”, „WordPress gdy strona to głównie treść”.
7. **Napięcie z własnym FAQ**: „Next.js gdy aplikacja musi ... skalować ruch” kontra „Czy Next.js nadaje się do małej strony firmowej? Tak.”
8. Lista CMS niespójna z resztą serwisu: tu „Sanity albo Payload”, gdzie indziej „Sanity/Contentful”, „Sanity albo Strapi”.

### 10. aplikacje-react (wynik 65, P2)

H1 „React tam gdzie nie potrzeba SSR” to żargon i błąd interpunkcyjny (brak przecinka przed „gdzie”). Brak odbiorcy i miejsca. Strona cienka (3 kroki, 3 FAQ).

Problemy:
1. **Żargon w H1 i leadzie**: „SSR”, „Mniej narzutu Next.js”.
2. **Ogólnik oceniający**: „React jest świetny”.
3. **Niejasne i słabe dowody**: „Większość projektów lab dostępnych na GitHubie to React”, „sklepy edukacyjne”, „Część komercyjna, np. moduły do większych systemów, robiona również w React + Vite.” (strona bierna, bez nazwy projektu).
4. **Angielskie wtręty**: „Code review i pair”, „incremental upgrade”, „Roadmapa”.
5. **Nieweryfikowalne**: „Migrację 17 → 19 robiłem już kilka razy” (plus strzałka w prozie).
6. **Formy umów**: „kontrakt B2B lub UoD” (umowa o dzieło przy stałej współpracy godzinowej to ryzyko prawne, skrót niezrozumiały).

### 11. wdrozenia-ai (wynik 72, P1)

H1 „AI, które przynosi liczby, nie tylko demo” to slogan. Brak odbiorcy (jest tylko w meta: 5-50 osób) i miejsca.

Problemy:
1. **Anonimowy autorytet**: „Większość wdrożeń AI w 2025 roku skończyła się na demie, które nigdy nie trafiło do codziennej pracy.” (bez źródła).
2. **Liczby bez dowodu**: „Spadek czasu obsługi nawet 70%”, „80% pomysłów odrzucam tu”, „Daje przewagę 2-3x”.
3. **Sprzeczne terminy**: „działające rozwiązanie oddaję w 4 tygodnie zamiast 4 miesięcy”, meta „POC w 2 tygodnie”, proces „Mały prototyp w 2 tygodnie”.
4. **Nieścisłość techniczna**: „hostuję modele open-source lokalnie albo na Azure OpenAI” (Azure OpenAI to modele OpenAI, nie open source).
5. **Anglicyzmy**: „Discovery”, „Proof of concept”, „embeddingi”, „customową logiką brandową”.
6. **Potoczny nagłówek**: „Bez ściemy”.
7. **Brak żadnej nazwanej realizacji AI**: łamie zasadę „dowód > deklaracja”. Link do posta „2025-2026” za rok będzie wyglądał na nieaktualny.
8. CTA bez przecinka: „Opisz proces który chcesz odciążyć”.

### 12. opieka-wordpress (wynik 35, P3)

Najbardziej ludzka ze stron ogólnych. H1 „Opieka nad stroną WordPress. Strona działa, Ty pracujesz.” mówi co; druga część to slogan. Lead dobrze mówi „dla kogo” (firmy bez działu IT). Brak miejsca.

Problemy:
1. **Slogan w H1**: „Strona działa, Ty pracujesz.”
2. **Aforyzm w stylu AI**: „backup nietestowany to tylko nadzieja, nie kopia”.
3. **Przytyk do konkurencji**: „Umowy roczne w tej usłudze służą zwykle temu, żeby dało się o kliencie zapomnieć.” (zostawić, jeśli świadoma decyzja; ryzyko tonu).
4. **Anglicyzmy**: meta „aktualizacje na stagingu, backupy”, „firewall”, „malware”.
5. **Obietnice operacyjne solo freelancera**: „Monitoring dostępności co minutę z alertem na mój telefon”, „reakcja do 2 godzin w dni robocze”. Do sprawdzenia, czy realnie utrzymasz przy urlopie.
6. Mglisty rabat: „z rabatem dla stałych klientów”.

### 13. przyspieszanie-stron-wordpress (wynik 40, P3)

Konkretna, pierwsza osoba, dobre „pracuję na liczbach”. H1 „Liczby przed i po, nie obietnice.” półsloganowe, ale niesie informację. Brak miejsca.

Problemy:
1. **Sprzeczność z własnym FAQ**: lead „Google obniża pozycje za słabe Core Web Vitals” kontra FAQ „zielone metryki pomagają, ale nie zastąpią treści i linków”.
2. **Wzorce AI**: „Wolna strona kosztuje dwa razy”, „Dobra wiadomość:”, „od największej dźwigni”, „zawsze ta sama czwórka”.
3. **Obietnica jako pewnik**: „Pewny efekt jest gdzie indziej: mniej porzuceń, dłuższe sesje, wyższa konwersja.”
4. **Liczby bez przykładu**: „LCP z 5-8 sekund schodzi poniżej 2,5 s, waga strony spada o połowę”, „to większość zleceń”, „potrafią podwoić czas ładowania”. Przydałby się jeden nazwany przypadek z pomiarem.
5. **Sprzeczne terminy audytu**: CTA „wrócę z audytem w 48h”, FAQ „Audyt: 2-3 dni robocze”.
6. Żargon: „font-display: swap”, „krytyczny CSS w dokumencie”, „dane polowe CrUX”.

### 14. integracja-woocommerce-z-baselinker (wynik 25, P3)

Wzorzec dla reszty: konkretne mechanizmy, realny przypadek (Kosmoteka), uczciwe ograniczenia. H1 mówi co, lead mówi co daje. Brak „dla kogo” i miejsca (Wrocław tylko w meta).

Problemy:
1. **Sprzeczność czasu**: intro „Samo podpięcie to kilka minut”, FAQ „Samo połączenie sklepu z BaseLinkerem to kilka godzin pracy”.
2. **Anglicyzm**: „marketplace'ów”.
3. **Długie zdania w intro 2**: zdanie z „kopiuję z magazynu hurtowni do własnego katalogu BaseLinkera z powiązaniem magazynowym i dopiero z niego tworzę produkty” ma ok. 30 słów i powtarza „magazyn” trzy razy.
4. Powtórzenie treści bullet „Allegro z tego samego magazynu” niemal słowo w słowo w FAQ „Czy mogę sprzedawać w sklepie i na Allegro”.

---

## Część 2. Landingi branżowe (`lib/industries.ts`)

### Wzorce wspólne dla wszystkich 8 branż (najważniejsze)

1. **Keyword stuffing w otwarciach**: lead ORAZ pierwszy akapit intro zaczynają się od frazy głównej, np. „Tworzenie stron dla kancelarii prawnych ma warunek...” i zaraz „Tworzenie stron dla kancelarii prawnych zaczynam od briefu...”. Tak samo we wszystkich ośmiu. To najmocniejszy sygnał szablonu.
2. **Ten sam szkielet intro**: „zaczynam od briefu, [analizy X] i projektu graficznego” (kancelarie, odzież, meble, budowlane), „obejmuje projekt graficzny, wdrożenie...” (kliniki, hotele, streamerzy), „łączy projekt graficzny...” (influencerzy). Końcówka intro 2 prawie zawsze: „...omówimy/ustalimy/prześlesz przez [formularz kontaktowy](/kontakt)”.
3. **Wstawione krótkie zdanie w pierwszym „pains”**: każda branża ma w pierwszej karcie problemu trzecie, krótkie zdanie o identycznej funkcji: „Zamyka kartę i dzwoni gdzie indziej.”, „Część pacjentów rezygnuje w tym miejscu.”, „Każda pomyłka to koszt zwrotu.”, „Hurtownik nie ma na to czasu.”, „Prowizja potrafi zjeść marżę z pobytu.”, „Zdjęcia mówią to za Ciebie.”, „Marka dostaje nieaktualne liczby.”, „Widzowie pytają o to na czacie codziennie.” Widać, że zostało dopisane jedną regułą.
4. **FAQ w bezosobowym, urzędowym głosie**: „Hosting dobierzesz do liczby wizyt...”, „Otrzymasz parametry techniczne”, „Dostarczasz zatwierdzone treści prawne, a ja umieszczam je”, „Koszt obejmie domenę...”, „Uwzględnisz hosting, domenę...”. Zderza się z ludzkimi odpowiedziami o cenie („Napisz, co ma się znaleźć na stronie, a odeślę kwotę.”). Pytanie o hosting wymijające, podczas gdy strona WordPress wprost poleca Hostinger i cyber_folks.
5. **Pytania FAQ z frazą w liczbie mnogiej**: „Jak długo trwa tworzenie stron dla hoteli i pensjonatów?”, „Ile trwa tworzenie stron dla firm budowlanych?”, „Jak długo trwa tworzenie stron dla influencerów?”. Nikt tak nie pyta o swoją jedną stronę.
6. **Deliverables z twardymi limitami, których nie ma nigdzie indziej**: „do 10 podstron specjalizacji”, „do 15 podstron zabiegów”, „maksymalnie 50 produktów startowych”, „do 40 modeli”, „maksymalnie 12 typów pokoi”, „do ośmiu podstron usług”, „do 30 wskazanych publikacji”, „do 20 wybranych nagrań”. To zobowiązania ofertowe; muszą być zgodne z realnym cennikiem (ROUTEMAPA) albo zniknąć.
7. **Nagłówki sekcji z jednego szablonu**: „Co nie działa na stronach X”, „Czego wymaga strona X”, „Jak tworzę strony dla X”. Dopuszczalne SEO, ale nagłówek „Strony dla twórców, które zrobiłem” u influencerów i streamerów kłamie, skoro intro mówi „Nie mam jeszcze realizacji” (sprawdzić, czy sekcja się ukrywa przy pustej liście).
8. Półpauza w `metaTitle` sześciu branż („— zakres i termin”, „— rejestracja online” itd.).
9. Żaden lead nie mówi „gdzie”.

### B1. Kancelarie prawne (wynik 60, P2)

H1 i lead mówią co i dla kogo. Lead ma mocny, ludzki pomysł (etyka), ale zaczyna się od fałszywej przesady.

Problemy:
1. **Fałszywe uogólnienie, sprzeczne z inną stroną**: „ma warunek, którego nie ma żadna inna branża” (strona klinik sama opisuje „ograniczenia reklamy usług medycznych”).
2. **Słaby dowód dopięty na siłę**: portal Ceny Notarialne jako realizacja dla kancelarii („wykorzystuje Next.js, mapy i dane dla tysięcy lokalizacji”). To portal cen nieruchomości, nie strona kancelarii.
3. **Nagromadzenie rzeczowników odczasownikowych**: „zaczynam od briefu, analizy specjalizacji oraz zaplanowania podstron”, „Serwis uwzględnia RODO, responsywność i wersję mobilną” (responsywność i wersja mobilna to to samo).
4. **Suche, bezosobowe zdania mustHave**: „Pomagają wybrać prawnika odpowiedniego do konkretnego problemu i wzmacniają wiarygodność witryny.”, „Jej struktura pozwala Google poprawnie rozpoznawać i indeksować przetłumaczone podstrony.”
5. **Sprzeczność szkolenia**: tu „godzinne szkolenie”, na WordPressie „30-min szkolenie”, w odzieży „dwugodzinne wdrożenie”.
6. „Przenosiny bez przerwy w działaniu” (patrz sprzeczności).
7. Plus: „czego przy Twojej izbie napisać nie wolno” i notFor są ludzkie, zostawić.

### B2. Gabinety i kliniki (wynik 55, P2)

Lead najlepszy w zestawie branż („wieczorem, z bólem, jedną ręką”). Intro wraca do szablonu.

Problemy:
1. **Zdanie-worek**: „Serwis przygotowuję jako nowoczesną stronę firmową zgodną z zasadami responsywności.”
2. **Nagłówek niezręczny**: „Legalna galeria efektów”.
3. **Nazwa do weryfikacji**: „Booksy, Docplanner, Proassist”. Sprawdzić, czy „Proassist” to właściwa nazwa i czy faktycznie integrujesz te systemy (bez realizacji integracji to obietnica).
4. **Sprzeczność z innymi stronami**: tu uczciwie „Krótka niedostępność może wystąpić podczas aktualizacji ustawień domeny”, gdzie indziej „bez przerwy”, „klient nawet nie zauważy”.
5. **Bezosobowe FAQ**: „Hosting dobierzesz do liczby wizyt...”, „dostarczasz ich interpretację, a ja wdrażam”.
6. „Lighthouse co najmniej 90 punktów” kontra „Lighthouse 95+ w standardzie” na stronie WordPress, którą ta branża linkuje.

### B3. Marki odzieżowe (wynik 50, P3)

Konkretna, dobry przykład z wariantami („Trzydzieści modeli w pięciu rozmiarach i czterech kolorach to sześćset kombinacji”).

Problemy:
1. **Duplikat lead/intro**: lead „tabela wymiarów, skład tkaniny, termin dostawy i dostępność konkretnego wariantu stoją dokładnie tam, gdzie klient decyduje o zakupie”, intro „Tabele wymiarów, skład materiału, zasady zwrotów i dostępność wariantów stoją tam, gdzie klient decyduje o zakupie”.
2. **Kolokwializm w FAQ o cenie**: „do ogarnięcia w stanach magazynowych”.
3. **Sprzeczność progu**: „Przy kilku tysiącach produktów... headless na Next.js” kontra WooCommerce „1000+ SKU... inne technologie”.
4. **Opis realizacji jak z raportu**: „przebudowałem warstwę wizualną, strony kolekcji, karty produktów oraz strukturę kategorii pod frazy zakupowe”, „Kosmoteka pokazuje autorski układ kart, integrację z hurtownią”. Kosmoteka to teleskopy, nie odzież; jako dowód dla marek odzieżowych słaby.
5. Żargon: „Landingi kolekcji”, „GA4 z lejkiem zakupowym”.

### B4. Producenci mebli (wynik 60, P1 ze względu na spójność)

Lead mówi o B2B (stolarnie, akcesoria, PIM/ERP, „kilkaset pozycji, nie kilkanaście”), deliverables opisują markę meblową dla klienta detalicznego i architektów.

Problemy:
1. **Sprzeczność skali**: lead „katalog musi udźwignąć kilkaset pozycji, nie kilkanaście”, deliverables „katalog do 40 modeli z podziałem na kolekcje, pomieszczenia”.
2. **Inny odbiorca w deliverables**: „Strefa dla architekta z plikami CAD, próbkami wybarwień”, „na maksymalnie pięć adresów przedstawicieli” vs lead o hurtownikach i stolarniach.
3. **Nazwa projektu w prozie**: „projekt AdAwards Meble” (w slugu `admeble`); sprawdzić poprawną nazwę marki.
4. **Szablonowe zdania**: „Parametry wynikają ze sposobu, w jaki klienci szukają elementów i mebli.”, „To trafniejsze rozwiązanie niż koszyk”.
5. **Żargon bez wyjaśnienia dla właściciela stolarni**: „PIM albo ERP”, „DWG” (dla projektantów OK, ale warto jedno zdanie).
6. Odmiana: „witrynach Multikonu” poprawnie, ale obok „Stys-Glass, firmy wykonującej hartowanie” (lepiej: „zajmującej się hartowaniem”).

### B5. Hotele i pensjonaty (wynik 50, P3)

Lead z konkretnym argumentem (prowizja zostaje u obiektu).

Problemy:
1. **Brak nazw silników rezerwacji**: kliniki podają Booksy/Docplanner, tu tylko „Silnik rezerwacji”, „narzędziem obsługującym rezerwacje”. Ogólnik tam, gdzie właściciel oczekuje nazw.
2. **Pain o prowizji zakończony PR-owo**: „Własna strona hotelu tworzy dodatkowy kanał sprzedaży, w którym samodzielnie przedstawiasz warunki”.
3. **Sprzeczność terminu z innymi**: „5-8 tygodni” (sensowne, ale nieuzasadnione wobec 4-6 dla innych branż; wystarczy zdanie dlaczego).
4. **Bezosobowe FAQ**: „Możesz pozostawić obecną domenę niezależnie od zmiany strony, hostingu i CMS.”, „Zaplanuj publikację co najmniej kilka tygodni”.
5. Fakt do sprawdzenia: „trzygwiazdkowy obiekt pod Kobylą Górą” (kategoryzacja obiektu).

### B6. Firmy budowlane (wynik 50, P2)

Lead ludzki („często stojąc na placu budowy”). Deliverables pisane dla innego klienta.

Problemy:
1. **Sprzeczność odbiorcy**: lead „dekarzy, brukarzy i wykonawców wykończeń”, deliverables „dane oddziałów, przypisanie powiatów do ekip oraz automatyczne kierowanie zapytań” (to firma z oddziałami, nie brukarz).
2. **Niekonsekwentna forma**: „czy dojeżdżacie w jego okolicę”, „szukają Was klienci” (Wy) obok „Zdjęcia mówią to za Ciebie” (Ty).
3. **Tautologia i błąd odmiany**: „Dla Dom Bez Wad powstała witryna... a realizacja Dom Bez Wad pokazuje prezentację powiązanych usług” („pokazuje prezentację”, nieodmieniona nazwa).
4. **Konfigurator jako „must have”**: mustHave „Wstępna kalkulacja” kontra FAQ „Konfigurator ma sens, gdy... Przy złożonych remontach lepszy jest formularz”. Must have czy opcja?
5. **Pain bez rozwiązania**: „Sezonowe spadki zapytań... plan publikacji pozwalają wcześniej rozwijać pozycjonowanie” (ogólnik).

### B7. Influencerzy (wynik 58, P2)

Lead z dobrym obserwacyjnym argumentem (plik media kitu zawsze nieaktualny). Uczciwe przyznanie braku realizacji, ale sformułowane sztywno.

Problemy:
1. **Sztywne zdanie o braku realizacji**: „nie przedstawiam projektów z innych branż jako takiego doświadczenia”. Intencja dobra, forma urzędowa.
2. **Sprzeczność nagłówka**: „Strony dla twórców, które zrobiłem” przy braku realizacji.
3. **Kalki**: „Centrum wszystkich linków” (link in bio), „Centrum współprac”.
4. **Pain „Zależność od platform” jak z poradnika**: „Zmiana algorytmu może ograniczyć dostęp do odbiorców budowanych przez lata.”
5. **Zdania-listy bez głosu**: „Panel CMS pozwala samodzielnie zmieniać statystyki, współprace, wpisy i ofertę bez używania gotowego kreatora.”
6. Plus: notFor („szkoda Twoich pieniędzy”) jest ludzki, zostawić.

### B8. Streamerzy (wynik 55, P3)

Lead trafia w specyfikę (ruch z czatu, nie z Google).

Problemy:
1. **Anglicyzmy dopuszczalne dla grupy, ale nierówno**: „twórców gamingowych”, „merch”, „klipy”, „przykłady aktywacji” (to ostatnie to żargon agencyjny, nie streamerski).
2. **Sprzeczność nagłówka**: „Strony dla twórców, które zrobiłem” przy „Nie mam w portfolio wdrożenia”.
3. **Kulawe zdanie**: „Jako aplikacja Next.js serwis może pobierać dane udostępniane przez platformę.”
4. **Ostrożnościowe zdania powtarzane w kółko**: „w zakresie”, „jeśli platforma udostępnia”, „po poprawnej konfiguracji autoryzacji”, „które Discord udostępnia zewnętrznym serwisom”. Poprawne, ale cztery razy na jednej stronie.
5. Termin „2-4 tygodnie” najkrótszy w zestawie przy integracji API (OK, ale z ryzykiem wobec „czasu potrzebnego na uzyskanie dostępu do ich interfejsów”).

---

## Część 3. Duplikaty między stronami

| Powtarzany fragment lub idea | Gdzie |
|---|---|
| „Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.” | WordPress, WooCommerce, headless, nowoczesne, software house, Jamstack, React, AI, opieka, przyspieszanie, BaseLinker (11×), w wariantach też www i firmowa |
| „Wycena zależy od [lista czynników]” jako otwarcie FAQ o cenie | 10 usług |
| „30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h.” | WordPress, www (słowo w słowo) |
| „SEO od pierwszego dnia” (nagłówek), „Search Console od pierwszego dnia” | WordPress, www, firmowa („Lokalne SEO od pierwszego dnia”), kancelarie, budowlane |
| „Design zatwierdzasz w Figmie przed pierwszą linijką kodu” / „Klient akceptuje design przed rozpoczęciem kodu” / „Makieta trafia do akceptacji przed kodem” | WordPress, www, nowoczesne, aplikacje-nextjs, kancelarie |
| „bez archeologii” | software house, aplikacje-nextjs |
| „Pogadajmy o ..., 30 minut” (CTA) | WooCommerce, headless, nowoczesne, aplikacje-nextjs |
| „60 dni gwarancji i bezpłatnych poprawek” | WordPress, www (×2), firmowa (jako „opieka 60 dni”) |
| „Bez Elementora, Avady ani Divi” | WordPress (×3), WooCommerce, kancelarie, budowlane |
| Zestaw „WebP/AVIF + lazy loading” | WordPress, WooCommerce, przyspieszanie, kliniki, odzież, meble, hotele, budowlane |
| „przekierowania 301 / zachowuję rankingi” | WooCommerce, firmowa, Jamstack, aplikacje-nextjs, kancelarie, odzież, meble |
| Akapit „dobór technologii: treść → WordPress, logika → Next.js” | www, nowoczesne (intro + FAQ), firmowa, aplikacje-nextjs, kliniki, hotele |
| Opis ISR/CDN/Sanity | headless, Jamstack, nowoczesne, firmowa |
| „Pracuję z Wrocławia, zdalnie cała Polska i Niemcy, link do wersji testowej po etapie” | WordPress FAQ, www FAQ, aplikacje-nextjs FAQ i intro |
| „Obraz strony jako 5-50 osób” | firmowa, AI (meta) |
| Pierwsze zdanie intro każdej branży = fraza główna | wszystkie 8 branż |

---

## Część 4. Twierdzenia sprzeczne ze sobą

1. **Przerwa przy migracji**: „Migracja na produkcję bez przerwy” (WordPress), „Migracja DNS bez przerwy” (firmowa), „klient nawet nie zauważy” (www), „Przenosiny bez przerwy w działaniu” (kancelarie) **kontra** „Krótka niedostępność może wystąpić podczas aktualizacji ustawień domeny” (kliniki). Kliniki mówią prawdę.
2. **Próg Lighthouse**: „Lighthouse 95+ w standardzie” (WordPress, headless), „Lighthouse 90+” (firmowa, www, aplikacje-nextjs „90+ ... często 100”), „co najmniej 90 punktów” (kliniki), „CWV 95+” (PRODUCT.md).
3. **LCP**: „poniżej 2.5s” (WordPress, przyspieszanie), „poniżej 2s” (WooCommerce, firmowa), „poniżej 1.5s” (headless), „<1s” (Jamstack), „poniżej 200 ms” pierwsze wyświetlenie (aplikacje-nextjs).
4. **O ile szybciej**: „3x” (headless intro), „2-5x” (headless FAQ), „Od 5 do 50 razy” (Jamstack).
5. **Czas wyceny**: „w 24h” (większość), „wycena w 48h” (WooCommerce), „audyt w 48h” vs „Audyt: 2-3 dni robocze” (przyspieszanie), branże: „po przeczytaniu briefu” bez terminu.
6. **Staż**: „od 2020” (www, WordPress), „sześcioletnim stażem w tych technologiach” (software house, o Next.js), „Next.js od 2024 roku mój główny obszar pracy”, „React od 2020”, „Jamstack od 2022”.
7. **Liczba wdrożeń**: „ponad 25 wdrożeń WordPress” (WordPress) vs „ponad 30 wdrożeń” łącznie (www, PRODUCT.md) przy dodatkowych sklepach, aplikacjach i projektach Next.js. Do sprawdzenia, czy liczby się sumują.
8. **Rynki**: „PL + DE” (PRODUCT.md, WordPress, www) vs „Niemiec, Holandii i USA” (aplikacje-nextjs).
9. **Granica WooCommerce**: „1000+ SKU... sugeruję inne technologie” vs „poniżej 2s LCP nawet przy 1000+ produktach” vs „Przy kilku tysiącach produktów... headless” (odzież) vs „PrestaShop albo architekturę headless” (FAQ Woo).
10. **Szkolenie**: „30-min szkolenie” (WordPress), „godzinne szkolenie” i „godzina szkolenia” (kancelarie), „dwugodzinne wdrożenie” (odzież).
11. **MVP/aplikacje**: „4-12 tygodni” (lead), „MVP w 4-6”, „średnia skala 8-16” (software house), „aplikacja 6-12 tygodni” (www), „8-16 tygodni” (aplikacje-nextjs), AI „4 tygodnie” vs „POC 2 tygodnie”.
12. **Strona firmowa**: lead „3-6 tygodni” vs FAQ „2-3 / 4-6”; stack „WordPress najtaniej” vs proces „Next.js + Sanity”.
13. **Kreatory**: „bez gotowych kreatorów” (WordPress, branże) vs „ACF Pro lub Bricks Builder” (WordPress bullet).
14. **Nowoczesne strony**: CMS „headless WordPress” (intro) vs „Sanity/Contentful” (proces).
15. **BaseLinker**: „Samo podpięcie to kilka minut” vs „kilka godzin pracy”.
16. **Wyjątkowość etyki**: „którego nie ma żadna inna branża” (kancelarie) vs ograniczenia reklamy medycznej (kliniki).
17. **Nazwa profilu Google**: „Google Business Profile sync”, „profil Google Business” (firmowa) vs „Profil Firmy w Google” (branże; to poprawna polska nazwa).
18. **Skala katalogu meblowego**: „kilkaset pozycji” (lead) vs „do 40 modeli” (deliverables).
19. **SEO a szybkość**: „Google obniża pozycje za słabe Core Web Vitals” (przyspieszanie, lead), „Lighthouse 95+ wpływa na rankingi” (headless), „wyższe rankingi niż typowy WordPress” (Jamstack) vs uczciwe „pomagają, ale nie zastąpią treści i linków” (przyspieszanie FAQ).

---

## Część 5. Kolejka przepisywania (od najpilniejszej)

1. **nowoczesne-strony-internetowe**: slogan H1 po angielsku, Awwwards, name-dropping, kod w copy, sprzeczny CMS.
2. **next-js-software-house**: „micro software house / SME” w H1, liczby o konkurencji, sprzeczny staż i terminy.
3. **aplikacje-nextjs**: kluczowa money page; usunąć superlatywy („najszybszej technologii”, „200 ms”), ujednolicić rynki, anglicyzmy „premium”.
4. **nowoczesna-strona-firmowa-2026**: pakiet dla MŚP opisany procesem drogiej strony; fałsz o Map Pack; 70% bez źródła.
5. **wdrozenia-ai**: slogan H1, liczby 70% / 80% / 2-3x, sprzeczne terminy, brak nazwanego wdrożenia.
6. **strony-jamstack**: superlatywy i fałsze o Google; rozważyć, czy strona w ogóle powinna mówić językiem „Jamstack” do właściciela firmy.
7. **producenci mebli** (branża): uzgodnić lead z deliverables (B2B kilkaset pozycji vs 40 modeli dla detalu).
8. **Wspólna poprawka wszystkich branż**: usunąć podwójne otwarcie frazą, zróżnicować szkielet intro, wyciąć wstawione krótkie zdania w pierwszym „pains”, przepisać bezosobowe FAQ na pierwszą osobę, dopisać „gdzie”, zweryfikować limity w deliverables, poprawić nagłówek realizacji u influencerów i streamerów.
9. **sklepy-internetowe-woocommerce**: statystyka 30%, próg 1000+ SKU, powtórzenia FAQ, 48h.
10. **headless-wordpress**: żargon w leadzie, sprzeczne mnożniki szybkości, „attack surface”.
11. **tworzenie-stron-www**: „Hub”, pęknięcie głosu w końcowym FAQ, „większość klientów wraca”.
12. **tworzenie-stron-wordpress**: Bricks vs „bez kreatorów”, liczby 800 i 200-400 KB, „custom theme”.
13. **aplikacje-react**: H1 z żargonem, cienka treść, UoD.
14. **firmy budowlane**, **kancelarie**, **kliniki**, **influencerzy**: poprawki z list powyżej (po wspólnej poprawce z punktu 8).
15. **przyspieszanie**, **opieka**, **hotele**, **odzież**, **streamerzy**, **BaseLinker**: lekki szlif i usunięcie sprzeczności liczbowych.

Przed przepisywaniem: jedna tabela „liczby kanoniczne” (staż, liczba wdrożeń, rynki, progi Lighthouse/LCP, terminy per typ projektu, czas wyceny, długość szkolenia, gwarancja, polityka przerwy przy migracji) i każda strona bierze liczby tylko z niej.

---

## Część 6. Dziesięć zasad stylu do briefu przepisywania

1. **H1 = co + dla kogo, lead = co + dla kogo + gdzie.** Zero sloganów w H1 („Design-led, nie stack-led”, „Strona działa, Ty pracujesz”). W leadzie jedno zdanie o miejscu: „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”
2. **Każda liczba ma pokrycie** w realizacji, pomiarze albo tabeli liczb kanonicznych. Bez statystyk rynkowych bez źródła (30%, 70%, „większość agencji liczy 30-50 ludzi”), bez superlatywów („najszybsza technologia”, „Awwwards”, „<1s globalnie”) i bez obietnic rankingów.
3. **Polskie słowo, gdy istnieje**: własny motyw (nie custom theme), na zamówienie (nie custom/customowy), wydajność (nie performance), wersja testowa (nie staging), wdrożenie (nie deploy), rozpoznanie (nie discovery), prototyp (nie proof of concept), mała firma (nie SME). Nazwy produktów (Next.js, WooCommerce, BaseLinker) zostają.
4. **Żargon tylko z tłumaczeniem korzyści.** Jeśli pada LCP, ISR, CDN, schema, to w tym samym zdaniu po ludzku, co to daje właścicielowi. Żadnego kodu w treści (`color: peach`, `prefers-reduced-motion`), żadnych strzałek i plusów zamiast spójników.
5. **Jeden głos: „ja” i „Ty”.** Nie „klient widzi”, nie „dobieramy” przy solo pracy, nie bezosobowe „Hosting dobierzesz”, „Otrzymasz”. Na stronach branżowych konsekwentnie „Ty”, bez przeskoków na „Wy”.
6. **Fraza główna raz w H1 i raz w pierwszym akapicie**, nie jako otwarcie dwóch kolejnych akapitów. Pytania FAQ tak, jak pyta człowiek o swoją jedną stronę („Ile potrwa strona dla mojego hotelu?”), nie „tworzenie stron dla hoteli i pensjonatów”.
7. **Bez półpauz i pauz w prozie i tytułach meta.** Zamiast „—” dwukropek, przecinek lub kropka. Zakresy liczbowe jako „od 4 do 6 tygodni” albo „4-6 tygodni” konsekwentnie; ułamki z przecinkiem („2,5 s”).
8. **Zróżnicowany rytm bez tików.** Nie wstawiać krótkiego zdania-puenty w to samo miejsce każdej karty, nie zaczynać FAQ o cenie od „Wycena zależy od”, nie kończyć odpowiedzi zdaniem „Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem”. Każda odpowiedź o cenie nazywa jeden główny czynnik kosztu dla tej usługi (jak dobre przykłady: „Najwięcej waży silnik rezerwacji”, „wycenia się przez warianty”).
9. **Dowód zamiast deklaracji.** Każda strona usługi ma jeden nazwany projekt z jednym konkretem (co było, co zrobiłem, co wyszło). Tam, gdzie realizacji nie ma (influencerzy, streamerzy, AI), mówimy to prosto jednym zdaniem i nie nadajemy sekcji nagłówka „które zrobiłem”.
10. **Uczciwe granice, bez frazesów.** Wyciąć „Bez ukrytych kosztów”, „Zero niespodzianek”, „Bez ściemy”, „Idealnie”, „Dobra wiadomość”, aforyzmy i przytyki do konkurencji. Zostawić i rozwijać to, co działa: sekcje „notFor”, „Kiedy WooCommerce nie będzie dobrym wyborem”, „Co jeśli efektu nie będzie”, szczere zastrzeżenia o migracji i Google. Wzorcem tonu jest strona BaseLinker i lead gabinetów.
