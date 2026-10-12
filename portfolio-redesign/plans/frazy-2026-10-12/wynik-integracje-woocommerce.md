=== STRONA: integracje-woocommerce ===

METATITLE: Integracja WooCommerce z Allegro, hurtownią i płatnościami

METADESCRIPTION: Integracja WooCommerce z Allegro, hurtownią, płatnościami i kurierami. Naprawiam błędy synchronizacji zamówień, stanów i statusów. Sprawdź, jak pracuję.

H1: Integracje WooCommerce z systemami sprzedaży i obsługi zamówień

LEAD: Łączę WooCommerce z systemami, których używasz do sprzedaży, płatności i wysyłki zamówień, oraz naprawiam integracje, które działają nieprawidłowo. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.

INTRO:

Zamówienie z Allegro nie pojawia się tam, gdzie powinno? Stan magazynowy w sklepie pokazuje inną liczbę niż w hurtowni? A może opłacone zamówienie zmienia status bez Twojego udziału?

Integracja WooCommerce ma ograniczyć ręczne przepisywanie danych między systemami, a nie tworzyć kolejne problemy. Dlatego nie zaczynam od instalowania wtyczek. Najpierw ustalam, skąd pochodzą dane o produktach, cenach i zamówieniach, który system może je zmieniać oraz co powinno wydarzyć się po zakupie. Dopiero na tej podstawie dobieram sposób połączenia. Czasem wystarczy poprawna konfiguracja gotowego rozwiązania, a czasem trzeba zmienić sposób wymiany danych lub dopisać niewielką funkcję ochronną.

W sklepie [LumiKids](/projekty/lumikids), który sprzedaje również przez Allegro, zamówienia za pobraniem anulowały się automatycznie. Z logu serwera ustaliłem, że integracja z [BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker) cofała ich status, po czym WooCommerce traktował je jako nieopłacone i anulował po 60 minutach. Naprawiłem problem małą wtyczką ochronną. W tym samym sklepie analizowałem również płatności BLIK oraz zdarzenia wysyłane do Meta. Z kolei w [Kosmotece](/projekty/kosmoteka), sklepie z teleskopami, pracowałem przy integracji z hurtownią Levenhuk, bramkami płatności i wysyłką. To różne połączenia, ale w każdym trzeba wiedzieć, które dane mają być aktualizowane i co może zakłócić ich przepływ.

Pracuję bezpośrednio z Tobą i sam piszę potrzebny kod. Zaczynam od rozmowy o tym, jak obecnie obsługujesz zamówienia, jakie systemy są podłączone i które czynności wykonujesz ręcznie. Jeżeli integracja już istnieje, sprawdzam jej konfigurację, historię zamówień i dostępne logi, czyli zapisy działania systemu pomagające odnaleźć przyczynę błędu. Następnie proponuję zakres prac: konfigurację gotowego łącznika, poprawienie istniejącego połączenia albo rozwiązanie na zamówienie. Przed uruchomieniem sprawdzam działanie na konkretnych scenariuszach zakupowych, a po etapach prac udostępniam link do wersji testowej. Zakres, termin i wycenę ustalam po rozpoznaniu systemów, żeby nie opierać ich na założeniach, których jeszcze nie sprawdziłem.

KORZYŚCI:

- Tytuł: Mniej ręcznego przepisywania zamówień | Treść: Gdy sprzedajesz w sklepie i innych kanałach, te same informacje mogą trafiać do kilku paneli. Ustalam, które dane można przekazywać automatycznie, a które wymagają zatwierdzenia przez osobę obsługującą sprzedaż. Sprawdzam przy tym, czy ponowne przesłanie informacji nie utworzy drugiego zamówienia. Dzięki temu nie musisz wykonywać tej samej czynności w kilku miejscach, a sposób obsługi wyjątków pozostaje zrozumiały.

- Tytuł: Spójne stany magazynowe i ceny | Treść: Integracja WooCommerce z hurtownią lub dodatkowym kanałem sprzedaży wymaga określenia, skąd sklep pobiera dostępność produktów i ceny. Jeśli oba systemy mogą nadpisywać te same wartości, łatwo o rozbieżności. Ustalam kierunek aktualizacji, sposób rozpoznawania produktów oraz zasady postępowania, gdy zabraknie danych. Osobno sprawdzam produkty z wariantami, żeby rozmiar lub wersja produktu nie otrzymały stanu magazynowego innego wariantu.

