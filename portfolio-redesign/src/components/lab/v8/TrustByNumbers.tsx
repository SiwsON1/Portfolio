"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 165, suffix: "+", label: "realizacji" },
  { value: 15, suffix: "+", label: "lat na rynku" },
  { value: 92, suffix: "", label: "NPS" },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedScore({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const tick = (time: number) => {
          if (!start) start = time;
          const progress = Math.min((time - start) / 1400, 1);
          setDisplay(Math.round(value * easeOutExpo(progress)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function TrustByNumbers() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            AI w marketingu
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.025em]">
            Liczby zamiast <span className="font-display italic font-light text-accent">obietnic.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border-strong/60 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative px-6 py-12 text-center md:px-10 md:py-16"
            >
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-accent/35 md:block"
                />
              ) : null}
              <p className="font-sans text-[clamp(4rem,10vw,8rem)] font-black leading-none tracking-[-0.04em] text-fg">
                <AnimatedScore value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
