(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzMyView"],{2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),c=n("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},4513:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discuzMy-page"},[n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"user-info"},[n("li",[e._v("用户名:"+e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?n("li",[e._v(" 签到状态:"+e._s(e.discuz.signInfo.isSigned?"已签到":"未签到")+" ")]):e._e(),e._l(e.creditList,(function(t){return n("li",{key:t},[e._v(e._s(t))])}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"我的收藏"}},[e._l(e.collections,(function(t,r){return[t?n("li",{key:r},[n("router-link",{attrs:{to:{name:"DiscuzThreadView",params:{url:t.href},query:{scrollTop:t.scrollTop}}}},[e._v(e._s(t.title))])],1):e._e()]}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"最近回复"}},[e._l(e.recentReply,(function(t,r){return[t?n("router-link",{key:r,attrs:{to:{name:"DiscuzThreadView",params:{url:t.href}},tag:"li"}},[e._v(e._s(t.title))]):e._e()]}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"最近主题"}},[e._l(e.recentTopics,(function(t,r){return[t?n("router-link",{key:r,attrs:{to:{name:"DiscuzThreadView",params:{url:t.href}},tag:"li"}},[e._v(e._s(t.title))]):e._e()]}))],2)])])},a=[],i=(n("99af"),n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("159b"),n("96cf"),n("1da1")),c=n("5530"),s=n("2f62"),o=(n("adb5"),n("4260")),u={name:"discuz-page",components:{},data:function(){return{collections:[],creditList:[],recentReply:[],recentTopics:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])(["isLoading","discuz"])),Object(s["c"])(["targetHost"])),mounted:function(){this.init()},beforeMount:function(){},destroyed:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["getPageData"])),{},{init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.discuz.isLogin){t.next=6;break}return t.next=3,e.getMyPageData();case 3:e.collections=JSON.parse(localStorage.getItem("collections"))||[],t.next=7;break;case 6:e.$router.replace("/index");case 7:case"end":return t.stop()}}),t)})))()},getMyPageData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,c,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.targetHost,r=e.discuz,a=r.userInfo,i=r.signInfo,c="".concat(n,"my.php"),s=o["l"].my,t.next=5,e.getPageData({url:c,selector:s});case 5:u=t.sent,a.username=u.username,e.creditList=u.creditList,e.recentReply=u.recentReply,e.recentTopics=u.recentTopics,e.recentTopics&&e.recentTopics.forEach((function(e){e&&e.title=="".concat(u.username,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")&&(e.lastPost.includes((new Date).Format("yyyy-M-d"))?i.isSigned=!0:i.tid=e.tid)}));case 11:case"end":return t.stop()}}),t)})))()}})},l=u,d=(n("eefe"),n("2877")),f=Object(d["a"])(l,r,a,!1,null,"41b9c054",null);t["default"]=f.exports},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"83a5":function(e,t,n){},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2"),c=n("ae40"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!s},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},eefe:function(e,t,n){"use strict";n("83a5")}}]);