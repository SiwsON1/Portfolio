/**
 * Treść money page /audyt-wcag/. Plan: plans/seo-audyt-wcag.md
 *
 * OSTRZEŻENIE REDAKCYJNE. Ta strona zawiera twierdzenia prawne. Trzy pułapki
 * powielane w polskim internecie, których tu nie wolno powtórzyć:
 *  1. Kary 10 000 zł i 5 000 zł należą do ustawy z 2019 o podmiotach publicznych,
 *     NIE do EAA. Dla firm prywatnych kara to 10-krotność przeciętnego wynagrodzenia.
 *  2. Obowiązkowe jest WCAG 2.1 AA przez normę EN 301 549, NIE WCAG 2.2.
 *  3. Firmy prywatne nie składają "deklaracji dostępności". Podają informację
 *     o dostępności usługi w regulaminie.
 */

export const WCAG_META = {
  slug: "audyt-wcag",
  keyword: "audyt WCAG",
  metaTitle: "Audyt WCAG 2.1 AA, zakres i termin | Marcin Siwonia",
  metaDescription:
    "Audyt WCAG 2.1 AA z naprawą błędów. 50 kryteriów, test klawiaturą i czytnikiem ekranu, raport z kosztorysem. Wrocław i zdalnie.",
  h1: "Audyt WCAG, po którym ktoś te błędy naprawi",
  lead:
    "Audyt dostępności cyfrowej kończy się zwykle plikiem PDF z sześćdziesięcioma błędami i zdaniem, że trzeba to poprawić. Potem zaczyna się szukanie programisty, który zrozumie, o co chodzi w kryterium 1.4.11. Ja robię obie części, więc raport nie jest końcem sprawy tylko listą zadań, które sam odhaczam.",
  intro: [
    "Sprawdzam stronę pod kątem 50 kryteriów WCAG 2.1 na poziomie AA, czyli dokładnie tego zakresu, który wskazuje norma EN 301 549 przywołana w przepisach. Nie klikam skanera i nie odsyłam wyniku, bo automat wyłapuje najwyżej jedną trzecią problemów. Przechodzę stronę klawiaturą, słucham jej czytnikiem ekranu, mierzę kontrasty i oceniam, czy opisy alternatywne mówią cokolwiek sensownego.",
    "Pracuję głównie na [WooCommerce](/uslugi/sklepy-internetowe-woocommerce) i WordPressie, więc raport nie kończy się na „popraw kontrast w przycisku\". Wiem, w którym pliku motywu ten przycisk siedzi i ile kosztuje jego poprawienie.",
  ],
  cta: "Napisz, jaki masz adres. Odpiszę, czy obowiązek Cię dotyczy i ile to będzie kosztować.",
};

export const WCAG_FACTBAR = [
  { label: "Czas", value: "5 do 10 dni roboczych" },
];

/** Sekcja 01: co obejmuje. */
export const WCAG_ZAKRES = [
  {
    title: "Test klawiaturą, całą ścieżką zakupową",
    body: "Przechodzę stronę bez myszy, od wejścia po złożenie zamówienia. Sprawdzam kolejność fokusu, jego widoczność, pułapki, z których nie da się wyjść, i menu, do których klawiaturą nie da się dotrzeć. To jest ta część, której żaden skaner nie zrobi.",
  },
  {
    title: "Odsłuch czytnikiem ekranu",
    body: "NVDA na Windowsie, VoiceOver na macOS. Słucham, co realnie słyszy osoba niewidoma: czy formularz ma etykiety, czy komunikat o błędzie w koszyku zostanie odczytany, czy link nazywa się „czytaj więcej\" i nie znaczy nic.",
  },
  {
    title: "Pomiar kontrastów i skalowania",
    body: "Kontrast tekstu, elementów interfejsu i stanów fokusu, liczbowo. Do tego powiększenie do 200 procent i szerokość 320 pikseli, czyli warunki, w których większość stron rozjeżdża się lub gubi treść.",
  },
  {
    title: "Raport z kosztorysem, nie sama lista błędów",
    body: "Każdy błąd dostaje numer kryterium, zrzut ekranu, miejsce w kodzie, poziom pilności i szacowany czas naprawy. Dzięki temu wiesz, co poprawić najpierw i ile to kosztuje, zanim cokolwiek zamówisz.",
  },
];

