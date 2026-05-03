import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Pełna lista projektów: strony www, aplikacje Next.js i React, eksperymenty. Ponad 30 wdrożeń komercyjnych dla firm w Polsce i Niemczech.",
  alternates: { canonical: "/projekty" },
};

export default function ProjektyPage() {
  return (
    <article className="relative">
      {/* HERO — massive editorial header */}
      <header className="relative px-6 pt-40 pb-24 md:px-10 md:pt-56 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-between mb-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <span>Index 01 — Realizacje</span>
          <span>{String(projects.length).padStart(3, "0")} pozycji</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <h1 className="display text-display text-ink">
              Pełna <em>lista</em>.
            </h1>
            <p
              className="mt-10 max-w-2xl text-ink-mute"
              style={{ fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)", lineHeight: 1.55 }}
            >
              Komercyjne wdrożenia oraz projekty laboratoryjne z okresu
              nauki. Najnowsze na górze, lab na dole.
            </p>
          </div>
          <div className="md:col-span-3 flex md:justify-end">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              <p>Komercyjne · {projects.filter((p) => p.category === "commercial").length}</p>
              <p>Full-stack · {projects.filter((p) => p.category === "fullstack").length}</p>
              <p>Lab · {projects.filter((p) => p.category === "lab").length}</p>
            </div>
          </div>
        </div>
      </header>

      {/* PROJECTS LIST — editorial table linking to case study pages */}
      <ol className="relative border-t border-line px-6 md:px-10">
        {projects.map((p, i) => {
          return (
            <li key={p.slug} className="border-b border-line group relative">
              <Link
                href={`/projekty/${p.slug}`}
                data-cursor="CASE"
                className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-10 items-center relative"
              >
                {/* Subtle gradient sweep on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 -mx-6 md:-mx-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(232,178,134,0.05) 0%, rgba(232,178,134,0.01) 60%, rgba(232,178,134,0) 100%)",
                  }}
                />

                <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint relative">
                  {String(i + 1).padStart(3, "0")}
                </span>

                <div className="col-span-3 md:col-span-2 relative aspect-[4/3] bg-bg-elev overflow-hidden group-hover:ring-1 group-hover:ring-peach/40 transition-shadow">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover thumb-scroll"
                    sizes="(max-width: 768px) 25vw, 16vw"
                    style={{ objectPosition: "top" }}
                  />
                  {/* peach corner accent on hover */}
                  <span
                    aria-hidden
                    className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="col-span-7 md:col-span-5 relative">
                  <h2
                    className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                    style={{
                      fontSize: "clamp(1.4rem, 1rem + 1vw, 2.25rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {p.client}
                  </h2>
                  <p className="text-ink-mute text-sm mt-1.5">{p.title}</p>
                </div>

                <ul className="hidden md:flex md:col-span-3 flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint relative">
                  {p.stack.slice(0, 3).map((s) => (
                    <li
                      key={s}
                      className="border border-line px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <span className="col-span-12 md:col-span-1 text-right font-mono text-xs text-ink-faint relative">
                  {p.year}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
