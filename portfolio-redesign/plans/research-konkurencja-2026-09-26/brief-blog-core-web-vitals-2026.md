Użyj skilla Mistrz Blogowania.

Zadanie: napisz od nowa wpis blogowy na blogu freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl). Obecny wpis ma zmyślone przypadki klientów i liczby bez źródła: wszystkie usuń, nie zastępuj ich innymi wymyślonymi. Zachowaj to, co w obecnym wpisie jest merytorycznie wartościowe. Pierwsza osoba (Marcin), czytelnik: właściciel firmy albo osoba decydująca o stronie, częściowo techniczna.

FORMAT WYNIKU (dokładnie tak, bez komentarzy):
=== WPIS: [slug] ===
TITLE: … (bez roku, bez pauz, maks. 60 znaków)
METATITLE: … (maks. 60 znaków, fraza na początku)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania: odpowiedź na pytanie z tytułu w pierwszym zdaniu)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; jeśli tabela, to w Markdown z nagłówkiem]
## [nagłówek sekcji 2]
… (5-7 sekcji)
FAQ:
- P: … | O: … (5 pytań, odpowiedź 2-4 zdania)

Zasady: 1600-2200 słów bez FAQ. Każda liczba z sekcji FAKTY albo usunięta. Bez em-dashy i półpauz. Nagłówki zdaniowe, informacyjne. Linki wewnętrzne w Markdown [tekst](/adres), maks. 3 w treści. Bez podsumowania „Podsumowując” i bez wezwania do kontaktu na końcu.

# ZASADY STYLU (z audytu serwisu)
## Część 6. Dziesięć zasad stylu do briefu przepisywania

1. **H1 = co + dla kogo, lead = co + dla kogo + gdzie.** Zero sloganów w H1 („Design-led, nie stack-led”, „Strona działa, Ty pracujesz”). W leadzie jedno zdanie o miejscu: „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”
2. **Każda liczba ma pokrycie** w realizacji, pomiarze albo tabeli liczb kanonicznych. Bez statystyk rynkowych bez źródła (30%, 70%, „większość agencji liczy 30-50 ludzi”), bez superlatywów („najszybsza technologia”, „Awwwards”, „<1s globalnie”) i bez obietnic rankingów.
3. **Polskie słowo, gdy istnieje**: własny motyw (nie custom theme), na zamówienie (nie custom/customowy), wydajność (nie performance), wersja testowa (nie staging), wdrożenie (nie deploy), rozpoznanie (nie discovery), prototyp (nie proof of concept), mała firma (nie SME). Nazwy produktów (Next.js, WooCommerce, BaseLinker) zostają.
4. **Żargon tylko z tłumaczeniem korzyści.** Jeśli pada LCP, ISR, CDN, schema, to w tym samym zdaniu po ludzku, co to daje właścicielowi. Żadnego kodu w treści (`color: peach`, `prefers-reduced-motion`), żadnych strzałek i plusów zamiast spójników.
5. **Jeden głos: „ja” i „Ty”.** Nie „klient widzi”, nie „dobieramy” przy solo pracy, nie bezosobowe „Hosting dobierzesz”, „Otrzymasz”. Na stronach branżowych konsekwentnie „Ty”, bez przeskoków na „Wy”.
6. **Fraza główna raz w H1 i raz w pierwszym akapicie**, nie jako otwarcie dwóch kolejnych akapitów. Pytania FAQ tak, jak pyta człowiek o swoją jedną stronę („Ile potrwa strona dla mojego hotelu?”), nie „tworzenie stron dla hoteli i pensjonatów”.
7. **Bez półpauz i pauz w prozie i tytułach meta.** Zamiast „—” dwukropek, przecinek lub kropka. Zakresy liczbowe jako „od 4 do 6 tygodni” albo „4-6 tygodni” konsekwentnie; ułamki z przecinkiem („2,5 s”).
8. **Zróżnicowany rytm bez tików.** Nie wstawiać krótkiego zdania-puenty w to samo miejsce każdej karty, nie zaczynać FAQ o cenie od „Wycena zależy od”, nie kończyć odpowiedzi zdaniem „Wycenę przygotowuję indywidualnie po zapoznaniu się z briefem”. Każda odpowiedź o cenie nazywa jeden główny czynnik kosztu dla tej usługi (jak dobre przykłady: „Najwięcej waży silnik rezerwacji”, „wycenia się przez warianty”).
9. **Dowód zamiast deklaracji.** Każda strona usługi ma jeden nazwany projekt z jednym konkretem (co było, co zrobiłem, co wyszło). Tam, gdzie realizacji nie ma (influencerzy, streamerzy, AI), mówimy to prosto jednym zdaniem i nie nadajemy sekcji nagłówka „które zrobiłem”.
10. **Uczciwe granice, bez frazesów.** Wyciąć „Bez ukrytych kosztów”, „Zero niespodzianek”, „Bez ściemy”, „Idealnie”, „Dobra wiadomość”, aforyzmy i przytyki do konkurencji. Zostawić i rozwijać to, co działa: sekcje „notFor”, „Kiedy WooCommerce nie będzie dobrym wyborem”, „Co jeśli efektu nie będzie”, szczere zastrzeżenia o migracji i Google. Wzorcem tonu jest strona BaseLinker i lead gabinetów.