/** Sekcja 02: zakres i czas realizacji. */
export const WCAG_CENNIK = [
  {
    name: "Audyt",
    time: "5 do 10 dni roboczych",
    body: "Pełny przegląd 50 kryteriów WCAG 2.1 AA, test klawiaturą i czytnikiem ekranu, raport z priorytetami i kosztorysem naprawy. Wycena zależy od liczby unikalnych szablonów, nie od liczby podstron.",
  },
  {
    name: "Audyt z naprawą",
    time: "3 do 6 tygodni",
    body: "To samo co wyżej, plus wdrożenie poprawek i re-audyt potwierdzający. Kończy się stroną, która przechodzi kryteria, a nie raportem, z którym trzeba szukać wykonawcy.",
  },
  {
    name: "Informacja o dostępności do regulaminu",
    time: "2 dni robocze",
    body: "Dokument wymagany od usługodawcy, przygotowany na podstawie faktycznego stanu strony po audycie. Nie szablon z internetu, tylko opis tego, co realnie spełniasz.",
  },
];

/** Sekcja 03: kwalifikacja. Kolejność ma znaczenie, to jest drzewko decyzyjne. */
export const WCAG_KWALIFIKACJA = [
  {
    q: "Zatrudniasz mniej niż 10 osób i masz obrót do 2 mln euro?",
    a: "Jesteś mikroprzedsiębiorcą, a ustawa wyłącza mikroprzedsiębiorców świadczących usługi. Obowiązek Cię nie dotyczy. Uwaga: oba warunki muszą być spełnione naraz, a wyłączenie obejmuje usługi, nie produkty.",
    wynik: "nie dotyczy",
  },
  {
    q: "Prowadzisz sprzedaż przez internet, bankowość, telekomunikację, transport pasażerski albo e-booki?",
    a: "To są usługi wymienione w ustawie wprost. Handel elektroniczny obejmuje zwykły sklep internetowy, także taki, który sprzedaje przy okazji działalności stacjonarnej.",
    wynik: "dotyczy",
  },
  {
    q: "Produkujesz, importujesz albo dystrybuujesz sprzęt z listy?",
    a: "Terminale płatnicze, bankomaty, automaty biletowe, czytniki e-booków, komputery i systemy operacyjne. Tu wyłączenie mikroprzedsiębiorcy nie działa, bo dotyczy wyłącznie usług.",
    wynik: "dotyczy",
  },
  {
    q: "Jesteś podmiotem publicznym: urzędem, szkołą, szpitalem?",
    a: "Podlegasz pod inny, starszy reżim: ustawę z 4 kwietnia 2019. Masz obowiązek publikowania deklaracji dostępności, a kary są inne i niższe. Ta strona opisuje przepisy dla firm.",
    wynik: "inny reżim",
  },
];

/** Sekcja 04: proces. */
export const WCAG_PROCES = [
  { step: "01", title: "Zakres", body: "Ustalamy, ile jest unikalnych szablonów i które ścieżki są krytyczne. W sklepie zawsze wchodzi karta produktu, koszyk i płatność, bo tam kończy się sprzedaż.", time: "1 dzień" },
  { step: "02", title: "Przegląd automatyczny", body: "axe-core i własne skrypty na wszystkich szablonach. To odsiewa błędy powtarzalne i pokazuje, gdzie szukać dalej. Sam w sobie nie wystarcza.", time: "1 dzień" },
  { step: "03", title: "Testy ręczne", body: "Klawiatura, czytnik ekranu, powiększenie, kontrasty, sensowność opisów alternatywnych. Najdłuższa i najważniejsza część, bo tu wychodzi większość realnych barier.", time: "2 do 5 dni" },
  { step: "04", title: "Raport", body: "Błędy z numerami kryteriów, zrzutami, lokalizacją w kodzie, priorytetem i czasem naprawy. Do tego lista rzeczy, które są w porządku, żebyś wiedział, czego nie ruszać.", time: "1 do 2 dni" },
  { step: "05", title: "Naprawa i re-audyt", body: "Przy pakiecie z naprawą wdrażam poprawki i sprawdzam stronę drugi raz, tymi samymi testami. Bez tego nie ma pewności, że poprawka niczego nie zepsuła gdzie indziej.", time: "3 do 6 tygodni" },
];

