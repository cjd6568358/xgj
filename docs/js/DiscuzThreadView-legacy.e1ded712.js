(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"15c6":function(t,e,r){"use strict";var n=r("5b86"),o=r.n(n);o.a},"333d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination"},[t.prevUrl?r("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),r("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?r("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},o=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:c({},Object(i["c"])(["targetHost"])),methods:{gotoPage:function(t){console.log("".concat(this.targetHost).concat(t)),this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},u=l,p=(r("6b28"),r("2877")),f=Object(p["a"])(u,n,o,!1,null,"fa80837a",null);e["a"]=f.exports},"41ae":function(t,e,r){},"4cc1":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discuzThread-page"},[r("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),r("div",{staticClass:"overflow-container"},[r("ul",{staticClass:"thread"},t._l(t.postList,function(e,n){return r("li",{key:n,staticClass:"post"},[r("div",{staticClass:"post-info"},[r("span",[t._v(t._s(e.postFloor))]),r("span",[t._v(t._s(e.authorName))]),r("span",[t._v(t._s(e.authorLevel))]),r("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),r("h2",[t._v(t._s(e.postTitle))]),r("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():r("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},o=[],s=(r("8e6e"),r("456d"),r("ac6a"),r("a481"),r("96cf"),r("3b8d")),i=r("bd86"),a=r("2f62"),c=r("333d"),l=r("aa9a"),u=r("dc16");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:f({},Object(a["d"])(["isLoading","discuz"]),{},Object(a["c"])(["targetHost"]),{prevUrl:function(){var t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum){var e=this.pageInfo.currPageNum;t="thread-".concat(this.tid,"-").concat(e-1,"-1.html")}return t}}),mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreadPageJson(this.url);case 2:this.$route.query.scrollTop&&this.$nextTick(function(){document.querySelector(".overflow-container").scrollTop=e.$route.query.scrollTop});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,r,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n(),t.next=3,this.getThreadPageJson(e.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return t.stop()}},t,this)}));function e(e,r,n){return t.apply(this,arguments)}return e}(),methods:f({},Object(a["b"])(["getPageData"]),{getThreadPageJson:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,s,i,a,c,l,p,f=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r={},!sessionStorage.getItem(e)){t.next=5;break}r=JSON.parse(sessionStorage.getItem(e)),t.next=10;break;case 5:return n=u["a"].thread,t.next=8,this.getPageData({url:e,selector:n});case 8:r=t.sent,sessionStorage.setItem(e,JSON.stringify(r));case 10:o=r,s=o.documentTitle,i=o.pageInfo,a=o.formhash,c=o.replyUrl,l=o.postList,p=void 0===l?[]:l,document.title=s,this.discuz.formhash=a,i&&(this.pageInfo=i),c&&(this.tid=c.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=c.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")),this.postList=p,this.postList.forEach(function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(f.targetHost,"attachment")).replace(/="images/g,'="'.concat(f.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(f.targetHost)).replace(/="(viewthread|thread.*)" target/g,function(t,e){return'="'.concat("/xgj/","discuz/thread/").concat(encodeURIComponent(f.targetHost+e),'" target')}).replace(/:14pt/g,":5vw")});case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},g=d,h=(r("602e"),r("2877")),m=Object(h["a"])(g,n,o,!1,null,null,null);e["default"]=m.exports},"5b86":function(t,e,r){},"602e":function(t,e,r){"use strict";var n=r("b0ad"),o=r.n(n);o.a},"6b28":function(t,e,r){"use strict";var n=r("41ae"),o=r.n(n);o.a},aa9a:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:t.isOpened&&"opened"},[r("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs",[r("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[r("title",[t._v("close")]),r("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),r("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[r("svg",[r("use",{attrs:{"xlink:href":"#icon-close"}})])]),r("li",[r("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?r("li",[r("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?r("li",[r("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),r("li",[r("span",{on:{click:t.onReload}},[t._v("刷新")])])])},o=[],s=(r("20d6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reply-modal"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),r("ul",[r("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),r("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])}),i=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),c=r("bd86"),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var f={props:["url","fid","tid"],data:function(){return{subject:"",message:""}},destroyed:function(){},methods:p({},Object(l["b"])(["submitReply"]),{submit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var r,n,o,s,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this.subject,n=this.message,o=this.fid,s=this.tid,t.next=3,this.submitReply({subject:r,message:n,fid:o,tid:s});case 3:this.closeModal(e),setTimeout(function(){sessionStorage.removeItem(i.url),location.reload(!0)},100);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),closeModal:function(t){this.$emit("closeModal",t)}})},d=f,g=(r("15c6"),r("2877")),h=Object(g["a"])(d,s,i,!1,null,"3988671c",null),m=h.exports,v={props:["url","tid","fid"],components:{},data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),r={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,r):this.collections.push(r),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply:function(){var t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(m,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload:function(){sessionStorage.removeItem(this.url),location.reload(!0)}}},b=v,O=(r("ddf2"),Object(g["a"])(b,n,o,!1,null,"38ffb1f4",null));e["a"]=O.exports},b0ad:function(t,e,r){},ddf2:function(t,e,r){"use strict";var n=r("f0f8"),o=r.n(n);o.a},f0f8:function(t,e,r){}}]);