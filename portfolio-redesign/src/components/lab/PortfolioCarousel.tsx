"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type PortfolioCarouselCase = {
  name: string;
  tagline: string;
  image: string;
  domain: string;
};

type PortfolioCarouselProps = {
  cases: PortfolioCarouselCase[];
  accentLabel?: string;
  className?: string;
};

const AUTOPLAY_MS = 5000;

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

export function PortfolioCarousel({
  cases,
  accentLabel = "REALIZACJE · LIVE",
  className = "",
}: PortfolioCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const safeCases = useMemo(() => cases.filter((item) => item.image), [cases]);
  const active = safeCases[activeIndex] ?? safeCases[0];

  const clearAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (!safeCases.length) return;
      setActiveIndex((index + safeCases.length) % safeCases.length);
    },
    [safeCases.length]
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const previous = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    clearAutoplay();
    if (paused || reducedMotion || safeCases.length < 2) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeCases.length);
    }, AUTOPLAY_MS);

    return clearAutoplay;
  }, [clearAutoplay, paused, reducedMotion, safeCases.length]);

  if (!active) return null;

  return (
    <section
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Karuzela realizacji"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
          {accentLabel}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-muted">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(safeCases.length).padStart(2, "0")}
        </p>
      </div>

      <div className="group relative overflow-hidden rounded-[8px] border border-border-strong bg-bg-elev">
        {safeCases.map((item, index) => (
          <a
            key={`${item.name}-${item.image}`}
            href={item.domain}
            target="_blank"
            rel="noreferrer"
            aria-hidden={index !== activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            className={`absolute inset-0 block transition-opacity duration-[600ms] ease-[var(--ease-out-expo)] motion-reduce:transition-none ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-video">
              <Image
                src={item.image}
                alt={`${item.name} case study`}
                fill
                priority={index === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,232,31,0.22),transparent_42%)] opacity-0 transition-opacity duration-700 ease-[var(--ease-out-expo)] group-hover:opacity-100 motion-reduce:transition-none" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                  {item.domain.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </p>
                <h3 className="mt-3 font-display text-[clamp(3rem,7vw,4rem)] italic font-light leading-[0.88] text-white">
                  {item.name}
                </h3>
                <p className="mt-4 max-w-xl font-sans text-base font-medium text-white/82 md:text-lg">
                  {item.tagline}
                </p>
              </div>
            </div>
          </a>
        ))}
        <div className="relative aspect-[16/10] w-full lg:aspect-video" aria-hidden />

        <button
          type="button"
          onClick={previous}
          className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-accent font-mono text-xl text-[#1E1D1E] transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label="Poprzednia realizacja"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-accent font-mono text-xl text-[#1E1D1E] transition-transform duration-300 ease-[var(--ease-out-expo)] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label="Następna realizacja"
        >
          →
        </button>
      </div>

      <div className="mt-4 h-px w-full overflow-hidden bg-border-strong/70">
        <div
          key={`${activeIndex}-${paused ? "paused" : "running"}`}
          className={`h-full bg-accent ${paused || reducedMotion ? "w-full" : "animate-[portfolioProgress_5000ms_linear_forwards]"}`}
        />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-6">
        {safeCases.map((item, index) => (
          <button
            key={`${item.name}-thumb`}
            type="button"
            onClick={() => goTo(index)}
            className={`group/thumb relative overflow-hidden rounded-[8px] border bg-bg-elev text-left transition duration-500 ease-[var(--ease-out-expo)] motion-reduce:transition-none ${
              index === activeIndex
                ? "scale-[1.02] border-accent shadow-[0_0_28px_rgba(255,232,31,0.14)]"
                : "border-border-strong/70 hover:border-accent/60"
            }`}
            aria-label={`Pokaż realizację ${item.name}`}
          >
            <span className="relative block aspect-[4/3]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 180px"
                className="object-cover opacity-78 transition duration-500 group-hover/thumb:scale-105 group-hover/thumb:opacity-100 motion-reduce:transition-none"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 truncate px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                {item.name}
              </span>
            </span>
          </button>
        ))}
      </div>

      <style jsx global>{`
        @keyframes portfolioProgress {
          from {
            transform: scaleX(0);
            transform-origin: left center;
          }
          to {
            transform: scaleX(1);
            transform-origin: left center;
          }
        }
      `}</style>
    </section>
  );
}
