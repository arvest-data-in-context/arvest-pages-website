const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/en.BCVe4Bte.js","../chunks/disclose-version.BMwdIqI7.js","../chunks/runtime.BJWdkgwk.js","../chunks/fr.C4LqVea8.js","../chunks/en.BA5RW3dZ.js","../chunks/TestComponent.CEnObhNl.js","../chunks/fr.BC4RjgVq.js","../chunks/en.DARiyeU8.js"])))=>i.map(i=>d[i]);
import{_ as u}from"../chunks/preload-helper.C1FmrZbK.js";import{a as O,t as k}from"../chunks/disclose-version.BMwdIqI7.js";import{p as N,Q as z,f as q,a as Q,C as a,s as d,c as _,r as m,t as V,R as F,T as G}from"../chunks/runtime.BJWdkgwk.js";import{a as h}from"../chunks/store.DdBuXZVG.js";import{B as H,e as j,i as A}from"../chunks/BreadCrumbs.CzN8U1DO.js";import{s as I}from"../chunks/attributes.DGz1W63B.js";import{i as J}from"../chunks/lifecycle.CgRbj8M3.js";import{p as K}from"../chunks/props.BtbFXab1.js";import{o as U}from"../chunks/index-client.DcJrXymy.js";import{b as v}from"../chunks/paths.DeGafUnR.js";import{l as W}from"../chunks/stores.Bzh3Zw9p.js";import{B as P}from"../chunks/footer.CQiFuk1L.js";async function X(g,o){let r;r=Object.assign({"/src/content/news/article_1/en.svx":()=>u(()=>import("../chunks/en.BCVe4Bte.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/content/news/article_1/fr.svx":()=>u(()=>import("../chunks/fr.C4LqVea8.js"),__vite__mapDeps([3,1,2]),import.meta.url),"/src/content/news/article_2/en.svx":()=>u(()=>import("../chunks/en.BA5RW3dZ.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),"/src/content/news/article_2/fr.svx":()=>u(()=>import("../chunks/fr.BC4RjgVq.js"),__vite__mapDeps([6,1,2,5]),import.meta.url),"/src/content/news/article_3/en.svx":()=>u(()=>import("../chunks/en.DARiyeU8.js"),__vite__mapDeps([7,1,2,5]),import.meta.url)});const n={},f=Object.entries(r);await Promise.all(f.map(async([l,t])=>{const{metadata:e}=await t(),s=l.split("/").pop().replace(".svx",""),i=l.match(/\/news\/([^\/]+)\//);if(i){const p=i[1];n[p]||(n[p]={}),n[p][s]=e}}));let c=[],b=Object.keys(n);for(let l=0;l<b.length;l++){let t=b[l],e=n[t],s=Object.keys(e);s.includes(o)?(e[o].slug=t,e[o].lang=o,c.push(e[o])):s.includes("en")?(e.en.slug=t,e.en.lang="en",c.push(e.en)):(e[s[0]].slug=t,e[s[0]].lang=s[0],c.push(e[s[0]]))}return c.sort((l,t)=>new Date(t.date)-new Date(l.date)),c}async function Y({params:g}){return{articles:await X("news",g.lang||"en")}}const de=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));var Z=k('<p class="tag_box svelte-1gl5l6a"> </p>'),ee=k('<a class="article_card svelte-1gl5l6a"><div class="image_container svelte-1gl5l6a"></div> <div class="text_part svelte-1gl5l6a"><h2 class="svelte-1gl5l6a"> </h2> <p class="desc svelte-1gl5l6a"> </p> <div class="lower_part svelte-1gl5l6a"><p class="svelte-1gl5l6a"> </p> <!></div></div></a>'),te=k('<!> <div class="cont svelte-1gl5l6a"></div>',1);function ve(g,o){N(o,!1);let r=F();W.subscribe(t=>{z(r,t)});let n=K(o,"data",8);U(()=>{const t=document.getElementsByClassName("image_container");for(let e=0;e<t.length;(e+=1)-1){let s=Number(t[e].id.split("img_cont_")[1]),i="url('"+v+"/"+n().articles[s].image+"')";t[e].style.backgroundImage=i,t[e].style.backgroundSize="cover",t[e].style.backgroundPosition="center"}}),J();var f=te(),c=q(f),b=G(()=>[{text:P.home[a(r)],href:v+"/"+a(r)},{text:P.community[a(r)],href:v+"/"+a(r)+"/community"},{text:P.news[a(r)],href:v+"/"+a(r)+"/community/news"}]);H(c,{get breadcrumbs(){return a(b)}});var l=d(c,2);j(l,5,()=>n().articles,A,(t,e,s)=>{var i=ee(),p=_(i);I(p,"id",`img_cont_${s??""}`);var D=d(p,2),x=_(D),R=_(x,!0);m(x);var y=d(x,2),B=_(y,!0);m(y);var T=d(y,2),w=_(T),L=_(w,!0);m(w);var C=d(w,2);j(C,1,()=>a(e).tags,A,(S,$)=>{var E=Z(),M=_(E,!0);m(E),V(()=>h(M,a($))),O(S,E)}),m(T),m(D),m(i),V(()=>{I(i,"href",`${v??""}${`/${a(r)}/community/news/${a(e).slug}`??""}`),h(R,a(e).title),h(B,a(e).description),h(L,a(e).date)}),O(t,i)}),m(l),O(g,f),Q()}export{ve as component,de as universal};
