import{S as N,W as Y,X as Z,Y as P,Z as $,Q as b,_ as l,$ as D,C as c,a0 as L,a1 as K,v as z,U as G,a2 as H,a3 as Q,a4 as V,a5 as W,u as C,a6 as X,a7 as J,a8 as F,a9 as k,aa as p,ab as ee,F as U,T as re,ac as te,ad as ae,ae as ne}from"./runtime.BJWdkgwk.js";import{c as ie}from"./store.DdBuXZVG.js";function S(a,u=null,g){if(typeof a!="object"||a===null||N in a)return a;const m=z(a);if(m!==Y&&m!==Z)return a;var f=new Map,o=G(a),h=P(0);o&&f.set("length",P(a.length));var w;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&$();var t=f.get(e);return t===void 0?(t=P(r.value),f.set(e,t)):b(t,S(r.value,w)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,P(l));else{if(o&&typeof e=="string"){var t=f.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&b(t,n)}b(r,l),j(h)}return!0},get(i,e,r){var d;if(e===N)return a;var t=f.get(e),n=e in i;if(t===void 0&&(!n||(d=D(i,e))!=null&&d.writable)&&(t=P(S(n?i[e]:l,w)),f.set(e,t)),t!==void 0){var s=c(t);return s===l?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var t=f.get(e);t&&(r.value=c(t))}else if(r===void 0){var n=f.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==l)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===N)return!0;var r=f.get(e),t=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||L!==null&&(!t||(s=D(i,e))!=null&&s.writable)){r===void 0&&(r=P(t?S(i[e],w):l),f.set(e,r));var n=c(r);if(n===l)return!1}return t},set(i,e,r,t){var R;var n=f.get(e),s=e in i;if(o&&e==="length")for(var d=r;d<n.v;d+=1){var _=f.get(d+"");_!==void 0?b(_,l):d in i&&(_=P(l),f.set(d+"",_))}n===void 0?(!s||(R=D(i,e))!=null&&R.writable)&&(n=P(void 0),b(n,S(r,w)),f.set(e,n)):(s=n.v!==l,b(n,S(r,w)));var I=Reflect.getOwnPropertyDescriptor(i,e);if(I!=null&&I.set&&I.set.call(t,r),!s){if(o&&typeof e=="string"){var T=f.get("length"),y=Number(e);Number.isInteger(y)&&y>=T.v&&b(T,y+1)}j(h)}return!0},ownKeys(i){c(h);var e=Reflect.ownKeys(i).filter(n=>{var s=f.get(n);return s===void 0||s.v!==l});for(var[r,t]of f)t.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function j(a,u=1){b(a,a.v+u)}function q(a){return a!==null&&typeof a=="object"&&N in a?a[N]:a}function ue(a,u){return Object.is(q(a),q(u))}function M(a){for(var u=L,g=L;u!==null&&!(u.f&(X|J));)u=u.parent;try{return F(u),a()}finally{F(g)}}function ve(a,u,g,m){var B;var f=(g&k)!==0,o=(g&p)!==0,h=(g&ee)!==0,w=(g&te)!==0,i=!1,e;h?[e,i]=ie(()=>a[u]):e=a[u];var r=(B=D(a,u))==null?void 0:B.set,t=m,n=!0,s=!1,d=()=>(s=!0,n&&(n=!1,w?t=C(m):t=m),t);e===void 0&&m!==void 0&&(r&&o&&H(),e=d(),r&&r(e));var _;if(o)_=()=>{var v=a[u];return v===void 0?d():(n=!0,s=!1,v)};else{var I=M(()=>(f?U:re)(()=>a[u]));I.f|=Q,_=()=>{var v=c(I);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(g&V))return _;if(r){var T=a.$$legacy;return function(v,O){return arguments.length>0?((!o||!O||T||i)&&r(O?_():v),v):_()}}var y=!1,R=!1,A=ae(e),E=M(()=>U(()=>{var v=_(),O=c(A);return y?(y=!1,R=!0,O):(R=!1,A.v=v)}));return f||(E.equals=W),function(v,O){if(ne&&(y=R,_(),c(A)),arguments.length>0){const x=O?c(E):o&&h?S(v):v;return E.equals(x)||(y=!0,b(A,x),s&&t!==void 0&&(t=x),C(()=>c(E))),v}return c(E)}}export{S as a,ue as i,ve as p};
