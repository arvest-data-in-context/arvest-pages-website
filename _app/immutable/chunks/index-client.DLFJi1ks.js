import{z as t,y as _,Q as p,R as m,u as v}from"./runtime.DoZVManf.js";function u(e){throw new Error("lifecycle_outside_component")}function h(e){t===null&&u(),t.l!==null?r(t).m.push(e):_(()=>{const n=v(e);if(typeof n=="function")return n})}function y(e,n,{bubbles:o=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:n,bubbles:o,cancelable:a})}function x(){const e=t;return e===null&&u(),(n,o,a)=>{var l;const c=(l=e.s.$$events)==null?void 0:l[n];if(c){const f=p(c)?c.slice():[c],s=y(n,o,a);for(const i of f)i.call(e.x,s);return!s.defaultPrevented}return!0}}function b(e){t===null&&u(),t.l===null&&m(),r(t).a.push(e)}function r(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{b as a,x as c,h as o};
