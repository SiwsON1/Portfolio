# Integracja WooCommerce z BaseLinker: jak połączyć sprzedaż, magazyny i hurtownie bez błędów?

Integracja WooCommerce z BaseLinker ma uporządkować obsługę sprzedaży, a nie dokładać Ci kolejny panel, w którym trzeba ręcznie poprawiać zamówienia. Jeśli sprzedajesz jednocześnie w sklepie i na Allegro, korzystasz z hurtowni albo masz osobny program magazynowy, najważniejsze jest ustalenie, które narzędzie odpowiada za konkretne dane. Bez tego nawet poprawnie nawiązane połączenie może powodować nieprawidłowe stany, nadpisywać ceny lub zmieniać statusy zamówień.

Przy wdrożeniu zaczynam od sprawdzenia obecnego sposobu sprzedaży. Ustalam, skąd pochodzą produkty, gdzie obsługujesz zamówienia, który magazyn jest nadrzędny i jakie informacje powinny wracać do WooCommerce. Dopiero później konfiguruję integrację i testuję przepływ danych. Jeśli dopiero poznajesz system, przeczytaj, [czym jest BaseLinker](/blog/baselinker-co-to-jest). Tutaj skupiam się na tym, co konkretnie robię przy podłączaniu sklepu i naprawianiu istniejących połączeń.

## Jak integracja WooCommerce z BaseLinker zmienia obsługę zamówień?

Gdy prowadzisz sprzedaż w WooCommerce i na Allegro, zamówienia powstają w dwóch różnych miejscach. Bez połączenia musisz osobno sprawdzać oba kanały, przenosić potrzebne informacje i pilnować aktualizacji stanów magazynowych. BaseLinker pozwala zebrać zamówienia w jednym panelu, z którego prowadzisz dalszą obsługę sprzedaży.

Połączenie WooCommerce z BaseLinkerem działa przez REST API, czyli mechanizm pozwalający obu systemom wymieniać dane. W panelu sklepu tworzę klucz z odpowiednimi uprawnieniami, a następnie wykorzystuję go do autoryzacji połączenia. BaseLinker pobiera zamówienia ze sklepu i, zgodnie z konfiguracją, przekazuje do WooCommerce aktualizacje stanów, cen oraz statusów.

Istotne jest rozróżnienie pobierania zamówień od zmieniania ich statusów. Zamówienie trafia z WooCommerce do BaseLinkera, ale późniejsze zmiany statusu w BaseLinkerze wracają do sklepu. Żeby działało to prawidłowo, trzeba powiązać statusy obu systemów w ustawieniach integracji.

Przy takiej konfiguracji sprawdzam przede wszystkim:

- które zamówienia mają trafiać z WooCommerce do BaseLinkera,
- jakie statusy w obu systemach odpowiadają sobie nawzajem,
- skąd mają pochodzić informacje o dostępności produktów,
- które czynności związane z wysyłką i dokumentami mają być obsługiwane w połączonych narzędziach.

Nie zakładam, że każdy proces trzeba automatyzować. Jeśli określony etap obsługujesz ręcznie z konkretnego powodu, uwzględniam to podczas konfiguracji. Przy integracji ustawiam przepływ zamówień zgodnie z rzeczywistym sposobem pracy Twojej firmy, zamiast dostosowywać obsługę sklepu do przypadkowych ustawień systemu.

## Jak podłączam hurtownię, żeby do WooCommerce nie trafił cały katalog dostawcy?

Jednym z częstszych problemów przy podłączaniu hurtowni jest wybór źródła produktów dla sklepu. Hurtownia udostępnia własny katalog, ale nie oznacza to, że chcesz sprzedawać wszystkie znajdujące się w nim towary. Dlatego nie podłączam WooCommerce bezpośrednio do pełnego magazynu dostawcy. Stosuję model z trzema warstwami:

- Magazyn hurtowni. Zawiera pełny katalog dostawcy. Służy jako źródło danych, które można przeglądać i wykorzystywać do aktualizacji powiązanych produktów.
- Magazyn BaseLinker. Kopiuję do niego wybrane produkty i tworzę powiązania magazynowe z odpowiednimi pozycjami hurtowni. Dzięki temu stany i ceny aktualizują się na podstawie danych dostawcy.
- Sklep WooCommerce. Podłączam go do Magazynu BaseLinker, a nie bezpośrednio do magazynu hurtowni. W ten sposób sklep korzysta z wybranego asortymentu zamiast całego katalogu dostawcy.

Takie rozwiązanie zastosowałem w sklepie z teleskopami, który korzysta z oferty dystrybutora Levenhuk. Katalog dostawcy pozostaje w jego magazynie, a do WooCommerce trafiają wybrane produkty przez Magazyn BaseLinker. Stany magazynowe i ceny aktualizują się na podstawie pliku hurtowni.

