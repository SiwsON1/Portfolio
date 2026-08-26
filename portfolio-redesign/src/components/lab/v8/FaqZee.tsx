import { FAQ } from "@/src/content/labContent";

export function FaqZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            FAQ
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,4vw,4.5rem)] font-black leading-[0.96] tracking-[-0.025em]">
            Krótkie <span className="font-display italic font-light text-accent">odpowiedzi.</span>
          </h2>
        </div>
        <div className="border-t border-border-strong/60 lg:col-span-8">
          {FAQ.map((item, index) => (
            <details
              key={item.q}
              className="group border-b border-border-strong/60 py-7"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span>
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Q{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-sans text-xl font-bold leading-snug text-fg group-open:text-accent">
                    {item.q}
                  </span>
                </span>
                <span className="mt-5 text-2xl leading-none text-fg-muted transition-transform duration-300 group-open:rotate-45 group-open:text-accent">
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
