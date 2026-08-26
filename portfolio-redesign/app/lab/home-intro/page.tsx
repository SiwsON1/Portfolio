import { IntroValue } from "@/components/home/IntroValue";

export const metadata = {
  title: "Lab — Intro section",
  robots: { index: false, follow: false },
};

export default function LabHomeIntro() {
  return (
    <main className="pt-28 md:pt-36">
      <p className="px-6 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:px-10">
        /lab/home-intro — kandydat sekcji A (Intro / wartość)
      </p>
      <IntroValue />
    </main>
  );
}
