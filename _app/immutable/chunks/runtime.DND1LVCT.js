var Ot=Array.isArray,kt=Array.from,Nt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Jn=Object.getOwnPropertyDescriptors,Ct=Object.prototype,bt=Array.prototype,Wn=Object.getPrototypeOf;const Ft=()=>{};function Pt(n){return n()}function Xn(n){for(var t=0;t<n.length;t++)n[t]()}const w=2,En=4,B=8,rn=16,T=32,J=64,D=128,K=256,p=512,S=1024,F=2048,b=4096,U=8192,Qn=16384,yn=32768,nt=65536,tt=1<<18,wn=1<<19,cn=Symbol("$state"),qt=Symbol("");function Tn(n){return n===this.v}function rt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function An(n){return!rt(n,this.v)}function et(n){throw new Error("effect_in_teardown")}function st(){throw new Error("effect_in_unowned_derived")}function at(n){throw new Error("effect_orphan")}function lt(){throw new Error("effect_update_depth_exceeded")}function Lt(){throw new Error("hydration_failed")}function Mt(n){throw new Error("lifecycle_legacy_only")}function Ht(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function jt(){throw new Error("state_prototype_fixed")}function ot(){throw new Error("state_unsafe_local_read")}function ut(){throw new Error("state_unsafe_mutation")}function en(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Bt(n){return mn(en(n))}function it(n,t=!1){var e;const r=en(n);return t||(r.equals=An),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ut(n,t=!1){return mn(it(n,t))}function mn(n){return u!==null&&u.f&w&&(y===null?mt([n]):y.push(n)),n}function vn(n,t){return gn(n,un(()=>zn(n))),t}function gn(n,t){return u!==null&&on()&&u.f&(w|rn)&&(y===null||!y.includes(n))&&ut(),ft(n,t)}function ft(n,t){return n.equals(t)||(n.v=t,n.version=Un(),Sn(n,S),on()&&o!==null&&o.f&p&&!(o.f&T)&&(_!==null&&_.includes(n)?(E(o,S),W(o)):g===null?gt([n]):g.push(n))),t}function Sn(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&S||!e&&l===o||(E(l,t),i&(p|D)&&(i&w?Sn(l,F):W(l)))}}const Vt=1,Gt=2,Kt=4,$t=8,Zt=16,zt=1,Jt=2,Wt=4,Xt=8,Qt=16,nr=1,tr=2,_t="[",ct="[!",vt="]",In={},rr=Symbol();function xn(n){console.warn("hydration_mismatch")}let x=!1;function er(n){x=n}let d;function H(n){if(n===null)throw xn(),In;return d=n}function sr(){return H(R(d))}function ar(n){if(x){if(R(d)!==null)throw xn(),In;d=n}}function lr(n=1){if(x){for(var t=n,r=d;t--;)r=R(r);d=r}}function or(){for(var n=0,t=d;;){if(t.nodeType===8){var r=t.data;if(r===vt){if(n===0)return t;n-=1}else(r===_t||r===ct)&&(n+=1)}var e=R(t);t.remove(),t=e}}var pn,pt,Dn,Rn;function ur(){if(pn===void 0){pn=window,pt=document;var n=Element.prototype,t=Node.prototype;Dn=_n(t,"firstChild").get,Rn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function Q(n){return Dn.call(n)}function R(n){return Rn.call(n)}function ir(n,t){if(!x)return Q(n);var r=Q(d);if(r===null)r=d.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),H(e),e}return H(r),r}function fr(n,t){if(!x){var r=Q(n);return r instanceof Comment&&r.data===""?R(r):r}return d}function _r(n,t=1,r=!1){let e=x?d:n;for(;t--;)e=R(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),H(a),a}return H(e),e}function cr(n){n.textContent=""}function ht(n){var t=w|S;o===null?t|=D:o.f|=wn;const r={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&w){var e=u;(e.children??(e.children=[])).push(r)}return r}function vr(n){const t=ht(n);return t.equals=An,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&w?sn(e):q(e)}}}function kn(n){var t,r=o;z(n.parent);try{On(n),t=Vn(n)}finally{z(r)}return t}function Nn(n){var t=kn(n),r=(k||n.f&D)&&n.deps!==null?F:p;E(n,r),n.equals(t)||(n.v=t,n.version=Un())}function sn(n){On(n),j(n,0),E(n,U),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){o===null&&u===null&&at(),u!==null&&u.f&D&&st(),ln&&et()}function dt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&J)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{hn(!0),V(l),l.f|=Qn}catch(c){throw q(l),c}finally{hn(i)}}else t!==null&&W(l);var A=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!A&&!s&&e&&(a!==null&&dt(l,a),u!==null&&u.f&w)){var m=u;(m.children??(m.children=[])).push(l)}return l}function pr(n){const t=P(B,null,!1);return E(t,p),t.teardown=n,t}function hr(n){Cn();var t=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:u})}else{var e=bn(n);return e}}function dr(n){return Cn(),an(n)}function Er(n){const t=P(J,n,!0);return()=>{q(t)}}function bn(n){return P(En,n,!1)}function yr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=an(()=>{n(),!e.ran&&(e.ran=!0,gn(r.l.r2,!0),un(t))})}function wr(){var n=f;an(()=>{if(zn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&E(r,F),L(r)&&V(r),t.ran=!1}n.l.r2.v=!1}})}function an(n){return P(B,n,!0)}function Tr(n){return Et(n)}function Et(n,t=0){return P(B|rn|t,n,!0)}function Ar(n,t=!0){return P(B|T,n,!0,t)}function Fn(n){var t=n.teardown;if(t!==null){const r=ln,e=u;dn(!0),Z(null);try{t.call(null)}finally{dn(r),Z(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;q(r,t),r=e}}function yt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&T||q(t),t=r}}function q(n,t=!0){var r=!1;if((t||n.f&tt)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}qn(n,t&&!r),Pn(n),j(n,0),E(n,U);var l=n.transitions;if(l!==null)for(const A of l)A.stop();Fn(n);var i=n.parent;i!==null&&i.first!==null&&Ln(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Ln(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function mr(n,t){var r=[];Mn(n,r,!0),wt(r,()=>{q(n),t&&t()})}function wt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Mn(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&yn)!==0||(e.f&T)!==0;Mn(e,t,a?r:!1),e=s}}}function gr(n){Hn(n,!0)}function Hn(n,t){if(n.f&b){L(n)&&V(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&T)!==0;Hn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let $=!1,nn=[];function Yn(){$=!1;const n=nn.slice();nn=[],Xn(n)}function Sr(n){$||($=!0,queueMicrotask(Yn)),nn.push(n)}function Tt(){$&&Yn()}const jn=0,At=1;let G=jn,Y=!1,N=!1,ln=!1;function hn(n){N=n}function dn(n){ln=n}let I=[],C=0;let u=null;function Z(n){u=n}let o=null;function z(n){o=n}let y=null;function mt(n){y=n}let _=null,h=0,g=null;function gt(n){g=n}let Bn=0,k=!1,M=!1,O=new Set,f=null;function Un(){return++Bn}function on(){return f!==null&&f.l===null}function L(n){var l,i;var t=n.f;if(t&S)return!0;if(t&F){var r=n.deps,e=(t&D)!==0;if(r!==null){var s;if(t&K){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=K}for(s=0;s<r.length;s++){var a=r[s];if(L(a)&&Nn(a),e&&o!==null&&!k&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||E(n,p)}return!1}function St(n,t,r){throw n}function Vn(n){var fn;var t=_,r=h,e=g,s=u,a=k,l=y,i=f,A=n.f;_=null,h=0,g=null,u=A&(T|J)?null:n,k=!N&&(A&D)!==0,y=null,f=n.ctx;try{var m=(0,n.fn)(),c=n.deps;if(_!==null){var v;if(j(n,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else n.deps=c=_;if(!k)for(v=h;v<c.length;v++)((fn=c[v]).reactions??(fn.reactions=[])).push(n)}else c!==null&&h<c.length&&(j(n,h),c.length=h);return m}finally{_=t,h=r,g=e,u=s,k=a,y=l,f=i}}function It(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&w&&(_===null||!_.includes(t))&&(E(t,F),t.f&(D|K)||(t.f^=K),j(t,0))}function j(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)It(n,r[e])}function V(n){var t=n.f;if(!(t&U)){E(n,p);var r=o;o=n;try{t&rn?yt(n):qn(n),Pn(n),Fn(n);var e=Vn(n);n.teardown=typeof e=="function"?e:null,n.version=Bn}catch(s){St(s)}finally{o=r}}}function Gn(){C>1e3&&(C=0,lt()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=N;N=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];$n(s,a),xt(a)}}finally{N=r}}}function xt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(U|b))&&L(e)&&(V(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ln(e):e.fn=null))}}function Dt(){if(Y=!1,C>1001)return;const n=I;I=[],Kn(n),Y||(C=0)}function W(n){G===jn&&(Y||(Y=!0,queueMicrotask(Dt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|T)){if(!(r&p))return;t.f^=p}}I.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&T)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&B){a?r.f^=p:L(r)&&V(r);var i=r.first;if(i!==null){r=i;continue}}else s&En&&e.push(r);var A=r.next;if(A===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var m=v.next;if(m!==null){r=m;continue n}v=v.parent}}r=A}for(var c=0;c<e.length;c++)i=e[c],t.push(i),$n(i,t)}function Zn(n){var t=G,r=I;try{Gn();const s=[];G=At,I=s,Y=!1,Kn(r);var e=n==null?void 0:n();return Tt(),(I.length>0||s.length>0)&&Zn(),C=0,e}finally{G=t,I=r}}async function Ir(){await Promise.resolve(),Zn()}function zn(n){var i;var t=n.f,r=(t&w)!==0;if(r&&t&U){var e=kn(n);return sn(n),e}if(M&&O.add(n),u!==null){y!==null&&y.includes(n)&&ot();var s=u.deps;_===null&&s!==null&&s[h]===n?h++:_===null?_=[n]:_.push(n),g!==null&&o!==null&&o.f&p&&!(o.f&T)&&g.includes(n)&&(E(o,S),W(o))}else if(r&&n.deps===null){var a=n,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=n,L(a)&&Nn(a)),n.v}function xr(n){var t=M,r=O;M=!0,O=new Set;var e=O,s;try{un(n)}finally{if(M=t,M)for(s of O)r.add(s);O=r}for(s of e)if(s.f&nt)for(const a of s.deps||[])a.f&w||vn(a,null);else vn(s,null)}function un(n){const t=u;try{return u=null,n()}finally{u=t}}const Rt=~(S|F|p);function E(n,t){n.f=n.f&Rt|t}function Dr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},t||(f.l={s:null,u:null,r1:[],r2:en(!1)})}function Rr(n){const t=f;if(t!==null){n!==void 0&&(t.x=n);const l=t.e;if(l!==null){var r=o,e=u;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];z(a.effect),Z(a.reaction),bn(a.fn)}}finally{z(r),Z(e)}}f=t.p,t.m=!0}return n||{}}function Or(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)tn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&tn(r)}}}function tn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{tn(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{pt as $,Pt as A,Xn as B,zn as C,Or as D,yn as E,ht as F,X as G,ct as H,tt as I,_t as J,R as K,qt as L,Q as M,lr as N,Ft as O,q as P,gn as Q,Ut as R,cn as S,vr as T,Ot as U,Mt as V,Ct as W,bt as X,en as Y,Yt as Z,rr as _,Rr as a,_n as a0,o as a1,jt as a2,Ht as a3,nt as a4,Wt as a5,An as a6,T as a7,J as a8,z as a9,Ir as aA,Bt as aB,pr as aC,Z as aD,ur as aE,Lt as aF,Er as aG,vn as aH,xr as aI,yr as aJ,wr as aK,zt as aa,Jt as ab,Xt as ac,Qt as ad,it as ae,M as af,rt as ag,Kt as ah,kt as ai,b as aj,Vt as ak,ft as al,Gt as am,Zt as an,Mn as ao,cr as ap,wt as aq,vt as ar,u as as,$t as at,xn as au,In as av,nr as aw,tr as ax,Zn as ay,Nt as az,an as b,ir as c,Et as d,bn as e,fr as f,Ar as g,x as h,sr as i,mr as j,d as k,gr as l,or as m,H as n,er as o,Dr as p,Sr as q,ar as r,_r as s,Tr as t,un as u,Wn as v,Jn as w,dr as x,hr as y,f as z};
