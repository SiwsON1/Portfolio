=== WPIS: server-side-rendering-co-to ===
KEYWORD: Server-Side Rendering
TITLE: Server-Side Rendering: co to jest i kiedy go używać?
METATITLE: Server-Side Rendering (SSR): co to jest i jak działa?
METADESCRIPTION: SSR to renderowanie strony na serwerze przed wysłaniem HTML do przeglądarki. Sprawdź, jak działa, jakie ma zalety i wady oraz kiedy warto go używać.
EXCERPT: SSR przygotowuje HTML strony na serwerze, zanim trafi on do przeglądarki. Wyjaśniam, jak działa renderowanie po stronie serwera, czym różni się od SSG i CSR oraz kiedy rzeczywiście warto je stosować.
LEAD: Server-Side Rendering (SSR) to sposób renderowania strony internetowej, w którym serwer przygotowuje HTML w odpowiedzi na żądanie użytkownika, zanim wyśle go do przeglądarki. Dzięki temu treść może pojawić się bez czekania na wykonanie JavaScriptu odpowiedzialnego za zbudowanie całego widoku. Nie oznacza to jednak, że SSR zawsze będzie najszybszym rozwiązaniem, dlatego pokażę, kiedy go wykorzystać, a kiedy lepiej wygenerować stronę wcześniej.

## Co to jest Server-Side Rendering i jak działa SSR krok po kroku?
**SSR, czyli renderowanie po stronie serwera, polega na przygotowaniu kodu HTML strony jeszcze przed dostarczeniem go do przeglądarki.** Zamiast wysyłać niemal pusty dokument i czekać, aż JavaScript zbuduje zawartość, serwer przygotowuje widok na podstawie potrzebnych danych.
Wyobraź sobie stronę z informacjami o zamówieniu. Użytkownik otwiera adres, a serwer sprawdza jego sesję, pobiera odpowiednie dane i przygotowuje HTML zawierający szczegóły zamówienia. Przeglądarka otrzymuje gotową strukturę strony, którą może od razu zacząć wyświetlać.
W klasycznym SSR cały proces wygląda następująco:
1. **Żądanie:** użytkownik otwiera adres strony, a przeglądarka wysyła żądanie HTTP do serwera.
2. **Pobranie danych:** serwer sprawdza, jakie informacje są potrzebne, i pobiera je na przykład z bazy danych lub API.
3. **Generowanie HTML:** aplikacja wykorzystuje pobrane informacje do przygotowania kodu HTML strony.
4. **Wysłanie odpowiedzi:** serwer przesyła wygenerowany dokument HTML do przeglądarki.
5. **Wyświetlenie treści:** przeglądarka analizuje HTML i może pokazać użytkownikowi zawartość strony.
6. **Pobranie JavaScriptu:** jeśli strona zawiera funkcje wymagające JavaScriptu, przeglądarka pobiera potrzebne skrypty.
7. **Hydratacja:** framework łączy kod JavaScript z wcześniej wyrenderowanymi elementami, dzięki czemu stają się interaktywne.
Ostatni etap wymaga wyjaśnienia. **Hydratacja to proces, w którym JavaScript uruchomiony w przeglądarce podłącza interaktywne zachowania do HTML przygotowanego wcześniej na serwerze.** Użytkownik może już widzieć przycisk, ale jego działanie wymagające JavaScriptu będzie dostępne dopiero po uruchomieniu odpowiedniego kodu.
W React może to oznaczać podłączenie obsługi kliknięć, aktualizacji stanu komponentu lub innych interakcji. Nie każdy fragment strony musi jednak przechodzić hydratację. W nowoczesnych frameworkach część komponentów może pozostać wyłącznie po stronie serwera.
To ważne rozróżnienie, ponieważ SSR nie eliminuje automatycznie JavaScriptu. Przygotowanie początkowego HTML i późniejsza interaktywność to osobne zadania, które można realizować na różne sposoby.
Co więcej, nowoczesne frameworki nie zawsze czekają na wygenerowanie całego dokumentu. Potrafią wysyłać jego fragmenty stopniowo, gdy kolejne części strony są gotowe. Do tego rozwiązania wrócę przy przykładzie Next.js.

