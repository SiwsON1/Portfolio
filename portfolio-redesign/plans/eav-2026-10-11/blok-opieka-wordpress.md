# Opieka nad stroną WordPress: zakres, koszty i zasady współpracy

Opieka nad stroną WordPress to nie tylko instalowanie aktualizacji i sprawdzanie, czy witryna się otwiera. Strona może wyglądać poprawnie, a jednocześnie mieć otwartą rejestrację niepożądanych kont, pokazywać Google nieaktualne treści albo błędnie obsługiwać zamówienia. Takie problemy znajdowałem zarówno w serwisach przejmowanych po innych wykonawcach, jak i podczas bieżącej pracy nad sklepami WooCommerce.

Prowadzę stałą opiekę techniczną, ale nie każda strona potrzebuje takiego samego zakresu obsługi. Inaczej pracuję z prostą witryną firmową, a inaczej ze sklepem połączonym z systemem sprzedaży. Poniżej wyjaśniam, co sprawdzam przy przejęciu WordPressa, jak wykonuję aktualizacje, na co przeznaczam bank godzin i które prace wyceniam osobno.

## Koszt opieki zależy od tego, za jakie funkcje strony odpowiadam

Głównym czynnikiem kosztu jest zakres odpowiedzialności. Strona firmowa z ofertą i formularzem kontaktowym potrzebuje innych testów niż sklep WooCommerce, w którym klient wybiera produkty, płaci i czeka na realizację zamówienia. Obie instalacje wymagają aktualizacji oraz zabezpieczeń, ale konsekwencje błędu i liczba elementów do sprawdzenia są różne.

Przy opiece nad sklepem WooCommerce nie wystarczy stwierdzić, że strona główna działa. Sprawdzam również funkcje związane z zakupami, zgodnie z uzgodnionym zakresem. W jednym ze sklepów zamówienia za pobraniem anulowały się samoczynnie. Z logów serwera ustaliłem, że integracja z BaseLinkerem cofała ich status, a WooCommerce po 60 minutach anulował je jako nieopłacone. Naprawiłem konflikt małą wtyczką ochronną i przetestowałem rozwiązanie.

Znaczenie ma też liczba używanych rozszerzeń, stan serwera i częstotliwość zmian. Dlatego abonament na opiekę ustalam po sprawdzeniu konkretnej instalacji, a nie wyłącznie na podstawie liczby podstron. W zakresie współpracy określam, które funkcje kontroluję regularnie i jakie zgłoszenia obsługuję.

## Przy przejęciu strony sprawdzam również błędy pozostawione przez poprzedniego wykonawcę

Przejęcie WordPressa zaczynam od przeglądu, nie od masowej aktualizacji wtyczek. Potrzebuję dostępu do panelu administracyjnego i hostingu, aby zobaczyć, jak serwis został zbudowany, kto ma do niego dostęp i gdzie znajdują się kopie zapasowe. W pierwszym przeglądzie sprawdzam konta użytkowników i ich role, aktywne i nieaktywne wtyczki (także spoza oficjalnego repozytorium WordPressa), otwarte punkty dostępu i możliwość rejestracji kont, pamięć podręczną, czyli cache przechowujący gotowe wersje stron, oraz kopie zapasowe i konfigurację hostingu.

Takie kontrole pozwoliły mi wykryć kilka problemów w przejętym serwisie windykacyjnym. Powodem przeglądu był nietypowy ruch widoczny w statystykach. Nie doszło do włamania, a zawartość strony i indeks Google były czyste. Mimo to znalazłem ustawienia, które wymagały poprawy.

