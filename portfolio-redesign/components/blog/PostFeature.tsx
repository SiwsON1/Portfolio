import type { PostHero } from "@/lib/posts";

type Kind = PostHero["kind"];

const LABEL: Record<Kind, string> = {
  performance: "Core Web Vitals",
  wordpress: "Panel WordPressa",
  nextjs: "Next.js",
  ai: "Asystent AI",
  seo: "Wynik w Google",
};

/**
 * Ilustracja wpisu w miejscu zdjęcia wyróżniającego: mała scenka tematu w pętli, czysty CSS
 * (bez JS i bez obrazków). Na komputerze obok leadu, na telefonie między tytułem a leadem.
 */
export function PostFeature({ kind }: { kind: Kind }) {
  return (
    <figure className="pf relative overflow-hidden rounded-[18px] border border-line bg-bg-elev" aria-hidden>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">{LABEL[kind]}</span>
        <span className="pf-live flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          <i /> na żywo
        </span>
      </div>
      <div className="relative aspect-[4/3] px-5 py-5">
        {kind === "performance" && <Vitals />}
        {kind === "wordpress" && <Panel />}
        {kind === "nextjs" && <Build />}
        {kind === "ai" && <Chat />}
        {kind === "seo" && <Serp />}
      </div>
    </figure>
  );
}

function Vitals() {
  const items: [string, string, string, number][] = [
    ["LCP", "2,1 s", "4,8 s", 0],
    ["INP", "140 ms", "420 ms", 1],
    ["CLS", "0,04", "0,31", 2],
  ];
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="grid grid-cols-3 gap-3">
        {items.map(([name, good, bad, i]) => (
          <div key={name} className="flex flex-col items-center">
            <svg viewBox="0 0 64 64" className="w-full max-w-[86px]">
              <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-line)" strokeWidth="5" />
              <circle cx="32" cy="32" r="26" fill="none" strokeWidth="5" strokeLinecap="round" className="pf-gauge" pathLength={100} style={{ animationDelay: `${i * 0.35}s` }} transform="rotate(-90 32 32)" />
            </svg>
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{name}</span>
            <span className="pf-swap relative mt-1 h-5 w-full text-center font-display text-ink" style={{ fontSize: "1.05rem", animationDelay: `${i * 0.35}s` }}>
              <b className="pf-bad">{bad}</b>
              <b className="pf-good">{good}</b>
            </span>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
          <span>Ładowanie strony</span>
          <span className="pf-done text-peach">gotowe</span>
        </div>
        <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-line">
          <span className="pf-load block h-full rounded-full bg-peach" />
        </div>
      </div>
    </div>
  );
}

function Panel() {
  return (
    <div className="flex h-full gap-3">
      <div className="flex w-[18%] flex-col gap-2 rounded-md bg-bg/60 p-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-2 rounded-full ${i === 1 ? "bg-peach/70" : "bg-line"}`} />
        ))}
      </div>
      <div className="relative flex flex-1 flex-col gap-2">
        <span className="h-3 w-2/3 rounded-full bg-ink/80" />
        {["Nagłówek sekcji", "Akapit", "Zdjęcie", "Przycisk"].map((b, i) => (
          <div key={b} className="pf-block flex items-center justify-between rounded-md border border-line bg-bg/50 px-2.5 py-2" style={{ animationDelay: `${0.5 + i * 0.55}s` }}>
            <span className="text-[11px] text-ink-mute">{b}</span>
            <span className="h-1.5 w-8 rounded-full bg-line" />
          </div>
        ))}
        <div className="mt-auto flex items-center justify-between">
          <span className="pf-saved font-mono text-[10px] uppercase tracking-[0.16em] text-peach">Opublikowano</span>
          <span className="pf-btn rounded-md bg-peach px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bg">Opublikuj</span>
        </div>
      </div>
    </div>
  );
}

function Build() {
  const code = ["export default async function Page() {", "  const data = await getData();", "  return <Hero {...data} />;", "}"];
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-3">
      <div className="rounded-md bg-bg/60 p-2.5 font-mono text-[10.5px] leading-[1.7] text-ink-mute">
        {code.map((l, i) => (
          <div key={i} className="pf-type overflow-hidden whitespace-pre" style={{ "--w": `${l.length}ch`, animationDelay: `${0.3 + i * 0.55}s` } as React.CSSProperties}>
            {l}
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-md border border-line bg-bg/40 p-2.5">
        <span className="pf-skel block h-3 w-1/2 rounded-full bg-ink/70" style={{ animationDelay: "2.6s" }} />
        <span className="pf-skel mt-2 block h-2 w-5/6 rounded-full bg-line" style={{ animationDelay: "2.8s" }} />
        <span className="pf-skel mt-1.5 block h-2 w-2/3 rounded-full bg-line" style={{ animationDelay: "3s" }} />
        <span className="pf-skel mt-3 inline-block h-5 w-20 rounded bg-peach/80" style={{ animationDelay: "3.2s" }} />
        <span className="pf-done absolute bottom-2 right-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-peach">build ✓</span>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="pf-block ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-peach/15 px-3 py-2 text-[11.5px] text-ink" style={{ animationDelay: "0.3s" }}>
        Ile zamówień wróciło w tym miesiącu?
      </div>
      <div className="pf-dots flex gap-1 px-1"><i /><i /><i /></div>
      <div className="pf-block max-w-[86%] rounded-xl rounded-bl-sm border border-line bg-bg/60 px-3 py-2" style={{ animationDelay: "1.9s" }}>
        <span className="block h-2 w-11/12 rounded-full bg-ink/60" />
        <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-ink/40" />
        <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-ink/40" />
      </div>
      <div className="pf-block mt-auto flex gap-1.5" style={{ animationDelay: "2.6s" }}>
        {["źródło: sklep", "raport"].map((s) => (
          <span key={s} className="rounded-full border border-line px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-faint">{s}</span>
        ))}
      </div>
    </div>
  );
}

function Serp() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full border border-ink-faint" />
        <span className="pf-type overflow-hidden whitespace-pre text-[11px] text-ink-mute" style={{ "--w": "19ch", animationDelay: "0.3s" } as React.CSSProperties}>jak przyspieszyć stronę</span>
      </div>
      <div className="pf-block rounded-md border border-peach/40 bg-peach/[0.06] px-3 py-2" style={{ animationDelay: "1.4s" }}>
        <span className="block h-2.5 w-2/3 rounded-full bg-overcast/80" />
        <span className="mt-1.5 block h-2 w-11/12 rounded-full bg-ink/35" />
        <div className="pf-faq mt-2 space-y-1">
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center justify-between border-t border-line pt-1">
              <span className="h-1.5 w-1/2 rounded-full bg-ink/40" />
              <span className="text-[9px] text-ink-faint">⌄</span>
            </span>
          ))}
        </div>
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="pf-block rounded-md px-3 py-1.5" style={{ animationDelay: `${1.7 + i * 0.2}s` }}>
          <span className="block h-2 w-1/2 rounded-full bg-overcast/40" />
          <span className="mt-1.5 block h-1.5 w-5/6 rounded-full bg-ink/20" />
        </div>
      ))}
    </div>
  );
}
