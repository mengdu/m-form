!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="lVK7")}({"VU/8":function(e,t){e.exports=function(e,t,n,o,r,i){var l,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,s=e.default);var u,f="function"==typeof s?s.options:s;if(t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId=r),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=u):o&&(u=o),u){var c=f.functional,d=c?f.render:f.beforeCreate;c?(f._injectStyles=u,f.render=function(e,t){return u.call(t),d(e,t)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:l,exports:s,options:f}}},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("rSI4");var o={name:"MForm",props:{model:Object,rules:Object,inline:Boolean,labelWidth:[String,Number],labelPosition:[String,Number]},data:function(){return{msg:"Vue component devtool"}},methods:{submit:function(){console.log("submit")}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("form",{staticClass:"m-form",class:{"m-form--inline":this.inline,"m-form--label-left":"left"===this.labelPosition,"m-form--label-right":"right"===this.labelPosition,"m-form--label-top":"top"===this.labelPosition}},[this._t("default")],2)},staticRenderFns:[]},i=n("VU/8")(o,r,!1,null,null,null).exports,l={name:"MFormItem",props:{prop:String,label:String,labelWidth:[String,Number],required:Boolean},computed:{doLabelWidth:function(){var e=this.labelWidth||this.$parent.labelWidth;return e?e+"px":null},doLabelPosition:function(){return this.$parent.labelPosition}},data:function(){return{errorMsg:""}},created:function(){console.log()}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-form-item"},[e.label?n("label",{staticClass:"m-form-item__label",class:{"is-required":e.required},style:{width:"top"!==e.doLabelPosition?e.doLabelWidth:null}},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("div",{staticClass:"m-form-item__content",style:{marginLeft:"top"!==e.doLabelPosition?e.doLabelWidth:null}},[e._t("default"),e._v(" "),e.errorMsg?n("div",{staticClass:"m-form-item__error"},[e._v(e._s(e.errorMsg))]):e._e()],2)])},staticRenderFns:[]},a=n("VU/8")(l,s,!1,null,null,null).exports;n.d(t,"default",function(){return i}),n.d(t,"MForm",function(){return i}),n.d(t,"MFormItem",function(){return a}),i.install=function(e){e.component(i.name,i),e.component(a.name,a)}},rSI4:function(e,t){}}).default});