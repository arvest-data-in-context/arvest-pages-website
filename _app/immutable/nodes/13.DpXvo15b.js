import{g as ne}from"../chunks/utils.B3JTUnYK.js";import{a as U,t as N}from"../chunks/disclose-version.C2fYjYVg.js";import{p as de,R as F,t as H,a as ue,aG as I,C as e,T as J,c as r,s as a,r as s,f as Be,U as C}from"../chunks/runtime.hQjgarjH.js";import{s as o}from"../chunks/render.B3i9Bmys.js";import{s as u}from"../chunks/attributes.CD56lhwT.js";import{i as me}from"../chunks/lifecycle.DW_Tg5Tt.js";import{p as K}from"../chunks/props.hn0Ocg0A.js";import{e as Le,i as $e,B as Ee}from"../chunks/BreadCrumbs.UEoxrDQl.js";import{L as Te}from"../chunks/LowerMenu.BSCw1lhI.js";import{B as $}from"../chunks/BigButton.DYCctsnU.js";import{b as Ge}from"../chunks/this.QIDCsX2T.js";import{o as De}from"../chunks/index-client.Dv_TC6Dw.js";import{b as v}from"../chunks/paths.CMXTGXb_.js";import{l as pe}from"../chunks/stores.332GY0rr.js";import{B as n}from"../chunks/footer.dXNsHx4m.js";async function Re({params:p}){const d=await ne("projects",p.lang||"en"),t=await ne("news",p.lang||"en");return{projects:d,news:t}}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:Re},Symbol.toStringTag,{value:"Module"}));var Ve=N('<p class="tag_box svelte-moj05v"> </p>'),Me=N('<div class="cont"><a class="article_card svelte-moj05v"><div class="image_container svelte-moj05v"></div> <div class="text_part svelte-moj05v"><h2 class="svelte-moj05v"> </h2> <p class="desc svelte-moj05v"> </p> <div class="lower_part svelte-moj05v"><p class="svelte-moj05v"> </p> <!></div></div></a></div>');function ce(p,d){de(d,!1);let t=K(d,"article",8),l=J(),q=K(d,"type",8),h=J();pe.subscribe(i=>{F(h,i)}),De(()=>{let i="url('"+v+"/"+t().image+"')";I(l,e(l).style.backgroundImage=i),I(l,e(l).style.backgroundSize="cover"),I(l,e(l).style.backgroundPosition="center")}),me();var y=Me(),_=r(y),z=r(_);Ge(z,i=>F(l,i),()=>e(l));var j=a(z,2),m=r(j),k=r(m,!0);s(m);var b=a(m,2),g=r(b,!0);s(b);var x=a(b,2),w=r(x),A=r(w,!0);s(w);var E=a(w,2);Le(E,1,()=>t().tags,$e,(i,T)=>{var f=Ve(),S=r(f,!0);s(f),H(()=>o(S,e(T))),U(i,f)}),s(x),s(j),s(_),s(y),H(()=>{u(_,"href",`${v??""}${`/${e(h)}/community/${q()}/${t().slug}`??""}`),o(k,t().title),o(g,t().description),o(A,t().date)}),U(p,y),ue()}const Oe={en:"Latest",fr:"Récent"},Pe={blurb:{en:"Learn more about what people have been doing with Arvest",fr:"Découvrez ce que les gens ont réalisé avec Arvest"},button:{en:"Discover projects",fr:"Découvrir les projets"}},Ie={blurb:{en:"Connect to the Arvest forum and discuss with other users",fr:"Connectez-vous au forum d'Arvest et discutez avec d'autres utilisateurs"},button:{en:"Connect to the forum",fr:"Connexion au forum"}},Ue={blurb:{en:"Learn about the latest developments in the Arvest ecosystem",fr:"Découvrez les derniers developpements d'Arvest"},button:{en:"Latest news",fr:"Lire le blog"}},Fe={blurb:{en:"Arvest is developed as part of the ERC-funded STAGE project. Click here to learn more about the project.",fr:"Arvest est developpé dans le cadre du projet ERC STAGE. Cliquez ici pour en apprendre d'avantage."},button:{en:"STAGE website",fr:"Site de STAGE"}},c={latest:Oe,projects:Pe,forum:Ie,blog:Ue,stage:Fe};var He=N('<!> <!> <div class="cont svelte-1sdyr81"><div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <h2 class="svelte-1sdyr81"> </h2> <!> <div class="button_resizer svelte-1sdyr81"><!></div></div></div> <div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div> <div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <h2 class="svelte-1sdyr81"> </h2> <!> <div class="button_resizer svelte-1sdyr81"><!></div></div></div> <div class="section_div svelte-1sdyr81"><img alt="checked squares" class="svelte-1sdyr81"> <div class="inner_part svelte-1sdyr81"><a href="https://stage-to-data.huma-num.fr/" class="svelte-1sdyr81"><h1 class="svelte-1sdyr81"> </h1></a> <p class="svelte-1sdyr81"> </p> <div class="button_resizer svelte-1sdyr81"><!></div></div></div></div>',1);function it(p,d){de(d,!1);let t=J();pe.subscribe(Se=>{F(t,Se)});let l=K(d,"data",8);me();var q=He(),h=Be(q),y=C(()=>[{text:n.home[e(t)],href:v+"/"+e(t)},{text:n.community[e(t)],href:v+"/"+e(t)+"/community"}]);Ee(h,{get breadcrumbs(){return e(y)}});var _=a(h,2),z=C(()=>[{url:v+"/"+e(t)+"/community/projects",label:n.projects[e(t)]},{url:v+"/"+e(t)+"/community/forum",label:n.forum[e(t)]},{url:v+"/"+e(t)+"/community/news",label:n.news[e(t)]},{url:"https://stage-to-data.huma-num.fr/",label:n.stage[e(t)]}]);Te(_,{get menu_items(){return e(z)}});var j=a(_,2),m=r(j),k=r(m);u(k,"src",v+"/imgs/squares/trame.png");var b=a(k,2),g=r(b),x=r(g),w=r(x,!0);s(x),s(g);var A=a(g,2),E=r(A,!0);s(A);var i=a(A,2),T=r(i,!0);s(i);var f=a(i,2);ce(f,{get article(){return l().projects[0]},type:"projects"});var S=a(f,2),_e=r(S),be=C(()=>v+"/"+e(t)+"/community/projects");$(_e,{get url(){return e(be)},get label(){return c.projects.button[e(t)]}}),s(S),s(b),s(m);var G=a(m,2),Q=r(G);u(Q,"src",v+"/imgs/squares/trame.png");var W=a(Q,2),B=r(W),X=r(B),ge=r(X,!0);s(X),s(B);var D=a(B,2),fe=r(D,!0);s(D);var Y=a(D,2),he=r(Y),ye=C(()=>v+"/"+e(t)+"/community/forum");$(he,{get url(){return e(ye)},get label(){return c.forum.button[e(t)]}}),s(Y),s(W),s(G);var R=a(G,2),Z=r(R);u(Z,"src",v+"/imgs/squares/trame.png");var ee=a(Z,2),L=r(ee),te=r(L),je=r(te,!0);s(te),s(L);var V=a(L,2),xe=r(V,!0);s(V);var M=a(V,2),we=r(M,!0);s(M);var re=a(M,2);ce(re,{get article(){return l().news[0]},type:"news"});var se=a(re,2),Ae=r(se),Ce=C(()=>v+"/"+e(t)+"/community/news");$(Ae,{get url(){return e(Ce)},get label(){return c.blog.button[e(t)]}}),s(se),s(ee),s(R);var ae=a(R,2),ve=r(ae);u(ve,"src",v+"/imgs/squares/trame.png");var oe=a(ve,2),O=r(oe),le=r(O),qe=r(le,!0);s(le),s(O);var P=a(O,2),ze=r(P,!0);s(P);var ie=a(P,2),ke=r(ie);$(ke,{url:"https://stage-to-data.huma-num.fr/",get label(){return c.stage.button[e(t)]}}),s(ie),s(oe),s(ae),s(j),H(()=>{u(g,"href",`${v??""}/${e(t)??""}/community/projects`),o(w,n.projects[e(t)]),o(E,c.projects.blurb[e(t)]),o(T,c.latest[e(t)]),u(B,"href",`${v??""}/${e(t)??""}/community/forum`),o(ge,n.forum[e(t)]),o(fe,c.forum.blurb[e(t)]),u(L,"href",`${v??""}/${e(t)??""}/community/news`),o(je,n.news[e(t)]),o(xe,c.blog.blurb[e(t)]),o(we,c.latest[e(t)]),o(qe,n.stage[e(t)]),o(ze,c.stage.blurb[e(t)])}),U(p,q),ue()}export{it as component,lt as universal};