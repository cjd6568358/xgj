(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzMyView"],{4513:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discuzMy-page"},[i("div",{staticClass:"overflow-container"},[i("ul",{staticClass:"user-info"},[i("li",[t._v("用户名:"+t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?i("li",[t._v("签到状态:"+t._s(t.discuz.signInfo.isSigned?"已签到":"未签到"))]):t._e(),t._l(t.creditList,function(e){return i("li",{key:e},[t._v(t._s(e))])})],2),i("ul",{staticClass:"area",attrs:{"data-title":"我的收藏"}},[t._l(t.collections,function(e,n){return[e?i("li",{key:n},[i("router-link",{attrs:{to:{name:"DiscuzThreadView",params:{url:e.href},query:{scrollTop:e.scrollTop}}}},[t._v(t._s(e.title))])],1):t._e()]})],2),i("ul",{staticClass:"area",attrs:{"data-title":"最近回复"}},[t._l(t.recentReply,function(e,n){return[e?i("router-link",{key:n,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v(t._s(e.title))]):t._e()]})],2),i("ul",{staticClass:"area",attrs:{"data-title":"最近主题"}},[t._l(t.recentTopics,function(e,n){return[e?i("router-link",{key:n,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v(t._s(e.title))]):t._e()]})],2)])])},r=[],a=(i("6762"),i("2fdb"),i("ac6a"),i("a481"),i("96cf"),i("3b8d")),s=i("cebc"),c=i("2f62"),o=(i("adb5"),i("dc16")),u={name:"discuz-page",components:{},data:function(){return{collections:[],creditList:[],recentReply:[],recentTopics:[]}},computed:Object(s["a"])({},Object(c["d"])(["isLoading","discuz"]),Object(c["c"])(["targetHost"])),mounted:function(){this.init()},beforeMount:function(){},destroyed:function(){},methods:Object(s["a"])({},Object(c["b"])(["getPageData"]),{init:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.discuz.isLogin){t.next=6;break}return t.next=3,this.getMyPageData();case 3:this.collections=JSON.parse(localStorage.getItem("collections"))||[],t.next=7;break;case 6:this.$router.replace("/index");case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyPageData:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,i,n,r,a,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.targetHost,i=this.discuz,n=i.userInfo,r=i.signInfo,a="".concat(e,"my.php"),s=o["a"].my,t.next=5,this.getPageData({url:a,selector:s});case 5:c=t.sent,n.username=c.username,this.creditList=c.creditList,this.recentReply=c.recentReply,this.recentTopics=c.recentTopics,this.recentTopics&&this.recentTopics.forEach(function(t){t&&t.title=="".concat(c.username,"/").concat((new Date).getMonth()+1,"月份/打卡签到帖")&&(t.lastPost.includes((new Date).Format("yyyy-M-d"))?r.isSigned=!0:r.tid=t.tid)});case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},l=u,d=(i("ba8e"),i("2877")),f=Object(d["a"])(l,n,r,!1,null,"0cadcd86",null);e["default"]=f.exports},ac6a:function(t,e,i){for(var n=i("cadf"),r=i("0d58"),a=i("2aba"),s=i("7726"),c=i("32e9"),o=i("84f2"),u=i("2b4c"),l=u("iterator"),d=u("toStringTag"),f=o.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=r(p),h=0;h<g.length;h++){var m,L=g[h],y=p[L],S=s[L],b=S&&S.prototype;if(b&&(b[l]||c(b,l,f),b[d]||c(b,d,L),o[L]=f,y))for(m in n)b[m]||a(b,m,n[m],!0)}},b670:function(t,e,i){},ba8e:function(t,e,i){"use strict";var n=i("b670"),r=i.n(n);r.a}}]);