import Link from "next/link";

const STEPS = [
  {
    title: "Rozmowa",
    text: "Opisujesz, co chcesz zrobić i na kiedy. W ciągu 24 godzin roboczych odpisuję z pierwszą oceną i pytaniami.",
  },
  {
    title: "Zakres i wycena",
    text: "Ustalamy, co wchodzi do pierwszej wersji, a co może poczekać. Dostajesz wycenę z zakresem i terminem.",
  },
  {
    title: "Budowa z podglądem",
    text: "Po każdym etapie dostajesz link do wersji testowej i krótkie demo tego, co przybyło.",
  },
  {
    title: "Start i opieka",
    text: "Wdrożenie, testy i instrukcja na typowe sytuacje. Po starcie zostaję, gdy trzeba coś poprawić.",
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="jak-pracuje"
      className="relative border-t border-line px-6 py-16 md:px-10 md:py-32"
    >
      <div className="mb-10 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Jak pracuję · 4 kroki</p>
        </div>
        <div className="md:col-span-9">
          <h2 id="jak-pracuje" className="display text-h1 text-ink">
            Od maila do <em>startu.</em>
          </h2>
        </div>
      </div>

      <ol className="grid grid-cols-1 border-t border-line md:grid-cols-4">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-b border-line py-6 md:block md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-peach md:mb-8 md:block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3
                className="mb-2 font-display italic text-ink md:mb-4"
                style={{ fontSize: "clamp(1.4rem, 1.1rem + 1vw, 2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-mute md:text-base">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-16">
        <Link
          href="/kontakt"
          className="group inline-flex min-h-12 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-colors hover:bg-peach-deep"
          data-cursor="START"
        >
          <span>Opisz projekt</span>
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          Odpowiedź w 24 h robocze
        </span>
      </div>
    </section>
  );
}
