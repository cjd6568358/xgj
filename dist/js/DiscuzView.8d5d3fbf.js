(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"1def":function(e,t,n){},b9ce:function(e,t,n){"use strict";var r=n("1def"),i=n.n(r);i.a},bb62:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discuz-page"},[n("div",{staticClass:"overflow-container",on:{scroll:e.onScroll}},[e.discuz.isLogin?e._e():n("div",{staticClass:"login-form"},[n("center",[n("h3",[e._v("discuz论坛手机版")])]),n("div",{staticClass:"input-warp"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.webSite=t.target.multiple?n:n[0]}}},e._l(e.discuz.webSiteList,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),n("a",{staticClass:"btn",on:{click:e.updateWebSiteList}},[e._v("更新列表")])]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userInfo.username},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"username",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}})]),n("div",{staticClass:"input-warp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:e.userInfo.QA},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"QA",t.target.value)}}})]),n("a",{staticClass:"btn",on:{click:e.login}},[e._v("登录")])],1),e.discuz.isLogin?[n("ul",{staticClass:"user-info"},[n("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[e._v(e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?n("li",[e._v("已签到")]):n("li",{on:{click:e.dailySignIn}},[e._v("日签到")]),n("li",{on:{click:e.monthSignIn}},[e._v("月签到")]),n("li",{on:{click:e.logout}},[e._v("退出")])],1),e._l(e.areaList,(function(t,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":t.name}},e._l(t.value,(function(t,r){return n("router-link",{key:r,attrs:{to:{name:"DiscuzForumView",params:{url:e.targetHost+t.value}},tag:"li"}},[e._v(e._s(t.name))])})),1)}))]:e._e(),n("a",{staticClass:"btn switch",on:{click:e.switchProxy}},[e._v("切换代理源("+e._s(e.proxyServerPlatom)+")")])],2)])},i=[],s=(n("8e6e"),n("456d"),n("a481"),n("6762"),n("2fdb"),n("ac6a"),n("28a5"),n("96cf"),n("3b8d")),a=n("bd86"),o=n("2f62"),c=n("adb5"),u=n("b383"),l=n.n(u),p=n("4260"),d=n("dc16"),m=n("db49");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={name:"discuz-page",components:{},data:function(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:f({},Object(o["d"])(["isLoading","discuz"]),{},Object(o["c"])(["targetHost"]),{webSite:{get:function(){return this.discuz.webSite},set:function(e){this.$store.commit("UPDATE_DISCUZ",{webSite:e})}},proxyServerPlatom:function(){var e=this;return m["a"].filter((function(t){return t.host===e.discuz.HOST}))[0].platom}}),mounted:function(){},activated:function(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount:function(){},destroyed:function(){},methods:f({},Object(o["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"]),{init:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.discuz,n=t.isLogin,r=t.signInfo,i=t.webSiteList,n?(r.isSigned||this.checkSigned(),this.getIndexPageData()):i.length||this.updateWebSiteList();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,s,a,o,u,d,m,g,f,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.targetHost,n=this.discuz.HOST,r=this.userInfo,i=r.username,s=r.password,a=r.QA,!i||!s){e.next=18;break}return o=a.split(","),u=o.length>1&&o[0]||null,d=o.length>1&&o[1]||null,m={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:u,answer:d,username:i,password:s,userlogin:"true"},u&&d||(delete m.questionid,delete m.answer),g={httpConfig:{url:"".concat(t,"logging.php?action=login&loginsubmit=true"),method:"post",responseType:"arraybuffer",data:l.a.stringify(m)},encoding:"gbk"},this.$store.commit("SET_LOADING_STATUS",!0),e.next=11,c["a"].post("".concat(n,"/api/advancedProxy"),g);case 11:f=e.sent,h=f.headers,this.$store.commit("SET_LOADING_STATUS",!1),h.corscookies&&h.corscookies.split("|$$|").forEach((function(e){document.cookie=e})),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(p["e"])("cdb3_auth")}),this.checkSigned(),this.getIndexPageData();case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkSigned:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,s,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.targetHost,n=this.discuz.signInfo,r="".concat(t,"my.php"),i=d["a"].my,e.next=5,this.getPageData({url:r,selector:i});case 5:s=e.sent,a=s.formhash,o=s.username,s.recentReply,c=s.recentTopics,this.discuz.formhash=a,c&&c.forEach((function(e){e&&e.title=="".concat(o,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")&&(e.lastPost.includes((new Date).Format("yyyy-M-d"))?n.isSigned=!0:n.tid=e.tid)}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getIndexPageData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="".concat(this.targetHost,"index.php"),n=d["a"].index,r={},!sessionStorage.getItem(t)){e.next=7;break}r=JSON.parse(sessionStorage.getItem(t)),e.next=11;break;case 7:return e.next=9,this.getPageData({url:t,selector:n});case 9:r=e.sent,sessionStorage.setItem(t,JSON.stringify(r));case 11:this.areaList=r.areaList,i=Object.assign({},this.discuz.userInfo),i.creditList=r.creditList,i.username=r.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:i}),r.username||this.logout();case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateWebSiteList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=m["a"].filter((function(e){return e.gfw})),n=t[Math.floor(Math.random()*t.length)].host,r="http://www.oznewspaper.com/",i=d["a"].webSiteList,e.next=6,this.getPageData({url:r,selector:i,HOST:n});case 6:s=e.sent,a=[],s.webSiteList.forEach((function(e){a.push(e.replace("\n","").replace(/ .*/g,""))})),localStorage.setItem("webSiteList",JSON.stringify(a)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:a});case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onScroll:function(e){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){sessionStorage.setItem("homePage",e.target.scrollTop)}),100)}})},v=h,w=(n("b9ce"),n("2877")),b=Object(w["a"])(v,r,i,!1,null,"60b6cc3e",null);t["default"]=b.exports}}]);