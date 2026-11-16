=== REALIZACJA: kosmoteka ===

DESCRIPTION: Kosmoteka to sklep internetowy z teleskopami, mikroskopami, lornetkami i akcesoriami optycznymi. Zbudowałem go od podstaw na WooCommerce, z katalogiem opartym na danych hurtowni, własnym wyglądem, automatyczną obróbką zdjęć, synchronizacją stanów i optymalizacją szybkości.

BODY:

## Od pustego WordPressa do sklepu z katalogiem hurtowni

Prace nad sklepem Kosmoteka rozpocząłem od świeżej instalacji WordPressa 6.9.4 z domyślnym motywem. WooCommerce nie był jeszcze zainstalowany. Do zbudowania miałem sklep z optyką obserwacyjną i naukową, obejmującą teleskopy, mikroskopy, lornetki, lunety oraz akcesoria. Podstawą katalogu miały być dane hurtowni Levenhuk B2B, udostępniane w codziennie aktualizowanych plikach CSV i XML.

Taki model wymagał czegoś więcej niż jednorazowego dodania produktów. Pliki dostawcy zawierały opisy, zdjęcia i inne dane produktowe, a stany magazynowe trzeba było regularnie synchronizować. Zależało mi na rozwiązaniu, w którym katalog WooCommerce korzysta z danych hurtowni, ale nie wymaga ręcznego poprawiania tych samych informacji przy każdej aktualizacji.

Osobnym wyzwaniem był wygląd. Zdjęcia producenta przedstawiały sprzęt na białym tle, tymczasem sklep Kosmoteka miał otrzymać ciemną, kosmiczną stylistykę. Białe prostokąty wokół teleskopów i mikroskopów zaburzałyby spójność projektu. Musiałem więc połączyć prace nad szablonem, kartami produktów i obróbką fotografii.

## Ciemny motyw i karta produktu dopasowana do sprzętu optycznego

Wygląd zbudowałem na motywie potomnym GeneratePress, nazwanym „Kosmoteka”. Przygotowałem własny system kolorów „Kosmos”, oparty na ciemnym tle oraz akcentach cyjanu i magenty. Do typografii wykorzystałem kroje Fraunces, Manrope i JetBrains Mono. Efekt gwiazd stworzyłem w SVG zamiast korzystać z biblioteki particle.js, dzięki czemu nie musiałem dodawać kolejnego skryptu do animacji tła.

Kartę produktu rozbudowałem własną wtyczką typu mu-plugin, czyli kodem WordPressa ładowanym automatycznie, niezależnie od aktywnego motywu. Dodałem logo producenta, w tym oryginalne logo Levenhuk i napisy marek w formacie SVG dla pozostałych producentów. Parametry techniczne pobierałem ze słownika specyfikacji i wyświetlałem jako czytelne etykiety.

Przy sprzęcie optycznym takie informacje mają znaczenie. Zamiast szukać podstawowych parametrów w długim opisie, można zobaczyć je bezpośrednio na karcie produktu. Przygotowałem również ciemną galerię, pasek zaufania i układ mobilny z kolejnością: galeria, podsumowanie, zakładki oraz produkty powiązane.

Na telefonach dodałem przyklejony przycisk zakupu, który pozostaje dostępny podczas przewijania strony. Te elementy przygotowałem jako własne wtyczki WordPress, zamiast uzależniać działanie karty od rozbudowanych dodatków.

## Zdjęcia bez białego tła i znacznie lżejsze strony

Oryginalne fotografie były nie tylko niedopasowane wizualnie, ale również ciężkie. Pojedyncze pliki PNG zajmowały około 1 do 1,6 MB. Przy wielu produktach na jednej stronie oznaczało to dużą ilość danych do pobrania przez przeglądarkę.

Przygotowałem proces automatycznego usuwania białego tła poza WordPressem, wykorzystując Node.js i bibliotekę Sharp. Piksele o jasności przekraczającej ustalony próg zamieniałem na przezroczystość. W jednej partii przetworzyłem w ten sposób 160 zdjęć produktów.

Następnie napisałem mu-plugin, który sprawdza, czy na serwerze znajduje się odpowiednik fotografii z końcówką -cut.png. Jeżeli taki plik istnieje, wtyczka automatycznie podstawia wersję bez tła. Nie musiałem ręcznie wymieniać zdjęć w poszczególnych produktach.

