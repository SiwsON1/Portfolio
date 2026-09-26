# Audyt bloga marcinsiwonia.pl (SEO i jakość tekstu)

Data: 2026-09-26. Źródło: `lib/posts.ts` (27 wpisów), porównanie z `lib/services.ts` (14 stron usług). Liczby słów policzone skryptem (lead + sekcje/body + FAQ). Wynik AI-tell to ocena 0-100 według katalogu wzorców ze skilla humanizer (0 = tekst ludzki, 100 = czysty chatbot), szacowana ręcznie po przeczytaniu całego wpisu.

## Najważniejsze wnioski

1. **Zmyślone lub niesprawdzalne przypadki klientów w 5 wpisach**, w tym w leadach, meta description i tytułach (next-js-a-seo, ssr-vs-csr-seo, wdrozenia-ai-w-malych-firmach, elementor-dlaczego-nie-warto, wordpress-vs-next-js-koszt). To największe ryzyko: E-E-A-T, wiarygodność wobec klienta, który zapyta o referencję, oraz spójność z resztą serwisu (portfolio nie zawiera tych realizacji).
2. **Twarde błędy merytoryczne**: nieistniejąca metryka „CLS-2”, „95th percentile” zamiast 75., „60% wszystkich stron www” dla WordPressa (w tym samym wpisie dalej jest poprawne 43%), darmowy plan Vercel polecany stronom firmowym (plan Hobby jest wyłącznie do użytku niekomercyjnego), fałszywe zdanie, że formularz kontaktowy marcinsiwonia.pl działa na Server Action (w kodzie to `app/api/contact/route.ts`, zwykły route handler z Resend), `useFormState` zamiast `useActionState`, „Server Actions stabilne od 13.4” (stabilne od 14), Docusaurus „oparty o Next.js” (nie jest), Wordfence „zmienia URL logowania” (tego nie robi).
3. **16 z 27 wpisów to cienkie teksty body-only poniżej 650 słów** (352-620 słów łącznie z FAQ). Wszystkie pochodzą z jednej partii styczeń-kwiecień 2026 i mają ten sam szablon: kilka akapitów, 5 FAQ, dużo anglicyzmów, brak BLUF.
4. **Ceny własne na blogu**: „Najwięcej projektów, które realizuję: 15-30 tys. zł”, FAQ „Czy oferujesz fixed-price?”, „Co dostaję w cenie wdrożenia?”, konkretne ceny migracji i headless WP. Do tego strona usługi `tworzenie-stron-www` odsyła po „aktualne ceny” do wpisu `ile-kosztuje-strona-www-2026`, więc polityka „bez cen na stronach sprzedażowych” jest obchodzona przez blog. Widełki są też między wpisami sprzeczne (custom theme WP: 3-5 tys., 4-15 tys., 5-12 tys.).
5. **Kanibalizacja**: trzy wpisy na „Next.js czy WordPress”, dwa niemal identyczne na SSR/CSR pod SEO (te same cztery akapity), trzy wpisy o cenach, a do tego wpisy o tej samej frazie co strony usług: `jamstack-co-to-jest` vs `strony-jamstack`, `wdrozenia-ai-w-malych-firmach` vs `wdrozenia-ai`, `strona-firmowa-2026-jaka-technologia` vs `nowoczesna-strona-firmowa-2026`.
6. **Myślniki**: 26 z 27 tytułów lub meta tytułów ma pauzę „ — ” (wyjątek: dostepnosc-woocommerce). W treści pauzy są w nagłówkach wpisów elementor (3), next-js-a-seo, wordpress-co-to-jest. Meta tytuły wszystkich stron usług też mają pauzę (poza zakresem, ale ta sama poprawka).
7. **Wzorzec do naśladowania już istnieje**: `dostepnosc-woocommerce` (własne badanie, metodologia, data, tabela, BLUF, zero anglicyzmów) i w dużej mierze `wcag-2-1-aa`. Każde przepisanie powinno iść w tę stronę.

## Problemy techniczne szablonu bloga (wpływają na wszystkie wpisy)

- **`readingMinutes` zawyżone ręcznie**: np. pozycjonowanie-strony-uslugowej 427 słów = „14 min”, next-js-15-vs-wordpress-2026 439 słów = „11 min”, wdrozenia-ai 436 słów = „10 min”. Czytelnik widzi 2 minuty tekstu. Liczyć automatycznie (ok. 200 słów/min).
- **Markdown w FAQ JSON-LD**: `app/blog/[slug]/page.tsx` wstawia `f.a` do `acceptedAnswer.text` bez czyszczenia, więc linki `[tekst](/blog/...)` i `**` trafiają surowe do danych strukturalnych (np. headless-cms-co-to, wordpress-co-to-jest, next-js-15-vs-wordpress-2026). W HTML markdown renderuje się poprawnie przez `renderInlineLinks`, więc to nie są „resztki” w treści, tylko w schema.
- **Brak `updatedAt`** we wszystkich 27 wpisach, choć część była poprawiana. Po przepisaniu ustawiać `updatedAt`.
- **7 wpisów z tą samą datą 2026-05-09** (cała partia WordPress + Server Actions). Nie jest to błąd, ale przy przepisaniu warto rozłożyć `updatedAt` zgodnie z faktyczną pracą.
- **Lata w tytułach i slugach**: 10 wpisów ma „2026” w tytule lub meta tytule, 4 w slugu (`ile-kosztuje-strona-www-2026`, `next-js-15-vs-wordpress-2026`, `core-web-vitals-2026`, `strona-firmowa-2026-jaka-technologia`, `must-have-wtyczki-wordpress-2026`). Za 3 miesiące będą wyglądać na nieaktualne. Rekomendacja: usunąć rok z title/metaTitle; slugów nie zmieniać bez 301 (zmiana sluga tylko przy pełnym przepisaniu i z przekierowaniem w `next.config`).

