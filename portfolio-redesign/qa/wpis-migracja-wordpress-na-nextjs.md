=== WPIS: migracja-wordpress-na-nextjs ===

KEYWORD: migracja WordPress na Next.js

TITLE: Migracja WordPress na Next.js: kiedy warto i jak ją zrobić?

METATITLE: Migracja WordPress na Next.js bez utraty adresów URL

METADESCRIPTION: Migracja WordPress na Next.js wymaga mapy adresów, przekierowań i kontroli Google. Sprawdź, jak ją zaplanować, ograniczyć ryzyko i kiedy z niej zrezygnować.

EXCERPT: Przejście z WordPressa na Next.js może poprawić wydajność strony, ale źle przygotowana migracja grozi utratą ruchu z Google. Wyjaśniam, jak zabezpieczyć adresy, treści i przekierowania oraz kiedy lepiej zostać przy WordPressie.

LEAD: Migracja WordPress na Next.js ma sens, gdy obecna strona ogranicza jej rozwój, a nowa technologia rozwiązuje konkretny problem. Żeby nie stracić wypracowanego ruchu z Google, trzeba zachować ważne adresy, przygotować przekierowania i sprawdzić działanie nowej strony przed jej uruchomieniem. Pokażę Ci, jak planuję taki proces, na co zwracam uwagę i w jakich sytuacjach odradzam zmianę technologii.

## Kiedy migracja z WordPressa na Next.js ma sens, a kiedy lepiej zostać

Sam fakt, że strona działa na WordPressie, nie jest powodem do migracji. Jeśli szybko się ładuje, łatwo edytujesz treści, a dostępne funkcje wystarczają Twojej firmie, przejście na Next.js może oznaczać dodatkowy koszt bez wyraźnej korzyści.

Zmianę technologii rozważam wtedy, gdy obecna architektura zaczyna przeszkadzać w rozwoju strony. Przykładem jest rozbudowany serwis z wieloma typami podstron, danymi pobieranymi z różnych źródeł albo funkcjami, których wdrażanie w WordPressie wymaga coraz większej liczby wtyczek.

Next.js pozwala mi tworzyć strony i aplikacje, w których mam dużą kontrolę nad sposobem wyświetlania treści, wydajnością i strukturą adresów. Mogę przygotować podstrony na podstawie danych, zamiast budować każdą ręcznie. Ma to znaczenie szczególnie wtedy, gdy prowadzisz katalog, serwis lokalizacyjny lub stronę z rozbudowaną wyszukiwarką.

Przykładem takich możliwości jest mój własny projekt Kantorymapa. Serwis działa na Next.js, obejmuje 1900 kantorów w 140 miastach, a podstrony generowane są z jednej bazy danych. Strona ładuje się poniżej sekundy. To przykład konkretnego zastosowania technologii, a nie gwarancja, że każda strona po migracji osiągnie podobny wynik.

Są jednak sytuacje, w których odradzam przenoszenie strony:

- Twoja strona jest szybka i spełnia swoje zadanie. Jeśli problem dotyczy wyłącznie wyglądu, często wystarczy przebudowa istniejącego motywu WordPressa.

- Redakcja intensywnie korzysta z wtyczek. Jeśli pracownicy tworzą treści za pomocą konkretnych narzędzi WordPressa, trzeba sprawdzić, czy po migracji zachowają potrzebne możliwości.

- Prowadzisz sklep WooCommerce. Przeniesienie samego wyglądu sklepu nie wystarczy. Koszyk, płatności, zamówienia, konta klientów i integracje wymagają osobnego rozwiązania.

- Nie masz zasobów na kontrolę po uruchomieniu. Migracja nie kończy się w momencie opublikowania nowej strony. Przez kolejne tygodnie trzeba sprawdzać indeksowanie i błędy.

Jeżeli zastanawiasz się przede wszystkim nad zmianą technologii, a nie masz jeszcze określonego celu biznesowego, pomocne będzie porównanie [Next.js czy WordPress](/blog/next-js-15-vs-wordpress-2026).

Dopiero kiedy wiem, co obecna strona utrudnia i co ma się zmienić, mogę ocenić, czy migracja jest uzasadniona. Nie traktuję Next.js jako automatycznego następcy WordPressa.

