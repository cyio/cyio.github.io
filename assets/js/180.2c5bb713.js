(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{609:function(t,e,a){"use strict";a.r(e);var n=a(57),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设备判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备判断"}},[t._v("#")]),t._v(" 设备判断")]),t._v(" "),a("p",[a("code",[t._v("npm install modernizr --save-dev")])]),t._v(" "),a("p",[t._v("存在的问题，刚引入判断不出来，需要一定执行时间？")]),t._v(" "),a("p",[t._v("判断依据：")]),t._v(" "),a("ul",[a("li",[t._v("ua 正则判断")]),t._v(" "),a("li",[a("code",[t._v("'ontouchstart' in window")])])]),t._v(" "),a("p",[t._v("如何判断是不是在chrome模拟器中？")]),t._v(" "),a("h2",{attrs:{id:"是否是手机设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否是手机设备"}},[t._v("#")]),t._v(" 是否是手机设备")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMobileDevice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IEMobile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("One line function to detect mobile devices with JavaScript (Example)"),a("OutboundLink")],1)]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("mobile-js")])]),t._v(" "),a("p",[t._v("两种方法都不完全准")]),t._v(" "),a("h2",{attrs:{id:"数据收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据收集"}},[t._v("#")]),t._v(" 数据收集")]),t._v(" "),a("p",[a("code",[t._v("navigator.deviceMemory")]),t._v("\nchrome only 63+")]),t._v(" "),a("p",[t._v("有上下边界，保护用户隐私，0.25-8")]),t._v(" "),a("p",[a("code",[t._v("navigator.hardwareConcurrency")]),t._v(" CPU 核心数")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://trackjs.com/blog/monitoring-javascript-memory/",target:"_blank",rel:"noopener noreferrer"}},[t._v("监视JavaScript内存"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"有效网络类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有效网络类型"}},[t._v("#")]),t._v(" 有效网络类型")]),t._v(" "),a("p",[t._v("4g > 700kbps 可用于高清、实时视频，跟我们平时说的数值有差异")]),t._v(" "),a("h2",{attrs:{id:"设备单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备单位"}},[t._v("#")]),t._v(" 设备单位")]),t._v(" "),a("p",[t._v("物理像素密度高的话，就会多于设备物理宽度")]),t._v(" "),a("p",[t._v("window.screen.availHeight 减掉任务栏\nwindow.screen.availTop")]),t._v(" "),a("h3",{attrs:{id:"获取设备绝对宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取设备绝对宽度"}},[t._v("#")]),t._v(" 获取设备绝对宽度")]),t._v(" "),a("ol",[a("li",[t._v("window.screen.width * window.devicePixelRatio")])]),t._v(" "),a("p",[a("code",[t._v("devicePixelRatio = 物理像素 / CSS pixel")]),t._v(" 会受页面 zoom 影响 如，zoom 110% "),a("code",[t._v("devicePixelRatio 1.100000023841858")]),t._v("\n告诉浏览器多少个实际像素应当用来绘制一个 CSS 像素\n最好只在移动端用")]),t._v(" "),a("p",[t._v("CSS pixel 即熟知的"),a("code",[t._v("px")]),t._v("，也叫逻辑像素")]),t._v(" "),a("p",[t._v("resolution pixel density")]),t._v(" "),a("p",[t._v("dpi 屏幕一般 72-96，打印会更大，与 dpcm、dppx 区别即计算单位差异，后边是厘米、像素")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("设置了"),a("code",[t._v('<meta name="viewport" content="width=device-width"/>')]),t._v("后，可考虑使用"),a("code",[t._v("window.innerWidth")]),t._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/questions/8785643/what-exactly-is-device-pixel-ratio",target:"_blank",rel:"noopener noreferrer"}},[t._v("css - what exactly is device pixel ratio? - Stack Overflow"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://javascript.info/size-and-scroll",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element size and scrolling"),a("OutboundLink")],1),t._v("\noffsetParent 最近父元素\noffsetWidth/Height 元素自身带上 border\nclientTop/Left "),a("code",[t._v("outer width - inner width")]),t._v(" 相当于 border 宽度，可能包含滚动条\nclientWidth/Height 带 padding，但不含滚动条\nscrollWidth/Height 与clientWidth/Height 类似，但包括了滚出区域（看不到）\nscrollLeft/scrollTop 滚出区域，惟一可改值\n不要用 CSS 获取宽高，有影响因素，不准或取不到")])])}),[],!1,null,null,null);e.default=s.exports}}]);