# Fakty: Google Merchant Center i feed produktowy (WooCommerce)

## Wspólne
- Ponad 40 własnych wtyczek i mu-pluginów w 9 serwisach (część funkcji piszę jako małą wtyczkę zamiast instalować dużą).
- Nowe sklepy WooCommerce: własny motyw, bez Elementora. Integracje w sklepach: Przelewy24, BLIK, InPost, GA4.
- Osobne strony: integracja WooCommerce z BaseLinker, integracje WooCommerce, sklepy WooCommerce.

## LumiKids (sklep z odzieżą dziecięcą na WooCommerce, realizacja z nazwą)
- Własny feed produktowy pod Google Merchant Center napisany jako mała wtyczka (mu-plugin), przygotowany w sierpniu 2026, około 560 pozycji (każdy wariant rozmiaru to osobna pozycja). Nie pisz, że to on zasila dziś konto Merchant Center sklepu.
- Feed celowo pomija produkty bez SKU (kodu produktu), żeby do Google nie trafiały pozycje bez identyfikatora.
- Problem u źródła: część produktów dodawanych importem klienta wchodziła bez SKU i z rozmiarem jako atrybutem lokalnym zamiast wspólnej listy rozmiarów sklepu. Takie produkty wypadały z filtrów rozmiaru i z feedu. Zgłosiłem to do poprawy w imporcie, zamiast łatać w feedzie.
- Po synchronizacji stanów magazynowych przez innego wykonawcę Merchant Center pokazał spadek aktywnych produktów (z 95 do 76 w reklamach produktowych i z 93 do 74 w bezpłatnych informacjach o produktach). Diagnoza: przyczyną były stany (warianty oznaczone jako niedostępne), nie sam feed. Najpierw sprawdza się dane w sklepie, potem feed.
- Meta (Facebook, Instagram): katalog produktów w Commerce Managerze oparty na ID wariantów. Gdy pojawił się trzeci, równoległy feed od innej osoby, odradziłem jego podpięcie, bo zdublowałby katalog i rozjechał identyfikatory produktów w zdarzeniach piksela. Zasada: jedno źródło danych produktowych na kanał.
- Zdarzenia Meta z serwera (Conversions API) przez darmową wtyczkę Meta for WooCommerce.
- Analityka: w GTM dla WordPressa włączyłem przesyłanie zdarzenia wyświetlenia produktu (view_item) także dla produktów z wariantami, wcześniej ginęło.

## Uczciwie
- Kampanii Google Ads ani Meta Ads nie prowadzę. Przygotowuję dane, feed i pomiar, na których kampanie działają; kampanię prowadzi właściciel albo jego specjalista od reklam.
- Konto Merchant Center zakłada właściciel sklepu (to jego konto i dane firmy); prowadzę przez konfigurację i podpięcie feedu.
- Nie podawaj liczb sprzedaży ani wzrostów z reklam, bo ich nie mam.
