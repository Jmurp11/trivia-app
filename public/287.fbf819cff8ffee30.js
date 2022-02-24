"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[287],{287:(Se,D,f)=>{f.r(D),f.d(D,{HomePageModule:()=>Pe});var E=f(6019),u=f(3867),N=f(7816),s=f(3245),ee=f(2429),te=f(9423),ne=f(854),se=f(439),x=f(8771);class j{}class U{}class g{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const o=e.slice(0,r),i=o.toLowerCase(),c=e.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const o=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(e,o))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new g;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const o=("a"===t.op?this.headers.get(e):void 0)||[];o.push(...r),this.headers.set(e,o);break;case"d":const i=t.value;if(i){let c=this.headers.get(e);if(!c)return;c=c.filter(h=>-1===i.indexOf(h)),0===c.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class re{encodeKey(t){return B(t)}encodeValue(t){return B(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const ie=/%(\d[a-f0-9])/gi,ae={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function B(n){return encodeURIComponent(n).replace(ie,(t,e)=>{var r;return null!=(r=ae[e])?r:t})}function _(n){return`${n}`}class v{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new re,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[c,h]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],a=e.get(c)||[];a.push(h),e.set(c,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e];this.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:o,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new v({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(_(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(_(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class le{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}keys(){return this.map.keys()}}function Z(n){return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer}function X(n){return"undefined"!=typeof Blob&&n instanceof Blob}function q(n){return"undefined"!=typeof FormData&&n instanceof FormData}class M{constructor(t,e,r,o){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new g),this.context||(this.context=new le),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+c}}else this.params=new v,this.urlWithParams=e}serializeBody(){return null===this.body?null:Z(this.body)||X(this.body)||q(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||q(this.body)?null:X(this.body)?this.body.type||null:Z(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var T;const e=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,c=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,m=t.params||this.params;const O=null!=(T=t.context)?T:this.context;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((b,l)=>b.set(l,t.setHeaders[l]),a)),t.setParams&&(m=Object.keys(t.setParams).reduce((b,l)=>b.set(l,t.setParams[l]),m)),new M(e,r,i,{params:m,headers:a,context:O,reportProgress:h,responseType:o,withCredentials:c})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class S{constructor(t,e=200,r="OK"){this.headers=t.headers||new g,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class k extends S{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new k({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class P extends S{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new P({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class G extends S{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function z(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let Q=(()=>{class n{constructor(e){this.handler=e}request(e,r,o={}){let i;if(e instanceof M)i=e;else{let a,m;a=o.headers instanceof g?o.headers:new g(o.headers),o.params&&(m=o.params instanceof v?o.params:new v({fromObject:o.params})),i=new M(e,r,void 0!==o.body?o.body:null,{headers:a,context:o.context,params:m,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const c=(0,ee.of)(i).pipe((0,ne.b)(a=>this.handler.handle(a)));if(e instanceof M||"events"===o.observe)return c;const h=c.pipe((0,se.h)(a=>a instanceof P));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return h.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,x.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,x.U)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new v).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,o={}){return this.request("PATCH",e,z(o,r))}post(e,r,o={}){return this.request("POST",e,z(o,r))}put(e,r,o={}){return this.request("PUT",e,z(o,r))}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(j))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();class Y{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const $=new s.OlP("HTTP_INTERCEPTORS");let de=(()=>{class n{intercept(e,r){return r.handle(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const pe=/^\)\]\}',?\n/;let K=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new te.y(r=>{const o=this.xhrFactory.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((l,p)=>o.setRequestHeader(l,p.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const l=e.detectContentTypeHeader();null!==l&&o.setRequestHeader("Content-Type",l)}if(e.responseType){const l=e.responseType.toLowerCase();o.responseType="json"!==l?l:"text"}const i=e.serializeBody();let c=null;const h=()=>{if(null!==c)return c;const l=1223===o.status?204:o.status,p=o.statusText||"OK",w=new g(o.getAllResponseHeaders()),H=function(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||e.url;return c=new k({headers:w,status:l,statusText:p,url:H}),c},a=()=>{let{headers:l,status:p,statusText:w,url:H}=h(),y=null;204!==p&&(y=void 0===o.response?o.responseText:o.response),0===p&&(p=y?200:0);let I=p>=200&&p<300;if("json"===e.responseType&&"string"==typeof y){const He=y;y=y.replace(pe,"");try{y=""!==y?JSON.parse(y):null}catch(Ne){y=He,I&&(I=!1,y={error:Ne,text:y})}}I?(r.next(new P({body:y,headers:l,status:p,statusText:w,url:H||void 0})),r.complete()):r.error(new G({error:y,headers:l,status:p,statusText:w,url:H||void 0}))},m=l=>{const{url:p}=h(),w=new G({error:l,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(w)};let O=!1;const T=l=>{O||(r.next(h()),O=!0);let p={type:d.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(p.total=l.total),"text"===e.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},b=l=>{let p={type:d.UploadProgress,loaded:l.loaded};l.lengthComputable&&(p.total=l.total),r.next(p)};return o.addEventListener("load",a),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),e.reportProgress&&(o.addEventListener("progress",T),null!==i&&o.upload&&o.upload.addEventListener("progress",b)),o.send(i),r.next({type:d.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",a),o.removeEventListener("timeout",m),e.reportProgress&&(o.removeEventListener("progress",T),null!==i&&o.upload&&o.upload.removeEventListener("progress",b)),o.readyState!==o.DONE&&o.abort()}})}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(E.JF))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const R=new s.OlP("XSRF_COOKIE_NAME"),A=new s.OlP("XSRF_HEADER_NAME");class W{}let fe=(()=>{class n{constructor(e,r,o){this.doc=e,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,E.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(E.K0),s.LFG(s.Lbi),s.LFG(R))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),J=(()=>{class n{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const o=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(e);const i=this.tokenService.getToken();return null!==i&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,i)})),r.handle(e)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(W),s.LFG(A))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),me=(()=>{class n{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get($,[]);this.chain=r.reduceRight((o,i)=>new Y(o,i),this.backend)}return this.chain.handle(e)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(U),s.LFG(s.zs3))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),ye=(()=>{class n{static disable(){return{ngModule:n,providers:[{provide:J,useClass:de}]}}static withOptions(e={}){return{ngModule:n,providers:[e.cookieName?{provide:R,useValue:e.cookieName}:[],e.headerName?{provide:A,useValue:e.headerName}:[]]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[J,{provide:$,useExisting:J,multi:!0},{provide:W,useClass:fe},{provide:R,useValue:"XSRF-TOKEN"},{provide:A,useValue:"X-XSRF-TOKEN"}]}),n})(),ge=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[Q,{provide:j,useClass:me},K,{provide:U,useExisting:K}],imports:[[ye.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),n})();var L=f(184);let ve=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-home"]],decls:1,vars:0,template:function(e,r){1&e&&s._UZ(0,"ion-router-outlet")},directives:[u.jP],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})();var Ce=f(1855),V=f(6534);let F=(()=>{class n{constructor(e){this.http=e,this.url="https://opentdb.com/api.php?amount=",this.length=10}getQuiz(e,r){return this.http.get(`${this.url}${this.length}&category=${e}&difficulty=${r}`)}getAvailableQuizzes(){return[{id:9,value:"General Knowledge"},{id:10,value:"Entertainment: Books"},{id:11,value:"Entertainment: Film"},{id:12,value:"Entertainment: Music"},{id:13,value:"Entertainment: Musicals &amp; Theatres"},{id:14,value:"Entertainment: Television"},{id:15,value:"Entertainment: Video Games"},{id:16,value:"Entertainment: Board Games"},{id:17,value:"Science & Nature"},{id:18,value:"Science: Computers"},{id:19,value:"Science: Mathematics"},{id:20,value:"Mythology"},{id:21,value:"Sports"},{id:22,value:"Geography"},{id:23,value:"History"},{id:24,value:"Politics"},{id:25,value:"Art"},{id:26,value:"Celebrities"},{id:27,value:"Animals"},{id:28,value:"Vehicles"},{id:29,value:"Entertainment: Comics"},{id:30,value:"Science: Gadgets"},{id:31,value:"Entertainment: Japanese Anime &amp; Manga"},{id:32,value:"Entertainment: Cartoon &amp; Animations"}]}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(Q))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var be=f(7095);function Ee(n,t){if(1&n&&(s.TgZ(0,"ion-select-option",4),s._uU(1),s.ALo(2,"titlecase"),s.qZA()),2&n){const e=t.$implicit;s.Q6J("value",e),s.xp6(1),s.hij(" ",s.lcZ(2,2,e)," ")}}function Te(n,t){if(1&n){const e=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"ion-button",5),s.NdJ("click",function(){const i=s.CHM(e).$implicit;return s.oxw().selectQuizType(i)}),s._uU(2),s.qZA(),s.qZA()}if(2&n){const e=t.$implicit;s.xp6(2),s.Oqu(e.value)}}var C=(()=>{return(n=C||(C={})).EASY="easy",n.MEDIUM="medium",n.HARD="hard",C;var n})();let we=(()=>{class n{constructor(e,r,o,i){this.router=e,this.quizService=r,this.utitlities=o,this.modalController=i}ngOnInit(){this.quizList=this.quizList.map(e=>({id:e.id,value:this.utitlities.cleanText(e.value)})).sort((e,r)=>e.value.localeCompare(r.value)),this.difficulty=C.EASY,this.difficultyOpts=[C.EASY,C.MEDIUM,C.HARD]}selectQuizType(e){this.quizService.getQuiz(e.id,this.difficulty).subscribe(o=>{this.router.navigate([`/quiz/${e.value}`],{state:{quiz:o.results,triviaType:e.value}})});const r=(0,V.IH)();(0,V.Kz)(r,"start game",{trivia:e.value,difficulty:this.difficulty}),this.modalController.dismiss()}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(L.F0),s.Y36(F),s.Y36(be.e),s.Y36(u.IN))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-quiz-list"]],inputs:{quizList:"quizList"},decls:7,vars:3,consts:[[1,"container"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"value"],["expand","block",3,"click"]],template:function(e,r){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"ion-item"),s.TgZ(2,"ion-label"),s._uU(3,"Difficulty"),s.qZA(),s.TgZ(4,"ion-select",1),s.NdJ("ngModelChange",function(i){return r.difficulty=i}),s.YNc(5,Ee,3,4,"ion-select-option",2),s.qZA(),s.qZA(),s.qZA(),s.YNc(6,Te,3,1,"div",3)),2&e&&(s.xp6(4),s.Q6J("ngModel",r.difficulty),s.xp6(1),s.Q6J("ngForOf",r.difficultyOpts),s.xp6(1),s.Q6J("ngForOf",r.quizList))},directives:[u.Ie,u.Q$,u.t9,u.QI,N.JJ,N.On,E.sg,u.n0,u.YG],pipes:[E.rS],styles:[".container[_ngcontent-%COMP%]{padding-top:1em}"]}),n})(),Me=(()=>{class n{constructor(e){this.modalController=e}ngOnInit(){}dismiss(){this.modalController.dismiss({dismissed:!0})}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(u.IN))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-modal"]],inputs:{list:"list"},decls:6,vars:2,consts:[["slot","start"],[3,"click"],["slot","icon-only","name","close"],[3,"fullscreen"],[3,"quizList"]],template:function(e,r){1&e&&(s.TgZ(0,"ion-toolbar"),s.TgZ(1,"ion-buttons",0),s.TgZ(2,"ion-button",1),s.NdJ("click",function(){return r.dismiss()}),s._UZ(3,"ion-icon",2),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"ion-content",3),s._UZ(5,"app-quiz-list",4),s.qZA()),2&e&&(s.xp6(4),s.Q6J("fullscreen",!0),s.xp6(1),s.Q6J("quizList",r.list))},directives:[u.sr,u.Sm,u.YG,u.gu,u.W2,we],styles:[""]}),n})();const Oe=[{path:"",component:ve,children:[{path:"",component:(()=>{class n{constructor(e,r,o){this.quizService=e,this.routerOutlet=r,this.modalController=o,this.title="Trivaster"}ngOnInit(){this.modalOpen=!1,this.quizList=this.quizService.getAvailableQuizzes()}presentModal(){return(0,Ce.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:Me,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl,componentProps:{list:this.quizList}})).present()})}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(F),s.Y36(u.jP),s.Y36(u.IN))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-home"]],decls:10,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[1,"center","img-container"],["src","../../../assets/owl.svg",1,"img"],[1,"center"],["size","large",3,"click"]],template:function(e,r){1&e&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-title"),s._uU(3),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"ion-content",1),s.TgZ(5,"div",2),s._UZ(6,"img",3),s.qZA(),s.TgZ(7,"div",4),s.TgZ(8,"ion-button",5),s.NdJ("click",function(){return r.presentModal()}),s._uU(9,"Start"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.Q6J("translucent",!0),s.xp6(3),s.hij(" ",r.title," "),s.xp6(1),s.Q6J("fullscreen",!0))},directives:[u.Gu,u.sr,u.wd,u.W2,u.YG],styles:[""]}),n})()}]}];let xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[L.Bz.forChild(Oe)],L.Bz]}),n})(),Pe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[F],imports:[[E.ez,N.u5,u.Pc,xe,ge]]}),n})()}}]);