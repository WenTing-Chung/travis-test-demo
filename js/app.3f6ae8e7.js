(function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/travis-test-demo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"31f2":function(e,t,n){"use strict";var o=n("ebce"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{attrs:{"data-cafe":"testcafe-h1"}},[e._v("HELLO CI/CD")]),n("h2",[e._v("測試3 localhost CI")]),n("ul",{staticClass:"list"},e._l(e.data,(function(t){return n("li",{key:t,staticClass:"list-item"},[n("PuSkeleton",{attrs:{height:"200px",width:"200px",loading:e.isLoading}},[n("img",{attrs:{src:"https://picsum.photos/200",alt:""}})])],1)})),0)])},a=[],s={name:"HelloWorld",props:{msg:String},data:function(){return{data:5,isLoading:!1}},created:function(){this.getLoading()},methods:{getLoading:function(){var e=this;this.isLoading=!0,setTimeout((function(){e.isLoading=!1}),3e3)}}},l=s,u=(n("31f2"),n("2877")),f=Object(u["a"])(l,c,a,!1,null,null,null),p=f.exports,d={name:"App",components:{HelloWorld:p}},g=d,h=(n("034f"),Object(u["a"])(g,r,i,!1,null,null,null)),v=h.exports,b=n("d18b"),m=n("9483");Object(m["a"])("".concat("/travis-test-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,o["a"].use(b["a"]),new o["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ebce:function(e,t,n){}});
//# sourceMappingURL=app.3f6ae8e7.js.map