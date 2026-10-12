# Wdrożenie AI w małej firmie: od wyboru procesu do pomiaru wyniku

Masz w firmie zadania, które codziennie wyglądają podobnie? Ktoś przegląda maile, przepisuje dane z dokumentów, szuka odpowiedzi w instrukcjach albo przygotowuje kolejne opisy produktów. Część tej pracy można uprościć, ale wdrożenie AI w małej firmie nie powinno zaczynać się od kupienia dostępu do kolejnego narzędzia. Najpierw trzeba znaleźć zadanie, w którym model rzeczywiście pomoże, i ustalić, jak sprawdzić jego wynik.

Nie proponuję budowania od razu systemu obsługującego całą firmę. Wolę wybrać jeden proces, przygotować mały prototyp i przetestować go na prawdziwych przykładach. Jeżeli AI popełnia zbyt wiele błędów, wymaga ciągłego poprawiania albo nie skraca pracy, nie ma powodu rozwijać rozwiązania tylko dlatego, że wykorzystuje nową technologię.

## Które zadania w małej firmie warto powierzyć AI?

Najlepszym punktem startu są powtarzalne zadania, w których pracownik musi przeczytać tekst, zrozumieć jego znaczenie i przygotować określony wynik. To właśnie odróżnia je od prostych czynności, które można zautomatyzować bez modelu językowego.

Wyobraź sobie skrzynkę mailową, na którą przychodzą pytania o ofertę, reklamacje i prośby o dokumenty. Zamiast ręcznie sortować każdą wiadomość, można wykorzystać AI do rozpoznania tematu i przygotowania propozycji odpowiedzi. Pracownik nadal decyduje, co wysłać klientowi.

Podobnie wygląda praca z dokumentami. Model może odczytać treść, znaleźć potrzebne informacje i uporządkować je w określonej formie. Nie oznacza to jednak, że powinien samodzielnie podejmować decyzje na podstawie tych danych.

| Zadanie | Czy AI ma sens? | Gdzie musi sprawdzić człowiek? |
| --- | --- | --- |
| Odpowiadanie na pytania z dokumentów | Tak, gdy odpowiedzi znajdują się w wielu plikach | Zgodność odpowiedzi z dokumentem źródłowym |
| Klasyfikowanie maili | Tak, gdy tematy wiadomości są zróżnicowane | Nietypowe wiadomości i błędnie rozpoznane sprawy |
| Przygotowywanie szkiców odpowiedzi | Tak, gdy pytania się powtarzają | Treść przed wysłaniem do klienta |
| Wyciąganie danych z dokumentów | Tak, gdy dokumenty mają różną strukturę | Brakujące, niejednoznaczne lub istotne dane |
| Tworzenie opisów produktów | Tak, gdy dostępne są sprawdzone informacje | Fakty, parametry i treść przed publikacją |
| Przepisywanie wartości między polami | Zwykle nie, wystarczy zwykła automatyzacja | Poprawność reguł i mapowania pól |
| Podejmowanie decyzji o dużych konsekwencjach | Nie jako samodzielny decydent | Ostateczna decyzja należy do człowieka |

Ważna jest również częstotliwość zadania. Jeśli podobna czynność pojawia się sporadycznie, budowanie osobnego systemu może być nieuzasadnione. Czasami wystarczy narzędzie, z którego pracownik korzysta ręcznie.

Przy wdrożeniu analizuję więc nie tylko to, co AI potrafi zrobić, ale też jak często zadanie występuje, ile trwa obecnie i jaki błąd można zaakceptować.

## Jak przechodzę od pomysłu do działającego rozwiązania?

Zaczynam od poznania obecnego sposobu pracy. Nie potrzebujesz do tego gotowej dokumentacji technicznej. Wystarczy, że pokażesz mi przykładowe zadania i opowiesz, jak pracownik je wykonuje.

Sprawdzam, skąd przychodzą informacje, co trzeba z nimi zrobić, w których momentach pojawia się decyzja i jaki powinien być końcowy rezultat. Pytam też o wyjątki. To ważne, ponieważ system może dobrze obsługiwać typowe przypadki, a mylić się przy niekompletnym dokumencie czy nietypowej wiadomości.

Cały proces dzielę na kilka etapów:

- Rozpoznanie zadania: ustalam obecny przebieg pracy, wykorzystywane dane i oczekiwany wynik.
- Przygotowanie przykładów: zbieram rzeczywiste przypadki, na których będzie można sprawdzić poprawność działania.
- Budowa prototypu: tworzę ograniczoną wersję rozwiązania dla jednego zadania.
- Test i pomiar: porównuję wyniki AI z rezultatami uzyskiwanymi dotychczas.
- Poprawa procesu: zmieniam instrukcje dla modelu, sposób dostarczania danych i zasady kontroli.
- Decyzja o wdrożeniu: ustalam, czy warto podłączyć kolejne źródła danych i udostępnić rozwiązanie użytkownikom.

