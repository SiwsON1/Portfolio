Użyj skilla Mistrz Blogowania.

Zadanie: napisz rozszerzenie strony usługowej (nie wpis blogowy) „Sklepy internetowe WooCommerce” na stronie freelancera web developera Marcina Siwonia z Wrocławia (marcinsiwonia.pl). Pisz w pierwszej osobie jako Marcin. Fraza główna: „sklepy WooCommerce Wrocław”, wspierające: „sklep internetowy WooCommerce”, „wdrożenie sklepu WooCommerce”. Czytelnik: właściciel małej lub średniej firmy, nietechniczny, porównuje wykonawców.

Na stronie jest już krótki opis usługi (lead, 4 korzyści, proces w 5 krokach, 6 pytań FAQ). Twój tekst to blok „poradnik” pod spodem. Nie powtarzaj tego, co już jest (lista integracji, proces 5 kroków).

## Struktura, której potrzebuję (dokładnie ten format Markdown)

# [nagłówek bloku, zawiera frazę „sklep WooCommerce”]
[intro: 2 akapity, pierwsze zdanie odpowiada wprost, dla kogo jest ten poradnik]

### [sekcja 1] … ### [sekcja 7 lub 8]
Każda sekcja: 1-3 akapity, w części sekcji krótka lista punktowana (nie w każdej). Tematy sekcji (kolejność możesz zmienić, nagłówki napisz po swojemu, konkretne):
1. Kiedy WooCommerce, a kiedy Shopify, Shoper lub PrestaShop (abonament SaaS a własny sklep, własność danych, koszty stałe, kiedy WooCommerce się nie sprawdzi: bardzo duży katalog, multistore; wtedy zwykle proponuję inne rozwiązanie)
2. Od czego zależy koszt sklepu WooCommerce (BEZ żadnych kwot: liczba produktów i wariantów, własny motyw czy gotowy, integracje, B2B, migracja, wersje językowe, dane produktowe, treści) oraz koszty stałe po starcie (domena, hosting, wtyczki płatne, opieka) bez kwot
3. Dane produktowe przed startem: kategorie, atrybuty, warianty, zdjęcia, import z CSV/XML lub z hurtowni, kto co przygotowuje
4. Karta produktu i koszyk, które sprzedają (tabele rozmiarów, skład, dostępność, dosprzedaż, krótki checkout, mobile)
5. Wymogi prawne sklepu: Omnibus, GPSR, RODO, regulamin i prawo odstąpienia (fakty niżej)
6. Migracja i przejęcie sklepu po innym wykonawcy (przekierowania 301, co sprawdzam na starcie)
7. B2B i sprzedaż za granicę (ceny dla grup klientów, minimalne zamówienia, wersje językowe)
8. Aktualizacje, kopie i środowisko testowe (staging) po starcie, link do opieki

Po sekcjach:

## FAQ
6 nowych pytań z odpowiedziami (2-4 zdania każda), w formacie:
**P: pytanie?**
O: odpowiedź.
Pytania: Czy korzystasz z gotowych motywów WooCommerce? Czy WooCommerce sprawdzi się w sprzedaży B2B? Czy możesz przejąć sklep WooCommerce po innym wykonawcy? Czy sklep może mieć kilka wersji językowych i sprzedawać za granicę? Kiedy WooCommerce nie będzie dobrym wyborem? A jeśli mam mały asortyment?

## Twarde zasady
- Długość bloku: 1300-1700 słów (bez FAQ).
- ZERO kwot i cen w złotych (decyzja właściciela: bez cen na stronach sprzedażowych). Terminy wolno podać tylko te z faktów.
- Nie wymyślaj faktów o Marcinie: liczby klientów, opinii, gwarancji, wyników sprzedaży, nazw klientów innych niż niżej.
- Bez em-dashy i półpauz w zdaniach (używaj przecinków, dwukropków, nawiasów). Nagłówki zdaniowe (wielka litera tylko na początku).
- Linki wstaw w Markdown dokładnie w tej postaci, każdy maksymalnie raz, łącznie 3-4:
  [integrację WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker)
  [opiekę nad sklepem](/uslugi/opieka-wordpress)
  [sklep LumiKids](/projekty/lumikids)
  [Kosmoteka](/projekty/kosmoteka)
- Bez podsumowania na końcu, bez „Podsumowując”, bez wezwania do kontaktu (strona ma własne CTA).

## Fakty o Marcinie i jego sklepach (tylko z tego korzystaj)
- Freelancer z Wrocławia, pracuje zdalnie z klientami z całej Polski i z Niemiec, kod pisze sam, od 2020 roku.
- Robi sklepy na WordPressie z WooCommerce na własnym motywie (bez Elementora w nowych projektach).
- Integracje, które wdraża: Przelewy24, Stripe, BLIK, Apple Pay, InPost Paczkomaty, DPD, Furgonetka, Allegro, BaseLinker, faktury (Fakturownia, wFirma, iFirma), GA4 enhanced ecommerce, Google/Meta Pixel.
- Terminy: mniejszy sklep 6-8 tygodni od warsztatu do startu; średni z B2B, wersjami językowymi i migracją 10-14 tygodni.
- Wydajność: LiteSpeed cache, Cloudflare CDN, Redis object cache, cel LCP poniżej 2 s. Przy bardzo dużym ruchu lub katalogu proponuje headless (Next.js jako front, WooCommerce jako zaplecze).
- Migracje: z Shopera, IdoSell, Shopify; eksport produktów, zamówień, klientów, przekierowania 301.
- Produkty można dodawać samemu w panelu i masowo z CSV/XML.
- Kosmoteka (kosmoteka.pl): sklep z teleskopami, lornetkami i mikroskopami na WooCommerce; autorski design kart produktów, poradniki zakupowe, integracja z hurtownią, bramki płatności i wysyłki, optymalizacja pod konwersję i SEO.
- LumiKids (lumikids.com.pl): sklep z odzieżą dziecięcą i młodzieżową szytą w Turcji; sprzedaje równolegle przez Allegro, wysyłka w 24 h od zaksięgowania wpłaty; Marcin zrobił redesign frontu, landingi sezonowe, karty produktów z tabelami rozmiarów i składem tkanin, architekturę kategorii pod frazy zakupowe, optymalizację Core Web Vitals na hostingu współdzielonym, schema.org produktów, poprawki koszyka na mobile (tam jest większość ruchu).

## Fakty prawne (sprawdzone)
- Omnibus: od 1 stycznia 2023 r. w Polsce przy informacji o obniżce ceny trzeba podać najniższą cenę z 30 dni przed obniżką (UOKiK zaleca formułę „najniższa cena z 30 dni przed obniżką”). Sklep musi to liczyć i pokazywać automatycznie.
- GPSR, rozporządzenie UE 2023/988 o ogólnym bezpieczeństwie produktów: stosowane od 13 grudnia 2024 r., zastąpiło dyrektywę 2001/95/WE. Każda oferta online musi zawierać dane producenta (nazwa, adres, kontakt, np. e-mail lub strona) oraz ostrzeżenia i informacje o bezpieczeństwie, jeśli dotyczą produktu.
- RODO: zgody, polityka prywatności, zgoda na cookies przed uruchomieniem analityki.
- Konsument kupujący przez internet ma co do zasady 14 dni na odstąpienie od umowy bez podania przyczyny; regulamin sklepu musi to opisywać.
