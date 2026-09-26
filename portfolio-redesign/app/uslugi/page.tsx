import type { Metadata } from "next";
import { ServicesIndexList } from "@/components/service/ServicesIndexList";
import { services } from "@/lib/services";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";
import { jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Usługi web developera: Next.js, React, WordPress, AI, sklepy" },
  description:
    "Pełna lista usług: aplikacje Next.js, React, WordPress, WooCommerce, headless CMS, Jamstack, wdrożenia AI. Wycena 24h od briefa. Wrocław i online.",
  alternates: { canonical: "/uslugi" },
};

const breadcrumbs = breadcrumbsSchema([
  { name: "Strona główna", path: "/" },
  { name: "Usługi", path: "/uslugi" },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Usługi Marcina Siwonia",
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.marcinsiwonia.pl/uslugi/${s.slug}`,
    name: s.title,
  })),
};

export default function UslugiPage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Usługi · katalog</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-display text-ink">
            Strony, sklepy, aplikacje,
            <br />
            <em>jeden warsztat</em>.
          </h1>
          <p className="mt-8 prose-bound text-ink-mute text-lead">
            Od sześciu lat tworzę strony www, sklepy WooCommerce oraz aplikacje
            Next.js i React dla firm w Polsce i Niemczech. Zamiast rozpraszać się
            na wszystko, skupiam się na tym, co znam na wylot: od WordPressa
            i WooCommerce po aplikacje Next.js, React i wdrożenia AI.
          </p>
        </div>
      </header>

      <ServicesIndexList />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListSchema) }} />
    </article>
  );
}
