// PageSpeed Insights (mobile) dla naszych stron i konkurencji: lab + dane polowe CrUX.
import fs from "node:fs";
const [plik, out] = process.argv.slice(2);
const urls = fs.readFileSync(plik, "utf8").split(/\r?\n/).filter(Boolean);
const wyniki = [];
for (const url of urls) {
  for (let proba = 0; proba < 3; proba++) {
    try {
      const r = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?strategy=mobile&category=performance&url=${encodeURIComponent(url)}`);
      const j = await r.json();
      if (j.error) throw new Error(j.error.message);
      const a = j.lighthouseResult.audits;
      const f = j.loadingExperience?.metrics ?? {};
      const fo = j.originLoadingExperience?.metrics ?? {};
      wyniki.push({
        url,
        wynik: Math.round(j.lighthouseResult.categories.performance.score * 100),
        lcp: a["largest-contentful-paint"].displayValue,
        tbt: a["total-blocking-time"].displayValue,
        cls: a["cumulative-layout-shift"].displayValue,
        waga: Math.round(a["total-byte-weight"].numericValue / 1024) + " KB",
        pole_lcp: f.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null,
        pole_inp: f.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
        pole_cls: f.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile ?? null,
        domena_lcp: fo.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null,
        domena_inp: fo.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
      });
      break;
    } catch (e) {
      if (proba === 2) wyniki.push({ url, blad: String(e.message).slice(0, 150) });
      await new Promise((s) => setTimeout(s, 5000));
    }
  }
  fs.writeFileSync(out, JSON.stringify(wyniki, null, 1));
  process.stdout.write(".");
}
console.log("\ngotowe", wyniki.length);
