import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — strona nie istnieje",
};

export default function NotFound() {
  return (
    <article className="relative h-screen min-h-[640px] w-full overflow-hidden flex flex-col items-center justify-center px-6 md:px-10">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(58,142,200,0.16) 0%, rgba(20,19,31,0) 70%)",
        }}
      />
      <p className="eyebrow mb-6 relative">Error · 0x404</p>
      <h1
        className="display text-ink relative text-center mb-8"
        style={{ fontSize: "clamp(4rem, 2rem + 12vw, 14rem)", lineHeight: 0.92 }}
      >
        Pustka.
      </h1>
      <p className="text-ink-mute text-lead max-w-md text-center relative mb-12">
        Nic nie wisi pod tym adresem. Albo ktoś przekleił zły link, albo
        jeszcze tu czegoś nie zbudowałem.
      </p>
      <div className="flex flex-col md:flex-row gap-4 relative">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-8 py-4"
          data-cursor="HOME"
        >
          <span>Strona główna</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
        <Link
          href="/projekty"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors px-8 py-4"
          data-cursor="PROJEKTY"
        >
          <span>Wszystkie projekty</span>
        </Link>
      </div>
    </article>
  );
}
