Użyj skilla Mistrz Blogowania.

Zadanie: napisz od nowa wpis blogowy na blogu freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl). Obecny wpis ma zmyślone przypadki klientów i liczby bez źródła: wszystkie usuń, nie zastępuj ich innymi wymyślonymi. Zachowaj to, co w obecnym wpisie jest merytorycznie wartościowe. Pierwsza osoba (Marcin), czytelnik: właściciel firmy albo osoba decydująca o stronie, częściowo techniczna.

FORMAT WYNIKU (dokładnie tak, bez komentarzy):
=== WPIS: [slug] ===
TITLE: … (bez roku, bez pauz, maks. 60 znaków)
METATITLE: … (maks. 60 znaków, fraza na początku)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania: odpowiedź na pytanie z tytułu w pierwszym zdaniu)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; jeśli tabela, to w Markdown z nagłówkiem]
## [nagłówek sekcji 2]
… (5-7 sekcji)
FAQ:
- P: … | O: … (5 pytań, odpowiedź 2-4 zdania)

Zasady: 1600-2200 słów bez FAQ. Każda liczba z sekcji FAKTY albo usunięta. Bez em-dashy i półpauz. Nagłówki zdaniowe, informacyjne. Linki wewnętrzne w Markdown [tekst](/adres), maks. 3 w treści. Bez podsumowania „Podsumowując” i bez wezwania do kontaktu na końcu.

# ZASADY STYLU (z audytu serwisu)
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


# CO MUSI NAPRAWIĆ PRZEPISANIE (z audytu bloga)
## Top 8 do przepisania w pierwszej kolejności

1. **wdrozenia-ai-w-malych-firmach**. Dlaczego: pięć przypadków z kosztami i efektami, których nie ma w portfolio, do tego kanibalizacja strony `wdrozenia-ai` i rok w tytule. Przepisanie musi: usunąć wszystkie przypadki albo zastąpić je jednym prawdziwym (z projektu właściciela, np. automatyzacje Make/n8n, jeśli są udokumentowane), zmienić frazę na informacyjną, podać koszty tylko jako składniki (API, integracja, utrzymanie) ze źródłami cenników, aktualne modele, wątki RODO i AI Act, BLUF, tytuł bez roku.
2. **next-js-a-seo**. Dlaczego: niepotwierdzony case w leadzie, meta description i sekcji, tytuł „5x lepiej”, dane o indeksacji sprzeczne z badaniami. Przepisanie musi: usunąć case i „5x”, oprzeć się na dokumentacji Google (rendering JS) i badaniu Vercel/MERJ 2024, jako przykład pokazać marcinsiwonia.pl z prawdziwym, zmierzonym wynikiem, zostawić checklistę konfiguracji (to wartościowa część), usunąć akapity skopiowane z ssr-vs-csr-seo, pauza w nagłówku.
3. **ssr-vs-csr-seo**. Dlaczego: drugi niepotwierdzony case (+210%), w meta description, i prawie duplikat next-js-a-seo. Przepisanie musi: zmienić kąt na „jak Googlebot i crawlery AI przetwarzają JavaScript” (Google renderuje, większość botów AI nie wykonuje JS), podać źródła, BLUF w treści, a nie tylko w excerpcie; albo, do decyzji, scalić z next-js-a-seo.
4. **ile-kosztuje-strona-www-2026**. Dlaczego: najbardziej komercyjne zapytanie na blogu, strona usługi odsyła tu po ceny, a wpis ma 379 słów, bez BLUF, z cenami w pierwszej osobie i widełkami sprzecznymi z innymi wpisami. Przepisanie musi: zacząć od odpowiedzi (przedziały rynkowe i od czego zależą), oprzeć widełki na zewnętrznych źródłach albo nazwać je szacunkiem rynku, nie ofertą, pokazać składniki kosztu (projekt, treści, integracje, utrzymanie), usunąć rok z title/metaTitle, dojść do ok. 1500 słów w sekcjach z tabelą.
5. **core-web-vitals-2026**. Dlaczego: „CLS-2” nie istnieje, błędny percentyl, wymyślony wpływ na ranking, a wpis wspiera usługę przyspieszania WordPressa. Przepisanie musi: oprzeć progi i definicje na web.dev i Search Central, 75. percentyl, bez spekulacji o 2.0 s, przykłady napraw także dla WordPressa (nie tylko next/image), link do `przyspieszanie-stron-wordpress`, tytuł bez roku.
6. **wordpress-vs-next-js-koszt**. Dlaczego: meta „z faktur klientów”, sprzeczność meta vs treść, rekomendacja Elementora sprzeczna z resztą serwisu, darmowy Vercel dla firmy. Przepisanie musi: zostać tylko przy koszcie utrzymania (fraza z keyword), rozpisać składniki z aktualnymi cennikami (hosting, licencje, Vercel Pro dla firm, czas aktualizacji), usunąć „faktury klientów”, ujednolicić liczby z wpisem cenowym.
7. **next-js-15-vs-wordpress-2026**. Dlaczego: nieaktualna wersja w tytule, brak BLUF, błąd o edytorze od 2003, kanibalizacja w klastrze. Przepisanie musi: tytuł „Next.js czy WordPress: …” bez numeru wersji i roku, odpowiedź w 2 pierwszych zdaniach, kryteria decyzji z przykładami, bez duplikowania TCO (link do wpisu o kosztach), sprawdzić, czy zmiana sluga ma sens (tylko z 301).
8. **ile-kosztuje-strona-na-next-js**. Dlaczego: wprost wycena własna i FAQ w formie oferty, co łamie politykę cen, plus Vercel Hobby i powielony blok TCO. Przepisanie musi: usunąć „realizuję”, „oferujesz”, „co dostaję w cenie”, pokazać rynkowe widełki z uzasadnieniem, poprawić hosting (Vercel Pro lub własny serwer dla firm), usunąć „60% ataków”, zostawić link do usługi jako CTA bez cen.

