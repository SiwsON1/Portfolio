const { chromium } = require('playwright');
const OUT = 'C:/Users/mahin/Desktop/pulpit/portfolio-ms/portfolio-redesign/qa/zr-czytanie/';
const BASE = process.env.BASE || 'http://127.0.0.1:3091';
const SLUG = '/blog/co-zrobic-po-instalacji-wordpressa';
// Headless Chromium nie ma polskich głosów: podstawiam udawany głos, który „mówi” każdy akapit 1,2 s.
const fakeSpeech = () => {
  const voice = { name: 'Zofia Online (Natural)', lang: 'pl-PL', default: true, localService: false, voiceURI: 'pl' };
  let timer = null;
  const fake = {
    getVoices: () => [voice],
    addEventListener: () => {},
    speak: (u) => { clearTimeout(timer); let n = 0; const tick = () => { if (n++ < 8) { u.onboundary && u.onboundary({ name: 'word' }); timer = setTimeout(tick, 220); } else u.onend && u.onend(); }; timer = setTimeout(tick, 150); },
    cancel: () => clearTimeout(timer),
    pause: () => {}, resume: () => {},
  };
  Object.defineProperty(window, 'speechSynthesis', { value: fake, configurable: true });
  window.SpeechSynthesisUtterance = function (t) { this.text = t; };
};
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[1440, 900], [768, 1024], [375, 812]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript(fakeSpeech);
    await ctx.addInitScript(() => { try { localStorage.setItem('cookie-consent', JSON.stringify({ level: 'necessary' })); } catch {} });
    const p = await ctx.newPage();
    await p.goto(BASE + SLUG, { waitUntil: 'domcontentloaded', timeout: 240000 });
    await p.waitForTimeout(6000);
    const btn = p.getByRole('button', { name: 'Posłuchaj wpisu' });
    await btn.scrollIntoViewIfNeeded();
    await p.evaluate(() => scrollBy(0, -200));
    await p.waitForTimeout(500);
    await p.screenshot({ path: `${OUT}${w}-1-start.png` });
    await btn.click();
    await p.waitForTimeout(1200);
    await p.evaluate(() => document.querySelector('.flow-cover')?.scrollIntoView({ block: 'center' }));
    await p.waitForTimeout(700);
    await p.screenshot({ path: `${OUT}${w}-2-czyta.png` });
    await p.evaluate(() => document.getElementById('section-2')?.scrollIntoView());
    await p.waitForTimeout(1500);
    await p.screenshot({ path: `${OUT}${w}-3-szyna.png` });
    const sw = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    console.log(w, 'poziomy scroll', sw);
    await ctx.close();
  }
  await b.close();
})();
