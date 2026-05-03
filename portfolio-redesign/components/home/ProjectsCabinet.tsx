"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { featuredProjects, type Project } from "@/lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Cabinet projektów na home — alternating editorial layout, większe plates,
 * peach line indicator + corner number, mocniejszy hover z reveal.
 */
export function ProjectsCabinet() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pj-row").forEach((row) => {
        const img = row.querySelector(".pj-img");
        const meta = row.querySelector(".pj-meta");
        const num = row.querySelector(".pj-num");
        gsap.from(img, {
          y: 80,
          autoAlpha: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 88%", once: true },
        });
        gsap.from(meta, {
          y: 30,
          autoAlpha: 0,
          duration: 1,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 88%", once: true },
        });
        gsap.from(num, {
          autoAlpha: 0,
          duration: 1.4,
          delay: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 88%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projekty"
      className="relative px-6 md:px-10 py-32 md:py-48"
    >
      <header className="mb-24 md:mb-36 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <p className="eyebrow mb-3">
            Wybrane realizacje · {String(featuredProjects.length).padStart(2, "0")}
          </p>
          <p className="text-ink-mute text-sm max-w-xs leading-relaxed">
            Cztery z ostatnich dwóch lat dla klientów z PL i DE. Pełna lista
            (34) pod{" "}
            <Link
              href="/projekty"
              className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
            >
              /projekty
            </Link>
            .
          </p>
        </div>
        <div className="md:col-span-8">
          <h2 className="display text-h1 text-ink">
            Wybrane <em>realizacje</em>.
          </h2>
        </div>
      </header>

      <div className="space-y-40 md:space-y-56">
        {featuredProjects.map((p, i) => (
          <Row key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-40 flex justify-center">
        <Link
          href="/projekty"
          className="group relative inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors py-3"
          data-cursor="WIDOK"
        >
          <span className="absolute inset-x-0 -bottom-px h-px bg-line group-hover:bg-peach transition-colors" />
          <span>Wszystkie projekty</span>
          <span className="font-mono text-ink-faint group-hover:text-peach transition-colors">[34]</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function Row({ project: p, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="pj-row relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
      {/* Big editorial number — outside the layout */}
      <div
        className={`pj-num absolute z-0 font-display italic text-line/70 select-none pointer-events-none hidden md:block ${
          flip ? "right-0 top-1/2 -translate-y-1/2" : "left-0 top-1/2 -translate-y-1/2"
        }`}
        style={{
          fontSize: "clamp(8rem, 5rem + 12vw, 22rem)",
          lineHeight: 0.75,
          fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          letterSpacing: "-0.05em",
        }}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={`pj-img relative aspect-[4/3] md:col-span-7 overflow-hidden bg-bg-elev z-10 ${
          flip ? "md:col-start-6" : ""
        }`}
      >
        <Link
          href={`/projekty/${p.slug}`}
          data-cursor="CASE"
          className="relative block w-full h-full group"
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none"
          />
          <div className="absolute top-5 left-5 right-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/90 mix-blend-difference">
            <span>{String(index + 1).padStart(2, "0")} · {p.year}</span>
            <span>{p.client.toUpperCase()}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/90 mix-blend-difference">
            <span>{p.stack[0]}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-peach">→ CASE</span>
          </div>
        </Link>
      </div>

      <div
        className={`pj-meta md:col-span-5 z-10 ${
          flip ? "md:col-start-1 md:row-start-1" : "md:col-start-9"
        }`}
      >
        <p className="eyebrow mb-4">
          {p.year}{p.category === "commercial" ? " · komercyjny" : p.category === "fullstack" ? " · full-stack" : " · lab"}
        </p>
        <h3
          className="font-display italic text-ink mb-5"
          style={{
            fontSize: "clamp(2rem, 1rem + 3.6vw, 4.25rem)",
            lineHeight: 0.94,
            letterSpacing: "-0.035em",
            fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          }}
        >
          {p.client}
        </h3>
        <p className="text-ink-mute mb-8 leading-relaxed max-w-md">{p.description}</p>
        <ul className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint mb-10">
          {p.stack.map((s) => (
            <li
              key={s}
              className="border border-line px-2.5 py-1 rounded-full"
            >
              {s}
            </li>
          ))}
        </ul>
        <Link
          href={`/projekty/${p.slug}`}
          className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors relative"
          data-cursor="CASE"
        >
          <span className="absolute -bottom-1 left-0 h-px w-8 bg-peach scale-x-0 origin-left group-hover:scale-x-[2] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          <span>Zobacz case study</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
