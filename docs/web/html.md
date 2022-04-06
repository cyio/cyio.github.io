# HTML
[[toc]]

- [HTML Standard](https://html.spec.whatwg.org/multipage/)

- 如果在文档开始处没有发现文档类型声明，则所有浏览器都会默认开启严格模式

## 外链脚本下载与执行

DOM parser => JS engine => DOM parser

![i](https://html.spec.whatwg.org/images/asyncdefer.svg)

- `<script>`下载和执行双阻塞，是同步的

    默认情况下，HTML 自上向下解析，发现 script 标签，如果是外链脚本，则暂停 HTML 解析(阻塞)，去下载外链脚本，然后执行脚本，至此才会恢复解析 HTML。

    验证：script 阻塞，如果放在 body 前，一直 pending（可以写错域名方便测试），观察到 body 都出不来，不过浏览器有连接超时，最后页面会出来

- async — Execute script when available, without blocking

    异步下载，仅执行阻塞

    HTML 解析过程中异步下载脚本，只在执行时暂停 HTML 解析。

- defer — Defer script execution

    异步下载，并延迟执行，完全不阻塞，且是按顺序执行，有依赖关系时可放心使用

    与 asnyc 不同的是，在 HTML 解析完后再执行脚本

    [scripting HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html)

    [async vs defer attributes - Growing with the Web](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

- 目前大网站，有使用 async ，但没 defer，两者兼容性对低版本 IE 是个问题(IE10 以下)，因此 Web 端网站要求强兼容性的话就不要用了

    [使用 defer 或 async 加载脚本 | levy](http://levy.work/2017-01-25-script-defer-and-async/)

- 与页面渲染相关，慎用 async，执行不可靠，可能晚于如 vue 的 mounted

- src 必须存在，不能手动创建

## 三者依赖、阻塞关系

HTML 解析成 DOM，逐步解析
CSS 解析成 CSSOM

最初设计，JS 加载和执行，能阻塞 DOM 解析，原因是 JS 可改变 DOM。

样式在上，脚本在下

![blocking-bold@2x-1-500x162.png (500×162)](https://hacks.mozilla.org/files/2017/09/blocking-bold@2x-1-500x162.png)

[Building the DOM faster: speculative parsing, async, defer and preload - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2017/09/building-the-dom-faster-speculative-parsing-async-defer-and-preload/)

## 文档流

### 常规流(normal flow)

- 盒属于块格式化上下文（BFC），或内联格式化上下文（IFC），上下文也可译为环境，各自只有一个
- 所有块级盒组成 BFC，而内联盒组成 IFC
- 一行内联盒组成行盒（line box）
- 内联盒之间无法设置垂直方向的外边距
- 哪些标签是内联盒呢？文本及文本排版标签，如 em strong ，文本无标签作为匿名内联盒
- 每写一个 p 都换行，p 是典型的块标签

[Visual formatting model](https://www.w3.org/TR/CSS21/visuren.html#normal-flow)
[html - normal flow](https://codepen.io/cyio/pen/KmpRPR)

### 布局应用实践

当遇到布局命题时的思维过程（由下而上）：

- 文档流能搞定吗（一层）？
- 需要浮动层（二层）？占位的影响？重叠？
- 需要定位校正位置吗（三层）？

## 布局汇总

- auto 会根据浏览器的宽度自动设置两边的外边距。原理：(浏览器宽度 - 外包含层的宽度)/2=外边距，注意上下为 0
- 如果想让页面自动居中，应当设置 margin 属性为 auto(不能再设置浮动或绝对定位属性)

- 页面布局两大方法。

  - 浮动：脱离文档流一层（页面布局最重要）。
  - 定位：脱离文档流两层（页面布局最灵活）

- 横向浮动布局

  - 特点：元素会左移、或右移，直到触碰到容器为止 3 个属性值 ：left/right/none
  - 设置了浮动的元素，仍旧处于标准文档流中，意味着会占据文档流的空间，对周围元素（紧邻后面的元素）会产生影响
  - 莫名奇妙的现象：如果块级元素没有设置宽度，设置浮动后不会显示

- 清除浮动的常用方法

  - 对浮动元素紧邻后面的元素设置 clear 属性: clear:both;
  - 同时设置：width:100%(或固定);overflow:hidden; 【推荐】

- 父级元素高度自适应

  - 父级元素不设高度，只设宽度，处于底层文档流中，盒子会收缩为零，此时，子级元素左浮动脱离了文档流
  - 解决方法：在父级元素 style 中加入 overflow:hidden;(溢出：隐藏)即可

- 相对定位

  - 相对于自身原有位置进行偏移（物理中的参照物）
  - 仍处于标准文档流中
  - 随即拥有偏移属性和 z-index 属性

- 绝对定位

  - 建立了以包含块为基准的定位
  - 完全脱离了标准文档流
  - 随即拥有偏移属性和 z-index 属性
  - 绝对于浏览器
  - 如果将父级设为 relative,则子元素将在父级盒子内定位
  - 当三个盒子都是绝对定位时，运用 z-index 定位的叠加：z-index:0/1/2/... 表示从上到下显示的次序

- 布局大动脉

  - 浮动为主：页面布局较大的框架
  - 定位为辅：某个元素的精确定位
  - 浮动：父级的高度自适应，在父级添加 overflow:hidden;
  - 定位：当子元素设为绝对定位时，只有把父级设为相对定位，子元素才会被限定在父级盒子内

- 重点大汇总

  - 有链接时要记住设置 a 的宽高与盒子的宽高相同，style 中加上 `display:block`
  - 背景图片记得 no-repeat
  - 为了便于搜索引擎抓取到 logo 的文字描述名称，但又不显示在网页 logo 处，那么在写样式 时在 a 链接处加上 `text-indent:-9999px;overflow:hidden;`
  - logo 可用定位 position 来设定位置，即
    ```
    #header { position: relative;}
    #logo { position: absolute;left: 0;top: 45px;}
    ```
  - 使文字处于盒子的居中位置：文字行高与盒子的高度一致

[html - How to Vertical align elements in a div? - Stack Overflow](https://stackoverflow.com/questions/79461/how-to-vertical-align-elements-in-a-div/84616#84616)

- 居中对齐汇总

  - 垂直对齐

    img {
    vertical-align: text-top;
    }

  - 垂直居中

    line-height: 150px; //只有一行
    display: table-cell; //有多行
    vertical-align: middle;

    [Vertical-Align: All You Need To Know - Christopher Aue](http://christopheraue.net/2014/03/05/vertical-align/)

  - 在线工具 [How to Center in CSS](http://howtocenterincss.com/)

  - logo 定位

    header {
    background: #231f20;
    padding: 10px 0;
    }
    .center {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    }
    .header-middle {
    position: absolute;
    color:red;
    left:45%;
    top:24px;
    }

## html5 下 ios，android 数字键盘的统一（如输入手机号)

- type 设为 tel，两个平台都会调出拨号键盘
- type 为 num 时，ios 调出的是全键盘，不符合预期


## DNS 预取

正确的使用姿势：

1. 对静态资源域名（如果是单独域名）做手动 dns prefetching。
2. 对 js 里会发起的跳转、请求做手动 dns prefetching。
3. 不用对超链接做手动 dns prefetching，因为 chrome 会自动做 dns prefetching。
4. 对重定向跳转的新域名做手动 dns prefetching，比如：页面上有个 A 域名的链接，但访问 A 会重定向到 B 域名的链接，那么在当前页对 B 域名做手动 dns prefetching 是有意义的。

总结，对第三方重要、间接发起（即浏览器无法自动处理）的域，使用预取。对弱网、https，改善大。

兼容性 dns-prefetch > preconnect > preload

preconnect 缺点 cpu 开销

> Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins.

[预加载系列一：DNS Prefetching 的正确使用姿势 - Delai - 有赞技术团队](https://tech.youzan.com/dns-prefetching/)

## 三种方式阻止 href 跳转

[How to prevent a click on a '#' link from jumping to top of page?](https://stackoverflow.com/a/44491091/5657916)
最简单的，锚点跳转找不到

```
<a href="#!" class="someclass">Text</a>
```

## head/meta

[HTML 文档之 Head 最佳实践 - 前端 - 掘金](https://juejin.im/entry/5a5395d76fb9a01c9e45d027)

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="renderer" content="webkit" />
<meta name="applicable-device" content="pc" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Cache-Control" content="no-transform" />
<meta name="viewport" content="width=device-width,user-scalable=yes" />
<meta name="application-name" content="" />
<meta name="renderer" content="webkit" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Cache" content="no-cache" />
<meta http-equiv="Expires" content="Wed, 26 Feb 1997 08:21:57 GMT" />
<meta http-equiv="Expires" content="0" />
```

## data 属性

```html
data-columns="3"
```
```js
var article = document.getElementById('electriccars');
article.dataset.columns // "3"
```
```css
article::before {
  content: attr(data-parent);
}
article[data-columns='3'] {
  width: 400px;
}
```

[Using data attributes | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

## html-parse

[vue/html-parser.js at dev · vuejs/vue](https://github.com/vuejs/vue/blob/dev/src/compiler/parser/html-parser.js)

## preload
可以对各种资源预取，包括 media
[Preloading content with rel="preload" - HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)

css 是渲染阻塞资源

require(DOM + CSSOM) = render tree

html css 都是阻塞资源，大部分情况我们希望如此。但有些非关键 css 需要异步加载
[Render Blocking CSS  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
[Modern Asynchronous CSS Loading | Filament Group, Inc.](https://www.filamentgroup.com/lab/async-css.html)

推荐方案
```html
<link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">
```

swiper 等三方依赖应该阻塞，new 时如果找不到，抛错会阻塞执行

[HEAD - A free guide to <-head> elements](https://htmlhead.dev/)

兼容性：firefox 不支持，会忽略退化

## dl dt dd
定义列表， dd 会缩进两个字

## script 位置
head 底部 或 body 底部

head 或 body，即使你放到 html 层， 浏览器也会将 script 移动到 head 或 body 内

[javascript - difference between putting scripts in body or outside body - Stack Overflow](https://stackoverflow.com/questions/31867747/difference-between-putting-scripts-in-body-or-outside-body)

## 页面事件

| 比较 | DOMContentLoaded         | Load |
|------|--------------------------|------|
| 目标 | Document,不包括css/image | page |

内联同步 JS 代码，可推迟 DOMContentLoaded 事件触发

vue mounted 依赖 dom 挂载点，所以是在 DOMContentLoaded 发生后执行

[浏览器页面与 vue2.0 组件生命周期横向比较 - 掘金](https://juejin.im/post/5acb14f9f265da237719b50c)

[javascript - How to run VueJS code only after Vue is fully loaded and initialized? - Stack Overflow](https://stackoverflow.com/questions/43652265/how-to-run-vuejs-code-only-after-vue-is-fully-loaded-and-initialized/43656809)

[如何分析页面加载慢 - 简书](https://www.jianshu.com/p/24b93b13e5a9)

[HTTPS 之 TLS 性能调优 - cyfonly - 博客园](https://www.cnblogs.com/cyfonly/p/9061262.html)

[Synchronous and asynchronous requests - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

## offsetParent
offsetParent 最近定位祖先元素、body
offsetLeft 相对于 offsetParent 偏移

