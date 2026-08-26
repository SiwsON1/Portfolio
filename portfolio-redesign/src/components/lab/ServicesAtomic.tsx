"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "STRONY W NEXT.JS",
    href: "/nowoczesne-strony-internetowe",
    metric: { prefix: "", value: 98, suffix: " PSI" },
  },
  {
    title: "SEO + GEO/LLMO",
    href: "/pozycjonowanie-stron-internetowych",
    metric: { prefix: "+", value: 340, suffix: "% ruchu" },
  },
  {
    title: "ADS GOOGLE",
    href: "/prowadzenie-kampanii-google-ads",
    metric: { prefix: "", value: 4.8, suffix: "× ROAS" },
  },
  {
    title: "ADS SOCIAL",
    href: "/reklama-w-social-media",
    metric: { prefix: "+", value: 62, suffix: "% leadow" },
  },
  {
    title: "E-COMMERCE",
    href: "/ecommerce",
    metric: { prefix: "+", value: 41, suffix: "% koszyka" },
  },
];

function doubleLetters(value: string) {
  return value
    .split("")
    .map((char) => (char === " " ? "  " : `${char}${char}`))
    .join("");
}

function CountUp({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.45 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let frame = 0;
    const startedAt = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, visible]);

  const decimals = value % 1 === 0 ? 0 : 1;

  return (
    <span ref={ref}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function ServicesAtomic() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const scrollByCard = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-service-card]");
    track.scrollBy({
      left: direction * ((card?.offsetWidth ?? 360) + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#1E1D1E] px-6 py-28 text-fg md:px-10 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(255,232,31,0.12), transparent 34%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.06), transparent 28%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              SERVICES · ATOMIC CARDS
            </p>
            <h2 className="mt-5 max-w-4xl font-sans text-[clamp(3rem,8vw,8rem)] font-black leading-[0.88] tracking-[-0.02em]">
              Wybierz tor
              <span className="block font-display italic font-light text-accent">
                wzrostu
              </span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border-strong text-xl transition duration-300 hover:border-accent hover:bg-accent hover:text-[#1E1D1E]"
              aria-label="Poprzednie usługi"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border-strong text-xl transition duration-300 hover:border-accent hover:bg-accent hover:text-[#1E1D1E]"
              aria-label="Następne usługi"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="atomic-services-scroll -mx-6 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 active:cursor-grabbing md:-mx-10 md:gap-6 md:px-10"
          onPointerDown={(event) => {
            const track = trackRef.current;
            if (!track) return;
            drag.current = {
              active: true,
              startX: event.clientX,
              scrollLeft: track.scrollLeft,
            };
            track.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const track = trackRef.current;
            if (!track || !drag.current.active) return;
            track.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
          }}
          onPointerUp={() => {
            drag.current.active = false;
          }}
          onPointerCancel={() => {
            drag.current.active = false;
          }}
        >
          {services.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              data-service-card=""
              className="group relative flex aspect-[3/4] min-w-[82vw] snap-start flex-col overflow-hidden rounded-[8px] border border-border-strong bg-bg-elev p-6 transition duration-500 ease-[var(--ease-out-expo)] hover:scale-[1.02] hover:border-accent hover:shadow-[0_0_60px_rgba(255,232,31,0.14)] md:min-w-[calc((100%_-_24px)/2)] lg:min-w-[calc((100%_-_48px)/3)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 opacity-95 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at ${20 + index * 13}% 18%, rgba(255,232,31,0.22), transparent 30%), radial-gradient(circle at 78% ${70 - index * 8}%, rgba(255,255,255,0.08), transparent 28%), linear-gradient(135deg, rgba(255,232,31,0.04), rgba(30,29,30,0.92) 42%, rgba(0,0,0,0.72))`,
                }}
              />
              <span
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
                }}
              />
              <span className="relative ml-auto grid h-12 w-12 place-items-center rounded-full border border-accent/70 text-2xl text-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:bg-accent group-hover:text-[#1E1D1E]">
                ↗
              </span>
              <h3 className="relative my-auto break-words font-sans text-3xl font-black leading-[0.92] tracking-[-0.01em] text-fg lg:text-4xl">
                {doubleLetters(item.title)}
              </h3>
              <p className="relative font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                <CountUp {...item.metric} />
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .atomic-services-scroll {
          scrollbar-width: none;
        }
        .atomic-services-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
