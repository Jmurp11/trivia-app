"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{8774:(y,p,h)=>{h.d(p,{c:()=>a});var g=h(4806),m=h(5856),c=h(2473);const a=(i,n)=>{let t,e;const o=(r,u,f)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(r,u);_&&n(_)?_!==t&&(d(),s(_,f)):d()},s=(r,u)=>{t=r,e||(e=t);const f=t;(0,g.c)(()=>f.classList.add("ion-activated")),u()},d=(r=!1)=>{if(!t)return;const u=t;(0,g.c)(()=>u.classList.remove("ion-activated")),r&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>o(r.currentX,r.currentY,m.a),onMove:r=>o(r.currentX,r.currentY,m.b),onEnd:()=>{d(!0),(0,m.h)(),e=void 0}})}},3015:(y,p,h)=>{h.d(p,{g:()=>g});const g=(n,t,e,o,s)=>c(n[1],t[1],e[1],o[1],s).map(d=>m(n[0],t[0],e[0],o[0],d)),m=(n,t,e,o,s)=>s*(3*t*Math.pow(s-1,2)+s*(-3*e*s+3*e+o*s))-n*Math.pow(s-1,3),c=(n,t,e,o,s)=>i((o-=s)-3*(e-=s)+3*(t-=s)-(n-=s),3*e-6*t+3*n,3*t-3*n,n).filter(r=>r>=0&&r<=1),i=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const s=(3*(e/=n)-(t/=n)*t)/3,d=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===s)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-s),-Math.sqrt(-s)];const r=Math.pow(d/2,2)+Math.pow(s/3,3);if(0===r)return[Math.pow(d/2,.5)-t/3];if(r>0)return[Math.pow(-d/2+Math.sqrt(r),1/3)-Math.pow(d/2+Math.sqrt(r),1/3)-t/3];const u=Math.sqrt(Math.pow(-s/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-s/3,3)))),_=2*Math.pow(u,1/3);return[_*Math.cos(f/3)-t/3,_*Math.cos((f+2*Math.PI)/3)-t/3,_*Math.cos((f+4*Math.PI)/3)-t/3]}},2757:(y,p,h)=>{h.d(p,{i:()=>g});const g=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1447:(y,p,h)=>{h.r(p),h.d(p,{startFocusVisible:()=>a});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,o=i||document.body,s=v=>{n.forEach(w=>w.classList.remove(g)),v.forEach(w=>w.classList.add(g)),n=v},d=()=>{t=!1,s([])},r=v=>{t=c.includes(v.key),t||s([])},u=v=>{if(t&&v.composedPath){const w=v.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));s(w)}},f=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",u),e.addEventListener("focusout",f),e.addEventListener("touchstart",d),e.addEventListener("mousedown",d),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",u),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",d)},setFocus:s}}},8651:(y,p,h)=>{h.d(p,{C:()=>i,a:()=>c,d:()=>a});var g=h(4724),m=h(7064);const c=function(){var n=(0,g.Z)(function*(t,e,o,s,d,r){if(t)return t.attachViewToDom(e,o,d,s);if(!(r||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const u="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o;return s&&s.forEach(f=>u.classList.add(f)),d&&Object.assign(u,d),e.appendChild(u),yield new Promise(f=>(0,m.c)(u,f)),u});return function(e,o,s,d,r,u){return n.apply(this,arguments)}}(),a=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},i=()=>{let n,t;return{attachViewToDom:function(){var s=(0,g.Z)(function*(d,r,u={},f=[]){if(n=d,r){const v="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r;f.forEach(w=>v.classList.add(w)),Object.assign(v,u),n.appendChild(v),yield new Promise(w=>(0,m.c)(v,w))}else if(n.children.length>0){const v=n.ownerDocument&&n.ownerDocument.createElement("div");f.forEach(w=>v.classList.add(w)),v.append(...n.children),n.appendChild(v)}const _=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),_.appendChild(n),n});return function(r,u){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},5856:(y,p,h)=>{h.d(p,{a:()=>c,b:()=>a,c:()=>m,d:()=>n,h:()=>i});const g={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>{g.selection()},c=()=>{g.selectionStart()},a=()=>{g.selectionChanged()},i=()=>{g.selectionEnd()},n=t=>{g.impact(t)}},9913:(y,p,h)=>{h.d(p,{s:()=>g});const g=e=>{try{if(e instanceof class{constructor(o){this.value=o}})return e.value;if(!a()||"string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=e,n.forEach(f=>{const _=o.querySelectorAll(f);for(let v=_.length-1;v>=0;v--){const w=_[v];w.parentNode?w.parentNode.removeChild(w):o.removeChild(w);const E=c(w);for(let l=0;l<E.length;l++)m(E[l])}});const d=c(o);for(let f=0;f<d.length;f++)m(d[f]);const r=document.createElement("div");r.appendChild(o);const u=r.querySelector("div");return null!==u?u.innerHTML:r.innerHTML}catch(o){return console.error(o),""}},m=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let s=e.attributes.length-1;s>=0;s--){const d=e.attributes.item(s),r=d.name;if(!i.includes(r.toLowerCase())){e.removeAttribute(r);continue}const u=d.value;null!=u&&u.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const o=c(e);for(let s=0;s<o.length;s++)m(o[s])},c=e=>null!=e.children?e.children:e.childNodes,a=()=>{const e=window,o=e&&e.Ionic&&e.Ionic.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},i=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},9225:(y,p,h)=>{h.d(p,{a:()=>g,b:()=>d,c:()=>n,d:()=>r,e:()=>l,f:()=>c,g:()=>m,h:()=>w,i:()=>t,j:()=>o,k:()=>u,l:()=>e,m:()=>i,n:()=>a,o:()=>s,p:()=>f,q:()=>_,r:()=>v,s:()=>E});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2582:(y,p,h)=>{h.r(p),h.d(p,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>E,keyboardDidClose:()=>f,keyboardDidOpen:()=>r,keyboardDidResize:()=>u,resetKeyboardAssist:()=>t,setKeyboardClose:()=>d,setKeyboardOpen:()=>s,startKeyboardAssist:()=>e,trackViewportChanges:()=>w});const g="ionKeyboardDidShow",m="ionKeyboardDidHide";let a={},i={},n=!1;const t=()=>{a={},i={},n=!1},e=l=>{o(l),l.visualViewport&&(i=E(l.visualViewport),l.visualViewport.onresize=()=>{w(l),r()||u(l)?s(l):f(l)&&d(l)})},o=l=>{l.addEventListener("keyboardDidShow",M=>s(l,M)),l.addEventListener("keyboardDidHide",()=>d(l))},s=(l,M)=>{_(l,M),n=!0},d=l=>{v(l),n=!1},r=()=>!n&&a.width===i.width&&(a.height-i.height)*i.scale>150,u=l=>n&&!f(l),f=l=>n&&i.height===l.innerHeight,_=(l,M)=>{const D=new CustomEvent(g,{detail:{keyboardHeight:M?M.keyboardHeight:l.innerHeight-i.height}});l.dispatchEvent(D)},v=l=>{const M=new CustomEvent(m);l.dispatchEvent(M)},w=l=>{a=Object.assign({},i),i=E(l.visualViewport)},E=l=>({width:Math.round(l.width),height:Math.round(l.height),offsetTop:l.offsetTop,offsetLeft:l.offsetLeft,pageTop:l.pageTop,pageLeft:l.pageLeft,scale:l.scale})},6850:(y,p,h)=>{h.d(p,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(c,a,i)=>{const n=c*a/i-c+"ms",t=2*Math.PI*a/i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,a,i)=>{const n=a/i,t=c*n-c+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,a,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":c*a/i-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":c*a/i-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,a,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/i-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/i-c+"ms"}})}}},7506:(y,p,h)=>{h.d(p,{c:()=>c,g:()=>i,h:()=>m,o:()=>t});var g=h(4724);const m=(e,o)=>null!==o.closest(e),c=(e,o)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},o):o,i=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(e).forEach(s=>o[s]=!0),o},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,g.Z)(function*(o,s,d,r){if(null!=o&&"#"!==o[0]&&!n.test(o)){const u=document.querySelector("ion-router");if(u)return null!=s&&s.preventDefault(),u.push(o,d,r)}return!1});return function(s,d,r,u){return e.apply(this,arguments)}}()},7095:(y,p,h)=>{h.d(p,{e:()=>m});var g=h(3245);let m=(()=>{class c{cleanText(i){return i.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&amp;/g,"&").replace(/&rsquo;/g,"'")}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=g.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);