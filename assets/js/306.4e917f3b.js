(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{746:function(t,e,a){"use strict";a.r(e);var s=a(56),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chrome-扩展开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-扩展开发"}},[t._v("#")]),t._v(" Chrome 扩展开发")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#要点"}},[t._v("要点")])]),a("li",[a("a",{attrs:{href:"#在-chrome-中安全地使用-eval"}},[t._v("在 Chrome 中安全地使用 eval")])]),a("li",[a("a",{attrs:{href:"#权限"}},[t._v("权限")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要点"}},[t._v("#")]),t._v(" 要点")]),t._v(" "),a("ul",[a("li",[t._v("注意权限增加时，会导致扩展被浏览器禁用，因此原则上应保持权限最小化，升级时要格外注意")])]),t._v(" "),a("h2",{attrs:{id:"在-chrome-中安全地使用-eval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-chrome-中安全地使用-eval"}},[t._v("#")]),t._v(" 在 Chrome 中安全地使用 eval")]),t._v(" "),a("ul",[a("li",[t._v("内容安全策略 - Content Security Policy (CSP)\n"),a("ul",[a("li",[t._v("不允许内联脚本，必须单独放到文件中")]),t._v(" "),a("li",[t._v("内联事件处理必须使用"),a("code",[t._v("addEventListener")]),t._v("，禁止使用"),a("code",[t._v("eval()")])])])])]),t._v(" "),a("p",[t._v("但是有很多库使用了"),a("code",[t._v("eval()")]),t._v("或类似 eval 的结构，比如"),a("code",[t._v("new Function()")]),t._v("。尤其是模板库存在上述问题，而 Google 家的 Angular.js 支持 CSP。")]),t._v(" "),a("p",[a("code",[t._v("eval")]),t._v("之所以危险是因为它执行的代码能在扩展高权限环境下防问一切。")]),t._v(" "),a("p",[t._v("解决方案是在沙盒中运行"),a("code",[t._v("eval")]),t._v("，接触不到可以影响用户安全和隐私的 API 和数据。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在配置中声明用到"),a("code",[t._v("eval")]),t._v("的页面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sandbox"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sandbox.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建后台页面，用 iframe 指向 sandbox.html")])]),t._v(" "),a("li",[a("p",[t._v("后台脚本用于与 sandbox.html 通信，写上发送消息事件，监听返回处理")])]),t._v(" "),a("li",[a("p",[t._v("在 sandbox.html 里，写上返回消息事件")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prezi.com/huy8u0fupp2n/chrome-extensions-why-not-use-the-sandbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome Extensions - Why Not Use The Sandbox? by Daniel Prentis on Prezi"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("最后再考虑使用 sandbox，有些缺点比如测试麻烦")]),t._v(" "),a("li",[t._v("可以使用 jQuery Fragments")])]),t._v(" "),a("p",[t._v("进一步了解关于内容安全策略\n"),a("a",{attrs:{href:"http://www.slideshare.net/ryanlabouve/content-security-policy-44793165",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Security Policy"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("支持 CSP 的模板库\n"),a("a",{attrs:{href:"https://github.com/addyosmani/mustache-for-chromeapps",target:"_blank",rel:"noopener noreferrer"}},[t._v("addyosmani/mustache-for-chromeapps"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),a("p",[t._v("在 permisions 和 content_script 中设置域名匹配，以便于跨域请求，发布时会要求深入审核")]),t._v(" "),a("p",[t._v("建议在 permision 中使用 "),a("code",[t._v("activeTab")]),t._v("，可跨域访问当前打开的页面域名，减少审核难度")])])}),[],!1,null,null,null);e.default=r.exports}}]);