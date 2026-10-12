=== WPIS: server-actions-nextjs ===
KEYWORD: Server Actions Next.js
TITLE: Server Actions Next.js dla aplikacji i formularzy
METATITLE: Server Actions Next.js: działanie, przykłady i błędy
METADESCRIPTION: Server Actions w Next.js pozwalają zapisywać dane bez osobnych endpointów API. Sprawdź przykłady, walidację, bezpieczeństwo i sytuacje, gdy ich unikać.
EXCERPT: Server Actions upraszczają obsługę formularzy i zapis danych w aplikacjach Next.js. Pokazuję, jak działają, jak zabezpieczyć je przed nieuprawnionymi wywołaniami i kiedy lepiej użyć tradycyjnego API.
LEAD: Server Actions w Next.js pozwalają wykonywać operacje na serwerze bez ręcznego tworzenia endpointu API dla każdej zmiany danych. To przydatne rozwiązanie dla programisty budującego formularze, panele administracyjne i aplikacje z bazą danych, ale wymaga walidacji oraz kontroli uprawnień. Pokażę Ci, jak działa mechanizm Server Actions Next.js, kiedy warto go stosować i jakie błędy mogą wpłynąć na bezpieczeństwo aplikacji.

## Czym są Server Actions w Next.js i jak działają?

Server Actions to asynchroniczne funkcje JavaScript lub TypeScript wykonywane na serwerze, które można wywołać bezpośrednio z formularza albo komponentu React.

Zamiast ręcznie przygotowywać osobny endpoint API, wysyłać do niego żądanie i obsługiwać odpowiedź, przekazujesz funkcję serwerową do formularza. Next.js zajmuje się komunikacją między przeglądarką a serwerem.

Mechanizm działa w App Routerze i wykorzystuje dyrektywę `"use server"`. Możesz umieścić ją na początku funkcji asynchronicznej albo na początku pliku, w którym eksportujesz funkcje serwerowe. W drugim przypadku eksportowane funkcje muszą być asynchroniczne. Tak przygotowaną akcję możesz importować również do komponentu klienckiego.

W dokumentacji Next.js spotkasz także nazwę Server Functions. Jest to szersze określenie funkcji uruchamianych na serwerze. Server Actions to ich zastosowanie do obsługi interakcji i zmian danych, szczególnie formularzy.

Wyobraź sobie panel administracyjny, w którym edytujesz opis usługi. Po kliknięciu przycisku „Zapisz” aplikacja musi odebrać nowe dane, sprawdzić ich poprawność, zweryfikować uprawnienia i zapisać zmianę w bazie. Server Action pozwala umieścić tę logikę w funkcji serwerowej bez przygotowywania dodatkowej warstwy komunikacji HTTP.

Pod spodem nadal odbywa się komunikacja z serwerem. Next.js obsługuje wywołanie akcji za pomocą żądania POST, przekazuje argumenty w obsługiwanym formacie i dostarcza wynik do aplikacji.

Brak ręcznie napisanego endpointu nie oznacza braku publicznego punktu wejścia.

Każdą taką funkcję trzeba zabezpieczyć podobnie jak tradycyjne API.

Warto też odróżnić Server Actions od React Server Components. Komponent serwerowy służy przede wszystkim do przygotowania i renderowania interfejsu z danymi pobranymi na serwerze. Server Action uruchamiasz natomiast wtedy, gdy użytkownik chce coś zmienić: utworzyć rekord, edytować ustawienia albo usunąć element.

W mojej pracy przy [tworzeniu stron Next.js](/uslugi/aplikacje-nextjs) rozdzielam te odpowiedzialności. Odczyt danych umieszczam tam, gdzie są potrzebne do renderowania, a operacje zapisu projektuję jako osobne funkcje z jasno określonymi uprawnieniami. Dzięki temu łatwiej prześledzić przepływ informacji i sprawdzić, kto może wykonać konkretną operację.

## Jak wywołać Server Action z formularza React?

