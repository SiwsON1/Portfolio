import { SERVICES } from "@/src/content/labContent";

export function ServiceScopeZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Co wchodzi w skład
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.025em]">
            Pakiet pod <span className="font-display italic font-light text-accent">Next.js.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border-strong/60 bg-white/[0.025] p-6 md:p-8"
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-[#1E1D1E]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-sans text-2xl font-black leading-tight tracking-[-0.015em]">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-fg-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
