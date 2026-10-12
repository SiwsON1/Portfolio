# FAKTY do nowych stron usług (12.10.2026). Tylko z tego korzystaj, plus fakty-kanoniczne.md.

## Wspólne
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach (część funkcji piszę jako małą wtyczkę zamiast instalować dużą).
- Nowe sklepy WooCommerce: własny motyw, bez Elementora. Integracje w sklepach: Przelewy24, BLIK, InPost, GA4 (z istniejącej strony sklepów WooCommerce).
- Osobna strona: integracja WooCommerce z BaseLinker (model trzech warstw: sklep, BaseLinker, hurtownia/Allegro).

## Integracje (do strony integracje-woocommerce)
- LumiKids (WooCommerce): sprzedaż równolegle przez Allegro; zamówienia za pobraniem anulowały się same, bo integracja z BaseLinkerem cofała ich status, a WooCommerce po 60 minutach anulował je jako nieopłacone. Przyczyna z logu serwera, naprawione małą wtyczką ochronną. Płatności przez bramkę imoje z BLIK: umiem odróżnić porzucony BLIK (kod żyje około 2 minut) od błędu sklepu, sprawdzając notatki zamówienia i panel operatora. Zdarzenia Meta (piksel i Conversions API, czyli przesyłanie zdarzeń z serwera): darmowa wtyczka Pixel Manager jednym ustawieniem wyłączała całą integrację Meta; po zmianie ustawienia zdarzenia serwerowe ruszyły bez płatnej wersji.
- Kosmoteka (WooCommerce): sklep z teleskopami zasilany z hurtowni Levenhuk (dropshipping, marki m.in. Levenhuk, Bresser, Meade; nie podawaj liczby produktów, bo się zmienia); integracja z hurtownią, bramki płatności i wysyłki.
- Sklep z częściami samochodowymi (WooCommerce, wdrożenie w toku, NIE podawaj nazwy): katalog części pobrany automatycznie z obecnego sklepu przez jego publiczne API produktów, zdjęcia w kilku rozmiarach.
- Integracji z Subiektem, Optimą, wFirmą, iFirmą, Fakturownią NIE wdrażałem. Można o nich napisać tylko jako o typach integracji, które ocenię po rozpoznaniu (najpierw sprawdzam, czy system ma API albo gotowy łącznik), bez twierdzenia, że je robiłem.

## Migracja sklepu (do strony migracja-sklepu-do-woocommerce)
- Pełnej migracji sklepu z Shopera ani z PrestaShop do WooCommerce jeszcze nie opisuję jako realizacji. Powiedz to wprost jednym zdaniem, bez nagłówka „moje migracje”.
- Przekierowania: w serwisie na WordPressie (bez nazwy, serwis windykacyjny) Search Console pokazywał 106 błędów 404 ze starych adresów; przygotowałem mapę 163 par adresów (161 dawało 404, 2 miały już przekierowanie) i wdrożyłem stałe przekierowania 301. Google wracał do starych adresów jeszcze kilka tygodni po zmianie.
- Cache: w tym samym serwisie wtyczka cache podawała Google stare tytuły na 39 z 93 wpisów; od tej pory po każdej zmianie porównuję wersję z cache i bez cache.
- Sklep z częściami (wdrożenie w toku, bez nazwy): nowy sklep na WooCommerce zamiast obecnego; katalog i zdjęcia pobrane automatycznie z obecnego sklepu przez jego publiczne API produktów, a nie przepisywane ręcznie.
- LumiKids: import produktów wtyczką przeniósł 59 produktów bez błędów; bałagan (brak SKU, lokalna rozmiarówka) był w produktach dodanych później ręcznie. Wniosek: migracja to też uporządkowanie danych (SKU, warianty), bo bałagan po przeniesieniu wychodzi w integracjach.
- Google (dokumentacja o przenoszeniu witryny): mapa starych adresów na nowe, przekierowania stałe po stronie serwera, aktualizacja linków wewnętrznych i mapy witryny; przejściowe wahania pozycji są normalne; przekierowania zostawić na długo, Google zaleca co najmniej rok. Nie obiecuj zachowania pozycji.

## Konfiguratory i kalkulatory (do strony konfigurator-produktu)
- Galabau Darius (Next.js, firma ogrodnicza z Niemiec, okolice Grafeld): konfigurator wyceny ogrodzeń w czasie rzeczywistym (klient wybiera parametry i od razu widzi wycenę), galeria realizacji, panel administratora z logowaniem (Clerk), baza przez Prisma, wdrożenie na Vercel, wersja niemiecka (Impressum/Datenschutz).
- Mebloweporady.pl (mój serwis na WordPressie): siedem kalkulatorów (m.in. farby, paneli, płytek, tapety, odległości od telewizora) zebranych na wspólnej stronie; napisane w czystym JavaScripcie osadzonym w treści WordPressa, co wymagało obejścia automatycznego formatowania edytora, które wstawiało znaczniki akapitu w środek skryptu; z pasujących wpisów prowadzą do nich linki.
- Personalizator koszulki (React, projekt własny): dobór koloru i rozmiaru z podglądem obrazka i ceny na żywo.
- Konfigurator może działać w WooCommerce (wariant i cena trafiają do koszyka) albo jako zapytanie ofertowe (wycena trafia do maila i do firmy), albo w Next.js przy bardziej złożonej logice.
