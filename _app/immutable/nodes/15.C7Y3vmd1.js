const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/en.BpyEfqMC.js","../chunks/disclose-version.B1eyUEY6.js","../chunks/runtime.DoZVManf.js","../chunks/fr._x60UpEr.js","../chunks/en.DdU92n9V.js","../chunks/TestComponent.DrBpHxNs.js","../chunks/fr.H0Rfv-9x.js","../chunks/en.DzrviOHC.js"])))=>i.map(i=>d[i]);
import{_ as v}from"../chunks/preload-helper.C1FmrZbK.js";import{a as k,t as E}from"../chunks/disclose-version.B1eyUEY6.js";import{p as S,X as $,a as M,C as t,c,s as b,r as p,t as D,as as q,aa as z}from"../chunks/runtime.DoZVManf.js";import{a as g}from"../chunks/store.BLjX5qTJ.js";import{B as N,e as V,i as j}from"../chunks/BreadCrumbs.Dhx1-_20.js";import{s as X}from"../chunks/attributes.DNNE01px.js";import{i as F}from"../chunks/lifecycle.BeGJy4M7.js";import{p as G}from"../chunks/props.C4f7Q6a0.js";import{b as h}from"../chunks/paths.DZKIbDyf.js";import{l as H}from"../chunks/stores.rN1oxsUS.js";import{B as O}from"../chunks/footer.CQiFuk1L.js";async function J(d,o){let a;a=Object.assign({"/src/content/news/article_1/en.svx":()=>v(()=>import("../chunks/en.BpyEfqMC.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/content/news/article_1/fr.svx":()=>v(()=>import("../chunks/fr._x60UpEr.js"),__vite__mapDeps([3,1,2]),import.meta.url),"/src/content/news/article_2/en.svx":()=>v(()=>import("../chunks/en.DdU92n9V.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),"/src/content/news/article_2/fr.svx":()=>v(()=>import("../chunks/fr.H0Rfv-9x.js"),__vite__mapDeps([6,1,2,5]),import.meta.url),"/src/content/news/article_3/en.svx":()=>v(()=>import("../chunks/en.DzrviOHC.js"),__vite__mapDeps([7,1,2,5]),import.meta.url)});const l={},u=Object.entries(a);await Promise.all(u.map(async([i,s])=>{const{metadata:e}=await s(),r=i.split("/").pop().replace(".svx",""),m=i.match(/\/news\/([^\/]+)\//);if(m){const _=m[1];l[_]||(l[_]={}),l[_][r]=e}}));let n=[],f=Object.keys(l);console.log(o);for(let i=0;i<f.length;i++){let s=f[i],e=l[s],r=Object.keys(e);r.includes(o)?(e[o].slug=s,e[o].lang=o,n.push(e[o])):r.includes("en")?(e.en.slug=s,e.en.lang="en",n.push(e.en)):(e[r[0]].slug=s,e[r[0]].lang=r[0],n.push(e[r[0]]))}return n.sort((i,s)=>new Date(s.date)-new Date(i.date)),console.log(n),n}async function K({params:d}){return{articles:await J("news",d.lang||"en")}}const ce=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));var Q=E('<p class="tag_box svelte-1kspfr2"> </p>'),U=E('<div class="article_card svelte-1kspfr2"><a class="svelte-1kspfr2"><h2 class="svelte-1kspfr2"> </h2> <p class="desc svelte-1kspfr2"> </p> <div class="lower_part svelte-1kspfr2"><p class="svelte-1kspfr2"> </p> <!></div></a></div>'),W=E('<div class="cont svelte-1kspfr2"><!> <!></div>');function pe(d,o){S(o,!1);let a=q();H.subscribe(s=>{$(a,s)});let l=G(o,"data",8);console.log(l().articles),F();var u=W(),n=c(u),f=z(()=>[{text:O.home[t(a)],href:h+"/"+t(a)},{text:O.community[t(a)],href:h+"/"+t(a)+"/community"},{text:O.news[t(a)],href:h+"/"+t(a)+"/community/news"}]);N(n,{get breadcrumbs(){return t(f)}});var i=b(n,2);V(i,1,()=>l().articles,j,(s,e)=>{var r=U(),m=c(r),_=c(m),A=c(_,!0);p(_);var x=b(_,2),T=c(x,!0);p(x);var P=b(x,2),w=c(P),I=c(w,!0);p(w);var L=b(w,2);V(L,1,()=>t(e).tags,j,(R,B)=>{var y=Q(),C=c(y,!0);p(y),D(()=>g(C,t(B))),k(R,y)}),p(P),p(m),p(r),D(()=>{X(m,"href",`${h??""}${`/${t(a)}/community/news/${t(e).slug}`??""}`),g(A,t(e).title),g(T,t(e).description),g(I,t(e).date)}),k(s,r)}),p(u),k(d,u),M()}export{pe as component,ce as universal};