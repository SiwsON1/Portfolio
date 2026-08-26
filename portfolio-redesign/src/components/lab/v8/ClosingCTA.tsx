import Link from "next/link";
import { CTA, PHONE } from "@/src/content/labContent";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1E1D1E] px-6 py-28 text-center text-fg md:px-10 md:py-40">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-4xl rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,232,31,0.12) 0%, rgba(255,232,31,0.03) 45%, transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Następny krok
        </p>
        <h2 className="mt-6 font-sans text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.035em]">
          {CTA.titleMain}
          <span className="block font-display italic font-light text-accent">
            {CTA.titleAccent}
          </span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#1E1D1E] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-0.5"
          >
            {CTA.button}
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
