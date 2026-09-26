/**
 * Landingi branżowe pod frazy typu tworzenie stron dla X (URL = fraza) — usługa opisana od strony odbiorcy,
 * nie od strony technologii (tym zajmuje się lib/services.ts).
 * Plan: plans/seo-fala-1-branze.md
 */

export type Industry = {
  slug: string;
  title: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string[];
  pains: { title: string; body: string }[];
  mustHave: { title: string; body: string }[];
  stack: { label: string; body: string }[];
  pricing: { time: string; note: string };
  headings: { pains: string; mustHave: string; cases: string; stack: string; pricing: string; faq: string };
  /** Co wchodzi w cenę wdrożenia w tej konkretnej branży. */
  deliverables?: { label: string; body: string }[];
  /** Pięć kroków współpracy, konkretnych dla tej branży. */
  process: { step: string; title: string; body: string }[];
  /** Kogo świadomie odsyłam, żeby nie tracić czasu obu stron. */
  notFor: string[];
  faq: { q: string; a: string }[];
  cta: string;
};

/**
 * Realizacje podpięte pod branżę. Wyłącznie projekty, które faktycznie do niej
 * pasują: influencerzy i streamerzy nie mają żadnej i tak zostaje.
 */
export const INDUSTRY_CASES: Record<string, { projectSlug: string; note: string }[]> = {
  "tworzenie-stron-dla-kancelarii-prawnych": [
    {
      "projectSlug": "kancelaria-mpiontek",
      "note": "Kancelaria adwokacka z Łodzi: pięć obszarów prawa opisanych tak, żeby klient sam rozpoznał swoją sprawę."
    },
    {
      "projectSlug": "cenynotarialne",
      "note": "Portal cen transakcyjnych nieruchomości na Next.js, z widocznością na tysiącach lokalizacji."
    }
  ],
  "tworzenie-stron-dla-gabinetow-i-klinik": [
    {
      "projectSlug": "queen-scarlet",
      "note": "Klinika kosmetologii: zabiegi opisane językiem pacjentki, nie ulotką producenta sprzętu."
    }
  ],
  "tworzenie-stron-dla-producentow-mebli": [
    {
      "projectSlug": "multikon",
      "note": "Producent akcesoriów meblowych, nóg i stelaży: katalog pisany pod hurtownie i zakłady produkcyjne."
    },
    {
      "projectSlug": "stys-glass",
      "note": "Hartowanie szkła, balustrady i lustra na wymiar: produkt konfigurowalny, więc strona prowadzi do zapytania, nie do koszyka."
    }
  ],
  "tworzenie-stron-dla-hoteli-i-pensjonatow": [
    {
      "projectSlug": "apartamenty-zlota-grota",
      "note": "Apartamenty z jacuzzi we Wrocławiu: rezerwacja bezpośrednia i samodzielne zameldowanie zamiast prowizji dla portalu."
    },
    {
      "projectSlug": "maciejanka",
      "note": "Trzygwiazdkowy pensjonat pod Kobylą Górą: pobyty, udogodnienia i organizacja imprez na jednej stronie."
    }
  ],
  "tworzenie-stron-dla-firm-budowlanych": [
    {
      "projectSlug": "galabau-darius",
      "note": "Konfigurator ogrodzeń liczący wycenę na żywo, z galerią realizacji i panelem administracyjnym."
    },
    {
      "projectSlug": "dom-bez-wad",
      "note": "Termomodernizacja, ocieplenia i pompy ciepła: usługa dotowana, więc strona tłumaczy proces zanim klient zadzwoni."
    }
  ],
  "tworzenie-sklepow-internetowych-dla-marek-odziezowych": [
    {
      "projectSlug": "lumikids",
      "note": "Sklep z odzieżą dziecięcą: karty produktów z tabelami rozmiarów i składem, landingi kolekcji, równoległa sprzedaż na Allegro."
    },
    {
      "projectSlug": "kosmoteka",
      "note": "WooCommerce z autorskim designem kart produktów i integracją z hurtownią."
    }
  ],
  "tworzenie-stron-dla-influencerow": [],
  "tworzenie-stron-dla-streamerow": []
};

/** Usługi technologiczne powiązane z branżą. */
export const INDUSTRY_SERVICES: Record<string, string[]> = {
  "tworzenie-stron-dla-kancelarii-prawnych": [
    "tworzenie-stron-wordpress",
    "nowoczesna-strona-firmowa-2026",
    "opieka-wordpress"
  ],
  "tworzenie-stron-dla-gabinetow-i-klinik": [
    "tworzenie-stron-wordpress",
    "nowoczesna-strona-firmowa-2026",
    "przyspieszanie-stron-wordpress"
  ],
  "tworzenie-stron-dla-producentow-mebli": [
    "tworzenie-stron-wordpress",
    "headless-wordpress",
    "sklepy-internetowe-woocommerce"
  ],
  "tworzenie-stron-dla-hoteli-i-pensjonatow": [
    "tworzenie-stron-wordpress",
    "nowoczesne-strony-internetowe",
    "opieka-wordpress"
  ],
  "tworzenie-stron-dla-firm-budowlanych": [
    "tworzenie-stron-wordpress",
    "nowoczesna-strona-firmowa-2026",
    "aplikacje-nextjs"
  ],
  "tworzenie-sklepow-internetowych-dla-marek-odziezowych": [
    "sklepy-internetowe-woocommerce",
    "przyspieszanie-stron-wordpress",
    "opieka-wordpress"
  ],
  "tworzenie-stron-dla-influencerow": [
    "nowoczesne-strony-internetowe",
    "strony-jamstack",
    "sklepy-internetowe-woocommerce"
  ],
  "tworzenie-stron-dla-streamerow": [
    "strony-jamstack",
    "nowoczesne-strony-internetowe",
    "aplikacje-nextjs"
  ]
};

