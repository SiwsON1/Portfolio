# Schema i GEO, 13.09.2026

Źródło: audyt Codexa + weryfikacja produkcji 13.09. Cel: jedna spójna encja „Marcin Siwonia”
czytelna dla Google i modeli AI, poprawne obrazy do udostępnień, prawdziwe daty.

## Zasady nadrzędne

- **Zero cen.** Nie dodawaj `offers`, `price`, `priceSpecification`, `AggregateOffer`.
- Nie wymyślaj faktów. Dozwolone fakty o osobie (z `/o-mnie` i strony głównej): Wrocław,
  pracuje od 2020 (frontend developer w software house we Wrocławiu), na swoim od końca 2022,
  30+ wdrożeń komercyjnych, klienci z Polski i Niemiec, GitHub `https://github.com/SiwsON1`,
  LinkedIn `https://www.linkedin.com/in/marcinsiwonia`, blog `https://seomantyczny.pl`,
  e-mail `marcin.siwonia.firma@gmail.com`, zdjęcie `/avatar.png`.
- Nie ruszaj treści tekstowych stron, fraz, tytułów ani meta description (poza pkt 6).
- Czytaj `node_modules/next/dist/docs/` gdy nie jesteś pewien API metadanych Next 16.
- Pliki zapisuj w UTF-8 bez BOM. Nie dodawaj komentarzy poza jednym zdaniem tam, gdzie decyzja
  jest nieoczywista. Styl kodu jak w otoczeniu.

## 1. `lib/schema.ts` (nowy)

```ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const personRef = { "@type": "Person", "@id": PERSON_ID, name: "Marcin Siwonia", url: SITE_URL };
export const personSchema = { ...pełny obiekt Person z app/page.tsx, plus "@id": PERSON_ID,
  sameAs bez zmian, image `${SITE_URL}/avatar.png`, worksFor pominąć };
export function jsonLd(data: unknown): string  // JSON.stringify(data).replace(/</g, "\\u003c")
```

Pełny `personSchema` przenieś z `app/page.tsx` (usuń tam lokalną kopię). `@context` dodawaj
przy emisji, nie w obiektach referencji.

## 2. Podmiana we wszystkich szablonach

- `app/page.tsx`: `WebSite` dostaje `"@id": WEBSITE_ID`, `publisher: { "@id": PERSON_ID }`.
  **Usuń `potentialAction` / `SearchAction`** (blog nie obsługuje `?q=`). Person emituj z `personSchema`.
- `app/uslugi/[slug]/page.tsx`, `app/[branza]/page.tsx`, `app/audyt-wcag/page.tsx`:
  `provider: personRef` zamiast zagnieżdżonego obiektu Person.
- `app/blog/[slug]/page.tsx`: `author: personRef`, `publisher: personRef`,
  `image: \`${SITE_URL}/blog/${slug}/opengraph-image\``, `dateModified: p.updatedAt ?? p.date`,
  `mainEntityOfPage: url wpisu`.
- `app/projekty/[slug]/page.tsx`: `creator: personRef`. `datePublished` usuń, jeśli jest sztucznie
  składane z samego roku (`${year}-01-01`); zamiast tego `dateCreated: String(p.year)`.
- Każde `dangerouslySetInnerHTML={{ __html: JSON.stringify(x) }}` dla JSON-LD w `app/**` zamień na `jsonLd(x)`.

## 3. Nowe dane strukturalne

- `app/o-mnie/page.tsx`: `ProfilePage` z `mainEntity: personSchema` (pełny obiekt z `@id`),
  `url`, `inLanguage: "pl-PL"`, plus `BreadcrumbList` przez `breadcrumbsSchema` z `lib/breadcrumbs.ts`.
- `app/kontakt/page.tsx`: `ContactPage` z `mainEntity: personRef`, `url`, `inLanguage`, plus breadcrumbs.
- Emisja jak w reszcie serwisu: zwykły `<script type="application/ld+json">` w komponencie
  serwerowym, **nie** `next/script`.

## 4. Obrazy Open Graph

Metadane stron nadpisują `openGraph` rodzica w całości, dlatego wpisy, `/audyt-wcag`
i branże nie mają `og:image`.

- Skopiuj wzorzec `app/uslugi/[slug]/opengraph-image.tsx` do `app/blog/[slug]/opengraph-image.tsx`
  (tytuł wpisu, eyebrow „Blog”) i `app/[branza]/opengraph-image.tsx` (h1 branży, eyebrow „Branże”).
  `generateStaticParams` jak w stronie danego segmentu.
- `app/audyt-wcag/opengraph-image.tsx`: statyczny, tytuł z `WCAG_META.h1`, eyebrow „Dostępność”.
- W `generateMetadata` wpisów, branż, usług i w metadanych `/audyt-wcag` dodaj `twitter`:
  `{ card: "summary_large_image", title, description }`, żeby nie dziedziczyły opisu strony głównej.
