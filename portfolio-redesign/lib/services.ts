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
      "WordPress wybiera się, gdy klient chce sam edytować treści bez zaglądania do kodu. Zrobiony dobrze, jest szybki, bezpieczny i indeksowalny. Zrobiony źle, muli, łapie malware i wygląda jak 800 innych stron z Elementora.",
    intro: [
      "Stawiam WordPressy od 2020 roku. Zrobiłem ponad 25 wdrożeń WordPress: kancelarie, hotele, sklepy WooCommerce, portfolio prywatne. Za każdym razem ten sam zestaw: własny motyw, niezbędne minimum wtyczek, Yoast albo Rank Math i LiteSpeed Cache. Bez gotowych motywów typu Avada/Divi, które dokładają setki kilobajtów zbędnego JavaScriptu.",
      "Konkretne realizacje WordPressowe znajdziesz w [pełnej liście projektów](/projekty), m.in. [Kancelaria Maria Piontek](/projekty/kancelaria-mpiontek), [INBC broker ubezpieczeniowy](/projekty/inbc), [RCOM Service](/projekty/rcom-service). Sklep internetowy WooCommerce to osobna usługa, [opisana tutaj](/uslugi/sklepy-internetowe-woocommerce).",
    ],
    bullets: [
      {
        title: "Własny motyw, nie gotowiec",
        body: "Każdy projekt na własnym motywie. W kodzie jest tylko to, czego używasz. Lighthouse 95+ w standardzie, bez 50 nieużywanych bloków sekcji z Elementora.",
      },
      {
        title: "Edycja 1:1 z designem",
        body: "ACF Pro lub Bricks Builder dla pól dynamicznych. Klient widzi w panelu te same nazwy sekcji co na stronie. Bez chaosu z Gutenbergiem.",
      },
      {
        title: "Bezpieczeństwo w standardzie",
        body: "Wordfence, ograniczenia logowania, logowanie dwuskładnikowe, automatyczne kopie zapasowe w osobnym miejscu, nagłówki bezpieczeństwa w .htaccess.",
      },
      {
        title: "SEO od pierwszego dnia",
        body: "Yoast lub Rank Math, schema.org Person/Service/Article, sitemap, optymalizacja Core Web Vitals, integracja z Search Console.",
      },
    ],
    process: [
      { step: "01", title: "Brief i wycena", body: "30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h." },
      { step: "02", title: "Projekt graficzny", body: "Makiety w Figmie. Klient akceptuje design przed rozpoczęciem kodu." },
      { step: "03", title: "Programowanie", body: "Własny motyw od zera, ACF do pól edytowalnych, praca lokalnie i na wersji testowej." },
      { step: "04", title: "Optymalizacja", body: "Core Web Vitals, schema, sitemap, robots, Search Console. Lighthouse 95+." },
      { step: "05", title: "Wdrożenie + szkolenie", body: "Migracja na produkcję bez przerwy. 30-min szkolenie z edycji w panelu." },
    ],
    faq: [
      { q: "Ile kosztuje strona WordPress?", a: "Wycena zależy od zakresu wizytówki lub strony usługowej, liczby podstron, bloga i customowej logiki. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Dlaczego nie używasz Avada / Divi / Elementor?", a: "Bo dokładają 200-400 KB JavaScriptu do każdej podstrony, spowalniają ją, utrudniają utrzymanie i sprawiają, że strony wyglądają podobnie. Własny motyw daje lepsze wyniki i stronę, która nie wygląda jak wszystkie inne." },
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
      "WooCommerce robi 30% sklepów online na świecie. Działa, jest tani, integruje się ze wszystkim, czego potrzebujesz w polskim e-commerce. Wymaga jednak osoby, która wie, jak go skonfigurować pod konwersję, nie tylko jak go zainstalować.",
    intro: [
      "Najnowsze wdrożenie sklepu WooCommerce: [Kosmoteka](/projekty/kosmoteka), sklep z teleskopami i sprzętem obserwacyjnym, z kompletnymi integracjami płatności i wysyłki, optymalizacją Core Web Vitals i SEO. Wcześniej kilka mniejszych sklepów, głównie branża meblowa i odzieżowa, m.in. [LumiKids](/projekty/lumikids).",
      "WooCommerce wybiera się, gdy budżet jest ograniczony, klient chce edycji bez programisty, a integracje z polskim ekosystemem (Przelewy24, InPost, Allegro) są kluczowe. Dla większych sklepów (1000+ SKU, multistore, headless) sugeruję inne technologie. Jeśli zastanawiasz się, czy WooCommerce wystarczy, [opisałem kryteria w poście](/blog/next-js-15-vs-wordpress-2026).",
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
        title: "Wydajność",
        body: "LiteSpeed cache + Cloudflare CDN. Koszyk AJAX, leniwe ładowanie zdjęć produktów, optymalizacja zapytań do bazy. Cel: poniżej 2s LCP nawet przy 1000+ produktach.",
      },
      {
        title: "B2B i wersje językowe",
        body: "Cenniki per grupa klientów (B2B i B2C), minimalne wielkości zamówień, produkty widoczne tylko dla wybranych grup. Polylang/WPML dla wersji obcojęzycznych.",
      },
    ],
    process: [
      { step: "01", title: "Warsztat produktowy", body: "Mapa produktów, kategorie, atrybuty, integracje, model rozliczeń, polityki sklepu." },
      { step: "02", title: "Design + UX", body: "Makiety katalogu, karty produktu, koszyka i zamówienia. Najpierw wersja na telefon." },
      { step: "03", title: "Wdrożenie WooCommerce", body: "Custom theme, konfiguracja produktów, integracje płatności i wysyłki, podatki." },
      { step: "04", title: "Testy + GA4", body: "Testowanie zamówień end-to-end, GA4 enhanced ecommerce, Pixel, conversion tracking." },
      { step: "05", title: "Start + opieka", body: "Migracja produktów ze starego sklepu (jeśli jest), opieka miesięczna z monitoringiem." },
    ],
    faq: [
      { q: "Ile kosztuje sklep WooCommerce?", a: "Wycena zależy od liczby produktów, integracji, obsługi B2B, wersji językowych oraz architektury headless lub multistore. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa wdrożenie sklepu WooCommerce?", a: "Mniejszy sklep: 6-8 tygodni od warsztatu do startu sprzedaży. Średni z B2B, wersjami językowymi i migracją produktów: 10-14 tygodni. Termin blokuję w kalendarzu przy podpisaniu oferty." },
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
      "Headless WordPress łączy edytor treści WordPressa (znany każdemu redaktorowi) z frontendem w Next.js (szybki, SEO-friendly, deploy na CDN). Dobry wybór dla firm, które mają redakcję pracującą w WordPressie, a potrzebują szybkości strony statycznej.",
    intro: [
      "Headless WordPress to architektura, w której WordPress zostaje, ale tylko jako backend. Treści wystawiasz przez REST API albo GraphQL (WPGraphQL), a frontend renderujesz w Next.js / Astro / Nuxt. Wynik: Lighthouse 95+, edge caching, edycja jak zawsze.",
      "Przenoszę istniejące strony WordPress na architekturę headless: panel zostaje (administracja, edytor, role), a frontend powstaje od zera w Next.js. Klient widzi to samo co dotąd, użytkownik dostaje 3x szybszą stronę. Szczegóły kosztów [w poście o migracji WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
    ],
    bullets: [
      {
        title: "WordPress jako CMS",
        body: "Klient edytuje w znanym panelu: Gutenberg, ACF, własne pola, role, wersje językowe. Nie trzeba uczyć się nowego panelu.",
      },
      {
        title: "Next.js jako frontend",
        body: "ISR (Incremental Static Regeneration): strony generowane przy budowaniu i odświeżane na żądanie, gdy WordPress wyśle webhook po zmianie treści.",
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
      { step: "02", title: "Przygotowanie backendu", body: "WPGraphQL + niezbędne pluginy ACF, własne resolvery dla pól dynamicznych." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + WPGraphQL queries. Designy 1:1 z istniejącymi (lub od nowa)." },
      { step: "04", title: "Migracja + DNS", body: "WP backend pozostaje na starym hostingu, frontend na Vercel. DNS przełącza root domenę na Next.js." },
    ],
    faq: [
      { q: "Co to jest headless WordPress?", a: "Architektura, w której WordPress działa tylko jako zaplecze do edycji treści (headless CMS), a stronę renderuje osobny frontend, najczęściej Next.js. Treści lecą przez REST API albo WPGraphQL, użytkownik dostaje gotowy HTML z CDN." },
      { q: "Po co headless WordPress skoro WordPress sam działa?", a: "Wydajność: frontend na CDN ładuje się 2-5x szybciej niż renderowany przez PHP/MySQL z hostingu. SEO: Lighthouse 95+ wpływa na rankingi. Bezpieczeństwo: admin panel niewidoczny dla użytkowników, redukuje attack surface." },
      { q: "Ile kosztuje migracja na headless?", a: "Wycena zależy od liczby podstron, customowej logiki i połączenia ze sklepem WooCommerce headless. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Czy klient nadal sam edytuje?", a: "Tak. Wszystko w admin panelu WP jak zawsze. Po publikacji webhook wyzwala rebuild ISR i strona aktualizuje się w ~30 sekund od zapisu." },
      { q: "Ile trwa migracja na headless WordPress?", a: "Mała strona: 4-6 tygodni. Średnia z customową logiką: 8-12 tygodni. Nowy frontend powstaje równolegle do działającej strony, więc przez cały czas migracji stara wersja normalnie pracuje." },
      { q: "Jakie są ograniczenia?", a: "Niektóre pluginy WP (komentarze, formularze, gallery) wymagają odpowiedników po stronie Next.js. Plus dwa hostingi (WP backend + Vercel frontend), choć backend może stać na najtańszym współdzielonym." },
    ],
    cta: "Pogadajmy o migracji na headless WordPress",
  },
  {
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
  },
  {
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
  },
  {
    slug: "next-js-software-house",
    title: "Next.js software house",
    metaTitle: "Outsourcing Next.js — micro software house dla SaaS",
    metaDescription:
      "Outsourcing Next.js bez agencji: stała współpraca 60-100 h miesięcznie albo MVP w 4-12 tygodni. Bez kierownika projektu i marży pośrednika. Next.js, React, AI.",
    h1: "Solo Next.js — micro software house dla startupów i SME",
    lead:
      "Robię to, co software house, tylko sam. Z Twojego briefu powstaje aplikacja Next.js w 4-12 tygodni. Bez project managera pośrodku, bez 30% marży agencji i bez przekazywania projektu między czterema osobami. Komunikacja bezpośrednia, decyzje od ręki.",
    intro: [
      "Większość polskich agencji Next.js liczy 30-50 ludzi: PM, BA, designer, frontend, backend, QA, devops. U mnie jest jedna osoba z sześcioletnim stażem w tych technologiach: mniej narzutu organizacyjnego i ten sam człowiek od bazy danych po interfejs. Sprawdza się przy MVP i aplikacjach średniej wielkości.",
      "Robiłem aplikacje pod stack: Next.js 16, React 19, TypeScript, Tailwind, GSAP/R3F, Sanity/Contentful CMS, Postgres+Prisma, Clerk/NextAuth, Stripe, AI (OpenAI, Claude). Pełen full-stack od bazy do animacji.",
    ],
    bullets: [
      {
        title: "MVP w 4-6 tygodni",
        body: "Do walidacji pomysłu. Logowanie + 3-5 funkcji + płatności. Deploy na Vercel od pierwszego dnia.",
      },
      {
        title: "Aplikacje średniej skali",
        body: "Konfiguratory, panele B2B, mniejsze marketplace'y. 8-16 tygodni, dokumentacja + testy + monitoring.",
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
      { step: "01", title: "Brief i wycena", body: "Warsztat 1h: historyjki użytkownika, zakres MVP, co konieczne, a co można dodać później. Wycena w 24h." },
      { step: "02", title: "Sprint 1: szkielet", body: "Repozytorium, design system, logowanie, podstawowe podstrony. Klient dostaje link do wersji testowej." },
      { step: "03", title: "Iteracje 2-tygodniowe", body: "Demo każdego sprintu, feedback, poprawki. Zero niespodzianek na końcu." },
      { step: "04", title: "Start + utrzymanie", body: "Deploy produkcyjny, monitoring (Sentry), instrukcja obsługi, opcjonalna opieka miesięczna." },
    ],
    faq: [
      { q: "Jeden wykonawca to ryzyko. Co jeśli wypadniesz?", a: "Ograniczam je tak: pełna dokumentacja, kod w repo klienta od pierwszego dnia, komentarze w kodzie, wideo z omówieniem architektury na koniec. Jakikolwiek dev Next.js wejdzie po mnie bez problemu." },
      { q: "Co z designem jeśli nie mam designera?", a: "Robię też projekty graficzne w Figmie. Mogę też pracować z niezależnym projektantem, znam kilku bardzo dobrych w Polsce." },
      { q: "Stawka godzinowa czy ryczałt?", a: "Wybór klienta. Ryczałt daje przewidywalny budżet, a stawka godzinowa pełną transparentność i fakturę co miesiąc z zestawieniem godzin. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Czy mogę zatrudnić Cię na dłużej?", a: "Tak. Najczęściej to stały pakiet 60-100 godzin miesięcznie, rozliczany taniej niż pojedyncze godziny." },
    ],
    cta: "Bezpłatny warsztat produktowy, 1 godzina",
  },
  {
    slug: "strony-jamstack",
    title: "Strony Jamstack",
    metaTitle: "Strony Jamstack — pre-rendered HTML, edge, headless CMS",
    metaDescription:
      "Strony Jamstack: HTML generowany przy budowaniu, serwowany z CDN, dynamika przez funkcje edge. Next.js, Sanity i Vercel. Ładowanie poniżej sekundy na świecie.",
    h1: "Strony Jamstack — szybkość statyki, dynamika SPA",
    lead:
      "Jamstack (JavaScript + APIs + Markup) to architektura, w której strona jest w 90% statyczna (gotowy HTML na CDN), a dynamika przychodzi przez API. Najszybsza możliwa konfiguracja webowa w 2026: strony ładują się w <1s globalnie.",
    intro: [
      "Stawiam strony w architekturze Jamstack od 2022. Stack docelowy: Next.js (frontend) + Sanity/Contentful (CMS) + Vercel (CDN+edge functions) + zewnętrzne APIs (Stripe, OpenAI, Algolia). Wszystko w cache, bez własnego serwera do utrzymania. Pełen przewodnik [w poście Jamstack co to jest](/blog/jamstack-co-to-jest).",
      "Pasuje do blogów, stron marketingowych, landingów, katalogów e-commerce i serwisów z treścią. Gorzej pasuje do czatów na żywo, wewnętrznych paneli z danymi na żywo, SaaS-ów z treścią zmienną per użytkownik.",
    ],
    bullets: [
      {
        title: "Globalny deploy na CDN",
        body: "Plik HTML serwowany z najbliższego węzła edge (Vercel ma 100+, Cloudflare 300+). Lokalizacja użytkownika przestaje mieć znaczenie.",
      },
      {
        title: "Pre-render przy buildzie",
        body: "Next.js generuje HTML przy buildzie, nie przy wejściu użytkownika. Zero czekania na bazę danych. ISR regeneruje strony, gdy treść się zmienia.",
      },
      {
        title: "Headless CMS",
        body: "Sanity / Contentful / Strapi jako edycja. API zwraca JSON, frontend renderuje. Kilka frontendów może jechać na tych samych danych.",
      },
      {
        title: "Dynamika przez edge functions",
        body: "Loginy, formularze, personalizacja: wszystko jako edge functions (Vercel/Cloudflare Workers). Odpowiedź nadal poniżej 100 ms.",
      },
    ],
    process: [
      { step: "01", title: "Architektura", body: "Mapa: co statyczne (90%), co dynamiczne (10%). Wybór CMS + payment + auth provider." },
      { step: "02", title: "Konfiguracja CMS", body: "Schemat treści w Sanity Studio. Pola, relacje, role redakcyjne. Podgląd na żywo." },
      { step: "03", title: "Frontend Next.js", body: "App Router + ISR + edge functions dla auth/forms. Design + animacje." },
      { step: "04", title: "Deploy + monitoring", body: "Vercel preview per PR, produkcja jednym kliknięciem. Sentry, Analytics, Search Console." },
    ],
    faq: [
      { q: "Jaka różnica między Jamstack a tradycyjnym WordPress?", a: "WordPress przy każdym wejściu odpala PHP i MySQL, żeby złożyć HTML. W Jamstacku gotowy HTML leży na CDN, a zapytanie to samo pobranie pliku. Od 5 do 50 razy szybciej." },
      { q: "Ile kosztuje strona Jamstack?", a: "Wycena zależy od liczby podstron, bloga, customowej logiki oraz zakresu e-commerce. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa wdrożenie strony Jamstack?", a: "Mała strona z blogiem: 3-5 tygodni. Średni serwis z CMS i customowymi widokami: 6-10 tygodni. Deploy na produkcję jest jednym kliknięciem, więc start nie wymaga okna serwisowego." },
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
      "Hub usług webowych dla firm. Jeśli wiesz, że chcesz stronę, ale nie wiesz, w jakiej technologii, zaczynamy tu. Jeśli wiesz, że [WordPress](/uslugi/tworzenie-stron-wordpress) albo [Next.js](/uslugi/aplikacje-nextjs), idź od razu do specyficznej usługi. Sklep online: [WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
    intro: [
      "Tworzeniem stron www zajmuję się od 2020 roku. Sześć lat tworzenia stron internetowych, ponad 30 wdrożeń: hotele, kancelarie, sklepy, restauracje, lokalne usługi. Działam jako freelancer, nie agencja: bez narzutu na PM-ów i handlowców, rozmawiasz bezpośrednio z osobą, która pisze kod. Większość klientów wraca po kolejne projekty albo poleca dalej. Konkretne realizacje znajdziesz w [pełnej liście projektów](/projekty), a aktualne ceny rozłożyłem w [poście o cenach stron www](/blog/ile-kosztuje-strona-www-2026).",
      "Stronę projektuję najpierw na papierze, potem w Figmie, dopiero na końcu w kodzie. Tak unikam wracania trzy razy do tego samego ekranu i klient wie, co dostanie, zanim cokolwiek zaczniemy programować. Stack dobieram zawsze po briefie, nie z góry. Decyzja idzie po dwóch pytaniach: kto będzie edytował treści i jak skomplikowana jest logika strony.",
      "Najczęstsze ścieżki: lokalna firma usługowa z blogiem to WordPress. Marka z wyższej półki albo aplikacja z panelem klienta to Next.js. E-commerce z polskimi integracjami to WooCommerce. Headless, gdy redakcja chce panelu WP, a marketing chce wydajności Vercela.",
    ],
    bullets: [
      {
        title: "Dwa stacki, jedna jakość",
        body:
          "Prosty serwis informacyjny robię na WordPressie, bo łatwiej go potem edytować. Aplikację z konfiguratorem, panelem klienta albo integracją API piszę w Next.js, bo wytrzyma rozbudowę.",
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
        body: "Lighthouse 90+ na mobile przed oddaniem, sprawdzanie na realnych urządzeniach, migracja na produkcję. SSL, sitemap, Search Console.",
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
        a: "Wycena zależy od zakresu wizytówki lub strony usługowej, liczby podstron, bloga, SEO, technologii i customowej logiki. Wycena zawsze indywidualna po briefie.",
      },
      {
        q: "Ile trwa wdrożenie?",
        a: "Strona prosta 2-3 tygodnie. Strona usługowa 4-6 tygodni. Aplikacja: ustalamy termin po briefie, zwykle 6-12 tygodni.",
      },
      {
        q: "Co jeśli klient ma już domenę i hosting?",
        a: "Idealnie. Migrację robię bez przerwy w działaniu, klient nawet nie zauważy, że coś się zmieniło.",
      },
      {
        q: "Czy będę mógł sam edytować treści?",
        a: "Tak. WordPress dostaje panel z edycją sekcji 1:1 z designem. Next.js, jeśli zachodzi potrzeba CMS, podłączam Sanity albo Strapi.",
      },
      {
        q: "Czy strona będzie responsywna?",
        a: "Każda strona idzie pod 3 breakpointy: telefon, tablet, desktop. Testuję na realnych urządzeniach, nie tylko w narzędziach przeglądarki.",
      },
    ],
    cta: "Napisz brief, dostaniesz wycenę w 24h",
  },
  {
    slug: "aplikacje-nextjs",
    title: "Tworzenie stron Next.js",
    metaTitle: "Tworzenie stron Next.js Wrocław — App Router, edge, premium",
    metaDescription:
      "Tworzenie stron Next.js we Wrocławiu i zdalnie. App Router, server components, edge na Vercel. Premium, headless e-commerce, panele klienta.",
    h1: "Tworzenie stron Next.js. Wrocław i cała Polska.",
    lead:
      "Strony Next.js dla firm, które chcą najszybszej technologii webowej dostępnej w 2026 roku. Statyczny HTML z serwerów edge, server components, pierwsze wyświetlenie poniżej 200 ms niezależnie od tego, skąd wchodzi użytkownik. Next.js wybiera się, gdy zależy Ci na wydajności, dopracowanym wizerunku, integracjach z API albo własnym panelu pod stroną. Wtedy wyższy koszt produkcji się broni.",
    intro: [
      "Tworzenie stron Next.js to od 2024 roku mój główny obszar pracy. Bazę mam we Wrocławiu (ul. Kurkowa 32/57), ale pracuję zdalnie dla klientów z całej Polski i z zagranicy. Spotkanie startowe robimy online, a po każdym sprincie dostajesz link do wersji testowej na Vercelu i krótkie demo tego, co przybyło.",
      "Projekty Next.js dzielą się u mnie na trzy grupy. Po pierwsze, strony firmowe premium dla marek, które potrzebują animacji i designu szytego na miarę (ta kategoria zazębia się z [usługą nowoczesnych stron internetowych](/uslugi/nowoczesne-strony-internetowe)). Po drugie, strony oparte na treści w modelu headless (panel WordPress + frontend Next.js, [osobna usługa](/uslugi/headless-wordpress)). Po trzecie, aplikacje webowe z własną logiką (konfiguratory, panele klienta).",
      "Konkretny przykład trzeciej kategorii: [konfigurator wyceny ogrodzeń dla niemieckiej firmy Galabau Darius](/projekty/galabau-darius). Klient wybiera słupki, panele, długość, dostaje wycenę i wysyła zapytanie. Pod spodem panel admina do zarządzania cennikami i zleceniami. Stack: Next.js 14, Clerk auth, Tailwind, deploy Vercel. Jeśli zastanawiasz się czy potrzebujesz Next.js zamiast WordPress, [kryteria decyzyjne opisałem w poście](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      {
        title: "App Router od początku",
        body: "Każdy projekt na najnowszym App Router. Server Components, Suspense, streaming, nawigacja bez przeładowań. Wszystko, co Next.js daje pod kątem wydajności.",
      },
      {
        title: "TypeScript bez wyjątków",
        body: "Cały kod w TS, włącznie z bazą i API. Mniej błędów w produkcji, bo większość wyłapuje kompilator jeszcze przed deployem.",
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
        title: "Warsztat produktowy",
        body: "Historyjki użytkownika, mapa funkcji, szkic ekranów. Ustalamy, co wchodzi do pierwszej wersji, a co może poczekać.",
      },
      {
        step: "02",
        title: "Architektura",
        body: "Modele danych, API, integracje, autoryzacja. Decyzje o strukturze danych zapadają, zanim zacznę pisać kod.",
      },
      {
        step: "03",
        title: "Iteracyjne wdrożenia",
        body: "Sprinty 2-tygodniowe, demo na koniec każdego, klient testuje na środowisku staging.",
      },
      {
        step: "04",
        title: "Produkcja",
        body: "Wdrożenie, testy działania, monitoring, dokumentacja. Klient dostaje instrukcję na typowe sytuacje.",
      },
    ],
    faq: [
      {
        q: "Robisz strony Next.js dla firm spoza Wrocławia?",
        a: "Tak. Większość projektów robię zdalnie. Wrocław to baza, ale klienci są z całej Polski oraz z Niemiec, Holandii i USA. Cały proces (spotkanie startowe, testy, demo) odbywa się przez Google Meet i linki podglądowe na Vercelu. Spotkanie na żywo we Wrocławiu jest możliwe, ale rzadko potrzebne.",
      },
      {
        q: "Ile kosztuje strona Next.js we Wrocławiu?",
        a: "Wycena zależy od designu, CMS, animacji, customowego dashboardu, uwierzytelniania, bazy i panelu klienta. Konkretną wycenę dostajesz w 24 godziny po pierwszej rozmowie. Pełen opis czynników kosztowych [znajdziesz w poście o cenach Next.js](/blog/ile-kosztuje-strona-na-next-js).",
      },
      {
        q: "Ile trwa wdrożenie strony Next.js?",
        a: "Strona firmowa: 4-8 tygodni od spotkania startowego do publikacji. Aplikacja z logowaniem i panelem klienta: 8-16 tygodni, w sprintach po 2 tygodnie z demo na koniec każdego. Terminy potwierdzam na wycenie, nie po fakcie.",
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
        a: "Treści tak (CMS jak Sanity albo Payload podłączam standardowo). Logiki biznesowej nie, ale każdy moduł dokumentuję, żeby kolejny developer mógł wejść w projekt bez archeologii.",
      },
      {
        q: "Co z szybkością strony?",
        a: "Każdy projekt mierzę Lighthouse i Core Web Vitals przed deployem. Cel: 90+ na wszystkich metrykach, często wychodzi 100. Wydajność tej strony możesz podejrzeć na żywo wyżej, w panelu DevTools.",
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
      "React jest świetny, gdy aplikacja działa za logowaniem albo nie ma wymagań SEO. Mniej narzutu Next.js, mniej kosztu hostingu, mniej decyzji do podjęcia po stronie infrastruktury.",
    intro: [
      "Robię React od 2020 roku. Większość projektów lab dostępnych na GitHubie to React: dashboardy, panele, aplikacje czasu rzeczywistego, sklepy edukacyjne. Część komercyjna, np. moduły do większych systemów, robiona również w React + Vite.",
      "Klientom, którzy mają już backend (PHP, Java, Python), dokładam frontend. Komponenty, integracja z API, design system, testy.",
    ],
    bullets: [
      {
        title: "Vite zamiast CRA",
        body: "Create React App nie jest rozwijany od 2023 roku. Nowe projekty stawiam na Vite: szybsza praca, mniejsza paczka JavaScriptu, wygodniejsze narzędzia.",
      },
      {
        title: "Design system",
        body: "Zamiast pisać komponenty od zera, używam shadcn/ui jako bazy i dopasowuję do marki klienta. Kod należy do klienta, bez uzależnienia od dostawcy.",
      },
      {
        title: "Zarządzanie stanem",
        body: "Zustand albo Redux Toolkit, jeśli skala wymaga. TanStack Query dla danych z API. Bez zbędnych warstw abstrakcji.",
      },
      {
        title: "Testowanie",
        body: "Vitest + Testing Library. Krytyczne ścieżki dodatkowo w Playwright. Pokrycie tylko tam, gdzie ryzyko regresu jest realne.",
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
        a: "Tak, jako freelancer React. Faktura na koniec miesiąca. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.",
      },
      {
        q: "Współpraca długoterminowa?",
        a: "Najczęstsza forma. Stawka miesięczna za określoną liczbę godzin, kontrakt B2B lub UoD.",
      },
    ],
    cta: "Daj znać, czego szukasz, odpiszę w ciągu dnia",
  },
  {
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
  },
  {
    slug: "opieka-wordpress",
    title: "Opieka nad stroną WordPress",
    metaTitle: "Opieka nad stroną WordPress — abonament, bez umowy na rok",
    metaDescription:
      "Stała opieka nad stroną WordPress: aktualizacje na stagingu, backupy, monitoring i drobne poprawki w cenie. Abonament miesięczny, bez umowy na rok.",
    h1: "Opieka nad stroną WordPress. Strona działa, Ty pracujesz.",
    lead:
      "Abonamentowa opieka nad WordPressem dla firm, które nie mają działu IT: aktualizacje, kopie zapasowe, monitoring dostępności, bezpieczeństwo i bank godzin na drobne zmiany. Płacisz miesięcznie, rezygnujesz kiedy chcesz.",
    intro: [
      "WordPress bez opieki niszczeje. Wtyczki wypuszczają aktualizacje co tydzień, PHP na hostingu zmienia wersję, a boty skanują znane luki dzień po ich publikacji. Efekt odkładania: pewnego ranka formularz przestaje wysyłać, strona wita klientów białym ekranem albo, gorzej, reklamami z doklejonego malware.",
      "W abonamencie robię to, czego właściciel strony nie powinien musieć pilnować: aktualizacje wtyczek i rdzenia testowane na kopii przed wgraniem na produkcję, codzienne backupy trzymane poza hostingiem, monitoring dostępności z alertem, twarde zabezpieczenia logowania i firewall. Do tego bank godzin na drobne zmiany treści czy poprawki, żeby nie płacić osobnej faktury za wymianę banera.",
      "Opiekuję się głównie stronami, które sam zbudowałem ([tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress)), ale przejmuję też strony po innych wykonawcach, po audycie wejściowym. Jeśli strona przy okazji muli, zobacz [przyspieszanie stron WordPress](/uslugi/przyspieszanie-stron-wordpress), często łączę obie usługi.",
    ],
    bullets: [
      {
        title: "Aktualizacje bez niespodzianek",
        body: "Wtyczki i rdzeń najpierw na kopii roboczej, dopiero po sprawdzeniu na produkcję. Gdy coś się gryzie, wraca poprzednia wersja i szukam obejścia.",
      },
      {
        title: "Backupy, które da się odtworzyć",
        body: "Codzienna kopia bazy i plików poza hostingiem. Raz na miesiąc testowe odtworzenie, bo backup nietestowany to tylko nadzieja, nie kopia.",
      },
      {
        title: "Bezpieczeństwo i monitoring",
        body: "Firewall aplikacyjny, limit prób logowania, logowanie dwuskładnikowe, skan malware. Monitoring dostępności co minutę z alertem na mój telefon.",
      },
      {
        title: "Bank godzin na drobiazgi",
        body: "Wymiana zdjęcia, nowy cennik, poprawka w stopce: w ramach abonamentu, bez osobnych wycen. Większe prace wyceniam normalnie, z rabatem dla stałych klientów.",
      },
    ],
    process: [
      { step: "01", title: "Audyt wejściowy", body: "Przegląd wtyczek, motywu, hostingu, kopii i luk. Lista rzeczy do naprawy przed startem opieki." },
      { step: "02", title: "Porządki i zabezpieczenie", body: "Aktualizacje zaległości, konfiguracja backupów, firewall, monitoring. Strona wchodzi w opiekę czysta." },
      { step: "03", title: "Miesięczny rytm", body: "Aktualizacje co tydzień, raport co miesiąc: co zrobione, ile godzin banku zużyte, co wymaga decyzji." },
    ],
    faq: [
      { q: "Ile kosztuje opieka nad stroną WordPress?", a: "Wycena zależy od tego, czy opieka dotyczy prostej strony firmowej, strony z blogiem i częstymi zmianami czy sklepu WooCommerce, w którym dochodzi testowanie zamówień po każdej aktualizacji. Zakres obejmuje bank godzin na drobne zmiany. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Jak szybko reagujesz na awarię?", a: "Strona nie działa: reakcja do 2 godzin w dni robocze, zwykle szybciej, bo monitoring wysyła mi alert zanim klient zdąży zauważyć. Drobne zgłoszenia i zmiany: do 48 godzin." },
      { q: "Czy wiąże mnie umowa na rok?", a: "Nie. Rozliczenie miesięczne, rezygnacja z końcem miesiąca. Umowy roczne w tej usłudze służą zwykle temu, żeby dało się o kliencie zapomnieć." },
      { q: "Moja strona stoi u innej firmy. Przejmiesz ją?", a: "Tak, po audycie wejściowym. Potrzebuję dostępu do panelu WP i hostingu. Audyt pokazuje, w jakim stanie jest strona i co trzeba wyprostować przed startem stałej opieki." },
      { q: "Strona już została zhakowana. Pomożesz?", a: "Tak, czyszczenie po włamaniu robię jako osobną usługę: identyfikacja wejścia, usunięcie malware, wymiana kluczy i haseł, zgłoszenie do Google. Potem zwykle przechodzimy na stałą opiekę, żeby to się nie powtórzyło." },
      { q: "Czy opieka obejmuje też hosting?", a: "Doradzę i przeniosę stronę na sensowny hosting (Hostinger, cyber_folks), ale faktura za hosting zostaje po Twojej stronie. Dzięki temu strona i domena są zawsze Twoje, nie wynajęte ode mnie." },
    ],
    cta: "Napisz, podeślij adres strony, wrócę z wyceną opieki w 24h",
  },
  {
    slug: "przyspieszanie-stron-wordpress",
    title: "Przyspieszanie stron WordPress",
    metaTitle: "Przyspieszenie strony WordPress — Core Web Vitals na zielono",
    metaDescription:
      "Optymalizacja szybkości WordPress: pomiar przed i po, obrazy WebP/AVIF, cache LiteSpeed, odchudzanie JavaScriptu. LCP poniżej 2,5 s, raport z liczbami.",
    h1: "Przyspieszanie stron WordPress. Liczby przed i po, nie obietnice.",
    lead:
      "Wolna strona kosztuje dwa razy: użytkownicy uciekają przed załadowaniem, a Google obniża pozycje za słabe Core Web Vitals. Optymalizuję WordPressy od pomiaru do zielonych metryk, z raportem przed i po.",
    intro: [
      "Typowy wolny WordPress to zawsze ta sama czwórka: obrazki wgrywane prosto z telefonu, page builder doklejający setki kilobajtów JavaScriptu, brak sensownego cache i tani hosting z wolnym czasem odpowiedzi. Dobra wiadomość: każdy z tych problemów da się zmierzyć i naprawić, bez przebudowy strony od zera.",
      "Pracuję na liczbach. Najpierw pomiar w PageSpeed Insights i realnych danych CrUX, potem poprawki od największej dźwigni: konwersja obrazów do WebP/AVIF z leniwym ładowaniem, cache LiteSpeed albo Redis, czyszczenie nieużywanego JavaScriptu i CSS, poprawki fontów, w razie potrzeby zmiana hostingu. Na końcu drugi pomiar i raport: co było, co jest, co to zmienia.",
      "Cel: LCP poniżej 2,5 sekundy i wszystkie trzy Core Web Vitals na zielono. Dla sklepów WooCommerce dochodzi koszyk i checkout, gdzie szybkość przekłada się wprost na porzucenia. Jeśli strona wymaga też stałego doglądania, spójrz na [opiekę nad stroną WordPress](/uslugi/opieka-wordpress), a jeśli rozważasz budowę od nowa, na [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress).",
    ],
    bullets: [
      {
        title: "Pomiar przed i po",
        body: "PageSpeed Insights, Lighthouse i dane polowe CrUX. Raport pokazuje te same metryki przed optymalizacją i po niej, na tych samych podstronach.",
      },
      {
        title: "Obrazy i fonty",
        body: "Konwersja do WebP/AVIF, wymiary dopasowane do miejsca, leniwe ładowanie poza pierwszym ekranem. Fonty z podzbiorem znaków i font-display: swap.",
      },
      {
        title: "Cache i hosting",
        body: "LiteSpeed cache albo Redis, CDN dla plików statycznych, nagłówki cache dla przeglądarki. Gdy hosting jest wąskim gardłem, mówię to wprost i pomagam w przenosinach.",
      },
      {
        title: "Odchudzanie JS i CSS",
        body: "Usuwanie nieużywanych skryptów wtyczek, opóźnianie analityki, krytyczny CSS w dokumencie. Często największy skok robi wyłączenie tego, co nie jest używane.",
      },
    ],
    process: [
      { step: "01", title: "Audyt wydajności", body: "Pomiar kluczowych podstron, lista problemów posortowana po wpływie na LCP, INP i CLS. Wycena naprawy." },
      { step: "02", title: "Wdrożenie poprawek", body: "Praca na kopii roboczej, wdrożenie na produkcję poza godzinami ruchu. Strona działa normalnie przez cały czas." },
      { step: "03", title: "Drugi pomiar i raport", body: "Te same metryki, te same podstrony, liczby przed i po. Plus lista zaleceń na przyszłość, żeby efekt nie zjechał." },
    ],
    faq: [
      { q: "Ile kosztuje przyspieszenie strony WordPress?", a: "Wycena zależy od zakresu audytu i wdrożenia oraz od tego, czy optymalizacja dotyczy strony firmowej czy sklepu WooCommerce, w którym dochodzą koszyk, checkout i dodatkowe szablony do sprawdzenia. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa optymalizacja szybkości?", a: "Audyt: 2-3 dni robocze od podesłania dostępów. Wdrożenie poprawek: 5-10 dni roboczych zależnie od liczby problemów. Strona działa normalnie przez cały czas, zmiany wchodzą poza godzinami ruchu." },
      { q: "O ile realnie strona przyspieszy?", a: "Typowy efekt na zaniedbanej stronie: LCP z 5-8 sekund schodzi poniżej 2,5 s, waga strony spada o połowę lub więcej. Dokładnie dlatego raport pokazuje liczby przed i po, a nie wynik w skali gwiazdek." },
      { q: "Czy szybsza strona poprawi pozycje w Google?", a: "Core Web Vitals są sygnałem rankingowym, więc zielone metryki pomagają, ale nie zastąpią treści i linków. Pewny efekt jest gdzie indziej: mniej porzuceń, dłuższe sesje, wyższa konwersja." },
      { q: "Czy optymalizujesz też sklepy WooCommerce?", a: "Tak, to większość zleceń. Sklepy mają najwięcej do ugrania: koszyk AJAX, skrypty płatności i wtyczki kurierskie potrafią podwoić czas ładowania. Testuję pełną ścieżkę zakupową po każdej zmianie." },
      { q: "Co jeśli efektu nie będzie?", a: "Audyt przed wyceną pokazuje, co jest do ugrania. Jeśli strona jest już dobrze zoptymalizowana i miejsca na poprawę nie ma, mówię to na etapie audytu zamiast sprzedawać wdrożenie." },
    ],
    cta: "Podeślij adres strony, zmierzę i wrócę z audytem w 48h",
  },
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