/**
 * Sekcja 05: pełna lista kryteriów WCAG 2.1 na poziomie A i AA.
 * 30 kryteriów na poziomie A, 20 na AA, razem 50. Tego nie ma żadna
 * konkurencyjna strona w polskim SERP-ie, wszyscy piszą ogólnikami.
 */
export const WCAG_KRYTERIA: {
  zasada: string;
  opis: string;
  pozycje: { nr: string; nazwa: string; poziom: "A" | "AA" }[];
}[] = [
  {
    zasada: "Postrzegalność",
    opis: "Treść musi dać się odebrać każdym zmysłem, którym da się z niej korzystać.",
    pozycje: [
      { nr: "1.1.1", nazwa: "Treść nietekstowa", poziom: "A" },
      { nr: "1.2.1", nazwa: "Sama audycja lub sam wideoklip", poziom: "A" },
      { nr: "1.2.2", nazwa: "Napisy rozszerzone do nagrań", poziom: "A" },
      { nr: "1.2.3", nazwa: "Audiodeskrypcja lub alternatywa tekstowa", poziom: "A" },
      { nr: "1.2.4", nazwa: "Napisy rozszerzone na żywo", poziom: "AA" },
      { nr: "1.2.5", nazwa: "Audiodeskrypcja do nagrań", poziom: "AA" },
      { nr: "1.3.1", nazwa: "Informacje i relacje", poziom: "A" },
      { nr: "1.3.2", nazwa: "Zrozumiała kolejność", poziom: "A" },
      { nr: "1.3.3", nazwa: "Właściwości zmysłowe", poziom: "A" },
      { nr: "1.3.4", nazwa: "Orientacja ekranu", poziom: "AA" },
      { nr: "1.3.5", nazwa: "Określenie przeznaczenia pola", poziom: "AA" },
      { nr: "1.4.1", nazwa: "Użycie koloru", poziom: "A" },
      { nr: "1.4.2", nazwa: "Kontrola odtwarzania dźwięku", poziom: "A" },
      { nr: "1.4.3", nazwa: "Kontrast tekstu, minimum", poziom: "AA" },
      { nr: "1.4.4", nazwa: "Zmiana rozmiaru tekstu", poziom: "AA" },
      { nr: "1.4.5", nazwa: "Obrazy tekstu", poziom: "AA" },
      { nr: "1.4.10", nazwa: "Dopasowanie do ekranu", poziom: "AA" },
      { nr: "1.4.11", nazwa: "Kontrast elementów nietekstowych", poziom: "AA" },
      { nr: "1.4.12", nazwa: "Odstępy w tekście", poziom: "AA" },
      { nr: "1.4.13", nazwa: "Treść spod kursora lub fokusu", poziom: "AA" },
    ],
  },
  {
    zasada: "Funkcjonalność",
    opis: "Wszystko, co da się kliknąć, musi dać się obsłużyć bez myszy i bez pośpiechu.",
    pozycje: [
      { nr: "2.1.1", nazwa: "Obsługa klawiaturą", poziom: "A" },
      { nr: "2.1.2", nazwa: "Bez pułapki na klawiaturę", poziom: "A" },
      { nr: "2.1.4", nazwa: "Jednoznakowe skróty klawiaturowe", poziom: "A" },
      { nr: "2.2.1", nazwa: "Możliwość dostosowania czasu", poziom: "A" },
      { nr: "2.2.2", nazwa: "Pauza, zatrzymanie, ukrycie", poziom: "A" },
      { nr: "2.3.1", nazwa: "Trzy błyski lub wartość poniżej progu", poziom: "A" },
      { nr: "2.4.1", nazwa: "Możliwość pominięcia bloków", poziom: "A" },
      { nr: "2.4.2", nazwa: "Tytuł strony", poziom: "A" },
      { nr: "2.4.3", nazwa: "Kolejność fokusu", poziom: "A" },
      { nr: "2.4.4", nazwa: "Cel linku w kontekście", poziom: "A" },
      { nr: "2.4.5", nazwa: "Wiele dróg do strony", poziom: "AA" },
      { nr: "2.4.6", nazwa: "Nagłówki i etykiety", poziom: "AA" },
      { nr: "2.4.7", nazwa: "Widoczny fokus", poziom: "AA" },
      { nr: "2.5.1", nazwa: "Gesty punktowe", poziom: "A" },
      { nr: "2.5.2", nazwa: "Anulowanie kliknięcia", poziom: "A" },
      { nr: "2.5.3", nazwa: "Etykieta w nazwie", poziom: "A" },
      { nr: "2.5.4", nazwa: "Aktywowanie ruchem", poziom: "A" },
    ],
  },
  {
    zasada: "Zrozumiałość",
    opis: "Treść i obsługa mają być przewidywalne, a błąd ma dać się naprawić.",
    pozycje: [
      { nr: "3.1.1", nazwa: "Język strony", poziom: "A" },
      { nr: "3.1.2", nazwa: "Język części strony", poziom: "AA" },
      { nr: "3.2.1", nazwa: "Zachowanie po otrzymaniu fokusu", poziom: "A" },
      { nr: "3.2.2", nazwa: "Zachowanie podczas wprowadzania danych", poziom: "A" },
      { nr: "3.2.3", nazwa: "Spójna nawigacja", poziom: "AA" },
      { nr: "3.2.4", nazwa: "Spójna identyfikacja", poziom: "AA" },
      { nr: "3.3.1", nazwa: "Identyfikacja błędu", poziom: "A" },
      { nr: "3.3.2", nazwa: "Etykiety lub instrukcje", poziom: "A" },
      { nr: "3.3.3", nazwa: "Sugestie korekty błędu", poziom: "AA" },
      { nr: "3.3.4", nazwa: "Zapobieganie błędom w transakcjach", poziom: "AA" },
    ],
  },
  {
    zasada: "Solidność",
    opis: "Kod ma być na tyle poprawny, żeby technologie asystujące dawały sobie z nim radę.",
    pozycje: [
      { nr: "4.1.1", nazwa: "Poprawność kodu", poziom: "A" },
      { nr: "4.1.2", nazwa: "Nazwa, rola, wartość", poziom: "A" },
      { nr: "4.1.3", nazwa: "Komunikaty o stanie", poziom: "AA" },
    ],
  },
];