Ten sam schemat stosuję przy kilku hurtowniach. Każdy dostawca ma własne dane produktowe, a wybrane pozycje są powiązane z magazynem wykorzystywanym przez sklep. Trzeba przy tym sprawdzić, jak produkty są identyfikowane, żeby nie powiązać ze sobą niewłaściwych towarów.

Base.com nie jest hurtownią i nie dostarcza produktów. To pośrednik umożliwiający zarządzanie połączeniami, synchronizację danych i obsługę zamówień. Z każdym dostawcą musisz zawrzeć osobną umowę na swoją firmę, podając wymagane dane, w tym NIP. Akceptacja zazwyczaj trwa kilka dni roboczych, czasami dłużej. Hurtownia może również odmówić współpracy.

Przy zleceniu konfiguruję magazyny i powiązania produktów po uzyskaniu dostępu do danych udostępnionych przez dostawcę. Nie traktuję samego założenia konta BaseLinker jako gwarancji dostępu do oferty hurtowni.

## Który system powinien aktualizować stany, ceny i produkty?

Synchronizacja stanów WooCommerce wymaga ustalenia jednego nadrzędnego źródła dla określonych danych. Problem zaczyna się wtedy, gdy BaseLinker aktualizuje stany produktów, ale równocześnie robi to osobna integracja z programem magazynowym. Oba narzędzia zapisują wartości w tym samym miejscu, a kolejna aktualizacja potrafi nadpisać poprzednią.

Podobnie jest z cenami. Możesz ręcznie zmienić cenę produktu w WooCommerce, ale jeśli inny system odpowiada za aktualizację tego pola, następna synchronizacja przywróci wartość z magazynu lub hurtowni. Dlatego przed konfiguracją pytam, gdzie faktycznie zarządzasz cenami i stanami.

| Dane | Pytanie przed konfiguracją | Ryzyko bez ustalenia zasad |
| --- | --- | --- |
| Stany magazynowe | Który magazyn jest nadrzędny? | Sprzedaż produktu, którego nie ma już w magazynie |
| Ceny | Gdzie zmieniasz ceny produktów? | Nadpisanie prawidłowej ceny wartością z innego systemu |
| Produkty | Po czym system rozpoznaje ten sam produkt? | Duplikaty lub błędne powiązania |
| Warianty | Jak odróżniane są rozmiary, kolory i inne opcje? | Aktualizacja danych niewłaściwego wariantu |
| Statusy zamówień | Który status w BaseLinkerze odpowiada statusowi WooCommerce? | Nieprawidłowa zmiana statusu, a nawet anulowanie zamówienia |

Dane nie muszą płynąć w jednym kierunku. Można na przykład pobierać stany magazynowe z systemu zewnętrznego, a ceny pozostawić pod kontrolą WooCommerce. Warunkiem jest takie ustawienie synchronizacji, żeby poszczególne narzędzia nie nadpisywały sobie informacji.

Sprawdzam także SKU, czyli indywidualne oznaczenia produktów w katalogu, oraz EAN, czyli kody identyfikujące towary. Przy produktach z wariantami ważne są również atrybuty, dzięki którym system odróżnia na przykład poszczególne rozmiary tego samego ubrania.

Przy integracji ustalam nadrzędne źródło każdej grupy danych, weryfikuję powiązania produktów i testuję aktualizacje, zanim uruchomię je w działającym sklepie.

## Dlaczego zamówienia same zmieniają status lub zostają anulowane?

Nie wszystkie błędy integracji objawiają się brakiem połączenia. Czasem zamówienia prawidłowo trafiają do BaseLinkera, ale później zmieniają status w WooCommerce bez działania właściciela sklepu.

Miałem taki przypadek w sklepie z odzieżą dziecięcą, który sprzedaje również na Allegro. Klientki składały zamówienia za pobraniem, po czym otrzymywały wiadomości o ich anulowaniu. W panelu WooCommerce jako wykonawca zmiany widniał tylko „system”, więc z samej historii zamówienia nie dało się ustalić przyczyny.

Sprawdziłem logi serwera. Wynikało z nich, że od jednej do trzech minut po złożeniu zamówienia BaseLinker wysyłał przez REST API zmianę statusu na „oczekujące na płatność”. WooCommerce traktował następnie takie zamówienie jako nieopłacone i po 60 minutach je anulował.

Problem nie dotyczył pobierania zamówień, ale przepływu statusów między systemami. Rozwiązaniem była mała własna wtyczka, która blokuje cofnięcie statusu dla zamówień za pobraniem i zapisuje odpowiednią notatkę w zamówieniu. Wskazałem również powiązanie statusów wymagające poprawy po stronie BaseLinkera.

Przetestowałem oba scenariusze. Bez wtyczki błąd się powtarzał, a po jej włączeniu zamówienia za pobraniem nie były już anulowane w ten sposób. Przygotowałem także monitoring z raportem automatycznych anulowań i cofnięć statusów z 30 dni.

Przy diagnozowaniu podobnych problemów nie ograniczam się do ponownego połączenia sklepu. Sprawdzam historię zamówień, logi i ustawienia statusów, żeby ustalić, który system wykonał zmianę i dlaczego WooCommerce zareagował w określony sposób.

