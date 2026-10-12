Użyj skilla Mistrz Blogowania.

Zadanie: napisz od nowa wpis blogowy na blogu freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl). Obecny wpis jest cienki (350 słów, lista kroków w żargonie) i podaje kwoty oraz terminy bez pokrycia: wszystkie usuń, nie zastępuj ich innymi wymyślonymi. Zachowaj to, co w obecnym wpisie jest merytorycznie wartościowe. Pierwsza osoba (Marcin), czytelnik: właściciel firmy albo osoba decydująca o stronie, częściowo techniczna.

FORMAT WYNIKU (dokładnie tak, bez komentarzy):
=== WPIS: [slug] ===
TITLE: … (bez roku, bez pauz, maks. 60 znaków)
METATITLE: … (maks. 60 znaków, fraza na początku)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania: odpowiedź na pytanie z tytułu w pierwszym zdaniu)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; jeśli tabela, to w Markdown z nagłówkiem]
## [nagłówek sekcji 2]
… (5-7 sekcji)
FAQ:
- P: … | O: … (5 pytań, odpowiedź 2-4 zdania)

Zasady: 1600-2200 słów bez FAQ. Każda liczba z sekcji FAKTY albo usunięta. Bez em-dashy i półpauz. Nagłówki zdaniowe, informacyjne. Linki wewnętrzne w Markdown [tekst](/adres), maks. 3 w treści. Bez podsumowania „Podsumowując” i bez wezwania do kontaktu na końcu.

# ZASADY STYLU (z audytu serwisu)
## Część 6. Dziesięć zasad stylu do briefu przepisywania

1. **H1 = co + dla kogo, lead = co + dla kogo + gdzie.** Zero sloganów w H1 („Design-led, nie stack-led”, „Strona działa, Ty pracujesz”). W leadzie jedno zdanie o miejscu: „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”
2. **Każda liczba ma pokrycie** w realizacji, pomiarze albo tabeli liczb kanonicznych. Bez statystyk rynkowych bez źródła (30%, 70%, „większość agencji liczy 30-50 ludzi”), bez superlatywów („najszybsza technologia”, „Awwwards”, „<1s globalnie”) i bez obietnic rankingów.
3. **Polskie słowo, gdy istnieje**: własny motyw (nie custom theme), na zamówienie (nie custom/customowy), wydajność (nie performance), wersja testowa (nie staging), wdrożenie (nie deploy), rozpoznanie (nie discovery), prototyp (nie proof of concept), mała firma (nie SME). Nazwy produktów (Next.js, WooCommerce, BaseLinker) zostają.
4. **Żargon tylko z tłumaczeniem korzyści.** Jeśli pada LCP, ISR, CDN, schema, to w tym samym zdaniu po ludzku, co to daje właścicielowi. Żadnego kodu w treści (`color: peach`, `prefers-reduced-motion`), żadnych strzałek i plusów zamiast spójników.
5. **Jeden głos: „ja” i „Ty”.** Nie „klient widzi”, nie „dobieramy” przy solo pracy, nie bezosobowe „Hosting dobierzesz”, „Otrzymasz”. Na stronach branżowych konsekwentnie „Ty”, bez przeskoków na „Wy”.
6. **Fraza główna raz w H1 i raz w pierwszym akapicie**, nie jako otwarcie dwóch kolejnych akapitów. Pytania FAQ tak, jak pyta człowiek o swoją jedną stronę („Ile potrwa strona dla mojego hotelu?”), nie „tworzenie stron dla hoteli i pensjonatów”.
7. **Bez półpauz i pauz w prozie i tytułach meta.** Zamiast „—” dwukropek, przecinek lub kropka. Zakresy liczbowe jako „od 4 do 6 tygodni” albo „4-6 tygodni” konsekwentnie; ułamki z przecinkiem („2,5 s”).
8. **Zróżnicowany rytm bez tików.** Nie wstawiać krótkiego zdania-puenty w to samo miejsce każdej karty, nie zaczynać FAQ o cenie od „Wycena zależy od”, nie kończyć odpowiedzi zdaniem „Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem”. Każda odpowiedź o cenie nazywa jeden główny czynnik kosztu dla tej usługi (jak dobre przykłady: „Najwięcej waży silnik rezerwacji”, „wycenia się przez warianty”).
9. **Dowód zamiast deklaracji.** Każda strona usługi ma jeden nazwany projekt z jednym konkretem (co było, co zrobiłem, co wyszło). Tam, gdzie realizacji nie ma (influencerzy, streamerzy, AI), mówimy to prosto jednym zdaniem i nie nadajemy sekcji nagłówka „które zrobiłem”.
10. **Uczciwe granice, bez frazesów.** Wyciąć „Bez ukrytych kosztów”, „Zero niespodzianek”, „Bez ściemy”, „Idealnie”, „Dobra wiadomość”, aforyzmy i przytyki do konkurencji. Zostawić i rozwijać to, co działa: sekcje „notFor”, „Kiedy WooCommerce nie będzie dobrym wyborem”, „Co jeśli efektu nie będzie”, szczere zastrzeżenia o migracji i Google. Wzorcem tonu jest strona BaseLinker i lead gabinetów.




