(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{639:function(t,e,a){"use strict";a.r(e);var r=a(56),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"html5-mobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5-mobile"}},[t._v("#")]),t._v(" html5-mobile")]),t._v(" "),a("h2",{attrs:{id:"构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建工具"}},[t._v("#")]),t._v(" 构建工具")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SASS_BINARY_SITE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://npm.taobao.org/mirrors/node-sass/ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PHANTOMJS_CDNURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://npm.taobao.org/mirrors/phantomjs/ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g elf-cli --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n\nelf init elf-demo\nelf init -t swiper demo-swiper\n\nelf start\n")])])]),a("p",[a("a",{attrs:{href:"https://aotu.io/notes/2017/01/17/elf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ELF - 灵活可扩展的 HTML5 构建工具 | Aotu.io「凹凸实验室」"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[t._v("#")]),t._v(" 移动端适配")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("为什么不用媒体查询方案？\n移动端屏幕尺寸多，"),a("strong",[t._v("适配代码量大")])])]),t._v(" "),a("li",[a("p",[t._v("弹性布局\n文字流式，控件弹性，图片等比缩放")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  ![459873-20151014135816569-395090216.png (500×320)](http://images2015.cnblogs.com/blog/459873/201510/459873-20151014135816569-395090216.png)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("字体单位\nem 是相对于父元素的比例，如 0.5em 就是当前元素的父元素的字体大小的一半"),a("br"),t._v("\nrem 就是相对于root，就是根元素html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  > em = 希望得到的像素大小 / 父元素字体像素大小\n  > em单位和百分比单位的作用是一样的\n  \n  ```css\n  body {\n  \tfont-size: 62.5%; /* font-size 1em = 10px */\n  }\n  p {\n  \tfont-size: 1.6em; /* 1.6em = 16px */\n  }\n  ```\n")])])])]),t._v(" "),a("li",[a("p",[t._v("如何计算根元素的字体大小？\n等价问题是元素尺寸百分比的基准值应该是多少。\n页面代码用相对单位写死，然后根据不同屏幕宽度计算基准值。\n基准值 = 设备宽度 / 设计稿宽度")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  > 如果设计稿基于iphone6，横向分辨率为750，body的width为750 / 100 = 7.5rem\n  > 如果设计稿基于iphone4/5，横向分辨率为640，body的width为640 / 100 = 6.4rem    \n")])])])]),t._v(" "),a("li",[a("p",[t._v("结合项目的思考\n设计稿是640，按320写")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.icloud.com/keynote/000DIf8ISxFcuxka4YozKLaOg#Mobile_Webpage_%25E5%25A6%2582%25E4%25BD%2595%25E8%2587%25AA%25E9%2580%2582%25E5%25BA%2594%25E5%25B1%258F%25E5%25B9%2595_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mobile Webpage 如何自适应屏幕 2"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"移动端布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端布局"}},[t._v("#")]),t._v(" 移动端布局")]),t._v(" "),a("ul",[a("li",[t._v("考虑布局时思维还是经常堵住")]),t._v(" "),a("li",[t._v("布局分解不清晰，用什么来写呢？")]),t._v(" "),a("li",[t._v("急着上手写，分析布局的时间不足")]),t._v(" "),a("li",[t._v("不知道用哪个写，如何学习求助？")])]),t._v(" "),a("h2",{attrs:{id:"犯过的错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#犯过的错"}},[t._v("#")]),t._v(" 犯过的错")]),t._v(" "),a("ul",[a("li",[t._v("布局时，一定要检查是否为子元素设置了宽度。")]),t._v(" "),a("li",[t._v("注意写的先后顺序，先布局，后细节")])]),t._v(" "),a("h2",{attrs:{id:"oms-移动优化经验-md-at-master-·-herbertliu-oms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oms-移动优化经验-md-at-master-·-herbertliu-oms"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/herbertliu/OMS/blob/master/%25E7%25A7%25BB%25E5%258A%25A8%25E4%25BC%2598%25E5%258C%2596%25E7%25BB%258F%25E9%25AA%258C.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("OMS/移动优化经验.md at master · herbertliu/OMS"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"ui-设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-设计"}},[t._v("#")]),t._v(" UI 设计")]),t._v(" "),a("p",[t._v("PC 端一张大 banner 的图片预算大概在 300kb，手机端建议不超过 150kb。手机端使用满铺背景的图片，需要给出适配方案，特别要考虑橫屏情况\n微信不支持横屏")]),t._v(" "),a("h2",{attrs:{id:"移动端开发总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端开发总结"}},[t._v("#")]),t._v(" 移动端开发总结")]),t._v(" "),a("ul",[a("li",[t._v("rem 设置是否正确，要验证")]),t._v(" "),a("li",[t._v("展示图不要指定高度或限高，平板设备需要的高度不同")])]),t._v(" "),a("h2",{attrs:{id:"返回刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回刷新"}},[t._v("#")]),t._v(" 返回刷新")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/43043113/how-to-force-reloading-a-page-when-using-browser-back-button",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript - How to force reloading a page when using browser back button? - Stack Overflow"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/rico-c/RICO-BLOG/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页后退不刷新的N种解决方案 · Issue #17 · rico-c/RICO-BLOG"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("A -> B -> A 此时浏览器返回又到了 B，无解。写死地址，会引起别的页面间死循环。")])])}),[],!1,null,null,null);e.default=s.exports}}]);