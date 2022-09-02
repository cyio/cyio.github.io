# CSS 概念
[[toc]]

[CSS Vocabulary](http://apps.workflower.fi/vocabs/css/en#attribute-selector)
[CSS Box Alignment - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment)

## 块级元素有哪些？行内元素有哪些？空(void)元素有那些？

1. 块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote

    display block list-item table 三个独占行的排版

2. 行内元素：a、b、span、img、input、strong、select、label、em、button、textarea

    正文内排版元素、表单

3. 空元素：即没有内容的 HTML 元素，例如：br、meta、hr、link、input、img

## 定位

- 常规流
- 浮动
- 绝对定位

### 相对定位

- 相对于自身原有位置进行偏移（物理中的参照物）
- 仍处于标准文档流中，保留占用位置
- 随即拥有偏移属性和 z-index 属性

### 绝对定位

- 相对于最近的非 static 定位祖先元素（MDN）
- 建立了以包含块为基准的定位
- 完全脱离了标准文档流
- 随即拥有偏移属性和 z-index 属性
- 绝对于浏览器视口左上角
- 如果将父级设为 relative,则子元素将在父级盒子内定位
- 当三个盒子都是绝对定位时，运用 z-index 定位的叠加：z-index:0/1/2/… 表示从上到下显示的次序
- top 值依赖 relative 元素设置 height

## 盒模型

## box-sizing

- 定义`width/height`如何计算，默认值`content-box`
- 常用`border-box`，把 border 和 padding 也算上，特别是涉及百分比计算时，更方便

## inline-block 和 float

- `inline-block`需要在一行内显示，排列方向一致时使用
- 文档流默认是从上到下，当需要从左从右排时，就需要 float，需要添加新元素`clear: both`

> 关于 float 属性

float 定义了元素向哪个方向浮动，占据一定空间，其余内容围绕该元素排列

关于 clear 属性

规定元素的哪一侧不允许出现其他浮动元素

如果声明为左边或右边清除，会使元素的上外边框边界刚好在该边上浮动元素的下外边距边界之下。

## 选择器

### 优先级及权重

1. 分为`id > class > tag 标签 > 伪类`(权重由 1000 到 0) 四类，计算每个类别中的选择器个数，然后先比较 id 个数，越多越优先，在 id 个数相同的情况下，再比较 class 个数，依此类推。

2. 带有`!important`的优先级最高，都带 !important 的再以之前的顺序计算优先级。

3. 就近原则`inline > internal > external`

## (内容)替换元素

- 可替换元素， 渲染时根据元素的标签和属性进行替换再展示内容，源码看不出内容，嵌入内容、表单，如 img video iframe，一般有内在样式和宽高比，独立于 CSS 格式化模型的外部对象。
- 不可替换元素，源码和展示一致，不需要替换。大部分是不可替换元素。
- 区分标准是，内容在渲染时是否要进行替换
- `object-fit` 定义可替换元素如何填充容器
- inline元素默认是基线对齐的 vertical-align=baseline

## 外边距折叠（合并）

垂直方向相邻盒 margin 合并成一个（不一定是同辈元素，不一定是相邻元素）

BFC 的特性，不是缺陷

- 相邻的兄弟元素（除非后者兄弟清除浮动）
- 块级父元素与其第一个/最后一个子元素
- 空块元素

解决：
- 尽量用同一方向 margin
- 让元素产生新 BFC 或用 BFC 包住（部分触发 BFC 的条件）
- 发生元素共同容器使用 flex（并不是在发生元素上设置）
[Mastering margin collapsing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
[如何解决外边距叠加的问题？ - 知乎](https://www.zhihu.com/question/19823139)
[margin collapse](https://codepen.io/cyio/pen/mdregqb)

- 块级容器不一定是块级盒
- 块级盒不一定是块级容器，如块级替换元素（display: block）和 flex 盒
[CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/#block-container)

建BFC的初衷只是为了让元素本身（包括它的子元素）能够正确的计算自己的宽高。

## calc

IE10+

[css 兼容所有浏览器的宽度计算方法，非 calc - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000010806965)

## z-index

使用条件：定位元素（非 static）及其后代设置 stack level

## inline 元素(iframe/img)下面留白问题

默认`vertical-align`为`baseline`
iframe/img 等元素可能出现意外空白
解决：

1. 元素上设置`vertical-align`为其它值

```
vertical-align: bottom;
```

2. 父级设置

```
font-size: 0;
```

- 行内元素有两个高度
  - 内容区域高度（基于 font）
  - 虚拟区域调试（基于 line-height）
  - 这两个高度不是很确定
- 行盒高度，基于行内元素的 line-height 和 vertical-align 计算
- vertical-align 百分比基于 line-height

[Components AI — A new way to explore generative design systems](https://components.ai/box-shadows/)

## inline element align in list layout

问题：当列表元素有的包含文字，有的不包含文字时，对齐会有问题

[inline align baseline](https://codepen.io/cyio/pen/abZzWPo)

- 空的 inline 元素，基线是 margin-bottom
- 非空有文字时，取最下面内容的 baseline
- 用 inline 进行布局存在副作用，vertical-align 默认值为 baseline，不符合非文字类内容对齐要求，子元素类型有的为空，有的有文字时会发生不对齐
baseline 行内元素的 baseline 与父元素的 baseline 对齐

## @import

缺点，css 多个`@import`只能顺序下载，html `link`可并行下载
适用场景：

- 媒体适配
- 样式存在依赖
- 平时可以用，遇上需要高性能、优化时，移除，合并`@import`，直接使用 link
  [html - Best way to include CSS? Why use @import? - Stack Overflow](https://stackoverflow.com/questions/10036977/best-way-to-include-css-why-use-import?answertab=votes#tab-top)
  [CSS Guidelines (2.2.5) – High-level advice and guidelines for writing sane, manageable, scalable CSS](https://cssguidelin.es/)

## 参考

[How To Learn CSS — Smashing Magazine](https://www.smashingmagazine.com/2019/01/how-to-learn-css/)

## outline vs border
写法类似

outline 不占用布局，可能遮挡内容

覆盖用`:focus`


transform 会为包括后代创建新的包含块，fixed 元素依据将变为包含块

尺寸值，配合 width height
fit-content 不超过 max-content
max-content 实际内容 length
min-content 文本能接受的最小宽度，空格换行

[前端面试问题集锦---CSS篇_你好，欢迎光临！-CSDN博客](https://blog.csdn.net/u010622874/article/details/108875892)

## 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景。
1. display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）
2. visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）
3. opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）

## 宽度优先级

max-width overrides width, but min-width overrides max-width.

```css
width: 300px!important;
max-width: 200px;
min-width: 400px;
```

