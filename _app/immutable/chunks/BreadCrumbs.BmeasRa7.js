import{a as D,t as y}from"./disclose-version.C9obmkXr.js";import{G as sa,d as fa,h as I,n as B,i as ia,Q as ta,ag as j,H as ua,m as z,o as L,k,ah as N,l as aa,g as ea,j as va,a0 as F,ai as J,aj as Y,ak as oa,ad as ca,Y as W,al as V,am as da,an as _a,ao as ha,P as pa,M as ma,ap as Ea,aq as xa,q as ba,ar as ra,as as ga,K as Aa,p as Ta,a as Ia,c as O,f as Ca,r as H,s as ka,t as wa,C as Z}from"./runtime.DrDQIgKu.js";import{a as Ha}from"./store.CAG5UntK.js";import{i as Na}from"./if.tvZ_4f3G.js";import{s as Ma}from"./attributes.BGHofVjz.js";import{i as Ra}from"./lifecycle.Cml-U_xG.js";import{p as Sa}from"./props.37kA2sct.js";let q=null;function Da(s,a){return a}function Ba(s,a,r,i){for(var u=[],o=a.length,t=0;t<o;t++)da(a[t].e,u,!0);var d=o>0&&u.length===0&&r!==null;if(d){var m=r.parentNode;_a(m),m.append(r),i.clear(),T(s,a[0].prev,a[o-1].next)}ha(u,()=>{for(var _=0;_<o;_++){var v=a[_];d||(i.delete(v.k),T(s,v.prev,v.next)),pa(v.e,!d)}})}function La(s,a,r,i,u,o=null){var t=s,d={flags:a,items:new Map,first:null},m=(a&ra)!==0;if(m){var _=s;t=I?B(ma(_)):_.appendChild(sa())}I&&ia();var v=null,x=!1;fa(()=>{var n=r(),c=ta(n)?n:n==null?[]:j(n),e=c.length;if(x&&e===0)return;x=e===0;let b=!1;if(I){var h=t.data===ua;h!==(e===0)&&(t=z(),B(t),L(!1),b=!0)}if(I){for(var E=null,g,p=0;p<e;p++){if(k.nodeType===8&&k.data===Ea){t=k,b=!0,L(!1);break}var l=c[p],f=i(l,p);g=na(k,d,E,null,l,f,p,u,a),d.items.set(f,g),E=g}e>0&&B(z())}if(!I){var M=xa;Oa(c,d,t,u,a,(M.f&N)!==0,i)}o!==null&&(e===0?v?aa(v):v=ea(()=>o(t)):v!==null&&va(v,()=>{v=null})),b&&L(!0),r()}),I&&(t=k)}function Oa(s,a,r,i,u,o,t){var K,P,Q,U;var d=(u&ga)!==0,m=(u&(Y|V))!==0,_=s.length,v=a.items,x=a.first,n=x,c,e=null,b,h=[],E=[],g,p,l,f;if(d)for(f=0;f<_;f+=1)g=s[f],p=t(g,f),l=v.get(p),l!==void 0&&((K=l.a)==null||K.measure(),(b??(b=new Set)).add(l));for(f=0;f<_;f+=1){if(g=s[f],p=t(g,f),l=v.get(p),l===void 0){var M=n?n.e.nodes_start:r;e=na(M,a,e,e===null?a.first:e.next,g,p,f,i,u),v.set(p,e),h=[],E=[],n=e.next;continue}if(m&&qa(l,g,f,u),l.e.f&N&&(aa(l.e),d&&((P=l.a)==null||P.unfix(),(b??(b=new Set)).delete(l))),l!==n){if(c!==void 0&&c.has(l)){if(h.length<E.length){var w=E[0],A;e=w.prev;var G=h[0],R=h[h.length-1];for(A=0;A<h.length;A+=1)$(h[A],w,r);for(A=0;A<E.length;A+=1)c.delete(E[A]);T(a,G.prev,R.next),T(a,e,G),T(a,R,w),n=w,e=R,f-=1,h=[],E=[]}else c.delete(l),$(l,n,r),T(a,l.prev,l.next),T(a,l,e===null?a.first:e.next),T(a,e,l),e=l;continue}for(h=[],E=[];n!==null&&n.k!==p;)(o||!(n.e.f&N))&&(c??(c=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;l=n}h.push(l),e=l,n=l.next}if(n!==null||c!==void 0){for(var C=c===void 0?[]:j(c);n!==null;)(o||!(n.e.f&N))&&C.push(n),n=n.next;var S=C.length;if(S>0){var la=u&ra&&_===0?r:null;if(d){for(f=0;f<S;f+=1)(Q=C[f].a)==null||Q.measure();for(f=0;f<S;f+=1)(U=C[f].a)==null||U.fix()}Ba(a,C,la,v)}}d&&ba(()=>{var X;if(b!==void 0)for(l of b)(X=l.a)==null||X.apply()}),F.first=a.first&&a.first.e,F.last=e&&e.e}function qa(s,a,r,i){i&Y&&J(s.v,a),i&V?J(s.i,r):s.i=r}function na(s,a,r,i,u,o,t,d,m){var _=q;try{var v=(m&Y)!==0,x=(m&oa)===0,n=v?x?ca(u):W(u):u,c=m&V?W(t):t,e={i:c,v:n,k:o,a:null,e:null,prev:r,next:i};return q=e,e.e=ea(()=>d(s,n,c),I),e.e.prev=r&&r.e,e.e.next=i&&i.e,r===null?a.first=e:(r.next=e,r.e.next=e.e),i!==null&&(i.prev=e,i.e.prev=e.e),e}finally{q=_}}function $(s,a,r){for(var i=s.next?s.next.e.nodes_start:r,u=a?a.e.nodes_start:r,o=s.e.nodes_start;o!==i;){var t=Aa(o);u.before(o),o=t}}function T(s,a,r){a===null?s.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}var ya=y('<li class="svelte-co21oh">&gt;</li>'),Ya=y('<li class="svelte-co21oh"><a class="svelte-co21oh"> </a></li> <!>',1),Va=y('<nav aria-label="Breadcrumb" class="svelte-co21oh"><ul class="svelte-co21oh"></ul></nav>');function Fa(s,a){Ta(a,!1);let r=Sa(a,"breadcrumbs",24,()=>[]);Ra();var i=Va(),u=O(i);La(u,5,r,Da,(o,t,d)=>{let m=()=>Z(t).text,_=()=>Z(t).href;var v=Ya(),x=Ca(v),n=O(x),c=O(n,!0);H(n),H(x);var e=ka(x,2);Na(e,()=>d<r().length-1,b=>{var h=ya();D(b,h)}),wa(()=>{Ma(n,"href",_()),Ha(c,m())}),D(o,v)}),H(u),H(i),D(s,i),Ia()}export{Fa as B,La as e,Da as i};
