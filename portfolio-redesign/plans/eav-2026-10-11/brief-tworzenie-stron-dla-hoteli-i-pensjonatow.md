Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę branżową „Tworzenie stron dla hoteli i pensjonatów” (marcinsiwonia.pl/tworzenie-stron-dla-hoteli-i-pensjonatow) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-tworzenie-stron-dla-hoteli-i-pensjonatow.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel pensjonatu, apartamentów albo małego hotelu, który większość rezerwacji dostaje z portali i płaci im prowizję, a jego strona jest wizytówką bez rezerwacji albo działa wolno.

FRAZA GŁÓWNA ZOSTAJE: „tworzenie stron dla hoteli i pensjonatów” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: strona internetowa dla hotelu, strona dla pensjonatu, strona dla apartamentów, rezerwacje bezpośrednie, silnik rezerwacji na stronie.

## Audyt EAV (popraw te punkty)
Encja: usługa zaprojektowania i wdrożenia strony obiektu noclegowego z rezerwacją bezpośrednią. Predykaty: zaprojektuję, połączę z silnikiem rezerwacji, wdrożę, przeniosę, zamów.
Obecny tekst jest dobry i ma dużo atrybutów. Popraw:
1. Ludzki, mniej katalogowy ton: dziś sekcje brzmią jak lista cech. Każda sekcja ma mówić, co zyskuje właściciel obiektu.
2. Konkret z realizacji (tylko FAKTY): Złota Grota (apartamenty z jacuzzi na Starym Mieście we Wrocławiu, apartament 30 m² dla 4 osób i 40 m² dla par, samodzielne zameldowanie, wyszukiwarka terminów na stronie połączona z silnikiem IdoBooking), Maciejanka (pensjonat pod Kobylą Górą, organizacja wydarzeń). Bez wyników sprzedaży, których nie znamy.
3. Mechanizm rezerwacji bezpośredniej nazwany po imieniu: wyszukiwarka dat i liczby gości na stronie przekazuje zapytanie do silnika rezerwacji (np. IdoBooking), silnik pilnuje dostępności i płatności, a channel manager synchronizuje kalendarz z portalami. Nie twierdź, że sam piszę silnik rezerwacji.
4. Atrybuty techniczne z wartościami: Lighthouse 90+ na telefonie i LCP poniżej 2,5 s mimo dużych galerii (WebP/AVIF, rozmiary dopasowane do ekranu), dane strukturalne obiektu, GA4 po zgodzie na cookies z pomiarem kliknięć w rezerwację, wersje językowe, przekierowania 301 przy przenosinach.
5. Termin i cena: termin 5-8 tygodni zostaje (pole pricing.time bez zmian). Opis kosztu bez kwot, główny czynnik: liczba typów pokoi i pakietów oraz integracja z silnikiem rezerwacji.
6. Blok nie może dryfować w poradnik hotelarski: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”). Zostaw tabelę z obecnej sekcji o silniku rezerwacji (możesz ją poprawić).
7. Bez obietnic „więcej rezerwacji”, „mniej prowizji o X%” ani statystyk rynkowych.

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== BRANZA: tworzenie-stron-dla-hoteli-i-pensjonatow ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z obiektami z całej Polski i z Niemiec.”)
INTRO:
[2 akapity]
PAINS:
- Tytuł: … | Treść: … (dokładnie 4)
MUSTHAVE:
- Tytuł: … | Treść: … (dokładnie 6)
STACK:
- Etykieta: … | Treść: … (dokładnie 4, jak obecnie)
PRICING: … (jedno-dwa zdania, główne czynniki kosztu, bez kwot)
DELIVERABLES:
- Etykieta: … | Treść: … (dokładnie 5)
PROCES:
- Tytuł: … | Treść: … (dokładnie 5)
NOTFOR:
- … (dokładnie 3 zdania)
FAQ:
- P: … | O: … (dokładnie 14; zachowaj sens obecnych, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: tworzenie-stron-dla-hoteli-i-pensjonatow ===
# [nagłówek bloku z frazą „strona internetowa dla hotelu” lub „strona dla pensjonatu”]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz; TYLKO w INTRO i w BLOKU, w PAINS/MUSTHAVE/STACK/DELIVERABLES/FAQ bez linków)
Intro strony, łącznie 3: [Apartamenty Złota Grota](/projekty/apartamenty-zlota-grota), [pensjonat Maciejanka](/projekty/maciejanka), [strona WordPress z własnym motywem](/uslugi/tworzenie-stron-wordpress)
Blok, łącznie 1: [opieka nad stroną WordPress](/uslugi/opieka-wordpress)

## Twarde zasady
- Długość: strona 900-1200 słów bez FAQ, blok 1200-1600 słów.
- Zero kwot w złotych, zero prowizji portali w procentach.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon (channel manager, LCP) tylko z krótkim wyjaśnieniem.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.

# FAKTY (poza fakty-kanoniczne.md)
## Apartamenty Złota Grota (Wrocław, WordPress, 2024)
- Apartamenty z prywatnym jacuzzi na Starym Mieście we Wrocławiu; pobyty dla par, city break.
- Apartament 30 m² dla maksymalnie 4 osób (dwa podwójne łóżka, jacuzzi) i apartament 40 m² dla 2 osób (jacuzzi w salonie).
- Samodzielne zameldowanie, rezerwacja online bez pośredników.
- Na stronie wyszukiwarka terminów (data przyjazdu, wyjazdu) połączona z silnikiem rezerwacji IdoBooking; obiekt jest też na Booking.com.
## Pensjonat Maciejanka (WordPress, 2023)
- Trzygwiazdkowy pensjonat pod Kobylą Górą, prezentacja udogodnień i organizacji wydarzeń.
