# Tworzenie stron WordPress: co warto wiedzieć przed zleceniem

Tworzenie stron WordPress może oznaczać zupełnie różne rozwiązania. Jedna firma dostanie kupiony szablon z podmienionymi zdjęciami, druga stronę złożoną w Elementorze, a trzecia własny motyw zaprojektowany pod jej ofertę. Wszystkie będą działać na WordPressie, ale różnice zobaczysz przy pierwszej większej zmianie, aktualizacji albo próbie przyspieszenia strony.

Jeśli zamawiasz stronę firmową, warto wiedzieć, za co płacisz i co będziesz mógł zrobić samodzielnie po odbiorze. Wyjaśniam, kiedy WordPress ma sens, jak wybieram sposób wykonania, co wpływa na szybkość i bezpieczeństwo oraz jakie elementy uwzględniam w wycenie. Dzięki temu łatwiej zdecydujesz, jaką stronę warto zlecić dla Twojej firmy.

## Kiedy WordPress jest dobrym wyborem dla strony firmowej

WordPress sprawdza się przede wszystkim wtedy, gdy strona ma prezentować ofertę, zbierać zapytania i pozwalać właścicielowi samodzielnie aktualizować treści. Możesz dodawać usługi, zmieniać zdjęcia, publikować poradniki i rozbudowywać serwis bez zamawiania każdej zmiany u programisty.

To dobry wybór dla kancelarii, firmy usługowej, producenta czy lokalnego przedsiębiorstwa, które potrzebuje rozbudowanej oferty i bloga. Poszczególne podstrony mogą korzystać ze wspólnych układów, więc dodawanie kolejnych usług nie wymaga projektowania wszystkiego od początku.

Nie każdą funkcję trzeba jednak realizować w WordPressie. Jeśli głównym zadaniem serwisu ma być obsługa zaawansowanego panelu klienta, rozbudowane przetwarzanie danych albo działanie zbliżone do aplikacji, rozważam również inne technologie.

Sama możliwość doinstalowania wtyczki nie jest wystarczającym powodem, żeby wybierać WordPress. Ważne, jak często będziesz zmieniać treści, kto będzie obsługiwać panel i jakie funkcje naprawdę są potrzebne.

Przed wyceną sprawdzam więc, czy strona firmowa na WordPressie będzie rozwiązaniem wygodnym nie tylko w dniu uruchomienia, ale również podczas codziennej pracy.

## Gotowy szablon, Elementor czy własny motyw WordPress

Gotowy szablon pozwala szybko rozpocząć pracę, ponieważ zawiera przygotowane układy i elementy graficzne. Problem pojawia się, gdy firma potrzebuje sekcji, której autor szablonu nie przewidział. Trzeba wtedy dostosowywać istniejące rozwiązanie albo dokładać kolejne rozszerzenia.

Kreatory typu Elementor dają większą swobodę wizualną. Możesz przesuwać elementy i budować układy w panelu. Ta swoboda oznacza jednak również więcej ustawień, dodatkowy kod i zależność od konkretnego narzędzia.

Własny motyw tworzę pod zaakceptowany projekt. Nie dostajesz całego zestawu możliwych układów, tylko te, których Twoja strona rzeczywiście potrzebuje.

| Rozwiązanie | Szybkość działania | Edycja treści | Utrzymanie | Dla kogo |
| Kupiony szablon | Zależy od jakości motywu i dodatków | Według możliwości szablonu | Aktualizacje motywu i zgodności dodatków | Prosta strona z typowym układem |
| Kreator typu Elementor | Może wymagać dodatkowej optymalizacji | Duża swoboda, także zmiany układu | Aktualizacje kreatora i jego rozszerzeń | Strona często przebudowywana wizualnie |
| Własny motyw WordPress | Kod dopasowany do potrzeb strony | Pola odpowiadające konkretnym sekcjom | Kontrola nad kodem, rozwój przez programistę | Strona firmowa rozwijana przez lata |

