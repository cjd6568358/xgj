(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzForumView"],{"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),s=n("32e9"),a=n("84f2"),l=n("41a0"),c=n("7f20"),u=n("38fd"),f=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",d="keys",m="values",g=function(){return this};t.exports=function(t,e,n,b,v,$,y){l(n,e,b);var P,x,_,S=function(t){if(!p&&t in T)return T[t];switch(t){case d:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},N=e+" Iterator",L=v==m,w=!1,T=t.prototype,O=T[f]||T[h]||v&&T[v],k=O||S(v),I=v?L?S("entries"):k:void 0,M="Array"==e&&T.entries||O;if(M&&(_=u(M.call(new t)),_!==Object.prototype&&_.next&&(c(_,N,!0),r||"function"==typeof _[f]||s(_,f,g))),L&&O&&O.name!==m&&(w=!0,k=function(){return O.call(this)}),r&&!y||!p&&!w&&T[f]||s(T,f,k),a[e]=k,a[N]=g,v)if(P={values:L?k:S(m),keys:$?k:S(d),entries:I},y)for(x in P)x in T||i(T,x,P[x]);else o(o.P+o.F*(p||w),e,P);return P}},"05d9":function(t,e,n){},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,s=i(e),a=s.length,l=0;while(a>l)r.f(t,n=s[l++],e[n]);return t}},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),s=n("613b")("IE_PROTO"),a=function(){},l="prototype",c=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",s=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),c=t.F;while(r--)delete c[l][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[l]=r(t),n=new a,a[l]=null,n[s]=t):n=c(),void 0===e?n:o(n,e)}},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},o=[],i=n("be94"),s=n("2f62"),a={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(i["a"])({},Object(s["c"])(["targetHost"])),methods:{gotoPage(t){this.$router.push(encodeURIComponent(`${this.targetHost}${t}`))}}},l=a,c=(n("b741"),n("2877")),u=Object(c["a"])(l,r,o,!1,null,"f82b4964",null);u.options.__file="index.vue";e["a"]=u.exports},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),s={};n("32e9")(s,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:o(1,n)}),i(t,e+" Iterator")}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),s=n("2aba"),a=n("9b43"),l="prototype",c=function(t,e,n){var u,f,p,h,d=t&c.F,m=t&c.G,g=t&c.S,b=t&c.P,v=t&c.B,$=m?r:g?r[e]||(r[e]={}):(r[e]||{})[l],y=m?o:o[e]||(o[e]={}),P=y[l]||(y[l]={});for(u in m&&(n=e),n)f=!d&&$&&void 0!==$[u],p=(f?$:n)[u],h=v&&f?a(p,r):b&&"function"==typeof p?a(Function.call,p):p,$&&s($,u,p,t&c.U),y[u]!=p&&i(y,u,h),b&&P[u]!=p&&(P[u]=p)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"645c":function(t,e,n){"use strict";var r=n("d226"),o=n.n(r);o.a},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"820c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzForum-page"},[n("Menus",{attrs:{url:t.url}}),n("div",{staticClass:"overflow-container",on:{touchend:t.onScroll}},[t._l(t.forumList,function(e,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":e.name}},[t._l(e.value,function(e,r){return["投票"!=e.type?n("router-link",{key:r,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),e.permission?[t._v("[阅读权限"+t._s(e.permission)+"]")]:t._e(),t._v("\n\t\t\t\t\t♥"+t._s(e.thanks)+" ("+t._s(e.nums)+")\n\t\t\t\t")],2):t._e()]})],2)}),t.isLoading?t._e():n("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],2)],1)},o=[],i=(n("a481"),n("be94")),s=(n("ac6a"),n("2f62")),a=n("adb5"),l=n("333d"),c=n("aa9a"),u=n("dc16"),f={props:["url"],components:{Pagination:l["a"],Menus:c["a"]},data(){return{forumList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null},scrollMap:new Map}},computed:Object(i["a"])({},Object(s["d"])(["isLoading","discuz"]),Object(s["c"])(["targetHost"]),{prevUrl(){if(1!=this.pageInfo.currPageNum&&this.url)return this.url.replace(/-\d.html/,`-${this.pageInfo.currPageNum-1}.html`).replace(/.*bbs\//g,"")}}),async mounted(){},async beforeRouteUpdate(t,e,n){n(),await this.getForumPageJson(t.params.url);let r=0;this.scrollMap.has(t.params.url)&&(r=this.scrollMap.get(t.params.url)),document.querySelector(".overflow-container").scrollTop=r},async activated(){await this.getForumPageJson(this.url);let t=0;this.scrollMap.has(this.url)&&(t=this.scrollMap.get(this.url)),document.querySelector(".overflow-container").scrollTop=t},beforeMount(){},destroyed(){},methods:{async getForumPageJson(t){let e={};if(sessionStorage.getItem(t))e=JSON.parse(sessionStorage.getItem(t));else{let n={httpConfig:{url:`${t}`,method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:u["a"].forum};this.$store.commit("SET_LOADING_STATUS",!0);let r=await a["a"].post(`${this.discuz.HOST}/api/html2Json`,n),o=r.data.data;this.$store.commit("SET_LOADING_STATUS",!1),e=o,sessionStorage.setItem(t,JSON.stringify(e))}this.forumList=e.forumList,this.pageInfo=e.pageInfo,document.title=e.documentTitle},onScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.scrollMap.set(this.url,document.querySelector(".overflow-container").scrollTop)},500)}}},p=f,h=(n("ca92"),n("2877")),d=Object(h["a"])(p,r,o,!1,null,"89046a40",null);d.options.__file="forum.vue";e["default"]=d.exports},"84f2":function(t,e){t.exports={}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},aa9a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveReadProgress}},[t._v("保存")])]),t.readProgress?n("li",[n("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},o=[],i=(n("28a5"),n("a481"),{props:["url"],data(){return{collections:[],isOpened:!1}},mounted(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{tid(){return this.url.includes("redirect.php?goto")?this.url.replace(/^redirect.*ptid=/g,""):this.url.split("-")[1]},readProgress(){return this.collections.filter(t=>{return t.tid==this.tid})[0]}},methods:{toggleclass(){this.isOpened=!this.isOpened},saveReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid}),e={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};t>=0?this.collections.splice(t,1,e):this.collections.push(e),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress(){let t=this.collections.findIndex(t=>{return t.tid==this.tid});this.collections.splice(t,1),localStorage.setItem("collections",JSON.stringify(this.collections))}}}),s=i,a=(n("645c"),n("2877")),l=Object(a["a"])(s,r,o,!1,null,"1544ec9e",null);l.options.__file="index.vue";e["a"]=l.exports},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),s=n("7726"),a=n("32e9"),l=n("84f2"),c=n("2b4c"),u=c("iterator"),f=c("toStringTag"),p=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),m=0;m<d.length;m++){var g,b=d[m],v=h[b],$=s[b],y=$&&$.prototype;if(y&&(y[u]||a(y,u,p),y[f]||a(y,f,b),l[b]=p,v))for(g in r)y[g]||i(y,g,r[g],!0)}},b741:function(t,e,n){"use strict";var r=n("05d9"),o=n.n(r);o.a},ca92:function(t,e,n){"use strict";var r=n("f9c6"),o=n.n(r);o.a},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),s=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},d226:function(t,e,n){},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},dc16:function(t,e,n){"use strict";e["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}},f9c6:function(t,e,n){},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}}]);
//# sourceMappingURL=DiscuzForumView.565dc0af.js.map