## Tabela wpisów

Legenda akcji: przepisać (nowy tekst od zera na tej samej frazie), rozbudować (zostawić kąt, dopisać treść), poprawić fakty (punktowe poprawki), zostawić, scalić (tylko rekomendacja do decyzji właściciela). Priorytet: P1 najpierw, P3 na końcu.

| slug | słowa | struktura | FAQ | AI-tell | główne problemy | akcja | priorytet |
|---|---|---|---|---|---|---|---|
| dostepnosc-woocommerce | 1466 | 9 sekcji + 2 tabele | 6 | 15 | Brak istotnych. Własne badanie z metodologią. Drobne: brak linku do surowych danych lub opisu reguł axe. | zostawić | P3 |
| wcag-2-1-aa | 985 | 6 sekcji | 6 | 25 | „WCAG 2.2 obejmuje 56 kryteriów” na A+AA: z moich wyliczeń wychodzi 55 (30−1+2 na A, 20+4 na AA), do sprawdzenia. Kwota kary „ok. 89 000 zł” zależy od przeciętnego wynagrodzenia, podać podstawę (GUS, rok). Lekko formalne zwroty („Kluczowe jest to, że”). | poprawić fakty | P2 |
| ile-kosztuje-strona-www-2026 | 379 | body 6 akapitów | 5 | 60 | Cienki, a to wpis o najwyższej intencji zakupowej i odsyła do niego strona usługi. Brak BLUF (otwiera anegdota z maila, widełki dopiero w 2. akapicie). Ceny w pierwszej osobie zamiast rynkowych. Sprzeczne z innymi wpisami widełki. Rok w tytule i slugu. „custom animations”, „assety”, „Tier 1”. | przepisać | P1 |
| next-js-15-vs-wordpress-2026 | 439 | body 7 | 5 | 60 | „Next.js 15” w tytule, a sam serwis stoi na 16.2. Brak BLUF, decyzja dopiero w ostatnim akapicie. „edytor, który działa od 2003 roku” (Gutenberg jest od 2018). Literówka „miłonowego ruchu”. „Moja decyzja w 80% przypadków”. Kanibalizuje się z wordpress-vs-next-js-koszt i strona-firmowa-2026. | przepisać | P1 |
| pozycjonowanie-strony-uslugowej | 427 | body 8 | 5 | 65 | Cienki, a sam zaleca „min. 1500 słów, 8+ sekcji H2”. Niepoparte liczby („20-40% wzrostu ruchu w 2 miesiące”, anchory „70/30”). Brak BLUF. Brak strony usługi SEO, więc wpis nie wspiera żadnej money page bezpośrednio. „Najtańszy boost”, „mega ryzyko”, „regular content”. Meta: „Plan z mojej praktyki”. | rozbudować | P2 |
| wdrozenia-ai-w-malych-firmach | 436 | body 7 | 5 | 70 | Pięć przypadków z kosztami i efektami bez źródła i bez realizacji w portfolio (cytaty niżej). Rok „2025-2026” w tytule. Modele z 2024 (GPT-4o, o1, Llama 3). Fraza „wdrożenia AI” kanibalizuje stronę `wdrozenia-ai`. „extraction”, „fallback na manuala”. | przepisać | P1 |
| core-web-vitals-2026 | 419 | body 7 | 5 | 65 | Zmyślona metryka „CLS-2” (także w meta i excerpcie). „W 2026 są dyskusje o zaostrzeniu LCP do 2.0s” bez źródła. „95th percentile” w treści vs 75. w FAQ (poprawne: 75.). „Wpływ ~5-10% na ranking” wymyślone. Wspiera money page przyspieszanie-stron-wordpress, więc błędy szkodzą podwójnie. | przepisać | P1 |
| next-js-co-to-jest | 1078 | 6 sekcji | 6 | 55 | „Docusaurus i Mintlify są oparte o Next.js z powodu.” (Docusaurus nie jest, zdanie urwane). „Bundle size spada o 30-60%” bez źródła. „Next.js dla 80% projektów”. Sekcja cen z widełkami 8-80 tys. (dubluje ile-kosztuje-strona-na-next-js). Anglicyzmy: „out of the box” x3, „use case”, „heavy interactivity”, „sub-1s”, „user-specific data”. | poprawić fakty | P2 |
| ile-kosztuje-strona-na-next-js | 1072 | 5 sekcji | 6 | 55 | Wycena własna: „Najwięcej projektów które realizuję: strony firmowe z CMS w przedziale 15-30 tys. zł”, FAQ „Czy oferujesz fixed-price”, „Co dostaję w cenie wdrożenia?”. Vercel Hobby jako darmowy hosting firmy (niezgodne z regulaminem Vercel). „60% world web market WordPressa = 60% ataków”. Blok TCO skopiowany z wordpress-vs-next-js-koszt. Pokrywa intencję komercyjną strony `aplikacje-nextjs`. | przepisać | P1 |
| headless-cms-co-to | 393 | body 7 | 5 | 65 | Cienki. „Sanity (... polski support)” nieprawdziwe lub niesprawdzalne. Ceny Sanity/Contentful do weryfikacji (patrz lista). „Sanity dla 80% projektów PL”. „struktur danych w kodzie” (literówka). Markdown bold w liście marek. | rozbudować | P3 |
| next-js-a-seo | 1204 | 6 sekcji | 6 | 60 | Tytuł „indeksuje się 5x lepiej” bez źródła. Lead, meta description i sekcja z case study kancelarii (+180%, CPC −30%) bez potwierdzenia. „Indeksacja SSR 2-12 h, CSR 7-21 dni” bez źródła i sprzeczne z badaniem Vercel/MERJ 2024 (Google renderuje JS z medianą opóźnienia rzędu sekund). Akapity o social sharing i AI search skopiowane z ssr-vs-csr-seo. „Awwwards SOTY, Y Combinator”. Pauza w nagłówku. | przepisać | P1 |
| next-js-vs-react-roznice | 974 | 5 sekcji | 6 | 55 | „Wrocław ma kilkudziesięciu seniorów Next.js (meetupy Wrocław.tech, ReactWro)”, „stack, którego używa większość software house'ów w mieście”, „95% nowych projektów Next.js używa TypeScript” bez źródeł. Stawki godzinowe podane jako fakt. BLUF poprawny. | poprawić fakty | P3 |
| server-side-rendering-co-to | 431 | body 11 | 5 | 70 | Cienki, telegraficzny styl list. „Nadużywanie SSR oznacza 5-10x droższy hosting” bez źródła. „Vercel automatically optymalizuje”, „heavy interactivity”, „user-specific data”, „sub-1s LCP”. Nakłada się z static-site-generation-co-to i next-js-co-to (te same 4 strategie). | rozbudować | P3 |
| ssr-vs-csr-seo | 386 | body 7 | 5 | 65 | Zmyślony lub niepotwierdzony case migracji e-commerce (+210%) w treści, FAQ i meta description. Dane o indeksacji bez źródła. Prawie dosłowny duplikat 4 akapitów z next-js-a-seo. BLUF tylko w excerpcie, treść otwiera „Pytanie jest źle zadane”. | przepisać | P1 |
| jamstack-co-to-jest | 413 | body 8 | 5 | 65 | Tytuł „czemu to przyszłość stron www” (clickbait bez treści). „80% Awwwards SOTY winners, większość startupów Y Combinator” zmyślone. Ceny w FAQ (15-30 tys., 30-80 tys.). Fraza „Jamstack” wspólna ze stroną usługi `strony-jamstack`. Źle zbudowane zdanie z przecinkami zamiast dwukropków („Frontend, Next.js, Astro...”). | rozbudować | P2 |
| wordpress-vs-next-js-koszt | 620 | body 20 | 6 | 60 | Meta description „Realne liczby z faktur klientów” oraz „WordPress 4-12 tys. zł utrzymania” sprzeczne z treścią (9-25 tys. łącznie). Poleca „Theme custom + Elementor lub Bricks”, a wpis o Elementorze i strona usługi mówią „bez Elementora”. Vercel free dla firmy. „Next.js 200-1000 zł maintenance” bez podstaw. „niższy konwersja”, „oczekiwanie performance jako sygnał branża”. Lead BLUF jest. | przepisać | P1 |
| migracja-wordpress-na-nextjs | 547 | body 14 | 5 | 55 | Cienki jak na przewodnik krok po kroku. Ceny (18-30, 30-60, 60-120 tys.) podane jak cennik. „complacency klienta” (błędne słowo, znaczy samozadowolenie). Wspiera `headless-wordpress`, więc warto rozbudować bez cen własnych. | rozbudować | P2 |
| strona-firmowa-2026-jaka-technologia | 511 | body 13 | 5 | 65 | „Stary stary good”, „klient comfort z modern performance”. Ceny pięciu ścieżek. Brak BLUF („zależy od 4 zmiennych”). Slug i temat blisko strony usługi `nowoczesna-strona-firmowa-2026`, a treść dubluje next-js-15-vs-wordpress-2026. | przepisać | P2 |
| tailwind-css-co-to | 352 | body 6 | 5 | 60 | Najkrótszy wpis. „Stack, którego używa 70%+ nowych projektów”, „przeskoczył Bootstrap i CSS Modules” bez źródeł. Tytuł „zastępuje tradycyjne CSS” (Tailwind to też CSS). Słabe powiązanie z money pages. | rozbudować | P3 |
| vercel-hosting-co-to | 377 | body 11 | 5 | 60 | Plan Hobby przedstawiony jako wystarczający dla „90% stron firmowych”, a Vercel dopuszcza go tylko do użytku niekomercyjnego. „Lighthouse CI build-in” (to nie jest funkcja Vercel). Limity planów (100 GB-hours, 5000 obrazów) do sprawdzenia. „Większość projektów które robię startuje na free i tam zostaje”. | poprawić fakty | P2 |
| sanity-cms-vs-strapi | 391 | body 13 | 5 | 60 | Ceny Sanity (Growth „od 99$/mc”, free „100k requests + 3 użytkowników”) prawdopodobnie nieaktualne. „Moja preferencja: dla 80% projektów PL Sanity” bez realizacji na Sanity w portfolio (sam serwis trzyma treści w plikach TS). Brak BLUF („Wybór nie jest oczywisty”). | poprawić fakty | P3 |
| static-site-generation-co-to | 433 | body 13 | 5 | 60 | Cienki, nakłada się z SSR i Jamstack. „Jekyll deprecated” nieprawda (nie jest wycofany). „prerendeuje” (literówka). Czasy buildów bez źródła. | rozbudować | P3 |
| wordpress-co-to-jest | 1263 | 6 sekcji | 7 | 50 | Tytuł/excerpt/meta/lead: „60% wszystkich stron www”, a w treści poprawnie 43% (W3Techs) i ok. 60% rynku CMS. „Automattic regularnie wydaje security patches” (poprawki wydaje zespół WordPress.org). Lista firm na WP (Newsweek, Reuters Blogs, Microsoft News) do sprawdzenia. „Elementor 200-400 KB JS” bez źródła. Pauza w nagłówku. Poleca Bricks, a usługi mówią o własnym motywie. | poprawić fakty | P2 |
| co-zrobic-po-instalacji-wordpressa | 851 | 5 sekcji | 6 | 55 | „Świeży WordPress ma 15-20% tego, co potrzeba” (wymyślona liczba w BLUF). „Default to ?p=123” (nowe instalacje z mod_rewrite dostają ładne linki). „Wordfence pozwala zmienić URL admina” (nie pozwala; robi to Solid Security albo WPS Hide Login). „kara do 3% obrotu” za brak bannera bez podstawy prawnej. „PHP 7.4 wolniejszy o 30-50%”, „WP 6.5+ rekomenduje PHP 8.1+” nieaktualne. „Lossless lossy compression”, „Czek WP-Admin”, „gdyby mam tylko 30 minut”. | poprawić fakty | P2 |
| elementor-dlaczego-nie-warto | 1019 | 6 sekcji | 6 | 50 | Case klienta (1,2 MB JS, Lighthouse 23 → 96) bez potwierdzenia. „~5 mln aktywnych instalacji” (katalog wordpress.org pokazuje 10+ mln, do sprawdzenia). ACF Pro „$249/rok” vs „49$/rok” we wpisie o wtyczkach. „dla 70% projektów ... dług techniczny”. Ceny hostingu i licencji do aktualizacji. 3 pauzy w nagłówkach. Mocny, osobisty kąt: warto zachować. | poprawić fakty | P2 |
| must-have-wtyczki-wordpress-2026 | 1148 | 9 sekcji | 6 | 60 | „25 wtyczek, które instaluję w każdym projekcie” sprzeczne z usługą („niezbędne minimum wtyczek”) i z własnym „Nie instaluj 30 pluginów”. „Ja Aktualizuję” to nieistniejąca wtyczka. „RODO + EAA + e-Privacy” (EAA nie dotyczy cookies). „doręczalność 99%”. Ceny licencji do aktualizacji. „most popular WAF”, „subset 15-20”, „Lossless lossy”. Structured list syndrome (każdy punkt **Nazwa**: opis). | poprawić fakty | P2 |
| server-actions-nextjs | 941 | 5 sekcji | 6 | 55 | „Tak działa formularz kontaktowy na marcinsiwonia.pl, Server Action wysyła mail przez Resend”: nieprawda, formularz woła `fetch("/api/contact")`. „Stable od 13.4” (stabilne od 14). `useFormState` zamiast `useActionState` (React 19). Limity czasu na Vercel „10 s / 60 s” nieaktualne. „Stack którego używam w każdym projekcie”. Dużo angielskich terminów w zdaniach („mutations”, „reportgen”, „specific HTTP method”). | poprawić fakty | P2 |

