import{a as U,t as G}from"../chunks/disclose-version.C2fYjYVg.js";import{p as H,R as J,f as K,t as N,a as Q,C as r,s as i,c as t,r as s,T as W,U as n}from"../chunks/runtime.hQjgarjH.js";import{s as u}from"../chunks/render.B3i9Bmys.js";import{s as d}from"../chunks/attributes.CD56lhwT.js";import{i as X}from"../chunks/lifecycle.DW_Tg5Tt.js";import{p as Y}from"../chunks/props.hn0Ocg0A.js";import{B as Z}from"../chunks/BreadCrumbs.UEoxrDQl.js";import{L as rr}from"../chunks/LowerMenu.BSCw1lhI.js";import{B as S}from"../chunks/BigButton.DYCctsnU.js";import{b as a}from"../chunks/paths.CMXTGXb_.js";import{l as er}from"../chunks/stores.332GY0rr.js";import{B as l}from"../chunks/footer.dXNsHx4m.js";async function tr({params:b}){}const gr=Object.freeze(Object.defineProperty({__proto__:null,load:tr},Symbol.toStringTag,{value:"Module"})),sr={blurb:{en:"Learn how to use Arvest through a series of video and textual tutorials",fr:"Apprenez à utiliser Arvest avec une série de tutoriels vidéos et textuels"},button:{en:"Follow the tutorials",fr:"Suivre les tutoriels"}},ar={blurb:{en:"Learn more about IIIF, the standard at the base of Arvest",fr:"En apprendre plus sur IIIF, le standard à la base d'Arvest"},button:{en:"Discover IIIF",fr:"Découvrir IIIF"}},m={tutorials:sr,iiif:ar};var ir=G('<!> <!> <div class="cont svelte-1sdyr81"><div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div> <div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div></div>',1);function hr(b,_){H(_,!1);let e=W();er.subscribe(R=>{J(e,R)}),Y(_,"data",8),X();var g=ir(),h=K(g),V=n(()=>[{text:l.home[r(e)],href:a+"/"+r(e)},{text:l.learn[r(e)],href:a+"/"+r(e)+"/learn"}]);Z(h,{get breadcrumbs(){return r(V)}});var y=i(h,2),$=n(()=>[{url:a+"/"+r(e)+"/learn/tutorials",label:l.tutorials[r(e)]},{url:a+"/"+r(e)+"/learn/iiif",label:l.iiif[r(e)]}]);rr(y,{get menu_items(){return r($)}});var I=i(y,2),c=t(I),x=t(c);d(x,"src",a+"/imgs/squares/trame.png");var B=i(x,2),o=t(B),q=t(o),j=t(q,!0);s(q),s(o);var p=i(o,2),k=t(p,!0);s(p);var A=i(p,2),D=t(A),M=n(()=>a+"/"+r(e)+"/learn/tutorials");S(D,{get url(){return r(M)},get label(){return m.tutorials.button[r(e)]}}),s(A),s(B),s(c);var F=i(c,2),L=t(F);d(L,"src",a+"/imgs/squares/trame.png");var z=i(L,2),v=t(z),w=t(v),O=t(w,!0);s(w),s(v);var f=i(v,2),T=t(f,!0);s(f);var C=i(f,2),E=t(C),P=n(()=>a+"/"+r(e)+"/learn/iiif");S(E,{get url(){return r(P)},get label(){return m.iiif.button[r(e)]}}),s(C),s(z),s(F),s(I),N(()=>{d(o,"href",`${a??""}/${r(e)??""}/learn/tutorials`),u(j,l.tutorials[r(e)]),u(k,m.tutorials.blurb[r(e)]),d(v,"href",`${a??""}/${r(e)??""}/learn/iiif`),u(O,l.iiif[r(e)]),u(T,m.iiif.blurb[r(e)])}),U(b,g),Q()}export{hr as component,gr as universal};
