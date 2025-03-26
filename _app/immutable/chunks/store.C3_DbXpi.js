import{aC as I,q as M,aD as E,ab as T,az as P,W as Y,au as V,a3 as D,aE as R,n as j,P as z,k as B,H as N,z as y,m as A,g as F,j as v,at as $,l as G,aF as J,ar as K,ak as Q,aG as U,N as X,i as Z,p as x,h as S,a as rr,F as er,R as L,u as tr,ag as ar,J as nr,T as sr}from"./runtime.CLk9xquY.js";import{r as ir}from"./svelte-head.CEOkTZm9.js";import{b as ur}from"./disclose-version.DeS0T4Yg.js";const or=new Set,H=new Set;function fr(r,e,n,a){function s(t){if(a.capture||p.call(e,t),!t.cancelBubble){var o=V,l=D;E(null),T(null);try{return n.call(this,t)}finally{E(o),T(l)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?M(()=>{e.addEventListener(r,s,a)}):e.addEventListener(r,s,a),s}function pr(r,e,n,a,s){var t={capture:a,passive:s},o=fr(r,e,n,t);(e===document.body||e===window||e===document)&&I(()=>{e.removeEventListener(r,o,t)})}function p(r){var O;var e=this,n=e.ownerDocument,a=r.type,s=((O=r.composedPath)==null?void 0:O.call(r))||[],t=s[0]||r.target,o=0,l=r.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var _=s.indexOf(e);if(_===-1)return;d<=_&&(o=d)}if(t=s[o]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||n}});var m=V,f=D;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+a];if(h!==void 0&&!t.disabled)if(Y(h)){var[q,...C]=h;q.apply(t,[r,...C])}else h.call(t,r)}catch(g){i?u.push(g):i=g}if(r.cancelBubble||c===e||c===null)break;t=c}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{r.__root=e,delete r.currentTarget,E(m),T(f)}}}const cr=["touchstart","touchmove"];function lr(r){return cr.includes(r)}function gr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function dr(r,e){return W(r,e)}function yr(r,e){R(),e.intro=e.intro??!1;const n=e.target,a=S,s=v;try{for(var t=j(n);t&&(t.nodeType!==8||t.data!==z);)t=B(t);if(!t)throw N;y(!0),A(t),F();const o=W(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==$)throw G(),N;return y(!1),o}catch(o){if(o===N)return e.recover===!1&&J(),R(),K(n),y(!1),dr(r,e);throw o}finally{y(a),A(s),ir()}}const b=new Map;function W(r,{target:e,anchor:n,props:a={},events:s,context:t,intro:o=!0}){R();var l=new Set,d=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!l.has(u)){l.add(u);var c=lr(u);e.addEventListener(u,p,{passive:c});var h=b.get(u);h===void 0?(document.addEventListener(u,p,{passive:c}),b.set(u,1)):b.set(u,h+1)}}};d(Q(or)),H.add(d);var _=void 0,m=U(()=>{var f=n??e.appendChild(X());return Z(()=>{if(t){x({});var i=er;i.c=t}s&&(a.$$events=s),S&&ur(f,null),_=r(f,a)||{},S&&(D.nodes_end=v),t&&rr()}),()=>{var c;for(var i of l){e.removeEventListener(i,p);var u=b.get(i);--u===0?(document.removeEventListener(i,p),b.delete(i)):b.set(i,u)}H.delete(d),k.delete(_),f!==n&&((c=f.parentNode)==null||c.removeChild(f))}});return k.set(_,m),_}let k=new WeakMap;function wr(r){const e=k.get(r);e&&e()}function _r(r,e,n){if(r==null)return e(void 0),L;const a=tr(()=>r.subscribe(e,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function Er(r,e,n){const a=n[e]??(n[e]={store:null,source:ar(void 0),unsubscribe:L});if(a.store!==r)if(a.unsubscribe(),a.store=r??null,r==null)a.source.v=void 0,a.unsubscribe=L;else{var s=!0;a.unsubscribe=_r(r,t=>{s?a.source.v=t:sr(a.source,t)}),s=!1}return nr(a.source)}function Tr(){const r={};return I(()=>{for(var e in r)r[e].unsubscribe()}),r}function mr(r){var e=w;try{return w=!1,[r(),w]}finally{w=e}}export{gr as a,Er as b,mr as c,pr as e,yr as h,dr as m,Tr as s,wr as u};
