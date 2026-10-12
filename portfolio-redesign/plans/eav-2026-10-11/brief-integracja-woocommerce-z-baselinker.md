Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługową „Integracja WooCommerce z BaseLinker” (marcinsiwonia.pl/uslugi/integracja-woocommerce-z-baselinker) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-integracja-woocommerce-z-baselinker.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel sklepu WooCommerce, który sprzedaje też na Allegro albo z hurtowni i ma dość ręcznego przepisywania zamówień i stanów, albo ma integrację, która psuje mu zamówienia.

FRAZA GŁÓWNA ZOSTAJE: „integracja WooCommerce z BaseLinker” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: BaseLinker WooCommerce, połączenie WooCommerce z BaseLinkerem, synchronizacja stanów WooCommerce, WooCommerce Allegro BaseLinker, integracja z hurtownią.

## Audyt EAV (popraw te punkty)
Encja: usługa integracji sklepu WooCommerce z BaseLinkerem (Base.com). Predykaty: połączę, skonfiguruję, powiążę, przetestuję, naprawię, zdiagnozuję.
Obecny tekst jest poprawny, ale ogólny i asekuracyjny („może”, „zależy”, „jeśli zostanie sprawdzone”). Brakuje atrybutów z wartościami i realnych przypadków. Dodaj (fakty niżej):
1. Mechanizm połączenia po nazwie: REST API WooCommerce, klucz z uprawnieniami, Magazyn BaseLinker jako pośrednik, powiązania magazynowe z hurtownią, powiązanie statusów zamówień.
2. Model z hurtownią opisany konkretnie (3 warstwy: magazyn hurtowni, Magazyn BaseLinker z wybranymi produktami, sklep podłączony do Magazynu BaseLinker, nie do hurtowni). Przykład Kosmoteki.
3. Diagnoza i naprawa zepsutej integracji jako osobna wartość usługi: przypadek LumiKids (zamówienia za pobraniem anulowały się same). To jest najmocniejszy dowód, opisz go po ludzku, bez szczegółów technicznych ponad to, co w FAKTACH.
4. Integracja przy przebudowie sklepu: przypadek sklepu z częściami (nie nazywaj go z nazwy): nowy katalog pojazdów nie może zostać nadpisany przez synchronizację kategorii z BaseLinkera.
5. Podział ról bez złudzeń: Base.com to pośrednik, nie daje produktów; każda hurtownia wymaga osobnej umowy z Twoją firmą i jej akceptacji (zwykle kilka dni roboczych, czasem dłużej).
6. Mniej „może”, więcej „robię”, „sprawdzam”, „ustawiam”. Bez obietnic, których nie ma w FAKTACH.
7. Blok nie może dryfować w poradnik o BaseLinkerze: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy integracji ustawiam…”). Zostaw tabelę o kierunku synchronizacji (możesz ją poprawić).
8. Każdy klient (Kosmoteka, LumiKids) nazwany najwyżej 2 razy na całej stronie (strona + blok).

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: integracja-woocommerce-z-baselinker ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków, z frazą „integracja WooCommerce z BaseLinker”)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4)
PROCES:
- Tytuł: … | Treść: … (dokładnie 4 kroki, jak obecnie)
FAQ:
- P: … | O: … (dokładnie 12 pytań; zachowaj sens obecnych 11, możesz przeredagować; dodaj „Zamówienia ze sklepu same zmieniają status albo się anulują. Co jest nie tak?”)
CTA: … (jedno krótkie zdanie)

=== BLOK: integracja-woocommerce-z-baselinker ===
# [nagłówek bloku z frazą „integracja WooCommerce z BaseLinker” lub „BaseLinker WooCommerce”]
[intro: 2 akapity]
## [sekcja] (7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona, łącznie 4: [Kosmoteka](/projekty/kosmoteka), [LumiKids](/projekty/lumikids), [wdrożenie sklepu WooCommerce](/uslugi/sklepy-internetowe-woocommerce), [własna wtyczka](/uslugi/tworzenie-wtyczek-wordpress)
Blok, łącznie 2: [czym jest BaseLinker](/blog/baselinker-co-to-jest), [opieka nad sklepem WordPress](/uslugi/opieka-wordpress)