| Problem znaleziony przy przejęciu strony | Czym groził | Co zrobiłem |
| --- | --- | --- |
| Rejestracja kont otwarta przez błędną wartość w bazie danych | Automatyczne skanery mogły zakładać konta. Powstały trzy takie konta. | Usunąłem konta i zamknąłem rejestrację. |
| Otwarty XML-RPC, czyli stary punkt zdalnego dostępu | Pozostawiał dodatkową drogę komunikacji z WordPressem, mimo wtyczki mającej go wyłączać. | Zablokowałem cały punkt dostępu, łącznie z pingbackami. |
| Publicznie widoczny login administratora | Ułatwiał poznanie nazwy konta administracyjnego. | Zablokowałem ujawnianie loginu przez listę autorów. |
| Komentarze otwarte na 72 wpisach | Umożliwiały dodawanie spamu. Znalazłem 17 spamowych komentarzy. | Usunąłem spam i zamknąłem komentarze. |
| Cache wyświetlający stare tytuły na 39 z 93 wpisów | Odwiedzający i Google widzieli nieaktualne tytuły mimo zmian zapisanych w panelu. | Usunąłem odpowiednie pliki pamięci podręcznej, których nie usuwał przycisk we wtyczce. |

Znalazłem też zabezpieczenie formularza, które zostało wcześniej przygotowane, ale nigdy nie trafiło na serwer. Działała jedynie pułapka na boty. To przykład różnicy między posiadaniem zabezpieczenia w projekcie a rzeczywistym wdrożeniem go na stronie.

Od czasu problemu ze starymi tytułami po każdej rundzie zmian porównuję wersję strony z pamięcią podręczną i bez niej. Przy przejęciu serwisu sprawdzam więc nie tylko ustawienia, lecz także to, co naprawdę widzi odwiedzający.

## Aktualizacje WordPressa wykonuję z kopią zapasową i kontrolą działania

Aktualizacja WordPressa, motywu lub wtyczki potrafi zmienić działanie funkcji niezwiązanej bezpośrednio z aktualizowanym elementem. Formularz może przestać wysyłać wiadomości, układ strony może wyglądać inaczej, a problem w sklepie pojawić się dopiero na karcie konkretnego produktu.

Przed aktualizacją przygotowuję kopię plików i bazy danych. Gdy konfiguracja na to pozwala, sprawdzam zmiany na kopii serwisu. Po wdrożeniu kontroluję kluczowe podstrony i funkcje. Jeśli aktualizacja powoduje błąd, wracam do wcześniejszej, działającej wersji i szukam przyczyny.

W jednym ze sklepów WooCommerce po zmianie we własnej wtyczce obsługującej zdjęcia karty produktów zaczęły zwracać błąd 500, czyli błąd serwera. Sklep nie wyświetlał większości produktów. Przyczynę znalazłem w logu błędów, poprawkę wgrałem tego samego dnia, a następnie ponownie wyłączyłem tryb debugowania używany do diagnozy.

Ważna jest również lokalizacja kopii zapasowej. Jeżeli kopia znajduje się wyłącznie na tym samym serwerze co sklep, awaria serwera może pozbawić Cię obu rzeczy naraz. Dlatego dbam o przechowywanie kopii również poza serwerem i możliwość odtworzenia witryny.

Jeśli dopiero uruchamiasz nową instalację, opisałem podstawowe czynności w poradniku [co zrobić po instalacji WordPressa](/blog/co-zrobic-po-instalacji-wordpressa). W ramach stałej opieki wykonuję aktualizacje i kontrolę ich skutków samodzielnie, więc nie musisz testować zmian na działającej stronie firmy.

## Bank godzin wykorzystuję na bieżące, niewielkie zmiany

Nie każda prośba wymaga osobnego projektu i wyceny. Czasami trzeba wymienić zdjęcie, poprawić formularz, zmienić numer telefonu albo uzupełnić ofertę. Właśnie do takich zadań służy bank godzin ustalony w abonamencie.

W ramach dostępnego czasu wykonuję między innymi:

- podmianę zdjęć i grafik w istniejących sekcjach,
- aktualizację cenników, danych kontaktowych i godzin działania,
- zmiany tekstów dostarczonych w gotowej formie,
- dodanie podstrony na podstawie istniejącego układu,
- poprawki formularzy, przycisków, linków i stopki,
- uzupełnienie realizacji oraz niewielkie poprawki wyglądu na telefonach i komputerach.

Wielkość banku godzin ustalam według przewidywanej liczby zadań. Na początku współpracy uzgadniamy także sposób rozliczania niewykorzystanego czasu.

