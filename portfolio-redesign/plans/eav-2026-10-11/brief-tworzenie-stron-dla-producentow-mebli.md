Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę branżową „Tworzenie stron dla producentów mebli” (marcinsiwonia.pl/tworzenie-stron-dla-producentow-mebli) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-tworzenie-stron-dla-producentow-mebli.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel lub handlowiec w fabryce mebli, stolarni albo u producenta akcesoriów, który dostaje zapytania bez wymiarów i materiałów, a katalog trzyma w PDF-ach.

FRAZA GŁÓWNA ZOSTAJE: „tworzenie stron dla producentów mebli” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające do wplecenia naturalnie: strona internetowa dla producenta mebli, katalog mebli online, strona dla stolarni, katalog B2B, formularz wyceny mebli na wymiar.

## Audyt EAV (popraw te punkty)
Encja: usługa zaprojektowania i wdrożenia strony z katalogiem produktów producenta mebli. Predykaty: zaprojektuję katalog, zaimportuję dane, przygotuję formularz wyceny, wdrożę strefę B2B, przygotuję wersje językowe.
1. Ludzki ton zamiast katalogu cech: każda sekcja mówi, co zyskuje producent (lepsze zapytania, mniej pytań do handlowca, porządek w danych).
2. Konkret z realizacji (tylko FAKTY niżej). Nie wymyślaj liczby produktów ani wyników.
3. Atrybuty z wartościami: karta produktu z wymiarami, materiałami, wykończeniami i plikami do pobrania (karta techniczna, model), filtry po materiale i wymiarze, import danych z arkusza zamiast ręcznego wpisywania, formularz wyceny z wymiarami i zdjęciem, osobna ścieżka B2B (ceny lub pliki po zalogowaniu), wersje językowe z osobnymi adresami dla Polski i Niemiec, Lighthouse 90+ na telefonie i LCP poniżej 2,5 s mimo dużych zdjęć, dane strukturalne produktu, GA4 po zgodzie na cookies.
4. Termin 6-8 tygodni zostaje (pricing.time bez zmian). Koszt bez kwot: liczba produktów i wariantów, import danych, filtry, logowanie kontrahentów, wersje językowe.
5. Blok nie dryfuje w ogólny poradnik: każda sekcja kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”). Jedna tabela: katalog, sklep czy formularz wyceny, kiedy który model.
6. Bez obietnic „więcej zapytań”, pozycji w Google i statystyk rynkowych.

# FAKTY (poza fakty-kanoniczne.md)
- Multikon (WordPress, 2023): producent akcesoriów meblowych, nóg i stelaży krzeseł; strona prezentuje ofertę produktową.
- Stys-Glass (WordPress, 2023): hartowanie szkła, balustrady i lustra na wymiar; oferta wykonywana na wymiar, więc zapytanie musi zebrać wymiary.
- Mebloweporady.pl (mój serwis, WordPress): ponad 400 poradników o meblach i wnętrzach, siedem kalkulatorów (np. farby, paneli, płytek, odległości od telewizora) napisanych w JavaScripcie, strona główna generowana własną wtyczką z najnowszych wpisów. Pokazuje, że znam pytania klientów meblowych.
- Galabau Darius (Next.js, klient z Niemiec): konfigurator wyceny ogrodzeń liczący cenę na żywo, z panelem admina. Przykład, że wycena na wymiar może liczyć się na stronie, gdy cennik ma stałe reguły.

## Linki
Intro strony, łącznie 3: [WooCommerce](/uslugi/sklepy-internetowe-woocommerce), [serwis Multikon](/projekty/multikon), [realizację Stys-Glass](/projekty/stys-glass)
Blok, łącznie 1: [aplikację Next.js](/uslugi/aplikacje-nextjs)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== BRANZA: tworzenie-stron-dla-producentow-mebli ===
METATITLE: (bez zmian)
METADESCRIPTION: … (140-155 znaków)
H1: (bez zmian)
LEAD: … (1-2 zdania; drugie dokładnie jak w obecnym lead, zdanie „Pracuję z Wrocławia, zdalnie…”)
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

=== BLOK: tworzenie-stron-dla-producentow-mebli ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Twarde zasady
- Długość: strona 900-1200 słów bez FAQ, blok 1200-1600 słów.
- Zero kwot w złotych, zero statystyk rynkowych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon tylko z krótkim wyjaśnieniem.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- Linki Markdown dokładnie w podanej postaci, każdy najwyżej raz; TYLKO w INTRO i w BLOKU (w PAINS/MUSTHAVE/STACK/DELIVERABLES/FAQ bez linków). Nie gub linków.
- Kroki PROCES bez numeracji w tytułach.