Najprostszym zastosowaniem jest formularz zapisujący dane. W App Routerze możesz przekazać funkcję serwerową do atrybutu `action` formularza, a React przekaże do niej obiekt `FormData` zawierający wartości pól.

Przykładowa funkcja zapisująca zgłoszenie może wyglądać tak:

```ts
// app/actions.ts
'use server'

export async function createInquiry(formData: FormData) {
  const name = formData.get('name')
  const message = formData.get('message')

  console.log({ name, message })
}
```

Ten przykład pokazuje jedynie odczyt pól formularza na serwerze. Nie zapisuje danych, nie wysyła wiadomości i nie zawiera jeszcze zabezpieczeń potrzebnych w produkcyjnej aplikacji.

Funkcję można następnie przekazać bezpośrednio do formularza:

```tsx
// app/contact-form.tsx
import { createInquiry } from './actions'

export function ContactForm() {
  return (
    <form action={createInquiry}>
      <input name="name" required />
      <textarea name="message" required />
      <button type="submit">Wyślij</button>
    </form>
  )
}
```

Po wysłaniu formularza Next.js uruchamia `createInquiry` na serwerze. Nie musisz osobno pisać wywołania `fetch`, aby przekazać wartości pól do funkcji.

Tak zbudowany formularz renderowany przez komponent serwerowy może działać również bez JavaScript po stronie przeglądarki. Jest to przykład stopniowego ulepszania interfejsu: podstawowa funkcja formularza pozostaje dostępna, a JavaScript może dodawać wygodniejszą obsługę stanów i komunikatów.

Jeżeli formularz ma wyświetlać błędy walidacji, stan oczekiwania albo informację o zapisaniu danych, możesz wykorzystać `useActionState` z React. Ten mechanizm pozwala przekazywać wynik akcji do komponentu i aktualizować interfejs bez budowania osobnego systemu obsługi odpowiedzi.

Server Actions nie ograniczają się jednak do formularzy. W komponencie klienckim możesz wywołać zaimportowaną funkcję serwerową w obsłudze zdarzenia, na przykład po kliknięciu przycisku usuwającego wpis. Takie wywołanie wymaga JavaScript w przeglądarce.

Przy bardziej rozbudowanych [aplikacjach React](/uslugi/aplikacje-react) warto rozdzielać stan interfejsu od operacji zapisu. React odpowiada wtedy za prezentację formularza i komunikatów, a funkcja serwerowa za sprawdzenie danych oraz wykonanie zmiany. Takie podejście ułatwia rozwijanie formularzy bez mieszania logiki widoku z dostępem do bazy.

## Kiedy warto używać Server Actions, a kiedy wybrać API?

Server Actions sprawdzają się przede wszystkim wtedy, gdy operacja dotyczy interfejsu konkretnej aplikacji Next.js. Są dobrym wyborem dla formularzy kontaktowych, edycji profilu, zarządzania produktami, zapisywania ustawień i innych prostych zmian danych.

Jeśli korzystasz z Postgres i Prisma lub Drizzle, akcja może bezpośrednio wywołać odpowiednią operację bazy danych. Nie musisz tworzyć endpointu REST tylko po to, żeby formularz w tej samej aplikacji mógł zapisać rekord.

Podobnie wygląda sytuacja z integracjami zewnętrznymi. Server Action może korzystać z sekretnego klucza API do wysłania wiadomości, aktualizacji danych w CRM albo wykonania operacji w usłudze płatniczej. Sam klucz pozostaje po stronie serwera, pod warunkiem że nie ujawnisz go w odpowiedzi ani w danych przekazywanych klientowi.

Nie oznacza to jednak, że Server Actions powinny zastąpić wszystkie endpointy. Wybór zależy przede wszystkim od tego, kto będzie korzystał z danej operacji.

