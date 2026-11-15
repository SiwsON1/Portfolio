=== WPIS: baselinker-nie-pobiera-zamowien ===

KEYWORD: BaseLinker nie pobiera zamówień

TITLE: BaseLinker nie pobiera zamówień z WooCommerce? Napraw to

METATITLE: BaseLinker nie pobiera zamówień? Sprawdź WooCommerce

METADESCRIPTION: BaseLinker nie pobiera zamówień z WooCommerce? Sprawdź ręczne pobieranie, logi, klucze REST API i blokady serwera. Zobacz, jak naprawić integrację.

EXCERPT: Zamówienia z WooCommerce przestały trafiać do BaseLinkera? Pokażę Ci, gdzie sprawdzić błędy połączenia, jak znaleźć przyczynę i kiedy potrzebna jest naprawa po stronie serwera.

LEAD: Jeśli BaseLinker nie pobiera zamówień z WooCommerce, zacznij od ręcznego pobrania i sprawdzenia logów w Base.com. Następnie sprawdź klucz REST API i bezpośrednie odnośniki WordPressa, a jeśli połączenie nadal nie działa, poszukaj blokad na serwerze. Pokażę Ci, jak przejść przez tę diagnostykę i co mogę naprawić, żeby zamówienia znów trafiały do obsługi wysyłek.

## BaseLinker nie pobiera zamówień? Zacznij od tych ustawień
Zanim zaczniesz zmieniać klucze API, wyłączać wtyczki albo szukać problemu w hostingu, sprawdź, czy Base.com w ogóle próbuje pobierać zamówienia. Czasami połączenie działa, ale pobieranie jest wyłączone. Innym razem zamówienia trafiają do systemu, tylko nie widzisz ich w aktualnym widoku.

BaseLinker, obecnie działający pod nazwą Base.com, domyślnie pobiera zamówienia z WooCommerce co 10 minut. Nie musisz jednak czekać na automatyczne pobranie. Możesz uruchomić je ręcznie i sprawdzić wynik.

**Zrób po kolei:**

- Wejdź w **Integracje → tabela Ustawienia integracji → kolumna Pobierane dane → Zamówienia**. Kliknij przycisk Zamówienia, aby ręcznie uruchomić pobieranie. System sprawdzi zamówienia z ostatnich 24 godzin.

- Otwórz **Manager zamówień → Ustawienia → Logi zamówień**. Sprawdź datę pobierania, liczbę pobranych zamówień i ewentualne błędy.

- Przejdź do **Integracje → Sklepy internetowe → Ustawienia → Zamówienia**. Upewnij się, że pobieranie jest włączone i sprawdź, do jakiego statusu w Base mają trafiać zamówienia.

- Otwórz **Manager zamówień → Zamówienia** i zastosuj filtr **Wyszukiwanie zaawansowane → Źródło zamówienia → Sklep**. Sprawdź, czy zamówienia są widoczne pod numerami ze sklepu lub Base.

Jeśli dopiero włączyłeś pobieranie, Base.com informuje, że w ciągu godziny powinny pojawić się zamówienia z ostatnich 24 godzin.

Co oznacza wynik takiego testu?

Jeśli ręczne pobieranie działa, ale automatycznie nic nie przychodzi, sprawdź przede wszystkim ustawienia pobierania. Jeśli log pokazuje błąd, przejdź do diagnozy po jego treści. Jeśli natomiast zamówienia są widoczne po zastosowaniu filtra źródła, problem może dotyczyć sposobu ich wyświetlania, a nie samego połączenia.

Nie zmieniaj od razu wszystkich ustawień. Najpierw ustal, czy problemem jest pobieranie, uwierzytelnienie, komunikacja z serwerem czy odnalezienie zamówień.

## Co oznacza błąd połączenia WooCommerce z BaseLinkerem?
Kiedy BaseLinker nie pobiera zamówień, sam komunikat o błędzie potrafi wskazać miejsce, od którego warto zacząć. Nie każdy problem wymaga zmiany klucza API, a nie każdy błąd połączenia oznacza awarię WooCommerce.

