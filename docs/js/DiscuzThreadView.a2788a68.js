(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"15c6":function(t,e,r){"use strict";var s=r("5b86"),o=r.n(s);o.a},"333d":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination"},[t.prevUrl?r("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),r("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?r("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},o=[],n=(r("ac6a"),r("ade3")),a=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach(function(e){Object(n["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:c({},Object(a["c"])(["targetHost"])),methods:{gotoPage(t){console.log(`${this.targetHost}${t}`),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},u=l,p=(r("6b28"),r("2877")),d=Object(p["a"])(u,s,o,!1,null,"fa80837a",null);e["a"]=d.exports},"41ae":function(t,e,r){},"4cc1":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discuzThread-page"},[r("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),r("div",{staticClass:"overflow-container"},[r("ul",{staticClass:"thread"},t._l(t.postList,function(e,s){return r("li",{key:s,staticClass:"post"},[r("div",{staticClass:"post-info"},[r("span",[t._v(t._s(e.postFloor))]),r("span",[t._v(t._s(e.authorName))]),r("span",[t._v(t._s(e.authorLevel))]),r("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),r("h2",[t._v(t._s(e.postTitle))]),r("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():r("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},o=[],n=(r("ac6a"),r("a481"),r("1da1")),a=r("ade3"),i=r("2f62"),c=r("333d"),l=r("aa9a"),u=r("dc16");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var g={props:["url"],components:{Pagination:c["a"],Menus:l["a"]},data(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:d({},Object(i["d"])(["isLoading","discuz"]),{},Object(i["c"])(["targetHost"]),{prevUrl(){let t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum){let e=this.pageInfo.currPageNum;t=`thread-${this.tid}-${e-1}-1.html`}return t}}),mounted(){var t=this;return Object(n["a"])(function*(){yield t.getThreadPageJson(t.url),t.$route.query.scrollTop&&t.$nextTick(()=>{document.querySelector(".overflow-container").scrollTop=t.$route.query.scrollTop})})()},beforeMount(){},destroyed(){},beforeRouteUpdate(t,e,r){var s=this;return Object(n["a"])(function*(){r(),yield s.getThreadPageJson(t.params.url),document.querySelector(".overflow-container").scrollTop=0})()},methods:d({},Object(i["b"])(["getPageData"]),{getThreadPageJson(t){var e=this;return Object(n["a"])(function*(){let r={};if(sessionStorage.getItem(t))r=JSON.parse(sessionStorage.getItem(t));else{let s=u["a"].thread;r=yield e.getPageData({url:t,selector:s}),sessionStorage.setItem(t,JSON.stringify(r))}let s=r,o=s.documentTitle,n=s.pageInfo,a=s.formhash,i=s.replyUrl,c=s.postList,l=void 0===c?[]:c;document.title=o,e.discuz.formhash=a,n&&(e.pageInfo=n),i&&(e.tid=i.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),e.fid=i.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")),e.postList=l,e.postList.forEach(t=>{t.content=t.content.replace(/="attachment/g,`="${e.targetHost}attachment`).replace(/="images/g,`="${e.targetHost}images`).replace(/="http:\/\/(.*)\/bbs\//g,`="${e.targetHost}`).replace(/="(viewthread|thread.*)" target/g,(t,r)=>{return`="/xgj/discuz/thread/${encodeURIComponent(e.targetHost+r)}" target`}).replace(/:14pt/g,":5vw")})})()}})},f=g,m=(r("602e"),r("2877")),h=Object(m["a"])(f,s,o,!1,null,null,null);e["default"]=h.exports},"5b86":function(t,e,r){},"602e":function(t,e,r){"use strict";var s=r("b0ad"),o=r.n(s);o.a},"6b28":function(t,e,r){"use strict";var s=r("41ae"),o=r.n(s);o.a},aa9a:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:t.isOpened&&"opened"},[r("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs",[r("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[r("title",[t._v("close")]),r("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),r("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[r("svg",[r("use",{attrs:{"xlink:href":"#icon-close"}})])]),r("li",[r("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?r("li",[r("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?r("li",[r("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),r("li",[r("span",{on:{click:t.onReload}},[t._v("刷新")])])])},o=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reply-modal"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),r("ul",[r("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),r("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},a=[],i=(r("ac6a"),r("1da1")),c=r("ade3"),l=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var d={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:p({},Object(l["b"])(["submitReply"]),{submit(t){var e=this;return Object(i["a"])(function*(){let r=e.subject,s=e.message,o=e.fid,n=e.tid;yield e.submitReply({subject:r,message:s,fid:o,tid:n}),e.closeModal(t),setTimeout(()=>{sessionStorage.removeItem(e.url),location.reload(!0)},100)})()},closeModal(t){this.$emit("closeModal",t)}})},g=d,f=(r("15c6"),r("2877")),m=Object(f["a"])(g,n,a,!1,null,"3988671c",null),h=m.exports,b={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(h,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload(){sessionStorage.removeItem(this.url),location.reload(!0)}}},v=b,O=(r("ddf2"),Object(f["a"])(v,s,o,!1,null,"38ffb1f4",null));e["a"]=O.exports},b0ad:function(t,e,r){},ddf2:function(t,e,r){"use strict";var s=r("f0f8"),o=r.n(s);o.a},f0f8:function(t,e,r){}}]);