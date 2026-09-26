export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string[];
  bullets: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "tworzenie-stron-wordpress",
    title: "Tworzenie stron WordPress",
    metaTitle: "Tworzenie stron WordPress Wrocław — własny motyw, szybka strona",
    metaDescription:
      "Strony WordPress we Wrocławiu i zdalnie w Polsce i Niemczech. Własny motyw, wygodna edycja treści, szybkie działanie i techniczne SEO od startu.",
    h1: "Tworzenie stron WordPress. Wrocław, edycja bez kodu.",
    lead:
      "Tworzę strony WordPress dla firm, które chcą samodzielnie edytować treści, ale nie chcą budować serwisu na gotowym kreatorze. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Tworzenie stron WordPress ma dla mnie prosty punkt wyjścia: WordPress powinien ułatwiać Ci prowadzenie strony, a nie dokładać kolejną rzecz do pilnowania. Dlatego w nowych projektach przygotowuję własny motyw i pola ACF dopasowane do zaakceptowanego projektu. W panelu edytujesz konkretne treści i sekcje, bez przebudowywania układu strony oraz bez Elementora, Divi czy Avady.",
      "WordPress wykorzystuję w projektach komercyjnych od 2020 roku. Jedną z realizacji jest [Kancelaria Maria Piontek](/projekty/kancelaria-mpiontek), a mój własny serwis [Mebloweporady.pl](/projekty/mebloweporady) działa na WordPressie i zawiera ponad 400 poradników. Jeśli potrzebujesz sprzedaży internetowej, osobno zajmuję się [sklepami WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
      "Przed uruchomieniem sprawdzam wydajność strony, strukturę nagłówków, mapę strony i dane potrzebne wyszukiwarkom do prawidłowego odczytania treści. Celem przed oddaniem jest wynik Lighthouse 90+ na telefonie oraz LCP poniżej 2,5 s, czyli czas wyświetlenia głównego elementu mieszczący się w progu uznawanym przez Google za dobry.",
    ],
    bullets: [
      { title: "Własny motyw bez kreatora", body: "Buduję motyw pod zaakceptowany projekt zamiast dopasowywać firmę do gotowego szablonu. W kodzie zostają elementy potrzebne na Twojej stronie, bez rozbudowanego kreatora dodającego funkcje, z których nie korzystasz." },
      { title: "Prosta edycja treści", body: "Pola ACF odpowiadają sekcjom widocznym na stronie, więc możesz zmieniać teksty, zdjęcia i inne ustalone elementy bez edycji kodu. Układ pozostaje zgodny z projektem." },
      { title: "Wydajność sprawdzona przed startem", body: "Optymalizuję kod i obrazy oraz konfiguruję stronę pod szybkie ładowanie. Przed oddaniem sprawdzam ją w Lighthouse na telefonie i dążę do wyniku 90+ oraz LCP poniżej 2,5 s." },
      { title: "Techniczne podstawy widoczności w Google", body: "Przygotowuję poprawną strukturę nagłówków, dane strukturalne, mapę strony i Google Search Console. GA4 uruchamiam dopiero po zgodzie użytkownika na cookies, jeśli statystyki są częścią wdrożenia." },
    ],
    process: [
      { step: "01", title: "Brief i wycena", body: "Zaczynam od krótkiej rozmowy i briefu. Na tej podstawie określam zakres, sposób wykonania i termin projektu, a pierwszą ocenę zapytania wysyłam w ciągu 24 godzin roboczych." },
      { step: "02", title: "Projekt graficzny", body: "Przygotowuję makiety w Figmie i pokazuję, jak będą wyglądały najważniejsze widoki. Masz dwie tury poprawek, a kodowanie zaczynam po akceptacji projektu." },
      { step: "03", title: "Programowanie strony", body: "Tworzę własny motyw WordPress i pola ACF do edycji ustalonych treści. Po każdym etapie prac udostępniam Ci link do wersji testowej." },
      { step: "04", title: "Optymalizacja i konfiguracja", body: "Sprawdzam wydajność, strukturę nagłówków, dane strukturalne i mapę strony oraz przygotowuję Search Console. Przed oddaniem wykonuję końcowy pomiar Lighthouse na telefonie." },
      { step: "05", title: "Wdrożenie i szkolenie", body: "Przenoszę zaakceptowaną stronę na docelowy serwer i przygotowuję wdrożenie tak, aby przerwa była jak najkrótsza. Przy zmianie DNS może wystąpić krótka niedostępność. Po uruchomieniu prowadzę szkolenie online z edycji treści." },
    ],
    faq: [
      { q: "Ile kosztuje strona WordPress?", a: "Największy wpływ na koszt ma zakres strony, czyli liczba i złożoność widoków oraz funkcji, które trzeba zaprojektować i wdrożyć. Po krótkiej rozmowie i briefie przygotowuję wycenę z opisanym zakresem oraz terminem." },
      { q: "Dlaczego nie używasz Avady, Divi ani Elementora?", a: "W nowych projektach tworzę własny motyw i pola ACF zamiast budować stronę w kreatorze. Dzięki temu panel edycji odpowiada konkretnemu projektowi, a strona nie jest uzależniona od rozbudowanego zestawu gotowych bloków." },
      { q: "Czy strona będzie szybka?", a: "Wydajność sprawdzam przed oddaniem strony, a moim celem jest Lighthouse 90+ na telefonie i LCP poniżej 2,5 s. Optymalizuję między innymi kod i obrazy, ale końcowy wynik zależy też od zawartości strony, hostingu oraz usług zewnętrznych." },
      { q: "Czy mogę sam edytować po wdrożeniu?", a: "Tak. Przygotowuję pola edycji odpowiadające ustalonym sekcjom strony, dzięki czemu możesz zmieniać treści bez zaglądania do kodu. Po uruchomieniu przeprowadzam szkolenie online z obsługi panelu." },
      { q: "Jaki hosting polecasz?", a: "Dobieram hosting do wielkości strony, przewidywanego ruchu i wymaganych funkcji, najczęściej to Hostinger albo cyber_folks. Jeśli masz już serwer, przed wdrożeniem sprawdzam, czy jego parametry są wystarczające." },
      { q: "Ile trwa stworzenie strony WordPress?", a: "Prosta strona WordPress zajmuje zwykle od 2 do 3 tygodni, typowa strona usługowa od 4 do 6 tygodni. Dokładny termin zależy od zakresu projektu i materiałów potrzebnych do rozpoczęcia prac." },
      { q: "Czy po wdrożeniu zapewniasz wsparcie techniczne?", a: "Tak. Po uruchomieniu strony obowiązuje 60 dni gwarancji i bezpłatnych poprawek. Później mogę zajmować się stroną w ramach opcjonalnej miesięcznej opieki bez umowy na rok." },
      { q: "Czy strona będzie zgodna z RODO i dostępna dla osób z niepełnosprawnościami?", a: "W części technicznej konfiguruję GA4 tak, aby statystyki uruchamiały się dopiero po zgodzie na cookies. Dostępność strony mogę zweryfikować w audycie według WCAG 2.1 AA. Dokumenty i obowiązki prawne firmy wymagają osobnej oceny ich treści." },
      { q: "Czy instalujesz statystyki i zgłaszasz stronę do Google?", a: "Tak. Przy wdrożeniu przygotowuję mapę strony i zgłaszam ją w Google Search Console. GA4 konfiguruję tak, aby uruchamiał się po zgodzie użytkownika na cookies." },
      { q: "Czy tworzysz strony WordPress dla firm spoza Wrocławia?", a: "Tak. Pracuję z Wrocławia, ale realizuję projekty dla klientów z całej Polski i z Niemiec. Współpraca przebiega zdalnie: spotkanie startowe odbywa się online, a po każdym etapie udostępniam link do wersji testowej." },
    ],
    cta: "Opowiedz mi o swojej stronie WordPress, a sprawdzę zakres i możliwy termin",
  },
  {
    slug: "sklepy-internetowe-woocommerce",
    title: "Sklepy internetowe WooCommerce",
    metaTitle: "Sklepy WooCommerce Wrocław — wdrożenie i optymalizacja",
    metaDescription:
      "Sklepy WooCommerce we Wrocławiu i zdalnie w Polsce i Niemczech. Własny motyw, płatności, wysyłka, B2B, migracje i integracje sprzedażowe od startu.",
    h1: "Sklepy internetowe WooCommerce. Wrocław i cała Polska.",
    lead:
      "Tworzę sklepy WooCommerce dla firm, które chcą sprzedawać na własnej stronie i potrzebują dopasowanych płatności, dostaw oraz integracji. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Sklep WooCommerce projektuję jako całe narzędzie sprzedażowe, nie sam katalog produktów z przyciskiem „kup”. Ustalam strukturę produktów i wariantów, sposób składania zamówienia, płatności, dostawy oraz potrzebne integracje. Nowe sklepy buduję na własnym motywie, bez Elementora i innych kreatorów.",
      "Jednym z moich wdrożeń jest [Kosmoteka](/projekty/kosmoteka), sklep z teleskopami i sprzętem obserwacyjnym, w którym pracowałem nad WooCommerce, płatnościami, wysyłką, wydajnością i technicznymi elementami SEO. Realizowałem też [LumiKids](/projekty/lumikids), sklep WooCommerce połączony ze sprzedażą na Allegro.",
      "WooCommerce sprawdza się tam, gdzie ważna jest samodzielna obsługa produktów oraz integracje z używanymi już usługami. Jeśli sprzedaż ma działać jednocześnie w sklepie i na marketplace, łączę ją przez [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker). Gdy wymagania wykraczają poza sensowny zakres WooCommerce, dobieram inne rozwiązanie zamiast rozbudowywać platformę za wszelką cenę. Kryteria wyboru opisałem też w [porównaniu WordPressa z Next.js](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      { title: "Płatności i dostawy dopasowane do sklepu", body: "Konfiguruję potrzebne metody płatności i wysyłki, na przykład Przelewy24, Stripe, BLIK, InPost czy inne usługi wynikające z Twojego modelu sprzedaży. Zakres integracji ustalam przed wdrożeniem." },
      { title: "Koszyk zaprojektowany pod zakupy", body: "Projektuję katalog, kartę produktu, koszyk i zamówienie tak, aby klient wiedział, co wybiera i jakie informacje musi podać. Uwzględniam warianty produktów, dodatkowe opcje i reguły sprzedaży potrzebne w Twoim sklepie." },
      { title: "Wydajność kontrolowana przed uruchomieniem", body: "Optymalizuję obrazy, kod i zapytania do bazy oraz konfiguruję pamięć podręczną tam, gdzie jest potrzebna. Przed oddaniem sklepu sprawdzam Lighthouse na telefonie, a celem jest wynik 90+ i LCP poniżej 2,5 s." },
      { title: "Obsługa B2B i sprzedaży wielokanałowej", body: "WooCommerce może obsługiwać między innymi osobne zasady dla grup klientów, minimalne zamówienia i wersje językowe. Sprzedaż ze sklepu i Allegro mogę też połączyć z BaseLinkerem, jeśli taki model odpowiada Twojej firmie." },
    ],
    process: [
      { step: "01", title: "Ustalenie modelu sklepu", body: "Zbieram informacje o produktach, kategoriach, wariantach, sposobach dostawy, płatnościach, grupach klientów i potrzebnych integracjach. Na tej podstawie określam zakres oraz termin." },
      { step: "02", title: "Projekt sklepu", body: "W Figmie przygotowuję najważniejsze widoki, w tym katalog, kartę produktu, koszyk i składanie zamówienia. Projekt uwzględnia zakupy na telefonie, a przed kodowaniem przechodzimy przez dwie tury poprawek." },
      { step: "03", title: "Wdrożenie WooCommerce", body: "Buduję własny motyw, konfiguruję produkty oraz ustalone metody płatności, wysyłki i podatki. Po kolejnych etapach możesz sprawdzać sklep na wersji testowej." },
      { step: "04", title: "Testy zamówień i pomiarów", body: "Przechodzę cały proces zakupu od wyboru produktu do potwierdzenia zamówienia i sprawdzam kluczowe scenariusze. Jeśli w zakresie są statystyki, konfiguruję GA4 tak, aby uruchamiał się dopiero po zgodzie na cookies." },
      { step: "05", title: "Migracja i uruchomienie", body: "Jeśli zastępujemy istniejący sklep, przygotowuję migrację danych oraz przekierowania 301 dla zmienionych adresów. Wdrożenie planuję tak, aby przerwa była jak najkrótsza, choć przy zmianach DNS może wystąpić krótka niedostępność. Po starcie obowiązuje 60 dni gwarancji i bezpłatnych poprawek." },
    ],
    faq: [
      { q: "Ile kosztuje sklep WooCommerce?", a: "Największy wpływ na koszt ma zakres integracji, bo każdą płatność, dostawę, system magazynowy lub zewnętrzną usługę trzeba skonfigurować i przetestować w procesie zamówienia. Po rozmowie i briefie przygotowuję wycenę z określonym zakresem i terminem." },
      { q: "Ile trwa wdrożenie sklepu WooCommerce?", a: "Mniejszy sklep zajmuje zwykle 6-8 tygodni. Średni projekt z B2B, wersjami językowymi i migracją trwa zwykle 10-14 tygodni. Dokładny termin ustalam po poznaniu zakresu i materiałów potrzebnych do rozpoczęcia prac." },
      { q: "Czy mogę sam dodawać produkty?", a: "Tak. WooCommerce pozwala dodawać i edytować produkty, ceny, zdjęcia, kategorie, atrybuty oraz warianty z poziomu panelu. Przy wdrożeniu ustawiam strukturę katalogu tak, aby codzienna obsługa nie wymagała zmian w kodzie." },
      { q: "Co z migracją z innej platformy, na przykład Shoper, IdoSell lub Shopify?", a: "Zakres migracji ustalam po sprawdzeniu, jakie dane można wyeksportować ze starej platformy i jak są zbudowane produkty oraz adresy podstron. Przy zmianie adresów przygotowuję przekierowania 301, ale nie obiecuję zachowania dotychczasowych pozycji w Google. Największym czynnikiem kosztu migracji jest ilość i złożoność danych do przeniesienia." },
      { q: "Czy WooCommerce nadąży przy dużym ruchu?", a: "To zależy od katalogu, sposobu działania sklepu, hostingu i używanych integracji, dlatego nie określam jednej granicy ruchu dla każdego projektu. Przy większych wymaganiach sprawdzam architekturę i mogę zaproponować inne rozwiązanie, jeśli dalsze rozbudowywanie WooCommerce nie będzie rozsądne." },
      { q: "Co z fakturowaniem i podatkami?", a: "Mogę połączyć sklep z systemem fakturowania oraz skonfigurować zasady podatkowe wynikające z ustalonego modelu sprzedaży. Największy wpływ na koszt tej części ma liczba różnych scenariuszy sprzedaży i systemów, które muszą wymieniać dane ze sklepem." },
      { q: "Czy korzystasz z gotowych motywów WooCommerce?", a: "Nowe sklepy WooCommerce tworzę na własnym motywie i nie używam w nich Elementora. Dzięki temu struktura strony i funkcje wynikają z potrzeb sklepu, a nie z możliwości konkretnego kreatora." },
      { q: "Czy WooCommerce sprawdzi się w sprzedaży B2B?", a: "Tak. WooCommerce może obsługiwać sprzedaż B2B, w tym różne ceny dla grup klientów i minimalne zamówienia. Zakres funkcji dobieram do zasad handlowych obowiązujących w konkretnej firmie." },
      { q: "Czy możesz przejąć sklep WooCommerce po innym wykonawcy?", a: "Tak. Na początku sprawdzam stan techniczny sklepu: motyw, wtyczki, aktualizacje, kopie zapasowe i wydajność. Potem określam, co warto zachować, a co przebudować." },
      { q: "Czy sklep może mieć kilka wersji językowych i sprzedawać za granicę?", a: "Tak. WooCommerce można przygotować do obsługi kilku wersji językowych i sprzedaży na różnych rynkach. Najlepiej uwzględnić to już przy projektowaniu struktury produktów, kategorii i treści." },
      { q: "Kiedy WooCommerce nie będzie dobrym wyborem?", a: "Nie proponuję WooCommerce automatycznie do każdego projektu. Przy bardzo dużym katalogu, wysokim ruchu, rozbudowanym multistore albo nietypowych wymaganiach mogę zaproponować inne rozwiązanie, w tym PrestaShop albo architekturę headless." },
      { q: "A jeśli mam mały asortyment?", a: "Mały katalog nie jest przeszkodą. WooCommerce dobrze działa również przy niewielkiej liczbie produktów, szczególnie gdy liczy się własna strona marki, treści poradnikowe i możliwość późniejszej rozbudowy sklepu." },
    ],
    cta: "Opowiedz mi, jak ma działać Twój sklep, a określę zakres i możliwy termin",
  },
  {
    slug: "headless-wordpress",
    title: "Headless WordPress",
    metaTitle: "Headless WordPress dla firm: WordPress i Next.js",
    metaDescription:
      "Headless WordPress dla firm: WordPress zostaje panelem do treści, a stronę wyświetla Next.js. Migracja z zachowaniem wygodnej edycji i podstaw SEO.",
    h1: "Headless WordPress dla firm z istniejącym panelem treści",
    lead:
      "Łączę wygodną edycję treści w WordPressie z osobną stroną zbudowaną w Next.js. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Headless WordPress to rozwiązanie, w którym WordPress nadal służy do dodawania i edycji treści, ale nie odpowiada już za wyświetlanie strony. Treści pobiera osobna warstwa w Next.js, dzięki czemu można zachować znany panel administracyjny i niezależnie rozwijać to, co widzi użytkownik.",
      "Taki układ ma sens przede wszystkim wtedy, gdy firma chce zostać przy WordPressie jako systemie do treści, ale sama strona potrzebuje funkcji lub sposobu działania typowego dla aplikacji w Next.js. Nie stosuję tej architektury z automatu. Jeśli zwykły WordPress wystarczy, dokładanie drugiej technologii tylko zwiększyłoby złożoność projektu. Więcej o samym przejściu opisuję [we wpisie o migracji WordPress na Next.js](/blog/migracja-wordpress-na-nextjs).",
      "Nie mam jeszcze wdrożenia headless WordPress w portfolio, więc nie będę udawał, że jest inaczej. Mam natomiast osobne doświadczenie z WordPressem oraz Next.js. Własny projekt [Kantorymapa](/projekty/kantorymapa) działa w Next.js, obejmuje 1900 kantorów w 140 miastach i ładuje się poniżej sekundy.",
    ],
    bullets: [
      { title: "WordPress zostaje panelem do treści", body: "Nadal edytujesz wpisy, strony i pola w znanym panelu WordPressa. Nie musisz przenosić redakcji do nowego systemu tylko dlatego, że zmienia się sposób wyświetlania strony." },
      { title: "Next.js odpowiada za stronę dla użytkownika", body: "Widoczną część serwisu buduję osobno w Next.js. Dzięki temu mogę dopasować sposób generowania i odświeżania podstron do treści oraz funkcji projektu." },
      { title: "Treść i warstwa wizualna są rozdzielone", body: "WordPress przechowuje dane, a Next.js je pobiera i wyświetla. Zmiany w wyglądzie strony można dzięki temu rozwijać bez przebudowy panelu, w którym pracujesz z treścią." },
      { title: "Podstawy technicznego SEO są częścią wdrożenia", body: "Przygotowuję strukturę nagłówków, dane strukturalne tam, gdzie są potrzebne, mapę strony i konfigurację Search Console. Przed oddaniem sprawdzam też wydajność strony w Lighthouse." },
    ],
    process: [
      { step: "01", title: "Analiza obecnego WordPressa", body: "Sprawdzam typy treści, pola ACF, kategorie, wersje językowe i integracje. Ustalam, które dane trzeba udostępnić nowej warstwie strony i czy headless rzeczywiście ma tutaj uzasadnienie." },
      { step: "02", title: "Przygotowanie WordPressa do współpracy z Next.js", body: "Konfiguruję sposób pobierania treści z WordPressa i porządkuję dane potrzebne stronie. Dobieram rozwiązanie do istniejącej struktury, zamiast przebudowywać panel bez potrzeby." },
      { step: "03", title: "Budowa strony w Next.js", body: "Tworzę warstwę widoczną dla użytkownika, łączę ją z treściami z WordPressa i udostępniam Ci wersję testową do sprawdzenia. Jeśli projekt obejmuje nowy wygląd, wcześniej przygotowuję makiety w Figmie z dwiema turami poprawek." },
      { step: "04", title: "Testy i przełączenie strony", body: "Sprawdzam treści, adresy, przekierowania i działanie strony przed publikacją. Migrację przygotowuję tak, żeby przerwa była jak najkrótsza, ale przy zmianie DNS może wystąpić krótka niedostępność." },
    ],
    faq: [
      { q: "Co to jest headless WordPress?", a: "WordPress działa jako panel do zarządzania treścią, a stronę widoczną dla użytkownika wyświetla osobna aplikacja, na przykład w Next.js. Obie części komunikują się ze sobą, więc możesz nadal pracować w WordPressie bez uzależniania wyglądu strony od jego motywu." },
      { q: "Po co headless WordPress, skoro zwykły WordPress działa?", a: "Headless ma sens wtedy, gdy chcesz zachować WordPress do edycji, ale warstwa widoczna dla użytkownika potrzebuje funkcji lub architektury wygodniejszej do zbudowania w Next.js. Jeśli typowa strona WordPress spełnia wymagania projektu, nie dokładam drugiego systemu bez konkretnego powodu." },
      { q: "Ile kosztuje migracja na headless WordPress?", a: "Największy wpływ na koszt ma zakres funkcji, które trzeba odtworzyć po stronie Next.js. Inaczej wygląda serwis z prostymi podstronami, a inaczej projekt z formularzami, logowaniem, wyszukiwaniem czy niestandardowymi integracjami. Zakres i wycenę ustalam po analizie obecnej strony." },
      { q: "Czy nadal będę mógł sam edytować treści?", a: "Tak. WordPress nadal służy do dodawania i aktualizowania treści, a Next.js pobiera je i pokazuje na stronie. Sposób odświeżania dobieram do projektu, żeby publikacja zmian nie wymagała ręcznej ingerencji w kod." },
      { q: "Ile trwa migracja na headless WordPress?", a: "Termin zależy od obecnej struktury WordPressa i funkcji, które trzeba przenieść do nowej warstwy strony. Najpierw sprawdzam zakres, a dopiero potem podaję termin. Nową wersję mogę przygotowywać równolegle do działającego serwisu." },
      { q: "Jakie są ograniczenia headless WordPress?", a: "Część wtyczek WordPressa działa tylko wtedy, gdy to WordPress wyświetla stronę, więc ich funkcje trzeba czasem odtworzyć w Next.js. Dochodzą też dwie osobne części systemu, które trzeba utrzymywać. Dlatego przed wyborem tej architektury sprawdzam, czy jej korzyści uzasadniają dodatkową złożoność." },
    ],
    cta: "Opisz obecną stronę, a sprawdzę, czy headless ma w niej sens",
  },
  {
    slug: "nowoczesne-strony-internetowe",
    title: "Nowoczesne strony internetowe",
    metaTitle: "Nowoczesne strony internetowe dla firm | Marcin Siwonia",
    metaDescription:
      "Nowoczesne strony internetowe dla firm: dopracowany wygląd, animacje i szybkie działanie. Projektuję we Wrocławiu, pracuję zdalnie w Polsce i Niemczech.",
    h1: "Nowoczesne strony internetowe dla firm, które chcą się wyróżnić",
    lead:
      "Projektuję dopracowane wizualnie strony dla firm, którym nie wystarcza prosty szablon. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Nowoczesne strony internetowe mają sens wtedy, gdy wygląd jest częścią sprzedaży: firma chce pokazać jakość swojej oferty, zbudować zaufanie i zostać zapamiętana. Projektuję wtedy układ, typografię, animacje i mikrointerakcje jako jedną całość, zamiast dokładać efekty do gotowego szablonu.",
      "Nie każda firma tego potrzebuje. Jeżeli najważniejsze są prosta prezentacja usług, szybka edycja treści i rozsądny zakres, lepszym wyborem może być klasyczna [strona WordPress](/uslugi/tworzenie-stron-wordpress). Bardziej rozbudowane interakcje, własna logika albo panel mogą z kolei przemawiać za [aplikacją Next.js](/uslugi/aplikacje-nextjs).",
      "Technologię dobieram dopiero po ustaleniu, co strona ma robić. Przykładem jest [Kantorymapa](/projekty/kantorymapa): własny serwis w Next.js z 1900 kantorami w 140 miastach, codziennymi kursami NBP i tysiącami stron tworzonych z danych. Serwis ładuje się poniżej sekundy, więc rozbudowana warstwa wizualna i funkcjonalna nie musi oznaczać ciężkiej strony.",
    ],
    bullets: [
      { title: "Dopracowany wygląd dopasowany do marki", body: "Projektuję stronę od początku w Figmie, bez dopasowywania firmy do gotowego szablonu. Układ, typografia, kolory i sposób prezentowania treści wynikają z charakteru marki i celu strony." },
      { title: "Animacje i mikrointerakcje z konkretnym zadaniem", body: "Ruch może prowadzić wzrok, pokazywać zależności między elementami albo podkreślać ważną część oferty. Jeżeli efekt niczego nie ułatwia albo przeszkadza w korzystaniu ze strony, nie dokładam go tylko po to, żeby strona była bardziej efektowna." },
      { title: "Szybkie działanie mimo rozbudowanej warstwy wizualnej", body: "Animacje, zdjęcia i dodatkowe efekty wdrażam z uwzględnieniem wydajności. Przed oddaniem sprawdzam stronę w Lighthouse, a celem jest wynik 90+ na telefonie i LCP poniżej 2,5 s." },
      { title: "Strona wygodna także dla osób ograniczających animacje", body: "Projektuję interakcje tak, aby podstawowa treść i obsługa strony nie zależały od efektów ruchowych. Osoba korzystająca z ustawienia ograniczającego animacje nadal może normalnie przeczytać ofertę, przejść między podstronami i wysłać formularz." },
    ],
    process: [
      { step: "01", title: "Rozpoznanie celu i kierunku wizualnego", body: "Zaczynam od rozmowy o firmie, odbiorcach i roli strony. Jeśli masz obecną witrynę, sprawdzam też jej strukturę i wydajność. Ustalamy kilka referencji, które pomagają określić oczekiwany poziom i charakter projektu." },
      { step: "02", title: "Projekt w Figmie", body: "Przygotowuję makiety i kluczowe widoki w Figmie. W cenie projektu są dwie tury poprawek, a kodowanie zaczynam dopiero po zaakceptowaniu projektu." },
      { step: "03", title: "Wdrożenie dopasowane do funkcji strony", body: "Dobieram WordPress, Next.js, Astro albo inne narzędzie z mojego stosu do sposobu edycji treści i funkcji strony. Po kolejnych etapach wysyłam link do wersji testowej, żebyś mógł sprawdzać postęp." },
      { step: "04", title: "Testy, SEO techniczne i start", body: "Przed publikacją sprawdzam stronę na telefonach i komputerach, wydajność oraz podstawy technicznego SEO. Przy wdrożeniu konfiguruję między innymi strukturę nagłówków, mapę strony i Search Console, a GA4 podłączam po uzyskaniu zgody na cookies." },
    ],
    faq: [
      { q: "Czym nowoczesna strona różni się od zwykłej strony firmowej?", a: "Przede wszystkim większą rolą projektu wizualnego i interakcji. Nadal ma jasno prezentować ofertę i prowadzić do kontaktu, ale może robić to za pomocą bardziej indywidualnego układu, animacji i mikrointerakcji. Technologia jest środkiem do osiągnięcia tego efektu, a nie celem samym w sobie." },
      { q: "Na jakiej technologii zrobisz moją stronę?", a: "Dobieram ją po poznaniu zakresu projektu. Strona oparta głównie na treściach może powstać na WordPressie z własnym motywem, a projekt z rozbudowaną logiką może wymagać Next.js. Więcej o drugim rozwiązaniu opisuję przy [aplikacjach Next.js](/uslugi/aplikacje-nextjs)." },
      { q: "Ile kosztuje nowoczesna strona internetowa?", a: "Największy wpływ na koszt ma zakres indywidualnych animacji i interakcji. Inaczej wycenia się stronę z kilkoma subtelnymi przejściami, a inaczej projekt z rozbudowanymi scenami, elementami 3D i wieloma nietypowymi widokami. Zakres i termin podaję po krótkiej rozmowie i briefie." },
      { q: "Ile trwa projekt nowoczesnej strony?", a: "Dla typowej strony firmowej przyjmuję zwykle od 4 do 6 tygodni. Jeśli projekt ma nietypową logikę albo staje się aplikacją, termin ustalam osobno zgodnie z zakresem. Makiety w Figmie akceptujesz przed rozpoczęciem kodowania." },
      { q: "Czy będę mógł sam edytować treść?", a: "Tak, jeśli samodzielna edycja jest potrzebna, dobieram do strony odpowiedni system zarządzania treścią. W WordPressie przygotowuję własny motyw i pola odpowiadające projektowi, bez Elementora, Divi czy Avady. Możesz więc zmieniać ustalone treści bez ingerowania w kod." },
      { q: "Czy animacje będą działać dobrze dla każdego użytkownika?", a: "Projektuję je tak, aby strona pozostała użyteczna również bez ruchomych efektów. Uwzględniam systemowe ustawienie ograniczania animacji i pilnuję, żeby formularze, nawigacja i treści nie były od nich zależne. Na telefonach mogę też zastąpić cięższy efekt prostszą wersją." },
    ],
    cta: "Opowiedz mi, jaką stronę chcesz zbudować, a przygotuję zakres i termin",
  },
  {
    slug: "nowoczesna-strona-firmowa-2026",
    title: "Strona firmowa MŚP",
    metaTitle: "Strona internetowa dla małej firmy | Marcin Siwonia",
    metaDescription:
      "Strona internetowa dla małej firmy: oferta, usługi, kontakt, blog i łatwa edycja. Tworzę we Wrocławiu, zdalnie dla małych firm z Polski i Niemiec.",
    h1: "Strona internetowa dla małej firmy z prostym zakresem",
    lead:
      "Tworzę strony firmowe dla małych firm, które chcą jasno pokazać ofertę i ułatwić klientowi kontakt. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Strona internetowa dla małej firmy nie musi być rozbudowanym projektem technologicznym. Powinna przede wszystkim szybko wyjaśniać, czym się zajmujesz, dla kogo jest Twoja oferta, dlaczego warto się z Tobą skontaktować i jak ten kontakt rozpocząć.",
      "Typowy zakres obejmuje stronę główną, podstrony usług, sekcję o firmie, kontakt, formularz i opcjonalnie blog. Najczęściej wybieram tutaj WordPress z własnym motywem, bo pozwala później wygodnie edytować treści bez używania kreatorów stron. Jeśli potrzebujesz kalkulatora, panelu klienta albo bardziej złożonej logiki, może to już być zakres dla [aplikacji Next.js](/uslugi/aplikacje-nextjs).",
      "Przykładem takiej realizacji jest [strona Kancelarii Marii Piontek](/projekty/kancelaria-mpiontek) wykonana w WordPressie. W tego typu projekcie najważniejsze nie są efekty wizualne dla samych efektów, tylko czytelna prezentacja usług, wiarygodny wygląd i wygodna obsługa treści po wdrożeniu.",
    ],
    bullets: [
      { title: "Jasna prezentacja oferty na telefonie i komputerze", body: "Projektuję układ tak, żeby osoba odwiedzająca stronę szybko znalazła zakres usług, najważniejsze informacje o firmie i drogę do kontaktu. Strona działa responsywnie, bez zakładania z góry, z jakiego urządzenia przyjdzie większość klientów." },
      { title: "Podstawy technicznego SEO od startu", body: "Przygotowuję prawidłową strukturę nagłówków, dane strukturalne tam, gdzie mają zastosowanie, mapę strony i konfigurację Search Console. To tworzy techniczne podstawy do dalszej pracy nad widocznością, ale nie obiecuję konkretnej pozycji w Google." },
      { title: "Zakres ustalony przed rozpoczęciem prac", body: "Po rozmowie i briefie dostajesz wycenę z opisanym zakresem oraz terminem. Jeśli w trakcie pojawi się nowa funkcja lub dodatkowa podstrona poza tym zakresem, ustalam ją z Tobą osobno." },
      { title: "Samodzielna edycja treści po wdrożeniu", body: "W nowych stronach WordPress korzystam z własnego motywu i pól ACF dopasowanych do projektu. Możesz aktualizować wskazane treści bez przebudowywania strony i bez korzystania z Elementora, Divi czy Avady." },
    ],
    process: [
      { step: "01", title: "Rozmowa i ustalenie zakresu", body: "Ustalam, co sprzedajesz, kto ma korzystać ze strony, jakie podstrony są potrzebne i jakie materiały już masz. Na tej podstawie przygotowuję wycenę, zakres oraz termin." },
      { step: "02", title: "Makiety i projekt w Figmie", body: "Projektuję najważniejsze widoki strony i pokazuję, jak będą rozmieszczone oferta, treści oraz elementy kontaktowe. Masz dwie tury poprawek, a kodowanie zaczynam po zaakceptowaniu projektu." },
      { step: "03", title: "Wdrożenie na WordPressie", body: "Najczęściej buduję stronę na WordPressie z własnym motywem i edycją sekcji dopasowaną do projektu. W trakcie prac otrzymujesz link do wersji testowej i możesz śledzić kolejne etapy." },
      { step: "04", title: "Publikacja i przekazanie strony", body: "Przed startem sprawdzam działanie strony, konfiguruję mapę strony i Search Console oraz przygotowuję migrację. Przy zmianie DNS może wystąpić krótka niedostępność. Po publikacji przeprowadzam szkolenie z edycji i obejmuję stronę 60-dniową gwarancją." },
    ],
    faq: [
      { q: "Co powinna zawierać strona internetowa małej firmy?", a: "Minimum to jasna oferta, opis najważniejszych usług, informacje o firmie oraz dane kontaktowe. W zależności od branży dobrze sprawdzają się realizacje, odpowiedzi na częste pytania, blog albo formularz dopasowany do rodzaju zapytania. Zakres powinien wynikać z tego, czego klient potrzebuje przed podjęciem kontaktu." },
      { q: "Co jest w typowym zakresie strony firmowej?", a: "Najczęściej jest to strona główna, kilka podstron usługowych, kontakt i formularz, a czasem również blog. Głównym czynnikiem kosztu jest liczba i różnorodność podstron, które trzeba zaprojektować oraz wdrożyć. Dokładny zakres ustalam po briefie." },
      { q: "WordPress czy Next.js dla małej firmy?", a: "W typowej stronie usługowej najczęściej wybieram WordPress, szczególnie gdy zależy Ci na prostej edycji treści. Next.js ma więcej sensu przy niestandardowej logice, panelach, kalkulatorach lub aplikacjach. Nie wybieram technologii tylko dlatego, że jest nowsza." },
      { q: "Ile trwa wykonanie strony dla mojej firmy?", a: "Prosta wizytówka zajmuje zwykle od 2 do 3 tygodni. Typowa strona firmowa lub usługowa powstaje zwykle w ciągu 4-6 tygodni. Termin ustalam po poznaniu liczby podstron, dostępności materiałów i całego zakresu." },
      { q: "Co jeśli mam już starą stronę?", a: "Mogę przygotować nową wersję i przeprowadzić migrację. Stare adresy, które mają odpowiedniki w nowej strukturze, przekierowuję za pomocą przekierowań 301, ale sama migracja nie daje gwarancji utrzymania dotychczasowych pozycji w Google. Przy zmianie DNS może też wystąpić krótka niedostępność." },
      { q: "Czy przygotujesz dane strukturalne dla mojej firmy?", a: "Tak, dodaję dane strukturalne tam, gdzie odpowiadają rzeczywistej treści i typowi działalności. Pomagają wyszukiwarce poprawnie rozumieć informacje na stronie, ale nie gwarantują obecności ani konkretnej pozycji w lokalnych wynikach." },
    ],
    cta: "Napisz, czego potrzebuje Twoja firma, a przygotuję zakres i termin strony",
  },
  {
    slug: "next-js-software-house",
    title: "Next.js software house",
    metaTitle: "Outsourcing Next.js dla startupów i firm",
    metaDescription:
      "Programista Next.js dla startupu: outsourcing Next.js, MVP i rozwój aplikacji. Bezpośrednia współpraca z freelancerem z Wrocławia, także zdalnie.",
    h1: "Programista Next.js dla startupu i rozwijającej się firmy",
    lead:
      "Projektuję i rozwijam aplikacje Next.js dla startupów i firm, które wolą pracować bezpośrednio z programistą zamiast przekazywać projekt między kilkoma osobami. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Outsourcing Next.js może oznaczać współpracę bezpośrednio ze mną: od ustalenia zakresu, przez projekt w Figmie, po kod i wdrożenie. Jestem freelancerem i sam odpowiadam za realizację, dlatego wiesz, z kim omawiasz decyzje techniczne i kto później wprowadza je do projektu. Komercyjne strony i aplikacje tworzę od 2020 roku, a na własny rachunek pracuję od końca 2022 roku.",
      "Taki model sprawdza się przy MVP, konfiguratorach, panelach klienta i innych aplikacjach, w których trzeba połączyć interfejs z logowaniem, bazą danych, płatnościami albo zewnętrznym API. Korzystam między innymi z Next.js, Reacta, TypeScriptu, Postgresa, Prisma lub Drizzle, Clerk lub NextAuth i Stripe. Dobieram tylko te elementy, które są potrzebne w konkretnym projekcie.",
      "Przykładem jest [Galabau Darius](/projekty/galabau-darius), aplikacja dla firmy z Niemiec. Zbudowałem w Next.js konfigurator, w którym użytkownik wybiera elementy ogrodzenia i wylicza zakres zamówienia, a po stronie firmy działa panel administracyjny zabezpieczony logowaniem. Projekt korzysta między innymi z Prisma i Vercel.",
    ],
    bullets: [
      { title: "Jedna osoba odpowiada za cały projekt", body: "Rozmawiasz bezpośrednio ze mną od ustalenia zakresu po wdrożenie. Nie przekazuję Twoich ustaleń między kierownikiem projektu, programistą i kolejnymi osobami." },
      { title: "Pierwsza wersja skupiona na najważniejszych funkcjach", body: "Na początku rozdzielam funkcje konieczne do uruchomienia produktu od tych, które mogą poczekać. Aplikacja lub MVP w Next.js zwykle zajmuje od 6 do 12 tygodni, a dokładny termin ustalam po poznaniu zakresu." },
      { title: "Zaplecze aplikacji razem z interfejsem", body: "Mogę przygotować nie tylko widoki, lecz także logowanie, bazę danych, płatności i integracje. Dzięki temu nie musisz osobno szukać wykonawcy do każdej części niewielkiej lub średniej aplikacji." },
      { title: "Kod przygotowany do dalszego rozwoju", body: "Stosuję TypeScript i porządkuję strukturę projektu tak, żeby kolejny programista mógł zrozumieć sposób działania aplikacji. Dokumentacja zmniejsza zależność od jednej osoby, choć nie obiecuję, że przejęcie dowolnego projektu będzie całkowicie bezproblemowe." },
    ],
    process: [
      { step: "01", title: "Brief, zakres i wycena", body: "Zaczynam od krótkiej rozmowy i briefu. Ustalam funkcje pierwszej wersji, rzeczy możliwe do odłożenia oraz zależności techniczne, a następnie przedstawiam zakres i termin." },
      { step: "02", title: "Projekt i fundament aplikacji", body: "Przygotowuję makiety w Figmie, uwzględniam dwie tury poprawek i po akceptacji przechodzę do kodu. Powstaje podstawowa struktura aplikacji, logowanie i pierwsze widoki, a Ty dostajesz link do wersji testowej." },
      { step: "03", title: "Kolejne funkcje i testowanie", body: "Rozwijam aplikację etapami i po każdym etapie udostępniam wersję testową. Możesz sprawdzić działanie funkcji przed publikacją i zgłosić uwagi, zanim przejdę dalej." },
      { step: "04", title: "Wdrożenie i dalsza opieka", body: "Uruchamiam wersję produkcyjną, sprawdzam działanie aplikacji i przekazuję dokumentację potrzebną do codziennej obsługi. Po starcie masz 60 dni gwarancji i bezpłatnych poprawek, a później możesz skorzystać z opcjonalnej opieki miesięcznej." },
    ],
    faq: [
      { q: "Jeden wykonawca to ryzyko. Co się stanie, jeśli nie będziesz mógł dalej prowadzić projektu?", a: "Kod i dokumentację przygotowuję tak, żeby projekt nie istniał wyłącznie w mojej głowie. Repozytorium, opis architektury i uporządkowana struktura kodu ułatwiają innemu programiście przejęcie prac, ale czas potrzebny na wejście w projekt zależy od jego złożoności." },
      { q: "Co z projektem graficznym, jeśli nie mam projektanta?", a: "Mogę przygotować makiety i projekt interfejsu w Figmie przed rozpoczęciem programowania. Przewiduję dwie tury poprawek i dopiero po akceptacji projektu przechodzę do kodowania." },
      { q: "Rozliczenie godzinowe czy wycena całego projektu?", a: "Sposób rozliczenia dobieram do charakteru współpracy. Przy zamkniętym zakresie najważniejszym czynnikiem kosztu jest liczba i złożoność funkcji, które mają znaleźć się w aplikacji. Przy stałym rozwoju zakres może zmieniać się w kolejnych etapach." },
      { q: "Czy mogę współpracować z Tobą dłużej niż przy jednym wdrożeniu?", a: "Tak, mogę rozwijać istniejącą aplikację po jej uruchomieniu albo przejmować kolejne zadania w ustalonym zakresie. Forma takiej współpracy zależy od tego, jak często pojawiają się nowe funkcje i ile pracy wymaga ich utrzymanie." },
    ],
    cta: "Opowiedz mi o aplikacji, a pomogę ustalić sensowny zakres pierwszej wersji",
  },
  {
    slug: "strony-jamstack",
    title: "Strony Jamstack",
    metaTitle: "Strony Jamstack dla firm: szybkie strony z CMS",
    metaDescription:
      "Strony Jamstack dla firm: szybkie strony generowane z góry, CMS do edycji i wdrożenie z Wrocławia. Pracuję zdalnie w całej Polsce i Niemczech.",
    h1: "Strony Jamstack dla firm, które stawiają na szybkość i prostą obsługę",
    lead:
      "Tworzę strony Jamstack, czyli serwisy, których gotowe podstrony są generowane z góry i trafiają do użytkownika szybko, bez składania każdej strony od początku przy każdym wejściu. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Strony Jamstack oddzielają treść od sposobu jej wyświetlania. W praktyce oznacza to, że część albo całość podstron przygotowuję wcześniej, a użytkownik dostaje gotowy wynik. Treść nadal możesz zmieniać przez CMS, na przykład Sanity lub Strapi, bez edytowania kodu. Więcej o samym podejściu wyjaśniam [w poście Jamstack co to jest](/blog/jamstack-co-to-jest).",
      "Takie rozwiązanie pasuje przede wszystkim do stron firmowych, serwisów z treścią, katalogów i projektów, w których zawartość nie musi być budowana od nowa dla każdego użytkownika. Jeśli projekt wymaga rozbudowanego panelu, danych zmieniających się indywidualnie dla zalogowanej osoby albo wielu operacji wykonywanych na żywo, lepiej od razu rozważyć architekturę aplikacji zamiast wciskać wszystko w stronę statyczną.",
      "Dobrym przykładem jest [cojestpolskie.pl](/projekty/cojestpolskie), mój własny serwis zbudowany w Astro. Jedna baza danych zasila ponad 1700 podstron dotyczących ponad 900 marek. Treść jest generowana z uporządkowanych danych, a informacje o właścicielach marek powstają w procesie wykorzystującym AI i kontrolę w KRS oraz CRBR.",
    ],
    bullets: [
      { title: "Gotowe podstrony zamiast składania ich przy każdym wejściu", body: "Tam, gdzie treść nie musi powstawać na żywo, przygotowuję ją wcześniej. Dzięki temu przeglądarka szybciej dostaje gotową stronę, bez czekania za każdym razem na zapytania do bazy i generowanie całego widoku." },
      { title: "Treść edytowana przez CMS", body: "Mogę podłączyć Sanity lub Strapi, abyś zmieniał teksty, zdjęcia i inne dane z panelu. Po publikacji nowych treści strona odświeża odpowiednie podstrony bez ręcznej ingerencji w kod." },
      { title: "Architektura dopasowana do rodzaju treści", body: "Nie wszystko musi działać statycznie. Formularze, wyszukiwanie lub inne elementy wymagające przetwarzania danych mogą korzystać z osobnej logiki, a zwykłe podstrony pozostają proste." },
      { title: "Dobra baza techniczna pod SEO", body: "Przy wdrożeniu dbam o strukturę nagłówków, dane strukturalne, mapę strony i konfigurację Search Console. To pomaga wyszukiwarce prawidłowo odczytać serwis, ale nie jest obietnicą konkretnej pozycji w Google." },
    ],
    process: [
      { step: "01", title: "Ustalenie architektury", body: "Najpierw sprawdzam, które treści mogą być generowane z góry, a które funkcje wymagają przetwarzania danych po stronie serwera. Na tej podstawie dobieram CMS, hosting i potrzebne integracje." },
      { step: "02", title: "Konfiguracja CMS", body: "Tworzę strukturę treści, pola i zależności między nimi. Dzięki temu panel odpowiada temu, co rzeczywiście edytujesz na stronie, zamiast być zbiorem przypadkowych ustawień." },
      { step: "03", title: "Budowa strony", body: "Koduję widoki i podłączam dane z CMS. Jeśli projekt tego wymaga, korzystam z Next.js albo Astro i dodaję tylko te dynamiczne funkcje, które są potrzebne." },
      { step: "04", title: "Wdrożenie i pomiary", body: "Uruchamiam stronę na Vercel albo odpowiednio dobranym serwerze, sprawdzam jej działanie i przed oddaniem mierzę wydajność. Celem jest wynik Lighthouse co najmniej 90 na telefonie oraz LCP poniżej 2,5 s." },
    ],
    faq: [
      { q: "Czym strona Jamstack różni się od tradycyjnego WordPressa?", a: "W typowym WordPressie serwer składa stronę z PHP i danych z bazy przy kolejnych wejściach. W Jamstacku wiele podstron przygotowuję wcześniej i podaję jako gotowe pliki. Różnica dotyczy przede wszystkim architektury, a nie tego, czy będziesz mieć panel do edycji treści." },
      { q: "Ile kosztuje strona Jamstack?", a: "Największy wpływ na koszt ma zakres niestandardowych funkcji poza zwykłą prezentacją treści. Prosty serwis z kilkoma typami podstron wymaga mniej pracy niż katalog z filtrowaniem, integracjami i własną logiką. Po krótkiej rozmowie i briefie podaję zakres oraz termin." },
      { q: "Ile trwa wdrożenie strony Jamstack?", a: "Typowa strona firmowa lub usługowa zajmuje orientacyjnie od 4 do 6 tygodni. Ostateczny harmonogram zależy od zakresu i ustalam go po briefie." },
      { q: "Co jeśli mam już stronę na WordPressie?", a: "Migrację planuję tak, aby przerwa była jak najkrótsza. Stare adresy mogę zachować albo przekierować kodem 301, ale przy zmianie DNS może wystąpić krótka niedostępność i nie gwarantuję zachowania dotychczasowych pozycji w Google." },
      { q: "Czy SEO działa na stronie Jamstack?", a: "Tak. Przygotowuję poprawną strukturę nagłówków, dane strukturalne, mapę strony i Search Console przy wdrożeniu. Sama technologia nie gwarantuje jednak konkretnej pozycji, bo widoczność zależy także od treści, konkurencji i wielu innych czynników." },
    ],
    cta: "Napisz, co ma robić Twoja strona, a sprawdzę, czy Jamstack ma w tym projekcie sens",
  },
  {
    slug: "tworzenie-stron-www",
    title: "Tworzenie stron www",
    metaTitle: "Tworzenie stron www Wrocław: WordPress, Next.js, WooCommerce",
    metaDescription:
      "Tworzenie stron www Wrocław dla firm: WordPress, Next.js lub WooCommerce dobrane do potrzeb. Ponad 30 wdrożeń, projekt w Figmie i 60 dni gwarancji.",
    h1: "Tworzenie stron www we Wrocławiu dla firm",
    lead:
      "Tworzę strony firmowe, serwisy usługowe i sklepy dla firm, dobierając technologię do tego, co strona ma robić: [WordPress](/uslugi/tworzenie-stron-wordpress), [Next.js](/uslugi/aplikacje-nextjs) albo [WooCommerce](/uslugi/sklepy-internetowe-woocommerce). Pracuję z Wrocławia, zdalnie z całą Polską i Niemcami.",
    intro: [
      "Tworzenie stron www to moja główna usługa od 2020 roku. Mam za sobą ponad 30 wdrożeń komercyjnych dla firm z Polski i Niemiec, między innymi dla hoteli, kancelarii, sklepów, restauracji, producentów i lokalnych usług. Pracuję samodzielnie, więc od pierwszej rozmowy po wdrożenie rozmawiasz bezpośrednio ze mną.",
      "Najpierw ustalam, jaką rolę ma pełnić strona i kto będzie ją później obsługiwał. Potem przygotowuję makiety w Figmie, zbieram uwagi w dwóch turach i dopiero po akceptacji przechodzę do kodowania. Po każdym etapie dostajesz link do wersji testowej. Przykłady gotowych serwisów znajdziesz na [pełnej liście projektów](/projekty), a osobno opisuję też [od czego zależy cena strony www](/blog/ile-kosztuje-strona-www-2026).",
      "Technologię dobieram do potrzeb, a nie odwrotnie. WordPress sprawdza się przy stronach firmowych i serwisach z treściami, które chcesz samodzielnie edytować. Next.js wykorzystuję, gdy projekt wymaga konfiguratora, panelu użytkownika, nietypowej logiki albo rozbudowanych integracji. Przy sklepie internetowym z typowymi integracjami sprzedażowymi wdrażam WooCommerce.",
    ],
    bullets: [
      { title: "Technologia dobrana do funkcji strony", body: "Nie zakładam z góry, że każdy projekt powinien powstać w tym samym systemie. Dobieram WordPress, Next.js albo WooCommerce do sposobu edycji treści, funkcji i planów rozwoju serwisu." },
      { title: "Projekt akceptujesz przed kodowaniem", body: "Najpierw przygotowuję makiety w Figmie i uwzględniam dwie tury poprawek. Dzięki temu wygląd i układ strony są ustalone, zanim zacznę je programować." },
      { title: "Techniczne podstawy wyszukiwania są częścią wdrożenia", body: "Przygotowuję strukturę nagłówków, mapę strony, dane strukturalne tam, gdzie mają zastosowanie, oraz konfigurację Search Console. Nie obiecuję konkretnych pozycji w Google." },
      { title: "Wsparcie nie kończy się w dniu publikacji", body: "Po uruchomieniu masz 60 dni gwarancji i bezpłatnych poprawek. Później możesz korzystać z opcjonalnej opieki w miesięcznym abonamencie bez umowy na rok." },
    ],
    process: [
      { step: "01", title: "Rozmowa, zakres i wycena", body: "Zaczynam od krótkiej rozmowy i zebrania informacji o firmie, odbiorcach oraz funkcjach strony. Na tej podstawie przygotowuję zakres, wycenę i termin realizacji." },
      { step: "02", title: "Projekt w Figmie", body: "Przygotowuję makiety strony i przechodzimy przez dwie tury poprawek. Kodowanie zaczynam dopiero po zaakceptowaniu projektu." },
      { step: "03", title: "Programowanie i wersja testowa", body: "Buduję stronę w ustalonej technologii i po kolejnych etapach udostępniam Ci wersję testową w przeglądarce. Możesz sprawdzać efekt jeszcze przed publikacją." },
      { step: "04", title: "Testy i wdrożenie", body: "Przed oddaniem sprawdzam stronę na telefonach i komputerach oraz dążę do wyniku Lighthouse 90+ na telefonie. Konfiguruję też SSL, mapę strony i Search Console, a migrację przygotowuję tak, żeby przerwa była jak najkrótsza." },
      { step: "05", title: "Szkolenie i dalsza opieka", body: "Pokazuję Ci online, jak edytować treści w użytym systemie. Po starcie obowiązuje 60 dni gwarancji, a późniejsza opieka techniczna jest opcjonalna." },
    ],
    faq: [
      { q: "Ile kosztuje moja strona www?", a: "Największy wpływ na koszt ma zakres funkcji, które strona ma obsługiwać. Prosta prezentacja firmy wymaga innego nakładu pracy niż serwis z panelem użytkownika, konfiguratorem czy integracjami. Dokładną wycenę przygotowuję po krótkiej rozmowie i ustaleniu zakresu." },
      { q: "Ile potrwa wdrożenie mojej strony?", a: "Prosta strona lub wizytówka zwykle zajmuje 2-3 tygodnie, a strona firmowa lub usługowa 4-6 tygodni. Aplikacja lub MVP w Next.js to zwykle 6-12 tygodni. Ostateczny termin ustalam po poznaniu zakresu projektu." },
      { q: "Co jeśli mam już domenę i hosting?", a: "Mogę wykorzystać istniejącą domenę i sprawdzić, czy obecny hosting pasuje do wybranej technologii. Przy migracji przygotowuję przekierowania starych adresów i staram się ograniczyć przerwę do minimum. Przy zmianie DNS może jednak wystąpić krótka niedostępność." },
      { q: "Czy będę mógł sam edytować treści?", a: "Tak, sposób edycji zależy od wybranej technologii. W nowych projektach WordPress używam własnego motywu i pól ACF, dzięki czemu edytujesz przygotowane sekcje bez kreatorów typu Elementor. Przy Next.js mogę podłączyć system zarządzania treścią, taki jak Sanity lub Strapi." },
      { q: "Czy moja strona będzie dobrze działać na telefonie?", a: "Tak, projektuję i sprawdzam strony z myślą o różnych szerokościach ekranu, w tym telefonach, tabletach i komputerach. Przed oddaniem testuję kluczowe widoki i wydajność wersji mobilnej. Celem jest wynik Lighthouse 90+ na telefonie." },
      { q: "Który CMS wybrać do strony firmowej?", a: "W typowej stronie firmowej często sprawdza się WordPress, szczególnie jeśli chcesz później samodzielnie zmieniać ofertę, zdjęcia lub publikować wpisy. Jeżeli projekt wymaga nietypowej logiki, konfiguratora, panelu użytkownika albo rozbudowanych integracji, lepszym rozwiązaniem może być Next.js z osobnym systemem do zarządzania treścią." },
      { q: "Co jest potrzebne do stworzenia strony internetowej?", a: "Na początku najbardziej przydają się informacje o firmie, lista usług, materiały do treści, logo, zdjęcia oraz przykłady stron, których stylistyka Ci odpowiada. Jeśli masz już domenę lub hosting, potrzebne będą również dostępy. Brakujące elementy i sposób ich przygotowania ustalamy na starcie projektu." },
      { q: "Czy robisz strony dla małych firm z ograniczonym budżetem?", a: "Tak, zakres strony można dopasować do rzeczywistych potrzeb małej firmy, zamiast od razu budować rozbudowany serwis. Czasami sensowniejsza jest prostsza strona z kilkoma dobrze opracowanymi podstronami, którą później można rozwijać." },
      { q: "Czy strona będzie bezpieczna?", a: "Przy wdrożeniu uwzględniam między innymi SSL i techniczną konfigurację strony, a dalsze wymagania zależą od użytej technologii i funkcji serwisu. W systemach wymagających aktualizacji ważne jest ich regularne wykonywanie oraz kopie zapasowe. Po uruchomieniu możliwa jest opcjonalna opieka techniczna." },
      { q: "Czy strona będzie przygotowana pod Google i wyszukiwarki AI?", a: "Przy budowie uwzględniam strukturę treści, nagłówki, szybkość, dostępność dla robotów wyszukiwarek oraz dane strukturalne tam, gdzie mają zastosowanie. Nie istnieje rozwiązanie gwarantujące pojawianie się strony w odpowiedziach AI, ale można stworzyć serwis, którego zawartość jest jednoznaczna i łatwa do interpretacji." },
      { q: "Czy pracujesz z firmami spoza Wrocławia?", a: "Tak. Współpracuję zdalnie z firmami z całej Polski oraz z Niemiec, a rozmowy o projekcie odbywają się online. Po kolejnych etapach udostępniam wersję testową dostępną w przeglądarce." },
    ],
    cta: "Opisz swoją stronę, a wrócę z pierwszą oceną w 24 godziny robocze",
  },
  {
    slug: "aplikacje-nextjs",
    title: "Tworzenie stron Next.js",
    metaTitle: "Tworzenie stron Next.js Wrocław — App Router, edge, premium",
    metaDescription:
      "Tworzenie stron Next.js we Wrocławiu i zdalnie w Polsce i Niemczech. Strony firmowe, integracje API, panele klienta oraz aplikacje webowe dla firm.",
    h1: "Tworzenie stron Next.js. Wrocław i cała Polska.",
    lead:
      "Tworzę strony Next.js dla firm, które potrzebują wydajnego serwisu, integracji z API, własnego panelu albo funkcji wykraczających poza zwykłą stronę ofertową. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Tworzenie stron Next.js to od 2024 roku mój główny obszar pracy. Cały proces mogę prowadzić zdalnie dla firmy z Polski lub Niemiec: spotkanie startowe odbywa się online, a po każdym etapie dostajesz link do wersji testowej. Next.js wybieram tam, gdzie jego możliwości rzeczywiście rozwiązują problem projektu, a nie tylko dlatego, że jest nową technologią.",
      "W Next.js tworzę strony firmowe z niestandardowym interfejsem, serwisy oparte na zewnętrznym CMS oraz aplikacje z własną logiką, na przykład konfiguratory i panele klienta. Przy bardziej klasycznej stronie ofertowej rozważam też prostsze rozwiązania, bo nie każdy projekt potrzebuje aplikacyjnego zaplecza. Więcej o stronach w tym nurcie znajdziesz przy [usłudze nowoczesnych stron internetowych](/uslugi/nowoczesne-strony-internetowe), a osobno opisuję też [headless WordPress](/uslugi/headless-wordpress).",
      "Przykładem aplikacji jest [konfigurator wyceny ogrodzeń dla niemieckiej firmy Galabau Darius](/projekty/galabau-darius). Użytkownik wybiera elementy ogrodzenia i przygotowuje zapytanie, a firma korzysta z panelu administracyjnego. Projekt powstał w Next.js, korzysta z Clerk do logowania, Prisma do pracy z danymi i Vercel do hostingu. Jeśli zastanawiasz się, kiedy wybrać tę technologię zamiast WordPressa, [kryteria decyzyjne opisałem w poście](/blog/next-js-15-vs-wordpress-2026).",
    ],
    bullets: [
      { title: "Nowoczesna architektura Next.js", body: "Korzystam z App Routera i komponentów serwerowych tam, gdzie upraszczają ładowanie danych i ograniczają ilość kodu wysyłanego do przeglądarki. Dobieram rozwiązania do potrzeb projektu zamiast włączać każdą funkcję frameworka tylko dlatego, że jest dostępna." },
      { title: "TypeScript w całym projekcie", body: "Piszę kod w TypeScript, także w warstwie danych i integracjach. Typowanie pomaga wychwycić część błędów przed uruchomieniem aplikacji i ułatwia późniejsze zmiany w większym projekcie." },
      { title: "Logowanie, baza danych i płatności", body: "Gdy projekt tego wymaga, łączę Next.js z Clerk lub NextAuth, PostgreSQL przez Prisma lub Drizzle oraz Stripe. To pozwala budować panele klienta, płatne funkcje i aplikacje zapisujące dane użytkownika." },
      { title: "Wdrożenie i kontrola wydajności", body: "Stronę uruchamiam na Vercel albo własnym VPS, zależnie od architektury. Przed oddaniem wykonuję pomiar Lighthouse na telefonie, z celem co najmniej 90 punktów i LCP poniżej 2,5 s." },
    ],
    process: [
      { step: "01", title: "Zakres pierwszej wersji", body: "Zaczynam od rozmowy o użytkownikach, funkcjach i celu projektu. Rozdzielam elementy potrzebne na start od tych, które można dodać później, żeby pierwsza wersja nie rosła bez kontroli." },
      { step: "02", title: "Projekt i architektura", body: "Przygotowuję makiety w Figmie, uwzględniam dwie tury poprawek i przed rozpoczęciem kodowania ustalam modele danych, integracje oraz sposób logowania. Dzięki temu ważne decyzje zapadają przed budową funkcji." },
      { step: "03", title: "Budowa i wersje testowe", body: "Rozwijam projekt etapami, a po każdym etapie udostępniam link do wersji testowej. Możesz sprawdzać działanie strony lub aplikacji w trakcie prac, zamiast zobaczyć całość dopiero przy publikacji." },
      { step: "04", title: "Publikacja i opieka", body: "Wdrażam projekt, sprawdzam kluczowe funkcje i przekazuję instrukcje potrzebne do obsługi. Po uruchomieniu obejmuję projekt 60-dniową gwarancją i bezpłatnymi poprawkami, a dalsza opieka może działać w miesięcznym abonamencie bez umowy na rok." },
    ],
    faq: [
      { q: "Robisz strony Next.js dla firm spoza Wrocławia?", a: "Tak. Pracuję zdalnie z firmami z całej Polski i z Niemiec. Spotkanie startowe odbywa się online, a kolejne etapy możesz sprawdzać przez link do wersji testowej." },
      { q: "Ile kosztuje strona Next.js we Wrocławiu?", a: "Największy wpływ na koszt ma zakres funkcji, które trzeba zaprogramować poza zwykłą prezentacją treści. Panel klienta, logowanie, baza danych lub rozbudowane integracje zwiększają nakład pracy. Po krótkiej rozmowie i briefie przygotowuję wycenę z zakresem i terminem." },
      { q: "Ile trwa wdrożenie strony Next.js?", a: "Typowa strona firmowa lub usługowa zajmuje zwykle od 4 do 6 tygodni. Jeżeli projekt jest aplikacją lub MVP z własną logiką, orientacyjny termin wynosi od 6 do 12 tygodni. Dokładny harmonogram ustalam po poznaniu zakresu." },
      { q: "Kiedy wybrać Next.js, a kiedy WordPress?", a: "WordPress jest rozsądnym wyborem, gdy serwis opiera się głównie na treści i standardowych funkcjach. Next.js ma więcej sensu, gdy potrzebujesz własnej logiki, integracji z API, panelu użytkownika albo nietypowego sposobu prezentacji danych. Decyzję podejmuję po poznaniu wymagań, a nie na podstawie samej nazwy technologii." },
      { q: "Czy muszę mieć projekt graficzny?", a: "Nie. Mogę przygotować makiety i projekt w Figmie, a przed kodowaniem przewiduję dwie tury poprawek. Jeśli masz już identyfikację wizualną i gotowe komponenty, mogę oprzeć projekt na istniejących materiałach." },
      { q: "Czy stronę da się później edytować bez programisty?", a: "Tak, jeżeli podłączę CMS, na przykład Sanity lub Strapi, możesz samodzielnie zmieniać treści przewidziane w projekcie. Funkcje biznesowe, sposób działania integracji i nowe moduły nadal wymagają zmian w kodzie." },
      { q: "Co z szybkością strony Next.js?", a: "Przed oddaniem projektu sprawdzam jego wydajność w Lighthouse na telefonie. Celem jest wynik co najmniej 90 punktów oraz LCP poniżej 2,5 s, czyli czasu wyświetlenia największego elementu widocznego na ekranie. To cele pomiarowe przed publikacją, a nie obietnica identycznego wyniku w każdych warunkach." },
      { q: "Czy strona w Next.js jest bezpieczniejsza niż WordPress?", a: "Może ograniczać część typowych powierzchni ataku, bo publiczna strona nie musi udostępniać panelu administracyjnego ani działać na zestawie wtyczek WordPressa. Sam wybór Next.js nie zastępuje jednak prawidłowej konfiguracji, aktualizacji zależności, zabezpieczenia logowania i monitoringu." },
      { q: "Czy mogę przenieść obecną stronę do Next.js bez utraty pozycji w Google?", a: "Migrację przygotowuję tak, aby zachować dotychczasowe adresy albo prawidłowo przekierować je kodem 301. Przenoszę też metadane i dane strukturalne, a po wdrożeniu kontroluję indeksowanie w Google Search Console. Nie da się uczciwie zagwarantować niezmienności pozycji, bo wyniki Google zależą także od czynników niezależnych od migracji." },
      { q: "Gdzie jest hostowana strona Next.js?", a: "W zależności od projektu korzystam z Vercel albo z własnego VPS. Wybór zależy od architektury strony, potrzebnych usług i sposobu jej działania." },
      { q: "Czy Next.js nadaje się do małej strony firmowej?", a: "Tak. Next.js nie wymaga, aby serwis był dużą aplikacją. Sprawdza się też przy niewielkiej stronie firmowej, szczególnie gdy liczy się szybkość, kontrola nad kodem albo możliwość późniejszej rozbudowy." },
      { q: "Czym różni się strona Next.js od aplikacji?", a: "Strona przede wszystkim prezentuje treści. Aplikacja pozwala użytkownikowi wykonywać operacje: logować się, zapisywać dane, korzystać z panelu albo otrzymywać wyniki obliczeń. Oba rodzaje projektu mogą powstać w Next.js." },
    ],
    cta: "Opowiedz mi, co ma robić Twoja strona Next.js, a ustalę zakres i kolejne kroki",
  },
  {
    slug: "aplikacje-react",
    title: "Aplikacje React",
    metaTitle: "Programista React: aplikacje i panele dla firm",
    metaDescription:
      "Programista React dla firm: panele, aplikacje za logowaniem i frontend do istniejącego API. React lub Next.js dobieram do funkcji i wymagań projektu.",
    h1: "Programista React do aplikacji i paneli dla firm",
    lead:
      "Tworzę w React panele, aplikacje za logowaniem i warstwy użytkownika do istniejących systemów. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Jako programista React pracuję przy projektach, w których użytkownik wykonuje konkretne zadania: korzysta z panelu, uzupełnia dane, obsługuje formularze albo pracuje na informacjach pobieranych z API. Jeśli firma ma już zaplecze systemu, mogę zbudować do niego nową warstwę aplikacji bez wymiany całego rozwiązania.",
      "Sam React wybieram przede wszystkim do aplikacji działających za logowaniem i narzędzi, które nie potrzebują rozbudowanej części publicznej przeznaczonej dla wyszukiwarek. Gdy projekt ma również publiczne podstrony, wymaga generowania treści po stronie serwera albo łączy aplikację z serwisem marketingowym, częściej sięgam po [Next.js](/uslugi/aplikacje-nextjs).",
      "Przykładem jest [Galabau Darius](/projekty/galabau-darius) dla klienta z Niemiec. W Next.js i React zbudowałem konfigurator wyceny ogrodzeń oraz panel administracyjny z logowaniem przez Clerk i bazą obsługiwaną przez Prisma. Dzięki temu część publiczna i narzędzia dostępne po zalogowaniu działają w jednym projekcie.",
    ],
    bullets: [
      { title: "React do paneli i aplikacji za logowaniem", body: "Buduję interfejsy, w których użytkownik pracuje na danych, obsługuje formularze i wykonuje powtarzalne zadania. Nie dokładam Next.js tam, gdzie sam React wystarcza do rozwiązania problemu." },
      { title: "Integracja z istniejącym API", body: "Jeśli masz już zaplecze systemu, mogę zbudować do niego nowy interfejs w React. Porządkuję komunikację z API i obsługę stanów ładowania, błędów oraz aktualizacji danych." },
      { title: "Komponenty przygotowane do dalszej rozbudowy", body: "Powtarzalne elementy interfejsu buduję jako komponenty, dzięki czemu kolejne widoki można rozwijać bez kopiowania tej samej logiki. Biblioteki dobieram do projektu, zamiast dodawać je na zapas." },
      { title: "Testy tam, gdzie ograniczają ryzyko", body: "Sprawdzam przede wszystkim krytyczne ścieżki aplikacji, czyli te miejsca, których awaria blokowałaby użytkownika. Zakres testów dopasowuję do funkcji i ryzyka zmian." },
    ],
    process: [
      { step: "01", title: "Rozpoznanie aplikacji i istniejącego systemu", body: "Jeśli projekt już działa, najpierw sprawdzam kod, API, zależności i najważniejsze problemy. Przy nowej aplikacji ustalam funkcje, użytkowników i dane potrzebne w poszczególnych widokach." },
      { step: "02", title: "Plan kolejnych etapów", body: "Dzielę zakres na części, które można kolejno projektować, budować i sprawdzać. Po każdym etapie udostępniam Ci wersję testową, żeby decyzje nie zapadały dopiero przy końcowym wdrożeniu." },
      { step: "03", title: "Budowa, przegląd kodu i przekazanie", body: "Implementuję komponenty, integracje z API i potrzebne testy. Jeśli pracuję razem z Twoim zespołem, mogę również przeglądać istniejący kod i wspólnie ustalać sposób dalszej rozbudowy." },
    ],
    faq: [
      { q: "Co jeśli mamy starszy projekt w React?", a: "Najpierw sprawdzam wersję Reacta, zależności i miejsca, które mogą utrudnić aktualizację. Nie zakładam z góry przepisywania aplikacji od nowa. Plan zmian przygotowuję dopiero po sprawdzeniu obecnego kodu i sposobu działania systemu." },
      { q: "Czy mogę zatrudnić Cię jako freelancera React na godziny?", a: "Tak, mogę pracować przy określonym zakresie albo rozliczać pracę według uzgodnionej liczby godzin. Przy takim modelu głównym czynnikiem kosztu jest liczba godzin potrzebnych na realizację zadań. Warunki ustalam przed rozpoczęciem współpracy." },
      { q: "Czy możemy współpracować długoterminowo?", a: "Tak. Mogę rozwijać istniejącą aplikację, wdrażać kolejne funkcje i wspierać zespół przy zmianach w interfejsie lub integracjach. Zakres współpracy ustalam tak, żeby było jasne, za które elementy odpowiadam." },
    ],
    cta: "Napisz, czego potrzebuje aplikacja, a ustalimy zakres prac",
  },
  {
    slug: "wdrozenia-ai",
    title: "Wdrożenia AI",
    metaTitle: "Wdrożenia AI w firmie: automatyzacja i praca z dokumentami",
    metaDescription:
      "Wdrożenia AI w firmie: chatboty, praca z dokumentami i automatyzacja procesów z kontrolą człowieka. Wrocław, zdalnie dla firm w Polsce i Niemczech.",
    h1: "Wdrożenia AI w firmie dla małych zespołów",
    lead:
      "Buduję rozwiązania AI dla firm, które chcą odciążyć konkretny, powtarzalny proces i mierzyć jego wynik. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Wdrożenia AI w firmie zaczynam od procesu, a nie od wyboru modelu. Najpierw sprawdzam, co pracownik robi dzisiaj, jakie dane wykorzystuje, gdzie pojawiają się decyzje człowieka i po czym będzie można poznać, że nowe rozwiązanie rzeczywiście pomaga.",
      "Pracuję przede wszystkim z API OpenAI i Anthropic. Mogę zbudować między innymi wyszukiwarkę odpowiedzi w dokumentach firmy, system klasyfikujący wiadomości, narzędzie przygotowujące szkice odpowiedzi albo proces wspierający tworzenie treści. Jeżeli zwykła automatyzacja wystarczy, nie dokładam AI bez potrzeby.",
      "Własnym przykładem jest [cojestpolskie.pl](/projekty/cojestpolskie). W tym projekcie wykorzystuję AI do researchu właścicieli marek, ale wynik nie jest przyjmowany bez kontroli: informacje są sprawdzane również w KRS i CRBR. Projekt obejmuje ponad 900 marek i ponad 1700 podstron. Więcej o możliwych zastosowaniach opisuję też w [artykule o wdrożeniach AI](/blog/wdrozenia-ai-w-malych-firmach).",
    ],
    bullets: [
      { title: "Odpowiedzi oparte na dokumentach firmy", body: "Mogę zbudować rozwiązanie RAG, czyli system, który wyszukuje potrzebne informacje w przygotowanej bazie wiedzy i przekazuje je modelowi razem z pytaniem. W interfejsie można pokazywać źródła, dzięki czemu użytkownik łatwiej sprawdza odpowiedź." },
      { title: "Wsparcie przy mailach i dokumentach", body: "AI może klasyfikować wiadomości, wyciągać z nich określone dane albo przygotowywać propozycję odpowiedzi. Tam, gdzie błąd ma znaczenie, końcową decyzję zostawiam człowiekowi zamiast automatyzować cały proces bez kontroli." },
      { title: "Generowanie treści z kontrolą wyniku", body: "Model może przygotowywać szkice opisów, postów lub wiadomości według ustalonych zasad. Do procesu dokładam sprawdzanie wymaganych pól, ograniczenia oraz etap ręcznej akceptacji tam, gdzie jest potrzebny." },
      { title: "Pomiar przed pełnym wdrożeniem", body: "Przed rozpoczęciem mierzę obecny czas pracy, liczbę spraw i częstotliwość błędów. Dzięki temu mały prototyp można porównać z dotychczasowym procesem i zdecydować na danych, czy rozwijanie rozwiązania ma sens." },
    ],
    process: [
      { step: "01", title: "Rozpoznanie procesu", body: "Rozpisuję obecny sposób pracy, dane wejściowe, decyzje i oczekiwany wynik. Sprawdzam też, czy problem rzeczywiście wymaga modelu AI, czy wystarczy prostsza automatyzacja." },
      { step: "02", title: "Mały prototyp na jednym procesie", body: "Zaczynam od ograniczonego zakresu, który da się przetestować na rzeczywistych przykładach. Nie podaję stałego terminu wdrożenia AI, bo zależy on od procesu, danych i integracji, a termin ustalam dopiero po rozpoznaniu." },
      { step: "03", title: "Wdrożenie i kontrola jakości", body: "Po pozytywnym teście przygotowuję rozwiązanie do codziennego użycia. Obejmuje to między innymi ocenę jakości odpowiedzi, limity, monitoring kosztów API, obsługę błędów oraz ustalenie, kiedy sprawa powinna trafić do człowieka." },
    ],
    faq: [
      { q: "Ile kosztuje wdrożenie AI w firmie?", a: "Największy wpływ na koszt ma zakres procesu, który ma zostać objęty rozwiązaniem. Mały prototyp obsługujący jeden rodzaj zadania wymaga innej pracy niż system połączony z dokumentami i kilkoma narzędziami firmy. Po rozpoznaniu procesu przygotowuję zakres, wycenę i termin." },
      { q: "Czy dane firmy trafiają do OpenAI lub Anthropic?", a: "To zależy od architektury wdrożenia i wybranego dostawcy. Przed uruchomieniem ustalam, jakie dane rzeczywiście są potrzebne modelowi, czy można je ograniczyć albo zanonimizować oraz gdzie będą przetwarzane. W projektach z danymi osobowymi trzeba dodatkowo uwzględnić obowiązki wynikające z RODO." },
      { q: "Od czego zależy koszt miesięcznego utrzymania AI?", a: "Głównym czynnikiem jest wykorzystanie modelu przez użytkowników lub automatyczne procesy, ponieważ od niego zależą koszty API. Osobno mogą wystąpić hosting, baza danych, monitoring i utrzymanie integracji. Sposób rozliczania dobieram do konkretnej architektury." },
      { q: "Czy AI zastąpi pracownika?", a: "W wielu zastosowaniach bezpieczniejszym celem jest wsparcie człowieka, a nie całkowite usunięcie go z procesu. AI może przygotować szkic, znaleźć informację albo sklasyfikować sprawę, a pracownik zatwierdza wynik. Pełna automatyzacja ma sens głównie wtedy, gdy zadanie jest wąskie, powtarzalne i można jasno kontrolować błędy." },
    ],
    cta: "Opisz proces, który chcesz odciążyć, a sprawdzę, czy AI ma w nim sens",
  },
  {
    slug: "opieka-wordpress",
    title: "Opieka nad stroną WordPress",
    metaTitle: "Opieka nad stroną WordPress — abonament, bez umowy na rok",
    metaDescription:
      "Opieka nad stroną WordPress: aktualizacje, kopie zapasowe, monitoring i drobne zmiany w abonamencie miesięcznym bez umowy na rok.",
    h1: "Opieka nad stroną WordPress. Strona działa, Ty pracujesz.",
    lead:
      "Prowadzę stałą opiekę nad WordPressem dla firm, które chcą zlecić aktualizacje, kopie zapasowe, monitoring i drobne zmiany jednej osobie. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Opieka nad stroną WordPress oznacza, że nie musisz sam pilnować aktualizacji, kopii zapasowych ani reagować na techniczne problemy. Sprawdzam stan strony, aktualizuję WordPress i wtyczki, kontroluję dostępność oraz dbam o podstawowe zabezpieczenia.",
      "W abonamencie mogą mieścić się również drobne prace, takie jak podmiana zdjęcia, zmiana tekstu, aktualizacja cennika czy poprawka w formularzu. Dokładny zakres ustalam przed rozpoczęciem współpracy, żeby było jasne, co wykonuję w ramach stałej opieki, a co wymaga osobnej wyceny.",
      "Najczęściej opiekuję się stronami, które sam zbudowałem w ramach [tworzenia stron WordPress](/uslugi/tworzenie-stron-wordpress), ale mogę też przejąć serwis po innym wykonawcy. Zaczynam wtedy od sprawdzenia motywu, wtyczek, hostingu i kopii zapasowych. Jeśli problemem jest również wydajność, mogę połączyć opiekę z [przyspieszeniem strony WordPress](/uslugi/przyspieszanie-stron-wordpress). Taki abonament nie zawsze ma sens: jeśli strona jest prosta, prawie się nie zmienia i potrzebujesz pomocy raz lub dwa razy w roku, pojedyncze zlecenia mogą być rozsądniejszym rozwiązaniem.",
    ],
    bullets: [
      { title: "Bezpieczne aktualizacje WordPressa", body: "Rdzeń i wtyczki aktualizuję po sprawdzeniu zmian na kopii strony. Jeśli aktualizacja powoduje błąd, mogę wrócić do działającej wersji i znaleźć przyczynę zamiast zostawiać problem na stronie firmowej." },
      { title: "Kopie zapasowe poza hostingiem", body: "Dbam o regularne kopie bazy danych i plików oraz możliwość ich odtworzenia. Kopia przechowywana niezależnie od głównego hostingu daje dodatkowe zabezpieczenie na wypadek awarii lub błędnej aktualizacji." },
      { title: "Monitoring i podstawowe zabezpieczenia", body: "Kontroluję dostępność strony oraz konfiguruję zabezpieczenia logowania i ochronę przed typowymi próbami włamania. Gdy pojawi się problem techniczny, nie musisz najpierw szukać osoby, która zna Twoją instalację." },
      { title: "Drobne zmiany w ramach abonamentu", body: "Ustalony bank godzin możesz wykorzystać na niewielkie poprawki, na przykład zmianę zdjęcia, tekstu, cennika, stopki albo formularza. Większe przebudowy i nowe funkcje wyceniam osobno przed rozpoczęciem prac." },
    ],
    process: [
      { step: "01", title: "Przegląd strony", body: "Sprawdzam WordPress, motyw, wtyczki, hosting, kopie zapasowe i podstawowe zabezpieczenia. Jeśli przejmuję stronę po innym wykonawcy, wskazuję rzeczy, które trzeba uporządkować przed uruchomieniem stałej opieki." },
      { step: "02", title: "Porządki i konfiguracja opieki", body: "Usuwam najważniejsze zaległości, konfiguruję kopie zapasowe, monitoring i zabezpieczenia oraz ustalam zakres prac wykonywanych w abonamencie." },
      { step: "03", title: "Stała obsługa strony", body: "Regularnie wykonuję uzgodnione prace i reaguję na zgłoszenia. Po zakończeniu miesiąca możesz sprawdzić, co zostało zrobione i ile czasu wykorzystały dodatkowe zmiany." },
    ],
    faq: [
      { q: "Ile kosztuje opieka nad stroną WordPress?", a: "Głównym czynnikiem kosztu jest rodzaj strony i związany z nim zakres odpowiedzialności. Prosta witryna firmowa wymaga innej obsługi niż WooCommerce, gdzie po aktualizacjach trzeba również sprawdzać działanie procesu zakupowego. Zakres i miesięczne rozliczenie ustalam po krótkiej rozmowie i sprawdzeniu strony." },
      { q: "Jak szybko reagujesz na awarię?", a: "Sposób obsługi pilnych zgłoszeń ustalam przed rozpoczęciem współpracy, zależnie od zakresu opieki. Monitoring pozwala szybciej zauważyć część problemów z dostępnością, ale nie obiecuję stałej obecności przez całą dobę. Przy zgłoszeniu od razu oceniam, czy problem wymaga pilnej naprawy." },
      { q: "Czy wiąże mnie umowa na rok?", a: "Nie. Opiekę rozliczam miesięcznie i nie wymagam umowy na cały rok. Jeśli stała obsługa przestanie być potrzebna, możesz z niej zrezygnować zgodnie z ustalonym okresem rozliczeniowym." },
      { q: "Moja strona stoi u innej firmy. Przejmiesz ją?", a: "Tak. Najpierw potrzebuję dostępu do panelu WordPress i hostingu, żebym mógł sprawdzić stan motywu, wtyczek, kopii oraz konfiguracji serwera. Jeśli przed rozpoczęciem opieki potrzebne są dodatkowe naprawy, opisuję je i ustalam zakres osobno." },
      { q: "Strona już została zhakowana. Pomożesz?", a: "Mogę najpierw zająć się usunięciem skutków włamania jako osobnym zleceniem. Sprawdzam źródło problemu, usuwam złośliwe pliki i porządkuję dostępy oraz zabezpieczenia. Dopiero po doprowadzeniu strony do prawidłowego stanu ma sens objęcie jej stałą opieką." },
      { q: "Czy opieka obejmuje też hosting?", a: "Hosting opłacasz bezpośrednio u jego dostawcy, dzięki czemu konto i usługa pozostają po Twojej stronie. Mogę pomóc dobrać środowisko i przenieść stronę, jeśli obecny serwer jest problemem. W codziennej opiece zajmuję się stroną działającą na tym hostingu, a nie odsprzedażą samej usługi serwerowej." },
    ],
    cta: "Podeślij adres strony, a sprawdzę, jaki zakres opieki będzie miał sens",
  },
  {
    slug: "przyspieszanie-stron-wordpress",
    title: "Przyspieszanie stron WordPress",
    metaTitle: "Przyspieszenie strony WordPress — Core Web Vitals na zielono",
    metaDescription:
      "Przyspieszenie strony WordPress z pomiarem PageSpeed i Lighthouse przed i po zmianach. Optymalizacja obrazów, kodu, pamięci podręcznej i hostingu.",
    h1: "Przyspieszanie stron WordPress. Liczby przed i po, nie obietnice.",
    lead:
      "Przyspieszam strony WordPress i WooCommerce, zaczynając od pomiaru, a kończąc raportem pokazującym te same parametry przed i po zmianach. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Przyspieszenie strony WordPress zaczynam od ustalenia, co naprawdę ją spowalnia. Problemem mogą być zbyt ciężkie obrazy, rozbudowany kreator stron, niepotrzebne skrypty, duża liczba wtyczek, brak pamięci podręcznej albo hosting, który zbyt wolno odpowiada.",
      "Najpierw sprawdzam kluczowe podstrony w PageSpeed Insights i Lighthouse. Potem zajmuję się elementami, które mają największy wpływ na wynik: optymalizuję obrazy, ograniczam niepotrzebny JavaScript i CSS, konfiguruję pamięć podręczną oraz sprawdzam serwer. Jeśli dostępne są dane Core Web Vitals od rzeczywistych użytkowników, również biorę je pod uwagę.",
      "Moim celem jest LCP poniżej 2,5 s, czyli próg uznawany przez Google za dobry. Nie obiecuję wyniku bez wcześniejszego pomiaru, bo możliwości zależą od konstrukcji konkretnej strony. Po zakończeniu dostajesz porównanie tych samych podstron i parametrów przed oraz po wykonanych pracach. Jeśli potrzebujesz później regularnej obsługi, zobacz [opiekę nad stroną WordPress](/uslugi/opieka-wordpress). Przy serwisie, którego obecna konstrukcja mocno ogranicza możliwości optymalizacji, rozsądniejsza może być [nowa strona WordPress](/uslugi/tworzenie-stron-wordpress).",
    ],
    bullets: [
      { title: "Pomiar przed i po wykonanych zmianach", body: "Te same podstrony sprawdzam przed rozpoczęciem prac i po ich zakończeniu. Dzięki temu widzisz w raporcie, które parametry się zmieniły, zamiast opierać się na ogólnym stwierdzeniu, że strona jest szybsza." },
      { title: "Lżejsze obrazy i zasoby strony", body: "Optymalizuję rozmiary grafik, stosuję nowoczesne formaty tam, gdzie mają sens, i ograniczam ładowanie elementów niewidocznych na pierwszym ekranie. Sprawdzam też sposób wczytywania krojów pisma." },
      { title: "Lepsze wykorzystanie pamięci podręcznej i hostingu", body: "Konfiguruję mechanizmy pamięci podręcznej odpowiednie dla danej strony i sprawdzam, czy serwer nie jest wąskim gardłem. Jeśli problem wynika z hostingu, wskazuję to zamiast maskować go kolejnymi wtyczkami." },
      { title: "Mniej zbędnego JavaScriptu i CSS", body: "Sprawdzam, które skrypty i style są potrzebne na danej podstronie, a które można ograniczyć lub ładować później. W WooCommerce szczególnie uważam na koszyk, płatności i inne elementy niezbędne do złożenia zamówienia." },
    ],
    process: [
      { step: "01", title: "Pomiar wydajności", body: "Mierzę kluczowe podstrony i sprawdzam LCP, INP, CLS oraz inne dane, które pomagają znaleźć źródło problemu. Na tej podstawie określam zakres prac i przygotowuję wycenę." },
      { step: "02", title: "Wdrożenie poprawek", body: "Zmiany przygotowuję i sprawdzam na kopii strony, a następnie przenoszę je do działającego serwisu. Zakres może obejmować obrazy, pamięć podręczną, kod, wtyczki oraz konfigurację hostingu." },
      { step: "03", title: "Ponowny pomiar i raport", body: "Po wdrożeniu badam te same podstrony tymi samymi narzędziami. Dostajesz porównanie wyników oraz wskazówki, czego unikać później, żeby kolejne zmiany nie pogorszyły wydajności." },
    ],
    faq: [
      { q: "Ile kosztuje przyspieszenie strony WordPress?", a: "Największy wpływ na koszt ma złożoność strony, którą trzeba przeanalizować i poprawić. Prosta strona firmowa ma mniej miejsc do sprawdzenia niż WooCommerce z koszykiem, płatnościami i wieloma szablonami produktów. Zakres i wycenę ustalam po pierwszej analizie serwisu." },
      { q: "Ile trwa optymalizacja szybkości?", a: "Nie podaję stałego terminu przed sprawdzeniem strony, ponieważ liczba i rodzaj problemów mogą się bardzo różnić. Inaczej wygląda poprawa kilku obrazów i konfiguracji pamięci podręcznej, a inaczej praca nad rozbudowanym sklepem albo ciężkim kreatorem. Termin podaję razem z zakresem po rozpoznaniu." },
      { q: "O ile realnie strona przyspieszy?", a: "Nie podaję wyniku przed pomiarem, ponieważ zależy on od obecnej konstrukcji strony i ograniczeń jej technologii. Przed rozpoczęciem sprawdzam, gdzie jest miejsce na poprawę, a po zakończeniu pokazuję te same parametry jeszcze raz. Moim celem jest LCP poniżej 2,5 s, ale nie każda istniejąca strona pozwala osiągnąć ten próg bez większej przebudowy." },
      { q: "Czy szybsza strona poprawi pozycje w Google?", a: "Core Web Vitals są jednym z sygnałów wykorzystywanych przez Google, ale sama poprawa szybkości nie daje gwarancji określonej pozycji. Na widoczność wpływają również między innymi treść, struktura serwisu, konkurencja i inne czynniki. Dlatego raportuję wydajność strony, a nie obiecuję wyniku w wyszukiwarce." },
      { q: "Czy optymalizujesz też sklepy WooCommerce?", a: "Tak. W sklepie oprócz zwykłych podstron sprawdzam również elementy procesu zakupowego, takie jak koszyk i płatności, bo optymalizacja nie może zepsuć składania zamówień. Głównym czynnikiem zakresu pracy jest liczba elementów WooCommerce i dodatkowych wtyczek, które trzeba bezpiecznie przetestować." },
      { q: "Co jeśli efektu nie będzie?", a: "Pierwszy pomiar służy właśnie temu, żeby ocenić, co można poprawić przed rozpoczęciem większych prac. Jeśli strona jest już dobrze zoptymalizowana albo jej głównym ograniczeniem jest konstrukcja, której nie da się rozsądnie poprawić w ramach tej usługi, mówię o tym przed wdrożeniem. Nie ma sensu wykonywać zmian tylko po to, żeby powstało zlecenie." },
    ],
    cta: "Podeślij adres strony, a sprawdzę, gdzie rzeczywiście traci wydajność",
  },
  {
    slug: "integracja-woocommerce-z-baselinker",
    title: "Integracja WooCommerce z BaseLinker",
    metaTitle: "Integracja WooCommerce z BaseLinker — zamówienia, stany, Allegro",
    metaDescription:
      "Integracja WooCommerce z BaseLinker: zamówienia, stany, ceny, hurtownie, Allegro i obsługa wysyłek w jednym procesie. Wrocław i praca zdalna.",
    h1: "Integracja WooCommerce z BaseLinker",
    lead:
      "Integruję WooCommerce z BaseLinker dla sklepów, które chcą obsługiwać zamówienia, stany, ceny i kolejne kanały sprzedaży z jednego procesu. Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.",
    intro: [
      "Integracja WooCommerce z BaseLinker łączy sklep z systemem, w którym możesz obsługiwać zamówienia i synchronizować dane pomiędzy kanałami sprzedaży. Samo techniczne połączenie jest tylko początkiem. Trzeba jeszcze ustalić, skąd pochodzą stany i ceny, które statusy mają się przenosić oraz w którą stronę mają płynąć poszczególne dane.",
      "Więcej pracy wymagają sklepy korzystające z katalogów hurtowni. Zamiast przenosić cały asortyment do WooCommerce, można wybrać produkty przeznaczone do sprzedaży i powiązać je z danymi dostawcy. Tak skonfigurowałem [Kosmotekę](/projekty/kosmoteka), sklep z teleskopami na WooCommerce: produkty zostały powiązane z magazynem hurtowni, a do sklepu trafiał wybrany asortyment.",
      "Przed uruchomieniem synchronizacji sprawdzam również SKU, EAN i atrybuty wariantów, bo nieporządek w katalogu utrudnia prawidłowe powiązanie produktów. BaseLinker może być też punktem łączącym sklep z kurierami, obsługą etykiet, fakturami, dodatkowymi platformami sprzedażowymi albo systemem magazynowym czy ERP. Zakres takich połączeń ustalam osobno, zależnie od narzędzi używanych w Twojej firmie. Jeśli sklep dopiero powstaje, zobacz [wdrożenie sklepu WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
    ],
    bullets: [
      { title: "Zamówienia i statusy w jednym procesie", body: "Zamówienia z WooCommerce mogą trafiać do BaseLinker razem z danymi potrzebnymi do realizacji. Ustalam również sposób przekazywania statusów, żeby informacje o obsłudze zamówienia wracały do sklepu zgodnie z ustalonym procesem." },
      { title: "Kontrolowana synchronizacja stanów i cen", body: "Dla poszczególnych danych ustalam źródło i kierunek synchronizacji. Dzięki temu cena ustawiona świadomie w sklepie nie powinna zostać przypadkowo zastąpiona wartością z innego źródła, a stan magazynowy ma jedno jasno określone miejsce nadrzędne." },
      { title: "Połączenie sklepu z hurtownią", body: "Konfiguruję przepływ danych dla wybranych produktów z katalogu dostawcy. Pozwala to korzystać z aktualizowanych stanów i cen bez konieczności publikowania w WooCommerce całej oferty hurtowni." },
      { title: "Wspólne stany dla różnych kanałów sprzedaży", body: "WooCommerce i dodatkowy kanał, na przykład Allegro, mogą korzystać z tego samego magazynu w BaseLinker. W podobny sposób BaseLinker może połączyć proces sprzedaży z kurierami, etykietami, fakturami lub innymi systemami, jeśli konkretny zakres zostanie wcześniej sprawdzony." },
    ],
    process: [
      { step: "01", title: "Przegląd sklepu i kanałów", body: "Sprawdzam, gdzie obecnie sprzedajesz, z jakich hurtowni korzystasz, jak realizujesz wysyłki i w jakim stanie jest katalog produktów. Ustalamy również, które dane mają być synchronizowane i które źródło ma być nadrzędne." },
      { step: "02", title: "Porządki w katalogu", body: "Sprawdzam SKU, EAN oraz atrybuty wariantów i wskazuję dane wymagające uzupełnienia. Poprawne identyfikatory są potrzebne, żeby produkty, zamówienia i oferty można było jednoznacznie ze sobą powiązać." },
      { step: "03", title: "Konfiguracja i test zamówienia", body: "Łączę WooCommerce z BaseLinker przez REST API i konfiguruję uzgodnione magazyny, statusy oraz przepływ danych. Następnie wykonuję test pełnej ścieżki, obejmujący zamówienie, przekazanie go do BaseLinker i kolejne elementy procesu ustalone dla sklepu." },
      { step: "04", title: "Uruchomienie synchronizacji", body: "Po testach włączam konfigurację dla działającego sklepu i przekazuję sposób obsługi osobie odpowiedzialnej za zamówienia. Konto BaseLinker pozostaje na Twojej firmie, a mój dostęp możesz odebrać po zakończeniu wdrożenia." },
    ],
    faq: [
      { q: "Ile kosztuje integracja WooCommerce z BaseLinker?", a: "Głównym czynnikiem kosztu jest liczba i złożoność połączeń, które trzeba skonfigurować. Sam sklep z jednym magazynem wymaga mniej pracy niż układ obejmujący hurtownie, dodatkowe kanały sprzedaży, kurierów albo inne systemy. Zakres i termin wyceniam po przeglądzie obecnej konfiguracji." },
      { q: "Ile trwa integracja WooCommerce z BaseLinker?", a: "Nie podaję stałego terminu dla całej usługi, ponieważ zależy on od zakresu i stanu danych w sklepie. Proste połączenie wymaga mniej pracy niż projekt obejmujący porządkowanie katalogu, hurtownie i kilka kanałów sprzedaży. Termin ustalam po rozpoznaniu konfiguracji." },
      { q: "Jak BaseLinker łączy się z WooCommerce?", a: "Połączenie wykorzystuje REST API WooCommerce. W sklepie tworzony jest klucz z odpowiednimi uprawnieniami, który następnie służy do autoryzacji integracji. Dostęp powinien być przechowywany bezpiecznie i udostępniany tylko osobom, które rzeczywiście go potrzebują." },
      { q: "BaseLinker nie pobiera zamówień z WooCommerce. Co sprawdzić?", a: "Sprawdzam między innymi działanie klucza REST API, ustawienia importu i statusy zamówień objęte synchronizacją. Błąd 401 może wskazywać na problem z autoryzacją połączenia. Jeśli pozostałe kanały działają poprawnie, można zawęzić diagnozę do integracji WooCommerce zamiast przebudowywać cały system." },
      { q: "Czy BaseLinker da mi produkty z hurtowni?", a: "BaseLinker może pobierać dane udostępnione przez hurtownię, ale nie zastępuje umowy handlowej z dostawcą. Najważniejszym warunkiem uruchomienia takiego połączenia jest dostęp do źródła produktowego udostępnionego przez hurtownię. Gdy dostawca je zapewni, mogę skonfigurować sposób wykorzystania danych w sklepie." },
      { q: "Czy mogę sprzedawać w sklepie i na Allegro z jednego magazynu?", a: "Tak, jeśli oba kanały zostaną odpowiednio powiązane z magazynem w BaseLinker. Stan może wtedy być aktualizowany w jednym miejscu i wykorzystywany przez sklep oraz Allegro. Ten sam model można rozszerzać na inne kanały, ale każdą dodatkową integrację trzeba sprawdzić pod kątem sposobu synchronizacji." },
      { q: "Czyje jest konto w BaseLinkerze?", a: "Konto zakładasz na własną firmę i samodzielnie opłacasz usługę Base. Na czas konfiguracji potrzebuję dostępu potrzebnego do wdrożenia i testów. Po zakończeniu możesz odebrać mi dostęp, a ustawienia pozostają na Twoim koncie." },
    ],
    cta: "Napisz, gdzie sprzedajesz i z jakich systemów korzystasz, a ustalę zakres integracji",
  },
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
