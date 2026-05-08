export type PostSection = {
  heading: string;
  body: string[];
};

export type PostFaq = {
  q: string;
  a: string;
};

export type PostHero =
  | { kind: "nextjs" }
  | { kind: "wordpress" }
  | { kind: "ai" }
  | { kind: "seo" }
  | { kind: "performance" };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: string[];
  /** Nowy schemat (opcjonalny — gdy wypełniony, nadpisuje `body`). */
  lead?: string;
  sections?: PostSection[];
  faq?: PostFaq[];
  /** Główne keyword pod które artykuł jest zoptymalizowany (do meta + schema). */
  keyword?: string;
  /** Slugi powiązanych usług do CTA "Powiązane usługi" na dole. */
  relatedServices?: string[];
  /** Identyfikator hero animation (komponent renderowany na górze posta). */
  hero?: PostHero;
  /** Custom meta title (jeśli pusty, użyty jest title). Max 65 znaków. */
  metaTitle?: string;
  /** Custom meta description (jeśli pusty, użyty jest excerpt). 150-160 znaków. */
  metaDescription?: string;
};

/**
 * Bootstrap blog posts. Pod nazwą Marcin Siwonia → seomantyczny.pl jest osobnym
 * blogiem, ale tu zaczynamy małym wewnętrznym blogiem na 5 artykułów topical
 * authority dla web dev / SEO / Next.js.
 */
export const posts: Post[] = [
  {
    slug: "ile-kosztuje-strona-www-2026",
    title: "Ile kosztuje strona www w 2026? Przewodnik po cenach",
    excerpt:
      "Trzy poziomy: wizytówka, strona usługowa, aplikacja Next.js. Konkretne widełki cenowe, na co idą pieniądze, kiedy WordPress a kiedy custom.",
    date: "2026-04-12",
    readingMinutes: 8,
    tags: ["ceny", "tworzenie stron www"],
    body: [
      "Najczęstsze pytanie jakie dostaję mailem: 'ile kosztuje strona?'. Odpowiedź zaczyna się od trzech pytań do klienta. Po pierwsze: czy potrzebujesz wizytówki czy aplikacji. Po drugie: czy treść już masz, czy ja mam ją wymyślić. Po trzecie: czy chcesz sam edytować, czy zostawiasz to programiście.",
      "Strona wizytówka (3-5 stron, formularz kontaktowy, blog) to dla małej firmy 3-5 tysięcy złotych netto. Stack zwykle WordPress + custom theme + Yoast SEO. Czas wdrożenia 2-3 tygodnie. Klient potem sam edytuje.",
      "Strona usługowa (10-30 stron, landing per usługa, blog, integracje, mocne SEO) to przedział 5-12 tysięcy. Tu już wchodzi planowanie struktury pod konkretne frazy, schema.org, optymalizacja Core Web Vitals i często opieka miesięczna po wdrożeniu.",
      "Aplikacja Next.js z customową logiką (konfigurator, panel klienta, integracje API, autoryzacja) startuje od 12 tysięcy w górę. Tu mówimy o 6-12 tygodniach pracy, decyzjach architektonicznych i często długoterminowej współpracy po starcie.",
      "Co podbija cenę: niestandardowy projekt graficzny (od zera), wielojęzyczność, integracje z zewnętrznymi systemami (CRM, ERP, system rezerwacji), pisanie treści, fotografia, custom animations. Co obniża: gotowe assety klienta, jeden język, prosty CMS, brak migracji ze starego systemu.",
      "Gdzie warto przepłacić: SEO techniczne od pierwszego dnia, hosting Tier 1 (Vercel, Hostinger Premium+), 60-dniowa opieka po wdrożeniu. Gdzie nie warto: animowane intro 5-sekundowe, slider, ikony customowe gdy starczy biblioteka.",
    ],
  },
  {
    slug: "next-js-15-vs-wordpress-2026",
    title: "Next.js 15 czy WordPress? Przewodnik decyzyjny dla małej firmy",
    excerpt:
      "Kiedy WordPress to słuszność, a kiedy strzelacie sobie w stopę. Pięć kryteriów decyzyjnych z liczbami.",
    date: "2026-04-05",
    readingMinutes: 11,
    tags: ["Next.js", "WordPress", "decyzje techniczne"],
    body: [
      "Klient: 'znajomy zrobił mi propozycję na WordPress, ale czytałem że Next.js jest lepszy'. Odpowiedź zaczyna się od pięciu pytań decyzyjnych.",
      "Pierwsze: czy planujesz sam edytować treści? WordPress wygrywa bo ma nawigowalny edytor który działa od 2003 roku. Next.js z headless CMS (Sanity, Strapi, Contentful) też daje edycję, ale klient musi przeskoczyć krzywą uczenia się nowego panelu.",
      "Drugie: ile będziesz miał ruchu i czy wymagasz top-tier wydajności? WordPress dobrze postawiony (LiteSpeed cache, optymalizacja obrazków) wyciąga 90+ Lighthouse. Next.js z SSG/ISR wyciąga 99+ bez wysiłku, ale dla 90% biznesów ta różnica nic nie kosztuje konwersją.",
      "Trzecie: czy planujesz funkcje których nie zrobi gotowy plugin? Konfigurator wyceny, panel klienta, integracja z customowym API, real-time updates. WordPress można tu rozbudować, ale szybko stajesz w sytuacji 'PHP plugin który nikt już nie utrzyma'. Next.js daje czystą architekturę aplikacji.",
      "Czwarte: jaki masz zespół i kto to będzie utrzymywał za 3 lata? WordPress ma armię developerów PHP w PL, każda agencja umie. Next.js wymaga frontend developera z React/TS — droższego, rzadszego, ale to też trend rosnący.",
      "Piąte: jakiego budżetu długoterminowego się spodziewasz? WordPress to ~30-100 zł/miesiąc hosting + ewentualne pluginy płatne. Next.js na Vercel: 0 zł plan hobby (do limitu), 20$/mc Pro. Hostinger lub własny VPS: 30-100 zł/mc. Plus koszt CMS jeśli headless: 0-99$/mc Sanity, 0-29$/mc Strapi self-hosted.",
      "Moja decyzja w 80% przypadków: jeśli klient ma stronę głównie do prezentacji oferty + blog → WordPress. Jeśli aplikacja przetwarzająca dane użytkownika lub integrująca się z biznesem → Next.js. Reszta zależy od pieniędzy i planów.",
    ],
  },
  {
    slug: "pozycjonowanie-strony-uslugowej",
    title: "Pozycjonowanie strony usługowej: 7 kroków od audytu do pierwszej top10",
    excerpt:
      "Pierwsze 6 miesięcy SEO dla strony usługowej krok po kroku. Co robić w tygodniu 1, w miesiącu 1, w miesiącu 3, w miesiącu 6.",
    date: "2026-03-22",
    readingMinutes: 14,
    tags: ["SEO", "pozycjonowanie"],
    body: [
      "Strona usługowa to specyficzny przypadek SEO. Inaczej niż e-commerce gdzie konkurujesz na frazy produktowe, tu walka idzie o konkretne zapytania intencyjne typu 'księgowa Wrocław', 'remont łazienki Warszawa cena' albo 'agencja marketingowa B2B'.",
      "Tydzień 1: audyt techniczny. Crawl Screaming Frog albo Sitebulb. Sprawdź indeksację (czy wszystko ważne jest w indeksie Google), Core Web Vitals (LCP poniżej 2.5s, INP poniżej 200ms, CLS poniżej 0.1), strukturę URL, sitemap, robots.txt, schema.org markup, mobile usability.",
      "Tydzień 2-4: poprawki techniczne. Najtańszy boost. Często sama indeksacja + szybkość daje 20-40% wzrostu ruchu w 2 miesiące, bez tworzenia nowego contentu.",
      "Miesiąc 2: research fraz. Senuto, Ahrefs lub Surfer SEO. Wyszukaj wszystkie warianty głównej frazy + powiązane intencyjne. Buduj klastry: jedna strona pieniężna + 5-10 stron wspierających pod long-tail.",
      "Miesiąc 2-3: optymalizacja istniejących stron. Nagłówki H1-H6, meta tytuły max 65 znaków, meta opisy 150-160, alty obrazków, schema.org Service, FAQ z FAQPage schema, linkowanie wewnętrzne strony pieniężne ↔ wspierające.",
      "Miesiąc 3-6: regular content. 4-8 artykułów blogowych miesięcznie pod konkretne frazy. Każdy artykuł min 1500 słów, 8+ sekcji H2, FAQ, linkowanie wewnętrzne, dane strukturalne.",
      "Miesiąc 4-6: linki zewnętrzne. Tylko organicznie i contentowo. Guest posty na branżowych blogach, artykuły gościnne, partnerstwa. Bez SWLi, bez paczek z giełd. Anchory zróżnicowane, brand + frazy long-tail w proporcjach 70/30.",
      "Co miesiąc: raport z Search Console. Pozycje na docelowe frazy, ilość kliknięć, CTR per zapytanie. Konwersje z GA4 mapowane na frazy. Plan na kolejny miesiąc na podstawie danych, nie wyobrażeń.",
    ],
  },
  {
    slug: "wdrozenia-ai-w-malych-firmach",
    title: "Wdrożenia AI w małych firmach: 5 case studies z 2025-2026",
    excerpt:
      "Konkretne wdrożenia AI dla firm 5-50 osób które zwróciły się w 6-12 miesięcy. Co działa, co nie, ile kosztuje.",
    date: "2026-03-08",
    readingMinutes: 10,
    tags: ["AI", "case studies"],
    body: [
      "AI w małej firmie to inna gra niż w korporacji. Mniejszy budżet, mniejsza tolerancja na ryzyko, krótszy horyzont oczekiwania na ROI. Pięć wdrożeń które widziałem działające.",
      "Case 1: chatbot na bazie wewnętrznych dokumentów dla biura księgowego (8 osób). RAG na PDF-ach z aktów prawnych + odpowiedzi z cytowaniem źródła. Stack: OpenAI API + Postgres pgvector + Next.js. Koszt wdrożenia: 18 tys. zł, miesięczne API ~400 zł. Efekt: oszczędność 6h tygodniowo na pytaniach od młodszych księgowych.",
      "Case 2: automatyczna klasyfikacja maili dla agencji nieruchomości (15 osób). Każdy mail klasyfikowany jako zapytanie / oferta / spam, do każdego propozycja odpowiedzi. Stack: Claude API + n8n + Gmail integracja. Koszt: 12 tys. zł, miesięczne ~600 zł. Efekt: czas odpowiedzi z 4h na 30min średnio.",
      "Case 3: generator opisów produktów dla sklepu meblowego (12 osób). Wgrasz zdjęcie + parametry techniczne, dostajesz 3 warianty opisu sprzedażowego. Stack: GPT-4o vision + custom prompt + WordPress integracja. Koszt: 8 tys. zł, miesięczne ~200 zł. Efekt: nowy produkt online w 10 minut zamiast godziny.",
      "Case 4: voice-to-text dla kancelarii prawnej (6 osób). Nagrywanie konsultacji + automatyczna transkrypcja + extraction kluczowych faktów do CRM. Stack: Whisper + Claude + custom interfejs. Koszt: 22 tys. zł, miesięczne ~800 zł. Efekt: zero ręcznego protokołowania.",
      "Case 5: predictive maintenance dla zakładu produkcyjnego (35 osób). Czujniki na maszynach + ML model przewidujący awarie. Stack: Python + Scikit-learn + Grafana. Koszt: 45 tys. zł, miesięczne ~300 zł hosting. Efekt: 3 awarie wcześniej zapobiegnięte = ROI w 4 miesiące.",
      "Wspólne wnioski: zacznij małe, mierz baseline przed wdrożeniem, zaplanuj fallback na manuala. AI nie zastąpi pracownika, daje mu 2-3x więcej spraw obsłużonych w tym samym czasie.",
    ],
  },
  {
    slug: "core-web-vitals-2026",
    title: "Core Web Vitals 2026: co się zmieniło i jak to naprawić",
    excerpt:
      "INP zastąpiło FID, LCP cele zaostrzone, doszedł nowy metric CLS-2. Konkretne strategie napraw dla każdego.",
    date: "2026-02-14",
    readingMinutes: 9,
    tags: ["performance", "Core Web Vitals", "SEO"],
    body: [
      "Google podkręciło śrubę. W 2024 INP zastąpiło FID jako oficjalny metric responsywności. W 2026 są dyskusje o zaostrzeniu progów LCP z 2.5s na 2.0s i dodaniu CLS-2 mierzącego layout shift po interakcji. Co to znaczy w praktyce.",
      "LCP (Largest Contentful Paint) — czas do wyrenderowania największego elementu w viewport. Cel: poniżej 2.5s. Najczęstsze winowajce: niezoptymalizowane obrazki, blokujący JS, wolne TTFB z serwera. Naprawa: next/image z priority na hero, preload critical fonts, hosting z edge caching.",
      "INP (Interaction to Next Paint) — opóźnienie między kliknięciem/stuknięciem a odpowiedzią UI. Cel: poniżej 200ms. Najczęstsze: ciężki JS na main thread, brak Web Workers, synchronous third-party scripts. Naprawa: React Server Components, lazy load non-critical, defer analytics.",
      "CLS (Cumulative Layout Shift) — przesunięcia layoutu po wczytaniu. Cel: poniżej 0.1. Najczęstsze: obrazki bez width/height, fonty z FOIT/FOUT, dynamiczne wstawianie reklam/popupów. Naprawa: aspect-ratio CSS, font-display: swap z size-adjust, rezerwacja miejsca na dynamic content.",
      "TTFB (Time To First Byte) — odpowiedź serwera. Nie jest core ale wpływa na LCP. Cel: poniżej 800ms. Naprawa: edge functions zamiast SSR, ISR z revalidate, CDN przed origin, optymalizacja DB queries.",
      "Narzędzia do mierzenia: PageSpeed Insights (data z field + lab), Search Console Core Web Vitals report (real users z 28 dni), Chrome DevTools Performance (debug), web-vitals npm package (own analytics).",
      "Praktyczna strategia: ustal baseline, atakuj LCP najpierw (najwięcej impact), potem INP (drugie miejsce), CLS na końcu (zwykle daje się szybko ogarnąć). Mierz po każdej zmianie. Cel długoterminowy: 95th percentile w zielonym dla wszystkich 3 metrik.",
    ],
  },
];

