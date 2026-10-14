# Jak otworzyć sklep internetowy z częściami samochodowymi i uporządkować katalog produktów?

Jeśli chcesz otworzyć sklep internetowy z częściami samochodowymi, znajdziesz tutaj wskazówki dotyczące wyboru kanałów sprzedaży, dopasowania części do auta, wyszukiwania po numerach katalogowych i przygotowania danych z Allegro oraz BaseLinkera. Wyjaśniam też, jak obsługiwać części używane, które znikają ze sprzedaży, oraz zapytania klientów, którzy nie znaleźli odpowiedniego produktu.

Opieram się między innymi na pracy nad sklepem z nowymi i używanymi częściami do samochodów dostawczych. Przy około 10 tysiącach produktów samo uruchomienie WooCommerce nie było największym wyzwaniem. Trzeba było uporządkować kategorie, rozpoznać samochody ukryte w nazwach produktów i zabezpieczyć nowe przypisania przed synchronizacją. To właśnie od jakości katalogu zależy, czy klient znajdzie część do swojego auta, czy będzie musiał zadzwonić i poprosić Cię o pomoc.

## Allegro czy własny sklep z częściami samochodowymi?

Nie musisz wybierać między Allegro a własnym sklepem. Oba kanały mogą działać równolegle, ale spełniają nieco inne zadania. Na Allegro klient często szuka konkretnego produktu i porównuje dostępne oferty. We własnym sklepie możesz zaprojektować wyszukiwanie wokół samochodu, do którego potrzebuje części.

Ma to znaczenie szczególnie wtedy, gdy sprzedajesz elementy pasujące do kilku modeli lub generacji. Klient, który wpisuje ogólne zapytanie o zderzak, może nie znać dokładnej nazwy produktu. Jeśli najpierw wybierze samochód, łatwiej ograniczyć mu katalog do odpowiedniej grupy.

| Kanał | Co daje | Na co uważać |
| --- | --- | --- |
| Allegro | Dostęp do klientów szukających części na platformie, gotowy proces zakupowy i obsługę ofert | Opisy i kategorie przygotowane pod aukcje nie zawsze nadają się do nawigacji we własnym sklepie |
| Własny sklep WooCommerce | Kontrolę nad katalogiem, doborem części po aucie, kartami produktów i sposobem kontaktu z klientem | Trzeba przygotować wyszukiwarkę, uporządkować dane i zadbać o aktualne stany magazynowe |
| Oba kanały z BaseLinkerem | Możliwość prowadzenia sprzedaży w kilku miejscach przy wspólnej obsłudze zamówień i stanów | Synchronizacja może nadpisywać wybrane pola WooCommerce, w tym kategorie produktów |

W realizowanym przeze mnie sklepie firma sprzedaje również przez OLX, OTOMOTO, Ovoko i eBay. Nie buduję więc katalogu w oderwaniu od istniejącej sprzedaży. Sprawdzam, skąd pochodzą dane i które informacje powinny pozostać wspólne dla wszystkich kanałów.

Jeżeli masz już sklep na innej platformie, znaczenie ma także przeniesienie istniejących produktów i adresów. Ten proces opisuję osobno jako [migracja sklepu do WooCommerce](/uslugi/migracja-sklepu-do-woocommerce).

Przy tworzeniu Twojego sklepu zaczynam od ustalenia roli własnej witryny i sposobu, w jaki będzie współpracować z dotychczasowymi kanałami sprzedaży.

## Dopasowanie części do auta wymaga czegoś więcej niż wyboru marki i modelu

Sam wybór marki i modelu nie wystarcza do prawidłowego doboru części. Znaczenie mają również generacja samochodu, rocznik, wersja silnikowa i modele bliźniacze. Dwa auta o tej samej nazwie mogą wymagać różnych podzespołów, a ten sam element może pasować do samochodów sprzedawanych pod różnymi markami.

Dobrym przykładem są Renault Trafic III, Opel Vivaro B, Fiat Talento i Nissan NV300. To modele bliźniacze, które mają wiele wspólnych części. Nie oznacza to jednak, że wszystkie elementy są wymienne. Zgodność trzeba ustalać dla konkretnego produktu.

W realizowanym sklepie informacje o samochodach często znajdowały się wyłącznie w nazwach aukcji. Przygotowałem regułę, która rozpoznaje z tych nazw generację, rocznik, silnik i powiązane modele. Pozwoliło to poprawić przypisania 887 części.

Projektując dobór części po modelu auta, uwzględniam następujące informacje:

- Marka i model, od których klient rozpoczyna wyszukiwanie.
- Generacja, która odróżnia kolejne wersje tego samego samochodu.
- Rocznik i silnik, jeśli są istotne dla zgodności danego elementu.
- Modele bliźniacze, do których może pasować ta sama część.
- Grupa części, na przykład elementy karoserii, zawieszenia lub silnika.

Ważne jest również to, żebyś mógł poprawić przypisanie ręcznie. Automatyczne rozpoznawanie nazw nie daje pewności przy każdym produkcie. Dlatego przygotowałem panel w WordPressie, w którym ręczna korekta jest zapamiętywana i nie zostaje nadpisana przez automat.