- Tytuł: Prawidłowa obsługa płatności i statusów | Treść: Zamówienie oczekujące na przelew, porzucona płatność BLIK i zamówienie za pobraniem nie powinny być traktowane jednakowo. Sprawdzam, jakie informacje przekazuje operator płatności, co zapisuje WooCommerce i czy zewnętrzny system nie cofa statusu. Kiedy pojawia się błąd, szukam jego przyczyny w historii zamówienia, panelu operatora i zapisach technicznych, zamiast zmieniać ustawienia na próbę.

- Tytuł: Łatwiejsze wykrywanie problemów z synchronizacją | Treść: Samo uruchomienie połączenia nie oznacza jeszcze, że poprawnie obsługuje ono wszystkie sytuacje. Testuję typowe ścieżki zakupowe oraz przypadki, w których system otrzyma niepełne dane albo tę samą informację ponownie. Sprawdzam dostępne logi i miejsca, w których można zauważyć nieudaną aktualizację. Dzięki temu wiadomo, gdzie szukać problemu, jeśli po wdrożeniu zamówienie, stan magazynowy lub płatność nie zostaną poprawnie zarejestrowane.

PROCES:

- Tytuł: Rozpoznanie systemów i przepływu danych | Treść: Na początku proszę Cię o listę używanych systemów i opis codziennej obsługi sklepu. Ustalam, skąd przychodzą zamówienia, gdzie zmieniasz stany magazynowe, kto ustala ceny i w którym panelu kończysz realizację sprzedaży. Jeśli zgłaszasz błąd, proszę również o przykładowe zamówienie oraz opis tego, co powinno się wydarzyć. Sprawdzam dostępne połączenia i ustalam, które dane mogą być aktualizowane automatycznie.

- Tytuł: Dobór sposobu integracji | Treść: Sprawdzam, czy wystarczy istniejąca wtyczka, czy potrzebny jest inny łącznik lub własny kod. Jeżeli system udostępnia API, czyli interfejs pozwalający programom wymieniać dane, oceniam, jakie informacje można przez niego pobierać i zapisywać. Uwzględniam również sytuacje wyjątkowe: brak produktu, powtórne powiadomienie i zmianę statusu przez człowieka. Po rozpoznaniu przedstawiam zakres prac, termin i wycenę.

- Tytuł: Konfiguracja i wdrożenie połączenia | Treść: Konfiguruję wybrany mechanizm wymiany danych albo przygotowuję potrzebną funkcję. Sprawdzam mapowanie pól, czyli przypisanie informacji z jednego systemu do odpowiednich miejsc w drugim. Ustalam, kiedy ma następować synchronizacja i jakie zmiany mogą być nadpisywane. Przy niestandardowych problemach mogę przygotować małą wtyczkę zamiast dokładać rozbudowane narzędzie. Po etapie prac udostępniam wersję testową do sprawdzenia.

- Tytuł: Testy i kontrola po uruchomieniu | Treść: Sprawdzam zamówienia testowe, reakcje na różne metody płatności i zmiany statusów. Przy integracji magazynowej kontroluję zgodność produktów, wariantów i stanów. Przy płatnościach sprawdzam historię zamówienia oraz informacje operatora. Po uruchomieniu weryfikuję dostępne zapisy działania i wybrane rzeczywiste przypadki. Jeśli coś wymaga korekty, wracam do konkretnego przebiegu zdarzeń, zamiast zakładać, że samo połączenie oznacza poprawną pracę całego procesu.

FAQ:

- P: Mam już wtyczkę do integracji, ale zamówienia nadal się nie zgadzają. Możesz to naprawić? | O: Tak, mogę sprawdzić istniejące połączenie bez budowania wszystkiego od początku. Zaczynam od konfiguracji, historii zamówień i logów, żeby ustalić, w którym miejscu dane się zmieniają lub nie docierają. Dopiero po znalezieniu przyczyny proponuję poprawkę.

- P: Czy możesz połączyć mój sklep WooCommerce z Allegro? | O: Mogę pomóc w konfiguracji i diagnostyce wymiany danych między WooCommerce a Allegro. W LumiKids pracowałem przy problemie z zamówieniami w sklepie sprzedającym równolegle przez Allegro. Zakres połączenia ustalam na podstawie tego, gdzie chcesz obsługiwać zamówienia, ceny i stany.

