export type SeoBlockSection = {
  /** Kotwica dla spisu treści. */
  id: string;
  heading: string;
  body: string[];
  /** Lista po akapitach. Łamie monotonię samej prozy, nie każda sekcja ją ma. */
  list?: string[];
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
};
