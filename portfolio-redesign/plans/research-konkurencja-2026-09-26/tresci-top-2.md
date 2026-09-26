# Analiza treści konkurencji: 8 kolejnych fraz (26.09.2026)

## Metoda i zastrzeżenia

- WebSearch działa na indeksie z USA, nie na Google.pl z lokalizacją Wrocław. Kolejność wyników jest przybliżona, pozycji w Google.pl nie sprawdzałem (NIESPRAWDZONE). marcinsiwonia.pl nie pojawił się w żadnym z 14 zapytań.
- Liczby słów konkurencji to szacunki modelu po WebFetch (±30%). Nasze liczby policzyłem skryptem z HTML `<main>` na żywej stronie (widoczny tekst z okruszkami, bez stopki).
- Nie udało się pobrać (403 albo ekran weryfikacji): parolex.pl, icommedia.pl, thelion.pl, nowoczesne-strony.com. Zastąpiłem je kolejnymi wynikami.
- Liczby i opinie podane przez konkurencję przepisuję tak, jak są na ich stronach. Nie weryfikowałem ich (NIESPRAWDZONE). Szczególnie: opinie „Marek Kowalski, Anna Nowak, Piotr Wiśniewski” na codescriptum.pl wyglądają na przykładowe dane, a wyniki na hauerpower.com (np. „z 11% do 34% rezerwacji bezpośrednich”) nie mają podpisanego obiektu.
- Wszystkie nasze strony usługowe (`/uslugi/*`) mają ten sam szablon: 1 case, 4 kafelki „co dostajesz”, 3 do 4 kroki, 4 do 7 pytań FAQ, 545 do 947 słów. Strony branżowe mają ~1300 słów i pełniejszą strukturę (diagnoza, zakres, dowód, „kiedy to nie u mnie”, wycena bez kwot).

**Błędy znalezione przy okazji (do poprawy od razu):**
- `/uslugi/nowoczesne-strony-internetowe`: w leadzie pod H1 widać surowy markdown `[Stron WordPress](/uslugi/tworzenie-stron-wordpress)` i `[Stron Next.js](/uslugi/aplikacje-nextjs)`, w FAQ „Jaki stack pod spodem?” surowe `[w usłudze Strony Next.js](...)`.
- `/uslugi/nowoczesna-strona-firmowa-2026`: w FAQ „Ile czasu zajmuje wdrożenie?” surowe `[aplikacje Next.js](/uslugi/aplikacje-nextjs)`. Ta sama strona mówi „WordPress z własnym motywem (najtaniej)”, a w procesie „Next.js App Router + Sanity CMS + Vercel deploy” i „makiety w Figmie, prototyp animacji”. Dla małej firmy to sprzeczny komunikat.

---

## 1. „opieka nad stroną WordPress” → /uslugi/opieka-wordpress

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| initsoft.pl/opieka-wordpress/ | ~2200 | 11 | 6 | tak (300/650/1000 zł/mc) | 5,0 z 15 opinii Google, 3 realizacje (w tym odwirusowanie), reakcja do 24 h (Premium), monitoring 24/7, bez okresu wypowiedzenia |
| calmsite.pl/opieka-nad-strona-wordpress-cennik/ | ~3200 | 22 | 9 | tak (299–899 zł/mc netto) | 35 opinii z nazwiskami, SLA per pakiet (3 dni rob. → 8 h rob.), „naprawimy albo nie płacisz”, 14 dni gwarancji zwrotu |
| naprawa-wordpress.pl/opieka-wordpress/ | ~650 | 6 | 4 | nie | firma z nazwy (SysGroup), jasne granice odpowiedzialności, brak portfolio |
| **nasza** | **689** | 4 | 6 | nie | 1 case (LumiKids), reakcja do 2 h w dni robocze, rezygnacja z końcem miesiąca, raport miesięczny |

**Luki w treści:** brak sekcji „co mieści się w banku godzin” z przykładami zadań (initsoft: „zadania na 15–30 minut / 1–2 godziny”); brak „kiedy opieka się nie opłaca”; brak opisu przejęcia strony od innej firmy krok po kroku (calmsite: 3 kroki); brak sekcji „czego opieka nie obejmuje”; brak zakresów reakcji dla różnych typów zgłoszeń w formie tabeli; brak odpowiedzi „po co opieka, skoro jest AI”.

