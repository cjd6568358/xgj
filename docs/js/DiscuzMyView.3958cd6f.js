(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzMyView"],{4513:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzMy-page"},[s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"user-info"},[s("li",[t._v("用户名:"+t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?s("li",[t._v(" 签到状态:"+t._s(t.discuz.signInfo.isSigned?"已签到":"未签到")+" ")]):t._e(),t._l(t.creditList,(function(e){return s("li",{key:e},[t._v(t._s(e))])}))],2),s("ul",{staticClass:"area",attrs:{"data-title":"我的收藏"}},[t._l(t.collections,(function(e,i){var n=this;return[e?s("router-link",{directives:[{name:"long-press",rawName:"v-long-press",value:function(){return n.onlongpress(e)},expression:"() => this.onlongpress(thread)"}],key:i,attrs:{tag:"li",to:{name:"DiscuzThreadView",params:{url:e.href},query:{scrollTop:e.scrollTop}}}},[t._v(t._s(e.title))]):t._e()]}))],2),s("ul",{staticClass:"area",attrs:{"data-title":"最近回复"}},[t._l(t.recentReply,(function(e,i){return[e?s("router-link",{key:i,attrs:{to:{name:"DiscuzThreadView",params:{url:e.href}},tag:"li"}},[t._v(t._s(e.title))]):t._e()]}))],2),s("ul",{staticClass:"area",attrs:{"data-title":"最近主题"}},[t._l(t.recentTopics,(function(e,i){return[e?s("router-link",{key:i,attrs:{to:{name:"DiscuzThreadView",params:{url:e.href}},tag:"li"}},[t._v(t._s(e.title))]):t._e()]}))],2)])])},n=[],a=(s("5319"),s("2f62")),r=(s("adb5"),s("4260")),c={name:"discuz-page",components:{},data(){return{collections:[],creditList:[],recentReply:[],recentTopics:[]}},computed:{...Object(a["d"])(["isLoading","discuz"]),...Object(a["c"])(["targetHost"])},mounted(){this.init()},beforeMount(){},destroyed(){},methods:{...Object(a["b"])(["getPageData"]),async init(){this.discuz.isLogin?(await this.getMyPageData(),this.collections=JSON.parse(localStorage.getItem("collections"))||[]):this.$router.replace("/index")},async getMyPageData(){let{targetHost:t,discuz:{userInfo:e,signInfo:s}}=this,i=t+"my.php",n=r["l"].my,a=await this.getPageData({url:i,selector:n});e.username=a.username,this.creditList=a.creditList,this.recentReply=a.recentReply,this.recentTopics=a.recentTopics,this.recentTopics&&this.recentTopics.forEach(t=>{t&&t.title==`${a.username}/${(new Date).getMonth()+1}月份/打卡签到帖`&&(t.lastPost.includes((new Date).Format("yyyy-M-d"))?s.isSigned=!0:s.tid=t.tid)})},onlongpress(t){if(confirm("确定删除该收藏吗")){let e=this.collections.findIndex(e=>e===t);this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))}}}},o=c,l=(s("df6c"),s("2877")),u=Object(l["a"])(o,i,n,!1,null,"47896b44",null);e["default"]=u.exports},"8af4":function(t,e,s){},df6c:function(t,e,s){"use strict";s("8af4")}}]);