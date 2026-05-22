"use client";

/**
 * ServiceHeroVisual — animowany visual w hero każdej usługi.
 * Używa OFICJALNYCH paths z simple-icons (3000+ brand SVG, MIT license)
 * zamiast ręcznie odtworzonych. Każda ikona w 24x24 viewBox.
 *
 * Wokół: outer plasma glow + 3 orbital rings + 14 floating particles
 * (CSS+SVG, zero R3F, mobile-friendly).
 */

import {
  siWordpress,
  siWoocommerce,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siJavascript,
  siGraphql,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

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
};

export function ServiceHeroVisual({ slug }: { slug: string }) {
  const icon = SLUG_TO_ICON[slug] ?? "modern";

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: "300px" }}
    >
      {/* Outer plasma glow — pierścień (poza ikoną w środku), żeby logo nie zlewało się z tłem */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(20,19,31,0) 0%, rgba(58,142,200,0.22) 35%, rgba(232,178,134,0.08) 55%, rgba(20,19,31,0) 75%)",
          mixBlendMode: "screen",
          animation: "svhPulse 8s ease-in-out infinite",
        }}
      />

      {/* Orbital rings (eleganckie, wolne) */}
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-100 -100 200 200"
          style={{
            animation: `svhOrbit ${80 + i * 30}s linear infinite ${
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
          {Array.from({ length: 6 + i * 3 }).map((_, j) => {
            const angle = (j / (6 + i * 3)) * Math.PI * 2;
            const r = 70 + i * 12;
            const x = (Math.cos(angle) * r).toFixed(3);
            const y = (Math.sin(angle) * r).toFixed(3);
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

      {/* Floating particles */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-100 -100 200 200"
      >
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2 + i * 0.7;
          const r = 110 + (i % 4) * 8;
          const x = (Math.cos(angle) * r).toFixed(3);
          const y = (Math.sin(angle) * r).toFixed(3);
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

/* === Reusable: official brand icon z simple-icons === */
function BrandIcon({
  icon,
  rotateSlow = false,
  pulseDur = "5s",
}: {
  icon: SimpleIcon;
  rotateSlow?: boolean;
  pulseDur?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      aria-hidden
      style={{
        transformOrigin: "center",
        animation: rotateSlow
          ? `svhSpin 120s linear infinite, svhPulseStrong ${pulseDur} ease-in-out infinite`
          : `svhPulseStrong ${pulseDur} ease-in-out infinite`,
        filter: "drop-shadow(0 0 18px rgba(232,178,134,0.45))",
      }}
    >
      <path d={icon.path} fill="#F5E9D8" />
    </svg>
  );
}

function Wordmark({ text }: { text: string }) {
  return (
    <text
      x="100"
      y="195"
      textAnchor="middle"
      fontFamily="ui-monospace, monospace"
      fontSize="11"
      fill="#A8DAFF"
      letterSpacing="0.32em"
      opacity="0.85"
    >
      {text}
    </text>
  );
}

function Icon({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "wordpress":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <BrandIcon icon={siWordpress} pulseDur="5s" rotateSlow />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="WORDPRESS" />
          </svg>
        </div>
      );

    case "woocommerce":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <BrandIcon icon={siWoocommerce} pulseDur="6s" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="WOOCOMMERCE" />
          </svg>
        </div>
      );

    case "nextjs":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <BrandIcon icon={siNextdotjs} pulseDur="5s" rotateSlow />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="NEXT.JS" />
          </svg>
        </div>
      );

    case "react":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div style={{ animation: "svhSpin 50s linear infinite", width: "100%", height: "100%" }}>
            <BrandIcon icon={siReact} pulseDur="6s" />
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="REACT" />
          </svg>
        </div>
      );

    case "headless":
      // WordPress (CMS) + Next.js (frontend) split, łącznik particle
      return (
        <div className="relative w-full h-full">
          <div className="absolute" style={{ top: "20%", left: "5%", width: "40%", height: "60%", animation: "svhPulseStrong 5s ease-in-out infinite" }}>
            <BrandIcon icon={siWordpress} pulseDur="100s" />
          </div>
          <div className="absolute" style={{ top: "20%", right: "5%", width: "40%", height: "60%", animation: "svhPulseStrong 5s ease-in-out infinite 2.5s" }}>
            <BrandIcon icon={siNextdotjs} pulseDur="100s" />
          </div>
          {/* Center connector */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <line x1="80" y1="100" x2="120" y2="100" stroke="rgba(232,178,134,0.5)" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="100" cy="100" r="4" fill="#E8B286" style={{ animation: "svhPulseStrong 3s ease-in-out infinite" }} />
            <text x="60" y="160" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#A8DAFF" letterSpacing="0.2em" opacity="0.85">CMS</text>
            <text x="140" y="160" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#E8B286" letterSpacing="0.2em" opacity="0.85">UI</text>
            <Wordmark text="HEADLESS WP" />
          </svg>
        </div>
      );

    case "jamstack":
      // 3 brand logos stacked: JS + GraphQL + Markdown indicator
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <g style={{ animation: "svhPulseStrong 5s ease-in-out infinite" }}>
            {/* Layer 1: J = JavaScript */}
            <g transform="translate(40 50) scale(2.0)">
              <path d={siJavascript.path} fill="#F5E9D8" opacity="0.9" />
            </g>
            <text x="105" y="68" fontFamily="ui-monospace, monospace" fontSize="10" fill="#A8DAFF" letterSpacing="0.25em">J · JAVASCRIPT</text>
            {/* Layer 2: A = APIs (GraphQL) */}
            <g transform="translate(40 90) scale(2.0)">
              <path d={siGraphql.path} fill="#F5E9D8" opacity="0.9" />
            </g>
            <text x="105" y="108" fontFamily="ui-monospace, monospace" fontSize="10" fill="#3A8EC8" letterSpacing="0.25em">A · APIs</text>
            {/* Layer 3: M = Markup (Vercel triangle as proxy) */}
            <g transform="translate(40 130) scale(2.0)">
              <path d={siVercel.path} fill="#F5E9D8" opacity="0.9" />
            </g>
            <text x="105" y="148" fontFamily="ui-monospace, monospace" fontSize="10" fill="#E8B286" letterSpacing="0.25em">M · MARKUP</text>
          </g>
          <Wordmark text="JAMSTACK" />
        </svg>
      );

    case "modern":
      return (
        <div className="relative w-full h-full">
          <div style={{ width: "100%", height: "100%", animation: "svhSpin 80s linear infinite" }}>
            <BrandIcon icon={siVercel} pulseDur="100s" />
          </div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="VERCEL · EDGE · 2026" />
          </svg>
        </div>
      );

    case "year2026":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <text
            x="100"
            y="125"
            textAnchor="middle"
            fontFamily="serif"
            fontStyle="italic"
            fontSize="84"
            fontWeight="400"
            fill="#F5E9D8"
            style={{ letterSpacing: "-0.04em" }}
          >
            2026
          </text>
          <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(232,178,134,0.4)" strokeWidth="1" strokeDasharray="4 6" style={{ transformOrigin: "100px 100px", animation: "svhSpin 100s linear infinite" }} />
          <Wordmark text="STRONA FIRMOWA 2026" />
        </svg>
      );

    case "www":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <g style={{ animation: "svhPulseStrong 5s ease-in-out infinite" }}>
            <text x="40" y="120" fontFamily="ui-monospace, monospace" fontSize="48" fill="#E8B286">{`<`}</text>
            <text x="100" y="115" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="700" fill="#A8DAFF" letterSpacing="0.05em">WWW</text>
            <text x="160" y="120" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="48" fill="#E8B286">{`/>`}</text>
          </g>
          <Wordmark text="STRONY WWW" />
        </svg>
      );

    case "ai":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <g>
            {[60, 100, 140].map((y, i) => (
              <circle key={`l1-${i}`} cx="50" cy={y} r="5" fill="#3A8EC8" />
            ))}
            {[50, 90, 130, 170].map((y, i) => (
              <circle key={`l2-${i}`} cx="100" cy={y - 10} r="5" fill="#A8DAFF" />
            ))}
            {[80, 120].map((y, i) => (
              <circle key={`l3-${i}`} cx="150" cy={y} r="6" fill="#E8B286" />
            ))}
            {[60, 100, 140].map((y1) =>
              [50, 90, 130, 170].map((y2) => (
                <line key={`c12-${y1}-${y2}`} x1="55" y1={y1} x2="95" y2={y2 - 10} stroke="rgba(168,218,255,0.18)" strokeWidth="0.6" />
              ))
            )}
            {[50, 90, 130, 170].map((y1) =>
              [80, 120].map((y2) => (
                <line key={`c23-${y1}-${y2}`} x1="105" y1={y1 - 10} x2="145" y2={y2} stroke="rgba(232,178,134,0.18)" strokeWidth="0.6" />
              ))
            )}
            <circle r="3" fill="#E8B286" style={{ animation: "svhPulseStrong 3s ease-in-out infinite" }}>
              <animateMotion dur="6s" repeatCount="indefinite" path="M 50 100 L 100 90 L 150 100" />
            </circle>
          </g>
          <Wordmark text="AI · NEURAL NET" />
        </svg>
      );

    case "seo":
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <g style={{ transformOrigin: "100px 100px", animation: "svhPulseStrong 5s ease-in-out infinite" }}>
            <rect x="50" y="120" width="14" height="30" fill="#3A8EC8" opacity="0.7" />
            <rect x="72" y="100" width="14" height="50" fill="#A8DAFF" opacity="0.85" />
            <rect x="94" y="80" width="14" height="70" fill="#E8B286" opacity="0.95" />
            <rect x="116" y="60" width="14" height="90" fill="#E8B286" />
            <circle cx="155" cy="55" r="20" fill="none" stroke="#A8DAFF" strokeWidth="2.5" />
            <line x1="170" y1="70" x2="180" y2="80" stroke="#A8DAFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <Wordmark text="SEO · POZYCJONOWANIE" />
        </svg>
      );

    default:
      return null;
  }
}
