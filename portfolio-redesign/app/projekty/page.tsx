import type { Metadata } from "next";
import { PortfolioCube } from "@/components/home/PortfolioCube";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Pełna lista projektów: strony www, aplikacje Next.js i React, eksperymenty. Ponad 30 wdrożeń komercyjnych dla firm w Polsce i Niemczech.",
  alternates: { canonical: "/projekty" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projekty — Marcin Siwonia",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.marcinsiwonia.pl/projekty/${p.slug}`,
    name: p.client === "Lab" ? p.title : `${p.client} — ${p.title}`,
  })),
};

export default function ProjektyPage() {
  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <h1 className="sr-only">
        Projekty: strony www, aplikacje Next.js i React, eksperymenty
      </h1>
      <p className="sr-only">
        Komercyjne wdrożenia oraz projekty laboratoryjne z okresu nauki.
      </p>
      <PortfolioCube />
    </article>
  );
}
