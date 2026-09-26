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
  "wdrozenia-ai": {
    heading: "Wdrożenie AI w małej firmie: od wyboru procesu do pomiaru wyniku",
    intro: [
      "Wdrożenie AI nie powinno zaczynać się od pytania, jaki model wybrać. Dla małej firmy ważniejsze jest najpierw wskazanie jednego procesu, który zajmuje czas, powtarza się dostatecznie często i ma jasno rozpoznawalny wynik. Dopiero później można ocenić, czy model językowy, wyszukiwanie w dokumentach albo inny element AI rzeczywiście coś poprawi.",
      "Takie podejście ogranicza koszt i ryzyko. Zamiast budować rozbudowany system dla całej firmy, można przygotować mały prototyp, sprawdzić go na rzeczywistych danych i porównać z dotychczasowym sposobem pracy. Jeżeli rozwiązanie nie poprawia wyniku albo wymaga zbyt dużej kontroli człowieka, projekt zatrzymuje się na tym etapie.",
    ],
    sections: [
      {
        id: "procesy-dla-ai",
        heading: "Które procesy w małej firmie nadają się do AI, a które nie",
        body: [
          "Dobrą wskazówką jest powtarzalność. AI ma większy sens tam, gdzie każdego dnia lub tygodnia pojawiają się podobne zadania oparte na tekście, dokumentach albo dużej liczbie informacji. Może to być na przykład klasyfikowanie przychodzących maili, wyciąganie określonych danych z dokumentów, przygotowywanie szkiców odpowiedzi, wyszukiwanie informacji w firmowej bazie wiedzy albo tworzenie pierwszych wersji opisów.",
          "Model nie musi podejmować całej decyzji. Często lepszym rozwiązaniem jest układ, w którym AI wykonuje pierwszy etap, a człowiek zatwierdza wynik. Przy mailach system może rozpoznać temat i przygotować propozycję odpowiedzi. Przy dokumentach może wydobyć wymagane pola i oznaczyć te przypadki, co do których nie ma pewności.",
          "Nie każdy proces wymaga AI. Jeśli zadanie można opisać prostą regułą typu „jeżeli formularz ma wartość X, wpisz Y do systemu”, zwykła automatyzacja będzie przewidywalniejsza. AI nie jest też dobrym punktem startu tam, gdzie pojedynczy błąd może wywołać poważne skutki, a nie ma skutecznej kontroli przed wykonaniem działania.",
        ],
      },
      {
        id: "wdrozenie-krok-po-kroku",
        heading: "Jak wygląda wdrożenie krok po kroku",
        body: [
          "Zaczynam od rozpisania procesu w obecnej formie. Potrzebuję wiedzieć, skąd przychodzą dane, co robi z nimi pracownik, jakie decyzje podejmuje i jaki wynik powinien powstać. Na tym etapie ustalamy również przypadki wyjątkowe, bo właśnie one często decydują o tym, czy automatyzacja będzie praktyczna.",
          "Kolejny krok to mały prototyp obejmujący jeden proces lub jego fragment. Nie chodzi jeszcze o kompletne rozwiązanie dla całej organizacji. Prototyp powinien pozwolić sprawdzić jakość na rzeczywistych przykładach i zebrać problemy, których nie było widać podczas rozmowy. Typowy przebieg wygląda tak:",
        ],
        list: [
          "wybór jednego procesu i ustalenie stanu obecnego,",
          "przygotowanie danych oraz przykładów do testu,",
          "budowa prototypu,",
          "test na rzeczywistych przypadkach,",
          "poprawa zasad, integracji i kontroli jakości,",
          "decyzja o dalszym wdrożeniu albo zakończeniu projektu.",
        ],
        outro: [
          "Dopiero po udanym teście podłączam kolejne źródła danych, użytkowników albo systemy firmy. Dzięki temu nie inwestujesz w rozbudowaną architekturę, zanim wiadomo, czy podstawowy pomysł działa.",
        ],
      },
      {
        id: "koszt-wdrozenia-ai",
        heading: "Od czego zależy koszt wdrożenia AI",
        body: [
          "Sam dostęp do modelu to tylko jeden składnik kosztu. W rozwiązaniach korzystających z OpenAI lub Anthropic opłaty za API zależą między innymi od wybranego modelu i skali użycia. Przy prototypie mogą być niewielkim elementem projektu, a przy dużej liczbie automatycznych zapytań stają się pozycją, którą trzeba regularnie monitorować.",
          "Drugi ważny element to integracje. System, który przyjmuje tekst w prostym formularzu i zwraca odpowiedź, będzie miał inny zakres niż rozwiązanie pobierające dane z poczty, dokumentów, bazy klientów i wewnętrznego systemu. Im więcej miejsc trzeba połączyć i im starsze są używane narzędzia, tym więcej pracy wymaga bezpieczna wymiana danych.",
          "Znaczenie ma również przygotowanie danych. Baza wiedzy pełna nieaktualnych dokumentów, duplikatów i sprzecznych instrukcji nie stanie się automatycznie dobrą bazą tylko dlatego, że podłączymy do niej model. Czasem przed wdrożeniem więcej pracy wymaga uporządkowanie treści niż samo stworzenie mechanizmu AI.",
          "Do kosztu trzeba też zaliczyć kontrolę jakości i utrzymanie. Modele oraz zewnętrzne API się zmieniają, dlatego rozwiązanie produkcyjne powinno mieć testy, monitoring błędów i sposób sprawdzania, czy wynik nadal spełnia wymagania.",
        ],
      },
      {
        id: "dane-i-rodo",
        heading: "Bezpieczeństwo danych i RODO",
        body: [
          "Pierwsze pytanie brzmi nie „czy możemy wysłać te dane do modelu”, tylko „czy model w ogóle musi je dostać”. Jeżeli do klasyfikacji wiadomości wystarczy temat i fragment treści, nie ma sensu przesyłać całej historii klienta. Ograniczenie zakresu danych zmniejsza ryzyko i upraszcza późniejsze obowiązki.",
          "Tam, gdzie jest to możliwe, można również anonimizować albo pseudonimizować dane przed wysłaniem ich do zewnętrznej usługi. Numery dokumentów, dane kontaktowe czy inne identyfikatory mogą być usuwane, jeżeli nie mają znaczenia dla wykonywanego zadania.",
          "Przy danych osobowych trzeba sprawdzić role stron i podstawę przetwarzania zgodnie z RODO. Jeżeli dostawca usługi przetwarza dane w imieniu firmy, może być potrzebna odpowiednia umowa powierzenia. Trzeba też ustalić, gdzie dane są przetwarzane i jakie warunki dotyczą transferu poza Europejski Obszar Gospodarczy. Te kwestie ocenia się dla konkretnego dostawcy i konkretnego przepływu danych, a nie na podstawie ogólnego założenia, że każde narzędzie AI działa tak samo.",
          "W praktyce pomaga prosta mapa danych: co trafia do modelu, skąd pochodzi, jak długo jest przechowywane, kto ma do niego dostęp i gdzie znajduje się dostawca usługi. Taka mapa pokazuje elementy, które można ograniczyć jeszcze przed uruchomieniem systemu.",
        ],
      },
      {
        id: "ai-act",
        heading: "AI Act w praktyce dla małej firmy",
        body: [
          "AI Act to rozporządzenie UE 2024/1689. Od 2 sierpnia 2026 roku stosuje się między innymi art. 50 dotyczący przejrzystości niektórych systemów AI. Jeśli system AI bezpośrednio rozmawia z człowiekiem, na przykład jako chatbot na stronie internetowej, użytkownik powinien zostać poinformowany, że prowadzi rozmowę z AI, chyba że wynika to jasno z okoliczności.",
          "Przepisy obejmują również obowiązki oznaczania określonych treści generowanych lub modyfikowanych przez AI, między innymi deepfake'ów. Nie oznacza to jednak, że każde wykorzystanie modelu językowego w małej firmie automatycznie podlega najbardziej rozbudowanym obowiązkom przewidzianym przez rozporządzenie.",
          "Obowiązki dotyczące systemów wysokiego ryzyka zostały przesunięte w czasie w ramach pakietu Digital Omnibus z 2026 roku. Typowe zastosowania, takie jak chatbot FAQ, przygotowywanie szkiców opisów czy klasyfikowanie maili, zwykle nie są systemami wysokiego ryzyka. Klasyfikację trzeba jednak sprawdzić osobno dla każdego wdrożenia, bo znaczenie ma nie sama technologia, lecz sposób jej użycia i obszar, w którym wpływa na ludzi.",
          "Praktyczny wniosek dla małej firmy: jeszcze przed publikacją rozwiązania ustal, czy użytkownik powinien dostać informację o kontakcie z AI, jakie dane system przetwarza oraz czy jego zastosowanie nie wchodzi w kategorię wymagającą dodatkowych obowiązków.",
        ],
      },
      {
        id: "pomiar-wdrozenia-ai",
        heading: "Jak mierzyć, czy wdrożenie AI rzeczywiście działa",
        body: [
          "Pomiar powinien zacząć się przed budową prototypu. Jeżeli nie wiadomo, jak długo proces trwa dziś i ile błędów powstaje bez AI, po wdrożeniu trudno ocenić, czy zmiana coś poprawiła.",
          "W zależności od procesu można mierzyć czas potrzebny na obsługę jednej sprawy, liczbę spraw obsłużonych w danym okresie, odsetek wyników wymagających poprawy, liczbę błędów albo koszt wykonania zadania. Przy narzędziu do wyszukiwania wiedzy sprawdzam również, czy pracownik znajduje właściwą odpowiedź i czy system wskazuje odpowiednie źródło. Przy generatorze treści znaczenie ma to, ile szkiców można zaakceptować po niewielkiej korekcie, a ile trzeba napisać od nowa.",
          "Z góry warto określić także warunek zatrzymania projektu. Jeżeli prototyp nadal wymaga ręcznego poprawiania większości wyników, nie skraca procesu albo generuje koszt niewspółmierny do efektu, dalsza rozbudowa nie powinna być automatyczną decyzją.",
          "Dobre wdrożenie AI nie polega na tym, że firma ma nową technologię. Powinno być wiadomo, jaki proces zmieniło, co było mierzone przed uruchomieniem i jaki wynik pojawił się po wdrożeniu. Jeżeli nie da się tego pokazać, rozsądniej poprawić założenia albo wyłączyć rozwiązanie, niż utrzymywać je tylko dlatego, że już powstało.",
        ],
      },
    ],
  },
  "opieka-wordpress": {
    heading: "Opieka nad stroną WordPress: zakres, koszty i zasady współpracy",
    intro: [
      "**W tej części dowiesz się, od czego zależy zakres opieki nad stroną WordPress, jakie zadania możesz rozliczać w banku godzin i kiedy miesięczny abonament ma sens.** Wyjaśniam również, jak przejmuję serwis po innym wykonawcy, w jaki sposób ograniczam ryzyko związane z aktualizacjami oraz gdzie przebiega granica między stałą administracją a osobno wycenianym rozwojem strony.",
      "Dzięki temu łatwiej porównasz oferty wykonawców i sprawdzisz, czy potrzebujesz regularnego wsparcia, czy raczej pomocy przy pojedynczych zadaniach. **Dobrze dopasowana opieka WordPress wynika z rzeczywistego sposobu korzystania ze strony**, a nie tylko z jej wyglądu lub liczby podstron.",
    ],
    sections: [
      {
        id: "koszt-opieki-wynika-z-zakresu-odpowiedzialnosci",
        heading: "Koszt opieki wynika z zakresu odpowiedzialności",
        body: [
          "Koszt opieki nad stroną WordPress zależy przede wszystkim od rodzaju serwisu. Prosta wizytówka firmowa zwykle wymaga mniejszego zakresu kontroli niż regularnie rozwijany blog albo sklep WooCommerce. W przypadku sklepu po zmianach technicznych trzeba uwzględnić między innymi koszyk, formularze zamówienia, płatności i wiadomości wysyłane do klientów. Większa liczba zależności oznacza szerszy zakres testów.",
          "Znaczenie ma również liczba i rodzaj używanych wtyczek. Każda z nich może być aktualizowana w innym terminie, współpracować z motywem lub wpływać na inne elementy strony. Instalacja z kilkoma sprawdzonymi rozszerzeniami jest łatwiejsza w utrzymaniu niż serwis, w którym wiele wtyczek odpowiada za nakładające się funkcje.",
          "Przy ustalaniu zakresu biorę pod uwagę także częstotliwość zmian, wielkość banku godzin i oczekiwany czas reakcji. Firma publikująca nowe materiały co tydzień potrzebuje innego wsparcia niż właściciel strony aktualizujący ofertę raz na kilka miesięcy. Dlatego **abonament na opiekę strony ustalam po rozmowie i sprawdzeniu instalacji**, zamiast przypisywać każdej witrynie taki sam pakiet.",
        ],
      },
      {
        id: "bank-godzin-sluzy-do-biezacych-niewielkich-zmian",
        heading: "Bank godzin służy do bieżących, niewielkich zmian",
        body: [
          "Bank godzin pozwala przekazywać mi drobne zadania bez osobnego ustalania całego projektu przy każdym zgłoszeniu. Sprawdza się zwłaszcza wtedy, gdy strona jest aktywnym narzędziem sprzedaży, a oferta, zespół, realizacje lub informacje dla klientów zmieniają się regularnie.",
          "W ramach dostępnego czasu mogę wykonywać między innymi:",
        ],
        list: [
          "podmianę zdjęć i grafik w istniejących sekcjach,",
          "aktualizację cennika, danych kontaktowych lub godzin działania,",
          "zmianę tekstów przekazanych w gotowej formie,",
          "dodanie podstrony na podstawie istniejącego układu,",
          "poprawkę formularza kontaktowego,",
          "uzupełnienie nowych realizacji albo pozycji w ofercie,",
          "zmianę linków, przycisków lub elementów stopki,",
          "niewielkie poprawki wyglądu na telefonie albo komputerze.",
        ],
        outro: [
          "**Bank godzin nie oznacza nielimitowanego rozwoju strony.** Jego wielkość dobieram do przewidywanej liczby zgłoszeń, a sposób rozliczania ustalam na początku współpracy. Dzięki temu wiesz, które zadania mieszczą się w bieżącej obsłudze, a które powinny zostać zaplanowane jako oddzielny etap.",
        ],
      },
      {
        id: "wieksze-zmiany-wyceniam-jako-osobne-prace",
        heading: "Większe zmiany wyceniam jako osobne prace",
        body: [
          "Stała opieka nad stroną WordPress dotyczy utrzymania serwisu oraz drobnych zmian, które można bezpiecznie wykonać w istniejącej strukturze. Nie obejmuje pełnej przebudowy wyglądu, zaprojektowania nowego serwisu ani wymiany całego motywu. Takie zadania wymagają ustalenia architektury, przygotowania projektu i osobnego harmonogramu, podobnie jak [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress).",
          "Poza abonamentem znajdują się również rozbudowane nowe funkcje, takie jak konfiguratory, nietypowe formularze, integracje z zewnętrznymi systemami czy rozbudowa procesu zakupowego. Osobno wyceniam także pisanie treści, prowadzenie kampanii reklamowych oraz działania, które wymagają stałej obsługi marketingowej.",
          "Wyraźne rozdzielenie utrzymania od rozwoju chroni Twój bank godzin przed wykorzystaniem na projekt, którego nie da się rozsądnie realizować w postaci pojedynczych poprawek. Jeśli zgłoszenie wykracza poza ustalony zakres, najpierw je oceniam i przedstawiam osobną wycenę wraz z zakresem oraz terminem.",
        ],
      },
      {
        id: "nie-kazda-strona-potrzebuje-miesiecznego-abonamentu",
        heading: "Nie każda strona potrzebuje miesięcznego abonamentu",
        body: [
          "Opieka WordPress nie zawsze będzie najbardziej opłacalnym rozwiązaniem. Jeśli masz prostą stronę wizytówkową, treść pozostaje bez zmian, a pomoc jest potrzebna sporadycznie, pojedyncze zlecenia mogą być wystarczające. Płacenie co miesiąc za gotowość do zmian, których w praktyce nie zlecasz, może nie mieć uzasadnienia.",
          "Miesięczna współpraca ma więcej sensu, gdy strona regularnie się rozwija, generuje zapytania, obsługuje sprzedaż albo zawiera elementy wymagające kontroli. Liczy się również to, jak dotkliwa byłaby awaria formularza, niedostępność ważnej podstrony czy błąd po aktualizacji. **Im większą rolę serwis odgrywa w codziennym działaniu firmy, tym bardziej uzasadniona jest stała administracja WordPress.**",
          "Przed rozpoczęciem współpracy oceniam więc nie tylko technologię, ale też sposób wykorzystywania witryny. Czasami rozsądniejszym rozwiązaniem jest uporządkowanie serwisu w ramach jednego zlecenia, a następnie zlecanie zmian wtedy, gdy rzeczywiście się pojawią.",
        ],
      },
      {
        id: "przejecie-strony-zaczynam-od-dostepow-i-przegladu-instalacji",
        heading: "Przejęcie strony zaczynam od dostępów i przeglądu instalacji",
        body: [
          "Mogę przejąć opiekę nad stroną WordPress wykonaną przez inną osobę lub firmę. Na początku potrzebuję dostępu do panelu administracyjnego WordPressa i hostingu. Zależnie od konfiguracji przydatne mogą być również dane do domeny, narzędzia zarządzającego kopiami, panelu pocztowego lub usług połączonych ze stroną. Zakres wymaganych dostępów ustalam po sprawdzeniu, gdzie znajdują się poszczególne elementy.",
          "Następnie przeglądam motyw, aktywne i nieaktywne wtyczki, wersję WordPressa oraz podstawową konfigurację serwera. Sprawdzam, czy dostępna jest działająca kopia zapasowa i czy można ją odtworzyć. Weryfikuję też, czy w instalacji nie ma zbędnych kont, porzuconych rozszerzeń lub zaległości, które zwiększają ryzyko problemów podczas późniejszych zmian.",
          "Po przeglądzie przygotowuję listę rzeczy do uporządkowania. Krytyczne naprawy mogą wymagać osobnego zlecenia przed uruchomieniem regularnej administracji WordPress. Jeśli strona ma również problemy z wydajnością, opiekę można poprzedzić [przyspieszeniem strony WordPress](/uslugi/przyspieszanie-stron-wordpress). Dopiero na podstawie stanu serwisu można odpowiedzialnie ustalić zakres dalszej współpracy.",
        ],
      },
      {
        id: "aktualizacja-wymaga-kopii-i-sprawdzenia-dzialania-strony",
        heading: "Aktualizacja wymaga kopii i sprawdzenia działania strony",
        body: [
          "Kliknięcie przycisku aktualizacji nie kończy zadania. Nowa wersja wtyczki może zmienić sposób działania formularza, wygląd sekcji albo współpracę z motywem. Problem bywa widoczny dopiero na konkretnej podstronie lub podczas wykonywania określonej czynności, dlatego aktualizacje wymagają kontroli.",
          "Przed zmianami tworzę kopię plików i bazy danych. Gdy konfiguracja strony na to pozwala, sprawdzam aktualizację na kopii serwisu, a następnie kontroluję kluczowe elementy. Zakres testów zależy od rodzaju witryny. Na stronie firmowej może to być formularz i prezentacja oferty, natomiast w WooCommerce również koszyk oraz proces składania zamówienia.",
          "Jeżeli aktualizacja powoduje błąd, **możliwość powrotu do działającej wersji jest ważniejsza niż samo szybkie zainstalowanie nowego wydania**. Po przywróceniu strony można ustalić, czy problem wynika z konfliktu wtyczek, motywu lub konfiguracji. Właścicielom nowych instalacji pomocny może być również poradnik [co zrobić po instalacji WordPressa](/blog/co-zrobic-po-instalacji-wordpressa), który porządkuje podstawowe działania po uruchomieniu systemu.",
        ],
      },
      {
        id: "ai-podpowiada-rozwiazania-ale-nie-przejmuje-odpowiedzialnosc",
        heading: "AI podpowiada rozwiązania, ale nie przejmuje odpowiedzialności za stronę",
        body: [
          "Narzędzie AI może wyjaśnić, gdzie zmienić tekst, przygotować fragment kodu albo zasugerować sposób rozwiązania błędu. Nie oznacza to jednak, że samodzielnie wykona bezpieczną zmianę w Twojej konkretnej instalacji. Bez odpowiednich dostępów AI nie sprawdzi konfiguracji serwera, wersji motywu, używanych wtyczek ani zależności między nimi.",
          "AI nie odpowiada też za przygotowanie kopii zapasowej, jej odtworzenie i ocenę skutków aktualizacji. Może podać instrukcję, ale nie zauważy automatycznie, że po zmianie formularz przestał wysyłać wiadomości, układ rozjechał się na telefonie albo proces zakupowy nie dochodzi do końca. Do tego potrzebne są dostęp do strony, testy i decyzja, czy pozostawić zmianę, poprawić ją, czy wrócić do wcześniejszej wersji.",
          "Sam korzystam z technologii jako wsparcia tam, gdzie pomaga sprawniej analizować problem, ale **opieka nad stroną WordPress obejmuje także wykonanie, weryfikację i odpowiedzialność za techniczny przebieg prac**. Dla nietechnicznego właściciela firmy różnica polega na tym, że nie musi sam oceniać, czy wygenerowana instrukcja pasuje do jego serwisu i czy jej wdrożenie nie uszkodzi innych elementów.",
        ],
      },
    ],
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
    heading: "Integracja WooCommerce z BaseLinker w codziennej obsłudze sklepu",
    intro: [
      "**W tym bloku wyjaśniam, jak integracja WooCommerce z BaseLinker wpływa na codzienną sprzedaż, od czego zależy jej zakres i na co zwrócić uwagę przed uruchomieniem synchronizacji.** Dzięki temu łatwiej ocenisz, czy potrzebujesz prostego połączenia sklepu, czy konfiguracji obejmującej także magazyn, faktury, wysyłki oraz dodatkowe kanały sprzedaży.",
      "BaseLinker WooCommerce nie jest jednym gotowym schematem odpowiednim dla każdej firmy. Inaczej wygląda konfiguracja sklepu z kilkudziesięcioma produktami i jednym miejscem sprzedaży, a inaczej system wykorzystujący warianty, kilka hurtowni, Allegro oraz zewnętrzny program magazynowy. Dlatego przed wdrożeniem ustalam nie tylko, co ma zostać połączone, lecz także jak Twoja firma rzeczywiście realizuje zamówienia.",
    ],
    sections: [
      {
        id: "co-baselinker-zmienia-w-codziennej-obsludze-woocommerce",
        heading: "Co BaseLinker zmienia w codziennej obsłudze WooCommerce?",
        body: [
          "Najważniejszą zmianą jest możliwość przeniesienia obsługi zamówień do jednego środowiska. Zamiast osobno sprawdzać sklep, platformę marketplace i pozostałe kanały, możesz pracować na wspólnej kolejce zamówień. Ma to znaczenie szczególnie wtedy, gdy zamówienia obsługuje więcej niż jedna osoba albo gdy firma korzysta z kilku sposobów dostawy.",
          "Połączenie sklepu z BaseLinkerem może również ograniczyć ręczne przepisywanie danych. Informacje potrzebne do realizacji zamówienia są pobierane z WooCommerce, a dalsze czynności można uporządkować w ramach jednego procesu. Nie oznacza to, że każda operacja od razu stanie się automatyczna. Zakres zależy od konfiguracji sklepu, dostępnych integracji oraz zasad obowiązujących w Twojej firmie.",
          "Praktyczne korzyści najczęściej dotyczą następujących obszarów:",
        ],
        list: [
          "obsługi zamówień z różnych kanałów w jednym miejscu,",
          "korzystania ze wspólnych stanów magazynowych,",
          "ograniczenia ręcznego kopiowania danych między systemami,",
          "uporządkowania przygotowania dokumentów i przesyłek.",
        ],
        outro: [
          "Jeżeli dopiero budujesz sklep, sposób późniejszej integracji warto uwzględnić już podczas planowania [sklepu WooCommerce](/uslugi/sklepy-internetowe-woocommerce). Struktura produktów, wariantów i identyfikatorów może później ułatwić lub utrudnić uruchomienie całego procesu.",
        ],
      },
      {
        id: "baselinker-moze-polaczyc-sklep-takze-z-wysylkami-fakturami-i",
        heading: "BaseLinker może połączyć sklep także z wysyłkami, fakturami i marketplace’ami",
        body: [
          "Integracja WooCommerce z BaseLinker nie musi kończyć się na pobieraniu zamówień. System może stać się pośrednikiem pomiędzy sklepem a narzędziami wykorzystywanymi podczas realizacji sprzedaży. Dotyczy to między innymi integracji kurierskich, generowania etykiet, obsługi dokumentów, platform marketplace oraz oprogramowania magazynowego.",
          "Przykładem dodatkowego kanału jest Allegro. Sklep i oferty marketplace mogą korzystać z danych magazynowych zarządzanych w ustalonym miejscu, ale wcześniej trzeba prawidłowo powiązać produkty. Szczególnego znaczenia nabierają wtedy SKU, EAN oraz warianty. Realizacją łączącą WooCommerce i Allegro jest [LumiKids](/projekty/lumikids), natomiast przykładem sklepu działającego na WooCommerce pozostaje [Kosmoteka](/projekty/kosmoteka).",
          "BaseLinker może być również połączony z systemem fakturowym, księgowym, magazynowym albo ERP, jeżeli dane narzędzie udostępnia odpowiednią integrację. **Nie zakładam z góry, że każdy używany przez Ciebie program da się podłączyć w oczekiwany sposób.** Najpierw sprawdzam dostępne możliwości, wymagane dostępy i ograniczenia, a dopiero później określam realny zakres prac.",
        ],
      },
      {
        id: "kierunek-synchronizacji-decyduje-o-tym-ktore-dane-sa-nadrzed",
        heading: "Kierunek synchronizacji decyduje o tym, które dane są nadrzędne",
        body: [
          "Samo włączenie synchronizacji stanów WooCommerce nie wystarcza. Trzeba jeszcze zdecydować, gdzie znajduje się główne źródło informacji. Stan produktu może pochodzić ze sklepu, magazynu BaseLinkera, programu magazynowego albo danych przekazywanych przez hurtownię. Podobną decyzję trzeba podjąć dla cen i informacji produktowych.",
        ],
        table: {"caption":"Kierunek synchronizacji decyduje o tym, które dane są nadrzędne","head":["Dane","Pytanie przed konfiguracją","Ryzyko bez ustalenia zasad"],"rows":[["Stany","Który magazyn jest nadrzędny?","Sprzedaż produktu, którego faktycznie już nie ma"],["Ceny","Gdzie świadomie zmieniasz cenę?","Nadpisanie właściwej ceny wartością z innego źródła"],["Produkty","Po czym system rozpoznaje ten sam produkt?","Powstanie duplikatów lub błędne powiązania"],["Warianty","Jak rozróżniane są rozmiary, kolory lub inne opcje?","Synchronizacja danych z niewłaściwym wariantem"]]},
        outro: [
          "**Źródło nadrzędne powinno być jednoznaczne dla każdego rodzaju danych.** Możliwe jest na przykład pobieranie stanów z magazynu i pozostawienie cen zarządzanych w WooCommerce. Nie należy jednak przyjmować, że wszystkie informacje muszą płynąć w tym samym kierunku.",
          "Typowym błędem jest uruchomienie kilku źródeł aktualizujących tę samą wartość. Wówczas ręcznie ustawiona cena może zostać zmieniona podczas kolejnej synchronizacji. Problemy pojawiają się również wtedy, gdy ten sam produkt ma różne SKU w sklepie, hurtowni i na platformie marketplace. Przed uruchomieniem ustalam więc nie tylko kierunek przepływu, ale też reguły identyfikacji produktów.",
        ],
      },
      {
        id: "koszt-zalezy-od-liczby-kanalow-i-jakosci-danych-produktowych",
        heading: "Koszt zależy od liczby kanałów i jakości danych produktowych",
        body: [
          "Na pracochłonność wpływa przede wszystkim liczba elementów, które mają działać jako jeden system. Sklep połączony z jednym magazynem jest prostszym układem niż sprzedaż obejmująca WooCommerce, Allegro, kilka hurtowni, przewoźników i osobny program magazynowy. Każde kolejne połączenie wymaga sprawdzenia dostępnych danych, zasad synchronizacji oraz zachowania systemu w sytuacjach wyjątkowych.",
          "Znaczenie ma również stan katalogu. Jeżeli produkty mają spójne SKU, poprawne EAN i uporządkowane warianty, łatwiej powiązać odpowiadające sobie pozycje. Braki oraz duplikaty wymagają wcześniejszego uporządkowania. Przy rozbudowanym asortymencie istotna jest też liczba wariantów, ponieważ każdy z nich powinien być jednoznacznie rozpoznawany.",
          "Oddzielnym czynnikiem są hurtownie. Każdy dostawca może przekazywać dane w innym formacie i według innych zasad. Przed określeniem zakresu sprawdzam, jakie informacje są dostępne, jak często mogą być aktualizowane oraz czy pozwalają poprawnie powiązać produkty. Dopiero po takim rozpoznaniu mogę ocenić zakres integracji i ustalić termin.",
        ],
      },
      {
        id: "samodzielne-polaczenie-jest-mozliwe-ale-konfiguracja-wymaga-",
        heading: "Samodzielne połączenie jest możliwe, ale konfiguracja wymaga decyzji",
        body: [
          "Podstawowe połączenie WooCommerce z BaseLinkerem możesz wykonać samodzielnie, jeśli swobodnie poruszasz się w panelach obu systemów. Utworzenie integracji jest jednak tylko początkiem. Najwięcej uwagi wymaga określenie, które dane mają być przesyłane, skąd mają pochodzić oraz co powinno wydarzyć się po zmianie stanu lub statusu zamówienia.",
          "Trudność rośnie, gdy sklep już działa i zawiera niespójny katalog. Włączenie synchronizacji bez wcześniejszego sprawdzenia danych może ujawnić duplikaty, błędne warianty albo rozbieżności pomiędzy kanałami. **Przed uruchomieniem warto wiedzieć, jaki system jest źródłem prawdy dla stanów, cen i produktów.**",
          "Jeżeli konfiguruję integrację, zaczynam od poznania obecnego sposobu pracy. Interesuje mnie nie tylko techniczna możliwość połączenia, ale też to, kto zmienia ceny, gdzie przyjmowany jest towar, jak obsługiwane są zwroty oraz z którego miejsca pracownik pobiera zamówienia. Dzięki temu konfiguracja odpowiada faktycznemu procesowi, zamiast wymuszać przypadkowy sposób obsługi.",
        ],
      },
      {
        id: "bezpieczna-integracja-zaczyna-sie-od-wlasciwych-dostepow",
        heading: "Bezpieczna integracja zaczyna się od właściwych dostępów",
        body: [
          "Połączenie wykorzystujące REST API wymaga kluczy pozwalających BaseLinkerowi komunikować się z WooCommerce. Takich danych nie należy przesyłać przypadkowym osobom ani pozostawiać aktywnych bez potrzeby. **Klucz powinien mieć minimalny zakres uprawnień wystarczający do działania uzgodnionej integracji.** Ogranicza to dostęp do funkcji, które nie są potrzebne w danym wdrożeniu.",
          "Konto BaseLinkera powinno być założone na Twoją firmę. To Ty zachowujesz kontrolę nad rozliczeniami, konfiguracją i użytkownikami. Na czas pracy potrzebuję dostępu pozwalającego ustawić integrację oraz przeprowadzić testy, ale po zakończeniu wdrożenia możesz go odebrać.",
          "Warto również kontrolować, kto ma dostęp administracyjny do WordPressa, WooCommerce i pozostałych podłączonych narzędzi. Gdy zmienia się wykonawca albo pracownik odpowiedzialny za sprzedaż, nieużywane konta oraz klucze powinny zostać usunięte lub unieważnione. Bezpieczeństwo BaseLinker WooCommerce zależy nie tylko od samej technologii, lecz także od uporządkowanego zarządzania dostępami po uruchomieniu sprzedaży.",
        ],
      },
    ],
  },
  "headless-wordpress": {
    heading: "Headless WordPress w praktyce: jak ocenić, czy ta architektura pasuje do Twojej firmy",
    intro: [
      "**W tym poradniku dowiesz się, kiedy headless WordPress jest uzasadnionym wyborem, jakie ma ograniczenia oraz czym różni się od klasycznej strony opartej na WordPressie.** Wyjaśniam też, co dzieje się z wtyczkami, podglądem treści i formularzami, gdzie hostowane są obie części systemu oraz jak wygląda migracja istniejącej strony.",
      "Jeśli porównujesz wykonawców, zwróć uwagę nie tylko na wygląd realizacji, lecz także na sposób rozwiązania codziennej edycji, publikacji i późniejszego utrzymania. WordPress jako headless CMS daje dużą swobodę, ale wprowadza dodatkową warstwę techniczną. Dlatego przed zaproponowaniem tej architektury sprawdzam, czy przyniesie Twojej firmie konkretną korzyść.",
    ],
    sections: [
      {
        id: "headless-wordpress-ma-sens-tylko-przy-konkretnych-wymaganiac",
        heading: "Headless WordPress ma sens tylko przy konkretnych wymaganiach",
        body: [
          "Zwykły WordPress z własnym motywem wystarcza większości stron firmowych. Można w nim przygotować szybki serwis, wygodną edycję sekcji przez pola ACF oraz indywidualny wygląd bez korzystania z Elementora, Divi czy innych kreatorów. Jeżeli potrzebujesz strony usługowej, firmowego bloga, prezentacji oferty i formularza kontaktowego, oddzielanie panelu od frontu może nie dać korzyści proporcjonalnych do kosztu i złożoności.",
          "Headless WordPress zaczyna mieć sens, gdy strona ma współpracować z funkcjami typowymi dla aplikacji, korzystać z wielu źródeł danych albo udostępniać treści w kilku kanałach. To także rozwiązanie dla firmy, która chce zachować znany panel redakcyjny, lecz potrzebuje frontu rozwijanego niezależnie w Next.js.",
          "Przed wyborem tej architektury warto odpowiedzieć na kilka pytań:",
        ],
        list: [
          "Czy strona będzie miała funkcje wykraczające poza standardowy serwis firmowy?",
          "Czy te same treści mają trafiać do więcej niż jednego kanału?",
          "Czy niezależny rozwój frontu jest ważniejszy niż prostota całego systemu?",
          "Czy firma akceptuje utrzymanie dwóch połączonych środowisk?",
        ],
        outro: [
          "Jeżeli na większość tych pytań odpowiadasz przecząco, częściej rekomenduję klasyczny WordPress. Usługę [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress) traktuję jako pełnoprawną alternatywę, a nie słabszą wersję rozwiązania headless.",
        ],
      },
      {
        id: "klasyczny-wordpress-i-headless-roznia-sie-nie-tylko-technolo",
        heading: "Klasyczny WordPress i headless różnią się nie tylko technologią",
        body: [
          "W klasycznym WordPressie panel, motyw i mechanizm wyświetlania strony działają w jednym systemie. W architekturze headless WordPress przechowuje treści, natomiast osobny front pobiera je przez API. Szersze wyjaśnienie tego modelu znajdziesz w materiale [headless CMS: co to jest](/blog/headless-cms-co-to).",
        ],
        table: {"caption":"Klasyczny WordPress i headless różnią się nie tylko technologią","head":["Obszar","Klasyczny WordPress","Headless WordPress"],"rows":[["Edycja treści","Odbywa się w panelu WordPressa","Nadal odbywa się w panelu WordPressa"],["Szybkość","Zależy od motywu, wtyczek, hostingu i optymalizacji","Zależy głównie od sposobu zbudowania i udostępniania frontu"],["Wtyczki","Mogą wpływać bezpośrednio na wygląd i działanie strony","Działają tylko wtedy, gdy ich dane lub funkcje zostaną obsłużone przez front"],["Hosting","Zwykle jedno środowisko","Osobny hosting WordPressa i frontu"],["Koszt utrzymania","Zwykle niższy przy prostych stronach","Może być wyższy ze względu na dwa środowiska"],["Podgląd treści","Najczęściej dostępny od razu","Wymaga przygotowania trybu podglądu"]]},
        outro: [
          "Najważniejsza różnica dotyczy odpowiedzialności za działanie strony. W klasycznym modelu wiele funkcji można dodać i skonfigurować wewnątrz WordPressa. Przy połączeniu WordPress z Next.js trzeba świadomie zdecydować, które dane udostępnia panel, a które zachowania implementuje front.",
        ],
      },
      {
        id: "nie-kazda-wtyczka-dziala-po-oddzieleniu-frontu",
        heading: "Nie każda wtyczka działa po oddzieleniu frontu",
        body: [
          "Po przejściu na headless przestają działać przede wszystkim te wtyczki, które zmieniają kod lub wygląd strony generowanej przez motyw WordPressa. Dotyczy to między innymi kreatorów wizualnych, części galerii, formularzy oraz dodatków osadzających gotowe elementy w szablonie. Wtyczka może nadal działać w panelu, ale jej rezultat nie pojawi się automatycznie na froncie w Next.js.",
          "Podobna zasada dotyczy SEO. Wtyczka może przechowywać tytuł, opis, adres kanoniczny lub ustawienia indeksowania, jednak front musi pobrać te informacje przez API i umieścić je w odpowiednim miejscu strony. Samo zainstalowanie dodatku SEO nie oznacza jeszcze, że wszystkie jego funkcje będą widoczne dla wyszukiwarki.",
          "Rozwiązuję to na poziomie architektury wdrożenia. Dane SEO udostępniam frontowi, formularze obsługuję po stronie aplikacji, a dla nieopublikowanych treści przygotowuję tryb podglądu. Zakres zależy od używanych wtyczek i sposobu pracy redakcji. Dlatego przed migracją sprawdzam nie tylko listę dodatków, lecz także to, do czego rzeczywiście są wykorzystywane.",
        ],
      },
      {
        id: "wordpress-i-front-wymagaja-osobnych-srodowisk-hostingowych",
        heading: "WordPress i front wymagają osobnych środowisk hostingowych",
        body: [
          "WordPress może pozostać na zwykłym hostingu, o ile środowisko zapewnia stabilne działanie panelu i dostęp do danych przez API. Nie musi już obsługiwać całego widoku strony dla użytkownika, ale nadal przechowuje treści, konta redaktorów, media i ustawienia potrzebne do publikacji.",
          "Front w Next.js umieszczam na Vercel albo na własnym VPS. Przy stronie komercyjnej korzystanie z Vercel oznacza wybór planu Pro. Własny VPS może być alternatywą, jeśli przemawiają za nim wymagania techniczne projektu, sposób zarządzania infrastrukturą lub pozostałe usługi działające w firmie.",
          "Dwie części oznaczają też dwa obszary, które trzeba aktualizować, monitorować i zabezpieczać. Awaria panelu nie zawsze musi wyłączyć opublikowaną stronę, ale może uniemożliwić dodawanie nowych treści. Z kolei problem z frontem może wpłynąć na dostępność serwisu mimo prawidłowego działania WordPressa. Sposób publikacji i odświeżania danych dobieram więc do tego, jak często zmieniasz treści i jak szybko aktualizacje powinny pojawiać się na stronie.",
        ],
      },
      {
        id: "migracja-zachowuje-tresci-ale-wymaga-zbudowania-nowego-front",
        heading: "Migracja zachowuje treści, ale wymaga zbudowania nowego frontu",
        body: [
          "Migracja istniejącej strony nie polega na automatycznej zamianie obecnego motywu na aplikację Next.js. Treści mogą pozostać w panelu WordPressa, ale trzeba zbudować nowy front, połączyć go z właściwymi typami danych oraz odtworzyć potrzebne funkcje. Obejmuje to również pola ACF, kategorie, multimedia, wersje językowe i zależności pomiędzy podstronami.",
          "Przed rozpoczęciem sprawdzam strukturę adresów i ustalam, które podstrony mają zachować dotychczasowe adresy. Jeśli adres musi się zmienić, przygotowuję przekierowanie 301 ze starego adresu na nowy. Pomaga to użytkownikom i wyszukiwarkom trafić do właściwej treści, ale **nie obiecuję zachowania konkretnych pozycji w Google**.",
          "Nową wersję można przygotowywać równolegle do działającego serwisu, a przełączenie planuję tak, aby przerwa była jak najkrótsza. Przy zmianie DNS może jednak wystąpić krótka niedostępność. Więcej elementów wymagających kontroli opisuję w poradniku [migracja z WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
        ],
      },
      {
        id: "koszt-i-czas-zaleza-od-funkcji-ktore-trzeba-odtworzyc",
        heading: "Koszt i czas zależą od funkcji, które trzeba odtworzyć",
        body: [
          "Koszt wdrożenia wynika przede wszystkim z zakresu nowego frontu, a nie z samego połączenia WordPressa z API. Prosta prezentacja treści wymaga mniej pracy niż serwis z rozbudowanym filtrowaniem, wieloma formularzami, wyszukiwaniem, kontami użytkowników albo integracjami z zewnętrznymi usługami.",
          "Na zakres prac wpływają przede wszystkim:",
        ],
        list: [
          "liczba typów treści i pól, które ma obsługiwać WordPress,",
          "przygotowanie podglądu nieopublikowanych materiałów,",
          "liczba i sposób działania formularzy,",
          "wersje językowe oraz zależności między tłumaczeniami,",
          "integracje, wyszukiwanie i funkcje aplikacyjne.",
        ],
        outro: [
          "Termin podaję po rozpoznaniu obecnej strony i oczekiwań wobec nowego frontu. Aplikacje i projekty MVP w Next.js powstają zwykle w ciągu 6 do 12 tygodni, ale nie przypisuję tego przedziału automatycznie każdej migracji. Strona z prostą strukturą treści i serwis z wieloma integracjami wymagają innego planu, dlatego wycena obejmuje ustalony zakres oraz termin dopasowany do projektu.",
        ],
      },
    ],
  },
  "aplikacje-react": {
    heading: "Tworzenie aplikacji React: co warto ustalić przed wyborem wykonawcy",
    intro: [
      "**W tym poradniku znajdziesz najważniejsze informacje, które pomogą Ci ocenić zakres aplikacji, wybrać odpowiednią technologię i świadomie porównać wykonawców.** Wyjaśniam, jakie rozwiązania buduję w React, kiedy wykorzystuję Next.js, jak planuję pierwszą wersję produktu oraz co wpływa na czas realizacji.",
      "Tworzenie aplikacji React zaczynam od zrozumienia, kto będzie korzystać z systemu i jakie zadania ma w nim wykonywać. Technologia jest narzędziem, a nie celem samym w sobie. Dlatego przed rozpoczęciem prac ustalam nie tylko listę funkcji, lecz także role użytkowników, źródła danych, potrzebne integracje i elementy, które można bezpiecznie przesunąć do kolejnego etapu.",
    ],
    sections: [
      {
        id: "jakie-aplikacje-buduje-w-react",
        heading: "Jakie aplikacje buduję w React",
        body: [
          "Aplikacje w React sprawdzają się szczególnie tam, gdzie użytkownik nie tylko czyta treść, ale przede wszystkim pracuje z danymi. Może wypełniać formularze, zmieniać ustawienia, przeglądać zamówienia, przygotowywać wycenę albo zarządzać informacjami dostępnymi po zalogowaniu. Interfejs reaguje na jego działania bez konieczności przeładowywania całej strony, dzięki czemu obsługa złożonych procesów może być wygodniejsza.",
          "Jako programista React buduję między innymi:",
        ],
        list: [
          "panele klienta z dostępem do indywidualnych danych, dokumentów lub statusów,",
          "systemy wewnętrzne wspierające pracę zespołu,",
          "konfiguratory produktów, usług i wycen,",
          "narzędzia z logowaniem oraz różnymi poziomami dostępu.",
        ],
        outro: [
          "Przykładem takiego rozwiązania jest [Galabau Darius](/projekty/galabau-darius), czyli projekt wykonany dla klienta z Niemiec. Powstał w nim konfigurator wyceny ogrodzeń na żywo oraz panel administracyjny. Logowanie obsługuje Clerk, dane są powiązane z warstwą przygotowaną przy użyciu Prisma, a aplikacja działa na Vercel. Ten przykład pokazuje, że aplikacja webowa React może łączyć część przeznaczoną dla klientów z narzędziami do obsługi procesu po stronie firmy.",
        ],
      },
      {
        id: "react-czy-next-js-zalezy-od-roli-aplikacji",
        heading: "React czy Next.js zależy od roli aplikacji",
        body: [
          "React służy do budowania interfejsów użytkownika, natomiast Next.js jest frameworkiem opartym na React. Dodaje rozwiązania przydatne między innymi przy tworzeniu publicznych podstron, renderowaniu treści po stronie serwera i łączeniu części aplikacyjnej z serwisem widocznym w wyszukiwarce. Dokładniejsze zestawienie znajdziesz w poradniku [Next.js vs React](/blog/next-js-vs-react-roznice).",
          "Sam React wybieram przede wszystkim do narzędzi działających za logowaniem. W takim systemie widoki nie muszą być indeksowane przez Google, ponieważ są dostępne tylko dla uprawnionych użytkowników. Może to być panel pracownika, zaplecze do obsługi zamówień albo interfejs współpracujący z istniejącym API.",
        ],
        table: {"caption":"React czy Next.js zależy od roli aplikacji","head":["Sytuacja w projekcie","React","Next.js"],"rows":[["Narzędzie działa wyłącznie po zalogowaniu","Zwykle wystarcza","Może być użyty, ale nie zawsze jest potrzebny"],["Aplikacja korzysta z istniejącego API","Dobrze pasuje do warstwy interfejsu","Pasuje, jeśli potrzebne są również funkcje po stronie serwera"],["Projekt ma publiczne strony widoczne w Google","Wymaga dodatkowych decyzji architektonicznych","Zwykle jest lepszym wyborem"],["Część marketingowa i panel mają działać razem","Możliwe, lecz wymaga szerszej konfiguracji","Pozwala połączyć oba obszary w jednym projekcie"]]},
        outro: [
          "Jeśli system ma obejmować także ofertę, publiczne podstrony lub treści pozyskujące ruch z wyszukiwarki, częściej rekomenduję [tworzenie stron Next.js](/uslugi/aplikacje-nextjs). Dobór technologii wynika więc ze sposobu działania produktu, a nie z założenia, że jeden framework będzie właściwy w każdym projekcie.",
        ],
      },
      {
        id: "pierwsza-wersja-powinna-sprawdzac-najwazniejsze-zalozenie",
        heading: "Pierwsza wersja powinna sprawdzać najważniejsze założenie",
        body: [
          "**MVP to pierwsza użyteczna wersja aplikacji, która pozwala zweryfikować pomysł bez budowania od razu wszystkich planowanych funkcji.** Nie oznacza produktu niedopracowanego. Oznacza świadome ograniczenie zakresu do procesu, który przynosi użytkownikowi konkretną wartość i może zostać sprawdzony w praktyce.",
          "Przy planowaniu MVP ustalam, kto skorzysta z aplikacji jako pierwszy, jaki problem ma rozwiązać i jakie działania są konieczne do przejścia całej podstawowej ścieżki. Jeżeli powstaje konfigurator, pierwsza wersja może umożliwiać wybór parametrów, obliczenie wyniku i zapisanie zapytania. Rozbudowane raporty, dodatkowe warianty wyglądu czy automatyzacje administracyjne można dodać po sprawdzeniu, jak narzędzie działa w codziennym użyciu.",
          "Na później odkładam funkcje, które nie są potrzebne do zweryfikowania głównego procesu. Dotyczy to zwykle dodatkowych ról użytkowników, zaawansowanej analityki, wielu metod logowania, rozbudowanych powiadomień lub obsługi rzadkich scenariuszy. Taki podział pomaga szybciej uzyskać działającą aplikację i podejmować kolejne decyzje na podstawie jej rzeczywistego wykorzystania.",
        ],
      },
      {
        id: "koszt-i-czas-wynikaja-z-zakresu-oraz-zaleznosci",
        heading: "Koszt i czas wynikają z zakresu oraz zależności",
        body: [
          "Nie określam kosztu wyłącznie na podstawie liczby widoków. Dwa podobnie wyglądające ekrany mogą wymagać zupełnie innego nakładu pracy. Prosty formularz zapisujący dane różni się od formularza, który sprawdza uprawnienia, pobiera informacje z kilku systemów, obsługuje płatność i uruchamia kolejne działania po stronie serwera.",
          "Na zakres tworzenia aplikacji React wpływają przede wszystkim:",
        ],
        list: [
          "liczba ekranów, formularzy i stanów, które trzeba obsłużyć,",
          "liczba ról użytkowników oraz poziomów dostępu,",
          "integracje z API i systemami zewnętrznymi,",
          "płatności, logowanie i odzyskiwanie dostępu,",
          "projekt oraz struktura bazy danych,",
          "obsługa błędów, testy i wymagania dotyczące wdrożenia.",
        ],
        outro: [
          "Pierwsza wersja aplikacji lub MVP powstaje zwykle w ciągu **6 do 12 tygodni**. Dokładny termin ustalam po briefie i rozpoznaniu zależności. Istotne jest również to, czy firma ma już gotowe API, dokumentację i dostęp do systemów zewnętrznych. Brak tych elementów nie musi blokować projektu, ale wpływa na sposób planowania prac.",
        ],
      },
      {
        id: "aplikacja-react-moze-wspolpracowac-z-istniejacymi-systemami",
        heading: "Aplikacja React może współpracować z istniejącymi systemami",
        body: [
          "Nowa aplikacja nie musi zastępować całego używanego zaplecza. Jeżeli Twoja firma ma już CRM, bazę danych albo system realizujący część procesów, mogę przygotować interfejs React korzystający z dostępnego API. Użytkownik otrzymuje wtedy nową warstwę do pracy, a dane pozostają powiązane z dotychczasowym rozwiązaniem.",
          "Możliwe jest także połączenie aplikacji z płatnościami Stripe, systemem logowania oraz bazą danych. W projektach wykorzystuję rozwiązania dobierane do konkretnych wymagań, między innymi Clerk lub NextAuth do uwierzytelniania, a także Postgres z Prisma albo Drizzle do obsługi danych. Wybór zależy od architektury aplikacji, sposobu zarządzania użytkownikami i tego, które elementy są już dostępne.",
          "Przed rozpoczęciem integracji sprawdzam dokumentację API, sposób autoryzacji, zakres udostępnianych danych i ograniczenia techniczne. Jeżeli system nie ma API albo udostępnia tylko część potrzebnych operacji, ustalam to przed wyceną. Pozwala to oddzielić funkcje możliwe do wdrożenia od tych, które wymagają zmian po stronie zewnętrznego dostawcy.",
        ],
      },
      {
        id: "utrzymanie-aplikacji-nie-konczy-sie-na-wdrozeniu",
        heading: "Utrzymanie aplikacji nie kończy się na wdrożeniu",
        body: [
          "Po uruchomieniu aplikacji mogą pojawić się poprawki, nowe potrzeby użytkowników i kolejne etapy rozwoju. Biblioteki używane w projekcie również wymagają aktualizacji, szczególnie gdy zmiany dotyczą bezpieczeństwa, logowania, płatności albo komunikacji z usługami zewnętrznymi. Zakres opieki warto dopasować do znaczenia aplikacji w codziennym działaniu firmy.",
          "Po starcie zapewniam **60 dni gwarancji i bezpłatnych poprawek**. Później mogę rozwijać system oraz zajmować się aktualizacjami i poprawkami w ramach opcjonalnej opieki w miesięcznym abonamencie bez umowy na rok. Szczegóły utrzymania, priorytety zgłoszeń i zakres planowanych prac ustalam przy rozpoczęciu współpracy.",
          "Kod aplikacji i repozytorium należą do Ciebie. Nie uzależniam dostępu do projektu od dalszej współpracy ze mną. Dzięki temu możesz zlecać mi kolejne etapy, włączyć własny zespół albo przekazać rozwój innemu wykonawcy, jeśli zmienią się potrzeby Twojej firmy.",
        ],
      },
    ],
  },
  "strony-jamstack": {
    heading: "Strony Jamstack w praktyce: co warto wiedzieć przed wyborem wykonawcy",
    intro: [
      "**W tym bloku dowiesz się, jak działają strony Jamstack, czym różnią się od WordPressa i w jakich projektach warto zastosować taką architekturę.** Wyjaśnię też, jak wygląda edycja treści, obsługa formularzy, wycena oraz przeniesienie istniejącej witryny.",
      "Nie musisz znać technologii, aby świadomie porównać oferty wykonawców. Najważniejsze jest to, czy proponowane rozwiązanie pasuje do sposobu, w jaki publikujesz treści, rozwijasz firmę i obsługujesz klientów. Strona statyczna może mieć wygodny panel administracyjny oraz funkcje dynamiczne, ale nie każdy projekt powinien być budowany w ten sposób.",
    ],
    sections: [
      {
        id: "jak-dzialaja-strony-jamstack-z-perspektywy-wlasciciela-firmy",
        heading: "Jak działają strony Jamstack z perspektywy właściciela firmy?",
        body: [
          "W tradycyjnym systemie strona może być składana przez serwer dopiero wtedy, gdy użytkownik otworzy konkretny adres. Pobierane są dane, wykonywany jest kod, a następnie powstaje widok wysyłany do przeglądarki. W architekturze Jamstack wiele podstron przygotowuję wcześniej, podczas publikacji lub aktualizacji serwisu.",
          "Gotowe pliki mogą być dostarczane przez sieć serwerów znajdujących się w różnych lokalizacjach. Użytkownik otrzymuje więc przygotowaną stronę bez konieczności uruchamiania przy każdym wejściu całego systemu zarządzania treścią i wykonywania kolejnych zapytań do bazy. Dokładniej opisuję ten mechanizm w poradniku [Jamstack: co to jest](/blog/jamstack-co-to-jest).",
          "Nie oznacza to, że witryna pozostaje całkowicie nieruchoma. Formularze, płatności, wyszukiwarka albo logowanie mogą działać jako osobne usługi połączone z warstwą statyczną. **Jamstack jest sposobem projektowania architektury, a nie rezygnacją z funkcji potrzebnych użytkownikom.**",
        ],
      },
      {
        id: "czym-jamstack-rozni-sie-od-wordpressa",
        heading: "Czym Jamstack różni się od WordPressa?",
        body: [
          "WordPress i Jamstack mogą prowadzić do podobnego efektu wizualnego, ale inaczej obsługują treści, funkcje oraz generowanie podstron. WordPress jest kompletnym systemem działającym na serwerze. Strony Jamstack oddzielają interfejs od panelu treści i dodatkowych usług, dlatego każdy z tych elementów można dobrać do projektu osobno.",
        ],
        table: {"caption":"Czym Jamstack różni się od WordPressa?","head":["Obszar","Jamstack","WordPress"],"rows":[["Edycja treści","Panel CMS, na przykład Sanity lub Strapi, albo edycja plików","Panel WordPressa z polami dopasowanymi do strony"],["Szybkość","Podstrony mogą być wygenerowane wcześniej i podawane jako gotowe pliki","Wynik zależy między innymi od motywu, wtyczek, serwera i konfiguracji pamięci podręcznej"],["Bezpieczeństwo","Publiczna część strony nie musi mieć bezpośredniego połączenia z panelem i bazą danych","System, motyw oraz wtyczki wymagają aktualizacji i właściwego zabezpieczenia"],["Wtyczki","Funkcje dobiera się jako integracje lub tworzy w kodzie","Dostępny jest rozbudowany ekosystem gotowych wtyczek"],["Koszt utrzymania","Zależy od hostingu, CMS i używanych usług zewnętrznych","Zależy od hostingu, opieki technicznej oraz płatnych rozszerzeń"],["Sklep","Możliwy przez zewnętrzny system sprzedażowy lub indywidualną integrację","WooCommerce zapewnia gotowe zaplecze do prowadzenia sklepu"]]},
        outro: [
          "**Nie traktuję Jamstacku jako automatycznie lepszego zamiennika WordPressa.** Jeśli liczy się szybka strona firmowa bez WordPressa, uporządkowana architektura i ograniczenie liczby elementów działających na serwerze, Jamstack może być dobrym wyborem. Jeżeli projekt wymaga wielu gotowych rozszerzeń lub rozbudowanej obsługi sprzedaży, WordPress z WooCommerce może okazać się praktyczniejszy.",
        ],
      },
      {
        id: "jak-mozesz-samodzielnie-edytowac-tresci",
        heading: "Jak możesz samodzielnie edytować treści?",
        body: [
          "Strony Jamstack mogą korzystać z panelu CMS, mimo że sam interfejs witryny działa niezależnie od niego. W projektach wymagających regularnych aktualizacji mogę podłączyć Sanity albo Strapi. W takim panelu edytujesz przygotowane pola, na przykład tytuł, opis, zdjęcie, dane usługi czy element katalogu. Po publikacji system uruchamia aktualizację potrzebnych podstron.",
          "Drugą możliwością jest przechowywanie treści bezpośrednio w plikach projektu. Takie rozwiązanie ogranicza liczbę usług, ale wymaga pracy z plikami i sposobem ich zapisu. Sprawdza się głównie wtedy, gdy zawartość zmienia się rzadko albo aktualizacjami zajmuje się osoba techniczna.",
          "Dla nietechnicznego właściciela firmy zwykle wybieram panel CMS, jeśli samodzielna edycja jest częścią codziennej pracy. Zakres pól ustalam na podstawie rzeczywistych potrzeb, aby nie obciążać panelu ustawieniami, których nikt nie będzie używać. Po wdrożeniu prowadzę szkolenie online z edycji treści.",
        ],
      },
      {
        id: "jak-formularze-i-wyszukiwarka-dzialaja-na-stronie-statycznej",
        heading: "Jak formularze i wyszukiwarka działają na stronie statycznej?",
        body: [
          "Określenie „strona statyczna” dotyczy przede wszystkim sposobu przygotowania i wyświetlania treści. Nie wyklucza ono przesyłania zapytań, filtrowania katalogu ani pobierania aktualnych danych. Więcej o samym generowaniu gotowych widoków wyjaśniam w materiale [static site generation](/blog/static-site-generation-co-to).",
          "Poszczególne funkcje mogą działać niezależnie:",
        ],
        list: [
          "formularz przekazuje dane do osobnej usługi lub logiki po stronie serwera,",
          "wyszukiwarka korzysta z przygotowanego indeksu albo zewnętrznego mechanizmu,",
          "płatność jest obsługiwana przez przeznaczony do tego system,",
          "dane zmieniające się na żywo są pobierane z odpowiedniego źródła.",
        ],
        outro: [
          "Dzięki temu nie trzeba budować całej witryny jak rozbudowanej aplikacji tylko dlatego, że jedna sekcja wymaga dynamicznego działania. Najpierw rozdzielam zwykłe podstrony od funkcji przetwarzających dane, a następnie dobieram rozwiązanie do każdej z nich. Pozwala to ocenić zakres prac na podstawie faktycznych potrzeb, a nie samej liczby funkcji wymienionych w zapytaniu.",
        ],
      },
      {
        id: "jak-jamstack-sprawdza-sie-w-wiekszych-serwisach",
        heading: "Jak Jamstack sprawdza się w większych serwisach?",
        body: [
          "Strony Jamstack nie muszą ograniczać się do kilku zakładek firmowych. Własny serwis [cojestpolskie.pl](/projekty/cojestpolskie) zbudowałem w Astro. Z jednej bazy generowanych jest ponad 1700 podstron dotyczących ponad 900 marek. To przykład projektu, w którym uporządkowane dane służą do tworzenia wielu powtarzalnych widoków.",
          "Astro sprawdza się w serwisach, w których dominują treści i dane możliwe do przygotowania z wyprzedzeniem. Poszczególne typy podstron korzystają wtedy ze wspólnych szablonów, a dodanie kolejnego rekordu nie wymaga ręcznego projektowania osobnej strony. **Skala serwisu zależy więc nie tylko od liczby adresów, lecz także od jakości struktury danych i szablonów.**",
          "Innym przykładem jest Kantorymapa, mój produkt zbudowany w Next.js. Serwis obejmuje 1900 kantorów w 140 miastach, codziennie pobiera kursy NBP i ładuje się poniżej sekundy. Ten projekt pokazuje, że przy wyborze technologii trzeba uwzględnić również aktualizowane dane i logikę aplikacji. Nie każdy serwis z dużą liczbą podstron powinien być wykonany wyłącznie jako strona statyczna.",
        ],
      },
      {
        id: "od-czego-zaleza-koszt-i-termin-wykonania",
        heading: "Od czego zależą koszt i termin wykonania?",
        body: [
          "Koszt stron Jamstack wynika przede wszystkim z liczby różnych szablonów, sposobu zarządzania treścią i zakresu funkcji, które muszą działać dynamicznie. Dziesięć podstron korzystających z jednego schematu może wymagać mniej pracy niż kilka podstron o całkowicie odmiennej strukturze. Znaczenie ma również to, czy panel CMS ma obsługiwać proste teksty, rozbudowany katalog, wiele typów danych lub zależności między nimi.",
          "Na zakres wpływają najczęściej:",
        ],
        list: [
          "liczba unikalnych widoków i typów treści,",
          "konfiguracja Sanity lub Strapi,",
          "formularze, wyszukiwarka, płatności i inne integracje,",
          "przygotowanie danych oraz migracja istniejących materiałów,",
          "przeniesienie z WordPressa i opracowanie przekierowań 301.",
        ],
        outro: [
          "Prosta strona lub wizytówka powstaje zwykle w ciągu 2 do 3 tygodni. Typowa strona firmowa albo usługowa zajmuje od 4 do 6 tygodni. Ostateczny termin ustalam po krótkiej rozmowie i briefie, ponieważ migracja, niestandardowe funkcje oraz liczba szablonów mogą istotnie zmienić harmonogram.",
          "Przy przenoszeniu witryny z WordPressa analizuję także dotychczasowe adresy. Dla zmienionych podstron przygotowuję przekierowania 301, aby użytkownicy i wyszukiwarki trafiali pod właściwe adresy. Migrację planuję tak, by przerwa była jak najkrótsza, jednak przy zmianie DNS może wystąpić krótka niedostępność. Nie obiecuję zachowania konkretnych pozycji w Google.",
        ],
      },
      {
        id: "kiedy-strony-jamstack-nie-beda-wlasciwym-wyborem",
        heading: "Kiedy strony Jamstack nie będą właściwym wyborem?",
        body: [
          "Jamstack może nie być najlepszym rozwiązaniem dla rozbudowanego sklepu, który wymaga wielu procesów sprzedażowych, gotowych integracji oraz wygodnego zaplecza do zarządzania zamówieniami. W takim przypadku WooCommerce albo indywidualna aplikacja mogą lepiej odpowiadać zakresowi projektu. Decyzja zależy od sposobu sprzedaży, a nie od samej liczby produktów.",
          "Ostrożnie podchodzę również do projektów, w których wiele osób zmienia treści niemal bez przerwy. Bez odpowiednio zaprojektowanego CMS taki model pracy będzie niewygodny. Jeżeli serwis ma rozbudowane konta użytkowników, indywidualne dane po zalogowaniu lub liczne operacje wykonywane na żywo, rozważam architekturę aplikacji w Next.js zamiast klasycznej strony statycznej.",
          "**Technologię dobieram do procesów firmy, częstotliwości zmian i funkcji serwisu.** Dzięki temu strona nie jest nazywana Jamstackiem tylko ze względu na użyte narzędzia, lecz rzeczywiście wykorzystuje ten model tam, gdzie przynosi praktyczną korzyść.",
        ],
      },
    ],
  },
  "next-js-software-house": {
    heading: "Software house Next.js, freelancer czy zespół: jak wybrać wykonawcę aplikacji",
    intro: [
      "**W tym bloku dowiesz się, jak porównać software house Next.js, freelancera i mały zespół, a także jak wyglądają wycena, budowa MVP, dobór technologii oraz opieka nad aplikacją po wdrożeniu.** To najważniejsze kwestie, jeśli nie zajmujesz się technologią na co dzień, ale chcesz świadomie wybrać wykonawcę i ocenić, czy proponowany sposób pracy odpowiada potrzebom Twojej firmy.",
      "Nie każda aplikacja wymaga rozbudowanego zespołu. W wielu projektach sprawdza się bezpośrednia współpraca z jednym programistą Next.js, szczególnie gdy zakres można jasno uporządkować, a decyzje powinny zapadać sprawnie. Są jednak przedsięwzięcia, przy których udział dodatkowych specjalistów jest uzasadniony. Dlatego przed rozpoczęciem prac warto ocenić nie tylko technologię i koszt, lecz także odpowiedzialność za projekt, sposób komunikacji oraz możliwości późniejszego skalowania.",
    ],
    sections: [
      {
        id: "software-house-freelancer-czy-maly-zespol-moga-pasowac-do-ro",
        heading: "Software house, freelancer czy mały zespół mogą pasować do różnych projektów",
        body: [
          "Nazwa „software house Next.js” nie przesądza jeszcze o tym, jak będzie wyglądała codzienna współpraca. W większej firmie możesz rozmawiać z opiekunem projektu, który przekazuje ustalenia do projektantów i programistów. Mały zespół ogranicza liczbę pośredników, ale nadal dzieli odpowiedzialność pomiędzy kilka osób. Freelancer zazwyczaj sam prowadzi rozmowy, podejmuje decyzje techniczne i tworzy kod.",
          "W moim przypadku rozmawiasz bezpośrednio ze mną, a ja sam piszę kod aplikacji. Dzięki temu pytania biznesowe i techniczne trafiają do osoby, która faktycznie wdraża ustalenia. Poniższe porównanie pomaga ocenić różnice między modelami współpracy, ale nie wskazuje jednego rozwiązania jako najlepszego w każdej sytuacji.",
        ],
        table: {"caption":"Software house, freelancer czy mały zespół mogą pasować do różnych projektów","head":["Kryterium","Freelancer","Mały zespół Next.js","Software house Next.js"],"rows":[["Kontakt","Bezpośrednio z wykonawcą","Z wybranymi członkami zespołu","Często przez osobę prowadzącą projekt"],["Koszt struktury","Utrzymanie jednej osoby","Koszt kilku specjalistów","Koszt zespołu i organizacji firmy"],["Szybkość decyzji","Krótka ścieżka ustaleń","Zależna od podziału odpowiedzialności","Zależna od procesu i liczby osób"],["Skalowanie prac","Ograniczone dostępnością jednej osoby","Możliwe przez zwiększenie zaangażowania zespołu","Możliwe przez przydzielenie kolejnych specjalistów"],["Ryzyko","Zależność od jednej osoby","Zależność od dostępności kilku osób","Ryzyko zmian składu zespołu lub przepływu informacji"]]},
        outro: [
          "Model freelancerski sprawdza się przede wszystkim wtedy, gdy zależy Ci na bezpośrednim kontakcie i jasno określonej odpowiedzialności. Jeżeli zakres wymaga równoległej pracy wielu programistów albo kilku specjalizacji dostępnych jednocześnie, uczciwie informuję, że potrzebny będzie większy zespół Next.js. Taka ocena powinna nastąpić przed rozpoczęciem projektu, a nie dopiero wtedy, gdy jego skala zacznie utrudniać realizację.",
        ],
      },
      {
        id: "od-briefu-do-mvp-prowadzi-kilka-etapow-decyzyjnych",
        heading: "Od briefu do MVP prowadzi kilka etapów decyzyjnych",
        body: [
          "Budowa MVP nie polega na umieszczeniu wszystkich pomysłów w pierwszej wersji. Jej celem jest wybranie funkcji, które pozwolą uruchomić produkt i sprawdzić jego działanie w praktyce. Na początku rozpoznaję więc proces biznesowy, grupę użytkowników, wymagane integracje oraz dane, które aplikacja ma gromadzić lub przetwarzać.",
          "Następnie przygotowuję makiety w Figmie. Na tym etapie można ocenić układ ekranów, kolejność działań i logikę obsługi bez ponoszenia kosztu przebudowy gotowego kodu. Po akceptacji makiet przechodzę do programowania, a po kolejnych etapach udostępniam Ci link do wersji testowej. Możesz na bieżąco sprawdzać rozwój produktu, zamiast zobaczyć całość dopiero przed publikacją.",
          "Typowy przebieg obejmuje:",
        ],
        list: [
          "rozpoznanie celu, użytkowników i najważniejszych funkcji,",
          "przygotowanie makiet oraz dwóch tur poprawek,",
          "budowę kolejnych elementów i testowanie ich pod udostępnionym adresem,",
          "uruchomienie wersji produkcyjnej.",
        ],
        outro: [
          "Aplikacja lub MVP w Next.js powstaje zwykle w ciągu 6 do 12 tygodni. Dokładny termin zależy od zakresu, integracji i złożoności funkcji, dlatego ustalam go dopiero po briefie. Jeżeli chcesz wcześniej zrozumieć możliwości technologii, pomocne będzie wyjaśnienie [Next.js: co to jest](/blog/next-js-co-to-jest).",
        ],
      },
      {
        id: "stala-wycena-wymaga-jasno-opisanego-zakresu",
        heading: "Stała wycena wymaga jasno opisanego zakresu",
        body: [
          "Projekt wyceniam po krótkiej rozmowie i briefie. Najpierw ustalam, co dokładnie ma znaleźć się w aplikacji, które funkcje są konieczne na start oraz od jakich systemów zewnętrznych będzie zależało wdrożenie. Na tej podstawie przedstawiam stałą wycenę uzgodnionego zakresu wraz z terminem realizacji.",
          "Taki model ułatwia porównanie ofert, o ile każda z nich obejmuje ten sam zakres. Sama końcowa wartość niewiele mówi, gdy jedna firma Next.js uwzględnia projekt interfejsu, logowanie i panel administracyjny, a druga wycenia jedynie część widoczną dla użytkownika. Dlatego zakres powinien opisywać funkcje i odpowiedzialność wykonawcy, a nie ograniczać się do liczby ekranów.",
          "Jeżeli w trakcie prac pojawi się pomysł na dodatkową integrację, nowy typ konta albo rozbudowanie panelu, traktuję go jako zmianę zakresu i wyceniam osobno. Dzięki temu możesz zdecydować, czy dana funkcja jest potrzebna przed startem, czy lepiej zaplanować ją jako kolejny etap rozwoju. Nie każda dobra koncepcja musi od razu trafić do pierwszej wersji produktu.",
        ],
      },
      {
        id: "stack-powinien-wynikac-z-funkcji-aplikacji",
        heading: "Stack powinien wynikać z funkcji aplikacji",
        body: [
          "W projektach korzystam z Next.js App Router, Reacta, TypeScriptu i Tailwinda. Te technologie pozwalają zbudować interfejs oraz logikę aplikacji w jednym uporządkowanym środowisku. TypeScript pomaga wcześniej wykrywać część błędów związanych z danymi i ułatwia późniejsze rozwijanie kodu, szczególnie gdy projekt przejmuje kolejny programista Next.js.",
          "Warstwę danych mogę oprzeć na bazie Postgres oraz Prisma lub Drizzle. Jeżeli aplikacja wymaga kont użytkowników, dobieram Clerk albo NextAuth. Płatności można obsłużyć przez Stripe, natomiast treści redakcyjne przez Sanity lub Strapi. Wybór nie polega na dołączeniu wszystkich dostępnych narzędzi, lecz na dopasowaniu ich do rzeczywistych funkcji produktu.",
          "Wdrożenie może działać na Vercel albo na własnym VPS. Vercel jest naturalnie powiązany z ekosystemem Next.js, natomiast własny serwer może być uzasadniony przez wymagania infrastrukturalne konkretnego projektu. Decyzję podejmuję po rozpoznaniu sposobu działania aplikacji, jej integracji i wymagań dotyczących utrzymania.",
          "Dobrze dobrany stack powinien odpowiadać na konkretne pytania: gdzie będą przechowywane dane, kto może je odczytywać, jak użytkownik się zaloguje, w jaki sposób zostanie wykonana płatność i kto będzie edytować treść. Samo użycie popularnych technologii nie zastępuje właściwego zaprojektowania tych zależności. Więcej o zakresie takich realizacji znajdziesz na stronie [tworzenie stron Next.js](/uslugi/aplikacje-nextjs).",
        ],
      },
      {
        id: "realizacje-pokazuja-rozne-zastosowania-next-js",
        heading: "Realizacje pokazują różne zastosowania Next.js",
        body: [
          "Własnym projektem zbudowanym w Next.js jest [Kantorymapa](/projekty/kantorymapa). Serwis obejmuje 1900 kantorów w 140 miastach i codziennie publikuje kursy NBP. Wykorzystuje programmatic SEO, czyli tworzenie dużej liczby uporządkowanych stron na podstawie danych, a sama aplikacja ładuje się poniżej sekundy.",
          "Ceny Notarialne to inny przykład pracy z rozbudowanym zbiorem informacji. Projekt prezentuje ceny transakcyjne z RCN, wykorzystuje mapy MapLibre i obejmuje tysiące podstron lokalizacji. W takim serwisie znaczenie ma nie tylko warstwa wizualna, lecz także sposób organizacji danych oraz generowania stron dla poszczególnych miejsc.",
          "Dla firmy Galabau Darius z Niemiec przygotowałem konfigurator wyceny ogrodzeń działający na żywo. Użytkownik może dobierać elementy, a firma korzysta z panelu administracyjnego zabezpieczonego przez Clerk. Projekt wykorzystuje również Prisma i działa na Vercel.",
          "Te realizacje pokazują trzy różne scenariusze: serwis oparty na regularnie aktualizowanych danych, rozbudowaną strukturę lokalizacji oraz narzędzie wspierające wycenę produktu. Dlatego wybierając wykonawcę, warto porównać nie tylko wygląd jego projektów. Istotne jest również to, czy potrafi połączyć interfejs, dane, logowanie, mapy lub inne funkcje potrzebne w Twoim modelu biznesowym.",
        ],
      },
      {
        id: "po-uruchomieniu-aplikacja-wymaga-okreslonych-zasad-opieki",
        heading: "Po uruchomieniu aplikacja wymaga określonych zasad opieki",
        body: [
          "Start wersji produkcyjnej nie oznacza, że aplikacja przestaje wymagać uwagi. Po wdrożeniu sprawdzam jej działanie i obejmuję projekt 60 dniami gwarancji oraz bezpłatnych poprawek. Ten okres służy usunięciu błędów dotyczących uzgodnionego i wdrożonego zakresu.",
          "Po zakończeniu gwarancji możesz skorzystać z opcjonalnej opieki w miesięcznym abonamencie bez umowy na rok. Współpraca może dotyczyć utrzymania istniejących funkcji albo dalszego rozwoju produktu. Zakres opieki ustalam przy jej rozpoczęciu, ponieważ inne potrzeby ma stabilna aplikacja używana przez stałą grupę klientów, a inne produkt, do którego regularnie dochodzą nowe moduły.",
          "Jeżeli projekt z czasem urośnie, oceniam, czy nadal mogę odpowiedzialnie rozwijać go sam. Gdy tempo prac lub liczba równoległych zadań zaczynają wymagać większego zespołu Next.js, mówię o tym wprost. Uporządkowany kod i dokumentacja ułatwiają włączenie kolejnego programisty, choć czas potrzebny na przejęcie części prac zawsze zależy od złożoności aplikacji.",
        ],
      },
    ],
  },
};
