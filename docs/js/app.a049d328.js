(function(e){function t(t){for(var o,i,r=t[0],l=t[1],c=t[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},s={app:0},a=[];function r(e){return l.p+"js/"+({DiscuzAutoLoginView:"DiscuzAutoLoginView",DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView"}[e]||e)+"."+{DiscuzAutoLoginView:"861d4351",DiscuzForumView:"06492a94",DiscuzMyView:"36c3125d",DiscuzThreadView:"16bdccfb",DiscuzView:"29c09ec3","MyView~PasswordListView~PasswordView~SignView":"24e76329",MyView:"d6a311c7",PasswordListView:"b8374f82",PasswordView:"041cb774",SignView:"74a82fc9"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={DiscuzForumView:1,DiscuzMyView:1,DiscuzThreadView:1,DiscuzView:1,MyView:1,PasswordListView:1,PasswordView:1,SignView:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({DiscuzAutoLoginView:"DiscuzAutoLoginView",DiscuzForumView:"DiscuzForumView",DiscuzMyView:"DiscuzMyView",DiscuzThreadView:"DiscuzThreadView",DiscuzView:"DiscuzView","MyView~PasswordListView~PasswordView~SignView":"MyView~PasswordListView~PasswordView~SignView",MyView:"MyView",PasswordListView:"PasswordListView",PasswordView:"PasswordView",SignView:"SignView"}[e]||e)+"."+{DiscuzAutoLoginView:"31d6cfe0",DiscuzForumView:"8652a70a",DiscuzMyView:"70cb1ae6",DiscuzThreadView:"2acfc7c9",DiscuzView:"b432f1c2","MyView~PasswordListView~PasswordView~SignView":"31d6cfe0",MyView:"0afc0b25",PasswordListView:"eebbdd1e",PasswordView:"d2769c53",SignView:"10cf286b"}[e]+".css",s=l.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===s))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===o||d===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],p.parentNode.removeChild(p),n(a)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=s[e]=[t,n]}));t.push(o[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/xgj/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2bac":function(e,t,n){"use strict";n("4ca5")},4260:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"m",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"n",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"j",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"l",(function(){return a})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return V}));var o=n("adb5"),i=n("a78e"),s=n.n(i);let a={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n      return Math.ceil(this/38)\n    };\n    head title{$documentTitle};\n    .mainbox.forumlist tbody:has(.lastpost a)@forumList{\n        h2 a[href=$href]{$name}\n    }\n    .mainbox.threadlist table:has(thead.separation)@threadList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n            .author em{$date}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $pageNum = 1;\n        $pageCount = 1;\n        strong{$pageNum|Number};\n        em{$pageCount|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    #postform[action=$replyUrl];\n    form+.pages_btns .threadflow a:nth-of-type(1)[href=$prevTopicUrl];\n    form+.pages_btns .threadflow a:nth-of-type(2)[href=$nextTopicUrl];\n    #ajax_favorite[href=$favoriteUrl];\n    #newspecial_menu li:nth-of-type(1) a[href=$newThreadUrl];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime|replace(/^.*发表于 /g,''), '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .notice{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $pageNum = 1;\n        $pageCount = 1;\n        strong{$pageNum|Number};\n        em{$pageCount|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    ",search:"\n    filter MathCeil() {\n      return Math.ceil(this/38)\n    };\n    .mainbox.threadlist tbody@threadList{\n        th a[href=$tid|replace('viewthread.php?tid=','')|replace(/&highlight=.*$/g,'')]{$title};\n        td.author em{$date};\n        td.nums{$nums};\n        td.nums strong{$replyCount};\n    };\n    .mainbox.threadlist+.pages_btns .pages em{$pageCount|Number|MathCeil};\n    .mainbox.threadlist+.pages_btns .pages a:nth-of-type(1)[href=$searchHref];\n    "},r=[{type:"default",typeName:"默认"},{type:"QQ",typeName:"QQ"},{type:"wechat",typeName:"微信"},{type:"email",typeName:"邮箱"},{type:"OA",typeName:"OA"},{type:"APP",typeName:"APP"},{type:"website",typeName:"网站"},{type:"card",typeName:"证件"}],l=[{protocol:"all",host:"//common-server.herokuapp.com",platom:"HEROKUAPP",gfw:!0},{protocol:"https",host:"https://common-server.cjd6568358.now.sh",platom:"NOW",gfw:!0},{protocol:"https",host:"https://cjd6568358.3322.org:6706",platom:"N270",gfw:!1}],c=function(){let e="";for(let t=1;t<=32;t++){let n=Math.floor(16*Math.random()).toString(16);e+=n,8!=t&&12!=t&&16!=t&&20!=t||(e+="-")}return e},d=function(e=Date.now()){let t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate();return{year:n,month:o,day:i}},u=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split(""),n=5381,o=e.length-1;if("string"==typeof e)for(;o>-1;o--)n+=(n<<5)+e.charCodeAt(o);else for(;o>-1;o--)n+=(n<<5)+e[o];var i=2147483647&n,s="";do{s+=t[63&i]}while(i>>=6);return s},p=function(e,t){s.a.set(e,t,{expires:30})},h=function(e){return s.a.get(e)},m=function(e){s.a.remove(e)},w=function(e={fileName:"",data:"",key:""}){let t=l[2].host;"undefined"===typeof e.encrypt&&(e.encrypt=!0);let n=document.createElement("form");n.method="post",n.action=t+"/api/string2File",n.target="name";var o=document.createElement("input");o.type="hidden",o.name="fileName",o.value=e.fileName,n.appendChild(o);var i=document.createElement("input");i.type="hidden",i.name="data",i.value=e.data,n.appendChild(i);var s=document.createElement("input");s.type="hidden",s.name="key",s.value=e.key,n.appendChild(s),n.addEventListener("submit",()=>{var e=1100,t=550,n=(window.screen.availHeight-30-t)/2,o=(window.screen.availWidth-10-e)/2;window.open("about:blank","name","height="+t+", width="+e+", top="+n+", left="+o+",toolbar=no, menubar=no,  scrollbars=yes,resizable=yes,location=no, status=no")}),document.body.appendChild(n),n.submit()},f=async function(e,t){let n=l[0].host;localStorage.getItem("proxy_host")&&(n=localStorage.getItem("proxy_host"));let{data:i}=await o["a"].post(n+"/api/encryptAES",{data:e,key:t});if(1==i.statusCode)return i.data},g=async function(e,t){let n=l[0].host;localStorage.getItem("proxy_host")&&(n=localStorage.getItem("proxy_host"));let{data:i}=await o["a"].post(n+"/api/decryptAES",{data:e,key:t});if(1==i.statusCode)return i.data},y=(e,t,n=!1)=>new Array(new Date(e,t,0).getDate()).fill(0).map((e,t)=>(++t,n?"0"+t:t)),b=function(e){return new Promise((function(t,n){var o=document.createElement("script");o.async=!0,o.src=e,o.onload=()=>{t(!0)},o.onerror=e=>{n(!1)},document.body.appendChild(o)}))},v=()=>new Promise((e,t)=>{b("https://cjd6568358.gitee.io/static/xgj/config.js").then(()=>{if(window.globalConfig)localStorage.setItem("globalConfig",JSON.stringify(window.globalConfig)),e(window.globalConfig);else{let t=localStorage.getItem("globalConfig");t?(console.log("globalConfig use cache data"),e(JSON.parse(t))):(console.warn("globalConfig初始化异常"),e({}))}},()=>{let t=localStorage.getItem("globalConfig");t?(console.log("globalConfig use cache data"),e(JSON.parse(t))):(console.warn("globalConfig初始化异常"),e({}))})}),V=async()=>{let e=await v();e["accountTypeList"]&&(r=e["accountTypeList"]),e["selectors"]&&(a=e["selectors"])}},"4ca5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("5319"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{staticClass:"view"}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{staticClass:"view"}),e.isLoading?n("div",{staticClass:"loading"},[n("svg",{staticClass:"icon icon-spinner3"},[n("symbol",{attrs:{id:"icon-spinner3",viewBox:"0 0 32 32"}},[n("title",[e._v("spinner3")]),n("path",{attrs:{d:"M16 9.472c-1.030 0-1.865-0.835-1.865-1.865v-5.596c0-1.030 0.835-1.865 1.865-1.865s1.865 0.835 1.865 1.865v5.596c0 1.030-0.835 1.865-1.865 1.865z"}}),n("path",{attrs:{d:"M16 31.155c-0.644 0-1.166-0.522-1.166-1.166v-5.596c0-0.644 0.522-1.166 1.166-1.166s1.166 0.522 1.166 1.166v5.596c0 0.644-0.522 1.166-1.166 1.166z"}}),n("path",{attrs:{d:"M11.805 10.48c-0.604 0-1.192-0.314-1.516-0.875l-2.798-4.846c-0.483-0.836-0.196-1.906 0.64-2.389s1.906-0.196 2.389 0.64l2.798 4.846c0.483 0.836 0.196 1.906-0.64 2.389-0.275 0.159-0.576 0.235-0.873 0.235z"}}),n("path",{attrs:{d:"M22.995 29.164c-0.363 0-0.715-0.188-0.91-0.525l-2.798-4.846c-0.29-0.502-0.118-1.143 0.384-1.433s1.143-0.118 1.433 0.384l2.798 4.846c0.29 0.502 0.118 1.143-0.384 1.433-0.165 0.095-0.346 0.141-0.524 0.141z"}}),n("path",{attrs:{d:"M8.729 13.436c-0.277 0-0.557-0.070-0.814-0.219l-4.846-2.798c-0.781-0.451-1.048-1.449-0.597-2.229s1.449-1.048 2.229-0.597l4.846 2.798c0.781 0.451 1.048 1.449 0.597 2.229-0.302 0.524-0.851 0.816-1.415 0.816z"}}),n("path",{attrs:{d:"M28.114 23.927c-0.158 0-0.319-0.040-0.465-0.125l-4.846-2.798c-0.446-0.258-0.599-0.828-0.341-1.274s0.828-0.599 1.274-0.341l4.846 2.798c0.446 0.258 0.599 0.828 0.341 1.274-0.173 0.299-0.486 0.466-0.809 0.466z"}}),n("path",{attrs:{d:"M7.607 17.515h-5.596c-0.837 0-1.516-0.678-1.516-1.515s0.678-1.515 1.516-1.515h5.596c0.837 0 1.516 0.678 1.516 1.515s-0.678 1.515-1.516 1.515z"}}),n("path",{attrs:{d:"M29.989 16.933c-0 0 0 0 0 0h-5.596c-0.515-0-0.933-0.418-0.933-0.933s0.418-0.933 0.933-0.933c0 0 0 0 0 0h5.596c0.515 0 0.933 0.418 0.933 0.933s-0.418 0.933-0.933 0.933z"}}),n("path",{attrs:{d:"M3.886 24.394c-0.483 0-0.954-0.251-1.213-0.7-0.386-0.669-0.157-1.525 0.512-1.911l4.846-2.798c0.669-0.387 1.525-0.157 1.911 0.512s0.157 1.525-0.512 1.911l-4.846 2.798c-0.22 0.127-0.461 0.188-0.698 0.188z"}}),n("path",{attrs:{d:"M23.27 12.736c-0.322 0-0.636-0.167-0.809-0.466-0.258-0.446-0.105-1.016 0.341-1.274l4.846-2.798c0.446-0.257 1.016-0.105 1.274 0.341s0.105 1.016-0.341 1.274l-4.846 2.798c-0.147 0.085-0.307 0.125-0.465 0.125z"}}),n("path",{attrs:{d:"M9.004 29.397c-0.218 0-0.438-0.055-0.64-0.172-0.613-0.354-0.823-1.138-0.469-1.752l2.798-4.846c0.354-0.613 1.138-0.823 1.752-0.469s0.823 1.138 0.469 1.752l-2.798 4.846c-0.237 0.411-0.668 0.641-1.112 0.641z"}}),n("path",{attrs:{d:"M20.196 9.664c-0.158 0-0.319-0.040-0.465-0.125-0.446-0.258-0.599-0.828-0.341-1.274l2.798-4.846c0.258-0.446 0.828-0.599 1.274-0.341s0.599 0.828 0.341 1.274l-2.798 4.846c-0.173 0.299-0.486 0.466-0.809 0.466z"}})]),n("use",{attrs:{"xlink:href":"#icon-spinner3"}})])]):e._e()],1)},s=[],a=n("2f62"),r={name:"App",data(){return{}},computed:{...Object(a["d"])(["isLoading"])},methods:{}},l=r,c=(n("034f"),n("2877")),d=Object(c["a"])(l,i,s,!1,null,null,null),u=d.exports,p=n("8c4f");const h=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("SignView")]).then(n.bind(null,"3401")),m=()=>n.e("DiscuzView").then(n.bind(null,"bb62")),w=()=>n.e("DiscuzForumView").then(n.bind(null,"820c")),f=()=>n.e("DiscuzMyView").then(n.bind(null,"4513")),g=()=>n.e("DiscuzThreadView").then(n.bind(null,"4cc1")),y=()=>n.e("DiscuzAutoLoginView").then(n.bind(null,"051a")),b=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("MyView")]).then(n.bind(null,"eb88")),v=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordListView")]).then(n.bind(null,"1303")),V=()=>Promise.all([n.e("MyView~PasswordListView~PasswordView~SignView"),n.e("PasswordView")]).then(n.bind(null,"3180"));o["a"].use(p["a"]);var $=new p["a"]({mode:"history",base:"/xgj/",routes:[{path:"/discuz",name:"DiscuzView",component:m,meta:{keepAlive:!0}},{path:"/discuz/forum/:url",name:"DiscuzForumView",component:w,props:!0,meta:{keepAlive:!0}},{path:"/discuz/my",name:"DiscuzMyView",component:f},{path:"/discuz/thread/:url",name:"DiscuzThreadView",component:g,props:!0},{path:"/discuz/autoLogin",name:"DiscuzAutoLoginView",component:y,props:!0},{path:"/sign",name:"SignView",component:h},{path:"/password",name:"PasswordListView",component:v},{path:"/password/:type/:id?",name:"PasswordView",component:V,props:!0},{path:"/my",name:"MyView",component:b},{path:"*",redirect:"/sign"}]}),S=n("b383"),C=n.n(S),z=n("4260"),L=n("adb5");o["a"].use(a["a"]);let M=localStorage.getItem("proxy_host")||z["k"][1].host,P=!!Object(z["e"])("cdb3_auth"),D=JSON.parse(localStorage.getItem("webSiteList")||"[]"),k=Object(z["e"])("webSite")||D[0],T="true"===localStorage.getItem("debug");T&&Object(z["j"])("https://wechatfe.github.io/vconsole/lib/vconsole.min.js").then(()=>{new window.VConsole});var _,O,x=new a["a"].Store({state:{isLoading:!1,debug:T,discuz:{formhash:"",HOST:M,isLogin:P,webSiteList:D,webSite:k,userInfo:{username:"",password:"",QA:"",creditList:[]},signInfo:{isSigned:!1,tid:null}}},mutations:{SET_HOST(e,t){e.discuz.HOST=t},SET_LOADING_STATUS(e,t){e.isLoading=t},UPDATE_DISCUZ(e,t){t.webSite&&Object(z["m"])("webSite",t.webSite),Object.assign(e.discuz,t)}},actions:{logout(){Object(z["c"])("cdb3_auth"),sessionStorage.clear(),location.reload()},switchProxy({commit:e,state:t}){let n=z["k"][0].host,o=z["k"].findIndex(e=>e.host===t.discuz.HOST);o<z["k"].length-1&&(n=z["k"][o+1].host),localStorage.setItem("proxy_host",n),e("SET_HOST",n)},async submitPost({commit:e,state:t},n){let{discuz:{HOST:o}}=t,i={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"};Object.assign(i.httpConfig,n),e("SET_LOADING_STATUS",!0);let s=await L["a"].post(o+"/api/advancedProxy",i);return e("SET_LOADING_STATUS",!1),s},async submitReply({dispatch:e,state:t,getters:n},{fid:o,tid:i,message:s="",subject:a=""}){let{isLoading:r,discuz:{formhash:l}}=t,{targetHost:c}=n;if(r||!s)return;let d={url:`${c}post.php?action=reply&fid=${o}&tid=${i}&extra=page%3D1&replysubmit=yes`,data:C.a.stringify({formhash:l,message:s,subject:a})};await e("submitPost",d)},async dailySignIn({dispatch:e,state:t,getters:n}){let{isLoading:o,discuz:{userInfo:{username:i},formhash:s,signInfo:a}}=t,{targetHost:r}=n;if(o)return;let l={},c=`ID: ${i}\r\n日期: ${(new Date).Format("yyyy.M.dd")}\r\n心情: ......`;a.tid?Object.assign(l,{url:`${r}post.php?action=reply&fid=420&tid=${a.tid}&extra=&replysubmit=yes`,data:C.a.stringify({formhash:s,message:c,subject:""})}):Object.assign(l,{url:r+"post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes",data:C.a.stringify({formhash:s,message:c,frombbs:1,typeid:797,selecttypeid:797,readperm:101,subject:`${i}/${(new Date).getMonth()+1}月份/打卡签到帖`})}),await e("submitPost",l),a.isSigned=!0},async monthSignIn({dispatch:e,state:t,getters:n}){if(confirm("确认上报上月签到数据吗?")&&confirm("再次确认")&&confirm("三次确认")){let{discuz:{formhash:o,userInfo:{username:i}}}=t,{targetHost:s}=n,a=await e("getLastMonthSignInfo"),r={url:s+"post.php?action=reply&fid=420&tid=8186986&extra=page%3D1&replysubmit=yes",data:C.a.stringify({formhash:o,subject:"",message:`ID: ${i}\r\n签到次数: ${a.count}\r\n签到链接: [bbs]${encodeURIComponent(`thread-${a.tid}-1-1.html`)}[/bbs]`,fid:420,wysiwyg:0})};await e("submitPost",r),alert("上报成功!")}},async getPageData({commit:e,state:t},{url:n,selector:o,HOST:i=t.discuz.HOST}){let s={httpConfig:{url:n,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:o};e("SET_LOADING_STATUS",!0);let{data:{data:a}}=await L["a"].post(i+"/api/html2Json",s);return e("SET_LOADING_STATUS",!1),a},async getLastMonthSignInfo({state:e,getters:t}){let{discuz:{userInfo:{username:n},formhash:o}}=e,{targetHost:i}=t,s={httpConfig:{url:i+"search.php",data:`formhash=${o}&srchtxt=${n}&srchuname=&searchsubmit=true&srchtype=title&srchfilter=all&srchtypeid=&srchfrom=0&before=&orderby=lastpost&ascdesc=desc&srchfid%5B%5D=all`,method:"post",responseType:"arraybuffer"},encoding:"gbk",selector:z["l"].search},{data:{data:{threadList:a}}}=await L["a"].post(e.discuz.HOST+"/api/html2Json",s),r={},l=new Date,c=l.getMonth();for(let d=0;d<a.length;d++){const{title:e,replyCount:t,tid:o}=a[d];if(e==`${n}/${c||12}月份/打卡签到帖`){r={title:e,tid:o,count:+t+1};break}}return r}},getters:{targetHost:e=>`http://${e.discuz.webSite}/bbs/`}}),j={name:"ModalComponent",props:{customClass:{default:""},customStyle:{default:null},content:{default:{}},maskClosable:{default:!1},showCloseBtn:{default:!1},position:{default:"center"}},data(){return{animateClass:this.getAnimateClass()}},mounted(){this.addEventHandler(),this.$emit("modalMounted")},beforeDestroy(){this.removeEventHandler(),this.$emit("modalBeforeDestroy")},methods:{getAnimateClass(){switch(this.position){case"top":return"slide-down";case"right":return"slide-left";case"bottom":return"slide-up";case"left":return"slide-right";default:return"fade-in"}},addEventHandler(){if(window.modalList&&0!=window.modalList.length?window.removeEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1):(window.modalList=[],history.pushState(null,null,location.href)),window.addEventListener("popstate",this.closeModal,!1),window.modalList.push(this),window.modalList.length>1)return;let e=document.querySelector(".overflow-container");e&&(e.style.overflowY="hidden",e.style.webkitOverflowScrolling="auto")},removeEventHandler(){if(window.removeEventListener("popstate",this.closeModal,!1),document.body.scrollIntoView(),window.modalList.length>0)return;let e=document.querySelector(".overflow-container");e&&(e.style.overflowY="auto",e.style.webkitOverflowScrolling="touch")},closeModal(e){var t=this;const{animateClass:n,$el:o}=t;if(e&&"click"==e.type){if(1==window.modalList.length)return void history.back();e.stopPropagation()}window.modalList.pop(),window.modalList.length&&(e&&"popstate"==e.type&&history.pushState(null,null,location.href),window.addEventListener("popstate",window.modalList.slice(-1)[0].closeModal,!1)),t.animateClass=n+"-reverse",t.$nextTick().then(()=>{setTimeout(()=>{t.$destroy(),document.body.removeChild(o)},300)})},closeBtnClick(e){this.$listeners.closeBtnClick||this._events.closeBtnClick?this.$emit("closeBtnClick",e):this.closeModal(e)},maskClick(e){this.maskClosable&&(this.$emit("maskClick"),this.closeModal(e))}},computed:{wrapperClass(){const{customClass:e}=this;return"modal-wrapper "+e},modalClass(){const{animateClass:e,position:t}=this;return`modal-${t} ${e}`}},render(){const e=arguments[0],{wrapperClass:t,customStyle:n,content:o,showCloseBtn:i,modalClass:s,closeModal:a,closeBtnClick:r,maskClick:l}=this;if(o.componentOptions){let{listeners:e={}}=o.componentOptions;e.closeModal=a,o.componentOptions.listeners=e}return e("div",{class:"hmc-modal-root"},[e("div",{class:t},[e("div",{class:"modal"},[e("div",{class:s,on:{click:l}},[e("div",{class:"modal-container",style:n,on:{click:e=>e.stopPropagation()}},[o,i&&e("svg",{class:"modal-close-btn",on:{click:r}},[e("use",{attrs:{"xlink:href":"#icon-close"}})])])])])])])}},A=j,E=(n("2bac"),Object(c["a"])(A,_,O,!1,null,null,null)),N=E.exports;function I(e={}){let{$router:t,$store:n}=this,i=new o["a"]({router:t,store:n,render:t=>t(N,{props:e})});return document.body.appendChild(i.$mount().$el),i.$children[0]}var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toast",class:{hide:e.isHide}},[n("div",{class:[e.customClass,e.type],on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},["info"==e.type?n("div",{staticClass:"content",class:[e.position]},[e._v(" "+e._s(e.msg)+" ")]):n("div",{staticClass:"content"},[e._v(" "+e._s(e.msg)+" ")])])])},F=[],U={name:"Toast",props:{type:{type:String,default:"info"},msg:{type:String,default:""},position:{type:String,default:"center"},customClass:{type:String,default:""},duration:{type:Number,default:1500},onClose:{type:Function,default:()=>{}}},data(){return{isHide:!1}},mounted(){setTimeout(()=>{this.isHide=!0,this.onClose(),setTimeout(()=>{this.$destroy(),this.$el.remove()},500)},this.duration)},computed:{},methods:{}},B=U,q=(n("83fe"),Object(c["a"])(B,H,F,!1,null,null,null)),R=q.exports,J={init:(e,t)=>("string"===typeof e?e={msg:e,type:t}:e.type=t,new o["a"]({render:t=>t(R,{props:{...e}})}).$mount().$el),info:function(e){document.body.appendChild(this.init(e,"info"))},normal:function(e){const{el:t=document.querySelector("div[class$='-page view']")||document.body}=e;t.appendChild(this.init(e,"normal"))},error:function(e){const{el:t=document.querySelector("div[class$='-page view']")||document.body}=e;t.appendChild(this.init(e,"error"))}},G=n("9483");Object(G["a"])("/xgj/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh."),location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o["a"].config.errorHandler=function(e,t,n){console.log(e)},o["a"].config.productionTip=!1,o["a"].prototype.$openModal=I,o["a"].prototype.$Toast=J,Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},Object(z["i"])().then(()=>{new o["a"]({router:$,store:x,render:e=>e(u)}).$mount("#app")}),window.onerror=e=>{console.log(e)},window.attachimg=window.attachimginfo=window.fetchOffset=window.copycode=window.signature=window.fastreply=window.tagshow=window.zoom=window.zoomdrag=window.zoomST=window.zoomimgresize=window.zoomimgadjust=window.zoomclose=window.videoPlay=()=>{}},"83fe":function(e,t,n){"use strict";n("c6b4")},"85ec":function(e,t,n){},adb5:function(e,t,n){"use strict";var o=n("bc3a"),i=n.n(o),s=n("74e2"),a=n.n(s);const r=new a.a({maxSockets:100,maxFreeSockets:10,timeout:6e4,freeSocketTimeout:3e4}),l=i.a.create({withCredentials:!0});l.defaults.httpAgent=r,l.interceptors.request.use(async e=>(document.cookie&&(e.headers["corscookies"]=document.cookie),e),(async function(e){return Promise.reject(e)})),l.interceptors.response.use(async e=>(console.log("request url:"+e.request.responseURL),e),(async function(e){return Promise.reject(e)})),t["a"]=l},c6b4:function(e,t,n){}});