| Sytuacja | Co wybrać i dlaczego |
| --- | --- |
| Zapis formularza w aplikacji Next.js | Server Action, ponieważ formularz może bezpośrednio wywołać funkcję serwerową |
| Edycja rekordu w panelu administratora | Server Action z kontrolą uprawnień użytkownika |
| Odczyt danych potrzebnych do wyrenderowania strony | Komponent serwerowy, bez uruchamiania akcji |
| Publiczne API dla aplikacji mobilnej lub innego systemu | Route Handler, ponieważ daje kontrolę nad adresem i formatem odpowiedzi |
| Odbieranie webhooków od operatora płatności | Route Handler, który przyjmie żądanie i zweryfikuje jego autentyczność |
| Generowanie dużego raportu lub przetwarzanie pliku w tle | Kolejka zadań i osobny proces wykonujący pracę |
| Strumieniowanie odpowiedzi, na przykład z modelu AI | Route Handler obsługujący strumieniową odpowiedź HTTP |

Route Handlers to mechanizm Next.js pozwalający definiować własne endpointy HTTP w katalogu `app`. Możesz obsługiwać w nich między innymi metody GET, POST, PUT, PATCH i DELETE, a także samodzielnie kontrolować nagłówki oraz treść odpowiedzi.

Server Actions korzystają z POST. Jeśli projektujesz publiczny interfejs dla innego systemu, który wymaga określonych metod HTTP i stabilnego kontraktu API, Route Handler będzie bardziej odpowiedni.

Własny serwis marcinsiwonia.pl opieram na Next.js App Router. Formularz kontaktowy wysyła tam wiadomości przez endpoint API, który zawiera walidację i pole-pułapkę na boty. To świadomy wybór architektoniczny, nie ograniczenie Next.js. Formularz można byłoby zrealizować także jako Server Action, ale istniejący endpoint pozwala mi oddzielnie obsługiwać komunikację.

Podobną decyzję podejmuję przy narzędziach wykonujących bardziej wymagające operacje. Moje narzędzie do skanowania dostępności ma limity zapytań i blokadę adresów wewnętrznych. Takie zabezpieczenia są potrzebne niezależnie od tego, czy żądanie obsługuje Server Action, czy Route Handler.

## Jak zabezpieczyć Server Actions przez walidację i autoryzację?

Najważniejsza zasada brzmi: każdą Server Action traktuj jak publiczny endpoint, nawet jeśli wywołujesz ją wyłącznie z formularza ukrytego za logowaniem.

Użytkownik może zmodyfikować dane wysyłane do serwera, ominąć walidację przeglądarki albo przygotować własne żądanie. Sam fakt, że przycisk jest niewidoczny dla osób niezalogowanych, nie stanowi zabezpieczenia operacji.

Dlatego w samej akcji trzeba sprawdzić zarówno poprawność danych wejściowych, jak i prawo użytkownika do wykonania zmiany.

Do walidacji danych wykorzystuję podejście oparte na schematach. Popularnym narzędziem jest Zod, który pozwala określić oczekiwane typy i ograniczenia pól.

Przykład walidacji formularza:

```ts
// app/actions.ts
'use server'

import { z } from 'zod'

const inquirySchema = z.object({
  name: z.string().trim().min(1),
  email: z.email(),
  message: z.string().trim().min(1),
})

export async function createInquiry(formData: FormData) {
  const result = inquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!result.success) {
    return { success: false, error: 'Sprawdź dane formularza.' }
  }

  // Tutaj zapisz dane albo wyślij wiadomość.
  return { success: true }
}
```

Funkcja `safeParse` sprawdza wartości przed dalszym przetwarzaniem i zwraca informację, czy dane są poprawne. Dzięki temu możesz zatrzymać operację i pokazać użytkownikowi błąd zamiast przekazywać nieprawidłowe wartości do bazy.

Powyższy przykład dotyczy publicznego formularza. Jeśli akcja zapisuje dane dostępne tylko dla zalogowanych osób, potrzebujesz dodatkowo uwierzytelnienia i autoryzacji.

Uwierzytelnienie odpowiada na pytanie, kto wykonuje operację. Autoryzacja sprawdza, czy ta osoba może ją wykonać.

To istotna różnica, ponieważ zalogowany użytkownik nie powinien automatycznie otrzymywać dostępu do wszystkich rekordów.

