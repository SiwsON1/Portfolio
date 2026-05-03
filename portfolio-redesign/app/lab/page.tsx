import Link from "next/link";

const variants = [
  {
    v: "v1",
    name: "Atmosfera",
    desc: "Portret w blue plasma + WebGL displacement shader. Aktualna wersja — figure-led cinematic.",
    tags: ["WebGL", "Portrait", "R3F", "Particles"],
  },
  {
    v: "v1b",
    name: "Wireframe sphere",
    desc: "Ten sam layout co V1, ale zamiast portretu rotujący wireframe icosahedron + orbital particles + cyan core. Data-vis vibe.",
    tags: ["WebGL", "R3F", "Wireframe", "Orbit"],
  },
  {
    v: "v1c",
    name: "Code rain",
    desc: "Ten sam layout co V1, ale Matrix-style padający kod (Next.js, React, useEffect, AI) z peach highlightami. Canvas2D, lekki.",
    tags: ["Canvas", "Matrix", "Type", "Tech"],
  },
  {
    v: "v1d",
    name: "Particle nebula",
    desc: "Ten sam layout co V1, ale 3200 cząstek formuje mgławicę z swirl + mouse pull. Cool blue + peach vertex colors.",
    tags: ["WebGL", "R3F", "Particles", "Additive"],
  },
  {
    v: "v2",
    name: "Manifest",
    desc: "Pure typography — żadnej figury. Ogromne Fraunces zalewa viewport, scroll-snap między ekranami zdań.",
    tags: ["Type-led", "Scroll-snap", "Editorial"],
  },
  {
    v: "v3",
    name: "Scene",
    desc: "Abstrakcyjna scena 3D — pływające szklane sfery + plasma core, kamera orbituje, cursor steruje światłem.",
    tags: ["WebGL", "3D", "Glass material", "Camera orbit"],
  },
  {
    v: "v4",
    name: "Split",
    desc: "Split-screen cinema — lewa: portret z displacement, prawa: scrolling manifesto + ticker. Mouse decyduje o focus.",
    tags: ["Split", "Cinema", "Manifest"],
  },
  {
    v: "v5",
    name: "Marquee Wall",
    desc: "Brutalist editorial — 5 marquee'ów stacked z różnymi prędkościami i kierunkami. Portret-sticker w rogu z magnetism.",
    tags: ["Brutalist", "Marquee", "Type"],
  },
];

export default function LabIndex() {
  return (
    <article className="px-6 md:px-10 pt-32 md:pt-44 pb-32">
      <header className="mb-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
          Lab · wersje hero strony głównej
        </p>
        <h1
          className="display text-ink"
          style={{ fontSize: "clamp(2.5rem, 1rem + 7vw, 7.5rem)" }}
        >
          Pięć <em>kierunków</em> hero.
        </h1>
        <p className="mt-8 max-w-2xl text-ink-mute text-lead">
          Pięć różnych podejść do hero strony głównej. Każde anti-overlapping,
          każde działające z paletą Atmosfera. Wybór decyduje o tym jak strona
          się "otwiera" i co komunikuje na pierwsze 3 sekundy.
        </p>
      </header>

      <ol className="border-t border-line">
        {variants.map((v, i) => (
          <li key={v.v} className="border-b border-line group">
            <Link
              href={`/lab/${v.v}`}
              className="block py-12 md:py-16 grid grid-cols-12 gap-6 items-baseline relative overflow-hidden"
              data-cursor="OTWÓRZ"
            >
              {/* peach sweep on hover */}
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(232,178,134,0.06) 0%, rgba(232,178,134,0) 70%)",
                }}
              />

              <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint relative">
                {v.v.toUpperCase()}
              </span>

              <div className="col-span-10 md:col-span-4 relative">
                <h2
                  className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                  style={{
                    fontSize: "clamp(2rem, 1rem + 3.5vw, 4.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {v.name}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
                  {v.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-line px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="col-span-12 md:col-span-6 text-ink-mute relative">
                {v.desc}
              </p>

              <span className="col-span-12 md:col-span-1 text-right font-mono text-base text-ink-mute group-hover:text-peach group-hover:translate-x-1 transition-all relative">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
