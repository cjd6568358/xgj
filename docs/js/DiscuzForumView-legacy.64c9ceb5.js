(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzForumView"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"05d9":function(t,e,n){},"0a49":function(t,e,n){var r=n("9b43"),i=n("626a"),o=n("4bf8"),a=n("9def"),s=n("cd1c");t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f,d=e||s;return function(e,s,p){for(var m,g,v=o(e),b=i(v),_=r(s,p,3),$=a(b.length),x=0,y=n?d(e,$):c?d(e,0):void 0;$>x;x++)if((h||x in b)&&(m=b[x],g=_(m,x,v),t))if(n)y[x]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:y.push(m)}else if(l)return!1;return f?-1:u||l?l:y}}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"20d6":function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(6),o="findIndex",a=!0;o in[]&&Array(1)[o](function(){a=!1}),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},i=[],o=n("be94"),a=n("2f62"),s={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(o["a"])({},Object(a["c"])(["targetHost"])),methods:{gotoPage:function(t){this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},c=s,u=(n("b741"),n("2877")),l=Object(u["a"])(c,r,i,!1,null,"f82b4964",null);l.options.__file="index.vue";e["a"]=l.exports},4367:function(t,e,n){},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"645c":function(t,e,n){"use strict";var r=n("d226"),i=n.n(r);i.a},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),a=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[r].i},h=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return u&&p.NEED&&c(t)&&!o(t,r)&&l(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:h,onFreeze:d}},"820c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzForum-page"},[n("Menus",{attrs:{url:t.url}}),n("div",{staticClass:"overflow-container",on:{touchmove:t.onScroll}},[t._l(t.forumList,function(e,r){return n("ul",{key:r,staticClass:"area",attrs:{"data-title":e.name}},[t._l(e.value,function(e,r){return["投票"!=e.type?n("router-link",{key:r,attrs:{to:{name:"DiscuzThreadView",params:{url:t.targetHost+e.href}},tag:"li"}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),e.permission?[t._v("[阅读权限"+t._s(e.permission)+"]")]:t._e(),t._v("\n\t\t\t\t\t♥"+t._s(e.thanks)+" ("+t._s(e.nums)+")\n\t\t\t\t")],2):t._e()]})],2)}),t.isLoading?t._e():n("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],2)],1)},i=[],o=(n("96cf"),n("1da1")),a=(n("a481"),n("be94")),s=(n("ac6a"),n("5df3"),n("f400"),n("cadf"),n("551c"),n("097d"),n("2f62")),c=n("adb5"),u=n("333d"),l=n("aa9a"),f=n("dc16"),h={props:["url"],components:{Pagination:u["a"],Menus:l["a"]},data:function(){return{forumList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null},scrollMap:new Map}},computed:Object(a["a"])({},Object(s["d"])(["isLoading","discuz"]),Object(s["c"])(["targetHost"]),{prevUrl:function(){var t="";return 1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,"".concat(this.pageInfo.currPageNum-1,".html"))),t}}),mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeRouteUpdate:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,n,r){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r(),t.next=3,this.getForumPageJson(e.params.url);case 3:i=0,this.scrollMap.has(e.params.url)&&(i=this.scrollMap.get(e.params.url)),document.querySelector(".overflow-container").scrollTop=i;case 6:case"end":return t.stop()}},t,this)}));function e(e,n,r){return t.apply(this,arguments)}return e}(),activated:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getForumPageJson(this.url);case 2:e=0,this.scrollMap.has(this.url)&&(e=this.scrollMap.get(this.url)),document.querySelector(".overflow-container").scrollTop=e;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeMount:function(){},destroyed:function(){},methods:{getForumPageJson:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n={},!sessionStorage.getItem(e)){t.next=5;break}n=JSON.parse(sessionStorage.getItem(e)),t.next=14;break;case 5:return r={httpConfig:{url:"".concat(e),method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:f["a"].forum},this.$store.commit("SET_LOADING_STATUS",!0),t.next=9,c["a"].post("".concat(this.discuz.HOST,"/api/html2Json"),r);case 9:i=t.sent,o=i.data.data,this.$store.commit("SET_LOADING_STATUS",!1),n=o,sessionStorage.setItem(e,JSON.stringify(n));case 14:this.forumList=n.forumList,this.pageInfo=n.pageInfo,document.title=n.documentTitle;case 17:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onScroll:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.scrollMap.set(t.url,document.querySelector(".overflow-container").scrollTop)},500)}}},d=h,p=(n("ff8f"),n("2877")),m=Object(p["a"])(d,r,i,!1,null,"55cfac8c",null);m.options.__file="forum.vue";e["default"]=m.exports},aa9a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveReadProgress}},[t._v("保存")])]),t.readProgress?n("li",[n("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},i=[],o=(n("20d6"),n("28a5"),n("a481"),n("6762"),n("2fdb"),{props:["url"],data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{tid:function(){return this.url.includes("redirect.php?goto")?this.url.replace(/^redirect.*ptid=/g,""):this.url.split("-")[1]},readProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),n={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,n):this.collections.push(n),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))}}}),a=o,s=(n("645c"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"1544ec9e",null);c.options.__file="index.vue";e["a"]=c.exports},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),m=0;m<p.length;m++){var g,v=p[m],b=d[v],_=a[v],$=_&&_.prototype;if($&&($[l]||s($,l,h),$[f]||s($,f,v),c[v]=h,b))for(g in r)$[g]||o($,g,r[g],!0)}},b39a:function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},b741:function(t,e,n){"use strict";var r=n("05d9"),i=n.n(r);i.a},c26b:function(t,e,n){"use strict";var r=n("86cc").f,i=n("2aeb"),o=n("dcbc"),a=n("9b43"),s=n("f605"),c=n("4a59"),u=n("01f9"),l=n("d53b"),f=n("7a56"),h=n("9e1e"),d=n("67ab").fastKey,p=n("b39a"),m=h?"_s":"size",g=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t(function(t,r){s(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=r&&c(r,n,t[u],t)});return o(l.prototype,{clear:function(){for(var t=p(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=p(this,e),r=g(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[m]--}return!!r},forEach:function(t){p(this,e);var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){r(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!g(p(this,e),t)}}),h&&r(l.prototype,"size",{get:function(){return p(this,e)[m]}}),l},def:function(t,e,n){var r,i,o=g(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[m]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,e,n){u(t,e,function(t,n){this._t=p(t,e),this._k=n,this._l=void 0},function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?l(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,l(1))},n?"entries":"values",!n,!0),f(e)}}},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},d226:function(t,e,n){},dc16:function(t,e,n){"use strict";e["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}},e0b8:function(t,e,n){"use strict";var r=n("7726"),i=n("5ca1"),o=n("2aba"),a=n("dcbc"),s=n("67ab"),c=n("4a59"),u=n("f605"),l=n("d3f4"),f=n("79e5"),h=n("5cc5"),d=n("7f20"),p=n("5dbc");t.exports=function(t,e,n,m,g,v){var b=r[t],_=b,$=g?"set":"add",x=_&&_.prototype,y={},w=function(t){var e=x[t];o(x,t,"delete"==t?function(t){return!(v&&!l(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof _&&(v||x.forEach&&!f(function(){(new _).entries().next()}))){var S=new _,P=S[$](v?{}:-0,1)!=S,N=f(function(){S.has(1)}),L=h(function(t){new _(t)}),k=!v&&f(function(){var t=new _,e=5;while(e--)t[$](e,e);return!t.has(-0)});L||(_=e(function(e,n){u(e,_,t);var r=p(new b,e,_);return void 0!=n&&c(n,g,r[$],r),r}),_.prototype=x,x.constructor=_),(N||k)&&(w("delete"),w("has"),g&&w("get")),(k||P)&&w($),v&&x.clear&&delete x.clear}else _=m.getConstructor(e,t,g,$),a(_.prototype,n),s.NEED=!0;return d(_,t),y[t]=_,i(i.G+i.W+i.F*(_!=b),y),v||m.setStrong(_,t,g),_}},e853:function(t,e,n){var r=n("d3f4"),i=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},f400:function(t,e,n){"use strict";var r=n("c26b"),i=n("b39a"),o="Map";t.exports=n("e0b8")(o,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(i(this,o),t);return e&&e.v},set:function(t,e){return r.def(i(this,o),0===t?0:t,e)}},r,!0)},ff8f:function(t,e,n){"use strict";var r=n("4367"),i=n.n(r);i.a}}]);
//# sourceMappingURL=DiscuzForumView-legacy.64c9ceb5.js.map