# Optymalizacja szybkości WordPress. Co spowalnia stronę i jak to naprawiam?

Wolna strona WordPress potrafi wyglądać zupełnie normalnie, dopóki nie otworzysz jej na telefonie albo nie sprawdzisz w PageSpeed Insights. Obrazy pojawiają się z opóźnieniem, przyciski reagują dopiero po chwili, a wynik wydajności świeci na czerwono. Przyczyną nie musi być jednak ciężki motyw czy słaby hosting. Czasem pojedynczy skrypt opóźnia wyświetlenie najważniejszego elementu strony, a czasem niewielki fragment kodu wykonuje niepotrzebne zapytania do bazy danych. Dlatego nie zaczynam od instalowania kolejnej wtyczki do optymalizacji. Najpierw sprawdzam, co rzeczywiście zabiera czas.

Przyspieszenie strony WordPress to dla mnie znalezienie i usunięcie konkretnych przyczyn spowolnienia, a nie zdobycie zielonego wyniku za wszelką cenę. Mierzę wydajność, analizuję kod, obrazy, pamięć podręczną i działanie serwera. Następnie wprowadzam poprawki i ponawiam testy. Patrzę przy tym na stronę tak, jak korzysta z niej Twój klient: od wejścia na stronę główną, przez przeglądanie oferty, aż po wysłanie formularza lub złożenie zamówienia. Po zakończeniu zlecenia pokazuję, jakie problemy znalazłem, co poprawiłem i jak zmieniły się wyniki.

## PageSpeed Insights pokazuje problem, ale nie zawsze jego przyczynę

PageSpeed Insights to dobre miejsce na rozpoczęcie analizy. Pokazuje ocenę wydajności i wskazuje elementy, które mogą spowalniać stronę. Sam wynik nie mówi jednak wszystkiego. Dwie witryny z podobną oceną mogą wymagać zupełnie innych poprawek.

W pierwszej problemem będzie zbyt duże zdjęcie wyświetlane na górze strony. W drugiej przeglądarka pobierze zdjęcie szybko, ale nie pokaże go od razu, bo czeka na wykonanie skryptu. W trzeciej przeglądarka nie dostanie na czas gotowego dokumentu HTML, ponieważ serwer wykonuje zbyt wiele operacji.

Dlatego analizuję poszczególne wskaźniki [Core Web Vitals](/blog/core-web-vitals-2026):

- LCP (Largest Contentful Paint) pokazuje, kiedy zostaje wyświetlony największy widoczny element treści. Może to być zdjęcie, nagłówek albo inny duży element. Za dobry wynik uznaje się wartość do 2,5 sekundy.

- INP (Interaction to Next Paint) mierzy szybkość reakcji strony na działania użytkownika. W praktyce chodzi o to, czy po kliknięciu przycisku, wybraniu opcji lub rozwinięciu menu interfejs reaguje bez odczuwalnego opóźnienia.

- CLS (Cumulative Layout Shift) opisuje nieoczekiwane przesunięcia elementów. Jeśli próbujesz kliknąć przycisk, a nagle nad nim pojawia się zdjęcie i cała zawartość przeskakuje, problem dotyczy właśnie stabilności układu.

Sprawdzam też czas odpowiedzi serwera, kolejność pobierania zasobów oraz skrypty blokujące wyświetlanie treści. Odróżniam dane pochodzące od rzeczywistych użytkowników od wyników testu laboratoryjnego Lighthouse, ponieważ pokazują wydajność z różnych perspektyw.

W ramach zlecenia wykonuję pomiary przed zmianami i wykorzystuję je do ustalenia kolejności napraw, zamiast poprawiać każde ostrzeżenie z raportu bez względu na jego znaczenie.

## Najpierw ustalam, który element odpowiada za LCP

LCP często kojarzy się z dużym zdjęciem na pierwszym ekranie. To rozsądny punkt wyjścia, ale nie zawsze prawdziwa przyczyna problemu. Największym elementem może być tekst, grafika albo część animacji.

