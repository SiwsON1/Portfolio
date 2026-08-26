import type { Metadata } from "next";
import { HeroZee } from "@/src/components/lab/v8/HeroZee";
import { ClientMarquee } from "@/src/components/lab/v8/ClientMarquee";
import { ServicesZee } from "@/src/components/lab/v8/ServicesZee";
import { PortfolioZee } from "@/src/components/lab/v8/PortfolioZee";
import { ProcessZee } from "@/src/components/lab/v8/ProcessZee";
import { TrustByNumbers } from "@/src/components/lab/v8/TrustByNumbers";
import { FaqZee } from "@/src/components/lab/v8/FaqZee";
import { ClosingCTA } from "@/src/components/lab/v8/ClosingCTA";

export const metadata: Metadata = {
  title: "LAB · V8 Home (zeeframes inspired)",
  robots: { index: false, follow: false },
};

export default function V8HomePage() {
  return (
    <div className="min-h-screen bg-[#1E1D1E] font-sans text-fg">
      <HeroZee />
      <ClientMarquee />
      <ServicesZee />
      <PortfolioZee />
      <ProcessZee />
      <TrustByNumbers />
      <FaqZee />
      <ClosingCTA />
    </div>
  );
}