Nie twierdzę, że każda strona z Elementorem musi być wolna. Wiele zależy od sposobu jej wykonania. Problemem bywa jednak ilość generowanego kodu i trudność w kontrolowaniu całej struktury.

Na własnym serwisie z ponad 400 poradnikami zastąpiłem stronę główną zbudowaną w Elementorze rozwiązaniem składanym z bazy danych przez własną wtyczkę. To przykład sytuacji, w której lepiej zaprogramować konkretny mechanizm niż nadal rozbudowywać kreator.

Szerzej opisuję te ograniczenia we wpisie [Elementor: dlaczego nie warto](/blog/elementor-dlaczego-nie-warto).

Zlecając mi nową stronę, otrzymujesz własny motyw z panelem edycji dopasowanym do projektu, a nie kolejny zestaw ustawień uniwersalnego kreatora.

## Co rzeczywiście przyspiesza stronę WordPress

Na szybkość strony wpływa znacznie więcej niż wybór hostingu. Liczą się rozmiary obrazów, ilość kodu, sposób ładowania czcionek, zewnętrzne skrypty i to, jak szybko serwer odpowiada na żądania.

Google ocenia doświadczenie użytkownika między innymi przez Core Web Vitals. W praktyce sprawdzają one, kiedy pojawia się główna zawartość, jak szybko strona reaguje na działania i czy elementy nie przesuwają się podczas ładowania.

Przy projektowaniu zwracam uwagę szczególnie na:

- Obrazy: odpowiednie rozmiary i formaty zamiast dużych plików pomniejszanych dopiero w przeglądarce.
- Kod motywu: ładowanie tylko tych elementów, które są potrzebne na konkretnej podstronie.
- Pamięć podręczną: ograniczenie konieczności generowania tej samej zawartości przy kolejnych odwiedzinach.
- Skrypty zewnętrzne: kontrolowanie narzędzi analitycznych, formularzy i dodatkowych bibliotek.

W nowych projektach nie instaluję kreatora tylko po to, żeby zbudować kilka sekcji. Własny motyw daje mi większą kontrolę nad tym, jakie zasoby pobiera przeglądarka.

Moim celem przed oddaniem jest Lighthouse 90+ na telefonie i LCP poniżej 2,5 s. LCP określa czas wyświetlenia głównego elementu strony. Na końcowy wynik wpływają jednak również hosting, treści i usługi zewnętrzne.

Zlecając stronę, dostajesz wdrożenie z pomiarem wydajności przed uruchomieniem, a nie wyłącznie zapewnieniem, że powinno działać szybko.

## Jak przygotowuję panel, żebyś mógł sam edytować stronę

Samodzielna edycja treści nie powinna oznaczać konieczności samodzielnego projektowania układu. Jeśli chcesz poprawić opis usługi, nie musisz mieć dostępu do ustawień szerokości kolumn, odstępów i sposobu wyświetlania elementów.

Do przygotowania panelu wykorzystuję ACF, czyli mechanizm dodawania własnych pól w WordPressie. Każdemu edytowalnemu elementowi przypisuję pole odpowiadające jego przeznaczeniu.

Jeżeli sekcja zawiera nagłówek, opis, zdjęcie i przycisk, w panelu możesz zobaczyć dokładnie te elementy. Zmieniasz zawartość, zapisujesz i sprawdzasz wynik na stronie.

Przy bardziej rozbudowanych układach przygotowuję pola pozwalające zarządzać powtarzalnymi elementami, na przykład listą usług czy pytaniami w FAQ. Nie musisz kopiować kodu ani ręcznie odtwarzać wyglądu następnej pozycji.

Ważne jest też ustalenie granic edycji. Jeśli sekcja ma zachować określony układ, nie udostępniam ustawień, które przypadkowo mogłyby go zniszczyć.

Po uruchomieniu prowadzę szkolenie online na Twojej stronie, pokazując dodawanie i aktualizowanie treści. Zlecając mi wdrożenie, otrzymujesz więc przygotowany panel oraz instruktaż jego codziennej obsługi.

## Kiedy własna wtyczka jest lepsza od kilku gotowych

