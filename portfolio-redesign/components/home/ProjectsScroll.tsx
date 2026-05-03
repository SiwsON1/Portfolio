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

export function ProjectsScroll() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pj-row").forEach((row) => {
        const img = row.querySelector(".pj-img");
        const meta = row.querySelector(".pj-meta");
        gsap.from(img, {
          y: 80,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
        });
        gsap.from(meta, {
          y: 30,
          autoAlpha: 0,
          duration: 1,
          delay: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-32 md:px-10 md:py-48"
      id="projekty"
    >
      <header className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Wybrane realizacje</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-h1 text-ink">
            Cztery <em>flagi</em>,<br />
            ponad <em>trzydzieści</em> wdrożeń
            <br />w sumie.
          </h2>
        </div>
      </header>

      <div className="space-y-32 md:space-y-48">
        {featuredProjects.map((p, i) => (
          <Row key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-32 flex justify-center">
        <Link
          href="/projekty"
          className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:text-peach transition-colors"
          data-cursor="WIDOK"
        >
          <span>Zobacz wszystkie projekty</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function Row({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="pj-row grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      <div
        className={`pj-img relative aspect-[4/3] md:col-span-7 overflow-hidden bg-bg-elev ${
          flip ? "md:col-start-6" : ""
        }`}
      >
        {project.url ? (
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            data-cursor="WEJDŹ"
            className="relative block w-full h-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </Link>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        )}
      </div>
      <div
        className={`pj-meta md:col-span-4 ${
          flip ? "md:col-start-1 md:row-start-1" : "md:col-start-9"
        }`}
      >
        <p className="eyebrow mb-3">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </p>
        <h3 className="display text-h2 text-ink mb-2">
          <em>{project.client}</em>
        </h3>
        <p className="text-ink-mute mb-6">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-ink-faint">
          {project.stack.map((s) => (
            <li
              key={s}
              className="border border-line px-2.5 py-1 rounded-full"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
