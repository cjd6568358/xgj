(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzAutoLoginView"],{"051a":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"autoLogin-page"})},s=[],c=i("2f62"),u={data(){return{}},computed:{...Object(c["d"])(["discuz"])},async mounted(){let{cookies:t,redirectTo:e}=this.$route.query;this.discuz.isLogin?this.$router.push("/discuz/thread/"+e):t&&e?(t=JSON.parse(t),Object.keys(t).forEach(e=>document.cookie=`${e}=${t[e]}`),location.href="/xgj/discuz/thread/"+e):this.$Toast.info("自动登录失败，缺少参数!")}},n=u,a=i("2877"),r=Object(a["a"])(n,o,s,!1,null,null,null);e["default"]=r.exports}}]);