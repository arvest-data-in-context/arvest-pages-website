import{g as ce}from"../chunks/utils.CoUrfqXO.js";import{a as J,t as N}from"../chunks/disclose-version.DeS0T4Yg.js";import{p as me,T as U,t as E,a as de,aH as I,J as e,U as F,c as r,s as a,r as s,f as Se,$ as Be,V as k}from"../chunks/runtime.CLk9xquY.js";import{a as l}from"../chunks/store.C3_DbXpi.js";import{h as Le}from"../chunks/svelte-head.CEOkTZm9.js";import{s as m}from"../chunks/attributes.BTAS-wgr.js";import{i as pe}from"../chunks/lifecycle.BWXILzzf.js";import{p as K}from"../chunks/props.DbDAe7oc.js";import{e as Ee,i as Te,B as Ve}from"../chunks/BreadCrumbs.u9G6J3OW.js";import{L as De}from"../chunks/LowerMenu.dZsE-PiC.js";import{B as L}from"../chunks/BigButton.BCYNUaR9.js";import{b as Ge}from"../chunks/this.PeIcd416.js";import{o as Me}from"../chunks/index-client.CjyfYYb_.js";import{b as v}from"../chunks/paths.CEdW23PB.js";import{l as _e}from"../chunks/stores.DSoRoRbZ.js";import{B as n}from"../chunks/footer.C8JYlHHJ.js";async function Re({params:p}){const u=await ce("projects",p.lang||"en"),t=await ce("news",p.lang||"en");return{projects:u,news:t}}const ct=Object.freeze(Object.defineProperty({__proto__:null,load:Re},Symbol.toStringTag,{value:"Module"}));var Oe=N('<p class="tag_box svelte-e3kf95"> </p>'),Pe=N('<div class="cont"><a class="article_card svelte-e3kf95"><div class="image_container svelte-e3kf95"></div> <div class="text_part svelte-e3kf95"><h2 class="svelte-e3kf95"> </h2> <p class="desc svelte-e3kf95"> </p> <div class="lower_part svelte-e3kf95"><p class="svelte-e3kf95"> </p> <!></div></div></a></div>');function ue(p,u){me(u,!1);let t=K(u,"article",8),o=F(),A=K(u,"type",8),h=F();_e.subscribe(i=>{U(h,i)}),Me(()=>{let i="url('"+v+"/"+t().image+"')";I(o,e(o).style.backgroundImage=i),I(o,e(o).style.backgroundSize="cover"),I(o,e(o).style.backgroundPosition="center")}),pe();var q=Pe(),_=r(q),C=r(_);Ge(C,i=>U(o,i),()=>e(o));var y=a(C,2),d=r(y),$=r(d,!0);s(d);var b=a(d,2),f=r(b,!0);s(b);var x=a(b,2),j=r(x),w=r(j,!0);s(j);var T=a(j,2);Ee(T,1,()=>t().tags,Te,(i,V)=>{var g=Oe(),z=r(g,!0);s(g),E(()=>l(z,e(V))),J(i,g)}),s(x),s(y),s(_),s(q),E(()=>{m(_,"href",`${v??""}${`/${e(h)}/community/${A()}/${t().slug}`??""}`),l($,t().title),l(f,t().description),l(w,t().date)}),J(p,q),de()}const He={en:"Latest",fr:"Récent"},Ie={blurb:{en:"Learn more about what people have been doing with Arvest",fr:"Découvrez ce que les gens ont réalisé avec Arvest"},button:{en:"Discover projects",fr:"Découvrir les projets"}},Je={blurb:{en:"Connect to the Arvest forum and discuss with other users",fr:"Connectez-vous au forum d'Arvest et discutez avec d'autres utilisateurs"},button:{en:"Connect to the forum",fr:"Connexion au forum"}},Ue={blurb:{en:"Learn about the latest developments in the Arvest ecosystem",fr:"Découvrez les derniers developpements d'Arvest"},button:{en:"Latest news",fr:"Lire le blog"}},Fe={blurb:{en:"Arvest is developed as part of the ERC-funded STAGE project. Click here to learn more about the project.",fr:"Arvest est developpé dans le cadre du projet ERC STAGE. Cliquez ici pour en apprendre d'avantage."},button:{en:"STAGE website",fr:"Site de STAGE"}},c={latest:He,projects:Ie,forum:Je,blog:Ue,stage:Fe};var Ke=N('<!> <!> <div class="cont svelte-11q5v81"><div class="section_div svelte-11q5v81"><img alt="checked squares" class="svelte-11q5v81"> <div class="inner_part svelte-11q5v81"><a class="svelte-11q5v81"><h1 class="svelte-11q5v81"> </h1></a> <p class="svelte-11q5v81"> </p> <h2 class="svelte-11q5v81"> </h2> <!> <div class="button_resizer svelte-11q5v81"><!></div></div></div> <div class="section_div svelte-11q5v81"><img alt="checked squares" class="svelte-11q5v81"> <div class="inner_part svelte-11q5v81"><a class="svelte-11q5v81"><h1 class="svelte-11q5v81"> </h1></a> <p class="svelte-11q5v81"> </p> <div class="button_resizer svelte-11q5v81"><!></div></div></div> <div class="section_div svelte-11q5v81"><img alt="checked squares" class="svelte-11q5v81"> <div class="inner_part svelte-11q5v81"><a class="svelte-11q5v81"><h1 class="svelte-11q5v81"> </h1></a> <p class="svelte-11q5v81"> </p> <h2 class="svelte-11q5v81"> </h2> <!> <div class="button_resizer svelte-11q5v81"><!></div></div></div> <div class="section_div svelte-11q5v81"><img alt="checked squares" class="svelte-11q5v81"> <div class="inner_part svelte-11q5v81"><a href="https://stage-to-data.huma-num.fr/" class="svelte-11q5v81"><h1 class="svelte-11q5v81"> </h1></a> <p class="svelte-11q5v81"> </p> <div class="button_resizer svelte-11q5v81"><!></div></div></div></div>',1);function ut(p,u){me(u,!1);let t=F();_e.subscribe(ne=>{U(t,ne)});let o=K(u,"data",8);pe();var A=Ke();Le(ne=>{E(()=>Be.title=`Arvest | ${n.community[e(t)]??""}`)});var h=Se(A),q=k(()=>[{text:n.home[e(t)],href:v+"/"+e(t)},{text:n.community[e(t)],href:v+"/"+e(t)+"/community"}]);Ve(h,{get breadcrumbs(){return e(q)}});var _=a(h,2),C=k(()=>[{url:v+"/"+e(t)+"/community/projects",label:n.projects[e(t)]},{url:v+"/"+e(t)+"/community/forum",label:n.forum[e(t)]},{url:v+"/"+e(t)+"/community/news",label:n.news[e(t)]},{url:"https://stage-to-data.huma-num.fr/",label:n.stage[e(t)]}]);De(_,{get menu_items(){return e(C)}});var y=a(_,2),d=r(y),$=r(d);m($,"src",v+"/imgs/squares/trame.png");var b=a($,2),f=r(b),x=r(f),j=r(x,!0);s(x),s(f);var w=a(f,2),T=r(w,!0);s(w);var i=a(w,2),V=r(i,!0);s(i);var g=a(i,2);ue(g,{get article(){return o().projects[0]},type:"projects"});var z=a(g,2),be=r(z),fe=k(()=>v+"/"+e(t)+"/community/projects");L(be,{get url(){return e(fe)},get label(){return c.projects.button[e(t)]}}),s(z),s(b),s(d);var D=a(d,2),Q=r(D);m(Q,"src",v+"/imgs/squares/trame.png");var W=a(Q,2),S=r(W),X=r(S),ge=r(X,!0);s(X),s(S);var G=a(S,2),he=r(G,!0);s(G);var Y=a(G,2),qe=r(Y),ye=k(()=>v+"/"+e(t)+"/community/forum");L(qe,{get url(){return e(ye)},get label(){return c.forum.button[e(t)]}}),s(Y),s(W),s(D);var M=a(D,2),Z=r(M);m(Z,"src",v+"/imgs/squares/trame.png");var ee=a(Z,2),B=r(ee),te=r(B),xe=r(te,!0);s(te),s(B);var R=a(B,2),je=r(R,!0);s(R);var O=a(R,2),we=r(O,!0);s(O);var re=a(O,2);ue(re,{get article(){return o().news[0]},type:"news"});var se=a(re,2),ke=r(se),Ae=k(()=>v+"/"+e(t)+"/community/news");L(ke,{get url(){return e(Ae)},get label(){return c.blog.button[e(t)]}}),s(se),s(ee),s(M);var ae=a(M,2),ve=r(ae);m(ve,"src",v+"/imgs/squares/trame.png");var le=a(ve,2),P=r(le),oe=r(P),Ce=r(oe,!0);s(oe),s(P);var H=a(P,2),$e=r(H,!0);s(H);var ie=a(H,2),ze=r(ie);L(ze,{url:"https://stage-to-data.huma-num.fr/",get label(){return c.stage.button[e(t)]}}),s(ie),s(le),s(ae),s(y),E(()=>{m(f,"href",`${v??""}/${e(t)??""}/community/projects`),l(j,n.projects[e(t)]),l(T,c.projects.blurb[e(t)]),l(V,c.latest[e(t)]),m(S,"href",`${v??""}/${e(t)??""}/community/forum`),l(ge,n.forum[e(t)]),l(he,c.forum.blurb[e(t)]),m(B,"href",`${v??""}/${e(t)??""}/community/news`),l(xe,n.news[e(t)]),l(je,c.blog.blurb[e(t)]),l(we,c.latest[e(t)]),l(Ce,n.stage[e(t)]),l($e,c.stage.blurb[e(t)])}),J(p,A),de()}export{ut as component,ct as universal};