Przekonałem się o tym na własnej stronie marcinsiwonia.pl, zbudowanej w Next.js, a nie w WordPressie. LCP wynosił 4,7 sekundy, chociaż problemem nie było duże zdjęcie. Okazało się, że elementem LCP na każdej podstronie była pojedyncza litera animacji wejściowej. Jej wyświetlenie czekało na załadowanie skryptów. Po znalezieniu i usunięciu przyczyny LCP spadł do 2,0 sekundy.

W tej samej witrynie ograniczyłem również rozmiar kroju pisma z 494 KB do 156 KB. Strona z realizacjami, która wcześniej ważyła 27 MB, po poprawnym przeskalowaniu zdjęć pobierała 240 KB. To przykład pracy nad wydajnością poza WordPressem, ale dobrze pokazuje metodę, którą stosuję również przy stronach klientów: najpierw identyfikuję element i wąskie gardło, a dopiero później zmieniam kod.

Podczas analizy sprawdzam, czy opóźnienie wynika z czasu odpowiedzi serwera, późnego rozpoczęcia pobierania zasobu, długości pobierania czy oczekiwania na wyświetlenie elementu. To ważne rozróżnienie. Kompresowanie obrazu nie rozwiąże problemu, jeśli przeglądarka i tak czeka na skrypt, zanim będzie mogła go pokazać.

Przy przyspieszaniu Twojej strony identyfikuję rzeczywisty element LCP na istotnych podstronach i poprawiam mechanizm, który opóźnia jego wyświetlenie.

## Co najczęściej spowalnia WordPress i jak rozpoznaję przyczynę?

Optymalizacja szybkości WordPress wymaga sprawdzenia zarówno części widocznej dla użytkownika, jak i kodu wykonywanego przez serwer. Niektóre problemy widać od razu w narzędziach przeglądarki. Inne ujawniają się dopiero podczas analizy zapytań do bazy danych lub logów serwera.

| Przyczyna spowolnienia | Jak ją rozpoznaję | Co robię |
| --- | --- | --- |
| Zbyt duże zdjęcia | Sprawdzam rozmiary plików i wymiary obrazów względem miejsca ich wyświetlania. | Skaluję zdjęcia, dobieram formaty i ustawiam odpowiednie warianty rozmiarów. |
| Najważniejszy obraz pobierany zbyt późno | Analizuję element LCP i kolejność żądań w przeglądarce. | Ustawiam priorytet pobierania lub preload, czyli wcześniejsze rozpoczęcie pobierania ważnego zasobu. |
| Niepotrzebne zapytania do bazy | Sprawdzam liczbę zapytań, powtarzające się operacje i funkcje pobierające dane. | Poprawiam kod, ograniczam powtarzane zapytania i wykorzystuję pamięć podręczną WordPressa. |
| Skrypty opóźniające wyświetlanie | Analizuję wykonywanie JavaScript i zależności między skryptami. | Zmieniam sposób ich ładowania, ograniczam zbędny kod i testuję działanie funkcji strony. |
| Nadmiarowy CSS | Sprawdzam arkusze stylów i zasoby potrzebne do wyświetlenia pierwszego ekranu. | Ograniczam zbędne style i poprawiam sposób dostarczania tych potrzebnych od razu. |
| Nieprawidłowo działający cache | Porównuję odpowiedź z pamięci podręcznej i bez niej, kontroluję nagłówki oraz rzeczywistą treść. | Poprawiam konfigurację i sposób czyszczenia cache, a następnie weryfikuję wyniki. |
| Wolna odpowiedź serwera | Sprawdzam czas oczekiwania na HTML oraz operacje wykonywane przed wysłaniem odpowiedzi. | Szukam kosztownych operacji w WordPressie i wskazuję ograniczenia hostingu, jeśli to on stanowi problem. |
| Zewnętrzne skrypty i integracje | Sprawdzam żądania do zewnętrznych usług oraz ich wpływ na ładowanie strony. | Ograniczam niepotrzebne zasoby i dostosowuję sposób ładowania tam, gdzie nie zaburza to działania integracji. |

