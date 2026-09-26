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
      "WordPress z custom theme (bez Elementora i Avada), Core Web Vitals 95+, panel edycji 1:1 z designem, Yoast/Rank Math od pierwszego dnia. Wrocław i online.",
    h1: "Tworzenie stron WordPress. Wrocław, edycja bez kodu.",
    lead:
      "WordPress wybiera się, gdy klient chce sam edytować treści bez zaglądania do kodu. Zrobiony dobrze, jest szybki, bezpieczny i indeksowalny. Zrobiony źle, muli, łapie malware i wygląda jak 800 innych stron z Elementora.",
    intro: [
      "Stawiam WordPressy od 2020 roku. Zrobiłem ponad 25 wdrożeń WordPress: kancelarie, hotele, sklepy WooCommerce, portfolio prywatne. Za każdym razem ten sam zestaw: własny motyw, niezbędne minimum wtyczek, Yoast albo Rank Math i LiteSpeed Cache. Bez gotowych motywów typu Avada/Divi, które dokładają setki kilobajtów zbędnego JavaScriptu.",
      "Konkretne realizacje WordPressowe znajdziesz w [pełnej liście projektów](/projekty), m.in. [Kancelaria Maria Piontek](/projekty/kancelaria-mpiontek), [INBC broker ubezpieczeniowy](/projekty/inbc), [RCOM Service](/projekty/rcom-service). Sklep internetowy WooCommerce to osobna usługa, [opisana tutaj](/uslugi/sklepy-internetowe-woocommerce).",
    ],
    bullets: [
      {
        title: "Własny motyw, nie gotowiec",
        body: "Każdy projekt na własnym motywie. W kodzie jest tylko to, czego używasz. Lighthouse 95+ w standardzie, bez 50 nieużywanych bloków sekcji z Elementora.",
      },
      {
        title: "Edycja 1:1 z designem",
        body: "ACF Pro lub Bricks Builder dla pól dynamicznych. Klient widzi w panelu te same nazwy sekcji co na stronie. Bez chaosu z Gutenbergiem.",
      },
      {
        title: "Bezpieczeństwo w standardzie",
        body: "Wordfence, ograniczenia logowania, logowanie dwuskładnikowe, automatyczne kopie zapasowe w osobnym miejscu, nagłówki bezpieczeństwa w .htaccess.",
      },
      {
        title: "SEO od pierwszego dnia",
        body: "Yoast lub Rank Math, schema.org Person/Service/Article, sitemap, optymalizacja Core Web Vitals, integracja z Search Console.",
      },
    ],
    process: [
      { step: "01", title: "Brief i wycena", body: "30-minutowa rozmowa, mailowy brief, wycena z terminem w 24h." },
      { step: "02", title: "Projekt graficzny", body: "Makiety w Figmie. Klient akceptuje design przed rozpoczęciem kodu." },
      { step: "03", title: "Programowanie", body: "Własny motyw od zera, ACF do pól edytowalnych, praca lokalnie i na wersji testowej." },
      { step: "04", title: "Optymalizacja", body: "Core Web Vitals, schema, sitemap, robots, Search Console. Lighthouse 95+." },
      { step: "05", title: "Wdrożenie + szkolenie", body: "Migracja na produkcję bez przerwy. 30-min szkolenie z edycji w panelu." },
    ],
    faq: [
      { q: "Ile kosztuje strona WordPress?", a: "Wycena zależy od zakresu wizytówki lub strony usługowej, liczby podstron, bloga i customowej logiki. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Dlaczego nie używasz Avada / Divi / Elementor?", a: "Bo dokładają 200-400 KB JavaScriptu do każdej podstrony, spowalniają ją, utrudniają utrzymanie i sprawiają, że strony wyglądają podobnie. Własny motyw daje lepsze wyniki i stronę, która nie wygląda jak wszystkie inne." },
      { q: "Czy strona będzie szybka?", a: "Tak. LiteSpeed cache + custom theme + obrazki WebP/AVIF + lazy loading. Cel: Lighthouse 95+, LCP poniżej 2.5s, INP poniżej 200ms." },
      { q: "Czy mogę sam edytować po wdrożeniu?", a: "Tak. Na koniec dostajesz 30-min szkolenie. Pola sekcji w panelu mają te same nazwy co na stronie. Plus dokumentacja PDF." },
      { q: "Jaki hosting polecasz?", a: "Hostinger Business lub cyber_folks Premium. Oba mają LiteSpeed cache, codzienne backupy, SSL, sensowne wsparcie." },
      { q: "Ile trwa stworzenie strony WordPress?", a: "Prosta strona WordPress zajmuje zwykle od 2 do 3 tygodni, typowa strona usługowa od 4 do 6 tygodni. Dokładny termin zależy od zakresu projektu i materiałów potrzebnych do rozpoczęcia prac." },
      { q: "Czy po wdrożeniu zapewniasz wsparcie techniczne?", a: "Tak. Po uruchomieniu strony obowiązuje 60 dni gwarancji i bezpłatnych poprawek. Później mogę zajmować się stroną w ramach opcjonalnej miesięcznej opieki bez umowy na rok." },
      { q: "Czy strona będzie zgodna z RODO i dostępna dla osób z niepełnosprawnościami?", a: "W części technicznej konfiguruję GA4 tak, aby statystyki uruchamiały się dopiero po zgodzie na cookies. Dostępność strony mogę zweryfikować w audycie według WCAG 2.1 AA. Dokumenty i obowiązki prawne firmy wymagają osobnej oceny ich treści." },
      { q: "Czy instalujesz statystyki i zgłaszasz stronę do Google?", a: "Tak. Przy wdrożeniu przygotowuję mapę strony i zgłaszam ją w Google Search Console. GA4 konfiguruję tak, aby uruchamiał się po zgodzie użytkownika na cookies." },
      { q: "Czy tworzysz strony WordPress dla firm spoza Wrocławia?", a: "Tak. Pracuję z Wrocławia, ale realizuję projekty dla klientów z całej Polski i z Niemiec. Współpraca przebiega zdalnie: spotkanie startowe odbywa się online, a po każdym etapie udostępniam link do wersji testowej." },
    ],
    cta: "Napisz brief, dostaniesz wycenę WordPressa w 24h",
  },
  {
    slug: "sklepy-internetowe-woocommerce",
    title: "Sklepy internetowe WooCommerce",
    metaTitle: "Sklepy WooCommerce Wrocław — wdrożenie i optymalizacja",
    metaDescription:
      "Sklepy WooCommerce we Wrocławiu i zdalnie w całej Polsce: Przelewy24, BLIK, InPost, Allegro, BaseLinker, B2B i wersje językowe. Własny motyw, szybki koszyk.",
    h1: "Sklepy internetowe WooCommerce. Wrocław i cała Polska.",
    lead:
      "WooCommerce robi 30% sklepów online na świecie. Działa, jest tani, integruje się ze wszystkim, czego potrzebujesz w polskim e-commerce. Wymaga jednak osoby, która wie, jak go skonfigurować pod konwersję, nie tylko jak go zainstalować.",
    intro: [
      "Najnowsze wdrożenie sklepu WooCommerce: [Kosmoteka](/projekty/kosmoteka), sklep z teleskopami i sprzętem obserwacyjnym, z kompletnymi integracjami płatności i wysyłki, optymalizacją Core Web Vitals i SEO. Wcześniej kilka mniejszych sklepów, głównie branża meblowa i odzieżowa, m.in. [LumiKids](/projekty/lumikids).",
      "WooCommerce wybiera się, gdy budżet jest ograniczony, klient chce edycji bez programisty, a integracje z polskim ekosystemem (Przelewy24, InPost, Allegro) są kluczowe. Dla większych sklepów (1000+ SKU, multistore, headless) sugeruję inne technologie. Jeśli zastanawiasz się, czy WooCommerce wystarczy, [opisałem kryteria w poście](/blog/next-js-15-vs-wordpress-2026). Sprzedaż w sklepie i na Allegro z jednego magazynu spinam przez [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker).",
    ],
    bullets: [
      {
        title: "Pełne integracje PL",
        body: "Przelewy24, Stripe, BLIK, Apple Pay. InPost Paczkomaty, DPD, Furgonetka. Allegro Sync. Faktury (Fakturownia, wFirma, iFirma). Polskie wymogi RODO.",
      },
      {
        title: "Optymalizacja konwersji",
        body: "Skrócony checkout, koszyk zapamiętywany między wizytami, dosprzedaż na karcie produktu, ratowanie porzuconych koszyków, Google/Meta Pixel, GA4 enhanced ecommerce, testy A/B.",
      },
      {
        title: "Wydajność",
        body: "LiteSpeed cache + Cloudflare CDN. Koszyk AJAX, leniwe ładowanie zdjęć produktów, optymalizacja zapytań do bazy. Cel: poniżej 2s LCP nawet przy 1000+ produktach.",
      },
      {
        title: "B2B i wersje językowe",
        body: "Cenniki per grupa klientów (B2B i B2C), minimalne wielkości zamówień, produkty widoczne tylko dla wybranych grup. Polylang/WPML dla wersji obcojęzycznych.",
      },
    ],
    process: [
      { step: "01", title: "Warsztat produktowy", body: "Mapa produktów, kategorie, atrybuty, integracje, model rozliczeń, polityki sklepu." },
      { step: "02", title: "Design + UX", body: "Makiety katalogu, karty produktu, koszyka i zamówienia. Najpierw wersja na telefon." },
      { step: "03", title: "Wdrożenie WooCommerce", body: "Custom theme, konfiguracja produktów, integracje płatności i wysyłki, podatki." },
      { step: "04", title: "Testy + GA4", body: "Testowanie zamówień end-to-end, GA4 enhanced ecommerce, Pixel, conversion tracking." },
      { step: "05", title: "Start + opieka", body: "Migracja produktów ze starego sklepu (jeśli jest), opieka miesięczna z monitoringiem." },
    ],
    faq: [
      { q: "Ile kosztuje sklep WooCommerce?", a: "Wycena zależy od liczby produktów, integracji, obsługi B2B, wersji językowych oraz architektury headless lub multistore. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa wdrożenie sklepu WooCommerce?", a: "Mniejszy sklep: 6-8 tygodni od warsztatu do startu sprzedaży. Średni z B2B, wersjami językowymi i migracją produktów: 10-14 tygodni. Termin blokuję w kalendarzu przy podpisaniu oferty." },
      { q: "Czy mogę sam dodawać produkty?", a: "Tak. WooCommerce ma standardowy panel produktów, plus wgrasz CSV/XML masowo z Excela. Każda kategoria, atrybut i wariant edytowalny." },
      { q: "Co z migracją z innej platformy (Shoper, IdoSell, Shopify)?", a: "Robię migracje z większości polskich platform. Eksport produktów + zamówień + klientów + przekierowania 301 starych URLi pod nowe (krytyczne dla SEO)." },
      { q: "Czy WooCommerce nadąży przy dużym ruchu?", a: "Z dobrym hostingiem (LiteSpeed cache + Cloudflare + Redis dla object cache) wytrzymuje 10-50 tys. wizyt dziennie. Powyżej rekomenduję headless (Next.js commerce + WooCommerce jako backend)." },
      { q: "Co z fakturowaniem i podatkami?", a: "Integracja z Fakturownia/wFirma/iFirma: automatyczne faktury po zamówieniu. Konfiguracja stawek VAT, płatności B2B z NIP, eksport do księgowej co miesiąc." },
      { q: "Czy korzystasz z gotowych motywów WooCommerce?", a: "Nowe sklepy WooCommerce tworzę na własnym motywie i nie używam w nich Elementora. Dzięki temu struktura strony i funkcje wynikają z potrzeb sklepu, a nie z możliwości konkretnego kreatora." },
      { q: "Czy WooCommerce sprawdzi się w sprzedaży B2B?", a: "Tak. WooCommerce może obsługiwać sprzedaż B2B, w tym różne ceny dla grup klientów i minimalne zamówienia. Zakres funkcji dobieram do zasad handlowych obowiązujących w konkretnej firmie." },
      { q: "Czy możesz przejąć sklep WooCommerce po innym wykonawcy?", a: "Tak. Na początku sprawdzam stan techniczny sklepu: motyw, wtyczki, aktualizacje, kopie zapasowe i wydajność. Potem określam, co warto zachować, a co przebudować." },
      { q: "Czy sklep może mieć kilka wersji językowych i sprzedawać za granicę?", a: "Tak. WooCommerce można przygotować do obsługi kilku wersji językowych i sprzedaży na różnych rynkach. Najlepiej uwzględnić to już przy projektowaniu struktury produktów, kategorii i treści." },
      { q: "Kiedy WooCommerce nie będzie dobrym wyborem?", a: "Nie proponuję WooCommerce automatycznie do każdego projektu. Przy bardzo dużym katalogu, wysokim ruchu, rozbudowanym multistore albo nietypowych wymaganiach mogę zaproponować inne rozwiązanie, w tym PrestaShop albo architekturę headless." },
      { q: "A jeśli mam mały asortyment?", a: "Mały katalog nie jest przeszkodą. WooCommerce dobrze działa również przy niewielkiej liczbie produktów, szczególnie gdy liczy się własna strona marki, treści poradnikowe i możliwość późniejszej rozbudowy sklepu." },
    ],
    cta: "Pogadajmy o sklepie 30 minut, wycena w 48h",
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
      "Stała opieka nad stroną WordPress: aktualizacje na stagingu, backupy, monitoring i drobne poprawki w cenie. Abonament miesięczny, bez umowy na rok.",
    h1: "Opieka nad stroną WordPress. Strona działa, Ty pracujesz.",
    lead:
      "Abonamentowa opieka nad WordPressem dla firm, które nie mają działu IT: aktualizacje, kopie zapasowe, monitoring dostępności, bezpieczeństwo i bank godzin na drobne zmiany. Płacisz miesięcznie, rezygnujesz kiedy chcesz.",
    intro: [
      "WordPress bez opieki niszczeje. Wtyczki wypuszczają aktualizacje co tydzień, PHP na hostingu zmienia wersję, a boty skanują znane luki dzień po ich publikacji. Efekt odkładania: pewnego ranka formularz przestaje wysyłać, strona wita klientów białym ekranem albo, gorzej, reklamami z doklejonego malware.",
      "W abonamencie robię to, czego właściciel strony nie powinien musieć pilnować: aktualizacje wtyczek i rdzenia testowane na kopii przed wgraniem na produkcję, codzienne backupy trzymane poza hostingiem, monitoring dostępności z alertem, twarde zabezpieczenia logowania i firewall. Do tego bank godzin na drobne zmiany treści czy poprawki, żeby nie płacić osobnej faktury za wymianę banera.",
      "Opiekuję się głównie stronami, które sam zbudowałem ([tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress)), ale przejmuję też strony po innych wykonawcach, po audycie wejściowym. Jeśli strona przy okazji muli, zobacz [przyspieszanie stron WordPress](/uslugi/przyspieszanie-stron-wordpress), często łączę obie usługi.",
    ],
    bullets: [
      {
        title: "Aktualizacje bez niespodzianek",
        body: "Wtyczki i rdzeń najpierw na kopii roboczej, dopiero po sprawdzeniu na produkcję. Gdy coś się gryzie, wraca poprzednia wersja i szukam obejścia.",
      },
      {
        title: "Backupy, które da się odtworzyć",
        body: "Codzienna kopia bazy i plików poza hostingiem. Raz na miesiąc testowe odtworzenie, bo backup nietestowany to tylko nadzieja, nie kopia.",
      },
      {
        title: "Bezpieczeństwo i monitoring",
        body: "Firewall aplikacyjny, limit prób logowania, logowanie dwuskładnikowe, skan malware. Monitoring dostępności co minutę z alertem na mój telefon.",
      },
      {
        title: "Bank godzin na drobiazgi",
        body: "Wymiana zdjęcia, nowy cennik, poprawka w stopce: w ramach abonamentu, bez osobnych wycen. Większe prace wyceniam normalnie, z rabatem dla stałych klientów.",
      },
    ],
    process: [
      { step: "01", title: "Audyt wejściowy", body: "Przegląd wtyczek, motywu, hostingu, kopii i luk. Lista rzeczy do naprawy przed startem opieki." },
      { step: "02", title: "Porządki i zabezpieczenie", body: "Aktualizacje zaległości, konfiguracja backupów, firewall, monitoring. Strona wchodzi w opiekę czysta." },
      { step: "03", title: "Miesięczny rytm", body: "Aktualizacje co tydzień, raport co miesiąc: co zrobione, ile godzin banku zużyte, co wymaga decyzji." },
    ],
    faq: [
      { q: "Ile kosztuje opieka nad stroną WordPress?", a: "Wycena zależy od tego, czy opieka dotyczy prostej strony firmowej, strony z blogiem i częstymi zmianami czy sklepu WooCommerce, w którym dochodzi testowanie zamówień po każdej aktualizacji. Zakres obejmuje bank godzin na drobne zmiany. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Jak szybko reagujesz na awarię?", a: "Strona nie działa: reakcja do 2 godzin w dni robocze, zwykle szybciej, bo monitoring wysyła mi alert zanim klient zdąży zauważyć. Drobne zgłoszenia i zmiany: do 48 godzin." },
      { q: "Czy wiąże mnie umowa na rok?", a: "Nie. Rozliczenie miesięczne, rezygnacja z końcem miesiąca. Umowy roczne w tej usłudze służą zwykle temu, żeby dało się o kliencie zapomnieć." },
      { q: "Moja strona stoi u innej firmy. Przejmiesz ją?", a: "Tak, po audycie wejściowym. Potrzebuję dostępu do panelu WP i hostingu. Audyt pokazuje, w jakim stanie jest strona i co trzeba wyprostować przed startem stałej opieki." },
      { q: "Strona już została zhakowana. Pomożesz?", a: "Tak, czyszczenie po włamaniu robię jako osobną usługę: identyfikacja wejścia, usunięcie malware, wymiana kluczy i haseł, zgłoszenie do Google. Potem zwykle przechodzimy na stałą opiekę, żeby to się nie powtórzyło." },
      { q: "Czy opieka obejmuje też hosting?", a: "Doradzę i przeniosę stronę na sensowny hosting (Hostinger, cyber_folks), ale faktura za hosting zostaje po Twojej stronie. Dzięki temu strona i domena są zawsze Twoje, nie wynajęte ode mnie." },
    ],
    cta: "Napisz, podeślij adres strony, wrócę z wyceną opieki w 24h",
  },
  {
    slug: "przyspieszanie-stron-wordpress",
    title: "Przyspieszanie stron WordPress",
    metaTitle: "Przyspieszenie strony WordPress — Core Web Vitals na zielono",
    metaDescription:
      "Optymalizacja szybkości WordPress: pomiar przed i po, obrazy WebP/AVIF, cache LiteSpeed, odchudzanie JavaScriptu. LCP poniżej 2,5 s, raport z liczbami.",
    h1: "Przyspieszanie stron WordPress. Liczby przed i po, nie obietnice.",
    lead:
      "Wolna strona kosztuje dwa razy: użytkownicy uciekają przed załadowaniem, a Google obniża pozycje za słabe Core Web Vitals. Optymalizuję WordPressy od pomiaru do zielonych metryk, z raportem przed i po.",
    intro: [
      "Typowy wolny WordPress to zawsze ta sama czwórka: obrazki wgrywane prosto z telefonu, page builder doklejający setki kilobajtów JavaScriptu, brak sensownego cache i tani hosting z wolnym czasem odpowiedzi. Dobra wiadomość: każdy z tych problemów da się zmierzyć i naprawić, bez przebudowy strony od zera.",
      "Pracuję na liczbach. Najpierw pomiar w PageSpeed Insights i realnych danych CrUX, potem poprawki od największej dźwigni: konwersja obrazów do WebP/AVIF z leniwym ładowaniem, cache LiteSpeed albo Redis, czyszczenie nieużywanego JavaScriptu i CSS, poprawki fontów, w razie potrzeby zmiana hostingu. Na końcu drugi pomiar i raport: co było, co jest, co to zmienia.",
      "Cel: LCP poniżej 2,5 sekundy i wszystkie trzy Core Web Vitals na zielono. Dla sklepów WooCommerce dochodzi koszyk i checkout, gdzie szybkość przekłada się wprost na porzucenia. Jeśli strona wymaga też stałego doglądania, spójrz na [opiekę nad stroną WordPress](/uslugi/opieka-wordpress), a jeśli rozważasz budowę od nowa, na [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress).",
    ],
    bullets: [
      {
        title: "Pomiar przed i po",
        body: "PageSpeed Insights, Lighthouse i dane polowe CrUX. Raport pokazuje te same metryki przed optymalizacją i po niej, na tych samych podstronach.",
      },
      {
        title: "Obrazy i fonty",
        body: "Konwersja do WebP/AVIF, wymiary dopasowane do miejsca, leniwe ładowanie poza pierwszym ekranem. Fonty z podzbiorem znaków i font-display: swap.",
      },
      {
        title: "Cache i hosting",
        body: "LiteSpeed cache albo Redis, CDN dla plików statycznych, nagłówki cache dla przeglądarki. Gdy hosting jest wąskim gardłem, mówię to wprost i pomagam w przenosinach.",
      },
      {
        title: "Odchudzanie JS i CSS",
        body: "Usuwanie nieużywanych skryptów wtyczek, opóźnianie analityki, krytyczny CSS w dokumencie. Często największy skok robi wyłączenie tego, co nie jest używane.",
      },
    ],
    process: [
      { step: "01", title: "Audyt wydajności", body: "Pomiar kluczowych podstron, lista problemów posortowana po wpływie na LCP, INP i CLS. Wycena naprawy." },
      { step: "02", title: "Wdrożenie poprawek", body: "Praca na kopii roboczej, wdrożenie na produkcję poza godzinami ruchu. Strona działa normalnie przez cały czas." },
      { step: "03", title: "Drugi pomiar i raport", body: "Te same metryki, te same podstrony, liczby przed i po. Plus lista zaleceń na przyszłość, żeby efekt nie zjechał." },
    ],
    faq: [
      { q: "Ile kosztuje przyspieszenie strony WordPress?", a: "Wycena zależy od zakresu audytu i wdrożenia oraz od tego, czy optymalizacja dotyczy strony firmowej czy sklepu WooCommerce, w którym dochodzą koszyk, checkout i dodatkowe szablony do sprawdzenia. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa optymalizacja szybkości?", a: "Audyt: 2-3 dni robocze od podesłania dostępów. Wdrożenie poprawek: 5-10 dni roboczych zależnie od liczby problemów. Strona działa normalnie przez cały czas, zmiany wchodzą poza godzinami ruchu." },
      { q: "O ile realnie strona przyspieszy?", a: "Typowy efekt na zaniedbanej stronie: LCP z 5-8 sekund schodzi poniżej 2,5 s, waga strony spada o połowę lub więcej. Dokładnie dlatego raport pokazuje liczby przed i po, a nie wynik w skali gwiazdek." },
      { q: "Czy szybsza strona poprawi pozycje w Google?", a: "Core Web Vitals są sygnałem rankingowym, więc zielone metryki pomagają, ale nie zastąpią treści i linków. Pewny efekt jest gdzie indziej: mniej porzuceń, dłuższe sesje, wyższa konwersja." },
      { q: "Czy optymalizujesz też sklepy WooCommerce?", a: "Tak, to większość zleceń. Sklepy mają najwięcej do ugrania: koszyk AJAX, skrypty płatności i wtyczki kurierskie potrafią podwoić czas ładowania. Testuję pełną ścieżkę zakupową po każdej zmianie." },
      { q: "Co jeśli efektu nie będzie?", a: "Audyt przed wyceną pokazuje, co jest do ugrania. Jeśli strona jest już dobrze zoptymalizowana i miejsca na poprawę nie ma, mówię to na etapie audytu zamiast sprzedawać wdrożenie." },
    ],
    cta: "Podeślij adres strony, zmierzę i wrócę z audytem w 48h",
  },
  {
    slug: "integracja-woocommerce-z-baselinker",
    title: "Integracja WooCommerce z BaseLinker",
    metaTitle: "Integracja WooCommerce z BaseLinker — zamówienia, stany, Allegro",
    metaDescription:
      "Integracja WooCommerce z BaseLinker: import zamówień, synchronizacja stanów i cen, powiązania magazynów z hurtowniami i sprzedaż na Allegro. Wrocław i online.",
    h1: "Integracja WooCommerce z BaseLinker",
    lead:
      "Integracja WooCommerce z BaseLinker łączy sklep z panelem, w którym obsługujesz zamówienia ze wszystkich kanałów: sklepu, Allegro i marketplace'ów. Zamówienia spływają do jednej listy, stany magazynowe i ceny aktualizują się same, a etykiety kurierskie drukujesz bez przepisywania adresów.",
    intro: [
      "BaseLinker, działający dziś pod marką Base, łączy się z WooCommerce przez REST API sklepu. Samo podpięcie to kilka minut, ale od ustawień zależy wszystko dalej: które statusy zamówień importować, który magazyn jest źródłem stanów i czy ceny płyną ze sklepu do BaseLinkera, czy odwrotnie. Źle ustawiony kierunek synchronizacji nadpisuje ceny w sklepie albo sprzedaje produkty, których już nie ma.",
      "Najwięcej pracy wymagają sklepy zasilane z hurtowni. Hurtownia wystawia w BaseLinkerze cały katalog, często kilka tysięcy pozycji, a sklep ma sprzedawać tylko wybrany wycinek. Rozwiązaniem są powiązania magazynów: wybrane produkty kopiuję z magazynu hurtowni do własnego katalogu BaseLinkera z powiązaniem magazynowym i dopiero z niego tworzę produkty w WooCommerce. Stany i ceny spływają z pliku hurtowni, a do sklepu nie trafia nic, czego nie wybrałeś. Tak skonfigurowałem [Kosmotekę](/projekty/kosmoteka), sklep z teleskopami na WooCommerce.",
      "Zanim włączę automatyzację, porządkuję katalog: SKU, kody EAN i spójne atrybuty wariantów. Produkt bez SKU nie połączy się z pozycją w zamówieniu ani z ofertą w innym kanale, a atrybut dodany lokalnie w jednym produkcie wypada z filtrów sklepu. Jeśli sklep dopiero powstaje, zacznij od [wdrożenia sklepu WooCommerce](/uslugi/sklepy-internetowe-woocommerce).",
    ],
    bullets: [
      {
        title: "Import zamówień i statusy",
        body: "Zamówienia ze sklepu trafiają do BaseLinkera z płatnością, sposobem dostawy i danymi do faktury. Zmiana statusu wraca do WooCommerce, więc klient dostaje maila o wysyłce bez ręcznego klikania w sklepie.",
      },
      {
        title: "Stany i ceny bez nadpisywania",
        body: "Dla każdego pola ustalam jeden kierunek: skąd biorą się stany, skąd ceny, co zostaje tylko w sklepie. Promocja ustawiona w WooCommerce nie znika po nocnej synchronizacji.",
      },
      {
        title: "Hurtownie i powiązania magazynów",
        body: "W sklepie tylko produkty, które wybierzesz, reszta katalogu hurtowni zostaje w BaseLinkerze. Stany i ceny aktualizują się z pliku dostawcy bez ręcznego importu.",
      },
      {
        title: "Allegro z tego samego magazynu",
        body: "Oferty na Allegro i produkty w sklepie korzystają z jednego stanu w magazynie BaseLinkera. Sprzedaż w jednym kanale zmniejsza dostępność w drugim, więc nie sprzedajesz dwa razy tej samej sztuki.",
      },
    ],
    process: [
      { step: "01", title: "Przegląd sklepu i kanałów", body: "Lista kanałów sprzedaży, hurtowni i kurierów oraz stan katalogu: SKU, EAN, warianty. Ustalamy, co ma się synchronizować i w którą stronę." },
      { step: "02", title: "Porządki w katalogu", body: "Uzupełnienie SKU i EAN, ujednolicenie atrybutów wariantów. Bez tego automatyzacja powiela błędy szybciej, niż zrobiłby to człowiek." },
      { step: "03", title: "Integracja i test zamówienia", body: "Podpięcie sklepu przez REST API, magazyny, powiązania i statusy. Testowe zamówienie przez całą ścieżkę: sklep, BaseLinker, etykieta, mail do klienta." },
      { step: "04", title: "Start na produkcji", body: "Włączenie synchronizacji na żywym sklepie i instrukcja dla osoby, która obsługuje zamówienia i pakuje paczki." },
    ],
    faq: [
      { q: "Ile kosztuje integracja WooCommerce z BaseLinker?", a: "Wycena zależy od liczby kanałów sprzedaży, hurtowni do podpięcia i stanu katalogu, bo porządki w SKU i wariantach potrafią zająć więcej czasu niż samo połączenie. Abonament BaseLinkera opłacasz bezpośrednio w Base, poza moją wyceną. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem." },
      { q: "Ile trwa integracja WooCommerce z BaseLinker?", a: "Samo połączenie sklepu z BaseLinkerem to kilka godzin pracy. Projekt z porządkami w katalogu, hurtowniami i Allegro trwa dłużej i zależy głównie od liczby produktów oraz tego, w jakim stanie są ich dane. Termin podaję w wycenie, po przeglądzie sklepu." },
      { q: "Jak BaseLinker łączy się z WooCommerce?", a: "Przez REST API sklepu. W WooCommerce generuje się klucz w Ustawieniach, w zakładce Zaawansowane, REST API, z uprawnieniami do odczytu i zapisu, a potem wkleja go w konfiguracji integracji w BaseLinkerze. Klucz widać tylko raz, przy tworzeniu, więc trzeba go od razu zapisać." },
      { q: "BaseLinker nie pobiera zamówień z WooCommerce. Co sprawdzić?", a: "Najczęściej wygasł albo został usunięty klucz REST API i integracja dostaje błąd 401, import zamówień jest wyłączony w ustawieniach integracji albo zamówienia wpadają w status, którego nie obejmuje filtr listy. Jeśli problem dotyczy tylko sklepu, a zamówienia z innych kanałów spływają, winna jest integracja sklepu, a nie ustawienia zamówień. Taką awarię naprawiam osobno, bez wdrażania wszystkiego od nowa." },
      { q: "Czy BaseLinker da mi produkty z hurtowni?", a: "Nie. BaseLinker pobiera plik produktowy hurtowni i synchronizuje stany, ale nie zastępuje umowy z dostawcą. Każda hurtownia wymaga osobnej współpracy B2B, zwykle z danymi firmy i akceptacją po stronie dostawcy, która trwa od jednego do kilku dni roboczych. Integrację z hurtownią konfiguruję, gdy dostawca udostępni plik." },
      { q: "Czy mogę sprzedawać w sklepie i na Allegro z jednego magazynu?", a: "Tak, to jeden z głównych powodów wdrożenia BaseLinkera. Sklep i oferty na Allegro korzystają z tego samego stanu w magazynie BaseLinkera, więc sprzedaż w jednym kanale od razu zmniejsza dostępność w drugim." },
      { q: "Czyje jest konto w BaseLinkerze?", a: "Twoje. Konto zakładasz na własną firmę i sam opłacasz abonament w Base, a ja dostaję dostęp na czas wdrożenia. Po zakończeniu możesz ten dostęp odebrać, a konfiguracja zostaje u Ciebie." },
    ],
    cta: "Napisz, na czym stoi sklep i gdzie sprzedajesz, wrócę z planem integracji",
  },
];

export const servicesIndex = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));
