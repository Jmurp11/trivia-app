"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7479],{7479:(j,A,y)=>{y.r(A),y.d(A,{startInputShims:()=>Y});var w=y(4724),m=y(7064);const _=new WeakMap,L=(e,n,t,o=0)=>{_.has(e)!==t&&(t?B(e,n,o):C(e,n))},D=e=>e===e.getRootNode().activeElement,B=(e,n,t)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),_.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${t}px,0) scale(0)`},C=(e,n)=>{const t=_.get(e);t&&(_.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",k=function(){var e=(0,w.Z)(function*(n,t,o,r,c){if(!o&&!r)return;const s=((e,n,t)=>((e,n,t,o)=>{const r=e.top,c=e.bottom,s=n.top,i=s+15,f=.75*Math.min(n.bottom,o-t)-c,v=i-r,d=Math.round(f<0?-f:v>0?-v:0),a=Math.min(d,r-s),h=Math.abs(a)/.3;return{scrollAmount:a,scrollDuration:Math.min(400,Math.max(150,h)),scrollPadding:t,inputSafeY:4-(r-i)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight))(n,o||r,c);if(o&&Math.abs(s.scrollAmount)<4)t.focus();else if(L(n,t,!0,s.inputSafeY),t.focus(),(0,m.r)(()=>n.click()),"undefined"!=typeof window){let u;const i=function(){var f=(0,w.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",i),o&&(yield o.scrollByPoint(0,s.scrollAmount,s.scrollDuration)),L(n,t,!1,s.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",i)};if(o){const f=yield o.getScrollElement();if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",i),void(u=setTimeout(i,1e3))}i()}});return function(t,o,r,c,s){return e.apply(this,arguments)}}(),T="$ionPaddingTimer",I=(e,n)=>{if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const t=e.closest("ion-content");if(null===t)return;const o=t[T];o&&clearTimeout(o),n>0?t.style.setProperty("--keyboard-offset",`${n}px`):t[T]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),i=new WeakMap,l=new WeakMap,f=function(){var d=(0,w.Z)(function*(a){yield new Promise(g=>(0,m.c)(a,g));const b=a.shadowRoot||a,h=b.querySelector("input")||b.querySelector("textarea"),S=a.closest("ion-content"),P=S?null:a.closest("ion-footer");if(h){if(S&&r&&!i.has(a)){const g=((e,n,t)=>{if(!t||!n)return()=>{};const o=u=>{D(n)&&L(e,n,u)},r=()=>L(e,n,!1),c=()=>o(!0),s=()=>o(!1);return(0,m.a)(t,"ionScrollStart",c),(0,m.a)(t,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,m.b)(t,"ionScrollStart",c),(0,m.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(a,h,S);i.set(a,g)}if((S||P)&&o&&!l.has(a)){const g=((e,n,t,o,r)=>{let c;const s=i=>{c=(0,m.p)(i)},u=i=>{if(!c)return;const l=(0,m.p)(i);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,c,l)&&!D(n)&&(i.stopPropagation(),k(e,n,t,o,r))};return e.addEventListener("touchstart",s,!0),e.addEventListener("touchend",u,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",u,!0)}})(a,h,S,P,t);l.set(a,g)}}});return function(b){return d.apply(this,arguments)}}();c&&(()=>{let e=!0,n=!1;const t=document;(0,m.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=t.activeElement;if(!u||u.matches(p))return;const i=s.target;i!==u&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout(()=>{e||u.blur()},50)))},!1)})(),s&&(e=>{const n=document;n.addEventListener("focusin",r=>{I(r.target,e)}),n.addEventListener("focusout",r=>{I(r.target,0)})})(t);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const a=i.get(d);a&&a(),i.delete(d)}if(o){const a=l.get(d);a&&a(),l.delete(d)}})(d.detail)})}}}]);