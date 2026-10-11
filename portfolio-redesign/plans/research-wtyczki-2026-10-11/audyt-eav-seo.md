# Audyt EAV + SEO: /uslugi/tworzenie-wtyczek-wordpress (11.10.2026)

Encja główna: usługa „tworzenie wtyczek WordPress” (wtyczka WordPress na zamówienie). Predykat: zamówić, zlecić, wycenić, napisać, zintegrować, zautomatyzować.

## Atrybuty encji i stan pokrycia
| Atrybut | Wartości, które mamy (fakty) | Stan w tekście |
|---|---|---|
| Rodzaj wtyczki | SEO i GEO (widoczność w AI), automatyzacje, integracje przez API, funkcje WooCommerce, treści i UX, bezpieczeństwo | tylko ogólnie („automatyzację, dodatkowe funkcje”); GEO nie pada wcale |
| Systemy, z którymi łączę | REST API WooCommerce, BaseLinker, Google Merchant (feed), GA4 z Consent Mode, Yoast/Rank Math | prawie brak nazw |
| Technologia | PHP, haki WordPressa (akcje i filtry), REST API, Action Scheduler, WP-CLI, mu-plugin | PHP nie pada; reszta częściowo w bloku |
| Dowód | ponad 40 wtyczek w 9 serwisach, LumiKids, Kosmoteka, Mebloweporady | LumiKids powtórzony 5 razy, liczby z archiwum nie ma w tekście |
| Zgodność z aktualizacjami | haki zamiast przeróbek cudzego kodu, testy po aktualizacjach | jest (FAQ, blok) |
| Wydajność | skrypt ładowany tylko tam, gdzie potrzebny; cache 6 h na stronie głównej Mebloweporady | ogólnik w FAQ |
| Bezpieczeństwo | uprawnienia, nonce, escapowanie, klucze API z minimalnymi uprawnieniami | jest w bloku |
| Własność kodu | pliki u klienta, repozytorium, można przekazać innemu programiście | dwa FAQ mówią to samo |
| Koszt i termin | główny czynnik: złożoność logiki i liczba połączeń; termin po rozpoznaniu | jest |
| Gwarancja i opieka | 60 dni, potem opieka w abonamencie bez umowy na rok | jest |
| Miejsce | Wrocław, zdalnie Polska i Niemcy | lead + meta |

## Problemy SEO / EAV
1. Korzyści to ogólniki bez wartości („Funkcje dopasowane do Twojej firmy”, „Mniej ręcznej obsługi”). Każda korzyść ma mieć konkretną wartość (liczba, nazwa systemu, mechanizm).
2. Słabe predykaty: dominuje „mogę przygotować”, „tworzę”. Brakuje „zamów”, „zleć”, „wycenię”, „połączę”, „zautomatyzuję”.
3. Brak atrybutu GEO / widoczność w AI, choć to realna kategoria (detektor botów AI, FAQPage na 951 stronach, schema produktów).
4. Brak słowa PHP i nazw systemów (BaseLinker, Google Merchant, GA4), które budują pole semantyczne.
5. Powtórzenia: LumiKids w intro, w case study, w FAQ i w bloku. W tekście użyć raz, resztę oprzeć na liczbie i innych serwisach.
6. FAQ „Czy kod będzie mój?” i „Czy mogę przekazać wtyczkę innemu programiście?” dublują się. Połączyć w jedno, w wolne miejsce pytanie o GEO/AI albo „Czy dopiszesz funkcję bez przebudowy strony?”.
7. Blok, sekcja 2 („Jakie funkcje można zrobić jako wtyczkę”), dubluje nowe archiwum ze spisem 20 wtyczek. Zamienić na sekcję „Wtyczki pod widoczność w Google i w AI (GEO)”.
8. Blok dryfuje w tryb poradnika („Nie musisz znać WordPressa”). Każda sekcja ma się kończyć zdaniem z predykatem zakupowym (np. „Przy wycenie sprawdzam…”, „Zlecając wtyczkę, dostajesz…”).
9. Frazy: „dedykowana wtyczka WordPress” i „programista WordPress” warto mieć raz na stronie usługi (nie tylko w bloku); „tworzenie wtyczek WordPress Wrocław” raz w leadzie lub intro.
