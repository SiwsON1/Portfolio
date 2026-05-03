# Marcin Siwonia — Portfolio (redesign)

Next.js 16 + React 19 + Tailwind 4 + GSAP + Lenis + R3F.
Direction: **Atmosfera** (deep midnight + peach glow + WebGL atmosphere shader).

## Stack

- **Next.js 16.2** (App Router, Turbopack)
- **React 19**
- **Tailwind 4** (CSS-first @theme)
- **TypeScript 5**
- **GSAP 3** + ScrollTrigger
- **Lenis** (smooth scroll)
- **Three.js + R3F + drei** (atmosphere shader)
- **Motion** (drop-in for framer-motion)

## Struktura

```
app/
├── layout.tsx              # fonts, metadata, providers
├── globals.css             # design tokens (OKLCH) + utilities
├── page.tsx                # home (hero + projects + services + about teaser)
├── projekty/page.tsx
├── o-mnie/page.tsx
├── kontakt/page.tsx
├── uslugi/
│   ├── page.tsx            # services index
│   └── [slug]/page.tsx     # SEO landing pages (5 sztuk)
├── sitemap.ts
└── robots.ts

components/
├── providers/SmoothScroll.tsx     # Lenis
├── ui/Cursor.tsx                  # custom cursor + halo
├── layout/Nav.tsx, Footer.tsx
└── home/
    ├── Hero.tsx
    ├── Atmosphere.tsx             # WebGL gradient + simplex noise
    ├── ProjectsScroll.tsx         # GSAP ScrollTrigger reveals
    ├── ServicesPreview.tsx
    └── AboutTease.tsx

lib/
├── projects.ts             # 34 projekty
└── services.ts             # 5 landing pages SEO
```

## Lokalnie

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Konfiguracja

Ustaw `NEXT_PUBLIC_SITE_URL` w `.env.local` (np. `https://marcinsiwonia.pl`).
Domyślnie używa placeholderu, wpływa na canonical, OG, sitemap, schema.org.

## Deploy na Vercel (zalecany)

1. Wepchnij repo na GitHub (np. branch `redesign-2026` na `SiwsON1/Portfolio`).
2. Wejdź na vercel.com, New Project, wybierz repo.
3. Root directory: `portfolio-redesign`.
4. Env vars: `NEXT_PUBLIC_SITE_URL` = docelowy URL.
5. Deploy. Preview link działa od razu.

## Deploy na Hostinger

1. `npm run build`, output w `.next/`.
2. Upload przez FTP albo git deploy w panelu Hostinger.
3. Hostinger Premium / Business obsługuje Node.js, wybierz Node 20.
4. Podaj `npm start` jako entrypoint (port 3000 lub przekierowany).
5. DNS: A/CNAME na IP Hostingera.

## SEO

- `app/sitemap.ts` generuje sitemap.xml automatycznie z routes + services
- `app/robots.ts` generuje robots.txt
- Schema.org: Person (home), Service + FAQPage (każde landing /uslugi/*)
- Metadata API per route (canonical, OG, Twitter)
- `lang="pl"` na html

## Design tokens

Wszystkie kolory w OKLCH w `app/globals.css`. Paleta Atmosfera:

- `--bg`: deep midnight `oklch(14% 0.02 280)`
- `--ink`: warm cream `oklch(94% 0.015 60)`
- `--peach`: hero accent `oklch(78% 0.13 50)`
- `--overcast`: cool accent `oklch(60% 0.12 220)`

Fonts:

- **Display**: Instrument Serif (italic 400) — duże nagłówki, hero
- **Sans**: Geist — body, nawigacja
- **Mono**: Geist Mono — eyebrows, technical labels
