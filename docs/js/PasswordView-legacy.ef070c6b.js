(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PasswordView"],{"030f":function(t,e,i){"use strict";i("96cf");var a=i("1da1"),n=(i("6b54"),i("f751"),i("d4ec")),r=i("bee2"),s=i("ade3"),o=i("67ea"),u=i("4260"),c=function(){function t(e){Object(n["a"])(this,t),Object(s["a"])(this,"id",void 0),Object(s["a"])(this,"title",void 0),Object(s["a"])(this,"keys",void 0),Object(s["a"])(this,"remark",void 0),Object(s["a"])(this,"status",void 0),Object.assign(this,e)}return Object(r["a"])(t,[{key:"save",value:function(){this.id?o["a"].website.put(this):(this.id=Object(u["a"])()+"_"+Object(u["d"])(Date.now().toString()),o["a"].website.add(this))}}],[{key:"getAll",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].website.toArray();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getById",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].website.where({id:e}).first();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=c},3180:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"password-info-page"},[i("div",{staticClass:"overflow-container"},[i("header",[i("span",{staticClass:"icon-back",on:{click:function(e){t.$router.go(-1)}}}),t._v("\n            "+t._s(t.title)+"\n        ")]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("网站")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.title,expression:"info.title"}],attrs:{type:"text"},domProps:{value:t.info.title},on:{input:function(e){e.target.composing||t.$set(t.info,"title",e.target.value)}}})]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("密码")]),i("ul",t._l(t.info.keys,function(e,a){return i("li",{key:a},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"key.remark"}],attrs:{type:"text",placeholder:"备注"},domProps:{value:e.remark},on:{input:function(i){i.target.composing||t.$set(e,"remark",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key.key"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.key},on:{input:function(i){i.target.composing||t.$set(e,"key",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"key.value"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:e.value},on:{input:function(i){i.target.composing||t.$set(e,"value",i.target.value)}}})])}),0),i("button",{staticClass:"plus",on:{click:t.addKeys}},[t._v("新增")])]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("备注")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.remark,expression:"info.remark"}],attrs:{type:"text"},domProps:{value:t.info.remark},on:{input:function(e){e.target.composing||t.$set(t.info,"remark",e.target.value)}}})]),i("footer",[i("ul",[i("li",[i("button",{on:{click:t.cancel}},[t._v("取消")])]),i("li",[i("button",{on:{click:t.save}},[t._v("保存")])])])])])])},n=[],r=(i("ac6a"),i("96cf"),i("1da1")),s=i("030f"),o={props:["type","id"],data:function(){return{title:"add"==this.type?"新增":"编辑",info:{keys:[],status:1,title:"",remark:""}}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("add"==this.type){t.next=4;break}return t.next=3,s["a"].getById(this.id);case 3:this.info=t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{addKeys:function(){this.info.keys.push({key:"",value:"",remark:""})},cancel:function(){this.$router.go(-1)},save:function(){this.info.title?(new s["a"](this.info).save(),this.$router.go(-1)):this.$Toast.info("网站名不能为空!")}}},u=o,c=(i("7ab4"),i("2877")),l=Object(c["a"])(u,a,n,!1,null,"0f005888",null);l.options.__file="index.vue";e["default"]=l.exports},"48f1":function(t,e,i){},"7ab4":function(t,e,i){"use strict";var a=i("48f1"),n=i.n(a);n.a},ac6a:function(t,e,i){for(var a=i("cadf"),n=i("0d58"),r=i("2aba"),s=i("7726"),o=i("32e9"),u=i("84f2"),c=i("2b4c"),l=c("iterator"),d=c("toStringTag"),f=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=n(p),m=0;m<v.length;m++){var h,k=v[m],g=p[k],y=s[k],b=y&&y.prototype;if(b&&(b[l]||o(b,l,f),b[d]||o(b,d,k),u[k]=f,g))for(h in a)b[h]||r(b,h,a[h],!0)}}}]);
//# sourceMappingURL=PasswordView-legacy.ef070c6b.js.map