import{m,h as P,i as h,j as I,k as S,l as R,s as b,g as p,n as g,o as x,q as E}from"./runtime.CTqTOoKw.js";import{P as w,d as A,e as L,f as O}from"./disclose-version.CAEEpieW.js";function T(e,r,i){const s=[];for(const n of e){const u=n.r,f=n.e;r==="in"?(u==="in"||u==="both"?n.in():n.c(),n.d.inert=!1,m(f,!1)):r==="key"?u==="key"&&(n.p||(n.p=n.i(i)),n.in()):((u==="out"||u==="both")&&(n.p||(n.p=n.i()),s.push(n.o)),n.d.inert=!0,m(f,!0))}if(s.length>0){const n=P(()=>{h(n);const u=I(()=>{h(u),S(s)})})}}const q={get(e,r){if(!e.exclude.includes(r))return e.props[r]},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function B(e,r){return new Proxy({props:e,exclude:r},q)}function K(e,r,i,s){var v;var n=(i&L)!==0,u=(i&O)!==0,f=e[r],o=(v=R(e,r))==null?void 0:v.set;if(f===void 0&&s!==void 0){if(o&&u)throw new Error("ERR_SVELTE_BINDING_FALLBACK");i&w&&(s=s()),f=s,o&&o(f)}var c=()=>{var t=e[r];return t!==void 0&&(s=void 0),t===void 0?s:t};if(!(i&A))return c;if(o)return function(t){return arguments.length===1?(o(t),t):c()};var l=!1,_=E(f),a=x(()=>{var t=c(),d=p(_);return l?(l=!1,d):_.v=t});return n||(a.equals=b),function(t){var d=p(a);return arguments.length>0?(a.equals(t)||(l=!0,g(_,t),p(a)),t):d}}export{K as p,B as r,T as t};