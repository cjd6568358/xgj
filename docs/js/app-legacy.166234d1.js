(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView",ToolsView:"ToolsView",temme:"temme"}[e]||e)+"-legacy."+{DiscuzForumView:"1338d64c",DiscuzMyView:"26a2b0ab",DiscuzThreadView:"638b1468",DiscuzView:"ac0c0ee3","MyView~PasswordListView~PasswordView~SignView":"413dd043",MyView:"18f1faa1",PasswordListView:"332a4aac",PasswordView:"73bc4f97",SignView:"5c636bc4",ToolsView:"5d9dd0cb",temme:"d25d587e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={DiscuzForumView:1,DiscuzMyView:1,DiscuzThreadView:1,DiscuzView:1,MyView:1,PasswordListView:1,PasswordView:1,SignView:1,ToolsView:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView",ToolsView:"ToolsView",temme:"temme"}[e]||e)+"."+{DiscuzForumView:"ab121334",DiscuzMyView:"bc1f892d",DiscuzThreadView:"503ef87b",DiscuzView:"4cd8d5b1","MyView~PasswordListView~PasswordView~SignView":"31d6cfe0",MyView:"e40f241c",PasswordListView:"78d11824",PasswordView:"27346599",SignView:"554b36b2",ToolsView:"746da9e1",temme:"31d6cfe0"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/xgj/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"2bac":function(e,t,n){"use strict";var r=n("5838"),o=n.n(r);o.a},4260:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"h",function(){return m}),n.d(t,"f",function(){return h}),n.d(t,"j",function(){return f}),n.d(t,"e",function(){return w}),n.d(t,"c",function(){return g}),n.d(t,"k",function(){return b}),n.d(t,"g",function(){return V}),n.d(t,"i",function(){return S}),n.d(t,"d",function(){return v}),n.d(t,"b",function(){return y});n("6c7b"),n("96cf");var r=n("3b8d"),o=(n("28a5"),n("0a0d")),i=n.n(o),a=(n("6b54"),n("795b")),s=n.n(a),c=n("db49"),u=n("adb5"),l=n("a78e"),d=n.n(l),p=function(){for(var e="",t=1;t<=32;t++){var n=Math.floor(16*Math.random()).toString(16);e+=n,8!=t&&12!=t&&16!=t&&20!=t||(e+="-")}return e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i()(),t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate();return{year:n,month:r,day:o}},h=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(""),n=5381,r=e.length-1;if("string"==typeof e)for(;r>-1;r--)n+=(n<<5)+e.charCodeAt(r);else for(;r>-1;r--)n+=(n<<5)+e[r];var o=2147483647&n,i="";do{i+=t[63&o]}while(o>>=6);return i},f=function(e,t){d.a.set(e,t,{expires:30})},w=function(e){return d.a.get(e)},g=function(e){d.a.remove(e)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fileName:"",data:"",key:""},t=c["a"][0].host;localStorage.getItem("proxy_host")&&(t=localStorage.getItem("proxy_host")),"undefined"===typeof e.encrypt&&(e.encrypt=!0);var n=document.createElement("form");n.method="post",n.action="".concat(t,"/api/string2File"),n.target="name";var r=document.createElement("input");r.type="hidden",r.name="fileName",r.value=e.fileName,n.appendChild(r);var o=document.createElement("input");o.type="hidden",o.name="data",o.value=e.data,n.appendChild(o);var i=document.createElement("input");i.type="hidden",i.name="key",i.value=e.key,n.appendChild(i),n.addEventListener("submit",function(){var e=1100,t=550,n=(window.screen.availHeight-30-t)/2,r=(window.screen.availWidth-10-e)/2;window.open("about:blank","name","height="+t+", width="+e+", top="+n+", left="+r+",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no")}),document.body.appendChild(n),n.submit()},v=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=c["a"][0].host,localStorage.getItem("v_host")&&(r=localStorage.getItem("proxy_host")),e.next=4,u["a"].post("".concat(r,"/api/encryptAES"),{data:t,key:n});case 4:if(o=e.sent,i=o.data,1!=i.statusCode){e.next=8;break}return e.abrupt("return",i.data);case 8:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=c["a"][0].host,localStorage.getItem("proxy_host")&&(r=localStorage.getItem("proxy_host")),e.next=4,u["a"].post("".concat(r,"/api/decryptAES"),{data:t,key:n});case 4:if(o=e.sent,i=o.data,1!=i.statusCode){e.next=8;break}return e.abrupt("return",i.data);case 8:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Array(new Date(e,t,0).getDate()).fill(0).map(function(e,t){return++t,n?"0"+t:t})},S=function(e){return new s.a(function(t,n){var r=document.createElement("script");r.async=!0,r.src=e,r.onload=function(){t(!0)},r.onerror=function(e){n(!1)},document.body.appendChild(r)})}},"56d7":function(e,t,n){"use strict";n.r(t);n("3b2b"),n("a481"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{staticClass:"view"}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{staticClass:"view"}),e.isLoading?n("div",{staticClass:"loading"},[n("svg",{staticClass:"icon icon-spinner3"},[n("symbol",{attrs:{id:"icon-spinner3",viewBox:"0 0 32 32"}},[n("title",[e._v("spinner3")]),n("path",{attrs:{d:"M16 9.472c-1.030 0-1.865-0.835-1.865-1.865v-5.596c0-1.030 0.835-1.865 1.865-1.865s1.865 0.835 1.865 1.865v5.596c0 1.030-0.835 1.865-1.865 1.865z"}}),n("path",{attrs:{d:"M16 31.155c-0.644 0-1.166-0.522-1.166-1.166v-5.596c0-0.644 0.522-1.166 1.166-1.166s1.166 0.522 1.166 1.166v5.596c0 0.644-0.522 1.166-1.166 1.166z"}}),n("path",{attrs:{d:"M11.805 10.48c-0.604 0-1.192-0.314-1.516-0.875l-2.798-4.846c-0.483-0.836-0.196-1.906 0.64-2.389s1.906-0.196 2.389 0.64l2.798 4.846c0.483 0.836 0.196 1.906-0.64 2.389-0.275 0.159-0.576 0.235-0.873 0.235z"}}),n("path",{attrs:{d:"M22.995 29.164c-0.363 0-0.715-0.188-0.91-0.525l-2.798-4.846c-0.29-0.502-0.118-1.143 0.384-1.433s1.143-0.118 1.433 0.384l2.798 4.846c0.29 0.502 0.118 1.143-0.384 1.433-0.165 0.095-0.346 0.141-0.524 0.141z"}}),n("path",{attrs:{d:"M8.729 13.436c-0.277 0-0.557-0.070-0.814-0.219l-4.846-2.798c-0.781-0.451-1.048-1.449-0.597-2.229s1.449-1.048 2.229-0.597l4.846 2.798c0.781 0.451 1.048 1.449 0.597 2.229-0.302 0.524-0.851 0.816-1.415 0.816z"}}),n("path",{attrs:{d:"M28.114 23.927c-0.158 0-0.319-0.040-0.465-0.125l-4.846-2.798c-0.446-0.258-0.599-0.828-0.341-1.274s0.828-0.599 1.274-0.341l4.846 2.798c0.446 0.258 0.599 0.828 0.341 1.274-0.173 0.299-0.486 0.466-0.809 0.466z"}}),n("path",{attrs:{d:"M7.607 17.515h-5.596c-0.837 0-1.516-0.678-1.516-1.515s0.678-1.515 1.516-1.515h5.596c0.837 0 1.516 0.678 1.516 1.515s-0.678 1.515-1.516 1.515z"}}),n("path",{attrs:{d:"M29.989 16.933c-0 0 0 0 0 0h-5.596c-0.515-0-0.933-0.418-0.933-0.933s0.418-0.933 0.933-0.933c0 0 0 0 0 0h5.596c0.515 0 0.933 0.418 0.933 0.933s-0.418 0.933-0.933 0.933z"}}),n("path",{attrs:{d:"M3.886 24.394c-0.483 0-0.954-0.251-1.213-0.7-0.386-0.669-0.157-1.525 0.512-1.911l4.846-2.798c0.669-0.387 1.525-0.157 1.911 0.512s0.157 1.525-0.512 1.911l-4.846 2.798c-0.22 0.127-0.461 0.188-0.698 0.188z"}}),n("path",{attrs:{d:"M23.27 12.736c-0.322 0-0.636-0.167-0.809-0.466-0.258-0.446-0.105-1.016 0.341-1.274l4.846-2.798c0.446-0.257 1.016-0.105 1.274 0.341s0.105 1.016-0.341 1.274l-4.846 2.798c-0.147 0.085-0.307 0.125-0.465 0.125z"}}),n("path",{attrs:{d:"M9.004 29.397c-0.218 0-0.438-0.055-0.64-0.172-0.613-0.354-0.823-1.138-0.469-1.752l2.798-4.846c0.354-0.613 1.138-0.823 1.752-0.469s0.823 1.138 0.469 1.752l-2.798 4.846c-0.237 0.411-0.668 0.641-1.112 0.641z"}}),n("path",{attrs:{d:"M20.196 9.664c-0.158 0-0.319-0.040-0.465-0.125-0.446-0.258-0.599-0.828-0.341-1.274l2.798-4.846c0.258-0.446 0.828-0.599 1.274-0.341s0.599 0.828 0.341 1.274l-2.798 4.846c-0.173 0.299-0.486 0.466-0.809 0.466z"}})]),n("use",{attrs:{"xlink:href":"#icon-spinner3"}})])]):e._e()],1)},i=[],a=n("cebc"),s=n("2f62"),c={name:"App",data:function(){return{}},computed:Object(a["a"])({},Object(s["d"])(["isLoading"])),methods:{}},u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,o,i,!1,null,null,null),p=d.exports,m=n("8c4f"),h=function(){return Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("SignView")]).then(n.bind(null,"3401"))},f=function(){return n.e("ToolsView").then(n.bind(null,"1a91"))},w=function(){return n.e("DiscuzView").then(n.bind(null,"bb62"))},g=function(){return n.e("DiscuzForumView").then(n.bind(null,"820c"))},b=function(){return n.e("DiscuzMyView").then(n.bind(null,"4513"))},v=function(){return n.e("DiscuzThreadView").then(n.bind(null,"4cc1"))},y=function(){return Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("MyView")]).then(n.bind(null,"eb88"))},V=function(){return Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordListView")]).then(n.bind(null,"1303"))},S=function(){return Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordView")]).then(n.bind(null,"3180"))};r["a"].use(m["a"]);var P=new m["a"]({mode:"history",base:"/xgj/",routes:[{path:"/tools",name:"ToolsView",component:f},{path:"/discuz",name:"DiscuzView",component:w,meta:{keepAlive:!0}},{path:"/discuz/forum/:url",name:"DiscuzForumView",component:g,props:!0,meta:{keepAlive:!0}},{path:"/discuz/my",name:"DiscuzMyView",component:b},{path:"/discuz/thread/:url",name:"DiscuzThreadView",component:v,props:!0},{path:"/sign",name:"SignView",component:h},{path:"/password",name:"PasswordListView",component:V},{path:"/password/:type/:id?",name:"PasswordView",component:S,props:!0},{path:"/my",name:"MyView",component:y},{path:"*",redirect:"/tools"}]}),$=n("e814"),x=n.n($),C=(n("96cf"),n("3b8d")),k=(n("20d6"),n("5176")),M=n.n(k),T=n("b383"),L=n.n(T),z=n("4260"),D=n("dc16"),O=n("db49"),_=n("adb5");r["a"].use(s["a"]);var j=localStorage.getItem("proxy_host")||O["a"][0].host,E="client";localStorage.getItem("temmeConvert")?E=localStorage.getItem("temmeConvert"):localStorage.setItem("temmeConvert",E);var N=!!Object(z["e"])("cdb3_auth"),I=JSON.parse(localStorage.getItem("webSiteList")||"[]"),A=Object(z["e"])("webSite")||I[0],R="true"===localStorage.getItem("debug");R&&Object(z["i"])("https://wechatfe.github.io/vconsole/lib/vconsole.min.js").then(function(){new window.VConsole});var H,U,F=new s["a"].Store({state:{isLoading:!1,debug:R,temmeConvert:E,discuz:{formhash:"",HOST:j,isLogin:N,webSiteList:I,webSite:A,userInfo:{username:"",password:"",QA:"",creditList:[]},signInfo:{isSigned:!1,tid:null,lastPostUrl:""}}},mutations:{SET_HOST:function(e,t){e.discuz.HOST=t},SET_TEMMECONVERT:function(e,t){e.temmeConvert=t},SET_LOADING_STATUS:function(e,t){e.isLoading=t},UPDATE_DISCUZ:function(e,t){t.webSite&&Object(z["j"])("webSite",t.webSite),M()(e.discuz,t)}},actions:{logout:function(){Object(z["c"])("cdb3_auth"),sessionStorage.clear(),location.reload()},switchProxy:function(e){var t=e.commit,n=e.state,r=O["a"][0].host,o=O["a"].findIndex(function(e){return e.host===n.discuz.HOST});o<O["a"].length-1&&(r=O["a"][o+1].host),localStorage.setItem("proxy_host",r),t("SET_HOST",r)},switchTemmeConvert:function(e){var t=e.commit,n=e.state,r="client"===n.temmeConvert?"server":"client";localStorage.setItem("temmeConvert",r),t("SET_TEMMECONVERT",r)},submitPost:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=t.state,i=o.discuz.HOST,a={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"},M()(a.httpConfig,n),r("SET_LOADING_STATUS",!0),e.next=7,_["a"].post("".concat(i,"/api/advancedProxy"),a);case 7:r("SET_LOADING_STATUS",!1);case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),submitReply:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,a,s,c,u,l,d,p,m,h,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.dispatch,o=t.state,i=t.getters,a=n.fid,s=n.tid,c=n.message,u=void 0===c?"":c,l=n.subject,d=void 0===l?"":l,p=o.isLoading,m=o.discuz.formhash,h=i.targetHost,!p&&u){e.next=6;break}return e.abrupt("return");case 6:return f={url:"".concat(h,"post.php?action=reply&fid=").concat(a,"&tid=").concat(s,"&extra=page%3D1&replysubmit=yes"),data:L.a.stringify({formhash:m,message:u,subject:d})},e.next=9,r("submitPost",f);case 9:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),dailySignIn:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a,s,c,u,l,d,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.dispatch,r=t.state,o=t.getters,i=r.isLoading,a=r.discuz,s=a.userInfo.username,c=a.formhash,u=a.signInfo,l=o.targetHost,!i){e.next=5;break}return e.abrupt("return");case 5:return d={},p="ID: ".concat(s,"\r\n日期: ").concat((new Date).Format("yyyy.M.dd"),"\r\n心情: ......"),u.tid?M()(d,{url:"".concat(l,"post.php?action=reply&fid=420&tid=").concat(u.tid,"&extra=&replysubmit=yes"),data:L.a.stringify({formhash:c,message:p,subject:""})}):M()(d,{url:"".concat(l,"post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes"),data:L.a.stringify({formhash:c,message:p,frombbs:1,typeid:797,selecttypeid:797,readperm:101,subject:"".concat(s,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")})}),e.next=10,n("submitPost",d);case 10:u.isSigned=!0;case 11:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),monthSignIn:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a,s,c,u,l,d,p,m,h,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.dispatch,r=t.state,o=t.getters,!(confirm("确认上报上月签到数据吗?")&&confirm("再次确认")&&confirm("三次确认"))){e.next=17;break}if(i=r.discuz,a=i.formhash,s=i.userInfo.username,c=i.signInfo.lastPostUrl,u=o.targetHost,c){e.next=6;break}return e.abrupt("return");case 6:return l="".concat(u+c),d=D["a"].thread,e.next=10,n("getPageData",{url:l,selector:d});case 10:return p=e.sent,m=p.postList.slice(-1)[0],h={pid:m.pid,tid:c.replace(/[^\d]/g,""),count:x()(m.postFloor),absPostUrl:m.absPostUrl},f={url:"".concat(u,"post.php?action=reply&fid=420&tid=6953091&extra=page%3D1&replysubmit=yes"),data:L.a.stringify({formhash:a,subject:"",message:"ID: ".concat(s,"\r\n签到次数: ").concat(h.count,"\r\n签到链接: [bbs]").concat(encodeURIComponent("thread-".concat(h.tid,"-1-1.html")),"[/bbs]"),fid:420,wysiwyg:0})},e.next=16,n("submitPost",f);case 16:alert("上报成功!");case 17:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getPageData:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,a,s,c,u,l,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=t.state,i=n.url,a=n.selector,s=n.HOST,c=void 0===s?o.discuz.HOST:s,u={httpConfig:{url:i,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:a},r("SET_LOADING_STATUS",!0),e.next=6,_["a"].post("".concat(c,"/api/html2Json"),u);case 6:return l=e.sent,d=l.data.data,r("SET_LOADING_STATUS",!1),e.abrupt("return",d);case 10:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{targetHost:function(e){return"http://".concat(e.discuz.webSite,"/bbs/")}}}),B={name:"ModalComponent",props:{customClass:{default:""},customStyle:{default:null},content:{default:{}},maskClosable:{default:!1},showCloseBtn:{default:!1},position:{default:"center"}},data:function(){return{animateClass:this.getAnimateClass()}},mounted:function(){this.addEventHandler(),this.$emit("modalMounted")},beforeDestroy:function(){this.removeEventHandler(),this.$emit("modalBeforeDestroy")},methods:{getAnimateClass:function(){switch(this.position){case"top":return"slide-down";case"right":return"slide-left";case"bottom":return"slide-up";case"left":return"slide-right";default:return"fade-in"}},addEventHandler:function(){if(window.modalList&&0!=window.modalList.length?window.removeEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1):(window.modalList=[],history.pushState(null,null,location.href)),window.addEventListener("popstate",this.closeModal,!1),window.modalList.push(this),!(window.modalList.length>1)){var e=document.querySelector(".overflow-container");e&&(e.style.overflowY="hidden",e.style.webkitOverflowScrolling="auto")}},removeEventHandler:function(){if(window.removeEventListener("popstate",this.closeModal,!1),document.body.scrollIntoView(),!(window.modalList.length>0)){var e=document.querySelector(".overflow-container");e&&(e.style.overflowY="auto",e.style.webkitOverflowScrolling="touch")}},closeModal:function(e){var t=this,n=t.animateClass,r=t.$el;if(e&&"click"==e.type){if(1==window.modalList.length)return void history.back();e.stopPropagation()}window.modalList.pop(),window.modalList.length&&(e&&"popstate"==e.type&&history.pushState(null,null,location.href),window.addEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1)),t.animateClass="".concat(n,"-reverse"),t.$nextTick().then(function(){setTimeout(function(){t.$destroy(),document.body.removeChild(r)},300)})},closeBtnClick:function(e){this.$listeners.closeBtnClick||this._events.closeBtnClick?this.$emit("closeBtnClick",e):this.closeModal(e)},maskClick:function(e){this.maskClosable&&(this.$emit("maskClick"),this.closeModal(e))}},computed:{wrapperClass:function(){var e=this.customClass;return"modal-wrapper ".concat(e)},modalClass:function(){var e=this.animateClass,t=this.position;return"modal-".concat(t," ").concat(e)}},render:function(){var e=arguments[0],t=this.wrapperClass,n=this.customStyle,r=this.content,o=this.showCloseBtn,i=this.modalClass,a=this.closeModal,s=this.closeBtnClick,c=this.maskClick;if(r.componentOptions){var u=r.componentOptions.listeners,l=void 0===u?{}:u;l.closeModal=a,r.componentOptions.listeners=l}return e("div",{class:"hmc-modal-root"},[e("div",{class:t},[e("div",{class:"modal"},[e("div",{class:i,on:{click:c}},[e("div",{class:"modal-container",style:n,on:{click:function(e){return e.stopPropagation()}}},[r,o&&e("svg",{class:"modal-close-btn",on:{click:s}},[e("use",{attrs:{"xlink:href":"#icon-close"}})])])])])])])}},q=B,J=(n("2bac"),Object(l["a"])(q,H,U,!1,null,null,null)),G=J.exports;function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.$router,n=this.$store,o=new r["a"]({router:t,store:n,render:function(t){return t(G,{props:e})}});return document.body.appendChild(o.$mount().$el),o.$children[0]}var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toast",class:{hide:e.isHide}},[n("div",{class:[e.customClass,e.type],on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},["info"==e.type?n("div",{staticClass:"content",class:[e.position]},[e._v("\n            "+e._s(e.msg)+"\n        ")]):n("div",{staticClass:"content"},[e._v("\n            "+e._s(e.msg)+"\n        ")])])])},W=[],Q=(n("c5f6"),{name:"Toast",props:{type:{type:String,default:"info"},msg:{type:String,default:""},position:{type:String,default:"center"},customClass:{type:String,default:""},duration:{type:Number,default:1500},onClose:{type:Function,default:function(){}}},data:function(){return{isHide:!1}},mounted:function(){var e=this;setTimeout(function(){e.isHide=!0,e.onClose(),setTimeout(function(){e.$destroy(),e.$el.remove()},500)},this.duration)},computed:{},methods:{}}),Z=Q,X=(n("83fe"),Object(l["a"])(Z,K,W,!1,null,null,null)),ee=X.exports,te={init:function(e,t){return"string"===typeof e?e={msg:e,type:t}:e.type=t,new r["a"]({render:function(t){return t(ee,{props:Object(a["a"])({},e)})}}).$mount().$el},info:function(e){document.body.appendChild(this.init(e,"info"))},normal:function(e){var t=e.el,n=void 0===t?document.querySelector("div[class$='-page view']")||document.body:t;n.appendChild(this.init(e,"normal"))},error:function(e){var t=e.el,n=void 0===t?document.querySelector("div[class$='-page view']")||document.body:t;n.appendChild(this.init(e,"error"))}},ne=n("9483");Object(ne["a"])("".concat("/xgj/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh."),location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].prototype.$openModal=Y,r["a"].prototype.$Toast=te,Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new r["a"]({router:P,store:F,render:function(e){return e(p)}}).$mount("#app")},5838:function(e,t,n){},"64a9":function(e,t,n){},"83fe":function(e,t,n){"use strict";var r=n("a5c5"),o=n.n(r);o.a},a5c5:function(e,t,n){},adb5:function(e,t,n){"use strict";var r=n("795b"),o=n.n(r),i=(n("a481"),n("6762"),n("2fdb"),n("96cf"),n("3b8d")),a=n("bc3a"),s=n.n(a),c=n("74e2"),u=n.n(c),l=null,d=new u.a({maxSockets:100,maxFreeSockets:10,timeout:6e4,freeSocketTimeout:3e4}),p=s.a.create({withCredentials:!0});p.defaults.httpAgent=d,p.interceptors.request.use(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=localStorage.getItem("temmeConvert"),t.url.includes("html2Json")&&"client"===n&&(t.temmeConvert=n,t.url=t.url.replace("html2Json","advancedProxy")),document.cookie&&(t.headers["corscookies"]=document.cookie),e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.reject(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),p.interceptors.response.use(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("client"!==t.config.temmeConvert){e.next=9;break}if(l){e.next=7;break}return e.next=4,n.e("temme").then(n.bind(null,"0b74"));case 4:r=e.sent,o=r.default,l=o;case 7:i=JSON.parse(t.config.data).selector,t.data.data=l(t.data.data,i);case 9:return console.log("request url:"+t.request.responseURL),e.abrupt("return",t);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.reject(t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),t["a"]=p},db49:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=[{protocol:"all",host:"//common-server.herokuapp.com",platom:"HEROKUAPP",gfw:!0},{protocol:"https",host:"https://common-server.cjd6568358.now.sh",platom:"NOW",gfw:!0},{protocol:"https",host:"https://cjd6568358.3322.org:6707",platom:"N270",gfw:!1}]},dc16:function(e,t,n){"use strict";t["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    #postform[action=$replyUrl];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}}});