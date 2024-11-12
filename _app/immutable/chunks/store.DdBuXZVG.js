import{az as C,q as H,aA as E,a8 as T,aw as W,U as Y,aq as I,a0 as A,aB as L,M as z,J as P,K as $,aC as m,o as y,n as k,i as j,k as p,ap as F,aD as G,aE as J,an as K,ag as Q,aF as U,G as X,g as Z,p as x,h as N,a as rr,z as er,O,u as tr,ad as ar,C as nr,Q as sr}from"./runtime.BJWdkgwk.js";import{r as ir}from"./svelte-head.BX68Cz65.js";import{d as ur}from"./disclose-version.BMwdIqI7.js";const or=new Set,q=new Set;function fr(r,e,n,a){function s(t){if(a.capture||v.call(e,t),!t.cancelBubble){var o=I,l=A;E(null),T(null);try{return n.call(this,t)}finally{E(o),T(l)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?H(()=>{e.addEventListener(r,s,a)}):e.addEventListener(r,s,a),s}function vr(r,e,n,a,s){var t={capture:a,passive:s},o=fr(r,e,n,t);(e===document.body||e===window||e===document)&&C(()=>{e.removeEventListener(r,o,t)})}function v(r){var D;var e=this,n=e.ownerDocument,a=r.type,s=((D=r.composedPath)==null?void 0:D.call(r))||[],t=s[0]||r.target,o=0,l=r.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var _=s.indexOf(e);if(_===-1)return;d<=_&&(o=d)}if(t=s[o]||r.target,t!==e){W(r,"currentTarget",{configurable:!0,get(){return t||n}});var S=I,f=A;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+a];if(h!==void 0&&!t.disabled)if(Y(h)){var[V,...B]=h;V.apply(t,[r,...B])}else h.call(t,r)}catch(g){i?u.push(g):i=g}if(r.cancelBubble||c===e||c===null)break;t=c}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{r.__root=e,delete r.currentTarget,E(S),T(f)}}}const cr=["touchstart","touchmove"];function lr(r){return cr.includes(r)}function gr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function dr(r,e){return M(r,e)}function yr(r,e){L(),e.intro=e.intro??!1;const n=e.target,a=N,s=p;try{for(var t=z(n);t&&(t.nodeType!==8||t.data!==P);)t=$(t);if(!t)throw m;y(!0),k(t),j();const o=M(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==F)throw G(),m;return y(!1),o}catch(o){if(o===m)return e.recover===!1&&J(),L(),K(n),y(!1),dr(r,e);throw o}finally{y(a),k(s),ir()}}const b=new Map;function M(r,{target:e,anchor:n,props:a={},events:s,context:t,intro:o=!0}){L();var l=new Set,d=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!l.has(u)){l.add(u);var c=lr(u);e.addEventListener(u,v,{passive:c});var h=b.get(u);h===void 0?(document.addEventListener(u,v,{passive:c}),b.set(u,1)):b.set(u,h+1)}}};d(Q(or)),q.add(d);var _=void 0,S=U(()=>{var f=n??e.appendChild(X());return Z(()=>{if(t){x({});var i=er;i.c=t}s&&(a.$$events=s),N&&ur(f,null),_=r(f,a)||{},N&&(A.nodes_end=p),t&&rr()}),()=>{var c;for(var i of l){e.removeEventListener(i,v);var u=b.get(i);--u===0?(document.removeEventListener(i,v),b.delete(i)):b.set(i,u)}q.delete(d),R.delete(_),f!==n&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(_,S),_}let R=new WeakMap;function wr(r){const e=R.get(r);e&&e()}function _r(r,e,n){if(r==null)return e(void 0),O;const a=tr(()=>r.subscribe(e,n));return a.unsubscribe?()=>a.unsubscribe():a}let w=!1;function Er(r,e,n){const a=n[e]??(n[e]={store:null,source:ar(void 0),unsubscribe:O});if(a.store!==r)if(a.unsubscribe(),a.store=r??null,r==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=_r(r,t=>{s?a.source.v=t:sr(a.source,t)}),s=!1}return nr(a.source)}function Tr(){const r={};return C(()=>{for(var e in r)r[e].unsubscribe()}),r}function Sr(r){var e=w;try{return w=!1,[r(),w]}finally{w=e}}export{gr as a,Er as b,Sr as c,vr as e,yr as h,dr as m,Tr as s,wr as u};
