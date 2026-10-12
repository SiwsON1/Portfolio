const { chromium } = require('playwright');
const OUT = 'C:/Users/mahin/Desktop/pulpit/portfolio-ms/portfolio-redesign/qa/zr-czytanie/';
const BASE = process.env.BASE || 'http://127.0.0.1:3091';
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[1440, 900], [375, 812]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript(() => { try { localStorage.setItem('cookie-consent', JSON.stringify({ level: 'necessary' })); } catch {} });
    const p = await ctx.newPage();
    // Wjazd tytułu startuje przy renderze; przewijam do niego od razu i łapię trzy chwile animacji.
    await p.goto(BASE + '/blog/core-web-vitals-2026', { waitUntil: 'commit', timeout: 240000 });
    await p.waitForSelector('h1.post-title', { timeout: 240000 });
    await p.evaluate(() => window.scrollTo(0, Math.max(0, document.querySelector('h1.post-title').getBoundingClientRect().top + scrollY - 200)));
    for (const [ms, tag] of [[350, 'a'], [900, 'b'], [3200, 'c']]) {
      await p.waitForTimeout(ms === 350 ? 350 : ms === 900 ? 550 : 2300);
      await p.screenshot({ path: `${OUT}tytul-${w}-${tag}.png` });
    }
    await ctx.close();
  }
  await b.close();
})();