export const industries: Industry[] = [
  {
    slug: "tworzenie-stron-dla-kancelarii-prawnych",
    title: "Kancelarie prawne",
    keyword: "tworzenie stron dla kancelarii prawnych",
    metaTitle: "Tworzenie stron dla kancelarii prawnych: etyka i kontakt",
    metaDescription: "Tworzenie stron dla kancelarii prawnych: specjalizacje, bezpieczny formularz i treść zgodna z etyką zawodową. Termin 4-6 tygodni.",
    h1: "Tworzenie stron dla kancelarii prawnych",
    lead: "Projektuję strony dla kancelarii, adwokatów, radców prawnych i notariuszy, które jasno pokazują zakres pomocy i ułatwiają bezpieczny kontakt. Pracuję z Wrocławia, zdalnie z kancelariami z całej Polski i z Niemiec.",
    intro: [
      "Dobra strona prawnika musi pogodzić czytelną prezentację specjalizacji z zasadami etyki zawodowej. Przy tworzeniu stron dla kancelarii prawnych porządkuję dziedziny prawa, profile prawników i drogę do kontaktu, a formularz ograniczam do potrzebnych danych. Serwis mogę wdrożyć na [WordPressie z własnym motywem](/uslugi/tworzenie-stron-wordpress), bez Elementora, Divi i innych kreatorów.",
      "Dla kancelarii adwokackiej Marii Piontek przygotowałem stronę opisującą między innymi prawo karne, cywilne, rodzinne, administracyjne i gospodarcze. [Realizacja kancelarii](/projekty/kancelaria-mpiontek) pokazuje, jak można rozdzielić zakres pomocy i jednocześnie zachować spokojny, informacyjny charakter serwisu. Przy większym projekcie mogę też wykorzystać [Next.js](/uslugi/aplikacje-nextjs), jeśli wymaga tego funkcjonalność strony."
    ],
    pains: [
      {
        title: "Nieczytelne specjalizacje",
        body: "Jeśli wszystkie specjalizacje mieszczą się w jednym ogólnym opisie, osoba szukająca pomocy może nie rozpoznać, czy kancelaria prowadzi jej rodzaj sprawy. Dlatego dzielę ofertę według dziedzin prawa i prowadzę użytkownika do właściwej specjalizacji albo prawnika."
      },
      {
        title: "Kontakt ukryty w menu",
        body: "Osoba szukająca pilnej pomocy nie powinna przeszukiwać całej witryny w poszukiwaniu numeru. Telefon i e-mail pokazuję bez przewijania, również w wersji mobilnej."
      },
      {
        title: "Ryzykowny formularz",
        body: "Wiadomość może zawierać dane osobowe lub informacje objęte tajemnicą zawodową. Formularz kontaktowy ograniczam do potrzebnych pól, chronię szyfrowaniem SSL i uzupełniam właściwą klauzulą RODO."
      },
      {
        title: "Reklamowy ton treści",
        body: "Krzykliwe hasła i porównania z innymi kancelariami mogą naruszać zasady etyki zawodowej. Treść serwisu przedstawia zamiast nich zakres pomocy, doświadczenie zespołu i sposób prowadzenia kontaktu."
      }
    ],
    mustHave: [
      {
        title: "Czytelny zakres pomocy",
        body: "Każda specjalizacja otrzymuje własną podstronę i zrozumiały opis. Klient szybciej ocenia, czy kancelaria zajmuje się jego sprawą, a Google może poprawnie indeksować ofertę."
      },
      {
        title: "Profile prawników",
        body: "Profile pokazują kwalifikacje, obszary praktyki i języki obsługi. Pomagają wybrać prawnika odpowiedniego do konkretnego problemu i wzmacniają wiarygodność witryny."
      },
      {
        title: "Bezpieczny formularz",
        body: "Formularz działa przez szyfrowane połączenie i zbiera wyłącznie niezbędne informacje. Obok umieszczam jasną klauzulę dotyczącą przetwarzania danych osobowych."
      },
      {
        title: "Blog ekspercki",
        body: "Blog pozwala publikować wyjaśnienia odpowiadające na realne problemy klientów. Kategorie, przyjazne adresy i szablony wpisów wspierają pozycjonowanie oraz samodzielny rozwój treści."
      },
      {
        title: "Lokalne dane kancelarii",
        body: "Adres, mapa dojazdu i Profil Firmy w Google wspierają lokalną widoczność kancelarii. Spójne dane w serwisie i wynikach wyszukiwania ułatwiają także dotarcie na spotkanie."
      },
      {
        title: "Wersja angielska",
        body: "Oddzielna wersja językowa pomaga obsługiwać cudzoziemców i firmy zagraniczne. Jej struktura pozwala Google poprawnie rozpoznawać i indeksować przetłumaczone podstrony."
      }
    ],
    stack: [
      {
        label: "WordPress",
        body: "WordPress z autorskim motywem i CMS zapewnia swobodną edycję specjalizacji, profili oraz artykułów bez Elementora, Avady ani Divi."
      },
      {
        label: "Next.js",
        body: "Next.js sprawdza się przy rozbudowanych portalach prawnych, wyszukiwarkach danych i serwisach obejmujących wiele lokalizacji."
      },
      {
        label: "schema.org",
        body: "Dane strukturalne opisują kancelarię, prawników, artykuły i dane kontaktowe w formie zrozumiałej dla Google oraz innych wyszukiwarek."
      },
      {
        label: "Search Console",
        body: "Witrynę podłączam od pierwszego dnia, aby kontrolować indeksowanie podstron, mapę serwisu i problemy z widocznością w Google."
      }
    ],
    pricing: {
      time: "4-6 tygodni",
      note: "Na wycenę wpływają liczba specjalizacji, profile zespołu, wersje językowe i zakres przygotowania treści. Konkretną kwotę podaję po przeczytaniu briefu."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona dla mojej kancelarii?",
        a: "Najwięcej zależy od liczby specjalizacji, profili prawników, wersji językowych i zakresu pracy nad treścią. Po krótkiej rozmowie i briefie przygotuję wycenę z zakresem oraz terminem."
      },
      {
        q: "Ile potrwa przygotowanie strony mojej kancelarii?",
        a: "Dla strony firmowej lub usługowej typowy termin to 4-6 tygodni. Dokładny harmonogram ustalam po poznaniu zakresu i materiałów."
      },
      {
        q: "Czy na stronie mojej kancelarii mogę reklamować usługi?",
        a: "Projektuję treść tak, aby przedstawiała zakres pomocy, kwalifikacje i sposób kontaktu bez obietnic wyniku czy agresywnego tonu. Zasady informowania zależą od zawodu i właściwego samorządu, dlatego treści prawne po Twojej stronie powinny być zatwierdzone."
      },
      {
        q: "Jak zabezpieczysz formularz na stronie kancelarii?",
        a: "Ograniczam formularz do potrzebnych pól, używam szyfrowanego połączenia i umieszczam wskazaną klauzulę dotyczącą przetwarzania danych. Nie projektuję pierwszego kontaktu jako miejsca na rozbudowany opis sprawy."
      },
      {
        q: "Czy będę mógł sam edytować treści strony?",
        a: "Tak. Na WordPressie przygotowuję własny motyw i pola ACF, dzięki którym możesz edytować ustalone sekcje zgodnie z projektem. Przy przekazaniu pokazuję Ci obsługę strony podczas szkolenia online."
      },
      {
        q: "Czy blog na stronie mojej kancelarii ma sens?",
        a: "Mogę przygotować bazę wiedzy z kategoriami i szablonami wpisów, dzięki czemu łatwiej rozwijać treści odpowiadające na pytania związane ze specjalizacjami. Nie obiecuję konkretnych pozycji w Google."
      },
      {
        q: "Jakie będą koszty utrzymania strony kancelarii?",
        a: "Osobno rozliczasz domenę, hosting i ewentualne płatne rozszerzenia. Pomagam dobrać hosting do projektu, na przykład Hostinger albo cyber_folks, a zakres późniejszej opieki możemy ustalić osobno."
      },
      {
        q: "Czy przeniesiesz treści ze starej strony kancelarii?",
        a: "Tak, zakres przenoszonych podstron, profili i publikacji ustalamy przed pracą. Przy zmianie adresów przygotowuję przekierowania 301, a migrację planuję tak, żeby przerwa była jak najkrótsza. Nie obiecuję zachowania dotychczasowych pozycji w Google."
      },
      {
        q: "Czy przygotujesz regulamin i dokumenty prawne dla strony?",
        a: "Mogę umieścić na stronie zatwierdzone przez Ciebie treści i skonfigurować mechanizm zgód. Nie przygotowuję samodzielnie interpretacji prawnej tego, jakie dokumenty są wymagane w Twojej kancelarii."
      },
      {
        q: "Czy kancelaria musi mieć stronę internetową?",
        a: "Nie rozstrzygam prawnego obowiązku posiadania strony, ponieważ zależy to od sytuacji kancelarii i właściwych regulacji. Projektuję serwis jako uporządkowane źródło informacji o specjalizacjach, prawnikach, danych kontaktowych i sposobie umówienia konsultacji."
      },
      {
        q: "Czy dla nowej kancelarii wystarczy prosta wizytówka?",
        a: "Tak, jeśli kancelaria ma niewielki zespół, ograniczoną liczbę specjalizacji i nie planuje jeszcze rozbudowanej bazy wiedzy. Projektuję ją jednak tak, aby najważniejsze informacje były czytelne, a zakres można było później rozszerzyć zgodnie z ustaloną strukturą."
      },
      {
        q: "Kto przygotuje teksty na stronę kancelarii?",
        a: "Możesz dostarczyć gotowe teksty albo materiały robocze, z których ułożę strukturę i czytelną treść. Merytorykę prawniczą dostarczasz lub zatwierdzasz po swojej stronie, ponieważ nie tworzę interpretacji prawnych w imieniu kancelarii."
      },
      {
        q: "Czy mogę mieć adres e-mail w domenie kancelarii?",
        a: "Tak, domena kancelarii może służyć zarówno stronie, jak i zawodowym adresom e-mail. Sposób konfiguracji, liczbę skrzynek i dostawcę poczty ustalam przy rozpoczęciu współpracy."
      },
      {
        q: "Czy projekt strony będzie indywidualny?",
        a: "Tak. Przygotowuję makiety w Figmie, przewiduję dwie tury poprawek i proszę o akceptację projektu przed kodowaniem. Układ dopasowuję do specjalizacji, wielkości zespołu, materiałów i planowanego sposobu rozwijania strony."
      }
    ],
    cta: "Prześlij brief kancelarii, a przygotuję wycenę tworzenia nowej strony",
    deliverables: [
      {
        label: "Struktura specjalizacji",
        body: "Przygotowuję stronę główną, prezentację zespołu, kontakt z formularzem oraz podstrony specjalizacji. Ich zakres ustalamy przed wdrożeniem."
      },
      {
        label: "Profile prawników",
        body: "Tworzę edytowalny w CMS szablon profilu z zakresem praktyki, doświadczeniem, publikacjami i danymi kontaktowymi."
      },
      {
        label: "Baza wiedzy",
        body: "Porządkuję publikacje w kategorie, przygotowuję wyszukiwarkę artykułów i łączę treści z odpowiednimi specjalizacjami kancelarii."
      },
      {
        label: "Pomiar zapytań",
        body: "Konfiguruję pomiar formularzy, Google Search Console i mechanizm zgód. GA4 uruchamiam po zgodzie na cookies."
      },
      {
        label: "Przekazanie kancelarii",
        body: "Prowadzę szkolenie online z edycji treści i pokazuję, jak bezpiecznie aktualizować stronę. Po starcie zapewniam 60 dni gwarancji i bezpłatnych poprawek, a później mogę przejąć opiekę w miesięcznym abonamencie."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach kancelarii prawnych",
      mustHave: "Czego wymaga strona kancelarii prawnej",
      cases: "Strony dla kancelarii, które zrobiłem",
      stack: "Jak tworzę strony dla kancelarii prawnych",
      pricing: "Ile kosztuje strona dla kancelarii prawnej",
      faq: "Tworzenie stron dla kancelarii prawnych: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Rozmawiamy o specjalizacjach, rodzajach spraw i o tym, czego przy Twojej izbie napisać nie wolno."
      },
      {
        step: "02",
        title: "Struktura i treść",
        body: "Układam podział na dziedziny prawa, profile prawników i bazę wiedzy. Teksty piszemy razem albo biorę je na siebie."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Makieta trafia do akceptacji przed kodem. Typografia dobrana pod długie czytanie, nie pod efekt."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Autorski motyw, formularz z klauzulą informacyjną, szyfrowanie, dane strukturalne, mapa witryny."
      },
      {
        step: "05",
        title: "Start i szkolenie",
        body: "Przenosiny bez przerwy w działaniu, godzina szkolenia z panelu i instrukcja w PDF."
      }
    ],
    notFor: [
      "Szukasz agresywnej reklamy usług prawnych. Etyka zawodowa jest tu granicą, której nie przekraczam.",
      "Masz własny dział marketingu i procedurę przetargową. Pracuję bezpośrednio z decydentem, nie przez komitet.",
      "Oczekujesz gwarancji pierwszego miejsca w Google. Takich obietnic nie składam."
    ]
  },
  {
    slug: "tworzenie-stron-dla-gabinetow-i-klinik",
    title: "Gabinety i kliniki",
    keyword: "tworzenie stron dla gabinetów i klinik",
    metaTitle: "Tworzenie stron dla gabinetów i klinik: rejestracja",
    metaDescription: "Tworzenie stron dla gabinetów i klinik: rejestracja online, cennik zabiegów i formularz zgodny z RODO. Realizacja 4-6 tygodni.",
    h1: "Tworzenie stron dla gabinetów i klinik",
    lead: "Projektuję strony dla gabinetów i klinik, na których pacjent szybko znajduje usługę, cennik, kontakt i sposób umówienia wizyty. Pracuję z Wrocławia, zdalnie z placówkami z całej Polski i z Niemiec.",
    intro: [
      "Pacjent często trafia na stronę z telefonu i chce od razu wiedzieć, gdzie przyjmuje specjalista, ile kosztuje usługa i jak się zapisać. Przy tworzeniu stron dla gabinetów i klinik porządkuję ofertę, cennik oraz ścieżkę kontaktu, a formularz ograniczam do danych potrzebnych na pierwszym etapie. Stronę mogę oprzeć na [WordPressie z własnym motywem](/uslugi/tworzenie-stron-wordpress).",
      "Dla kliniki kosmetologii Queen Scarlet przygotowałem stronę WordPress prezentującą między innymi kriolipolizę i laserową stymulację kolagenu. [Projekt Queen Scarlet](/projekty/queen-scarlet) pokazuje układ oferty zabiegowej, profili specjalistów i zapisów. Po publikacji mogę zapewnić [opiekę nad WordPressem](/uslugi/opieka-wordpress) albo zająć się [przyspieszeniem istniejącej witryny](/uslugi/przyspieszanie-stron-wordpress)."
    ],
    pains: [
      {
        title: "Rejestracja bez jasnej ścieżki",
        body: "Kilka numerów, formularzy i różnych sposobów zapisu potrafi utrudnić pacjentowi wybór właściwej drogi. Łączę więc każdą usługę z odpowiednią metodą rejestracji i pokazuję ją w stałym, łatwym do znalezienia miejscu."
      },
      {
        title: "Oferta bez cen",
        body: "Brak nawet orientacyjnego cennika utrudnia porównanie zabiegów i zwiększa liczbę podstawowych pytań. Tworzę przejrzystą tabelę, którą personel może później aktualizować w CMS."
      },
      {
        title: "Wrażliwe dane pacjentów",
        body: "Zwykły formularz kontaktowy nie powinien zbierać obszernego wywiadu medycznego. Rozdzielam pierwszy kontakt od przekazywania danych o zdrowiu i dodaję wymagane informacje o ich przetwarzaniu."
      },
      {
        title: "Ciężkie zdjęcia zabiegów",
        body: "Duże pliki pogarszają Core Web Vitals i wydłużają otwieranie witryny na telefonie. Konwertuję fotografie do WebP lub AVIF oraz dobieram ich rozmiar do ekranu."
      }
    ],
    mustHave: [
      {
        title: "Rejestracja online",
        body: "Przycisk zapisu prowadzi z podstrony zabiegu bezpośrednio do właściwego kalendarza albo usługi. Integrację dopasowuję do systemu używanego przez Twój gabinet."
      },
      {
        title: "Mobilna ścieżka kontaktu",
        body: "Responsywna wersja mobilna pozwala wybrać numer jednym dotknięciem. Adres, godziny, mapa i formularz pozostają łatwo dostępne na małym ekranie."
      },
      {
        title: "Przejrzysty cennik",
        body: "Ceny grupuję według rodzaju konsultacji lub zabiegu. Cennik można aktualizować przez CMS bez przebudowy całej strony placówki."
      },
      {
        title: "Legalna galeria efektów",
        body: "Zdjęcia przed zabiegiem i po nim publikujesz po uzyskaniu odpowiedniej zgody pacjenta. Galeria zawiera rzeczowy opis bez gwarantowania identycznego rezultatu każdej osobie."
      },
      {
        title: "Lokalna widoczność",
        body: "Spójny adres, mapa i opinie z Profilu Firmy w Google pomagają potwierdzić lokalizację. Podstrony usług wspierają lokalne pozycjonowanie bez sztucznego powtarzania fraz."
      },
      {
        title: "Odpowiedzialne opisy usług",
        body: "Treści wyjaśniają przebieg, wskazania, przeciwwskazania i sposób umówienia wizyty. Nie zawierają obietnic, które mogłyby naruszać ograniczenia reklamy usług medycznych."
      }
    ],
    stack: [
      {
        label: "Booksy, Docplanner, Proassist",
        body: "Podłączam wybrany system rejestracji do witryny, aby pacjent przechodził z konkretnej usługi prosto do dostępnych terminów."
      },
      {
        label: "Profil Firmy w Google",
        body: "Dane placówki, mapa i opinie tworzą spójną drogę od lokalnego wyniku wyszukiwania Google do strony oraz rejestracji."
      },
      {
        label: "WordPress",
        body: "Bazowo stawiam gabinet na WordPressie z autorskim motywem, bo cennik i opisy zabiegów zmieniasz samodzielnie w panelu. Next.js proponuję dopiero przy własnym systemie zapisów albo strefie pacjenta za logowaniem."
      },
      {
        label: "RODO i SSL",
        body: "Formularz ma szyfrowane połączenie SSL, ograniczony zakres pól i klauzulę RODO dopasowaną do celu zbierania danych."
      }
    ],
    pricing: {
      time: "4-6 tygodni",
      note: "Na wycenę wpływają liczba usług, rozbudowanie cennika, galeria efektów oraz wybrany system rejestracji. Najwięcej zmienia to ostatnie, bo rejestracja bywa wtyczką, a bywa integracją z zewnętrznym systemem."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona mojego gabinetu lub kliniki?",
        a: "Najwięcej zmienia sposób rejestracji, bo prosty formularz to inny zakres niż połączenie strony z zewnętrznym systemem. Biorę też pod uwagę liczbę usług, cennik i galerię. Po rozmowie i briefie przygotuję wycenę z zakresem oraz terminem."
      },
      {
        q: "Ile potrwa przygotowanie strony mojej placówki?",
        a: "Dla strony firmowej lub usługowej typowy termin to 4-6 tygodni. Dokładny harmonogram zależy od zakresu i gotowości materiałów."
      },
      {
        q: "Jaki system rejestracji połączysz ze stroną mojego gabinetu?",
        a: "Najpierw sprawdzam, z jakiego systemu już korzystasz i w jaki sposób pozwala połączyć się ze stroną. Dopiero wtedy ustalam najlepszy sposób przejścia z konkretnej usługi do zapisu."
      },
      {
        q: "Czy formularz na stronie może zbierać dane o zdrowiu?",
        a: "Na etapie pierwszego kontaktu ograniczam formularz do podstawowych danych i wyboru usługi. Nie projektuję zwykłego formularza kontaktowego jako miejsca na szczegółowy wywiad medyczny."
      },
      {
        q: "Czy mogę pokazywać na stronie zdjęcia efektów zabiegów?",
        a: "Mogę przygotować galerię na materiały, które masz prawo publikować. Zdjęcia opisuję rzeczowo, bez obietnicy, że każda osoba uzyska taki sam rezultat."
      },
      {
        q: "Czy przygotujesz stronę pod lokalną widoczność w Google?",
        a: "Tak. Przy wdrożeniu dbam między innymi o strukturę nagłówków, dane strukturalne, mapę strony i Google Search Console. Nie obiecuję konkretnych pozycji w wynikach wyszukiwania."
      },
      {
        q: "Jaki hosting wybrać dla strony mojego gabinetu?",
        a: "Pomagam dobrać hosting do strony i sposobu rejestracji, na przykład Hostinger albo cyber_folks. Sprawdzam też wymagania techniczne projektu, kopie zapasowe i zasoby potrzebne do sprawnego działania."
      },
      {
        q: "Czy przeniesiesz starą stronę kliniki bez przerwy?",
        a: "Nową wersję przygotowuję przed przełączeniem domeny i migrację planuję tak, żeby przerwa była jak najkrótsza. Przy zmianie DNS może jednak wystąpić krótka niedostępność."
      },
      {
        q: "Czy przygotujesz stronę zgodnie z wymaganiami dostępności?",
        a: "Mogę wdrożyć uzgodnione wymagania techniczne, w tym zadbać o kontrast, obsługę klawiaturą, opisy pól i strukturę nagłówków. Jeśli Twoją placówkę obejmują szczególne obowiązki prawne, potrzebuję od Ciebie ich zatwierdzonej interpretacji."
      },
      {
        q: "Czy potrzebuję strony, skoro mam profil w portalu rezerwacyjnym?",
        a: "Profil może wystarczyć do przyjmowania zapisów, ale nie zastępuje własnej domeny ani pełnej prezentacji oferty. Projektuję stronę jako miejsce na opisy zabiegów, cennik, zespół i treści widoczne w Google, a portal może nadal obsługiwać rezerwacje."
      },
      {
        q: "Czy mogę sama edytować cennik zabiegów?",
        a: "Tak, mogę przygotować cennik oraz inne uzgodnione sekcje do samodzielnej edycji w WordPressie. Podczas szkolenia pokazuję, jak zmieniać treści bez przebudowy całej strony."
      },
      {
        q: "Czy strona połączy się z Booksy albo innym systemem rezerwacji?",
        a: "Najpierw sprawdzam, jakiego systemu używasz i jakie sposoby integracji udostępnia. Na tej podstawie ustalam, czy możliwe będzie przejście bezpośrednio do usługi, osadzenie wybranego elementu, czy jedynie skierowanie użytkownika do profilu rezerwacyjnego."
      },
      {
        q: "Jakie materiały przygotować do strony gabinetu?",
        a: "Potrzebuję informacji o zabiegach, cennika, danych placówki, sposobu rejestracji, opisów zespołu oraz zdjęć, które możesz legalnie publikować. Dokładną listę materiałów ustalam przy rozpoczęciu współpracy, ponieważ zależy ona od zakresu strony."
      },
      {
        q: "Czy warto prowadzić bloga na stronie gabinetu?",
        a: "Warto, jeśli możesz regularnie publikować rzetelne treści odpowiadające na rzeczywiste pytania klientów lub pacjentów. Pomagam zaplanować strukturę sekcji poradnikowej, ale nie traktuję bloga jako obowiązkowego dodatku do każdej strony ani nie obiecuję dzięki niemu konkretnych pozycji w Google."
      }
    ],
    cta: "Prześlij brief gabinetu, a przygotuję wycenę strony z rejestracją",
    deliverables: [
      {
        label: "Katalog zabiegów",
        body: "Przygotowuję podstrony usług z miejscem na wskazania, przeciwwskazania, przygotowanie, przebieg i zalecenia. Zakres ustalamy przed wdrożeniem."
      },
      {
        label: "Zespół placówki",
        body: "Tworzę szablon profilu specjalisty z kwalifikacjami, zakresem świadczeń, miejscem przyjęć i odnośnikiem do rejestracji."
      },
      {
        label: "Rejestracja wizyt",
        body: "Łączę stronę z wybranym sposobem rejestracji, ustawiam przyciski zapisu przy usługach i testuję ścieżkę na telefonie."
      },
      {
        label: "Informacje dla pacjenta",
        body: "Przygotowuję sekcje na cennik, przygotowanie do wizyty, pliki do pobrania, dojazd i zasady odwoływania terminów."
      },
      {
        label: "Kontrola wydajności",
        body: "Optymalizuję stronę pod Core Web Vitals i przed oddaniem sprawdzam wynik Lighthouse na telefonie. Celem jest wynik 90+ oraz LCP poniżej 2,5 s."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach gabinetów i klinik",
      mustHave: "Czego wymaga strona gabinetu",
      cases: "Strony dla gabinetów, które zrobiłem",
      stack: "Jak tworzę strony dla gabinetów i klinik",
      pricing: "Ile kosztuje strona dla gabinetu",
      faq: "Tworzenie stron dla gabinetów i klinik: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Spisujemy zabiegi, cennik, godziny i to, kto przyjmuje w gabinecie."
      },
      {
        step: "02",
        title: "Rejestracja",
        body: "Wybieramy system zapisów i sprawdzam, jak realnie wpina się w stronę."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Makieta powstaje od ekranu telefonu, bo stamtąd przychodzi większość pacjentów."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Motyw, cennik do samodzielnej edycji, formularz z klauzulą RODO, galeria efektów z kontrolą zgód."
      },
      {
        step: "05",
        title: "Start",
        body: "Publikacja, uporządkowany Profil Firmy w Google i szkolenie z dodawania zabiegów."
      }
    ],
    notFor: [
      "Potrzebujesz systemu do dokumentacji medycznej. To osobne oprogramowanie, nie strona internetowa.",
      "Chcesz publikować zdjęcia pacjentów bez zgód albo obiecywać konkretny efekt zabiegu.",
      "Zależy Ci wyłącznie na najniższej cenie. Poniżej pewnego progu zostaje szablon, nie wdrożenie."
    ]
  },
  {
    slug: "tworzenie-sklepow-internetowych-dla-marek-odziezowych",
    title: "Marki odzieżowe",
    keyword: "tworzenie sklepów internetowych dla marek odzieżowych",
    metaTitle: "Tworzenie sklepów internetowych dla marek odzieżowych",
    metaDescription: "Tworzenie sklepów internetowych dla marek odzieżowych: warianty, tabela rozmiarów, płatności i Allegro. Realizacja 6-8 tygodni.",
    h1: "Tworzenie sklepów internetowych dla marek odzieżowych",
    lead: "Buduję sklepy dla marek odzieżowych, w których rozmiary, kolory, stany magazynowe i kolekcje pozostają czytelne również na telefonie. Pracuję z Wrocławia, zdalnie z markami z całej Polski i z Niemiec.",
    intro: [
      "W sklepie odzieżowym karta produktu musi pomagać wybrać właściwy wariant, a nie dokładać kolejnych pytań przed zakupem. Przy tworzeniu sklepów internetowych dla marek odzieżowych porządkuję kategorie, warianty, tabele wymiarów i informacje o dostępności. Wdrożenie mogę oprzeć na [WooCommerce](/uslugi/sklepy-internetowe-woocommerce) z własnym motywem i panelem do edycji treści.",
      "Przy sklepie [LumiKids](/projekty/lumikids) pracowałem nad warstwą wizualną, stronami kolekcji, kartami produktów i strukturą kategorii. Przy migracji przygotowuję przekierowania starych adresów i sprawdzam techniczne elementy SEO, ale nie obiecuję zachowania dotychczasowych pozycji w Google."
    ],
    pains: [
      {
        title: "Chaos w wariantach",
        body: "Gdy wybór rozmiaru i koloru jest nieczytelny, klient może zamówić niewłaściwy wariant albo zrezygnować z zakupu. Na karcie produktu pokazuję stan danego wariantu, odpowiednie zdjęcie i łatwy dostęp do tabeli wymiarów."
      },
      {
        title: "Niepewny dobór rozmiaru",
        body: "Klient odkłada zakup, gdy nie potrafi porównać wymiarów ubrania ze swoją sylwetką. Sklep odzieżowy ogranicza tę niepewność przez tabelę, instrukcję mierzenia i informację o kroju."
      },
      {
        title: "Rozproszone stany magazynowe",
        body: "Sprzedaż w witrynie i na Allegro może przyjąć zamówienie produktu, którego już nie ma. Integracja synchronizuje ceny oraz stany między kanałami w zakresie, na jaki pozwala użyty system."
      },
      {
        title: "Słaba sprzedaż mobilna",
        body: "Duże zdjęcia, filtry i wybór wariantów łatwo przeciążają mały ekran. Projektuję responsywny sklep tak, aby znalezienie produktu, dodanie go do koszyka i płatność wymagały minimum działań."
      }
    ],
    mustHave: [
      {
        title: "Warianty bez pomyłek",
        body: "Rozmiary i kolory łączę z konkretnymi stanami, zdjęciami oraz oznaczeniami dostępności. Niedostępnego połączenia klient nie może przypadkowo dodać do koszyka."
      },
      {
        title: "Czytelna tabela rozmiarów",
        body: "Tabela może różnić się między kategoriami lub producentami odzieży. Obok wymiarów umieszczam prostą instrukcję mierzenia i ważne informacje o fasonie."
      },
      {
        title: "Landingi kolekcji",
        body: "Każda kolekcja otrzymuje własną stronę, narrację, zdjęcia i dobrany zestaw produktów. Stronę kolekcji można opublikować przed premierą, a po sezonie zostawić w serwisie, żeby nie tracić jej pozycji w Google."
      },
      {
        title: "Kategorie pod wyszukiwarkę",
        body: "Frazy zakupowe przypisuję do kategorii i filtrów tak, aby podstrony nie konkurowały ze sobą. Opisy wspierają pozycjonowanie, pomagają wybrać produkt i nie zasłaniają katalogu."
      },
      {
        title: "Płatności i dostawy",
        body: "Sklep może obsługiwać Przelewy24, BLIK, InPost i Paczkomaty. Klient widzi dostępne metody, koszt oraz sposób odbioru przed zatwierdzeniem zamówienia."
      },
      {
        title: "Pomiar sprzedaży",
        body: "GA4 rejestruje między innymi wyświetlenia kart produktów, dodania do koszyka i zakupy. Dane wskazują etap, na którym klienci najczęściej rezygnują."
      }
    ],
    stack: [
      {
        label: "WooCommerce",
        body: "WooCommerce to sklep na WordPressie: obsługuje katalog, warianty, zamówienia i kupony, a Ty nie jesteś uwiązany do zamkniętej platformy. Przy kilku tysiącach produktów albo sprzedaży na kilka rynków warto rozważyć headless na Next.js."
      },
      {
        label: "Allegro",
        body: "Integracja sklepu z Allegro może synchronizować oferty, ceny, zamówienia i stany magazynowe w zakresie, jaki udostępnia wybrane rozwiązanie."
      },
      {
        label: "InPost",
        body: "Klient wybiera Paczkomat na mapie, a dane punktu trafiają do zamówienia i procesu przygotowania przesyłki."
      },
      {
        label: "Przelewy24",
        body: "Bramka zapewnia szybkie płatności, w tym BLIK, oraz automatycznie przekazuje do sklepu informację o opłaceniu zamówienia."
      }
    ],
    pricing: {
      time: "6-8 tygodni",
      note: "Wycena zależy od liczby szablonów, wariantów produktów, integracji oraz zakresu migracji danych. Migracja ze starego sklepu potrafi ważyć więcej niż sam projekt, więc pytam o nią na początku rozmowy."
    },
    faq: [
      {
        q: "Ile będzie kosztować sklep dla mojej marki odzieżowej?",
        a: "Największy wpływ mają warianty produktów, integracje i ewentualna migracja starego katalogu. Po krótkiej rozmowie i briefie przygotuję wycenę z zakresem oraz terminem."
      },
      {
        q: "Ile potrwa przygotowanie mojego sklepu odzieżowego?",
        a: "Mniejszy sklep WooCommerce zwykle zajmuje 6-8 tygodni. Przy bardziej rozbudowanym sklepie z B2B, wersjami językowymi albo migracją typowy termin to 10-14 tygodni."
      },
      {
        q: "Czy przeniesiesz mój sklep z Shopera albo Shopify?",
        a: "Mogę przeprowadzić migrację po sprawdzeniu danych dostępnych do eksportu. Przed przenosinami ustalam mapowanie kategorii, wariantów i adresów, a dla zmienionych adresów przygotowuję przekierowania 301."
      },
      {
        q: "Czy mój sklep może synchronizować stany z Allegro?",
        a: "Tak, jeśli wybrane rozwiązanie obsługuje strukturę Twoich ofert i wariantów. Przed wdrożeniem ustalam, który system ma być źródłem cen, stanów i opisów."
      },
      {
        q: "Kto wprowadzi produkty do mojego sklepu?",
        a: "Zakres produktów potrzebnych do uruchomienia ustalamy przed pracą. Mogę też przygotować wzorzec i panel, dzięki którym później samodzielnie dodasz kolejne pozycje, albo zaplanować import, jeśli masz uporządkowane dane."
      },
      {
        q: "Czy przygotujesz zdjęcia produktów?",
        a: "Nie wykonuję sesji fotograficznych. Mogę określić potrzebne kadry, proporcje i formaty, a przekazane zdjęcia przygotować do użycia w sklepie i przypisać do wariantów."
      },
      {
        q: "Jakie stałe koszty będzie miał mój sklep?",
        a: "Po Twojej stronie pozostają między innymi domena, hosting, operator płatności, dostawy i używane płatne rozszerzenia. Pomagam dobrać hosting, na przykład Hostinger albo cyber_folks, i przed uruchomieniem wskazuję elementy, które będą generować stałe opłaty."
      },
      {
        q: "Czy wdrożysz obsługę zwrotów w moim sklepie?",
        a: "Mogę przygotować uzgodnioną procedurę, formularz i powiadomienia. Treść dokumentów prawnych przekazujesz mi po zatwierdzeniu samodzielnie albo z prawnikiem."
      },
      {
        q: "Czy sklep poradzi sobie z większym ruchem podczas premiery?",
        a: "Przed oddaniem sprawdzam wydajność strony, a celem jest Lighthouse 90+ na telefonie i LCP poniżej 2,5 s. Dobór hostingu i dodatkowych zasobów ustalam do konkretnego projektu oraz spodziewanego obciążenia."
      },
      {
        q: "Czy WooCommerce nadaje się dla małej marki odzieżowej?",
        a: "Tak, WooCommerce może obsłużyć katalog ubrań, warianty, kolekcje, zamówienia oraz integracje z zewnętrznymi systemami. Polecam go szczególnie wtedy, gdy zależy Ci na własnym projekcie sklepu i możliwości dalszego rozwoju funkcji."
      },
      {
        q: "Jak ograniczyć zwroty w sklepie z ubraniami?",
        a: "Przygotowuję czytelne tabele wymiarów, instrukcje mierzenia oraz miejsce na informacje o fasonie, materiale i rozmiarze prezentowanym na modelce. Dbam też o to, aby zdjęcia i opisy odpowiadały konkretnym wariantom produktu."
      },
      {
        q: "Czy sklep może obsługiwać przedsprzedaż i dropy kolekcji?",
        a: "Tak, mogę przygotować zapowiedzi produktów, strony premierowe, przedsprzedaż oraz powiadomienia o dostępności. Sposób realizacji zamówień zawierających produkty dostępne i przedsprzedażowe ustalam przy rozpoczęciu współpracy."
      },
      {
        q: "Czy mogę sprzedawać jednocześnie w sklepie i na Allegro?",
        a: "Tak, mogę połączyć WooCommerce z Allegro bezpośrednio albo przez system pośredni, na przykład BaseLinker. Przed wdrożeniem ustalam, który system będzie źródłem stanów, cen, opisów i danych o zamówieniach."
      },
      {
        q: "Jak pokazywać promocje zgodnie z dyrektywą Omnibus?",
        a: "Przy informacji o obniżce przygotowuję miejsce na najniższą cenę produktu z 30 dni przed jej wprowadzeniem. Ostateczną treść komunikatów i dokumentów prawnych przekazujesz mi po samodzielnym zatwierdzeniu albo konsultacji z prawnikiem."
      }
    ],
    cta: "Prześlij brief kolekcji i kanałów sprzedaży, a wycenię sklep dla Twojej marki odzieżowej",
    deliverables: [
      {
        label: "Sklep WooCommerce",
        body: "Przygotowuję sklep WooCommerce z koszykiem, zamówieniem bez rejestracji, kontem klienta i wiadomościami transakcyjnymi."
      },
      {
        label: "Warianty kolekcji",
        body: "Konfiguruję rozmiary, kolory, tabele wymiarów, filtry kolekcji i komunikaty o dostępności. Liczbę produktów startowych ustalamy w zakresie projektu."
      },
      {
        label: "Płatności i wysyłka",
        body: "Podłączam uzgodnione metody płatności i dostawy oraz konfiguruję zasady wysyłki zgodnie z zakresem sklepu."
      },
      {
        label: "Obsługa zwrotów",
        body: "Przygotowuję miejsce na procedurę zwrotu, formularz zgłoszenia, wskazany dokument do pobrania i wiadomość potwierdzającą przyjęcie zgłoszenia."
      },
      {
        label: "Start sprzedaży",
        body: "Testuję zakup na telefonie, konfiguruję uzgodnione ustawienia sklepu i prowadzę szkolenie online z obsługi zamówień oraz produktów."
      }
    ],
    headings: {
      pains: "Co nie działa w sklepach marek odzieżowych",
      mustHave: "Czego wymaga sklep marki odzieżowej",
      cases: "Sklepy dla marek odzieżowych, które zrobiłem",
      stack: "Jak tworzę sklepy dla marek odzieżowych",
      pricing: "Ile kosztuje sklep internetowy dla marki odzieżowej",
      faq: "Tworzenie sklepów dla marek odzieżowych: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Kolekcje, warianty, tabele rozmiarów i kanały, w których już sprzedajesz."
      },
      {
        step: "02",
        title: "Architektura",
        body: "Kategorie i filtry układam pod frazy zakupowe, żeby podstrony nie biły się między sobą."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Kartę produktu i koszyk projektuję najpierw na telefon, bo tam zapada decyzja."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "WooCommerce, warianty, płatności, InPost, integracja z Allegro i tabele rozmiarów."
      },
      {
        step: "05",
        title: "Start i pomiar",
        body: "Testowe zamówienia, GA4 z lejkiem zakupowym, szkolenie z dodawania produktów."
      }
    ],
    notFor: [
      "Chcesz, żebym wprowadził kilka tysięcy produktów ręcznie. Potrzebny jest plik albo integracja.",
      "Nie masz zdjęć produktowych i nie planujesz sesji. Sklep odzieżowy bez zdjęć nie sprzedaje.",
      "Sprzedajesz wyłącznie przez Allegro i nie budujesz własnej marki. Wtedy sklep to zbędny koszt."
    ]
  },
  {
    slug: "tworzenie-stron-dla-producentow-mebli",
    title: "Producenci mebli",
    keyword: "tworzenie stron dla producentów mebli",
    metaTitle: "Tworzenie stron dla producentów mebli: katalog B2B",
    metaDescription: "Tworzenie stron dla producentów mebli: filtrowany katalog, pliki PDF i DWG oraz zapytanie ofertowe. Wdrożenie 6-8 tygodni.",
    h1: "Tworzenie stron dla producentów mebli",
    lead: "Projektuję strony i katalogi dla producentów mebli, stolarni oraz dostawców akcesoriów, z osobnymi ścieżkami dla odbiorców hurtowych i detalicznych. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Producent potrzebuje strony, która porządkuje nie tylko zdjęcia, lecz także wymiary, materiały, warianty, dokumentację i sposób składania zapytań. Przy tworzeniu stron dla producentów mebli projektuję katalog pod realne dane produktowe i rozdzielam potrzeby partnera B2B od klienta detalicznego. Jeśli produkty mają ustalone ceny i warunki zakupu, sprzedaż mogę oprzeć na [WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
      "Pracowałem przy stronach Multikonu, producenta nóg, stelaży krzeseł i innych akcesoriów, oraz Stys-Glass, firmy zajmującej się hartowaniem szkła, balustradami i lustrami na wymiar. Możesz zobaczyć [serwis Multikon](/projekty/multikon) i [realizację Stys-Glass](/projekty/stys-glass). Jeśli katalog wymaga indywidualnej logiki, integracji z innymi systemami lub własnego panelu, mogę wykorzystać [Next.js](/uslugi/aplikacje-nextjs)."
    ],
    pains: [
      {
        title: "Katalog trudny do przeszukania",
        body: "Rozbudowany katalog bez filtrów zmusza odbiorcę do otwierania kolejnych kart produktów i ręcznego porównywania parametrów. Dlatego buduję filtrowanie według materiału, wymiaru, zastosowania i innych cech, które rzeczywiście występują w ofercie producenta."
      },
      {
        title: "Jedna oferta dla wszystkich",
        body: "Hurtownik potrzebuje dokumentacji i warunków współpracy, a klient detaliczny inspiracji oraz jasnego sposobu zakupu. Strona rozdziela komunikację, cennik B2B i działania dostępne dla obu grup."
      },
      {
        title: "Ręczne przepisywanie danych",
        body: "Aktualizowanie tych samych nazw, stanów i parametrów w kilku systemach prowadzi do pomyłek. Integracja z PIM lub ERP może automatycznie zasilać katalog głównymi danymi."
      },
      {
        title: "Brak materiałów technicznych",
        body: "Projektant lub dystrybutor rezygnuje z produktu, jeśli nie znajdzie rysunku i dokładnych wymiarów. Na karcie produktu umieszczam uporządkowane pliki PDF oraz DWG do pobrania."
      }
    ],
    mustHave: [
      {
        title: "Filtry produktowe",
        body: "Parametry wynikają ze sposobu, w jaki klienci szukają elementów i mebli. Odpowiednio zaplanowane adresy kategorii mogą też wspierać pozycjonowanie strony producenta."
      },
      {
        title: "Dwie ścieżki sprzedaży",
        body: "Hurtownik trafia do informacji handlowych, logowania i dokumentacji. Odbiorca końcowy widzi warianty, zastosowania oraz formularz kontaktowy właściwy dla jego zapytania."
      },
      {
        title: "Cennik po zalogowaniu",
        body: "Ceny i warunki mogą być dostępne wyłącznie dla zatwierdzonych partnerów. Uprawnienia pozwalają różnicować widok wybranych grup kontrahentów w katalogu B2B."
      },
      {
        title: "Kompletna karta produktu",
        body: "Jedna karta łączy fotografie, wymiary, materiały, warianty i dokumenty techniczne. Odbiorca nie musi prosić handlowca o podstawowe dane produktu."
      },
      {
        title: "Lista do wyceny",
        body: "Klient dodaje kilka pozycji wraz z ilościami, a następnie wysyła jedno zapytanie. To trafniejsze rozwiązanie niż koszyk, gdy koszt zależy od konfiguracji i warunków handlowych."
      },
      {
        title: "Obsługa wielu języków",
        body: "Wersje eksportowe mają własne adresy, metadane i strukturę kategorii. Produkty można tłumaczyć w CMS bez tworzenia odrębnej witryny dla każdego rynku."
      }
    ],
    stack: [
      {
        label: "WooCommerce",
        body: "WooCommerce to sklep na WordPressie: obsługuje katalog, warianty, konta odbiorców, widoczność cen i sprzedaż produktów mających ustalone warunki zakupu."
      },
      {
        label: "PIM i ERP",
        body: "Integracja zasila stronę producenta danymi produktowymi z głównego systemu i ogranicza powtarzalną pracę przy aktualizacjach katalogu."
      },
      {
        label: "Next.js",
        body: "Next.js pozwala tworzyć szybkie, responsywne katalogi z indywidualnymi filtrami, rozbudowaną logiką i połączeniami z zewnętrznymi usługami."
      },
      {
        label: "PDF i DWG",
        body: "Dokumenty PDF i DWG przypisuję do odpowiednich wariantów oraz udostępniam w czytelnej sekcji karty produktu."
      }
    ],
    pricing: {
      time: "6-8 tygodni",
      note: "O kwocie decydują liczba produktów, sposób importu danych, filtry, logowanie kontrahentów i wersje językowe."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona dla mojego zakładu lub marki meblowej?",
        a: "Najwięcej zależy od sposobu zasilania katalogu danymi, filtrów, logowania kontrahentów i wersji językowych. Po rozmowie i briefie przygotuję wycenę z konkretnym zakresem oraz terminem."
      },
      {
        q: "Ile potrwa przygotowanie mojego katalogu produktów?",
        a: "Jeśli projekt ma zakres zbliżony do sklepu internetowego, typowy termin dla mniejszego wdrożenia to 6-8 tygodni. Przy bardziej złożonych integracjach termin ustalam po rozpoznaniu zakresu."
      },
      {
        q: "Czy strona może pobierać produkty z mojej bazy?",
        a: "Tak, jeśli źródło danych na to pozwala. Przy prostszym katalogu mogę oprzeć import na uporządkowanych danych, a przy rozbudowanym rozwiązaniu najpierw sprawdzam możliwości wskazanego systemu i dopiero wtedy planuję integrację."
      },
      {
        q: "Czy potrzebuję sklepu, czy wystarczy formularz wyceny?",
        a: "Sklep wybieram wtedy, gdy produkty mają ustaloną cenę, warunki dostawy i warianty możliwe do samodzielnego zamówienia. Przy produkcji na wymiar albo indywidualnych warunkach handlowych mogę zamiast koszyka przygotować listę produktów wysyłaną jako jedno zapytanie."
      },
      {
        q: "Czy moja strona może mieć kilka wersji językowych?",
        a: "Tak. Mogę przygotować osobne adresy, treści i metadane dla wersji językowych, a strukturę planuję tak, żeby katalog dało się rozwijać bez stawiania osobnego serwisu dla każdego rynku."
      },
      {
        q: "Czy przygotujesz zdjęcia do katalogu mebli?",
        a: "Nie wykonuję sesji produktowych. Mogę określić potrzebne kadry i proporcje, a dostarczone fotografie zoptymalizować do użycia na stronie."
      },
      {
        q: "Jak będę aktualizować produkty w katalogu?",
        a: "Sposób zależy od źródła danych. Mogę przygotować edycję w CMS, import z uporządkowanego pliku albo integrację ze wskazanym systemem, jeśli jego możliwości na to pozwalają."
      },
      {
        q: "Czy przy zmianie strony zachowasz obecne adresy produktów?",
        a: "Tam, gdzie nowa struktura na to pozwala, zachowuję adresy. Dla pozostałych przygotowuję przekierowania 301, a po wdrożeniu podłączam Google Search Console. Nie obiecuję zachowania dotychczasowych pozycji w wyszukiwarce."
      },
      {
        q: "Jaki hosting wybrać dla mojego katalogu?",
        a: "Pomagam dobrać hosting do technologii, wielkości katalogu i sposobu przechowywania zdjęć oraz dokumentów, na przykład Hostinger albo cyber_folks. Jeśli projekt wymaga Next.js, mogę wdrożyć go na Vercel albo własnym VPS."
      },
      {
        q: "Czy sama galeria realizacji wystarczy na stronie producenta mebli?",
        a: "Nie, ponieważ zdjęcia nie odpowiadają na pytania o wymiary, materiały, warianty i sposób zamówienia. Projektuję galerię jako część szerszej prezentacji, która prowadzi do karty produktu, opisu realizacji albo właściwego formularza."
      },
      {
        q: "Czy podawać ceny mebli na wymiar?",
        a: "Jeśli końcowa cena zależy od wymiarów, materiałów, wyposażenia i montażu, nie przedstawiałbym jednej kwoty jako ceny gotowego produktu. Mogę zaplanować prezentację przykładowego zakresu lub mechanizm wyceny, ale sposób podawania cen ustalam przy rozpoczęciu współpracy na podstawie rzeczywistego modelu sprzedaży."
      },
      {
        q: "Jak powinien wyglądać formularz wyceny?",
        a: "Dobieram pola do rodzaju mebli i informacji potrzebnych do wstępnej oceny zlecenia. Formularz może zbierać wymiary, zdjęcia pomieszczenia, miejscowość, oczekiwany termin oraz rodzaj zabudowy, a jednocześnie pozostać zrozumiały dla nietechnicznego użytkownika."
      },
      {
        q: "Czy strona producenta mebli potrzebuje wersji B2B?",
        a: "Przygotowałbym ją wtedy, gdy architekci, salony lub dystrybutorzy potrzebują innych informacji niż klienci detaliczni. Nie zawsze musi to być strefa po zalogowaniu. Czasem wystarczy osobna ścieżka z katalogami, plikami technicznymi, zasadami współpracy i listą punktów sprzedaży."
      },
      {
        q: "Czy zmieszczę na stronie dużo zdjęć bez spowolnienia?",
        a: "Tak, jeśli obrazy zostaną odpowiednio przygotowane i nie będą ładowane jednocześnie w pełnej rozdzielczości. Optymalizuję rozmiary, formaty oraz sposób wczytywania zdjęć, a przed oddaniem strony sprawdzam jej wydajność na telefonie."
      }
    ],
    cta: "Prześlij brief katalogu, a wycenię tworzenie strony dla Twojej marki meblowej",
    deliverables: [
      {
        label: "Katalog kolekcji",
        body: "Przygotowuję katalog z podziałem na uzgodnione kolekcje, zastosowania, materiały i wykończenia. Zakres produktów ustalamy na podstawie danych, którymi dysponujesz."
      },
      {
        label: "Karta produktu",
        body: "Tworzę szablon karty z wymiarami, wariantami, galerią, dokumentami technicznymi, informacją o realizacji i formularzem zapytania."
      },
      {
        label: "Strefa dla partnerów",
        body: "Jeśli wymaga tego model sprzedaży, mogę przygotować chronioną część katalogu z materiałami dostępnymi po zalogowaniu i formularzem zgłoszenia dostępu."
      },
      {
        label: "Zapytania handlowe",
        body: "Rozdzielam zapytania według uzgodnionych reguł, na przykład regionu, kolekcji albo rodzaju produktu, i kieruję je do właściwych osób."
      },
      {
        label: "Import danych",
        body: "Przygotowuję import uzgodnionych pól z uporządkowanego źródła danych i wskazuję rekordy wymagające ręcznej korekty."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach producentów mebli",
      mustHave: "Czego wymaga strona producenta mebli",
      cases: "Strony dla producentów mebli, które zrobiłem",
      stack: "Jak tworzę strony dla producentów mebli",
      pricing: "Ile kosztuje strona dla producenta mebli",
      faq: "Tworzenie stron dla producentów mebli: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief i dane",
        body: "Sprawdzam, w jakim stanie są dane produktowe i skąd katalog będzie je pobierał."
      },
      {
        step: "02",
        title: "Struktura katalogu",
        body: "Filtry, warianty i rozdzielenie ścieżki hurtowej od detalicznej."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Karta produktu z wymiarami, plikami do pobrania i zapytaniem ofertowym zamiast koszyka."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Katalog, import z PIM lub ERP, konta kontrahentów, cennik po zalogowaniu."
      },
      {
        step: "05",
        title: "Start",
        body: "Testy importu, wersje językowe pod eksport, szkolenie z aktualizacji oferty."
      }
    ],
    notFor: [
      "Nie masz żadnych danych produktowych ani zdjęć. Katalog musi mieć z czego powstać.",
      "Oczekujesz kompletnego systemu B2B z rabatami kontraktowymi w dwa tygodnie.",
      "Chcesz przenieść oferty jeden do jednego z katalogu PDF bez porządkowania parametrów."
    ]
  },
  {
    slug: "tworzenie-stron-dla-hoteli-i-pensjonatow",
    title: "Hotele i pensjonaty",
    keyword: "tworzenie stron dla hoteli i pensjonatów",
    metaTitle: "Tworzenie stron dla hoteli i pensjonatów: rezerwacje",
    metaDescription: "Tworzenie stron dla hoteli i pensjonatów: rezerwacja bezpośrednia, kalendarz dostępności i galeria pokoi. Realizacja 5-8 tygodni.",
    h1: "Tworzenie stron dla hoteli i pensjonatów",
    lead: "Projektuję strony dla hoteli, pensjonatów i apartamentów, które prowadzą gościa od zdjęć i dostępności do rezerwacji bezpośredniej. Pracuję z Wrocławia, zdalnie z obiektami z całej Polski i z Niemiec.",
    intro: [
      "Dobra strona obiektu noclegowego nie kończy się na galerii. Tworzenie stron dla hoteli i pensjonatów układam wokół wyboru pokoju, sprawdzenia dostępności, ceny, zasad odwołania i możliwie krótkiej drogi do rezerwacji. Fundamentem może być [strona WordPress z własnym motywem](/uslugi/tworzenie-stron-wordpress), połączona z używanym przez Ciebie systemem rezerwacji.",
      "Dla Apartamentów Złota Grota we Wrocławiu przygotowałem prezentację apartamentów z jacuzzi, pobytów dla par, samodzielnego zameldowania i rezerwacji bez pośredników. Możesz zobaczyć [Apartamenty Złota Grota](/projekty/apartamenty-zlota-grota) i [pensjonat Maciejanka](/projekty/maciejanka). Po starcie mogę też prowadzić [techniczną opiekę nad stroną](/uslugi/opieka-wordpress)."
    ],
    pains: [
      {
        title: "Zależność od pośredników",
        body: "Portal rezerwacyjny pomaga dotrzeć do gości, ale uzależnia część sprzedaży od pośrednika i jego warunków. Własna strona daje Ci dodatkowy kanał rezerwacji bezpośredniej, na którym sam pokazujesz pokoje, pakiety, ceny i zasady pobytu."
      },
      {
        title: "Nieaktualna dostępność",
        body: "Kalendarz niespójny z pozostałymi kanałami prowadzi do podwójnych rezerwacji. Dobieram silnik, który synchronizuje terminy witryny z używanymi portalami i ogranicza ręczne aktualizacje."
      },
      {
        title: "Galeria spowalnia stronę",
        body: "Dziesiątki fotografii w pełnej rozdzielczości długo ładują się na telefonie i pogarszają Core Web Vitals. Przygotowuję odpowiednie rozmiary, nowoczesne formaty oraz kolejność wczytywania zdjęć."
      },
      {
        title: "Ukryte zasady pobytu",
        body: "Gość może przerwać rezerwację, jeśli nie rozumie płatności, zameldowania lub warunków odwołania. Najważniejsze reguły pokazuję przed potwierdzeniem terminu, a regulamin i informacje RODO pozostają łatwo dostępne."
      }
    ],
    mustHave: [
      {
        title: "Silnik rezerwacji",
        body: "Gość wybiera daty, liczbę osób i dostępny pokój bez wymiany wielu wiadomości. System rezerwacji na stronie pensjonatu może obsługiwać płatność oraz synchronizację kalendarzy."
      },
      {
        title: "Lekka galeria zdjęć",
        body: "Fotografie przedstawiają pokoje, części wspólne i otoczenie w logicznej kolejności. Pliki są dopasowane do urządzenia, dzięki czemu galeria szybko działa również w wersji mobilnej."
      },
      {
        title: "Oferta pobytów",
        body: "Pakiety dla par, rodzin lub uczestników wydarzeń mają osobne warunki i terminy. Karta pobytu wyjaśnia, co zawiera cena i jak przejść do rezerwacji."
      },
      {
        title: "Opis okolicy",
        body: "Atrakcje, trasy i praktyczne wskazówki odpowiadają na pytania osób planujących wyjazd. Takie podstrony wspierają lokalne pozycjonowanie obiektu w Google."
      },
      {
        title: "Mapa i dojazd",
        body: "Adres, parking oraz instrukcja dotarcia są dostępne z poziomu telefonu. Przy samodzielnym zameldowaniu witryna może jasno opisywać kolejne czynności."
      },
      {
        title: "Regulamin rezerwacji",
        body: "Warunki płatności, odwołania i pobytu są napisane zrozumiale oraz podlinkowane przy zamówieniu. Obok nich umieszczam wymagane zgody i informacje o przetwarzaniu danych."
      }
    ],
    stack: [
      {
        label: "WordPress",
        body: "Autorski motyw pozwala edytować pokoje, pakiety, atrakcje i galerie bez ciężkiego kreatora. Przy kilku obiektach w jednym serwisie albo własnym silniku rezerwacji sięgam po Next.js."
      },
      {
        label: "Silnik rezerwacji",
        body: "Integracja przekazuje terminy, ceny i liczbę gości między stroną hotelu a narzędziem obsługującym rezerwacje."
      },
      {
        label: "Profil Firmy w Google",
        body: "Mapa, dane kontaktowe i opinie potwierdzają lokalizację obiektu oraz kierują użytkownika z Google bezpośrednio do witryny."
      },
      {
        label: "WebP i AVIF",
        body: "Nowoczesne formaty ograniczają wagę galerii, zachowując jakość potrzebną do prezentacji pokoi na komputerach i telefonach."
      }
    ],
    pricing: {
      time: "5-8 tygodni",
      note: "Wycena strony hotelu zależy od liczby typów pokoi, silnika rezerwacji, płatności, wersji językowych i zakresu galerii. Osobnej pracy wymaga synchronizacja z kanałami sprzedaży, jeśli obiekt już z nich korzysta."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona dla mojego hotelu lub pensjonatu?",
        a: "Najwięcej na zakres wpływa sposób obsługi rezerwacji. Prosty kalendarz z zapytaniem to inna praca niż płatność online i synchronizacja z kanałami sprzedaży. Po krótkiej rozmowie i briefie przygotuję wycenę z zakresem i terminem."
      },
      {
        q: "Ile potrwa strona dla mojego hotelu?",
        a: "Stronę obiektu z integracją rezerwacji realizuję zwykle w 5-8 tygodni. Jeśli dochodzi kilka wersji językowych albo migracja istniejącego serwisu, termin doprecyzuję po briefie."
      },
      {
        q: "Jaki system rezerwacji wybrać do mojej strony?",
        a: "Najpierw sprawdzę, jak dziś przyjmujesz rezerwacje, z jakich portali korzystasz i czy potrzebujesz płatności oraz synchronizacji kalendarzy. Na tej podstawie porównam rozwiązania pasujące do Twojego procesu."
      },
      {
        q: "Czy własna strona zastąpi mi portale rezerwacyjne?",
        a: "Nie zakładam, że zastąpi je automatycznie. Buduję dodatkowy kanał rezerwacji bezpośredniej dla osób, które znają obiekt albo trafiają na niego z Google, map czy polecenia."
      },
      {
        q: "Czy potrzebuję profesjonalnej sesji zdjęciowej?",
        a: "Przy hotelu lub pensjonacie dobre zdjęcia mają duże znaczenie, bo pokazują pokoje i standard obiektu przed rezerwacją. Mogę przygotować listę potrzebnych ujęć i wymagania techniczne, a wykonanie sesji zlecasz fotografowi."
      },
      {
        q: "Czy moja strona może mieć kilka wersji językowych?",
        a: "Tak. Mogę przygotować osobne wersje treści dla pokoi, pakietów, regulaminu i pozostałych podstron. Sprawdzę też, czy wybrany system rezerwacji obsługuje potrzebne języki i waluty."
      },
      {
        q: "Kiedy najlepiej uruchomić nową stronę przed sezonem?",
        a: "Start najlepiej zaplanować z wyprzedzeniem, żeby po publikacji sprawdzić indeksowanie, przejść całą rezerwację na telefonie i poprawić treści przed najważniejszym okresem sprzedaży. Konkretny termin ustalę z Tobą na początku projektu."
      },
      {
        q: "Czy mogę zachować obecną domenę hotelu?",
        a: "Tak. Mogę podłączyć nową stronę do obecnej domeny i pomóc dobrać hosting, na przykład Hostinger albo cyber_folks. Przy migracji przygotuję zmianę tak, żeby przerwa była możliwie krótka, choć przy zmianie DNS może wystąpić krótka niedostępność."
      },
      {
        q: "Jakie informacje prawne muszę przygotować na stronę pensjonatu?",
        a: "Potrzebuję od Ciebie zatwierdzonego regulaminu, polityki prywatności, zasad anulowania i innych treści wynikających z Twojego sposobu rezerwacji. Umieszczę je w odpowiednich miejscach strony i skonfiguruję wymagane zgody związane z formularzami oraz analityką."
      },
      {
        q: "Czy strona będzie zgodna z RODO?",
        a: "Konfiguruję mechanizm zgód cookies, formularze i uruchamianie GA4 dopiero po uzyskaniu wymaganej zgody. Potrzebuję od Ciebie zatwierdzonej polityki prywatności, regulaminu i pozostałych treści prawnych właściwych dla Twojego sposobu działania. Ich zakres ustalam przy rozpoczęciu współpracy."
      },
      {
        q: "Jak sprawdzę, skąd przychodzą rezerwacje?",
        a: "Konfiguruję GA4 oraz zdarzenia związane z przejściem do rezerwacji, wysłaniem formularza i potwierdzeniem pobytu, jeśli system rezerwacyjny pozwala przekazać takie dane. Dzięki temu możesz porównywać źródła wizyt, pamiętając, że analityka działa po zgodzie na cookies i nie obejmie wszystkich użytkowników."
      },
      {
        q: "Czy sam zmienię ceny i opisy pokoi?",
        a: "Przygotowuję panel do edycji opisów, zdjęć i ustalonych elementów oferty, a następnie prowadzę szkolenie z jego obsługi. Miejsce zmiany cen zależy od wybranego silnika rezerwacji i ustalam je z Tobą na początku projektu."
      },
      {
        q: "Czy strona może sprzedawać vouchery?",
        a: "Tak, mogę przygotować prezentację voucherów albo sprzedaż online, jeśli taki zakres ustalimy przed wdrożeniem. Sposób płatności, dostarczenia, realizacji i obsługi zamówienia dopasuję do wybranego procesu."
      },
      {
        q: "Czy pomożesz po uruchomieniu strony?",
        a: "Tak. Zapewniam 60 dni gwarancji i bezpłatnych poprawek po starcie. Po tym okresie mogę przejąć opiekę techniczną w miesięcznym abonamencie bez umowy na rok."
      }
    ],
    cta: "Opowiedz o obiekcie, a przygotuję wycenę tworzenia strony hotelu lub pensjonatu z rezerwacją bezpośrednią",
    deliverables: [
      {
        label: "Prezentacja pokoi",
        body: "Przygotowuję edytowalny układ typów pokoi z wyposażeniem, liczbą gości, galerią, ceną i zasadami pobytu. Zakres pokoi ustalamy w briefie."
      },
      {
        label: "Ścieżka rezerwacji",
        body: "Łączę stronę obiektu z ustalonym systemem rezerwacji i przekazuję do niego potrzebne dane, takie jak daty pobytu i liczba osób, jeśli wybrane narzędzie to obsługuje."
      },
      {
        label: "Oferta sezonowa",
        body: "Tworzę w CMS edytowalny wzór pakietu pobytowego z terminem, zakresem świadczeń, ceną i warunkami rezerwacji."
      },
      {
        label: "Atrakcje i dojazd",
        body: "Przygotowuję mapę dojazdu, informacje o parkingu oraz sekcję atrakcji w okolicy. Liczbę i zakres opisów ustalamy w briefie."
      },
      {
        label: "Wiadomości pobytowe",
        body: "Konfiguruję formularze zapytań o pobyty grupowe, imprezy okolicznościowe lub pobyty firmowe, wraz ze zgodami RODO i ochroną przed spamem."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach hoteli i pensjonatów",
      mustHave: "Czego wymaga strona hotelu lub pensjonatu",
      cases: "Strony dla obiektów noclegowych, które zrobiłem",
      stack: "Jak tworzę strony dla hoteli i pensjonatów",
      pricing: "Ile kosztuje strona dla hotelu lub pensjonatu",
      faq: "Tworzenie stron dla hoteli i pensjonatów: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Typy pokoi, pakiety, sezony i obecny sposób przyjmowania rezerwacji."
      },
      {
        step: "02",
        title: "Silnik rezerwacji",
        body: "Dobieramy narzędzie i sprawdzam synchronizację z portalami, z których korzystasz."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Zdjęcia dostają główną rolę, cena i zasady odwołania stoją przy przycisku rezerwacji."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Motyw, kalendarz dostępności, płatności, opisy okolicy, wersje językowe."
      },
      {
        step: "05",
        title: "Start",
        body: "Rezerwacja testowa od początku do końca, Profil Firmy w Google, szkolenie z edycji terminów."
      }
    ],
    notFor: [
      "Nie masz dobrych zdjęć obiektu i nie planujesz sesji. To pierwszy argument sprzedażowy.",
      "Liczysz, że strona zastąpi portale rezerwacyjne od pierwszego miesiąca. Buduje kanał, nie zastępuje rynku.",
      "Chcesz rezerwacji bez żadnej płatności z góry i bez zasad anulowania. To wraca jako puste terminy."
    ]
  },
  {
    slug: "tworzenie-stron-dla-firm-budowlanych",
    title: "Firmy budowlane",
    keyword: "tworzenie stron dla firm budowlanych",
    metaTitle: "Tworzenie stron dla firm budowlanych: galeria i wyceny",
    metaDescription: "Tworzenie stron dla firm budowlanych: galeria przed i po, formularz przyjmujący zdjęcia oraz obszar dojazdu. Realizacja 4-6 tygodni.",
    h1: "Tworzenie stron dla firm budowlanych",
    lead: "Buduję strony dla firm remontowych, dekarzy, brukarzy i wykonawców, na których szybko widać realizacje, zakres prac, obszar dojazdu i sposób kontaktu. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "W tej branży strona musi pokazać efekt pracy, zanim zacznie go opisywać. Tworzenie stron dla firm budowlanych opieram więc na zdjęciach realizacji, czytelnym podziale usług, konkretnym obszarze działania i kontakcie wygodnym również dla osoby, która ogląda serwis na telefonie na placu budowy. [Stronę WordPress](/uslugi/tworzenie-stron-wordpress) mogę przygotować z własnym motywem i prostym panelem do dodawania kolejnych realizacji.",
      "W projekcie [Dom Bez Wad](/projekty/dom-bez-wad) przygotowałem witrynę prezentującą termomodernizację, ocieplenia i pompy ciepła. Z kolei [Galabau Darius](/projekty/galabau-darius) to aplikacja Next.js z galerią oraz konfiguratorem ogrodzeń, który oblicza cenę na żywo."
    ],
    pains: [
      {
        title: "Brak dowodów wykonania",
        body: "Sama lista usług nie pokazuje, jak wygląda Twoja praca po zakończeniu zlecenia. Dlatego galerię realizacji buduję tak, żeby można było pokazać efekt przed i po, zakres robót, użyte materiały oraz typ inwestycji bez ujawniania danych klienta."
      },
      {
        title: "Niejasny obszar dojazdu",
        body: "Zapytania spoza obsługiwanego terenu zabierają czas obu stronom. Witryna jasno wskazuje miejscowości, promień dojazdu oraz zasady wyceny realizacji poza podstawowym obszarem."
      },
      {
        title: "Utrudniony kontakt mobilny",
        body: "Osoba stojąca na budowie nie będzie szukała numeru w stopce. Przycisk połączenia i krótki formularz kontaktowy pozostają dostępne na każdej podstronie w wersji mobilnej."
      },
      {
        title: "Sezonowe spadki zapytań",
        body: "Popyt na część prac zmienia się w ciągu roku. Osobne podstrony usług, lokalne treści i plan publikacji pozwalają wcześniej rozwijać pozycjonowanie na kolejny sezon."
      }
    ],
    mustHave: [
      {
        title: "Galeria przed i po",
        body: "Zdjęcia można filtrować według rodzaju usługi lub miejsca realizacji. Każda karta otrzymuje opis robót i materiałów bez ujawniania danych klienta."
      },
      {
        title: "Formularz ze zdjęciami",
        body: "Klient dołącza fotografie budynku, dachu, ogrodzenia albo terenu już przy pierwszym kontakcie. Formularz strony budowlanej dostarcza materiał potrzebny do wstępnej wyceny zlecenia."
      },
      {
        title: "Widoczny numer telefonu",
        body: "Numer jest dostępny w nagłówku i jako przycisk na telefonie. Użytkownik może zadzwonić bez kopiowania danych i przechodzenia do oddzielnej strony kontaktowej."
      },
      {
        title: "Zakres i obszar usług",
        body: "Każda usługa ma własny opis, przykłady oraz obsługiwane lokalizacje. Taka struktura porządkuje ofertę i wspiera widoczność firmy budowlanej w lokalnych wynikach Google."
      },
      {
        title: "Uprawnienia i certyfikaty",
        body: "Dokumenty, autoryzacje producentów i kwalifikacje trafiają do czytelnej sekcji. Publikujesz wyłącznie aktualne informacje, które inwestor może zweryfikować."
      },
      {
        title: "Wstępna kalkulacja",
        body: "Konfigurator zbiera wymiary, wariant materiału i dodatkowe wymagania. Wynik może wskazywać orientacyjny zakres kosztów albo stanowić podstawę indywidualnej oferty."
      }
    ],
    stack: [
      {
        label: "WordPress",
        body: "Autorski motyw i CMS bez Elementora, Avady i Divi zapewniają prostą obsługę galerii, usług oraz treści lokalnych."
      },
      {
        label: "Next.js",
        body: "Sprawdza się przy rozbudowanych konfiguratorach, dynamicznych kalkulacjach i formularzach wyceny wymagających niestandardowej logiki."
      },
      {
        label: "Search Console",
        body: "Konfiguracja od dnia publikacji pozwala śledzić indeksowanie podstron usług oraz zapytania związane z obsługiwanymi miejscowościami."
      },
      {
        label: "schema.org",
        body: "Dane strukturalne opisują firmę budowlaną, jej usługi, obszar działania i odpowiedzi w formacie zrozumiałym dla Google."
      }
    ],
    pricing: {
      time: "4-6 tygodni",
      note: "Kwotę za stronę firmy budowlanej ustawiają liczba usług i obsługiwanych lokalizacji, zakres treści oraz sposób pokazania galerii realizacji."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona dla mojej firmy budowlanej?",
        a: "Najwięcej na zakres wpływa liczba usług i sposób zbierania zapytań. Zwykły formularz to mniej pracy niż konfigurator lub formularz przyjmujący rozbudowane dane i zdjęcia. Po rozmowie i briefie przygotuję konkretny zakres oraz termin."
      },
      {
        q: "Ile potrwa strona dla mojej firmy budowlanej?",
        a: "Typowa strona firmowa zajmuje zwykle 4-6 tygodni. Dużo zależy od tego, czy masz gotowe zdjęcia realizacji i treści do poszczególnych usług."
      },
      {
        q: "Jakie zdjęcia przygotować na stronę?",
        a: "Najlepiej fotografować podobny kadr przed rozpoczęciem i po zakończeniu prac. Możesz zrobić zdjęcia telefonem, jeśli są ostre i dobrze oświetlone. Ja przygotuję je później do publikacji w lekkich formatach."
      },
      {
        q: "Czy potrzebuję konfiguratora wyceny?",
        a: "Nie zawsze. Jeśli cenę da się oprzeć na powtarzalnych parametrach, takich jak powierzchnia, długość lub wariant materiału, konfigurator może mieć sens. Przy złożonych remontach zaproponuję raczej formularz ze zdjęciami i opisem prac."
      },
      {
        q: "Czy podanie obszaru działania pomoże mojej stronie w Google?",
        a: "Opisz jasno miejsca, w których rzeczywiście pracujesz, i połącz je z konkretnymi usługami lub realizacjami. Nie obiecuję pozycji w Google, ale przygotuję poprawną strukturę strony, dane strukturalne, mapę strony i Search Console."
      },
      {
        q: "Czy mogę uruchomić stronę, jeśli nie mam jeszcze galerii realizacji?",
        a: "Tak. Mogę oprzeć pierwszą wersję na procesie pracy, usługach, uprawnieniach, sprzęcie i dostępnych materiałach. Gdy zbierzesz zdjęcia, dodasz realizacje przez CMS."
      },
      {
        q: "Czy warto przenieść moją starą stronę na WordPress?",
        a: "Jeśli chcesz samodzielnie dodawać realizacje i rozwijać ofertę, WordPress może być dobrym rozwiązaniem. Przed migracją sprawdzę stare adresy i treści, przygotuję potrzebne przekierowania 301 i wskażę, co warto zachować."
      },
      {
        q: "Co będę opłacać po uruchomieniu strony?",
        a: "Poza domeną potrzebujesz hostingu. Pomogę dobrać odpowiedni pakiet, na przykład w Hostingerze albo cyber_folks. Po starcie masz też 60 dni gwarancji i bezpłatnych poprawek, a później możesz prowadzić stronę samodzielnie albo zlecić mi miesięczną opiekę."
      },
      {
        q: "Czy potrzebuję osobnej podstrony dla każdego miasta?",
        a: "Nie tworzę takich podstron tylko po to, żeby podmienić nazwę miejscowości. Osobna strona ma sens wtedy, gdy możesz pokazać dla danego miejsca rzeczywiste usługi, realizacje albo informacje przydatne klientowi."
      },
      {
        q: "Czy mogę sam dodawać nowe realizacje?",
        a: "Tak, jeśli w projekcie uwzględnimy CMS do zarządzania realizacjami. Przygotuję ustalony układ pól i przeprowadzę szkolenie online z edycji treści, dzięki czemu będziesz mógł uzupełniać galerię bez zmieniania projektu każdej podstrony."
      },
      {
        q: "Czy domena będzie moja?",
        a: "Sposób rejestracji domeny i dane abonenta ustalam przy rozpoczęciu współpracy. Przed wdrożeniem jasno określę z Tobą, kto rejestruje domenę, na jakim koncie będzie utrzymywana i kto otrzyma dostęp do jej konfiguracji."
      },
      {
        q: "Czy są jakieś opłaty co miesiąc?",
        a: "Zakres stałych opłat ustalam przy rozpoczęciu współpracy, zależnie od wybranego rozwiązania i usług potrzebnych stronie. Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek, a później możesz wybrać opcjonalną opiekę w miesięcznym abonamencie bez umowy na rok."
      },
      {
        q: "Czy od razu będę wysoko w Google?",
        a: "Nie obiecuję konkretnej pozycji ani natychmiastowych wyników. Przy wdrożeniu przygotuję strukturę nagłówków, dane strukturalne, mapę strony i Search Console, ale widoczność zależy również od konkurencji, jakości treści, historii domeny oraz dalszego rozwoju serwisu."
      },
      {
        q: "Kiedy najlepiej zrobić stronę firmy budowlanej?",
        a: "Najlepiej rozpocząć pracę wtedy, gdy możesz określić zakres usług, obszar działania i zebrać podstawowe materiały. Typowa strona firmowa lub usługowa powstaje w ciągu 4-6 tygodni, dlatego warto uwzględnić ten czas w planie rozwoju firmy oraz pozyskiwania zapytań."
      }
    ],
    cta: "Opisz usługi i obszar działania, a przygotuję wycenę tworzenia strony dla Twojej firmy budowlanej",
    deliverables: [
      {
        label: "Zakres usług",
        body: "Przygotowuję podstrony usług z opisem prac, stosowanych materiałów, przebiegu realizacji i obsługiwanego obszaru. Ich liczbę i zakres ustalamy w briefie."
      },
      {
        label: "Karty realizacji",
        body: "Tworzę w CMS wzór realizacji z lokalizacją, zakresem robót, informacjami o inwestycji i zoptymalizowaną galerią zdjęć."
      },
      {
        label: "Formularz oględzin",
        body: "Wdrażam formularz wyceny z wyborem rodzaju inwestycji, miejscowości, planowanego terminu, opisem zakresu, zgodą RODO i możliwością dodania zdjęć lub dokumentów."
      },
      {
        label: "Dokumenty wykonawcy",
        body: "Przygotowuję sekcję na certyfikaty, uprawnienia, referencje, warunki gwarancji i materiały przeznaczone dla inwestora."
      },
      {
        label: "Obszar działania",
        body: "Pokazuję miejscowości lub region, w którym pracujesz, oraz zasady kontaktu przy zleceniu spoza podstawowego obszaru. Jeśli firma ma kilka ekip lub oddziałów, sposób kierowania zapytań ustalamy w briefie."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach firm budowlanych",
      mustHave: "Czego wymaga strona firmy budowlanej",
      cases: "Strony dla firm budowlanych, które zrobiłem",
      stack: "Jak tworzę strony dla firm budowlanych",
      pricing: "Ile kosztuje strona dla firmy budowlanej",
      faq: "Tworzenie stron dla firm budowlanych: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Zakres robót, obsługiwane miejscowości i sezonowość zapytań."
      },
      {
        step: "02",
        title: "Materiały",
        body: "Zbieramy zdjęcia przed i po, uprawnienia, certyfikaty i referencje."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Galeria i numer telefonu na pierwszym planie, układ liczony pod ekran telefonu."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Motyw, formularz przyjmujący zdjęcia od klienta, podstrony usług i obszaru działania."
      },
      {
        step: "05",
        title: "Start",
        body: "Search Console, Profil Firmy w Google i szkolenie z dodawania realizacji."
      }
    ],
    notFor: [
      "Nie masz zdjęć realizacji i nie zamierzasz ich robić. Bez dowodu ta strona nie zadziała.",
      "Chcesz podstronę pod każde miasto w Polsce. Powielona treść szkodzi zamiast pomagać.",
      "Liczysz na zapytania bez żadnego budżetu na widoczność. Sama strona to za mało."
    ]
  },
  {
    slug: "tworzenie-stron-dla-influencerow",
    title: "Influencerzy",
    keyword: "tworzenie stron dla influencerów",
    metaTitle: "Tworzenie stron dla influencerów: media kit i współprace",
    metaDescription: "Tworzenie stron dla influencerów: media kit online, portfolio współprac i formularz dla marek pod własną domeną. Termin 3-5 tygodni.",
    h1: "Tworzenie stron dla influencerów",
    lead: "Projektuję strony dla twórców, którzy chcą mieć pod własną domeną aktualny media kit, portfolio współprac i kontakt dla marek. Pracuję z Wrocławia, zdalnie z klientami z całej Polski i z Niemiec.",
    intro: [
      "Plik z media kitem szybko się starzeje, dlatego tworzenie stron dla influencerów widzę przede wszystkim jako sposób na utrzymanie jednej, aktualnej wersji oferty. Na stronie możesz zmieniać dane o odbiorcach, pokazywać wcześniejsze współprace, zbierać zapytania od marek i rozwijać całość o newsletter albo sklep. Mogę przygotować [nowoczesną stronę internetową](/uslugi/nowoczesne-strony-internetowe) albo WordPress z wygodną edycją treści.",
      "Nie mam jeszcze w portfolio strony zrealizowanej specjalnie dla influencera. Zamiast udawać takie doświadczenie, pokazuję [opublikowane realizacje](/projekty), własne serwisy i tę stronę jako przykłady mojego sposobu projektowania i kodowania."
    ],
    pains: [
      {
        title: "Nieaktualny media kit",
        body: "Media kit zapisany jako plik zaczyna się rozjeżdżać, gdy zmieniają się statystyki, oferta albo warunki współpracy, a starsze wersje nadal krążą w skrzynkach. Na stronie aktualizujesz dane w jednym miejscu i wysyłasz markom zawsze ten sam adres."
      },
      {
        title: "Rozproszone materiały dla marek",
        body: "Osoba planująca kampanię musi szukać danych na kilku platformach. Jedna podstrona porządkuje profil odbiorców, formaty publikacji, cennik, wcześniejsze współprace i formularz kontaktowy."
      },
      {
        title: "Zależność od platform",
        body: "Zmiana algorytmu może ograniczyć dostęp do odbiorców budowanych przez lata. Własna domena, lista mailingowa i treści widoczne w Google tworzą niezależną obecność w internecie."
      },
      {
        title: "Przypadkowe zapytania reklamowe",
        body: "Wiadomości bez budżetu, terminu i zakresu wymagają wielu odpowiedzi przed oceną propozycji. Formularz dla marek zbiera te informacje, wymagane zgody RODO i zabezpiecza skrzynkę przed spamem."
      }
    ],
    mustHave: [
      {
        title: "Media kit online",
        body: "Prezentuje aktualne zasięgi, profil odbiorców, dostępne formaty oraz stawki, jeśli chcesz je publikować. Edycja w CMS nie zmienia adresu przekazywanego markom."
      },
      {
        title: "Portfolio współprac",
        body: "Każda karta współpracy może zawierać markę, zakres, użyte kanały i zatwierdzone materiały. Nie publikujesz poufnych wyników ani danych bez zgody partnera."
      },
      {
        title: "Formularz dla marek",
        body: "Pola obejmują cel kampanii, zakres publikacji, budżet, termin i dane do faktury. Formularz kontaktowy zawiera ochronę przed spamem oraz odpowiednią informację RODO."
      },
      {
        title: "Własna lista mailingowa",
        body: "Formularz zapisu przekazuje adresy do wybranego systemu mailingowego i zapisuje wymagane zgody. Kontakt z odbiorcami nie zależy dzięki temu wyłącznie od zasięgów platform."
      },
      {
        title: "Sklep twórcy",
        body: "Możesz sprzedawać produkty cyfrowe, dostęp do materiałów albo odzież. Sklep obejmuje karty produktów, płatności, dostarczenie pliku lub obsługę fizycznej wysyłki."
      },
      {
        title: "Centrum wszystkich linków",
        body: "Jedna lekka podstrona prowadzi do kanałów, najnowszych materiałów, sklepu i oferty współpracy. Działa pod własną domeną i zachowuje spójną identyfikację twórcy."
      }
    ],
    stack: [
      {
        label: "WordPress",
        body: "Panel CMS pozwala samodzielnie zmieniać statystyki, współprace, wpisy i ofertę bez używania gotowego kreatora."
      },
      {
        label: "Next.js",
        body: "Zapewnia szybki i responsywny interfejs niestandardowego media kitu, katalogu materiałów lub rozbudowanej strefy dla partnerów."
      },
      {
        label: "WooCommerce",
        body: "Obsługuje sklep twórcy, sprzedaż produktów cyfrowych i fizycznych, płatności, zamówienia oraz kupony promocyjne."
      },
      {
        label: "GA4",
        body: "Pokazuje, z których kanałów przychodzą odbiorcy oraz które elementy oferty, portfolio lub media kitu odwiedzają."
      }
    ],
    pricing: {
      time: "3-5 tygodni",
      note: "Wycena strony dla influencera zależy od liczby podstron, sposobu aktualizacji statystyk i zakresu formularza dla marek. Statystyki wpisywane ręcznie kosztują mniej niż pobierane automatycznie."
    },
    faq: [
      {
        q: "Ile będzie kosztować strona dla mojej marki osobistej?",
        a: "Najwięcej na zakres wpływa sposób aktualizacji danych i dodatkowe funkcje. Ręcznie edytowany media kit jest prostszy niż automatyczne pobieranie statystyk, sklep czy newsletter. Po krótkiej rozmowie i briefie przygotuję konkretną wycenę i termin."
      },
      {
        q: "Ile potrwa moja strona?",
        a: "Stronę z media kitem, ofertą współprac i formularzem dla marek realizuję zwykle w 3-5 tygodni. Termin zależy też od tego, czy masz gotowe zdjęcia, treści i materiały do portfolio."
      },
      {
        q: "Czy potrzebuję strony, skoro mam Instagram?",
        a: "Nie traktuję strony jako zamiennika Instagrama. Daje Ci własny adres dla media kitu, oferty, formularza dla marek i treści, których nie musisz za każdym razem składać w wiadomości lub pliku."
      },
      {
        q: "Jak będę aktualizować media kit?",
        a: "Przygotuję edycję danych w CMS, więc możesz zmienić statystyki, opis współprac czy ofertę bez wysyłania nowego pliku i bez zmiany adresu strony."
      },
      {
        q: "Czy mogę sprzedawać przez stronę własne produkty?",
        a: "Tak. Mogę dodać WooCommerce i przygotować sprzedaż produktów cyfrowych lub fizycznych. Przed wdrożeniem ustalę z Tobą płatności, dostawę oraz treści potrzebne przy zamówieniu."
      },
      {
        q: "Czym własna strona różni się od Linktree?",
        a: "Własna domena może zacząć od prostego zestawu odnośników, a później rozrosnąć się o media kit, ofertę dla marek, portfolio, sklep i treści. Układ oraz sposób rozwoju strony są wtedy dopasowane do Twojej marki."
      },
      {
        q: "Czy mogę przenieść obecną stronę na własną domenę?",
        a: "Tak. Mogę pomóc przy podpięciu domeny, certyfikatu i formularzy oraz dobrać hosting, na przykład Hostinger albo cyber_folks. Jeśli zmieniają się adresy podstron, przygotuję również potrzebne przekierowania."
      },
      {
        q: "Jak mam rozliczać sprzedaż plików cyfrowych?",
        a: "Zasady podatkowe ustalasz z księgowym odpowiednio do swojej działalności, produktu i kraju kupującego. Ja konfiguruję w sklepie przekazane stawki, dokumenty i treści związane z zamówieniem."
      },
      {
        q: "Co stanie się ze stroną po zakończeniu naszej współpracy?",
        a: "Przekazuję Ci dostęp administracyjny oraz potrzebne dane do serwisu. Po starcie masz 60 dni gwarancji i bezpłatnych poprawek, a później możesz prowadzić stronę samodzielnie, przekazać ją innemu specjaliście albo zlecić mi dalszą opiekę."
      },
      {
        q: "Co powinien zawierać media kit online?",
        a: "Przygotowuję w nim miejsce na aktualne statystyki, informacje o odbiorcach, dostępne kanały, formaty publikacji i przykłady współprac. Stawki mogą być widoczne publicznie, udostępniane wybranym markom albo całkowicie pominięte."
      },
      {
        q: "Czym strona różni się od linku w bio?",
        a: "Projektuję stronę jako rozwijane centrum marki, a nie wyłącznie listę odnośników. Może łączyć media kit online, portfolio, formularz dla marek, newsletter, sklep i treści dostępne pod własną domeną."
      },
      {
        q: "Czy mogę ukryć stawki przed publicznym dostępem?",
        a: "Tak, mogę przygotować podstronę zabezpieczoną hasłem albo rozwiązanie, w którym stawki przekazujesz wyłącznie wybranym partnerom. Dokładny sposób dostępu ustalam z Tobą przy rozpoczęciu współpracy."
      },
      {
        q: "Czy strona pomoże w pozyskiwaniu współprac?",
        a: "Mogę zaprojektować ją tak, aby marki szybko znalazły ofertę, dane o odbiorcach, portfolio i formularz z konkretnymi pytaniami. Nie gwarantuję liczby zapytań, ale dobrze uporządkowana strona ułatwia ocenę oferty i rozpoczęcie rozmowy."
      },
      {
        q: "Czy potrzebuję własnej domeny?",
        a: "Rekomenduję własną domenę, ponieważ daje rozpoznawalny adres dla media kitu, oferty i pozostałych treści. Mogę pomóc w jej podpięciu oraz konfiguracji strony, a szczegóły ustalam przy rozpoczęciu współpracy."
      }
    ],
    cta: "Prześlij ofertę współprac, a przygotuję wycenę tworzenia strony dla Twojej marki osobistej",
    deliverables: [
      {
        label: "Oferta współpracy",
        body: "Przygotowuję stronę z formatami publikacji, danymi o odbiorcach, wybranymi wynikami kampanii i formularzem dla marek."
      },
      {
        label: "Aktualny cennik",
        body: "Mogę przygotować chronioną hasłem podstronę stawek, którą edytujesz w CMS i udostępniasz wybranym zleceniodawcom."
      },
      {
        label: "Portfolio materiałów",
        body: "Porządkuję wskazane publikacje według platformy, tematu, marki lub rodzaju współpracy. Zakres materiałów ustalamy w briefie."
      },
      {
        label: "Zapisy odbiorców",
        body: "Podłączam ustalony system newslettera, formularz zapisu z potwierdzeniem, wymagane zgody i stronę podziękowania."
      },
      {
        label: "Sprzedaż cyfrowa",
        body: "Mogę skonfigurować sprzedaż plików lub innych produktów cyfrowych w WooCommerce wraz z płatnością, kartami produktów i automatycznym dostępem. Liczbę produktów i dokładny zakres ustalamy w briefie."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach influencerów",
      mustHave: "Czego wymaga strona influencera",
      cases: "Jak podejdę do Twojej strony",
      stack: "Jak tworzę strony dla influencerów",
      pricing: "Ile kosztuje strona dla influencera",
      faq: "Tworzenie stron dla influencerów: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Kanały, zasięgi, formaty współprac i stawki, które chcesz pokazać publicznie."
      },
      {
        step: "02",
        title: "Media kit",
        body: "Układamy dane, które marka musi zobaczyć, zanim w ogóle napisze."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Identyfikacja budowana pod Twoją markę, nie pod szablon kreatora."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Strona, formularz dla marek z budżetem i terminem, zapis do listy mailingowej."
      },
      {
        step: "05",
        title: "Start",
        body: "Podpięcie domeny, analityka i szkolenie z samodzielnej aktualizacji statystyk."
      }
    ],
    notFor: [
      "Chcesz zastąpić stroną profil w mediach społecznościowych. Ona go uzupełnia, nie zastępuje.",
      "Nie masz jeszcze żadnych współprac ani danych o odbiorcach. Media kit nie ma czym się wypełnić.",
      "Potrzebujesz tylko listy odnośników. Do tego wystarczy darmowy kreator i szkoda Twoich pieniędzy."
    ]
  },
  {
    slug: "tworzenie-stron-dla-streamerow",
    title: "Streamerzy",
    keyword: "tworzenie stron dla streamerów",
    metaTitle: "Tworzenie stron dla streamerów: harmonogram i sponsorzy",
    metaDescription: "Tworzenie stron dla streamerów: harmonogram transmisji, status na żywo, klipy i oferta dla sponsorów. Wykonanie 2-4 tygodnie.",
    h1: "Tworzenie stron dla streamerów",
    lead: "Buduję strony dla streamerów i twórców gamingowych, które zbierają w jednym miejscu harmonogram, kanały, klipy, Discord i ofertę dla sponsorów. Pracuję z Wrocławia, zdalnie z klientami z całej Polski i z Niemiec.",
    intro: [
      "Widz często otwiera stronę prosto z czatu albo opisu kanału i chce w kilka sekund znaleźć konkretną rzecz. Dlatego tworzenie stron dla streamerów opieram na czytelnym harmonogramie, lekkim widoku mobilnym i szybkim dostępie do transmisji, społeczności oraz oferty współprac. Przy bardziej dynamicznych funkcjach mogę wykorzystać [aplikację Next.js](/uslugi/aplikacje-nextjs), a przy prostszym zakresie [lekką stronę Jamstack](/uslugi/strony-jamstack).",
      "Nie mam jeszcze w portfolio wdrożenia przygotowanego bezpośrednio dla streamera, drużyny e-sportowej ani organizatora turnieju. Mogę za to pokazać [inne opublikowane realizacje](/projekty) i przed wyceną sprawdzić, jakie dane rzeczywiście udostępniają platformy, z których korzystasz."
    ],
    pains: [
      {
        title: "Linki w wielu miejscach",
        body: "Harmonogram, Discord, sklep i archiwum nagrań często żyją pod różnymi adresami, więc widz musi pamiętać, gdzie czego szukać. Własna strona zbiera najważniejsze miejsca pod jednym adresem i pozwala prowadzić do nich bezpośrednio z czatu lub opisu kanału."
      },
      {
        title: "Nieaktualny plan transmisji",
        body: "Harmonogram zapisany wyłącznie w grafice trudno szybko poprawić i odczytać na telefonie. Edytowalny plan w CMS pokazuje dzień, godzinę, platformę oraz temat bez przebudowy serwisu."
      },
      {
        title: "Ogólna oferta sponsorska",
        body: "Marka potrzebuje danych o widowni, dostępnych formatach i sposobie kontaktu. Osobna podstrona prezentuje sprawdzone statystyki, przykłady aktywacji i zakres współpracy."
      },
      {
        title: "Wolne przejście z czatu",
        body: "Ciężka witryna traci widza, który otwiera ją podczas transmisji na telefonie. Optymalizuję obrazy, kod i osadzone nagrania pod szybkość oraz Core Web Vitals."
      }
    ],
    mustHave: [
      {
        title: "Status transmisji",
        body: "Strona może wskazywać, czy kanał jest aktualnie na żywo, i kierować bezpośrednio do transmisji. Automatyzacja zależy od dostępu oraz zasad interfejsu danej platformy."
      },
      {
        title: "Harmonogram streamów",
        body: "Plan zawiera terminy, tematykę i platformę każdego spotkania. Zmiany wprowadzasz w panelu witryny bez edytowania grafiki."
      },
      {
        title: "Klipy i momenty",
        body: "Najlepsze materiały są pogrupowane według gry, serii albo wydarzenia. Osadzam je oszczędnie, aby biblioteka nie obciążała pierwszego widoku strony."
      },
      {
        title: "Zaproszenie na Discord",
        body: "Wyraźny przycisk kieruje widza do społeczności i może pojawiać się obok harmonogramu. Opis wyjaśnia, jakie kanały oraz aktywności są dostępne po dołączeniu."
      },
      {
        title: "Oferta dla sponsorów",
        body: "Sekcja zawiera profil widowni, dostępne formaty, zatwierdzone wyniki i dane kontaktowe. Formularz dla sponsorów zbiera brief, budżet, termin i oczekiwany zakres kampanii."
      },
      {
        title: "Sklep z merchem",
        body: "Integracja z Printful lub Printify umożliwia realizację zamówień w modelu druku na żądanie. Przed uruchomieniem sprawdzam karty produktów, koszty dostaw i obieg statusów."
      }
    ],
    stack: [
      {
        label: "Next.js",
        body: "Obsługuje dynamiczny status transmisji, harmonogram, skład drużyny i niestandardowe połączenia witryny z usługami zewnętrznymi."
      },
      {
        label: "Twitch",
        body: "Dostępny interfejs może przekazywać stronie status kanału i dane transmisji po poprawnej konfiguracji autoryzacji."
      },
      {
        label: "Discord",
        body: "Integracja prowadzi do właściwego serwera i może prezentować podstawowe informacje, które Discord udostępnia zewnętrznym serwisom."
      },
      {
        label: "Printful",
        body: "Połączenie sklepu z drukiem na żądanie przekazuje zamówienia do produkcji i ogranicza potrzebę utrzymywania własnego magazynu."
      }
    ],
    pricing: {
      time: "2-4 tygodnie",
      note: "Na wycenę strony streamera wpływają liczba platform, automatyczny status transmisji, sposób obsługi harmonogramu i liczba osadzonych materiałów."
    },
    faq: [
      {
        q: "Ile będzie kosztować moja strona dla widzów i sponsorów?",
        a: "Największą różnicę w zakresie robią integracje z platformami. Strona z harmonogramem, klipami i odnośnikami jest prostsza niż serwis pobierający status transmisji albo połączony ze sklepem. Po briefie przygotuję wycenę z zakresem i terminem."
      },
      {
        q: "Ile potrwa moja strona streamera?",
        a: "Stronę z harmonogramem, klipami i ofertą dla sponsorów realizuję zwykle w 2-4 tygodnie. Jeśli projekt ma działać jako aplikacja Next.js z niestandardowymi integracjami, typowy termin wynosi 6-12 tygodni. Dokładny zakres ustalę po sprawdzeniu platform, z których korzystasz."
      },
      {
        q: "Czy moja strona może automatycznie pokazywać, że jestem na żywo?",
        a: "Taką funkcję mogę wdrożyć wtedy, gdy dana platforma udostępnia potrzebne dane i pozwala z nich korzystać. Przed wyceną sprawdzę dokumentację i sposób autoryzacji."
      },
      {
        q: "Czy mogę dodać sklep z merchem?",
        a: "Tak. Mogę przygotować sklep i połączyć go z usługą druku na żądanie, jeśli wybrane rozwiązanie pasuje do Twojego modelu sprzedaży. Zakres płatności, dostaw i obsługi zamówień ustalę w briefie."
      },
      {
        q: "Po co mi własna strona, skoro mam Twitcha?",
        a: "Nie ma zastępować platformy do transmisji. Daje Ci własny adres, pod którym możesz połączyć harmonogram, pozostałe kanały, Discord, materiały dla sponsorów i ewentualny sklep."
      },
      {
        q: "Czy własna strona może zastąpić panel z linkami?",
        a: "Tak. Mogę przygotować lekką podstronę z najważniejszymi odnośnikami, a później rozbudować ją o harmonogram, klipy, ofertę sponsorską lub inne sekcje."
      },
      {
        q: "Co będę opłacać po uruchomieniu strony?",
        a: "Potrzebujesz domeny i hostingu, a przy niektórych integracjach mogą dojść opłaty za zewnętrzne usługi. Pomogę dobrać hosting, na przykład Hostinger albo cyber_folks, i przed publikacją wskażę, które elementy wymagają odnowienia."
      },
      {
        q: "Czy po zmianie nazwy kanału muszę robić stronę od nowa?",
        a: "Nie, jeśli jej struktura nadal pasuje do Twojej działalności. Mogę zmienić nazwę, identyfikację, odnośniki do profili i domenę, a przy zmianie adresów przygotować przekierowania 301."
      },
      {
        q: "Co stanie się ze stroną podczas awarii Twitcha lub YouTube?",
        a: "Treści zapisane na Twoim hostingu nadal mogą działać, ale elementy pobierające dane z zewnętrznej platformy mogą przestać je wyświetlać. Przy takich integracjach przygotuję stan zastępczy, żeby użytkownik nie trafiał na pusty moduł."
      },
      {
        q: "Czy strona może pokazywać nagrania z Twitcha i YouTube?",
        a: "Mogę osadzić wybrane nagrania lub uporządkować je w bibliotece według gier, serii i formatów. Dokładny sposób wyświetlania zależy od możliwości oraz zasad udostępniania treści przez Twitch i YouTube, dlatego sprawdzam je przy rozpoczęciu współpracy."
      },
      {
        q: "Czym własna strona różni się od gotowego kreatora dla streamerów?",
        a: "Własną stronę projektuję pod Twoją markę, strukturę treści i planowane funkcje. Daje ona większą kontrolę nad domeną, wyglądem i rozbudową, natomiast kreator opiera się na modułach oraz ograniczeniach konkretnej usługi."
      },
      {
        q: "Czy sponsorzy zwracają uwagę na stronę streamera?",
        a: "Nie mogę zagwarantować, że sama strona wpłynie na decyzję sponsora. Mogę jednak przygotować czytelną strefę z zatwierdzonymi danymi kanału, formatami współpracy, przykładami aktywacji i formularzem, dzięki czemu marka łatwiej oceni propozycję."
      },
      {
        q: "Czy mogę sam zmieniać harmonogram?",
        a: "Mogę przygotować edytowalny harmonogram i przeszkolić Cię z obsługi treści online. Dokładny sposób dodawania terminów oraz zakres dostępnych pól ustalam przy rozpoczęciu współpracy."
      },
      {
        q: "Czy strona zadziała, gdy zmienię platformę streamingową?",
        a: "Treści zapisane na Twojej stronie mogą nadal działać, ale integracje powiązane z poprzednią platformą będą wymagały zmiany. Sprawdzę możliwości nowego serwisu i ustalę, które moduły można przepiąć, a które trzeba przebudować."
      }
    ],
    cta: "Podeślij kanały i planowane funkcje, a przygotuję wycenę tworzenia strony dla streamera",
    deliverables: [
      {
        label: "Rozkład transmisji",
        body: "Tworzę edytowalny harmonogram z godzinami, tematami i platformami. Sposób prezentacji oraz ewentualne przeliczanie czasu ustalamy w briefie."
      },
      {
        label: "Integracja transmisji",
        body: "Mogę podłączyć stronę do danych udostępnianych przez wybraną platformę, żeby pokazać informacje o transmisji. Zakres zależy od możliwości i zasad jej interfejsu."
      },
      {
        label: "Panel społeczności",
        body: "Buduję podstronę z zasadami społeczności, odnośnikiem do Discorda, formularzem kontaktowym, zgodą RODO i informacjami potrzebnymi Twojej społeczności."
      },
      {
        label: "Biblioteka nagrań",
        body: "Osadzam wybrane nagrania i porządkuję je według serii, gier lub formatów bez przesyłania filmów na hosting strony. Zakres materiałów ustalamy w briefie."
      },
      {
        label: "Pakiet sponsorski",
        body: "Przygotowuję podstronę dla sponsorów z danymi kanału, dostępnymi formatami współpracy, zatwierdzonymi przykładami i formularzem zapytania."
      }
    ],
    headings: {
      pains: "Co nie działa na stronach streamerów",
      mustHave: "Czego wymaga strona streamera",
      cases: "Jak podejdę do Twojej strony",
      stack: "Jak tworzę strony dla streamerów",
      pricing: "Ile kosztuje strona dla streamera",
      faq: "Tworzenie stron dla streamerów: pytania"
    },
    process: [
      {
        step: "01",
        title: "Brief",
        body: "Platformy, harmonogram transmisji i plany na merch oraz sponsorów."
      },
      {
        step: "02",
        title: "Integracje",
        body: "Sprawdzam, co realnie da się pobrać z interfejsu danej platformy i na jakich zasadach."
      },
      {
        step: "03",
        title: "Projekt",
        body: "Panel odnośników i harmonogram czytelne na telefonie w trakcie oglądania."
      },
      {
        step: "04",
        title: "Wdrożenie",
        body: "Strona, status transmisji, klipy, Discord, opcjonalnie sklep na druk na żądanie."
      },
      {
        step: "05",
        title: "Start",
        body: "Test statusu na żywo, podpięcie domeny i szkolenie z edycji harmonogramu."
      }
    ],
    notFor: [
      "Liczysz, że strona przyniesie widzów. Widzów przynosi transmisja, strona ich porządkuje.",
      "Nie masz jeszcze regularnego harmonogramu ani społeczności. Zbuduj to najpierw na platformie.",
      "Chcesz sklep z własnym magazynem i wysyłką po swojej stronie. Wtedy to zwykły sklep, inny budżet."
    ]
  }
];