## Czym różni się SSR od SSG i CSR?
SSR nie jest jedynym sposobem przygotowywania stron internetowych. Najczęściej porównuje się go z CSR, czyli Client-Side Rendering, oraz SSG, czyli Static Site Generation.
Różnica pomiędzy tymi strategiami dotyczy przede wszystkim **miejsca i momentu powstawania HTML**, a nie samego wyglądu strony. Użytkownik może zobaczyć identyczny widok, chociaż aplikacja przygotowała go w zupełnie inny sposób.
Przy SSR serwer generuje dokument podczas obsługi żądania. Przy CSR za zbudowanie widoku odpowiada głównie JavaScript działający w przeglądarce. Natomiast [Static Site Generation](/blog/static-site-generation-co-to) polega na wygenerowaniu HTML wcześniej, na przykład podczas budowania aplikacji.
| Cecha | SSR | SSG | CSR |
| :--- | :--- | :--- | :--- |
| Gdzie powstaje HTML? | Na serwerze | Podczas wcześniejszego generowania | Głównie w przeglądarce |
| Kiedy powstaje treść? | Podczas żądania | Przed odwiedzeniem strony | Po uruchomieniu JavaScriptu |
| Dostępność treści w początkowym HTML | Tak | Tak | Nie zawsze |
| Aktualność danych | Możliwa przy każdym żądaniu | Zależy od ponownego generowania | Zależy od pobierania danych |
| Obciążenie serwera | Renderowanie przy żądaniach | Zwykle niewielkie przy dostarczaniu strony | Zależne głównie od obsługi API |
| Typowe zastosowanie | Panel użytkownika, spersonalizowany widok | Blog, strona firmowa, oferta | Edytor, interaktywny panel aplikacji |
Największą przewagą SSG jest możliwość przechowywania gotowej strony w pamięci podręcznej i dostarczania jej bez ponownego generowania. Jeśli wszyscy odwiedzający mają zobaczyć tę samą treść, nie ma potrzeby za każdym razem wykonywać identycznej pracy.
CSR sprawdza się natomiast w aplikacjach, w których użytkownik intensywnie pracuje z interfejsem. Przykładem może być edytor dokumentów lub narzędzie do projektowania, gdzie większość działań odbywa się bez przeładowywania strony.
Nie oznacza to, że aplikacja korzystająca z SSR nie może mieć takich funkcji. **Renderowanie początkowej strony i obsługa późniejszych interakcji mogą wykorzystywać różne strategie.**
W praktyce coraz częściej łączy się te podejścia. Strona ofertowa może być wygenerowana statycznie, panel klienta renderowany na serwerze, a konfigurator produktu obsługiwany przez JavaScript w przeglądarce.
Właśnie takie rozdzielenie stosuję przy projektowaniu aplikacji. Nie wybieram SSR dla całego projektu tylko dlatego, że jest dostępny w danym frameworku. Najpierw sprawdzam, które widoki rzeczywiście potrzebują danych przygotowywanych podczas żądania.

