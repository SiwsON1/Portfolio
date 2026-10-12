# Strona w Next.js: kiedy warto ją wybrać i co zyskuje Twoja firma

Strona w Next.js ma sens wtedy, gdy potrzebujesz czegoś więcej niż miejsca na ofertę i dane kontaktowe. Może to być szybki serwis z setkami podstron, konfigurator liczący wycenę na żywo albo aplikacja, w której klient loguje się, zapisuje dane i korzysta z własnego panelu. Nie musisz od razu budować rozbudowanego systemu. Mogę zacząć od strony firmowej, a kolejne funkcje dodawać wtedy, gdy będą potrzebne.

Next.js wykorzystuję zarówno w projektach klientów, jak i we własnych serwisach, w tym na marcinsiwonia.pl. Znam też WordPressa, dlatego nie zakładam z góry, że zmiana technologii zawsze będzie dobrym rozwiązaniem. Jeśli obecna strona zwolniła pod ciężarem wtyczek albo próbujesz zbudować funkcję, do której WordPress nie został zaprojektowany, sprawdzę, czy Next.js rozwiąże ten problem. Poniżej pokazuję, jak przekłada się to na działanie strony, edycję treści, widoczność w Google i koszty rozwoju.

## Co firma zyskuje na stronie zbudowanej w Next.js

Klienta odwiedzającego Twoją stronę nie interesuje, w jakiej technologii została napisana. Chce szybko znaleźć ofertę, sprawdzić szczegóły i wykonać konkretną czynność. Jeśli musi czekać na załadowanie kolejnych elementów albo formularz nie działa poprawnie na telefonie, nazwa użytego frameworka niczego nie zmienia.

Next.js daje mi kontrolę nad tym, jakie treści przygotowuję wcześniej, jakie pobieram z serwera i ile kodu musi uruchomić przeglądarka użytkownika. Dzięki temu mogę dopasować sposób działania strony do jej rzeczywistych zadań.

Dla firmy najważniejsze są cztery korzyści:

- Szybkość działania. Mogę ograniczyć niepotrzebne skrypty i przygotować treści tak, aby użytkownik nie czekał na elementy, których w danym momencie nie potrzebuje.
- Widoczność w wyszukiwarce. Przygotowuję strony z czytelnymi adresami, metadanymi, nagłówkami i danymi strukturalnymi. Google może odczytać ważne treści bez konieczności wykonywania całej logiki w przeglądarce.
- Własne funkcje. Kalkulator, logowanie, wyszukiwarka oparta na bazie danych czy integracja z innym systemem mogą działać w ramach jednej aplikacji.
- Możliwość rozbudowy. Możesz zacząć od kilku podstron, a później dodać katalog produktów, lokalizacje, panel klienta lub kolejne usługi.

Dobrym przykładem jest mój produkt Kantorymapa. Obejmuje 1900 kantorów w 140 miastach, a kursy NBP są aktualizowane codziennie. Strony miast powstają na podstawie danych, zamiast być przygotowywane ręcznie. Cały serwis ładuje się poniżej sekundy.

Nie oznacza to, że każda witryna Next.js osiągnie taki wynik. Dużo zależy od zdjęć, zewnętrznych usług i funkcji. Dlatego przy wdrożeniu sprawdzam Lighthouse na telefonie, celując w wynik 90+ oraz LCP poniżej 2,5 sekundy, czyli czas wyświetlenia największego widocznego elementu strony.

## SSR, SSG i ISR określają, kiedy powstaje gotowa podstrona

Skróty SSR, SSG i ISR opisują różne sposoby przygotowywania treści strony. Nie musisz ich znać, żeby zlecić projekt, ale warto rozumieć, dlaczego sposób wyświetlania danych wpływa na szybkość działania i aktualność informacji.

Wyobraź sobie serwis zawierający setki lokalizacji. Adresy, opisy i podstawowe informacje nie zmieniają się co chwilę. Nie ma więc powodu, żeby serwer tworzył każdą taką podstronę od początku przy każdym wejściu użytkownika. Z drugiej strony panel klienta powinien wyświetlać informacje dotyczące konkretnego konta, a nie wspólną wersję przygotowaną wcześniej.

W Next.js mogę rozwiązać te sytuacje na trzy sposoby.

SSG, czyli generowanie statyczne, polega na przygotowaniu gotowej podstrony podczas budowania serwisu. Kiedy użytkownik ją otwiera, otrzymuje wcześniej wygenerowaną treść. Sprawdza się to przy ofertach, lokalizacjach i informacjach, które nie wymagają ciągłego odświeżania.

SSR, czyli renderowanie po stronie serwera, przygotowuje odpowiedź w momencie wejścia użytkownika. Stosuję takie podejście tam, gdzie treść zależy od aktualnych informacji, uprawnień albo danych konkretnej osoby.

