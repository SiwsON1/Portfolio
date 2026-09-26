export type PostTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type PostSection = {
  heading: string;
  body: string[];
  /** Tabela pod akapitami sekcji. Dane liczbowe czytelniejsze dla ludzi i modeli AI niż proza. */
  table?: PostTable;
};

export type PostFaq = {
  q: string;
  a: string;
};

export type PostHero =
  | { kind: "nextjs" }
  | { kind: "wordpress" }
  | { kind: "ai" }
  | { kind: "seo" }
  | { kind: "performance" };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
  body: string[];
  /** Nowy schemat (opcjonalny, gdy wypełniony, nadpisuje `body`). */
  lead?: string;
  sections?: PostSection[];
  faq?: PostFaq[];
  /** Główne keyword pod które artykuł jest zoptymalizowany (do meta + schema). */
  keyword?: string;
  /** Slugi powiązanych usług do CTA "Powiązane usługi" na dole. */
  relatedServices?: string[];
  /** Identyfikator hero animation (komponent renderowany na górze posta). */
  hero?: PostHero;
  /** Custom meta title (jeśli pusty, użyty jest title). Max 65 znaków. */
  metaTitle?: string;
  /** Custom meta description (jeśli pusty, użyty jest excerpt). 150-160 znaków. */
  metaDescription?: string;
};

/**
 * Bootstrap blog posts. Pod nazwą Marcin Siwonia → seomantyczny.pl jest osobnym
 * blogiem, ale tu zaczynamy małym wewnętrznym blogiem na 5 artykułów topical
 * authority dla web dev / SEO / Next.js.
 */