## Jakie są zalety i wady SSR?
SSR ma konkretne korzyści, ale wiąże się też z kosztami technicznymi. Dlatego nie traktuję renderowania po stronie serwera jako uniwersalnego sposobu na przyspieszenie każdej strony.
Najważniejsze zalety i wady zestawiłem w tabeli.
| Zaleta SSR | Wada SSR |
| :--- | :--- |
| Treść jest dostępna w początkowym HTML | Serwer musi wykonać pracę podczas generowania odpowiedzi |
| Możliwość pobierania aktualnych danych podczas żądania | Pobieranie danych może wydłużyć oczekiwanie na HTML |
| Obsługa widoków zależnych od użytkownika | Personalizowane odpowiedzi trudniej współdzielić w pamięci podręcznej |
| Mniejsza zależność wyświetlenia podstawowej treści od JavaScriptu | Hydratacja interaktywnych elementów nadal wymaga JavaScriptu |
| Możliwość ukrycia dostępu do bazy danych i sekretów po stronie serwera | Większy ruch może zwiększyć koszty hostingu i obciążenie serwera |
| Łatwiejsze dostarczanie treści robotom bez wykonywania JavaScriptu | SSR nie gwarantuje lepszego SEO ani wyższej wydajności |
Najważniejszą zaletą SSR jest możliwość **przygotowania aktualnej lub spersonalizowanej zawartości w chwili otrzymania żądania**. To szczególnie przydatne wtedy, gdy wynik zależy od zalogowanego użytkownika, jego uprawnień albo danych, które trzeba właśnie pobrać.
Przykładowo serwer może sprawdzić sesję użytkownika i przygotować panel zawierający informacje dostępne tylko dla niego. Nie trzeba w tym celu wysyłać wszystkich danych do przeglądarki i dopiero tam decydować, co wyświetlić.
Jednocześnie takie renderowanie kosztuje zasoby. Każde żądanie wymagające wygenerowania strony może uruchamiać kod serwerowy, pobieranie danych oraz przygotowanie HTML. Przy dużym ruchu oznacza to dodatkowe wykorzystanie procesora, pamięci i usług zewnętrznych.
Problemem bywa również buforowanie. Publiczny artykuł można bezpiecznie przechowywać jako wspólną odpowiedź dla wielu użytkowników. Panel zawierający prywatne informacje wymaga znacznie większej ostrożności, ponieważ nie wolno przypadkowo udostępnić danych jednej osoby innej.
Dlatego SSR jest kompromisem. Zyskujemy większą elastyczność przygotowywania treści, ale płacimy za nią dodatkową pracą wykonywaną podczas obsługi żądań.

## Jakie frameworki obsługują Server-Side Rendering?
SSR nie jest technologią zarezerwowaną dla jednego frameworka. Renderowanie po stronie serwera obsługuje wiele popularnych narzędzi do tworzenia aplikacji internetowych, chociaż różnią się one sposobem konfiguracji i domyślnymi strategiami.
**Next.js (React)** pozwala łączyć komponenty renderowane na serwerze, strony generowane statycznie i interaktywne komponenty klienckie, a w App Routerze obsługuje również renderowanie dynamiczne.
**Nuxt (Vue)** zapewnia renderowanie po stronie serwera dla aplikacji opartych na Vue oraz możliwość kontrolowania sposobu renderowania poszczególnych tras.
**SvelteKit** obsługuje SSR, generowanie statyczne i renderowanie po stronie klienta, dzięki czemu można dopasować sposób dostarczania strony do jej funkcji.
**Remix i React Router** umożliwiają tworzenie aplikacji React z renderowaniem na serwerze oraz pobieraniem danych powiązanym z trasami aplikacji.
**Angular** ma w nowszych wersjach wbudowaną obsługę renderowania po stronie serwera i generowania statycznego, więc nie wymaga budowania całego mechanizmu SSR od podstaw.
**Astro** domyślnie stawia na generowanie statyczne, ale pozwala włączyć SSR dla stron wymagających przygotowania odpowiedzi podczas żądania.
Wybór frameworka zależy więc nie tylko od samej obsługi SSR, ale również od architektury projektu, sposobu zarządzania danymi i potrzebnej interaktywności.
W mojej pracy najczęściej wykorzystuję Next.js. Przy usłudze [tworzenie stron Next.js](/uslugi/aplikacje-nextjs) mogę przygotować w jednej aplikacji zarówno publiczne strony statyczne, jak i widoki wymagające pracy serwera.
Nie oznacza to jednak, że każdy projekt w Next.js powinien renderować wszystkie podstrony dynamicznie. Framework udostępnia różne możliwości właśnie po to, aby wybierać odpowiednią strategię dla konkretnego przypadku.