## Szczegóły kontroli

### BLUF (czy pierwsze 2 zdania odpowiadają na zapytanie)

- **Tak**: dostepnosc-woocommerce, wcag-2-1-aa, next-js-co-to-jest, ile-kosztuje-strona-na-next-js, next-js-vs-react-roznice, wordpress-vs-next-js-koszt, headless-cms-co-to, server-side-rendering-co-to, jamstack-co-to-jest, tailwind-css-co-to, vercel-hosting-co-to, static-site-generation-co-to, server-actions-nextjs, elementor-dlaczego-nie-warto, must-have-wtyczki-wordpress-2026.
- **Tak, ale z błędem w BLUF**: wordpress-co-to-jest (60%), next-js-a-seo (niepotwierdzony case), co-zrobic-po-instalacji-wordpressa (wymyślone „15-20%”).
- **Nie**: ile-kosztuje-strona-www-2026, next-js-15-vs-wordpress-2026, pozycjonowanie-strony-uslugowej, wdrozenia-ai-w-malych-firmach, core-web-vitals-2026 (otwiera spekulacja), ssr-vs-csr-seo, migracja-wordpress-na-nextjs, strona-firmowa-2026-jaka-technologia, sanity-cms-vs-strapi.

### Anglicyzmy i kalki (przykłady do usunięcia przy przepisaniu)

