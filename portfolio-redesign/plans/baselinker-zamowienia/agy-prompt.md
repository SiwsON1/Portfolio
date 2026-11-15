Znajdź w internecie fakty do polskiego poradnika „BaseLinker nie pobiera zamówień z WooCommerce: przyczyny i naprawa”.

Interesuje mnie:
1. Jak dziś działa integracja WooCommerce z BaseLinkerem (base.com): przez klucze REST API WooCommerce, przez plik integracyjny, przez wtyczkę? Jakie uprawnienia klucza (read / read_write) są wymagane? Jakie są kroki podłączenia według oficjalnej pomocy BaseLinkera.
2. Gdzie w BaseLinkerze ustawia się, które zamówienia i z jakimi statusami są pobierane ze sklepu, jak często (częstotliwość pobierania), czy jest data, od której pobiera zamówienia, i czy da się wymusić ręczne pobranie.
3. Typowe przyczyny, że zamówienia nie trafiają do BaseLinkera, potwierdzone w pomocy BaseLinkera, dokumentacji WooCommerce REST API albo dokumentacji WordPressa:
   - błędy 401 / 403 / 404 / 500 przy połączeniu i co oznaczają,
   - permalinki ustawione na „Prosty” a REST API,
   - serwer (Apache, FastCGI) obcina nagłówek Authorization,
   - wtyczki bezpieczeństwa, firewall hostingu, Cloudflare blokujące REST API lub adres IP BaseLinkera,
   - wyłączone REST API, tryb konserwacji, zmiana domeny lub przejście na HTTPS, wygasły certyfikat SSL,
   - usunięty lub zmieniony klucz API, zmiana użytkownika, który utworzył klucz,
   - statusy zamówień nieobjęte pobieraniem, zamówienia nieopłacone,
   - limity planu BaseLinkera / liczby zamówień.
4. Co BaseLinker pokazuje w logach / dzienniku integracji przy błędzie połączenia.

Każdy fakt jako osobny punkt z URL źródła. Tylko źródła pierwotne: pomoc i baza wiedzy base.com / baselinker.com, dokumentacja WooCommerce (woocommerce.com, woocommerce.github.io), developer.wordpress.org. Fora i blogi agencji tylko jako uzupełnienie, oznaczone FORUM. Czego nie potwierdzisz w źródle, oznacz NIEPEWNE. Nie dopisuj własnych porad bez źródła. Odpowiedź po polsku.
