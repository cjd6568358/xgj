(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"76e9":function(e,t,n){},ac6a:function(e,t,n){for(var i=n("cadf"),s=n("0d58"),r=n("2aba"),a=n("7726"),o=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),d=u("toStringTag"),p=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(g),f=0;f<m.length;f++){var h,S=m[f],v=g[S],w=a[S],b=w&&w.prototype;if(b&&(b[l]||o(b,l,p),b[d]||o(b,d,S),c[S]=p,v))for(h in i)b[h]||r(b,h,i[h],!0)}},bb62:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discuz-page"},[n("div",{staticClass:"overflow-container",on:{scroll:e.onScroll}},[e.discuz.isLogin?e._e():n("div",{staticClass:"login-form"},[n("center",[n("h3",[e._v("discuz论坛手机版")])]),n("div",{staticClass:"input-warp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.webSite=t.target.multiple?n:n[0]}}},e._l(e.discuz.webSiteList,function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),0),n("a",{staticClass:"btn",on:{click:e.updateWebSiteList}},[e._v("更新列表")])]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userInfo.username},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"username",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:e.userInfo.QA},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"QA",t.target.value)}}})]),n("a",{staticClass:"btn",on:{click:e.login}},[e._v("登录")])],1),e.discuz.isLogin?[n("ul",{staticClass:"user-info"},[n("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[e._v(e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?n("li",[e._v("已签到")]):n("li",{on:{click:e.dailySignIn}},[e._v("日签到")]),n("li",{on:{click:e.monthSignIn}},[e._v("月签到")]),n("li",{on:{click:e.logout}},[e._v("退出")])],1),e._l(e.areaList,function(t,i){return n("ul",{key:i,staticClass:"area",attrs:{"data-title":t.name}},e._l(t.value,function(t,i){return n("router-link",{key:i,attrs:{to:{name:"DiscuzForumView",params:{url:e.targetHost+t.value}},tag:"li"}},[e._v(e._s(t.name))])}),1)})]:e._e(),n("a",{staticClass:"btn switch",on:{click:e.switchProxy}},[e._v("切换代理源("+e._s(e.proxyServerPlatom)+")")])],2)])},s=[],r=(n("a481"),n("f751"),n("6762"),n("2fdb"),n("ac6a"),n("28a5"),n("96cf"),n("1da1")),a=n("be94"),o=n("2f62"),c=n("adb5"),u=n("b383"),l=n.n(u),d=n("4260"),p=n("dc16"),g=n("db49"),m={name:"discuz-page",components:{},data:function(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(a["a"])({},Object(o["d"])(["isLoading","discuz"]),Object(o["c"])(["targetHost"]),{webSite:{get:function(){return this.discuz.webSite},set:function(e){this.$store.commit("UPDATE_DISCUZ",{webSite:e})}},proxyServerPlatom:function(){var e=this;return g["a"].filter(function(t){return t.host===e.discuz.HOST})[0].platom}}),mounted:function(){},activated:function(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount:function(){},destroyed:function(){},methods:Object(a["a"])({},Object(o["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"]),{init:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.discuz,n=t.isLogin,i=t.signInfo,s=t.webSiteList,n?(i.isSigned||this.checkSigned(),this.getIndexPageData()):s.length||this.updateWebSiteList();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i,s,r,a,o,u,p,g,m,f,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.targetHost,n=this.discuz.HOST,i=this.userInfo,s=i.username,r=i.password,a=i.QA,!s||!r){e.next=18;break}return o=a.split(","),u=o.length>1&&o[0]||null,p=o.length>1&&o[1]||null,g={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:u,answer:p,username:s,password:r,userlogin:"true"},u&&p||(delete g.questionid,delete g.answer),m={httpConfig:{url:"".concat(t,"logging.php?action=login&loginsubmit=true"),method:"post",responseType:"arraybuffer",data:l.a.stringify(g)},encoding:"gbk"},this.$store.commit("SET_LOADING_STATUS",!0),e.next=11,c["a"].post("".concat(n,"/api/advancedProxy"),m);case 11:f=e.sent,h=f.headers,this.$store.commit("SET_LOADING_STATUS",!1),h.corscookies&&h.corscookies.split("|$$|").forEach(function(e){document.cookie=e}),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(d["e"])("cdb3_auth")}),this.checkSigned(),this.getIndexPageJson();case 18:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),checkSigned:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i,s,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.targetHost,n=this.discuz.signInfo,"".concat(t,"my.php"),p["a"].my,e.next=5,this.getPageData();case 5:i=e.sent,s=i.formhash,r=i.username,a=i.recentReply,o=i.recentTopics,n.formhash=s,o&&o.forEach(function(e){e&&e.title=="".concat(r,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")?e.lastPost.includes((new Date).Format("yyyy-M-d"))?n.isSigned=!0:n.tid=e.tid:e&&e.title=="".concat(r,"/").concat((new Date).getMonth()||12,"月份/打卡签到帖")&&(n.prevMonthSignThreadLastPostUrl=e.lastPostUrl)}),!n.prevMonthSignThreadLastPostUrl&&a&&a.forEach(function(e){e&&e.title=="".concat(r,"/").concat((new Date).getMonth()||12,"月份/打卡签到帖")&&(n.prevMonthSignThreadLastPostUrl=e.href)});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getIndexPageData:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="".concat(this.targetHost,"index.php"),n=p["a"].index,i={},!sessionStorage.getItem(t)){e.next=7;break}i=JSON.parse(sessionStorage.getItem(t)),e.next=11;break;case 7:return e.next=9,this.getPageData({url:t,selector:n});case 9:i=e.sent,sessionStorage.setItem(t,JSON.stringify(i));case 11:this.areaList=i.areaList,s=Object.assign({},this.discuz.userInfo),s.creditList=i.creditList,s.username=i.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:s}),i.username||this.logout();case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),updateWebSiteList:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i,s,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=g["a"].filter(function(e){return e.gfw}),n=t[Math.floor(Math.random()*t.length)].host,i="http://www.oznewspaper.com/",s=p["a"].webSiteList,e.next=6,this.getPageData({url:i,selector:s,HOST:n});case 6:r=e.sent,a=[],r.webSiteList.forEach(function(e){a.push(e.replace("\n","").replace(/ .*/g,""))}),localStorage.setItem("webSiteList",JSON.stringify(a)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:a});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onScroll:function(e){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){sessionStorage.setItem("homePage",e.target.scrollTop)},100)}})},f=m,h=(n("f945"),n("2877")),S=Object(h["a"])(f,i,s,!1,null,"7a29dd41",null);S.options.__file="index.vue";t["default"]=S.exports},f945:function(e,t,n){"use strict";var i=n("76e9"),s=n.n(i);s.a}}]);
//# sourceMappingURL=DiscuzView-legacy.95e8010e.js.map