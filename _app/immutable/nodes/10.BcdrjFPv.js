import{a as H,t as J}from"../chunks/disclose-version.DL9-44ss.js";import{p as K,Q as N,f as O,t as S,a as U,C as e,s as i,c as t,r as a,R as W,T as n}from"../chunks/runtime.CCR2srIL.js";import{a as d}from"../chunks/store.D923xrEi.js";import{s as m}from"../chunks/attributes.huZdrSv8.js";import{i as X}from"../chunks/lifecycle.Cnt0cPRQ.js";import{p as Y}from"../chunks/props.BUXfLPST.js";import{B as Z}from"../chunks/BreadCrumbs.fqiXFDyp.js";import{L as ee}from"../chunks/LowerMenu.DxODZmW6.js";import{B as k}from"../chunks/BigButton.CcjAXfHA.js";import{b as s}from"../chunks/paths.Dnjm7CPG.js";import{l as re}from"../chunks/stores.BV8LUT0f.js";import{B as o}from"../chunks/footer.CQiFuk1L.js";const te={blurb:{en:"Discover the Arvest API and how to integrate Arvest into complex computational workflows.",fr:"Découvrez l'API d'Arvest et comment intégrer Arvest dans des chaînes de traitement computationnels complexes."},button:{en:"Discover the API",fr:"Découvrir l'API"}},ae={blurb:{en:"Read the Arvest API documentation.",fr:"Lire la documentation de l'API d'Arvest."},button:{en:"Read the docs",fr:"Lire la doc"}},c={ml:te,documentation:ae};var se=J('<!> <!> <div class="cont svelte-1sdyr81"><div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div> <div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div></div>',1);function fe(z,b){K(b,!1);let r=W();re.subscribe(G=>{N(r,G)}),Y(b,"data",8),X();var f=se(),g=O(f),C=n(()=>[{text:o.home[e(r)],href:s+"/"+e(r)},{text:o.api[e(r)],href:s+"/"+e(r)+"/api"}]);Z(g,{get breadcrumbs(){return e(C)}});var h=i(g,2),R=n(()=>[{url:s+"/"+e(r)+"/api/ml",label:o.ml[e(r)]},{url:s+"/"+e(r)+"/api/documentation",label:o.reference[e(r)]}]);ee(h,{get menu_items(){return e(R)}});var y=i(h,2),u=t(y),A=t(u);m(A,"src",s+"/imgs/squares/trame.png");var x=i(A,2),l=t(x),B=t(l),V=t(B,!0);a(B),a(l);var p=i(l,2),$=t(p,!0);a(p);var I=i(p,2),M=t(I),Q=n(()=>s+"/"+e(r)+"/api/ml");k(M,{get url(){return e(Q)},get label(){return c.ml.button[e(r)]}}),a(I),a(x),a(u);var P=i(u,2),q=t(P);m(q,"src",s+"/imgs/squares/trame.png");var w=i(q,2),v=t(w),D=t(v),T=t(D,!0);a(D),a(v);var _=i(v,2),j=t(_,!0);a(_);var L=i(_,2),E=t(L),F=n(()=>s+"/"+e(r)+"/api/documentation");k(E,{get url(){return e(F)},get label(){return c.documentation.button[e(r)]}}),a(L),a(w),a(P),a(y),S(()=>{m(l,"href",`${s??""}/${e(r)??""}/api/ml`),d(V,o.ml[e(r)]),d($,c.ml.blurb[e(r)]),m(v,"href",`${s??""}/${e(r)??""}/api/documentation`),d(T,o.reference[e(r)]),d(j,c.documentation.blurb[e(r)])}),H(z,f),U()}export{fe as component};