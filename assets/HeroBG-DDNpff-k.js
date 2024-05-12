import{a as axios}from"./axios-B6xwUs71.js";import{c as commonjsGlobal,g as getDefaultExportFromCjs}from"./commonjsHelpers-Cpj98o6Y.js";import{g as defineComponent,h as onMounted,n as nextTick,u as useRouter,r as resolveComponent,o as openBlock,i as createBlock,w as withCtx,a as createBaseVNode,_ as _export_sfc}from"./app-Y-o7CDON.js";var assign=make_assign(),create$1=make_create(),trim$1=make_trim(),Global$5=typeof window<"u"?window:commonjsGlobal,util$6={assign,create:create$1,trim:trim$1,bind:bind$1,slice:slice$1,each:each$7,map,pluck:pluck$1,isList:isList$1,isFunction:isFunction$1,isObject:isObject$1,Global:Global$5};function make_assign(){return Object.assign?Object.assign:function(t,r,a,o){for(var i=1;i<arguments.length;i++)each$7(Object(arguments[i]),function(l,s){t[s]=l});return t}}function make_create(){if(Object.create)return function(t,r,a,o){var i=slice$1(arguments,1);return assign.apply(this,[Object.create(t)].concat(i))};{let e=function(){};return function(r,a,o,i){var l=slice$1(arguments,1);return e.prototype=r,assign.apply(this,[new e].concat(l))}}}function make_trim(){return String.prototype.trim?function(t){return String.prototype.trim.call(t)}:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind$1(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function slice$1(e,t){return Array.prototype.slice.call(e,t||0)}function each$7(e,t){pluck$1(e,function(r,a){return t(r,a),!1})}function map(e,t){var r=isList$1(e)?[]:{};return pluck$1(e,function(a,o){return r[o]=t(a,o),!1}),r}function pluck$1(e,t){if(isList$1(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var a in e)if(e.hasOwnProperty(a)&&t(e[a],a))return e[a]}function isList$1(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"}function isFunction$1(e){return e&&{}.toString.call(e)==="[object Function]"}function isObject$1(e){return e&&{}.toString.call(e)==="[object Object]"}var util$5=util$6,slice=util$5.slice,pluck=util$5.pluck,each$6=util$5.each,bind=util$5.bind,create=util$5.create,isList=util$5.isList,isFunction=util$5.isFunction,isObject=util$5.isObject,storeEngine={createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return t===void 0?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(r,a){e.call(t,t._deserialize(r),(a||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return createStore.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return createStore(this.storage,this.plugins,e)}};function _warn(){var e=typeof console>"u"?null:console;if(e){var t=e.warn?e.warn:e.log;t.apply(e,arguments)}}function createStore(e,t,r){r||(r=""),e&&!isList(e)&&(e=[e]),t&&!isList(t)&&(t=[t]);var a=r?"__storejs_"+r+"_":"",o=r?new RegExp("^"+a):null,i=/^[a-zA-Z0-9_\-]*$/;if(!i.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var l={_namespacePrefix:a,_namespaceRegexp:o,_testStorage:function(n){try{var u="__storejs__test__";n.write(u,u);var c=n.read(u)===u;return n.remove(u),c}catch{return!1}},_assignPluginFnProp:function(n,u){var c=this[u];this[u]=function(){var g=slice(arguments,0),m=this;function p(){if(c)return each$6(arguments,function(h,$){g[$]=h}),c.apply(m,g)}var v=[p].concat(g);return n.apply(m,v)}},_serialize:function(n){return JSON.stringify(n)},_deserialize:function(n,u){if(!n)return u;var c="";try{c=JSON.parse(n)}catch{c=n}return c!==void 0?c:u},_addStorage:function(n){this.enabled||this._testStorage(n)&&(this.storage=n,this.enabled=!0)},_addPlugin:function(n){var u=this;if(isList(n)){each$6(n,function(g){u._addPlugin(g)});return}var c=pluck(this.plugins,function(g){return n===g});if(!c){if(this.plugins.push(n),!isFunction(n))throw new Error("Plugins must be function values that return objects");var d=n.call(this);if(!isObject(d))throw new Error("Plugins must return an object of function properties");each$6(d,function(g,m){if(!isFunction(g))throw new Error("Bad plugin property: "+m+" from plugin "+n.name+". Plugins should only return functions.");u._assignPluginFnProp(g,m)})}},addStorage:function(n){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(n)}},s=create(l,storeAPI,{plugins:[]});return s.raw={},each$6(s,function(n,u){isFunction(n)&&(s.raw[u]=bind(s,n))}),each$6(e,function(n){s._addStorage(n)}),each$6(t,function(n){s._addPlugin(n)}),s}var util$4=util$6,Global$4=util$4.Global,localStorage_1={name:"localStorage",read:read$5,write:write$5,each:each$5,remove:remove$5,clearAll:clearAll$5};function localStorage(){return Global$4.localStorage}function read$5(e){return localStorage().getItem(e)}function write$5(e,t){return localStorage().setItem(e,t)}function each$5(e){for(var t=localStorage().length-1;t>=0;t--){var r=localStorage().key(t);e(read$5(r),r)}}function remove$5(e){return localStorage().removeItem(e)}function clearAll$5(){return localStorage().clear()}var util$3=util$6,Global$3=util$3.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$4,write:write$4,each:each$4,remove:remove$4,clearAll:clearAll$4},globalStorage=Global$3.globalStorage;function read$4(e){return globalStorage[e]}function write$4(e,t){globalStorage[e]=t}function each$4(e){for(var t=globalStorage.length-1;t>=0;t--){var r=globalStorage.key(t);e(globalStorage[r],r)}}function remove$4(e){return globalStorage.removeItem(e)}function clearAll$4(){each$4(function(e,t){delete globalStorage[e]})}var util$2=util$6,Global$2=util$2.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$3,read:read$3,each:each$3,remove:remove$3,clearAll:clearAll$3},storageName="storejs",doc$1=Global$2.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$2.navigator?Global$2.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$3(e,t){if(!disable){var r=fixKey(e);_withStorageEl(function(a){a.setAttribute(r,t),a.save(storageName)})}}function read$3(e){if(!disable){var t=fixKey(e),r=null;return _withStorageEl(function(a){r=a.getAttribute(t)}),r}}function each$3(e){_withStorageEl(function(t){for(var r=t.XMLDocument.documentElement.attributes,a=r.length-1;a>=0;a--){var o=r[a];e(t.getAttribute(o.name),o.name)}})}function remove$3(e){var t=fixKey(e);_withStorageEl(function(r){r.removeAttribute(t),r.save(storageName)})}function clearAll$3(){_withStorageEl(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(storageName);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(e){return e.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc$1||!doc$1.documentElement||!doc$1.documentElement.addBehavior)return null;var e="script",t,r,a;try{r=new ActiveXObject("htmlfile"),r.open(),r.write("<"+e+">document.w=window</"+e+'><iframe src="/favicon.ico"></iframe>'),r.close(),t=r.w.frames[0].document,a=t.createElement("div")}catch{a=doc$1.createElement("div"),t=doc$1.body}return function(o){var i=[].slice.call(arguments,0);i.unshift(a),t.appendChild(a),a.addBehavior("#default#userData"),a.load(storageName),o.apply(this,i),t.removeChild(a)}}var util$1=util$6,Global$1=util$1.Global,trim=util$1.trim,cookieStorage={name:"cookieStorage",read:read$2,write:write$2,each:each$2,remove:remove$2,clearAll:clearAll$2},doc=Global$1.document;function read$2(e){if(!e||!_has(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc.cookie.replace(new RegExp(t),"$1"))}function each$2(e){for(var t=doc.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(trim(t[r])){var a=t[r].split("="),o=unescape(a[0]),i=unescape(a[1]);e(i,o)}}function write$2(e,t){e&&(doc.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$2(e){!e||!_has(e)||(doc.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$2(){each$2(function(e,t){remove$2(t)})}function _has(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc.cookie)}var util=util$6,Global=util.Global,sessionStorage_1={name:"sessionStorage",read:read$1,write:write$1,each:each$1,remove:remove$1,clearAll:clearAll$1};function sessionStorage(){return Global.sessionStorage}function read$1(e){return sessionStorage().getItem(e)}function write$1(e,t){return sessionStorage().setItem(e,t)}function each$1(e){for(var t=sessionStorage().length-1;t>=0;t--){var r=sessionStorage().key(t);e(read$1(r),r)}}function remove$1(e){return sessionStorage().removeItem(e)}function clearAll$1(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read,write,each,remove,clearAll},memoryStorage={};function read(e){return memoryStorage[e]}function write(e,t){memoryStorage[e]=t}function each(e){for(var t in memoryStorage)memoryStorage.hasOwnProperty(t)&&e(memoryStorage[t],t)}function remove(e){delete memoryStorage[e]}function clearAll(e){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],json2$1={},hasRequiredJson2;function requireJson2(){return hasRequiredJson2||(hasRequiredJson2=1,typeof JSON!="object"&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(t){var r=meta[t];return typeof r=="string"?r:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,a,o,i,l=gap,s,n=t[e];switch(n&&typeof n=="object"&&typeof n.toJSON=="function"&&(n=n.toJSON(e)),typeof rep=="function"&&(n=rep.call(t,e,n)),typeof n){case"string":return quote(n);case"number":return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";if(gap+=indent,s=[],Object.prototype.toString.apply(n)==="[object Array]"){for(i=n.length,r=0;r<i;r+=1)s[r]=str(r,n)||"null";return o=s.length===0?"[]":gap?`[
`+gap+s.join(`,
`+gap)+`
`+l+"]":"["+s.join(",")+"]",gap=l,o}if(rep&&typeof rep=="object")for(i=rep.length,r=0;r<i;r+=1)typeof rep[r]=="string"&&(a=rep[r],o=str(a,n),o&&s.push(quote(a)+(gap?": ":":")+o));else for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o=str(a,n),o&&s.push(quote(a)+(gap?": ":":")+o));return o=s.length===0?"{}":gap?`{
`+gap+s.join(`,
`+gap)+`
`+l+"}":"{"+s.join(",")+"}",gap=l,o}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var a;if(gap="",indent="",typeof r=="number")for(a=0;a<r;a+=1)indent+=" ";else typeof r=="string"&&(indent=r);if(rep=t,t&&typeof t!="function"&&(typeof t!="object"||typeof t.length!="number"))throw new Error("JSON.stringify");return str("",{"":e})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,a,o=e[t];if(o&&typeof o=="object")for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a=walk(o,r),a!==void 0?o[r]=a:delete o[r]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()),json2$1}var json2=json2Plugin;function json2Plugin(){return requireJson2(),{}}var engine=storeEngine,storages=all,plugins=[json2],store_legacy=engine.createStore(storages,plugins);const store=getDefaultExportFromCjs(store_legacy),mStorage=store,LoadImage=e=>{const t=new Image;t.src=e,t.onload=()=>{}},_hoisted_1=createBaseVNode("div",{class:"none"},"Bing壁纸",-1),_sfc_main=defineComponent({__name:"HeroBG",setup(e){const t=()=>{var g,m,p,v,h;let o=window.location.pathname,i=mStorage.get("BingImgIndex");const l=mStorage.get("BingImgList");(!i||i<0)&&(i=0),i>l.length-1&&(i=l.length-1),mStorage.set("BingImgIndex",i);const s=document.querySelector(".vp-blog-mask");i==0&&((g=document.getElementById("leftNav"))==null||g.classList.add("disabled")),i==l.length-1&&((m=document.getElementById("rightNav"))==null||m.classList.add("disabled")),i>0&&i<l.length-1&&((p=document.getElementById("leftNav"))==null||p.classList.remove("disabled"),(v=document.getElementById("rightNav"))==null||v.classList.remove("disabled"));let n=l[i];o.includes("/en")&&(n=n.EN);const u=document.getElementById("bingLink_text");u&&(u.innerHTML=n.Title),(h=document.getElementById("bingLink"))==null||h.setAttribute("href",n.CopyrightLink);const c=n.Path;s.style.background="",s.style.backgroundImage=`url(${c})`;const d=document.querySelector(".vp-footer-wrapper");d.style.backgroundImage=`url(${c})`},r=o=>{var u;const i=document.querySelector(".vp-blog-mask");if(!i)return;const l=mStorage.get("BingImgList");if(l&&l.length<1)return;if(!document.getElementById("BingSwitchWrapper")){const c=document.createElement("div");c.id="BingSwitchWrapper",c.innerHTML=`
<a href="" target="_Blank" id="bingLink">
  <div class="bingLink_icon"><svg class="mapPin" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path d="M0 0h12v12h-12z" fill="none"></path><path d="M6.5 3a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0-3a4.5 4.5 0 0 0-4.5 4.5 5.607 5.607 0 0 0 .087.873c.453 2.892 2.951 5.579 3.706 6.334a1 1 0 0 0 1.414 0c.755-.755 3.253-3.442 3.706-6.334a5.549 5.549 0 0 0 .087-.873 4.5 4.5 0 0 0-4.5-4.5zm3.425 5.218c-.36 2.296-2.293 4.65-3.425 5.782-1.131-1.132-3.065-3.486-3.425-5.782a4.694 4.694 0 0 1-.075-.718 3.5 3.5 0 0 1 7 0 4.634 4.634 0 0 1-.075.718z"></path></svg></div>
  <div id="bingLink_text"></div>
</a>
<div id="leftNav"></div>
<div id="rightNav"></div>`,(u=i.parentElement)==null||u.insertBefore(c,i)}const s=document.getElementById("leftNav"),n=document.getElementById("rightNav");s&&n&&(t(),s.onclick=()=>{let c=mStorage.get("BingImgIndex");c--,mStorage.set("BingImgIndex",c),t()},n.onclick=()=>{let c=mStorage.get("BingImgIndex");c++,mStorage.set("BingImgIndex",c),t()})},a=()=>{axios({method:"get",url:"//file.mo7.cc/api/public/url",params:{}}).then(o=>{const i=o.data.Data;if(!(i&&i.length<1)){for(const l of i)LoadImage(l.Path);mStorage.set("BingImgList",i),r()}})};return onMounted(()=>{nextTick(()=>{a()}),useRouter().beforeEach(i=>{nextTick(()=>{setTimeout(()=>{r()},50)})})}),(o,i)=>{const l=resolveComponent("ClientOnly");return openBlock(),createBlock(l,null,{default:withCtx(()=>[_hoisted_1]),_:1})}}}),HeroBG=_export_sfc(_sfc_main,[["__file","HeroBG.vue"]]);export{HeroBG as default};
