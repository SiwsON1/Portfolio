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
        @keyframes svhNextOrbit {
          0%   { transform: rotate(0deg) rotateX(8deg) translateZ(0); }
          25%  { transform: rotate(90deg) rotateX(-6deg) translateZ(0); }
          50%  { transform: rotate(180deg) rotateX(8deg) translateZ(0); }
          75%  { transform: rotate(270deg) rotateX(-6deg) translateZ(0); }
          100% { transform: rotate(360deg) rotateX(8deg) translateZ(0); }
        }
        @keyframes svhNextShine {
          0% { transform: translateX(-12px); opacity: 0; }
          20% { opacity: 1; }
          70% { transform: translateX(20px); opacity: 1; }
          100% { transform: translateX(20px); opacity: 0; }
        }
        @keyframes svhWpEmit0 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(64px, -54px) scale(0.4); opacity: 0; }
        }
        @keyframes svhWpEmit1 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-72px, -36px) scale(0.4); opacity: 0; }
        }
        @keyframes svhWpEmit2 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(58px, 62px) scale(0.4); opacity: 0; }
        }
        @keyframes svhWpEmit3 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-54px, 68px) scale(0.4); opacity: 0; }
        }
        @keyframes svhWpEmit4 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(8px, -82px) scale(0.4); opacity: 0; }
        }
        @keyframes svhWpEmit5 {
          0%   { transform: translate(0, 0) scale(1.4); opacity: 0; }
          18%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(80px, 12px) scale(0.4); opacity: 0; }
        }
        .svh-nextjs-ring {
          animation: svhSpin 32s linear infinite;
        }
        .svh-wp-ring {
          animation: svhSpin 24s linear infinite reverse;
        }
        .svh-nextjs-3d-stage {
          animation: svhNextOrbit 8s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .svh-nextjs-shine {
          animation: svhNextShine 6s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .svh-anim {
            animation: none !important;
          }
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
  spinDur = "120s",
  glow = "drop-shadow(0 0 18px rgba(232,178,134,0.45))",
}: {
  icon: SimpleIcon;
  rotateSlow?: boolean;
  pulseDur?: string;
  spinDur?: string;
  glow?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full svh-anim"
      aria-hidden
      style={{
        transformOrigin: "center",
        animation: rotateSlow
          ? `svhSpin ${spinDur} linear infinite, svhPulseStrong ${pulseDur} ease-in-out infinite`
          : `svhPulseStrong ${pulseDur} ease-in-out infinite`,
        filter: glow,
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
          {/* Outer dashed peach ring — counter-rotating dla widoczności obrotu */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none svh-anim svh-wp-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="rgba(232,178,134,0.20)"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          </svg>
          <BrandIcon
            icon={siWordpress}
            pulseDur="3.5s"
            rotateSlow
            spinDur="6s"
            glow="drop-shadow(0 0 28px rgba(232,178,134,0.65))"
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            {[
              { key: "0", className: "svhWpEmit0", fill: "#E8B286", delay: "0s", dur: "2.2s", r: 6.5 },
              { key: "1", className: "svhWpEmit1", fill: "#A8DAFF", delay: "0.22s", dur: "2.4s", r: 5.5 },
              { key: "2", className: "svhWpEmit2", fill: "#F5E9D8", delay: "0.44s", dur: "2.3s", r: 6.0 },
              { key: "3", className: "svhWpEmit3", fill: "#E8B286", delay: "0.66s", dur: "2.5s", r: 5.8 },
              { key: "4", className: "svhWpEmit4", fill: "#A8DAFF", delay: "0.88s", dur: "2.2s", r: 7.0 },
              { key: "5", className: "svhWpEmit5", fill: "#E8B286", delay: "1.10s", dur: "2.4s", r: 6.2 },
              { key: "6", className: "svhWpEmit0", fill: "#F5E9D8", delay: "1.32s", dur: "2.3s", r: 6.4 },
              { key: "7", className: "svhWpEmit2", fill: "#A8DAFF", delay: "1.54s", dur: "2.5s", r: 5.6 },
              { key: "8", className: "svhWpEmit4", fill: "#E8B286", delay: "1.76s", dur: "2.2s", r: 7.2 },
              { key: "9", className: "svhWpEmit1", fill: "#F5E9D8", delay: "1.98s", dur: "2.4s", r: 5.8 },
            ].map((particle) => (
              <circle
                key={particle.key + particle.delay}
                className="svh-anim"
                cx="100"
                cy="100"
                r={particle.r}
                fill={particle.fill}
                opacity="0"
                style={{
                  filter: "blur(1.2px) drop-shadow(0 0 4px rgba(232,178,134,0.6))",
                  animation: `${particle.className} ${particle.dur} cubic-bezier(0.22, 1, 0.36, 1) infinite ${particle.delay}`,
                }}
              />
            ))}
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
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none svh-anim svh-nextjs-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="rgba(232,178,134,0.20)"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          </svg>

          <div
            className="absolute inset-[18%] flex items-center justify-center"
            style={{ perspective: "900px" }}
          >
            <div
              className="relative h-full w-full svh-anim svh-nextjs-3d-stage"
              style={{
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 0 24px rgba(232,178,134,0.55))",
              }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 24 24"
                aria-hidden
                shapeRendering="geometricPrecision"
              >
                <path d={siNextdotjs.path} fill="#F5E9D8" />
              </svg>

              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 24 24"
                aria-hidden
                style={{ mixBlendMode: "screen" }}
              >
                <defs>
                  <linearGradient id="svhNextShineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <clipPath id="svhNextShineClip">
                    <path d={siNextdotjs.path} />
                  </clipPath>
                </defs>
                <g clipPath="url(#svhNextShineClip)">
                  <rect
                    className="svh-anim svh-nextjs-shine"
                    x="-12"
                    y="0"
                    width="9"
                    height="24"
                    fill="url(#svhNextShineGrad)"
                  />
                </g>
              </svg>
            </div>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" aria-hidden>
            <Wordmark text="NEXT.JS" />
          </svg>
        </div>
      );

    case "react":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer counter-rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none svh-anim svh-wp-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="rgba(168,218,255,0.22)"
              strokeWidth="1"
              strokeDasharray="3 8"
            />
          </svg>
          <div style={{ animation: "svhSpin 10s linear infinite", width: "100%", height: "100%" }}>
            <BrandIcon icon={siReact} pulseDur="4s" glow="drop-shadow(0 0 24px rgba(168,218,255,0.55))" />
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
          {/* Outer counter-rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none svh-anim svh-wp-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="84"
              fill="none"
              stroke="rgba(232,178,134,0.20)"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          </svg>
          <div style={{ width: "100%", height: "100%", animation: "svhSpin 14s linear infinite" }}>
            <BrandIcon icon={siVercel} pulseDur="5s" glow="drop-shadow(0 0 24px rgba(232,178,134,0.55))" />
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
