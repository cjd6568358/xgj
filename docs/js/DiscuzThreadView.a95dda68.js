(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"01f9":function(t,e,s){"use strict";var o=s("2d00"),i=s("5ca1"),n=s("2aba"),r=s("32e9"),a=s("84f2"),c=s("41a0"),l=s("7f20"),u=s("38fd"),d=s("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),f="@@iterator",g="keys",h="values",m=function(){return this};t.exports=function(t,e,s,v,b,y,_){c(s,e,v);var x,P,w,S=function(t){if(!p&&t in j)return j[t];switch(t){case g:return function(){return new s(this,t)};case h:return function(){return new s(this,t)}}return function(){return new s(this,t)}},O=e+" Iterator",L=b==h,T=!1,j=t.prototype,k=j[d]||j[f]||b&&j[b],C=k||S(b),I=b?L?S("entries"):C:void 0,N="Array"==e&&j.entries||k;if(N&&(w=u(N.call(new t)),w!==Object.prototype&&w.next&&(l(w,O,!0),o||"function"==typeof w[d]||r(w,d,m))),L&&k&&k.name!==h&&(T=!0,C=function(){return k.call(this)}),o&&!_||!p&&!T&&j[d]||r(j,d,C),a[e]=C,a[O]=m,b)if(x={values:L?C:S(h),keys:y?C:S(g),entries:I},_)for(P in x)P in j||n(j,P,x[P]);else i(i.P+i.F*(p||T),e,x);return x}},"0d58":function(t,e,s){var o=s("ce10"),i=s("e11e");t.exports=Object.keys||function(t){return o(t,i)}},1495:function(t,e,s){var o=s("86cc"),i=s("cb7c"),n=s("0d58");t.exports=s("9e1e")?Object.defineProperties:function(t,e){i(t);var s,r=n(e),a=r.length,c=0;while(a>c)o.f(t,s=r[c++],e[s]);return t}},"1ba1":function(t,e,s){},2090:function(t,e,s){},"2aeb":function(t,e,s){var o=s("cb7c"),i=s("1495"),n=s("e11e"),r=s("613b")("IE_PROTO"),a=function(){},c="prototype",l=function(){var t,e=s("230e")("iframe"),o=n.length,i="<",r=">";e.style.display="none",s("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+r+"document.F=Object"+i+"/script"+r),t.close(),l=t.F;while(o--)delete l[c][n[o]];return l()};t.exports=Object.create||function(t,e){var s;return null!==t?(a[c]=o(t),s=new a,a[c]=null,s[r]=t):s=l(),void 0===e?s:i(s,e)}},"333d":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination"},[t.prevUrl?s("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),s("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?s("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},i=[],n=s("be94"),r=s("2f62"),a={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(n["a"])({},Object(r["c"])(["targetHost"])),methods:{gotoPage(t){console.log(t),this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},c=a,l=(s("7afd"),s("2877")),u=Object(l["a"])(c,o,i,!1,null,"02fe0c40",null);u.options.__file="index.vue";e["a"]=u.exports},"38fd":function(t,e,s){var o=s("69a8"),i=s("4bf8"),n=s("613b")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,n)?t[n]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},"41a0":function(t,e,s){"use strict";var o=s("2aeb"),i=s("4630"),n=s("7f20"),r={};s("32e9")(r,s("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,s){t.prototype=o(r,{next:i(1,s)}),n(t,e+" Iterator")}},"4bf8":function(t,e,s){var o=s("be13");t.exports=function(t){return Object(o(t))}},"4cc1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discuzThread-page"},[s("Menus",{attrs:{url:t.url,tid:t.tid,fid:t.fid}}),s("div",{staticClass:"overflow-container"},[s("ul",{staticClass:"thread"},t._l(t.postList,function(e,o){return s("li",{key:o,staticClass:"post"},[s("div",{staticClass:"post-info"},[s("span",[t._v(t._s(e.postFloor))]),s("span",[t._v(t._s(e.authorName))]),s("span",[t._v(t._s(e.authorLevel))]),s("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),s("h2",[t._v(t._s(e.postTitle))]),s("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():s("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},i=[],n=(s("ac6a"),s("a481"),s("be94")),r=s("2f62"),a=s("333d"),c=s("aa9a"),l=s("dc16"),u={props:["url"],components:{Pagination:a["a"],Menus:c["a"]},data(){return{postList:[],tid:"",fid:"",pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(n["a"])({},Object(r["d"])(["isLoading","discuz"]),Object(r["c"])(["targetHost"]),{prevUrl(){let t="";if(this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url){let e=this.pageInfo.currPageNum;t=this.url.replace(/.*bbs\//g,"").replace(/(^.*\d{5,}-)(\d.*)(-1.html)/g,"$1"+(e-1)+"$3")}return t}}),async mounted(){await this.getThreadPageJson(this.url),this.$route.query.scrollTop&&this.$nextTick(()=>{document.querySelector(".overflow-container").scrollTop=this.$route.query.scrollTop})},beforeMount(){},destroyed(){},async beforeRouteUpdate(t,e,s){s(),await this.getThreadPageJson(t.params.url),document.querySelector(".overflow-container").scrollTop=0},methods:Object(n["a"])({},Object(r["b"])(["getPageData"]),{async getThreadPageJson(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let s=l["a"].thread;e=await this.getPageData({url:t,selector:s}),sessionStorage.setItem(t,JSON.stringify(e))}let s=e,o=s.documentTitle,i=s.pageInfo,n=void 0===i?{}:i,r=s.formhash,a=s.replyUrl,c=s.postList,u=void 0===c?[]:c;document.title=o,this.discuz.formhash=r,n&&(this.pageInfo=n),a&&(this.tid=a.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g,"$2"),this.fid=a.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g,"$2")),this.postList=u,this.postList.forEach(t=>{t.content=t.content.replace(/="attachment/g,`="${this.targetHost}attachment`).replace(/="images/g,`="${this.targetHost}images`).replace(/="http:\/\/(.*)\/bbs\//g,`="${this.targetHost}`).replace(/="(viewthread|thread.*)" target/g,(t,e)=>{return`="/xgj/discuz/thread/${encodeURIComponent(this.targetHost+e)}" target`}).replace(/:14pt/g,":5vw")})}})},d=u,p=(s("602e"),s("2877")),f=Object(p["a"])(d,o,i,!1,null,null,null);f.options.__file="thread.vue";e["default"]=f.exports},"51a2":function(t,e,s){},"5a03":function(t,e,s){"use strict";var o=s("2090"),i=s.n(o);i.a},"5ca1":function(t,e,s){var o=s("7726"),i=s("8378"),n=s("32e9"),r=s("2aba"),a=s("9b43"),c="prototype",l=function(t,e,s){var u,d,p,f,g=t&l.F,h=t&l.G,m=t&l.S,v=t&l.P,b=t&l.B,y=h?o:m?o[e]||(o[e]={}):(o[e]||{})[c],_=h?i:i[e]||(i[e]={}),x=_[c]||(_[c]={});for(u in h&&(s=e),s)d=!g&&y&&void 0!==y[u],p=(d?y:s)[u],f=b&&d?a(p,o):v&&"function"==typeof p?a(Function.call,p):p,y&&r(y,u,p,t&l.U),_[u]!=p&&n(_,u,f),v&&x[u]!=p&&(x[u]=p)};o.core=i,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"602e":function(t,e,s){"use strict";var o=s("51a2"),i=s.n(o);i.a},"7afd":function(t,e,s){"use strict";var o=s("1ba1"),i=s.n(o);i.a},"7f20":function(t,e,s){var o=s("86cc").f,i=s("69a8"),n=s("2b4c")("toStringTag");t.exports=function(t,e,s){t&&!i(t=s?t:t.prototype,n)&&o(t,n,{configurable:!0,value:e})}},"84f2":function(t,e){t.exports={}},"9c6c":function(t,e,s){var o=s("2b4c")("unscopables"),i=Array.prototype;void 0==i[o]&&s("32e9")(i,o,{}),t.exports=function(t){i[o][t]=!0}},aa9a:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.isOpened&&"opened"},[s("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[s("title",[t._v("close")]),s("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),s("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[s("svg",[s("use",{attrs:{"xlink:href":"#icon-close"}})])]),s("li",[s("span",{on:{click:t.saveReadProgress}},[t._v("收藏")])]),t.tid&&t.fid?s("li",[s("span",{on:{click:t.onReply}},[t._v("回复")])]):t._e(),t.readProgress?s("li",[s("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reply-modal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入内容"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("ul",[s("li",{staticClass:"btn submit",on:{click:t.submit}},[t._v("提交")]),s("li",{staticClass:"btn cancel",on:{click:t.closeModal}},[t._v("取消")])])])},r=[],a=s("be94"),c=s("2f62"),l={props:["url","fid","tid"],data(){return{subject:"",message:""}},destroyed(){},methods:Object(a["a"])({},Object(c["b"])(["submitReply"]),{async submit(t){let e=this.subject,s=this.message,o=this.fid,i=this.tid;await this.submitReply({subject:e,message:s,fid:o,tid:i}),this.closeModal(t),localStorage.removeItem(this.url),location.reload(!0)},closeModal(t){this.$emit("closeModal",t)}})},u=l,d=(s("b249"),s("2877")),p=Object(d["a"])(u,n,r,!1,null,"496186fc",null);p.options.__file="index.vue";var f=p.exports,g={props:["url","tid","fid"],components:{},data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{readProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))},onReply(){const t=this.$createElement;this.$openModal({position:"bottom",maskClosable:!0,content:t(f,{attrs:{url:this.url,fid:this.fid,tid:this.tid}})}),this.toggleclass()}}},h=g,m=(s("5a03"),Object(d["a"])(h,o,i,!1,null,"367c284c",null));m.options.__file="index.vue";e["a"]=m.exports},ac6a:function(t,e,s){for(var o=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),a=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(f),h=0;h<g.length;h++){var m,v=g[h],b=f[v],y=r[v],_=y&&y.prototype;if(_&&(_[u]||a(_,u,p),_[d]||a(_,d,v),c[v]=p,b))for(m in o)_[m]||n(_,m,o[m],!0)}},b249:function(t,e,s){"use strict";var o=s("ee48"),i=s.n(o);i.a},cadf:function(t,e,s){"use strict";var o=s("9c6c"),i=s("d53b"),n=s("84f2"),r=s("6821");t.exports=s("01f9")(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,s=this._i++;return!t||s>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?s:"values"==e?t[s]:[s,t[s]])},"values"),n.Arguments=n.Array,o("keys"),o("values"),o("entries")},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},ee48:function(t,e,s){},fab2:function(t,e,s){var o=s("7726").document;t.exports=o&&o.documentElement}}]);
//# sourceMappingURL=DiscuzThreadView.a95dda68.js.map