import{g as I}from"../chunks/utils.CoUrfqXO.js";import{a as x,t as h}from"../chunks/disclose-version.DeS0T4Yg.js";import{p as J,T as U,f as D,a as F,t as b,$ as G,J as e,U as H,s as c,c as i,r,V as K}from"../chunks/runtime.CLk9xquY.js";import{a as m}from"../chunks/store.C3_DbXpi.js";import{B as L,e as S,i as V}from"../chunks/BreadCrumbs.u9G6J3OW.js";import{h as Q}from"../chunks/svelte-head.CEOkTZm9.js";import{s as j}from"../chunks/attributes.BTAS-wgr.js";import{i as R}from"../chunks/lifecycle.BWXILzzf.js";import{p as W}from"../chunks/props.DbDAe7oc.js";import{o as X}from"../chunks/index-client.CjyfYYb_.js";import{b as l}from"../chunks/paths.CEdW23PB.js";import{l as Y}from"../chunks/stores.DSoRoRbZ.js";import{B as n}from"../chunks/footer.C8JYlHHJ.js";async function Z({params:v}){return{articles:await I("news",v.lang||"en")}}const fe=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));var ee=h('<p class="tag_box svelte-qxic4c"> </p>'),te=h('<a class="article_card svelte-qxic4c"><div class="image_container svelte-qxic4c"></div> <div class="text_part svelte-qxic4c"><h2 class="svelte-qxic4c"> </h2> <p class="desc svelte-qxic4c"> </p> <div class="lower_part svelte-qxic4c"><p class="svelte-qxic4c"> </p> <!></div></div></a>'),ae=h('<!> <div class="cont svelte-qxic4c"></div>',1);function ge(v,d){J(d,!1);let s=H();Y.subscribe(a=>{U(s,a)});let y=W(d,"data",8);X(()=>{const a=document.getElementsByClassName("image_container");for(let t=0;t<a.length;(t+=1)-1){let p=Number(a[t].id.split("img_cont_")[1]),o="url('"+l+"/"+y().articles[p].image+"')";a[t].style.backgroundImage=o,a[t].style.backgroundSize="cover",a[t].style.backgroundPosition="center"}}),R();var q=ae();Q(a=>{b(()=>G.title=`Arvest | ${n.news[e(s)]??""}`)});var $=D(q),z=K(()=>[{text:n.home[e(s)],href:l+"/"+e(s)},{text:n.community[e(s)],href:l+"/"+e(s)+"/community"},{text:n.news[e(s)],href:l+"/"+e(s)+"/community/news"}]);L($,{get breadcrumbs(){return e(z)}});var w=c($,2);S(w,5,()=>y().articles,V,(a,t,p)=>{var o=te(),B=i(o);j(B,"id",`img_cont_${p??""}`);var k=c(B,2),_=i(k),M=i(_,!0);r(_);var u=c(_,2),N=i(u,!0);r(u);var C=c(u,2),f=i(C),O=i(f,!0);r(f);var P=c(f,2);S(P,1,()=>e(t).tags,V,(T,A)=>{var g=ee(),E=i(g,!0);r(g),b(()=>m(E,e(A))),x(T,g)}),r(C),r(k),r(o),b(()=>{j(o,"href",`${l??""}${`/${e(s)}/community/news/${e(t).slug}`??""}`),m(M,e(t).title),m(N,e(t).description),m(O,e(t).date)}),x(a,o)}),r(w),x(v,q),F()}export{ge as component,fe as universal};