- P: Czy integracja WooCommerce z hurtownią może sama aktualizować produkty i stany? | O: Tak, jeśli hurtownia udostępnia odpowiednie dane i sposób ich pobierania. W Kosmotece pracowałem przy integracji z hurtownią Levenhuk. Przed wdrożeniem sprawdzam, jak identyfikowane są produkty, czy dane obejmują warianty i które wartości sklep powinien aktualizować.

- P: Dlaczego zamówienia za pobraniem same mi się anulują? | O: Jedną z przyczyn może być zewnętrzna integracja, która zmienia status zamówienia na oczekujące na płatność. W LumiKids taki problem powodował, że WooCommerce anulował zamówienia po 60 minutach. Żeby ustalić przyczynę w Twoim sklepie, sprawdzę historię statusów i dostępne logi.

- P: Klient zapłacił BLIK-iem, ale WooCommerce pokazuje nieopłacone zamówienie. Co sprawdzić? | O: Najpierw porównuję notatki zamówienia w WooCommerce ze statusem transakcji w panelu operatora płatności. Kod BLIK jest ważny przez około dwie minuty, więc porzucona lub niedokończona płatność nie musi oznaczać błędu integracji. Jeśli operator potwierdził płatność, sprawdzam, dlaczego informacja nie dotarła poprawnie do sklepu.

- P: Czy podłączysz WooCommerce do Subiekta, Optimy albo programu do faktur? | O: Nie wdrażałem dotąd integracji z Subiektem, Optimą, wFirmą, iFirmą ani Fakturownią. Mogę ocenić taki projekt po sprawdzeniu, czy wybrany system udostępnia API lub gotowy łącznik. Na tej podstawie określę możliwy zakres połączenia.

- P: Czy muszę kupować kolejną płatną wtyczkę, żeby naprawić integrację? | O: Niekoniecznie. W LumiKids problem ze zdarzeniami Meta wynikał z ustawienia darmowej wtyczki Pixel Manager, a nie z braku płatnej wersji. Najpierw sprawdzam możliwości obecnego rozwiązania i dopiero później oceniam, czy dodatkowe narzędzie jest potrzebne.

- P: Czy do integracji mojego sklepu potrzebuję BaseLinkera? | O: Nie każda integracja wymaga dodatkowego systemu pośredniczącego. To zależy od liczby kanałów sprzedaży, sposobu obsługi zamówień i możliwości pozostałych narzędzi. Jeśli rozważasz takie rozwiązanie, szczegóły opisuję na stronie integracja WooCommerce z BaseLinker.

- P: Ile kosztuje integracja WooCommerce z innym systemem? | O: Największy wpływ na koszt ma sposób, w jaki oba systemy mogą wymieniać dane. Konfiguracja gotowego łącznika oznacza inny zakres prac niż przygotowanie własnego połączenia lub naprawa konfliktu między kilkoma integracjami. Po sprawdzeniu dokumentacji i oczekiwanego przepływu danych przedstawiam zakres, termin oraz koszt konkretnych prac.

- P: Jak długo potrwa podłączenie hurtowni albo naprawa integracji? | O: Termin ustalam po rozpoznaniu systemów i zakresu problemu. Prosta zmiana konfiguracji, integracja wymagająca własnego kodu i diagnozowanie błędu występującego tylko przy niektórych zamówieniach to różne zadania. Po krótkiej rozmowie i sprawdzeniu potrzebnych informacji mogę zaplanować kolejne etapy.

CTA: Opisz mi, które systemy chcesz połączyć z WooCommerce lub co obecnie nie działa, a sprawdzę możliwości rozwiązania.

=== BLOK: integracje-woocommerce ===

# Integracja WooCommerce z Allegro, hurtownią i innymi systemami. Jak zaplanować wymianę danych?

W tym poradniku znajdziesz informacje o najczęstszych integracjach WooCommerce, sposobach wymiany danych i problemach, które warto sprawdzić przed podłączeniem kolejnego systemu. Wyjaśniam też, kiedy wystarczy gotowa wtyczka, kiedy rozważyć rozwiązanie pośredniczące i jak testuję integrację, żeby wychwycić błędy w zamówieniach, płatnościach oraz stanach magazynowych.

Najważniejsza decyzja dotyczy tego, który system odpowiada za konkretne dane.

