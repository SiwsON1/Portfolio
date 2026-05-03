import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notatki z pracy: ceny stron www, decyzje technologiczne Next.js vs WordPress, pozycjonowanie SEO, wdrożenia AI, Core Web Vitals.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <article className="relative">
      <header className="relative px-6 pt-40 pb-24 md:px-10 md:pt-56 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />
        <div className="relative flex items-center justify-between mb-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <span>Notatki · {posts.length} postów</span>
          <span>est. 2026</span>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <h1 className="display text-display text-ink">
              Blog <em>Marcin</em> Siwonia.
            </h1>
            <p
              className="mt-10 max-w-2xl text-ink-mute"
              style={{ fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)", lineHeight: 1.55 }}
            >
              Notatki z pracy. Ceny, decyzje technologiczne, pozycjonowanie,
              AI, performance. Bez wody.
            </p>
          </div>
        </div>
      </header>

      <ol className="border-t border-line px-6 md:px-10">
        {sorted.map((p, i) => (
          <li key={p.slug} className="border-b border-line group">
            <Link
              href={`/blog/${p.slug}`}
              className="block py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-6 items-baseline relative overflow-hidden"
              data-cursor="OTWÓRZ"
            >
              <span
                aria-hidden
                className="absolute inset-0 -mx-6 md:-mx-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(232,178,134,0.05) 0%, rgba(232,178,134,0) 70%)",
                }}
              />
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint relative">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-7 relative">
                <h2
                  className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {p.title}
                </h2>
                <p className="text-ink-mute text-sm mt-2 max-w-2xl">{p.excerpt}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="border border-line px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 text-right relative font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint space-y-1">
                <p>{new Date(p.date).toLocaleDateString("pl-PL", { dateStyle: "medium" })}</p>
                <p>{p.readingMinutes} min czytania</p>
              </div>
              <span className="col-span-12 md:col-span-1 text-right relative font-mono text-base text-ink-mute group-hover:text-peach group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