Najczęstsze: „out of the box / out-of-the-box” (13 wystąpień w 9 wpisach), „sub-1s” (7), „user-specific data” (5), „heavy interactivity” (3), „use case” (3). Dalej pojedyncze: „Stary stary good”, „klient comfort z modern performance” (strona-firmowa), „complacency klienta” (migracja), „Vercel automatically optymalizuje” (SSR), „Najtańszy boost”, „mega ryzyko”, „regular content” (pozycjonowanie), „extraction kluczowych faktów”, „fallback na manuala” (AI), „Twoja final lista będzie subset 15-20”, „most popular WAF” (wtyczki), „Lossless lossy compression” (wtyczki, po instalacji), „Czek WP-Admin” (po instalacji), „reportgen”, „specific HTTP method” (Server Actions), „Anchor text-em z głównymi keyword”, „size-adjust calculations automatic” (next-js-a-seo), „dev velocity”, „attack surface”, „wow effect”. Błędy językowe: „niższy konwersja”, „gdyby mam tylko 30 minut”, „miłonowego ruchu”, „prerendeuje”, „struktur danych”.

### Markdown i pauzy

- Markdown w treści renderuje się poprawnie (`renderInlineLinks` obsługuje `**`, backticki i linki). Problem to schema FAQ (surowe `[tekst](url)`), opisany wyżej, oraz nadmiar pogrubień w stylu „**Etykieta**: opis” w starszych wpisach (next-js-a-seo 114 znaczników, server-actions 91, must-have 85).
- Pauzy „ — ” w tytułach lub meta tytułach 26 wpisów. Zamienić na dwukropek albo przecinek, np. „Headless CMS: co to jest i kiedy ma sens”.

### Kanibalizacja

**Blog kontra strony usług (money pages):**

