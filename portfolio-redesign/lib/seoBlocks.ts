export type SeoBlockSection = {
  /** Kotwica dla spisu treści. */
  id: string;
  heading: string;
  body: string[];
  /** Lista po akapitach. Łamie monotonię samej prozy, nie każda sekcja ją ma. */
  list?: string[];
  /** Tabela po liście, przed akapitami końcowymi. */
  table?: { caption: string; head: string[]; rows: string[][] };
  /** Akapity po liście. */
  outro?: string[];
};

export type SeoBlock = {
  heading: string;
  /** Widoczne zawsze, nad spisem treści. */
  intro: string[];
  sections: SeoBlockSection[];
};

/**
 * Rozbudowany blok tekstowy na dole strony usługi. Treść siedzi w HTML zawsze,
 * <details> chowa ją tylko wizualnie, więc roboty widzą pełny tekst.
 * Klucz = slug usługi z lib/services.ts albo branży z lib/industries.ts.
 */
export const SEO_BLOCKS: Record<string, SeoBlock> = {
  "tworzenie-stron-wordpress": {
    "heading": "Tworzenie stron WordPress: co warto wiedzieć przed zleceniem",
    "intro": [
      "Tworzenie stron WordPress może oznaczać zupełnie różne rozwiązania. Jedna firma dostanie kupiony szablon z podmienionymi zdjęciami, druga stronę złożoną w Elementorze, a trzecia własny motyw zaprojektowany pod jej ofertę. Wszystkie będą działać na WordPressie, ale różnice zobaczysz przy pierwszej większej zmianie, aktualizacji albo próbie przyspieszenia strony.",
      "Jeśli zamawiasz stronę firmową, warto wiedzieć, za co płacisz i co będziesz mógł zrobić samodzielnie po odbiorze. Wyjaśniam, kiedy WordPress ma sens, jak wybieram sposób wykonania, co wpływa na szybkość i bezpieczeństwo oraz jakie elementy uwzględniam w wycenie. Dzięki temu łatwiej zdecydujesz, jaką stronę warto zlecić dla Twojej firmy."
    ],
    "sections": [
      {
        "id": "kiedy-wordpress-jest-dobrym-wyborem-dla-strony-firmowej",
        "heading": "Kiedy WordPress jest dobrym wyborem dla strony firmowej",
        "body": [
          "WordPress sprawdza się przede wszystkim wtedy, gdy strona ma prezentować ofertę, zbierać zapytania i pozwalać właścicielowi samodzielnie aktualizować treści. Możesz dodawać usługi, zmieniać zdjęcia, publikować poradniki i rozbudowywać serwis bez zamawiania każdej zmiany u programisty.",
          "To dobry wybór dla kancelarii, firmy usługowej, producenta czy lokalnego przedsiębiorstwa, które potrzebuje rozbudowanej oferty i bloga. Poszczególne podstrony mogą korzystać ze wspólnych układów, więc dodawanie kolejnych usług nie wymaga projektowania wszystkiego od początku.",
          "Nie każdą funkcję trzeba jednak realizować w WordPressie. Jeśli głównym zadaniem serwisu ma być obsługa zaawansowanego panelu klienta, rozbudowane przetwarzanie danych albo działanie zbliżone do aplikacji, rozważam również inne technologie.",
          "Sama możliwość doinstalowania wtyczki nie jest wystarczającym powodem, żeby wybierać WordPress. Ważne, jak często będziesz zmieniać treści, kto będzie obsługiwać panel i jakie funkcje naprawdę są potrzebne.",
          "Przed wyceną sprawdzam więc, czy strona firmowa na WordPressie będzie rozwiązaniem wygodnym nie tylko w dniu uruchomienia, ale również podczas codziennej pracy."
        ]
      },
      {
        "id": "gotowy-szablon-elementor-czy-wlasny-motyw-wordpress",
        "heading": "Gotowy szablon, Elementor czy własny motyw WordPress",
        "body": [
          "Gotowy szablon pozwala szybko rozpocząć pracę, ponieważ zawiera przygotowane układy i elementy graficzne. Problem pojawia się, gdy firma potrzebuje sekcji, której autor szablonu nie przewidział. Trzeba wtedy dostosowywać istniejące rozwiązanie albo dokładać kolejne rozszerzenia.",
          "Kreatory typu Elementor dają większą swobodę wizualną. Możesz przesuwać elementy i budować układy w panelu. Ta swoboda oznacza jednak również więcej ustawień, dodatkowy kod i zależność od konkretnego narzędzia.",
          "Własny motyw tworzę pod zaakceptowany projekt. Nie dostajesz całego zestawu możliwych układów, tylko te, których Twoja strona rzeczywiście potrzebuje."
        ],
        "table": {
          "caption": "Gotowy szablon, Elementor czy własny motyw WordPress",
          "head": [
            "Rozwiązanie",
            "Szybkość działania",
            "Edycja treści",
            "Utrzymanie",
            "Dla kogo"
          ],
          "rows": [
            [
              "Kupiony szablon",
              "Zależy od jakości motywu i dodatków",
              "Według możliwości szablonu",
              "Aktualizacje motywu i zgodności dodatków",
              "Prosta strona z typowym układem"
            ],
            [
              "Kreator typu Elementor",
              "Może wymagać dodatkowej optymalizacji",
              "Duża swoboda, także zmiany układu",
              "Aktualizacje kreatora i jego rozszerzeń",
              "Strona często przebudowywana wizualnie"
            ],
            [
              "Własny motyw WordPress",
              "Kod dopasowany do potrzeb strony",
              "Pola odpowiadające konkretnym sekcjom",
              "Kontrola nad kodem, rozwój przez programistę",
              "Strona firmowa rozwijana przez lata"
            ]
          ]
        },
        "outro": [
          "Nie twierdzę, że każda strona z Elementorem musi być wolna. Wiele zależy od sposobu jej wykonania. Problemem bywa jednak ilość generowanego kodu i trudność w kontrolowaniu całej struktury.",
          "Na własnym serwisie z ponad 400 poradnikami zastąpiłem stronę główną zbudowaną w Elementorze rozwiązaniem składanym z bazy danych przez własną wtyczkę. To przykład sytuacji, w której lepiej zaprogramować konkretny mechanizm niż nadal rozbudowywać kreator.",
          "Szerzej opisuję te ograniczenia we wpisie [Elementor: dlaczego nie warto](/blog/elementor-dlaczego-nie-warto).",
          "Zlecając mi nową stronę, otrzymujesz własny motyw z panelem edycji dopasowanym do projektu, a nie kolejny zestaw ustawień uniwersalnego kreatora."
        ]
      },
      {
        "id": "co-rzeczywiscie-przyspiesza-strone-wordpress",
        "heading": "Co rzeczywiście przyspiesza stronę WordPress",
        "body": [
          "Na szybkość strony wpływa znacznie więcej niż wybór hostingu. Liczą się rozmiary obrazów, ilość kodu, sposób ładowania czcionek, zewnętrzne skrypty i to, jak szybko serwer odpowiada na żądania.",
          "Google ocenia doświadczenie użytkownika między innymi przez Core Web Vitals. W praktyce sprawdzają one, kiedy pojawia się główna zawartość, jak szybko strona reaguje na działania i czy elementy nie przesuwają się podczas ładowania.",
          "Przy projektowaniu zwracam uwagę szczególnie na:"
        ],
        "list": [
          "Obrazy: odpowiednie rozmiary i formaty zamiast dużych plików pomniejszanych dopiero w przeglądarce.",
          "Kod motywu: ładowanie tylko tych elementów, które są potrzebne na konkretnej podstronie.",
          "Pamięć podręczną: ograniczenie konieczności generowania tej samej zawartości przy kolejnych odwiedzinach.",
          "Skrypty zewnętrzne: kontrolowanie narzędzi analitycznych, formularzy i dodatkowych bibliotek."
        ],
        "outro": [
          "W nowych projektach nie instaluję kreatora tylko po to, żeby zbudować kilka sekcji. Własny motyw daje mi większą kontrolę nad tym, jakie zasoby pobiera przeglądarka.",
          "Moim celem przed oddaniem jest Lighthouse 90+ na telefonie i LCP poniżej 2,5 s. LCP określa czas wyświetlenia głównego elementu strony. Na końcowy wynik wpływają jednak również hosting, treści i usługi zewnętrzne.",
          "Zlecając stronę, dostajesz wdrożenie z pomiarem wydajności przed uruchomieniem, a nie wyłącznie zapewnieniem, że powinno działać szybko."
        ]
      },
      {
        "id": "jak-przygotowuje-panel-zebys-mogl-sam-edytowac-strone",
        "heading": "Jak przygotowuję panel, żebyś mógł sam edytować stronę",
        "body": [
          "Samodzielna edycja treści nie powinna oznaczać konieczności samodzielnego projektowania układu. Jeśli chcesz poprawić opis usługi, nie musisz mieć dostępu do ustawień szerokości kolumn, odstępów i sposobu wyświetlania elementów.",
          "Do przygotowania panelu wykorzystuję ACF, czyli mechanizm dodawania własnych pól w WordPressie. Każdemu edytowalnemu elementowi przypisuję pole odpowiadające jego przeznaczeniu.",
          "Jeżeli sekcja zawiera nagłówek, opis, zdjęcie i przycisk, w panelu możesz zobaczyć dokładnie te elementy. Zmieniasz zawartość, zapisujesz i sprawdzasz wynik na stronie.",
          "Przy bardziej rozbudowanych układach przygotowuję pola pozwalające zarządzać powtarzalnymi elementami, na przykład listą usług czy pytaniami w FAQ. Nie musisz kopiować kodu ani ręcznie odtwarzać wyglądu następnej pozycji.",
          "Ważne jest też ustalenie granic edycji. Jeśli sekcja ma zachować określony układ, nie udostępniam ustawień, które przypadkowo mogłyby go zniszczyć.",
          "Po uruchomieniu prowadzę szkolenie online na Twojej stronie, pokazując dodawanie i aktualizowanie treści. Zlecając mi wdrożenie, otrzymujesz więc przygotowany panel oraz instruktaż jego codziennej obsługi."
        ]
      },
      {
        "id": "kiedy-wlasna-wtyczka-jest-lepsza-od-kilku-gotowych",
        "heading": "Kiedy własna wtyczka jest lepsza od kilku gotowych",
        "body": [
          "Nie każda dodatkowa funkcja wymaga instalowania gotowej wtyczki. Czasem rozwiązanie dostępne w katalogu WordPressa zawiera wiele ustawień, integracji i modułów, chociaż potrzebujesz tylko jednego konkretnego działania.",
          "Mam za sobą ponad 40 własnych wtyczek i mu-pluginów wdrożonych w 9 serwisach. Mu-plugin to rozszerzenie WordPressa uruchamiane automatycznie, bez zwykłego przełącznika aktywacji w panelu. Wykorzystuję takie rozwiązania między innymi do automatyzacji, SEO i GEO, integracji przez API, WooCommerce i bezpieczeństwa.",
          "W jednym z własnych serwisów przygotowałem siedem kalkulatorów obsługiwanych przez jedną wtyczkę, w tym kalkulator kuchni na wymiar. Inna funkcja automatycznie dodaje do artykułów spisy treści, rozwijane pytania i odpowiedzi oraz powiązane wpisy.",
          "Własny kod nie zawsze będzie lepszy. Jeśli istnieje sprawdzona wtyczka, która dokładnie odpowiada potrzebom projektu, jej wykorzystanie może być rozsądniejsze niż pisanie identycznej funkcji.",
          "Warto jednak odróżnić wygodę instalacji od późniejszego utrzymania. Każdy dodatkowy komponent trzeba aktualizować, kontrolować pod kątem bezpieczeństwa i sprawdzać jego zgodność z pozostałymi elementami strony.",
          "Przy wycenie oceniam, czy potrzebną funkcję lepiej wdrożyć gotowym rozwiązaniem, czy zaprogramować specjalnie dla Twojej firmy."
        ]
      },
      {
        "id": "jak-przygotowuje-strone-pod-google-i-odpowiedzi-ai",
        "heading": "Jak przygotowuję stronę pod Google i odpowiedzi AI",
        "body": [
          "WordPress daje możliwość ustawienia czytelnych adresów, tytułów stron i opisów widocznych w wynikach wyszukiwania. Nie oznacza to jednak, że nowa strona automatycznie będzie dobrze widoczna w Google.",
          "Znaczenie ma struktura serwisu, jakość treści i techniczna możliwość ich odczytania. Jeśli oferujesz różne usługi, warto przygotować dla nich osobne podstrony zamiast umieszczać wszystkie informacje w jednym krótkim opisie.",
          "Podczas wdrożenia konfiguruję strukturę nagłówków, mapę witryny, dane strukturalne i Google Search Console. Dane strukturalne pomagają wyszukiwarce rozpoznać, co znajduje się na danej podstronie.",
          "W odpowiednich miejscach mogę zastosować FAQPage, czyli dane opisujące pytania i odpowiedzi. W jednym z serwisów generowałem je z treści na 951 podstronach lokalnych. Taki mechanizm ogranicza konieczność ręcznego przygotowywania osobnego kodu dla każdej podstrony.",
          "Uwzględniam też GEO, czyli przygotowanie treści tak, aby ich temat, zakres i powiązania były czytelne dla systemów korzystających z AI. Nie oznacza to gwarancji cytowania przez ChatGPT ani pojawienia się w odpowiedziach innych narzędzi.",
          "Nie obiecuję też pozycji w Google. Na widoczność wpływają czynniki wykraczające poza samo wykonanie strony.",
          "Zlecając mi stronę WordPress, otrzymujesz techniczne podstawy SEO i uporządkowaną strukturę treści, którą możesz później rozwijać."
        ]
      },
      {
        "id": "jak-dobrac-hosting-i-zadbac-o-bezpieczenstwo",
        "heading": "Jak dobrać hosting i zadbać o bezpieczeństwo",
        "body": [
          "Hosting wpływa na wydajność, dostępność i bezpieczeństwo strony. Przy niewielkiej witrynie firmowej nie zawsze potrzebujesz rozbudowanej infrastruktury, ale najtańszy pakiet również nie musi być najlepszym wyborem.",
          "Przy wyborze serwera sprawdzam wersję PHP, dostępne zasoby, możliwość wykonywania kopii zapasowych, certyfikat SSL i warunki aktualizacji środowiska. Najczęściej rozważam Hostingera lub cyber_folks, zależnie od wymagań projektu.",
          "Bezpieczeństwo nie kończy się na instalacji wtyczki ochronnej. Liczą się aktualizacje WordPressa, motywu i rozszerzeń, mocne hasła, ograniczone uprawnienia użytkowników oraz możliwość odtworzenia strony z kopii zapasowej.",
          "Kopia przechowywana wyłącznie na tym samym serwerze nie chroni przed każdą awarią. Ważne, gdzie są przechowywane dane i czy procedura przywracania rzeczywiście działa.",
          "Istotna jest także własność usług. Domena i hosting powinny należeć do Ciebie, a wykonawca powinien otrzymać odpowiednie dostępy techniczne. Dzięki temu nie tracisz kontroli nad stroną, jeśli zmienisz osobę odpowiedzialną za jej utrzymanie.",
          "Po uruchomieniu mogę dalej zajmować się aktualizacjami, kopiami zapasowymi i kontrolą bezpieczeństwa w ramach opcjonalnej usługi [opieka nad stroną WordPress](/uslugi/opieka-wordpress). Przy zleceniu ustalam również wymagania hostingowe i sposób zabezpieczenia witryny."
        ]
      },
      {
        "id": "jak-przebiega-projekt-i-co-otrzymujesz-po-wdrozeniu",
        "heading": "Jak przebiega projekt i co otrzymujesz po wdrożeniu",
        "body": [
          "Pracę zaczynam od rozmowy i briefu. Ustalam, do kogo kierujesz ofertę, jakie podstrony są potrzebne i które treści będziesz później samodzielnie aktualizować.",
          "Następnie przygotowuję projekt w Figmie. Masz dwie tury poprawek, a programowanie rozpoczynam po akceptacji wyglądu strony. W ten sposób unikam sytuacji, w której większe zmiany układu pojawiają się dopiero po napisaniu motywu.",
          "Podczas programowania udostępniam wersję testową po każdym etapie. Możesz sprawdzić wygląd, treści i działanie funkcji, zanim przeniosę stronę na docelowy serwer.",
          "Przy wymianie starej witryny uwzględniam przekierowania 301 dla zmienionych adresów. Przygotowuję migrację tak, żeby ograniczyć przerwę w działaniu, choć zmiana DNS może spowodować krótką niedostępność.",
          "Przed odbiorem sprawdzam formularze, wersję mobilną, wydajność, dostępność i konfigurację podstawowych narzędzi.",
          "Po wdrożeniu otrzymujesz dostęp administracyjny do strony, przygotowany panel edycji i szkolenie online. Przez 60 dni obowiązuje gwarancja i bezpłatne poprawki.",
          "Zlecając mi stronę, współpracujesz bezpośrednio z osobą, która projektuje jej działanie i pisze kod, bez przekazywania ustaleń między kolejnymi działami."
        ]
      },
      {
        "id": "ile-trwa-stworzenie-strony-i-co-wplywa-na-koszt",
        "heading": "Ile trwa stworzenie strony i co wpływa na koszt",
        "body": [
          "Prosta wizytówka firmowa zajmuje zwykle 2-3 tygodnie. Typowa strona firmowa lub usługowa wymaga najczęściej 4-6 tygodni. To orientacyjne terminy, które potwierdzam po poznaniu zakresu i dostępności materiałów.",
          "Największy wpływ na koszt ma liczba unikalnych układów podstron oraz funkcji wymagających zaprojektowania i zaprogramowania.",
          "Strona zawierająca wiele usług korzystających z jednego układu może wymagać mniej pracy niż niewielka witryna z osobno projektowanymi widokami i nietypowymi mechanizmami.",
          "Dodatkowy zakres mogą stanowić:"
        ],
        "list": [
          "Integracje z systemami zewnętrznymi i własne kalkulatory.",
          "Wersje językowe oraz migracja istniejących treści.",
          "Dodatkowe układy bloga, realizacji i podstron ofertowych.",
          "Funkcje wymagające osobnej wtyczki lub przetwarzania danych."
        ],
        "outro": [
          "Na harmonogram wpływa również termin dostarczenia tekstów i zdjęć. Jeśli materiały powstają dopiero podczas programowania, trudniej utrzymać uzgodnioną kolejność prac.",
          "Pomaga wskazanie jednej osoby odpowiedzialnej za akceptację projektu oraz zebranie uwag przed rozpoczęciem kolejnego etapu.",
          "Przy wycenie rozpisuję zakres prac i termin, żebyś wiedział, jakie widoki i funkcje obejmuje zamówienie."
        ]
      },
      {
        "id": "jak-przygotowac-tresci-zeby-strona-odpowiadala-na-pytania-kl",
        "heading": "Jak przygotować treści, żeby strona odpowiadała na pytania klientów",
        "body": [
          "Projekt graficzny nie zastąpi dobrze przygotowanej oferty. Nawet atrakcyjna strona niewiele wyjaśni klientowi, jeśli nie znajdzie na niej konkretnego opisu usługi, obszaru działania albo sposobu kontaktu.",
          "Przed rozpoczęciem projektu warto zebrać opisy usług, informacje o firmie, zdjęcia i odpowiedzi na pytania, które regularnie otrzymujesz od klientów.",
          "Osobna podstrona usługi pozwala wyjaśnić, co obejmuje oferta, dla kogo jest przeznaczona i jak wygląda współpraca. Nie trzeba wtedy upychać różnych tematów w jednej sekcji strony głównej.",
          "Jeśli prowadzisz blog, warto również ustalić kategorie i sposób prezentacji wpisów. Przy większej liczbie publikacji znaczenie mają powiązane artykuły, spisy treści oraz wygodne wyszukiwanie informacji.",
          "Ważne są także dokumenty formalne, takie jak polityka prywatności i informacje dotyczące cookies. Ich treść powinna odpowiadać faktycznemu sposobowi przetwarzania danych przez firmę.",
          "Na etapie briefu ustalam, które materiały już posiadasz, a które trzeba przygotować przed wdrożeniem, żeby projekt strony odpowiadał rzeczywistej zawartości."
        ]
      },
      {
        "id": "dostepnosc-wcag-warto-uwzglednic-juz-podczas-projektowania",
        "heading": "Dostępność WCAG warto uwzględnić już podczas projektowania",
        "body": [
          "Dostępność cyfrowa dotyczy możliwości korzystania ze strony przez osoby o różnych potrzebach, w tym użytkowników klawiatury, czytników ekranu oraz osoby mające trudności z odczytywaniem treści.",
          "W praktyce oznacza odpowiedni kontrast, logiczną strukturę nagłówków, opisy alternatywne obrazów, poprawne etykiety formularzy i widoczne oznaczenie aktualnie wybranego elementu.",
          "Od 28 czerwca 2025 roku określone usługi cyfrowe podlegają ustawowym wymaganiom dostępności. Zakres obowiązków zależy jednak od rodzaju usługi i sytuacji przedsiębiorcy. Sama obecność strony firmowej nie przesądza automatycznie o wszystkich obowiązkach prawnych.",
          "Przy wdrożeniu uwzględniam zasady WCAG od etapu projektowania. Dokładniejsza weryfikacja może wymagać ręcznych testów, ponieważ automatyczne narzędzia nie wykrywają wszystkich problemów. Zakres takiego sprawdzenia opisuję na stronie [audyt dostępności WCAG](/audyt-wcag).",
          "Nie traktuję również nakładki z przyciskiem zmiany kontrastu jako rozwiązania wszystkich problemów dostępności. Jeśli formularz nie działa z klawiatury, dodatkowy pasek narzędzi nie naprawi jego konstrukcji.",
          "Zlecając stronę, możesz uwzględnić dostępność już w projekcie i określić zakres wymaganych testów, zamiast zamawiać przebudowę gotowego interfejsu."
        ]
      },
      {
        "id": "jakich-bledow-uniknac-przy-zamawianiu-strony-wordpress",
        "heading": "Jakich błędów uniknąć przy zamawianiu strony WordPress",
        "body": [
          "Pierwszym błędem jest wybieranie wykonawcy wyłącznie na podstawie wyglądu przykładowych stron. Warto sprawdzić również panel edycji, sposób realizacji dodatkowych funkcji i zasady późniejszego utrzymania.",
          "Drugim jest kupowanie rozbudowanego szablonu tylko dlatego, że zawiera wiele efektów i gotowych układów. Jeśli nie korzystasz z większości tych możliwości, mogą jedynie komplikować obsługę strony.",
          "Trzecim jest odkładanie rozmowy o dostępach do momentu zakończenia współpracy. Domena, hosting i konta analityczne powinny pozostawać pod Twoją kontrolą od początku.",
          "Czwartym jest brak planu aktualizacji. Strona WordPress wymaga utrzymania także po uruchomieniu. Nie musisz zlecać tego na stałe, ale ktoś powinien odpowiadać za aktualizacje, kopie zapasowe i reagowanie na problemy.",
          "Warto również przed podpisaniem ustaleń zapytać, które elementy będziesz mógł zmieniać samodzielnie, a które będą wymagały prac programistycznych.",
          "Przyjmując zlecenie, ustalam te kwestie w briefie i zakresie wdrożenia. Dzięki temu wiesz, co otrzymujesz po uruchomieniu strony i za które obszary będziesz później odpowiadać samodzielnie."
        ]
      }
    ]
  },
  "sklepy-internetowe-woocommerce": {
    "heading": "Jak zaplanować wdrożenie sklepu WooCommerce, żeby sprzedawać i wygodnie obsługiwać zamówienia",
    "intro": [
      "Sklep WooCommerce może być prostym miejscem do zamawiania kilku produktów albo rozbudowanym systemem połączonym z hurtownią, Allegro, płatnościami i narzędziami marketingowymi. W obu przypadkach najważniejsze decyzje zapadają przed rozpoczęciem kodowania. Trzeba ustalić, skąd pochodzą dane produktowe, jak klient wybiera wariant, co dzieje się po opłaceniu zamówienia i kto aktualizuje stany magazynowe. Jeśli te elementy nie są przemyślane, nawet atrakcyjny sklep potrafi wymagać codziennego ręcznego poprawiania danych.",
      "Jestem Marcin, web developer z Wrocławia. Tworzę komercyjne strony od 2020 roku, a od końca 2022 roku pracuję na własny rachunek. Mam za sobą ponad 30 wdrożeń komercyjnych dla firm z Polski i Niemiec. Jeśli szukasz wykonawcy sklepu WooCommerce we Wrocławiu, nie musimy spotykać się osobiście, bo cały proces mogę przeprowadzić zdalnie. Sam projektuję i koduję rozwiązanie, a Ty rozmawiasz bezpośrednio ze mną. Poniżej pokazuję, jakie decyzje podejmuję podczas wdrożenia i na co warto zwrócić uwagę, zanim zamówisz sklep."
    ],
    "sections": [
      {
        "id": "woocommerce-shopify-shoper-czy-prestashop-wybor-zalezy-od-sp",
        "heading": "WooCommerce, Shopify, Shoper czy PrestaShop: wybór zależy od sposobu sprzedaży",
        "body": [
          "Nie każda firma potrzebuje WooCommerce. Jeżeli chcesz uruchomić standardowy katalog, korzystać z funkcji oferowanych przez dostawcę i nie planujesz większych zmian technicznych, rozsądnym wyborem może być platforma abonamentowa. Jeśli natomiast ważne są własny projekt, integracje z istniejącymi systemami i możliwość rozwijania niestandardowych funkcji, WooCommerce daje mi większą swobodę wdrożenia."
        ],
        "table": {
          "caption": "WooCommerce, Shopify, Shoper czy PrestaShop: wybór zależy od sposobu sprzedaży",
          "head": [
            "Platforma",
            "Dla kogo",
            "Mocna strona",
            "Ograniczenie"
          ],
          "rows": [
            [
              "WooCommerce",
              "Firma potrzebująca własnego sklepu, treści i indywidualnych integracji",
              "Swoboda rozbudowy WordPressa i funkcji sprzedażowych",
              "Wymaga utrzymania technicznego, aktualizacji i odpowiedniego hostingu"
            ],
            [
              "Shopify",
              "Firma ze standardowym procesem sprzedaży",
              "Hosting i część obsługi technicznej po stronie dostawcy",
              "Dostosowanie funkcji zależy od możliwości platformy i aplikacji"
            ],
            [
              "Shoper",
              "Firma szukająca gotowego środowiska do prowadzenia sklepu",
              "Zintegrowany model abonamentowy i narzędzia do obsługi sprzedaży",
              "Rozbudowa pod nietypowe wymagania jest ograniczona możliwościami platformy"
            ],
            [
              "PrestaShop",
              "Firma z rozbudowanym katalogiem i wymaganiami sprzedażowymi",
              "Możliwość budowy zaawansowanego sklepu z własnymi modułami",
              "Wymaga konfiguracji, utrzymania i pracy programistycznej przy dostosowaniach"
            ]
          ]
        },
        "outro": [
          "WooCommerce jest rozszerzeniem WordPressa, dlatego dobrze sprawdza się również wtedy, gdy chcesz rozwijać poradniki zakupowe, opisy kategorii czy strony poświęcone konkretnym zastosowaniom produktów. Możesz prowadzić sklep i część treściową w jednym systemie.",
          "Przy niestandardowej architekturze można rozdzielić interfejs sklepu od zaplecza, wykorzystując na przykład Next.js. Różnice technologiczne opisuję szerzej w artykule [porównanie WordPressa z Next.js](/blog/next-js-15-vs-wordpress-2026). Nie traktuję jednak takiej architektury jako domyślnego wyboru dla zwykłego sklepu.",
          "Przed przyjęciem zlecenia sprawdzam Twój model sprzedaży i dopiero wtedy proponuję WooCommerce albo inną platformę."
        ]
      },
      {
        "id": "koszt-wdrozenia-wynika-przede-wszystkim-z-integracji-i-waria",
        "heading": "Koszt wdrożenia wynika przede wszystkim z integracji i wariantów produktów",
        "body": [
          "Dwa sklepy mogą mieć podobną liczbę produktów, ale wymagać zupełnie innego nakładu pracy. Sam katalog nie mówi jeszcze, jak skomplikowane będzie wdrożenie. Większe znaczenie mają warianty produktów oraz systemy, między którymi trzeba wymieniać dane.",
          "Sklep sprzedający proste produkty z płatnościami internetowymi i dostawą ma inne wymagania niż sklep pobierający ofertę z hurtowni, aktualizujący magazyn i obsługujący zamówienia z Allegro. W drugim przypadku muszę sprawdzić nie tylko połączenie usług, ale też zachowanie danych przy zmianie statusu zamówienia, ceny lub dostępności.",
          "Na zakres prac wpływają między innymi:"
        ],
        "list": [
          "Liczba wariantów produktu, atrybutów i indywidualnych zasad wyboru.",
          "Integracje z płatnościami, dostawami, BaseLinkerem, hurtowniami i fakturowaniem.",
          "Funkcje B2B, w tym ceny dla grup klientów i minimalne zamówienia.",
          "Migracja danych, wersje językowe oraz jakość materiałów produktowych.",
          "Niestandardowe funkcje, na przykład automatyczne przypomnienia i własne reguły zamówień."
        ],
        "outro": [
          "Warto też uwzględnić utrzymanie po uruchomieniu. Sklep potrzebuje hostingu, aktualizacji, kopii zapasowych i kontroli zgodności rozszerzeń. Niektóre usługi lub dodatki mogą wymagać opłat abonamentowych, niezależnych od samego wykonania sklepu.",
          "Przygotowując wycenę, rozpisuję zakres funkcji i integracji. Po krótkiej rozmowie i briefie podaję termin oraz określam, co obejmuje wdrożenie."
        ]
      },
      {
        "id": "dane-produktowe-musza-wspolpracowac-ze-sklepem-hurtownia-i-k",
        "heading": "Dane produktowe muszą współpracować ze sklepem, hurtownią i kanałami sprzedaży",
        "body": [
          "Przed wdrożeniem sprawdzam, gdzie znajdują się informacje o produktach. Mogą być zapisane w obecnym sklepie, pliku CSV, XML albo systemie hurtowni. Ważne jest nie tylko przeniesienie nazw i cen, ale również zachowanie poprawnych identyfikatorów, wariantów, parametrów i kategorii.",
          "Dobrze zorganizowany katalog pozwala później filtrować produkty według cech przydatnych klientowi. Przy sprzęcie technicznym będą to parametry modeli, przy odzieży rozmiary, warianty i skład materiału. Te informacje powinny mieć uporządkowaną strukturę, a nie znajdować się wyłącznie w opisach.",
          "W jednym z moich wdrożeń BaseLinker obsługiwał połączenie z hurtownią. Pełny katalog pozostawał w jej magazynie, natomiast do sklepu trafiały wybrane produkty. Stany magazynowe i ceny były aktualizowane na podstawie pliku hurtowni. Dzięki temu właściciel nie musiał ręcznie przepisywać całej oferty ani prowadzić niezależnej aktualizacji każdego produktu.",
          "Takie połączenie wymaga ustalenia źródła danych. Trzeba wiedzieć, czy cenę ustala sklep, hurtownia czy inny system, a także co ma się wydarzyć, gdy produkt zniknie z dostarczanego katalogu.",
          "Przy wdrożeniu sprawdzam format danych i przygotowuję sposób ich importowania lub synchronizacji, który odpowiada Twojej codziennej pracy."
        ]
      },
      {
        "id": "karta-produktu-wyszukiwarka-i-koszyk-powinny-pomagac-kliento",
        "heading": "Karta produktu, wyszukiwarka i koszyk powinny pomagać klientowi podjąć decyzję",
        "body": [
          "Klient nie powinien szukać podstawowych informacji w kilku miejscach. Karta produktu ma odpowiadać na pytania o wariant, parametry, dostępność oraz sposób zakupu. Jej budowa zależy od tego, co sprzedajesz.",
          "W sklepie ze sprzętem obserwacyjnym przygotowałem kartę z logo producenta, parametrami pobieranymi ze słownika specyfikacji, ciemną galerią zdjęć oraz przyciskiem zakupu pozostającym w zasięgu użytkownika podczas przewijania na telefonie. Wdrożyłem również filtr marek i automatyczne podstawianie zdjęć produktów z przezroczystym tłem.",
          "Oprócz samej karty ważna jest wyszukiwarka. Przygotowywałem własne podpowiedzi w nagłówku sklepu, które wyświetlają wyniki dopasowane do wpisywanej frazy. Klient może dzięki temu przejść do szukanego produktu bez przeglądania całego katalogu.",
          "Po dodaniu produktu do koszyka liczy się czytelny proces zamówienia. Formularz powinien pokazywać potrzebne pola, poprawne komunikaty i dostępne metody dostawy. Wdrażałem również polskie komunikaty formularzy, żeby kupujący wiedział, jakie dane musi poprawić.",
          "W przypadku niedokończonych zakupów można zastosować przypomnienia. Przygotowałem mechanizm, który zapisuje porzucony koszyk, wysyła jedno przypomnienie e-mail i pozwala odtworzyć jego zawartość przez link. W innym etapie obsługi zamówień wdrożyłem zbieranie opinii 7 dni po realizacji, z jednorazowym kodem rabatowym ważnym 60 dni oraz moderacją opinii o sklepie.",
          "Przy zleceniu ustalam, które funkcje rzeczywiście pomagają Twoim klientom kupować, zamiast dodawać mechanizmy sprzedażowe bez konkretnego zastosowania."
        ]
      },
      {
        "id": "google-merchant-dane-strukturalne-i-ga4-wymagaja-poprawnej-k",
        "heading": "Google Merchant, dane strukturalne i GA4 wymagają poprawnej konfiguracji",
        "body": [
          "Widoczność produktów zaczyna się od informacji, które sklep udostępnia wyszukiwarkom. Sama nazwa i opis nie zawsze wystarczają do jednoznacznej identyfikacji produktu. Znaczenie mają także marka, numer SKU, EAN oraz MPN, czyli numer katalogowy producenta.",
          "Dane strukturalne przekazują informacje o produkcie w formacie zrozumiałym dla systemów przetwarzających stronę. Mogą pomagać wyszukiwarkom i systemom AI interpretować zawartość karty, ale nie gwarantują konkretnego sposobu wyświetlenia ani pozycji.",
          "Przygotowywałem poprawki danych strukturalnych obejmujące rzeczywistą nazwę produktu, markę, SKU, EAN, MPN i nawigację okruszkową, czyli ścieżkę kategorii prowadzącą do produktu. Zakres zależał od informacji dostępnych w danym sklepie.",
          "Osobnym elementem jest Google Merchant. To system, do którego można przekazać feed produktowy, czyli uporządkowany zestaw danych o ofercie sklepu. W wykonanej przeze mnie integracji:"
        ],
        "list": [
          "Kategorie sklepu były przypisywane do odpowiednich kategorii Google.",
          "Produkty bez SKU były pomijane w feedzie.",
          "Dane produktowe były przygotowywane do wykorzystania w Zakupach Google."
        ],
        "outro": [
          "Dopuszczenie produktów do wyświetlania zależy również od wymagań Google Merchant i weryfikacji oferty.",
          "Do pomiaru zachowania użytkowników mogę skonfigurować GA4 z Consent Mode v2. Wdrażałem również własny lekki baner cookies. Narzędzia wymagające zgody nie powinny rozpoczynać śledzenia przed odpowiednim wyborem użytkownika.",
          "Przy wdrożeniu przygotowuję też podstawową strukturę technicznego SEO, mapę strony i Search Console, bez obiecywania określonych pozycji w Google."
        ]
      },
      {
        "id": "obowiazki-prawne-trzeba-uwzglednic-w-dzialaniu-sklepu",
        "heading": "Obowiązki prawne trzeba uwzględnić w działaniu sklepu",
        "body": [
          "Regulamin i polityka prywatności są ważne, ale część wymogów wpływa bezpośrednio na funkcje WooCommerce. Dotyczy to między innymi prezentowania promocji, informacji o produkcie, zgód na cookies oraz procesu składania zamówienia.",
          "Przy ogłaszaniu obniżek cen trzeba uwzględnić zasady informowania o najniższej cenie z 30 dni przed obniżką. Oznacza to potrzebę odpowiedniego zapisywania historii cen i wyświetlania wymaganych informacji przy promocjach objętych tym obowiązkiem.",
          "Rozporządzenie GPSR dotyczące ogólnego bezpieczeństwa produktów wpływa z kolei na informacje prezentowane w ofertach sprzedaży na odległość. W zależności od produktu potrzebne są między innymi dane producenta, dane kontaktowe i wymagane ostrzeżenia dotyczące bezpieczeństwa.",
          "Do tego dochodzą RODO, zasady wykorzystywania cookies i informacje o prawach konsumenta, w tym o odstąpieniu od umowy. Techniczna konfiguracja sklepu musi odpowiadać przyjętym dokumentom i modelowi sprzedaży.",
          "Nie zastępuję doradcy prawnego ani podatkowego. Przy wdrożeniu konfiguruję dostępne funkcje na podstawie zasad ustalonych dla Twojej firmy i sprawdzam ich działanie w procesie zamówienia."
        ]
      },
      {
        "id": "migracja-sklepu-i-funkcje-b2b-wymagaja-zaplanowania-przeplyw",
        "heading": "Migracja sklepu i funkcje B2B wymagają zaplanowania przepływu danych",
        "body": [
          "Przeniesienie sklepu z Shopera, IdoSell lub Shopify nie powinno polegać wyłącznie na zaimportowaniu produktów. Trzeba ustalić, które dane mają zostać zachowane, czy można je wyeksportować i jak będą wyglądały w WooCommerce.",
          "Szczególnej uwagi wymagają kategorie, warianty, klienci, zamówienia oraz adresy produktów. Jeśli przebudowujesz katalog, stare adresy mogą przestać działać. Wtedy przygotowuję przekierowania 301, żeby użytkownik trafiający ze starego linku został skierowany na odpowiednią nową podstronę. Nie oznacza to gwarancji utrzymania dotychczasowej widoczności w Google.",
          "Przy przejmowaniu działającego sklepu sprawdzam motyw, wtyczki, wersje WordPressa i PHP, kopie zapasowe oraz wydajność. Dzięki temu mogę ocenić, czy lepiej rozbudować istniejące rozwiązanie, czy przebudować wybrane części.",
          "Jeśli prowadzisz sprzedaż B2B, trzeba dodatkowo ustalić zasady dla różnych grup odbiorców. WooCommerce można przygotować do obsługi indywidualnych cen, minimalnych zamówień i innych warunków handlowych. Wersje językowe dla Polski i Niemiec wpływają z kolei na strukturę produktów, kategorii i treści.",
          "Mniejszy sklep wdrażam zwykle w 6-8 tygodni. Średni projekt obejmujący B2B, wersje językowe i migrację zajmuje zwykle 10-14 tygodni. Przy zleceniu określam zakres przenoszenia danych, zasady sprzedaży i termin na podstawie briefu."
        ]
      },
      {
        "id": "po-uruchomieniu-sklep-potrzebuje-aktualizacji-testow-i-kontr",
        "heading": "Po uruchomieniu sklep potrzebuje aktualizacji, testów i kontroli wydajności",
        "body": [
          "Działający sklep przetwarza zamówienia, dlatego nie warto sprawdzać większych zmian bezpośrednio na stronie dostępnej dla klientów. Aktualizacja WordPressa, WooCommerce lub wtyczki może wpłynąć na koszyk, płatności czy integracje.",
          "Do bezpieczniejszego rozwoju przydaje się środowisko testowe, czyli oddzielna kopia sklepu. Można na niej sprawdzić nowe funkcje, zanim zostaną udostępnione kupującym. Ważne są też kopie zapasowe i możliwość odtworzenia działania strony po problematycznej zmianie.",
          "Nie każda funkcja wymaga osobnej gotowej wtyczki. W swoich projektach przygotowałem ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach. Mu-plugin to rodzaj wtyczki WordPress ładowanej automatycznie. Własny kod stosuję wtedy, gdy pozwala wykonać konkretne zadanie bez dokładania rozbudowanego rozszerzenia.",
          "Wydajność sprawdzam również przed uruchomieniem. Optymalizuję obrazy, kod, zapytania do bazy oraz konfigurację pamięci podręcznej, gdy jest potrzebna. Korzystam między innymi z LiteSpeed Cache, Cloudflare CDN i Redis object cache. Przed oddaniem sprawdzam Lighthouse na telefonie, z celem 90+ i LCP poniżej 2,5 sekundy. Jeśli istniejący sklep wymaga osobnych prac nad szybkością, możesz zlecić mi [przyspieszenie strony WordPress](/uslugi/przyspieszanie-stron-wordpress).",
          "Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek oraz szkolenie online z edycji treści. Jeśli chcesz, żebym dalej aktualizował sklep i reagował na problemy techniczne, możesz zamówić [opiekę nad stroną WordPress](/uslugi/opieka-wordpress) w miesięcznym abonamencie bez umowy na rok. Zakres dalszego utrzymania ustalam z Tobą przy przekazaniu sklepu."
        ]
      }
    ]
  },
  "tworzenie-stron-www": {
    "heading": "Tworzenie stron www dla firm. Jaką stronę zamówić i co dostaniesz w ramach współpracy?",
    "intro": [
      "Dobrze zaprojektowana strona internetowa dla firmy powinna przede wszystkim pomagać klientowi zrozumieć ofertę i wykonać kolejny krok. Dla kancelarii będzie to kontakt w sprawie konsultacji, dla firmy usługowej wysłanie zapytania, a dla sklepu zakup produktu. Dlatego zanim zacznę projektowanie stron www, pytam Cię, kto odwiedza Twoją stronę, czego szuka i co powinien na niej znaleźć. Dopiero na tej podstawie ustalam strukturę, funkcje i technologię.",
      "Tworzę strony internetowe zawodowo od 2020 roku. Zrealizowałem ponad 30 komercyjnych wdrożeń dla firm z Polski i Niemiec. Sam projektuję i piszę kod, bez przekazywania prac kolejnym wykonawcom. Pracuję z Wrocławia, a cały projekt prowadzę zdalnie. Po kolejnych etapach dostajesz link do wersji testowej, więc widzisz, za co płacisz i jak rozwija się Twoja strona, jeszcze zanim trafi do klientów."
    ],
    "sections": [
      {
        "id": "rodzaj-strony-dobieram-do-tego-jak-dziala-twoja-firma",
        "heading": "Rodzaj strony dobieram do tego, jak działa Twoja firma",
        "body": [
          "Jeśli prowadzisz lokalną działalność i potrzebujesz przede wszystkim przedstawić usługi oraz dane kontaktowe, przygotuję prostą wizytówkę. Jeśli masz kilka grup klientów, rozbudowaną ofertę lub regularnie publikujesz poradniki, lepiej sprawdzi się strona firmowa z osobnymi podstronami. Sklep wymaga już obsługi produktów, zamówień i płatności, natomiast aplikacja internetowa może potrzebować konfiguratora, panelu użytkownika lub własnych procesów.",
          "Poniżej znajdziesz typowe terminy, które stosuję przy planowaniu projektów. Ostateczny harmonogram ustalam po briefie."
        ],
        "table": {
          "caption": "Rodzaj strony dobieram do tego, jak działa Twoja firma",
          "head": [
            "Rodzaj strony",
            "Dla kogo",
            "Technologia",
            "Typowy termin"
          ],
          "rows": [
            [
              "---",
              "---",
              "---",
              "---"
            ],
            [
              "Wizytówka internetowa",
              "Mała firma, jednoosobowa działalność, lokalna usługa",
              "WordPress",
              "2-3 tygodnie"
            ],
            [
              "Strona firmowa lub usługowa",
              "Firma z kilkoma usługami, ofertą i treściami do edycji",
              "WordPress + ACF",
              "4-6 tygodni"
            ],
            [
              "Mniejszy sklep internetowy",
              "Firma rozpoczynająca lub rozwijająca sprzedaż online",
              "WooCommerce",
              "6-8 tygodni"
            ],
            [
              "Aplikacja internetowa lub MVP",
              "Firma potrzebująca konfiguratora, panelu albo własnych funkcji",
              "Next.js",
              "6-12 tygodni"
            ]
          ]
        },
        "outro": [
          "Strona usługowa może również zawierać blog, bazę wiedzy, katalog realizacji czy podstrony przygotowane pod kampanie reklamowe. Nie oznacza to konieczności budowania osobnych serwisów. Łączę te funkcje w jednej, logicznie uporządkowanej witrynie.",
          "Przy wycenie pytam, jakie zadania strona ma realizować od dnia publikacji, a które funkcje chcesz dodać później. Dzięki temu ustalam zakres konkretnego wdrożenia, zamiast przygotowywać listę elementów, z których nie będziesz korzystać."
        ]
      },
      {
        "id": "wordpress-woocommerce-czy-next-js-wybieram-wedlug-funkcji-ni",
        "heading": "WordPress, WooCommerce czy Next.js wybieram według funkcji, nie popularności",
        "body": [
          "Do klasycznej strony firmowej najczęściej wykorzystuję WordPress. Jeśli chcesz samodzielnie zmieniać opisy usług, zdjęcia, wpisy czy sekcje oferty, przygotowuję własny motyw z polami ACF. W panelu widzisz pola odpowiadające zaprojektowanym sekcjom, zamiast budować układ z przypadkowych elementów.",
          "W nowych projektach nie używam kreatorów takich jak Elementor, Divi czy Avada. Kod piszę sam, a potrzebne funkcje przygotowuję również jako własne wtyczki. Dotychczas stworzyłem ponad 40 wtyczek i mu-pluginów WordPress działających w 9 serwisach. Pozwala mi to dopasować zachowanie strony do konkretnego zadania, bez dokładania osobnego dodatku do każdej niewielkiej funkcji.",
          "Kiedy projekt obejmuje sprzedaż internetową, wybieram WooCommerce. To rozwiązanie do obsługi produktów, koszyka, zamówień i integracji sprzedażowych. Sposób prezentacji katalogu, potrzebne płatności oraz zakres integracji ustalam przed rozpoczęciem prac.",
          "Next.js wykorzystuję przy bardziej rozbudowanych projektach. Jeśli klient ma sam skonfigurować produkt, zobaczyć wynik obliczeń, zalogować się do panelu albo korzystać z danych pochodzących z zewnętrznych systemów, przygotowuję odpowiednią logikę aplikacji. Do samodzielnej edycji treści podłączam system Sanity lub Strapi.",
          "Nie musisz znać różnicy między frameworkiem a systemem zarządzania treścią. Przy pierwszej rozmowie wystarczy, że pokażesz mi, co użytkownik ma zrobić na stronie i które informacje będziesz aktualizować samodzielnie. Na tej podstawie zaproponuję technologię oraz opiszę, jak będzie wyglądała codzienna obsługa serwisu."
        ]
      },
      {
        "id": "gotowe-realizacje-pokazuja-jakie-funkcje-potrafie-wdrozyc",
        "heading": "Gotowe realizacje pokazują, jakie funkcje potrafię wdrożyć",
        "body": [
          "Przy wyborze wykonawcy warto zobaczyć nie tylko wygląd jego projektów, ale również to, jakie problemy zostały w nich rozwiązane. Strona z rozbudowaną bazą danych wymaga innego podejścia niż witryna kancelarii czy konfigurator dla firmy usługowej.",
          "W moich realizacjach znajdziesz takie przykłady:"
        ],
        "list": [
          "[Kantorymapa](/projekty/kantorymapa) to mój serwis w Next.js obejmujący 1900 kantorów w 140 miastach, z codziennie aktualizowanymi kursami i czasem ładowania poniżej sekundy.",
          "Mebloweporady.pl to serwis WordPress z ponad 400 poradnikami, własnymi wtyczkami, stroną główną składaną przez dedykowaną wtyczkę i siedmioma kalkulatorami.",
          "Galabau Darius to projekt Next.js dla firmy z Niemiec, w którym wdrożyłem konfigurator wyceny ogrodzeń na żywo oraz panel administracyjny.",
          "Kancelaria Maria Piontek to strona kancelarii zrealizowana na WordPressie, przeznaczona do prezentacji działalności i oferty."
        ],
        "outro": [
          "Każda z tych realizacji wymagała innego zakresu prac. W Kantorymapie ważna była obsługa dużej liczby lokalizacji i danych, w Mebloweporadach publikowanie treści oraz własne narzędzia, a w Galabau Darius proces wyceny wykonywany bezpośrednio przez użytkownika.",
          "Pozostałe wdrożenia znajdziesz na stronie [pełna lista projektów](/projekty). Jeśli planujesz podobny serwis, podczas rozmowy pokażę Ci, które rozwiązania z moich realizacji odpowiadają Twoim potrzebom i jaki zakres trzeba przewidzieć w projekcie."
        ]
      },
      {
        "id": "cene-ustalam-na-podstawie-liczby-unikalnych-widokow-i-integr",
        "heading": "Cenę ustalam na podstawie liczby unikalnych widoków i integracji",
        "body": [
          "Sama liczba podstron nie mówi jeszcze wiele o nakładzie pracy. Serwis z kilkunastoma usługami korzystającymi z jednego układu może być prostszy do przygotowania niż witryna z kilkoma podstronami, z których każda ma inne funkcje i indywidualny projekt.",
          "Najważniejsze są dla mnie dwa elementy: liczba unikalnych szablonów podstron oraz zakres integracji. Osobnym szablonem może być strona główna, opis usługi, karta produktu, wpis poradnikowy czy widok katalogu. Każdy taki układ trzeba zaprojektować, zakodować i sprawdzić na różnych urządzeniach.",
          "Integracje również wymagają osobnego rozpoznania. Zwykły formularz kontaktowy to inne zadanie niż konfigurator, system rezerwacji, płatności online albo połączenie z zewnętrzną bazą danych. Przy bardziej złożonych funkcjach ustalam, jakie informacje mają być przesyłane, gdzie będą przechowywane i jak użytkownik zobaczy wynik działania.",
          "Na zakres wpływają także materiały, które już posiadasz. Jeśli masz gotowe opisy usług, zdjęcia i logo, wykorzystuję je podczas projektowania. Jeśli treści dopiero powstaną, ustalamy wcześniej ich strukturę i sposób przygotowania. Przy wersjach językowych sprawdzam, czy potrzebne będą osobne układy albo dodatkowe funkcje.",
          "Po wdrożeniu dochodzą koszty domeny, hostingu oraz ewentualnego utrzymania technicznego. Uwzględniam je podczas wyboru rozwiązania, żebyś wiedział, czego strona będzie potrzebowała po uruchomieniu.",
          "Przy wycenie proszę Cię o opis działalności, listę potrzebnych podstron i funkcji oraz informację, czy masz już działającą witrynę. Po krótkiej rozmowie i briefie przygotowuję konkretny zakres prac wraz z terminem realizacji."
        ]
      },
      {
        "id": "szybkosc-google-i-wyszukiwarki-ai-uwzgledniam-juz-podczas-bu",
        "heading": "Szybkość, Google i wyszukiwarki AI uwzględniam już podczas budowy",
        "body": [
          "Szybkość strony ma znaczenie szczególnie na telefonie, gdzie użytkownik często przegląda ofertę przy słabszym połączeniu. Dlatego przed oddaniem projektu wykonuję testy Lighthouse z celem wyniku 90+ na urządzeniach mobilnych. Sprawdzam również LCP, czyli czas pojawienia się największego widocznego elementu strony, dążąc do wartości poniżej 2,5 sekundy. Przygotowanie techniczne pod wyszukiwarki obejmuje między innymi:"
        ],
        "list": [
          "logiczną hierarchię nagłówków i osobne adresy dla istotnych tematów,",
          "dane strukturalne opisujące zawartość i rodzaj strony,",
          "mapę strony oraz konfigurację Google Search Console,",
          "czytelne opisy usług, pytania i odpowiedzi w FAQ,",
          "kod i strukturę umożliwiające wyszukiwarkom odczytywanie treści."
        ],
        "outro": [
          "Przygotowuję również strony z myślą o wyszukiwarkach AI. Nie polega to na instalacji dodatku, który zapewni cytowanie firmy w odpowiedziach. Liczy się jednoznaczne przedstawienie usług, odbiorców, lokalizacji i informacji o działalności. System analizujący stronę powinien rozumieć, czym zajmuje się Twoja firma, bez konieczności domyślania się tego z ogólnych sloganów.",
          "Jeśli wdrażam Google Analytics 4, konfiguruję go tak, żeby uruchamiał się dopiero po uzyskaniu zgody na cookies. Dzięki temu pomiar zachowania użytkowników jest częścią przemyślanego wdrożenia, a nie przypadkowym skryptem dodanym do strony.",
          "Podczas ustalania zakresu pytam Cię, na jakie usługi chcesz pozyskiwać zapytania i jakich informacji szukają Twoi klienci. Na tej podstawie planuję strukturę podstron, treści i elementy techniczne, bez obiecywania konkretnych pozycji w Google lub obecności w odpowiedziach AI."
        ]
      },
      {
        "id": "bezpieczenstwo-i-dostepnosc-sprawdzam-przed-publikacja",
        "heading": "Bezpieczeństwo i dostępność sprawdzam przed publikacją",
        "body": [
          "Przed uruchomieniem konfiguruję certyfikat SSL, sprawdzam działanie formularzy, nawigację oraz zachowanie strony na telefonach i komputerach. W projektach opartych na WordPressie ważne są również aktualizacje systemu, motywu i wtyczek oraz odpowiednio przygotowane kopie zapasowe.",
          "Przy projektowaniu dbam o czytelność tekstów, kontrast, logiczną strukturę nagłówków i możliwość korzystania ze strony za pomocą klawiatury. Sprawdzam też, czy elementy interaktywne mają zrozumiałe etykiety, a obrazy wymagające opisu otrzymują odpowiednie teksty alternatywne.",
          "Dla firm, które potrzebują dokładniejszej oceny serwisu, wykonuję osobny [audyt dostępności WCAG](/audyt-wcag). Analizuję wtedy wskazane wymagania dostępności i wskazuję problemy wymagające poprawy. Samo stosowanie dobrych praktyk przy projektowaniu nie jest równoznaczne z potwierdzeniem zgodności prawnej całego serwisu.",
          "Jeśli masz już stronę i planujesz jej przeniesienie, uwzględniam również dotychczasowe adresy. Przygotowuję przekierowania 301, które prowadzą ze starych adresów na odpowiadające im nowe podstrony. Planuję migrację tak, żeby przerwa była możliwie krótka, choć zmiana DNS może spowodować czasową niedostępność. Nie gwarantuję zachowania dotychczasowych pozycji w Google.",
          "Przy zamówieniu ustalam z Tobą wymagania dotyczące bezpieczeństwa, dostępności i ewentualnego przeniesienia obecnej strony, zanim rozpocznę kodowanie."
        ]
      },
      {
        "id": "cala-wspolprace-prowadze-osobiscie-od-rozmowy-do-szkolenia",
        "heading": "Całą współpracę prowadzę osobiście, od rozmowy do szkolenia",
        "body": [
          "Pracuję zdalnie z firmami z Wrocławia, innych części Polski i z Niemiec. Pierwszą rozmowę organizuję online. Omawiamy działalność, ofertę, materiały, zakres strony oraz sposób, w jaki klienci mają z niej korzystać.",
          "Następnie przygotowuję makiety w Figmie. Masz dwie tury poprawek, podczas których ustalamy wygląd, układ i sposób prezentacji treści. Po zaakceptowaniu projektu przechodzę do kodowania, a po kolejnych etapach otrzymujesz link do wersji testowej. Nie musisz niczego instalować. Otwierasz stronę w przeglądarce i sprawdzasz konkretne widoki oraz funkcje.",
          "Przed publikacją przeprowadzam testy, konfiguruję potrzebne elementy techniczne i wdrażam serwis. Później pokazuję Ci online, jak samodzielnie aktualizować treści. Jeśli projekt obejmuje własne sekcje WordPressa, szkolenie dotyczy dokładnie tych pól i funkcji, z których będziesz korzystać.",
          "Po uruchomieniu otrzymujesz 60 dni gwarancji i bezpłatnych poprawek. Dalszą opiekę techniczną możesz zamówić w miesięcznym abonamencie bez umowy na rok. Jeśli wolisz samodzielnie zajmować się treścią strony, po szkoleniu masz przygotowane do tego narzędzia.",
          "Jeżeli chcesz zlecić mi stworzenie nowej strony albo przebudowę obecnej, opisz firmę, najważniejsze usługi i funkcje, których potrzebujesz. Możesz skorzystać z formularza na stronie kontaktowej lub napisać na marcin.siwonia.firma@gmail.com. W ciągu 24 godzin roboczych wrócę do Ciebie z pierwszą oceną projektu."
        ]
      }
    ]
  },
  "aplikacje-nextjs": {
    "heading": "Strona w Next.js: kiedy warto ją wybrać i co zyskuje Twoja firma",
    "intro": [
      "Strona w Next.js ma sens wtedy, gdy potrzebujesz czegoś więcej niż miejsca na ofertę i dane kontaktowe. Może to być szybki serwis z setkami podstron, konfigurator liczący wycenę na żywo albo aplikacja, w której klient loguje się, zapisuje dane i korzysta z własnego panelu. Nie musisz od razu budować rozbudowanego systemu. Mogę zacząć od strony firmowej, a kolejne funkcje dodawać wtedy, gdy będą potrzebne.",
      "Next.js wykorzystuję zarówno w projektach klientów, jak i we własnych serwisach, w tym na marcinsiwonia.pl. Znam też WordPressa, dlatego nie zakładam z góry, że zmiana technologii zawsze będzie dobrym rozwiązaniem. Jeśli obecna strona zwolniła pod ciężarem wtyczek albo próbujesz zbudować funkcję, do której WordPress nie został zaprojektowany, sprawdzę, czy Next.js rozwiąże ten problem. Poniżej pokazuję, jak przekłada się to na działanie strony, edycję treści, widoczność w Google i koszty rozwoju."
    ],
    "sections": [
      {
        "id": "co-firma-zyskuje-na-stronie-zbudowanej-w-next-js",
        "heading": "Co firma zyskuje na stronie zbudowanej w Next.js",
        "body": [
          "Klienta odwiedzającego Twoją stronę nie interesuje, w jakiej technologii została napisana. Chce szybko znaleźć ofertę, sprawdzić szczegóły i wykonać konkretną czynność. Jeśli musi czekać na załadowanie kolejnych elementów albo formularz nie działa poprawnie na telefonie, nazwa użytego frameworka niczego nie zmienia.",
          "Next.js daje mi kontrolę nad tym, jakie treści przygotowuję wcześniej, jakie pobieram z serwera i ile kodu musi uruchomić przeglądarka użytkownika. Dzięki temu mogę dopasować sposób działania strony do jej rzeczywistych zadań.",
          "Dla firmy najważniejsze są cztery korzyści:"
        ],
        "list": [
          "Szybkość działania. Mogę ograniczyć niepotrzebne skrypty i przygotować treści tak, aby użytkownik nie czekał na elementy, których w danym momencie nie potrzebuje.",
          "Widoczność w wyszukiwarce. Przygotowuję strony z czytelnymi adresami, metadanymi, nagłówkami i danymi strukturalnymi. Google może odczytać ważne treści bez konieczności wykonywania całej logiki w przeglądarce.",
          "Własne funkcje. Kalkulator, logowanie, wyszukiwarka oparta na bazie danych czy integracja z innym systemem mogą działać w ramach jednej aplikacji.",
          "Możliwość rozbudowy. Możesz zacząć od kilku podstron, a później dodać katalog produktów, lokalizacje, panel klienta lub kolejne usługi."
        ],
        "outro": [
          "Dobrym przykładem jest mój produkt Kantorymapa. Obejmuje 1900 kantorów w 140 miastach, a kursy NBP są aktualizowane codziennie. Strony miast powstają na podstawie danych, zamiast być przygotowywane ręcznie. Cały serwis ładuje się poniżej sekundy.",
          "Nie oznacza to, że każda witryna Next.js osiągnie taki wynik. Dużo zależy od zdjęć, zewnętrznych usług i funkcji. Dlatego przy wdrożeniu sprawdzam Lighthouse na telefonie, celując w wynik 90+ oraz LCP poniżej 2,5 sekundy, czyli czas wyświetlenia największego widocznego elementu strony."
        ]
      },
      {
        "id": "ssr-ssg-i-isr-okreslaja-kiedy-powstaje-gotowa-podstrona",
        "heading": "SSR, SSG i ISR określają, kiedy powstaje gotowa podstrona",
        "body": [
          "Skróty SSR, SSG i ISR opisują różne sposoby przygotowywania treści strony. Nie musisz ich znać, żeby zlecić projekt, ale warto rozumieć, dlaczego sposób wyświetlania danych wpływa na szybkość działania i aktualność informacji.",
          "Wyobraź sobie serwis zawierający setki lokalizacji. Adresy, opisy i podstawowe informacje nie zmieniają się co chwilę. Nie ma więc powodu, żeby serwer tworzył każdą taką podstronę od początku przy każdym wejściu użytkownika. Z drugiej strony panel klienta powinien wyświetlać informacje dotyczące konkretnego konta, a nie wspólną wersję przygotowaną wcześniej.",
          "W Next.js mogę rozwiązać te sytuacje na trzy sposoby.",
          "SSG, czyli generowanie statyczne, polega na przygotowaniu gotowej podstrony podczas budowania serwisu. Kiedy użytkownik ją otwiera, otrzymuje wcześniej wygenerowaną treść. Sprawdza się to przy ofertach, lokalizacjach i informacjach, które nie wymagają ciągłego odświeżania.",
          "SSR, czyli renderowanie po stronie serwera, przygotowuje odpowiedź w momencie wejścia użytkownika. Stosuję takie podejście tam, gdzie treść zależy od aktualnych informacji, uprawnień albo danych konkretnej osoby.",
          "ISR, czyli przyrostowe odświeżanie stron, pozwala korzystać z wcześniej przygotowanej wersji i aktualizować ją według ustalonych zasad. Nie trzeba za każdym razem przebudowywać całego serwisu, żeby odświeżyć wybrane informacje.",
          "Takie rozwiązania przydają się również przy programmatic SEO, czyli automatycznym tworzeniu wartościowych podstron z uporządkowanych danych.",
          "W projekcie Ceny Notarialne wykorzystuję Next.js do prezentowania cen transakcyjnych z Rejestru Cen Nieruchomości, map MapLibre oraz tysięcy podstron lokalizacji. Każda lokalizacja może mieć własny adres i treści powiązane z danymi, bez ręcznego budowania kolejnych stron.",
          "Przy Twoim wdrożeniu dobieram sposób generowania osobno do rodzaju treści, częstotliwości ich zmian i potrzeb użytkowników."
        ]
      },
      {
        "id": "wordpress-czy-next-js-kiedy-ktory-wybrac",
        "heading": "WordPress czy Next.js: kiedy który wybrać",
        "body": [
          "Jeśli Twoja strona na WordPressie działa wolno, pierwszym odruchem może być chęć przepisania jej w innej technologii. Nie zawsze jest to potrzebne. Przyczyną problemów mogą być ciężki motyw, niepotrzebne wtyczki, źle przygotowane zdjęcia albo konfiguracja hostingu.",
          "WordPress jest gotowym systemem do publikowania i edytowania treści. Next.js daje mi narzędzia do zbudowania strony lub aplikacji według indywidualnych wymagań. To różne punkty wyjścia, dlatego wybór powinien zależeć od tego, co chcesz osiągnąć."
        ],
        "table": {
          "caption": "WordPress czy Next.js: kiedy który wybrać",
          "head": [
            "Potrzeba firmy",
            "WordPress",
            "Next.js"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Prosta strona firmowa",
              "Dobry wybór, szczególnie gdy sam edytujesz treści",
              "Możliwy, ale nie zawsze uzasadniony"
            ],
            [
              "Edycja tekstów i zdjęć",
              "Gotowy panel administracyjny",
              "Wymaga podłączenia CMS lub przygotowania panelu"
            ],
            [
              "Konfigurator i kalkulator",
              "Możliwy przez wtyczki lub własny kod",
              "Pozwala zbudować logikę pod konkretny proces"
            ],
            [
              "Logowanie i panel klienta",
              "Dostępne rozwiązania, zależnie od wymagań",
              "Możliwość przygotowania własnych kont i uprawnień"
            ],
            [
              "Setki stron z danych",
              "Możliwe po odpowiednim przygotowaniu",
              "Duża kontrola nad automatycznym generowaniem podstron"
            ],
            [
              "Szybkość działania",
              "Zależy od motywu, wtyczek i serwera",
              "Duża kontrola nad kodem i dostarczaniem treści"
            ],
            [
              "Utrzymanie i rozwój",
              "Aktualizacje systemu, motywu i wtyczek",
              "Utrzymanie aplikacji, zależności i potrzebnych usług"
            ]
          ]
        },
        "outro": [
          "Jeśli potrzebujesz zwykłej wizytówki, strony usługowej i wygodnej edycji tekstów, mogę polecić WordPress. Nie ma sensu budować indywidualnej aplikacji, jeśli nie wykorzystasz jej możliwości.",
          "Next.js zaczyna mieć większy sens, gdy standardowe funkcje przestają wystarczać. Przykładowo Twoi klienci mają samodzielnie konfigurować produkt, sprawdzać indywidualną cenę, logować się albo korzystać z informacji pobieranych z kilku systemów.",
          "Istnieje też rozwiązanie pośrednie. Możesz zachować WordPressa jako panel redakcyjny, a publiczną stronę zbudować w Next.js. To jednak osobny model wdrożenia, który rozpatruję wtedy, gdy zachowanie dotychczasowego sposobu edycji treści jest ważnym wymaganiem.",
          "Przed rozpoczęciem zlecenia sprawdzam więc obecny serwis, potrzebne funkcje i plany rozwoju, a dopiero potem proponuję technologię."
        ]
      },
      {
        "id": "tresci-w-next-js-mozesz-edytowac-bez-zagladania-do-kodu",
        "heading": "Treści w Next.js możesz edytować bez zaglądania do kodu",
        "body": [
          "Jedna z częstszych obaw przy zmianie WordPressa na Next.js dotyczy edycji treści. Skoro nie ma domyślnego panelu WordPressa, czy każda zmiana numeru telefonu, opisu usługi albo zdjęcia będzie wymagała kontaktu z programistą?",
          "Nie musi tak być. Do Next.js mogę podłączyć CMS, czyli system zarządzania treścią. Najczęściej rozważam Sanity lub Strapi. Przygotowuję w nim odpowiednie pola i uprawnienia, abyś mógł zmieniać wybrane informacje bez modyfikowania kodu.",
          "Przykładowo w panelu możesz zarządzać:"
        ],
        "list": [
          "opisami usług, nagłówkami, zdjęciami i treściami podstron,",
          "wpisami poradnikowymi, realizacjami oraz uporządkowanymi danymi wykorzystywanymi przez serwis."
        ],
        "outro": [
          "Wygląd strony pozostaje przygotowany przeze mnie, a CMS dostarcza treści do odpowiednich miejsc. Dzięki temu edycja opisu nie wymaga przebudowy całego układu.",
          "Ważne jest jednak rozróżnienie między treścią a funkcją. Zmiana opisu produktu może odbywać się w panelu. Dodanie nowego sposobu obliczania ceny, integracji z systemem płatności albo kolejnego poziomu uprawnień wymaga już zmian programistycznych.",
          "Jeżeli Twój zespół dobrze zna WordPressa, mogę też wykorzystać go wyłącznie do zarządzania treścią. Publiczna część strony działa wtedy w Next.js, ale redaktor nadal pracuje w znanym środowisku.",
          "Przy projektowaniu ustalam z Tobą, które elementy powinny być edytowalne, a po wdrożeniu przeprowadzam szkolenie online z obsługi panelu."
        ]
      },
      {
        "id": "migracje-do-next-js-trzeba-zaplanowac-takze-pod-katem-google",
        "heading": "Migrację do Next.js trzeba zaplanować także pod kątem Google",
        "body": [
          "Przeniesienie strony z WordPressa do Next.js to nie tylko przygotowanie nowego wyglądu i skopiowanie tekstów. Jeśli obecny serwis ma podstrony widoczne w Google, linki prowadzące z innych witryn lub regularnie odwiedzane artykuły, trzeba zadbać o ich dalszą dostępność.",
          "Zaczynam od sprawdzenia istniejących adresów. Jeśli adres podstrony nie musi się zmienić, zwykle warto go zachować. Gdy nowa struktura wymaga innego URL-a, przygotowuję przekierowanie 301 ze starego adresu do właściwego odpowiednika.",
          "Nie przekierowuję automatycznie wszystkich usuniętych adresów na stronę główną. Użytkownik, który szuka konkretnej usługi lub poradnika, powinien trafić na odpowiadającą mu treść.",
          "Podczas migracji uwzględniam też tytuły i opisy meta, strukturę nagłówków, dane strukturalne oraz mapę strony. Po uruchomieniu sprawdzam Google Search Console, aby kontrolować indeksowanie i wychwycić problemy z dostępnością nowych adresów.",
          "Jeżeli wdrażam Google Analytics 4, konfiguruję go tak, aby zbieranie danych wymagających zgody rozpoczynało się dopiero po jej udzieleniu w mechanizmie cookies.",
          "Osobną kwestią jest moment przełączenia strony. Przy zmianie ustawień DNS może wystąpić krótka niedostępność, dlatego planuję publikację tak, aby ograniczyć przerwę w działaniu serwisu.",
          "Cały proces, od sprawdzenia starych adresów po kontrolę po wdrożeniu, opisuję szerzej w poradniku [migracja WordPressa na Next.js](/blog/migracja-wordpress-na-nextjs).",
          "Nie mogę obiecać, że po zmianie technologii wszystkie pozycje w Google pozostaną identyczne. Mogę natomiast przygotować migrację tak, aby zachować ważne adresy, treści i techniczne elementy potrzebne wyszukiwarce."
        ]
      },
      {
        "id": "strona-firmowa-i-aplikacja-moga-uzywac-tej-samej-technologii",
        "heading": "Strona firmowa i aplikacja mogą używać tej samej technologii, ale mają inne zadania",
        "body": [
          "Strona firmowa przede wszystkim dostarcza informacji. Pokazuje ofertę, realizacje, zakres usług i dane kontaktowe. Nawet jeśli zawiera tysiące podstron, użytkownik głównie przegląda przygotowane treści.",
          "Aplikacja internetowa pozwala mu wykonywać dodatkowe działania. Może obliczyć cenę, zapisać informacje, zalogować się do konta, opłacić usługę albo zarządzać swoimi danymi.",
          "Przykładem takiego połączenia jest Galabau Darius, projekt zrealizowany przeze mnie w 2026 roku dla firmy z Niemiec. Serwis zawiera galerię realizacji i konfigurator wyceny ogrodzeń, który przelicza cenę na żywo. Firma korzysta również z panelu administracyjnego zabezpieczonego logowaniem Clerk.",
          "Do pracy z danymi wykorzystałem Prisma, a aplikację wdrożyłem na Vercel. Przygotowałem też dane strukturalne LocalBusiness oraz strony Impressum i Datenschutz wymagane w kontekście niemieckiej witryny firmowej.",
          "Podobne mechanizmy mogę zastosować w innych procesach biznesowych. Przy logowaniu korzystam z Clerk lub NextAuth, dane mogę przechowywać w PostgreSQL z Prisma albo Drizzle, a płatności obsłużyć przez Stripe. Konkretne narzędzia wybieram dopiero po ustaleniu funkcji.",
          "To właśnie liczba funkcji z własną logiką, a nie liczba podstron, ma zwykle największy wpływ na zakres i koszt takiej realizacji. Serwis z tysiącami stron generowanych z danych może wymagać mniej pracy nad logiką użytkownika niż niewielka aplikacja z logowaniem, płatnościami i panelem administracyjnym.",
          "Typową aplikację lub pierwszą wersję produktu, czyli MVP, realizuję zwykle w ciągu 6-12 tygodni. Termin zależy od funkcji, integracji i stopnia przygotowania danych.",
          "Przy Twoim projekcie najpierw określę, co użytkownik musi móc zrobić w pierwszej wersji. Dopiero na tej podstawie zaprojektuję aplikację Next.js, dobiorę bazę danych, sposób logowania i hosting oraz przygotuję zakres prac z harmonogramem."
        ]
      }
    ]
  },
  "wdrozenia-ai": {
    "heading": "Wdrożenie AI w małej firmie: od wyboru procesu do pomiaru wyniku",
    "intro": [
      "Masz w firmie zadania, które codziennie wyglądają podobnie? Ktoś przegląda maile, przepisuje dane z dokumentów, szuka odpowiedzi w instrukcjach albo przygotowuje kolejne opisy produktów. Część tej pracy można uprościć, ale wdrożenie AI w małej firmie nie powinno zaczynać się od kupienia dostępu do kolejnego narzędzia. Najpierw trzeba znaleźć zadanie, w którym model rzeczywiście pomoże, i ustalić, jak sprawdzić jego wynik.",
      "Nie proponuję budowania od razu systemu obsługującego całą firmę. Wolę wybrać jeden proces, przygotować mały prototyp i przetestować go na prawdziwych przykładach. Jeżeli AI popełnia zbyt wiele błędów, wymaga ciągłego poprawiania albo nie skraca pracy, nie ma powodu rozwijać rozwiązania tylko dlatego, że wykorzystuje nową technologię."
    ],
    "sections": [
      {
        "id": "ktore-zadania-w-malej-firmie-warto-powierzyc-ai",
        "heading": "Które zadania w małej firmie warto powierzyć AI?",
        "body": [
          "Najlepszym punktem startu są powtarzalne zadania, w których pracownik musi przeczytać tekst, zrozumieć jego znaczenie i przygotować określony wynik. To właśnie odróżnia je od prostych czynności, które można zautomatyzować bez modelu językowego.",
          "Wyobraź sobie skrzynkę mailową, na którą przychodzą pytania o ofertę, reklamacje i prośby o dokumenty. Zamiast ręcznie sortować każdą wiadomość, można wykorzystać AI do rozpoznania tematu i przygotowania propozycji odpowiedzi. Pracownik nadal decyduje, co wysłać klientowi.",
          "Podobnie wygląda praca z dokumentami. Model może odczytać treść, znaleźć potrzebne informacje i uporządkować je w określonej formie. Nie oznacza to jednak, że powinien samodzielnie podejmować decyzje na podstawie tych danych."
        ],
        "table": {
          "caption": "Które zadania w małej firmie warto powierzyć AI?",
          "head": [
            "Zadanie",
            "Czy AI ma sens?",
            "Gdzie musi sprawdzić człowiek?"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Odpowiadanie na pytania z dokumentów",
              "Tak, gdy odpowiedzi znajdują się w wielu plikach",
              "Zgodność odpowiedzi z dokumentem źródłowym"
            ],
            [
              "Klasyfikowanie maili",
              "Tak, gdy tematy wiadomości są zróżnicowane",
              "Nietypowe wiadomości i błędnie rozpoznane sprawy"
            ],
            [
              "Przygotowywanie szkiców odpowiedzi",
              "Tak, gdy pytania się powtarzają",
              "Treść przed wysłaniem do klienta"
            ],
            [
              "Wyciąganie danych z dokumentów",
              "Tak, gdy dokumenty mają różną strukturę",
              "Brakujące, niejednoznaczne lub istotne dane"
            ],
            [
              "Tworzenie opisów produktów",
              "Tak, gdy dostępne są sprawdzone informacje",
              "Fakty, parametry i treść przed publikacją"
            ],
            [
              "Przepisywanie wartości między polami",
              "Zwykle nie, wystarczy zwykła automatyzacja",
              "Poprawność reguł i mapowania pól"
            ],
            [
              "Podejmowanie decyzji o dużych konsekwencjach",
              "Nie jako samodzielny decydent",
              "Ostateczna decyzja należy do człowieka"
            ]
          ]
        },
        "outro": [
          "Ważna jest również częstotliwość zadania. Jeśli podobna czynność pojawia się sporadycznie, budowanie osobnego systemu może być nieuzasadnione. Czasami wystarczy narzędzie, z którego pracownik korzysta ręcznie.",
          "Przy wdrożeniu analizuję więc nie tylko to, co AI potrafi zrobić, ale też jak często zadanie występuje, ile trwa obecnie i jaki błąd można zaakceptować."
        ]
      },
      {
        "id": "jak-przechodze-od-pomyslu-do-dzialajacego-rozwiazania",
        "heading": "Jak przechodzę od pomysłu do działającego rozwiązania?",
        "body": [
          "Zaczynam od poznania obecnego sposobu pracy. Nie potrzebujesz do tego gotowej dokumentacji technicznej. Wystarczy, że pokażesz mi przykładowe zadania i opowiesz, jak pracownik je wykonuje.",
          "Sprawdzam, skąd przychodzą informacje, co trzeba z nimi zrobić, w których momentach pojawia się decyzja i jaki powinien być końcowy rezultat. Pytam też o wyjątki. To ważne, ponieważ system może dobrze obsługiwać typowe przypadki, a mylić się przy niekompletnym dokumencie czy nietypowej wiadomości.",
          "Cały proces dzielę na kilka etapów:"
        ],
        "list": [
          "Rozpoznanie zadania: ustalam obecny przebieg pracy, wykorzystywane dane i oczekiwany wynik.",
          "Przygotowanie przykładów: zbieram rzeczywiste przypadki, na których będzie można sprawdzić poprawność działania.",
          "Budowa prototypu: tworzę ograniczoną wersję rozwiązania dla jednego zadania.",
          "Test i pomiar: porównuję wyniki AI z rezultatami uzyskiwanymi dotychczas.",
          "Poprawa procesu: zmieniam instrukcje dla modelu, sposób dostarczania danych i zasady kontroli.",
          "Decyzja o wdrożeniu: ustalam, czy warto podłączyć kolejne źródła danych i udostępnić rozwiązanie użytkownikom."
        ],
        "outro": [
          "Do budowy wykorzystuję między innymi API OpenAI i Anthropic. API to sposób, w jaki przygotowana aplikacja komunikuje się z modelem. Dzięki temu można połączyć AI z firmowymi dokumentami, formularzami czy innymi systemami, a także kontrolować zakres przekazywanych informacji.",
          "Jeśli proces wymaga osobnego panelu, kont użytkowników lub bardziej rozbudowanej obsługi danych, mogę przygotować rozwiązanie w formie [aplikacji Next.js](/uslugi/aplikacje-nextjs).",
          "Nie ustalam z góry jednego terminu dla wszystkich projektów. Innej pracy wymaga narzędzie korzystające z uporządkowanych dokumentów, a innej system połączony z kilkoma źródłami danych.",
          "Dopiero po rozpoznaniu przygotowuję zakres, wycenę i termin. Samo wdrożenie rozszerzam po pozytywnym teście, a nie przed sprawdzeniem podstawowego pomysłu."
        ]
      },
      {
        "id": "jak-dziala-asystent-ai-na-dokumentach-firmy",
        "heading": "Jak działa asystent AI na dokumentach firmy?",
        "body": [
          "Załóżmy, że pracownik regularnie szuka informacji w instrukcjach, regulaminach, procedurach lub materiałach produktowych. Dokumenty istnieją, ale znalezienie właściwego fragmentu zajmuje czas. W takim przypadku można zbudować asystenta AI na dokumentach firmy.",
          "Wykorzystuję do tego rozwiązanie nazywane RAG. Polega ono na tym, że system najpierw wyszukuje fragmenty dokumentów związane z pytaniem, a dopiero później przekazuje je modelowi, który przygotowuje odpowiedź.",
          "Zamiast odpowiadać wyłącznie na podstawie informacji zapamiętanych podczas treningu, model dostaje treść z Twoich materiałów. Odpowiedź może też zawierać wskazanie dokumentu, z którego pochodzi informacja.",
          "Przykładowo pracownik pyta o warunki określone w wewnętrznej procedurze. System znajduje odpowiedni fragment, przygotowuje odpowiedź i wskazuje źródło. Dzięki temu pracownik może zweryfikować ją bez ponownego przeszukiwania całego zbioru plików.",
          "RAG nie gwarantuje jednak poprawnej odpowiedzi. Model nadal może źle zinterpretować fragment, pominąć wyjątek albo połączyć informacje, które nie powinny być łączone.",
          "Znaczenie ma również jakość dokumentów. Jeśli w bazie znajdują się sprzeczne instrukcje, stare wersje plików i nieaktualne informacje, samo podłączenie AI nie rozwiąże problemu.",
          "Dlatego przed budową asystenta sprawdzam strukturę materiałów, sposób ich aktualizowania oraz to, czy system powinien odmówić odpowiedzi, kiedy nie znajdzie odpowiedniego źródła."
        ]
      },
      {
        "id": "jak-sprawdzam-czy-ai-podaje-prawdziwe-informacje",
        "heading": "Jak sprawdzam, czy AI podaje prawdziwe informacje?",
        "body": [
          "Model językowy potrafi przygotować przekonująco brzmiący tekst, nawet gdy nie ma wystarczających danych. Dlatego nie traktuję płynnej odpowiedzi jako dowodu jej poprawności.",
          "Dobrym przykładem jest mój serwis cojestpolskie.pl, zbudowany w Astro. Z jednej bazy powstaje w nim ponad 1700 podstron opisujących ponad 900 marek. AI pomaga mi zbierać informacje o właścicielach marek, ale każdy wynik sprawdzam w KRS i CRBR przed publikacją. Model wykonuje część researchu, natomiast weryfikacja informacji pozostaje po mojej stronie.",
          "Podobną zasadę stosuję we własnych procesach przygotowywania treści. Tekst powstaje z faktów zebranych ze źródłami, a liczby wymagające szczególnej dokładności sprawdzam przed opublikowaniem.",
          "Innym przykładem jest zbudowane przeze mnie narzędzie GEO dla agencji SEO. Co tydzień zadaje te same pytania czterem modelom: ChatGPT, Perplexity, Gemini i Claude. Następnie mierzy, czy w odpowiedziach pojawia się marka klienta.",
          "Przy tym projekcie istotna okazała się różnica między odpowiedziami z wyszukiwaniem w sieci i bez niego. Modele korzystające wyłącznie z wiedzy treningowej mogą nie znać mniejszych polskich marek. Dlatego sposób pomiaru trzeba dopasować do tego, jak rzeczywiście pytają użytkownicy, zamiast wyciągać wnioski z przypadkowo skonfigurowanych testów.",
          "W zleceniu dotyczącym AI stosuję tę samą zasadę: przygotowuję próbkę pytań lub dokumentów, ustalam oczekiwane odpowiedzi i sprawdzam, gdzie model się myli. Tam, gdzie błędna informacja może mieć poważne konsekwencje, dodaję obowiązkową kontrolę człowieka."
        ]
      },
      {
        "id": "co-dzieje-sie-z-danymi-firmy-i-jak-uwzgledniam-rodo",
        "heading": "Co dzieje się z danymi firmy i jak uwzględniam RODO?",
        "body": [
          "Przy wdrożeniu AI najpierw ustalam, jakie informacje model rzeczywiście musi otrzymać. Jeśli zadanie polega na rozpoznaniu tematu maila, być może wystarczy fragment wiadomości. Nie ma powodu automatycznie przesyłać całej historii korespondencji z klientem.",
          "Gdy korzystam z API OpenAI lub Anthropic, potrzebne dane są przekazywane do wybranego dostawcy w celu ich przetworzenia. Jest to inne rozwiązanie niż ręczne wklejanie informacji do zwykłego czatu, ale samo użycie API nie oznacza, że dane nigdy nie opuszczają firmy.",
          "Przed uruchomieniem systemu ustalam, które dane mogą być przesyłane, czy można ograniczyć ich zakres lub usunąć identyfikatory, a także jakie zasady przechowywania i przetwarzania stosuje dostawca.",
          "Jeżeli proces obejmuje dane osobowe, trzeba uwzględnić RODO. W zależności od sposobu przetwarzania może być potrzebna umowa powierzenia danych. Znaczenie mają też lokalizacja przetwarzania, ewentualne transfery poza Europejski Obszar Gospodarczy i zakres dostępu do informacji.",
          "Osobną kwestią są obowiązki wynikające z unijnego rozporządzenia AI Act, czyli rozporządzenia 2024/1689. Przykładowo art. 50 dotyczy przejrzystości określonych systemów AI, w tym informowania użytkownika o rozmowie z AI, chyba że wynika to jasno z okoliczności.",
          "Nie każde zastosowanie AI w małej firmie podlega takim samym obowiązkom. Znaczenie ma przeznaczenie systemu, jego wpływ na ludzi i sposób wykorzystania. Klasyfikację oraz właściwe wymagania trzeba sprawdzić dla konkretnego przypadku.",
          "Przy wdrożeniu przygotowuję więc techniczny przepływ danych i zasady działania systemu tak, żeby było wiadomo, jakie informacje trafiają do modelu, kto ma do nich dostęp i na jakim etapie potrzebna jest kontrola."
        ]
      },
      {
        "id": "od-czego-zalezy-koszt-wdrozenia-i-pozniejszego-utrzymania",
        "heading": "Od czego zależy koszt wdrożenia i późniejszego utrzymania?",
        "body": [
          "Koszt wdrożenia AI nie sprowadza się do opłaty za model. Samo wysłanie pytania przez API to tylko fragment rozwiązania.",
          "Największe znaczenie ma liczba źródeł danych i integracji. System, który korzysta z jednego uporządkowanego zbioru dokumentów, będzie wymagał innego zakresu pracy niż narzędzie połączone z pocztą, bazą klientów i wewnętrzną aplikacją.",
          "Drugi ważny czynnik to kontrola. Jeśli wynik ma być jedynie szkicem do poprawienia przez pracownika, można zaprojektować prostszy proces. Jeżeli system ma wykonywać kolejne działania, trzeba dokładniej określić warunki, wyjątki, obsługę błędów i momenty wymagające zatwierdzenia.",
          "Na zakres prac wpływa również stan danych. Nieaktualne dokumenty, sprzeczne informacje czy brak jednolitych zasad ich zapisywania mogą wymagać uporządkowania jeszcze przed budową narzędzia.",
          "Po uruchomieniu pojawiają się koszty bieżące. W przypadku API OpenAI i Anthropic zależą one między innymi od wybranego modelu, liczby zapytań i ilości przetwarzanego tekstu. Dochodzić mogą hosting, baza danych, monitoring oraz utrzymanie połączeń z innymi systemami.",
          "Nie podaję jednej kwoty ani terminu dla wszystkich projektów. Po poznaniu procesu mogę ocenić, co trzeba zbudować, jakie dane przygotować i jakie elementy będą generowały koszty podczas codziennego używania."
        ]
      },
      {
        "id": "jak-mierze-czy-wdrozenie-ai-rzeczywiscie-pomaga",
        "heading": "Jak mierzę, czy wdrożenie AI rzeczywiście pomaga?",
        "body": [
          "Przed zbudowaniem prototypu potrzebuję punktu odniesienia. Jeśli dzisiaj pracownik obsługuje wiadomość ręcznie, sprawdzam, ile trwa ta czynność i jakie błędy się zdarzają. Bez tego trudno później ocenić, czy narzędzie rzeczywiście poprawiło proces.",
          "W zależności od zadania mierzę między innymi:"
        ],
        "list": [
          "czas potrzebny na wykonanie jednej sprawy przed użyciem AI i po nim,",
          "liczbę poprawnych odpowiedzi na przygotowanej próbce,",
          "liczbę wyników wymagających ręcznej korekty,",
          "zgodność informacji z dokumentami źródłowymi,",
          "liczbę błędów i przypadków przekazanych pracownikowi,",
          "koszt obsługi zapytań przez API."
        ],
        "outro": [
          "Nie każdy proces wymaga tych samych wskaźników. Dla asystenta korzystającego z dokumentów najważniejsze może być znalezienie poprawnej informacji i wskazanie jej źródła. Przy obsłudze maili liczy się również poprawność klasyfikacji oraz czas potrzebny pracownikowi na sprawdzenie szkicu. Przy tworzeniu treści oceniam, ile poprawek wymaga tekst przed publikacją.",
          "Wyniki sprawdzam na rzeczywistych przykładach, również takich, które nie pasują do najprostszego scenariusza. Dzięki temu można zauważyć sytuacje, w których system działa poprawnie tylko przy idealnie przygotowanych danych.",
          "Już na etapie prototypu ustalam też warunki dalszego rozwoju. Jeśli AI regularnie podaje błędne informacje, wymaga ręcznego wykonywania większości pracy albo jego utrzymanie nie jest uzasadnione uzyskanym efektem, nie proponuję automatycznie rozbudowy.",
          "Przy wdrożeniu wykorzystuję wyniki testów do ustalenia, które zadania można powierzyć systemowi, które wymagają zatwierdzenia przez człowieka i czy warto podłączać kolejne dokumenty lub narzędzia firmy."
        ]
      }
    ]
  },
  "opieka-wordpress": {
    "heading": "Opieka nad stroną WordPress: zakres, koszty i zasady współpracy",
    "intro": [
      "Opieka nad stroną WordPress to nie tylko instalowanie aktualizacji i sprawdzanie, czy witryna się otwiera. Strona może wyglądać poprawnie, a jednocześnie mieć otwartą rejestrację niepożądanych kont, pokazywać Google nieaktualne treści albo błędnie obsługiwać zamówienia. Takie problemy znajdowałem zarówno w serwisach przejmowanych po innych wykonawcach, jak i podczas bieżącej pracy nad sklepami WooCommerce.",
      "Prowadzę stałą opiekę techniczną, ale nie każda strona potrzebuje takiego samego zakresu obsługi. Inaczej pracuję z prostą witryną firmową, a inaczej ze sklepem połączonym z systemem sprzedaży. Poniżej wyjaśniam, co sprawdzam przy przejęciu WordPressa, jak wykonuję aktualizacje, na co przeznaczam bank godzin i które prace wyceniam osobno."
    ],
    "sections": [
      {
        "id": "koszt-opieki-zalezy-od-tego-za-jakie-funkcje-strony-odpowiad",
        "heading": "Koszt opieki zależy od tego, za jakie funkcje strony odpowiadam",
        "body": [
          "Głównym czynnikiem kosztu jest zakres odpowiedzialności. Strona firmowa z ofertą i formularzem kontaktowym potrzebuje innych testów niż sklep WooCommerce, w którym klient wybiera produkty, płaci i czeka na realizację zamówienia. Obie instalacje wymagają aktualizacji oraz zabezpieczeń, ale konsekwencje błędu i liczba elementów do sprawdzenia są różne.",
          "Przy opiece nad sklepem WooCommerce nie wystarczy stwierdzić, że strona główna działa. Sprawdzam również funkcje związane z zakupami, zgodnie z uzgodnionym zakresem. W jednym ze sklepów zamówienia za pobraniem anulowały się samoczynnie. Z logów serwera ustaliłem, że integracja z BaseLinkerem cofała ich status, a WooCommerce po 60 minutach anulował je jako nieopłacone. Naprawiłem konflikt małą wtyczką ochronną i przetestowałem rozwiązanie.",
          "Znaczenie ma też liczba używanych rozszerzeń, stan serwera i częstotliwość zmian. Dlatego abonament na opiekę ustalam po sprawdzeniu konkretnej instalacji, a nie wyłącznie na podstawie liczby podstron. W zakresie współpracy określam, które funkcje kontroluję regularnie i jakie zgłoszenia obsługuję."
        ]
      },
      {
        "id": "przy-przejeciu-strony-sprawdzam-rowniez-bledy-pozostawione-p",
        "heading": "Przy przejęciu strony sprawdzam również błędy pozostawione przez poprzedniego wykonawcę",
        "body": [
          "Przejęcie WordPressa zaczynam od przeglądu, nie od masowej aktualizacji wtyczek. Potrzebuję dostępu do panelu administracyjnego i hostingu, aby zobaczyć, jak serwis został zbudowany, kto ma do niego dostęp i gdzie znajdują się kopie zapasowe. W pierwszym przeglądzie sprawdzam konta użytkowników i ich role, aktywne i nieaktywne wtyczki (także spoza oficjalnego repozytorium WordPressa), otwarte punkty dostępu i możliwość rejestracji kont, pamięć podręczną, czyli cache przechowujący gotowe wersje stron, oraz kopie zapasowe i konfigurację hostingu.",
          "Takie kontrole pozwoliły mi wykryć kilka problemów w przejętym serwisie windykacyjnym. Powodem przeglądu był nietypowy ruch widoczny w statystykach. Nie doszło do włamania, a zawartość strony i indeks Google były czyste. Mimo to znalazłem ustawienia, które wymagały poprawy."
        ],
        "table": {
          "caption": "Przy przejęciu strony sprawdzam również błędy pozostawione przez poprzedniego wykonawcę",
          "head": [
            "Problem znaleziony przy przejęciu strony",
            "Czym groził",
            "Co zrobiłem"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Rejestracja kont otwarta przez błędną wartość w bazie danych",
              "Automatyczne skanery mogły zakładać konta. Powstały trzy takie konta.",
              "Usunąłem konta i zamknąłem rejestrację."
            ],
            [
              "Otwarty XML-RPC, czyli stary punkt zdalnego dostępu",
              "Pozostawiał dodatkową drogę komunikacji z WordPressem, mimo wtyczki mającej go wyłączać.",
              "Zablokowałem cały punkt dostępu, łącznie z pingbackami."
            ],
            [
              "Publicznie widoczny login administratora",
              "Ułatwiał poznanie nazwy konta administracyjnego.",
              "Zablokowałem ujawnianie loginu przez listę autorów."
            ],
            [
              "Komentarze otwarte na 72 wpisach",
              "Umożliwiały dodawanie spamu. Znalazłem 17 spamowych komentarzy.",
              "Usunąłem spam i zamknąłem komentarze."
            ],
            [
              "Cache wyświetlający stare tytuły na 39 z 93 wpisów",
              "Odwiedzający i Google widzieli nieaktualne tytuły mimo zmian zapisanych w panelu.",
              "Usunąłem odpowiednie pliki pamięci podręcznej, których nie usuwał przycisk we wtyczce."
            ]
          ]
        },
        "outro": [
          "Znalazłem też zabezpieczenie formularza, które zostało wcześniej przygotowane, ale nigdy nie trafiło na serwer. Działała jedynie pułapka na boty. To przykład różnicy między posiadaniem zabezpieczenia w projekcie a rzeczywistym wdrożeniem go na stronie.",
          "Od czasu problemu ze starymi tytułami po każdej rundzie zmian porównuję wersję strony z pamięcią podręczną i bez niej. Przy przejęciu serwisu sprawdzam więc nie tylko ustawienia, lecz także to, co naprawdę widzi odwiedzający."
        ]
      },
      {
        "id": "aktualizacje-wordpressa-wykonuje-z-kopia-zapasowa-i-kontrola",
        "heading": "Aktualizacje WordPressa wykonuję z kopią zapasową i kontrolą działania",
        "body": [
          "Aktualizacja WordPressa, motywu lub wtyczki potrafi zmienić działanie funkcji niezwiązanej bezpośrednio z aktualizowanym elementem. Formularz może przestać wysyłać wiadomości, układ strony może wyglądać inaczej, a problem w sklepie pojawić się dopiero na karcie konkretnego produktu.",
          "Przed aktualizacją przygotowuję kopię plików i bazy danych. Gdy konfiguracja na to pozwala, sprawdzam zmiany na kopii serwisu. Po wdrożeniu kontroluję kluczowe podstrony i funkcje. Jeśli aktualizacja powoduje błąd, wracam do wcześniejszej, działającej wersji i szukam przyczyny.",
          "W jednym ze sklepów WooCommerce po zmianie we własnej wtyczce obsługującej zdjęcia karty produktów zaczęły zwracać błąd 500, czyli błąd serwera. Sklep nie wyświetlał większości produktów. Przyczynę znalazłem w logu błędów, poprawkę wgrałem tego samego dnia, a następnie ponownie wyłączyłem tryb debugowania używany do diagnozy.",
          "Ważna jest również lokalizacja kopii zapasowej. Jeżeli kopia znajduje się wyłącznie na tym samym serwerze co sklep, awaria serwera może pozbawić Cię obu rzeczy naraz. Dlatego dbam o przechowywanie kopii również poza serwerem i możliwość odtworzenia witryny.",
          "Jeśli dopiero uruchamiasz nową instalację, opisałem podstawowe czynności w poradniku [co zrobić po instalacji WordPressa](/blog/co-zrobic-po-instalacji-wordpressa). W ramach stałej opieki wykonuję aktualizacje i kontrolę ich skutków samodzielnie, więc nie musisz testować zmian na działającej stronie firmy."
        ]
      },
      {
        "id": "bank-godzin-wykorzystuje-na-biezace-niewielkie-zmiany",
        "heading": "Bank godzin wykorzystuję na bieżące, niewielkie zmiany",
        "body": [
          "Nie każda prośba wymaga osobnego projektu i wyceny. Czasami trzeba wymienić zdjęcie, poprawić formularz, zmienić numer telefonu albo uzupełnić ofertę. Właśnie do takich zadań służy bank godzin ustalony w abonamencie.",
          "W ramach dostępnego czasu wykonuję między innymi:"
        ],
        "list": [
          "podmianę zdjęć i grafik w istniejących sekcjach,",
          "aktualizację cenników, danych kontaktowych i godzin działania,",
          "zmiany tekstów dostarczonych w gotowej formie,",
          "dodanie podstrony na podstawie istniejącego układu,",
          "poprawki formularzy, przycisków, linków i stopki,",
          "uzupełnienie realizacji oraz niewielkie poprawki wyglądu na telefonach i komputerach."
        ],
        "outro": [
          "Wielkość banku godzin ustalam według przewidywanej liczby zadań. Na początku współpracy uzgadniamy także sposób rozliczania niewykorzystanego czasu.",
          "Bank godzin nie oznacza nielimitowanej rozbudowy strony. Jeśli zgłoszenie wymaga większej ingerencji, najpierw oceniam jego zakres. Dzięki temu wiesz, które poprawki wykonuję w abonamencie, a które wymagają oddzielnego zlecenia."
        ]
      },
      {
        "id": "wieksze-przebudowy-i-nowe-integracje-wyceniam-osobno",
        "heading": "Większe przebudowy i nowe integracje wyceniam osobno",
        "body": [
          "Stała opieka służy utrzymaniu istniejącej strony i obsłudze niewielkich zmian. Nie zastępuje projektu nowego serwisu, przebudowy całego motywu ani zaprojektowania nowych funkcji od podstaw.",
          "Osobno wyceniam na przykład rozbudowane konfiguratory, nietypowe formularze, integracje z systemami zewnętrznymi oraz większe zmiany procesu zakupowego. Poza abonamentem pozostają także pisanie treści, prowadzenie kampanii reklamowych i regularna obsługa marketingowa.",
          "Dobrym przykładem jest połączenie WooCommerce z systemem obsługującym sprzedaż na różnych kanałach. Samo uruchomienie takiego połączenia i późniejsze utrzymanie jego poprawnego działania to różne zadania. Więcej o technicznej stronie tego procesu znajdziesz na stronie [integracji WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker).",
          "Kiedy zgłaszasz większą zmianę, przedstawiam zakres, wycenę i termin przed rozpoczęciem prac. W ten sposób bank godzin pozostaje dostępny na bieżącą obsługę, zamiast znikać na jednym rozbudowanym projekcie."
        ]
      },
      {
        "id": "nie-kazda-strona-potrzebuje-miesiecznego-abonamentu",
        "heading": "Nie każda strona potrzebuje miesięcznego abonamentu",
        "body": [
          "Jeśli Twoja strona jest prostą wizytówką, treści zmieniają się sporadycznie, a pomocy technicznej potrzebujesz raz lub dwa razy w roku, pojedyncze zlecenia mogą być rozsądniejszym rozwiązaniem. Nie ma sensu rozbudowywać abonamentu tylko dlatego, że strona działa na WordPressie.",
          "Inaczej wygląda sytuacja, gdy witryna regularnie zbiera zapytania, publikujesz nowe materiały albo prowadzisz sprzedaż. Wtedy znaczenie ma nie tylko dostępność strony, lecz także poprawne działanie formularzy, płatności, zamówień i połączeń z innymi usługami.",
          "Przy jednym ze sklepów sprawdzam podczas każdej pracy raport zamówień z ostatnich 30 dni. Kontroluję automatyczne anulowania, cofnięte statusy i nieudane płatności. Taka kontrola pomaga zauważyć problemy, których zwykły komunikat „strona działa” nie pokazuje.",
          "Nie wymagam podpisywania umowy na cały rok. Opiekę rozliczam miesięcznie, a sposób obsługi zgłoszeń oraz zakres odpowiedzialności ustalamy na początku współpracy. Jeśli po przeglądzie uznam, że wystarczą pojedyncze naprawy zamiast regularnej administracji, proponuję właśnie takie rozwiązanie."
        ]
      },
      {
        "id": "ai-pomaga-znalezc-rozwiazanie-ale-zmiane-trzeba-jeszcze-bezp",
        "heading": "AI pomaga znaleźć rozwiązanie, ale zmianę trzeba jeszcze bezpiecznie wdrożyć",
        "body": [
          "Narzędzia AI potrafią przygotować fragment kodu, wyjaśnić komunikat błędu lub zaproponować sposób naprawy. Nie oznacza to jednak, że wygenerowana instrukcja pasuje do Twojej instalacji WordPressa. Znaczenie mają wersje wtyczek, motyw, konfiguracja hostingu i istniejące zależności między funkcjami.",
          "Sam napisałem ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach, którymi się opiekuję albo które zbudowałem. Mu-pluginy to rozszerzenia automatycznie uruchamiane przez WordPressa. Przy takiej pracy ważne jest nie tylko przygotowanie kodu, ale również sprawdzenie, jak jego zmiana wpływa na pozostałe elementy strony.",
          "Instrukcja przygotowana przez AI nie zastępuje kopii zapasowej, przeglądu logów serwera ani testu formularza czy zamówienia. Nawet poprawny fragment kodu może zostać wstawiony w niewłaściwym miejscu albo wejść w konflikt z istniejącą wtyczką.",
          "W ramach opieki biorę na siebie techniczne wykonanie uzgodnionych zmian: analizuję problem, przygotowuję kopię, wdrażam poprawkę i sprawdzam jej skutki. Jeśli coś działa nieprawidłowo, wracam do diagnozy zamiast zostawiać Cię z kodem i instrukcją do samodzielnego wykonania."
        ]
      }
    ]
  },
  "przyspieszanie-stron-wordpress": {
    heading: "Przyspieszenie strony WordPress: co warto sprawdzić przed wyborem wykonawcy",
    intro: [
      "**W tym poradniku pokazuję, jak ocenić szybkość strony, rozpoznać możliwe źródła problemów i porównać zakres prac proponowany przez wykonawców.** Dowiesz się również, kiedy optymalizacja szybkości WordPress ma sens, od czego zależy jej koszt oraz w jakiej sytuacji rozsądniejszym rozwiązaniem może być przebudowa serwisu.",
      "Wynik pojedynczego testu nie daje jeszcze pełnego obrazu. Znaczenie mają rodzaj badanej podstrony, urządzenie, dane zbierane od rzeczywistych użytkowników oraz technologia, na której zbudowano witrynę. Dlatego przed podjęciem decyzji warto zrozumieć, co dokładnie pokazują popularne narzędzia i jakie ograniczenia może mieć obecna strona.",
    ],
    sections: [
      {
        id: "jak-samodzielnie-sprawdzic-czy-strona-wordpress-jest-wolna",
        heading: "Jak samodzielnie sprawdzić, czy strona WordPress jest wolna",
        body: [
          "Najprościej zacząć od PageSpeed Insights. Wpisz adres strony głównej, a następnie sprawdź również ważne podstrony, na przykład ofertę, formularz kontaktowy, artykuł oraz kartę produktu w sklepie. Każdy z tych widoków może korzystać z innego szablonu, zestawu wtyczek i skryptów. Dobry wynik strony głównej nie oznacza więc automatycznie, że cały serwis działa równie sprawnie.",
          "PageSpeed Insights może prezentować dwa rodzaje informacji. Dane laboratoryjne powstają podczas kontrolowanego testu i pomagają znaleźć problemy techniczne. Mogą się zmieniać między kolejnymi pomiarami, ponieważ wpływają na nie między innymi warunki testu i odpowiedź serwera. Dane od użytkowników opisują natomiast doświadczenia osób, które rzeczywiście odwiedzały stronę. Nie każda witryna ma wystarczająco dużo ruchu, aby takie informacje były dostępne.",
          "Przy ocenie [Core Web Vitals](/blog/core-web-vitals-2026) zwróć uwagę na trzy wskaźniki. LCP powinien wynosić do 2,5 sekundy, INP do 200 milisekund, a CLS do 0,1. Ocena opiera się na 75. percentylu, co oznacza, że wymagany poziom powinien być osiągany podczas co najmniej 75 procent zarejestrowanych wizyt. Warto więc patrzeć nie tylko na ogólną punktację, lecz także na konkretne wskaźniki i różnice między urządzeniami mobilnymi a komputerami.",
        ],
      },
      {
        id: "co-najczesciej-spowalnia-strone-wordpress",
        heading: "Co najczęściej spowalnia stronę WordPress",
        body: [
          "Wolna strona WordPress rzadko ma jedną prostą przyczynę. Częściej jest wynikiem kilku nakładających się problemów, dlatego instalacja kolejnej wtyczki do optymalizacji nie zawsze przynosi oczekiwany efekt. Przed zmianami trzeba sprawdzić, które elementy faktycznie obciążają konkretny serwis.",
        ],
        table: {"caption":"Co najczęściej spowalnia stronę WordPress","head":["Obszar","W jaki sposób może spowalniać stronę"],"rows":[["Obrazy","Zbyt duże pliki, niewłaściwe wymiary i ładowanie wszystkich grafik od razu zwiększają ilość danych do pobrania."],["Kreator stron","Rozbudowany kreator może generować dużą ilość kodu, stylów i skryptów, nawet gdy dana podstrona korzysta tylko z części dostępnych funkcji."],["Wtyczki","Niektóre rozszerzenia wczytują swoje zasoby w całym serwisie, chociaż są potrzebne wyłącznie na jednej podstronie."],["Pamięć podręczna","Brak odpowiedniej konfiguracji powoduje, że serwer musi wielokrotnie wykonywać te same operacje."],["PHP i hosting","Stara wersja PHP albo zbyt słabe środowisko serwerowe mogą wydłużać czas oczekiwania na odpowiedź strony."],["Baza danych","Nagromadzone wersje wpisów, dane tymczasowe i pozostałości po usuniętych rozszerzeniach mogą zwiększać liczbę zbędnych operacji."],["Skrypty zewnętrzne","Czaty, piksele reklamowe, mapy i narzędzia analityczne mogą opóźniać ładowanie lub reakcję strony na działanie użytkownika."]]},
        outro: [
          "Każdy z tych obszarów wymaga innego podejścia. Kompresja zdjęć nie naprawi powolnej odpowiedzi hostingu, a pamięć podręczna nie usunie ciężkiego kodu generowanego przez motyw. W WooCommerce dodatkowo trzeba zachować ostrożność przy koszyku, płatnościach i danych aktualizowanych dynamicznie. Zbyt agresywna konfiguracja może poprawić wynik testu, ale jednocześnie zakłócić proces składania zamówienia.",
        ],
      },
      {
        id: "od-czego-zalezy-koszt-przyspieszenia-strony-wordpress",
        heading: "Od czego zależy koszt przyspieszenia strony WordPress",
        body: [
          "Koszt zależy przede wszystkim od liczby elementów, które trzeba przeanalizować, zmienić i przetestować. Prosta witryna z kilkoma powtarzalnymi widokami wymaga innego zakresu pracy niż serwis wykorzystujący osobne szablony usług, wpisów, formularzy i stron docelowych. Im więcej typów podstron, tym więcej przypadków trzeba sprawdzić przed wdrożeniem i po nim.",
          "Znaczenie ma również zastosowany kreator, liczba aktywnych wtyczek oraz możliwość bezpiecznej zmiany ich konfiguracji. W sklepie WooCommerce dochodzą karta produktu, kategorie, koszyk, finalizacja zamówienia, płatności i rozszerzenia sprzedażowe. Każdy z tych elementów może reagować inaczej na opóźnianie skryptów albo ustawienia pamięci podręcznej.",
          "Na zakres wpływa też hosting. Jeżeli serwer odpowiada zbyt wolno, same poprawki po stronie WordPressa mogą nie wystarczyć. Dlatego wycenę przygotowuję po rozpoznaniu konstrukcji serwisu, jego kluczowych szablonów i środowiska, na którym działa. Dzięki temu zakres wynika z realnych problemów strony, a nie z jednego wyniku PageSpeed Insights.",
        ],
      },
      {
        id: "kiedy-optymalizacja-nie-wystarczy-i-lepsza-bedzie-nowa-stron",
        heading: "Kiedy optymalizacja nie wystarczy i lepsza będzie nowa strona",
        body: [
          "Nie każdą witrynę opłaca się poprawiać w nieskończoność. Ciężki kreator może narzucać sposób generowania kodu i ładować zasoby, których nie da się bezpiecznie usunąć bez ingerencji w układ strony. Jeżeli każda kolejna zmiana wymaga obchodzenia ograniczeń narzędzia, optymalizacja może stać się serią kompromisów zamiast trwałym rozwiązaniem.",
          "Podobny problem pojawia się przy przestarzałym motywie, szczególnie gdy nie jest już rozwijany albo nie współpracuje poprawnie z aktualnymi wersjami WordPressa i PHP. W takiej sytuacji trzeba porównać zakres możliwych usprawnień z zakresem przebudowy. Więcej o ograniczeniach jednego z popularnych kreatorów wyjaśniam w materiale [dlaczego odchodzę od Elementora](/blog/elementor-dlaczego-nie-warto).",
          "Nowa strona może być rozsądniejsza, gdy obecna konstrukcja blokuje istotne zmiany, a kolejne doraźne poprawki nie usuwają głównej przyczyny problemu. Nie oznacza to jednak, że każda wolna strona wymaga wymiany. Taką decyzję podejmuję dopiero po sprawdzeniu, czy istniejący serwis daje się zoptymalizować bez naruszania jego ważnych funkcji.",
        ],
      },
      {
        id: "jak-utrzymac-efekt-po-optymalizacji-szybkosci-wordpress",
        heading: "Jak utrzymać efekt po optymalizacji szybkości WordPress",
        body: [
          "Efekt może się zmieniać wraz z rozwojem strony. Duże zdjęcia dodane bez zmniejszenia wymiarów zwiększą wagę podstron, a nowa wtyczka może dołączyć dodatkowe style, skrypty lub zapytania do bazy danych. Podobnie działają kolejne narzędzia marketingowe, takie jak piksele reklamowe, czaty i zewnętrzne formularze.",
          "Po aktualizacjach WordPressa, motywu oraz rozszerzeń warto sprawdzić najważniejsze widoki i podstawowe funkcje strony. Szczególnej kontroli wymagają sklepy, formularze oraz serwisy korzystające z wielu integracji. Sam fakt, że aktualizacja przebiegła bez komunikatu o błędzie, nie oznacza jeszcze, że wydajność pozostała bez zmian.",
          "Jeśli nie chcesz wykonywać takich kontroli samodzielnie, możesz połączyć utrzymanie wydajności z regularną [opieką nad stroną WordPress](/uslugi/opieka-wordpress). Niezależnie od wybranego modelu najważniejsze jest traktowanie szybkości jako parametru, który warto ponownie mierzyć po większych zmianach, a nie jako jednorazowej konfiguracji.",
        ],
      },
      {
        id: "jakie-dostepy-sa-potrzebne-przed-rozpoczeciem-prac",
        heading: "Jakie dostępy są potrzebne przed rozpoczęciem prac",
        body: [
          "Podstawą jest dostęp administracyjny do WordPressa, ponieważ pozwala sprawdzić motyw, aktywne wtyczki i konfigurację serwisu. W zależności od źródła problemu może być potrzebny również dostęp do panelu hostingu, plików strony, bazy danych albo ustawień mechanizmu pamięci podręcznej. Dokładny zestaw ustalam po pierwszym rozpoznaniu.",
          "Najczęściej mogą być potrzebne:",
        ],
        list: [
          "konto administratora WordPressa,",
          "panel hostingu lub kontakt do osoby, która nim zarządza,",
          "dostęp do plików i bazy danych, jeśli wymaga tego zakres zmian,",
          "dostęp do konfiguracji zewnętrznej pamięci podręcznej lub CDN, jeśli są używane,",
          "dane z narzędzi pomiarowych, jeżeli mają posłużyć do analizy ruchu rzeczywistych użytkowników.",
        ],
        outro: [
          "Nie każdy projekt wymaga wszystkich tych dostępów. Najpierw sprawdzam publicznie dostępne wyniki i konstrukcję witryny, a następnie wskazuję, co będzie potrzebne do dalszej diagnostyki. Jeżeli częścią strony zarządza hosting, agencja albo inny wykonawca, zakres uprawnień i sposób współpracy ustalam przy rozpoczęciu prac.",
        ],
      },
    ],
  },
  "nowoczesna-strona-firmowa-2026": {
    heading: "Strona internetowa dla małej firmy: praktyczne decyzje przed zleceniem projektu",
    intro: [
      "**W tej części dowiesz się, czy Twojej firmie wystarczy profil w Google, jaki rodzaj strony wybrać, co wpływa na koszt oraz jakie materiały i usługi trzeba uwzględnić przed rozpoczęciem prac.** To praktyczne kwestie, które warto uporządkować, zanim zaczniesz porównywać wykonawców i otrzymane wyceny.",
      "Dobra strona internetowa dla małej firmy nie powinna być większa ani bardziej skomplikowana, niż wymaga tego sposób pozyskiwania klientów. Powinna natomiast należeć do Ciebie, przedstawiać pełną ofertę i umożliwiać rozwijanie treści wraz z firmą. W typowych projektach usługowych jako rozwiązanie domyślne proponuję [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress). Bardziej rozbudowaną technologię rozważam dopiero wtedy, gdy potrzebujesz nietypowych funkcji, takich jak panel klienta, konfigurator lub kalkulator.",
    ],
    sections: [
      {
        id: "czy-profil-w-google-i-media-spolecznosciowe-wystarcza-malej-",
        heading: "Czy profil w Google i media społecznościowe wystarczą małej firmie?",
        body: [
          "Profil Firmy w Google oraz konta w mediach społecznościowych mogą skutecznie wspierać pozyskiwanie klientów. Pozwalają publikować aktualności, zbierać opinie i pojawiać się w miejscach, w których użytkownicy szukają lokalnych usług. Nie zastępują jednak własnej strony, ponieważ działają według zasad zewnętrznej platformy i dają ograniczoną kontrolę nad sposobem prezentowania oferty.",
          "Własna strona firmowa dla małej firmy działa pod Twoją domeną. Możesz na niej dokładnie opisać każdą usługę, pokazać realizacje, przedstawić odpowiedzi na częste pytania i skierować klienta do właściwego formularza. Nie musisz mieścić całej oferty w krótkim opisie profilu ani budować komunikacji wyłącznie wokół kolejnych postów.",
          "Znaczenie ma również wyszukiwarka. Osobne podstrony usług mogą odpowiadać na różne pytania klientów i pojawiać się w wynikach związanych z konkretną ofertą. Profil w Google wspiera widoczność lokalną, a witryna tworzy miejsce na szczegółowe treści. **Najlepszy efekt daje traktowanie obu kanałów jako uzupełniających się elementów**, a nie wybieranie tylko jednego z nich.",
        ],
      },
      {
        id: "wybor-miedzy-wizytowka-strona-firmowa-a-sklepem-wynika-ze-sp",
        heading: "Wybór między wizytówką, stroną firmową a sklepem wynika ze sposobu sprzedaży",
        body: [
          "Określenie „strona dla firmy” może oznaczać zarówno prostą wizytówkę, jak i rozbudowany serwis z ofertą wielu usług. Dlatego przed porównaniem wycen warto ustalić, co użytkownik ma zrobić po wejściu na stronę. Może jedynie sprawdzić dane i zadzwonić, zapoznać się z usługami przed wysłaniem zapytania albo kupić produkt bezpośrednio online.",
        ],
        table: {"caption":"Wybór między wizytówką, stroną firmową a sklepem wynika ze sposobu sprzedaży","head":["Rodzaj strony","Dla kogo","Typowy zakres","Typowy termin"],"rows":[["Wizytówka","Firma z prostą ofertą i jednym głównym celem kontaktowym","Podstawowe informacje, skrócona oferta, dane kontaktowe i formularz","2-3 tygodnie"],["Strona firmowa lub usługowa","Firma, która potrzebuje dokładnie wyjaśnić kilka usług","Strona główna, podstrony usług, informacje o firmie, kontakt, opcjonalnie realizacje lub blog","4-6 tygodni"],["Mniejszy sklep WooCommerce","Firma sprzedająca produkty bezpośrednio przez internet","Katalog, koszyk, zamówienia, płatności i podstawowa obsługa sprzedaży","6-8 tygodni"],["Średni sklep WooCommerce","Firma potrzebująca funkcji B2B, wersji językowych lub migracji","Rozbudowany katalog i proces zakupowy, dodatkowe wersje oraz przeniesienie danych","10-14 tygodni"]]},
        outro: [
          "Dla firmy usługowej najczęściej właściwym wyborem jest pełna strona firmowa. Wizytówka może okazać się zbyt ograniczona, jeśli klient przed kontaktem chce porównać kilka usług, poznać sposób współpracy albo sprawdzić doświadczenie wykonawcy. Sklep ma sens dopiero wtedy, gdy częścią procesu ma być zakup i obsługa zamówienia online. Jeśli nadal rozważasz kilka rozwiązań, pomocne będzie porównanie opisane w materiale [jaka technologia na stronę firmową](/blog/strona-firmowa-2026-jaka-technologia).",
        ],
      },
      {
        id: "koszt-strony-zalezy-przede-wszystkim-od-zakresu-pracy",
        heading: "Koszt strony zależy przede wszystkim od zakresu pracy",
        body: [
          "Koszt strony internetowej dla małej firmy nie wynika wyłącznie z liczby pozycji w menu. Dwie witryny z taką samą liczbą podstron mogą wymagać zupełnie innego nakładu pracy. Jedna korzysta z powtarzalnego układu usług, a druga potrzebuje indywidualnego formularza, wielu typów treści i przeniesienia materiałów ze starego systemu.",
          "Na wycenę wpływa liczba oraz różnorodność podstron, a także to, kto przygotowuje teksty i zdjęcia. Znaczenie ma również blog, rozbudowanie formularzy, liczba wersji językowych oraz konieczność migracji starej witryny. Przy przenoszeniu strony trzeba dodatkowo przeanalizować dotychczasowe adresy i przygotować przekierowania 301 dla treści, które otrzymają nowe lokalizacje.",
          "Przed rozpoczęciem prac ustalam też, czy posiadasz gotową identyfikację wizualną, czy materiały wymagają uporządkowania i czy poszczególne usługi potrzebują osobnych widoków. Dzięki temu wycena może odnosić się do konkretnego zakresu, a nie do nieprecyzyjnego hasła „strona firmowa”. Szerzej czynniki wyceny omawiam w poradniku [ile kosztuje strona www](/blog/ile-kosztuje-strona-www-2026).",
        ],
      },
      {
        id: "domena-hosting-i-pozostale-uslugi-powinny-nalezec-do-ciebie",
        heading: "Domena, hosting i pozostałe usługi powinny należeć do Ciebie",
        body: [
          "Sama realizacja witryny to jedna część projektu. Do jej działania potrzebne są również usługi utrzymaniowe. **Domenę, hosting i konta związane ze stroną najlepiej rejestrować na dane Twojej firmy**, aby dostęp do nich nie zależał od wykonawcy. Mogę pomóc Ci przejść przez zakup i konfigurację, ale właścicielem pozostajesz Ty.",
          "Osobno trzeba uwzględnić następujące elementy:",
        ],
        list: [
          "**domenę**, czyli adres wpisywany przez użytkownika w przeglądarce,",
          "**hosting**, czyli miejsce, w którym znajdują się pliki i baza danych strony,",
          "**pocztę firmową**, jeśli chcesz korzystać z adresów we własnej domenie,",
          "**certyfikat SSL**, który umożliwia bezpieczne połączenie przez HTTPS,",
          "**opcjonalną opiekę techniczną**, jeśli po wdrożeniu chcesz zlecić aktualizacje i bieżące prace.",
        ],
        outro: [
          "Koszty utrzymania zależą od wybranych usług i ich dostawców. Przed zakupem warto sprawdzić nie tylko warunki początkowe, lecz także zasady odnowienia, dostępne zasoby hostingu oraz sposób zarządzania pocztą. Po zakończeniu 60-dniowej gwarancji mogę zapewnić opcjonalną opiekę w miesięcznym abonamencie bez umowy na rok, ale nie jest ona obowiązkowa.",
        ],
      },
      {
        id: "teksty-i-zdjecia-nie-musza-byc-gotowe-przed-pierwsza-rozmowa",
        heading: "Teksty i zdjęcia nie muszą być gotowe przed pierwszą rozmową",
        body: [
          "Nie musisz przychodzić z kompletem gotowych tekstów. Na początku ważniejsze jest to, abyś potrafił opowiedzieć, czym zajmuje się firma, kto korzysta z jej usług, jakie problemy rozwiązujesz i o co klienci pytają przed zakupem. Na tej podstawie można określić strukturę strony oraz listę materiałów potrzebnych do przygotowania poszczególnych podstron.",
          "Jeśli piszesz teksty samodzielnie, mogę pomóc Ci dopasować ich układ do projektu. W praktyce warto zacząć od konkretów: zakresu usługi, odbiorcy, obszaru działania, sposobu realizacji i warunków kontaktu. Ogólne hasła nie zastąpią informacji, których klient potrzebuje, aby porównać ofertę i zdecydować o wysłaniu zapytania. Zakres pomocy przy tworzeniu lub redakcji treści ustalam przy rozpoczęciu współpracy.",
          "Brak własnych zdjęć również nie blokuje projektu. Można zaplanować sesję firmową, skorzystać z odpowiednio dobranych materiałów stockowych albo oprzeć część projektu na typografii, kolorze i prostych elementach graficznych. Najważniejsze, aby fotografie odpowiadały rzeczywistemu charakterowi działalności i nie sugerowały usług, zespołu lub zaplecza, których firma nie posiada.",
        ],
      },
      {
        id: "widocznosc-w-google-zaczyna-sie-od-poprawnej-konstrukcji-str",
        heading: "Widoczność w Google zaczyna się od poprawnej konstrukcji strony",
        body: [
          "Strona www dla firmy usługowej powinna od początku mieć uporządkowaną strukturę. Przy wdrożeniu przygotowuję hierarchię nagłówków, mapę strony oraz dane strukturalne tam, gdzie pasują do rzeczywistej treści i rodzaju działalności. Konfiguruję również Google Search Console, aby wyszukiwarka mogła otrzymać informacje o witrynie i jej adresach.",
          "Jeżeli strona ma korzystać z Google Analytics 4, uruchomienie analityki wymaga wcześniejszej zgody użytkownika na odpowiednie pliki cookies. Samo wdrożenie tych elementów nie oznacza automatycznego uzyskania konkretnej pozycji. **Techniczne SEO tworzy podstawę do indeksowania, ale widoczność zależy również od treści, konkurencji, historii domeny i dalszego rozwijania serwisu.**",
          "W przypadku działalności lokalnej warto równolegle zadbać o Profil Firmy w Google. Dane dotyczące nazwy, oferty, adresu lub obsługiwanego obszaru powinny być spójne ze stroną. Witryna może szerzej wyjaśniać usługi, natomiast profil pomaga użytkownikowi szybko znaleźć podstawowe informacje w wynikach lokalnych. Takie połączenie daje klientowi kilka dróg dotarcia do firmy bez składania obietnic dotyczących określonej pozycji.",
        ],
      },
    ],
  },
  "nowoczesne-strony-internetowe": {
    heading: "Nowoczesne strony internetowe, czyli co naprawdę decyduje o jakości projektu",
    intro: [
      "**W tej części dowiesz się, po czym rozpoznać nowoczesne strony internetowe, jakie elementy wpływają na ich koszt i co warto ustalić przed wyborem wykonawcy.** Wygląd jest ważny, ale sam efekt wizualny nie wystarczy, jeśli użytkownik nie może szybko zrozumieć oferty, wygodnie przeczytać treści na telefonie albo dotrzeć do potrzebnej informacji.",
      "Dobra nowoczesna strona www łączy estetykę, szybkość, dostępność i przemyślany sposób prezentowania treści. Projektuję te obszary jako elementy jednej całości. Dzięki temu ruch, grafika oraz nietypowe układy mogą wzmacniać charakter marki, ale nie odbywa się to kosztem czytelności i użyteczności.",
    ],
    sections: [
      {
        id: "nowoczesna-strona-pomaga-zrozumiec-firme-a-nie-tylko-robi-wr",
        heading: "Nowoczesna strona pomaga zrozumieć firmę, a nie tylko robi wrażenie",
        body: [
          "Pierwsze wrażenie powstaje szybko, dlatego projekt wizualny powinien od razu sugerować, z jaką firmą masz do czynienia. Innego języka graficznego potrzebuje kancelaria, innego producent, restauracja czy marka kierująca ofertę do młodych rodziców. Kolory, typografia, zdjęcia i rytm poszczególnych sekcji powinny tworzyć spójny obraz, a nie być zestawem modnych rozwiązań wybranych bez związku z działalnością.",
          "Nowoczesność oznacza również prostotę korzystania ze strony. Użytkownik powinien bez domyślania się rozpoznać, gdzie znajdzie ofertę, czym różnią się poszczególne usługi i jaki będzie kolejny krok. Na telefonie tekst musi pozostać czytelny, przyciski łatwe do wybrania, a nawigacja wygodna także wtedy, gdy strona ma nietypowy układ. Nie przenoszę więc projektu komputerowego na mniejszy ekran w skali jeden do jednego. Dobieram układ treści i interakcji do dostępnej przestrzeni.",
          "Istotna jest też wydajność. Duże zdjęcia, filmy, fonty i animacje zwiększają ilość danych, które musi pobrać urządzenie użytkownika. Podczas projektowania nowoczesnych stron trzeba zdecydować, które materiały rzeczywiście budują wartość, a które jedynie obciążają witrynę. W projektach nastawionych na dużą szybkość i publikację wielu treści jednym z możliwych kierunków są [strony Jamstack](/uslugi/strony-jamstack), ale technologię zawsze dobieram do konkretnego zastosowania.",
        ],
      },
      {
        id: "animacje-maja-prowadzic-uwage-a-nie-przejmowac-kontrole",
        heading: "Animacje mają prowadzić uwagę, a nie przejmować kontrolę",
        body: [
          "Ruch może wyjaśnić zależność między elementami, podkreślić zmianę stanu albo skierować wzrok na ważną informację. Delikatne pojawienie się treści może uporządkować odbiór sekcji, a reakcja przycisku potwierdzić użytkownikowi, że wykonał działanie. W takim zastosowaniu animacja staje się częścią komunikacji.",
          "Problem zaczyna się wtedy, gdy użytkownik musi czekać na zakończenie efektu, zanim przeczyta ofertę albo przejdzie dalej. Uciążliwe bywają również elementy poruszające się bez wyraźnej przyczyny, nagłe zmiany układu oraz efekty uzależnione od precyzyjnego sterowania kursorem. To, co wygląda dobrze podczas krótkiej prezentacji, nie zawsze sprawdza się podczas zwykłego korzystania ze strony.",
          "Uwzględniam również osoby, które w telefonie lub komputerze włączyły ograniczenie ruchu. W takiej sytuacji rozbudowaną animację można uprościć albo wyłączyć, zachowując tę samą treść i możliwość obsługi. **Najważniejsze informacje nie powinny być dostępne wyłącznie po odtworzeniu efektu lub wykonaniu skomplikowanego gestu.** Takie podejście poprawia komfort także na słabszych urządzeniach i przy wolniejszym połączeniu.",
        ],
      },
      {
        id: "dostepnosc-jest-czescia-nowoczesnego-projektowania",
        heading: "Dostępność jest częścią nowoczesnego projektowania",
        body: [
          "Dostępna strona pozwala korzystać z treści osobom o różnych potrzebach i sposobach obsługi urządzenia. W praktyce oznacza to między innymi odpowiedni kontrast tekstu, widoczne oznaczenie aktywnego elementu, logiczną kolejność nagłówków, opisy istotnych obrazów oraz możliwość poruszania się po stronie klawiaturą. Formularz powinien jasno wskazywać, które pole zawiera błąd, zamiast komunikować problem wyłącznie kolorem.",
          "Nie każdy obraz wymaga rozbudowanego opisu. Zdjęcie dekoracyjne może zostać pominięte przez program odczytujący stronę, natomiast wykres, schemat lub fotografia produktu powinny przekazywać sens także osobie, która ich nie widzi. Podobnie jest z ikonami. Jeżeli ikona pełni funkcję przycisku, jej znaczenie musi być możliwe do rozpoznania bez zgadywania.",
          "Od 28 czerwca 2025 roku przepisy wdrażające *European Accessibility Act* dotyczą części produktów i usług. Mikroprzedsiębiorstwa świadczące usługi są objęte wyłączeniem, ale samo wyłączenie nie oznacza, że dostępność traci znaczenie biznesowe. Czytelna i możliwa do obsługi strona może służyć większej grupie odbiorców. Gdy zgodność ma być formalnie oceniona, potrzebny jest określony zakres oraz weryfikacja, którą może objąć osobny [audyt WCAG](/audyt-wcag).",
        ],
      },
      {
        id: "koszt-zalezy-od-zakresu-indywidualnych-rozwiazan",
        heading: "Koszt zależy od zakresu indywidualnych rozwiązań",
        body: [
          "Projektowanie nowoczesnych stron może obejmować zarówno dopracowaną witrynę z kilkoma spokojnymi animacjami, jak i rozbudowany serwis z grafiką 3D, nietypowymi przejściami oraz własną logiką. Te projekty mogą wyglądać podobnie na pojedynczym zrzucie ekranu, ale różnią się liczbą stanów, które trzeba zaprojektować, wdrożyć i przetestować.",
        ],
        table: {"caption":"Koszt zależy od zakresu indywidualnych rozwiązań","head":["Element projektu","Jak wpływa na zakres pracy"],"rows":[["Animacje","Każdy indywidualny efekt wymaga przygotowania zachowania na różnych ekranach i sprawdzenia wydajności"],["Grafika 3D","Obejmuje przygotowanie lub dostosowanie materiałów, optymalizację oraz obsługę urządzeń o różnej wydajności"],["System zarządzania treścią","Wymaga określenia, które treści edytujesz i jak mają być zorganizowane"],["Szablony podstron","Każdy odmienny typ podstrony potrzebuje własnego układu i zestawu elementów"],["Własna logika","Kalkulatory, konfiguratory, wyszukiwarki i integracje są wyceniane według sposobu działania"]]},
        outro: [
          "Na koszt wpływa również liczba wersji danego widoku. Sekcja może wyglądać inaczej, gdy zawiera krótki tekst, długi opis, brak zdjęcia albo dodatkowy przycisk. Im więcej takich wariantów ma działać poprawnie, tym większy jest zakres projektowania i testowania. Po rozmowie oraz briefie określam funkcje, sposób edycji i potrzebne szablony, a następnie przygotowuję wycenę z zakresem i terminem.",
          "Własna logika nie zawsze oznacza klasyczną aplikację. Może to być filtrowanie oferty, generowanie wielu podstron z jednej bazy albo uporządkowany proces przetwarzania danych. Przykładem serwisu rozwijanego na podstawie wspólnej bazy jest [cojestpolskie.pl](/projekty/cojestpolskie), który obejmuje ponad 900 marek i ponad 1700 podstron.",
        ],
      },
      {
        id: "dobre-materialy-ulatwiaja-zaprojektowanie-spojnej-strony",
        heading: "Dobre materiały ułatwiają zaprojektowanie spójnej strony",
        body: [
          "Nie musisz przygotowywać kompletnej dokumentacji technicznej. Potrzebuję jednak materiałów, które pozwolą mi zrozumieć markę, ofertę i oczekiwany kierunek. Im wcześniej wiadomo, jakie treści oraz zdjęcia znajdą się na stronie, tym trafniej można zaplanować proporcje sekcji i sposób prowadzenia użytkownika.",
          "Najbardziej przydatne są:",
        ],
        list: [
          "logo, kolory firmowe i używane materiały identyfikacji,",
          "teksty lub robocze informacje o usługach, produktach i firmie,",
          "zdjęcia, ilustracje, filmy oraz inne materiały wizualne,",
          "przykłady stron, które Ci się podobają, wraz z krótkim wyjaśnieniem dlaczego,",
          "informacje o elementach, których nie chcesz powielać na swojej stronie.",
        ],
        outro: [
          "Przykłady nie służą kopiowaniu cudzego projektu. Pomagają ustalić, czy bliższy jest Ci oszczędny układ, mocna typografia, dużo przestrzeni, ciemna kolorystyka czy bardziej dynamiczna prezentacja. Równie cenna jest informacja, że podoba Ci się nawigacja na jednej stronie, sposób prezentacji zdjęć na drugiej i spokojne animacje na trzeciej.",
          "Brak własnych zdjęć nie zatrzymuje projektu. Mogę zaplanować układ wykorzystujący typografię, kolor, proste elementy graficzne albo odpowiednio dobrane materiały stockowe. Zakres pozyskania lub przygotowania takich materiałów ustalam na początku współpracy, ponieważ inne potrzeby ma strona eksperta, a inne oferta oparta na produktach, realizacjach czy wnętrzach.",
        ],
      },
      {
        id: "wsparcie-po-wdrozeniu-pozwala-spokojnie-rozpoczac-prace-ze-s",
        heading: "Wsparcie po wdrożeniu pozwala spokojnie rozpocząć pracę ze stroną",
        body: [
          "Publikacja nie kończy odpowiedzialności za wykonany projekt. Po uruchomieniu obejmuję stronę **60 dniami gwarancji i bezpłatnych poprawek**. Ten czas pozwala wychwycić problemy związane z wdrożeniem, które mogą ujawnić się już podczas normalnego korzystania z witryny.",
          "Po okresie gwarancji możesz samodzielnie zarządzać ustalonym zakresem treści albo skorzystać z opcjonalnej opieki w miesięcznym abonamencie. Nie wymaga ona podpisywania umowy na rok. Dokładny zakres opieki ustalam przy rozpoczęciu współpracy, aby było jasne, jakie aktualizacje, prace techniczne i zmiany obejmuje wybrany wariant.",
          "Rozdzielenie gwarancji od dalszego rozwoju jest istotne. Gwarancja dotyczy poprawnego działania wykonanego wdrożenia, natomiast dodanie nowej podstrony, funkcji, integracji czy kolejnego rodzaju treści stanowi rozwój serwisu. Dzięki temu możesz zdecydować, czy po starcie potrzebujesz stałego wsparcia, czy wystarczy Ci samodzielna obsługa przygotowanych elementów.",
        ],
      },
    ],
  },
  "integracja-woocommerce-z-baselinker": {
    "heading": "Integracja WooCommerce z BaseLinker: jak połączyć sprzedaż, magazyny i hurtownie bez błędów?",
    "intro": [
      "Integracja WooCommerce z BaseLinker ma uporządkować obsługę sprzedaży, a nie dokładać Ci kolejny panel, w którym trzeba ręcznie poprawiać zamówienia. Jeśli sprzedajesz jednocześnie w sklepie i na Allegro, korzystasz z hurtowni albo masz osobny program magazynowy, najważniejsze jest ustalenie, które narzędzie odpowiada za konkretne dane. Bez tego nawet poprawnie nawiązane połączenie może powodować nieprawidłowe stany, nadpisywać ceny lub zmieniać statusy zamówień.",
      "Przy wdrożeniu zaczynam od sprawdzenia obecnego sposobu sprzedaży. Ustalam, skąd pochodzą produkty, gdzie obsługujesz zamówienia, który magazyn jest nadrzędny i jakie informacje powinny wracać do WooCommerce. Dopiero później konfiguruję integrację i testuję przepływ danych. Jeśli dopiero poznajesz system, przeczytaj, [czym jest BaseLinker](/blog/baselinker-co-to-jest). Tutaj skupiam się na tym, co konkretnie robię przy podłączaniu sklepu i naprawianiu istniejących połączeń."
    ],
    "sections": [
      {
        "id": "jak-integracja-woocommerce-z-baselinker-zmienia-obsluge-zamo",
        "heading": "Jak integracja WooCommerce z BaseLinker zmienia obsługę zamówień?",
        "body": [
          "Gdy prowadzisz sprzedaż w WooCommerce i na Allegro, zamówienia powstają w dwóch różnych miejscach. Bez połączenia musisz osobno sprawdzać oba kanały, przenosić potrzebne informacje i pilnować aktualizacji stanów magazynowych. BaseLinker pozwala zebrać zamówienia w jednym panelu, z którego prowadzisz dalszą obsługę sprzedaży.",
          "Połączenie WooCommerce z BaseLinkerem działa przez REST API, czyli mechanizm pozwalający obu systemom wymieniać dane. W panelu sklepu tworzę klucz z odpowiednimi uprawnieniami, a następnie wykorzystuję go do autoryzacji połączenia. BaseLinker pobiera zamówienia ze sklepu i, zgodnie z konfiguracją, przekazuje do WooCommerce aktualizacje stanów, cen oraz statusów.",
          "Istotne jest rozróżnienie pobierania zamówień od zmieniania ich statusów. Zamówienie trafia z WooCommerce do BaseLinkera, ale późniejsze zmiany statusu w BaseLinkerze wracają do sklepu. Żeby działało to prawidłowo, trzeba powiązać statusy obu systemów w ustawieniach integracji.",
          "Przy takiej konfiguracji sprawdzam przede wszystkim:"
        ],
        "list": [
          "które zamówienia mają trafiać z WooCommerce do BaseLinkera,",
          "jakie statusy w obu systemach odpowiadają sobie nawzajem,",
          "skąd mają pochodzić informacje o dostępności produktów,",
          "które czynności związane z wysyłką i dokumentami mają być obsługiwane w połączonych narzędziach."
        ],
        "outro": [
          "Nie zakładam, że każdy proces trzeba automatyzować. Jeśli określony etap obsługujesz ręcznie z konkretnego powodu, uwzględniam to podczas konfiguracji. Przy integracji ustawiam przepływ zamówień zgodnie z rzeczywistym sposobem pracy Twojej firmy, zamiast dostosowywać obsługę sklepu do przypadkowych ustawień systemu."
        ]
      },
      {
        "id": "jak-podlaczam-hurtownie-zeby-do-woocommerce-nie-trafil-caly",
        "heading": "Jak podłączam hurtownię, żeby do WooCommerce nie trafił cały katalog dostawcy?",
        "body": [
          "Jednym z częstszych problemów przy podłączaniu hurtowni jest wybór źródła produktów dla sklepu. Hurtownia udostępnia własny katalog, ale nie oznacza to, że chcesz sprzedawać wszystkie znajdujące się w nim towary. Dlatego nie podłączam WooCommerce bezpośrednio do pełnego magazynu dostawcy. Stosuję model z trzema warstwami:"
        ],
        "list": [
          "Magazyn hurtowni. Zawiera pełny katalog dostawcy. Służy jako źródło danych, które można przeglądać i wykorzystywać do aktualizacji powiązanych produktów.",
          "Magazyn BaseLinker. Kopiuję do niego wybrane produkty i tworzę powiązania magazynowe z odpowiednimi pozycjami hurtowni. Dzięki temu stany i ceny aktualizują się na podstawie danych dostawcy.",
          "Sklep WooCommerce. Podłączam go do Magazynu BaseLinker, a nie bezpośrednio do magazynu hurtowni. W ten sposób sklep korzysta z wybranego asortymentu zamiast całego katalogu dostawcy."
        ],
        "outro": [
          "Takie rozwiązanie zastosowałem w sklepie z teleskopami, który korzysta z oferty dystrybutora Levenhuk. Katalog dostawcy pozostaje w jego magazynie, a do WooCommerce trafiają wybrane produkty przez Magazyn BaseLinker. Stany magazynowe i ceny aktualizują się na podstawie pliku hurtowni.",
          "Ten sam schemat stosuję przy kilku hurtowniach. Każdy dostawca ma własne dane produktowe, a wybrane pozycje są powiązane z magazynem wykorzystywanym przez sklep. Trzeba przy tym sprawdzić, jak produkty są identyfikowane, żeby nie powiązać ze sobą niewłaściwych towarów.",
          "Base.com nie jest hurtownią i nie dostarcza produktów. To pośrednik umożliwiający zarządzanie połączeniami, synchronizację danych i obsługę zamówień. Z każdym dostawcą musisz zawrzeć osobną umowę na swoją firmę, podając wymagane dane, w tym NIP. Akceptacja zazwyczaj trwa kilka dni roboczych, czasami dłużej. Hurtownia może również odmówić współpracy.",
          "Przy zleceniu konfiguruję magazyny i powiązania produktów po uzyskaniu dostępu do danych udostępnionych przez dostawcę. Nie traktuję samego założenia konta BaseLinker jako gwarancji dostępu do oferty hurtowni."
        ]
      },
      {
        "id": "ktory-system-powinien-aktualizowac-stany-ceny-i-produkty",
        "heading": "Który system powinien aktualizować stany, ceny i produkty?",
        "body": [
          "Synchronizacja stanów WooCommerce wymaga ustalenia jednego nadrzędnego źródła dla określonych danych. Problem zaczyna się wtedy, gdy BaseLinker aktualizuje stany produktów, ale równocześnie robi to osobna integracja z programem magazynowym. Oba narzędzia zapisują wartości w tym samym miejscu, a kolejna aktualizacja potrafi nadpisać poprzednią.",
          "Podobnie jest z cenami. Możesz ręcznie zmienić cenę produktu w WooCommerce, ale jeśli inny system odpowiada za aktualizację tego pola, następna synchronizacja przywróci wartość z magazynu lub hurtowni. Dlatego przed konfiguracją pytam, gdzie faktycznie zarządzasz cenami i stanami."
        ],
        "table": {
          "caption": "Który system powinien aktualizować stany, ceny i produkty?",
          "head": [
            "Dane",
            "Pytanie przed konfiguracją",
            "Ryzyko bez ustalenia zasad"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Stany magazynowe",
              "Który magazyn jest nadrzędny?",
              "Sprzedaż produktu, którego nie ma już w magazynie"
            ],
            [
              "Ceny",
              "Gdzie zmieniasz ceny produktów?",
              "Nadpisanie prawidłowej ceny wartością z innego systemu"
            ],
            [
              "Produkty",
              "Po czym system rozpoznaje ten sam produkt?",
              "Duplikaty lub błędne powiązania"
            ],
            [
              "Warianty",
              "Jak odróżniane są rozmiary, kolory i inne opcje?",
              "Aktualizacja danych niewłaściwego wariantu"
            ],
            [
              "Statusy zamówień",
              "Który status w BaseLinkerze odpowiada statusowi WooCommerce?",
              "Nieprawidłowa zmiana statusu, a nawet anulowanie zamówienia"
            ]
          ]
        },
        "outro": [
          "Dane nie muszą płynąć w jednym kierunku. Można na przykład pobierać stany magazynowe z systemu zewnętrznego, a ceny pozostawić pod kontrolą WooCommerce. Warunkiem jest takie ustawienie synchronizacji, żeby poszczególne narzędzia nie nadpisywały sobie informacji.",
          "Sprawdzam także SKU, czyli indywidualne oznaczenia produktów w katalogu, oraz EAN, czyli kody identyfikujące towary. Przy produktach z wariantami ważne są również atrybuty, dzięki którym system odróżnia na przykład poszczególne rozmiary tego samego ubrania.",
          "Przy integracji ustalam nadrzędne źródło każdej grupy danych, weryfikuję powiązania produktów i testuję aktualizacje, zanim uruchomię je w działającym sklepie."
        ]
      },
      {
        "id": "dlaczego-zamowienia-same-zmieniaja-status-lub-zostaja-anulow",
        "heading": "Dlaczego zamówienia same zmieniają status lub zostają anulowane?",
        "body": [
          "Nie wszystkie błędy integracji objawiają się brakiem połączenia. Czasem zamówienia prawidłowo trafiają do BaseLinkera, ale później zmieniają status w WooCommerce bez działania właściciela sklepu.",
          "Miałem taki przypadek w sklepie z odzieżą dziecięcą, który sprzedaje również na Allegro. Klientki składały zamówienia za pobraniem, po czym otrzymywały wiadomości o ich anulowaniu. W panelu WooCommerce jako wykonawca zmiany widniał tylko „system”, więc z samej historii zamówienia nie dało się ustalić przyczyny.",
          "Sprawdziłem logi serwera. Wynikało z nich, że od jednej do trzech minut po złożeniu zamówienia BaseLinker wysyłał przez REST API zmianę statusu na „oczekujące na płatność”. WooCommerce traktował następnie takie zamówienie jako nieopłacone i po 60 minutach je anulował.",
          "Problem nie dotyczył pobierania zamówień, ale przepływu statusów między systemami. Rozwiązaniem była mała własna wtyczka, która blokuje cofnięcie statusu dla zamówień za pobraniem i zapisuje odpowiednią notatkę w zamówieniu. Wskazałem również powiązanie statusów wymagające poprawy po stronie BaseLinkera.",
          "Przetestowałem oba scenariusze. Bez wtyczki błąd się powtarzał, a po jej włączeniu zamówienia za pobraniem nie były już anulowane w ten sposób. Przygotowałem także monitoring z raportem automatycznych anulowań i cofnięć statusów z 30 dni.",
          "Przy diagnozowaniu podobnych problemów nie ograniczam się do ponownego połączenia sklepu. Sprawdzam historię zamówień, logi i ustawienia statusów, żeby ustalić, który system wykonał zmianę i dlaczego WooCommerce zareagował w określony sposób."
        ]
      },
      {
        "id": "czy-przebudowa-sklepu-moze-uszkodzic-dzialajaca-synchronizac",
        "heading": "Czy przebudowa sklepu może uszkodzić działającą synchronizację z BaseLinkerem?",
        "body": [
          "Przebudowa WooCommerce nie zawsze oznacza konieczność zmiany integracji sprzedażowej. Można zmienić wygląd sklepu, sposób wyszukiwania produktów i strukturę katalogu, pozostawiając obsługę zamówień w BaseLinkerze.",
          "Pracuję nad takim rozwiązaniem w sklepie z częściami samochodowymi, który ma ponad 5 tysięcy produktów i sprzedaje również na Allegro. Zamówienia są obsługiwane przez BaseLinkera, natomiast przebudowa obejmuje wygląd i sposób poruszania się po katalogu.",
          "Dotychczasowe kategorie pochodziły z Allegro i tworzyły chaotyczną strukturę. Nowy katalog został zaplanowany według marki pojazdu, modelu i grupy części. Nie umieściłem go jednak jako zwykłych kategorii WooCommerce, ponieważ synchronizacja kategorii z BaseLinkera mogłaby nadpisać nową strukturę.",
          "Zamiast tego nowy katalog działa jako osobna taksonomia, czyli niezależny sposób grupowania produktów w WordPressie. Dzięki temu można budować czytelną nawigację bez opierania jej na kategoriach aktualizowanych przez zewnętrzny system. Wyszukiwarka po numerze OEM, czyli oznaczeniu części nadanym przez producenta, korzysta z numerów zapisanych w atrybutach produktów.",
          "Przy podobnych zleceniach sprawdzam, które pola i kategorie są synchronizowane przez BaseLinkera, zanim zmienię strukturę katalogu. Oddzielam nowe mechanizmy nawigacji od danych zarządzanych przez integrację, żeby aktualizacja zewnętrzna nie nadpisywała zmian wprowadzonych podczas przebudowy."
        ]
      },
      {
        "id": "od-czego-zalezy-zakres-i-koszt-polaczenia-woocommerce-z-base",
        "heading": "Od czego zależy zakres i koszt połączenia WooCommerce z BaseLinkerem?",
        "body": [
          "Największy wpływ na zakres prac ma liczba kanałów sprzedaży, magazynów i hurtowni oraz stan katalogu produktów. Podłączenie jednego sklepu do jednego magazynu oznacza inny zakres konfiguracji niż połączenie WooCommerce, Allegro, kilku dostawców i dodatkowego programu magazynowego.",
          "Znaczenie ma również to, czy integracja powstaje od początku, czy trzeba naprawić już działające połączenie. Przy błędach zamówień najpierw diagnozuję przyczynę. Przy hurtowniach sprawdzam dostępność danych oraz sposób powiązania produktów. Przy katalogu z wariantami analizuję identyfikatory i atrybuty, żeby nie łączyć nieodpowiadających sobie pozycji.",
          "Sprawdzam też narzędzia dodatkowe, takie jak systemy fakturowe, programy magazynowe, kurierzy czy mechanizmy tworzenia etykiet. BaseLinker obsługuje połączenia z różnymi systemami, ale nie przyjmuję automatycznie, że konkretny program używany w Twojej firmie będzie współpracował w oczekiwany sposób. Najpierw weryfikuję dostępne możliwości.",
          "Termin i zakres integracji określam po krótkiej rozmowie oraz sprawdzeniu obecnej konfiguracji. Nie podaję stałego czasu wdrożenia dla wszystkich sklepów, ponieważ dodatkowe kanały, błędne dane oraz konieczność uzyskania dostępu do hurtowni zmieniają zakres potrzebnych prac."
        ]
      },
      {
        "id": "jak-dbam-o-dostep-do-sklepu-i-dzialanie-integracji-po-wdroze",
        "heading": "Jak dbam o dostęp do sklepu i działanie integracji po wdrożeniu?",
        "body": [
          "Do połączenia BaseLinkera z WooCommerce potrzebny jest klucz REST API. Nadaję mu uprawnienia odpowiednie do ustalonego zakresu integracji. Nie udostępniam dostępu do funkcji, których połączone systemy nie potrzebują do wymiany danych.",
          "Konto Base.com zakładasz na własną firmę i samodzielnie je opłacasz. Dzięki temu zachowujesz kontrolę nad ustawieniami, rozliczeniami i użytkownikami. Na czas konfiguracji potrzebuję dostępu pozwalającego połączyć systemy i przeprowadzić testy, ale po zakończeniu prac możesz mi go odebrać.",
          "Samo uruchomienie synchronizacji nie oznacza, że sklep nigdy nie będzie wymagał dalszych zmian. Nowa hurtownia, dodatkowy kanał sprzedaży lub przebudowa katalogu wymagają sprawdzenia obecnych ustawień. Jeżeli potrzebujesz regularnego wsparcia technicznego także poza integracją, zobacz [opiekę nad sklepem WordPress](/uslugi/opieka-wordpress).",
          "Przy zakończeniu zlecenia testuję uzgodnioną ścieżkę zamówienia, przekazuję Ci informacje o sposobie obsługi połączenia i pozostawiam konto Base.com pod Twoją kontrolą. Dzięki temu wiesz, gdzie sprawdzać zamówienia, które systemy aktualizują dane i jakie ustawienia wymagają uwagi przy kolejnych zmianach w sklepie."
        ]
      }
    ]
  },
  "headless-wordpress": {
    "heading": "WordPress jako headless CMS: kiedy połączenie WordPressa i Next.js ma sens?",
    "intro": [
      "Headless WordPress pozwala zachować znany panel edycji treści, a stronę widoczną dla klientów zbudować osobno w Next.js. Twoja redakcja nadal dodaje artykuły, zmienia opisy usług i zarządza zdjęciami w WordPressie. Zmienia się natomiast sposób wyświetlania tych informacji. Zamiast tradycyjnego motywu treści pobiera niezależna aplikacja. To rozwiązanie daje większą swobodę rozbudowy serwisu, ale wymaga odpowiedniego przygotowania publikacji, podglądu szkiców i obsługi funkcji, które wcześniej zapewniały wtyczki.",
      "Nie każda firma potrzebuje takiego podziału. Jeśli WordPress działa sprawnie, a Twoim głównym celem jest publikowanie podstron i artykułów, osobny front może jedynie zwiększyć koszty utrzymania. Inaczej wygląda sytuacja, gdy strona ma obsługiwać zaawansowane wyszukiwanie, wiele źródeł danych albo funkcje wykraczające poza możliwości obecnego motywu. Dlatego przed zaproponowaniem headless sprawdzam zarówno technologię, jak i codzienną pracę Twojego zespołu. Liczy się nie tylko to, co zobaczy klient, ale również to, jak wygodnie będziesz zarządzać stroną po wdrożeniu."
    ],
    "sections": [
      {
        "id": "kiedy-headless-wordpress-rozwiazuje-rzeczywisty-problem-firm",
        "heading": "Kiedy headless WordPress rozwiązuje rzeczywisty problem firmy?",
        "body": [
          "Wyobraź sobie serwis, którego redakcja od lat korzysta z WordPressa. Pracownicy znają panel, mają przygotowane kategorie, pola ACF i własny sposób publikowania materiałów. Nie chcą zmieniać narzędzia, bo samo zarządzanie treścią działa dobrze. Problemem jest część widoczna dla klientów. Strona wolno się ładuje, kolejne wtyczki komplikują utrzymanie, a dodanie nowych funkcji wymaga coraz większych zmian w motywie.",
          "W takiej sytuacji headless WordPress może być rozsądnym rozwiązaniem. Oddzielam warstwę wizualną od panelu, pozostawiając WordPress jako źródło treści. Nowy front tworzę w Next.js, dzięki czemu mogę niezależnie rozwijać wygląd, sposób pobierania danych i funkcje serwisu.",
          "Nie oznacza to jednak, że samo zastosowanie Next.js automatycznie przyspieszy stronę. Znaczenie mają również obrazy, skrypty, sposób generowania podstron i hosting. Nowa architektura daje mi kontrolę nad tymi elementami, ale nadal wymaga optymalizacji.",
          "Przed decyzją sprawdzam kilka kwestii:"
        ],
        "list": [
          "Czy obecny motyw lub zestaw wtyczek utrudnia rozwój potrzebnych funkcji?",
          "Czy chcesz zachować panel WordPressa i dotychczasowy sposób pracy redakcji?",
          "Czy serwis będzie korzystał z dodatkowych źródeł danych, wyszukiwania lub niestandardowych integracji?",
          "Czy Twoja firma akceptuje utrzymywanie dwóch połączonych systemów zamiast jednego?"
        ],
        "outro": [
          "Jeżeli potrzebujesz jedynie strony usługowej, bloga i formularza kontaktowego, zwykły WordPress z własnym motywem często będzie prostszy. Podobnie jest ze sklepem mocno zależnym od licznych wtyczek WooCommerce. Przy wdrożeniu najpierw oceniam, czy oddzielny front rzeczywiście rozwiąże problem, za który warto ponieść dodatkowy koszt."
        ]
      },
      {
        "id": "czym-rozni-sie-klasyczny-wordpress-od-headless-wordpressa",
        "heading": "Czym różni się klasyczny WordPress od headless WordPressa?",
        "body": [
          "W klasycznym WordPressie jeden system odpowiada za przechowywanie treści i generowanie strony. Motyw określa wygląd, a wtyczki mogą dodawać formularze, galerie, funkcje sklepu i inne elementy. W modelu headless WordPress pełni rolę systemu CMS, natomiast Next.js samodzielnie buduje to, co widzi użytkownik.",
          "To przykład architektury, w której zarządzanie treścią jest niezależne od jej prezentacji. Jeżeli chcesz najpierw poznać samą zasadę tego rozwiązania, wyjaśniam, [czym jest headless CMS](/blog/headless-cms-co-to)."
        ],
        "table": {
          "caption": "Czym różni się klasyczny WordPress od headless WordPressa?",
          "head": [
            "Obszar",
            "Klasyczny WordPress",
            "Headless WordPress"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Edycja treści",
              "Panel WordPressa",
              "Ten sam panel WordPressa"
            ],
            [
              "Wyświetlanie strony",
              "Motyw WordPressa",
              "Osobny front w Next.js"
            ],
            [
              "Szybkość",
              "Zależy od motywu, wtyczek, hostingu i optymalizacji",
              "Zależy od budowy frontu, pobierania danych i optymalizacji"
            ],
            [
              "Pola ACF",
              "Motyw może wyświetlać je bezpośrednio",
              "Next.js pobiera ich wartości przez API"
            ],
            [
              "Wtyczki",
              "Mogą bezpośrednio zmieniać wygląd i działanie strony",
              "Funkcje związane z frontem wymagają osobnej obsługi"
            ],
            [
              "Podgląd szkiców",
              "Zwykle dostępny w standardowym mechanizmie WordPressa",
              "Wymaga skonfigurowania podglądu w Next.js"
            ],
            [
              "Publikacja zmian",
              "WordPress aktualizuje widok zgodnie z działaniem motywu",
              "Trzeba przygotować pobieranie lub odświeżanie treści"
            ],
            [
              "Hosting",
              "Najczęściej jedno środowisko",
              "Oddzielne środowiska dla panelu i frontu"
            ],
            [
              "Utrzymanie",
              "Aktualizacje WordPressa, motywu i wtyczek",
              "Aktualizacje WordPressa oraz aplikacji Next.js"
            ],
            [
              "Rozwój funkcji",
              "Zależny od architektury motywu i wtyczek",
              "Front może być rozwijany niezależnie od panelu"
            ]
          ]
        },
        "outro": [
          "Najważniejsza różnica nie polega więc na samym wyglądzie strony. Dotyczy odpowiedzialności za poszczególne funkcje. W klasycznym WordPressie możesz zainstalować wtyczkę, która od razu wyświetli coś w motywie. W architekturze headless ta sama wtyczka może nadal przechowywać dane, ale Next.js musi umieć je pobrać i wykorzystać.",
          "Nie trzeba również przebudowywać istniejącej struktury redakcyjnej tylko dlatego, że zmienia się front. Jeżeli Twoje typy wpisów, kategorie i pola ACF są dobrze przygotowane, mogą pozostać źródłem informacji dla nowej aplikacji.",
          "Przy budowie połączenia WordPress i Next.js ustalam, które elementy pozostają w panelu, a za które od początku odpowiada front. Dzięki temu wiadomo, gdzie należy wprowadzać późniejsze zmiany."
        ]
      },
      {
        "id": "jak-next-js-pobiera-tresci-z-wordpressa-i-aktualizuje-podstr",
        "heading": "Jak Next.js pobiera treści z WordPressa i aktualizuje podstrony?",
        "body": [
          "WordPress przechowuje wpisy, strony, multimedia, kategorie i dane zapisane w polach ACF. Aby Next.js mógł z nich korzystać, potrzebuje połączenia przez API, czyli mechanizm pozwalający jednemu systemowi pobierać dane z drugiego.",
          "Mogę wykorzystać dwa rozwiązania. REST API udostępnia dane WordPressa przez określone adresy, z których aplikacja pobiera potrzebne informacje. WPGraphQL pozwala przygotowywać zapytania wskazujące, jakie dane mają zostać zwrócone. Wybór zależy od struktury treści, istniejących rozszerzeń i potrzeb nowego frontu.",
          "Samo pobranie danych to jednak tylko część zadania. Trzeba jeszcze ustalić, kiedy aktualizacje pojawią się na publicznej stronie. Jeżeli redaktor zmieni opis usługi o godzinie dziesiątej, nie powinien zastanawiać się, czy musi dodatkowo uruchamiać przebudowę aplikacji.",
          "Jednym z rozwiązań jest ISR, czyli mechanizm Next.js umożliwiający odświeżanie wybranych podstron bez przebudowy całego serwisu. Można go połączyć z powiadomieniem wysyłanym przez WordPress po publikacji. Wtedy aktualizowana jest odpowiednia treść, a nie wszystkie podstrony jednocześnie.",
          "Osobnej uwagi wymaga podgląd szkiców. Standardowy przycisk podglądu WordPressa nie wystarczy, jeśli stronę wyświetla niezależna aplikacja. Przygotowuję więc rozwiązanie, które pozwala uprawnionemu redaktorowi zobaczyć nieopublikowany materiał w docelowym wyglądzie strony, bez publicznego udostępniania szkicu.",
          "Ważne są także relacje między treściami. Artykuł może mieć autora, kategorię, powiązane wpisy oraz dodatkowe pola. Nowy front musi otrzymać te informacje w przewidywalnej strukturze.",
          "Przy wdrożeniu konfiguruję pobieranie danych, aktualizację opublikowanych podstron i podgląd szkiców zgodnie z rzeczywistym sposobem pracy Twojej redakcji."
        ]
      },
      {
        "id": "co-dzieje-sie-z-wtyczkami-wordpressa-formularzami-i-ustawien",
        "heading": "Co dzieje się z wtyczkami WordPressa, formularzami i ustawieniami SEO?",
        "body": [
          "To jeden z najważniejszych punktów migracji. Oddzielenie frontu oznacza, że WordPress przestaje generować publiczny widok strony. Wtyczki, które wcześniej modyfikowały kod motywu, nie przeniosą automatycznie swoich efektów do Next.js.",
          "Dotyczy to między innymi kreatorów wizualnych, części galerii, formularzy, wyszukiwarek i dodatków osadzających gotowe elementy w szablonie. Niektóre rozszerzenia nadal mogą poprawnie działać w panelu, ale ich funkcje widoczne dla klientów trzeba przygotować osobno.",
          "Dlatego nie oceniam migracji wyłącznie na podstawie liczby zainstalowanych wtyczek. Sprawdzam, do czego naprawdę służą. Dodatek, który zapisuje potrzebne dane, może pozostać. Ten, który odpowiada za interaktywny element strony, wymaga analizy i często zastąpienia funkcją napisaną w Next.js.",
          "Podobnie wygląda sytuacja z SEO. Jeżeli korzystasz z Yoast lub Rank Math, WordPress może nadal przechowywać tytuły SEO, opisy, adresy kanoniczne oraz ustawienia indeksowania. Nie oznacza to jednak, że informacje automatycznie trafią do kodu nowej strony.",
          "Muszę pobrać odpowiednie dane i przygotować ich obsługę w Next.js. Dotyczy to zarówno podstawowych metadanych, jak i elementów technicznych związanych z konkretnymi podstronami.",
          "W zakresie wdrożenia uwzględniam również strukturę nagłówków, mapę strony, potrzebne dane strukturalne oraz konfigurację Google Search Console. Jeżeli projekt korzysta z analityki GA4, uruchamiam ją po uzyskaniu odpowiedniej zgody na cookies.",
          "Nie obiecuję określonych pozycji w wynikach wyszukiwania. Mogę natomiast zadbać, aby przejście na nowy front nie oznaczało pominięcia istotnych ustawień technicznych.",
          "Przed migracją przygotowuję zestawienie funkcji obecnych wtyczek, a następnie ustalam, które dane zachowam w WordPressie i jakie elementy odtworzę w Next.js."
        ]
      },
      {
        "id": "gdzie-dzialaja-wordpress-i-next-js-oraz-jak-wyglada-ich-bezp",
        "heading": "Gdzie działają WordPress i Next.js oraz jak wygląda ich bezpieczeństwo?",
        "body": [
          "W architekturze headless WordPress nadal potrzebuje hostingu. Przechowuje treści, multimedia, konta redaktorów i ustawienia wykorzystywane przy publikacji. Nie musi natomiast odpowiadać za generowanie publicznej strony dla każdego odwiedzającego.",
          "Panel może działać na osobnej subdomenie i nie być publicznie dostępny. Taki podział pozwala ograniczyć bezpośrednią ekspozycję części administracyjnej, ale nie zwalnia z aktualizacji WordPressa, zabezpieczenia kont i kontroli dostępu do API.",
          "Front w Next.js wdrażam na Vercel albo własnym VPS. W przypadku komercyjnej strony korzystającej z Vercel wybieram plan Pro. Odpowiednie środowisko dobieram do wymagań aplikacji oraz sposobu późniejszego utrzymania.",
          "Dwie części systemu oznaczają również dwa obszary wymagające nadzoru. Jeżeli WordPress przestanie odpowiadać, wcześniej wygenerowane podstrony mogą nadal być dostępne, zależnie od konfiguracji frontu. Może jednak przestać działać publikowanie nowych materiałów lub funkcja pobierająca aktualne dane. Awaria frontu może z kolei uniemożliwić dostęp do strony mimo prawidłowego działania panelu.",
          "Dlatego przy projektowaniu nie traktuję bezpieczeństwa wyłącznie jako ukrycia adresu logowania. Ważne są uprawnienia, dostęp do szkiców, sposób komunikacji między systemami i aktualizacje obu środowisk.",
          "Przy wdrożeniu dobieram hosting, konfiguruję połączenie WordPressa z Next.js i ustalam zasady utrzymania obu części, abyś wiedział, co będzie wymagało opieki po uruchomieniu."
        ]
      },
      {
        "id": "jak-wyglada-migracja-istniejacego-wordpressa-na-osobny-front",
        "heading": "Jak wygląda migracja istniejącego WordPressa na osobny front?",
        "body": [
          "Migracja na headless nie polega na wyeksportowaniu obecnego motywu i uruchomieniu go w Next.js. To budowa nowej warstwy strony, która korzysta z treści zapisanych w istniejącym CMS.",
          "Najpierw sprawdzam strukturę serwisu. Analizuję typy wpisów, pola ACF, taksonomie, multimedia, adresy podstron, wersje językowe i zależności pomiędzy treściami. Następnie ustalam, które elementy można zachować w obecnej formie, a które wymagają zmiany sposobu udostępniania danych.",
          "Jeśli projekt obejmuje nowy wygląd, przygotowuję makiety w Figmie, przewiduję dwie tury poprawek i uzyskuję akceptację przed kodowaniem. Później buduję front, podłączam API i udostępniam wersję testową do sprawdzenia.",
          "Szczególnej uwagi wymaga struktura adresów. Nie zmieniam ich bez potrzeby. Jeżeli jednak dawna podstrona musi otrzymać nowy adres, przygotowuję przekierowanie 301. Dzięki temu osoba korzystająca ze starego odnośnika może dotrzeć do właściwej treści.",
          "Przed przełączeniem sprawdzam także formularze, działanie podglądu, aktualizowanie treści, metadane SEO i wydajność. Korzystam z Lighthouse, celując w wynik 90+ na telefonie oraz LCP poniżej 2,5 sekundy. Końcowe rezultaty zależą od konkretnych zasobów i funkcji strony.",
          "Nowy front mogę przygotowywać równolegle do działającego WordPressa. Pozwala to ograniczyć przerwę podczas migracji, choć przy zmianie DNS może wystąpić krótka niedostępność.",
          "Po uruchomieniu przeprowadzam szkolenie online z obsługi treści. Zapewniam również 60 dni gwarancji i bezpłatnych poprawek. Dalsze utrzymanie może odbywać się w ramach opcjonalnej miesięcznej opieki bez rocznej umowy.",
          "Przy migracji planuję przełączenie dopiero po sprawdzeniu nowej wersji, zachowaniu potrzebnych danych i przygotowaniu przekierowań ze starych adresów."
        ]
      },
      {
        "id": "od-czego-zaleza-koszt-i-termin-wdrozenia-headless-wordpress",
        "heading": "Od czego zależą koszt i termin wdrożenia headless WordPress?",
        "body": [
          "Największym czynnikiem wpływającym na koszt nie jest samo połączenie WordPressa z Next.js. Znacznie więcej pracy może wymagać odtworzenie funkcji, które dotychczas zapewniały motyw i wtyczki.",
          "Serwis z artykułami, prostymi podstronami i kilkoma polami ACF to inny zakres niż rozbudowany portal z filtrowaniem, formularzami, logowaniem, wieloma wersjami językowymi oraz integracjami z zewnętrznymi systemami.",
          "Znaczenie ma również liczba typów treści. Każdy może wymagać własnego widoku, sposobu pobierania danych, obsługi metadanych i aktualizacji po publikacji. Jeżeli redakcja potrzebuje podglądu materiałów przed publikacją, uwzględniam także mechanizm bezpiecznego udostępniania szkiców.",
          "Termin ustalam dopiero po poznaniu obecnej struktury i wymagań nowego frontu. Nie przypisuję wszystkim migracjom jednego przedziału czasowego, ponieważ podobnie wyglądające strony mogą mieć zupełnie inną złożoność techniczną.",
          "Warto też uwzględnić późniejsze utrzymanie. WordPress nadal wymaga aktualizacji, a aplikacja Next.js osobnej obsługi i hostingu. Przy małej stronie firmowej ten dodatkowy obowiązek może przeważyć nad korzyściami. Przy bardziej rozbudowanym serwisie niezależność frontu może natomiast ułatwić realizowanie kolejnych funkcji bez przebudowy dotychczasowego panelu redakcyjnego.",
          "Nie zakładam też, że każda istniejąca wtyczka musi zostać zastąpiona. Część może nadal odpowiadać za dane lub obsługę redakcji. Dopiero analiza pokazuje, jaką część funkcjonalności trzeba przenieść do Next.js.",
          "Przed rozpoczęciem prac przygotowuję wycenę z zakresem i terminem na podstawie rozmowy, briefu oraz analizy typów treści, integracji i funkcji wtyczek. Dzięki temu możesz podjąć decyzję o architekturze na podstawie rzeczywistego zakresu wdrożenia, a nie samej popularności technologii."
        ]
      }
    ]
  },
  "aplikacje-react": {
    "heading": "Programista React: co warto wiedzieć przed zleceniem aplikacji lub panelu?",
    "intro": [
      "Masz już CRM, ERP albo własny system, ale pracownicy tracą czas na szukanie danych, przełączanie ekranów i ręczne uzupełnianie formularzy? Nie zawsze potrzebujesz nowego systemu. Czasem wystarczy lepszy interfejs do tego, który już działa. Jako programista React buduję panele administracyjne, aplikacje za logowaniem i narzędzia wewnętrzne, które łączę z istniejącym zapleczem firmy. Dzięki temu użytkownik może obsługiwać swoje zadania w jednym miejscu, bez konieczności poznawania technicznych szczegółów systemu.",
      "Zanim zacznę pisać kod, ustalam, kto będzie korzystać z aplikacji, jakie dane są potrzebne i które czynności zajmują najwięcej czasu. Sprawdzam też dostępne API, role użytkowników oraz funkcje, które muszą działać od pierwszego dnia. Nie każda aplikacja wymaga rozbudowanej architektury ani wszystkich funkcji od razu. Dlatego pomagam Ci określić zakres pierwszej wersji, wybrać odpowiednie rozwiązania i zaplanować dalszy rozwój."
    ],
    "sections": [
      {
        "id": "jakie-aplikacje-i-panele-buduje-w-react",
        "heading": "Jakie aplikacje i panele buduję w React?",
        "body": [
          "React sprawdza się w aplikacjach, w których użytkownik wykonuje konkretne działania, zamiast jedynie przeglądać treść. W panelu pracownika może aktualizować zamówienia, zmieniać statusy zgłoszeń i wyszukiwać klientów. W panelu klienta może sprawdzać dokumenty, historię współpracy lub informacje dotyczące swoich spraw.",
          "Takie narzędzia często korzystają z danych przechowywanych w innym systemie. React odpowiada wtedy za to, co użytkownik widzi na ekranie i jak wchodzi w interakcję z aplikacją. Nie trzeba od razu wymieniać bazy danych ani przebudowywać całego zaplecza.",
          "Jako programista React przygotowuję między innymi:"
        ],
        "list": [
          "Panele administracyjne, w których uprawnione osoby zarządzają treścią, danymi i ustawieniami systemu.",
          "Panele klienta, zapewniające dostęp do indywidualnych informacji, dokumentów i statusów.",
          "Narzędzia wewnętrzne, pomagające pracownikom obsługiwać zamówienia, zgłoszenia i powtarzalne procesy.",
          "Konfiguratory, w których użytkownik wybiera parametry produktu lub usługi i otrzymuje obliczony wynik.",
          "Interfejsy do istniejących API, umożliwiające wygodną obsługę danych z CRM, ERP lub własnego backendu."
        ],
        "outro": [
          "Ważne jest dla mnie nie tylko to, czy aplikacja wykonuje określone operacje, ale również ile wysiłku wymaga od użytkownika. Jeśli pracownik codziennie wypełnia ten sam formularz, warto ograniczyć liczbę pól do niezbędnych informacji. Jeśli przegląda długą listę zamówień, potrzebuje filtrowania, wyszukiwania i czytelnych statusów.",
          "Przykładem mojego projektu jest Galabau Darius dla klienta z Niemiec. W React i Next.js przygotowałem konfigurator wyceny ogrodzeń na żywo oraz panel administracyjny z logowaniem przez Clerk. Do obsługi danych wykorzystałem Prisma. Projekt łączy interfejs dla klientów z narzędziami potrzebnymi do zarządzania jego zawartością.",
          "Przy Twoim zleceniu również zaczynam od przeanalizowania czynności wykonywanych przez użytkowników, a dopiero później dobieram widoki i komponenty aplikacji."
        ]
      },
      {
        "id": "react-czy-next-js-kiedy-ktory-bedzie-lepszym-wyborem",
        "heading": "React czy Next.js: kiedy który będzie lepszym wyborem?",
        "body": [
          "React i Next.js nie są dwiema zupełnie niezależnymi technologiami. React służy do tworzenia interfejsów, natomiast Next.js jest opartym na nim frameworkiem, który dodaje między innymi możliwości przydatne przy obsłudze publicznych podstron i funkcji serwerowych.",
          "Do aplikacji dostępnej wyłącznie po zalogowaniu często wystarcza sam React. Panel pracownika nie musi pojawiać się w wynikach wyszukiwania Google. Ważniejsze jest to, aby poprawnie pobierał dane, reagował na działania użytkownika i zapewniał dostęp do właściwych funkcji.",
          "Next.js częściej wybieram wtedy, gdy projekt oprócz panelu obejmuje publiczną część serwisu. Może to być strona z ofertą, podstronami usług lub treściami, które mają być widoczne w wyszukiwarce. Jeśli chcesz dokładniej zrozumieć oba rozwiązania, opisałem [różnice między Next.js a Reactem](/blog/next-js-vs-react-roznice) w osobnym poradniku.",
          "React czy Next.js: kiedy który"
        ],
        "table": {
          "caption": "React czy Next.js: kiedy który będzie lepszym wyborem?",
          "head": [
            "Sytuacja w projekcie",
            "React",
            "Next.js"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Panel dostępny wyłącznie po zalogowaniu",
              "Zwykle wystarcza",
              "Możliwy, ale nie zawsze potrzebny"
            ],
            [
              "Interfejs do istniejącego REST API lub GraphQL",
              "Dobrze pasuje",
              "Przydatny, jeśli potrzebne są także funkcje serwerowe"
            ],
            [
              "Publiczne podstrony widoczne w Google",
              "Wymaga dodatkowych decyzji dotyczących architektury",
              "Zwykle lepszy wybór"
            ],
            [
              "Panel i publiczna część serwisu w jednym projekcie",
              "Możliwe, ale wymaga dodatkowej konfiguracji",
              "Ułatwia połączenie obu części"
            ],
            [
              "Wewnętrzne narzędzie do pracy na danych",
              "Często wystarcza",
              "Wybór zależy od dodatkowych wymagań"
            ]
          ]
        },
        "outro": [
          "Nie zakładam, że Next.js jest automatycznie lepszy tylko dlatego, że oferuje więcej możliwości. Dodatkowe funkcje mają sens wtedy, gdy rzeczywiście wykorzystasz je w swoim projekcie.",
          "Jeśli Twoja firma ma już działające API i potrzebuje przede wszystkim panelu do pracy na danych, sam React może być wystarczający. Gdy aplikacja ma łączyć się z rozbudowaną częścią publiczną, trzeba rozważyć także wymagania związane z renderowaniem treści i serwerem.",
          "Przy wdrożeniu ustalam więc najpierw, gdzie aplikacja będzie dostępna, kto będzie jej używać i jakie zadania ma realizować. Dopiero na tej podstawie proponuję technologię."
        ]
      },
      {
        "id": "jak-wyglada-panel-administracyjny-react-w-codziennej-pracy",
        "heading": "Jak wygląda panel administracyjny React w codziennej pracy?",
        "body": [
          "Panel administracyjny nie powinien wymagać od pracownika znajomości struktury bazy danych ani sposobu komunikacji z serwerem. Użytkownik ma zobaczyć potrzebne informacje, wykonać zadanie i otrzymać jasne potwierdzenie, czy operacja zakończyła się powodzeniem.",
          "W praktyce duże znaczenie mają formularze. Jeśli pracownik dodaje klienta lub aktualizuje zamówienie, aplikacja powinna sprawdzić poprawność wprowadzanych informacji. Walidacja pozwala na przykład wykryć brak wymaganego pola lub nieprawidłowy format danych przed wysłaniem formularza.",
          "Podobnie jest z tabelami. Sama lista rekordów szybko przestaje wystarczać, gdy trzeba znaleźć konkretne zgłoszenie albo przejrzeć historię zamówień. Dlatego przygotowuję filtrowanie, stronicowanie i odpowiednie komunikaty, gdy wyszukiwanie nie zwróci wyników.",
          "Kolejna sprawa to role i uprawnienia. Administrator może potrzebować dostępu do wszystkich funkcji, podczas gdy pracownik obsługuje tylko przypisany mu zakres. Klient powinien natomiast widzieć wyłącznie informacje, do których ma uprawnienia.",
          "Sam interfejs nie wystarczy jednak do zapewnienia bezpieczeństwa. Ograniczenia dostępu do danych muszą być respektowane również przez system, z którym komunikuje się aplikacja. Dlatego przed wdrożeniem sprawdzam, jakie mechanizmy autoryzacji udostępnia istniejące zaplecze.",
          "Ważna jest także obsługa sytuacji, w których coś nie działa zgodnie z planem. Jeśli serwer nie odpowiada, użytkownik powinien zobaczyć zrozumiały komunikat. Jeśli zapis danych się nie powiedzie, aplikacja nie powinna sugerować, że operacja zakończyła się sukcesem.",
          "Podczas budowy panelu React z TypeScriptem zwracam uwagę właśnie na takie szczegóły. TypeScript pomaga mi sprawdzać zgodność typów danych podczas programowania, ale nie zastępuje walidacji informacji otrzymywanych od użytkownika i API.",
          "Przy Twoim panelu przygotuję formularze, widoki danych, komunikaty i obsługę uprawnień zgodnie z czynnościami, które wykonują poszczególni użytkownicy."
        ]
      },
      {
        "id": "jak-lacze-frontend-react-z-istniejacym-api",
        "heading": "Jak łączę frontend React z istniejącym API?",
        "body": [
          "Jeśli masz już własny backend, CRM albo ERP, nowa aplikacja React może korzystać z jego danych i funkcji. Nie muszę odtwarzać całego systemu po stronie interfejsu. Przygotowuję warstwę, przez którą pracownicy lub klienci wykonują dostępne operacje.",
          "Podstawą takiego połączenia jest API, czyli sposób komunikowania się aplikacji z zapleczem. System może na przykład udostępniać listę zamówień, dane klientów i możliwość aktualizacji statusu zgłoszenia. Frontend pobiera te informacje, przedstawia je użytkownikowi i przekazuje jego działania do odpowiednich operacji API.",
          "Pracuję z REST API oraz GraphQL. Nie wybieram jednego rozwiązania na siłę, ponieważ w wielu projektach sposób komunikacji jest już ustalony przez istniejący backend.",
          "Przed rozpoczęciem integracji sprawdzam dokumentację, dostępne operacje, format danych oraz sposób autoryzacji. Ustalam również, czy interfejs będzie mógł wykonać wszystkie działania przewidziane w projekcie.",
          "To ważne, ponieważ sam frontend nie stworzy funkcji, której nie udostępnia zaplecze. Jeśli API pozwala odczytać zamówienie, ale nie umożliwia zmiany jego statusu, trzeba uwzględnić odpowiednią modyfikację po stronie backendu.",
          "Współpraca z istniejącym systemem wymaga również obsługi stanów pośrednich. Użytkownik powinien wiedzieć, że dane się ładują, zapis trwa albo połączenie zakończyło się błędem. W przeciwnym razie może ponownie wykonać tę samą operację lub uznać, że aplikacja przestała działać.",
          "W zależności od potrzeb mogę też przygotować integrację z płatnościami Stripe lub systemem logowania. W projektach wykorzystuję między innymi Clerk i NextAuth. Wybór zależy od architektury oraz tego, jakie mechanizmy uwierzytelniania są już dostępne.",
          "Nie zawsze trzeba jednak dodawać osobny system logowania. Jeśli Twoje zaplecze obsługuje użytkowników i ich uprawnienia, najpierw sprawdzam możliwość wykorzystania istniejącego rozwiązania.",
          "Przy integracji Twojej aplikacji najpierw weryfikuję możliwości API i zależności od innych systemów, żeby zakres prac obejmował funkcje, które rzeczywiście można uruchomić."
        ]
      },
      {
        "id": "jak-zaplanowac-pierwsza-wersje-aplikacji-react",
        "heading": "Jak zaplanować pierwszą wersję aplikacji React?",
        "body": [
          "Pierwsza wersja aplikacji nie musi zawierać wszystkich funkcji, które mogą przydać się w przyszłości. Ważniejsze jest ustalenie, jaki proces ma obsługiwać od początku i co użytkownik musi zrobić, aby zakończyć konkretne zadanie.",
          "Takie podejście stosuję również przy MVP, czyli pierwszej użytecznej wersji produktu pozwalającej sprawdzić najważniejsze założenia w praktyce.",
          "Załóżmy, że potrzebujesz panelu do obsługi zgłoszeń. Na początku wystarczające mogą być logowanie, lista zgłoszeń, szczegóły sprawy i zmiana statusu. Rozbudowane raportowanie, dodatkowe powiadomienia czy rozliczne warianty ustawień można zaplanować na kolejne etapy.",
          "Nie chodzi o tworzenie niedopracowanej aplikacji. Podstawowy proces nadal musi działać prawidłowo, a użytkownik powinien otrzymywać zrozumiałe komunikaty i mieć dostęp do potrzebnych danych.",
          "Podczas planowania określam, które funkcje są niezbędne do uruchomienia pierwszej wersji, a które mogą poczekać. Dzielę pracę na etapy i po każdym udostępniam Ci link do wersji testowej.",
          "Dzięki temu możesz sprawdzić, jak działa formularz, tabela czy cały proces obsługi zgłoszenia, zanim przejdziemy do kolejnych funkcji. Jeśli okaże się, że pracownicy potrzebują innego układu informacji, możemy uwzględnić tę wiedzę w dalszych pracach.",
          "Typowy czas przygotowania aplikacji lub MVP wynosi 6 do 12 tygodni. Nie jest to jednak gwarantowany termin dla każdego projektu. Dużo zależy od liczby ekranów, złożoności ich logiki, wymaganych integracji i dostępności danych.",
          "Przy Twoim zleceniu zaproponuję zakres pierwszej wersji oraz kolejność realizacji funkcji, tak aby można było sprawdzać działające części aplikacji na kolejnych etapach."
        ]
      },
      {
        "id": "od-czego-zalezy-koszt-stworzenia-aplikacji-react",
        "heading": "Od czego zależy koszt stworzenia aplikacji React?",
        "body": [
          "Na koszt aplikacji wpływa przede wszystkim zakres jej funkcji, a nie sama liczba ekranów. Dwa panele mogą wyglądać podobnie, ale wymagać zupełnie innego nakładu pracy.",
          "Przykładowo ekran wyświetlający listę klientów będzie mniej złożony niż widok, w którym użytkownik edytuje dane, sprawdza uprawnienia, wykonuje obliczenia i zapisuje zmiany w kilku systemach.",
          "Przed wyceną zwracam uwagę na:"
        ],
        "list": [
          "Liczbę ekranów i ich logikę, w tym formularze, filtrowanie, operacje na danych i obsługę błędów.",
          "Role i uprawnienia użytkowników, które decydują o dostępie do funkcji oraz informacji.",
          "Integracje z API, w szczególności liczbę systemów, zakres dostępnych operacji i jakość dokumentacji.",
          "Logowanie i dodatkowe funkcje, takie jak płatności, odzyskiwanie dostępu czy powiadomienia.",
          "Testy i wdrożenie, zależne od znaczenia poszczególnych procesów oraz sposobu uruchomienia aplikacji."
        ],
        "outro": [
          "Ważne jest również to, czy aplikacja powstaje od początku, czy rozwijamy istniejący projekt. Przy starszym kodzie najpierw sprawdzam jego strukturę, zależności i miejsca, które mogą utrudniać dodawanie nowych funkcji.",
          "Jeżeli pracuję z Twoim zespołem jako freelancer React, możemy ustalić rozliczenie godzinowe lub zamknięty zakres zadań. Przy większym projekcie dzielę pracę na etapy, żeby było jasne, co powstanie w każdej części realizacji.",
          "Wyceny nie przygotowuję wyłącznie na podstawie krótkiego opisu w rodzaju „potrzebuję panelu administracyjnego”. Najpierw chcę wiedzieć, jakie działania będą wykonywać użytkownicy, z jakich danych skorzystamy i czy istniejące API obsługuje potrzebne operacje.",
          "Po rozmowie i briefie przygotowuję zakres prac wraz z terminem i wyceną. Dzięki temu możesz ocenić, co obejmuje zlecenie, jeszcze przed rozpoczęciem programowania."
        ]
      },
      {
        "id": "co-otrzymujesz-po-wdrozeniu-i-jak-wyglada-dalszy-rozwoj-apli",
        "heading": "Co otrzymujesz po wdrożeniu i jak wygląda dalszy rozwój aplikacji?",
        "body": [
          "Po zakończeniu prac aplikacja powinna być możliwa do dalszego rozwijania, niezależnie od tego, czy będę zajmował się nią osobiście, czy przejmie ją Twój zespół.",
          "Dlatego kod umieszczam w repozytorium należącym do Ciebie i przekazuję opis uruchomienia projektu. W React korzystam z komponentów, które pozwalają ponownie wykorzystywać wspólne części interfejsu. Dzięki temu nie trzeba kopiować tego samego formularza lub elementu tabeli w wielu miejscach.",
          "Nie dodaję bibliotek tylko dlatego, że są popularne. Dobieram narzędzia do konkretnego zadania, ponieważ każda dodatkowa zależność może wymagać aktualizacji i uwagi podczas dalszego rozwoju aplikacji.",
          "Przed przekazaniem sprawdzam najważniejsze ścieżki użytkownika. Szczególną uwagę poświęcam formularzom, obliczeniom i operacjom, których nieprawidłowe działanie mogłoby utrudnić codzienną pracę firmy.",
          "Jeśli aplikacja korzysta z zewnętrznego API, sprawdzam również, jak reaguje na problemy z połączeniem i odpowiedzi błędów. Nie zakładam, że serwer zawsze zwróci oczekiwane dane.",
          "Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek. Później możemy kontynuować współpracę przy nowych funkcjach, aktualizacjach bibliotek albo usuwaniu błędów. Oferuję również opcjonalną opiekę w miesięcznym abonamencie bez konieczności podpisywania umowy na rok.",
          "Jeśli masz własnych programistów, mogę przekazać im projekt lub dalej współpracować z zespołem przy wybranych częściach frontendu. Nie musisz uzależniać rozwoju aplikacji od jednego wykonawcy.",
          "Przy przekazaniu Twojego panelu zadbam o dostęp do kodu, instrukcję uruchomienia i ustalenie zasad dalszej opieki, żebyś wiedział, jak rozwijać aplikację po jej wdrożeniu."
        ]
      }
    ]
  },
  "strony-jamstack": {
    "heading": "Strony Jamstack i static site generation: co warto wiedzieć przed wdrożeniem?",
    "intro": [
      "Strony Jamstack pozwalają przygotować podstrony wcześniej, zamiast generować je od nowa przy każdym wejściu użytkownika. To rozwiązanie dla firm, które publikują artykuły, opisy usług, katalogi produktów lub inne treści niewymagające aktualizacji co kilka minut. Możesz mieć szybki serwis, wygodny panel do edycji i mniej elementów wymagających technicznej obsługi. Musisz jednak zaakceptować, że publikacja zmienionej treści wymaga ponownego wygenerowania odpowiednich podstron.",
      "Nie każda witryna powinna działać w ten sposób. Jeśli prowadzisz serwis z treściami, które zmieniają się raz dziennie albo kilka razy w tygodniu, Jamstack może dobrze odpowiadać Twoim potrzebom. Jeżeli użytkownicy oczekują danych aktualizowanych na żywo, indywidualnych widoków po zalogowaniu lub rozbudowanych operacji na serwerze, trzeba rozważyć inne podejście. Zanim zaproponuję Ci technologię, sprawdzam, skąd pochodzą treści, jak często je zmieniasz i jakie funkcje rzeczywiście muszą działać dynamicznie."
    ],
    "sections": [
      {
        "id": "jak-dziala-strona-jamstack-i-co-oznacza-to-dla-twojej-firmy",
        "heading": "Jak działa strona Jamstack i co oznacza to dla Twojej firmy?",
        "body": [
          "Wyobraź sobie katalog zawierający kilkaset produktów. Każdy produkt ma nazwę, opis, zdjęcia i kategorię. Zamiast pobierać te informacje z bazy i budować całą podstronę przy każdym odwiedzeniu, mogę przygotować gotowe widoki podczas generowania serwisu.",
          "Ten mechanizm nazywa się static site generation (SSG), czyli generowaniem stron statycznych. Pobieram dane z CMS, bazy lub plików, łączę je z przygotowanymi szablonami i tworzę gotowe podstrony. Po wdrożeniu użytkownik otrzymuje już przygotowany wynik.",
          "Dla właściciela firmy ma to kilka praktycznych zalet:"
        ],
        "list": [
          "Strona nie musi odpytywać bazy danych przy każdym wyświetleniu zwykłej podstrony.",
          "Publiczna część serwisu może działać niezależnie od panelu zarządzania treścią.",
          "Nie potrzebujesz zestawu wtyczek do wyświetlania artykułów, opisów czy kategorii.",
          "Gotowe pliki można dostarczać użytkownikom przez sieć CDN, czyli serwery przyspieszające udostępnianie treści."
        ],
        "outro": [
          "Nie oznacza to jednak, że strona będzie automatycznie szybka. Duże zdjęcia, nadmiar kodu JavaScript czy źle przygotowane szablony nadal mogą pogorszyć jej działanie. Dlatego podczas budowy optymalizuję nie tylko sposób generowania podstron, ale również zasoby, które pobiera przeglądarka.",
          "Przy wdrożeniu sprawdzam wydajność na telefonie, dążąc do wyniku Lighthouse 90+ i LCP poniżej 2,5 sekundy. LCP określa czas pojawienia się największego widocznego elementu strony."
        ]
      },
      {
        "id": "jamstack-wordpress-aplikacja-next-js-kiedy-ktory",
        "heading": "Jamstack, WordPress, aplikacja Next.js: kiedy który?",
        "body": [
          "Wybór technologii zależy przede wszystkim od tego, co użytkownik ma robić na stronie i jak często zmieniają się dane. Liczba podstron nie jest wystarczającym kryterium.",
          "Serwis z tysiącem artykułów aktualizowanych raz w tygodniu może być prostszy technicznie niż niewielka witryna, w której każdy zalogowany użytkownik widzi inne informacje."
        ],
        "table": {
          "caption": "Jamstack, WordPress, aplikacja Next.js: kiedy który?",
          "head": [
            "Obszar",
            "Jamstack",
            "WordPress",
            "Aplikacja Next.js"
          ],
          "rows": [
            [
              "---",
              "---",
              "---",
              "---"
            ],
            [
              "Najlepsze zastosowanie",
              "Strona firmowa, katalog, baza wiedzy, serwis treściowy",
              "Strona wymagająca gotowych rozszerzeń i wygodnej obsługi z jednego systemu",
              "Panel użytkownika, aplikacja i serwis z rozbudowaną logiką"
            ],
            [
              "Przygotowanie podstron",
              "Wcześniejsze generowanie gotowych plików",
              "Zwykle generowanie przez PHP i bazę, często wspierane pamięcią podręczną",
              "Generowanie statyczne, na serwerze lub rozwiązanie mieszane"
            ],
            [
              "Edycja treści",
              "Sanity, Strapi albo pliki projektu",
              "Wbudowany panel WordPressa",
              "CMS lub własny panel, zależnie od projektu"
            ],
            [
              "Aktualizacja danych",
              "Zwykle wymaga przebudowy odpowiednich podstron",
              "Zmiany mogą być dostępne po publikacji",
              "Może obsługiwać dane zmieniające się na żywo"
            ],
            [
              "Funkcje dynamiczne",
              "Osobne usługi lub funkcje serwerowe",
              "Wtyczki albo własny kod",
              "Logika aplikacji i połączenia z bazami danych"
            ],
            [
              "Utrzymanie",
              "Hosting, CMS i wybrane integracje",
              "Hosting, aktualizacje systemu, motywu i wtyczek",
              "Hosting, baza danych, logika serwerowa i integracje"
            ]
          ]
        },
        "outro": [
          "Jamstack nie jest automatycznie lepszym zamiennikiem WordPressa. Jeśli potrzebujesz wielu gotowych rozszerzeń, rozbudowanego zaplecza sprzedażowego albo funkcji dostępnych w WooCommerce, klasyczny WordPress może być praktyczniejszy.",
          "Podobnie jest z Next.js. Jeśli część serwisu musi wyświetlać dynamiczne dane albo obsługiwać indywidualne operacje użytkowników, nie ma sensu na siłę zamieniać wszystkiego w statyczne pliki.",
          "Przy zleceniu najpierw oddzielam podstrony prezentujące treści od funkcji wymagających działania serwera. Dzięki temu mogę zaproponować Jamstack tam, gdzie jego prostsza architektura rzeczywiście przyniesie korzyść."
        ]
      },
      {
        "id": "jak-edytujesz-tresci-na-stronie-statycznej",
        "heading": "Jak edytujesz treści na stronie statycznej?",
        "body": [
          "Słowo „statyczna” może sugerować, że każda zmiana tekstu wymaga kontaktu z programistą. W praktyce nie musi tak być.",
          "Mogę podłączyć do strony headless CMS, czyli system zarządzania treścią działający niezależnie od wyglądu witryny. Wykorzystuję do tego Sanity lub Strapi.",
          "W panelu otrzymujesz pola dopasowane do rodzaju publikowanych informacji. Jeśli prowadzisz katalog, możesz edytować nazwy, opisy, zdjęcia, kategorie i powiązania między rekordami. Przy stronie firmowej będą to na przykład opisy usług, nagłówki czy sekcje informacyjne.",
          "Po opublikowaniu zmian CMS może uruchomić proces ponownego generowania odpowiednich podstron. Nowa zawartość pojawia się po zakończeniu przebudowy i wdrożenia, a niekoniecznie w chwili kliknięcia przycisku „Publikuj”.",
          "To istotne ograniczenie, zwłaszcza jeśli treści zmieniają się niemal bez przerwy. Przy kilku aktualizacjach dziennie taki model może być wygodny. Jeśli dane muszą zmieniać się co minutę, sprawdzam inne rozwiązanie.",
          "Drugą możliwością jest przechowywanie treści bezpośrednio w plikach projektu. Ogranicza to liczbę zewnętrznych usług, ale wymaga odpowiedniej wiedzy technicznej przy edycji.",
          "Dla właściciela firmy, który chce sam zarządzać zawartością, zazwyczaj przygotowuję CMS. Podczas wdrożenia konfiguruję pola i zależności, a po uruchomieniu strony prowadzę szkolenie online z ich obsługi."
        ]
      },
      {
        "id": "jak-dzialaja-formularze-i-wyszukiwarka-na-stronie-statycznej",
        "heading": "Jak działają formularze i wyszukiwarka na stronie statycznej?",
        "body": [
          "Statyczna strona nie oznacza, że użytkownik może jedynie czytać tekst i oglądać zdjęcia. Formularze kontaktowe, wyszukiwarki czy filtrowanie katalogu również mogą działać w takiej architekturze.",
          "Trzeba tylko rozdzielić wyświetlanie przygotowanej treści od funkcji wymagających dodatkowego przetwarzania danych.",
          "Sam mechanizm tworzenia gotowych podstron opisuję dokładniej w poradniku [czym jest static site generation](/blog/static-site-generation-co-to).",
          "Przykładowe rozwiązania wyglądają następująco:"
        ],
        "list": [
          "Formularz kontaktowy: podłączam go do osobnej usługi albo funkcji serwerowej, która odbiera i przetwarza zgłoszenie.",
          "Wyszukiwarka: może korzystać z przygotowanego indeksu treści lub zewnętrznego mechanizmu wyszukiwania.",
          "Filtrowanie katalogu: przy odpowiednio przygotowanych danych może odbywać się w przeglądarce, bez pobierania nowej podstrony z serwera.",
          "Płatności: przekazuję ich obsługę do systemu przeznaczonego do realizowania transakcji.",
          "Dane aktualizowane na żywo: mogą być pobierane z osobnego źródła, zamiast pochodzić z wygenerowanego wcześniej pliku."
        ],
        "outro": [
          "Każda dodatkowa funkcja zwiększa jednak zakres prac i liczbę elementów wymagających utrzymania.",
          "Jeśli Twoja strona ma jedynie prezentować ofertę oraz odbierać zapytania, nie potrzebujesz rozbudowanego zaplecza aplikacji. Wystarczy odpowiednio przygotowany formularz.",
          "Przy wdrożeniu ustalam, które funkcje można obsłużyć prostą integracją, a które wymagają indywidualnego kodu. Dzięki temu nie komplikuję całej architektury z powodu jednego dynamicznego elementu."
        ]
      },
      {
        "id": "jak-astro-pozwala-budowac-duze-serwisy-z-jednej-bazy-danych",
        "heading": "Jak Astro pozwala budować duże serwisy z jednej bazy danych?",
        "body": [
          "Jednym z zastosowań Jamstacku jest generowanie wielu podobnych podstron na podstawie uporządkowanych danych.",
          "Dobrym przykładem jest mój własny serwis cojestpolskie.pl, zbudowany w Astro. Z jednej bazy danych generuję ponad 1700 podstron dotyczących ponad 900 marek.",
          "Każdy rekord dostarcza informacje wykorzystywane przez odpowiedni szablon. Nie muszę ręcznie tworzyć osobnej strony dla każdej marki. Gdy struktura danych jest poprawnie przygotowana, ten sam mechanizm może obsługiwać kolejne pozycje katalogu.",
          "W tym projekcie korzystam również z AI podczas zbierania informacji o właścicielach marek, a następnie kontroluję je w KRS oraz CRBR. To osobny etap przygotowania danych, niezależny od samego generowania stron.",
          "W Astro zbudowałem także własne serwisy owodzie.pl oraz Dobry Pupil.",
          "Dla katalogów i baz wiedzy ważna jest nie tylko liczba adresów, ale przede wszystkim liczba różnych rodzajów podstron. Jeśli tysiąc rekordów wykorzystuje jeden szablon, nie muszę projektować tysiąca osobnych widoków.",
          "Podczas generowania mogę również przygotować mapę strony XML i odpowiednie dane strukturalne. Dzięki temu mechanizm publikowania uwzględnia nie tylko widoczną treść, ale też techniczne informacje przydatne wyszukiwarkom.",
          "Astro wybieram wtedy, gdy serwis opiera się przede wszystkim na treściach i danych możliwych do przygotowania z wyprzedzeniem. Przy projektach wymagających dynamicznych widoków rozważam Next.js.",
          "Jeśli zlecasz mi katalog, zaczynam od analizy bazy danych, typów rekordów i powiązań między nimi. Na tej podstawie projektuję szablony oraz sposób automatycznego generowania podstron."
        ]
      },
      {
        "id": "od-czego-zaleza-koszt-i-czas-wykonania-strony-jamstack",
        "heading": "Od czego zależą koszt i czas wykonania strony Jamstack?",
        "body": [
          "Przy wycenie nie liczę wyłącznie wszystkich adresów URL. Ważniejsze jest to, ile różnych układów strony trzeba przygotować oraz z ilu źródeł będą pochodziły informacje.",
          "Katalog zawierający kilkaset rekordów o identycznej strukturze może wymagać mniej pracy niż niewielki serwis, w którym każda podstrona ma inny układ, osobne integracje i niestandardowe funkcje.",
          "Największe znaczenie mają liczba typów stron oraz źródeł danych. Dodatkowo sprawdzam sposób edycji treści, potrzebę migracji i zakres działania formularzy, wyszukiwarki lub innych integracji.",
          "Typowa strona firmowa lub usługowa zajmuje mi od 4 do 6 tygodni. Przy większym serwisie generowanym z danych ustalam termin dopiero po rozpoznaniu jego struktury.",
          "Prace zaczynam od rozmowy i briefu. Następnie przygotowuję makiety w Figmie, uwzględniając dwie tury poprawek. Po Twojej akceptacji przechodzę do kodowania.",
          "Jeśli przenosisz istniejącą stronę z WordPressa, analizuję dotychczasowe adresy i przygotowuję przekierowania 301 tam, gdzie są potrzebne. Migrację planuję tak, aby ograniczyć przerwę w działaniu serwisu. Przy zmianie DNS może jednak wystąpić krótka niedostępność, a zachowania obecnych pozycji w Google nie mogę zagwarantować.",
          "Po zakończeniu prac wdrażam stronę na Vercel lub odpowiednio skonfigurowanym VPS. Otrzymujesz 60 dni gwarancji i bezpłatnych poprawek. Późniejsza opieka może działać w miesięcznym abonamencie, bez umowy na rok.",
          "Przy Twoim zleceniu przygotowuję wycenę z określonym zakresem i terminem po krótkiej rozmowie oraz briefie, zamiast szacować pracę wyłącznie na podstawie liczby podstron."
        ]
      },
      {
        "id": "kiedy-jamstack-nie-bedzie-odpowiednim-wyborem",
        "heading": "Kiedy Jamstack nie będzie odpowiednim wyborem?",
        "body": [
          "Najważniejszym ograniczeniem statycznego generowania jest sposób aktualizowania treści. Gdy zmieniasz informacje w CMS, trzeba ponownie przygotować odpowiednie podstrony. Proces może trwać chwilę, zależnie od zakresu zmian i wielkości serwisu.",
          "Nie stanowi to zwykle problemu dla strony firmowej, poradników czy katalogu aktualizowanego kilka razy w tygodniu. Jeśli jednak publikujesz nowe dane co minutę, pełne przebudowywanie serwisu po każdej zmianie może być niewygodne.",
          "Podobnie wygląda sytuacja z funkcjami wymagającymi indywidualnych danych użytkownika. Statyczna strona nie zastąpi samodzielnie panelu klienta, systemu zarządzania zamówieniami czy aplikacji, w której wiele operacji odbywa się po stronie serwera.",
          "Rozbudowany sklep również wymaga osobnej oceny. Sam katalog produktów można przygotować wcześniej, ale magazyn, koszyk, płatności i obsługa zamówień potrzebują odpowiedniego zaplecza. W takim przypadku WooCommerce lub architektura aplikacji mogą być bardziej praktyczne.",
          "Zwracam też uwagę na długoterminowe utrzymanie. Choć publiczna część strony statycznej może nie potrzebować uruchomionego CMS i bazy przy każdym wejściu, nadal pozostają hosting, system edycji treści oraz wybrane usługi zewnętrzne. Nie jest to rozwiązanie całkowicie pozbawione obsługi technicznej.",
          "Dlatego przed rozpoczęciem prac pytam Cię nie tylko o wygląd i liczbę zakładek, ale też o sposób prowadzenia firmy. Chcę wiedzieć, kto będzie publikował treści, jak często pojawią się zmiany, skąd będą pobierane dane oraz co użytkownik powinien móc zrobić na stronie.",
          "Jeśli okaże się, że najważniejsze są szybkie podstrony, wygodna edycja CMS i ograniczenie liczby elementów wymagających utrzymania, zaprojektuję serwis Jamstack. Jeśli dominują funkcje działające na żywo, zaproponuję inną architekturę, zamiast budować statyczną stronę wbrew potrzebom Twojej firmy."
        ]
      }
    ]
  },
  "next-js-software-house": {
    "heading": "Outsourcing Next.js: freelancer, software house czy wsparcie Twojego zespołu?",
    "intro": [
      "Outsourcing Next.js pozwala zbudować aplikację lub rozwinąć istniejący projekt bez zatrudniania programisty na etat. Możesz zlecić wykonanie MVP od początku do końca albo zaprosić zewnętrznego specjalistę do zespołu, któremu brakuje czasu lub doświadczenia z konkretnymi funkcjami. W obu przypadkach ważne jest nie tylko to, kto napisze kod, ale też kto będzie podejmować decyzje techniczne, gdzie znajdzie się repozytorium i jak przekażesz projekt kolejnym osobom.",
      "Sam pracuję jako freelancer Next.js. Od 2020 roku tworzę komercyjne strony i aplikacje, początkowo jako frontend developer w software house we Wrocławiu, a od końca 2022 roku na własny rachunek. Znam więc współpracę zarówno wewnątrz zespołu, jak i bezpośrednio z klientem. Nie uważam, że jeden model pasuje do każdej aplikacji. Jeśli rozwijasz startup albo szukasz programisty Next.js na kilka tygodni lub miesięcy, pomogę Ci ocenić, czy mogę samodzielnie poprowadzić projekt, czy lepiej dołączyć do Twojego zespołu."
    ],
    "sections": [
      {
        "id": "freelancer-czy-software-house-next-js-co-dostajesz-w-kazdym",
        "heading": "Freelancer czy software house Next.js: co dostajesz w każdym modelu?",
        "body": [
          "Największa różnica między freelancerem a software house'em nie sprowadza się do samego programowania. Chodzi o organizację pracy, komunikację i liczbę osób, które mogą jednocześnie zajmować się Twoim projektem.",
          "Kiedy współpracujesz ze mną, rozmawiasz bezpośrednio z programistą, który później wdraża ustalenia. Jeśli podczas omawiania funkcji pojawi się problem techniczny, mogę od razu wyjaśnić, z czego wynika i jakie mamy możliwości. Nie muszę przekazywać pytania przez opiekuna projektu. Jednocześnie nie dysponuję zespołem, który może równolegle projektować, programować i testować kilka dużych modułów.",
          "W software house'ie zadania mogą być rozdzielone między programistów, projektantów i osoby zarządzające projektem. To przydatne, jeśli aplikacja wymaga wielu specjalizacji dostępnych jednocześnie. Codzienny kontakt i sposób podejmowania decyzji zależą jednak od organizacji konkretnej firmy.",
          "Freelancer czy software house: co dostajesz?"
        ],
        "table": {
          "caption": "Freelancer czy software house Next.js: co dostajesz w każdym modelu?",
          "head": [
            "Kryterium",
            "Freelancer Next.js",
            "Software house Next.js"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Kontakt",
              "Bezpośrednio z osobą piszącą kod",
              "Z programistą lub osobą prowadzącą projekt"
            ],
            [
              "Odpowiedzialność",
              "Jeden wykonawca odpowiada za uzgodniony zakres",
              "Odpowiedzialność może być podzielona między specjalistów"
            ],
            [
              "Decyzje techniczne",
              "Omawiasz je bezpośrednio z wykonawcą",
              "Zależą od przyjętego sposobu pracy zespołu"
            ],
            [
              "Równoległe zadania",
              "Ograniczone dostępnością jednej osoby",
              "Możliwość zaangażowania kilku osób jednocześnie"
            ],
            [
              "Rozwój projektu",
              "Możliwy samodzielnie lub po dołączeniu kolejnych programistów",
              "Możliwość rozszerzania zespołu w ramach firmy"
            ],
            [
              "Ryzyko organizacyjne",
              "Nieobecność jednej osoby może wstrzymać prace",
              "Zmiany w składzie zespołu mogą wymagać przekazania wiedzy"
            ],
            [
              "Przekazanie kodu",
              "Zależy od repozytorium i dokumentacji",
              "Zależy od zasad dostępu i dokumentowania projektu"
            ]
          ]
        },
        "outro": [
          "Nie traktuję tego porównania jako argumentu przeciwko software house'om. Sam pracowałem w takim środowisku i wiem, że większy zespół ma sens przy odpowiednio rozbudowanym zakresie.",
          "Jeśli aplikacja wymaga intensywnej pracy wielu programistów jednocześnie, nie będę obiecywał, że sam wykonam ją w tym samym trybie. Przy rozmowie o zleceniu sprawdzam więc nie tylko wymagania techniczne, ale również dostępność i realną możliwość prowadzenia prac."
        ]
      },
      {
        "id": "projekt-od-zera-i-dolaczenie-do-zespolu-to-dwa-rozne-rodzaje",
        "heading": "Projekt od zera i dołączenie do zespołu to dwa różne rodzaje outsourcingu",
        "body": [
          "Jeśli masz pomysł na produkt, ale nie masz własnego zaplecza technicznego, mogę przeprowadzić Cię przez budowę pierwszej wersji. Zaczynamy od ustalenia, kto będzie korzystał z aplikacji i co użytkownik powinien móc w niej zrobić. Następnie przygotowuję projekt ekranów, koduję funkcje i uruchamiam gotowe rozwiązanie.",
          "W tym modelu odpowiadam za całą uzgodnioną realizację. Nie musisz samodzielnie organizować pracy projektanta interfejsu i programisty ani rozstrzygać, które narzędzie będzie odpowiednie do obsługi bazy danych.",
          "Inaczej wygląda współpraca, gdy masz już programistów, ale brakuje Ci dodatkowej osoby. Wtedy nie potrzebujesz wykonawcy całej aplikacji. Potrzebujesz kogoś, kto zapozna się z istniejącym kodem i zacznie rozwiązywać konkretne problemy.",
          "W takim przypadku mogę:"
        ],
        "list": [
          "Dołączyć do Twojego repozytorium i pracować na istniejącej aplikacji Next.js.",
          "Przejrzeć kod przed rozpoczęciem zmian i rozpoznać zależności między funkcjami.",
          "Realizować zadania ustalone przez Twój zespół, np. nowe widoki, formularze, logowanie lub integracje.",
          "Uczestniczyć w przeglądach kodu i wprowadzać poprawki zgodnie z przyjętymi zasadami.",
          "Przekazać wykonane rozwiązania wraz z informacjami potrzebnymi do ich dalszego utrzymania."
        ],
        "outro": [
          "Nie zakładam, że każdy istniejący projekt trzeba przebudować. Jeśli aplikacja działa, a problem dotyczy jednego modułu, najpierw sprawdzam możliwość zmiany właśnie tego elementu.",
          "Taka współpraca może trwać kilka tygodni albo miesięcy. Jej zakres zależy od liczby zadań, organizacji Twojego zespołu i mojej dostępności. Przy rozpoczęciu zlecenia ustalamy, za które części kodu odpowiadam i jak będą odbierane wykonane prace."
        ]
      },
      {
        "id": "mvp-w-next-js-zaczyna-sie-od-wyboru-najwazniejszych-funkcji",
        "heading": "MVP w Next.js zaczyna się od wyboru najważniejszych funkcji",
        "body": [
          "MVP to pierwsza użyteczna wersja produktu. Nie musi zawierać wszystkiego, co planujesz na kolejne miesiące. Powinna natomiast pozwolić użytkownikowi wykonać najważniejsze zadanie, dla którego aplikacja powstaje.",
          "Załóżmy, że tworzysz platformę, na której klient konfiguruje produkt i wysyła zapytanie. W pierwszej wersji potrzebujesz mechanizmu wyboru elementów, obliczania wyniku i przekazania danych firmie. Rozbudowany panel statystyk albo dodatkowe sposoby personalizacji mogą poczekać, jeśli nie są konieczne do obsługi pierwszych użytkowników.",
          "Podczas briefu staram się odróżnić funkcje niezbędne od pomysłów na późniejszy rozwój. Sam spis ekranów nie wystarcza do rzetelnej wyceny. Dwa podobnie wyglądające formularze mogą wymagać zupełnie innej ilości pracy, jeśli jeden tylko wysyła wiadomość, a drugi przelicza dane, sprawdza uprawnienia i zapisuje wyniki w bazie.",
          "Budowę MVP prowadzę etapami:"
        ],
        "list": [
          "Brief i zakres. Ustalam cel produktu, użytkowników, najważniejsze funkcje oraz potrzebne integracje.",
          "Makiety w Figmie. Przygotowuję układ ekranów, uwzględniam dwie tury poprawek i czekam na akceptację.",
          "Programowanie. Buduję uzgodnione funkcje, zaczynając od tych, które tworzą podstawowy sposób działania aplikacji.",
          "Wersja testowa. Po każdym etapie przekazuję link, pod którym możesz sprawdzić działanie rozwiązania.",
          "Wdrożenie. Uruchamiam aplikację produkcyjnie, sprawdzam jej działanie i przekazuję dokumentację."
        ],
        "outro": [
          "MVP w Next.js powstaje zwykle w ciągu 6 do 12 tygodni. Nie jest to jednak termin dla dowolnej aplikacji. Projekt z prostym panelem i kilkoma formularzami będzie wymagał innego nakładu pracy niż produkt z wieloma poziomami uprawnień, płatnościami i połączeniami z zewnętrznymi usługami.",
          "Jeśli dopiero poznajesz tę technologię, przeczytaj również poradnik [czym jest Next.js](/blog/next-js-co-to-jest). Wyjaśnia podstawy, które pomogą Ci zrozumieć techniczny wybór przed rozpoczęciem zlecenia."
        ]
      },
      {
        "id": "wycena-aplikacji-zalezy-przede-wszystkim-od-jej-logiki",
        "heading": "Wycena aplikacji zależy przede wszystkim od jej logiki",
        "body": [
          "Przy wycenianiu projektu nie liczę wyłącznie ekranów. Ważniejsze jest to, co ma się wydarzyć po kliknięciu przycisku, zapisaniu formularza czy zalogowaniu użytkownika.",
          "Widok listy produktów może być stosunkowo prosty. Jeżeli jednak użytkownik ma filtrować produkty według własnych reguł, zapisywać konfiguracje, otrzymywać indywidualne wyceny i płacić za zamówienie, zakres prac znacząco się zmienia.",
          "Największy wpływ na koszt ma liczba i złożoność funkcji z własną logiką, które mają znaleźć się w pierwszej wersji. Znaczenie mają również integracje, sposób przechowywania danych i zależności między poszczególnymi modułami.",
          "Dlatego przed przedstawieniem wyceny rozmawiam z Tobą o wymaganiach. Ustalam, co ma działać na start, które funkcje mogą poczekać i jakie systemy zewnętrzne trzeba połączyć z aplikacją.",
          "Przy projekcie o zamkniętym zakresie przygotowuję stałą wycenę wraz z terminem realizacji. Jeśli później pojawi się potrzeba dodania kolejnego modułu, wyceniam go osobno. Możesz wtedy zdecydować, czy rozszerzyć bieżące wdrożenie, czy zaplanować zmianę na następny etap.",
          "Przy współpracy z istniejącym zespołem zakres może ewoluować wraz z kolejnymi zadaniami. Sposób rozliczenia dobieram wtedy do charakteru współpracy, zamiast z góry zakładać jeden model dla wszystkich projektów.",
          "Podczas ustalania zlecenia zależy mi na tym, żebyś wiedział, jakie funkcje obejmuje wycena, co otrzymasz po wdrożeniu i które pomysły pozostają poza aktualnym zakresem."
        ]
      },
      {
        "id": "technologie-dobieram-do-funkcji-nie-do-dlugosci-listy-narzed",
        "heading": "Technologie dobieram do funkcji, nie do długości listy narzędzi",
        "body": [
          "Next.js pozwala tworzyć zarówno interfejs, jak i część logiki działającej po stronie serwera. Dzięki temu można wykorzystać go do budowy aplikacji z kontami użytkowników, bazą danych, płatnościami czy panelem administracyjnym.",
          "W moich projektach korzystam z Next.js App Router, który odpowiada za organizację adresów i widoków aplikacji, oraz TypeScriptu. Ten drugi pomaga kontrolować typy danych, wychwytywać część problemów podczas programowania i ułatwia zrozumienie kodu przy późniejszym rozwoju.",
          "Gdy aplikacja potrzebuje własnej bazy danych, mogę zastosować Postgres z Prisma lub Drizzle. Te narzędzia pomagają aplikacji odczytywać i zapisywać informacje. Do logowania użytkowników dobieram Clerk albo NextAuth, a do obsługi płatności Stripe.",
          "Jeżeli właściciel firmy chce samodzielnie edytować treści, rozważam również system zarządzania treścią, taki jak Sanity lub Strapi. Nie każda aplikacja potrzebuje jednak osobnego CMS-a.",
          "Wdrożenie mogę przygotować na Vercel albo własnym VPS, czyli serwerze, nad którego konfiguracją masz większą kontrolę. Wybór zależy od potrzeb aplikacji i wymagań dotyczących jej utrzymania.",
          "Nie łączę wszystkich tych narzędzi automatycznie. Najpierw odpowiadam na praktyczne pytania: kto ma dostęp do danych, jak użytkownik wykonuje płatność, co może edytować administrator i jakie informacje aplikacja wymienia z innymi systemami.",
          "Przy zleceniu dobieram więc technologię do ustalonych funkcji i dalszego sposobu rozwijania produktu, a nie odwrotnie."
        ]
      },
      {
        "id": "gotowe-realizacje-pokazuja-z-jakimi-problemami-pracuje",
        "heading": "Gotowe realizacje pokazują, z jakimi problemami pracuję",
        "body": [
          "Nie każda aplikacja Next.js wygląda jak typowy panel klienta. Czasami jej najważniejszą częścią jest konfigurator produktu, czasami baza danych z dużą liczbą podstron, a czasami narzędzie do codziennej pracy firmy.",
          "Dla niemieckiej firmy Galabau Darius przygotowałem konfigurator wyceny ogrodzeń działający na żywo. Użytkownik wybiera elementy, a aplikacja przelicza konfigurację. Po stronie firmy dostępny jest panel administracyjny zabezpieczony logowaniem przez Clerk. Projekt wykorzystuje również Prisma i działa na Vercel.",
          "W tej realizacji istotne było połączenie interfejsu z logiką konfiguratora i możliwością zarządzania danymi. To przykład aplikacji, w której nie wystarczy zaprojektować atrakcyjnych ekranów. Trzeba też zadbać o działanie poszczególnych funkcji i przepływ informacji.",
          "Innym przykładem jest Kantorymapa, mój własny serwis zbudowany w Next.js. Obejmuje 1900 kantorów w 140 miastach, codziennie aktualizuje kursy NBP i ładuje się poniżej sekundy. Wykorzystuje programmatic SEO, czyli generowanie uporządkowanych podstron na podstawie zgromadzonych danych.",
          "Przy takim produkcie ważna jest organizacja informacji, aktualizacja danych i sprawne generowanie widoków dla różnych lokalizacji. To inny rodzaj problemu niż logowanie do panelu czy konfiguracja produktu, ale nadal wymaga połączenia interfejsu z zapleczem aplikacji.",
          "Pracowałem też nad projektem Ceny Notarialne, który prezentuje ceny transakcyjne z Rejestru Cen Nieruchomości, wykorzystuje mapy MapLibre i obejmuje tysiące podstron lokalizacji. W tym przypadku duże znaczenie ma sposób prezentacji i porządkowania danych.",
          "Kiedy rozmawiamy o Twoim zleceniu, nie próbuję dopasować go na siłę do jednej z tych realizacji. Sprawdzam, jakie podobne problemy techniczne już rozwiązywałem i które doświadczenia można wykorzystać w nowym projekcie."
        ]
      },
      {
        "id": "kod-i-dokumentacja-powinny-umozliwiac-dalszy-rozwoj-bez-free",
        "heading": "Kod i dokumentacja powinny umożliwiać dalszy rozwój bez freelancera",
        "body": [
          "Współpraca z jedną osobą ma oczywistą słabość: jeśli ta osoba przestanie być dostępna, ktoś inny musi poznać projekt. Nie da się całkowicie usunąć tego ryzyka, ale można ograniczyć zależność od wykonawcy.",
          "Dlatego kod tworzę od początku w repozytorium klienta. Masz dostęp do historii zmian i aktualnej wersji projektu, a nie dostajesz całej aplikacji dopiero przy końcowym rozliczeniu.",
          "Dbam też o uporządkowaną strukturę kodu i dokumentację. Dzięki temu kolejny programista może sprawdzić, jak zorganizowane są funkcje, z jakich narzędzi korzysta aplikacja i gdzie znajdują się jej poszczególne elementy.",
          "Nie oznacza to, że nowy wykonawca przejmie rozbudowany projekt bez czasu potrzebnego na zapoznanie się z kodem. Im więcej zależności i własnej logiki zawiera aplikacja, tym ważniejsze staje się dobre przekazanie wiedzy.",
          "Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek. Następnie możesz zdecydować, czy nadal mam rozwijać produkt, czy potrzebujesz wyłącznie utrzymania istniejących funkcji. Oferuję opcjonalną opiekę w miesięcznym abonamencie bez konieczności podpisywania umowy na rok.",
          "Jeżeli firma rośnie i potrzebuje kilku programistów pracujących równolegle, możemy przygotować przekazanie projektu większemu zespołowi. Nie obiecuję, że samodzielnie obsłużę dowolną skalę rozwoju.",
          "Przy zakończeniu współpracy przekazuję kod i dokumentację, abyś mógł dalej rozwijać aplikację z własnym programistą, kolejnym freelancerem albo software house'em."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-kancelarii-prawnych": {
    "heading": "Strona internetowa kancelarii: jak zaprojektuję serwis dopasowany do Twojej praktyki",
    "intro": [
      "Strona internetowa kancelarii powinna pomagać klientowi ustalić, czy zajmujesz się jego sprawą, kto może mu pomóc i jak umówić pierwszą rozmowę. Nie wystarczy elegancki projekt ze zdjęciem Temidy i listą dziedzin prawa. Potrzebujesz czytelnej struktury, konkretnych informacji o zakresie pomocy i kontaktu, który nie wymaga od odwiedzającego opisywania całej sprawy w formularzu.",
      "Projektuję i wdrażam takie strony samodzielnie, od pierwszej rozmowy po publikację. Nie przekazuję projektu między grafikiem, programistą i osobą odpowiedzialną za treści. Dzięki temu od początku mogę połączyć wymagania Twojej kancelarii z możliwościami technicznymi strony. Ustalimy, które podstrony są potrzebne na start, jak przedstawić prawników i co przygotować, żeby później samodzielnie rozwijać serwis."
    ],
    "sections": [
      {
        "id": "klient-powinien-rozpoznac-swoja-sprawe-zanim-do-ciebie-zadzw",
        "heading": "Klient powinien rozpoznać swoją sprawę, zanim do Ciebie zadzwoni",
        "body": [
          "Osoba szukająca adwokata może wiedzieć, że otrzymała pozew, ale niekoniecznie rozumieć, do której dziedziny prawa należy jej problem. Ktoś inny chce uregulować kontakty z dzieckiem albo potrzebuje pomocy przy umowie z kontrahentem. Jeśli na stronie znajdzie wyłącznie hasła „prawo cywilne” i „prawo rodzinne”, nadal musi domyślać się, czy trafił pod właściwy adres.",
          "Dlatego przy tworzeniu strony dla kancelarii rozdzielam specjalizacje na osobne podstrony. Każda opisuje określony zakres pomocy, zamiast powtarzać ogólne informacje o doświadczeniu i zaangażowaniu. Przygotowuję treść tak, żeby odwiedzający mógł przejść od swojego problemu do właściwej dziedziny prawa.",
          "Na podstronie specjalizacji warto uwzględnić:"
        ],
        "list": [
          "rodzaje spraw, którymi rzeczywiście zajmuje się kancelaria,",
          "informacje o tym, komu możesz pomóc w danym obszarze,",
          "prawnika prowadzącego określoną praktykę, jeśli ma to zastosowanie,",
          "sposób umówienia konsultacji i podstawowe informacje organizacyjne."
        ],
        "outro": [
          "Taką strukturę zastosowałem przy stronie kancelarii adwokackiej Marii Piontek w Łodzi. Pięć obszarów prawa, czyli karne, cywilne, rodzinne, administracyjne i gospodarcze, otrzymało opisy pozwalające klientowi rozpoznać rodzaj sprawy.",
          "Nie tworzę przy tym opisów porad prawnych na własną rękę. Ty przekazujesz lub zatwierdzasz informacje merytoryczne, a ja porządkuję je pod kątem czytelności, nawigacji i prezentacji. W ramach zlecenia przygotuję strukturę specjalizacji odpowiadającą rzeczywistemu zakresowi Twojej praktyki."
        ]
      },
      {
        "id": "strona-dla-adwokata-radcy-prawnego-i-notariusza-wymaga-inneg",
        "heading": "Strona dla adwokata, radcy prawnego i notariusza wymaga innego podejścia",
        "body": [
          "Nie każda kancelaria potrzebuje tego samego zestawu podstron. Różnice wynikają zarówno z rodzaju wykonywanych czynności, jak i sposobu, w jaki klienci szukają informacji.",
          "Strona dla adwokata może koncentrować się na rodzajach prowadzonych spraw i osobie prawnika. Strona dla radcy prawnego obsługującego przedsiębiorców może wymagać podziału na obszary wsparcia firm oraz klientów indywidualnych. Z kolei osoba odwiedzająca stronę notariusza często szuka konkretnej czynności, listy potrzebnych dokumentów albo informacji o umówieniu wizyty."
        ],
        "table": {
          "caption": "Strona dla adwokata, radcy prawnego i notariusza wymaga innego podejścia",
          "head": [
            "Rodzaj kancelarii",
            "Co powinno być szczególnie widoczne",
            "Jak zaprojektuję stronę"
          ],
          "rows": [
            [
              "Adwokat",
              "Rodzaje spraw, specjalizacje, profil zawodowy, kontakt",
              "Oddzielne podstrony dziedzin prawa połączone z profilem adwokata"
            ],
            [
              "Radca prawny",
              "Zakres obsługi firm i osób prywatnych, obszary praktyki",
              "Nawigacja dopasowana do grup klientów i rodzaju świadczonej pomocy"
            ],
            [
              "Notariusz",
              "Czynności notarialne, wymagane dokumenty, adres i organizacja wizyty",
              "Czytelny wykaz czynności oraz łatwy dostęp do informacji praktycznych"
            ]
          ]
        },
        "outro": [
          "To nie są sztywne szablony wynikające wyłącznie z tytułu zawodowego. Jednoosobowa kancelaria radcy prawnego może potrzebować prostszego układu niż wieloosobowa kancelaria adwokacka. Podobnie zakres informacji na stronie notariusza powinien wynikać z faktycznie wykonywanych czynności.",
          "Istotne są również zasady etyki zawodowej właściwe dla poszczególnych zawodów. Nie proponuję treści porównujących kancelarie ani obietnic korzystnego zakończenia sprawy. Twoim zadaniem jest zatwierdzenie komunikacji pod kątem odpowiednich zasad, a moim przygotowanie jej do publikacji.",
          "Zamawiając stronę, otrzymasz projekt dopasowany do własnego zakresu działalności, a nie gotowy układ z podmienioną nazwą kancelarii."
        ]
      },
      {
        "id": "tresci-i-profile-prawnikow-przygotujemy-bez-pisania-wszystki",
        "heading": "Treści i profile prawników przygotujemy bez pisania wszystkiego od zera",
        "body": [
          "Nie musisz dostarczać gotowych tekstów opracowanych pod stronę internetową. Możesz przesłać dotychczasowe opisy usług, biogramy, notatki lub listę spraw, którymi się zajmujesz. Na ich podstawie ułożę strukturę i przygotuję czytelną wersję treści do Twojej akceptacji.",
          "Rozdzielam przy tym informacje o specjalizacjach od informacji o prawnikach. Podstrona dziedziny prawa wyjaśnia, w jakich sprawach kancelaria pomaga. Profil prawnika przedstawia jego kwalifikacje, praktykę zawodową, doświadczenie i ewentualne publikacje. Obie części mogą się wzajemnie łączyć, ale nie powinny zawierać identycznych akapitów.",
          "Jeżeli prowadzisz blog, mogę dodatkowo przygotować szablon artykułów i powiązać publikacje z odpowiednimi dziedzinami prawa. Dzięki temu wyjaśnienie określonego zagadnienia nie będzie oderwane od informacji o usługach kancelarii.",
          "Brak aktualnych zdjęć zespołu nie musi blokować projektu. Mogę oprzeć układ na typografii, odpowiednich odstępach i czytelnej prezentacji danych, a miejsca na fotografie przewidzieć na później. Nie będę zastępował rzeczywistych prawników przypadkowymi zdjęciami osób, które nie pracują w kancelarii.",
          "Najważniejsza pozostaje zgodność treści z rzeczywistą działalnością. Nie wymyślam osiągnięć, specjalizacji ani doświadczenia. W ramach projektu opracuję sposób prezentacji przekazanych materiałów, a Ty zatwierdzisz ich merytoryczną poprawność."
        ]
      },
      {
        "id": "formularz-kontaktowy-nie-powinien-zbierac-calej-historii-spr",
        "heading": "Formularz kontaktowy nie powinien zbierać całej historii sprawy",
        "body": [
          "Pierwszy kontakt z kancelarią różni się od wysłania zwykłego zapytania ofertowego. Odwiedzający może chcieć opisać konflikt rodzinny, sytuację finansową, postępowanie karne albo informacje dotyczące innych osób. Strona nie powinna zachęcać go do przesyłania szczegółowych dokumentów przez podstawowy formularz.",
          "Dlatego ograniczam formularz do niezbędnych danych, takich jak imię, adres e-mail i krótka wiadomość. Stosuję szyfrowane połączenie HTTPS i umieszczam wskazaną przez Ciebie informację dotyczącą przetwarzania danych osobowych. Zakres pól możemy dopasować do tego, jak kancelaria faktycznie obsługuje nowe zapytania.",
          "Równie ważna jest dostępność kontaktu. Numer telefonu, adres e-mail i przyciski powinny być czytelne na telefonie. Formularz projektuję z opisanymi polami, komunikatami błędów i możliwością obsługi klawiaturą, uwzględniając zasady WCAG.",
          "Nie zakładam też automatycznie, że każdy klient powinien wypełnić formularz. W niektórych kancelariach lepiej wyeksponować telefon, w innych kontakt e-mail lub sposób umawiania wizyty. Ustalę to z Tobą przed projektem i wdrożę kontakt odpowiadający organizacji Twojej pracy."
        ]
      },
      {
        "id": "wlasna-domena-poczta-i-wordpress-powinny-zostac-pod-twoja-ko",
        "heading": "Własna domena, poczta i WordPress powinny zostać pod Twoją kontrolą",
        "body": [
          "Domena kancelarii służy nie tylko do otwierania strony. Może być również podstawą zawodowych adresów e-mail i jest elementem codziennej komunikacji z klientami. Dlatego rekomenduję rejestrację domeny i hostingu na kancelarię, zamiast pozostawiania ich na koncie wykonawcy.",
          "Przy rozpoczęciu współpracy ustalimy, kto zarządza domeną, gdzie działa poczta i kto otrzymuje powiadomienia o odnowieniach. Pomogę uporządkować techniczną konfigurację, ale dostęp do najważniejszych usług powinien pozostać po Twojej stronie.",
          "Typową stronę kancelarii wdrażam na WordPressie z autorskim motywem i polami ACF. Nie korzystam z Elementora, Divi ani Avady. Projektuję edytowalne sekcje zgodnie z zaakceptowanym wyglądem, żeby dodanie nowego opisu lub zmiana biogramu nie wymagały przebudowy układu.",
          "Przy uruchomieniu konfiguruję również podstawowe elementy techniczne związane z widocznością: mapę witryny, nagłówki, Google Search Console i odpowiednie dane strukturalne LocalBusiness lub LegalService. Takie oznaczenia pomagają systemom wyszukiwania identyfikować kancelarię i jej dane, ale nie gwarantują wyświetlenia w odpowiedziach AI.",
          "Po publikacji mogę zapewnić [opiekę nad stroną WordPress](/uslugi/opieka-wordpress) w miesięcznym abonamencie bez umowy na rok. Samo wdrożenie nie uzależnia jednak Twojej strony od stałej współpracy ze mną."
        ]
      },
      {
        "id": "zakres-strony-dobieram-do-liczby-specjalizacji-i-wielkosci-z",
        "heading": "Zakres strony dobieram do liczby specjalizacji i wielkości zespołu",
        "body": [
          "Nowa kancelaria prowadząca kilka obszarów praktyki może zacząć od niewielkiej strony z prezentacją prawnika, opisami usług i kontaktem. Nie musi od razu zamawiać rozbudowanej bazy wiedzy ani dodatkowych funkcji, których nie będzie wykorzystywać.",
          "Większy serwis ma sens, kiedy pojawiają się kolejne specjalizacje, prawnicy, lokalizacje lub wersje językowe. Każdy dodatkowy typ treści wymaga zaplanowania sposobu wyświetlania i edycji. Profile zespołu, artykuły i podstrony usług powinny też być ze sobą logicznie połączone.",
          "Jeżeli planujesz regularne publikowanie poradników, przygotuję kategorie, szablony i powiązania z ofertą. Sama obecność bloga nie gwarantuje ruchu z Google. Ważna jest tematyka, poprawność merytoryczna oraz dalsze rozwijanie treści. Więcej o organizacji takiej witryny przeczytasz w materiale o [pozycjonowaniu strony usługowej](/blog/pozycjonowanie-strony-uslugowej).",
          "Nie proponuję rozbudowy wyłącznie po to, żeby strona sprawiała wrażenie większej. Jeśli wystarczy prostszy serwis, uwzględnię to w ofercie. Jeśli potrzebujesz wielu powiązanych podstron, przygotuję strukturę umożliwiającą późniejszy rozwój bez projektowania wszystkiego ponownie.",
          "Po rozmowie i briefie określę zakres szablonów, treści oraz funkcji, które rzeczywiście trzeba uwzględnić w wycenie."
        ]
      },
      {
        "id": "projekt-zatwierdzisz-przed-kodowaniem-a-po-starcie-samodziel",
        "heading": "Projekt zatwierdzisz przed kodowaniem, a po starcie samodzielnie zmienisz treści",
        "body": [
          "Współpracę zaczynam od rozmowy online i zebrania materiałów. Następnie przygotowuję strukturę strony oraz makiety w Figmie. Otrzymujesz dwie tury poprawek i zatwierdzasz projekt, zanim rozpocznę wdrożenie.",
          "Podczas kodowania udostępniam link do wersji testowej po kolejnych etapach. Możesz sprawdzić, jak wyglądają specjalizacje, profile i formularz, zanim strona zostanie opublikowana pod docelowym adresem.",
          "Przed przekazaniem sprawdzam działanie na urządzeniach mobilnych, podstawy dostępności i wydajność. Celuję w Lighthouse 90+ na telefonie oraz LCP poniżej 2,5 sekundy. Jeśli zastępujemy istniejącą witrynę, planuję przekierowania 301 i migrację ograniczającą przerwę w działaniu. Nie obiecuję przy tym zachowania dotychczasowych pozycji w wyszukiwarce.",
          "Typowy termin stworzenia strony usługowej kancelarii wynosi 4-6 tygodni. Dokładną datę ustalam po poznaniu liczby specjalizacji, profili, wersji językowych i zakresu materiałów.",
          "Po uruchomieniu przeprowadzę szkolenie online z obsługi panelu i pokażę Ci, jak aktualizować treści. Otrzymasz również 60 dni gwarancji i bezpłatnych poprawek. Jeśli chcesz zlecić mi nową stronę dla kancelarii, prześlij informacje o swojej praktyce przez formularz kontaktowy. Na ich podstawie przygotuję wycenę obejmującą zakres prac i termin realizacji."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-gabinetow-i-klinik": {
    "heading": "Strona internetowa dla gabinetu kosmetycznego i kliniki: od cennika zabiegów do rejestracji online",
    "intro": [
      "Strona internetowa dla gabinetu powinna odpowiadać na pytania, z którymi pacjenci najczęściej dzwonią do recepcji: ile kosztuje zabieg, jak długo trwa, kto go wykonuje i gdzie można sprawdzić wolne terminy. Jeśli te informacje są rozrzucone po kilku podstronach albo dostępne wyłącznie przez telefon, nawet zainteresowana osoba może mieć problem z umówieniem wizyty. Dlatego projektuję strony, na których poznanie oferty i przejście do rejestracji tworzą jedną, zrozumiałą ścieżkę.",
      "Przy tworzeniu stron dla gabinetów i klinik zaczynam od tego, jak placówka rzeczywiście pracuje. Gabinet kosmetologii z rozbudowanym cennikiem potrzebuje innego układu niż fizjoterapeuta przyjmujący po wcześniejszej konsultacji. Nie każda usługa nadaje się też do natychmiastowej rezerwacji. Pokażę Ci, jak porządkuję zabiegi, podłączam istniejący system zapisów, prezentuję specjalistów i przygotowuję stronę do samodzielnej edycji. Dzięki temu przed zleceniem projektu możesz ustalić, jakie informacje i funkcje będą potrzebne w Twojej placówce."
    ],
    "sections": [
      {
        "id": "rejestracja-online-powinna-zaczynac-sie-przy-konkretnym-zabi",
        "heading": "Rejestracja online powinna zaczynać się przy konkretnym zabiegu",
        "body": [
          "Wyobraź sobie, że pacjent czyta opis kriolipolizy. Sprawdził wskazania, cenę i czas trwania. Chce zobaczyć dostępne terminy, ale na stronie znajduje tylko ogólny przycisk „Kontakt”. Musi zadzwonić albo samodzielnie szukać zabiegu w zewnętrznym kalendarzu.",
          "Dlatego przycisk „Umów wizytę” umieszczam przy konkretnej usłudze, a nie wyłącznie w menu. Po kliknięciu pacjent powinien trafić możliwie blisko właściwego terminu. Jeśli system rezerwacyjny na to pozwala, kieruję go bezpośrednio do wybranego zabiegu. Jeżeli udostępnia tylko ogólny profil placówki, projektuję przejście uwzględniające to ograniczenie.",
          "Nie piszę własnego systemu rezerwacji. Sprawdzam, czy mogę połączyć stronę z rozwiązaniem, którego już używasz, na przykład Booksy, Versum albo ZnanyLekarz. Zakres integracji zależy od możliwości konkretnego narzędzia. Nie każdy system pozwala otworzyć określoną usługę, osadzić kalendarz czy automatycznie przekazywać informacje.",
          "Czasami lepszy będzie prosty formularz kontaktowy. Dotyczy to między innymi usług wymagających wcześniejszej konsultacji lub indywidualnego ustalenia zakresu wizyty. Taki formularz ograniczam do danych potrzebnych do kontaktu, bez zbierania informacji o zdrowiu. Osobno przygotowuję zgody i informacje o przetwarzaniu danych do zatwierdzenia przez placówkę.",
          "Przy wdrożeniu testuję całą ścieżkę, od opisu zabiegu do otwarcia właściwego sposobu rejestracji, również na telefonie."
        ]
      },
      {
        "id": "cennik-zabiegow-i-opisy-uslug-powinny-odpowiadac-na-pytania",
        "heading": "Cennik zabiegów i opisy usług powinny odpowiadać na pytania przed wizytą",
        "body": [
          "Pacjent nie zawsze zna profesjonalną nazwę zabiegu. Może szukać sposobu rozwiązania konkretnego problemu albo porównywać kilka dostępnych procedur. Jeśli strona gabinetu kosmetycznego pokazuje tylko listę nazw i cen, trudno mu ocenić różnice.",
          "Zaczynam więc od uporządkowania oferty w czytelne kategorie. Każda prowadzi do odpowiednich usług, a z cennika można przejść do pełnego opisu. Przy większej liczbie zabiegów przygotowuję powtarzalny układ podstron, żeby pacjent za każdym razem znajdował informacje w tych samych miejscach.",
          "Na podstronie konkretnego zabiegu przewiduję miejsce na:"
        ],
        "list": [
          "Cenę zabiegu lub informację, od czego zależy ostateczny koszt, oraz czas trwania wizyty.",
          "Wskazania i przeciwwskazania, w tym sytuacje wymagające wcześniejszej konsultacji.",
          "Przygotowanie do wizyty, przebieg zabiegu i istotne zalecenia.",
          "Informację o specjaliście wykonującym usługę i sposób umówienia terminu."
        ],
        "outro": [
          "Nie uzupełniam tych informacji własnymi domysłami. Materiały dotyczące przebiegu zabiegów, przeciwwskazań i zaleceń powinny pochodzić od Twojego zespołu i zostać przez niego zatwierdzone. Moim zadaniem jest nadanie im czytelnej struktury.",
          "W WordPressie przygotowuję osobne pola na cenę, czas trwania, opis i pozostałe ustalone informacje. Jeśli zmienisz cennik albo dodasz usługę, nie będziesz musiał przebudowywać całej podstrony.",
          "Tak zaprojektowana strona dla kliniki pozwala pacjentowi porównać zabiegi bez przeskakiwania między plikami PDF, wiadomościami i kalendarzem. Przy wdrożeniu łączę cennik z opisami oraz rejestracją, żeby każda z tych części prowadziła do kolejnego potrzebnego kroku."
        ]
      },
      {
        "id": "profile-specjalistow-pomagaja-pacjentowi-wybrac-wlasciwa-oso",
        "heading": "Profile specjalistów pomagają pacjentowi wybrać właściwą osobę",
        "body": [
          "W gabinecie fizjoterapii, stomatologii czy klinice kosmetologii sama nazwa zabiegu nie zawsze wystarczy do podjęcia decyzji. Pacjent może chcieć wiedzieć, kto przeprowadza konsultację, jakie ma kwalifikacje i czy zajmuje się daną usługą.",
          "Dlatego przygotowuję profile specjalistów zawierające ich kwalifikacje, zakres wykonywanych świadczeń, miejsce przyjęć i zdjęcie, jeśli placówka chce je publikować. Z profilu można przejść do powiązanych usług oraz rejestracji, o ile wykorzystywany system umożliwia odpowiedni wybór specjalisty.",
          "Nie ograniczam tej sekcji do przypadkowej galerii portretów. Ważniejsze od samego zdjęcia jest wyjaśnienie, czym dana osoba zajmuje się w placówce. Przy rozbudowanym zespole porządkuję również specjalizacje, aby pacjent nie musiał czytać każdego profilu w poszukiwaniu właściwej osoby.",
          "Takie rozwiązanie uwzględniłem w stronie kliniki kosmetologii Queen Scarlet, przygotowanej w 2024 roku na WordPressie. Projekt obejmował układ oferty zabiegowej, między innymi kriolipolizy i laserowej stymulacji kolagenu, profili specjalistów oraz zapisów.",
          "Nie przypisuję tej realizacji wyników, których nie mierzyłem. Pokazuje ona natomiast, jak można uporządkować różne rodzaje informacji w jednej witrynie. Przy podobnym zleceniu projektuję wspólną strukturę opisów zabiegów i zespołu, dopasowaną do faktycznej oferty Twojego gabinetu."
        ]
      },
      {
        "id": "zdjecia-przed-i-po-wymagaja-zgody-oraz-rzeczowego-opisu",
        "heading": "Zdjęcia przed i po wymagają zgody oraz rzeczowego opisu",
        "body": [
          "Galeria efektów może pomóc pacjentowi zrozumieć charakter zabiegu. Nie powinna jednak sugerować, że rezultat pokazany na fotografii wystąpi u każdej osoby.",
          "Zdjęcia przed i po umieszczam wyłącznie w zakresie materiałów, do których publikacji placówka ma odpowiednie zgody. Przygotowuję miejsce na opis wykonanej procedury i istotny kontekst, bez obiecywania określonego rezultatu. Właściciel gabinetu zatwierdza materiały oraz potwierdza możliwość ich wykorzystania.",
          "Ma to znaczenie szczególnie w przypadku usług medycznych, których reklama podlega ograniczeniom. Strona powinna rzetelnie informować o świadczeniach, zamiast opierać przekaz na gwarancjach efektu czy przesadnych obietnicach.",
          "Galeria to również kwestia techniczna. Fotografie wykonane aparatem lub telefonem mogą mieć duże rozmiary, a ich niepotrzebne ładowanie spowalnia witrynę. Przygotowuję więc obrazy w formatach WebP lub AVIF, dopasowuję ich rozdzielczość i sposób wyświetlania.",
          "Przy wdrożeniu układam zdjęcia w czytelną galerię, dbam o ich wydajność i pozostawiam możliwość późniejszej aktualizacji materiałów w WordPressie."
        ]
      },
      {
        "id": "profil-firmy-w-google-i-strona-gabinetu-powinny-zawierac-spo",
        "heading": "Profil Firmy w Google i strona gabinetu powinny zawierać spójne dane",
        "body": [
          "Pacjent może trafić na Twój gabinet przez Google, mapę albo bezpośrednio przez stronę. W każdym z tych miejsc powinien zobaczyć zgodne informacje.",
          "Nazwa placówki, adres, numer telefonu i godziny otwarcia wymagają szczególnej uwagi. Jeśli Profil Firmy w Google podaje inne godziny niż strona, pacjent może nie wiedzieć, które są aktualne. Podobny problem powstaje przy zmianie lokalizacji albo numeru rejestracji.",
          "Na stronie umieszczam czytelne dane kontaktowe, informacje o dojeździe i mapę. Przygotowuję również dane strukturalne placówki, czyli informacje zapisane w formacie ułatwiającym wyszukiwarce rozpoznanie rodzaju działalności, adresu i innych podstawowych danych.",
          "Podczas wdrożenia zajmuję się także strukturą nagłówków, mapą strony dla wyszukiwarek i konfiguracją Google Search Console. Dla ważnych zabiegów przewiduję oddzielne podstrony z rzeczowymi opisami, zamiast powtarzać nazwę miasta w każdym akapicie.",
          "Nie obiecuję konkretnych pozycji w Google. Mogę natomiast zadbać o techniczne podstawy strony i spójne przedstawienie informacji o Twojej placówce.",
          "Jeżeli chcesz mierzyć zainteresowanie zapisami, konfiguruję także Google Analytics 4, czyli GA4. Uruchamiam je dopiero po wymaganej zgodzie na cookies i ustawiam pomiar kliknięć w przyciski rezerwacji. Dzięki temu można sprawdzić, z których podstron użytkownicy przechodzą do zapisów. Samo kliknięcie nie potwierdza jednak, że wizyta została zarezerwowana."
        ]
      },
      {
        "id": "portal-rezerwacyjny-i-wlasna-strona-pelnia-rozne-funkcje",
        "heading": "Portal rezerwacyjny i własna strona pełnią różne funkcje",
        "body": [
          "Jeśli masz już profil w Booksy albo innym portalu, możesz zastanawiać się, czy potrzebujesz dodatkowo własnej witryny. Te rozwiązania nie muszą ze sobą konkurować.",
          "Portal udostępnia mechanizm rezerwacji według zasad swojej platformy. Własna strona daje więcej miejsca na przedstawienie oferty, wyjaśnienie przebiegu zabiegów, cennik i informacje o zespole."
        ],
        "table": {
          "caption": "Portal rezerwacyjny i własna strona pełnią różne funkcje",
          "head": [
            "Obszar",
            "Portal rezerwacyjny",
            "Własna strona gabinetu"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Zapisy",
              "Udostępnia kalendarz i obsługuje rezerwacje według swoich funkcji.",
              "Kieruje pacjenta do właściwej usługi w portalu lub do formularza."
            ],
            [
              "Cennik",
              "Prezentuje ceny w układzie narzuconym przez platformę.",
              "Pozwala tworzyć własne kategorie i rozbudowane opisy zabiegów."
            ],
            [
              "Specjaliści",
              "Pokazuje informacje w ramach dostępnych pól profilu.",
              "Daje miejsce na kwalifikacje, zdjęcia i szczegółowy zakres usług."
            ],
            [
              "Wygląd",
              "Zależy od szablonu operatora.",
              "Możesz dopasować układ do identyfikacji swojej placówki."
            ],
            [
              "Treści poradnikowe",
              "Możliwości publikacji zależą od portalu.",
              "Możesz rozwijać własne podstrony zabiegów i poradniki."
            ],
            [
              "Domena",
              "Profil działa w serwisie operatora.",
              "Treści publikujesz pod własnym adresem internetowym."
            ]
          ]
        },
        "outro": [
          "Nie ma potrzeby przenosić całego procesu rezerwacji na stronę gabinetu. Jeśli obecny system dobrze obsługuje terminy, pozostawiam go w tej roli. Strona internetowa wyjaśnia ofertę, przedstawia specjalistów i prowadzi pacjenta do właściwego miejsca zapisu.",
          "W nowych projektach WordPress używam własnego motywu i pól ACF, które pozwalają edytować ustalone sekcje zgodnie z projektem. Nie opieram ich na kreatorach Elementor, Divi czy Avada. Dzięki temu możesz samodzielnie aktualizować ceny, zabiegi i informacje o zespole bez przebudowy wyglądu witryny.",
          "Przy wdrożeniu sprawdzam też działanie wszystkich przejść między własną stroną a portalem. Pacjent nie powinien trafiać z opisu konkretnego zabiegu w miejsce, w którym musi od początku szukać odpowiedniej usługi, jeśli system pozwala tego uniknąć."
        ]
      },
      {
        "id": "koszt-i-czas-przygotowania-strony-zaleza-od-zakresu-oferty-o",
        "heading": "Koszt i czas przygotowania strony zależą od zakresu oferty oraz zapisów",
        "body": [
          "Nie wyceniam strony dla gabinetu wyłącznie na podstawie liczby zakładek. Dwie placówki mogą mieć podobną liczbę podstron, ale zupełnie inny zakres prac.",
          "Największą różnicę może stanowić rejestracja. Zwykłe przekierowanie do portalu jest prostsze niż integracja wymagająca dodatkowej konfiguracji, o ile system udostępnia odpowiednie możliwości. Istotne jest również, ile informacji trzeba uporządkować przed rozpoczęciem projektowania.",
          "Przy wycenie biorę pod uwagę przede wszystkim:"
        ],
        "list": [
          "Liczbę zabiegów, kategorii i indywidualnych podstron usług.",
          "Rozbudowanie cennika i zakres danych do samodzielnej edycji.",
          "Liczbę profili specjalistów oraz sposób powiązania ich z usługami.",
          "Galerię efektów, przygotowanie zdjęć i układ opisów.",
          "Sposób podłączenia rezerwacji oraz stan obecnej strony, jeśli ją wymieniamy."
        ],
        "outro": [
          "Typowy termin realizacji strony usługowej wynosi 4-6 tygodni. Zaczynam od briefu i uporządkowania materiałów, następnie przygotowuję makiety w Figmie. Przewiduję dwie tury poprawek i rozpoczynam kodowanie po zatwierdzeniu projektu.",
          "Po wdrożeniu testuję stronę na telefonie, w tym cennik, formularz i przyciski rezerwacji. Przed oddaniem sprawdzam mobilny wynik Lighthouse, dążąc do 90+ punktów oraz LCP poniżej 2,5 sekundy. LCP oznacza czas potrzebny na wyświetlenie głównego elementu widocznej części strony.",
          "Jeśli masz już witrynę, nie zawsze trzeba budować wszystko od początku. Sprawdzam, czy obecny układ odpowiada potrzebom placówki, czy można zachować treści i czy problemem nie jest przede wszystkim wolne działanie. W takim przypadku osobnym rozwiązaniem może być [przyspieszenie istniejącej witryny](/uslugi/przyspieszanie-stron-wordpress).",
          "Przy wymianie strony planuję również przekierowania 301 ze starych adresów i możliwie krótką przerwę podczas migracji. Po publikacji pokazuję Ci online, jak aktualizować zabiegi, cennik oraz profile zespołu. Zapewniam 60 dni gwarancji i bezpłatnych poprawek objętych jej zakresem, a dalsza opieka jest opcjonalna.",
          "Po krótkiej rozmowie i briefie przygotuję wycenę z zakresem prac oraz terminem. Będziesz wiedzieć, które elementy strony wykonam, jak połączę ją z rejestracją i jakie materiały musisz dostarczyć, zanim rozpoczniemy projekt."
        ]
      }
    ]
  },
  "tworzenie-sklepow-internetowych-dla-marek-odziezowych": {
    "heading": "Sklep internetowy dla marki odzieżowej: jak wybrać platformę i przygotować sprzedaż",
    "intro": [
      "Sklep internetowy z odzieżą powinien pozwalać klientowi wybrać właściwy rozmiar, sprawdzić dostępność konkretnego koloru i złożyć zamówienie bez dodatkowych pytań. Dla Ciebie równie ważne jest to, co dzieje się po zakupie. Stany magazynowe muszą zgadzać się między sklepem a Allegro, zamówienia trafiać do właściwego systemu, a nowe kolekcje powinny dać się publikować bez przebudowy całej strony.",
      "Przy projektowaniu sklepu dla marki odzieżowej patrzę więc szerzej niż na sam wygląd. Sprawdzam strukturę katalogu, sposób prezentowania wariantów produktu, integracje i obsługę zamówień. Inaczej przygotuję sklep dla niewielkiej marki wypuszczającej sezonowe kolekcje, a inaczej dla firmy, która ma rozbudowany katalog i prowadzi sprzedaż w kilku kanałach. Poniżej pokazuję, jakie decyzje podejmuję przed wdrożeniem i jak rozwiązuję konkretne problemy na przykładzie LumiKids."
    ],
    "sections": [
      {
        "id": "woocommerce-shopify-czy-shoper-ktora-platforme-wybrac-dla-ma",
        "heading": "WooCommerce, Shopify czy Shoper: którą platformę wybrać dla marki odzieżowej?",
        "body": [
          "Nie każda marka potrzebuje sklepu pisanego na zamówienie. Jeśli masz niewielki katalog, standardowe warianty i chcesz korzystać z gotowych rozwiązań, Shopify albo Shoper mogą wystarczyć. Obie platformy działają w modelu abonamentowym, a zakres zmian zależy od dostępnych funkcji, aplikacji i integracji.",
          "WooCommerce daje większą swobodę. Mogę zaprojektować własną kartę produktu, zmienić sposób wybierania rozmiarów, przygotować nietypowe strony kolekcji i dopasować panel administracyjny do Twojego sposobu pracy. Sklep działa na WordPressie, na wybranym hostingu, a jego rozwój nie jest ograniczony wyłącznie do funkcji jednego dostawcy."
        ],
        "table": {
          "caption": "WooCommerce, Shopify czy Shoper: którą platformę wybrać dla marki odzieżowej?",
          "head": [
            "Kryterium",
            "WooCommerce",
            "Shopify",
            "Shoper"
          ],
          "rows": [
            [
              "---",
              "---",
              "---",
              "---"
            ],
            [
              "Sposób działania",
              "Własny sklep na WordPressie i hostingu",
              "Platforma abonamentowa",
              "Platforma abonamentowa"
            ],
            [
              "Utrzymanie",
              "Hosting, domena i ewentualne płatne rozszerzenia",
              "Abonament i ewentualne aplikacje",
              "Abonament i ewentualne dodatki"
            ],
            [
              "Projekt graficzny",
              "Duża swoboda tworzenia własnych szablonów",
              "Zmiany w ramach motywu i możliwości platformy",
              "Zmiany w ramach dostępnych szablonów i funkcji"
            ],
            [
              "Warianty produktu",
              "Możliwość własnej konfiguracji rozmiarów, kolorów i ich prezentacji",
              "Obsługa wariantów w ramach funkcji platformy",
              "Obsługa wariantów w ramach funkcji platformy"
            ],
            [
              "Allegro i systemy zamówień",
              "Integracje bezpośrednie lub przez BaseLinker",
              "Zależnie od dostępnych aplikacji",
              "Zależnie od dostępnych integracji"
            ],
            [
              "Rozbudowa funkcji",
              "Własny kod i rozszerzenia",
              "Aplikacje i możliwości udostępnione przez platformę",
              "Dodatki i możliwości udostępnione przez platformę"
            ]
          ]
        },
        "outro": [
          "Przy nowych projektach WooCommerce tworzę własny motyw WordPress bez Elementora, Divi i podobnych kreatorów. Sekcje edytowalne przygotowuję przy pomocy ACF, czyli pól w panelu odpowiadających konkretnym elementom projektu. Możesz zmienić zdjęcie kolekcji, opis lub produkty na stronie, nie ingerując w układ.",
          "Przy większym katalogu lub bardziej złożonych wymaganiach rozważam też Next.js w architekturze headless, gdzie interfejs sklepu działa oddzielnie od systemu zarządzania produktami. Nie proponuję jednak takiego rozwiązania tylko dlatego, że jest bardziej rozbudowane. Platformę dobieram do rzeczywistych potrzeb Twojej marki, liczby wariantów i sposobu obsługi sprzedaży."
        ]
      },
      {
        "id": "tabela-rozmiarow-musi-odpowiadac-konkretnemu-ubraniu",
        "heading": "Tabela rozmiarów musi odpowiadać konkretnemu ubraniu",
        "body": [
          "Klient ogląda bluzę w rozmiarze M, ale nie wie, czy będzie luźna, czy dopasowana. Przechodzi do tabeli rozmiarów i widzi wyłącznie obwód klatki piersiowej, bez informacji, czy chodzi o wymiary ciała, czy samego ubrania. Taka tabela nie rozwiązuje problemu.",
          "W sklepie odzieżowym tabela rozmiarów powinna jasno pokazywać, co zostało zmierzone i w jaki sposób. Przy bluzie mogą być istotne szerokość pod pachami i długość rękawa, przy spodniach pas i długość nogawki, a przy sukience również długość całkowita. Jeśli różne fasony mają inną rozmiarówkę, nie przypisuję im jednej uniwersalnej tabeli.",
          "Na karcie produktu przewiduję miejsce na:"
        ],
        "list": [
          "wymiary ubrania i krótką instrukcję mierzenia,",
          "informację o fasonie, na przykład dopasowanym lub luźnym,",
          "skład tkaniny i istotne właściwości materiału,",
          "wzrost modelki lub modela oraz prezentowany rozmiar, jeśli marka ma takie dane,",
          "zdjęcia poszczególnych kolorów i charakterystycznych detali."
        ],
        "outro": [
          "W LumiKids, sklepie z odzieżą dziecięcą i młodzieżową marek Sówka i OliLeo, przebudowałem karty produktów, dodając tabele rozmiarów i informacje o składzie tkanin. Sklep oferuje między innymi komplety, bluzy, sukienki i ubrania na komunię, dlatego sposób prezentacji wymiarów trzeba dopasować do różnych typów ubrań.",
          "Ważna jest też sama dostępność. W LumiKids występował błąd, przez który produkt wyświetlał się jako dostępny, mimo że wszystkie jego rozmiary miały zerowy stan magazynowy. Sklep odczytywał flagę dostępności produktu głównego zamiast stanów poszczególnych wariantów.",
          "Zmieniłem logikę tak, aby dostępność wynikała z wariantów. Wyprzedany rozmiar pozostał na liście, ale jest wyszarzony i przekreślony. Poprawiłem również komunikat dodania do koszyka, który pojawia się dopiero po rzeczywistym dodaniu produktu.",
          "Przy Twoim wdrożeniu konfiguruję i testuję osobno rozmiary, kolory, ich stany magazynowe oraz zachowanie koszyka."
        ]
      },
      {
        "id": "kolekcje-dropy-i-przedsprzedaz-potrzebuja-wlasnych-stron",
        "heading": "Kolekcje, dropy i przedsprzedaż potrzebują własnych stron",
        "body": [
          "Nowa kolekcja nie musi być kolejną kategorią z siatką produktów. Jeśli przygotowujesz premierę na Instagramie, możesz kierować odbiorców na stronę przedstawiającą całą kolekcję: zdjęcia, najważniejsze modele, dostępne kolory i przejścia do konkretnych produktów.",
          "Projektuję takie strony w sposób umożliwiający samodzielną edycję. Możesz zmieniać materiały sezonowe, kolejność produktów i treści bez zamawiania nowego projektu przy każdej premierze.",
          "Przy planowaniu dropów rozdzielam trzy sytuacje:"
        ],
        "list": [
          "zapowiedź produktu, który nie jest jeszcze dostępny do zakupu,",
          "rozpoczęcie sprzedaży z aktywnym wyborem wariantów,",
          "wyprzedanie produktu lub konkretnego rozmiaru."
        ],
        "outro": [
          "Jeśli prowadzisz przedsprzedaż, klient musi wiedzieć przed zakupem, kiedy produkt zostanie wysłany. Trzeba również ustalić, co zrobić, gdy w jednym zamówieniu znajdą się ubrania dostępne od ręki i modele przedsprzedażowe. To wpływa nie tylko na kartę produktu, ale także na koszyk, komunikaty i realizację zamówień.",
          "Osobną kwestią są strony odpowiadające konkretnym zapytaniom zakupowym. W LumiKids przygotowałem 12 stron rozmiarowych dla kompletów i spodni dziewczęcych w rozmiarach 134-164. Wynikało to z obserwacji podpowiedzi Google dla fraz dziewczęcych. Dla chłopięcych nie występował taki sam wzorzec.",
          "Nie oznacza to, że każda kombinacja kategorii i rozmiaru potrzebuje własnego adresu. Przy wdrożeniu analizuję strukturę katalogu i przygotowuję tylko te strony kolekcji oraz rozmiarów, które mają uzasadnienie w ofercie i sposobie wyszukiwania produktów."
        ]
      },
      {
        "id": "warianty-i-stany-magazynowe-musza-zgadzac-sie-ze-sprzedaza-n",
        "heading": "Warianty i stany magazynowe muszą zgadzać się ze sprzedażą na Allegro",
        "body": [
          "Sprzedajesz ostatni komplet w rozmiarze 146 na Allegro, ale własny sklep nadal pokazuje go jako dostępny. Klient składa następne zamówienie i dopiero wtedy okazuje się, że produktu zabrakło. Źródłem problemu nie musi być sam sklep. Często trzeba sprawdzić, który system odpowiada za stan magazynowy i w jakim kierunku przekazywane są informacje.",
          "Przed integracją ustalam, gdzie znajduje się główne źródło stanów, cen i danych produktowych. Sprawdzam też sposób powiązania wariantów z ofertami Allegro. Nie wystarczy zsynchronizować produktu głównego, jeśli poszczególne rozmiary mają różną dostępność.",
          "Przy [integracji WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker) konfiguruję przepływ danych zgodnie z obsługiwanymi możliwościami systemów. Testuję również statusy zamówień, ponieważ ich nieprawidłowa zmiana może mieć konsekwencje dla realizacji wysyłki.",
          "W LumiKids znalazłem problem dotyczący zamówień za pobraniem. Integracja z BaseLinkerem cofała ich statusy, przez co WooCommerce anulował zamówienia. Przyczynę ustaliłem na podstawie logów, czyli zapisów działania systemu, a następnie zablokowałem niepożądane zachowanie małą, własną wtyczką.",
          "To przykład sytuacji, której nie rozwiąże zmiana kolorów przycisków ani instalacja kolejnego szablonu. Przy Twoim wdrożeniu sprawdzam rzeczywisty przepływ zamówień i stanów między używanymi kanałami sprzedaży."
        ]
      },
      {
        "id": "sklep-z-ubraniami-musi-byc-wygodny-na-telefonie",
        "heading": "Sklep z ubraniami musi być wygodny na telefonie",
        "body": [
          "Klient otwiera link z Instagrama i chce obejrzeć sukienkę. Najpierw musi znaleźć zdjęcia, później rozmiar, następnie tabelę wymiarów i informację o dostawie. Jeżeli elementy nachodzą na siebie albo zasłaniają przycisk zakupu, nawet atrakcyjny projekt staje się niewygodny.",
          "W LumiKids większość ruchu pochodziła z telefonów. Jednym z problemów była wyszukiwarka, która ucinała pole wpisywania. Poprawiłem ją, aby użytkownik mógł wygodnie wyszukiwać ubrania na małym ekranie.",
          "Przy projektowaniu mobilnym sprawdzam nie tylko wygląd strony głównej. Ważne są również filtry, zdjęcia, wybór wariantów, komunikaty dostępności i cały proces zamówienia. Dbam o to, aby przycisk dodania do koszyka działał dopiero po prawidłowym wybraniu dostępnego produktu.",
          "Osobno zajmuję się wydajnością. Zdjęcia kolekcji potrzebują dobrej jakości, ale zbyt ciężkie pliki mogą opóźniać wyświetlanie strony. Optymalizuję obrazy, kod i ładowanie najważniejszych elementów. Przed oddaniem sklepu celem jest Lighthouse 90+ na telefonie oraz LCP poniżej 2,5 sekundy. LCP to czas wyświetlenia największego widocznego elementu strony.",
          "Konfiguruję również dane strukturalne produktów, mapę strony, Search Console i pomiar GA4 uruchamiany po zgodzie na cookies. Dzięki temu sklep ma przygotowane podstawy techniczne do monitorowania wyszukiwania i ścieżki zakupowej, bez obiecywania określonych pozycji w Google."
        ]
      },
      {
        "id": "promocje-zwroty-i-dane-produktu-trzeba-uwzglednic-przed-uruc",
        "heading": "Promocje, zwroty i dane produktu trzeba uwzględnić przed uruchomieniem",
        "body": [
          "Jeżeli planujesz promocje kolekcji, sposób prezentacji cen powinien być przewidziany już podczas projektowania kart produktów. Przy komunikowaniu obniżki obowiązuje zasada pokazywania najniższej ceny z 30 dni przed jej wprowadzeniem, wynikająca z przepisów określanych jako Omnibus.",
          "Przygotowuję odpowiednie miejsce na taką informację, zarówno na karcie produktu, jak i w uzgodnionych widokach promocyjnych. Nie traktuję jej jako przypadkowego dopisku pod ceną.",
          "Podobnie wygląda obsługa zwrotów. Konsument kupujący przez internet co do zasady ma 14 dni na odstąpienie od umowy, z określonymi prawnie wyjątkami. Sklep powinien udostępniać zrozumiałą procedurę, formularz i wymagane informacje. Mogę przygotować ich prezentację oraz powiadomienia, natomiast treść dokumentów prawnych musi zostać przez Ciebie zatwierdzona, samodzielnie lub po konsultacji z prawnikiem.",
          "Trzeba też uwzględnić GPSR, czyli unijne przepisy dotyczące ogólnego bezpieczeństwa produktów, obowiązujące od 13 grudnia 2024 roku. Oferta internetowa powinna przewidywać prezentację wymaganych danych producenta, a w odpowiednich przypadkach również innych podmiotów odpowiedzialnych i informacji dotyczących bezpieczeństwa.",
          "W sklepie odzieżowym znaczenie mają ponadto informacje o składzie materiałowym oraz właściwe oznaczenia produktów. Przy wdrożeniu przygotowuję pola i układ kart produktów do wyświetlania danych, które dostarczasz dla swojej oferty, a zakres obowiązków prawnych ustalasz na podstawie swojej sytuacji."
        ]
      },
      {
        "id": "koszt-i-termin-wdrozenia-zaleza-od-wariantow-integracji-i-mi",
        "heading": "Koszt i termin wdrożenia zależą od wariantów, integracji i migracji",
        "body": [
          "Dwa sklepy mogą mieć po kilkadziesiąt modeli ubrań, a mimo to wymagać zupełnie innego nakładu pracy. W jednym każdy produkt ma kilka prostych wariantów. W drugim występują osobne zdjęcia kolorów, różne tabele rozmiarów, stany magazynowe, kolekcje sezonowe i synchronizacja z Allegro.",
          "Przy wycenie sprawdzam przede wszystkim liczbę wariantów i szablonów, zakres integracji oraz to, czy przenosimy dane ze starego sklepu. Migracja wymaga sprawdzenia eksportu produktów, kategorii i wariantów, a przy zmianie adresów przygotowania przekierowań 301. Planuję uruchomienie tak, aby ograniczyć przerwę w działaniu, choć przy zmianie DNS może wystąpić krótka niedostępność.",
          "Mniejszy sklep WooCommerce przygotowuję zwykle w 6-8 tygodni. Bardziej rozbudowane wdrożenia z funkcjami B2B, wersjami językowymi lub migracją mogą zająć 10-14 tygodni. Konkretny harmonogram ustalam po briefie.",
          "Projektuję makiety w Figmie, przewiduję dwie tury poprawek i proszę o akceptację przed rozpoczęciem kodowania. Po kolejnych etapach udostępniam link do wersji testowej. Przed startem sprawdzam zakupy, warianty, płatności i integracje, a następnie szkolę Cię online z obsługi sklepu.",
          "Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek. Jeśli później potrzebujesz pomocy przy kolejnych kolekcjach, aktualizacjach lub rozwoju funkcji, możesz skorzystać z opcjonalnej opieki miesięcznej bez umowy na rok.",
          "Przed wyceną poproszę Cię o informacje o produktach, rozmiarach, obecnych kanałach sprzedaży i materiałach, które masz już przygotowane. Na tej podstawie określę, jakie szablony, integracje i prace nad katalogiem będą potrzebne do uruchomienia Twojego sklepu."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-producentow-mebli": {
    "heading": "Strona internetowa dla producenta mebli: jak zaplanować katalog, wyceny i sprzedaż B2B",
    "intro": [
      "Strona internetowa dla producenta mebli powinna pomagać klientowi znaleźć odpowiedni produkt, sprawdzić jego parametry i przekazać informacje potrzebne do wyceny. Samo pokazanie kolekcji na zdjęciach nie wystarczy, jeśli handlowiec musi później osobno wysyłać wymiary, katalogi PDF i dostępne warianty wykończenia. Przy projektowaniu strony zaczynam więc od sprawdzenia, jak wygląda Twoja oferta, kto ją kupuje i jakie pytania pojawiają się przed zamówieniem.",
      "Inaczej przygotowuję katalog dla fabryki produkującej gotowe kolekcje, inaczej stronę dla stolarni wykonującej zabudowy na wymiar, a jeszcze inaczej serwis producenta akcesoriów współpracującego z salonami i architektami. Każdy z tych modeli wymaga innych informacji i sposobu kontaktu. W swoich projektach wykorzystuję również doświadczenie z Mebloweporady.pl, gdzie opublikowałem ponad 400 poradników o meblach i wnętrzach oraz przygotowałem siedem kalkulatorów w JavaScripcie. Dzięki pracy nad tym serwisem znam pytania, które pojawiają się przy wyborze materiałów, wymiarów i wyposażenia."
    ],
    "sections": [
      {
        "id": "katalog-sklep-czy-formularz-wyceny-powinien-wynikac-ze-sposo",
        "heading": "Katalog, sklep czy formularz wyceny powinien wynikać ze sposobu sprzedaży",
        "body": [
          "Zanim wybiorę technologię, ustalam, czy Twój klient może samodzielnie zamówić produkt. Jeśli sprzedajesz gotowe krzesła, stoły albo akcesoria o ustalonych cenach, sklep internetowy może obsługiwać cały proces zakupu. Klient wybiera wariant, ilość i sposób dostawy, a następnie składa zamówienie.",
          "Przy meblach na wymiar sytuacja wygląda inaczej. Cena może zależeć od szerokości zabudowy, rodzaju frontów, wyposażenia, wykończenia i montażu. Zwykły koszyk nie zbierze wszystkich informacji potrzebnych do przygotowania oferty. W takim przypadku projektuję katalog z formularzem wyceny albo mechanizmem konfiguracji produktu."
        ],
        "table": {
          "caption": "Katalog, sklep czy formularz wyceny powinien wynikać ze sposobu sprzedaży",
          "head": [
            "Model strony",
            "Kiedy warto go wybrać",
            "Co robi klient"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Katalog mebli online",
              "Prezentujesz kolekcje, ale zamówienia ustalasz indywidualnie",
              "Porównuje produkty i wysyła zapytanie"
            ],
            [
              "Sklep internetowy",
              "Produkty mają ustalone ceny, warianty i warunki dostawy",
              "Wybiera produkt i składa zamówienie"
            ],
            [
              "Formularz wyceny",
              "Produkujesz meble na wymiar lub potrzebujesz dodatkowych ustaleń",
              "Przekazuje wymiary, materiały i zdjęcia"
            ],
            [
              "Model mieszany",
              "Sprzedajesz zarówno gotowe produkty, jak i wyroby na zamówienie",
              "Kupuje gotowy produkt albo prosi o wycenę"
            ]
          ]
        },
        "outro": [
          "Nie musisz wybierać jednego modelu dla całej oferty. Producent może sprzedawać gotowe akcesoria w sklepie, a przy indywidualnych zabudowach przyjmować zapytania. Ważne, żeby klient od razu wiedział, które produkty kupi samodzielnie, a które wymagają kontaktu.",
          "Przy wdrożeniu rozdzielam te działania na poziomie kategorii i kart produktów. Nie dodaję koszyka tam, gdzie i tak każda cena wymaga osobnych ustaleń."
        ]
      },
      {
        "id": "karta-produktu-powinna-odpowiadac-na-pytania-przed-rozmowa-z",
        "heading": "Karta produktu powinna odpowiadać na pytania przed rozmową z handlowcem",
        "body": [
          "Wyobraź sobie architekta, który szuka nóg do stołu o określonej wysokości. Znajduje zdjęcie produktu, ale nie widzi dokładnych wymiarów, materiału ani pliku technicznego. Musi napisać wiadomość lub otworzyć katalog PDF i samodzielnie odszukać model. To dodatkowa praca, której można uniknąć.",
          "W 2023 roku przygotowałem na WordPressie stronę Multikon, producenta akcesoriów meblowych, nóg i stelaży krzeseł. Oferta tego typu dobrze pokazuje, dlaczego obok fotografii potrzebne są konkretne parametry. Sam wygląd elementu nie mówi jeszcze, czy będzie pasował do projektowanego mebla.",
          "Dlatego przy projektowaniu karty produktu uwzględniam:"
        ],
        "list": [
          "wymiary produktu oraz informację, które parametry można zmienić,",
          "materiał wykonania i dostępne wykończenia,",
          "fotografie pokazujące produkt i jego zastosowanie,",
          "warianty oraz oznaczenia modeli,",
          "pliki do pobrania, takie jak karta techniczna PDF, rysunek DWG lub model produktu,",
          "formularz zapytania przypisany do konkretnego produktu."
        ],
        "outro": [
          "Nie każda karta musi zawierać wszystkie elementy. Jeśli oferujesz meble wykonywane wyłącznie na zamówienie, ważniejsze mogą być przykładowe realizacje i zakres możliwej konfiguracji niż sztywna lista wariantów.",
          "Katalog mebli online powinien też umożliwiać filtrowanie po rzeczywistych cechach produktów. Przy stołach mogą to być wymiary blatu i materiał, przy szafach rodzaj wykończenia, a przy akcesoriach parametry techniczne. Nie tworzę filtrów tylko dlatego, że dobrze wyglądają w projekcie. Każdy musi odpowiadać danym, które jesteś w stanie utrzymywać.",
          "Przy wdrożeniu przygotowuję wspólny szablon karty i strukturę parametrów, żeby kolejne produkty można było dodawać bez projektowania każdej podstrony od początku."
        ]
      },
      {
        "id": "formularz-wyceny-mebli-na-wymiar-musi-zbierac-dane-potrzebne",
        "heading": "Formularz wyceny mebli na wymiar musi zbierać dane potrzebne do przygotowania oferty",
        "body": [
          "Wiadomość „interesuje mnie kuchnia na wymiar, proszę o cenę” nie daje handlowcowi podstaw do wstępnej wyceny. Brakuje wymiarów, rodzaju zabudowy, materiałów i informacji o miejscu realizacji. Rozmowa zaczyna się więc od kolejnych pytań, na które klient mógł odpowiedzieć już podczas pierwszego kontaktu.",
          "Dobry formularz wyceny mebli na wymiar prowadzi użytkownika przez potrzebne informacje, ale nie wymaga od niego znajomości specjalistycznych nazw. Zamiast jednego dużego pola na wiadomość proponuję zestaw prostych pytań z krótkimi podpowiedziami.",
          "Przy zabudowie kuchennej formularz może zbierać szerokość ścian, rodzaj układu, preferowane fronty i zdjęcie pomieszczenia. Przy szafie wnękowej ważne będą wysokość, szerokość i głębokość. Przy wyposażeniu hotelowym potrzebne mogą być rodzaje mebli, liczba pomieszczeń i oczekiwany termin realizacji.",
          "W projekcie Stys-Glass z 2023 roku pracowałem nad stroną firmy zajmującej się hartowaniem szkła, balustradami i lustrami na wymiar. To przykład oferty, przy której wymiary mają bezpośrednie znaczenie dla ustalenia zakresu zlecenia.",
          "Formularz może również umożliwiać dołączenie szkicu, rzutu lub zdjęcia. Nie zastępuje to pomiaru ani rozmowy technicznej, ale pozwala zebrać dane do pierwszej oceny.",
          "Jeśli wycena opiera się na stałych regułach, można pójść dalej. Dla niemieckiego klienta Galabau Darius przygotowałem w Next.js konfigurator ogrodzeń, który oblicza cenę na żywo i ma własny panel administracyjny. Podobne podejście można wykorzystać przy meblach, jeśli da się jednoznacznie określić zależności między wymiarami, materiałami i ceną. Przy bardziej indywidualnych realizacjach lepiej pozostać przy zapytaniu.",
          "Przy wdrożeniu dobieram pola formularza do Twojego procesu wyceny, zamiast używać jednego zestawu pytań dla każdego rodzaju mebli."
        ]
      },
      {
        "id": "katalog-b2b-powinien-rozdzielac-potrzeby-architekta-dystrybu",
        "heading": "Katalog B2B powinien rozdzielać potrzeby architekta, dystrybutora i klienta detalicznego",
        "body": [
          "Klient detaliczny chce zobaczyć, jak mebel wygląda we wnętrzu, jakie ma kolory i gdzie można go kupić. Architekt sprawdza wymiary, materiały i dostępność plików do projektu. Dystrybutor potrzebuje informacji o kolekcjach, dokumentacji oraz warunkach współpracy.",
          "Jeśli wszystkie te grupy trafiają na identyczną stronę produktu, część odbiorców będzie musiała szukać informacji poza serwisem. Dlatego przy tworzeniu stron dla producentów mebli planuję osobne ścieżki dostępu do oferty.",
          "Katalog B2B nie musi od razu oznaczać rozbudowanego systemu zamówień. Czasami wystarczy dobrze uporządkowana sekcja dla partnerów z dokumentami technicznymi, katalogami i formularzem współpracy.",
          "Gdy producent udostępnia kontrahentom inne ceny albo materiały, przygotowuję strefę po zalogowaniu. Można w niej ograniczyć widoczność wybranych plików lub informacji do zatwierdzonych użytkowników. Uprawnienia pozwalają również oddzielić materiały dostępne publicznie od tych przeznaczonych dla konkretnych grup partnerów.",
          "Warto przy tym zadbać o porządek w dokumentacji. Zamiast umieszczać wszystkie katalogi PDF w jednym miejscu, przypisuję pliki do odpowiednich kolekcji, produktów i wariantów. Architekt może wtedy pobrać dokument bez przeszukiwania całego archiwum.",
          "Jeśli katalog wymaga indywidualnych uprawnień, połączeń z innymi systemami lub rozbudowanego panelu, mogę przygotować [aplikację Next.js](/uslugi/aplikacje-nextjs). Nie wybieram jednak bardziej złożonej technologii, jeśli te same potrzeby można obsłużyć prostszym rozwiązaniem na WordPressie.",
          "Przy wdrożeniu ustalam, które informacje mają być publiczne, które wymagają logowania i jak kontrahent będzie otrzymywać dostęp."
        ]
      },
      {
        "id": "import-produktow-i-wersje-jezykowe-trzeba-zaplanowac-przed-b",
        "heading": "Import produktów i wersje językowe trzeba zaplanować przed budową katalogu",
        "body": [
          "Jeśli dziś przechowujesz produkty w arkuszu, a ich opisy w katalogach PDF, nie warto zaczynać od ręcznego przepisywania wszystkiego do WordPressa. Najpierw trzeba ustalić wspólną strukturę danych.",
          "Przykładowo jeden materiał może występować w arkuszu pod kilkoma nazwami, a wymiary mogą być zapisane w różnych formatach. Dopóki nie uporządkujemy tych informacji, filtry nie będą działały spójnie. Klient może nie znaleźć produktu tylko dlatego, że jego parametr został zapisany inaczej niż w pozostałych kartach.",
          "Dlatego przed importem sprawdzam nazwy produktów, oznaczenia wariantów, jednostki wymiarów oraz sposób przypisania zdjęć i dokumentacji. Ustalam też, które pola będą obowiązkowe.",
          "Dopiero wtedy przygotowuję import danych z arkusza lub sprawdzam możliwość integracji z systemem PIM albo ERP. PIM służy do zarządzania informacjami produktowymi, a ERP do zarządzania procesami firmy. Zakres połączenia zależy od możliwości konkretnego systemu i dostępnego sposobu wymiany danych.",
          "Podobnego planowania wymaga katalog przeznaczony dla Polski i Niemiec. Niemiecka wersja strony powinna mieć własne adresy, nazwy kategorii, opisy produktów i metadane. Trzeba też uwzględnić tłumaczenia formularzy oraz dokumentów, jeśli będą udostępniane na obu rynkach.",
          "Nie zakładam, że każda kolekcja musi być identyczna w obu wersjach językowych. Jeżeli niektóre produkty są przeznaczone tylko na jeden rynek, struktura katalogu powinna pozwalać to odzwierciedlić.",
          "Przy wdrożeniu przygotowuję model danych i sposób ich edycji tak, żeby aktualizacja oferty nie wymagała poprawiania tych samych informacji w kilku niezależnych miejscach."
        ]
      },
      {
        "id": "zdjecia-mebli-musza-byc-szczegolowe-ale-nie-powinny-spowalni",
        "heading": "Zdjęcia mebli muszą być szczegółowe, ale nie powinny spowalniać strony",
        "body": [
          "W branży meblowej zdjęcia pokazują fakturę materiału, wykończenie krawędzi, proporcje i sposób wykorzystania produktu we wnętrzu. Nie można więc traktować ich wyłącznie jako dekoracji. Jednocześnie publikowanie wszystkich fotografii w pełnej rozdzielczości może niepotrzebnie obciążyć katalog.",
          "Przygotowując stronę, dobieram rozmiary zdjęć do miejsc, w których będą wyświetlane. Innego pliku potrzebuje miniatura na liście produktów, a innego duża fotografia otwierana w galerii. Stosuję odpowiednie formaty, kompresję i ładowanie zdjęć w kolejności wynikającej z układu strony.",
          "Przed oddaniem projektu sprawdzam wydajność na telefonie w Lighthouse. Moim celem jest wynik 90+ i LCP poniżej 2,5 sekundy. LCP to czas potrzebny do wyświetlenia największego elementu widocznej części strony, którym w katalogu często jest zdjęcie. Wynik weryfikuję pomiarem, a nie samym wyborem technologii.",
          "Równie ważne są informacje towarzyszące fotografiom. Własna strona dla stolarni może prezentować realizacje kuchni, garderób i zabudów, ale przy każdej warto wyjaśnić, co wykonano, jakie materiały zastosowano i które elementy były przygotowane na indywidualne zamówienie.",
          "Oprócz optymalizacji obrazów przygotowuję strukturę nagłówków, mapę strony oraz dane strukturalne produktów. Konfiguruję Google Search Console, a analitykę GA4 uruchamiam po zgodzie użytkownika na cookies. Nie obiecuję konkretnych pozycji w wyszukiwarce, ponieważ samo wdrożenie techniczne ich nie gwarantuje.",
          "Przy wdrożeniu łączę galerię z parametrami produktów i pilnuję, żeby zdjęcia nie utrudniały korzystania z katalogu na telefonie."
        ]
      },
      {
        "id": "koszt-strony-producenta-mebli-zalezy-przede-wszystkim-od-kat",
        "heading": "Koszt strony producenta mebli zależy przede wszystkim od katalogu i sposobu jego obsługi",
        "body": [
          "Dwie strony producentów mebli mogą wyglądać podobnie, ale wymagać zupełnie innego zakresu prac. Jeden katalog zawiera kolekcje z prostymi kartami produktów, a drugi rozbudowane warianty, filtry, dokumentację techniczną i osobne uprawnienia dla kontrahentów.",
          "Dlatego nie wyceniam projektu wyłącznie na podstawie liczby podstron. Sprawdzam, ile produktów i wariantów trzeba obsłużyć, skąd pochodzą dane oraz jak często będą aktualizowane.",
          "Na zakres prac wpływają przede wszystkim:"
        ],
        "list": [
          "liczba produktów, wariantów i parametrów,",
          "stan danych oraz potrzeba ich uporządkowania przed importem,",
          "rodzaje filtrów i zależności między wariantami,",
          "formularze wyceny lub konfigurator produktu,",
          "logowanie kontrahentów i dostęp do zasobów B2B,",
          "wersje językowe oraz ewentualne integracje z innymi systemami."
        ],
        "outro": [
          "Znaczenie ma również przygotowanie obecnych materiałów. Jeśli masz arkusz z kompletnymi parametrami i zdjęciami przypisanymi do produktów, mogę zaplanować import. Jeśli wszystkie dane znajdują się w rozproszonych PDF-ach, wcześniej trzeba ustalić sposób ich uporządkowania.",
          "Typowy termin mniejszego wdrożenia o zakresie zbliżonym do sklepu WooCommerce to 6-8 tygodni. Przy bardziej rozbudowanym katalogu B2B, wielu wersjach językowych lub migracji termin ustalam indywidualnie po analizie danych i funkcji.",
          "Przed rozpoczęciem pracy przeprowadzam rozmowę, sprawdzam materiały i przygotowuję brief. Następnie przedstawiam zakres oraz wycenę. Projektuję makiety w Figmie, uwzględniam dwie tury poprawek i rozpoczynam kodowanie po Twojej akceptacji. Po kolejnych etapach udostępniam wersję testową, na której możesz sprawdzić działanie katalogu.",
          "Po uruchomieniu przeprowadzam szkolenie online z aktualizacji produktów i treści. Otrzymujesz również 60 dni gwarancji i bezpłatnych poprawek. Jeśli później potrzebujesz pomocy z utrzymaniem strony, możesz skorzystać z opcjonalnej opieki w miesięcznym abonamencie bez umowy na rok.",
          "Przy wycenie ustalam nie tylko to, jak katalog ma wyglądać w dniu uruchomienia, ale również jak będziesz dodawać nowe kolekcje, zmieniać materiały i aktualizować dokumentację. Od tego zależy, czy strona będzie wygodnym narzędziem dla Twojej firmy, czy kolejnym miejscem wymagającym ręcznego przepisywania danych."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-hoteli-i-pensjonatow": {
    "heading": "Strona internetowa dla hotelu jako własny kanał rezerwacji",
    "intro": [
      "Strona internetowa dla hotelu, pensjonatu lub apartamentów powinna pozwalać gościowi nie tylko obejrzeć pokoje, ale też sprawdzić dostępność i zarezerwować pobyt. Jeśli większość rezerwacji otrzymujesz z portali, własna witryna może działać jako dodatkowy kanał sprzedaży. Nie wymaga to rezygnowania z Booking.com ani ręcznego przepisywania terminów między kalendarzami. Potrzebujesz jednak odpowiedniej integracji z systemem rezerwacji, czytelnej oferty i strony, która dobrze działa na telefonie.",
      "Przy projektowaniu zaczynam od sprawdzenia, jak obecnie obsługujesz gości. Inaczej wygląda strona dla pensjonatu oferującego pokoje i organizację wydarzeń, a inaczej strona dla apartamentów wynajmowanych na krótkie pobyty. Ustalam, gdzie zarządzasz cenami, jak przyjmujesz płatności i które informacje chcesz samodzielnie edytować. Na tej podstawie projektuję witrynę połączoną z narzędziami, których potrzebujesz do codziennej obsługi obiektu."
    ],
    "sections": [
      {
        "id": "jak-polaczyc-strone-z-silnikiem-rezerwacji-i-kalendarzami-po",
        "heading": "Jak połączyć stronę z silnikiem rezerwacji i kalendarzami portali?",
        "body": [
          "Gość wchodzi na Twoją stronę, wybiera datę przyjazdu, wyjazdu i liczbę osób. Po zatwierdzeniu wyszukiwarka przekazuje te informacje do silnika rezerwacji, na przykład IdoBooking. To silnik sprawdza dostępność, pokazuje możliwe warianty pobytu i obsługuje dalsze etapy zamówienia, w tym płatność.",
          "Silnik rezerwacji i channel manager nie są tym samym narzędziem. Silnik pozwala gościowi zarezerwować pobyt, natomiast channel manager synchronizuje dostępność i ceny pomiędzy kanałami sprzedaży. Jeśli ten sam apartament oferujesz na własnej stronie i na Booking.com, aktualizacja kalendarzy ogranicza ryzyko przyjęcia dwóch rezerwacji na ten sam termin.",
          "Do tego dochodzi system zarządzania obiektem, jeśli korzystasz z niego do obsługi pobytów i pracy recepcji. Nie każdy pensjonat potrzebuje rozbudowanego zestawu programów, dlatego najpierw sprawdzam istniejące rozwiązania i możliwości ich połączenia."
        ],
        "table": {
          "caption": "Jak połączyć stronę z silnikiem rezerwacji i kalendarzami portali?",
          "head": [
            "Element",
            "Za co odpowiada",
            "Kiedy jest potrzebny"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Silnik rezerwacji",
              "Sprawdza terminy, obsługuje wybór pokoju, rezerwację i płatność",
              "Gdy chcesz przyjmować rezerwacje bezpośrednie przez stronę"
            ],
            [
              "Channel manager",
              "Synchronizuje ceny i dostępność między portalami oraz systemem rezerwacji",
              "Gdy sprzedajesz te same pokoje w kilku kanałach"
            ],
            [
              "System zarządzania obiektem",
              "Pomaga organizować rezerwacje, pobyty i pracę recepcji",
              "Gdy potrzebujesz szerszej obsługi operacyjnej"
            ],
            [
              "Panel WordPress",
              "Pozwala edytować opisy, zdjęcia, pakiety i informacje na stronie",
              "Gdy chcesz samodzielnie aktualizować treść witryny"
            ]
          ]
        },
        "outro": [
          "Taką integrację przygotowałem dla Apartamentów Złota Grota na Starym Mieście we Wrocławiu. Na stronie znajduje się wyszukiwarka dat przyjazdu i wyjazdu połączona z IdoBooking. Obiekt oferuje apartamenty z prywatnym jacuzzi: apartament 30 m² dla maksymalnie czterech osób oraz apartament 40 m² przeznaczony dla par. Goście mogą też korzystać z samodzielnego zameldowania.",
          "Przy podobnym wdrożeniu ustalam, które informacje mają być zarządzane w WordPressie, a które w systemie rezerwacji. Nie tworzę własnego silnika od podstaw. Łączę stronę z odpowiednim narzędziem i testuję przekazywanie terminów, liczby gości oraz przebieg rezerwacji."
        ]
      },
      {
        "id": "co-musi-zobaczyc-gosc-zanim-zdecyduje-sie-na-rezerwacje-bezp",
        "heading": "Co musi zobaczyć gość, zanim zdecyduje się na rezerwację bezpośrednią?",
        "body": [
          "Ktoś znalazł Twój obiekt na portalu, ale przed rezerwacją sprawdza jego oficjalną stronę. Chce obejrzeć więcej zdjęć, poznać lokalizację, sprawdzić parking albo dowiedzieć się, czy może przyjechać późnym wieczorem. Jeśli te informacje znajdzie bez szukania, łatwiej mu ocenić, czy oferta odpowiada jego potrzebom.",
          "Samo umieszczenie przycisku „Rezerwuj” nie rozwiązuje problemu. Strona musi pokazać, co dokładnie otrzymuje gość i jakie warunki obowiązują przy wyborze terminu. W praktyce zwracam uwagę na:"
        ],
        "list": [
          "osobne prezentacje typów pokoi z liczbą miejsc, wyposażeniem i zdjęciami,",
          "jasne informacje o cenie, zawartości pakietu i dostępnych dodatkach,",
          "zasady płatności, anulowania pobytu i zmiany terminu,",
          "godziny zameldowania, parking, dojazd i instrukcje samodzielnego wejścia,",
          "widoczne przejście do rezerwacji, szczególnie na telefonie."
        ],
        "outro": [
          "Ważna jest także spójność strony z silnikiem rezerwacji. Jeśli gość ogląda apartament pod określoną nazwą, po przejściu do systemu powinien rozpoznać tę samą ofertę. Różniące się nazwy, zdjęcia lub warunki pobytu utrudniają podjęcie decyzji.",
          "Własna strona nie gwarantuje określonej liczby rezerwacji bezpośrednich. Daje jednak możliwość przedstawienia obiektu na własnych zasadach i obsługi gości, którzy chcą zarezerwować pobyt bez korzystania z portalu. Przy wdrożeniu układam treści i przyciski wokół tej ścieżki, od wyboru pokoju po przejście do systemu rezerwacyjnego."
        ]
      },
      {
        "id": "jak-przygotowac-galerie-pokoi-zeby-strona-szybko-dzialala-na",
        "heading": "Jak przygotować galerię pokoi, żeby strona szybko działała na telefonie?",
        "body": [
          "Zdjęcia są jednym z najważniejszych elementów strony noclegowej. Gość chce zobaczyć łóżko, łazienkę, widok z okna i udogodnienia, za które płaci. Problem zaczyna się wtedy, gdy galeria zawiera duże pliki prosto z aparatu, a telefon musi pobrać je wszystkie przed wygodnym przeglądaniem strony.",
          "Dlatego nie ograniczam optymalizacji do zmniejszenia fotografii. Przygotowuję obrazy w formatach WebP lub AVIF, dobieram rozdzielczość do wielkości ekranu i ustawiam ładowanie zdjęć we właściwej kolejności. Najważniejsza fotografia powinna pojawić się szybko, a zdjęcia znajdujące się niżej nie muszą obciążać pierwszego widoku.",
          "Przed oddaniem sprawdzam wynik Lighthouse z celem 90+ na telefonie. Dążę też do LCP poniżej 2,5 sekundy. LCP to wskaźnik określający, jak długo użytkownik czeka na pojawienie się największego widocznego elementu, którym na stronie hotelu często jest główne zdjęcie. Są to cele techniczne wdrożenia, a nie deklaracja jednakowego wyniku na każdym urządzeniu i połączeniu.",
          "Dbam również o samą kolejność prezentacji. Jeśli apartament ma jacuzzi w salonie, warto pokazać to udogodnienie, ale gość nadal powinien zobaczyć pozostałe pomieszczenia i poznać rzeczywisty układ lokalu. Przy projektowaniu galerii ustalam, jakie fotografie są potrzebne, przygotowuję ich wersje na różne ekrany i sprawdzam działanie strony mobilnej."
        ]
      },
      {
        "id": "czy-strona-dla-pensjonatu-potrzebuje-kilku-wersji-jezykowych",
        "heading": "Czy strona dla pensjonatu potrzebuje kilku wersji językowych?",
        "body": [
          "Jeśli przyjmujesz gości z zagranicy, sama angielska wersja strony głównej może nie wystarczyć. Osoba rezerwująca pobyt powinna rozumieć opis pokoju, zasady płatności, godziny zameldowania, warunki anulowania i sposób dojazdu.",
          "Przygotowując wersje językowe, traktuję je jako pełne odpowiedniki potrzebnych podstron. Każdy język otrzymuje własne adresy, a przełącznik prowadzi do tłumaczenia aktualnie oglądanego pokoju lub pakietu. Sprawdzam również tytuły stron, opisy widoczne w wynikach Google oraz komunikaty formularzy.",
          "Osobnym elementem jest silnik rezerwacji. Nawet jeśli cała witryna działa po niemiecku, użytkownik nie powinien nagle trafiać do niezrozumiałego procesu płatności. Przed wdrożeniem sprawdzam, jakie języki, waluty i metody płatności obsługuje wybrane narzędzie.",
          "Tłumaczenia regulaminów i pozostałych dokumentów prawnych wymagają odpowiedniego przygotowania oraz Twojego zatwierdzenia. Ja odpowiadam za ich prawidłowe umieszczenie na stronie i połączenie z właściwą wersją procesu rezerwacji."
        ]
      },
      {
        "id": "jak-sprawdzic-czy-goscie-przechodza-ze-strony-do-rezerwacji",
        "heading": "Jak sprawdzić, czy goście przechodzą ze strony do rezerwacji?",
        "body": [
          "Po uruchomieniu strony warto wiedzieć, skąd przychodzą odwiedzający i czy korzystają z wyszukiwarki terminów. Nie trzeba przy tym traktować każdego kliknięcia jako zakończonej rezerwacji.",
          "Konfiguruję Google Analytics 4, czyli GA4, z uruchamianiem po uzyskaniu wymaganej zgody na cookies. Mierzę kliknięcia prowadzące do silnika rezerwacji, wysłanie formularza dotyczącego pobytu grupowego oraz inne ustalone działania. Jeśli system rezerwacyjny pozwala przekazać informację o potwierdzonej transakcji, sprawdzam możliwość wdrożenia takiego zdarzenia.",
          "Ważne jest również poprawne rozpoznawanie źródła wizyty. Gość może trafić z Google, mapy, mediów społecznościowych albo polecenia na innej stronie. Jeśli następnie przechodzi do silnika działającego na osobnej domenie, konfiguracja pomiaru wymaga sprawdzenia, czy to przejście nie zaburza danych.",
          "Raport GA4 nie jest pełną listą wszystkich rezerwacji. Część użytkowników nie wyrazi zgody na analitykę, a nie każdy system udostępnia dane o zakończonym zamówieniu. Faktycznie przyjęte pobyty sprawdzasz w systemie rezerwacyjnym.",
          "Przy wdrożeniu testuję zdarzenia, sprawdzam ich poprawność i pokazuję Ci, co można z tych danych odczytać. Dzięki temu odróżnisz wejścia na stronę od rozpoczętych procesów rezerwacji, bez przypisywania analityce możliwości, których nie ma."
        ]
      },
      {
        "id": "jak-zadbac-o-widocznosc-obiektu-w-google-i-mapach",
        "heading": "Jak zadbać o widoczność obiektu w Google i Mapach?",
        "body": [
          "Strona dla apartamentów lub pensjonatu powinna jasno informować wyszukiwarkę, jaki obiekt przedstawia i gdzie się znajduje. Przygotowuję odpowiednią strukturę nagłówków, adresów podstron oraz dane strukturalne opisujące obiekt noclegowy.",
          "W danych strukturalnych można wskazać między innymi nazwę, adres, dane kontaktowe i rodzaj działalności. Umieszczam tylko informacje zgodne z rzeczywistą treścią strony. Nie dodaję ocen, udogodnień ani innych danych, których nie można potwierdzić.",
          "Sprawdzam także spójność informacji z Profilem Firmy w Google. Nazwa, numer telefonu, adres strony i lokalizacja powinny odpowiadać temu, co gość widzi na witrynie. Dla obiektu turystycznego ważne są też wskazówki dojazdu, parking i opis okolicy.",
          "Treści o atrakcjach warto przygotować z myślą o rzeczywistych pytaniach gości. Zamiast ogólnego tekstu o pięknym regionie lepiej opisać konkretne możliwości wypoczynku, dojazd do obiektu i praktyczne informacje związane z pobytem.",
          "Podczas wdrożenia przygotowuję mapę strony i podłączam Google Search Console do kontroli indeksowania. Jeśli przenoszę istniejącą witrynę i zmieniają się adresy, ustawiam przekierowania 301. Pomagają one kierować użytkowników ze starych adresów na nowe, choć nie stanowią gwarancji zachowania pozycji w Google."
        ]
      },
      {
        "id": "jak-samodzielnie-zmieniac-pakiety-vouchery-i-oferty-sezonowe",
        "heading": "Jak samodzielnie zmieniać pakiety, vouchery i oferty sezonowe?",
        "body": [
          "Oferta noclegowa nie jest stała przez cały rok. Możesz przygotowywać pobyty dla par, pakiety rodzinne, oferty świąteczne lub propozycje organizacji wydarzeń. Strona powinna pozwalać aktualizować te informacje bez zamawiania każdej drobnej zmiany u programisty.",
          "Dobrym przykładem różnorodnej oferty jest pensjonat Maciejanka pod Kobylą Górą, który oprócz noclegów prezentuje możliwość organizacji wydarzeń. Taki obiekt potrzebuje nie tylko kart pokoi, ale również miejsca na opis usług i kontakt w sprawie indywidualnych zapytań.",
          "Tworzę strony WordPress z własnym motywem i polami ACF. Zamiast udostępniać Ci rozbudowany kreator, przygotowuję edycję konkretnych elementów zaakceptowanego projektu. Możesz zmienić tytuł pakietu, opis, zdjęcia, termin obowiązywania i ustalone warunki oferty.",
          "Ceny oraz dostępność nie zawsze powinny być zarządzane bezpośrednio na stronie. Jeśli głównym źródłem tych informacji jest silnik rezerwacji, pozostawiam je w odpowiednim systemie, żeby nie trzeba było aktualizować tych samych danych w kilku miejscach.",
          "Przygotowuję również prezentację voucherów z formularzem zapytania albo wdrażam ich sprzedaż online. Przy sprzedaży ustalamy dodatkowo sposób płatności, dostarczenia vouchera, termin ważności oraz zasady jego wykorzystania.",
          "Po publikacji przeprowadzam szkolenie online z obsługi panelu. Otrzymujesz 60 dni gwarancji i bezpłatnych poprawek. Jeśli nie chcesz samodzielnie zajmować się aktualizacjami technicznymi, prowadzę dalszą [opiekę nad stroną WordPress](/uslugi/opieka-wordpress) w miesięcznym abonamencie bez umowy na rok. Dzięki temu codzienną ofertę edytujesz we własnym zakresie, a kwestie techniczne zostawiasz mnie."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-firm-budowlanych": {
    "heading": "Strona internetowa dla firmy budowlanej: jak pokazać realizacje i zbierać zapytania do wyceny",
    "intro": [
      "Masz w telefonie zdjęcia wykonanych dachów, ogrodzeń albo wyremontowanych mieszkań, ale na stronie widnieje tylko lista usług i formularz kontaktowy. Klient nie widzi, jak pracujesz, więc pyta o przykłady realizacji. Potem wysyła wiadomość „ile kosztuje remont?”, bez wymiarów, zdjęć i lokalizacji. Dobrze zaprojektowana strona internetowa dla firmy budowlanej powinna pokazywać konkretne prace i zbierać informacje potrzebne do wstępnej wyceny, zanim odbierzesz telefon.",
      "Nie każda firma potrzebuje rozbudowanego serwisu. Dla dekarza ważne mogą być zdjęcia dachów i rodzaje pokryć, dla brukarza powierzchnia prac i sposób przygotowania podłoża, a dla wykonawcy ogrodzeń parametry potrzebne do kalkulacji. Zanim rozpocznę projektowanie, ustalam, jak wygląda Twoja oferta, kto zamawia usługi i czego potrzebujesz do oceny zapytania. Na tej podstawie przygotowuję podstrony usług, galerię realizacji oraz formularz lub kalkulator wyceny."
    ],
    "sections": [
      {
        "id": "klient-prywatny-i-inwestor-sprawdzaja-inne-informacje",
        "heading": "Klient prywatny i inwestor sprawdzają inne informacje",
        "body": [
          "Właściciel domu planujący ocieplenie elewacji chce zobaczyć, czy wykonywałeś podobne prace. Interesują go zdjęcia, stosowane materiały, obsługiwany obszar i możliwość kontaktu. Osoba szukająca firmy remontowej sprawdzi przykłady ukończonych łazienek lub mieszkań, a klient potrzebujący dekarza będzie szukał realizacji pokazujących konkretny typ pokrycia dachowego.",
          "Inwestor zlecający większy zakres robót może potrzebować innych informacji. Oprócz realizacji sprawdzi uprawnienia, referencje, polisę OC, sprzęt i możliwości wykonawcze firmy. Nie powinien szukać dokumentów pomiędzy przypadkowymi zdjęciami.",
          "Dlatego na stronie rozdzielam informacje według potrzeb odbiorcy:"
        ],
        "list": [
          "Dla klienta prywatnego przygotowuję opisy usług, zdjęcia realizacji, obszar dojazdu i wygodny kontakt.",
          "Dla inwestora firmowego przewiduję miejsce na referencje, aktualne uprawnienia, dokumenty i informacje o zapleczu.",
          "Dla obu grup tworzę czytelną drogę od konkretnej usługi do odpowiednich realizacji i formularza zapytania."
        ],
        "outro": [
          "Nie oznacza to tworzenia dwóch oddzielnych witryn. Często wystarczy właściwie uporządkować materiały i ustalić, które informacje powinny znaleźć się na początku podstrony. Przy projektowaniu sprawdzam, czy potencjalny klient może szybko ustalić, jakie prace wykonujesz, gdzie działasz i czy masz doświadczenie w podobnym zleceniu."
        ]
      },
      {
        "id": "galeria-realizacji-powinna-pokazywac-zakres-prac-a-nie-tylko",
        "heading": "Galeria realizacji powinna pokazywać zakres prac, a nie tylko zdjęcia",
        "body": [
          "Zdjęcie gotowej łazienki pokazuje efekt, ale nie mówi, czy wykonałeś cały remont, czy jedynie ułożyłeś płytki. Podobnie wygląda sytuacja z dachem, ogrodzeniem lub podjazdem. Bez opisu trudno ustalić, za jaką część inwestycji odpowiadała Twoja firma.",
          "Dlatego galerię realizacji przygotowuję jako zbiór osobnych podstron. Każda może zawierać zakres wykonanych robót, rodzaj zastosowanych materiałów, przybliżoną lokalizację, czas realizacji oraz fotografie dokumentujące pracę. Jeśli masz zdjęcia przed i po, umieszczę je w takim układzie, żeby łatwo było porównać stan początkowy z rezultatem.",
          "Nie potrzebujesz profesjonalnej sesji fotograficznej po każdej inwestycji. Zdjęcia z telefonu mogą wystarczyć, jeśli są ostre, odpowiednio oświetlone i pokazują istotne szczegóły. Warto fotografować podobny kadr przed rozpoczęciem i po zakończeniu robót. Przy dachach przydadzą się ujęcia całości i detali obróbek, a przy brukowaniu również zdjęcia przygotowania podłoża.",
          "W opisie nie musisz ujawniać danych inwestora ani dokładnego adresu. Wystarczy miejscowość lub region, jeśli takie informacje możesz bezpiecznie opublikować.",
          "Na stronie WordPress przygotuję powtarzalny układ realizacji z polami do uzupełnienia. Po zakończeniu kolejnego zlecenia wejdziesz do panelu, dodasz fotografie, opiszesz materiały i opublikujesz nową podstronę. Układ pozostanie zgodny z projektem.",
          "Duże zdjęcia przygotuję w lekkich formatach i odpowiednich rozmiarach. Przed oddaniem strony sprawdzę Lighthouse z celem 90+ na telefonie oraz LCP poniżej 2,5 sekundy. Galeria ma pokazywać jakość Twojej pracy, ale nie powinna utrudniać korzystania z witryny."
        ]
      },
      {
        "id": "podstrony-uslug-i-obszar-dzialania-pomagaja-klientowi-znalez",
        "heading": "Podstrony usług i obszar działania pomagają klientowi znaleźć właściwego wykonawcę",
        "body": [
          "Jeśli wykonujesz remonty łazienek, malowanie mieszkań i kompleksowe wykończenia, jedna ogólna podstrona „Usługi remontowe” może nie wystarczyć do przedstawienia różnic między tymi pracami.",
          "Przygotuję osobne opisy najważniejszych usług, pokazujące zakres robót, stosowane materiały, przebieg współpracy i odpowiednie realizacje. Dzięki temu klient zainteresowany konkretną pracą nie musi przeglądać całej oferty.",
          "Równie ważny jest obszar działania. Jeżeli obsługujesz Wrocław i okoliczne miejscowości, warto jasno pokazać, gdzie standardowo dojeżdżasz oraz czy przyjmujesz dalsze zlecenia. Informacja ta powinna znajdować się zarówno przy ofercie, jak i w formularzu wyceny.",
          "Możemy również przygotować mapę wykonanych realizacji. Nie musi wskazywać konkretnych posesji. Punkty przypisane do miejscowości lub przybliżonych obszarów pokażą, gdzie wykonywałeś prace, bez ujawniania adresów klientów.",
          "Nie tworzę jednak osobnej podstrony dla każdej miejscowości tylko po to, żeby zmieniać nazwę miasta w tym samym tekście. Lokalna podstrona ma sens, gdy możesz pokazać rzeczywiste realizacje, specyficzny zakres usług albo przydatne informacje o obsłudze danego terenu.",
          "Przy wdrożeniu przygotowuję strukturę nagłówków, mapę strony, Search Console i dane strukturalne LocalBusiness. Sprawdzam też spójność danych firmy z Profilem Firmy w Google. Są to elementy porządkujące informacje o działalności, a nie gwarancja pozycji w wynikach wyszukiwania."
        ]
      },
      {
        "id": "formularz-ze-zdjeciami-czy-kalkulator-wyceny-to-zalezy-od-ro",
        "heading": "Formularz ze zdjęciami czy kalkulator wyceny? To zależy od rodzaju prac",
        "body": [
          "Klient pyta o cenę, ale nie zawsze da się ją obliczyć bez oględzin. W przypadku remontu łazienki znaczenie ma nie tylko powierzchnia, lecz także stan instalacji, zakres rozbiórek i wybrane materiały. Przy ogrodzeniu część ceny można natomiast wyliczyć na podstawie długości, wysokości, rodzaju przęseł i dodatków.",
          "Z tego powodu nie proponuję kalkulatora każdej firmie budowlanej. Najpierw sprawdzam, czy masz powtarzalne zasady wyceny."
        ],
        "table": {
          "caption": "Formularz ze zdjęciami czy kalkulator wyceny? To zależy od rodzaju prac",
          "head": [
            "Kryterium",
            "Formularz ze zdjęciami",
            "Kalkulator wyceny"
          ],
          "rows": [
            [
              "---",
              "---",
              "---"
            ],
            [
              "Kiedy wybrać",
              "Gdy zakres zależy od stanu obiektu i wymaga indywidualnej oceny",
              "Gdy cena wynika z ustalonych parametrów i reguł"
            ],
            [
              "Przykładowe usługi",
              "Remont mieszkania, nietypowy dach, termomodernizacja",
              "Standardowe warianty ogrodzeń"
            ],
            [
              "Dane od klienta",
              "Lokalizacja, opis, wymiary, termin i zdjęcia",
              "Wymiary, materiał, wariant wykonania i dodatki"
            ],
            [
              "Co otrzymujesz",
              "Uporządkowane zgłoszenie do wstępnej oceny",
              "Wynik obliczony według przyjętych zasad"
            ],
            [
              "Główne ograniczenie",
              "Ostateczna oferta może wymagać oględzin",
              "Nie uwzględni warunków, których nie opisano w regułach"
            ]
          ]
        },
        "outro": [
          "Przykładem kalkulatora jest Galabau Darius, aplikacja wykonana przeze mnie w 2026 roku dla niemieckiej firmy ogrodniczej. Przygotowałem w niej konfigurator ogrodzeń, który oblicza cenę na żywo. Projekt obejmuje również galerię realizacji i panel administracyjny z logowaniem przez Clerk. Aplikacja działa na hostingu Vercel.",
          "Jeśli Twoja firma ma podobnie określone reguły cennika, mogę przygotować [aplikację Next.js](/uslugi/aplikacje-nextjs) z indywidualną logiką obliczeń.",
          "Gdy wykonujesz prace wymagające oględzin, zaprojektuję formularz z polami odpowiadającymi Twojemu sposobowi wyceny. Klient może podać rodzaj inwestycji, lokalizację, wymiary, planowany termin i dołączyć fotografie. Dzięki temu przed telefonem zobaczysz, czego potrzebuje, i zdecydujesz, czy wystarczą dodatkowe pytania, czy konieczna jest wizyta na miejscu."
        ]
      },
      {
        "id": "wordpress-czy-next-js-wybor-zalezy-od-tego-jak-bedziesz-korz",
        "heading": "WordPress czy Next.js? Wybór zależy od tego, jak będziesz korzystać ze strony",
        "body": [
          "Jeżeli potrzebujesz strony dla firmy remontowej z opisami usług, galerią realizacji, dokumentami i formularzem kontaktowym, zwykle rozważam WordPress.",
          "Przygotowuję własny motyw i wykorzystuję ACF do stworzenia pól edycyjnych zgodnych z projektem. Nie używam Elementora, Divi ani Avady w nowych wdrożeniach. Dzięki temu możesz zmieniać zdjęcia, teksty i dane realizacji w przygotowanym układzie, bez samodzielnego projektowania każdej podstrony.",
          "Podobną technologię wykorzystałem w Dom Bez Wad, stronie firmy zajmującej się ociepleniami i pompami ciepła, oraz w projekcie Stys-Glass z 2023 roku dla działalności związanej z hartowaniem szkła, balustradami i lustrami na wymiar.",
          "Next.js wybieram wtedy, gdy projekt wymaga bardziej rozbudowanego działania, na przykład konfiguratora wyceny, zależności między parametrami lub niestandardowego panelu administracyjnego. Nie oznacza to, że każda firma budowlana potrzebuje aplikacji.",
          "Jeśli działasz także w Niemczech, mogę uwzględnić niemiecką wersję językową oraz podstrony Impressum i Datenschutz. Takie elementy przygotowałem w Galabau Darius.",
          "Możesz też samodzielnie zbudować prostą wizytówkę w kreatorze stron. Jeśli wystarczy Ci podstawowy opis działalności i kontakt, będzie to jedna z możliwości. Przy większej liczbie realizacji, niestandardowych formularzach i kalkulatorze trzeba jednak sprawdzić ograniczenia wybranego narzędzia.",
          "Podczas briefu porównuję wymagane funkcje i sposób późniejszej edycji. Technologię dobieram do tego, co rzeczywiście będziesz wykorzystywać, zamiast proponować rozbudowany system tylko dlatego, że da się go stworzyć."
        ]
      },
      {
        "id": "zdjecia-dokumenty-i-kontakt-musza-dzialac-rowniez-na-telefon",
        "heading": "Zdjęcia, dokumenty i kontakt muszą działać również na telefonie",
        "body": [
          "Klient może oglądać Twoją stronę, stojąc przed budynkiem i zastanawiając się nad zakresem prac. Jeśli chce zadzwonić, nie powinien szukać numeru w stopce. Jeśli chce wysłać zdjęcia elewacji lub dachu, formularz musi umożliwiać wygodne dołączenie plików z telefonu.",
          "Dlatego projektuję najpierw układ mobilny, a następnie dostosowuję go do większych ekranów. Sprawdzam czytelność opisów, wielkość przycisków, obsługę galerii i sposób wypełniania formularza.",
          "Nie pomijam przy tym dokumentów. Jeśli masz aktualne certyfikaty, uprawnienia, referencje albo polisę OC, przygotuję sekcję pozwalającą je łatwo znaleźć. Nie ma potrzeby publikowania wszystkich materiałów w jednym miejscu. Możemy przypisać dokumenty do konkretnych usług lub udostępnić oddzielną sekcję dla inwestorów.",
          "W ramach wdrożenia konfiguruję także podstawy techniczne widoczności strony w Google. Jeśli wykorzystujemy GA4 do analizy ruchu, uruchamiam pomiar dopiero po zgodzie użytkownika na cookies.",
          "Po publikacji przeprowadzę szkolenie online z obsługi strony. Pokażę Ci, jak zmienić opis usługi, dodać zdjęcia i utworzyć kolejną kartę realizacji. Nie będziesz musiał kontaktować się ze mną po każdej ukończonej inwestycji."
        ]
      },
      {
        "id": "koszt-i-termin-strony-zaleza-od-uslug-galerii-i-sposobu-wyce",
        "heading": "Koszt i termin strony zależą od usług, galerii i sposobu wyceny",
        "body": [
          "Nie wyceniam strony firmy budowlanej na podstawie samej liczby zakładek. Dwie witryny z podobnym menu mogą wymagać zupełnie innego zakresu prac.",
          "Prosta strona prezentująca kilka usług, realizacje i kontakt będzie innym projektem niż serwis z rozbudowaną galerią, filtrowaniem, formularzem przesyłającym dokumenty i kalkulatorem ceny ogrodzeń.",
          "Przy przygotowywaniu wyceny biorę pod uwagę liczbę usług i obszarów działania, zakres treści, sposób zarządzania realizacjami, rodzaj formularza lub kalkulatora oraz ewentualne wersje językowe. Sprawdzam również, jakie zdjęcia i materiały masz już przygotowane.",
          "Typowa strona firmowa lub usługowa powstaje w ciągu 4-6 tygodni. Dokładny harmonogram ustalam po briefie. Przed kodowaniem przygotowuję makiety w Figmie, przewiduję dwie tury poprawek i rozpoczynam wdrożenie po akceptacji projektu. Po kolejnych etapach udostępniam link do wersji testowej.",
          "Po uruchomieniu strony zapewniam 60 dni gwarancji i bezpłatnych poprawek. Później możesz samodzielnie zarządzać treścią lub skorzystać z opcjonalnej opieki w miesięcznym abonamencie bez umowy na rok.",
          "Jeśli masz już zdjęcia wykonanych robót, listę usług i określony obszar działania, możemy wykorzystać je jako podstawę projektu. Podczas pierwszej rozmowy ustalę z Tobą, jakie informacje powinny znaleźć się w galerii, o co formularz ma pytać klienta i czy kalkulator rzeczywiście pasuje do Twojego sposobu wyceniania zleceń."
        ]
      }
    ]
  },
  "tworzenie-stron-dla-influencerow": {
    heading: "Strona internetowa dla influencera jako centrum współprac i sprzedaży",
    intro: [
      "**W tym poradniku pokazuję, jak strona internetowa dla influencera może uporządkować ofertę dla marek, zastąpić szybko dezaktualizujący się PDF i wspierać sprzedaż własnych produktów.** Wyjaśniam również, czym takie rozwiązanie różni się od linku w bio, jakie informacje warto zbierać w formularzu oraz co wpływa na zakres i koszt realizacji.",
      "Dobrze zaplanowana strona dla twórcy internetowego nie musi być rozbudowanym portalem. Powinna przede wszystkim skracać drogę do najważniejszych informacji i pozwalać Ci rozwijać własny kanał niezależnie od zmian zachodzących na platformach społecznościowych. Projektując taką stronę, biorę pod uwagę zarówno potrzeby odbiorców, jak i osób odpowiedzialnych za kampanie po stronie marek.",
    ],
    sections: [
      {
        id: "media-kit-online-mozna-aktualizowac-bez-wysylania-kolejnych-",
        heading: "Media kit online można aktualizować bez wysyłania kolejnych plików",
        body: [
          "Klasyczny media kit w PDF sprawdza się do momentu, w którym zmieniają się statystyki, formaty współpracy albo dane o odbiorcach. Po każdej aktualizacji powstaje nowa wersja dokumentu, ale wcześniejsze pliki nadal mogą znajdować się w skrzynkach potencjalnych partnerów. **Media kit online działa pod jednym adresem, dlatego osoba reprezentująca markę zawsze może zobaczyć aktualną wersję oferty.**",
          "Na takiej podstronie warto umieścić informacje, które pomagają szybko ocenić dopasowanie twórcy do kampanii:",
        ],
        list: [
          "aktualne dane dotyczące zasięgów i zaangażowania,",
          "charakterystykę odbiorców, w tym ich zainteresowania i podstawowe dane demograficzne,",
          "dostępne kanały oraz formaty publikacji,",
          "przykłady wcześniejszych współprac i zaakceptowane materiały,",
          "stawki, jeżeli chcesz udostępniać je publicznie.",
        ],
        outro: [
          "Dane nie muszą być wpisane na stałe w kodzie. Mogę przygotować panel, w którym samodzielnie zmienisz liczby, opis grupy odbiorców, formaty oraz przykłady realizacji. Aktualizacja nie zmienia adresu strony, więc nie trzeba przygotowywać nowego pliku i ponownie przesyłać go wszystkim zainteresowanym.",
          "Stawki są opcjonalnym elementem media kitu. Możesz pokazać je publicznie, ukryć na podstronie zabezpieczonej hasłem albo całkowicie zrezygnować z ich publikowania. Takie podejście pozwala dostosować sposób prezentowania oferty do rodzaju współprac i przyjętego modelu negocjacji.",
        ],
      },
      {
        id: "wlasna-strona-daje-wiecej-mozliwosci-niz-sam-link-w-bio",
        heading: "Własna strona daje więcej możliwości niż sam link w bio",
        body: [
          "Link w bio dobrze sprawdza się jako proste menu prowadzące do kilku miejsc. Nie musi jednak być docelowym centrum Twojej marki. **Strona internetowa dla influencera może pełnić jednocześnie funkcję media kitu online, portfolio, formularza dla marek, sklepu i miejsca zapisu do newslettera.** Wszystkie te elementy działają pod własną domeną i mogą rozwijać się razem z działalnością.",
        ],
        table: {"caption":"Własna strona daje więcej możliwości niż sam link w bio","head":["Obszar","Własna strona","Link w bio","Kreator stron dla twórców"],"rows":[["Własność","Strona i treści pozostają pod Twoją kontrolą","Profil działa w zewnętrznej usłudze","Zakres kontroli zależy od platformy"],["Domena","Własny, rozpoznawalny adres","Zwykle adres platformy lub przekierowanie","Własna domena może zależeć od planu"],["Możliwości","Media kit, formularze, sklep, newsletter i treści","Głównie lista odnośników","Funkcje dostępne w ramach kreatora"],["SEO","Możliwość rozwijania treści i podstron widocznych w wyszukiwarce","Bardzo ograniczony zakres","Zależny od ustawień i konstrukcji platformy"],["Koszt","Zależy od projektu, funkcji i utrzymania","Zwykle niski lub abonamentowy","Najczęściej abonament zależny od planu"]]},
        outro: [
          "Nie każdy twórca od razu potrzebuje indywidualnego serwisu. Jeżeli chcesz wyłącznie zebrać kilka odnośników, prosty kreator może wystarczyć. Własna strona zaczyna mieć większe znaczenie wtedy, gdy potrzebujesz spójnej oferty dla partnerów, chcesz publikować treści, budować bazę mailingową lub sprzedawać bez odsyłania odbiorców do kilku różnych narzędzi.",
          "Projekt mogę oprzeć na rozwiązaniu dopasowanym do potrzeb i planów rozwoju. Może to być WordPress z wygodną edycją treści albo jedna z [nowoczesnych stron internetowych](/uslugi/nowoczesne-strony-internetowe), jeśli potrzebne są bardziej niestandardowe funkcje. Przy serwisie generowanym z uporządkowanych danych mogę również rozważyć [strony Jamstack](/uslugi/strony-jamstack).",
        ],
      },
      {
        id: "formularz-dla-marek-pomaga-odroznic-konkretne-propozycje-od-",
        heading: "Formularz dla marek pomaga odróżnić konkretne propozycje od ogólnych zapytań",
        body: [
          "Wiadomość z pytaniem o możliwość współpracy często nie zawiera danych potrzebnych do podjęcia decyzji. Brakuje budżetu, terminu, rodzaju publikacji albo informacji o produkcie. W efekcie pierwsza odpowiedź nie dotyczy warunków kampanii, lecz służy zebraniu podstawowych informacji.",
          "Formularz dla marek może prowadzić osobę wysyłającą zapytanie przez zestaw konkretnych pól. W zależności od Twojego modelu współpracy mogą to być nazwa marki, dane kontaktowe, promowany produkt, planowany budżet, termin kampanii, oczekiwane platformy oraz formaty materiałów. Można również dodać miejsce na opis założeń, odnośnik do briefu i dane potrzebne do dalszej rozmowy.",
          "**Dobrze zaprojektowany formularz nie gwarantuje wartościowych propozycji, ale ogranicza liczbę wiadomości pozbawionych konkretów.** Marka przed wysłaniem zapytania widzi, jakich informacji potrzebujesz, a Ty możesz szybciej ocenić zgodność projektu z tematyką kanału i dostępnością.",
          "Formularz powinien zawierać odpowiednią informację dotyczącą przetwarzania danych oraz wymagane zgody RODO. Jego zakres ustalam na podstawie tego, jakie dane rzeczywiście są potrzebne do obsługi zapytania. Mogę również zastosować zabezpieczenie przed spamem, aby formularz nie stał się dodatkowym źródłem niechcianych wiadomości.",
        ],
      },
      {
        id: "wspolprace-reklamowe-powinny-byc-prezentowane-w-sposob-czyte",
        heading: "Współprace reklamowe powinny być prezentowane w sposób czytelny",
        body: [
          "Strona dla content creatora może porządkować nie tylko ofertę, lecz także opublikowane współprace. Portfolio daje markom możliwość zobaczenia, w jakich formatach pracujesz, jakie tematy podejmujesz i jak materiały sponsorowane wpisują się w pozostałą komunikację. Przy każdym przykładzie można wskazać kanał, rodzaj publikacji, zakres działań oraz materiały, na których pokazanie zgodził się partner.",
          "Jawność ma znaczenie również dla odbiorców. **Materiał reklamowy powinien być przedstawiony w sposób, który pozwala rozpoznać jego komercyjny charakter.** Dotyczy to treści publikowanych w mediach społecznościowych, materiałów osadzonych na stronie oraz wpisów przygotowanych w ramach współpracy.",
          "Nie interpretuję przepisów ani nie zastępuję doradcy prawnego. Mogę natomiast zaprojektować czytelne miejsce na oznaczenie partnera, charakteru materiału i informacji wymaganych w danym typie publikacji. Ostateczną treść oznaczeń oraz zasady wykorzystania logotypów, wyników kampanii i materiałów przekazanych przez markę należy ustalić zgodnie z warunkami konkretnej współpracy.",
          "Przejrzyste portfolio nie musi ujawniać danych poufnych. Jeśli nie masz zgody na publikację wyników, można pokazać sam zakres działań, wykorzystane kanały i zatwierdzone materiały. Pozwala to przedstawić doświadczenie bez udostępniania informacji zastrzeżonych przez partnera.",
        ],
      },
      {
        id: "strona-moze-laczyc-wspolprace-z-wlasnymi-zrodlami-przychodu",
        heading: "Strona może łączyć współprace z własnymi źródłami przychodu",
        body: [
          "Strona internetowa dla influencera nie musi ograniczać się do obsługi kampanii reklamowych. Może stać się miejscem sprzedaży produktów fizycznych, materiałów cyfrowych, dostępu do treści albo innych elementów oferty. Dzięki temu osoba trafiająca z filmu, podcastu lub profilu społecznościowego przechodzi bezpośrednio do strony produktu, a nie do kolejnej listy odnośników.",
          "Jeżeli potrzebujesz sprzedaży, mogę przygotować [sklepy WooCommerce](/uslugi/sklepy-internetowe-woocommerce) obsługujące produkty cyfrowe lub fizyczne. Zakres może obejmować karty produktów, płatności, kupony, zamówienia oraz przekazywanie plików po zakupie. Sposób dostawy, dokumenty i treści związane z zamówieniem ustalam przed wdrożeniem.",
          "Drugim kierunkiem monetyzacji jest newsletter. Formularz zapisu może przekazywać adresy do wybranego systemu mailingowego, zapisywać wymagane zgody i kierować użytkownika na stronę podziękowania. Lista mailingowa daje możliwość informowania odbiorców o nowych materiałach i produktach bez opierania całej komunikacji na zasięgu jednej platformy.",
          "Warto zaplanować te funkcje przed rozpoczęciem projektu, nawet jeśli mają zostać uruchomione później. **Strona dla twórcy internetowego może wystartować jako media kit online, a następnie zostać rozbudowana o newsletter lub sklep**, o ile jej struktura i technologia uwzględniają taki rozwój.",
        ],
      },
      {
        id: "koszt-zalezy-od-sposobu-aktualizacji-danych-i-dodatkowych-fu",
        heading: "Koszt zależy od sposobu aktualizacji danych i dodatkowych funkcji",
        body: [
          "Na koszt wpływa przede wszystkim zakres, a nie sama liczba widocznych sekcji. Prosta strona internetowa dla influencera z ręcznie aktualizowanym media kitem będzie wymagała innego nakładu pracy niż serwis pobierający statystyki automatycznie. Integracje zależą od możliwości poszczególnych platform, zakresu dostępnych danych oraz sposobu autoryzacji.",
          "Znaczenie ma również formularz dla marek. Podstawowe zapytanie kontaktowe jest prostsze niż wieloetapowy formularz z wyborem formatów, budżetem, terminem i dodatkowymi załącznikami. Kolejne elementy wpływające na wycenę to newsletter, sklep, płatności, rodzaje produktów, liczba wersji językowych oraz indywidualne funkcje dla partnerów.",
          "Stronę z media kitem, ofertą współprac i formularzem dla marek realizuję zwykle w terminie 3-5 tygodni. Ostateczny termin zależy między innymi od dostępności zdjęć, tekstów, statystyk i materiałów do portfolio. Po krótkiej rozmowie oraz briefie przygotowuję wycenę z ustalonym zakresem i harmonogramem.",
        ],
      },
    ],
  },
  "tworzenie-stron-dla-streamerow": {
    heading: "Strona internetowa dla streamera jako niezależne centrum Twojej marki",
    intro: [
      "**Znajdziesz tu praktyczne porównanie własnej witryny z gotowymi kreatorami oraz wyjaśnienie, jak zaplanować harmonogram, archiwum nagrań, strefę sponsorską i sprzedaż merchu.** Dzięki temu łatwiej ocenisz, jaki zakres powinna mieć strona internetowa dla streamera i na co zwrócić uwagę podczas porównywania wykonawców.",
      "Projektuję taki serwis jako miejsce łączące różne obszary działalności twórcy, a nie jako kopię profilu na platformie streamingowej. Twoja strona może rozwijać się razem z kanałem, pozostając pod własnym adresem nawet wtedy, gdy zmienisz serwis do transmisji, sposób publikowania materiałów albo model współpracy z markami.",
    ],
    sections: [
      {
        id: "wlasna-strona-uniezaleznia-marke-od-jednej-platformy",
        heading: "Własna strona uniezależnia markę od jednej platformy",
        body: [
          "Platforma streamingowa daje dostęp do widzów i narzędzi transmisji, ale to jej regulamin, interfejs oraz dostępne funkcje określają, jak prezentujesz swoją działalność. Strona internetowa dla streamera działa inaczej. Należy do Twojego zaplecza komunikacyjnego, ma własną domenę i może prowadzić do wszystkich miejsc, w których jesteś aktywny.",
          "Ma to znaczenie szczególnie wtedy, gdy publikujesz na kilku platformach albo nie chcesz uzależniać całej marki od jednego profilu. Pod jednym adresem można umieścić aktualny harmonogram, uporządkowane archiwum, informacje o sponsorach, sklep oraz odnośniki do społeczności. Widz nie musi sprawdzać kilku opisów profili, aby znaleźć właściwy materiał lub termin kolejnej transmisji.",
          "Własna witryna porządkuje między innymi:",
        ],
        list: [
          "harmonogram transmisji na różnych platformach,",
          "wybrane nagrania, serie i materiały archiwalne,",
          "informacje przeznaczone dla widzów i potencjalnych sponsorów,",
          "odnośniki do Discorda, sklepu oraz serwisów społecznościowych.",
        ],
        outro: [
          "Taka strona dla twórcy gamingowego może też pełnić funkcję trwałego archiwum działalności. Nie oznacza to przechowywania wszystkich filmów na hostingu witryny. Zwykle rozsądniej jest osadzać materiały z serwisów wideo, a na własnej stronie tworzyć ich czytelną strukturę, opisy i podział na gry, serie lub wydarzenia.",
        ],
      },
      {
        id: "wlasna-witryna-i-kreator-rozwiazuja-rozne-problemy",
        heading: "Własna witryna i kreator rozwiązują różne problemy",
        body: [
          "Gotowy kreator dla streamerów albo prosty link w bio sprawdza się, gdy potrzebujesz szybko zebrać kilka odnośników. Własna strona daje natomiast większą kontrolę nad strukturą, wyglądem i kolejnymi etapami rozwoju. Wybór zależy więc nie tylko od budżetu, lecz także od tego, czy budujesz długoterminowe zaplecze marki, czy potrzebujesz podstawowej wizytówki.",
        ],
        table: {"caption":"Własna witryna i kreator rozwiązują różne problemy","head":["Obszar","Własna strona streamera","Kreator lub link w bio"],"rows":[["Własność","Serwis działa na wybranym hostingu i pod Twoim adresem","Konto i funkcje zależą od zewnętrznej usługi"],["Wygląd","Projekt można dopasować do identyfikacji kanału","Układ zwykle opiera się na dostępnych szablonach"],["Domena","Możesz używać własnej domeny jako głównego adresu","Często punktem wyjścia jest adres w domenie kreatora"],["Możliwości","Możliwy jest harmonogram, archiwum, strefa sponsorów i sklep","Zakres wyznaczają moduły oferowane przez usługę"],["SEO","Można przygotować strukturę nagłówków, mapę strony i dane strukturalne","Kontrola nad technicznymi elementami bywa ograniczona"]]},
        outro: [
          "Jeżeli zakres jest prosty i opiera się głównie na treściach, mogę wykorzystać [strony Jamstack](/uslugi/strony-jamstack). Gdy potrzebne są bardziej rozbudowane funkcje, konta użytkowników albo niestandardowy przepływ danych, lepszym kierunkiem mogą być [aplikacje Next.js](/uslugi/aplikacje-nextjs). Technologię dobieram do funkcji, które rzeczywiście będą używane, a nie do samej etykiety projektu.",
        ],
      },
      {
        id: "harmonogram-i-nagrania-powinny-tworzyc-spojna-sciezke-dla-wi",
        heading: "Harmonogram i nagrania powinny tworzyć spójną ścieżkę dla widza",
        body: [
          "Dobrze zaprojektowana strona streamera z harmonogramem odpowiada na trzy podstawowe pytania: kiedy zaczyna się transmisja, gdzie można ją obejrzeć i czego będzie dotyczyć. Plan może obejmować dzień, godzinę, platformę, tytuł wydarzenia oraz krótką informację o formacie. Sposób wprowadzania zmian ustalam na początku współpracy, aby pasował do tego, jak często aktualizujesz program.",
          "Obok harmonogramu można umieścić status na żywo oraz bezpośrednie przejście do aktualnej transmisji. Taka automatyzacja jest możliwa tylko wtedy, gdy wybrana platforma udostępnia odpowiednie dane i pozwala wykorzystać je na zewnętrznej stronie. Przed zaplanowaniem integracji sprawdzam dokumentację, wymagania autoryzacji oraz zachowanie modułu podczas niedostępności usługi.",
          "Nagrania warto prezentować selektywnie. Zamiast ładować wiele odtwarzaczy jednocześnie, można przygotować kategorie, miniatury i osobne widoki materiałów. Pomaga to zachować czytelność strony i ograniczyć wpływ zewnętrznych elementów na jej szybkość. Jeśli platforma przestanie przekazywać dane, przewiduję komunikat zastępczy lub zwykły odnośnik, aby widz nadal mógł przejść do kanału.",
        ],
      },
      {
        id: "strefa-sponsorska-ulatwia-ocene-mozliwej-wspolpracy",
        heading: "Strefa sponsorska ułatwia ocenę możliwej współpracy",
        body: [
          "Sponsor odwiedzający stronę potrzebuje innych informacji niż widz szukający transmisji. Dlatego strefę współprac warto wyodrębnić i ułożyć tak, aby osoba reprezentująca markę mogła szybko zrozumieć tematykę kanału, dostępne formaty oraz sposób rozpoczęcia rozmowy.",
          "W takiej sekcji można przedstawić zatwierdzone dane o kanale i widowni, charakter publikowanych treści, obsługiwane platformy oraz przykłady możliwych aktywacji. Mogą to być między innymi lokowanie produktu podczas transmisji, materiał partnerski, test sprzętu, udział w wydarzeniu albo dłuższa współpraca. Publikowane informacje powinny być aktualne i możliwe do potwierdzenia. Nie projektuję tej części jako zbioru efektownych obietnic, lecz jako uporządkowany pakiet danych potrzebnych do podjęcia decyzji.",
          "Formularz dla sponsorów może zbierać nazwę marki, dane kontaktowe, planowany termin, opis produktu i oczekiwany zakres działań. Zakres pól warto dopasować do Twojego sposobu pracy. Zbyt ogólny formularz wymaga później wielu dodatkowych wiadomości, natomiast zbyt rozbudowany może zniechęcić osobę, która dopiero sprawdza możliwość współpracy.",
        ],
      },
      {
        id: "merch-i-napiwki-nie-zawsze-wymagaja-budowania-sklepu-od-pods",
        heading: "Merch i napiwki nie zawsze wymagają budowania sklepu od podstaw",
        body: [
          "Strona internetowa dla streamera może prowadzić do rozwiązania sprzedażowego, z którego już korzystasz, albo zawierać własny sklep. Pierwszy wariant jest prostszy, ponieważ witryna prezentuje produkty i kieruje użytkownika do zewnętrznej usługi obsługującej dalszy proces. Drugi daje większą kontrolę nad katalogiem oraz wyglądem ścieżki zakupowej, ale poszerza projekt o płatności, dostawy, statusy zamówień i kwestie związane z obsługą sprzedaży.",
          "Podobnie wygląda obsługa napiwków. Jeśli korzystasz już z zewnętrznej usługi, mogę przygotować widoczny odnośnik i umieścić go w odpowiednim kontekście. Nie ma potrzeby kopiowania mechanizmu, który działa i odpowiada Twoim potrzebom. Ważne jest natomiast, aby widz wiedział, dokąd prowadzi przycisk oraz że przechodzi do zewnętrznego operatora.",
          "Jeśli potrzebujesz sklepu z własnym katalogiem, zakres ustalam osobno. Prosty odnośnik do merchu i pełny proces zakupowy to dwa różne zadania, nawet gdy z perspektywy użytkownika zaczynają się od podobnego przycisku. Rozbudowę można też zaplanować etapami, tworząc najpierw stronę marki, a później dodając sprzedaż.",
        ],
      },
      {
        id: "koszt-zalezy-przede-wszystkim-od-funkcji-i-integracji",
        heading: "Koszt zależy przede wszystkim od funkcji i integracji",
        body: [
          "Wycenę przygotowuję po krótkiej rozmowie i briefie, kiedy wiem, które elementy mają być edytowane ręcznie, a które pobierane automatycznie. Na koszt wpływa przede wszystkim liczba integracji z platformami, sposób zarządzania harmonogramem, liczba sekcji i podstron, zakres archiwum oraz obecność sklepu.",
          "Znaczenie ma również to, czy serwis będzie głównie prezentował treści, czy ma działać jak rozbudowane narzędzie. Prosta strona internetowa dla streamera różni się zakresem od rozwiązania, które sprawdza status kilku kanałów, pobiera dane, obsługuje sklep i wymaga niestandardowego panelu. W bardziej rozbudowanych projektach mogę wykorzystać podejście stosowane przy tworzeniu [nowoczesnych stron internetowych](/uslugi/nowoczesne-strony-internetowe).",
          "Stronę streamera z harmonogramem, nagraniami i strefą sponsorską realizuję zwykle w ciągu 2 do 4 tygodni. Jeżeli projekt ma zakres aplikacji Next.js z niestandardowymi integracjami, typowy termin wynosi od 6 do 12 tygodni. Ostateczny harmonogram podaję po sprawdzeniu wymagań oraz możliwości technicznych wybranych platform.",
        ],
      },
    ],
  },
  "tworzenie-wtyczek-wordpress": {
    "heading": "Tworzenie wtyczek WordPress: jak dobrać rozwiązanie do swojej firmy",
    "intro": [
      "W tym poradniku wyjaśniam, kiedy warto zamówić własną wtyczkę WordPress, a kiedy lepiej skorzystać z gotowego dodatku lub zmienić konfigurację strony. Pokazuję też, jak podejść do integracji, automatyzacji, widoczności w Google i odpowiedziach AI oraz bezpieczeństwa kodu.",
      "Mam doświadczenie z ponad 40 własnymi wtyczkami i mu-pluginami działającymi w 9 serwisach, obejmujących sklepy internetowe, serwisy usługowe i portale poradnikowe. Dzięki temu mogę ocenić nie tylko samą funkcję, ale również jej wpływ na istniejący sklep, obsługę zamówień, dane produktów i późniejsze utrzymanie strony. Jeśli potrzebujesz rozwiązania dla swojego biznesu, na tej podstawie ustalę, co warto zlecić i jak określić zakres prac."
    ],
    "sections": [
      {
        "id": "gotowa-wtyczka-wlasna-wtyczka-czy-zmiana-w-motywie",
        "heading": "Gotowa wtyczka, własna wtyczka czy zmiana w motywie",
        "body": [
          "Nie każda potrzeba wymaga pisania kodu od początku. Jeśli gotowa wtyczka obsługuje potrzebną funkcję i współpracuje z pozostałymi elementami strony, jej instalacja może być najprostszym rozwiązaniem. Problem pojawia się wtedy, gdy musisz łączyć kilka dodatków, ręcznie poprawiać dane albo rezygnować z części potrzebnych funkcji."
        ],
        "table": {
          "caption": "Gotowa wtyczka, własna wtyczka czy zmiana w motywie",
          "head": [
            "Sytuacja",
            "Co wybrać",
            "Dlaczego"
          ],
          "rows": [
            [
              "Potrzebujesz popularnej funkcji, którą obsługuje sprawdzony dodatek",
              "Gotowa wtyczka",
              "Nie trzeba pisać i utrzymywać własnego rozwiązania"
            ],
            [
              "Chcesz zautomatyzować nietypowy proces sprzedażowy",
              "Wtyczka na zamówienie",
              "Można dopasować działanie do zasad Twojej firmy"
            ],
            [
              "Zmiana dotyczy wyglądu elementu strony",
              "Ustawienia lub motyw",
              "Nie ma potrzeby tworzenia osobnego mechanizmu biznesowego"
            ],
            [
              "Dodatki powodują konflikty albo nadpisują dane",
              "Analiza i poprawa integracji",
              "Źródłem problemu może być sposób komunikacji systemów, a nie brak kolejnej wtyczki"
            ],
            [
              "Potrzebujesz rozbudowanej aplikacji wykraczającej poza WordPressa",
              "Ocena innej technologii",
              "Czasem lepszym rozwiązaniem będzie osobna aplikacja, na przykład w Next.js"
            ]
          ]
        },
        "outro": [
          "Przy wyborze liczy się również utrzymanie. Własna wtyczka wymaga testowania i aktualizacji, ale pozwala kontrolować logikę działania zamiast uzależniać kluczowy proces od kilku niezależnych dodatków. Przy wycenie sprawdzam najpierw, czy nowy kod rzeczywiście rozwiąże problem prościej niż istniejące narzędzia."
        ]
      },
      {
        "id": "wtyczki-pod-widocznosc-w-google-i-w-ai-geo",
        "heading": "Wtyczki pod widoczność w Google i w AI (GEO)",
        "body": [
          "SEO techniczne nie kończy się na tytule strony i opisie widocznym w wynikach wyszukiwania. WordPress może potrzebować dodatkowych mechanizmów, które uporządkują dane strukturalne, poprawią informacje o produktach, przygotują przekierowania lub ułatwią analizę ruchu pochodzącego z systemów AI.",
          "GEO, czyli optymalizacja pod obecność w odpowiedziach generowanych przez sztuczną inteligencję, obejmuje między innymi dostępność treści i sposób ich udostępniania. Wtyczka może pomóc w realizacji konkretnych zadań technicznych, ale nie decyduje samodzielnie o tym, czy dana strona zostanie przytoczona w odpowiedzi modelu językowego.",
          "Wśród wykonanych przeze mnie rozwiązań znajdują się:"
        ],
        "list": [
          "Rozpoznawanie po stronie serwera wejść botów AI, takich jak GPTBot, ClaudeBot, PerplexityBot i Google-Extended, również gdy nie wykonują JavaScriptu, oraz przekazywanie danych do panelu widoczności w AI.",
          "Generowanie danych FAQPage na podstawie treści na 951 stronach lokalnych serwisu windykacyjnego.",
          "Poprawki danych strukturalnych produktów, obejmujące markę, SKU, EAN i MPN.",
          "Automatyczne linkowanie wewnętrzne artykułów blogowych do kategorii sklepu oraz obsługa map przekierowań 301."
        ],
        "outro": [
          "To przykłady konkretnych mechanizmów, a nie obietnica określonego wyniku w wyszukiwarce. Jeśli zlecisz mi wtyczkę wspierającą SEO lub GEO, najpierw ustalę, jakie dane i zachowania trzeba poprawić, a następnie dobiorę rozwiązanie do Twojej strony."
        ]
      },
      {
        "id": "dlaczego-funkcje-zapisuje-w-osobnej-wtyczce",
        "heading": "Dlaczego funkcje zapisuję w osobnej wtyczce",
        "body": [
          "WordPress pozwala dopisywać funkcje w plikach motywu, ale nie każda zmiana powinna tam trafiać. Jeśli kod odpowiada za zamówienia, integrację z zewnętrznym systemem lub automatyzację, warto oddzielić go od warstwy odpowiedzialnej za wygląd strony.",
          "Własne funkcje najczęściej zapisuję w osobnej wtyczce, a w uzasadnionych przypadkach w mu-pluginie, czyli dodatku ładowanym automatycznie, którego nie da się przypadkowo wyłączyć w standardowym panelu. Dzięki temu zmiana motywu nie usuwa logiki biznesowej, a wyłączenie konkretnego rozwiązania jest łatwiejsze do kontrolowania.",
          "Korzystam z haków WordPressa i WooCommerce. Są to punkty, w których można uruchomić własną funkcję w odpowiednim momencie lub zmienić wynik działania systemu bez przerabiania jego kodu. Przy rozbudowanych serwisach mogę też wykorzystać pamięć podręczną, aby ograniczyć częste pobieranie tych samych danych.",
          "Przykładem jest [Mebloweporady.pl](/projekty/mebloweporady), gdzie własna wtyczka składa stronę główną bezpośrednio z danych w bazie, a pamięć podręczna odświeża się co sześć godzin. Jeśli zlecisz mi nową funkcję, dobiorę sposób jej oddzielenia tak, aby można ją było rozwijać bez niepotrzebnej przebudowy całego serwisu."
        ]
      },
      {
        "id": "jak-ograniczam-problemy-po-aktualizacjach-wordpressa-i-wooco",
        "heading": "Jak ograniczam problemy po aktualizacjach WordPressa i WooCommerce",
        "body": [
          "Wtyczka może działać poprawnie w dniu wdrożenia, a mimo to wymagać zmian po aktualizacji WordPressa, WooCommerce lub zewnętrznej integracji. Przyczyną może być zmiana sposobu obsługi danych, statusów zamówień albo komunikacji między systemami.",
          "Dlatego nie opieram rozwiązania na przypadkowych zmianach w cudzym kodzie. Korzystam z mechanizmów udostępnianych przez WordPressa i WooCommerce, testuję różne scenariusze oraz sprawdzam współpracę z dodatkami, od których zależy nowa funkcja.",
          "Przed wdrożeniem testuję rozwiązanie na kopii strony lub w wersji testowej. W zależności od projektu sprawdzam również działanie zadań wykonywanych w tle, obsługę błędów oraz zachowanie przy braku danych. Do testowania i prac administracyjnych wykorzystuję między innymi WP-CLI, czyli narzędzie pozwalające wykonywać wybrane operacje WordPressa z wiersza poleceń.",
          "Po wdrożeniu zapewniam 60 dni gwarancji i bezpłatnych poprawek. Jeśli później potrzebujesz pomocy przy aktualizacjach lub rozwoju funkcji, możesz zlecić mi dalszą opiekę nad stroną, również w ramach miesięcznego abonamentu bez umowy na rok."
        ]
      },
      {
        "id": "bezpieczenstwo-wtyczki-na-zamowienie-bez-technicznego-zargon",
        "heading": "Bezpieczeństwo wtyczki na zamówienie bez technicznego żargonu",
        "body": [
          "Wtyczka, która obsługuje zamówienia, formularze lub dane klientów, musi kontrolować nie tylko to, co robi użytkownik, ale także to, do czego ma uprawnienia. Nie wystarczy ukryć przycisku w panelu, jeśli operację można wywołać w inny sposób.",
          "Podczas tworzenia wtyczek zwracam uwagę na kilka elementów:"
        ],
        "list": [
          "Uprawnienia: funkcje administracyjne są dostępne tylko dla użytkowników z odpowiednimi uprawnieniami.",
          "Formularze: weryfikuję żądania, aby ograniczyć możliwość wywoływania niepożądanych operacji.",
          "Dane wyświetlane na stronie: odpowiednio je przygotowuję, aby ograniczać ryzyko wykonania niebezpiecznej treści.",
          "Klucze API: stosuję dostępy o możliwie wąskim zakresie uprawnień, odpowiednim do zadania integracji."
        ],
        "outro": [
          "Znaczenie ma również sposób obsługi błędów. Jeśli zewnętrzny system nie odpowiada, wtyczka nie powinna bez kontroli powtarzać operacji ani pozostawiać zamówienia w niejasnym stanie. Sposób działania trzeba ustalić dla konkretnego procesu, ponieważ inne zabezpieczenia będą potrzebne przy formularzu kontaktowym, a inne przy synchronizacji zamówień.",
          "Zlecając mi wtyczkę, otrzymujesz rozwiązanie, którego zabezpieczenia dobieram do przetwarzanych danych, uprawnień użytkowników i konsekwencji ewentualnego błędu."
        ]
      },
      {
        "id": "jak-opisac-potrzebna-funkcje-zeby-otrzymac-trafna-wycene",
        "heading": "Jak opisać potrzebną funkcję, żeby otrzymać trafną wycenę",
        "body": [
          "Nie musisz znać PHP ani wiedzieć, jak WordPress obsługuje zdarzenia. Wystarczy, że opiszesz problem z perspektywy swojej firmy. Im lepiej określimy oczekiwane zachowanie, tym łatwiej ustalić zakres prac i uniknąć dopisywania funkcji, których faktycznie nie potrzebujesz.",
          "Przygotuj odpowiedzi na cztery pytania:"
        ],
        "list": [
          "**Co ma się wydarzyć?** Na przykład po opłaceniu zamówienia system ma wysłać dane do zewnętrznej aplikacji.",
          "**Kto korzysta z funkcji?** Klient sklepu, pracownik, administrator czy inny system?",
          "**Skąd pochodzą dane?** Z zamówienia WooCommerce, formularza, pliku od hurtowni czy API?",
          "**Co ma się stać w razie błędu?** Czy operacja ma zostać ponowiona, czy administrator ma otrzymać informację, a może zamówienie powinno pozostać bez zmian?"
        ],
        "outro": [
          "Przydatny będzie też przykład sytuacji, w której obecne rozwiązanie zawodzi. Jeśli masz już zainstalowane wtyczki realizujące część procesu, podaj ich nazwy i opisz, co dokładnie nie działa. Nie musisz samodzielnie wymyślać rozwiązania technicznego.",
          "Jeśli prowadzisz sklep, zobacz również, jak podchodzę do budowy [sklepów WooCommerce](/uslugi/sklepy-internetowe-woocommerce). Na podstawie opisu ocenię, czy wystarczy zmiana konfiguracji, czy trzeba dopisać osobną wtyczkę, połączyć systemy przez API albo zaproponować inne rozwiązanie, a następnie przygotuję zakres i wycenę."
        ]
      }
    ]
  },
};
