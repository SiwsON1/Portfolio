# Fakty: sklep internetowy z częściami samochodowymi (WooCommerce)

## Realizacja (BEZ NAZWY: „sklep z częściami do samochodów dostawczych”, wdrożenie w toku)
- Firma sprzedaje używane i nowe części do samochodów dostawczych (m.in. Renault Trafic i Master, Opel Vivaro i Movano, Ford Transit, Nissan, Fiat Ducato i Talento). Sklep na WooCommerce, zamówienia i stany obsługuje BaseLinker. Równolegle sprzedaje na Allegro, OLX, OTOMOTO, Ovoko i eBay.
- Katalog ma około 10 tysięcy produktów. Kategorie przyszły z Allegro: ponad tysiąc kategorii, ten sam rodzaj części w kilku miejscach (np. zderzaki w trzech). Zebrałem je w 16 czytelnych grup w menu, a rodzaj części liczę z kategorii klienta, nie ze zgadywania po nazwie.
- Marka i model auta były często zapisane tylko w nazwie produktu, a nie w atrybutach. Napisałem regułę, która rozpoznaje z nazwy generację, rocznik, silnik i modele bliźniacze (np. Renault Trafic III, Opel Vivaro B, Fiat Talento i Nissan NV300 to w dużej mierze te same części). Jedna część może pasować do kilku modeli.
- Do tego panel w WordPressie do ręcznej poprawki przypisania auta: poprawka ręczna jest zapamiętana i automat jej nie nadpisuje. Reguła poprawiła przypisania w 887 częściach.
- Wykryłem około 170 części z prawdopodobnie złą kategorią w BaseLinkerze; po ręcznym przeglądzie zostało 88 do sprawdzenia przez właściciela. Przekazałem je w arkuszu, zamiast poprawiać po cichu.
- Grupy części działają jako osobna taksonomia, bo BaseLinker przy synchronizacji nadpisuje kategorie WooCommerce. Dzięki temu nowa nawigacja nie zniknie po kolejnej synchronizacji.
- Wyszukiwarka po numerze katalogowym części (OEM), numerze oryginału i zamienników z atrybutów produktów.
- Ścieżka marka, model, grupa części w adresie i menu. Na karcie części blok „Pasuje do” z listą modeli.
- Formularz zapytania o część po numerze VIN i link do WhatsAppa z gotowym tekstem (zwykły link, nie czatbot).
- Sprzedana część nie daje błędu 404: adres przekierowuje (301) do grupy części w tym samym modelu auta.
- Zdjęcia w kilku rozmiarach: kafel listy spadł z około 1,8 MB do około 64 KB.
- Opisy przeniesione z aukcji Allegro rozbite na pola: przedmiot, pasuje do, rocznik, stan, numer magazynowy.
- Strony z pytaniami i odpowiedziami oraz osobne strony „gdzie znaleźć kod lakieru” dla popularnych modeli, z danymi strukturalnymi FAQ.
- Mapa przekierowań 301 ze starych adresów kategorii i marek na nowe.
- Pracuję na kopii testowej sklepu, nic nie trafia na żywą stronę przed odbiorem.

## Wspólne
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach.
- Nowe sklepy WooCommerce: własny motyw, bez Elementora.
- Osobne strony usług: sklepy WooCommerce, integracja WooCommerce z BaseLinker, Google Merchant Center i feed produktowy.

## Uczciwie
- Wdrożenie jest w toku: nie podawaj wyników sprzedaży, ruchu ani pozycji w Google.
- Nie podawaj nazwy firmy ani adresu sklepu.
- Hurtowni części (Inter Cars, katalogi TecDoc) nie podłączałem. TecDoc opisz tylko jako możliwość, którą oceniam po rozpoznaniu, bez twierdzenia, że ją wdrażałem.
