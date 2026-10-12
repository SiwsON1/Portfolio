Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługową „Tworzenie stron www” (marcinsiwonia.pl/uslugi/tworzenie-stron-www) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-tworzenie-stron-www.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel małej lub średniej firmy, który potrzebuje nowej strony albo ma przestarzałą i szuka jednego wykonawcy.

FRAZA GŁÓWNA ZOSTAJE: „tworzenie stron www” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: tworzenie stron internetowych, strona internetowa dla firmy, projektowanie stron www, strony www Wrocław (raz).

## Audyt EAV (popraw te punkty)
Encja: usługa tworzenia strony www dla firmy. Predykaty: zaprojektuję, zakoduję, wdrożę, przeniosę, zamów, zleć.
Obecny tekst jest poprawny, ale to lista ogólników, które napisze każdy wykonawca (Figma, dwie tury poprawek, Search Console). Brakuje atrybutów z wartościami. Dodaj (tylko z fakty-kanoniczne.md i FAKTÓW niżej):
1. Rodzaje stron z terminami: wizytówka 2-3 tygodnie, strona firmowa lub usługowa 4-6 tygodni, sklep mniejszy 6-8 tygodni, aplikacja lub MVP 6-12 tygodni.
2. Mierzalne kryteria odbioru: Lighthouse 90+ na telefonie, LCP poniżej 2,5 s, GA4 dopiero po zgodzie na cookies, przekierowania 301 przy przenosinach.
3. Dowody z liczbami (jeden zdaniem każdy, bez wyliczanki wszystkich): Kantorymapa (1900 kantorów w 140 miastach, ładuje się poniżej sekundy), Mebloweporady (ponad 400 poradników, własne wtyczki), Galabau Darius (konfigurator wyceny ogrodzeń dla firmy z Niemiec), Kancelaria Maria Piontek (strona kancelarii na WordPressie).
4. Co odróżnia moją pracę: kod piszę sam, bez kreatorów stron w nowych projektach (Elementor, Divi), własny motyw z edycją sekcji, własne wtyczki zamiast stosu dodatków (ponad 40 w 9 serwisach), strona przygotowana pod wyszukiwarki AI (dane strukturalne, FAQ, jasne odpowiedzi).
5. Dostępność: strony projektuję pod czytelność i obsługę klawiaturą, a dla firm, które tego potrzebują, robię audyt dostępności WCAG (link niżej). Bez obietnic zgodności prawnej.
6. Blok nie może dryfować w ogólny poradnik: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy wycenie pytam…”). Dodaj w bloku JEDNĄ tabelę Markdown: rodzaj strony | dla kogo | technologia | typowy termin (tylko terminy z FAKTÓW).
7. Usuń zdania-definicje i asekuracje („nie zakładam z góry”, „tam, gdzie mają zastosowanie”). Mniej „może”, więcej „robię”.
8. Ta strona jest hubem: nie przepisuj szczegółów stron WordPress, WooCommerce i Next.js, tylko odsyłaj do nich.

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: tworzenie-stron-www ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków, z frazą „tworzenie stron www”)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4)
PROCES:
- Tytuł: … | Treść: … (dokładnie 5 kroków, jak obecnie)
FAQ:
- P: … | O: … (dokładnie 12 pytań; zachowaj sens obecnych 11, możesz przeredagować; dodaj „Czy przeniesiesz moją obecną stronę bez utraty ruchu z Google?” z odpowiedzią bez obietnicy zachowania pozycji)
CTA: … (jedno krótkie zdanie)

=== BLOK: tworzenie-stron-www ===
# [nagłówek bloku z frazą „tworzenie stron www” lub „strona internetowa dla firmy”]
[intro: 2 akapity]
## [sekcja] (7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona, łącznie 4: [WordPress](/uslugi/tworzenie-stron-wordpress), [Next.js](/uslugi/aplikacje-nextjs), [WooCommerce](/uslugi/sklepy-internetowe-woocommerce), [od czego zależy cena strony www](/blog/ile-kosztuje-strona-www-2026)
Blok, łącznie 3: [Kantorymapa](/projekty/kantorymapa), [pełna lista projektów](/projekty), [audyt dostępności WCAG](/audyt-wcag)

## Twarde zasady
- Długość: strona 650-850 słów bez FAQ, blok 1300-1700 słów.
- Zero kwot w złotych. Terminy tylko z FAKTÓW.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w fakty-kanoniczne.md, w FAKTACH niżej i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa (wersja testowa, wdrożenie). Żargon (LCP, Lighthouse) tylko z krótkim wyjaśnieniem, co daje właścicielowi.
- Jeden głos: „ja” i „Ty”. Bez frazesów („Bez ukrytych kosztów”, „Idealnie”), bez podsumowań.
- FAQ o cenie: nie zaczynaj od „Wycena zależy od”, nazwij jeden główny czynnik kosztu (liczba unikalnych szablonów podstron i integracji).

# FAKTY (poza fakty-kanoniczne.md)
- Ponad 40 własnych wtyczek i mu-pluginów WordPress w 9 serwisach.
- Mebloweporady: strona główna składana własną wtyczką, siedem kalkulatorów.
- Kantorymapa: Next.js, strony miast generowane z danych, kursy aktualizowane codziennie.
- Galabau Darius: klient z Niemiec, Next.js, konfigurator wyceny ogrodzeń na żywo, panel administracyjny.
- Kancelaria Maria Piontek: WordPress, strona kancelarii.
- Robię audyty dostępności WCAG (strona /audyt-wcag).
