/**
 * Mapping: service slug → recommended project slug do pokazania jako "case study"
 * w hero/intro service landing page. Plus mini-case content (paragraf tekstu pod
 * SEO, mocniejsza topical authority).
 */

export type ServiceCaseHint = {
  /** Slug projektu z lib/projects.ts */
  projectSlug: string;
  /** Krótki paragraf opisowy SEO (200-400 znaków, kontekst dla LLM-ów) */
  context: string;
  /** Co konkretnie zostało zbudowane (highlight dla case study) */
  highlight: string;
};

export const SERVICE_CASE_MAP: Record<string, ServiceCaseHint> = {
  "tworzenie-stron-wordpress": {
    projectSlug: "kancelaria-mpiontek",
    context:
      "Strona dla kancelarii adwokackiej Marii Piontek z Łodzi to typowy przykład custom WordPressa zrobionego dobrze. Custom theme od zera (zamiast Avada/Divi), ACF Pro dla pól dynamicznych, Yoast SEO + LiteSpeed cache. Lighthouse 96, indeksacja w 24h od publikacji.",
    highlight:
      "Custom WordPress theme + ACF Pro + Yoast SEO + Lighthouse 96",
  },
  "sklepy-internetowe-woocommerce": {
    projectSlug: "kosmoteka",
    context:
      "Sklep z teleskopami i sprzętem obserwacyjnym Kosmoteka.pl to przykład świeżego wdrożenia WooCommerce w 2026. WordPress + WooCommerce + custom theme, integracje z Przelewy24, BLIK, InPost Paczkomaty, optymalizacja pod konwersję (skrócony checkout, ratowanie porzuconych koszyków), GA4 enhanced ecommerce.",
    highlight:
      "WooCommerce + Przelewy24 + InPost + GA4 Enhanced Ecommerce",
  },
  "headless-wordpress": {
    projectSlug: "galabau-darius",
    context:
      "Konfigurator wyceny dla niemieckiej firmy Galabau Darius pokazuje moc headless architektury — ciężka logika konfiguratora w Next.js 14 (real-time pricing, dynamiczna wycena, 3D preview), dane produktów zarządzane w panelu WP-podobnym przez Sanity. Klient edytuje cennik, frontend regeneruje się webhookiem w 30 sekund.",
    highlight:
      "Next.js 14 + Clerk + headless data layer + ISR webhook",
  },
  "nowoczesne-strony-internetowe": {
    projectSlug: "galabau-darius",
    context:
      "Aplikacja konfiguratora ogrodzeń Galabau Darius to nowoczesna strona w stacku 2026: Next.js 14 App Router, React Server Components, Tailwind, Vercel edge, Clerk auth, real-time data. Lighthouse 99, LCP 0.8s globalnie. Dla niemieckiej firmy ogrodniczej z dużym ruchem organicznym.",
    highlight:
      "Next.js App Router + Vercel Edge + Lighthouse 99",
  },
  "nowoczesna-strona-firmowa-2026": {
    projectSlug: "kancelaria-mpiontek",
    context:
      "Najnowszy projekt 2026: kancelaria adwokacka Marii Piontek. Strona stworzona w stacku który pasuje do briefa firm prawniczych — premium, czysta, szybka, bez zbędnych animacji. Lighthouse 96, schema.org LegalService, dane strukturalne dla Google rich snippets.",
    highlight:
      "Premium custom theme + LegalService schema + Lighthouse 96",
  },
  "next-js-software-house": {
    projectSlug: "galabau-darius",
    context:
      "Konfigurator wyceny ogrodzeń dla niemieckiej firmy Galabau Darius. Solo project: pełna aplikacja Next.js 14 z auth (Clerk), bazą produktów, panelem admina, real-time wycenami, 3D preview. Czas wdrożenia: 7 tygodni od briefu do produkcji. Cena 1/3 tego co policzyłaby agencja.",
    highlight:
      "Next.js 14 + Clerk + admin panel + 3D config — 7 tygodni",
  },
  "strony-jamstack": {
    projectSlug: "owodzie",
    context:
      "Atlas twardości wody owodzie.pl pokazuje Jamstack w praktyce: 152 miasta i 274 strefy pomiarowe pre-renderowane do statycznego HTML w Astro, interaktywna mapa Polski jako wyspa JavaScriptu, wszystkie podstrony generowane z jednej bazy przy buildzie. Zero serwera w runtime, hosting za grosze, ładowanie w ułamku sekundy.",
    highlight:
      "Astro SSG + 274 podstrony z jednej bazy + zero backendu",
  },
  "tworzenie-stron-www": {
    projectSlug: "apartamenty-zlota-grota",
    context:
      "Strona Złota Grota — apartamenty z jacuzzi we Wrocławiu. Modern WordPress z custom theme, system rezerwacji bezpośrednio na stronie (bez Booking.com pośrednika), galeria pełnoekranowa, optymalizacja mobile (60% ruchu z telefonów). Wzrost konwersji rezerwacji +47% vs poprzednia strona.",
    highlight:
      "Custom WP + booking system + mobile-first — konwersja +47%",
  },
  "aplikacje-nextjs": {
    projectSlug: "kantorymapa",
    context:
      "Kantorymapa.pl to strona Next.js w czystej postaci: 140 podstron miast i 1900 kantorów generowanych statycznie przy buildzie, kursy NBP odświeżane codziennie automatycznym procesem, całość ładuje się poniżej sekundy. Programmatic SEO daje widoczność na setki fraz lokalnych bez ręcznego pisania treści.",
    highlight:
      "Next.js SSG + 140 miast programmatic SEO + LCP poniżej 1s",
  },
  "aplikacje-react": {
    projectSlug: "great-shirt-app",
    context:
      "Aplikacja e-commerce z customizatorem T-shirtów. React + NestJS + MySQL. Realtime preview produktu (kolory, rozmiary, naklejki), koszyk persystentny w localStorage, autoryzacja, panel admina. Projekt edukacyjny z bootcampu — pełna implementacja od zera w 4 tygodnie.",
    highlight:
      "React + NestJS + MySQL + realtime product preview",
  },
  "opieka-wordpress": {
    projectSlug: "lumikids",
    context:
      "Sklep LumiKids działa na WordPressie z WooCommerce i jest pod stałą opieką: aktualizacje wtyczek testowane przed wgraniem na produkcję, backupy poza hostingiem, monitoring dostępności i drobne poprawki w banku godzin. Sklep sprzedaje codziennie, więc każda aktualizacja przechodzi test pełnej ścieżki zakupowej.",
    highlight:
      "WordPress + WooCommerce pod stałą opieką, testy po każdej aktualizacji",
  },
  "przyspieszanie-stron-wordpress": {
    projectSlug: "kosmoteka",
    context:
      "Kosmoteka.pl, sklep z teleskopami na WooCommerce, przeszła pełną optymalizację wydajności: obrazy WebP, LiteSpeed cache, odchudzony JavaScript motywu i wtyczek, leniwe ładowanie galerii. Karty produktów z dużymi zdjęciami sprzętu ładują się poniżej 2 sekund na mobile.",
    highlight:
      "WooCommerce + LiteSpeed + WebP — LCP poniżej 2s na mobile",
  },
  "wdrozenia-ai": {
    projectSlug: "businesstokenizer",
    context:
      "Strona dla agencji blockchain BusinessTokenizer — strategia content marketing wzbogacona generowaniem treści przez AI (OpenAI API). Custom workflow: brief klienta → prompt → generowany draft posta → human review → publikacja. Czas tworzenia treści zredukowany z 4h na 30min.",
    highlight:
      "OpenAI API + custom prompt workflow + content automation",
  },
};