| wpis | strona usługi | ryzyko | rekomendacja |
|---|---|---|---|
| wdrozenia-ai-w-malych-firmach („wdrożenia AI małe firmy”) | wdrozenia-ai („Wdrożenia AI w firmie”) | wysokie | Zmienić frazę wpisu na informacyjną, np. „od czego zacząć automatyzację AI w małej firmie” albo „AI w małej firmie: przykłady zastosowań”. Linkować do usługi anchorem „wdrożenia AI”. |
| jamstack-co-to-jest („Jamstack co to”) | strony-jamstack („Strony Jamstack”) | średnie | Wpis zostaje definicją (intencja „co to”), usunąć ceny i „default Jamstack”, tytuł bez „przyszłość stron www”. |
| strona-firmowa-2026-jaka-technologia („jaki stack na stronę firmową”) | nowoczesna-strona-firmowa-2026 („Strona firmowa dla małej firmy”) | średnie | Tytuł bez „strona firmowa 2026”, fraza „technologia strony firmowej / na czym zrobić stronę firmową”. Bez cen. |
| ile-kosztuje-strona-na-next-js | aplikacje-nextjs („Tworzenie stron Next.js”) | średnie | Wpis musi być rynkowy (widełki z uzasadnieniem, co wpływa na koszt), bez „realizuję”, „oferujesz”, „co dostaję w cenie”. |
| migracja-wordpress-na-nextjs | headless-wordpress | niskie | Różne frazy, wpis wspiera usługę. Usunąć cennik. |
| ile-kosztuje-strona-www-2026 | tworzenie-stron-www (odsyła do wpisu po ceny) | niskie dla SEO, wysokie dla polityki cen | Zdecydować: albo wpis podaje rynek bez cen własnych, albo usługa przestaje odsyłać po „aktualne ceny”. |

**Między wpisami:**

- „Next.js czy WordPress”: next-js-15-vs-wordpress-2026, wordpress-vs-next-js-koszt, strona-firmowa-2026-jaka-technologia, plus sekcje w ile-kosztuje-strona-na-next-js i wordpress-co-to-jest. Podział: next-js-15-vs-wordpress = decyzja (fraza „Next.js czy WordPress”), wordpress-vs-next-js-koszt = tylko koszty utrzymania (fraza z keyword), strona-firmowa = szerszy wybór z Webflow/Framer. Usunąć zduplikowane bloki TCO z pozostałych wpisów i linkować.
- SSR/CSR pod SEO: ssr-vs-csr-seo i next-js-a-seo mają te same cztery akapity (indeksacja, CWV, social, AI search). Rekomendacja: ssr-vs-csr-seo przepisać na temat „jak Googlebot i crawlery AI widzą JavaScript” z danymi z badań, next-js-a-seo zostawić jako checklistę konfiguracji. Opcja do decyzji właściciela: scalić ssr-vs-csr-seo w next-js-a-seo z 301.
- Strategie renderowania: server-side-rendering-co-to, static-site-generation-co-to, next-js-co-to-jest i jamstack powtarzają te same opisy SSG/ISR/SSR/CSR. Przy rozbudowie każdy wpis ma mieć inny kąt (SSR: koszty i cache; SSG: build i limity; Jamstack: architektura).
- Ceny: ile-kosztuje-strona-www-2026, ile-kosztuje-strona-na-next-js, wordpress-vs-next-js-koszt. Frazy różne, ale liczby sprzeczne. Jedno źródło widełek.

### Cienkie wpisy (body-only, poniżej ok. 800 słów)

tailwind-css-co-to (352), vercel-hosting-co-to (377), ile-kosztuje-strona-www-2026 (379), ssr-vs-csr-seo (386), sanity-cms-vs-strapi (391), headless-cms-co-to (393), jamstack-co-to-jest (413), core-web-vitals-2026 (419), pozycjonowanie-strony-uslugowej (427), server-side-rendering-co-to (431), static-site-generation-co-to (433), wdrozenia-ai-w-malych-firmach (436), next-js-15-vs-wordpress-2026 (439), strona-firmowa-2026-jaka-technologia (511), migracja-wordpress-na-nextjs (547), wordpress-vs-next-js-koszt (620). Na granicy: co-zrobic-po-instalacji-wordpressa (851, ma sekcje).

## Top 8 do przepisania w pierwszej kolejności

