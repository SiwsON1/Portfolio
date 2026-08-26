import Link from "next/link";

const services = [
  {
    title: "Strony w Next.js",
    body: "Szybkie serwisy i aplikacje na App Router, RSC, CMS i edge deploy.",
    href: "/nowoczesne-strony-internetowe",
  },
  {
    title: "SEO + GEO/LLMO",
    body: "Widoczność w Google, AI search i strukturze treści, która odpowiada na intencje.",
    href: "/pozycjonowanie-stron-internetowych",
  },
  {
    title: "Reklama Google Ads",
    body: "Kampanie search, performance i landing pages mierzone pod koszt leada.",
    href: "/prowadzenie-kampanii-google-ads",
  },
  {
    title: "Reklama Social Media",
    body: "Meta, kreacje, lejki i remarketing dla marek, które chcą rosnąć systemowo.",
    href: "/reklama-w-social-media",
  },
  {
    title: "E-commerce",
    body: "Sklepy, katalogi i ścieżki zakupowe zoptymalizowane pod konwersję.",
    href: "/ecommerce",
  },
  {
    title: "Wideo · animacje",
    body: "Motion, krótkie formaty, animowane moduły i materiały do kampanii.",
    href: "#video",
  },
];

export function ServicesZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Robimy
            </p>
            <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.025em]">
              Sześć dróg do <span className="font-display italic font-light text-accent">wzrostu.</span>
            </h2>
          </div>
          <p className="max-w-md text-fg-muted">
            Każda karta to osobny tor pracy, ale najlepszy efekt daje połączenie strony,
            kampanii i treści w jednym procesie.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl border border-border-strong/60 bg-bg-elev p-7 transition duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_24px_80px_rgba(255,232,31,0.12)]"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at ${18 + index * 9}% ${16 + index * 6}%, rgba(255,232,31,0.13), transparent 34%), radial-gradient(circle at 88% 76%, rgba(255,255,255,0.06), transparent 32%)`,
                }}
              />
              <div className="relative flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-[#1E1D1E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,232,31,0.8)]" />
              </div>
              <div className="relative mt-auto">
                <h3 className="font-sans text-2xl font-black leading-tight tracking-[-0.015em] text-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">{item.body}</p>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Zobacz →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