/** Sekcja 07: podstawa prawna. Każda wartość zweryfikowana, źródła w planie SEO. */
export const WCAG_PRAWO = [
  { atrybut: "Podstawa w Polsce", wartosc: "Ustawa z 26 kwietnia 2024, Dz.U. 2024 poz. 731" },
  { atrybut: "Akt unijny", wartosc: "Dyrektywa 2019/882, Europejski Akt o Dostępności" },
  { atrybut: "Obowiązuje od", wartosc: "28 czerwca 2025" },
  { atrybut: "Norma techniczna", wartosc: "EN 301 549 V3.2.1, zawiera WCAG 2.1 na poziomie AA" },
  { atrybut: "Wymagany poziom", wartosc: "AA, czyli 50 kryteriów. Nie AAA" },
  { atrybut: "Kogo nie dotyczy", wartosc: "Mikroprzedsiębiorcy świadczący usługi: poniżej 10 osób oraz obrót do 2 mln euro" },
  { atrybut: "Kara maksymalna", wartosc: "10-krotność przeciętnego wynagrodzenia, w 2026 około 89 000 zł, nie więcej niż 10 procent obrotu" },
  { atrybut: "Zanim spadnie kara", wartosc: "Najpierw wezwanie do działań naprawczych. Kara nie jest pierwszym krokiem" },
  { atrybut: "Umowy sprzed terminu", wartosc: "Mogą trwać na starych zasadach najdłużej do 28 czerwca 2030" },
  { atrybut: "Obowiązek informacyjny", wartosc: "Informacja o dostępności usługi w regulaminie. To nie jest deklaracja dostępności" },
];