## WordPress może zostać panelem treści albo zostać zastąpiony

Przy migracji nie musisz rezygnować z WordPressa. Są dwie główne drogi, a wybór wpływa na sposób edycji strony, zakres prac i późniejsze utrzymanie.

Pierwsza to headless WordPress, czyli rozwiązanie, w którym WordPress pozostaje panelem do zarządzania treścią, natomiast Next.js odpowiada za stronę widoczną dla odwiedzających.

Edytujesz wpisy i podstrony w znajomym panelu. Next.js pobiera z niego treści przez interfejs API, czyli mechanizm pozwalający aplikacjom wymieniać dane. Mogę wykorzystać wbudowane REST API WordPressa albo GraphQL udostępniany przez wtyczkę WPGraphQL.

W tym wariancie nie muszę przenosić całej redakcji do nowego systemu. Muszę natomiast zadbać o sposób publikowania zmian. Jeśli zmienisz tekst w WordPressie, nowa wersja powinna pojawić się na stronie Next.js zgodnie z ustalonym mechanizmem aktualizacji. Mogę wykorzystać ponowne generowanie wybranych stron po publikacji, ale wymaga to poprawnej konfiguracji.

Warto też pamiętać, że wtyczka działająca w panelu WordPressa niekoniecznie zadziała na stronie wyświetlanej przez Next.js. Dotyczy to między innymi formularzy, wyszukiwarek czy elementów generowanych przez krótkie kody.

Szerzej opisuję ten model na stronie [headless WordPress](/uslugi/headless-wordpress).

Druga droga to pełne przeniesienie treści do innego systemu CMS, na przykład Sanity. Wtedy eksportuję treści z WordPressa, dostosowuję ich strukturę i importuję je do nowego panelu. Po zakończeniu migracji WordPress nie musi już obsługiwać strony.

Takie rozwiązanie daje możliwość zaprojektowania sposobu edycji treści od początku. Zamiast przenosić wszystkie historyczne pola i zależności między wtyczkami, mogę stworzyć strukturę odpowiadającą temu, jak faktycznie zarządzasz serwisem.

Wiąże się to jednak z większą liczbą zmian. Trzeba przenieść wpisy, obrazy, autorów, kategorie, powiązania między treściami oraz przeszkolić osoby korzystające z panelu.

| Obszar | WordPress jako panel | Nowy CMS, np. Sanity |
| --- | --- | --- |
| Edycja treści | Zostaje znajomy panel | Praca w nowym panelu |
| Przenoszenie danych | WordPress nadal przechowuje treści | Wymagany eksport i import |
| Wtyczki WordPressa | Część funkcji panelu może pozostać | Funkcje trzeba zastąpić |
| Utrzymanie | Utrzymujesz WordPressa i Next.js | Utrzymujesz Next.js i nowy CMS |
| Najważniejsza korzyść | Mniejsza zmiana dla redakcji | Większa swoboda organizacji treści |

Przy wyborze sprawdzam przede wszystkim, kto będzie aktualizował stronę i z jakich funkcji korzysta. Jeśli Twoi pracownicy dobrze znają WordPressa, pozostawienie go jako panelu może ograniczyć zakres zmian. Jeśli obecny system jest pełen nieużywanych pól i wtyczek, nowy CMS może być rozsądniejszy.

## Spis adresów i mapa przekierowań chronią wypracowany ruch

Najważniejszym elementem migracji z punktu widzenia SEO jest ustalenie, co stanie się z adresami istniejących podstron.

Google zna konkretne adresy URL. Jeśli artykuł był dostępny pod określonym adresem, a po zmianie technologii ten adres przestanie działać, użytkownicy korzystający ze starych linków mogą zobaczyć błąd 404. Google również musi wtedy ustalić, czy treść została usunięta, czy przeniesiona.

Dlatego nie zmieniam adresów tylko dlatego, że zmienia się technologia. Jeżeli dotychczasowa struktura jest logiczna, mogę zachować ją w Next.js. Adres wpisu nie musi zmieniać się wraz z systemem, który go wyświetla.

