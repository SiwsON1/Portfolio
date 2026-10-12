Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługową „Przyspieszanie stron WordPress” (marcinsiwonia.pl/uslugi/przyspieszanie-stron-wordpress) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-przyspieszanie-stron-wordpress.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel strony firmowej albo sklepu WooCommerce, któremu PageSpeed świeci na czerwono, klienci skarżą się na wolny sklep albo poprzednia „optymalizacja wtyczką” nic nie dała.

FRAZA GŁÓWNA ZOSTAJE: „przyspieszenie strony WordPress” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: optymalizacja szybkości WordPress, przyspieszenie sklepu WooCommerce, Core Web Vitals, PageSpeed Insights, wolna strona WordPress.

## Anty-kanibalizacja
Osobne usługi: opieka nad stroną WordPress (stałe utrzymanie, aktualizacje, kopie), tworzenie stron WordPress (nowa strona), sklepy WooCommerce (nowy sklep). Ta strona trzyma się TYLKO jednorazowego przyspieszenia istniejącej strony; inne odeślij jednym zdaniem.

## Audyt EAV (popraw te punkty)
Encja: jednorazowa usługa przyspieszenia istniejącej strony WordPress lub sklepu WooCommerce. Predykaty: zmierzę, znajdę przyczynę, poprawię, sprawdzę ponownie, pokażę raport.
Obecny tekst jest poprawny, ale ogólny i zbyt asekuracyjny (prawie każde FAQ brzmi „nie podaję wyniku przed pomiarem”). Brakuje dowodów, czyli konkretnych przyczyn spowolnień, które znalazłem i naprawiłem. Popraw:
1. Przypadki z FAKTÓW niżej, nazwane konkretnie: zdjęcia i preload zdjęcia produktu w Kosmotece, nadmiarowe zapytania do bazy na landingu LumiKids, stary cache w serwisie windykacyjnym, element LCP na mojej własnej stronie (wyraźnie: to strona w Next.js, pokazuje metodę szukania elementu LCP, nie jest realizacją WordPress). Liczby tylko te z FAKTÓW.
2. Metoda jako atrybut: najpierw ustalam, KTÓRY element jest LCP i co go opóźnia, zamiast instalować kolejną wtyczkę. Sprawdzam liczbę zapytań do bazy, a nie tylko wagę obrazów.
3. Uczciwość bez powtarzania tej samej asekuracji: zdanie „nie obiecuję wyniku przed pomiarem” najwyżej raz na stronie i raz w FAQ. W pozostałych odpowiedziach konkret: co sprawdzam, od czego zależy.
4. Mniej „mogę”, więcej „robię”, „sprawdzam”.
5. Blok nie może dryfować w poradnik: każda sekcja kończy się zdaniem w kontekście zlecenia. W bloku JEDNA tabela Markdown: przyczyna spowolnienia | jak ją rozpoznaję | co robię (możesz oprzeć na obecnej tabeli, ale dodaj kolumnę „jak rozpoznaję” i przypadki z FAKTÓW tam, gdzie pasują).
6. Kosmoteka, LumiKids i własna strona: każde nazwane najwyżej raz na całej stronie (strona + blok).

## FAKTY (poza fakty-kanoniczne.md)
## Kosmoteka (sklep WooCommerce, LiteSpeed Cache)
- Napisałem własną małą wtyczkę do obrazów: zdjęcia poza pierwszym ekranem ładują się dopiero przy przewijaniu (lazy), dekodują się bez blokowania strony, a zdjęcie produktu na karcie produktu jest wskazane przeglądarce z wyprzedzeniem (preload z wysokim priorytetem), żeby pobierała je równolegle z kodem strony. Cel: lepszy LCP i mniej przesunięć układu (CLS).
- Przy tej wtyczce zdarzył się błąd 500 na części kart produktów (wtyczka sięgała po dane produktu za wcześnie); przyczyna znaleziona w logu, poprawka wgrana tego samego dnia. Możesz użyć jako przykładu, dlaczego każdą zmianę wydajnościową testuję na różnych produktach, nie na jednym.
## LumiKids (sklep WooCommerce)
- Na landingu z listą produktów etykiety kategorii pobierane funkcją omijającą pamięć podręczną WordPressa robiły osobne zapytanie do bazy dla każdej karty, do 60 zapytań na jednej stronie. Zmiana na funkcję korzystającą z cache usunęła ten narzut. Wyłapane w przeglądzie kodu.
- Cache LiteSpeed: po każdej zmianie czyszczę pamięć podręczną i sprawdzam stronę po wyczyszczeniu.
## Serwis windykacyjny (WordPress, NIE podawaj nazwy)
- Wtyczka cache podawała odwiedzającym i Google stare tytuły na 39 z 93 wpisów, choć w panelu były nowe; przycisk czyszczenia cache nic nie usuwał. Od tej pory po każdej rundzie zmian porównuję wersję z cache i bez cache. Wniosek do tekstu: źle ustawiony cache potrafi szkodzić, nie tylko pomagać.
## Moja strona marcinsiwonia.pl (Next.js, NIE WordPress)
- LCP spadł z 4,7 s do 2,0 s. Przyczyna: elementem LCP na każdej podstronie była litera z animacji wejściowej, która wisiała do załadowania skryptów. Do tego krój pisma przycięty z 494 KB do 156 KB, a strona z realizacjami zeszła z 27 MB do 240 KB przez poprawne skalowanie zdjęć. Wniosek: najpierw sprawdzam, który element jest LCP, bo często to nie jest to, co się wydaje.
## Ogólnie
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach, więc wydajność poprawiam także w kodzie, nie tylko ustawieniami wtyczek.

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona, łącznie 3: [opieki nad stroną WordPress](/uslugi/opieka-wordpress), [nowa strona WordPress](/uslugi/tworzenie-stron-wordpress), [Kosmoteka](/projekty/kosmoteka)
Blok, łącznie 2: [Core Web Vitals](/blog/core-web-vitals-2026), [dlaczego odchodzę od Elementora](/blog/elementor-dlaczego-nie-warto)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: przyspieszanie-stron-wordpress ===
METATITLE: (bez zmian, przepisz z pliku)
METADESCRIPTION: … (140-155 znaków, z frazą główną)
H1: (bez zmian, przepisz z pliku)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4, jak obecne bullets)
PROCES:
- Tytuł: … | Treść: … (dokładnie 3 kroków, jak obecnie, tytuły bez numeracji)
FAQ:
- P: … | O: … (dokładnie 12; zachowaj sens obecnych, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: przyspieszanie-stron-wordpress ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Twarde zasady
- Długość: strona 650-900 słów bez FAQ, blok 1300-1700 słów.
- Zero kwot w złotych, zero statystyk rynkowych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon tylko z krótkim wyjaśnieniem, co daje właścicielowi firmy.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- Linki Markdown dokładnie w podanej postaci, każdy najwyżej raz; w INTRO, KORZYŚCIACH i BLOKU (w FAQ bez linków). Nie gub linków.
- Każda sekcja bloku kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”), żeby blok nie dryfował w ogólny poradnik.