Przy panelach administracyjnych korzystam między innymi z Clerk lub NextAuth. Po stronie serwera trzeba sprawdzić sesję i uprawnienia do konkretnego zasobu. Przykładowo osoba edytująca własny projekt nie może uzyskać dostępu do cudzego projektu przez zmianę identyfikatora w żądaniu.

Dodatkową ochroną są limity częstotliwości wywołań, szczególnie przy formularzach publicznych, wysyłce maili i operacjach korzystających z płatnych usług zewnętrznych. Limity najlepiej egzekwować we współdzielonym mechanizmie, który działa niezależnie od instancji serwera.

Next.js ma również wbudowane mechanizmy ochrony przed CSRF, między innymi sprawdzanie nagłówków Origin i Host przy wywołaniach akcji. Nie zastępują one jednak sprawdzania sesji, uprawnień ani walidacji danych.

Jeśli akcja wykonuje zapytania SQL, korzystaj z bezpiecznych mechanizmów parametryzacji. Samo użycie Zod nie zabezpiecza zapytania zbudowanego przez nieostrożne łączenie tekstu pochodzącego od użytkownika.

## Jak odświeżać dane po zapisie za pomocą revalidatePath?

Po zapisaniu zmian w bazie aplikacja powinna pokazać aktualny stan. Jeśli użytkownik edytuje nazwę produktu, a po powrocie do listy nadal widzi starą wartość, trudno mu ocenić, czy zapis się udał.

W Next.js sposób aktualizacji widoku zależy od tego, jak pobierasz i przechowujesz dane. Jeżeli korzystasz z mechanizmów pamięci podręcznej, zapis do bazy nie zawsze automatycznie unieważni wcześniej przygotowaną zawartość strony.

Do odświeżania danych związanych z konkretną ścieżką służy `revalidatePath` z modułu `next/cache`.

Przykład użycia po zapisie:

```ts
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'

export async function updateProduct(id: string, name: string) {
  // Sprawdź tutaj sesję, uprawnienia i dane wejściowe.

  await db.product.update({
    where: { id },
    data: { name },
  })

  revalidatePath('/products')
}
```

Po poprawnym zapisie funkcja `revalidatePath('/products')` unieważnia odpowiednie dane w pamięci podręcznej powiązane ze ścieżką listy produktów. Jeśli użytkownik przegląda tę stronę, Next.js może dostarczyć mu zaktualizowany interfejs.

Kod zakłada przykładowy model Prisma i pomija implementację kontroli dostępu, którą trzeba dodać przed zapisem. Ważna jest tutaj kolejność: najpierw skuteczna zmiana danych, później odświeżenie.

Nie zawsze trzeba unieważniać całą stronę. Jeśli różne widoki korzystają z tych samych danych zapisanych w pamięci podręcznej, możesz użyć oznaczania danych tagami. Next.js udostępnia do tego między innymi `revalidateTag` i `updateTag`.

Te funkcje nie mają identycznego działania. `updateTag` pozwala natychmiast unieważnić oznaczone dane w Server Action, co przydaje się wtedy, gdy użytkownik powinien zobaczyć własną zmianę bez korzystania ze starej zawartości. `revalidateTag` obsługuje również scenariusze odświeżania danych w tle, zależnie od sposobu wywołania.

Istotne jest także to, że nie każda aplikacja potrzebuje ręcznego odświeżania pamięci podręcznej. Jeśli pobierasz dane bez ich trwałego buforowania, problem może sprowadzać się do ponownego renderowania widoku albo aktualizacji jego lokalnego stanu.

Przy projektowaniu panelu administracyjnego ustalam więc, które dane powinny być aktualne natychmiast, a które mogą być odświeżane z opóźnieniem. Inne wymagania ma lista produktów edytowana przez administratora, a inne publiczny katalog z rzadko zmieniającą się treścią.

## Jakie błędy najczęściej pojawiają się przy Server Actions?

Najczęstszy problem nie wynika ze składni `"use server"`, tylko z nieprawidłowego podziału odpowiedzialności między przeglądarkę, serwer i bazę danych.

