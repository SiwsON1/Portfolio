import type { Metadata } from "next";
import { PortfolioCube } from "@/components/home/PortfolioCube";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Pełna lista projektów: strony www, aplikacje Next.js i React, eksperymenty. Ponad 30 wdrożeń komercyjnych dla firm w Polsce i Niemczech.",
  alternates: { canonical: "/projekty" },
};

export default function ProjektyPage() {
  return (
    <article className="relative">
      <h1 className="sr-only">
        Projekty: strony www, aplikacje Next.js i React, eksperymenty
      </h1>
      <p className="sr-only">
        Komercyjne wdrożenia oraz projekty laboratoryjne z okresu nauki.
      </p>
      <PortfolioCube />
    </article>
  );
}
