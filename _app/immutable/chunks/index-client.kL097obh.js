import{d as t,b as _,X as p,ab as m,e as v}from"./runtime.CA1fLMSP.js";function l(e){throw new Error("lifecycle_outside_component")}function b(e){t===null&&l(),t.l!==null?r(t).m.push(e):_(()=>{const n=v(e);if(typeof n=="function")return n})}function d(e,n,{bubbles:o=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:n,bubbles:o,cancelable:a})}function h(){const e=t;return e===null&&l(),(n,o,a)=>{var s;const c=(s=e.s.$$events)==null?void 0:s[n];if(c){const f=p(c)?c.slice():[c],u=d(n,o,a);for(const i of f)i.call(e.x,u);return!u.defaultPrevented}return!0}}function x(e){t===null&&l(),t.l===null&&m(),r(t).a.push(e)}function r(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{x as a,h as c,b as o};