1. **wdrozenia-ai-w-malych-firmach**. Dlaczego: pięć przypadków z kosztami i efektami, których nie ma w portfolio, do tego kanibalizacja strony `wdrozenia-ai` i rok w tytule. Przepisanie musi: usunąć wszystkie przypadki albo zastąpić je jednym prawdziwym (z projektu właściciela, np. automatyzacje Make/n8n, jeśli są udokumentowane), zmienić frazę na informacyjną, podać koszty tylko jako składniki (API, integracja, utrzymanie) ze źródłami cenników, aktualne modele, wątki RODO i AI Act, BLUF, tytuł bez roku.
2. **next-js-a-seo**. Dlaczego: niepotwierdzony case w leadzie, meta description i sekcji, tytuł „5x lepiej”, dane o indeksacji sprzeczne z badaniami. Przepisanie musi: usunąć case i „5x”, oprzeć się na dokumentacji Google (rendering JS) i badaniu Vercel/MERJ 2024, jako przykład pokazać marcinsiwonia.pl z prawdziwym, zmierzonym wynikiem, zostawić checklistę konfiguracji (to wartościowa część), usunąć akapity skopiowane z ssr-vs-csr-seo, pauza w nagłówku.
3. **ssr-vs-csr-seo**. Dlaczego: drugi niepotwierdzony case (+210%), w meta description, i prawie duplikat next-js-a-seo. Przepisanie musi: zmienić kąt na „jak Googlebot i crawlery AI przetwarzają JavaScript” (Google renderuje, większość botów AI nie wykonuje JS), podać źródła, BLUF w treści, a nie tylko w excerpcie; albo, do decyzji, scalić z next-js-a-seo.
4. **ile-kosztuje-strona-www-2026**. Dlaczego: najbardziej komercyjne zapytanie na blogu, strona usługi odsyła tu po ceny, a wpis ma 379 słów, bez BLUF, z cenami w pierwszej osobie i widełkami sprzecznymi z innymi wpisami. Przepisanie musi: zacząć od odpowiedzi (przedziały rynkowe i od czego zależą), oprzeć widełki na zewnętrznych źródłach albo nazwać je szacunkiem rynku, nie ofertą, pokazać składniki kosztu (projekt, treści, integracje, utrzymanie), usunąć rok z title/metaTitle, dojść do ok. 1500 słów w sekcjach z tabelą.
5. **core-web-vitals-2026**. Dlaczego: „CLS-2” nie istnieje, błędny percentyl, wymyślony wpływ na ranking, a wpis wspiera usługę przyspieszania WordPressa. Przepisanie musi: oprzeć progi i definicje na web.dev i Search Central, 75. percentyl, bez spekulacji o 2.0 s, przykłady napraw także dla WordPressa (nie tylko next/image), link do `przyspieszanie-stron-wordpress`, tytuł bez roku.
6. **wordpress-vs-next-js-koszt**. Dlaczego: meta „z faktur klientów”, sprzeczność meta vs treść, rekomendacja Elementora sprzeczna z resztą serwisu, darmowy Vercel dla firmy. Przepisanie musi: zostać tylko przy koszcie utrzymania (fraza z keyword), rozpisać składniki z aktualnymi cennikami (hosting, licencje, Vercel Pro dla firm, czas aktualizacji), usunąć „faktury klientów”, ujednolicić liczby z wpisem cenowym.
7. **next-js-15-vs-wordpress-2026**. Dlaczego: nieaktualna wersja w tytule, brak BLUF, błąd o edytorze od 2003, kanibalizacja w klastrze. Przepisanie musi: tytuł „Next.js czy WordPress: …” bez numeru wersji i roku, odpowiedź w 2 pierwszych zdaniach, kryteria decyzji z przykładami, bez duplikowania TCO (link do wpisu o kosztach), sprawdzić, czy zmiana sluga ma sens (tylko z 301).
8. **ile-kosztuje-strona-na-next-js**. Dlaczego: wprost wycena własna i FAQ w formie oferty, co łamie politykę cen, plus Vercel Hobby i powielony blok TCO. Przepisanie musi: usunąć „realizuję”, „oferujesz”, „co dostaję w cenie”, pokazać rynkowe widełki z uzasadnieniem, poprawić hosting (Vercel Pro lub własny serwer dla firm), usunąć „60% ataków”, zostawić link do usługi jako CTA bez cen.

Szybkie poprawki poza top 8 (bez przepisywania, ale pilne, bo to fałszywe zdania o samym serwisie lub twarde błędy): server-actions-nextjs (formularz kontaktowy, `useActionState`, Next 14), wordpress-co-to-jest (60% → 43%), co-zrobic-po-instalacji-wordpressa (Wordfence, permalinki, kara 3%), vercel-hosting-co-to (plan Hobby), elementor-dlaczego-nie-warto (case, liczba instalacji), must-have-wtyczki-wordpress-2026 („Ja Aktualizuję”, EAA).

## Lista twierdzeń do usunięcia albo weryfikacji

### A. Przypadki i doświadczenie autora (usunąć, chyba że właściciel ma dowód)

1. wdrozenia-ai-w-malych-firmach: „Pięć wdrożeń które widziałem działające.”
2. tamże: „Case 1: chatbot na bazie wewnętrznych dokumentów dla biura księgowego (8 osób). … Koszt wdrożenia: 18 tys. zł, miesięczne API ~400 zł. Efekt: oszczędność 6h tygodniowo na pytaniach od młodszych księgowych.”
3. tamże: „Case 2: automatyczna klasyfikacja maili dla agencji nieruchomości (15 osób). … Koszt: 12 tys. zł, miesięczne ~600 zł. Efekt: czas odpowiedzi z 4h na 30min średnio.”
4. tamże: „Case 3: generator opisów produktów dla sklepu meblowego (12 osób). … Koszt: 8 tys. zł, miesięczne ~200 zł. Efekt: nowy produkt online w 10 minut zamiast godziny.”
5. tamże: „Case 4: voice-to-text dla kancelarii prawnej (6 osób). … Koszt: 22 tys. zł, miesięczne ~800 zł. Efekt: zero ręcznego protokołowania.”
6. tamże: „Case 5: predictive maintenance dla zakładu produkcyjnego (35 osób). … Koszt: 45 tys. zł … Efekt: 3 awarie wcześniej zapobiegnięte = ROI w 4 miesiące.”
7. tamże, excerpt: „Konkretne wdrożenia AI dla firm 5-50 osób które zwróciły się w 6-12 miesięcy.” oraz FAQ „Klasyfikacja i routing maili (oszczędność 10-20h/tydzień)… Zwrot zwykle w 3-6 miesięcy.”
8. ssr-vs-csr-seo: „zmigrowałem klientowi e-commerce z React SPA na Next.js SSG. Po 4 miesiącach: indexed pages 156→340, organic traffic +210%, average position 18→7. Cena migracji: 25 tys. zł. Zwrot z dodatkowego ruchu: 6 tygodni.” (także w FAQ i meta description: „Case study migracji: +210% organic traffic w 4 miesiące”).
9. next-js-a-seo: „Konkretny klient: kancelaria prawna (B2B, target Wrocław + Niemcy). Stara strona na WordPress + Avada theme + WooCommerce…”, „Lighthouse Performance 47, LCP 4.2s, indeksowane 200/350 … ruch organiczny: 800 wizyt/mc, koszt Google Ads CPC: 8.50 zł”, „Lighthouse Performance 96, LCP 0.9s … ruch organiczny: 2240 wizyt/mc (+180%), koszt Google Ads CPC: 5.90 zł (-30% …)”, „Koszt migracji: 35 tys. zł. Zwrot … 4 miesiące.” (także lead, FAQ, meta description „+180% ruchu w 6 mc”).
10. next-js-a-seo, tytuł i meta: „dlaczego indeksuje się 5x lepiej niż React SPA”.
11. elementor-dlaczego-nie-warto: „strona klienta na Elementor + Essential Addons + Crocoblock miała 1.2 MB JS na stronie głównej. Lighthouse Performance: 23 (na 100). LCP 6.4s. INP 480ms.” oraz „bundle JS spadł do 80 KB, Lighthouse 96, LCP 1.1s, INP 90ms”.
12. elementor-dlaczego-nie-warto i must-have-wtyczki: „Po 30+ wdrożeniach klientów (część przejętych ze starych Elementor sites)”, „25 wtyczek WordPress które instaluję w każdym projekcie” (sprawdzić ze stanem faktycznym i z usługą: „ponad 25 wdrożeń WordPress”, „niezbędne minimum wtyczek”).
13. wordpress-vs-next-js-koszt, meta description: „Realne liczby z faktur klientów.”
14. server-actions-nextjs: „Tak działa formularz kontaktowy na marcinsiwonia.pl, Server Action wysyła mail przez Resend.” (fałsz, to route handler `/api/contact`) oraz „Stack którego używam w każdym projekcie”.
15. vercel-hosting-co-to: „Większość projektów które robię startuje na free i tam zostaje.”
16. ile-kosztuje-strona-na-next-js: „Najwięcej projektów które realizuję: strony firmowe z CMS w przedziale 15-30 tys. zł, czas wdrożenia 6-10 tygodni.”
17. sanity-cms-vs-strapi / headless-cms-co-to: „Moja preferencja: dla 80% projektów PL Sanity”, „Sanity (… polski support …)”.
18. elementor / wordpress-co-to-jest: „Bricks Builder … stack którego używam w większości stron WordPress we Wrocławiu” (usługa mówi o własnym motywie; ujednolicić z prawdą).
19. next-js-vs-react-roznice / wordpress-vs-next-js-koszt: „Wrocław ma kilkudziesięciu seniorów Next.js (meetupy Wrocław.tech, ReactWro)”, „Stack którego używa większość software house'ów w mieście”.
20. next-js-15-vs-wordpress-2026: „Moja decyzja w 80% przypadków…”; pozycjonowanie-strony-uslugowej, meta: „Plan z mojej praktyki.”

