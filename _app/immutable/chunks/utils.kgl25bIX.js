const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./en.lJ_IAvhS.js","./disclose-version.DL9-44ss.js","./runtime.CCR2srIL.js","./fr.CKhYEy-J.js","./en.C-95mSKJ.js","./Image.C1Ed4ify.js","./attributes.huZdrSv8.js","./props.BUXfLPST.js","./store.D923xrEi.js","./svelte-head.DHIDUCQN.js","./paths.CTkBgBmK.js","../assets/Image.BmOrz0NB.css","./fr.D3wIfT7X.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper.C1FmrZbK.js";async function d(l,i){let u;l==="news"?u=Object.assign({"/src/content/news/website-launch/en.svx":()=>a(()=>import("./en.lJ_IAvhS.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/content/news/website-launch/fr.svx":()=>a(()=>import("./fr.CKhYEy-J.js"),__vite__mapDeps([3,1,2]),import.meta.url)}):l==="projects"&&(u=Object.assign({"/src/content/projects/coeso/en.svx":()=>a(()=>import("./en.C-95mSKJ.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]),import.meta.url),"/src/content/projects/coeso/fr.svx":()=>a(()=>import("./fr.D3wIfT7X.js"),__vite__mapDeps([12,1,2,5,6,7,8,9,10,11]),import.meta.url)}));const o={},p=Object.entries(u);await Promise.all(p.map(async([t,s])=>{const{metadata:e}=await s(),r=t.split("/").pop().replace(".svx","");let n;if(l==="news"?n=t.match(/\/news\/([^\/]+)\//):l==="projects"&&(n=t.match(/\/projects\/([^\/]+)\//)),n){const _=n[1];o[_]||(o[_]={}),o[_][r]=e}}));let c=[],m=Object.keys(o);for(let t=0;t<m.length;t++){let s=m[t],e=o[s],r=Object.keys(e);r.includes(i)?(e[i].slug=s,e[i].lang=i,c.push(e[i])):r.includes("en")?(e.en.slug=s,e.en.lang="en",c.push(e.en)):(e[r[0]].slug=s,e[r[0]].lang=r[0],c.push(e[r[0]]))}return c.sort((t,s)=>new Date(s.date)-new Date(t.date)),c}export{d as g};
