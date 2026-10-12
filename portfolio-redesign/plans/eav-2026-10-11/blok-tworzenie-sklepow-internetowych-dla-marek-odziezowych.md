# Sklep internetowy dla marki odzieżowej: jak wybrać platformę i przygotować sprzedaż

Sklep internetowy z odzieżą powinien pozwalać klientowi wybrać właściwy rozmiar, sprawdzić dostępność konkretnego koloru i złożyć zamówienie bez dodatkowych pytań. Dla Ciebie równie ważne jest to, co dzieje się po zakupie. Stany magazynowe muszą zgadzać się między sklepem a Allegro, zamówienia trafiać do właściwego systemu, a nowe kolekcje powinny dać się publikować bez przebudowy całej strony.

Przy projektowaniu sklepu dla marki odzieżowej patrzę więc szerzej niż na sam wygląd. Sprawdzam strukturę katalogu, sposób prezentowania wariantów produktu, integracje i obsługę zamówień. Inaczej przygotuję sklep dla niewielkiej marki wypuszczającej sezonowe kolekcje, a inaczej dla firmy, która ma rozbudowany katalog i prowadzi sprzedaż w kilku kanałach. Poniżej pokazuję, jakie decyzje podejmuję przed wdrożeniem i jak rozwiązuję konkretne problemy na przykładzie LumiKids.

## WooCommerce, Shopify czy Shoper: którą platformę wybrać dla marki odzieżowej?

Nie każda marka potrzebuje sklepu pisanego na zamówienie. Jeśli masz niewielki katalog, standardowe warianty i chcesz korzystać z gotowych rozwiązań, Shopify albo Shoper mogą wystarczyć. Obie platformy działają w modelu abonamentowym, a zakres zmian zależy od dostępnych funkcji, aplikacji i integracji.

WooCommerce daje większą swobodę. Mogę zaprojektować własną kartę produktu, zmienić sposób wybierania rozmiarów, przygotować nietypowe strony kolekcji i dopasować panel administracyjny do Twojego sposobu pracy. Sklep działa na WordPressie, na wybranym hostingu, a jego rozwój nie jest ograniczony wyłącznie do funkcji jednego dostawcy.

| Kryterium | WooCommerce | Shopify | Shoper |
| --- | --- | --- | --- |
| Sposób działania | Własny sklep na WordPressie i hostingu | Platforma abonamentowa | Platforma abonamentowa |
| Utrzymanie | Hosting, domena i ewentualne płatne rozszerzenia | Abonament i ewentualne aplikacje | Abonament i ewentualne dodatki |
| Projekt graficzny | Duża swoboda tworzenia własnych szablonów | Zmiany w ramach motywu i możliwości platformy | Zmiany w ramach dostępnych szablonów i funkcji |
| Warianty produktu | Możliwość własnej konfiguracji rozmiarów, kolorów i ich prezentacji | Obsługa wariantów w ramach funkcji platformy | Obsługa wariantów w ramach funkcji platformy |
| Allegro i systemy zamówień | Integracje bezpośrednie lub przez BaseLinker | Zależnie od dostępnych aplikacji | Zależnie od dostępnych integracji |
| Rozbudowa funkcji | Własny kod i rozszerzenia | Aplikacje i możliwości udostępnione przez platformę | Dodatki i możliwości udostępnione przez platformę |

Przy nowych projektach WooCommerce tworzę własny motyw WordPress bez Elementora, Divi i podobnych kreatorów. Sekcje edytowalne przygotowuję przy pomocy ACF, czyli pól w panelu odpowiadających konkretnym elementom projektu. Możesz zmienić zdjęcie kolekcji, opis lub produkty na stronie, nie ingerując w układ.

Przy większym katalogu lub bardziej złożonych wymaganiach rozważam też Next.js w architekturze headless, gdzie interfejs sklepu działa oddzielnie od systemu zarządzania produktami. Nie proponuję jednak takiego rozwiązania tylko dlatego, że jest bardziej rozbudowane. Platformę dobieram do rzeczywistych potrzeb Twojej marki, liczby wariantów i sposobu obsługi sprzedaży.

