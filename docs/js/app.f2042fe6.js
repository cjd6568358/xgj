(function(e){function t(t){for(var o,i,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)i=r[d],s[i]&&u.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},s={app:0},a=[];function r(e){return l.p+"js/"+({DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView",ToolsView:"ToolsView",temme:"temme"}[e]||e)+"."+{DiscuzForumView:"1898a186",DiscuzMyView:"fc517af5",DiscuzThreadView:"a95dda68",DiscuzView:"62853c33","MyView~PasswordListView~PasswordView~SignView":"ffff973c",MyView:"d2627e1f",PasswordListView:"8e25b8e5",PasswordView:"dff4b553",SignView:"ce62b007",ToolsView:"e509a571",temme:"7ab5cf67"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={DiscuzForumView:1,DiscuzMyView:1,DiscuzThreadView:1,DiscuzView:1,MyView:1,PasswordListView:1,PasswordView:1,SignView:1,ToolsView:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var o="css/"+({DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView",ToolsView:"ToolsView",temme:"temme"}[e]||e)+"."+{DiscuzForumView:"bb65618d",DiscuzMyView:"1d2225b7",DiscuzThreadView:"a5426c04",DiscuzView:"4cd8d5b1","MyView~PasswordListView~PasswordView~SignView":"31d6cfe0",MyView:"8754bd7f",PasswordListView:"78d11824",PasswordView:"27346599",SignView:"09ef86e4",ToolsView:"09a19916",temme:"31d6cfe0"}[e]+".css",s=l.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===s))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===o||d===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,delete i[e],m.parentNode.removeChild(m),n(a)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){i[e]=0}));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=s[e]=[t,n]});t.push(o[2]=a);var c,d=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e),c=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}s[e]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,d.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/xgj/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"2bac":function(e,t,n){"use strict";var o=n("5838"),i=n.n(o);i.a},4260:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"h",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"e",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"k",function(){return p}),n.d(t,"g",function(){return w}),n.d(t,"i",function(){return g}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return f});n("28a5"),n("6b54");var o=n("db49"),i=n("adb5"),s=n("a78e"),a=n.n(s);let r=function(){let e="";for(let t=1;t<=32;t++){let n=Math.floor(16*Math.random()).toString(16);e+=n,8!=t&&12!=t&&16!=t&&20!=t||(e+="-")}return e},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate();return{year:n,month:o,day:i}},c=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(""),n=5381,o=e.length-1;if("string"==typeof e)for(;o>-1;o--)n+=(n<<5)+e.charCodeAt(o);else for(;o>-1;o--)n+=(n<<5)+e[o];var i=2147483647&n,s="";do{s+=t[63&i]}while(i>>=6);return s},d=function(e,t){a.a.set(e,t,{expires:30})},u=function(e){return a.a.get(e)},m=function(e){a.a.remove(e)},p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fileName:"",data:"",key:""},t=o["a"][0].host;localStorage.getItem("proxy_host")&&(t=localStorage.getItem("proxy_host")),"undefined"===typeof e.encrypt&&(e.encrypt=!0);let n=document.createElement("form");n.method="post",n.action=`${t}/api/string2File`,n.target="name";var i=document.createElement("input");i.type="hidden",i.name="fileName",i.value=e.fileName,n.appendChild(i);var s=document.createElement("input");s.type="hidden",s.name="data",s.value=e.data,n.appendChild(s);var a=document.createElement("input");a.type="hidden",a.name="key",a.value=e.key,n.appendChild(a),n.addEventListener("submit",()=>{var e=1100,t=550,n=(window.screen.availHeight-30-t)/2,o=(window.screen.availWidth-10-e)/2;window.open("about:blank","name","height="+t+", width="+e+", top="+n+", left="+o+",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no")}),document.body.appendChild(n),n.submit()},h=async function(e,t){let n=o["a"][0].host;localStorage.getItem("v_host")&&(n=localStorage.getItem("proxy_host"));let s=await i["a"].post(`${n}/api/encryptAES`,{data:e,key:t}),a=s.data;if(1==a.statusCode)return a.data},f=async function(e,t){let n=o["a"][0].host;localStorage.getItem("proxy_host")&&(n=localStorage.getItem("proxy_host"));let s=await i["a"].post(`${n}/api/decryptAES`,{data:e,key:t}),a=s.data;if(1==a.statusCode)return a.data},w=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Array(new Date(e,t,0).getDate()).fill(0).map((e,t)=>{return++t,n?"0"+t:t})},g=function(e){return new Promise(function(t,n){var o=document.createElement("script");o.async=!0,o.src=e,o.onload=(()=>{t(!0)}),o.onerror=(e=>{n(!1)}),document.body.appendChild(o)})}},"56d7":function(e,t,n){"use strict";n.r(t);n("3b2b"),n("a481");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{staticClass:"view"}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{staticClass:"view"}),e.isLoading?n("div",{staticClass:"loading"},[n("svg",{staticClass:"icon icon-spinner3"},[n("symbol",{attrs:{id:"icon-spinner3",viewBox:"0 0 32 32"}},[n("title",[e._v("spinner3")]),n("path",{attrs:{d:"M16 9.472c-1.030 0-1.865-0.835-1.865-1.865v-5.596c0-1.030 0.835-1.865 1.865-1.865s1.865 0.835 1.865 1.865v5.596c0 1.030-0.835 1.865-1.865 1.865z"}}),n("path",{attrs:{d:"M16 31.155c-0.644 0-1.166-0.522-1.166-1.166v-5.596c0-0.644 0.522-1.166 1.166-1.166s1.166 0.522 1.166 1.166v5.596c0 0.644-0.522 1.166-1.166 1.166z"}}),n("path",{attrs:{d:"M11.805 10.48c-0.604 0-1.192-0.314-1.516-0.875l-2.798-4.846c-0.483-0.836-0.196-1.906 0.64-2.389s1.906-0.196 2.389 0.64l2.798 4.846c0.483 0.836 0.196 1.906-0.64 2.389-0.275 0.159-0.576 0.235-0.873 0.235z"}}),n("path",{attrs:{d:"M22.995 29.164c-0.363 0-0.715-0.188-0.91-0.525l-2.798-4.846c-0.29-0.502-0.118-1.143 0.384-1.433s1.143-0.118 1.433 0.384l2.798 4.846c0.29 0.502 0.118 1.143-0.384 1.433-0.165 0.095-0.346 0.141-0.524 0.141z"}}),n("path",{attrs:{d:"M8.729 13.436c-0.277 0-0.557-0.070-0.814-0.219l-4.846-2.798c-0.781-0.451-1.048-1.449-0.597-2.229s1.449-1.048 2.229-0.597l4.846 2.798c0.781 0.451 1.048 1.449 0.597 2.229-0.302 0.524-0.851 0.816-1.415 0.816z"}}),n("path",{attrs:{d:"M28.114 23.927c-0.158 0-0.319-0.040-0.465-0.125l-4.846-2.798c-0.446-0.258-0.599-0.828-0.341-1.274s0.828-0.599 1.274-0.341l4.846 2.798c0.446 0.258 0.599 0.828 0.341 1.274-0.173 0.299-0.486 0.466-0.809 0.466z"}}),n("path",{attrs:{d:"M7.607 17.515h-5.596c-0.837 0-1.516-0.678-1.516-1.515s0.678-1.515 1.516-1.515h5.596c0.837 0 1.516 0.678 1.516 1.515s-0.678 1.515-1.516 1.515z"}}),n("path",{attrs:{d:"M29.989 16.933c-0 0 0 0 0 0h-5.596c-0.515-0-0.933-0.418-0.933-0.933s0.418-0.933 0.933-0.933c0 0 0 0 0 0h5.596c0.515 0 0.933 0.418 0.933 0.933s-0.418 0.933-0.933 0.933z"}}),n("path",{attrs:{d:"M3.886 24.394c-0.483 0-0.954-0.251-1.213-0.7-0.386-0.669-0.157-1.525 0.512-1.911l4.846-2.798c0.669-0.387 1.525-0.157 1.911 0.512s0.157 1.525-0.512 1.911l-4.846 2.798c-0.22 0.127-0.461 0.188-0.698 0.188z"}}),n("path",{attrs:{d:"M23.27 12.736c-0.322 0-0.636-0.167-0.809-0.466-0.258-0.446-0.105-1.016 0.341-1.274l4.846-2.798c0.446-0.257 1.016-0.105 1.274 0.341s0.105 1.016-0.341 1.274l-4.846 2.798c-0.147 0.085-0.307 0.125-0.465 0.125z"}}),n("path",{attrs:{d:"M9.004 29.397c-0.218 0-0.438-0.055-0.64-0.172-0.613-0.354-0.823-1.138-0.469-1.752l2.798-4.846c0.354-0.613 1.138-0.823 1.752-0.469s0.823 1.138 0.469 1.752l-2.798 4.846c-0.237 0.411-0.668 0.641-1.112 0.641z"}}),n("path",{attrs:{d:"M20.196 9.664c-0.158 0-0.319-0.040-0.465-0.125-0.446-0.258-0.599-0.828-0.341-1.274l2.798-4.846c0.258-0.446 0.828-0.599 1.274-0.341s0.599 0.828 0.341 1.274l-2.798 4.846c-0.173 0.299-0.486 0.466-0.809 0.466z"}})]),n("use",{attrs:{"xlink:href":"#icon-spinner3"}})])]):e._e()],1)},s=[],a=n("be94"),r=n("2f62"),l={name:"App",data(){return{}},computed:Object(a["a"])({},Object(r["d"])(["isLoading"])),methods:{}},c=l,d=(n("034f"),n("2877")),u=Object(d["a"])(c,i,s,!1,null,null,null);u.options.__file="App.vue";var m=u.exports,p=n("8c4f");const h=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("SignView")]).then(n.bind(null,"3401")),f=()=>n.e("ToolsView").then(n.bind(null,"1a91")),w=()=>n.e("DiscuzView").then(n.bind(null,"bb62")),g=()=>n.e("DiscuzForumView").then(n.bind(null,"820c")),y=()=>n.e("DiscuzMyView").then(n.bind(null,"4513")),b=()=>n.e("DiscuzThreadView").then(n.bind(null,"4cc1")),v=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("MyView")]).then(n.bind(null,"eb88")),V=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordListView")]).then(n.bind(null,"1303")),$=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordView")]).then(n.bind(null,"3180"));o["a"].use(p["a"]);var S=new p["a"]({mode:"history",base:"/xgj/",routes:[{path:"/tools",name:"ToolsView",component:f},{path:"/discuz",name:"DiscuzView",component:w,meta:{keepAlive:!0}},{path:"/discuz/forum/:url",name:"DiscuzForumView",component:g,props:!0,meta:{keepAlive:!0}},{path:"/discuz/my",name:"DiscuzMyView",component:y},{path:"/discuz/thread/:url",name:"DiscuzThreadView",component:b,props:!0},{path:"/sign",name:"SignView",component:h},{path:"/password",name:"PasswordListView",component:V},{path:"/password/:type/:id?",name:"PasswordView",component:$,props:!0},{path:"/my",name:"MyView",component:v},{path:"*",redirect:"/tools"}]}),P=n("b383"),C=n.n(P),M=n("4260"),T=n("dc16"),z=n("db49"),D=n("adb5");o["a"].use(r["a"]);let L=localStorage.getItem("proxy_host")||z["a"][0].host,k="client";localStorage.getItem("temmeConvert")?k=localStorage.getItem("temmeConvert"):localStorage.setItem("temmeConvert",k);let _=!!Object(M["e"])("cdb3_auth"),x=JSON.parse(localStorage.getItem("webSiteList")||"[]"),E=Object(M["e"])("webSite")||x[0],O="true"===localStorage.getItem("debug");O&&Object(M["i"])("https://wechatfe.github.io/vconsole/lib/vconsole.min.js").then(()=>{new window.VConsole});var N,j,I=new r["a"].Store({state:{isLoading:!1,debug:O,temmeConvert:k,discuz:{formhash:"",HOST:L,isLogin:_,webSiteList:x,webSite:E,userInfo:{username:"",password:"",QA:"",creditList:[]},signInfo:{isSigned:!1,tid:null,lastPostUrl:""}}},mutations:{SET_HOST(e,t){e.discuz.HOST=t},SET_TEMMECONVERT(e,t){e.temmeConvert=t},SET_LOADING_STATUS(e,t){e.isLoading=t},UPDATE_DISCUZ(e,t){t.webSite&&Object(M["j"])("webSite",t.webSite),Object.assign(e.discuz,t)}},actions:{logout(){Object(M["c"])("cdb3_auth"),sessionStorage.clear(),location.reload()},switchProxy(e){let t=e.commit,n=e.state,o=z["a"][0].host,i=z["a"].findIndex(e=>e.host===n.discuz.HOST);i<z["a"].length-1&&(o=z["a"][i+1].host),localStorage.setItem("proxy_host",o),t("SET_HOST",o)},switchTemmeConvert(e){let t=e.commit,n=e.state,o="client"===n.temmeConvert?"server":"client";localStorage.setItem("temmeConvert",o),t("SET_TEMMECONVERT",o)},async submitPost(e,t){let n=e.commit,o=e.state,i=o.discuz.HOST,s={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"};Object.assign(s.httpConfig,t),n("SET_LOADING_STATUS",!0),await D["a"].post(`${i}/api/advancedProxy`,s),n("SET_LOADING_STATUS",!1)},async submitReply(e,t){let n=e.dispatch,o=e.state,i=e.getters,s=t.fid,a=t.tid,r=t.message,l=void 0===r?"":r,c=t.subject,d=void 0===c?"":c,u=o.isLoading,m=o.discuz.formhash,p=i.targetHost;if(u||!l)return;let h={url:`${p}post.php?action=reply&fid=${s}&tid=${a}&extra=page%3D1&replysubmit=yes`,data:C.a.stringify({formhash:m,message:l,subject:d})};await n("submitPost",h)},async dailySignIn(e){let t=e.dispatch,n=e.state,o=e.getters,i=n.isLoading,s=n.discuz,a=s.userInfo.username,r=s.formhash,l=s.signInfo,c=o.targetHost;if(i)return;let d={},u=`ID: ${a}\r\n日期: ${(new Date).Format("yyyy.M.dd")}\r\n心情: ......`;l.tid?Object.assign(d,{url:`${c}post.php?action=reply&fid=420&tid=${l.tid}&extra=&replysubmit=yes`,data:C.a.stringify({formhash:r,message:u,subject:""})}):Object.assign(d,{url:`${c}post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes`,data:C.a.stringify({formhash:r,message:u,frombbs:1,typeid:797,selecttypeid:797,readperm:101,subject:`${a}/${(new Date).getMonth()+1}月份/打卡签到帖`})}),await t("submitPost",d),l.isSigned=!0},async monthSignIn(e){let t=e.dispatch,n=e.state,o=e.getters;if(confirm("确认上报上月签到数据吗?")&&confirm("再次确认")&&confirm("三次确认")){let e=n.discuz,i=e.formhash,s=e.userInfo.username,a=e.signInfo.lastPostUrl,r=o.targetHost;if(!a)return;let l=`${r+a}`,c=T["a"].thread,d=await t("getPageData",{url:l,selector:c}),u=d.postList.slice(-1)[0],m={pid:u.pid,tid:d.tid,count:parseInt(u.postFloor),absPostUrl:u.absPostUrl},p={url:`${r}post.php?action=reply&fid=420&tid=6953091&extra=page%3D1&replysubmit=yes`,data:C.a.stringify({formhash:i,subject:"",message:`ID: ${s}\r\n签到次数: ${m.count}\r\n签到链接: [bbs]${encodeURIComponent(`thread-${m.tid}-1-1.html`)}[/bbs]`,fid:420,wysiwyg:0})};await t("submitPost",p),alert("上报成功!")}},async getPageData(e,t){let n=e.commit,o=e.state,i=t.url,s=t.selector,a=t.HOST,r=void 0===a?o.discuz.HOST:a,l={httpConfig:{url:i,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:s};n("SET_LOADING_STATUS",!0);let c=await D["a"].post(`${r}/api/html2Json`,l),d=c.data.data;return n("SET_LOADING_STATUS",!1),d}},getters:{targetHost:e=>{return`http://${e.discuz.webSite}/bbs/`}}}),A={name:"ModalComponent",props:{customClass:{default:""},customStyle:{default:null},content:{default:{}},maskClosable:{default:!1},showCloseBtn:{default:!1},position:{default:"center"}},data(){return{animateClass:this.getAnimateClass()}},mounted(){this.addEventHandler(),this.$emit("modalMounted")},beforeDestroy(){this.removeEventHandler(),this.$emit("modalBeforeDestroy")},methods:{getAnimateClass(){switch(this.position){case"top":return"slide-down";case"right":return"slide-left";case"bottom":return"slide-up";case"left":return"slide-right";default:return"fade-in"}},addEventHandler(){if(window.modalList&&0!=window.modalList.length?window.removeEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1):(window.modalList=[],history.pushState(null,null,location.href)),window.addEventListener("popstate",this.closeModal,!1),window.modalList.push(this),window.modalList.length>1)return;let e=document.querySelector(".overflow-container");e&&(e.style.overflowY="hidden",e.style.webkitOverflowScrolling="auto")},removeEventHandler(){if(window.removeEventListener("popstate",this.closeModal,!1),document.body.scrollIntoView(),window.modalList.length>0)return;let e=document.querySelector(".overflow-container");e&&(e.style.overflowY="auto",e.style.webkitOverflowScrolling="touch")},closeModal(e){var t=this;const n=t.animateClass,o=t.$el;if(e&&"click"==e.type){if(1==window.modalList.length)return void history.back();e.stopPropagation()}window.modalList.pop(),window.modalList.length&&(e&&"popstate"==e.type&&history.pushState(null,null,location.href),window.addEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1)),t.animateClass=`${n}-reverse`,t.$nextTick().then(()=>{setTimeout(()=>{t.$destroy(),document.body.removeChild(o)},300)})},closeBtnClick(e){this.$listeners.closeBtnClick||this._events.closeBtnClick?this.$emit("closeBtnClick",e):this.closeModal(e)},maskClick(e){this.maskClosable&&(this.$emit("maskClick"),this.closeModal(e))}},computed:{wrapperClass(){const e=this.customClass;return`modal-wrapper ${e}`},modalClass(){const e=this.animateClass,t=this.position;return`modal-${t} ${e}`}},render(){const e=arguments[0],t=this.wrapperClass,n=this.customStyle,o=this.content,i=this.showCloseBtn,s=this.modalClass,a=this.closeModal,r=this.closeBtnClick,l=this.maskClick;if(o.componentOptions){let e=o.componentOptions.listeners,t=void 0===e?{}:e;t.closeModal=a,o.componentOptions.listeners=t}return e("div",{class:"hmc-modal-root"},[e("div",{class:t},[e("div",{class:"modal"},[e("div",{class:s,on:{click:l}},[e("div",{class:"modal-container",style:n,on:{click:e=>e.stopPropagation()}},[o,i&&e("svg",{class:"modal-close-btn",on:{click:r}},[e("use",{attrs:{"xlink:href":"#icon-close"}})])])])])])])}},H=A,U=(n("2bac"),Object(d["a"])(H,N,j,!1,null,null,null));U.options.__file="index.vue";var F=U.exports;function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.$router,n=this.$store,i=new o["a"]({router:t,store:n,render:t=>t(F,{props:e})});return document.body.appendChild(i.$mount().$el),i.$children[0]}var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toast",class:{hide:e.isHide}},[n("div",{class:[e.customClass,e.type],on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},["info"==e.type?n("div",{staticClass:"content",class:[e.position]},[e._v("\n            "+e._s(e.msg)+"\n        ")]):n("div",{staticClass:"content"},[e._v("\n            "+e._s(e.msg)+"\n        ")])])])},q=[],J={name:"Toast",props:{type:{type:String,default:"info"},msg:{type:String,default:""},position:{type:String,default:"center"},customClass:{type:String,default:""},duration:{type:Number,default:1500},onClose:{type:Function,default:()=>{}}},data(){return{isHide:!1}},mounted(){setTimeout(()=>{this.isHide=!0,this.onClose(),setTimeout(()=>{this.$destroy(),this.$el.remove()},500)},this.duration)},computed:{},methods:{}},G=J,Y=(n("83fe"),Object(d["a"])(G,R,q,!1,null,null,null));Y.options.__file="index.vue";var W=Y.exports,K={init:(e,t)=>{return"string"===typeof e?e={msg:e,type:t}:e.type=t,new o["a"]({render:t=>t(W,{props:Object(a["a"])({},e)})}).$mount().$el},info:function(e){document.body.appendChild(this.init(e,"info"))},normal:function(e){const t=e.el,n=void 0===t?document.querySelector("div[class$='-page view']")||document.body:t;n.appendChild(this.init(e,"normal"))},error:function(e){const t=e.el,n=void 0===t?document.querySelector("div[class$='-page view']")||document.body:t;n.appendChild(this.init(e,"error"))}},Q=n("9483");Object(Q["a"])("/xgj/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh."),location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,o["a"].prototype.$openModal=B,o["a"].prototype.$Toast=K,Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new o["a"]({router:S,store:I,render:e=>e(m)}).$mount("#app")},5838:function(e,t,n){},"64a9":function(e,t,n){},"83fe":function(e,t,n){"use strict";var o=n("a5c5"),i=n.n(o);i.a},a5c5:function(e,t,n){},adb5:function(e,t,n){"use strict";n("a481");var o=n("bc3a"),i=n.n(o),s=n("74e2"),a=n.n(s);let r=null;const l=new a.a({maxSockets:100,maxFreeSockets:10,timeout:6e4,freeSocketTimeout:3e4}),c=i.a.create({withCredentials:!0});c.defaults.httpAgent=l,c.interceptors.request.use(async e=>{let t=localStorage.getItem("temmeConvert");return e.url.includes("html2Json")&&"client"===t&&(e.temmeConvert=t,e.url=e.url.replace("html2Json","advancedProxy")),document.cookie&&(e.headers["corscookies"]=document.cookie),e},async function(e){return Promise.reject(e)}),c.interceptors.response.use(async e=>{if("client"===e.config.temmeConvert){if(!r){let e=await n.e("temme").then(n.bind(null,"0b74")),t=e.default;r=t}let t=JSON.parse(e.config.data).selector;e.data.data=r(e.data.data,t)}return console.log("request url:"+e.request.responseURL),e},async function(e){return Promise.reject(e)}),t["a"]=c},db49:function(e,t,n){"use strict";n.d(t,"a",function(){return o});const o=[{protocol:"all",host:"//common-server.herokuapp.com",platom:"HEROKUAPP",gfw:!0},{protocol:"https",host:"https://common-server-git-master.cjd6568358.now.sh",platom:"NOW",gfw:!0},{protocol:"https",host:"https://cjd6568358.3322.org:6707",platom:"N270",gfw:!1}]},dc16:function(e,t,n){"use strict";t["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    #postform[action=$replyUrl];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}}});
//# sourceMappingURL=app.f2042fe6.js.map