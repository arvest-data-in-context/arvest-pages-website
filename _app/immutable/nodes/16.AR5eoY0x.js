const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/en.Bl8V4Ogb.js","../chunks/disclose-version.BMwdIqI7.js","../chunks/runtime.BJWdkgwk.js","../chunks/fr.D3ScC0Us.js"])))=>i.map(i=>d[i]);
import{_}from"../chunks/preload-helper.C1FmrZbK.js";import{_ as $,A as b}from"../chunks/articles.DVH-ijjV.js";import{s as S,l as C}from"../chunks/stores.BQfbje1l.js";import{a as A,t as P}from"../chunks/disclose-version.BMwdIqI7.js";import{p as q,Q as z,f as H,t as V,a as M,C as r,s as l,c as i,r as o,R as Q,T as k}from"../chunks/runtime.BJWdkgwk.js";import{a as u}from"../chunks/store.DdBuXZVG.js";import{B as F,e as G,i as J}from"../chunks/BreadCrumbs.CzN8U1DO.js";import{c as K}from"../chunks/svelte-component.2qtmzs3L.js";import{s as N}from"../chunks/attributes.DGz1W63B.js";import{i as U}from"../chunks/lifecycle.CgRbj8M3.js";import{p as W}from"../chunks/props.BtbFXab1.js";import{b as m}from"../chunks/paths.DY3VQIwg.js";import{B as x}from"../chunks/footer.CQiFuk1L.js";const X=!0,Y=Object.assign({"../../../../../content/news/website-launch/en.svx":()=>_(()=>import("../chunks/en.Bl8V4Ogb.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../../../content/news/website-launch/fr.svx":()=>_(()=>import("../chunks/fr.D3ScC0Us.js"),__vite__mapDeps([3,1,2]),import.meta.url)});function Z(){const s=new Set;for(const a in Y){const e=a.match(/\/news\/([^\/]+)\/[^\/]+\.svx$/);e&&s.add(e[1])}return Array.from(s)}async function tt(){const s=Z(),a=[];for(const e of s)for(const t of S)a.push({slug:e,lang:t});return a}async function et({params:s}){const{slug:a,lang:e}=s;try{return{article:await $(Object.assign({"../../../../../content/news/website-launch/en.svx":()=>_(()=>import("../chunks/en.Bl8V4Ogb.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../../../content/news/website-launch/fr.svx":()=>_(()=>import("../chunks/fr.D3ScC0Us.js"),__vite__mapDeps([3,1,2]),import.meta.url)}),`../../../../../content/news/${a}/${e}.svx`,9),this_slug:a}}catch{try{return{article:await $(Object.assign({"../../../../../content/news/website-launch/en.svx":()=>_(()=>import("../chunks/en.Bl8V4Ogb.js"),__vite__mapDeps([0,1,2]),import.meta.url)}),`../../../../../content/news/${a}/en.svx`,9),this_slug:a}}catch(n){console.log(n)}}}const gt=Object.freeze(Object.defineProperty({__proto__:null,entries:tt,load:et,prerender:X},Symbol.toStringTag,{value:"Module"}));var at=P('<li class="svelte-18rjwlf"> </li>'),rt=P('<!> <div class="news_article_div"><div class="article_top_image svelte-18rjwlf"><img alt="article main illustration" class="svelte-18rjwlf"></div> <!> <div class="metadata svelte-18rjwlf"><p class="svelte-18rjwlf"> </p> <p class="svelte-18rjwlf"> </p> <p class="svelte-18rjwlf"> </p> <ul></ul></div></div>',1);function ht(s,a){q(a,!1);let e=W(a,"data",8),t=Q();C.subscribe(c=>{z(t,c)}),U();var n=rt(),p=H(n),R=k(()=>[{text:x.home[r(t)],href:m+"/"+r(t)},{text:x.community[r(t)],href:m+"/"+r(t)+"/community"},{text:x.news[r(t)],href:m+"/"+r(t)+"/community/news"},{text:e().article.metadata.title,href:m+"/"+r(t)+"/community/news/"+e().this_slug}]);F(p,{get breadcrumbs(){return r(R)}});var j=l(p,2),v=i(j),T=i(v);o(v);var y=l(v,2);K(y,()=>e().article.default,(c,h)=>{h(c,{})});var E=l(y,2),f=i(E),D=i(f);o(f);var d=l(f,2),I=i(d);o(d);var g=l(d,2),L=i(g);o(g);var O=l(g,2);G(O,5,()=>e().article.metadata.tags,J,(c,h)=>{var w=at(),B=i(w);o(w),V(()=>u(B,`- ${r(h)??""}`)),A(c,w)}),o(O),o(E),o(j),V(()=>{N(T,"src",m+"/"+e().article.metadata.image),u(D,`${b.author[r(t)]??""}: ${e().article.metadata.author??""}`),u(I,`${b.date[r(t)]??""}: ${e().article.metadata.date??""}`),u(L,`${b.tags[r(t)]??""}:`)}),A(s,n),M()}export{ht as component,gt as universal};