**FAQ, których nie mamy:** Czy niewykorzystane godziny przechodzą na kolejny miesiąc? / Co, jeśli strona padnie w środku nocy albo w weekend? / Czy opiekujesz się stronami, których nie robiłeś? (mamy wariant) / Czy mogę zmienić pakiet w trakcie trwania umowy? / Co się dzieje, gdy wykorzystam limit godzin specjalisty? / Czy są jakieś ukryte koszty? / Po co mi opieka, skoro mogę poprosić AI o zmiany na stronie? / Czy opieka obejmuje pilną naprawę?

**Portfolio:** initsoft pokazuje 3 realizacje z opisem problemu technicznego, calmsite zastępuje case wolumenem opinii. My mamy 1 case sklepu, bez liczb (np. ile aktualizacji, ile incydentów, uptime).

**Rekomendacje:**
1. Sekcja „Od czego zależy koszt opieki”: typ strony (wizytówka / blog / WooCommerce), liczba wtyczek, częstotliwość zmian, wielkość banku godzin, wymagany czas reakcji. Bez kwot.
2. Blok „Co zmieścisz w banku godzin” z 6–8 przykładami zadań i orientacyjnym czasem.
3. Dopisać „Kiedy opieka się nie opłaca” i „Czego opieka nie obejmuje” (uczciwość działa na stronach branżowych, tu jej brak).
4. Dopisać 4 pytania FAQ: godziny niewykorzystane, awaria w weekend, limit godzin, AI zamiast opieki. Odpowiedzi tylko po ustaleniu faktów z właścicielem.
5. W case LumiKids dodać liczby, jeśli właściciel je ma (uptime, liczba aktualizacji przetestowanych, czas przywrócenia). NIESPRAWDZONE.

---

## 2. „przyspieszenie strony WordPress” → /uslugi/przyspieszanie-stron-wordpress

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| speedyweb.pl/optymalizacja-predkosci-wordpress/ | ~2900 | 10 | 6 | tak (od 800 / 1200 zł netto) | 7 opinii z nazwiskiem i domeną, 5/5 z 27, 30 dni gwarancji, bez zaliczki, darmowy audyt |
| wp-opieka.pl/przyspieszenie-i-optymalizacja-wordpress-woocommerce/ | ~2100 | 10 | 6 | nie | 500+ przyspieszonych witryn, 4,9 z 33 opinii, 40+ logotypów, darmowy audyt |
| wpplan.pl/uslugi/przyspieszanie-dzialania-wordpress/ | ~1200 | 7 | 3 | tak (plany) | przed/po jako liczby (5,0 s → 1,2 s), 5/5 z 13 głosów |
| **nasza** | **723** | 4 | 6 | nie | 1 case (Kosmoteka) bez liczb przed/po, audyt w 48 h, typowe LCP 5–8 s → poniżej 2,5 s |

**Luki w treści:** H1 obiecuje „liczby przed i po”, ale na stronie nie ma ani jednej pary liczb z realnej realizacji; brak sekcji „jak sprawdzić, czy strona jest wolna” (samodzielny test w PageSpeed); brak listy technik jako H3 (baza danych, wersja PHP, analiza wtyczek, leniwe ładowanie są u wszystkich trzech); brak „jak utrzymać efekt” (mamy jedno zdanie); brak listy dostępów potrzebnych do startu.

**FAQ, których nie mamy:** Czy strona będzie dostępna podczas optymalizacji? (odpowiedź jest w innym pytaniu) / Jakiego wyniku w PageSpeed Insights mogę się spodziewać? / Jakie dane są potrzebne do przeprowadzenia optymalizacji? / Jak utrzymać szybkie ładowanie strony www? / Jak sprawdzić, czy moja strona jest wolna? / Jakich narzędzi używacie do optymalizacji? / Czy przyśpieszanie strony jest na stałe? / Czy są strony, których nie przyśpieszycie?

**Portfolio:** konkurencja też słabo: wpplan pokazuje przed/po jako liczby, wp-opieka tylko deklaruje „porównujemy przed i po”. To łatwa przewaga: zrzut PageSpeed przed/po z jednej realizacji wygrywa z całą trójką.

