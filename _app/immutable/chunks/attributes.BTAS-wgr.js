import{A as p,h as g,L as d,B as n}from"./runtime.CLk9xquY.js";function h(r,s,o,i){var f=r.__attributes??(r.__attributes={});g&&(f[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||f[s]!==(f[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[d]=o),o==null?r.removeAttribute(s):typeof o!="string"&&t(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var c=new Map;function t(r){var s=c.get(r.nodeName);if(s)return s;c.set(r.nodeName,s=[]);for(var o,i=p(r),f=Element.prototype;f!==i;){o=n(i);for(var _ in o)o[_].set&&s.push(_);i=p(i)}return s}export{h as s};
