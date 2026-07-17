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
    metaTitle: "Tworzenie stron WordPress Wrocław — custom theme, CWV 95+",
    metaDescription:
      "WordPress z custom theme (bez Elementora i Avada), Core Web Vitals 95+, panel edycji 1:1 z designem, Yoast/Rank Math od pierwszego dnia. Wrocław i online.",
    h1: "Strony WordPress, które klient sam edytuje",
    lead:
      "WordPress wybiera się gdy klient chce sam edytować treści bez zaglądania do kodu. Zrobiony dobrze, jest szybki, bezpieczny i indeksowalny. Zrobiony źle, muli, łapie malware i wygląda jak 800 innych stron z Elementora.",
    intro: [
      "Stawiam WordPressy od 2020 roku. Zrobiłem ponad 25 wdrożeń WordPress: kancelarie, hotele, sklepy WooCommerce, portfolio prywatne. Każdy stack: custom theme + niezbędne minimum pluginów + Yoast/Rank Math SEO + LiteSpeed cache. Bez gotowych motywów typu Avada/Divi, które dokładają setki kilobajtów zbędnego JavaScriptu.",
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
        title: "Bezpieczeństwo w standardzie",
        body: "Wordfence, ograniczenia logowania, logowanie dwuskładnikowe, automatyczne backupy do osobnej lokalizacji, security headers w .htaccess.",
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
      { q: "Dlaczego nie używasz Avada / Divi / Elementor?", a: "Bo dodają 200-400 KB JS do każdej strony, są wolne, trudne w utrzymaniu, robią z każdej strony klona innej. Custom theme to lepsze metryki i strona, która nie wygląda jak wszystkie inne." },
      { q: "Czy strona będzie szybka?", a: "Tak. LiteSpeed cache + custom theme + obrazki WebP/AVIF + lazy loading. Cel: Lighthouse 95+, LCP poniżej 2.5s, INP poniżej 200ms." },
      { q: "Czy mogę sam edytować po wdrożeniu?", a: "Tak. Na koniec dostajesz 30-min szkolenie. Pola sekcji w panelu mają te same nazwy co na stronie. Plus dokumentacja PDF." },
      { q: "Jaki hosting polecasz?", a: "Hostinger Business lub cyber_folks Premium. Oba mają LiteSpeed cache, codzienne backupy, SSL, sensowne wsparcie." },
    ],
    cta: "Napisz brief, dostaniesz wycenę WordPressa w 24h",
  },
  {
    slug: "sklepy-internetowe-woocommerce",
    title: "Sklepy internetowe WooCommerce",
    metaTitle: "Sklepy WooCommerce Wrocław — wdrożenie i optymalizacja",
    metaDescription:
      "Sklepy WooCommerce z integracjami PL: Przelewy24, BLIK, InPost, DPD, Furgonetka, Fakturownia, Allegro Sync. B2B, multilingual, GA4 enhanced ecommerce.",
    h1: "Sklepy internetowe WooCommerce — od katalogu do konwersji",
    lead:
      "WooCommerce robi 30% sklepów online na świecie. Działa, jest tani, integruje się ze wszystkim co potrzebujesz w polskim e-commerce. Wymaga jednak osoby która wie jak go skonfigurować pod konwersję, nie tylko jak go zainstalować.",
    intro: [
      "Najnowsze wdrożenie sklepu WooCommerce: [Kosmoteka](/projekty/kosmoteka), sklep z teleskopami i sprzętem obserwacyjnym, z kompletnymi integracjami płatności i wysyłki, optymalizacją Core Web Vitals i SEO. Wcześniej kilka mniejszych sklepów, głównie branża meblowa i odzieżowa, m.in. [LumiKids](/projekty/lumikids).",
      "WooCommerce wybiera się gdy budżet jest ograniczony, klient chce edycji bez programisty, a integracje z polskim ekosystemem (Przelewy24, InPost, Allegro) są kluczowe. Dla większych sklepów (1000+ SKU, multistore, headless) sugeruję inne technologie. Jeśli zastanawiasz się czy WooCommerce wystarczy, [opisałem kryteria w poście](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      {
        title: "Pełne integracje PL",
        body: "Przelewy24, Stripe, BLIK, Apple Pay. InPost Paczkomaty, DPD, Furgonetka. Allegro Sync. Faktury (Fakturownia, wFirma, iFirma). Polskie wymogi RODO.",
      },
      {
        title: "Optymalizacja konwersji",
        body: "Skrócony checkout, koszyk zapamiętywany między wizytami, dosprzedaż na karcie produktu, ratowanie porzuconych koszyków, Google/Meta Pixel, GA4 enhanced ecommerce, testy A/B.",
      },
      {
        title: "Performance",
        body: "LiteSpeed cache + Cloudflare CDN. AJAX cart, lazy load obrazków produktów, optymalizacja query do bazy. Cel: poniżej 2s LCP nawet przy 1000+ produktach.",
      },
      {
        title: "B2B + multilingual",
        body: "Cenniki per grupa klientów (B2B i B2C), minimalne wielkości zamówień, produkty widoczne tylko dla wybranych grup. Polylang/WPML dla wersji obcojęzycznych.",
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
      { q: "Co z fakturowaniem i podatkami?", a: "Integracja z Fakturownia/wFirma/iFirma: automatyczne faktury po zamówieniu. Konfiguracja stawek VAT, płatności B2B z NIP, eksport do księgowej co miesiąc." },
    ],
    cta: "Pogadajmy o sklepie 30 minut, wycena w 48h",
  },
  {
    slug: "headless-wordpress",
    title: "Headless WordPress",
    metaTitle: "Headless WordPress — frontend Next.js, WP zostaje jako CMS",
    metaDescription:
      "Headless setup: WordPress jako CMS dla redakcji, frontend stawiamy w Next.js na Vercel. ISR, Lighthouse 95+, edycja w panelu jak zawsze. Migracja istniejących.",
    h1: "Headless WordPress — szybkość Next.js, edycja WordPress",
    lead:
      "Headless WordPress łączy edytor treści WordPressa (znany każdemu redaktorowi) z frontendem w Next.js (szybki, SEO-friendly, deploy na CDN). Idealny dla firm które już mają redakcję pracującą na WP, ale chcą wydajności jak na Vercel.",
    intro: [
      "Headless WordPress to architektura w której WordPress zostaje, ale tylko jako backend. Treści wystawiasz przez REST API albo GraphQL (WPGraphQL), a frontend renderujesz w Next.js / Astro / Nuxt. Wynik: Lighthouse 95+, edge caching, edycja jak zawsze.",
      "Robię migracje istniejących stron WordPress na headless setup: backend zostaje (admin, edytor, role), frontend stawiany od zera w Next.js. Klient widzi to samo co dotąd, użytkownik dostaje 3x szybszą stronę. Szczegóły kosztów [w poście o migracji WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
    ],
    bullets: [
      {
        title: "WordPress jako CMS",
        body: "Klient edytuje w znanym panelu: Gutenberg, ACF, custom fields, role, multilanguage. Bez krzywej uczenia się.",
      },
      {
        title: "Next.js jako frontend",
        body: "ISR (Incremental Static Regeneration): strony generowane na build, regenerowane on-demand po update'cie z WP webhookiem.",
      },
      {
        title: "Wydajność CDN",
        body: "Cały frontend statyczny na Vercel/Cloudflare. Brak PHP w renderingu = LCP poniżej 1.5s globalnie.",
      },
      {
        title: "SEO + Schema",
        body: "Yoast/Rank Math eksport + custom schema.org w Next.js. Sitemap auto-generowany. Pełne wsparcie indeksacji.",
      },
    ],
    process: [
      { step: "01", title: "Audyt WP", body: "Inwentarz custom post types, ACF, kategorii, planów, integracji. Co trzeba wystawić przez API." },
      { step: "02", title: "Backend setup", body: "WPGraphQL + niezbędne pluginy ACF support, custom resolvers dla custom fields." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + WPGraphQL queries. Designy 1:1 z istniejącymi (lub od nowa)." },
      { step: "04", title: "Migracja + DNS", body: "WP backend pozostaje na starym hostingu, frontend na Vercel. DNS przełącza root domenę na Next.js." },
    ],
    faq: [
      { q: "Co to jest headless WordPress?", a: "Architektura, w której WordPress działa tylko jako zaplecze do edycji treści (headless CMS), a stronę renderuje osobny frontend, najczęściej Next.js. Treści lecą przez REST API albo WPGraphQL, użytkownik dostaje gotowy HTML z CDN." },
      { q: "Po co headless WordPress skoro WordPress sam działa?", a: "Wydajność: frontend na CDN ładuje się 2-5x szybciej niż renderowany przez PHP/MySQL z hostingu. SEO: Lighthouse 95+ wpływa na rankingi. Bezpieczeństwo: admin panel niewidoczny dla użytkowników, redukuje attack surface." },
      { q: "Ile kosztuje migracja na headless?", a: "Małe strony (50-100 podstron): 15-25 tys. zł. Średnie (200-500 podstron + custom logic): 30-60 tys. Większe ze sklepem WooCommerce headless: od 50 tys." },
      { q: "Czy klient nadal sam edytuje?", a: "Tak. Wszystko w admin panelu WP jak zawsze. Po publikacji webhook wyzwala rebuild ISR i strona aktualizuje się w ~30 sekund od zapisu." },
      { q: "Jakie są ograniczenia?", a: "Niektóre pluginy WP (komentarze, formularze, gallery) wymagają odpowiedników po stronie Next.js. Plus dwa hostingi (WP backend + Vercel frontend), choć backend może stać na najtańszym współdzielonym." },
    ],
    cta: "Pogadajmy o migracji na headless WordPress",
  },
  {
    slug: "nowoczesne-strony-internetowe",
    title: "Nowoczesne strony internetowe",
    metaTitle: "Nowoczesne strony internetowe — design, animacje, custom cursor",
    metaDescription:
      "Strony internetowe jak case studies z Awwwards: animacje GSAP, custom cursor, page transitions, dark mode, R3F. Design-led, mobile-first. Wrocław i online.",
    h1: "Nowoczesne strony internetowe. Design-led, nie stack-led.",
    lead:
      "Strony, które wyglądają jak case studies z Awwwards SOTY. Animacje, custom cursor, page transitions, scroll-triggered visuals. Stack dobieramy do designu, nie odwrotnie. Jeśli szukasz konkretnej technologii, zajrzyj do [Stron WordPress](/uslugi/tworzenie-stron-wordpress) albo [Stron Next.js](/uslugi/aplikacje-nextjs).",
    intro: [
      "Tę usługę robię dla klientów, którym standardowy szablon nie wystarczy. Brand chce zostać zapamiętany, oferta jest premium, konkurencja siedzi na WordPressach z 2018 roku. Wtedy ma sens wejść na poziom Lusion, ActiveTheory czy raviklaassens.com.",
      "Co dostajesz wizualnie: custom kursor, animacje na stronie odpalane scrollem (GSAP ScrollTrigger), przejścia między widokami, elementy 3D w R3F (jeśli pasują), mikrointerakcje na każdym hoverze, dark mode jako natywny stan. Plus standardy 2026: Core Web Vitals 95+, schema.org dla AI search, obrazki OG per podstrona.",
      "Konkretną technologię dobieram po briefie. Jeśli strona ma głównie content i klient chce edytować, idzie WordPress headless. Jeśli aplikacja ma własną logikę i panel, idzie Next.js. Detale stack-owe [opisałem osobno dla WordPressa](/uslugi/tworzenie-stron-wordpress) i [dla Next.js](/uslugi/aplikacje-nextjs).",
    ],
    bullets: [
      {
        title: "Animacje z ScrollTriggera",
        body: "GSAP ScrollTrigger, page transitions między widokami, staggered reveals, parallax. Każda sekcja wita się inaczej. Reduced motion respect.",
      },
      {
        title: "Custom cursor i micro-motion",
        body: "Kursor zmienia się nad linkami, projektami i formularzami. Hovery dopracowane w detalu, nie tylko `color: peach`.",
      },
      {
        title: "3D bez ciężaru",
        body: "React Three Fiber dla pojedynczych wow-momentów (hero, przeciągalna sfera 3D, scroll scene). Lazy loaded, mobile-fallback statyczny.",
      },
      {
        title: "Dark mode natywny",
        body: "Strona projektowana w ciemnym trybie od początku, jasny jako dodatek (nie odwrotnie). Paleta OKLCH, głębia przez gradienty i szum.",
      },
    ],
    process: [
      { step: "01", title: "Discovery + benchmarks", body: "Audyt obecnej (jeśli jest) + 3 referencje docelowe. Mierzymy wyjściową wydajność." },
      { step: "02", title: "Design + tokens", body: "Design system w Figmie, z niego tokeny Tailwind, z nich komponenty. Spójność od projektu po kod." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router, Sanity/Contentful jako CMS, Vercel preview deploys per PR." },
      { step: "04", title: "Performance + SEO", body: "Lighthouse audit per route, schema, OG, sitemap, Search Console." },
    ],
    faq: [
      { q: "Czym 'nowoczesna' różni się od zwykłej strony?", a: "Designem i interakcją, nie technologią. Zwykła strona prezentuje treść. Nowoczesna prowadzi przez treść animacjami, custom kursorem, przejściami między podstronami. Stack (WordPress, Next.js) dobieramy do potrzeb edycji, nie do efektu." },
      { q: "Jaki stack pod spodem?", a: "Zależy od briefu. Strona content-first z redakcją: WordPress headless + Next.js frontend. Aplikacja z panelem: Next.js end-to-end. Konkretne porównanie [w usłudze Strony Next.js](/uslugi/aplikacje-nextjs)." },
      { q: "Ile to kosztuje?", a: "Nowoczesna strona firmowa z animacjami: 18-35 tys. zł. Z headless CMS i custom logic: 35-60 tys. Strona produktu/aplikacji premium: od 50 tys. wzwyż." },
      { q: "Czy klient nadal edytuje sam?", a: "Tak. Sanity, Contentful albo headless WordPress jako CMS. Animacje skonfigurowane raz przez programistę, treść edytowalna w panelu." },
      { q: "Czy reduced motion zostanie obsłużony?", a: "Tak, każda animacja respektuje `prefers-reduced-motion`. Użytkownicy z włączonym ustawieniem dostają statyczną wersję bez parallaxu i transitions." },
    ],
    cta: "Pogadajmy o nowoczesnej stronie, 30 minut",
  },
  {
    slug: "nowoczesna-strona-firmowa-2026",
    title: "Strona firmowa MŚP",
    metaTitle: "Strona firmowa dla małej firmy — pakiet, wycena 24h",
    metaDescription:
      "Strona firmowa dla małej i średniej firmy (5-50 osób): wizytówka, usługi, blog, kontakt. WordPress lub Next.js pod budżet. Wrocław i online. Od 6 tys. zł.",
    h1: "Strona firmowa dla małej firmy. Pakiet, nie projekt na rok.",
    lead:
      "Pakiet dla firm 5-50 osób, które potrzebują strony szybko, sensownie i bez 200-stronicowego briefu. Wizytówka, usługi, blog, kontakt. Wycena w 24h, wdrożenie 3-6 tygodni. Stack dobieram do budżetu i tego, kto będzie edytował.",
    intro: [
      "Małe i średnie firmy nie potrzebują strony za 60 tys. zł z animacjami R3F. Potrzebują strony, którą można obronić przed klientem, edytować bez kodu i pokazać w Google Search Console rosnące rankingi. Pakiet jest pod taki właśnie profil.",
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
        body: "WordPress z customowym themem (najtaniej) albo Sanity (premium). Klient edytuje treści sam, programista nie jest gatekeeperem.",
      },
    ],
    process: [
      { step: "01", title: "Strategia", body: "30-min discovery: kto, dla kogo, jaka konwersja, jakie frazy SEO. Brief w 24h." },
      { step: "02", title: "Design", body: "Moodboard, potem makiety w Figmie, custom design system i prototyp animacji." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router + Sanity CMS + Vercel deploy. Staging od dnia 3." },
      { step: "04", title: "Launch", body: "Migracja DNS bez przerwy, schema, sitemap, GA4, Search Console, opieka 60 dni." },
    ],
    faq: [
      { q: "Co powinna zawierać strona internetowa małej firmy?", a: "Minimum: strona główna z ofertą, podstrony usług, dane kontaktowe z mapą i klikalnym telefonem na mobile, formularz. Do tego schema.org LocalBusiness, profil Google Business spięty z tą samą nazwą i adresem oraz podstawy SEO: meta tagi, sitemap, szybkie ładowanie. Blog opcjonalnie, jeśli ktoś faktycznie będzie pisał." },
      { q: "Co jest w pakiecie strony firmowej?", a: "Strona główna, 3-5 podstron usług, formularz kontaktowy, blog (opcjonalnie), schema.org pod lokalne SEO, GA4 + Search Console, mobile-first design, szkolenie z edycji, 60 dni opieki. Stawka 6-15 tys. zł zależnie od stacku i zakresu." },
      { q: "WordPress czy Next.js dla mojej firmy?", a: "WordPress jeśli chcesz edytować treści sam, masz budżet do 12 tys. zł i nie planujesz nietypowej logiki. Next.js jeśli budżet pozwala na 15+ tys. zł, zależy Ci na maksymalnej szybkości i jesteś gotów na CMS typu Sanity. Decyzję podejmujemy na briefie." },
      { q: "Ile czasu zajmuje wdrożenie?", a: "Wizytówka (jedna podstrona + kontakt): 2-3 tygodnie. Pakiet firmowy z usługami i blogiem: 4-6 tygodni. Z customową logiką (kalkulator wyceny, panel klienta): osobna usługa, [aplikacje Next.js](/uslugi/aplikacje-nextjs)." },
      { q: "Co jeśli już mam stronę?", a: "Robię migrację. Stare URL-e przekierowuję 301 na nowe (zachowując rankingi SEO), treści przenoszę do CMS, design odświeżam." },
      { q: "Czy schemę LocalBusiness wpinasz dla każdej branży?", a: "Tak, plus dobieramy podtyp pod branżę: LegalService, MedicalBusiness, AccountingService, AutoRepair, Restaurant. Google daje wtedy lepszą widoczność w lokalnym Map Pack." },
    ],
    cta: "Wyślij brief firmowy, dostaniesz wycenę pakietu w 24h",
  },
  {
    slug: "next-js-software-house",
    title: "Next.js software house",
    metaTitle: "Outsourcing Next.js — micro software house dla SaaS",
    metaDescription:
      "Retainer 60-100h/mc lub fixed-price MVP w 4-12 tygodni. Bez PM, bez 30% marży agencji, bez handover. Long-term outsourcing Next.js + React + AI dla SaaS i SME.",
    h1: "Solo Next.js — micro software house dla startupów i SME",
    lead:
      "Software house bez software house. Jeden dev (ja) + Twój brief = aplikacja Next.js w 4-12 tygodni. Bez project managera w środku, bez 30% marży agencji, bez handover między 4 ludźmi. Komunikacja bezpośrednia, decyzje natychmiast.",
    intro: [
      "Większość polskich agencji Next.js liczy 30-50 ludzi: PM, BA, designer, frontend, backend, QA, devops. Cena: 350-500 zł/h. Ja jeden dev z sześcioletnim stażem w tym stacku: 220-280 zł/h, mniej narzutu organizacyjnego, ten sam kod end-to-end. Idealne dla MVP i mid-size aplikacji.",
      "Robiłem aplikacje pod stack: Next.js 16, React 19, TypeScript, Tailwind, GSAP/R3F, Sanity/Contentful CMS, Postgres+Prisma, Clerk/NextAuth, Stripe, AI (OpenAI, Claude). Pełen full-stack od bazy do animacji.",
    ],
    bullets: [
      {
        title: "MVP w 4-6 tygodni",
        body: "Do walidacji pomysłu. Logowanie + 3-5 funkcji + płatności. Deploy na Vercel od pierwszego dnia.",
      },
      {
        title: "Mid-size apps",
        body: "Konfiguratory, panele B2B, marketplace lite. 8-16 tygodni, dokumentacja + testy + monitoring.",
      },
      {
        title: "Funkcje AI w aplikacji",
        body: "RAG na dokumentach, chatboty, generowanie treści. OpenAI + Anthropic API + baza wektorowa.",
      },
      {
        title: "Kod łatwy w utrzymaniu",
        body: "TypeScript strict, ESLint, Prettier, conventional commits. Następny dev wchodzi bez archeologii.",
      },
    ],
    process: [
      { step: "01", title: "Brief + estymacja", body: "Workshop 1h: user stories, zakres MVP, must-have vs nice-to-have. Wycena w 24h." },
      { step: "02", title: "Sprint 1: szkielet", body: "Setup repo, design system, auth, podstawowe routes. Klient widzi staging." },
      { step: "03", title: "Iteracje 2-tygodniowe", body: "Demo każdego sprintu, feedback, poprawki. Zero niespodzianek na końcu." },
      { step: "04", title: "Launch + maintenance", body: "Production deploy, monitoring (Sentry), runbook, opcjonalna opieka miesięczna." },
    ],
    faq: [
      { q: "Jeden wykonawca to ryzyko. Co jeśli wypadniesz?", a: "Ograniczam je tak: pełna dokumentacja, kod w repo klienta od pierwszego dnia, komentarze w kodzie, wideo z omówieniem architektury na koniec. Jakikolwiek dev Next.js wejdzie po mnie bez problemu." },
      { q: "Co z designem jeśli nie mam designera?", a: "Robię też projekty graficzne w Figmie. Albo współpracuję z freelancem designerem (znam kilku top w PL)." },
      { q: "Stawka godzinowa czy ryczałt?", a: "Wybór klienta. Ryczałt: przewidywalny budżet, z buforem +15% na niespodzianki. Stawka godzinowa (220-280 zł): pełna transparentność, faktura co miesiąc z zestawieniem godzin." },
      { q: "Czy mogę zatrudnić Cię na long-term?", a: "Tak. Najczęstsza forma: 60-100h/miesiąc retainer. Cena retainerowa niższa od godzinowej." },
    ],
    cta: "Workshop produktowy 1h — bezpłatny",
  },
  {
    slug: "strony-jamstack",
    title: "Strony Jamstack",
    metaTitle: "Strony Jamstack — pre-rendered HTML, edge, headless CMS",
    metaDescription:
      "Architektura Jamstack: pre-render na build, deploy na CDN, dynamika przez edge functions. Stack: Next.js + Sanity + Vercel. Sub-1s LCP globalnie.",
    h1: "Strony Jamstack — szybkość statyki, dynamika SPA",
    lead:
      "Jamstack (JavaScript + APIs + Markup) to architektura w której strona jest w 90% statyczna (pre-rendered HTML na CDN) ale dynamika przychodzi przez API. Najszybsza możliwa konfiguracja webowa w 2026: strony ładują się w <1s globalnie.",
    intro: [
      "Stawiam strony w architekturze Jamstack od 2022. Stack docelowy: Next.js (frontend) + Sanity/Contentful (CMS) + Vercel (CDN+edge functions) + zewnętrzne APIs (Stripe, OpenAI, Algolia). Wszystko cached, wszystko serverless. Pełen przewodnik [w poście Jamstack co to jest](/blog/jamstack-co-to-jest).",
      "Idealne dla: blogów, stron marketingowych, landing page'y, katalogów e-commerce, serwisów z treścią. Gorzej pasuje do: czatów real-time, wewnętrznych dashboardów z danymi na żywo, SaaS-ów z treścią zmienną per użytkownik.",
    ],
    bullets: [
      {
        title: "CDN deploy globalny",
        body: "Plik HTML serwowany z najbliższego węzła edge (Vercel ma 100+, Cloudflare 300+). Lokalizacja użytkownika przestaje mieć znaczenie.",
      },
      {
        title: "Build-time pre-render",
        body: "Next.js generuje HTML przy buildzie, nie przy wejściu użytkownika. Zero czekania na bazę danych. ISR regeneruje strony, gdy treść się zmienia.",
      },
      {
        title: "Headless CMS",
        body: "Sanity / Contentful / Strapi jako edycja. API zwraca JSON, frontend renderuje. Kilka frontendów może jechać na tych samych danych.",
      },
      {
        title: "Edge functions dla dynamiki",
        body: "Loginy, formularze, personalizacja: wszystko jako edge functions (Vercel/Cloudflare Workers). Nadal sub-100ms response.",
      },
    ],
    process: [
      { step: "01", title: "Architektura", body: "Mapa: co statyczne (90%), co dynamiczne (10%). Wybór CMS + payment + auth provider." },
      { step: "02", title: "CMS setup", body: "Schema w Sanity Studio. Custom fields, relacje, role redakcyjne. Live preview." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + edge functions dla auth/forms. Design + animacje." },
      { step: "04", title: "Deploy + monitoring", body: "Vercel preview per PR, produkcja jednym kliknięciem. Sentry, Analytics, Search Console." },
    ],
    faq: [
      { q: "Jaka różnica między Jamstack a tradycyjnym WordPress?", a: "WordPress przy każdym wejściu odpala PHP i MySQL, żeby złożyć HTML. W Jamstacku HTML czeka gotowy na CDN, request to samo pobranie pliku. 5-50x szybciej." },
      { q: "Ile kosztuje strona Jamstack?", a: "Mała (do 50 podstron + blog): 12-25 tys. zł. Średnia (200+ stron, custom logic): 25-50 tys. Większa z e-commerce: od 50 tys." },
      { q: "Co jeśli mam już WordPress?", a: "Robię migracje WordPress → Jamstack. WP zostaje jako headless CMS (opcjonalnie) lub przenoszę do Sanity. URL-e zachowywane przez 301." },
      { q: "Czy SEO działa tak samo?", a: "Lepiej. Pre-renderowany HTML Google indeksuje natychmiast. Schema.org plus Core Web Vitals 95+ dają wyższe rankingi niż typowy WordPress." },
    ],
    cta: "Sprawdź czy Jamstack to dla Ciebie",
  },
  {
    slug: "tworzenie-stron-www",
    title: "Tworzenie stron www",
    metaTitle: "Tworzenie stron www Wrocław — WordPress lub Next.js, od 2020",
    metaDescription:
      "Tworzenie stron www we Wrocławiu, sześć lat doświadczenia, ponad 30 wdrożeń. WordPress lub Next.js zależnie od potrzeb. Wycena w 24h, wdrożenie w terminie.",
    h1: "Tworzenie stron www. Wrocław, od 2020.",
    lead:
      "Hub usług webowych dla firm. Jeśli wiesz że chcesz stronę ale nie wiesz w jakiej technologii, zaczynamy tu. Jeśli wiesz że [WordPress](/uslugi/tworzenie-stron-wordpress) albo [Next.js](/uslugi/aplikacje-nextjs), idź od razu do specyficznej usługi. Sklep online: [WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
    intro: [
      "Tworzeniem stron www zajmuję się od 2020 roku. Sześć lat tworzenia stron internetowych, ponad 30 wdrożeń: hotele, kancelarie, sklepy, restauracje, lokalne usługi. Działam jako freelancer, nie agencja: bez narzutu na PM-ów i handlowców, rozmawiasz bezpośrednio z osobą, która pisze kod. Większość klientów wraca po kolejne projekty albo poleca dalej. Konkretne realizacje znajdziesz w [pełnej liście projektów](/projekty), a aktualne ceny rozłożyłem w [poście o cenach stron www](/blog/ile-kosztuje-strona-www-2026).",
      "Stronę projektuję najpierw na papierze, potem w Figmie, dopiero na końcu w kodzie. Tak unikam wracania trzy razy do tego samego ekranu i klient wie co dostanie zanim cokolwiek zaczniemy programować. Stack dobieram zawsze po briefie, nie z góry. Decyzja idzie po dwóch pytaniach: kto będzie edytował treści i jak skomplikowana jest logika strony.",
      "Najczęstsze ścieżki: lokalna firma usługowa z blogiem to WordPress (3-12 tys. zł). Premium brand albo aplikacja z panelem klienta to Next.js (15-50 tys. zł). E-commerce z polskimi integracjami to WooCommerce (12-50 tys. zł). Headless, gdy redakcja chce panelu WP, a marketing chce wydajności Vercela.",
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
        body: "Stawiam stronę na środowisku roboczym z dostępem podglądowym. Klient widzi postępy na bieżąco.",
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
    title: "Tworzenie stron Next.js",
    metaTitle: "Tworzenie stron Next.js Wrocław — App Router, edge, premium",
    metaDescription:
      "Tworzenie stron Next.js we Wrocławiu i zdalnie. App Router, server components, edge na Vercel. Premium, headless e-commerce, panele klienta. Od 12 tys. zł.",
    h1: "Tworzenie stron Next.js. Wrocław i cała Polska.",
    lead:
      "Strony Next.js dla firm które chcą najszybszego web stacka dostępnego w 2026. Statyczny HTML na edge, server components, sub-200ms FCP globalnie. Next.js wybiera się gdy zależy Ci na wydajności, brandzie premium, integracjach z API albo własnym panelu pod stroną. Wtedy koszt produkcji zaczyna mieć sens.",
    intro: [
      "Tworzenie stron Next.js to mój główny stack od 2024 roku. Wrocław to baza (jestem tu pod adresem ul. Kurkowa 32/57), ale projekty robię zdalnie dla klientów z całej Polski i z zagranicy. Spotkanie kick-off online, staging review na Vercelu po każdym sprincie, demo per iteracja.",
      "Strony Next.js dzielą się u mnie na trzy klastry. Po pierwsze, strony firmowe premium dla brandów które potrzebują animacji i custom designu (ta kategoria zazębia się z [usługą nowoczesnych stron internetowych](/uslugi/nowoczesne-strony-internetowe)). Po drugie, strony content-first w setupie headless WP (panel WordPress + frontend Next.js, [osobna usługa](/uslugi/headless-wordpress)). Po trzecie, aplikacje webowe z własną logiką (konfiguratory, panele klienta).",
      "Konkretny przykład trzeciej kategorii: [konfigurator wyceny ogrodzeń dla niemieckiej firmy Galabau Darius](/projekty/galabau-darius). Klient wybiera słupki, panele, długość, dostaje wycenę i wysyła zapytanie. Pod spodem panel admina do zarządzania cennikami i zleceniami. Stack: Next.js 14, Clerk auth, Tailwind, deploy Vercel. Jeśli zastanawiasz się czy potrzebujesz Next.js zamiast WordPress, [kryteria decyzyjne opisałem w poście](/blog/next-js-15-vs-wordpress-2026).",
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
        q: "Robisz strony Next.js dla firm spoza Wrocławia?",
        a: "Tak. Większość projektów robię zdalnie. Wrocław to baza, ale klienci są z całej Polski oraz z Niemiec, Holandii i USA. Cały proces (kick-off, staging, demo) odbywa się przez Google Meet i preview deploys na Vercelu. Spotkanie na żywo we Wrocławiu możliwe, ale rzadko potrzebne.",
      },
      {
        q: "Ile kosztuje strona Next.js we Wrocławiu?",
        a: "Strona firmowa Next.js z designem i CMS to widełki 12 tys. zł (minimum) do 35 tys. zł (premium z animacjami, headless CMS, custom dashboard). Aplikacja z auth, bazą i panelem klienta zaczyna się od 25 tys. zł. Konkretną wycenę po kick-offie, w 24h. Pełen breakdown kosztów [opisałem w poście o cenach Next.js](/blog/ile-kosztuje-strona-na-next-js).",
      },
      {
        q: "Kiedy Next.js a kiedy WordPress?",
        a: "WordPress gdy strona to głównie treść (blog, oferta, kontakt). Next.js gdy aplikacja musi przetwarzać dane użytkownika, integrować się z API albo skalować ruch. Decyzję podejmujemy na warsztacie, nie z góry.",
      },
      {
        q: "Czy muszę mieć projekt graficzny?",
        a: "Nie. Robię też design w Figmie. Jeśli masz już brand i komponenty, użyję ich. Jeśli nie, projektuję od zera.",
      },
      {
        q: "Czy stronę da się potem edytować bez programisty?",
        a: "Treści tak (CMS jak Sanity albo Payload podłączam standardowo). Logikę biznesową nie, ale każdy moduł dokumentuję żeby kolejny developer mógł wejść na projekt bez archeologii.",
      },
      {
        q: "Co z performance?",
        a: "Każdy projekt mierzony Lighthouse i Core Web Vitals przed deployem. Cel: 90+ na wszystkich metrykach. Często osiągam 100. Live demo wydajności tej strony widzisz wyżej, w sekcji DevTools panel.",
      },
    ],
    cta: "Pogadajmy o stronie Next.js, 30 minut bez zobowiązań",
  },
  {
    slug: "aplikacje-react",
    title: "Aplikacje React",
    metaTitle: "Programista React — komponenty, panele, dashboardy",
    metaDescription:
      "Aplikacje React + Vite: dashboardy, panele klienta, design system shadcn/ui, TanStack Query, Vitest. Frontend do istniejącego backendu PHP/Java/Python.",
    h1: "React tam gdzie nie potrzeba SSR",
    lead:
      "React jest świetny gdy aplikacja działa za logowaniem albo nie ma wymagań SEO. Mniej narzutu Next.js, mniej kosztu hostingu, mniej decyzji do podjęcia po stronie infrastruktury.",
    intro: [
      "Robię React od 2020 roku. Większość projektów lab dostępnych na GitHubie to React: dashboardy, panele, real-time apps, sklepy edukacyjne. Część komercyjna, np. moduły do większych systemów, robiona również w React + Vite.",
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
        body: "Roadmapa na 4-8 tygodni z priorytetami. Co tydzień przegląd, klient widzi efekty.",
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
        a: "Tak, jako freelancer React. Stawka godzinowa od 220 zł netto, minimalny pakiet 20h. Faktura na koniec miesiąca.",
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
    metaTitle: "Wdrożenia AI w firmie — chatboty, RAG, automatyzacja",
    metaDescription:
      "Wdrożenia AI dla małych i średnich firm (5-50 osób): RAG na dokumentach, automatyzacja maili, generator treści. OpenAI + Anthropic Claude. POC w 2 tygodnie.",
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
        body: "Pipeline który pisze opisy produktów, posty, maile sprzedażowe pod styl marki. Promptowanie, walidacja, fallback na człowieka.",
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
        q: "Ile kosztuje wdrożenie AI w firmie?",
        a: "Proof of concept: od kilku tys. zł, bo to 2 tygodnie pracy na wąskim wycinku procesu. Produkcyjny chatbot RAG na dokumentach firmy albo automatyzacja maili: najczęściej 15-30 tys. zł. Do tego miesięczne koszty API i hostingu. Dokładna wycena po discovery, na którym zresztą odrzucam większość pomysłów, bo się nie zwrócą.",
      },
      {
        q: "Czy moje dane wyciekną do OpenAI?",
        a: "OpenAI i Anthropic domyślnie nie trenują modeli na danych przesyłanych przez API. Dla wrażliwych projektów hostuję modele open-source lokalnie albo na Azure OpenAI.",
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
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