Nie każda dodatkowa funkcja wymaga instalowania gotowej wtyczki. Czasem rozwiązanie dostępne w katalogu WordPressa zawiera wiele ustawień, integracji i modułów, chociaż potrzebujesz tylko jednego konkretnego działania.

Mam za sobą ponad 40 własnych wtyczek i mu-pluginów wdrożonych w 9 serwisach. Mu-plugin to rozszerzenie WordPressa uruchamiane automatycznie, bez zwykłego przełącznika aktywacji w panelu. Wykorzystuję takie rozwiązania między innymi do automatyzacji, SEO i GEO, integracji przez API, WooCommerce i bezpieczeństwa.

W jednym z własnych serwisów przygotowałem siedem kalkulatorów obsługiwanych przez jedną wtyczkę, w tym kalkulator kuchni na wymiar. Inna funkcja automatycznie dodaje do artykułów spisy treści, rozwijane pytania i odpowiedzi oraz powiązane wpisy.

Własny kod nie zawsze będzie lepszy. Jeśli istnieje sprawdzona wtyczka, która dokładnie odpowiada potrzebom projektu, jej wykorzystanie może być rozsądniejsze niż pisanie identycznej funkcji.

Warto jednak odróżnić wygodę instalacji od późniejszego utrzymania. Każdy dodatkowy komponent trzeba aktualizować, kontrolować pod kątem bezpieczeństwa i sprawdzać jego zgodność z pozostałymi elementami strony.

Przy wycenie oceniam, czy potrzebną funkcję lepiej wdrożyć gotowym rozwiązaniem, czy zaprogramować specjalnie dla Twojej firmy.

## Jak przygotowuję stronę pod Google i odpowiedzi AI

WordPress daje możliwość ustawienia czytelnych adresów, tytułów stron i opisów widocznych w wynikach wyszukiwania. Nie oznacza to jednak, że nowa strona automatycznie będzie dobrze widoczna w Google.

Znaczenie ma struktura serwisu, jakość treści i techniczna możliwość ich odczytania. Jeśli oferujesz różne usługi, warto przygotować dla nich osobne podstrony zamiast umieszczać wszystkie informacje w jednym krótkim opisie.

Podczas wdrożenia konfiguruję strukturę nagłówków, mapę witryny, dane strukturalne i Google Search Console. Dane strukturalne pomagają wyszukiwarce rozpoznać, co znajduje się na danej podstronie.

W odpowiednich miejscach mogę zastosować FAQPage, czyli dane opisujące pytania i odpowiedzi. W jednym z serwisów generowałem je z treści na 951 podstronach lokalnych. Taki mechanizm ogranicza konieczność ręcznego przygotowywania osobnego kodu dla każdej podstrony.

Uwzględniam też GEO, czyli przygotowanie treści tak, aby ich temat, zakres i powiązania były czytelne dla systemów korzystających z AI. Nie oznacza to gwarancji cytowania przez ChatGPT ani pojawienia się w odpowiedziach innych narzędzi.

Nie obiecuję też pozycji w Google. Na widoczność wpływają czynniki wykraczające poza samo wykonanie strony.

Zlecając mi stronę WordPress, otrzymujesz techniczne podstawy SEO i uporządkowaną strukturę treści, którą możesz później rozwijać.

## Jak dobrać hosting i zadbać o bezpieczeństwo

Hosting wpływa na wydajność, dostępność i bezpieczeństwo strony. Przy niewielkiej witrynie firmowej nie zawsze potrzebujesz rozbudowanej infrastruktury, ale najtańszy pakiet również nie musi być najlepszym wyborem.

Przy wyborze serwera sprawdzam wersję PHP, dostępne zasoby, możliwość wykonywania kopii zapasowych, certyfikat SSL i warunki aktualizacji środowiska. Najczęściej rozważam Hostingera lub cyber_folks, zależnie od wymagań projektu.

Bezpieczeństwo nie kończy się na instalacji wtyczki ochronnej. Liczą się aktualizacje WordPressa, motywu i rozszerzeń, mocne hasła, ograniczone uprawnienia użytkowników oraz możliwość odtworzenia strony z kopii zapasowej.

