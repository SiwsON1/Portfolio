export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: string[];
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

export const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
