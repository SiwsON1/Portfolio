import { siFigma, siJamstack, siNextdotjs, siReact, siWoocommerce, siWordpress } from "simple-icons";

/** Glify 24 × 24: marki z simple-icons, reszta własne ścieżki w tej samej siatce. */
export const GLYPH = {
  wordpress: siWordpress.path,
  woocommerce: siWoocommerce.path,
  nextjs: siNextdotjs.path,
  react: siReact.path,
  jamstack: siJamstack.path,
  figma: siFigma.path,
  // własne
  link: "M10.6 13.4a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1.2 1.2M13.4 10.6a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1.2-1.2",
  shield: "M12 2.5 4.5 5.5v6c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10v-6L12 2.5Zm-3 9.7 2.2 2.2 4-4.2",
  gauge: "M4 16.5a8.5 8.5 0 1 1 16 0M12 16.5 15.6 9.4M12 16.5h.01",
  sparkle: "M12 3v4M12 17v4M3 12h4M17 12h4M12 8.5 13.6 12 12 15.5 10.4 12 12 8.5ZM5.5 5.5l1.5 1.5M17 17l1.5 1.5M18.5 5.5 17 7M7 17l-1.5 1.5",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c-2.8 0-4.5-4-4.5-9S9.2 3 12 3s4.5 4 4.5 9-1.7 9-4.5 9ZM3 12h18",
  store: "M4 9.5 5.3 4h13.4L20 9.5M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12v8h13v-8M10 20v-5h4v5",
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  code: "M8 7 3 12l5 5M16 7l5 5-5 5M13.5 5l-3 14",
} as const;
export type GlyphKey = keyof typeof GLYPH;

const BRAND: GlyphKey[] = ["wordpress", "woocommerce", "nextjs", "react", "jamstack", "figma"];

/** Wypełniony glif (marki) albo kreska (własne) w kolorze currentColor. */
export function Glyph({ name, className = "", style }: { name: GlyphKey; className?: string; style?: React.CSSProperties }) {
  const brand = BRAND.includes(name);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      <path d={GLYPH[name]} fill={brand ? "currentColor" : "none"} stroke={brand ? "none" : "currentColor"} strokeWidth={brand ? 0 : 1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Kontur za planszą: zawsze obrys, cienka kreska, powolny obrót (CSS .hwC-wm-svg); znaki słowne bez obrotu, lekko przekrzywione. */
export function Watermark({ name, spin = true }: { name: GlyphKey; spin?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`hwC-wm-svg h-full w-full ${spin ? "" : "bp-wm-still"}`} aria-hidden>
      <path d={GLYPH[name]} />
    </svg>
  );
}