Przygotowałem tabelę, która pozwoli Ci szybko wybrać właściwy kierunek diagnostyki.

| Co widzisz | Najczęstsza przyczyna | Co zrobić |
| --- | --- | --- |
| Błąd 401 lub „Consumer key is missing” | Nieprawidłowy klucz API, brak uprawnień albo nagłówka Authorization | Sprawdź klucze, użytkownika i konfigurację serwera |
| Błąd 404 albo rest_route zamiast wp-json w kodzie strony | Problem z adresami REST API lub bezpośrednimi odnośnikami | Sprawdź ustawienia bezpośrednich odnośników WordPressa |
| Błąd 500 | Błąd po stronie serwera | Sprawdź logi serwera i działanie WooCommerce |
| Brak błędu, ale zamówień nie ma | Wyłączone pobieranie, niewłaściwy status lub filtr widoku | Uruchom pobieranie ręczne i sprawdź ustawienia oraz źródło zamówień |
| Zamówienia przychodzą podwójnie | Dodatkowy moduł pobiera zamówienia z Allegro do WooCommerce | Sprawdź i wyłącz dublujące pobieranie przez moduł Allegro |
| Zamówienia przestały spływać po przeprowadzce, zmianie domeny lub włączeniu HTTPS | Nieaktualny adres połączenia albo problem z komunikacją po zmianach | Zweryfikuj adres sklepu, klucze API i działanie HTTPS |

**Błąd 401** oznacza problem z uwierzytelnieniem lub uprawnieniami. Nie musi jednak świadczyć o błędnym kluczu. Serwer może odrzucać poprawne zapytanie albo usuwać z niego informacje potrzebne do uwierzytelnienia.

**Błąd 404** oznacza, że wskazany zasób nie istnieje pod danym adresem. W integracji WooCommerce warto wtedy sprawdzić działanie REST API, czyli mechanizmu, przez który Base.com komunikuje się ze sklepem.

**Błąd 500** dotyczy serwera. W tym przypadku samo ponowne zapisanie integracji może niczego nie zmienić. Potrzebna jest analiza tego, co dzieje się po stronie sklepu lub hostingu.

Jeśli komunikat nie wskazuje jednoznacznej przyczyny, nie zgaduj. Logi zamówień w Base są punktem wyjścia, a kolejnym krokiem jest sprawdzenie, czy WooCommerce prawidłowo przyjmuje zapytania.

## Czy klucz REST API WooCommerce jest nadal poprawny?
Integracja BaseLinker WooCommerce korzysta z REST API. To interfejs umożliwiający zewnętrznemu systemowi komunikację ze sklepem, między innymi pobieranie informacji o zamówieniach.

Do takiego połączenia potrzebne są klucze API. Pozwalają one WooCommerce rozpoznać system, który wysyła zapytania, i sprawdzić jego uprawnienia.

Jeśli integracja wcześniej działała, a teraz pojawia się błąd 401, zweryfikuj klucze oraz użytkownika, do którego zostały przypisane.

W WooCommerce znajdziesz je w **WooCommerce → Ustawienia → Zaawansowane → REST API**.

Klucz wykorzystywany przez Base powinien być przypisany do użytkownika z uprawnieniami administratora i mieć uprawnienia **Zapis/Odczyt**. Pozwalają one nie tylko odczytywać dane, ale również wykonywać operacje zapisu wymagane przez integrację.

Ważna jest jeszcze jedna rzecz: klucz API nie działa niezależnie od użytkownika WordPressa.

Jeśli usuniesz użytkownika, do którego przypisano klucz, przestanie on działać. Podobnie jest po jego unieważnieniu przez funkcję Revoke. Zmiana może zatem wystąpić po porządkowaniu kont administratorów, nawet jeśli nikt nie modyfikował samej integracji.

