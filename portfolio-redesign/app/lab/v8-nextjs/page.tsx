import type { Metadata } from "next";
import { HeroZeeService } from "@/src/components/lab/v8/HeroZeeService";
import { ServiceProofZee } from "@/src/components/lab/v8/ServiceProofZee";
import { ServiceScopeZee } from "@/src/components/lab/v8/ServiceScopeZee";
import { PerfBenchmarkZee } from "@/src/components/lab/v8/PerfBenchmarkZee";
import { ProcessZee } from "@/src/components/lab/v8/ProcessZee";
import { ClosingCTA } from "@/src/components/lab/v8/ClosingCTA";

export const metadata: Metadata = {
  title: "LAB · V8 Service (zeeframes inspired) - Strony w Next.js",
  robots: { index: false, follow: false },
};

export default function V8NextjsPage() {
  return (
    <div className="min-h-screen bg-[#1E1D1E] font-sans text-fg">
      <HeroZeeService />
      <ServiceProofZee />
      <ServiceScopeZee />
      <PerfBenchmarkZee />
      <ProcessZee />
      <ClosingCTA />
    </div>
  );
}
