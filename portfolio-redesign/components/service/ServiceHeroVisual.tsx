"use client";

/**
 * ServiceHeroVisual — animowany SVG icon + orbital particles per usługa.
 * Każda usługa ma własny "signature" wizualny w hero.
 * Wszystko CSS+SVG, zero R3F (lekkie, bez WebGL contextu, mobile-friendly).
 */

type IconKey =
  | "wordpress"
  | "woocommerce"
  | "headless"
  | "modern"
  | "year2026"
  | "nextjs"
  | "jamstack"
  | "www"
  | "react"
  | "ai"
  | "seo";

const SLUG_TO_ICON: Record<string, IconKey> = {
  "tworzenie-stron-wordpress": "wordpress",
  "sklepy-internetowe-woocommerce": "woocommerce",
  "headless-wordpress": "headless",
  "nowoczesne-strony-internetowe": "modern",
  "nowoczesna-strona-firmowa-2026": "year2026",
  "next-js-software-house": "nextjs",
  "strony-jamstack": "jamstack",
  "tworzenie-stron-www": "www",
  "aplikacje-nextjs": "nextjs",
  "aplikacje-react": "react",
  "wdrozenia-ai": "ai",
  "pozycjonowanie-seo": "seo",
};

export function ServiceHeroVisual({ slug }: { slug: string }) {
  const icon = SLUG_TO_ICON[slug] ?? "modern";

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: "300px" }}
    >
      {/* Outer plasma glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(58,142,200,0.32) 0%, rgba(232,178,134,0.10) 40%, rgba(20,19,31,0) 70%)",
          mixBlendMode: "screen",
          animation: "svhPulse 5s ease-in-out infinite",
        }}
      />

      {/* Orbital rings (3 warstwy ze różną prędkością) */}
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-100 -100 200 200"
          style={{
            animation: `svhOrbit ${30 + i * 12}s linear infinite ${
              i % 2 === 0 ? "normal" : "reverse"
            }`,
          }}
        >
          <ellipse
            cx="0"
            cy="0"
            rx={70 + i * 12}
            ry={70 + i * 12}
            fill="none"
            stroke="rgba(168, 218, 255, 0.18)"
            strokeWidth="0.4"
            strokeDasharray={i === 0 ? "2 4" : i === 1 ? "1 6" : "3 3"}
          />
          {/* Orbital dots */}
          {Array.from({ length: 6 + i * 3 }).map((_, j) => {
            const angle = (j / (6 + i * 3)) * Math.PI * 2;
            const r = 70 + i * 12;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            const isPeach = (i + j) % 3 === 0;
            return (
              <circle
                key={j}
                cx={x}
                cy={y}
                r={isPeach ? 1.6 : 1.0}
                fill={isPeach ? "#E8B286" : "#A8DAFF"}
                opacity={isPeach ? 0.95 : 0.55}
              />
            );
          })}
        </svg>
      ))}

      {/* Centralna ikona */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ width: "55%", maxWidth: "260px", aspectRatio: "1 / 1" }}
      >
        <Icon icon={icon} />
      </div>

      {/* Floating particles emanujące na zewnątrz */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-100 -100 200 200"
      >
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2 + i * 0.7;
          const r = 110 + (i % 4) * 8;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const dur = 4 + (i % 5);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 1.2 : 0.7}
              fill={i % 3 === 0 ? "#E8B286" : "#A8DAFF"}
              opacity={0.7}
              style={{
                animation: `svhFloat${i % 4} ${dur}s ease-in-out infinite ${i * 0.3}s`,
              }}
            />
          );
        })}
      </svg>

      <style jsx global>{`
        @keyframes svhPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes svhOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes svhFloat0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(8px, -10px); opacity: 1; }
        }
        @keyframes svhFloat1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(-12px, -6px); opacity: 0.9; }
        }
        @keyframes svhFloat2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.6; }
          50% { transform: translate(6px, 12px); opacity: 0.95; }
        }
        @keyframes svhFloat3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.55; }
          50% { transform: translate(-8px, 8px); opacity: 0.85; }
        }
        @keyframes svhSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes svhSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes svhPulseStrong {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}

function Icon({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "wordpress":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <circle cx="100" cy="100" r="78" fill="none" stroke="#E8B286" strokeWidth="2" opacity="0.6" />
          <g style={{ transformOrigin: "100px 100px", animation: "svhSpinSlow 40s linear infinite" }}>
            <text
              x="100"
              y="135"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="92"
              fontWeight="700"
              fill="url(#wpGrad)"
              style={{ letterSpacing: "-0.04em" }}
            >
              W
            </text>
          </g>
          <defs>
            <linearGradient id="wpGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8DAFF" />
              <stop offset="100%" stopColor="#3A8EC8" />
            </linearGradient>
          </defs>
          {/* Orbital W highlight ring */}
          <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(168,218,255,0.4)" strokeWidth="1" strokeDasharray="3 5" style={{ transformOrigin: "100px 100px", animation: "svhSpin 25s linear infinite" }} />
        </svg>
      );

    case "woocommerce":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Shopping cart silhouette */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhPulseStrong 3s ease-in-out infinite" }}>
            <path
              d="M 50 70 L 60 70 L 75 130 L 145 130 L 160 85 L 70 85"
              stroke="url(#wcGrad)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="85" cy="148" r="6" fill="#E8B286" />
            <circle cx="135" cy="148" r="6" fill="#E8B286" />
          </g>
          {/* Floating items above cart */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={75 + i * 25}
              cy={50}
              r="3"
              fill="#A8DAFF"
              style={{ animation: `svhFloat${i} ${3 + i}s ease-in-out infinite ${i * 0.5}s` }}
            />
          ))}
          <defs>
            <linearGradient id="wcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8DAFF" />
              <stop offset="100%" stopColor="#E8B286" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "headless":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Two boxes (backend + frontend) connected */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhPulseStrong 4s ease-in-out infinite" }}>
            <rect x="30" y="60" width="55" height="80" rx="4" fill="none" stroke="#3A8EC8" strokeWidth="2" />
            <text x="57" y="105" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#A8DAFF" letterSpacing="0.1em">CMS</text>
            <rect x="115" y="60" width="55" height="80" rx="4" fill="none" stroke="#E8B286" strokeWidth="2" />
            <text x="142" y="105" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#E8B286" letterSpacing="0.1em">UI</text>
            {/* Connecting line with particles */}
            <line x1="85" y1="100" x2="115" y2="100" stroke="rgba(168,218,255,0.5)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="3" fill="#E8B286" style={{ animation: "svhPulseStrong 2s ease-in-out infinite" }} />
          </g>
        </svg>
      );

    case "modern":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Wireframe layered triangles */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhSpin 30s linear infinite" }}>
            <polygon points="100,30 170,150 30,150" fill="none" stroke="#A8DAFF" strokeWidth="1.5" opacity="0.8" />
            <polygon points="100,55 150,140 50,140" fill="none" stroke="#E8B286" strokeWidth="1.5" opacity="0.6" />
            <polygon points="100,80 130,130 70,130" fill="none" stroke="#3A8EC8" strokeWidth="1.5" opacity="0.5" />
          </g>
          <circle cx="100" cy="115" r="8" fill="#A8DAFF" opacity="0.7" style={{ animation: "svhPulseStrong 2.5s ease-in-out infinite" }} />
        </svg>
      );

    case "year2026":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Year 2026 with pulsing 6 */}
          <text
            x="100"
            y="125"
            textAnchor="middle"
            fontFamily="serif"
            fontStyle="italic"
            fontSize="84"
            fontWeight="400"
            fill="#A8DAFF"
            style={{ letterSpacing: "-0.04em" }}
          >
            2026
          </text>
          <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(232,178,134,0.4)" strokeWidth="1" strokeDasharray="4 6" style={{ transformOrigin: "100px 100px", animation: "svhSpin 35s linear infinite" }} />
        </svg>
      );

    case "nextjs":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Next.js triangle (rounded, like their logo) */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhSpin 40s linear infinite" }}>
            <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(168,218,255,0.35)" strokeWidth="1" />
          </g>
          <g style={{ transformOrigin: "100px 100px" }}>
            <circle cx="100" cy="100" r="62" fill="#14131F" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="url(#nxGrad)" strokeWidth="1.5" />
            {/* N letter stylized */}
            <path
              d="M 75 70 L 75 130 M 75 70 L 125 130 M 125 100 L 125 130"
              stroke="#A8DAFF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <linearGradient id="nxGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8DAFF" />
              <stop offset="100%" stopColor="#E8B286" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "jamstack":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* 3 layered planes (J/A/M) */}
          <g style={{ animation: "svhPulseStrong 3s ease-in-out infinite" }}>
            <rect x="40" y="60" width="120" height="22" rx="2" fill="none" stroke="#A8DAFF" strokeWidth="1.5" />
            <text x="100" y="76" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#A8DAFF" letterSpacing="0.3em">J · JAVASCRIPT</text>
            <rect x="40" y="92" width="120" height="22" rx="2" fill="none" stroke="#3A8EC8" strokeWidth="1.5" />
            <text x="100" y="108" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#3A8EC8" letterSpacing="0.3em">A · APIs</text>
            <rect x="40" y="124" width="120" height="22" rx="2" fill="none" stroke="#E8B286" strokeWidth="1.5" />
            <text x="100" y="140" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#E8B286" letterSpacing="0.3em">M · MARKUP</text>
          </g>
        </svg>
      );

    case "www":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Code brackets with WWW */}
          <g style={{ animation: "svhPulseStrong 3s ease-in-out infinite" }}>
            <text x="40" y="120" fontFamily="ui-monospace, monospace" fontSize="48" fill="#E8B286">{`<`}</text>
            <text x="100" y="115" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="700" fill="#A8DAFF" letterSpacing="0.05em">WWW</text>
            <text x="160" y="120" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="48" fill="#E8B286">{`/>`}</text>
          </g>
        </svg>
      );

    case "react":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* React atom — 3 ellipses orbiting */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhSpin 18s linear infinite" }}>
            <ellipse cx="100" cy="100" rx="68" ry="26" fill="none" stroke="#A8DAFF" strokeWidth="1.5" />
            <ellipse cx="100" cy="100" rx="68" ry="26" fill="none" stroke="#A8DAFF" strokeWidth="1.5" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="68" ry="26" fill="none" stroke="#A8DAFF" strokeWidth="1.5" transform="rotate(120 100 100)" />
          </g>
          <circle cx="100" cy="100" r="8" fill="#E8B286" style={{ animation: "svhPulseStrong 2s ease-in-out infinite" }} />
        </svg>
      );

    case "ai":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Neural network nodes (3 layers) */}
          <g>
            {/* Layer 1 (input) */}
            {[60, 100, 140].map((y, i) => (
              <circle key={`l1-${i}`} cx="50" cy={y} r="5" fill="#3A8EC8" />
            ))}
            {/* Layer 2 (hidden) */}
            {[50, 90, 130, 170].map((y, i) => (
              <circle key={`l2-${i}`} cx="100" cy={y - 10} r="5" fill="#A8DAFF" />
            ))}
            {/* Layer 3 (output) */}
            {[80, 120].map((y, i) => (
              <circle key={`l3-${i}`} cx="150" cy={y} r="6" fill="#E8B286" />
            ))}
            {/* Connections layer 1 → 2 */}
            {[60, 100, 140].map((y1) =>
              [50, 90, 130, 170].map((y2) => (
                <line
                  key={`c12-${y1}-${y2}`}
                  x1="55"
                  y1={y1}
                  x2="95"
                  y2={y2 - 10}
                  stroke="rgba(168,218,255,0.18)"
                  strokeWidth="0.6"
                />
              ))
            )}
            {/* Connections layer 2 → 3 */}
            {[50, 90, 130, 170].map((y1) =>
              [80, 120].map((y2) => (
                <line
                  key={`c23-${y1}-${y2}`}
                  x1="105"
                  y1={y1 - 10}
                  x2="145"
                  y2={y2}
                  stroke="rgba(232,178,134,0.18)"
                  strokeWidth="0.6"
                />
              ))
            )}
            {/* Pulsing signal flowing */}
            <circle r="3" fill="#E8B286" style={{ animation: "svhPulseStrong 1.5s ease-in-out infinite" }}>
              <animateMotion dur="3s" repeatCount="indefinite" path="M 50 100 L 100 90 L 150 100" />
            </circle>
          </g>
        </svg>
      );

    case "seo":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          {/* Magnifier + ranking bars */}
          <g style={{ transformOrigin: "100px 100px", animation: "svhPulseStrong 3s ease-in-out infinite" }}>
            {/* Bars rising */}
            <rect x="50" y="120" width="14" height="30" fill="#3A8EC8" opacity="0.7" />
            <rect x="72" y="100" width="14" height="50" fill="#A8DAFF" opacity="0.85" />
            <rect x="94" y="80" width="14" height="70" fill="#E8B286" opacity="0.95" />
            <rect x="116" y="60" width="14" height="90" fill="#E8B286" />
            {/* Magnifying glass */}
            <circle cx="155" cy="55" r="20" fill="none" stroke="#A8DAFF" strokeWidth="2.5" />
            <line x1="170" y1="70" x2="180" y2="80" stroke="#A8DAFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}
