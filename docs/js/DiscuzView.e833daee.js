(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"1ccc":function(t,e,n){},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),s="includes";r(r.P+r.F*n("5147")(s),"String",{includes:function(t){return!!~i(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"91dd":function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,s){e=e||"&",n=n||"=";var a={};if("string"!==typeof t||0===t.length)return a;var o=/\+/g;t=t.split(e);var c=1e3;s&&"number"===typeof s.maxKeys&&(c=s.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var p,d,h,f,m=t[l].replace(o,"%20"),g=m.indexOf(n);g>=0?(p=m.substr(0,g),d=m.substr(g+1)):(p=m,d=""),h=decodeURIComponent(p),f=decodeURIComponent(d),r(a,h)?i(a[h])?a[h].push(f):a[h]=[a[h],f]:a[h]=f}return a};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},a89f:function(t,e,n){"use strict";var r=n("1ccc"),i=n.n(r);i.a},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),s=n("2aba"),a=n("7726"),o=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),p=u("toStringTag"),d=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(h),m=0;m<f.length;m++){var g,b=f[m],v=h[b],y=a[b],S=y&&y.prototype;if(S&&(S[l]||o(S,l,d),S[p]||o(S,p,b),c[b]=d,v))for(g in r)S[g]||s(S,g,r[g],!0)}},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},bb62:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuz-page"},[n("div",{staticClass:"overflow-container"},[t.discuz.isLogin?t._e():n("div",{staticClass:"login-form"},[n("center",[n("h3",[t._v("discuz论坛手机版")])]),n("div",{staticClass:"input-warp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.webSite=e.target.multiple?n:n[0]}}},t._l(t.discuz.webSiteList,function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),n("a",{staticClass:"btn",on:{click:t.updateWebSiteList}},[t._v("更新列表")])]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userInfo.username},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"username",e.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:t.userInfo.QA},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"QA",e.target.value)}}})]),n("a",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])],1),t.discuz.isLogin?[n("ul",{staticClass:"user-info"},[n("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[t._v(t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?n("li",[t._v("已签到")]):n("li",{on:{click:t.sign}},[t._v("日签到")]),n("li",{on:{click:t.uploadEveryMonthSignInfo}},[t._v("月签到")]),n("li",{on:{click:t.logout}},[t._v("退出")])],1),t._l(t.areaList,function(e,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":e.name}},t._l(e.value,function(e,r){return n("router-link",{key:r,attrs:{to:{name:"DiscuzForumView",params:{url:t.targetHost+e.value}},tag:"li"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])}))})]:t._e(),n("a",{staticClass:"btn switch",on:{click:t.switchHost}},[t._v("切换源(当前:"+t._s(t.discuz.HOST.includes("3322")?"3322":"herokuapp")+")")])],2)])},i=[],s=(n("a481"),n("f751"),n("6762"),n("2fdb"),n("ac6a"),n("28a5"),n("96cf"),n("1da1")),a=n("be94"),o=n("2f62"),c=n("adb5"),u=n("b383"),l=n.n(u),p=n("4260"),d=n("dc16"),h=n("db49"),f={name:"discuz-page",components:{},data:function(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(a["a"])({},Object(o["d"])(["isLoading","discuz"]),Object(o["c"])(["targetHost"]),{webSite:{get:function(){return this.discuz.webSite},set:function(t){this.$store.commit("UPDATE_DISCUZ",{webSite:t})}}}),mounted:function(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST)},beforeMount:function(){},destroyed:function(){},methods:Object(a["a"])({},Object(o["b"])(["switchHost","logout"]),{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.discuz.isLogin?(this.discuz.signInfo.isSigned||this.checkSigned(),this.getIndexPageJson()):this.discuz.webSiteList.length||this.updateWebSiteList();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),login:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s,a,o,u,d,h,f,m,g;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.targetHost,n=this.discuz.HOST,r=this.userInfo,i=r.username,s=r.password,a=r.QA,!i||!s){t.next=19;break}return o=a.split(","),u=o.length>1&&o[0]||null,d=o.length>1&&o[1]||null,h={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:u,answer:d,username:i,password:s,userlogin:"true"},u&&d||(delete h.questionid,delete h.answer),f={httpConfig:{url:"".concat(e,"logging.php?action=login&loginsubmit=true"),method:"post",responseType:"arraybuffer",data:l.a.stringify(h)},encoding:"gbk"},this.$store.commit("SET_LOADING_STATUS",!0),t.next=11,c["a"].post("".concat(n,"/api/advancedProxy"),f);case 11:m=t.sent,g=m.headers,this.$store.commit("SET_LOADING_STATUS",!1),g.corscookies&&g.corscookies.split("|$$|").forEach(function(t){document.cookie=t}),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(p["c"])("cdb3_auth")}),Object(p["h"])("webSite",this.webSite),this.checkSigned(),this.getIndexPageJson();case 19:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),checkSigned:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.targetHost,n=this.discuz,r=n.HOST,i=n.signInfo,s={httpConfig:{url:"".concat(e,"my.php"),method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:d["a"].my},this.$store.commit("SET_LOADING_STATUS",!0),t.next=5,c["a"].post("".concat(r,"/api/html2Json"),s);case 5:a=t.sent,o=a.data.data,this.$store.commit("SET_LOADING_STATUS",!1),i.formhash=o.formhash,o.recentTopics&&o.recentTopics.forEach(function(t){t&&t.title=="".concat(o.username,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")?t.lastPost.includes((new Date).Format("yyyy-M-d"))?i.isSigned=!0:i.tid=t.tid:t&&t.title=="".concat(o.username,"/").concat((new Date).getMonth(),"月份/打卡签到帖")&&(i.prevMonthSignThreadLastPostUrl=t.lastPostUrl)}),!i.prevMonthSignThreadLastPostUrl&&o.recentReply&&o.recentReply.forEach(function(t){t&&t.title=="".concat(o.username,"/").concat((new Date).getMonth(),"月份/打卡签到帖")&&(i.prevMonthSignThreadLastPostUrl=t.href)});case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),sign:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isLoading){t.next=2;break}return t.abrupt("return");case 2:return this.$store.commit("SET_LOADING_STATUS",!0),e=this.targetHost,n=this.discuz,r=n.userInfo.username,i=n.HOST,s=n.signInfo,a={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"},s.tid?Object.assign(a.httpConfig,{url:"".concat(e,"post.php?action=reply&fid=420&tid=").concat(s.tid,"&extra=&replysubmit=yes"),data:l.a.stringify({formhash:s.formhash,subject:"",message:"ID: ".concat(r,"\r\n日期: ").concat((new Date).Format("yyyy.M.dd"),"\r\n心情: ......")})}):Object.assign(a.httpConfig,{url:"".concat(e,"post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes"),data:l.a.stringify({formhash:s.formhash,frombbs:1,typeid:797,selecttypeid:797,readperm:101,subject:"".concat(r,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖"),message:"ID: ".concat(r,"\r\n日期: ").concat((new Date).Format("yyyy.M.dd"),"\r\n心情: ......")})}),t.next=8,c["a"].post("".concat(i,"/api/advancedProxy"),a);case 8:this.$store.commit("SET_LOADING_STATUS",!1),s.isSigned=!0;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),uploadEveryMonthSignInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s,a,o,u,p,h,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(confirm("确认上报上月签到数据吗？")&&confirm("再次确认")&&confirm("三次确认"))){t.next=18;break}if(e=this.targetHost,n=this.discuz,r=n.userInfo.username,i=n.HOST,s=n.signInfo,console.log(s),s.prevMonthSignThreadLastPostUrl){t.next=5;break}return t.abrupt("return");case 5:return a={httpConfig:{url:"".concat(e+s.prevMonthSignThreadLastPostUrl),method:"post",responseType:"arraybuffer"},encoding:"gbk",selector:d["a"].thread},t.next=8,c["a"].post("".concat(i,"/api/html2Json"),a);case 8:return o=t.sent,u=o.data.data,p=u.postList.slice(-1)[0],h={pid:p.pid,tid:u.tid,count:parseInt(p.postFloor),absPostUrl:p.absPostUrl},console.log(h),f={httpConfig:{method:"post",responseType:"arraybuffer"},encoding:"gbk"},Object.assign(f.httpConfig,{url:"".concat(e,"post.php?action=reply&fid=420&tid=6953091&extra=page%3D1&replysubmit=yes"),data:l.a.stringify({formhash:s.formhash,subject:"",message:"ID: ".concat(r,"\r\n签到次数: ").concat(h.count,"\r\n签到链接: [bbs]").concat(encodeURIComponent(h.absPostUrl),"[/bbs]"),fid:420,wysiwyg:0})}),t.next=17,c["a"].post("".concat(i,"/api/advancedProxy"),f);case 17:alert("上报成功!");case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getIndexPageJson:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e="".concat(this.targetHost,"index.php"),n={},!sessionStorage.getItem(e)){t.next=6;break}n=JSON.parse(sessionStorage.getItem(e)),t.next=15;break;case 6:return r={httpConfig:{url:e,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:d["a"].index},this.$store.commit("SET_LOADING_STATUS",!0),t.next=10,c["a"].post("".concat(this.discuz.HOST,"/api/html2Json"),r);case 10:i=t.sent,s=i.data.data,this.$store.commit("SET_LOADING_STATUS",!1),n=s,sessionStorage.setItem(e,JSON.stringify(n));case 15:this.areaList=n.areaList,a=Object.assign({},this.discuz.userInfo),a.creditList=n.creditList,a.username=n.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:a}),n.username||this.logout();case 21:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updateWebSiteList:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="http://www.oznewspaper.com/",n={httpConfig:{url:e,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:d["a"].webSiteList},this.$store.commit("SET_LOADING_STATUS",!0),t.next=5,c["a"].post("".concat(h["a"],"/api/html2Json"),n);case 5:r=t.sent,i=r.data.data,this.$store.commit("SET_LOADING_STATUS",!1),s=[],i.webSiteList.forEach(function(t){s.push(t.replace("\n",""))}),localStorage.setItem("webSiteList",JSON.stringify(s)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:s});case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},m=f,g=(n("a89f"),n("2877")),b=Object(g["a"])(m,r,i,!1,null,"16e4f7f8",null);b.options.__file="index.vue";e["default"]=b.exports},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},dc16:function(t,e,n){"use strict";e["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{$thanks|html|replace(/<a(.*)absmiddle\">/g,'')|Number}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{$postTitle|html}\n        .postcontent .postmessage .t_msgfont{$content|html|replace(/border(.*)alt=\"\"/g,\"\")} \n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}},e099:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,o){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?s(a(t),function(a){var o=encodeURIComponent(r(a))+n;return i(t[a])?s(t[a],function(t){return o+encodeURIComponent(r(t))}).join(e):o+encodeURIComponent(r(t[a]))}).join(e):o?encodeURIComponent(r(o))+n+encodeURIComponent(r(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var a=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}}}]);
//# sourceMappingURL=DiscuzView.e833daee.js.map