Przed migracją przygotowuję spis istniejących adresów. Uwzględniam nie tylko strony widoczne w menu, ale również archiwalne artykuły, kategorie, tagi, obrazy oraz adresy, na które prowadzą wcześniejsze przekierowania.

| Element starej strony | Co z nim robię przy migracji |
| --- | --- |
| Wpisy blogowe | Zachowuję adresy lub przypisuję im nowe odpowiedniki |
| Strony firmowe i usługowe | Sprawdzam strukturę, treść i linki wewnętrzne |
| Kategorie i tagi | Oceniam, które archiwa mają pozostać dostępne |
| Obrazki i pliki | Sprawdzam adresy, opisy i miejsca wykorzystania |
| Formularze | Odtwarzam działanie i powiązane integracje |
| Wtyczki SEO | Przenoszę tytuły, opisy i potrzebne dane strukturalne |
| Istniejące przekierowania | Zachowuję ich działanie i sprawdzam adresy docelowe |
| Wersje językowe | Odtwarzam adresy oraz powiązania między językami |

Gdy adres musi się zmienić, przygotowuję stałe przekierowanie 301 lub 308. Informuje ono przeglądarkę i wyszukiwarkę, że treść została przeniesiona. Google traktuje oba kody jako przekierowania stałe.

W Next.js mogę skonfigurować takie przekierowania w pliku next.config, w funkcji redirects(). Ustawienie permanent: true powoduje zwracanie kodu 308.

Nie kieruję automatycznie wszystkich nieistniejących podstron na stronę główną. Dla starego poradnika szukam odpowiadającego mu artykułu lub odpowiedniej strony tematycznej. Jeśli wartościowego odpowiednika nie ma, decyzję o zachowaniu adresu podejmuję osobno.

Znam konsekwencje zaniedbania przekierowań z własnej pracy przy serwisie windykacyjnym działającym na WordPressie.

Google Search Console pokazywał tam 106 błędów 404 związanych ze starymi adresami miast. Generator adresów zgubił literę „ł”, przez co powstały nieprawidłowe wersje, na przykład „putusk” zamiast „pultusk”.

Przygotowałem mapę 163 par adresów. Spośród nich 161 zwracało błąd 404, a 2 miały już przekierowanie. Następnie wdrożyłem stałe przekierowania 301.

Google wracał do starych adresów jeszcze przez kilka tygodni po zmianie. Pokazało mi to, dlaczego przekierowania nie powinny znikać zaraz po uporządkowaniu raportów. Dokumentacja Google zaleca utrzymywanie ich przez co najmniej rok, a jeśli nadal są przydatne, warto pozostawić je dłużej.

Na własnej stronie marcinsiwonia.pl, działającej obecnie na Next.js, również korzystam ze stałych przekierowań. Wycofane wpisy kieruję na najbliższe tematycznie strony. Przykładowo dawny artykuł o tworzeniu stron Next.js prowadzi obecnie do strony usługi.

## Przeniesienie treści wymaga więcej niż eksportu wpisów

Kiedy mam już ustaloną strukturę adresów, przechodzę do treści i funkcji strony. Sam eksport z WordPressa nie oznacza, że wszystko będzie poprawnie działało po uruchomieniu Next.js.

Sprawdzam, jak zbudowane są artykuły i podstrony. WordPress może przechowywać treści w standardowym edytorze, dodatkowych polach albo strukturach tworzonych przez motyw i wtyczki. Sposób ich odczytu zależy od konkretnego serwisu.

Szczególnej uwagi wymagają elementy, które łatwo przeoczyć:

- Krótkie kody wtyczek. W WordPressie mogą wyświetlać formularz, galerię lub tabelę. Po przeniesieniu treści do Next.js sam kod nie odtworzy tej funkcji.

- Formularze i integracje. Sprawdzam nie tylko wygląd formularza, lecz także wysyłkę wiadomości, walidację pól i przekazywanie danych do zewnętrznych systemów.

- Wersje językowe. Każdy język może mieć własne adresy, menu i powiązania z pozostałymi wersjami.

- Adresy z polskimi znakami. Porównuję rzeczywiste adresy z tymi zapisanymi w bazie i mapie przekierowań.

