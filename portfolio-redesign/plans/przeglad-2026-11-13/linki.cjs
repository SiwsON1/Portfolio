const fs=require("fs"),path=require("path");
const root=".next/server/app";const pages={};
(function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);const st=fs.statSync(p);if(st.isDirectory())walk(p);else if(f.endsWith(".html")){let url="/"+path.relative(root,p).split(path.sep).join("/").replace(/\.html$/,"").replace(/^index$/,"");if(url.endsWith("/index"))url=url.slice(0,-6);pages[url]=fs.readFileSync(p,"utf8");}}})(root);
const inbound={},outCount={};
for(const [url,html] of Object.entries(pages)){
  const m=html.match(/<main[\s\S]*?<\/main>/);if(!m)continue;
  const hrefs=[...m[0].matchAll(/href="(\/[^"#?]*)"/g)].map(x=>x[1].replace(/\/$/,"")||"/");
  const uniq=[...new Set(hrefs)].filter(h=>h!==url);outCount[url]=uniq.length;
  for(const h of uniq)(inbound[h]=inbound[h]||new Set()).add(url);
}
const keys=Object.keys(pages).filter(u=>!/(_not-found|opengraph|icon|manifest|robots|sitemap|llms|lab|api)/.test(u));
const rows=keys.map(u=>({u,in:(inbound[u]||new Set()).size,out:outCount[u]||0,zBloga:[...(inbound[u]||[])].filter(x=>x.startsWith("/blog/")).length}));
const grp=p=>rows.filter(r=>p(r.u)).sort((a,b)=>a.in-b.in);
console.log("USLUGI (in / z bloga / out)");grp(u=>u.startsWith("/uslugi/")).forEach(r=>console.log(r.in,r.zBloga,r.out,r.u));
console.log("\nBRANZE/ROOT");grp(u=>!u.startsWith("/uslugi")&&!u.startsWith("/blog")&&!u.startsWith("/projekty")).forEach(r=>console.log(r.in,r.zBloga,r.out,r.u));
console.log("\nBLOG najsłabsze 15");grp(u=>u.startsWith("/blog/")).slice(0,15).forEach(r=>console.log(r.in,r.out,r.u));
console.log("\nBLOG liczba:",grp(u=>u.startsWith("/blog/")).length,"bez linków przychodzących z treści:",grp(u=>u.startsWith("/blog/")).filter(r=>r.in===0).length);
