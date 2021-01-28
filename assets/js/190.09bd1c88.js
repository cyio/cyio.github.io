(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{619:function(t,s,a){"use strict";a.r(s);var n=a(57),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"全屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全屏"}},[t._v("#")]),t._v(" 全屏")]),t._v(" "),a("h2",{attrs:{id:"在全屏元素上层显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在全屏元素上层显示"}},[t._v("#")]),t._v(" 在全屏元素上层显示")]),t._v(" "),a("p",[t._v("浏览器会为全屏元素设置一些样式，会明确指定一些"),a("code",[t._v("!important")]),t._v("的规则，我们没法覆盖")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("not")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-webkit-full-screen\n")])])]),a("p",[t._v("解决办法，是给全屏元素套一个容器，在容器上处理\n"),a("a",{attrs:{href:"https://codepen.io/OBKoro1/pen/wQmOzG",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5 全屏demo"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"z-index需要设置position才能生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index需要设置position才能生效"}},[t._v("#")]),t._v(" "),a("code",[t._v("z-index")]),t._v("需要设置"),a("code",[t._v("position")]),t._v("才能生效")]),t._v(" "),a("p",[t._v("这个功能的原理很简单，就是在视频区域再添加一个相同位置相同尺寸的同级节点，并让该节点的 z-index 属性大于视频节点的属性即可，以下只摘录关键代码：")]),t._v(" "),a("p",[t._v("因为视频节点是普通的节点,所以直接让需要覆盖在其上的新节点宽高与其相同即可\nclientWidth属性只有数值，所以还需手动加上 'px' 这个单位\nhttp://stackoverflow.com/questions/9191803/why-does-z-index-not-work\n只有设置了position属性的元素,z-index才能对其起作用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" overlayNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  overlayNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" videoNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  overlayNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'relative'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  overlayNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);