import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { ServicesIndexList } from "@/components/service/ServicesIndexList";

export const metadata: Metadata = {
  title: { absolute: "Usługi web developera — Next.js, React, WP, AI, sklepy" },
  description:
    "Pełna lista usług: aplikacje Next.js, React, WordPress, WooCommerce, headless CMS, Jamstack, wdrożenia AI. Wycena 24h od briefa. Wrocław i online.",
  alternates: { canonical: "/uslugi" },
};

export default function UslugiPage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Usługi · katalog</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-display text-ink">
            Cztery <em>specjalności</em>,
            <br />
            jeden warsztat.
          </h1>
          <p className="mt-8 prose-bound text-ink-mute text-lead">
            Robię to czego nauczyłem się w bólach przez ostatnie pięć lat.
            Zamiast rozpraszać się na wszystko, skupiam się na obszarach gdzie
            mogę dać konkretną przewagę.
          </p>
        </div>
      </header>

      <ServicesIndexList />
    </article>
  );
}
