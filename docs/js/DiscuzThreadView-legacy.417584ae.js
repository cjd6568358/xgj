(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"1ba1":function(t,e,s){},"1ef3":function(t,e,s){"use strict";var n=s("ce47"),i=s.n(n);i.a},"333d":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},i=[],a=s("be94"),r=s("2f62"),o={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(a["a"])({},Object(r["c"])(["targetHost"])),methods:{gotoPage:function(t){console.log(t),this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},c=o,l=(s("7afd"),s("2877")),u=Object(l["a"])(c,n,i,!1,null,"02fe0c40",null);u.options.__file="index.vue";e["a"]=u.exports},"4cc1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzThread-page"},[s("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"thread"},t._l(t.postList,function(e,n){return s("li",{key:n,staticClass:"post"},[s("div",{staticClass:"post-info"},[s("span",[t._v(t._s(e.postFloor))]),s("span",[t._v(t._s(e.authorName))]),s("span",[t._v(t._s(e.authorLevel))]),s("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),s("h2",[t._v(t._s(e.postTitle))]),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])})),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},i=[],a=(s("ac6a"),s("96cf"),s("1da1")),r=(s("a481"),s("be94")),o=s("2f62"),c=(s("adb5"),s("333d")),l=s("aa9a"),u=s("dc16"),d={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(r["a"])({},Object(o["d"])(["isLoading","discuz"]),Object(o["c"])(["targetHost"]),{prevUrl:function(){var t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url){var e=this.pageInfo.currPageNum;t=this.url.replace(/.*bbs\//g,"").replace(/(^.*\d{5,}-)(\d.*)(-1.html)/g,"$1"+(e-1)+"$3")}return t}}),mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreadPageJson(this.url);case 2:this.$route.query.scrollTop&&this.$nextTick(function(){document.querySelector(".overflow-container").scrollTop=e.$route.query.scrollTop});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,s,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n(),t.next=3,this.getThreadPageJson(e.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return t.stop()}},t,this)}));return function(e,s,n){return t.apply(this,arguments)}}(),methods:Object(r["a"])({},Object(o["b"])(["getPageData"]),{getThreadPageJson:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var s,n,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s={},!sessionStorage.getItem(e)){t.next=5;break}s=JSON.parse(sessionStorage.getItem(e)),t.next=10;break;case 5:return n=u["a"].thread,t.next=8,this.getPageData({url:e,selector:n});case 8:s=t.sent,sessionStorage.setItem(e,JSON.stringify(s));case 10:document.title=s.documentTitle,s.pageInfo&&(this.pageInfo=s.pageInfo),this.discuz.formhash=s.formhash,this.tid=s.replyUrl.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=s.replyUrl.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2"),this.postList=s.postList,this.postList.forEach(function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(i.targetHost,"attachment")).replace(/="images/g,'="'.concat(i.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(i.targetHost)).replace(/="(viewthread|thread.*)" target/g,function(t,e,s,n){return'="'.concat("/xgj/","discuz/thread/").concat(encodeURIComponent(i.targetHost+e),'" target')}).replace(/:14pt/g,":5vw")});case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},p=d,f=(s("602e"),s("2877")),g=Object(f["a"])(p,n,i,!1,null,null,null);g.options.__file="thread.vue";e["default"]=g.exports},"51a2":function(t,e,s){},"602e":function(t,e,s){"use strict";var n=s("51a2"),i=s.n(n);i.a},6520:function(t,e,s){},"7afd":function(t,e,s){"use strict";var n=s("1ba1"),i=s.n(n);i.a},aa9a:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveReadProgress}},[t._v("收藏")])]),s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]),t.readProgress?s("li",[s("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},i=[],a=(s("20d6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])}),r=[],o=(s("96cf"),s("1da1")),c=s("be94"),l=s("2f62"),u={props:["url","fid","tid"],data:function(){return{subject:"",message:""}},destroyed:function(){},methods:Object(c["a"])({},Object(l["b"])(["submitReply"]),{submit:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var s,n,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this.subject,n=this.message,i=this.fid,a=this.tid,t.next=3,this.submitReply({subject:s,message:n,fid:i,tid:a});case 3:this.closeModal(e);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),closeModal:function(t){this.$emit("closeModal",t)}})},d=u,p=(s("1ef3"),s("2877")),f=Object(p["a"])(d,a,r,!1,null,"7dd4f8f3",null);f.options.__file="index.vue";var g=f.exports,h={props:["url","tid","fid"],components:{Reply:g},data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{readProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),s={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,s):this.collections.push(s),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply:function(){var t=this.$createElement;console.log(this.url),this.$openModal({position:"bottom",maskClosable:!0,content:t(g,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()}}},m=h,v=(s("ed57"),Object(p["a"])(m,n,i,!1,null,"664f6a02",null));v.options.__file="index.vue";e["a"]=v.exports},ac6a:function(t,e,s){for(var n=s("cadf"),i=s("0d58"),a=s("2aba"),r=s("7726"),o=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(f),h=0;h<g.length;h++){var m,v=g[h],b=f[v],x=r[v],_=x&&x.prototype;if(_&&(_[u]||o(_,u,p),_[d]||o(_,d,v),c[v]=p,b))for(m in n)_[m]||a(_,m,n[m],!0)}},ce47:function(t,e,s){},ed57:function(t,e,s){"use strict";var n=s("6520"),i=s.n(n);i.a}}]);
//# sourceMappingURL=DiscuzThreadView-legacy.417584ae.js.map