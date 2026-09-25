# Rozwój: realizacje, powiązania z usługami, mobile usług, SEO (2026-09-26)

## Cel
Realizacje mają wzmacniać strony usług (linkowanie w obie strony), cienkie strony nie mogą rozcieńczać serwisu,
strony usług mają być wygodne na telefonie.

## Decyzje usera (26.09)
- Dodać: cojestpolskie.pl, Mebloweporady.pl (oba własne). NIE: Seomantyczny. FizjoBabiniec nie istnieje jako realizacja.
- 13 projektów lab (bootcamp): noindex,follow, zostają w galerii, wypadają z sitemap.
- Po sprawdzeniu: commit i push (tylko moje pliki, WIP skanera WCAG z 15.09 nietknięty).

## Kroki
1. `lib/projects.ts`: 2 nowe projekty (body z faktami z memory i live, liczby zaokrąglone „ponad”), pole
   `services` przez mapę `PROJECT_SERVICES` (slug projektu → slugi usług) + helper `projectsForService`.
2. `app/projekty/[slug]`: sekcja „Usługi w tym projekcie” z linkami do /uslugi/*, usunięty szablonowy
   „Zakres prac / Kontekst” (identyczny na 36 stronach), noindex dla lab, sitemap bez lab.
3. `lib/service-project-map.ts`: usunąć nieudowodnione twierdzenia (Sanity, 3D preview, 7 tygodni,
   Lighthouse 96/99, OpenAI API, ACF Pro). Nowe dopasowania: nowoczesne → cojestpolskie, software house i
   React → cenynotarialne, AI → cojestpolskie (research AI + kontrola w KRS/CRBR), headless → brak realnego
   projektu headless WP, sekcja się nie pokazuje.
4. `app/uslugi/[slug]`: pod główną realizacją siatka „Inne realizacje” (do 3, z PROJECT_SERVICES).
5. Mobile stron usług (skille impeccable / emil / taste): rytm odstępów na 375, hero, karty „Co dostajesz”,
   proces, FAQ, CTA. Zrzuty 1440/768/375 × 3 iteracje.
6. SEO: propozycje do omówienia (bez zmian fraz głównych z mapy fraz).

## Kryteria akceptacji
- `npx next build` przechodzi, strony lab mają `noindex` w HTML, nie ma ich w sitemap.xml.
- Każda realizacja komercyjna/fullstack linkuje do ≥1 usługi, każda usługa (poza headless) pokazuje realizacje.
- Brak poziomego przewijania na 375 (wystaje.mjs), zrzuty obejrzane.