# CO MUSI NAPRAWIĆ PRZEPISANIE (z audytu bloga)
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




# TEN WPIS: core-web-vitals-2026
Fraza: „Core Web Vitals” (tytuł bez roku). Kąt: czym są trzy metryki, jakie są progi, jak je mierzyć i jak poprawić, także na WordPressie (nie tylko w Next.js). Wspiera usługę przyspieszania WordPressa.
FAKTY (web.dev, Google Search Central):
- Trzy metryki Core Web Vitals: LCP (szybkość wyświetlenia największego elementu), INP (reakcja na interakcje), CLS (stabilność układu).
- Progi na 75. percentylu wizyt, osobno dla telefonów i komputerów: LCP dobry do 2,5 s, słaby powyżej 4 s; INP dobry do 200 ms, słaby powyżej 500 ms; CLS dobry do 0,1, słaby powyżej 0,25. Źródło: https://web.dev/articles/vitals
- INP zastąpił FID jako Core Web Vital 12 marca 2024 roku. Źródło: https://web.dev/blog/inp-cwv-launch
- Dane terenowe (CrUX, raport Core Web Vitals w Search Console) różnią się od pomiaru laboratoryjnego (Lighthouse, PageSpeed Insights w części lab). Google ocenia na danych rzeczywistych użytkowników.
- Core Web Vitals są częścią sygnałów page experience; Google podkreśla, że trafna treść jest ważniejsza. Źródło: https://developers.google.com/search/docs/appearance/core-web-vitals
- Typowe przyczyny i naprawy: LCP (ciężkie zdjęcie w pierwszym ekranie, wolny serwer, blokujące CSS/JS, fonty), INP (dużo JavaScriptu, wtyczki, skrypty zewnętrzne, długie zadania), CLS (obrazy bez wymiarów, reklamy i banery wstawiane nad treścią, fonty podmieniane po załadowaniu). Na WordPressie: cache, optymalizacja obrazów WebP/AVIF, ograniczenie wtyczek i kreatorów, lekki motyw.
- Własny zmierzony przykład: marcinsiwonia.pl (Next.js 16), wrzesień 2026: LCP na telefonie z 4,7 s do 2,0 s; przyczyną była plansza intro renderowana na serwerze.
- NIE PISAĆ: „CLS-2” (nie istnieje), „95. percentyl”, spekulacji o zaostrzeniu progów, procentowego wpływu na ranking.
Linki: [przyspieszanie stron WordPress](/uslugi/przyspieszanie-stron-wordpress), [Next.js a SEO](/blog/next-js-a-seo).

