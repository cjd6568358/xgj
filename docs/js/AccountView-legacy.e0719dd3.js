(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AccountView"],{"461b":function(e,t,n){"use strict";var a=n("1da1"),r=n("d4ec"),i=n("bee2"),o=n("ade3"),s=(n("96cf"),n("d3b7"),n("25f0"),n("67ea")),u=n("4260"),c=function(){function e(t){Object(r["a"])(this,e),Object(o["a"])(this,"guid",void 0),Object(o["a"])(this,"username",void 0),Object(o["a"])(this,"password",void 0),Object(o["a"])(this,"remark",void 0),Object(o["a"])(this,"type",void 0),Object.assign(this,t)}return Object(i["a"])(e,[{key:"save",value:function(){this.guid?s["a"].account.put(this):(this.guid=Object(u["a"])()+"_"+Object(u["f"])(Date.now().toString()),s["a"].account.add(this))}}],[{key:"getAll",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].account.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getById",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].account.where({guid:t}).first();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=c},4779:function(e,t,n){"use strict";n("be7e")},be7e:function(e,t,n){},da70:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"account-info-page"},[n("div",{staticClass:"overflow-container"},[n("header",[n("span",{staticClass:"icon-back",on:{click:function(t){return e.$router.go(-1)}}}),e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"name"},[n("div",{staticClass:"title"},[e._v("密码")]),n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.info.username,expression:"info.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.info.username},on:{input:function(t){t.target.composing||e.$set(e.info,"username",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.info.password,expression:"info.password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:e.info.password},on:{input:function(t){t.target.composing||e.$set(e.info,"password",t.target.value)}}})])])]),n("div",{staticClass:"name"},[n("div",{staticClass:"title"},[e._v("备注")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.info.remark,expression:"info.remark"}],attrs:{type:"text"},domProps:{value:e.info.remark},on:{input:function(t){t.target.composing||e.$set(e.info,"remark",t.target.value)}}})]),n("footer",[n("ul",[n("li",[n("button",{on:{click:e.cancel}},[e._v("取消")])]),n("li",[n("button",{on:{click:e.save}},[e._v("保存")])])])])])])},r=[],i=n("1da1"),o=(n("96cf"),n("461b")),s={props:["type","id"],data:function(){return{title:"add"==this.type?"新增":"编辑",info:{username:"",password:"",remark:"",type:0}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("add"==e.type){t.next=4;break}return t.next=3,o["a"].getById(e.id);case 3:e.info=t.sent;case 4:case"end":return t.stop()}}),t)})))()},methods:{cancel:function(){this.$router.go(-1)},save:function(){this.info.remark?(new o["a"](this.info).save(),this.$router.go(-1)):this.$Toast.info("网站名不能为空!")}}},u=s,c=(n("4779"),n("2877")),d=Object(c["a"])(u,a,r,!1,null,"0dfa7642",null);t["default"]=d.exports}}]);