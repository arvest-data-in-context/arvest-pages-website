import{A as c,ab as _}from"./runtime.BMnEZS2w.js";const e=[];function d(i,l=c){let n=null;const o=new Set;function r(t){if(_(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function p(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,u)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:p}}var a;const g=((a=globalThis.__sveltekit_1ip9r16)==null?void 0:a.base)??"/sveltekit-github-pages";var f;const k=((f=globalThis.__sveltekit_1ip9r16)==null?void 0:f.assets)??g;export{k as a,g as b,d as w};
