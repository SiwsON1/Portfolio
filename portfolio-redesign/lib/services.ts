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
    slug: "headless-wordpress",
    title: "Headless WordPress",
    metaTitle: "Headless WordPress — frontend Next.js, backend WordPress jako CMS",
    metaDescription:
      "Headless WordPress: WordPress zostaje jako CMS, frontend zastępuje Next.js. Szybkość Jamstack, edycja w panelu znanym każdemu redaktorowi. Migracja istniejących stron.",
    h1: "Headless WordPress — szybkość Next.js, edycja WordPress",
    lead:
      "Headless WordPress łączy najlepsze z dwóch światów: WordPress jako edytor treści (znany każdemu redaktorowi) plus Next.js jako frontend (szybki, SEO-friendly, deploy na CDN). Idealny dla firm które już mają redakcję pracującą na WP, ale chcą wydajności jak na Vercel.",
    intro: [
      "Headless WordPress to architektura w której WordPress zostaje, ale tylko jako backend. Treści wystawiasz przez REST API albo GraphQL (WPGraphQL), a frontend renderujesz w Next.js / Astro / Nuxt. Wynik: Lighthouse 95+, edge caching, edycja jak zawsze.",
      "Robię migracje istniejących stron WordPress na headless setup: backend zostaje (admin, edytor, role), frontend stawiany od zera w Next.js. Klient widzi to samo co dotąd, użytkownik dostaje 3x szybszą stronę. Szczegóły kosztów [w poście o migracji WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
    ],
    bullets: [
      {
        title: "WordPress jako CMS",
        body: "Klient edytuje w znanym panelu — Gutenberg, ACF, custom fields, role, multilanguage. Bez krzywej uczenia się.",
      },
      {
        title: "Next.js jako frontend",
        body: "ISR (Incremental Static Regeneration) — strony generowane na build, regenerowane on-demand po update'cie z WP webhookiem.",
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
      { step: "01", title: "Audyt WP", body: "Inwentarz custom post types, ACF, kategorii, planów, integracji. Co wymaga API exposure." },
      { step: "02", title: "Backend setup", body: "WPGraphQL + niezbędne pluginy ACF support, custom resolvers dla custom fields." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + WPGraphQL queries. Designy 1:1 z istniejącymi (lub od nowa)." },
      { step: "04", title: "Migracja + DNS", body: "WP backend pozostaje na starym hostingu, frontend na Vercel. DNS przełącza root domenę na Next.js." },
    ],
    faq: [
      { q: "Po co headless WordPress skoro WordPress sam działa?", a: "Wydajność — frontend na CDN ładuje się 2-5x szybciej niż renderowany przez PHP/MySQL z hostingu. SEO — Lighthouse 95+ wpływa na rankingi. Bezpieczeństwo — admin panel niewidoczny dla użytkowników, redukuje attack surface." },
      { q: "Ile kosztuje migracja na headless?", a: "Małe stronki (50-100 podstron): 15-25 tys. zł. Średnie (200-500 podstron + custom logic): 30-60 tys. Większe ze sklepem WooCommerce headless: od 50 tys." },
      { q: "Czy klient nadal sam edytuje?", a: "Tak. Wszystko w admin panelu WP jak zawsze. Po publikacji webhook triggerge ISR rebuild — strona aktualizuje się w ~30 sekund od save." },
      { q: "Jakie są ograniczenia?", a: "Niektóre pluginy WP (komentarze, formularze, gallery) wymagają migracji na Next-native odpowiedniki. Plus dwa hostingi (WP backend + Vercel frontend), choć backend może być na najtańszym shared." },
    ],
    cta: "Pogadajmy o migracji na headless WordPress",
  },
  {
    slug: "nowoczesne-strony-internetowe",
    title: "Nowoczesne strony internetowe",
    metaTitle: "Nowoczesne strony internetowe 2026 — Next.js, Jamstack, edge",
    metaDescription:
      "Nowoczesne strony www w 2026: Next.js, server components, edge functions, dynamic OG, schema.org, Core Web Vitals 95+. Standardy które robią różnicę vs typowy WordPress.",
    h1: "Nowoczesne strony internetowe — co znaczy 2026",
    lead:
      "Nowoczesna strona w 2026 to nie tylko design. To stack technologiczny który wykorzystuje serverless, edge computing, schema dla LLM-ów (ChatGPT, Perplexity), Core Web Vitals 95+ i architekturę gotową na trzy lata wprzód.",
    intro: [
      "Stawiam strony w stacku Next.js 16 / React 19 / TypeScript / Tailwind 4 / Vercel edge. To samo co używa Vercel u siebie, OpenAI dla chat.openai.com, większość Awwwards SOTY 2025-2026. Daje 3x szybsze LCP, 5x mniejszy bundle, automatyczne OG images, native server components.",
      "Sprawdź [pełny post o tym jaką technologię wybrać dla strony firmowej w 2026](/blog/strona-firmowa-2026-jaka-technologia) jeśli zastanawiasz się nad wyborem stosu.",
    ],
    bullets: [
      {
        title: "Server + edge",
        body: "RSC + ISR + edge functions. Krytyczna treść statyczna, dynamic data on-demand. CDN globalny." ,
      },
      {
        title: "Lighthouse 95+",
        body: "Standard, nie cel. Każda strona z LCP <1.5s, INP <100ms, CLS <0.05. Mierzone w produkcji.",
      },
      {
        title: "Schema dla LLM",
        body: "Person, Service, Article, FAQPage, BreadcrumbList. ChatGPT/Perplexity cytują strony z dobrym JSON-LD.",
      },
      {
        title: "OG images dynamic",
        body: "next/og generuje obrazy social sharing per post. Każdy URL ma własny screenshot do FB/LinkedIn.",
      },
    ],
    process: [
      { step: "01", title: "Discovery + benchmarks", body: "Audyt obecnej (jeśli jest) + 3 referencje docelowe. Mierzymy baseline wydajności." },
      { step: "02", title: "Design + tokens", body: "Design system w Figma → Tailwind tokens → komponenty. Spójność end-to-end." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router, Sanity/Contentful jako CMS, Vercel preview deploys per PR." },
      { step: "04", title: "Performance + SEO", body: "Lighthouse audit per route, schema, OG, sitemap, Search Console." },
    ],
    faq: [
      { q: "Czym różni się 'nowoczesna' od 'zwykłej' strony?", a: "Stack: server components zamiast client-only, edge zamiast origin server, schema dla LLM zamiast tylko Google, optymalizacja LCP <1.5s zamiast 'jakkolwiek'." },
      { q: "Czy klient nadal edytuje sam?", a: "Tak — Sanity, Contentful albo headless WordPress jako CMS. Edytuje w panelu, frontend regeneruje się automatycznie." },
      { q: "Ile kosztuje?", a: "Strona firmowa nowoczesna: 15-30 tys. zł. Bardziej rozbudowana z customową logiką: 30-60 tys. Aplikacja: od 50 tys. wzwyż." },
      { q: "Czy WordPress nie wystarczy?", a: "Wystarczy do większości stron firmowych. Ale dla biznesu który stawia na wzrost ruchu organicznego, AI search visibility i performance (e-commerce, news, content-heavy sites), nowoczesny stack daje 30-200% przewagi." },
    ],
    cta: "Zobacz live demo nowoczesnego stacku",
  },
  {
    slug: "nowoczesna-strona-firmowa-2026",
    title: "Nowoczesna strona firmowa 2026",
    metaTitle: "Strona firmowa 2026 — jaka technologia, design, SEO, koszty",
    metaDescription:
      "Co składa się na nowoczesną stronę firmową w 2026: Next.js + headless CMS + animacje WebGL + AI search optimization + Core Web Vitals 95+. Konkretne koszty i terminy.",
    h1: "Strona firmowa 2026 — czego oczekują klienci",
    lead:
      "Strona firmowa w 2026 nie wygląda jak ta z 2020. Klient odwiedza Cię z telefonem, czyta przez ChatGPT, scrolluje przez 3 sekundy decydując czy zostaje. Standardy zmieniły się od strony i designu, i SEO, i wydajności.",
    intro: [
      "Robię nowoczesne strony firmowe od 2024 roku w stacku Next.js 16 + custom design + headless CMS. To samo podejście co u największych Awwwards SOTY winners — Lusion, ActiveTheory, Klaassens. Ale dostosowane budżetowo do polskich małych i średnich firm (15-30 tys. zł, nie 200 tys.).",
      "Co konkretnie jest 'nowoczesne' w 2026: server components zamiast SPA, dynamic OG images per route, FAQPage schema dla AI search, Core Web Vitals 95+ jako baseline, animacje GSAP/R3F jako differentiator, page transitions, custom cursor, dark mode native.",
    ],
    bullets: [
      {
        title: "Mobile-first 70/30",
        body: "70% Twoich klientów wchodzi z telefonu. Mobile design pierwszy, desktop sekund. LCP <2s na 4G.",
      },
      {
        title: "AI search ready",
        body: "Schema.org Person+Organization+Service+FAQPage+Article. ChatGPT/Perplexity cytują Twoją firmę kiedy klient szuka.",
      },
      {
        title: "Animacje z umiarem",
        body: "GSAP scroll triggers, custom cursor, page transitions. Wzmacniają brand bez śmieci CPU. Reduced motion respect.",
      },
      {
        title: "Edycja bez kodu",
        body: "Sanity Studio — kliknięcia w panelu, real-time preview, multi-user editing. Brak FTP, brak HTML.",
      },
    ],
    process: [
      { step: "01", title: "Strategia", body: "30-min discovery: kto, dla kogo, jaka konwersja, jakie frazy SEO. Brief w 24h." },
      { step: "02", title: "Design", body: "Moodboard → makiety Figma → custom design system → animacje protoype." },
      { step: "03", title: "Wdrożenie", body: "Next.js App Router + Sanity CMS + Vercel deploy. Staging od dnia 3." },
      { step: "04", title: "Launch", body: "Migracja DNS bez przerwy, schema, sitemap, GA4, Search Console, opieka 60 dni." },
    ],
    faq: [
      { q: "Czym strona 2026 różni się od strony 2022?", a: "Stack: RSC zamiast SPA. SEO: schema dla LLM zamiast tylko Google. Performance: LCP <1.5s baseline (vs 3-4s typowo). UX: page transitions, custom cursor, dark mode. AI: visibility w ChatGPT/Perplexity." },
      { q: "Ile czasu zajmuje wdrożenie?", a: "Strona wizytówka: 3-4 tygodnie. Strona firmowa z usługami i blogiem: 5-8 tygodni. Aplikacja z konfiguratorem: 8-16 tygodni." },
      { q: "Co jeśli już mam stronę?", a: "Robię migrację. Stare URL-e przekierowuję 301 na nowe (zachowując rankingi SEO), treści przenoszę do CMS, design refreshuję." },
      { q: "Czy AI search ma sens dla mojej branży?", a: "Tak. ChatGPT/Perplexity rosną o 100% YoY w PL od 2024. Klienci z B2B i lokalnymi usługami coraz częściej zaczynają od AI zamiast Google." },
    ],
    cta: "Zacznij od bezpłatnego briefu",
  },
  {
    slug: "next-js-software-house",
    title: "Next.js software house",
    metaTitle: "Next.js software house — outsourcing developer Next.js, React, AI",
    metaDescription:
      "Solo Next.js dev jako micro software house. Pełne wdrożenia Next.js 16, React 19, TypeScript, AI integration, headless CMS. Bez koszt projektu menedżera, bez agencji.",
    h1: "Solo Next.js — micro software house dla startupów i SME",
    lead:
      "Software house bez software house. Jeden dev (ja) + Twój brief = aplikacja Next.js w 4-12 tygodni. Bez project managera w środku, bez 30% marży agencji, bez handover między 4 ludźmi. Komunikacja bezpośrednia, decyzje natychmiast.",
    intro: [
      "Większość polskich agencji Next.js liczy 30-50 ludzi: PM, BA, designer, frontend, backend, QA, devops. Cena: 350-500 zł/h. Ja jeden dev z 6-letnim stage'em w stacku — 220-280 zł/h, mniej narzutu organizacyjnego, ten sam kod end-to-end. Idealne dla MVP i mid-size aplikacji.",
      "Robiłem aplikacje pod stack: Next.js 16, React 19, TypeScript, Tailwind, GSAP/R3F, Sanity/Contentful CMS, Postgres+Prisma, Clerk/NextAuth, Stripe, AI (OpenAI, Claude). Pełen full-stack od bazy do animacji.",
    ],
    bullets: [
      {
        title: "MVP w 4-6 tygodni",
        body: "Próba walidacji pomysłu. Logowanie + 3-5 features + płatności. Deploy Vercel od dnia 1.",
      },
      {
        title: "Mid-size apps",
        body: "Konfiguratory, panele B2B, marketplace lite. 8-16 tygodni, dokumentacja + testy + monitoring.",
      },
      {
        title: "AI-augmented",
        body: "RAG na dokumentach, chatboty, generowanie treści. OpenAI + Anthropic API + vector DB.",
      },
      {
        title: "Maintainable code",
        body: "TypeScript strict, ESLint, Prettier, conventional commits. Następny dev wchodzi bez archeologii.",
      },
    ],
    process: [
      { step: "01", title: "Brief + estymacja", body: "Workshop 1h: user stories, MVP scope, must-have vs nice-to-have. Estymacja w 24h." },
      { step: "02", title: "Sprint 1: szkielet", body: "Setup repo, design system, auth, podstawowe routes. Klient widzi staging." },
      { step: "03", title: "Iteracje 2-tygodniowe", body: "Demo każdego sprintu, feedback, adjustments. Zero surprise na końcu." },
      { step: "04", title: "Launch + maintenance", body: "Production deploy, monitoring (Sentry), runbook, opcjonalna opieka miesięczna." },
    ],
    faq: [
      { q: "Solo dev = ryzyko bus factor?", a: "Mitigowane przez: pełną dokumentację, kod w GitHub klienta od dnia 1, comment-heavy code, video walkthrough na koniec. Jakikolwiek dev Next.js wejdzie po mnie bez problemu." },
      { q: "Co z designem jeśli nie mam designera?", a: "Robię też design w Figma (mam 6 lat doświadczenia). Albo współpracuję z freelancem designerem (znam kilku top w PL)." },
      { q: "Stawka godzinowa czy ryczałt?", a: "Wybór klienta. Ryczałt: lepsza predyktywność, +15% buffer na unknown unknowns. Stawka godzinowa (220-280 zł): pełna transparentność, faktura per miesiąc z timesheetem." },
      { q: "Czy mogę zatrudnić Cię na long-term?", a: "Tak. Najczęstsza forma: 60-100h/miesiąc retainer. Cena retainerowa niższa od godzinowej." },
    ],
    cta: "Workshop produktowy 1h — bezpłatny",
  },
  {
    slug: "strony-jamstack",
    title: "Strony Jamstack",
    metaTitle: "Strony Jamstack — JavaScript, API, Markup. Architektura nowych stron",
    metaDescription:
      "Jamstack: pre-rendered HTML, dynamic via API, deploy na CDN. Next.js + Sanity + Vercel = stack 2026. Najszybsze strony jakie da się dziś zrobić.",
    h1: "Strony Jamstack — szybkość statyki, dynamika SPA",
    lead:
      "Jamstack (JavaScript + APIs + Markup) to architektura w której strona jest w 90% statyczna (pre-rendered HTML na CDN) ale dynamika przychodzi przez API. Najszybsza możliwa konfiguracja webowa w 2026 — strony ładują się w <1s globalnie.",
    intro: [
      "Stawiam strony w architekturze Jamstack od 2022. Stack docelowy: Next.js (frontend) + Sanity/Contentful (CMS) + Vercel (CDN+edge functions) + zewnętrzne APIs (Stripe, OpenAI, Algolia). Wszystko cached, wszystko serverless. Pełen przewodnik [w poście Jamstack co to jest](/blog/jamstack-co-to-jest).",
      "Idealne dla: blogów, marketing sites, landing pages, e-commerce katalogowych, serwisów contentowych. Mniej idealne dla: real-time chatów, wewnętrznych dashboardów z hot data, SaaS z wysoką dynamiką per-user.",
    ],
    bullets: [
      {
        title: "CDN deploy globalny",
        body: "Plik HTML serwowany z najbliższego edge node (Vercel ma 100+, Cloudflare 300+). Lokacja użytkownika nie spowalnia.",
      },
      {
        title: "Build-time pre-render",
        body: "Next.js generuje HTML przy build, nie przy request. Brak wait for DB. ISR regeneruje gdy treść się zmienia.",
      },
      {
        title: "Headless CMS",
        body: "Sanity / Contentful / Strapi jako edycja. API zwraca JSON, frontend renderuje. Multiple frontendów na jednych danych.",
      },
      {
        title: "Edge functions dla dynamiki",
        body: "Loginy, formularze, personalizacja — wszystko jako edge functions (Vercel/Cloudflare Workers). Nadal sub-100ms response.",
      },
    ],
    process: [
      { step: "01", title: "Architektura", body: "Mapa: co statyczne (90%), co dynamiczne (10%). Wybór CMS + payment + auth provider." },
      { step: "02", title: "CMS setup", body: "Schema w Sanity Studio. Custom fields, relacje, role redakcyjne. Live preview." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + edge functions dla auth/forms. Design + animacje." },
      { step: "04", title: "Deploy + monitoring", body: "Vercel preview per PR, production za 1-click. Sentry, Analytics, Search Console." },
    ],
    faq: [
      { q: "Jaka różnica między Jamstack a tradycyjnym WordPress?", a: "WordPress: każdy request → PHP → MySQL → HTML. Jamstack: HTML już gotowy na CDN, request = sam pobranie. 5-50x szybsze." },
      { q: "Ile kosztuje strona Jamstack?", a: "Mała (do 50 podstron + blog): 12-25 tys. zł. Średnia (200+ stron, custom logic): 25-50 tys. Większa z e-commerce: od 50 tys." },
      { q: "Co jeśli mam już WordPress?", a: "Robię migracje WordPress → Jamstack. WP zostaje jako headless CMS (opcjonalnie) lub przenoszę do Sanity. URL-e zachowywane przez 301." },
      { q: "Czy SEO działa tak samo?", a: "Lepiej. HTML pre-rendered = Google indexuje natychmiast. Schema.org + Core Web Vitals 95+ = wyższe rankingi vs typowy WP." },
    ],
    cta: "Sprawdź czy Jamstack to dla Ciebie",
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
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
