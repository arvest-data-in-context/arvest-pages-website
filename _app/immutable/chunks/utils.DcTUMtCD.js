const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./en.v0qGiMmf.js","./disclose-version.D8C51Dr6.js","./runtime.DKhLse5e.js","./fr.BpMz-Trt.js","./en.C3O2sJM8.js","./Image.B9PYHsh5.js","./attributes.BqLNPSa5.js","./props.DuIa4qV2.js","./store.qd_lgfPG.js","./svelte-head.MF9HooQ0.js","./paths.D7A2VYdO.js","../assets/Image.BmOrz0NB.css","./fr.PaBEAJi6.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper.C1FmrZbK.js";async function d(l,i){let u;l==="news"?u=Object.assign({"/src/content/news/website-launch/en.svx":()=>a(()=>import("./en.v0qGiMmf.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/content/news/website-launch/fr.svx":()=>a(()=>import("./fr.BpMz-Trt.js"),__vite__mapDeps([3,1,2]),import.meta.url)}):l==="projects"&&(u=Object.assign({"/src/content/projects/coeso/en.svx":()=>a(()=>import("./en.C3O2sJM8.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]),import.meta.url),"/src/content/projects/coeso/fr.svx":()=>a(()=>import("./fr.PaBEAJi6.js"),__vite__mapDeps([12,1,2,5,6,7,8,9,10,11]),import.meta.url)}));const o={},p=Object.entries(u);await Promise.all(p.map(async([t,s])=>{const{metadata:e}=await s(),r=t.split("/").pop().replace(".svx","");let n;if(l==="news"?n=t.match(/\/news\/([^\/]+)\//):l==="projects"&&(n=t.match(/\/projects\/([^\/]+)\//)),n){const _=n[1];o[_]||(o[_]={}),o[_][r]=e}}));let c=[],m=Object.keys(o);for(let t=0;t<m.length;t++){let s=m[t],e=o[s],r=Object.keys(e);r.includes(i)?(e[i].slug=s,e[i].lang=i,c.push(e[i])):r.includes("en")?(e.en.slug=s,e.en.lang="en",c.push(e.en)):(e[r[0]].slug=s,e[r[0]].lang=r[0],c.push(e[r[0]]))}return c.sort((t,s)=>new Date(s.date)-new Date(t.date)),c}export{d as g};
