"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Service } from "@/lib/services";
import { OrbitalMark } from "@/components/service/OrbitalMark";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

/**
 * Wariant A „Horyzont”: kula jako planeta przycięta krawędzią ekranu, za nagłówkiem.
 * Trzy warstwy głębi (pył gwiezdny z tyłu, kula, mono współrzędne z przodu) przesuwają się
 * w różnym tempie za myszą lub przechyłem telefonu. Na wejściu brzoskwiniowy błysk przechodzi
 * po kuli jak po literach w intro, a słowa nagłówka wynurzają się z dołu.
 */
export function HeroWpA({ s, idx, total }: { s: Service; idx: number; total: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.07;
      cur.y += (target.y - cur.y) * 0.07;
      el.style.setProperty("--mx", cur.x.toFixed(4));
      el.style.setProperty("--my", cur.y.toFixed(4));
      raf = Math.abs(cur.x - target.x) + Math.abs(cur.y - target.y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const onMouse = (e: MouseEvent) => { target.x = e.clientX / innerWidth - 0.5; target.y = e.clientY / innerHeight - 0.5; kick(); };
    let base: { b: number; g: number } | null = null;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      if (!base) base = { b: e.beta, g: e.gamma };
      base.b += (e.beta - base.b) * 0.01; base.g += (e.gamma - base.g) * 0.01;
      target.y = Math.max(-0.5, Math.min(0.5, (e.beta - base.b) / 50));
      target.x = Math.max(-0.5, Math.min(0.5, (e.gamma - base.g) / 50));
      kick();
    };
    const coarse = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (coarse) window.addEventListener("deviceorientation", onOrient, { passive: true });
    else window.addEventListener("mousemove", onMouse, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMouse); window.removeEventListener("deviceorientation", onOrient); };
  }, []);

  const words = s.h1.split(" ");
  return (
    <header ref={ref} className="hwA relative min-h-[100svh] overflow-hidden px-6 md:px-10" style={{ "--mx": 0, "--my": 0 } as React.CSSProperties}>
      {/* Warstwa 1: pył gwiezdny, najdalej, rusza się najmniej */}
      <div aria-hidden className="hwA-dust hwA-dust-a absolute inset-[-10%]" />
      <div aria-hidden className="hwA-dust hwA-dust-b absolute inset-[-10%]" />

      {/* Warstwa 2: planeta na horyzoncie */}
      <div aria-hidden className="hwA-planet absolute pointer-events-none">
        <OrbitalMark slug={s.slug} className="relative w-full" iconClassName="w-[17%] opacity-80" />
        {/* Błysk przycięty do tarczy planety, inaczej przejeżdża po nagłówku */}
        <div aria-hidden className="absolute inset-[12%] overflow-hidden rounded-full">
          <div className="hwA-sweep absolute inset-0" />
        </div>
      </div>
      {/* Scrim pod tekstem na telefonie, żeby nagłówek na kuli był czytelny */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[62%] md:hidden bg-gradient-to-t from-bg via-bg/85 to-transparent" />

      {/* Warstwa 3: rama mono z przodu, rusza się najmocniej */}
      <div className="hwA-front relative flex items-center justify-between pt-28 md:pt-40 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <Link href="/uslugi" className="hover:text-peach transition-colors">← Wszystkie usługi</Link>
        <span>Usługa {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        <span className="hidden lg:inline">51.10°N · 17.03°E</span>
      </div>

      <div className="relative flex min-h-[calc(100svh-9rem)] flex-col justify-end pb-16 md:justify-center md:pb-24">
        <div className="md:max-w-[58%]">
          <p className="eyebrow svc-in" style={{ "--i": 0 } as React.CSSProperties}>Usługa</p>
          <h1 className="display text-ink mt-4" style={{ fontSize: "clamp(2.2rem, 1rem + 5vw, 5.6rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                <span className="svc-word inline-block" style={{ "--i": i } as React.CSSProperties}>{w}</span>
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="svc-in mt-7 max-w-2xl text-ink-mute" style={{ "--i": 7, fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.3rem)", lineHeight: 1.5 } as React.CSSProperties}>
            {renderInlineLinks(s.lead)}
          </p>
          <div className="svc-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--i": 9 } as React.CSSProperties}>
            <Link href="/kontakt" data-haptic className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-[background-color,transform] duration-200 hover:bg-peach-deep active:scale-[0.97]">
              <span>Zapytaj o wycenę</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href="#realizacje" className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute underline decoration-line underline-offset-8 transition-colors hover:text-peach">Zobacz realizacje</a>
          </div>
        </div>
      </div>
      <div aria-hidden className="hwA-front absolute bottom-6 right-6 md:right-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">Frame 0001</div>
    </header>
  );
}
