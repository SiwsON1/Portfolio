"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO, PHONE } from "@/src/content/labContent";

export function HeroZeeService() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 14,
        y: (event.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#1E1D1E] px-6 pt-36 pb-24 text-center text-fg md:px-10 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,232,31,0.13) 0%, rgba(255,232,31,0.04) 42%, transparent 70%)",
          marginLeft: pointer.x,
          marginTop: pointer.y,
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted"
        >
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2 text-accent">/</span>
          <Link href="/uslugi" className="hover:text-accent">Usługi</Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-accent">Strony w Next.js</span>
        </nav>
        <h1 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.025em]">
          <span className="block">{HERO.h1Main}</span>
          <span className="block font-display italic font-light text-accent">
            {HERO.h1Accent}
          </span>
          <span className="block">{HERO.h1Suffix}</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-fg-muted">
          {HERO.lead}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#1E1D1E] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5"
          >
            Brief w 48h
          </Link>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/70 px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-fg transition-colors hover:border-accent hover:text-accent"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