ISR, czyli przyrostowe odświeżanie stron, pozwala korzystać z wcześniej przygotowanej wersji i aktualizować ją według ustalonych zasad. Nie trzeba za każdym razem przebudowywać całego serwisu, żeby odświeżyć wybrane informacje.

Takie rozwiązania przydają się również przy programmatic SEO, czyli automatycznym tworzeniu wartościowych podstron z uporządkowanych danych.

W projekcie Ceny Notarialne wykorzystuję Next.js do prezentowania cen transakcyjnych z Rejestru Cen Nieruchomości, map MapLibre oraz tysięcy podstron lokalizacji. Każda lokalizacja może mieć własny adres i treści powiązane z danymi, bez ręcznego budowania kolejnych stron.

Przy Twoim wdrożeniu dobieram sposób generowania osobno do rodzaju treści, częstotliwości ich zmian i potrzeb użytkowników.

## WordPress czy Next.js: kiedy który wybrać

Jeśli Twoja strona na WordPressie działa wolno, pierwszym odruchem może być chęć przepisania jej w innej technologii. Nie zawsze jest to potrzebne. Przyczyną problemów mogą być ciężki motyw, niepotrzebne wtyczki, źle przygotowane zdjęcia albo konfiguracja hostingu.

WordPress jest gotowym systemem do publikowania i edytowania treści. Next.js daje mi narzędzia do zbudowania strony lub aplikacji według indywidualnych wymagań. To różne punkty wyjścia, dlatego wybór powinien zależeć od tego, co chcesz osiągnąć.

| Potrzeba firmy | WordPress | Next.js |
| --- | --- | --- |
| Prosta strona firmowa | Dobry wybór, szczególnie gdy sam edytujesz treści | Możliwy, ale nie zawsze uzasadniony |
| Edycja tekstów i zdjęć | Gotowy panel administracyjny | Wymaga podłączenia CMS lub przygotowania panelu |
| Konfigurator i kalkulator | Możliwy przez wtyczki lub własny kod | Pozwala zbudować logikę pod konkretny proces |
| Logowanie i panel klienta | Dostępne rozwiązania, zależnie od wymagań | Możliwość przygotowania własnych kont i uprawnień |
| Setki stron z danych | Możliwe po odpowiednim przygotowaniu | Duża kontrola nad automatycznym generowaniem podstron |
| Szybkość działania | Zależy od motywu, wtyczek i serwera | Duża kontrola nad kodem i dostarczaniem treści |
| Utrzymanie i rozwój | Aktualizacje systemu, motywu i wtyczek | Utrzymanie aplikacji, zależności i potrzebnych usług |

Jeśli potrzebujesz zwykłej wizytówki, strony usługowej i wygodnej edycji tekstów, mogę polecić WordPress. Nie ma sensu budować indywidualnej aplikacji, jeśli nie wykorzystasz jej możliwości.

Next.js zaczyna mieć większy sens, gdy standardowe funkcje przestają wystarczać. Przykładowo Twoi klienci mają samodzielnie konfigurować produkt, sprawdzać indywidualną cenę, logować się albo korzystać z informacji pobieranych z kilku systemów.

Istnieje też rozwiązanie pośrednie. Możesz zachować WordPressa jako panel redakcyjny, a publiczną stronę zbudować w Next.js. To jednak osobny model wdrożenia, który rozpatruję wtedy, gdy zachowanie dotychczasowego sposobu edycji treści jest ważnym wymaganiem.

Przed rozpoczęciem zlecenia sprawdzam więc obecny serwis, potrzebne funkcje i plany rozwoju, a dopiero potem proponuję technologię.

## Treści w Next.js możesz edytować bez zaglądania do kodu

Jedna z częstszych obaw przy zmianie WordPressa na Next.js dotyczy edycji treści. Skoro nie ma domyślnego panelu WordPressa, czy każda zmiana numeru telefonu, opisu usługi albo zdjęcia będzie wymagała kontaktu z programistą?

Nie musi tak być. Do Next.js mogę podłączyć CMS, czyli system zarządzania treścią. Najczęściej rozważam Sanity lub Strapi. Przygotowuję w nim odpowiednie pola i uprawnienia, abyś mógł zmieniać wybrane informacje bez modyfikowania kodu.

Przykładowo w panelu możesz zarządzać:

- opisami usług, nagłówkami, zdjęciami i treściami podstron,
- wpisami poradnikowymi, realizacjami oraz uporządkowanymi danymi wykorzystywanymi przez serwis.

Wygląd strony pozostaje przygotowany przeze mnie, a CMS dostarcza treści do odpowiednich miejsc. Dzięki temu edycja opisu nie wymaga przebudowy całego układu.

Ważne jest jednak rozróżnienie między treścią a funkcją. Zmiana opisu produktu może odbywać się w panelu. Dodanie nowego sposobu obliczania ceny, integracji z systemem płatności albo kolejnego poziomu uprawnień wymaga już zmian programistycznych.