## Jak wdrożyć SSR w Next.js z App Router?
W Next.js z App Routerem strony tworzy się między innymi za pomocą komponentów serwerowych. Mogą one pobierać dane i przygotowywać widok bez konieczności przenoszenia całej logiki do przeglądarki.
Trzeba jednak pamiętać, że **komponent serwerowy nie oznacza automatycznie renderowania przy każdym żądaniu**. Next.js może przygotować jego wynik wcześniej, jeśli pozwala na to charakter danych i konfiguracja aplikacji.
Renderowanie dynamiczne jest potrzebne wtedy, gdy strona korzysta z informacji dostępnych dopiero w momencie żądania. Przykładem są nagłówki HTTP przesyłane przez przeglądarkę.
Poniżej prosty komponent strony w App Routerze:
```tsx
// app/przyklad/page.tsx
import { headers } from "next/headers";

export default async function PrzykladPage() {
  const naglowki = await headers();
  const jezyk = naglowki.get("accept-language") ?? "pl";

  return (
    <main>
      <h1>Przykład renderowania SSR</h1>
      <p>Języki akceptowane przez przeglądarkę: {jezyk}</p>
    </main>
  );
}
```
Ten komponent odczytuje nagłówek bieżącego żądania i wykorzystuje go do przygotowania HTML, dlatego zawartość zależy od informacji przekazanej przez konkretną przeglądarkę.
Funkcja `headers()` pochodzi z `next/headers` i jest asynchroniczna. Ponieważ korzysta z danych dostępnych dopiero podczas żądania, Next.js traktuje taki odczyt jako operację dynamiczną.
W konfiguracjach korzystających z Cache Components, czyli mechanizmu łączenia części statycznych i dynamicznych, odczyt takich danych może wymagać umieszczenia komponentu wewnątrz granicy `Suspense`.
**Suspense pozwala wyświetlić tymczasową zawartość podczas oczekiwania na wolniejszy fragment strony.** Łączy się to ze strumieniowaniem, czyli przesyłaniem HTML kawałkami, zamiast czekania na przygotowanie całego widoku.
Dzięki temu przeglądarka może wcześniej otrzymać nagłówek, nawigację lub inne gotowe elementy, podczas gdy bardziej wymagająca część strony nadal pobiera dane.
Next.js udostępnia również ISR, czyli Incremental Static Regeneration. Jest to **mechanizm odświeżania wcześniej wygenerowanych stron statycznych bez konieczności przebudowy całego serwisu**.
ISR stanowi praktyczny kompromis pomiędzy SSR a SSG. Jeżeli informacje zmieniają się okresowo, ale nie wymagają generowania HTML podczas każdego wejścia, można przechowywać gotową stronę i aktualizować ją zgodnie z przyjętymi zasadami.
Wybór pomiędzy SSR, SSG i ISR zależy więc od tego, jak świeże muszą być informacje i czy zawartość rzeczywiście zależy od konkretnego żądania. Sama możliwość pobierania danych na serwerze nie wystarcza, aby uzasadnić dynamiczne renderowanie całej podstrony.

## Jak SSR wpływa na Core Web Vitals, szybkość i koszty hostingu?
SSR często pojawia się w rozmowach o wydajności stron, ale szybkość ładowania zależy od całego procesu dostarczania i wyświetlania zawartości.
Jedną z istotnych metryk jest **TTFB (Time to First Byte), czyli czas oczekiwania na pierwszy bajt odpowiedzi z serwera**. Jeżeli aplikacja musi podczas każdego żądania pobrać dane z kilku usług i przygotować HTML, czas ten może się wydłużyć.
Strona statyczna ma pod tym względem przewagę, ponieważ gotowy dokument może być dostarczony bez ponownego renderowania. Serwer nie musi wykonywać tej samej pracy za każdym razem.
Z kolei SSR może przyspieszyć pojawienie się właściwej treści w porównaniu z aplikacją CSR, która musi najpierw pobrać i wykonać JavaScript odpowiedzialny za zbudowanie widoku.
Drugą ważną metryką jest **LCP (Largest Contentful Paint), czyli czas potrzebny do wyświetlenia największego istotnego elementu widocznej części strony**. Może nim być duży obraz, nagłówek lub blok tekstu.
SSR może poprawić LCP, ponieważ przeglądarka wcześniej otrzymuje strukturę zawierającą najważniejszą treść. Nie jest to jednak gwarantowane. Długie oczekiwanie na odpowiedź serwera, ciężkie obrazy lub zasoby blokujące renderowanie nadal mogą opóźniać pojawienie się elementu.
Do tego dochodzi hydratacja. Jeśli aplikacja wysyła dużą ilość JavaScriptu, przeglądarka musi go pobrać, przetworzyć i wykonać. Użytkownik może więc widzieć stronę, ale nadal czekać na możliwość swobodnego korzystania z części interfejsu.
Istotne znaczenie ma również **CDN (Content Delivery Network), czyli sieć serwerów dostarczających treści użytkownikom z różnych lokalizacji**. CDN może przechowywać wcześniej przygotowane odpowiedzi i ograniczać konieczność odpytywania serwera aplikacji.
Nie każdą odpowiedź SSR da się jednak bezpiecznie przechowywać we wspólnej pamięci podręcznej. Zawartość zależna od zalogowanego użytkownika wymaga odpowiedniej izolacji, a dane, które muszą być aktualne przy każdym żądaniu, mogą potrzebować ponownego pobrania.
**Koszty wynikają z ilości pracy wykonywanej przez serwer.** W przypadku hostingu rozliczanego według wykorzystanych zasobów SSR może zwiększać rachunki. Znaczenie ma liczba dynamicznych żądań, czas wykonywania kodu, operacje na bazie danych oraz komunikacja z zewnętrznymi usługami.
Dlatego staram się ograniczać renderowanie dynamiczne do miejsc, w których przynosi rzeczywistą wartość. Publiczne artykuły, opisy usług i inne treści wspólne dla odwiedzających można zwykle wygenerować wcześniej.
Jeżeli aplikacja wymaga aktualnych danych, można rozważyć ich buforowanie albo wykorzystanie ISR. Inną możliwością jest pozostawienie statycznej większości strony i dynamiczne przygotowywanie jedynie fragmentu zależnego od żądania.
Takie podejście pozwala ograniczyć obciążenie serwera bez rezygnacji z funkcji, które wymagają pracy wykonywanej na bieżąco.