## Tabela rozmiarów musi odpowiadać konkretnemu ubraniu

Klient ogląda bluzę w rozmiarze M, ale nie wie, czy będzie luźna, czy dopasowana. Przechodzi do tabeli rozmiarów i widzi wyłącznie obwód klatki piersiowej, bez informacji, czy chodzi o wymiary ciała, czy samego ubrania. Taka tabela nie rozwiązuje problemu.

W sklepie odzieżowym tabela rozmiarów powinna jasno pokazywać, co zostało zmierzone i w jaki sposób. Przy bluzie mogą być istotne szerokość pod pachami i długość rękawa, przy spodniach pas i długość nogawki, a przy sukience również długość całkowita. Jeśli różne fasony mają inną rozmiarówkę, nie przypisuję im jednej uniwersalnej tabeli.

Na karcie produktu przewiduję miejsce na:

- wymiary ubrania i krótką instrukcję mierzenia,
- informację o fasonie, na przykład dopasowanym lub luźnym,
- skład tkaniny i istotne właściwości materiału,
- wzrost modelki lub modela oraz prezentowany rozmiar, jeśli marka ma takie dane,
- zdjęcia poszczególnych kolorów i charakterystycznych detali.

W LumiKids, sklepie z odzieżą dziecięcą i młodzieżową marek Sówka i OliLeo, przebudowałem karty produktów, dodając tabele rozmiarów i informacje o składzie tkanin. Sklep oferuje między innymi komplety, bluzy, sukienki i ubrania na komunię, dlatego sposób prezentacji wymiarów trzeba dopasować do różnych typów ubrań.

Ważna jest też sama dostępność. W LumiKids występował błąd, przez który produkt wyświetlał się jako dostępny, mimo że wszystkie jego rozmiary miały zerowy stan magazynowy. Sklep odczytywał flagę dostępności produktu głównego zamiast stanów poszczególnych wariantów.

Zmieniłem logikę tak, aby dostępność wynikała z wariantów. Wyprzedany rozmiar pozostał na liście, ale jest wyszarzony i przekreślony. Poprawiłem również komunikat dodania do koszyka, który pojawia się dopiero po rzeczywistym dodaniu produktu.

Przy Twoim wdrożeniu konfiguruję i testuję osobno rozmiary, kolory, ich stany magazynowe oraz zachowanie koszyka.

## Kolekcje, dropy i przedsprzedaż potrzebują własnych stron

Nowa kolekcja nie musi być kolejną kategorią z siatką produktów. Jeśli przygotowujesz premierę na Instagramie, możesz kierować odbiorców na stronę przedstawiającą całą kolekcję: zdjęcia, najważniejsze modele, dostępne kolory i przejścia do konkretnych produktów.

Projektuję takie strony w sposób umożliwiający samodzielną edycję. Możesz zmieniać materiały sezonowe, kolejność produktów i treści bez zamawiania nowego projektu przy każdej premierze.

Przy planowaniu dropów rozdzielam trzy sytuacje:

- zapowiedź produktu, który nie jest jeszcze dostępny do zakupu,
- rozpoczęcie sprzedaży z aktywnym wyborem wariantów,
- wyprzedanie produktu lub konkretnego rozmiaru.

Jeśli prowadzisz przedsprzedaż, klient musi wiedzieć przed zakupem, kiedy produkt zostanie wysłany. Trzeba również ustalić, co zrobić, gdy w jednym zamówieniu znajdą się ubrania dostępne od ręki i modele przedsprzedażowe. To wpływa nie tylko na kartę produktu, ale także na koszyk, komunikaty i realizację zamówień.

