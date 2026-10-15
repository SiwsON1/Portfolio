# Fakty: KSeF w sklepie WooCommerce (stan na 15.10.2026)

## Przepisy (źródło urzędowe: ksef.podatki.gov.pl)
- Obowiązek wystawiania faktur w KSeF: od 1 lutego 2026 dla firm, których sprzedaż w 2024 r. przekroczyła 200 mln zł brutto; od 1 kwietnia 2026 dla pozostałych firm. Obie daty już minęły. (https://ksef.podatki.gov.pl/informacje-ogolne-ksef-20/podstawy-prawne-oraz-kluczowe-terminy/)
- Do końca 2026 r. firma może wystawiać faktury poza KSeF (papierowe lub elektroniczne), jeśli łączna wartość sprzedaży udokumentowanej fakturami w danym miesiącu nie przekracza 10 000 zł brutto. Według FAQ Ministerstwa Finansów w KSeF trzeba wystawić już fakturę, którą przekroczono limit, i wszystkie kolejne; późniejszy miesiąc poniżej limitu nic nie zmienia (https://ksef.podatki.gov.pl/ponizej-10-000-zl/).
- Do końca 2026 r. można wystawiać faktury z kasy rejestrującej, a paragon z NIP nabywcy do 450 zł brutto (100 euro) może być fakturą uproszczoną poza KSeF. Od 1 stycznia 2027 te wyłączenia wygasają.
- Faktury dla konsumentów (osób fizycznych nieprowadzących działalności) są wyłączone z obowiązku KSeF. Można je tam wystawiać dobrowolnie. (https://ksef.podatki.gov.pl/informacje-ogolne-ksef-20/zakres-obowiazkowego-ksef/)
- Faktury od sprzedawców bez siedziby w Polsce są wyłączone z obowiązku. Faktur w procedurach OSS spoza UE i IOSS nie można wystawiać w KSeF nawet dobrowolnie.
- Faktury od dostawców (kosztowe) firma odbiera przez KSeF od 1 lutego 2026.
- Kary pieniężne za niewysłanie faktury do KSeF (art. 106ni ustawy o VAT) przepisy przewidują od 1 stycznia 2027; rok 2026 to okres przejściowy bez tych kar. (źródła księgowe: jpk.info.pl, infor.pl; opisać ostrożnie)
- Tryb offline24: gdy wystawiający nie może połączyć się z KSeF, wystawia fakturę z kodami QR i przesyła ją do KSeF najpóźniej następnego dnia roboczego. Przy awarii ogłoszonej przez Ministerstwo Finansów termin jest dłuższy (7 dni roboczych od jej zakończenia).
- Faktura w KSeF ma format ustrukturyzowany FA(3) i dostaje numer KSeF. To program do faktur wysyła dokument i odbiera numer, nie sam sklep.

## Co to znaczy dla sklepu WooCommerce (wnioski do opisania)
- Sam WooCommerce nie wystawia faktur i nie łączy się z KSeF. Faktury wystawia program do faktur (np. Fakturownia, wFirma, iFirma, inFakt) albo BaseLinker; połączenie ze sklepem przez wtyczkę programu albo przez BaseLinkera.
- Sprzedaż do konsumentów: paragon z kasy (fiskalnej, online lub wirtualnej) i faktura na żądanie, poza obowiązkiem KSeF.
- Klient firmowy (podaje NIP): faktura musi trafić do KSeF, chyba że łapiesz się na limit 10 000 zł w miesiącu (do końca 2026) albo paragon z NIP do 450 zł (do końca 2026).
- Od 2027 paragon z NIP przestaje wystarczać, więc sklep musi rozróżniać przy zamówieniu klienta firmowego od konsumenta.
- W kasie sklepu potrzebne: pole „chcę fakturę na firmę”, NIP, nazwa firmy; sprawdzenie formatu NIP; przekazanie tych danych do programu do faktur; jasne rozróżnienie, kiedy dokument ma iść do KSeF.
- Zwroty i korekty: faktura korygująca do faktury z KSeF też idzie przez KSeF; trzeba ustalić, kto ją wystawia przy zwrocie w sklepie.
- Klient firmowy dostaje fakturę przez KSeF; mail z PDF może zostać jako wygoda, ale wiążąca jest wersja w KSeF.

## BaseLinker (Base) i KSeF (źródło: https://base.com/pl-PL/integrations/ksef/)
- Faktury wystawione w Base trafiają do KSeF zaraz po utworzeniu; system pobiera numer KSeF i datę, aktualizuje PDF.
- Można wybrać, które serie numeracji idą do KSeF.
- Wykrywa niedostępność bramki i dodaje kod QR trybu offline.
- Pokazuje akceptację albo odrzucenie dokumentu przez bramkę Ministerstwa Finansów.
- Masowa wysyłka nieprzekazanych dokumentów z wybranego miesiąca, kilka NIP-ów na jednym koncie, faktury zbiorcze.
- Konfiguracja: moduł, środowisko, token, certyfikat do kodów QR offline.

## O autorze (uczciwie)
- Marcin łączy WooCommerce z BaseLinkerem i innymi systemami (usługi: integracje WooCommerce, integracja WooCommerce z BaseLinker).
- NIE wdrażał dotąd integracji z Subiektem, Optimą, wFirmą, iFirmą ani Fakturownią. NIE podawać realizacji KSeF ani wyników.
- Nie jest księgowym ani doradcą podatkowym: decyzje podatkowe (czy firma łapie się na limit, jak dokumentować sprzedaż) ustala księgowa; Marcin robi stronę techniczną (kasa sklepu, dane do faktury, połączenie z programem).