Sklep, hurtownia, Allegro i program do obsługi zamówień mogą przechowywać informacje o tych samych produktach, ale nie powinny dowolnie nadpisywać swoich zmian. Jeśli obsługujesz sprzedaż w kilku miejscach, samo połączenie paneli nie wystarczy. Trzeba jeszcze określić zasady aktualizacji i postępowania w sytuacjach wyjątkowych.

## Jakie systemy można połączyć z WooCommerce i jakie dane między nimi przepływają?

WooCommerce może wymieniać informacje z narzędziami obsługującymi różne etapy sprzedaży. Jedne połączenia przekazują status płatności, inne tworzą przesyłki, aktualizują dostępność towaru albo informują system reklamowy o zakupie. Dlatego przed wdrożeniem rozdzielam integracje według ich zadań.

| Integracja | Co przesyła | Na co uważam |
| --- | --- | --- |
| Bramki płatności WooCommerce, np. Przelewy24, imoje, BLIK | Informacje o transakcjach, potwierdzeniach i statusach płatności | Czy sklep poprawnie rozpoznaje płatność zakończoną, niedokończoną i odrzuconą |
| WooCommerce, integracja z kurierami, np. InPost | Dane odbiorcy, adres dostawy, informacje potrzebne do przygotowania przesyłki | Czy metoda dostawy i dane odbiorcy są poprawne oraz czy przesyłka nie powstaje ponownie |
| Marketplace, np. Allegro | Zamówienia, dane produktów, ceny i dostępność, zależnie od sposobu połączenia | Czy sprzedaż w jednym kanale aktualizuje pozostałe i nie powoduje konfliktu statusów |
| Hurtownia lub dostawca | Katalog produktów, ceny, stany magazynowe, czasem zdjęcia i opisy | Jak rozpoznawane są produkty i czy aktualizacja nie nadpisuje danych przygotowanych w sklepie |
| System księgowy i fakturowanie | Dane zamówienia, nabywcy, pozycje dokumentu i informacje potrzebne do rozliczenia | Czy dane są kompletne, kiedy powstaje dokument i jak uniknąć jego ponownego utworzenia |
| Reklama i analityka, np. Meta, GA4 | Zdarzenia takie jak wyświetlenie produktu, dodanie do koszyka lub zakup | Czy zdarzenia docierają, nie dublują się i są przekazywane zgodnie z ustawieniami zgód |

Nie każde połączenie wymaga przesyłania informacji w obie strony. Hurtownia może dostarczać stany magazynowe, ale nie potrzebuje możliwości zmieniania opisów przygotowanych przez Ciebie. Operator płatności ma potwierdzać transakcję, a nie zarządzać całym procesem wysyłki.

W ramach zlecenia ustalam dokładnie, które informacje mają przechodzić między Twoimi systemami i jakie operacje powinny pozostać po stronie sklepu.

## Który system powinien decydować o stanach magazynowych, cenach i statusach zamówień?

Źródło prawdy to system, którego dane uznajemy za nadrzędne dla określonej informacji.

Nie musi to być jeden program odpowiadający za wszystko. Stany magazynowe mogą pochodzić z hurtowni, ceny detaliczne z WooCommerce, a informacja o opłaceniu zamówienia od operatora płatności.

Przykładowo sklep sprzedaje produkt dostępny u zewnętrznego dostawcy. Hurtownia przekazuje stan magazynowy, natomiast właściciel sklepu ustala własną cenę. Jeśli automatyczna aktualizacja hurtowni nadpisze również cenę detaliczną, naruszy zasadę, którą należało ustalić przed uruchomieniem synchronizacji.

Podobnie jest z zamówieniami. Operator płatności potwierdza otrzymanie środków, pracownik sklepu przygotowuje wysyłkę, a zewnętrzny system może aktualizować postęp realizacji. Każdy z nich ma inną odpowiedzialność.

Przed połączeniem ustalam więc:

- Który system może tworzyć i zmieniać konkretny rodzaj danych.
- W jakim kierunku przebiega aktualizacja i kiedy jest wykonywana.
- Co zrobić, jeśli dwa systemy zwrócą różne wartości albo aktualizacja się nie powiedzie.

Ważne jest również rozpoznawanie produktów. SKU, czyli unikalny kod identyfikujący produkt, pomaga dopasować pozycje między systemami. Jeśli kodów brakuje albo powtarzają się przy wariantach, synchronizacja może aktualizować nieodpowiednie produkty.

Te zasady zapisuję przed wdrożeniem, żeby integracja odpowiadała faktycznemu sposobowi obsługi Twojego sklepu, a nie przypadkowym ustawieniom wtyczki.

