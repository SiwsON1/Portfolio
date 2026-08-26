import { TechStackFable } from "@/components/home/TechStackFable";

export const metadata = {
  title: "Lab · TechStack Fable",
  robots: { index: false, follow: false },
};

export default function LabTechStackFable() {
  return (
    <main className="pt-28 md:pt-36">
      <p className="px-6 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:px-10">
        /lab/techstack-fable · kandydat sekcji Stack (Z czym pracuję)
      </p>
      <TechStackFable />
    </main>
  );
}