**Rekomendacje:**
1. W case Kosmoteka dodać realne liczby przed/po (LCP, INP, CLS, waga strony) i dwa zrzuty PageSpeed, jeśli właściciel ma pomiar „przed”. Bez danych nie pisać liczb. NIESPRAWDZONE.
2. Sekcja „Od czego zależy koszt”: liczba szablonów do sprawdzenia, page builder, WooCommerce i checkout, hosting, liczba wtyczek.
3. Sekcja „Sprawdź sam w 2 minuty” (PageSpeed, CrUX, co znaczą progi Core Web Vitals) z CTA do audytu.
4. Dopisać FAQ: dostępy, utrzymanie efektu, strony, których nie da się przyspieszyć (np. ciężki builder), oczekiwany wynik w PageSpeed.

---

## 3. „wdrożenia AI w firmie” → /uslugi/wdrozenia-ai

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| kcmobile.pl/wdrozenia-ai/ | ~4200 | 14 | 10 | tak (od 3000 / 8000 zł + 1500 zł/mc) | imienny założyciel z bio, 30 dni wsparcia, sekcje o AI Act, RODO, prompt injection (OWASP), kalkulator kosztów |
| codescriptum.pl/automatyzacja-procesow-ai/ | ~4200 | 12 | 12 | tak (od 2000 zł, 6–20 tys. zł) | case biura rachunkowego z liczbami (−75% czasu, +20 klientów), 50+ projektów, NDA, odpowiedź w 24 h, kalkulator ROI (opinie NIESPRAWDZONE) |
| studiokozubek.pl/ai-dla-firm | ~1200 | 8 | 5 | tak (2900–15 000 zł) | terminy 1–8 tyg., RODO i serwery w UE, brak portfolio |
| **nasza** | **545** | 4 | 4 | nie | 1 case (cojestpolskie.pl, AI + kontrola w KRS/CRBR), PoC w 2 tygodnie, 80% pomysłów odrzucanych na discovery |

**Luki w treści:** najkrótsza z naszych stron przy najdłuższych stronach konkurencji; brak sekcji „co można zautomatyzować” z listą procesów (maile, dokumenty, oferty, obsługa klienta); brak „kiedy wystarczy automatyzacja bez AI” (n8n, Make); brak sekcji o bezpieczeństwie danych rozpisanej szerzej niż jedno FAQ (RODO, gdzie trafiają dane, AI Act, błędy modelu); brak sposobu liczenia zwrotu z inwestycji; brak listy, co klient przygotowuje do bazy wiedzy; brak integracji ze starymi systemami (Subiekt, Excel). Zdanie „Spadek czasu obsługi nawet 70%” nie ma źródła ani case (NIESPRAWDZONE, do potwierdzenia lub usunięcia).

**FAQ, których nie mamy:** Czy moja firma jest gotowa na wdrożenie AI? / Jak długo trwa wdrożenie AI? / Jakich technologii AI używacie? / Co jeśli AI popełni błąd? / Czy potrzebuję dużych zbiorów danych? / Jakie procesy można zautomatyzować z AI? / Czy oferujecie wsparcie po wdrożeniu? / Jak zmierzyć ROI z automatyzacji AI? / Od czego zacząć automatyzację biznesu? / n8n, Make czy Zapier: które narzędzie wybrać? / Czy automatyzacja AI opłaca się małej firmie? / Czy muszę zmieniać systemy, których używam? / Mam stary system (np. Subiekt, WAPRO, Excel). Czy da się to zintegrować?

**Portfolio:** tylko codescriptum ma case z liczbami. Nasz case cojestpolskie.pl jest mocny merytorycznie (kontrola w rejestrach), ale bez liczb (ile wpisów, ile czasu na markę przed/po).

