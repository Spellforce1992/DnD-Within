
import { readFileSync } from 'fs';
const src = readFileSync('data.js','utf8');
const DATA = eval('(' + src.replace('const DATA =','').replace(/;s*$/,'') + ')');
console.log('pool:', Object.keys(DATA.spellPool).length);
console.log('classes:', Object.keys(DATA.spells));
console.log('wiz9:', DATA.spells.wizard[9].length);
console.log('bard9:', DATA.spells.bard[9].length);  
console.log('cleric9:', DATA.spells.cleric[9].length);
console.log('druid9:', DATA.spells.druid[9].length);
console.log('paladin max:', Math.max(...Object.keys(DATA.spells.paladin).map(Number)));
console.log('ranger max:', Math.max(...Object.keys(DATA.spells.ranger).map(Number)));
// validate
let miss = [];
for (const [cls, levels] of Object.entries(DATA.spells)) {
  for (const [l, names] of Object.entries(levels)) {
    for (const n of names) if (!DATA.spellPool[n]) miss.push(cls+'L'+l+':'+n);
  }
}
console.log('missing:', miss.length ? miss : 'none');
