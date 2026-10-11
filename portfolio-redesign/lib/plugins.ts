/**
 * Wtyczki i mu-pluginy napisane przez Marcina, pokazywane na /uslugi/tworzenie-wtyczek-wordpress.
 * Tylko fakty z kodu (inwentaryzacja 11.10.2026). Klienci spoza /projekty opisani bez nazwy.
 */

export type PluginCategory = "GEO i SEO" | "Automatyzacje" | "Integracje i API" | "WooCommerce" | "Treści i UX" | "Bezpieczeństwo";

export type PluginItem = {
  name: string;
  site: string;
  /** Slug realizacji z lib/projects.ts, jeśli serwis jest na /projekty. */
  project?: string;
  category: PluginCategory;
  body: string;
};

export type PluginExhibit = {
  name: string;
  site: string;
  project: string;
  url: string;
  image: string;
  /** Kadr na telefonie (object-position), gdzie na zrzucie jest sama wtyczka. */
  focus: string;
  body: string;
};

/** Liczone z inwentaryzacji: 51 własnych plików wtyczek w 9 serwisach (bez kopii roboczych). */
export const PLUGIN_TOTALS = { plugins: "ponad 40", sites: 9 };

export const PLUGIN_EXHIBITS: PluginExhibit[] = [
  {
    name: "Strona główna składana z bazy",
    site: "Mebloweporady.pl",
    project: "mebloweporady",
    url: "mebloweporady.pl",
    image: "/wtyczki/mebloweporady-strona-glowna.webp",
    focus: "24% 55%",
    body: "Zastąpiła stronę zbudowaną w Elementorze. Najnowszy wpis, świeże publikacje, liczniki poradników i kalkulatorów oraz działy tematyczne układają się same po każdej publikacji.",
  },
  {
    name: "Kalkulator kuchni na wymiar",
    site: "Mebloweporady.pl",
    project: "mebloweporady",
    url: "mebloweporady.pl/kalkulator-kuchni-na-wymiar",
    image: "/wtyczki/mebloweporady-kalkulator.webp",
    focus: "35% 45%",
    body: "Jeden z siedmiu kalkulatorów z tej samej wtyczki. Rzut kuchni rysuje się na bieżąco, a widełki ceny zmieniają się z każdym suwakiem.",
  },
  {
    name: "Karta produktu z logo marek i parametrami",
    site: "Kosmoteka",
    project: "kosmoteka",
    url: "kosmoteka.pl/sklep",
    image: "/wtyczki/kosmoteka-karty-produktow.webp",
    focus: "32% 70%",
    body: "Logo marki, najważniejsze parametry modelu ze słownika specyfikacji, zdjęcia bez białego tła i filtr marek. Bez ręcznej pracy przy każdym produkcie.",
  },
  {
    name: "Opinie o sklepie z kodem rabatowym",
    site: "LumiKids",
    project: "lumikids",
    url: "lumikids.com.pl/opinie",
    image: "/wtyczki/lumikids-opinie.webp",
    focus: "25% 45%",
    body: "Własny system opinii z moderacją. Siedem dni po zrealizowaniu zamówienia klient dostaje prośbę o ocenę, a za opinię jednorazowy kod rabatowy.",
  },
];

