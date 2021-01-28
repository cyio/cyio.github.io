(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{739:function(t,a,s){"use strict";s.r(a);var e=s(57),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-实践"}},[t._v("#")]),t._v(" CSS 实践")]),t._v(" "),s("p",[t._v("[")]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#不使用-import"}},[t._v("不使用 @import")])]),s("li",[s("a",{attrs:{href:"#在-iframe-中插入-css"}},[t._v("在 iframe 中插入 CSS")])]),s("li",[s("a",{attrs:{href:"#未知宽度下的水平居中"}},[t._v("未知宽度下的水平居中")])]),s("li",[s("a",{attrs:{href:"#用-flexbox-垂直居中任意元素"}},[t._v("用 flexbox 垂直居中任意元素")])]),s("li",[s("a",{attrs:{href:"#水平垂直居中"}},[t._v("水平垂直居中:")])]),s("li",[s("a",{attrs:{href:"#css-性能"}},[t._v("CSS 性能")])]),s("li",[s("a",{attrs:{href:"#视觉稿中的-px-换算为-rem"}},[t._v("视觉稿中的 px 换算为 rem")])]),s("li",[s("a",{attrs:{href:"#background-position"}},[t._v("background-position")])]),s("li",[s("a",{attrs:{href:"#background-origin"}},[t._v("background-origin")])]),s("li",[s("a",{attrs:{href:"#background-attachment"}},[t._v("background-attachment")])]),s("li",[s("a",{attrs:{href:"#图片响应占位解决方案"}},[t._v("图片响应占位解决方案")])]),s("li",[s("a",{attrs:{href:"#如何用-css-画直角梯形？"}},[t._v("如何用 CSS 画直角梯形？")])]),s("li",[s("a",{attrs:{href:"#横向百分比布局有哪些问题？"}},[t._v("横向百分比布局有哪些问题？")])]),s("li",[s("a",{attrs:{href:"#如何渐进地将设计图还原？"}},[t._v("如何渐进地将设计图还原？")])]),s("li",[s("a",{attrs:{href:"#换算-以宽度为基准缩放，字体也会缩放吗？"}},[t._v("[换算]以宽度为基准缩放，字体也会缩放吗？")])]),s("li",[s("a",{attrs:{href:"#线性渐变"}},[t._v("线性渐变")])]),s("li",[s("a",{attrs:{href:"#径向渐变"}},[t._v("径向渐变")])]),s("li",[s("a",{attrs:{href:"#css-变量命名示例"}},[t._v("CSS 变量命名示例")])]),s("li",[s("a",{attrs:{href:"#布局排列疑难杂症"}},[t._v("布局排列疑难杂症")])]),s("li",[s("a",{attrs:{href:"#优化"}},[t._v("优化")])]),s("li",[s("a",{attrs:{href:"#变量"}},[t._v("变量")])]),s("li",[s("a",{attrs:{href:"#clip-path"}},[t._v("clip-path")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"不使用-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用-import"}},[t._v("#")]),t._v(" 不使用 @import")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("import 的文件 b 在依赖 a 下载完成后才能下载")])]),t._v(" "),s("li",[s("p",[t._v("应该合并，减少下载，或写到 link，实现并行下载")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/10036977/best-way-to-include-css-why-use-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("html - Best way to include CSS? Why use @import? - Stack Overflow"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"在-iframe-中插入-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-iframe-中插入-css"}},[t._v("#")]),t._v(" 在 iframe 中插入 CSS")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" css "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style.css'")]),t._v("\ncss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")]),t._v("\ncss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/css'")]),t._v("\nframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frame-id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"未知宽度下的水平居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未知宽度下的水平居中"}},[t._v("#")]),t._v(" 未知宽度下的水平居中")]),t._v(" "),s("ul",[s("li",[t._v("方案一，需要父子配合"),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("inner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("html ： 让 inner 居中"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 自适应内容宽度 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("方案二，块宽度未知，绝对定位，偏移 50%，加上负的水平变形进行校正"),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".horizontal-center")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"用-flexbox-垂直居中任意元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-flexbox-垂直居中任意元素"}},[t._v("#")]),t._v(" 用 flexbox 垂直居中任意元素")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html,\nbody")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"水平垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中"}},[t._v("#")]),t._v(" 水平垂直居中:")]),t._v(" "),s("p",[t._v("translate 修正偏差")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("elem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"css-性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-性能"}},[t._v("#")]),t._v(" CSS 性能")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 注意这条代码，会先遍历所有a链接，可能有上千个。\n#social a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// better\n#social .social-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"视觉稿中的-px-换算为-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视觉稿中的-px-换算为-rem"}},[t._v("#")]),t._v(" 视觉稿中的 px 换算为 rem")]),t._v(" "),s("ul",[s("li",[t._v("以 750px 为例，分成 100 份（单位假定为 a）")]),t._v(" "),s("li",[t._v("1a = 7.5px")]),t._v(" "),s("li",[t._v("一屏为 10 rem")]),t._v(" "),s("li",[t._v("1rem = 10a = 75px\n"),s("a",{attrs:{href:"http://codepen.io/cyio/pen/BWgamb?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("em unit explain"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5a716c4c6fb9a01cb42cac4b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 项目自动转换 px 为 rem，高保真还原设计图 - 掘金"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.jianshu.com/p/5b8b7cd11fce",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Vue Cli 3 中使用 px2rem - 简书"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"background-position"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-position"}},[t._v("#")]),t._v(" background-position")]),t._v(" "),s("p",[t._v("控制背景图的起始点，相对于左上角为原点坐标\n初始值为 0%, 0%，也就是原点\n只指定一个值，表示横坐标，纵坐标未指定默认值为 50%，而不是说横纵坐标都使用给定的值\n比如 background-position: center 并非指定两个值都为 center，而只是指定了第一个值")]),t._v(" "),s("h2",{attrs:{id:"background-origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-origin"}},[t._v("#")]),t._v(" background-origin")]),t._v(" "),s("p",[t._v("根据盒模型，设置不同的定位参考原点\n从内到外有 content-box, padding-box, border-box，初始值为 padding-box\n当 background-attachment 为 fixed，也就是相对原点变为视口左上角，background-origin 无效")]),t._v(" "),s("h2",{attrs:{id:"background-attachment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-attachment"}},[t._v("#")]),t._v(" background-attachment")]),t._v(" "),s("p",[t._v("背景相对于视口的依附处理方式，如 fixed 则保持于视口中，不随内容滚动，初始值为 scroll")]),t._v(" "),s("h2",{attrs:{id:"图片响应占位解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片响应占位解决方案"}},[t._v("#")]),t._v(" 图片响应占位解决方案")]),t._v(" "),s("ul",[s("li",[t._v("问题：不能给固定高度")]),t._v(" "),s("li",[t._v("利用 padding 处理高度(需给定宽度)")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-element:after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 56.25%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Aspect ratio = height divided width times 100 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("html - how to give image a dynamic width and height when using bootstrap responsive grid system - Stack Overflow http://stackoverflow.com/questions/23771952/how-to-give-image-a-dynamic-width-and-height-when-using-bootstrap-responsive-gri")]),t._v(" "),s("p",[t._v("css - Keep div height while the image is loading - Stack Overflow http://stackoverflow.com/questions/21992210/keep-div-height-while-the-image-is-loading")]),t._v(" "),s("h2",{attrs:{id:"如何用-css-画直角梯形？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何用-css-画直角梯形？"}},[t._v("#")]),t._v(" 如何用 CSS 画直角梯形？")]),t._v(" "),s("ul",[s("li",[t._v("对外围容器应用斜切 "),s("code",[t._v("-webkit-transform: skewX(-10deg)")])]),t._v(" "),s("li",[t._v("然后用 margin 负值或相对定位，隐藏局部")]),t._v(" "),s("li",[t._v("若梯形内有内容，对内容应用反斜切和反向偏移")])]),t._v(" "),s("h2",{attrs:{id:"横向百分比布局有哪些问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#横向百分比布局有哪些问题？"}},[t._v("#")]),t._v(" 横向百分比布局有哪些问题？")]),t._v(" "),s("h2",{attrs:{id:"如何渐进地将设计图还原？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何渐进地将设计图还原？"}},[t._v("#")]),t._v(" 如何渐进地将设计图还原？")]),t._v(" "),s("ul",[s("li",[t._v("抽象公共类")]),t._v(" "),s("li",[t._v("布局拆解，严格按 row-col 来写")]),t._v(" "),s("li",[t._v("没有图片素材时，添加占位图")]),t._v(" "),s("li",[t._v("要不断地拆解问题，我要解决一个怎样的小问题")])]),t._v(" "),s("h2",{attrs:{id:"换算-以宽度为基准缩放，字体也会缩放吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#换算-以宽度为基准缩放，字体也会缩放吗？"}},[t._v("#")]),t._v(" [换算]以宽度为基准缩放，字体也会缩放吗？")]),t._v(" "),s("h2",{attrs:{id:"线性渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性渐变"}},[t._v("#")]),t._v(" 线性渐变")]),t._v(" "),s("ul",[s("li",[t._v("0deg 相当于 to top，90deg 相当于 to right")]),t._v(" "),s("li",[t._v("color-stop 可有多个，如果不指定百分比位置，则是均匀散开")]),t._v(" "),s("li",[t._v("支持透明度")]),t._v(" "),s("li",[t._v("可以搭配背景图使用")]),t._v(" "),s("li",[t._v("至少定义两种颜色，希望呈现的平稳过渡的颜色")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("background: linear-gradient(to bottom, black 90%, green 95%, yellow);\n\nbackground: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1)), url(https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg) no-repeat;\nbackground-size: cover;\n")])])]),s("h2",{attrs:{id:"径向渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#径向渐变"}},[t._v("#")]),t._v(" 径向渐变")]),t._v(" "),s("ul",[s("li",[t._v("线性渐变是直线渐变，径向是圆形的渐变")]),t._v(" "),s("li",[t._v("圆只是一种特殊的椭圆 -径向渐变从圆心点以椭圆形状向外扩散，渐变的实现由两部分组成：椭圆和色标。椭圆部分用来控制径向渐变的位置、大小和形状等。而色标部分包含一个颜色值和一个位置，用来控制渐变的颜色变化")]),t._v(" "),s("li",[t._v("中心位置的值，用单词，或者都用 px，不能混用")]),t._v(" "),s("li",[t._v("应用：切角，用透明色填充")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/a/32859121/5657916",target:"_blank",rel:"noopener noreferrer"}},[t._v("css - Multiple gradients and radial gradient with center outside of the element - Stack Overflow"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://css-tricks.com/radial-gradient-recipes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Radial Gradient Recipes | CSS-Tricks"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/zhongguohaoshaonian/article/details/77870217",target:"_blank",rel:"noopener noreferrer"}},[t._v("css 实现平角切角和弧形切角效果 - 小圣贤君的博客 - CSDN 博客"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"css-变量命名示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-变量命名示例"}},[t._v("#")]),t._v(" CSS 变量命名示例")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/dbox/e7b206a04d39598e32237b5f1317ef83",target:"_blank",rel:"noopener noreferrer"}},[t._v("colors-by-use.md"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"布局排列疑难杂症"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局排列疑难杂症"}},[t._v("#")]),t._v(" 布局排列疑难杂症")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("固定宽高区域内，文字一行或多行，保持上下左右居中 http://codepen.io/cyio/pen/dXOzGj/?editors=0100")])]),t._v(" "),s("li",[s("p",[t._v("14 - 可以搭配背景图使用 │~ CSS 控制图片和文字在同一行显示且对齐的 3 种方法 - jingwhale - 博客园 http://www.cnblogs.com/jingwhale/p/4599327.html")])]),t._v(" "),s("li",[s("p",[t._v("样式的位置\n理论上可以放到任意位置，但要考虑页面如何载入，通常希望 html 带样式展示，这样就需要把样式放在 body 之前")])])]),t._v(" "),s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("推荐使用 BEM 结构，能减少类查找，降低样式计算开销")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations",target:"_blank",rel:"noopener noreferrer"}},[t._v("缩小样式计算的范围并降低其复杂性  |  Web  |  Google Developers"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("ul",[s("li",[t._v("支持回退和设置默认值")]),t._v(" "),s("li",[t._v("支持作用域和继承")]),t._v(" "),s("li",[t._v("CSS 变量提供了 JavaScript 与 CSS 通信的一种途径")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/05/css-variables.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 变量教程 - 阮一峰的网络日志"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855",target:"_blank",rel:"noopener noreferrer"}},[t._v("Everything you need to know about CSS Variables – freeCodeCamp"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"clip-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clip-path"}},[t._v("#")]),t._v(" clip-path")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://bennettfeely.com/clippy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clippy — CSS clip-path maker"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);