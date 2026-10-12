Użyj skilla Mistrz Blogowania.

ZADANIE: przepisz stronę usługi „Wdrożenia AI w firmie” (marcinsiwonia.pl/uslugi/wdrozenia-ai) i jej blok poradnikowy. Obecna treść jest w załączonym pliku obecna-wdrozenia-ai.json (page = strona, block = blok). Pisz po ludzku, pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel małej lub średniej firmy, który słyszy o AI, ma powtarzalną pracę na dokumentach, mailach albo treściach i nie wie, od czego zacząć ani czy jego dane są bezpieczne.

FRAZA GŁÓWNA ZOSTAJE: „wdrożenia AI w firmie” (METATITLE i H1 przepisz BEZ ZMIAN z pliku). Frazy wspierające: wdrożenie AI, automatyzacja z AI, AI w małej firmie, asystent AI na dokumentach firmy, RAG.

## Audyt EAV (popraw te punkty)
Encja: usługa zaprojektowania i zbudowania procesu z AI dla konkretnego zadania w firmie. Predykaty: przeanalizuję proces, zbuduję, połączę z dokumentami i systemami, zmierzę, wdrożę.
1. Ludzki ton: zacznij od konkretnych zadań (odpowiedzi z dokumentów, klasyfikacja maili, szkice odpowiedzi, treści), nie od technologii.
2. Konkrety z realizacji (FAKTY niżej), z liczbami. Narzędzie GEO opisuj BEZ nazwy klienta, jako „narzędzie GEO dla agencji SEO”.
3. Atrybuty z wartościami: API OpenAI i Anthropic; RAG, czyli odpowiedzi oparte na Twoich dokumentach z podaniem źródła; człowiek zatwierdza wynik tam, gdzie błąd kosztuje; pomiar na próbce przed pełnym wdrożeniem (ile odpowiedzi poprawnych, ile czasu oszczędza); koszt miesięczny zależny od liczby zapytań do API; dane wysyłane przez API (nie przez zwykły czat), z ustaleniem, jakie dane w ogóle wolno wysłać.
4. Termin: po rozpoznaniu, bez stałej liczby. Koszt bez kwot: główny czynnik to liczba źródeł danych i integracji oraz to, ile kontroli człowieka wymaga proces.
5. Uczciwie: jeśli wystarczy zwykła automatyzacja bez AI, mówię to. AI nie zastąpi pracownika, który podejmuje decyzje.
6. Blok: jedna tabela „zadanie, czy AI ma sens, gdzie musi sprawdzić człowiek”.
7. Bez statystyk rynkowych, obietnic „oszczędzisz X godzin” i straszenia.

# FAKTY (poza fakty-kanoniczne.md)
- cojestpolskie.pl (mój serwis, Astro): ponad 900 marek i ponad 1700 podstron z jednej bazy. AI robi research właścicieli marek, ale każdy wynik sprawdzam w KRS i CRBR (rejestr beneficjentów rzeczywistych), zanim trafi na stronę.
- Narzędzie GEO dla agencji SEO (zbudowane przeze mnie, Next.js): co tydzień zadaje te same pytania kilku modelom (ChatGPT, Perplexity, Gemini, Claude) i mierzy, czy wymieniają markę klienta. Lekcja: bez włączonego wyszukiwania w sieci modele odpowiadają z wiedzy treningowej i nie znają małych polskich marek, więc pomiar trzeba ustawić tak, jak pytają prawdziwi użytkownicy.
- Własne procesy treściowe z AI: tekst powstaje z faktów zebranych ze źródłami, a ryzykowne liczby sprawdza człowiek przed publikacją.

## Linki
Strona, łącznie 2: [cojestpolskie.pl](/projekty/cojestpolskie), [artykule o wdrożeniach AI](/blog/wdrozenia-ai-w-malych-firmach)
Blok, łącznie 1: [aplikacji Next.js](/uslugi/aplikacje-nextjs)

## FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak)
=== STRONA: wdrozenia-ai ===
METATITLE: (bez zmian, przepisz z pliku)
METADESCRIPTION: … (140-155 znaków, z frazą główną)
H1: (bez zmian, przepisz z pliku)
LEAD: … (1-2 zdania; drugie dokładnie „Pracuję z Wrocławia, zdalnie z firmami z całej Polski i z Niemiec.”)
INTRO:
[3 akapity]
KORZYŚCI:
- Tytuł: … | Treść: … (dokładnie 4, jak obecne bullets)
PROCES:
- Tytuł: … | Treść: … (dokładnie 3 kroków, jak obecnie, tytuły bez numeracji)
FAQ:
- P: … | O: … (dokładnie 8: zachowaj sens obecnych 4 i dodaj: ile trwa wdrożenie, czy wystarczy firmowe konto w ChatGPT, czym jest RAG, jak sprawdzasz, czy AI nie zmyśla)
CTA: … (jedno krótkie zdanie)

=== BLOK: wdrozenia-ai ===
# [nagłówek bloku z frazą wspierającą]
[intro: 2 akapity]
## [sekcja] (6-7 sekcji, nagłówki zdaniowe bez numerów; w części sekcji lista „- …”; jedna tabela)

## Twarde zasady
- Długość: strona 650-900 słów bez FAQ, blok 1300-1700 słów.
- Zero kwot w złotych, zero statystyk rynkowych.
- Nie wymyślaj faktów, liczb, opinii ani wyników. Tylko to, co jest w FAKTACH, w fakty-kanoniczne.md i w obecnej treści.
- Bez em-dashy i półpauz w zdaniach i w meta.
- Polskie słowa. Żargon tylko z krótkim wyjaśnieniem, co daje właścicielowi firmy.
- Jeden głos: „ja” i „Ty”. Bez frazesów, bez podsumowań.
- Linki Markdown dokładnie w podanej postaci, każdy najwyżej raz; w INTRO, KORZYŚCIACH i BLOKU (w FAQ bez linków). Nie gub linków.
- Każda sekcja bloku kończy się zdaniem w kontekście zlecenia (np. „Przy wdrożeniu ustawiam…”), żeby blok nie dryfował w ogólny poradnik.
