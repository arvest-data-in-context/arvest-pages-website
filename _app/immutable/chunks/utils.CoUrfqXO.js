const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./en.0IlhZ09_.js","./disclose-version.DeS0T4Yg.js","./runtime.CLk9xquY.js","./fr.B4_z_9b7.js","./en.Cd9eX_zf.js","./Image.BdKRbzxe.js","./attributes.BTAS-wgr.js","./props.DbDAe7oc.js","./store.C3_DbXpi.js","./svelte-head.CEOkTZm9.js","./paths.CEdW23PB.js","../assets/Image.jeVlMAW0.css","./fr.BcP62wbW.js","./en.B5fgareI.js","./en.m2EzUM14.js","./en.YZxsm3zH.js","./en.DGoeqR2c.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper.C1FmrZbK.js";async function f(o,l){let a;o==="news"?a=Object.assign({"/src/content/news/website-launch/en.svx":()=>i(()=>import("./en.0IlhZ09_.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/content/news/website-launch/fr.svx":()=>i(()=>import("./fr.B4_z_9b7.js"),__vite__mapDeps([3,1,2]),import.meta.url)}):o==="projects"?a=Object.assign({"/src/content/projects/coeso/en.svx":()=>i(()=>import("./en.Cd9eX_zf.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]),import.meta.url),"/src/content/projects/coeso/fr.svx":()=>i(()=>import("./fr.BcP62wbW.js"),__vite__mapDeps([12,1,2,5,6,7,8,9,10,11]),import.meta.url)}):o==="tutorials"&&(a=Object.assign({"/src/content/tutorials/ml-image-embedding/en.svx":()=>i(()=>import("./en.B5fgareI.js"),__vite__mapDeps([13,1,2]),import.meta.url),"/src/content/tutorials/ml-network-analysis/en.svx":()=>i(()=>import("./en.m2EzUM14.js"),__vite__mapDeps([14,1,2]),import.meta.url),"/src/content/tutorials/ml-speech-recognition/en.svx":()=>i(()=>import("./en.YZxsm3zH.js"),__vite__mapDeps([15,1,2]),import.meta.url),"/src/content/tutorials/ml-video-decomposition/en.svx":()=>i(()=>import("./en.DGoeqR2c.js"),__vite__mapDeps([16,1,2]),import.meta.url)}));const n={},p=Object.entries(a);await Promise.all(p.map(async([t,s])=>{const{metadata:e}=await s(),r=t.split("/").pop().replace(".svx","");let _;if(o==="news"?_=t.match(/\/news\/([^\/]+)\//):o==="projects"?_=t.match(/\/projects\/([^\/]+)\//):o==="tutorials"&&(_=t.match(/\/tutorials\/([^\/]+)\//)),_){const m=_[1];n[m]||(n[m]={}),n[m][r]=e}}));let c=[],u=Object.keys(n);for(let t=0;t<u.length;t++){let s=u[t],e=n[s],r=Object.keys(e);r.includes(l)?(e[l].slug=s,e[l].lang=l,c.push(e[l])):r.includes("en")?(e.en.slug=s,e.en.lang="en",c.push(e.en)):(e[r[0]].slug=s,e[r[0]].lang=r[0],c.push(e[r[0]]))}return c.sort((t,s)=>new Date(s.date)-new Date(t.date)),c}export{f as g};
