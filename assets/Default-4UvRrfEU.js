import{i as le,r as D,u as ie,t as re,a as I,c as ce,o as K,n as Y,g as ue,b as fe,d as Z,w as j,e as M,s as de,f as he,m as F,h as W,_ as Q,j as q,k as V,l as U,p as t,q as o,v,x as B,y as P,z as me,A as w,B as ge,F as ve}from"./index-1jY4TLPo.js";function $(e){return ue()?(fe(e),!0):!1}function N(e){return typeof e=="function"?e():ie(e)}const pe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _e=Object.prototype.toString,ye=e=>_e.call(e)==="[object Object]",ee=()=>{};function be(e,s){function a(...i){return new Promise((l,r)=>{Promise.resolve(e(()=>s.apply(this,i),{fn:s,thisArg:this,args:i})).then(l).catch(r)})}return a}const te=e=>e();function ke(e=te){const s=D(!0);function a(){s.value=!1}function i(){s.value=!0}const l=(...r)=>{s.value&&e(...r)};return{isActive:I(s),pause:a,resume:i,eventFilter:l}}function we(e){return e||Z()}function Ae(...e){if(e.length!==1)return re(...e);const s=e[0];return typeof s=="function"?I(ce(()=>({get:s,set:ee}))):D(s)}function Se(e,s,a={}){const{eventFilter:i=te,...l}=a;return j(e,be(i,s),l)}function Ce(e,s,a={}){const{eventFilter:i,...l}=a,{eventFilter:r,pause:n,resume:f,isActive:c}=ke(i);return{stop:Se(e,s,{...l,eventFilter:r}),pause:n,resume:f,isActive:c}}function se(e,s=!0,a){we()?K(e,a):s?e():Y(e)}function xe(e=!1,s={}){const{truthyValue:a=!0,falsyValue:i=!1}=s,l=le(e),r=D(e);function n(f){if(arguments.length)return r.value=f,r.value;{const c=N(a);return r.value=r.value===c?N(i):c,r.value}}return l?n:[r,n]}function ae(e){var s;const a=N(e);return(s=a==null?void 0:a.$el)!=null?s:a}const z=pe?window:void 0;function G(...e){let s,a,i,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,i,l]=e,s=z):[s,a,i,l]=e,!s)return ee;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const r=[],n=()=>{r.forEach(p=>p()),r.length=0},f=(p,m,S,y)=>(p.addEventListener(m,S,y),()=>p.removeEventListener(m,S,y)),c=j(()=>[ae(s),N(l)],([p,m])=>{if(n(),!p)return;const S=ye(m)?{...m}:m;r.push(...a.flatMap(y=>i.map(b=>f(p,y,b,S))))},{immediate:!0,flush:"post"}),d=()=>{c(),n()};return $(d),d}function Ee(){const e=D(!1);return Z()&&K(()=>{e.value=!0}),e}function Te(e){const s=Ee();return M(()=>(s.value,!!e()))}function Be(e,s={}){const{window:a=z}=s,i=Te(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let l;const r=D(!1),n=d=>{r.value=d.matches},f=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",n):l.removeListener(n))},c=he(()=>{i.value&&(f(),l=a.matchMedia(N(e)),"addEventListener"in l?l.addEventListener("change",n):l.addListener(n),r.value=l.matches)});return $(()=>{c(),f(),l=void 0}),r}const J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R="__vueuse_ssr_handlers__",Pe=Me();function Me(){return R in J||(J[R]=J[R]||{}),J[R]}function oe(e,s){return Pe[e]||s}function Ne(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ze={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},X="vueuse-storage";function De(e,s,a,i={}){var l;const{flush:r="pre",deep:n=!0,listenToStorageChanges:f=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:p,window:m=z,eventFilter:S,onError:y=u=>{console.error(u)},initOnMounted:b}=i,_=(p?de:D)(typeof s=="function"?s():s);if(!a)try{a=oe("getDefaultStorage",()=>{var u;return(u=z)==null?void 0:u.localStorage})()}catch(u){y(u)}if(!a)return _;const A=N(s),O=Ne(A),C=(l=i.serializer)!=null?l:ze[O],{pause:H,resume:g}=Ce(_,()=>x(_.value),{flush:r,deep:n,eventFilter:S});return m&&f&&se(()=>{G(m,"storage",k),G(m,X,T),b&&k()}),b||k(),_;function x(u){try{if(u==null)a.removeItem(e);else{const h=C.write(u),E=a.getItem(e);E!==h&&(a.setItem(e,h),m&&m.dispatchEvent(new CustomEvent(X,{detail:{key:e,oldValue:E,newValue:h,storageArea:a}})))}}catch(h){y(h)}}function L(u){const h=u?u.newValue:a.getItem(e);if(h==null)return c&&A!=null&&a.setItem(e,C.write(A)),A;if(!u&&d){const E=C.read(h);return typeof d=="function"?d(E,A):O==="object"&&!Array.isArray(E)?{...A,...E}:E}else return typeof h!="string"?h:C.read(h)}function T(u){k(u.detail)}function k(u){if(!(u&&u.storageArea!==a)){if(u&&u.key==null){_.value=A;return}if(!(u&&u.key!==e)){H();try{(u==null?void 0:u.newValue)!==C.write(_.value)&&(_.value=L(u))}catch(h){y(h)}finally{u?Y(g):g()}}}}}function ne(e){return Be("(prefers-color-scheme: dark)",e)}function Oe(e={}){const{selector:s="html",attribute:a="class",initialValue:i="auto",window:l=z,storage:r,storageKey:n="vueuse-color-scheme",listenToStorageChanges:f=!0,storageRef:c,emitAuto:d,disableTransition:p=!0}=e,m={auto:"",light:"light",dark:"dark",...e.modes||{}},S=ne({window:l}),y=M(()=>S.value?"dark":"light"),b=c||(n==null?Ae(i):De(n,i,r,{window:l,listenToStorageChanges:f})),_=M(()=>b.value==="auto"?y.value:b.value),A=oe("updateHTMLAttrs",(g,x,L)=>{const T=typeof g=="string"?l==null?void 0:l.document.querySelector(g):ae(g);if(!T)return;let k;if(p){k=l.document.createElement("style");const u="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";k.appendChild(document.createTextNode(u)),l.document.head.appendChild(k)}if(x==="class"){const u=L.split(/\s/g);Object.values(m).flatMap(h=>(h||"").split(/\s/g)).filter(Boolean).forEach(h=>{u.includes(h)?T.classList.add(h):T.classList.remove(h)})}else T.setAttribute(x,L);p&&(l.getComputedStyle(k).opacity,document.head.removeChild(k))});function O(g){var x;A(s,a,(x=m[g])!=null?x:g)}function C(g){e.onChanged?e.onChanged(g,O):O(g)}j(_,C,{flush:"post",immediate:!0}),se(()=>C(_.value));const H=M({get(){return d?b.value:_.value},set(g){b.value=g}});try{return Object.assign(H,{store:b,system:y,state:_})}catch{return H}}function qe(e={}){const{valueDark:s="dark",valueLight:a="",window:i=z}=e,l=Oe({...e,onChanged:(f,c)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,f==="dark",c,f):c(f)},modes:{dark:s,light:a}}),r=M(()=>l.system?l.system.value:ne({window:i}).value?"dark":"light");return M({get(){return l.value==="dark"},set(f){const c=f?"dark":"light";r.value===c?l.value="auto":l.value=c}})}const He="/Vue-Shopiel/assets/mens-banner-PkBBfunw.jpg",Le="/Vue-Shopiel/assets/womens-banner-ErVK3LHc.jpg",Je={setup(){const e=qe();return{toggleDark:xe(e),isDark:e}},data(){return{isActive:!1,isShowed:!1}},computed:{...F(W,["carts"]),...F(W,["favorite"]),...F(W,["products"])},methods:{toggle(){this.isActive=!this.isActive},themeMenue(){this.isShowed=!this.isShowed}}},Re={class:"header-top"},Ve={class:"container"},Fe={class:"header-social-container"},We={href:"#",class:"social-link"},je={href:"#",class:"social-link"},Qe={href:"#",class:"social-link"},Ue={href:"#",class:"social-link"},Ge=t("div",{class:"header-alert-news"},[t("p",null,[t("b",null,"Free Shipping"),P(" This Week Order Over - $55 ")])],-1),Xe={class:"header-top-actions"},Ie=w('<select name="currency"><option value="usd">USD $</option><option value="eur">EUR €</option></select><select name="language"><option value="en-US">English</option><option value="ar">عربي</option></select>',2),Ke={class:"chk-container"},Ye=t("label",{for:"checkbox",class:"checkbox-label"},[t("i",{class:"fas fa-moon"}),t("i",{class:"fas fa-sun"}),t("span",{class:"ball"})],-1),Ze={class:"header-main"},$e={class:"container"},et=t("h2",null,"Shopiel",-1),tt={class:"header-search-container"},st=t("input",{type:"search",name:"search",class:"search-field",placeholder:"Enter your product name..."},null,-1),at={class:"search-btn"},ot={class:"header-user-actions"},nt={class:"action-btn"},lt={class:"count"},it={class:"action-btn"},rt={class:"count"},ct={class:"action-btn"},ut={class:"count"},ft={class:"desktop-navigation-menu"},dt={class:"container"},ht={class:"desktop-menu-category-list"},mt={class:"menu-category"},gt=w('<li class="menu-category"><a href="#" class="menu-title">Categories</a><div class="dropdown-panel"><ul class="dropdown-panel-list"><li class="menu-title"><a href="#">Men&#39;s</a></li><li class="panel-list-item"><a href="#">Formal</a></li><li class="panel-list-item"><a href="#">Casual</a></li><li class="panel-list-item"><a href="#">Sports</a></li><li class="panel-list-item"><a href="#">Jacket</a></li><li class="panel-list-item"><a href="#">Sunglasses</a></li><li class="panel-list-item"><a href="#"><img src="'+He+'" alt="men&#39;s fashion" width="250" height="119"></a></li></ul><ul class="dropdown-panel-list"><li class="menu-title"><a href="#">Women&#39;s</a></li><li class="panel-list-item"><a href="#">Formal</a></li><li class="panel-list-item"><a href="#">Casual</a></li><li class="panel-list-item"><a href="#">Perfume</a></li><li class="panel-list-item"><a href="#">Cosmetics</a></li><li class="panel-list-item"><a href="#">Bags</a></li><li class="panel-list-item"><a href="#"><img src="'+Le+'" alt="women&#39;s fashion" width="250" height="119"></a></li></ul></div></li><li class="menu-category"><a href="#" class="menu-title">Men&#39;s</a><ul class="dropdown-list"><li class="dropdown-item"><a href="#">Shirt</a></li><li class="dropdown-item"><a href="#">Shorts &amp; Jeans</a></li><li class="dropdown-item"><a href="#">Safety Shoes</a></li><li class="dropdown-item"><a href="#">Wallet</a></li></ul></li><li class="menu-category"><a href="#" class="menu-title">Women&#39;s</a><ul class="dropdown-list"><li class="dropdown-item"><a href="#">Dress &amp; Frock</a></li><li class="dropdown-item"><a href="#">Earrings</a></li><li class="dropdown-item"><a href="#">Necklace</a></li><li class="dropdown-item"><a href="#">Makeup Kit</a></li></ul></li><li class="menu-category"><a href="#" class="menu-title">Hot Offers</a></li>',4),vt={class:"menu-category"},pt={class:"mobile-bottom-navigation"},_t={class:"action-btn"},yt={class:"count"},bt={class:"action-btn"},kt={class:"action-btn"},wt={class:"count"},At={class:"action-btn"},St={class:"count"},Ct={class:"menu-top"},xt=t("h2",{class:"menu-title"},"Menu",-1),Et={class:"mobile-menu-category-list"},Tt={class:"menu-category"},Bt={class:"menu-category"},Pt={class:"accordion-menu","data-accordion-btn":""},Mt=t("p",{class:"menu-title"},"Men's",-1),Nt=w('<ul class="submenu-category-list" data-accordion><li class="submenu-category"><a href="#" class="submenu-title">Shirt</a></li><li class="submenu-category"><a href="#" class="submenu-title">Shorts &amp; Jeans</a></li><li class="submenu-category"><a href="#" class="submenu-title">Safety Shoes</a></li><li class="submenu-category"><a href="#" class="submenu-title">Wallet</a></li></ul>',1),zt={class:"menu-category"},Dt={class:"accordion-menu","data-accordion-btn":""},Ot=t("p",{class:"menu-title"},"Women's",-1),qt=w('<ul class="submenu-category-list" data-accordion><li class="submenu-category"><a href="#" class="submenu-title">Dress &amp; Frock</a></li><li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li><li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li><li class="submenu-category"><a href="#" class="submenu-title">Makeup Kit</a></li></ul>',1),Ht={class:"menu-category"},Lt={class:"accordion-menu","data-accordion-btn":""},Jt=t("p",{class:"menu-title"},"Jewelry",-1),Rt=w('<ul class="submenu-category-list" data-accordion><li class="submenu-category"><a href="#" class="submenu-title">Earrings</a></li><li class="submenu-category"><a href="#" class="submenu-title">Couple Rings</a></li><li class="submenu-category"><a href="#" class="submenu-title">Necklace</a></li><li class="submenu-category"><a href="#" class="submenu-title">Bracelets</a></li></ul>',1),Vt={class:"menu-category"},Ft={class:"accordion-menu","data-accordion-btn":""},Wt=t("p",{class:"menu-title"},"Perfume",-1),jt=w('<ul class="submenu-category-list" data-accordion><li class="submenu-category"><a href="#" class="submenu-title">Clothes Perfume</a></li><li class="submenu-category"><a href="#" class="submenu-title">Deodorant</a></li><li class="submenu-category"><a href="#" class="submenu-title">Flower Fragrance</a></li><li class="submenu-category"><a href="#" class="submenu-title">Air Freshener</a></li></ul>',1),Qt={class:"menu-category"},Ut={class:"menu-category"},Gt={class:"menu-bottom"},Xt={class:"menu-category-list"},It={class:"menu-category"},Kt={class:"accordion-menu","data-accordion-btn":""},Yt=t("p",{class:"menu-title"},"Language",-1),Zt=w('<ul class="submenu-category-list" data-accordion><li class="submenu-category"><a href="#" class="submenu-title">English</a></li><li class="submenu-category"><a href="#" class="submenu-title">Español</a></li><li class="submenu-category"><a href="#" class="submenu-title">Frençh</a></li></ul>',1),$t={class:"chk-container"},es=t("label",{for:"checkbox",class:"checkbox-label"},[t("i",{class:"fas fa-moon"}),t("i",{class:"fas fa-sun"}),t("span",{class:"ball"})],-1),ts={class:"menu-social-container"},ss={href:"#",class:"social-link"},as={href:"#",class:"social-link"},os={href:"#",class:"social-link"},ns={href:"#",class:"social-link"};function ls(e,s,a,i,l,r){const n=q("ion-icon"),f=q("router-link"),c=q("RouterLink");return V(),U("header",null,[t("div",Re,[t("div",Ve,[t("ul",Fe,[t("li",null,[t("a",We,[o(n,{name:"logo-facebook"})])]),t("li",null,[t("a",je,[o(n,{name:"logo-twitter"})])]),t("li",null,[t("a",Qe,[o(n,{name:"logo-instagram"})])]),t("li",null,[t("a",Ue,[o(n,{name:"logo-linkedin"})])])]),Ge,t("div",Xe,[Ie,t("div",Ke,[t("input",{type:"checkbox",class:"checkbox",id:"checkbox",onChange:s[0]||(s[0]=d=>i.toggleDark())},null,32),Ye])])])]),t("div",Ze,[t("div",$e,[o(f,{to:"/",class:"header-logo"},{default:v(()=>[et]),_:1}),t("div",tt,[st,t("button",at,[o(n,{name:"search-outline"})])]),t("div",ot,[o(c,{to:"/carts"},{default:v(()=>[t("button",nt,[o(n,{name:"cart-outline"}),t("span",lt,B(e.carts.length),1)])]),_:1}),o(c,{to:"/favorates"},{default:v(()=>[t("button",it,[o(n,{name:"heart-outline"}),t("span",rt,B(e.favorite.length),1)])]),_:1}),o(c,{to:"/products"},{default:v(()=>[t("button",ct,[o(n,{name:"bag-handle-outline"}),t("span",ut,B(e.products.length),1)])]),_:1})])])]),t("nav",ft,[t("div",dt,[t("ul",ht,[t("li",mt,[o(f,{to:"/",class:"menu-title"},{default:v(()=>[P("Home")]),_:1})]),gt,t("li",vt,[o(c,{to:"/contact",class:"menu-title"},{default:v(()=>[P("Contact Us")]),_:1})])])])]),t("div",pt,[t("button",{class:"action-btn",onClick:s[1]||(s[1]=(...d)=>r.toggle&&r.toggle(...d)),"data-mobile-menu-open-btn":""},[o(n,{name:"menu-outline"})]),o(c,{to:"/products"},{default:v(()=>[t("button",_t,[o(n,{name:"bag-handle-outline"}),t("span",yt,B(e.products.length),1)])]),_:1}),o(c,{to:"/"},{default:v(()=>[t("button",bt,[o(n,{name:"home-outline"})])]),_:1}),o(c,{to:"/favorates"},{default:v(()=>[t("button",kt,[o(n,{name:"heart-outline"}),t("span",wt,B(e.favorite.length),1)])]),_:1}),o(c,{to:"/carts"},{default:v(()=>[t("button",At,[o(n,{name:"cart-outline"}),t("span",St,B(e.carts.length),1)])]),_:1})]),t("nav",{class:me(["mobile-navigation-menu has-scrollbar",{active:l.isActive}]),"data-mobile-menu":""},[t("div",Ct,[xt,t("button",{onClick:s[2]||(s[2]=(...d)=>r.toggle&&r.toggle(...d)),class:"menu-close-btn","data-mobile-menu-close-btn":""},[o(n,{name:"close-outline"})])]),t("ul",Et,[t("li",Tt,[o(c,{to:"/",class:"menu-title"},{default:v(()=>[P("Home")]),_:1})]),t("li",Bt,[t("button",Pt,[Mt,t("div",null,[o(n,{name:"add-outline",class:"add-icon"}),o(n,{name:"remove-outline",class:"remove-icon"})])]),Nt]),t("li",zt,[t("button",Dt,[Ot,t("div",null,[o(n,{name:"add-outline",class:"add-icon"}),o(n,{name:"remove-outline",class:"remove-icon"})])]),qt]),t("li",Ht,[t("button",Lt,[Jt,t("div",null,[o(n,{name:"add-outline",class:"add-icon"}),o(n,{name:"remove-outline",class:"remove-icon"})])]),Rt]),t("li",Vt,[t("button",Ft,[Wt,t("div",null,[o(n,{name:"add-outline",class:"add-icon"}),o(n,{name:"remove-outline",class:"remove-icon"})])]),jt]),t("li",Qt,[o(c,{to:"/Carts",class:"menu-title"},{default:v(()=>[P("Carts")]),_:1})]),t("li",Ut,[o(c,{to:"/products",class:"menu-title"},{default:v(()=>[P("Hot Offers")]),_:1})])]),t("div",Gt,[t("ul",Xt,[t("li",It,[t("button",Kt,[Yt,o(n,{name:"caret-back-outline",class:"caret-back"})]),Zt]),t("div",$t,[t("input",{type:"checkbox",class:"checkbox",id:"checkbox",onChange:s[3]||(s[3]=d=>i.toggleDark())},null,32),es])]),t("ul",ts,[t("li",null,[t("a",ss,[o(n,{name:"logo-facebook"})])]),t("li",null,[t("a",as,[o(n,{name:"logo-twitter"})])]),t("li",null,[t("a",os,[o(n,{name:"logo-instagram"})])]),t("li",null,[t("a",ns,[o(n,{name:"logo-linkedin"})])])])])],2)])}const is=Q(Je,[["render",ls]]),rs={};function cs(e,s){const a=q("RouterView");return V(),ge(a)}const us=Q(rs,[["render",cs]]),fs="data:image/png;base64,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",ds={},hs=w('<div class="footer-category"><div class="container"><h2 class="footer-category-title">Brand directory</h2><div class="footer-category-box"><h3 class="category-box-title">Fashion :</h3><a href="#" class="footer-category-link">T-shirt</a><a href="#" class="footer-category-link">Shirts</a><a href="#" class="footer-category-link">shorts &amp; jeans</a><a href="#" class="footer-category-link">jacket</a><a href="#" class="footer-category-link">dress &amp; frock</a><a href="#" class="footer-category-link">innerwear</a><a href="#" class="footer-category-link">hosiery</a></div><div class="footer-category-box"><h3 class="category-box-title">footwear :</h3><a href="#" class="footer-category-link">sport</a><a href="#" class="footer-category-link">formal</a><a href="#" class="footer-category-link">Boots</a><a href="#" class="footer-category-link">casual</a><a href="#" class="footer-category-link">cowboy shoes</a><a href="#" class="footer-category-link">safety shoes</a><a href="#" class="footer-category-link">Party wear shoes</a><a href="#" class="footer-category-link">Branded</a><a href="#" class="footer-category-link">Firstcopy</a><a href="#" class="footer-category-link">Long shoes</a></div><div class="footer-category-box"><h3 class="category-box-title">jewellery :</h3><a href="#" class="footer-category-link">Necklace</a><a href="#" class="footer-category-link">Earrings</a><a href="#" class="footer-category-link">Couple rings</a><a href="#" class="footer-category-link">Pendants</a><a href="#" class="footer-category-link">Crystal</a><a href="#" class="footer-category-link">Bangles</a><a href="#" class="footer-category-link">bracelets</a><a href="#" class="footer-category-link">nosepin</a><a href="#" class="footer-category-link">chain</a><a href="#" class="footer-category-link">Earrings</a><a href="#" class="footer-category-link">Couple rings</a></div><div class="footer-category-box"><h3 class="category-box-title">cosmetics :</h3><a href="#" class="footer-category-link">Shampoo</a><a href="#" class="footer-category-link">Bodywash</a><a href="#" class="footer-category-link">Facewash</a><a href="#" class="footer-category-link">makeup kit</a><a href="#" class="footer-category-link">liner</a><a href="#" class="footer-category-link">lipstick</a><a href="#" class="footer-category-link">prefume</a><a href="#" class="footer-category-link">Body soap</a><a href="#" class="footer-category-link">scrub</a><a href="#" class="footer-category-link">hair gel</a><a href="#" class="footer-category-link">hair colors</a><a href="#" class="footer-category-link">hair dye</a><a href="#" class="footer-category-link">sunscreen</a><a href="#" class="footer-category-link">skin loson</a><a href="#" class="footer-category-link">liner</a><a href="#" class="footer-category-link">lipstick</a></div></div></div>',1),ms={class:"footer-nav"},gs={class:"container"},vs=w('<ul class="footer-nav-list"><li class="footer-nav-item"><h2 class="nav-title">Popular Categories</h2></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Fashion</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Electronic</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Cosmetic</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Health</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Watches</a></li></ul><ul class="footer-nav-list"><li class="footer-nav-item"><h2 class="nav-title">Products</h2></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Prices drop</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">New products</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Best sales</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Contact us</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Sitemap</a></li></ul><ul class="footer-nav-list"><li class="footer-nav-item"><h2 class="nav-title">Our Company</h2></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Delivery</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Legal Notice</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Terms and conditions</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">About us</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Secure payment</a></li></ul><ul class="footer-nav-list"><li class="footer-nav-item"><h2 class="nav-title">Services</h2></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Prices drop</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">New products</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Best sales</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Contact us</a></li><li class="footer-nav-item"><a href="#" class="footer-nav-link">Sitemap</a></li></ul>',4),ps={class:"footer-nav-list"},_s=t("li",{class:"footer-nav-item"},[t("h2",{class:"nav-title"},"Contact")],-1),ys={class:"footer-nav-item flex"},bs={class:"icon-box"},ks=t("address",{class:"content"}," 419 State 414 Rte Beaver Dams, New York(NY), 14812, USA ",-1),ws={class:"footer-nav-item flex"},As={class:"icon-box"},Ss=t("a",{href:"tel:+607936-8058",class:"footer-nav-link"},"+963 996 693 426",-1),Cs={class:"footer-nav-item flex"},xs={class:"icon-box"},Es=t("a",{href:"mailto:example@gmail.com",class:"footer-nav-link"},"alaa.yahya.ali@outlook.com",-1),Ts={class:"footer-nav-list"},Bs=t("li",{class:"footer-nav-item"},[t("h2",{class:"nav-title"},"Follow Us")],-1),Ps={class:"social-link"},Ms={class:"footer-nav-item"},Ns={href:"#",class:"footer-nav-link"},zs={class:"footer-nav-item"},Ds={href:"#",class:"footer-nav-link"},Os={class:"footer-nav-item"},qs={href:"#",class:"footer-nav-link"},Hs={class:"footer-nav-item"},Ls={href:"#",class:"footer-nav-link"},Js=w('<div class="footer-bottom"><div class="container"><img src="'+fs+'" alt="payment method" class="payment-img"><p class="copyright"> Copyright © <a href="#">Alaa Ali</a>, all rights reserved. </p></div></div>',1);function Rs(e,s){const a=q("ion-icon");return V(),U("footer",null,[hs,t("div",ms,[t("div",gs,[vs,t("ul",ps,[_s,t("li",ys,[t("div",bs,[o(a,{name:"location-outline"})]),ks]),t("li",ws,[t("div",As,[o(a,{name:"call-outline"})]),Ss]),t("li",Cs,[t("div",xs,[o(a,{name:"mail-outline"})]),Es])]),t("ul",Ts,[Bs,t("li",null,[t("ul",Ps,[t("li",Ms,[t("a",Ns,[o(a,{name:"logo-facebook"})])]),t("li",zs,[t("a",Ds,[o(a,{name:"logo-twitter"})])]),t("li",Os,[t("a",qs,[o(a,{name:"logo-linkedin"})])]),t("li",Hs,[t("a",Ls,[o(a,{name:"logo-instagram"})])])])])])])]),Js])}const Vs=Q(ds,[["render",Rs]]),Ws={__name:"Default",setup(e){return(s,a)=>(V(),U(ve,null,[o(is),o(us),o(Vs)],64))}};export{Ws as default};
