(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SignView"],{"1a09":function(t,e,a){"use strict";var n=a("3505"),i=a.n(n);i.a},"2fdb":function(t,e,a){"use strict";var n=a("5ca1"),i=a("d2c8"),r="includes";n(n.P+n.F*a("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"324b":function(t,e,a){"use strict";var n=a("56d6"),i=a.n(n);i.a},3401:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-page"},[a("div",{staticClass:"overflow-container"},[a("Calendar",{attrs:{mapData:t.mapData},on:{cellClick:t.selectDate,prevClick:t.changedMonth,nextClick:t.changedMonth}}),t.today.year==t.selectedDate.year&&t.today.month==t.selectedDate.month&&t.today.day==t.selectedDate.day?a("div",{staticClass:"sign"},[a("a",{staticClass:"btn",on:{click:t.signIn}},[t._v("打卡签到")])]):t._e(),a("table",{directives:[{name:"show",rawName:"v-show",value:t.selectedDateRecords.length,expression:"selectedDateRecords.length"}]},[t._m(0),t._l(t.selectedDateRecords,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(new Date(e.timestamp).Format("yyyy-MM-dd hh:mm:ss")))])])})],2)],1),a("TabBar")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("ID")]),a("th",[t._v("时间")])])}],r=(a("96cf"),a("1da1")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendar-wrap"},[a("div",{staticClass:"calendar-header"},[a("span",{staticClass:"left",on:{click:t.prevClick}},[t._v("上一月")]),a("div",{staticClass:"title"},[t._v(t._s(t.headerText))]),a("span",{staticClass:"right",on:{click:t.nextClick}},[t._v("下一月")])]),a("div",{staticClass:"calendar-body"},[t._m(0),t._l(t.weeks,function(e,n){return a("div",{key:n,staticClass:"row"},t._l(e,function(e,n){return a("div",{key:n,class:t.getDayClass(e),on:{click:function(a){t.cellClick(e)}}},[a("span",[t._v(t._s(e.day))])])}))})],2)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row-header"},[a("div",{staticClass:"cell0"},[t._v("日")]),a("div",{staticClass:"cell1"},[t._v("一")]),a("div",{staticClass:"cell2"},[t._v("二")]),a("div",{staticClass:"cell3"},[t._v("三")]),a("div",{staticClass:"cell4"},[t._v("四")]),a("div",{staticClass:"cell5"},[t._v("五")]),a("div",{staticClass:"cell6"},[t._v("六")])])}],o=(a("ac6a"),a("c5f6"),a("4260")),l={name:"Calendar",props:{defaultDate:{type:Number,default:Date.now()},headerFmt:{type:String,default:"yyyy年M月"},mapData:{type:Array,default:function(){return[]}}},data:function(){var t=null,e=this.$props.defaultDate;return t="string"===typeof e||"number"===typeof e?new Date(e):e,{activeItem:{},year:t.getFullYear(),month:t.getMonth()+1}},computed:{headerText:function(){var t=this.$data,e=t.year,a=t.month;return new Date(e,a-1,1).Format(this.$props.headerFmt)},totalDays:function(){var t=this.$props.mapData,e=this.$data,a=e.year,n=e.month,i=Date.now();return Object(o["e"])(a,n).map(function(e){var r=new Date(a,n-1,e),s={year:a,month:n,timestamp:r.getTime(),day:e,dayOfWeek:r.getDay()};if(i-r>0&&i-r<864e5&&(s.isToday=!0),t&&t.length&&t[0].year==a&&t[0].month==n)for(var c=0;c<t.length;c++)if(t[c].day==e){s.data=t[c].data,t.splice(c,1);break}return s})},weeks:function(){var t=this.totalDays,e=[];if(t){var a=-1;t.forEach(function(t,e){6==t.dayOfWeek&&-1==a&&(a=e)}),e.push(t.splice(0,a+1));for(var n=t.length,i=0;i<n;i+=7)e.push(t.slice(i,i+7))}return e}},mounted:function(){this.$data.activeItem.date||(this.$data.activeItem=this.totalDays.filter(function(t){return t.isToday})[0],this.$emit("cellClick",this.$data.activeItem))},methods:{prevClick:function(){var t=this.$data.year,e=this.$data.month;1==e?(t-=1,e=12):e--,this.$data.year=t,this.$data.month=e,this.$emit("prevClick",{year:t,month:e})},nextClick:function(){var t=this.$data.year,e=this.$data.month;12==e?(t+=1,e=1):e++,this.$data.year=t,this.$data.month=e,this.$emit("nextClick",{year:t,month:e})},cellClick:function(t){this.$data.activeItem.timestamp!=t.timestamp&&(this.$data.activeItem=t,this.$emit("cellClick",t))},getDayClass:function(t){var e={};return t.timestamp==this.$data.activeItem.timestamp&&(e.active=!0),t.data&&(e["has-data"]=!0),e["cell"+t.dayOfWeek]=!0,e}}},u=l,d=(a("af08"),a("2877")),h=Object(d["a"])(u,s,c,!1,null,"294bc3c2",null);h.options.__file="index.vue";var m=h.exports,v=a("4bdd"),f=(a("6b54"),a("d4ec")),p=a("bee2"),y=a("ade3"),g=a("67ea"),C=function(){function t(e){Object(f["a"])(this,t),Object(y["a"])(this,"id",void 0),Object(y["a"])(this,"timestamp",void 0),Object(y["a"])(this,"year",void 0),Object(y["a"])(this,"month",void 0),Object(y["a"])(this,"day",void 0),Object(y["a"])(this,"hour",void 0),Object(y["a"])(this,"minute",void 0),Object(y["a"])(this,"second",void 0),this.timestamp=e.timestamp;var a=new Date(this.timestamp);this.year=a.getFullYear(),this.month=a.getMonth()+1,this.day=a.getDate(),this.hour=a.getHours(),this.minute=a.getMinutes(),this.second=a.getSeconds()}return Object(p["a"])(t,[{key:"save",value:function(){this.id=Object(o["a"])()+"_"+Object(o["d"])(Date.now().toString()),g["a"].signRecords.add(this)}}],[{key:"getRecordsByTimestamp",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,g["a"].signRecords.where("timestamp").above(e).sortBy("timestamp");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getRecordsByYMD",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].signRecords.where({year:e.year,month:e.month,day:e.day}).sortBy("timestamp");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getRecordsByYM",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].signRecords.where({year:e.year,month:e.month}).sortBy("timestamp");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),w=C,b={name:"sign-page",components:{TabBar:v["a"],Calendar:m},data:function(){var t=Object(o["f"])();return{today:t,selectedDate:t,currMonthRecords:[]}},computed:{mapData:function(){return this.currMonthRecords.map(function(t){return{day:t.day,month:t.month,year:t.year,data:t}})},selectedDateRecords:function(){var t=this;return this.currMonthRecords.filter(function(e){return e.year==t.selectedDate.year&&e.month==t.selectedDate.month&&e.day==t.selectedDate.day})}},mounted:function(){this.changedMonth(this.today)},beforeMount:function(){},destroyed:function(){},methods:{changedMonth:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getHighlightedDates(e);case 2:this.currMonthRecords=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getHighlightedDates:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.getRecordsByYM(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),signIn:function(){new w({timestamp:Date.now()}).save(),this.changedMonth(this.today)},selectDate:function(t){this.selectedDate=t}}},k=b,_=(a("324b"),Object(d["a"])(k,n,i,!1,null,null,null));_.options.__file="index.vue";e["default"]=_.exports},3505:function(t,e,a){},"4bdd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"tabBar"},[a("svg",{staticStyle:{position:"absolute",width:"0",height:"0"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("symbol",{attrs:{id:"icon-music",viewBox:"0 0 1024 1024"}},[a("title",[t._v("music")]),a("path",{attrs:{d:"M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512c0 282.763636 229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM46.545455 512C46.545455 254.929455 254.929455 46.545455 512 46.545455c257.070545 0 465.454545 208.384 465.454545 465.454545s-208.384 465.454545-465.454545 465.454545C254.929455 977.454545 46.545455 769.070545 46.545455 512z"}}),a("path",{attrs:{d:"M536.110545 696.645818c0.977455-3.863273 1.442909-10.984727 1.442909-21.410909L537.553455 656.756364l-0.372364-321.024c17.408 11.589818 40.866909 22.248727 70.376727 31.930182 28.997818 9.914182 43.52 22.714182 43.52 38.446545 0 10.146909-5.678545 22.388364-17.035636 36.631273l9.076364 14.894545c29.975273-29.277091 44.962909-54.784 44.962909-76.520727 0-33.373091-31.790545-59.624727-95.418182-78.708364-18.618182-5.818182-31.278545-11.589818-37.888-17.408-6.656-5.818182-12.753455-16.197818-18.338909-31.185455l-22.109091 1.070545 0 406.993455c-24.901818-21.504-50.641455-32.302545-77.265455-32.302545-29.509818 0-54.830545 5.818182-76.008727 17.408-21.178182 11.589818-31.744 25.646545-31.744 42.077091 0 39.191273 33.745455 58.786909 101.189818 58.786909 29.742545 0 53.853091-4.887273 72.378182-14.708364C521.448727 723.316364 532.48 711.168 536.110545 696.645818z"}})]),a("symbol",{attrs:{id:"icon-discuz",viewBox:"0 0 1136 1024"}},[a("title",[t._v("discuz")]),a("path",{attrs:{d:"M1079.168215 0 511.184944 0c-31.23908 0-56.798327 25.559247-56.798327 56.798327l0 113.596654L113.596654 170.394981c-62.47816 0-113.596654 51.118494-113.596654 113.596654l0 454.386617c0 62.47816 51.118494 113.596654 113.596654 113.596654l59.638243 0c17.039498 0 25.559247 11.359665 22.719331 28.399164l-14.199582 76.677742c-11.359665 62.47816 22.719331 85.197491 76.677742 51.118494l207.313894-124.95632c28.399164-17.039498 73.837825-28.399164 105.076905-28.399164l227.193308 0c62.47816 0 113.596654-51.118494 113.596654-113.596654l0-193.114312 0 0 19.879414 14.199582C979.771143 596.382435 1022.369888 573.663104 1022.369888 511.184944l0 28.399164c0-14.199582 11.359665-28.399164 28.399164-28.399164l28.399164 0c31.23908 0 56.798327-25.559247 56.798327-56.798327L1135.966542 56.798327C1135.966542 25.559247 1110.407295 0 1079.168215 0zM851.974907 738.378252c0 31.23908-25.559247 56.798327-56.798327 56.798327l-241.39289 0c-31.23908 0-79.517658 14.199582-105.076905 31.23908l-184.594563 116.436571c-14.199582 8.519749-22.719331 2.839916-17.039498-11.359665L264.112221 851.974907c5.679833-31.23908-14.199582-56.798327-45.438662-56.798327L113.596654 795.17658c-31.23908 0-56.798327-25.559247-56.798327-56.798327L56.798327 283.991636c0-31.23908 25.559247-56.798327 56.798327-56.798327l681.579925 0c31.23908 0 56.798327 25.559247 56.798327 56.798327L851.974907 738.378252zM1079.168215 425.987453c0 17.039498-11.359665 28.399164-28.399164 28.399164l-28.399164 0c-31.23908 0-56.798327 25.559247-56.798327 56.798327l0-17.039498c0 17.039498-11.359665 22.719331-22.719331 14.199582L908.773234 485.625697l0 0L908.773234 283.991636c0-62.47816-51.118494-113.596654-113.596654-113.596654L511.184944 170.394981 511.184944 85.197491c0-14.199582 14.199582-28.399164 28.399164-28.399164l511.184944 0c14.199582 0 28.399164 14.199582 28.399164 28.399164L1079.168215 425.987453z","p-id":"2192"}}),a("path",{attrs:{d:"M539.584108 567.983271 198.794145 567.983271c-17.039498 0-28.399164 11.359665-28.399164 28.399164 0 17.039498 14.199582 28.399164 28.399164 28.399164l340.789963 0c17.039498 0 28.399164-11.359665 28.399164-28.399164C567.983271 579.342937 553.783689 567.983271 539.584108 567.983271z","p-id":"2193"}}),a("path",{attrs:{d:"M709.979089 397.58829 198.794145 397.58829c-14.199582 0-28.399164 11.359665-28.399164 28.399164 0 17.039498 11.359665 28.399164 28.399164 28.399164l511.184944 0c14.199582 0 28.399164-11.359665 28.399164-28.399164C738.378252 408.947955 727.018587 397.58829 709.979089 397.58829z","p-id":"2194"}})]),a("symbol",{attrs:{id:"icon-sign",viewBox:"0 0 1024 1024"}},[a("title",[t._v("sign")]),a("path",{attrs:{d:"M512 64c-192 0-339.2 153.6-345.6 345.6 0 140.8 192 403.2 288 524.8 25.6 32 76.8 32 102.4 6.4l6.4-6.4c96-128 288-384 288-524.8C851.2 217.6 704 64 512 64z m0 569.6c-121.6 0-224-102.4-224-224s102.4-224 224-224 224 102.4 224 224-102.4 224-224 224zM544 288h-64v192h192v-64H544V288z","p-id":"6167"}})]),a("symbol",{attrs:{id:"icon-password",viewBox:"0 0 1024 1024"}},[a("title",[t._v("password")]),a("path",{attrs:{d:"M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z","p-id":"7082"}})]),a("symbol",{attrs:{id:"icon-my",viewBox:"0 0 1024 1024"}},[a("title",[t._v("my")]),a("path",{attrs:{d:"M513.962667 0c-282.766222 0-512 229.233778-512 512s229.233778 512 512 512 512-229.233778 512-512-229.219556-512-512-512zM220.828444 871.608889c8.163556-154.823111 136.32-278.371556 293.148445-278.371556 156.814222 0 284.970667 123.548444 293.134222 278.385778-79.985778 65.322667-182.044444 104.590222-293.134222 104.590222-111.089778-0.014222-213.162667-39.281778-293.148445-104.604444zM386.844444 408.618667c0-70.101333 57.031111-127.118222 127.118223-127.118223s127.118222 57.031111 127.118222 127.118223-57.031111 127.118222-127.118222 127.118222S386.844444 478.72 386.844444 408.618667z m464.113778 422.129777c-21.959111-131.569778-119.310222-237.880889-246.016-272.924444 50.275556-30.72 83.953778-85.959111 83.953778-149.191111 0-96.611556-78.321778-174.919111-174.919111-174.919111-96.611556 0-174.919111 78.321778-174.919111 174.919111 0 63.232 33.678222 118.471111 83.953778 149.205333-126.705778 35.043556-224.056889 141.354667-246.016 272.924445C98.218667 747.52 49.763556 635.349333 49.763556 512c0-255.957333 208.241778-464.199111 464.199111-464.199111 255.957333 0 464.199111 208.241778 464.199111 464.199111 0 123.349333-48.455111 235.534222-127.203556 318.748444z","p-id":"6847"}})])])]),t._l(t.tabList,function(e,n){return a("li",{key:n,staticClass:"item",class:{isActive:e.isActive}},[a("router-link",{attrs:{to:e.linkTo}},[a("svg",[a("use",{attrs:{"xlink:href":e.icon}})]),a("p",[t._v(t._s(e.title))])])],1)})],2)},i=[],r=(a("6762"),a("2fdb"),{name:"tabBar",data:function(){return{defaultList:[{title:"短视频",linkTo:"/video",icon:"#icon-music"},{title:"密码",linkTo:"/password",icon:"#icon-password"},{title:"论坛",linkTo:"/discuz",icon:"#icon-discuz"},{title:"签到",linkTo:"/sign",icon:"#icon-sign"},{title:"我的",linkTo:"/my",icon:"#icon-my"}]}},mounted:function(){},computed:{tabList:function(){var t=this.$route.fullPath;return this.defaultList.map(function(e){return e.isActive=t.includes(e.linkTo),e})}},methods:{}}),s=r,c=(a("1a09"),a("2877")),o=Object(c["a"])(s,n,i,!1,null,null,null);o.options.__file="index.vue";e["a"]=o.exports},5147:function(t,e,a){var n=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(i){}}return!0}},"56d6":function(t,e,a){},6762:function(t,e,a){"use strict";var n=a("5ca1"),i=a("c366")(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},a272:function(t,e,a){},ac6a:function(t,e,a){for(var n=a("cadf"),i=a("0d58"),r=a("2aba"),s=a("7726"),c=a("32e9"),o=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),h=o.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(m),f=0;f<v.length;f++){var p,y=v[f],g=m[y],C=s[y],w=C&&C.prototype;if(w&&(w[u]||c(w,u,h),w[d]||c(w,d,y),o[y]=h,g))for(p in n)w[p]||r(w,p,n[p],!0)}},af08:function(t,e,a){"use strict";var n=a("a272"),i=a.n(n);i.a},d2c8:function(t,e,a){var n=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}}}]);
//# sourceMappingURL=SignView.4e254867.js.map