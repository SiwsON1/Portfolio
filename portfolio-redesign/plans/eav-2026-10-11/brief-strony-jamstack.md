Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługi „Strony Jamstack dla firm” (marcinsiwonia.pl/uslugi/strony-jamstack) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-strony-jamstack.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”.
METATITLE i H1 przepisz BEZ ZMIAN z pliku (fraza główna zostaje).

## Anty-kanibalizacja (ważne)
Na stronie są osobne usługi: tworzenie stron Next.js (główna strona Next.js: strona lub aplikacja firmowa od zera), headless WordPress, aplikacje React (panele za logowaniem), strony Jamstack (statyczne strony z CMS), outsourcing Next.js (dla startupów i zespołów), nowoczesne strony internetowe (design, animacje, dostępność), strona internetowa dla małej firmy (prosty zakres, WordPress), tworzenie stron www (ogólna). Ta strona trzyma się TYLKO swojego tematu; inne odeślij jednym zdaniem.

Czytelnik: firma z serwisem treściowym, katalogiem albo stroną firmową, która chce szybkości, bezpieczeństwa i małego utrzymania, a treść zmienia się rzadziej niż raz na godzinę.
Frazy wspierające: Jamstack, strona statyczna, static site generation, Astro, headless CMS, Sanity, Strapi.

## Audyt EAV
Encja: usługa zbudowania strony Jamstack (podstrony generowane wcześniej, treść z CMS lub bazy). Predykaty: zbuduję, połączę z CMS, wygeneruję podstrony z danych, wdrożę.
1. Ludzki ton: co zyskuje właściciel (szybkość, brak wtyczek do aktualizowania, mniej rzeczy, które mogą się zepsuć) i czego nie ma (zmiana treści wymaga przebudowy strony, publikacja trwa chwilę; brak funkcji „na żywo” bez dodatkowego kodu).
2. Konkrety z FAKTÓW z liczbami: cojestpolskie.pl (Astro, ponad 900 marek, ponad 1700 podstron z jednej bazy), owodzie.pl i Dobry Pupil (Astro, własne).
3. Atrybuty z wartościami: Astro przy serwisach statycznych z danych, Next.js gdy część stron musi być dynamiczna; CMS Sanity lub Strapi; hosting Vercel albo VPS; Lighthouse 90+ i LCP poniżej 2,5 s; mapa strony i dane strukturalne generowane razem ze stronami; formularze przez osobną usługę lub funkcję serwerową.
4. Termin: strona firmowa 4-6 tygodni; serwis z danych po rozpoznaniu. Koszt bez kwot, główny czynnik: liczba typów stron i źródeł danych.
5. Blok: jedna tabela „Jamstack, WordPress, aplikacja Next.js: kiedy który”.

# FAKTY (poza fakty-kanoniczne.md)
- cojestpolskie.pl: Astro, ponad 900 marek, ponad 1700 podstron z jednej bazy, research AI z kontrolą w KRS i CRBR.
- owodzie.pl, Dobry Pupil: własne serwisy w Astro.

## Linki
Strona, łącznie 2: [czym jest Jamstack](/blog/jamstack-co-to-jest), [cojestpolskie.pl](/projekty/cojestpolskie)
Blok, łącznie 1: [czym jest static site generation](/blog/static-site-generation-co-to)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: strony-jamstack ===
METATITLE: (bez zmian, przepisz z pliku)
METADESCRIPTION: … (140-155 znaków, z frazą główną)
H1: (bez zmian, przepisz z pliku)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4, jak obecne bullets)
PROCES:
- Tytuł: … | Treść: … (dokładnie 4 kroków, jak obecnie, tytuły bez numeracji)
FAQ:
- P: … | O: … (dokładnie 11; zachowaj sens obecnych, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: strony-jamstack ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Twarde zasady
- Długość: strona 650-900 słów bez FAQ, blok 1300-1700 słów.
- Zero kwot w złotych, zero statystyk rynkowych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon tylko z krótkim wyjaśnieniem, co daje właścicielowi firmy.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- Linki Markdown dokładnie w podanej postaci, każdy najwyżej raz; w INTRO, KORZYŚCIACH i BLOKU (w FAQ bez linków). Nie gub linków.
- Każda sekcja bloku kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”), żeby blok nie dryfował w ogólny poradnik.
