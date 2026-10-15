Użyj skilla Mistrz Blogowania.

Zadanie: napisz od zera wpis blogowy „KSeF w WooCommerce” na blogu freelancera web developera Marcina Siwonia (marcinsiwonia.pl/blog/ksef-woocommerce). Pierwsza osoba (ja, Marcin), do czytelnika na „Ty”. Czytelnik: właściciel sklepu na WooCommerce (często też z BaseLinkerem i Allegro), który słyszy o KSeF i nie wie, co musi zmienić w sklepie: czy każda faktura idzie do KSeF, co z paragonami, co z klientem firmowym, czy wystarczy wtyczka. Fakty: załączone fakty-ksef.md i fakty-kanoniczne.md. Tylko z nich, nie dodawaj innych dat, kwot ani przepisów.

Fraza główna: „KSeF w WooCommerce”. Wspierające: ksef woocommerce, woocommerce faktury ksef, ksef a sklep internetowy, integracja baselinker z ksef, faktura do paragonu ksef.

Kąt: WooCommerce sam nie wysyła niczego do KSeF; robi to program do faktur albo BaseLinker. Sklep musi za to dobrze zebrać dane (konsument czy firma, NIP) i przekazać je dalej, a od 2027 roku rozróżnienie konsument/firma staje się jeszcze ważniejsze. Ja zajmuję się techniczną stroną (kasa sklepu, dane do faktury, połączenie), decyzje podatkowe ustala księgowa. Uczciwie: nie wdrażałem dotąd połączeń z wFirmą, iFirmą, Fakturownią, Subiektem ani Optimą; nie podawaj realizacji KSeF.

FORMAT WYNIKU (zwykły tekst w czacie, NIE w canvasie, dokładnie tak, bez komentarzy):
=== WPIS: ksef-woocommerce ===
KEYWORD: KSeF w WooCommerce
TITLE: … (bez roku, bez pauz, maks. 60 znaków)
METATITLE: … (maks. 60 znaków, zaczyna się od „KSeF w WooCommerce”)
METADESCRIPTION: … (140-155 znaków, odpowiedź wprost)
EXCERPT: … (1-2 zdania)
LEAD: … (2-3 zdania; pierwsze zdanie odpowiada wprost, czy i jak KSeF dotyczy sklepu WooCommerce)
## [nagłówek sekcji 1]
[akapity, każdy w osobnym wierszu; listy „- …”; dokładnie jedna tabela Markdown z nagłówkiem]
## [nagłówek sekcji 2]
… (6-8 sekcji)
FAQ:
- P: … | O: … (6 pytań właściciela sklepu, odpowiedź 2-4 zdania)

Tematy sekcji (nagłówki zdaniowe po swojemu, część jako pytania czytelnika):
1. Kogo i od kiedy dotyczy KSeF (daty z FAKTÓW, limit 10 000 zł do końca 2026 i to, że po przekroczeniu nie ma powrotu).
2. Które dokumenty ze sklepu idą do KSeF, a które nie: TABELA „sytuacja w sklepie | KSeF teraz (do końca 2026) | od 2027” z wierszami: konsument z paragonem, konsument prosi o fakturę, firma z NIP i faktura, paragon z NIP do 450 zł, sprzedaż do firmy bez siedziby w Polsce, faktury od Twoich dostawców.
3. Dlaczego WooCommerce sam nie wyśle faktury do KSeF: kto to robi (program do faktur przez wtyczkę albo BaseLinker), co robi sklep.
4. Co zmienić w kasie sklepu: pole „faktura na firmę”, NIP i nazwa firmy, sprawdzenie formatu NIP, przekazanie danych dalej, jasne komunikaty dla klienta. Lista.
5. KSeF przez BaseLinkera: co robi integracja Base z KSeF (z FAKTÓW), na co uważać (które serie numeracji idą do KSeF, odrzucone dokumenty, korekty przy zwrotach).
6. Awaria i tryb offline: co się dzieje z fakturą, gdy KSeF nie działa (offline24, kody QR, terminy z FAKTÓW).
7. Co sprawdzić przed 2027 rokiem: krótka lista kontrolna dla właściciela sklepu (rozmowa z księgową, test zamówienia firmowego, korekta, zwrot).

Linki wewnętrzne w Markdown, dokładnie w tej postaci, każdy najwyżej raz, łącznie 3-4: [integracje WooCommerce](/uslugi/integracje-woocommerce), [integracja WooCommerce z BaseLinker](/uslugi/integracja-woocommerce-z-baselinker), [BaseLinker: co to jest](/blog/baselinker-co-to-jest), [WooCommerce: co to jest](/blog/woocommerce-co-to-jest).

Twarde zasady:
- 1600-2200 słów bez FAQ.
- Zero dat, kwot, przepisów i nazw funkcji spoza FAKTÓW. Kwoty tylko te z przepisów (10 000 zł, 450 zł, 100 euro, 200 mln zł). Kary opisz ostrożnie: przepisy przewidują je od 2027, rok 2026 jest przejściowy.
- Nie dawaj porad podatkowych jak doradca: przy decyzjach „czy mnie to dotyczy” odsyłaj do księgowej jednym zdaniem, bez powtarzania tego w każdej sekcji.
- Nie polecaj konkretnych wtyczek do KSeF ani programów do faktur jako „najlepszych”; nazwy programów tylko jako przykłady.
- Bez em-dashy i półpauz. Polskie słowa, żargon (FA(3), API, token, NIP, OSS) z krótkim wyjaśnieniem.
- Jeden głos: „ja” i „Ty”. Bez frazesów, aforyzmów, „Podsumowując” i wezwania do kontaktu na końcu. W leadzie nie pisz, skąd pracuję.
- Nie odwołuj się do briefu ani do plików.
