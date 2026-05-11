"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FACTS = [
  { label: "EST.", value: "MMXX" },
  { label: "Klienci", value: "30+" },
  { label: "Bazuję", value: "Wrocław" },
  { label: "Forma", value: "B2B / hr" },
];

export function AboutTease() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".at-image", {
        y: 80,
        autoAlpha: 0,
        scale: 0.94,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.from(".at-line", {
        y: 30,
        autoAlpha: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.from(".at-fact", {
        y: 20,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: ".at-facts", start: "top 92%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 md:px-10 md:py-48 overflow-hidden border-t border-line"
    >
      {/* Subtle ambient — peach upper-left, cool blue middle */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 20%, rgba(232,178,134,0.07) 0%, rgba(20,19,31,0) 60%), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 60%)",
        }}
      />

      <header className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-28">
        <div className="md:col-span-3">
          <p className="at-line eyebrow">O mnie · Marcin Siwonia</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-h1 text-ink">
            <span className="at-line block overflow-hidden">
              <span className="block">Sześć lat na rynku.</span>
            </span>
            <span className="at-line block overflow-hidden">
              <span className="block"><em>Cztery</em> w software house,</span>
            </span>
            <span className="at-line block overflow-hidden">
              <span className="block"><em>cztery</em> na swoim.</span>
            </span>
          </h2>
        </div>
      </header>

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* LEFT — narrative + facts */}
        <div className="md:col-span-7 md:col-start-1 order-2 md:order-1">
          <div className="at-line space-y-6 text-ink-mute text-lead max-w-prose mb-12">
            <p>
              Z wykształcenia ekonomista, kod złapałem w pierwszym roku
              studiów. Cztery lata frontend w software house we Wrocławiu,
              od końca 2022 freelance. Teraz <span className="text-ink">4–6 klientów</span>{" "}
              jednocześnie, połowa czasu na kod, połowa na rozmowy.
            </p>
            <p>
              Po godzinach prowadzę{" "}
              <a
                href="https://seomantyczny.pl"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
              >
                seomantyczny.pl
              </a>{" "}
              — blog o AI i SEO. Nie zostawiam kodu komuś, kto go nie pisał.
            </p>
          </div>

          {/* Facts strip */}
          <ul className="at-facts grid grid-cols-2 md:grid-cols-4 gap-px bg-line border-y border-line">
            {FACTS.map((f) => (
              <li key={f.label} className="at-fact bg-bg p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                  {f.label}
                </p>
                <p
                  className="font-display italic text-ink"
                  style={{
                    fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {f.value}
                </p>
              </li>
            ))}
          </ul>

          <div className="at-line mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              href="/o-mnie"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors relative"
              data-cursor="DALEJ"
            >
              <span className="absolute -bottom-1 left-0 h-px w-8 bg-peach scale-x-0 origin-left group-hover:scale-x-[2] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span>Cała historia</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="/ms_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors"
              data-cursor="POBIERZ"
            >
              <span>CV (PDF)</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>

        {/* RIGHT — cutout portrait, kompaktowy (zdjecie ma slabsza jakosc, mniejsze = ostrzejsze) */}
        <div className="md:col-span-3 md:col-start-10 order-1 md:order-2">
          <figure className="at-image relative aspect-[3/4] max-w-[240px] mx-auto md:mx-0">
            {/* Soft peach glow za postacią */}
            <div
              aria-hidden
              className="absolute -inset-6 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(232,178,134,0.20) 0%, rgba(58,142,200,0.10) 40%, rgba(20,19,31,0) 70%)",
              }}
            />
            {/* Postać wycięta z tła */}
            <Image
              src="/avatar-cutout.png"
              alt="Marcin Siwonia, web developer z Wrocławia"
              fill
              className="object-contain object-bottom relative z-[1]"
              sizes="(max-width: 768px) 60vw, 240px"
              priority={false}
            />
            {/* Frame mark */}
            <figcaption className="absolute -bottom-6 left-0 right-0 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-ink-mute z-10">
              <span>Marcin · Wrocław</span>
              <span>[01]</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
