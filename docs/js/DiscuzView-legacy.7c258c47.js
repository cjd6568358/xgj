(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"0d37":function(e,t,n){"use strict";n("1c4f")},"1c4f":function(e,t,n){},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("5a34"),s=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(s(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},bb62:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discuz-page"},[n("div",{staticClass:"overflow-container",on:{scroll:e.onScroll}},[e.discuz.isLogin?e._e():n("div",{staticClass:"login-form"},[n("center",[n("h3",[e._v("discuz论坛手机版")])]),n("div",{staticClass:"input-warp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.webSite=t.target.multiple?n:n[0]}}},e._l(e.discuz.webSiteList,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),n("a",{staticClass:"btn",on:{click:e.updateWebSiteList}},[e._v("更新列表")])]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userInfo.username},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"username",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:e.userInfo.QA},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"QA",t.target.value)}}})]),n("a",{staticClass:"btn",on:{click:e.login}},[e._v("登录")])],1),e.discuz.isLogin?[n("ul",{staticClass:"user-info"},[n("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[e._v(e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?n("li",[e._v("已签到")]):n("li",{on:{click:e.dailySignIn}},[e._v("日签到")]),n("li",{on:{click:e.monthSignIn}},[e._v("月签到")]),n("li",{on:{click:e.logout}},[e._v("退出")])],1),e._l(e.areaList,(function(t,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":t.name}},e._l(t.value,(function(t,r){return n("router-link",{key:r,attrs:{to:{name:"DiscuzForumView",params:{url:t.value}},tag:"li"}},[e._v(e._s(t.name))])})),1)}))]:e._e(),n("a",{staticClass:"btn switch",on:{click:e.switchProxy}},[e._v("切换代理源("+e._s(e.proxyServerPlatom)+")")])],2)])},i=[],s=(n("99af"),n("4de4"),n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("159b"),n("96cf"),n("1da1")),a=n("5530"),o=n("2f62"),c=n("adb5"),u=n("b383"),l=n.n(u),d=n("4260"),m={name:"discuz-page",components:{},data:function(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["d"])(["isLoading","discuz"])),Object(o["c"])(["targetHost"])),{},{webSite:{get:function(){return this.discuz.webSite},set:function(e){this.$store.commit("UPDATE_DISCUZ",{webSite:e})}},proxyServerPlatom:function(){var e=this;return d["k"].filter((function(t){return t.host===e.discuz.HOST}))[0].platom}}),mounted:function(){},activated:function(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount:function(){},destroyed:function(){},methods:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"])),{},{init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.discuz,r=n.isLogin,i=n.signInfo,s=n.webSiteList,r?(i.isSigned||e.checkSigned(),e.getIndexPageData()):s.length||e.updateWebSiteList();case 2:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,s,a,o,u,m,g,f,p,h,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.targetHost,r=e.discuz.HOST,i=e.userInfo,s=i.username,a=i.password,o=i.QA,!s||!a){t.next=18;break}return u=o.split(","),m=u.length>1&&u[0]||null,g=u.length>1&&u[1]||null,f={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:m,answer:g,username:s,password:a,userlogin:"true"},m&&g||(delete f.questionid,delete f.answer),p={httpConfig:{url:"".concat(n,"logging.php?action=login&loginsubmit=true"),method:"post",responseType:"arraybuffer",data:l.a.stringify(f)},encoding:"gbk"},e.$store.commit("SET_LOADING_STATUS",!0),t.next=11,c["a"].post("".concat(r,"/api/advancedProxy"),p);case 11:h=t.sent,v=h.headers,e.$store.commit("SET_LOADING_STATUS",!1),v.corscookies&&v.corscookies.split("|$$|").forEach((function(e){document.cookie=e})),e.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(d["e"])("cdb3_auth")}),e.checkSigned(),e.getIndexPageData();case 18:case"end":return t.stop()}}),t)})))()},checkSigned:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,s,a,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.targetHost,r=e.discuz.signInfo,i="".concat(n,"my.php"),s=d["l"].my,t.next=5,e.getPageData({url:i,selector:s});case 5:a=t.sent,o=a.formhash,c=a.username,a.recentReply,u=a.recentTopics,e.discuz.formhash=o,u&&u.forEach((function(e){e&&e.title=="".concat(c,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")&&(e.lastPost.includes((new Date).Format("yyyy-M-d"))?r.isSigned=!0:r.tid=e.tid)}));case 9:case"end":return t.stop()}}),t)})))()},getIndexPageData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="".concat(e.targetHost,"index.php"),r=d["l"].index,i={},!sessionStorage.getItem(n)){t.next=7;break}i=JSON.parse(sessionStorage.getItem(n)),t.next=11;break;case 7:return t.next=9,e.getPageData({url:n,selector:r});case 9:i=t.sent,sessionStorage.setItem(n,JSON.stringify(i));case 11:e.areaList=i.areaList,s=Object.assign({},e.discuz.userInfo),s.creditList=i.creditList,s.username=i.username,e.$store.commit("UPDATE_DISCUZ",{userInfo:s}),i.username||e.logout();case 17:case"end":return t.stop()}}),t)})))()},updateWebSiteList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,i,s,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=d["k"].filter((function(e){return e.gfw})),r=n[Math.floor(Math.random()*n.length)].host,i="http://www.oznewspaper.com/",s=d["l"].webSiteList,t.next=6,e.getPageData({url:i,selector:s,HOST:r});case 6:a=t.sent,o=[],a.webSiteList.forEach((function(e){o.push(e.replace("\n","").replace(/ .*/g,""))})),localStorage.setItem("webSiteList",JSON.stringify(o)),e.$store.commit("UPDATE_DISCUZ",{webSiteList:o});case 11:case"end":return t.stop()}}),t)})))()},onScroll:function(e){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){sessionStorage.setItem("homePage",e.target.scrollTop)}),100)}})},g=m,f=(n("0d37"),n("2877")),p=Object(f["a"])(g,r,i,!1,null,"3f2e9644",null);t["default"]=p.exports},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,s=n("44d2"),a=n("ae40"),o=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!o},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);