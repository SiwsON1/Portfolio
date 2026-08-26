import Image from "next/image";
import { PORTFOLIO } from "@/src/content/labContent";

export function ServiceProofZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-20 text-fg md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Quick proof
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PORTFOLIO.slice(0, 3).map((item) => (
            <a
              key={item.client}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-border-strong/60 bg-bg-elev"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.client} case study`}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {item.sector}
                </p>
                <h2 className="mt-2 font-sans text-xl font-black text-fg">
                  {item.client}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
