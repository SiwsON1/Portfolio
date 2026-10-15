# Wydajność 15.10: zadanie dla Codexa

Projekt: Next.js 16.2.4 (App Router, przeczytaj `node_modules/next/dist/docs/` przy wątpliwościach), React 19.2, gsap 3.15, lenis 1.3, three 0.184 + @react-three/fiber 9 + drei 10. Hosting Vercel, strony SSG.

## Cel
Lepszy wynik Lighthouse mobile (LCP, TBT) na stronie głównej, stronach usług i wpisach, BEZ żadnej widocznej zmiany: ten sam wygląd, te same animacje, intro zostaje, rozdzielczość i jakość kuli 3D bez zmian (NIE obniżaj dpr, NIE upraszczaj geometrii).

## Twarde zakazy
- NIE edytuj ani nie formatuj plików: ROUTEMAPA.md, app/llms.txt/route.ts, app/sprawdz-dostepnosc/page.tsx, components/scan/ScanTool.tsx, lib/wcag-scan/checks.ts, qa/zr-czytanie/zrob.js, lib/services.ts, lib/seoBlocks.ts (cudze albo równoległe zmiany).
- Nie commituj. Nie instaluj nowych paczek npm.
- Zero komentarzy opisujących CO robi kod; komentarz tylko dla nieoczywistego DLACZEGO.

## Zadania
1. **Fonty (app/layout.tsx).** Dziś każda strona robi preload 6 plików woff2 (Geist latin + latin-ext, Geist Mono latin + latin-ext, Fraunces normal, Fraunces italic). Ustal grepem po komponentach, które fonty są użyte w elementach pierwszego ekranu (Nav, Hero strony głównej, nagłówek i lead strony usługi `app/uslugi/[slug]/page.tsx`, tytuł i lead wpisu `app/blog/[slug]/page.tsx`). Fonty niewidoczne na pierwszym ekranie dostają `preload: false` (zostają z `display: swap`, ładują się normalnie przy użyciu). Jeśli Geist Mono jest tylko w drobnych etykietach poniżej pierwszego ekranu, `preload: false`. Raportuj, co zostawiłeś z preloadem i dlaczego.
2. **Jeden zegar animacji.** `components/providers/SmoothScroll.tsx` kręci własną pętlę rAF dla Lenis, a GSAP (ScrollTrigger) ma swój ticker. Połącz: `new Lenis({..., autoRaf: false})`, `gsap.ticker.add((t) => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`, `lenis.on('scroll', ScrollTrigger.update)` jeśli ScrollTrigger jest używany. Zachowaj te same opcje (duration, easing, smoothWheel, touchMultiplier). Sprzątanie w cleanupie (ticker.remove, destroy). Upewnij się, że gsap jest ładowany tylko tam, gdzie i tak był (nie dociągaj gsap do stron, które go nie miały: jeśli SmoothScroll jest w layoucie, a gsap był tylko na części stron, zostaw osobną pętlę i opisz to w raporcie zamiast łączyć).
3. **Kula 3D (components/home/WireframeCanvas.tsx, components/home/Hero.tsx).** Już jest dynamic import. Opóźnij jej montowanie do momentu, gdy przeglądarka skończy ładowanie strony: po `load` + `requestIdleCallback` (fallback setTimeout 1 s), albo po zakończeniu intro, jeśli intro zasłania kulę (sprawdź LoadingIntro). Kula ma się pojawić z tym samym wejściem co dziś. Nic nie zmieniaj w renderowaniu (dpr, antialias, geometria, materiały).
4. **next.config.ts:** dodaj `experimental.optimizePackageImports: ["three", "@react-three/drei", "@react-three/fiber", "gsap"]`, jeśli Next 16 to wspiera (sprawdź w docs; jeśli opcja jest domyślna albo przestarzała, pomiń i napisz).
5. **Analiza bez zmian (tylko raport):** po `npx next build` wypisz 6 największych plików JS w `.next/static/chunks` z tym, co w nich siedzi (szukaj nazw bibliotek w treści), oraz który z nich jest ładowany na każdej stronie. Sprawdź, czemu HTML strony usługi `/uslugi/integracje-woocommerce` ma ok. 217 KB (dane RSC, JSON-LD, zduplikowana treść?). Zaproponuj zmianę, ale jej NIE wdrażaj.

## Weryfikacja
- `npx next build` przechodzi bez błędów i ostrzeżeń typów.
- Raport na końcu: lista zmienionych plików, co zrobione w każdym punkcie, czego nie zrobiłeś i dlaczego.

## Dopisane po pomiarze „przed” (Lighthouse mobile, mediana z 3, lokalny `next start`)
- home: perf 43, LCP 5,9 s, TBT 1396 ms, CLS 0; LCP = span w nagłówku hero (intro zostaje, nie ruszać)
- /blog/ksef-woocommerce: perf 69, LCP 4,4 s, TBT 605 ms; LCP = akapit banera cookies (`p.text-ink.text-[13px]`)
- /uslugi/integracje-woocommerce: perf 65, LCP 3,1 s, TBT 975 ms, **CLS 0,205** (regresja, 14.10 było 0); LCP = `p.svc-in` (lead)

6. **CLS na stronie usługi.** Znajdź, co przesuwa układ na `/uslugi/integracje-woocommerce` (kandydaci: ramka szybkiego zapytania, pasek mobilny MobileCtaBar, scenka blueprint w hero, fonty bez preloadu po zmianie z punktu 1, obrazy bez wymiarów). Użyj Lighthouse (`layout-shifts` audit) albo PerformanceObserver w Playwright. Napraw tak, żeby wygląd końcowy był identyczny (rezerwacja miejsca, wymiary, min-height), CLS < 0,05.
7. **Baner cookies jako LCP na wpisach.** Baner jest w HTML od początku z opacity 0.01 i dlatego Lighthouse liczy go jako największy element. Sprawdź, czy da się go wyłączyć z kandydatów LCP bez zmiany wyglądu i momentu pokazania (np. wstawiać tekst banera do DOM dopiero przy pokazaniu albo trzymać go poza ekranem do tego czasu), tak żeby LCP był tytułem lub leadem wpisu. Nie wolno zmienić tego, kiedy i jak baner się pojawia.
