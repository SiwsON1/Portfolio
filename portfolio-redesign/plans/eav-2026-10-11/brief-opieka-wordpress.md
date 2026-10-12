Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługową „Opieka nad stroną WordPress” (marcinsiwonia.pl/uslugi/opieka-wordpress) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-opieka-wordpress.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel firmy albo sklepu na WordPressie, bez własnego informatyka, który boi się aktualizacji, miał już awarię albo przejmuje stronę po poprzednim wykonawcy.

FRAZA GŁÓWNA ZOSTAJE: „opieka nad stroną WordPress” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: opieka WordPress, administracja stroną WordPress, opieka nad sklepem WooCommerce, aktualizacje WordPress, abonament na opiekę.

## Audyt EAV (popraw te punkty)
Encja: usługa stałej opieki technicznej nad WordPressem i WooCommerce. Predykaty: przejmę, zaktualizuję, naprawię, zabezpieczę, monitoruję, zamów.
Obecny tekst opisuje zakres poprawnie, ale ogólnie: każda firma pisze „aktualizacje, kopie, monitoring”. Brakuje dowodów, czyli konkretnych problemów, które znalazłem i naprawiłem. Dodaj (tylko z FAKTÓW niżej):
1. Przypadki z wartościami: zabezpieczenie serwisu windykacyjnego po poprzedniej agencji (otwarta rejestracja kont przez błędną wartość w bazie, konta skanerów, otwarty XML-RPC, widoczny login administratora, spam w komentarzach), cache podający Google stare tytuły na 39 z 93 wpisów, sklep z błędem 500 na kartach produktów po zmianie we wtyczce, zamówienia za pobraniem anulowane przez integrację, monitoring zamówień. Nie nazywaj serwisu windykacyjnego z nazwy.
2. Przejęcie strony po innym wykonawcy jako osobny atrybut: co sprawdzam w pierwszym przeglądzie (konta i role, wtyczki spoza oficjalnego repozytorium, otwarte punkty dostępu, cache, kopie, hosting).
3. Kopie zapasowe konkretnie: kopia poza serwerem sklepu, bo kopia na tym samym serwerze ginie razem z nim.
4. Aktualizacje: najpierw kopia, potem sprawdzenie strony po aktualizacji, możliwość powrotu.
5. Mniej „mogę”, więcej „robię”, „sprawdzam”. Bez obietnic czasu reakcji, których nie ma w obecnej treści.
6. Blok nie może dryfować w poradnik: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „W abonamencie sprawdzam…”). Dodaj w bloku JEDNĄ tabelę Markdown: problem znaleziony przy przejęciu strony | czym groził | co zrobiłem (z przypadków z FAKTÓW).
7. Zachowaj zasady abonamentu z obecnej treści (bank godzin, bez umowy na rok, większe prace wyceniane osobno). Nie zmieniaj ich i nie dopisuj nowych.
8. Kosmoteka i LumiKids: każde nazwane najwyżej raz na całej stronie.

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: opieka-wordpress ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków, z frazą „opieka nad stroną WordPress”)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4)
PROCES:
- Tytuł: … | Treść: … (dokładnie 3 kroki, jak obecnie, bez numerów w tytułach)
FAQ:
- P: … | O: … (dokładnie 12 pytań; zachowaj sens obecnych 12, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: opieka-wordpress ===
# [nagłówek bloku z frazą „opieka nad stroną WordPress”]
[intro: 2 akapity]
## [sekcja] (7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona, łącznie 3: [tworzenia stron WordPress](/uslugi/tworzenie-stron-wordpress), [przyspieszeniem strony WordPress](/uslugi/przyspieszanie-stron-wordpress), [LumiKids](/projekty/lumikids)
Blok, łącznie 2: [co zrobić po instalacji WordPressa](/blog/co-zrobic-po-instalacji-wordpressa), [integracji WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker)

## Twarde zasady
- Długość: strona 600-800 słów bez FAQ, blok 1200-1600 słów.
- Zero kwot w złotych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon (XML-RPC, cache, REST API) tylko z krótkim wyjaśnieniem, co oznacza dla właściciela.
- Jeden głos: „ja” i „Ty”. Bez frazesów i straszenia, bez podsumowań.
- FAQ o cenie: nie zaczynaj od „Wycena zależy od”, nazwij jeden główny czynnik kosztu (zakres odpowiedzialności: sklep z płatnościami i integracjami czy strona firmowa).

# FAKTY (poza fakty-kanoniczne.md)
## Serwis windykacyjny na WordPressie (przejęty po poprzedniej agencji, NIE podawaj nazwy)
- Powód przeglądu: dużo dziwnego ruchu w statystykach. Włamania nie było, treść i indeks Google czyste.
- Znalezione: w bazie ustawienie rejestracji użytkowników miało przypadkową wartość (adres e-mail po poprzedniej agencji), przez co rejestracja kont była otwarta, choć nikt jej nie włączał; zarejestrowały się 3 konta automatycznych skanerów. Usunięte, rejestracja zamknięta.
- XML-RPC (stary punkt zdalnego dostępu do WordPressa) był w pełni otwarty; popularna wtyczka „wyłączająca” go zostawiała pingbacki; zablokowany cały punkt.
- Login administratora był widoczny publicznie przez listę autorów; zablokowane.
- Komentarze otwarte na 72 wpisach, 17 spamowych komentarzy; zamknięte i usunięte.
- Wcześniej przygotowane zabezpieczenie formularza nigdy nie zostało wgrane na serwer; działała tylko pułapka na boty.
- Osobno: wtyczka cache podawała odwiedzającym i Google stare tytuły na 39 z 93 wpisów, choć w panelu były nowe. Przycisk czyszczenia cache we wtyczce nic nie usuwał; pomogło usunięcie plików cache po dacie zmian. Od tego czasu po każdej rundzie zmian porównuję wersję z cache i bez cache.
## Kosmoteka (sklep WooCommerce)
- Po zmianie we własnej wtyczce od zdjęć część kart produktów zwracała błąd 500 (sklep nie pokazywał większości produktów). Przyczyna znaleziona w logu błędów, poprawka wgrana tego samego dnia, tryb debugowania wyłączony z powrotem.
## LumiKids (sklep WooCommerce, Allegro, BaseLinker)
- Zamówienia za pobraniem anulowały się same; z logu serwera wyszło, że integracja z BaseLinkerem cofała ich status, a WooCommerce po 60 minutach anulował je jako nieopłacone. Naprawione małą wtyczką ochronną, przetestowane.
- Monitoring zamówień: raport z 30 dni (automatyczne anulowania, cofnięte statusy, nieudane płatności) sprawdzany przy każdej pracy nad sklepem.
- Kopie zapasowe: kopia leżąca na tym samym serwerze co sklep ginie razem z serwerem, więc trzeba ją pobierać poza serwer.
## Ogólnie
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach, którymi się opiekuję albo które zbudowałem.
