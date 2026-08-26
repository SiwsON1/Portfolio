/**
 * IndustryHeroVisual — animowana scena w hero landingu branżowego.
 *
 * Osiem motywów, każdy opowiada, co ta branża robi na stronie: kancelaria pisze pismo,
 * gabinet zapełnia terminarz, marka odzieżowa przełącza rozmiary, budowlanka pokazuje
 * przed i po. Czysty SVG plus CSS, zero JS na kliencie, wszystko na transform i opacity.
 * prefers-reduced-motion wycisza ruch, zostawia same wygaszenia.
 */

const PEACH = "oklch(78% 0.13 50)";
const OVERCAST = "oklch(60% 0.12 220)";

type Motif = { label: string; scene: React.ReactNode };

function Doc() {
  return (
    <g>
      <rect x="26" y="18" width="88" height="112" rx="2" className="ih-panel" />
      {[34, 46, 58, 70, 82, 94].map((y, i) => (
        <line
          key={y}
          x1="38"
          y1={y}
          x2={y === 94 ? 76 : 102}
          y2={y}
          className="ih-write"
          style={{ animationDelay: `${i * 180}ms` }}
        />
      ))}
      <circle cx="96" cy="112" r="15" className="ih-stamp" />
      <text x="96" y="118" textAnchor="middle" className="ih-glyph">
        §
      </text>
    </g>
  );
}

function Calendar({ accentIndex = 7, cols = 5, rows = 3 }: { accentIndex?: number; cols?: number; rows?: number }) {
  const cells = Array.from({ length: cols * rows }, (_, i) => i);
  return (
    <g>
      <rect x="18" y="26" width="104" height="96" rx="2" className="ih-panel" />
      <line x1="18" y1="44" x2="122" y2="44" className="ih-hair" />
      {cells.map((i) => {
        const x = 26 + (i % cols) * 19;
        const y = 54 + Math.floor(i / cols) * 21;
        const accent = i === accentIndex;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="14"
            height="14"
            rx="1.5"
            className={accent ? "ih-slot-live" : "ih-slot"}
            style={{ animationDelay: `${(i % cols) * 90 + Math.floor(i / cols) * 140}ms` }}
          />
        );
      })}
    </g>
  );
}

function Variants() {
  return (
    <g>
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={22 + c * 34}
            y={20 + r * 30}
            width="26"
            height="22"
            rx="1.5"
            className="ih-tile"
            style={{ animationDelay: `${(r * 3 + c) * 160}ms` }}
          />
        ))
      )}
      <rect x="22" y="114" width="96" height="18" rx="2" className="ih-panel" />
      {["S", "M", "L", "XL"].map((s, i) => (
        <text key={s} x={34 + i * 24} y={127} textAnchor="middle" className={i === 1 ? "ih-size-on" : "ih-size"}>
          {s}
        </text>
      ))}
      <rect x="24" y="116" width="22" height="14" rx="1.5" className="ih-size-marker" />
    </g>
  );
}

function Blueprint() {
  return (
    <g>
      <path d="M34 96 L34 46 L74 30 L74 80 Z" className="ih-draw" style={{ animationDelay: "0ms" }} />
      <path d="M74 30 L112 46 L112 96 L74 80 Z" className="ih-draw" style={{ animationDelay: "420ms" }} />
      <line x1="34" y1="110" x2="112" y2="110" className="ih-dim" style={{ animationDelay: "900ms" }} />
      <line x1="34" y1="105" x2="34" y2="115" className="ih-hair" />
      <line x1="112" y1="105" x2="112" y2="115" className="ih-hair" />
      <text x="73" y="124" textAnchor="middle" className="ih-mono">
        1200 mm
      </text>
    </g>
  );
}

function Booking() {
  return (
    <g>
      <rect x="18" y="30" width="104" height="80" rx="2" className="ih-panel" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={26 + i * 13}
          y={46}
          width="9"
          height="9"
          rx="1"
          className={i >= 2 && i <= 4 ? "ih-night" : "ih-slot"}
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
      <rect x="52" y="44" width="35" height="13" rx="2" className="ih-range" />
      <line x1="26" y1="72" x2="114" y2="72" className="ih-hair" />
      <text x="26" y="90" className="ih-mono">
        3 noce
      </text>
      <text x="114" y="90" textAnchor="end" className="ih-mono-accent">
        wolne
      </text>
      <rect x="26" y="96" width="88" height="8" rx="4" className="ih-bar-track" />
      <rect x="26" y="96" width="52" height="8" rx="4" className="ih-bar-fill" />
    </g>
  );
}

function BeforeAfter() {
  return (
    <g>
      <clipPath id="ih-clip-after">
        <rect x="20" y="28" width="100" height="84" className="ih-wipe" />
      </clipPath>
      <rect x="20" y="28" width="100" height="84" rx="2" className="ih-panel" />
      <g className="ih-before">
        <path d="M28 100 L48 74 L64 88 L84 60 L112 100 Z" />
        <line x1="28" y1="100" x2="112" y2="100" />
      </g>
      <g clipPath="url(#ih-clip-after)" className="ih-after">
        <path d="M28 100 L48 62 L64 78 L84 46 L112 100 Z" />
        <line x1="28" y1="100" x2="112" y2="100" />
      </g>
      <line x1="20" y1="28" x2="20" y2="112" className="ih-slider" />
      <text x="26" y="124" className="ih-mono">
        przed
      </text>
      <text x="114" y="124" textAnchor="end" className="ih-mono-accent">
        po
      </text>
    </g>
  );
}

function MediaKit() {
  return (
    <g>
      <circle cx="42" cy="44" r="15" className="ih-avatar" />
      <circle cx="42" cy="44" r="20" className="ih-ring" />
      <rect x="70" y="30" width="50" height="8" rx="4" className="ih-bar-track" />
      <rect x="70" y="30" width="38" height="8" rx="4" className="ih-bar-fill" style={{ animationDelay: "0ms" }} />
      <rect x="70" y="46" width="50" height="8" rx="4" className="ih-bar-track" />
      <rect x="70" y="46" width="26" height="8" rx="4" className="ih-bar-fill" style={{ animationDelay: "220ms" }} />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={24 + i * 25}
          y={118 - (12 + i * 9)}
          width="16"
          height={12 + i * 9}
          rx="1.5"
          className="ih-column"
          style={{ animationDelay: `${i * 140}ms` }}
        />
      ))}
      <line x1="20" y1="118" x2="122" y2="118" className="ih-hair" />
    </g>
  );
}

function LiveStream() {
  return (
    <g>
      <rect x="20" y="26" width="100" height="58" rx="2" className="ih-panel" />
      <circle cx="34" cy="38" r="4" className="ih-live-dot" />
      <text x="44" y="42" className="ih-mono-accent">
        live
      </text>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect
          key={i}
          x={30 + i * 8.4}
          y={54}
          width="4"
          height="18"
          rx="2"
          className="ih-wave"
          style={{ animationDelay: `${i * 90}ms` }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="20" y1={98 + i * 12} x2="80" y2={98 + i * 12} className="ih-hair" />
          <text x="20" y={95 + i * 12} className="ih-mono">
            {["pon 20:00", "śr 20:00", "sob 18:00"][i]}
          </text>
        </g>
      ))}
    </g>
  );
}

const MOTIFS: Record<string, Motif> = {
  "tworzenie-stron-dla-kancelarii-prawnych": { label: "pismo · pieczęć", scene: <Doc /> },
  "tworzenie-stron-dla-gabinetow-i-klinik": { label: "terminarz · zapisy", scene: <Calendar accentIndex={7} /> },
  "tworzenie-sklepow-internetowych-dla-marek-odziezowych": { label: "warianty · rozmiary", scene: <Variants /> },
  "tworzenie-stron-dla-producentow-mebli": { label: "rysunek · wymiary", scene: <Blueprint /> },
  "tworzenie-stron-dla-hoteli-i-pensjonatow": { label: "dostępność · pobyt", scene: <Booking /> },
  "tworzenie-stron-dla-firm-budowlanych": { label: "przed · po", scene: <BeforeAfter /> },
  "tworzenie-stron-dla-influencerow": { label: "media kit · zasięgi", scene: <MediaKit /> },
  "tworzenie-stron-dla-streamerow": { label: "na żywo · harmonogram", scene: <LiveStream /> },
};

