=== REALIZACJA: lumikids ===
DESCRIPTION: LumiKids to sklep WooCommerce z odzieżą dziecięcą i młodzieżową, który przebudowałem wizualnie i rozwinąłem technicznie. Naprawiłem błędy zamówień i stanów magazynowych, stworzyłem własne rozwiązania oraz przygotowałem sklep do sprzedaży z Google.

BODY:

## Zacząłem od audytu sklepu i jego zaplecza

LumiKids to sklep internetowy z odzieżą dziecięcą i młodzieżową szytą w Turcji. W ofercie ma między innymi komplety, bluzy, sukienki i ubrania na specjalne okazje. Właściciel sklepu prowadzi sprzedaż zarówno przez WooCommerce, jak i Allegro. Moim zadaniem było uporządkowanie istniejącego sklepu, przebudowanie jego wyglądu i rozwiązanie problemów technicznych.

Pracę rozpocząłem 1 maja 2026 roku od audytu, w którym zebrałem 165 zadań, w tym 20 krytycznych i 49 o wysokim priorytecie. Sklep miał wtedy 47 produktów, 18 kategorii, 14 stron i jeden wpis blogowy.

Znalazłem braki w podstawowej konfiguracji SEO: nie było wtyczki SEO, mapy witryny, opisów meta ani prawidłowych adresów kanonicznych kategorii. GA4 nie było podłączone, na ważnych podstronach brakowało nagłówków H1, a kategorie takie jak Bluzy, Komplety i Spodnie konkurowały ze sobą o podobne frazy. Brakowało też mechanizmu cache, który pozwala ograniczyć wielokrotne wykonywanie tych samych operacji.

Audyt dał mi punkt odniesienia. Mogłem oddzielić problemy z wyglądem od błędów w danych, konfiguracji i działaniu WooCommerce.

## Nowy wygląd zbudowałem na działającym sklepie

Przebudowę rozpocząłem od statycznych makiet strony głównej, kategorii, produktu i wpisu blogowego. Najpierw przedstawiłem je właścicielowi sklepu do akceptacji, a następnie przeniosłem projekty do szablonów PHP w motywie potomnym rey-child, korzystających z rzeczywistych danych produktów. Nowy wygląd uruchomiłem 16 lipca 2026 roku.

Przygotowałem stronę główną z rotatorem kolekcji, podstrony informacyjne, blog oraz karty produktów zawierające tabele rozmiarów i skład tkanin. Koszyk, kasa i konto klienta pozostały na mechanice istniejącego motywu. Zmieniłem ich otoczenie wizualne, ale nie zastępowałem działających mechanizmów zakupowych tylko po to, żeby uzyskać jednolity wygląd.

W nagłówku zbudowałem wyszukiwarkę z podpowiedziami. Wykorzystałem Store API, czyli interfejs WooCommerce udostępniający dane sklepu, oraz własny mechanizm ustalania trafności wyników w przeglądarce. Poprawiłem również wyszukiwarkę mobilną, w której pole wpisywania było wcześniej ucinane.

Osobno zająłem się wyborem rozmiarów. Dostępność sprawdzam na poziomie wariantu, czyli konkretnego rozmiaru produktu, a nie ogólnej informacji o produkcie. Wyprzedane rozmiary pozostają widoczne, ale są wyszarzone i nie można ich wybrać.

## Naprawiałem przyczyny błędów, nie tylko ich objawy

Po uruchomieniu nowego wyglądu zajmowałem się usterkami ujawniającymi się podczas korzystania ze sklepu. W kasie naciśnięcie spacji podczas wpisywania adresu potrafiło otworzyć listę krajów. Przyczyną było przejmowanie aktywnego pola podczas odświeżania formularza. Poprawiłem również angielski komunikat podziękowania po zakupie i nieprawidłowo naliczaną opłatę za pobranie.

Inny problem dotyczył produktów z rozmiarami. Klient wybierał konkretny rozmiar, ale do koszyka trafiał wariant z pustym atrybutem. Sprawdziłem dane przez endpoint get_variation, czyli punkt interfejsu pozwalający pobrać szczegóły wariantu. Okazało się, że po wcześniejszej konwersji atrybutów w katalogu pozostały nieprawidłowe warianty.

Przegląd techniczny z 1 października ujawnił problem o znacznie większym zasięgu. Zewnętrzna synchronizacja magazynu wykonywała 36,5 tysiąca z 45 tysięcy żądań do serwera dziennie, czyli odpowiadała za 81% ruchu. W tych samych sekundach klienci otrzymywali błędy 503, oznaczające czasową niedostępność serwera. Synchronizacja dodatkowo nadpisywała stany wariantów, przez co sprzedane sztuki ponownie pojawiały się jako dostępne.

