!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){t.exports=n(10)},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)})}}},function(t,e,n){(function(e){
/*!
ISC License

Copyright (c) 2014-2018, Andrea Giammarchi, @WebReflection

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

*/
function n(t,e){"use strict";var n=t.document,r=t.Object,o=function(t){var e,n,o,i,a=/^[A-Z]+[a-z]/,u=function(t,e){(e=e.toLowerCase())in c||(c[t]=(c[t]||[]).concat(e),c[e]=c[e.toUpperCase()]=t)},c=(r.create||r)(null),l={};for(n in t)for(i in t[n])for(o=t[n][i],c[i]=o,e=0;e<o.length;e++)c[o[e].toLowerCase()]=c[o[e].toUpperCase()]=i;return l.get=function(t){return"string"==typeof t?c[t]||(a.test(t)?[]:""):function(t){var e,n=[];for(e in c)t.test(e)&&n.push(e);return n}(t)},l.set=function(t,e){return a.test(t)?u(t,e):u(e,t),l},l}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof e&&(e={type:e||"auto"});var i,a,u,c,l,s,f,p,h,m="registerElement",d="__"+m+(1e5*t.Math.random()>>0),y="addEventListener",v="attached",g="Callback",L="detached",b="extends",E="attributeChanged"+g,T=v+g,M="connected"+g,w="disconnected"+g,H="created"+g,O=L+g,x="ADDITION",C="REMOVAL",A="DOMAttrModified",N="DOMContentLoaded",S="DOMSubtreeModified",_="<",P="=",j=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,F=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],D=[],R=[],I="",k=n.documentElement,V=D.indexOf||function(t){for(var e=this.length;e--&&this[e]!==t;);return e},U=r.prototype,G=U.hasOwnProperty,q=U.isPrototypeOf,B=r.defineProperty,Z=[],Y=r.getOwnPropertyDescriptor,z=r.getOwnPropertyNames,K=r.getPrototypeOf,X=r.setPrototypeOf,$=!!r.__proto__,Q="__dreCEv1",W=t.customElements,J=!/^force/.test(e.type)&&!!(W&&W.define&&W.get&&W.whenDefined),tt=r.create||r,et=t.Map||function(){var t,e=[],n=[];return{get:function(t){return n[V.call(e,t)]},set:function(r,o){(t=V.call(e,r))<0?n[e.push(r)-1]=o:n[t]=o}}},nt=t.Promise||function(t){var e=[],n=!1,r={catch:function(){return r},then:function(t){return e.push(t),n&&setTimeout(o,1),r}};function o(t){for(n=!0;e.length;)e.shift()(t)}return t(o),r},rt=!1,ot=tt(null),it=tt(null),at=new et,ut=function(t){return t.toLowerCase()},ct=r.create||function t(e){return e?(t.prototype=e,new t):this},lt=X||($?function(t,e){return t.__proto__=e,t}:z&&Y?function(){function t(t,e){for(var n,r=z(e),o=0,i=r.length;o<i;o++)n=r[o],G.call(t,n)||B(t,n,Y(e,n))}return function(e,n){do{t(e,n)}while((n=K(n))&&!q.call(n,e));return e}}():function(t,e){for(var n in e)t[n]=e[n];return t}),st=t.MutationObserver||t.WebKitMutationObserver,ft=t.HTMLAnchorElement,pt=(t.HTMLElement||t.Element||t.Node).prototype,ht=!q.call(pt,k),mt=ht?function(t,e,n){return t[e]=n.value,t}:B,dt=ht?function(t){return 1===t.nodeType}:function(t){return q.call(pt,t)},yt=ht&&[],vt=pt.attachShadow,gt=pt.cloneNode,Lt=pt.dispatchEvent,bt=pt.getAttribute,Et=pt.hasAttribute,Tt=pt.removeAttribute,Mt=pt.setAttribute,wt=n.createElement,Ht=n.importNode,Ot=wt,xt=st&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ct=st||function(t){Pt=!1,k.removeEventListener(A,Ct)},At=0,Nt=m in n&&!/^force-all/.test(e.type),St=!0,_t=!1,Pt=!0,jt=!0,Ft=!0;function Dt(){var t=i.splice(0,i.length);for(At=0;t.length;)t.shift().call(null,t.shift())}function Rt(t,e){for(var n=0,r=t.length;n<r;n++)Kt(t[n],e)}function It(t){return function(e){dt(e)&&(Kt(e,t),I.length&&Rt(e.querySelectorAll(I),t))}}function kt(t){var e=bt.call(t,"is"),n=t.nodeName.toUpperCase(),r=V.call(D,e?P+e.toUpperCase():_+n);return e&&-1<r&&!Vt(n,e)?-1:r}function Vt(t,e){return-1<I.indexOf(t+'[is="'+e+'"]')}function Ut(t){var e=t.currentTarget,n=t.attrChange,r=t.attrName,o=t.target,i=t[x]||2,a=t[C]||3;!Ft||o&&o!==e||!e[E]||"style"===r||t.prevValue===t.newValue&&(""!==t.newValue||n!==i&&n!==a)||e[E](r,n===i?null:t.prevValue,n===a?null:t.newValue)}function Gt(t){var e=It(t);return function(t){i.push(e,t.target),At&&clearTimeout(At),At=setTimeout(Dt,1)}}function qt(t){jt&&(jt=!1,t.currentTarget.removeEventListener(N,qt)),I.length&&Rt((t.target||n).querySelectorAll(I),t.detail===L?L:v),ht&&function(){for(var t,e=0,n=yt.length;e<n;e++)t=yt[e],k.contains(t)||(n--,yt.splice(e--,1),Kt(t,L))}()}function Bt(t,e){Mt.call(this,t,e),a.call(this,{target:this})}function Zt(t,e,n){var r=e.apply(t,n),o=kt(r);return-1<o&&p(r,R[o]),n.pop()&&I.length&&function(t){for(var e,n=0,r=t.length;n<r;n++)e=t[n],p(e,R[kt(e)])}(r.querySelectorAll(I)),r}function Yt(t,e){lt(t,e),l?l.observe(t,xt):(Pt&&(t.setAttribute=Bt,t[d]=c(t),t[y](S,a)),t[y](A,Ut)),t[H]&&Ft&&(t.created=!0,t[H](),t.created=!1)}function zt(t){throw new Error("A "+t+" type is already registered")}function Kt(t,e){var n,r,o=kt(t);-1<o&&(f(t,R[o]),o=0,e!==v||t[v]?e!==L||t[L]||(t[v]=!1,t[L]=!0,r="disconnected",o=1):(t[L]=!1,t[v]=!0,r="connected",o=1,ht&&V.call(yt,t)<0&&yt.push(t)),o&&(n=t[e+g]||t[r+g])&&n.call(t))}function Xt(){}function $t(t,e,r){var o=r&&r[b]||"",i=e.prototype,a=ct(i),u=e.observedAttributes||Z,c={prototype:a};mt(a,H,{value:function(){if(rt)rt=!1;else if(!this[Q]){this[Q]=!0,new e(this),i[H]&&i[H].call(this);var t=ot[at.get(e)];(!J||t.create.length>1)&&Jt(this)}}}),mt(a,E,{value:function(t){-1<V.call(u,t)&&i[E]&&i[E].apply(this,arguments)}}),i[M]&&mt(a,T,{value:i[M]}),i[w]&&mt(a,O,{value:i[w]}),o&&(c[b]=o),t=t.toUpperCase(),ot[t]={constructor:e,create:o?[o,ut(t)]:[t]},at.set(e,t),n[m](t.toLowerCase(),c),te(t),it[t].r()}function Qt(t){var e=ot[t.toUpperCase()];return e&&e.constructor}function Wt(t){return"string"==typeof t?t:t&&t.is||""}function Jt(t){for(var e,n=t[E],r=n?t.attributes:Z,o=r.length;o--;)e=r[o],n.call(t,e.name||e.nodeName,null,e.value||e.nodeValue)}function te(t){return(t=t.toUpperCase())in it||(it[t]={},it[t].p=new nt(function(e){it[t].r=e})),it[t].p}function ee(){W&&delete t.customElements,B(t,"customElements",{configurable:!0,value:new Xt}),B(t,"CustomElementRegistry",{configurable:!0,value:Xt});for(var e=function(e){var r=t[e];if(r){t[e]=function(t){var e,o;return t||(t=this),t[Q]||(rt=!0,e=ot[at.get(t.constructor)],(t=(o=J&&1===e.create.length)?Reflect.construct(r,Z,e.constructor):n.createElement.apply(n,e.create))[Q]=!0,rt=!1,o||Jt(t)),t},t[e].prototype=r.prototype;try{r.prototype.constructor=t[e]}catch(n){!0,B(r,Q,{value:t[e]})}}},r=o.get(/^HTML[A-Z]*[a-z]/),i=r.length;i--;e(r[i]));n.createElement=function(t,e){var n=Wt(e);return n?Ot.call(this,t,ut(n)):Ot.call(this,t)},Nt||(_t=!0,n[m](""))}if(st&&((h=n.createElement("div")).innerHTML="<div><div></div></div>",new st(function(t,e){if(t[0]&&"childList"==t[0].type&&!t[0].removedNodes[0].childNodes.length){var n=(h=Y(pt,"innerHTML"))&&h.set;n&&B(pt,"innerHTML",{set:function(t){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,t)}})}e.disconnect(),h=null}).observe(h,{childList:!0,subtree:!0}),h.innerHTML=""),Nt||(X||$?(f=function(t,e){q.call(e,t)||Yt(t,e)},p=Yt):p=f=function(t,e){t[d]||(t[d]=r(!0),Yt(t,e))},ht?(Pt=!1,function(){var t=Y(pt,y),e=t.value,n=function(t){var e=new CustomEvent(A,{bubbles:!0});e.attrName=t,e.prevValue=bt.call(this,t),e.newValue=null,e[C]=e.attrChange=2,Tt.call(this,t),Lt.call(this,e)},r=function(t,e){var n=Et.call(this,t),r=n&&bt.call(this,t),o=new CustomEvent(A,{bubbles:!0});Mt.call(this,t,e),o.attrName=t,o.prevValue=n?r:null,o.newValue=e,n?o.MODIFICATION=o.attrChange=1:o[x]=o.attrChange=0,Lt.call(this,o)},o=function(t){var e,n=t.currentTarget,r=n[d],o=t.propertyName;r.hasOwnProperty(o)&&(r=r[o],(e=new CustomEvent(A,{bubbles:!0})).attrName=r.name,e.prevValue=r.value||null,e.newValue=r.value=n[o]||null,null==e.prevValue?e[x]=e.attrChange=0:e.MODIFICATION=e.attrChange=1,Lt.call(n,e))};t.value=function(t,i,a){t===A&&this[E]&&this.setAttribute!==r&&(this[d]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,e.call(this,"propertychange",o)),e.call(this,t,i,a)},B(pt,y,t)}()):st||(k[y](A,Ct),k.setAttribute(d,1),k.removeAttribute(d),Pt&&(a=function(t){var e,n,r;if(this===t.target){for(r in e=this[d],this[d]=n=c(this),n){if(!(r in e))return u(0,this,r,e[r],n[r],x);if(n[r]!==e[r])return u(1,this,r,e[r],n[r],"MODIFICATION")}for(r in e)if(!(r in n))return u(2,this,r,e[r],n[r],C)}},u=function(t,e,n,r,o,i){var a={attrChange:t,currentTarget:e,attrName:n,prevValue:r,newValue:o};a[i]=t,Ut(a)},c=function(t){for(var e,n,r={},o=t.attributes,i=0,a=o.length;i<a;i++)"setAttribute"!==(n=(e=o[i]).name)&&(r[n]=e.value);return r})),n[m]=function(t,e){if(r=t.toUpperCase(),St&&(St=!1,st?(l=function(t,e){function n(t,e){for(var n=0,r=t.length;n<r;e(t[n++]));}return new st(function(r){for(var o,i,a,u=0,c=r.length;u<c;u++)"childList"===(o=r[u]).type?(n(o.addedNodes,t),n(o.removedNodes,e)):(i=o.target,Ft&&i[E]&&"style"!==o.attributeName&&(a=bt.call(i,o.attributeName))!==o.oldValue&&i[E](o.attributeName,o.oldValue,a))})}(It(v),It(L)),(s=function(t){return l.observe(t,{childList:!0,subtree:!0}),t})(n),vt&&(pt.attachShadow=function(){return s(vt.apply(this,arguments))})):(i=[],n[y]("DOMNodeInserted",Gt(v)),n[y]("DOMNodeRemoved",Gt(L))),n[y](N,qt),n[y]("readystatechange",qt),n.importNode=function(t,e){switch(t.nodeType){case 1:return Zt(n,Ht,[t,!!e]);case 11:for(var r=n.createDocumentFragment(),o=t.childNodes,i=o.length,a=0;a<i;a++)r.appendChild(n.importNode(o[a],!!e));return r;default:return gt.call(t,!!e)}},pt.cloneNode=function(t){return Zt(this,gt,[!!t])}),_t)return _t=!1;if(-2<V.call(D,P+r)+V.call(D,_+r)&&zt(t),!j.test(r)||-1<V.call(F,r))throw new Error("The type "+t+" is invalid");var r,o,a=function(){return c?n.createElement(f,r):n.createElement(f)},u=e||U,c=G.call(u,b),f=c?e[b].toUpperCase():r;return c&&-1<V.call(D,_+f)&&zt(f),o=D.push((c?P:_)+r)-1,I=I.concat(I.length?",":"",c?f+'[is="'+t.toLowerCase()+'"]':f),a.prototype=R[o]=G.call(u,"prototype")?u.prototype:ct(pt),I.length&&Rt(n.querySelectorAll(I),v),a},n.createElement=Ot=function(t,e){var r=Wt(e),o=r?wt.call(n,t,ut(r)):wt.call(n,t),i=""+t,a=V.call(D,(r?P:_)+(r||i).toUpperCase()),u=-1<a;return r&&(o.setAttribute("is",r=r.toLowerCase()),u&&(u=Vt(i.toUpperCase(),r))),Ft=!n.createElement.innerHTMLHelper,u&&p(o,R[a]),o}),Xt.prototype={constructor:Xt,define:J?function(t,e,n){if(n)$t(t,e,n);else{var r=t.toUpperCase();ot[r]={constructor:e,create:[r]},at.set(e,r),W.define(t,e)}}:$t,get:J?function(t){return W.get(t)||Qt(t)}:Qt,whenDefined:J?function(t){return nt.race([W.whenDefined(t),te(t)])}:te},!W||/^force/.test(e.type))ee();else if(!e.noBuiltIn)try{!function(e,r,o){var i=new RegExp("^<a\\s+is=('|\")"+o+"\\1></a>$");if(r[b]="a",(e.prototype=ct(ft.prototype)).constructor=e,t.customElements.define(o,e,r),!i.test(n.createElement("a",{is:o}).outerHTML)||!i.test((new e).outerHTML))throw r}(function t(){return Reflect.construct(ft,[],t)},{},"document-register-element-a")}catch(t){ee()}if(!e.noBuiltIn)try{wt.call(n,"a","a")}catch(t){ut=function(t){return{is:t.toLowerCase()}}}}t.exports=n,n(e)}).call(this,n(12))},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(14),o=n(15);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(0);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(1),o=n(0),i=n(16),a=n(17);function u(e){var n="function"==typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},u(e)}t.exports=u},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(11),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"==typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{(s=e.regeneratorRuntime=l?t.exports:{}).wrap=b;var f="suspendedStart",p="suspendedYield",h="executing",m="completed",d={},y={};y[a]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==r&&o.call(g,a)&&(y=g);var L=w.prototype=T.prototype=Object.create(y);M.prototype=L.constructor=w,w.constructor=M,w[c]=M.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===M||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},s.awrap=function(t){return{__await:t}},H(O.prototype),O.prototype[u]=function(){return this},s.AsyncIterator=O,s.async=function(t,e,n,r){var o=new O(b(t,e,n,r));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},H(L),L[c]="Generator",L[a]=function(){return this},L.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function b(t,e,n,r){var o=e&&e.prototype instanceof T?e:T,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=E(t,e,n);if("normal"===c.type){if(r=n.done?m:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function E(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function T(){}function M(){}function w(){}function H(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var u=E(t[n],t,r);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=E(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=Object.create(HTMLElement.prototype);r.attachedCallback=function(){this.classList.add("upgraded")},t.exports=document.registerElement("a-face",{prototype:r})},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var r=n(0);function o(e,n,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=o=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},,,,,function(t,e,n){"use strict";n.r(e);n(2),n(3);var r=n(4),o=n.n(r),i=(n(13),n(5)),a=n.n(i),u=n(6),c=n.n(u),l=n(7),s=n.n(l),f=n(1),p=n.n(f),h=n(8),m=n.n(h),d=n(9),y=function(t){function e(){return a()(this,e),s()(this,p()(e).apply(this,arguments))}return m()(e,t),c()(e,[{key:"connectedCallback",value:function(){this.classList.add("upgraded")}}]),e}(n.n(d)()(HTMLElement));customElements.define("b-face",y),o()(window);for(var v=[1,2,3],g=0;g<v.length;g++){var L=v[g];console.log(L)}}]);
//# sourceMappingURL=main.js.map