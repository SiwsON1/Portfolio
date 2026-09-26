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



# TEN WPIS: next-js-a-seo
Fraza: „Next.js a SEO”. Kąt: co Next.js realnie daje w SEO, a czego nie załatwi; checklista konfiguracji (zachowaj z obecnego wpisu, poprawiając). Nie powielaj wpisu o SSR i CSR (tam jest temat crawlerów AI), wystarczy jedno zdanie z linkiem.
FAKTY:
- Google renderuje JavaScript: po pobraniu strony trafia ona do kolejki renderowania Web Rendering Service (Chromium), który wykonuje JS. Źródło: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Next.js daje renderowanie po stronie serwera i statyczne generowanie, Metadata API, pliki sitemap.ts i robots.ts, dane strukturalne JSON-LD w komponentach. Źródło: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Core Web Vitals, próg „dobry” na 75. percentylu: LCP poniżej 2,5 s, INP poniżej 200 ms, CLS poniżej 0,1. Są częścią sygnałów page experience, ale treść i trafność są ważniejsze. Źródło: https://developers.google.com/search/docs/appearance/core-web-vitals
- Badanie Vercel i MERJ (grudzień 2024): żaden z głównych crawlerów AI (GPTBot, ClaudeBot, PerplexityBot i inne) nie wykonuje JavaScriptu. Źródło: https://vercel.com/blog/the-rise-of-the-ai-crawler
- Własny, zmierzony przykład: marcinsiwonia.pl (Next.js 16) we wrześniu 2026 po optymalizacji: LCP na telefonie z 4,7 s do 2,0 s, waga podstrony /projekty z około 27 MB do około 240 KB. Przyczyną wolnego LCP była plansza intro renderowana na serwerze, a nie sam Next.js. To dobry przykład, że framework nie gwarantuje szybkości.
Linki: [tworzenie stron Next.js](/uslugi/aplikacje-nextjs), [SSR czy CSR pod SEO](/blog/ssr-vs-csr-seo).

