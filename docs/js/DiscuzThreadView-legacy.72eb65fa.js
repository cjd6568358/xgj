(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"0f8e":function(t,e,s){},"15c6":function(t,e,s){"use strict";var n=s("c5e7"),i=s.n(n);i.a},"333d":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},i=[],o=s("cebc"),a=s("2f62"),r={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(o["a"])({},Object(a["c"])(["targetHost"])),methods:{gotoPage:function(t){console.log("".concat(this.targetHost).concat(t)),this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},c=r,l=(s("6b28"),s("2877")),u=Object(l["a"])(c,n,i,!1,null,"fa80837a",null);e["a"]=u.exports},"453b":function(t,e,s){},"4cc1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzThread-page"},[s("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"thread"},t._l(t.postList,function(e,n){return s("li",{key:n,staticClass:"post"},[s("div",{staticClass:"post-info"},[s("span",[t._v(t._s(e.postFloor))]),s("span",[t._v(t._s(e.authorName))]),s("span",[t._v(t._s(e.authorLevel))]),s("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),s("h2",[t._v(t._s(e.postTitle))]),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},i=[],o=(s("ac6a"),s("a481"),s("96cf"),s("3b8d")),a=s("cebc"),r=s("2f62"),c=s("333d"),l=s("aa9a"),u=s("dc16"),d={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(a["a"])({},Object(r["d"])(["isLoading","discuz"]),Object(r["c"])(["targetHost"]),{prevUrl:function(){var t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum){var e=this.pageInfo.currPageNum;t="thread-".concat(this.tid,"-").concat(e-1,"-1.html")}return t}}),mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreadPageJson(this.url);case 2:this.$route.query.scrollTop&&this.$nextTick(function(){document.querySelector(".overflow-container").scrollTop=e.$route.query.scrollTop});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,s,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n(),t.next=3,this.getThreadPageJson(e.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return t.stop()}},t,this)}));function e(e,s,n){return t.apply(this,arguments)}return e}(),methods:Object(a["a"])({},Object(r["b"])(["getPageData"]),{getThreadPageJson:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var s,n,i,o,a,r,c,l,d,p=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s={},!sessionStorage.getItem(e)){t.next=5;break}s=JSON.parse(sessionStorage.getItem(e)),t.next=10;break;case 5:return n=u["a"].thread,t.next=8,this.getPageData({url:e,selector:n});case 8:s=t.sent,sessionStorage.setItem(e,JSON.stringify(s));case 10:i=s,o=i.documentTitle,a=i.pageInfo,r=i.formhash,c=i.replyUrl,l=i.postList,d=void 0===l?[]:l,document.title=o,this.discuz.formhash=r,a&&(this.pageInfo=a),c&&(this.tid=c.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=c.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")),this.postList=d,this.postList.forEach(function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(p.targetHost,"attachment")).replace(/="images/g,'="'.concat(p.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(p.targetHost)).replace(/="(viewthread|thread.*)" target/g,function(t,e){return'="'.concat("/xgj/","discuz/thread/").concat(encodeURIComponent(p.targetHost+e),'" target')}).replace(/:14pt/g,":5vw")});case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},p=d,f=(s("602e"),s("2877")),g=Object(f["a"])(p,n,i,!1,null,null,null);e["default"]=g.exports},"51a2":function(t,e,s){},"602e":function(t,e,s){"use strict";var n=s("51a2"),i=s.n(n);i.a},"6b28":function(t,e,s){"use strict";var n=s("0f8e"),i=s.n(n);i.a},aa9a:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?s("li",[s("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),s("li",[s("span",{on:{click:t.onReload}},[t._v("刷新")])])])},i=[],o=(s("20d6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])}),a=[],r=(s("96cf"),s("3b8d")),c=s("cebc"),l=s("2f62"),u={props:["url","fid","tid"],data:function(){return{subject:"",message:""}},destroyed:function(){},methods:Object(c["a"])({},Object(l["b"])(["submitReply"]),{submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var s,n,i,o,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this.subject,n=this.message,i=this.fid,o=this.tid,t.next=3,this.submitReply({subject:s,message:n,fid:i,tid:o});case 3:this.closeModal(e),setTimeout(function(){sessionStorage.removeItem(a.url),location.reload(!0)},100);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),closeModal:function(t){this.$emit("closeModal",t)}})},d=u,p=(s("15c6"),s("2877")),f=Object(p["a"])(d,o,a,!1,null,"3988671c",null),g=f.exports,h={props:["url","tid","fid"],components:{},data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),s={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,s):this.collections.push(s),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply:function(){var t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(g,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload:function(){sessionStorage.removeItem(this.url),location.reload(!0)}}},m=h,v=(s("ddf2"),Object(p["a"])(m,n,i,!1,null,"38ffb1f4",null));e["a"]=v.exports},ac6a:function(t,e,s){for(var n=s("cadf"),i=s("0d58"),o=s("2aba"),a=s("7726"),r=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(f),h=0;h<g.length;h++){var m,v=g[h],b=f[v],x=a[v],w=x&&x.prototype;if(w&&(w[u]||r(w,u,p),w[d]||r(w,d,v),c[v]=p,b))for(m in n)w[m]||o(w,m,n[m],!0)}},c5e7:function(t,e,s){},ddf2:function(t,e,s){"use strict";var n=s("453b"),i=s.n(n);i.a}}]);