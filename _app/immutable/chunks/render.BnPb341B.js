import{ah as M,q as B,av as b,aa as E,aw as H,V as W,at as D,a2 as O,ax as N,O as Y,M as j,N as z,ay as T,o as w,n as A,i as C,k as y,as as P,az as $,aA as J,aq as F,aj as G,aB as K,J as Q,g as U,p as X,h as S,a as Z,z as x}from"./runtime.bMrP9T_D.js";import{r as aa}from"./svelte-head.CYtlEIaZ.js";import{b as ra}from"./disclose-version.xbf8aJl1.js";const ta=new Set,k=new Set;function ea(a,r,e,o){function s(t){if(o.capture||p.call(r,t),!t.cancelBubble){var u=D,c=O;b(null),E(null);try{return e.call(this,t)}finally{b(u),E(c)}}}return a.startsWith("pointer")||a.startsWith("touch")||a==="wheel"?B(()=>{r.addEventListener(a,s,o)}):r.addEventListener(a,s,o),s}function la(a,r,e,o,s){var t={capture:o,passive:s},u=ea(a,r,e,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(a,u,t)})}function p(a){var R;var r=this,e=r.ownerDocument,o=a.type,s=((R=a.composedPath)==null?void 0:R.call(a))||[],t=s[0]||a.target,u=0,c=a.__root;if(c){var d=s.indexOf(c);if(d!==-1&&(r===document||r===window)){a.__root=r;return}var _=s.indexOf(r);if(_===-1)return;d<=_&&(u=d)}if(t=s[u]||a.target,t!==r){H(a,"currentTarget",{configurable:!0,get(){return t||e}});var m=D,f=O;b(null),E(null);try{for(var n,i=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+o];if(h!==void 0&&!t.disabled)if(W(h)){var[q,...I]=h;q.apply(t,[a,...I])}else h.call(t,a)}catch(g){n?i.push(g):n=g}if(a.cancelBubble||l===r||l===null)break;t=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{a.__root=r,delete a.currentTarget,b(m),E(f)}}}const na=["touchstart","touchmove"];function sa(a){return na.includes(a)}function ca(a,r){var e=r==null?"":typeof r=="object"?r+"":r;e!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=e,a.nodeValue=e==null?"":e+"")}function ia(a,r){return V(a,r)}function da(a,r){N(),r.intro=r.intro??!1;const e=r.target,o=S,s=y;try{for(var t=Y(e);t&&(t.nodeType!==8||t.data!==j);)t=z(t);if(!t)throw T;w(!0),A(t),C();const u=V(a,{...r,anchor:t});if(y===null||y.nodeType!==8||y.data!==P)throw $(),T;return w(!1),u}catch(u){if(u===T)return r.recover===!1&&J(),N(),F(e),w(!1),ia(a,r);throw u}finally{w(o),A(s),aa()}}const v=new Map;function V(a,{target:r,anchor:e,props:o={},events:s,context:t,intro:u=!0}){N();var c=new Set,d=f=>{for(var n=0;n<f.length;n++){var i=f[n];if(!c.has(i)){c.add(i);var l=sa(i);r.addEventListener(i,p,{passive:l});var h=v.get(i);h===void 0?(document.addEventListener(i,p,{passive:l}),v.set(i,1)):v.set(i,h+1)}}};d(G(ta)),k.add(d);var _=void 0,m=K(()=>{var f=e??r.appendChild(Q());return U(()=>{if(t){X({});var n=x;n.c=t}s&&(o.$$events=s),S&&ra(f,null),_=a(f,o)||{},S&&(O.nodes_end=y),t&&Z()}),()=>{var l;for(var n of c){r.removeEventListener(n,p);var i=v.get(n);--i===0?(document.removeEventListener(n,p),v.delete(n)):v.set(n,i)}k.delete(d),L.delete(_),f!==e&&((l=f.parentNode)==null||l.removeChild(f))}});return L.set(_,m),_}let L=new WeakMap;function _a(a){const r=L.get(a);r&&r()}export{la as e,da as h,ia as m,ca as s,_a as u};
