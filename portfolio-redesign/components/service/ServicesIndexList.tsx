"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { SERVICE_CASE_MAP } from "@/lib/service-project-map";

/**
 * Lista usług na /uslugi z hover preview obrazka projektu (a la awwwards).
 * Najechanie na wiersz → po prawej pojawia się duży screen powiązanego projektu.
 */
export function ServicesIndexList() {
  const [hovered, setHovered] = useState<string | null>(null);

  const previewProject = (() => {
    if (!hovered) return null;
    const hint = SERVICE_CASE_MAP[hovered];
    if (!hint) return null;
    return projects.find((p) => p.slug === hint.projectSlug) ?? null;
  })();

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      {/* List po lewej */}
      <ol className="md:col-span-7 border-t border-line">
        {services.map((s, i) => (
          <li key={s.slug} className="border-b border-line group">
            <Link
              href={`/uslugi/${s.slug}`}
              className="block py-12 md:py-16"
              data-cursor="OTWÓRZ"
              onMouseEnter={() => setHovered(s.slug)}
              onMouseLeave={() => setHovered((cur) => (cur === s.slug ? null : cur))}
              onFocus={() => setHovered(s.slug)}
              onBlur={() => setHovered((cur) => (cur === s.slug ? null : cur))}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <span className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-9">
                  <h2
                    className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                    style={{
                      fontSize: "clamp(1.75rem, 1rem + 3vw, 4rem)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.03em",
                      fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                    }}
                  >
                    {s.title}
                  </h2>
                  <p className="mt-3 text-ink-mute text-sm md:text-base max-w-prose">
                    {s.lead.split(".")[0]}.
                  </p>
                </div>
                <span className="md:col-span-2 text-right font-mono text-base text-ink-mute group-hover:text-peach group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {/* Sticky preview po prawej (desktop only) */}
      <aside className="hidden md:block md:col-span-5 md:sticky md:top-32 md:self-start">
        <div className="relative aspect-[4/3] overflow-hidden bg-bg-elev">
          {previewProject ? (
            <>
              <Image
                key={previewProject.slug}
                src={previewProject.image}
                alt={previewProject.title}
                fill
                className="object-cover transition-opacity duration-700"
                sizes="40vw"
                style={{ animation: "previewFadeIn 700ms ease-out both" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent"
              />
              <div className="absolute top-4 left-4 right-4 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/90 mix-blend-difference">
                <span>{previewProject.year} · {previewProject.client}</span>
                <span>PREVIEW</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display italic text-ink text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                  {previewProject.client}
                </p>
                <p className="text-ink-mute text-xs">{previewProject.title}</p>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint text-center px-8">
                Najedź na usługę<br />by zobaczyć realizację
              </p>
            </div>
          )}
        </div>
      </aside>

      <style jsx global>{`
        @keyframes previewFadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
