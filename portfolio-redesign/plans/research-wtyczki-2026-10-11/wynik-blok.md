# Tworzenie wtyczek WordPress: kiedy warto zamówić własne rozwiązanie

W tym poradniku znajdziesz wskazówki, które pomogą Ci zdecydować, czy potrzebujesz gotowej wtyczki, własnego rozwiązania, czy zmiany w motywie WordPressa. Dowiesz się też, jakie funkcje można zautomatyzować, jak zadbać o bezpieczeństwo i co przygotować, żeby programista WordPress mógł trafnie ocenić zakres prac.

Nie każda nietypowa potrzeba oznacza konieczność pisania kodu od podstaw. Czasem wystarczy zmiana ustawień, rozszerzenie istniejącego dodatku albo poprawienie integracji. Własna wtyczka WordPress ma największy sens wtedy, gdy rozwiązuje konkretny problem i daje się utrzymywać bez komplikowania pozostałych elementów strony.

## Gotowa wtyczka, własna wtyczka czy zmiana w motywie: jak wybrać

Zanim zamówisz dedykowaną wtyczkę WordPress, warto ustalić, gdzie naprawdę leży problem. Jeśli potrzebujesz standardowej funkcji, którą sprawdzony dodatek już oferuje, pisanie jej od nowa może nie mieć uzasadnienia. Z drugiej strony instalowanie kolejnego narzędzia tylko po to, żeby uzupełnić brakującą opcję, nie zawsze jest najlepszym rozwiązaniem.

| Sytuacja | Co wybrać | Dlaczego |
| Potrzebujesz popularnej funkcji, która ma sprawdzony gotowy dodatek | Gotowa wtyczka | Zwykle pozwala szybciej uruchomić funkcję bez pisania nowego kodu |
| Firma potrzebuje własnych zasad obsługi zamówień lub automatyzacji | Wtyczka na zamówienie | Można dopasować działanie do konkretnego procesu |
| Zmiana dotyczy wyłącznie wyglądu elementu strony | Motyw lub jego ustawienia | Nie ma potrzeby budowania osobnego mechanizmu biznesowego |
| Kilka dodatków powoduje konflikty albo dubluje funkcje | Analiza istniejących rozwiązań | Czasem wystarczy poprawić konfigurację lub zastąpić część narzędzi |
| Funkcja wymaga zupełnie innej architektury aplikacji | Inna technologia, np. Next.js | WordPress nie zawsze jest najlepszym miejscem do realizacji całego procesu |

Najważniejsze pytanie brzmi: czy własna wtyczka rozwiąże problem w prostszy i łatwiejszy do utrzymania sposób? Tak oceniam projekty przed rozpoczęciem prac. Nie proponuję pisania nowego rozwiązania, jeśli istnieje rozsądniejsza droga.

## Jakie funkcje można zrobić jako wtyczkę na zamówienie

Własna wtyczka może obsługiwać zarówno niewielkie udogodnienia, jak i procesy łączące kilka elementów sklepu. Zakres zależy od tego, jak działa Twoja strona, jakie dane są dostępne i z czym trzeba ją połączyć.

Przykładowe zastosowania to:

- **Prośby o opinię po zakupie.** Sklep może wysyłać wiadomość po określonym czasie od realizacji zamówienia, pilnować, żeby nie wysyłać jej wielokrotnie, i zapisywać informację o wysyłce.
- **Ochrona zamówień przed błędami integracji.** Wtyczka może kontrolować określone zmiany statusów, jeśli zewnętrzny system nadpisuje prawidłowe dane. W LumiKids zabezpieczyłem w ten sposób zamówienia za pobraniem przed błędnym cofnięciem statusu.
- **Import produktów z hurtowni.** Można przygotować mechanizm pobierania cen, stanów magazynowych, opisów i zdjęć, z uwzględnieniem zasad aktualizacji produktów. Warunkiem jest dostęp do odpowiednich danych.
- **Kalkulator dopasowany do oferty.** Jeśli cena zależy od wymiarów, materiałów lub parametrów zamówienia, własna funkcja może obliczać ją według ustalonych reguł.
- **Rezerwacje terminów.** Firma może potrzebować formularza, który sprawdza dostępność terminów i zapisuje rezerwacje zgodnie z jej zasadami.
- **Eksport do systemu księgowego.** Wtyczka może przygotowywać lub przesyłać dane zamówień w formacie wymaganym przez zewnętrzny system, o ile pozwalają na to jego możliwości.
- **Własne pola w panelu.** Można dodać pola dla produktów, zamówień lub innych danych, których brakuje w standardowym panelu WordPressa.
- **Dodatkowe elementy prezentacji produktów.** W Kosmotece stworzyłem wtyczkę, która wybiera zdjęcie produktu z przezroczystym tłem, jeśli takie istnieje, i udostępnia obrazy w rozmiarach dopasowanych do miejsca wyświetlania.

To przykłady możliwych zastosowań, a nie deklaracja, że każda funkcja jest już gotowym modułem. Przed rozpoczęciem sprawdzam wymagania, dostępne interfejsy i ograniczenia techniczne.

## Dlaczego nie dopisuję funkcji do pliku functions.php motywu

Plik functions.php służy między innymi do dodawania funkcji związanych z motywem. Można w nim umieścić dodatkowy kod, ale nie jest to najlepsze miejsce na każdą automatyzację czy logikę biznesową.

