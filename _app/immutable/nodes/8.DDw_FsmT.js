import{a as ae,n as Ee,t as we}from"../chunks/disclose-version.DeS0T4Yg.js";import{p as re,t as ie,a as oe,c as t,r as a,s as e,T as ye,U as ze,J as o,f as He,V as Ce}from"../chunks/runtime.CLk9xquY.js";import{e as x,a as l}from"../chunks/store.C3_DbXpi.js";import{s}from"../chunks/attributes.BTAS-wgr.js";import{i as se}from"../chunks/lifecycle.BWXILzzf.js";import{B as We}from"../chunks/BreadCrumbs.u9G6J3OW.js";import{b as d}from"../chunks/paths.kPpuf3Sr.js";import{p as P}from"../chunks/props.DbDAe7oc.js";import{l as Ae}from"../chunks/stores.BuQwl3i7.js";import{B as q}from"../chunks/BigButton.BCYNUaR9.js";import{B as te}from"../chunks/footer.C8JYlHHJ.js";var Fe=Ee('<svg class="arrow-svg svelte-1petu11"><defs><marker id="arrowhead" orient="auto"><polygon></polygon></marker><marker id="arrowhead-reverse" refX="0" orient="auto"><polygon></polygon></marker></defs><line></line></svg>');function b(V,m){re(m,!1);let r=P(m,"pointA",24,()=>({left:40,top:20})),u=P(m,"pointB",24,()=>({left:70,top:60})),g=P(m,"color",8,"grey"),w=P(m,"thickness",8,1),n=P(m,"arrowSize",8,5),h=P(m,"arrowStart",8,!0),y=P(m,"arrowEnd",8,!0);se();var _=Fe(),f=t(_),v=t(f),I=t(v);a(v);var c=e(v),k=t(c);a(c),a(f);var p=e(f);a(_),ie(()=>{s(v,"markerWidth",n()*2),s(v,"markerHeight",n()*1.4),s(v,"refX",n()*2),s(v,"refY",n()*.7),s(I,"points",`0 0, ${n()*2} ${n()*.7}, 0 ${n()*1.4}`),s(I,"fill",g()),s(c,"markerWidth",n()*2),s(c,"markerHeight",n()*1.4),s(c,"refY",n()*.7),s(k,"points",`${n()*2} 0, 0 ${n()*.7}, ${n()*2} ${n()*1.4}`),s(k,"fill",g()),s(p,"x1",`${r().left??""}%`),s(p,"y1",`${r().top??""}%`),s(p,"x2",`${u().left??""}%`),s(p,"y2",`${u().top??""}%`),s(p,"stroke",g()),s(p,"stroke-width",w()),s(p,"marker-start",h()?"url(#arrowhead-reverse)":"none"),s(p,"marker-end",y()?"url(#arrowhead)":"none")}),ae(V,_),oe()}const Je={en:"Infrastructure",fr:"Instrustructure"},Ye={title:{en:"NestJS multi-user interface",fr:"Interface multi-utilisateur NestJS"},description:{en:"The main Arvest app takes the form of a web app written in NestJS. This means that all you need is to create an account with an email address and you will have access to all of Arvest's functionalities. This web app is deployed on a virtual machine provided by Huma-Num, a French state-funded infrastructure for digital humanities.",fr:"L'application principale d'Arvest prend la forme d'une application web développée en NestJS. Cela signifie que tout ce dont vous avez besoin est de créer un compte avec une adresse e-mail pour accéder à toutes les fonctionnalités d'Arvest. Cette application web est déployée sur une machine virtuelle fournie par Huma-Num, une infrastructure française financée par l'État pour les humanités numériques."},img:"imgs/infrastructure/_multi-user.png",link:{url:"https://github.com/ARVEST-APP/mirador-multi-user",label:{en:"Repo",fr:"Repo"}}},Le={title:{en:"AV Mirador fork",fr:"Fork AV de Mirador"},description:{en:"The main workspace of the Arvest app is our own fork of the IIIF viewer Mirador. Among various things, this fork's main functionality is to add playback of audiovisual elements within Mirador.",fr:"L'espace de travail principal de l'application Arvest est notre propre fork du visualiseur IIIF Mirador. Parmi ses différentes fonctionnalités, ce fork permet principalement d'ajouter la lecture d'éléments audiovisuels au sein de Mirador."},img:"imgs/infrastructure/_mirador-fork.png",link:{url:"https://github.com/ARVEST-APP/mirador-video",label:{en:"Repo",fr:"Repo"}}},Xe={title:{en:"Image annotation plugin",fr:"Plugin d'annotation d'images"},description:{en:"We add to our fork of Mirador an image annotation plugin which can be used with any version of Mirador. The image annotation plugin allows you to add and display textual, tag and linked Manifest annotations within the viewer.",fr:"Nous ajoutons à notre fork de Mirador un plugin d'annotation d'image qui peut être utilisé avec n'importe quelle version de Mirador. Ce plugin d'annotation d'image permet d'ajouter et d'afficher des annotations textuelles, des tags et des annotations de Manifest lié au sein du visualiseur."},img:"imgs/infrastructure/_image-annotation.png",link:{url:"https://github.com/ARVEST-APP/mirador-annotation-editor",label:{en:"Repo",fr:"Repo"}}},Ge={title:{en:"AV annotation plugin",fr:"Plugin d'annotation AV"},description:{en:"On top of the image annotation plugin, we also provide an audiovisual content annotation editor which must be used with our AV fork of Mirador. This plugin allows you to create and display textual, tag, linked Manifest, image and overlay annotations within the viewer.",fr:"En plus du plugin d'annotation d'image, nous proposons également un éditeur d'annotation de contenu audiovisuel, qui doit être utilisé avec notre fork AV de Mirador. Ce plugin permet de créer et d'afficher des annotations textuelles, des tags, des annotations de Manifest lié, des annotations d'image et des annotations d'overlay au sein du visualiseur."},img:"imgs/infrastructure/_video-annotation.png",link:{url:"https://github.com/ARVEST-APP/mirador-annotation-editor-video",label:{en:"Repo",fr:"Repo"}}},Oe={title:{en:"Media and Manifest storage",fr:"Stockage de médias et des Manifests"},description:{en:"All of the content that you upload onto Arvest, be it media or Manifests, is stored at Huma-Num, a French state-funded infrastructure for digital humanities. You can make this content directly available to share witht he world, or keep it private. We also provide an instance of Peertube for large multimedia files (also hosted by Huma-num).",fr:"Tout le contenu que vous stockez sur Arvest, qu'il s'agisse de médias ou de Manifests, est stocké chez Huma-Num, une infrastructure française financée par l'État pour les humanités numériques. Vous pouvez rendre ce contenu directement accessible pour le partager avec le monde, ou le garder privé. Nous fournissons également une instance de Peertube pour les fichiers multimédias volumineux (également hébergée par Huma-Num)."},img:"imgs/infrastructure/_media-stocking.png",link:{url:"https://peertube.arvest.app/",label:{en:"Peertube instance",fr:"Instance Peertube"}}},Ue={title:{en:"Share with the world",fr:"Partager avec les autres"},description:{en:"It is possible to share your content with the world - be it stocked media, Manifests or entire projects. You can generate links and permissions which allow you to keep a hand on who has access to your content.",fr:"Il est possible de partager votre contenu avec le monde entier, qu'il s'agisse de médias stockés, de Manifests ou de projets complets. Vous pouvez générer des liens et des autorisations qui vous permettent de contrôler qui a accès à votre contenu."},img:"imgs/infrastructure/_earth.png"},De={title:{en:"REST API",fr:"REST API"},description:{en:"Almost everything in Arvest works with HTTP requests which means that we provide an open API that allows you to interact with the app from afar. We also provide a python package which easily lets you use the API for scripting.",fr:"Presque tout dans Arvest fonctionne avec des requêtes HTTP, ce qui signifie que nous fournissons une API ouverte qui vous permet d'interagir avec l'application à distance. Nous proposons également un package Python qui vous permet d'utiliser facilement l'API pour vos scripts."},img:"imgs/infrastructure/_api.png",link:{url:"",label:{en:"More about the API",fr:"Plus à propos de l'API"}}},i={title:Je,django:Ye,mirador:Le,image_anno:Xe,av_anno:Ge,storage:Oe,world:Ue,api:De};var Ke=we('<div class="infrastructure_widget svelte-pbi7yl"><img alt="api logo" id="api_img" class="svelte-pbi7yl"> <img alt="mmu logo" id="mm_img" class="svelte-pbi7yl"> <p id="mm_label" class="infra-label svelte-pbi7yl"> </p> <img alt="earth logo" id="earth_img" class="svelte-pbi7yl"> <img alt="stocking logo" id="stocking_img" class="svelte-pbi7yl"> <p id="storgae_label" class="infra-label svelte-pbi7yl"> </p> <img alt="mirador logo" id="mirador_img" class="svelte-pbi7yl"> <p id="mirador_label" class="infra-label svelte-pbi7yl"> </p> <img alt="imag annotation logo" id="image_anno_img" class="svelte-pbi7yl"> <p id="image_anno_label" class="infra-label svelte-pbi7yl"> </p> <img alt="video annotation logo" id="video_anno_img" class="svelte-pbi7yl"> <p id="av_anno_label" class="infra-label svelte-pbi7yl"> </p> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Qe(V,m){re(m,!1);let r=ze();Ae.subscribe(E=>{ye(r,E)});function u(E){let H="scroll_to_"+String(E);const J=document.getElementById(H);J&&J.scrollIntoView({behavior:"smooth",block:"center"})}se();var g=Ke(),w=t(g);s(w,"src",`${d??""}/imgs/infrastructure/_api.png`);var n=e(w,2);s(n,"src",`${d??""}/imgs/infrastructure/_multi-user.png`);var h=e(n,2),y=t(h,!0);a(h);var _=e(h,2);s(_,"src",`${d??""}/imgs/infrastructure/_earth.png`);var f=e(_,2);s(f,"src",`${d??""}/imgs/infrastructure/_media-stocking.png`);var v=e(f,2),I=t(v,!0);a(v);var c=e(v,2);s(c,"src",`${d??""}/imgs/infrastructure/_mirador-fork.png`);var k=e(c,2),p=t(k,!0);a(k);var B=e(k,2);s(B,"src",`${d??""}/imgs/infrastructure/_image-annotation.png`);var z=e(B,2),C=t(z,!0);a(z);var M=e(z,2);s(M,"src",`${d??""}/imgs/infrastructure/_video-annotation.png`);var A=e(M,2),Y=t(A,!0);a(A);var $=e(A,2);b($,{pointA:{left:48,top:20},pointB:{left:48,top:30}});var W=e($,2);b(W,{pointA:{left:23,top:20},pointB:{left:40,top:13}});var T=e(W,2);b(T,{pointA:{left:20,top:53},pointB:{left:22,top:66}});var F=e(T,2);b(F,{pointA:{left:30,top:82},pointB:{left:36,top:70},arrowEnd:!1});var S=e(F,2);b(S,{pointA:{left:54,top:8},pointB:{left:70,top:20}});var R=e(S,2);b(R,{pointA:{left:60,top:40},pointB:{left:69,top:30},arrowStart:!1});var j=e(R,2);b(j,{pointA:{left:72,top:41},pointB:{left:70,top:50},arrowStart:!1});var N=e(j,2);b(N,{pointA:{left:72,top:68},pointB:{left:74,top:75},arrowStart:!1}),a(g),ie(()=>{l(y,i.django.title[o(r)]),l(I,i.storage.title[o(r)]),l(p,i.mirador.title[o(r)]),l(C,i.image_anno.title[o(r)]),l(Y,i.av_anno.title[o(r)])}),x("click",w,()=>{u(6)}),x("click",n,()=>{u(1)}),x("click",_,()=>{u(7)}),x("click",f,()=>{u(5)}),x("click",c,()=>{u(2)}),x("click",B,()=>{u(3)}),x("click",M,()=>{u(4)}),ae(V,g),oe()}var Ze=we('<!> <div class="cont svelte-zk98to"><!> <div class="infra_card svelte-zk98to" id="scroll_to_1"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_2"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_3"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_4"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_5"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_6"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p> <div class="button_resizer svelte-zk98to"><!></div></div></div> <div class="infra_card svelte-zk98to" id="scroll_to_7"><div class="image_div svelte-zk98to"></div> <div class="infra_text_part svelte-zk98to"><h3 class="svelte-zk98to"> </h3> <p class="svelte-zk98to"> </p></div></div></div>',1);function ut(V,m){re(m,!1);let r=ze();Ae.subscribe(Ne=>{ye(r,Ne)}),se();var u=Ze(),g=He(u),w=Ce(()=>[{text:te.home[o(r)],href:d+"/"+o(r)},{text:te.about[o(r)],href:d+"/"+o(r)+"/about"},{text:te.about_arvest[o(r)],href:d+"/"+o(r)+"/about/infrastructure"}]);We(g,{get breadcrumbs(){return o(w)}});var n=e(g,2),h=t(n);Qe(h,{});var y=e(h,2),_=t(y),f=e(_,2),v=t(f),I=t(v,!0);a(v);var c=e(v,2),k=t(c,!0);a(c);var p=e(c,2),B=t(p);q(B,{get url(){return i.django.link.url},get label(){return i.django.link.label[o(r)]}}),a(p),a(f),a(y);var z=e(y,2),C=t(z),M=e(C,2),A=t(M),Y=t(A,!0);a(A);var $=e(A,2),W=t($,!0);a($);var T=e($,2),F=t(T);q(F,{get url(){return i.mirador.link.url},get label(){return i.mirador.link.label[o(r)]}}),a(T),a(M),a(z);var S=e(z,2),R=t(S),j=e(R,2),N=t(j),E=t(N,!0);a(N);var H=e(N,2),J=t(H,!0);a(H);var ne=e(H,2),xe=t(ne);q(xe,{get url(){return i.image_anno.link.url},get label(){return i.image_anno.link.label[o(r)]}}),a(ne),a(j),a(S);var L=e(S,2),le=t(L),de=e(le,2),X=t(de),Pe=t(X,!0);a(X);var G=e(X,2),Ie=t(G,!0);a(G);var ve=e(G,2),Me=t(ve);q(Me,{get url(){return i.av_anno.link.url},get label(){return i.av_anno.link.label[o(r)]}}),a(ve),a(de),a(L);var O=e(L,2),ue=t(O),ce=e(ue,2),U=t(ce),$e=t(U,!0);a(U);var D=e(U,2),Se=t(D,!0);a(D);var pe=e(D,2),qe=t(pe);q(qe,{get url(){return i.storage.link.url},get label(){return i.storage.link.label[o(r)]}}),a(pe),a(ce),a(O);var K=e(O,2),me=t(K),ge=e(me,2),Q=t(ge),Ve=t(Q,!0);a(Q);var Z=e(Q,2),Be=t(Z,!0);a(Z);var _e=e(Z,2),Te=t(_e);q(Te,{get url(){return`${d??""}/${o(r)??""}/api`},get label(){return i.api.link.label[o(r)]}}),a(_e),a(ge),a(K);var fe=e(K,2),he=t(fe),ke=e(he,2),ee=t(ke),Re=t(ee,!0);a(ee);var be=e(ee,2),je=t(be,!0);a(be),a(ke),a(fe),a(n),ie(()=>{s(_,"style",`background-image: url('${d??""}/${i.django.img}');`),l(I,i.django.title[o(r)]),l(k,i.django.description[o(r)]),s(C,"style",`background-image: url('${d??""}/${i.mirador.img}');`),l(Y,i.mirador.title[o(r)]),l(W,i.mirador.description[o(r)]),s(R,"style",`background-image: url('${d??""}/${i.image_anno.img}');`),l(E,i.image_anno.title[o(r)]),l(J,i.image_anno.description[o(r)]),s(le,"style",`background-image: url('${d??""}/${i.av_anno.img}');`),l(Pe,i.av_anno.title[o(r)]),l(Ie,i.av_anno.description[o(r)]),s(ue,"style",`background-image: url('${d??""}/${i.storage.img}');`),l($e,i.storage.title[o(r)]),l(Se,i.storage.description[o(r)]),s(me,"style",`background-image: url('${d??""}/${i.api.img}');`),l(Ve,i.api.title[o(r)]),l(Be,i.api.description[o(r)]),s(he,"style",`background-image: url('${d??""}/${i.world.img}');`),l(Re,i.world.title[o(r)]),l(je,i.world.description[o(r)])}),ae(V,u),oe()}export{ut as component};
