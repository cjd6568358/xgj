(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PasswordView"],{"030f":function(t,e,i){"use strict";i("96cf");var n=i("3b8d"),a=(i("6b54"),i("d225")),r=i("b0b4"),s=i("bd86"),o=i("67ea"),u=i("4260"),c=function(){function t(e){Object(a["a"])(this,t),Object(s["a"])(this,"id",void 0),Object(s["a"])(this,"title",void 0),Object(s["a"])(this,"keys",void 0),Object(s["a"])(this,"remark",void 0),Object(s["a"])(this,"status",void 0),Object.assign(this,e)}return Object(r["a"])(t,[{key:"save",value:function(){this.id?o["a"].website.put(this):(this.id=Object(u["a"])()+"_"+Object(u["f"])(Date.now().toString()),o["a"].website.add(this))}}],[{key:"getAll",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].website.toArray();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getById",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].website.where({id:e}).first();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=c},"2f8c":function(t,e,i){},3180:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"password-info-page"},[i("div",{staticClass:"overflow-container"},[i("header",[i("span",{staticClass:"icon-back",on:{click:function(e){return t.$router.go(-1)}}}),t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("网站")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.title,expression:"info.title"}],attrs:{type:"text"},domProps:{value:t.info.title},on:{input:function(e){e.target.composing||t.$set(t.info,"title",e.target.value)}}})]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("密码")]),i("ul",t._l(t.info.keys,function(e,n){return i("li",{key:n},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"key.remark"}],attrs:{type:"text",placeholder:"备注"},domProps:{value:e.remark},on:{input:function(i){i.target.composing||t.$set(e,"remark",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key.key"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.key},on:{input:function(i){i.target.composing||t.$set(e,"key",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"key.value"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:e.value},on:{input:function(i){i.target.composing||t.$set(e,"value",i.target.value)}}})])}),0),i("button",{staticClass:"plus",on:{click:t.addKeys}},[t._v("新增")])]),i("div",{staticClass:"name"},[i("div",{staticClass:"title"},[t._v("备注")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.remark,expression:"info.remark"}],attrs:{type:"text"},domProps:{value:t.info.remark},on:{input:function(e){e.target.composing||t.$set(t.info,"remark",e.target.value)}}})]),i("footer",[i("ul",[i("li",[i("button",{on:{click:t.cancel}},[t._v("取消")])]),i("li",[i("button",{on:{click:t.save}},[t._v("保存")])])])])])])},a=[],r=(i("ac6a"),i("96cf"),i("3b8d")),s=i("030f"),o={props:["type","id"],data:function(){return{title:"add"==this.type?"新增":"编辑",info:{keys:[],status:1,title:"",remark:""}}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("add"==this.type){t.next=4;break}return t.next=3,s["a"].getById(this.id);case 3:this.info=t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{addKeys:function(){this.info.keys.push({key:"",value:"",remark:""})},cancel:function(){this.$router.go(-1)},save:function(){this.info.title?(new s["a"](this.info).save(),this.$router.go(-1)):this.$Toast.info("网站名不能为空!")}}},u=o,c=(i("c22e"),i("2877")),l=Object(c["a"])(u,n,a,!1,null,"17be3b4c",null);e["default"]=l.exports},ac6a:function(t,e,i){for(var n=i("cadf"),a=i("0d58"),r=i("2aba"),s=i("7726"),o=i("32e9"),u=i("84f2"),c=i("2b4c"),l=c("iterator"),d=c("toStringTag"),p=u.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=a(v),m=0;m<f.length;m++){var h,k=f[m],g=v[k],y=s[k],b=y&&y.prototype;if(b&&(b[l]||o(b,l,p),b[d]||o(b,d,k),u[k]=p,g))for(h in n)b[h]||r(b,h,n[h],!0)}},c22e:function(t,e,i){"use strict";var n=i("2f8c"),a=i.n(n);a.a}}]);