**Jak wymienić klucz bez tworzenia nowego połączenia?**

Przejdź do ustawień REST API WooCommerce i wybierz **Dodaj klucz**. Wskaż właściwego administratora, ustaw uprawnienia Zapis/Odczyt i wygeneruj nowe dane dostępowe.

Następnie otwórz istniejące połączenie WooCommerce w Base.com, podmień dane klucza i zapisz ustawienia. Na koniec wykonaj ręczne pobieranie zamówień.

Nie twórz od razu kolejnej integracji. Base zaleca aktualizowanie istniejącego połączenia, a nie dodawanie nowego po każdej zmianie.

Jeśli po wymianie klucza nadal otrzymujesz komunikat „Consumer key is missing”, problem może znajdować się na serwerze. Wrócę do tego przy blokadach nagłówka Authorization.

## Dlaczego wp-json i bezpośrednie odnośniki mają znaczenie?
W przypadku połączenia WooCommerce REST API BaseLinker korzysta z mechanizmu udostępniającego dane sklepu przez odpowiednie adresy.

WordPress może jednak obsługiwać te adresy na różne sposoby, zależnie od konfiguracji bezpośrednich odnośników.

Jeśli w **Ustawienia → Bezpośrednie odnośniki** masz wybraną opcję **Prosty**, standardowy adres REST API oparty na `/wp-json/` nie działa prawidłowo. Zamiast niego WordPress korzysta z formy `?rest_route=`.

To istotne, ponieważ dokumentacja Base.com wyraźnie wskazuje ten przypadek jako możliwą przyczynę błędu połączenia z WooCommerce.

Jeśli w źródle strony widzisz odnośniki zawierające `rest_route` zamiast `wp-json`, sprawdź konfigurację bezpośrednich odnośników. WooCommerce REST API wymaga ustawienia innego niż Prosty.

**Nie traktuj więc błędu 404 jako automatycznego sygnału do wymiany klucza API.** Najpierw sprawdź, czy sklep udostępnia właściwe adresy.

W tym miejscu sprawdź też, czy w sklepie jest oficjalna wtyczka Base.

W instrukcji podłączania WooCommerce Base.com wskazuje jej instalację jako krok 4. Wtyczka jest dostępna w katalogu WordPress i służy między innymi do zapewnienia prawidłowego przekazywania danych o zamówieniach.

Jeśli korzystasz z integracji WooCommerce z Base, sprawdź, czy ten element konfiguracji nie został pominięty.

Jeśli połączenie konfigurował ktoś dawno temu, sprawdź też, czy nie opiera się na starym Legacy REST API. Od WooCommerce 9.0 nie jest ono częścią rdzenia i wymaga osobnej wtyczki. Obecna integracja Base korzysta ze zwykłego REST API, więc zwykle wystarczy połączenie na nowych kluczach.

Jeśli chcesz lepiej zrozumieć sam system i jego zastosowanie w sklepie, wyjaśniam to również we wpisie [BaseLinker: co to jest](/blog/baselinker-co-to-jest).

## Co zrobić, jeśli serwer blokuje zapytania z Base.com?
Załóżmy, że klucz API jest prawidłowy, użytkownik ma odpowiednie uprawnienia, a bezpośrednie odnośniki są poprawnie ustawione. Mimo to BaseLinker nie pobiera zamówień.

Wtedy sprawdzam komunikację między Base.com a serwerem WooCommerce.

Problem może dotyczyć nagłówka **Authorization**, który przenosi informacje potrzebne do uwierzytelnienia zapytania. Niektóre konfiguracje serwerowe, szczególnie wykorzystujące CGI lub FastCGI, mogą usuwać ten nagłówek.

WooCommerce nie otrzymuje wtedy wymaganych danych i zwraca komunikat „Consumer key is missing”. Dla właściciela sklepu wygląda to na problem z kluczem, chociaż prawidłowe dane mogły zostać wysłane.

