(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscuzThreadView"],{"05d9":function(t,e,n){},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[t.prevUrl?n("a",{staticClass:"btn prev-btn",on:{click:function(e){t.gotoPage(t.prevUrl)}}},[t._v("上一页")]):t._e(),n("a",{staticClass:"btn currPageInfo"},[t._v(t._s(t.currPageNum+"/"+t.totalPageNum))]),t.nextUrl?n("a",{staticClass:"btn next-btn",on:{click:function(e){t.gotoPage(t.nextUrl)}}},[t._v("下一页")]):t._e()])},s=[],a=n("be94"),i=n("2f62"),o={props:["prevUrl","nextUrl","currPageNum","totalPageNum"],computed:Object(a["a"])({},Object(i["c"])(["targetHost"])),methods:{gotoPage:function(t){this.$router.push(encodeURIComponent("".concat(this.targetHost).concat(t)))}}},c=o,l=(n("b741"),n("2877")),u=Object(l["a"])(c,r,s,!1,null,"f82b4964",null);u.options.__file="index.vue";e["a"]=u.exports},"4cc1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discuzThread-page"},[n("Menus",{attrs:{url:t.url}}),n("div",{staticClass:"overflow-container"},[n("ul",{staticClass:"thread"},t._l(t.postList,function(e,r){return n("li",{key:r,staticClass:"post"},[n("div",{staticClass:"post-info"},[n("span",[t._v(t._s(e.postFloor))]),n("span",[t._v(t._s(e.authorName))]),n("span",[t._v(t._s(e.authorLevel))]),n("div",{staticClass:"post-time"},[t._v(t._s(e.postTime))])]),n("h2",[t._v(t._s(e.postTitle))]),n("div",{staticClass:"post-content",domProps:{innerHTML:t._s(e.content)}})])}),0),t.isLoading?t._e():n("Pagination",{attrs:{currPageNum:t.pageInfo.currPageNum,totalPageNum:t.pageInfo.totalPageNum,prevUrl:t.prevUrl,nextUrl:t.pageInfo.nextUrl}})],1)],1)},s=[],a=(n("ac6a"),n("96cf"),n("1da1")),i=(n("a481"),n("be94")),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),c=n("adb5"),l=n("333d"),u=n("aa9a"),h=n("dc16"),p={props:["url"],components:{Pagination:l["a"],Menus:u["a"]},data:function(){return{postList:[],pageInfo:{currPageNum:1,totalPageNum:1,nextPageNum:null,nextUrl:null}}},computed:Object(i["a"])({},Object(o["d"])(["isLoading","discuz"]),Object(o["c"])(["targetHost"]),{prevUrl:function(){var t="";return this.pageInfo&&1!=this.pageInfo.currPageNum&&this.url&&(t=this.url.replace(/.*bbs\//g,"").replace(/(\d*)\.html/,"".concat(this.pageInfo.currPageNum-1,".html"))),t}}),mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getThreadPageJson(this.url);case 2:this.$route.query.scrollTop&&this.$nextTick(function(){document.querySelector(".overflow-container").scrollTop=e.$route.query.scrollTop});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeMount:function(){},destroyed:function(){},beforeRouteUpdate:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r(),t.next=3,this.getThreadPageJson(e.params.url);case 3:document.querySelector(".overflow-container").scrollTop=0;case 4:case"end":return t.stop()}},t,this)}));function e(e,n,r){return t.apply(this,arguments)}return e}(),methods:{getThreadPageJson:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,r,s,a,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n={},!sessionStorage.getItem(e)){t.next=5;break}n=JSON.parse(sessionStorage.getItem(e)),t.next=14;break;case 5:return r={httpConfig:{url:"".concat(e),method:"get",responseType:"arraybuffer"},encoding:"gbk",selector:h["a"].thread},this.$store.commit("SET_LOADING_STATUS",!0),t.next=9,c["a"].post("".concat(this.discuz.HOST,"/api/html2Json"),r);case 9:s=t.sent,a=s.data.data,this.$store.commit("SET_LOADING_STATUS",!1),n=a,sessionStorage.setItem(e,JSON.stringify(n));case 14:document.title=n.documentTitle,n.pageInfo&&(this.pageInfo=n.pageInfo),this.postList=n.postList,this.postList.forEach(function(t){t.content=t.content.replace(/="attachment/g,'="'.concat(i.targetHost,"attachment")).replace(/:14pt/g,":5vw")});case 18:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},d=p,f=(n("602e"),n("2877")),m=Object(f["a"])(d,r,s,!1,null,null,null);m.options.__file="thread.vue";e["default"]=m.exports},"51a2":function(t,e,n){},"602e":function(t,e,n){"use strict";var r=n("51a2"),s=n.n(r);s.a},"645c":function(t,e,n){"use strict";var r=n("d226"),s=n.n(r);s.a},aa9a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.isOpened&&"opened"},[n("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("symbol",{attrs:{id:"icon-close",viewBox:"0 0 32 32"}},[n("title",[t._v("close")]),n("path",{attrs:{d:"M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"}})])])]),n("a",{staticClass:"btn-menu",on:{click:t.toggleclass}},[n("svg",[n("use",{attrs:{"xlink:href":"#icon-close"}})])]),n("li",[n("span",{on:{click:t.saveReadProgress}},[t._v("保存")])]),t.readProgress?n("li",[n("span",{on:{click:t.deleteReadProgress}},[t._v("删除")])]):t._e()])},s=[],a=(n("20d6"),n("28a5"),n("a481"),n("6762"),n("2fdb"),{props:["url"],data:function(){return{collections:[],isOpened:!1}},mounted:function(){this.collections=JSON.parse(localStorage.getItem("collections"))||[]},computed:{tid:function(){return this.url.includes("redirect.php?goto")?this.url.replace(/^redirect.*ptid=/g,""):this.url.split("-")[1]},readProgress:function(){var t=this;return this.collections.filter(function(e){return e.tid==t.tid})[0]}},methods:{toggleclass:function(){this.isOpened=!this.isOpened},saveReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid}),n={href:this.url,tid:this.tid,title:document.title,scrollTop:document.querySelector(".overflow-container").scrollTop};e>=0?this.collections.splice(e,1,n):this.collections.push(n),localStorage.setItem("collections",JSON.stringify(this.collections))},deleteReadProgress:function(){var t=this,e=this.collections.findIndex(function(e){return e.tid==t.tid});this.collections.splice(e,1),localStorage.setItem("collections",JSON.stringify(this.collections))}}}),i=a,o=(n("645c"),n("2877")),c=Object(o["a"])(i,r,s,!1,null,"1544ec9e",null);c.options.__file="index.vue";e["a"]=c.exports},ac6a:function(t,e,n){for(var r=n("cadf"),s=n("0d58"),a=n("2aba"),i=n("7726"),o=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),h=l("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(d),m=0;m<f.length;m++){var g,v=f[m],b=d[v],$=i[v],P=$&&$.prototype;if(P&&(P[u]||o(P,u,p),P[h]||o(P,h,v),c[v]=p,b))for(g in r)P[g]||a(P,g,r[g],!0)}},b741:function(t,e,n){"use strict";var r=n("05d9"),s=n.n(r);s.a},d226:function(t,e,n){},dc16:function(t,e,n){"use strict";e["a"]={webSiteList:"\n    li@webSiteList{\n        &{$}\n    };\n    ",index:"\n    .mainbox.forumlist@areaList{\n        h3 a{$name};\n        tbody:has(.lastpost a)@value{\n            h2 a[href=$value]{$name}\n        }\n    };\n    #creditlist_menu>li@creditList{\n        &{$}\n    };\n    #creditlist{$username}\n    ",forum:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    head title{$documentTitle};\n    table:has(thead.separation)@forumList{\n        thead.separation td b{$name};\n        tbody:has(th)@value{\n            th span[id^=thread_] a[href=$href]{$title};\n            .nums{$nums};\n            td.icon img[alt=$type];\n            span.bold{$permission|Number}\n            .author cite{html($thanks|replace(/<a(.*)absmiddle\">/g,'')|Number)}\n        }\n    };\n    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",thread:"\n    filter MathCeil() {\n        return Math.ceil(this/10)\n    };\n    form input[name=formhash][value=$formhash];\n    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];\n    head title{$documentTitle};\n    form .mainbox.viewthread@postList{\n        .postauthor cite a[id^=userinfo]{$authorName};\n        .postauthor p:nth-of-type(1){$authorLevel};\n        // .postauthor .profile{$authorProfile}\n        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}\n        .postcontent .postinfo{find('小',$postTime, '只看该作者')}\n        .postcontent .postmessage>h2{html($postTitle)}\n        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=\"\"/g,\"\"))}\n    };\n    form+.pages_btns .pages@pageInfo|pack{\n        $currPageNum = 1;\n        $totalPageNum = 1;\n        $nextPageNum = null;\n        $nextUrl = null;\n        strong{$currPageNum|Number};\n        strong+a[href=$nextUrl]{$nextPageNum|Number};\n        em{$totalPageNum|Number|MathCeil};\n    }\n    ",my:"\n    .credits_info ul>li@creditList{\n        &{$|trim()}\n    };\n    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];\n    #menu li cite a{$username};\n    .mainbox table:nth-of-type(1) tbody tr@recentTopics{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];\n        td:nth-child(2){$forum}\n        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}\n        td:nth-child(4){$status}\n    };\n    .mainbox table:nth-of-type(2) tbody tr@recentReply{\n        td:nth-child(1) a[href=$href]{$title}\n        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];\n        td:nth-child(2){$forum}\n        td:nth-child(3){$lastPost}\n        td:nth-child(4){$status}\n    }\n    "}}}]);
//# sourceMappingURL=DiscuzThreadView-legacy.1b0c8c75.js.map