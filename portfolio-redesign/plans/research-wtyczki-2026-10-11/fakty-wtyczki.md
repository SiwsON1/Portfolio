# Fakty: wtyczki WordPress Marcina (11.10.2026)

Tylko to wolno opisać jako własną pracę. Wszystko sprawdzone w kodzie i notatkach z wdrożeń.

## LumiKids (sklep WooCommerce z odzieżą dziecięcą, realizacja na /projekty/lumikids)
- System opinii o sklepie i produktach napisany jako własna wtyczka: osobna strona z opiniami o sklepie, oceny gwiazdkowe, moderacja przed publikacją, slider z opiniami na stronie głównej i w kategoriach (pokazuje się dopiero, gdy są co najmniej 3 zatwierdzone opinie).
- Automatyczna prośba o opinię: mail wychodzi 7 dni po oznaczeniu zamówienia jako zrealizowane, raz na zamówienie, wysyłka zaplanowana w kolejce zadań WooCommerce (Action Scheduler), ślad w notatkach zamówienia.
- Kod rabatowy za opinię: klient z zamówieniem dostaje jednorazowy kod 10%, ważny 60 dni, jeden na zamówienie (rabat ustalony z właścicielem sklepu).
- Ochrona zamówień za pobraniem: zewnętrzna integracja zamówień cofała status opłaconych zamówień za pobraniem na „oczekujące na płatność”, a WooCommerce po 60 minutach je anulował. Przyczynę znalazłem w logu serwera. Wtyczka blokuje taką zmianę dla zamówień za pobraniem i dopisuje notatkę w zamówieniu. Przed wgraniem przetestowana scenariuszami, sklep działał bez przerwy.
- Ikony social w nagłówku i stopce dodane wtyczką, bez przebudowy motywu.
- Podpowiedzi w wyszukiwarce sklepu (własny kod na Store API WooCommerce, ranking trafności po nazwie).

## Kosmoteka (sklep WooCommerce z teleskopami, /projekty/kosmoteka)
- Własna wtyczka do zdjęć produktów: automatycznie podmienia zdjęcie produktu na wersję z przezroczystym tłem, jeśli taka istnieje, i serwuje zdjęcia w rozmiarach dopasowanych do miejsca na stronie.

## Mebloweporady.pl (własny serwis WordPress, ponad 400 poradników, /projekty/mebloweporady)
- Stronę główną, wcześniej w większości demo motywu, zastąpiła własna wtyczka: renderuje najnowszy wpis, świeże publikacje z datami, pasek kalkulatorów i działy tematyczne prosto z bazy, bez ręcznej edycji w Elementorze.

## Sposób pracy (prawdziwy, stosowany w tych projektach)
- Funkcje dopisuję jako osobną wtyczkę (często mu-plugin, czyli wtyczka ładowana zawsze, której nie da się przypadkiem wyłączyć w panelu), a nie w plikach motywu. Dzięki temu aktualizacja albo zmiana motywu jej nie kasuje, a usunięcie jednego pliku cofa zmianę.
- Korzystam z mechanizmów WordPressa i WooCommerce: haki (akcje i filtry), REST API, Action Scheduler, WP-CLI do testów.
- Testy na kopii albo przy wyłączonej funkcji (flaga podglądu widoczna tylko z parametrem w adresie), dopiero potem włączenie dla wszystkich.
- Bezpieczeństwo w kodzie: sprawdzanie uprawnień użytkownika, zabezpieczenie formularzy (nonce), escapowanie danych wyświetlanych na stronie, klucze API z minimalnymi uprawnieniami.
- Kod trzymam w repozytorium, klient dostaje pliki i może je przekazać innemu programiście.
- Po wdrożeniu: 60 dni gwarancji i bezpłatnych poprawek; dalej opcjonalnie opieka w abonamencie bez umowy na rok ([opieka WordPress](/uslugi/opieka-wordpress)).

## Czego NIE pisać
- Nie wymyślać liczby napisanych wtyczek, liczby instalacji, wtyczek w repozytorium wordpress.org (żadnej tam nie ma).
- Nie podawać kwot. Termin: po rozpoznaniu, bez stałej liczby.
- Nie obiecywać, że każdą funkcję da się zrobić wtyczką; czasem lepsza jest gotowa wtyczka, czasem własny motyw albo inna technologia (Next.js).
- Nie wspominać o kliencie Lectio ani innych klientach spoza /projekty.
