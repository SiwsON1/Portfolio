# Fakty: BaseLinker nie pobiera zamówień z WooCommerce (sprawdzone 15.11.2026)

## Pomoc Base.com (sprawdzone ręcznie w źródle)
- BaseLinker działa dziś pod nazwą Base.com.
- Podłączenie WooCommerce: Integracje → +Dodaj integrację → WooCommerce. Nazwa wyświetlana do 15 znaków. Adres sklepu: sama domena, bez http:// ani https://. (base.com/pl-PL/pomoc/wiedza/woocommerce/)
- Klucze REST API: WooCommerce → Ustawienia → Zaawansowane → REST API → Dodaj klucz; użytkownik z uprawnieniami administratora; uprawnienia Zapis/Odczyt. Klucze wkleja się w panelu Base i zapisuje. (to samo źródło)
- Krok 4 oficjalnej instrukcji: zainstalować wtyczkę Base z katalogu WordPress, „aby m.in. dane o zamówieniach były prawidłowo przekazywane do systemu”. (to samo źródło)
- Pomoc Base ma osobny akapit „Błąd połączenia z WooCommerce? Sprawdź REST API”: jeśli w źródle strony widać link rest_route zamiast wp-json, trzeba włączyć REST API (przyjazne bezpośrednie odnośniki). (to samo źródło)
- Pobieranie zamówień włącza się w: Integracje → Sklepy internetowe → Ustawienia → Zamówienia (czy pobierać, do jakiego statusu w Base trafiają). (base.com/pl-PL/pomoc/wiedza/pobieranie-zamowien-ze-sklepu/)
- Zamówienia ze sklepu są domyślnie pobierane co 10 minut. Można pobrać ręcznie: Integracje → tabela Ustawienia integracji → kolumna Pobierane dane → przycisk Zamówienia. Ręczne pobranie sprawdza zamówienia z ostatnich 24 godzin. (to samo źródło)
- Po włączeniu pobierania w ciągu godziny pojawiają się zamówienia z ostatnich 24 godzin. (to samo źródło)
- Jeśli sklep pobiera zamówienia z Allegro przez zewnętrzny moduł, Base traktuje je jako zamówienia ze sklepu; taki moduł trzeba wyłączyć, inaczej zamówienia mogą się dublować. (to samo źródło)
- Zamówienia widać w Manager zamówień → Zamówienia, filtr Wyszukiwanie zaawansowane → Źródło zamówienia → Sklep; widoczny numer z Base i numer ze sklepu. (to samo źródło)
- Statusy synchronizują się tylko w kierunku Base.com → sklep (Integracje → Sklepy internetowe → Ustawienia → Statusy zamówień). Kierunek sklep → Base nie jest możliwy. (base.com/pl-PL/pomoc/wiedza/statusy-zamowien/)
- W Manager zamówień → Ustawienia → Logi zamówień są logi pobierania zamówień (data, liczba pobranych, błędy). (pomoc Base, ustawienia zamówień; nie podawać szczegółów spoza tego zdania)

## Dokumentacja WooCommerce / WordPress
- WooCommerce REST API wymaga bezpośrednich odnośników innych niż „Prosty” (Ustawienia → Bezpośrednie odnośniki). Przy „Prostym” adres /wp-json/ nie działa, zostaje tylko ?rest_route=. (woocommerce.com/document/woocommerce-rest-api/, developer.wordpress.org/rest-api/key-concepts/)
- Kody błędów REST API WooCommerce: 401 = błąd uwierzytelnienia lub uprawnień (np. zły klucz), 404 = zasób nie istnieje, 500 = błąd serwera. (woocommerce.github.io/woocommerce-rest-api-docs/#errors)
- Niektóre serwery (CGI/FastCGI) wycinają nagłówek Authorization; objaw w WooCommerce: „Consumer key is missing”. Poprawka dla Apache w .htaccess (SetEnvIf Authorization) i dla Nginx (fastcgi_pass_header Authorization). (developer.wordpress.org/rest-api/frequently-asked-questions/, dokumentacja WooCommerce REST API)
- Wtyczki lub kod blokujące REST API dla niezalogowanych (filtr rest_authentication_errors) dają błąd 401 rest_not_logged_in. (developer.wordpress.org/rest-api/frequently-asked-questions/)
- Klucz API jest przypisany do użytkownika WordPressa: usunięcie tego użytkownika unieważnia klucz; unieważnienie klucza (Revoke) działa od razu. (woocommerce.com/document/woocommerce-rest-api/)
- Od WooCommerce 9.0 stare Legacy REST API nie jest w rdzeniu (osobna wtyczka). (woocommerce.com/document/woocommerce-rest-api/)
- Koszyk blokowy WooCommerce tworzy tymczasowe zamówienia o statusie checkout-draft (szkic), zanim klient złoży zamówienie. (woocommerce.com/document/order-statuses/)

## Ogólne przyczyny po stronie serwera (bez liczb, jako rzeczy do sprawdzenia)
- Wtyczki bezpieczeństwa, firewall hostingu (np. ModSecurity) i reguły Cloudflare mogą blokować zapytania do /wp-json/ jako ruch botów.
- Zmiana domeny, przejście na HTTPS, przeprowadzka na inny serwer, tryb konserwacji: połączenie trzeba sprawdzić po każdej takiej zmianie. Base zaleca aktualizować istniejące połączenie zamiast tworzyć nowe.

## Doświadczenie Marcina (tylko to)
- LumiKids (sklep z odzieżą dziecięcą, WooCommerce + BaseLinker + Allegro): zamówienia za pobraniem anulowały się samoczynnie przez konflikt integracji z BaseLinkerem (cofanie statusu). Przyczyna znaleziona w logach, naprawa małą własną wtyczką ochronną, która blokuje błędną zmianę statusu. Przy każdej pracy nad sklepem przegląd raportu zamówień z 30 dni: anulowania, cofnięte statusy, nieudane płatności.
- Części Jaworscy (sklep WooCommerce, ponad 11 tys. części do busów): przeniesienie sklepu na nowy serwer z ponad tysiącem zamówień, BaseLinker i Allegro działały bez przerwy w sprzedaży.
- Kosmoteka: katalog hurtowni podłączony przez BaseLinker.
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach.
- Opieka nad sklepem z integracjami (BaseLinker, Allegro, Google Merchant): od 749 zł miesięcznie, reakcja do 4 godzin w dni robocze 9-17 (strona /uslugi/opieka-wordpress#cennik).