Kopia przechowywana wyłącznie na tym samym serwerze nie chroni przed każdą awarią. Ważne, gdzie są przechowywane dane i czy procedura przywracania rzeczywiście działa.

Istotna jest także własność usług. Domena i hosting powinny należeć do Ciebie, a wykonawca powinien otrzymać odpowiednie dostępy techniczne. Dzięki temu nie tracisz kontroli nad stroną, jeśli zmienisz osobę odpowiedzialną za jej utrzymanie.

Po uruchomieniu mogę dalej zajmować się aktualizacjami, kopiami zapasowymi i kontrolą bezpieczeństwa w ramach opcjonalnej usługi [opieka nad stroną WordPress](/uslugi/opieka-wordpress). Przy zleceniu ustalam również wymagania hostingowe i sposób zabezpieczenia witryny.

## Jak przebiega projekt i co otrzymujesz po wdrożeniu

Pracę zaczynam od rozmowy i briefu. Ustalam, do kogo kierujesz ofertę, jakie podstrony są potrzebne i które treści będziesz później samodzielnie aktualizować.

Następnie przygotowuję projekt w Figmie. Masz dwie tury poprawek, a programowanie rozpoczynam po akceptacji wyglądu strony. W ten sposób unikam sytuacji, w której większe zmiany układu pojawiają się dopiero po napisaniu motywu.

Podczas programowania udostępniam wersję testową po każdym etapie. Możesz sprawdzić wygląd, treści i działanie funkcji, zanim przeniosę stronę na docelowy serwer.

Przy wymianie starej witryny uwzględniam przekierowania 301 dla zmienionych adresów. Przygotowuję migrację tak, żeby ograniczyć przerwę w działaniu, choć zmiana DNS może spowodować krótką niedostępność.

Przed odbiorem sprawdzam formularze, wersję mobilną, wydajność, dostępność i konfigurację podstawowych narzędzi.

Po wdrożeniu otrzymujesz dostęp administracyjny do strony, przygotowany panel edycji i szkolenie online. Przez 60 dni obowiązuje gwarancja i bezpłatne poprawki.

Zlecając mi stronę, współpracujesz bezpośrednio z osobą, która projektuje jej działanie i pisze kod, bez przekazywania ustaleń między kolejnymi działami.

## Ile trwa stworzenie strony i co wpływa na koszt

Prosta wizytówka firmowa zajmuje zwykle 2-3 tygodnie. Typowa strona firmowa lub usługowa wymaga najczęściej 4-6 tygodni. To orientacyjne terminy, które potwierdzam po poznaniu zakresu i dostępności materiałów.

Największy wpływ na koszt ma liczba unikalnych układów podstron oraz funkcji wymagających zaprojektowania i zaprogramowania.

Strona zawierająca wiele usług korzystających z jednego układu może wymagać mniej pracy niż niewielka witryna z osobno projektowanymi widokami i nietypowymi mechanizmami.

Dodatkowy zakres mogą stanowić:

- Integracje z systemami zewnętrznymi i własne kalkulatory.
- Wersje językowe oraz migracja istniejących treści.
- Dodatkowe układy bloga, realizacji i podstron ofertowych.
- Funkcje wymagające osobnej wtyczki lub przetwarzania danych.

Na harmonogram wpływa również termin dostarczenia tekstów i zdjęć. Jeśli materiały powstają dopiero podczas programowania, trudniej utrzymać uzgodnioną kolejność prac.

Pomaga wskazanie jednej osoby odpowiedzialnej za akceptację projektu oraz zebranie uwag przed rozpoczęciem kolejnego etapu.

Przy wycenie rozpisuję zakres prac i termin, żebyś wiedział, jakie widoki i funkcje obejmuje zamówienie.

## Jak przygotować treści, żeby strona odpowiadała na pytania klientów

Projekt graficzny nie zastąpi dobrze przygotowanej oferty. Nawet atrakcyjna strona niewiele wyjaśni klientowi, jeśli nie znajdzie na niej konkretnego opisu usługi, obszaru działania albo sposobu kontaktu.

