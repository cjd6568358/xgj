(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzAutoLoginView"],{"051a":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"autoLogin-page"})},s=[],c=i("2f62"),u={data(){return{}},computed:{...Object(c["d"])(["discuz"])},async mounted(){if(this.discuz.isLogin)this.$router.push("/discuz/thread/"+redirectTo);else{let{cookies:e,redirectTo:t}=this.$route.query;e&&t?(e=JSON.parse(e),Object.keys(e).forEach(t=>document.cookie=`${t}=${e[t]}`),location.href="/xgj/discuz/thread/"+t):this.$Toast.info("自动登录失败，缺少参数!")}}},r=u,n=i("2877"),a=Object(n["a"])(r,o,s,!1,null,null,null);t["default"]=a.exports}}]);