W praktyce kilka przyczyn może występować jednocześnie. Duże zdjęcie, niewłaściwa kolejność skryptów i wolna odpowiedź serwera potrafią wpływać na ten sam wskaźnik, ale wymagają osobnych działań.

Nie usuwam też kodu wyłącznie dlatego, że narzędzie oznaczyło go jako nieużywany. Skrypt może być potrzebny dopiero po kliknięciu przycisku, otwarciu formularza lub wybraniu wariantu produktu.

W ramach zlecenia sprawdzam zależności między problemami i wdrażam poprawki w takiej kolejności, żeby rzeczywiście skracały czas ładowania bez ograniczania funkcjonalności strony.

## Przyspieszenie sklepu WooCommerce wymaga sprawdzenia bazy danych

W sklepie WooCommerce samo zmniejszenie zdjęć produktów często nie wystarcza. Sklep pobiera informacje o produktach, cenach, wariantach, kategoriach i stanie koszyka. Każda dodatkowa operacja po stronie serwera może wydłużyć przygotowanie strony.

Szczególnie uważnie sprawdzam listy produktów. Jedna karta produktu może wyglądać niewinnie, ale jeśli zawiera funkcję wykonującą osobne zapytanie do bazy, jej koszt powtarza się dla każdego elementu listy.

Taki problem nie musi pojawić się w raporcie PageSpeed jako wskazówka dotycząca konkretnej funkcji PHP. Widać go dopiero przy sprawdzaniu kodu i liczby wykonywanych zapytań. Dlatego nie ograniczam audytu do zasobów pobieranych przez przeglądarkę.

Weryfikuję też działanie pamięci podręcznej WordPressa, szczególnie przy danych wielokrotnie wykorzystywanych na jednej stronie. Czasem wystarczy zmienić sposób pobierania informacji, żeby usunąć powtarzaną pracę serwera.

Osobną kwestią jest cache całych stron. W WooCommerce nie wolno bezmyślnie traktować wszystkich adresów tak samo. Koszyk, finalizacja zamówienia i informacje zależne od użytkownika wymagają odpowiedniej konfiguracji. Przyspieszenie strony nie może prowadzić do wyświetlania niewłaściwych danych.

Sprawdzam również, czy optymalizacja skryptów nie blokuje wyboru wariantów, aktualizacji koszyka lub działania płatności. Wydajność ma sens tylko wtedy, gdy klient nadal może bez problemu kupić produkt.

Przy zleceniu przyspieszenia sklepu sprawdzam zarówno kod generujący katalog produktów, jak i działanie całej ścieżki zakupowej po każdej istotnej zmianie.

## Cache pomaga tylko wtedy, gdy odwiedzający widzą aktualną stronę

Pamięć podręczna, czyli cache, pozwala ponownie wykorzystać wcześniej przygotowaną zawartość zamiast generować ją od początku przy każdym wejściu. Dobrze skonfigurowany mechanizm ogranicza pracę serwera i skraca oczekiwanie na odpowiedź.

Problem pojawia się wtedy, gdy przechowywana zawartość nie jest prawidłowo odświeżana.

W jednym z serwisów WordPress z branży windykacyjnej wykryłem sytuację, w której panel administracyjny pokazywał nowe tytuły wpisów, natomiast odwiedzający i Google nadal otrzymywali stare. Problem dotyczył 39 z 93 wpisów. Co ważne, przycisk czyszczenia cache nie usuwał nieaktualnych wersji.

To dobry przykład, dlaczego sama informacja, że wtyczka cache jest aktywna, nie wystarcza do oceny jej działania. Trzeba jeszcze sprawdzić rzeczywistą odpowiedź serwera.

Rozróżniam pamięć podręczną całej strony, cache obiektowy przechowujący wyniki operacji WordPressa oraz cache przeglądarki. Każdy z tych mechanizmów działa inaczej i może wymagać osobnej kontroli.