Na karcie produktu można dodatkowo wyświetlić blok „Pasuje do” z listą modeli. Klient widzi wtedy nie tylko nazwę części, ale również samochody, do których została przypisana.

Przy Twoim sklepie najpierw sprawdzę, jakie dane o zgodności już posiadasz, a dopiero potem dobiorę sposób ich rozpoznawania i prezentacji.

## Wyszukiwarka części po numerze OEM powinna uwzględniać oryginały i zamienniki

Klient indywidualny często zaczyna od marki samochodu. Warsztat może szukać inaczej: ma numer części i chce sprawdzić, czy znajduje się ona w Twoim magazynie.

Numer OEM to oznaczenie części nadane przez producenta pojazdu lub podzespołu. W katalogu możesz mieć również numer oryginału oraz numery zamienników, czyli odpowiedników danego elementu. Wyszukiwarka powinna korzystać z tych informacji, a nie ograniczać się do nazwy produktu.

W realizowanym sklepie przygotowałem wyszukiwanie po numerach katalogowych zapisanych w atrybutach produktów. Dzięki temu wyszukiwarka może sprawdzać informacje, które nie muszą występować w tytule aukcji.

Przy projektowaniu takiego rozwiązania zwracam uwagę na kilka kwestii:

- Numery powinny być przechowywane w odpowiednich polach produktu.
- Trzeba rozróżnić numer oryginału od oznaczeń zamienników.
- Warto uwzględnić różnice w zapisie numerów, takie jak spacje czy separatory, o ile nie prowadzi to do niejednoznacznych wyników.
- Wynik powinien prowadzić do konkretnej części i pokazywać informacje o pasujących samochodach.

Samo znalezienie zgodnego numeru nie zawsze kończy dobór. Część może występować w różnych wersjach zależnych od rocznika lub wyposażenia samochodu. Dlatego łączę wyszukiwanie po numerze z informacjami o pojeździe, zamiast traktować numer jako jedyne kryterium.

Nie zakładam również, że każda nazwa lub numer obecny w aukcji jest poprawny. Jeśli produkt ma sprzeczne oznaczenia albo niejednoznaczne przypisania, powinien zostać zweryfikowany.

Przed wdrożeniem wyszukiwarki w Twoim sklepie sprawdzę, gdzie zapisujesz numery części i czy można je wykorzystać bez ręcznego przepisywania całego katalogu.

## Dane z Allegro i BaseLinkera trzeba uporządkować bez utraty synchronizacji

Import produktów nie oznacza jeszcze, że masz gotowy katalog sklepowy. Dane z aukcji bywają przygotowane pod sposób działania konkretnej platformy. Kategorie są rozdrobnione, opisy zawierają kilka rodzajów informacji naraz, a identyczne części mogą znajdować się w różnych miejscach.

W sklepie z częściami do samochodów dostawczych otrzymałem ponad tysiąc kategorii pochodzących z Allegro. Ten sam rodzaj części występował w kilku lokalizacjach. Przykładowo zderzaki znajdowały się w trzech różnych kategoriach.

Uporządkowałem je w 16 grup widocznych w menu. Rodzaj części ustalam na podstawie kategorii klienta, zamiast zgadywać go wyłącznie po nazwie produktu.

Podczas analizy znalazłem również około 170 produktów z prawdopodobnie błędną kategorią w BaseLinkerze. Po ręcznym przeglądzie pozostało 88 przypadków wymagających sprawdzenia przez właściciela. Przekazałem je w arkuszu, ponieważ zmiana kategorii bez potwierdzenia mogłaby wprowadzić kolejne błędy.

Osobnym zadaniem było uporządkowanie opisów przeniesionych z aukcji. Rozdzieliłem je na pola obejmujące przedmiot, pasujące samochody, rocznik, stan i numer magazynowy. Dzięki takiemu podziałowi te informacje można wyświetlać w odpowiednich miejscach karty produktu.

Najważniejsza była jednak ochrona nowego katalogu przed synchronizacją. W tym sklepie BaseLinker nadpisuje kategorie WooCommerce. Gdybym przebudował wyłącznie te kategorie, kolejne aktualizacje mogłyby usunąć efekty pracy.

Dlatego grupy części przygotowałem jako osobną taksonomię, czyli niezależny sposób przypisywania produktów do grup w WordPressie. BaseLinker nadal obsługuje swoje kategorie, a nawigacja sklepu korzysta z oddzielnej struktury.

To pozwala rozdzielić dane potrzebne do obsługi sprzedaży od danych służących klientowi do odnajdywania części. Nie trzeba rezygnować z synchronizacji, aby mieć czytelne menu.

Przy Twoim sklepie sprawdzę przede wszystkim, które pola BaseLinker aktualizuje automatycznie, żeby zaprojektowana nawigacja nie znikała przy następnej synchronizacji.

## Sklep z częściami używanymi musi uwzględniać pojedyncze egzemplarze i ich dostępność