## Czy przebudowa sklepu może uszkodzić działającą synchronizację z BaseLinkerem?

Przebudowa WooCommerce nie zawsze oznacza konieczność zmiany integracji sprzedażowej. Można zmienić wygląd sklepu, sposób wyszukiwania produktów i strukturę katalogu, pozostawiając obsługę zamówień w BaseLinkerze.

Pracuję nad takim rozwiązaniem w sklepie z częściami samochodowymi, który ma ponad 5 tysięcy produktów i sprzedaje również na Allegro. Zamówienia są obsługiwane przez BaseLinkera, natomiast przebudowa obejmuje wygląd i sposób poruszania się po katalogu.

Dotychczasowe kategorie pochodziły z Allegro i tworzyły chaotyczną strukturę. Nowy katalog został zaplanowany według marki pojazdu, modelu i grupy części. Nie umieściłem go jednak jako zwykłych kategorii WooCommerce, ponieważ synchronizacja kategorii z BaseLinkera mogłaby nadpisać nową strukturę.

Zamiast tego nowy katalog działa jako osobna taksonomia, czyli niezależny sposób grupowania produktów w WordPressie. Dzięki temu można budować czytelną nawigację bez opierania jej na kategoriach aktualizowanych przez zewnętrzny system. Wyszukiwarka po numerze OEM, czyli oznaczeniu części nadanym przez producenta, korzysta z numerów zapisanych w atrybutach produktów.

Przy podobnych zleceniach sprawdzam, które pola i kategorie są synchronizowane przez BaseLinkera, zanim zmienię strukturę katalogu. Oddzielam nowe mechanizmy nawigacji od danych zarządzanych przez integrację, żeby aktualizacja zewnętrzna nie nadpisywała zmian wprowadzonych podczas przebudowy.

## Od czego zależy zakres i koszt połączenia WooCommerce z BaseLinkerem?

Największy wpływ na zakres prac ma liczba kanałów sprzedaży, magazynów i hurtowni oraz stan katalogu produktów. Podłączenie jednego sklepu do jednego magazynu oznacza inny zakres konfiguracji niż połączenie WooCommerce, Allegro, kilku dostawców i dodatkowego programu magazynowego.

Znaczenie ma również to, czy integracja powstaje od początku, czy trzeba naprawić już działające połączenie. Przy błędach zamówień najpierw diagnozuję przyczynę. Przy hurtowniach sprawdzam dostępność danych oraz sposób powiązania produktów. Przy katalogu z wariantami analizuję identyfikatory i atrybuty, żeby nie łączyć nieodpowiadających sobie pozycji.

Sprawdzam też narzędzia dodatkowe, takie jak systemy fakturowe, programy magazynowe, kurierzy czy mechanizmy tworzenia etykiet. BaseLinker obsługuje połączenia z różnymi systemami, ale nie przyjmuję automatycznie, że konkretny program używany w Twojej firmie będzie współpracował w oczekiwany sposób. Najpierw weryfikuję dostępne możliwości.

Termin i zakres integracji określam po krótkiej rozmowie oraz sprawdzeniu obecnej konfiguracji. Nie podaję stałego czasu wdrożenia dla wszystkich sklepów, ponieważ dodatkowe kanały, błędne dane oraz konieczność uzyskania dostępu do hurtowni zmieniają zakres potrzebnych prac.

## Jak dbam o dostęp do sklepu i działanie integracji po wdrożeniu?

Do połączenia BaseLinkera z WooCommerce potrzebny jest klucz REST API. Nadaję mu uprawnienia odpowiednie do ustalonego zakresu integracji. Nie udostępniam dostępu do funkcji, których połączone systemy nie potrzebują do wymiany danych.

Konto Base.com zakładasz na własną firmę i samodzielnie je opłacasz. Dzięki temu zachowujesz kontrolę nad ustawieniami, rozliczeniami i użytkownikami. Na czas konfiguracji potrzebuję dostępu pozwalającego połączyć systemy i przeprowadzić testy, ale po zakończeniu prac możesz mi go odebrać.

Samo uruchomienie synchronizacji nie oznacza, że sklep nigdy nie będzie wymagał dalszych zmian. Nowa hurtownia, dodatkowy kanał sprzedaży lub przebudowa katalogu wymagają sprawdzenia obecnych ustawień. Jeżeli potrzebujesz regularnego wsparcia technicznego także poza integracją, zobacz [opiekę nad sklepem WordPress](/uslugi/opieka-wordpress).

Przy zakończeniu zlecenia testuję uzgodnioną ścieżkę zamówienia, przekazuję Ci informacje o sposobie obsługi połączenia i pozostawiam konto Base.com pod Twoją kontrolą. Dzięki temu wiesz, gdzie sprawdzać zamówienia, które systemy aktualizują dane i jakie ustawienia wymagają uwagi przy kolejnych zmianach w sklepie.
