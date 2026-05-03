import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab — wersje hero",
  robots: { index: false, follow: false },
};

const variants = [
  { v: "v1", name: "Atmosfera", desc: "portret + plasma" },
  { v: "v1b", name: "Wireframe", desc: "rotujący wireframe + orbity" },
  { v: "v1c", name: "Code rain", desc: "Matrix-style keywords" },
  { v: "v1d", name: "Nebula", desc: "particle cloud" },
  { v: "v2", name: "Manifest", desc: "type-led" },
  { v: "v3", name: "Scene", desc: "3D WebGL" },
  { v: "v4", name: "Split", desc: "cinema split" },
  { v: "v5", name: "Marquee Wall", desc: "brutalist editorial" },
];

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg text-ink min-h-screen relative">
      {/* Lab top bar */}
      <header className="fixed top-0 inset-x-0 z-[80] mix-blend-difference">
        <nav className="px-6 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink">
          <Link href="/" className="hover:text-peach transition-colors">
            ← Strona główna
          </Link>
          <span className="text-ink-mute hidden md:inline">Lab · wersje hero</span>
          <Link href="/lab" className="hover:text-peach transition-colors">
            Index
          </Link>
        </nav>
      </header>

      {/* Variant switcher pinned to bottom right */}
      <nav className="fixed bottom-6 right-6 md:bottom-8 md:right-10 z-[80] flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em] mix-blend-difference">
        <span className="text-ink-mute mb-1">→ przełącz</span>
        {variants.map((v) => (
          <Link
            key={v.v}
            href={`/lab/${v.v}`}
            className="text-ink hover:text-peach transition-colors flex items-center gap-2"
          >
            <span className="text-ink-faint">{v.v.toUpperCase()}</span>
            <span>{v.name}</span>
          </Link>
        ))}
      </nav>

      {children}
    </div>
  );
}