Sposób rozwiązania zależy od serwera.

W przypadku Apache poprawka może wymagać odpowiedniej konfiguracji `SetEnvIf Authorization` w pliku `.htaccess`. Przy Nginx istotna może być dyrektywa `fastcgi_pass_header Authorization`.

Nie wklejaj jednak przypadkowych fragmentów konfiguracji znalezionych w internecie. Najpierw trzeba ustalić, jak działa Twój serwer i dlaczego nagłówek nie dociera do WooCommerce.

Inną przyczyną są zabezpieczenia sklepu.

Wtyczki bezpieczeństwa mogą ograniczać dostęp do REST API dla niezalogowanych użytkowników. Jeśli wykorzystują filtr `rest_authentication_errors`, zapytanie może zakończyć się błędem 401 z oznaczeniem `rest_not_logged_in`.

Do tego dochodzą firewall hostingu, na przykład ModSecurity, oraz reguły Cloudflare. Firewall to mechanizm filtrujący ruch, natomiast WAF jest jego odmianą służącą do ochrony aplikacji internetowych. Takie zabezpieczenia mogą uznać zapytania do `/wp-json/` za niepożądany ruch automatyczny.

Sprawdzam również, czy sklep nie pozostaje w trybie konserwacji, który może zakłócać komunikację.

**To etap, na którym najczęściej potrzebny jest dostęp do serwera.** Panel Base pokazuje problem z pobieraniem, ale nie zawsze pozwala ustalić, która reguła po stronie hostingu zatrzymała zapytanie.

Nie zalecam wyłączania wszystkich zabezpieczeń na stałe. Właściwa naprawa powinna przywrócić komunikację z Base.com bez niepotrzebnego osłabiania ochrony sklepu.

## Dlaczego zamówienia znikają, zmieniają status albo się dublują?
Nie każdy problem związany z BaseLinkerem oznacza, że zamówienie w ogóle nie zostało pobrane.

Czasami zamówienie trafia do systemu, ale później zmienia status. Innym razem pojawia się podwójnie, ponieważ sklep i Base pobierają dane z różnych źródeł.

Rozdziel te przypadki, zanim zaczniesz przebudowywać połączenie.

**Pierwsza kwestia to synchronizacja statusów.** Base.com synchronizuje je w kierunku Base → sklep. Synchronizacja statusów ze sklepu do Base nie jest dostępna w tym mechanizmie.

Ustawienia znajdziesz w **Integracje → Sklepy internetowe → Ustawienia → Statusy zamówień**.

Jeśli oczekujesz, że zmiana statusu w WooCommerce automatycznie zmieni go w Base, nie zakładaj, że integracja działa w ten sposób. Trzeba sprawdzić, który system zarządza statusem i czy dodatkowe mechanizmy nie powodują konfliktu.

Miałem taki przypadek w sklepie LumiKids, sprzedającym odzież dziecięcą.

Sklep korzystał z WooCommerce, BaseLinkera i Allegro. Zamówienia za pobraniem samoczynnie się anulowały przez konflikt integracji związany z cofaniem statusu.

Przyczynę znalazłem w logach. Rozwiązaniem była napisana przeze mnie mała wtyczka ochronna, która blokowała błędną zmianę statusu zamówienia.

To przykład sytuacji, w której samo ponowne podłączenie BaseLinkera nie rozwiązałoby właściwego problemu.

Przy pracy nad sklepem analizuję też raport zamówień z ostatnich 30 dni. Sprawdzam anulowania, cofnięte statusy i nieudane płatności. Dzięki temu mogę zauważyć nieprawidłowości, których nie widać podczas zwykłego testu połączenia.

**Druga kwestia to duplikaty.** Jeśli WooCommerce pobiera zamówienia z Allegro przez dodatkowy moduł, Base.com może potraktować je jako zamówienia pochodzące ze sklepu.