- Obrazy i odnośniki w artykułach. Sprawdzam, czy pliki są dostępne, a linki nie prowadzą do nieaktualnych adresów.

Osobno traktuję metadane SEO, czyli tytuły i opisy wyświetlane w wynikach wyszukiwania. Jeśli były ustawione we wtyczce WordPressa, ich przeniesienie wymaga odczytania odpowiednich danych. To samo dotyczy danych strukturalnych, które pomagają wyszukiwarkom rozumieć zawartość strony.

Nie kopiuję bez sprawdzenia wszystkiego, co znajduje się w bazie. Nieaktualne treści, nieużywane kategorie i zbędne elementy mogą nie mieć uzasadnienia w nowym serwisie. Decyzja o ich usunięciu musi jednak uwzględniać istniejące adresy i ruch z wyszukiwarki.

Przed uruchomieniem przygotowuję wersję testową. Sprawdzam na niej działanie podstron, menu, formularzy i integracji, a także wygląd na telefonie i komputerze. Weryfikuję również, czy strony udostępniają wyszukiwarkom właściwe treści i metadane.

Jeśli projekt obejmuje nowy wygląd, ustalam wcześniej, czy odtwarzam istniejący układ, czy przygotowuję nowy. Zmiana technologii i jednoczesna przebudowa treści oraz struktury strony zwiększają zakres rzeczy wymagających sprawdzenia.

## Uruchomienie Next.js i pierwsze tygodnie wymagają kontroli

Gdy wersja testowa działa poprawnie, przygotowuję uruchomienie nowej strony. W zależności od hostingu może to wymagać zmiany konfiguracji domeny, czyli ustawień DNS kierujących odwiedzających na właściwy serwer.

Planuję przełączenie tak, żeby przerwa w działaniu była jak najkrótsza. Nie zakładam jednak, że zmiana DNS zawsze odbędzie się bez chwilowej niedostępności.

Po uruchomieniu sprawdzam rzeczywistą odpowiedź serwera pod najważniejszymi adresami. Upewniam się, że działające strony zwracają poprawną treść, a stare adresy przekierowują tam, gdzie powinny.

Następnie kontroluję mapę witryny, linki wewnętrzne i ustawienia indeksowania. Wersja testowa nie powinna przypadkowo pojawić się w wynikach wyszukiwania, ale blokada indeksowania nie może pozostać na uruchomionej stronie.

W Google Search Console obserwuję, czy wyszukiwarka wykrywa nowe adresy i czy nie rośnie liczba błędów 404. Przy problematycznych podstronach korzystam ze sprawdzania adresów URL, aby zobaczyć, co Google wie o danej stronie.

Ważne rozróżnienie: narzędzie „Zmiana adresu” w Search Console służy do przenoszenia witryny na inną domenę. Jeżeli zmieniasz WordPressa na Next.js, ale zachowujesz tę samą domenę, nie korzystasz z tego narzędzia.

Sprawdzam też pamięć podręczną, czyli cache. Może ona przyspieszać działanie strony, ale przy błędnej konfiguracji potrafi udostępniać nieaktualną zawartość.

Przekonałem się o tym przy wspomnianym serwisie windykacyjnym. W panelu WordPressa tytuły artykułów były już zmienione, natomiast wtyczka cache nadal podawała odwiedzającym i Google stare wersje na 39 z 93 wpisów.

Dlatego po uruchomieniu interesuje mnie nie tylko to, co widzisz w panelu administracyjnym. Sprawdzam również, jaką treść faktycznie otrzymuje odwiedzający i robot Google.

W kolejnych tygodniach kontroluję raporty Search Console, dostępność podstron, przekierowania i wydajność. Zwracam uwagę na wskaźniki Core Web Vitals, czyli pomiary szybkości wyświetlania głównej treści, reakcji strony na działania użytkownika i stabilności układu podczas ładowania.

Taka kontrola pozwala wykryć błędy, których nie było widać na wersji testowej, szczególnie gdy Google ponownie odwiedza starsze adresy.

## Czego nie obiecuję przy migracji i od czego zależy jej zakres

Nie mam jeszcze za sobą wdrożonej migracji WordPress na Next.js dla klienta.

