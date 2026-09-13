import Image from "next/image";
import Link from "next/link";

export function AuthorBio() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20 border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <p className="eyebrow md:col-span-3">Autor</p>
        <div className="md:col-span-8 md:col-start-5 flex items-start gap-5">
          <Image
            src="/avatar-face.webp"
            width={64}
            height={64}
            alt="Marcin Siwonia"
            className="size-16 rounded-full object-cover object-top shrink-0"
          />
          <div>
            <Link href="/o-mnie" className="font-display italic text-2xl text-ink hover:text-peach transition-colors">
              Marcin Siwonia
            </Link>
            <p className="mt-3 text-ink-mute leading-relaxed">
              Programista z Wrocławia. Od 2020 roku tworzę strony i aplikacje internetowe, od końca 2022 na własny rachunek. Ponad 30 wdrożeń komercyjnych dla firm z Polski i Niemiec, głównie WordPress, WooCommerce i Next.js.
            </p>
            <div className="mt-4 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
              <Link href="/o-mnie" className="hover:text-peach transition-colors">O mnie</Link>
              <a href="https://github.com/SiwsON1" target="_blank" rel="noreferrer" className="hover:text-peach transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/marcinsiwonia" target="_blank" rel="noreferrer" className="hover:text-peach transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