Jeżeli Twój zespół dobrze zna WordPressa, mogę też wykorzystać go wyłącznie do zarządzania treścią. Publiczna część strony działa wtedy w Next.js, ale redaktor nadal pracuje w znanym środowisku.

Przy projektowaniu ustalam z Tobą, które elementy powinny być edytowalne, a po wdrożeniu przeprowadzam szkolenie online z obsługi panelu.

## Migrację do Next.js trzeba zaplanować także pod kątem Google

Przeniesienie strony z WordPressa do Next.js to nie tylko przygotowanie nowego wyglądu i skopiowanie tekstów. Jeśli obecny serwis ma podstrony widoczne w Google, linki prowadzące z innych witryn lub regularnie odwiedzane artykuły, trzeba zadbać o ich dalszą dostępność.

Zaczynam od sprawdzenia istniejących adresów. Jeśli adres podstrony nie musi się zmienić, zwykle warto go zachować. Gdy nowa struktura wymaga innego URL-a, przygotowuję przekierowanie 301 ze starego adresu do właściwego odpowiednika.

Nie przekierowuję automatycznie wszystkich usuniętych adresów na stronę główną. Użytkownik, który szuka konkretnej usługi lub poradnika, powinien trafić na odpowiadającą mu treść.

Podczas migracji uwzględniam też tytuły i opisy meta, strukturę nagłówków, dane strukturalne oraz mapę strony. Po uruchomieniu sprawdzam Google Search Console, aby kontrolować indeksowanie i wychwycić problemy z dostępnością nowych adresów.

Jeżeli wdrażam Google Analytics 4, konfiguruję go tak, aby zbieranie danych wymagających zgody rozpoczynało się dopiero po jej udzieleniu w mechanizmie cookies.

Osobną kwestią jest moment przełączenia strony. Przy zmianie ustawień DNS może wystąpić krótka niedostępność, dlatego planuję publikację tak, aby ograniczyć przerwę w działaniu serwisu.

Cały proces, od sprawdzenia starych adresów po kontrolę po wdrożeniu, opisuję szerzej w poradniku [migracja WordPressa na Next.js](/blog/migracja-wordpress-na-nextjs).

Nie mogę obiecać, że po zmianie technologii wszystkie pozycje w Google pozostaną identyczne. Mogę natomiast przygotować migrację tak, aby zachować ważne adresy, treści i techniczne elementy potrzebne wyszukiwarce.

## Strona firmowa i aplikacja mogą używać tej samej technologii, ale mają inne zadania

Strona firmowa przede wszystkim dostarcza informacji. Pokazuje ofertę, realizacje, zakres usług i dane kontaktowe. Nawet jeśli zawiera tysiące podstron, użytkownik głównie przegląda przygotowane treści.

Aplikacja internetowa pozwala mu wykonywać dodatkowe działania. Może obliczyć cenę, zapisać informacje, zalogować się do konta, opłacić usługę albo zarządzać swoimi danymi.

Przykładem takiego połączenia jest Galabau Darius, projekt zrealizowany przeze mnie w 2026 roku dla firmy z Niemiec. Serwis zawiera galerię realizacji i konfigurator wyceny ogrodzeń, który przelicza cenę na żywo. Firma korzysta również z panelu administracyjnego zabezpieczonego logowaniem Clerk.

Do pracy z danymi wykorzystałem Prisma, a aplikację wdrożyłem na Vercel. Przygotowałem też dane strukturalne LocalBusiness oraz strony Impressum i Datenschutz wymagane w kontekście niemieckiej witryny firmowej.

Podobne mechanizmy mogę zastosować w innych procesach biznesowych. Przy logowaniu korzystam z Clerk lub NextAuth, dane mogę przechowywać w PostgreSQL z Prisma albo Drizzle, a płatności obsłużyć przez Stripe. Konkretne narzędzia wybieram dopiero po ustaleniu funkcji.

To właśnie liczba funkcji z własną logiką, a nie liczba podstron, ma zwykle największy wpływ na zakres i koszt takiej realizacji. Serwis z tysiącami stron generowanych z danych może wymagać mniej pracy nad logiką użytkownika niż niewielka aplikacja z logowaniem, płatnościami i panelem administracyjnym.

Typową aplikację lub pierwszą wersję produktu, czyli MVP, realizuję zwykle w ciągu 6-12 tygodni. Termin zależy od funkcji, integracji i stopnia przygotowania danych.

Przy Twoim projekcie najpierw określę, co użytkownik musi móc zrobić w pierwszej wersji. Dopiero na tej podstawie zaprojektuję aplikację Next.js, dobiorę bazę danych, sposób logowania i hosting oraz przygotuję zakres prac z harmonogramem.