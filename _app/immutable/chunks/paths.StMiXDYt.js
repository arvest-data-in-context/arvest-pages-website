import{O as c,ag as _}from"./runtime.DND1LVCT.js";const e=[];function d(i,l=c){let n=null;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function p(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:p}}var a;const g=((a=globalThis.__sveltekit_1wp6i6r)==null?void 0:a.base)??"/sveltekit-github-pages";var f;const w=((f=globalThis.__sveltekit_1wp6i6r)==null?void 0:f.assets)??g;export{w as a,g as b,d as w};
