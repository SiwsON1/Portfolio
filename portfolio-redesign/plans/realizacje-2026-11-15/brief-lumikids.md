Użyj skilla Mistrz Blogowania.

Zadanie: napisz case study realizacji „LumiKids” do portfolio freelancera web developera Marcina Siwonia (marcinsiwonia.pl/projekty/lumikids). Pierwsza osoba (ja, Marcin). Czytelnik: właściciel sklepu WooCommerce, który szuka programisty i chce zobaczyć, jak pracuję na prawdziwym sklepie: co znalazłem, co naprawiłem, co zbudowałem. Ma się po lekturze pomyśleć „ten człowiek znajdzie przyczynę, a nie tylko załata objaw”. Fakty: tylko z sekcji FAKTY niżej. Nie dodawaj liczb, dat, funkcji ani wyników, których tam nie ma.

FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak, bez komentarzy):
=== REALIZACJA: lumikids ===
DESCRIPTION: … (1-2 zdania, maks. 280 znaków, konkret: co to za sklep i co zrobiłem; pokazywane dużą czcionką nad tekstem)
BODY:
## [nagłówek 1]
[akapity, każdy w osobnym wierszu, bez list i bez tabel]
## [nagłówek 2]
…
(5 sekcji)

Sekcje (nagłówki zdaniowe po swojemu, krótkie):
1. Punkt wyjścia: sklep z odzieżą dziecięcą sprzedający też na Allegro, audyt na start (165 zadań, najważniejsze braki), stan katalogu.
2. Nowy wygląd sklepu: makiety do akceptacji, potem szablony na żywych danych, start 16.07.2026; wyszukiwarka z podpowiedziami; niedostępne rozmiary widoczne i wyszarzone; co zostało na mechanice motywu (koszyk, kasa).
3. Usterki, których nie widać na pierwszy rzut oka: błędy kasy (spacja i lista krajów, angielskie podziękowanie, opłata za pobranie), warianty bez rozmiaru w koszyku, przegląd z 1.10.2026 (synchronizacja magazynu: 81% ruchu, 503, stany wracające; ja znalazłem i sprawdziłem efekt w logach, poprawkę zrobił autor synchronizacji: z ok. 40 tys. do ok. 2 tys. żądań na dobę), stary klucz API i niepotrzebne wtyczki usunięte.
4. Zamówienia za pobraniem, które same się anulowały: przyczyna w logu serwera, a nie w notatkach zamówienia; własna wtyczka ochronna, test 6/6; od tamtej pory monitor zamówień z 30 dni przy każdej pracy nad sklepem. Pisz w czasie przeszłym, że status cofała zewnętrzna integracja (BaseLinker), która dziś jest odłączona. Nie pisz, że sklep dziś działa przez BaseLinkera.
5. Sprzedaż z Google i opinie: opinie z oznaczeniem zweryfikowanego zakupu i prośba o opinię po 7 dniach z jednorazowym kodem ważnym 60 dni (sklep miał 0 opinii, bo szablon ich nie pokazywał); feed do Google Merchant Center (każdy rozmiar osobno, ok. 560 pozycji); spadek aktywnych produktów 95 → 76 wyjaśniony stanami wariantów, nie feedem; naprawa zdarzeń Meta bez płatnej wtyczki i zakupu raportowanego jako 0 zł; landingi rozmiarowe (18) i strony wiekowe; comiesięczne opisy kategorii z uczciwym wynikiem kontroli (Komplety +43% wyświetleń, Sukienki i Bluzki bez poprawy). Na koniec jedno zdanie: sklep jest pod moją stałą opieką.

Linki wewnętrzne w Markdown, dokładnie w tej postaci, każdy raz, łącznie 4, w treści sekcji: [własne wtyczki WordPress](/uslugi/tworzenie-wtyczek-wordpress), [naprawa sklepu WooCommerce](/uslugi/naprawa-sklepu-woocommerce), [Google Merchant Center](/uslugi/google-merchant-center-woocommerce), [opieka nad sklepem](/uslugi/opieka-wordpress).

Twarde zasady:
- 750-1000 słów w BODY.
- NIE pisz: że sklep sprzedaje codziennie; o porzuconych koszykach; liczb kliknięć z Google; przychodów, liczby zamówień, rabatu w procentach; nazwisk osób trzecich; nazw marek innych niż LumiKids; że wtyczki są produktem na sprzedaż; „optymalizacja pod konwersję” jako wynik.
- Bez em-dashy i półpauz. Polskie słowa, żargon (REST API, feed, wariant, 503) z krótkim wyjaśnieniem.
- Jeden głos: „ja”, o kliencie „właściciel sklepu”. Bez frazesów, aforyzmów, podsumowań i wezwania do kontaktu.
- Nie odwołuj się do briefu ani do plików.

FAKTY:
