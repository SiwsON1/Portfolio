"use client";

/**
 * Wizual hero dla /audyt-wcag/.
 *
 * Celowo NIE piktogram wozka ani ludzika w kole. To pierwszy odruch kategorii
 * i wyglada jak clipart z urzedu. Zamiast tego pokazujemy to, co audyt realnie
 * robi i czego zaden skaner nie zrobi: pierscien fokusu przechodzacy klawiatura
 * przez elementy interfejsu, oraz luk pomiaru kontrastu.
 *
 * styled-jsx wymaga komponentu klienckiego, stad "use client" na gorze.
 * Ruch wylaczany przy prefers-reduced-motion. Na stronie o dostepnosci
 * to warunek twardy, nie ozdoba.
 */
export function WcagHeroVisual() {
  // Cztery przystanki fokusu: dwa pola formularza, przycisk, link.
  const przystanki = [
    { x: -46, y: -34, w: 92, h: 16 },
    { x: -46, y: -10, w: 92, h: 16 },
    { x: -46, y: 16, w: 52, h: 18 },
    { x: 12, y: 18, w: 34, h: 12 },
  ];

  return (
    <div
      className="wcag-hero relative w-full h-full flex items-center justify-center"
      style={{ minHeight: "300px" }}
      aria-hidden
    >
      {/* Poswiata, ten sam jezyk co na stronach uslug */}
      <div
        className="absolute inset-0 pointer-events-none wcag-anim-pulse"
        style={{
          background:
            "radial-gradient(ellipse 62% 55% at 50% 50%, rgba(20,19,31,0) 0%, rgba(58,142,200,0.20) 35%, rgba(232,178,134,0.09) 55%, rgba(20,19,31,0) 76%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Orbita zewnetrzna z podzialka: 50 kresek = 50 kryteriow */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none wcag-anim-orbit"
        viewBox="-100 -100 200 200"
      >
        <circle cx="0" cy="0" r="86" fill="none" stroke="rgba(168,218,255,0.14)" strokeWidth="0.4" />
        {Array.from({ length: 50 }).map((_, i) => {
          const kat = (i / 50) * Math.PI * 2;
          const zewn = 86;
          const dl = i % 10 === 0 ? 5 : 2.4;
          return (
            <line
              key={i}
              x1={(Math.cos(kat) * zewn).toFixed(2)}
              y1={(Math.sin(kat) * zewn).toFixed(2)}
              x2={(Math.cos(kat) * (zewn - dl)).toFixed(2)}
              y2={(Math.sin(kat) * (zewn - dl)).toFixed(2)}
              stroke={i % 10 === 0 ? "#E8B286" : "rgba(168,218,255,0.42)"}
              strokeWidth={i % 10 === 0 ? 0.9 : 0.5}
            />
          );
        })}
      </svg>

      {/* Luk kontrastu: od ciemnego do jasnego, ze znacznikiem progu zgodnosci */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-100 -100 200 200">
        <defs>
          <linearGradient id="wcagKontrast" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A2A3A" />
            <stop offset="55%" stopColor="#8A8078" />
            <stop offset="100%" stopColor="#F5E9D8" />
          </linearGradient>
        </defs>
        {/* Tor luku, zeby ciemny koniec gradientu byl widoczny na ciemnym tle */}
        <path
          d="M -68 -46 A 82 82 0 0 1 68 -46"
          fill="none"
          stroke="rgba(168,218,255,0.16)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M -68 -46 A 82 82 0 0 1 68 -46"
          fill="none"
          stroke="url(#wcagKontrast)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Znacznik progu 4,5:1 z podpisem, bo to liczba, ktora sprzedaje */}
        <g className="wcag-anim-prog">
          <line x1="26" y1="-64" x2="26" y2="-50" stroke="#E8B286" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="26" cy="-66" r="2.2" fill="#E8B286" />
          <text
            x="26"
            y="-72"
            textAnchor="middle"
            fill="#E8B286"
            style={{ font: "500 6px var(--font-geist-mono, monospace)", letterSpacing: "0.06em" }}
          >
            4.5:1
          </text>
        </g>
      </svg>

      {/* Szkielet interfejsu i pierscien fokusu */}
      <svg className="relative z-10 w-[78%] max-w-[240px]" viewBox="-60 -52 120 92">
        {przystanki.map((p, i) => (
          <rect
            key={i}
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx="2.5"
            fill={i === 2 ? "rgba(232,178,134,0.14)" : "rgba(168,218,255,0.06)"}
            stroke={i === 2 ? "rgba(232,178,134,0.5)" : "rgba(168,218,255,0.28)"}
            strokeWidth="0.6"
          />
        ))}

        {/* Etykiety nad polami, bo brak etykiety to najczestszy realny blad */}
        <line x1="-46" y1="-40" x2="-24" y2="-40" stroke="rgba(168,218,255,0.34)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="-46" y1="-16" x2="-31" y2="-16" stroke="rgba(168,218,255,0.34)" strokeWidth="1.4" strokeLinecap="round" />

        {/* Pierscien fokusu przeskakuje, nie plynie. Tak dziala klawiatura. */}
        <rect
          className="wcag-anim-fokus"
          x="-49"
          y="-37"
          width="98"
          height="22"
          rx="4"
          fill="none"
          stroke="#E8B286"
          strokeWidth="1.5"
        />
      </svg>

      {/* Drobiny, spojne z reszta serwisu */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-100 -100 200 200">
        {Array.from({ length: 10 }).map((_, i) => {
          const kat = (i / 10) * Math.PI * 2 + i * 0.6;
          const r = 96 + (i % 3) * 5;
          return (
            <circle
              key={i}
              className={`wcag-anim-drobina wcag-anim-drobina-${i % 3}`}
              cx={(Math.cos(kat) * r).toFixed(2)}
              cy={(Math.sin(kat) * r).toFixed(2)}
              r={i % 3 === 0 ? 1.1 : 0.65}
              fill={i % 3 === 0 ? "#E8B286" : "#A8DAFF"}
              opacity={i % 3 === 0 ? 0.9 : 0.5}
              style={{ animationDuration: `${5 + (i % 4)}s` }}
            />
          );
        })}
      </svg>

      <style jsx global>{`
        .wcag-anim-pulse {
          animation: wcagPulse 9s ease-in-out infinite;
        }
        .wcag-anim-orbit {
          animation: wcagOrbit 120s linear infinite;
        }
        .wcag-anim-prog {
          animation: wcagProg 6s ease-in-out infinite;
        }
        .wcag-anim-fokus {
          animation: wcagFokus 8s steps(1, end) infinite;
        }
        .wcag-anim-drobina {
          animation-name: wcagDrobina0;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .wcag-anim-drobina-1 {
          animation-name: wcagDrobina1;
        }
        .wcag-anim-drobina-2 {
          animation-name: wcagDrobina2;
        }
        @keyframes wcagPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.62; transform: scale(1.07); }
        }
        @keyframes wcagOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wcagProg {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }
        @keyframes wcagFokus {
          0%, 22%   { transform: translate(0px, 0px); width: 98px; height: 22px; }
          25%, 47%  { transform: translate(0px, 24px); width: 98px; height: 22px; }
          50%, 72%  { transform: translate(0px, 50px); width: 58px; height: 24px; }
          75%, 97%  { transform: translate(58px, 52px); width: 40px; height: 18px; }
          100%      { transform: translate(0px, 0px); width: 98px; height: 22px; }
        }
        @keyframes wcagDrobina0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(6px, -8px); opacity: 1; }
        }
        @keyframes wcagDrobina1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.45; }
          50% { transform: translate(-9px, -5px); opacity: 0.85; }
        }
        @keyframes wcagDrobina2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.55; }
          50% { transform: translate(5px, 9px); opacity: 0.9; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wcag-hero .wcag-anim-pulse,
          .wcag-hero .wcag-anim-orbit,
          .wcag-hero .wcag-anim-prog,
          .wcag-hero .wcag-anim-fokus,
          .wcag-hero .wcag-anim-drobina {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
