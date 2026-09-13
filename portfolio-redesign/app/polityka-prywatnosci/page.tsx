import type { Metadata } from "next";
import Link from "next/link";
import { ConsentReset } from "@/components/legal/ConsentReset";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Jakie dane zbiera marcinsiwonia.pl, w jakim celu i na jakiej podstawie: formularz kontaktowy, hosting, analityka po zgodzie. Twoje prawa i sposób wycofania zgody.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

const SECTIONS: { heading: string; body: React.ReactNode[] }[] = [
  {
    heading: "Administrator danych",
    body: [
      "Administratorem danych osobowych przetwarzanych w serwisie marcinsiwonia.pl jest Marcin Siwonia, prowadzący jednoosobową działalność gospodarczą pod adresem ul. Kurkowa 32 lok. 57, 50-210 Wrocław, NIP 8982333597, REGON 544668716.",
      <>
        W sprawach dotyczących danych osobowych napisz na{" "}
        <a href="mailto:marcin.siwonia.firma@gmail.com" className="text-peach underline underline-offset-4">
          marcin.siwonia.firma@gmail.com
        </a>
        .
      </>,
    ],
  },
  {
    heading: "Formularz kontaktowy i korespondencja",
    body: [
      "Formularz zbiera imię, adres e-mail, temat i treść wiadomości. Dane służą wyłącznie do odpowiedzi na zapytanie i ewentualnego przygotowania oferty. Podstawą jest art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy na Twoje żądanie), a w pozostałym zakresie art. 6 ust. 1 lit. f RODO (prowadzenie korespondencji jako prawnie uzasadniony interes administratora).",
      "Wiadomość z formularza jest wysyłana e-mailem przez usługę Resend i trafia do skrzynki pocztowej administratora. Dane przechowuję przez czas prowadzenia korespondencji, a jeśli dojdzie do współpracy, przez okres wymagany przepisami podatkowymi i do przedawnienia roszczeń.",
      "Podanie danych jest dobrowolne, ale bez adresu e-mail nie mogę odpowiedzieć na wiadomość.",
    ],
  },
  {
    heading: "Hosting i logi serwera",
    body: [
      "Serwis działa na infrastrukturze Vercel. Przy każdym wejściu serwer zapisuje techniczne dane żądania, w tym adres IP, datę, adres podstrony i informacje o przeglądarce. Służą one do zapewnienia działania i bezpieczeństwa serwisu, na podstawie art. 6 ust. 1 lit. f RODO. Nie łączę ich z danymi z formularza.",
    ],
  },
  {
    heading: "Analityka i pliki cookie",
    body: [
      "Serwis zapisuje w przeglądarce Twój wybór dotyczący cookies (klucz cookie-consent w pamięci lokalnej przeglądarki) oraz informację, czy animacja wejścia była już wyświetlona w danej sesji. To dane niezbędne do działania strony i nie służą do śledzenia.",
      "Google Analytics 4 może zostać uruchomione wyłącznie po kliknięciu „Akceptuj wszystkie” w banerze. Do tego czasu skrypt analityczny nie jest wczytywany. Po zgodzie Google Analytics zapisuje pliki cookie (np. _ga) i zbiera dane o korzystaniu z serwisu, takie jak odwiedzone podstrony, przybliżona lokalizacja i typ urządzenia, z anonimizacją adresu IP. Podstawą jest Twoja zgoda, czyli art. 6 ust. 1 lit. a RODO.",
      "Zgodę możesz w każdej chwili wycofać przyciskiem poniżej albo usuwając dane witryny w ustawieniach przeglądarki. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, które odbyło się przed jej wycofaniem.",
    ],
  },
  {
    heading: "Odbiorcy danych i przekazanie poza EOG",
    body: [
      "Dane mogą trafiać do dostawców, którzy świadczą usługi na moją rzecz: Vercel (hosting), Resend (wysyłka wiadomości z formularza), Google (poczta e-mail, a po zgodzie Google Analytics). Część z tych firm ma siedzibę w Stanach Zjednoczonych. Przekazanie danych odbywa się na podstawie decyzji Komisji Europejskiej stwierdzającej odpowiedni poziom ochrony w ramach EU-US Data Privacy Framework albo standardowych klauzul umownych.",
      "Nie sprzedaję danych i nie przekazuję ich w celach marketingowych innym podmiotom. Nie podejmuję decyzji w sposób zautomatyzowany ani nie profiluję użytkowników.",
    ],
  },
  {
    heading: "Twoje prawa",
    body: [
      "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, przeniesienia danych oraz wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie. Jeśli przetwarzanie opiera się na zgodzie, możesz ją wycofać w dowolnym momencie.",
      "Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.",
    ],
  },
];

export default function PolitykaPrywatnosciPage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="eyebrow">Dokumenty</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-h1 text-ink">
            Polityka <em>prywatności</em>
          </h1>
          <p className="mt-8 prose-bound text-lead text-ink-mute">
            Jakie dane zbiera ten serwis, po co i jak możesz zdecydować, co się z nimi dzieje. Stan na
            13 września 2026 roku.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="space-y-16 md:col-span-8 md:col-start-4">
          {SECTIONS.map((s, i) => (
            <section key={s.heading} aria-labelledby={`pp-${i}`} className="border-t border-line pt-10">
              <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</p>
              <h2
                id={`pp-${i}`}
                className="mb-6 font-display italic text-ink"
                style={{ fontSize: "clamp(1.5rem, 1rem + 1.2vw, 2.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                {s.heading}
              </h2>
              <div className="prose-bound space-y-5 text-lg leading-relaxed text-ink-mute">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              {s.heading === "Analityka i pliki cookie" && (
                <div className="mt-8">
                  <ConsentReset />
                </div>
              )}
            </section>
          ))}

          <p className="border-t border-line pt-10 text-sm text-ink-faint">
            Pytania o dane albo o sam serwis? Napisz przez{" "}
            <Link href="/kontakt" className="text-ink underline underline-offset-4 hover:text-peach">
              formularz kontaktowy
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
