(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"01f9":function(t,e,n){"use strict";var r=n("2d00"),i=n("5ca1"),s=n("2aba"),o=n("32e9"),a=n("84f2"),c=n("41a0"),u=n("7f20"),l=n("38fd"),p=n("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),f="@@iterator",h="keys",m="values",g=function(){return this};t.exports=function(t,e,n,b,y,v,S){c(n,e,b);var $,w,T,L=function(t){if(!d&&t in O)return O[t];switch(t){case h:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},I=e+" Iterator",_=y==m,x=!1,O=t.prototype,P=O[p]||O[f]||y&&O[y],A=P||L(y),k=y?_?L("entries"):A:void 0,C="Array"==e&&O.entries||P;if(C&&(T=l(C.call(new t)),T!==Object.prototype&&T.next&&(u(T,I,!0),r||"function"==typeof T[p]||o(T,p,g))),_&&P&&P.name!==m&&(x=!0,A=function(){return P.call(this)}),r&&!S||!d&&!x&&O[p]||o(O,p,A),a[e]=A,a[I]=g,y)if($={values:_?A:L(m),keys:v?A:L(h),entries:k},S)for(w in $)w in O||s(O,w,$[w]);else i(i.P+i.F*(d||x),e,$);return $}},"0d58":function(t,e,n){var r=n("ce10"),i=n("e11e");t.exports=Object.keys||function(t){return r(t,i)}},"11f1":function(t,e,n){"use strict";var r=n("1d08"),i=n.n(r);i.a},1495:function(t,e,n){var r=n("86cc"),i=n("cb7c"),s=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){i(t);var n,o=s(e),a=o.length,c=0;while(a>c)r.f(t,n=o[c++],e[n]);return t}},"1d08":function(t,e,n){},"2aeb":function(t,e,n){var r=n("cb7c"),i=n("1495"),s=n("e11e"),o=n("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n("230e")("iframe"),r=s.length,i="<",o=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+o+"document.F=Object"+i+"/script"+o),t.close(),u=t.F;while(r--)delete u[c][s[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[o]=t):n=u(),void 0===e?n:i(n,e)}},"38fd":function(t,e,n){var r=n("69a8"),i=n("4bf8"),s=n("613b")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),i=n("4630"),s=n("7f20"),o={};n("32e9")(o,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),s(t,e+" Iterator")}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"5ca1":function(t,e,n){var r=n("7726"),i=n("8378"),s=n("32e9"),o=n("2aba"),a=n("9b43"),c="prototype",u=function(t,e,n){var l,p,d,f,h=t&u.F,m=t&u.G,g=t&u.S,b=t&u.P,y=t&u.B,v=m?r:g?r[e]||(r[e]={}):(r[e]||{})[c],S=m?i:i[e]||(i[e]={}),$=S[c]||(S[c]={});for(l in m&&(n=e),n)p=!h&&v&&void 0!==v[l],d=(p?v:n)[l],f=y&&p?a(d,r):b&&"function"==typeof d?a(Function.call,d):d,v&&o(v,l,d,t&u.U),S[l]!=d&&s(S,l,f),b&&$[l]!=d&&($[l]=d)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"7f20":function(t,e,n){var r=n("86cc").f,i=n("69a8"),s=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"91dd":function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,s){e=e||"&",n=n||"=";var o={};if("string"!==typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var c=1e3;s&&"number"===typeof s.maxKeys&&(c=s.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var p,d,f,h,m=t[l].replace(a,"%20"),g=m.indexOf(n);g>=0?(p=m.substr(0,g),d=m.substr(g+1)):(p=m,d=""),f=decodeURIComponent(p),h=decodeURIComponent(d),r(o,f)?i(o[f])?o[f].push(h):o[f]=[o[f],h]:o[f]=h}return o};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),i=Array.prototype;void 0==i[r]&&n("32e9")(i,r,{}),t.exports=function(t){i[r][t]=!0}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),s=n("2aba"),o=n("7726"),a=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),p=u("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),m=0;m<h.length;m++){var g,b=h[m],y=f[b],v=o[b],S=v&&v.prototype;if(S&&(S[l]||a(S,l,d),S[p]||a(S,p,b),c[b]=d,y))for(g in r)S[g]||s(S,g,r[g],!0)}},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},bb62:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuz-page"},[n("div",{staticClass:"overflow-container",on:{scroll:t.onScroll}},[t.discuz.isLogin?t._e():n("div",{staticClass:"login-form"},[n("center",[n("h3",[t._v("discuz论坛手机版")])]),n("div",{staticClass:"input-warp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.webSite=e.target.multiple?n:n[0]}}},t._l(t.discuz.webSiteList,function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0),n("a",{staticClass:"btn",on:{click:t.updateWebSiteList}},[t._v("更新列表")])]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userInfo.username},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"username",e.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:t.userInfo.QA},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"QA",e.target.value)}}})]),n("a",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])],1),t.discuz.isLogin?[n("ul",{staticClass:"user-info"},[n("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[t._v(t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?n("li",[t._v("已签到")]):n("li",{on:{click:t.sign}},[t._v("日签到")]),n("li",{on:{click:t.uploadEveryMonthSignInfo}},[t._v("月签到")]),n("li",{on:{click:t.logout}},[t._v("退出")])],1),t._l(t.areaList,function(e,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":e.name}},t._l(e.value,function(e,r){return n("router-link",{key:r,attrs:{to:{name:"DiscuzForumView",params:{url:t.targetHost+e.value}},tag:"li"}},[t._v(t._s(e.name))])}),1)})]:t._e(),n("a",{staticClass:"btn switch",on:{click:t.switchHost}},[t._v("切换HOST源(当前:"+t._s(t.discuz.HOST.includes("herokuapp")?"herokuapp":"3322")+")")])],2)])},i=[],s=(n("a481"),n("ac6a"),n("28a5"),n("be94")),o=n("2f62"),a=n("adb5"),c=n("b383"),u=n.n(c),l=n("4260"),p=n("dc16"),d=n("db49"),f={name:"discuz-page",components:{},data(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(s["a"])({},Object(o["d"])(["isLoading","discuz"]),Object(o["c"])(["targetHost"]),{webSite:{get(){return this.discuz.webSite},set(t){this.$store.commit("UPDATE_DISCUZ",{webSite:t})}}}),mounted(){},activated(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount(){},destroyed(){},methods:Object(s["a"])({},Object(o["b"])(["switchHost","logout"]),{async init(){this.discuz.isLogin?(this.discuz.signInfo.isSigned||this.checkSigned(),this.getIndexPageJson()):this.discuz.webSiteList.length||this.updateWebSiteList()},async login(){let t=this.targetHost,e=this.discuz.HOST,n=this.userInfo,r=n.username,i=n.password,s=n.QA;if(r&&i){let n=s.split(","),o=n.length>1&&n[0]||null,c=n.length>1&&n[1]||null,p={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:o,answer:c,username:r,password:i,userlogin:"true"};o&&c||(delete p.questionid,delete p.answer);let d={httpConfig:{url:`${t}logging.php?action=login&loginsubmit=true`,method:"post",responseType:"arraybuffer",data:u.a.stringify(p)},encoding:"gbk"};this.$store.commit("SET_LOADING_STATUS",!0);let f=await a["a"].post(`${e}/api/advancedProxy`,d),h=f.headers;this.$store.commit("SET_LOADING_STATUS",!1),h.corscookies&&h.corscookies.split("|$$|").forEach(t=>{document.cookie=t}),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(l["c"])("cdb3_auth")}),this.checkSigned(),this.getIndexPageJson()}},async checkSigned(){let t=this.targetHost,e=this.discuz,n=e.HOST,r=e.signInfo,i={httpConfig:{url:`${t}my.php`,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:p["a"].my};this.$store.commit("SET_LOADING_STATUS",!0);let s=await a["a"].post(`${n}/api/html2Json`,i),o=s.data.data;this.$store.commit("SET_LOADING_STATUS",!1),r.formhash=o.formhash,o.recentTopics&&o.recentTopics.forEach(t=>{t&&t.title==`${o.username}/${(new Date).getMonth()+1}月份/打卡签到帖`?t.lastPost.includes((new Date).Format("yyyy-M-d"))?r.isSigned=!0:r.tid=t.tid:t&&t.title==`${o.username}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(r.prevMonthSignThreadLastPostUrl=t.lastPostUrl)}),!r.prevMonthSignThreadLastPostUrl&&o.recentReply&&o.recentReply.forEach(t=>{t&&t.title==`${o.username}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(r.prevMonthSignThreadLastPostUrl=t.href)})},async sign(){if(this.isLoading)return;this.$store.commit("SET_LOADING_STATUS",!0);let t=this.targetHost,e=this.discuz,n=e.userInfo.username,r=e.HOST,i=e.signInfo,s={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"};i.tid?Object.assign(s.httpConfig,{url:`${t}post.php?action=reply&fid=420&tid=${i.tid}&extra=&replysubmit=yes`,data:u.a.stringify({formhash:i.formhash,subject:"",message:`ID: ${n}\r\n日期: ${(new Date).Format("yyyy.M.dd")}\r\n心情: ......`})}):Object.assign(s.httpConfig,{url:`${t}post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes`,data:u.a.stringify({formhash:i.formhash,frombbs:1,typeid:797,selecttypeid:797,readperm:101,subject:`${n}/${(new Date).getMonth()+1}月份/打卡签到帖`,message:`ID: ${n}\r\n日期: ${(new Date).Format("yyyy.M.dd")}\r\n心情: ......`})}),await a["a"].post(`${r}/api/advancedProxy`,s),this.$store.commit("SET_LOADING_STATUS",!1),i.isSigned=!0},async uploadEveryMonthSignInfo(){if(confirm("确认上报上月签到数据吗？")&&confirm("再次确认")&&confirm("三次确认")){let t=this.targetHost,e=this.discuz,n=e.userInfo.username,r=e.HOST,i=e.signInfo;if(console.log(i),!i.prevMonthSignThreadLastPostUrl)return;let s={httpConfig:{url:`${t+i.prevMonthSignThreadLastPostUrl}`,method:"post",responseType:"arraybuffer"},encoding:"gbk",selector:p["a"].thread},o=await a["a"].post(`${r}/api/html2Json`,s),c=o.data.data,l=c.postList.slice(-1)[0],d={pid:l.pid,tid:c.tid,count:parseInt(l.postFloor),absPostUrl:l.absPostUrl};console.log(d);let f={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"};Object.assign(f.httpConfig,{url:`${t}post.php?action=reply&fid=420&tid=6953091&extra=page%3D1&replysubmit=yes`,data:u.a.stringify({formhash:i.formhash,subject:"",message:`ID: ${n}\r\n签到次数: ${d.count}\r\n签到链接: [bbs]${encodeURIComponent(d.absPostUrl)}[/bbs]`,fid:420,wysiwyg:0})}),await a["a"].post(`${r}/api/advancedProxy`,f),alert("上报成功!")}},async getIndexPageJson(){let t=`${this.targetHost}index.php`,e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let n={httpConfig:{url:t,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:p["a"].index};this.$store.commit("SET_LOADING_STATUS",!0);let r=await a["a"].post(`${this.discuz.HOST}/api/html2Json`,n),i=r.data.data;this.$store.commit("SET_LOADING_STATUS",!1),e=i,sessionStorage.setItem(t,JSON.stringify(e))}this.areaList=e.areaList;let n=Object.assign({},this.discuz.userInfo);n.creditList=e.creditList,n.username=e.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:n}),e.username||this.logout()},async updateWebSiteList(){let t="http://www.oznewspaper.com/",e={httpConfig:{url:t,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:p["a"].webSiteList};this.$store.commit("SET_LOADING_STATUS",!0);let n=await a["a"].post(`${d["a"]}/api/html2Json`,e),r=n.data.data;this.$store.commit("SET_LOADING_STATUS",!1);let i=[];r.webSiteList.forEach(t=>{i.push(t.replace("\n","").replace(/ .*/g,""))}),localStorage.setItem("webSiteList",JSON.stringify(i)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:i})},onScroll(t){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem("homePage",t.target.scrollTop)},100)}})},h=f,m=(n("11f1"),n("2877")),g=Object(m["a"])(h,r,i,!1,null,"7360ca19",null);g.options.__file="index.vue";e["default"]=g.exports},cadf:function(t,e,n){"use strict";var r=n("9c6c"),i=n("d53b"),s=n("84f2"),o=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},dc16:function(t,e,n){"use strict";e["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}},e099:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,a){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?s(o(t),function(o){var a=encodeURIComponent(r(o))+n;return i(t[o])?s(t[o],function(t){return a+encodeURIComponent(r(t))}).join(e):a+encodeURIComponent(r(t[o]))}).join(e):a?encodeURIComponent(r(a))+n+encodeURIComponent(r(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var o=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}}]);
//# sourceMappingURL=DiscuzView.03a16043.js.map