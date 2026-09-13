import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { industries } from "@/lib/industries";
import { PERSON_ID, SITE_URL } from "@/lib/schema";

const PILLAR_SLUGS = [
  "wcag-2-1-aa",
  "next-js-co-to-jest",
  "ile-kosztuje-strona-na-next-js",
  "wordpress-vs-next-js-koszt",
  "next-js-a-seo",
  "wordpress-co-to-jest",
  "next-js-vs-react-roznice",
  "must-have-wtyczki-wordpress-2026",
];

export async function GET() {
  const featured = projects.slice(0, 4);
  const pillarPosts = PILLAR_SLUGS.map((slug) => posts.find((post) => post.slug === slug)).filter(Boolean);
  const txt = `# Marcin Siwonia — Web Developer

> Niezależny web developer z Wrocławia. Tworzenie stron www, sklepów WooCommerce, aplikacji Next.js i React, wdrożenia AI. Sześć lat doświadczenia (2020-2026), ponad 30 wdrożeń komercyjnych dla klientów w Polsce i Niemczech.

## Encja
- Entity ID: ${PERSON_ID}
- Strona: ${SITE_URL}
- LinkedIn: https://www.linkedin.com/in/marcinsiwonia
- GitHub: https://github.com/SiwsON1
- Lokalizacja: Wrocław, Polska
- Język obsługi: polski
- Obszar działania: Polska i Niemcy, praca zdalna

## O mnie
- Specjalizacja: Next.js 16, React 19, WordPress, WooCommerce, integracje AI
- Forma współpracy: B2B / UoD / godzinowa
- Kontakt: marcin.siwonia.firma@gmail.com

## Usługi
${services.map((s) => `- [${s.title}](${SITE_URL}/uslugi/${s.slug}): ${s.metaDescription}`).join("\n")}

## Dostępność cyfrowa
- [Audyt WCAG](${SITE_URL}/audyt-wcag): audyt WCAG 2.1 AA, 50 kryteriów, audyt z naprawą błędów, realizacja 5-10 dni roboczych. Podstawa: ustawa z 26.04.2024 wdrażająca Europejski Akt o Dostępności, obowiązuje od 28.06.2025, norma EN 301 549 V3.2.1. Mikroprzedsiębiorcy świadczący usługi są zwolnieni.

## Strony dla branż
${industries.map((i) => `- [${i.title}](${SITE_URL}/${i.slug}): ${i.keyword}, realizacja ${i.pricing.time}`).join("\n")}

## Najważniejsze artykuły
${pillarPosts.map((p) => `- [${p!.title}](${SITE_URL}/blog/${p!.slug}): ${p!.excerpt}`).join("\n")}

## Wybrane realizacje
${featured.map((p) => `- [${p.client} — ${p.title}](${SITE_URL}/projekty/${p.slug}): ${p.description} Stack: ${p.stack.join(", ")}`).join("\n")}

## Optional
- [Pełna lista projektów](${SITE_URL}/projekty)
- [Wszystkie usługi](${SITE_URL}/uslugi)
- [Blog](${SITE_URL}/blog)
- [Kontakt](${SITE_URL}/kontakt)
- [O mnie](${SITE_URL}/o-mnie)
- [Pełna treść dla modeli](${SITE_URL}/llms-full.txt)
`;

  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" } });
}
