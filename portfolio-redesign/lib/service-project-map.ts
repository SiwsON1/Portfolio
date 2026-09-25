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

// Tylko fakty sprawdzalne na żywej stronie albo w projects.ts. headless-wordpress celowo bez wpisu:
// nie ma jeszcze realizacji headless WP, więc strona nie udaje, że ją ma.
export const SERVICE_CASE_MAP: Record<string, ServiceCaseHint> = {
  "tworzenie-stron-wordpress": {
    projectSlug: "kancelaria-mpiontek",
    context:
      "Kancelaria adwokacka Marii Piontek z Łodzi działa na WordPressie z własnymi stylami. Każda z pięciu dziedzin prawa, którymi zajmuje się kancelaria, ma czytelne miejsce na stronie, a podstawy SEO są ustawione od pierwszego dnia.",
    highlight: "WordPress, własne style, SEO od startu",
  },
  "sklepy-internetowe-woocommerce": {
    projectSlug: "kosmoteka",
    context:
      "Kosmoteka.pl to sklep z teleskopami, lornetkami i mikroskopami na WordPressie z WooCommerce. Zrobiłem autorski wygląd kart produktów, poradniki zakupowe, integrację z hurtownią oraz bramki płatności i wysyłki. Zdjęcia sprzętu mają przezroczyste tło zamiast białego, więc katalog wygląda spójnie.",
    highlight: "WooCommerce, integracja z hurtownią, autorskie karty produktów",
  },
  "nowoczesne-strony-internetowe": {
    projectSlug: "cojestpolskie",
    context:
      "Cojestpolskie.pl ma własny język wizualny zamiast szablonu: układ wzorowany na rejestrze urzędowym, gilosz jak na papierach wartościowych, pieczątka z werdyktem i przesuwająca się taśma ostatnio sprawdzonych marek. Mimo animacji zbudowana strona dostaje w Lighthouse od 95 do 100 punktów, bo JavaScript ładuje się tylko tam, gdzie jest potrzebny.",
    highlight: "Autorski design, Lighthouse 95 do 100",
  },
  "nowoczesna-strona-firmowa-2026": {
    projectSlug: "kancelaria-mpiontek",
    context:
      "Strona kancelarii adwokackiej Marii Piontek z Łodzi to typowa strona małej firmy usługowej: kto prowadzi kancelarię, jakimi sprawami się zajmuje (karne, cywilne, rodzinne, administracyjne i gospodarcze) i jak się umówić. Bez zbędnych efektów, bo klient kancelarii szuka zaufania.",
    highlight: "Specjalizacje, zaufanie, prosta droga do kontaktu",
  },
  "next-js-software-house": {
    projectSlug: "cenynotarialne",
    context:
      "Cenynotarialne.pl to portal danych na Next.js oparty na Rejestrze Cen Nieruchomości: wyszukiwarka po lokalizacji i typie nieruchomości, porównanie median między obszarami, rankingi i interaktywne mapy MapLibre GL. Tysiące podstron lokalizacji generuje się z danych.",
    highlight: "Next.js, MapLibre GL, tysiące podstron z danych",
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
      "Strona apartamentów Złota Grota we Wrocławiu na WordPressie: zdjęcia apartamentów z jacuzzi, informacja o samodzielnym zameldowaniu i rezerwacja online bezpośrednio na stronie, bez prowizji dla pośrednika.",
    highlight: "WordPress, rezerwacja bez pośrednika",
  },
  "aplikacje-nextjs": {
    projectSlug: "kantorymapa",
    context:
      "Kantorymapa.pl to strona Next.js w czystej postaci: 140 podstron miast i 1900 kantorów generowanych statycznie przy buildzie, kursy NBP odświeżane codziennie automatycznym procesem, całość ładuje się poniżej sekundy. Programmatic SEO daje widoczność na setki fraz lokalnych bez ręcznego pisania treści.",
    highlight:
      "Next.js SSG + 140 miast programmatic SEO + LCP poniżej 1s",
  },
  "aplikacje-react": {
    projectSlug: "cenynotarialne",
    context:
      "Interaktywna część Cenynotarialne.pl to React: wyszukiwarka po lokalizacji i typie nieruchomości, porównanie median między obszarami i mapy MapLibre GL, które reagują na wybór użytkownika. Dane pochodzą z Rejestru Cen Nieruchomości.",
    highlight: "React, MapLibre GL, dane z RCN",
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
      "Kosmoteka.pl to sklep z dużymi zdjęciami sprzętu, czyli typowy kandydat na wolne ładowanie. Sklep stoi na lekkim motywie GeneratePress z LiteSpeed Cache, a zdjęcia produktów przechodzą przez własną wtyczkę, która serwuje je w rozmiarach dopasowanych do miejsca na stronie.",
    highlight: "GeneratePress, LiteSpeed Cache, własna obsługa zdjęć",
  },
  "integracja-woocommerce-z-baselinker": {
    projectSlug: "kosmoteka",
    context:
      "Kosmoteka.pl, sklep z teleskopami na WooCommerce, ma w BaseLinkerze skonfigurowane powiązania magazynów. Katalog hurtowni zostaje w jej magazynie, a do sklepu trafiają tylko wybrane pozycje skopiowane do Magazynu BaseLinker. Stany i ceny aktualizują się z pliku hurtowni, produkty w WooCommerce powstają przez REST API.",
    highlight:
      "WooCommerce + BaseLinker + powiązania magazynów z hurtownią",
  },
  "wdrozenia-ai": {
    projectSlug: "cojestpolskie",
    context:
      "Na cojestpolskie.pl model AI robi pierwszy research właściciela marki, ale nic nie trafia na stronę bez kontroli: skrypty porównują wynik z odpisem KRS i Centralnym Rejestrem Beneficjentów Rzeczywistych, a wpis bez potwierdzenia w rejestrze zostaje w szkicach. Model przyspiesza pracę, rejestry ją sprawdzają.",
    highlight: "Research AI z kontrolą w KRS i CRBR",
  },
};