Osobną kwestią są strony odpowiadające konkretnym zapytaniom zakupowym. W LumiKids przygotowałem 12 stron rozmiarowych dla kompletów i spodni dziewczęcych w rozmiarach 134-164. Wynikało to z obserwacji podpowiedzi Google dla fraz dziewczęcych. Dla chłopięcych nie występował taki sam wzorzec.

Nie oznacza to, że każda kombinacja kategorii i rozmiaru potrzebuje własnego adresu. Przy wdrożeniu analizuję strukturę katalogu i przygotowuję tylko te strony kolekcji oraz rozmiarów, które mają uzasadnienie w ofercie i sposobie wyszukiwania produktów.

## Warianty i stany magazynowe muszą zgadzać się ze sprzedażą na Allegro

Sprzedajesz ostatni komplet w rozmiarze 146 na Allegro, ale własny sklep nadal pokazuje go jako dostępny. Klient składa następne zamówienie i dopiero wtedy okazuje się, że produktu zabrakło. Źródłem problemu nie musi być sam sklep. Często trzeba sprawdzić, który system odpowiada za stan magazynowy i w jakim kierunku przekazywane są informacje.

Przed integracją ustalam, gdzie znajduje się główne źródło stanów, cen i danych produktowych. Sprawdzam też sposób powiązania wariantów z ofertami Allegro. Nie wystarczy zsynchronizować produktu głównego, jeśli poszczególne rozmiary mają różną dostępność.

Przy [integracji WooCommerce z BaseLinkerem](/uslugi/integracja-woocommerce-z-baselinker) konfiguruję przepływ danych zgodnie z obsługiwanymi możliwościami systemów. Testuję również statusy zamówień, ponieważ ich nieprawidłowa zmiana może mieć konsekwencje dla realizacji wysyłki.

W LumiKids znalazłem problem dotyczący zamówień za pobraniem. Integracja z BaseLinkerem cofała ich statusy, przez co WooCommerce anulował zamówienia. Przyczynę ustaliłem na podstawie logów, czyli zapisów działania systemu, a następnie zablokowałem niepożądane zachowanie małą, własną wtyczką.

To przykład sytuacji, której nie rozwiąże zmiana kolorów przycisków ani instalacja kolejnego szablonu. Przy Twoim wdrożeniu sprawdzam rzeczywisty przepływ zamówień i stanów między używanymi kanałami sprzedaży.

## Sklep z ubraniami musi być wygodny na telefonie

Klient otwiera link z Instagrama i chce obejrzeć sukienkę. Najpierw musi znaleźć zdjęcia, później rozmiar, następnie tabelę wymiarów i informację o dostawie. Jeżeli elementy nachodzą na siebie albo zasłaniają przycisk zakupu, nawet atrakcyjny projekt staje się niewygodny.

W LumiKids większość ruchu pochodziła z telefonów. Jednym z problemów była wyszukiwarka, która ucinała pole wpisywania. Poprawiłem ją, aby użytkownik mógł wygodnie wyszukiwać ubrania na małym ekranie.

Przy projektowaniu mobilnym sprawdzam nie tylko wygląd strony głównej. Ważne są również filtry, zdjęcia, wybór wariantów, komunikaty dostępności i cały proces zamówienia. Dbam o to, aby przycisk dodania do koszyka działał dopiero po prawidłowym wybraniu dostępnego produktu.

Osobno zajmuję się wydajnością. Zdjęcia kolekcji potrzebują dobrej jakości, ale zbyt ciężkie pliki mogą opóźniać wyświetlanie strony. Optymalizuję obrazy, kod i ładowanie najważniejszych elementów. Przed oddaniem sklepu celem jest Lighthouse 90+ na telefonie oraz LCP poniżej 2,5 sekundy. LCP to czas wyświetlenia największego widocznego elementu strony.

Konfiguruję również dane strukturalne produktów, mapę strony, Search Console i pomiar GA4 uruchamiany po zgodzie na cookies. Dzięki temu sklep ma przygotowane podstawy techniczne do monitorowania wyszukiwania i ścieżki zakupowej, bez obiecywania określonych pozycji w Google.