**Rekomendacje:**
1. Rozbudować do ~1500–2000 słów: sekcje „Co da się zautomatyzować”, „Kiedy AI nie jest potrzebne”, „Bezpieczeństwo danych i AI Act”, „Jak liczę zwrot”.
2. Sekcja „Od czego zależy koszt”: PoC czy produkcja, liczba źródeł wiedzy, integracje, wolumen zapytań (koszt API), monitoring.
3. Do case cojestpolskie.pl dodać liczby z projektu właściciela (liczba sprawdzonych marek, czas researchu jednej marki przed/po). NIESPRAWDZONE.
4. Dopisać 6 pytań FAQ: gotowość firmy, czas wdrożenia, błędy AI, dane do bazy wiedzy, stare systemy, wsparcie po wdrożeniu.
5. Zweryfikować z właścicielem „nawet 70%” i „2-3x”; bez źródła usunąć albo podpiąć pod konkretny case.

---

## 4. „strona internetowa dla małej firmy” → /uslugi/nowoczesna-strona-firmowa-2026

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| ansite.pl/strony-internetowe-wroclaw/ | ~3000 | 8+ | 10 | tak (od 2900 / 3900 / 8900 zł netto) | 6 realizacji z nazwą (m.in. szpital z WCAG 2.1), 12 mies. gwarancji, Google Partner, teksty SEO w usłudze |
| promo-peak.pl/oferta/tworzenie-stron-internetowych/dla-malej-firmy/ | ~2700 | 14 | 6 | tak (od 3499 / 4499 zł netto) | 12 mies. gwarancji, domena i hosting na rok, odpowiedź w 24 h, właściciel z imienia |
| webikom.pl | ~1200 | 6 | 6 | tak (od 599 zł) | dane rejestrowe firmy, termin ok. 2 tygodni, brak opinii |
| **nasza** | **690** | 4 | 6 | nie | 4 realizacje (Piontek + 3), wycena w 24 h, 60 dni opieki, Lighthouse 90+, szkolenie z edycji |

**Luki w treści:** brak sekcji „dlaczego mała firma potrzebuje strony” i „jakie funkcje może mieć” (promo-peak ma obie); brak informacji o domenie, hostingu i poczcie (kto zakłada, czyje są); brak jasnej odpowiedzi, kto pisze teksty i robi zdjęcia; brak kosztów utrzymania po wdrożeniu; brak porównania wizytówka vs strona firmowa vs sklep; komunikat techniczny (Next.js, Sanity, Figma, prototyp animacji) nie pasuje do właściciela małej firmy i przeczy „WordPress najtaniej”.

**FAQ, których nie mamy:** Jak długo trwa proces tworzenia strony internetowej? (mamy wariant) / Czy firma musi mieć stronę internetową? / Czy strona internetowa będzie widoczna w wyszukiwarkach? / Jakie koszty są związane z utrzymaniem strony internetowej? / Czy pomagacie w zakupie domeny i hostingu? / Czy będę mógł samodzielnie edytować treści na stronie? / Czy oferujecie wsparcie i aktualizacje po zakończeniu projektu? / Czy mogę zamówić stronę internetową z przygotowaniem treści? / Czym jest hosting i domena? / Po co SSL?

**Portfolio:** ansite i my pokazujemy karty realizacji bez liczb. Nasza przewaga: realizacja małej firmy usługowej z opisem, co było celem. Brakuje efektu po wdrożeniu (zapytania, widoczność lokalna).

**Rekomendacje:**
1. Naprawić surowy markdown w FAQ i ujednolicić stack: dla małej firmy prowadzić WordPress, Next.js jako opcję.
2. Sekcja „Od czego zależy koszt strony małej firmy”: liczba podstron, teksty (klient czy wykonawca), zdjęcia, blog, formularze, wersje językowe, migracja starej strony.
3. Blok „Co jest Twoje, a co opłacasz osobno”: domena, hosting, poczta, roczne koszty utrzymania bez kwot, tylko pozycje.
4. Dopisać FAQ: domena i hosting, teksty, koszty utrzymania, samodzielna edycja, widoczność w Google.
5. Rozbudować do ~1500 słów, zachowując odróżnienie od /uslugi/tworzenie-stron-www (anty-kanibalizacja: ta strona ma mówić językiem właściciela małej firmy, tamta ogólnie).

---

