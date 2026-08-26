"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Sparkle({ className, delay = "0s" }: { className: string; delay?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      style={{ animationDelay: delay }}
    >
      <path
        d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeroZee() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 18,
        y: (event.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#1E1D1E] px-6 pt-36 pb-24 text-center md:px-10 md:pt-44">
      <div
        aria-hidden
        className="v8-float absolute left-[8%] top-[18%] h-48 w-48 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,232,31,0.16) 0%, rgba(255,232,31,0.04) 48%, transparent 72%)",
          transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)`,
        }}
      />
      <div
        aria-hidden
        className="v8-float-alt absolute bottom-[16%] right-[10%] h-64 w-64 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,232,31,0.13) 0%, rgba(255,255,255,0.03) 52%, transparent 74%)",
          transform: `translate3d(${-pointer.x}px, ${-pointer.y}px, 0)`,
        }}
      />

      <Sparkle className="v8-spark absolute left-[18%] top-[30%] h-4 w-4 text-accent/70" />
      <Sparkle className="v8-spark absolute right-[18%] top-[28%] h-5 w-5 text-accent/60" delay="0.6s" />
      <Sparkle className="v8-spark absolute bottom-[30%] left-[24%] h-3 w-3 text-accent/60" delay="1.1s" />
      <Sparkle className="v8-spark absolute bottom-[24%] right-[26%] h-4 w-4 text-accent/70" delay="1.7s" />
      <Sparkle className="v8-spark absolute right-[38%] top-[18%] h-3 w-3 text-accent/50" delay="2.2s" />

      <div className="absolute right-6 top-28 hidden items-center gap-3 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2 text-accent md:flex">
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M12 2l7 3v6c0 4.6-2.9 8.8-7 10-4.1-1.2-7-5.4-7-10V5l7-3zm0 4.2L8 7.9V11c0 2.7 1.6 5.4 4 6.5 2.4-1.1 4-3.8 4-6.5V7.9l-4-1.7z"
          />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">165+ wdrożeń</span>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          AM.pro Lab V8
        </p>
        <h1 className="font-sans text-[clamp(3rem,8.5vw,8rem)] font-black leading-[0.92] tracking-[-0.025em] text-fg">
          <span className="block">Strony, kampanie i marka</span>
          <span className="block font-display italic font-light text-accent">
            która rośnie.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-fg-muted">
          Projektujemy szybkie strony, kampanie i systemy contentowe, które łączą
          mocny brand z mierzalnym wzrostem w Google, Ads i AI search.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#1E1D1E] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5"
          >
            Brief w 48h
          </Link>
          <a
            href="tel:+48570507703"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/70 px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Porozmawiajmy
          </a>
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
          Zaufały nam: Chojmex, Pionier Pianki, AMF Van System +160
        </p>
      </div>

      <style jsx>{`
        .v8-float {
          animation: v8Float 8s ease-in-out infinite alternate;
          will-change: transform;
        }
        .v8-float-alt {
          animation: v8Float 9s ease-in-out infinite alternate-reverse;
          will-change: transform;
        }
        .v8-spark {
          animation: v8Spark 4.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes v8Float {
          from { margin-top: -14px; }
          to { margin-top: 18px; }
        }
        @keyframes v8Spark {
          0%, 100% { opacity: 0.35; transform: scale(0.82) rotate(0deg); }
          45% { opacity: 1; transform: scale(1.18) rotate(22deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .v8-float,
          .v8-float-alt,
          .v8-spark {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