## Czy SSR jest lepszy dla SEO i jak sprawdzić sposób renderowania strony?
SSR może ułatwiać robotom wyszukiwarek dostęp do zawartości, ponieważ główna treść znajduje się bezpośrednio w HTML odpowiedzi serwera.
Googlebot potrafi wykonywać JavaScript, dlatego aplikacja korzystająca z CSR nie jest automatycznie niewidoczna dla Google. Renderowanie JavaScriptu może jednak stanowić dodatkowy etap przetwarzania strony.
W przypadku SSR robot otrzymuje treść bez konieczności samodzielnego budowania całego widoku z JavaScriptu. Podobną korzyść zapewnia jednak SSG, ponieważ statycznie wygenerowana strona również zawiera gotowy HTML.
**Samo włączenie SSR nie gwarantuje wyższych pozycji w Google.** Ważne pozostają jakość treści, indeksowalność, struktura strony, linkowanie i wydajność.
Szczegółowe porównanie tych strategii opisałem we wpisie [SSR czy CSR pod SEO](/blog/ssr-vs-csr-seo). Tutaj najważniejsze jest to, że nie trzeba generować strony przy każdym żądaniu tylko po to, aby dostarczyć robotowi gotową treść.
**Jak sprawdzić, czy strona korzysta z SSR?** Można to wstępnie ocenić bez dostępu do kodu źródłowego aplikacji.
- **Pokaż źródło strony:** otwórz tę opcję w przeglądarce i poszukaj właściwej treści artykułu lub strony w HTML, a nie tylko pustego elementu przeznaczonego dla aplikacji.
- **Wyłącz JavaScript:** sprawdź, czy po odświeżeniu nadal widoczna jest podstawowa zawartość, pamiętając, że niektóre interakcje mogą przestać działać.
- **Google Search Console:** użyj narzędzia Sprawdzenie adresu URL i obejrzyj wyrenderowany HTML, aby zobaczyć, jaką treść otrzymał Google.
Te metody pomagają ustalić, czy zawartość jest dostępna bez wykonywania JavaScriptu przez przeglądarkę. Nie pozwalają jednak jednoznacznie odróżnić SSR od SSG, ponieważ oba rozwiązania mogą dostarczać kompletny HTML.
Aby potwierdzić renderowanie dynamiczne, trzeba dodatkowo przeanalizować konfigurację aplikacji, sposób pobierania danych lub działanie pamięci podręcznej serwera.

