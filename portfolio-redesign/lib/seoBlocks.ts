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
 * Klucz = slug usługi z lib/services.ts.
 */
export const SEO_BLOCKS: Record<string, SeoBlock> = {
  "tworzenie-stron-wordpress": {
    heading: "Tworzenie stron WordPress: co warto wiedzieć przed startem",
    intro: [
      "Tworzenie stron WordPress brzmi jak jedna usługa, a oznacza kilka zupełnie różnych sposobów pracy. Stronę można postawić na kupionym szablonie w dwa dni, złożyć z bloków w kreatorze albo napisać pod nią własny motyw. W ofercie wszystkie trzy nazywają się tak samo, a różnią się tym, ile potem kosztuje utrzymanie i jak szybko strona się otwiera.",
      "Zebrałem tu rzeczy, które przy takim wdrożeniu zwykle wychodzą dopiero w trakcie: gdzie leży różnica między szablonem a własnym motywem, co realnie przyspiesza stronę, co ją chroni i jak wygląda panel, w którym potem sam poprawiasz treści.",
    ],
    sections: [
      {
        id: "co-to-jest-wordpress",
        heading: "Czym jest WordPress i dlaczego wciąż stoi na nim tyle stron",
        body: [
          "WordPress to system zarządzania treścią, czyli oprogramowanie oddzielające treść od wyglądu. Teksty, zdjęcia i podstrony siedzą w bazie danych, a motyw decyduje, jak zostaną pokazane. Dzięki temu poprawienie opisu usługi nie wymaga dotykania kodu.",
          "Popularność bierze się z trzech rzeczy naraz: system jest darmowy i otwarty, ma ogromne zaplecze gotowych wtyczek, a na rynku łatwo znaleźć kogoś, kto potrafi go obsłużyć. To ostatnie bywa niedoceniane do momentu, w którym trzeba zmienić wykonawcę i okazuje się, że nie jesteś od nikogo uzależniony.",
          "Ta sama otwartość bywa źródłem kłopotów. Sam WordPress jest lekki, ale rzadko instaluje się go samego: dochodzi motyw, kilkanaście wtyczek i każde z nich dokłada swój kod. Dlatego różnica między dobrą a złą stroną na WordPressie prawie nigdy nie leży w samym systemie, tylko w tym, co ktoś na nim postawił.",
        ],
      },
      {
        id: "szablon-czy-wlasny-motyw",
        heading: "Gotowy szablon czy własny motyw",
        body: [
          "Kupiony szablon projektuje się tak, żeby pasował do jak największej liczby zastosowań. Restauracja, kancelaria i siłownia dostają ten sam kod z wariantami układów dla każdej z tych branż, więc Twoja strona wozi ze sobą także to, czego nigdy nie użyje.",
          "Własny motyw pisze się pod jeden projekt i zawiera dokładnie te sekcje, które są na stronie. W praktyce oznacza to mniejszą wagę strony i brak niespodzianek po aktualizacji szablonu, którego autor postanowił coś przebudować.",
        ],
        list: [
          "Szablon: szybki start, niski koszt wejścia, ograniczenia widoczne przy każdej nietypowej zmianie.",
          "Własny motyw: dłuższy start, kod bez balastu, dowolność przy zmianach.",
          "Wariant pośredni: własny motyw zbudowany na sprawdzonym szkielecie, bez pisania wszystkiego od zera.",
        ],
        outro: [
          "Szablon broni się przy stronie prostej i tymczasowej. Przy stronie, która ma pracować kilka lat i zbierać ruch z wyszukiwarki, oszczędność na starcie wraca jako koszt utrzymania, bo każda nietypowa zmiana to obchodzenie cudzych ograniczeń.",
        ],
      },
      {
        id: "kreatory-i-elementor",
        heading: "Dlaczego nie buduję stron na kreatorach typu Elementor",
        body: [
          "Kreator obiecuje, że złożysz stronę myszką, bez programisty. Przy typowym układzie to się sprawdza, a przy nietypowej sekcji zaczyna się mnożenie zagnieżdżonych kontenerów, z których każdy dokłada własny kod. Najpoważniejszy jest jednak nie ciężar, tylko uzależnienie. Treść zapisuje się w formacie kreatora, więc wyłączenie wtyczki zostawia stronę w kawałkach. Kod, który przy okazji powstaje, bywa też trudny do uporządkowania pod kątem dostępności i danych strukturalnych.",
          "Nie znaczy to, że kreator jest zawsze złym wyborem. Znaczy tyle, że przy stronie firmowej utrzymywanej latami wolę pola edycyjne przypisane do konkretnych sekcji projektu. Szerzej opisałem to we wpisie [dlaczego nie warto budować strony na Elementorze](/blog/elementor-dlaczego-nie-warto).",
        ],
      },
      {
        id: "szybkosc-i-core-web-vitals",
        heading: "Co decyduje o szybkości strony WordPress",
        body: [
          "Google mierzy wrażenia użytkownika zestawem wskaźników Core Web Vitals. Sprawdzają, jak szybko pojawia się główna treść, czy strona reaguje na kliknięcia bez opóźnienia i czy układ nie skacze w trakcie ładowania. To ostatnie zna każdy, kto próbował kliknąć przycisk, który w ostatniej chwili uciekł w dół.",
          "Na WordPressie największe zyski dają cztery rzeczy, w tej kolejności:",
        ],
        list: [
          "Ograniczenie wtyczek do tych faktycznie używanych.",
          "Obrazki w nowoczesnych formatach i we właściwych rozmiarach, bo to zwykle najcięższy element strony.",
          "Cache po stronie serwera, żeby strona nie budowała się od nowa przy każdym wejściu.",
          "Motyw, który nie ładuje kodu zapasowego na wszelki wypadek.",
        ],
        outro: [
          "Warto przy tym rozdzielić wynik w narzędziu pomiarowym od realnego odczucia. Strona z wysoką punktacją potrafi sprawiać wrażenie ociężałej, bo pierwszy ekran czeka na czcionkę albo na skrypt zewnętrzny. Optymalizacja jest skończona wtedy, gdy poprawia jedno i drugie.",
        ],
      },
      {
        id: "bezpieczenstwo",
        heading: "Bezpieczeństwo strony WordPress w praktyce",
        body: [
          "Włamania na strony firmowe rzadko są celowanym atakiem. Stoi za nimi automat przeczesujący internet w poszukiwaniu znanej dziury w nieaktualnej wtyczce albo prostego hasła do panelu. Z tego wynika, co naprawdę chroni.",
          "Fundamentem są aktualizacje, bo automaty korzystają z luk opisanych publicznie i dawno załatanych przez autorów wtyczek. Dalej idzie ograniczenie prób logowania i uwierzytelnianie dwuskładnikowe, które sprawia, że samo poznanie hasła przestaje wystarczać. Do tego dochodzi wtyczka filtrująca ruch.",
          "Osobno traktuję kopie zapasowe, bo tu najczęściej pojawia się złudzenie bezpieczeństwa. Kopia zapisana na tym samym serwerze co strona ginie razem z nią, jeśli problemem okaże się awaria hostingu, a nie włamanie. Kopia ma wartość dopiero wtedy, gdy leży w innym miejscu i gdy ktoś kiedykolwiek sprawdził, że da się z niej odtworzyć stronę.",
        ],
      },
      {
        id: "panel-edycji",
        heading: "Jak wygląda panel, w którym edytujesz treści",
        body: [
          "Najczęstsze rozczarowanie po odbiorze strony brzmi tak: wygląda świetnie, ale nie wiem, gdzie zmienić ten jeden akapit. Bierze się stąd, że panel oddano w domyślnej postaci, a nazwy pól nijak nie odpowiadają temu, co widać na stronie.",
          "Da się to ustawić inaczej. Pola edycyjne można nazwać dokładnie tak, jak nazywają się sekcje w projekcie, i zostawić tylko te, które faktycznie masz zmieniać. Jeśli sekcja składa się ze zdjęcia, nagłówka i trzech punktów, to w panelu widzisz zdjęcie, nagłówek i trzy punkty, a nie pusty edytor tekstu.",
          "Sprawdzian jakości jest prosty i wart zrobienia przy odbiorze: usiądź do panelu i spróbuj samodzielnie zmienić trzy rzeczy, które będziesz poprawiać najczęściej. Jeśli trafisz bez podpowiedzi, panel jest zrobiony dobrze.",
        ],
      },
      {
        id: "wordpress-a-seo",
        heading: "WordPress a SEO: co system załatwia, a czego nie",
        body: [
          "WordPress daje przyzwoite podstawy techniczne. Adresy podstron są czytelne, mapa witryny generuje się sama, a wtyczka SEO pozwala ustawić tytuły i opisy widoczne w wynikach wyszukiwania oraz dane strukturalne, dzięki którym wyszukiwarka rozumie, czym jest dana podstrona.",
          "Sam system nie decyduje jednak o pozycjach. Rozstrzygają treść odpowiadająca na realne pytania, struktura serwisu i linki prowadzące do niego z zewnątrz. Strona bez treści nie zajmie wysokiego miejsca dlatego, że stoi na WordPressie.",
          "Warto też uważać na wtyczki. Dwie wtyczki SEO naraz nie wzmacniają efektu, tylko wstawiają własne, sprzeczne znaczniki.",
          "Jedna, ustawiona świadomie, wystarcza.",
        ],
      },
      {
        id: "wordpress-czy-nextjs",
        heading: "Kiedy WordPress, a kiedy lepiej wyjść poza niego",
        body: [
          "WordPress sprawdza się tam, gdzie treść zmienia się często i ma ją zmieniać osoba nietechniczna. Strona firmowa z ofertą i blogiem, serwis lokalnej usługi, prosty sklep: to jego naturalne zastosowania.",
          "Poza niego warto wyjść, gdy projekt przestaje być stroną, a staje się aplikacją. Panel klienta, logowanie użytkowników, nietypowe wyliczenia, kilka integracji naraz: to wszystko da się w WordPressie wymusić, tylko kończy się zlepkiem wtyczek, w którym każda aktualizacja bywa ryzykiem.",
          "Istnieje też wariant pośredni, w którym WordPress zostaje wyłącznie miejscem do zarządzania treścią, a to, co widzi użytkownik, buduje się osobno. Porównanie obu podejść razem z konsekwencjami dla budżetu opisałem we wpisie [WordPress czy Next.js](/blog/wordpress-vs-next-js-koszt).",
        ],
      },
      {
        id: "przebieg-wdrozenia",
        heading: "Jak przebiega wdrożenie i co dostajesz na koniec",
        body: [
          "Praca zaczyna się od ustalenia, co strona ma osiągnąć i kto ma z niej korzystać. Z tego wychodzi lista podstron, a dopiero z niej projekt graficzny. Odwrotna kolejność kończy się dosypywaniem treści do gotowych ramek.",
          "Potem powstaje projekt, na nim własny motyw, następnie wchodzą treści i testy: na telefonie, na wolnym łączu, z klawiatury, w kilku przeglądarkach. Na końcu przenosimy stronę pod docelowy adres, ustawiamy przekierowania ze starych adresów i podpinamy narzędzia analityczne.",
          "Po zakończeniu powinieneś mieć komplet:",
        ],
        list: [
          "dostęp administratora do strony, hostingu i domeny,",
          "działające kopie zapasowe, z których ktoś próbował już odtworzyć stronę,",
          "ustawione tytuły, opisy i mapę witryny,",
          "krótkie szkolenie z obsługi panelu.",
        ],
        outro: [
          "Jeśli czegoś z tej listy brakuje, wdrożenie nie jest skończone, tylko przerwane.",
        ],
      },
      {
        id: "ile-trwa-wdrozenie",
        heading: "Ile trwa tworzenie strony WordPress",
        body: [
          "Termin rozjeżdża się rzadko przez pracę techniczną, a prawie zawsze przez czekanie. Projekt i wdrożenie mają przewidywalny czas, natomiast teksty, zdjęcia i akceptacje po stronie klienta potrafią znacznie wydłużyć harmonogram.",
          "Tempo najbardziej podnoszą trzy rzeczy: gotowe treści, jedna osoba decyzyjna zamiast zbierania sprzecznych uwag od kilku osób, oraz zebrane wcześniej materiały i dostępy. Dobrym nawykiem jest wpisanie terminów po obu stronach, nie tylko po stronie wykonawcy. Wtedy opóźnienie widać od razu, a nie na końcu.",
        ],
      },
      {
        id: "koszt-strony-wordpress",
        heading: "Od czego zależy koszt strony WordPress",
        body: [
          "Przy tworzeniu stron WordPress nie określam zakresu wyłącznie na podstawie liczby pozycji w menu. Dwie strony z podobną liczbą podstron mogą wymagać zupełnie różnej ilości pracy. Znaczenie ma przede wszystkim liczba różnych szablonów, które trzeba zaprojektować i zakodować. Strona główna, usługa, realizacja, wpis blogowy czy kontakt mogą korzystać z innych układów, nawet jeśli później powstanie wiele podstron opartych na tych samych wzorcach.",
          "W nowych projektach przygotowuję własny motyw bez Elementora. Sekcje możliwe do edycji odpowiadają projektowi strony, dzięki czemu panel nie musi dawać swobody zmieniania wszystkiego kosztem spójności wyglądu. Zakres prac zwiększają między innymi:",
        ],
        list: [
          "liczba różnych szablonów podstron,",
          "własny motyw i zestaw bloków przeznaczonych do edycji,",
          "integracje z zewnętrznymi usługami lub systemami,",
          "dodatkowe wersje językowe obsługiwane na przykład przez WPML albo Polylang,",
          "migracja istniejących tekstów, zdjęć i innych treści ze starej strony,",
          "blog wraz z potrzebnymi szablonami wpisów, kategorii i archiwów.",
        ],
        outro: [
          "Osobno trzeba uwzględnić koszty, które pojawiają się już po uruchomieniu witryny. Należą do nich domena i hosting, a w zależności od rozwiązania również licencje płatnych wtyczek. Po oddaniu strony zapewniam 60 dni gwarancji i bezpłatnych poprawek. Później utrzymanie może pozostać po stronie firmy albo działać jako opcjonalna [opieka nad stroną WordPress](/uslugi/opieka-wordpress) w miesięcznym abonamencie bez umowy na rok.",
        ],
      },
      {
        id: "hosting",
        heading: "Hosting pod WordPressa: co naprawdę ma znaczenie",
        body: [
          "Na najtańszym hostingu współdzielonym na jednym serwerze siedzi wiele stron i dzielą one te same zasoby. Przy małym ruchu to wystarcza. Kłopot pojawia się, gdy ruch rośnie, czyli zwykle w najgorszym momencie: przy kampanii albo sezonowym szczycie.",
          "Przy wyborze warto sprawdzić kilka rzeczy, których nie widać w cenniku:",
        ],
        list: [
          "wersję PHP i limity pamięci, bo od nich zależy, czy strona w ogóle ruszy sprawnie,",
          "kopie zapasowe po stronie hostingu i to, jak długo są trzymane,",
          "certyfikat SSL w cenie,",
          "lokalizację serwera względem odbiorców, bo dla polskiej firmy serwer w Polsce da krótszy czas odpowiedzi niż serwer za oceanem.",
        ],
        outro: [
          "Osobna sprawa to na kogo założone jest konto. Hosting i domena zarejestrowane na dane wykonawcy wyglądają wygodnie do pierwszej zmiany współpracy. Powinny należeć do firmy, a wykonawca ma dostawać dostęp.",
        ],
      },
      {
        id: "tresci",
        heading: "Treści na stronę: kto je pisze i co muszą zawierać",
        body: [
          "Założenie, że teksty napiszą się na końcu, jest najczęstszą przyczyną opóźnień w całym projekcie. Powstają wtedy pod presją i zostają na stronie w takiej postaci na lata. Warto na starcie ustalić jedną rzecz: kto pisze i do kiedy.",
          "Minimum, które musi się znaleźć, to opis każdej usługi osobno, informacja, kto prowadzi firmę, dane kontaktowe i obszar działania. Osobno idą wymogi formalne: polityka prywatności, informacja o plikach cookie, a w sklepie regulamin i zasady zwrotów.",
          "Z punktu widzenia wyszukiwarki liczy się, żeby każda usługa miała własną podstronę z własnym tekstem. Podstrona pod jedną konkretną usługę odpowiada na konkretne zapytanie, a wspólna lista wszystkich usług nie odpowiada na żadne.",
          "Ta sama zasada działa przy opisach realizacji. Trzy zdania o wykonanym projekcie robią więcej niż galeria bez podpisów.",
        ],
      },
      {
        id: "dostepnosc",
        heading: "Dostępność cyfrowa: wymóg, o którym łatwo zapomnieć",
        body: [
          "Od 28 czerwca 2025 część firm ma prawny obowiązek zapewnienia dostępności swoich usług cyfrowych. Podstawą jest ustawa z 26 kwietnia 2024 roku, a wymagany poziom techniczny to WCAG 2.1 AA, do którego odsyła norma zharmonizowana EN 301 549. Zwolnieni są mikroprzedsiębiorcy świadczący usługi, czyli firmy zatrudniające mniej niż 10 osób i jednocześnie mające obrót lub sumę bilansową do 2 mln euro. Oba warunki muszą być spełnione naraz.",
          "W praktyce dotyczy to rzeczy pomijanych przy zwykłym wdrożeniu: kontrastu tekstu wobec tła, opisów alternatywnych zdjęć, obsługi strony samą klawiaturą, etykiet przy polach formularza i czytelnych komunikatów błędu. Zaplanowane od początku kosztują niewiele, dokładane do gotowej strony potrafią wymagać przebudowy szablonów.",
          "Warto sprawdzić to zawczasu, bo nakładka reklamowana jako gotowe rozwiązanie problemu zwykle zgodności nie daje. Co obejmuje rzetelne sprawdzenie i które kryteria da się ocenić wyłącznie ręcznie, opisałem na stronie [audytu WCAG](/audyt-wcag).",
        ],
      },
      {
        id: "najczestsze-bledy",
        heading: "Najczęstsze błędy przy zamawianiu strony na WordPressie",
        body: [
          "Pierwszy błąd dotyczy dostępów. Domena zarejestrowana na wykonawcę i konta analityczne poza kontrolą właściciela zamieniają zwykłą zmianę współpracy w negocjacje.",
          "Drugi to zamawianie strony pod wrażenie zamiast pod odbiorcę. Efektowna animacja na wejściu cieszy przy odbiorze, a potem opóźnia pierwszy ekran u kogoś, kto wchodzi z telefonu przy słabym zasięgu.",
          "Trzeci to potraktowanie odbioru jako końca. Strona, której przez rok nikt nie dotknął, ma nieaktualne wtyczki, a jej treść coraz mniej odpowiada temu, co firma naprawdę sprzedaje. Nie musi to oznaczać stałej umowy, ale musi oznaczać, że ktoś raz na jakiś czas się tym zajmuje.",
        ],
      },
    ],
  },
  "sklepy-internetowe-woocommerce": {
    heading: "Jak dobrze zaplanować sklep WooCommerce przed wdrożeniem",
    intro: [
      "Ten poradnik jest dla właściciela małej lub średniej firmy, który rozważa własny sklep internetowy WooCommerce i chce świadomie porównać wykonawców, zakres prac oraz możliwe rozwiązania. Jeśli szukasz usługi pod hasłem „sklepy WooCommerce Wrocław”, patrz nie tylko na wygląd strony, ale też na sposób zarządzania produktami, koszty utrzymania, możliwości rozbudowy i to, co stanie się ze sklepem kilka miesięcy po uruchomieniu.",
      "Pracuję jako freelancer web developer z Wrocławia od 2020 roku, a projekty realizuję również zdalnie dla firm z całej Polski i z Niemiec. Nowe sklepy na WordPressie i WooCommerce buduję na własnym motywie, bez Elementora. Dzięki temu mogę dopasować rozwiązanie do konkretnego modelu sprzedaży, zamiast zaczynać od ograniczeń narzuconych przez gotowy kreator.",
    ],
    sections: [
      {
        id: "woocommerce-czy-shopify",
        heading: "WooCommerce, Shopify, Shoper czy PrestaShop, co wybrać",
        body: [
          "WooCommerce wybieram przede wszystkim wtedy, gdy firma chce mieć własny sklep, rozwijać go we własnym tempie i zachować dużą swobodę w zakresie danych, wyglądu oraz funkcjonalności. To rozwiązanie oparte na WordPressie, więc sklep można połączyć z rozbudowaną częścią treściową, poradnikami, landing page'ami czy stronami kategorii przygotowanymi pod ruch z wyszukiwarki.",
          "Shopify i Shoper działają w innym modelu. To usługi SaaS, czyli platformy dostępne w ramach abonamentu. Część kwestii technicznych przejmuje dostawca, ale przedsiębiorca funkcjonuje w ramach przygotowanego przez niego środowiska, zasad oraz dostępnych rozszerzeń. Taki model może być wygodny, szczególnie gdy sklep ma być możliwie standardowy i właściciel nie potrzebuje daleko idących zmian.",
          "WooCommerce również nie jest rozwiązaniem do wszystkiego. Przy bardzo dużym katalogu, bardzo wysokim ruchu, skomplikowanym multistore albo nietypowej architekturze sprzedażowej zwykle rozważam inne podejście. Może to być PrestaShop, a przy odpowiedniej skali również architektura headless, w której Next.js odpowiada za front, a WooCommerce pozostaje zapleczem. Technologia powinna wynikać z modelu biznesowego, a nie odwrotnie.",
        ],
      },
      {
        id: "koszt-sklepu-woocommerce",
        heading: "Od czego zależy koszt wdrożenia sklepu WooCommerce",
        body: [
          "Koszt sklepu nie wynika wyłącznie z liczby podstron. Dużo większe znaczenie ma to, co dzieje się z produktem od momentu wprowadzenia go do systemu aż do zakupu, wysyłki i późniejszej obsługi zamówienia. Dwa sklepy z podobną liczbą produktów mogą więc wymagać zupełnie innego zakresu prac.",
          "Na zakres wdrożenia wpływają między innymi:",
        ],
        list: [
          "liczba produktów, kategorii, atrybutów i wariantów,",
          "własny projekt oraz motyw albo adaptacja gotowego rozwiązania,",
          "funkcje B2B i indywidualne zasady sprzedaży,",
          "migracja ze starego systemu,",
          "wersje językowe i sprzedaż na innych rynkach,",
          "jakość oraz format danych produktowych,",
          "ilość treści, które trzeba przygotować lub przenieść.",
        ],
        outro: [
          "Osobną kategorią są koszty stałe po uruchomieniu. Sklep potrzebuje domeny i hostingu, część funkcji może korzystać z płatnych wtyczek lub zewnętrznych usług, a rozwijany biznes zazwyczaj wymaga też aktualizacji i obsługi technicznej. Dlatego przy porównywaniu ofert sprawdź nie tylko zakres samego wdrożenia sklepu WooCommerce, ale również to, jakie elementy trzeba będzie utrzymywać po jego starcie.",
        ],
      },
      {
        id: "dane-produktowe",
        heading: "Dobre dane produktowe oszczędzają problemy podczas wdrożenia",
        body: [
          "Jednym z częściej niedoszacowanych etapów jest uporządkowanie danych o produktach. Samo zdjęcie, nazwa i cena zwykle nie wystarczą. Sklep potrzebuje logicznej struktury kategorii, atrybutów oraz wariantów, dzięki którym klient może filtrować ofertę i wybrać właściwy produkt.",
          "Przed wdrożeniem ustalam więc, jakie dane są dostępne i kto je przygotowuje. Po stronie firmy mogą znajdować się zdjęcia, opisy, parametry techniczne czy przypisanie produktów do kategorii. Ja przygotowuję strukturę sklepu oraz sposób, w jaki te dane mają być przechowywane i prezentowane.",
          "Produkty można później dodawać ręcznie w panelu WooCommerce albo importować masowo z CSV lub XML. Jeżeli dane pochodzą z hurtowni albo kilku kanałów sprzedaży, automatyzacja zwykle ma większy sens niż ręczne kopiowanie informacji. W zależności od modelu sprzedaży mogę też przygotować [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), żeby ograniczyć ręczną obsługę produktów i zamówień pomiędzy kanałami.",
        ],
      },
      {
        id: "karta-produktu-i-koszyk",
        heading: "Karta produktu i koszyk mają ułatwiać decyzję, nie tylko dobrze wyglądać",
        body: [
          "Karta produktu jest jednym z najważniejszych miejsc w sklepie. Klient powinien szybko zrozumieć, co kupuje, jaki wariant ma wybrać, czy produkt jest dostępny oraz jakie informacje są potrzebne przed podjęciem decyzji. Układ powinien wynikać z rodzaju asortymentu.",
          "W sklepie odzieżowym istotne będą na przykład tabela rozmiarów i skład tkaniny. Przy bardziej technicznych produktach większe znaczenie mogą mieć parametry, porównanie wariantów albo dodatkowe materiały pomagające dobrać właściwy model. Dobrym przykładem jest [sklep LumiKids](/projekty/lumikids), gdzie przebudowałem między innymi karty produktów z tabelami rozmiarów i składem tkanin oraz architekturę kategorii.",
          "Podobnie podchodzę do koszyka i checkoutu. Im więcej zbędnych pól, rozpraszaczy i niejasnych komunikatów, tym większa szansa, że użytkownik przerwie zakup. Szczególnie ważna jest wersja mobilna, gdzie mały ekran szybko obnaża źle zaprojektowany formularz. W odpowiednim miejscu można też zaplanować dosprzedaż produktów powiązanych, ale nie powinna ona utrudniać finalizacji zamówienia.",
        ],
      },
      {
        id: "wymogi-prawne-sklepu",
        heading: "Wymogi prawne trzeba uwzględnić również technicznie",
        body: [
          "Sklep internetowy musi być przygotowany nie tylko do przyjmowania zamówień. Część obowiązków prawnych wpływa bezpośrednio na sposób działania strony, kart produktów, promocji oraz narzędzi analitycznych.",
          "Od 1 stycznia 2023 roku przy informowaniu o obniżce ceny trzeba wskazywać najniższą cenę z 30 dni przed obniżką. W sklepie oznacza to konieczność prawidłowego zapisywania historii cen i automatycznego wyświetlania wymaganej informacji przy promocjach. UOKiK wskazuje, że obowiązek dotyczy informacji o konkretnych obniżkach, również prezentowanych w sklepach internetowych.",
          "Od 13 grudnia 2024 roku stosowane jest także unijne rozporządzenie GPSR 2023/988 dotyczące ogólnego bezpieczeństwa produktów. Przy sprzedaży na odległość oferta produktu powinna zawierać między innymi dane producenta, w tym dane kontaktowe, a także wymagane ostrzeżenia i informacje dotyczące bezpieczeństwa. Rozporządzenie zastąpiło wcześniejszą dyrektywę 2001/95/WE.",
          "Dochodzi do tego RODO, polityka prywatności oraz prawidłowa obsługa zgód na cookies. Narzędzia analityczne wymagające zgody nie powinny rozpoczynać śledzenia użytkownika przed dokonaniem przez niego odpowiedniego wyboru. Regulamin musi także uwzględniać zasady odstąpienia od umowy. Konsument kupujący przez internet ma co do zasady 14 dni na odstąpienie od umowy bez podawania przyczyny, z uwzględnieniem przewidzianych prawem wyjątków.",
        ],
      },
      {
        id: "migracja-i-przejecie-sklepu",
        heading: "Migracja sklepu wymaga więcej niż skopiowania produktów",
        body: [
          "Przy przejęciu istniejącego sklepu najpierw sprawdzam jego stan techniczny i dane, które trzeba zachować. Dotyczy to nie tylko produktów, ale również klientów, zamówień, kategorii oraz adresów URL. Migracje realizuję między innymi z Shopera, IdoSell i Shopify do WooCommerce.",
          "Szczególnej uwagi wymagają adresy istniejących stron. Jeżeli nowy sklep zmienia strukturę kategorii albo kart produktów, przygotowuję przekierowania 301 ze starych adresów na nowe. Bez tego użytkownicy mogą trafiać na błędy, a wypracowane wcześniej adresy przestają prowadzić do właściwych treści.",
          "Przy przejęciu sklepu po innym wykonawcy sprawdzam też motyw, wykorzystywane wtyczki, wersje PHP i WordPressa, sposób wykonywania kopii zapasowych, wydajność oraz elementy wymagające aktualizacji. Dopiero po takim przeglądzie można rozsądnie zdecydować, które części zachować, które przebudować, a których dalsze utrzymywanie nie ma sensu. Przykładem rozbudowanego sklepu WooCommerce, nad którym pracowałem, jest [Kosmoteka](/projekty/kosmoteka), z własnym projektem kart produktów, poradnikami zakupowymi i połączeniem z danymi hurtowni.",
        ],
      },
      {
        id: "b2b-i-sprzedaz-za-granice",
        heading: "WooCommerce może obsługiwać B2B i sprzedaż zagraniczną",
        body: [
          "Sklep internetowy WooCommerce nie musi być ograniczony do klasycznej sprzedaży detalicznej. Przy odpowiedniej architekturze można przygotować rozwiązanie, w którym różne grupy klientów widzą inne warunki handlowe. W B2B mogą to być na przykład osobne ceny dla określonych grup odbiorców czy minimalne wartości albo ilości zamówienia.",
          "Jeżeli firma planuje sprzedaż poza Polską, zakres prac obejmuje również wersje językowe oraz dostosowanie zawartości sklepu do poszczególnych rynków. Ustalam to na samym początku, ponieważ wielojęzyczność wpływa nie tylko na teksty, ale też na strukturę produktów, kategorie, treści informacyjne i sposób późniejszego zarządzania ofertą.",
          "Przy średnim sklepie obejmującym B2B, wersje językowe i migrację zakładam zwykle 10-14 tygodni od warsztatu do uruchomienia. Mniejszy sklep, bez podobnie rozbudowanego zakresu, zwykle mieści się w 6-8 tygodniach. Warunkiem sprawnego wdrożenia jest jednak dostępność materiałów i danych, których sklep potrzebuje do startu.",
        ],
      },
      {
        id: "aktualizacje-i-staging",
        heading: "Po starcie potrzebne są aktualizacje, kopie zapasowe i staging",
        body: [
          "Uruchomienie sklepu nie oznacza końca pracy technicznej. WordPress, WooCommerce i rozszerzenia są regularnie aktualizowane, a kolejne wersje mogą zmieniać sposób działania poszczególnych funkcji. W sklepie obsługującym realne zamówienia większych zmian nie testuje się bezpośrednio na produkcji.",
          "Dlatego przy dalszym rozwoju ważne są regularne kopie zapasowe i środowisko stagingowe, czyli oddzielna kopia sklepu służąca do testowania aktualizacji oraz nowych funkcji. Pozwala to sprawdzić zmiany przed wdrożeniem ich dla klientów, zamiast odkrywać konflikt wtyczek lub problem z koszykiem dopiero podczas składania zamówienia.",
          "Wydajność również wymaga kontroli wraz z rozwojem katalogu i ruchu. W projektach korzystam między innymi z cache LiteSpeed, Cloudflare CDN i Redis object cache, a moim celem przy optymalizacji jest LCP poniżej 2 sekund. Jeżeli po uruchomieniu potrzebujesz stałego utrzymania technicznego, aktualizacji i reagowania na problemy, osobno realizuję [opiekę nad sklepem](/uslugi/opieka-wordpress).",
        ],
      },
    ],
  },
  "tworzenie-stron-www": {
    heading: "Jakie strony www tworzę dla firm we Wrocławiu i nie tylko",
    intro: [
      "**Tworzę strony www, które dobieram do sposobu działania firmy, jej oferty i tego, co strona ma faktycznie robić dla klienta.** Przy tworzeniu stron www we Wrocławiu nie zaczynam od wyboru technologii, lecz od prostszego pytania: czy potrzebujesz przede wszystkim dobrze pokazać ofertę, pozyskiwać zapytania, prowadzić kampanie, publikować treści, sprzedawać online, czy obsługiwać bardziej niestandardowy proces.",
      "Dla właściciela małej firmy oznacza to, że nie musisz wiedzieć, czym różni się CMS od frameworka ani zastanawiać się, jakie rozwiązanie jest modne. Wyjaśniam różnice po ludzku i proponuję technologię adekwatną do celu. Od 2020 roku realizuję komercyjne wdrożenia dla firm z Polski i Niemiec, między innymi z branży hotelarskiej, prawniczej, gastronomicznej, e-commerce i lokalnych usług. Kod przygotowuję sam, więc w sprawach dotyczących projektu rozmawiasz bezpośrednio ze mną.",
    ],
    sections: [
      {
        id: "jaka-strona-wybrac",
        heading: "Jaką stronę wybrać do swojej firmy",
        body: [
          "Nie każda firma potrzebuje rozbudowanego serwisu. Czasami kilka dobrze przygotowanych podstron wystarcza, żeby jasno przedstawić ofertę i ułatwić klientowi podjęcie decyzji. Innym razem strona musi obsługiwać kampanie reklamowe, regularne publikacje albo sprzedaż. Dlatego zakres dopasowuję do konkretnego modelu biznesowego.",
          "Najczęściej powstają u mnie:",
        ],
        list: [
          "**wizytówka internetowa**, dla jednoosobowej działalności lub małej firmy, która potrzebuje podstawowej obecności w sieci i prostego przedstawienia usług;",
          "**strona firmowa z ofertą**, dla firmy mającej kilka usług, grup klientów lub obszarów działalności, które trzeba czytelnie uporządkować;",
          "**landing page pod kampanię**, dla firmy kierującej ruch z Google Ads, Meta Ads, newslettera lub konkretnej akcji promocyjnej;",
          "**strona z blogiem lub bazą wiedzy**, dla firmy, która chce regularnie publikować treści, odpowiadać na pytania klientów i rozwijać widoczność w wyszukiwarkach;",
          "**sklep internetowy**, dla firmy sprzedającej produkty online i potrzebującej katalogu, koszyka, płatności oraz zarządzania zamówieniami.",
        ],
        outro: [
          "W praktyce jedna strona może łączyć kilka z tych funkcji. Serwis usługowy może mieć blog, a strona producenta dodatkowy katalog produktów bez sprzedaży online. Jeśli sprzedaż jest kluczową częścią projektu, mogę przygotować [sklep na WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
        ],
      },
      {
        id: "wordpress-czy-nextjs",
        heading: "WordPress czy Next.js zależy przede wszystkim od sposobu korzystania ze strony",
        body: [
          "Technologię dobieram do tego, **kto będzie edytował treści i jak dużo własnej logiki potrzebuje strona**. Jeśli właściciel lub pracownicy firmy chcą samodzielnie zmieniać teksty, zdjęcia, ofertę czy wpisy, dobrym rozwiązaniem zwykle jest [strona na WordPressie](/uslugi/tworzenie-stron-wordpress). W nowych projektach przygotowuję własny motyw zamiast budować stronę w Elementorze. Dzięki temu edytowane sekcje odpowiadają projektowi, zamiast zamieniać panel w zestaw przypadkowych klocków.",
          "Next.js wybieram wtedy, kiedy projekt wychodzi poza klasyczną stronę informacyjną. Może chodzić o konfigurator, panel klienta, nietypowe formularze, własne procesy lub integracje z API. W takim przypadku przygotowuję [stronę w Next.js](/uslugi/aplikacje-nextjs), a jeśli potrzebna jest wygodna edycja treści, można połączyć ją z systemem takim jak Sanity lub Strapi.",
          "Kreator typu Wix również może być sensownym wyborem. Jeżeli potrzebujesz bardzo prostej strony, akceptujesz działanie w ramach jednego ekosystemu i nie przewidujesz większego rozwoju, nie zawsze istnieje powód, żeby budować rozwiązanie indywidualne. Problem pojawia się wtedy, gdy firma zaczyna potrzebować większej swobody, nietypowych funkcji albo chce uniezależnić rozwój strony od ograniczeń konkretnej platformy. Patrz więc nie tylko na łatwość uruchomienia strony, ale też na własność rozwiązania, możliwości rozbudowy oraz koszty utrzymania w dłuższej perspektywie.",
        ],
      },
      {
        id: "koszt-strony-www",
        heading: "Od czego zależy koszt strony www",
        body: [
          "Koszt stworzenia strony www zależy przede wszystkim od zakresu prac. Dwie strony o podobnej liczbie podstron mogą wymagać zupełnie innego nakładu pracy, jeśli jedna bazuje na kilku powtarzalnych układach, a druga ma wiele indywidualnych widoków, funkcji i integracji.",
          "Znaczenie ma liczba podstron oraz liczba różnych szablonów. Osobnym zadaniem jest zaprojektowanie strony głównej, podstrony usługi, wpisu blogowego czy widoku konkretnego typu oferty. Na wycenę wpływa również to, czy projekt interfejsu powstaje indywidualnie, czy bazuje na gotowym szablonie. Podobnie jest z treściami i zdjęciami. Jeżeli materiały są gotowe, można od razu uwzględnić je w strukturze. Jeśli dopiero mają powstać, sposób ich przygotowania ustalamy na starcie.",
          "Kolejna grupa to funkcje dodatkowe. Formularz kontaktowy jest znacznie prostszym elementem niż system rezerwacji, płatności, połączenie z zewnętrznym systemem czy bardziej rozbudowana automatyzacja. Zakres zwiększają także wersje językowe i blog, szczególnie gdy wymagają dodatkowych szablonów lub odmiennej organizacji treści.",
          "Po uruchomieniu strony pozostają również koszty stałe. Najczęściej są to domena i hosting, a opcjonalnie także bieżąca opieka techniczna. Ich rodzaj zależy od technologii oraz wielkości projektu, dlatego uwzględniam je już przy wyborze rozwiązania, zamiast patrzeć wyłącznie na koszt samego wykonania strony.",
        ],
      },
      {
        id: "co-przygotowac",
        heading: "Co warto przygotować przed rozpoczęciem projektu",
        body: [
          "Nie musisz przychodzić z kompletną dokumentacją ani gotową makietą strony. Im więcej podstawowych materiałów uda się jednak zebrać przed startem, tym łatwiej ustalić strukturę serwisu i uniknąć sytuacji, w której na późnym etapie okazuje się, że brakuje ważnej usługi albo całej grupy treści.",
          "Najbardziej przydatne są:",
        ],
        list: [
          "logo i podstawowe materiały związane z identyfikacją firmy;",
          "zdjęcia, jeśli firma ma własne fotografie produktów, realizacji, zespołu lub miejsca;",
          "gotowe teksty albo materiały, na podstawie których teksty będą przygotowywane;",
          "lista usług, produktów lub głównych obszarów oferty;",
          "dostęp do domeny i hostingu, jeśli są już wykupione;",
          "przykłady stron, które Ci się podobają, najlepiej z krótką informacją, co konkretnie zwróciło Twoją uwagę.",
        ],
        outro: [
          "Nie trzeba też czekać z projektem do momentu, kiedy każdy materiał będzie idealny. Ważniejsze jest ustalenie, co już istnieje, czego brakuje i co musi znaleźć się na stronie przed publikacją. Dzięki temu projekt można oprzeć na rzeczywistych potrzebach firmy zamiast wypełniać strukturę przypadkową treścią.",
        ],
      },
      {
        id: "google-i-wyszukiwarki-ai",
        heading: "Strona powinna być przygotowana pod Google i wyszukiwarki AI",
        body: [
          "Tworzenie stron internetowych we Wrocławiu coraz rzadziej sprowadza się do samego zdobycia pozycji na kilka fraz. Strona powinna mieć strukturę, którą potrafią poprawnie interpretować zarówno tradycyjne wyszukiwarki, jak i systemy korzystające z treści internetowych do generowania odpowiedzi.",
          "Podstawą jest logiczna hierarchia nagłówków i jasne przypisanie tematu do konkretnej podstrony. Strona główna nie powinna próbować odpowiadać szczegółowo na każde możliwe pytanie. Osobne usługi, lokalizacje czy istotne zagadnienia warto rozdzielić tam, gdzie ma to sens dla użytkownika. Pomaga to również wyszukiwarce zrozumieć relacje między poszczególnymi częściami serwisu.",
          "Znaczenie ma szybkość działania, poprawny kod oraz dane strukturalne, jeśli odpowiadają rodzajowi zawartości strony. W przypadku firmy działającej lokalnie dochodzi lokalne SEO, czyli między innymi spójne informacje o działalności, odpowiednio przygotowane podstrony usług i logiczne powiązanie treści z lokalizacją. Po publikacji istotnym narzędziem jest Google Search Console, dzięki któremu można sprawdzać indeksowanie i wykrywać problemy techniczne związane z obecnością strony w Google.",
          "Przygotowanie pod wyszukiwarki AI nie polega na dodaniu specjalnego przycisku ani magicznego pliku, który gwarantuje cytowanie firmy. Najważniejsze pozostają jednoznaczne informacje, dobrze zorganizowana treść, techniczna dostępność strony i takie opisanie usług, aby zarówno człowiek, jak i system analizujący stronę mógł zrozumieć, czym firma się zajmuje, dla kogo pracuje i czego dotyczą poszczególne podstrony.",
        ],
      },
      {
        id: "bezpieczenstwo-rodo-dostepnosc",
        heading: "Bezpieczeństwo, RODO i dostępność trzeba uwzględnić przed publikacją",
        body: [
          "Bezpieczeństwo strony zaczyna się od poprawnej konfiguracji SSL i sposobu jej utrzymania. W rozwiązaniach, które wymagają aktualizacji systemu, wtyczek lub zależności, ważne jest ich regularne wykonywanie. Potrzebne są też kopie zapasowe dopasowane do charakteru serwisu, szczególnie gdy na stronie regularnie zmieniają się treści albo pojawiają się dane użytkowników.",
          "Osobnym tematem jest RODO i analityka. Jeżeli strona wykorzystuje narzędzia zapisujące pliki cookies wymagające zgody, mechanizm zgody powinien działać przed uruchomieniem takiej analityki. Potrzebna jest również polityka prywatności odpowiadająca temu, jakie dane strona faktycznie zbiera i za pomocą jakich narzędzi. Zakres wymaganych dokumentów i konfiguracji zależy więc od funkcji konkretnej strony.",
          "Coraz większe znaczenie ma także dostępność cyfrowa. Czytelna struktura, odpowiedni kontrast, obsługa klawiaturą, teksty alternatywne i poprawna semantyka pomagają korzystać ze strony osobom z różnymi niepełnosprawnościami, a przy okazji zwykle poprawiają ogólną jakość interfejsu. Wykonuję również [audyt dostępności](/audyt-wcag) według WCAG 2.1 AA, jeśli firma potrzebuje osobnego sprawdzenia istniejącego serwisu.",
        ],
      },
      {
        id: "wspolpraca-zdalna",
        heading: "Współpracuję zdalnie z firmami z Wrocławia, całej Polski i Niemiec",
        body: [
          "Jako freelancer web developer działam we Wrocławiu, a współpracę przy projektach prowadzę zdalnie. Spotkanie startowe odbywa się online, dlatego lokalizacja firmy nie ogranicza projektu. Pracuję z firmami z Wrocławia, innych części Polski oraz z Niemiec.",
          "Taki model jest wygodny również dla osoby, która zamawia pierwszą stronę internetową dla firmy i nie chce śledzić technicznych szczegółów wdrożenia. Komunikacja dotyczy przede wszystkim decyzji potrzebnych do stworzenia strony: treści, układu, funkcji, materiałów i sposobu prezentowania oferty. Nie trzeba instalować środowiska programistycznego ani samodzielnie sprawdzać kodu.",
          "Po kolejnych etapach udostępniam link do wersji testowej. Możesz więc otworzyć stronę w zwykłej przeglądarce, zobaczyć aktualny stan projektu i odnieść uwagi do konkretnego widoku. Przy stronie internetowej dla firmy jest to szczególnie pomocne, ponieważ projekt można oceniać na podstawie realnego działania, a nie wyłącznie technicznego opisu tego, co dopiero ma powstać.",
        ],
      },
    ],
  },
  "aplikacje-nextjs": {
    heading: "Strona Next.js daje firmie szybkość dziś i swobodę rozwoju jutro",
    intro: [
      "**Strona Next.js sprawdza się wtedy, gdy firma potrzebuje szybkiego serwisu, dobrej widoczności w Google i rozwiązania, którego nie trzeba przebudowywać od podstaw wraz z rozwojem biznesu.** Przy tworzeniu stron Next.js mogę zacząć od stosunkowo prostego serwisu firmowego, a później rozbudować go o katalog, wyszukiwarkę, konta użytkowników, dane z zewnętrznych systemów czy funkcje typowe dla aplikacji.",
      "Z perspektywy właściciela firmy ważniejsze od nazwy technologii jest to, jaki daje ona efekt. Next.js pozwala mi budować stronę tak, aby użytkownik szybko otrzymywał potrzebną treść, Google mogło ją poprawnie odczytać, a kolejne funkcje dało się dodawać bez wciskania ich na siłę w konstrukcję, która od początku była przeznaczona do czegoś prostszego. Poniżej wyjaśniam te różnice bez zakładania, że znasz programistyczne skróty.",
    ],
    sections: [
      {
        id: "co-zyskuje-firma",
        heading: "Co firma zyskuje na stronie zbudowanej w Next.js",
        body: [
          "Dobra strona firmowa nie powinna zmuszać klienta do zastanawiania się nad technologią. Powinna otwierać się szybko, prowadzić do właściwej informacji i działać stabilnie zarówno na telefonie, jak i na komputerze. Next.js daje mi dużą kontrolę nad sposobem, w jaki strona jest dostarczana użytkownikowi. Dzięki temu mogę ograniczyć ilość niepotrzebnej pracy wykonywanej przez jego przeglądarkę i przygotować najważniejsze treści wcześniej.",
          "Dla firmy przekłada się to przede wszystkim na cztery obszary:",
        ],
        list: [
          "**szybkość**, czyli krótsze oczekiwanie na treść i mniej elementów ładowanych bez potrzeby,",
          "**SEO**, ponieważ treść podstron może być od razu dostępna dla wyszukiwarki wraz z właściwymi adresami, tytułami i opisami,",
          "**bezpieczeństwo**, bo publiczna strona nie musi udostępniać typowego panelu administracyjnego pod tym samym adresem,",
          "**skalowanie**, czyli możliwość rozwijania serwisu od kilku podstron do dużej liczby lokalizacji, ofert, produktów albo funkcji opartych na danych.",
        ],
        outro: [
          "Skalowanie nie musi przy tym oznaczać od razu dużej aplikacji. Dobrym przykładem jest [Kantorymapa](/projekty/kantorymapa). Serwis ma 140 podstron miast oraz 1900 stron kantorów generowanych statycznie podczas budowania. Kursy NBP są automatycznie odświeżane raz dziennie, a sam serwis ładuje się poniżej sekundy. Użytkownik widzi po prostu szybką stronę, choć pod spodem pracuje znacznie więcej elementów niż w klasycznej kilkuzakładkowej witrynie.",
        ],
      },
      {
        id: "ssr-ssg-isr",
        heading: "SSR, SSG i ISR określają, kiedy powstaje gotowa podstrona",
        body: [
          "Przy stronie internetowej można uprościć temat do jednego pytania: **kiedy serwer ma przygotować treść, którą zobaczy użytkownik?** W Next.js nie muszę wybierać jednej odpowiedzi dla całego serwisu. Różne podstrony mogą działać na różne sposoby w zależności od tego, jak często zmieniają się informacje.",
          "SSG oznacza, że gotowa podstrona powstaje wcześniej, podczas budowania serwisu. Kiedy klient ją otwiera, nie trzeba za każdym razem składać jej od nowa. To dobre rozwiązanie dla treści, które nie zmieniają się co minutę. Tak można obsłużyć na przykład katalog zawierający tysiące lokalizacji generowanych automatycznie na podstawie danych. Właśnie taki model wykorzystuję między innymi w projektach z dużą liczbą stron lokalnych.",
          "SSR działa inaczej. Strona jest przygotowywana na serwerze wtedy, gdy pojawia się żądanie użytkownika. Ma to sens tam, gdzie zawartość zależy od aktualnych danych albo konkretnej sytuacji i powinna zostać ustalona w chwili wejścia na podstronę.",
          "ISR znajduje się pomiędzy tymi rozwiązaniami. Serwis może korzystać z wcześniej przygotowanej strony, ale po określonym czasie odświeżyć jej wersję. Nie trzeba więc przebudowywać wszystkiego za każdym razem, gdy zmienia się pojedyncza informacja. W praktyce dobieram sposób generowania do rodzaju danych, zamiast zmuszać cały serwis do działania według jednego schematu.",
        ],
      },
      {
        id: "nextjs-a-wordpress",
        heading: "Next.js i WordPress rozwiązują częściowo inne problemy",
        body: [
          "WordPress i Next.js nie są zamiennikami w każdej sytuacji. WordPress jest gotowym systemem zarządzania treścią. Next.js jest narzędziem, na którym mogę zbudować zarówno stronę, jak i bardziej indywidualny system. Dlatego wybór zależy przede wszystkim od tego, co strona ma robić teraz i jak może rozwijać się później.",
        ],
        table: {
          caption: "Next.js a WordPress: porównanie z perspektywy firmy",
          head: ["Kryterium", "Next.js", "WordPress"],
          rows: [
            ["Edycja treści", "Wymaga podłączenia CMS lub przygotowania własnego panelu", "Panel do zarządzania treścią jest częścią systemu"],
            ["Szybkość", "Duża kontrola nad sposobem generowania i dostarczania każdej podstrony", "Zależy między innymi od motywu, wtyczek, hostingu i konfiguracji"],
            ["Bezpieczeństwo", "Publiczna warstwa strony może być oddzielona od systemu do edycji treści", "Wymaga regularnego utrzymywania WordPressa, motywu i używanych wtyczek"],
            ["Własna logika", "Dobrze nadaje się do indywidualnych funkcji, danych, kont użytkowników i integracji", "Typowe funkcje często można realizować gotowymi rozwiązaniami, bardziej nietypowe wymagają dodatkowego developmentu"],
            ["Koszt utrzymania", "Zależy od hostingu, usług zewnętrznych i zakresu aplikacji", "Zależy między innymi od hostingu, płatnych wtyczek i opieki technicznej"],
            ["Kiedy wybrać", "Gdy ważna jest wydajność, indywidualne funkcje lub rozwój serwisu oparty na danych", "Gdy głównym zadaniem jest publikacja i wygodna edycja typowej treści firmowej"],
          ],
        },
        outro: [
          "Te podejścia można też połączyć. Jeśli zespół dobrze zna panel WordPressa, nie trzeba z niego rezygnować tylko dlatego, że publiczną część serwisu chcemy zbudować w Next.js. Służy do tego model [headless WordPress](/uslugi/headless-wordpress), w którym WordPress odpowiada za treści, a osobna aplikacja za ich prezentację użytkownikom.",
        ],
      },
      {
        id: "edycja-tresci-nextjs",
        heading: "Treści w Next.js możesz edytować bez zaglądania do kodu",
        body: [
          "Next.js sam w sobie nie narzuca jednego panelu administracyjnego. To ważna różnica względem klasycznego WordPressa. Nie oznacza jednak, że każda zmiana tekstu musi trafiać do programisty. Do projektu mogę podłączyć system zarządzania treścią i określić dokładnie, które elementy mają być dostępne do edycji.",
          "W projektach korzystam między innymi z Sanity lub Strapi. Redaktor może wtedy pracować w panelu, zmieniając przygotowane pola, treści i dane, natomiast sam wygląd strony oraz sposób prezentacji pozostają po stronie aplikacji. Rozdzielenie tych dwóch warstw pozwala zachować spójny projekt bez konieczności budowania każdej podstrony ręcznie.",
          "Drugą możliwością jest wykorzystanie WordPressa wyłącznie jako panelu. Treści nadal wpisujesz wtedy w znanym środowisku, ale użytkownik nie odwiedza strony generowanej przez motyw WordPressa. Next.js pobiera przygotowane informacje i wyświetla je we własnym interfejsie. Taki model może być wygodny szczególnie przy migracji serwisu, którego zespół od lat używa WordPressa do publikowania treści.",
        ],
      },
      {
        id: "migracja-do-nextjs",
        heading: "Migrację do Next.js trzeba zaplanować także pod kątem Google",
        body: [
          "Zmiana technologii strony nie powinna oznaczać wyrzucenia dotychczasowej historii serwisu. Jeżeli istniejąca witryna ma podstrony widoczne w Google, wejścia z wyszukiwarki i linki prowadzące z innych miejsc, podczas migracji trzeba zachować te sygnały tak dokładnie, jak jest to możliwe.",
          "Zaczynam od mapy obecnych adresów i odpowiadających im adresów w nowym serwisie. Jeśli dany URL może pozostać taki sam, zwykle nie ma powodu go zmieniać. Jeżeli struktura musi się zmienić, stary adres powinien kierować użytkownika oraz wyszukiwarkę pod właściwe nowe miejsce za pomocą przekierowania 301. Nie chodzi o przekierowanie wszystkiego na stronę główną, tylko o zachowanie logicznego odpowiednika każdej wartościowej podstrony.",
          "Przenoszę również elementy mające znaczenie dla sposobu interpretowania strony, między innymi tytuły i opisy meta oraz potrzebne dane strukturalne. Po uruchomieniu nowej wersji kontroluję w Google Search Console, czy robot wyszukiwarki prawidłowo przechodzi na nowe adresy i czy nie pojawiają się błędy indeksowania. Szerzej cały proces opisuję w [przewodniku po migracji z WordPressa](/blog/migracja-wordpress-na-nextjs).",
          "Migracja jest więc czymś więcej niż skopiowaniem tekstów do nowego wyglądu. Z punktu widzenia Google zmienia się techniczna wersja serwisu, dlatego trzeba zadbać o ciągłość adresów, informacji o podstronach oraz sposobu, w jaki wyszukiwarka trafia do treści.",
        ],
      },
      {
        id: "strona-czy-aplikacja",
        heading: "Strona firmowa i aplikacja mogą używać tej samej technologii, ale mają inne zadania",
        body: [
          "Nie każdy projekt w Next.js powinien być aplikacją. Jeśli celem jest prezentacja firmy, usług, realizacji, wiedzy i danych kontaktowych, najczęściej wystarczy strona firmowa. Może mieć kilkanaście albo tysiące podstron i nadal pozostawać przede wszystkim serwisem, którego głównym zadaniem jest dostarczenie informacji.",
          "Granica zaczyna się przesuwać, gdy użytkownik nie tylko czyta, ale wykonuje własne operacje. Loguje się, zapisuje informacje, otrzymuje indywidualny wynik, zarządza swoim kontem albo pracuje na danych przechowywanych w bazie. Wtedy projekt staje się aplikacją internetową, nawet jeśli część jego ekranów z zewnątrz wygląda jak zwykła strona.",
          "Przykładem jest [konfigurator dla Galabau Darius](/projekty/galabau-darius). To aplikacja przygotowana dla niemieckiej firmy ogrodniczej. Użytkownik konfiguruje wycenę ogrodzenia w czasie rzeczywistym, a po drugiej stronie działa panel administracyjny z logowaniem przez Clerk i warstwa danych oparta na Prisma. Projekt jest wdrożony na Vercel. W takim przypadku Next.js nie służy wyłącznie do pokazania oferty. Obsługuje proces, w którym użytkownik wprowadza dane i od razu otrzymuje rezultat.",
          "Podobną różnicę widać przy portalach danych. Ceny Notarialne wykorzystują Next.js do prezentowania cen transakcyjnych nieruchomości pochodzących z Rejestru Cen Nieruchomości, map MapLibre oraz tysięcy podstron lokalizacji. Technologia pozostaje ta sama, ale zakres projektu wyznacza rodzaj informacji, liczba danych i działania dostępne dla użytkownika.",
        ],
      },
    ],
  },
};
