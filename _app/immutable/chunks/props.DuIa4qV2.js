import{S as N,W as Y,X as Z,Y as P,Z as K,Q as b,_ as l,a0 as D,C as c,a1 as L,a2 as $,v as z,U as G,a3 as H,a4 as Q,a5 as V,a6 as W,u as C,a7 as X,a8 as J,a9 as F,aa as k,ab as p,ac as ee,F as U,T as re,ad as ae,ae as te,af as ne}from"./runtime.DKhLse5e.js";import{c as ie}from"./store.qd_lgfPG.js";function S(t,u=null,g){if(typeof t!="object"||t===null||N in t)return t;const m=z(t);if(m!==Y&&m!==Z)return t;var f=new Map,o=G(t),h=P(0);o&&f.set("length",P(t.length));var w;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&K();var a=f.get(e);return a===void 0?(a=P(r.value),f.set(e,a)):b(a,S(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(o&&typeof e=="string"){var a=f.get("length"),n=Number(e);Number.isInteger(n)&&n<a.v&&b(a,n)}b(r,l),j(h)}return!0},get(i,e,r){var d;if(e===N)return t;var a=f.get(e),n=e in i;if(a===void 0&&(!n||(d=D(i,e))!=null&&d.writable)&&(a=P(S(n?i[e]:l,w)),f.set(e,a)),a!==void 0){var s=c(a);return s===l?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=c(a))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==l)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===N)return!0;var r=f.get(e),a=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||L!==null&&(!a||(s=D(i,e))!=null&&s.writable)){r===void 0&&(r=P(a?S(i[e],w):l),f.set(e,r));var n=c(r);if(n===l)return!1}return a},set(i,e,r,a){var R;var n=f.get(e),s=e in i;if(o&&e==="length")for(var d=r;d<n.v;d+=1){var _=f.get(d+"");_!==void 0?b(_,l):d in i&&(_=P(l),f.set(d+"",_))}n===void 0?(!s||(R=D(i,e))!=null&&R.writable)&&(n=P(void 0),b(n,S(r,w)),f.set(e,n)):(s=n.v!==l,b(n,S(r,w)));var I=Reflect.getOwnPropertyDescriptor(i,e);if(I!=null&&I.set&&I.set.call(a,r),!s){if(o&&typeof e=="string"){var T=f.get("length"),y=Number(e);Number.isInteger(y)&&y>=T.v&&b(T,y+1)}j(h)}return!0},ownKeys(i){c(h);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==l});for(var[r,a]of f)a.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){$()}})}function j(t,u=1){b(t,t.v+u)}function q(t){return t!==null&&typeof t=="object"&&N in t?t[N]:t}function ue(t,u){return Object.is(q(t),q(u))}function M(t){for(var u=L,g=L;u!==null&&!(u.f&(X|J));)u=u.parent;try{return F(u),t()}finally{F(g)}}function ve(t,u,g,m){var B;var f=(g&k)!==0,o=(g&p)!==0,h=(g&ee)!==0,w=(g&ae)!==0,i=!1,e;h?[e,i]=ie(()=>t[u]):e=t[u];var r=(B=D(t,u))==null?void 0:B.set,a=m,n=!0,s=!1,d=()=>(s=!0,n&&(n=!1,w?a=C(m):a=m),a);e===void 0&&m!==void 0&&(r&&o&&H(),e=d(),r&&r(e));var _;if(o)_=()=>{var v=t[u];return v===void 0?d():(n=!0,s=!1,v)};else{var I=M(()=>(f?U:re)(()=>t[u]));I.f|=Q,_=()=>{var v=c(I);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(g&V))return _;if(r){var T=t.$$legacy;return function(v,O){return arguments.length>0?((!o||!O||T||i)&&r(O?_():v),v):_()}}var y=!1,R=!1,A=te(e),E=M(()=>U(()=>{var v=_(),O=c(A);return y?(y=!1,R=!0,O):(R=!1,A.v=v)}));return f||(E.equals=W),function(v,O){if(ne&&(y=R,_(),c(A)),arguments.length>0){const x=O?c(E):o&&h?S(v):v;return E.equals(x)||(y=!0,b(A,x),s&&a!==void 0&&(a=x),C(()=>c(E))),v}return c(E)}}export{S as a,ue as i,ve as p};
