(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{512:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),a("p",[t._v("[toc]")]),t._v(" "),a("h2",{attrs:{id:"throw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throw"}},[t._v("#")]),t._v(" throw")]),t._v(" "),a("ul",[a("li",[t._v("什么情况下用 throw，即不满足继续执行条件，继续执行没意义，只会显示更多无用错误，甚至可能是死循环")]),t._v(" "),a("li",[t._v("中断函数执行，抛出一个 exception 对象，包含 name 和 message 两个属性，也可以添加其它的属性\n"),a("code",[t._v("try ... catch (e) {console.log(e.name, e.message)}")]),t._v(" catch 从句可捕获异常错误")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'divide(): Both arguments must be numbers.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" num2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可抽象成断言函数，简化错误输出")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("conditon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'divide(): Both arguments must be numbers.'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" num2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror",target:"_blank",rel:"noopener noreferrer"}},[t._v("GlobalEventHandlers.onerror | MDN"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/console/track-exceptions?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("异常和错误处理  |  Tools for Web Developers  |  Google Developers"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端代码异常日志收集与监控"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("您必须知道的几个 Nodejs 编码习惯 · GitBook"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue.config.errorHandler")]),t._v("在这里设置上报")]),t._v(" "),a("li",[a("code",[t._v("Vue.config.warnHandler")]),t._v("在 production 会忽略")]),t._v(" "),a("li",[a("code",[t._v("errorCaptured")]),t._v(" hook 可以用来做 error-boundary 组件，2.5+ 可用，捕获子孙组件 vue render 错误，捕获不了 click 等事件函数错误")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/deployment.html#%25E8%25B7%259F%25E8%25B8%25AA%25E8%25BF%2590%25E8%25A1%258C%25E6%2597%25B6%25E9%2594%2599%25E8%25AF%25AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("生产环境部署 — Vue.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://catchjs.com/Docs/Vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Error handling with Vue.js (a story of rental cars and Destinys Child) | CatchJS"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/CatChen/catchen.me/blob/c622f7c49e5b603cb4d768c189e1c2e0436bebcf/public/_layout.jade#L87",target:"_blank",rel:"noopener noreferrer"}},[t._v("catchen.me/_layout.jade at c622f7c49e5b603cb4d768c189e1c2e0436bebcf · CatChen/catchen.me"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/hustskyking/p/fe-monitor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端代码异常日志收集与监控 - Barret Lee - 博客园"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/happylindz/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端代码异常监控实战 · Issue #5 · happylindz/blog"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" Image")]),t._v(" "),a("ol",[a("li",[t._v("在 img 标签上设置 "),a("code",[t._v('v-on:error=""')])]),t._v(" "),a("li",[t._v("设置替换图片，要保证替换图片存在，否则可能造成死循环")])]),t._v(" "),a("h2",{attrs:{id:"sentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentry"}},[t._v("#")]),t._v(" Sentry")]),t._v(" "),a("p",[t._v("手动上报\n"),a("code",[t._v("Sentry.captureMessage('Something went wrong');")])]),t._v(" "),a("p",[t._v("Capturing Events - Docs https://docs.sentry.io/error-reporting/capturing/?platform=javascript")]),t._v(" "),a("h2",{attrs:{id:"错误模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误模拟"}},[t._v("#")]),t._v(" 错误模拟")]),t._v(" "),a("ul",[a("li",[t._v("dev tool block，忽略这种情况，意义不大")]),t._v(" "),a("li",[t._v("mock 500，这种常见，onError 能捕获到")])]),t._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监控js错误")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用异步的方式,避免阻塞")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监控资源加载错误(img,script,css,以及jsonp)")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unhandledrejection'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1px-gif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1px-gif"}},[t._v("#")]),t._v(" 1px gif")]),t._v(" "),a("ol",[a("li",[t._v("没有跨域问题，一般这种上报数据，代码要写通用的；（排除ajax）")]),t._v(" "),a("li",[t._v("不会阻塞页面加载，影响用户的体验，只要new Image对象就好了；（排除JS/CSS文件资源方式上报）")]),t._v(" "),a("li",[t._v("在所有图片中，体积最小；（比较PNG/JPG）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);