Problem pojawia się na przykład wtedy, gdy zmieniasz motyw. Kod zapisany wyłącznie w jego plikach może przestać działać, a przy aktualizacji motywu własne zmiany mogą zostać nadpisane, jeśli nie zostały prawidłowo odseparowane.

Dlatego funkcje biznesowe najczęściej umieszczam w osobnej wtyczce. Można ją niezależnie rozwijać, testować i wyłączyć bez usuwania pozostałych zmian na stronie. W niektórych przypadkach korzystam z mu-pluginu, czyli wtyczki ładowanej automatycznie, której nie da się przypadkowo wyłączyć z poziomu standardowej listy w panelu.

Do rozszerzania WordPressa wykorzystuję też haki, czyli punkty, w których można podłączyć własne działanie do istniejącego mechanizmu. Dzięki nim mogę reagować na określone zdarzenia bez bezpośredniego przerabiania kodu WordPressa lub WooCommerce.

## Co może się zepsuć po aktualizacji WordPressa lub WooCommerce

Własna wtyczka nie jest odporna na wszystkie przyszłe zmiany. Aktualizacja może zmienić sposób działania wykorzystywanej funkcji, strukturę danych lub zasady komunikacji z innym dodatkiem. Problem może też pojawić się po aktualizacji zewnętrznej integracji, nawet jeśli sam WordPress pozostaje bez zmian.

Ograniczam to ryzyko, korzystając z udostępnionych mechanizmów WordPressa i WooCommerce zamiast przerabiać ich kod. Testuję również scenariusze, w których coś przebiega inaczej niż zwykle, na przykład gdy brakuje danych albo system zewnętrzny zwraca błąd.

Przed aktualizacją ważniejszego elementu sklepu warto sprawdzić działanie strony na kopii. Po wdrożeniu mogę też zapewnić dalszą opiekę w miesięcznym abonamencie. Standardowo obejmuję wykonane rozwiązanie 60-dniową gwarancją i bezpłatnymi poprawkami, a późniejsza współpraca jest opcjonalna.

Jeśli strona działa wolno, warto sprawdzić również jej ogólną wydajność. Sama wymiana wtyczki nie zawsze rozwiąże problem, dlatego czasem potrzebna jest szersza analiza, obejmująca także [przyspieszenie strony WordPress](/uslugi/przyspieszanie-stron-wordpress).

## Jak zadbać o bezpieczeństwo własnej wtyczki

Bezpieczeństwo nie polega wyłącznie na tym, żeby wtyczka działała zgodnie z założeniami. Trzeba też kontrolować, kto może korzystać z jej funkcji, jakie dane przyjmuje i co robi w przypadku nieprawidłowego żądania.

W praktyce zwracam uwagę na kilka elementów:

- **Uprawnienia użytkowników.** Funkcje administracyjne powinny być dostępne wyłącznie dla osób, które mają odpowiednie uprawnienia.
- **Zabezpieczenie formularzy.** Mechanizmy weryfikacji żądań pomagają ograniczać ryzyko niepożądanych działań wykonywanych z formularzy.
- **Dane wyświetlane na stronie.** Odpowiednie przygotowanie danych przed wyświetleniem ogranicza ryzyko wstrzyknięcia niebezpiecznej treści.
- **Klucze API.** Dostępy do zewnętrznych systemów powinny mieć tylko te uprawnienia, których rzeczywiście potrzebuje integracja.

Jeśli wtyczka przetwarza dane klientów, trzeba również ustalić, jakie informacje są niezbędne, gdzie są przechowywane i kto ma do nich dostęp. Zakres zabezpieczeń powinien odpowiadać funkcji wtyczki i rodzajowi przetwarzanych danych.

## Jak opisać potrzebną wtyczkę, żeby wycena była trafna

Nie musisz znać WordPressa ani umieć opisywać rozwiązania językiem programisty. Najważniejsze, żebyś potrafił wyjaśnić, co obecnie dzieje się na stronie i jak ma wyglądać praca po wprowadzeniu zmiany.

Przygotuj odpowiedzi na cztery pytania:

- **Co ma się dziać?** Opisz konkretną czynność, na przykład wysłanie wiadomości po zmianie statusu zamówienia.
- **Kto będzie korzystał z funkcji?** Klient sklepu, pracownik, administrator czy zewnętrzny system?
- **Skąd pochodzą dane?** Z formularza, zamówienia WooCommerce, pliku od hurtowni czy API innej aplikacji?
- **Co ma się stać, gdy wystąpi błąd?** Czy system powinien ponowić próbę, wyświetlić komunikat, zapisać informację w logu czy powiadomić administratora?

Jeśli masz już stronę z podobną funkcją, pokaż mi ją. Jeżeli problem dotyczy sklepu, przydatny będzie też opis aktualnego procesu, na przykład kolejności zmiany statusów zamówienia. Nie musisz od razu znać rozwiązania. To moja część pracy.

Na podstawie tych informacji mogę ocenić, czy wystarczy konfiguracja, czy potrzebna jest dedykowana wtyczka WordPress, i określić zakres dalszych prac. Jeśli prowadzisz sklep, który wymaga dodatkowych funkcji sprzedażowych, zobacz również, jak podchodzę do budowy [sklepów WooCommerce](/uslugi/sklepy-internetowe-woocommerce).
