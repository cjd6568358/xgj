(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzForumView"],{"0cf7":function(t,e,s){},"1ba1":function(t,e,s){},2090:function(t,e,s){},"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},a=[],i=s("be94"),l=s("2f62"),r={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(i["a"])({},Object(l["c"])(["targetHost"])),methods:{gotoPage(t){console.log(t),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},n=r,c=(s("7afd"),s("2877")),u=Object(c["a"])(n,o,a,!1,null,"02fe0c40",null);u.options.__file="index.vue";e["a"]=u.exports},"5a03":function(t,e,s){"use strict";var o=s("2090"),a=s.n(o);a.a},"772d":function(t,e,s){"use strict";var o=s("0cf7"),a=s.n(o);a.a},"7afd":function(t,e,s){"use strict";var o=s("1ba1"),a=s.n(o);a.a},"820c":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzForum-page"},[s("Menus",{attrs:{url:t.url}}),s("div",{staticClass:"overflow-container",on:{touchmove:t.onScroll}},[t._l(t.forumList,function(e,o){return s("ul",{key:o,staticClass:"area",attrs:{"data-title":e.name}},[t._l(e.value,function(e,o){return["投票"!=e.type?s("router-link",{key:o,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),e.permission?[t._v("[阅读权限"+t._s(e.permission)+"]")]:t._e(),t._v("\n\t\t\t\t\t♥"+t._s(e.thanks)+" ("+t._s(e.nums)+")\n\t\t\t\t")],2):t._e()]})],2)}),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],2)],1)},a=[],i=(s("a481"),s("be94")),l=s("2f62"),r=(s("adb5"),s("333d")),n=s("aa9a"),c=s("dc16"),u={props:["url"],components:{Pagination:r["a"],Menus:n["a"]},data(){return{forumList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(i["a"])({},Object(l["d"])(["isLoading","discuz"]),Object(l["c"])(["targetHost"]),{prevUrl(){let t="";return this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,`${this.pageInfo.currPageNum-1}.html`)),t}}),async mounted(){},async beforeRouteUpdate(t,e,s){s(),await this.getForumPageData(t.params.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(t.params.url+"_scrollTop")||0},async activated(){await this.getForumPageData(this.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(this.url+"_scrollTop")||0},beforeMount(){},destroyed(){},methods:Object(i["a"])({},Object(l["b"])(["getPageData"]),{async getForumPageData(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let s=c["a"].forum;e=await this.getPageData({url:t,selector:s}),sessionStorage.setItem(t,JSON.stringify(e))}this.forumList=e.forumList,this.pageInfo=e.pageInfo,document.title=e.documentTitle},onScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem(this.url+"_scrollTop",document.querySelector(".overflow-container").scrollTop)},500)}})},d=u,m=(s("772d"),s("2877")),g=Object(m["a"])(d,o,a,!1,null,"1ffd960c",null);g.options.__file="forum.vue";e["default"]=g.exports},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveReadProgress}},[t._v("收藏")])]),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),t.readProgress?s("li",[s("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},l=[],r=s("be94"),n=s("2f62"),c={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:Object(r["a"])({},Object(n["b"])(["submitReply"]),{async submit(t){let e=this.subject,s=this.message,o=this.fid,a=this.tid;await this.submitReply({subject:e,message:s,fid:o,tid:a}),this.closeModal(t),localStorage.removeItem(this.url),location.reload(!0)},closeModal(t){this.$emit("closeModal",t)}})},u=c,d=(s("b249"),s("2877")),m=Object(d["a"])(u,i,l,!1,null,"496186fc",null);m.options.__file="index.vue";var g=m.exports,p={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{readProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(g,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()}}},f=p,h=(s("5a03"),Object(d["a"])(f,o,a,!1,null,"367c284c",null));h.options.__file="index.vue";e["a"]=h.exports},b249:function(t,e,s){"use strict";var o=s("ee48"),a=s.n(o);a.a},ee48:function(t,e,s){}}]);
//# sourceMappingURL=DiscuzForumView.1898a186.js.map