import{S as _e,i as de,s as pe,e as T,t as C,c as w,a as D,h as M,d as r,g as S,G as m,j as te,k as F,K as me,m as L,b as x,L as ne,f as Q,M as Y,N as $,n as ee,O as ie,P as ve,w as ge,Q as be,R as ae,T as oe}from"../chunks/index-b8ce0743.js";import{F as Ee,r as ke,C as ye}from"../chunks/detector-55a96cce.js";import"../chunks/preload-helper-8983ef1c.js";function ce(n,e,l){const i=n.slice();return i[13]=e[l],i}function re(n,e,l){const i=n.slice();return i[16]=e[l],i}function Oe(n){let e;return{c(){e=C("\u958B\u59CB")},l(l){e=M(l,"\u958B\u59CB")},m(l,i){S(l,e,i)},d(l){l&&r(e)}}}function Te(n){let e;return{c(){e=C("\u505C\u6B62")},l(l){e=M(l,"\u505C\u6B62")},m(l,i){S(l,e,i)},d(l){l&&r(e)}}}function ue(n){let e,l;return{c(){e=T("option"),l=C("\u30C7\u30D0\u30A4\u30B9\u306A\u3057"),this.h()},l(i){e=w(i,"OPTION",{});var c=D(e);l=M(c,"\u30C7\u30D0\u30A4\u30B9\u306A\u3057"),c.forEach(r),this.h()},h(){e.__value="",e.value=e.__value},m(i,c){S(i,e,c),m(e,l)},p:ee,d(i){i&&r(e)}}}function fe(n){let e,l=n[16].label+"",i,c;return{c(){e=T("option"),i=C(l),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);i=M(o,l),o.forEach(r),this.h()},h(){e.__value=c=n[16].deviceId,e.value=e.__value},m(s,o){S(s,e,o),m(e,i)},p(s,o){o&4&&l!==(l=s[16].label+"")&&te(i,l),o&4&&c!==(c=s[16].deviceId)&&(e.__value=c,e.value=e.__value)},d(s){s&&r(e)}}}function he(n){let e,l=n[13]+"",i,c;return{c(){e=T("option"),i=C(l),this.h()},l(s){e=w(s,"OPTION",{});var o=D(e);i=M(o,l),o.forEach(r),this.h()},h(){e.__value=c=n[13],e.value=e.__value},m(s,o){S(s,e,o),m(e,i)},p(s,o){o&8&&l!==(l=s[13]+"")&&te(i,l),o&8&&c!==(c=s[13])&&(e.__value=c,e.value=e.__value)},d(s){s&&r(e)}}}function we(n){let e,l,i,c,s,o,f,j,_,U,O,X,N,G,q,u,b,E,I,d,k,H,K;function B(t,h){return t[1].status==="running"?Te:Oe}let z=B(n),P=z(n),V=n[2].items,v=[];for(let t=0;t<V.length;t+=1)v[t]=fe(re(n,V,t));let p=null;V.length||(p=ue());let R=n[3].items,g=[];for(let t=0;t<R.length;t+=1)g[t]=he(ce(n,R,t));return{c(){e=F(),l=T("h2"),i=C("\u9854\u8A8D\u8B58 + \u30E2\u30B6\u30A4\u30AF"),c=F(),s=T("div"),o=T("button"),P.c(),j=F(),_=T("select");for(let t=0;t<v.length;t+=1)v[t].c();p&&p.c(),U=F(),O=T("select");for(let t=0;t<g.length;t+=1)g[t].c();X=F(),N=T("span"),G=C("\u9854\u8A8D\u8B58\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8: "),q=C(n[5]),u=C("fps"),b=F(),E=T("div"),I=T("canvas"),d=F(),k=T("video"),this.h()},l(t){me('[data-svelte="svelte-kgcmji"]',document.head).forEach(r),e=L(t),l=w(t,"H2",{});var a=D(l);i=M(a,"\u9854\u8A8D\u8B58 + \u30E2\u30B6\u30A4\u30AF"),a.forEach(r),c=L(t),s=w(t,"DIV",{class:!0});var y=D(s);o=w(y,"BUTTON",{type:!0,class:!0});var le=D(o);P.l(le),le.forEach(r),j=L(y),_=w(y,"SELECT",{});var Z=D(_);for(let A=0;A<v.length;A+=1)v[A].l(Z);p&&p.l(Z),Z.forEach(r),U=L(y),O=w(y,"SELECT",{});var se=D(O);for(let A=0;A<g.length;A+=1)g[A].l(se);se.forEach(r),X=L(y),N=w(y,"SPAN",{});var J=D(N);G=M(J,"\u9854\u8A8D\u8B58\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8: "),q=M(J,n[5]),u=M(J,"fps"),J.forEach(r),y.forEach(r),b=L(t),E=w(t,"DIV",{});var W=D(E);I=w(W,"CANVAS",{}),D(I).forEach(r),d=L(W),k=w(W,"VIDEO",{style:!0}),D(k).forEach(r),W.forEach(r),this.h()},h(){document.title="\u9854\u8A8D\u8B58 + \u30E2\u30B6\u30A4\u30AF",o.disabled=f=!n[0],x(o,"type","button"),x(o,"class","svelte-1gbhd3m"),n[2].selected===void 0&&ne(()=>n[8].call(_)),n[3].selected===void 0&&ne(()=>n[9].call(O)),x(s,"class","ActionBox svelte-1gbhd3m"),k.playsInline=!0,Q(k,"-webkit-transform","scaleX(-1)"),Q(k,"transform","scaleX(-1)"),Q(k,"visibility","hidden"),Q(k,"width","auto"),Q(k,"height","auto")},m(t,h){S(t,e,h),S(t,l,h),m(l,i),S(t,c,h),S(t,s,h),m(s,o),P.m(o,null),m(s,j),m(s,_);for(let a=0;a<v.length;a+=1)v[a].m(_,null);p&&p.m(_,null),Y(_,n[2].selected),m(s,U),m(s,O);for(let a=0;a<g.length;a+=1)g[a].m(O,null);Y(O,n[3].selected),m(s,X),m(s,N),m(N,G),m(N,q),m(N,u),S(t,b,h),S(t,E,h),m(E,I),n[10](I),m(E,d),m(E,k),n[11](k),H||(K=[$(o,"click",n[6]),$(_,"change",n[8]),$(O,"change",n[9])],H=!0)},p(t,[h]){if(z!==(z=B(t))&&(P.d(1),P=z(t),P&&(P.c(),P.m(o,null))),h&1&&f!==(f=!t[0])&&(o.disabled=f),h&4){V=t[2].items;let a;for(a=0;a<V.length;a+=1){const y=re(t,V,a);v[a]?v[a].p(y,h):(v[a]=fe(y),v[a].c(),v[a].m(_,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=V.length,!V.length&&p?p.p(t,h):V.length?p&&(p.d(1),p=null):(p=ue(),p.c(),p.m(_,null))}if(h&4&&Y(_,t[2].selected),h&8){R=t[3].items;let a;for(a=0;a<R.length;a+=1){const y=ce(t,R,a);g[a]?g[a].p(y,h):(g[a]=he(y),g[a].c(),g[a].m(O,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=R.length}h&8&&Y(O,t[3].selected),h&32&&te(q,t[5])},i:ee,o:ee,d(t){t&&r(e),t&&r(l),t&&r(c),t&&r(s),P.d(),ie(v,t),p&&p.d(),ie(g,t),t&&r(b),t&&r(E),n[10](null),n[11](null),H=!1,ve(K)}}}function De(n,e,l){let i,c,s,o=0,f={status:"stopped"},j={items:[],selected:""},_={items:["tfjs","mediapipe"],selected:"tfjs"};ge(async()=>{var E,I;const u=(await navigator.mediaDevices.enumerateDevices()).filter(d=>d.kind==="videoinput"),b=(I=(E=u[0])==null?void 0:E.deviceId)!=null?I:"";l(2,j={items:u,selected:b})}),be(()=>{var u,b,E;(u=f.video)==null||u.pause(),(E=(b=f.video)==null?void 0:b.srcObject)==null||E.getVideoTracks().forEach(I=>{I.stop()}),s==null||s.destroy()});function U(){l(1,f={...f,status:f.status==="running"?"stopped":"running"})}async function O(u,b){var K;l(1,f={...f,status:"stopped"});const{video:d}=f;if(!d)return;if(!u){d.pause(),(K=d.srcObject)==null||K.getVideoTracks().forEach(B=>{B.stop()}),d.srcObject=null,l(0,c=void 0);return}const[k,H]=await Promise.all([navigator.mediaDevices.getUserMedia({audio:!1,video:{width:640,height:480,deviceId:u}}).catch(()=>{alert("\u30AB\u30E1\u30E9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002")}),Ee.init(b),ke()]);!k||(l(0,c=H),d.srcObject=k,d.width=640,d.height=480,l(4,i.width=640,i),l(4,i.height=480,i),d.readyState<2&&await new Promise(B=>{d.onloadeddata=B}),d.play(),s==null||s.destroy(),l(7,s=new ye(d,i,640,480)))}function X(){j.selected=ae(this),l(2,j)}function N(){_.selected=ae(this),l(3,_)}function G(u){oe[u?"unshift":"push"](()=>{i=u,l(4,i)})}function q(u){oe[u?"unshift":"push"](()=>{f.video=u,l(1,f)})}return n.$$.update=()=>{if(n.$$.dirty&12&&j.items.length>0&&O(j.selected,_.selected),n.$$.dirty&131)if(f.status==="running"){if(c){const{stop:u}=c.listen(f.video,b=>{f.status==="running"?s==null||s.updateMosaic(...b):u()},b=>l(5,o=b))}}else s==null||s.clear()},[c,f,j,_,i,o,U,s,X,N,G,q]}class Ne extends _e{constructor(e){super(),de(this,e,De,we,pe,{})}}export{Ne as default};
