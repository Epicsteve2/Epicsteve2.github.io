import{a0 as F,a1 as T,j as A,i as G,a2 as P,a3 as M,e as C,W,w as z,a4 as J,A as g,a5 as H,a6 as L,a7 as v,_ as S,C as b,X as B,a8 as N,a9 as D,$ as U,aa as X,ab as x,ac as K,ad as Q,ae as Z,af as ee,x as re,D as te,G as ae,J as ne,y as R,u as se,ag as ie,v as ue,d as oe,c as le}from"./runtime.gHe8uHzd.js";import{b as ce}from"./disclose-version.CyV05_rx.js";const Y=new Set,I=new Set;function we(e,r,n,a){function s(t){if(a.capture||w.call(r,t),!t.cancelBubble){var l=M,f=C;T(null),A(null);try{return n.call(this,t)}finally{T(l),A(f)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function Ee(e){for(var r=0;r<e.length;r++)Y.add(e[r]);for(var n of I)n(e)}function w(e){var V;var r=this,n=r.ownerDocument,a=e.type,s=((V=e.composedPath)==null?void 0:V.call(e))||[],t=s[0]||e.target,l=0,f=e.__root;if(f){var _=s.indexOf(f);if(_!==-1&&(r===document||r===window)){e.__root=r;return}var h=s.indexOf(r);if(h===-1)return;_<=h&&(l=_)}if(t=s[l]||e.target,t!==r){F(e,"currentTarget",{configurable:!0,get(){return t||n}});var k=M,c=C;T(null),A(null);try{for(var i,u=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var p=t["__"+a];if(p!==void 0&&!t.disabled)if(G(p)){var[j,...q]=p;j.apply(t,[e,...q])}else p.call(t,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||d===r||d===null)break;t=d}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=r,delete e.currentTarget,T(k),A(c)}}}let o;function de(){o=void 0}function me(e){let r=null,n=g;var a;if(g){for(r=b,o===void 0&&(o=B(document.head));o!==null&&(o.nodeType!==8||o.data!==H);)o=L(o);o===null?v(!1):o=S(L(o))}g||(a=document.head.appendChild(W()));try{z(()=>e(a),J)}finally{n&&(v(!0),o=b,S(r))}}function Te(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ae(e){return fe.includes(e)}const _e={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Se(e){return e=e.toLowerCase(),_e[e]??e}const he=["touchstart","touchmove"];function pe(e){return he.includes(e)}function ke(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function be(e,r){return $(e,r)}function De(e,r){N(),r.intro=r.intro??!1;const n=r.target,a=g,s=b;try{for(var t=B(n);t&&(t.nodeType!==8||t.data!==H);)t=L(t);if(!t)throw D;v(!0),S(t),U();const l=$(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==X)throw x(),D;return v(!1),l}catch(l){if(l===D)return r.recover===!1&&K(),N(),Q(n),v(!1),be(e,r);throw l}finally{v(a),S(s),de()}}const y=new Map;function $(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:l=!0}){N();var f=new Set,_=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!f.has(u)){f.add(u);var d=pe(u);r.addEventListener(u,w,{passive:d});var p=y.get(u);p===void 0?(document.addEventListener(u,w,{passive:d}),y.set(u,1)):y.set(u,p+1)}}};_(Z(Y)),I.add(_);var h=void 0,k=ee(()=>{var c=n??r.appendChild(W());return re(()=>{if(t){te({});var i=ne;i.c=t}s&&(a.$$events=s),g&&ce(c,null),h=e(c,a)||{},g&&(C.nodes_end=b),t&&ae()}),()=>{var d;for(var i of f){r.removeEventListener(i,w);var u=y.get(i);--u===0?(document.removeEventListener(i,w),y.delete(i)):y.set(i,u)}I.delete(_),O.delete(h),c!==n&&((d=c.parentNode)==null||d.removeChild(c))}});return O.set(h,k),h}let O=new WeakMap;function Le(e){const r=O.get(e);r&&r()}function ye(e,r,n){if(e==null)return r(void 0),R;const a=se(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let m=!1;function Ne(e,r,n){const a=n[r]??(n[r]={store:null,source:ue(void 0),unsubscribe:R});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=R;else{var s=!0;a.unsubscribe=ye(e,t=>{s?a.source.v=t:le(a.source,t)}),s=!1}return oe(a.source)}function Re(){const e={};return ie(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ie(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}export{ke as a,Ne as b,Ie as c,we as d,Ee as e,Ae as f,me as g,De as h,Te as i,be as m,Se as n,Re as s,Le as u};