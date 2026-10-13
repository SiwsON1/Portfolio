Użyj skilla Mistrz Blogowania.

Zadanie: ROZBUDUJ istniejący wpis blogowy „Server-Side Rendering: co to jest i kiedy go używać” na blogu freelancera web developera Marcina Siwonia (marcinsiwonia.pl). Obecna treść jest w załączonym pliku i jest merytorycznie dobra: zachowaj jej sens, sekcje i FAQ, możesz je skracać, łączyć i poprawiać. Wpis jest w Google średnio na 15. pozycji na „server side rendering co to” i „ssr”. Strony z pierwszej dziesiątki mają tematy, których nam brakuje; dopisz je (niżej). Pierwsza osoba (Marcin), czytelnik: osoba częściowo techniczna (właściciel firmy, product manager, początkujący programista), która chce zrozumieć SSR i zdecydować, czy go potrzebuje.

FORMAT WYNIKU (dokładnie tak, bez komentarzy):
=== WPIS: server-side-rendering-co-to ===
KEYWORD: Server-Side Rendering
TITLE: … (bez roku, bez pauz, maks. 60 znaków)
METATITLE: … (maks. 60 znaków, zaczyna się od „Server-Side Rendering (SSR)”)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost, zawiera „SSR”)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania: definicja SSR w pierwszym zdaniu)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; tabela w Markdown z nagłówkiem; kod w zwykłym Markdown: trzy grawisy i nazwa języka]
## [nagłówek sekcji 2]
… (7-9 sekcji)
FAQ:
- P: … | O: … (6 pytań, odpowiedź 2-4 zdania)

DOPISZ (brakujące tematy z czołówki Google, każdy jako sekcja albo wyraźna część sekcji):
1. Jak działa SSR krok po kroku: żądanie, pobranie danych na serwerze, wygenerowanie HTML, wysłanie, wyświetlenie, pobranie JavaScriptu, hydratacja. Lista numerowana, każdy krok jednym zdaniem.
2. Zalety i wady SSR wprost: jedna tabela „zaleta | wada” albo dwie krótkie listy. Wady uczciwie: obciążenie serwera przy każdym żądaniu, dłuższy czas do pierwszego bajtu niż z pamięci podręcznej, trudniejsze buforowanie, koszt hostingu przy dużym ruchu, hydratacja nadal kosztuje JavaScript.
3. SSR w popularnych frameworkach: Next.js (React), Nuxt (Vue), SvelteKit, Remix / React Router, Angular (renderowanie po stronie serwera wbudowane w nowsze wersje), Astro (domyślnie statycznie, SSR opcjonalnie). Po jednym zdaniu, bez numerów wersji, jeśli nie jesteś pewien.
4. SSR w Next.js (App Router) z krótkim przykładem kodu: komponent strony, który pobiera dane przy każdym żądaniu (np. odczyt nagłówków lub ciasteczek albo zapytanie bez pamięci podręcznej), i jedno zdanie po ludzku, co robi. Nazwy API sprawdź w dokumentacji nextjs.org; jeśli nie masz pewności co do domyślnego buforowania w danej wersji, napisz ogólnie, że Next.js renderuje stronę dynamicznie, gdy korzysta z danych dostępnych dopiero w chwili żądania. Wspomnij jednym, dwoma zdaniami o strumieniowaniu (Suspense: strona wysyłana kawałkami) i o ISR jako środku pomiędzy SSR a SSG.
5. SSR a Core Web Vitals: czas do pierwszego bajtu (TTFB), LCP i to, że SSR poprawia szybkość pojawienia się treści, ale może wydłużyć oczekiwanie na odpowiedź serwera; buforowanie i CDN jako sposób na to. Bez liczb rynkowych.
6. Koszty i buforowanie: kiedy SSR podnosi rachunek za hosting, jak go ograniczyć (pamięć podręczna, generowanie statyczne tam, gdzie się da, renderowanie dynamiczne tylko dla części strony).
7. Jak sprawdzić, czy strona używa SSR: „Pokaż źródło strony” i szukanie treści w HTML, wyłączenie JavaScriptu w przeglądarce, narzędzie Sprawdzenie adresu URL w Google Search Console (wyrenderowany HTML). Krótko, punktami.
8. Przykład z mojej pracy (z FAKTÓW niżej): moja strona prawie nie używa SSR i dlaczego to dobry wybór; gdzie SSR (renderowanie na żądanie) ma sens w moich projektach.

FAKTY Z MOJEJ PRACY (tylko te, liczby tylko stąd):
* Moja strona marcinsiwonia.pl działa na Next.js 16 (App Router), hosting Vercel. Wszystkie publiczne podstrony (wpisy, usługi, realizacje, strony branżowe) są generowane z wyprzedzeniem podczas budowania i podawane z pamięci podręcznej Vercel; odpowiedź serwera mówi wprost, że strona była wygenerowana wcześniej. Czas do pierwszego bajtu zmierzony 13.10.2026 dla tego wpisu: od 0,11 do 0,21 s.
* Na żądanie serwer pracuje u mnie tylko w dwóch miejscach: formularz kontaktowy (walidacja, pole-pułapka na boty, wysyłka maila) i skaner dostępności /sprawdz-dostepnosc, który w chwili zapytania pobiera wskazany adres i ma limity zapytań oraz blokadę adresów wewnętrznych.
* Galabau Darius (Next.js, klient z Niemiec): konfigurator wyceny ogrodzeń na żywo i panel administratora z logowaniem przez Clerk, baza przez Prisma; panel pokazuje dane zalogowanej osoby, więc musi powstawać na żądanie.
* Kantorymapa (Next.js, własny produkt): 1900 kantorów w 140 miastach, kursy NBP pobierane codziennie, podstrony generowane z jednej bazy, ładuje się poniżej sekundy.

ZASADY:
- 2200-2800 słów bez FAQ. Każda liczba z FAKTÓW albo bez liczby. Bez em-dashy i półpauz. Nagłówki zdaniowe, informacyjne, część w formie pytań, jakie zadaje czytelnik („Jak działa SSR krok po kroku?”, „Jakie są wady SSR?”).
- Fraza „Server-Side Rendering” raz w tytule i w pierwszym zdaniu leadu; skrót „SSR” naturalnie w treści.
- Żargon z tłumaczeniem: TTFB, LCP, CDN, ISR, hydratacja w tym samym zdaniu po ludzku.
- Linki wewnętrzne w Markdown, maks. 4 w treści, dokładnie w tej postaci: [tworzenie stron Next.js](/uslugi/aplikacje-nextjs), [SSR czy CSR pod SEO](/blog/ssr-vs-csr-seo), [Static Site Generation](/blog/static-site-generation-co-to), [narzędzie do sprawdzania dostępności](/sprawdz-dostepnosc).
- Nie powielaj szczegółowo tematu „SSR czy CSR pod SEO” (osobny wpis): o SEO jedna sekcja, z linkiem.
- Bez podsumowania „Podsumowując” i bez wezwania do kontaktu na końcu. W leadzie nie pisz, skąd pracuję.