## Jak wykorzystuję SSR w swoich projektach?
Dobrym przykładem świadomego wyboru strategii renderowania jest moja własna strona marcinsiwonia.pl. Korzysta z Next.js 16 z App Routerem i działa na hostingu Vercel, ale jej publiczne podstrony prawie w ogóle nie potrzebują SSR.
Wszystkie wpisy blogowe, strony usług, realizacje i strony branżowe generuję z wyprzedzeniem podczas budowania aplikacji. Gotowy HTML jest następnie dostarczany z pamięci podręcznej Vercel.
Dlaczego zdecydowałem się na takie rozwiązanie? Ponieważ treść artykułu albo opisu usługi nie zależy od tego, kto otwiera stronę. Nie ma potrzeby ponownie generować tego samego dokumentu przy każdym odwiedzającym.
Odpowiedź serwera potwierdza, że dokument został przygotowany wcześniej. Podczas pomiaru wykonanego 13.10.2026 czas TTFB dla tego wpisu wynosił od 0,11 do 0,21 s.
To wynik konkretnego pomiaru, a nie obietnica identycznej szybkości dla każdego odwiedzającego. Pokazuje jednak korzyść z ograniczenia pracy wykonywanej podczas żądania, kiedy zawartość może być przygotowana wcześniej.
**Gdzie mój serwer pracuje na żądanie?** Na mojej stronie są miejsca, w których potrzebuję logiki wykonywanej dopiero po działaniu użytkownika.
Pierwszym jest formularz kontaktowy. Po wysłaniu wiadomości serwer przeprowadza walidację, sprawdza pole-pułapkę utrudniające działanie botów i obsługuje wysyłkę wiadomości e-mail.
Drugim jest [narzędzie do sprawdzania dostępności](/sprawdz-dostepnosc), które pobiera wskazany przez użytkownika adres w chwili wykonania zapytania. Zastosowałem w nim limity zapytań i blokadę adresów wewnętrznych.
Trzeba jednak odróżnić te operacje od SSR. Formularz i skaner wykonują kod po stronie serwera na żądanie, ale nie oznacza to automatycznie, że cała podstrona jest dynamicznie renderowana do HTML.
**SSR w projekcie Galabau Darius.** Inaczej wygląda sytuacja w projekcie Galabau Darius, który przygotowałem dla klienta z Niemiec w Next.js.
Aplikacja zawiera konfigurator wyceny ogrodzeń na żywo oraz panel administratora z logowaniem przez Clerk. Dostęp do bazy danych jest realizowany przez Prisma.
Panel administratora pokazuje informacje powiązane z zalogowaną osobą. Takiego widoku nie można po prostu wygenerować wcześniej jako jednej publicznej strony dla wszystkich użytkowników.
Właśnie tutaj dynamiczne renderowanie na żądanie jest uzasadnione. Serwer może uwzględnić kontekst użytkownika i przygotować właściwą zawartość.
**Kantorymapa pokazuje, kiedy SSR nie jest potrzebny.** Kolejnym przykładem jest Kantorymapa, mój własny produkt zbudowany w Next.js.
Serwis zawiera 1900 kantorów w 140 miastach. Kursy NBP pobierane są codziennie, a podstrony powstają z jednej bazy danych. Strona ładuje się poniżej sekundy.
To dobry przykład projektu, w którym dane są aktualizowane regularnie, ale nie muszą być od nowa pobierane i renderowane przy każdym otwarciu podstrony.
Zamiast uzależniać przygotowanie wszystkich widoków od bieżącego żądania, można wykorzystać wcześniej wygenerowane strony i odpowiedni proces aktualizacji danych.
Te projekty pokazują, dlaczego nie traktuję SSR jako obowiązkowego elementu nowoczesnej aplikacji. Renderowanie dynamiczne ma sens tam, gdzie jest potrzebne, natomiast wspólne treści mogą korzystać z szybszego dostarczania gotowego HTML.

