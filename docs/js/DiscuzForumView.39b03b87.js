(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzForumView"],{2347:function(t,e,s){"use strict";s("4e13")},"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},a=[],i=s("2f62"),l={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:{...Object(i["c"])(["targetHost"])},methods:{gotoPage(t){console.log(`${this.targetHost}${t}`),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},r=l,n=(s("8d3b"),s("2877")),c=Object(n["a"])(r,o,a,!1,null,"23236df1",null);e["a"]=c.exports},"4e13":function(t,e,s){},"4fea":function(t,e,s){"use strict";s("a952")},"820c":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzForum-page"},[s("Menus",{attrs:{url:t.url}}),s("div",{staticClass:"overflow-container",on:{touchmove:t.onScroll}},[t._l(t.forumList,(function(e,o){return s("ul",{key:o,staticClass:"area",attrs:{"data-title":e.name}},[t._l(e.value,(function(e,o){return["投票"!=e.type?s("router-link",{key:o,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v(" ["+t._s(e.date)+"] "+t._s(e.title)+" "),e.permission?[t._v("[阅读权限"+t._s(e.permission)+"]")]:t._e(),t._v(" ♥"+t._s(e.thanks)+" ("+t._s(e.nums)+") ")],2):t._e()]}))],2)})),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],2)],1)},a=[],i=(s("5319"),s("2f62")),l=(s("adb5"),s("333d")),r=s("aa9a"),n=s("dc16"),c={props:["url"],components:{Pagination:l["a"],Menus:r["a"]},data(){return{forumList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:{...Object(i["d"])(["isLoading","discuz"]),...Object(i["c"])(["targetHost"]),prevUrl(){let t="";return this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,this.pageInfo.currPageNum-1+".html")),t}},async mounted(){},async beforeRouteUpdate(t,e,s){s(),await this.getForumPageData(t.params.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(t.params.url+"_scrollTop")||0},async activated(){await this.getForumPageData(this.url),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem(this.url+"_scrollTop")||0},beforeMount(){},destroyed(){},methods:{...Object(i["b"])(["getPageData"]),async getForumPageData(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let s=n["a"].forum;e=await this.getPageData({url:t,selector:s}),sessionStorage.setItem(t,JSON.stringify(e))}this.forumList=e.forumList,this.pageInfo=e.pageInfo,document.title=e.documentTitle},onScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem(this.url+"_scrollTop",document.querySelector(".overflow-container").scrollTop)},500)}}},u=c,d=(s("2347"),s("2877")),m=Object(d["a"])(u,o,a,!1,null,"9a502d56",null);e["default"]=m.exports},"8d3b":function(t,e,s){"use strict";s("c8ef")},a224:function(t,e,s){},a952:function(t,e,s){},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?s("li",[s("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),s("li",[s("span",{on:{click:t.onReload}},[t._v("刷新")])])])},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},l=[],r=s("2f62"),n={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:{...Object(r["b"])(["submitReply"]),async submit(t){let{subject:e,message:s,fid:o,tid:a}=this;await this.submitReply({subject:e,message:s,fid:o,tid:a}),this.closeModal(t),setTimeout(()=>{sessionStorage.removeItem(this.url),location.reload(!0)},100)},closeModal(t){this.$emit("closeModal",t)}}},c=n,u=(s("4fea"),s("2877")),d=Object(u["a"])(c,i,l,!1,null,"27d82ad3",null),m=d.exports,g={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress(){return this.collections.filter(t=>t.tid==this.tid)[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveProgress(){let t=this.collections.findIndex(t=>t.tid==this.tid),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress(){let t=this.collections.findIndex(t=>t.tid==this.tid);this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(m,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload(){sessionStorage.removeItem(this.url),location.reload(!0)}}},p=g,h=(s("b757"),Object(u["a"])(p,o,a,!1,null,"a1a32424",null));e["a"]=h.exports},b757:function(t,e,s){"use strict";s("a224")},c8ef:function(t,e,s){}}]);