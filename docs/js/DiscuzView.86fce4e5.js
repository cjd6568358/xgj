(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"01f9":function(t,e,i){"use strict";var n=i("2d00"),s=i("5ca1"),o=i("2aba"),r=i("32e9"),a=i("84f2"),c=i("41a0"),u=i("7f20"),l=i("38fd"),f=i("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",g="keys",h="values",m=function(){return this};t.exports=function(t,e,i,v,S,b,y){c(i,e,v);var w,L,I,_=function(t){if(!d&&t in O)return O[t];switch(t){case g:return function(){return new i(this,t)};case h:return function(){return new i(this,t)}}return function(){return new i(this,t)}},P=e+" Iterator",T=S==h,x=!1,O=t.prototype,k=O[f]||O[p]||S&&O[S],D=k||_(S),A=S?T?_("entries"):D:void 0,C="Array"==e&&O.entries||k;if(C&&(I=l(C.call(new t)),I!==Object.prototype&&I.next&&(u(I,P,!0),n||"function"==typeof I[f]||r(I,f,m))),T&&k&&k.name!==h&&(x=!0,D=function(){return k.call(this)}),n&&!y||!d&&!x&&O[f]||r(O,f,D),a[e]=D,a[P]=m,S)if(w={values:T?D:_(h),keys:b?D:_(g),entries:A},y)for(L in w)L in O||o(O,L,w[L]);else s(s.P+s.F*(d||x),e,w);return w}},"0d58":function(t,e,i){var n=i("ce10"),s=i("e11e");t.exports=Object.keys||function(t){return n(t,s)}},1495:function(t,e,i){var n=i("86cc"),s=i("cb7c"),o=i("0d58");t.exports=i("9e1e")?Object.defineProperties:function(t,e){s(t);var i,r=o(e),a=r.length,c=0;while(a>c)n.f(t,i=r[c++],e[i]);return t}},"2aeb":function(t,e,i){var n=i("cb7c"),s=i("1495"),o=i("e11e"),r=i("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=i("230e")("iframe"),n=o.length,s="<",r=">";e.style.display="none",i("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(s+"script"+r+"document.F=Object"+s+"/script"+r),t.close(),u=t.F;while(n--)delete u[c][o[n]];return u()};t.exports=Object.create||function(t,e){var i;return null!==t?(a[c]=n(t),i=new a,a[c]=null,i[r]=t):i=u(),void 0===e?i:s(i,e)}},"38fd":function(t,e,i){var n=i("69a8"),s=i("4bf8"),o=i("613b")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=s(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},"41a0":function(t,e,i){"use strict";var n=i("2aeb"),s=i("4630"),o=i("7f20"),r={};i("32e9")(r,i("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=n(r,{next:s(1,i)}),o(t,e+" Iterator")}},"4bf8":function(t,e,i){var n=i("be13");t.exports=function(t){return Object(n(t))}},"5ca1":function(t,e,i){var n=i("7726"),s=i("8378"),o=i("32e9"),r=i("2aba"),a=i("9b43"),c="prototype",u=function(t,e,i){var l,f,d,p,g=t&u.F,h=t&u.G,m=t&u.S,v=t&u.P,S=t&u.B,b=h?n:m?n[e]||(n[e]={}):(n[e]||{})[c],y=h?s:s[e]||(s[e]={}),w=y[c]||(y[c]={});for(l in h&&(i=e),i)f=!g&&b&&void 0!==b[l],d=(f?b:i)[l],p=S&&f?a(d,n):v&&"function"==typeof d?a(Function.call,d):d,b&&r(b,l,d,t&u.U),y[l]!=d&&o(y,l,p),v&&w[l]!=d&&(w[l]=d)};n.core=s,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"76e9":function(t,e,i){},"7f20":function(t,e,i){var n=i("86cc").f,s=i("69a8"),o=i("2b4c")("toStringTag");t.exports=function(t,e,i){t&&!s(t=i?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"9c6c":function(t,e,i){var n=i("2b4c")("unscopables"),s=Array.prototype;void 0==s[n]&&i("32e9")(s,n,{}),t.exports=function(t){s[n][t]=!0}},ac6a:function(t,e,i){for(var n=i("cadf"),s=i("0d58"),o=i("2aba"),r=i("7726"),a=i("32e9"),c=i("84f2"),u=i("2b4c"),l=u("iterator"),f=u("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=s(p),h=0;h<g.length;h++){var m,v=g[h],S=p[v],b=r[v],y=b&&b.prototype;if(y&&(y[l]||a(y,l,d),y[f]||a(y,f,v),c[v]=d,S))for(m in n)y[m]||o(y,m,n[m],!0)}},bb62:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discuz-page"},[i("div",{staticClass:"overflow-container",on:{scroll:t.onScroll}},[t.discuz.isLogin?t._e():i("div",{staticClass:"login-form"},[i("center",[i("h3",[t._v("discuz论坛手机版")])]),i("div",{staticClass:"input-warp"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.webSite=e.target.multiple?i:i[0]}}},t._l(t.discuz.webSiteList,function(e){return i("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0),i("a",{staticClass:"btn",on:{click:t.updateWebSiteList}},[t._v("更新列表")])]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userInfo.username},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"username",e.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:t.userInfo.QA},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"QA",e.target.value)}}})]),i("a",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])],1),t.discuz.isLogin?[i("ul",{staticClass:"user-info"},[i("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[t._v(t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?i("li",[t._v("已签到")]):i("li",{on:{click:t.dailySignIn}},[t._v("日签到")]),i("li",{on:{click:t.monthSignIn}},[t._v("月签到")]),i("li",{on:{click:t.logout}},[t._v("退出")])],1),t._l(t.areaList,function(e,n){return i("ul",{key:n,staticClass:"area",attrs:{"data-title":e.name}},t._l(e.value,function(e,n){return i("router-link",{key:n,attrs:{to:{name:"DiscuzForumView",params:{url:t.targetHost+e.value}},tag:"li"}},[t._v(t._s(e.name))])}),1)})]:t._e(),i("a",{staticClass:"btn switch",on:{click:t.switchProxy}},[t._v("切换代理源("+t._s(t.proxyServerPlatom)+")")])],2)])},s=[],o=(i("a481"),i("ac6a"),i("28a5"),i("be94")),r=i("2f62"),a=i("adb5"),c=i("b383"),u=i.n(c),l=i("4260"),f=i("dc16"),d=i("db49"),p={name:"discuz-page",components:{},data(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(o["a"])({},Object(r["d"])(["isLoading","discuz"]),Object(r["c"])(["targetHost"]),{webSite:{get(){return this.discuz.webSite},set(t){this.$store.commit("UPDATE_DISCUZ",{webSite:t})}},proxyServerPlatom(){return d["a"].filter(t=>t.host===this.discuz.HOST)[0].platom}}),mounted(){},activated(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount(){},destroyed(){},methods:Object(o["a"])({},Object(r["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"]),{async init(){let t=this.discuz,e=t.isLogin,i=t.signInfo,n=t.webSiteList;e?(i.isSigned||this.checkSigned(),this.getIndexPageData()):n.length||this.updateWebSiteList()},async login(){let t=this.targetHost,e=this.discuz.HOST,i=this.userInfo,n=i.username,s=i.password,o=i.QA;if(n&&s){let i=o.split(","),r=i.length>1&&i[0]||null,c=i.length>1&&i[1]||null,f={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:r,answer:c,username:n,password:s,userlogin:"true"};r&&c||(delete f.questionid,delete f.answer);let d={httpConfig:{url:`${t}logging.php?action=login&loginsubmit=true`,method:"post",responseType:"arraybuffer",data:u.a.stringify(f)},encoding:"gbk"};this.$store.commit("SET_LOADING_STATUS",!0);let p=await a["a"].post(`${e}/api/advancedProxy`,d),g=p.headers;this.$store.commit("SET_LOADING_STATUS",!1),g.corscookies&&g.corscookies.split("|$$|").forEach(t=>{document.cookie=t}),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(l["e"])("cdb3_auth")}),this.checkSigned(),this.getIndexPageJson()}},async checkSigned(){this.targetHost;let t=this.discuz.signInfo,e=(f["a"].my,await this.getPageData()),i=e.formhash,n=e.username,s=e.recentReply,o=e.recentTopics;t.formhash=i,o&&o.forEach(e=>{e&&e.title==`${n}/${(new Date).getMonth()+1}月份/打卡签到帖`?e.lastPost.includes((new Date).Format("yyyy-M-d"))?t.isSigned=!0:t.tid=e.tid:e&&e.title==`${n}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(t.prevMonthSignThreadLastPostUrl=e.lastPostUrl)}),!t.prevMonthSignThreadLastPostUrl&&s&&s.forEach(e=>{e&&e.title==`${n}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(t.prevMonthSignThreadLastPostUrl=e.href)})},async getIndexPageData(){let t=`${this.targetHost}index.php`,e=f["a"].index,i={};sessionStorage.getItem(t)?i=JSON.parse(sessionStorage.getItem(t)):(i=await this.getPageData({url:t,selector:e}),sessionStorage.setItem(t,JSON.stringify(i))),this.areaList=i.areaList;let n=Object.assign({},this.discuz.userInfo);n.creditList=i.creditList,n.username=i.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:n}),i.username||this.logout()},async updateWebSiteList(){let t=d["a"].filter(t=>t.gfw),e=t[Math.floor(Math.random()*t.length)].host,i="http://www.oznewspaper.com/",n=f["a"].webSiteList,s=await this.getPageData({url:i,selector:n,HOST:e}),o=[];s.webSiteList.forEach(t=>{o.push(t.replace("\n","").replace(/ .*/g,""))}),localStorage.setItem("webSiteList",JSON.stringify(o)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:o})},onScroll(t){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem("homePage",t.target.scrollTop)},100)}})},g=p,h=(i("f945"),i("2877")),m=Object(h["a"])(g,n,s,!1,null,"7a29dd41",null);m.options.__file="index.vue";e["default"]=m.exports},cadf:function(t,e,i){"use strict";var n=i("9c6c"),s=i("d53b"),o=i("84f2"),r=i("6821");t.exports=i("01f9")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,s(1)):s(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},f945:function(t,e,i){"use strict";var n=i("76e9"),s=i.n(n);s.a},fab2:function(t,e,i){var n=i("7726").document;t.exports=n&&n.documentElement}}]);
//# sourceMappingURL=DiscuzView.86fce4e5.js.map