Kolejnym etapem było przygotowanie obrazów WebP w trzech szerokościach: 400, 800 i 1400 pikseli. Wtyczka dobiera odpowiedni wariant do miejsca wyświetlania. Dodałem też opóźnione ładowanie obrazów poza pierwszym widokiem, asynchroniczne dekodowanie oraz priorytetowe ładowanie głównej fotografii.

Efekty przyspieszenia strony WordPress sprawdziłem własnym pomiarem po zmianach:

Strona kategorii zmniejszyła się z 14,3 MB do 0,8 MB, a strona główna z 6,2 MB do 0,64 MB. LCP, czyli czas wyświetlenia największego widocznego elementu strony, spadł z 13,8 sekundy do 0,5 sekundy. Ten ostatni wynik pochodzi z mojego pomiaru po zmianie, przy włączonym cache, czyli pamięci podręcznej.

## Import produktów i bezpieczna synchronizacja z hurtownią

Katalog WooCommerce oparłem na plikach dostawcy. Przygotowałem własny proces importu, który pozwala wybierać produkty, pobierać fotografie, odczytywać parametry techniczne i zamieniać je na atrybuty WooCommerce. Import obejmuje również markę, kod EAN oraz metadane Rank Math potrzebne do SEO.

W jednym z importów dodałem 33 nowe produkty. Dla każdego przygotowałem unikalny opis, zamiast kopiować gotową treść producenta. Proces uwzględniał kontrolę informacji liczbowych i linków, a także pobieranie maksymalnie sześciu zdjęć na produkt.

Uporządkowałem również identyfikatory w istniejącym katalogu. Poprawiłem 110 numerów SKU, zastępując identyfikatory oparte na adresach produktów właściwymi numerami, oraz uzupełniłem 116 kodów EAN z cennika hurtowni. SKU służy do jednoznacznego rozpoznawania produktu podczas aktualizacji, a EAN identyfikuje konkretny artykuł.

Codzienną synchronizację stanów przygotowałem jako osobny mu-plugin. Uruchamia się o 6:00 przez WP-Cron, czyli mechanizm planowania zadań WordPressa. Dodałem tryb próbny oraz zabezpieczenie przed niepełnym plikiem: jeśli dane dostawcy zawierają mniej niż 300 SKU, synchronizacja nie wprowadza żadnych zmian.

Takie podejście stosuję przy budowie sklepów WooCommerce opartych na zewnętrznych katalogach. Automatyzacja musi nie tylko aktualizować dane, ale również rozpoznawać sytuację, w której bezpieczniej pozostawić je bez zmian.

## SEO, analityka i naprawy działania WooCommerce

Dla produktów wdrożyłem dane strukturalne Schema.org, obejmujące między innymi markę, numer producenta, EAN, kategorię i parametry techniczne. To informacje w kodzie strony, które pomagają wyszukiwarkom rozpoznawać zawartość katalogu.

Przygotowałem również dane strukturalne dla 16 kategorii z sekcjami FAQ oraz oznaczenia nawigacji, organizacji i witryny. Rozbudowałem opisy sześciu głównych kategorii, dodając pytania i odpowiedzi oraz odnośniki do konkretnych produktów. Ułożyłem mapę tematyczną pięciu klastrów treści i napisałem wtyczkę automatycznie łączącą artykuły blogowe z kategoriami. Dodałem też ramkę „Polecane w tym temacie”.

Analitykę oparłem na własnej wtyczce Google Analytics 4. Zrealizowałem wdrożenie Consent Mode v2, w którym zgoda na analityczne przechowywanie danych jest domyślnie wyłączona i aktywuje się dopiero po decyzji użytkownika. Przygotowałem lekki baner cookies i wykluczyłem zalogowanych administratorów z pomiaru.

Skonfigurowałem także pocztę w domenie, wysyłkę przez SMTP oraz zabezpieczenia SPF, DKIM i DMARC. Wszystkie trzy mechanizmy przeszły test z wynikiem PASS.

Podczas prac naprawiłem problem z koszykiem i kasą WooCommerce. Filtr dodawał atrybut defer do wszystkich skryptów, przez co bloki WooCommerce zgłaszały błąd wp is not defined. Dodałem wyjątek dla koszyka, kasy i konta użytkownika.

Rozwiązałem również błąd HTTP 500 występujący na większości kart produktów po zmianie we wtyczce obsługującej zdjęcia. Przyczynę ustaliłem na podstawie dziennika błędów serwera i wprowadziłem poprawkę tego samego dnia.