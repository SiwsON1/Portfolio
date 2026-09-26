# UX mobile pod zapytania (2026-09-26, cz. 3)

Źródło: recenzja projektowa (agent, zrzuty 375) + detektor impeccable (0 trafień) + porównanie z lykkreacji.pl.
Cel: odwiedzający z telefonu w każdej chwili ma pod kciukiem drogę do wyceny i szybciej widzi dowód.

## Odrzucone lub czekają na usera
- Ceny „od X zł”: NIE, decyzja usera z 13.09 (bez cen na stronach sprzedażowych).
- Opinie klientów, wyniki z liczbami w case studies: tylko prawdziwe, materiał od usera.
- Telefon / WhatsApp / adres kontakt@ w domenie: decyzja usera.

## Etap 1 (teraz)
1. Hero home: przycisk „Wyceń projekt” (→ /kontakt) + „Zobacz realizacje”, mniejsza sfera na mobile, marquee tylko od md.
2. Stały pasek CTA na mobile (`md:hidden`) po przewinięciu hero, ukryty na /kontakt, safe-area.
3. Home, usługi: 14 pozycji zgrupowane pod 4 specjalnościami (linki zostają, mniej czytania).
4. TechStack na mobile: zwarty rząd zamiast 5 wysokich kart; sekcja „Jak pracuję” (4 kroki, odpowiedź w 24 h) na home.
5. Końcowe CTA usług i projektów: /kontakt zamiast mailto.
6. Panel DevTools na usłudze Next.js zwinięty na mobile.
7. Kontrast etykiet mono (`--ink-faint`), tap targety w stopce ≥ 44 px, mniejszy baner cookies.
8. Kantorymapa: „Własny produkt” zamiast „Klient”. Siatka liczb na /o-mnie na 375.
9. Formularz: wybór „Czego potrzebujesz” (chipy) trafia do maila.

## Etap 2 (SEO, po researchu konkurencji z agy)
Teksty usług pod frazy główne (ChatGPT Mistrz Blogowania + fakty), FAQ z PAA, linkowanie blog → usługi (dziś 1 link do opieki, przyspieszania, AI), case studies w układzie wyzwanie/rozwiązanie/efekt.

## Akceptacja
Build, zrzuty 375/768/1440 × 3 iteracje, brak poziomego scrolla, commit tylko moich plików.
