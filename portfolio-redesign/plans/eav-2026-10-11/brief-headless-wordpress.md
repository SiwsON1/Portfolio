Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługi „Headless WordPress” (marcinsiwonia.pl/uslugi/headless-wordpress) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-headless-wordpress.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: firma, której redakcja lub marketing zna panel WordPressa i nie chce go zmieniać, ale strona jest wolna, obciążona wtyczkami albo ma rosnąć o funkcje, których motyw nie udźwignie.

FRAZA GŁÓWNA ZOSTAJE: „headless WordPress” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające: WordPress i Next.js, WordPress jako CMS, headless CMS, WPGraphQL, REST API.

## Anty-kanibalizacja
Ta strona dotyczy TYLKO modelu: WordPress zostaje panelem treści, front w Next.js. Ogólne tworzenie stron w Next.js ma osobną stronę, a zwykły WordPress z motywem też. Odeślij jednym zdaniem, nie rozpisuj.

## Audyt EAV (popraw te punkty)
Encja: usługa przebudowy lub budowy strony w modelu headless: WordPress jako panel, Next.js jako front. Predykaty: oddzielę front od panelu, połączę przez REST API lub WPGraphQL, przeniosę, wdrożę.
1. Ludzki ton: co zyskuje redakcja (ten sam panel) i firma (szybkość, bezpieczeństwo, swoboda funkcji), a co traci (wtyczki zmieniające wygląd frontu przestają działać, podgląd wymaga konfiguracji, dwa systemy do utrzymania).
2. Atrybuty z wartościami: dane z WordPressa przez REST API albo WPGraphQL; pola ACF jako źródło treści; podgląd szkiców; przebudowa stron po publikacji (ISR, czyli odświeżanie wybranych stron bez przebudowy całości); Yoast lub Rank Math a metadane w Next.js; przekierowania 301; Lighthouse 90+ na telefonie i LCP poniżej 2,5 s; panel WordPress może stać na osobnej subdomenie i nie być publiczny; hosting frontu Vercel albo VPS.
3. Termin po rozpoznaniu (zależy od liczby typów treści i wtyczek, które trzeba zastąpić). Koszt bez kwot: główny czynnik to liczba typów treści i funkcji wtyczek do przeniesienia na front.
4. Uczciwie: kiedy headless się nie opłaca (mała strona firmowa, sklep oparty na wielu wtyczkach WooCommerce, brak budżetu na utrzymanie dwóch części). Wtedy lepszy jest WordPress z własnym motywem.
5. Konkrety tylko z FAKTÓW. Nie twierdź, że wdrożyłem headless WordPress dla klienta.
6. Blok: jedna tabela „klasyczny WordPress a headless WordPress”, bez cen.
7. Bez mnożników szybkości i obietnic pozycji.

# FAKTY (poza fakty-kanoniczne.md)
- Ponad 40 własnych wtyczek i mu-pluginów WordPress w 9 serwisach, więc znam WordPress od strony kodu, nie tylko panelu.
- Kantorymapa (mój produkt, Next.js): 1900 kantorów w 140 miastach, kursy NBP codziennie, ładuje się poniżej sekundy. Przykład frontu w Next.js, nie headless WordPress.
- Ta strona (marcinsiwonia.pl) działa na Next.js.

## Linki
Strona, łącznie 3: [Kantorymapa](/projekty/kantorymapa), [stronę WordPress z własnym motywem](/uslugi/tworzenie-stron-wordpress), [migracja WordPressa na Next.js](/blog/migracja-wordpress-na-nextjs)
Blok, łącznie 1: [czym jest headless CMS](/blog/headless-cms-co-to)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: headless-wordpress ===
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

=== BLOK: headless-wordpress ===
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
