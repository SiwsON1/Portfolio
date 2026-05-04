export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string[];
  bullets: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "tworzenie-stron-wordpress",
    title: "Tworzenie stron WordPress",
    metaTitle: "Tworzenie stron WordPress Wrocław — szybkie, indeksowalne, edytowalne",
    metaDescription:
      "Strony www na WordPress: custom theme zamiast gotowca, pełna optymalizacja Core Web Vitals, panel edycji 1:1 z designem, SEO od pierwszego dnia. Wrocław i online.",
    h1: "Strony WordPress, które klient sam edytuje",
    lead:
      "WordPress wybiera się gdy klient chce sam edytować treści bez zaglądania do kodu. Zrobiony dobrze, jest szybki, bezpieczny i indeksowalny. Zrobiony źle, jest lagiem, dziurą bezpieczeństwa i duplikatem 800 innych stron z Elementora.",
    intro: [
      "Stawiam WordPressy od 2020 roku. Zrobiłem ponad 25 wdrożeń: kancelarie, hotele, sklepy WooCommerce, portfolio prywatne. Każdy stack: custom theme + niezbędne minimum pluginów + Yoast/Rank Math SEO + LiteSpeed cache. Bez gotowych theme'ów typu Avada/Divi które dodają 200kg JavaScriptu.",
      "Konkretne realizacje WordPressowe znajdziesz w [pełnej liście projektów](/projekty), m.in. [Kancelaria Maria Piontek](/projekty/kancelaria-mpiontek), [INBC broker ubezpieczeniowy](/projekty/inbc), [RCOM Service](/projekty/rcom-service). Sklep internetowy WooCommerce to osobna usługa, [opisana tutaj](/uslugi/sklepy-internetowe-woocommerce).",
    ],
    bullets: [
      {
        title: "Custom theme, nie gotowiec",
        body: "Każdy projekt na własnym themie. Kod tylko ten, który wykorzystujesz. Lighthouse 95+ standard. Brak 50 nieużywanych section blocków z Elementora.",
      },
      {
        title: "Edycja 1:1 z designem",
        body: "ACF Pro lub Bricks Builder dla pól dynamicznych. Klient widzi w panelu te same nazwy sekcji co na stronie. Bez chaosu z Gutenbergiem.",
      },
      {
        title: "Bezpieczeństwo standardowe",
        body: "Wordfence, ograniczenia logowania, dwustopniowa autoryzacja, automatyczne backupy do osobnej lokalizacji, security headers w .htaccess.",
      },
      {
        title: "SEO od pierwszego dnia",
        body: "Yoast lub Rank Math, schema.org Person/Service/Article, sitemap, optymalizacja Core Web Vitals, integracja z Search Console.",
      },
    ],
    process: [
      { step: "01", title: "Brief i wycena", body: "30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h." },
      { step: "02", title: "Projekt graficzny", body: "Makiety w Figmie. Klient akceptuje design przed rozpoczęciem kodu." },
      { step: "03", title: "Programowanie", body: "Custom theme od zera, ACF dla pól dynamicznych, lokalny dev + środowisko staging." },
      { step: "04", title: "Optymalizacja", body: "Core Web Vitals, schema, sitemap, robots, Search Console. Lighthouse 95+." },
      { step: "05", title: "Wdrożenie + szkolenie", body: "Migracja na produkcję bez przerwy. 30-min szkolenie z edycji w panelu." },
    ],
    faq: [
      { q: "Ile kosztuje strona WordPress?", a: "Wizytówka 4-7 tys. zł, strona usługowa z blogiem 7-15 tys., bardziej rozbudowana z customową logiką od 15 tys. wzwyż." },
      { q: "Dlaczego nie używasz Avada / Divi / Elementor?", a: "Bo dodają 200-400 KB JS do każdej strony, są wolne, trudne w utrzymaniu, robią z każdej strony klona innej. Custom theme = lepsze metryki + brand differentiation." },
      { q: "Czy strona będzie szybka?", a: "Tak. LiteSpeed cache + custom theme + obrazki WebP/AVIF + lazy loading. Cel: Lighthouse 95+, LCP poniżej 2.5s, INP poniżej 200ms." },
      { q: "Czy mogę sam edytować po wdrożeniu?", a: "Tak. Na koniec dostajesz 30-min szkolenie. Pola sekcji w panelu mają te same nazwy co na stronie. Plus dokumentacja PDF." },
      { q: "Jaki hosting polecasz?", a: "Hostinger Business lub cyber_folks Premium. Oba mają LiteSpeed cache, codzienne backupy, SSL, sensowne wsparcie." },
    ],
    cta: "Napisz brief, dostaniesz wycenę WordPressa w 24h",
  },
  {
    slug: "sklepy-internetowe-woocommerce",
    title: "Sklepy internetowe WooCommerce",
    metaTitle: "Sklepy WooCommerce Wrocław — wdrożenie, integracje, optymalizacja konwersji",
    metaDescription:
      "Sklepy internetowe na WordPress + WooCommerce: katalog, koszyk, integracje płatności (Przelewy24, Stripe, BLIK), wysyłki (InPost, DPD, Furgonetka), B2B, multilingual, SEO.",
    h1: "Sklepy internetowe WooCommerce — od katalogu do konwersji",
    lead:
      "WooCommerce robi 30% sklepów online na świecie. Działa, jest tani, integruje się ze wszystkim co potrzebujesz w polskim e-commerce. Wymaga jednak osoby która wie jak go skonfigurować pod konwersję, nie tylko jak go zainstalować.",
    intro: [
      "Najnowszy projekt: [Kosmoteka](/projekty/kosmoteka) — sklep z kosmetykami na WooCommerce z kompletnymi integracjami płatności i wysyłki, optymalizacją Core Web Vitals i SEO. Wcześniej kilka mniejszych sklepów dla klientów z branż furniture, akcesoria.",
      "WooCommerce wybiera się gdy budżet jest ograniczony, klient chce edycji bez programisty, a integracje z polskim ekosystemem (Przelewy24, InPost, Allegro) są kluczowe. Dla większych sklepów (1000+ SKU, multistore, headless) sugeruję inne stack-i. Jeśli zastanawiasz się czy WooCommerce wystarczy, [opisałem kryteria w poście](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      {
        title: "Pełne integracje PL",
        body: "Przelewy24, Stripe, BLIK, Apple Pay. InPost Paczkomaty, DPD, Furgonetka. Allegro Sync. Faktury (Fakturownia, wFirma, iFirma). Polskie wymogi RODO.",
      },
      {
        title: "Optymalizacja konwersji",
        body: "Skrócony checkout, persistent cart, product upsells, abandoned cart recovery, Google/Meta Pixel, GA4 enhanced ecommerce, A/B testy.",
      },
      {
        title: "Performance",
        body: "LiteSpeed cache + Cloudflare CDN. AJAX cart, lazy load obrazków produktów, optymalizacja query do bazy. Cel: poniżej 2s LCP nawet przy 1000+ produktach.",
      },
      {
        title: "B2B + multilingual",
        body: "Cenniki per grupa klientów (B2B vs B2C), minimum order quantity, hidden produkty. Polylang/WPML dla wersji obcojęzycznych.",
      },
    ],
    process: [
      { step: "01", title: "Workshop produktowy", body: "Mapa produktów, kategorie, atrybuty, integracje, model rozliczeń, polityki." },
      { step: "02", title: "Design + UX", body: "Makiety katalogu, karty produktu, koszyka, checkout. Mobile-first." },
      { step: "03", title: "Wdrożenie WooCommerce", body: "Custom theme, konfiguracja produktów, integracje płatności i wysyłki, podatki." },
      { step: "04", title: "Testy + GA4", body: "Testowanie zamówień end-to-end, GA4 enhanced ecommerce, Pixel, conversion tracking." },
      { step: "05", title: "Launch + opieka", body: "Migracja produktów ze starego sklepu (jeśli jest), opieka miesięczna z monitoringiem." },
    ],
    faq: [
      { q: "Ile kosztuje sklep WooCommerce?", a: "Mniejszy sklep (do 100 produktów, podstawowe integracje): 12-25 tys. zł. Średni (do 500 produktów, B2B, multilingual): 25-50 tys. Większy headless lub multistore: powyżej 50 tys." },
      { q: "Czy mogę sam dodawać produkty?", a: "Tak. WooCommerce ma standardowy panel produktów, plus wgrasz CSV/XML masowo z Excela. Każda kategoria, atrybut i wariant edytowalny." },
      { q: "Co z migracją z innej platformy (Shoper, IdoSell, Shopify)?", a: "Robię migracje z większości polskich platform. Eksport produktów + zamówień + klientów + przekierowania 301 starych URLi pod nowe (krytyczne dla SEO)." },
      { q: "Czy WooCommerce nadąży przy dużym ruchu?", a: "Z dobrym hostingiem (LiteSpeed cache + Cloudflare + Redis dla object cache) wytrzymuje 10-50 tys. wizyt dziennie. Powyżej rekomenduję headless (Next.js commerce + WooCommerce jako backend)." },
      { q: "Co z fakturowaniem i podatkami?", a: "Integracja z Fakturownia/wFirma/iFirma — automatyczne faktury po zamówieniu. Konfiguracja stawek VAT, płatności B2B z NIP, eksport do księgowej co miesiąc." },
    ],
    cta: "Pogadajmy o sklepie 30 minut, wycena w 48h",
  },
  {
    slug: "tworzenie-stron-www",
    title: "Tworzenie stron www",
    metaTitle: "Tworzenie stron www Wrocław — freelancer Next.js i WordPress",
    metaDescription:
      "Projektuję i koduję strony www które wyglądają inaczej niż wszystkie. WordPress, Next.js, custom. Wycena 24h, dowóz w terminie.",
    h1: "Tworzenie stron www które się pamięta",
    lead:
      "Każda strona to inny problem do rozwiązania. Dla restauracji liczy się rezerwacja, dla kancelarii zaufanie, dla apartamentów zdjęcia. Robię strony pod konkretny biznes, nie pod szablon.",
    intro: [
      "Pracuję z firmami w Polsce i za granicą od 2020 do 2026 roku, sześć lat na rynku. Zrobiłem ponad 30 wdrożeń: hotele, kancelarie, sklepy, restauracje, fizyczne usługi. Większość klientów wraca po kolejne projekty albo poleca dalej. Konkretne realizacje znajdziesz w [pełnej liście projektów](/projekty), a aktualne ceny rozłożyłem w [poście o cenach stron www](/blog/ile-kosztuje-strona-www-2026).",
      "Stronę projektuję najpierw na papierze, potem w Figmie, dopiero na końcu w kodzie. Tak unikam wracania trzy razy do tego samego ekranu i klient wie co dostanie zanim cokolwiek zaczniemy programować.",
    ],
    bullets: [
      {
        title: "Dwa stacki, jedna jakość",
        body:
          "Prosty serwis informacyjny robię na WordPressie, bo łatwiej go potem edytować. Apkę z konfiguratorem, panelem klienta albo integracją API piszę w Next.js, bo wytrzyma rozbudowę.",
      },
      {
        title: "SEO od pierwszego dnia",
        body:
          "Struktura, nagłówki, sitemap, schema, Core Web Vitals. Nie dokładam SEO po fakcie, jest wpisane w architekturę strony.",
      },
      {
        title: "Hosting i wdrożenie",
        body:
          "Pomogę z wyborem hostingu (Hostinger, cyber_folks, Vercel), DNS, SSL i konfiguracją skrzynek pocztowych. Klient nie musi w to wchodzić.",
      },
      {
        title: "Po wdrożeniu zostaję",
        body:
          "Po starcie 60 dni gwarancji i bezpłatnych poprawek. Później miesięczny abonament opieki, opcjonalnie.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief i wycena",
        body: "30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h. Bez ukrytych kosztów.",
      },
      {
        step: "02",
        title: "Projekt graficzny",
        body: "Makiety w Figmie. Dwie iteracje uwag w cenie. Klient akceptuje przed kodowaniem.",
      },
      {
        step: "03",
        title: "Programowanie",
        body: "Stawiam stronę na środowisku roboczym z dostępem podglądowym. Klient widzi każdy progress.",
      },
      {
        step: "04",
        title: "Testy i wdrożenie",
        body: "Lighthouse, sprawdzanie na realnych urządzeniach, migracja na produkcję. SSL, sitemap, Search Console.",
      },
      {
        step: "05",
        title: "Szkolenie i opieka",
        body: "Pokazuję jak edytować treści. 60 dni gwarancji. Dalej opcjonalna opieka miesięczna.",
      },
    ],
    faq: [
      {
        q: "Ile kosztuje strona www?",
        a: "Strona wizytówka: 3-5 tys. zł. Strona usługowa z blogiem i SEO: 5-12 tys. zł. Aplikacja Next.js z customową logiką: od 12 tys. zł. Wycena zawsze indywidualna po briefie.",
      },
      {
        q: "Ile trwa wdrożenie?",
        a: "Strona prosta 2-3 tygodnie. Strona usługowa 4-6 tygodni. Aplikacja: ustalamy termin po briefie, zwykle 6-12 tygodni.",
      },
      {
        q: "Co jeśli klient ma już domenę i hosting?",
        a: "Idealnie. Migrację robię bez przerwy w działaniu, klient nawet nie zauważy że coś się zmieniło.",
      },
      {
        q: "Czy będę mógł sam edytować treści?",
        a: "Tak. WordPress dostaje panel z edycją sekcji 1:1 z designem. Next.js, jeśli zachodzi potrzeba CMS, podłączam Sanity albo Strapi.",
      },
      {
        q: "Czy strona będzie responsywna?",
        a: "Każda strona idzie pod 3 breakpointy: telefon, tablet, desktop. Testuję na realnych urządzeniach, nie tylko devtoolsach.",
      },
    ],
    cta: "Napisz brief, dostaniesz wycenę w 24h",
  },
  {
    slug: "aplikacje-nextjs",
    title: "Aplikacje Next.js",
    metaTitle: "Programista Next.js Wrocław — aplikacje webowe na zamówienie",
    metaDescription:
      "Aplikacje Next.js: konfiguratory, panele klienta, integracje API, sklepy headless. Pełen full-stack z TypeScript, Vercel i SEO.",
    h1: "Programista Next.js — aplikacje webowe na zamówienie",
    lead:
      "Next.js wybiera się gdy strona ma robić więcej niż prezentować ofertę. Dynamiczne dane, panele, autoryzacja, integracje, e-commerce headless. Tu właśnie zaczyna się sens kosztu produkcji.",
    intro: [
      "Najnowszy projekt: [konfigurator wyceny ogrodzeń dla niemieckiej firmy Galabau Darius](/projekty/galabau-darius). Klient wybiera słupki, panele, długość, dostaje wycenę i wysyła zapytanie. Pod spodem panel admina do zarządzania cennikami i zleceniami. Stack: Next.js 14, Clerk auth, Tailwind, deploy Vercel.",
      "Wcześniej kilka aplikacji full-stack w NestJS i Express: e-commerce, real-time chat, dashboard kelnerski, system rezerwacji. Jeśli zastanawiasz się czy w ogóle potrzebujesz Next.js zamiast WordPress, [kryteria decyzyjne opisałem w osobnym poście](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      {
        title: "App Router od początku",
        body: "Każdy projekt na najnowszym App Router. Server Components, Suspense, streaming, instant navigation. Wszystko co Next.js daje pod kątem performance.",
      },
      {
        title: "TypeScript bez wyjątków",
        body: "Cały kod w TS, włącznie z bazą i API. Rzadziej znajdujemy bugi w produkcji bo wiele wpada przed deployem.",
      },
      {
        title: "Auth, baza, płatności",
        body: "Clerk lub NextAuth dla autoryzacji. Postgres przez Prisma lub Drizzle. Stripe dla płatności. Sprawdzone klocki, nie eksperymenty.",
      },
      {
        title: "Deploy i monitoring",
        body: "Vercel jako default (zero ops dla klienta) lub własny VPS jeśli sytuacja wymaga. Sentry, OpenTelemetry, alerty.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workshop produktowy",
        body: "User stories, mapa funkcji, wireframe. Określamy MVP i co można dodać później.",
      },
      {
        step: "02",
        title: "Architektura",
        body: "Modele danych, API, integracje, autoryzacja. Decyzje na poziomie schematu robimy przed pisaniem.",
      },
      {
        step: "03",
        title: "Iteracyjne wdrożenia",
        body: "Sprinty 2-tygodniowe, demo na koniec każdego, klient testuje na środowisku staging.",
      },
      {
        step: "04",
        title: "Produkcja",
        body: "Deploy, smoke testy, monitoring, dokumentacja. Klient dostaje runbook na typowe sytuacje.",
      },
    ],
    faq: [
      {
        q: "Kiedy Next.js a kiedy WordPress?",
        a: "WordPress gdy strona to głównie treść (blog, oferta, kontakt). Next.js gdy aplikacja musi przetwarzać dane użytkownika, integrować się z API albo skalować ruch.",
      },
      {
        q: "Czy muszę mieć projekt graficzny?",
        a: "Nie. Robię też design w Figmie. Jeśli masz już brand i komponenty, użyję ich. Jeśli nie, projektuję od zera.",
      },
      {
        q: "Czy aplikację da się potem edytować bez programisty?",
        a: "Treści tak (CMS jak Sanity podłączam standardowo). Logikę biznesową nie, ale każdy moduł dokumentuję żeby kolejny developer mógł wejść na projekt bez archeologii.",
      },
      {
        q: "Co z performance?",
        a: "Każdy projekt mierzony Lighthouse i Core Web Vitals przed deployem. Cel: 90+ na wszystkich metrykach. Często osiągam 100.",
      },
    ],
    cta: "Pogadajmy o aplikacji 30 minut, bez zobowiązań",
  },
  {
    slug: "aplikacje-react",
    title: "Aplikacje React",
    metaTitle: "Programista React. Komponenty, panele, dashboardy",
    metaDescription:
      "Programowanie aplikacji React. Dashboardy, panele klienta, komponenty na zamówienie. TypeScript, Tailwind, testowanie, design system.",
    h1: "React tam gdzie nie potrzeba SSR",
    lead:
      "React jest świetny gdy aplikacja działa za logowaniem albo nie ma wymagań SEO. Mniej narzutu Next.js, mniej kosztu hostingu, mniej decyzji do podjęcia po stronie infrastruktury.",
    intro: [
      "Robię React od 2020 roku. Większość projektów lab dostępnych na githubie to React: dashboardy, panele, real-time apps, sklepy edukacyjne. Część komercyjna, np. moduły do większych systemów, robiona również w React + Vite.",
      "Dla klientów którzy mają już backend (PHP, Java, Python) podpinam się jako frontend developer. Komponenty, integracja z API, design system, testowanie.",
    ],
    bullets: [
      {
        title: "Vite zamiast CRA",
        body: "Create React App jest deprecated od 2023. Wszystkie nowe projekty stawiam na Vite. Szybszy dev, mniejszy bundle, lepszy DX.",
      },
      {
        title: "Design system",
        body: "Zamiast pisać komponenty od zera, używam shadcn/ui jako bazy i rozszerzam pod brand klienta. Pełna kontrola nad kodem, brak vendor lock-in.",
      },
      {
        title: "State management",
        body: "Zustand albo Redux Toolkit jeśli skala wymaga. TanStack Query dla danych z API. Bez zbędnych warstw abstrakcji.",
      },
      {
        title: "Testowanie",
        body: "Vitest + Testing Library. Krytyczne ścieżki dodatkowo w Playwright. Pokrycie tylko tam gdzie ryzyko regresu jest realne.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audyt istniejącego",
        body: "Jeśli wchodzę na trwający projekt, najpierw audyt: co działa, co boli, gdzie najpierw wkładać pracę.",
      },
      {
        step: "02",
        title: "Plan iteracji",
        body: "Roadmapa na 4-8 tygodni z priorytetami. Co tydzień refresh, klient widzi efekty.",
      },
      {
        step: "03",
        title: "Code review i pair",
        body: "Dla zespołów wewnętrznych dorzucam code review i pair programming. Wiedza zostaje w firmie.",
      },
    ],
    faq: [
      {
        q: "Co jeśli mamy starszy projekt na React 17?",
        a: "Migrację 17 → 19 robiłem już kilka razy. Plan: incremental upgrade, najpierw zależności, potem hooki, potem nowe API. Bez przepisywania od zera.",
      },
      {
        q: "Czy mogę zatrudnić Cię na godziny?",
        a: "Tak. Stawka godzinowa od 220 zł netto, minimalny pakiet 20h. Faktura na koniec miesiąca.",
      },
      {
        q: "Współpraca długoterminowa?",
        a: "Najczęstsza forma. Stawka miesięczna za określoną liczbę godzin, kontrakt B2B lub UoD.",
      },
    ],
    cta: "Daj znać czego szukasz, odpiszę w ciągu dnia",
  },
  {
    slug: "wdrozenia-ai",
    title: "Wdrożenia AI",
    metaTitle: "Wdrożenia AI w firmie: chatboty, automatyzacja, RAG",
    metaDescription:
      "Wdrażam AI tam gdzie ma sens biznesowy: chatboty na danych firmowych, automatyzacja procesów, RAG, integracje z OpenAI i Claude.",
    h1: "AI które przynosi liczby, nie tylko demo",
    lead:
      "Większość wdrożeń AI w 2025 to demo z konferencji które nigdy nie weszły do produkcji. Robię tylko to co mierzy się czasem zaoszczędzonym albo przychodem dodanym.",
    intro: [
      "Pracuję z OpenAI API i Anthropic Claude API. Buduję aplikacje na bazie tych modeli, nie trenuję własnych modeli. Dlatego umiem dostarczyć w 4 tygodnie zamiast 4 miesięcy. Konkretne case studies wdrożeń AI w małych i średnich firmach (5-50 osób) znajdziesz w [poście o wdrożeniach AI 2025-2026](/blog/wdrozenia-ai-w-malych-firmach).",
      "Najczęstsze trzy zlecenia: chatbot na bazie wewnętrznych dokumentów (RAG), automatyzacja przetwarzania maili i dokumentów, generator treści z customową logiką brandową.",
    ],
    bullets: [
      {
        title: "RAG na dokumentach klienta",
        body: "Twoja baza wiedzy plus chatbot który odpowiada cytując źródło. Postgres z pgvector, embedding OpenAI, citations w UI.",
      },
      {
        title: "Automatyzacja maili",
        body: "Klasyfikacja, ekstrakcja danych, propozycja odpowiedzi. Człowiek tylko zatwierdza. Spadek czasu obsługi nawet 70%.",
      },
      {
        title: "Generator treści",
        body: "Pipeline który pisze opisy produktów, posty, maile sprzedażowe pod styl marki. Promptowanie, walidacja, fallback na humana.",
      },
      {
        title: "Bez bullshitu",
        body: "Zanim cokolwiek wdrożymy, mierzymy obecny czas i koszt procesu. Po wdrożeniu pokazuję twardo o ile się zmieniło.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        body: "Mapowanie procesu, identyfikacja gdzie AI robi różnicę. 80% pomysłów odrzucam tu, bo nie zwrócą się w 12 miesiącach.",
      },
      {
        step: "02",
        title: "Proof of concept",
        body: "Mały prototyp w 2 tygodnie. Klient testuje na realnych danych, decyduje o pełnym wdrożeniu.",
      },
      {
        step: "03",
        title: "Produkcja",
        body: "Ewaluacja jakości outputu, monitoring kosztów API, rate limiting, fallback. Bez tego AI w produkcji to tylko ryzyko.",
      },
    ],
    faq: [
      {
        q: "Czy moje dane wyciekną do OpenAI?",
        a: "Klucze API mają opcję opt-out z trenowania (default w API tier). Dla wrażliwych projektów hostuję modele open-source lokalnie albo na Azure OpenAI.",
      },
      {
        q: "Ile kosztuje miesięczne utrzymanie?",
        a: "Same koszty API: od kilkudziesięciu do kilku tysięcy zł zależnie od wolumenu. Hosting i monitoring osobno, zwykle 200-800 zł/mc.",
      },
      {
        q: "Czy AI zastąpi pracownika?",
        a: "Najczęściej nie. Daje przewagę 2-3x w ilości spraw obsłużonych przez tego samego człowieka. Pełna automatyzacja tylko dla bardzo wąskich, powtarzalnych procesów.",
      },
    ],
    cta: "Opisz proces który chcesz odciążyć, odpowiem co da się z tym zrobić",
  },
  {
    slug: "pozycjonowanie-seo",
    title: "Pozycjonowanie SEO",
    metaTitle: "Pozycjonowanie SEO Wrocław — technika, content i E-E-A-T",
    metaDescription:
      "Pozycjonowanie SEO oparte na technice, contencie i E-E-A-T. Audyt, sitemap, schema, treści. Mierzalne efekty w 3-6 miesięcy.",
    h1: "Pozycjonowanie SEO Wrocław — od audytu do top10",
    lead:
      "Większość pozycjonerów daje content i linki. Ja zaczynam od tego co Google widzi: struktura strony, indeksacja, Core Web Vitals, schema. Bez tego najlepsze treści przeleżą się na 50. pozycji.",
    intro: [
      "Prowadzę kilka własnych blogów SEO (m.in. seomantyczny.pl o AI i SEO) oraz pomagam klientom B2B i lokalnym z pozycjonowaniem stron we Wrocławiu i online. Specjalizacja: branże usługowe i e-commerce, lokalne SEO Wrocław, treści pod intencje informacyjne. Pełen przewodnik 7 kroków pierwszego półrocza znajdziesz w [poście o pozycjonowaniu strony usługowej](/blog/pozycjonowanie-strony-uslugowej).",
      "Nie obiecuję pierwszego miejsca w 30 dni. Konkretne kierunki działań pokazuję w audycie, mierzalne efekty zwykle widać po 3-6 miesiącach. Jeśli ciekawi Cię techniczna strona Core Web Vitals 2026, [opisałem zmiany w osobnym poście](/blog/core-web-vitals-2026).",
    ],
    bullets: [
      {
        title: "Audyt techniczny",
        body: "Crawl Screaming Frog, analiza sitemap, indeksacji, Core Web Vitals, mobile usability. Lista poprawek z priorytetem.",
      },
      {
        title: "Topical Authority",
        body: "Mapa fraz, klastry tematyczne, hub-and-spoke. Plan contentu na 6-12 miesięcy z priorytetami pod intencje wyszukiwania.",
      },
      {
        title: "On-page i E-E-A-T",
        body: "Optymalizacja istniejących stron pod konkretne frazy. Tytuły, meta, struktura nagłówków, dane strukturalne, autorzy.",
      },
      {
        title: "Linkowanie wewnętrzne",
        body: "Najtańszy i najszybszy boost. Audyt linków wewnętrznych, plan przerzucenia mocy z hubów na strony pieniężne.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audyt 360",
        body: "Tech, content, linki, konkurencja. 30-50 stron raportu z priorytetami i estymacją efektu.",
      },
      {
        step: "02",
        title: "Sprint techniczny",
        body: "Pierwsze 4-6 tygodni: same poprawki techniczne. Często sam fakt że strona jest indeksowalna i szybka daje 20-40% wzrostu ruchu.",
      },
      {
        step: "03",
        title: "Content rolling",
        body: "8-15 nowych tekstów miesięcznie pod konkretne frazy. Każdy mierzony w Search Console przez 6 miesięcy.",
      },
      {
        step: "04",
        title: "Raport miesięczny",
        body: "Co miesiąc raport: wzrost ruchu, pozycje, konwersje. Plan na kolejny miesiąc na podstawie danych.",
      },
    ],
    faq: [
      {
        q: "Ile kosztuje pozycjonowanie?",
        a: "Audyt jednorazowy: 2-5 tys. zł. Pakiet miesięczny (audyt poprawek + content + raport): od 2,5 tys. zł. Większe e-commerce od 5 tys. zł/mc.",
      },
      {
        q: "Czy podpisujemy umowę na 12 miesięcy?",
        a: "Nie. Miesiąc do miesiąca, wypowiedzenie z 30-dniowym uprzedzeniem. Wierzę że jeśli nie ma efektów, klient powinien móc odejść.",
      },
      {
        q: "Linkowanie zewnętrzne?",
        a: "Tylko organiczne i contentowe. Bez SWLi, bez farm, bez kupowania paczek z giełd.",
      },
      {
        q: "Co jeśli mam karę od Google?",
        a: "Przeglądam, identyfikuję przyczynę (najczęściej linki lub thin content), robię plan recovery. Czasem szybciej, czasem wolniej, ale z odpowiednim podejściem da się wyjść.",
      },
    ],
    cta: "Zamów audyt SEO, dostaniesz konkretny plan w tydzień",
  },
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