### B. Liczby i procenty bez źródła (usunąć albo podać źródło)

- core-web-vitals-2026: „CLS-2 mierzący layout shift po interakcji” (nie istnieje), „W 2026 są dyskusje o zaostrzeniu progów LCP z 2.5s na 2.0s”, „Google rozważa zaostrzenie LCP do 2.0s w 2026”, „Wpływ ~5-10% na ranking”, „95th percentile w zielonym” (powinno być 75.).
- ssr-vs-csr-seo / next-js-a-seo / next-js-co-to-jest: „SSR 2-12 godzin, CSR 7-21 dni”, „LCP … CSR 3.5-5s … SSR/SSG 0.8-1.5s”, „Bundle size spada o 30-60%”, „SSR sites są cytowane częściej w AI Overviews”.
- wordpress-co-to-jest (tytuł, meta, excerpt, lead), wordpress-vs-next-js-koszt, ile-kosztuje-strona-na-next-js: „60% wszystkich stron www”, „60% world web market = 60% ataków”.
- jamstack-co-to-jest / next-js-a-seo: „80% Awwwards SOTY winners, większość startupów Y Combinator”.
- tailwind-css-co-to: „70%+ nowych projektów React/Next.js”, „Przeskoczył Bootstrap i CSS Modules pod względem popularności”, „po 2 tygodniach … nie chcesz wracać”.
- next-js-vs-react-roznice: „95% nowych projektów Next.js używa TypeScript”.
- next-js-15-vs-wordpress-2026: „dla 90% biznesów ta różnica nic nie kosztuje konwersją”, „WordPress … dla 60-80% małych firm”.
- server-side-rendering-co-to: „SSG/ISR (90% przypadków)”, „Nadużywanie SSR oznacza 5-10x droższy hosting”.
- jamstack-co-to-jest: „Jamstack ma sens dla 70-80% stron”.
- vercel-hosting-co-to: „Free tier wystarczy 90% projektom”.
- elementor-dlaczego-nie-warto: „dla 70% projektów wybór Elementor w 2026 to dług techniczny”, „Elementor dodaje 200-400 KB JavaScript do każdej podstrony”, „~5 mln aktywnych instalacji”, „Realny TCO 3 lata … 17-33 tys. zł”.
- co-zrobic-po-instalacji-wordpressa: „Świeży WordPress po instalacji ma 15-20% tego co potrzeba”, „Działa na 7.4 ale wolniejszy o 30-50%”, „ryzyko kary do 3% obrotu rocznego” (jeśli chodzi o kary UKE z Prawa komunikacji elektronicznej, podać tę podstawę; RODO przewiduje inne progi).
- must-have-wtyczki: „doręczalność 99%”, „Rank Math … lekko zyskuje przewagę nad Yoast w 2026”.
- pozycjonowanie-strony-uslugowej: „sama indeksacja + szybkość daje 20-40% wzrostu ruchu w 2 miesiące”, „brand + frazy long-tail w proporcjach 70/30”, „ROI miesięczny zwykle widać po 6-12 miesiącach”.
- wdrozenia-ai: „AI … daje mu 2-3x więcej spraw obsłużonych w tym samym czasie”.

### C. Błędy merytoryczne i dane do aktualizacji (sprawdzić w źródłach przed poprawką)

