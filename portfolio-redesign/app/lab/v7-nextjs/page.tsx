import type { Metadata } from "next";
import Link from "next/link";
import { HeroAtomic } from "@/src/components/lab/HeroAtomic";
import { PortfolioCarousel, type PortfolioCarouselCase } from "@/src/components/lab/PortfolioCarousel";
import { ServicesAtomic } from "@/src/components/lab/ServicesAtomic";
import { CTA, PHONE, PORTFOLIO } from "@/src/content/labContent";

export const metadata: Metadata = {
  title: "LAB · V7 Atomic Inspired",
  robots: { index: false, follow: false },
};

const portfolioCases: PortfolioCarouselCase[] = PORTFOLIO.map((item) => ({
  name: item.client,
  tagline: item.sector,
  image: item.image,
  domain: item.url,
}));

export default function V7NextjsPage() {
  return (
    <div className="min-h-screen bg-[#1E1D1E] font-sans text-fg">
      <HeroAtomic />
      <ServicesAtomic />
      <section className="bg-[#1E1D1E] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <PortfolioCarousel cases={portfolioCases} accentLabel="6 realizacji · live" />
        </div>
      </section>
      <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-border-strong/60 py-14 md:grid-cols-12 md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent md:col-span-4">
            EST.2010 · 15+ lat doswiadczenia
          </p>
          <h2 className="font-sans text-[clamp(2rem,5vw,5rem)] font-black leading-[0.96] tracking-[-0.02em] md:col-span-8">
            Ad Awards to nie startup.
            <span className="block font-display italic font-light text-accent">
              To 15 lat ciaglego doskonalenia.
            </span>
          </h2>
        </div>
      </section>
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
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
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
    </div>
  );
}