Zidentyfikowałem źródło problemu i przekazałem ustalenia. Poprawkę synchronizacji wykonał jej autor. Następnie sprawdziłem efekt w logach serwera: liczba żądań spadła z około 40 tysięcy do około 2 tysięcy na dobę.

Podczas przeglądu wykryłem także stary, nieużywany klucz API z pełnymi uprawnieniami oraz zbędne wtyczki pozostawione na serwerze. Usunąłem niepotrzebne elementy, ograniczając dostęp do sklepu przez nieużywane mechanizmy.

## Zamówienia za pobraniem anulowały się przez zewnętrzną integrację

Jedna z usterek dotyczyła zamówień za pobraniem, które samoczynnie zmieniały status, a następnie były anulowane po 60 minutach. Notatki zamówienia wskazywały jedynie na działanie systemu, więc nie pozwalały ustalić rzeczywistego sprawcy zmiany.

Przyczynę znalazłem dopiero w logu dostępu serwera. Zewnętrzna integracja BaseLinker wysyłała żądania REST API, czyli polecenia do interfejsu sklepu, które cofały status zamówień. WooCommerce traktował je później jako nieopłacone i uruchamiał automatyczne anulowanie. Integracja jest obecnie odłączona.

Przygotowałem własną wtyczkę ochronną, która blokuje cofanie statusu pobrania przez REST API oraz automatyczne anulowanie takich zamówień. Mechanizm zapisuje również odpowiednią notatkę. Przeprowadziłem 6 testów, wszystkie zakończone powodzeniem.

To przykład, dlaczego tworzę własne wtyczki WordPress, kiedy standardowa konfiguracja nie rozwiązuje konkretnego problemu. Przy naprawie sklepu WooCommerce potrzebowałem zabezpieczenia działającego dokładnie w miejscu, w którym dochodziło do błędnej zmiany statusu.

Od tamtej pory na początku każdej pracy nad sklepem uruchamiam monitor zamówień, który sprawdza cofnięcia statusów, automatyczne anulowania i nieudane płatności z ostatnich 30 dni.

## Przygotowałem sklep do sprzedaży z Google i zbierania opinii

Sklep początkowo nie miał żadnych opinii, ponieważ własny szablon produktu nie wyświetlał ani recenzji, ani formularza ich dodawania. Wdrożyłem system opinii o produktach i sklepie z moderacją oraz oznaczeniem zweryfikowanego zakupu. Dodałem też automatyczną prośbę o opinię wysyłaną 7 dni po zrealizowaniu zamówienia. Klient otrzymuje jednorazowy kod rabatowy ważny 60 dni.

Przygotowałem również feed do Google Merchant Center, czyli plik przekazujący Google informacje o produktach. Każdy rozmiar występuje jako osobna pozycja, a cały feed obejmuje około 560 pozycji. Uzupełniłem informacje o rozmiarach, kolorach, płci, grupach wiekowych i kategoriach produktów.

Kiedy liczba aktywnych produktów w reklamach Google spadła z 95 do 76, sprawdziłem przyczynę zamiast zakładać, że zawiódł feed. Problem wynikał ze stanów magazynowych wariantów, które zmieniła zewnętrzna synchronizacja, a nie z błędu generowania pliku.

Naprawiłem również przesyłanie zdarzeń do Meta. Jedno ustawienie darmowej wtyczki wyłączało zarówno piksel, jak i zdarzenia serwerowe. Przywróciłem ich działanie bez kupowania płatnej wersji. Osobno poprawiłem zdarzenie zakupu raportowane jako 0 zł, ponieważ uruchamiało się przed dodaniem pozycji do zamówienia. Poprawkę potwierdziłem na zamówieniu testowym.

W obszarze SEO przygotowałem 18 landingów rozmiarowych oraz strony dopasowane do wieku dziecka. Dla landingów stworzyłem filtrowanie uwzględniające rzeczywistą dostępność wariantów, ponieważ standardowe rozwiązanie pokazywało również wyprzedane produkty.

Co miesiąc aktualizuję opisy kategorii i sprawdzam ich widoczność. Kontrola wykazała wzrost wyświetleń kategorii Komplety o 43%, ale Sukienki i Bluzki nie zanotowały poprawy. Nie przypisuję więc całemu procesowi skuteczności, której dane nie potwierdzają.

LumiKids pozostaje pod moją stałą opieką nad sklepem.