Do budowy wykorzystuję między innymi API OpenAI i Anthropic. API to sposób, w jaki przygotowana aplikacja komunikuje się z modelem. Dzięki temu można połączyć AI z firmowymi dokumentami, formularzami czy innymi systemami, a także kontrolować zakres przekazywanych informacji.

Jeśli proces wymaga osobnego panelu, kont użytkowników lub bardziej rozbudowanej obsługi danych, mogę przygotować rozwiązanie w formie [aplikacji Next.js](/uslugi/aplikacje-nextjs).

Nie ustalam z góry jednego terminu dla wszystkich projektów. Innej pracy wymaga narzędzie korzystające z uporządkowanych dokumentów, a innej system połączony z kilkoma źródłami danych.

Dopiero po rozpoznaniu przygotowuję zakres, wycenę i termin. Samo wdrożenie rozszerzam po pozytywnym teście, a nie przed sprawdzeniem podstawowego pomysłu.

## Jak działa asystent AI na dokumentach firmy?

Załóżmy, że pracownik regularnie szuka informacji w instrukcjach, regulaminach, procedurach lub materiałach produktowych. Dokumenty istnieją, ale znalezienie właściwego fragmentu zajmuje czas. W takim przypadku można zbudować asystenta AI na dokumentach firmy.

Wykorzystuję do tego rozwiązanie nazywane RAG. Polega ono na tym, że system najpierw wyszukuje fragmenty dokumentów związane z pytaniem, a dopiero później przekazuje je modelowi, który przygotowuje odpowiedź.

Zamiast odpowiadać wyłącznie na podstawie informacji zapamiętanych podczas treningu, model dostaje treść z Twoich materiałów. Odpowiedź może też zawierać wskazanie dokumentu, z którego pochodzi informacja.

Przykładowo pracownik pyta o warunki określone w wewnętrznej procedurze. System znajduje odpowiedni fragment, przygotowuje odpowiedź i wskazuje źródło. Dzięki temu pracownik może zweryfikować ją bez ponownego przeszukiwania całego zbioru plików.

RAG nie gwarantuje jednak poprawnej odpowiedzi. Model nadal może źle zinterpretować fragment, pominąć wyjątek albo połączyć informacje, które nie powinny być łączone.

Znaczenie ma również jakość dokumentów. Jeśli w bazie znajdują się sprzeczne instrukcje, stare wersje plików i nieaktualne informacje, samo podłączenie AI nie rozwiąże problemu.

Dlatego przed budową asystenta sprawdzam strukturę materiałów, sposób ich aktualizowania oraz to, czy system powinien odmówić odpowiedzi, kiedy nie znajdzie odpowiedniego źródła.

## Jak sprawdzam, czy AI podaje prawdziwe informacje?

Model językowy potrafi przygotować przekonująco brzmiący tekst, nawet gdy nie ma wystarczających danych. Dlatego nie traktuję płynnej odpowiedzi jako dowodu jej poprawności.

Dobrym przykładem jest mój serwis cojestpolskie.pl, zbudowany w Astro. Z jednej bazy powstaje w nim ponad 1700 podstron opisujących ponad 900 marek. AI pomaga mi zbierać informacje o właścicielach marek, ale każdy wynik sprawdzam w KRS i CRBR przed publikacją. Model wykonuje część researchu, natomiast weryfikacja informacji pozostaje po mojej stronie.

Podobną zasadę stosuję we własnych procesach przygotowywania treści. Tekst powstaje z faktów zebranych ze źródłami, a liczby wymagające szczególnej dokładności sprawdzam przed opublikowaniem.

Innym przykładem jest zbudowane przeze mnie narzędzie GEO dla agencji SEO. Co tydzień zadaje te same pytania czterem modelom: ChatGPT, Perplexity, Gemini i Claude. Następnie mierzy, czy w odpowiedziach pojawia się marka klienta.

Przy tym projekcie istotna okazała się różnica między odpowiedziami z wyszukiwaniem w sieci i bez niego. Modele korzystające wyłącznie z wiedzy treningowej mogą nie znać mniejszych polskich marek. Dlatego sposób pomiaru trzeba dopasować do tego, jak rzeczywiście pytają użytkownicy, zamiast wyciągać wnioski z przypadkowo skonfigurowanych testów.

W zleceniu dotyczącym AI stosuję tę samą zasadę: przygotowuję próbkę pytań lub dokumentów, ustalam oczekiwane odpowiedzi i sprawdzam, gdzie model się myli. Tam, gdzie błędna informacja może mieć poważne konsekwencje, dodaję obowiązkową kontrolę człowieka.

## Co dzieje się z danymi firmy i jak uwzględniam RODO?

Przy wdrożeniu AI najpierw ustalam, jakie informacje model rzeczywiście musi otrzymać. Jeśli zadanie polega na rozpoznaniu tematu maila, być może wystarczy fragment wiadomości. Nie ma powodu automatycznie przesyłać całej historii korespondencji z klientem.

Gdy korzystam z API OpenAI lub Anthropic, potrzebne dane są przekazywane do wybranego dostawcy w celu ich przetworzenia. Jest to inne rozwiązanie niż ręczne wklejanie informacji do zwykłego czatu, ale samo użycie API nie oznacza, że dane nigdy nie opuszczają firmy.

Przed uruchomieniem systemu ustalam, które dane mogą być przesyłane, czy można ograniczyć ich zakres lub usunąć identyfikatory, a także jakie zasady przechowywania i przetwarzania stosuje dostawca.

Jeżeli proces obejmuje dane osobowe, trzeba uwzględnić RODO. W zależności od sposobu przetwarzania może być potrzebna umowa powierzenia danych. Znaczenie mają też lokalizacja przetwarzania, ewentualne transfery poza Europejski Obszar Gospodarczy i zakres dostępu do informacji.

Osobną kwestią są obowiązki wynikające z unijnego rozporządzenia AI Act, czyli rozporządzenia 2024/1689. Przykładowo art. 50 dotyczy przejrzystości określonych systemów AI, w tym informowania użytkownika o rozmowie z AI, chyba że wynika to jasno z okoliczności.

Nie każde zastosowanie AI w małej firmie podlega takim samym obowiązkom. Znaczenie ma przeznaczenie systemu, jego wpływ na ludzi i sposób wykorzystania. Klasyfikację oraz właściwe wymagania trzeba sprawdzić dla konkretnego przypadku.

Przy wdrożeniu przygotowuję więc techniczny przepływ danych i zasady działania systemu tak, żeby było wiadomo, jakie informacje trafiają do modelu, kto ma do nich dostęp i na jakim etapie potrzebna jest kontrola.

## Od czego zależy koszt wdrożenia i późniejszego utrzymania?

Koszt wdrożenia AI nie sprowadza się do opłaty za model. Samo wysłanie pytania przez API to tylko fragment rozwiązania.

Największe znaczenie ma liczba źródeł danych i integracji. System, który korzysta z jednego uporządkowanego zbioru dokumentów, będzie wymagał innego zakresu pracy niż narzędzie połączone z pocztą, bazą klientów i wewnętrzną aplikacją.

Drugi ważny czynnik to kontrola. Jeśli wynik ma być jedynie szkicem do poprawienia przez pracownika, można zaprojektować prostszy proces. Jeżeli system ma wykonywać kolejne działania, trzeba dokładniej określić warunki, wyjątki, obsługę błędów i momenty wymagające zatwierdzenia.

Na zakres prac wpływa również stan danych. Nieaktualne dokumenty, sprzeczne informacje czy brak jednolitych zasad ich zapisywania mogą wymagać uporządkowania jeszcze przed budową narzędzia.

Po uruchomieniu pojawiają się koszty bieżące. W przypadku API OpenAI i Anthropic zależą one między innymi od wybranego modelu, liczby zapytań i ilości przetwarzanego tekstu. Dochodzić mogą hosting, baza danych, monitoring oraz utrzymanie połączeń z innymi systemami.

Nie podaję jednej kwoty ani terminu dla wszystkich projektów. Po poznaniu procesu mogę ocenić, co trzeba zbudować, jakie dane przygotować i jakie elementy będą generowały koszty podczas codziennego używania.

## Jak mierzę, czy wdrożenie AI rzeczywiście pomaga?

Przed zbudowaniem prototypu potrzebuję punktu odniesienia. Jeśli dzisiaj pracownik obsługuje wiadomość ręcznie, sprawdzam, ile trwa ta czynność i jakie błędy się zdarzają. Bez tego trudno później ocenić, czy narzędzie rzeczywiście poprawiło proces.

W zależności od zadania mierzę między innymi:

- czas potrzebny na wykonanie jednej sprawy przed użyciem AI i po nim,
- liczbę poprawnych odpowiedzi na przygotowanej próbce,
- liczbę wyników wymagających ręcznej korekty,
- zgodność informacji z dokumentami źródłowymi,
- liczbę błędów i przypadków przekazanych pracownikowi,
- koszt obsługi zapytań przez API.

Nie każdy proces wymaga tych samych wskaźników. Dla asystenta korzystającego z dokumentów najważniejsze może być znalezienie poprawnej informacji i wskazanie jej źródła. Przy obsłudze maili liczy się również poprawność klasyfikacji oraz czas potrzebny pracownikowi na sprawdzenie szkicu. Przy tworzeniu treści oceniam, ile poprawek wymaga tekst przed publikacją.

Wyniki sprawdzam na rzeczywistych przykładach, również takich, które nie pasują do najprostszego scenariusza. Dzięki temu można zauważyć sytuacje, w których system działa poprawnie tylko przy idealnie przygotowanych danych.

Już na etapie prototypu ustalam też warunki dalszego rozwoju. Jeśli AI regularnie podaje błędne informacje, wymaga ręcznego wykonywania większości pracy albo jego utrzymanie nie jest uzasadnione uzyskanym efektem, nie proponuję automatycznie rozbudowy.

Przy wdrożeniu wykorzystuję wyniki testów do ustalenia, które zadania można powierzyć systemowi, które wymagają zatwierdzenia przez człowieka i czy warto podłączać kolejne dokumenty lub narzędzia firmy.