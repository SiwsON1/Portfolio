import { chromium } from "playwright";
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

/**
 * Generuje świeże screeny live URL-i wybranych projektów do trzech rozmiarów:
 * - desktop  1920×1200 (full hero, na cabinet home + case study top)
 * - card     1440×1080 (4:3, alternative crop dla cabinet/cards)
 * - mobile    750×1500 (mobile preview, na case study mobile section)
 *
 * Wynik trafia do public/projects-fresh/<slug>-{desktop,card,mobile}.{webp,jpg}
 */

const TARGETS = [
  { slug: "kancelaria-mpiontek", url: "https://kancelaria-mpiontek.pl/" },
  { slug: "apartamenty-zlota-grota", url: "https://apartamentyzlotagrota.pl/" },
  { slug: "queen-scarlet", url: "https://marcin.przedprojekt.com/QueenScarlet2/" },
  { slug: "businesstokenizer", url: "https://businesstokenizer.com/" },
];

const OUT = path.resolve("public/projects-fresh");
const VIEWPORTS = [
  { name: "desktop", width: 1920, height: 1200, scrollY: 0 },
  { name: "card", width: 1440, height: 1080, scrollY: 0 },
  { name: "mobile", width: 750, height: 1500, scrollY: 0 },
];

const HIDE_BANNERS_CSS = `
  /* Hide common cookie/consent banners + popups so screen is clean */
  [class*="cookie" i], [id*="cookie" i],
  [class*="consent" i], [id*="consent" i],
  [class*="gdpr" i], [class*="rodo" i],
  [class*="popup" i], [id*="popup" i],
  [class*="modal" i][class*="overlay" i],
  iframe[src*="recaptcha" i],
  .CookieConsent, #onetrust-banner-sdk, .ot-sdk-container { display: none !important; }
`;

await fs.mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const t of TARGETS) {
  console.log(`\n→ ${t.slug} (${t.url})`);
  for (const vp of VIEWPORTS) {
    try {
      const ctx = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1.5,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
      });
      const page = await ctx.newPage();
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.addStyleTag({ content: HIDE_BANNERS_CSS });
      // Scroll to trigger lazy images, then back to top
      await page.evaluate(async () => {
        await new Promise((r) => {
          let y = 0;
          const total = Math.min(document.documentElement.scrollHeight, window.innerHeight * 4);
          const step = () => {
            window.scrollTo(0, y);
            y += window.innerHeight * 0.6;
            if (y < total) setTimeout(step, 150);
            else { window.scrollTo(0, total); setTimeout(r, 400); }
          };
          step();
        });
      });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1800);

      const tmp = path.join(OUT, `${t.slug}-${vp.name}.png`);
      await page.screenshot({ path: tmp, fullPage: false, omitBackground: false });
      // Convert to webp + jpg via sharp (smaller, modern)
      const webp = path.join(OUT, `${t.slug}-${vp.name}.webp`);
      const jpg = path.join(OUT, `${t.slug}-${vp.name}.jpg`);
      await sharp(tmp).webp({ quality: 88 }).toFile(webp);
      await sharp(tmp).jpeg({ quality: 90, mozjpeg: true }).toFile(jpg);
      await fs.unlink(tmp);

      console.log(`  ✓ ${vp.name}: ${vp.width}×${vp.height} → ${path.basename(webp)} + .jpg`);
      await ctx.close();
    } catch (e) {
      console.log(`  ✗ ${vp.name}: ${e.message}`);
    }
  }
}

await browser.close();
console.log("\nDONE.");
