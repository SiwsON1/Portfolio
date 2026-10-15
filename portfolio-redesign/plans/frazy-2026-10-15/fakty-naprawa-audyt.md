# Fakty: naprawa i audyt sklepu WooCommerce / strony WordPress (15.10.2026)

Wszystko poniżej to realne zdarzenia z prac Marcina. Nazwę realizacji podawać tylko tam, gdzie stoi „(można nazwać)”. Reszta anonimowo („w jednym ze sklepów”, „w serwisie firmowym”).

## Naprawy (dowody)
- LumiKids (można nazwać; sklep z odzieżą dziecięcą, sprzedaje też na Allegro): zamówienia za pobraniem anulowały się same. Klientka dostawała mail o anulowaniu, choć nic nie anulowała. Przyczyna znaleziona w logu dostępu serwera: kilka minut po złożeniu zamówienia BaseLinker zmieniał przez API status na „oczekujące na płatność”, a WooCommerce po 60 minutach anulował je jako nieopłacone. Notatki zamówienia pokazywały tylko „system”, sprawcę wskazał dopiero log. Naprawa: mała wtyczka ochronna (blokuje cofnięcie statusu zamówienia za pobraniem), test na 6 scenariuszach, plus wskazówka, co zmienić w ustawieniach statusów w BaseLinkerze. Od tej pory przy każdej pracy w sklepie sprawdzam raport zamówień z 30 dni.
- LumiKids (można nazwać), kasa sklepu, trzy błędy zgłoszone na nagraniu ekranu:
  1. Spacja w polu adresu otwierała listę krajów i przewijała stronę na górę. Przyczyna: przy każdym przeliczeniu kasy (kod pocztowy, zmiana dostawy) formularz się przerysowywał i kursor wypadał z pola, w którym klient pisał. Naprawa: skrypt zapamiętuje pole i pozycję kursora i oddaje je po przeliczeniu.
  2. Po zakupie podziękowanie wyświetlało się po angielsku. Tekst nie pochodził z WooCommerce, tylko z motywu sklepu, który nadpisywał polskie tłumaczenie. Naprawa filtrem o wyższym priorytecie.
  3. Opłata za pobranie liczyła się źle (różna kwota zależnie od wybranego kuriera zamiast jednej ustalonej). Naprawa: jedna stała kwota dostawy z pobraniem, dopłata liczona automatycznie.
- Kosmoteka (można nazwać; sklep z teleskopami): po zmianie we własnej wtyczce obsługującej zdjęcia większość kart produktów zwracała błąd 500 (błąd serwera). Przyczyna znaleziona w dzienniku błędów, poprawka wgrana tego samego dnia.
- Zasada pracy przy naprawie: najpierw kopia plików i bazy, diagnoza w logach (dziennik błędów PHP, log dostępu serwera, notatki zamówień), poprawka najlepiej najpierw na kopii, potem test konkretnej funkcji (np. złożenie zamówienia testowego), na koniec krótki opis: co było przyczyną, co zmieniłem, gdzie jest kopia.
- Typowe objawy, z którymi przychodzą klienci (ogólnie, bez obietnic czasu): biały ekran albo „błąd krytyczny” po aktualizacji, konflikt wtyczek, kasa nie przechodzi, płatność wraca z błędem, zamówienia zmieniają status same, maile do klientów nie dochodzą, stany magazynowe się rozjeżdżają, wersja mobilna się rozsypuje, formularz nie wysyła wiadomości.
- Poprawki i modyfikacje: drobne zmiany w motywie i WooCommerce (pola w kasie, teksty, tłumaczenia, wygląd karty produktu, filtry) robię w motywie potomnym albo w małej wtyczce, żeby aktualizacja motywu ich nie skasowała.
- Większe funkcje: osobno (tworzenie wtyczek). Stała opieka: osobno (abonament). Wolna strona: osobno (przyspieszanie).
- Napisałem ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach (fakt z istniejącej strony opieki).

## Audyt (dowody)
- LumiKids (można nazwać), przegląd ukrytych usterek po sprawie z pobraniami, tylko odczyt, bez zmian w sklepie:
  - zewnętrzny program synchronizujący magazyn co godzinę nadpisywał stany wariantów, cofając sprzedaż (sprzedana sztuka wracała na stan; ryzyko sprzedania ostatniej sztuki dwa razy);
  - ta sama synchronizacja robiła ok. 81% wszystkich żądań do serwera i w tych samych sekundach klienci dostawali błąd 503 (serwer przeciążony), także na stronie głównej;
  - inne zadanie co 5 minut pytało sklep o zamówienia i zawsze dostawało odmowę (bez nazwy programu w zapytaniu);
  - stary, nieużywany klucz API z pełnymi uprawnieniami, nieaktywne wtyczki na dysku (m.in. menedżer plików), zaległe aktualizacje.
  - Czyste wyszło: zadania cykliczne bez zaległości, brak ujemnych stanów i produktów bez ceny, maile sklepu wysyłane.
- W jednym ze sklepów w bazie leżało ponad 300 tys. pozostałości po niepołączonej wtyczce (ok. 107 MB w tabeli ustawień). Nie spowalniały każdej strony, ale rozdmuchiwały kopie zapasowe i eksport bazy.
- W serwisie firmowym przejętym po poprzednim wykonawcy (anonimowo): otwarta rejestracja użytkowników, trzy konta utworzone przez automatyczne skanery, publicznie widoczny login administratora, niezabezpieczony punkt zdalnego dostępu. Włamania nie było (fakt z istniejącej strony opieki).
- W LumiKids przegląd śledzenia: dwie wtyczki do Facebooka naraz (oficjalna Meta for WooCommerce i Pixel Manager). Pixel działał w przeglądarce, ale zdarzenia z serwera (Conversions API) nie szły wcale. Przyczyna: Pixel Manager z wpisanym własnym pixelem po cichu wyłączał całą oficjalną wtyczkę Meta, razem z wysyłką z serwera. Naprawa: wyczyszczenie jednego pola w Pixel Managerze; płatna wersja (którą klient planował kupić) okazała się niepotrzebna. Zdarzenia z obu źródeł mają wspólny identyfikator, więc nie liczą się podwójnie.
- Narzędzia, które mam: własny skaner dostępności na marcinsiwonia.pl/sprawdz-dostepnosc (WCAG), pomiar szybkości (Lighthouse, Core Web Vitals), Search Console.
- Wynik audytu: lista znalezisk z priorytetem (pilne / do zaplanowania / kosmetyka), przy każdym: co znalazłem, czym to grozi, jak naprawić i ile to mniej więcej pracy. Naprawy może zrobić klient, jego wykonawca albo ja.
- Zakres audytu sklepu: bezpieczeństwo i dostępy (konta, role, klucze API, wtyczki spoza repozytorium), aktualizacje i zgodność wersji PHP, kopie zapasowe, logi błędów, kasa i płatności (zamówienie testowe na telefonie), maile transakcyjne, integracje (BaseLinker, Allegro, hurtownie, magazyn), stany i statusy zamówień, szybkość, SEO techniczne (indeksowanie, przekierowania, dane strukturalne), śledzenie (GA4 po zgodzie na cookies, pixel), dostępność.
- Uczciwie: audyt nie obiecuje pozycji w Google ani wzrostu sprzedaży; nie jestem prawnikiem (RODO, regulamin) ani księgowym.

## O autorze
- Patrz fakty-kanoniczne.md. Odpowiedź z pierwszą oceną w 24 godziny robocze. Kwot nie podawać.
