Użyj skilla Mistrz Blogowania.

Zadanie: przepisz od nowa treść trzech stron usługowych (druga partia) na stronie freelancera web developera Marcina Siwonia (marcinsiwonia.pl). Cel: tekst ludzki, konkretny, bez kalk z angielskiego i bez nieprawdziwych obietnic, lepszy od konkurencji dla nietechnicznego właściciela firmy. Pierwsza osoba (ja, Marcin) i zwracanie się na „Ty”.

Dla każdej strony dostajesz: obecną treść (dane TypeScript), listę problemów z audytu i uwagi. Zachowaj sens i fakty, popraw formę. Liczby i obietnice bierz WYŁĄCZNIE z sekcji FAKTY KANONICZNE. Zero kwot w złotych.

FORMAT WYNIKU (dla każdej strony dokładnie tak, bez komentarzy):

=== STRONA: [slug] ===
METATITLE: … (maks. 65 znaków, tylko jeśli wolno zmienić, inaczej przepisz obecny bez zmian)
METADESCRIPTION: … (140-155 znaków)
H1: …
LEAD: … (1-2 zdania: co, dla kogo, gdzie)
INTRO:
[akapit 1]
[akapit 2]
[akapit 3 opcjonalnie]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4 pozycje, tytuł informacyjny, nie slogan)
PROCES:
- Tytuł: … | Treść: … (tyle kroków, ile ma obecna strona)
FAQ:
- P: … | O: … (tyle pytań, ile ma obecna strona, odpowiedzi 2-4 zdania, każda o cenie nazywa jeden główny czynnik kosztu tej usługi)
CTA: … (jedno krótkie zdanie na końcowy baner)

Linki wewnętrzne w treści zostaw w formie Markdown [tekst](/adres) tam, gdzie były (maks. 3-4 na stronę).



DODATKOWO dla wdrozenia-ai po sekcji CTA dopisz:
PORADNIK:
# [nagłówek bloku z frazą „wdrożenie AI”]
[intro 2 akapity]
### 6 sekcji (1-3 akapity, w części lista): 1) które procesy w małej firmie nadają się do AI, a które nie; 2) jak wygląda wdrożenie krok po kroku, zaczynając od małego prototypu na jednym procesie; 3) od czego zależy koszt (bez kwot: model i koszty API, integracje z systemami firmy, przygotowanie danych, kontrola jakości, utrzymanie); 4) bezpieczeństwo danych i RODO (jakie dane wysyłamy do modelu, anonimizacja, umowy powierzenia, gdzie są przetwarzane); 5) AI Act w praktyce dla małej firmy (fakty niżej); 6) jak mierzyć, czy wdrożenie działa (co mierzyć przed i po, kiedy wyłączyć).
Długość poradnika 1000-1300 słów. Bez wymyślonych przypadków klientów.

FAKTY O AI ACT (sprawdzone 26.09.2026): rozporządzenie UE 2024/1689 (AI Act). Od 2 sierpnia 2026 r. stosuje się art. 50: system AI rozmawiający z człowiekiem, np. chatbot na stronie, musi informować, że użytkownik rozmawia z AI, chyba że wynika to jasno z okoliczności; treści generowane przez AI (np. deepfake) wymagają oznaczenia. Obowiązki dla systemów wysokiego ryzyka zostały przesunięte w czasie przez tzw. pakiet Digital Omnibus z 2026 r. Typowe zastosowania w małej firmie (chatbot FAQ, szkice opisów, klasyfikacja maili) zwykle nie są systemami wysokiego ryzyka, ale trzeba to sprawdzić przy każdym wdrożeniu.

# ZASADY STYLU
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


# FAKTY KANONICZNE
# Fakty kanoniczne marcinsiwonia.pl (26.09.2026)

Każdy tekst na stronie bierze liczby i obietnice TYLKO stąd. Wybrane z istniejących treści; gdzie strony sobie przeczyły, przyjęta wersja ostrożniejsza. Do potwierdzenia przez Marcina.

## Kim jestem
- Marcin Siwonia, freelancer, web developer z Wrocławia. Kod piszę sam, klient rozmawia bezpośrednio ze mną.
- Strony komercyjne robię od 2020 roku (wtedy etat frontend developera w software house we Wrocławiu); na swoim od końca 2022 roku.
- Ponad 30 wdrożeń komercyjnych dla firm z Polski i Niemiec (hotele, kancelarie, sklepy, restauracje, lokalne usługi, producenci). Rynki: Polska i Niemcy. Nie podawać osobnej liczby wdrożeń WordPress.
- Pracuję zdalnie z całą Polską i Niemcami, spotkanie startowe online, po każdym etapie link do wersji testowej.
- Adres działalności: ul. Kurkowa 32/57, Wrocław (nie pisać o biurze ani spotkaniach na miejscu).
- Kontakt: formularz na /kontakt, e-mail marcin.siwonia.firma@gmail.com. Odpowiedź z pierwszą oceną w 24 godziny robocze.