Szybkie poprawki poza top 8 (bez przepisywania, ale pilne, bo to fałszywe zdania o samym serwisie lub twarde błędy): server-actions-nextjs (formularz kontaktowy, `useActionState`, Next 14), wordpress-co-to-jest (60% → 43%), co-zrobic-po-instalacji-wordpressa (Wordfence, permalinki, kara 3%), vercel-hosting-co-to (plan Hobby), elementor-dlaczego-nie-warto (case, liczba instalacji), must-have-wtyczki-wordpress-2026 („Ja Aktualizuję”, EAA).



# TEN WPIS: ssr-vs-csr-seo
Fraza: „SSR vs CSR SEO” (też „SSR czy CSR”). Kąt: jak Googlebot i crawlery AI czytają strony renderowane na serwerze i w przeglądarce, co z tego wynika dla wyboru renderowania. Nie powtarzaj checklisty Next.js z wpisu „Next.js a SEO”, wystarczy link.
FAKTY:
- Google renderuje JavaScript przez Web Rendering Service (Chromium) po pobraniu strony, w kolejce renderowania; treść widoczna dopiero po wykonaniu JS może być zindeksowana później lub niepełnie, jeśli zasoby są zablokowane albo JS się nie wykona. Źródło: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Badanie Vercel i MERJ (grudzień 2024): żaden z głównych crawlerów AI nie renderuje JavaScriptu (OpenAI: OAI-SearchBot, ChatGPT-User, GPTBot; Anthropic: ClaudeBot; Meta; ByteDance; PerplexityBot). ChatGPT i Claude pobierają pliki JS (odpowiednio 11,50% i 23,84% zapytań), ale ich nie wykonują. Gemini korzysta z infrastruktury Googlebota i renderuje JS. W badanym miesiącu GPTBot wykonał 569 mln zapytań, Claude 370 mln, łącznie około 20% z 4,5 mld zapytań Googlebota w sieci Vercel. Źródło: https://vercel.com/blog/the-rise-of-the-ai-crawler
- Wniosek: treść potrzebna do SEO i widoczności w odpowiedziach AI powinna być w HTML z serwera (SSR lub SSG); CSR sprawdza się za logowaniem, w panelach i aplikacjach, gdzie SEO nie ma znaczenia.
- Core Web Vitals, 75. percentyl: LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Źródło: https://developers.google.com/search/docs/appearance/core-web-vitals
Linki: [Next.js a SEO](/blog/next-js-a-seo), [tworzenie stron Next.js](/uslugi/aplikacje-nextjs).

