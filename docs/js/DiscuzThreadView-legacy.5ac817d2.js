(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"333d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.pageNum+"/"+t.pageCount))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},o=[],a=n("5530"),r=n("2f62"),i={props:["prevUrl","nextUrl","pageNum","pageCount"],computed:Object(a["a"])({},Object(r["c"])(["targetHost"])),methods:{gotoPage:function(t){this.$router.push(encodeURIComponent(t))}}},c=i,l=(n("a777"),n("2877")),u=Object(l["a"])(c,s,o,!1,null,"41e63b94",null);e["a"]=u.exports},"4cc1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzThread-page"},[n("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"thread"},t._l(t.postList,(function(e,s){return n("li",{key:s,staticClass:"post"},[n("div",{staticClass:"post-info"},[n("span",[t._v(t._s(e.postFloor))]),n("span",[t._v(t._s(e.authorName))]),n("span",[t._v(t._s(e.authorLevel))]),n("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),n("h2",[t._v(t._s(e.postTitle))]),n("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])})),0),t.isLoading?t._e():n("Pagination",{attrs:{pageNum:t.pageInfo.pageNum,pageCount:t.pageInfo.pageCount,prevUrl:t.prevUrl,nextUrl:t.nextUrl}})],1)],1)},o=[],a=(n("99af"),n("4160"),n("ac1f"),n("5319"),n("159b"),n("96cf"),n("1da1")),r=n("5530"),i=n("2f62"),c=n("333d"),l=n("aa9a"),u=n("4260"),d={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data:function(){return{postList:[],tid:"",fid:"",pageInfo:{pageNum:1,pageCount:1}}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(i["d"])(["isLoading","discuz"])),Object(i["c"])(["targetHost"])),{},{prevUrl:function(){var t="",e=this.pageInfo.pageNum;return this.pageInfo&&1!=e&&(t=this.url.url.replace(/(^.*thread-\d.*-)(\d.*)(-\d.html)/g,"$1".concat(e-1,"$3"))),t},nextUrl:function(){var t="",e=this.pageInfo,n=e.pageNum,s=e.pageCount;return this.pageInfo&&n<s&&this.url&&(t=this.url.replace(/(^.*thread-\d.*-)(\d.*)(-\d.html)/g,"$1".concat(n+1,"$3"))),t}}),mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getThreadPageJson(t.url);case 2:t.$route.query.scrollTop&&t.$nextTick((function(){document.querySelector(".overflow-container").scrollTop=t.$route.query.scrollTop}));case 3:case"end":return e.stop()}}),e)})))()},beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(t,e,n){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n(),e.next=3,s.getThreadPageJson(t.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return e.stop()}}),e)})))()},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["getPageData"])),{},{getThreadPageJson:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var s,o,a,r,i,c,l,d,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s={},!sessionStorage.getItem(t)){n.next=5;break}s=JSON.parse(sessionStorage.getItem(t)),n.next=10;break;case 5:return o=u["l"].thread,n.next=8,e.getPageData({url:t,selector:o});case 8:s=n.sent,sessionStorage.setItem(t,JSON.stringify(s));case 10:a=s,r=a.documentTitle,i=a.pageInfo,c=a.formhash,l=a.replyUrl,d=a.postList,p=void 0===d?[]:d,document.title=r,e.discuz.formhash=c,i&&(e.pageInfo=i),l&&(e.tid=l.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),e.fid=l.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")),e.postList=p,e.postList.forEach((function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(e.targetHost,"attachment")).replace(/="images/g,'="'.concat(e.targetHost,"images")).replace(/="http:\/\/(.*)\/bbs\//g,'="'.concat(e.targetHost)).replace(/="(viewthread|thread.*)" target/g,(function(t,n){return'="'.concat("/xgj/","discuz/thread/").concat(encodeURIComponent(e.targetHost+n),'" target')})).replace(/:14pt/g,":5vw")}));case 17:case"end":return n.stop()}}),n)})))()}})},p=d,f=(n("602e"),n("2877")),g=Object(f["a"])(p,s,o,!1,null,null,null);e["default"]=g.exports},"4fea":function(t,e,n){"use strict";n("a952")},"602e":function(t,e,n){"use strict";n("75c4")},"75c4":function(t,e,n){},9703:function(t,e,n){},a224:function(t,e,n){},a434:function(t,e,n){"use strict";var s=n("23e7"),o=n("23cb"),a=n("a691"),r=n("50c4"),i=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var n,s,u,d,p,f,b=i(this),w=r(b.length),x=o(t,w),_=arguments.length;if(0===_?n=s=0:1===_?(n=0,s=w-x):(n=_-2,s=m(g(a(e),0),w-x)),w+n-s>h)throw TypeError(v);for(u=c(b,s),d=0;d<s;d++)p=x+d,p in b&&l(u,d,b[p]);if(u.length=s,n<s){for(d=x;d<w-s;d++)p=d+s,f=d+n,p in b?b[f]=b[p]:delete b[f];for(d=w;d>w-s+n;d--)delete b[d-1]}else if(n>s)for(d=w-s;d>x;d--)p=d+s-1,f=d+n-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<n;d++)b[d+x]=arguments[d+2];return b.length=w-s+n,u}})},a777:function(t,e,n){"use strict";n("9703")},a952:function(t,e,n){},aa9a:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?n("li",[n("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?n("li",[n("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),n("li",[n("span",{on:{click:t.onReload}},[t._v("刷新")])])])},o=[],a=(n("4de4"),n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reply-modal"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("ul",[n("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),n("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])}),r=[],i=(n("96cf"),n("1da1")),c=n("5530"),l=n("2f62"),u={props:["url","fid","tid"],data:function(){return{subject:"",message:""}},destroyed:function(){},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["submitReply"])),{},{submit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,o,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.subject,o=e.message,a=e.fid,r=e.tid,n.next=3,e.submitReply({subject:s,message:o,fid:a,tid:r});case 3:e.closeModal(t),setTimeout((function(){sessionStorage.removeItem(e.url),location.reload(!0)}),100);case 5:case"end":return n.stop()}}),n)})))()},closeModal:function(t){this.$emit("closeModal",t)}})},d=u,p=(n("4fea"),n("2877")),f=Object(p["a"])(d,a,r,!1,null,"27d82ad3",null),g=f.exports,m={props:["url","tid","fid"],components:{},data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress:function(){var t=this;return this.collections.filter((function(e){return e.tid==t.tid}))[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveProgress:function(){var t=this,e=this.collections.findIndex((function(e){return e.tid==t.tid})),n={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,n):this.collections.push(n),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress:function(){var t=this,e=this.collections.findIndex((function(e){return e.tid==t.tid}));this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply:function(){var t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(g,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload:function(){sessionStorage.removeItem(this.url),location.reload(!0)}}},h=m,v=(n("b757"),Object(p["a"])(h,s,o,!1,null,"a1a32424",null));e["a"]=v.exports},b757:function(t,e,n){"use strict";n("a224")}}]);