Po wdrożeniu poprawek porównuję wersję strony pobieraną z cache z wersją bez niego. Sprawdzam, czy zmiany treści i kodu faktycznie docierają do użytkownika. Samo naciśnięcie przycisku „Wyczyść pamięć podręczną” nie jest dla mnie potwierdzeniem poprawnego działania.

W ramach przyspieszania konfiguruję i weryfikuję cache tak, aby ograniczał zbędną pracę serwera, ale nie powodował wyświetlania nieaktualnych treści.

## Dlaczego kreator stron i dodatkowe wtyczki mogą utrudniać optymalizację?

WordPress pozwala budować strony na wiele sposobów. Gotowe motywy, kreatory wizualne i rozbudowane wtyczki upraszczają dodawanie funkcji, ale mogą też zwiększać ilość kodu pobieranego przez przeglądarkę.

Kreator może ładować style i skrypty potrzebne do obsługi komponentów, których dana podstrona w ogóle nie wykorzystuje. Dodatkowe wtyczki również mogą dodawać własne zasoby lub operacje wykonywane na serwerze.

Nie oznacza to, że każdy kreator jest z definicji wolny albo że trzeba od razu przebudować całą witrynę. W istniejącej stronie najpierw sprawdzam, które zasoby faktycznie wpływają na wydajność.

Przy stronach z Elementorem analizuję między innymi liczbę ładowanych plików, strukturę elementów, działanie animacji i skryptów. Szerzej opisuję swoje podejście w tekście [dlaczego odchodzę od Elementora](/blog/elementor-dlaczego-nie-warto).

Przy optymalizacji nie wyłączam jednak funkcji na ślepo. Skrypt uznany za zbędny na stronie głównej może być niezbędny w formularzu kontaktowym albo w innym szablonie.

Sprawdzam także, czy używane wtyczki nie wykonują tych samych operacji. Dwa mechanizmy optymalizacji JavaScript albo nakładające się ustawienia cache potrafią utrudnić ustalenie rzeczywistej przyczyny problemu.

Przy zleceniu oceniam obecny motyw i zestaw wtyczek, ograniczam zbędne obciążenia tam, gdzie jest to bezpieczne, i wyraźnie wskazuję, jeśli dalsza poprawa wymagałaby szerszej przebudowy.

## Po optymalizacji sprawdzam działanie strony, nie tylko wynik Lighthouse

Poprawa wyniku w narzędziu testowym nie oznacza automatycznie, że prace są zakończone. Strona musi nadal poprawnie wyświetlać treści, obsługiwać formularze i działać na różnych urządzeniach.

Szczególnie ważne jest testowanie zmian w kodzie. Przy jednej z własnych wtyczek optymalizujących obrazy pojawił się błąd 500 na części kart produktów. Wtyczka próbowała uzyskać dane produktu, zanim były dostępne. Znalazłem przyczynę w logu serwera i wgrałem poprawkę tego samego dnia.

Ten przypadek pokazuje, dlaczego test pojedynczej karty produktu nie wystarcza. Różne produkty mogą korzystać z innych wariantów danych, układów i funkcji.

Po wdrożeniu sprawdzam więc nie tylko stronę główną, ale również istotne typy podstron. Kontroluję zachowanie obrazów, skryptów, formularzy i elementów interaktywnych. W sklepie sprawdzam również koszyk oraz finalizację zamówienia.

Następnie wykonuję ponowne pomiary i zestawiam je ze stanem początkowym. Oddzielam zmiany wynikające z moich poprawek od ograniczeń związanych z serwerem czy usługami zewnętrznymi. Nie traktuję pojedynczego wyniku Lighthouse jako pełnego obrazu wydajności.

W raporcie opisuję wykonane prace, wyniki przed i po oraz problemy, które nadal wpływają na szybkość. Dzięki temu nie musisz zgadywać, czy zmieniły się wyłącznie ustawienia wtyczki, czy rzeczywisty sposób działania strony.

Jeśli zlecasz mi przyspieszenie strony WordPress, kończę pracę dopiero po sprawdzeniu wdrożonych poprawek, najważniejszych funkcji serwisu i wyników ponownego pomiaru.