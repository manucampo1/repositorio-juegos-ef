import fs from "node:fs";
import path from "node:path";

const root=path.resolve(import.meta.dirname,"..");
const sources=["app.js","popular-games.js","sports-games.js","cooldown-games-2.js","jump-rope-games.js"];
const normalize=value=>value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");
const titles=sources.flatMap(file=>{
  const contents=fs.readFileSync(path.join(root,file),"utf8");
  return [...contents.matchAll(/title:\s*"([^"]+)"/g)].map(match=>({title:match[1],file}));
});
const seen=new Map();
const duplicates=[];
for(const item of titles){
  const key=normalize(item.title);
  if(seen.has(key))duplicates.push([seen.get(key),item]);
  else seen.set(key,item);
}
if(duplicates.length){
  console.error("Se han encontrado juegos duplicados:");
  for(const [first,second] of duplicates)console.error(`- ${first.title} (${first.file}) / ${second.title} (${second.file})`);
  process.exit(1);
}
console.log(`Comprobación correcta: ${titles.length} juegos y ningún título duplicado.`);