# OBECNA TREŚĆ WPISU
    slug: "next-js-a-seo",
    title: "Next.js a SEO — dlaczego indeksuje się 5x lepiej niż React SPA",
    excerpt:
      "Next.js Server Components renderują HTML na serwerze. Google widzi treść natychmiast, nie czeka na JS. Indeksacja w godziny zamiast tygodni, Lighthouse 95+, schema, OG.",
    date: "2026-04-08",
    readingMinutes: 12,
    tags: ["Next.js", "SEO", "indeksacja"],
    keyword: "Next.js SEO",
    metaTitle: "Next.js a SEO — czemu indeksuje 5x lepiej niż React SPA",
    metaDescription:
      "Next.js Server Components: indeksacja Google w godziny zamiast tygodni, Lighthouse 95+, schema.org out of the box. Case study migracji z WordPress: +180% ruchu w 6 mc.",
    hero: { kind: "seo" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    body: [],
    lead:
      "Next.js indeksuje się w Google w godziny zamiast tygodni (jak React SPA), wyciąga Core Web Vitals 95+ out of the box, ma natywną obsługę schema.org i dynamic OG images. Konkretne case study niżej: migracja klienta z WordPress dała +180% ruchu organicznego i przesunięcie z pozycji 14 na 5 w 6 miesięcy.",
    sections: [
      {
        heading: "Czemu React SPA jest słabe pod SEO",
        body: [
          "Klasyczny React Single Page Application (z Create React App, Vite) wysyła do przeglądarki pusty `<div id=\"root\"></div>` plus bundle JavaScript. Treść strony renderowana jest dopiero po wykonaniu JS w przeglądarce.",
          "Google bot teoretycznie potrafi uruchomić JavaScript i odczytać treść SPA, ale w praktyce robi to w drugiej fazie crawlu (rendering queue), z opóźnieniem 7-21 dni od pierwszego crawl. Nowa podstrona wchodzi do indeksu po 2-4 tygodniach zamiast godzin.",
          "Drugi problem: Core Web Vitals. SPA ma typowy LCP 3.5-5s (czeka na JS bundle download + parse + execute + render). Google używa LCP, INP, CLS jako sygnałów rankingowych od 2021. Niski Lighthouse = niższe pozycje na konkurencyjnych frazach.",
          "Trzeci: social sharing. Facebook, LinkedIn, Twitter scrapują OG meta tags z HTML response. Na CSR site OG tags często są w `<head>` ale puste (template hardcoded), bo dynamic content nie zdąża się wygenerować przed scrape. Wynik: brzydkie preview na social mediach, niższy CTR.",
          "Czwarty: AI search. ChatGPT, Perplexity, Gemini crawlują strony szybciej niż Google ale gorzej obsługują JavaScript. SSR sites są cytowane częściej w AI Overviews.",
        ],
      },
      {
        heading: "Co daje Next.js z Server Components",
        body: [
          "Server-side rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), każdy route w Next.js domyślnie renderuje się na serwerze i wysyła do przeglądarki gotowy HTML. Google bot dostaje treść w pierwszej odpowiedzi, indeksuje natychmiast.",
          "**Pierwsza indeksacja**: SSR/SSG 2-12 godzin, CSR 7-21 dni. Re-crawl po update content z ISR + webhook: minuty zamiast tygodni. To realna przewaga w dynamice publikacji.",
          "**React Server Components (RSC)**: komponenty domyślnie renderują się na serwerze i NIE wysyłają JS do klienta. Klient dostaje HTML + minimalny JavaScript do interaktywności. Bundle size spada o 30-60%, LCP poniżej 1.5s nawet na średnich urządzeniach.",
          "**Image optimization**: `next/image` automatycznie generuje WebP/AVIF, lazy loading, responsive srcset, blur placeholder, priority dla above-the-fold. Lighthouse Performance 95+ standard.",
          "**Font optimization**: `next/font` self-hosted Google Fonts z preload, brak FOIT/FOUT, brak CLS od fontów. Detektor `font-display: swap` z `size-adjust` calculations automatic.",
        ],
      },
      {
        heading: "SEO standardy out of the box",
        body: [
          "**Sitemap.xml**: `app/sitemap.ts` generuje dynamicznie z kodu, automatycznie aktualizuje przy każdym deploy. Może czytać CMS, listę postów, slug-i serwisów.",
          "**Robots.txt**: `app/robots.ts` z instrukcjami per crawler. Możesz allowować GoogleBot, blokować GPTBot lub odwrotnie. Granularność per route.",
          "**Schema.org JSON-LD** per route, `Person`, `Organization`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`, `LocalBusiness`. Wstrzykiwane przez `<Script type=\"application/ld+json\">` w komponencie. Google rich snippets + AI search entity recognition działają.",
          "**Dynamic metadata per route**: `generateMetadata()` async funkcja zwracająca title, description, OG image, Twitter card per podstronę. Czyta z CMS lub bazy danych.",
          "**Open Graph images**: `next/og` generuje obrazki 1200x630 dla Facebook/Twitter/LinkedIn dynamicznie z React komponentu. Każda podstrona ma własny preview, nie ten sam dla wszystkich.",
          "**Canonical URLs**: `alternates.canonical` w metadata zapobiega duplicate content przy parametrach URL, paginacji, filtracja.",
        ],
      },
      {
        heading: "Case study: migracja WordPress → Next.js",
        body: [
          "Konkretny klient: kancelaria prawna (B2B, target Wrocław + Niemcy). Stara strona na WordPress + Avada theme + WooCommerce do płatności online za konsultacje.",
          "**Stan przed migracją**: Lighthouse Performance 47, LCP 4.2s, indeksowane 200/350 podstron, średnia pozycja głównych fraz: 14, ruch organiczny: 800 wizyt/mc, koszt Google Ads CPC: 8.50 zł.",
          "**Migracja**: 6 tygodni, stack Next.js + Sanity (zachowany workflow redakcji) + Vercel. URL-e zachowane 1:1 (lub 301 redirects gdzie struktura uproszczona). Schema.org Service + LocalBusiness + FAQPage. Search Console submit + URL inspection dla 350 podstron.",
          "**Stan po 6 miesiącach**: Lighthouse Performance 96, LCP 0.9s, indeksowane 350/350, średnia pozycja: 5, ruch organiczny: 2240 wizyt/mc (+180%), koszt Google Ads CPC: 5.90 zł (-30% przez lepszy Quality Score).",
          "**Koszt migracji**: 35 tys. zł. **Zwrot z dodatkowego ruchu i tańszych ads**: 4 miesiące.",
        ],
      },
      {
        heading: "Konfiguracja Next.js pod SEO — checklist",
        body: [
          "**1. `app/layout.tsx`**: root metadata z `metadataBase`, default title template, OG defaults, Person/Organization JSON-LD.",
          "**2. `app/sitemap.ts`**: dynamiczna generacja z listy stron + CMS posts + lista serwisów. Ostatnia modyfikacja per URL.",
          "**3. `app/robots.ts`**: Allow GoogleBot/Bingbot/AI bots wg strategii, sitemap link.",
          "**4. `app/[route]/page.tsx`**: per-route `generateMetadata` z title (max 65 znaków), description (150-160), canonical, OG image z `next/og`.",
          "**5. Schema.org per typ**: Service na stronach usług, Article + BreadcrumbList + FAQPage na blogu, LocalBusiness w layoucie głównym (z geokoordynatami miasta).",
          "**6. `next/image` z priority** dla LCP image (zwykle hero), `sizes` dla responsive.",
          "**7. `next/font` self-hosted** z preload, brak Google Fonts CDN.",
          "**8. Internal linking**: z każdej podstrony do powiązanych serwisów, z bloga do stron pieniężnych. Anchor text-em z głównymi keyword.",
          "**9. Vercel Analytics + GA4 / Plausible**: monitoring real users, Core Web Vitals z Search Console.",
          "**10. Search Console + Bing Webmaster**: verification, sitemap submit, regularne sprawdzanie coverage report.",
        ],
      },
      {
        heading: "Mit obalony: Next.js to NIE overkill dla małych stron",
        body: [
          "Powszechne nieporozumienie: 'Next.js jest dla dużych aplikacji, mała strona to overkill'. Nieprawda.",
          "Mała strona Next.js + Vercel = 0 zł hosting + Lighthouse 95+ + indeksacja w godziny + automatic SSL + edge deployment globalny + szybsze wdrożenie niż walka z WordPress (hosting + cache plugins + Yoast + LiteSpeed config + security plugins + manual schema).",
          "Krzywa uczenia? React Server Components są prostsze niż klasyczny React (mniej state management, mniej hooks). TypeScript łapie błędy zanim trafią do produkcji.",
          "Cena? Owszem, Next.js dev kosztuje więcej (220-350 zł/h vs WP 100-180), ale dla strony 5-10 podstron różnica wynosi 3-5 tys. zł. Przy ruchu 1k+ wizyt/mc dodatkowy uplift z SEO często to nadrabia w pierwszym roku.",
          "Realnie: jeśli budujesz NOWĄ stronę publiczną w 2026 i nie ma legalnego wymogu data residency w PL, default Next.js + Vercel + Sanity. To stack którego używa większość Awwwards SOTY winners, większość startupów Y Combinator, dokumentacja największych SaaS-ów.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy Google indeksuje React SPA?",
        a: "Tak, ale z opóźnieniem 7-21 dni i niższymi rankingami. Google bot uruchamia JS w drugiej fazie crawlu (rendering queue). Next.js z SSR daje gotowy HTML w pierwszej odpowiedzi, indeksacja w 2-12 godzin.",
      },
      {
        q: "Ile wzrasta ruch po migracji z WordPress na Next.js?",
        a: "Konkretny case z mojej praktyki: +180% ruchu organicznego w 6 miesięcy + spadek CPC w Google Ads o 30%. Wartość zależy od bazy startowej, większy uplift dla stron z niskim Lighthouse i niedoinwestowanym SEO.",
      },
      {
        q: "Czy migracja na Next.js zachowuje pozycje SEO?",
        a: "Tak, jeśli migracja zrobiona dobrze: URL-e zachowane 1:1 (lub 301 redirects), schema.org skopiowane, sitemap re-submit do Search Console, Core Web Vitals zielony. Typowy spadek 1-2 tygodnie po deploy, potem powrót i wzrost.",
      },
      {
        q: "Czy Next.js działa z headless CMS pod SEO?",
        a: "Tak, świetnie. Sanity / Contentful / Strapi dostarczają treść przez API, Next.js renderuje przy build (SSG) lub przy publikacji (ISR z webhook). Workflow redakcji = jak w WordPress, performance = jak SSG.",
      },
      {
        q: "Co z AI search (ChatGPT, Perplexity, Gemini)?",
        a: "Next.js z SSR jest cytowany przez AI bots częściej niż SPA. AI crawlery mają słabsze JS rendering niż Google. Dodatkowo schema.org + structured data zwiększają chance na entity recognition i cytowanie w AI Overviews.",
      },
      {
        q: "Jak zmierzyć ranking poprawy po migracji?",
        a: "Search Console: pozycje na docelowe frazy, CTR, kliki, impresje. PageSpeed Insights: Core Web Vitals z field data (28 dni). Senuto / Ahrefs / Semrush: pozycje na klastry fraz, organic traffic estimate. Sprawdzaj weekly przez 12-16 tygodni.",
      },
    ],
