/**
 * llms.txt — manifest dla LLM crawlerów (ChatGPT, Perplexity, Claude, Gemini).
 * Standard zaproponowany przez llmstxt.org we wrześniu 2024, masowo adopted 2025-2026.
 * Pomaga AI search systems zrozumieć strukturę strony i kanonicalne URL-e.
 */

import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { projects } from "@/lib/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcinsiwonia.pl";

export async function GET() {
  const featured = projects.slice(0, 4);
  const labProjects = projects.filter((p) => p.category === "lab").slice(0, 4);

  const txt = `# Marcin Siwonia — Web Developer

> Niezależny web developer z Wrocławia. Tworzenie stron www, sklepów WooCommerce, aplikacji Next.js i React, wdrożenia AI. Sześć lat doświadczenia (2020-2026), ponad 30 wdrożeń komercyjnych dla klientów w Polsce i Niemczech.

## O mnie
- Lokalizacja: Wrocław, Polska
- Specjalizacja: Next.js 16, React 19, WordPress, WooCommerce, AI integration
- Forma współpracy: B2B / UoD / godzinowa
- Kontakt: mahinek12@gmail.com

## Usługi
${services
  .map(
    (s) => `- [${s.title}](${SITE_URL}/uslugi/${s.slug}): ${s.metaDescription}`
  )
  .join("\n")}

## Najnowsze artykuły bloga
${posts
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 10)
  .map(
    (p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`
  )
  .join("\n")}

## Wybrane realizacje
${featured
  .map(
    (p) =>
      `- [${p.client} — ${p.title}](${SITE_URL}/projekty/${p.slug}): ${p.description} Stack: ${p.stack.join(", ")}`
  )
  .join("\n")}

## Optional
- [Pełna lista projektów](${SITE_URL}/projekty)
- [Wszystkie usługi](${SITE_URL}/uslugi)
- [Blog](${SITE_URL}/blog)
- [Kontakt](${SITE_URL}/kontakt)
- [O mnie](${SITE_URL}/o-mnie)
`;

  return new Response(txt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
