# Content plan: wsparcie money pages (2026-07-17)

Uzupełnienie `blog-plan-2026.md` o klastry pod nowe i słabiej wspierane usługi.
Reguły jak zawsze: posty = informacyjne/poradnikowe, money pages = transakcyjne.
Min 15-20 linków wewnętrznych per post, anchor do money page 2-3 warianty (rotacja, nie 100% exact match).

## Klaster 1: Opieka WordPress → /uslugi/opieka-wordpress (NOWA)

Priorytet P0 (strona świeża, zero wsparcia):
1. **Ile kosztuje utrzymanie strony WordPress w 2026** — fraza cenowa, tabela kosztów (hosting, domena, opieka, certyfikat), anchor "opieka nad stroną WordPress"
2. **Strona WordPress zhakowana: co robić w pierwszej godzinie** — intent awaryjny = szybka konwersja; checklist krok po kroku, anchor "stała opieka nad WordPressem"
3. **Aktualizacja WordPressa bez psucia strony: staging krok po kroku** — how-to, anchor "abonament opieki"
4. **Backup WordPressa: 3 sposoby i który faktycznie działa przy awarii** — porównanie UpdraftPlus / hosting / zewnętrzny, test odtworzenia
5. **Ile wtyczek to za dużo? Audyt wtyczek WordPress** — link magnet, lista wtyczek do wyrzucenia

## Klaster 2: Przyspieszanie → /uslugi/przyspieszanie-stron-wordpress (NOWA)

Priorytet P0:
6. **Core Web Vitals po ludzku: LCP, INP, CLS w 2026** — cornerstone edukacyjny, anchor "przyspieszenie strony WordPress"
7. **Jak przyspieszyć WordPressa: 12 kroków od największej dźwigni** — link magnet how-to, każdy krok z szacunkiem zysku w ms
8. **Dlaczego sklep WooCommerce muli: 7 typowych przyczyn** — celuje w właścicieli sklepów, anchor "optymalizacja WooCommerce"
9. **WebP czy AVIF w 2026: co wybrać i jak wdrożyć na WordPressie** — porównanie z tabelą wag
10. **LiteSpeed Cache: konfiguracja krok po kroku (screeny)** — how-to pod long-tail, silny w PL bo Hostinger/cyber_folks = LiteSpeed
11. **TTFB: dlaczego Twój hosting spowalnia stronę zanim cokolwiek się załaduje** — wspiera też opiekę (rekomendacje hostingu)

## Klaster 3: dziury w istniejących klastrach (P1)

12. **Ile trwa zrobienie strony internetowej: realne terminy 2026** — wspiera WSZYSTKIE money pages (nowy atrybut czasu z EAV audytu), tabela per typ strony
13. **Landing page vs strona firmowa: co wybrać pod kampanię** — przygotowuje grunt pod przyszłą usługę landing page
14. **Migracja sklepu na WooCommerce (Shoper/IdoSell/Shopify): przewodnik** — wspiera FAQ o migracji na stronie Woo
15. ~~Strona dla kancelarii adwokackiej: czego wymaga i ile kosztuje~~ — **WYPADA z planu 2026-07-28**: kanibalizowałby nowy landing `/strony-dla/kancelarie-prawne` (fraza „strony internetowe dla kancelarii prawnych", widełki i FAQ już tam są). Zamiennik informacyjny, bez frazy transakcyjnej: **RODO i tajemnica zawodowa na stronie kancelarii: formularz, hosting, e-mail** — czysta edukacja, linkuje do landingu branżowego

## Kolejność publikacji (sugestia)

Tydzień 1-2: #2 (hack, intent awaryjny) + #6 (cornerstone CWV)
Tydzień 3-4: #1 (koszty utrzymania) + #7 (12 kroków)
Tydzień 5-6: #8 (Woo muli) + #12 (terminy)
Dalej: reszta po 1-2/tydzień.

## Anty-kanibalizacja (sprawdzone przy tworzeniu planu)

- #1 nie bije w /uslugi/opieka-wordpress: post = koszty całościowe (hosting+domena+opieka), money page = oferta abonamentu
- #6/#7 nie biją w /uslugi/przyspieszanie: posty = edukacja/DIY, money page = usługa z audytem i raportem; DIY-owiec i tak nie kupi
- #12 nie bije w huba: post = terminy branżowo, hub = oferta z Wrocławiem
- Żaden tytuł nie używa fraz głównych money pages z mapy (portfolio-keyword-map-uslugi w memory Claude'a)
