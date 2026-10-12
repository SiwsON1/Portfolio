Użyj skilla Mistrz Blogowania.

Zadanie: napisz od nowa wpis blogowy na blogu freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl). Obecny wpis jest krótki, pisany żargonem i miejscami podaje liczby bez źródła: takie liczby usuń, nie zastępuj ich innymi wymyślonymi. Zachowaj to, co w obecnym wpisie jest merytorycznie wartościowe. Pierwsza osoba (Marcin), czytelnik: właściciel firmy albo osoba decydująca o stronie, częściowo techniczna.

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




UWAGA: zero kwot w złotych i zero statystyk rynkowych bez źródła. Fakty techniczne (nazwy funkcji, wersje, ustawienia) sprawdź w oficjalnej dokumentacji (wordpress.org, developer.wordpress.org, nextjs.org, react.dev, w3.org); jeśli nie masz pewności, opisz ogólnie bez liczb i numerów wersji. Nie polecaj wtyczek, których nie ma w oficjalnym katalogu wordpress.org, chyba że są wymienione w FAKTACH. W leadzie NIE pisz, skąd pracuję. Załączony plik fakty-kanoniczne.md to fakty o autorze; obecny wpis jest w załączonym pliku z treścią obecną. Zachowaj slug i frazę. Wynik dokładnie w formacie wyżej, z linią KEYWORD pod linią === WPIS ===.

# TEN WPIS: co-zrobic-po-instalacji-wordpressa
Fraza: „co zrobić po instalacji WordPressa”. Czytelnik: osoba, która właśnie postawiła WordPressa (sama albo dostała od wykonawcy) i chce go dobrze ustawić. Kąt: czynności w kolejności, każda z krótkim „dlaczego”: bezpieczeństwo (konto administratora, rejestracja, XML-RPC, lista autorów, komentarze), bezpośrednie odnośniki i ustawienia czytania, SEO i mapa witryny, Search Console, kopie poza serwerem, cache i sprawdzenie po wyczyszczeniu, aktualizacje, zgody na cookies, czego nie robić. Sekcje tematyczne, w środku punkty. Tytuł bez liczby czynności.
Linki (maks. 3 w treści, dokładnie w tej postaci): [opieka nad stroną WordPress](/uslugi/opieka-wordpress), [przyspieszenie strony WordPress](/uslugi/przyspieszanie-stron-wordpress), [wtyczki WordPress na start](/blog/must-have-wtyczki-wordpress-2026)

FAKTY Z MOJEJ PRACY (tylko te, bez nazw klientów spoza listy realizacji):
* Przejęty serwis windykacyjny na WordPressie (bez nazwy): w bazie ustawienie rejestracji użytkowników miało przypadkową wartość, przez co rejestracja kont była otwarta, choć nikt jej nie włączał; zarejestrowały się 3 konta automatycznych skanerów. XML-RPC (stary punkt zdalnego dostępu) był w pełni otwarty, a popularna wtyczka „wyłączająca” go zostawiała pingbacki. Login administratora był widoczny publicznie przez listę autorów. Komentarze były otwarte na 72 wpisach, w tym 17 spamowych. Wszystko zamknięte.
* Ten sam serwis: wtyczka cache podawała odwiedzającym i Google stare tytuły na 39 z 93 wpisów; przycisk czyszczenia cache nic nie usuwał. Od tego czasu po zmianach porównuję wersję z cache i bez cache.
* Sklep LumiKids (WooCommerce): kopia zapasowa leżąca na tym samym serwerze co sklep ginie razem z serwerem, więc kopie trzymam poza serwerem.
* Sklep Kosmoteka (WooCommerce): po zmianie we własnej wtyczce część kart produktów zwracała błąd 500; przyczyna znaleziona w logu błędów, poprawka tego samego dnia. Wniosek: tryb debugowania i log błędów włączam tylko na czas diagnozy.
* W serwisach, którymi się zajmuję, używam m.in. LiteSpeed Cache (na hostingu z serwerem LiteSpeed), Rank Math albo Yoast SEO, UpdraftPlus do kopii, ACF do pól w nowych motywach. Nowe strony robię na własnym motywie, bez Elementora.
* Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach: część funkcji piszę jako małą wtyczkę zamiast instalować dużą.
* Mebloweporady.pl (mój serwis na WordPressie): ponad 400 poradników.
