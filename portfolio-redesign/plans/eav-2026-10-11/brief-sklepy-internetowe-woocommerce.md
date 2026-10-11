Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługową „Sklepy WooCommerce” (marcinsiwonia.pl/uslugi/sklepy-internetowe-woocommerce) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-sklepy-internetowe-woocommerce.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel firmy, który chce sklep internetowy albo ma słaby sklep i szuka wykonawcy wdrożenia.

FRAZA GŁÓWNA ZOSTAJE: „sklepy WooCommerce” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: wdrożenie sklepu WooCommerce, wdrożenia WooCommerce (Google pokazuje nas na tę frazę, a nikt nie klika), sklep internetowy na WordPressie, sklep WooCommerce Wrocław (raz).

## Audyt EAV (popraw te punkty)
Encja: usługa wdrożenia sklepu WooCommerce. Predykaty: zamów, zleć, wdrożę, połączę, skonfiguruję, przeniosę, uruchomię.
Brakujące atrybuty i wartości, które trzeba dodać (fakty niżej):
1. Integracje sprzedażowe po nazwie: Google Merchant (feed produktowy), GA4 z trybem zgody (Consent Mode v2), Allegro przez BaseLinker, BaseLinker, płatności (Przelewy24, Stripe, BLIK), dostawy (InPost). Dziś prawie tylko płatności.
2. Funkcje zwiększające sprzedaż, które realnie zrobiłem: porzucone koszyki z przypomnieniem, prośba o opinię po zakupie z kodem rabatowym, opinie o sklepie z moderacją, podpowiedzi w wyszukiwarce sklepu, karta produktu z logo marek i parametrami, zdjęcia produktów bez tła.
3. Widoczność w Google i w AI: dane strukturalne produktu (marka, SKU, EAN, MPN), feed do Zakupów Google, przekierowania 301 po zmianach w katalogu. Bez obietnic pozycji.
4. Własne wtyczki zamiast stosu dodatków: ponad 40 własnych wtyczek w 9 serwisach (link do strony o wtyczkach).
5. Terminy z FAKTÓW: sklep mniejszy 6-8 tygodni, średni z B2B, wersjami językowymi i migracją 10-14 tygodni.
6. Korzyści mają mieć konkretne wartości (nazwa systemu, liczba, mechanizm), nie ogólniki.
7. W bloku dodaj JEDNĄ tabelę Markdown w sekcji o wyborze platformy (WooCommerce, Shopify, Shoper, PrestaShop: dla kogo, mocna strona, ograniczenie). Bez cen i bez liczb, których nie ma w FAKTACH.
8. Blok nie może dryfować w poradnik: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu sprawdzam…”).
9. Kosmoteka i LumiKids: każdy nazwany najwyżej 2 razy na całej stronie (strona + blok).

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: sklepy-internetowe-woocommerce ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków, z frazą „sklepy WooCommerce” lub „wdrożenie sklepu WooCommerce”)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4)
PROCES:
- Tytuł: … | Treść: … (dokładnie 5 kroków, jak obecnie)
FAQ:
- P: … | O: … (dokładnie 12 pytań; zachowaj sens obecnych, możesz przeredagować; jedno zamień na „Czy sklep będzie widoczny w Zakupach Google?”)
CTA: … (jedno krótkie zdanie)

=== BLOK: sklepy-internetowe-woocommerce ===
# [nagłówek bloku z frazą „sklep WooCommerce” lub „wdrożenie sklepu WooCommerce”]
[intro: 2 akapity]
## [sekcja] (8 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona, łącznie 4: [Kosmoteka](/projekty/kosmoteka), [LumiKids](/projekty/lumikids), [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), [własne wtyczki WordPress](/uslugi/tworzenie-wtyczek-wordpress)
Blok, łącznie maks. 3: [porównanie WordPressa z Next.js](/blog/next-js-15-vs-wordpress-2026), [opieka nad stroną WordPress](/uslugi/opieka-wordpress), [przyspieszenie strony WordPress](/uslugi/przyspieszanie-stron-wordpress)

## Twarde zasady
- Długość: strona 650-850 słów bez FAQ, blok 1300-1700 słów.
- Zero kwot w złotych. Terminy tylko z FAKTÓW.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w załączonym pliku fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa (wersja testowa, wdrożenie, na zamówienie). Żargon tylko z wyjaśnieniem, co daje właścicielowi.
- Jeden głos: „ja” i „Ty”. Bez frazesów („Bez ukrytych kosztów”, „Idealnie”), bez podsumowań.
- Odpowiedzi FAQ o cenie: nie zaczynaj od „Wycena zależy od”, nazwij jeden główny czynnik kosztu (dla sklepu: liczba i złożoność integracji oraz wariantów produktów).

# FAKTY O SKLEPACH (tylko z tego korzystaj, poza fakty-kanoniczne.md)
## LumiKids (sklep WooCommerce z odzieżą dziecięcą, sprzedaż też na Allegro)
- Feed produktowy do Google Merchant (Zakupy Google): przypisuje kategorie sklepu do kategorii Google, pomija produkty bez SKU.
- Porzucone koszyki: zapis koszyka, jedno przypomnienie mailem, odtworzenie koszyka z linku w mailu.
- Prośba o opinię 7 dni po zrealizowaniu zamówienia, jednorazowy kod rabatowy za opinię (ważny 60 dni), opinie o sklepie z moderacją i oznaczeniem zweryfikowanego zakupu.
- Ochrona zamówień za pobraniem: integracja BaseLinkera cofała status opłaconych pobrań, a sklep po godzinie je anulował; własna wtyczka to blokuje.
- Poprawki danych strukturalnych produktu: prawdziwa nazwa, marka, SKU, okruszki.
- Podpowiedzi w wyszukiwarce sklepu w nagłówku (własny kod, wyniki dopasowane do wpisanej frazy).
- Polskie komunikaty w formularzach.
## Kosmoteka (sklep WooCommerce z teleskopami, oficjalny dystrybutor Levenhuk)
- Karta produktu z logo marki, parametrami modelu ze słownika specyfikacji, ciemną galerią i przyklejonym przyciskiem zakupu na telefonie; filtr marek na liście produktów.
- Zdjęcia produktów z przezroczystym tłem podstawiane automatycznie.
- Dane strukturalne produktu: marka, EAN (gtin13), MPN.
- Automatyczne linkowanie wpisów z bloga do kategorii sklepu.
- GA4 z trybem zgody Consent Mode v2 i własny lekki baner cookies.
- BaseLinker: katalog hurtowni zostaje w jej magazynie, do sklepu trafiają wybrane pozycje; stany i ceny aktualizują się z pliku hurtowni.
## Ogólnie
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach.
- Nowe sklepy na własnym motywie, bez Elementora.