export const PLUGINS: PluginItem[] = [
  { name: "Detektor botów AI", site: "Narzędzie GEO dla agencji SEO", category: "GEO i SEO", body: "Po stronie serwera rozpoznaje wejścia GPTBot, ClaudeBot, PerplexityBot i Google-Extended, także tych, które nie uruchamiają JavaScriptu, i przekazuje je do panelu widoczności w AI bez spowalniania strony." },
  { name: "Poradnik i FAQ na 951 stronach miast", site: "Serwis windykacyjny", category: "GEO i SEO", body: "Na każdej stronie lokalnej dokłada blok linków do poradników dobranych do etapu sprawy i dane FAQPage zbudowane z treści tej konkretnej strony." },
  { name: "Dane strukturalne produktów", site: "LumiKids, Kosmoteka", category: "GEO i SEO", body: "Poprawia schemę produktu z Rank Math: prawdziwa nazwa zamiast tytułu SEO, marka, SKU, EAN, MPN i okruszki, czyli to, czego Google szuka w karcie produktu." },
  { name: "Automatyczne linkowanie wewnętrzne", site: "Kosmoteka", project: "kosmoteka", category: "GEO i SEO", body: "Kluczowe frazy we wpisach na blogu same linkują do kategorii sklepu, a pod tekstem pojawia się ramka „Polecane w tym temacie”." },
  { name: "Mapy przekierowań 301", site: "Serwis windykacyjny, LumiKids, Mebloweporady", category: "GEO i SEO", body: "Przekierowania po scaleniu wpisów, usuniętych duplikatach produktów i 163 adresach miast, z których generator zgubił literę „ł”. Działają tylko tam, gdzie wcześniej był błąd 404." },
  { name: "Prośba o opinię po zakupie", site: "LumiKids", project: "lumikids", category: "Automatyzacje", body: "Siedem dni po zrealizowaniu zamówienia wysyła jeden mail z prośbą o ocenę, a za opinię jednorazowy kod rabatowy ważny 60 dni. Ślad zostaje w notatkach zamówienia." },
  { name: "Porzucone koszyki", site: "LumiKids", project: "lumikids", category: "Automatyzacje", body: "Zapisuje porzucone koszyki we własnej tabeli, wysyła jedno przypomnienie i odtwarza koszyk z linku w mailu." },
  { name: "Strona główna składana z bazy", site: "Mebloweporady.pl", project: "mebloweporady", category: "Automatyzacje", body: "Zastąpiła Elementor. Nowe wpisy, liczniki i działy tematyczne pojawiają się same, z pamięcią podręczną odświeżaną co 6 godzin." },
  { name: "Feed produktowy do Google Merchant", site: "LumiKids", project: "lumikids", category: "Integracje i API", body: "Wystawia plik produktowy dla Zakupów Google, przypisuje kategorie sklepu do kategorii Google i pomija produkty bez SKU." },
  { name: "Ochrona zamówień za pobraniem", site: "LumiKids", project: "lumikids", category: "Integracje i API", body: "Integracja zamówień cofała status opłaconych pobrań, a sklep po godzinie je anulował. Wtyczka blokuje taką zmianę przez REST API i zostawia notatkę w zamówieniu." },
  { name: "Meta SEO przez REST API", site: "Serwis windykacyjny, producent mebli", category: "Integracje i API", body: "Udostępnia tytuły i opisy Yoast w REST API do odczytu i zapisu, żeby setki stron dało się poprawić skryptem zamiast klikania w panelu." },
  { name: "GA4 z trybem zgody i baner cookies", site: "Kosmoteka", project: "kosmoteka", category: "Integracje i API", body: "Analityka startuje dopiero po zgodzie (Consent Mode v2), pomija zalogowanych administratorów, a lekki baner zastępuje ciężką wtyczkę cookies." },
  { name: "Katalog części po marce, modelu i generacji", site: "Sklep z częściami samochodowymi (wdrożenie w toku)", category: "WooCommerce", body: "Drzewo pojazdów we własnej taksonomii, adresy marka, model, grupa, wyszukiwarka po numerze OEM i formularz VIN. Synchronizacja z BaseLinkerem zostaje nietknięta." },
  { name: "Karta produktu z logo marek", site: "Kosmoteka", project: "kosmoteka", category: "WooCommerce", body: "Logo producenta, parametry modelu ze słownika specyfikacji jako etykiety, ciemna galeria i przyklejony przycisk zakupu na telefonie." },
  { name: "Zdjęcia produktów bez tła", site: "Kosmoteka", project: "kosmoteka", category: "WooCommerce", body: "Gdy na serwerze jest wersja zdjęcia z przezroczystym tłem, sklep sam ją podstawia w miniaturach i na karcie produktu." },
  { name: "Opinie o sklepie", site: "LumiKids", project: "lumikids", category: "WooCommerce", body: "Oceny od 1 do 5 gwiazdek z moderacją i oznaczeniem zweryfikowanego zakupu. Slider z opiniami pokazuje się sam, gdy są co najmniej trzy." },
  { name: "Siedem kalkulatorów", site: "Mebloweporady.pl", project: "mebloweporady", category: "Treści i UX", body: "Kuchnia na wymiar, farba, panele, płytki, tapeta i inne. Każdy wstawiany krótkim kodem we wpisie, z osobnym skryptem ładowanym tylko tam, gdzie jest potrzebny." },
  { name: "Szablon artykułu", site: "Mebloweporady.pl", project: "mebloweporady", category: "Treści i UX", body: "Do każdego z ponad 400 poradników dokłada spis treści, lead, rozwijane FAQ, notkę o autorze i powiązane wpisy." },
  { name: "Polskie komunikaty formularzy", site: "LumiKids", project: "lumikids", category: "Treści i UX", body: "Tłumaczy na polski komunikaty walidacji formularzy przeglądarki i zabezpieczenia hCaptcha, które klient widział po angielsku." },
  { name: "Tarcza formularzy i logowania", site: "Serwis windykacyjny", category: "Bezpieczeństwo", body: "reCAPTCHA v3, ukryte pole na boty, pułapka czasowa, limit zgłoszeń i filtry treści dla formularzy, do tego zamknięte XML-RPC i utwardzone logowanie." },
];
