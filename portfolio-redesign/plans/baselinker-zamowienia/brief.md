Użyj skilla Mistrz Blogowania.

Zadanie: napisz od zera wpis blogowy „BaseLinker nie pobiera zamówień z WooCommerce” na blogu freelancera web developera Marcina Siwonia (marcinsiwonia.pl/blog/baselinker-nie-pobiera-zamowien). Pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel sklepu WooCommerce, któremu właśnie przestały spływać zamówienia do BaseLinkera (Base.com). Jest zdenerwowany, bo stoi wysyłka. Chce w 2 minuty wiedzieć, co sprawdzić, i mieć wyjście „niech ktoś to naprawi”. Fakty: tylko z załączonego pliku FAKTY poniżej. Nie dodawaj innych liczb, ścieżek w panelu, adresów IP, cen ani limitów planów.

Fraza główna: „BaseLinker nie pobiera zamówień”. Wspierające: baselinker nie pobiera zamówień z woocommerce, baselinker woocommerce integracja, base.com woocommerce zamówienia, baselinker błąd połączenia woocommerce, woocommerce rest api baselinker.

Kąt: rozwiązanie od pierwszego akapitu. LEAD mówi wprost: najpierw ręczne pobranie zamówień i logi w Base, potem klucz REST API i bezpośrednie odnośniki, potem blokady na serwerze. Dalej szybka ścieżka diagnozy po objawie, a na końcu dwie drogi: zrobisz to sam według listy albo zlecasz mi naprawę (sprawdzam logi, połączenie, serwer i w razie potrzeby piszę małą wtyczkę ochronną, jak w LumiKids). Ja nie jestem z Base.com, jestem programistą, który naprawia takie integracje.

FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak, bez komentarzy):
=== WPIS: baselinker-nie-pobiera-zamowien ===
KEYWORD: BaseLinker nie pobiera zamówień
TITLE: … (maks. 60 znaków, bez pauz)
METATITLE: … (maks. 60 znaków, zaczyna się od „BaseLinker nie pobiera zamówień”)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania, pierwsze zdanie = co zrobić najpierw)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; listy „- …”; dokładnie jedna tabela Markdown z nagłówkiem]
## [nagłówek sekcji 2]
… (6-8 sekcji)
FAQ:
- P: … | O: … (6 pytań, odpowiedź 2-4 zdania)

Tematy sekcji (nagłówki zdaniowe po swojemu, część jako pytania czytelnika):
1. Co sprawdzić w pierwszych 5 minutach: ręczne pobranie zamówień (ścieżka z FAKTÓW, sprawdza 24 godziny), logi pobierania zamówień, czy pobieranie jest włączone w ustawieniach integracji. Lista kroków.
2. Diagnoza po objawie: TABELA „Co widzisz | Najczęstsza przyczyna | Co zrobić” z wierszami: błąd 401 lub „Consumer key is missing”; błąd 404 albo w kodzie strony rest_route zamiast wp-json; błąd 500; brak błędu, ale zamówień nie ma; zamówienia przychodzą podwójnie; zamówienia przestały spływać po przeprowadzce, zmianie domeny lub włączeniu HTTPS.
3. Klucz REST API i użytkownik: Zapis/Odczyt, administrator, klucz znika razem z usuniętym użytkownikiem, jak wygenerować nowy i podmienić w istniejącym połączeniu (nie tworzyć nowej integracji).
4. Bezpośrednie odnośniki, wp-json i wtyczka Base: dlaczego „Prosty” psuje połączenie, po co oficjalna wtyczka Base (krok 4 instrukcji).
5. Serwer blokuje Base: nagłówek Authorization (Apache, Nginx, krótko, bez wklejania długiego kodu), wtyczki bezpieczeństwa, firewall hostingu, Cloudflare, tryb konserwacji. Uczciwie: to najczęściej wymaga dostępu do serwera.
6. Statusy i zamówienia, które „znikają”: statusy idą tylko z Base do sklepu, moduł Allegro w sklepie dubluje zamówienia, szkice checkout-draft to nie są złożone zamówienia. Przykład z LumiKids: zamówienia za pobraniem anulowały się przez konflikt integracji; naprawiłem to własną wtyczką ochronną.
7. Po przeprowadzce lub zmianie domeny: co sprawdzić (adres w połączeniu, klucz, HTTPS). Przykład: przy przenosinach sklepu Części Jaworscy na nowy serwer BaseLinker i Allegro działały bez przerwy w sprzedaży, bo połączenie sprawdziłem przed przełączeniem.
8. Kiedy przestać szukać samemu i zlecić naprawę: jeśli po krokach 1-4 dalej nic, potrzebny jest dostęp do serwera i logów. Co robię przy takim zleceniu (lista 4-5 punktów). Bez cen w tej sekcji, jedno zdanie z linkiem do stałej opieki dla sklepów z integracjami.

Linki wewnętrzne w Markdown, dokładnie w tej postaci, każdy najwyżej raz, łącznie 4: [integracja WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), [opiekę nad sklepem z integracjami](/uslugi/opieka-wordpress), [BaseLinker: co to jest](/blog/baselinker-co-to-jest), [naprawa sklepu WooCommerce](/uslugi/naprawa-sklepu-woocommerce).

Twarde zasady:
- 1500-2100 słów bez FAQ.
- Zero liczb, ścieżek panelu, nazw przycisków i kodów błędów spoza FAKTÓW.
- Kod konfiguracyjny najwyżej jedna krótka linijka w tekście, bez bloków kodu.
- Bez em-dashy i półpauz. Polskie słowa, żargon (REST API, klucz API, wp-json, firewall, WAF) z krótkim wyjaśnieniem.
- Jeden głos: „ja” i „Ty”. Bez frazesów, aforyzmów, „Podsumowując”. W leadzie nie pisz, skąd pracuję. Nie pisz, że jestem z Base.com.
- Nie odwołuj się do briefu ani do plików.

FAKTY:
