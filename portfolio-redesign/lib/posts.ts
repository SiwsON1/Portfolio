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
    keyword: "WordPress vs Next.js koszt",
    metaTitle: "WordPress vs Next.js — koszty wdrożenia i utrzymania",
    metaDescription:
      "WordPress 5-12k vs Next.js 15-30k zł wdrożenie. Hosting WP 30-100 zł/mc vs Next.js 0-80. Maintenance roczny, performance, TCO 3 lata. Kiedy która technologia.",
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
    keyword: "strona firmowa technologia 2026",
    metaTitle: "Strona firmowa 2026 — jaką technologię wybrać",
    metaDescription:
      "5 ścieżek: WordPress (5-12k), Next.js+Sanity (15-30k), headless WP (20-40k), Webflow (8-20k), no-code (3-10k). Decyzja per profil firmy z konkretnymi cenami.",
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
