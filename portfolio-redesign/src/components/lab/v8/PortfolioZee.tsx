import Image from "next/image";
import { PORTFOLIO } from "@/src/content/labContent";

export function PortfolioZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.025em]">
            Projekty, które <span className="font-display italic font-light text-accent">pracują.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {PORTFOLIO.slice(0, 4).map((item) => (
            <a
              key={item.client}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-border-strong/60 bg-bg-elev"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.client} case study`}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-6 p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      {item.sector}
                    </p>
                    <h3 className="mt-2 font-display text-3xl italic leading-none text-white md:text-4xl">
                      {item.client}
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 text-xl text-white transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[#1E1D1E]">
                    ↗
                  </span>
                </div>
                <span className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
