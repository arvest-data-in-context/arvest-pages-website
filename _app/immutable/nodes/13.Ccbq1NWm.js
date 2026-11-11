import{a as v,t as _}from"../chunks/disclose-version.C-mJVDQc.js";import{p as ee,d as te,f as ae,t as m,a as re,g as e,s as n,c as r,r as t,n as se,m as ne,a8 as B}from"../chunks/runtime.Buieu2QD.js";import{a as p}from"../chunks/store.CewJFfXO.js";import{i as oe}from"../chunks/if.DuEVLaSL.js";import{e as I,i as j}from"../chunks/each.Ds-X5Qkn.js";import{s as u}from"../chunks/attributes.B6TlXxEx.js";import{i as ie}from"../chunks/lifecycle.DStDkpEQ.js";import{S as pe}from"../chunks/Seo.BQ7nxBh6.js";import{B as le}from"../chunks/BreadCrumbs.DekF8aK4.js";import{C as M}from"../chunks/CodeBox.BJ6GpKj-.js";import{b as N}from"../chunks/paths.CK04uH5a.js";import{l as de}from"../chunks/stores.ClZDMgSy.js";import{B as f}from"../chunks/footer.a_cNaJ4v.js";const ce="https://api.arvest.app/api",me="https://github.com/ARVEST-APP/arvest-api",ue="https://github.com/ARVEST-APP/arvest-api/tree/main/examples",fe="https://github.com/ARVEST-APP/ml-notebooks",he={en:"Everything you can do in Arvest you can also do from code: Arvest is built on an open REST API. Use the Python package for scripts and notebooks, or call the API directly from any language. The examples below can be copied as they are; replace the email and password with your own.",fr:"Tout ce que vous faites dans Arvest peut aussi se faire depuis du code : Arvest repose sur une API REST ouverte. Utilisez le package Python pour vos scripts et notebooks, ou appelez l'API directement depuis n'importe quel langage. Les exemples ci-dessous peuvent être copiés tels quels ; remplacez l'adresse et le mot de passe par les vôtres."},ve=[{id:"swagger",href:ce,title:{en:"API reference (Swagger)",fr:"Référence de l'API (Swagger)"},text:{en:"Every endpoint, its parameters and responses. Try requests from the browser.",fr:"Chaque endpoint, ses paramètres et ses réponses. Essayez des requêtes depuis le navigateur."}},{id:"package",href:me,title:{en:"Python package",fr:"Package Python"},text:{en:"arvestapi: projects, media, manifests and metadata as Python objects.",fr:"arvestapi : projets, médias, manifestes et métadonnées comme objets Python."}},{id:"notebooks",href:fe,title:{en:"Machine learning notebooks",fr:"Notebooks de machine learning"},text:{en:"Ready-made workflows: speech recognition, image embeddings, video, networks.",fr:"Des chaînes de traitement prêtes à l'emploi : transcription, embeddings, vidéo, réseaux."}}],U=[{id:"install",title:{en:"Install",fr:"Installation"},text:{en:"The package needs Python 3.9 or later. Install it straight from GitHub:",fr:"Le package demande Python 3.9 ou plus récent. Installez-le directement depuis GitHub :"},language:"bash",code:"pip install git+https://github.com/ARVEST-APP/arvest-api.git"},{id:"connect",title:{en:"Connect",fr:"Se connecter"},text:{en:"Sign in with the email and password of your Arvest account. Keep them out of your code, for instance in environment variables.",fr:"Connectez-vous avec l'adresse et le mot de passe de votre compte Arvest. Gardez-les hors de votre code, par exemple dans des variables d'environnement."},filename:"connect.py",language:"python",code:`import os
import arvestapi

ar = arvestapi.Arvest(
    os.environ["ARVEST_EMAIL"],
    os.environ["ARVEST_PASSWORD"],
)

print(f"Connected as {ar.profile.name}")`},{id:"projects",title:{en:"Projects",fr:"Projets"},text:{en:"List your projects, create one, rename it or remove it.",fr:"Listez vos projets, créez-en un, renommez-le ou supprimez-le."},filename:"projects.py",language:"python",code:`for project in ar.get_projects():
    print(project.id, project.title)

project = ar.create_project(title="Rehearsal notes")
project.update_title("Rehearsal notes, week 2")
project.update_description("Videos and annotations from the second week.")

# project.remove()`},{id:"media",title:{en:"Media",fr:"Médias"},text:{en:"Add images, videos, sound or documents, from your computer or from a link. Arvest gives each one an address you can use in manifests.",fr:"Ajoutez images, vidéos, sons ou documents, depuis votre ordinateur ou depuis un lien. Arvest donne à chacun une adresse utilisable dans les manifestes."},filename:"media.py",language:"python",code:`# from a file on your computer
photo = ar.add_media(path="photos/stage_plan.jpg")

# or from a link
video = ar.add_media(path="https://example.org/rehearsal.mp4")

print(photo.title, photo.get_full_url())

for media in ar.get_medias():
    print(media.id, media.title)`},{id:"manifests",title:{en:"IIIF manifests",fr:"Manifestes IIIF"},text:{en:"Bring in a IIIF manifest from a library or archive, or upload your own; then read and change its JSON.",fr:"Importez un manifeste IIIF d'une bibliothèque ou d'une archive, ou envoyez le vôtre ; puis lisez et modifiez son JSON."},filename:"manifests.py",language:"python",code:`manifest = ar.add_manifest(
    path="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json"
)

content = manifest.get_content()
content["label"] = {"en": ["Programme, 1978"]}
manifest.update_content(content)

print(manifest.get_full_url())`},{id:"metadata",title:{en:"Metadata",fr:"Métadonnées"},text:{en:"Each item has metadata in a format (Dublin Core by default). Read it, fill in fields, or define your own format.",fr:"Chaque élément a des métadonnées dans un format (Dublin Core par défaut). Lisez-les, remplissez des champs ou définissez votre propre format."},filename:"metadata.py",language:"python",code:`media = ar.get_medias()[0]
print(media.get_metadata())

media.update_metadata({"creator": "Pina Bausch", "date": "1978"})

# a format of your own
fmt = ar.create_metadata_format("Rehearsals", [
    {"term": "scene", "label": "Scene", "definition": "The scene shown."},
    {"term": "take", "label": "Take", "definition": "Which take."},
])
media.update_metadata({"scene": "3", "take": "2"}, metadata_format=fmt)`},{id:"workspace",title:{en:"Export a workspace",fr:"Exporter un espace de travail"},text:{en:"A project's workspace (its documents, their places, groups, links and annotations) is one JSON document. Save it to analyse it elsewhere.",fr:"L'espace de travail d'un projet (ses documents, leurs places, groupes, liens et annotations) est un seul document JSON. Enregistrez-le pour l'analyser ailleurs."},filename:"export_workspace.py",language:"python",code:`import json

project = next(p for p in ar.get_projects() if p.title == "Rehearsal notes")

with open("workspace.json", "w", encoding="utf-8") as f:
    json.dump(project.user_workspace.to_dict(), f, ensure_ascii=False, indent=2)`},{id:"rest",title:{en:"The REST API directly",fr:"L'API REST directement"},text:{en:"Without the package: sign in at /auth/login to get a token, then send it as a Bearer header. Every endpoint is described in the Swagger reference.",fr:"Sans le package : connectez-vous sur /auth/login pour obtenir un jeton, puis envoyez-le dans un en-tête Bearer. Chaque endpoint est décrit dans la référence Swagger."},filename:"rest.py",language:"python",code:`import os
import requests

API = "https://api.arvest.app"

login = requests.post(f"{API}/auth/login", json={
    "mail": os.environ["ARVEST_EMAIL"],
    "password": os.environ["ARVEST_PASSWORD"],
})
login.raise_for_status()
headers = {"Authorization": f"Bearer {login.json()['access_token']}"}

profile = requests.get(f"{API}/auth/profile", headers=headers).json()
print(profile)`,extra:{filename:"rest.sh",language:"bash",code:`TOKEN=$(curl -s -X POST https://api.arvest.app/auth/login \\
  -H "Content-Type: application/json" \\
  -d "{\\"mail\\": \\"$ARVEST_EMAIL\\", \\"password\\": \\"$ARVEST_PASSWORD\\"}" \\
  | python3 -c "import sys, json; print(json.load(sys.stdin)['access_token'])")

curl -s https://api.arvest.app/auth/profile -H "Authorization: Bearer $TOKEN"`}}],g={on_this_page:{en:"On this page",fr:"Sur cette page"},more_examples:{en:"More examples in the package's repository",fr:"Plus d'exemples dans le dépôt du package"},description:{en:"Use the Arvest API from Python or any language: install the package, connect, and copy examples for projects, media, IIIF manifests, metadata and workspaces.",fr:"Utilisez l'API d'Arvest depuis Python ou tout autre langage : installez le package, connectez-vous, et copiez des exemples pour les projets, médias, manifestes IIIF, métadonnées et espaces de travail."}};var ge=_('<a class="card link_card svelte-pymqip" target="_blank" rel="noopener"><span class="link_title svelte-pymqip"> <span aria-hidden="true">↗</span></span> <span class="link_text svelte-pymqip"> </span></a>'),_e=_('<li><a class="svelte-pymqip"> </a></li>'),ye=_('<section class="svelte-pymqip"><h2 class="svelte-pymqip"><span class="num svelte-pymqip"> </span> </h2> <p class="svelte-pymqip"> </p> <!> <!></section>'),be=_('<!> <!> <header class="page_head"><h1> </h1> <p class="lede"> </p></header> <div class="links svelte-pymqip"></div> <div class="docs svelte-pymqip"><nav class="toc svelte-pymqip"><span class="eyebrow svelte-pymqip"> </span> <ol class="svelte-pymqip"></ol></nav> <div class="sections svelte-pymqip"><!> <p class="more svelte-pymqip"><a target="_blank" rel="noopener" class="svelte-pymqip"> </a></p></div></div>',1);function Ce($,F){ee(F,!1);let a=ne();de.subscribe(l=>{te(a,l)}),ie();var w=be(),E=ae(w);pe(E,{get title(){return f.reference[e(a)]},get description(){return g.description[e(a)]}});var R=n(E,2),G=B(()=>[{text:f.home[e(a)],href:N+"/"+e(a)},{text:f.api[e(a)]},{text:f.reference[e(a)],href:N+"/"+e(a)+"/api/documentation"}]);le(R,{get breadcrumbs(){return e(G)}});var y=n(R,2),b=r(y),K=r(b,!0);t(b);var q=n(b,2),D=r(q,!0);t(q),t(y);var A=n(y,2);I(A,5,()=>ve,j,(l,s)=>{var i=ge(),o=r(i),d=r(o);se(),t(o);var c=n(o,2),S=r(c,!0);t(c),t(i),m(()=>{u(i,"href",e(s).href),p(d,`${e(s).title[e(a)]??""} `),p(S,e(s).text[e(a)])}),v(l,i)}),t(A);var z=n(A,2),h=r(z),x=r(h),W=r(x,!0);t(x);var T=n(x,2);I(T,5,()=>U,j,(l,s)=>{var i=_e(),o=r(i),d=r(o,!0);t(o),t(i),m(()=>{u(o,"href",`#${e(s).id??""}`),p(d,e(s).title[e(a)])}),v(l,i)}),t(T),t(h);var C=n(h,2),L=r(C);I(L,1,()=>U,j,(l,s,i)=>{var o=ye(),d=r(o),c=r(d),S=r(c,!0);m(()=>p(S,String(i+1).padStart(2,"0"))),t(c);var J=n(c);t(d);var P=n(d,2),X=r(P,!0);t(P);var V=n(P,2),Q=B(()=>e(s).filename||"");M(V,{get code(){return e(s).code},get filename(){return e(Q)},get language(){return e(s).language},wrap:!1});var Y=n(V,2);oe(Y,()=>e(s).extra,Z=>{M(Z,{get code(){return e(s).extra.code},get filename(){return e(s).extra.filename},get language(){return e(s).extra.language},wrap:!1})}),t(o),m(()=>{u(o,"id",e(s).id),p(J,` ${e(s).title[e(a)]??""}`),p(X,e(s).text[e(a)])}),v(l,o)});var O=n(L,2),k=r(O);u(k,"href",ue);var H=r(k);t(k),t(O),t(C),t(z),m(()=>{p(K,f.reference[e(a)]),p(D,he[e(a)]),u(h,"aria-label",g.on_this_page[e(a)]),p(W,g.on_this_page[e(a)]),p(H,`${g.more_examples[e(a)]??""} ↗`)}),v($,w),re()}export{Ce as component};