## 5. „nowoczesne strony internetowe” → /uslugi/nowoczesne-strony-internetowe

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| yeswhite.com/oferta/strony-internetowe/ | ~3500 | 12 | 14 | nie („od kilku tysięcy zł”) | 12+ realizacji z nazwą klienta, rok darmowego wsparcia, WCAG 2.2 AA, 10 opisanych modułów |
| b-w-d.pl (freelancer, Wrocław) | ~1200 | 5 | 0 | nie | 3 case z liczbami (1. miejsce na „pracownia sztuki Wrocław” w 3 tyg., 1965 wyświetleń w Mapach), 5/5 Google, darmowa wycena |
| projektweb.pl/oferta/strony-internetowe/ | ~1100 | 3 | 0 | tak (1800 zł) | brak portfolio na stronie, „bez gotowych szablonów” |
| **nasza** | **663** | 4 | 6 | nie | 1 case (cojestpolskie.pl, Lighthouse 95–100), obsługa reduced motion |

**Luki w treści:** nasza strona mówi do projektanta (ScrollTrigger, R3F, OKLCH, tokeny Tailwind), konkurencja do właściciela firmy (UX, konwersja, pierwsze wrażenie, mobile); brak sekcji „co robi nowoczesna strona dla biznesu” (szybkość, zaufanie, zapytania); brak dostępności WCAG jako cechy nowoczesnej strony (yeswhite ma osobny H2); brak listy materiałów od klienta i tematu zdjęć; brak opisu wsparcia po wdrożeniu i abonamentów.

**FAQ, których nie mamy:** Ile trwa stworzenie strony www? (mamy wariant) / Jak wyglądają prace projektowe? / Jakie materiały muszę dostarczyć? / Czy warto zainwestować w indywidualny projekt strony? / Co zrobimy ze zdjęciami do strony, jeśli ich nie mam? / Czy moja strona będzie dostosowana do telefonów? / Czy strona będzie zoptymalizowana pod SEO? / Czy otrzymam wsparcie techniczne do strony? / Czy po wdrożeniu strony będę płacił dodatkowy abonament? / Kto zajmie się obsługą strony?

**Portfolio:** b-w-d.pl (mały freelancer z Wrocławia, bezpośredni odpowiednik) pokazuje przy każdej realizacji wynik w Google w formacie problem, rozwiązanie, efekt. My mamy jedną realizację z wynikiem Lighthouse, bez efektu biznesowego.

**Rekomendacje:**
1. Naprawić surowy markdown w leadzie i FAQ.
2. Dodać sekcję dla decydenta „Co zyskujesz na nowoczesnej stronie” (pierwsze wrażenie, szybkość mimo animacji, dostępność), a warstwę techniczną zostawić niżej.
3. Sekcja „Od czego zależy koszt”: zakres animacji, 3D, CMS, liczba szablonów podstron, własna logika.
4. Dodać 2–3 realizacje w formacie problem, rozwiązanie, efekt; efekt tylko z danych właściciela (GSC, zapytania). NIESPRAWDZONE.
5. Dopisać FAQ: materiały od klienta, zdjęcia, abonament po wdrożeniu, WCAG, telefony.

---

## 6. „integracja WooCommerce z BaseLinker” → /uslugi/integracja-woocommerce-z-baselinker

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| webixa.pl/…/woocommerce-integracja-z-baselinker/ | ~1200 | 10 | 5 | nie | 4 realizacje sklepów z nazwą (bez liczb), wycena w 48 h, lista kurierów, systemów księgowych i płatności |
| sklep-wp.com/integracja-baselinker-woocommerce/ | ~3500 | 8 | 0 | tak (od 350 zł netto, opieka od 190 zł/mc) | 350+ klientów, dane firmy, integracje ERP (Subiekt GT, Comarch, enova) |
| zrobiestrone.pl/integracja-sklepu-woocommerce-z-baselinker/ (poradnik z 2022 na stronie freelancera) | ~2800 | 11 | 0 | ceny BaseLinkera | instrukcja krok po kroku: klucze REST API, ceny, stany, import produktów |
| **nasza** | **947** | 4 | 7 | nie | case Kosmoteka (powiązania magazynów z hurtownią), test zamówienia end-to-end, konto BaseLinkera zostaje u klienta |

**Luki w treści:** nasza strona jest merytorycznie najlepsza z pobranych (kierunki synchronizacji, hurtownie, diagnoza błędu 401). Brakuje: kurierów i etykiet (nazwy integracji), faktur i systemów księgowych, innych marketplace'ów niż Allegro (Amazon, eBay, Ceneo), ERP i programów magazynowych (Subiekt), bezpieczeństwa integracji, opcji „zrobię to sam, a Ty sprawdzisz”.

