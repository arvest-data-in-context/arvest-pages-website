import{g as Q}from"../chunks/utils.TvWFkjZp.js";import{a as f,t as x}from"../chunks/disclose-version.B-P0WFPz.js";import{p as R,Q as A,f as D,a as F,C as a,s as i,c as l,r as s,t as j,R as G,T as H}from"../chunks/runtime.DND1LVCT.js";import{a as v}from"../chunks/store.FUnG_MpA.js";import{B as J,e as w,i as z}from"../chunks/BreadCrumbs.CXha6Lby.js";import{s as M}from"../chunks/attributes.CkpIyJ_v.js";import{i as K}from"../chunks/lifecycle.BJb_TPi8.js";import{p as L}from"../chunks/props.5SYOCKiD.js";import{o as U}from"../chunks/index-client.CoLvI5iV.js";import{b as n}from"../chunks/paths.StMiXDYt.js";import{l as W}from"../chunks/stores.CG-KJqcq.js";import{B as b}from"../chunks/footer.C8JYlHHJ.js";async function X({params:m}){return{articles:await Q("tutorials",m.lang||"en")}}const pa=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));var Y=x('<p class="tag_box svelte-1gl5l6a"> </p>'),Z=x('<a class="article_card svelte-1gl5l6a"><div class="image_container svelte-1gl5l6a"></div> <div class="text_part svelte-1gl5l6a"><h2 class="svelte-1gl5l6a"> </h2> <p class="desc svelte-1gl5l6a"> </p> <div class="lower_part svelte-1gl5l6a"><p class="svelte-1gl5l6a"> </p> <!></div></div></a>'),aa=x('<!> <div class="cont svelte-1gl5l6a"></div>',1);function ga(m,c){R(c,!1);let r=G();W.subscribe(e=>{A(r,e)});let h=L(c,"data",8);U(()=>{const e=document.getElementsByClassName("image_container");for(let t=0;t<e.length;(t+=1)-1){let d=Number(e[t].id.split("img_cont_")[1]),o="url('"+n+"/"+h().articles[d].image+"')";e[t].style.backgroundImage=o,e[t].style.backgroundSize="cover",e[t].style.backgroundPosition="center"}}),K();var y=aa(),B=D(y),N=H(()=>[{text:b.home[a(r)],href:n+"/"+a(r)},{text:b.learn[a(r)],href:n+"/"+a(r)+"/learn"},{text:b.tutorials[a(r)],href:n+"/"+a(r)+"/learn/tutorials"}]);J(B,{get breadcrumbs(){return a(N)}});var C=i(B,2);w(C,5,()=>h().articles,z,(e,t,d)=>{var o=Z(),$=l(o);M($,"id",`img_cont_${d??""}`);var k=i($,2),p=l(k),O=l(p,!0);s(p);var g=i(p,2),P=l(g,!0);s(g);var S=i(g,2),_=l(S),T=l(_,!0);s(_);var V=i(_,2);w(V,1,()=>a(t).tags,z,(q,E)=>{var u=Y(),I=l(u,!0);s(u),j(()=>v(I,a(E))),f(q,u)}),s(S),s(k),s(o),j(()=>{M(o,"href",`${n??""}${`/${a(r)}/learn/tutorials/${a(t).slug}`??""}`),v(O,a(t).title),v(P,a(t).description),v(T,a(t).date)}),f(e,o)}),s(C),f(m,y),F()}export{ga as component,pa as universal};
