# Oddanie portfolio: audyt UX/UI, mobile, SEO (2026-09-26, cz. 2)

## Cel
Domknąć portfolio po `862b042`: usunąć usterki widoczne na żywej stronie (375/768/1440) i poprawić techniczne SEO.

## Usterki z audytu zrzutów (produkcja, 375 px)
1. Blog: surowy Markdown w treści (`**pogrubienie**` 244×, `` `kod` `` 60× w `lib/posts.ts`). Parser `lib/renderInlineLinks.tsx` obsługuje tylko linki.
2. `/projekty` na telefonie: sam sześcian, pusta przestrzeń nad i pod nim, brak zwykłej listy 42 realizacji do przewijania.
3. Puste przerwy ~150-200 px przed stopką (strona główna, usługa, projekt).
4. Podwójne CTA na końcu usług i projektów (blok strony + „Masz pomysł” w stopce).
5. Em-dash w prozie (np. „seomantyczny.pl — blog”, H1 „Next.js — co to jest”).

## Kroki
1. Parser inline: linki + `**b**` + `` `code` `` (rekurencja dla linku w pogrubieniu).
2. Pozostałe punkty po obejrzeniu 768/1440 i kodu.
3. Techniczne SEO: meta title/description długości, canonical, H1, schema na żywych stronach (skrypt).
4. Build, zrzuty 3×3, commit tylko moich plików (WIP skanera WCAG nietknięty), push, sprawdzenie produkcji.

## Akceptacja
- Na żywym wpisie brak znaków `**` i backticków w tekście.
- `npx next build` przechodzi, brak poziomego przewijania na 375.
