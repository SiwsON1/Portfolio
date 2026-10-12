// node qa/eav/sprawdz-live.mjs /uslugi/x /tworzenie-stron-dla-y ...
// Szybka kontrola po wdrożeniu: title, H1, surowe linki Markdown, FAQPage, półpauzy w treści.
const paths = process.argv.slice(2);
for (const p of paths) {
  const r = await fetch("https://marcinsiwonia.pl" + p + "?v=" + Date.now());
  const h = await r.text();
  const title = (h.match(/<title>([^<]*)/) || [])[1];
  const h1 = (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, "").trim();
  const body = h.replace(/<script[\s\S]*?<\/script>/g, "");
  const raw = (body.match(/\]\(\//g) || []).length;
  const faq = h.includes('"FAQPage"');
  const dash = (body.match(/ [—–] /g) || []).length;
  console.log(r.status, p, "|", title, "|", h1?.slice(0, 60), "| rawMd", raw, "| faq", faq, "| dashes", dash);
}