Gdy Base obsługuje równolegle zamówienia z Allegro, taki układ może prowadzić do ich dublowania. Dokumentacja Base zaleca wyłączenie dodatkowego modułu pobierającego zamówienia z Allegro do WooCommerce.

**Trzecia kwestia to szkice zamówień.** Koszyk blokowy WooCommerce może tworzyć tymczasowe rekordy ze statusem `checkout-draft`, zanim klient faktycznie złoży zamówienie.

Takiego szkicu nie należy traktować jak zakończonego zakupu, który powinien trafić do wysyłki.

Dlatego zawsze sprawdzaj rzeczywisty status zamówienia w WooCommerce i jego odpowiednik w Base. Sama różnica między rekordami w systemach nie dowodzi jeszcze błędu pobierania.

## BaseLinker przestał działać po zmianie domeny lub serwera?
Jeżeli problemy zaczęły się po przeniesieniu sklepu, zmianie domeny albo uruchomieniu HTTPS, zacznij od konfiguracji istniejącego połączenia.

Base.com wymaga podania adresu sklepu w postaci samej domeny, bez `http://` i `https://`. Jeśli zmieniła się domena, sprawdź, czy w ustawieniach integracji nadal nie widnieje poprzednia.

Następnie zweryfikuj klucz REST API i dostępność komunikacji przez HTTPS.

Nie zakładaj, że skoro sklep otwiera się w przeglądarce i klienci mogą składać zamówienia, to zewnętrzna integracja również działa. Przeprowadzka może zmienić konfigurację serwera, sposób obsługi nagłówków lub reguły bezpieczeństwa.

Przy takich zmianach sprawdzam połączenie z BaseLinkerem przed przełączeniem sklepu na nową infrastrukturę.

Tak pracowałem podczas przenoszenia sklepu Części Jaworscy na nowy serwer. Sklep miał ponad 11 tysięcy części do busów i ponad tysiąc zamówień. BaseLinker oraz Allegro działały bez przerwy w sprzedaży.

Kluczowe było uwzględnienie integracji podczas migracji, a nie dopiero po jej zakończeniu.

Jeżeli planujesz podobną zmianę, ważne jest nie tylko przeniesienie produktów i zamówień, ale również sprawdzenie systemów, które odpowiadają za ich dalszą obsługę.

Przy konfiguracji nowego sklepu lub przebudowie połączeń mogę też przygotować kompletną [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), zamiast ograniczać się do usunięcia pojedynczego błędu.

## Kiedy zlecić naprawę integracji WooCommerce z BaseLinkerem?
Jeśli sprawdziłeś ręczne pobieranie, logi, klucz API i bezpośrednie odnośniki, a zamówienia nadal nie trafiają do Base, dalsza diagnostyka prawdopodobnie wymaga sprawdzenia serwera.

Możesz kontynuować samodzielnie, jeśli masz dostęp do konfiguracji hostingu i potrafisz odczytać błędy. Jeżeli jednak zamówienia czekają na wysyłkę, wielogodzinne próby zmieniania kolejnych ustawień mogą jedynie wydłużyć przestój.

Jako programista WordPress i WooCommerce naprawiam takie problemy po stronie sklepu, integracji i serwera. Nie zajmuję się wyłącznie ponownym wpisywaniem kluczy API.

**Przy takim zleceniu:**

- Sprawdzam logi pobierania zamówień w Base.com oraz ustawienia istniejącego połączenia WooCommerce.

- Weryfikuję klucze REST API, uprawnienia użytkownika, bezpośrednie odnośniki i poprawność komunikacji.

- Analizuję konfigurację serwera, przekazywanie nagłówka Authorization i ewentualne blokady zabezpieczeń.

- Sprawdzam konflikty dotyczące zamówień, ich statusów oraz dodatkowych integracji, w tym Allegro.

- Jeśli problem wymaga ingerencji w działanie WooCommerce, przygotowuję odpowiednią poprawkę, a w uzasadnionych przypadkach małą własną wtyczkę ochronną.