Pierwszym błędem jest zakładanie, że Server Action pozostaje prywatna, ponieważ jej kod znajduje się na serwerze. Funkcja dostępna z interfejsu może być wywoływana przez żądanie sieciowe. Bez sprawdzenia uprawnień atakujący może próbować wykonywać operacje na rekordach, do których nie powinien mieć dostępu.

Drugim błędem jest poleganie wyłącznie na walidacji w formularzu. Atrybut `required` poprawia wygodę użytkownika, ale nie chroni serwera przed nieprawidłowymi danymi. Walidację trzeba powtórzyć wewnątrz akcji.

Trzeci problem dotyczy błędów wykonania. Jeśli operacja zapisu się nie uda, użytkownik powinien otrzymać zrozumiały komunikat. Nie należy jednak zwracać do przeglądarki szczegółów połączenia z bazą, danych konfiguracyjnych czy wewnętrznych komunikatów systemowych. Szczegóły techniczne zapisuję w logach serwera, a interfejs otrzymuje informację odpowiednią do sytuacji.

Kolejną pułapką są podwójne operacje. Użytkownik może ponownie wysłać formularz, odświeżyć stronę albo ponowić działanie po chwilowej utracie połączenia. Przy zapisie zwykłej notatki może to być mało istotne, ale utworzenie zamówienia lub uruchomienie płatności wymaga ochrony przed niezamierzonym powtórzeniem. W takich przypadkach stosuje się między innymi unikalne identyfikatory operacji i odpowiednie ograniczenia w bazie.

Uważałbym również na nadużywanie Server Actions do pobierania danych. Funkcje serwerowe uruchamiane przez klienta nie zastępują przemyślanej strategii odczytu. Przy renderowaniu strony zwykle lepiej pobrać dane w komponencie serwerowym, a dla interaktywnych zapytań dobrać mechanizm odpowiedni do częstotliwości i sposobu aktualizacji.

Osobną sprawą są długie zadania. Generowanie rozbudowanego raportu, przetwarzanie wideo albo import dużego zbioru danych nie powinny uzależniać zakończenia całej operacji od pojedynczego żądania formularza. Ograniczenia czasu wykonania zależą od środowiska wdrożenia. Bezpieczniejszym rozwiązaniem bywa kolejka zadań, zapisywanie ich statusu i osobne przekazywanie wyniku użytkownikowi.

Przy większych systemach zwracam też uwagę na testowanie logiki biznesowej. Nie wszystko musi znajdować się bezpośrednio w funkcji Server Action. Walidację, reguły biznesowe i operacje bazy warto rozdzielać tam, gdzie ułatwia to testowanie oraz ponowne wykorzystanie kodu.

## Jak dobieram Server Actions do architektury aplikacji Next.js?

Server Actions są narzędziem, a nie gotową architekturą aplikacji. To, że pozwalają ograniczyć kod odpowiedzialny za komunikację HTTP, nie oznacza, że rozwiązują problemy związane z uprawnieniami, organizacją danych czy integracjami.

Przy projektowaniu aplikacji zaczynam od określenia, kto będzie wykonywał operacje i z jakich systemów będą pochodzić żądania. Jeżeli funkcja służy wyłącznie do edycji danych z panelu Next.js, Server Action często będzie naturalnym rozwiązaniem. Jeśli tę samą operację ma wykonywać aplikacja mobilna, partner biznesowy lub zewnętrzny system, projektuję odpowiednie API.

Dobrym przykładem takiego rozdzielenia odpowiedzialności jest Galabau Darius, aplikacja Next.js przygotowana dla klienta z Niemiec. Zbudowałem tam konfigurator wyceny ogrodzeń działający na żywo oraz panel administratora z logowaniem przez Clerk. Warstwa danych korzysta z Prisma, a aplikację wdrożyłem na Vercel.

W takim systemie istotne jest oddzielenie operacji dostępnych publicznie od funkcji administracyjnych. Sam konfigurator i panel mają odmienne wymagania dotyczące dostępu do danych. Nie każda operacja powinna więc korzystać z tego samego sposobu komunikacji lub zestawu uprawnień. Nie oznacza to, że wszystkie operacje w tym projekcie zostały zrealizowane przy użyciu Server Actions.