export function IndustryHeroVisual({ slug }: { slug: string }) {
  const motif = MOTIFS[slug];
  if (!motif) return null;

  return (
    <figure className="ih-wrap relative w-full" aria-hidden>
      <div className="ih-glow" />
      <svg viewBox="0 0 140 140" className="relative w-full h-auto" role="presentation">
        <defs>
          <pattern id="ih-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0 L0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.25" />
          </pattern>
          <radialGradient id="ih-fade">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="62%" stopColor="#fff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="ih-mask">
            <rect width="140" height="140" fill="url(#ih-fade)" />
          </mask>
        </defs>

        {/* siatka wygaszona ku krawędziom, żeby nie konkurowała z motywem */}
        <rect width="140" height="140" fill="url(#ih-grid)" className="ih-gridfill" mask="url(#ih-mask)" />

        {/* orbity: ten sam język co na stronach usług, wolny obrót w przeciwnych kierunkach */}
        <g className="ih-orbits" mask="url(#ih-mask)">
          <ellipse cx="70" cy="70" rx="66" ry="66" className="ih-orbit ih-orbit-a" />
          <ellipse cx="70" cy="70" rx="55" ry="66" className="ih-orbit ih-orbit-b" />
        </g>

        {/* motyw lekko zmniejszony, żeby orbity miały oddech */}
        <g transform="translate(70 70) scale(0.86) translate(-70 -70)">{motif.scene}</g>

        {[
          [16, 40],
          [124, 52],
          [30, 116],
          [112, 118],
          [70, 8],
        ].map(([cx, cy], i) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" className="ih-dust" style={{ animationDelay: `${i * 700}ms` }} />
        ))}
      </svg>
      <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint text-center">
        {motif.label}
      </figcaption>

      <style>{`
        .ih-wrap { --peach: ${PEACH}; --overcast: ${OVERCAST}; }
        .ih-glow {
          position: absolute; inset: -18% -12% 6% -12%; pointer-events: none;
          background: radial-gradient(ellipse at 50% 45%, rgba(232,178,134,0.13) 0%, rgba(20,19,31,0) 68%);
        }
        .ih-gridfill { color: rgba(232,178,134,0.16); }
        .ih-panel { fill: rgba(20,19,31,0.55); stroke: rgba(255,255,255,0.22); stroke-width: 0.8; }
        .ih-hair { stroke: rgba(255,255,255,0.16); stroke-width: 0.6; }
        .ih-mono { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 5px; letter-spacing: 0.14em; text-transform: uppercase; fill: rgba(255,255,255,0.42); }
        .ih-mono-accent { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 5px; letter-spacing: 0.14em; text-transform: uppercase; fill: var(--peach); }
        .ih-glyph { font-family: var(--font-fraunces, serif); font-style: italic; font-size: 13px; fill: var(--peach); }

        /* kancelaria */
        .ih-write { stroke: rgba(255,255,255,0.72); stroke-width: 1.3; stroke-linecap: round;
          stroke-dasharray: 70; stroke-dashoffset: 70; animation: ih-line 5.6s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-line { 0% { stroke-dashoffset: 70 } 16%,90% { stroke-dashoffset: 0 } 99%,100% { stroke-dashoffset: 70 } }
        .ih-stamp { fill: rgba(232,178,134,0.16); stroke: var(--peach); stroke-width: 1.1;
          transform-origin: 96px 112px; animation: ih-stamp 5.6s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-stamp { 0%,52% { opacity: 0.4; transform: scale(0.96) } 66%,94% { opacity: 1; transform: scale(1) } 100% { opacity: 0.4; transform: scale(0.96) } }

        /* gabinet, hotel */
        .ih-slot { fill: rgba(255,255,255,0.07); animation: ih-fill 4.8s ease-in-out infinite; }
        @keyframes ih-fill { 0%,20% { opacity: 0.25 } 45%,80% { opacity: 1 } 100% { opacity: 0.25 } }
        .ih-slot-live { fill: rgba(232,178,134,0.22); stroke: var(--peach); stroke-width: 0.6;
          animation: ih-pulse 2.6s ease-in-out infinite; }
        @keyframes ih-pulse { 0%,100% { opacity: 0.55 } 50% { opacity: 1 } }
        .ih-night { fill: rgba(232,178,134,0.20); animation: ih-fill 4.8s ease-in-out infinite; }
        .ih-range { fill: none; stroke: var(--peach); stroke-width: 0.7; stroke-dasharray: 3 2; }
        .ih-bar-track { fill: rgba(255,255,255,0.08); }
        .ih-bar-fill { fill: var(--peach); opacity: 0.85; transform-origin: left center;
          animation: ih-grow 4.4s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-grow { 0% { transform: scaleX(0.15) } 40%,80% { transform: scaleX(1) } 100% { transform: scaleX(0.15) } }

        /* marka odzieżowa */
        .ih-tile { fill: rgba(255,255,255,0.05); stroke: rgba(255,255,255,0.10); stroke-width: 0.5;
          animation: ih-tile 5.2s ease-in-out infinite; }
        @keyframes ih-tile { 0%,100% { opacity: 0.35 } 45% { opacity: 1 } }
        .ih-size { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 6px; fill: rgba(255,255,255,0.38); }
        .ih-size-on { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 6px; fill: var(--peach); }
        .ih-size-marker { fill: none; stroke: var(--peach); stroke-width: 0.7;
          animation: ih-slide 6s cubic-bezier(0.77,0,0.175,1) infinite; }
        @keyframes ih-slide { 0%,14% { transform: translateX(0) } 30%,44% { transform: translateX(24px) } 60%,74% { transform: translateX(48px) } 90%,100% { transform: translateX(0) } }

        /* producent mebli */
        .ih-draw { fill: rgba(96,150,200,0.05); stroke: rgba(255,255,255,0.55); stroke-width: 0.8;
          stroke-dasharray: 210; stroke-dashoffset: 210; animation: ih-draw 6.4s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-draw { 0% { stroke-dashoffset: 210 } 20%,90% { stroke-dashoffset: 0 } 99%,100% { stroke-dashoffset: 210 } }
        .ih-dim { stroke: var(--peach); stroke-width: 0.7; stroke-dasharray: 90; stroke-dashoffset: 90;
          animation: ih-dim 6.4s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-dim { 0%,14% { stroke-dashoffset: 90 } 32%,90% { stroke-dashoffset: 0 } 99%,100% { stroke-dashoffset: 90 } }

        /* budowlanka */
        .ih-before path { fill: rgba(255,255,255,0.05); stroke: rgba(255,255,255,0.28); stroke-width: 0.7; }
        .ih-before line { stroke: rgba(255,255,255,0.28); stroke-width: 0.7; }
        .ih-after path { fill: rgba(232,178,134,0.10); stroke: var(--peach); stroke-width: 0.8; }
        .ih-after line { stroke: var(--peach); stroke-width: 0.8; }
        .ih-wipe { animation: ih-wipe 7s cubic-bezier(0.77,0,0.175,1) infinite; transform-origin: 20px 0; }
        @keyframes ih-wipe { 0%,8% { transform: scaleX(0.06) } 46%,60% { transform: scaleX(1) } 96%,100% { transform: scaleX(0.06) } }
        .ih-slider { stroke: var(--peach); stroke-width: 1; animation: ih-slider 7s cubic-bezier(0.77,0,0.175,1) infinite; }
        @keyframes ih-slider { 0%,8% { transform: translateX(6px) } 46%,60% { transform: translateX(100px) } 96%,100% { transform: translateX(6px) } }

        /* influencer */
        .ih-avatar { fill: rgba(255,255,255,0.07); stroke: rgba(255,255,255,0.18); stroke-width: 0.6; }
        .ih-ring { fill: none; stroke: var(--peach); stroke-width: 0.8; stroke-dasharray: 96 30;
          transform-origin: 42px 44px; animation: ih-spin 9s linear infinite; }
        @keyframes ih-spin { to { transform: rotate(360deg) } }
        .ih-column { fill: rgba(232,178,134,0.55); transform-origin: center bottom;
          animation: ih-col 4.6s cubic-bezier(0.23,1,0.32,1) infinite; }
        @keyframes ih-col { 0% { transform: scaleY(0.2) } 42%,80% { transform: scaleY(1) } 100% { transform: scaleY(0.2) } }

        /* streamer */
        .ih-live-dot { fill: var(--peach); animation: ih-blink 1.8s ease-in-out infinite; }
        @keyframes ih-blink { 0%,100% { opacity: 0.35 } 50% { opacity: 1 } }
        .ih-wave { fill: rgba(255,255,255,0.42); transform-origin: center; animation: ih-wave 1.6s ease-in-out infinite; }
        @keyframes ih-wave { 0%,100% { transform: scaleY(0.35) } 50% { transform: scaleY(1) } }


        .ih-orbit { fill: none; stroke: rgba(255,255,255,0.10); stroke-width: 0.5; transform-origin: 70px 70px; }
        .ih-orbit-a { animation: ih-rot 26s linear infinite; }
        .ih-orbit-b { stroke: rgba(232,178,134,0.22); stroke-dasharray: 2 6; animation: ih-rot-rev 34s linear infinite; }
        @keyframes ih-rot { to { transform: rotate(360deg) } }
        @keyframes ih-rot-rev { to { transform: rotate(-360deg) } }
        .ih-dust { fill: var(--peach); opacity: 0.5; animation: ih-blink 4.2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ih-wrap :where(.ih-write, .ih-stamp, .ih-slot, .ih-slot-live, .ih-night, .ih-bar-fill,
            .ih-tile, .ih-size-marker, .ih-draw, .ih-dim, .ih-wipe, .ih-slider, .ih-ring,
            .ih-column, .ih-live-dot, .ih-wave, .ih-orbit-a, .ih-orbit-b, .ih-dust) {
            animation: none;
            stroke-dashoffset: 0;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </figure>
  );
}
