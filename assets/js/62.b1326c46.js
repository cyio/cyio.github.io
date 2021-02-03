(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{504:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨源-跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨源-跨域"}},[t._v("#")]),t._v(" 跨源（跨域）")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#定义"}},[t._v("定义")])]),a("li",[a("a",{attrs:{href:"#分类"}},[t._v("分类")])]),a("li",[a("a",{attrs:{href:"#jsonp"}},[t._v("JSONP")])]),a("li",[a("a",{attrs:{href:"#cors"}},[t._v("CORS")])]),a("li",[a("a",{attrs:{href:"#proxy"}},[t._v("proxy")]),a("ul",[a("li",[a("a",{attrs:{href:"#react-vue-设置代理-仅开发模式用"}},[t._v("React / Vue 设置代理（仅开发模式用）")])])])]),a("li",[a("a",{attrs:{href:"#postmessage"}},[t._v("postMessage")])]),a("li",[a("a",{attrs:{href:"#发散-页面通信还有哪些方法"}},[t._v("发散：页面通信还有哪些方法")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("翻译问题，实际是跨源\norigin = protocol + domain + port")]),t._v(" "),a("blockquote",[a("p",[t._v("出于安全原因，浏览器限制从"),a("strong",[t._v("脚本内")]),t._v("发起的跨源 HTTP 请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。 这意味着使用\n这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非使用 CORS 头文件。")])]),t._v(" "),a("ol",[a("li",[t._v("服务端设置允许：Access-Control-Allow-Origin")]),t._v(" "),a("li",[t._v("jsonp 伪跨域，需要服务端配合")]),t._v(" "),a("li",[t._v("利用 Apache 转发 如何解决 Ajax 跨域请求不到的问题？ - pig pig 的回答 - 知乎\n同源策略和跨域访问 - lg2045 的个人空间 - 开源中国社区")]),t._v(" "),a("li",[t._v("gulp 代理插件 gulp-connect-proxy\n浅谈 WEB 跨域的实现（前端向） - vajoy - 博客园\nJavascript 跨域访问解决方案 - 老唐 的专栏 - 博客频道 - CSDN.NET\najax 跨域问题解决方案 | w3cboy,最专业的前端开发博客")])]),t._v(" "),a("p",[t._v("浏览器拦截只是页面拿不到数据，请求是正常收发的")]),t._v(" "),a("h2",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),a("ol",[a("li",[t._v("请求跨域\na. cors\nb. jsonp")]),t._v(" "),a("li",[t._v("页面跨域\na. postMessage\nb. document.domain（不推荐，标准已移除）")])]),t._v(" "),a("h2",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("p",[t._v("由于同源策略的限制，"),a("code",[t._v("XmlHttpRequest")]),t._v("只允许请求当前源，"),a("code",[t._v("script")]),t._v("标签没有同源限制")]),t._v(" "),a("p",[a("s",[t._v("但是现在浏览器，默认会检查 MIME-type，如 script 请求 json 会被 CORB 拦截")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" jsonp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonp-es6'")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md#jsonp",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios/COOKBOOK.md at master · mzabriskie/axios"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000018313378",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonp跨域资源引起CORB_记忆阁楼 - SegmentFault 思否"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://fetch.spec.whatwg.org/#corb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fetch Standard CORB"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("jsonp 数据结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('jsonpcallback({\n  "id": 1,\n  "room": "main bedroom",\n  "items": [ "bed", "chest of drawers" ]\n});\n')])])]),a("p",[t._v("服务端代码，返回的是一个函数调用，数据作为参数")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用回调函数名称包裹返回数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("客户端代码，请求文件 MIME type 应该是 javascript")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestJSONP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create script with passed in URL")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("async "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after the script is loaded (and executed), remove it")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert script tag into the DOM (append to <head>)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.map.baidu.com/place/v2/search?query=ATM机&tag=银行&region=北京&output=json&ak=F552bedbee2ec8fa6bae7b7a08201&callback=callback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestJSONP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[t._v("服务器通过设置 Access-Control-Allow-Origin 来指定接受哪些域（以下仅用于跨域情况）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("需要服务器设置支持")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Origin 有两种情况，一个精确域名或"),a("code",[t._v("*")])]),t._v(" "),a("p",[t._v("如何配置多个，写多条？缓存允许多个访问需要设置"),a("code",[t._v("vary")])])]),t._v(" "),a("li",[a("p",[a("s",[t._v("Access-Control-Allow-Credentials 表示是否允许发送 cookie，只能是 true，不需要就不要写")])])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Credentials 读取跨域响应内容限制，客、服均需设置")])]),t._v(" "),a("li",[a("p",[t._v("cookie 比较敏感，需要两端配合，才能传送，且只能同源，域名要求至少有两个点，localhost 不符合")])]),t._v(" "),a("li",[a("p",[t._v("不管是否为跨域请求，ORIGIN 字段总是被发送")])]),t._v(" "),a("li",[a("p",[t._v("Chrome/Firefox 不允许 https 向 http 发跨域请求，会被拦截")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianjunchen.com/post/cors%E5%AE%89%E5%85%A8%E9%83%A8%E7%BD%B2%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/#%E4%B8%80-%E8%83%8C%E6%99%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("绕过浏览器 SOP，跨站窃取信息：CORS 配置安全漏洞报告及最佳部署实践 | Jianjun Chen's Homepage"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/27406994/http-requests-withcredentials-what-is-this-and-why-using-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript - Http requests withCredentials what is this and why using it? - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000011811117",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios 的 cookie 跨域以及相关配置 - 个人文章 - SegmentFault 思否"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/46288437/set-cookie-header-has-no-effect",target:"_blank",rel:"noopener noreferrer"}},[t._v("http - Set-Cookie header has no effect - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ask.dcloud.net.cn/article/13372",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajax 如何带上 cookie - DCloud 问答"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5a9e6592f265da23870e59eb",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-dev-server 代理解决 cookie 丢失问题 - 掘金"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" proxy")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("https://bird.ioliu.cn/v1/?url=")])])]),t._v(" "),a("h3",{attrs:{id:"react-vue-设置代理-仅开发模式用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-vue-设置代理-仅开发模式用"}},[t._v("#")]),t._v(" React / Vue 设置代理（仅开发模式用）")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("create-react-app")]),t._v("可在 package.json 中设置"),a("code",[t._v('proxy: "http://localhost:8080"')]),t._v("，要配合 fetch/ajax 使用")]),t._v(" "),a("li",[a("code",[t._v("vue-cli")]),t._v("创建的可在"),a("code",[t._v("config.js/index.js")]),t._v("中设置")]),t._v(" "),a("li",[t._v("要代理跨域请求，请求必须指向代理地址（localhost）才 work")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  proxyTable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8081'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// changeOrigin: true // 不是必须？")]),t._v("\n      pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写接口")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://example.com/result/xxxx.mp4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/result'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\ndevServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Methods"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET, POST, PUT, DELETE, PATCH, OPTIONS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-Requested-With, content-type, Authorization"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"http://www.jianshu.com/p/95b2caf7e0da",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-cli proxyTable 解决开发环境的跨域问题 - 简书"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://plainnany.github.io/2017/08/05/JS%25E4%25B8%25AD%25E5%2585%25B3%25E4%25BA%258E%25E8%25B7%25A8%25E5%259F%259F%25E5%258F%258A%25E5%25AE%259E%25E7%258E%25B0%25E6%2596%25B9%25E6%25B3%2595/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 中关于跨域及实现方法 | plainnany"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000011072725",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 vue-axios 和 vue-resource 解决 vue 中调用网易云接口跨域的问题 - 个人文章 - SegmentFault"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/wengjq/Blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端跨域问题及解决方案 · Issue #2 · wengjq/Blog"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://louiszhai.github.io/2016/01/11/cross-domain/",target:"_blank",rel:"noopener noreferrer"}},[t._v("由同源策略到前端跨域 | louis blog"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"postmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postmessage"}},[t._v("#")]),t._v(" postMessage")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("html5 api，页面与 service worker 通信用的就是这个")])]),t._v(" "),a("li",[a("p",[t._v("出于安全考虑，需要做 origin 判断")])]),t._v(" "),a("li",[a("p",[t._v("窗口是 open/iframe 关系")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b8359f351882542ba1dcc31",target:"_blank",rel:"noopener noreferrer"}},[t._v("postMessage 可太有用了 - 掘金"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zybuluo.com/EncyKe/note/516702",target:"_blank",rel:"noopener noreferrer"}},[t._v("手记：iframe、postMessage 及其它跨域通信实践 - 作业部落 Cmd Markdown 编辑阅读器"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://javascript.info/cross-window-communication",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-window communication"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("用法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父")]),t._v("\n$iframeEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("发送的数据对象会经过 structured clone algorithm ，递归 + 维护一份已访问对象引用 map，避免循环引用。")])])]),t._v(" "),a("h2",{attrs:{id:"发散-页面通信还有哪些方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发散-页面通信还有哪些方法"}},[t._v("#")]),t._v(" 发散：页面通信还有哪些方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("storage event 作用于 localStorage/sessionStorage 共享的页面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("即使同源，并不能访问或修改 window 下的大部分变量")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Same-origin policy - Web security | MDN"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);