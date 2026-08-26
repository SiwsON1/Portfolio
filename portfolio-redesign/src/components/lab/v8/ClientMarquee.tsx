import Image from "next/image";
import { PORTFOLIO } from "@/src/content/labContent";

const logos = [...PORTFOLIO, ...PORTFOLIO];

export function ClientMarquee() {
  return (
    <section className="overflow-hidden bg-[#1E1D1E] py-12 text-fg">
      <div className="mb-6 px-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-accent md:px-10">
        Trusted by 165+ firm
      </div>
      <div className="group relative border-y border-border-strong/40 py-5">
        <div className="v8-marquee flex w-max items-center gap-5 group-hover:[animation-play-state:paused]">
          {logos.map((item, index) => (
            <div
              key={`${item.client}-${index}`}
              className="flex h-20 w-56 shrink-0 items-center gap-4 rounded-full border border-border-strong/50 bg-white/[0.03] px-5"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-bg-elev">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm font-black leading-tight text-fg">{item.client}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-muted">
                  {item.sector}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
