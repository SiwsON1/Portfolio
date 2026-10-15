=== WPIS: ksef-woocommerce ===
KEYWORD: KSeF w WooCommerce
TITLE: KSeF w WooCommerce. Co musisz zmienić w sklepie?
METATITLE: KSeF w WooCommerce. Faktury, paragony i integracja
METADESCRIPTION: WooCommerce sam nie wysyła faktur do KSeF. Sprawdź, które dokumenty trafiają do systemu, jak działa BaseLinker i co musisz zmienić w kasie sklepu.
EXCERPT: KSeF w WooCommerce nie oznacza, że każda sprzedaż musi trafić do systemu. Wyjaśniam, co dzieje się z fakturami i paragonami, jak połączyć sklep z KSeF i na co uważać przy BaseLinkerze.
LEAD: KSeF dotyczy sklepów WooCommerce, które wystawiają faktury objęte obowiązkiem, ale sam WooCommerce nie wysyła dokumentów do systemu. Robi to program do faktur albo BaseLinker, a sklep musi poprawnie zebrać dane kupującego i przekazać je dalej. Wyjaśniam, które dokumenty trafiają do KSeF, co zostaje po staremu i co warto sprawdzić przed zmianami w 2027 roku.
## Kogo dotyczy KSeF w WooCommerce i od kiedy?
Jeśli prowadzisz sklep internetowy na WooCommerce, obowiązek KSeF zależy przede wszystkim od tego, jakie faktury wystawiasz, a nie od samej platformy sprzedażowej. Nie ma znaczenia, czy zamówienie wpada bezpośrednio przez sklep, czy sprzedajesz również na Allegro. Liczy się rodzaj dokumentu, który powstaje przy sprzedaży.
Obowiązek wystawiania faktur w Krajowym Systemie e-Faktur (KSeF) wprowadzono etapami:
- Od 1 lutego 2026 roku dla firm, których sprzedaż w 2024 roku przekroczyła 200 mln zł brutto.
- Od 1 kwietnia 2026 roku dla pozostałych firm objętych obowiązkiem.
- Do końca 2026 roku działa wyjątek dla firm, u których łączna wartość sprzedaży udokumentowanej fakturami w danym miesiącu nie przekracza 10 000 zł brutto.
Ostatni punkt jest szczególnie ważny dla mniejszych sklepów. Jeżeli mieścisz się w limicie, możesz jeszcze wystawiać faktury poza KSeF. Nie oznacza to jednak, że każdy kolejny miesiąc daje Ci nowy start.
Faktura, którą przekroczysz limit 10 000 zł, musi już trafić do KSeF. Tak samo wszystkie następne faktury objęte obowiązkiem. Jeśli później sprzedaż spadnie poniżej limitu, nie wracasz do wystawiania ich poza systemem.
Wyobraź sobie sklep, w którym część zamówień składają konsumenci, a część firmy kupujące na fakturę. Musisz wiedzieć nie tylko, jaki dokument wystawić, ale również czy dany dokument powinien zostać przekazany do KSeF. Nie zakładaj więc, że wszystkie zamówienia wymagają identycznej obsługi.
Jeśli nie masz pewności, czy obowiązek już Cię dotyczy, jak liczyć limit i jak dokumentować poszczególne rodzaje sprzedaży, ustal to ze swoją księgową.
Pamiętaj też o karach. Przepisy przewidują kary pieniężne za niewysłanie wymaganej faktury do KSeF od 1 stycznia 2027 roku. Rok 2026 jest pod tym względem okresem przejściowym, bez tych kar, ale nie oznacza to zwolnienia z obowiązków, które już zaczęły obowiązywać.
## Które faktury i paragony ze sklepu trafiają do KSeF?
To pytanie pojawia się często, ponieważ WooCommerce traktuje każde zamówienie podobnie. Klient wybiera produkt, uzupełnia dane i płaci. Dopiero sposób dokumentowania sprzedaży decyduje o tym, czy potrzebujesz faktury w KSeF.
Nie każdy dokument sprzedaży ze sklepu internetowego trafia do KSeF. Przede wszystkim trzeba rozróżnić sprzedaż konsumencką, sprzedaż dla firm oraz szczególne przypadki dokumentowania transakcji.
| Sytuacja w sklepie | KSeF teraz (do końca 2026) | Od 2027 |
|---|---|---|
| Konsument kupuje i dostaje paragon | Nie. Paragon nie trafia do KSeF. | Bez zmian. |
| Konsument prosi o fakturę | Faktura konsumencka jest poza obowiązkiem KSeF. Można ją wysłać dobrowolnie. | Nadal poza obowiązkiem. |
| Firma podaje NIP i otrzymuje fakturę | Tak, chyba że mieścisz się w miesięcznym limicie 10 000 zł. | Tak, limit przestaje działać. |
| Paragon z NIP do 450 zł brutto (100 euro) | Może być fakturą uproszczoną poza KSeF. | Wyłączenie wygasa. |
| Faktura w procedurze OSS spoza UE albo IOSS | Nie można jej wystawić w KSeF, nawet dobrowolnie. | Bez zmian. |
| Faktury od Twoich dostawców | Faktury kosztowe odbierasz przez KSeF od 1 lutego 2026 roku. | Nadal odbierasz je przez KSeF. |
Przy sprzedaży zagranicznej trzeba odróżnić siedzibę kupującego od siedziby wystawcy. Z obowiązku wyłączone są faktury wystawiane przez sprzedawców bez siedziby w Polsce. Osobne zasady dotyczą procedur OSS spoza UE i IOSS, czyli szczególnych sposobów rozliczania VAT od określonej sprzedaży. Faktur wystawianych w tych procedurach nie można przekazywać do KSeF nawet dobrowolnie.
Dla typowego sklepu najważniejsze jest jednak coś prostszego: paragon dla konsumenta i faktura dla firmy to dwa różne scenariusze obsługi zamówienia.
Jeżeli konsument kupuje produkt i otrzymuje zwykły paragon, nie wysyłasz tego paragonu do KSeF. Jeśli poprosi o fakturę konsumencką, jej wystawienie w KSeF nie jest obowiązkowe.
Inaczej wygląda zamówienie firmowe. Klient podaje NIP i potrzebuje faktury. W takim przypadku dokument objęty obowiązkiem powinien zostać wystawiony w systemie.
Do końca 2026 roku możesz jeszcze korzystać z wyłączenia dotyczącego paragonów z NIP do 450 zł brutto (100 euro), które stanowią fakturę uproszczoną. Od 1 stycznia 2027 roku to wyłączenie przestaje działać.
Stąd bierze się znaczenie poprawnego rozpoznawania klientów firmowych już podczas składania zamówienia.
## Dlaczego WooCommerce sam nie wyśle faktury do KSeF?
WooCommerce jest systemem obsługi sklepu internetowego. Przechowuje zamówienia, dane kupujących, produkty i informacje o płatnościach. Sam z siebie nie wystawia faktur ani nie ma połączenia z KSeF.
Jeśli dopiero poznajesz możliwości platformy, więcej podstaw znajdziesz w artykule [WooCommerce: co to jest](/blog/woocommerce-co-to-jest).
Żeby faktura trafiła do KSeF, potrzebujesz dodatkowego systemu odpowiedzialnego za jej wystawienie i wysłanie. Możliwe są dwie główne ścieżki.
Pierwsza to program do faktur połączony z WooCommerce przez odpowiednią wtyczkę. Przykładami takich programów są Fakturownia, wFirma, iFirma czy inFakt. Sklep przekazuje dane zamówienia, a program zajmuje się fakturą i jej obsługą w KSeF.
Druga to BaseLinker, obecnie działający również pod nazwą Base. Może przejąć wystawianie faktur i ich przekazywanie do KSeF. To szczególnie istotne, jeśli już obsługujesz przez niego WooCommerce i Allegro.
W obu przypadkach droga jest podobna: zamówienie powstaje w WooCommerce, dane kupującego trafiają do systemu fakturowania, a ten wysyła fakturę do KSeF.
Faktura wysyłana do KSeF ma format FA(3), czyli określoną strukturę danych, a nie zwykłego pliku PDF. System nadaje jej własny numer KSeF. Program fakturujący wysyła dokument i odbiera ten numer. Połączenie działa przez API, czyli sposób wymiany informacji pomiędzy systemami.
Klient firmowy otrzymuje fakturę przez KSeF. Możesz nadal przesyłać mu PDF e-mailem dla wygody, ale wiążącą wersją faktury jest dokument znajdujący się w KSeF.
W mojej pracy nad [integracjami WooCommerce](/uslugi/integracje-woocommerce) skupiam się na technicznej stronie takiego przepływu. Sprawdzam, jakie dane zbiera sklep, gdzie są zapisywane i w jaki sposób można przekazać je do kolejnego systemu.
Nie wdrażałem dotąd połączeń z wFirmą, iFirmą, Fakturownią, Subiektem ani Optimą. Nie traktuję też samego zainstalowania wtyczki jako dowodu, że cały proces fakturowania działa poprawnie. Kluczowy jest pełny przepływ danych, od zamówienia po potwierdzenie przyjęcia dokumentu.
## Co musisz zmienić w kasie WooCommerce?
KSeF w WooCommerce zaczyna się jeszcze przed wystawieniem faktury. Zaczyna się w formularzu zamówienia, czyli tam, gdzie klient wpisuje swoje dane.
Jeżeli sklep zbiera tylko imię, nazwisko i adres, może nie mieć wszystkich informacji potrzebnych do prawidłowego obsłużenia zakupu firmowego. Nie wystarczy również samo pole NIP, jeśli jego zawartość nie jest przekazywana do systemu fakturującego.
W praktyce sprawdziłbym następujące elementy:
- **Wybór faktury na firmę.** Klient powinien mieć wyraźną możliwość zaznaczenia, że kupuje jako firma i potrzebuje faktury.
- **NIP i nazwa firmy.** Formularz powinien zebrać dane potrzebne do wystawienia dokumentu, zamiast wymagać ich późniejszego uzupełniania e-mailem.
- **Sprawdzanie formatu NIP.** Błędnie wpisane dane warto wychwycić przed zatwierdzeniem zamówienia, zamiast przekazywać je bez sprawdzenia.
- **Przekazywanie danych.** NIP, nazwa firmy i informacja o rodzaju nabywcy powinny trafić do systemu wystawiającego faktury.
- **Komunikaty dla klienta.** Kupujący powinien rozumieć, czy otrzyma paragon, fakturę konsumencką czy fakturę firmową obsługiwaną przez KSeF.
Szczególną uwagę zwróciłbym na przekazywanie danych. Pole może być poprawnie widoczne w kasie, a nawet zapisane w zamówieniu WooCommerce, ale to jeszcze nie oznacza, że trafi do BaseLinkera albo programu fakturującego.
Dlatego testowanie samego formularza nie wystarczy. Trzeba sprawdzić, czy po złożeniu zamówienia informacja o zakupie firmowym zostaje zachowana, a NIP i nazwa firmy docierają do miejsca, w którym powstaje faktura.
W sklepie prowadzącym sprzedaż przez kilka kanałów ważna jest też spójność danych. Zamówienie z WooCommerce i zamówienie z Allegro mogą trafiać do tego samego systemu, ale nie powinny gubić informacji pozwalającej prawidłowo wystawić dokument.
Nie oznacza to konieczności przebudowania całej kasy. Czasem wystarczy uporządkować istniejące pola oraz sposób ich przekazywania. W innym sklepie problem może leżeć w połączeniu pomiędzy systemami. Najpierw sprawdziłbym, co sklep faktycznie zapisuje i wysyła, a dopiero potem decydował o zmianach.
## Jak działa integracja BaseLinker z KSeF?
Jeśli korzystasz już z BaseLinkera, możesz obsługiwać faktury i KSeF w systemie, do którego i tak trafiają Twoje zamówienia. Nie musisz więc zakładać, że każde zamówienie z WooCommerce powinno być osobno wysyłane do KSeF przez kolejną wtyczkę sklepową.
Jeśli nie znasz jeszcze tego rozwiązania, podstawy jego działania wyjaśniłem w artykule [BaseLinker: co to jest](/blog/baselinker-co-to-jest).
Integracja BaseLinker z KSeF pozwala wysyłać faktury wystawione w Base bezpośrednio po ich utworzeniu. System pobiera numer i datę z KSeF, a następnie aktualizuje PDF dokumentu.
Istotna jest możliwość wyboru serii numeracji, które mają być przekazywane do KSeF. Dzięki temu nie musisz traktować wszystkich wystawianych dokumentów identycznie. Musisz natomiast poprawnie skonfigurować, które serie podlegają wysyłce.
Base pokazuje również, czy bramka Ministerstwa Finansów zaakceptowała dokument, czy go odrzuciła. Samo utworzenie faktury w panelu nie jest więc równoznaczne z jej przyjęciem przez KSeF.
System udostępnia też masową wysyłkę dokumentów nieprzekazanych z wybranego miesiąca, obsługę kilku NIP-ów na jednym koncie i faktury zbiorcze.
Przy konfiguracji trzeba uwzględnić odpowiedni moduł, środowisko, token oraz certyfikat potrzebny do kodów QR w trybie offline. Token to dane służące do autoryzacji dostępu do systemu, a kod QR pozwala obsłużyć dokument w przewidzianym trybie offline.
Co sprawdziłbym w pierwszej kolejności?
- **Serie numeracji.** Jeśli odpowiednie dokumenty nie są objęte wysyłką, faktury nie trafią do KSeF, mimo że integracja jest aktywna.
- **Dokumenty odrzucone.** Musisz wiedzieć, gdzie zobaczysz ich status i kto odpowiada za rozwiązanie problemu.
- **Zwroty.** Jeśli klient zwróci towar, a pierwotna faktura trafiła do KSeF, faktura korygująca również powinna przejść przez KSeF. Ustal, który system wystawia korektę i jak powiązać ją ze zwrotem zamówienia.
Zajmuję się technicznymi połączeniami WooCommerce z BaseLinkerem. Zakres takiej pracy opisuję na stronie [integracja WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker). Przy tego rodzaju połączeniu ważne jest dla mnie, żeby dane zamówienia były kompletne, a odpowiedzialność każdego systemu jasno określona.
## Co z fakturą, gdy KSeF nie działa?
Niedostępność KSeF nie oznacza automatycznie, że musisz przestać wystawiać faktury.
Przewidziano tryb offline24, który pozwala wystawić dokument, gdy wystawiający nie może połączyć się z systemem. Faktura otrzymuje odpowiednie kody QR i musi zostać przesłana do KSeF najpóźniej następnego dnia roboczego.
Inaczej wygląda sytuacja, gdy Ministerstwo Finansów ogłosi awarię KSeF. Wtedy termin przesłania faktury wynosi 7 dni roboczych od zakończenia awarii.
Te sytuacje warto rozróżniać. Problem z połączeniem po stronie wystawiającego i oficjalnie ogłoszona awaria systemu nie oznaczają takiego samego terminu.
W przypadku BaseLinkera integracja potrafi wykryć niedostępność bramki i dodać do dokumentu kod QR trybu offline. Nie kończy to jednak całego procesu. Trzeba później dopilnować, żeby faktura została przekazana do KSeF i otrzymała odpowiedni status. Jeśli dokument zostanie odrzucony, również wymaga uwagi.
Z perspektywy właściciela WooCommerce ważne jest więc nie tylko to, czy faktura powstała, ale również to, czy system odpowiedzialny za jej wysyłkę prawidłowo zakończył proces.
Dobrze jest wcześniej wiedzieć, gdzie sprawdzać dokumenty oczekujące na wysłanie, dokumenty zaakceptowane oraz te, których bramka nie przyjęła. W przeciwnym razie łatwo pomylić wygenerowany PDF z fakturą skutecznie przekazaną do KSeF.
## Co sprawdzić w sklepie przed 2027 rokiem?
Największa praktyczna zmiana dotyczy rozróżnienia klientów firmowych i konsumentów. Od 1 stycznia 2027 roku przestaje działać przejściowe wyłączenie dotyczące paragonów z NIP do 450 zł brutto (100 euro). Jeśli dotąd sklep korzystał z takich dokumentów, nie zakładaj, że dotychczasowy proces wystarczy również później.
Zacząłbym od prześledzenia zwykłego zamówienia firmowego. Klient wybiera fakturę, wpisuje NIP i nazwę firmy, składa zamówienie, a dane przechodzą do programu fakturującego lub BaseLinkera. Następnie sprawdziłbym, czy dokument rzeczywiście trafia do KSeF i czy system odbiera numer oraz informację o jego przyjęciu.
Osobny test wykonałbym dla konsumenta. Takie zamówienie nie powinno przypadkowo przechodzić przez proces przygotowany wyłącznie dla obowiązkowych faktur firmowych.
Przetestowałbym też zwrot zamówienia z fakturą wystawioną w KSeF. Sam zwrot środków w WooCommerce nie odpowiada jeszcze na pytanie, kto wystawi odpowiednią korektę.
Przed zmianami sprawdziłbym również, czy osoby obsługujące zamówienia wiedzą, gdzie szukać odrzuconych faktur oraz jak rozpoznać dokument, który jeszcze nie został przekazany do KSeF.
Jeśli używasz BaseLinkera, szczególnie przy sprzedaży równoległej w WooCommerce i Allegro, upewnij się, że dane klientów firmowych są poprawnie przekazywane niezależnie od kanału sprzedaży.
Nie musisz przy tym wymieniać działającego programu do faktur tylko dlatego, że korzystasz z WooCommerce. Najważniejsze jest sprawdzenie, czy wybrany system odpowiada za wystawienie właściwych dokumentów, ich wysłanie oraz obsługę statusów i korekt.
Sama obecność wtyczki albo aktywnej integracji nie wystarczy, jeśli dane z zamówienia są niekompletne. Dlatego przed 2027 rokiem skupiłbym się na sprawdzeniu całej drogi dokumentu, od wyboru faktury w kasie sklepu aż po jej przyjęcie w KSeF.
FAQ:
- P: Czy każdy sklep WooCommerce musi korzystać z KSeF? | O: Samo posiadanie WooCommerce nie oznacza obowiązku wysyłania każdej sprzedaży do KSeF. Znaczenie ma rodzaj wystawianych faktur oraz sytuacja podatkowa sprzedawcy. Jeśli wystawiasz faktury firmowe objęte obowiązkiem, potrzebujesz sposobu ich przekazywania do systemu.
- P: Czy WooCommerce automatycznie wysyła faktury do KSeF? | O: Nie. WooCommerce sam nie wystawia faktur ani nie łączy się z KSeF. Potrzebujesz programu fakturującego połączonego ze sklepem albo obsługi faktur przez BaseLinkera.
- P: Czy paragon ze sklepu internetowego trafia do KSeF? | O: Zwykły paragon dla konsumenta nie trafia do KSeF. Do końca 2026 roku paragon z NIP do 450 zł brutto (100 euro) może być fakturą uproszczoną poza KSeF. Od 1 stycznia 2027 roku to wyłączenie wygasa.
- P: Czy wystarczy zainstalować wtyczkę KSeF do WooCommerce? | O: Nie zawsze. Musisz jeszcze zadbać o poprawne zbieranie NIP-u i danych firmy, przekazywanie ich do systemu fakturującego oraz obsługę statusów dokumentów. Ważne są również korekty i sytuacje, w których faktura zostanie odrzucona.
- P: Czy mogę korzystać z KSeF przez BaseLinkera, jeśli sprzedaję też na Allegro? | O: Tak, BaseLinker umożliwia wystawianie faktur i ich przekazywanie do KSeF. Obsługuje między innymi wybrane serie numeracji, odbieranie numerów KSeF i sprawdzanie statusów. Trzeba jednak dopilnować, aby dane zamówień z WooCommerce i Allegro były kompletne.
- P: Co się dzieje z fakturą do KSeF, kiedy klient zwraca produkt? | O: Jeżeli pierwotna faktura trafiła do KSeF, faktura korygująca również powinna zostać przekazana przez KSeF. W sklepie trzeba ustalić, kto wystawia korektę i jak wiąże ją ze zwrotem zamówienia. Samo oznaczenie zamówienia jako zwróconego w WooCommerce nie zastępuje obsługi dokumentu.