**FAQ, których nie mamy:** Czy integracja WooCommerce z Baselinker jest bezpieczna? / Czy mogę samodzielnie zintegrować WooCommerce z Baselinker? / Jakie są korzyści z integracji WooCommerce z Baselinker?

**Portfolio:** webixa pokazuje 4 karty sklepów bez liczb. Nasz case Kosmoteka jest opisany dokładniej niż u konkurencji, ale bez liczb (ile pozycji w katalogu hurtowni, ile w sklepie, ile zamówień/mies. bez ręcznej pracy).

**Rekomendacje:**
1. Dodać do case Kosmoteka 2–3 liczby od właściciela (np. liczba produktów wybranych z katalogu hurtowni). NIESPRAWDZONE.
2. Sekcja „Co jeszcze podepnę w BaseLinkerze”: kurierzy i etykiety, faktury, marketplace'y, program magazynowy. Tylko to, co właściciel faktycznie konfigurował.
3. Sekcja „Od czego zależy koszt” jest w FAQ; wyciągnąć ją do osobnego bloku (kanały, hurtownie, stan katalogu, liczba wariantów).
4. Dopisać FAQ o samodzielnej integracji (uczciwie: połączenie da się zrobić samemu, problemem są kierunki synchronizacji) i o bezpieczeństwie kluczy API.

---

## 7. „tworzenie stron dla kancelarii prawnych” → /tworzenie-stron-dla-kancelarii-prawnych

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| undicom.pl/…/strony-dla-prawnikow | ~2900 | 9 | 8 | nie | 3 case kancelarii z opisem + 6 miniatur, 50+ stron dla prawników, 4,9 z 187 opinii z nazwiskami, odpowiedź w 1–2 dni |
| marketingprawnikow.pl/strony-internetowe/ | ~2700 | 11 | 6 | tak (3000–8000 zł netto, audyt 2000 zł) | 100+ stron dla kancelarii, 10 opinii prawników z nazwiskiem, założyciele po prawie UW, copywriterzy prawni, wycena w 24 h, etyka w stopce |
| studioi.pl/…/prawnicy-i-kancelarie-prawne | ~1800 | 10 | 4 | tak (450 / 798 zł) | 4 kancelarie z nazwą i linkiem, RODO, Consent Mode v2, strefa dokumentów |
| **nasza** | **1297** | 9 | 9 | nie | 2 realizacje (Piontek, Ceny Notarialne), 25+ wdrożeń WP/Woo, Lighthouse 90+, „kiedy to nie u mnie”, etyka zawodowa, bezpieczny formularz |

**Luki w treści:** nasza strona jako jedyna mówi wprost o etyce i o bezpiecznym formularzu, to przewaga. Brakuje: podziału na zawody (adwokat, radca, notariusz, marka osobista prawnika) jako H3 (undicom); informacji, kto pisze teksty prawnicze i czy wykonawca rozumie terminologię (marketingprawnikow); strefy dokumentów i wzorów do pobrania (studioi); umawiania konsultacji online; poczty w domenie kancelarii; opinii prawnika o współpracy.

**FAQ, których nie mamy:** Czy kancelaria musi mieć stronę internetową? / Co powinna zawierać strona internetowa kancelarii? / Czy tworzycie strony dla adwokatów i radców prawnych? / Czy projekt strony jest indywidualny? / Czy zakładacie hosting, domenę, pocztę firmową? / Czy w ramach strony otrzymam adres e-mail? / Nie mam jeszcze tekstów ani profesjonalnych zdjęć. Czy możecie pomóc? / Czy dla nowej kancelarii wystarczy prosta strona wizytówka? / Dlaczego tak drogo?

**Portfolio:** konkurencja pokazuje 4–9 stron kancelarii ze zrzutami i linkami do żywych stron, plus opinie prawników. My mamy 1 kancelarię + portal notarialny, bez opinii klientki.

