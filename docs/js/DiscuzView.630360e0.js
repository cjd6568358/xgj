(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzView"],{"01f9":function(e,t,i){"use strict";var n=i("2d00"),r=i("5ca1"),s=i("2aba"),o=i("32e9"),a=i("84f2"),c=i("41a0"),u=i("7f20"),l=i("38fd"),d=i("2b4c")("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",g="keys",m="values",v=function(){return this};e.exports=function(e,t,i,h,b,S,y){c(i,t,h);var w,L,I,_=function(e){if(!f&&e in P)return P[e];switch(e){case g:return function(){return new i(this,e)};case m:return function(){return new i(this,e)}}return function(){return new i(this,e)}},O=t+" Iterator",T=b==m,x=!1,P=e.prototype,k=P[d]||P[p]||b&&P[b],D=k||_(b),A=b?T?_("entries"):D:void 0,C="Array"==t&&P.entries||k;if(C&&(I=l(C.call(new e)),I!==Object.prototype&&I.next&&(u(I,O,!0),n||"function"==typeof I[d]||o(I,d,v))),T&&k&&k.name!==m&&(x=!0,D=function(){return k.call(this)}),n&&!y||!f&&!x&&P[d]||o(P,d,D),a[t]=D,a[O]=v,b)if(w={values:T?D:_(m),keys:S?D:_(g),entries:A},y)for(L in w)L in P||s(P,L,w[L]);else r(r.P+r.F*(f||x),t,w);return w}},"0d58":function(e,t,i){var n=i("ce10"),r=i("e11e");e.exports=Object.keys||function(e){return n(e,r)}},1495:function(e,t,i){var n=i("86cc"),r=i("cb7c"),s=i("0d58");e.exports=i("9e1e")?Object.defineProperties:function(e,t){r(e);var i,o=s(t),a=o.length,c=0;while(a>c)n.f(e,i=o[c++],t[i]);return e}},"2aeb":function(e,t,i){var n=i("cb7c"),r=i("1495"),s=i("e11e"),o=i("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var e,t=i("230e")("iframe"),n=s.length,r="<",o=">";t.style.display="none",i("fab2").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(r+"script"+o+"document.F=Object"+r+"/script"+o),e.close(),u=e.F;while(n--)delete u[c][s[n]];return u()};e.exports=Object.create||function(e,t){var i;return null!==e?(a[c]=n(e),i=new a,a[c]=null,i[o]=e):i=u(),void 0===t?i:r(i,t)}},"38fd":function(e,t,i){var n=i("69a8"),r=i("4bf8"),s=i("613b")("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},"41a0":function(e,t,i){"use strict";var n=i("2aeb"),r=i("4630"),s=i("7f20"),o={};i("32e9")(o,i("2b4c")("iterator"),function(){return this}),e.exports=function(e,t,i){e.prototype=n(o,{next:r(1,i)}),s(e,t+" Iterator")}},"7f20":function(e,t,i){var n=i("86cc").f,r=i("69a8"),s=i("2b4c")("toStringTag");e.exports=function(e,t,i){e&&!r(e=i?e:e.prototype,s)&&n(e,s,{configurable:!0,value:t})}},"84f2":function(e,t){e.exports={}},"9c6c":function(e,t,i){var n=i("2b4c")("unscopables"),r=Array.prototype;void 0==r[n]&&i("32e9")(r,n,{}),e.exports=function(e){r[n][e]=!0}},ac6a:function(e,t,i){for(var n=i("cadf"),r=i("0d58"),s=i("2aba"),o=i("7726"),a=i("32e9"),c=i("84f2"),u=i("2b4c"),l=u("iterator"),d=u("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=r(p),m=0;m<g.length;m++){var v,h=g[m],b=p[h],S=o[h],y=S&&S.prototype;if(y&&(y[l]||a(y,l,f),y[d]||a(y,d,h),c[h]=f,b))for(v in n)y[v]||s(y,v,n[v],!0)}},b9ce:function(e,t,i){"use strict";var n=i("d8bb"),r=i.n(n);r.a},bb62:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"discuz-page"},[i("div",{staticClass:"overflow-container",on:{scroll:e.onScroll}},[e.discuz.isLogin?e._e():i("div",{staticClass:"login-form"},[i("center",[i("h3",[e._v("discuz论坛手机版")])]),i("div",{staticClass:"input-warp"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.webSite,expression:"webSite"}],attrs:{name:"",id:"",placeholder:"请选择站点"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.webSite=t.target.multiple?i:i[0]}}},e._l(e.discuz.webSiteList,function(t){return i("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),0),i("a",{staticClass:"btn",on:{click:e.updateWebSiteList}},[e._v("更新列表")])]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.username,expression:"userInfo.username"}],attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.userInfo.username},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"username",t.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.password,expression:"userInfo.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userInfo.password},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"password",t.target.value)}}})]),i("div",{staticClass:"input-warp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.QA,expression:"userInfo.QA"}],attrs:{type:"text",placeholder:"请输入问题ID和答案(以逗号分隔)"},domProps:{value:e.userInfo.QA},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"QA",t.target.value)}}})]),i("a",{staticClass:"btn",on:{click:e.login}},[e._v("登录")])],1),e.discuz.isLogin?[i("ul",{staticClass:"user-info"},[i("router-link",{attrs:{to:{name:"DiscuzMyView"},tag:"li"}},[e._v(e._s(e.discuz.userInfo.username))]),e.discuz.signInfo.isSigned?i("li",[e._v("已签到")]):i("li",{on:{click:e.dailySignIn}},[e._v("日签到")]),i("li",{on:{click:e.monthSignIn}},[e._v("月签到")]),i("li",{on:{click:e.logout}},[e._v("退出")])],1),e._l(e.areaList,function(t,n){return i("ul",{key:n,staticClass:"area",attrs:{"data-title":t.name}},e._l(t.value,function(t,n){return i("router-link",{key:n,attrs:{to:{name:"DiscuzForumView",params:{url:e.targetHost+t.value}},tag:"li"}},[e._v(e._s(t.name))])}),1)})]:e._e(),i("a",{staticClass:"btn switch",on:{click:e.switchProxy}},[e._v("切换代理源("+e._s(e.proxyServerPlatom)+")")])],2)])},r=[],s=(i("a481"),i("ac6a"),i("28a5"),i("1da1")),o=i("be94"),a=i("2f62"),c=i("adb5"),u=i("b383"),l=i.n(u),d=i("4260"),f=i("dc16"),p=i("db49"),g={name:"discuz-page",components:{},data(){return{areaList:[],userInfo:{username:"",password:"",QA:""}}},computed:Object(o["a"])({},Object(a["d"])(["isLoading","discuz"]),Object(a["c"])(["targetHost"]),{webSite:{get(){return this.discuz.webSite},set(e){this.$store.commit("UPDATE_DISCUZ",{webSite:e})}},proxyServerPlatom(){return p["a"].filter(e=>e.host===this.discuz.HOST)[0].platom}}),mounted(){},activated(){this.init(),console.log("isLogin:",this.discuz.isLogin,this.discuz.HOST),document.querySelector(".overflow-container").scrollTop=sessionStorage.getItem("homePage")||0},beforeMount(){},destroyed(){},methods:Object(o["a"])({},Object(a["b"])(["switchProxy","logout","submitPost","dailySignIn","monthSignIn","getPageData"]),{init(){var e=this;return Object(s["a"])(function*(){let t=e.discuz,i=t.isLogin,n=t.signInfo,r=t.webSiteList;i?(n.isSigned||e.checkSigned(),e.getIndexPageData()):r.length||e.updateWebSiteList()})()},login(){var e=this;return Object(s["a"])(function*(){let t=e.targetHost,i=e.discuz.HOST,n=e.userInfo,r=n.username,s=n.password,o=n.QA;if(r&&s){let n=o.split(","),a=n.length>1&&n[0]||null,u=n.length>1&&n[1]||null,f={formhash:"30b7da0e",cookietime:"315360000",loginfield:"username",questionid:a,answer:u,username:r,password:s,userlogin:"true"};a&&u||(delete f.questionid,delete f.answer);let p={httpConfig:{url:`${t}logging.php?action=login&loginsubmit=true`,method:"post",responseType:"arraybuffer",data:l.a.stringify(f)},encoding:"gbk"};e.$store.commit("SET_LOADING_STATUS",!0);let g=yield c["a"].post(`${i}/api/advancedProxy`,p),m=g.headers;e.$store.commit("SET_LOADING_STATUS",!1),m.corscookies&&m.corscookies.split("|$$|").forEach(e=>{document.cookie=e}),e.$store.commit("UPDATE_DISCUZ",{isLogin:!!Object(d["e"])("cdb3_auth")}),e.checkSigned(),e.getIndexPageData()}})()},checkSigned(){var e=this;return Object(s["a"])(function*(){let t=e.targetHost,i=e.discuz.signInfo,n=`${t}my.php`,r=f["a"].my,s=yield e.getPageData({url:n,selector:r}),o=s.formhash,a=s.username,c=(s.recentReply,s.recentTopics);e.discuz.formhash=o,c&&c.forEach(e=>{e&&e.title==`${a}/${(new Date).getMonth()+1}月份/打卡签到帖`&&(e.lastPost.includes((new Date).Format("yyyy-M-d"))?i.isSigned=!0:i.tid=e.tid)})})()},getIndexPageData(){var e=this;return Object(s["a"])(function*(){let t=`${e.targetHost}index.php`,i=f["a"].index,n={};sessionStorage.getItem(t)?n=JSON.parse(sessionStorage.getItem(t)):(n=yield e.getPageData({url:t,selector:i}),sessionStorage.setItem(t,JSON.stringify(n))),e.areaList=n.areaList;let r=Object.assign({},e.discuz.userInfo);r.creditList=n.creditList,r.username=n.username,e.$store.commit("UPDATE_DISCUZ",{userInfo:r}),n.username||e.logout()})()},updateWebSiteList(){var e=this;return Object(s["a"])(function*(){let t=p["a"].filter(e=>e.gfw),i=t[Math.floor(Math.random()*t.length)].host,n="http://www.oznewspaper.com/",r=f["a"].webSiteList,s=yield e.getPageData({url:n,selector:r,HOST:i}),o=[];s.webSiteList.forEach(e=>{o.push(e.replace("\n","").replace(/ .*/g,""))}),localStorage.setItem("webSiteList",JSON.stringify(o)),e.$store.commit("UPDATE_DISCUZ",{webSiteList:o})})()},onScroll(e){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{sessionStorage.setItem("homePage",e.target.scrollTop)},100)}})},m=g,v=(i("b9ce"),i("2877")),h=Object(v["a"])(m,n,r,!1,null,"60b6cc3e",null);t["default"]=h.exports},cadf:function(e,t,i){"use strict";var n=i("9c6c"),r=i("d53b"),s=i("84f2"),o=i("6821");e.exports=i("01f9")(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,i=this._i++;return!e||i>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?i:"values"==t?e[i]:[i,e[i]])},"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},d53b:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},d8bb:function(e,t,i){},fab2:function(e,t,i){var n=i("7726").document;e.exports=n&&n.documentElement}}]);