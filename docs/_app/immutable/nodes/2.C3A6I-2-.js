import{l as ce,h as R,n as ee,i as te,g as G,p as pe,o as xe,q as ge,r as me,a as C,t as E,v as ae,d as v,e as i,w as D,s as be,b as M,x as _e,$ as we}from"../chunks/disclose-version.ClOYDJtN.js";import{D as ye,a2 as ve,B as Le,W as Se,X as ke,H as Ce,Y as de,K as ue,Z as Ee,a3 as Ae,t as K,u as Te,a4 as z,b as re,a5 as X,a6 as U,m as Re,R as se,a7 as Ne,a8 as Ie,a9 as We,aa as $e,N as Me,S as ze,ab as De,ac as He,ad as je,ae as Be,I as Pe,V as ie,af as Ve,ag as Fe,w as I,ah as Ge}from"../chunks/runtime.DLyPwRNX.js";import{r as H}from"../chunks/props.CiDQK0a4.js";let O=null;function Oe(e,t){return t}function Ue(e,t,a){for(var r=[],s=e.length,u=0;u<s;u++)Ne(e[u].e,r,!0);if(s>0&&r.length===0&&t!==null){var o=t.parentNode;xe(o),o.append(t)}Ie(r,()=>{for(var m=0;m<s;m++)We(e[m].e);a!==void 0&&a()})}function Ke(e,t,a,r,s,u=null){var o={flags:t,items:new Map,next:null},m=(t&ve)!==0;if(m){var b=e;e=R?ee(b.firstChild):b.appendChild(ce())}var g=null;ye(()=>{var w=a(),c=Le(w)?w:w==null?[]:Array.from(w),d=c.length,l=o.flags;l&U&&!Me(c)&&!(ze in c)&&(l^=U,l&De&&!(l&z)&&(l^=z));let h=!1;if(R){var f=e.data===Se;f!==(d===0)&&(ke(te),G(!1),h=!0)}if(R){for(var x=te[0],y=o,L,n=0;n<d;n++){if(x.nodeType!==8||x.data!==Ce){h=!0,G(!1);break}var p=x;x=ee(x);var S=c[n],k=r(S,n);L=fe(p,x,y,null,S,k,n,s,l),o.items.set(k,L),x=x.nextSibling,y=L}if(d>0)for(;x!==e;){var W=x.nextSibling;x.remove(),x=W}}R||Xe(c,o,e,s,l,r),u!==null&&(d===0?g?de(g):g=ue(()=>u(e)):g!==null&&Ee(g,()=>{g=null})),h&&G(!0)})}function Xe(e,t,a,r,s,u){var Y,q,Q,Z;var o=(s&$e)!==0,m=(s&(z|X))!==0,b=e.length,g=t.items,w=t.next,c=w,d=new Set,l=t,h=new Set,f=[],x=[],y,L,n,p;if(o)for(p=0;p<b;p+=1)y=e[p],L=u(y,p),n=g.get(L),n!==void 0&&((Y=n.a)==null||Y.measure(),h.add(n));for(p=0;p<b;p+=1){if(y=e[p],L=u(y,p),n=g.get(L),n===void 0){var S=pe(ce()),k=c?c.o:a;k.before(S),l=fe(S,k,l,l.next,y,L,p,r,s),g.set(L,l),f=[],x=[],c=l.next;continue}if(m&&Je(n,y,p,s),n.e.f&Ae&&(de(n.e),o&&((q=n.a)==null||q.unfix(),h.delete(n))),n!==c){if(d.has(n)){if(f.length<x.length){var W=x[0],A;l=W.prev;var J=f[0],V=f[f.length-1];for(A=0;A<f.length;A+=1)le(f[A],W,a);for(A=0;A<x.length;A+=1)d.delete(x[A]);N(J.prev,V.next),N(l,J),N(V,W),c=W,l=V,p-=1,f=[],x=[]}else d.delete(n),le(n,c,a),N(n.prev,n.next),N(n,l.next),N(l,n),l=n;continue}for(f=[],x=[];c!==null&&c.k!==L;)d.add(c),x.push(c),c=c.next;if(c===null)continue;n=c}f.push(n),l=n,c=n.next}const T=Array.from(d);for(;c;)T.push(c),c=c.next;var he=s&ve&&b===0?a:null;if(o){for(p=0;p<T.length;p+=1)(Q=T[p].a)==null||Q.measure();for(p=0;p<T.length;p+=1)(Z=T[p].a)==null||Z.fix()}Ue(T,he,()=>{for(var $=0;$<T.length;$+=1){var F=T[$];g.delete(F.k),N(F.prev,F.next)}}),o&&K(()=>{Te(()=>{var $;for(n of h)($=n.a)==null||$.apply()})})}function Je(e,t,a,r){r&z&&re(e.v,t),r&X?re(e.i,a):e.i=a}function fe(e,t,a,r,s,u,o,m,b){var g=O;try{var w=(b&z)!==0,c=(b&U)===0,d=w?c?Re(s):se(s):s,l=b&X?se(o):o,h={i:l,v:d,k:u,a:null,e:null,o:e,prev:a,next:r};return a.next=h,r!==null&&(r.prev=h),O=h,h.e=ue(()=>m(t,d,l)),h}finally{O=g}}function le(e,t,a){for(var r=e.next?e.next.o:a,s=t?t.o:a,u=e.o;u!==r;){var o=u.nextSibling;s.before(u),u=o}}function N(e,t){e.next=t,t!==null&&(t.prev=e)}function Ye(e,t){if(t){const a=document.body;e.autofocus=!0,K(()=>{document.activeElement===a&&e.focus()})}}function _(e,t,a){a=a==null?null:a+"";var r=e.__attributes??(e.__attributes={});R&&(r[t]=e.getAttribute(t),t==="src"||t==="href"||t==="srcset")||r[t]!==(r[t]=a)&&(a===null?e.removeAttribute(t):e.setAttribute(t,a))}function j(e,t,a,r,s){var u=s.length!==0;for(var o in t)o in a||(a[o]=null);u&&!a.class&&(a.class="");var m=He(oe,e.nodeName);m||je(oe,e.nodeName,m=Qe(e));var b=e.__attributes??(e.__attributes={}),g=[];for(o in a){let l=a[o];if(l!==(t==null?void 0:t[o])){var w=o[0]+o[1];if(w!=="$$")if(w==="on"){const h={};let f=o.slice(2);var c=Ve.includes(f);f.endsWith("capture")&&f!=="ongotpointercapture"&&f!=="onlostpointercapture"&&(f=f.slice(0,-7),h.capture=!0),!c&&(t!=null&&t[o])&&e.removeEventListener(f,t[o],h),l!=null&&(c?(e[`__${f}`]=l,ge([f])):t?e.addEventListener(f,l,h):g.push([o,l,()=>e.addEventListener(f,l,h)]))}else if(l==null)b[o]=null,e.removeAttribute(o);else if(o==="style")e.style.cssText=l+"";else if(o==="autofocus")Ye(e,!!l);else if(o==="__value"||o==="value")e.value=e[o]=e.__value=l;else{var d=o;r&&(d=d.toLowerCase(),d=Be[d]||d),m.includes(d)?R&&(d==="src"||d==="href"||d==="srcset")||(e[d]=l):typeof l!="function"&&(u&&d==="class"&&(l&&(l+=" "),l+=s),_(e,d,l))}}}if(!t){const l=Pe(()=>{K(()=>{if(e.isConnected){for(const[h,f,x]of g)a[h]===f&&x();l()}})})}return a}var qe=["width","height"],oe=new Map;function Qe(e){for(var t=[],a,r=ie(e);r.constructor.name!=="Element";){a=Fe(r);for(var s in a)a[s].set&&!qe.includes(s)&&t.push(s);r=ie(r)}return t}function Ze(e,t){var a=e.__className,r=et(t);R&&e.className===r?e.__className=r:(a!==r||R&&e.className!==r)&&(t==null?e.removeAttribute("class"):me(e,r),e.__className=r)}function et(e){return e??""}function ne(e,t,a,r){const s=e.style,u=s.getPropertyValue(t);a==null?u!==""&&s.removeProperty(t):u!==a&&s.setProperty(t,a,r?"important":"")}const tt=""+new URL("../assets/profile-pic-tree-purple-hat-cropped-square.FOe7TRNF.png",import.meta.url).href;var at=E('<div class="bg-transparent py-5 sm:py-12 max-w-5xl mx-auto rounded-xl flex flex-col sm:flex-row px-5"><svg class="max-sm:rounded-t-xl sm:rounded-l-3xl sm:max-w-72 lg:max-w-96"><defs><pattern id="profile-photo" width="1" height="1"><image x="0" y="0"></image></pattern><mask id="mask" x="0" y="0"><rect x="0" y="0" fill="#fff"></rect><circle></circle></mask></defs><circle fill="#000" fill-opacity="0.6"></circle><circle id="profile-picture-circle" fill="url(#profile-photo)"></circle><rect x="0" y="0" mask="url(#mask)" fill="#fff"></rect></svg> <div class="bg-white max-sm:rounded-b-xl sm:rounded-r-3xl border-solid border-white border-2 flex flex-col justify-center max-sm:px-8 pr-8 pb-8 grow"><h1 class="text-black text-3xl md:text-4xl lg:text-5xl pb-2">Stephen Guo</h1> <p class="text-black text-base md:text-lg lg:text-xl">University of Toronto 2019 - 2024</p> <p class="text-black text-base md:text-lg lg:text-xl">Computer Science - Software Engineering stream</p></div></div>');function rt(e){const s=`drop-shadow(${.5}px ${.5}px 0 white)
drop-shadow(-${.5}px ${.5}px 0 white)
drop-shadow(${.5}px -${.5}px 0 white)
drop-shadow(-${.5}px -${.5}px 0 white)`;var u=at(),o=v(u);_(o,"viewBox",`0 0 ${ae(50)} ${ae(50)}`);var m=v(o),b=v(m),g=v(b);_(g,"href",tt),_(g,"width",20*2),_(g,"height",20*2);var w=i(b);_(w,"width",50),_(w,"height",50);var c=v(w);_(c,"width",50),_(c,"height",50);var d=i(c);_(d,"cx",50/2),_(d,"cy",50/2),_(d,"r",20);var l=i(m);_(l,"cx",50/2),_(l,"cy",50/2),_(l,"r",20);var h=i(l);_(h,"cx",50/2),_(h,"cy",50/2),_(h,"r",20),ne(h,"-webkit-filter",s),ne(h,"-filter",s);var f=i(h);_(f,"width",50),_(f,"height",50),C(e,u)}var st=D('<svg><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>');function P(e,t){const a=H(t,[]);var r=st();let s;I(()=>s=j(r,s,{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...a},!1,"")),C(e,r)}var it=D('<svg><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>');function lt(e,t){const a=H(t,[]);var r=it();let s;I(()=>s=j(r,s,{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...a},!1,"")),C(e,r)}var ot=D('<svg><path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path></svg>');function nt(e,t){const a=H(t,[]);var r=ot();let s;I(()=>s=j(r,s,{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...a},!1,"")),C(e,r)}var ct=D('<svg><path fill="currentColor" d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></path></svg>');function vt(e,t){const a=H(t,[]);var r=ct();let s;I(()=>s=j(r,s,{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...a},!1,"")),C(e,r)}var dt=E('<footer class="flex flex-col items-center py-6 bg-gray-600"><h2 class="text-white text-4xl pb-2 text-center">Contact me!</h2> <div class="flex flex-row max-w-full flex-wrap justify-center mx-2"><a class="text-lg flex items-center px-3 text-white hover:text-blue-300" href="https://github.com/Epicsteve2" target="_blank"><!> GitHub</a> <a class="text-lg flex items-center px-3 text-white hover:text-blue-300" href="https://www.linkedin.com/in/stephen-guo-399959192/" target="_blank"><!> LinkedIn</a> <a class="text-lg flex items-center px-3 text-white hover:text-blue-300" href="mailto:stephenguo14@gmail.com" target="_blank"><!> Email</a> <a class="text-lg flex items-center px-3 text-white hover:text-blue-300" href="https://github.com/Epicsteve2/LaTeX-Files/raw/main/pdf/StephenGuo_Resume.pdf" target="_blank"><!> Resume</a></div></footer>');function ut(e){var t=dt(),a=v(t),r=i(i(a,!0)),s=v(r),u=v(s);P(u,{class:"pr-1"});var o=i(i(s,!0)),m=v(o);lt(m,{class:"pr-1"});var b=i(i(o,!0)),g=v(b);nt(g,{class:"pr-1"});var w=i(i(b,!0)),c=v(w);vt(c,{class:"pr-1"}),C(e,t)}const ft=""+new URL("../assets/profile-picture-mont-royal.DRiX1eCx.jpg",import.meta.url).href;var ht=E(`<div class="bg-white m-3 md:m-6 p-4 md:p-3 rounded-3xl"><div class="max-w-5xl mx-auto lg:flex p-3"><div class="lg:mr-5 max-lg:mb-3"><h1 class="text-3xl">About Me</h1> <p class="pb-4">I received a degree in Computer Science at the University of Toronto, and I have a previous
				1-year co-op at BlueCat Networks as a software engineer.</p> <p>I'm currently learning about:</p> <ul class="list-disc list-inside indent-2 pb-2"><li>Rust</li> <li>Neovim (I use <a href="https://www.lazyvim.org/" class="text-blue-600 hover:text-blue-800" target="_blank">LazyVim</a>)</li> <li>Linux (I use Fedora and OpenSUSE right now, but I want to try NixOS at some point)</li> <li>Front end technologies such as SvelteKit (Which this site is built in!), Vue.js, and
					Tailwind CSS</li></ul> <p class="py-2">Outside of work, I enjoy playing Chess, rock climbing (sometimes!), biking, board games,
				badminton, basketball, and going to the gym.</p></div> <div class="w-full md:w-1/2 flex justify-center mx-auto"><img alt="Stephen Guo at Mont Royal" class="object-cover lg:w-full lg:h-auto"></div></div></div>`);function pt(e){var t=ht(),a=v(t),r=v(a),s=v(r),u=i(i(s,!0)),o=i(i(u,!0));Ze(o,"");var m=i(i(r,!0)),b=v(m);_(b,"src",ft),C(e,t)}var xt=E('<li class="mr-2 mb-2 bg-indigo-200 px-2 py-1 rounded-lg"> </li>'),gt=E('<div class="lg:flex lg:mx-auto p-5 border-black border-2 max-w-screen-xl mb-8"><div class="md:basis-1/4 flex justify-center"><img alt="BlueCat Networks Logo" class="object-cover lg:w-full lg:h-auto md:pr-5 sm:max-lg:w-1/2 max-sm:pb-3"></div> <div class="lg:basis-3/4 flex flex-col"><div class="flex justify-between"><h1 class="text-2xl"> </h1> <h2 class="text-2xl"> </h2></div> <div class="flex justify-between"><h2> </h2> <h2> </h2></div> <ul class="flex flex-wrap mt-1"></ul> <!></div></div>');function B(e,t){var a=gt(),r=v(a),s=v(r),u=i(i(r,!0)),o=v(u),m=v(o),b=v(m),g=i(i(m,!0)),w=v(g),c=i(i(o,!0)),d=v(c),l=v(d),h=i(i(d,!0)),f=v(h),x=i(i(c,!0));Ke(x,9,()=>t.tags,Oe,(L,n,p)=>{var S=xt(),k=v(S);I(()=>M(k,Ge(n))),C(L,S)});var y=i(i(x,!0));be(y,t.children,{},null),I(()=>{_(s,"src",t.image),M(b,t.companyName),M(w,t.location),M(l,t.jobTitle),M(f,t.dateRange)}),C(e,a)}const mt=""+new URL("../assets/bluecat-networks-logo.DJSX4yNz.png",import.meta.url).href,bt=""+new URL("../assets/rust-recipe-gallery.BczHXvVx.jpg",import.meta.url).href,_t=""+new URL("../assets/shoplazy.A_-d4HeZ.jpg",import.meta.url).href,wt=""+new URL("../assets/alkitab.D463BqRc.png",import.meta.url).href;var yt=D('<svg><path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19c.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266c.035.634.618.824 1.214 1.017c.577.188 1.168.38 1.286.983c.082.417-.075.988-.22 1.52c-.215.782-.406 1.48.22 1.48c1.5-.5 3.798-3.186 4-5c.138-1.243-2-2-3.5-2.5c-.478-.16-.755.081-.99.284c-.172.15-.322.279-.51.216c-.445-.148-2.5-2-1.5-2.5c.78-.39.952-.171 1.227.182c.078.099.163.208.273.318c.609.304.662-.132.723-.633c.039-.322.081-.671.277-.867c.434-.434 1.265-.791 2.028-1.12c.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path></svg>');function Lt(e,t){const a=H(t,[]);var r=yt();let s;I(()=>s=j(r,s,{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...a},!1,"")),C(e,r)}var St=E(`<div class="flex flex-col justify-between grow"><p>I worked with a team of 7 software engineers in a Kanban DevOps environment. I
									first started working on a monolithic Java codebase for the first 3 months, which
									was deployed using a Jenkins pipeline. For the rest of my co-op, I started to work
									on a microservice-oriented data platform with a Python codebase using Trino SQL
									and Apache Airflow, which was deployed using AWS, Kubernetes, and Terraform.</p> <a class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2" href="https://bluecatnetworks.com/" target="_blank"><!> Link to website</a></div>`),kt=E(`<div class="flex flex-col justify-between grow"><p>Created a full-stack recipe sharing platform fully in Rust, with Leptos and
									Tailwind CSS as the frontend, and Auxm and Diesel as the backend.</p> <a class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2" href="https://github.com/Epicsteve2/rust-recipe-gallery" target="_blank"><!> Link to git repository</a></div>`),Ct=E(`<div class="flex flex-col justify-between grow"><p>During the <a href="https://2021.hackthenorth.com/" class="text-blue-600 hover:text-blue-800" target="_blank">Hack the North 2021</a> hackathon, I teamed up with a group of 4 to create a mobile grocery ordering and
									delivery application using Flutter and Firebase.</p> <a class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2" href="https://github.com/Epicsteve2/ShopLazy" target="_blank"><!> Link to git repository</a></div>`),Et=E(`<div class="flex flex-col justify-between grow"><p>Created an e-book sharing platform in a team of two, deployed using Pulumi on
									Kubernetes with the Linode cloud provider. The app uses sockets for real-time
									highlighting of books between multiple users</p> <a class="text-lg flex items-center text-blue-600 hover:text-blue-800 mt-2" href="https://github.com/Epicsteve2/cscc09-alkitab" target="_blank"><!> Link to git repository</a></div>`),At=E('<div class="flex flex-col h-screen"><div class="mb-auto"><main><!> <!> <div class="bg-white flex flex-col justify-center w-full"><div class="md:mx-16 max-md:mx-3 md:my-10 max-md:my-3"><div class="mx-auto max-w-screen-xl flex flex-col"><h1 class="text-4xl">Experience</h1> <hr class="md:mb-5 mb-3 bg-black h-0.5"></div> <div class="mb-5"><!></div> <div class="mx-auto max-w-screen-xl flex flex-col"><h1 class="text-4xl">Projects</h1> <hr class="md:mb-5 mb-3 bg-black h-0.5"></div> <div class="mb-5"><!> <!> <!></div></div></div></main></div> <!></div>');function It(e){var t=At();_e(y=>{we.title="Stephen Guo"});var a=v(t),r=v(a),s=v(r);rt(s);var u=i(i(s,!0));pt(u);var o=i(i(u,!0)),m=v(o),b=v(m),g=i(i(b,!0)),w=v(g);B(w,{companyName:"BlueCat Networks",tags:["Kubernetes","AWS","GitLab CI","Python","Java","Terraform","SQL","Docker","Helm","Jenkins","Prometheus"],dateRange:"May 2021 - April 2022",location:"Toronto, ON",jobTitle:"Software Engineer Co-op",image:mt,children:(y,L)=>{var n=St(),p=v(n),S=i(i(p,!0)),k=v(S);Lt(k,{class:"pr-1"}),C(y,n)}});var c=i(i(g,!0)),d=i(i(c,!0)),l=v(d);B(l,{companyName:"Rust Recipe Gallery",tags:["Rust","PostgreSQL","Tailwind CSS"],dateRange:"",location:"",jobTitle:"",image:bt,children:(y,L)=>{var n=kt(),p=v(n),S=i(i(p,!0)),k=v(S);P(k,{class:"pr-1"}),C(y,n)}});var h=i(i(l,!0));B(h,{companyName:"ShopLazy",tags:["Flutter","Dart","Firebase"],dateRange:"",location:"",jobTitle:"",image:_t,children:(y,L)=>{var n=Ct(),p=v(n),S=i(i(p,!0)),k=v(S);P(k,{class:"pr-1"}),C(y,n)}});var f=i(i(h,!0));B(f,{companyName:"Alkitab",tags:["Svelte","Bootstrap","TypeScript","MongoDB","Docker","Kubernetes","Helm","Pulumi","NGINX","Sockets"],dateRange:"",location:"",jobTitle:"",image:wt,children:(y,L)=>{var n=Et(),p=v(n),S=i(i(p,!0)),k=v(S);P(k,{class:"pr-1"}),C(y,n)}});var x=i(i(a,!0));ut(x),C(e,t)}export{It as component};
