(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzMyView"],{"247b":function(e,t,n){"use strict";n("c5ce")},4513:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discuzMy-page"},[n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"user-info"},[n("li",[e._v("用户名:"+e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?n("li",[e._v("签到状态:"+e._s(e.discuz.signInfo.isSigned?"已签到":"未签到"))]):e._e(),e._l(e.creditList,(function(t){return n("li",{key:t},[e._v(e._s(t))])}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"我的收藏"}},[e._l(e.collections,(function(t,a){return[t?n("li",{key:a},[n("router-link",{attrs:{to:{name:"DiscuzThreadView",params:{url:t.href},query:{scrollTop:t.scrollTop}}}},[e._v(e._s(t.title))])],1):e._e()]}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"最近回复"}},[e._l(e.recentReply,(function(t,a){return[t?n("router-link",{key:a,attrs:{to:{name:"DiscuzThreadView",params:{url:e.targetHost+t.href}},tag:"li"}},[e._v(e._s(t.title))]):e._e()]}))],2),n("ul",{staticClass:"area",attrs:{"data-title":"最近主题"}},[e._l(e.recentTopics,(function(t,a){return[t?n("router-link",{key:a,attrs:{to:{name:"DiscuzThreadView",params:{url:e.targetHost+t.href}},tag:"li"}},[e._v(e._s(t.title))]):e._e()]}))],2)])])},r=[],c=(n("99af"),n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("159b"),n("96cf"),n("1da1")),i=n("5530"),s=n("2f62"),o=(n("adb5"),n("dc16")),u={name:"discuz-page",components:{},data:function(){return{collections:[],creditList:[],recentReply:[],recentTopics:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["isLoading","discuz"])),Object(s["c"])(["targetHost"])),mounted:function(){this.init()},beforeMount:function(){},destroyed:function(){},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["getPageData"])),{},{init:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.discuz.isLogin){t.next=6;break}return t.next=3,e.getMyPageData();case 3:e.collections=JSON.parse(localStorage.getItem("collections"))||[],t.next=7;break;case 6:e.$router.replace("/index");case 7:case"end":return t.stop()}}),t)})))()},getMyPageData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,i,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.targetHost,a=e.discuz,r=a.userInfo,c=a.signInfo,i="".concat(n,"my.php"),s=o["a"].my,t.next=5,e.getPageData({url:i,selector:s});case 5:u=t.sent,r.username=u.username,e.creditList=u.creditList,e.recentReply=u.recentReply,e.recentTopics=u.recentTopics,e.recentTopics&&e.recentTopics.forEach((function(e){e&&e.title=="".concat(u.username,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")&&(e.lastPost.includes((new Date).Format("yyyy-M-d"))?c.isSigned=!0:c.tid=e.tid)}));case 11:case"end":return t.stop()}}),t)})))()}})},l=u,d=(n("247b"),n("2877")),f=Object(d["a"])(l,a,r,!1,null,"fb5a0b94",null);t["default"]=f.exports},c5ce:function(e,t,n){}}]);