(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzForumView"],{"0cf7":function(t,e,s){},"15c6":function(t,e,s){"use strict";var o=s("c5e7"),r=s.n(o);r.a},"1ba1":function(t,e,s){},"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},r=[],a=s("be94"),l=s("2f62"),n={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(a["a"])({},Object(l["c"])(["targetHost"])),methods:{gotoPage(t){console.log(t),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},i=n,c=(s("7afd"),s("2877")),u=Object(c["a"])(i,o,r,!1,null,"02fe0c40",null);e["a"]=u.exports},"453b":function(t,e,s){},"772d":function(t,e,s){"use strict";var o=s("0cf7"),r=s.n(o);r.a},"7afd":function(t,e,s){"use strict";var o=s("1ba1"),r=s.n(o);r.a},"820c":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzForum-page"},[s("Menus",{attrs:{url:t.url}}),s("div",{staticClass:"overflow-container",on:{touchmove:t.onScroll}},[t._l(t.forumList,function(e,o){return s("ul",{key:o,staticClass:"area",attrs:{"data-title":e.name}},[t._l(e.value,function(e,o){return["投票"!=e.type?s("router-link",{key:o,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),e.permission?[t._v("[阅读权限"+t._s(e.permission)+"]")]:t._e(),t._v("\n\t\t\t\t\t♥"+t._s(e.thanks)+" ("+t._s(e.nums)+")\n\t\t\t\t")],2):t._e()]})],2)}),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],2)],1)},r=[],a=s("1da1"),l=(s("a481"),s("be94")),n=s("2f62"),i=(s("adb5"),s("333d")),c=s("aa9a"),u=s("dc16"),d={props:["url"],components:{Pagination:i["a"],Menus:c["a"]},data(){return{forumList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(l["a"])({},Object(n["d"])(["isLoading","discuz"]),Object(n["c"])(["targetHost"]),{prevUrl(){let t="";return this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,`${this.pageInfo.currPageNum-1}.html`)),t}}),mounted(){return Object(a["a"])(function*(){})()},beforeRouteUpdate(t,e,s){var o=this;return Object(a["a"])(function*(){s(),yield o.getForumPageData(t.params.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(t.params.url+"_scrollTop")||0})()},activated(){var t=this;return Object(a["a"])(function*(){yield t.getForumPageData(t.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(t.url+"_scrollTop")||0})()},beforeMount(){},destroyed(){},methods:Object(l["a"])({},Object(n["b"])(["getPageData"]),{getForumPageData(t){var e=this;return Object(a["a"])(function*(){let s={};if(sessionStorage.getItem(t))s=JSON.parse(sessionStorage.getItem(t));else{let o=u["a"].forum;s=yield e.getPageData({url:t,selector:o}),sessionStorage.setItem(t,JSON.stringify(s))}e.forumList=s.forumList,e.pageInfo=s.pageInfo,document.title=s.documentTitle})()},onScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem(this.url+"_scrollTop",document.querySelector(".overflow-container").scrollTop)},500)}})},m=d,g=(s("772d"),s("2877")),p=Object(g["a"])(m,o,r,!1,null,"1ffd960c",null);e["default"]=p.exports},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?s("li",[s("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),s("li",[s("span",{on:{click:t.onReload}},[t._v("刷新")])])])},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},l=[],n=s("1da1"),i=s("be94"),c=s("2f62"),u={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:Object(i["a"])({},Object(c["b"])(["submitReply"]),{submit(t){var e=this;return Object(n["a"])(function*(){let s=e.subject,o=e.message,r=e.fid,a=e.tid;yield e.submitReply({subject:s,message:o,fid:r,tid:a}),e.closeModal(t),setTimeout(()=>{sessionStorage.removeItem(e.url),location.reload(!0)},100)})()},closeModal(t){this.$emit("closeModal",t)}})},d=u,m=(s("15c6"),s("2877")),g=Object(m["a"])(d,a,l,!1,null,"3988671c",null),p=g.exports,f={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(p,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload(){sessionStorage.removeItem(this.url),location.reload(!0)}}},h=f,v=(s("ddf2"),Object(m["a"])(h,o,r,!1,null,"38ffb1f4",null));e["a"]=v.exports},c5e7:function(t,e,s){},ddf2:function(t,e,s){"use strict";var o=s("453b"),r=s.n(o);r.a}}]);