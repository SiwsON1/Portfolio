Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę branżową „Tworzenie sklepów internetowych dla marek odzieżowych” (marcinsiwonia.pl/tworzenie-sklepow-internetowych-dla-marek-odziezowych) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-tworzenie-sklepow-internetowych-dla-marek-odziezowych.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel marki odzieżowej, który sprzedaje na Instagramie, Allegro albo w starym sklepie i traci klientów na wyborze rozmiaru, brakach w wariantach i rozjechanych stanach.

FRAZA GŁÓWNA ZOSTAJE: „tworzenie sklepów internetowych dla marek odzieżowych” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: sklep internetowy z odzieżą, sklep dla marki odzieżowej, sklep z ubraniami WooCommerce, tabela rozmiarów, warianty produktu.

## Audyt EAV (popraw te punkty)
Encja: usługa zaprojektowania i wdrożenia sklepu internetowego marki odzieżowej. Predykaty: zaprojektuję, skonfiguruję warianty, połączę z Allegro i BaseLinkerem, przeniosę, wdrożę.
1. Ludzki ton zamiast katalogu cech: każda sekcja mówi, co zyskuje marka.
2. Konkret z realizacji LumiKids (tylko FAKTY niżej), nazwany po imieniu i opisany jako problem, przyczyna, rozwiązanie.
3. Atrybuty z wartościami: warianty rozmiar i kolor ze stanem liczonym dla każdego wariantu, tabela rozmiarów i skład tkanin na karcie produktu, strony kolekcji i strony rozmiarowe, wspólne stany sklepu i Allegro, Lighthouse 90+ na telefonie i LCP poniżej 2,5 s, dane strukturalne produktu, GA4 po zgodzie na cookies, przekierowania 301 przy migracji.
4. Termin 6-8 tygodni zostaje (pricing.time bez zmian). Koszt bez kwot: główne czynniki to liczba wariantów i szablonów, integracje i migracja danych.
5. Blok nie może dryfować w ogólny poradnik e-commerce: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”). Zostaw porównanie platform (WooCommerce, Shopify, Shoper) jako tabelę, bez cen.
6. Bez obietnic „więcej sprzedaży”, „mniej zwrotów o X%”, pozycji w Google.

# FAKTY (poza fakty-kanoniczne.md)
## LumiKids (lumikids.com.pl, WordPress + WooCommerce, 2026)
- Sklep z polską odzieżą dziecięcą i młodzieżową szytą w Turcji, marki własne Sówka i OliLeo. Komplety, bluzy, sukienki, koszule, ubrania na komunię i powrót do szkoły.
- Sprzedaje równolegle przez Allegro, zamówienia przez BaseLinker; wysyłka w 24 godziny od zaksięgowania wpłaty.
- Moja praca: redesign frontu (strona główna z kolekcjami, landingi sezonowe), nowe karty produktów z tabelą rozmiarów i składem tkanin, architektura kategorii pod frazy zakupowe (dziewczynka, chłopczyk, typy ubrań, okazje), opisy kategorii pisane tak, żeby się nie dublowały.
- Większość ruchu z telefonów. Poprawiłem wyszukiwarkę na telefonie, która ucinała pole wpisywania.
- Problem z rozmiarami: produkt pokazywał „dostępny”, choć wszystkie rozmiary miały zero na stanie, bo strona czytała flagę produktu głównego, a nie wariantów. Teraz dostępność liczę z wariantów, niedostępny rozmiar zostaje widoczny, wyszarzony i przekreślony, a komunikat „Dodano do koszyka” pojawia się dopiero, gdy produkt naprawdę trafił do koszyka.
- Strony rozmiarowe: 12 stron „komplety dla dziewczynki” i „spodnie dla dziewczynki” w rozmiarach 134-164, bo Google podpowiada rozmiar przy frazach dziewczęcych (przy chłopięcych nie).
- Integracja z BaseLinkerem cofała status zamówień za pobraniem i WooCommerce je anulował; znalazłem przyczynę w logach i zablokowałem to małą wtyczką.
- Własna wtyczka do zbierania opinii o produktach.

## Linki
Intro strony, łącznie 2: [WooCommerce](/uslugi/sklepy-internetowe-woocommerce), [LumiKids](/projekty/lumikids)
Blok, łącznie 1: [integracja WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== BRANZA: tworzenie-sklepow-internetowych-dla-marek-odziezowych ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie jak w obecnym lead, zdanie „Pracuję z Wrocławia, zdalnie…”)
INTRO:
[2 akapity]
PAINS:
- Tytuł: … | Treść: … (dokładnie 4)
MUSTHAVE:
- Tytuł: … | Treść: … (dokładnie 6)
STACK:
- Etykieta: … | Treść: … (dokładnie 4, jak obecnie)
PRICING: … (jedno-dwa zdania, główne czynniki kosztu, bez kwot)
DELIVERABLES:
- Etykieta: … | Treść: … (dokładnie 5)
PROCES:
- Tytuł: … | Treść: … (dokładnie 5)
NOTFOR:
- … (dokładnie 3 zdania)
FAQ:
- P: … | O: … (dokładnie 14; zachowaj sens obecnych, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: tworzenie-sklepow-internetowych-dla-marek-odziezowych ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Twarde zasady
- Długość: strona 900-1200 słów bez FAQ, blok 1200-1600 słów.
- Zero kwot w złotych, zero statystyk rynkowych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon tylko z krótkim wyjaśnieniem.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- Linki Markdown dokładnie w podanej postaci, każdy najwyżej raz; TYLKO w INTRO i w BLOKU (w PAINS/MUSTHAVE/STACK/DELIVERABLES/FAQ bez linków). Nie gub linków.
- Kroki PROCES bez numeracji w tytułach.
