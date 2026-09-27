"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, ViewTransition } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { featuredProjects, projects, type Project } from "@/lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Wejście kart gra raz na sesję karty przeglądarki. Po powrocie z case study element docelowy
// przejścia musi być widoczny od razu, inaczej zdjęcie lądowało w niewidocznej, przesuniętej karcie.
let entered = false;
const SCROLL_KEY = "pj-stack-left";

/**
 * Cabinet projektów na home — alternating editorial layout, peach line
 * indicator + corner number, focus-pull blur na non-hovered (pj-stack/pj-row).
 */
export function ProjectsCabinet() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Karuzela wraca tam, gdzie ją zostawiono, zanim przeglądarka zrobi zrzut do przejścia.
  useLayoutEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    const saved = Number(sessionStorage.getItem(SCROLL_KEY) || 0);
    // Po powrocie układ i snap potrafią jeszcze raz ustawić karuzelę na początku, więc pozycję
    // przywracamy też w dwóch kolejnych klatkach i przez chwilę nie nadpisujemy zapisu zerem.
    const restoredAt = performance.now();
    let raf = 0;
    if (saved) {
      el.scrollLeft = saved;
      raf = requestAnimationFrame(() => {
        el.scrollLeft = saved;
        raf = requestAnimationFrame(() => (el.scrollLeft = saved));
      });
    }
    const onScroll = () => {
      const w = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth : el.clientWidth;
      setActive(Math.round(el.scrollLeft / (w + 16)));
      if (saved && performance.now() - restoredAt < 500) return;
      sessionStorage.setItem(SCROLL_KEY, String(el.scrollLeft));
    };
    // Krótka wibracja przy każdym przeskoku karty, jak kółko wyboru w iOS (działa na Androidzie).
    const onSnap = () => navigator.vibrate?.(8);
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollsnapchange", onSnap);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollsnapchange", onSnap);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || entered) return;
    entered = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Na telefonie karty są w poziomej karuzeli; pionowe wejście przy przewijaniu nic tam nie wnosi.
    if (reduce || window.innerWidth < 768) return;

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
      className="relative px-6 md:px-10 py-20 md:py-48"
    >
      <header className="mb-12 md:mb-36 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <div className="md:col-span-4">
          <p className="eyebrow mb-3">
            Wybrane realizacje · {String(featuredProjects.length).padStart(2, "0")}
          </p>
          <p className="text-ink-mute text-sm max-w-xs leading-relaxed">
            Cztery wybrane realizacje: wdrożenia dla klientów i własne produkty. Pełna lista
            ({projects.length}) pod{" "}
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

      {/* Na telefonie realizacje przewija się palcem jak stories; od md wraca układ edytorski. */}
      <div className="md:hidden -mt-6 mb-5 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint" aria-hidden>
        <span className="tabular-nums text-ink">
          {String(Math.min(active, featuredProjects.length - 1) + 1).padStart(2, "0")}
          <span className="text-ink-faint"> / {String(featuredProjects.length).padStart(2, "0")}</span>
        </span>
        <span className="relative h-px flex-1 bg-line overflow-hidden">
          <span className="pj-progress-bar absolute inset-0 bg-peach" style={{ transform: "scaleX(0.25)" }} />
        </span>
        <span>Przesuń</span>
      </div>
      <div ref={stackRef} className="pj-stack -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:block md:space-y-56 md:overflow-visible md:px-0 md:pb-0">
        {featuredProjects.map((p, i) => (
          <Row key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-20 md:mt-40 flex justify-center">
        <Link
          href="/projekty"
          className="group relative inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors py-3"
          data-cursor="WIDOK"
        >
          <span className="absolute inset-x-0 -bottom-px h-px bg-line group-hover:bg-peach transition-colors" />
          <span>Wszystkie projekty</span>
          <span className="font-mono text-ink-faint group-hover:text-peach transition-colors">[{projects.length}]</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function Row({ project: p, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="pj-row relative grid min-w-[84vw] snap-center grid-cols-1 items-start gap-6 md:min-w-0 md:grid-cols-12 md:items-center md:gap-16">
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
        className={`pj-img relative aspect-square md:aspect-[4/3] md:col-span-7 overflow-hidden bg-bg-elev z-10 ${
          flip ? "md:col-start-6" : ""
        }`}
      >
        <Link
          href={`/projekty/${p.slug}`}
          data-cursor="CASE"
          className="relative block w-full h-full group"
        >
          <ViewTransition name={`projekt-${p.slug}`} share="morph">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority={index === 0}
              className="pj-par object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </ViewTransition>
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
          flip ? "md:col-start-1 md:row-start-1" : "md:col-start-8"
        }`}
      >
        <p className="eyebrow mb-4">
          {p.year}{p.category === "commercial" ? " · komercyjny" : p.category === "fullstack" ? " · full-stack" : " · lab"}
        </p>
        <h3
          className="font-display italic text-ink mb-4 md:mb-5"
          style={{
            fontSize: "clamp(1.75rem, 0.9rem + 3vw, 4.25rem)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          }}
        >
          {p.client}
        </h3>
        <p className="text-ink-mute mb-6 md:mb-8 leading-relaxed max-w-md text-sm md:text-base line-clamp-3 md:line-clamp-none">{p.description}</p>
        <ul className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint mb-6 md:mb-10">
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