**Rekomendacje:**
1. Poprosić Marię Piontek o krótką opinię z imieniem i nazwiskiem (NIESPRAWDZONE, czy się zgodzi) i dodać zrzut strony przy realizacji.
2. Dodać H3 „Strona dla adwokata / radcy prawnego / notariusza / prawnika solo” z różnicami (samorząd, zasady informowania).
3. Dopisać FAQ: teksty i zdjęcia, poczta w domenie, wizytówka dla nowej kancelarii, czy musi mieć stronę.
4. Rozważyć moduł umawiania konsultacji online i strefę dokumentów jako opcje zakresu, jeśli właściciel je robi.

---

## 8. „tworzenie stron dla hoteli” → /tworzenie-stron-dla-hoteli-i-pensjonatow

| Strona | Słowa | H2 | FAQ | Ceny | Zaufanie |
|---|---|---|---|---|---|
| hauerpower.com/strony-internetowe-dla-hoteli | ~3800 | 12 | 5 | tak (od 5000 / 6000 / 10 000 zł) | wyniki z liczbami (+40% rezerwacji bezpośrednich, 11% → 34%, 0,8 s), opinie z imieniem i funkcją, 200+ projektów, channel manager (NIESPRAWDZONE) |
| 2heads.agency/strony-internetowe-dla-hoteli-i-pensjonatow/ | ~2800 | 11 | 10 | nie | 5/5 z 15 opinii, 18 logotypów, GA4 + Clarity + Consent Mode, brak hoteli w portfolio |
| undicom.pl/…/strony-dla-hoteli | ~2100 | 13 | 0 | nie | 4,9 z 187 opinii, 2500+ projektów, 1 realizacja z opinią (Kajaki Elko) |
| **nasza** | **1320** | 9 | 9 | nie | 2 obiekty (Złota Grota, Maciejanka), prowizja portali, synchronizacja kalendarzy, „kiedy to nie u mnie” |

**Luki w treści:** mamy dobrą bazę (prowizje, podwójne rezerwacje, zasady pobytu). Brakuje: nazw i typów narzędzi (silnik rezerwacji, channel manager, parity pricing) wyjaśnionych prostym językiem; schema Hotel i rich snippets; wersji językowych z hreflang jako osobnej sekcji; bramek płatności; voucherów i pakietów prezentowych; analityki rezerwacji (skąd przyszła rezerwacja, GA4, Consent Mode); zgodności z WCAG.

**FAQ, których nie mamy:** Czy integrujecie systemy rezerwacji? (mamy wariant „jaki silnik wybrać”) / Czy strona będzie działać na telefonach? / Co z SEO dla hotelu? / Czy mogę samodzielnie zarządzać treścią strony www? / Czy strona www będzie zgodna z RODO? / Jak mogę śledzić ruch i zachowania gości na stronie? / Czy oferujecie wsparcie po wdrożeniu strony dla hotelu? / Czy tworzycie strony dopasowane do charakteru hotelu lub pensjonatu?

**Portfolio:** hauerpower pokazuje przy case liczby rezerwacji i opinię z funkcją (bez nazwy obiektu, NIESPRAWDZONE). My mamy 2 obiekty opisane jednym zdaniem, bez zrzutów i bez liczb.

**Rekomendacje:**
1. Przy Złotej Grocie dodać zrzut ścieżki rezerwacji i 1–2 liczby od właściciela obiektu (udział rezerwacji bezpośrednich, PageSpeed). NIESPRAWDZONE.
2. Sekcja „Silnik rezerwacji, channel manager, parity: co to jest i czego potrzebujesz” (3 akapity bez nazw marek, jeśli właściciel nie ma listy wdrożonych).
3. Dopisać FAQ: RODO, śledzenie rezerwacji w analityce, wsparcie po wdrożeniu, samodzielna edycja pokoi i cen.
4. Dodać wzmiankę o schema Hotel i wersjach językowych do sekcji „Jak tworzę”.

---

## Top 10 zmian w treści dla wszystkich 8 stron (wg wpływu)