export const posts: Post[] = [
  {
    slug: "dostepnosc-woocommerce",
    title: "Dostępność WooCommerce: błędy WCAG w 110 polskich sklepach",
    excerpt:
      "Sprawdziłem 110 polskich sklepów na WooCommerce. Za niski kontrast miało 96% z nich, linki bez dostępnej nazwy 85%, a co najmniej jeden błąd krytyczny 70%.",
    date: "2026-09-13",
    readingMinutes: 9,
    tags: ["WCAG", "dostępność", "WooCommerce"],
    keyword: "dostępność WooCommerce",
    metaTitle: "Dostępność WooCommerce: błędy WCAG w 110 polskich sklepach",
    metaDescription:
      "Dostępność WooCommerce w liczbach: skan 110 polskich sklepów i 301 stron. Kontrast zawodzi w 96% sklepów, nazwy linków w 85%. Najczęstsze błędy i naprawy.",
    hero: { kind: "seo" },
    relatedServices: ["sklepy-internetowe-woocommerce", "opieka-wordpress"],
    body: [],
    lead:
      "Dostępność WooCommerce sprawdziłem w 110 polskich sklepach i tylko 2 z nich nie miały żadnego naruszenia wykrytego automatycznie. Co najmniej jeden błąd krytyczny wystąpił w 70% sklepów, a poważny lub krytyczny w 98%. Najczęściej zawodził kontrast tekstu, obecny w 96% sklepów, oraz dostępna nazwa linku, której brakowało w 85%. To dolna granica problemu, bo automat nie ocenia obsługi klawiaturą, kolejności czytania ani sensu tekstów alternatywnych.",
    sections: [
      {
        heading: "Jak sprawdziłem 110 sklepów WooCommerce",
        body: [
          "Skan przeprowadziłem 13 września 2026 roku narzędziem axe-core 4.13 w przeglądarce Chromium, na ekranie 1366×900. Sprawdzałem reguły WCAG 2.0 i 2.1 na poziomach A i AA.",
          "Próba objęła 114 sklepów z polskojęzyczną stroną, a WooCommerce potwierdziłem w kodzie każdej z nich. 74 sklepy znalazłem w wyszukiwarce po domyślnych adresach WooCommerce w 38 branżach, a 40 pochodziło z portfoliów 13 agencji, najwyżej 12 z jednej. Sklepy z obu źródeł wypadły prawie tak samo: mediana 5 i 4 rodzajów naruszeń, błąd krytyczny w 73% i 69% z nich.",
          "Poprawnie odpowiedziało 110 sklepów. W każdym sprawdziłem stronę główną, kategorię i kartę produktu, razem 301 stron. Nie skanowałem koszyka ani kasy, bo wymagałoby to dodawania produktów do koszyka w cudzych sklepach.",
          "Automat wykrywa tylko część barier. Nie ocenia obsługi klawiaturą, kolejności czytania ani tego, czy tekst alternatywny rzeczywiście opisuje obraz. Nazw sklepów nie podaję, bo celem jest obraz rynku, a nie ranking.",
        ],
      },
      {
        heading: "Najczęstsze błędy dostępności w sklepach WooCommerce",
        body: [
          "Mediana wyniosła 5 różnych rodzajów naruszeń i 96 elementów z błędem na sklep, licząc łącznie trzy sprawdzone strony. Najczęstsze problemy dotyczyły kontrastu i nazw linków, ale lista obejmuje też obrazy, formularze, strukturę list i kod ARIA.",
          "Każda z tych reguł opisuje konkretną barierę dla użytkownika. Sposób naprawy zależy od tego, skąd element pochodzi: z motywu, z wtyczki albo z treści wprowadzonej w panelu.",
        ],
        table: {
          caption: "Odsetek sklepów z naruszeniem na co najmniej jednej z trzech sprawdzonych stron. Próba 110 sklepów WooCommerce i 301 stron, skan z 13.09.2026.",
          head: ["Błąd", "Sklepów", "Kryterium WCAG"],
          rows: [
            ["Za niski kontrast tekstu", "96%", "1.4.3"],
            ["Link bez dostępnej nazwy", "85%", "2.4.4, 4.1.2"],
            ["Obrazek bez tekstu alternatywnego", "35%", "1.1.1"],
            ["Blokada powiększania na telefonie", "31%", "1.4.4"],
            ["Link w tekście odróżniony tylko kolorem", "29%", "1.4.1"],
            ["Element klikalny w klikalnym", "26%", "4.1.2"],
            ["Przycisk bez dostępnej nazwy", "24%", "4.1.2"],
            ["Błędna struktura listy", "18%", "1.3.1"],
            ["Pole formularza bez etykiety", "16%", "4.1.2"],
            ["Niedozwolony atrybut ARIA", "15%", "4.1.2"],
            ["Ukryty element dostępny z klawiatury", "13%", "4.1.2"],
            ["Lista rozwijana bez etykiety", "11%", "4.1.2"],
          ],
        },
      },
      {
        heading: "Kontrast cen, promocji i jasnoszarych linków",
        body: [
          "Za niski kontrast tekstu wystąpił w 96% sklepów, z medianą 73 elementów na sklep. W przykładach powtarzały się linki, przyciski, plakietki, ceny i pozycje menu.",
          "Dwa wzorce są typowe dla WooCommerce. Przekreślona stara cena albo cena o za niskim kontraście pojawiła się w co najmniej 24% sklepów, a plakietka promocji w co najmniej 10%. Słabowidzący klient nie odczyta wtedy informacji, która decyduje o zakupie.",
          "Zwykły tekst powinien mieć kontrast co najmniej 4,5:1, a duży 3:1. Poprawka to zmiana koloru tekstu albo tła w stylach motywu i sprawdzenie wszystkich stanów elementu, także linków i przycisków po najechaniu kursorem.",
        ],
      },
      {
        heading: "Linki i przyciski bez nazwy",
        body: [
          "Link bez dostępnej nazwy pojawił się w 85% sklepów, z medianą 15 takich elementów na sklep, a przycisk bez nazwy w 24%. Czytnik ekranu odczytuje taki element tylko jako „link” albo „przycisk”, bez informacji, dokąd prowadzi i co robi.",
          "Źródła powtarzają się między sklepami: ikony serwisów społecznościowych, zdjęcia produktów na liście, lupa wyszukiwarki, kropki slidera i przyciski ilości. Ikona, którą widać, nie wystarcza, jeśli jej znaczenie nie trafia do dostępnej nazwy.",
          "Naprawa to zwykle dodanie zrozumiałego tekstu albo atrybutu aria-label, na przykład „Szukaj” przy lupie czy „Zwiększ ilość” przy plusie. Element dekoracyjny nie powinien przejmować fokusu, a element, który coś robi, musi mieć właściwą rolę i nazwę.",
        ],
        table: {
          caption: "Elementy bez dostępnej nazwy rozpoznane w przykładach kodu. Axe zapisywał najwyżej 2 przykłady reguły na stronę, więc to dolna granica. Próba 110 sklepów, skan z 13.09.2026.",
          head: ["Element", "Sklepów"],
          rows: [
            ["Ikony serwisów społecznościowych", "20%"],
            ["Link zdjęcia produktu na liście", "15%"],
            ["Przycisk wyszukiwarki (sama lupa)", "11%"],
            ["Kropki i strzałki slidera", "6%"],
            ["Przyciski plus i minus przy ilości", "5%"],
            ["Ikona listy życzeń albo porównywarki", "5%"],
          ],
        },
      },
      {
        heading: "Karta produktu: zakładki opisu, warianty i karuzele",
        body: [
          "Zakładki z opisem i informacjami dodatkowymi miały zagnieżdżone elementy interaktywne albo błędne role ARIA w co najmniej 24% sklepów. Czytnik ekranu dostaje wtedy sprzeczne informacje o tym, co jest zakładką, która jest aktywna i jaką treść pokazuje.",
          "Lista rozwijana bez etykiety wystąpiła w 11% sklepów, między innymi przy wyborze wariantu i sortowaniu produktów. Pole formularza bez etykiety (16%) to z kolei najczęściej zapis do newslettera albo formularz kontaktowy, a nie sama karta produktu.",
          "W co najmniej 13% sklepów karuzela ukrywała slajdy przed czytnikiem ekranu, ale zostawiała w nich linki dostępne z klawiatury. Użytkownik przechodzi wtedy Tabem przez elementy, których nie widzi. Zakładki trzeba oprzeć na spójnych rolach ARIA bez zagnieżdżania, a ukrytym slajdom odebrać fokus.",
        ],
      },
      {
        heading: "Blokada powiększania na telefonie",
        body: [
          "Blokadę powiększania wykryłem w 31% sklepów. Prawie zawsze powodował ją zapis maximum-scale=1.0, user-scalable=no w znaczniku viewport motywu.",
          "Słabowidzący klient na telefonie nie powiększy wtedy tekstu, ceny ani pól formularza. Responsywny układ tego nie rozwiązuje, bo dopasowanie strony do ekranu i możliwość jej powiększenia to dwie osobne rzeczy.",
          "Naprawa zajmuje chwilę: usunięcie ograniczeń maximum-scale i user-scalable ze znacznika viewport. Po zmianie warto sprawdzić, czy menu i przyciski działają po powiększeniu.",
        ],
      },
      {
        heading: "Obrazki bez tekstu alternatywnego",
        body: [
          "Obrazek bez tekstu alternatywnego wystąpił w 35% sklepów. Axe traktuje to jako błąd krytyczny, bo osoba korzystająca z czytnika ekranu traci informację przekazaną wyłącznie obrazem.",
          "W przykładach, które dało się rozpoznać, najczęściej były to ikony wgrane jako obrazki (co najmniej 11 sklepów) i logotypy, a rzadziej zdjęcia produktów. Samo uzupełnienie pola nie gwarantuje poprawy: automat wykryje brak opisu, ale nie oceni, czy opis ma sens.",
          "Zdjęcia produktów potrzebują opisów wynikających z ich funkcji, a obrazy czysto dekoracyjne pustego atrybutu alt, żeby czytnik je pominął. W WooCommerce poprawia się to w danych mediów i w szablonie, który generuje obrazki na liście i karcie produktu.",
        ],
      },
      {
        heading: "Czy page builder psuje dostępność sklepu",
        body: [
          "Page builder słabo różnicował wynik. Błąd krytyczny wystąpił w 67% spośród 67 sklepów z Elementorem, w 77% spośród 22 sklepów z Divi i w 63% spośród 16 sklepów bez buildera.",
          "Próba sklepów bez buildera jest mała, więc nie traktuję tych liczb jako rankingu narzędzi. Wskazują raczej, że problem siedzi w połączeniu motywu, wtyczek i treści, a nie w samym edytorze.",
          "Zmiana edytora nie naprawi nazw przycisków, kontrastu cen ani etykiet formularzy. Trzeba znaleźć komponent, który generuje wadliwy kod, poprawić go i sprawdzić wszystkie miejsca, w których jest używany.",
        ],
      },
      {
        heading: "Co wyniki oznaczają dla właściciela sklepu",
        body: [
          "Automatyczny skan szybko pokazuje powtarzalne naruszenia, ale nie potwierdza zgodności sklepu. W tym badaniu nie objął koszyka ani kasy, a to tam klient podaje dane i płaci.",
          "Rozsądna kolejność to najpierw błędy krytyczne i poważne w szablonach, potem ręczne przejście całej ścieżki zakupowej klawiaturą. Zakres wymagań opisałem we wpisie o [WCAG 2.1 AA](/blog/wcag-2-1-aa), a pełny [audyt WCAG](/audyt-wcag) łączy skan z testami klawiaturą i czytnikiem ekranu.",
          "Po naprawie warto co jakiś czas sprawdzać te same szablony, bo aktualizacje motywu i wtyczek zmieniają generowany kod. Dlatego dostępność powinna być częścią bieżącej [opieki nad sklepem na WordPressie](/uslugi/opieka-wordpress), a przy budowie nowego [sklepu WooCommerce](/uslugi/sklepy-internetowe-woocommerce) warto uwzględnić ją od początku.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy WooCommerce jest dostępny dla osób z niepełnosprawnościami?",
        a: "WooCommerce może być podstawą dostępnego sklepu, ale wynik zależy od motywu, wtyczek i treści. W skanie 110 polskich sklepów tylko 2 nie miały naruszeń wykrytych automatycznie. Brak błędów w skanerze nadal nie potwierdza, że sklep da się obsłużyć klawiaturą i czytnikiem ekranu.",
      },
      {
        q: "Jak sprawdzić dostępność sklepu WooCommerce?",
        a: "Najpierw przeskanuj reprezentatywne szablony: stronę główną, kategorię, kartę produktu, koszyk i kasę. Potem ręcznie sprawdź obsługę klawiaturą, kolejność czytania, sens tekstów alternatywnych i całą ścieżkę zakupową. Sam skaner pokazuje tylko dolną granicę problemów.",
      },
      {
        q: "Jakie błędy dostępności WooCommerce występują najczęściej?",
        a: "W skanie z 13 września 2026 roku najczęstszy był za niski kontrast tekstu, w 96% sklepów. Link bez dostępnej nazwy wystąpił w 85%, obrazek bez tekstu alternatywnego w 35%, a blokada powiększania na telefonie w 31%.",
      },
      {
        q: "Czy wtyczka lub nakładka naprawi dostępność WooCommerce?",
        a: "Nie. Nakładka nie zmienia kodu strony, więc nie naprawia struktury nagłówków, etykiet formularzy ani obsługi klawiaturą. Bywa, że przeszkadza czytnikom ekranu bardziej niż sama strona.",
      },
      {
        q: "Czy page builder jest główną przyczyną błędów dostępności WooCommerce?",
        a: "Wyniki tego nie potwierdzają. Błąd krytyczny wystąpił w 67% sklepów z Elementorem, w 77% sklepów z Divi i w 63% sklepów bez buildera. Problem wynika głównie z połączenia motywu, wtyczek i treści.",
      },
      {
        q: "Czy automatyczny test potwierdza zgodność WooCommerce z WCAG?",
        a: "Nie. Automat nie ocenia obsługi klawiaturą, kolejności czytania ani sensu tekstów alternatywnych. Wynik skanu wskazuje wykrywalne naruszenia i miejsca do ręcznego sprawdzenia, ale nie jest potwierdzeniem zgodności.",
      },
    ],
  },
  {
    slug: "wcag-2-1-aa",
    title: "WCAG 2.1 AA — 50 kryteriów, które od 2025 obowiązują firmy",
    excerpt:
      "WCAG 2.1 AA to 50 kryteriów sukcesu. Od 28 czerwca 2025 są wymogiem prawnym dla firm powyżej progu mikroprzedsiębiorcy. Obowiązuje 2.1, nie nowsze 2.2, i jest ku temu konkretny powód.",
    date: "2026-09-01",
    readingMinutes: 9,
    tags: ["WCAG", "dostępność", "EAA"],
    keyword: "WCAG 2.1 AA",
    metaTitle: "WCAG 2.1 AA — 50 kryteriów i obowiązek prawny od 2025",
    metaDescription:
      "WCAG 2.1 AA to 50 kryteriów sukcesu, obowiązkowe od 28 czerwca 2025 przez normę EN 301 549. Sprawdź poziomy zgodności, próg zwolnienia i wysokość kary.",
    hero: { kind: "seo" },
    relatedServices: ["sklepy-internetowe-woocommerce", "przyspieszanie-stron-wordpress"],
    body: [],
    lead:
      "WCAG 2.1 AA to poziom zgodności obejmujący 50 kryteriów sukcesu, z czego 30 przypada na poziom A, a 20 dochodzi na poziomie AA. Od 28 czerwca 2025 jest w Polsce wymogiem prawnym dla przedsiębiorców objętych ustawą z 26 kwietnia 2024 roku. Wymóg działa pośrednio: ustawa odsyła do normy zharmonizowanej EN 301 549 V3.2.1, a to ta norma zawiera WCAG 2.1 na poziomie AA. Dlatego nowsze WCAG 2.2 obowiązkowe nie jest.",
    sections: [
      {
        heading: "Czym jest WCAG 2.1 AA",
        body: [
          "WCAG 2.1 na poziomie AA to zestaw 50 kryteriów sukcesu: 30 z poziomu A i 20 dochodzących na poziomie AA. Skrót rozwija się jako wytyczne dotyczące dostępności treści internetowych.",
          "Poziomy zgodności są trzy i układają się kaskadowo. A jest minimalny, AA średni i to on został wpisany w wymogi prawne, AAA najwyższy i nieobowiązkowy. Kluczowe jest to, że AA nie stanowi osobnego zbioru: zawiera w sobie wszystkie kryteria poziomu A. Deklarując zgodność na poziomie AA, deklarujesz spełnienie pełnej pięćdziesiątki, nie samych dwudziestu dodatkowych punktów.",
          "Z tego powodu strona nie może być zgodna z AA, oblewając cokolwiek z poziomu A. Jeden nieopisany przycisk z poziomu A przekreśla deklarację tak samo skutecznie jak brak kontrastu z poziomu AA."
        ]
      },
      {
        heading: "Cztery zasady WCAG: postrzegalność, funkcjonalność, zrozumiałość, rzetelność",
        body: [
          "Każde z 50 kryteriów należy do jednej z czterech zasad. Ten podział decyduje o tym, czego właściwie się szuka, sprawdzając stronę.",
          "Postrzegalność mówi, że treść musi dać się odebrać zmysłami. Tu mieszczą się teksty alternatywne obrazków, napisy do materiałów wideo i kontrast tekstu wobec tła.",
          "Funkcjonalność wymaga, żeby interfejs dało się obsłużyć. Najczęstszy sprawdzian to przejście całej ścieżki zakupowej samą klawiaturą, bez dotykania myszy.",
          "Zrozumiałość dotyczy czytelności treści i przewidywalności zachowań. Komunikat błędu w formularzu ma mówić, co poprawić, a nie że wystąpił błąd numer 400.",
          "Rzetelność schodzi do kodu. Znaczniki mają być na tyle poprawne, żeby czytnik ekranu i inne technologie asystujące zinterpretowały je bez zgadywania."
        ]
      },
      {
        heading: "Dlaczego obowiązuje WCAG 2.1 AA, a nie nowsze WCAG 2.2",
        body: [
          "Bo ustawa w ogóle nie wymienia WCAG z nazwy. Odsyła do normy zharmonizowanej EN 301 549 w wersji V3.2.1 z marca 2021 roku, a dopiero ta norma zawiera WCAG 2.1 na poziomie AA. Obowiązek jest więc zapośredniczony przez konkretną wersję dokumentu technicznego.",
          "WCAG 2.2 istnieje i obejmuje 56 kryteriów na poziomach A i AA. Dziewięć kryteriów doszło, jedno zostało usunięte. Nie jest jednak obowiązkowe, dopóki norma zharmonizowana nie zostanie zaktualizowana do tej wersji.",
          "Praktyczny wniosek jest taki, że wdrażanie 2.2 ma sens jako zabezpieczenie na przyszłość, a nie jako spełnianie dzisiejszego wymogu. Warto o tym pamiętać, czytając oferty, które straszą obowiązkowym WCAG 2.2. To po prostu nieprawda."
        ]
      },
      {
        heading: "Od kiedy WCAG 2.1 AA obowiązuje przedsiębiorców",
        body: [
          "Od 28 czerwca 2025 roku. Podstawą jest ustawa z 26 kwietnia 2024 roku, opublikowana w Dz.U. 2024 poz. 731, która wdraża do polskiego prawa Europejski Akt o Dostępności.",
          "Dla umów zawartych przed tą datą przewidziano okres przejściowy sięgający 28 czerwca 2030 roku. Nie jest to jednak furtka pozwalająca odłożyć temat na pięć lat, bo obejmuje umowy już trwające, a nie nowe wdrożenia.",
          "Trzeba to odróżnić od ustawy z 2019 roku, która reguluje dostępność podmiotów publicznych. To dwa osobne reżimy z osobnymi obowiązkami. Firma prywatna nie publikuje deklaracji dostępności, bo ten dokument należy do reżimu publicznego. Podaje natomiast informację o dostępności usługi w regulaminie."
        ]
      },
      {
        heading: "Kogo obowiązek nie dotyczy: próg mikroprzedsiębiorcy",
        body: [
          "Zwolnieni są mikroprzedsiębiorcy świadczący usługi. Definicja ma dwa warunki i oba muszą być spełnione naraz: mniej niż 10 zatrudnionych osób oraz obrót roczny lub suma bilansowa nieprzekraczająca 2 mln euro.",
          "Spójnik ma tu znaczenie rozstrzygające. Przekroczenie któregokolwiek z warunków oznacza, że obowiązek już firmy dotyczy. Sklep zatrudniający sześć osób, ale z obrotem powyżej 2 mln euro, mikroprzedsiębiorcą nie jest.",
          "Zwolnienie obejmuje usługi, nie produkty. Warto też zauważyć, że jest realne i szerokie, wbrew komunikatom sugerującym, że każda firma z witryną musi teraz wszystko przebudować."
        ]
      },
      {
        heading: "Jakie kary grożą za brak zgodności z WCAG 2.1 AA",
        body: [
          "Kara sięga 10-krotności przeciętnego wynagrodzenia, co w 2026 roku daje około 89 000 zł, przy czym nie może przekroczyć 10 procent obrotu. Drugi warunek działa jak sufit dla mniejszych podmiotów.",
          "Sankcja nie spada z dnia na dzień. Poprzedza ją wezwanie do podjęcia działań naprawczych, więc firma dostaje moment na reakcję.",
          "Osobno warto uporządkować kwoty krążące po polskim internecie. Kary 10 000 zł i 5 000 zł, cytowane w wielu artykułach o dostępności, pochodzą z ustawy z 2019 roku o podmiotach publicznych. Przy sklepie internetowym czy stronie firmowej nie mają zastosowania i ich powtarzanie tylko zaciemnia obraz.",
          "Jeśli chcesz sprawdzić, które z 50 kryteriów Twoja strona faktycznie oblewa, tym zajmuje się [audyt WCAG](/audyt-wcag). Sam standard nie mówi, gdzie w Twoim motywie siedzi problem."
        ]
      }
    ],
    faq: [
      {
        q: "Czym różni się poziom A od AA w WCAG 2.1?",
        a: "Poziom A obejmuje 30 kryteriów i jest minimalny. AA dokłada 20 kolejnych, co daje razem 50. AA zawiera w sobie poziom A, więc zgodność z AA oznacza spełnienie wszystkich 50 kryteriów, a nie samych dwudziestu dodatkowych."
      },
      {
        q: "Czy WCAG 2.2 jest obowiązkowe?",
        a: "Nie. Operacyjnie obowiązuje WCAG 2.1 AA przez normę zharmonizowaną EN 301 549 V3.2.1. WCAG 2.2 obejmuje 56 kryteriów i stanie się wymogiem dopiero wtedy, gdy norma zostanie zaktualizowana do tej wersji."
      },
      {
        q: "Od kiedy WCAG 2.1 AA obowiązuje firmy prywatne?",
        a: "Od 28 czerwca 2025 roku, na podstawie ustawy z 26 kwietnia 2024 roku, Dz.U. 2024 poz. 731. Dla umów zawartych wcześniej okres przejściowy sięga 28 czerwca 2030 roku."
      },
      {
        q: "Czy mała firma musi spełniać WCAG 2.1 AA?",
        a: "Nie, jeśli jest mikroprzedsiębiorcą świadczącym usługi, czyli zatrudnia mniej niż 10 osób oraz ma obrót lub sumę bilansową do 2 mln euro. Oba warunki muszą być spełnione jednocześnie."
      },
      {
        q: "Ile wynosi kara za niedostępną stronę?",
        a: "Do 10-krotności przeciętnego wynagrodzenia, czyli w 2026 roku około 89 000 zł, nie więcej niż 10 procent obrotu. Kara jest poprzedzona wezwaniem do działań naprawczych."
      },
      {
        q: "Czy firma prywatna składa deklarację dostępności?",
        a: "Nie. Deklaracja dostępności należy do reżimu podmiotów publicznych z ustawy z 2019 roku. Firma prywatna podaje informację o dostępności usługi w regulaminie."
      }
    ]
  },
  {
    slug: "ile-kosztuje-strona-www-2026",
    title: "Ile kosztuje strona www dla firmy",
    excerpt:
      "Publiczne cenniki wykonawców pokazują bardzo szeroki zakres cen stron internetowych. Różnica wynika nie tylko z technologii, ale przede wszystkim z zakresu projektu, treści, integracji i modelu współpracy.",
    date: "2026-04-12",
    updatedAt: "2026-09-26",
    readingMinutes: 8,
    tags: ["ceny", "tworzenie stron www"],
    keyword: "ile kosztuje strona www",
    relatedServices: ["tworzenie-stron-www", "tworzenie-stron-wordpress", "aplikacje-nextjs"],
    hero: { kind: "seo" },
    metaTitle: "Ile kosztuje strona www dla firmy? Przykłady z cenników",
    metaDescription:
      "Ile kosztuje strona www? Publiczne cenniki pokazują ceny od 599 zł do 25 000 zł netto i więcej. Zobacz, co wpływa na cenę i jak porównać oferty.",
    lead:
      "Jeśli pytasz, ile kosztuje strona www, publiczne cenniki innych wykonawców pokazują ceny od 599 zł za najtańszy wariant do 25 000 zł netto i więcej przy realizacjach Next.js, a strony abonamentowe są oferowane od 219 zł miesięcznie. Na cenę wpływają przede wszystkim zakres projektu, liczba typów podstron, treści, integracje, wersje językowe i wymagania związane z SEO. Własne projekty wyceniam indywidualnie po rozmowie.",
    body: ["Jeśli pytasz, ile kosztuje strona www, publiczne cenniki innych wykonawców pokazują ceny od 599 zł za najtańszy wariant do 25 000 zł netto i więcej przy realizacjach Next.js, a strony abonamentowe są oferowane od 219 zł miesięcznie. Na cenę wpływają przede wszystkim zakres projektu, liczba typów podstron, treści, integracje, wersje językowe i wymagania związane z SEO. Własne projekty wyceniam indywidualnie po rozmowie."],
    sections: [
      {
        heading: "Publiczne cenniki pokazują, jak szeroki jest zakres cen",
        body: [
          "Nie istnieje jedna rynkowa cena strony internetowej, którą można sensownie zastosować do każdej firmy. Nawet w publicznych cennikach wykonawców z Wrocławia i innych miast widać bardzo duże różnice. Jedna oferta może dotyczyć prostej strony przygotowanej w ograniczonym zakresie, inna obejmuje bardziej indywidualny projekt, dodatkowe funkcje albo zupełnie inny model współpracy.",
          "Dlatego poniższej tabeli nie traktowałbym jako rankingu ani gotowego kalkulatora. To przykłady cen z cenników innych wykonawców, a nie moja oferta. Pokazują przede wszystkim, że sama informacja „strona internetowa” jest zbyt ogólna, żeby porównywać kwoty bez sprawdzenia zakresu.",
          "Dobrze widać to na przykładzie rozwiązań e-commerce. Zdobywcy Sieci podają dla sklepów WooCommerce zakres od 5500 do 7500 zł, a jako osobny dodatek wskazują integrację kuriera za 500 zł. Taka konstrukcja cennika pokazuje ważną rzecz: cena bazowa strony nie musi obejmować wszystkich funkcji, których potrzebuje konkretna firma.",
          "Podobnie jest z Next.js. Prograffing podaje cenę strony na poziomie około 3000 zł, podczas gdy freelancer Prościński publikuje progi od 3000 zł, od 9000 zł i od 25 000 zł netto. Nie ma tu sprzeczności, dopóki nie wiadomo, co dokładnie zawiera każda realizacja. Technologia jest tylko jednym z elementów. Ostateczny koszt wynika z tego, co ma zostać zaprojektowane, napisane, połączone i później utrzymywane.",
        ],
        table: {"caption":"Publiczne cenniki pokazują, jak szeroki jest zakres cen","head":["Wykonawca","Przykład ceny z publicznego cennika"],"rows":[["Webikom","od 599 zł za najtańszy wariant"],["Afterweb, Wrocław","pakiety za 1990 zł, 2980 zł i 3970 zł"],["AW Projekt Art, Wrocław","od 2500 do 15 000 zł"],["DesignSolutions","od 3000 zł, 5000 zł i 8000 zł netto, dodatkowo domena i hosting"],["Ansite, Wrocław","od 2900 zł, 3900 zł i 8900 zł netto"],["Promo-Peak","strona dla małej firmy od 3499 zł lub 4499 zł netto"],["WeNet","strona w abonamencie od 219 zł miesięcznie"],["Zdobywcy Sieci","sklep WooCommerce 5500-7500 zł, dodatki osobno"],["Prościński","projekty Next.js od 3000 zł, od 9000 zł i od 25 000 zł netto"],["Prograffing","strona Next.js za około 3000 zł"]]},
      },
      {
        heading: "Najwięcej zmienia rzeczywisty zakres projektu",
        body: [
          "Przy tworzeniu stron www cena zaczyna mieć sens dopiero wtedy, gdy wiadomo, co właściwie ma powstać. Dwie witryny mogą wyglądać podobnie na pierwszy rzut oka, a wymagać zupełnie innej ilości pracy.",
          "Pierwszym elementem jest projekt. Można wykorzystać gotowy układ i dostosować go do firmy albo przygotować projekt na zamówienie. W drugim przypadku trzeba przemyśleć strukturę informacji, hierarchię treści, wygląd poszczególnych elementów, zachowanie strony na różnych ekranach i spójność całego interfejsu. Im więcej decyzji trzeba podjąć indywidualnie, tym większy jest zakres pracy przed rozpoczęciem samego programowania.",
          "Znaczenie ma też liczba typów podstron, nie tylko liczba adresów w serwisie. Kilkanaście usług może korzystać z jednego powtarzalnego układu. Z drugiej strony mniejsza witryna może zawierać stronę główną, rozbudowaną prezentację usługi, bazę wiedzy, sekcję realizacji i kilka innych widoków wymagających osobnego zaprojektowania. Samo liczenie podstron nie mówi więc wszystkiego.",
          "Kolejna pozycja to treści. Jeżeli masz przygotowane teksty, zdjęcia, logo i podstawową strukturę informacji, wykonawca może skupić się na projekcie i wdrożeniu. Jeśli materiały trzeba dopiero opracować, uporządkować albo dopasować do struktury witryny, zakres projektu rośnie. To samo dotyczy przenoszenia treści ze starej strony.",
          "Do tego dochodzą integracje. Formularz przekazujący wiadomość to inny zakres niż połączenie strony z zewnętrznym systemem. Sklep z podstawową konfiguracją różni się od sklepu wymagającego dodatkowych sposobów dostawy, integracji z innymi usługami lub nietypowej logiki działania. Publiczny cennik Zdobywców Sieci dobrze pokazuje tę zasadę, ponieważ integracja kuriera jest tam osobną pozycją.",
          "Osobnym tematem są wersje językowe. Dodanie kolejnego języka to nie tylko skopiowanie tekstu. Trzeba przygotować sposób przełączania wersji, strukturę treści i odpowiednią konfigurację poszczególnych adresów. Jeżeli tłumaczenia nie są gotowe, dochodzi również praca nad materiałami.",
          "Na końcu jest SEO. Samo zainstalowanie narzędzia nie zastępuje zaplanowania struktury serwisu. Jeśli strona ma obsługiwać wiele usług lub tematów, trzeba odpowiednio rozdzielić treści, nagłówki, adresy i informacje dla wyszukiwarek. Dobrze jest ustalić ten zakres przed wdrożeniem, ponieważ późniejsze przebudowywanie gotowej strony zwykle oznacza dodatkową pracę.",
        ],
      },
      {
        heading: "Cena rośnie wtedy, gdy rośnie liczba decyzji i zależności",
        body: [
          "Różnica między tańszą i droższą ofertą nie musi wynikać z tego, że jeden wykonawca „bierze więcej za to samo”. Często nie jest to to samo. Pod wspólną nazwą „strona firmowa” mogą znajdować się usługi o zupełnie innym zakresie.",
          "W prostszym wariancie punkt wyjścia może być już określony: gotowa konstrukcja, ograniczona liczba zmian, przygotowane materiały i niewiele funkcji dodatkowych. Taki projekt łatwiej powtarzać, a liczba decyzji do podjęcia jest mniejsza.",
          "W bardziej indywidualnym projekcie najpierw trzeba ustalić, jak strona ma wspierać firmę. Dopiero później powstaje struktura, projekt poszczególnych widoków i rozwiązania techniczne. Więcej pracy pojawia się również wtedy, gdy serwis jest połączony z innymi systemami, zawiera nietypowe funkcje albo ma być przygotowany tak, aby można go było rozwijać wraz z firmą.",
          "Cena zależy również od odpowiedzialności wykonawcy za materiały. Oferta może zakładać, że dostarczasz komplet gotowych tekstów i grafik, ale może też obejmować pomoc w uporządkowaniu informacji. Te dwa zakresy trudno porównywać wyłącznie na podstawie kwoty z pierwszej strony oferty.",
          "Podobna różnica występuje między jednorazowym projektem a usługą abonamentową. WeNet podaje stronę w abonamencie od 219 zł miesięcznie. To inny model zakupu niż jednorazowa płatność za wykonanie witryny, dlatego nie wystarczy zestawić miesięcznej opłaty z ceną projektu i wskazać tańszej opcji.",
          "Przed decyzją sprawdziłbym przede wszystkim, co pozostaje Twoją własnością, za co płacisz jednorazowo, za co cyklicznie i co stanie się ze stroną po zakończeniu współpracy. Dopiero wtedy różne modele cenowe można rzeczywiście porównywać.",
        ],
      },
      {
        heading: "Po publikacji pozostają domena, hosting i utrzymanie",
        body: [
          "Budżet na stronę nie kończy się w dniu jej uruchomienia. Domena i hosting są kosztami związanymi z dalszym działaniem serwisu. Ich ceny i warunki zależą od wybranych usług, dlatego warto oddzielić je od kosztu samego wykonania strony.",
          "Domena to adres, pod którym działa witryna. Hosting zapewnia miejsce i infrastrukturę potrzebną do jej udostępniania. W niektórych ofertach te elementy są rozliczane osobno. DesignSolutions w swoim cenniku wprost zaznacza, że domena i hosting dochodzą do ceny realizacji.",
          "Trzecim elementem jest opieka. Jej zakres zależy od rodzaju strony i sposobu, w jaki chcesz nią zarządzać. Przy WordPressie może obejmować aktualizacje, kontrolę działania, kopie bezpieczeństwa oraz reagowanie na problemy. Jeżeli taki zakres jest Ci potrzebny, ustal od początku, czy jest częścią projektu, osobną usługą czy pozostaje po Twojej stronie.",
          "W przypadku [opieki nad stroną WordPress](/uslugi/opieka-wordpress) szczególnie ważne jest ustalenie, co dokładnie wykonawca robi regularnie, a które prace są rozliczane oddzielnie. Sama nazwa pakietu opieki niewiele mówi bez listy czynności i granic odpowiedzialności.",
          "Koszt utrzymania może również wynikać z używanych narzędzi, licencji lub zewnętrznych usług. Nie każda strona ich potrzebuje. Jeżeli jednak projekt od początku zakłada rozwiązania wymagające stałych opłat, powinny być widoczne przed podjęciem decyzji, a nie dopiero po uruchomieniu serwisu.",
        ],
      },
      {
        heading: "Tania oferta wymaga sprawdzenia zakresu, a nie automatycznego odrzucenia",
        body: [
          "Niska cena sama w sobie nie oznacza złej strony. Publiczny cennik Webikom pokazuje najtańszy wariant od 599 zł, podczas gdy inne firmy zaczynają od kilku tysięcy złotych. Tego rodzaju różnicy nie da się uczciwie ocenić bez sprawdzenia, co dokładnie znajduje się w poszczególnych ofertach.",
          "Jednym z pierwszych pytań powinno być to, czy strona powstaje na gotowym szablonie, czy projekt jest przygotowywany na zamówienie. Gotowy szablon może być rozsądnym rozwiązaniem, jeśli odpowiada potrzebom firmy i akceptujesz jego ograniczenia. Problem zaczyna się wtedy, gdy oczekujesz indywidualnego projektu, a oferta w rzeczywistości obejmuje głównie dostosowanie istniejącego układu.",
          "Sprawdź również zasady własności. Dobrze wiedzieć, czy po zakończeniu współpracy masz dostęp do strony, treści, domeny i kont potrzebnych do dalszego działania serwisu. Jeżeli rozwiązanie jest związane z konkretną usługą abonamentową, istotne są warunki obowiązujące po rezygnacji.",
          "Kolejna rzecz to zakres zmian. Cena startowa może obejmować ściśle określony pakiet, a wszystko poza nim być wyceniane dodatkowo. Nie jest to wada, jeśli zasady są jasno opisane. Trudność pojawia się wtedy, gdy porównujesz cenę podstawową jednej firmy z pełniejszą ofertą drugiej.",
          "Przy sklepie internetowym szczególną uwagę zwróciłbym na funkcje dodatkowe. Cennik Zdobywców Sieci pokazuje, że dodatkowa integracja może być osobno płatnym elementem. Podobnie może być z innymi połączeniami i funkcjami, dlatego przygotuj ich listę przed porównywaniem ofert.",
          "Nie zakładałbym też, że droższa propozycja automatycznie oznacza lepszy rezultat. Cena jest informacją o ofercie, ale nie zastępuje opisu zakresu, procesu ani odpowiedzialności wykonawcy. To te elementy pokazują, za co faktycznie płacisz.",
        ],
      },
      {
        heading: "Oferty najlepiej porównywać po tym samym zakresie",
        body: [
          "Jeżeli wysyłasz zapytanie do kilku wykonawców, postaraj się przekazać każdemu podobny zestaw informacji. Wtedy łatwiej zauważyć, skąd biorą się różnice w cenach. Bez tego jedna firma może wycenić podstawową witrynę, a druga założyć od początku indywidualny projekt, opracowanie treści i dodatkowe funkcje.",
          "Przed porównaniem ofert dobrze mieć ustalone:",
          "• jaki jest cel strony i jakie informacje mają być na niej najważniejsze,",
          "• jakie rodzaje podstron i funkcje są potrzebne,",
          "• czy masz gotowe teksty, zdjęcia i identyfikację wizualną,",
          "• czy strona ma działać w więcej niż jednym języku,",
          "• czy potrzebujesz integracji z zewnętrznymi systemami,",
          "• kto będzie później aktualizował treści i zajmował się utrzymaniem.",
          "W samej ofercie sprawdź nie tylko końcową kwotę. Zobacz, czy projekt graficzny jest indywidualny, czy opiera się na gotowym rozwiązaniu. Sprawdź, czy w cenie znajduje się przygotowanie treści, ich wprowadzenie, konfiguracja potrzebnych funkcji i prace po publikacji. Ustal też, które elementy są płatne cyklicznie.",
          "Technologia powinna pojawić się w tej rozmowie dopiero w kontekście potrzeb. WordPress może być użyteczny, gdy zależy Ci na wygodnej edycji treści i odpowiada charakterowi serwisu. Next.js może być wybrany w projektach, w których wykonawca chce zbudować stronę lub rozwiązanie w tym stosie technologicznym. Sam napis „WordPress” albo „Next.js” w ofercie nadal nie mówi, jak dużo pracy zawiera wycena. Różnice kosztowe między tymi technologiami opisałem w tekście [WordPress czy Next.js: koszt](/blog/wordpress-vs-next-js-koszt).",
          "W swoich projektach nie publikuję stałego cennika, ponieważ [stronę www](/uslugi/tworzenie-stron-www) wyceniam indywidualnie po rozmowie o zakresie. Nie oznacza to, że ceny z rynku nie są przydatne. Są dobrym punktem odniesienia, pod warunkiem że traktujesz je jako przykłady konkretnych ofert innych wykonawców, a nie uniwersalny cennik każdej strony internetowej.",
          "Najbardziej użyteczne porównanie powstaje wtedy, gdy obok ceny możesz postawić ten sam zakres: projekt, typy podstron, treści, integracje, wersje językowe, SEO, sposób utrzymania oraz zasady własności. Wtedy różnice przestają być przypadkowymi liczbami i zaczynają pokazywać, co rzeczywiście kupujesz.",
        ],
      },
    ],
    faq: [
      { q: "Ile kosztuje najtańsza strona www?", a: "Wśród przytoczonych publicznych cenników najniższy wariant podaje Webikom, od 599 zł. Afterweb publikuje z kolei pakiety za 1990 zł, 2980 zł i 3970 zł. To przykłady ofert innych wykonawców, więc przed porównaniem trzeba sprawdzić ich zakres." },
      { q: "Czy mogę zamówić stronę za około 3000 zł?", a: "Takie ceny pojawiają się w publicznych cennikach. DesignSolutions podaje wariant od 3000 zł netto, Prościński stronę Next.js od 3000 zł netto, a Prograffing mówi o około 3000 zł. Kluczowe jest jednak to, co dokładnie dana cena obejmuje." },
      { q: "Co najbardziej wpływa na cenę mojej strony?", a: "Najwięcej zmienia zakres: projekt, typy podstron, przygotowanie treści, integracje, wersje językowe i wymagania związane z SEO. Im więcej elementów trzeba zaprojektować lub połączyć indywidualnie, tym większy jest zakres pracy." },
      { q: "Czy strona w abonamencie jest tańsza od jednorazowego projektu?", a: "Nie da się tego ocenić na podstawie samej opłaty miesięcznej. WeNet podaje stronę w abonamencie od 219 zł miesięcznie, ale taki model trzeba porównywać z ofertą jednorazową także pod kątem zakresu, własności strony i warunków po zakończeniu współpracy." },
      { q: "Dlaczego nie podajesz stałej ceny za wykonanie strony?", a: "Wyceniam projekty indywidualnie po rozmowie, ponieważ podobnie wyglądające strony mogą mieć zupełnie inny zakres. Na wycenę wpływają między innymi projekt, struktura treści, funkcje, integracje i sposób późniejszego utrzymania serwisu." },
    ],
  },
  {
    slug: "next-js-15-vs-wordpress-2026",
    title: "Next.js czy WordPress: wybór dla firmy",
    excerpt:
      "WordPress lepiej pasuje do stron opartych głównie na treści, które chcesz samodzielnie edytować. Next.js ma więcej sensu, gdy serwis zawiera własną logikę, dane i rozbudowane integracje.",
    date: "2026-04-05",
    updatedAt: "2026-09-26",
    readingMinutes: 6,
    tags: ["Next.js", "WordPress", "decyzje techniczne"],
    keyword: "Next.js czy WordPress",
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-wordpress", "headless-wordpress"],
    hero: { kind: "nextjs" },
    metaTitle: "Next.js czy WordPress: jak wybrać technologię strony",
    metaDescription:
      "Next.js wybierz przy własnej logice i integracjach. WordPress sprawdzi się lepiej, gdy strona opiera się na treści i chcesz edytować ją sam.",
    lead:
      "Jeśli zastanawiasz się, Next.js czy WordPress, zacznij od sposobu pracy ze stroną, a nie od samej technologii. WordPress będzie naturalniejszy dla firmy, która często zmienia treści, a Next.js dla projektu z własną logiką, panelami lub danymi.",
    body: ["Jeśli zastanawiasz się, Next.js czy WordPress, zacznij od sposobu pracy ze stroną, a nie od samej technologii. WordPress będzie naturalniejszy dla firmy, która często zmienia treści, a Next.js dla projektu z własną logiką, panelami lub danymi."],
    sections: [
      {
        heading: "Zacznij od pytania, czym ma być strona za kilka lat",
        body: [
          "Next.js czy WordPress to nie jest wybór między technologią nowoczesną i przestarzałą. To dwie różne drogi do zbudowania serwisu, który ma później działać w konkretny sposób. WordPress jest systemem zarządzania treścią z panelem edycji w standardzie. Next.js jest frameworkiem Reacta rozwijanym przez Vercel, więc sam w sobie nie daje właścicielowi firmy gotowego panelu do zarządzania tekstami, zdjęciami czy podstronami.",
          "Dlatego na początku patrzę na rolę strony. Jeśli ma być przede wszystkim miejscem publikowania treści, prezentowania oferty, rozwijania bloga i wprowadzania zmian przez właściciela albo pracownika firmy, WordPress odpowiada na ten model bez dokładania osobnego systemu. Edytor blokowy Gutenberg jest domyślną częścią WordPressa od wersji 5.0 z grudnia 2018 roku, a sam WordPress działa na ponad 40% wszystkich stron internetowych.",
          "Jeżeli natomiast strona ma zachowywać się bardziej jak aplikacja, sytuacja się zmienia. Konfigurator, panel klienta, portal z danymi albo rozbudowana logika biznesowa to przykłady, przy których Next.js zaczyna pasować lepiej. Nie chodzi o sam wygląd, bo oba rozwiązania mogą prowadzić do nowoczesnej strony. Różnica pojawia się w tym, co dzieje się pod warstwą treści i ile własnych zasad działania ma obsługiwać serwis.",
          "W praktyce najpierw opisz przyszły sposób korzystania ze strony. Kto będzie dodawał treści? Czy zmiany mają odbywać się bez udziału programisty? Czy serwis ma tylko wyświetlać informacje, czy również przetwarzać dane i prowadzić użytkownika przez niestandardowe procesy? Odpowiedzi na te pytania zwykle mówią więcej niż porównywanie samych nazw technologii.",
        ],
      },
      {
        heading: "WordPress ma przewagę, gdy treść ma być pod Twoją kontrolą",
        body: [
          "Najbardziej oczywista przewaga WordPressa pojawia się wtedy, gdy Ty albo ktoś z firmy ma regularnie pracować z treścią. Panel administracyjny jest częścią systemu, więc nie trzeba osobno dobierać narzędzia do edycji. Możesz mieć stronę firmową, blog i rozbudowywać zawartość bez zmiany całego modelu pracy.",
          "To ważne zwłaszcza wtedy, gdy strona ma żyć długo, a wiele zmian będzie drobnych. Nowa podstrona, poprawiony opis usługi albo kolejny wpis nie powinny za każdym razem wymagać przebudowy zaplecza. W takim scenariuszu WordPress jest po prostu zgodny z procesem, w którym treść powstaje po stronie firmy.",
          "Dobrym przykładem z moich realizacji jest Kancelaria Maria Piontek, gdzie zastosowałem WordPress. Ten wybór pasuje do serwisu, którego podstawową rolą jest przekazywanie treści, a nie obsługa własnej logiki aplikacyjnej. Podobny kierunek ma sens wtedy, gdy sklep jest ważniejszy niż niestandardowe mechanizmy: Kosmoteka i LumiKids działają na WooCommerce, czyli rozwiązaniu opartym na WordPressie.",
          "To nie znaczy, że WordPress powinien być domyślną odpowiedzią dla każdej firmy. Jego mocną stroną jest gotowy model zarządzania treścią. Jeśli Twoje wymagania zaczynają wychodzić poza treść i typowe funkcje serwisu, sprawdź, czy nie próbujesz zamienić systemu CMS w aplikację o dużo bardziej indywidualnym sposobie działania. Jeżeli natomiast po wdrożeniu chcesz samodzielnie rozwijać treść strony, [tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress) jest naturalnym punktem odniesienia.",
        ],
      },
      {
        heading: "Next.js ma sens, gdy serwis ma własną logikę",
        body: [
          "Next.js jest frameworkiem Reacta rozwijanym przez Vercel, a jego aktualna wersja główna to 16. Ważniejsze od numeru wersji jest jednak to, do jakich projektów ten model pasuje. Gdy serwis ma przetwarzać dane, prowadzić użytkownika przez własny proces albo łączyć kilka niestandardowych funkcji, Next.js daje przestrzeń do budowania takiej logiki jako części aplikacji.",
          "Dobrym przykładem jest Kantorymapa. Projekt działa w Next.js i obejmuje 1900 kantorów w 140 miastach. Taki serwis nie opiera się na publikowaniu kilku podstron z ofertą. Pracuje na dużym zbiorze danych i prezentuje go użytkownikowi w określonym kontekście. Przy takich projektach pytanie o technologię dotyczy architektury aplikacji, a nie tylko wygody edycji tekstu.",
          "Drugi przykład to Galabau Darius. W tym projekcie Next.js obsługuje konfigurator wyceny z panelem administracyjnym. To wyraźnie inna klasa problemu niż zwykła strona informacyjna. Użytkownik wykonuje określone działania, system reaguje zgodnie z przygotowaną logiką, a po drugiej stronie potrzebne jest zaplecze do obsługi procesu.",
          "Jeżeli planujesz podobny kierunek, [tworzenie stron Next.js](/uslugi/aplikacje-nextjs) rozpatruj jako budowę rozwiązania dopasowanego do procesu firmy. Next.js nie jest automatycznie lepszy od WordPressa. Staje się trafniejszy wtedy, gdy główną wartością serwisu nie jest sam panel treści, lecz własne zachowanie aplikacji. Jeśli już dziś wiadomo, że później dojdzie konfigurator, panel klienta albo portal z danymi, uwzględnij to przy wyborze technologii, nawet jeśli nie budujesz tych funkcji od razu.",
        ],
      },
      {
        heading: "Zespół do dalszej obsługi jest częścią decyzji",
        body: [
          "Technologia zostaje z firmą dłużej niż samo wdrożenie. Dlatego przy wyborze pytam nie tylko o funkcje, ale też o to, kto będzie pracował ze stroną później. Inaczej wygląda serwis, który właściciel chce sam aktualizować przez panel, a inaczej aplikacja rozwijana przez programistę.",
          "WordPress ma panel zarządzania treścią w standardzie, więc codzienna obsługa treści może odbywać się bez dokładania kolejnego systemu. Next.js wymaga osobnego rozwiązania, jeśli treści mają edytować osoby nietechniczne: można podłączyć CMS, na przykład Sanity albo Strapi, albo wykorzystać WordPress jako sam panel treści. To dodatkowa decyzja architektoniczna, której w klasycznym WordPressie nie trzeba podejmować.",
          "Pomyśl też o osobach, które będą rozwijały serwis po pierwszym wdrożeniu. Jeżeli projekt ma własną logikę, kolejne zmiany i tak będą wymagały pracy programistycznej, niezależnie od użytej technologii. Jeśli natomiast rozwój ma polegać głównie na publikacji nowych treści, panel WordPressa ogranicza liczbę sytuacji, w których trzeba angażować programistę do zwykłych zmian redakcyjnych.",
        ],
      },
      {
        heading: "Integracje trzeba oceniać po stopniu własnej logiki",
        body: [
          "Samo słowo „integracja” nie przesądza o wyborze technologii. Ważne jest to, jak bardzo integracja wpływa na zachowanie całego serwisu. Jeżeli strona pozostaje przede wszystkim miejscem publikowania treści, WordPress nadal może być właściwą bazą. Jeżeli jednak połączenia z zewnętrznymi danymi stają się rdzeniem działania projektu, rośnie sens rozwiązania budowanego jako aplikacja. Przy podejmowaniu decyzji pomagają cztery pytania:",
          "• Czy użytkownik głównie czyta, czy wykonuje wieloetapowe działania?",
          "• Czy serwis ma pracować na własnym zbiorze danych?",
          "• Czy potrzebujesz panelu klienta albo konfiguratora?",
          "• Czy integracje są dodatkiem, czy podstawą działania strony?",
          "Jeżeli odpowiedzi kierują projekt w stronę własnego procesu i danych, Next.js staje się bardziej naturalnym wyborem. Jeżeli funkcje pozostają dodatkiem do serwisu treściowego, WordPress zachowuje prostszy model obsługi.",
        ],
      },
      {
        heading: "Model headless łączy panel WordPressa z Next.js",
        body: [
          "Wybór nie zawsze musi oznaczać czyste „albo WordPress, albo Next.js”. Istnieje model headless, w którym WordPress pełni rolę panelu do zarządzania treścią, a Next.js odpowiada za warstwę widoczną dla użytkownika. Można w ten sposób zachować znany sposób pracy redakcyjnej i jednocześnie budować interfejs w Next.js.",
          "Taki układ ma sens wtedy, gdy potrzeby redakcyjne i aplikacyjne są równie ważne. Nie jest to jednak automatyczny kompromis do każdego projektu. Dochodzi kolejna warstwa architektury i trzeba świadomie zdecydować, czy rzeczywiście jest potrzebna. Jeżeli nie ma takiej potrzeby, klasyczny WordPress albo sam Next.js z innym CMS będą prostsze do uzasadnienia.",
          "Budżet utrzymania to osobne kryterium i nie mieszam go z oceną funkcji. Koszty zależą od infrastruktury, dodatkowych narzędzi i sposobu dalszej obsługi, a szczegóły opisałem we wpisie o [kosztach utrzymania WordPress i Next.js](/blog/wordpress-vs-next-js-koszt). Jeżeli sprowadzę decyzję do jednego rozróżnienia, wygląda ono tak: WordPress wybieraj wtedy, gdy centrum projektu stanowi treść i samodzielna edycja, a Next.js wtedy, gdy centrum projektu stanowi własna logika, dane i niestandardowe procesy. Model headless ma sens pośrodku, gdy potrzebujesz obu tych rzeczy jednocześnie.",
        ],
      },
    ],
    faq: [
      { q: "Czy WordPress nadal nadaje się do strony firmowej?", a: "Tak. WordPress działa na ponad 40% wszystkich stron internetowych i ma panel do edycji treści w standardzie. Dobrze pasuje do stron opartych głównie na treści, które chcesz rozwijać samodzielnie." },
      { q: "Kiedy lepiej wybrać Next.js zamiast WordPressa?", a: "Gdy serwis ma własną logikę, na przykład konfigurator, panel klienta albo portal z danymi. Next.js pasuje szczególnie do projektów, w których strona zachowuje się bardziej jak aplikacja niż klasyczny serwis treściowy." },
      { q: "Czy w Next.js mogę sam edytować treści?", a: "Tak, ale trzeba podłączyć system CMS, na przykład Sanity lub Strapi. Inną opcją jest WordPress używany jako panel treści w modelu headless." },
      { q: "Czy można połączyć WordPress z Next.js?", a: "Tak. W modelu headless WordPress odpowiada za zarządzanie treścią, a Next.js za warstwę widoczną dla użytkownika. Taki układ ma sens, gdy chcesz połączyć wygodny panel redakcyjny z bardziej rozbudowaną logiką interfejsu." },
      { q: "Co jest ważniejsze przy wyborze, technologia czy sposób obsługi strony?", a: "Sposób obsługi strony, bo technologia powinna wynikać z realnych potrzeb firmy. Jeśli najważniejsza jest samodzielna edycja treści, WordPress ma przewagę, a jeśli kluczowa jest własna logika i praca na danych, lepiej pasuje Next.js." },
    ],
  },
  {
    slug: "pozycjonowanie-strony-uslugowej",
    title: "Pozycjonowanie strony usługowej: 7 kroków od audytu do pierwszej top10",
    excerpt:
      "Pierwsze 6 miesięcy SEO dla strony usługowej krok po kroku. Co robić w tygodniu 1, w miesiącu 1, w miesiącu 3, w miesiącu 6.",
    date: "2026-03-22",
    readingMinutes: 14,
    tags: ["SEO", "pozycjonowanie"],
    keyword: "pozycjonowanie strony usługowej",
    metaTitle: "Pozycjonowanie strony usługowej — 7 kroków do top10",
    metaDescription:
      "Pierwsze 6 miesięcy SEO strony usługowej krok po kroku: audyt, technika, content, linki. Co robić w tygodniu 1, w miesiącu 3, w miesiącu 6. Plan z mojej praktyki.",
    hero: { kind: "seo" },
    relatedServices: ["tworzenie-stron-www", "nowoczesna-strona-firmowa-2026", "przyspieszanie-stron-wordpress"],
    body: [
      "Strona usługowa to specyficzny przypadek SEO. Inaczej niż e-commerce gdzie konkurujesz na frazy produktowe, tu walka idzie o konkretne zapytania intencyjne typu 'księgowa Wrocław', 'remont łazienki Warszawa cena' albo 'agencja marketingowa B2B'.",
      "Tydzień 1: audyt techniczny. Crawl Screaming Frog albo Sitebulb. Sprawdź indeksację (czy wszystko ważne jest w indeksie Google), Core Web Vitals (LCP poniżej 2.5s, INP poniżej 200ms, CLS poniżej 0.1), strukturę URL, sitemap, robots.txt, schema.org markup, mobile usability.",
      "Tydzień 2-4: poprawki techniczne. Najtańszy boost. Często sama indeksacja + szybkość daje 20-40% wzrostu ruchu w 2 miesiące, bez tworzenia nowego contentu.",
      "Miesiąc 2: research fraz. Senuto, Ahrefs lub Surfer SEO. Wyszukaj wszystkie warianty głównej frazy + powiązane intencyjne. Buduj klastry: jedna strona pieniężna + 5-10 stron wspierających pod long-tail.",
      "Miesiąc 2-3: optymalizacja istniejących stron. Nagłówki H1-H6, meta tytuły max 65 znaków, meta opisy 150-160, alty obrazków, schema.org Service, FAQ z FAQPage schema, linkowanie wewnętrzne strony pieniężne ↔ wspierające.",
      "Miesiąc 3-6: regular content. 4-8 artykułów blogowych miesięcznie pod konkretne frazy. Każdy artykuł min 1500 słów, 8+ sekcji H2, FAQ, linkowanie wewnętrzne, dane strukturalne.",
      "Miesiąc 4-6: linki zewnętrzne. Tylko organicznie i contentowo. Guest posty na branżowych blogach, artykuły gościnne, partnerstwa. Bez SWLi, bez paczek z giełd. Anchory zróżnicowane, brand + frazy long-tail w proporcjach 70/30.",
      "Co miesiąc: raport z Search Console. Pozycje na docelowe frazy, ilość kliknięć, CTR per zapytanie. Konwersje z GA4 mapowane na frazy. Plan na kolejny miesiąc na podstawie danych, nie wyobrażeń.",
    ],
    faq: [
      { q: "Ile czasu potrzeba żeby strona się pozycjonowała?", a: "Pierwsze ruchy w 4-8 tygodni (technika + on-page), top10 dla long-tail w 3-6 miesięcy, top3 dla competitive fraz w 6-18 miesięcy. Zależy od konkurencji, autorytetu domeny, jakości contentu." },
      { q: "Ile kosztuje pozycjonowanie strony usługowej?", a: "Audyt jednorazowy 3-8 tys. Miesięczna opieka SEO (audyt + content + linkbuilding + raporty): 2-8 tys./mc. Większe agencje 8-20 tys./mc. Tańsze (poniżej 1.5 tys.) zwykle automatyzacja bez strategicznego myślenia." },
      { q: "Co jest ważniejsze: technika czy content?", a: "Oba krytyczne. Technika to fundament (bez tego content nie zaindeksuje się dobrze). Content to wyrażenie autorytetu (bez tego nawet idealna technika nie pozycjonuje konkurencyjnych fraz). Default: pierwsze 4 tygodnie technika, potem content + linki równolegle." },
      { q: "Czy linki kupne pomagają?", a: "Krótkoterminowo tak, długoterminowo ryzyko Google Penalty (algorytm Penguin). SWLi i paczki z giełd = mega ryzyko. Lepiej guest posty na branżowych blogach, partnerstwa contentowe, organic mention z PR." },
      { q: "Jak zmierzyć ROI z pozycjonowania?", a: "Search Console: pozycje + impresje + kliki. GA4: konwersje z organic. Senuto/Ahrefs: traffic estimate + visibility index. Mapuj na fraz = przychód per klient = LTV. ROI miesięczny zwykle widać po 6-12 miesiącach (delay vs SEM)." },
    ],
  },
  {
    slug: "wdrozenia-ai-w-malych-firmach",
    title: "AI w małej firmie: gdzie ma sens i jak zacząć",
    excerpt:
      "AI może pomóc małej firmie w powtarzalnej pracy z tekstem, dokumentami i informacją, ale nie każde zadanie warto automatyzować. Kluczowe są dobry proces, kontrola jakości, ochrona danych i pomiar efektu.",
    date: "2026-03-08",
    updatedAt: "2026-09-26",
    readingMinutes: 7,
    tags: ["AI", "case studies"],
    keyword: "wdrożenia AI małe firmy",
    relatedServices: ["wdrozenia-ai", "aplikacje-nextjs", "next-js-software-house"],
    hero: { kind: "ai" },
    metaTitle: "AI w małej firmie: gdzie ma sens i jak zacząć",
    metaDescription:
      "AI w małej firmie ma sens przy powtarzalnych zadaniach. Zobacz, od czego zacząć, co wpływa na koszt oraz jak podejść do RODO i AI Act.",
    lead:
      "AI w małej firmie ma sens przede wszystkim tam, gdzie powtarza się praca na informacjach, a wynik można sprawdzić przed użyciem. Zamiast zaczynać od wyboru modelu, proponuję najpierw wskazać konkretny proces, dane potrzebne do jego obsługi i sposób mierzenia efektu.",
    body: ["AI w małej firmie ma sens przede wszystkim tam, gdzie powtarza się praca na informacjach, a wynik można sprawdzić przed użyciem. Zamiast zaczynać od wyboru modelu, proponuję najpierw wskazać konkretny proces, dane potrzebne do jego obsługi i sposób mierzenia efektu."],
    sections: [
      {
        heading: "Gdzie AI w małej firmie rzeczywiście może mieć sens",
        body: [
          "AI traktuję jako narzędzie do wykonania określonego zadania, a nie jako osobny cel projektu. W małej firmie jest to szczególnie ważne, bo nowy system musi wejść w istniejący sposób pracy, korzystać z dostępnych danych i dawać rezultat, który da się ocenić. Sam dostęp do modelu językowego nie rozwiązuje problemu, jeśli nie wiadomo, co dokładnie ma się wydarzyć przed wysłaniem zapytania do modelu i co firma zrobi z otrzymaną odpowiedzią.",
          "Dobrym punktem wyjścia są procesy powtarzalne, oparte na tekście albo dokumentach. Typowe przykłady to chatbot odpowiadający na częste pytania, przygotowywanie szkiców opisów oraz klasyfikacja wiadomości e-mail. W każdym z tych przypadków AI wykonuje ograniczone zadanie: wyszukuje lub porządkuje informacje, przygotowuje propozycję albo przypisuje treść do odpowiedniej kategorii. To łatwiejsze do kontrolowania niż pomysł, aby model samodzielnie obsługiwał cały proces biznesowy od początku do końca.",
          "Nie zaczynałbym więc od pytania „jaki model AI wdrożyć?”. Najpierw sprawdziłbym, gdzie w firmie regularnie wraca ta sama praca i gdzie człowiek może szybko ocenić, czy wynik jest poprawny. Jeżeli przygotowany szkic opisu wymaga akceptacji przed publikacją, można zbudować kontrolę jakości. Jeżeli klasyfikowana wiadomość może zostać sprawdzona przed wykonaniem dalszej akcji, ryzyko błędu również łatwiej ograniczyć.",
          "Znaczenie ma też skala wykorzystania AI w polskich firmach. Według Eurostatu w 2025 roku z technologii AI korzystało 20,0% przedsiębiorstw w Unii Europejskiej zatrudniających co najmniej 10 osób. W 2024 roku było to 13,5%. W Polsce odsetek wynosił 8,4%, podczas gdy w Danii 42,0%. Te dane pokazują poziom wykorzystania technologii, ale nie mówią, jaki projekt będzie właściwy dla konkretnej firmy. Tę decyzję trzeba oprzeć na jej procesach, danych i sposobie pracy.",
        ],
      },
      {
        heading: "Od czego zacząć, zanim wybierzesz narzędzia",
        body: [
          "Pierwszym krokiem powinno być opisanie zadania bez używania nazw modeli i dostawców. Zamiast „chcę AI do maili” lepiej określić, jakie wiadomości przychodzą, co dziś robi z nimi pracownik, jaka informacja jest potrzebna do podjęcia decyzji i w którym miejscu może pojawić się błąd. Dopiero na takim procesie można ocenić, czy model językowy faktycznie coś upraszcza. W praktyce przydatna jest prosta kolejność:",
          "• wybierz jeden powtarzalny proces i opisz jego obecny przebieg,",
          "• określ dane, do których system musi mieć dostęp,",
          "• ustal, jaki wynik ma przygotować AI i kto go sprawdza,",
          "• zapisz, co mierzysz przed uruchomieniem i po nim,",
          "• przewidź ręczny sposób wykonania zadania, gdy model albo integracja nie zadziała.",
          "Taki sposób podejścia ogranicza pokusę budowania rozbudowanego systemu przed sprawdzeniem podstawowego założenia. Jeżeli na początku nie da się powiedzieć, jaki wynik uznasz za prawidłowy, później trudno będzie również stwierdzić, czy rozwiązanie działa.",
          "W małej firmie szczególnie istotny jest ostatni punkt. Proces nie powinien zatrzymywać się tylko dlatego, że odpowiedź modelu jest błędna albo usługa zewnętrzna jest chwilowo niedostępna. Od początku trzeba wiedzieć, co w takiej sytuacji robi człowiek i gdzie może przejąć zadanie. AI jest wtedy elementem procesu, a nie jego jedynym punktem podparcia.",
          "Jeżeli po takim rozpoznaniu okazuje się, że potrzebna jest integracja modelu z systemami firmy, osobny interfejs albo automatyzacja przepływu danych, zakres techniczny można dopiero wtedy opisać dokładniej. Na stronie o [wdrożeniach AI w firmie](/uslugi/wdrozenia-ai) opisuję ten temat od strony usługi, a tutaj najważniejsza jest sama decyzja, czy konkretny proces w ogóle nadaje się do wykorzystania AI.",
        ],
      },
      {
        heading: "Z czego składa się koszt wykorzystania AI",
        body: [
          "Koszt nie sprowadza się do opłaty za dostęp do modelu. Samo API jest tylko jednym składnikiem całego rozwiązania. Cena korzystania z niego zależy od wybranego modelu i liczby zapytań, a cenniki dostawców się zmieniają, dlatego nie ma sensu wpisywać do takiego artykułu stałej kwoty i traktować jej jako uniwersalnego kosztu. Na całkowity koszt wpływają przede wszystkim elementy potrzebne do połączenia modelu z procesem firmy.",
          "W prostym scenariuszu model przygotowuje szkic na podstawie informacji przekazanej przez użytkownika. W bardziej rozbudowanym trzeba pobrać dane z innych systemów, przekształcić je, wysłać odpowiedni fragment do modelu, odebrać wynik i przekazać go do kolejnego etapu. Im więcej zależności, tym większą część pracy stanowi integracja, a nie samo AI.",
          "Podobnie wygląda przygotowanie danych. Model nie naprawia automatycznie niespójnych informacji znajdujących się w kilku miejscach. Jeżeli odpowiedź zależy od danych firmowych, trzeba ustalić, które źródło jest właściwe i jakie informacje mogą zostać wykorzystane. Przy danych wrażliwych dochodzą zasady ich ograniczania oraz ochrony.",
          "Dlatego porównywanie projektów wyłącznie na podstawie ceny API może prowadzić do złych wniosków. Tania pojedyncza odpowiedź modelu nie oznacza taniego systemu, jeśli przed nią trzeba wykonać wiele operacji na danych, a po niej przeprowadzić kontrolę jakości i obsłużyć wynik.",
        ],
        table: {"caption":"Z czego składa się koszt wykorzystania AI","head":["Składnik","Co obejmuje"],"rows":[["API modelu","Korzystanie z wybranego modelu, zależne od modelu i liczby zapytań"],["Integracja","Połączenie AI z systemami, z których firma już korzysta"],["Przygotowanie danych","Uporządkowanie informacji potrzebnych do działania systemu"],["Kontrola jakości","Sprawdzanie wyników i zasady postępowania przy błędach"],["Utrzymanie","Dostosowywanie rozwiązania po uruchomieniu i reagowanie na zmiany"]]},
      },
      {
        heading: "RODO trzeba uwzględnić już przy projektowaniu przepływu danych",
        body: [
          "Przed wysłaniem danych do modelu trzeba wiedzieć, jakie informacje rzeczywiście są mu potrzebne. Jedną z podstawowych zasad jest minimalizacja danych: do modelu powinien trafiać taki zakres informacji, który jest potrzebny do wykonania zadania, zamiast całego dostępnego zbioru.",
          "Tam, gdzie to możliwe, dane można anonimizować albo pseudonimizować. Celem jest ograniczenie ilości informacji pozwalających powiązać treść z konkretną osobą. Nie jest to dodatek wykonywany po ukończeniu integracji. Sposób przekazywania danych wpływa na architekturę rozwiązania i trzeba go uwzględnić podczas projektowania procesu.",
          "Kolejna kwestia to relacja z dostawcą usługi. Przy przetwarzaniu danych osobowych trzeba uwzględnić umowę powierzenia oraz warunki transferu danych poza Europejski Obszar Gospodarczy. Wybór narzędzia nie powinien więc sprowadzać się wyłącznie do jakości odpowiedzi modelu. Liczą się również zasady przetwarzania informacji i warunki, na których dostawca świadczy usługę.",
          "W praktyce trzeba rozdzielić dwa pytania. Pierwsze brzmi: czy AI potrafi wykonać dane zadanie wystarczająco dobrze? Drugie: czy można przekazywać mu informacje potrzebne do tego zadania w sposób zgodny z zasadami obowiązującymi firmę? Pozytywna odpowiedź na pierwsze pytanie nie daje automatycznie pozytywnej odpowiedzi na drugie. Im wcześniej przepływ danych zostanie opisany, tym mniej zmian trzeba wykonywać później.",
        ],
      },
      {
        heading: "AI Act wprowadza obowiązki także dla prostych zastosowań",
        body: [
          "Przy planowaniu rozwiązania trzeba również uwzględnić unijny AI Act, czyli rozporządzenie 2024/1689. Od 2 sierpnia 2026 roku stosuje się art. 50. W przypadku chatbota użytkownik powinien być poinformowany, że rozmawia z AI, chyba że jest to oczywiste. Treści typu deepfake wymagają oznaczenia.",
          "Ma to praktyczne znaczenie nawet dla stosunkowo prostego chatbota na stronie. Projekt interfejsu nie powinien sugerować, że po drugiej stronie znajduje się człowiek, jeżeli odpowiedzi generuje system AI. Informacja o charakterze rozmowy staje się częścią sposobu działania produktu, a nie wyłącznie treścią regulaminu.",
          "Obowiązki dotyczące systemów wysokiego ryzyka zostały przesunięte w czasie przez pakiet Digital Omnibus z 2026 roku. Typowe zastosowania w małej firmie, takie jak chatbot FAQ, przygotowywanie szkiców opisów czy klasyfikowanie wiadomości, zwykle nie należą do systemów wysokiego ryzyka, ale kwalifikację konkretnego rozwiązania trzeba sprawdzić.",
          "Nie można więc zakładać, że każda automatyzacja wykorzystująca AI podlega dokładnie tym samym wymaganiom. Znaczenie ma zastosowanie systemu. Ten sam model językowy może być używany w różnych procesach, a obowiązki rozpatruje się w kontekście tego, do czego rozwiązanie faktycznie służy. Jeżeli wiadomo, jakie zadanie wykonuje system, jakie dane otrzymuje, komu pokazuje wynik i czy wynik prowadzi do dalszej decyzji, łatwiej ustalić, jakie wymagania prawne trzeba sprawdzić.",
        ],
      },
      {
        heading: "Efekt trzeba mierzyć na procesie, nie na możliwościach modelu",
        body: [
          "Najbardziej użyteczne pytanie po wdrożeniu nie brzmi „czy AI działa?”, tylko „czy konkretny proces działa lepiej niż wcześniej?”. Model może generować poprawne odpowiedzi, a mimo to nie przynosić korzyści, jeśli pracownik musi poświęcić dużo czasu na ich poprawianie albo jeśli rozwiązanie komplikuje prostą wcześniej czynność.",
          "Dlatego punkt odniesienia ustalam przed zmianą procesu. Trzeba wiedzieć, jak zadanie wygląda bez AI, a następnie mierzyć ten sam element po uruchomieniu rozwiązania. W zależności od procesu może chodzić o czas potrzebny na przygotowanie materiału, liczbę treści wymagających poprawek albo udział wyników, które przechodzą kontrolę jakości.",
          "Ważna jest też kontrola poprawności. AI może wesprzeć research albo przygotować roboczą odpowiedź, ale wynik nie musi być automatycznie traktowany jako fakt. Widać to w moim własnym projekcie [cojestpolskie.pl](/projekty/cojestpolskie). Przy researchu właścicieli ponad 900 marek korzystałem z AI, ale wyniki sprawdzałem następnie w KRS i CRBR. Projekt obejmuje ponad 1700 podstron.",
          "Ten przykład dobrze pokazuje rolę, którą AI może pełnić w procesie opartym na informacjach. Model pomaga w jednym z etapów pracy, ale nie staje się ostatecznym źródłem prawdy. Gdy ważna jest poprawność danych, potrzebne jest źródło pozwalające wynik zweryfikować. Tę samą zasadę można zastosować do innych procesów: szkic może wymagać akceptacji przed publikacją, klasyfikacja wiadomości może być sprawdzana przed wykonaniem działania, a odpowiedź chatbota można ograniczyć do zakresu, dla którego przygotowano dane i zasady kontroli.",
        ],
      },
    ],
    faq: [
      { q: "Od czego zacząć korzystanie z AI w małej firmie?", a: "Zacznij od jednego powtarzalnego procesu, a nie od wyboru modelu. Opisz, jakie dane są potrzebne, jaki wynik ma przygotować AI, kto go sprawdzi i co wydarzy się w razie błędu. Dopiero wtedy dobieraj narzędzia i integracje." },
      { q: "Ile kosztuje wykorzystanie AI w małej firmie?", a: "Koszt składa się z opłat za API, integracji z systemami firmy, przygotowania danych, kontroli jakości i utrzymania. Opłaty za API zależą od modelu i liczby zapytań, a cenniki dostawców się zmieniają, dlatego nie ma jednej stałej kwoty właściwej dla każdego projektu." },
      { q: "Czy mogę wysyłać dane klientów do modelu AI?", a: "Trzeba uwzględnić zasady RODO: minimalizację danych, anonimizację lub pseudonimizację, umowę powierzenia z dostawcą oraz warunki transferu poza EOG. To, jakie dane mogą trafić do konkretnego rozwiązania, zależy od sposobu ich przetwarzania." },
      { q: "Czy chatbot na stronie musi informować, że korzysta z AI?", a: "Od 2 sierpnia 2026 roku stosuje się art. 50 AI Act. Chatbot powinien informować użytkownika, że rozmawia z AI, chyba że jest to oczywiste. Wymagania dotyczące konkretnego rozwiązania ocenia się na podstawie jego zastosowania." },
      { q: "Jak sprawdzić, czy AI faktycznie pomaga mojej firmie?", a: "Przed zmianą zmierz obecny sposób wykonywania zadania, a później porównuj ten sam proces po dodaniu AI. Użyteczne mierniki to czas obsługi jednej sprawy, liczba wyników wymagających poprawek i udział wyników, które przechodzą kontrolę jakości." },
    ],
  },
  {
    slug: "core-web-vitals-2026",
    title: "Core Web Vitals: co mierzą i jak je poprawić",
    excerpt:
      "Core Web Vitals pokazują, jak szybko strona wyświetla główną treść, reaguje na działania użytkownika i zachowuje stabilny układ. Wyjaśniam aktualne progi, pomiar i najczęstsze sposoby poprawy wyników.",
    date: "2026-02-14",
    updatedAt: "2026-09-26",
    readingMinutes: 6,
    tags: ["performance", "Core Web Vitals", "SEO"],
    keyword: "Core Web Vitals 2026",
    relatedServices: ["przyspieszanie-stron-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    hero: { kind: "performance" },
    metaTitle: "Core Web Vitals: co mierzą i jak poprawić wyniki",
    metaDescription:
      "Core Web Vitals mierzą szybkość, reakcję i stabilność strony. Sprawdź aktualne progi, sposoby pomiaru oraz metody poprawy wyników.",
    lead:
      "Core Web Vitals to trzy metryki opisujące szybkość wyświetlania głównej treści, reakcję strony na interakcje i stabilność jej układu. Jeśli odpowiadasz za stronę firmy, patrz na nie przez pryzmat doświadczenia rzeczywistych użytkowników, a nie pojedynczego wyniku z testu.",
    body: ["Core Web Vitals to trzy metryki opisujące szybkość wyświetlania głównej treści, reakcję strony na interakcje i stabilność jej układu. Jeśli odpowiadasz za stronę firmy, patrz na nie przez pryzmat doświadczenia rzeczywistych użytkowników, a nie pojedynczego wyniku z testu."],
    sections: [
      {
        heading: "Core Web Vitals obejmują LCP, INP i CLS",
        body: [
          "Google zalicza do Core Web Vitals trzy metryki: LCP, INP i CLS. Każda opisuje inny element korzystania ze strony, dlatego dobry wynik jednej z nich nie mówi jeszcze, że cała witryna działa dobrze.",
          "LCP, czyli Largest Contentful Paint, mierzy szybkość wyświetlenia największego elementu widocznego na ekranie. W praktyce może to być duże zdjęcie, grafika albo inny istotny fragment pierwszego widoku strony. Jeśli taki element pojawia się późno, użytkownik może mieć wrażenie, że witryna długo się ładuje, nawet gdy część interfejsu była dostępna wcześniej.",
          "INP, czyli Interaction to Next Paint, opisuje reakcję strony na interakcje użytkownika. Chodzi o to, jak sprawnie witryna odpowiada po kliknięciu, stuknięciu lub innym działaniu. Ta metryka zastąpiła FID jako Core Web Vital 12 marca 2024 roku, więc przy ocenie responsywności strony patrzy się dziś na INP, a nie na FID.",
          "CLS, czyli Cumulative Layout Shift, mierzy stabilność układu. Problem pojawia się wtedy, gdy elementy strony przesuwają się już podczas korzystania z niej. Przykładem może być treść przesunięta przez obraz, baner albo zmianę sposobu wyświetlania fontu. Dla użytkownika oznacza to mniej przewidywalny interfejs, w którym element może znaleźć się w innym miejscu niż chwilę wcześniej.",
          "Te metryki trzeba rozpatrywać razem. LCP odpowiada na pytanie, kiedy główna treść staje się widoczna, INP pokazuje, jak strona reaguje, a CLS mówi, czy jej układ pozostaje stabilny. Dzięki temu nie sprowadzasz oceny wydajności do samego czasu ładowania.",
        ],
      },
      {
        heading: "Aktualne progi są oceniane na 75. percentylu wizyt",
        body: [
          "Progi Core Web Vitals odnoszą się do 75. percentyla wizyt i są sprawdzane osobno dla telefonów oraz komputerów. To ważne, bo pojedynczy szybki test na jednym urządzeniu nie jest odpowiednikiem danych opisujących doświadczenia rzeczywistych użytkowników.",
          "Percentyl ma tutaj praktyczne znaczenie. Nie chodzi o znalezienie jednego szczególnie szybkiego wejścia na stronę, ale o sprawdzenie, jak witryna zachowuje się w szerszym zbiorze rzeczywistych wizyt. Dzięki temu pojedynczy udany pomiar nie przesłania problemów, które występują u części odwiedzających.",
          "Telefony i komputery trzeba rozdzielać. Ta sama witryna może zachowywać się inaczej w zależności od urządzenia, dlatego wspólny wynik nie oddawałby dobrze doświadczenia obu grup użytkowników. Jeśli problem występuje przede wszystkim na telefonach, właśnie tam szukam jego przyczyny, zamiast zakładać, że wynik z komputera opisuje całą stronę.",
          "Nie ma przy tym potrzeby zakładać przyszłych zmian progów ani optymalizować witryny pod wartości, które nie są aktualnym standardem. Sensownym punktem odniesienia są obowiązujące definicje i progi LCP, INP oraz CLS.",
        ],
        table: {"caption":"Aktualne progi są oceniane na 75. percentylu wizyt","head":["Metryka","Dobry wynik","Słaby wynik"],"rows":[["LCP","do 2,5 s","powyżej 4 s"],["INP","do 200 ms","powyżej 500 ms"],["CLS","do 0,1","powyżej 0,25"]]},
      },
      {
        heading: "Dane rzeczywistych użytkowników różnią się od testu laboratoryjnego",
        body: [
          "Jednym z najczęstszych źródeł nieporozumień jest traktowanie każdego wyniku PageSpeed Insights jak tej samej kategorii danych. Tymczasem pomiar terenowy i laboratoryjny odpowiadają na inne pytania.",
          "Dane terenowe opisują doświadczenia rzeczywistych użytkowników. Można je znaleźć między innymi w CrUX oraz w raporcie Core Web Vitals w Google Search Console. To właśnie na danych rzeczywistych użytkowników Google opiera ocenę Core Web Vitals.",
          "Pomiar laboratoryjny powstaje w kontrolowanych warunkach. Tak działają Lighthouse oraz laboratoryjna część PageSpeed Insights. Taki test jest przydatny do diagnozy, bo pozwala obserwować zachowanie strony w określonych warunkach i sprawdzać skutki wprowadzonych zmian. Nie można go jednak utożsamiać z tym, czego faktycznie doświadczają wszyscy odwiedzający.",
          "Wynik laboratoryjny może wskazać problem, ale to dane terenowe pokazują, czy problem występuje podczas prawdziwych wizyt. Z kolei sam raport oparty na rzeczywistych użytkownikach nie zawsze podpowie, który element strony należy zmienić. Oba rodzaje pomiaru uzupełniają się, zamiast ze sobą konkurować.",
          "Jeżeli widzę słaby LCP w danych terenowych, test laboratoryjny pomaga mi sprawdzić, czy największy element jest zbyt ciężki, czy serwer odpowiada wolno albo czy jego wyświetlenie opóźniają zasoby CSS i JavaScript. Przy INP diagnoza prowadzi zwykle do JavaScriptu, wtyczek lub skryptów zewnętrznych. Przy CLS trzeba obserwować elementy, które zmieniają pozycję podczas ładowania strony.",
        ],
      },
      {
        heading: "LCP poprawiam od największego elementu i sposobu jego dostarczenia",
        body: [
          "Problemy z LCP często wiążą się z tym, co użytkownik widzi w pierwszym ekranie strony. Ciężkie zdjęcie może opóźnić pojawienie się największego elementu, podobnie jak wolny serwer, blokujące zasoby CSS lub JavaScript oraz fonty.",
          "Dlatego przy słabym LCP nie zaczynam od przypadkowych zmian. Najpierw ustalam, który element jest mierzony jako największy i co opóźnia jego wyświetlenie. Jeśli jest nim obraz, sprawdzam jego format i sposób przygotowania. WebP lub AVIF mogą być częścią optymalizacji obrazów, także w WordPressie. Jeśli przyczyną jest serwer, sama zmiana grafiki nie rozwiąże problemu.",
          "Dobrym przykładem jest moja własna strona marcinsiwonia.pl działająca na Next.js 16. We wrześniu 2026 roku LCP na telefonie wynosił 4,7 s. Przyczyną była plansza intro renderowana na serwerze. Po usunięciu tego problemu LCP spadł do 2,0 s.",
          "Ten przypadek pokazuje, dlaczego najpierw trzeba znaleźć rzeczywistą przyczynę. Sama informacja o słabym LCP nie mówi jeszcze, czy trzeba zmniejszyć obraz, zmienić sposób renderowania elementu, przyspieszyć serwer czy ograniczyć zasoby blokujące wyświetlanie. Wynik jest początkiem diagnozy, a nie gotową receptą. Jeżeli korzystasz z WordPressa, szerzej opisuję ten obszar na stronie [przyspieszanie stron WordPress](/uslugi/przyspieszanie-stron-wordpress).",
        ],
      },
      {
        heading: "INP i CLS wymagają spojrzenia na JavaScript oraz stabilność układu",
        body: [
          "Przy słabym INP trzeba przyjrzeć się temu, co dzieje się w przeglądarce w chwili interakcji. Typowe przyczyny to duża ilość JavaScriptu, wtyczki, skrypty zewnętrzne oraz długie zadania. Każdy z tych elementów może sprawić, że po działaniu użytkownika strona potrzebuje więcej czasu, aby pokazać kolejną zmianę interfejsu.",
          "W WordPressie szczególnie istotna jest liczba i ciężar używanych dodatków. Ograniczenie wtyczek i rozbudowanych kreatorów to jeden ze sposobów zmniejszenia obciążenia strony, podobnie jak lekki motyw w miejsce rozwiązania dostarczającego dużo zbędnych zasobów. Nie chodzi jednak o mechaniczne usuwanie każdej wtyczki. Najpierw trzeba znaleźć elementy, które rzeczywiście dokładają JavaScript lub wydłużają pracę przeglądarki.",
          "CLS wymaga innego spojrzenia. Tutaj problemem nie jest czas oczekiwania na reakcję, ale przesuwanie się elementów. Typowe źródła to obrazy bez określonych wymiarów, reklamy i banery wstawiane nad istniejącą treścią oraz fonty podmieniane już po rozpoczęciu wyświetlania strony.",
          "Jeżeli przeglądarka zna wcześniej miejsce potrzebne na obraz, nie musi przesuwać sąsiedniej treści po jego załadowaniu. Podobna zasada dotyczy innych dynamicznie pojawiających się elementów. Przy fontach problem pojawia się wtedy, gdy po załadowaniu właściwego kroju zmienia się rozmiar lub układ tekstu, dlatego przy diagnozie CLS patrzę również na sposób ładowania typografii.",
        ],
      },
      {
        heading: "Na WordPressie najpierw usuwam przyczynę, a nie maskuję wynik",
        body: [
          "WordPress może osiągać dobre wyniki Core Web Vitals, ale droga do nich zależy od tego, co faktycznie spowalnia lub destabilizuje konkretną stronę. Typowe obszary pracy to cache, optymalizacja obrazów do WebP lub AVIF, ograniczenie wtyczek i kreatorów oraz lekki motyw.",
          "Cache pomaga ograniczyć pracę potrzebną do dostarczenia strony, ale nie naprawi każdego rodzaju problemu. Jeśli LCP pogarsza ciężki obraz, trzeba zająć się obrazem. Jeżeli INP cierpi przez JavaScript z wielu dodatków, sam cache nie usunie pracy wykonywanej w przeglądarce. Gdy CLS wywołuje obraz bez wymiarów albo element wstawiany nad treścią, potrzebna jest poprawa układu.",
          "Po zmianach stronę trzeba zmierzyć ponownie. Test laboratoryjny pomaga sprawdzić efekt konkretnej poprawki, a dane terenowe pokazują zachowanie witryny u rzeczywistych użytkowników. Dzięki temu można odróżnić zmianę, która poprawiła pojedynczy test, od zmiany widocznej podczas normalnego korzystania z serwisu.",
          "Core Web Vitals są częścią sygnałów page experience, ale nie zastępują trafnej treści. Google podkreśla, że odpowiednia treść pozostaje ważniejsza, więc dobre wyniki techniczne są elementem jakości strony, a nie mechanizmem gwarantującym pozycję. Jeśli interesuje Cię wpływ sposobu renderowania strony na wyszukiwarkę, opisałem ten temat we wpisie [Next.js a SEO](/blog/next-js-a-seo).",
        ],
      },
    ],
    faq: [
      { q: "Jakie są obecne progi Core Web Vitals?", a: "Dobry LCP wynosi do 2,5 s, dobry INP do 200 ms, a dobry CLS do 0,1. Za słabe uznawane są LCP powyżej 4 s, INP powyżej 500 ms i CLS powyżej 0,25. Progi odnoszą się do 75. percentyla wizyt i są oceniane osobno dla telefonów oraz komputerów." },
      { q: "Co mierzy INP i czym różni się od FID?", a: "INP mierzy reakcję strony na interakcje użytkownika. Zastąpił FID jako Core Web Vital 12 marca 2024 roku, dlatego to na INP patrzy się obecnie przy ocenie responsywności w ramach Core Web Vitals." },
      { q: "Jak sprawdzić Core Web Vitals mojej strony?", a: "Dane rzeczywistych użytkowników znajdziesz w CrUX i raporcie Core Web Vitals w Search Console. Lighthouse oraz laboratoryjna część PageSpeed Insights służą do pomiaru w kontrolowanych warunkach i pomagają diagnozować konkretne problemy." },
      { q: "Jak poprawić Core Web Vitals na WordPressie?", a: "Zależnie od przyczyny pomagają cache, optymalizacja obrazów do WebP lub AVIF, ograniczenie wtyczek i rozbudowanych kreatorów oraz lekki motyw. Najpierw sprawdź jednak, czy problem dotyczy LCP, INP czy CLS, bo każda z tych metryk ma inne typowe przyczyny." },
      { q: "Czy dobre Core Web Vitals wystarczą do wysokiej pozycji w Google?", a: "Core Web Vitals są częścią sygnałów page experience, ale Google podkreśla, że trafna treść jest ważniejsza. Dobry wynik techniczny nie jest gwarancją pozycji i nie zastępuje treści odpowiadającej na potrzeby użytkownika." },
    ],
  },
];

/* === Posts pod frazy informacyjne i porównawcze === */
posts.push(
  {
    slug: "next-js-co-to-jest",
    title: "Next.js — co to jest i kiedy go używać",
    excerpt:
      "Next.js to framework React od Vercel do produkcyjnych aplikacji webowych. Server components, routing, image optimization, edge deployment. Kiedy ma sens, kiedy nie.",
    date: "2026-04-28",
    readingMinutes: 9,
    tags: ["Next.js", "podstawy", "framework"],
    keyword: "Next.js co to jest",
    metaTitle: "Next.js — co to jest i kiedy używać (przewodnik 2026)",
    metaDescription:
      "Next.js to framework React od Vercel: SSR, SSG, ISR, edge functions, image optimization. Kiedy używać, kiedy nie, ile kosztuje wdrożenie. Praktyczny przewodnik 2026.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "next-js-software-house", "tworzenie-stron-www"],
    body: [],
    lead:
      "Next.js to framework do React stworzony przez Vercel w 2016 roku, dziś w wersji 16. Renderuje strony na serwerze (SSR, SSG, ISR), dostarcza obrazki i fonty zoptymalizowane, daje routing i edge functions out of the box. Standard branżowy 2026 dla każdej strony publicznej która ma się szybko ładować i dobrze indeksować.",
    sections: [
      {
        heading: "Czym jest Next.js technicznie",
        body: [
          "Next.js to nadbudowa nad React. React sam z siebie to biblioteka komponentów UI bez routingu, bez SSR, bez optymalizacji. Next.js dodaje wszystko czego brakuje żeby zbudować pełnowartościową stronę produkcyjną: routing oparty o strukturę plików, server-side rendering, statyczną generację, optymalizację obrazów i fontów, edge functions, API routes, middleware.",
          "App Router (od wersji 13) to obecny standard. Każdy folder w `app/` to route. Plik `page.tsx` renderuje stronę, `layout.tsx` wspólny szablon, `loading.tsx` stan ładowania, `error.tsx` boundary błędów. Routing nested (zagnieżdżone layouty), parallel routes, intercepting routes, rzeczy których React Router nie ma.",
          "React Server Components (RSC) to flagowa funkcja. Komponenty domyślnie renderują się na serwerze, NIE wysyłają JS do klienta, fetchują dane bezpośrednio (np. `await db.query()` w komponencie). Klient dostaje gotowy HTML i tylko niezbędny JavaScript do interaktywności. Bundle size spada o 30-60% vs klasyczny React.",
          "Stack 2026 dla stron Next.js: Next.js 16 + TypeScript + Tailwind 4 + headless CMS (Sanity / Contentful / Payload) + Vercel hosting. Dla aplikacji dorzucasz Postgres + Prisma + auth (Clerk lub NextAuth) + Stripe / Przelewy24.",
        ],
      },
      {
        heading: "4 strategie renderowania (i kiedy której używać)",
        body: [
          "**SSG (Static Site Generation)**: strona renderowana raz przy build, deploy jako statyczny HTML na CDN. Najszybsza możliwa strona (LCP poniżej 1s). Dla blogów, dokumentacji, marketing pages, portfolio. Default w Next.js App Router gdy nie używasz dynamicznych funkcji.",
          "**ISR (Incremental Static Regeneration)**: strona statyczna na CDN, ale regeneruje się on-demand po update content (webhook z CMS). Łączy szybkość SSG z świeżością dynamicznych danych. Dla e-commerce z często zmieniającymi się cenami, blogów z dużym wolumenem postów.",
          "**SSR (Server-Side Rendering)**: strona renderowana na serwerze per request. Każdy user dostaje świeży HTML. Dla dashboardów z user-specific data, A/B testing, geo-targeting, real-time data.",
          "**CSR (Client-Side Rendering)**: komponent z `'use client'`, pełny React po stronie przeglądarki. Dla heavy interactivity: edytory, gry, chats. W Next.js to wyjątek, nie reguła.",
          "Wybór per route nie per projekt. Marketing pages SSG, dashboard SSR, listing produktów ISR, edytor CSR. Wszystko w jednej aplikacji, automatycznie. Vercel detekuje strategię z kodu i optymalizuje deployment.",
        ],
      },
      {
        heading: "Kiedy Next.js jest odpowiedni",
        body: [
          "Strona marketingowa firmy lub usług: pełen SEO, OG images, schema.org, sub-1s ładowanie. Standardowy use case.",
          "Blog albo magazyn: content w MDX lub headless CMS, statyczna generacja, ISR przy publikacji nowego posta. Świetny SEO out of the box.",
          "E-commerce małej-średniej skali: katalog statyczny, koszyk client-side, checkout SSR, integracja Stripe / Przelewy24. Dla większych sklepów (10k+ produktów) lepiej dedykowane platformy (Shopify, Centra).",
          "Aplikacja SaaS lub B2B narzędzie: dashboard po logowaniu, panel klienta, integracje API. Server actions zamiast osobnego backendu, edge functions dla geo-distributed users.",
          "Dokumentacja techniczna: MDX + automatyczna generacja sidebar, sub-1s search, dark mode.",
        ],
      },
      {
        heading: "Kiedy Next.js NIE ma sensu",
        body: [
          "Mała wewnętrzna aplikacja firmowa za logowaniem, brak wymogu SEO, wystarczy Vite + React. Mniej setupu, prostszy deployment, brak narzutu SSR.",
          "Real-time gry przeglądarkowe: Phaser, PixiJS, Three.js standalone. Next.js renderowanie jest zbędne, gra to canvas + WebGL.",
          "Statyczny one-pager bez dynamiki: HTML + CSS + jeden plik JS. Next.js to overkill dla landing page'a na 5 sekcji.",
          "Strony z bardzo dużą bazą treści (100k+ stron): czas build w Next.js przy SSG urośnie do 30+ minut. Lepiej Hugo (Go-based, build w sekundach) lub Astro z partial hydration.",
          "Klient KONIECZNIE chce edytować wszystko w Gutenbergu z muscle memory 5 lat, wtedy WordPress ze starannie zrobionym themem custom. Headless WordPress + Next.js frontend to alternatywa łącząca oba światy.",
        ],
      },
      {
        heading: "Ile kosztuje strona na Next.js w 2026",
        body: [
          "Strona wizytówka (5-10 podstron): 8-15 tys. zł netto. Czas: 4-6 tygodni. Stack Next.js + Tailwind + treści w MDX (bez CMS) + Vercel free.",
          "Strona firmowa z CMS i blogiem (15-50 podstron): 15-30 tys. Czas: 6-10 tygodni. Stack + Sanity Studio + Vercel.",
          "Aplikacja webowa (konfigurator, panel klienta, integracje): 30-80 tys. Czas: 8-16 tygodni. Stack + Postgres + Prisma + auth + Stripe.",
          "Aplikacja SaaS multi-tenant: 80 tys. zł wzwyż. Czas: 4-9 miesięcy.",
          "Dla pełnych widełek z breakdownem na poszczególne komponenty zobacz [ile kosztuje strona na Next.js: przewodnik](/blog/ile-kosztuje-strona-na-next-js). Dla porównania z WordPress: [Next.js vs WordPress: koszty wdrożenia i utrzymania](/blog/wordpress-vs-next-js-koszt).",
        ],
      },
      {
        heading: "Konkurencja: Astro, SvelteKit, Remix",
        body: [
          "**Astro**: content-first framework. Multi-framework support (React, Vue, Svelte w jednym projekcie), zero JS by default, partial hydration (\"islands\"). Świetny dla blogów, dokumentacji, marketing pages bez aplikacyjnej dynamiki. Słabszy ekosystem niż Next.js.",
          "**SvelteKit**: Svelte-based, mniejszy bundle niż React, lżejszy runtime. Świetny developer experience, ale mniejsza społeczność, mniej gotowych komponentów, trudniej znaleźć developera.",
          "**Remix**: od twórców React Router (przejęty przez Shopify w 2022). Filozofia full-stack web standards (loaders, actions zamiast custom API). Świetny ale Next.js wygrał market share, dla większości projektów Next.js to bezpieczniejszy wybór.",
          "**Nuxt (Vue)**: odpowiednik Next.js w świecie Vue. Jeśli zespół zna Vue, jest sensowny. Jeśli pracujesz na rynku React (jak większość PL), Next.js standardem.",
          "Wybór 2026: Next.js dla 80% projektów (full app + ekosystem), Astro dla content-heavy bez aplikacyjnej dynamiki, reszta, sytuacyjnie.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy Next.js to to samo co React?",
        a: "Nie. React to biblioteka komponentów UI. Next.js to framework który dodaje do React routing, SSR, image optimization, edge functions. Sam React (z Vite) wystarcza dla wewnętrznych dashboardów; Next.js dla publicznych stron i aplikacji.",
      },
      {
        q: "Czy Next.js działa na hostingu typu nazwa.pl czy home.pl?",
        a: "Tak, ale nie polecam. Vercel jest zaprojektowany pod Next.js i daje out-of-the-box edge deployment, image optimization, automatic SSL. Polski hosting tylko gdy klient ma legalne wymogi data residency.",
      },
      {
        q: "Ile czasu zajmuje wdrożenie strony Next.js?",
        a: "Strona wizytówka 4-6 tygodni, strona firmowa z CMS 6-10 tygodni, aplikacja webowa 8-16 tygodni. Termin liczony od akceptacji designu w Figmie.",
      },
      {
        q: "Czy Next.js jest dobry pod SEO?",
        a: "Lepszy niż React SPA. Server-side rendering daje gotowy HTML dla Google bot, indeksacja w godziny zamiast tygodni. Core Web Vitals out of the box w zielonym (LCP poniżej 1.5s typowo).",
      },
      {
        q: "Czy klient będzie mógł sam edytować treści?",
        a: "Tak, jeśli wybierzemy headless CMS (Sanity, Contentful). Klient widzi panel 1:1 z designem, edytuje teksty i obrazki w real-time. Bez CMS treści są w kodzie i każda zmiana wymaga 5-15 minut roboty po stronie developera.",
      },
      {
        q: "Czy Next.js zastąpi mi backend?",
        a: "Częściowo. Server actions i API routes obsługują formularze, integracje, prostą logikę biznesową. Dla bardziej złożonych systemów (microservices, message queues) potrzebujesz osobnego backendu, Next.js wtedy jako frontend + BFF (Backend For Frontend).",
      },
    ],
  },
  {
    slug: "ile-kosztuje-strona-na-next-js",
    title: "Ile kosztuje strona na Next.js dla firmy?",
    excerpt:
      "Publiczne cenniki wykonawców pokazują, że strona na Next.js może kosztować kilka tysięcy złotych, a rozbudowany projekt znacznie więcej. Wyjaśniam, co naprawdę zmienia wycenę i jakie koszty pojawiają się po wdrożeniu.",
    date: "2026-04-22",
    updatedAt: "2026-09-26",
    readingMinutes: 8,
    tags: ["Next.js", "ceny", "wycena"],
    keyword: "ile kosztuje strona Next.js",
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    hero: { kind: "nextjs" },
    metaTitle: "Ile kosztuje strona na Next.js dla firmy?",
    metaDescription:
      "Ile kosztuje strona na Next.js? W publicznych cennikach przykłady zaczynają się od około 3000 zł, a rozbudowane projekty od 25 000 zł netto.",
    lead:
      "W publicznych cennikach innych wykonawców projekty Next.js zaczynają się od około 3000 zł, a bardziej rozbudowane warianty od 9000 i 25 000 zł netto, przy czym sama technologia nie wystarcza do rzetelnej wyceny. Największe znaczenie ma to, czy potrzebujesz strony informacyjnej, CMS, integracji, logowania, bazy danych i projektu graficznego na zamówienie.",
    body: ["W publicznych cennikach innych wykonawców projekty Next.js zaczynają się od około 3000 zł, a bardziej rozbudowane warianty od 9000 i 25 000 zł netto, przy czym sama technologia nie wystarcza do rzetelnej wyceny. Największe znaczenie ma to, czy potrzebujesz strony informacyjnej, CMS, integracji, logowania, bazy danych i projektu graficznego na zamówienie."],
    sections: [
      {
        heading: "Publiczne cenniki pokazują szeroki rozrzut cen",
        body: [
          "Jeśli szukasz jednej liczby, rynek szybko ją rozmywa. Prościński, freelancer pracujący z Next.js, publikuje trzy poziomy cenowe: od 3000 zł netto, od 9000 zł netto i od 25 000 zł netto. Prograffing opisuje cenę strony w Next.js jako około 3 tysięcy złotych. To przykłady z cenników innych wykonawców, a nie mój cennik.",
          "Warto zestawić te dane z szerszym rynkiem stron internetowych, bo właściciel firmy zwykle nie kupuje frameworka. Kupuje stronę, która ma prezentować ofertę, zbierać zapytania, obsługiwać treści albo realizować konkretny proces. W publicznych cennikach Afterweb z Wrocławia pokazuje pakiety za 1990, 2980 i 3970 zł. AW Projekt Art z Wrocławia podaje zakres od 2500 do 15 000 zł. DesignSolutions zaczyna od 3000, 5000 i 8000 zł netto, a Ansite z Wrocławia od 2900, 3900 i 8900 zł netto. Promo-Peak pokazuje stronę dla małej firmy od 3499 i 4499 zł netto. Webikom ma wariant od 599 zł, natomiast WeNet oferuje stronę w abonamencie od 219 zł miesięcznie.",
          "Te liczby nie tworzą jednego cennika rynkowego, bo dotyczą różnych zakresów i modeli współpracy. Pokazują jednak coś ważnego: pytanie o koszt strony bez opisania zakresu jest podobne do pytania o cenę lokalu bez podania metrażu, standardu i lokalizacji. Next.js jest częścią rozwiązania technicznego, ale o budżecie decyduje przede wszystkim to, co strona ma robić.",
          "Przy porównywaniu ofert sprawdzaj więc nie tylko kwotę na początku wiersza. Nazwa pakietu może ukrywać zupełnie inny zakres. Jedna oferta może dotyczyć wyłącznie wdrożenia gotowego układu, inna obejmować przygotowanie projektu graficznego, a jeszcze inna zakładać funkcje, które przesuwają stronę w stronę aplikacji. Samo zestawienie cen bez zakresu jest użyteczne tylko jako orientacja.",
          "Dotyczy to również modelu rozliczenia. WeNet pokazuje przykład abonamentu miesięcznego, podczas gdy pozostali wymienieni wykonawcy publikują ceny pakietów lub progi „od”. Te modele odpowiadają na inne pytania biznesowe. Przy abonamencie ważny jest zakres usługi w czasie, a przy jednorazowej wycenie trzeba wiedzieć, co dokładnie wchodzi do projektu i co będzie rozliczane osobno.",
          "Jeżeli porównujesz kilka ofert, zacznij od spisania tych samych wymagań dla każdego wykonawcy. Przy stronie Next.js szczególnie istotne są: sposób zarządzania treścią, indywidualny projekt graficzny, integracje, logowanie, baza danych oraz odpowiedzialność za hosting po publikacji. Dopiero wtedy ceny zaczynają opisywać podobny produkt, zamiast kilku zupełnie różnych usług schowanych pod wspólną etykietą „strona internetowa”. Szersze zestawienie cen stron firmowych znajdziesz we wpisie [ile kosztuje strona www](/blog/ile-kosztuje-strona-www-2026).",
          "Dlatego nie traktuję najniższej ani najwyższej kwoty jako odpowiedzi dla Twojego projektu. Sensowna wycena zaczyna się dopiero wtedy, gdy wiadomo, co ma znaleźć się na stronie i jakie zadania ma ona przejąć.",
        ],
        table: {"caption":"Publiczne cenniki pokazują szeroki rozrzut cen","head":["Przykład z publicznego cennika","Cena podana przez wykonawcę","Kontekst"],"rows":[["Prościński","od 3000, od 9000, od 25 000 zł netto","Next.js"],["Prograffing","około 3000 zł","Next.js"],["Afterweb","1990, 2980, 3970 zł","pakiety stron"],["AW Projekt Art","od 2500 do 15 000 zł","pakiety stron"],["DesignSolutions","od 3000, 5000, 8000 zł netto","strona, osobno domena i hosting"],["Ansite","od 2900, 3900, 8900 zł netto","pakiety stron"],["Promo-Peak","od 3499, 4499 zł netto","strona dla małej firmy"],["Webikom","od 599 zł","najtańszy wariant"],["WeNet","od 219 zł miesięcznie","model abonamentowy"]]},
      },
      {
        heading: "Największą różnicę robi zakres: strona albo aplikacja",
        body: [
          "Prosta strona firmowa i aplikacja internetowa mogą powstać w Next.js, ale są zupełnie innymi projektami. Strona informacyjna zwykle składa się z treści, nawigacji, formularza kontaktowego i elementów potrzebnych do prezentacji oferty. Aplikacja może wymagać kont użytkowników, logowania, własnej logiki biznesowej, zapisu danych, płatności albo komunikacji z zewnętrznymi usługami.",
          "To rozróżnienie ma znaczenie już na początku wyceny. Jeśli treść jest głównym elementem projektu, mogę skupić się na strukturze informacji, komponentach interfejsu i sposobie publikacji. Jeśli użytkownik ma po zalogowaniu zobaczyć swoje dane, wykonać operację albo przejść przez wieloetapowy proces, dochodzi warstwa aplikacyjna. Trzeba zaprojektować zachowanie systemu, przepływ danych, obsługę błędów i stany dostępne dla różnych użytkowników.",
          "Dlatego dwie strony wyglądające podobnie na ekranie mogą mieć bardzo różny koszt wykonania. Jedna może być zestawem publicznych podstron, druga tylko na powierzchni wyglądać jak strona, a pod spodem działać jak narzędzie dla klientów lub pracowników.",
          "W Next.js łatwo połączyć część informacyjną z funkcjami aplikacji, ale sama możliwość techniczna nie oznacza, że trzeba wdrażać wszystko od razu. Przy wycenie rozdzielam funkcje potrzebne na start od tych, które są tylko pomysłem na późniejszą rozbudowę. Dzięki temu budżet odnosi się do konkretnego zakresu, a nie do luźnej listy możliwości.",
        ],
      },
      {
        heading: "CMS, projekt graficzny i treści mogą zmienić wycenę",
        body: [
          "Kolejne pytanie brzmi: kto ma później zmieniać treści? Jeśli chcesz samodzielnie publikować artykuły, edytować ofertę, dodawać realizacje albo zarządzać innymi powtarzalnymi typami treści, potrzebujesz systemu CMS lub innego wygodnego panelu edycji. To oznacza dodatkową konfigurację modelu treści, pól, uprawnień i sposobu pobierania danych przez stronę.",
          "Jeżeli treści zmieniają się rzadko i może je aktualizować programista, CMS nie zawsze jest konieczny. Mniejsza liczba elementów administracyjnych upraszcza projekt. Nie jest to jednak automatycznie lepsza decyzja. Gdy firma regularnie rozwija ofertę lub blog, brak panelu może po prostu przenieść koszt z wdrożenia na późniejsze drobne zlecenia.",
          "Podobnie działa projekt graficzny. Wdrożenie na podstawie gotowego, spójnego projektu to inne zadanie niż stworzenie całej warstwy wizualnej od początku. Jeśli marka ma już logo, typografię, kolory, zdjęcia i kierunek wizualny, część decyzji jest podjęta. Jeśli trzeba dopiero zbudować system komponentów i zachowanie interfejsu na różnych ekranach, zakres rośnie.",
          "Osobnym tematem jest migracja z istniejącej strony. Jeśli nowy serwis ma zastąpić obecny, zakres nie kończy się na odtworzeniu wyglądu. Trzeba ustalić, które treści przechodzą do nowego rozwiązania, jak zostaną odwzorowane w CMS oraz co stanie się ze starymi adresami. W dotychczasowej strukturze mogą istnieć podstrony, które mają wartość dla użytkowników i wyszukiwarki, dlatego zmiana technologii nie powinna automatycznie oznaczać wyrzucenia całej architektury informacji.",
          "Migracja może być prosta, gdy materiałów jest niewiele i od początku wiadomo, co zostaje. Staje się bardziej pracochłonna, gdy treści trzeba porządkować, przenosić między różnymi modelami danych albo mapować stare adresy na nowe. To kolejny przykład elementu, który wpływa na wycenę niezależnie od Next.js. Framework jest narzędziem wdrożenia, natomiast realna praca wynika z tego, ile informacji i zależności trzeba bezpiecznie przenieść.",
          "Treści także mają znaczenie. Gotowe materiały pozwalają od razu planować układ pod realne nagłówki, akapity i elementy oferty. Gdy teksty dopiero powstaną, projekt musi uwzględnić pracę nad strukturą informacji oraz późniejsze dopasowanie treści. Cena strony Next.js jest więc sumą decyzji o funkcjach, treści i sposobie zarządzania stroną, a nie opłatą za użycie frameworka.",
        ],
      },
      {
        heading: "Integracje, logowanie i baza danych przesuwają projekt w stronę aplikacji",
        body: [
          "Koszt rośnie szczególnie wtedy, gdy strona ma wymieniać dane z innymi systemami. Może chodzić o CRM, ERP, system fakturowy, płatności, narzędzie rezerwacyjne albo inną usługę używaną w firmie. Każda integracja wymaga poznania sposobu uwierzytelniania, formatu danych, ograniczeń zewnętrznego API oraz zachowania strony w sytuacji, gdy druga usługa nie odpowiada lub zwraca błąd.",
          "Dobrym przykładem różnicy w kosztach jest cennik Zdobywców Sieci dotyczący sklepów WooCommerce. Firma podaje od 5500 do 7500 zł za sklep, a jako dodatkowy element wycenia integrację kuriera na 500 zł. To nie jest cennik Next.js i nie należy przenosić tych kwot wprost na projekt w innym stosie technologicznym. Pokazuje jednak mechanizm wyceny: funkcja połączona z zewnętrznym systemem jest osobnym zakresem pracy, a nie drobnym dodatkiem wynikającym z samej obecności strony.",
          "Podobnie jest z logowaniem. Sam ekran z formularzem to niewielka część problemu. Trzeba ustalić, kto może założyć konto, jak odzyskuje dostęp, jakie dane widzi po zalogowaniu i co wolno mu zmieniać. Jeśli pojawiają się różne role użytkowników, dochodzą zasady dostępu. Jeśli aplikacja zapisuje dane, potrzebna jest baza oraz sposób ich walidacji i obsługi.",
          "Z tego powodu przy pierwszej rozmowie o projekcie bardziej interesuje mnie proces niż liczba widoków. Pytam, co użytkownik robi przed wejściem na stronę, co ma zrobić na niej i co dzieje się później po stronie firmy. Taki opis pozwala odróżnić zwykłą podstronę od funkcji, która wymaga integracji i logiki po stronie serwera.",
        ],
      },
      {
        heading: "Utrzymanie obejmuje hosting, aktualizacje i rozwój",
        body: [
          "Koszt nie kończy się w chwili publikacji. Strona musi działać na hostingu, a firma potrzebuje modelu utrzymania dopasowanego do sposobu korzystania z serwisu. W przypadku komercyjnej strony na Vercel właściwym punktem odniesienia jest plan Pro, ponieważ plan Hobby jest przeznaczony do użytku niekomercyjnego. Alternatywą może być własny serwer.",
          "Nie podaję tutaj kwoty za Vercel Pro, bo koszt infrastruktury trzeba sprawdzić w aktualnym cenniku wybranego dostawcy. Dla wyceny projektu ważniejsze jest ustalenie, kto posiada konto, kto odpowiada za konfigurację środowiska oraz czy strona wymaga dodatkowych usług, takich jak CMS, baza danych czy zewnętrzne API.",
          "Utrzymanie to także prace po wdrożeniu. Next.js rozwija się, podobnie jak biblioteki używane w projekcie, dlatego zależności wymagają okresowej kontroli. Jeżeli firma regularnie dodaje nowe funkcje, dochodzi rozwój produktu. Jeżeli strona ma głównie publikować treści, zakres opieki może być mniejszy.",
          "Dla porównania publiczne cenniki opieki nad WordPressem pokazują osobny rynek usług utrzymaniowych. InitSoft publikuje pakiety za 300, 650 i 1000 zł miesięcznie, a CalmSite od 299 do 899 zł miesięcznie netto. Nie oznacza to, że utrzymanie Next.js kosztuje tyle samo lub mniej. Pokazuje natomiast, że przy porównywaniu technologii trzeba patrzeć nie tylko na koszt uruchomienia strony, lecz także na model późniejszej opieki.",
        ],
      },
      {
        heading: "Next.js i WordPress porównuj przez potrzeby firmy",
        body: [
          "Jeżeli potrzebujesz głównie klasycznej strony firmowej z wygodnym panelem do publikacji treści, WordPress pozostaje jednym z możliwych kierunków. Jeśli strona ma łączyć warstwę marketingową z niestandardową logiką, integracjami lub funkcjami aplikacji, Next.js może dać większą swobodę w budowie rozwiązania. Szczegółowe kryteria opisuję we wpisie [Next.js czy WordPress](/blog/next-js-15-vs-wordpress-2026).",
          "Same publiczne ceny nie pozwalają uczciwie stwierdzić, że jedna technologia jest zawsze tańsza. Cenniki dotyczą innych wykonawców, zakresów i modeli rozliczeń. Na rynku znajdziesz bardzo tanią stronę, abonament, klasyczny projekt firmowy i rozbudowane wdrożenie aplikacyjne. Różnice w cenie mogą wynikać z zakresu znacznie bardziej niż z wyboru WordPressa albo Next.js.",
          "Dlatego przy decyzji patrzyłbym najpierw na sposób edycji treści, planowane integracje, potrzebę logowania, bazę danych i dalszy rozwój. Technologia powinna obsłużyć te potrzeby bez dokładania złożoności, której firma nie wykorzysta.",
          "Nie publikuję własnego cennika wdrożeń. Wyceniam projekt indywidualnie po rozmowie o zakresie, bo dopiero wtedy mogę oddzielić zwykłe podstrony od funkcji wymagających dodatkowej logiki, integracji lub zaplecza do zarządzania treścią. Zakres mojej pracy opisuję na stronie o [tworzeniu stron i aplikacji w Next.js](/uslugi/aplikacje-nextjs), bez sprowadzania różnych projektów do jednej ceny.",
        ],
      },
    ],
    faq: [
      { q: "Ile kosztuje najtańsza strona na Next.js?", a: "W publicznych cennikach innych wykonawców można znaleźć przykłady około 3000 zł. Prościński podaje wariant od 3000 zł netto, a Prograffing opisuje stronę Next.js jako koszt około 3 tysięcy złotych. To przykłady z rynku, nie moja oferta i nie gwarancja ceny dla konkretnego zakresu." },
      { q: "Dlaczego jedna strona Next.js kosztuje kilka tysięcy, a inna znacznie więcej?", a: "Największą różnicę robi zakres funkcji. CMS, projekt graficzny na zamówienie, integracje, logowanie i baza danych mogą zmienić prostą stronę informacyjną w projekt bliższy aplikacji internetowej. Sama nazwa Next.js nie mówi więc wystarczająco dużo o cenie." },
      { q: "Czy do strony firmowej na Next.js wystarczy darmowy Vercel Hobby?", a: "Nie dla zastosowania komercyjnego. Plan Hobby jest przeznaczony do użytku niekomercyjnego, dlatego dla strony firmowej punktem odniesienia jest Vercel Pro albo własny serwer. Do kosztów utrzymania mogą dojść też inne usługi używane przez projekt." },
      { q: "Czy Next.js jest droższy od WordPressa?", a: "Nie da się tego uczciwie rozstrzygnąć bez porównania tego samego zakresu. Publiczne cenniki pokazują bardzo różne ceny stron, a osobno także abonamenty i pakiety opieki nad WordPressem. Lepiej porównać funkcje, sposób edycji treści i późniejsze utrzymanie niż samą nazwę technologii." },
      { q: "Jak ustalić budżet na moją stronę Next.js?", a: "Najpierw określ, czy potrzebujesz wyłącznie strony informacyjnej, czy także CMS, integracji, logowania, bazy danych i projektu graficznego na zamówienie. Wyceniam projekty indywidualnie po rozmowie o tym zakresie, więc cena odnosi się do konkretnej pracy, a nie do ogólnej etykiety „strona na Next.js”." },
    ],
  },
  {
    slug: "headless-cms-co-to",
    title: "Headless CMS — co to i kiedy ma sens",
    excerpt:
      "Headless CMS: panel edycji oddzielony od frontendu, treści jako API. Sanity, Contentful, Strapi. Czemu zastępują WordPress dla nowoczesnych stron.",
    date: "2026-04-15",
    readingMinutes: 8,
    tags: ["headless CMS", "architektura"],
    keyword: "headless CMS",
    metaTitle: "Headless CMS — co to, kiedy używać, Sanity vs Strapi",
    metaDescription:
      "Headless CMS: edycja oddzielona od frontendu, treści przez API. Sanity, Contentful, Strapi. Kiedy zastępują WordPress, kiedy zostaje monolit. Decyzja 2026.",
    hero: { kind: "nextjs" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Headless CMS to system do zarządzania treścią który NIE renderuje strony. Daje tylko API (REST lub GraphQL) z treścią. Frontend jest osobną aplikacją (Next.js, Astro, etc) która tę treść konsumuje i renderuje.",
      "Tradycyjny CMS (WordPress, Joomla) jest 'monolitem': edycja + storage + rendering w jednym package. Headless rozdziela edycję od renderingu, frontend możesz wymienić bez ruszenia treści, możesz mieć kilka frontendów (web, mobile, smart TV) na tych samych danych.",
      "Najpopularniejsze headless CMS w 2026: **Sanity** (struktur danych w kodzie, real-time editing, GROQ query language), **Contentful** (enterprise, drogi, niezawodny), **Strapi** (open-source, self-hosted, Node.js), **Hygraph/GraphCMS** (GraphQL native), **Payload** (TypeScript, self-hosted).",
      "Kiedy używać headless: wieloplatformowy content (web + app), Jamstack architecture, multi-language complex (Sanity ma świetny i18n), zespół redakcyjny + zespół dev (osobne workflow), wymagania performance (CDN frontend).",
      "Kiedy WordPress wystarczy: blog osobisty, mała strona wizytówka, klient który KONIECZNIE chce edytować w Gutenbergu, brak budżetu na headless setup (Sanity setup minimum 5-10 tys. zł).",
      "Wybór praktyczny: dla małej-średniej strony PL, Sanity (free tier wystarcza, polski support, świetny dev experience). Dla dużych enterprise, Contentful. Self-hosted z budżetem zerowym, Strapi.",
      "Migracja z WordPress na headless: WordPress backend zostaje (admin + database) + warstwa GraphQL (WPGraphQL plugin) + Next.js frontend. Hybrid setup zachowuje workflow redakcji znany każdemu, dodaje wydajność Jamstack.",
    ],
    faq: [
      { q: "Czym headless CMS różni się od WordPress?", a: "WordPress monolit łączy edycję + storage + rendering. Headless rozdziela edycję od renderingu, frontend osobny (Next.js, Astro), wymienialny bez ruszenia treści. Daje multi-platform (web + app + smart TV) i lepsze performance." },
      { q: "Który headless CMS wybrać w 2026?", a: "Sanity dla 80% projektów PL (real-time, świetny DX, free tier). Contentful dla enterprise. Strapi dla self-hosted i compliance. Payload dla TypeScript + self-hosted. Pełne porównanie: [Sanity vs Strapi](/blog/sanity-cms-vs-strapi)." },
      { q: "Ile kosztuje headless CMS?", a: "Sanity free do 100k requests/mc + 3 użytkowników. Growth od 99$/mc. Contentful od 489$/mc. Strapi 0 zł (open-source) + hosting 15-50$/mc na Railway. Setup po stronie dewelopera: 5-10 tys. zł dodatkowo do projektu." },
      { q: "Czy klient sam edytuje w headless CMS?", a: "Tak. Sanity Studio i Strapi admin są intuicyjne, pola sekcji 1:1 z designem, real-time preview, mobile-friendly. Krzywa uczenia się 1-2 sesje (vs WordPress który zna każdy)." },
      { q: "Czy mogę migrować z WordPress na headless CMS?", a: "Tak. Eksport WP → import do Sanity (custom skrypt z wp-graphql + sanity-cli). Albo headless WP (WP backend zostaje + Next.js frontend) jako kompromis. Migracja typowo 4-8 tygodni." },
    ],
  },
  {
    slug: "next-js-a-seo",
    title: "Next.js a SEO: co daje stronie, a czego nie załatwi",
    excerpt:
      "Next.js daje solidne narzędzia do technicznego SEO, ale sam framework nie zapewnia szybkiej strony ani lepszych pozycji. Najważniejsze jest to, jak strona zostanie wyrenderowana, skonfigurowana i zoptymalizowana.",
    date: "2026-04-08",
    updatedAt: "2026-09-26",
    readingMinutes: 7,
    tags: ["Next.js", "SEO", "indeksacja"],
    keyword: "Next.js SEO",
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    hero: { kind: "seo" },
    metaTitle: "Next.js a SEO: możliwości i checklista konfiguracji",
    metaDescription:
      "Next.js ułatwia techniczne SEO dzięki renderowaniu, metadanym i sitemapie, ale nie gwarantuje szybkości, indeksacji ani wysokich pozycji.",
    lead:
      "Next.js a SEO to przede wszystkim kwestia dobrego renderowania, metadanych, struktury strony i wydajności, a nie automatycznej przewagi w Google. Na własnej stronie sprawdziłem, jak duża różnica może wynikać z samej optymalizacji implementacji, bez zmiany frameworka.",
    body: ["Next.js a SEO to przede wszystkim kwestia dobrego renderowania, metadanych, struktury strony i wydajności, a nie automatycznej przewagi w Google. Na własnej stronie sprawdziłem, jak duża różnica może wynikać z samej optymalizacji implementacji, bez zmiany frameworka."],
    sections: [
      {
        heading: "Next.js ułatwia SEO techniczne, ale nie wykonuje go za Ciebie",
        body: [
          "Next.js daje kilka mechanizmów, które dobrze pasują do wymagań technicznego SEO. Może renderować stronę po stronie serwera albo wygenerować ją statycznie, dzięki czemu treść nie musi zależeć wyłącznie od JavaScriptu uruchamianego w przeglądarce użytkownika. Do tego dochodzą narzędzia do zarządzania metadanymi, mapą strony, plikiem robots.txt i danymi strukturalnymi.",
          "To jednak ważne rozróżnienie: framework dostarcza możliwości, ale nie gwarantuje rezultatu. Możesz zbudować w Next.js stronę z prawidłowymi metadanymi, dobrą strukturą i małą ilością kodu po stronie przeglądarki. Możesz też zbudować stronę ciężką, wolną i źle skonfigurowaną. Sama nazwa technologii nie rozwiązuje problemu.",
          "Google potrafi renderować JavaScript. Po pobraniu strony dokument może trafić do kolejki renderowania Web Rendering Service opartego na Chromium, gdzie wykonywany jest JavaScript. Nie ma więc podstaw do twierdzenia, że zwykła aplikacja React jest dla Google z definicji niewidoczna albo że Next.js gwarantuje indeksację natychmiast po publikacji.",
          "Przewaga praktyczna polega na czymś innym. Jeśli kluczowa treść jest dostępna w HTML wygenerowanym na serwerze albo wcześniej utworzonym statycznie, nie uzależniasz jej pojawienia się od wykonania kodu w przeglądarce. To daje bardziej przewidywalną podstawę techniczną i pozwala świadomie zdecydować, które elementy muszą być interaktywne, a które mogą pozostać po stronie serwera.",
          "Dlatego przy [tworzeniu stron Next.js](/uslugi/aplikacje-nextjs) patrzę nie tylko na wybór frameworka. Sprawdzam również sposób renderowania, strukturę podstron, metadane, wydajność oraz to, czy treść faktycznie znajduje się tam, gdzie powinien ją znaleźć crawler.",
        ],
      },
      {
        heading: "Google renderuje JavaScript, więc Next.js nie jest skrótem do indeksacji",
        body: [
          "Jednym z najbardziej mylących argumentów wokół JavaScriptu i SEO jest przekonanie, że Google nie potrafi czytać stron renderowanych po stronie użytkownika. Potrafi. Dokumentacja Google opisuje proces, w którym pobrana strona może zostać przekazana do usługi renderującej opartej na Chromium, a JavaScript zostaje wykonany.",
          "Z tego powodu nie da się uczciwie sprowadzić porównania do hasła „React nie jest indeksowany, Next.js jest indeksowany”. Różnica dotyczy przede wszystkim tego, ile pracy musi zostać wykonane po pobraniu strony i w którym miejscu powstaje jej właściwa treść.",
          "W Next.js możesz przygotować treść po stronie serwera albo wygenerować ją statycznie. W takim wariancie HTML zawiera informacje potrzebne użytkownikowi i wyszukiwarce bez konieczności czekania na zbudowanie całego widoku wyłącznie przez kod po stronie przeglądarki. To mechanizm, który daje kontrolę nad architekturą, ale nadal wymaga poprawnej konfiguracji konkretnej strony.",
          "Nie oznacza to również, że sam sposób renderowania decyduje o pozycji. Trzeba tu postawić wyraźną granicę: Core Web Vitals są częścią sygnałów związanych z page experience, ale Google wskazuje, że treść i trafność mają większe znaczenie. Technicznie dobra strona nie zastępuje więc treści odpowiadającej na pytanie użytkownika.",
          "Osobnym tematem jest sposób, w jaki różne crawlery przetwarzają JavaScript. Nie rozwijam go tutaj, bo temu służy osobny tekst o tym, jak działa [SSR czy CSR pod SEO](/blog/ssr-vs-csr-seo). W tym wpisie wystarczy jedna praktyczna zasada: jeśli ważna treść może być dostarczona w HTML bez uzależniania jej od wykonania JavaScriptu, korzystaj z tej możliwości.",
        ],
      },
      {
        heading: "Metadata API, mapa strony i dane strukturalne porządkują warstwę techniczną",
        body: [
          "Next.js ma wbudowane mechanizmy, które pozwalają utrzymać techniczne elementy SEO blisko kodu odpowiedzialnego za daną podstronę. Metadata API umożliwia definiowanie metadanych dla strony, a pliki sitemap.ts i robots.ts pozwalają generować mapę witryny oraz instrukcje dla crawlerów.",
          "W praktyce oznacza to, że tytuł, opis, adres kanoniczny czy informacje wykorzystywane przy udostępnianiu podstrony mogą wynikać z jej danych i struktury aplikacji. Gdy treść pochodzi z systemu zarządzania treścią, metadane również mogą zostać przygotowane na podstawie tych samych danych zamiast być wpisywane ręcznie w wielu miejscach.",
          "Podobnie działa mapa strony. sitemap.ts może powstawać na podstawie listy dostępnych podstron i treści. Nie jest to automatycznie gwarancja poprawnej indeksacji, tylko uporządkowany sposób dostarczenia informacji o adresach, które chcesz udostępnić wyszukiwarce.",
          "robots.ts pełni inną rolę. Pozwala opisać zasady dostępu crawlerów i wskazać mapę strony. Sama obecność tego pliku nie poprawia pozycji. Jego wartość polega na tym, że konfiguracja jest jawna, wersjonowana razem z aplikacją i może odpowiadać faktycznej strukturze serwisu.",
          "Next.js pozwala też umieszczać dane strukturalne JSON-LD w komponentach. Możesz dzięki temu powiązać dane strukturalne z konkretną podstroną i jej treścią. Ważniejsze od samego dodania znacznika jest jednak to, żeby opis odpowiadał rzeczywistej zawartości strony.",
        ],
      },
      {
        heading: "Core Web Vitals zależą od implementacji, nie od logo frameworka",
        body: [
          "Wydajność często pojawia się jako argument za Next.js, ale również tutaj potrzebne jest zastrzeżenie. Next.js może pomóc zbudować szybką stronę, lecz nie gwarantuje dobrego wyniku Core Web Vitals.",
          "Google uznaje za dobry wynik na poziomie 75. percentyla LCP poniżej 2,5 s, INP poniżej 200 ms oraz CLS poniżej 0,1. Wskaźniki te opisują odpowiednio szybkość pojawienia się głównej treści, reakcję strony na interakcje oraz stabilność układu. Są częścią sygnałów page experience, ale nie zastępują trafnej i wartościowej treści.",
          "Dobrym przykładem jest moja własna strona marcinsiwonia.pl zbudowana na Next.js 16. We wrześniu 2026 przed optymalizacją LCP na telefonie wynosił 4,7 s. Po zmianach spadł do 2,0 s. Jednocześnie waga podstrony /projekty zmniejszyła się z około 27 MB do około 240 KB.",
          "Najważniejszy jest jednak powód problemu. Wolne LCP nie wynikało z tego, że Next.js jest wolny. Przyczyną była plansza intro renderowana na serwerze. Framework nie uchronił strony przed decyzją implementacyjną, która pogorszyła wynik.",
          "Dlatego nie traktuję wyniku wydajności jako właściwości frameworka. Mierzę konkretną stronę, znajduję element powodujący problem i dopiero wtedy zmieniam implementację. Ten sam stos technologiczny może dać zupełnie inne rezultaty zależnie od tego, jak został wykorzystany.",
        ],
      },
      {
        heading: "Checklista konfiguracji Next.js pod SEO",
        body: [
          "Dobra konfiguracja zaczyna się od podstaw, które da się utrzymać razem z kodem aplikacji. Nie chodzi o zestaw trików, tylko o sprawdzenie, czy wszystkie ważne elementy techniczne mają swoje miejsce i wynikają z rzeczywistej struktury serwisu. Przy stronie opartej na Next.js sprawdzam przede wszystkim:",
          "• Metadane w layoucie i na podstronach: podstawowa konfiguracja plus metadane właściwe dla konkretnego adresu, przy dynamicznych podstronach generowane z ich danych.",
          "• Mapę strony w sitemap.ts, która wynika z rzeczywiście dostępnych stron, a nie jest osobnym, ręcznie utrzymywanym plikiem.",
          "• Reguły w robots.ts: które crawlery mają dostęp do których części strony i czy wskazana jest właściwa mapa witryny.",
          "• Adres kanoniczny: każda podstrona jednoznacznie wskazuje adres, który ma reprezentować daną treść.",
          "• Metadane do udostępniania: tytuł, opis i obraz podglądu dla konkretnej strony, a nie jeden zestaw kopiowany w całym serwisie.",
          "• Dane strukturalne JSON-LD tylko tam, gdzie odpowiadają rzeczywistemu typowi i zawartości strony.",
          "• Obrazy: mechanizmy Next.js do obsługi obrazów plus kontrola ich rzeczywistej wagi i wpływu na główną treść widoczną podczas ładowania.",
          "• Fonty ładowane tak, żeby nie powodowały przesunięć układu.",
          "• Linkowanie wewnętrzne wynikające z treści, bez osobnych podstron, do których nic nie prowadzi.",
          "• Pomiar: dane rzeczywistych użytkowników, Core Web Vitals i Search Console do obserwowania stanu strony w Google.",
          "Taka checklista nie gwarantuje pozycji. Jej zadaniem jest usunąć typowe techniczne zaniedbania i zapewnić, że wyszukiwarka ma dostęp do treści, metadanych i struktury serwisu zgodnie z tym, co rzeczywiście znajduje się na stronie. Do pomiarów wracam po każdej większej zmianie, bo przykład marcinsiwonia.pl pokazał, że problem z wydajnością może pojawić się w miejscu, którego sam wybór Next.js nie rozwiązuje.",
        ],
      },
      {
        heading: "Next.js pomaga kontrolować SEO, ale nie zastępuje treści i optymalizacji",
        body: [
          "Największą zaletą Next.js w tym kontekście nie jest automatyczny wzrost ruchu ani obietnica szybszej indeksacji. Jest nią możliwość świadomego zdecydowania, jak powstaje HTML, jakie metadane otrzymuje każda podstrona, jak tworzona jest mapa witryny i gdzie znajdują się dane strukturalne.",
          "To istotne również poza Google. Badanie Vercel i MERJ z grudnia 2024 wskazało, że główne crawlery AI, w tym GPTBot, ClaudeBot i PerplexityBot, nie wykonywały JavaScriptu. Jeżeli zależy Ci na tym, aby podstawowa treść była dostępna także dla takich systemów, renderowanie jej bez uzależniania od JavaScriptu po stronie przeglądarki ma praktyczne znaczenie.",
          "Nie oznacza to, że każdą stronę trzeba renderować w ten sam sposób. Next.js daje kilka możliwości właśnie po to, aby architekturę dopasować do treści i sposobu działania serwisu. Kluczowe jest to, co użytkownik i crawler faktycznie otrzymują, a nie nazwa zastosowanego mechanizmu.",
          "Jeśli więc oceniasz Next.js pod kątem SEO, patrz na niego jako na zestaw możliwości technicznych. Renderowanie po stronie serwera lub generowanie statyczne, Metadata API, sitemap.ts, robots.ts i JSON-LD pomagają zbudować uporządkowaną podstawę. O tym, czy ta podstawa faktycznie działa, decydują konfiguracja, treść, wydajność i pomiar rzeczywistej strony.",
        ],
      },
    ],
    faq: [
      { q: "Czy Google indeksuje strony napisane w React?", a: "Tak. Google potrafi renderować JavaScript za pomocą Web Rendering Service opartego na Chromium. Next.js pozwala jednak dostarczyć treść jako HTML wygenerowany po stronie serwera albo statycznie, więc nie musi ona zależeć wyłącznie od wykonania JavaScriptu w przeglądarce." },
      { q: "Czy Next.js automatycznie poprawi pozycję mojej strony w Google?", a: "Nie. Next.js daje narzędzia przydatne w technicznym SEO, ale sam framework nie gwarantuje wyższych pozycji. Google wskazuje, że Core Web Vitals są częścią sygnałów page experience, a treść i trafność pozostają ważniejsze." },
      { q: "Czy strona na Next.js będzie automatycznie szybka?", a: "Nie. Na marcinsiwonia.pl LCP na telefonie wynosił 4,7 s mimo użycia Next.js 16, bo problem powodowała plansza intro renderowana na serwerze. Po optymalizacji LCP spadł do 2,0 s, a waga podstrony /projekty z około 27 MB do około 240 KB." },
      { q: "Jakie elementy SEO mogę skonfigurować bezpośrednio w Next.js?", a: "Next.js udostępnia Metadata API, sitemap.ts i robots.ts, a dane strukturalne JSON-LD można umieszczać w komponentach. Pozwala to utrzymywać metadane, mapę strony, reguły dla crawlerów i dane strukturalne razem z aplikacją." },
      { q: "Czy renderowanie po stronie serwera ma znaczenie dla crawlerów AI?", a: "Tak. Badanie Vercel i MERJ z grudnia 2024 wykazało, że główne crawlery AI, w tym GPTBot, ClaudeBot i PerplexityBot, nie wykonywały JavaScriptu. Treść dostarczona w HTML z serwera jest dla nich widoczna, a treść budowana dopiero w przeglądarce może zostać przez nie pominięta." },
    ],
  },
  {
    slug: "next-js-vs-react-roznice",
    title: "Next.js vs React — co wybrać i czym się różnią",
    excerpt:
      "React to biblioteka UI. Next.js to framework wokół Reacta. Kiedy wystarczy sam React (Vite), kiedy potrzebujesz Next.js. Konkretne różnice, ceny, decyzja per typ projektu.",
    date: "2026-03-30",
    readingMinutes: 9,
    tags: ["Next.js", "React", "porównanie", "decyzje techniczne"],
    keyword: "Next.js vs React",
    metaTitle: "Next.js vs React — różnice i co wybrać (2026)",
    metaDescription:
      "Next.js vs React: nie są alternatywami. React = biblioteka UI, Next.js = framework wokół niej. Kiedy wystarczy sam React, kiedy potrzebujesz Next.js. Decyzja per projekt.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-react", "aplikacje-nextjs", "next-js-software-house"],
    body: [],
    lead:
      "React to biblioteka UI, Next.js to framework który Reacta opakowuje w routing, SSR, optymalizację. Nie są alternatywami. Pytanie brzmi: sam React (np. z Vite) czy React + Next.js? Krótka odpowiedź: dla każdej strony publicznej Next.js, dla wewnętrznych narzędzi za logowaniem sam React. Pełna decyzja niżej.",
    sections: [
      {
        heading: "Czym technicznie różnią się",
        body: [
          "**React** (od 2013, Meta), biblioteka do budowania komponentów UI. Daje JSX, hooks (useState, useEffect, useMemo), context, refs. NIE ma routingu, NIE ma SSR, NIE ma optymalizacji obrazów ani fontów. Standalone setup wymaga doboru narzędzi: bundler (Vite, Webpack), router (React Router), state manager (Zustand, Redux), HTTP client (Axios, fetch).",
          "**Next.js** (od 2016, Vercel), framework wokół Reacta. Daje wszystko czego React sam nie ma: file-based routing, SSR + SSG + ISR + CSR per route, API routes, server actions, middleware, image optimization (`next/image`), font optimization (`next/font`), dynamic OG (`next/og`), edge functions, edge middleware.",
          "**App Router** (Next.js 13+), obecny standard. React Server Components domyślnie (renderowanie na serwerze, mniej JS w bundle). Nested layouts, parallel routes, intercepting routes, streaming, Suspense boundaries.",
          "Patrząc inaczej: React to silnik samochodu, Next.js to gotowy samochód (nadwozie + koła + tablica rozdzielcza + radio). Możesz zbudować samochód wokół silnika React (z Vite + React Router + Tanstack Query + Tailwind), ale weźmiesz na siebie integrację, optymalizację, deployment.",
        ],
      },
      {
        heading: "Kiedy sam React (Vite) wystarcza",
        body: [
          "**Wewnętrzny dashboard firmowy za logowaniem**: brak SEO, brak public landing pages, użytkownik zalogowany wie gdzie idzie. Vite + React + Tanstack Query + shadcn/ui = szybki dev, brak narzutu SSR.",
          "**Narzędzie deweloperskie**: wewnętrzny CLI z UI, designer narzędzia, builder schematów. SEO niepotrzebny, performance dla 50 użytkowników nie krytyczny.",
          "**Gra przeglądarkowa**: Phaser, PixiJS, Three.js standalone w React shell. Next.js renderowanie zbędne, gra to canvas + game loop.",
          "**Prototyp / MVP do testów na 100 użytkownikach**: szybki setup Vite, deploy na Netlify static. Migracja na Next.js jak pomysł zwalidowany.",
          "**Storybook / dokumentacja komponentów**: Storybook ma własny build system, integruje się z React standalone.",
          "**Embedded widget na cudzych stronach**: Twój React komponent osadzony przez `<iframe>` lub `<script>`. Next.js routing zbędny.",
        ],
      },
      {
        heading: "Kiedy potrzebujesz Next.js",
        body: [
          "**Każda strona publiczna z wymogiem SEO**: marketing, blog, e-commerce, landing pages, dokumentacja. Server-side rendering daje gotowy HTML dla Google bot.",
          "**Aplikacja SaaS z public marketing + private dashboard**: strona główna SSG (SEO), pricing SSG, blog SSG, app/ za logowaniem SSR. Wszystko w jednym Next.js, wspólne komponenty, jedno repo.",
          "**E-commerce**: katalog produktów ISR (regeneruje przy update ceny), koszyk client-side, checkout SSR (per-user). Schema.org Product + BreadcrumbList + Review out of the box.",
          "**B2B narzędzie z public landing + auth flow + dashboard**: Next.js obsługuje cały flow: marketing → signup → onboarding → dashboard. Server actions zamiast osobnego backendu.",
          "**Aplikacja wymagająca dynamic OG images**: każda podstrona / każdy post / każda zniżka generuje własny preview na social media. `next/og` daje to z React komponentu.",
          "**Aplikacja z international audience**: edge deployment na 100+ lokalizacjach, automatic image optimization per device, multi-region database support.",
        ],
      },
      {
        heading: "Cena rynkowa: React solo vs Next.js",
        body: [
          "**React solo developer** w PL: 180-250 zł/h. Specjalizacja: frontend, komponenty, state management. Nie zna SSR, nie zna SEO, nie ogarnia deployment poza Netlify/Vercel statycznym.",
          "**Next.js full-stack developer** w PL: 220-350 zł/h. Szerszy stack: TypeScript, React, SSR/SSG, performance, SEO, edge functions, czasem backend (Postgres, Prisma), deployment na Vercel + DNS migration.",
          "Różnica 40-100 zł/h wynika z szerszego skill setu. Dla małej strony (40h roboty) to 1.5-4 tys. zł różnicy. Dla średniej (200h): 8-20 tys.",
          "Ale: Next.js dev oszczędza Twój czas na: SEO (out of the box), deployment (git push = live), maintenance (mniej narzędzi do utrzymania). Długoterminowy TCO często wyrównany lub niższy.",
          "Dostępność: w PL znacznie więcej React solo niż senior Next.js. Powód: szerszy skill set wymaga więcej lat doświadczenia. Wrocław ma kilkudziesięciu seniorów Next.js (meetupy Wrocław.tech, ReactWro), to wciąż mniej niż React solo.",
        ],
      },
      {
        heading: "Praktyczna rekomendacja 2026",
        body: [
          "**Default dla nowych projektów: Next.js**. Nawet jeśli nie potrzebujesz wszystkich features dziś, dodanie SSR/SEO później do React-Vite app jest bolesne (refactor routing, dodanie data fetching strategy, migracja deployment).",
          "**Wyjątek 1**: wewnętrzny dashboard za logowaniem bez SEO. Sam React + Vite to szybszy setup, prostsza architektura.",
          "**Wyjątek 2**: gra przeglądarkowa lub narzędzie typu CodeSandbox. Routing nie jest osią aplikacji, performance to canvas.",
          "**Wyjątek 3**: embedded widget. React standalone bundle łatwiejszy do osadzenia niż Next.js app.",
          "**Migracja React → Next.js** jest możliwa ale niebagatelna: przepisanie routingu z React Router na file-based, dodanie SSR data fetching, refactor klient-only kodu (window, document) na 'use client', migracja deploymentu. Realnie 30-60% effort vs greenfield.",
          "Dla wrocławskich firm zaczynających projekt: zacznij od Next.js + Vercel + Sanity. Stack którego używa większość software house'ów w mieście (zobacz [next-js-software-house](/uslugi/next-js-software-house)). Łatwo znaleźć następcę gdy pierwszy dev odejdzie.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy Next.js to alternatywa do React?",
        a: "Nie. Next.js JEST oparty na React. Pytanie brzmi: sam React (z Vite) czy React + Next.js? Dla większości publicznych stron, React + Next.js. Dla wewnętrznych narzędzi, sam React.",
      },
      {
        q: "Czy mogę przepisać React app na Next.js?",
        a: "Tak, ale to nie trivial. Routing z React Router → file-based, dodanie SSR data fetching, refactor window/document na 'use client', migracja deploymentu. Realnie 30-60% effort vs greenfield project.",
      },
      {
        q: "Co jest szybsze: React + Vite czy Next.js?",
        a: "Pierwszy load: Next.js (SSR/SSG = gotowy HTML, sub-1s). Subsequent navigation: porównywalne. Dev experience (HMR): Vite trochę szybszy. Production performance: Next.js wygrywa przez optymalizacje.",
      },
      {
        q: "Czy potrzebuję TypeScript w Next.js?",
        a: "Technicznie nie, ale standardem. 95% nowych projektów Next.js używa TypeScript. Łapie błędy w trakcie pisania zamiast w produkcji. Setup automatyczny przez `create-next-app`.",
      },
      {
        q: "Co z React Native? To też React?",
        a: "Tak, ale to inny target, mobile apps (iOS, Android) zamiast web. Współdzieli wzorce React (komponenty, hooks) ale ma własne API (View, Text, ScrollView zamiast div, span). Next.js to web only, React Native to mobile only.",
      },
      {
        q: "Czy mogę używać Next.js dla mobile app?",
        a: "Pośrednio: Next.js to web app, ale działa świetnie jako PWA (Progressive Web App) instalowane na telefon. Dla natywnego mobile (App Store, Google Play) potrzebujesz React Native, Expo, lub Capacitor wokół Next.js.",
      },
    ],
  },
  {
    slug: "server-side-rendering-co-to",
    title: "Server-Side Rendering (SSR) — co to i kiedy używać",
    excerpt:
      "SSR vs CSR vs SSG vs ISR: 4 strategie renderowania w Next.js. Konkretne implikacje dla SEO, performance, kosztów hostingu.",
    date: "2026-03-25",
    readingMinutes: 8,
    tags: ["SSR", "Next.js", "performance"],
    keyword: "Server-Side Rendering",
    metaTitle: "Server-Side Rendering (SSR) — co to, kiedy używać",
    metaDescription:
      "SSR vs CSR vs SSG vs ISR: 4 strategie renderowania w Next.js. Implikacje dla SEO, performance, kosztów hostingu. Wybór per route, nie per projekt.",
    hero: { kind: "performance" },
    relatedServices: ["aplikacje-nextjs", "next-js-software-house", "tworzenie-stron-www"],
    body: [
      "Server-Side Rendering (SSR): strona renderowana na serwerze per request. Każdy użytkownik dostaje świeży HTML wygenerowany w momencie wejścia. Plus: dynamic content (zalogowany user, real-time data). Minus: wolniejsze niż statyczne, wymaga origin server (koszt). Jeśli rozważasz konkretną implementację, zerknij na ofertę [tworzenia stron Next.js](/uslugi/aplikacje-nextjs), pod hero strony jest live panel pokazujący metryki Twojej przeglądarki na tej właśnie technologii.",
      "Client-Side Rendering (CSR): strona renderowana w przeglądarce. Serwer wysyła HTML+JS, JS uruchamia React, renderuje content. Plus: bogata interaktywność. Minus: pusta strona przed JS (SEO killer), wolny pierwszy paint.",
      "Static Site Generation (SSG): strona renderowana raz przy build. HTML statyczny na CDN. Plus: najszybszy LCP, najtańszy hosting (CDN), bezpieczne (brak DB query). Minus: dane się starzeją bez rebuild.",
      "Incremental Static Regeneration (ISR): hybryda SSG + SSR. Strona statyczna na CDN, ale regeneruje się on-demand po update content (webhook z CMS). Plus: szybkość statyki + świeżość dynamicznej. Minus: trochę bardziej skomplikowane.",
      "Wybór per route w Next.js (App Router):",
      "**SSG (default)** dla: marketing pages, dokumentacja, blog posts, static product catalogs.",
      "**ISR** dla: e-commerce z często zmieniającymi się cenami, blog z dużym wolumenem, sites z user-generated content (komentarze).",
      "**SSR** dla: dashboardy z user-specific data, A/B testing, geo-targeting, real-time data (giełda, sport).",
      "**CSR (Client Components)** dla: heavy interactivity (formularze, edytory), animacje WebGL, real-time chats (WebSocket).",
      "Praktyczna rada: zacznij od SSG/ISR (90% przypadków), dodawaj SSR tylko tam gdzie naprawdę potrzeba (per-user data). Nadużywanie SSR oznacza 5-10x droższy hosting i wolniejszą stronę.",
      "Vercel automatically optimizuje. App Router decyduje per route na podstawie czy używasz dynamic functions (cookies, headers, params). Sprawdź `next build` output żeby zobaczyć która strona jest λ (SSR), ○ (SSG), ◐ (ISR).",
    ],
    faq: [
      { q: "Czym SSR różni się od SSG?", a: "SSR renderuje per request (dynamic content per user). SSG renderuje raz przy build (statyczny HTML na CDN). SSR daje świeżość, SSG daje szybkość. Wybór: SSG dla treści wspólnej, SSR dla user-specific." },
      { q: "Co to ISR?", a: "Incremental Static Regeneration: hybryda SSG + SSR. Strona statyczna na CDN, regeneruje się on-demand po update content (webhook z CMS). Łączy szybkość statyki z świeżością dynamicznej." },
      { q: "Która strategia jest najszybsza?", a: "SSG (statyczny HTML na CDN, 0 ms server time, sub-1s LCP). ISR drugie miejsce (statyczna z odświeżeniem). SSR trzecie (czas server processing). CSR najwolniejsza dla pierwszego ładowania." },
      { q: "Która jest najtańsza w hostingu?", a: "SSG (statyczne pliki na CDN, Vercel free tier do 100 GB). ISR podobnie. SSR wymaga compute na serwerze (każdy request kosztuje), wyższy koszt skalowalnie." },
      { q: "Jak wybrać strategię w Next.js?", a: "Default SSG dla 90% routes (marketing, blog, dokumentacja). ISR dla often-updated (e-commerce katalog). SSR tylko dla per-user data (dashboard za logowaniem). CSR dla heavy interactivity (edytor)." },
    ],
  },
  {
    slug: "ssr-vs-csr-seo",
    title: "SSR vs CSR SEO: co wybrać dla publicznej strony",
    excerpt:
      "Google potrafi indeksować treść generowaną przez JavaScript, ale nie każdy crawler działa tak samo. Jeśli treść ma być widoczna także dla systemów AI, bezpieczniej dostarczyć ją już w HTML z serwera.",
    date: "2026-03-18",
    updatedAt: "2026-09-26",
    readingMinutes: 6,
    tags: ["SEO", "SSR", "CSR", "indeksacja"],
    keyword: "SSR vs CSR SEO",
    relatedServices: ["aplikacje-nextjs", "aplikacje-react", "tworzenie-stron-www"],
    hero: { kind: "seo" },
    metaTitle: "SSR vs CSR SEO: co wybrać dla strony",
    metaDescription:
      "SSR czy CSR pod SEO? Google renderuje JavaScript, ale crawlery AI zwykle go nie wykonują. Dla publicznej treści wybierz HTML z serwera lub SSG.",
    lead:
      "SSR vs CSR SEO: dla publicznej strony, której treść ma trafiać do Google i crawlerów AI, wybrałbym renderowanie zapewniające treść w HTML z serwera, czyli SSR lub SSG. Google potrafi wykonać JavaScript, ale główne crawlery AI opisane w badaniu Vercel i MERJ go nie wykonują.",
    body: ["SSR vs CSR SEO: dla publicznej strony, której treść ma trafiać do Google i crawlerów AI, wybrałbym renderowanie zapewniające treść w HTML z serwera, czyli SSR lub SSG. Google potrafi wykonać JavaScript, ale główne crawlery AI opisane w badaniu Vercel i MERJ go nie wykonują."],
    sections: [
      {
        heading: "Najważniejsza różnica dotyczy tego, co crawler dostaje bez JavaScriptu",
        body: [
          "Przy wyborze SSR czy CSR łatwo skupić się wyłącznie na tym, czy Google potrafi odczytać aplikację korzystającą z JavaScriptu. Potrafi. To jednak nie kończy tematu, bo publiczną stronę odwiedzają również inne crawlery, a ich możliwości nie są identyczne.",
          "W przypadku treści ważnej dla wyszukiwarki i systemów AI kluczowe pytanie brzmi więc inaczej: czy najważniejsza zawartość strony znajduje się już w HTML otrzymanym przez crawlera, czy pojawia się dopiero po wykonaniu JavaScriptu?",
          "Jeżeli treść jest dostępna w HTML z serwera, crawler może ją odczytać bez dodatkowego renderowania po swojej stronie. Taki sposób dostarczenia treści dają SSR i SSG. Jeżeli natomiast strona opiera się na CSR i istotna zawartość pojawia się dopiero po wykonaniu JavaScriptu w przeglądarce, rezultat zależy od tego, czy konkretny crawler ten JavaScript rzeczywiście uruchamia.",
          "To rozróżnienie jest ważniejsze niż proste stwierdzenie, że jedna metoda renderowania jest zawsze dobra, a druga zawsze zła. CSR nadal ma zastosowania, szczególnie tam, gdzie widoczność w wyszukiwarkach nie jest celem. Problem zaczyna się wtedy, gdy od wykonania JavaScriptu uzależniasz dostęp do treści, która ma być indeksowana albo odczytywana przez zewnętrzne systemy.",
          "W praktyce oznacza to, że przy stronie firmowej, artykule, stronie usługi lub innej publicznej treści nie można zakładać, że każdy crawler zachowa się tak samo jak współczesny Googlebot. To założenie staje się szczególnie istotne wraz z rosnącym ruchem crawlerów wykorzystywanych przez narzędzia AI.",
        ],
      },
      {
        heading: "Googlebot renderuje JavaScript, ale robi to po pobraniu strony",
        body: [
          "Google opisuje przetwarzanie stron korzystających z JavaScriptu jako proces obejmujący pobranie strony, a następnie renderowanie jej przez Web Rendering Service korzystający z Chromium. Strona wymagająca wykonania JavaScriptu może więc zostać przez Google wyrenderowana, a jej treść może trafić do indeksu.",
          "Nie oznacza to jednak, że zawartość generowana wyłącznie przez JavaScript jest dla Google równoważna z treścią dostępną od razu w HTML. Renderowanie trafia do kolejki. Jeżeli najważniejsza treść strony pojawia się dopiero po wykonaniu JavaScriptu, jej przetworzenie może nastąpić później. Dokumentacja Google wskazuje też dwie sytuacje, w których wynik może być niepełny: zablokowane zasoby oraz JavaScript, który się nie wykona.",
          "Nie ma za to podstaw, by przypisywać CSR konkretny stały czas indeksacji ani twierdzić, że SSR zawsze trafi do indeksu w określonej liczbie godzin. Udokumentowany mechanizm jest prostszy: Google potrafi renderować JavaScript, ale zawartość zależna od jego wykonania przechodzi przez dodatkowy etap przetwarzania.",
          "Dla właściciela strony konsekwencja jest praktyczna. Jeśli tekst opisujący usługę, produkt albo artykuł ma znaczenie dla widoczności organicznej, nie uzależniałbym dostępu do tej treści od poprawnego wykonania JavaScriptu przez crawlera. Dostarczenie jej w HTML z serwera usuwa ten warunek.",
          "Szczegóły dotyczące konfiguracji frameworka i elementów technicznych opisuję osobno we wpisie [Next.js a SEO](/blog/next-js-a-seo). Tutaj istotniejszy jest sam sposób, w jaki różne roboty dochodzą do treści.",
        ],
      },
      {
        heading: "Crawlery AI w większości nie wykonują JavaScriptu",
        body: [
          "Różnica staje się wyraźniejsza, gdy poza Googlebotem spojrzysz na crawlery związane z systemami AI. Badanie Vercel i MERJ z grudnia 2024 roku pokazało, że żaden z analizowanych głównych crawlerów AI, poza infrastrukturą wykorzystywaną przez Gemini, nie renderował JavaScriptu.",
          "W badaniu uwzględniono między innymi crawlery OpenAI (OAI-SearchBot, ChatGPT-User i GPTBot), ClaudeBot, crawlery Meta i ByteDance oraz PerplexityBot. ChatGPT i Claude pobierały część plików JavaScript, ale samo pobranie pliku nie oznaczało jego wykonania. Dla ChatGPT pliki JS stanowiły 11,50% zapytań, a dla Claude 23,84%. Wyjątkiem jest Gemini, który korzysta z infrastruktury Googlebota i renderuje JavaScript.",
          "Skala aktywności tych robotów pokazuje, dlaczego nie jest to już poboczny problem techniczny. W badanym miesiącu GPTBot wykonał 569 mln zapytań, a Claude 370 mln. Łącznie odpowiadało to za około 20% z 4,5 mld zapytań wykonanych przez Googlebota w sieci Vercel.",
          "Nie wynika z tego, że sama obecność treści w HTML zagwarantuje cytowanie w odpowiedzi AI. Wynika natomiast coś bardziej podstawowego: crawler, który nie wykonuje JavaScriptu, nie zobaczy treści dostępnej wyłącznie po jego wykonaniu. Jeśli zależy Ci na tym, aby publiczna treść mogła zostać odczytana również przez takie systemy, HTML dostarczony przez serwer usuwa tę przeszkodę.",
          "Dziś publiczną treść pobierają systemy działające według różnych zasad, dlatego jej dostępność warto projektować pod więcej niż jeden rodzaj crawlera, a nie wyłącznie pod indeksację w Google.",
        ],
      },
      {
        heading: "SSR i SSG dają treść w HTML, CSR zostawia ją przeglądarce",
        body: [
          "SSR i SSG łączy jedna najważniejsza właściwość: treść potrzebna do SEO i odczytu przez crawlery może znaleźć się w HTML otrzymanym z serwera. CSR przenosi renderowanie do przeglądarki i dlatego w przypadku zawartości pojawiającej się dopiero po wykonaniu JavaScriptu wymaga od crawlera dodatkowej możliwości.",
          "Dlatego przy publicznych stronach internetowych nie sprowadzałbym decyzji do stwierdzenia, że Google „radzi sobie z JavaScriptem”. Radzi sobie, ale część innych crawlerów nie wykonuje go wcale. Jeśli ta sama strona ma być dostępna zarówno dla wyszukiwarki, jak i dla systemów AI pobierających publiczny internet, wspólnym mianownikiem pozostaje gotowa treść w HTML.",
          "Nie oznacza to, że cała aplikacja musi być budowana według jednej metody. Z punktu widzenia widoczności liczy się przede wszystkim to, gdzie znajduje się treść, którą chcesz udostępnić robotom. Jeśli buduję publiczną stronę w Next.js, traktuję renderowanie serwerowe albo statyczne jako naturalny punkt wyjścia dla zawartości, która ma pracować w wyszukiwarce. Więcej o samej usłudze piszę na stronie [tworzenie stron Next.js](/uslugi/aplikacje-nextjs).",
        ],
        table: {"caption":"SSR i SSG dają treść w HTML, CSR zostawia ją przeglądarce","head":["Sposób renderowania","Treść w HTML z serwera","Google","Główne crawlery AI z badania"],"rows":[["SSR","Tak","Czyta treść bez wykonywania JavaScriptu","Czytają treść bez wykonywania JavaScriptu"],["SSG","Tak","Czyta treść bez wykonywania JavaScriptu","Czytają treść bez wykonywania JavaScriptu"],["CSR","Treść może pojawić się dopiero po wykonaniu JavaScriptu","Wykonuje JavaScript w kolejce renderowania","Nie wykonują JavaScriptu, poza Gemini korzystającym z infrastruktury Googlebota"]]},
      },
      {
        heading: "CSR ma sens tam, gdzie widoczność organiczna nie jest potrzebna",
        body: [
          "CSR nie jest błędem samym w sobie. Renderowanie po stronie przeglądarki jest rozsądnym wyborem w obszarach za logowaniem, w panelach oraz w aplikacjach, dla których SEO nie ma znaczenia. Brak treści w początkowym HTML nie tworzy tam tego samego problemu, bo nie oczekujesz, że publiczny crawler wyszukiwarki albo systemu AI będzie odczytywał i indeksował zawartość.",
          "Granica jest więc dość czytelna. Jeśli użytkownik ma wejść na stronę przez wyszukiwarkę albo treść ma być dostępna dla crawlerów, dostarcz istotną zawartość w HTML z serwera. Jeżeli natomiast tworzysz zamknięty panel dostępny po zalogowaniu, przewaga SSR lub SSG wynikająca z dostępności treści dla robotów przestaje być argumentem.",
          "To rozróżnienie pomaga uniknąć dwóch skrajności. Pierwszą jest przekonanie, że CSR automatycznie uniemożliwia indeksację w Google. Nie uniemożliwia, bo Google korzysta z Web Rendering Service. Drugą jest założenie, że skoro Google potrafi wykonać JavaScript, każda publiczna treść może bez konsekwencji zależeć wyłącznie od CSR. Badanie crawlerów AI pokazuje, że nie wszystkie roboty dysponują takim samym mechanizmem.",
        ],
      },
      {
        heading: "Core Web Vitals trzeba oceniać pomiarem, nie etykietą SSR lub CSR",
        body: [
          "Sposób renderowania nie jest zastępczym wynikiem wydajności strony. Nie ma rzetelnych podstaw, żeby przypisywać SSR i CSR stałe przedziały LCP. Zamiast zakładać wynik na podstawie architektury, lepiej odnieść się do progów Core Web Vitals podawanych przez Google. Ocena jest oparta na 75. percentylu, czyli wyniku, którego nie przekracza 75% zebranych pomiarów. Wartości uznawane za dobre to:",
          "• LCP poniżej 2,5 s: moment wyświetlenia największego elementu treści w widoku.",
          "• INP poniżej 200 ms: reakcja strony na interakcję użytkownika.",
          "• CLS poniżej 0,1: nieoczekiwane przesunięcia układu.",
          "Te wartości są użyteczne przy porównywaniu rzeczywiście działających stron, ale sam wybór SSR nie zapewni automatycznie określonego wyniku, a CSR nie musi przekroczyć któregoś z progów. Renderowanie określa przede wszystkim, czy treść jest dostępna w HTML bez wykonania JavaScriptu. Core Web Vitals mówią o doświadczeniu użytkownika mierzonym konkretnymi wskaźnikami. Jednego nie zastępuj drugim.",
          "Jeżeli więc wybierasz technologię dla publicznej strony, najpierw zadbaj o to, aby treść przeznaczona do wyszukiwarki i odczytu przez crawlery była dostępna bez wykonywania JavaScriptu po ich stronie. Wydajność oceniaj osobno, na podstawie LCP, INP i CLS.",
        ],
      },
    ],
    faq: [
      { q: "Czy Google indeksuje stronę renderowaną po stronie przeglądarki?", a: "Tak. Google może wykonać JavaScript przez Web Rendering Service korzystający z Chromium. Treść zależna od JavaScriptu przechodzi jednak przez kolejkę renderowania i może zostać przetworzona później albo niepełnie, jeśli wymagane zasoby są zablokowane lub skrypt się nie wykona." },
      { q: "Czy SSR jest lepsze od CSR dla publicznej strony?", a: "Jeśli treść ma być dostępna dla Google i crawlerów AI, SSR lub SSG pozwalają umieścić ją już w HTML z serwera. CSR ma sens tam, gdzie widoczność organiczna nie jest potrzebna, na przykład w panelach i aplikacjach za logowaniem." },
      { q: "Czy ChatGPT, Claude i Perplexity wykonują JavaScript podczas crawlowania?", a: "W badaniu Vercel i MERJ z grudnia 2024 główne analizowane crawlery AI, w tym crawlery OpenAI, Anthropic i Perplexity, nie renderowały JavaScriptu. ChatGPT i Claude pobierały część plików JS, ale ich nie wykonywały. Gemini korzysta z infrastruktury Googlebota i renderuje JavaScript." },
      { q: "Czy samo SSR poprawi moje Core Web Vitals?", a: "Nie automatycznie. Google ocenia Core Web Vitals na podstawie 75. percentyla, a progi dobrego wyniku to LCP poniżej 2,5 s, INP poniżej 200 ms oraz CLS poniżej 0,1. Wynik trzeba zmierzyć na działającej stronie, a nie zakładać na podstawie samego sposobu renderowania." },
      { q: "Kiedy wybrać CSR zamiast SSR lub SSG?", a: "CSR sprawdza się w obszarach, w których SEO nie ma znaczenia: za logowaniem, w panelach klienta i w aplikacjach. Tam treść nie musi być widoczna dla publicznych crawlerów, więc renderowanie w przeglądarce nie ogranicza widoczności." },
    ],
  },
  {
    slug: "jamstack-co-to-jest",
    title: "Jamstack — co to jest i czemu to przyszłość stron www",
    excerpt:
      "Jamstack: JavaScript + APIs + Markup. Architektura w której HTML jest pre-rendered na CDN, dynamika via API. Najszybsze strony jakie da się zrobić.",
    date: "2026-03-11",
    readingMinutes: 8,
    tags: ["Jamstack", "architektura"],
    keyword: "Jamstack co to",
    metaTitle: "Jamstack — co to, kiedy używać, stack 2026",
    metaDescription:
      "Jamstack: HTML pre-rendered na CDN, dynamika przez API. Stack 2026: Next.js + Sanity + Vercel. Kiedy ma sens, kiedy lepiej tradycyjny SSR.",
    hero: { kind: "nextjs" },
    relatedServices: ["strony-jamstack", "aplikacje-nextjs", "headless-wordpress"],
    body: [
      "Jamstack to nazwa architektury (nie technologii). Akronim: JavaScript (interaktywność po stronie klienta) + APIs (dynamika z headless backendów) + Markup (HTML pre-rendered przy build, serwowany z CDN).",
      "Idea: strona w 90% statyczna (HTML+CSS gotowe na CDN), dynamika przez API (formularze, płatności, personalizacja). To odwrócenie tradycyjnego modelu (WordPress: wszystko dynamic per request).",
      "Główni gracze stack 2026: Frontend, Next.js, Astro, SvelteKit. CMS headless, Sanity, Contentful, Strapi. Hosting CDN, Vercel, Netlify, Cloudflare Pages. Edge functions, Vercel Edge, Cloudflare Workers.",
      "Korzyści Jamstack: prędkość (CDN globalny, sub-1s LCP), bezpieczeństwo (brak DB query per request = mniejszy attack surface), skalowalność (CDN obsługuje milion requestów bez ruszenia origin), tańszy hosting (Vercel free do 100GB), lepsze SEO.",
      "Kiedy Jamstack ma sens: marketing sites, blogi, dokumentacja, e-commerce katalogowy, landing pages, portfolio, agencyjne strony, wszystko gdzie content zmienia się rzadziej niż user wchodzi.",
      "Kiedy NIE Jamstack: real-time chat, social network feed, narzędzia z hot data per user (slack, gmail), dashboardy SaaS z dynamicznymi metrykami. Tu lepiej tradycyjny SSR z DB.",
      "Migracja z WordPress na Jamstack: WordPress zostaje jako backend (headless), frontend stawiany w Next.js. Treści serwowane przez WP REST API albo WPGraphQL plugin. URL-e zachowane przez 301 redirects. Czas: 4-8 tygodni dla średniej strony.",
      "Praktyczna rada 2026: jeśli budujesz nową stronę i nie wiesz co wybrać, default Jamstack (Next.js + Sanity + Vercel). To stack którego używa 80% Awwwards SOTY winners, większość startupów Y Combinator, dokumentacja dla największych SaaS-ów.",
    ],
    faq: [
      { q: "Czym Jamstack różni się od tradycyjnej strony?", a: "Tradycyjna strona (WordPress) renderuje per request: PHP + MySQL query + HTML response. Jamstack: HTML pre-rendered przy build, serwowany z CDN. Brak DB query, brak server processing, sub-1s ładowanie globalnie." },
      { q: "Jaki stack typowy dla Jamstack 2026?", a: "Frontend: Next.js, Astro, SvelteKit. CMS: Sanity, Contentful, Strapi. Hosting: Vercel, Netlify, Cloudflare Pages. Edge functions: Vercel Edge, Cloudflare Workers. Default w PL: Next.js + Sanity + Vercel." },
      { q: "Czy Jamstack jest zawsze lepszy?", a: "Nie. Dla real-time chat, social network feed, dashboards z hot data per user, SSR z DB jest lepsze. Jamstack ma sens dla 70-80% stron (marketing, blog, e-commerce katalogowy, dokumentacja, portfolio)." },
      { q: "Ile kosztuje strona Jamstack?", a: "Strona firmowa 15-30 tys. zł, aplikacja 30-80 tys. Hosting Vercel free dla większości projektów (do 100 GB ruchu/mc). CMS Sanity free do 100k requests/mc. Pełny TCO 3 lata: 15-36 tys." },
      { q: "Jak migrować z WordPress na Jamstack?", a: "WordPress backend zostaje (admin + DB) + warstwa GraphQL (WPGraphQL plugin) + Next.js frontend. Hybrid setup zachowuje workflow redakcji, dodaje wydajność Jamstack. Migracja typowo 4-8 tygodni, koszt 18-30 tys." },
    ],
  },
  {
    slug: "wordpress-vs-next-js-koszt",
    title: "Koszt utrzymania WordPress vs Next.js",
    excerpt:
      "WordPress i Next.js generują inne koszty już po uruchomieniu strony. Porównuję hosting, licencje, aktualizacje, bezpieczeństwo, edycję treści i rozwój bez sztucznego TCO.",
    date: "2026-03-04",
    updatedAt: "2026-09-26",
    readingMinutes: 5,
    tags: ["WordPress", "Next.js", "ceny", "porównanie", "TCO"],
    keyword: "koszt utrzymania strony WordPress vs Next.js",
    relatedServices: ["tworzenie-stron-wordpress", "tworzenie-stron-www", "aplikacje-nextjs"],
    hero: { kind: "wordpress" },
    metaTitle: "Koszt utrzymania WordPress vs Next.js po wdrożeniu",
    metaDescription:
      "Koszt utrzymania WordPress vs Next.js zależy od hostingu, licencji, aktualizacji, opieki i rozwoju. Sprawdź, za co płacisz po uruchomieniu strony.",
    lead:
      "Koszt utrzymania WordPress vs Next.js zależy przede wszystkim od hostingu, płatnych dodatków, zakresu opieki i tego, jak często strona jest rozwijana. WordPress zwykle wymaga regularnej obsługi systemu i wtyczek, a w Next.js większa część kosztów pojawia się przy pracach programistycznych i usługach infrastrukturalnych.",
    body: ["Koszt utrzymania WordPress vs Next.js zależy przede wszystkim od hostingu, płatnych dodatków, zakresu opieki i tego, jak często strona jest rozwijana. WordPress zwykle wymaga regularnej obsługi systemu i wtyczek, a w Next.js większa część kosztów pojawia się przy pracach programistycznych i usługach infrastrukturalnych."],
    sections: [
      {
        heading: "Koszt utrzymania zaczyna się dopiero po uruchomieniu strony",
        body: [
          "Porównanie kosztów WordPressa i Next.js często zaczyna się od ceny wykonania strony. Przy utrzymaniu interesuje mnie coś innego: co dzieje się po publikacji, kiedy strona już działa i trzeba ją hostować, aktualizować, zabezpieczać, uzupełniać treści oraz rozwijać.",
          "To ważne rozróżnienie, bo tańsze wykonanie strony nie oznacza automatycznie tańszego utrzymania. Działa też zależność odwrotna: wyższy koszt początkowy nie gwarantuje, że późniejsze wydatki będą małe. O wyniku decyduje architektura konkretnego serwisu, liczba zewnętrznych usług, sposób zarządzania treścią i zakres zmian wykonywanych po uruchomieniu.",
          "W WordPressie masz system zarządzania treścią, motyw i zwykle zestaw wtyczek. Każdy z tych elementów może wymagać aktualizacji. Część rozszerzeń jest bezpłatna, część działa na licencji odnawianej okresowo. Do tego dochodzą kopie zapasowe, monitoring, zabezpieczenia i hosting obsługujący PHP oraz bazę danych.",
          "Next.js ma inną strukturę kosztów. Sama aplikacja nie potrzebuje klasycznego zestawu wtyczek WordPressa, ale nadal musi gdzieś działać. Jeżeli korzystasz z Vercela, plan Hobby jest przeznaczony do zastosowań niekomercyjnych, więc strona firmowa wymaga planu Pro albo innego sposobu hostowania, na przykład własnego serwera. Mogą dochodzić usługi odpowiedzialne za zarządzanie treścią, formularze, wysyłkę wiadomości czy inne funkcje wykorzystywane przez stronę. Dlatego zamiast jednej kwoty rozkładam utrzymanie na składniki.",
          "Najważniejsza różnica nie brzmi więc „WordPress kosztuje tyle, a Next.js tyle”. Różnica polega na tym, za co płacisz i kto może wykonać daną zmianę.",
        ],
        table: {"caption":"Koszt utrzymania zaczyna się dopiero po uruchomieniu strony","head":["Obszar","WordPress","Next.js"],"rows":[["Hosting","Hosting obsługujący WordPress, PHP i bazę danych","Vercel Pro dla zastosowania firmowego albo własny serwer"],["Licencje","Możliwe płatne wtyczki i inne dodatki","Możliwe płatne usługi zewnętrzne i narzędzia"],["Aktualizacje","Rdzeń WordPressa, motyw i wtyczki","Zależności aplikacji i środowisko projektu"],["Opieka techniczna","Regularne aktualizacje, kopie, monitoring i reakcja na problemy","Aktualizacje projektu, infrastruktury i zależności"],["Treści","Zwykle samodzielnie przez panel WordPressa","Zależnie od wdrożonego systemu zarządzania treścią"],["Rozwój","Konfiguracja, wtyczki lub programowanie","Najczęściej praca programistyczna"]]},
      },
      {
        heading: "W WordPressie stałym kosztem może być opieka techniczna",
        body: [
          "WordPress pozwala właścicielowi strony wygodnie zmieniać dużą część treści bez angażowania programisty. Jednocześnie sam system wymaga obsługi technicznej. Aktualizowany jest WordPress, aktualizowane są wtyczki, a jeśli strona korzysta z własnego motywu lub dodatkowych integracji, trzeba również pilnować ich zgodności.",
          "Aktualizacja nie powinna sprowadzać się do kliknięcia przycisku w panelu. Po zmianie wersji wtyczki albo systemu trzeba sprawdzić, czy strona nadal poprawnie wyświetla kluczowe widoki, formularze działają, integracje odpowiadają i nie pojawiły się konflikty. Do tego dochodzą kopie zapasowe, monitoring oraz reakcja na awarie i problemy bezpieczeństwa. Prosta strona informacyjna potrzebuje innej opieki niż rozbudowany WordPress z wieloma rozszerzeniami.",
          "Publiczne cenniki innych wykonawców dobrze pokazują, że opieka nad WordPressem bywa osobną, regularną pozycją w budżecie. InitSoft publikuje pakiety za 300, 650 i 1000 zł miesięcznie, a CalmSite pakiety od 299 do 899 zł miesięcznie netto. Nie są to moje ceny ani wycena konkretnej strony, tylko przykłady skali, w jakiej na rynku oferowana jest stała obsługa WordPressa.",
          "Takie pakiety trzeba porównywać po zakresie, a nie po samej cenie. Jeden wykonawca obejmuje opieką głównie aktualizacje i kopie zapasowe, inny także prace administracyjne albo zmiany na stronie. Sam oferuję [opiekę nad stroną WordPress](/uslugi/opieka-wordpress), ale nie publikuję jednej stawki dla wszystkich stron. Zakres zależy od budowy serwisu, używanych rozszerzeń, integracji i poziomu bieżącej obsługi, jakiego potrzebujesz.",
        ],
      },
      {
        heading: "Hosting i licencje inaczej obciążają WordPress i Next.js",
        body: [
          "Hosting jest kosztem obu technologii i nie można ich porównywać na zasadzie „WordPress jest płatny, a Next.js darmowy”. WordPress potrzebuje środowiska, na którym działa aplikacja i baza danych. Przy wyborze hostingu liczy się nie tylko miejsce na pliki, ale też kopie zapasowe, parametry serwera, obsługa PHP, bezpieczeństwo i narzędzia potrzebne do utrzymania serwisu.",
          "W WordPressie dodatkową kategorią są licencje. Strona może działać bez płatnych rozszerzeń, ale może też korzystać z kilku narzędzi wymagających odnawiania dostępu, na przykład do formularzy, optymalizacji czy integracji. Im bardziej strona opiera się na zewnętrznych rozszerzeniach, tym większe znaczenie ma później ich utrzymanie.",
          "Next.js usuwa część tego modelu, ale nie usuwa kosztów infrastruktury. Firma nie powinna zakładać bezpłatnego planu Vercel Hobby jako docelowego hostingu komercyjnej strony. Do wyboru zostaje plan płatny albo własna infrastruktura. Również w Next.js pojawiają się cykliczne opłaty za usługi połączone ze stroną, bo sam framework nie daje panelu redakcyjnego, obsługi formularzy ani integracji biznesowych.",
          "Dobrym przykładem, jak różne bywają modele rozliczeń, jest WeNet, który publikuje ofertę strony w abonamencie od 219 zł miesięcznie. Nie jest to odpowiednik samego hostingu ani samej opieki, więc nie można bezpośrednio zestawić tej ceny z pakietem utrzymaniowym. Pokazuje jednak, że koszt strony bywa rozłożony na regularne opłaty obejmujące szerszą usługę.",
        ],
      },
      {
        heading: "Edycja treści może kosztować więcej niż sam hosting",
        body: [
          "Przy planowaniu utrzymania łatwo skupić się na rachunku za serwer, a pominąć czas potrzebny do codziennej pracy z treścią. Po kilku latach to właśnie proces publikowania i zmieniania informacji może mieć większe znaczenie niż sama infrastruktura.",
          "WordPress powstał wokół zarządzania treścią. Jeśli strona została rozsądnie zbudowana, możesz samodzielnie zmieniać teksty, publikować wpisy, wymieniać zdjęcia i pracować na przygotowanych elementach strony, więc zwykła korekta nie musi trafiać do programisty. Nowy typ sekcji, zmiana działania formularza, dodatkowa integracja czy przebudowa układu mogą już wymagać pracy technicznej.",
          "W Next.js sytuacja zależy od architektury projektu. Jeżeli strona jest połączona z wygodnym systemem zarządzania treścią, codzienna praca redakcyjna może być równie prosta. Jeżeli treść znajduje się bezpośrednio w projekcie, nawet niewielka zmiana wymaga osoby technicznej. Dlatego przed wyborem technologii ustal, kto po uruchomieniu będzie zarządzał stroną. Koszt pojawia się tam, gdzie wybrany sposób pracy nie pasuje do tego, jak firma rzeczywiście korzysta ze strony.",
        ],
      },
      {
        heading: "Rozwój funkcji zmienia rachunek bardziej niż nazwa technologii",
        body: [
          "Po uruchomieniu strona rzadko pozostaje identyczna. Firma potrzebuje nowych podstron, formularzy, połączeń z zewnętrznymi systemami, dodatkowych typów treści albo zmian wynikających z rozwoju oferty.",
          "W WordPressie część funkcji można dodać za pomocą istniejących rozszerzeń. To ogranicza zakres programowania, ale wprowadza kolejną zależność, którą trzeba aktualizować i utrzymywać. Next.js częściej prowadzi do rozwiązania przygotowanego pod konkretny projekt, więc nietypowa funkcja oznacza zwykle pracę programistyczną, za to strona nie składa się z szeregu niezależnych rozszerzeń.",
          "Dlatego próba wyliczenia jednego kosztu utrzymania na kilka lat daje pozorną precyzję. Trzeba byłoby z góry wiedzieć, jakie funkcje firma będzie chciała dodać, ile razy zmieni treści, jakie narzędzia zintegruje i które elementy przebuduje. Bez tych informacji końcowa kwota jest bardziej zgadywaniem niż budżetem. Jeżeli zależy Ci na wyborze technologii pod sposób działania firmy, kryteria opisuję we wpisie [Next.js czy WordPress](/blog/next-js-15-vs-wordpress-2026).",
        ],
      },
      {
        heading: "Tańsze utrzymanie zależy od konkretnej strony i sposobu pracy",
        body: [
          "WordPress ma więcej elementów, które naturalnie tworzą regularny harmonogram obsługi: rdzeń systemu, motyw, wtyczki, bazę danych i panel administracyjny. Jeżeli strona korzysta z płatnych rozszerzeń oraz stałej opieki, powstaje wyraźny miesięczny lub okresowy koszt utrzymania.",
          "Next.js ogranicza liczbę takich elementów, ale nadal wymaga hostingu odpowiedniego dla zastosowania firmowego, aktualizacji projektu i obsługi połączonych usług. Gdy zmiana wymaga ingerencji w kod, kosztem staje się czas programisty.",
          "W praktyce patrzę na kilka pytań: kto będzie zmieniał treści, jak często serwis ma być rozwijany, ile zewnętrznych narzędzi będzie wykorzystywał, czy potrzebna jest stała opieka i jakie funkcje mają znaczenie dla firmy. Na swoich stronach nie publikuję stałego cennika realizacji ani opieki, zakres wyceniam po poznaniu sposobu działania strony. Przy porównaniu WordPressa i Next.js bardziej użyteczne od jednej liczby jest ustalenie, które koszty będą cykliczne, które pojawią się tylko przy rozwoju i które prace firma może wykonywać samodzielnie.",
        ],
      },
    ],
    faq: [
      { q: "Co jest tańsze w utrzymaniu: WordPress czy Next.js?", a: "Nie ma jednej kwoty, która rozstrzyga to dla każdej strony. WordPress generuje regularne koszty aktualizacji, opieki i licencji wtyczek, a w Next.js większym składnikiem bywa praca programistyczna przy zmianach oraz infrastruktura. Najwięcej zależy od budowy konkretnego serwisu i częstotliwości jego rozwoju." },
      { q: "Ile kosztuje miesięczna opieka nad WordPressem?", a: "Publiczne cenniki innych wykonawców pokazują różne poziomy obsługi: InitSoft podaje pakiety za 300, 650 i 1000 zł miesięcznie, a CalmSite od 299 do 899 zł miesięcznie netto. Nie są to moje ceny, a przy porównaniu ofert najważniejszy jest zakres prac w pakiecie." },
      { q: "Czy firma może hostować stronę Next.js za darmo na Vercelu?", a: "Plan Vercel Hobby jest przeznaczony do zastosowań niekomercyjnych. Dla firmowej strony trzeba uwzględnić plan Pro albo własny serwer. Do kosztu infrastruktury mogą też dojść inne usługi wykorzystywane przez projekt." },
      { q: "Czy WordPress zawsze wymaga płatnych wtyczek?", a: "Nie. Strona WordPress może korzystać z bezpłatnych rozszerzeń, ale konkretne wdrożenie może wymagać narzędzi z płatnymi licencjami. Przed uruchomieniem sprawdź, które elementy będą wymagały odnawiania i czy są rzeczywiście potrzebne." },
      { q: "Co najbardziej wpływa na koszt utrzymania strony przez kilka lat?", a: "Sposób rozwijania strony po starcie: nowe funkcje, integracje, zmiany techniczne i zakres stałej opieki. Ważne jest też to, czy treści zmieniasz samodzielnie, czy potrzebujesz do tego osoby technicznej. Sam koszt hostingu jest tylko jednym ze składników." },
    ],
  },
  {
    slug: "migracja-wordpress-na-nextjs",
    title: "Migracja z WordPress na Next.js — przewodnik krok po kroku",
    excerpt:
      "Jak przejść z WP na Next.js bez tracenia rankingów SEO. Mapa URL-i, 301 redirects, schema, sitemap, content migration. Realistyczny timeline 4-8 tygodni.",
    date: "2026-02-25",
    readingMinutes: 11,
    tags: ["migracja", "WordPress", "Next.js"],
    keyword: "migracja WordPress Next.js",
    metaTitle: "Migracja WordPress → Next.js — przewodnik krok po kroku",
    metaDescription:
      "Jak migrować z WordPress na Next.js bez tracenia rankingów SEO: URL mapping, 301 redirects, content migration, deployment. Timeline 4-8 tygodni, koszty.",
    hero: { kind: "wordpress" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Migracja WP → Next.js to nie tylko 'przepisanie' strony. To projekt z czterema krytycznymi obszarami: techniczna konwersja, SEO preservation, content migration, deployment.",
      "Krok 1: Inwentaryzacja. Eksportuj wszystkie URL-e WP (Yoast > Tools > Import/Export, lub wp-cli `wp post list --post_type=any --format=csv`). Mapa custom post types, taxonomies, menu, formularzy, integracji. To podstawa wszystkiego.",
      "Krok 2: Decyzja architektoniczna. Headless WP (backend WP zostaje + Next.js frontend) vs full migracja (treści do nowego CMS jak Sanity). Headless prostsze (zachowuje workflow redakcji), full migracja czystsza (jeden source of truth, mniej hostingów). Dla większości klientów: headless.",
      "Krok 3: Setup nowego frontendu. Next.js App Router + WPGraphQL plugin na WordPress + queries w Next.js. ISR z webhook trigger po publikacji w WP. Custom design albo 1:1 z istniejącym (decyzja klienta).",
      "Krok 4: SEO preservation, najkrytyczniejszy. Każdy URL z WP musi być pod tym samym pathem na Next.js. Jeśli zmienia się struktura, robisz 301 redirects (Next.js redirects() w next.config.ts albo middleware). Sitemap auto-generated. Schema.org per route. Meta titles/descriptions zachowane.",
      "Krok 5: Content migration (jeśli full migracja). Eksport WP → import do Sanity. Custom skrypt (np. wp-graphql + sanity-cli). Walidacja wszystkich pól, obrazków (download + reupload do CDN), wewnętrznych linków (URL rewrite).",
      "Krok 6: Staging + testy. Strona na vercel.app preview URL, dokładne testy każdej podstrony, formularzy, integracji. Lighthouse audit per route. Browser testing (Chrome, Safari, mobile).",
      "Krok 7: Deployment. Migracja DNS (zmiana A record / CNAME na Vercel). Robotsy `noindex` zdjęte. Cloudflare cache flush. Search Console, sitemap submit + URL inspection.",
      "Krok 8: Post-launch monitoring. Search Console przez 4-12 tygodni. Sprawdzaj coverage report (czy nowe URL-e indeksują się), Core Web Vitals (czy LCP/INP/CLS są zielone), 404 errors (brakujące redirects do dokończenia).",
      "Realistyczny timeline:",
      "**Mała strona WP (do 50 podstron)**: 4-6 tygodni od briefu do live. Cena: 18-30 tys. zł.",
      "**Średnia (200-500 podstron, blog, custom post types)**: 6-10 tygodni. Cena: 30-60 tys.",
      "**Duża (e-commerce WooCommerce)**: 10-16 tygodni. Cena: 60-120 tys.",
      "Co może pójść nie tak: brak dostępu do hostingu WP (klient nie pamięta haseł), pluginy o których klient zapomniał (Contact Form 7 z 50 form, integracje z CRM), niestandardowe shortcodes w treści, multilanguage z WPML (skomplikowana migracja), URL-e z polskimi znakami (encoding hell). Z każdego można wyjść, ale dodaje 1-3 tygodnie.",
    ],
    faq: [
      { q: "Ile trwa migracja WordPress na Next.js?", a: "Mała strona (do 50 podstron): 4-6 tygodni, koszt 18-30 tys. Średnia (200-500 podstron, blog): 6-10 tygodni, 30-60 tys. Duża (e-commerce WooCommerce): 10-16 tygodni, 60-120 tys." },
      { q: "Czy stracę pozycje SEO przy migracji?", a: "Nie, jeśli migracja zrobiona dobrze: URL-e zachowane 1:1 (lub 301 redirects), schema.org skopiowane, sitemap re-submit, Core Web Vitals zielony. Typowy spadek 1-2 tygodnie po deploy, potem powrót i wzrost." },
      { q: "Czy zostaję bez WordPressa po migracji?", a: "Zależy od strategii. Headless WP: backend WP zostaje (admin + DB), frontend Next.js. Full migracja: treści przeniesione do nowego CMS (Sanity), WP wyłączony. Headless prostszy, full migracja czystsza." },
      { q: "Co z formularzami i pluginami WordPress?", a: "Contact Form 7 → formularz Next.js + Resend/SendGrid SMTP. WooCommerce → migracja do Stripe/Przelewy24 albo zostawienie WP shop subdomain. WPML → next-intl albo Sanity i18n. Każdy plugin per case." },
      { q: "Kto zachowuje admin po migracji?", a: "Headless WP: admin WP nadal aktywny, klient edytuje jak zawsze. Full migracja: klient uczy się Sanity Studio (1-2 sesje), workflow podobny do WP Gutenberg ale szybszy. Decyzja zależy od complacency klienta z nowym narzędziem." },
    ],
  },
  {
    slug: "strona-firmowa-2026-jaka-technologia",
    title: "Strona firmowa 2026 — jaką technologię wybrać",
    excerpt:
      "5 ścieżek dla strony firmowej w 2026: WordPress, Next.js + Sanity, headless WP, Webflow, no-code. Kiedy która ma sens, konkretne ceny, decyzja per profil firmy.",
    date: "2026-02-18",
    readingMinutes: 10,
    tags: ["technologia", "strona firmowa", "decyzje"],
    keyword: "jaki stack na stronę firmową",
    metaTitle: "Jaki stack na stronę firmową 2026 — Next.js, WP, Webflow",
    metaDescription:
      "5 stacków porównanych: WordPress (5-12k), Next.js+Sanity (15-30k), headless WP (20-40k), Webflow (8-20k), no-code (3-10k). Decyzja per profil firmy.",
    hero: { kind: "wordpress" },
    relatedServices: ["nowoczesna-strona-firmowa-2026", "tworzenie-stron-www", "aplikacje-nextjs"],
    body: [
      "Wybór technologii dla strony firmowej w 2026 zależy od 4 zmiennych: budżet, zespół utrzymujący, oczekiwania performance, plany rozwoju. Pięć dominujących ścieżek.",
      "**Ścieżka 1: WordPress + custom theme** (5-12 tys. zł). Stary stary good. Klient sam edytuje, programista WP w PL znajdziesz wszędzie. Plus: tani hosting, ekosystem pluginów, znana technologia. Minus: wolniejszy (Lighthouse 80-90 z optymalizacją), więcej maintenance, security risk.",
      "**Ścieżka 2: Next.js + Sanity** (15-30 tys. zł). Modern stack. Klient edytuje w Sanity Studio (intuicyjne, real-time), frontend na Vercel CDN. Plus: Lighthouse 95+, bezpieczeństwo, edge deployment, dynamic OG. Minus: trudniej znaleźć developera (Next.js dev kosztuje 220-350 zł/h vs WP 100-180), Sanity setup wymaga pomyślenia o schemach.",
      "**Ścieżka 3: Headless WordPress** (20-40 tys.). WordPress backend (klient edytuje jak zawsze) + Next.js frontend. Łączy klient comfort z modern performance. Najlepsze dla firm które już mają redakcję na WP ale chcą szybkość Jamstack.",
      "**Ścieżka 4: Webflow** (8-20 tys. wdrożenie + 200-400 zł/mc subscription). Visual builder no-code/low-code. Plus: szybkie iteracje designu, klient sam edytuje (drag-drop), całkiem niezłe SEO. Minus: vendor lock-in (przeniesienie do innego hostingu = przepisanie), miesięczna subskrypcja Webflow rośnie z ruchem.",
      "**Ścieżka 5: No-code (Framer, Carrd)** (3-10 tys. zł). Dla najprostszych one-pagerów albo szybkich landing pages do testów. Plus: najtańsze, najszybsze. Minus: limitowane (każde 'special' wymaga workaroundów), nie skaluje się z biznesem.",
      "Decyzja praktyczna per profil firmy:",
      "**Mała firma usługowa (kancelaria, salon, restauracja)**: Ścieżka 1 (WordPress). Budżet 5-10k, klient sam edytuje, performance OK.",
      "**Premium service / kancelaria z dużym budżetem reklamy**: Ścieżka 2 (Next.js + Sanity). Performance i schema dla AI search wpływają na konwersje z Google Ads i organic.",
      "**Firma z istniejącą stroną WP, wystrukturyzowaną redakcją**: Ścieżka 3 (Headless WP). Migracja zachowuje workflow.",
      "**Startup / SaaS / e-commerce**: Ścieżka 2 (Next.js + Sanity) lub Ścieżka 1 z WooCommerce dla e-commerce.",
      "**Marketingowy landing pod kampanię**: Ścieżka 5 (Framer) na 1-3 miesiące, potem przepisanie jeśli się utrzyma.",
      "Wybór nie jest binarny. Często startujemy z WP (Ścieżka 1), po roku migrujemy na Next.js (Ścieżka 3), gdy biznes rośnie i SEO/performance zaczynają znaczyć więcej niż oszczędność.",
    ],
    faq: [
      { q: "Jaką technologię wybrać dla małej firmy usługowej?", a: "WordPress + custom theme (5-12 tys. zł). Klient sam edytuje, performance OK po LiteSpeed cache, znana technologia. Dla kancelarii, salonu, restauracji, gabinetu lekarskiego." },
      { q: "Jaką technologię wybrać dla premium service?", a: "Next.js + Sanity (15-30 tys.). Performance i schema dla AI search wpływają na konwersje z Google Ads i organic. Dla kancelarii z dużym budżetem reklamy, B2B usług premium." },
      { q: "Czy warto przepłacać za Webflow?", a: "Webflow daje visual builder + CMS w jednym, klient sam edytuje drag-drop. Plus subskrypcja 200-400 zł/mc. Vendor lock-in (przeniesienie = przepisanie). Sensowne dla freelancerów i małych agencji bez tech zespołu." },
      { q: "Czy no-code (Framer, Carrd) to dobra opcja?", a: "Dla one-pagerów i landing pages pod kampanię (1-3 miesiące): tak. Dla pełnej strony firmowej: nie. Limitowane (każde 'special' wymaga workaroundów), nie skaluje się." },
      { q: "Czy mogę zacząć z prostą technologią i potem skalować?", a: "Tak. Często ścieżka: WordPress (start) → headless WordPress (po roku gdy ruch rośnie) → full Next.js + Sanity (po 2-3 latach gdy biznes rośnie). Każda migracja kosztuje 18-30 tys., ale daje uplift." },
    ],
  },
  {
    slug: "tailwind-css-co-to",
    title: "Tailwind CSS — co to jest i czemu zastępuje tradycyjne CSS",
    excerpt:
      "Tailwind CSS: utility-first CSS framework. Klasy zamiast komponentów. Czemu Tailwind 4 to nowy standard frontendu w 2026.",
    date: "2026-02-11",
    readingMinutes: 6,
    tags: ["Tailwind", "CSS"],
    keyword: "Tailwind CSS",
    metaTitle: "Tailwind CSS — co to, czemu zastępuje tradycyjne CSS",
    metaDescription:
      "Tailwind 4: utility-first framework. Klasy zamiast komponentów, mniejszy bundle, spójny design system. Stack 2026 dla 70% nowych projektów React/Next.js.",
    hero: { kind: "nextjs" },
    relatedServices: ["aplikacje-nextjs", "aplikacje-react", "tworzenie-stron-www"],
    body: [
      "Tailwind CSS to utility-first CSS framework stworzony przez Adama Wathana (2017). Główna idea: zamiast pisać własne klasy CSS (`.button-primary { background: blue; padding: 12px; }`), używasz gotowych utility klas inline (`<button class='bg-blue-500 px-3 py-2'>`).",
      "Korzyści: szybszy dev (nie trzeba wymyślać nazw klas), mniejszy bundle CSS (purge unused classes), spójny design system (predefined spacing/colors/typography scale), łatwiejszy refactor (zmieniasz HTML, CSS sam się dostosuje).",
      "Krytyka: 'klasy w HTML brzydkie', 'ciężko czytać'. To rzeczywiście wymaga przyzwyczajenia, ale po 2 tygodniach pracy z Tailwindem nie chcesz wracać do tradycyjnego CSS.",
      "Tailwind 4 (2025): najnowsza wersja: CSS-first config (`@theme` w globals.css zamiast tailwind.config.js), 5x szybszy build, native CSS variables, automatic content detection. Przeskoczył Bootstrap i CSS Modules pod względem popularności.",
      "Stack typowy 2026: Next.js + Tailwind 4 + shadcn/ui (komponenty zbudowane na Tailwind, kopiujesz do projektu zamiast importować). To stack którego używa 70%+ nowych projektów React/Next.js.",
      "Praktyczna rada: jeśli budujesz nowy projekt, zacznij z Tailwindem. Jeśli masz stary projekt z CSS Modules / styled-components, migracja na Tailwind nie jest priorytetem, to 'optymalizacja DX', nie funkcjonalność. Migruj jak będziesz przepisywać komponenty.",
    ],
    faq: [
      { q: "Czym Tailwind różni się od Bootstrap?", a: "Bootstrap daje gotowe komponenty (Button, Card, Modal). Tailwind daje narzędzia do budowania własnych komponentów (klasy utility). Bootstrap = same klasy CSS na produkcji. Tailwind = mniejszy bundle (purge unused), pełna kontrola nad designem." },
      { q: "Czy Tailwind nie psuje czytelności HTML?", a: "Wymaga przyzwyczajenia 1-2 tygodnie. Po tym okresie reading klasy szybciej niż jumping między HTML a CSS file. Dodatkowo Prettier plugin sortuje klasy automatycznie, IDE autocomplete pokazuje preview." },
      { q: "Co nowego w Tailwind 4?", a: "CSS-first config (@theme w globals.css zamiast tailwind.config.js), 5x szybszy build (Rust compiler), native CSS variables, automatic content detection. Premiera 2025, standard 2026." },
      { q: "Czy używać Tailwind z shadcn/ui?", a: "Tak, świetna kombinacja. shadcn/ui to komponenty zbudowane na Tailwind + Radix UI. Kopiujesz do projektu (zamiast importować z npm), pełna kontrola nad stylami. Stack: Next.js + Tailwind + shadcn/ui." },
      { q: "Jak migrować z CSS Modules na Tailwind?", a: "Stopniowo, komponent po komponencie. Nowe komponenty od razu Tailwind, stare przepisuj jak musisz coś zmienić w nich. Pełna migracja zwykle 2-4 miesiące dla średniego projektu (50+ komponentów)." },
    ],
  },
  {
    slug: "vercel-hosting-co-to",
    title: "Vercel — co to za hosting i czy warto",
    excerpt:
      "Vercel: hosting stworzony przez twórców Next.js. Edge functions, automatic SSL, preview deployments per PR. Darmowy plan Hobby jest przeznaczony do projektów prywatnych i niekomercyjnych, strona firmowa potrzebuje planu Pro.",
    date: "2026-02-04",
    readingMinutes: 7,
    tags: ["Vercel", "hosting"],
    keyword: "Vercel hosting",
    metaTitle: "Vercel hosting — co to, czy warto, vs Hostinger",
    metaDescription:
      "Vercel: hosting od twórców Next.js. Edge functions, automatic SSL, preview per PR, free tier 100 GB/mc. Vs polski hosting (Hostinger): kiedy warto.",
    hero: { kind: "performance" },
    relatedServices: ["aplikacje-nextjs", "tworzenie-stron-www", "next-js-software-house"],
    body: [
      "Vercel to platforma deploymentowa stworzona przez Guillermo Raucha: tego samego który stworzył Next.js. Logika: dostarczyć optymalny hosting dla Next.js apps, ale działa też dla każdego frontend frameworka (Astro, SvelteKit, Vue, vanilla HTML).",
      "Co Vercel daje out-of-the-box: globalny CDN (100+ edge locations), edge functions (Workers), automatic SSL (Let's Encrypt), preview deployments per pull request (każdy PR dostaje własny URL do testów), zero-config deploy z GitHub.",
      "Free tier: 100 GB bandwidth/mc, unlimited static requests, 100 GB-hours of edge function execution. To wystarcza dla 90% małych i średnich stron firmowych.",
      "Pro tier (20$/mc): 1 TB bandwidth, większy compute, password protection na preview, analytics, image optimization 5000/mc.",
      "Enterprise: custom pricing, SLA, SOC 2, dedicated support.",
      "Korzyści Vercel vs tradycyjny hosting (Hostinger, OVH):",
      "**Vercel**: git push = deploy, automatic preview URLs, instant rollback, Lighthouse CI build-in, brak SSH/cPanel, brak zarządzania serwerem.",
      "**Hostinger**: taniej (15-30 zł/mc vs 80 zł/mc Vercel Pro), znajome cPanel, FTP, MySQL, ale wymaga więcej manualnej roboty (SSL, backupy, deployment).",
      "Kiedy Vercel: każdy projekt Next.js, frontend SPA wymagający edge functions, projekty z preview workflow (zespół z PR review), startupy szybkie na MVP.",
      "Kiedy Hostinger: WordPress, klient KONIECZNIE chce panel admina z FTP, projekt z PHP/Laravel backendem, brak budżetu na 80 zł/mc.",
      "Praktyczna rekomendacja: projekt prywatny możesz zacząć na darmowym planie Hobby, ale strona firmowa to użytek komercyjny, więc od startu potrzebuje planu Pro albo innego hostingu, np. własnego serwera.",
    ],
    faq: [
      { q: "Czy Vercel jest darmowy?", a: "Free tier: 100 GB bandwidth/mc, unlimited static requests, 100 GB-hours edge function execution. Wystarcza dla 90% małych i średnich stron firmowych." },
      { q: "Kiedy potrzebny Pro plan?", a: "Powyżej 50k wizyt/mc lub gdy chcesz: analytics built-in, password protection na preview URLs, większy compute, image optimization 5000/mc, support priority. Cena: 20$/mc (~80 zł)." },
      { q: "Vercel vs Hostinger: co wybrać?", a: "Vercel dla każdego projektu Next.js (natywna integracja, edge deployment globalny, git push = deploy). Hostinger dla WordPress, klientów wymagających cPanel/FTP, projektów PHP/Laravel." },
      { q: "Czy Vercel obsługuje email?", a: "Nie. Vercel hostuje tylko strony i funkcje. Maile firmowe (kontakt@domena.pl) trzeba postawić osobno: Google Workspace, Microsoft 365, cyber_folks lub inny dostawca SMTP." },
      { q: "Co z polskim data residency?", a: "Vercel ma data centers w EU (Frankfurt, Paryż, Dublin), ale firma US-based. Dla wymogów RODO/compliance OK, dla compliance wymagającego data w PL: Hostinger / OVH PL z self-hosted Next.js (przez Coolify lub PM2)." },
    ],
  },
  {
    slug: "sanity-cms-vs-strapi",
    title: "Sanity vs Strapi — który headless CMS wybrać",
    excerpt:
      "Sanity: SaaS, real-time, świetny dev experience, free do 100k requests. Strapi: open-source, self-hosted, pełna kontrola, darmo. Konkretne porównanie 2026.",
    date: "2026-01-28",
    readingMinutes: 8,
    tags: ["Sanity", "Strapi", "headless CMS", "porównanie"],
    keyword: "Sanity vs Strapi",
    metaTitle: "Sanity vs Strapi — który headless CMS wybrać 2026",
    metaDescription:
      "Sanity (SaaS, real-time, free 100k req) vs Strapi (open-source, self-hosted, pełna kontrola). Cena, DX, edycja UX, multilanguage, skalowalność. Decyzja per projekt.",
    hero: { kind: "nextjs" },
    relatedServices: ["headless-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Sanity vs Strapi: dwa najpopularniejsze headless CMSy w 2026 dla projektów polskich. Wybór nie jest oczywisty, każdy ma silne strony.",
      "**Sanity** (sanity.io), SaaS, hostowany w US/EU. Schema definiowane w kodzie (TypeScript), GROQ jako query language, Sanity Studio jako panel edycji (lokalnie hostowany przy projekcie). Real-time collaboration (jak Figma, kilku redaktorów widzi zmiany na żywo).",
      "**Strapi** (strapi.io), open-source, self-hosted (Node.js + Postgres). Schema przez UI w panelu admin, REST i GraphQL out-of-the-box, role permissions, plugins ecosystem. Hostujesz sam (Heroku, Railway, własny VPS).",
      "Porównanie head-to-head:",
      "**Cena**: Sanity free do 100k requests + 3 użytkowników. Plan Growth od 99$/mc. Strapi: 0 zł (open-source), tylko hosting (15-50$/mc na Railway).",
      "**Dev experience**: Sanity wygrywa. Schema w TypeScript, real-time preview, świetna dokumentacja. Strapi: dobry, ale więcej manual setup (deployment, db, backups).",
      "**Edycja UX**: Sanity Studio elegancki, intuicyjny, mobile-friendly. Strapi admin trochę bardziej 'enterprise feeling', ale rzetelny.",
      "**Multilanguage**: Sanity ma świetny i18n built-in. Strapi: wymaga plugina, mniej dopracowane.",
      "**Self-hosting / data ownership**: Strapi wygrywa (wszystko Twoje). Sanity: hostowane na ich serwerach (US/EU), Twoje dane na ich infrastructure (RODO compliance, tak, ale data leaves PL).",
      "**Skalowalność**: Sanity skaluje się sam (SaaS). Strapi wymaga monitoringu, scaling Postgres, cache layer.",
      "Kiedy Sanity: małe-średnie projekty, mało technicznego klienta, focus na frontend (nie backend), priorytet dev velocity.",
      "Kiedy Strapi: projekty enterprise z wymogami data ownership, klient ma dev team który ogarnie self-hosting, koszt long-term ważniejszy od convenience.",
      "Moja preferencja: dla 80% projektów PL Sanity. Lepsze DX, mniej maintenance, free tier wystarcza. Strapi tylko gdy klient explicit prosi o self-hosted (compliance, security policy).",
    ],
    faq: [
      { q: "Który headless CMS lepszy: Sanity czy Strapi?", a: "Sanity dla 80% projektów PL: lepsze DX, real-time editing, mniej maintenance. Strapi gdy compliance wymaga self-hosted lub klient ma dev team który ogarnie hosting." },
      { q: "Ile kosztuje Sanity?", a: "Free do 100k requests/mc + 3 użytkowników (wystarcza dla 80% średnich stron firmowych). Growth od 99$/mc. Enterprise custom pricing." },
      { q: "Ile kosztuje Strapi?", a: "Sam Strapi 0 zł (open-source). Hosting Node.js + Postgres: 15-50$/mc na Railway/Render. Plus setup deploymentu po stronie dewelopera (3-6 tys. zł jednorazowo)." },
      { q: "Czy Sanity ma multilanguage?", a: "Tak, świetne i18n built-in. Każde pole może być per locale, GROQ query bierze locale jako parametr. Strapi ma plugin (mniej dopracowane)." },
      { q: "Co z RODO i data residency?", a: "Sanity hostuje dane na ich infrastructure (US/EU). RODO compliant ale dane opuszczają PL. Strapi self-hosted: kontrola gdzie dane lądują (np. Hostinger PL)." },
    ],
  },
  {
    slug: "static-site-generation-co-to",
    title: "Static Site Generation (SSG) — co to i kiedy ma sens",
    excerpt:
      "SSG: HTML generowany przy build, deploy na CDN. Najszybsze strony jakie da się zrobić. Next.js, Astro, Hugo, Jekyll. Kiedy używać, kiedy ISR, kiedy SSR.",
    date: "2026-01-21",
    readingMinutes: 7,
    tags: ["SSG", "performance", "architektura"],
    keyword: "Static Site Generation",
    metaTitle: "Static Site Generation (SSG) — co to, kiedy używać",
    metaDescription:
      "SSG: HTML generowany przy build, serwowany z CDN. Najszybsze strony (sub-1s LCP). Next.js, Astro, Hugo. Kiedy używać, kiedy ISR/SSR. Stack 2026.",
    hero: { kind: "performance" },
    relatedServices: ["strony-jamstack", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Static Site Generation (SSG) to strategia w której każda strona jest renderowana raz (przy build) do statycznego HTML, a potem serwowana z CDN. Brak serwera renderującego per request. Najszybsza możliwa strona.",
      "Jak to działa: developer odpala `next build` (albo astro build, hugo build). Framework iteruje wszystkie podstrony, dla każdej generuje HTML+CSS+JS, zapisuje do folderu out/. Potem ten folder deployujesz na CDN (Vercel, Netlify, Cloudflare Pages).",
      "User wchodzący na stronę dostaje HTML z najbliższego edge node CDN (Tokio, Frankfurt, NYC) w 50-200ms. Brak DB query, brak server processing, brak network round-trip do origin.",
      "Frameworki SSG popularne 2026:",
      "**Next.js**: universal, najpopularniejszy, generuje SSG/ISR/SSR per route.",
      "**Astro**: content-focused, multi-framework support (React, Vue, Svelte w jednym projekcie), zero JS by default.",
      "**Hugo**: najszybszy build (Go), używany dla bardzo dużych stron (10000+ podstron).",
      "**Jekyll**: Ruby, GitHub Pages default, prostszy ale starszy.",
      "**Gatsby**: był popularny 2018-2022, dziś w odwrocie (Next.js zjada market share).",
      "Kiedy używać SSG: blogi, dokumentacja, marketing pages, portfolio, landing pages, strony agencyjne, wszystko gdzie content nie zmienia się per user request.",
      "Kiedy NIE SSG: dashboardy z user-specific data (potrzebujesz SSR), e-commerce z ciągle zmieniającymi się cenami (lepiej ISR), social network feed (real-time data), formularze z heavy validation server-side.",
      "Hybrid: Incremental Static Regeneration (ISR), strona statyczna ale regeneruje się on-demand po update (np. po publikacji nowego posta przez webhook z CMS). Łączy SSG speed z dynamic data freshness.",
      "Praktyczna rada 2026: zacznij od SSG dla większości stron. Vercel auto-detekuje routes które mogą być statyczne (brak dynamic functions) i prerendeuje je przy build. Sprawdź `next build` output, strony oznaczone jako ○ (Static) są SSG.",
    ],
    faq: [
      { q: "Czym SSG różni się od SSR?", a: "SSG renderuje HTML raz przy build, deploy na CDN, każdy user dostaje ten sam plik. SSR renderuje per request na serwerze, każdy user może dostać inny content. SSG szybsze i tańsze, SSR daje dynamic content." },
      { q: "Czy SSG nadaje się do e-commerce?", a: "Tak dla katalogu produktów (statyczne strony per produkt, regenerated z ISR przy update ceny). Koszyk i checkout client-side / SSR (per-user). Hybrid podejście jest standardem." },
      { q: "Jak długo trwa build SSG dla 1000 stron?", a: "Next.js ~2-5 minut, Astro ~1-3 min, Hugo ~10-30 sekund. Dla 10k+ stron Hugo wygrywa (Go-based, najszybszy). Dla average projektów (do 500 podstron) wszystkie OK." },
      { q: "Czy mogę używać SSG z bazą danych?", a: "Tak. Build script fetchuje dane z DB/CMS przy `next build`, generuje statyczne HTML. ISR pozwala regenerować pojedyncze strony bez full rebuild (po update content via webhook)." },
      { q: "Jaki framework SSG wybrać 2026?", a: "Next.js dla 80% projektów (universal, najpopularniejszy, ekosystem). Astro dla content-heavy bez aplikacyjnej dynamiki. Hugo dla bardzo dużych stron (10k+ podstron). Jekyll nadal działa, ale rozwija się wolniej niż Astro czy Hugo." },
    ],
  }
);

/* === Pierwsza partia: cornerstone WordPress + Next.js (2026-05) === */

posts.push({
  slug: "wordpress-co-to-jest",
  title: "WordPress — co to jest i jak działa w 2026",
  excerpt:
    "WordPress to najpopularniejszy CMS na świecie (ponad 40% wszystkich stron www). Co to jest, jak działa, dla kogo ma sens, ile kosztuje uruchomienie. Praktyczny przewodnik 2026.",
  date: "2026-05-09",
  readingMinutes: 12,
  tags: ["WordPress", "podstawy", "CMS"],
  keyword: "WordPress co to jest",
  metaTitle: "WordPress — co to jest i jak działa w 2026 (pełny przewodnik)",
  metaDescription:
    "WordPress: ponad 40% wszystkich stron www. Co to jest, jak działa, ile kosztuje, dla kogo ma sens. Block Editor, FSE, motywy, pluginy, hosting. Praktyczny przewodnik 2026.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "headless-wordpress", "sklepy-internetowe-woocommerce"],
  body: [],
  lead:
    "WordPress to system zarządzania treścią (CMS) napisany w PHP, na którym działa ponad 40% wszystkich stron www na świecie. Jest darmowy, open-source, można go zainstalować na własnym hostingu w 5 minut. Edytujesz treści w przeglądarce bez znajomości kodu, rozszerzasz funkcjonalność przez 60+ tysięcy wtyczek. W 2026 wciąż najczęściej wybierany dla małej i średniej firmy, blogów, sklepów online (przez WooCommerce). Niżej: jak działa technicznie, kiedy ma sens, kiedy NIE.",
  sections: [
    {
      heading: "Czym technicznie jest WordPress",
      body: [
        "WordPress to aplikacja PHP + baza danych MySQL (lub MariaDB). Po instalacji na hostingu masz dwie warstwy: **frontend** (publiczna strona którą widzą użytkownicy) i **backend / panel admin** (interfejs do zarządzania treścią pod adresem `/wp-admin/`).",
        "Każde wejście na stronę uruchamia PHP, który łączy się z bazą danych, pobiera treść (posty, strony, ustawienia, użytkowników), renderuje HTML i wysyła do przeglądarki. Wszystko dynamicznie, per request. Stąd waga cache (LiteSpeed, WP Rocket), dobrze skonfigurowany cache zamienia dynamiczne PHP na statyczny HTML serwowany w milisekundach.",
        "Architektura ma trzy warstwy customizacji:",
        "**Motyw (theme)** decyduje o wyglądzie strony. Może być gotowy (z marketplace jak ThemeForest, AwesomeMotive) albo custom (zbudowany od zera pod konkretny projekt).",
        "**Wtyczki (plugins)** dodają funkcjonalności: SEO (Yoast, Rank Math), bezpieczeństwo (Wordfence), formularze (WPForms), e-commerce (WooCommerce), cache (LiteSpeed, WP Rocket).",
        "**Treść** żyje w bazie danych: posty (`wp_posts`), użytkownicy (`wp_users`), opcje (`wp_options`), meta (`wp_postmeta`). Edytowane przez Block Editor (Gutenberg, od 2018) lub Full Site Editing (FSE, od 2022, pełna edycja motywu w przeglądarce).",
      ],
    },
    {
      heading: "Krótka historia: skąd taka popularność",
      body: [
        "WordPress powstał w 2003 roku jako fork narzędzia do blogowania b2/cafelog. Stworzyli go Matt Mullenweg (dziś CEO Automattic, firmy stojącej za WordPress.com) i Mike Little. Pierwsza wersja miała kilkadziesiąt linii kodu PHP i była dla geeków blogerów.",
        "Przełom w 2010-2013: WordPress przestał być narzędziem do bloga, stał się pełnym CMS. Pojawiły się custom post types, taxonomies, REST API, ACF (Advanced Custom Fields), wzrost rynku motywów premium (ThemeForest osiąga miliony sprzedanych themów).",
        "Drugi przełom 2018: Gutenberg / Block Editor. Edycja treści w blokach, nie w klasycznym TinyMCE. Krytykowane na start, dziś standard. W 2022 dochodzi Full Site Editing, możesz edytować nagłówek, stopkę, każdą część motywu klikając w przeglądarce.",
        "W 2026 WordPress to dojrzały produkt. 43% wszystkich stron internetowych na świecie (W3Techs), 60% spośród tych z CMS-em (czyli wykluczając stricte custom kod). Konkurencja (Webflow, Wix, Squarespace, Shopify) urywa kawałki rynku, ale WordPress wciąż dominuje przez ekosystem (motywy, pluginy, dewelopery, agencje).",
      ],
    },
    {
      heading: "Co dostajesz w darmowym WordPress (i co kosztuje)",
      body: [
        "**Sam WordPress jest darmowy**. Pobierasz z [wordpress.org](https://wordpress.org), instalujesz na hostingu, używasz. Brak licencji, brak ograniczeń komercyjnych. Open-source na licencji GPL.",
        "**Co musisz kupić**: hosting (30-100 zł/mc dla małej strony, Cyber_folks, Hostinger, LH.pl, dhosting), domena (~50 zł/rok dla .pl), SSL (zwykle gratis przez Let's Encrypt na hostingu).",
        "**Wtyczki i motywy free vs premium**: większość kluczowych funkcjonalności masz za darmo: Yoast SEO, Wordfence, WPForms, WooCommerce, LiteSpeed Cache. Ale często warto dopłacić za wersje pro: Yoast Pro (~95$/rok), ACF Pro (~50$/rok), WP Rocket (~60$/rok), WooCommerce extensions (różne, 30-300$/rok).",
        "**Custom theme**: jeśli nie chcesz gotowca, zatrudniasz agencję / freelancera. Cena 4-15 tys. zł za małą-średnią stronę firmową we Wrocławiu (więcej w [ile kosztuje strona www 2026](/blog/ile-kosztuje-strona-www-2026)).",
        "**Realny roczny koszt operacyjny** dla małej strony firmowej: 360 zł hosting + 50 zł domena + 0-300 zł wtyczki premium = **400-700 zł/rok**. Dla średniej strony z e-commerce: 1500-3000 zł/rok.",
      ],
    },
    {
      heading: "Kiedy WordPress jest dobrym wyborem",
      body: [
        "**Strona firmowa do prezentacji oferty** (kancelaria, salon, restauracja, gabinet), WordPress to standard. [Tworzenie stron WordPress](/uslugi/tworzenie-stron-wordpress) z custom themem + Bricks Builder lub ACF = pełna kontrola designu, klient sam edytuje teksty, performance OK po LiteSpeed.",
        "**Blog firmowy lub osobisty**: z czego WordPress wziął początek, do dziś najlepszy do bloga. Block Editor, taxonomies, RSS, integracja z social, SEO out of the box po Yoast / Rank Math.",
        "**Sklep internetowy małej-średniej skali** (do ~5000 produktów): WooCommerce na WordPress. [Sklepy internetowe WooCommerce](/uslugi/sklepy-internetowe-woocommerce) we Wrocławiu integrowane z płatnościami PL (Przelewy24, Autopay, Tpay), fakturami (Subiekt GT, iFirma), feedami Google Shopping i Allegro.",
        "**Magazyn / portal contentowy**: duże publikacje (ekonomia, sport, lifestyle) działają na WordPress (Newsweek, TIME, Variety). Skalowalny, dobrze indeksowany, integruje się z systemami redakcyjnymi.",
        "**Strona instytucji publicznej** (urząd, szkoła), zgodność z WCAG 2.2 AA i BIP osiągalna w WordPress, sporo gotowych theme dedykowanych pod instytucje publiczne.",
      ],
    },
    {
      heading: "Kiedy NIE WordPress (alternatywy)",
      body: [
        "**Aplikacja webowa z customową logiką** (konfigurator, panel klienta, system rezerwacji z complex flow), [tworzenie stron Next.js](/uslugi/aplikacje-nextjs) + dedykowane backend lepsze. WordPress da się rozszerzyć ale szybko stajesz w pułapce 'PHP plugin którego nikt już nie utrzyma'.",
        "**Strona z wymogiem performance Lighthouse 95+ z budżetu reklamowego** (Google Ads Quality Score), [Next.js z SSG](/uslugi/next-js-software-house) dostarcza out of the box co WordPress osiąga tylko po starannej optymalizacji. Pełne porównanie: [WordPress vs Next.js: koszty wdrożenia](/blog/wordpress-vs-next-js-koszt).",
        "**Aplikacja SaaS multi-tenant**: WordPress nie jest do tego zaprojektowany. Multisite działa dla blog network, nie dla prawdziwego SaaS z user dashboards. Lepszy wybór: [aplikacje React](/uslugi/aplikacje-react) z dedykowanym backend.",
        "**Bardzo proste landing page jednodniowe**: Framer, Carrd, lub czysty HTML+CSS będą tańsze i szybsze niż konfiguracja WP.",
        "**Real-time aplikacja** (chat, social feed, live data), WebSocket / SSE w WordPress to walka. Lepiej Next.js + dedykowane usługi.",
      ],
    },
    {
      heading: "Block Editor vs Full Site Editing — co używać w 2026",
      body: [
        "**Block Editor (Gutenberg, od 2018)**: edycja TREŚCI postów i stron w blokach. Nagłówki, paragrafy, obrazki, kolumny, listy, embed (YouTube, Twitter), reusable blocks. Standard do edycji treści.",
        "**Full Site Editing (FSE, od 2022)**: edycja CAŁEGO motywu w przeglądarce. Header, footer, sidebar, single post template, archive template, wszystko klikalne, bez kodu. Wymaga 'block theme' (Twenty Twenty-Three+, Blockbase, Kadence, Astra). Stary 'classic theme' nie wspiera FSE.",
        "**Wybór 2026**: dla nowej strony, block theme + FSE. Dla istniejącej na classic theme, Block Editor do treści, custom code do designu (lub migracja na block theme to projekt 4-8 tygodni).",
        "**Page builders alternatywne** (Elementor, Bricks, Oxygen), działają niezależnie od FSE, mają własne edytory wizualne. Są wygodniejsze dla osób nietechnicznych, ale dokładają własny CSS i JavaScript, więc wydajność trzeba sprawdzić na konkretnej stronie. Szerzej: [Elementor: czy warto go używać](/blog/elementor-dlaczego-nie-warto). Najlepsza alternatywa dla wymagających performance: [headless WordPress + Next.js](/uslugi/headless-wordpress).",
      ],
    },
  ],
  faq: [
    {
      q: "Ile kosztuje uruchomienie strony na WordPressie?",
      a: "Najtaniej: 60-200 zł rocznie (hosting + domena, sam stawiasz na gotowym themie free). Realnie dla firmy: 4-12 tys. zł za wdrożenie z custom themem + 400-700 zł/rok operacyjnie. Pełne widełki: [ile kosztuje strona www 2026](/blog/ile-kosztuje-strona-www-2026).",
    },
    {
      q: "Czy WordPress nadaje się do dużych firm?",
      a: "Tak, TIME, Newsweek, Sony Music, Reuters Blogs, Microsoft News. Skaluje się do milionów wizyt miesięcznie z dobrym hostingiem (WP Engine, Pantheon) i optymalizacją. Dla mid-sized firm w PL Cyber_folks Premium / Hostinger Business obsługuje 50-100k wizyt/mc bez problemu.",
    },
    {
      q: "Czy mogę edytować WordPress bez znajomości kodu?",
      a: "Tak, w 90% przypadków. Block Editor / FSE pozwala edytować treści, dodawać sekcje, obrazki, formularze drag-and-drop. Programista potrzebny dla custom funkcji (integracje API, niestandardowe pola, performance optymalizacje).",
    },
    {
      q: "WordPress vs Wix / Squarespace: co lepsze?",
      a: "WordPress: pełna kontrola, wszystko Twoje, no vendor lock-in, taniej długoterminowo. Wix/Squarespace: prostsze na start, drogo długoterminowo, ograniczenia (przeniesienie = przepisanie od zera). Dla biznesu poważnego, WordPress.",
    },
    {
      q: "Czy WordPress jest bezpieczny?",
      a: "Sam WordPress jest bezpieczny: Automattic regularnie wydaje security patches. Problem: stare pluginy / motywy z lukami. Reguła: aktualizuj wszystko, używaj Wordfence lub Solid Security, włącz 2FA, regularnie backup (UpdraftPlus, Migrate Guru).",
    },
    {
      q: "Czy WordPress ma sens w 2026 czy lepiej Next.js?",
      a: "Zależy od projektu. Strona firmowa do prezentacji + blog + WooCommerce dla małej-średniej firmy = WordPress (taniej, klient sam edytuje). Aplikacja webowa z customową logiką, performance-critical site z Google Ads = Next.js. Pełne porównanie kosztów: [WordPress vs Next.js](/blog/wordpress-vs-next-js-koszt).",
    },
    {
      q: "Czy WordPress.com to to samo co WordPress.org?",
      a: "NIE. WordPress.org, pobierasz oprogramowanie za darmo, instalujesz na własnym hostingu (rekomendowane). WordPress.com, usługa hostowana przez Automattic (firma za WP), darmowa z reklamami lub płatna 4-45$/mc. Mniejsza kontrola.",
    },
  ],
});

posts.push({
  slug: "co-zrobic-po-instalacji-wordpressa",
  title: "Co zrobić po instalacji WordPressa — checklist 15 czynności",
  excerpt:
    "Świeżo zainstalowany WordPress wymaga 15 kroków konfiguracji zanim zaczniesz publikować. Permalinks, security, cache, SEO, backup, RODO. Pełna checklist 2026.",
  date: "2026-05-09",
  readingMinutes: 11,
  tags: ["WordPress", "instalacja", "konfiguracja"],
  keyword: "po instalacji WordPress",
  metaTitle: "Co zrobić po instalacji WordPressa — checklist 15 czynności",
  metaDescription:
    "Checklist 15 kroków po instalacji WordPressa: permalinks, security headers, Wordfence, cache, Yoast, backup, RODO, 2FA. Pełna konfiguracja w 60 minut.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "opieka-wordpress", "przyspieszanie-stron-wordpress"],
  body: [],
  lead:
    "Świeży WordPress po instalacji ma 15-20% tego co potrzeba do produkcji. Default settings są bezpieczne dla WordPress.com, ale dla self-hosted to mało. Niżej checklist 15 czynności które robię po każdej instalacji, od permalinks (krytyczne dla SEO), przez security headers i 2FA, po cache i backup. Cała konfiguracja w 60-90 minut, raz na zawsze.",
  sections: [
    {
      heading: "Bezpieczeństwo i admin (5 czynności)",
      body: [
        "**1. Zmień login admin z 'admin' na coś unikalnego.** WordPress 5.0+ wymaga to przy instalacji, ale stare instalacje często mają 'admin'. Botnety próbują brute force na tym loginie. Stwórz nowego admina z nietypowym username, usuń starego. Dla profesjonalnego setup [tworzenia stron WordPress](/uslugi/tworzenie-stron-wordpress) ten krok robię razem z innymi security hardening w pierwszym tygodniu wdrożenia.",
        "**2. Włącz 2FA dla wszystkich kont admin/editor.** Wordfence Login Security (free) lub WP 2FA. Wymóg w 2026, brak 2FA = spora luka security.",
        "**3. Zainstaluj Wordfence (lub Solid Security, MalCare).** Free tier wystarcza dla małej-średniej strony. Włącz: firewall, brute force protection, login lockdown po 5 nieudanych próbach, 2FA, malware scanner.",
        "**4. Hardening wp-config.php**: dodaj `define('DISALLOW_FILE_EDIT', true);` (blokuje edytor pluginów/motywów z poziomu admin), `define('FORCE_SSL_ADMIN', true);`, klucze i salty z [api.wordpress.org/secret-key](https://api.wordpress.org/secret-key/1.1/salt/).",
        "**5. Ustaw security headers w .htaccess**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security. Sprawdź wynik na [securityheaders.com](https://securityheaders.com).",
      ],
    },
    {
      heading: "SEO podstawy (4 czynności)",
      body: [
        "**6. Permalinks, KRYTYCZNE.** Settings → Permalinks → wybierz 'Post name' (`/sample-post/`). Default to `?p=123` co jest SEO-killer. Zrób to PRZED publikacją pierwszego posta, zmiana później generuje 404 jeśli URL-e już zindeksowane.",
        "**7. Zainstaluj Yoast SEO lub Rank Math** (oba free w wersji podstawowej). Yoast bardziej popularny w PL, Rank Math więcej funkcji w free. Skonfiguruj: title separator, default meta, sitemap, schema.org Organization/Person, integracja z Google Search Console.",
        "**8. Wygeneruj i wyślij sitemap.xml**: w Yoast: SEO → General → Features → XML sitemaps ON. URL: `twojadomena.pl/sitemap_index.xml`. Wyślij do Search Console (`https://search.google.com/search-console`). Dla pełnej strategii SEO strony usługowej zobacz [pozycjonowanie strony usługowej: 7 kroków](/blog/pozycjonowanie-strony-uslugowej).",
        "**9. Robots.txt, sprawdź lub dodaj.** WordPress generuje virtual robots.txt. Sprawdź `twojadomena.pl/robots.txt`. Powinien zawierać `Sitemap: https://twojadomena.pl/sitemap_index.xml`. Dodaj jeśli brak, przez plugin SEO lub ręcznie.",
      ],
    },
    {
      heading: "Performance i cache (3 czynności)",
      body: [
        "**10. Zainstaluj cache plugin.** Jeśli hosting ma LiteSpeed (Cyber_folks, dhosting, niektóre Hostinger), LiteSpeed Cache (free, najlepszy z LiteSpeed serverem). Inaczej WP Rocket (60$/rok, najlepszy ogólnie) lub WP Optimize (free). Pełna lista must-have wtyczek: [25 must-have wtyczek WordPress 2026](/blog/must-have-wtyczki-wordpress-2026).",
        "**11. Optymalizacja obrazków.** Smush (free, do 2 MB obrazek), ShortPixel (płatne ale lepsze, 30$ za 10k obrazków), Imagify. Konwersja JPG/PNG → WebP, lossless lossy compression, lazy loading.",
        "**12. CDN setup**: Cloudflare (free tier wystarcza dla małej strony) lub BunnyCDN ($1/mc minimum). Skraca TTFB dla użytkowników z dalej, dodatkowy security layer.",
      ],
    },
    {
      heading: "Backup i compliance (3 czynności)",
      body: [
        "**13. Backup automatyczny.** UpdraftPlus (free, codzienny backup do Google Drive / Dropbox / S3), Duplicator, Migrate Guru. Minimum: codzienny backup całej strony (database + uploads), retention 30 dni, test restore raz na kwartał.",
        "**14. Cookie consent (RODO).** Cookiebot (płatny, automatic scanning), Klaro (free, open-source), Real Cookie Banner (najpopularniejszy w PL, free podstawowy). Bez tego ryzyko kary do 3% obrotu rocznego.",
        "**15. Polityka prywatności + regulamin.** Settings → Privacy → wygeneruj template Privacy Policy, dostosuj do RODO. Dla [sklepu internetowego WooCommerce](/uslugi/sklepy-internetowe-woocommerce), regulamin sklepu zgodny z UoPK (Ustawa o Prawach Konsumenta). Generator: prywatnosc24.pl, gotowe.pl.",
      ],
    },
    {
      heading: "Bonus: czego NIE robić",
      body: [
        "**Nie instaluj 30 pluginów na start.** Każdy plugin to potencjalna luka security i ciężar dla performance. Reguła: minimum potrzebne, dodawaj tylko gdy realnie potrzeba.",
        "**Nie używaj Hello Dolly i innych default pluginów-zabawek.** Usuń od razu Akismet (jeśli nie używasz Jetpack), Hello Dolly, Twenty Twenty-One/Two/Three motywy które nie używasz.",
        "**Nie zostawiaj wp-admin.php pod default URL** dla projektów wymagających podwyższonego security. Wordfence pozwala zmienić URL admina (np. `/sekretne-wejscie/`).",
        "**Nie używaj 'admin' jako username, '12345' jako hasła, 'admin@admin.com' jako email.** To podstawa którą botnety atakują pierwsze.",
        "**Nie aktualizuj pluginów / motywów / WP core 'kiedyś'.** Włącz auto-update dla minor releases, manual review dla major. Czek WP-Admin → Updates raz w tygodniu.",
      ],
    },
  ],
  faq: [
    {
      q: "Ile czasu zajmuje pełna konfiguracja WordPressa po instalacji?",
      a: "60-90 minut dla doświadczonego dewelopera. Dla początkującego: 3-5 godzin (czas na research każdego pluginu, decyzje, błędy). Pojedyncze rzeczy można rozłożyć w czasie, ale permalinks i security MUSZĄ być pierwsze.",
    },
    {
      q: "Czy muszę kupować pluginy premium na start?",
      a: "Nie. Free tier większości kluczowych pluginów (Wordfence, Yoast, UpdraftPlus, LiteSpeed Cache, Smush) wystarcza dla małej-średniej strony. Premium dopiero gdy realnie potrzebujesz (np. ShortPixel dla 10k+ obrazków, Yoast Pro dla redirect manager).",
    },
    {
      q: "Co jest najważniejsze gdyby mam tylko 30 minut?",
      a: "Top 5: 1) permalinks na 'Post name', 2) Wordfence + 2FA, 3) Yoast SEO podstawowa konfiguracja + Search Console, 4) cache plugin, 5) UpdraftPlus codzienny backup do chmury.",
    },
    {
      q: "Czy mogę pominąć cookie consent jeśli nie używam analytics?",
      a: "Jeśli używasz JAKICHKOLWIEK third-party scripts (Google Fonts, YouTube embed, Twitter embed, Facebook Pixel), nie. Praktycznie każda strona wymaga cookie consent w 2026.",
    },
    {
      q: "Jak często aktualizować plugin / motyw / WP?",
      a: "Auto-update dla minor releases (security patches). Major releases, manual review w środowisku staging, deploy w 1-2 tygodnie. Codziennie czek WP-Admin → Updates dla aktualnych projektów (1-2 minuty pracy).",
    },
    {
      q: "Czy WordPress wymaga PHP 8.x?",
      a: "WordPress 6.5+ rekomenduje PHP 8.1+. Działa na 7.4 ale wolniejszy o 30-50%. Sprawdź wersję PHP na hostingu (Cyber_folks pozwala wybrać per domena), zaktualizuj jeśli stary.",
    },
  ],
});

posts.push({
  slug: "elementor-dlaczego-nie-warto",
  title: "Elementor: czy warto go używać do strony firmowej?",
  excerpt:
    "Elementor może być dobrym wyborem do prostej strony, zwłaszcza gdy zależy Ci na samodzielnej edycji bez programisty. Przy bardziej rozbudowanym serwisie sprawdź jednak, czy wygoda kreatora nie zaczyna utrudniać wydajności i utrzymania.",
  date: "2026-05-09",
  updatedAt: "2026-09-26",
  readingMinutes: 6,
  tags: ["WordPress", "Elementor", "page builder", "opinia"],
  keyword: "Elementor dlaczego nie",
  relatedServices: ["tworzenie-stron-wordpress", "przyspieszanie-stron-wordpress", "nowoczesne-strony-internetowe"],
  hero: { kind: "wordpress" },
  metaTitle: "Elementor: czy warto go używać do strony firmowej?",
  metaDescription:
    "Elementor ma sens przy prostej stronie i samodzielnej edycji. Przy rozbudowie może utrudniać wydajność, spójność i utrzymanie WordPressa na dłużej.",
  lead:
    "Elementor ma sens wtedy, gdy potrzebujesz prostej strony, szybkiego startu i możliwości samodzielnej pracy bez programisty, ale przy bardziej wymagającym serwisie jego ograniczenia mogą zacząć przeszkadzać. W nowych projektach WordPress wybieram najczęściej własny motyw z polami ACF, choć pracowałem również ze stronami zbudowanymi na kreatorze.",
  body: ["Elementor ma sens wtedy, gdy potrzebujesz prostej strony, szybkiego startu i możliwości samodzielnej pracy bez programisty, ale przy bardziej wymagającym serwisie jego ograniczenia mogą zacząć przeszkadzać. W nowych projektach WordPress wybieram najczęściej własny motyw z polami ACF, choć pracowałem również ze stronami zbudowanymi na kreatorze."],
  sections: [
    {
      heading: "Kreator nie jest zły, ale powinien pasować do sposobu pracy ze stroną",
      body: [
        "Elementor jest popularnym kreatorem stron dla WordPressa. Występuje w wersji darmowej oraz płatnej Pro z licencją roczną. Jego podstawowa zaleta wynika z samej idei kreatora: pozwala układać i edytować stronę bez budowania wszystkiego od podstaw przez programistę. Dla właściciela firmy, który chce mieć większą samodzielność, może to być istotny argument.",
        "Dlatego nie traktuję wyboru kreatora jako prostego podziału na dobre i złe rozwiązania. Znacznie ważniejsze jest pytanie, czego oczekujesz od strony po uruchomieniu. Inne potrzeby ma firma, która chce szybko postawić prostą witrynę i później samodzielnie zmieniać jej zawartość, a inne firma, która rozwija serwis, dodaje kolejne funkcje i chce długo utrzymywać jeden spójny system.",
        "Sam znam oba podejścia. Część moich starszych realizacji powstała z użyciem kreatora, na przykład [Multikon](/projekty/multikon) z 2023 roku. W nowych projektach pracuję inaczej: tworzę własny motyw, sekcje strony odwzorowuję zgodnie z projektem i udostępniam ich edycję przez pola ACF. Nie korzystam w takich realizacjach z Elementora, Divi ani Avady.",
        "Ta zmiana podejścia nie oznacza, że każdą istniejącą stronę zbudowaną w kreatorze trzeba przebudować. Narzędzie ma sens wtedy, gdy jego sposób działania odpowiada temu, jak zamierzasz korzystać z witryny. Problem pojawia się dopiero wtedy, gdy wygoda na początku zaczyna generować ograniczenia podczas dalszego rozwoju.",
      ],
    },
    {
      heading: "Elementor ma sens przy prostej stronie i samodzielnej edycji",
      body: [
        "Najłatwiej obronić wybór kreatora wtedy, gdy strona ma być prosta, a jednym z głównych celów jest możliwość samodzielnego wprowadzania zmian. Jeżeli nie chcesz angażować programisty za każdym razem, gdy potrzebujesz zmodyfikować układ sekcji lub przygotować nową treść w ramach dostępnych elementów, wizualny sposób pracy może być wygodny.",
        "To rozwiązanie pasuje też do projektu, w którym ważny jest szybki start. Gotowy mechanizm budowania sekcji zmniejsza zakres prac wykonywanych od podstaw. W takim przypadku nie ma sensu rezygnować z kreatora wyłącznie dlatego, że istnieją bardziej dopasowane technicznie sposoby budowy WordPressa.",
        "Trzeba jednak rozdzielić dwie rzeczy: możliwość edycji treści oraz możliwość dowolnego przebudowywania strony. Nie każda firma potrzebuje tej drugiej. Jeśli wygląd serwisu jest ustalony, a późniejsza praca będzie polegała głównie na zmienianiu zawartości istniejących sekcji, własny motyw z przygotowanymi polami edycyjnymi również zapewni samodzielność. Różnica polega na tym, że edytujesz wtedy przewidziane elementy strony, zamiast za każdym razem budować jej układ. Przy wyborze odpowiedz sobie na kilka pytań:",
        "• czy chcesz samodzielnie zmieniać także układ strony, czy głównie jej treść,",
        "• czy serwis pozostanie prosty, czy będzie z czasem rozbudowywany,",
        "• czy ważniejsza jest swoboda kreatora, czy stała struktura zgodna z projektem.",
        "Nie ma tu jednej odpowiedzi dobrej dla każdej firmy. Im prostsza witryna i im ważniejsza samodzielna praca bez programisty, tym łatwiej uzasadnić użycie kreatora.",
      ],
    },
    {
      heading: "Wydajność trzeba mierzyć na konkretnej stronie",
      body: [
        "Jednym z najczęściej podnoszonych tematów przy kreatorach jest wydajność. Nie da się jednak uczciwie powiedzieć, że każda strona zbudowana w ten sposób będzie wolna. Kreatory dokładają własny CSS i JavaScript, ale ilość dodatkowych zasobów zależy od tego, jakich widżetów i dodatków użyto na konkretnej stronie. Dwóch serwisów zbudowanych w tym samym narzędziu nie można więc oceniać wyłącznie na podstawie nazwy kreatora.",
        "Dobrym punktem odniesienia są Core Web Vitals. Za dobry wynik uznaje się LCP, czyli czas pokazania głównej zawartości, do 2,5 s, INP, czyli reakcję strony na interakcję, do 200 ms, oraz CLS, czyli nieoczekiwane przesunięcia elementów podczas ładowania, do 0,1. Ocena dotyczy 75. percentyla wizyt.",
        "Same progi nie mówią jednak, dlaczego strona ich nie spełnia. Nie można założyć, że winny jest kreator, zanim nie zostanie sprawdzona konkretna witryna. Podobnie nie można obiecać, że samo usunięcie jednego narzędzia automatycznie rozwiąże problemy. Jeśli zastanawiasz się nad zmianą technologii tylko z powodu szybkości, rozsądniejszym pierwszym krokiem jest pomiar. Przy [przyspieszaniu stron WordPress](/uslugi/przyspieszanie-stron-wordpress) punktem wyjścia jest rzeczywisty stan serwisu, a nie założenie, że określony kreator zawsze prowadzi do określonego wyniku.",
      ],
    },
    {
      heading: "Dodatki i licencje zwiększają liczbę zależności",
      body: [
        "Kreator rzadko działa w izolacji. Elementy strony mogą korzystać z dodatkowych widżetów, wtyczek lub funkcji dostępnych w określonej wersji narzędzia. Im więcej takich zależności pojawia się w projekcie, tym ważniejsze staje się świadome utrzymanie całego zestawu.",
        "Tutaj początkowa wygoda może po pewnym czasie zamienić się w dodatkową złożoność. Jeśli konkretna sekcja wymaga określonego dodatku, jej dalsze działanie jest związane nie tylko z WordPressem i motywem, ale także z tym rozszerzeniem. Jeżeli część możliwości strony pochodzi z wersji Pro, dochodzi zależność od rocznej licencji.",
        "Nie oznacza to automatycznie problemu. Zależności można zaakceptować, jeśli wiadomo, po co zostały dodane. Uważać trzeba na sytuację, w której każda kolejna potrzeba jest rozwiązywana następnym dodatkiem, bo wtedy coraz trudniej spojrzeć na witrynę jako na jeden spójny system. Własny motyw pozwala mi podejść do tego inaczej: przygotowuję sekcje zgodnie z projektem i udostępniam pola potrzebne do edycji, bez dokładania kreatora tylko po to, żeby właściciel mógł zmienić tekst albo zdjęcie.",
      ],
    },
    {
      heading: "Swoboda edycji może utrudniać utrzymanie spójnego wyglądu",
      body: [
        "Możliwość samodzielnego budowania sekcji jest jedną z głównych przyczyn wyboru kreatora, ale ta sama cecha może utrudnić utrzymanie spójności. Jeżeli każdą część strony można swobodnie zmieniać, to wraz z rozwojem serwisu trzeba pilnować, aby kolejne modyfikacje nadal odpowiadały przyjętemu projektowi.",
        "Na początku problem bywa niewidoczny, szczególnie gdy stroną zajmuje się jedna osoba, a podstron jest niewiele. Z czasem dochodzą nowe sekcje, kolejne treści i następne decyzje dotyczące układu. Wtedy znaczenie ma nie tylko to, czy zmianę da się wykonać, ale też czy następna podstrona będzie wyglądała i zachowywała się tak samo jak wcześniejsze.",
        "Dlatego w nowych projektach wolę edycję sekcji 1:1 z projektem. Jeżeli dana sekcja ma określoną strukturę, przygotowuję odpowiadające jej pola ACF. Osoba zarządzająca stroną zmienia zawartość, ale nie musi za każdym razem odtwarzać zasad projektu przy pomocy zestawu widżetów. Takie podejście nie będzie lepsze dla każdego: jeżeli Twoim priorytetem jest samodzielne eksperymentowanie z układem, ograniczona struktura własnego motywu może być mniej wygodna.",
      ],
    },
    {
      heading: "Przejęcie strony po innym wykonawcy bywa trudniejsze",
      body: [
        "Kolejne wyzwanie pojawia się wtedy, gdy stronę ma przejąć inna osoba niż jej autor. Sam fakt użycia kreatora nie przesądza o trudności. Znaczenie ma to, jak wykonawca zbudował serwis, jakie dodatki zastosował i jak konsekwentnie korzystał z przyjętych rozwiązań. Trzeba zrozumieć, gdzie edytowane są poszczególne elementy, które funkcje zależą od dodatkowych wtyczek oraz jakie licencje są potrzebne do dalszej pracy.",
        "Dlatego nie oceniam istniejącego serwisu na podstawie informacji, że korzysta z kreatora. Najpierw sprawdzam jego rzeczywistą budowę. Dobrze uporządkowana prosta strona może być łatwa w utrzymaniu, a rozbudowana konstrukcja z wieloma zależnościami wymaga większej ostrożności. Przejęcie strony nie oznacza automatycznie konieczności jej przebudowy: jeżeli obecne rozwiązanie spełnia potrzeby firmy, można je dalej utrzymywać.",
      ],
    },
    {
      heading: "Własny motyw i edytor blokowy są alternatywami dla kreatora",
      body: [
        "W WordPressie nie musisz wybierać pomiędzy kreatorem a brakiem możliwości edycji. Jedną z alternatyw jest własny motyw z polami ACF, który stosuję w nowych projektach, bo łączy konkretny projekt graficzny z kontrolowaną edycją treści. Drugą drogą jest edytor blokowy WordPressa.",
        "Jeśli zamawiasz nowy serwis, ustal sposób późniejszej edycji jeszcze przed rozpoczęciem [tworzenia strony WordPress](/uslugi/tworzenie-stron-wordpress). Pytanie „czy warto użyć kreatora?” jest w praktyce pytaniem o to, jak chcesz pracować ze stroną po jej uruchomieniu. Przy prostym serwisie i potrzebie szerokiej samodzielności kreator może być uzasadnionym wyborem. Przy projekcie, który ma zachować ściśle określoną strukturę, rozwijać się latami i ograniczać zależności, lepiej sprawdzi się własny motyw z przygotowaną edycją sekcji.",
      ],
      table: {"caption":"Własny motyw i edytor blokowy są alternatywami dla kreatora","head":["Podejście","Kiedy może pasować","Na co zwrócić uwagę"],"rows":[["Kreator","Prosta strona, szybki start, samodzielna praca bez programisty","Wydajność konkretnej konfiguracji, dodatki, licencje, spójność"],["Własny motyw z ACF","Projekt z ustaloną strukturą i edycją sekcji zgodną z designem","Mniejsza swoboda samodzielnego zmieniania układu"],["Edytor blokowy","WordPress bez zewnętrznego kreatora","Zakres edycji potrzebny osobie zarządzającej stroną"]]},
    },
  ],
  faq: [
    { q: "Czy Elementor jest złym wyborem do strony firmowej?", a: "Nie. Może być rozsądnym wyborem przy prostej stronie, szybkim starcie i potrzebie samodzielnej edycji bez programisty. Problemy pojawiają się wtedy, gdy sposób działania kreatora przestaje odpowiadać rosnącym wymaganiom serwisu." },
    { q: "Czy strona na Elementorze musi być wolna?", a: "Nie można tego stwierdzić bez pomiaru konkretnej strony. Kreatory dodają własny CSS i JavaScript, ale rzeczywisty wpływ zależy od wykorzystanych widżetów i dodatków, dlatego wydajność trzeba sprawdzić na danej witrynie." },
    { q: "Jakie Core Web Vitals powinna osiągać moja strona?", a: "Dobre wartości to LCP do 2,5 s, INP do 200 ms oraz CLS do 0,1, oceniane dla 75. percentyla wizyt. Same wyniki nie wskazują przyczyny problemu, więc trzeba przeanalizować konkretną stronę." },
    { q: "Co zamiast Elementora w WordPressie?", a: "Alternatywą może być własny motyw z polami ACF albo edytor blokowy. W nowych projektach stosuję własny motyw z edycją sekcji zgodną 1:1 z projektem graficznym." },
    { q: "Czy warto przebudować istniejącą stronę na Elementorze?", a: "Nie tylko dlatego, że korzysta z kreatora. Najpierw sprawdź jej wydajność, sposób budowy, używane dodatki i to, czy obecna struktura rzeczywiście utrudnia dalszy rozwój lub utrzymanie." },
  ],
});

posts.push({
  slug: "must-have-wtyczki-wordpress-2026",
  title: "25 must-have wtyczek WordPress 2026 — kompletna lista",
  excerpt:
    "25 wtyczek WordPress które instaluję w każdym projekcie 2026. SEO, security, cache, formularze, backup, analytics, RODO. Free vs Pro, alternatywy.",
  date: "2026-05-09",
  readingMinutes: 13,
  tags: ["WordPress", "wtyczki", "pluginy"],
  keyword: "wtyczki WordPress",
  metaTitle: "25 must-have wtyczek WordPress 2026 — kompletna lista",
  metaDescription:
    "25 must-have wtyczek WordPress 2026: SEO (Yoast/Rank Math), security (Wordfence), cache (LiteSpeed/WP Rocket), formularze (WPForms), backup, RODO. Free i Pro.",
  hero: { kind: "wordpress" },
  relatedServices: ["tworzenie-stron-wordpress", "opieka-wordpress", "sklepy-internetowe-woocommerce"],
  body: [],
  lead:
    "Po 30+ wdrożeniach jako [freelancer Next.js i WordPress z Wrocławia](/) mam stałą listę 25 pluginów które instaluję praktycznie zawsze. Niżej cała lista podzielona na 8 kategorii (SEO, security, cache, performance, formularze, backup, analytics, RODO), z konkretnymi rekomendacjami free vs pro i alternatywami. Twoja final lista będzie subset 15-20 z tych 25, w zależności od projektu.",
  sections: [
    {
      heading: "SEO (3 wtyczki)",
      body: [
        "**1. Yoast SEO** (free, Premium 99$/rok), najpopularniejszy w PL, dobry default. Schema.org Person/Organization, sitemap, Open Graph, breadcrumbs. Premium: redirect manager, multiple keywords, internal linking suggestions.",
        "**2. Rank Math** (free, PRO 59$/rok), alternatywa dla Yoast, więcej funkcji w free (schema, redirect manager, 404 monitor, Google Search Console integracja). Coraz popularniejsze, lekko zyskuje przewagę nad Yoast w 2026.",
        "**3. Schema & Structured Data for WP & AMP** (free), dla projektów wymagających schema.org bardziej granularnie niż Yoast. Service, Product, Recipe, Event, FAQPage, HowTo. Często dorzucam do Yoast/Rank Math gdy potrzebuję specific schema typów.",
        "**Wybór**: Yoast dla typowych projektów (stabilność, znajomy interfejs), Rank Math dla wymagających więcej w free.",
      ],
    },
    {
      heading: "Security (3 wtyczki)",
      body: [
        "**4. Wordfence Security** (free, Premium 119$/rok), most popular WAF + malware scanner. Free: firewall, brute force protection, login security, malware scanner. Premium: real-time threat intelligence, country blocking, 2FA hardware key.",
        "**5. Solid Security (dawniej iThemes Security)** (free, Pro 99$/rok), alternatywa dla Wordfence, lżejszy. Hide login URL, 2FA, Magic Links, file change detection.",
        "**6. WP 2FA** (free), jeśli używasz innego security plugin bez 2FA. Authenticator apps (Google Authenticator, Authy), backup codes, force 2FA dla admin/editor roles.",
        "**Wybór**: Wordfence dla większości projektów. Solid Security dla performance-critical (lżejszy). WP 2FA jako uzupełnienie jeśli main plugin nie ma 2FA.",
      ],
    },
    {
      heading: "Cache i performance (3 wtyczki)",
      body: [
        "**7. LiteSpeed Cache** (free), najlepszy gdy hosting ma LiteSpeed server (Cyber_folks, dhosting, niektóre Hostinger). Page cache, object cache, image optimization, CSS/JS minify, lazy loading, CDN integracja. Bezkonkurencyjny w swojej niszy.",
        "**8. WP Rocket** (paid 59$/rok dla 1 strony, 119$ dla 3), najlepszy ogólnie, działa na każdym hostingu. Setup w 5 minut, sensowne defaults, wsparcie polski. Dla projektów bez LiteSpeed servera.",
        "**9. WP Optimize** (free, Premium 49$/rok), alternatywa free. Database cleanup, image compression, page cache, lazy loading. Mniej zaawansowany od WP Rocket ale wystarczający dla małych stron.",
        "**Wybór**: LiteSpeed Cache jeśli hosting wspiera. WP Rocket inaczej. WP Optimize jeśli budżet zerowy.",
      ],
    },
    {
      heading: "Optymalizacja obrazków (2 wtyczki)",
      body: [
        "**10. Smush** (free, Pro 84$/rok), najczęściej używany, free wystarcza dla małej strony (do 2 MB per obrazek bulk). WebP convert (Pro), CDN delivery (Pro), lazy loading.",
        "**11. ShortPixel** (paid, ~30$ za 10k obrazków), najlepszy compression ratio. Lossless lossy compression, WebP/AVIF, automatic na upload. Dla sklepów z dużą ilością obrazków produktów.",
        "**Wybór**: Smush dla małej strony firmowej. ShortPixel dla e-commerce / portfolio z 1000+ obrazkami.",
      ],
    },
    {
      heading: "Formularze (2 wtyczki)",
      body: [
        "**12. WPForms** (free Lite, Pro od 49$/rok), najprostszy drag-and-drop builder. Free: contact form, multi-page forms, conditional logic, Akismet anti-spam. Pro: integracje (Mailchimp, GetResponse, Stripe, PayPal), file uploads, signature.",
        "**13. Forminator** (free), alternatywa free od WPMU DEV, więcej funkcji niż WPForms Lite. Quizzes, polls, calculators, integracje z Stripe.",
        "**Bonus: Contact Form 7** (free), klasyk, ale interfejs z 2010, mniej intuicyjny. Używam tylko gdy klient już go ma i działa.",
        "**Wybór**: WPForms dla nowych projektów (lepszy UX), Forminator dla budżetu zerowego z większymi wymaganiami.",
      ],
    },
    {
      heading: "Backup (2 wtyczki)",
      body: [
        "**14. UpdraftPlus** (free, Premium 70$/rok), najpopularniejszy. Codzienny backup do Google Drive / Dropbox / S3 / FTP. Free wystarcza dla małej-średniej strony. Premium: incremental backups, multisite, network backup.",
        "**15. Duplicator** (free, Pro 99$/rok), najlepszy do migracji. Tworzy ZIP z całą stroną + DB, instaluje na nowym hostingu w 5 minut. Pro: scheduled backups, cloud storage, multisite.",
        "**Wybór**: UpdraftPlus dla regularnych backupów. Duplicator dla migracji + okazjonalnych backupów.",
      ],
    },
    {
      heading: "Custom fields i page building (3 wtyczki)",
      body: [
        "**16. Advanced Custom Fields (ACF) Pro** (paid 49$/rok), must-have dla każdego custom theme. Dynamic content fields, repeaters, flexible content, gallery, relationship. Kombinacja ACF + custom theme = czyste WP bez Elementor. Stack którego używam w [tworzeniu stron WordPress](/uslugi/tworzenie-stron-wordpress) dla większości projektów.",
        "**17. Bricks Builder**, płatna alternatywa dla Elementora dla osób, które chcą pracować w kreatorze. W nowych projektach wybieram własny motyw z polami ACF, a porównanie opisałem w tekście [Elementor: czy warto go używać](/blog/elementor-dlaczego-nie-warto).",
        "**18. Carbon Fields** (free, framework dla deweloperów), alternatywa dla ACF Pro free. Definiowanie pól w PHP zamiast UI. Dla deweloperów którzy preferują code-first.",
        "**Wybór**: ACF Pro dla 90% custom theme. Bricks dla page builder zamiast Elementor. Carbon Fields dla code-first developerów.",
      ],
    },
    {
      heading: "Analytics, RODO, e-commerce (7 wtyczek)",
      body: [
        "**19. Site Kit by Google** (free), oficjalna integracja Google Analytics 4 + Search Console + AdSense + PageSpeed Insights w panelu admin. Wszystko w jednym widoku.",
        "**20. Real Cookie Banner** (free, Premium 49€/rok), najpopularniejszy w PL cookie consent. Auto-blocking third-party scripts, integracja z Cookiebot. Dla większości projektów free wystarcza.",
        "**21. Klaro Cookie Consent** (free), open-source alternatywa, lekka, customizable.",
        "**22. WooCommerce** (free), jeśli sklep online. Standard dla e-commerce na WordPress. Pełna usługa: [sklepy internetowe WooCommerce](/uslugi/sklepy-internetowe-woocommerce) we Wrocławiu.",
        "**23. Stripe for WooCommerce** (free), dla płatności kartą międzynarodowych.",
        "**24. Przelewy24 for WooCommerce** (free, opłata transakcyjna), dla PL: BLIK, Przelewy ekspresowe, karty.",
        "**25. WP Mail SMTP** (free, Pro 49$/rok), KRYTYCZNE dla każdej strony z formularzem. WordPress domyślnie wysyła maile przez `wp_mail()` PHP function = często ląduje w spamie. WP Mail SMTP wysyła przez prawdziwy SMTP (Gmail, Sendgrid, Mailgun, Brevo) = doręczalność 99%.",
      ],
    },
    {
      heading: "Czego unikać (anti-recommendation)",
      body: [
        "**Jetpack** (Automattic): dla małych stron za dużo funkcji bundle (analytics, security, social, contact forms, wszystko w jednym pluginie). Lepiej osobne dedykowane pluginy.",
        "**All-in-One SEO Pack**: wyparte przez Yoast i Rank Math. Brak nowych funkcji od kilku lat.",
        "**Slider Revolution / LayerSlider**: ciężkie sliders z 200+ KB JS. Slidery są out of fashion w 2026 (większość użytkowników nie scrolluje przez wszystkie slajdy). Dla animacji lepiej Framer Motion / GSAP w custom theme.",
      ],
    },
  ],
  faq: [
    {
      q: "Ile pluginów to za dużo?",
      a: "Reguła: tylko niezbędne. Średnia profesjonalna strona WP ma 15-25 pluginów. Powyżej 30 = przemyśl czy wszystkie używasz, każdy plugin to potencjalna luka security i ciężar dla performance.",
    },
    {
      q: "Czy free pluginy są bezpieczne?",
      a: "Te z oficjalnego katalogu wordpress.org tak, przechodzą review. Unikaj 'nulled' / pirated premium pluginów (z polskich forów torrent), często mają backdoory.",
    },
    {
      q: "Yoast SEO czy Rank Math: co wybrać?",
      a: "Yoast: bardziej stabilny, znajomy interfejs, default w PL. Rank Math: więcej funkcji w free (schema, redirect manager, multi-keyword). Dla nowego projektu w 2026 lekko polecam Rank Math.",
    },
    {
      q: "Czy WP Rocket jest wart 60$/rok?",
      a: "Tak, jeśli hosting NIE ma LiteSpeed (gdzie LiteSpeed Cache free wygrywa). Setup 5 minut, sensowne defaults, wsparcie polski, regularne updates. Dla profesjonalnej strony, dobra inwestycja.",
    },
    {
      q: "Czy potrzebuję cookie consent jeśli nie używam Google Analytics?",
      a: "Jeśli używasz JAKICHKOLWIEK third-party scripts (Google Fonts CDN, YouTube embed, Twitter widget), tak. W 2026 praktycznie każda strona wymaga cookie consent (RODO i Prawo komunikacji elektronicznej).",
    },
    {
      q: "Czy Wordfence wystarcza w wersji free?",
      a: "Tak dla małej-średniej strony. Free: firewall, brute force protection, malware scanner, login security. Premium ma sens dla high-traffic stron, e-commerce z user data, projektów wymagających real-time threat intelligence.",
    },
  ],
});

posts.push({
  slug: "server-actions-nextjs",
  title: "Server Actions w Next.js — co to i jak używać w 2026",
  excerpt:
    "Server Actions to mutations server-side wywoływane bezpośrednio z komponentów React, bez tworzenia API routes. Co to, kiedy używać, jak zabezpieczyć.",
  date: "2026-05-09",
  readingMinutes: 9,
  tags: ["Next.js", "Server Actions", "React"],
  keyword: "Server Actions Next.js",
  metaTitle: "Server Actions w Next.js — co to i jak używać 2026",
  metaDescription:
    "Server Actions Next.js: mutations server-side z komponentów React bez API routes. Jak działa, kiedy używać, walidacja, security, error handling. Przewodnik 2026.",
  hero: { kind: "nextjs" },
  relatedServices: ["aplikacje-nextjs", "next-js-software-house", "aplikacje-react"],
  body: [],
  lead:
    "Server Actions to async funkcje wykonywane na serwerze, wywoływane bezpośrednio z komponentów React (server lub client) bez tworzenia osobnych API routes. Stabilne od Next.js 14, w 2026 standard dla mutations (form submissions, database writes, third-party API calls). Stack którego używam w każdym projekcie [tworzenia stron Next.js](/uslugi/aplikacje-nextjs). Niżej jak działa, kiedy używać, jak zabezpieczyć i typowe błędy.",
  sections: [
    {
      heading: "Co to są Server Actions technicznie",
      body: [
        "Server Action to async funkcja JavaScript / TypeScript oznaczona dyrektywą `'use server'`. Wykonuje się ZAWSZE na serwerze (Node.js runtime lub Edge), nigdy w przeglądarce. Można ją wywołać z dowolnego komponentu React.",
        "Pod spodem Next.js generuje endpoint POST z unikalnym ID dla każdej Server Action, zarządza serializacją argumentów (z React → JSON → server), deserializacją odpowiedzi (server → JSON → React state), revalidation cache (`revalidatePath`, `revalidateTag`).",
        "Z punktu widzenia developera: piszesz funkcję jakby była lokalna, ale wszystko po stronie HTTP zostaje obsłużone automatycznie. Type safety end-to-end (jeśli używasz TypeScript), argumenty i return type są takie same po obu stronach.",
        "Server Actions ZAWSZE są POST requestami. Nie używaj ich do GET / read operations, do tego są React Server Components (które renderują dane przy SSR/SSG bez round-trip).",
      ],
    },
    {
      heading: "Kiedy używać Server Actions",
      body: [
        "**Form submissions**: najbardziej oczywisty use case. Form akcja `<form action={mojaServerAction}>` wywołuje akcję z FormData jako argumentem. Bez API route, bez fetch, bez state management dla loading.",
        "**Database mutations**: INSERT / UPDATE / DELETE. Wywołujesz Prisma / Drizzle / raw SQL bezpośrednio w Server Action, bez tworzenia REST endpoint. Standard w [tworzeniu aplikacji Next.js](/uslugi/aplikacje-nextjs) z bazą Postgres.",
        "**Third-party API calls wymagające secret keys**: wysyłka maila przez Resend/SendGrid, płatność przez Stripe API, integracja z CRM. Klucze API w server-only env vars, nigdy nie wyciekną do bundle. Dla integracji bardziej złożonych: [Next.js software house](/uslugi/next-js-software-house).",
        "**Cache invalidation**: po mutation `revalidatePath('/products')` lub `revalidateTag('products')` automatycznie odświeża strony statyczne ISR.",
        "**Optimistic updates**: z `useOptimistic` hook React 19 robisz natychmiastowy update UI + Server Action w tle. User widzi zmianę instant, nie czeka na network.",
      ],
    },
    {
      heading: "Kiedy NIE używać Server Actions",
      body: [
        "**Read-only operations**: to robota React Server Components (komponenty async fetchują dane przy SSR). Server Action dla GET = zła praktyka, marnuje round-trip. Pełny przewodnik strategii renderowania: [Server-Side Rendering: co to i kiedy używać](/blog/server-side-rendering-co-to).",
        "**Public API dla third-party** (Twoja aplikacja jest backendem dla cudzych frontendów), Server Actions to internal API Next.js, nie REST. Wystaw klasyczne API routes (`app/api/.../route.ts`).",
        "**Long-running tasks** (reportgen, video processing), Server Action ma timeout 10s na Vercel free, 60s na Pro. Dla długich tasków: queue (Inngest, Trigger.dev, BullMQ) + webhook po zakończeniu.",
        "**Streaming responses** (chat z AI, large data download), Server Actions zwracają jeden response. Dla streaming: API routes z `Response` body jako stream.",
        "**Mutations wymagające specific HTTP method** (PUT, DELETE, PATCH) z third-party tooling, Server Actions to zawsze POST. Dla compliance z REST conventions: API routes.",
      ],
    },
    {
      heading: "Walidacja i security",
      body: [
        "**ZAWSZE waliduj argumenty na serwerze.** Klient może wysłać dowolne dane. Użyj Zod / Valibot / Yup do schema validation:",
        "Przykład: `const schema = z.object({ email: z.string().email(), name: z.string().min(2) });` na początku Server Action, potem `schema.parse(data)`, rzuci wyjątek jeśli dane niepoprawne.",
        "**Sprawdź autoryzację.** Server Action nie ma automatycznego auth check. W każdej akcji wymagającej autoryzacji: `const session = await auth();` na początku, throw error jeśli brak.",
        "**Rate limiting.** Server Action dostępne dla każdego użytkownika, można je spamować. Użyj Upstash Ratelimit lub własny rate limit (Redis, in-memory dla małych projektów).",
        "**CSRF protection**: Next.js automatycznie chroni Server Actions przez Origin header check (od 14.1+). Możesz dodać własny token jeśli wymagasz extra warstwy.",
        "**Nigdy nie używaj userInput w SQL bez parametryzacji.** Prisma / Drizzle / `$queryRaw` z placeholders, ZAWSZE. Inaczej SQL injection.",
      ],
    },
    {
      heading: "Patterny które używam najczęściej",
      body: [
        "**Form action z FormData**: najprostszy pattern. `<form action={createUser}>`, w akcji `const name = formData.get('name')`. Działa nawet bez JavaScript (progressive enhancement).",
        "**Form action z React 19 useActionState**: dla server-side form errors widocznych dla usera. `const [state, action] = useActionState(createUser, { error: null })`. Renderujesz `state.error` w komponencie.",
        "**Optimistic update z useOptimistic**: dla UX gdzie ważna jest natychmiastowa odpowiedź. `addOptimistic(newItem)` przed Server Action, jeśli się nie powiedzie, rollback z error message.",
        "**Server Action wywołana z client component**: nie tylko z `<form action>`. Możesz wywołać jak normalną funkcję: `<button onClick={() => deleteItem(id)}>`. Server Action wykona się po POST.",
        "**Revalidation po mutation**: `revalidatePath('/products')` w Server Action, automatycznie odświeża cache dla tej ścieżki. Dla wszystkich stron z określonym tagiem: `revalidateTag('products')` + `fetch(..., { next: { tags: ['products'] }})` przy fetchu.",
      ],
    },
  ],
  faq: [
    {
      q: "Czy Server Actions zastępują API routes?",
      a: "Częściowo. Server Actions = mutations używane wewnątrz Twojej aplikacji Next.js. API routes = public endpoints dla third-party / mobile apps / non-Next.js consumerów. Większość internal mutations w 2026 = Server Actions.",
    },
    {
      q: "Czy Server Actions działają bez JavaScript?",
      a: "Tak, jeśli wywołane z `<form action>` (progressive enhancement). Form submituje się klasycznym POST + reload. Z `<button onClick>` lub fetch-em wymagają JS.",
    },
    {
      q: "Jak debugować Server Actions?",
      a: "Console.log w Server Action loguje na serwerze (terminal w dev, logs w Vercel dashboard w produkcji). Errors propagują do client jeśli `throw`, łapiesz w `useActionState` lub try/catch.",
    },
    {
      q: "Czy mogę wywołać Server Action z innej Server Action?",
      a: "Tak, to zwykła async funkcja na serwerze. Możesz też importować i wywoływać Server Action z React Server Component przy SSR.",
    },
    {
      q: "Jak ograniczyć rate Server Actions?",
      a: "Upstash Ratelimit (Redis-based, free tier wystarcza dla większości projektów), lub własny in-memory rate limit dla low-traffic. Sprawdź IP / user ID na początku akcji, throw jeśli przekroczony limit.",
    },
    {
      q: "Czy Server Actions działają na Edge runtime?",
      a: "Tak, `export const runtime = 'edge'` w pliku z Server Action. Edge ma niższe latency ale ograniczone API (brak Node.js libs które wymagają Node runtime, np. Prisma standard). Dla większości CRUD operations OK.",
    },
  ],
});

export const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
