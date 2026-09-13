# Blok SEO na stronach usług (wzorzec Verseo)

Data: 2026-09-01. Pilot na `/uslugi/tworzenie-stron-wordpress`, potem rollout.

## Skąd pomysł

Verseo na `/oferta/pozycjonowanie/` ma 26 sekcji i 22 nagłówki H2, a na samym dole
blok tekstu SEO z własnym H2 i kilkunastoma H3. Nasze strony usług mają dziś
około 600 słów. To jest cała różnica w potencjale rankingowym.

Weryfikacja: u Verseo ten dolny blok jest rozwinięty na stałe, zwijany akordeon
mają na FAQ (16 pytań). My robimy wersję zwijaną, bo przy tej objętości to lepszy UX.

## Wymóg techniczny, najważniejszy w całym zadaniu

**Treść musi być w HTML od razu, dla robotów, a tylko wizualnie schowana dla ludzi.**
Nie renderować warunkowo w Reakcie, nie doładowywać po kliknięciu. Element `<details>`
trzyma całą treść w źródle strony i jest natywnie dostępny z klawiatury, a Google
indeksuje treść schowaną w akordeonie. Ten sam mechanizm działa już w sekcji FAQ
szablonu usług, więc jest spójny z resztą serwisu.

Kontrola: `curl` na zbudowaną stronę ma zwrócić pełny tekst bloku.

## Model danych

Nowy plik `lib/seoBlocks.ts`:

```ts
export type SeoBlockSection = { id: string; heading: string; body: string[] };
export type SeoBlock = { heading: string; intro: string[]; sections: SeoBlockSection[] };
export const SEO_BLOCKS: Record<string, SeoBlock>;
```

Klucz to slug usługi. Osobny plik, żeby nie rozdymać `lib/services.ts` i żeby
rollout na kolejne usługi był dopisaniem klucza.

## Render w `app/uslugi/[slug]/page.tsx`

Sekcja na dole, przed CTA:
- H2 z `heading`
- `intro` widoczne zawsze, dwa akapity
- **spis treści** widoczny zawsze, linki do kotwic `#id` sekcji
- `<details>` z całą resztą, `<summary>` w stylu FAQ: „Rozwiń pełny poradnik"
- w środku H3 z `id`, pod każdym akapity

Mały komponent kliencki otwiera `<details>` po kliknięciu w spis treści i po wejściu
z linkiem z kotwicą. Bez JS treść dalej jest dostępna przyciskiem, więc to jest
progresywne ulepszenie, nie warunek działania.

## Treść pilota

Fraza: „tworzenie stron WordPress". Około 2000-2500 słów, 9-10 sekcji H3.
Zasady: zero cen, zero wymyślonych liczb i statystyk, bez em-dashów w prozie,
maksymalnie 3-4 linki wewnętrzne w całym bloku.

Anty-kanibalizacja: blog ma już wpisy `wordpress-co-to-jest`,
`elementor-dlaczego-nie-warto`, `wordpress-vs-next-js-koszt`. Blok może te tematy
streścić w akapicie i **linkować** do wpisu, ale nie powielać ich w całości.

## Czego z Verseo NIE kopiujemy

Karuzeli z logotypami klientów, licznika opinii Google, liczby specjalistów w zespole.
Marcin pracuje sam, więc te elementy byłyby nieprawdą i widać to od razu.

## Kryteria akceptacji

1. `curl` zbudowanej strony zawiera pełny tekst bloku, także przy zwiniętym `<details>`
2. Blok dodaje minimum 2000 słów do strony
3. Spis treści prowadzi do wszystkich sekcji H3
4. Obsługa z klawiatury: `<summary>` fokusowalny, Enter rozwija
5. `npx next build` przechodzi
6. Zero kwot, zero wymyślonych statystyk
