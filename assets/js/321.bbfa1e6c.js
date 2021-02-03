(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{761:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件"}},[t._v("#")]),t._v(" Dom 事件")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#基础"}},[t._v("基础")])]),s("li",[s("a",{attrs:{href:"#事件委托-代理"}},[t._v("事件委托（代理）")])]),s("li",[s("a",{attrs:{href:"#scroll"}},[t._v("scroll")])]),s("li",[s("a",{attrs:{href:"#mouseout-vs-mouseleave"}},[t._v("mouseout vs mouseleave")])]),s("li",[s("a",{attrs:{href:"#mouseenter-vs-mouseover"}},[t._v("mouseenter vs mouseover")])]),s("li",[s("a",{attrs:{href:"#dispatchevent"}},[t._v("dispatchEvent")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("ul",[s("li",[t._v("现代浏览器默认冒泡，如果不希望这样，"),s("code",[t._v("e.stopPropagation()")])]),t._v(" "),s("li",[t._v("默认不使用捕获，如果想捕获，"),s("code",[t._v("addEventListener()")]),t._v("第三个参数(useCapture)设为"),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("历史，IE 实现成冒泡，NetScape 实现成捕获，后期浏览器都支持了这两种事件机制")]),t._v(" "),s("li",[t._v("冒泡允许我们利用事件委托，避免在每个子节点单独设置事件监听器")]),t._v(" "),s("li",[t._v("事件阶段(eventPhase )：捕获 -> (到达)目标 -> 冒泡")]),t._v(" "),s("li",[t._v("propagation 传播，传播路径，停止传播")]),t._v(" "),s("li",[t._v("preventDefault 取消事件")]),t._v(" "),s("li",[t._v("CustomEvent carry data")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3.org/TR/DOM-Level-3-Events/#event-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("UI Events"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"事件委托-代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托-代理"}},[t._v("#")]),t._v(" 事件委托（代理）")]),t._v(" "),s("ul",[s("li",[t._v("问题：比如列表，如果列表项挨个绑定，内存消耗大，存在动态绑定删减问题")]),t._v(" "),s("li",[t._v("利用冒泡的原理，把事件加到父级上，触发执行效果。")]),t._v(" "),s("li",[t._v("有一个列表页，页面结构是外面一个 BODY， 里面有一万个子 DIV，每个 DIV 里面有一些文字，这些文字都不相同。需求是，点击一个 DIV，要求弹个 alert 框，将 DIV 里的文字显示出来。你会怎么做。\n"),s("blockquote",[s("p",[t._v("只用给外面的元素（本题是 BODY）添加点击事件，在点击时，可以获取到引发点击事件的源元素（如某 DIV），将这个元素的文本内容弹出来即可。")])])]),t._v(" "),s("li",[t._v("documentFragment 一个列表页，需要你往里面插入一千个 DOM，你怎么做？\n"),s("blockquote",[s("p",[t._v("很多时候，你往页面中加一个 DOM，就会引起页面的重构。如果你使用遍历来逐一添加，每添加一次，页面都会重新渲染一次，这种做法会带来性能的下降。好的方式是把要添加的元素先缓存起来， 要添加时一次性添加。一般会使用 documentFragment 来进行缓存，还有些使用长的字符串（HTML 代码串）来缓存")])])])]),t._v(" "),s("h2",{attrs:{id:"scroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll"}},[t._v("#")]),t._v(" scroll")]),t._v(" "),s("p",[s("code",[t._v("scroll")]),t._v("的"),s("code",[t._v("event.target")]),t._v("是"),s("code",[t._v("document")]),t._v("，只能在"),s("code",[t._v("window/document")]),t._v("上监听到")]),t._v(" "),s("h2",{attrs:{id:"mouseout-vs-mouseleave"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mouseout-vs-mouseleave"}},[t._v("#")]),t._v(" mouseout vs mouseleave")]),t._v(" "),s("ul",[s("li",[t._v("mouseout 会冒泡，mouseleave 不会"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("parent\n  > child\n")])])]),s("ol",[s("li",[t._v("鼠标移出 child 会触发")]),t._v(" "),s("li",[t._v("鼠标从 parent 可见区域移到 child 会触发")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element: mouseleave event - Web APIs | MDN"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EventListenerOptions/explainer.md at gh-pages · WICG/EventListenerOptions"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"mouseenter-vs-mouseover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mouseenter-vs-mouseover"}},[t._v("#")]),t._v(" mouseenter vs mouseover")]),t._v(" "),s("ul",[s("li",[t._v("如果目标包含子元素、且与子元素存在间距, over 会在经过间距时触发")]),t._v(" "),s("li",[t._v("enter 只关心目标整体，触发一次")])]),t._v(" "),s("h2",{attrs:{id:"dispatchevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatchevent"}},[t._v("#")]),t._v(" dispatchEvent")]),t._v(" "),s("ul",[s("li",[t._v("兼容性很好")]),t._v(" "),s("li",[t._v("自定义事件与原生事件同名时，都能接收到，但触发互不影响")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持传递自定义数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" detail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event loop")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步任务 异步任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主线程，事件队列（微任务，宏任务）")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);