Inną perspektywę daje mój własny produkt Kantorymapa, który korzysta z Next.js i jednej bazy do generowania podstron kantorów. Serwis obejmuje 1900 kantorów w 140 miastach, a kursy NBP są pobierane codziennie. Ładuje się poniżej sekundy. Tutaj kluczową rolę pełnią organizacja odczytu danych, generowanie stron i ich wydajne udostępnianie, a nie formularze wykonujące zmiany w bazie.

Przy wyborze architektury znaczenie ma również to, czy aplikacja będzie rozwijana przez jeden zespół, czy stanie się częścią większego ekosystemu. Jeżeli potrzebne są zewnętrzne integracje, odrębne usługi i stabilne kontrakty API, odpowiedzialności trzeba określić wcześniej. W takim zakresie [outsourcing Next.js](/uslugi/next-js-software-house) powinien obejmować również decyzje o bezpieczeństwie i komunikacji między systemami, nie tylko implementację interfejsu.

Server Actions wybieram tam, gdzie ich zastosowanie rzeczywiście upraszcza aplikację. Przy formularzu zapisującym ustawienia użytkownika mogą wyeliminować niepotrzebny endpoint i dodatkowy kod obsługi żądania. Przy webhookach, publicznym API lub rozbudowanym przetwarzaniu danych nie próbuję zastępować nimi mechanizmów lepiej dopasowanych do zadania.

Najważniejsze jest zachowanie czytelnej granicy między interfejsem a logiką biznesową. Server Action może być wygodnym punktem wejścia do operacji, ale walidacja, uprawnienia i zasady zapisu nadal wymagają świadomego projektu. Dzięki temu aplikacja pozostaje zrozumiała również wtedy, gdy pojawią się kolejne formularze, role użytkowników i integracje.

FAQ:

- P: Czy Server Actions zastępują API Routes w Next.js? | O: Nie całkowicie. Server Actions dobrze sprawdzają się przy zmianach danych wywoływanych z interfejsu aplikacji Next.js. Jeśli potrzebujesz publicznego API, webhooków albo własnej obsługi metod HTTP, lepszym wyborem będą Route Handlers.

- P: Czy mój formularz z Server Action będzie działał bez JavaScript? | O: Tak, formularz renderowany przez komponent serwerowy może wywoływać Server Action bez JavaScript w przeglądarce. Formularze w komponentach klienckich mają dodatkowe zachowania związane z nawodnieniem React. Wywoływanie akcji przez zdarzenie `onClick` wymaga JavaScript.

- P: Jak sprawdzić, dlaczego moja Server Action nie działa? | O: Zacznij od logów serwera, ponieważ właśnie tam wykonuje się funkcja. Sprawdź dane wejściowe, wynik walidacji, uprawnienia i ewentualne błędy zapisu. W narzędziach deweloperskich przeglądarki możesz też sprawdzić żądanie sieciowe, ale szczegółowy błąd serwera nie zawsze jest przekazywany do klienta.

- P: Czy mogę używać Server Actions z Prisma i Clerk? | O: Tak, Server Action może korzystać z Prisma do zapisu danych i Clerk do sprawdzania tożsamości użytkownika. Przed zmianą rekordu musisz jednak sprawdzić nie tylko zalogowanie, ale również uprawnienia do konkretnej operacji. Samo użycie Clerk nie zabezpiecza automatycznie wszystkich akcji.

- P: Jak ograniczyć liczbę wywołań Server Action w mojej aplikacji? | O: Dodaj ograniczanie częstotliwości żądań po stronie serwera, najlepiej z wykorzystaniem współdzielonego magazynu danych. Możesz identyfikować użytkownika na podstawie sesji, a przy publicznych formularzach stosować dodatkowe sygnały ograniczające nadużycia. Dla operacji wrażliwych warto także zabezpieczyć się przed powtórnym wykonaniem tej samej zmiany.