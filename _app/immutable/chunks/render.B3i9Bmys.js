import{ag as q,q as H,au as b,a9 as E,av as W,V as Y,as as D,a1 as O,aw as N,O as z,M as B,N as C,ax as T,o as w,n as A,i as P,k as v,ar as $,ay as j,az as J,ap as F,ai as G,aA as K,J as Q,g as U,p as X,h as S,a as Z,z as x}from"./runtime.hQjgarjH.js";import{r as rr}from"./svelte-head.DFGweURb.js";import{b as ar}from"./disclose-version.C2fYjYVg.js";const tr=new Set,k=new Set;function er(r,a,e,o){function s(t){if(o.capture||y.call(a,t),!t.cancelBubble){var u=D,c=O;b(null),E(null);try{return e.call(this,t)}finally{b(u),E(c)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?H(()=>{a.addEventListener(r,s,o)}):a.addEventListener(r,s,o),s}function lr(r,a,e,o,s){var t={capture:o,passive:s},u=er(r,a,e,t);(a===document.body||a===window||a===document)&&q(()=>{a.removeEventListener(r,u,t)})}function y(r){var R;var a=this,e=a.ownerDocument,o=r.type,s=((R=r.composedPath)==null?void 0:R.call(r))||[],t=s[0]||r.target,u=0,c=r.__root;if(c){var d=s.indexOf(c);if(d!==-1&&(a===document||a===window)){r.__root=a;return}var _=s.indexOf(a);if(_===-1)return;d<=_&&(u=d)}if(t=s[u]||r.target,t!==a){W(r,"currentTarget",{configurable:!0,get(){return t||e}});var m=D,f=O;b(null),E(null);try{for(var n,i=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+o];if(h!==void 0&&!t.disabled)if(Y(h)){var[I,...M]=h;I.apply(t,[r,...M])}else h.call(t,r)}catch(g){n?i.push(g):n=g}if(r.cancelBubble||l===a||l===null)break;t=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=a,delete r.currentTarget,b(m),E(f)}}}const nr=["touchstart","touchmove"];function sr(r){return nr.includes(r)}function cr(r,a){var e=a==null?"":typeof a=="object"?a+"":a;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function ir(r,a){return V(r,a)}function dr(r,a){N(),a.intro=a.intro??!1;const e=a.target,o=S,s=v;try{for(var t=z(e);t&&(t.nodeType!==8||t.data!==B);)t=C(t);if(!t)throw T;w(!0),A(t),P();const u=V(r,{...a,anchor:t});if(v===null||v.nodeType!==8||v.data!==$)throw j(),T;return w(!1),u}catch(u){if(u===T)return a.recover===!1&&J(),N(),F(e),w(!1),ir(r,a);throw u}finally{w(o),A(s),rr()}}const p=new Map;function V(r,{target:a,anchor:e,props:o={},events:s,context:t,intro:u=!0}){N();var c=new Set,d=f=>{for(var n=0;n<f.length;n++){var i=f[n];if(!c.has(i)){c.add(i);var l=sr(i);a.addEventListener(i,y,{passive:l});var h=p.get(i);h===void 0?(document.addEventListener(i,y,{passive:l}),p.set(i,1)):p.set(i,h+1)}}};d(G(tr)),k.add(d);var _=void 0,m=K(()=>{var f=e??a.appendChild(Q());return U(()=>{if(t){X({});var n=x;n.c=t}s&&(o.$$events=s),S&&ar(f,null),_=r(f,o)||{},S&&(O.nodes_end=v),t&&Z()}),()=>{var l;for(var n of c){a.removeEventListener(n,y);var i=p.get(n);--i===0?(document.removeEventListener(n,y),p.delete(n)):p.set(n,i)}k.delete(d),L.delete(_),f!==e&&((l=f.parentNode)==null||l.removeChild(f))}});return L.set(_,m),_}let L=new WeakMap;function _r(r){const a=L.get(r);a&&a()}export{lr as e,dr as h,ir as m,cr as s,_r as u};