UWAGA: zero kwot w złotych i zero stałych terminów (obecne „4-6 tygodni, 18-30 tys.” usuń). Termin i koszt: nazwij, od czego zależą (liczba adresów do przeniesienia, typy treści, formularze i integracje, czy WordPress zostaje jako panel). W leadzie NIE pisz, skąd pracuję. Załączony plik fakty-kanoniczne.md to fakty o autorze.

# TEN WPIS: migracja-wordpress-na-nextjs
Fraza: „migracja WordPress na Next.js”. Czytelnik: właściciel strony na WordPressie, który rozważa przejście na Next.js i boi się utraty ruchu z Google. Kąt: co trzeba zaplanować, żeby migracja nie zgubiła adresów i ruchu, oraz kiedy lepiej NIE migrować (np. gdy strona jest szybka i wystarcza, gdy redakcja potrzebuje wtyczek WordPressa, sklep WooCommerce). Dwie drogi: headless (WordPress zostaje jako panel do treści, Next.js wyświetla stronę) albo pełne przeniesienie treści do innego CMS (np. Sanity). Tytuł bez roku, TITLE i METATITLE z frazą na początku.
Sekcje (5-7): kiedy migracja ma sens, a kiedy nie; headless czy pełne przeniesienie; spis adresów i mapa przekierowań (z tabelą: element starej strony | co z nim robię przy migracji, np. wpisy, strony, kategorie i tagi, obrazki, formularze, wtyczki SEO, przekierowania już istniejące); przeniesienie treści i elementów, o których się zapomina (formularze, krótkie kody wtyczek w treści, wersje językowe, adresy z polskimi znakami); start i pierwsze tygodnie po zmianie (Search Console, błędy 404, mapa strony, sprawdzanie cache); czego nie obiecuję.

FAKTY ZEWNĘTRZNE (pewne, możesz podać źródło słownie, bez linków zewnętrznych):
* Google (dokumentacja o przenoszeniu witryny ze zmianą adresów URL): przygotuj mapę starych adresów na nowe, ustaw stałe przekierowania po stronie serwera (301 lub 308), zaktualizuj linki wewnętrzne i mapę witryny; po przeniesieniu pozycje mogą się przejściowo wahać; przekierowania zostaw na długo, Google zaleca co najmniej rok.
* Narzędzie „Zmiana adresu” w Search Console dotyczy tylko zmiany domeny; przy zmianie samej technologii na tej samej domenie się go nie używa.
* Next.js: przekierowania ustawia się w pliku next.config w funkcji redirects(); opcja permanent: true zwraca kod 308, który Google traktuje jak stałe przekierowanie (jak 301).
* WordPress ma wbudowane REST API, a wtyczka WPGraphQL dodaje GraphQL; przez nie Next.js pobiera treści z WordPressa w modelu headless.

FAKTY Z MOJEJ PRACY (tylko te; nie mam jeszcze wdrożonej migracji WordPress na Next.js dla klienta i napisz to wprost jednym zdaniem, bez nagłówka „moje migracje”):
* Serwis windykacyjny na WordPressie (bez nazwy): Search Console pokazywał 106 błędów 404 ze starych adresów miast, w których generator zgubił literę „ł” (np. „putusk” zamiast „pultusk”). Przygotowałem mapę 163 par adresów (161 dawało 404, 2 miały już przekierowanie) i wdrożyłem stałe przekierowania 301. Google wracał do starych adresów jeszcze kilka tygodni po zmianie, więc przekierowania muszą zostać.
* Ten sam serwis: wtyczka cache podawała odwiedzającym i Google stare tytuły na 39 z 93 wpisów, choć w panelu były nowe. Wniosek dla migracji: po starcie sprawdzam, co naprawdę dostaje Google, a nie co widać w panelu.
* Moja strona marcinsiwonia.pl jest w Next.js (wcześniej była w innej technologii, Create React App). Wycofane wpisy przekierowuję stałymi przekierowaniami w next.config na najbliższe tematycznie strony, np. stary wpis o tworzeniu stron Next.js na stronę usługi.
* Kantorymapa (Next.js, własny produkt): 1900 kantorów w 140 miastach, podstrony generowane z jednej bazy, ładuje się poniżej sekundy. Możesz użyć jako przykładu, co Next.js daje przy wielu podstronach z danych.

Linki (maks. 3 w treści, dokładnie w tej postaci): [headless WordPress](/uslugi/headless-wordpress), [tworzenie stron Next.js](/uslugi/aplikacje-nextjs), [Next.js czy WordPress](/blog/next-js-15-vs-wordpress-2026)

Na górze wyniku, pod linią === WPIS: migracja-wordpress-na-nextjs ===, dodaj też linie:
KEYWORD: migracja WordPress na Next.js
