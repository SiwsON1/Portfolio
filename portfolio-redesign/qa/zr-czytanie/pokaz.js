const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  await ctx.addInitScript(() => { try { localStorage.setItem('cookie-consent', JSON.stringify({ level: 'necessary' })); } catch {} });
  const p = await ctx.newPage();
  await p.goto('http://127.0.0.1:3091/blog/core-web-vitals-2026', { waitUntil: 'domcontentloaded', timeout: 240000 });
  await p.waitForSelector('figure.pf', { timeout: 240000 });
  await p.evaluate(() => window.scrollTo(0, document.querySelector('h1.post-title').getBoundingClientRect().top + scrollY - 120));
  await p.waitForTimeout(800);
  // Zatrzymuję animacje w chwili, gdy wszystkie wskaźniki są już zielone (ok. 4,9 s cyklu plus opóźnienia).
  await p.evaluate(() => document.getAnimations().forEach((a) => { try { a.currentTime = 5200; a.pause(); } catch {} }));
  await p.waitForTimeout(300);
  await p.screenshot({ path: 'C:/Users/mahin/Desktop/pulpit/portfolio-ms/portfolio-redesign/qa/zr-czytanie/przyklad-ilustracji.png' });
  await b.close();
})();