Przed rozpoczęciem projektu warto zebrać opisy usług, informacje o firmie, zdjęcia i odpowiedzi na pytania, które regularnie otrzymujesz od klientów.

Osobna podstrona usługi pozwala wyjaśnić, co obejmuje oferta, dla kogo jest przeznaczona i jak wygląda współpraca. Nie trzeba wtedy upychać różnych tematów w jednej sekcji strony głównej.

Jeśli prowadzisz blog, warto również ustalić kategorie i sposób prezentacji wpisów. Przy większej liczbie publikacji znaczenie mają powiązane artykuły, spisy treści oraz wygodne wyszukiwanie informacji.

Ważne są także dokumenty formalne, takie jak polityka prywatności i informacje dotyczące cookies. Ich treść powinna odpowiadać faktycznemu sposobowi przetwarzania danych przez firmę.

Na etapie briefu ustalam, które materiały już posiadasz, a które trzeba przygotować przed wdrożeniem, żeby projekt strony odpowiadał rzeczywistej zawartości.

## Dostępność WCAG warto uwzględnić już podczas projektowania

Dostępność cyfrowa dotyczy możliwości korzystania ze strony przez osoby o różnych potrzebach, w tym użytkowników klawiatury, czytników ekranu oraz osoby mające trudności z odczytywaniem treści.

W praktyce oznacza odpowiedni kontrast, logiczną strukturę nagłówków, opisy alternatywne obrazów, poprawne etykiety formularzy i widoczne oznaczenie aktualnie wybranego elementu.

Od 28 czerwca 2025 roku określone usługi cyfrowe podlegają ustawowym wymaganiom dostępności. Zakres obowiązków zależy jednak od rodzaju usługi i sytuacji przedsiębiorcy. Sama obecność strony firmowej nie przesądza automatycznie o wszystkich obowiązkach prawnych.

Przy wdrożeniu uwzględniam zasady WCAG od etapu projektowania. Dokładniejsza weryfikacja może wymagać ręcznych testów, ponieważ automatyczne narzędzia nie wykrywają wszystkich problemów. Zakres takiego sprawdzenia opisuję na stronie [audyt dostępności WCAG](/audyt-wcag).

Nie traktuję również nakładki z przyciskiem zmiany kontrastu jako rozwiązania wszystkich problemów dostępności. Jeśli formularz nie działa z klawiatury, dodatkowy pasek narzędzi nie naprawi jego konstrukcji.

Zlecając stronę, możesz uwzględnić dostępność już w projekcie i określić zakres wymaganych testów, zamiast zamawiać przebudowę gotowego interfejsu.

## Jakich błędów uniknąć przy zamawianiu strony WordPress

Pierwszym błędem jest wybieranie wykonawcy wyłącznie na podstawie wyglądu przykładowych stron. Warto sprawdzić również panel edycji, sposób realizacji dodatkowych funkcji i zasady późniejszego utrzymania.

Drugim jest kupowanie rozbudowanego szablonu tylko dlatego, że zawiera wiele efektów i gotowych układów. Jeśli nie korzystasz z większości tych możliwości, mogą jedynie komplikować obsługę strony.

Trzecim jest odkładanie rozmowy o dostępach do momentu zakończenia współpracy. Domena, hosting i konta analityczne powinny pozostawać pod Twoją kontrolą od początku.

Czwartym jest brak planu aktualizacji. Strona WordPress wymaga utrzymania także po uruchomieniu. Nie musisz zlecać tego na stałe, ale ktoś powinien odpowiadać za aktualizacje, kopie zapasowe i reagowanie na problemy.

Warto również przed podpisaniem ustaleń zapytać, które elementy będziesz mógł zmieniać samodzielnie, a które będą wymagały prac programistycznych.

Przyjmując zlecenie, ustalam te kwestie w briefie i zakresie wdrożenia. Dzięki temu wiesz, co otrzymujesz po uruchomieniu strony i za które obszary będziesz później odpowiadać samodzielnie.
