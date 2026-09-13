import type { Metadata } from "next";
import Link from "next/link";
import { ScanTool } from "@/components/scan/ScanTool";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";
import { jsonLd, personRef, SITE_URL } from "@/lib/schema";

const TITLE = "Sprawdź dostępność strony: darmowy test WCAG online";
const DESCRIPTION =
  "Sprawdź dostępność strony w kilka sekund. Darmowy test 15 wymagań WCAG 2.1 w kodzie HTML: obrazki bez opisu, pola bez etykiet, blokada powiększania i więcej.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sprawdz-dostepnosc" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/sprawdz-dostepnosc`, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const CHECKS: { name: string; wcag: string }[] = [
  { name: "Brak języka strony w znaczniku html", wcag: "3.1.1" },
  { name: "Brak tytułu strony", wcag: "2.4.2" },
  { name: "Obrazki bez tekstu alternatywnego", wcag: "1.1.1" },
  { name: "Tekst alternatywny będący nazwą pliku", wcag: "1.1.1" },
  { name: "Pola formularza bez etykiety", wcag: "1.3.1, 4.1.2" },
  { name: "Linki bez dostępnej nazwy", wcag: "2.4.4" },
  { name: "Przyciski bez dostępnej nazwy", wcag: "4.1.2" },
  { name: "Linki typu „kliknij tutaj” i „więcej”", wcag: "2.4.4" },
  { name: "Brak H1 i przeskoki poziomów nagłówków", wcag: "1.3.1" },
  { name: "Powtórzone identyfikatory elementów", wcag: "4.1.1" },
  { name: "Ramki iframe bez tytułu", wcag: "4.1.2" },
  { name: "Tabele z danymi bez nagłówków", wcag: "1.3.1" },
  { name: "Blokada powiększania na telefonie", wcag: "1.4.4" },
  { name: "Automatycznie odtwarzany dźwięk", wcag: "1.4.2" },
  { name: "Nieprawidłowe role ARIA", wcag: "4.1.2" },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Jak sprawdzić dostępność strony internetowej?",
    a: "Najpierw test automatyczny, który w kilka sekund wykrywa problemy widoczne w kodzie, na przykład obrazki bez opisu czy pola bez etykiet. Potem test ręczny: przejście całej strony samą klawiaturą, czytnikiem ekranu i sprawdzenie kontrastu. Dopiero oba etapy razem pokazują realny stan dostępności.",
  },
  {
    q: "Czy dobry wynik testu oznacza zgodność z WCAG?",
    a: "Nie. Test automatyczny obejmuje tylko część kryteriów WCAG 2.1 AA. Nie oceni obsługi klawiaturą, kolejności czytania, kontrastu ani tego, czy opisy obrazków mają sens. Dobry wynik to dobry znak, ale nie potwierdzenie zgodności z przepisami.",
  },
  {
    q: "Czy test zapisuje moją stronę albo dane?",
    a: "Test pobiera kod HTML podanej strony, sprawdza go i nie zapisuje go na stałe. Adres e-mail zbieram tylko wtedy, gdy sam poprosisz o pełny raport i zaznaczysz zgodę.",
  },
  {
    q: "Dlaczego test nie sprawdza kontrastu?",
    a: "Kontrast wymaga policzenia kolorów po zastosowaniu wszystkich stylów i skryptów, czyli uruchomienia strony w przeglądarce. Ten test czyta sam kod HTML, żeby wynik był w kilka sekund. Kontrast sprawdzam w pełnym audycie.",
  },
];

export default function SprawdzDostepnoscPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Test dostępności strony WCAG",
    url: `${SITE_URL}/sprawdz-dostepnosc`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Dowolny, w przeglądarce",
    inLanguage: "pl-PL",
    description: DESCRIPTION,
    creator: personRef,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Sprawdź dostępność strony", path: "/sprawdz-dostepnosc" },
  ]);

  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-16 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="eyebrow">Narzędzie · WCAG 2.1</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-h1 text-ink">
            Sprawdź <em>dostępność</em> strony
          </h1>
          <p className="mt-8 prose-bound text-lead text-ink-mute">
            Darmowy test sprawdza w kodzie strony 15 wymagań WCAG 2.1, których brak najczęściej blokuje osoby
            korzystające z czytnika ekranu albo powiększenia. Wynik dostajesz od razu, a pełny raport na e-mail.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-9 md:col-start-4">
          <ScanTool />
        </div>
      </div>

      <section className="mt-32 grid grid-cols-1 gap-8 border-t border-line pt-16 md:grid-cols-12" aria-labelledby="checks-heading">
        <div className="md:col-span-3">
          <p className="eyebrow">01 · Zakres</p>
        </div>
        <div className="md:col-span-9">
          <h2 id="checks-heading" className="display text-h2 text-ink">
            Co sprawdza <em>test</em>
          </h2>
          <ol className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {CHECKS.map((c, i) => (
              <li key={c.name} className="flex items-baseline gap-4 border-b border-line py-4">
                <span className="w-6 shrink-0 font-mono text-[11px] text-peach">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-ink">{c.name}</span>
                <span className="shrink-0 font-mono text-[11px] text-ink-faint">{c.wcag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 gap-8 border-t border-line pt-16 md:grid-cols-12" aria-labelledby="limits-heading">
        <div className="md:col-span-3">
          <p className="eyebrow">02 · Ograniczenia</p>
        </div>
        <div className="prose-bound space-y-5 text-lg leading-relaxed text-ink-mute md:col-span-7">
          <h2 id="limits-heading" className="display text-h2 text-ink">
            Czego automat <em>nie sprawdzi</em>
          </h2>
          <p>
            Test czyta kod HTML strony. Nie uruchamia jej w przeglądarce, więc nie oceni kontrastu kolorów, obsługi
            klawiaturą, pułapek fokusa, kolejności czytania ani treści dokładanych przez JavaScript po załadowaniu.
            Nie oceni też, czy opis obrazka ma sens, tylko czy w ogóle istnieje.
          </p>
          <p>
            Dlatego wynik to dolna granica problemów. Z moich pomiarów na 110 polskich sklepach wynika, że samych
            błędów wykrywalnych automatycznie jest sporo: za niski kontrast miało 96% z nich, a linki bez nazwy 85%.
            Szczegóły w{" "}
            <Link href="/blog/dostepnosc-woocommerce" className="text-ink underline underline-offset-4 hover:text-peach">
              badaniu dostępności sklepów WooCommerce
            </Link>
            . Jeśli potrzebujesz oceny całości, z testem klawiaturą i czytnikiem ekranu,{" "}
            <Link href="/audyt-wcag" className="text-ink underline underline-offset-4 hover:text-peach">
              audyt WCAG
            </Link>{" "}
            obejmuje wszystkie 50 kryteriów i naprawę.
          </p>
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 gap-8 border-t border-line pt-16 md:grid-cols-12" aria-labelledby="faq-heading">
        <div className="md:col-span-3">
          <p className="eyebrow">03 · Pytania</p>
        </div>
        <div className="md:col-span-9">
          <h2 id="faq-heading" className="display text-h2 text-ink">
            Pytania o <em>test dostępności</em>
          </h2>
          <div className="mt-10 border-t border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group border-b border-line py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-lg text-ink hover:text-peach">
                  {f.q}
                  <span aria-hidden className="font-mono text-peach transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 prose-bound leading-relaxed text-ink-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    </article>
  );
}
