(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"05d9":function(t,e,n){},"333d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},r=[],a=n("be94"),o=n("2f62"),i={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(a["a"])({},Object(o["c"])(["targetHost"])),methods:{gotoPage:function(t){this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},c=i,l=(n("b741"),n("2877")),u=Object(l["a"])(c,s,r,!1,null,"f82b4964",null);u.options.__file="index.vue";e["a"]=u.exports},"4cc1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzThread-page"},[n("Menus",{attrs:{url:t.url}}),n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"thread"},t._l(t.postList,function(e,s){return n("li",{key:s,staticClass:"post"},[n("div",{staticClass:"post-info"},[n("span",[t._v(t._s(e.postFloor))]),n("span",[t._v(t._s(e.authorName))]),n("span",[t._v(t._s(e.authorLevel))]),n("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),n("h2",[t._v(t._s(e.postTitle))]),n("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():n("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},r=[],a=(n("ac6a"),n("96cf"),n("1da1")),o=(n("a481"),n("be94")),i=(n("cadf"),n("551c"),n("097d"),n("2f62")),c=(n("adb5"),n("333d")),l=n("aa9a"),u=n("dc16"),p={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(o["a"])({},Object(i["d"])(["isLoading","discuz"]),Object(i["c"])(["targetHost"]),{prevUrl:function(){var t="";return this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,"".concat(this.pageInfo.currPageNum-1,".html"))),t}}),mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreadPageJson(this.url);case 2:this.$route.query.scrollTop&&this.$nextTick(function(){document.querySelector(".overflow-container").scrollTop=e.$route.query.scrollTop});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s(),t.next=3,this.getThreadPageJson(e.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return t.stop()}},t,this)}));function e(e,n,s){return t.apply(this,arguments)}return e}(),methods:Object(o["a"])({},mapActions(["getPageData"]),{getThreadPageJson:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,s,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n={},!sessionStorage.getItem(e)){t.next=5;break}n=JSON.parse(sessionStorage.getItem(e)),t.next=10;break;case 5:return s=u["a"].thread,t.next=8,this.getPageData({url:e,selector:s});case 8:n=t.sent,sessionStorage.setItem(e,JSON.stringify(n));case 10:document.title=n.documentTitle,n.pageInfo&&(this.pageInfo=n.pageInfo),this.postList=n.postList,this.postList.forEach(function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(r.targetHost,"attachment")).replace(/="images/g,'="'.concat(r.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(r.targetHost)).replace(/="(viewthread|thread.*)" target/g,function(t,e,n,s){return'="'.concat("/xgj/","discuz/thread/").concat(encodeURIComponent(r.targetHost+e),'" target')}).replace(/:14pt/g,":5vw")});case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},g=p,d=(n("602e"),n("2877")),f=Object(d["a"])(g,s,r,!1,null,null,null);f.options.__file="thread.vue";e["default"]=f.exports},"51a2":function(t,e,n){},"602e":function(t,e,n){"use strict";var s=n("51a2"),r=n.n(s);r.a},"65f8":function(t,e,n){"use strict";var s=n("9449"),r=n.n(s);r.a},9449:function(t,e,n){},aa9a:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveReadProgress}},[t._v("收藏")])]),t.readProgress?n("li",[n("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},r=[],a=(n("20d6"),n("28a5"),n("a481"),n("6762"),n("2fdb"),{props:["url"],data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{tid:function(){return this.url.includes("redirect.php?goto")?this.url.replace(/^redirect.*ptid=/g,""):this.url.split("-")[1]},readProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),n={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,n):this.collections.push(n),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))}}}),o=a,i=(n("65f8"),n("2877")),c=Object(i["a"])(o,s,r,!1,null,"0039b2a0",null);c.options.__file="index.vue";e["a"]=c.exports},ac6a:function(t,e,n){for(var s=n("cadf"),r=n("0d58"),a=n("2aba"),o=n("7726"),i=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),p=l("toStringTag"),g=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(d),h=0;h<f.length;h++){var m,v=f[h],b=d[v],L=o[v],P=L&&L.prototype;if(P&&(P[u]||i(P,u,g),P[p]||i(P,p,v),c[v]=g,b))for(m in s)P[m]||a(P,m,s[m],!0)}},b741:function(t,e,n){"use strict";var s=n("05d9"),r=n.n(s);r.a}}]);
//# sourceMappingURL=DiscuzThreadView-legacy.ff99c7c1.js.map