## Twarde zasady
- Długość: strona 650-850 słów bez FAQ, blok 1200-1600 słów.
- Zero kwot w złotych, zero cen abonamentu Base. Terminy: integracja ma termin po rozpoznaniu, bez stałej liczby.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w załączonym pliku fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon (REST API, SKU, EAN) tylko z krótkim wyjaśnieniem, co daje właścicielowi.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- FAQ o cenie: nie zaczynaj od „Wycena zależy od”, nazwij jeden główny czynnik kosztu (liczba kanałów i hurtowni oraz stan danych produktowych).

# FAKTY (tylko z tego korzystaj, poza fakty-kanoniczne.md)
## Jak działa połączenie
- BaseLinker łączy się ze sklepem przez REST API WooCommerce: w sklepie tworzy się klucz z uprawnieniami, BaseLinker pobiera zamówienia i może zapisywać stany, ceny i statusy.
- Statusy zamówień w BaseLinkerze wiąże się ze statusami sklepu w ustawieniach integracji; zmiana statusu płynie z BaseLinkera do sklepu. Złe powiązanie jednego statusu potrafi zepsuć zamówienia w sklepie.
- Model z hurtownią: (1) magazyn hurtowni z pełnym katalogiem dostawcy, tylko do podglądu; (2) Magazyn BaseLinker, do którego kopiuje się wybrane produkty z powiązaniem magazynowym do hurtowni, więc stany i ceny przychodzą z hurtowni same; (3) sklep podłączony do Magazynu BaseLinker, nie bezpośrednio do hurtowni. Inaczej do sklepu trafia cały katalog dostawcy. Ten sam schemat działa dla kilku hurtowni naraz.
- Base.com jest pośrednikiem: daje panel, synchronizację i przekazywanie zamówień, nie daje produktów. Każda hurtownia wymaga osobnej umowy z firmą klienta (dane firmy, NIP), akceptacja zwykle trwa kilka dni roboczych, czasem dłużej, a hurtownia może odmówić.
- Przy kilku narzędziach zapisujących stany (BaseLinker, osobna synchronizacja z innym programem) trzeba ustalić jedno źródło, bo nadpisują się nawzajem.
## Kosmoteka (sklep WooCommerce z teleskopami, dystrybutor Levenhuk)
- Katalog hurtowni zostaje w jej magazynie, do sklepu trafiają wybrane pozycje przez Magazyn BaseLinker; stany i ceny aktualizują się z pliku hurtowni.
## LumiKids (sklep WooCommerce z odzieżą dziecięcą, sprzedaż też na Allegro, zamówienia obsługiwane w BaseLinkerze)
- Problem: zamówienia za pobraniem anulowały się same i klientki dostawały mail o anulowaniu. W panelu sklepu widać było tylko „system”.
- Diagnoza: z logu serwera wyszło, że 1-3 minuty po złożeniu zamówienia BaseLinker przez REST API cofał status na „oczekujące na płatność”, a WooCommerce po 60 minutach anulował takie zamówienie jako nieopłacone.
- Naprawa: własna mała wtyczka blokuje cofnięcie statusu dla zamówień za pobraniem i dopisuje notatkę do zamówienia, a WooCommerce nie anuluje już pobrań jako nieopłaconych; do poprawy po stronie BaseLinkera wskazane powiązanie statusów. Test potwierdził, że bez wtyczki błąd się powtarza, z wtyczką nie.
- Do tego monitoring zamówień: raport auto-anulowań i cofnięć statusu z 30 dni.
## Sklep z częściami samochodowymi (przebudowa w toku, NIE podawaj nazwy)
- Ponad 5 tysięcy produktów, sprzedaż też na Allegro, zamówienia przez BaseLinkera. Przebudowa wyglądu i katalogu bez ruszania integracji.
- Kategorie przyszły z Allegro i były chaotyczne. Nowy katalog marka, model, grupa części jest osobną taksonomią, bo gdyby był zwykłą kategorią WooCommerce, synchronizacja z BaseLinkera mogłaby go nadpisać.
- Wyszukiwarka po numerze OEM czyta numery z atrybutów produktu.
## Ogólnie
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach.
- Konto Base zakłada i opłaca firma klienta; po wdrożeniu klient może odebrać mi dostęp.