## Kiedy wystarczy gotowa wtyczka, a kiedy potrzebna jest integracja na zamówienie?

Nie każda integracja wymaga pisania własnego kodu. Gotowe wtyczki często wystarczają przy standardowych płatnościach, dostawach lub połączeniach, dla których dostawcy przygotowali obsługiwane rozwiązania.

Przed wyborem sprawdzam jednak nie tylko listę dostępnych funkcji. Ważne jest również to, czy narzędzie obsługuje Twój sposób realizacji zamówień, odpowiednie statusy, warianty produktów i nietypowe sytuacje.

Gotowa wtyczka ma sens, gdy oferuje potrzebny przepływ danych, pozwala ustawić właściwe reguły i nie koliduje z innymi połączeniami. Jeżeli problem wynika wyłącznie z konfiguracji, wolę ją poprawić, niż budować kolejne narzędzie.

BaseLinker można rozważyć, gdy sklep współpracuje z dodatkowymi kanałami sprzedaży i dostawcami, a obsługa zamówień ma odbywać się przez system pośredniczący. Powstaje wtedy dodatkowa warstwa między WooCommerce a pozostałymi usługami. Trzeba świadomie ustalić jej uprawnienia do zmieniania statusów i stanów.

Integracja na zamówienie ma sens, jeśli gotowe rozwiązanie nie obsługuje potrzebnej reguły albo trzeba zabezpieczyć konkretny etap synchronizacji. Może to być niewielka funkcja zamiast osobnej, rozbudowanej aplikacji.

Przy własnym połączeniu sprawdzam dokumentację API, czyli interfejsu umożliwiającego programom pobieranie i przesyłanie danych. Oceniam też, czy system obsługuje webhooki, czyli automatyczne powiadomienia o zdarzeniach, dzięki którym sklep nie musi stale pytać o każdą zmianę.

Jeśli potrzebna jest funkcja przygotowana specjalnie do WordPressa, opisuję taką usługę osobno jako [wtyczki WordPress na zamówienie](/uslugi/tworzenie-wtyczek-wordpress).

W Twoim projekcie wybieram sposób integracji dopiero po sprawdzeniu możliwości systemów i zasad, według których obsługujesz sprzedaż.

## Dlaczego integracje cofają statusy, dublują zamówienia i rozjeżdżają stany magazynowe?

Wiele problemów nie wynika z całkowitego braku połączenia. Dane docierają do systemu, ale są błędnie interpretowane, przetwarzane ponownie albo nadpisywane przez kolejną aktualizację.

Dobrym przykładem jest LumiKids. W tym sklepie zamówienia za pobraniem anulowały się automatycznie. Z analizy logu serwera wynikało, że integracja z BaseLinkerem cofała statusy zamówień. WooCommerce uznawał je następnie za nieopłacone i po 60 minutach anulował. Problem rozwiązałem małą wtyczką ochronną.

To pokazuje, dlaczego nie wystarczy sprawdzić ostatniego statusu. Trzeba ustalić, który system go zmienił, kiedy to zrobił i jak zareagował WooCommerce.

Inne ryzyka, które biorę pod uwagę przy projektowaniu i testach, to:

- Podwójne zamówienia. Powtórne przesłanie tej samej informacji nie powinno tworzyć drugiego zamówienia. Sprawdzam, jak system rozpoznaje już odebrane dane.
- Rozbieżne stany magazynowe. Aktualizacja z hurtowni może nadpisać zmianę wykonaną w sklepie. Potrzebna jest jasna reguła pierwszeństwa.
- Nieprawidłowe potwierdzenia płatności. Przy BLIK trzeba odróżnić niedokończoną transakcję od błędu sklepu, porównując notatki zamówienia z panelem operatora.
- Duplikaty lub brak zdarzeń reklamowych. Wysyłanie informacji z przeglądarki i serwera wymaga sprawdzenia, czy system reklamowy poprawnie rozpoznaje zdarzenia dotyczące tego samego zakupu.

W LumiKids zajmowałem się również integracją Meta. Darmowa wtyczka Pixel Manager miała ustawienie, które wyłączało całą integrację. Po jego zmianie zdarzenia serwerowe zaczęły działać bez konieczności przechodzenia na płatną wersję.

Przy naprawie Twojej integracji szukam konkretnego źródła błędu i sprawdzam jego skutki w całym przepływie zamówienia, nie tylko w panelu jednej wtyczki.

