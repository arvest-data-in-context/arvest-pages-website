import{a as l,t as f}from"../chunks/disclose-version.Bj87LTG-.js";import{j as c,a1 as u,v as m,w as d,y as p,x as v,z as _,A as h,B as y}from"../chunks/runtime.Dv5z5kNC.js";import{a as b}from"../chunks/store.CdLhdrN2.js";import{i as g}from"../chunks/lifecycle.sUG1rA61.js";import{p as x}from"../chunks/props.6z0r1rdX.js";function j(o,t,r,e,n){var i;c&&u();var a=(i=t.$$slots)==null?void 0:i[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(o,s?()=>e:e)}const z={title:"Hello this is my title"},B={title:"Bonjour voici mon titre"},O={en:z,fr:B},P=!0;async function S({params:o}){const{lang:t}=o,r=t,e=O[t].title;return{this_slug:r,vocab:e}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:S,prerender:P},Symbol.toStringTag,{value:"Module"}));var k=f("<h1> </h1> <!>",1);function q(o,t){m(t,!1);let r=x(t,"data",8);g();var e=k(),n=d(e),a=_(n,!0);h(n);var s=y(n,2);j(s,t,"default",{}),p(()=>b(a,r().vocab)),l(o,e),v()}export{q as component,V as universal};