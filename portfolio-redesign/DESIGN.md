# DESIGN.md — marcinsiwonia.pl

Wartości skopiowane 1:1 z `app/globals.css`. Źródło prawdy to CSS; ten plik go streszcza.

## Strategia koloru: **Committed (dark)**

Powierzchnia to deep midnight z violet tintem (NIE pure black), tekst to warm cream (NIE pure white), jeden ciepły akcent (peach) niesie tożsamość. Cool blue (overcast) jako drugorzędny kontrapunkt. Theme dark celowo: portfolio oglądane wieczorem, kinowy editorial mood, peach świeci jak światło na ciemnym tle.

## Kolory (OKLCH)

| Token | Wartość | Rola |
|---|---|---|
| `--bg` | `oklch(14% 0.02 280)` | tło bazowe, deep midnight violet |
| `--bg-elev` | `oklch(18% 0.025 280)` | podniesiona powierzchnia (karty, podglądy) |
| `--ink` | `oklch(94% 0.015 60)` | tekst główny, warm cream |
| `--ink-mute` | `oklch(70% 0.018 60)` | tekst drugorzędny |
| `--ink-faint` | `oklch(48% 0.015 60)` | etykiety mono, numery |
| `--peach` | `oklch(78% 0.13 50)` | **akcent główny** — CTA, hover, podkreślenia |
| `--peach-deep` | `oklch(64% 0.16 40)` | peach hover/active |
| `--overcast` | `oklch(60% 0.12 220)` | cool blue akcent drugorzędny |
| `--line` | `oklch(28% 0.02 280)` | hairline bordery |
| `--border-strong` | `oklch(36% 0.025 280)` | mocniejszy border |

> **Uwaga porządkowa:** `--accent: #FFE81F` w `:root` to pozostałość z wariantów lab (v8, żółty AM.pro) — NIE należy do brandu portfolio. Akcentem jest **peach**. Do usunięcia przy najbliższym sprzątaniu.

Zasada: peach ≤ ~10% powierzchni (Committed-dark, akcent punktowy). Nie barwić wszystkiego.

## Typografia

- **Display:** Fraunces (italic, osie `opsz` / `SOFT` / `WONK`). Nagłówki, hasła, nazwy. Częsty preset: `fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0'`, `letterSpacing: -0.02..-0.03em`.
- **Sans:** Geist Sans — body, UI.
- **Mono:** Geist Mono — eyebrow, numery (01–05), etykiety uppercase z `tracking-[0.22em]`.
- Nigdy Inter/Roboto/Arial.

### Skala (clamp, fluid)

| Token | clamp |
|---|---|
| `--text-display` | `clamp(4rem, 2rem + 9vw, 11rem)` |
| `--text-h1` | `clamp(2.75rem, 1.5rem + 4.5vw, 6rem)` |
| `--text-h2` | `clamp(2rem, 1.25rem + 2.6vw, 4rem)` |
| `--text-h3` | `clamp(1.5rem, 1.1rem + 1.4vw, 2.5rem)` |
| `--text-lead` | `clamp(1.125rem, 1rem + 0.5vw, 1.5rem)` |
| `--text-body` | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` |
| `--text-mono` | `0.8125rem` |

Body line-length cap 65–75ch (`prose-bound` / `max-w-prose`).

## Motion

- Easing wyłącznie ease-out wykładnicze: `--ease-out-quart: cubic-bezier(0.25,1,0.5,1)`, `--ease-out-expo: cubic-bezier(0.16,1,0.3,1)`. Bez bounce, bez elastic.
- Nie animować właściwości layoutu — transform/opacity/filter na GPU, `will-change` świadomie.
- `prefers-reduced-motion: reduce` respektowane w KAŻDEJ animacji (warunek twardy).
- Biblioteki: GSAP + ScrollTrigger (reveal), Lenis (smooth scroll), R3F (sfera hero, szcześcian /projekty).

## Komponenty / wzorce

- **Eyebrow:** `.eyebrow` — mono, uppercase, tracking-[0.22em], ink-faint, często z numerem ("Stack · 5").
- **Sekcje:** border-t border-line, padding `px-6 py-20 md:px-10 md:py-32`. Grid 12-kolumnowy (`md:grid-cols-12`), nagłówek 3/9.
- **Hover na liście:** tytuł przesuwa się w prawo + zmiana koloru na peach, strzałka `→` translate-x.
- **Karty:** używać oszczędnie (impeccable: "cards are the lazy answer"). Realizacje = editorial alternating layout, nie siatka kafelków.
- **data-cursor:** custom cursor label (`OTWÓRZ`, `KONTAKT`, `CZYTAJ`) na elementach interaktywnych.

## Responsywność

Mobile-first. Breakpointy Tailwind. Hero ma ~17 explicit breakpointów typografii w globals.css (co 100px od 320 do 2560) + override `max-height: 800px` dla niskich ekranów Maców (mieści się w 100svh).