Bank godzin nie oznacza nielimitowanej rozbudowy strony. Jeśli zgłoszenie wymaga większej ingerencji, najpierw oceniam jego zakres. Dzięki temu wiesz, które poprawki wykonuję w abonamencie, a które wymagają oddzielnego zlecenia.

## Większe przebudowy i nowe integracje wyceniam osobno

Stała opieka służy utrzymaniu istniejącej strony i obsłudze niewielkich zmian. Nie zastępuje projektu nowego serwisu, przebudowy całego motywu ani zaprojektowania nowych funkcji od podstaw.

Osobno wyceniam na przykład rozbudowane konfiguratory, nietypowe formularze, integracje z systemami zewnętrznymi oraz większe zmiany procesu zakupowego. Poza abonamentem pozostają także pisanie treści, prowadzenie kampanii reklamowych i regularna obsługa marketingowa.

Dobrym przykładem jest połączenie WooCommerce z systemem obsługującym sprzedaż na różnych kanałach. Samo uruchomienie takiego połączenia i późniejsze utrzymanie jego poprawnego działania to różne zadania. Więcej o technicznej stronie tego procesu znajdziesz na stronie [integracji WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker).

Kiedy zgłaszasz większą zmianę, przedstawiam zakres, wycenę i termin przed rozpoczęciem prac. W ten sposób bank godzin pozostaje dostępny na bieżącą obsługę, zamiast znikać na jednym rozbudowanym projekcie.

## Nie każda strona potrzebuje miesięcznego abonamentu

Jeśli Twoja strona jest prostą wizytówką, treści zmieniają się sporadycznie, a pomocy technicznej potrzebujesz raz lub dwa razy w roku, pojedyncze zlecenia mogą być rozsądniejszym rozwiązaniem. Nie ma sensu rozbudowywać abonamentu tylko dlatego, że strona działa na WordPressie.

Inaczej wygląda sytuacja, gdy witryna regularnie zbiera zapytania, publikujesz nowe materiały albo prowadzisz sprzedaż. Wtedy znaczenie ma nie tylko dostępność strony, lecz także poprawne działanie formularzy, płatności, zamówień i połączeń z innymi usługami.

Przy jednym ze sklepów sprawdzam podczas każdej pracy raport zamówień z ostatnich 30 dni. Kontroluję automatyczne anulowania, cofnięte statusy i nieudane płatności. Taka kontrola pomaga zauważyć problemy, których zwykły komunikat „strona działa” nie pokazuje.

Nie wymagam podpisywania umowy na cały rok. Opiekę rozliczam miesięcznie, a sposób obsługi zgłoszeń oraz zakres odpowiedzialności ustalamy na początku współpracy. Jeśli po przeglądzie uznam, że wystarczą pojedyncze naprawy zamiast regularnej administracji, proponuję właśnie takie rozwiązanie.

## AI pomaga znaleźć rozwiązanie, ale zmianę trzeba jeszcze bezpiecznie wdrożyć

Narzędzia AI potrafią przygotować fragment kodu, wyjaśnić komunikat błędu lub zaproponować sposób naprawy. Nie oznacza to jednak, że wygenerowana instrukcja pasuje do Twojej instalacji WordPressa. Znaczenie mają wersje wtyczek, motyw, konfiguracja hostingu i istniejące zależności między funkcjami.

Sam napisałem ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach, którymi się opiekuję albo które zbudowałem. Mu-pluginy to rozszerzenia automatycznie uruchamiane przez WordPressa. Przy takiej pracy ważne jest nie tylko przygotowanie kodu, ale również sprawdzenie, jak jego zmiana wpływa na pozostałe elementy strony.

Instrukcja przygotowana przez AI nie zastępuje kopii zapasowej, przeglądu logów serwera ani testu formularza czy zamówienia. Nawet poprawny fragment kodu może zostać wstawiony w niewłaściwym miejscu albo wejść w konflikt z istniejącą wtyczką.

W ramach opieki biorę na siebie techniczne wykonanie uzgodnionych zmian: analizuję problem, przygotowuję kopię, wdrażam poprawkę i sprawdzam jej skutki. Jeśli coś działa nieprawidłowo, wracam do diagnozy zamiast zostawiać Cię z kodem i instrukcją do samodzielnego wykonania.