/** Sekcja 08: odsiew. Nikt na rynku nie pisze, czego nie robi. */
export const WCAG_POZA_ZAKRESEM = [
  "Nie sprzedaję nakładek ani widżetów dostępności. Nakładka nie daje zgodności z WCAG, a bywa, że przeszkadza czytnikom ekranu bardziej niż sama strona.",
  "Nie wystawiam certyfikatów zgodności. Nikt w Polsce nie ma uprawnień do wydawania takiego dokumentu ze skutkiem prawnym, więc byłaby to ozdoba.",
  "Nie audytuję aplikacji mobilnych natywnych. Robię strony i aplikacje webowe, w tym progresywne.",
  "Nie doradzam prawnie. Mówię, co mówi ustawa i norma, ale jeśli sprawa dotyczy sporu albo kontroli, potrzebujesz prawnika, nie programisty.",
];

/** Sekcja 09: FAQ. Pytania wzięte z realnych sekcji FAQ konkurencji i z SERP-u. */
export const WCAG_FAQ = [
  {
    q: "Ile kosztuje audyt WCAG?",
    a: "Wycenę określa liczba unikalnych szablonów, nie liczba podstron: sklep z tysiącem produktów ma zwykle jedną kartę produktu, więc sprawdzam ją raz. Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem.",
  },
  {
    q: "Ile trwa audyt WCAG?",
    a: "Od 5 do 10 dni roboczych od dostania dostępów. Naprawa błędów to dodatkowe 3 do 6 tygodni, zależnie od tego, ile ich wyjdzie i jak głęboko siedzą w motywie.",
  },
  {
    q: "Czy mój sklep internetowy musi spełniać WCAG?",
    a: "Jeśli zatrudniasz mniej niż 10 osób i masz obrót do 2 mln euro, jesteś mikroprzedsiębiorcą i ustawa Cię nie obejmuje. Oba warunki muszą być spełnione naraz. Powyżej tego progu handel elektroniczny jest wymieniony w ustawie wprost, więc obowiązek dotyczy także zwykłego sklepu prowadzonego przy działalności stacjonarnej.",
  },
  {
    q: "Od kiedy obowiązują te przepisy?",
    a: "Od 28 czerwca 2025. Podstawa to ustawa z 26 kwietnia 2024, która wdraża w Polsce Europejski Akt o Dostępności. Umowy zawarte przed tą datą mogą trwać na dotychczasowych zasadach najdłużej do 28 czerwca 2030.",
  },
  {
    q: "Jakie są kary za brak dostępności?",
    a: "Do 10-krotności przeciętnego wynagrodzenia w gospodarce narodowej za rok poprzedni, czyli w 2026 około 89 000 zł, przy czym nie więcej niż 10 procent obrotu. Kara nie spada od razu: najpierw jest wezwanie do działań naprawczych. Kwoty, które krążą po internecie, pochodzą ze starszej ustawy o podmiotach publicznych i firm prywatnych nie dotyczą.",
  },
  {
    q: "WCAG 2.1 czy 2.2, którą wersję trzeba wdrożyć?",
    a: "Prawnie operacyjne jest WCAG 2.1 na poziomie AA, bo taką wersję zawiera norma zharmonizowana EN 301 549 w wydaniu V3.2.1. WCAG 2.2 nie jest jeszcze do niej wciągnięte. Robię audyt pod 2.1 AA i osobno oznaczam te miejsca, gdzie 2.2 dokłada wymagania, żebyś nie musiał tego powtarzać przy aktualizacji normy.",
  },
  {
    q: "Czy widżet dostępności wystarczy?",
    a: "Nie. Nakładka nie zmienia kodu strony, więc nie naprawia ani struktury nagłówków, ani etykiet formularzy, ani obsługi klawiaturą. Bywa, że przeszkadza czytnikom ekranu bardziej niż sama strona. Testy pokazują, że nakładki adresują najwyżej kilkanaście procent realnych barier, a zgodności nie dają w ogóle.",
  },
  {
    q: "Czy dostanę certyfikat zgodności z WCAG?",
    a: "Nie, i nikt uczciwy Ci go nie wystawi. W Polsce nie ma organu ani procedury nadającej taki certyfikat ze skutkiem prawnym. Dostajesz raport z audytu i informację o dostępności usługi do regulaminu, a to są dokumenty, które faktycznie coś znaczą.",
  },
  {
    q: "Czy potrzebuję deklaracji dostępności?",
    a: "Deklaracja dostępności to obowiązek podmiotów publicznych z ustawy z 2019. Firma prywatna podaje co innego: informację o tym, jak jej usługa spełnia wymagania dostępności, w regulaminie albo równoważnym dokumencie, w formie dostępnej.",
  },
  {
    q: "Czy sam skaner nie wystarczy?",
    a: "Nie. Narzędzia automatyczne wykrywają orientacyjnie jedną trzecią problemów: brak atrybutu alt, brakującą etykietę, zbyt niski kontrast. Nie ocenią, czy opis alternatywny ma sens, czy kolejność czytania jest logiczna, czy da się złożyć zamówienie klawiaturą.",
  },
  {
    q: "Co dostaję po audycie?",
    a: "Raport z listą błędów, każdy z numerem kryterium, zrzutem ekranu, miejscem w kodzie, poziomem pilności i szacowanym czasem naprawy. Do tego lista rzeczy, które są w porządku, i kolejność, w jakiej warto poprawiać, gdybyś chciał rozłożyć to na etapy.",
  },
  {
    q: "Jak często trzeba powtarzać audyt?",
    a: "Raz w roku przy stronie, która żyje, i zawsze po większej przebudowie albo zmianie motywu. Nowe podstrony i nowe wtyczki potrafią cofnąć poprawki, o których nikt już nie pamięta. Re-audyt po naprawie jest tańszy, bo znam stronę.",
  },
];

