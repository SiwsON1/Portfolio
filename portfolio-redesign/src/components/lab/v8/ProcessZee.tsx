import { PROCESS } from "@/src/content/labContent";

export function ProcessZee() {
  return (
    <section className="overflow-hidden bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Proces
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.025em]">
            Od briefu do <span className="font-display italic font-light text-accent">launchu.</span>
          </h2>
        </div>
        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-4">
          <span
            aria-hidden
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-border-strong/50 md:block"
          />
          {PROCESS.steps.map((step, index) => (
            <li
              key={step.title}
              className="v8-reveal relative flex gap-5 md:block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-mono text-[11px] font-bold text-[#1E1D1E] shadow-[0_0_28px_rgba(255,232,31,0.22)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="pb-8 md:pt-8">
                <h3 className="font-sans text-lg font-black tracking-[-0.01em] text-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              </div>
              <span
                aria-hidden
                className="absolute left-[21px] top-11 h-full w-px bg-border-strong/50 md:hidden"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
