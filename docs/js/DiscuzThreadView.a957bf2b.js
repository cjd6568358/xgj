(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"01f9":function(t,e,s){"use strict";var o=s("2d00"),n=s("5ca1"),i=s("2aba"),r=s("32e9"),a=s("84f2"),c=s("41a0"),l=s("7f20"),u=s("38fd"),p=s("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),f="@@iterator",g="keys",h="values",m=function(){return this};t.exports=function(t,e,s,v,b,y,_){c(s,e,v);var x,P,w,S=function(t){if(!d&&t in j)return j[t];switch(t){case g:return function(){return new s(this,t)};case h:return function(){return new s(this,t)}}return function(){return new s(this,t)}},O=e+" Iterator",L=b==h,T=!1,j=t.prototype,k=j[p]||j[f]||b&&j[b],I=k||S(b),C=b?L?S("entries"):I:void 0,N="Array"==e&&j.entries||k;if(N&&(w=u(N.call(new t)),w!==Object.prototype&&w.next&&(l(w,O,!0),o||"function"==typeof w[p]||r(w,p,m))),L&&k&&k.name!==h&&(T=!0,I=function(){return k.call(this)}),o&&!_||!d&&!T&&j[p]||r(j,p,I),a[e]=I,a[O]=m,b)if(x={values:L?I:S(h),keys:y?I:S(g),entries:C},_)for(P in x)P in j||i(j,P,x[P]);else n(n.P+n.F*(d||T),e,x);return x}},"0d58":function(t,e,s){var o=s("ce10"),n=s("e11e");t.exports=Object.keys||function(t){return o(t,n)}},1495:function(t,e,s){var o=s("86cc"),n=s("cb7c"),i=s("0d58");t.exports=s("9e1e")?Object.defineProperties:function(t,e){n(t);var s,r=i(e),a=r.length,c=0;while(a>c)o.f(t,s=r[c++],e[s]);return t}},"1ba1":function(t,e,s){},"2aeb":function(t,e,s){var o=s("cb7c"),n=s("1495"),i=s("e11e"),r=s("613b")("IE_PROTO"),a=function(){},c="prototype",l=function(){var t,e=s("230e")("iframe"),o=i.length,n="<",r=">";e.style.display="none",s("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(n+"script"+r+"document.F=Object"+n+"/script"+r),t.close(),l=t.F;while(o--)delete l[c][i[o]];return l()};t.exports=Object.create||function(t,e){var s;return null!==t?(a[c]=o(t),s=new a,a[c]=null,s[r]=t):s=l(),void 0===e?s:n(s,e)}},"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},n=[],i=s("be94"),r=s("2f62"),a={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(i["a"])({},Object(r["c"])(["targetHost"])),methods:{gotoPage(t){console.log(t),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},c=a,l=(s("7afd"),s("2877")),u=Object(l["a"])(c,o,n,!1,null,"02fe0c40",null);u.options.__file="index.vue";e["a"]=u.exports},"38fd":function(t,e,s){var o=s("69a8"),n=s("4bf8"),i=s("613b")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},"41a0":function(t,e,s){"use strict";var o=s("2aeb"),n=s("4630"),i=s("7f20"),r={};s("32e9")(r,s("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,s){t.prototype=o(r,{next:n(1,s)}),i(t,e+" Iterator")}},"4bf8":function(t,e,s){var o=s("be13");t.exports=function(t){return Object(o(t))}},"4cc1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzThread-page"},[s("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"thread"},t._l(t.postList,function(e,o){return s("li",{key:o,staticClass:"post"},[s("div",{staticClass:"post-info"},[s("span",[t._v(t._s(e.postFloor))]),s("span",[t._v(t._s(e.authorName))]),s("span",[t._v(t._s(e.authorLevel))]),s("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),s("h2",[t._v(t._s(e.postTitle))]),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},n=[],i=(s("ac6a"),s("a481"),s("be94")),r=s("2f62"),a=(s("adb5"),s("333d")),c=s("aa9a"),l=s("dc16"),u={props:["url"],components:{Pagination:a["a"],Menus:c["a"]},data(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(i["a"])({},Object(r["d"])(["isLoading","discuz"]),Object(r["c"])(["targetHost"]),{prevUrl(){let t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url){let e=this.pageInfo.currPageNum;t=this.url.replace(/.*bbs\//g,"").replace(/(^.*\d{5,}-)(\d.*)(-1.html)/g,"$1"+(e-1)+"$3")}return t}}),async mounted(){await this.getThreadPageJson(this.url),this.$route.query.scrollTop&&this.$nextTick(()=>{document.querySelector(".overflow-container").scrollTop=this.$route.query.scrollTop})},beforeMount(){},destroyed(){},async beforeRouteUpdate(t,e,s){s(),await this.getThreadPageJson(t.params.url),document.querySelector(".overflow-container").scrollTop=0},methods:Object(i["a"])({},Object(r["b"])(["getPageData"]),{async getThreadPageJson(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let s=l["a"].thread;e=await this.getPageData({url:t,selector:s}),sessionStorage.setItem(t,JSON.stringify(e))}document.title=e.documentTitle,e.pageInfo&&(this.pageInfo=e.pageInfo),this.discuz.formhash=e.formhash,this.tid=e.replyUrl.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=e.replyUrl.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2"),this.postList=e.postList,this.postList.forEach(t=>{t.content=t.content.replace(/="attachment/g,`="${this.targetHost}attachment`).replace(/="images/g,`="${this.targetHost}images`).replace(/="http:\/\/(.*)\/bbs\//g,`="${this.targetHost}`).replace(/="(viewthread|thread.*)" target/g,(t,e,s,o)=>{return`="/xgj/discuz/thread/${encodeURIComponent(this.targetHost+e)}" target`}).replace(/:14pt/g,":5vw")})}})},p=u,d=(s("602e"),s("2877")),f=Object(d["a"])(p,o,n,!1,null,null,null);f.options.__file="thread.vue";e["default"]=f.exports},"51a2":function(t,e,s){},"5ca1":function(t,e,s){var o=s("7726"),n=s("8378"),i=s("32e9"),r=s("2aba"),a=s("9b43"),c="prototype",l=function(t,e,s){var u,p,d,f,g=t&l.F,h=t&l.G,m=t&l.S,v=t&l.P,b=t&l.B,y=h?o:m?o[e]||(o[e]={}):(o[e]||{})[c],_=h?n:n[e]||(n[e]={}),x=_[c]||(_[c]={});for(u in h&&(s=e),s)p=!g&&y&&void 0!==y[u],d=(p?y:s)[u],f=b&&p?a(d,o):v&&"function"==typeof d?a(Function.call,d):d,y&&r(y,u,d,t&l.U),_[u]!=d&&i(_,u,f),v&&x[u]!=d&&(x[u]=d)};o.core=n,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"5f38":function(t,e,s){},"602e":function(t,e,s){"use strict";var o=s("51a2"),n=s.n(o);n.a},"7afd":function(t,e,s){"use strict";var o=s("1ba1"),n=s.n(o);n.a},"7f20":function(t,e,s){var o=s("86cc").f,n=s("69a8"),i=s("2b4c")("toStringTag");t.exports=function(t,e,s){t&&!n(t=s?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"9c6c":function(t,e,s){var o=s("2b4c")("unscopables"),n=Array.prototype;void 0==n[o]&&s("32e9")(n,o,{}),t.exports=function(t){n[o][t]=!0}},a6e2:function(t,e,s){"use strict";var o=s("5f38"),n=s.n(o);n.a},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveReadProgress}},[t._v("收藏")])]),s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]),t.readProgress?s("li",[s("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},r=[],a=s("be94"),c=s("2f62"),l={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:Object(a["a"])({},Object(c["b"])(["submitReply"]),{async submit(t){let e=this.subject,s=this.message,o=this.fid,n=this.tid;await this.submitReply({subject:e,message:s,fid:o,tid:n}),this.closeModal(t),localStorage.removeItem(this.url),location.reload(!0)},closeModal(t){this.$emit("closeModal",t)}})},u=l,p=(s("b249"),s("2877")),d=Object(p["a"])(u,i,r,!1,null,"496186fc",null);d.options.__file="index.vue";var f=d.exports,g={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{readProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(f,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()}}},h=g,m=(s("a6e2"),Object(p["a"])(h,o,n,!1,null,"d8754156",null));m.options.__file="index.vue";e["a"]=m.exports},ac6a:function(t,e,s){for(var o=s("cadf"),n=s("0d58"),i=s("2aba"),r=s("7726"),a=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),p=l("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(f),h=0;h<g.length;h++){var m,v=g[h],b=f[v],y=r[v],_=y&&y.prototype;if(_&&(_[u]||a(_,u,d),_[p]||a(_,p,v),c[v]=d,b))for(m in o)_[m]||i(_,m,o[m],!0)}},b249:function(t,e,s){"use strict";var o=s("ee48"),n=s.n(o);n.a},cadf:function(t,e,s){"use strict";var o=s("9c6c"),n=s("d53b"),i=s("84f2"),r=s("6821");t.exports=s("01f9")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,s=this._i++;return!t||s>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?s:"values"==e?t[s]:[s,t[s]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},ee48:function(t,e,s){},fab2:function(t,e,s){var o=s("7726").document;t.exports=o&&o.documentElement}}]);
//# sourceMappingURL=DiscuzThreadView.a957bf2b.js.map