Mam doświadczenie w budowie serwisów w obu technologiach, pracy z przekierowaniami i rozwiązywaniu problemów technicznych wpływających na indeksowanie. Rozdzielam jednak te doświadczenia od realizacji pełnej migracji.

Nie obiecuję również zachowania wszystkich pozycji w Google. Nawet przy poprawnie przeprowadzonym przeniesieniu wyniki wyszukiwania mogą przejściowo się wahać. Potwierdza to dokumentacja Google dotycząca przenoszenia witryn.

Mogę zaplanować zachowanie adresów, wdrożyć przekierowania, przenieść metadane i kontrolować błędy. Nie mogę zagwarantować, jak szybko Google przetworzy wszystkie zmiany ani jakie pozycje zajmie strona po migracji.

Nie podaję jednego terminu i jednej ceny dla każdego projektu. Największe znaczenie ma liczba adresów do przeniesienia oraz stopień skomplikowania ich struktury. Inaczej wygląda migracja strony z podstawowymi podstronami i blogiem, a inaczej serwisu z wieloma typami treści, wersjami językowymi i niestandardowymi funkcjami.

Na zakres prac wpływają również formularze, integracje z zewnętrznymi systemami oraz decyzja, czy WordPress pozostanie panelem, czy treści trafią do innego CMS. Do tego dochodzą projekt wyglądu, testy i kontrola po uruchomieniu.

Jeśli problemem Twojej strony jest wyłącznie niska wydajność, najpierw warto sprawdzić, czy można ją poprawić bez migracji. Z kolei przy planowaniu bardziej rozbudowanych funkcji znaczenie mają możliwości [tworzenia stron Next.js](/uslugi/aplikacje-nextjs), a nie sama zmiana nazwy technologii.

Najważniejsza decyzja zapada więc jeszcze przed rozpoczęciem programowania: czy nowa architektura rozwiąże problem, którego nie da się rozsądniej usunąć w obecnym systemie. Jeśli odpowiedź brzmi „nie”, pozostanie przy WordPressie może być lepszym rozwiązaniem dla Twojej firmy.

FAQ:

- P: Czy moja strona straci pozycje w Google po przejściu z WordPressa na Next.js? | O: Nie da się zagwarantować zachowania wszystkich pozycji. Ryzyko ograniczam przez zachowanie ważnych adresów, stałe przekierowania, przeniesienie metadanych i kontrolę indeksowania. Google wskazuje, że po przeniesieniu strony mogą występować przejściowe wahania widoczności.

- P: Czy po migracji nadal będę mógł edytować wpisy w WordPressie? | O: Tak, jeśli wybierzesz rozwiązanie headless WordPress. Wtedy nadal edytujesz treści w WordPressie, a Next.js odpowiada za ich wyświetlanie. Przy pełnym przeniesieniu do Sanity lub innego CMS będziesz korzystać z nowego panelu.

- P: Ile potrwa przeniesienie mojej strony z WordPressa na Next.js? | O: Największy wpływ na termin mają liczba istniejących adresów i złożoność treści. Formularze, integracje, wersje językowe i niestandardowe wtyczki mogą zwiększyć zakres prac. Termin mogę określić po sprawdzeniu struktury obecnej strony i ustaleniu sposobu migracji.

- P: Ile kosztuje migracja mojej strony WordPress na Next.js? | O: Największym czynnikiem kosztowym jest zakres przebudowy funkcji, które obecnie zapewnia WordPress i jego wtyczki. Jeśli WordPress zostaje panelem treści, część istniejącego zaplecza można zachować. Pełne przeniesienie do nowego CMS wymaga dodatkowo eksportu danych, przygotowania struktury treści i sprawdzenia ich poprawności.

- P: Czy mogę przenieść sklep WooCommerce na Next.js bez utraty zamówień? | O: Jest to możliwe, ale wymaga osobnego zaplanowania obsługi produktów, koszyka, płatności, kont klientów i historii zamówień. Samo przeniesienie wyglądu sklepu nie zapewnia działania tych funkcji. Jeśli obecny WooCommerce spełnia potrzeby firmy, nie rekomenduję migracji wyłącznie ze względu na technologię.