Sklep z częściami używanymi działa nieco inaczej niż sprzedaż nowych produktów. W przypadku części z demontażu online klient kupuje często konkretny egzemplarz, którego stan i wygląd mają znaczenie. Dwie części o tym samym numerze mogą różnić się uszkodzeniami, śladami eksploatacji lub wyposażeniem.

Dlatego karta produktu powinna jasno pokazywać stan elementu, zdjęcia sprzedawanej sztuki i numer magazynowy pozwalający ją odnaleźć. Nie warto ukrywać tych informacji w długim opisie przeniesionym z aukcji.

Istotna jest też jakość i wielkość zdjęć. Klient chce obejrzeć część dokładnie, ale nie powinien pobierać pełnowymiarowego zdjęcia już podczas przeglądania listy produktów.

W realizowanym sklepie przygotowałem obrazy w różnych rozmiarach. Kafelek produktu, który wcześniej wykorzystywał zdjęcie ważące około 1,8 MB, po zmianach korzystał z pliku o wielkości około 64 KB. Większe zdjęcia pozostają przydatne tam, gdzie klient chce zobaczyć szczegóły przedmiotu.

Kolejny problem pojawia się po sprzedaży części. Jeżeli egzemplarz znika z magazynu i jego karta zostaje usunięta, dawny adres może nadal znajdować się w Google, wiadomościach lub zapisanych odnośnikach.

Zamiast pozostawiać błąd 404, czyli informację o nieistniejącej stronie, przygotowałem przekierowanie 301. Jest to stałe przekierowanie ze starego adresu na inny. W tym przypadku prowadzi ono do grupy części odpowiadającej temu samemu modelowi samochodu.

Nie przekierowuję więc klienta przypadkowo na stronę główną. Trafia on do miejsca, w którym może szukać kolejnego egzemplarza właściwego rodzaju części.

Przy przebudowie katalogu warto też zadbać o widoczność produktów w wyszukiwarce i serwisach zakupowych. Kwestie przesyłania ofert do Google opisuję osobno w usłudze [Google Merchant Center i feed produktowy](/uslugi/google-merchant-center-woocommerce).

Jeśli sprzedajesz części z demontażu, przygotuję strukturę produktów i adresów uwzględniającą to, że konkretne egzemplarze regularnie znikają z oferty.

## Klient, który nie znalazł części, powinien móc łatwo o nią zapytać

Nawet dobrze przygotowana wyszukiwarka nie rozwiąże wszystkich przypadków. Klient może nie znać generacji auta, nie odczytać numeru części albo nie wiedzieć, czy znaleziony element będzie pasował do jego wersji silnikowej.

Wtedy ważne jest, żeby nie musiał zaczynać całych poszukiwań od nowa. Możesz udostępnić formularz zapytania o część, kontakt telefoniczny lub wiadomość przez WhatsApp.

W realizowanym sklepie przygotowałem formularz umożliwiający przesłanie zapytania z numerem VIN. VIN to indywidualny numer identyfikacyjny samochodu, który pomaga ustalić jego wersję i wyposażenie. Sam numer nie gwarantuje jednak poprawnego doboru części, dlatego zapytanie nadal wymaga sprawdzenia.

Dodałem również odnośnik do WhatsAppa z przygotowaną treścią wiadomości. Nie jest to czatbot ani automatyczny doradca. Klient otwiera zwykłą rozmowę, a Ty możesz odpowiedzieć na podstawie otrzymanych informacji.

W zależności od rodzaju asortymentu formularz może zbierać:

- Markę, model i rocznik samochodu.
- Numer VIN, jeśli jest potrzebny do sprawdzenia wersji pojazdu.
- Nazwę lub numer poszukiwanej części.
- Zdjęcie części albo jej oznaczeń, jeśli klient je posiada.
- Dane kontaktowe potrzebne do udzielenia odpowiedzi.

Nie każde zapytanie musi wymagać wszystkich tych informacji. Przy prostych częściach wystarczy czasem numer katalogowy, podczas gdy przy elementach zależnych od wyposażenia potrzebna będzie dokładniejsza identyfikacja samochodu.

Ważne jest też miejsce, w którym pokazujesz możliwość kontaktu. Formularz ukryty wyłącznie na stronie kontaktowej może zostać pominięty. Warto udostępnić go również tam, gdzie klient przegląda części do konkretnego modelu lub nie znajduje odpowiedniego produktu.

Takie zapytania mogą być przydatne także przy rozbudowie katalogu. Jeśli klienci regularnie pytają o określony element, możesz sprawdzić, czy problemem jest jego dostępność, nazewnictwo czy przypisanie do samochodu. Nie zastępuje to porządkowania danych, ale daje dodatkowy obraz trudności napotykanych podczas wyszukiwania.

Przy tworzeniu Twojego sklepu ustalę, jakie informacje są Ci rzeczywiście potrzebne do sprawdzenia części, i na tej podstawie przygotuję formularz oraz odpowiednie możliwości kontaktu.
