(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){return t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.pageNum+"/"+t.pageCount))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){return t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},i=[],a=s("2f62"),l={props:["prevUrl","nextUrl","pageNum","pageCount"],computed:{...Object(a["c"])(["targetHost"])},methods:{gotoPage(t){this.$router.push(encodeURIComponent(t))}}},r=l,n=(s("a777"),s("2877")),c=Object(n["a"])(r,o,i,!1,null,"41e63b94",null);e["a"]=c.exports},"4cc1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzThread-page"},[s("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"thread"},t._l(t.postList,(function(e,o){return s("li",{key:o,staticClass:"post"},[s("div",{staticClass:"post-info"},[s("span",[t._v(t._s(e.postFloor))]),s("span",[t._v(t._s(e.authorName))]),s("span",[t._v(t._s(e.authorLevel))]),s("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),s("h2",[t._v(t._s(e.postTitle))]),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)},on:{"!click":function(e){return t.routerTo(e)}}})])})),0),t.isLoading?t._e():s("Pagination",{attrs:{pageNum:t.pageInfo.pageNum,pageCount:t.pageInfo.pageCount,prevUrl:t.prevUrl,nextUrl:t.nextUrl}})],1)],1)},i=[],a=(s("5319"),s("2f62")),l=s("333d"),r=s("aa9a"),n=s("4260"),c={props:["url"],components:{Pagination:l["a"],Menus:r["a"]},data(){return{postList:[],tid:"",fid:"",pageInfo:{pageNum:1,pageCount:1}}},computed:{...Object(a["d"])(["isLoading","discuz"]),...Object(a["c"])(["targetHost"]),prevUrl(){let t="",{pageNum:e}=this.pageInfo;return this.pageInfo&&1!=e&&(t=this.url.replace(/(^.*\/bbs\/)(.*$)/g,`$1thread-${this.tid}-${e-1}-1.html`)),t},nextUrl(){let t="",{pageNum:e,pageCount:s}=this.pageInfo;return this.pageInfo&&e<s&&this.url&&(t=this.url.replace(/(^.*\/bbs\/)(.*$)/g,`$1thread-${this.tid}-${e+1}-1.html`)),t}},async mounted(){await this.getThreadPageJson(this.url);let t=document.querySelector(".overflow-container");this.$route.query.scrollTop?this.$nextTick(()=>{t.scrollTop=this.$route.query.scrollTop}):this.$route.hash&&(t=document.querySelector(this.$route.hash),t&&t.scrollIntoView())},beforeMount(){},destroyed(){},async beforeRouteUpdate(t,e,s){s(),await this.getThreadPageJson(t.params.url);let o=document.querySelector(".overflow-container");t.hash?(o=document.querySelector(this.$route.hash),o&&o.scrollIntoView()):o.scrollTop=0},methods:{...Object(a["b"])(["getPageData"]),async getThreadPageJson(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let s=n["l"].thread;e=await this.getPageData({url:this.targetHost+t,selector:s}),sessionStorage.setItem(t,JSON.stringify(e))}let{documentTitle:s,pageInfo:o,formhash:i,replyUrl:a,prevTopicUrl:l,nextTopicUrl:r,favoriteUrl:c,newThreadUrl:u,postList:d=[]}=e;document.title=s,this.discuz.formhash=i,o&&(this.pageInfo=o),a?(this.tid=a.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=a.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")):l||r?(this.tid=(l||r).replace(/(^redirect.*tid=)(\d.*)(&goto=.*$)/g,"$2"),this.fid=(l||r).replace(/(^redirect.*fid=)(\d.*)(&tid=.*$)/g,"$2")):c&&u&&(this.tid=c.replace(/(^my.*tid=)(\d.*)(.*$)/g,"$2"),this.fid=u.replace(/(^post.*fid=)(\d.*)(&extra=.*$)/g,"$2")),this.postList=d,this.postList.forEach(t=>{t.content=t.content.replace(/[\t]/g,"").replace(/(\S)(<br>)(\S)/g,"$1$3").replace(/="attachment/g,`="${this.targetHost}attachment`).replace(/="images/g,`="${this.targetHost}images`).replace(/="http:\/\/(.*)\/bbs\//g,'="'+this.targetHost).replace(/:14pt/g,":5vw")})},async routerTo(t){let{target:{href:e,nodeName:s}}=t;if("A"===s&&e.includes("viewthread.php?tid=")){e=e.replace(/(^.*tid=)(\d.*)&page=(\d.*)#pid(\d.*)/g,"thread-$2-$3-1.html#postmessage_$4");let{params:s,hash:o}=this.$route;s.url+o!=e&&this.$router.push(e),t.preventDefault(),t.stopPropagation()}}}},u=c,d=(s("602e"),s("2877")),p=Object(d["a"])(u,o,i,!1,null,null,null);e["default"]=p.exports},"4fea":function(t,e,s){"use strict";s("a952")},"602e":function(t,e,s){"use strict";s("75c4")},"75c4":function(t,e,s){},9703:function(t,e,s){},a224:function(t,e,s){},a777:function(t,e,s){"use strict";s("9703")},a952:function(t,e,s){},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveProgress}},[t._v("收藏")])]),t.hasProgress?s("li",[s("span",{on:{click:t.delProgress}},[t._v("删除")])]):t._e(),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),s("li",[s("span",{on:{click:t.onReload}},[t._v("刷新")])])])},i=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"选填,请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"必填,请输入最少20个字内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},l=[],r=s("2f62"),n={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:{...Object(r["b"])(["submitReply"]),async submit(t){let{subject:e,message:s,fid:o,tid:i}=this;await this.submitReply({subject:e,message:s,fid:o,tid:i}),this.closeModal(t),setTimeout(()=>{sessionStorage.removeItem(this.url),location.reload(!0)},100)},closeModal(t){this.$emit("closeModal",t)}}},c=n,u=(s("4fea"),s("2877")),d=Object(u["a"])(c,a,l,!1,null,"27d82ad3",null),p=d.exports,h={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{hasProgress(){return this.collections.filter(t=>t.tid==this.tid)[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveProgress(){let t=this.collections.findIndex(t=>t.tid==this.tid),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},delProgress(){let t=this.collections.findIndex(t=>t.tid==this.tid);this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(p,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()},onReload(){sessionStorage.removeItem(this.url),location.reload(!0)}}},g=h,m=(s("b757"),Object(u["a"])(g,o,i,!1,null,"a1a32424",null));e["a"]=m.exports},b757:function(t,e,s){"use strict";s("a224")}}]);