import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { HeroWpA } from "@/components/lab/HeroWpA";
import { HeroWpB } from "@/components/lab/HeroWpB";
import { HeroWpC } from "@/components/lab/HeroWpC";

const WARIANTY = {
  a: { name: "Horyzont", desc: "planeta za nagłówkiem, trzy warstwy głębi, błysk na wejściu" },
  b: { name: "Sygnatura", desc: "typografia niesie hero, kula wielkości litery w zdaniu, licznik odlicza" },
  c: { name: "Blueprint", desc: "szkic strony rysuje się i wypełnia, kursor edytuje nagłówek bez kodu" },
} as const;
type Klucz = keyof typeof WARIANTY;

export const metadata = {
  title: "Lab: hero usługi WordPress",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(WARIANTY).map((wariant) => ({ wariant }));
}

export default async function LabHeroWp({ params }: { params: Promise<{ wariant: string }> }) {
  const { wariant } = await params;
  if (!(wariant in WARIANTY)) notFound();
  const k = wariant as Klucz;
  const s = services.find((x) => x.slug === "tworzenie-stron-wordpress")!;
  const idx = services.indexOf(s);
  const props = { s, idx, total: services.length };

  return (
    <div className="relative">
      {k === "a" && <HeroWpA {...props} />}
      {k === "b" && <HeroWpB {...props} />}
      {k === "c" && <HeroWpC {...props} />}

      {/* Kawałek dalszej treści, żeby sprawdzić zachowanie przy przewijaniu */}
      <section className="border-t border-line px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <aside className="md:col-span-3"><p className="eyebrow">01 · Wstęp</p></aside>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-ink">
            {s.intro.map((p, i) => <p key={i}>{p.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}</p>)}
          </div>
        </div>
      </section>

      {/* Przełącznik wariantów: tylko w labie */}
      <nav aria-label="Warianty hero" className="fixed left-1/2 bottom-5 z-[80] -translate-x-1/2 flex items-center gap-1 rounded-full border border-line bg-bg/85 p-1 backdrop-blur-md">
        {(Object.keys(WARIANTY) as Klucz[]).map((key) => (
          <Link key={key} href={`/lab/hero-wp/${key}`} className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${key === k ? "bg-peach text-bg" : "text-ink-mute hover:text-ink"}`}>
            {key.toUpperCase()} · {WARIANTY[key].name}
          </Link>
        ))}
      </nav>
      <p className="px-6 pb-24 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:px-10">
        /lab/hero-wp/{k}: {WARIANTY[k].desc}
      </p>
    </div>
  );
}
