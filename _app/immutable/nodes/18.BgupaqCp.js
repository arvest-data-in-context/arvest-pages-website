const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/en.C-95mSKJ.js","../chunks/disclose-version.DL9-44ss.js","../chunks/runtime.CCR2srIL.js","../chunks/Image.C1Ed4ify.js","../chunks/attributes.huZdrSv8.js","../chunks/props.BUXfLPST.js","../chunks/store.D923xrEi.js","../chunks/svelte-head.DHIDUCQN.js","../chunks/paths.CTkBgBmK.js","../assets/Image.BmOrz0NB.css","../chunks/fr.D3wIfT7X.js"])))=>i.map(i=>d[i]);
import{_ as p}from"../chunks/preload-helper.C1FmrZbK.js";import{_ as $,A as b}from"../chunks/articles.DVH-ijjV.js";import{s as S,l as C}from"../chunks/stores.DIGDbtsB.js";import{a as A,t as P}from"../chunks/disclose-version.DL9-44ss.js";import{p as q,Q as z,f as H,t as V,a as M,C as r,s as l,c as i,r as o,R as Q,T as k}from"../chunks/runtime.CCR2srIL.js";import{a as _}from"../chunks/store.D923xrEi.js";import{B as F,e as G,i as J}from"../chunks/BreadCrumbs.fqiXFDyp.js";import{c as K}from"../chunks/svelte-component.gLBxBISk.js";import{s as N}from"../chunks/attributes.huZdrSv8.js";import{i as U}from"../chunks/lifecycle.Cnt0cPRQ.js";import{p as W}from"../chunks/props.BUXfLPST.js";import{b as m}from"../chunks/paths.CTkBgBmK.js";import{B as x}from"../chunks/footer.CQiFuk1L.js";const X=!0,Y=Object.assign({"../../../../../content/projects/coeso/en.svx":()=>p(()=>import("../chunks/en.C-95mSKJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),"../../../../../content/projects/coeso/fr.svx":()=>p(()=>import("../chunks/fr.D3wIfT7X.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]),import.meta.url)});function Z(){const s=new Set;for(const a in Y){const e=a.match(/\/news\/([^\/]+)\/[^\/]+\.svx$/);e&&s.add(e[1])}return Array.from(s)}async function tt(){const s=Z(),a=[];for(const e of s)for(const t of S)a.push({slug:e,lang:t});return a}async function et({params:s}){const{slug:a,lang:e}=s;try{return{article:await $(Object.assign({"../../../../../content/projects/coeso/en.svx":()=>p(()=>import("../chunks/en.C-95mSKJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),"../../../../../content/projects/coeso/fr.svx":()=>p(()=>import("../chunks/fr.D3wIfT7X.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]),import.meta.url)}),`../../../../../content/projects/${a}/${e}.svx`,9),this_slug:a}}catch{try{return{article:await $(Object.assign({"../../../../../content/projects/coeso/en.svx":()=>p(()=>import("../chunks/en.C-95mSKJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)}),`../../../../../content/projects/${a}/en.svx`,9),this_slug:a}}catch(c){console.log(c)}}}const gt=Object.freeze(Object.defineProperty({__proto__:null,entries:tt,load:et,prerender:X},Symbol.toStringTag,{value:"Module"}));var at=P('<li class="svelte-18rjwlf"> </li>'),rt=P('<!> <div class="news_article_div"><div class="article_top_image svelte-18rjwlf"><img alt="article main illustration" class="svelte-18rjwlf"></div> <!> <div class="metadata svelte-18rjwlf"><p class="svelte-18rjwlf"> </p> <p class="svelte-18rjwlf"> </p> <p class="svelte-18rjwlf"> </p> <ul></ul></div></div>',1);function ht(s,a){q(a,!1);let e=W(a,"data",8),t=Q();C.subscribe(n=>{z(t,n)}),U();var c=rt(),u=H(c),R=k(()=>[{text:x.home[r(t)],href:m+"/"+r(t)},{text:x.community[r(t)],href:m+"/"+r(t)+"/community"},{text:x.projects[r(t)],href:m+"/"+r(t)+"/community/projects"},{text:e().article.metadata.title,href:m+"/"+r(t)+"/community/projects/"+e().this_slug}]);F(u,{get breadcrumbs(){return r(R)}});var w=l(u,2),v=i(w),T=i(v);o(v);var y=l(v,2);K(y,()=>e().article.default,(n,h)=>{h(n,{})});var E=l(y,2),f=i(E),D=i(f);o(f);var d=l(f,2),I=i(d);o(d);var g=l(d,2),L=i(g);o(g);var O=l(g,2);G(O,5,()=>e().article.metadata.tags,J,(n,h)=>{var j=at(),B=i(j);o(j),V(()=>_(B,`- ${r(h)??""}`)),A(n,j)}),o(O),o(E),o(w),V(()=>{N(T,"src",m+"/"+e().article.metadata.image),_(D,`${b.author[r(t)]??""}: ${e().article.metadata.author??""}`),_(I,`${b.date[r(t)]??""}: ${e().article.metadata.date??""}`),_(L,`${b.tags[r(t)]??""}:`)}),A(s,c),M()}export{ht as component,gt as universal};
