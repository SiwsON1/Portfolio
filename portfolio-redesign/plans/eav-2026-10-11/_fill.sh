fill () 
{ 
    S=$1;
    node -e "const p=require('./obecna-$S.json').page;const fs=require('fs');let f=fs.readFileSync('_format-usluga.md','utf8').replace(/\{SLUG\}/g,'$S').replace('{INTRO}',p.intro.length).replace('{BULLETS}',p.bullets.length).replace('{PROCESS}',p.process.length).replace('{FAQ}',p.faq.length);fs.appendFileSync('brief-$S.md',f)"
}