## Promocje, zwroty i dane produktu trzeba uwzględnić przed uruchomieniem

Jeżeli planujesz promocje kolekcji, sposób prezentacji cen powinien być przewidziany już podczas projektowania kart produktów. Przy komunikowaniu obniżki obowiązuje zasada pokazywania najniższej ceny z 30 dni przed jej wprowadzeniem, wynikająca z przepisów określanych jako Omnibus.

Przygotowuję odpowiednie miejsce na taką informację, zarówno na karcie produktu, jak i w uzgodnionych widokach promocyjnych. Nie traktuję jej jako przypadkowego dopisku pod ceną.

Podobnie wygląda obsługa zwrotów. Konsument kupujący przez internet co do zasady ma 14 dni na odstąpienie od umowy, z określonymi prawnie wyjątkami. Sklep powinien udostępniać zrozumiałą procedurę, formularz i wymagane informacje. Mogę przygotować ich prezentację oraz powiadomienia, natomiast treść dokumentów prawnych musi zostać przez Ciebie zatwierdzona, samodzielnie lub po konsultacji z prawnikiem.

Trzeba też uwzględnić GPSR, czyli unijne przepisy dotyczące ogólnego bezpieczeństwa produktów, obowiązujące od 13 grudnia 2024 roku. Oferta internetowa powinna przewidywać prezentację wymaganych danych producenta, a w odpowiednich przypadkach również innych podmiotów odpowiedzialnych i informacji dotyczących bezpieczeństwa.

W sklepie odzieżowym znaczenie mają ponadto informacje o składzie materiałowym oraz właściwe oznaczenia produktów. Przy wdrożeniu przygotowuję pola i układ kart produktów do wyświetlania danych, które dostarczasz dla swojej oferty, a zakres obowiązków prawnych ustalasz na podstawie swojej sytuacji.

## Koszt i termin wdrożenia zależą od wariantów, integracji i migracji

Dwa sklepy mogą mieć po kilkadziesiąt modeli ubrań, a mimo to wymagać zupełnie innego nakładu pracy. W jednym każdy produkt ma kilka prostych wariantów. W drugim występują osobne zdjęcia kolorów, różne tabele rozmiarów, stany magazynowe, kolekcje sezonowe i synchronizacja z Allegro.

Przy wycenie sprawdzam przede wszystkim liczbę wariantów i szablonów, zakres integracji oraz to, czy przenosimy dane ze starego sklepu. Migracja wymaga sprawdzenia eksportu produktów, kategorii i wariantów, a przy zmianie adresów przygotowania przekierowań 301. Planuję uruchomienie tak, aby ograniczyć przerwę w działaniu, choć przy zmianie DNS może wystąpić krótka niedostępność.

Mniejszy sklep WooCommerce przygotowuję zwykle w 6-8 tygodni. Bardziej rozbudowane wdrożenia z funkcjami B2B, wersjami językowymi lub migracją mogą zająć 10-14 tygodni. Konkretny harmonogram ustalam po briefie.

Projektuję makiety w Figmie, przewiduję dwie tury poprawek i proszę o akceptację przed rozpoczęciem kodowania. Po kolejnych etapach udostępniam link do wersji testowej. Przed startem sprawdzam zakupy, warianty, płatności i integracje, a następnie szkolę Cię online z obsługi sklepu.

Po uruchomieniu zapewniam 60 dni gwarancji i bezpłatnych poprawek. Jeśli później potrzebujesz pomocy przy kolejnych kolekcjach, aktualizacjach lub rozwoju funkcji, możesz skorzystać z opcjonalnej opieki miesięcznej bez umowy na rok.

Przed wyceną poproszę Cię o informacje o produktach, rozmiarach, obecnych kanałach sprzedaży i materiałach, które masz już przygotowane. Na tej podstawie określę, jakie szablony, integracje i prace nad katalogiem będą potrzebne do uruchomienia Twojego sklepu.