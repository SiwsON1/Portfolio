export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: "commercial" | "fullstack" | "lab";
  image: string;
  url?: string;
  repo?: string;
  description: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "lumikids",
    title: "Sklep z odzieżą dziecięcą i młodzieżową",
    client: "LumiKids",
    year: 2026,
    category: "commercial",
    image: "/projects-fresh/lumikids-card.webp",
    url: "https://lumikids.com.pl/",
    description:
      "Sklep internetowy z polską odzieżą dziecięcą i młodzieżową na WordPress + WooCommerce. Redesign frontu sklepu, landingi kolekcji, opisy kategorii i produktów, integracja z Allegro, optymalizacja pod konwersję i SEO.",
    stack: ["WordPress", "WooCommerce", "Elementor", "Custom CSS", "SEO"],
  },
  {
    slug: "kantorymapa",
    title: "Mapa kantorów wymiany walut",
    client: "Kantorymapa",
    year: 2026,
    category: "fullstack",
    image: "/projects-fresh/kantorymapa-card.webp",
    url: "https://kantorymapa.pl/",
    description:
      "Ogólnopolski katalog kantorów stacjonarnych: 1900 punktów w 140 miastach, z adresami, godzinami otwarcia i telefonami. Codzienna aktualizacja kursów NBP, porównanie spreadów z kantorami internetowymi, programmatic SEO na podstronach miast.",
    stack: ["Next.js", "React", "Tailwind", "SSG", "SEO"],
  },
  {
    slug: "dobrypupil",
    title: "Baza substancji trujących dla psa i kota",
    client: "Dobry Pupil",
    year: 2026,
    category: "fullstack",
    image: "/projects-fresh/dobrypupil-card.webp",
    url: "https://dobrypupil.pl/",
    description:
      "Wyszukiwarka roślin, pokarmów i leków niebezpiecznych dla psa i kota, z poziomem ryzyka osobno dla obu gatunków. Objawy zatrucia, pierwsza pomoc krok po kroku i jasny sygnał, kiedy dzwonić do weterynarza. Treści oparte o źródła weterynaryjne.",
    stack: ["Astro", "TypeScript", "SSG", "SEO"],
  },
  {
    slug: "owodzie",
    title: "Atlas twardości wody w Polsce",
    client: "owodzie.pl",
    year: 2026,
    category: "fullstack",
    image: "/projects-fresh/owodzie-card.webp",
    url: "https://owodzie.pl/",
    description:
      "Baza twardości wody z kranu: 152 miasta i 274 strefy pomiarowe. Wyniki w °dH, mg/l i mmol/l z klasą twardości i datą pomiaru, interaktywna mapa Polski, kalkulator przeliczania jednostek, programmatic SEO na podstronach miast.",
    stack: ["Astro", "TypeScript", "SSG", "SEO"],
  },
  {
    slug: "cenynotarialne",
    title: "Portal cen transakcyjnych nieruchomości",
    client: "Ceny Notarialne",
    year: 2026,
    category: "fullstack",
    image: "/projects-fresh/cenynotarialne-card.webp",
    url: "https://www.cenynotarialne.pl/",
    description:
      "Portal danych pokazujący realne ceny transakcyjne nieruchomości w Polsce na podstawie Rejestru Cen Nieruchomości (RCN). Wyszukiwarka po lokalizacji i typie (mieszkania, domy, działki, lokale użytkowe), porównanie median między obszarami, rankingi, interaktywne mapy MapLibre GL. Programmatic SEO na tysiącach lokalizacji, editorial design, mobile-first.",
    stack: ["Next.js", "React", "Tailwind", "MapLibre GL", "SSG", "SEO"],
  },
  {
    slug: "galabau-darius",
    title: "Konfigurator ogrodzeń",
    client: "Galabau Darius",
    year: 2026,
    category: "fullstack",
    image: "/projects-fresh/galabau-darius-card.webp",
    url: "https://galabau-portfolio.vercel.app/",
    description:
      "Aplikacja Next.js dla niemieckiej firmy ogrodniczej z okolic Grafeld. Konfigurator wyceny w czasie rzeczywistym, galeria realizacji, panel admina (Clerk). Redesign 2026: editorial typografia Fraunces + Montserrat, amber accent, mobile-first, JSON-LD LocalBusiness, Impressum/Datenschutz, deploy Vercel.",
    stack: ["Next.js", "React", "Clerk", "Prisma", "Tailwind", "Framer Motion"],
  },
  {
    slug: "kosmoteka",
    title: "Sklep z teleskopami i sprzętem obserwacyjnym",
    client: "Kosmoteka",
    year: 2026,
    category: "commercial",
    image: "/projects-fresh/kosmoteka-card.webp",
    url: "https://kosmoteka.pl/",
    description:
      "Sklep internetowy z teleskopami, lornetkami i mikroskopami na WordPress + WooCommerce. Autorski design kart produktów, poradniki zakupowe, integracja z hurtownią, bramki płatności i wysyłki, optymalizacja pod konwersję i SEO.",
    stack: ["WordPress", "WooCommerce", "Custom CSS", "SEO"],
  },
  {
    slug: "businesstokenizer",
    title: "Agencja blockchain i tokenizacji",
    client: "BusinessTokenizer",
    year: 2024,
    category: "commercial",
    image: "/projects-fresh/businesstokenizer-card.webp",
    url: "https://businesstokenizer.com/",
    description:
      "Strona dla agencji blockchain specjalizującej się w tokenizacji firm i aktywów, smart kontraktach, kampaniach ICO/IDO oraz strategiach Web3.",
    stack: ["WordPress", "Custom Dev", "Blockchain", "SEO"],
  },
  {
    slug: "apartamenty-zlota-grota",
    title: "Apartamenty z jacuzzi",
    client: "Złota Grota",
    year: 2024,
    category: "commercial",
    image: "/projects-fresh/apartamenty-zlota-grota-card.webp",
    url: "https://apartamentyzlotagrota.pl/",
    description:
      "Strona dla apartamentów z jacuzzi we Wrocławiu. Romantyczne pobyty, self check-in, rezerwacja online bez pośredników.",
    stack: ["WordPress", "Custom CSS", "Booking", "SEO"],
  },
  {
    slug: "kancelaria-mpiontek",
    title: "Kancelaria adwokacka",
    client: "Maria Piontek",
    year: 2026,
    category: "commercial",
    image: "/projects-fresh/kancelaria-mpiontek-card.webp",
    url: "https://kancelaria-mpiontek.pl/",
    description:
      "Strona kancelarii adwokackiej w Łodzi. Prawo karne, cywilne, rodzinne, administracyjne i gospodarcze. Indywidualne podejście, zaufanie, czytelna komunikacja.",
    stack: ["WordPress", "Custom CSS", "SEO"],
  },
  {
    slug: "queen-scarlet",
    title: "Klinika kosmetologii",
    client: "Queen Scarlet",
    year: 2024,
    category: "commercial",
    image: "/projects-fresh/queen-scarlet-card.webp",
    url: "https://marcin.przedprojekt.com/QueenScarlet2/",
    description:
      "Strona kliniki kosmetologii oferującej zabiegi typu kriolipoliza i laserowa stymulacja kolagenu.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "adhotel",
    title: "Marketing hotelowy",
    client: "AdAwards Hotel",
    year: 2023,
    category: "commercial",
    image: "/projects/adhotel.png",
    url: "https://adhotel.pl/",
    description:
      "Strategie marketingowe dla branży hotelarskiej, kampanie i web development.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "admeble",
    title: "Marketing meblarski",
    client: "AdAwards Meble",
    year: 2023,
    category: "commercial",
    image: "/projects/admeble.png",
    url: "https://admeble.przedprojekt.com/",
    description:
      "Branding, SEO i e-commerce dla marek meblarskich. Realizacje case-study.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "adshop",
    title: "Platforma rabatowa",
    client: "AdShop",
    year: 2023,
    category: "commercial",
    image: "/projects/adshop.png",
    url: "https://ad-shop.pl/",
    description:
      "Platforma z ekskluzywnymi rabatami w kategoriach hotele, zdrowie i lifestyle.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "gumar-kepno",
    title: "Serwis ciężarówek",
    client: "Gumar Kępno",
    year: 2023,
    category: "commercial",
    image: "/projects/gumarkepno.png",
    url: "https://www.gumarkepno.pl/",
    description:
      "Kompleksowy serwis pojazdów ciężarowych: tachografy, elektromechanika, mobilny serwis.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "dom-bez-wad",
    title: "Termomodernizacja",
    client: "Dom Bez Wad",
    year: 2023,
    category: "commercial",
    image: "/projects/dombezwad.png",
    url: "https://dombezwad.przedprojekt.com/",
    description:
      "Termomodernizacja i energia odnawialna: ocieplenia, pompy ciepła.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "multikon",
    title: "Akcesoria meblowe",
    client: "Multikon",
    year: 2023,
    category: "commercial",
    image: "/projects/multikon.png",
    url: "http://www.multikon.eu/",
    description:
      "Producent wysokiej jakości akcesoriów meblowych, nóg i stelaży krzeseł.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "stys-glass",
    title: "Hartowanie i obróbka szkła",
    client: "Stys-Glass",
    year: 2023,
    category: "commercial",
    image: "/projects/stys-glass.png",
    url: "https://stys-glass.pl/",
    description:
      "Hartowanie szkła, balustrady i lustra na wymiar.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "maciejanka",
    title: "Pensjonat",
    client: "Maciejanka",
    year: 2023,
    category: "commercial",
    image: "/projects/maciejanka.png",
    url: "https://maciejanka.pl/",
    description:
      "Trzygwiazdkowy pensjonat pod Kobylą Górą. Udogodnienia, organizacja eventów.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "piwlegnica",
    title: "Inspektorat weterynaryjny",
    client: "PIW Legnica",
    year: 2023,
    category: "commercial",
    image: "/projects/piwlegnica.png",
    url: "https://www.piwlegnica.pl/",
    description:
      "Informacje administracyjno-prawne dla Inspektoratu Weterynaryjnego w Legnicy.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "katex",
    title: "Recykling katalizatorów",
    client: "Katex",
    year: 2023,
    category: "commercial",
    image: "/projects/katex.png",
    url: "https://katex.info/",
    description:
      "Platforma do recyklingu katalizatorów. Transparentna wycena, eko-metody.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "inbc",
    title: "Broker ubezpieczeniowy",
    client: "INBC",
    year: 2023,
    category: "commercial",
    image: "/projects-fresh/inbc-card.webp",
    url: "https://inbc.pl/",
    description:
      "Dedykowane rozwiązania ubezpieczeniowe dla klientów korporacyjnych.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "rcom-service",
    title: "IT i bezpieczeństwo sieci",
    client: "RCOM Service",
    year: 2022,
    category: "commercial",
    image: "/projects-fresh/rcom-service-card.webp",
    url: "https://rcom-service.pl/",
    description:
      "Usługi IT i bezpieczeństwa: konfiguracja LAN, monitoring, instalacje serwerów.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "zielona-pietruszka",
    title: "Restauracja",
    client: "Zielona Pietruszka",
    year: 2022,
    category: "commercial",
    image: "/projects/zielonapietruszka.png",
    url: "https://zielonapietruszka.com.pl/",
    description:
      "Kameralna restauracja: świeże dania, opcje wegetariańskie i bezglutenowe.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "partytales",
    title: "Dekoracje eventowe",
    client: "PartyTales",
    year: 2022,
    category: "commercial",
    image: "/projects/partytales.png",
    url: "https://partytales.pl/",
    description:
      "Zestawy balonowe, dekoracje świetlne, wynajem akcesoriów na eventy tematyczne.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "maxnet",
    title: "Dostawca internetu",
    client: "Maxnet Bolesławiec",
    year: 2022,
    category: "commercial",
    image: "/projects/maxnetcv.png",
    url: "https://maxnetboleslawiec.pl/",
    description:
      "Lokalny dostawca internetu światłowodowego i telekomunikacji.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "magia-orientu",
    title: "Masaże orientalne",
    client: "Magia Orientu",
    year: 2022,
    category: "commercial",
    image: "/projects/magiaorientuCV.png",
    url: "https://magiaorientu-boleslawiec.pl/",
    description:
      "Strona dla masażystki specjalizującej się w zabiegach orientalnych.",
    stack: ["WordPress", "Custom CSS", "Elementor"],
  },
  {
    slug: "great-shirt-app",
    title: "Sklep Full-Stack",
    client: "Lab",
    year: 2023,
    category: "lab",
    image: "/projects/Portfolio1.png",
    repo: "https://github.com/SiwsON1/Great_Shirt_App",
    description:
      "Aplikacja e-commerce z koszykiem, zamówieniami i bazą MySQL.",
    stack: ["NestJS", "React", "MySQL"],
  },
  {
    slug: "chat-with-friends",
    title: "Real-time Chat",
    client: "Lab",
    year: 2023,
    category: "lab",
    image: "/projects/Portfolio3.png",
    repo: "https://github.com/SiwsON1/Chat-with-friends",
    description:
      "Real-time chat. Event-driven server-client, broadcast wiadomości.",
    stack: ["WebSocket", "NestJS"],
  },
  {
    slug: "announcements-wall",
    title: "Tablica ogłoszeń CRUD",
    client: "Lab",
    year: 2023,
    category: "lab",
    image: "/projects/Portfolio2.png",
    repo: "https://github.com/SiwsON1/Announcements_Wall",
    description:
      "Pełen CRUD z autoryzacją, filtrami, real-time updates.",
    stack: ["NestJS", "React", "MongoDB"],
  },
  {
    slug: "festival-tickets",
    title: "Festiwal — bilety",
    client: "Lab",
    year: 2023,
    category: "lab",
    image: "/projects/Portfolio4.png",
    repo: "https://github.com/SiwsON1/rest-api-practice",
    description:
      "New Wave Festival, real-time dostępność miejsc, React + Redux.",
    stack: ["MongoDB", "CloudDB", "WebSocket"],
  },
  {
    slug: "weather-app",
    title: "Pogoda",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio9.png",
    repo: "https://github.com/SiwsON1/Weather-app",
    description: "Real-time pogoda z external API.",
    stack: ["React", "External API"],
  },
  {
    slug: "shirt-personalizer",
    title: "Personalizator T-shirta",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio11.png",
    repo: "https://github.com/SiwsON1/react-product-personalizer",
    description:
      "Dobór koloru i rozmiaru z live-update obrazka i ceny.",
    stack: ["React"],
  },
  {
    slug: "pizzeria",
    title: "Pizzeria SPA",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio13.png",
    repo: "https://github.com/SiwsON1/project-pizzeria",
    description: "Web platforma pizzerii. JS, HTML, CSS.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    slug: "blog-app",
    title: "Blog CRUD",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio6.png",
    repo: "https://github.com/SiwsON1/react-workshop-blog",
    description: "Create, read, update, delete posts.",
    stack: ["React", "Redux"],
  },
  {
    slug: "waitstaff-dashboard",
    title: "Dashboard kelnerski",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio5.png",
    repo: "https://github.com/SiwsON1/pizzeria-waiters-app",
    description: "Real-time zarządzanie stolikami w pizzerii.",
    stack: ["React", "Redux"],
  },
  {
    slug: "portrait-master",
    title: "Konkurs fotograficzny",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio7.png",
    repo: "https://github.com/SiwsON1/PortraitMaster-Vulnerabilities",
    description: "Strona konkursu fotograficznego z formularzem zgłoszeń.",
    stack: ["React", "Redux", "Express"],
  },
  {
    slug: "todo-realtime",
    title: "Real-time To-Do",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio8.png",
    repo: "https://github.com/SiwsON1/To-do-socketio",
    description: "Synchronizacja list zadań między klientami przez Socket.IO.",
    stack: ["React", "Socket.io"],
  },
  {
    slug: "kanban-todo",
    title: "Kanban To-Do",
    client: "Lab",
    year: 2022,
    category: "lab",
    image: "/projects/Portfolio10.png",
    repo: "https://github.com/SiwsON1/react-prework",
    description: "To-do list z kategoriami w kolumnach.",
    stack: ["React", "Webpack"],
  },
  {
    slug: "music-service",
    title: "Music service",
    client: "Lab",
    year: 2021,
    category: "lab",
    image: "/projects/Portfolio12.png",
    repo: "https://github.com/SiwsON1/Project-musicService",
    description: "Eksploracja, search i discover utworów.",
    stack: ["JavaScript", "Handlebars", "Bootstrap"],
  },
];

/**
 * Featured = ręcznie wybrane do prezentacji na home cabinet.
 * Galabau celowo POMIJAMY (klient nie chce się chwalić). Order = od najmocniejszego.
 */
export const FEATURED_SLUGS = [
  "kancelaria-mpiontek",
  "kosmoteka",
  "inbc",
  "rcom-service",
] as const;

export const featuredProjects = FEATURED_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!
).filter(Boolean);

export const commercialProjects = projects.filter((p) => p.category === "commercial");
export const labProjects = projects.filter((p) => p.category === "lab");