## Jak sprawdzam, czy integracja WooCommerce działa prawidłowo po wdrożeniu?

Samo pojawienie się komunikatu o poprawnym połączeniu nie potwierdza, że integracja zadziała przy rzeczywistym zamówieniu. Dlatego sprawdzam osobno różne scenariusze, zwłaszcza tam, gdzie uczestniczy kilka systemów.

Przy płatnościach wykonuję zamówienia testowe każdą skonfigurowaną metodą, na ile pozwala środowisko i operator. Kontroluję poprawnie zakończoną transakcję, płatność niedokończoną oraz reakcję sklepu na brak potwierdzenia.

Przy dostawach sprawdzam przekazywane dane odbiorcy i wybraną metodę wysyłki. Przy hurtowni porównuję identyfikatory produktów, warianty oraz aktualizację dostępności.

Następnie korzystam z kilku źródeł informacji:

- Notatki zamówień pokazują historię komunikatów i zmian zapisanych w WooCommerce.
- Logi techniczne, czyli zapisy działania systemu, pomagają powiązać problem z konkretną operacją lub błędem.
- Panel zewnętrznego operatora pozwala porównać dane widoczne w sklepie z informacjami o transakcji lub przesyłce.
- Raport zamówień z ostatnich tygodni pomaga wybrać przypadki do sprawdzenia, szczególnie przy błędach pojawiających się nieregularnie.

Nie zakładam, że pojedynczy udany zakup oznacza prawidłowe działanie każdej ścieżki. Osobno sprawdzam sytuacje, w których informacja dociera ponownie, zostaje opóźniona lub nie zawiera oczekiwanych danych.

Jeśli dopiero planujesz sprzedaż internetową i nie masz jeszcze działającego sklepu, zakres budowy od podstaw opisuję na stronie [sklepy WooCommerce](/uslugi/sklepy-internetowe-woocommerce).

Przed zakończeniem zlecenia sprawdzam scenariusze odpowiadające Twojej konfiguracji i wskazuję, gdzie kontrolować działanie połączenia podczas codziennej obsługi zamówień.

## Co przygotować przed rozmową o integracji WooCommerce z innym systemem?

Nie potrzebujesz gotowej dokumentacji technicznej, żeby opisać problem. Najbardziej pomaga mi konkretny przykład: co robisz w sklepie, jakie informacje przenosisz ręcznie i w którym momencie proces przestaje działać tak, jak oczekujesz.

Przed rozmową przygotuj, jeśli masz taką możliwość:

- Listę systemów. Nazwy hurtowni, operatorów płatności, kurierów, marketplace i programów wykorzystywanych do zamówień lub faktur.
- Informacje o dostępie do API. Dokumentację albo informację od dostawcy, czy umożliwia automatyczną wymianę danych. Nie przesyłaj haseł ani kluczy dostępu w pierwszej wiadomości.
- Opis osoby obsługującej zamówienia. Kto zatwierdza płatność, zmienia status, przygotowuje wysyłkę i poprawia stany magazynowe.
- Orientacyjną liczbę zamówień dziennie. Pozwala mi zrozumieć skalę wymiany danych i częstotliwość potrzebnych aktualizacji.
- Listę czynności wykonywanych ręcznie. Na przykład przepisywanie adresów do panelu kuriera, poprawianie stanów albo wprowadzanie danych do programu fakturowego.

Jeżeli integracja już działa nieprawidłowo, przyda się również numer przykładowego zamówienia, opis oczekiwanego zachowania i informacja, od kiedy występuje problem. Nie musisz samodzielnie szukać błędów w kodzie.

Przy integracji z systemem księgowym lub ERP dodatkowo sprawdzę, czy dostawca oferuje gotowy łącznik lub udokumentowany interfejs wymiany danych. Nie wdrażałem dotąd połączeń z Subiektem, Optimą, wFirmą, iFirmą ani Fakturownią, dlatego ich możliwości oceniam po rozpoznaniu konkretnego przypadku.

Na podstawie tych informacji mogę ustalić, czy Twoje zlecenie wymaga nowego połączenia, poprawienia konfiguracji czy naprawy istniejącego mechanizmu. Napisz, z jakich systemów korzystasz i co chcesz zautomatyzować, a w ciągu 24 godzin roboczych odpowiem z pierwszą oceną możliwego rozwiązania.