- Vercel: plan Hobby tylko do użytku osobistego i niekomercyjnego (regulamin/fair use Vercel), a wpisy vercel-hosting-co-to, ile-kosztuje-strona-na-next-js, wordpress-vs-next-js-koszt, jamstack-co-to-jest, next-js-a-seo polecają go stronom firmowym. Limity „100 GB-hours edge function execution”, „image optimization 5000/mc”, timeout Server Action „10s free, 60s Pro” prawdopodobnie nieaktualne (Fluid compute). „Lighthouse CI build-in” nie jest funkcją Vercel.
- Sanity: „Growth od 99$/mc”, „free do 100k requests + 3 użytkowników” do sprawdzenia w aktualnym cenniku. Contentful „od 489$/mc” do sprawdzenia.
- Next.js/React: Server Actions stabilne od Next.js 14, nie 13.4; `useFormState` w React 19 zastąpione przez `useActionState`; „CSRF … od 14.1+” do sprawdzenia; Docusaurus nie jest zbudowany na Next.js; „Next.js 15” w tytule (aktualnie 16).
- WordPress: domyślne permalinki `?p=123` tylko bez mod_rewrite; Wordfence nie zmienia adresu logowania; „WordPress 5.0+ wymaga zmiany loginu admin przy instalacji” do sprawdzenia; zalecana wersja PHP (obecnie 8.3+ według wordpress.org/about/requirements); „Automattic wydaje security patches” (WordPress.org Security Team); edytor „od 2003 roku” (Gutenberg 2018); lista serwisów na WP (Newsweek, Reuters Blogs, Microsoft News); „Twenty Twenty-Six” sprawdzić, czy jest już w wydaniu.
- Ceny licencji: Elementor Pro (59/99/199/399$), Bricks („$249 lifetime”), ACF Pro (49$ vs 249$ w dwóch wpisach), WP Rocket, Yoast Premium, Wordfence Premium, Real Cookie Banner. Najlepiej usunąć kwoty albo dodać datę sprawdzenia.
- Cookies: „RODO + EAA + e-Privacy” (EAA dotyczy dostępności, nie zgód cookies).
- must-have-wtyczki: „Ja Aktualizuję” to nazwa bez pokrycia, usunąć.
- static-site-generation-co-to: „Jekyll deprecated” (nie jest wycofany).
- wcag-2-1-aa: liczba kryteriów WCAG 2.2 na A+AA (w tekście 56, z moich wyliczeń 55), kwota 89 000 zł (podać bazę: przeciętne wynagrodzenie z komunikatu GUS).
- wdrozenia-ai: nazwy modeli (GPT-4 / o1, Llama 3, „Claude 200k context”) nieaktualne.

### D. Ceny w pierwszej osobie lub w formie oferty (usunąć albo przerobić na widełki rynkowe)

- ile-kosztuje-strona-na-next-js: „projekty które realizuję: … 15-30 tys. zł”, FAQ „Czy oferujesz fixed-price czy stawkę godzinową?”, „Co dostaję w cenie wdrożenia?”.
- ile-kosztuje-strona-www-2026: cały wpis w pierwszej osobie („Najczęstsze pytanie jakie dostaję mailem…”), widełki podane jak cennik, meta description z cenami.
- migracja-wordpress-na-nextjs: „Cena: 18-30 tys. zł” / „30-60 tys.” / „60-120 tys.”.
- elementor-dlaczego-nie-warto: „Headless WordPress + Next.js (15-30 tys. wdrożenie)” przy linku do własnej usługi.
- ssr-vs-csr-seo, next-js-a-seo: ceny migracji w zmyślonych przypadkach.
- next-js-15-vs-wordpress-2026, wordpress-vs-next-js-koszt, jamstack-co-to-jest, strona-firmowa-2026-jaka-technologia, headless-cms-co-to: koszty migracji i wdrożeń 18-30 tys., 15-30 tys., „Sanity setup minimum 5-10 tys. zł”.
- Strona usługi tworzenie-stron-www: „aktualne ceny rozłożyłem w poście o cenach stron www” (decyzja właściciela, czy to zostaje).

## 5 pomysłów na nowe wpisy wspierające money pages

Każdy tylko po sprawdzeniu popytu (skill `korpus-autocomplete` albo GSC). Frazy dobrane tak, żeby nie powtarzać fraz stron usług.

1. **„Dostępność koszyka i kasy WooCommerce: test klawiaturą i czytnikiem ekranu”**. Wspiera `audyt-wcag` i `sklepy-internetowe-woocommerce`. Uzasadnienie: wpis dostepnosc-woocommerce wprost mówi, że koszyk i kasa nie zostały zbadane; ciąg dalszy z własnymi danymi (np. na sklepie testowym) buduje ten sam, najlepiej działający typ treści. Nie kanibalizuje, bo fraza dotyczy etapu zakupu, nie usługi audytu.
2. **„Informacja o dostępności usługi w regulaminie sklepu: co wpisać po EAA”**. Wspiera `audyt-wcag`. Uzasadnienie: wcag-2-1-aa ustala, że firmy prywatne nie składają deklaracji, tylko podają informację w regulaminie, ale nie mówi jak. Zapytanie praktyczne, nieobsłużone przez stronę audytu.
3. **„Dlaczego WordPress wolno działa: przyczyny i jak je sprawdzić”**. Wspiera `przyspieszanie-stron-wordpress`. Uzasadnienie: fraza problemowa (diagnoza) zamiast komercyjnej „przyspieszenie strony WordPress”, którą ma usługa. Warunek: nie używać frazy usługi w tytule i H1, linkować do usługi jako rozwiązania.
4. **„Strona na WordPressie zhakowana: co zrobić krok po kroku”**. Wspiera `opieka-wordpress`. Uzasadnienie: pilna intencja problemowa, która naturalnie prowadzi do abonamentu opieki; na blogu brak tego tematu, a wpis co-zrobic-po-instalacji dotyczy prewencji, nie reakcji.
5. **„Przeniesienie sklepu do WooCommerce z innej platformy bez utraty pozycji”**. Wspiera `sklepy-internetowe-woocommerce` (oraz pośrednio `integracja-woocommerce-z-baselinker`). Uzasadnienie: migracja to osobna intencja od „sklep WooCommerce”; blog ma przewodnik migracji tylko w kierunku WordPress → Next.js. Bez cen, z checklistą przekierowań i danych produktów.
