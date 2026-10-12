const { chromium } = require('playwright');
const OUT = 'C:/Users/mahin/Desktop/pulpit/portfolio-ms/portfolio-redesign/qa/zr-czytanie/';
const BASE = process.env.BASE || 'http://127.0.0.1:3091';
const POSTS = { perf: '/blog/core-web-vitals-2026', wp: '/blog/co-zrobic-po-instalacji-wordpressa', nx: '/blog/server-actions-nextjs', ai: '/blog/wdrozenia-ai-w-malych-firmach' };
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[1440, 900], [768, 1024], [375, 812]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript(() => { try { localStorage.setItem('cookie-consent', JSON.stringify({ level: 'necessary' })); } catch {} });
    const p = await ctx.newPage();
    for (const [tag, slug] of Object.entries(POSTS)) {
      if (w !== 1440 && tag !== 'perf') continue;
      await p.goto(BASE + slug, { waitUntil: 'domcontentloaded', timeout: 240000 });
      await p.waitForSelector('figure.pf', { timeout: 240000 });
      await p.evaluate(() => window.scrollTo(0, document.querySelector('h1.post-title').getBoundingClientRect().top + scrollY - 120));
      await p.waitForTimeout(4200);
      await p.screenshot({ path: `${OUT}pf-${tag}-${w}.png` });
      console.log(w, tag, 'poziomy scroll', await p.evaluate(() => document.documentElement.scrollWidth - innerWidth));
    }
    await ctx.close();
  }
  await b.close();
})();
