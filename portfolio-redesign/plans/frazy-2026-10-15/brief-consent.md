Użyj skilla Mistrz Blogowania.

Zadanie: napisz od zera nową stronę usługową „Wdrożenie Consent Mode v2 i GA4 w WordPress i WooCommerce” na stronie freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl/uslugi/wdrozenie-consent-mode-v2), a pod nią blok poradnikowy. Pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Fakty: załączone fakty-consent.md i fakty-kanoniczne.md. Nie korzystaj z innych faktów o Marcinie ani o Google.

Fraza główna: „wdrożenie Consent Mode v2” (w METATITLE i H1 naturalnie). Wspierające: consent mode v2 jak wdrożyć, consent mode v2 WordPress, consent mode v2 WooCommerce, wdrożenie GA4, baner cookies a GA4, śledzenie konwersji WooCommerce, pixel Meta i Conversions API. Czytelnik: właściciel sklepu albo firmy, który puszcza reklamy Google lub Meta (albo ma to robić agencja) i słyszy, że bez Consent Mode traci pomiar i remarketing; albo ma baner cookies i GA4, ale nie wie, czy działa to poprawnie. Kąt: baner cookies to nie wszystko; liczy się, czy tagi naprawdę czekają na zgodę i czy sygnał zgody dociera do Google, a zakupy liczą się raz. Wdrażam stronę techniczną i sprawdzam ją w narzędziach, decyzje prawne zostawiam prawnikowi. Dowody: Kosmoteka (własna wtyczka GA4 z trybem zgody, pomijanie administratorów, lekki baner zamiast ciężkiej wtyczki), LumiKids (Pixel Manager po cichu wyłączał wtyczkę Meta i Conversions API, naprawa jednym polem bez kupowania płatnej wersji), marcinsiwonia.pl (GA4 dopiero po zgodzie).

## Anty-kanibalizacja
Na stronie są osobne usługi: audyt sklepu WooCommerce (szeroki przegląd), naprawa sklepu WooCommerce, Google Merchant Center i feed produktowy, przyspieszanie stron WordPress, opieka WordPress. Ta strona to TYLKO zgody, Consent Mode, GA4, pixel Meta i pomiar zakupów. Inne usługi odeślij jednym zdaniem z linkiem. Nie obiecuj zgodności z RODO ani „odzyskania” konkretnej ilości danych. Kampanii reklamowych nie prowadzę.

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak, bez komentarzy)
Najpierw tylko część STRONA. Część BLOK napiszesz, gdy napiszę „dalej”.

=== STRONA: wdrozenie-consent-mode-v2 ===
METATITLE: … (maks. 60 znaków ze spacjami, zaczyna się od frazy głównej)
METADESCRIPTION: … (140-155 znaków, z frazą główną)
H1: … (co + dla kogo, bez sloganu, bez „Wrocław”)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity: 1) fraza główna raz i problem, który rozwiązuję; 2) dowód z FAKTÓW z nazwaną realizacją i jednym konkretem; 3) jak pracuję]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4 pozycje, tytuł informacyjny, nie slogan)
PROCES:
- Tytuł: … | Treść: … (dokładnie 4 kroki, tytuły bez numerów)
FAQ:
- P: … | O: … (10 pytań, odpowiedzi 2-4 zdania, pytania tak, jak pyta właściciel sklepu)
CTA: … (jedno krótkie zdanie na baner końcowy)

=== BLOK: wdrozenie-consent-mode-v2 ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity; pierwsze zdanie mówi wprost, co czytelnik tu znajdzie]
## [sekcja] (6 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; dokładnie jedna tabela Markdown z nagłówkiem)

Tematy sekcji bloku (nagłówki napisz po swojemu):
1. Cztery zgody w Consent Mode v2 i co wyłącza każda z nich (tabela: zgoda | co obejmuje | co się dzieje przy odmowie: ad_storage, analytics_storage, ad_user_data, ad_personalization)
2. Tryb podstawowy czy zaawansowany: czym się różnią i kto o tym decyduje (z FAKTÓW; bez rozstrzygania prawnego)
3. Najczęstsze błędy wdrożenia, które widzę w WordPressie i WooCommerce (lista z FAKTÓW: tag dwa razy, tagi przed zgodą, sygnał nie dociera, zdublowane zakupy, zakup bez wartości, ciężka wtyczka cookies)
4. Pixel Meta i Conversions API: dlaczego dwie wtyczki naraz potrafią wyłączyć pomiar (przykład LumiKids z FAKTÓW)
5. Lekki baner zamiast ciężkiej wtyczki: zgoda bez spowalniania strony (przykład Kosmoteki i marcinsiwonia.pl z FAKTÓW)
6. Jak sprawdzam, że działa, i co przygotować (Tag Assistant, zakładka sieci, raport w czasie rzeczywistym GA4, Menedżer zdarzeń Meta; dostępy: GA4, Google Ads, Meta, panel WordPress; tekst banera i polityki od prawnika lub z obecnej polityki)

## Linki (Markdown dokładnie w tej postaci, każdy najwyżej raz)
Strona (łącznie 3): [Kosmoteka](/projekty/kosmoteka), [audyt sklepu WooCommerce](/uslugi/audyt-sklepu-woocommerce), [Google Merchant Center dla WooCommerce](/uslugi/google-merchant-center-woocommerce)
Blok (łącznie 2): [LumiKids](/projekty/lumikids), [przyspieszenie strony WordPress](/uslugi/przyspieszanie-stron-wordpress)

## Twarde zasady
- Długość: strona 650-850 słów bez FAQ, blok 1100-1400 słów.
- Zero kwot w złotych, zero stałych terminów (termin po rozpoznaniu; pierwsza ocena w 24 godziny robocze to jedyny dozwolony czas), zero statystyk rynkowych.
- Nie wymyślaj faktów, realizacji, liczb, opinii ani wyników. Realizacje tylko z FAKTÓW. Nazwy realizacji tylko te oznaczone „(można nazwać)”.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon (Consent Mode, tag, GA4, pixel, Conversions API, remarketing, Tag Manager, ping bez cookies) tylko z wyjaśnieniem w tym samym zdaniu, co to daje właścicielowi.
- Jeden głos: „ja” i „Ty”. Bez „Bez ukrytych kosztów”, „Zero niespodzianek”, „Idealnie”, aforyzmów, przytyków do konkurencji, podsumowań.
- FAQ o cenie: nie zaczynaj od „Wycena zależy od”, nazwij jeden główny czynnik kosztu (liczba narzędzi do podłączenia: GA4, Google Ads, Meta, inne); nie kończ formułką o indywidualnej wycenie.
- FAQ musi mieć pytania: czy Consent Mode jest obowiązkowy (opisz, co mówi polityka Google, bez porady prawnej), czy wystarczy wtyczka cookies z repozytorium, czy po wdrożeniu stracę dane w GA4 (część danych zastępuje modelowanie, bez liczb), czy zrobisz to w Google Tag Managerze, czy napiszesz politykę prywatności (nie, prawnik), czy działa to też dla pixela Meta.
- Każda sekcja bloku kończy się zdaniem w kontekście zlecenia, żeby blok nie dryfował w ogólny poradnik.
- Nie odwołuj się do briefu ani do plików.
