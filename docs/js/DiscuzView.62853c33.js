(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"01f9":function(t,e,i){"use strict";var s=i("2d00"),n=i("5ca1"),o=i("2aba"),r=i("32e9"),a=i("84f2"),c=i("41a0"),u=i("7f20"),l=i("38fd"),f=i("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",g="keys",m="values",h=function(){return this};t.exports=function(t,e,i,v,S,b,y){c(i,e,v);var w,L,I,_=function(t){if(!d&&t in O)return O[t];switch(t){case g:return function(){return new i(this,t)};case m:return function(){return new i(this,t)}}return function(){return new i(this,t)}},P=e+" Iterator",x=S==m,T=!1,O=t.prototype,k=O[f]||O[p]||S&&O[S],D=k||_(S),A=S?x?_("entries"):D:void 0,C="Array"==e&&O.entries||k;if(C&&(I=l(C.call(new t)),I!==Object.prototype&&I.next&&(u(I,P,!0),s||"function"==typeof I[f]||r(I,f,h))),x&&k&&k.name!==m&&(T=!0,D=function(){return k.call(this)}),s&&!y||!d&&!T&&O[f]||r(O,f,D),a[e]=D,a[P]=h,S)if(w={values:x?D:_(m),keys:b?D:_(g),entries:A},y)for(L in w)L in O||o(O,L,w[L]);else n(n.P+n.F*(d||T),e,w);return w}},"0d58":function(t,e,i){var s=i("ce10"),n=i("e11e");t.exports=Object.keys||function(t){return s(t,n)}},1495:function(t,e,i){var s=i("86cc"),n=i("cb7c"),o=i("0d58");t.exports=i("9e1e")?Object.defineProperties:function(t,e){n(t);var i,r=o(e),a=r.length,c=0;while(a>c)s.f(t,i=r[c++],e[i]);return t}},"2aeb":function(t,e,i){var s=i("cb7c"),n=i("1495"),o=i("e11e"),r=i("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=i("230e")("iframe"),s=o.length,n="<",r=">";e.style.display="none",i("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(n+"script"+r+"document.F=Object"+n+"/script"+r),t.close(),u=t.F;while(s--)delete u[c][o[s]];return u()};t.exports=Object.create||function(t,e){var i;return null!==t?(a[c]=s(t),i=new a,a[c]=null,i[r]=t):i=u(),void 0===e?i:n(i,e)}},"38fd":function(t,e,i){var s=i("69a8"),n=i("4bf8"),o=i("613b")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),s(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},"391e":function(t,e,i){},"41a0":function(t,e,i){"use strict";var s=i("2aeb"),n=i("4630"),o=i("7f20"),r={};i("32e9")(r,i("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=s(r,{next:n(1,i)}),o(t,e+" Iterator")}},"4bf8":function(t,e,i){var s=i("be13");t.exports=function(t){return Object(s(t))}},"5ca1":function(t,e,i){var s=i("7726"),n=i("8378"),o=i("32e9"),r=i("2aba"),a=i("9b43"),c="prototype",u=function(t,e,i){var l,f,d,p,g=t&u.F,m=t&u.G,h=t&u.S,v=t&u.P,S=t&u.B,b=m?s:h?s[e]||(s[e]={}):(s[e]||{})[c],y=m?n:n[e]||(n[e]={}),w=y[c]||(y[c]={});for(l in m&&(i=e),i)f=!g&&b&&void 0!==b[l],d=(f?b:i)[l],p=S&&f?a(d,s):v&&"function"==typeof d?a(Function.call,d):d,b&&r(b,l,d,t&u.U),y[l]!=d&&o(y,l,p),v&&w[l]!=d&&(w[l]=d)};s.core=n,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"7f20":function(t,e,i){var s=i("86cc").f,n=i("69a8"),o=i("2b4c")("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,o)&&s(t,o,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"9c6c":function(t,e,i){var s=i("2b4c")("unscopables"),n=Array.prototype;void 0==n[s]&&i("32e9")(n,s,{}),t.exports=function(t){n[s][t]=!0}},ac6a:function(t,e,i){for(var s=i("cadf"),n=i("0d58"),o=i("2aba"),r=i("7726"),a=i("32e9"),c=i("84f2"),u=i("2b4c"),l=u("iterator"),f=u("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(p),m=0;m<g.length;m++){var h,v=g[m],S=p[v],b=r[v],y=b&&b.prototype;if(y&&(y[l]||a(y,l,d),y[f]||a(y,f,v),c[v]=d,S))for(h in s)y[h]||o(y,h,s[h],!0)}},bb62:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discuz-page"},[i("div",{staticClass:"overflow-container",on:{scroll:t.onScroll}},[t.discuz.isLogin?t._e():i("div",{staticClass:"login-form"},[i("center",[i("h3",[t._v("discuz论坛手机版")])]),i("div",{staticClass:"input-warp"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.webSite=e.target.multiple?i:i[0]}}},t._l(t.discuz.webSiteList,function(e){return i("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0),i("a",{staticClass:"btn",on:{click:t.updateWebSiteList}},[t._v("更新列表")])]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.userInfo.username},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"username",e.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:t.userInfo.QA},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"QA",e.target.value)}}})]),i("a",{staticClass:"btn",on:{click:t.login}},[t._v("登录")])],1),t.discuz.isLogin?[i("ul",{staticClass:"user-info"},[i("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[t._v(t._s(t.discuz.userInfo.username))]),t.discuz.signInfo.isSigned?i("li",[t._v("已签到")]):i("li",{on:{click:t.dailySignIn}},[t._v("日签到")]),i("li",{on:{click:t.monthSignIn}},[t._v("月签到")]),i("li",{on:{click:t.logout}},[t._v("退出")])],1),t._l(t.areaList,function(e,s){return i("ul",{key:s,staticClass:"area",attrs:{"data-title":e.name}},t._l(e.value,function(e,s){return i("router-link",{key:s,attrs:{to:{name:"DiscuzForumView",params:{url:t.targetHost+e.value}},tag:"li"}},[t._v(t._s(e.name))])}),1)})]:t._e(),i("a",{staticClass:"btn switch",on:{click:t.switchProxy}},[t._v("切换代理源("+t._s(t.proxyServerPlatom)+")")])],2)])},n=[],o=(i("a481"),i("ac6a"),i("28a5"),i("be94")),r=i("2f62"),a=i("adb5"),c=i("b383"),u=i.n(c),l=i("4260"),f=i("dc16"),d=i("db49"),p={name:"discuz-page",components:{},data(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(o["a"])({},Object(r["d"])(["isLoading","discuz"]),Object(r["c"])(["targetHost"]),{webSite:{get(){return this.discuz.webSite},set(t){this.$store.commit("UPDATE_DISCUZ",{webSite:t})}},proxyServerPlatom(){return d["a"].filter(t=>t.host===this.discuz.HOST)[0].platom}}),mounted(){},activated(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount(){},destroyed(){},methods:Object(o["a"])({},Object(r["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"]),{async init(){let t=this.discuz,e=t.isLogin,i=t.signInfo,s=t.webSiteList;e?(i.isSigned||this.checkSigned(),this.getIndexPageData()):s.length||this.updateWebSiteList()},async login(){let t=this.targetHost,e=this.discuz.HOST,i=this.userInfo,s=i.username,n=i.password,o=i.QA;if(s&&n){let i=o.split(","),r=i.length>1&&i[0]||null,c=i.length>1&&i[1]||null,f={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:r,answer:c,username:s,password:n,userlogin:"true"};r&&c||(delete f.questionid,delete f.answer);let d={httpConfig:{url:`${t}logging.php?action=login&loginsubmit=true`,method:"post",responseType:"arraybuffer",data:u.a.stringify(f)},encoding:"gbk"};this.$store.commit("SET_LOADING_STATUS",!0);let p=await a["a"].post(`${e}/api/advancedProxy`,d),g=p.headers;this.$store.commit("SET_LOADING_STATUS",!1),g.corscookies&&g.corscookies.split("|$$|").forEach(t=>{document.cookie=t}),this.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(l["e"])("cdb3_auth")}),this.checkSigned(),this.getIndexPageData()}},async checkSigned(){let t=this.targetHost,e=this.discuz.signInfo,i=`${t}my.php`,s=f["a"].my,n=await this.getPageData({url:i,selector:s}),o=n.formhash,r=n.username,a=n.recentReply,c=n.recentTopics;this.discuz.formhash=o,c&&c.forEach(t=>{t&&t.title==`${r}/${(new Date).getMonth()+1}月份/打卡签到帖`?t.lastPost.includes((new Date).Format("yyyy-M-d"))?e.isSigned=!0:e.tid=t.tid:t&&t.title==`${r}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(e.lastPostUrl=t.lastPostUrl)}),!e.lastPostUrl&&a&&a.forEach(t=>{t&&t.title==`${r}/${(new Date).getMonth()||12}月份/打卡签到帖`&&(e.lastPostUrl=t.href)})},async getIndexPageData(){let t=`${this.targetHost}index.php`,e=f["a"].index,i={};sessionStorage.getItem(t)?i=JSON.parse(sessionStorage.getItem(t)):(i=await this.getPageData({url:t,selector:e}),sessionStorage.setItem(t,JSON.stringify(i))),this.areaList=i.areaList;let s=Object.assign({},this.discuz.userInfo);s.creditList=i.creditList,s.username=i.username,this.$store.commit("UPDATE_DISCUZ",{userInfo:s}),i.username||this.logout()},async updateWebSiteList(){let t=d["a"].filter(t=>t.gfw),e=t[Math.floor(Math.random()*t.length)].host,i="http://www.oznewspaper.com/",s=f["a"].webSiteList,n=await this.getPageData({url:i,selector:s,HOST:e}),o=[];n.webSiteList.forEach(t=>{o.push(t.replace("\n","").replace(/ .*/g,""))}),localStorage.setItem("webSiteList",JSON.stringify(o)),this.$store.commit("UPDATE_DISCUZ",{webSiteList:o})},onScroll(t){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem("homePage",t.target.scrollTop)},100)}})},g=p,m=(i("ef26"),i("2877")),h=Object(m["a"])(g,s,n,!1,null,"02669aa0",null);h.options.__file="index.vue";e["default"]=h.exports},cadf:function(t,e,i){"use strict";var s=i("9c6c"),n=i("d53b"),o=i("84f2"),r=i("6821");t.exports=i("01f9")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values"),o.Arguments=o.Array,s("keys"),s("values"),s("entries")},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},ef26:function(t,e,i){"use strict";var s=i("391e"),n=i.n(s);n.a},fab2:function(t,e,i){var s=i("7726").document;t.exports=s&&s.documentElement}}]);
//# sourceMappingURL=DiscuzView.62853c33.js.map