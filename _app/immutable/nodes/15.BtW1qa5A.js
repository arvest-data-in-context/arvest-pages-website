import{g as Q}from"../chunks/utils.TvWFkjZp.js";import{a as f,t as x}from"../chunks/disclose-version.B-P0WFPz.js";import{p as R,Q as A,f as D,a as F,C as a,s as i,c as l,r,t as S,R as G,T as H}from"../chunks/runtime.DND1LVCT.js";import{a as n}from"../chunks/store.FUnG_MpA.js";import{B as J,e as j,i as z}from"../chunks/BreadCrumbs.CXha6Lby.js";import{s as M}from"../chunks/attributes.CkpIyJ_v.js";import{i as K}from"../chunks/lifecycle.BJb_TPi8.js";import{p as L}from"../chunks/props.5SYOCKiD.js";import{o as U}from"../chunks/index-client.CoLvI5iV.js";import{b as m}from"../chunks/paths.StMiXDYt.js";import{l as W}from"../chunks/stores.CG-KJqcq.js";import{B as b}from"../chunks/footer.C8JYlHHJ.js";async function X({params:c}){return{articles:await Q("news",c.lang||"en")}}const pa=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));var Y=x('<p class="tag_box svelte-1gl5l6a"> </p>'),Z=x('<a class="article_card svelte-1gl5l6a"><div class="image_container svelte-1gl5l6a"></div> <div class="text_part svelte-1gl5l6a"><h2 class="svelte-1gl5l6a"> </h2> <p class="desc svelte-1gl5l6a"> </p> <div class="lower_part svelte-1gl5l6a"><p class="svelte-1gl5l6a"> </p> <!></div></div></a>'),aa=x('<!> <div class="cont svelte-1gl5l6a"></div>',1);function ga(c,v){R(v,!1);let s=G();W.subscribe(t=>{A(s,t)});let h=L(v,"data",8);U(()=>{const t=document.getElementsByClassName("image_container");for(let e=0;e<t.length;(e+=1)-1){let d=Number(t[e].id.split("img_cont_")[1]),o="url('"+m+"/"+h().articles[d].image+"')";t[e].style.backgroundImage=o,t[e].style.backgroundSize="cover",t[e].style.backgroundPosition="center"}}),K();var y=aa(),w=D(y),N=H(()=>[{text:b.home[a(s)],href:m+"/"+a(s)},{text:b.community[a(s)],href:m+"/"+a(s)+"/community"},{text:b.news[a(s)],href:m+"/"+a(s)+"/community/news"}]);J(w,{get breadcrumbs(){return a(N)}});var B=i(w,2);j(B,5,()=>h().articles,z,(t,e,d)=>{var o=Z(),C=l(o);M(C,"id",`img_cont_${d??""}`);var $=i(C,2),p=l($),O=l(p,!0);r(p);var g=i(p,2),P=l(g,!0);r(g);var k=i(g,2),_=l(k),T=l(_,!0);r(_);var V=i(_,2);j(V,1,()=>a(e).tags,z,(q,E)=>{var u=Y(),I=l(u,!0);r(u),S(()=>n(I,a(E))),f(q,u)}),r(k),r($),r(o),S(()=>{M(o,"href",`${m??""}${`/${a(s)}/community/news/${a(e).slug}`??""}`),n(O,a(e).title),n(P,a(e).description),n(T,a(e).date)}),f(t,o)}),r(B),f(c,y),F()}export{ga as component,pa as universal};