1. **Naprawić surowy markdown** na /uslugi/nowoczesne-strony-internetowe (lead + FAQ) i /uslugi/nowoczesna-strona-firmowa-2026 (FAQ). Widoczny błąd psuje zaufanie i linkowanie wewnętrzne. Koszt: minuty.
2. **Liczby przed/po w case** tam, gdzie H1 je obiecuje: Kosmoteka na stronie przyspieszania (zrzuty PageSpeed). Żaden z trzech konkurentów nie pokazuje zrzutów, to najtańsza przewaga. Tylko z realnych pomiarów właściciela.
3. **Sekcja „Od czego zależy koszt”** jako osobny blok na 6 stronach usługowych (dziś tylko w FAQ). Strony branżowe już to mają, więc wzorzec jest gotowy. Zastępuje cenniki, które pokazuje 15 z 24 pobranych stron konkurencji.
4. **Rozbudowa stron usługowych z ~550–950 do ~1500–2000 słów** z użyciem struktury stron branżowych (diagnoza problemów, zakres, „kiedy to nie u mnie”). Najpilniej: wdrożenia AI (545 słów vs 4200 u top 2).
5. **Opinie klientów z imieniem i nazwiskiem** (Piontek, LumiKids, Złota Grota, Kosmoteka), jeśli klienci się zgodzą. U konkurencji to najczęstszy element zaufania, u nas brak na wszystkich 8 stronach. NIESPRAWDZONE.
6. **Dopisać 3–6 pytań FAQ na każdej stronie** z list powyżej, zwłaszcza o domenie i hostingu, tekstach i zdjęciach, wsparciu po wdrożeniu, dostępach i utrzymaniu efektu. Odpowiedzi wyłącznie z faktów od właściciela.
7. **Wdrożenia AI: sekcja o bezpieczeństwie danych, RODO i AI Act** oraz „kiedy wystarczy automatyzacja bez AI”. Obie wiodące strony (kcmobile, codescriptum) mają je jako duże sekcje. Przy okazji potwierdzić albo usunąć „nawet 70%”.
8. **Ujednolicić komunikat strony dla małej firmy**: WordPress jako domyślny wybór, bez Figmy, Sanity i prototypu animacji w procesie; dodać blok „co jest Twoje, co opłacasz osobno”.
9. **Opieka WordPress: „co zmieścisz w banku godzin” i „kiedy opieka się nie opłaca”.** Initsoft pokazuje, że konkretne przykłady zadań i uczciwe ograniczenia sprzedają abonament bez cennika.
10. **Strony branżowe: podział na podtypy klienta** (adwokat / radca / notariusz; hotel / pensjonat / apartamenty) jako H3 oraz zrzuty realizacji z linkiem do żywej strony, jak u undicom i marketingprawnikow.

## Źródła

- https://initsoft.pl/opieka-wordpress/
- https://calmsite.pl/opieka-nad-strona-wordpress-cennik/
- https://naprawa-wordpress.pl/opieka-wordpress/
- https://www.speedyweb.pl/optymalizacja-predkosci-wordpress/
- https://wp-opieka.pl/przyspieszenie-i-optymalizacja-wordpress-woocommerce/
- https://wpplan.pl/uslugi/przyspieszanie-dzialania-wordpress/
- https://kcmobile.pl/wdrozenia-ai/
- https://codescriptum.pl/automatyzacja-procesow-ai/
- https://studiokozubek.pl/ai-dla-firm
- https://ansite.pl/strony-internetowe-wroclaw/
- https://promo-peak.pl/oferta/tworzenie-stron-internetowych/dla-malej-firmy/
- https://www.webikom.pl/
- https://yeswhite.com/oferta/strony-internetowe/
- https://b-w-d.pl/
- https://projektweb.pl/oferta/strony-internetowe/
- https://webixa.pl/tworzenie-sklepow-internetowych-woocommerce/integracje-woocommerce/woocommerce-integracja-z-baselinker/
- https://sklep-wp.com/integracja-baselinker-woocommerce/
- https://zrobiestrone.pl/integracja-sklepu-woocommerce-z-baselinker/
- https://undicom.pl/projektowanie-stron-internetowych/strony-dla-prawnikow
- https://marketingprawnikow.pl/strony-internetowe/
- https://studioi.pl/oferta/strony/branza/prawnicy-i-kancelarie-prawne
- https://www.hauerpower.com/strony-internetowe-dla-hoteli
- https://2heads.agency/strony-internetowe-dla-hoteli-i-pensjonatow/
- https://undicom.pl/projektowanie-stron-internetowych/strony-dla-hoteli