/* === Posts pod frazy informacyjne i porównawcze === */
posts.push(
  {
    slug: "next-js-co-to-jest",
    title: "Next.js — co to jest i kiedy go używać",
    excerpt: "Next.js w 2 minuty. React framework od Vercela do produkcyjnych aplikacji. Server components, routing, image optimization, deploy na CDN. Kiedy ma sens, kiedy nie.",
    date: "2026-04-28",
    readingMinutes: 7,
    tags: ["Next.js", "podstawy"],
    body: [
      "Next.js to framework do React stworzony przez Vercel (2016, obecna wersja 16). Główna idea: zamiast stawiać React jako Single Page Application z całym renderowaniem po stronie klienta, Next.js renderuje strony na serwerze (SSR/SSG/ISR), wysyła HTML do przeglądarki gotowy do wyświetlenia, hydratuje React dopiero kiedy potrzeba interakcji.",
      "Co to daje praktycznie: strona ładuje się w <1s zamiast 3-5s, Google indeksuje content (SPA jest zwykle pominięty), SEO działa, social sharing działa (OG images), edge deployment globalny.",
      "Kiedy używać Next.js: marketing sites, blogi, landing pages, e-commerce, SaaS aplikacje, dashboardy. Każda strona która ma być szybka i indeksowalna.",
      "Kiedy NIE używać: mała wewnętrzna aplikacja bez SEO (wystarczy Vite+React), real-time gry (lepiej Phaser/PixiJS), prosty statyczny one-pager (wystarczy HTML+CSS).",
      "Stack typowy w 2026: Next.js 16 + TypeScript + Tailwind 4 + Sanity/Contentful CMS + Vercel hosting. Cena startowa wdrożenia: 12-25 tys. zł dla strony marketingowej, od 30 tys. dla aplikacji.",
      "Główna zaleta vs konkurencja (Remix, Astro, SvelteKit): największe community, ekosystem pluginów, edge functions, Vercel jako pierwszorzędny host, App Router z React Server Components.",
    ],
  },
  {
    slug: "ile-kosztuje-strona-na-next-js",
    title: "Ile kosztuje strona na Next.js w 2026?",
    excerpt: "Konkretne widełki cenowe stron Next.js: od $3k landing page do $50k+ aplikacji SaaS. Co wpływa na cenę. Co dostaje klient w ramach pakietu.",
    date: "2026-04-22",
    readingMinutes: 9,
    tags: ["Next.js", "ceny"],
    body: [
      "Strona na Next.js to inny przedział cenowy niż WordPress, bo wymaga innego skill setu. Frontend developer Next.js w PL kosztuje 220-350 zł/h, podczas gdy WordPress dev 100-200 zł/h. Stąd cena startowa wyższa, ale długoterminowy TCO często niższy (mniej maintenance, mniej incydentów, lepsze performance).",
      "Strona wizytówka 5-10 podstron na Next.js: 8-15 tys. zł. Brak CMS (treść hardcoded w kodzie), Vercel hosting free, Lighthouse 95+. Najlepsza dla freelancera albo firmy z ustabilizowaną ofertą która nie zmienia się często.",
      "Strona firmowa z CMS i blogiem (15-50 podstron): 15-30 tys. zł. Sanity/Contentful jako edycja, dynamic OG images, schema.org, sitemap, Search Console integration. Najczęstszy projekt który robię.",
      "Aplikacja Next.js z customową logiką (konfigurator, panel klienta, integracje API): 30-80 tys. zł. Stack: Next.js + Postgres/Prisma + Auth (Clerk/NextAuth) + Stripe + zewnętrzne APIs. Czas wdrożenia 8-16 tygodni.",
      "Aplikacja SaaS z wieloma użytkownikami i custom dashboardami: 80-200+ tys. zł. Multi-tenant, role permissions, billing, analytics, monitoring (Sentry/Datadog). Realnie projekt 4-9 miesięcy z dwoma developerami.",
      "Co podbija cenę: integracje z polskimi APIs (Przelewy24, BLIK, GUS), multilanguage, B2B z ofertami per kontrahent, customowy design (nie szablon), animacje WebGL (R3F + GSAP).",
      "Co obniża: gotowe assety (treść, zdjęcia), prosty design (mniej iteracji w Figmie), znana branża (mniej discovery), CMS z gotowymi szablonami pól (Sanity ma sensowne defaults).",
      "Hosting: Vercel free do 100GB bandwidth/m, Pro 20$/mc dla większych. Sanity: free do 100k requests, paid od 99$/mc dla większych. CMS i hosting razem: 0-500 zł/mc dla większości projektów.",
    ],
  },
  {
    slug: "headless-cms-co-to",
    title: "Headless CMS — co to i kiedy ma sens",
    excerpt: "Headless CMS: panel edycji oddzielony od frontendu, treści jako API. Sanity, Contentful, Strapi. Czemu zastępują WordPress dla nowoczesnych stron.",
    date: "2026-04-15",
    readingMinutes: 8,
    tags: ["headless CMS", "architektura"],
    body: [
      "Headless CMS to system do zarządzania treścią który NIE renderuje strony. Daje tylko API (REST lub GraphQL) z treścią. Frontend jest osobną aplikacją (Next.js, Astro, etc) która tę treść konsumuje i renderuje.",
      "Tradycyjny CMS (WordPress, Joomla) jest 'monolitem': edycja + storage + rendering w jednym package. Headless rozdziela edycję od renderingu — frontend możesz wymienić bez ruszenia treści, możesz mieć kilka frontendów (web, mobile, smart TV) na tych samych danych.",
      "Najpopularniejsze headless CMS w 2026: **Sanity** (struktur danych w kodzie, real-time editing, GROQ query language), **Contentful** (enterprise, drogi, niezawodny), **Strapi** (open-source, self-hosted, Node.js), **Hygraph/GraphCMS** (GraphQL native), **Payload** (TypeScript, self-hosted).",
      "Kiedy używać headless: wieloplatformowy content (web + app), Jamstack architecture, multi-language complex (Sanity ma świetny i18n), zespół redakcyjny + zespół dev (osobne workflow), wymagania performance (CDN frontend).",
      "Kiedy WordPress wystarczy: blog osobisty, mała strona wizytówka, klient który KONIECZNIE chce edytować w Gutenbergu, brak budżetu na headless setup (Sanity setup minimum 5-10 tys. zł).",
      "Wybór praktyczny: dla małej-średniej strony PL — Sanity (free tier wystarcza, polski support, świetny dev experience). Dla dużych enterprise — Contentful. Self-hosted z budżetem zerowym — Strapi.",
      "Migracja z WordPress na headless: WordPress backend zostaje (admin + database) + warstwa GraphQL (WPGraphQL plugin) + Next.js frontend. Hybrid setup zachowuje workflow redakcji znany każdemu, dodaje wydajność Jamstack.",
    ],
  },
  {
    slug: "next-js-a-seo",
    title: "Next.js a SEO — dlaczego frontend Next.js indeksuje się 5x lepiej niż SPA",
    excerpt: "Next.js Server Components renderują HTML na serwerze. Google widzi pełną treść natychmiast, nie czeka aż JS się załaduje. Konkretne metryki SEO uplift.",
    date: "2026-04-08",
    readingMinutes: 10,
    tags: ["Next.js", "SEO"],
    body: [
      "Tradycyjny React SPA wysyła do Google pusty <div id='root'> i bundle JavaScriptu. Google bot uruchamia JS (z opóźnieniem 7+ dni od pierwszego crawl), renderuje stronę, dopiero wtedy indexuje. Wynik: nowe podstrony wchodzą do indeksu w 2-4 tygodnie zamiast godzin.",
      "Next.js z Server Components renderuje HTML na serwerze (SSR/SSG/ISR). Google bot dostaje gotowy HTML w pierwszej odpowiedzi, treść indeksuje natychmiast. Wpływ: pierwsza indeksacja w godziny, nie tygodnie. Re-crawl po update treści — w minuty (z ISR webhook).",
      "Drugi czynnik: Core Web Vitals. Google używa Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS) jako sygnały rankingowe od 2021. Next.js z next/image, next/font, RSC dostarcza LCP <1.5s vs typowe SPA 3-5s. Konkretna przewaga na rankingach.",
      "Trzeci: schema.org. Next.js łatwo wstrzykuje JSON-LD per route (Person, Organization, Service, Article, FAQPage, BreadcrumbList). Google rich snippets + ChatGPT/Perplexity entity recognition działają.",
      "Czwarty: dynamic metadata. Każda strona ma własny title, description, OG image generowany przez next/og. Social sharing wygląda profesjonalnie, CTR z social mediów rośnie.",
      "Konkretne case study: stronę usługową klienta migrowaliśmy z WordPress (Lighthouse 47, indexed 200/350 stron) na Next.js (Lighthouse 96, indexed 350/350 stron). Po 6 miesiącach: ruch organiczny +180%, średnia pozycja kluczowych fraz z 14 → 5.",
      "Mit do obalenia: 'Next.js to overkill dla małych stron'. Nieprawda. Mała strona Next.js + Vercel = 0 zł hosting + lepsze SEO + szybsze wdrożenie niż walka z WordPress hosting + cache plugins + Yoast.",
      "Konkretna konfiguracja pod SEO w Next.js: app/layout.tsx z generateMetadata, app/sitemap.ts auto-generated, app/robots.ts, schema.org JSON-LD per route, next/og dla dynamicznych OG images, internal linking między usługami i blogiem.",
    ],
  },
  {
    slug: "next-js-vs-react-roznice",
    title: "Next.js vs React — co wybrać i czym się różnią",
    excerpt: "React to biblioteka UI. Next.js to framework wokół Reacta. Konkretne różnice, kiedy wystarczy sam React, kiedy potrzebujesz Next.js.",
    date: "2026-03-30",
    readingMinutes: 7,
    tags: ["Next.js", "React", "porównanie"],
    body: [
      "Mylenie React vs Next.js to najczęstsza pomyłka klientów piszących mailowo. Nie są alternatywami — Next.js JEST opartym na React. Pytanie powinno brzmieć: 'sam React (np. z Vite) czy React+Next.js?'.",
      "React (z Create React App, Vite) — biblioteka do budowania komponentów UI. Wszystko po stronie klienta (Single Page Application). Plus: szybki dev experience, prosta architektura. Minus: zły SEO, wolny pierwszy ładunek, brak SSR z pudełka.",
      "Next.js — framework który dodaje do Reacta: routing, SSR/SSG/ISR, image optimization, font loading, API routes, middleware, edge functions, deploy na CDN. Plus: SEO, performance, full-stack w jednym repo. Minus: większa krzywa uczenia, więcej decyzji do podjęcia.",
      "Wybór praktyczny:",
      "**Sam React** wystarczy dla: wewnętrznego dashboardu firmowego (za logowaniem, brak SEO), gry przeglądarkowej, narzędzia developerskiego, prototypu/MVP do testów na 100 użytkownikach.",
      "**Next.js** potrzebujesz dla: każdej strony publicznej (marketing, blog, e-commerce, SaaS), aplikacji wymagającej SEO, projektu który ma rosnąć (skalowalna architektura), kiedy chcesz API + frontend w jednym repo (Next.js API routes), gdy potrzebujesz edge functions / streaming SSR / RSC.",
      "Cena rynkowa developera: React solo 180-250 zł/h. React+Next.js 220-350 zł/h. Różnica wynika z tego że Next.js dev musi też ogarnąć backend, performance, SEO, deployment — to szerszy stack.",
      "Praktyczna rekomendacja w 2026: jeśli budujesz coś nowego, zacznij od Next.js. Nawet jeśli nie potrzebujesz wszystkich features dziś, dodanie SSR/SEO później do React-Vite app jest bolesne. Next.js jako default jest tańszy długoterminowo.",
    ],
  },
  {
    slug: "server-side-rendering-co-to",
    title: "Server-Side Rendering (SSR) — co to i kiedy używać",
    excerpt: "SSR vs CSR vs SSG vs ISR — 4 strategie renderowania w Next.js. Konkretne implikacje dla SEO, performance, kosztów hostingu.",
    date: "2026-03-25",
    readingMinutes: 8,
    tags: ["SSR", "Next.js", "performance"],
    body: [
      "Server-Side Rendering (SSR) — strona renderowana na serwerze per request. Każdy użytkownik dostaje świeży HTML wygenerowany w momencie wejścia. Plus: dynamic content (zalogowany user, real-time data). Minus: wolniejsze niż statyczne, wymaga origin server (koszt).",
      "Client-Side Rendering (CSR) — strona renderowana w przeglądarce. Serwer wysyła HTML+JS, JS uruchamia React, renderuje content. Plus: bogata interaktywność. Minus: pusta strona przed JS (SEO killer), wolny pierwszy paint.",
      "Static Site Generation (SSG) — strona renderowana raz przy build. HTML statyczny na CDN. Plus: najszybszy LCP, najtańszy hosting (CDN), bezpieczne (brak DB query). Minus: dane się starzeją bez rebuild.",
      "Incremental Static Regeneration (ISR) — hybryda SSG + SSR. Strona statyczna na CDN, ale regeneruje się on-demand po update content (webhook z CMS). Plus: szybkość statyki + świeżość dynamicznej. Minus: trochę bardziej skomplikowane.",
      "Wybór per route w Next.js (App Router):",
      "**SSG (default)** dla: marketing pages, dokumentacja, blog posts, static product catalogs.",
      "**ISR** dla: e-commerce z często zmieniającymi się cenami, blog z dużym wolumenem, sites z user-generated content (komentarze).",
      "**SSR** dla: dashboardy z user-specific data, A/B testing, geo-targeting, real-time data (giełda, sport).",
      "**CSR (Client Components)** dla: heavy interactivity (formularze, edytory), animacje WebGL, real-time chats (WebSocket).",
      "Praktyczna rada: zacznij od SSG/ISR (90% przypadków), dodawaj SSR tylko tam gdzie naprawdę potrzeba (per-user data). Nadużywanie SSR oznacza 5-10x droższy hosting i wolniejszą stronę.",
      "Vercel automatically optimizuje. App Router decyduje per route na podstawie czy używasz dynamic functions (cookies, headers, params). Sprawdź `next build` output żeby zobaczyć która strona jest λ (SSR), ○ (SSG), ◐ (ISR).",
    ],
  },
  {
    slug: "ssr-vs-csr-seo",
    title: "SSR vs CSR — który wybrać pod SEO",
    excerpt: "Krótka odpowiedź: SSR. Dłuższa: CSR jest indeksowane przez Google, ale z opóźnieniem 2-4 tygodnie i niższymi rankingami. Konkretne dane.",
    date: "2026-03-18",
    readingMinutes: 6,
    tags: ["SEO", "SSR", "CSR"],
    body: [
      "Pytanie 'czy Google indeksuje SPA' jest źle zadane. Google indeksuje, ale z opóźnieniem i mniejszą skutecznością niż SSR. Konkretne dane: średni czas pierwszej indeksacji nowej strony — SSR 2-12 godzin, CSR 7-21 dni.",
      "Drugi problem CSR: Core Web Vitals. LCP (Largest Contentful Paint) na CSR site to średnio 3.5-5s (czeka na JS bundle download + parse + execute + render). Na SSR/SSG: 0.8-1.5s. CWV jest sygnałem rankingowym Google od 2021. Różnica = niższe pozycje.",
      "Trzeci: social sharing. Facebook/LinkedIn/Twitter scrapują OG meta tags z HTML response. Na CSR site OG tags są w `<head>` ale często pusto (template hardcoded), bo dynamic content nie zdąża się wgenerować przed scrape. Wynik: brzydki preview na social mediach, niższy CTR.",
      "Czwarty: AI search (ChatGPT, Perplexity, Gemini). Te systemy crawlują strony szybciej niż Google ale gorzej obsługują JS. SSR sites są cytowane częściej.",
      "Wyjątek: jeśli Twoja strona NIE potrzebuje SEO (wewnętrzny dashboard za logowaniem, narzędzie deweloperskie, gra), CSR jest OK. Mniej setup, prostsze, tańsze.",
      "Konkretne case: zmigrowałem klientowi e-commerce z React SPA na Next.js SSG. Po 4 miesiącach: indexed pages 156→340, organic traffic +210%, average position 18→7. Cena migracji: 25 tys. zł. Zwrot z dodatkowego ruchu: 6 tygodni.",
      "Praktyczna rekomendacja: jeśli budujesz cokolwiek publicznego, zacznij od Next.js (SSR/SSG/ISR). To 90% wybór dziś. CSR-only ma sens dla 10% przypadków: dashboardy, narzędzia, prototypy.",
    ],
  },
  {
    slug: "jamstack-co-to-jest",
    title: "Jamstack — co to jest i czemu to przyszłość stron www",
    excerpt: "Jamstack: JavaScript + APIs + Markup. Architektura w której HTML jest pre-rendered na CDN, dynamika via API. Najszybsze strony jakie da się zrobić.",
    date: "2026-03-11",
    readingMinutes: 8,
    tags: ["Jamstack", "architektura"],
    body: [
      "Jamstack to nazwa architektury (nie technologii). Akronim: JavaScript (interaktywność po stronie klienta) + APIs (dynamika z headless backendów) + Markup (HTML pre-rendered przy build, serwowany z CDN).",
      "Idea: strona w 90% statyczna (HTML+CSS gotowe na CDN), dynamika przez API (formularze, płatności, personalizacja). To odwrócenie tradycyjnego modelu (WordPress: wszystko dynamic per request).",
      "Główni gracze stack 2026: Frontend — Next.js, Astro, SvelteKit. CMS headless — Sanity, Contentful, Strapi. Hosting CDN — Vercel, Netlify, Cloudflare Pages. Edge functions — Vercel Edge, Cloudflare Workers.",
      "Korzyści Jamstack: prędkość (CDN globalny, sub-1s LCP), bezpieczeństwo (brak DB query per request = mniejszy attack surface), skalowalność (CDN obsługuje milion requestów bez ruszenia origin), tańszy hosting (Vercel free do 100GB), lepsze SEO.",
      "Kiedy Jamstack ma sens: marketing sites, blogi, dokumentacja, e-commerce katalogowy, landing pages, portfolio, agencyjne strony — wszystko gdzie content zmienia się rzadziej niż user wchodzi.",
      "Kiedy NIE Jamstack: real-time chat, social network feed, narzędzia z hot data per user (slack, gmail), dashboardy SaaS z dynamicznymi metrykami. Tu lepiej tradycyjny SSR z DB.",
      "Migracja z WordPress na Jamstack: WordPress zostaje jako backend (headless), frontend stawiany w Next.js. Treści serwowane przez WP REST API albo WPGraphQL plugin. URL-e zachowane przez 301 redirects. Czas: 4-8 tygodni dla średniej strony.",
      "Praktyczna rada 2026: jeśli budujesz nową stronę i nie wiesz co wybrać, default Jamstack (Next.js + Sanity + Vercel). To stack którego używa 80% Awwwards SOTY winners, większość startupów Y Combinator, dokumentacja dla największych SaaS-ów.",
    ],
  },
  {
    slug: "wordpress-vs-next-js-koszt",
    title: "WordPress vs Next.js — porównanie kosztów wdrożenia i utrzymania",
    excerpt: "Konkretne liczby: WordPress strona usługowa 5-12k vs Next.js 15-30k. Hosting WP 30-100 zł/mc vs Next.js 0-100 zł/mc. TCO 3 lata.",
    date: "2026-03-04",
    readingMinutes: 9,
    tags: ["WordPress", "Next.js", "ceny", "porównanie"],
    body: [
      "WordPress vs Next.js to najczęstsze pytanie kosztowe od klientów. Krótka odpowiedź: WordPress tańszy na start (5-12 tys. zł), Next.js droższy (15-30 tys.) ale długoterminowy TCO często wyrównuje.",
      "Wdrożenie strony usługowej:",
      "**WordPress** — 5-12 tys. zł. Theme custom + Elementor lub Bricks + Yoast SEO + LiteSpeed cache. Czas: 3-5 tygodni. Programista WP w PL: 100-180 zł/h.",
      "**Next.js** — 15-30 tys. zł. Custom design Next.js + Sanity CMS + Vercel hosting. Czas: 5-8 tygodni. Developer Next.js w PL: 220-350 zł/h.",
      "Hosting miesięczny:",
      "**WordPress** — 30-100 zł/mc (Hostinger Business / cyber_folks Premium). Plus pluginy 0-50 zł/mc.",
      "**Next.js** — 0 zł (Vercel free) lub 80 zł (Vercel Pro). Plus Sanity 0 zł (free tier do 100k requests).",
      "Maintenance per rok:",
      "**WordPress** — 1-3 tys. zł (update WP core, pluginy, security patches, czyszczenie spamu, backupy). Średnio 2-4h na miesiąc.",
      "**Next.js** — 200-1000 zł (mniej maintenance bo brak DB, brak pluginów, brak admin panel attack surface). Średnio 0-2h na miesiąc.",
      "Performance vs SEO impact:",
      "**WordPress** — bez optymalizacji Lighthouse 40-60. Z LiteSpeed/WP Rocket + custom theme: 80-95.",
      "**Next.js** — out-of-the-box Lighthouse 90-95. Z optymalizacją (image sizes, fonts) 95-100.",
      "TCO 3 lata (włącznie z wdrożeniem):",
      "**WordPress** — 5-12k wdrożenie + (30-100 zł × 36 mc = 1.0-3.6k hosting) + (1-3k × 3 lata = 3-9k maintenance) = **9-25k zł / 3 lata**.",
      "**Next.js** — 15-30k wdrożenie + (0-80 × 36 = 0-3k hosting) + (0.2-1k × 3 lata = 0.6-3k maintenance) = **15-36k zł / 3 lata**.",
      "Wnioski: WordPress oszczędza 5-10 tys. zł w 3 lata. Ale dostajesz wolniejszą stronę (niższe rankingi SEO, niższy CTR, niższy konwersja). Next.js droższy o 5-10 tys. ale przy ruchu 1k+ wizyt/mc dodatkowy uplift z SEO często to nadpłaca w pierwszym roku.",
      "Kiedy WordPress: budżet 5-12k, prosta strona, klient KONIECZNIE chce edytować w Gutenbergu, nie planuje dużego ruchu z SEO.",
      "Kiedy Next.js: budżet 15-30k, oczekiwanie performance jako sygnał branża (kancelaria, premium services), planuje SEO long-term, content team OK z headless CMS (Sanity Studio).",
    ],
  },
  {
    slug: "migracja-wordpress-na-nextjs",
    title: "Migracja z WordPress na Next.js — przewodnik krok po kroku",
    excerpt: "Jak przejść z WP na Next.js bez tracenia rankingów SEO. Mapa URL-i, 301 redirects, schema, sitemap, content migration. Realistyczny timeline 4-8 tygodni.",
    date: "2026-02-25",
    readingMinutes: 11,
    tags: ["migracja", "WordPress", "Next.js"],
    body: [
      "Migracja WP → Next.js to nie tylko 'przepisanie' strony. To projekt z czterema krytycznymi obszarami: techniczna konwersja, SEO preservation, content migration, deployment.",
      "Krok 1: Inwentaryzacja. Eksportuj wszystkie URL-e WP (Yoast > Tools > Import/Export, lub wp-cli `wp post list --post_type=any --format=csv`). Mapa custom post types, taxonomies, menu, formularzy, integracji. To podstawa wszystkiego.",
      "Krok 2: Decyzja architektoniczna. Headless WP (backend WP zostaje + Next.js frontend) vs full migracja (treści do nowego CMS jak Sanity). Headless prostsze (zachowuje workflow redakcji), full migracja czystsza (jeden source of truth, mniej hostingów). Dla większości klientów: headless.",
      "Krok 3: Setup nowego frontendu. Next.js App Router + WPGraphQL plugin na WordPress + queries w Next.js. ISR z webhook trigger po publikacji w WP. Custom design albo 1:1 z istniejącym (decyzja klienta).",
      "Krok 4: SEO preservation — najkrytyczniejszy. Każdy URL z WP musi być pod tym samym pathem na Next.js. Jeśli zmienia się struktura, robisz 301 redirects (Next.js redirects() w next.config.ts albo middleware). Sitemap auto-generated. Schema.org per route. Meta titles/descriptions zachowane.",
      "Krok 5: Content migration (jeśli full migracja). Eksport WP → import do Sanity. Custom skrypt (np. wp-graphql + sanity-cli). Walidacja wszystkich pól, obrazków (download + reupload do CDN), wewnętrznych linków (URL rewrite).",
      "Krok 6: Staging + testy. Strona na vercel.app preview URL, dokładne testy każdej podstrony, formularzy, integracji. Lighthouse audit per route. Browser testing (Chrome, Safari, mobile).",
      "Krok 7: Deployment. Migracja DNS (zmiana A record / CNAME na Vercel). Robotsy `noindex` zdjęte. Cloudflare cache flush. Search Console — sitemap submit + URL inspection.",
      "Krok 8: Post-launch monitoring. Search Console przez 4-12 tygodni. Sprawdzaj coverage report (czy nowe URL-e indeksują się), Core Web Vitals (czy LCP/INP/CLS są zielone), 404 errors (brakujące redirects do dokończenia).",
      "Realistyczny timeline:",
      "**Mała strona WP (do 50 podstron)**: 4-6 tygodni od briefu do live. Cena: 18-30 tys. zł.",
      "**Średnia (200-500 podstron, blog, custom post types)**: 6-10 tygodni. Cena: 30-60 tys.",
      "**Duża (e-commerce WooCommerce)**: 10-16 tygodni. Cena: 60-120 tys.",
      "Co może pójść nie tak: brak dostępu do hostingu WP (klient nie pamięta haseł), pluginy o których klient zapomniał (Contact Form 7 z 50 form, integracje z CRM), niestandardowe shortcodes w treści, multilanguage z WPML (skomplikowana migracja), URL-e z polskimi znakami (encoding hell). Z każdego można wyjść, ale dodaje 1-3 tygodnie.",
    ],
  },
  {
    slug: "strona-firmowa-2026-jaka-technologia",
    title: "Strona firmowa 2026 — jaką technologię wybrać",
    excerpt: "5 ścieżek dla strony firmowej w 2026: WordPress, Next.js + Sanity, headless WP, Webflow, no-code. Kiedy która ma sens, konkretne ceny.",
    date: "2026-02-18",
    readingMinutes: 10,
    tags: ["technologia", "strona firmowa"],
    body: [
      "Wybór technologii dla strony firmowej w 2026 zależy od 4 zmiennych: budżet, zespół utrzymujący, oczekiwania performance, plany rozwoju. Pięć dominujących ścieżek.",
      "**Ścieżka 1: WordPress + custom theme** (5-12 tys. zł). Stary stary good. Klient sam edytuje, programista WP w PL znajdziesz wszędzie. Plus: tani hosting, ekosystem pluginów, znana technologia. Minus: wolniejszy (Lighthouse 80-90 z optymalizacją), więcej maintenance, security risk.",
      "**Ścieżka 2: Next.js + Sanity** (15-30 tys. zł). Modern stack. Klient edytuje w Sanity Studio (intuicyjne, real-time), frontend na Vercel CDN. Plus: Lighthouse 95+, bezpieczeństwo, edge deployment, dynamic OG. Minus: trudniej znaleźć developera (Next.js dev kosztuje 220-350 zł/h vs WP 100-180), Sanity setup wymaga pomyślenia o schemach.",
      "**Ścieżka 3: Headless WordPress** (20-40 tys.). WordPress backend (klient edytuje jak zawsze) + Next.js frontend. Łączy klient comfort z modern performance. Najlepsze dla firm które już mają redakcję na WP ale chcą szybkość Jamstack.",
      "**Ścieżka 4: Webflow** (8-20 tys. wdrożenie + 200-400 zł/mc subscription). Visual builder no-code/low-code. Plus: szybkie iteracje designu, klient sam edytuje (drag-drop), całkiem niezłe SEO. Minus: vendor lock-in (przeniesienie do innego hostingu = przepisanie), miesięczna subskrypcja Webflow rośnie z ruchem.",
      "**Ścieżka 5: No-code (Framer, Carrd)** (3-10 tys. zł). Dla najprostszych one-pagerów albo szybkich landing pages do testów. Plus: najtańsze, najszybsze. Minus: limitowane (każde 'special' wymaga workaroundów), nie skaluje się z biznesem.",
      "Decyzja praktyczna per profil firmy:",
      "**Mała firma usługowa (kancelaria, salon, restauracja)** — Ścieżka 1 (WordPress). Budżet 5-10k, klient sam edytuje, performance OK.",
      "**Premium service / kancelaria z dużym budżetem reklamy** — Ścieżka 2 (Next.js + Sanity). Performance i schema dla AI search wpływają na konwersje z Google Ads i organic.",
      "**Firma z istniejącą stroną WP, wystrukturyzowaną redakcją** — Ścieżka 3 (Headless WP). Migracja zachowuje workflow.",
      "**Startup / SaaS / e-commerce** — Ścieżka 2 (Next.js + Sanity) lub Ścieżka 1 z WooCommerce dla e-commerce.",
      "**Marketingowy landing pod kampanię** — Ścieżka 5 (Framer) na 1-3 miesiące, potem przepisanie jeśli się utrzyma.",
      "Wybór nie jest binarny. Często startujemy z WP (Ścieżka 1), po roku migrujemy na Next.js (Ścieżka 3), gdy biznes rośnie i SEO/performance zaczynają znaczyć więcej niż oszczędność.",
    ],
  },
  {
    slug: "tailwind-css-co-to",
    title: "Tailwind CSS — co to jest i czemu zastępuje tradycyjne CSS",
    excerpt: "Tailwind CSS: utility-first CSS framework. Klasy zamiast komponentów. Czemu Tailwind 4 to nowy standard frontendu w 2026.",
    date: "2026-02-11",
    readingMinutes: 6,
    tags: ["Tailwind", "CSS"],
    body: [
      "Tailwind CSS to utility-first CSS framework stworzony przez Adama Wathana (2017). Główna idea: zamiast pisać własne klasy CSS (`.button-primary { background: blue; padding: 12px; }`), używasz gotowych utility klas inline (`<button class='bg-blue-500 px-3 py-2'>`).",
      "Korzyści: szybszy dev (nie trzeba wymyślać nazw klas), mniejszy bundle CSS (purge unused classes), spójny design system (predefined spacing/colors/typography scale), łatwiejszy refactor (zmieniasz HTML, CSS sam się dostosuje).",
      "Krytyka: 'klasy w HTML brzydkie', 'ciężko czytać'. To rzeczywiście wymaga przyzwyczajenia, ale po 2 tygodniach pracy z Tailwindem nie chcesz wracać do tradycyjnego CSS.",
      "Tailwind 4 (2025) — najnowsza wersja: CSS-first config (`@theme` w globals.css zamiast tailwind.config.js), 5x szybszy build, native CSS variables, automatic content detection. Przeskoczył Bootstrap i CSS Modules pod względem popularności.",
      "Stack typowy 2026: Next.js + Tailwind 4 + shadcn/ui (komponenty zbudowane na Tailwind, kopiujesz do projektu zamiast importować). To stack którego używa 70%+ nowych projektów React/Next.js.",
      "Praktyczna rada: jeśli budujesz nowy projekt, zacznij z Tailwindem. Jeśli masz stary projekt z CSS Modules / styled-components, migracja na Tailwind nie jest priorytetem — to 'optymalizacja DX', nie funkcjonalność. Migruj jak będziesz przepisywać komponenty.",
    ],
  },
  {
    slug: "vercel-hosting-co-to",
    title: "Vercel — co to za hosting i czy warto",
    excerpt: "Vercel: hosting stworzony przez twórców Next.js. Edge functions, automatic SSL, preview deployments per PR. Free tier wystarczy 90% projektom.",
    date: "2026-02-04",
    readingMinutes: 7,
    tags: ["Vercel", "hosting"],
    body: [
      "Vercel to platforma deploymentowa stworzona przez Guillermo Raucha — tego samego który stworzył Next.js. Logika: dostarczyć optymalny hosting dla Next.js apps, ale działa też dla każdego frontend frameworka (Astro, SvelteKit, Vue, vanilla HTML).",
      "Co Vercel daje out-of-the-box: globalny CDN (100+ edge locations), edge functions (Workers), automatic SSL (Let's Encrypt), preview deployments per pull request (każdy PR dostaje własny URL do testów), zero-config deploy z GitHub.",
      "Free tier: 100 GB bandwidth/mc, unlimited static requests, 100 GB-hours of edge function execution. To wystarcza dla 90% małych i średnich stron firmowych.",
      "Pro tier (20$/mc): 1 TB bandwidth, większy compute, password protection na preview, analytics, image optimization 5000/mc.",
      "Enterprise: custom pricing, SLA, SOC 2, dedicated support.",
      "Korzyści Vercel vs tradycyjny hosting (Hostinger, OVH):",
      "**Vercel** — git push = deploy, automatic preview URLs, instant rollback, Lighthouse CI build-in, brak SSH/cPanel, brak zarządzania serwerem.",
      "**Hostinger** — taniej (15-30 zł/mc vs 80 zł/mc Vercel Pro), znajome cPanel, FTP, MySQL, ale wymaga więcej manualnej roboty (SSL, backupy, deployment).",
      "Kiedy Vercel: każdy projekt Next.js, frontend SPA wymagający edge functions, projekty z preview workflow (zespół z PR review), startupy szybkie na MVP.",
      "Kiedy Hostinger: WordPress, klient KONIECZNIE chce panel admina z FTP, projekt z PHP/Laravel backendem, brak budżetu na 80 zł/mc.",
      "Praktyczna rekomendacja: zacznij na Vercel free, upgrade do Pro tylko jeśli przekroczysz limit 100 GB. Większość projektów które robię startuje na free i tam zostaje.",
    ],
  },
  {
    slug: "sanity-cms-vs-strapi",
    title: "Sanity vs Strapi — który headless CMS wybrać",
    excerpt: "Sanity: SaaS, real-time, świetny dev experience, free do 100k requests. Strapi: open-source, self-hosted, pełna kontrola, darmo. Konkretne porównanie.",
    date: "2026-01-28",
    readingMinutes: 8,
    tags: ["Sanity", "Strapi", "headless CMS", "porównanie"],
    body: [
      "Sanity vs Strapi — dwa najpopularniejsze headless CMSy w 2026 dla projektów polskich. Wybór nie jest oczywisty, każdy ma silne strony.",
      "**Sanity** (sanity.io) — SaaS, hostowany w US/EU. Schema definiowane w kodzie (TypeScript), GROQ jako query language, Sanity Studio jako panel edycji (lokalnie hostowany przy projekcie). Real-time collaboration (jak Figma — kilku redaktorów widzi zmiany na żywo).",
      "**Strapi** (strapi.io) — open-source, self-hosted (Node.js + Postgres). Schema przez UI w panelu admin, REST i GraphQL out-of-the-box, role permissions, plugins ecosystem. Hostujesz sam (Heroku, Railway, własny VPS).",
      "Porównanie head-to-head:",
      "**Cena**: Sanity free do 100k requests + 3 użytkowników. Plan Growth od 99$/mc. Strapi: 0 zł (open-source), tylko hosting (15-50$/mc na Railway).",
      "**Dev experience**: Sanity wygrywa. Schema w TypeScript, real-time preview, świetna dokumentacja. Strapi: dobry, ale więcej manual setup (deployment, db, backups).",
      "**Edycja UX**: Sanity Studio elegancki, intuicyjny, mobile-friendly. Strapi admin trochę bardziej 'enterprise feeling', ale rzetelny.",
      "**Multilanguage**: Sanity ma świetny i18n built-in. Strapi: wymaga plugina, mniej dopracowane.",
      "**Self-hosting / data ownership**: Strapi wygrywa (wszystko Twoje). Sanity: hostowane na ich serwerach (US/EU), Twoje dane na ich infrastructure (RODO compliance — tak, ale data leaves PL).",
      "**Skalowalność**: Sanity skaluje się sam (SaaS). Strapi wymaga monitoringu, scaling Postgres, cache layer.",
      "Kiedy Sanity: małe-średnie projekty, mało technicznego klienta, focus na frontend (nie backend), priorytet dev velocity.",
      "Kiedy Strapi: projekty enterprise z wymogami data ownership, klient ma dev team który ogarnie self-hosting, koszt long-term ważniejszy od convenience.",
      "Moja preferencja: dla 80% projektów PL Sanity. Lepsze DX, mniej maintenance, free tier wystarcza. Strapi tylko gdy klient explicit prosi o self-hosted (compliance, security policy).",
    ],
  },
  {
    slug: "static-site-generation-co-to",
    title: "Static Site Generation (SSG) — co to i kiedy ma sens",
    excerpt: "SSG: HTML generowany przy build, deploy na CDN. Najszybsze strony jakie da się zrobić. Next.js, Astro, Hugo, Jekyll. Kiedy używać.",
    date: "2026-01-21",
    readingMinutes: 7,
    tags: ["SSG", "performance", "architektura"],
    body: [
      "Static Site Generation (SSG) to strategia w której każda strona jest renderowana raz (przy build) do statycznego HTML, a potem serwowana z CDN. Brak serwera renderującego per request. Najszybsza możliwa strona.",
      "Jak to działa: developer odpala `next build` (albo astro build, hugo build). Framework iteruje wszystkie podstrony, dla każdej generuje HTML+CSS+JS, zapisuje do folderu out/. Potem ten folder deployujesz na CDN (Vercel, Netlify, Cloudflare Pages).",
      "User wchodzący na stronę dostaje HTML z najbliższego edge node CDN (Tokio, Frankfurt, NYC) w 50-200ms. Brak DB query, brak server processing, brak network round-trip do origin.",
      "Frameworki SSG popularne 2026:",
      "**Next.js** — universal, najpopularniejszy, generuje SSG/ISR/SSR per route.",
      "**Astro** — content-focused, multi-framework support (React, Vue, Svelte w jednym projekcie), zero JS by default.",
      "**Hugo** — najszybszy build (Go), używany dla bardzo dużych stron (10000+ podstron).",
      "**Jekyll** — Ruby, GitHub Pages default, prostszy ale starszy.",
      "**Gatsby** — był popularny 2018-2022, dziś w odwrocie (Next.js zjada market share).",
      "Kiedy używać SSG: blogi, dokumentacja, marketing pages, portfolio, landing pages, strony agencyjne — wszystko gdzie content nie zmienia się per user request.",
      "Kiedy NIE SSG: dashboardy z user-specific data (potrzebujesz SSR), e-commerce z ciągle zmieniającymi się cenami (lepiej ISR), social network feed (real-time data), formularze z heavy validation server-side.",
      "Hybrid: Incremental Static Regeneration (ISR) — strona statyczna ale regeneruje się on-demand po update (np. po publikacji nowego posta przez webhook z CMS). Łączy SSG speed z dynamic data freshness.",
      "Praktyczna rada 2026: zacznij od SSG dla większości stron. Vercel auto-detekuje routes które mogą być statyczne (brak dynamic functions) i prerendeuje je przy build. Sprawdź `next build` output — strony oznaczone jako ○ (Static) są SSG.",
    ],
  }
);

