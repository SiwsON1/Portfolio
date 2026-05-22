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
    keyword: "ile kosztuje strona www",
    metaTitle: "Ile kosztuje strona www 2026 — konkretne widełki cenowe",
    metaDescription:
      "Cena strony www 2026: wizytówka 3-5 tys. (WP), usługowa 5-12 tys., aplikacja Next.js od 12 tys. Co podbija cenę, gdzie warto przepłacić, gdzie nie.",
    hero: { kind: "seo" },
    relatedServices: ["tworzenie-stron-www", "tworzenie-stron-wordpress", "aplikacje-nextjs"],
    body: [
      "Najczęstsze pytanie jakie dostaję mailem: 'ile kosztuje strona?'. Odpowiedź zaczyna się od trzech pytań do klienta. Po pierwsze: czy potrzebujesz wizytówki czy aplikacji. Po drugie: czy treść już masz, czy ja mam ją wymyślić. Po trzecie: czy chcesz sam edytować, czy zostawiasz to programiście.",
      "Strona wizytówka (3-5 stron, formularz kontaktowy, blog) to dla małej firmy 3-5 tysięcy złotych netto. Stack zwykle WordPress + custom theme + Yoast SEO. Czas wdrożenia 2-3 tygodnie. Klient potem sam edytuje.",
      "Strona usługowa (10-30 stron, landing per usługa, blog, integracje, mocne SEO) to przedział 5-12 tysięcy. Tu już wchodzi planowanie struktury pod konkretne frazy, schema.org, optymalizacja Core Web Vitals i często opieka miesięczna po wdrożeniu.",
      "Aplikacja Next.js z customową logiką (konfigurator, panel klienta, integracje API, autoryzacja) startuje od 12 tysięcy w górę. Tu mówimy o 6-12 tygodniach pracy, decyzjach architektonicznych i często długoterminowej współpracy po starcie.",
      "Co podbija cenę: niestandardowy projekt graficzny (od zera), wielojęzyczność, integracje z zewnętrznymi systemami (CRM, ERP, system rezerwacji), pisanie treści, fotografia, custom animations. Co obniża: gotowe assety klienta, jeden język, prosty CMS, brak migracji ze starego systemu.",
      "Gdzie warto przepłacić: SEO techniczne od pierwszego dnia, hosting Tier 1 (Vercel, Hostinger Premium+), 60-dniowa opieka po wdrożeniu. Gdzie nie warto: animowane intro 5-sekundowe, slider, ikony customowe gdy starczy biblioteka.",
    ],
    faq: [
      { q: "Ile kosztuje najtańsza strona www w 2026?", a: "3-5 tys. zł netto za prostą wizytówkę WordPress (3-5 podstron, formularz, blog). Czas wdrożenia 2-3 tygodnie. Tańsze oferty (poniżej 2 tys.) zwykle gotowiec szablonowy bez customowego designu." },
      { q: "Czy strona usługowa za 7 tys. to mało?", a: "Nie, jeśli scope realnie odpowiada budżetowi (10-15 podstron, blog, formularz, podstawowe SEO). Mniej za 7 tys. = junior dev lub gotowy szablon. Więcej za 7 tys. (50 podstron, integracje) = senior wycenił po znajomości lub ze stratą." },
      { q: "Co podbija cenę najczęściej?", a: "Customowy design od zera (vs gotowy theme) +30-50%, multilanguage +30%, integracje z polskimi APIs (Przelewy24, GUS) +3-8 tys. każda, pisanie treści przez agencję +5-15 tys." },
      { q: "Gdzie nie warto oszczędzać?", a: "Hosting Tier 1 (Vercel, Hostinger Premium+), SEO techniczne od pierwszego dnia (sitemap, schema, OG, Lighthouse 90+), 30-60 dniowy support post-launch." },
      { q: "Czy fixed-price czy stawka godzinowa?", a: "Strony firmowe zwykle fixed-price na podstawie briefu. Aplikacje: część fixed (MVP), część T&M dla zmian w trakcie. Retainery po wdrożeniu — godzinowo lub miesięczny pakiet (10/20/40h)." },
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
    keyword: "Next.js czy WordPress",
    metaTitle: "Next.js czy WordPress 2026 — przewodnik decyzyjny",
    metaDescription:
      "Pięć kryteriów: kto edytuje, ile ruchu, jakie funkcje, jaki zespół, jaki budżet. Konkretna decyzja z liczbami. Kiedy WP to słuszność, kiedy strzał w stopę.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-wordpress", "headless-wordpress"],
    body: [
      "Klient: 'znajomy zrobił mi propozycję na WordPress, ale czytałem że Next.js jest lepszy'. Odpowiedź zaczyna się od pięciu pytań decyzyjnych.",
      "Pierwsze: czy planujesz sam edytować treści? WordPress wygrywa bo ma nawigowalny edytor który działa od 2003 roku. Next.js z headless CMS (Sanity, Strapi, Contentful) też daje edycję, ale klient musi przeskoczyć krzywą uczenia się nowego panelu.",
      "Drugie: ile będziesz miał ruchu i czy wymagasz top-tier wydajności? WordPress dobrze postawiony (LiteSpeed cache, optymalizacja obrazków) wyciąga 90+ Lighthouse. Next.js z SSG/ISR wyciąga 99+ bez wysiłku, ale dla 90% biznesów ta różnica nic nie kosztuje konwersją.",
      "Trzecie: czy planujesz funkcje których nie zrobi gotowy plugin? Konfigurator wyceny, panel klienta, integracja z customowym API, real-time updates. WordPress można tu rozbudować, ale szybko stajesz w sytuacji 'PHP plugin który nikt już nie utrzyma'. Next.js daje czystą architekturę aplikacji.",
      "Czwarte: jaki masz zespół i kto to będzie utrzymywał za 3 lata? WordPress ma armię developerów PHP w PL, każda agencja umie. Next.js wymaga frontend developera z React/TS — droższego, rzadszego, ale to też trend rosnący.",
      "Piąte: jakiego budżetu długoterminowego się spodziewasz? WordPress to ~30-100 zł/miesiąc hosting + ewentualne pluginy płatne. Next.js na Vercel: 0 zł plan hobby (do limitu), 20$/mc Pro. Hostinger lub własny VPS: 30-100 zł/mc. Plus koszt CMS jeśli headless: 0-99$/mc Sanity, 0-29$/mc Strapi self-hosted.",
      "Moja decyzja w 80% przypadków: jeśli klient ma stronę głównie do prezentacji oferty + blog → WordPress. Jeśli aplikacja przetwarzająca dane użytkownika lub integrująca się z biznesem → Next.js. Reszta zależy od pieniędzy i planów.",
    ],
    faq: [
      { q: "Czy WordPress nadaje się do biznesu w 2026?", a: "Tak, dla 60-80% małych firm. Strona usługowa, blog, prosta integracja formularzy + płatności = WordPress robi to taniej i prościej. Wymaga tylko dobrego setup (custom theme, NIE Avada/Divi/Elementor) + LiteSpeed cache." },
      { q: "Kiedy zdecydowanie Next.js a nie WordPress?", a: "Aplikacja z customową logiką (konfigurator, panel klienta), wymóg performance Lighthouse 95+ z budżetu reklamowego (Quality Score), planowanie miłonowego ruchu organicznego, zespół z React expertise." },
      { q: "Czy mogę zmienić zdanie po starcie?", a: "Tak, headless WordPress (WP backend + Next.js frontend) to popularna ścieżka migracji. Workflow redakcji bez zmian, performance jak Jamstack. Migracja typowo 4-8 tygodni, koszt 18-30 tys." },
      { q: "Co jeśli nie wiem ile będzie ruchu?", a: "Default: zacznij od WordPress jeśli budżet poniżej 12 tys., od Next.js jeśli 15+. Migracja w drugą stronę (NextJS → WP) jest rzadka i nie ma sensu. Migracja WP → NextJS jest standardem dla skalujących się firm." },
      { q: "Który stack jest tańszy długoterminowo (TCO 3 lata)?", a: "WordPress 9-25 tys., Next.js 15-36 tys. WP oszczędza 5-10 tys., ale Next.js daje lepsze SEO/performance często nadrabiające w pierwszym roku przy ruchu 1k+ wizyt/mc. Pełen breakdown w [WordPress vs Next.js — porównanie kosztów](/blog/wordpress-vs-next-js-koszt)." },
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
    keyword: "pozycjonowanie strony usługowej",
    metaTitle: "Pozycjonowanie strony usługowej — 7 kroków do top10",
    metaDescription:
      "Pierwsze 6 miesięcy SEO strony usługowej krok po kroku: audyt, technika, content, linki. Co robić w tygodniu 1, w miesiącu 3, w miesiącu 6. Plan z mojej praktyki.",
    hero: { kind: "seo" },
    relatedServices: ["tworzenie-stron-www", "aplikacje-nextjs", "nowoczesna-strona-firmowa-2026"],
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
    faq: [
      { q: "Ile czasu potrzeba żeby strona się pozycjonowała?", a: "Pierwsze ruchy w 4-8 tygodni (technika + on-page), top10 dla long-tail w 3-6 miesięcy, top3 dla competitive fraz w 6-18 miesięcy. Zależy od konkurencji, autorytetu domeny, jakości contentu." },
      { q: "Ile kosztuje pozycjonowanie strony usługowej?", a: "Audyt jednorazowy 3-8 tys. Miesięczna opieka SEO (audyt + content + linkbuilding + raporty): 2-8 tys./mc. Większe agencje 8-20 tys./mc. Tańsze (poniżej 1.5 tys.) zwykle automatyzacja bez strategicznego myślenia." },
      { q: "Co jest ważniejsze: technika czy content?", a: "Oba krytyczne. Technika to fundament (bez tego content nie zaindeksuje się dobrze). Content to wyrażenie autorytetu (bez tego nawet idealna technika nie pozycjonuje konkurencyjnych fraz). Default: pierwsze 4 tygodnie technika, potem content + linki równolegle." },
      { q: "Czy linki kupne pomagają?", a: "Krótkoterminowo tak, długoterminowo ryzyko Google Penalty (algorytm Penguin). SWLi i paczki z giełd = mega ryzyko. Lepiej guest posty na branżowych blogach, partnerstwa contentowe, organic mention z PR." },
      { q: "Jak zmierzyć ROI z pozycjonowania?", a: "Search Console: pozycje + impresje + kliki. GA4: konwersje z organic. Senuto/Ahrefs: traffic estimate + visibility index. Mapuj na fraz = przychód per klient = LTV. ROI miesięczny zwykle widać po 6-12 miesiącach (delay vs SEM)." },
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
    keyword: "wdrożenia AI małe firmy",
    metaTitle: "Wdrożenia AI w małych firmach — 5 case studies 2025-26",
    metaDescription:
      "5 konkretnych wdrożeń AI w firmach 5-50 osób: chatbot księgowy, klasyfikacja maili, generator opisów, voice-to-text, predictive maintenance. Koszty, ROI, stack.",
    hero: { kind: "ai" },
    relatedServices: ["wdrozenia-ai", "aplikacje-nextjs", "next-js-software-house"],
    body: [
      "AI w małej firmie to inna gra niż w korporacji. Mniejszy budżet, mniejsza tolerancja na ryzyko, krótszy horyzont oczekiwania na ROI. Pięć wdrożeń które widziałem działające.",
      "Case 1: chatbot na bazie wewnętrznych dokumentów dla biura księgowego (8 osób). RAG na PDF-ach z aktów prawnych + odpowiedzi z cytowaniem źródła. Stack: OpenAI API + Postgres pgvector + Next.js. Koszt wdrożenia: 18 tys. zł, miesięczne API ~400 zł. Efekt: oszczędność 6h tygodniowo na pytaniach od młodszych księgowych.",
      "Case 2: automatyczna klasyfikacja maili dla agencji nieruchomości (15 osób). Każdy mail klasyfikowany jako zapytanie / oferta / spam, do każdego propozycja odpowiedzi. Stack: Claude API + n8n + Gmail integracja. Koszt: 12 tys. zł, miesięczne ~600 zł. Efekt: czas odpowiedzi z 4h na 30min średnio.",
      "Case 3: generator opisów produktów dla sklepu meblowego (12 osób). Wgrasz zdjęcie + parametry techniczne, dostajesz 3 warianty opisu sprzedażowego. Stack: GPT-4o vision + custom prompt + WordPress integracja. Koszt: 8 tys. zł, miesięczne ~200 zł. Efekt: nowy produkt online w 10 minut zamiast godziny.",
      "Case 4: voice-to-text dla kancelarii prawnej (6 osób). Nagrywanie konsultacji + automatyczna transkrypcja + extraction kluczowych faktów do CRM. Stack: Whisper + Claude + custom interfejs. Koszt: 22 tys. zł, miesięczne ~800 zł. Efekt: zero ręcznego protokołowania.",
      "Case 5: predictive maintenance dla zakładu produkcyjnego (35 osób). Czujniki na maszynach + ML model przewidujący awarie. Stack: Python + Scikit-learn + Grafana. Koszt: 45 tys. zł, miesięczne ~300 zł hosting. Efekt: 3 awarie wcześniej zapobiegnięte = ROI w 4 miesiące.",
      "Wspólne wnioski: zacznij małe, mierz baseline przed wdrożeniem, zaplanuj fallback na manuala. AI nie zastąpi pracownika, daje mu 2-3x więcej spraw obsłużonych w tym samym czasie.",
    ],
    faq: [
      { q: "Ile kosztuje wdrożenie AI w małej firmie?", a: "Prosty chatbot na bazie dokumentów (RAG): 10-25 tys. zł. Automatyzacja maili / klasyfikacja: 8-18 tys. Generator treści: 5-12 tys. Zaawansowane: voice-to-text, predictive ML: 20-50 tys. Plus 200-1000 zł/mc API + hosting." },
      { q: "Jak długo trwa wdrożenie AI?", a: "Proof of concept: 2-4 tygodnie. Production-ready system z UI dla pracowników: 6-12 tygodni. Pełna integracja z istniejącym CRM/ERP: 12-20 tygodni." },
      { q: "Co dostarcza najszybszy ROI?", a: "Klasyfikacja i routing maili (oszczędność 10-20h/tydzień), automatyczne odpowiedzi na FAQ klientów, generator opisów produktów dla e-commerce. Zwrot zwykle w 3-6 miesięcy." },
      { q: "Jakie modele AI używać?", a: "OpenAI GPT-4 / o1 dla większości zadań tekstowych. Claude Anthropic dla długich dokumentów (200k context). Open-source (Llama 3, Mistral) self-hosted dla compliance / cost reduction. Whisper dla speech-to-text." },
      { q: "Czy AI zastąpi moich pracowników?", a: "Nie. Daje im 2-3x więcej spraw obsłużonych w tym samym czasie. Pracownik staje się supervisorem AI zamiast wykonawcą zadań rutynowych. Realna ścieżka: zatrudniasz mniej nowych ludzi przy skalowaniu, nie zwalniasz istniejących." },
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
    keyword: "Core Web Vitals 2026",
    metaTitle: "Core Web Vitals 2026 — co się zmieniło, jak naprawić",
    metaDescription:
      "INP zastąpiło FID, LCP cele zaostrzone, CLS-2 mierzy shift po interakcji. Konkretne strategie napraw: next/image, RSC, font-display, edge functions. 2026.",
    hero: { kind: "performance" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    body: [
      "Google podkręciło śrubę. W 2024 INP zastąpiło FID jako oficjalny metric responsywności. W 2026 są dyskusje o zaostrzeniu progów LCP z 2.5s na 2.0s i dodaniu CLS-2 mierzącego layout shift po interakcji. Co to znaczy w praktyce.",
      "LCP (Largest Contentful Paint) — czas do wyrenderowania największego elementu w viewport. Cel: poniżej 2.5s. Najczęstsze winowajce: niezoptymalizowane obrazki, blokujący JS, wolne TTFB z serwera. Naprawa: next/image z priority na hero, preload critical fonts, hosting z edge caching.",
      "INP (Interaction to Next Paint) — opóźnienie między kliknięciem/stuknięciem a odpowiedzią UI. Cel: poniżej 200ms. Najczęstsze: ciężki JS na main thread, brak Web Workers, synchronous third-party scripts. Naprawa: React Server Components, lazy load non-critical, defer analytics.",
      "CLS (Cumulative Layout Shift) — przesunięcia layoutu po wczytaniu. Cel: poniżej 0.1. Najczęstsze: obrazki bez width/height, fonty z FOIT/FOUT, dynamiczne wstawianie reklam/popupów. Naprawa: aspect-ratio CSS, font-display: swap z size-adjust, rezerwacja miejsca na dynamic content.",
      "TTFB (Time To First Byte) — odpowiedź serwera. Nie jest core ale wpływa na LCP. Cel: poniżej 800ms. Naprawa: edge functions zamiast SSR, ISR z revalidate, CDN przed origin, optymalizacja DB queries.",
      "Narzędzia do mierzenia: PageSpeed Insights (data z field + lab), Search Console Core Web Vitals report (real users z 28 dni), Chrome DevTools Performance (debug), web-vitals npm package (own analytics).",
      "Praktyczna strategia: ustal baseline, atakuj LCP najpierw (najwięcej impact), potem INP (drugie miejsce), CLS na końcu (zwykle daje się szybko ogarnąć). Mierz po każdej zmianie. Cel długoterminowy: 95th percentile w zielonym dla wszystkich 3 metrik.",
    ],
    faq: [
      { q: "Jakie są obecne progi Core Web Vitals?", a: "LCP poniżej 2.5s (good), INP poniżej 200ms, CLS poniżej 0.1. Mierzone na 75th percentile real users z 28 dni. Google rozważa zaostrzenie LCP do 2.0s w 2026." },
      { q: "Co to INP i jak go naprawić?", a: "Interaction to Next Paint — opóźnienie między kliknięciem a odpowiedzią UI. Naprawa: React Server Components (mniej JS w bundle), lazy load non-critical, defer analytics, Web Workers dla heavy compute." },
      { q: "Jak naprawić LCP poniżej 2.5s?", a: "next/image z priority na hero (preload), preload critical fonts (next/font), edge caching (Vercel edge functions, Cloudflare), optimized hero (WebP/AVIF, properly sized), brak blokujących third-party scripts above the fold." },
      { q: "Czy Core Web Vitals są sygnałem rankingowym?", a: "Tak, od 2021. Wpływ ~5-10% na ranking dla competitive fraz. Słabe CWV = niższe pozycje (przy podobnych innych czynnikach). Dobre CWV = przewaga, ale nie zastąpi treści i linków." },
      { q: "Jakie narzędzia używać do mierzenia?", a: "PageSpeed Insights (lab + field data), Search Console Core Web Vitals report (real users 28 dni), Chrome DevTools Performance (debug), web-vitals npm package (own analytics), Vercel Analytics (built-in)." },
    ],
  },
];

/* === Posts pod frazy informacyjne i porównawcze === */
posts.push(
  {
    slug: "next-js-co-to-jest",
    title: "Next.js — co to jest i kiedy go używać",
    excerpt:
      "Next.js to framework React od Vercel do produkcyjnych aplikacji webowych. Server components, routing, image optimization, edge deployment. Kiedy ma sens, kiedy nie.",
    date: "2026-04-28",
    readingMinutes: 9,
    tags: ["Next.js", "podstawy", "framework"],
    keyword: "Next.js co to jest",
    metaTitle: "Next.js — co to jest i kiedy używać (przewodnik 2026)",
    metaDescription:
      "Next.js to framework React od Vercel: SSR, SSG, ISR, edge functions, image optimization. Kiedy używać, kiedy nie, ile kosztuje wdrożenie. Praktyczny przewodnik 2026.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "next-js-software-house", "tworzenie-stron-www"],
    body: [],
    lead:
      "Next.js to framework do React stworzony przez Vercel w 2016 roku, dziś w wersji 16. Renderuje strony na serwerze (SSR, SSG, ISR), dostarcza obrazki i fonty zoptymalizowane, daje routing i edge functions out of the box. Standard branżowy 2026 dla każdej strony publicznej która ma się szybko ładować i dobrze indeksować.",
    sections: [
      {
        heading: "Czym jest Next.js technicznie",
        body: [
          "Next.js to nadbudowa nad React. React sam z siebie to biblioteka komponentów UI bez routingu, bez SSR, bez optymalizacji. Next.js dodaje wszystko czego brakuje żeby zbudować pełnowartościową stronę produkcyjną: routing oparty o strukturę plików, server-side rendering, statyczną generację, optymalizację obrazów i fontów, edge functions, API routes, middleware.",
          "App Router (od wersji 13) to obecny standard. Każdy folder w `app/` to route. Plik `page.tsx` renderuje stronę, `layout.tsx` wspólny szablon, `loading.tsx` stan ładowania, `error.tsx` boundary błędów. Routing nested (zagnieżdżone layouty), parallel routes, intercepting routes — rzeczy których React Router nie ma.",
          "React Server Components (RSC) to flagowa funkcja. Komponenty domyślnie renderują się na serwerze, NIE wysyłają JS do klienta, fetchują dane bezpośrednio (np. `await db.query()` w komponencie). Klient dostaje gotowy HTML i tylko niezbędny JavaScript do interaktywności. Bundle size spada o 30-60% vs klasyczny React.",
          "Stack 2026 dla stron Next.js: Next.js 16 + TypeScript + Tailwind 4 + headless CMS (Sanity / Contentful / Payload) + Vercel hosting. Dla aplikacji dorzucasz Postgres + Prisma + auth (Clerk lub NextAuth) + Stripe / Przelewy24.",
        ],
      },
      {
        heading: "4 strategie renderowania (i kiedy której używać)",
        body: [
          "**SSG (Static Site Generation)** — strona renderowana raz przy build, deploy jako statyczny HTML na CDN. Najszybsza możliwa strona (LCP poniżej 1s). Dla blogów, dokumentacji, marketing pages, portfolio. Default w Next.js App Router gdy nie używasz dynamicznych funkcji.",
          "**ISR (Incremental Static Regeneration)** — strona statyczna na CDN, ale regeneruje się on-demand po update content (webhook z CMS). Łączy szybkość SSG z świeżością dynamicznych danych. Dla e-commerce z często zmieniającymi się cenami, blogów z dużym wolumenem postów.",
          "**SSR (Server-Side Rendering)** — strona renderowana na serwerze per request. Każdy user dostaje świeży HTML. Dla dashboardów z user-specific data, A/B testing, geo-targeting, real-time data.",
          "**CSR (Client-Side Rendering)** — komponent z `'use client'`, pełny React po stronie przeglądarki. Dla heavy interactivity: edytory, gry, chats. W Next.js to wyjątek, nie reguła.",
          "Wybór per route nie per projekt. Marketing pages SSG, dashboard SSR, listing produktów ISR, edytor CSR — w jednej aplikacji, automatycznie. Vercel detekuje strategię z kodu i optymalizuje deployment.",
        ],
      },
      {
        heading: "Kiedy Next.js jest odpowiedni",
        body: [
          "Strona marketingowa firmy lub usług — pełen SEO, OG images, schema.org, sub-1s ładowanie. Standardowy use case.",
          "Blog albo magazyn — content w MDX lub headless CMS, statyczna generacja, ISR przy publikacji nowego posta. Świetny SEO out of the box.",
          "E-commerce małej-średniej skali — katalog statyczny, koszyk client-side, checkout SSR, integracja Stripe / Przelewy24. Dla większych sklepów (10k+ produktów) lepiej dedykowane platformy (Shopify, Centra).",
          "Aplikacja SaaS lub B2B narzędzie — dashboard po logowaniu, panel klienta, integracje API. Server actions zamiast osobnego backendu, edge functions dla geo-distributed users.",
          "Dokumentacja techniczna — MDX + automatyczna generacja sidebar, sub-1s search, dark mode. Docusaurus i Mintlify są oparte o Next.js z powodu.",
        ],
      },
      {
        heading: "Kiedy Next.js NIE ma sensu",
        body: [
          "Mała wewnętrzna aplikacja firmowa za logowaniem, brak wymogu SEO — wystarczy Vite + React. Mniej setupu, prostszy deployment, brak narzutu SSR.",
          "Real-time gry przeglądarkowe — Phaser, PixiJS, Three.js standalone. Next.js renderowanie jest zbędne, gra to canvas + WebGL.",
          "Statyczny one-pager bez dynamiki — HTML + CSS + jeden plik JS. Next.js to overkill dla landing page'a na 5 sekcji.",
          "Strony z bardzo dużą bazą treści (100k+ stron) — czas build w Next.js przy SSG urośnie do 30+ minut. Lepiej Hugo (Go-based, build w sekundach) lub Astro z partial hydration.",
          "Klient KONIECZNIE chce edytować wszystko w Gutenbergu z muscle memory 5 lat — wtedy WordPress ze starannie zrobionym themem custom. Headless WordPress + Next.js frontend to alternatywa łącząca oba światy.",
        ],
      },
      {
        heading: "Ile kosztuje strona na Next.js w 2026",
        body: [
          "Strona wizytówka (5-10 podstron): 8-15 tys. zł netto. Czas: 4-6 tygodni. Stack Next.js + Tailwind + treści w MDX (bez CMS) + Vercel free.",
          "Strona firmowa z CMS i blogiem (15-50 podstron): 15-30 tys. Czas: 6-10 tygodni. Stack + Sanity Studio + Vercel.",
          "Aplikacja webowa (konfigurator, panel klienta, integracje): 30-80 tys. Czas: 8-16 tygodni. Stack + Postgres + Prisma + auth + Stripe.",
          "Aplikacja SaaS multi-tenant: 80 tys. zł wzwyż. Czas: 4-9 miesięcy.",
          "Dla pełnych widełek z breakdownem na poszczególne komponenty zobacz [ile kosztuje strona na Next.js — przewodnik](/blog/ile-kosztuje-strona-na-next-js). Dla porównania z WordPress: [Next.js vs WordPress: koszty wdrożenia i utrzymania](/blog/wordpress-vs-next-js-koszt).",
        ],
      },
      {
        heading: "Konkurencja: Astro, SvelteKit, Remix",
        body: [
          "**Astro** — content-first framework. Multi-framework support (React, Vue, Svelte w jednym projekcie), zero JS by default, partial hydration (\"islands\"). Świetny dla blogów, dokumentacji, marketing pages bez aplikacyjnej dynamiki. Słabszy ekosystem niż Next.js.",
          "**SvelteKit** — Svelte-based, mniejszy bundle niż React, lżejszy runtime. Świetny developer experience, ale mniejsza społeczność, mniej gotowych komponentów, trudniej znaleźć developera.",
          "**Remix** — od twórców React Router (przejęty przez Shopify w 2022). Filozofia full-stack web standards (loaders, actions zamiast custom API). Świetny ale Next.js wygrał market share — dla większości projektów Next.js to bezpieczniejszy wybór.",
          "**Nuxt (Vue)** — odpowiednik Next.js w świecie Vue. Jeśli zespół zna Vue, jest sensowny. Jeśli pracujesz na rynku React (jak większość PL), Next.js standardem.",
          "Wybór 2026: Next.js dla 80% projektów (full app + ekosystem), Astro dla content-heavy bez aplikacyjnej dynamiki, reszta — sytuacyjnie.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy Next.js to to samo co React?",
        a: "Nie. React to biblioteka komponentów UI. Next.js to framework który dodaje do React routing, SSR, image optimization, edge functions. Sam React (z Vite) wystarcza dla wewnętrznych dashboardów; Next.js dla publicznych stron i aplikacji.",
      },
      {
        q: "Czy Next.js działa na hostingu typu nazwa.pl czy home.pl?",
        a: "Tak, ale nie polecam. Vercel jest zaprojektowany pod Next.js i daje out-of-the-box edge deployment, image optimization, automatic SSL. Polski hosting tylko gdy klient ma legalne wymogi data residency.",
      },
      {
        q: "Ile czasu zajmuje wdrożenie strony Next.js?",
        a: "Strona wizytówka 4-6 tygodni, strona firmowa z CMS 6-10 tygodni, aplikacja webowa 8-16 tygodni. Termin liczony od akceptacji designu w Figmie.",
      },
      {
        q: "Czy Next.js jest dobry pod SEO?",
        a: "Lepszy niż React SPA. Server-side rendering daje gotowy HTML dla Google bot, indeksacja w godziny zamiast tygodni. Core Web Vitals out of the box w zielonym (LCP poniżej 1.5s typowo).",
      },
      {
        q: "Czy klient będzie mógł sam edytować treści?",
        a: "Tak, jeśli wybierzemy headless CMS (Sanity, Contentful). Klient widzi panel 1:1 z designem, edytuje teksty i obrazki w real-time. Bez CMS treści są w kodzie i każda zmiana wymaga 5-15 minut roboty po stronie developera.",
      },
      {
        q: "Czy Next.js zastąpi mi backend?",
        a: "Częściowo. Server actions i API routes obsługują formularze, integracje, prostą logikę biznesową. Dla bardziej złożonych systemów (microservices, message queues) potrzebujesz osobnego backendu — Next.js wtedy jako frontend + BFF (Backend For Frontend).",
      },
    ],
  },
  {
    slug: "ile-kosztuje-strona-na-next-js",
    title: "Ile kosztuje strona na Next.js w 2026?",
    excerpt:
      "Strona Next.js w 2026: 8-15 tys. wizytówka, 15-30 tys. firmowa z CMS, 30-80 tys. aplikacja. Co wpływa na cenę, co dostajesz w pakiecie, jak nie przepłacić.",
    date: "2026-04-22",
    readingMinutes: 11,
    tags: ["Next.js", "ceny", "wycena"],
    keyword: "ile kosztuje strona Next.js",
    metaTitle: "Ile kosztuje strona na Next.js w 2026 — konkretne widełki",
    metaDescription:
      "Cena strony Next.js 2026: wizytówka 8-15 tys., firmowa 15-30 tys., aplikacja 30-80 tys. Co wpływa na cenę, co dostajesz, na czym oszczędzić bez kompromisów.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    body: [],
    lead:
      "Strona na Next.js w 2026 kosztuje od 8 tys. zł (prosta wizytówka) do 80+ tys. (aplikacja webowa). Najwięcej projektów które realizuję: strony firmowe z CMS w przedziale 15-30 tys. zł, czas wdrożenia 6-10 tygodni. Pełen breakdown poniżej, plus na czym opłaca się zaoszczędzić, a gdzie absolutnie nie.",
    sections: [
      {
        heading: "Cztery przedziały cenowe (i co dostajesz w każdym)",
        body: [
          "**Wizytówka 8-15 tys. zł** — strona z 5-10 podstronami, bez CMS (treść w kodzie), formularz kontaktowy z mailem, prosty blog statyczny opcjonalnie. Stack Next.js + Tailwind + Vercel free. Czas: 4-6 tygodni. Idealna dla freelancera, prawnika, fizjoterapeuty, fotografa.",
          "**Strona firmowa 15-30 tys. zł** — 15-50 podstron, blog z CMS Sanity, dynamic OG images per route, schema.org, Search Console + GA4, opcjonalnie multilingual PL/EN. Stack + Sanity Studio + Vercel. Czas: 6-10 tygodni. Najczęstszy projekt — średnia firma usługowa, biuro architektoniczne, agencja, klinika.",
          "**Aplikacja webowa 30-80 tys. zł** — customowa logika: konfigurator wyceny, panel klienta z logowaniem, integracje API (CRM, ERP, fakturowe), płatności online. Stack + Postgres + Prisma + NextAuth/Clerk + Stripe / Przelewy24. Czas: 8-16 tygodni. Dla SaaS, B2B narzędzi, e-commerce z customową logiką.",
          "**Aplikacja SaaS multi-tenant 80 tys. zł wzwyż** — kilkadziesiąt+ użytkowników, role permissions, billing recurring, analytics, monitoring (Sentry, PostHog), automatyzacje (cron, queue). Czas: 4-9 miesięcy z 1-2 developerami. Dla startupów po pre-seed/seed, scale-upów rozszerzających ofertę.",
        ],
      },
      {
        heading: "Co podbija cenę",
        body: [
          "**Integracje z polskimi systemami** — Przelewy24 / Autopay / BLIK (każda to dodatkowe 3-8 tys.), GUS REGON API (~2 tys.), iFirma / Subiekt GT / Comarch ERP (5-15 tys. zależnie od scope), faktura.pl / Fakturownia. Każda integracja to setup + autoryzacja po stronie dostawcy + testy w środowisku sandbox.",
          "**Wielojęzyczność (i18n)** — drugi język podbija cenę o 30-50% (UI translations + duplikacja treści w CMS + routing locale). Trzeci język: kolejne 20-30%. Dla wrocławskich firm celujących w niemiecki rynek to częsta opcja.",
          "**Customowy design (nie szablon)** — design w Figmie od zera + 2-3 iteracje + adaptacja na 3 breakpointy = 8-20 tys. po stronie grafika + 30-40% dłuższy czas wdrożenia po stronie dev (custom komponenty zamiast gotowców).",
          "**Animacje i WebGL** — GSAP scroll-triggered, Three.js / React Three Fiber sceny 3D, custom transitions między stronami. To 5-15 tys. dodatkowego budżetu i 2-4 tygodnie więcej. Dla portfolio agencji albo studia kreatywnego daje wow effect, dla księgowej zbędne.",
          "**Migracja z istniejącej strony** — content migration ze starego CMS (eksport WP → import Sanity), 301 redirects mapping, zachowanie URL-i pod SEO. Dla strony 100+ podstron: 5-10 tys. dodatkowo.",
        ],
      },
      {
        heading: "Co obniża cenę (legalnie, bez kompromisów)",
        body: [
          "**Gotowe treści od klienta** — jeśli masz copywritera lub piszesz sam, oszczędzasz 3-8 tys. (cena copywritera Next.js-aware to 80-150 zł/h, na średnią stronę 30-60 godzin).",
          "**Gotowe zdjęcia / visual identity** — własna fotografia (lub bank typu Unsplash z manual selection) zamiast nowej sesji = -3-10 tys. Logo i kolorystyka już ustalone = -3-8 tys. po stronie grafika.",
          "**Prosty design oparty o sprawdzone patterny** — mniej iteracji w Figmie, mniej custom komponentów, szybsze wdrożenie. Spadek o 20-30% kosztu wdrożenia przy zachowanej jakości.",
          "**Brak wielojęzyczności** — jeden język = standardowe widełki bez dopłat.",
          "**Vercel free + Sanity free** — hosting i CMS za 0 zł/mc dla większości projektów średniej skali. Pro plany potrzebne dopiero powyżej 100k requests/mc lub 100 GB bandwidth.",
          "**Hardcode treści zamiast CMS** — jeśli klient nie planuje sam edytować, treści w MDX są tańsze (-3-5 tys. wdrożenie, 0 zł setup CMS). Ale każda zmiana po wdrożeniu wymaga 5-15 min roboty programisty.",
        ],
      },
      {
        heading: "Koszty utrzymania (per rok)",
        body: [
          "**Hosting Vercel** — free dla większości stron firmowych (limit 100 GB bandwidth/mc). Pro 20$/mc (~80 zł) dla 50k+ wizyt/mc lub gdy chcesz analytics, password protection, większy compute.",
          "**Sanity CMS** — free do 100k requests/mc + 3 użytkowników (wystarcza dla 80% stron firmowych). Growth plan od 99$/mc dla większych zespołów redakcyjnych.",
          "**Domena** — 40-100 zł/rok (.pl), 50-200 zł (.com). Trzymana u rejestratora osobno (NIE u agencji która wdraża stronę), na koncie klienta.",
          "**Email firmowy** — Google Workspace 30 zł/mc/skrzynka, Microsoft 365 podobnie, cyber_folks ~10 zł/mc. Vercel NIE robi maila.",
          "**Maintenance / drobne zmiany** — albo godzinowo (220-350 zł/h u dewelopera Next.js w PL), albo retainer 2-5 tys./mc dla regularnych zmian + monitoring SEO + opieka post-launch.",
          "**Roczny TCO operacyjny** dla strony firmowej z CMS: 300-500 zł hosting/CMS + 50 zł domena + 360 zł email + opcjonalny retainer = realnie 800-2000 zł/rok bez retainera, 25-65 tys. zł/rok z retainerem 2-5 tys./mc.",
        ],
      },
      {
        heading: "Cena vs WordPress: kiedy się opłaca dopłacić",
        body: [
          "WordPress strona usługowa kosztuje 5-12 tys. zł na start, Next.js 15-30 tys. Różnica 10-15 tys. wydaje się duża, ale długoterminowo:",
          "**Maintenance roczny** — WP: 1-3 tys. zł (update core, pluginy, security patches, backupy). Next.js: 200-1000 zł (mniej attack surface, brak DB, brak admin panelu).",
          "**Performance** — WP out-of-the-box Lighthouse 40-60, z optymalizacją (LiteSpeed + custom theme) 80-95. Next.js out-of-the-box 90-95, z optymalizacją 95-100. Różnica = realny boost konwersji z Google Ads (lepszy Quality Score) + organic search.",
          "**Bezpieczeństwo** — 60% world web market WordPressa = 60% ataków na ten stack. Next.js statyczny nie ma DB ani admin do zhackowania. Mniej incydentów, mniej kosztów post-incident.",
          "**TCO 3 lata** — WP 9-25 tys., Next.js 15-36 tys. Różnica 5-10 tys. nadrabiana przy ruchu 1k+ wizyt/mc dodatkowym uplift z SEO (zwykle w pierwszym roku).",
          "Pełne porównanie z liczbami: [WordPress vs Next.js — koszty wdrożenia i utrzymania](/blog/wordpress-vs-next-js-koszt).",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje najtańsza strona na Next.js?",
        a: "8 tys. zł netto za prostą wizytówkę (5-10 podstron, brak CMS, Vercel free). Czas wdrożenia 4-6 tygodni. Tańsze oferty (3-5 tys.) zwykle oznaczają junior developera lub gotowy szablon — jakość proporcjonalna do ceny.",
      },
      {
        q: "Czemu Next.js jest droższy od WordPress?",
        a: "Bo developer Next.js w PL kosztuje 220-350 zł/h vs WordPress 100-180 zł/h. Wyższy skill set (TypeScript, React, performance, SEO). Ale długoterminowo TCO często niższy — mniej maintenance, mniej incydentów, lepsze performance.",
      },
      {
        q: "Czy mogę zacząć od taniej wersji i rozbudować?",
        a: "Tak, ale to pułapka. Migracja MDX → CMS po fakcie kosztuje 5-10 tys. Lepiej od razu zdecydować czy potrzebujesz CMS na podstawie planów edycyjnych klienta.",
      },
      {
        q: "Czy hosting Vercel naprawdę jest darmowy?",
        a: "Tak, do 100 GB ruchu miesięcznie. Dla strony firmowej z 1000-5000 wizyt/mc to z naddatkiem. Pro tier (80 zł/mc) potrzebny powyżej 50k wizyt/mc lub gdy wymagasz analytics, password protection, edge config.",
      },
      {
        q: "Co dostaję w cenie wdrożenia?",
        a: "Custom design w Figmie + akceptacja przed kodem, kod w GitHub (Twoja własność), Sanity CMS + szkolenie z edycji, schema.org + sitemap + Search Console, 30-60 dni post-launch support, dokumentacja PDF, deployment na Vercel + DNS migration.",
      },
      {
        q: "Czy oferujesz fixed-price czy stawkę godzinową?",
        a: "Strona firmowa zwykle fixed-price na podstawie briefu. Aplikacja: część fixed (MVP scope), część T&M (zmiany w trakcie). Dla retainerów po wdrożeniu — godzinowo lub miesięczny pakiet (10/20/40h).",
      },
    ],
  },
  {
    slug: "headless-cms-co-to",
    title: "Headless CMS — co to i kiedy ma sens",
    excerpt:
      "Headless CMS: panel edycji oddzielony od frontendu, treści jako API. Sanity, Contentful, Strapi. Czemu zastępują WordPress dla nowoczesnych stron.",
    date: "2026-04-15",
    readingMinutes: 8,
    tags: ["headless CMS", "architektura"],
    keyword: "headless CMS",
    metaTitle: "Headless CMS — co to, kiedy używać, Sanity vs Strapi",
    metaDescription:
      "Headless CMS: edycja oddzielona od frontendu, treści przez API. Sanity, Contentful, Strapi. Kiedy zastępują WordPress, kiedy zostaje monolit. Decyzja 2026.",
    hero: { kind: "nextjs" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Headless CMS to system do zarządzania treścią który NIE renderuje strony. Daje tylko API (REST lub GraphQL) z treścią. Frontend jest osobną aplikacją (Next.js, Astro, etc) która tę treść konsumuje i renderuje.",
      "Tradycyjny CMS (WordPress, Joomla) jest 'monolitem': edycja + storage + rendering w jednym package. Headless rozdziela edycję od renderingu — frontend możesz wymienić bez ruszenia treści, możesz mieć kilka frontendów (web, mobile, smart TV) na tych samych danych.",
      "Najpopularniejsze headless CMS w 2026: **Sanity** (struktur danych w kodzie, real-time editing, GROQ query language), **Contentful** (enterprise, drogi, niezawodny), **Strapi** (open-source, self-hosted, Node.js), **Hygraph/GraphCMS** (GraphQL native), **Payload** (TypeScript, self-hosted).",
      "Kiedy używać headless: wieloplatformowy content (web + app), Jamstack architecture, multi-language complex (Sanity ma świetny i18n), zespół redakcyjny + zespół dev (osobne workflow), wymagania performance (CDN frontend).",
      "Kiedy WordPress wystarczy: blog osobisty, mała strona wizytówka, klient który KONIECZNIE chce edytować w Gutenbergu, brak budżetu na headless setup (Sanity setup minimum 5-10 tys. zł).",
      "Wybór praktyczny: dla małej-średniej strony PL — Sanity (free tier wystarcza, polski support, świetny dev experience). Dla dużych enterprise — Contentful. Self-hosted z budżetem zerowym — Strapi.",
      "Migracja z WordPress na headless: WordPress backend zostaje (admin + database) + warstwa GraphQL (WPGraphQL plugin) + Next.js frontend. Hybrid setup zachowuje workflow redakcji znany każdemu, dodaje wydajność Jamstack.",
    ],
    faq: [
      { q: "Czym headless CMS różni się od WordPress?", a: "WordPress monolit łączy edycję + storage + rendering. Headless rozdziela edycję od renderingu — frontend osobny (Next.js, Astro), wymienialny bez ruszenia treści. Daje multi-platform (web + app + smart TV) i lepsze performance." },
      { q: "Który headless CMS wybrać w 2026?", a: "Sanity dla 80% projektów PL (real-time, świetny DX, free tier). Contentful dla enterprise. Strapi dla self-hosted i compliance. Payload dla TypeScript + self-hosted. Pełne porównanie: [Sanity vs Strapi](/blog/sanity-cms-vs-strapi)." },
      { q: "Ile kosztuje headless CMS?", a: "Sanity free do 100k requests/mc + 3 użytkowników. Growth od 99$/mc. Contentful od 489$/mc. Strapi 0 zł (open-source) + hosting 15-50$/mc na Railway. Setup po stronie dewelopera: 5-10 tys. zł dodatkowo do projektu." },
      { q: "Czy klient sam edytuje w headless CMS?", a: "Tak. Sanity Studio i Strapi admin są intuicyjne — pola sekcji 1:1 z designem, real-time preview, mobile-friendly. Krzywa uczenia się 1-2 sesje (vs WordPress który zna każdy)." },
      { q: "Czy mogę migrować z WordPress na headless CMS?", a: "Tak. Eksport WP → import do Sanity (custom skrypt z wp-graphql + sanity-cli). Albo headless WP (WP backend zostaje + Next.js frontend) jako kompromis. Migracja typowo 4-8 tygodni." },
    ],
  },
  {
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
          "Google bot teoretycznie potrafi uruchomić JavaScript i odczytać treść SPA, ale w praktyce robi to w drugiej fazie crawlu (rendering queue) — z opóźnieniem 7-21 dni od pierwszego crawl. Nowa podstrona wchodzi do indeksu po 2-4 tygodniach zamiast godzin.",
          "Drugi problem: Core Web Vitals. SPA ma typowy LCP 3.5-5s (czeka na JS bundle download + parse + execute + render). Google używa LCP, INP, CLS jako sygnałów rankingowych od 2021. Niski Lighthouse = niższe pozycje na konkurencyjnych frazach.",
          "Trzeci: social sharing. Facebook, LinkedIn, Twitter scrapują OG meta tags z HTML response. Na CSR site OG tags często są w `<head>` ale puste (template hardcoded), bo dynamic content nie zdąża się wygenerować przed scrape. Wynik: brzydkie preview na social mediach, niższy CTR.",
          "Czwarty: AI search. ChatGPT, Perplexity, Gemini crawlują strony szybciej niż Google ale gorzej obsługują JavaScript. SSR sites są cytowane częściej w AI Overviews.",
        ],
      },
      {
        heading: "Co daje Next.js z Server Components",
        body: [
          "Server-side rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR) — każdy route w Next.js domyślnie renderuje się na serwerze i wysyła do przeglądarki gotowy HTML. Google bot dostaje treść w pierwszej odpowiedzi, indeksuje natychmiast.",
          "**Pierwsza indeksacja**: SSR/SSG 2-12 godzin, CSR 7-21 dni. Re-crawl po update content z ISR + webhook: minuty zamiast tygodni. To realna przewaga w dynamice publikacji.",
          "**React Server Components (RSC)** — komponenty domyślnie renderują się na serwerze i NIE wysyłają JS do klienta. Klient dostaje HTML + minimalny JavaScript do interaktywności. Bundle size spada o 30-60%, LCP poniżej 1.5s nawet na średnich urządzeniach.",
          "**Image optimization** — `next/image` automatycznie generuje WebP/AVIF, lazy loading, responsive srcset, blur placeholder, priority dla above-the-fold. Lighthouse Performance 95+ standard.",
          "**Font optimization** — `next/font` self-hosted Google Fonts z preload, brak FOIT/FOUT, brak CLS od fontów. Detektor `font-display: swap` z `size-adjust` calculations automatic.",
        ],
      },
      {
        heading: "SEO standardy out of the box",
        body: [
          "**Sitemap.xml** — `app/sitemap.ts` generuje dynamicznie z kodu, automatycznie aktualizuje przy każdym deploy. Może czytać CMS, listę postów, slug-i serwisów.",
          "**Robots.txt** — `app/robots.ts` z instrukcjami per crawler. Możesz allowować GoogleBot, blokować GPTBot lub odwrotnie. Granularność per route.",
          "**Schema.org JSON-LD** per route — `Person`, `Organization`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`, `LocalBusiness`. Wstrzykiwane przez `<Script type=\"application/ld+json\">` w komponencie. Google rich snippets + AI search entity recognition działają.",
          "**Dynamic metadata per route** — `generateMetadata()` async funkcja zwracająca title, description, OG image, Twitter card per podstronę. Czyta z CMS lub bazy danych.",
          "**Open Graph images** — `next/og` generuje obrazki 1200x630 dla Facebook/Twitter/LinkedIn dynamicznie z React komponentu. Każda podstrona ma własny preview, nie ten sam dla wszystkich.",
          "**Canonical URLs** — `alternates.canonical` w metadata zapobiega duplicate content przy parametrach URL, paginacji, filtracja.",
        ],
      },
      {
        heading: "Case study: migracja WordPress → Next.js",
        body: [
          "Konkretny klient: kancelaria prawna (B2B, target Wrocław + Niemcy). Stara strona na WordPress + Avada theme + WooCommerce do płatności online za konsultacje.",
          "**Stan przed migracją** — Lighthouse Performance 47, LCP 4.2s, indeksowane 200/350 podstron, średnia pozycja głównych fraz: 14, ruch organiczny: 800 wizyt/mc, koszt Google Ads CPC: 8.50 zł.",
          "**Migracja** — 6 tygodni, stack Next.js + Sanity (zachowany workflow redakcji) + Vercel. URL-e zachowane 1:1 (lub 301 redirects gdzie struktura uproszczona). Schema.org Service + LocalBusiness + FAQPage. Search Console submit + URL inspection dla 350 podstron.",
          "**Stan po 6 miesiącach** — Lighthouse Performance 96, LCP 0.9s, indeksowane 350/350, średnia pozycja: 5, ruch organiczny: 2240 wizyt/mc (+180%), koszt Google Ads CPC: 5.90 zł (-30% przez lepszy Quality Score).",
          "**Koszt migracji**: 35 tys. zł. **Zwrot z dodatkowego ruchu i tańszych ads**: 4 miesiące.",
        ],
      },
      {
        heading: "Konfiguracja Next.js pod SEO — checklist",
        body: [
          "**1. `app/layout.tsx`** — root metadata z `metadataBase`, default title template, OG defaults, Person/Organization JSON-LD.",
          "**2. `app/sitemap.ts`** — dynamiczna generacja z listy stron + CMS posts + lista serwisów. Ostatnia modyfikacja per URL.",
          "**3. `app/robots.ts`** — Allow GoogleBot/Bingbot/AI bots wg strategii, sitemap link.",
          "**4. `app/[route]/page.tsx`** — per-route `generateMetadata` z title (max 65 znaków), description (150-160), canonical, OG image z `next/og`.",
          "**5. Schema.org per typ** — Service na stronach usług, Article + BreadcrumbList + FAQPage na blogu, LocalBusiness w layoucie głównym (z geokoordynatami miasta).",
          "**6. `next/image` z priority** dla LCP image (zwykle hero), `sizes` dla responsive.",
          "**7. `next/font` self-hosted** z preload, brak Google Fonts CDN.",
          "**8. Internal linking** — z każdej podstrony do powiązanych serwisów, z bloga do stron pieniężnych. Anchor text-em z głównymi keyword.",
          "**9. Vercel Analytics + GA4 / Plausible** — monitoring real users, Core Web Vitals z Search Console.",
          "**10. Search Console + Bing Webmaster** — verification, sitemap submit, regularne sprawdzanie coverage report.",
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
        a: "Tak, ale z opóźnieniem 7-21 dni i niższymi rankingami. Google bot uruchamia JS w drugiej fazie crawlu (rendering queue). Next.js z SSR daje gotowy HTML w pierwszej odpowiedzi — indeksacja w 2-12 godzin.",
      },
      {
        q: "Ile wzrasta ruch po migracji z WordPress na Next.js?",
        a: "Konkretny case z mojej praktyki: +180% ruchu organicznego w 6 miesięcy + spadek CPC w Google Ads o 30%. Wartość zależy od bazy startowej — większy uplift dla stron z niskim Lighthouse i niedoinwestowanym SEO.",
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
  },
  {
    slug: "next-js-vs-react-roznice",
    title: "Next.js vs React — co wybrać i czym się różnią",
    excerpt:
      "React to biblioteka UI. Next.js to framework wokół Reacta. Kiedy wystarczy sam React (Vite), kiedy potrzebujesz Next.js. Konkretne różnice, ceny, decyzja per typ projektu.",
    date: "2026-03-30",
    readingMinutes: 9,
    tags: ["Next.js", "React", "porównanie", "decyzje techniczne"],
    keyword: "Next.js vs React",
    metaTitle: "Next.js vs React — różnice i co wybrać (2026)",
    metaDescription:
      "Next.js vs React: nie są alternatywami. React = biblioteka UI, Next.js = framework wokół niej. Kiedy wystarczy sam React, kiedy potrzebujesz Next.js. Decyzja per projekt.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-react", "aplikacje-nextjs", "next-js-software-house"],
    body: [],
    lead:
      "React to biblioteka UI, Next.js to framework który Reacta opakowuje w routing, SSR, optymalizację. Nie są alternatywami. Pytanie brzmi: sam React (np. z Vite) czy React + Next.js? Krótka odpowiedź: dla każdej strony publicznej Next.js, dla wewnętrznych narzędzi za logowaniem sam React. Pełna decyzja niżej.",
    sections: [
      {
        heading: "Czym technicznie różnią się",
        body: [
          "**React** (od 2013, Meta) — biblioteka do budowania komponentów UI. Daje JSX, hooks (useState, useEffect, useMemo), context, refs. NIE ma routingu, NIE ma SSR, NIE ma optymalizacji obrazów ani fontów. Standalone setup wymaga doboru narzędzi: bundler (Vite, Webpack), router (React Router), state manager (Zustand, Redux), HTTP client (Axios, fetch).",
          "**Next.js** (od 2016, Vercel) — framework wokół Reacta. Daje wszystko czego React sam nie ma: file-based routing, SSR + SSG + ISR + CSR per route, API routes, server actions, middleware, image optimization (`next/image`), font optimization (`next/font`), dynamic OG (`next/og`), edge functions, edge middleware.",
          "**App Router** (Next.js 13+) — obecny standard. React Server Components domyślnie (renderowanie na serwerze, mniej JS w bundle). Nested layouts, parallel routes, intercepting routes, streaming, Suspense boundaries.",
          "Patrząc inaczej: React to silnik samochodu, Next.js to gotowy samochód (nadwozie + koła + tablica rozdzielcza + radio). Możesz zbudować samochód wokół silnika React (z Vite + React Router + Tanstack Query + Tailwind), ale weźmiesz na siebie integrację, optymalizację, deployment.",
        ],
      },
      {
        heading: "Kiedy sam React (Vite) wystarcza",
        body: [
          "**Wewnętrzny dashboard firmowy za logowaniem** — brak SEO, brak public landing pages, użytkownik zalogowany wie gdzie idzie. Vite + React + Tanstack Query + shadcn/ui = szybki dev, brak narzutu SSR.",
          "**Narzędzie deweloperskie** — wewnętrzny CLI z UI, designer narzędzia, builder schematów. SEO niepotrzebny, performance dla 50 użytkowników nie krytyczny.",
          "**Gra przeglądarkowa** — Phaser, PixiJS, Three.js standalone w React shell. Next.js renderowanie zbędne, gra to canvas + game loop.",
          "**Prototyp / MVP do testów na 100 użytkownikach** — szybki setup Vite, deploy na Netlify static. Migracja na Next.js jak pomysł zwalidowany.",
          "**Storybook / dokumentacja komponentów** — Storybook ma własny build system, integruje się z React standalone.",
          "**Embedded widget na cudzych stronach** — Twój React komponent osadzony przez `<iframe>` lub `<script>`. Next.js routing zbędny.",
        ],
      },
      {
        heading: "Kiedy potrzebujesz Next.js",
        body: [
          "**Każda strona publiczna z wymogiem SEO** — marketing, blog, e-commerce, landing pages, dokumentacja. Server-side rendering daje gotowy HTML dla Google bot.",
          "**Aplikacja SaaS z public marketing + private dashboard** — strona główna SSG (SEO), pricing SSG, blog SSG, app/ za logowaniem SSR. Wszystko w jednym Next.js, wspólne komponenty, jedno repo.",
          "**E-commerce** — katalog produktów ISR (regeneruje przy update ceny), koszyk client-side, checkout SSR (per-user). Schema.org Product + BreadcrumbList + Review out of the box.",
          "**B2B narzędzie z public landing + auth flow + dashboard** — Next.js obsługuje cały flow: marketing → signup → onboarding → dashboard. Server actions zamiast osobnego backendu.",
          "**Aplikacja wymagająca dynamic OG images** — każda podstrona / każdy post / każda zniżka generuje własny preview na social media. `next/og` daje to z React komponentu.",
          "**Aplikacja z international audience** — edge deployment na 100+ lokalizacjach, automatic image optimization per device, multi-region database support.",
        ],
      },
      {
        heading: "Cena rynkowa: React solo vs Next.js",
        body: [
          "**React solo developer** w PL: 180-250 zł/h. Specjalizacja: frontend, komponenty, state management. Nie zna SSR, nie zna SEO, nie ogarnia deployment poza Netlify/Vercel statycznym.",
          "**Next.js full-stack developer** w PL: 220-350 zł/h. Szerszy stack: TypeScript, React, SSR/SSG, performance, SEO, edge functions, czasem backend (Postgres, Prisma), deployment na Vercel + DNS migration.",
          "Różnica 40-100 zł/h wynika z szerszego skill setu. Dla małej strony (40h roboty) to 1.5-4 tys. zł różnicy. Dla średniej (200h): 8-20 tys.",
          "Ale: Next.js dev oszczędza Twój czas na: SEO (out of the box), deployment (git push = live), maintenance (mniej narzędzi do utrzymania). Długoterminowy TCO często wyrównany lub niższy.",
          "Dostępność: w PL znacznie więcej React solo niż senior Next.js. Powód: szerszy skill set wymaga więcej lat doświadczenia. Wrocław ma kilkudziesięciu seniorów Next.js (meetupy Wrocław.tech, ReactWro), to wciąż mniej niż React solo.",
        ],
      },
      {
        heading: "Praktyczna rekomendacja 2026",
        body: [
          "**Default dla nowych projektów: Next.js**. Nawet jeśli nie potrzebujesz wszystkich features dziś, dodanie SSR/SEO później do React-Vite app jest bolesne (refactor routing, dodanie data fetching strategy, migracja deployment).",
          "**Wyjątek 1**: wewnętrzny dashboard za logowaniem bez SEO. Sam React + Vite to szybszy setup, prostsza architektura.",
          "**Wyjątek 2**: gra przeglądarkowa lub narzędzie typu CodeSandbox. Routing nie jest osią aplikacji, performance to canvas.",
          "**Wyjątek 3**: embedded widget. React standalone bundle łatwiejszy do osadzenia niż Next.js app.",
          "**Migracja React → Next.js** jest możliwa ale niebagatelna: przepisanie routingu z React Router na file-based, dodanie SSR data fetching, refactor klient-only kodu (window, document) na 'use client', migracja deploymentu. Realnie 30-60% effort vs greenfield.",
          "Dla wrocławskich firm zaczynających projekt: zacznij od Next.js + Vercel + Sanity. Stack którego używa większość software house'ów w mieście (zobacz [next-js-software-house](/uslugi/next-js-software-house)). Łatwo znaleźć następcę gdy pierwszy dev odejdzie.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy Next.js to alternatywa do React?",
        a: "Nie. Next.js JEST oparty na React. Pytanie brzmi: sam React (z Vite) czy React + Next.js? Dla większości publicznych stron — React + Next.js. Dla wewnętrznych narzędzi — sam React.",
      },
      {
        q: "Czy mogę przepisać React app na Next.js?",
        a: "Tak, ale to nie trivial. Routing z React Router → file-based, dodanie SSR data fetching, refactor window/document na 'use client', migracja deploymentu. Realnie 30-60% effort vs greenfield project.",
      },
      {
        q: "Co jest szybsze: React + Vite czy Next.js?",
        a: "Pierwszy load: Next.js (SSR/SSG = gotowy HTML, sub-1s). Subsequent navigation: porównywalne. Dev experience (HMR): Vite trochę szybszy. Production performance: Next.js wygrywa przez optymalizacje.",
      },
      {
        q: "Czy potrzebuję TypeScript w Next.js?",
        a: "Technicznie nie, ale standardem. 95% nowych projektów Next.js używa TypeScript. Łapie błędy w trakcie pisania zamiast w produkcji. Setup automatyczny przez `create-next-app`.",
      },
      {
        q: "Co z React Native? To też React?",
        a: "Tak, ale to inny target — mobile apps (iOS, Android) zamiast web. Współdzieli wzorce React (komponenty, hooks) ale ma własne API (View, Text, ScrollView zamiast div, span). Next.js to web only, React Native to mobile only.",
      },
      {
        q: "Czy mogę używać Next.js dla mobile app?",
        a: "Pośrednio: Next.js to web app, ale działa świetnie jako PWA (Progressive Web App) instalowane na telefon. Dla natywnego mobile (App Store, Google Play) potrzebujesz React Native, Expo, lub Capacitor wokół Next.js.",
      },
    ],
  },
  {
    slug: "server-side-rendering-co-to",
    title: "Server-Side Rendering (SSR) — co to i kiedy używać",
    excerpt:
      "SSR vs CSR vs SSG vs ISR — 4 strategie renderowania w Next.js. Konkretne implikacje dla SEO, performance, kosztów hostingu.",
    date: "2026-03-25",
    readingMinutes: 8,
    tags: ["SSR", "Next.js", "performance"],
    keyword: "Server-Side Rendering",
    metaTitle: "Server-Side Rendering (SSR) — co to, kiedy używać",
    metaDescription:
      "SSR vs CSR vs SSG vs ISR: 4 strategie renderowania w Next.js. Implikacje dla SEO, performance, kosztów hostingu. Wybór per route, nie per projekt.",
    hero: { kind: "performance" },
    relatedServices: ["aplikacje-nextjs", "next-js-software-house", "tworzenie-stron-www"],
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
    faq: [
      { q: "Czym SSR różni się od SSG?", a: "SSR renderuje per request (dynamic content per user). SSG renderuje raz przy build (statyczny HTML na CDN). SSR daje świeżość, SSG daje szybkość. Wybór: SSG dla treści wspólnej, SSR dla user-specific." },
      { q: "Co to ISR?", a: "Incremental Static Regeneration — hybryda SSG + SSR. Strona statyczna na CDN, regeneruje się on-demand po update content (webhook z CMS). Łączy szybkość statyki z świeżością dynamicznej." },
      { q: "Która strategia jest najszybsza?", a: "SSG (statyczny HTML na CDN, 0 ms server time, sub-1s LCP). ISR drugie miejsce (statyczna z odświeżeniem). SSR trzecie (czas server processing). CSR najwolniejsza dla pierwszego ładowania." },
      { q: "Która jest najtańsza w hostingu?", a: "SSG (statyczne pliki na CDN, Vercel free tier do 100 GB). ISR podobnie. SSR wymaga compute na serwerze (każdy request kosztuje), wyższy koszt skalowalnie." },
      { q: "Jak wybrać strategię w Next.js?", a: "Default SSG dla 90% routes (marketing, blog, dokumentacja). ISR dla often-updated (e-commerce katalog). SSR tylko dla per-user data (dashboard za logowaniem). CSR dla heavy interactivity (edytor)." },
    ],
  },
  {
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
      "Pytanie 'czy Google indeksuje SPA' jest źle zadane. Google indeksuje, ale z opóźnieniem i mniejszą skutecznością niż SSR. Konkretne dane: średni czas pierwszej indeksacji nowej strony — SSR 2-12 godzin, CSR 7-21 dni.",
      "Drugi problem CSR: Core Web Vitals. LCP (Largest Contentful Paint) na CSR site to średnio 3.5-5s (czeka na JS bundle download + parse + execute + render). Na SSR/SSG: 0.8-1.5s. CWV jest sygnałem rankingowym Google od 2021. Różnica = niższe pozycje.",
      "Trzeci: social sharing. Facebook/LinkedIn/Twitter scrapują OG meta tags z HTML response. Na CSR site OG tags są w `<head>` ale często pusto (template hardcoded), bo dynamic content nie zdąża się wgenerować przed scrape. Wynik: brzydki preview na social mediach, niższy CTR.",
      "Czwarty: AI search (ChatGPT, Perplexity, Gemini). Te systemy crawlują strony szybciej niż Google ale gorzej obsługują JS. SSR sites są cytowane częściej.",
      "Wyjątek: jeśli Twoja strona NIE potrzebuje SEO (wewnętrzny dashboard za logowaniem, narzędzie deweloperskie, gra), CSR jest OK. Mniej setup, prostsze, tańsze.",
      "Konkretne case: zmigrowałem klientowi e-commerce z React SPA na Next.js SSG. Po 4 miesiącach: indexed pages 156→340, organic traffic +210%, average position 18→7. Cena migracji: 25 tys. zł. Zwrot z dodatkowego ruchu: 6 tygodni.",
      "Praktyczna rekomendacja: jeśli budujesz cokolwiek publicznego, zacznij od Next.js (SSR/SSG/ISR). To 90% wybór dziś. CSR-only ma sens dla 10% przypadków: dashboardy, narzędzia, prototypy.",
    ],
    faq: [
      { q: "Czy Google indeksuje SPA (CSR)?", a: "Tak, ale z opóźnieniem 7-21 dni i niższymi rankingami. Google bot uruchamia JS w drugiej fazie crawlu. SSR daje gotowy HTML w pierwszej odpowiedzi — indeksacja w 2-12 godzin." },
      { q: "Ile wzrasta ruch po migracji CSR → SSR?", a: "Konkretny case z mojej praktyki: e-commerce React SPA → Next.js SSG: indexed pages 156→340, organic traffic +210%, average position 18→7 w 4 miesiące. Zwrot z migracji 25 tys. zł w 6 tygodni." },
      { q: "Co z Core Web Vitals SSR vs CSR?", a: "SSR/SSG LCP 0.8-1.5s vs CSR 3.5-5s. INP też lepszy (mniej JS w bundle). CWV są sygnałem rankingowym Google od 2021. Różnica = realny boost na konkurencyjnych frazach." },
      { q: "Kiedy CSR ma sens mimo wszystko?", a: "Wewnętrzny dashboard za logowaniem (brak SEO). Narzędzie deweloperskie. Gra przeglądarkowa. Embedded widget. Dla 10% przypadków SPA jest słusznym wyborem." },
      { q: "Czy AI search (ChatGPT, Perplexity) widzą CSR?", a: "Gorzej niż Google. AI crawlery mają słabsze JS rendering. SSR sites cytowane częściej w AI Overviews. Różnica będzie rosła w kolejnych latach." },
    ],
  },
  {
    slug: "jamstack-co-to-jest",
    title: "Jamstack — co to jest i czemu to przyszłość stron www",
    excerpt:
      "Jamstack: JavaScript + APIs + Markup. Architektura w której HTML jest pre-rendered na CDN, dynamika via API. Najszybsze strony jakie da się zrobić.",
    date: "2026-03-11",
    readingMinutes: 8,
    tags: ["Jamstack", "architektura"],
    keyword: "Jamstack co to",
    metaTitle: "Jamstack — co to, kiedy używać, stack 2026",
    metaDescription:
      "Jamstack: HTML pre-rendered na CDN, dynamika przez API. Stack 2026: Next.js + Sanity + Vercel. Kiedy ma sens, kiedy lepiej tradycyjny SSR.",
    hero: { kind: "nextjs" },
    relatedServices: ["strony-jamstack", "aplikacje-nextjs", "headless-wordpress"],
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
    faq: [
      { q: "Czym Jamstack różni się od tradycyjnej strony?", a: "Tradycyjna strona (WordPress) renderuje per request: PHP + MySQL query + HTML response. Jamstack: HTML pre-rendered przy build, serwowany z CDN. Brak DB query, brak server processing, sub-1s ładowanie globalnie." },
      { q: "Jaki stack typowy dla Jamstack 2026?", a: "Frontend: Next.js, Astro, SvelteKit. CMS: Sanity, Contentful, Strapi. Hosting: Vercel, Netlify, Cloudflare Pages. Edge functions: Vercel Edge, Cloudflare Workers. Default w PL: Next.js + Sanity + Vercel." },
      { q: "Czy Jamstack jest zawsze lepszy?", a: "Nie. Dla real-time chat, social network feed, dashboards z hot data per user, SSR z DB jest lepsze. Jamstack ma sens dla 70-80% stron (marketing, blog, e-commerce katalogowy, dokumentacja, portfolio)." },
      { q: "Ile kosztuje strona Jamstack?", a: "Strona firmowa 15-30 tys. zł, aplikacja 30-80 tys. Hosting Vercel free dla większości projektów (do 100 GB ruchu/mc). CMS Sanity free do 100k requests/mc. Pełny TCO 3 lata: 15-36 tys." },
      { q: "Jak migrować z WordPress na Jamstack?", a: "WordPress backend zostaje (admin + DB) + warstwa GraphQL (WPGraphQL plugin) + Next.js frontend. Hybrid setup zachowuje workflow redakcji, dodaje wydajność Jamstack. Migracja typowo 4-8 tygodni, koszt 18-30 tys." },
    ],
  },
  {
    slug: "wordpress-vs-next-js-koszt",
    title: "WordPress vs Next.js — porównanie kosztów wdrożenia i utrzymania",
    excerpt:
      "WordPress strona usługowa 5-12k zł vs Next.js 15-30k. Hosting WP 30-100 zł/mc vs Next.js 0-80 zł/mc. Maintenance, performance, TCO 3 lata. Konkretne liczby.",
    date: "2026-03-04",
    readingMinutes: 11,
    tags: ["WordPress", "Next.js", "ceny", "porównanie", "TCO"],
    keyword: "koszt utrzymania strony WordPress vs Next.js",
    metaTitle: "Koszt utrzymania strony WordPress vs Next.js — TCO 3 lata",
    metaDescription:
      "TCO 3 lata: WordPress 4-12 tys. zł utrzymania (hosting + pluginy + security patches) vs Next.js 0-3 tys. (Vercel + 0h maintenance). Realne liczby z faktur klientów.",
    hero: { kind: "wordpress" },
    relatedServices: ["tworzenie-stron-wordpress", "tworzenie-stron-www", "aplikacje-nextjs"],
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
      "Pełen przewodnik wyboru technologii dla strony firmowej w 2026: [strona firmowa 2026 — jaką technologię wybrać](/blog/strona-firmowa-2026-jaka-technologia). Konkretne porównanie dwóch frameworków: [Next.js 15 vs WordPress — przewodnik decyzyjny dla małej firmy](/blog/next-js-15-vs-wordpress-2026).",
    ],
    lead:
      "WordPress strona usługowa kosztuje 5-12 tys. zł na start, Next.js 15-30 tys. Hosting WP 30-100 zł/mc, Vercel 0-80 zł. Maintenance roczny WP 1-3 tys., Next.js 200-1000 zł. TCO 3 lata: WordPress 9-25 tys., Next.js 15-36 tys. Konkretne liczby, decyzja per profil firmy.",
    faq: [
      {
        q: "Co kosztuje więcej w 3 lata: WordPress czy Next.js?",
        a: "WordPress: 9-25 tys. zł (5-12k wdrożenie + 1-3.6k hosting + 3-9k maintenance). Next.js: 15-36 tys. (15-30k wdrożenie + 0-3k hosting + 0.6-3k maintenance). WordPress oszczędza 5-10 tys., ale Next.js daje lepsze SEO/performance często nadrabiające w pierwszym roku.",
      },
      {
        q: "Czy mogę zacząć od WordPress i potem przejść na Next.js?",
        a: "Tak, headless WordPress (WP backend + Next.js frontend) jest popularną ścieżką migracji. Workflow redakcji bez zmian, performance jak Jamstack. Migracja typowo 4-8 tygodni, koszt 18-30 tys.",
      },
      {
        q: "Czy WordPress da się zrobić szybki?",
        a: "Tak — custom theme (NIE Avada/Divi/Elementor) + LiteSpeed cache + obrazki WebP + lazy loading wyciąga Lighthouse 80-95. Próg który Next.js osiąga out of the box przy zerowym setup.",
      },
      {
        q: "Czy hosting Vercel naprawdę darmowy dla strony firmowej?",
        a: "Tak, do 100 GB ruchu miesięcznie. Strona firmowa z 1000-5000 wizyt/mc to z naddatkiem. Pro tier (80 zł/mc) dopiero powyżej 50k wizyt lub dla password protection / analytics.",
      },
      {
        q: "Co z bezpieczeństwem WordPress vs Next.js?",
        a: "WordPress 60% world web market = 60% ataków na ten stack. Statyczny Next.js nie ma DB do zhackowania, brak admin panel do brute force, brak pluginów do dezaktualizacji. Mniej incydentów, mniej maintenance security.",
      },
      {
        q: "Dla której technologii znajdę dewelopera taniej?",
        a: "WordPress dev w PL: 100-180 zł/h, łatwo znaleźć w każdym mieście. Next.js dev: 220-350 zł/h, mniej dostępnych ale rosnąca pula (Wrocław ma kilkadziesiąt seniorów Next.js z meetupów Wrocław.tech, ReactWro).",
      },
    ],
  },
  {
    slug: "migracja-wordpress-na-nextjs",
    title: "Migracja z WordPress na Next.js — przewodnik krok po kroku",
    excerpt:
      "Jak przejść z WP na Next.js bez tracenia rankingów SEO. Mapa URL-i, 301 redirects, schema, sitemap, content migration. Realistyczny timeline 4-8 tygodni.",
    date: "2026-02-25",
    readingMinutes: 11,
    tags: ["migracja", "WordPress", "Next.js"],
    keyword: "migracja WordPress Next.js",
    metaTitle: "Migracja WordPress → Next.js — przewodnik krok po kroku",
    metaDescription:
      "Jak migrować z WordPress na Next.js bez tracenia rankingów SEO: URL mapping, 301 redirects, content migration, deployment. Timeline 4-8 tygodni, koszty.",
    hero: { kind: "wordpress" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
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
    faq: [
      { q: "Ile trwa migracja WordPress na Next.js?", a: "Mała strona (do 50 podstron): 4-6 tygodni, koszt 18-30 tys. Średnia (200-500 podstron, blog): 6-10 tygodni, 30-60 tys. Duża (e-commerce WooCommerce): 10-16 tygodni, 60-120 tys." },
      { q: "Czy stracę pozycje SEO przy migracji?", a: "Nie, jeśli migracja zrobiona dobrze: URL-e zachowane 1:1 (lub 301 redirects), schema.org skopiowane, sitemap re-submit, Core Web Vitals zielony. Typowy spadek 1-2 tygodnie po deploy, potem powrót i wzrost." },
      { q: "Czy zostaję bez WordPressa po migracji?", a: "Zależy od strategii. Headless WP: backend WP zostaje (admin + DB), frontend Next.js. Full migracja: treści przeniesione do nowego CMS (Sanity), WP wyłączony. Headless prostszy, full migracja czystsza." },
      { q: "Co z formularzami i pluginami WordPress?", a: "Contact Form 7 → formularz Next.js + Resend/SendGrid SMTP. WooCommerce → migracja do Stripe/Przelewy24 albo zostawienie WP shop subdomain. WPML → next-intl albo Sanity i18n. Każdy plugin per case." },
      { q: "Kto zachowuje admin po migracji?", a: "Headless WP: admin WP nadal aktywny, klient edytuje jak zawsze. Full migracja: klient uczy się Sanity Studio (1-2 sesje), workflow podobny do WP Gutenberg ale szybszy. Decyzja zależy od complacency klienta z nowym narzędziem." },
    ],
  },
  {
    slug: "strona-firmowa-2026-jaka-technologia",
    title: "Strona firmowa 2026 — jaką technologię wybrać",
    excerpt:
      "5 ścieżek dla strony firmowej w 2026: WordPress, Next.js + Sanity, headless WP, Webflow, no-code. Kiedy która ma sens, konkretne ceny, decyzja per profil firmy.",
    date: "2026-02-18",
    readingMinutes: 10,
    tags: ["technologia", "strona firmowa", "decyzje"],
    keyword: "jaki stack na stronę firmową",
    metaTitle: "Jaki stack na stronę firmową 2026 — Next.js, WP, Webflow",
    metaDescription:
      "5 stacków porównanych: WordPress (5-12k), Next.js+Sanity (15-30k), headless WP (20-40k), Webflow (8-20k), no-code (3-10k). Decyzja per profil firmy.",
    hero: { kind: "wordpress" },
    relatedServices: ["nowoczesna-strona-firmowa-2026", "tworzenie-stron-www", "aplikacje-nextjs"],
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
    faq: [
      { q: "Jaką technologię wybrać dla małej firmy usługowej?", a: "WordPress + custom theme (5-12 tys. zł). Klient sam edytuje, performance OK po LiteSpeed cache, znana technologia. Dla kancelarii, salonu, restauracji, gabinetu lekarskiego." },
      { q: "Jaką technologię wybrać dla premium service?", a: "Next.js + Sanity (15-30 tys.). Performance i schema dla AI search wpływają na konwersje z Google Ads i organic. Dla kancelarii z dużym budżetem reklamy, B2B usług premium." },
      { q: "Czy warto przepłacać za Webflow?", a: "Webflow daje visual builder + CMS w jednym, klient sam edytuje drag-drop. Plus subskrypcja 200-400 zł/mc. Vendor lock-in (przeniesienie = przepisanie). Sensowne dla freelancerów i małych agencji bez tech zespołu." },
      { q: "Czy no-code (Framer, Carrd) to dobra opcja?", a: "Dla one-pagerów i landing pages pod kampanię (1-3 miesiące): tak. Dla pełnej strony firmowej: nie. Limitowane (każde 'special' wymaga workaroundów), nie skaluje się." },
      { q: "Czy mogę zacząć z prostą technologią i potem skalować?", a: "Tak. Często ścieżka: WordPress (start) → headless WordPress (po roku gdy ruch rośnie) → full Next.js + Sanity (po 2-3 latach gdy biznes rośnie). Każda migracja kosztuje 18-30 tys., ale daje uplift." },
    ],
  },
  {
    slug: "tailwind-css-co-to",
    title: "Tailwind CSS — co to jest i czemu zastępuje tradycyjne CSS",
    excerpt:
      "Tailwind CSS: utility-first CSS framework. Klasy zamiast komponentów. Czemu Tailwind 4 to nowy standard frontendu w 2026.",
    date: "2026-02-11",
    readingMinutes: 6,
    tags: ["Tailwind", "CSS"],
    keyword: "Tailwind CSS",
    metaTitle: "Tailwind CSS — co to, czemu zastępuje tradycyjne CSS",
    metaDescription:
      "Tailwind 4: utility-first framework. Klasy zamiast komponentów, mniejszy bundle, spójny design system. Stack 2026 dla 70% nowych projektów React/Next.js.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "aplikacje-react", "tworzenie-stron-www"],
    body: [
      "Tailwind CSS to utility-first CSS framework stworzony przez Adama Wathana (2017). Główna idea: zamiast pisać własne klasy CSS (`.button-primary { background: blue; padding: 12px; }`), używasz gotowych utility klas inline (`<button class='bg-blue-500 px-3 py-2'>`).",
      "Korzyści: szybszy dev (nie trzeba wymyślać nazw klas), mniejszy bundle CSS (purge unused classes), spójny design system (predefined spacing/colors/typography scale), łatwiejszy refactor (zmieniasz HTML, CSS sam się dostosuje).",
      "Krytyka: 'klasy w HTML brzydkie', 'ciężko czytać'. To rzeczywiście wymaga przyzwyczajenia, ale po 2 tygodniach pracy z Tailwindem nie chcesz wracać do tradycyjnego CSS.",
      "Tailwind 4 (2025) — najnowsza wersja: CSS-first config (`@theme` w globals.css zamiast tailwind.config.js), 5x szybszy build, native CSS variables, automatic content detection. Przeskoczył Bootstrap i CSS Modules pod względem popularności.",
      "Stack typowy 2026: Next.js + Tailwind 4 + shadcn/ui (komponenty zbudowane na Tailwind, kopiujesz do projektu zamiast importować). To stack którego używa 70%+ nowych projektów React/Next.js.",
      "Praktyczna rada: jeśli budujesz nowy projekt, zacznij z Tailwindem. Jeśli masz stary projekt z CSS Modules / styled-components, migracja na Tailwind nie jest priorytetem — to 'optymalizacja DX', nie funkcjonalność. Migruj jak będziesz przepisywać komponenty.",
    ],
    faq: [
      { q: "Czym Tailwind różni się od Bootstrap?", a: "Bootstrap daje gotowe komponenty (Button, Card, Modal). Tailwind daje narzędzia do budowania własnych komponentów (klasy utility). Bootstrap = same klasy CSS na produkcji. Tailwind = mniejszy bundle (purge unused), pełna kontrola nad designem." },
      { q: "Czy Tailwind nie psuje czytelności HTML?", a: "Wymaga przyzwyczajenia 1-2 tygodnie. Po tym okresie reading klasy szybciej niż jumping między HTML a CSS file. Dodatkowo Prettier plugin sortuje klasy automatycznie, IDE autocomplete pokazuje preview." },
      { q: "Co nowego w Tailwind 4?", a: "CSS-first config (@theme w globals.css zamiast tailwind.config.js), 5x szybszy build (Rust compiler), native CSS variables, automatic content detection. Premiera 2025, standard 2026." },
      { q: "Czy używać Tailwind z shadcn/ui?", a: "Tak, świetna kombinacja. shadcn/ui to komponenty zbudowane na Tailwind + Radix UI. Kopiujesz do projektu (zamiast importować z npm), pełna kontrola nad stylami. Stack: Next.js + Tailwind + shadcn/ui." },
      { q: "Jak migrować z CSS Modules na Tailwind?", a: "Stopniowo, komponent po komponencie. Nowe komponenty od razu Tailwind, stare przepisuj jak musisz coś zmienić w nich. Pełna migracja zwykle 2-4 miesiące dla średniego projektu (50+ komponentów)." },
    ],
  },
  {
    slug: "vercel-hosting-co-to",
    title: "Vercel — co to za hosting i czy warto",
    excerpt:
      "Vercel: hosting stworzony przez twórców Next.js. Edge functions, automatic SSL, preview deployments per PR. Free tier wystarczy 90% projektom.",
    date: "2026-02-04",
    readingMinutes: 7,
    tags: ["Vercel", "hosting"],
    keyword: "Vercel hosting",
    metaTitle: "Vercel hosting — co to, czy warto, vs Hostinger",
    metaDescription:
      "Vercel: hosting od twórców Next.js. Edge functions, automatic SSL, preview per PR, free tier 100 GB/mc. Vs polski hosting (Hostinger): kiedy warto.",
    hero: { kind: "performance" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
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
    faq: [
      { q: "Czy Vercel jest darmowy?", a: "Free tier: 100 GB bandwidth/mc, unlimited static requests, 100 GB-hours edge function execution. Wystarcza dla 90% małych i średnich stron firmowych." },
      { q: "Kiedy potrzebny Pro plan?", a: "Powyżej 50k wizyt/mc lub gdy chcesz: analytics built-in, password protection na preview URLs, większy compute, image optimization 5000/mc, support priority. Cena: 20$/mc (~80 zł)." },
      { q: "Vercel vs Hostinger — co wybrać?", a: "Vercel dla każdego projektu Next.js (natywna integracja, edge deployment globalny, git push = deploy). Hostinger dla WordPress, klientów wymagających cPanel/FTP, projektów PHP/Laravel." },
      { q: "Czy Vercel obsługuje email?", a: "Nie. Vercel hostuje tylko strony i funkcje. Maile firmowe (kontakt@domena.pl) trzeba postawić osobno: Google Workspace, Microsoft 365, cyber_folks lub inny dostawca SMTP." },
      { q: "Co z polskim data residency?", a: "Vercel ma data centers w EU (Frankfurt, Paryż, Dublin), ale firma US-based. Dla wymogów RODO/compliance OK, dla compliance wymagającego data w PL: Hostinger / OVH PL z self-hosted Next.js (przez Coolify lub PM2)." },
    ],
  },
  {
    slug: "sanity-cms-vs-strapi",
    title: "Sanity vs Strapi — który headless CMS wybrać",
    excerpt:
      "Sanity: SaaS, real-time, świetny dev experience, free do 100k requests. Strapi: open-source, self-hosted, pełna kontrola, darmo. Konkretne porównanie 2026.",
    date: "2026-01-28",
    readingMinutes: 8,
    tags: ["Sanity", "Strapi", "headless CMS", "porównanie"],
    keyword: "Sanity vs Strapi",
    metaTitle: "Sanity vs Strapi — który headless CMS wybrać 2026",
    metaDescription:
      "Sanity (SaaS, real-time, free 100k req) vs Strapi (open-source, self-hosted, pełna kontrola). Cena, DX, edycja UX, multilanguage, skalowalność. Decyzja per projekt.",
    hero: { kind: "nextjs" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
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
    faq: [
      { q: "Który headless CMS lepszy: Sanity czy Strapi?", a: "Sanity dla 80% projektów PL — lepsze DX, real-time editing, mniej maintenance. Strapi gdy compliance wymaga self-hosted lub klient ma dev team który ogarnie hosting." },
      { q: "Ile kosztuje Sanity?", a: "Free do 100k requests/mc + 3 użytkowników (wystarcza dla 80% średnich stron firmowych). Growth od 99$/mc. Enterprise custom pricing." },
      { q: "Ile kosztuje Strapi?", a: "Sam Strapi 0 zł (open-source). Hosting Node.js + Postgres: 15-50$/mc na Railway/Render. Plus setup deploymentu po stronie dewelopera (3-6 tys. zł jednorazowo)." },
      { q: "Czy Sanity ma multilanguage?", a: "Tak, świetne i18n built-in. Każde pole może być per locale, GROQ query bierze locale jako parametr. Strapi ma plugin (mniej dopracowane)." },
      { q: "Co z RODO i data residency?", a: "Sanity hostuje dane na ich infrastructure (US/EU). RODO compliant ale dane opuszczają PL. Strapi self-hosted: kontrola gdzie dane lądują (np. Hostinger PL)." },
    ],
  },
  {
    slug: "static-site-generation-co-to",
    title: "Static Site Generation (SSG) — co to i kiedy ma sens",
    excerpt:
      "SSG: HTML generowany przy build, deploy na CDN. Najszybsze strony jakie da się zrobić. Next.js, Astro, Hugo, Jekyll. Kiedy używać, kiedy ISR, kiedy SSR.",
    date: "2026-01-21",
    readingMinutes: 7,
    tags: ["SSG", "performance", "architektura"],
    keyword: "Static Site Generation",
    metaTitle: "Static Site Generation (SSG) — co to, kiedy używać",
    metaDescription:
      "SSG: HTML generowany przy build, serwowany z CDN. Najszybsze strony (sub-1s LCP). Next.js, Astro, Hugo. Kiedy używać, kiedy ISR/SSR. Stack 2026.",
    hero: { kind: "performance" },
    relatedServices: ["strony-jamstack", "aplikacje-nextjs", "tworzenie-stron-www"],
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
    faq: [
      { q: "Czym SSG różni się od SSR?", a: "SSG renderuje HTML raz przy build, deploy na CDN, każdy user dostaje ten sam plik. SSR renderuje per request na serwerze, każdy user może dostać inny content. SSG szybsze i tańsze, SSR daje dynamic content." },
      { q: "Czy SSG nadaje się do e-commerce?", a: "Tak dla katalogu produktów (statyczne strony per produkt, regenerated z ISR przy update ceny). Koszyk i checkout client-side / SSR (per-user). Hybrid podejście jest standardem." },
      { q: "Jak długo trwa build SSG dla 1000 stron?", a: "Next.js ~2-5 minut, Astro ~1-3 min, Hugo ~10-30 sekund. Dla 10k+ stron Hugo wygrywa (Go-based, najszybszy). Dla average projektów (do 500 podstron) wszystkie OK." },
      { q: "Czy mogę używać SSG z bazą danych?", a: "Tak. Build script fetchuje dane z DB/CMS przy `next build`, generuje statyczne HTML. ISR pozwala regenerować pojedyncze strony bez full rebuild (po update content via webhook)." },
      { q: "Jaki framework SSG wybrać 2026?", a: "Next.js dla 80% projektów (universal, najpopularniejszy, ekosystem). Astro dla content-heavy bez aplikacyjnej dynamiki. Hugo dla bardzo dużych stron (10k+ podstron). Jekyll deprecated." },
    ],
  }
);

/* === Pierwsza partia: cornerstone WordPress + Next.js (2026-05) === */

posts.push({
  slug: "wordpress-co-to-jest",
  title: "WordPress — co to jest i jak działa w 2026",
  excerpt:
    "WordPress to najpopularniejszy CMS na świecie (60% rynku stron www). Co to jest, jak działa, dla kogo ma sens, ile kosztuje uruchomienie. Praktyczny przewodnik 2026.",
  date: "2026-05-09",
  readingMinutes: 12,
  tags: ["WordPress", "podstawy", "CMS"],
  keyword: "WordPress co to jest",
  metaTitle: "WordPress — co to jest i jak działa w 2026 (pełny przewodnik)",
  metaDescription:
    "WordPress: 60% rynku stron www. Co to jest, jak działa, ile kosztuje, dla kogo ma sens. Block Editor, FSE, motywy, pluginy, hosting. Praktyczny przewodnik 2026.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "headless-wordpress", "sklepy-internetowe-woocommerce"],
  body: [],
  lead:
    "WordPress to system zarządzania treścią (CMS) napisany w PHP, na którym działa około 60% wszystkich stron www na świecie. Jest darmowy, open-source, można go zainstalować na własnym hostingu w 5 minut. Edytujesz treści w przeglądarce bez znajomości kodu, rozszerzasz funkcjonalność przez 60+ tysięcy wtyczek. W 2026 wciąż najczęściej wybierany dla małej i średniej firmy, blogów, sklepów online (przez WooCommerce). Niżej: jak działa technicznie, kiedy ma sens, kiedy NIE.",
  sections: [
    {
      heading: "Czym technicznie jest WordPress",
      body: [
        "WordPress to aplikacja PHP + baza danych MySQL (lub MariaDB). Po instalacji na hostingu masz dwie warstwy: **frontend** (publiczna strona którą widzą użytkownicy) i **backend / panel admin** (interfejs do zarządzania treścią pod adresem `/wp-admin/`).",
        "Każde wejście na stronę uruchamia PHP, który łączy się z bazą danych, pobiera treść (posty, strony, ustawienia, użytkowników), renderuje HTML i wysyła do przeglądarki. Wszystko dynamicznie, per request. Stąd waga cache (LiteSpeed, WP Rocket) — dobrze skonfigurowany cache zamienia dynamiczne PHP na statyczny HTML serwowany w milisekundach.",
        "Architektura ma trzy warstwy customizacji:",
        "**Motyw (theme)** decyduje o wyglądzie strony. Może być gotowy (z marketplace jak ThemeForest, AwesomeMotive) albo custom (zbudowany od zera pod konkretny projekt).",
        "**Wtyczki (plugins)** dodają funkcjonalności: SEO (Yoast, Rank Math), bezpieczeństwo (Wordfence), formularze (WPForms), e-commerce (WooCommerce), cache (LiteSpeed, WP Rocket).",
        "**Treść** żyje w bazie danych: posty (`wp_posts`), użytkownicy (`wp_users`), opcje (`wp_options`), meta (`wp_postmeta`). Edytowane przez Block Editor (Gutenberg, od 2018) lub Full Site Editing (FSE, od 2022 — pełna edycja motywu w przeglądarce).",
      ],
    },
    {
      heading: "Krótka historia: skąd taka popularność",
      body: [
        "WordPress powstał w 2003 roku jako fork narzędzia do blogowania b2/cafelog. Stworzyli go Matt Mullenweg (dziś CEO Automattic, firmy stojącej za WordPress.com) i Mike Little. Pierwsza wersja miała kilkadziesiąt linii kodu PHP i była dla geeków blogerów.",
        "Przełom w 2010-2013: WordPress przestał być narzędziem do bloga, stał się pełnym CMS. Pojawiły się custom post types, taxonomies, REST API, ACF (Advanced Custom Fields), wzrost rynku motywów premium (ThemeForest osiąga miliony sprzedanych themów).",
        "Drugi przełom 2018: Gutenberg / Block Editor. Edycja treści w blokach, nie w klasycznym TinyMCE. Krytykowane na start, dziś standard. W 2022 dochodzi Full Site Editing — możesz edytować nagłówek, stopkę, każdą część motywu klikając w przeglądarce.",
        "W 2026 WordPress to dojrzały produkt. 43% wszystkich stron internetowych na świecie (W3Techs), 60% spośród tych z CMS-em (czyli wykluczając stricte custom kod). Konkurencja (Webflow, Wix, Squarespace, Shopify) urywa kawałki rynku, ale WordPress wciąż dominuje przez ekosystem (motywy, pluginy, dewelopery, agencje).",
      ],
    },
    {
      heading: "Co dostajesz w darmowym WordPress (i co kosztuje)",
      body: [
        "**Sam WordPress jest darmowy**. Pobierasz z [wordpress.org](https://wordpress.org), instalujesz na hostingu, używasz. Brak licencji, brak ograniczeń komercyjnych. Open-source na licencji GPL.",
        "**Co musisz kupić** — hosting (30-100 zł/mc dla małej strony — Cyber_folks, Hostinger, LH.pl, dhosting), domena (~50 zł/rok dla .pl), SSL (zwykle gratis przez Let's Encrypt na hostingu).",
        "**Wtyczki i motywy free vs premium** — większość kluczowych funkcjonalności masz za darmo: Yoast SEO, Wordfence, WPForms, WooCommerce, LiteSpeed Cache. Ale często warto dopłacić za wersje pro: Yoast Pro (~95$/rok), ACF Pro (~50$/rok), WP Rocket (~60$/rok), WooCommerce extensions (różne, 30-300$/rok).",
        "**Custom theme** — jeśli nie chcesz gotowca, zatrudniasz agencję / freelancera. Cena 4-15 tys. zł za małą-średnią stronę firmową we Wrocławiu (więcej w [ile kosztuje strona www 2026](/blog/ile-kosztuje-strona-www-2026)).",
        "**Realny roczny koszt operacyjny** dla małej strony firmowej: 360 zł hosting + 50 zł domena + 0-300 zł wtyczki premium = **400-700 zł/rok**. Dla średniej strony z e-commerce: 1500-3000 zł/rok.",
      ],
    },
    {
      heading: "Kiedy WordPress jest dobrym wyborem",
      body: [
        "**Strona firmowa do prezentacji oferty** (kancelaria, salon, restauracja, gabinet) — WordPress to standard. [Tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress) z custom themem + Bricks Builder lub ACF = pełna kontrola designu, klient sam edytuje teksty, performance OK po LiteSpeed.",
        "**Blog firmowy lub osobisty** — z czego WordPress wziął początek, do dziś najlepszy do bloga. Block Editor, taxonomies, RSS, integracja z social, SEO out of the box po Yoast / Rank Math.",
        "**Sklep internetowy małej-średniej skali** (do ~5000 produktów) — WooCommerce na WordPress. [Sklepy internetowe WooCommerce](/uslugi/sklepy-internetowe-woocommerce) we Wrocławiu integrowane z płatnościami PL (Przelewy24, Autopay, Tpay), fakturami (Subiekt GT, iFirma), feedami Google Shopping i Allegro.",
        "**Magazyn / portal contentowy** — duże publikacje (ekonomia, sport, lifestyle) działają na WordPress (Newsweek, TIME, Variety). Skalowalny, dobrze indeksowany, integruje się z systemami redakcyjnymi.",
        "**Strona instytucji publicznej** (urząd, szkoła) — zgodność z WCAG 2.2 AA i BIP osiągalna w WordPress, sporo gotowych theme dedykowanych pod instytucje publiczne.",
      ],
    },
    {
      heading: "Kiedy NIE WordPress (alternatywy)",
      body: [
        "**Aplikacja webowa z customową logiką** (konfigurator, panel klienta, system rezerwacji z complex flow) — [tworzenie stron Next.js](/uslugi/aplikacje-nextjs) + dedykowane backend lepsze. WordPress da się rozszerzyć ale szybko stajesz w pułapce 'PHP plugin którego nikt już nie utrzyma'.",
        "**Strona z wymogiem performance Lighthouse 95+ z budżetu reklamowego** (Google Ads Quality Score) — [Next.js z SSG](/uslugi/next-js-software-house) dostarcza out of the box co WordPress osiąga tylko po starannej optymalizacji. Pełne porównanie: [WordPress vs Next.js — koszty wdrożenia](/blog/wordpress-vs-next-js-koszt).",
        "**Aplikacja SaaS multi-tenant** — WordPress nie jest do tego zaprojektowany. Multisite działa dla blog network, nie dla prawdziwego SaaS z user dashboards. Lepszy wybór: [aplikacje React](/uslugi/aplikacje-react) z dedykowanym backend.",
        "**Bardzo proste landing page jednodniowe** — Framer, Carrd, lub czysty HTML+CSS będą tańsze i szybsze niż konfiguracja WP.",
        "**Real-time aplikacja** (chat, social feed, live data) — WebSocket / SSE w WordPress to walka. Lepiej Next.js + dedykowane usługi.",
      ],
    },
    {
      heading: "Block Editor vs Full Site Editing — co używać w 2026",
      body: [
        "**Block Editor (Gutenberg, od 2018)** — edycja TREŚCI postów i stron w blokach. Nagłówki, paragrafy, obrazki, kolumny, listy, embed (YouTube, Twitter), reusable blocks. Standard do edycji treści.",
        "**Full Site Editing (FSE, od 2022)** — edycja CAŁEGO motywu w przeglądarce. Header, footer, sidebar, single post template, archive template — wszystko klikalne, bez kodu. Wymaga 'block theme' (Twenty Twenty-Three+, Blockbase, Kadence, Astra). Stary 'classic theme' nie wspiera FSE.",
        "**Wybór 2026**: dla nowej strony — block theme + FSE. Dla istniejącej na classic theme — Block Editor do treści, custom code do designu (lub migracja na block theme to projekt 4-8 tygodni).",
        "**Page builders alternatywne** (Elementor, Bricks, Oxygen) — działają niezależnie od FSE, mają własne edytory wizualne. Bardziej intuicyjne dla nie-techników, ale zwykle dodają więcej JS do strony (Elementor 200-400 KB JS na każdej podstronie). Pełna analiza dlaczego: [Elementor — dlaczego NIE warto w 2026](/blog/elementor-dlaczego-nie-warto). Najlepsza alternatywa dla wymagających performance: [headless WordPress + Next.js](/uslugi/headless-wordpress).",
      ],
    },
  ],
  faq: [
    {
      q: "Ile kosztuje uruchomienie strony na WordPressie?",
      a: "Najtaniej: 60-200 zł rocznie (hosting + domena, sam stawiasz na gotowym themie free). Realnie dla firmy: 4-12 tys. zł za wdrożenie z custom themem + 400-700 zł/rok operacyjnie. Pełne widełki: [ile kosztuje strona www 2026](/blog/ile-kosztuje-strona-www-2026).",
    },
    {
      q: "Czy WordPress nadaje się do dużych firm?",
      a: "Tak — TIME, Newsweek, Sony Music, Reuters Blogs, Microsoft News. Skaluje się do milionów wizyt miesięcznie z dobrym hostingiem (WP Engine, Pantheon) i optymalizacją. Dla mid-sized firm w PL Cyber_folks Premium / Hostinger Business obsługuje 50-100k wizyt/mc bez problemu.",
    },
    {
      q: "Czy mogę edytować WordPress bez znajomości kodu?",
      a: "Tak, w 90% przypadków. Block Editor / FSE pozwala edytować treści, dodawać sekcje, obrazki, formularze drag-and-drop. Programista potrzebny dla custom funkcji (integracje API, niestandardowe pola, performance optymalizacje).",
    },
    {
      q: "WordPress vs Wix / Squarespace — co lepsze?",
      a: "WordPress: pełna kontrola, wszystko Twoje, no vendor lock-in, taniej długoterminowo. Wix/Squarespace: prostsze na start, drogo długoterminowo, ograniczenia (przeniesienie = przepisanie od zera). Dla biznesu poważnego — WordPress.",
    },
    {
      q: "Czy WordPress jest bezpieczny?",
      a: "Sam WordPress jest bezpieczny — Automattic regularnie wydaje security patches. Problem: stare pluginy / motywy z lukami. Reguła: aktualizuj wszystko, używaj Wordfence lub Solid Security, włącz 2FA, regularnie backup (UpdraftPlus, Migrate Guru).",
    },
    {
      q: "Czy WordPress ma sens w 2026 czy lepiej Next.js?",
      a: "Zależy od projektu. Strona firmowa do prezentacji + blog + WooCommerce dla małej-średniej firmy = WordPress (taniej, klient sam edytuje). Aplikacja webowa z customową logiką, performance-critical site z Google Ads = Next.js. Pełne porównanie kosztów: [WordPress vs Next.js](/blog/wordpress-vs-next-js-koszt).",
    },
    {
      q: "Czy WordPress.com to to samo co WordPress.org?",
      a: "NIE. WordPress.org — pobierasz oprogramowanie za darmo, instalujesz na własnym hostingu (rekomendowane). WordPress.com — usługa hostowana przez Automattic (firma za WP), darmowa z reklamami lub płatna 4-45$/mc. Mniejsza kontrola.",
    },
  ],
});

posts.push({
  slug: "co-zrobic-po-instalacji-wordpressa",
  title: "Co zrobić po instalacji WordPressa — checklist 15 czynności",
  excerpt:
    "Świeżo zainstalowany WordPress wymaga 15 kroków konfiguracji zanim zaczniesz publikować. Permalinks, security, cache, SEO, backup, RODO. Pełna checklist 2026.",
  date: "2026-05-09",
  readingMinutes: 11,
  tags: ["WordPress", "instalacja", "konfiguracja"],
  keyword: "po instalacji WordPress",
  metaTitle: "Co zrobić po instalacji WordPressa — checklist 15 czynności",
  metaDescription:
    "Checklist 15 kroków po instalacji WordPressa: permalinks, security headers, Wordfence, cache, Yoast, backup, RODO, 2FA. Pełna konfiguracja w 60 minut.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "sklepy-internetowe-woocommerce", "headless-wordpress"],
  body: [],
  lead:
    "Świeży WordPress po instalacji ma 15-20% tego co potrzeba do produkcji. Default settings są bezpieczne dla WordPress.com, ale dla self-hosted to mało. Niżej checklist 15 czynności które robię po każdej instalacji — od permalinks (krytyczne dla SEO), przez security headers i 2FA, po cache i backup. Cała konfiguracja w 60-90 minut, raz na zawsze.",
  sections: [
    {
      heading: "Bezpieczeństwo i admin (5 czynności)",
      body: [
        "**1. Zmień login admin z 'admin' na coś unikalnego.** WordPress 5.0+ wymaga to przy instalacji, ale stare instalacje często mają 'admin'. Botnety próbują brute force na tym loginie. Stwórz nowego admina z nietypowym username, usuń starego. Dla profesjonalnego setup [tworzenia stron WordPress](/uslugi/tworzenie-stron-wordpress) ten krok robię razem z innymi security hardening w pierwszym tygodniu wdrożenia.",
        "**2. Włącz 2FA dla wszystkich kont admin/editor.** Wordfence Login Security (free) lub WP 2FA. Wymóg w 2026, brak 2FA = spora luka security.",
        "**3. Zainstaluj Wordfence (lub Solid Security, MalCare).** Free tier wystarcza dla małej-średniej strony. Włącz: firewall, brute force protection, login lockdown po 5 nieudanych próbach, 2FA, malware scanner.",
        "**4. Hardening wp-config.php** — dodaj `define('DISALLOW_FILE_EDIT', true);` (blokuje edytor pluginów/motywów z poziomu admin), `define('FORCE_SSL_ADMIN', true);`, klucze i salty z [api.wordpress.org/secret-key](https://api.wordpress.org/secret-key/1.1/salt/).",
        "**5. Ustaw security headers w .htaccess** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security. Sprawdź wynik na [securityheaders.com](https://securityheaders.com).",
      ],
    },
    {
      heading: "SEO podstawy (4 czynności)",
      body: [
        "**6. Permalinks — KRYTYCZNE.** Settings → Permalinks → wybierz 'Post name' (`/sample-post/`). Default to `?p=123` co jest SEO-killer. Zrób to PRZED publikacją pierwszego posta — zmiana później generuje 404 jeśli URL-e już zindeksowane.",
        "**7. Zainstaluj Yoast SEO lub Rank Math** (oba free w wersji podstawowej). Yoast bardziej popularny w PL, Rank Math więcej funkcji w free. Skonfiguruj: title separator, default meta, sitemap, schema.org Organization/Person, integracja z Google Search Console.",
        "**8. Wygeneruj i wyślij sitemap.xml** — w Yoast: SEO → General → Features → XML sitemaps ON. URL: `twojadomena.pl/sitemap_index.xml`. Wyślij do Search Console (`https://search.google.com/search-console`). Dla pełnej strategii SEO strony usługowej zobacz [pozycjonowanie strony usługowej — 7 kroków](/blog/pozycjonowanie-strony-uslugowej).",
        "**9. Robots.txt — sprawdź lub dodaj.** WordPress generuje virtual robots.txt. Sprawdź `twojadomena.pl/robots.txt`. Powinien zawierać `Sitemap: https://twojadomena.pl/sitemap_index.xml`. Dodaj jeśli brak — przez plugin SEO lub ręcznie.",
      ],
    },
    {
      heading: "Performance i cache (3 czynności)",
      body: [
        "**10. Zainstaluj cache plugin.** Jeśli hosting ma LiteSpeed (Cyber_folks, dhosting, niektóre Hostinger) — LiteSpeed Cache (free, najlepszy z LiteSpeed serverem). Inaczej WP Rocket (60$/rok, najlepszy ogólnie) lub WP Optimize (free). Pełna lista must-have wtyczek: [25 must-have wtyczek WordPress 2026](/blog/must-have-wtyczki-wordpress-2026).",
        "**11. Optymalizacja obrazków.** Smush (free, do 2 MB obrazek), ShortPixel (płatne ale lepsze, 30$ za 10k obrazków), Imagify. Konwersja JPG/PNG → WebP, lossless lossy compression, lazy loading.",
        "**12. CDN setup** — Cloudflare (free tier wystarcza dla małej strony) lub BunnyCDN ($1/mc minimum). Skraca TTFB dla użytkowników z dalej, dodatkowy security layer.",
      ],
    },
    {
      heading: "Backup i compliance (3 czynności)",
      body: [
        "**13. Backup automatyczny.** UpdraftPlus (free, codzienny backup do Google Drive / Dropbox / S3), Duplicator, Migrate Guru. Minimum: codzienny backup całej strony (database + uploads), retention 30 dni, test restore raz na kwartał.",
        "**14. Cookie consent (RODO).** Cookiebot (płatny, automatic scanning), Klaro (free, open-source), Real Cookie Banner (najpopularniejszy w PL, free podstawowy). Bez tego ryzyko kary do 3% obrotu rocznego.",
        "**15. Polityka prywatności + regulamin.** Settings → Privacy → wygeneruj template Privacy Policy, dostosuj do RODO. Dla [sklepu internetowego WooCommerce](/uslugi/sklepy-internetowe-woocommerce) — regulamin sklepu zgodny z UoPK (Ustawa o Prawach Konsumenta). Generator: prywatnosc24.pl, gotowe.pl.",
      ],
    },
    {
      heading: "Bonus: czego NIE robić",
      body: [
        "**Nie instaluj 30 pluginów na start.** Każdy plugin to potencjalna luka security i ciężar dla performance. Reguła: minimum potrzebne, dodawaj tylko gdy realnie potrzeba.",
        "**Nie używaj Hello Dolly i innych default pluginów-zabawek.** Usuń od razu Akismet (jeśli nie używasz Jetpack), Hello Dolly, Twenty Twenty-One/Two/Three motywy które nie używasz.",
        "**Nie zostawiaj wp-admin.php pod default URL** dla projektów wymagających podwyższonego security. Wordfence pozwala zmienić URL admina (np. `/sekretne-wejscie/`).",
        "**Nie używaj 'admin' jako username, '12345' jako hasła, 'admin@admin.com' jako email.** To podstawa którą botnety atakują pierwsze.",
        "**Nie aktualizuj pluginów / motywów / WP core 'kiedyś'.** Włącz auto-update dla minor releases, manual review dla major. Czek WP-Admin → Updates raz w tygodniu.",
      ],
    },
  ],
  faq: [
    {
      q: "Ile czasu zajmuje pełna konfiguracja WordPressa po instalacji?",
      a: "60-90 minut dla doświadczonego dewelopera. Dla początkującego: 3-5 godzin (czas na research każdego pluginu, decyzje, błędy). Pojedyncze rzeczy można rozłożyć w czasie, ale permalinks i security MUSZĄ być pierwsze.",
    },
    {
      q: "Czy muszę kupować pluginy premium na start?",
      a: "Nie. Free tier większości kluczowych pluginów (Wordfence, Yoast, UpdraftPlus, LiteSpeed Cache, Smush) wystarcza dla małej-średniej strony. Premium dopiero gdy realnie potrzebujesz (np. ShortPixel dla 10k+ obrazków, Yoast Pro dla redirect manager).",
    },
    {
      q: "Co jest najważniejsze gdyby mam tylko 30 minut?",
      a: "Top 5: 1) permalinks na 'Post name', 2) Wordfence + 2FA, 3) Yoast SEO podstawowa konfiguracja + Search Console, 4) cache plugin, 5) UpdraftPlus codzienny backup do chmury.",
    },
    {
      q: "Czy mogę pominąć cookie consent jeśli nie używam analytics?",
      a: "Jeśli używasz JAKICHKOLWIEK third-party scripts (Google Fonts, YouTube embed, Twitter embed, Facebook Pixel) — nie. Praktycznie każda strona wymaga cookie consent w 2026.",
    },
    {
      q: "Jak często aktualizować plugin / motyw / WP?",
      a: "Auto-update dla minor releases (security patches). Major releases — manual review w środowisku staging, deploy w 1-2 tygodnie. Codziennie czek WP-Admin → Updates dla aktualnych projektów (1-2 minuty pracy).",
    },
    {
      q: "Czy WordPress wymaga PHP 8.x?",
      a: "WordPress 6.5+ rekomenduje PHP 8.1+. Działa na 7.4 ale wolniejszy o 30-50%. Sprawdź wersję PHP na hostingu (Cyber_folks pozwala wybrać per domena), zaktualizuj jeśli stary.",
    },
  ],
});

posts.push({
  slug: "elementor-dlaczego-nie-warto",
  title: "Elementor — dlaczego NIE warto w 2026 (opinia praktyka)",
  excerpt:
    "Elementor to najpopularniejszy WordPress page builder. Po 30+ wdrożeniach mówię: dla większości projektów to zła decyzja w 2026. Dlaczego, co zamiast.",
  date: "2026-05-09",
  readingMinutes: 10,
  tags: ["WordPress", "Elementor", "page builder", "opinia"],
  keyword: "Elementor dlaczego nie",
  metaTitle: "Elementor — dlaczego NIE warto w 2026 (opinia praktyka)",
  metaDescription:
    "Elementor: najpopularniejszy WP page builder, ale dla większości projektów zła decyzja w 2026. Performance, lock-in, koszty, alternatywy (Bricks, FSE, custom).",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "headless-wordpress", "nowoczesne-strony-internetowe"],
  body: [],
  lead:
    "Elementor jest najpopularniejszym page builderem dla WordPress (~5 mln aktywnych instalacji). Po 30+ wdrożeniach klientów (część przejętych ze starych Elementor sites) moja opinia jako [Marcin Siwonia — freelancer Next.js i WordPress z Wrocławia](/) jest jednoznaczna: dla większości projektów w 2026 to zła decyzja. Performance, vendor lock-in, koszty długoterminowe nie zwracają początkowej oszczędności. Niżej dlaczego konkretnie i co zamiast.",
  sections: [
    {
      heading: "Dlaczego Elementor jest tak popularny (uczciwy obraz)",
      body: [
        "Drag-and-drop interface który ROZUMIE klient bez znajomości kodu. Dosłownie chwytasz, przeciągasz, widzisz efekt. Krzywa uczenia 1-2 godziny.",
        "Ogromny ekosystem dodatków (Essential Addons, Crocoblock JetEngine, ElementsKit). Dla każdej nietypowej funkcji jest gotowy widget.",
        "Tysiące gotowych template'ów (free + Elementor Pro). Możesz mieć stronę za 1 dzień jeśli akceptujesz design szablonowy.",
        "Społeczność — fora, Facebook groups, YouTube tutoriale w każdym języku. Łatwo znaleźć pomoc dla problemu.",
        "Cena — free tier wystarcza dla prostych stron. Pro 59$/rok dla 1 strony, 99$ dla 3, 199$ dla 25, 399$ unlimited.",
      ],
    },
    {
      heading: "Dlaczego NIE — performance",
      body: [
        "Elementor dodaje **200-400 KB JavaScript do każdej podstrony** (jQuery, Swiper, Waypoints, Elementor frontend, FontAwesome icons, własne plugin frontends). To jest baseline, niezależnie od tego ile widgetów używasz.",
        "Z każdym dodatkiem (Essential Addons, Crocoblock) bundle rośnie. Realny case z mojej praktyki [tworzenia stron WordPress we Wrocławiu](/uslugi/tworzenie-stron-wordpress): strona klienta na Elementor + Essential Addons + Crocoblock miała **1.2 MB JS na stronie głównej**. Lighthouse Performance: 23 (na 100). LCP 6.4s. INP 480ms.",
        "Migracja tej strony na custom theme (Bricks Builder + ACF Pro) — bundle JS spadł do 80 KB, Lighthouse 96, LCP 1.1s, INP 90ms. Te same funkcje, dziesiąta część ciężaru.",
        "Google używa Core Web Vitals jako sygnału rankingowego od 2021. Słabe CWV = niższe pozycje na konkurencyjnych frazach. Elementor strony są strukturalnie w gorszej pozycji od kompetentnie zbudowanych alternatyw.",
        "Pełne dane o Core Web Vitals i jak je naprawić: [Core Web Vitals 2026](/blog/core-web-vitals-2026).",
      ],
    },
    {
      heading: "Dlaczego NIE — vendor lock-in",
      body: [
        "Każdy widget Elementor zapisuje konfigurację w `wp_postmeta` jako shortcode-like JSON. Treść strony nie jest standardowym HTML — jest serializowanym Elementor metadata.",
        "Konsekwencja: jeśli zdezaktywujesz Elementor, **strona przestaje renderować się normalnie**. Zostają shortcode'y w treści, surowy tekst bez formatowania, brak layoutu.",
        "Migracja Elementor → Block Editor wymaga manual rewrite każdej podstrony. Dla 30 podstron = 30-60 godzin pracy. Dla 100+ podstron = projekt 4-8 tygodni.",
        "Migracja Elementor → custom theme = praktycznie redesign od zera. Treści można wyciągnąć przez WP REST API, layouty trzeba przepisać.",
        "Im dłużej używasz Elementor, tym droższy odejście. Klasyczny vendor lock-in.",
      ],
    },
    {
      heading: "Dlaczego NIE — TCO długoterminowy",
      body: [
        "**Elementor Pro 59$/rok** za pojedynczą stronę. **Essential Addons Pro 49$/rok**. **Crocoblock JetEngine 130$/rok**. **WP Rocket 60$/rok** żeby ratować performance. Suma: ~300$/rok = 1200 zł/rok dla jednej strony.",
        "**Hosting silniejszy** — Elementor wymaga większego compute. Cyber_folks Premium zamiast Basic (75 zł vs 25 zł/mc = 600 zł/rok więcej). Hostinger Business zamiast Single (40 zł vs 15 zł/mc = 300 zł/rok więcej).",
        "**Maintenance droższy** — co kwartał aktualizacje Elementor Pro + addons + WP core. Często zmiany breaking (Elementor 3.x → 3.x+1 zmieniało API), naprawa zajmuje 2-5 godzin developera.",
        "**Migracja gdy klient odejdzie z Elementor** — 5-15 tys. zł dla średniej strony. To koszt który ostatecznie ktoś poniesie (klient lub dev).",
        "**Realny TCO 3 lata strony Elementor**: licencje 3.6 tys. zł + hosting premium 1.8-2.4 tys. zł + maintenance 6-12 tys. zł + opcjonalna migracja na końcu 5-15 tys. zł = **17-33 tys. zł**.",
      ],
    },
    {
      heading: "Co zamiast — alternatywy 2026",
      body: [
        "**Bricks Builder** ($249 lifetime jednorazowo) — modern page builder, Lighthouse 95+ out of the box, jQuery-free, native flexbox/grid. Dla freelancera/agencji najlepsza zamiana. To stack którego używam w większości [stron WordPress we Wrocławiu](/uslugi/tworzenie-stron-wordpress).",
        "**Block Editor + custom theme + ACF Pro** ($249/rok) — Gutenberg blocks dla treści, custom blocks dla powtarzalnych sekcji, ACF dla pól dynamicznych. Najczystszy WordPress, najlepsze performance.",
        "**Full Site Editing (FSE) + block theme** (free) — Twenty Twenty-Six lub Blockbase / Kadence. Edycja wszystkiego w przeglądarce, zero pluginów, modern stack. Krzywa uczenia 4-8 godzin.",
        "**[Headless WordPress + Next.js](/uslugi/headless-wordpress)** (15-30 tys. wdrożenie) — backend WP zostaje, frontend Next.js. Najlepsze performance + SEO + DX. Dla projektów które rosną. Pełen przewodnik: [migracja WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
        "**Webflow** (płatne 200-400 zł/mc) — visual builder no-code/low-code. Świetny ale vendor lock-in większy niż Elementor (cała strona na Webflow infrastructure, nie WordPress).",
      ],
    },
    {
      heading: "Kiedy Elementor MIMO WSZYSTKO ma sens",
      body: [
        "Klient KONIECZNIE chce sam edytować layout (nie tylko treść) i nie ma budżetu na migrację co 2 lata. Wtedy Elementor + akceptacja TCO.",
        "Strona jednorazowa pod konkretną kampanię (3-6 miesięcy lifecycle). Wtedy szybkość uruchomienia ważniejsza od długoterminowych kosztów.",
        "Klient już ma zespół wewnętrzny przeszkolony z Elementor. Migracja na inny stack = retraining = większy koszt ludzki niż wybór technologii.",
        "Bardzo prosta strona (5-10 podstron, brak custom funkcji, brak ambicji performance). Dla freelancera startującego z 1000 zł budżetu klienta.",
        "Realnie: **dla 70% projektów wybór Elementor w 2026 to dług techniczny zaciągnięty przeciwko klientowi.** Wybór dewelopera nie klienta — łatwiej, szybciej, ale długoterminowo droższe i gorsze.",
      ],
    },
  ],
  faq: [
    {
      q: "Czy Elementor jest darmowy?",
      a: "Wersja podstawowa tak. Elementor Pro 59$/rok dla 1 strony (250 zł), 99$ dla 3 (400 zł), 199$ dla 25 (800 zł), 399$ unlimited (1600 zł). Plus addons (Essential Addons, Crocoblock) — kolejne 200-500 zł/rok per strona.",
    },
    {
      q: "Czy mogę zmigrować z Elementor na coś innego?",
      a: "Tak, ale to praca. Elementor → Block Editor: manual rewrite każdej podstrony, 30-60h dla 30 podstron. Elementor → custom theme / Bricks: praktycznie redesign od zera, koszt 8-25 tys. zł dla średniej strony.",
    },
    {
      q: "Czy Bricks Builder jest dużo lepszy?",
      a: "Tak — modern stack, Lighthouse 95+ out of the box, jQuery-free, lifetime $249 jednorazowo (vs Elementor recurring). Mniej szablonów ale rosnący ekosystem. Krzywa uczenia podobna do Elementor.",
    },
    {
      q: "A co z Divi, Avada, WPBakery?",
      a: "Te same problemy co Elementor + większe (Divi i Avada to monster themes z 200-400 KB JS bazowo). W 2026 NIE polecam żadnego z nich dla nowych projektów.",
    },
    {
      q: "Czy Full Site Editing to alternatywa dla Elementor?",
      a: "Tak, jeśli akceptujesz krzywą uczenia 4-8 godzin. FSE jest darmowy, nie ma vendor lock-in (wszystko w standardowym WP), modern performance. Słabszy ekosystem template'ów niż Elementor — większy nacisk na własny design.",
    },
    {
      q: "Co jeśli mam Elementor i działa OK?",
      a: "Jeśli Lighthouse Performance 80+, Core Web Vitals zielony, klient zadowolony, brak planów rozwoju — zostaw. Migracja kosztuje. Migruj gdy: planowy redesign, dodajesz e-commerce z performance wymogami, performance spadł poniżej 70.",
    },
  ],
});

posts.push({
  slug: "must-have-wtyczki-wordpress-2026",
  title: "25 must-have wtyczek WordPress 2026 — kompletna lista",
  excerpt:
    "25 wtyczek WordPress które instaluję w każdym projekcie 2026. SEO, security, cache, formularze, backup, analytics, RODO. Free vs Pro, alternatywy.",
  date: "2026-05-09",
  readingMinutes: 13,
  tags: ["WordPress", "wtyczki", "pluginy"],
  keyword: "wtyczki WordPress",
  metaTitle: "25 must-have wtyczek WordPress 2026 — kompletna lista",
  metaDescription:
    "25 must-have wtyczek WordPress 2026: SEO (Yoast/Rank Math), security (Wordfence), cache (LiteSpeed/WP Rocket), formularze (WPForms), backup, RODO. Free i Pro.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "sklepy-internetowe-woocommerce", "headless-wordpress"],
  body: [],
  lead:
    "Po 30+ wdrożeniach jako [freelancer Next.js i WordPress z Wrocławia](/) mam stałą listę 25 pluginów które instaluję praktycznie zawsze. Niżej cała lista podzielona na 8 kategorii (SEO, security, cache, performance, formularze, backup, analytics, RODO), z konkretnymi rekomendacjami free vs pro i alternatywami. Twoja final lista będzie subset 15-20 z tych 25, w zależności od projektu.",
  sections: [
    {
      heading: "SEO (3 wtyczki)",
      body: [
        "**1. Yoast SEO** (free, Premium 99$/rok) — najpopularniejszy w PL, dobry default. Schema.org Person/Organization, sitemap, Open Graph, breadcrumbs. Premium: redirect manager, multiple keywords, internal linking suggestions.",
        "**2. Rank Math** (free, PRO 59$/rok) — alternatywa dla Yoast, więcej funkcji w free (schema, redirect manager, 404 monitor, Google Search Console integracja). Coraz popularniejsze, lekko zyskuje przewagę nad Yoast w 2026.",
        "**3. Schema & Structured Data for WP & AMP** (free) — dla projektów wymagających schema.org bardziej granularnie niż Yoast. Service, Product, Recipe, Event, FAQPage, HowTo. Często dorzucam do Yoast/Rank Math gdy potrzebuję specific schema typów.",
        "**Wybór**: Yoast dla typowych projektów (stabilność, znajomy interfejs), Rank Math dla wymagających więcej w free.",
      ],
    },
    {
      heading: "Security (3 wtyczki)",
      body: [
        "**4. Wordfence Security** (free, Premium 119$/rok) — most popular WAF + malware scanner. Free: firewall, brute force protection, login security, malware scanner. Premium: real-time threat intelligence, country blocking, 2FA hardware key.",
        "**5. Solid Security (dawniej iThemes Security)** (free, Pro 99$/rok) — alternatywa dla Wordfence, lżejszy. Hide login URL, 2FA, Magic Links, file change detection.",
        "**6. WP 2FA** (free) — jeśli używasz innego security plugin bez 2FA. Authenticator apps (Google Authenticator, Authy), backup codes, force 2FA dla admin/editor roles.",
        "**Wybór**: Wordfence dla większości projektów. Solid Security dla performance-critical (lżejszy). WP 2FA jako uzupełnienie jeśli main plugin nie ma 2FA.",
      ],
    },
    {
      heading: "Cache i performance (3 wtyczki)",
      body: [
        "**7. LiteSpeed Cache** (free) — najlepszy gdy hosting ma LiteSpeed server (Cyber_folks, dhosting, niektóre Hostinger). Page cache, object cache, image optimization, CSS/JS minify, lazy loading, CDN integracja. Bezkonkurencyjny w swojej niszy.",
        "**8. WP Rocket** (paid 59$/rok dla 1 strony, 119$ dla 3) — najlepszy ogólnie, działa na każdym hostingu. Setup w 5 minut, sensowne defaults, wsparcie polski. Dla projektów bez LiteSpeed servera.",
        "**9. WP Optimize** (free, Premium 49$/rok) — alternatywa free. Database cleanup, image compression, page cache, lazy loading. Mniej zaawansowany od WP Rocket ale wystarczający dla małych stron.",
        "**Wybór**: LiteSpeed Cache jeśli hosting wspiera. WP Rocket inaczej. WP Optimize jeśli budżet zerowy.",
      ],
    },
    {
      heading: "Optymalizacja obrazków (2 wtyczki)",
      body: [
        "**10. Smush** (free, Pro 84$/rok) — najczęściej używany, free wystarcza dla małej strony (do 2 MB per obrazek bulk). WebP convert (Pro), CDN delivery (Pro), lazy loading.",
        "**11. ShortPixel** (paid, ~30$ za 10k obrazków) — najlepszy compression ratio. Lossless lossy compression, WebP/AVIF, automatic na upload. Dla sklepów z dużą ilością obrazków produktów.",
        "**Wybór**: Smush dla małej strony firmowej. ShortPixel dla e-commerce / portfolio z 1000+ obrazkami.",
      ],
    },
    {
      heading: "Formularze (2 wtyczki)",
      body: [
        "**12. WPForms** (free Lite, Pro od 49$/rok) — najprostszy drag-and-drop builder. Free: contact form, multi-page forms, conditional logic, Akismet anti-spam. Pro: integracje (Mailchimp, GetResponse, Stripe, PayPal), file uploads, signature.",
        "**13. Forminator** (free) — alternatywa free od WPMU DEV, więcej funkcji niż WPForms Lite. Quizzes, polls, calculators, integracje z Stripe.",
        "**Bonus: Contact Form 7** (free) — klasyk, ale interfejs z 2010, mniej intuicyjny. Używam tylko gdy klient już go ma i działa.",
        "**Wybór**: WPForms dla nowych projektów (lepszy UX), Forminator dla budżetu zerowego z większymi wymaganiami.",
      ],
    },
    {
      heading: "Backup (2 wtyczki)",
      body: [
        "**14. UpdraftPlus** (free, Premium 70$/rok) — najpopularniejszy. Codzienny backup do Google Drive / Dropbox / S3 / FTP. Free wystarcza dla małej-średniej strony. Premium: incremental backups, multisite, network backup.",
        "**15. Duplicator** (free, Pro 99$/rok) — najlepszy do migracji. Tworzy ZIP z całą stroną + DB, instaluje na nowym hostingu w 5 minut. Pro: scheduled backups, cloud storage, multisite.",
        "**Wybór**: UpdraftPlus dla regularnych backupów. Duplicator dla migracji + okazjonalnych backupów.",
      ],
    },
    {
      heading: "Custom fields i page building (3 wtyczki)",
      body: [
        "**16. Advanced Custom Fields (ACF) Pro** (paid 49$/rok) — must-have dla każdego custom theme. Dynamic content fields, repeaters, flexible content, gallery, relationship. Kombinacja ACF + custom theme = czyste WP bez Elementor. Stack którego używam w [tworzeniu stron WordPress](/uslugi/tworzenie-stron-wordpress) dla większości projektów.",
        "**17. Bricks Builder** (paid $249 lifetime) — alternatywa dla Elementor, modern stack, Lighthouse 95+ out of the box. Pełen przewodnik: [Elementor — dlaczego NIE warto](/blog/elementor-dlaczego-nie-warto).",
        "**18. Carbon Fields** (free, framework dla deweloperów) — alternatywa dla ACF Pro free. Definiowanie pól w PHP zamiast UI. Dla deweloperów którzy preferują code-first.",
        "**Wybór**: ACF Pro dla 90% custom theme. Bricks dla page builder zamiast Elementor. Carbon Fields dla code-first developerów.",
      ],
    },
    {
      heading: "Analytics, RODO, e-commerce (7 wtyczek)",
      body: [
        "**19. Site Kit by Google** (free) — oficjalna integracja Google Analytics 4 + Search Console + AdSense + PageSpeed Insights w panelu admin. Wszystko w jednym widoku.",
        "**20. Real Cookie Banner** (free, Premium 49€/rok) — najpopularniejszy w PL cookie consent. Auto-blocking third-party scripts, integracja z Cookiebot. Dla większości projektów free wystarcza.",
        "**21. Klaro Cookie Consent** (free) — open-source alternatywa, lekka, customizable.",
        "**22. WooCommerce** (free) — jeśli sklep online. Standard dla e-commerce na WordPress. Pełna usługa: [sklepy internetowe WooCommerce](/uslugi/sklepy-internetowe-woocommerce) we Wrocławiu.",
        "**23. Stripe for WooCommerce** (free) — dla płatności kartą międzynarodowych.",
        "**24. Przelewy24 for WooCommerce** (free, opłata transakcyjna) — dla PL: BLIK, Przelewy ekspresowe, karty.",
        "**25. WP Mail SMTP** (free, Pro 49$/rok) — KRYTYCZNE dla każdej strony z formularzem. WordPress domyślnie wysyła maile przez `wp_mail()` PHP function = często ląduje w spamie. WP Mail SMTP wysyła przez prawdziwy SMTP (Gmail, Sendgrid, Mailgun, Brevo) = doręczalność 99%.",
      ],
    },
    {
      heading: "Czego unikać (anti-recommendation)",
      body: [
        "**Jetpack** (Automattic) — dla małych stron za dużo funkcji bundle (analytics, security, social, contact forms — wszystko w jednym pluginie). Lepiej osobne dedykowane pluginy.",
        "**All-in-One SEO Pack** — wyparte przez Yoast i Rank Math. Brak nowych funkcji od kilku lat.",
        "**Slider Revolution / LayerSlider** — ciężkie sliders z 200+ KB JS. Slidery są out of fashion w 2026 (większość użytkowników nie scrolluje przez wszystkie slajdy). Dla animacji lepiej Framer Motion / GSAP w custom theme.",
        "**Ja Aktualizuję** / Plug-and-Play darmowe SEO/security pluginy z polskich marketplaces — często porzucone, brak aktualizacji security, ryzyko vulnerabilities.",
      ],
    },
  ],
  faq: [
    {
      q: "Ile pluginów to za dużo?",
      a: "Reguła: tylko niezbędne. Średnia profesjonalna strona WP ma 15-25 pluginów. Powyżej 30 = przemyśl czy wszystkie używasz, każdy plugin to potencjalna luka security i ciężar dla performance.",
    },
    {
      q: "Czy free pluginy są bezpieczne?",
      a: "Te z oficjalnego katalogu wordpress.org tak — przechodzą review. Unikaj 'nulled' / pirated premium pluginów (z polskich forów torrent) — często mają backdoory.",
    },
    {
      q: "Yoast SEO czy Rank Math — co wybrać?",
      a: "Yoast: bardziej stabilny, znajomy interfejs, default w PL. Rank Math: więcej funkcji w free (schema, redirect manager, multi-keyword). Dla nowego projektu w 2026 lekko polecam Rank Math.",
    },
    {
      q: "Czy WP Rocket jest wart 60$/rok?",
      a: "Tak, jeśli hosting NIE ma LiteSpeed (gdzie LiteSpeed Cache free wygrywa). Setup 5 minut, sensowne defaults, wsparcie polski, regularne updates. Dla profesjonalnej strony — dobra inwestycja.",
    },
    {
      q: "Czy potrzebuję cookie consent jeśli nie używam Google Analytics?",
      a: "Jeśli używasz JAKICHKOLWIEK third-party scripts (Google Fonts CDN, YouTube embed, Twitter widget) — tak. W 2026 praktycznie każda strona wymaga cookie consent (RODO + EAA + e-Privacy).",
    },
    {
      q: "Czy Wordfence wystarcza w wersji free?",
      a: "Tak dla małej-średniej strony. Free: firewall, brute force protection, malware scanner, login security. Premium ma sens dla high-traffic stron, e-commerce z user data, projektów wymagających real-time threat intelligence.",
    },
  ],
});

posts.push({
  slug: "server-actions-nextjs",
  title: "Server Actions w Next.js — co to i jak używać w 2026",
  excerpt:
    "Server Actions to mutations server-side wywoływane bezpośrednio z komponentów React, bez tworzenia API routes. Co to, kiedy używać, jak zabezpieczyć.",
  date: "2026-05-09",
  readingMinutes: 9,
  tags: ["Next.js", "Server Actions", "React"],
  keyword: "Server Actions Next.js",
  metaTitle: "Server Actions w Next.js — co to i jak używać 2026",
  metaDescription:
    "Server Actions Next.js: mutations server-side z komponentów React bez API routes. Jak działa, kiedy używać, walidacja, security, error handling. Przewodnik 2026.",
  hero: { kind: "nextjs" },
  relatedServices: ["aplikacje-nextjs", "next-js-software-house", "aplikacje-react"],
  body: [],
  lead:
    "Server Actions to async funkcje wykonywane na serwerze, wywoływane bezpośrednio z komponentów React (server lub client) bez tworzenia osobnych API routes. Dostępne w Next.js 13.4+ jako stable, w 2026 standard dla mutations (form submissions, database writes, third-party API calls). Stack którego używam w każdym projekcie [tworzenia stron Next.js](/uslugi/aplikacje-nextjs). Niżej jak działa, kiedy używać, jak zabezpieczyć i typowe błędy.",
  sections: [
    {
      heading: "Co to są Server Actions technicznie",
      body: [
        "Server Action to async funkcja JavaScript / TypeScript oznaczona dyrektywą `'use server'`. Wykonuje się ZAWSZE na serwerze (Node.js runtime lub Edge), nigdy w przeglądarce. Można ją wywołać z dowolnego komponentu React.",
        "Pod spodem Next.js generuje endpoint POST z unikalnym ID dla każdej Server Action, zarządza serializacją argumentów (z React → JSON → server), deserializacją odpowiedzi (server → JSON → React state), revalidation cache (`revalidatePath`, `revalidateTag`).",
        "Z punktu widzenia developera: piszesz funkcję jakby była lokalna, ale wszystko po stronie HTTP zostaje obsłużone automatycznie. Type safety end-to-end (jeśli używasz TypeScript) — argumenty i return type są takie same po obu stronach.",
        "Server Actions ZAWSZE są POST requestami. Nie używaj ich do GET / read operations — do tego są React Server Components (które renderują dane przy SSR/SSG bez round-trip).",
      ],
    },
    {
      heading: "Kiedy używać Server Actions",
      body: [
        "**Form submissions** — najbardziej oczywisty use case. Form akcja `<form action={mojaServerAction}>` wywołuje akcję z FormData jako argumentem. Bez API route, bez fetch, bez state management dla loading. Tak działa formularz kontaktowy na [marcinsiwonia.pl](/) — Server Action wysyła mail przez Resend.",
        "**Database mutations** — INSERT / UPDATE / DELETE. Wywołujesz Prisma / Drizzle / raw SQL bezpośrednio w Server Action, bez tworzenia REST endpoint. Standard w [tworzeniu aplikacji Next.js](/uslugi/aplikacje-nextjs) z bazą Postgres.",
        "**Third-party API calls wymagające secret keys** — wysyłka maila przez Resend/SendGrid, płatność przez Stripe API, integracja z CRM. Klucze API w server-only env vars, nigdy nie wyciekną do bundle. Dla integracji bardziej złożonych: [Next.js software house](/uslugi/next-js-software-house).",
        "**Cache invalidation** — po mutation `revalidatePath('/products')` lub `revalidateTag('products')` automatycznie odświeża strony statyczne ISR.",
        "**Optimistic updates** — z `useOptimistic` hook React 19 robisz natychmiastowy update UI + Server Action w tle. User widzi zmianę instant, nie czeka na network.",
      ],
    },
    {
      heading: "Kiedy NIE używać Server Actions",
      body: [
        "**Read-only operations** — to robota React Server Components (komponenty async fetchują dane przy SSR). Server Action dla GET = zła praktyka, marnuje round-trip. Pełny przewodnik strategii renderowania: [Server-Side Rendering — co to i kiedy używać](/blog/server-side-rendering-co-to).",
        "**Public API dla third-party** (Twoja aplikacja jest backendem dla cudzych frontendów) — Server Actions to internal API Next.js, nie REST. Wystaw klasyczne API routes (`app/api/.../route.ts`).",
        "**Long-running tasks** (reportgen, video processing) — Server Action ma timeout 10s na Vercel free, 60s na Pro. Dla długich tasków: queue (Inngest, Trigger.dev, BullMQ) + webhook po zakończeniu.",
        "**Streaming responses** (chat z AI, large data download) — Server Actions zwracają jeden response. Dla streaming: API routes z `Response` body jako stream.",
        "**Mutations wymagające specific HTTP method** (PUT, DELETE, PATCH) z third-party tooling — Server Actions to zawsze POST. Dla compliance z REST conventions: API routes.",
      ],
    },
    {
      heading: "Walidacja i security",
      body: [
        "**ZAWSZE waliduj argumenty na serwerze.** Klient może wysłać dowolne dane. Użyj Zod / Valibot / Yup do schema validation:",
        "Przykład: `const schema = z.object({ email: z.string().email(), name: z.string().min(2) });` na początku Server Action, potem `schema.parse(data)` — rzuci wyjątek jeśli dane niepoprawne.",
        "**Sprawdź autoryzację.** Server Action nie ma automatycznego auth check. W każdej akcji wymagającej autoryzacji: `const session = await auth();` na początku, throw error jeśli brak.",
        "**Rate limiting.** Server Action dostępne dla każdego użytkownika, można je spamować. Użyj Upstash Ratelimit lub własny rate limit (Redis, in-memory dla małych projektów).",
        "**CSRF protection** — Next.js automatycznie chroni Server Actions przez Origin header check (od 14.1+). Możesz dodać własny token jeśli wymagasz extra warstwy.",
        "**Nigdy nie używaj userInput w SQL bez parametryzacji.** Prisma / Drizzle / `$queryRaw` z placeholders — ZAWSZE. Inaczej SQL injection.",
      ],
    },
    {
      heading: "Patterny które używam najczęściej",
      body: [
        "**Form action z FormData** — najprostszy pattern. `<form action={createUser}>`, w akcji `const name = formData.get('name')`. Działa nawet bez JavaScript (progressive enhancement).",
        "**Form action z React 19 useFormState** — dla server-side form errors widocznych dla usera. `const [state, action] = useFormState(createUser, { error: null })`. Renderujesz `state.error` w komponencie.",
        "**Optimistic update z useOptimistic** — dla UX gdzie ważna jest natychmiastowa odpowiedź. `addOptimistic(newItem)` przed Server Action, jeśli się nie powiedzie — rollback z error message.",
        "**Server Action wywołana z client component** — nie tylko z `<form action>`. Możesz wywołać jak normalną funkcję: `<button onClick={() => deleteItem(id)}>`. Server Action wykona się po POST.",
        "**Revalidation po mutation** — `revalidatePath('/products')` w Server Action, automatycznie odświeża cache dla tej ścieżki. Dla wszystkich stron z określonym tagiem: `revalidateTag('products')` + `fetch(..., { next: { tags: ['products'] }})` przy fetchu.",
      ],
    },
  ],
  faq: [
    {
      q: "Czy Server Actions zastępują API routes?",
      a: "Częściowo. Server Actions = mutations używane wewnątrz Twojej aplikacji Next.js. API routes = public endpoints dla third-party / mobile apps / non-Next.js consumerów. Większość internal mutations w 2026 = Server Actions.",
    },
    {
      q: "Czy Server Actions działają bez JavaScript?",
      a: "Tak, jeśli wywołane z `<form action>` (progressive enhancement). Form submituje się klasycznym POST + reload. Z `<button onClick>` lub fetch-em wymagają JS.",
    },
    {
      q: "Jak debugować Server Actions?",
      a: "Console.log w Server Action loguje na serwerze (terminal w dev, logs w Vercel dashboard w produkcji). Errors propagują do client jeśli `throw` — łapiesz w `useFormState` lub try/catch.",
    },
    {
      q: "Czy mogę wywołać Server Action z innej Server Action?",
      a: "Tak, to zwykła async funkcja na serwerze. Możesz też importować i wywoływać Server Action z React Server Component przy SSR.",
    },
    {
      q: "Jak ograniczyć rate Server Actions?",
      a: "Upstash Ratelimit (Redis-based, free tier wystarcza dla większości projektów), lub własny in-memory rate limit dla low-traffic. Sprawdź IP / user ID na początku akcji, throw jeśli przekroczony limit.",
    },
    {
      q: "Czy Server Actions działają na Edge runtime?",
      a: "Tak — `export const runtime = 'edge'` w pliku z Server Action. Edge ma niższe latency ale ograniczone API (brak Node.js libs które wymagają Node runtime, np. Prisma standard). Dla większości CRUD operations OK.",
    },
  ],
});

export const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
