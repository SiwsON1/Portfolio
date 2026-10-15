# Fakty: wdrożenie Consent Mode v2 i GA4 w WordPress / WooCommerce (15.10.2026)

## Google (źródła oficjalne)
- Dokumentacja tagów Google (developers.google.com/tag-platform/security/concepts/consent-mode): tryb uzyskiwania zgody ma typy zgody, każdy „granted” albo „denied”:
  - ad_storage: zapis plików cookie reklamowych; przy „denied” nowe nie są zapisywane, istniejące nie są odczytywane;
  - analytics_storage: pliki cookie analityki (np. czas wizyty); przy „denied” nie są zapisywane ani odczytywane;
  - ad_user_data: zgoda na wysyłanie danych użytkownika do Google w celach reklamowych; przy „denied” m.in. konwersje rozszerzone (zahaszowane dane) są wyłączone;
  - ad_personalization: zgoda na reklamy spersonalizowane; przy „denied” remarketing nie dostaje danych.
  - „v2” to dodanie ad_user_data i ad_personalization do wcześniejszych ad_storage i analytics_storage.
- Dwa tryby:
  - podstawowy: tagi Google zablokowane, dopóki użytkownik nie wybierze w banerze; przed wyborem nie idą żadne dane, nawet stan zgody; modelowanie konwersji ogólne (mniej dokładne);
  - zaawansowany: tagi ładują się od razu ze zgodą domyślnie „denied” i wysyłają pingi bez plików cookie; po zgodzie pełny pomiar; modelowanie dopasowane do reklamodawcy.
  - Wybór trybu to decyzja właściciela strony (z prawnikiem / osobą od RODO); Marcin wdraża technicznie wybrany wariant, domyślnie proponuje podstawowy jako ostrożniejszy.
- Pomoc Google Ads (support.google.com/google-ads/answer/13802165): ad_user_data jest wymagany do pomiaru konwersji (m.in. konwersje rozszerzone); do reklam spersonalizowanych i remarketingu ad_user_data i ad_personalization muszą mieć „granted”. Bez zgody pomiar opiera się bardziej na modelowaniu, remarketing nie dostaje danych.
- Polityka Google dotycząca zgody użytkowników z UE (google.com/about/company/user-consent-policy): strony używające produktów Google muszą uzyskać ważną prawnie zgodę użytkowników z EOG, Wielkiej Brytanii i Szwajcarii na cookies (tam, gdzie wymaga tego prawo) i na dane do personalizacji reklam, przechowywać zapis zgody i mówić, jak ją wycofać.
- NIE podawać dat wejścia wymogów, kar, liczb „ile danych tracisz”. NIE mówić, że Consent Mode „zapewnia zgodność z RODO”. Kwestie prawne: prawnik.

## Realizacje (dowody)
- Kosmoteka (można nazwać; sklep WooCommerce z teleskopami): własna wtyczka „GA4 z trybem zgody i baner cookies”: analityka startuje dopiero po zgodzie (Consent Mode v2), pomija zalogowanych administratorów (nie liczą się wejścia właściciela), lekki baner zastąpił ciężką wtyczkę cookies.
- LumiKids (można nazwać): w sklepie działały naraz oficjalna wtyczka Meta i Pixel Manager. Pixel w przeglądarce działał, ale zdarzenia z serwera (Conversions API) nie szły wcale, bo Pixel Manager z wpisanym własnym pixelem po cichu wyłączał całą wtyczkę Meta. Naprawa: wyczyszczenie jednego pola; płatna wersja wtyczki okazała się niepotrzebna; zdarzenia z przeglądarki i serwera mają wspólny identyfikator, więc nie liczą się podwójnie. GA4 w tym sklepie działa.
- marcinsiwonia.pl (własna strona): GA4 ładuje się dopiero po zgodzie w banerze cookies; baner jest w kodzie strony od początku, żeby nie przesuwał treści i nie spowalniał pierwszego ekranu.
- Typowe problemy, które sprawdzam (ogólnie): tag GA4 wklejony dwa razy (wtyczka i motyw), baner pokazuje się, ale tagi strzelają przed zgodą, zgoda zapisana, ale sygnał nie dociera do Google, zdublowane zakupy w GA4 i Meta, zdarzenia zakupu bez wartości, ciężka wtyczka cookies spowalniająca stronę.
- Narzędzia do sprawdzenia: podgląd Tag Assistant, zakładka sieci w przeglądarce (parametry gcs/gcd w żądaniach do Google), raport zdarzeń w czasie rzeczywistym GA4, Menedżer zdarzeń Meta.
- Uczciwie: kampanii reklamowych nie prowadzę; regulaminu, polityki prywatności i oceny prawnej nie piszę (nie jestem prawnikiem).

## O autorze
- Patrz fakty-kanoniczne.md. Bez kwot.