## Obietnice procesowe
- Wycena: po krótkiej rozmowie i briefie, z zakresem i terminem. Bez podawania kwot na stronach sprzedażowych.
- Projekt: makiety w Figmie, dwie tury poprawek, akceptacja przed kodowaniem.
- Szybkość: przed oddaniem Lighthouse 90+ na telefonie; cel LCP poniżej 2,5 s (próg „dobry” Google). Konkretne, zmierzone wyniki tylko z realizacji (Kantorymapa: ładuje się poniżej sekundy).
- Migracja: przygotowana tak, żeby przerwa była jak najkrótsza; przy zmianie DNS może wystąpić krótka niedostępność. Przekierowania 301 dla starych adresów. Nie obiecywać zachowania pozycji.
- SEO: struktura nagłówków, dane strukturalne, mapa strony, Search Console przy wdrożeniu, GA4 dopiero po zgodzie na cookies. Nie obiecywać pozycji ani „wyższych rankingów”.
- Szkolenie z edycji treści online (bez podawania długości).
- Gwarancja: 60 dni gwarancji i bezpłatnych poprawek po starcie; potem opcjonalna opieka w miesięcznym abonamencie bez umowy na rok.
- WordPress: własny motyw, edycja sekcji 1:1 z designem (ACF), bez Elementora, Divi, Avady i innych kreatorów w nowych projektach.

## Terminy (typowe, ustalane po briefie)
- Strona prosta / wizytówka: 2-3 tygodnie.
- Strona firmowa / usługowa: 4-6 tygodni.
- Sklep WooCommerce mniejszy: 6-8 tygodni; średni z B2B, wersjami językowymi i migracją: 10-14 tygodni.
- Aplikacja / MVP w Next.js: zwykle 6-12 tygodni.
- Wdrożenie AI, audyt wydajności, integracja BaseLinker: termin po rozpoznaniu, bez stałej liczby.

## Stack
- WordPress + ACF, WooCommerce; Next.js (App Router), React, TypeScript, Tailwind; Clerk lub NextAuth, Postgres z Prisma lub Drizzle, Stripe; Sanity lub Strapi jako CMS; Vercel albo własny VPS; Astro przy serwisach statycznych z danych.
- AI: API OpenAI i Anthropic, własne procesy z weryfikacją, RAG. Własny przykład: cojestpolskie.pl (research właścicieli marek z kontrolą w KRS i CRBR).

## Realizacje, na które można się powoływać (fakty z lib/projects.ts)
- Kantorymapa (Next.js, własny produkt): 1900 kantorów w 140 miastach, kursy NBP codziennie, programmatic SEO, ładuje się poniżej sekundy.
- Galabau Darius (Next.js, klient z Niemiec): konfigurator wyceny ogrodzeń na żywo, panel admina (Clerk), Prisma, Vercel.
- Ceny Notarialne (Next.js): ceny transakcyjne z RCN, mapy MapLibre, tysiące podstron lokalizacji.
- cojestpolskie.pl (Astro, własny): ponad 900 marek, ponad 1700 podstron z jednej bazy, research AI + kontrola w KRS/CRBR.
- owodzie.pl (Astro, własny), Dobry Pupil (Astro, własny), Mebloweporady.pl (WordPress, własny, ponad 400 poradników).
- Kosmoteka (WooCommerce), LumiKids (WooCommerce, Allegro), Kancelaria Maria Piontek (WordPress), Multikon, Maciejanka, Złota Grota, Queen Scarlet, Dom Bez Wad, Stys-Glass i inne komercyjne z listy /projekty.

## Czego NIE pisać
- Statystyk rynkowych bez źródła (30% sklepów, 70% ruchu, „większość agencji”), mnożników szybkości (3x, 5-50x), superlatywów (najszybsza technologia, poziom Awwwards), porównań z nazwanymi studiami.
- Rynków innych niż Polska i Niemcy. Obietnic pozycji w Google. Kwot w złotych.
- „Bez ukrytych kosztów”, „zero niespodzianek”, „bez ściemy”, „idealnie”, przytyków do konkurencji.



