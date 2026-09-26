import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioCube } from "@/components/home/PortfolioCube";
import { projects, type Project } from "@/lib/projects";
import { jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Realizacje: strony, sklepy i aplikacje Next.js",
  description:
    "Realizacje Marcina Siwonia: strony i sklepy WordPress i WooCommerce, aplikacje Next.js i React dla firm z Polski i Niemiec. Każda z opisem i linkiem.",
  alternates: { canonical: "/projekty" },
};

const indexable = projects.filter((p) => p.category !== "lab");

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Realizacje Marcina Siwonia",
  numberOfItems: indexable.length,
  itemListElement: indexable.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.marcinsiwonia.pl/projekty/${p.slug}`,
    name: `${p.client}: ${p.title}`,
  })),
};

const GROUPS: { key: Project["category"]; label: string }[] = [
  { key: "commercial", label: "Komercyjne" },
  { key: "fullstack", label: "Full-stack i własne produkty" },
  { key: "lab", label: "Lab, projekty z okresu nauki" },
];

function ProjectRow({ p }: { p: Project }) {
  const isLab = p.client === "Lab";
  return (
    <li className="border-t border-line">
      <Link
        href={`/projekty/${p.slug}`}
        className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1.5 py-5 md:gap-x-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.3fr)_auto] md:py-6"
      >
        <span className="order-3 col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint md:order-none md:col-span-1">
          {p.year}
        </span>
        <span className="min-w-0 font-display text-2xl italic leading-tight text-ink transition-colors duration-300 group-hover:text-peach md:text-3xl">
          {isLab ? p.title : p.client}
        </span>
        <span
          aria-hidden
          className="text-ink-faint transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-peach md:order-last"
        >
          →
        </span>
        <span className="order-4 col-span-2 min-w-0 text-sm leading-snug text-ink-mute md:order-none md:col-span-1 md:text-base">
          {isLab ? p.stack.slice(0, 3).join(" · ") : p.title}
        </span>
      </Link>
    </li>
  );
}

export default function ProjektyPage() {
  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListSchema) }}
      />
      <h1 className="sr-only">
        Realizacje: strony www, sklepy internetowe, aplikacje Next.js i React
      </h1>
      <PortfolioCube />
      <section aria-labelledby="lista-realizacji" className="px-6 py-16 md:px-10 md:py-24">
        <p className="eyebrow mb-4">Indeks · {projects.length}</p>
        <h2
          id="lista-realizacji"
          className="mb-12 font-display text-ink md:mb-16"
          style={{ fontSize: "clamp(2.25rem, 1.2rem + 4vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
        >
          Wszystkie <em>realizacje.</em>
        </h2>
        <div className="space-y-14 md:space-y-20">
          {GROUPS.map(({ key, label }) => {
            const list = projects
              .filter((p) => p.category === key)
              .sort((a, b) => b.year - a.year);
            if (list.length === 0) return null;
            const rows = (
              <ul className="border-b border-line">
                {list.map((p) => (
                  <ProjectRow key={p.slug} p={p} />
                ))}
              </ul>
            );
            return key === "lab" ? (
              <details key={key} className="group/lab">
                <summary className="mb-6 flex min-h-11 cursor-pointer list-none items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                  <span>
                    {label} · {list.length}
                  </span>
                  <span aria-hidden className="text-lg transition-transform duration-300 group-open/lab:rotate-45">
                    +
                  </span>
                </summary>
                {rows}
              </details>
            ) : (
              <div key={key}>
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  {label} · {list.length}
                </h3>
                {rows}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
