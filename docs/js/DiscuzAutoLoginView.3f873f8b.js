(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzAutoLoginView"],{"051a":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"autoLogin-page"})},a=[],c={data(){return{}},async mounted(){let{cookies:e,redirectTo:t}=this.$route.query;e&&t?(e=JSON.parse(decodeURIComponent(e)),Object.keys(e).forEach(t=>document.cookie=`${t}=${e[t]}`),location.href="/xgj/discuz/thread/"+t):this.$Toast.info("自动登录失败，缺少参数!")}},i=c,s=o("2877"),r=Object(s["a"])(i,n,a,!1,null,null,null);t["default"]=r.exports}}]);