Nie każdy problem wymaga pisania kodu. Czasami wystarczy poprawić konfigurację. Jeśli jednak integracje wzajemnie zmieniają statusy zamówień, sama wymiana klucza niczego nie rozwiąże.

Mam doświadczenie w tworzeniu własnych rozszerzeń WordPressa, w tym ponad 40 wtyczek i mu-pluginów działających w 9 serwisach. Dzięki temu mogę szukać przyczyny również w kodzie sklepu, a nie tylko w ustawieniach dostępnych w panelu.

Jeśli potrzebujesz jednorazowej interwencji, możesz zlecić mi [naprawę sklepu WooCommerce](/uslugi/naprawa-sklepu-woocommerce).

Jeżeli sklep korzysta stale z BaseLinkera, Allegro lub Google Merchant, mogę również zapewnić [opiekę nad sklepem z integracjami](/uslugi/opieka-wordpress#cennik), obejmującą bieżące wsparcie techniczne.

**Najważniejsze jest ustalenie, dlaczego zamówienia nie docierają do Base, a nie tylko chwilowe przywrócenie połączenia.** Jeśli problem wraca po zmianie statusu, aktualizacji sklepu albo przeprowadzce, trzeba znaleźć jego rzeczywistą przyczynę. Napisz do mnie, co pokazują logi Base.com i od kiedy zamówienia przestały się pobierać. Na tej podstawie mogę zacząć diagnostykę bez powtarzania przypadkowych prób.

FAQ:

- P: Dlaczego BaseLinker nie pobiera zamówień z WooCommerce? | O: Przyczyną może być wyłączone pobieranie, nieprawidłowy klucz REST API, problem z bezpośrednimi odnośnikami albo blokada serwera. Zacznij od ręcznego pobrania zamówień i sprawdzenia logów w Base.com, zanim zmienisz konfigurację sklepu.

- P: Jak ręcznie pobrać zamówienia z WooCommerce do BaseLinkera? | O: Przejdź do Integracje → tabela Ustawienia integracji → kolumna Pobierane dane → Zamówienia i kliknij przycisk Zamówienia. Base sprawdzi zamówienia z ostatnich 24 godzin. Wynik możesz zweryfikować w logach pobierania zamówień.

- P: Co oznacza błąd 401 w integracji BaseLinker WooCommerce? | O: Błąd 401 wskazuje problem z uwierzytelnieniem lub uprawnieniami. Sprawdź klucz REST API, uprawnienia Zapis/Odczyt oraz użytkownika administratora. Jeśli pojawia się komunikat „Consumer key is missing”, przyczyną może być również usuwanie nagłówka Authorization przez serwer.

- P: Dlaczego BaseLinker nie widzi nowych zamówień, mimo że integracja działa? | O: Sprawdź, czy pobieranie zamówień jest włączone i do jakiego statusu trafiają w Base. Następnie użyj filtra Źródło zamówienia → Sklep w Managerze zamówień. Pamiętaj, że rekordy checkout-draft w WooCommerce są tymczasowymi szkicami, a nie złożonymi zamówieniami.

- P: Czy po zmianie domeny trzeba ponownie podłączyć BaseLinkera? | O: Nie musisz od razu tworzyć nowej integracji. Base zaleca aktualizację istniejącego połączenia. Sprawdź adres sklepu, klucze REST API i komunikację przez HTTPS, a następnie przetestuj pobieranie zamówień.

- P: Czy można naprawić BaseLinkera bez dostępu do serwera? | O: Część problemów naprawisz z poziomu WordPressa i Base.com, na przykład wymieniając klucz API lub poprawiając ustawienia pobierania. Jeśli przyczyną jest firewall, konfiguracja Apache lub Nginx albo blokowanie nagłówka Authorization, zwykle potrzebny jest dostęp do serwera. W takiej sytuacji mogę przeanalizować połączenie i wdrożyć poprawkę.