# STRONA nowoczesne-strony-internetowe
Uwagi: Fraza: „nowoczesne strony internetowe”. Możesz zmienić H1 i metaTitle (bez „design-led”, „custom cursor”). Bez powoływania się na Awwwards i nazwane studia. Bez kodu w treści. Pisz o tym, co daje firmie dopracowany wygląd, animacje i mikrointerakcje, i kiedy to ma sens, a kiedy nie. Przykłady realizacji z listy faktów (np. Kantorymapa, Ceny Notarialne, Galabau Darius) tylko w tym, co tam faktycznie jest.

## Problemy z audytu
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


## Co mają konkurenci (analiza top stron)
## 5. „nowoczesne strony internetowe” → /uslugi/nowoczesne-strony-internetowe

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| yeswhite.com/oferta/strony-internetowe/ | ~3500 | 12 | 14 | nie („od kilku tysięcy zł”) | 12+ realizacji z nazwą klienta, rok darmowego wsparcia, WCAG 2.2 AA, 10 opisanych modułów |
| b-w-d.pl (freelancer, Wrocław) | ~1200 | 5 | 0 | nie | 3 case z liczbami (1. miejsce na „pracownia sztuki Wrocław” w 3 tyg., 1965 wyświetleń w Mapach), 5/5 Google, darmowa wycena |
| projektweb.pl/oferta/strony-internetowe/ | ~1100 | 3 | 0 | tak (1800 zł) | brak portfolio na stronie, „bez gotowych szablonów” |
| **nasza** | **663** | 4 | 6 | nie | 1 case (cojestpolskie.pl, Lighthouse 95–100), obsługa reduced motion |

**Luki w treści:** nasza strona mówi do projektanta (ScrollTrigger, R3F, OKLCH, tokeny Tailwind), konkurencja do właściciela firmy (UX, konwersja, pierwsze wrażenie, mobile); brak sekcji „co robi nowoczesna strona dla biznesu” (szybkość, zaufanie, zapytania); brak dostępności WCAG jako cechy nowoczesnej strony (yeswhite ma osobny H2); brak listy materiałów od klienta i tematu zdjęć; brak opisu wsparcia po wdrożeniu i abonamentów.

**FAQ, których nie mamy:** Ile trwa stworzenie strony www? (mamy wariant) / Jak wyglądają prace projektowe? / Jakie materiały muszę dostarczyć? / Czy warto zainwestować w indywidualny projekt strony? / Co zrobimy ze zdjęciami do strony, jeśli ich nie mam? / Czy moja strona będzie dostosowana do telefonów? / Czy strona będzie zoptymalizowana pod SEO? / Czy otrzymam wsparcie techniczne do strony? / Czy po wdrożeniu strony będę płacił dodatkowy abonament? / Kto zajmie się obsługą strony?

**Portfolio:** b-w-d.pl (mały freelancer z Wrocławia, bezpośredni odpowiednik) pokazuje przy każdej realizacji wynik w Google w formacie problem, rozwiązanie, efekt. My mamy jedną realizację z wynikiem Lighthouse, bez efektu biznesowego.

**Rekomendacje:**
1. Naprawić surowy markdown w leadzie i FAQ.
2. Dodać sekcję dla decydenta „Co zyskujesz na nowoczesnej stronie” (pierwsze wrażenie, szybkość mimo animacji, dostępność), a warstwę techniczną zostawić niżej.
3. Sekcja „Od czego zależy koszt”: zakres animacji, 3D, CMS, liczba szablonów podstron, własna logika.
4. Dodać 2–3 realizacje w formacie problem, rozwiązanie, efekt; efekt tylko z danych właściciela (GSC, zapytania). NIESPRAWDZONE.
5. Dopisać FAQ: materiały od klienta, zdjęcia, abonament po wdrożeniu, WCAG, telefony.

---


