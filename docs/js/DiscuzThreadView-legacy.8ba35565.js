(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"04b1":function(t,e,n){"use strict";n("a82c")},2532:function(t,e,n){"use strict";var r=n("23e7"),o=n("5a34"),s=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(s(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.pageNum+"/"+t.pageCount))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},o=[],s=n("5530"),a=n("2f62"),i={props:["prevUrl","nextUrl","pageNum","pageCount"],computed:Object(s["a"])({},Object(a["c"])(["targetHost"])),methods:{gotoPage:function(t){this.$router.push(encodeURIComponent(t))}}},c=i,l=(n("a777"),n("2877")),u=Object(l["a"])(c,r,o,!1,null,"41e63b94",null);e["a"]=u.exports},"4cc1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzThread-page"},[n("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"thread"},t._l(t.postList,(function(e,r){return n("li",{key:r,staticClass:"post"},[n("div",{staticClass:"post-info"},[n("span",[t._v(t._s(e.postFloor))]),n("span",[t._v(t._s(e.authorName))]),n("span",[t._v(t._s(e.authorLevel))]),n("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),n("h2",[t._v(t._s(e.postTitle))]),n("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)},on:{"!click":function(e){return t.routerTo(e)}}})])})),0),t.isLoading?t._e():n("Pagination",{attrs:{pageNum:t.pageInfo.pageNum,pageCount:t.pageInfo.pageCount,prevUrl:t.prevUrl,nextUrl:t.nextUrl}})],1)],1)},o=[],s=(n("99af"),n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("159b"),n("96cf"),n("1da1")),a=n("5530"),i=n("2f62"),c=n("333d"),l=n("aa9a"),u=n("4260"),d={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],tid:"",fid:"",pageInfo:{pageNum:1,pageCount:1}}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(i["d"])(["isLoading","discuz"])),Object(i["c"])(["targetHost"])),{},{prevUrl:function(){var t="",e=this.pageInfo.pageNum;return this.pageInfo&&1!=e&&(t="thread-".concat(this.tid,"-").concat(e-1,"-1.html")),t},nextUrl:function(){var t="",e=this.pageInfo,n=e.pageNum,r=e.pageCount;return this.pageInfo&&n<r&&this.url&&(t="thread-".concat(this.tid,"-").concat(n+1,"-1.html")),t}}),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getThreadPageJson(t.url);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:n=document.querySelector(".overflow-container"),t.$route.query.scrollTop?t.$nextTick((function(){n.scrollTop=t.$route.query.scrollTop})):t.$route.hash&&(n=document.querySelector(t.$route.hash),n&&n.scrollIntoView());case 10:case"end":return e.stop()}}),e,null,[[0,5]])})))()},beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(t,e,n){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n(),e.next=3,r.getThreadPageJson(t.params.url);case 3:o=document.querySelector(".overflow-container"),t.hash?(o=document.querySelector(r.$route.hash),o&&o.scrollIntoView()):o.scrollTop=0;case 5:case"end":return e.stop()}}),e)})))()},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["getPageData"])),{},{getThreadPageJson:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,a,i,c,l,d,p,f,g,h,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r={},!sessionStorage.getItem(t)){n.next=5;break}r=JSON.parse(sessionStorage.getItem(t)),n.next=10;break;case 5:return o=u["l"].thread,n.next=8,e.getPageData({url:e.targetHost+t,selector:o});case 8:r=n.sent,sessionStorage.setItem(t,JSON.stringify(r));case 10:s=r,a=s.documentTitle,i=s.pageInfo,c=s.formhash,l=s.replyUrl,d=s.prevTopicUrl,p=s.nextTopicUrl,f=s.favoriteUrl,g=s.newThreadUrl,h=s.postList,m=void 0===h?[]:h,document.title=a,e.discuz.formhash=c,i&&(e.pageInfo=i),l?(e.tid=l.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),e.fid=l.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")):d||p?(e.tid=(d||p).replace(/(^redirect.*tid=)(\d.*)(&goto=.*$)/g,"$2"),e.fid=(d||p).replace(/(^redirect.*fid=)(\d.*)(&tid=.*$)/g,"$2")):f&&g&&(e.tid=f.replace(/(^my.*tid=)(\d.*)(.*$)/g,"$2"),e.fid=g.replace(/(^post.*fid=)(\d.*)(&extra=.*$)/g,"$2")),e.postList=m,e.postList.forEach((function(t){t.content=t.content.replace(/[\t]/g,"").replace(/(\S)(<br>)(\S)/g,"$1$3").replace(/="attachment/g,'="'.concat(e.targetHost,"attachment")).replace(/="images/g,'="'.concat(e.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(e.targetHost)).replace(/:14pt/g,":5vw")}));case 17:case"end":return n.stop()}}),n)})))()},routerTo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,a,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.target,o=r.href,s=r.nodeName,"A"===s&&o.includes("viewthread.php?tid=")&&(o=o.replace(/(^.*tid=)(\d.*)&page=(\d.*)#pid(\d.*)/g,"thread-$2-$3-1.html#postmessage_$4"),a=e.$route,i=a.params,c=a.hash,i.url+c!=o&&e.$router.push(o),t.preventDefault(),t.stopPropagation());case 2:case"end":return n.stop()}}),n)})))()}})},p=d,f=(n("602e"),n("2877")),g=Object(f["a"])(p,r,o,!1,null,null,null);e["default"]=g.exports},"4fea":function(t,e,n){"use strict";n("a952")},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"602e":function(t,e,n){"use strict";n("75c4")},"75c4":function(t,e,n){},9703:function(t,e,n){},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),s=n("a691"),a=n("50c4"),i=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,h=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var n,r,u,d,p,f,b=i(this),w=a(b.length),x=o(t,w),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=w-x):(n=_-2,r=h(g(s(e),0),w-x)),w+n-r>m)throw TypeError(v);for(u=c(b,r),d=0;d<r;d++)p=x+d,p in b&&l(u,d,b[p]);if(u.length=r,n<r){for(d=x;d<w-r;d++)p=d+r,f=d+n,p in b?b[f]=b[p]:delete b[f];for(d=w;d>w-r+n;d--)delete b[d-1]}else if(n>r)for(d=w-r;d>x;d--)p=d+r-1,f=d+n-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<n;d++)b[d+x]=arguments[d+2];return b.length=w-r+n,u}})},a777:function(t,e,n){"use strict";n("9703")},a82c:function(t,e,n){},a952:function(t,e,n){},aa9a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?n("li",[n("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?n("li",[n("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),n("li",[n("span",{on:{click:t.onReload}},[t._v("刷新")])])])},o=[],s=(n("4de4"),n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reply-modal"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("ul",[n("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),n("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])}),a=[],i=(n("96cf"),n("1da1")),c=n("5530"),l=n("2f62"),u={props:["url","fid","tid"],data:function(){return{subject:"",message:""}},destroyed:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["submitReply"])),{},{submit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,o,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.subject,o=e.message,s=e.fid,a=e.tid,n.next=3,e.submitReply({subject:r,message:o,fid:s,tid:a});case 3:e.closeModal(t),setTimeout((function(){sessionStorage.removeItem(e.url),location.reload(!0)}),100);case 5:case"end":return n.stop()}}),n)})))()},closeModal:function(t){this.$emit("closeModal",t)}})},d=u,p=(n("4fea"),n("2877")),f=Object(p["a"])(d,s,a,!1,null,"27d82ad3",null),g=f.exports,h={props:["url","tid","fid"],components:{},data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress:function(){var t=this;return this.collections.filter((function(e){return e.tid==t.tid}))[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveProgress:function(){var t=this,e=this.collections.findIndex((function(e){return e.tid==t.tid})),n={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,n):this.collections.push(n),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress:function(){var t=this,e=this.collections.findIndex((function(e){return e.tid==t.tid}));this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply:function(){var t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(g,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload:function(){sessionStorage.removeItem(this.url),location.reload(!0)}}},m=h,v=(n("04b1"),Object(p["a"])(m,r,o,!1,null,"0b45d206",null));e["a"]=v.exports},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},caad:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").includes,s=n("44d2"),a=n("ae40"),i=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!i},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);