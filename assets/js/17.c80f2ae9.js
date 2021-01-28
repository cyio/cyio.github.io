(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{449:function(t,s,a){"use strict";a.r(s);var n=a(57),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vue-做项目开发常见时序问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-做项目开发常见时序问题"}},[t._v("#")]),t._v(" 使用 vue 做项目开发常见时序问题")]),t._v(" "),a("p",[t._v("时序问题是我们开发过程中经常遇到的问题，比如异步代码执行顺序，组件加载销毁顺序等，涉及时序的代码思考不周，比较容易出 bug，解决起来费时间。本文结合 Vue 中特性，谈下笔者在项目开发中常见问题。")]),t._v(" "),a("h2",{attrs:{id:"beforecreate-vs-created-vs-mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-vs-created-vs-mounted"}},[t._v("#")]),t._v(" beforeCreate VS created VS mounted")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("beforeCreate")]),t._v(" "),a("th",[t._v("created")]),t._v(" "),a("th",[t._v("mounted")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("与后台交互")]),t._v(" "),a("td",[t._v("...")]),t._v(" "),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("需要访问 props 和 data")]),t._v(" "),a("td",[t._v("需要访问 DOM")])])])]),t._v(" "),a("ul",[a("li",[t._v("这些生命周期里都可与后台交互，业务代码一般写在 created 中")]),t._v(" "),a("li",[t._v("beforeCreate 在 vuex/vue-router 中常用")])]),t._v(" "),a("h2",{attrs:{id:"watch-动态值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-动态值"}},[t._v("#")]),t._v(" watch 动态值")]),t._v(" "),a("p",[t._v("更新：合理做法，其实是 开始时执行一次 "),a("code",[t._v("immediate: true")]),t._v("，然后再 watch 变化")]),t._v(" "),a("p",[t._v("我们知道 watch 的执行条件是 watch 的值发生变化。一般是在异步代码执行后赋值，值是有变化的，watch 有效，但当这个值缓存起来（如使用 vuex），组件卸载而再次创建时，值在 watch 前已存在且没有再发生变化，我们期望的 watch 中的代码没有执行。")]),t._v(" "),a("p",[t._v("为解决以上问题，推荐一种笔者使用的代码组织方式，可以明确执行依赖关系")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保动态数据绑定回调执行，vue 中使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureValueBindedFnExecute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureValueBindedFnExecute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toExec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (this.value) {")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.toExec()")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// } else {")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.$watch('value', () => {")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (this.value) {")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.toExec()")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// })")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("实际项目中使用 watch 会遇到稍复杂点的情形。笔者在项目中遇到这样一个问题，子组件 watch prop 时发现有时不执行。代码是这样的，子组件在满足开关条件后渲染，父组件有两个并行请求，请求 A 负责开关渲染子组件的条件，请求 B 负责获取要传给子组件的数据，有两种情形。一种情况是，请求 A 先完成，子组件渲染，prop 为 null，请求 B 后完成，prop 赋值发生变化，watch 执行。另一种情况是，请求 B 先完成，父组件准备好子组件需要的数据，请求 A 后完成，子组件渲染，prop 不发生变化，watch 不执行。")]),t._v(" "),a("p",[t._v("总结下，父组件准备好 prop 后渲染子组件，子组件中的 watch 不会触发，因为没有变化。")]),t._v(" "),a("h2",{attrs:{id:"同一个组件，旧实例销毁、新实例创建时的生命周期顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一个组件，旧实例销毁、新实例创建时的生命周期顺序"}},[t._v("#")]),t._v(" 同一个组件，旧实例销毁、新实例创建时的生命周期顺序")]),t._v(" "),a("p",[t._v("在项目中遇到这个场景，以为新实例创建要在旧实例销毁后才会执行。其实不然，新实例创建钩子可能先于旧实例销毁钩子。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new created:\n\nold beforeDestroy:\nold destroyed:\n\nnew mounted\n")])])]),a("h2",{attrs:{id:"父子组件、mixins-生命周期顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件、mixins-生命周期顺序"}},[t._v("#")]),t._v(" 父子组件、mixins 生命周期顺序")]),t._v(" "),a("p",[t._v("原则：从外到内，再从内到外，mixins 先于当前组件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("created")]),t._v(" "),a("th",[t._v("mounted")]),t._v(" "),a("th",[t._v("beforeDestroy")]),t._v(" "),a("th",[t._v("destroyed")]),t._v(" "),a("th",[t._v("mixins")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("外先")]),t._v(" "),a("td",[t._v("内先")]),t._v(" "),a("td",[t._v("外先")]),t._v(" "),a("td",[t._v("内先")]),t._v(" "),a("td",[t._v("先于当前组件")])])])]),t._v(" "),a("p",[t._v("父子生命周期执行顺序如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("parent created:\nchild created:\n\nchild mounted:\nparent mounted:\n\nparent beforeDestory:\nchild beforeDestroy:\n\nchild destroyed\nparent destroyed\n")])])]),a("h2",{attrs:{id:"new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[t._v("#")]),t._v(" new")]),t._v(" "),a("p",[t._v("清空 content 后，dom 没有立即更新，watch 取到的 textLength 是旧值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.textLength = 0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textLength "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form.content'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textLength "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feedback-content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textLength\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);