## Obecna treść
    slug: "nowoczesne-strony-internetowe",
    title: "Nowoczesne strony internetowe",
    metaTitle: "Nowoczesne strony internetowe — design, animacje, custom cursor",
    metaDescription:
      "Nowoczesne strony internetowe z animacjami GSAP, własnym kursorem, przejściami między podstronami i elementami 3D. Projekt od wersji mobilnej. Wrocław i online.",
    h1: "Nowoczesne strony internetowe. Design-led, nie stack-led.",
    lead:
      "Strony na poziomie realizacji nagradzanych w Awwwards. Animacje, własny kursor, przejścia między widokami, efekty uruchamiane przewijaniem. Technologię dobieramy do projektu, nie odwrotnie. Jeśli szukasz konkretnej technologii, zajrzyj do [Stron WordPress](/uslugi/tworzenie-stron-wordpress) albo [Stron Next.js](/uslugi/aplikacje-nextjs).",
    intro: [
      "Tę usługę robię dla klientów, którym standardowy szablon nie wystarczy. Marka ma zostać zapamiętana, oferta jest z wyższej półki, a konkurencja wciąż ma strony z 2018 roku. Wtedy ma sens wejść na poziom Lusion, ActiveTheory czy raviklaassens.com.",
      "Co dostajesz wizualnie: własny kursor, animacje uruchamiane przewijaniem (GSAP ScrollTrigger), przejścia między widokami, elementy 3D w R3F (jeśli pasują), mikrointerakcje po najechaniu kursorem, ciemny motyw jako stan domyślny. Do tego standardy 2026: Core Web Vitals 95+, schema.org dla AI search, obrazki OG per podstrona.",
      "Konkretną technologię dobieram po briefie. Jeśli strona to głównie treści, które klient chce edytować sam, wybieram headless WordPress. Jeśli ma własną logikę i panel, Next.js. Szczegóły techniczne [opisałem osobno dla WordPressa](/uslugi/tworzenie-stron-wordpress) i [dla Next.js](/uslugi/aplikacje-nextjs).",
    ],
    bullets: [
      {
        title: "Animacje z ScrollTriggera",
        body: "GSAP ScrollTrigger, przejścia między widokami, elementy pojawiające się kolejno, paralaksa. Każda sekcja wita się inaczej. Ustawienie ograniczenia ruchu jest respektowane.",
      },
      {
        title: "Własny kursor i mikrointerakcje",
        body: "Kursor zmienia się nad linkami, projektami i formularzami. Hovery dopracowane w detalu, nie tylko `color: peach`.",
      },
      {
        title: "3D bez ciężaru",
        body: "React Three Fiber do pojedynczych efektów (pierwszy ekran, przeciągalna sfera 3D, scena przy przewijaniu). Ładowany z opóźnieniem, na telefonie statyczny zamiennik.",
      },
      {
        title: "Dark mode natywny",
        body: "Strona projektowana w ciemnym trybie od początku, jasny jako dodatek (nie odwrotnie). Paleta OKLCH, głębia przez gradienty i szum.",
      },
    ],
    process: [
      { step: "01", title: "Rozpoznanie i benchmarki", body: "Audyt obecnej strony (jeśli jest) + 3 referencje docelowe. Mierzymy wyjściową wydajność." },
      { step: "02", title: "Design i tokeny", body: "Design system w Figmie, z niego tokeny Tailwind, z nich komponenty. Spójność od projektu po kod." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router, Sanity/Contentful jako CMS, Vercel preview deploys per PR." },
      { step: "04", title: "Performance + SEO", body: "Audyt Lighthouse każdej podstrony, schema, obrazy OG, sitemap, Search Console." },
    ],
    faq: [
      { q: "Czym 'nowoczesna' różni się od zwykłej strony?", a: "Designem i interakcją, nie technologią. Zwykła strona prezentuje treść. Nowoczesna prowadzi przez treść animacjami, custom kursorem, przejściami między podstronami. Stack (WordPress, Next.js) dobieramy do potrzeb edycji, nie do efektu." },
      { q: "Jaki stack pod spodem?", a: "Zależy od briefu. Strona content-first z redakcją: WordPress headless + Next.js frontend. Aplikacja z panelem: Next.js end-to-end. Konkretne porównanie [w usłudze Strony Next.js](/uslugi/aplikacje-nextjs)." },
      { q: "Ile to kosztuje?", a: "Wycena zależy od zakresu animacji, headless CMS, customowej logiki oraz tego, czy powstaje strona firmowa, produktowa lub aplikacja. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa projekt nowoczesnej strony?", a: "Strona firmowa z animacjami: 6-10 tygodni od briefu do startu. Z headless CMS i customową logiką: 10-16 tygodni. Design zatwierdzasz w Figmie przed pierwszą linijką kodu." },
      { q: "Czy klient nadal edytuje sam?", a: "Tak. Sanity, Contentful albo headless WordPress jako CMS. Animacje skonfigurowane raz przez programistę, treść edytowalna w panelu." },
      { q: "Czy reduced motion zostanie obsłużony?", a: "Tak, każda animacja respektuje `prefers-reduced-motion`. Użytkownicy z włączonym ustawieniem dostają statyczną wersję bez parallaxu i transitions." },
    ],
    cta: "Pogadajmy o nowoczesnej stronie, 30 minut",


# STRONA nowoczesna-strona-firmowa-2026
Uwagi: Fraza: „strona internetowa dla małej firmy” (też „strona firmowa dla małej firmy”). Możesz zmienić H1 i metaTitle. To pakiet dla małej firmy: prosty, rozsądny zakres, zwykle WordPress. Usuń sprzeczność z procesem drogiej strony na Next.js i Sanity. Bez „70% ruchu” i bez obietnic Map Pack. Wyjaśnij, co powinna zawierać strona małej firmy.

## Problemy z audytu
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


## Co mają konkurenci (analiza top stron)
## 4. „strona internetowa dla małej firmy” → /uslugi/nowoczesna-strona-firmowa-2026

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| ansite.pl/strony-internetowe-wroclaw/ | ~3000 | 8+ | 10 | tak (od 2900 / 3900 / 8900 zł netto) | 6 realizacji z nazwą (m.in. szpital z WCAG 2.1), 12 mies. gwarancji, Google Partner, teksty SEO w usłudze |
| promo-peak.pl/oferta/tworzenie-stron-internetowych/dla-malej-firmy/ | ~2700 | 14 | 6 | tak (od 3499 / 4499 zł netto) | 12 mies. gwarancji, domena i hosting na rok, odpowiedź w 24 h, właściciel z imienia |
| webikom.pl | ~1200 | 6 | 6 | tak (od 599 zł) | dane rejestrowe firmy, termin ok. 2 tygodni, brak opinii |
| **nasza** | **690** | 4 | 6 | nie | 4 realizacje (Piontek + 3), wycena w 24 h, 60 dni opieki, Lighthouse 90+, szkolenie z edycji |

**Luki w treści:** brak sekcji „dlaczego mała firma potrzebuje strony” i „jakie funkcje może mieć” (promo-peak ma obie); brak informacji o domenie, hostingu i poczcie (kto zakłada, czyje są); brak jasnej odpowiedzi, kto pisze teksty i robi zdjęcia; brak kosztów utrzymania po wdrożeniu; brak porównania wizytówka vs strona firmowa vs sklep; komunikat techniczny (Next.js, Sanity, Figma, prototyp animacji) nie pasuje do właściciela małej firmy i przeczy „WordPress najtaniej”.

**FAQ, których nie mamy:** Jak długo trwa proces tworzenia strony internetowej? (mamy wariant) / Czy firma musi mieć stronę internetową? / Czy strona internetowa będzie widoczna w wyszukiwarkach? / Jakie koszty są związane z utrzymaniem strony internetowej? / Czy pomagacie w zakupie domeny i hostingu? / Czy będę mógł samodzielnie edytować treści na stronie? / Czy oferujecie wsparcie i aktualizacje po zakończeniu projektu? / Czy mogę zamówić stronę internetową z przygotowaniem treści? / Czym jest hosting i domena? / Po co SSL?

**Portfolio:** ansite i my pokazujemy karty realizacji bez liczb. Nasza przewaga: realizacja małej firmy usługowej z opisem, co było celem. Brakuje efektu po wdrożeniu (zapytania, widoczność lokalna).

**Rekomendacje:**
1. Naprawić surowy markdown w FAQ i ujednolicić stack: dla małej firmy prowadzić WordPress, Next.js jako opcję.
2. Sekcja „Od czego zależy koszt strony małej firmy”: liczba podstron, teksty (klient czy wykonawca), zdjęcia, blog, formularze, wersje językowe, migracja starej strony.
3. Blok „Co jest Twoje, a co opłacasz osobno”: domena, hosting, poczta, roczne koszty utrzymania bez kwot, tylko pozycje.
4. Dopisać FAQ: domena i hosting, teksty, koszty utrzymania, samodzielna edycja, widoczność w Google.
5. Rozbudować do ~1500 słów, zachowując odróżnienie od /uslugi/tworzenie-stron-www (anty-kanibalizacja: ta strona ma mówić językiem właściciela małej firmy, tamta ogólnie).

---


## Obecna treść
    slug: "nowoczesna-strona-firmowa-2026",
    title: "Strona firmowa MŚP",
    metaTitle: "Strona firmowa dla małej firmy — pakiet, wycena 24h",
    metaDescription:
      "Strona firmowa dla małej i średniej firmy (5-50 osób): wizytówka, usługi, blog, kontakt. WordPress lub Next.js pod budżet. Wrocław i online.",
    h1: "Strona firmowa dla małej firmy. Pakiet, nie projekt na rok.",
    lead:
      "Pakiet dla firm 5-50 osób, które potrzebują strony szybko, sensownie i bez 200-stronicowego briefu. Wizytówka, usługi, blog, kontakt. Wycena w 24h, wdrożenie 3-6 tygodni. Stack dobieram do budżetu i tego, kto będzie edytował.",
    intro: [
      "Małe i średnie firmy potrzebują strony, którą można obronić przed klientem, edytować bez kodu i pokazać w Google Search Console rosnące rankingi. Pakiet jest pod taki właśnie profil.",
      "Co wchodzi w skład: strona główna z ofertą, 3-5 podstron usług, formularz kontaktowy z anty-spamem, blog (jeśli planujesz pisać), schema.org Organization + LocalBusiness pod lokalne SEO, integracja z Google Search Console i Analytics. Mobile-first, Lighthouse 90+, dostarczane razem ze szkoleniem z edycji.",
      "Pakiet różni się od [nowoczesnych stron z animacjami](/uslugi/nowoczesne-strony-internetowe), gdzie płacisz za efekt brandowy, i od [aplikacji Next.js](/uslugi/aplikacje-nextjs), gdzie płacisz za własną logikę. Tu płacisz za obecność i lokalne pozycjonowanie firmy w sensownym budżecie.",
    ],
    bullets: [
      {
        title: "Mobile-first, bo 70% ruchu",
        body: "70% Twoich klientów wchodzi z telefonu. Projekt mobilny powstaje pierwszy, desktop drugi. LCP poniżej 2s na 4G.",
      },
      {
        title: "Lokalne SEO od pierwszego dnia",
        body: "Schema.org LocalBusiness + Organization, Google Business Profile sync, lokalne frazy w meta, integracja z Search Console.",
      },
      {
        title: "Pakiet, nie worek bez dna",
        body: "Definiujemy zakres na briefie i trzymamy się go. Zmiany zakresu wyceniam osobno, zamiast cicho rozciągać projekt i budżet.",
      },
      {
        title: "Edycja bez kodu",
        body: "WordPress z własnym motywem (najtaniej) albo Sanity (droższe). Klient edytuje treści sam i nie czeka na programistę.",
      },
    ],
    process: [
      { step: "01", title: "Strategia", body: "30-min discovery: kto, dla kogo, jaka konwersja, jakie frazy SEO. Brief w 24h." },
      { step: "02", title: "Design", body: "Moodboard, potem makiety w Figmie, custom design system i prototyp animacji." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router + Sanity CMS + Vercel deploy. Staging od dnia 3." },
      { step: "04", title: "Start", body: "Migracja DNS bez przerwy, schema, sitemap, GA4, Search Console, opieka 60 dni." },
    ],
    faq: [
      { q: "Co powinna zawierać strona internetowa małej firmy?", a: "Minimum: strona główna z ofertą, podstrony usług, dane kontaktowe z mapą i klikalnym telefonem na mobile, formularz. Do tego schema.org LocalBusiness, profil Google Business spięty z tą samą nazwą i adresem oraz podstawy SEO: meta tagi, sitemap, szybkie ładowanie. Blog opcjonalnie, jeśli ktoś faktycznie będzie pisał." },
      { q: "Co jest w pakiecie strony firmowej?", a: "Strona główna, 3-5 podstron usług, formularz kontaktowy, blog (opcjonalnie), schema.org pod lokalne SEO, GA4 + Search Console, mobile-first design, szkolenie z edycji, 60 dni opieki. Wycena zależy od stacku i zakresu i jest przygotowywana indywidualnie po briefie." },
      { q: "WordPress czy Next.js dla mojej firmy?", a: "WordPress jeśli chcesz edytować treści sam i nie planujesz nietypowej logiki. Next.js jeśli zależy Ci na maksymalnej szybkości i jesteś gotów na CMS typu Sanity. Decyzję podejmujemy na briefie." },
      { q: "Ile czasu zajmuje wdrożenie?", a: "Wizytówka (jedna podstrona + kontakt): 2-3 tygodnie. Pakiet firmowy z usługami i blogiem: 4-6 tygodni. Z customową logiką (kalkulator wyceny, panel klienta): osobna usługa, [aplikacje Next.js](/uslugi/aplikacje-nextjs)." },
      { q: "Co jeśli już mam stronę?", a: "Robię migrację. Stare URL-e przekierowuję 301 na nowe (zachowując rankingi SEO), treści przenoszę do CMS, design odświeżam." },
      { q: "Czy schemę LocalBusiness wpinasz dla każdej branży?", a: "Tak, plus dobieramy podtyp pod branżę: LegalService, MedicalBusiness, AccountingService, AutoRepair, Restaurant. Google daje wtedy lepszą widoczność w lokalnym Map Pack." },
    ],
    cta: "Wyślij brief firmowy, dostaniesz wycenę pakietu w 24h",


# STRONA wdrozenia-ai
Uwagi: Fraza: „wdrożenia AI w firmie”. Możesz zmienić H1 (bez sloganu) i metaTitle. Bez liczb 70%, 80%, 2-3x. Jedyny własny przykład: cojestpolskie.pl (research właścicieli marek z AI i kontrolą w KRS i CRBR). Terminy: po rozpoznaniu, zwykle zaczynamy od małego prototypu na jednym procesie. Dodatkowo, POZA formatem strony, napisz blok PORADNIK (patrz niżej).

## Problemy z audytu
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


## Co mają konkurenci (analiza top stron)
## 3. „wdrożenia AI w firmie” → /uslugi/wdrozenia-ai

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| kcmobile.pl/wdrozenia-ai/ | ~4200 | 14 | 10 | tak (od 3000 / 8000 zł + 1500 zł/mc) | imienny założyciel z bio, 30 dni wsparcia, sekcje o AI Act, RODO, prompt injection (OWASP), kalkulator kosztów |
| codescriptum.pl/automatyzacja-procesow-ai/ | ~4200 | 12 | 12 | tak (od 2000 zł, 6–20 tys. zł) | case biura rachunkowego z liczbami (−75% czasu, +20 klientów), 50+ projektów, NDA, odpowiedź w 24 h, kalkulator ROI (opinie NIESPRAWDZONE) |
| studiokozubek.pl/ai-dla-firm | ~1200 | 8 | 5 | tak (2900–15 000 zł) | terminy 1–8 tyg., RODO i serwery w UE, brak portfolio |
| **nasza** | **545** | 4 | 4 | nie | 1 case (cojestpolskie.pl, AI + kontrola w KRS/CRBR), PoC w 2 tygodnie, 80% pomysłów odrzucanych na discovery |

**Luki w treści:** najkrótsza z naszych stron przy najdłuższych stronach konkurencji; brak sekcji „co można zautomatyzować” z listą procesów (maile, dokumenty, oferty, obsługa klienta); brak „kiedy wystarczy automatyzacja bez AI” (n8n, Make); brak sekcji o bezpieczeństwie danych rozpisanej szerzej niż jedno FAQ (RODO, gdzie trafiają dane, AI Act, błędy modelu); brak sposobu liczenia zwrotu z inwestycji; brak listy, co klient przygotowuje do bazy wiedzy; brak integracji ze starymi systemami (Subiekt, Excel). Zdanie „Spadek czasu obsługi nawet 70%” nie ma źródła ani case (NIESPRAWDZONE, do potwierdzenia lub usunięcia).

**FAQ, których nie mamy:** Czy moja firma jest gotowa na wdrożenie AI? / Jak długo trwa wdrożenie AI? / Jakich technologii AI używacie? / Co jeśli AI popełni błąd? / Czy potrzebuję dużych zbiorów danych? / Jakie procesy można zautomatyzować z AI? / Czy oferujecie wsparcie po wdrożeniu? / Jak zmierzyć ROI z automatyzacji AI? / Od czego zacząć automatyzację biznesu? / n8n, Make czy Zapier: które narzędzie wybrać? / Czy automatyzacja AI opłaca się małej firmie? / Czy muszę zmieniać systemy, których używam? / Mam stary system (np. Subiekt, WAPRO, Excel). Czy da się to zintegrować?

**Portfolio:** tylko codescriptum ma case z liczbami. Nasz case cojestpolskie.pl jest mocny merytorycznie (kontrola w rejestrach), ale bez liczb (ile wpisów, ile czasu na markę przed/po).

**Rekomendacje:**
1. Rozbudować do ~1500–2000 słów: sekcje „Co da się zautomatyzować”, „Kiedy AI nie jest potrzebne”, „Bezpieczeństwo danych i AI Act”, „Jak liczę zwrot”.
2. Sekcja „Od czego zależy koszt”: PoC czy produkcja, liczba źródeł wiedzy, integracje, wolumen zapytań (koszt API), monitoring.
3. Do case cojestpolskie.pl dodać liczby z projektu właściciela (liczba sprawdzonych marek, czas researchu jednej marki przed/po). NIESPRAWDZONE.
4. Dopisać 6 pytań FAQ: gotowość firmy, czas wdrożenia, błędy AI, dane do bazy wiedzy, stare systemy, wsparcie po wdrożeniu.
5. Zweryfikować z właścicielem „nawet 70%” i „2-3x”; bez źródła usunąć albo podpiąć pod konkretny case.

---


## Obecna treść
    slug: "wdrozenia-ai",
    title: "Wdrożenia AI",
    metaTitle: "Wdrożenia AI w firmie — chatboty, RAG, automatyzacja",
    metaDescription:
      "Wdrożenia AI dla małych i średnich firm (5-50 osób): RAG na dokumentach, automatyzacja maili, generator treści. OpenAI + Anthropic Claude. POC w 2 tygodnie.",
    h1: "AI, które przynosi liczby, nie tylko demo",
    lead:
      "Większość wdrożeń AI w 2025 roku skończyła się na demie, które nigdy nie trafiło do codziennej pracy. Robię tylko to, co da się zmierzyć zaoszczędzonym czasem albo dodatkowym przychodem.",
    intro: [
      "Pracuję z OpenAI API i Anthropic Claude API. Buduję aplikacje na bazie tych modeli, nie trenuję własnych modeli. Dlatego działające rozwiązanie oddaję w 4 tygodnie zamiast 4 miesięcy. Opisy konkretnych wdrożeń AI w małych i średnich firmach (5-50 osób) znajdziesz w [poście o wdrożeniach AI 2025-2026](/blog/wdrozenia-ai-w-malych-firmach).",
      "Najczęstsze trzy zlecenia: chatbot na bazie wewnętrznych dokumentów (RAG), automatyzacja przetwarzania maili i dokumentów, generator treści z customową logiką brandową.",
    ],
    bullets: [
      {
        title: "RAG na dokumentach klienta",
        body: "Twoja baza wiedzy plus chatbot, który odpowiada i podaje źródło. Postgres z pgvector, embeddingi OpenAI, cytowania źródeł w interfejsie.",
      },
      {
        title: "Automatyzacja maili",
        body: "Klasyfikacja, ekstrakcja danych, propozycja odpowiedzi. Człowiek tylko zatwierdza. Spadek czasu obsługi nawet 70%.",
      },
      {
        title: "Generator treści",
        body: "Proces, który pisze opisy produktów, posty i maile sprzedażowe w stylu marki. Dopracowane polecenia, walidacja wyników, a to, co nie przejdzie, trafia do człowieka.",
      },
      {
        title: "Bez ściemy",
        body: "Zanim cokolwiek wdrożymy, mierzymy obecny czas i koszt procesu. Po wdrożeniu pokazuję twardo o ile się zmieniło.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        body: "Mapowanie procesu, wskazanie, gdzie AI robi różnicę. 80% pomysłów odrzucam tu, bo nie zwrócą się w 12 miesiącach.",
      },
      {
        step: "02",
        title: "Proof of concept",
        body: "Mały prototyp w 2 tygodnie. Klient testuje na realnych danych, decyduje o pełnym wdrożeniu.",
      },
      {
        step: "03",
        title: "Produkcja",
        body: "Ocena jakości odpowiedzi, monitoring kosztów API, limity zapytań, plan awaryjny. Bez tego AI w codziennej pracy to tylko ryzyko.",
      },
    ],
    faq: [
      {
        q: "Ile kosztuje wdrożenie AI w firmie?",
        a: "Wycena zależy od tego, czy powstaje proof of concept na wąskim wycinku procesu, produkcyjny chatbot RAG na dokumentach firmy czy automatyzacja maili. Do tego dochodzą miesięczne koszty API i hostingu. Dokładna wycena po discovery, na którym zresztą odrzucam większość pomysłów, bo się nie zwrócą.",
      },
      {
        q: "Czy moje dane wyciekną do OpenAI?",
        a: "OpenAI i Anthropic domyślnie nie trenują modeli na danych przesyłanych przez API. Dla wrażliwych projektów hostuję modele open-source lokalnie albo na Azure OpenAI.",
      },
      {
        q: "Ile kosztuje miesięczne utrzymanie?",
        a: "Koszty API zależą od wolumenu, a hosting i monitoring są rozliczane osobno. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.",
      },
      {
        q: "Czy AI zastąpi pracownika?",
        a: "Najczęściej nie. Daje przewagę 2-3x w ilości spraw obsłużonych przez tego samego człowieka. Pełna automatyzacja tylko dla bardzo wąskich, powtarzalnych procesów.",
      },
    ],
    cta: "Opisz proces który chcesz odciążyć, odpowiem co da się z tym zrobić",