# OBECNA TREŚĆ WPISU
    slug: "core-web-vitals-2026",
    title: "Core Web Vitals 2026: co się zmieniło i jak to naprawić",
    excerpt:
      "INP zastąpiło FID, LCP cele zaostrzone, doszedł nowy metric CLS-2. Konkretne strategie napraw dla każdego.",
    date: "2026-02-14",
    readingMinutes: 9,
    tags: ["performance", "Core Web Vitals", "SEO"],
    keyword: "Core Web Vitals 2026",
    metaTitle: "Core Web Vitals 2026 — co się zmieniło, jak naprawić",
    metaDescription:
      "INP zastąpiło FID, LCP cele zaostrzone, CLS-2 mierzy shift po interakcji. Konkretne strategie napraw: next/image, RSC, font-display, edge functions. 2026.",
    hero: { kind: "performance" },
    relatedServices: ["przyspieszanie-stron-wordpress", "aplikacje-nextjs", "tworzenie-stron-www"],
    body: [
      "Google podkręciło śrubę. W 2024 INP zastąpiło FID jako oficjalny metric responsywności. W 2026 są dyskusje o zaostrzeniu progów LCP z 2.5s na 2.0s i dodaniu CLS-2 mierzącego layout shift po interakcji. Co to znaczy w praktyce.",
      "LCP (Largest Contentful Paint): czas do wyrenderowania największego elementu w viewport. Cel: poniżej 2.5s. Najczęstsze winowajce: niezoptymalizowane obrazki, blokujący JS, wolne TTFB z serwera. Naprawa: next/image z priority na hero, preload critical fonts, hosting z edge caching.",
      "INP (Interaction to Next Paint): opóźnienie między kliknięciem/stuknięciem a odpowiedzią UI. Cel: poniżej 200ms. Najczęstsze: ciężki JS na main thread, brak Web Workers, synchronous third-party scripts. Naprawa: React Server Components, lazy load non-critical, defer analytics.",
      "CLS (Cumulative Layout Shift): przesunięcia layoutu po wczytaniu. Cel: poniżej 0.1. Najczęstsze: obrazki bez width/height, fonty z FOIT/FOUT, dynamiczne wstawianie reklam/popupów. Naprawa: aspect-ratio CSS, font-display: swap z size-adjust, rezerwacja miejsca na dynamic content.",
      "TTFB (Time To First Byte): odpowiedź serwera. Nie jest core ale wpływa na LCP. Cel: poniżej 800ms. Naprawa: edge functions zamiast SSR, ISR z revalidate, CDN przed origin, optymalizacja DB queries.",
      "Narzędzia do mierzenia: PageSpeed Insights (data z field + lab), Search Console Core Web Vitals report (real users z 28 dni), Chrome DevTools Performance (debug), web-vitals npm package (own analytics).",
      "Praktyczna strategia: ustal baseline, atakuj LCP najpierw (najwięcej impact), potem INP (drugie miejsce), CLS na końcu (zwykle daje się szybko ogarnąć). Mierz po każdej zmianie. Cel długoterminowy: 95th percentile w zielonym dla wszystkich 3 metrik.",
    ],
    faq: [
      { q: "Jakie są obecne progi Core Web Vitals?", a: "LCP poniżej 2.5s (good), INP poniżej 200ms, CLS poniżej 0.1. Mierzone na 75th percentile real users z 28 dni. Google rozważa zaostrzenie LCP do 2.0s w 2026." },
      { q: "Co to INP i jak go naprawić?", a: "Interaction to Next Paint: opóźnienie między kliknięciem a odpowiedzią UI. Naprawa: React Server Components (mniej JS w bundle), lazy load non-critical, defer analytics, Web Workers dla heavy compute." },
      { q: "Jak naprawić LCP poniżej 2.5s?", a: "next/image z priority na hero (preload), preload critical fonts (next/font), edge caching (Vercel edge functions, Cloudflare), optimized hero (WebP/AVIF, properly sized), brak blokujących third-party scripts above the fold." },
      { q: "Czy Core Web Vitals są sygnałem rankingowym?", a: "Tak, od 2021. Wpływ ~5-10% na ranking dla competitive fraz. Słabe CWV = niższe pozycje (przy podobnych innych czynnikach). Dobre CWV = przewaga, ale nie zastąpi treści i linków." },
      { q: "Jakie narzędzia używać do mierzenia?", a: "PageSpeed Insights (lab + field data), Search Console Core Web Vitals report (real users 28 dni), Chrome DevTools Performance (debug), web-vitals npm package (own analytics), Vercel Analytics (built-in)." },
    ],
