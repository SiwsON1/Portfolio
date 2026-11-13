#!/bin/bash
# Lighthouse mobile dla listy URL, wynik JSON per strona w psi/
cd "$(dirname "$0")"
i=0
while read -r u; do
  i=$((i+1)); [ -z "$u" ] && continue
  f="psi/$(printf '%02d' $i).json"
  [ -s "$f" ] && continue
  timeout 150 npx -y lighthouse@11.7.1 "$u" --only-categories=performance --output=json --output-path="$f" --chrome-flags="--headless=new" --quiet >/dev/null 2>&1 || echo "blad $u"
done < psi-urls.txt
node -e '
const fs=require("fs");const rows=[];
for(const f of fs.readdirSync("psi").sort()){try{const j=JSON.parse(fs.readFileSync("psi/"+f));const a=j.audits;
rows.push({url:j.finalDisplayedUrl||j.requestedUrl,wynik:Math.round((j.categories.performance.score||0)*100),lcp:a["largest-contentful-paint"]?.displayValue,tbt:a["total-blocking-time"]?.displayValue,cls:a["cumulative-layout-shift"]?.displayValue,kb:Math.round((a["total-byte-weight"]?.numericValue||0)/1024),blad:j.runtimeError?.code})}catch(e){}}
fs.writeFileSync("psi-wynik.json",JSON.stringify(rows,null,1));console.log(rows.length)'
