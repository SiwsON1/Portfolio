Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługi „Tworzenie stron Next.js” (marcinsiwonia.pl/uslugi/aplikacje-nextjs) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-aplikacje-nextjs.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel firmy albo osoba od produktu, której strona na WordPressie zwolniła pod ciężarem wtyczek, albo która potrzebuje czegoś więcej niż strony: kalkulatora, panelu, setek stron z danych, aplikacji z logowaniem.

FRAZA GŁÓWNA ZOSTAJE: „tworzenie stron Next.js” (METATITLE i H1 przepisz BEZ ZMIAN z pliku, nagłówki sekcji z pola headings zostają). Frazy wspierające: strona w Next.js, aplikacja Next.js, programista Next.js Wrocław, Next.js dla firm.

## Anty-kanibalizacja (ważne)
Na stronie są też osobne usługi: headless WordPress (WordPress jako panel + Next.js), aplikacje React (panele i aplikacje bez SEO), strony Jamstack (statyczne strony z CMS), outsourcing Next.js (współpraca z software house i startupami). Ta strona jest GŁÓWNA dla Next.js: strona lub aplikacja firmowa od zera. Nie rozpisuj szczegółowo tamtych tematów, tylko odeślij jednym zdaniem.

## Audyt EAV (popraw te punkty)
Encja: usługa zaprojektowania i zbudowania strony lub aplikacji firmowej w Next.js. Predykaty: zaprojektuję, zbuduję, połączę z bazą i płatnościami, wdrożę na Vercel lub VPS, przeniosę z WordPressa.
1. Ludzki ton: każda sekcja mówi, co z tego ma firma, a nie jak działa framework.
2. Konkrety z realizacji (FAKTY niżej) z liczbami: Kantorymapa, Galabau, Ceny Notarialne.
3. Atrybuty z wartościami: App Router, React, TypeScript, Tailwind; logowanie Clerk lub NextAuth; Postgres z Prisma lub Drizzle; płatności Stripe; CMS Sanity lub Strapi albo WordPress jako panel; hosting Vercel albo własny VPS; Lighthouse 90+ na telefonie i LCP poniżej 2,5 s; strony generowane z danych (programmatic SEO); dane strukturalne; GA4 po zgodzie na cookies; przekierowania 301 przy przenosinach z WordPressa.
4. Termin: aplikacja lub MVP w Next.js zwykle 6-12 tygodni. Koszt bez kwot: główny czynnik to liczba funkcji z logiką (logowanie, płatności, panel, integracje), nie liczba podstron.
5. Kiedy NIE Next.js: prosta wizytówka, którą chcesz edytować sam w znanym panelu, a nie potrzebujesz funkcji: wtedy uczciwie polecam WordPress.
6. Blok: jedna tabela „WordPress czy Next.js: kiedy który”, bez cen.
7. Bez superlatywów („najszybsza technologia”), mnożników szybkości i obietnic pozycji.

# FAKTY (poza fakty-kanoniczne.md)
- Kantorymapa (mój produkt, Next.js): 1900 kantorów w 140 miastach, kursy NBP aktualizowane codziennie, strony miast generowane z danych, ładuje się poniżej sekundy.
- Galabau Darius (klient z Niemiec, Next.js, 2026): konfigurator wyceny ogrodzeń liczący cenę na żywo, galeria realizacji, panel admina z logowaniem Clerk, baza przez Prisma, dane strukturalne LocalBusiness, Impressum i Datenschutz, hosting Vercel.
- Ceny Notarialne (Next.js): ceny transakcyjne z rejestru RCN, mapy MapLibre, tysiące podstron lokalizacji.
- Ta strona (marcinsiwonia.pl) też działa na Next.js.

## Linki
Strona, łącznie 3: [Kantorymapa](/projekty/kantorymapa), [Galabau Darius](/projekty/galabau-darius), [headless WordPress](/uslugi/headless-wordpress)
Blok, łącznie 1: [migracja WordPressa na Next.js](/blog/migracja-wordpress-na-nextjs)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: aplikacje-nextjs ===
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
- P: … | O: … (dokładnie 12; zachowaj sens obecnych, możesz przeredagować)
CTA: … (jedno krótkie zdanie)

=== BLOK: aplikacje-nextjs ===
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
