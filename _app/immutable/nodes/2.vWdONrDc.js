import{a as z,t as A}from"../chunks/disclose-version.CdsATZH0.js";import{h as xe,i as la,ag as sa,W as na,Z as Ee,p as O,U as w,t as te,a as B,c as a,s as o,r as t,aw as L,x as l,ax as ia,f as Fe,ay as oa,az as ua,aA as va,av as ca}from"../chunks/runtime.D8md4SsN.js";import{h as _a}from"../chunks/svelte-head.BNcvIgyd.js";import{s as f,B as Ne}from"../chunks/BigButton.B802Fq57.js";import{i as fa,p as K,b as Le}from"../chunks/props.1p_N6k3z.js";import{i as H}from"../chunks/lifecycle.j0YKZXX6.js";import{a as d,s as De,e as Ve,b as qe}from"../chunks/store.CAlOFfSJ.js";import{c as ga,o as Oe,a as da}from"../chunks/index-client.pRKStWaD.js";import{g as ma,b as ha}from"../chunks/entry.DDMA9Aip.js";import{b as _}from"../chunks/paths.E7BmzOZJ.js";import{p as Be}from"../chunks/stores.Dl6m-GIP.js";import{l as q}from"../chunks/stores.DY_zMBd-.js";import{i as ye}from"../chunks/if.Dcg4s-OI.js";function ba(r,s,e,n,i){var v;xe&&la();var u=(v=s.$$slots)==null?void 0:v[e],c=!1;u===!0&&(u=s.children,c=!0),u===void 0||u(r,c?()=>n:n)}let Se=!1;function pa(){Se||(Se=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var s;if(!r.defaultPrevented)for(const e of r.target.elements)(s=e.__on_r)==null||s.call(e)})},{capture:!0}))}function $a(r,s){var e=r.__className,n=wa(s);xe&&r.className===n?r.__className=n:(e!==n||xe&&r.className!==n)&&(s==null?r.removeAttribute("class"):r.className=n,r.__className=n)}function wa(r){return r??""}function ka(r,s,e){if(e){if(r.classList.contains(s))return;r.classList.add(s)}else{if(!r.classList.contains(s))return;r.classList.remove(s)}}function ya(r,s,e,n=e){r.addEventListener(s,e);const i=r.__on_r;i?r.__on_r=()=>{i(),n()}:r.__on_r=n,pa()}function ze(r,s,e){var n=na(r,s);n&&n.set&&(r[s]=e,sa(()=>{r[s]=null}))}function He(r,s,e){if(r.multiple)return za(r,s);for(var n of r.options){var i=ae(n);if(fa(i,s)){n.selected=!0;return}}(!e||s!==void 0)&&(r.selectedIndex=-1)}function xa(r,s){Ee(()=>{var e=new MutationObserver(()=>{var n=r.__value;He(r,n)});return e.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{e.disconnect()}})}function La(r,s,e=s){var n=!0;ya(r,"change",()=>{var i;if(r.multiple)i=[].map.call(r.querySelectorAll(":checked"),ae);else{var u=r.querySelector(":checked");i=u&&ae(u)}e(i)}),Ee(()=>{var i=s();if(He(r,i,n),n&&i===void 0){var u=r.querySelector(":checked");u!==null&&(i=ae(u),e(i))}r.__value=i,n=!1}),xa(r)}function za(r,s){for(var e of r.options)e.selected=~s.indexOf(ae(e))}function ae(r){return"__value"in r?r.__value:r.value}const Aa={title:"Hello this is my title"},Ia={title:"Bonjour voici mon titre"},ja={en:Aa,fr:Ia},Ma=!0;async function Pa({params:r}){const{lang:s}=r,e=s,n=ja[s].title;return{this_slug:e,vocab:n}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,load:Pa,prerender:Ma},Symbol.toStringTag,{value:"Module"}));var Ca=A('<div><a class="svelte-1bn2vd2"><img class="svelte-1bn2vd2"> <p class="svelte-1bn2vd2"> </p></a></div>');function Na(r,s){O(s,!1);let e=L();q.subscribe(x=>{w(e,x)});let n=K(s,"img_src",8,_+"/imgs/logos/arvest_logo_cut.png"),i=K(s,"alt_text",8,"arvest logo"),u=K(s,"site_name",8,"Arvest");H();var c=Ca(),v=a(c),m=a(v),g=o(m,2),k=a(g,!0);t(g),t(v),t(c),te(()=>{f(v,"href",`${_??""}/${l(e)??""}`),f(m,"src",n()),f(m,"alt",i()),d(k,u())}),z(r,c),B()}var Sa=A('<a class="svelte-18hio8a"> </a>');function E(r,s){O(s,!1);let e=L();q.subscribe(v=>{w(e,v)});let n=K(s,"label",8,"Link"),i=K(s,"url",8,"/");H();var u=Sa(),c=a(u,!0);t(u),te(()=>{f(u,"href",_+"/"+l(e)+i()),d(c,n())}),z(r,u),B()}var Ta=A('<select class="svelte-9nsqxo"><option>English</option><option>Français</option></select>');function Te(r,s){O(s,!1);const e=De(),n=()=>qe(Be,"$page",e);let i=L();q.subscribe(g=>{w(i,g)});function u(){q.set(l(i));let k=n().url.pathname.replace(_,"").slice(3),x=_+"/"+l(i)+k;ma(x,{replaceState:!0})}H();var c=Ta();te(()=>{l(i),ia(()=>{})});var v=a(c);v.value=(v.__value="en")==null?"":"en";var m=o(v);m.value=(m.__value="fr")==null?"":"fr",t(c),La(c,()=>l(i),g=>w(i,g)),Ve("change",c,()=>u()),z(r,c),B()}var Ea=A('<div><button class="svelte-mbvhna"><img alt="hambuerger menu logo" class="svelte-mbvhna"></button></div>');function Fa(r,s){O(s,!1);const e=ga();let n=!1;const i=g=>{n=g,e("update_hamburger",{state:n})};function u(){n==!1?n=!0:n=!1,e("update_hamburger",{state:n})}H();var c=Ea(),v=a(c),m=a(v);return f(m,"src",`${_??""}/imgs/ui/hamburger.png`),t(v),t(c),Ve("click",v,u),z(r,c),ze(s,"set_hamburger_state",i),B({set_hamburger_state:i})}const Da={en:"Connect",fr:"Connexion"},Va={en:"Community",fr:"Communauté"},qa={en:"Learn",fr:"Apprendre"},Oa={en:"About",fr:"A propos"},Ba={en:"API & ML",fr:"API & ML"},I={connect:Da,community:Va,learn:qa,about:Oa,api:Ba};var Ha=A('<ul class="svelte-1te2rdz"><li><!></li> <li><!></li> <li><!></li> <li><!></li></ul>'),Wa=A('<div id="hamburger_menu" class="svelte-1te2rdz"><ul class="svelte-1te2rdz"><li class="svelte-1te2rdz"><!></li> <li class="svelte-1te2rdz"><!></li> <li class="svelte-1te2rdz"><!></li> <li class="svelte-1te2rdz"><!></li></ul> <div class="right_ham_cont svelte-1te2rdz"><!> <div class="extra_thin_connect_button svelte-1te2rdz"><!></div></div></div>'),Ya=A('<div class="lang_wrap svelte-1te2rdz"><!></div>'),Ga=A('<header class="svelte-1te2rdz"><nav class="svelte-1te2rdz"><!> <!></nav> <!></header> <div class="top_right_content svelte-1te2rdz"><!> <div id="hams"><!></div> <div class="connect_button_cont svelte-1te2rdz"><!></div></div> <div id="nav_padding" class="svelte-1te2rdz"></div>',1);function Ua(r,s){O(s,!1);let e=L(!1),n=L(!1),i=!1,u=L(!1),c=L(),v=L();q.subscribe(b=>{w(v,b)});const m=()=>{l(c).set_hamburger_state(!1)},g=()=>{window.innerWidth<1300?l(e)==!1&&w(e,!0):(l(e)==!0&&w(e,!1),l(c).set_hamburger_state(!1))};Oe(()=>{g(),window.addEventListener("resize",()=>{g()}),k()});function k(){l(n)==!0?w(u,!0):i==!0?w(u,!0):w(u,!1)}function x(b){w(n,b.detail.state),k()}const W=b=>{i=b,k()};H();var C=Ga(),p=Fe(C),N=a(p),j=a(N);Na(j,{});var F=o(j,2);ye(F,()=>l(e)==!1,b=>{var $=Ha(),y=a($),D=a(y);E(D,{get label(){return I.community[l(v)]},url:"/community"}),t(y);var M=o(y,2),P=a(M);E(P,{get label(){return I.learn[l(v)]},url:"/learn"}),t(M);var V=o(M,2),S=a(V);E(S,{get label(){return I.api[l(v)]},url:"/api"}),t(V);var T=o(V,2),R=a(T);E(R,{get label(){return I.about[l(v)]},url:"/about"}),t(T),t($),z(b,$)}),t(N);var se=o(N,2);ye(se,()=>l(n),b=>{var $=Wa(),y=a($),D=a(y),M=a(D);E(M,{get label(){return I.community[l(v)]},url:"/community"}),t(D);var P=o(D,2),V=a(P);E(V,{get label(){return I.learn[l(v)]},url:"/learn"}),t(P);var S=o(P,2),T=a(S);E(T,{get label(){return I.api[l(v)]},url:"/api"}),t(S);var R=o(S,2),X=a(R);E(X,{get label(){return I.about[l(v)]},url:"/about"}),t(R),t(y);var Z=o(y,2),J=a(Z);Te(J,{});var le=o(J,2),ee=a(le);Ne(ee,{get label(){return I.connect[l(v)]},url:"https://arvest-dev.tetras-libre.fr/"}),t(le),t(Z),t($),z(b,$)}),t(p);var Y=o(p,2),G=a(Y);ye(G,()=>l(e)==!1,b=>{var $=Ya(),y=a($);Te(y,{}),t($),z(b,$)});var U=o(G,2),re=a(U);Le(Fa(re,{$$events:{update_hamburger:x},$$legacy:!0}),b=>w(c,b),()=>l(c)),t(U);var Q=o(U,2),ne=a(Q);return Ne(ne,{get label(){return I.connect[l(v)]},url:"https://arvest-dev.tetras-libre.fr/"}),t(Q),t(Y),oa(2),te(()=>{ka(p,"show_border",l(u)),$a(U,`${(l(e)?"unhide_hams":"hide_hams")??""} svelte-1te2rdz`)}),z(r,C),ze(s,"hide_hamburger",m),ze(s,"handle_scroll",W),B({hide_hamburger:m,handle_scroll:W})}const Ra={en:"Menu",fr:"Menu"},Za={en:"Community",fr:"Communauté"},Ja={en:"Projects",fr:"Projets"},Ka={en:"Forum",fr:"Forum"},Qa={en:"STAGE",fr:"STAGE"},Xa={en:"Learn",fr:"Apprendre"},et={en:"Tutorials",fr:"Tutoriels"},at={en:"IIIF",fr:"IIIF"},tt={en:"Machine Learning",fr:"Machine Learning"},rt={en:"API & ML",fr:"API & ML"},lt={en:"Documentation",fr:"Documentation"},st={en:"News",fr:"Nouvelles"},nt={en:"About",fr:"A propos"},it={en:"Infrastructure",fr:"Infrastructure"},ot={en:"Team",fr:"Equipe"},ut={en:"Accessibility",fr:"Accesibilité"},vt={en:"Credits",fr:"Credits"},ct={en:"Connect",fr:"Connexion"},_t={en:"Demo",fr:"Démo"},ft={en:"Other Tools",fr:"D'autre outils"},gt={en:"Home",fr:"Acceuil"},h={menu:Ra,community:Za,projects:Ja,forum:Ka,stage:Qa,learn:Xa,tutorials:et,iiif:at,ml:tt,api:rt,reference:lt,news:st,about:nt,about_arvest:it,team:ot,accessibility:ut,credits:vt,connect:ct,demo:_t,other_tools:ft,home:gt};var dt=A('<footer class="svelte-higoue"><nav><h2 class="svelte-higoue"> </h2> <div id="menus" class="svelte-higoue"><ul class="menu_section svelte-higoue"><li class="svelte-higoue"><a class="menu_top_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a href="https://stage-to-data.huma-num.fr/" class="menu_lower_link svelte-higoue"> </a></li></ul> <ul class="menu_section svelte-higoue"><li class="svelte-higoue"><a class="menu_top_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li></ul> <ul class="menu_section svelte-higoue"><li class="svelte-higoue"><a class="menu_top_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li></ul> <ul class="menu_section svelte-higoue"><li class="svelte-higoue"><a class="menu_top_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li> <li class="svelte-higoue"><a class="menu_lower_link svelte-higoue"> </a></li></ul> <ul class="menu_section svelte-higoue"><li class="svelte-higoue"><a href="https://arvest-dev.tetras-libre.fr/" class="menu_top_link svelte-higoue"> </a></li></ul></div></nav> <div id="logo_container" class="svelte-higoue"><a class="logo_link svelte-higoue" href="https://creativecommons.org/"><img alt="creative commons logo" class="svelte-higoue"></a> <a class="logo_link svelte-higoue" href="https://www.horizon-europe.gouv.fr/erc"><img alt="erc logo" class="svelte-higoue"></a> <a class="logo_link svelte-higoue" href="https://european-union.europa.eu/"><img alt="europe logo" class="svelte-higoue"></a> <a class="logo_link svelte-higoue" href="https://www.univ-rennes2.fr/"><img alt="rennes 2 logo" class="svelte-higoue"></a></div> <p id="copyright_notice" class="svelte-higoue"></p></footer>');function mt(r,s){O(s,!1);let e=L();q.subscribe(ra=>{w(e,ra)});const n=new Date().getFullYear();H();var i=dt(),u=a(i),c=a(u),v=a(c,!0);t(c);var m=o(c,2),g=a(m),k=a(g),x=a(k),W=a(x,!0);t(x),t(k);var C=o(k,2),p=a(C),N=a(p,!0);t(p),t(C);var j=o(C,2),F=a(j),se=a(F,!0);t(F),t(j);var Y=o(j,2),G=a(Y),U=a(G,!0);t(G),t(Y);var re=o(Y,2),Q=a(re),ne=a(Q,!0);t(Q),t(re),t(g);var b=o(g,2),$=a(b),y=a($),D=a(y,!0);t(y),t($);var M=o($,2),P=a(M),V=a(P,!0);t(P),t(M);var S=o(M,2),T=a(S),R=a(T,!0);t(T),t(S),t(b);var X=o(b,2),Z=a(X),J=a(Z),le=a(J,!0);t(J),t(Z);var ee=o(Z,2),ie=a(ee),We=a(ie,!0);t(ie),t(ee);var Ae=o(ee,2),oe=a(Ae),Ye=a(oe,!0);t(oe),t(Ae),t(X);var ue=o(X,2),ve=a(ue),ce=a(ve),Ge=a(ce,!0);t(ce),t(ve);var _e=o(ve,2),fe=a(_e),Ue=a(fe,!0);t(fe),t(_e);var ge=o(_e,2),de=a(ge),Re=a(de,!0);t(de),t(ge);var me=o(ge,2),he=a(me),Ze=a(he,!0);t(he),t(me);var Ie=o(me,2),be=a(Ie),Je=a(be,!0);t(be),t(Ie),t(ue);var je=o(ue,2),Me=a(je),Pe=a(Me),Ke=a(Pe,!0);t(Pe),t(Me),t(je),t(m),t(u);var pe=o(u,2),$e=a(pe),Qe=a($e);f(Qe,"src",`${_??""}/imgs/logos/cc-black.png`),t($e);var we=o($e,2),Xe=a(we);f(Xe,"src",`${_??""}/imgs/logos/erc-black.png`),t(we);var ke=o(we,2),ea=a(ke);f(ea,"src",`${_??""}/imgs/logos/europe-black.png`),t(ke);var Ce=o(ke,2),aa=a(Ce);f(aa,"src",`${_??""}/imgs/logos/R2-black.png`),t(Ce),t(pe);var ta=o(pe,2);ta.textContent=`© 2023 - ${n??""} Arvest`,t(i),te(()=>{d(v,h.menu[l(e)]),f(x,"href",`${_??""}/${l(e)??""}/community`),d(W,h.community[l(e)]),f(p,"href",`${_??""}/${l(e)??""}/community/projects`),d(N,h.projects[l(e)]),f(F,"href",`${_??""}/${l(e)??""}/community/forum`),d(se,h.forum[l(e)]),f(G,"href",`${_??""}/${l(e)??""}/community/news`),d(U,h.news[l(e)]),d(ne,h.stage[l(e)]),f(y,"href",`${_??""}/${l(e)??""}/learn`),d(D,h.learn[l(e)]),f(P,"href",`${_??""}/${l(e)??""}/learn/tutorials`),d(V,h.tutorials[l(e)]),f(T,"href",`${_??""}/${l(e)??""}/learn/iiif`),d(R,h.iiif[l(e)]),f(J,"href",`${_??""}/${l(e)??""}/api`),d(le,h.api[l(e)]),f(ie,"href",`${_??""}/${l(e)??""}/api/ml`),d(We,h.ml[l(e)]),f(oe,"href",`${_??""}/${l(e)??""}/api/documentation`),d(Ye,h.reference[l(e)]),f(ce,"href",`${_??""}/${l(e)??""}/about`),d(Ge,h.about[l(e)]),f(fe,"href",`${_??""}/${l(e)??""}/about/infrastructure`),d(Ue,h.about_arvest[l(e)]),f(de,"href",`${_??""}/${l(e)??""}/about/team`),d(Re,h.team[l(e)]),f(he,"href",`${_??""}/${l(e)??""}/about/accessibility`),d(Ze,h.accessibility[l(e)]),f(be,"href",`${_??""}/${l(e)??""}/about/credits`),d(Je,h.credits[l(e)]),d(Ke,h.connect[l(e)])}),z(r,i),B()}var ht=A('<link rel="alternate" hreflang="en"> <link rel="alternate" hreflang="fr">',1),bt=A('<div id="global_container" class="svelte-na5jbd"><div id="page_container" class="svelte-na5jbd"><!> <div id="content_container" class="svelte-na5jbd"><!></div></div> <!></div>');function Nt(r,s){O(s,!1);const e=De(),n=()=>qe(Be,"$page",e);K(s,"data",8);let i=L(),u=!1,c=L();function v(){u=l(i).scrollTop>0,l(c).handle_scroll(u)}Oe(()=>{v(),l(i).addEventListener("scroll",function(p){v()})}),da(()=>{window.scrollY=0,ca(i,l(i).scrollTop=0)}),ha(()=>{l(c).hide_hamburger()}),ua(()=>n(),()=>{q.set(n().params.lang||"en")}),va(),H();var m=bt();_a(p=>{var N=ht(),j=Fe(N);f(j,"href",`${_}/en`);var F=o(j,2);f(F,"href",`${_}/fr`),z(p,N)});var g=a(m),k=a(g);Le(Ua(k,{$$legacy:!0}),p=>w(c,p),()=>l(c));var x=o(k,2),W=a(x);ba(W,s,"default",{}),t(x),t(g);var C=o(g,2);mt(C,{}),t(m),Le(m,p=>w(i,p),()=>l(i)),z(r,m),B()}export{Nt as component,Ct as universal};