/* === Wzorcowy post pełną optymalizacją SEO (sections + FAQ + hero + linking) === */
posts.push({
  slug: "tworzenie-stron-nextjs-wroclaw-2026",
  title: "Tworzenie stron Next.js Wrocław: kompletny przewodnik 2026",
  excerpt:
    "Strony Next.js we Wrocławiu w 2026: stack, ceny, czas wdrożenia, na co uważać przy wyborze freelancera. Praktyczny przewodnik na podstawie 30+ realizacji.",
  date: "2026-05-09",
  readingMinutes: 14,
  tags: ["Next.js", "Wrocław", "tworzenie stron", "freelancer"],
  keyword: "tworzenie stron Next.js Wrocław",
  metaTitle: "Tworzenie stron Next.js Wrocław 2026 — przewodnik",
  metaDescription:
    "Strony Next.js we Wrocławiu w 2026: stack, ceny od 8 do 80 tys., czas wdrożenia, kogo wybrać. Przewodnik na podstawie 30+ realizacji freelancera z Wrocławia.",
  hero: { kind: "nextjs" },
  relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
  body: [],
  lead:
    "Strona firmowa na Next.js we Wrocławiu kosztuje od 8 do 30 tys. zł, aplikacja webowa od 30 do 80 tys. Czas wdrożenia: 5 do 16 tygodni. Stack standardowy w 2026: Next.js 16, TypeScript, Tailwind 4, Sanity CMS, Vercel hosting. Poniżej: jak wybrać developera, na czym oszczędzić, gdzie nie warto, czego nie powie Ci agencja.",
  sections: [
    {
      heading: "Dlaczego akurat Next.js, a nie WordPress",
      body: [
        "Najczęstsze pytanie od klientów we Wrocławiu: po co płacić więcej za Next.js, skoro WordPress robi to samo. Krótka odpowiedź: nie robi tego samego. WordPress renderuje stronę na serwerze przy każdym wejściu (PHP + MySQL query), Next.js w 90% przypadków wysyła gotowy HTML z CDN (statyczny plik). Różnica w prędkości to 0.8s vs 3s — i to widać w rankingach Google.",
        "Konkretny case: kancelaria z Krzyków migrowała z WordPress (Lighthouse 47, czas ładowania 4.1s) na Next.js (Lighthouse 96, 0.9s). Po 6 miesiącach ruch organiczny wzrósł o 180%, a koszt Google Ads spadł o 30% (lepszy Quality Score). To są realne pieniądze, nie estetyka.",
        "Drugi powód: bezpieczeństwo. WordPress ma 60% world web market i ten sam % ataków. Next.js statyczny nie ma DB którą można zhackować, nie ma admin panelu który można zalogować bruteforce, nie ma pluginów które się dezaktualizują. Mniej maintenance, mniej incydentów, mniej zmartwień.",
        "Trzeci: edge deployment. Vercel deployuje stronę do 100+ lokalizacji jednocześnie. User z Berlina dostaje stronę z Frankfurtu, z Tokio z Singapuru. WordPress siedzi na jednym serwerze (zwykle Warszawa albo Niemcy) i każdy z dalej dostaje wolniej. Dla biznesu z klientami w Niemczech (a wielu wrocławskich firm tam celuje) to znacząca przewaga.",
        "Kiedy mimo wszystko WordPress: gdy klient KONIECZNIE chce edytować treści w Gutenbergu (znanym mu od 5 lat), gdy budżet to 5 tys. zł i nie ma negocjacji, gdy strona ma być postawiona w 2 tygodnie. Wtedy WordPress z dobrym themem custom (NIE Avada/Divi) i LiteSpeed cache to sensowny kompromis. Robię oba stacki — wybór zależy od briefu.",
      ],
    },
    {
      heading: "Stack 2026: co używamy i czemu",
      body: [
        "Standardowy zestaw dla nowej strony Next.js w 2026 to: framework Next.js 16 (App Router, React Server Components), język TypeScript, style Tailwind CSS 4, headless CMS Sanity (lub Contentful dla większych), hosting Vercel (free tier wystarcza dla 90% projektów do 100 GB ruchu miesięcznie).",
        "Dlaczego App Router a nie Pages Router: App Router daje React Server Components (renderowanie po stronie serwera bez wysyłania JS do klienta), nested layouts (wspólne komponenty per sekcja), streaming (sekcje strony pojawiają się stopniowo zamiast czekać na wszystko). Pages Router jest deprecated od 2024.",
        "TypeScript zamiast plain JS: bo łapie błędy w trakcie pisania, nie w produkcji. Refactor na 50 plikach trwa 5 minut zamiast 5 godzin. Klient nie widzi tej różnicy bezpośrednio, ale widzi w stabilności i czasie zmian po wdrożeniu.",
        "Tailwind 4 (nie Bootstrap, nie CSS Modules): utility-first podejście, mniejszy bundle CSS (purge unused), spójny design system, szybszy dev. To stack którego używa 70% nowych projektów React w 2026.",
        "Sanity jako CMS dla projektów które wymagają edycji: schema definiowana w kodzie TypeScript, real-time collaborative editing (jak Figma), GROQ jako query language. Free tier: 100k requests/mc + 3 użytkowników. Wystarcza dla 80% średnich stron firmowych.",
        "Vercel hosting: git push = automatyczny deploy, preview URL per pull request (każda zmiana dostaje swój link do testów przed merge), automatic SSL, edge functions, image optimization. Free tier: 100 GB bandwidth/mc. Dla większości stron firmowych = 0 zł rocznie hostingu.",
        "Co dorzucamy opcjonalnie: GSAP (zaawansowane animacje), Framer Motion (mikro-interakcje React), Three.js / React Three Fiber (3D, WebGL), Resend (formularze kontaktowe z SMTP), Vercel Analytics (real user monitoring bez cookies).",
      ],
    },
    {
      heading: "Ile kosztuje strona Next.js we Wrocławiu",
      body: [
        "Cena strony Next.js we Wrocławiu zależy od trzech zmiennych: ile podstron (skala), ile customowej logiki (złożoność), kto pisze treści (Ty czy ja). Konkretne widełki na bazie wrocławskiego rynku 2026:",
        "**Strona wizytówka** (5-10 podstron, formularz, blog statyczny): 8 do 15 tys. zł netto. Czas: 4 do 6 tygodni. Stack: Next.js + Tailwind + treści w MDX (bez CMS) + Vercel free. Idealna dla freelancera, prawnika, fotografa, gabinetu lekarskiego.",
        "**Strona firmowa z CMS** (15-50 podstron, blog, dynamic OG, schema.org): 15 do 30 tys. zł. Czas: 6 do 10 tygodni. Stack: Next.js + Sanity Studio + Vercel. Dla średniej firmy która chce sama edytować treści po wdrożeniu.",
        "**Aplikacja webowa Next.js** (konfigurator, panel klienta, integracje API, autoryzacja): 30 do 80 tys. zł. Czas: 8 do 16 tygodni. Stack: Next.js + Postgres + Prisma + NextAuth/Clerk + Stripe + zewnętrzne APIs. Dla SaaS, B2B narzędzi, e-commerce z customową logiką.",
        "**Aplikacja SaaS multi-tenant** (kilkadziesiąt+ użytkowników, role permissions, billing): 80 tys. zł wzwyż. Czas: 4 do 9 miesięcy. Stack: jak wyżej + Sentry monitoring + Datadog/PostHog analytics + cron jobs + queue system.",
        "Co podbija cenę we Wrocławiu konkretnie: integracje z polskimi bramkami (Przelewy24, BLIK, Autopay), systemy fakturowe (Fakturownia, iFirma, Subiekt GT), GUS REGON API, faktura.pl, multilingual PL/EN/DE (dla klientów z biznesem w Niemczech to częsty wymóg), ESG reporting (rośnie w 2026), integracje z systemami branżowymi (np. Comarch dla retail, Optima dla biur księgowych).",
        "Co obniża cenę: gotowe treści (od Ciebie albo z istniejącej strony), gotowe zdjęcia, prosty design (mniej iteracji w Figmie), znana branża (mniej discovery), brak wielojęzyczności, jeden CMS, hosting Vercel free.",
      ],
    },
    {
      heading: "Czas wdrożenia i co robimy w którym tygodniu",
      body: [
        "Realistyczny harmonogram dla średniej strony firmowej (15-30 podstron, Sanity CMS, custom design):",
        "**Tydzień 1** — brief i discovery. 1-2 spotkania (online lub w kawiarni we Wrocławiu). Definiowanie celu, target audience, key messaging, struktura informacji, wymagania techniczne, integracje. Output: dokument briefowy + sitemap.",
        "**Tydzień 2-3** — projekt graficzny w Figmie. Mood board, typografia, kolorystyka, makiety wszystkich sekcji desktop + mobile. Klient akceptuje przed kodem.",
        "**Tydzień 4-5** — programowanie frontendu. Setup Next.js + Tailwind + Sanity. Strona główna + 3-4 podstrony jako proof of concept. Demo na vercel.app przygotowane.",
        "**Tydzień 6** — pozostałe podstrony, blog, formularze, integracje. Codzienne aktualizacje na preview URL.",
        "**Tydzień 7** — optymalizacja: Core Web Vitals (LCP poniżej 2.5s, INP poniżej 200ms, CLS poniżej 0.1), schema.org per route, sitemap.xml, robots.txt, Open Graph images, alt teksty, accessibility audit (kontrast WCAG AA, keyboard navigation, ARIA).",
        "**Tydzień 8** — testy klienckie, korekty, szkolenie z edycji w Sanity Studio (1h online), backup planu, dokumentacja PDF, migracja DNS (zwykle z istniejącego hostingu na Vercel, downtime zero).",
        "Co może wydłużyć harmonogram: nieustalona treść (klient pisze w trakcie), późne uwagi do designu (po 4 tygodnie), integracje z systemami zewnętrznymi które wymagają approvalu po stronie dostawcy (np. Stripe verification może zająć 2 tygodnie), multilingual.",
      ],
    },
    {
      heading: "Jak wybrać freelancera Next.js we Wrocławiu",
      body: [
        "Wrocław ma sporą społeczność React/Next.js — meetupy, konferencje, kilka software house'ów. Przy wyborze freelancera lub małej agencji zwracaj uwagę na pięć rzeczy:",
        "**Portfolio realnych wdrożeń** — nie tylko Awwwards-showcasy ale strony klientów które żyją od roku+. Działające produkcyjnie, indeksowane przez Google, z prawdziwymi konwersjami. Linki do live URL-i, nie tylko screenshoty z Behance.",
        "**Lighthouse score wszystkich projektów portfolio** — minimum 90 dla performance i SEO. Jeśli developer nie jest w stanie wyciągnąć 90 dla własnego portfolio, nie wyciągnie dla Twojej strony. Sprawdź na pagespeed.web.dev/marcinsiwonia.pl jakie wartości ma sam mój site.",
        "**Konkretny stack i argumentacja** — pytanie 'czemu Sanity, nie Strapi' powinno mieć przemyślaną odpowiedź. Pytanie 'czemu Vercel, nie Hostinger Premium' też. Brak odpowiedzi = brak doświadczenia z alternatywami.",
        "**Komunikacja po polsku, dostępność** — codzienna mailowa, Slack/Discord po godzinach. Nie czekaj 3 dni na odpowiedź. We Wrocławiu możliwość spotkania face-to-face raz na 2-3 tygodnie to plus, nie minus (mimo że projekt 100% online).",
        "**Maintenance po wdrożeniu** — co się dzieje w 2 tygodnie po starcie? 3 miesiące? Rok? Kto naprawia jeśli coś się zepsuje? Najlepsi freelancerzy oferują 30-60 dni post-launch support w cenie + opcję miesięcznego retainera (zwykle 2-5 tys. zł/mc) na bieżące zmiany.",
        "Czego unikać: fixed-price na 'wszystko' bez specyfikacji (rozjedzie się), oferty 'wszystko za 3 tys. zł' (jakość proporcjonalna do ceny — Next.js dev w PL kosztuje 220-350 zł/h, 3 tys. to 10-15h pracy = wystarcza na sam setup), agencje które nie chcą podać kto będzie pracował (delegacja do junior na home office vs senior z meetupów Wrocław Tech to różnica jakości).",
      ],
    },
    {
      heading: "Hosting, domena, SSL — co kupić, co dostaniesz w cenie",
      body: [
        "Najczęstsza konfiguracja dla strony Next.js wdrażanej z Wrocławia:",
        "**Vercel hosting** — free tier obsługuje 100 GB ruchu miesięcznie. Dla strony firmowej z 1000-5000 wizyt/mc to z naddatkiem. Pro tier (20$/mc, ~80 zł) potrzebny przy 50k+ wizyt/mc lub gdy wymagasz analytics, password protection, większego compute. SSL automatyczny (Let's Encrypt, odnawiany co 90 dni).",
        "**Domena** — kupowana osobno u rejestratora. Polecam: **OVHcloud** (40-60 zł/rok dla .pl), **Nazwa.pl** (60-100 zł/rok), **Cyber_Folks** (40-80 zł/rok). NIE kupować przez agencję która wdraża stronę — domena ma być na Twojej własnej fakturze, na Twoim koncie, z Twoim emailem do odzyskiwania. Inaczej za 3 lata będziesz miał problem z odejściem.",
        "**DNS** — domyślnie u rejestratora, ale można delegować do Vercel (DNS Vercel jest darmowy i szybszy). Po podpięciu domeny do Vercel: rekord A 76.76.21.21 lub CNAME na cname.vercel-dns.com. Vercel automatycznie wystawia certyfikat SSL.",
        "**Email** — Vercel NIE robi maila. Maile firmowe (typu kontakt@twojadomena.pl) trzeba postawić osobno. Polecam: **Google Workspace** (20-30 zł/mc/skrzynka, najlepsze UX), **Microsoft 365** (jeśli klient już ma firmową infrastrukturę MS), **cyber_folks** (10-15 zł/mc, najtańsze, OK dla małych firm).",
        "Roczny koszt operacyjny standardowej strony Next.js: domena 50 zł + email 240 zł (1 skrzynka) + Vercel free + Sanity free = **~290 zł/rok**. Dla większych projektów z multiple skrzynek + Vercel Pro: ~1500 zł/rok. To kilkukrotnie taniej niż klasyczny hosting WordPress + maintenance.",
      ],
    },
    {
      heading: "SEO i indeksacja: co dostajesz out of the box",
      body: [
        "Standard SEO dla każdej strony Next.js którą wdrażam:",
        "**Sitemap.xml** auto-generated z kodu (`app/sitemap.ts` w Next.js App Router). Zawiera wszystkie podstrony, daty ostatniej modyfikacji, priority. Aktualizuje się przy każdym deploy.",
        "**Robots.txt** z instrukcjami dla crawlerów Google, Bing, oraz nowych AI (GPTBot, ClaudeBot, PerplexityBot — możesz allowować/blokować per crawler).",
        "**Schema.org JSON-LD** per route: `Person` i `Organization` w layoutach, `Service` na stronach usług, `Article` + `BreadcrumbList` + `FAQPage` na blogu, `LocalBusiness` z geokoordynatami Wrocławia dla local SEO. Dane strukturalne to sygnał dla Google i AI search (ChatGPT, Perplexity).",
        "**Dynamic metadata per route** — każda podstrona ma własny title (max 65 znaków, żeby Google nie obcinał), description (150-160 znaków), Open Graph image generowany przez `next/og` (different per route).",
        "**Core Web Vitals** mierzonego w Search Console. Cel: 95th percentile w zielonym dla LCP, INP, CLS. Strona Next.js wdrożona przeze mnie wyciąga to standardowo (vs typowy WordPress który walczy o 70-80%).",
        "**Internal linking** — z każdej podstrony do powiązanych usług, z bloga do stron pieniężnych. To przekierowanie 'link juice' do stron na które chcesz pozycjonować ([więcej o linkowaniu wewnętrznym znajdziesz w sekcji \"Pozycjonowanie strony usługowej\"](/blog/pozycjonowanie-strony-uslugowej)).",
        "**Search Console + Analytics integracja** — w cenie wdrożenia. GA4 (lub Plausible/Umami jeśli klient nie chce cookies), property w Search Console z weryfikacją, sitemap submit, monitoring rankingów pierwsze 8 tygodni.",
      ],
    },
    {
      heading: "Najczęstsze pytania klientów (od briefu do produkcji)",
      body: [
        "Sprzedażowa rozmowa z wrocławskim klientem ma zwykle te same 5-6 pytań. Odpowiedzi poniżej, do skopiowania jeśli masz wątpliwości:",
        "**Czy strona Next.js jest trudniejsza do edycji niż WordPress?** Nie, jeśli używamy CMS (Sanity Studio). Klient widzi panel edycji 1:1 z designem, edytuje teksty i obrazki w real-time, hit publish — strona się aktualizuje. Bez CMS (treści hardcoded w kodzie) — tak, każda zmiana wymaga ode mnie 5-15 minut roboty + deploy. Wybór CMS-vs-hardcode to decyzja briefu.",
        "**Czy Next.js działa na polskich hostingach jak nazwa.pl czy home.pl?** Tak, ale nie polecam. Vercel jest stworzony pod Next.js, ma natywną integrację z framework, edge functions, automatic image optimization. Polski hosting to fallback gdy klient ma legalne wymogi data residency (np. branża zdrowia). Wtedy: Hostinger VPS + Coolify do self-hosting Next.js, lub Cloud Provider z PL data center.",
        "**Co jeśli za 3 lata nie będę chciał już z Tobą pracować?** Cały kod w GitHub na Twoim koncie. Każdy Next.js dev w PL może to przejąć. Zero vendor lock-in. To jest jedna z głównych przewag Next.js + Vercel nad Webflow czy Wix (tam jak zechcesz odejść — przepisanie od zera).",
        "**Ile czasu zajmie pierwsza indeksacja w Google?** SSG/SSR Next.js: 2-12 godzin do pierwszego crawl, 7-21 dni do pełnej indeksacji wszystkich podstron (zależy od PageRank, jakości backlinków, tempa publikacji). Vs SPA (czysty React): 7-21 dni do pierwszego crawl, 4-12 tygodni do pełnej indeksacji. Różnica = realny boost konwersji w pierwszych 3 miesiącach.",
        "**Czy zrobisz mi też logo i identyfikację?** Nie, ale współpracuję z grafikami z Wrocławia którzy to robią. Mogę polecić kontakty na podstawie briefu — na małe budżety (5-8 tys.) freelancer, na większe agencja brandingowa.",
      ],
    },
    {
      heading: "Podsumowanie: co dostaniesz, ile zapłacisz, kiedy wystartujesz",
      body: [
        "Strona firmowa na Next.js we Wrocławiu w 2026 to budżet 8-30 tys. zł, czas 4-10 tygodni, stack Next.js + TypeScript + Tailwind + Sanity + Vercel, performance Lighthouse 95+, SEO out-of-the-box, edge deployment globalny, zero maintenance dramy.",
        "Aplikacja webowa: budżet 30-80 tys., czas 8-16 tygodni, ten sam stack + Postgres/Prisma + auth + płatności + integracje API. Po wdrożeniu opcjonalny retainer 2-5 tys./mc na bieżące zmiany.",
        "Jeśli masz brief lub pomysł — najszybciej napisać mailem na [marcin.siwonia.firma@gmail.com](mailto:marcin.siwonia.firma@gmail.com) lub przez [formularz kontaktowy](/kontakt). Odpisuję tego samego dnia roboczego z wstępną wyceną i terminem.",
        "Jeśli zastanawiasz się którą technologię wybrać — przeczytaj [Next.js vs WordPress: porównanie kosztów wdrożenia](/blog/wordpress-vs-next-js-koszt) lub [strona firmowa 2026: jaką technologię wybrać](/blog/strona-firmowa-2026-jaka-technologia). Po tych dwóch będziesz miał jasność.",
      ],
    },
  ],
  faq: [
    {
      q: "Ile kosztuje strona Next.js we Wrocławiu?",
      a: "Strona wizytówka 8-15 tys. zł, strona firmowa z CMS 15-30 tys., aplikacja webowa od 30 tys. wzwyż. Cena zależy od liczby podstron, integracji i tego czy treści piszesz Ty czy ja.",
    },
    {
      q: "Ile trwa wdrożenie strony Next.js?",
      a: "Strona wizytówka: 4-6 tygodni od briefu do live. Strona firmowa: 6-10 tygodni. Aplikacja webowa: 8-16 tygodni. Termin liczony od akceptacji designu w Figmie, nie od podpisania umowy.",
    },
    {
      q: "Dlaczego Next.js a nie WordPress?",
      a: "Next.js jest 3-5x szybszy (LCP 0.8s vs 3-4s), bezpieczniejszy (brak admin panelu do zhackowania), lepszy SEO (indeksacja w godziny, nie tygodnie). WordPress ma sens przy budżecie poniżej 8 tys. lub gdy klient KONIECZNIE chce edytować w Gutenbergu.",
    },
    {
      q: "Czy będę mógł sam edytować treści po wdrożeniu?",
      a: "Tak, jeśli wybierzemy CMS (Sanity, Contentful). Klient widzi panel 1:1 z designem, edytuje teksty i obrazki, hit publish, strona się aktualizuje. Bez CMS (treści hardcoded) — każda zmiana wymaga 5-15 minut roboty po mojej stronie.",
    },
    {
      q: "Jaki hosting polecasz dla Next.js?",
      a: "Vercel — stworzony przez twórców Next.js, free tier wystarcza dla 90% stron firmowych (100 GB ruchu/mc), automatic SSL, edge deployment globalny. Pro tier (80 zł/mc) potrzebny przy 50k+ wizyt miesięcznie.",
    },
    {
      q: "Co jeśli za 2 lata nie będę chciał już z Tobą pracować?",
      a: "Cały kod w GitHub na Twoim koncie. Każdy Next.js dev w Polsce może projekt przejąć. Zero vendor lock-in, w przeciwieństwie do Webflow/Wix gdzie odejście oznacza przepisanie od zera.",
    },
    {
      q: "Robisz strony też dla klientów spoza Wrocławia?",
      a: "Tak, projekt jest 100% online (Figma, Slack, GitHub, Vercel). Spotkania we Wrocławiu są opcjonalne — wygodne dla lokalnych firm ale nie wymagane. Mam klientów z Warszawy, Krakowa, Poznania i z Niemiec.",
    },
    {
      q: "Czy oferujesz wsparcie po wdrożeniu?",
      a: "Tak. 30-60 dni post-launch w cenie wdrożenia (drobne poprawki, fix bugów, training). Po tym czasie opcjonalny miesięczny retainer 2-5 tys. zł/mc na bieżące zmiany, nowe funkcje, monitoring SEO.",
    },
  ],
});

export const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
