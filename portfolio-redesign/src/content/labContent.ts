export const PHONE = "+48 570 507 703";

export const HERO = {
  h1Main: "Tworzenie stron",
  h1Accent: "Next.js",
  h1Suffix: "dla firm, które chcą rosnąć.",
  lead:
    "Projektuję i wdrażam szybkie strony, kampanie oraz systemy pod SEO, performance i sprzedaż. Bez szablonu, bez ciężkiego CMS, z jasnym procesem od briefu do produkcji.",
};

export const USP_LIST = [
  "Brief i kierunek w 48h",
  "Design, development i SEO w jednym procesie",
  "Core Web Vitals mierzone przed publikacją",
];

export const SERVICES = {
  items: [
    {
      title: "Architektura App Router",
      body: "Server Components, streaming i routing zaprojektowane pod szybkie strony oraz przyszłą rozbudowę.",
    },
    {
      title: "Design system",
      body: "Spójne komponenty, tokeny Tailwind i layouty, które nie rozsypują się po dodaniu treści.",
    },
    {
      title: "CMS lub panel",
      body: "Sanity, Payload, headless WordPress albo własny panel wtedy, gdy projekt wymaga logiki.",
    },
    {
      title: "SEO techniczne",
      body: "Metadata, schema, sitemap, indeksacja, wewnętrzne linkowanie i treści gotowe pod AI search.",
    },
    {
      title: "Performance",
      body: "Optymalizacja obrazów, fontów, JS i renderingu. Metryki są częścią odbioru, nie dodatkiem.",
    },
    {
      title: "Launch i opieka",
      body: "Deploy, monitoring, instrukcja obsługi i wsparcie po publikacji, żeby strona pracowała dalej.",
    },
  ],
};

export const PERF_METRICS = {
  rows: [
    { metric: "LCP", wordpress: "2.8s", nextjs: "1.1s", value: 1.1, suffix: "s" },
    { metric: "JS startowy", wordpress: "240 KB", nextjs: "72 KB", value: 72, suffix: " KB" },
    { metric: "TTFB", wordpress: "620 ms", nextjs: "95 ms", value: 95, suffix: " ms" },
    { metric: "Lighthouse", wordpress: "74", nextjs: "98", value: 98, suffix: "" },
  ],
};

export const PROCESS = {
  steps: [
    {
      title: "Brief",
      body: "Ustalamy cel biznesowy, grupę odbiorców, zakres i realny termin.",
    },
    {
      title: "Strategia",
      body: "Dobieram strukturę strony, priorytety SEO, CTA i mierniki sukcesu.",
    },
    {
      title: "Design",
      body: "Powstaje kierunek wizualny, komponenty i ekran po ekranie bez przypadkowych sekcji.",
    },
    {
      title: "Development",
      body: "Koduję w Next.js, Tailwind i TypeScript, z preview dla każdej ważnej iteracji.",
    },
    {
      title: "Optymalizacja",
      body: "Sprawdzam performance, responsywność, SEO, dostępność i realne ścieżki użytkownika.",
    },
    {
      title: "Launch",
      body: "Publikacja, monitoring, indeksacja i opieka po starcie.",
    },
  ],
};

export const FAQ = [
  {
    q: "Ile trwa przygotowanie strony?",
    a: "Prosta strona usługowa zwykle zajmuje 3 do 5 tygodni. Większy serwis z CMS, SEO i animacjami planuję po briefie.",
  },
  {
    q: "Czy Next.js ma sens dla strony firmowej?",
    a: "Tak, gdy liczy się szybkość, skalowanie, integracje, SEO techniczne albo unikalny interfejs. Przy prostym blogu bez wymagań często wystarczy WordPress.",
  },
  {
    q: "Czy dostanę CMS?",
    a: "Tak, jeśli treści mają być edytowane po stronie klienta. Dobieram CMS do zespołu i budżetu, nie odwrotnie.",
  },
  {
    q: "Czy robisz kampanie razem ze stroną?",
    a: "Tak. Strona może od razu dostać strukturę pod Google Ads, Meta Ads, SEO i mierzenie konwersji.",
  },
  {
    q: "Jak wygląda start współpracy?",
    a: "Wysyłasz brief albo umawiamy rozmowę. W 48h dostajesz kierunek, zakres i pierwszą estymację.",
  },
];

export const PORTFOLIO = [
  {
    client: "Chojmex",
    sector: "Produkcja",
    image: "/projects/Portfolio0.png",
    url: "https://chojmex.pl/",
  },
  {
    client: "Pionier Pianki",
    sector: "B2B",
    image: "/projects/Portfolio1.png",
    url: "https://pionierpianki.pl/",
  },
  {
    client: "AMF Van System",
    sector: "Automotive",
    image: "/projects/Portfolio2.png",
    url: "https://amfvansystem.pl/",
  },
  {
    client: "LookDent",
    sector: "Medycyna",
    image: "/projects/Portfolio3.png",
    url: "https://lookdent.pl/",
  },
  {
    client: "Filipek Meble",
    sector: "Wnętrza",
    image: "/projects/Portfolio4.png",
    url: "https://filipekmeble.pl/",
  },
  {
    client: "Imperial Granit",
    sector: "Kamień",
    image: "/projects/Portfolio5.png",
    url: "https://imperialgranit.pl/",
  },
];

export const CTA = {
  titleMain: "Twoja historia",
  titleAccent: "może ruszyć szybciej.",
  button: "Brief w 48h",
};
