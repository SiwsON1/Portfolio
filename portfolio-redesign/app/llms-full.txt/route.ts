import { industries } from "@/lib/industries";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { PERSON_ID, SITE_URL } from "@/lib/schema";
import { WCAG_FAQ, WCAG_META, WCAG_PRAWO } from "@/lib/wcag";

export const dynamic = "force-static";

const PILLAR_SLUGS = [
  "dostepnosc-woocommerce",
  "wcag-2-1-aa",
  "next-js-co-to-jest",
  "ile-kosztuje-strona-na-next-js",
  "wordpress-vs-next-js-koszt",
  "next-js-a-seo",
  "wordpress-co-to-jest",
  "next-js-vs-react-roznice",
  "must-have-wtyczki-wordpress-2026",
];

// Bez odpowiedzi z kwotami: modele cytowałyby ceny rynkowe z wpisów jako cennik usług.
// Wyjątek to kary ustawowe WCAG, które są faktem prawnym.
const hasPrice = (text: string) =>
  !/przeciętnego wynagrodzenia/.test(text) &&
  (/\d\s?(tys\.\s?)?(zł|złotych|PLN|\$|€)/.test(text) || /[$€]\s?\d/.test(text) || /koszt\w*[^.]{0,40}\d/i.test(text));

const faqMarkdown = (faq: { q: string; a: string }[]) =>
  faq
    .filter((item) => !hasPrice(item.q) && !hasPrice(item.a))
    .map((item) => `### ${item.q}\n\n${item.a}`)
    .join("\n\n");

export async function GET() {
  const entity = `## Encja

- Entity ID: ${PERSON_ID}
- Strona: ${SITE_URL}
- LinkedIn: https://www.linkedin.com/in/marcinsiwonia
- GitHub: https://github.com/SiwsON1
- Lokalizacja: Wrocław, Polska
- Język obsługi: polski
- Obszar działania: Polska i Niemcy, praca zdalna`;

  const serviceContent = services.map((service) => `## ${service.title}

URL: ${SITE_URL}/uslugi/${service.slug}

${service.lead || service.metaDescription}

${faqMarkdown(service.faq)}`).join("\n\n");

  const wcagContent = `## ${WCAG_META.h1}

URL: ${SITE_URL}/audyt-wcag

${WCAG_META.lead}

### Fakty prawne

Stan prawny na 2026-09-13

${WCAG_PRAWO.map((fact) => `- ${fact.atrybut}: ${fact.wartosc}`).join("\n")}

${faqMarkdown(WCAG_FAQ)}`;

  const industryContent = industries.map((industry) => `## ${industry.title}

URL: ${SITE_URL}/${industry.slug}

${faqMarkdown(industry.faq)}`).join("\n\n");

  const postContent = PILLAR_SLUGS.map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean)
    .map((post) => `## ${post!.title}

URL: ${SITE_URL}/blog/${post!.slug}

${[post!.lead ?? post!.excerpt].filter((t) => !hasPrice(t)).join("")}

${post!.sections?.filter((section) => !hasPrice(section.heading)).map((section) => `### ${section.heading}${
  section.table
    ? `\n\n${section.table.caption}\n\n| ${section.table.head.join(" | ")} |\n|${section.table.head.map(() => "---").join("|")}|\n${section.table.rows.map((row) => `| ${row.join(" | ")} |`).join("\n")}`
    : ""
}`).join("\n\n") ?? ""}

${faqMarkdown(post!.faq ?? [])}`)
    .join("\n\n");

  const txt = `# Marcin Siwonia — pełna treść dla modeli

${entity}

# Usługi

${serviceContent}

# Dostępność cyfrowa

${wcagContent}

# Branże

${industryContent}

# Najważniejsze artykuły

${postContent}
`;

  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
