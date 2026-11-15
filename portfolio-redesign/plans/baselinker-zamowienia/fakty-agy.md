Poniżej znajduje się zestawienie faktów do poradnika **„BaseLinker nie pobiera zamówień z WooCommerce: przyczyny i naprawa”**, przygotowane wyłącznie na podstawie źródeł pierwotnych (`base.com` / `baselinker.com`, `woocommerce.com`, `woocommerce.github.io`, `developer.wordpress.org`, oficjalnego repozytorium `wordpress.org/plugins/baselinker-woo/`) oraz uzupełniająco blogów wdrożeniowych/forów oznaczonych jako **FORUM**. Kwestie niepotwierdzone wprost w oficjalnych źródłach pierwotnych oznaczono jako **NIEPEWNE**.

---

## 1. Jak dziś działa integracja WooCommerce z BaseLinkerem (Base.com)

### Mechanizm połączenia (REST API vs plik integracyjny vs wtyczka)
* **Połączenie przez REST API WooCommerce oraz oficjalną wtyczkę WordPress:** Obecnie integracja WooCommerce z Base.com (dawniej BaseLinker) działa natywnie przez wbudowane w WooCommerce **REST API** (uwierzytelniane parą kluczy: *Klucz klienta / Consumer Key* oraz *Sekret klienta / Consumer Secret*) wspierane przez **oficjalną wtyczkę Base w WordPressie**.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
* **Brak pliku integracyjnego na FTP dla WooCommerce:** Metoda „przez plik integracyjny” (polegająca na pobraniu pliku np. `baselinker.php`, wpisaniu w nim danych dostępowych do bazy danych SQL i wgraniu go przez FTP) dotyczy innych platform sklepowych nieposiadających bezpośredniej integracji po API; większość popularnych platform – w tym WooCommerce, PrestaShop, Shopify i Shoper – łączy się przez API.
  * Źródło: [https://base.com/pl-PL/pomoc/podlaczanie-sklepow-internetowych/](https://base.com/pl-PL/pomoc/podlaczanie-sklepow-internetowych/)
  * Źródło: [https://base.com/pl-PL/pomoc/integracja-sklepu-przez-plik-integracyjny/](https://base.com/pl-PL/pomoc/integracja-sklepu-przez-plik-integracyjny/)
* **Rola oficjalnej wtyczki WordPress (`baselinker-woo`):** W oficjalnej instrukcji Base.com instalacja wtyczki jest wymagana (Krok 4), *„aby m.in. dane o zamówieniach były prawidłowo przekazywane do systemu”*. Zgodnie z kartą wtyczki **Base (formerly BaseLinker)** w repozytorium WordPress (`baselinker-woo`), wtyczka rozszerza standardową komunikację o: obsługę niestandardowych numerów zamówień (innych niż standardowe ID posta WordPress), dołączanie metadanych przesyłek do importowanych zamówień, przekazywanie numerów punktów odbioru/paczkomatów (np. z wtyczki *Flexible Shipping*), import dodatkowych metod dostawy oraz dedykowane endpointy przyspieszające synchronizację stanów i cen.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
  * Źródło: [https://wordpress.org/plugins/baselinker-woo/](https://wordpress.org/plugins/baselinker-woo/)

### Wymagane uprawnienia klucza API i użytkownika
* **Uprawnienia klucza `Zapis/Odczyt` (`Read/Write`):** Podczas generowania klucza REST API w WooCommerce w polu *Uprawnienia* należy wybrać **Zapis/Odczyt** (`Read/Write`). Dokumentacja WooCommerce definiuje trzy poziomy uprawnień klucza: *Read* (tylko pobieranie danych), *Write* (tylko tworzenie i aktualizacja) oraz *Read/Write* (odczyt i zapis). Również ogólna instrukcja Base.com dla sklepów łączonych po API zaleca nadanie pełnych uprawnień (`Read and write`).
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
  * Źródło: [https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/](https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/)
  * Źródło: [https://woocommerce.com/document/woocommerce-rest-api/](https://woocommerce.com/document/woocommerce-rest-api/)
* **Konto użytkownika z rolą Administratora:** Klucz REST API w WooCommerce musi zostać wygenerowany dla użytkownika posiadającego w WordPressie profil z uprawnieniami **administratora**.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)

### Oficjalne kroki podłączenia WooCommerce według pomocy Base.com
* **Krok 1 – Dodanie integracji WooCommerce w panelu Base:** Należy przejść do `Integracje → +Dodaj integrację`, wybrać **WooCommerce**, wpisać `Nazwę wyświetlaną` (dowolna nazwa do 15 znaków) oraz `Adres sklepu` – oficjalna instrukcja nakazuje wpisać **samą domenę bez protokołu `http://` ani `https://`**.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
* **Krok 2 – Wygenerowanie kluczy REST API w WooCommerce:** W panelu WordPress należy przejść do `WooCommerce → Ustawienia → Zaawansowane → REST API → Dodaj klucz`, uzupełnić pole `Opis` (np. nazwa systemu), wybrać `Użytkownika` (profil z uprawnieniami administratora) oraz w polu `Uprawnienia` wybrać `Zapis/Odczyt`, a następnie zapisać formularz.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
* **Krok 3 – Wklejenie kluczy API i zapisanie połączenia:** Wygenerowane w WooCommerce klucze należy skopiować, wkleić w odpowiednie pola w panelu Base.com i kliknąć przycisk `Zapisz`.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
* **Krok 4 – Instalacja wtyczki Base w WordPressie:** Należy pobrać oficjalną wtyczkę Base dostępną na platformie WordPress i zainstalować ją w sklepie.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)

---

## 2. Konfiguracja pobierania zamówień w BaseLinkerze (miejsce, statusy, częstotliwość, data, pobranie ręczne)

* **Gdzie włącza się pobieranie zamówień i status początkowy:** Ustawienia znajdują się w panelu Base.com w sekcji `Integracje → Sklepy internetowe → Ustawienia → Zamówienia`. W tym miejscu włącza się opcję pobierania zamówień ze sklepu (`Pobieraj zamówienia`) oraz wybiera domyślny **status w Base.com**, do którego mają trafiać nowo pobrane zamówienia.
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
  * Źródło: [https://base.com/pl-PL/pomoc/podlaczanie-sklepow-internetowych/](https://base.com/pl-PL/pomoc/podlaczanie-sklepow-internetowych/)
* **Gdzie ustawia się powiązanie (mapowanie) statusów i w jakim kierunku ono działa:** Mapowanie statusów znajduje się w `Integracje → Sklepy internetowe → Ustawienia → Statusy zamówień`. Oficjalna dokumentacja Base.com zastrzega jednak, że synchronizacja statusów działa **wyłącznie w kierunku `Base.com → sklep`** (zmiana statusu w Base.com zmienia status w sklepie). Synchronizacja statusów w stronę powrotną (`sklep → Base.com`) **nie jest obsługiwana**, a każde zamówienie ze sklepu jest pobierane przez Base.com **tylko raz**.
  * Źródło: [https://base.com/pl-PL/pomoc/statusy-zamowien/](https://base.com/pl-PL/pomoc/statusy-zamowien/)
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
* **Które zamówienia i z jakimi statusami są pobierane ze sklepu:** Według oficjalnej pomocy Base.com system pobiera ze sklepu **zarówno zamówienia opłacone, jak i nieopłacone**. W przypadku sklepów na **WooCommerce** zamówienia są oznaczane w Base.com jako opłacone na podstawie statusu `processing` oraz `completed`.
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
* **Wybór konkretnych statusów WooCommerce do pobierania / ignorowania przy imporcie – NIEPEWNE / FORUM:** W oficjalnej bazie wiedzy Base.com brak potwierdzenia, aby w ustawieniach integracji WooCommerce istniał filtr pozwalający użytkownikowi wybrać, które statusy z WooCommerce mają być pobierane, a które ignorowane przy imporcie (blogi wdrożeniowe wspominają niekiedy o pomijaniu zamówień nieopłaconych/szkiców lub konfiguracji statusów, jednak oficjalna pomoc Base.com potwierdza pobieranie zamówień opłaconych i nieopłaconych oraz jednokierunkowość mapowania statusów `Base.com → sklep`).
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
  * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
* **Częstotliwość automatycznego pobierania zamówień:** Domyślnie zamówienia ze sklepu internetowego są pobierane przez Base.com automatycznie **co 10 minut**.
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
* **Częstotliwość skrócona (1 minuta) – FORUM / NIEPEWNE:** Artykuły blogowe agencji wskazują, że w ustawieniach zaawansowanych / dodatkowo płatnych opcjach częstotliwość pobierania zamówień można skrócić z 10 minut do **1 minuty**; informacja ta nie jest jednak wymieniona wprost w publicznym artykule pomocy `pobieranie-zamowien-ze-sklepu`.
  * Źródło (**FORUM**): [https://hauerpower.com/](https://hauerpower.com/)
* **Data / zakres czasowy, od którego Base.com pobiera zamówienia:** Po włączeniu integracji i pobierania zamówień, w ciągu godziny od uruchomienia w systemie pojawią się zamówienia **z ostatnich 24 godzin**. Publiczna dokumentacja Base.com nie potwierdza istnienia w panelu ustawienia pozwalającego wybrać dowolną datę historyczną (starszą niż 24 godziny) do automatycznego pobrania zaległych zamówień (**NIEPEWNE** w źródłach pierwotnych; artykuły **FORUM** potwierdzają, że po awarii trwającej dłużej niż 24 godziny starsze zamówienia nie pobierają się automatycznie).
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
  * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
* **Wymuszenie ręcznego pobrania zamówień:** Pobieranie zamówień można w dowolnym momencie uruchomić ręcznie, przechodząc w panelu Base.com do: `Integracje → sekcja Ustawienia integracji (tabela) → kolumna Pobierane dane → przycisk Zamówienia`. Ręczne pobranie sprawdza zamówienia z **ostatnich 24 godzin**.
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)

---

## 3. Typowe przyczyny niepobierania zamówień i ich potwierdzenie w źródłach

### A. Błędy HTTP 401 / 403 / 404 / 500 przy połączeniu i co oznaczają
* **Błąd `401 Unauthorized`:** Dokumentacja WooCommerce REST API definiuje kod `401 Unauthorized` jako **błąd uwierzytelniania lub uprawnień** (*Authentication or permission errors, such as incorrect API keys*). W dokumentacji WordPress REST API kod `401` jest również zwracany, gdy dostęp do REST API zostanie ograniczony filtrem `rest_authentication_errors` dla niezalogowanych żądań (`rest_not_logged_in`).
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#errors](https://woocommerce.github.io/woocommerce-rest-api-docs/#errors)
  * Źródło: [https://developer.wordpress.org/rest-api/frequently-asked-questions/](https://developer.wordpress.org/rest-api/frequently-asked-questions/)
* **Błąd `403 Forbidden`:** W tabeli podstawowych błędów `woocommerce.github.io` wymienione są kody `400`, `401`, `404` i `500` (brak osobnego wiersza dla `403`). W dokumentacji WordPress REST API oraz opracowaniach technicznych (**FORUM**) kod `403 Forbidden` (`rest_forbidden` lub blokada serwera HTTP) oznacza, że serwer rozpoznał żądanie, ale odmawia dostępu – z powodu niewystarczających uprawnień użytkownika/klucza do danej operacji albo zablokowania zapytania przez zewnętrzną zaporę WAF, Cloudflare, `ModSecurity` lub wtyczkę bezpieczeństwa.
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#errors](https://woocommerce.github.io/woocommerce-rest-api-docs/#errors)
  * Źródło: [https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/)
  * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
* **Błąd `404 Not Found`:** Dokumentacja WooCommerce REST API definiuje kod `404 Not Found` jako żądanie do zasobu, który nie istnieje lub w którym brakuje wymaganych parametrów (*Requests to resources that don't exist or are missing required parameters*). W środowisku WordPress/WooCommerce błąd `404` na ścieżce `/wp-json/` występuje także wtedy, gdy bezpośrednie odnośniki (permalinki) są ustawione na „Proste” (*Plain*) lub reguły przepisywania URL (`.htaccess` / Nginx) są uszkodzone.
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#errors](https://woocommerce.github.io/woocommerce-rest-api-docs/#errors)
  * Źródło: [https://developer.wordpress.org/rest-api/key-concepts/](https://developer.wordpress.org/rest-api/key-concepts/)
* **Błąd `500 Internal Server Error`:** Dokumentacja WooCommerce REST API definiuje kod `500 Internal Server Error` jako żądanie, które nie może zostać przetworzone z powodu błędu po stronie serwera (*Requests that cannot be processed due to a server error*, np. krytyczny błąd PHP / przekroczenie limitu pamięci).
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#errors](https://woocommerce.github.io/woocommerce-rest-api-docs/#errors)

### B. Permalinki ustawione na „Prosty” (*Plain*) a REST API
* **Wymóg „ładnych” bezpośrednich odnośników w WooCommerce:** Oficjalna dokumentacja WooCommerce REST API wymaga, aby przed wygenerowaniem kluczy API w `Settings > Permalinks` (`Ustawienia > Bezpośrednie odnośniki`) ustawić format czytelny dla człowieka – **dowolną opcję inną niż „Plain” („Proste”)**.
  * Źródło: [https://woocommerce.com/document/woocommerce-rest-api/](https://woocommerce.com/document/woocommerce-rest-api/)
* **Różnica między `/wp-json/` a `?rest_route=` w dokumentacji WordPressa:** Dokumentacja WordPress REST API wyjaśnia, że na stronach z wyłączonymi przyjaznymi permalinkami (ustawienie *Plain*) ścieżka `/wp-json/` nie działa, a trasy REST API są dostępne wyłącznie jako parametr zapytania `?rest_route=/`.
  * Źródło: [https://developer.wordpress.org/rest-api/key-concepts/](https://developer.wordpress.org/rest-api/key-concepts/)
* **Potwierdzenie w pomocy Base.com:** Oficjalna instrukcja Base.com dla WooCommerce w sekcji *„Błąd połączenia z WooCommerce? Sprawdź REST API”* wprost wskazuje: *„Jeśli źródło Twojej strony nie wskazuje na żadne permalinki i widzisz link `rest_route` zamiast `wp-json`, włącz API zgodnie z instrukcją dostępną pod adresem WooCommerce”*.
  * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)

### C. Serwer (Apache, FastCGI, Nginx) obcina nagłówek `Authorization`
* **Komunikat „Consumer key is missing” przy połączeniu po SSL:** Dokumentacja techniczna WooCommerce REST API wskazuje, że przy uwierzytelnianiu przez HTTPS (HTTP Basic Auth) niektóre serwery nie parsują poprawnie nagłówka `Authorization`. Objawia się to błędem `"Consumer key is missing"` pomimo poprawnego przesyłania klucza po SSL. Jako obejście WooCommerce dopuszcza przekazanie `consumer_key` i `consumer_secret` jako parametrów query string w URL.
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication)
* **Wycinanie nagłówka w środowiskach CGI/FastCGI (Apache / Nginx):** Oficjalny podręcznik WordPress REST API (dział FAQ: *„Why is Authentication not working?”*) potwierdza, że serwery WWW działające w środowisku CGI często wycinają nagłówek `Authorization`. Podręcznik podaje oficjalną poprawkę:
  * dla **Apache** (w pliku konfiguracyjnym lub `.htaccess`):
    ```apache
    <IfModule mod_setenvif>
        SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
    </IfModule>
    ```
  * dla **Nginx** (w sekcji `fastcgi` konfiguracji serwera):
    ```nginx
    fastcgi_pass_header Authorization;
    ```
  * Źródło: [https://developer.wordpress.org/rest-api/frequently-asked-questions/](https://developer.wordpress.org/rest-api/frequently-asked-questions/)
* **Dodatkowa uwaga dla Nginx i parametrów zapytania:** W tym samym FAQ WordPressa opisano problem niedziałających parametrów URL (np. `?page=2`), gdy w konfiguracji Nginx użyto `try_files $uri $uri/ /index.php$args;` zamiast `try_files $uri $uri/ /index.php$is_args$args;`.
  * Źródło: [https://developer.wordpress.org/rest-api/frequently-asked-questions/](https://developer.wordpress.org/rest-api/frequently-asked-questions/)

### D. Wtyczki bezpieczeństwa, firewall hostingu, Cloudflare blokujące REST API lub adresy IP BaseLinkera
* **Oficjalne adresy IP Base.com, `ModSecurity` i `CloudFlare`:** W oficjalnej bazie pomocy Base.com (w sekcji rozwiązywania problemów z komunikacją ze sklepem internetowym) podano konkretne adresy IP serwerów Base.com, które należy zweryfikować pod kątem blokad:
  * `18.194.204.155`
  * `51.77.52.107`
  * `3.74.135.112`
  Pomoc Base.com nakazuje również sprawdzić moduł **ModSecurity** na serwerze oraz ustawienia **whitelist (białej listy) w CloudFlare**.
  * Źródło: [https://base.com/pl-PL/pomoc/magazyn-sklepu/](https://base.com/pl-PL/pomoc/magazyn-sklepu/)
* **Blokowanie ruchu przez Wordfence / Bot Fight Mode / WAF – FORUM:** Artykuły eksperckie i bazy wiedzy hostingów wskazują, że wtyczki bezpieczeństwa (np. Wordfence) oraz funkcja *Bot Fight Mode* / reguły WAF w Cloudflare potrafią uznać cykliczne zapytania z serwerów Base.com do `/wp-json/` za atak lub ruch botów, zwracając błąd `403 Forbidden`, wyzwanie CAPTCHA/JS lub `Connection timed out` (kod HTTP `0`).
  * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
  * Źródło (**FORUM**): [https://pomoc.ebiznes.pl/](https://pomoc.ebiznes.pl/)

### E. Wyłączone REST API, tryb konserwacji, zmiana domeny lub przejście na HTTPS, wygasły certyfikat SSL
* **Wyłączone REST API w WordPressie / WooCommerce:**
  * Pomoc Base.com zaleca w pierwszej kolejności zweryfikować, czy w sklepie prawidłowo włączono REST API.
    * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
  * Dokumentacja WordPress REST API podkreśla, że nie należy całkowicie wyłączać REST API, ale wskazuje, że wtyczki lub filtry korzystające z `rest_authentication_errors` (np. sprawdzające `! is_user_logged_in()`) mogą blokować zewnętrzny dostęp i zwracać błąd `401` (`rest_not_logged_in`).
    * Źródło: [https://developer.wordpress.org/rest-api/frequently-asked-questions/](https://developer.wordpress.org/rest-api/frequently-asked-questions/)
  * Dokumentacja WooCommerce informuje ponadto, że począwszy od wersji **WooCommerce 9.0** z rdzenia usunięto przestarzałe **Legacy REST API** (jeśli integracja z niego korzysta, wymaga osobnej wtyczki w `WooCommerce > Settings > Advanced > Legacy REST API`).
    * Źródło: [https://woocommerce.com/document/woocommerce-rest-api/](https://woocommerce.com/document/woocommerce-rest-api/)
* **Zmiana domeny sklepu (i ryzyko duplikacji integracji przy migracji):**
  * Oficjalna pomoc Base.com instruuje, że w przypadku zmian w sklepie **nie należy tworzyć nowego połączenia**, lecz zaktualizować dotychczasowe ustawienia integracji (wszelkie powiązania bazują na wewnętrznym ID sklepu w Base.com). Jeśli zmieni się nazwa domeny, wystarczy wpisać nową domenę w ustawieniach istniejącego połączenia.
    * Źródło: [https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/](https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/)
  * Utworzenie drugiej integracji po migracji bez wyłączenia starej powoduje konflikty lub dublowanie pobierania (**FORUM**).
    * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
* **Przejście na HTTPS a sposób uwierzytelniania w WooCommerce REST API:**
  * Dokumentacja techniczna WooCommerce REST API rozróżnia dwa protokoły uwierzytelniania zależnie od obsługi SSL: po **HTTPS** używa się **HTTP Basic Auth**, natomiast po nieszyfrowanym **HTTP** wymagane jest uwierzytelnianie **OAuth 1.0a („one-legged”)**.
    * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication)
  * W changelogu oficjalnej wtyczki `baselinker-woo` (wersja 1.0.30) odnotowano poprawki kompatybilności OAuth pomiędzy różnymi wersjami WooCommerce.
    * Źródło: [https://wordpress.org/plugins/baselinker-woo/](https://wordpress.org/plugins/baselinker-woo/)
* **Wygasły certyfikat SSL oraz tryb konserwacji (*Maintenance mode*) – FORUM / NIEPEWNE w źródłach pierwotnych:**
  * W oficjalnej bazie pomocy Base.com dla WooCommerce oraz dokumentacji WooCommerce REST API brak osobnych akapitów opisujących skutki wygasłego certyfikatu SSL lub włączonego trybu konserwacji (**NIEPEWNE** w źródłach pierwotnych).
  * Zgodnie z artykułami wdrożeniowymi (**FORUM**), wygasły/błędny certyfikat SSL lub przekierowania 301/302 między `http` a `https` zrywają połączenie API, natomiast wtyczki trybu konserwacji (*Maintenance mode* / *Coming soon*) potrafią blokować zewnętrzne żądania do `/wp-json/` i zwracać kod `503` lub stronę HTML zamiast odpowiedzi JSON.
    * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)

### F. Usunięty lub zmieniony klucz API, zmiana lub usunięcie użytkownika, który utworzył klucz
* **Unieważnienie (usunięcie) klucza API:** W dokumentacji WooCommerce (`WooCommerce > Settings > Advanced > REST API`) użycie opcji **Revoke Key** natychmiast unieważnia klucz API. W przypadku zmiany lub wygenerowania nowego klucza/tokena, w pomocy Base.com zaleca się podmienić go w ustawieniach istniejącej integracji.
  * Źródło: [https://woocommerce.com/document/woocommerce-rest-api/](https://woocommerce.com/document/woocommerce-rest-api/)
  * Źródło: [https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/](https://base.com/pl-PL/pomoc/integracja-sklepu-po-api/)
* **Usunięcie użytkownika lub zmiana jego uprawnień w WordPressie:** Oficjalna dokumentacja WooCommerce REST API jednoznacznie potwierdza, że każdy klucz API jest ściśle powiązany z konkretnym użytkownikiem WordPressa i jego uprawnieniami (rolą): **jeśli użytkownik WordPressa powiązany z kluczem API zostanie usunięty, klucz API natychmiast przestaje działać, a klucze nie są przenoszone na innych użytkowników**. Analogicznie odebranie temu użytkownikowi uprawnień administratora blokuje dostęp klucza do zasobów wymagających tych uprawnień (skutkując błędem `401 Unauthorized`).
  * Źródło: [https://woocommerce.com/document/woocommerce-rest-api/](https://woocommerce.com/document/woocommerce-rest-api/)
  * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#errors](https://woocommerce.github.io/woocommerce-rest-api-docs/#errors)

### G. Statusy zamówień nieobjęte pobieraniem, zamówienia nieopłacone, szkice (`checkout-draft`)
* **Zamówienia nieopłacone i harmonogram sprawdzania płatności w Base.com:** Pomoc Base.com potwierdza, że **Base.com pobiera zarówno zamówienia opłacone, jak i nieopłacone**. Jeżeli zamówienie nie jest opłacone od razu, Base.com sprawdza status płatności **co 1 godzinę przez kolejne 24 godziny**, a następnie **raz dziennie przez kolejne 14 dni**. W sklepach WooCommerce o tym, czy zamówienie zostanie oznaczone jako opłacone, decydują statusy `processing` i `completed`.
  * Źródło: [https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/](https://base.com/pl-PL/pomoc/pobieranie-zamowien-ze-sklepu/)
* **Tymczasowy status `checkout-draft` (Draft) w WooCommerce Blocks:** Dokumentacja WooCommerce potwierdza, że sklepy korzystające z blokowego koszyka i zamówienia (*Cart and Checkout Blocks* / *Store API*) tworzą tymczasowe rekordy zamówień o statusie `checkout-draft` (*Draft*) w momencie rozpoczęcia procesu zakupowego, zanim klient sfinalizuje i wyśle zamówienie. Są to niedokończone szkice ukryte domyślnie na głównej liście zamówień (widoczne w zakładce *Draft* i czyszczone cyklicznie przez *Action Scheduler*).
  * Źródło: [https://woocommerce.com/document/order-statuses/](https://woocommerce.com/document/order-statuses/)
* **Zachowanie BaseLinkera wobec `checkout-draft` / `pending` – FORUM / NIEPEWNE:** Oficjalna pomoc Base.com nie wymienia z nazwy statusu `checkout-draft` (**NIEPEWNE** w źródłach pierwotnych Base.com), natomiast opracowania integracyjne (**FORUM**) wskazują, że niedokończone zamówienia o statusie `checkout-draft` (porzucone koszyki) nie są pobierane jako złożone zamówienia.
  * Źródło (**FORUM**): [https://sellintegro.pl/](https://sellintegro.pl/)

### H. Limity planu BaseLinkera / liczby zamówień oraz nieopłacony abonament
* **Limit planu darmowego (Freemium):** Zgodnie z oficjalnym cennikiem oraz artykułem pomocy *Abonament* w Base.com, darmowy plan **Freemium** ma limit **do 100 zamówień miesięcznie** oraz **do 1 000 produktów/aktywnych ofert** (Każde zamówienie ze sklepu liczone jest jako 1 zamówienie, niezależnie od liczby produktów w koszyku).
  * Źródło: [https://base.com/pl-PL/pomoc/abonament/](https://base.com/pl-PL/pomoc/abonament/)
  * Źródło: [https://base.com/pl-PL/cennik/](https://base.com/pl-PL/cennik/)
* **Skutek przekroczenia limitu Freemium:** Oficjalna pomoc Base.com podaje, że w przypadku przekroczenia limitu 100 zamówień lub 1 000 ofert na planie Freemium użytkownik zostaje poinformowany o **konieczności przejścia na płatny plan Business** (bez możliwości późniejszego powrotu na plan Freemium). W publicznym artykule `abonament` nie opisano szczegółowo, po jakim dokładnie czasie od komunikatu następuje twarda blokada pobierania zamówień w razie braku akceptacji planu Business (**NIEPEWNE** w źródle pierwotnym).
  * Źródło: [https://base.com/pl-PL/pomoc/abonament/](https://base.com/pl-PL/pomoc/abonament/)
* **Limit zapytań do API Base.com (100 zapytań / minutę) – FORUM:** Przy wykorzystaniu zewnętrznych integratorów odpytujących API Base.com obowiązuje limit 100 zapytań na minutę, po przekroczeniu którego API bywa blokowane na 10 minut (dotyczy to jednak API samego Base.com, a nie standardowego odpytywania WooCommerce przez Base.com).
  * Źródło (**FORUM**): [https://sellintegro.pl/](https://sellintegro.pl/)

---

## 4. Co BaseLinker (Base.com) pokazuje w logach i dzienniku integracji przy błędzie połączenia

* **Logi pobierania zamówień (`Manager zamówień → Ustawienia → Logi zamówień → Logi pobierania zamówień`):** Oficjalna pomoc Base.com wskazuje, że w tym dziale znajduje się lista logów dotycząca każdego pobrania zamówień z zewnętrznych źródeł, zawierająca **datę**, **liczbę pobranych zamówień** oraz **ewentualne błędy**.
  * Źródło: [https://base.com/pl-PL/pomoc/ustawienia-zamowien/](https://base.com/pl-PL/pomoc/ustawienia-zamowien/)
  * Źródło: [https://base.com/pl-PL/pomoc/obsluga-zamowien-ceneo/](https://base.com/pl-PL/pomoc/obsluga-zamowien-ceneo/)
* **Logi synchronizacji i zmiana koloru ikony na żółty z wykrzyknikiem (`Manager zamówień → Ustawienia → Logi zamówień → Logi synchronizacji`):** Zgodnie z dokumentacją Base.com (dotyczącą przekazywania danych między Base.com a sklepem), system okresowo weryfikuje logi i w przypadku powtarzających się błędów wyłącza opcję przekazywania, a **ikonka w tabeli integracji zmienia kolor z zielonej na żółtą**. Kliknięcie **ikonki wykrzyknika** przenosi bezpośrednio do działu `Manager zamówień → Ustawienia → Logi zamówień → Logi synchronizacji`.
  * Źródło: [https://base.com/pl-PL/pomoc/przekazywanie-zamowien-do-sklepu/](https://base.com/pl-PL/pomoc/przekazywanie-zamowien-do-sklepu/)
* **Test połączenia w ustawieniach sklepu i komunikaty błędów HTTP / cURL – FORUM / częściowo NIEPEWNE w publicznej bazie wiedzy:**
  * W zakładce `Integracje → [Sklep] → Ustawienia → Połączenie` znajduje się przycisk testujący komunikację ze sklepem (oraz przycisk `Zapisz`, który weryfikuje dane dostępowe).
    * Źródło: [https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/](https://base.com/pl-PL/pomoc/jak-podlaczyc-sklep-woocommerce-do-base/)
    * Źródło (**FORUM**): [https://pomoc.ebiznes.pl/](https://pomoc.ebiznes.pl/)
  * Dokładna lista wszystkich komunikatów tekstowych zwracanych przez okno testu połączenia WooCommerce w Base.com nie jest opublikowana w oficjalnej bazie wiedzy Base.com (**NIEPEWNE** w źródłach pierwotnych), natomiast bazy wiedzy hostingów i blogi techniczne (**FORUM**) dokumentują, że Base.com wyświetla tam zwrócony kod statusu HTTP (np. `HTTP status code: 0`, `401`, `403`, `404`, `500`), komunikaty bibliotek połączeniowych typu `Connection timed out` (np. po 30000 ms przy blokadzie IP na firewallu/Cloudflare) lub treść błędu zwróconą przez API sklepu (np. `Invalid credentials` / `Consumer key is missing`).
    * Źródło: [https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication)
    * Źródło (**FORUM**): [https://pomoc.ebiznes.pl/](https://pomoc.ebiznes.pl/)
    * Źródło (**FORUM**): [https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/](https://codescriptum.pl/blog/baselinker-nie-pobiera-zamowien-z-woocommerce-naprawa/)
