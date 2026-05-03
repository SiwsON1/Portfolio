# Produkcja hero — Remotion

Składanie filmu hero (12s loop) z klipów wygenerowanych na Freepiku.
Color grade, crossfades, vignette, film grain — automatyczne.

## Workflow

1. Wygeneruj klipy na Freepiku według instrukcji w `PROMPTY.md`.
2. Zapisz wszystkie pliki w folderze `public/clips/` z DOKŁADNIE tymi nazwami:
   - `01-embery.mp4`
   - `02-twarz.mp4`
   - `03-plomien.mp4`
   - `04-wide.mp4`
   - `05-rece.mp4` (opcjonalny)
3. `npm install` (raz)
4. `npm run preview` — otwiera Remotion Studio w przeglądarce, zobaczysz timeline i podgląd na żywo
5. `npm run render` — generuje `output/hero.mp4` + `output/hero.webm`

## Komendy

```bash
npm install              # raz, instalacja
npm run preview          # podgląd w przeglądarce (Remotion Studio)
npm run render           # render mp4 + webm jednocześnie
npm run render:mp4       # tylko mp4
npm run render:webm      # tylko webm (mniejszy, lepszy do strony)
```

## Timeline (12 sek, 30 fps)

```
0s ─── 1s ─── 2s ─── 3s ─── 4s ─── 5s ─── 6s ─── 7s ─── 8s ─── 9s ─── 10s ─ 11s ─ 12s
01-embery (0–3s, fade in) ───────────────►
        02-twarz (2–8s, główny shot) ─────────────────────────────────────►
                                                03-płomień (7–9s) ──►
                                                        04-wide (9–11s) ────►
                                                                01-embery (11–12s, loop tail)
```

Crossfady na każdym przejściu, vignette, color grade teal&orange, film grain.

## Brak klipu?

Jeśli któryś klip nie istnieje, w jego miejscu w preview pojawi się placeholder z napisem
"MISSING CLIP". Reszta filmu się renderuje normalnie. Wyrenderuj jak masz wszystkie 5.

## Wgranie do strony

Po wyrenderowaniu daj znać. Skopiuję `output/hero.webm` do `portfolio-redesign/public/`
i podmienię WebGL Atmosphere shader na `<video autoPlay loop muted playsInline>`
z fallbackiem na obecny shader gdy video się nie załaduje (slow connection / offline).

## Tweaki gdy coś nie pasuje

| Problem | Plik | Co zmienić |
|---|---|---|
| Color grade za mocny | `src/components/ColorGrade.tsx` | obniż wartości alpha w gradientach |
| Za dużo grainu | `src/components/Grain.tsx` | zmniejsz `opacity: 0.07` |
| Vignette za ciemna | `src/components/Vignette.tsx` | zmniejsz alpha 0.55 |
| Inne czasy/przejścia | `src/HeroFilm.tsx` | edytuj tablicę `TRACKS` |
| Inny rozmiar/fps | `src/HeroFilm.tsx` | stałe HERO_FPS, HERO_WIDTH, HERO_HEIGHT |