/** Sekcja 07: sedno oferty. Różnica między audytem a naprawą. */
export const WCAG_ROZNICA = {
  h2: "Audyt WCAG to nie jest naprawa",
  akapity: [
    "Na rynku audyt i naprawa to dwie osobne transakcje z dwoma osobnymi wykonawcami. Firma audytorska przechodzi stronę, oddaje raport i kończy zlecenie. Klient zostaje z listą sześćdziesięciu pozycji, z których połowa brzmi jak niewystarczający współczynnik kontrastu elementów interfejsu, kryterium 1.4.11, i musi znaleźć programistę, który to zrozumie i wyceni.",
    "Programista, który dostaje taki raport bez kontekstu, wycenia go ostrożnie, bo nie wie, co autor miał na myśli. Klient płaci dwa razy: raz za znalezienie błędów, drugi raz za przetłumaczenie ich na zmiany w kodzie.",
    "Robię jedno i drugie, więc raport piszę od razu jako listę zadań dla siebie. Przy każdym błędzie stoi plik, linia i czas naprawy, bo to ja będę go poprawiał. Możesz wziąć sam audyt i naprawić własnymi siłami, raport jest na tyle konkretny, że da się to zrobić. Ale nie musisz szukać drugiego wykonawcy.",
  ],
};