- `app/projekty/[slug]/page.tsx`: `openGraph.type` zmień z `article` na `website`.

## 5. Daty

- `lib/posts.ts` typ `Post`: dodaj `updatedAt?: string`. **Nie wpisuj nigdzie wartości**, pole zostaje puste.
- `app/blog/[slug]/page.tsx`: jeśli `p.updatedAt` istnieje i różni się od `p.date`, pokaż obok daty
  publikacji „Zaktualizowano: {data}” tym samym stylem co data. `openGraph.modifiedTime` analogicznie.
- `app/sitemap.ts`: usuń `lastModified: now` i `changeFrequency`. Wpisy dostają
  `lastModified: new Date(p.updatedAt ?? p.date)`. Pozostałe adresy bez `lastModified`.

## 6. Bio autora pod wpisem

`components/blog/AuthorBio.tsx` (komponent serwerowy), wstaw w `app/blog/[slug]/page.tsx` po FAQ,
przed sekcją powiązanych usług. Treść **dosłownie**:

- nagłówek (eyebrow): `Autor`
- imię: `Marcin Siwonia` (link do `/o-mnie`)
- tekst: `Programista z Wrocławia. Od 2020 roku tworzę strony i aplikacje internetowe, od końca 2022 na własny rachunek. Ponad 30 wdrożeń komercyjnych dla firm z Polski i Niemiec, głównie WordPress, WooCommerce i Next.js.`
- linki: `O mnie` → `/o-mnie`, `GitHub`, `LinkedIn`

Zdjęcie `next/image` z `/avatar-cutout.png`, 64×64, okrągłe, `alt="Marcin Siwonia"`.
Styl: tokeny projektu (`border-t border-line`, `eyebrow`, `text-ink`, `text-ink-mute`,
`font-display italic` dla imienia), bez kart, bez cieni, bez bordera bocznego. Wzoruj się na
sekcjach w tym samym pliku.

## 7. `llms.txt` i `llms-full.txt`

`app/llms.txt/route.ts`:
- zaraz pod nagłówkiem sekcja `## Encja` z: `Entity ID: {PERSON_ID}`, strona, LinkedIn, GitHub,
  lokalizacja, język obsługi `polski`, obszar działania `Polska i Niemcy, praca zdalna`.
- sekcja wpisów: zamiast 10 najnowszych **ręczna lista** slugów filarowych, w tej kolejności, tylko
  jeśli slug istnieje w `posts`: `wcag-2-1-aa`, `next-js-co-to-jest`, `ile-kosztuje-strona-na-next-js`,
  `wordpress-vs-next-js-koszt`, `next-js-a-seo`, `wordpress-co-to-jest`, `next-js-vs-react-roznice`,
  `must-have-wtyczki-wordpress-2026`. Nagłówek `## Najważniejsze artykuły`.
- na końcu link `- [Pełna treść dla modeli](${SITE_URL}/llms-full.txt)`.

`app/llms-full.txt/route.ts` (nowy, `export const dynamic = "force-static"`, `text/plain; charset=utf-8`):
Markdown z: sekcja encji jak wyżej; każda usługa (tytuł, URL, lead lub opis, FAQ jako `### pytanie` + odpowiedź);
`/audyt-wcag` (h1, lead, fakty prawne z `lib/wcag.ts` z dopiskiem „Stan prawny na 2026-09-13”, FAQ);
każda branża (tytuł, URL, FAQ); filarowe wpisy z listy wyżej (tytuł, URL, lead, nagłówki sekcji, FAQ).
Wszystko z danych w `lib/*`, bez przepisywania treści. Bez cen (zawartość danych już ich nie ma).

## 8. Robots

`app/robots.ts`: bez zmian w dostępie. Dodaj jawne reguły `allow: "/"` + `disallow: "/lab"` dla
`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-SearchBot`,
`Google-Extended`, obok istniejącej reguły `*`.

## Kryteria akceptacji (sprawdza Claude)

1. `npx next build` przechodzi
2. W HTML każdego typu strony dokładnie jeden pełny `Person` (tylko `/`, `/o-mnie`) albo referencje z `@id`
3. `og:image` obecne na wpisie, branży, `/audyt-wcag`, usłudze
4. `sitemap.xml`: brak identycznego `lastmod` dla wszystkich; wpisy mają datę wpisu
5. `/llms-full.txt` zwraca 200 i nie zawiera `zł` poza kwotą kary 89 000 zł
6. Brak `offers`/`priceSpecification` w całym `.next/server/app`
7. Pliki poprawne w UTF-8