## Kiedy warto używać SSR, a kiedy lepiej z niego zrezygnować?
Decyzję o SSR zaczynam od pytania: **czy zawartość tej podstrony musi powstawać podczas konkretnego żądania użytkownika?**
Jeżeli odpowiedź brzmi tak, renderowanie po stronie serwera może być właściwym rozwiązaniem. Dotyczy to przede wszystkim widoków zależnych od sesji, uprawnień, prywatnych danych lub informacji, które rzeczywiście trzeba pobrać w momencie otwierania strony.
Przykładem jest panel administracyjny, w którym zawartość zależy od aktualnie zalogowanej osoby. W takich sytuacjach wcześniej wygenerowany, wspólny dokument HTML nie wystarcza do przedstawienia właściwych danych.
Nie oznacza to jednak, że każda aplikacja z logowaniem wymaga SSR. Czasami wystarczy statyczny szkielet interfejsu, a dane użytkownika można pobrać później w przeglądarce. Wybór zależy od oczekiwanego działania aplikacji, bezpieczeństwa i wydajności.
Jeżeli treść jest publiczna i taka sama dla wszystkich, zwykle rozważam najpierw SSG. Dotyczy to stron firmowych, wpisów blogowych, opisów usług oraz katalogów, których dane można aktualizować niezależnie od pojedynczych odwiedzin.
Gdy zawartość musi być okresowo odświeżana, ale nie przy każdym wejściu, dobrym rozwiązaniem może być ISR. Pozwala zachować zalety statycznego HTML bez konieczności przebudowy całej aplikacji po każdej zmianie.
CSR pozostaje przydatny w interaktywnych częściach aplikacji, szczególnie tam, gdzie użytkownik wielokrotnie zmienia dane i oczekuje natychmiastowej reakcji interfejsu.
Nie trzeba więc wybierać jednej strategii dla całej witryny. Można połączyć statyczne podstrony, dynamiczne widoki serwerowe i komponenty działające w przeglądarce.
**Najlepszy sposób renderowania to ten, który odpowiada rzeczywistym potrzebom danych.** Jeśli serwer nie musi generować HTML na nowo, nie ma sensu dokładać mu takiej pracy. Jeśli natomiast strona wymaga informacji dostępnych dopiero podczas żądania, SSR daje możliwość przygotowania właściwej treści jeszcze przed jej wysłaniem do przeglądarki.

FAQ:
- P: Co to jest SSR w tworzeniu stron internetowych? | O: SSR (Server-Side Rendering) to renderowanie strony po stronie serwera, zanim HTML zostanie wysłany do przeglądarki. Serwer może pobrać potrzebne dane i przygotować dokument zawierający właściwą treść. Dzięki temu przeglądarka nie musi samodzielnie budować całego początkowego widoku za pomocą JavaScriptu.
- P: Czym SSR różni się od SSG? | O: Przy SSR HTML jest przygotowywany podczas obsługi żądania użytkownika, natomiast SSG generuje go wcześniej. SSG pozwala dostarczać gotowy dokument bez ponownego renderowania przy każdym wejściu. Jeśli treść jest wspólna dla wszystkich odwiedzających, generowanie statyczne często będzie wystarczające.
- P: Czym SSR różni się od CSR? | O: Przy SSR główna zawartość HTML powstaje na serwerze, natomiast CSR opiera budowanie widoku przede wszystkim na JavaScripcie wykonywanym w przeglądarce. SSR pozwala pokazać treść przed zakończeniem wykonywania skryptów klienckich. Oba podejścia mogą być wykorzystywane w jednej aplikacji.
- P: Co to jest hydratacja w SSR? | O: Hydratacja to etap, w którym JavaScript uruchomiony w przeglądarce podłącza interaktywne zachowania do HTML przygotowanego na serwerze. Dzięki temu elementy takie jak przyciski i formularze mogą reagować na działania użytkownika. Nie wszystkie elementy strony muszą wymagać hydratacji.
- P: Czy SSR jest lepsze dla SEO i szybkości strony? | O: SSR ułatwia dostarczenie treści w początkowym HTML, co może pomóc robotom wyszukiwarek i przyspieszyć wyświetlenie zawartości w porównaniu z CSR. Jednocześnie przygotowywanie strony na serwerze może wydłużać TTFB, czyli czas oczekiwania na pierwszy bajt odpowiedzi. Statycznie wygenerowana strona również może oferować pełny HTML i bardzo dobrą wydajność.
- P: Kiedy użyć SSR w Next.js? | O: SSR warto rozważyć wtedy, gdy widok musi wykorzystywać dane dostępne dopiero podczas żądania, na przykład informacje związane z zalogowanym użytkownikiem. Next.js z App Routerem pozwala łączyć renderowanie dynamiczne ze statycznym. Jeśli strona nie wymaga indywidualnego przygotowywania HTML, lepszym wyborem może być SSG albo ISR.