# OBECNA TREŚĆ WPISU
    slug: "ssr-vs-csr-seo",
    title: "SSR vs CSR — który wybrać pod SEO",
    excerpt:
      "Krótka odpowiedź: SSR. Dłuższa: CSR jest indeksowane przez Google, ale z opóźnieniem 2-4 tygodnie i niższymi rankingami. Konkretne dane i case study migracji.",
    date: "2026-03-18",
    readingMinutes: 7,
    tags: ["SEO", "SSR", "CSR", "indeksacja"],
    keyword: "SSR vs CSR SEO",
    metaTitle: "SSR vs CSR pod SEO — konkretne dane indeksacji",
    metaDescription:
      "SSR indeksacja w 2-12h, CSR w 7-21 dni. Core Web Vitals SSR LCP 0.8-1.5s vs CSR 3.5-5s. Case study migracji: +210% organic traffic w 4 miesiące.",
    hero: { kind: "seo" },
    relatedServices: ["aplikacje-nextjs", "aplikacje-react", "tworzenie-stron-www"],
    body: [
      "Pytanie 'czy Google indeksuje SPA' jest źle zadane. Google indeksuje, ale z opóźnieniem i mniejszą skutecznością niż SSR. Konkretne dane: średni czas pierwszej indeksacji nowej strony, SSR 2-12 godzin, CSR 7-21 dni.",
      "Drugi problem CSR: Core Web Vitals. LCP (Largest Contentful Paint) na CSR site to średnio 3.5-5s (czeka na JS bundle download + parse + execute + render). Na SSR/SSG: 0.8-1.5s. CWV jest sygnałem rankingowym Google od 2021. Różnica = niższe pozycje.",
      "Trzeci: social sharing. Facebook/LinkedIn/Twitter scrapują OG meta tags z HTML response. Na CSR site OG tags są w `<head>` ale często pusto (template hardcoded), bo dynamic content nie zdąża się wgenerować przed scrape. Wynik: brzydki preview na social mediach, niższy CTR.",
      "Czwarty: AI search (ChatGPT, Perplexity, Gemini). Te systemy crawlują strony szybciej niż Google ale gorzej obsługują JS. SSR sites są cytowane częściej.",
      "Wyjątek: jeśli Twoja strona NIE potrzebuje SEO (wewnętrzny dashboard za logowaniem, narzędzie deweloperskie, gra), CSR jest OK. Mniej setup, prostsze, tańsze.",
      "Konkretne case: zmigrowałem klientowi e-commerce z React SPA na Next.js SSG. Po 4 miesiącach: indexed pages 156→340, organic traffic +210%, average position 18→7. Cena migracji: 25 tys. zł. Zwrot z dodatkowego ruchu: 6 tygodni.",
      "Praktyczna rekomendacja: jeśli budujesz cokolwiek publicznego, zacznij od Next.js (SSR/SSG/ISR). To 90% wybór dziś. CSR-only ma sens dla 10% przypadków: dashboardy, narzędzia, prototypy.",
    ],
    faq: [
      { q: "Czy Google indeksuje SPA (CSR)?", a: "Tak, ale z opóźnieniem 7-21 dni i niższymi rankingami. Google bot uruchamia JS w drugiej fazie crawlu. SSR daje gotowy HTML w pierwszej odpowiedzi, indeksacja w 2-12 godzin." },
      { q: "Ile wzrasta ruch po migracji CSR → SSR?", a: "Konkretny case z mojej praktyki: e-commerce React SPA → Next.js SSG: indexed pages 156→340, organic traffic +210%, average position 18→7 w 4 miesiące. Zwrot z migracji 25 tys. zł w 6 tygodni." },
      { q: "Co z Core Web Vitals SSR vs CSR?", a: "SSR/SSG LCP 0.8-1.5s vs CSR 3.5-5s. INP też lepszy (mniej JS w bundle). CWV są sygnałem rankingowym Google od 2021. Różnica = realny boost na konkurencyjnych frazach." },
      { q: "Kiedy CSR ma sens mimo wszystko?", a: "Wewnętrzny dashboard za logowaniem (brak SEO). Narzędzie deweloperskie. Gra przeglądarkowa. Embedded widget. Dla 10% przypadków SPA jest słusznym wyborem." },
      { q: "Czy AI search (ChatGPT, Perplexity) widzą CSR?", a: "Gorzej niż Google. AI crawlery mają słabsze JS rendering. SSR sites cytowane częściej w AI Overviews. Różnica będzie rosła w kolejnych latach." },
    ],
