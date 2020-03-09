# CSS 概念

## 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
> 块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote

display block list-item table 三个独占行的排版

> 行内元素：a、b、span、img、input、strong、select、label、em、button、textarea

正文内排版元素、表单

> 空元素：即没有内容的HTML元素，例如：br、meta、hr、link、input、img

## 定位
* 常规流
* 浮动
* 绝对定位

### 相对定位

* 相对于自身原有位置进行偏移（物理中的参照物）
* 仍处于标准文档流中
* 随即拥有偏移属性和z-index属性

### 绝对定位

* 建立了以包含块为基准的定位
* 完全脱离了标准文档流
* 随即拥有偏移属性和z-index属性
* 绝对于浏览器
* 如果将父级设为relative,则子元素将在父级盒子内定位
* 当三个盒子都是绝对定位时，运用z-index定位的叠加：z-index:0/1/2/… 表示从上到下显示的次序
* top 值依赖 relative 元素设置 height

## 盒模型
## box-sizing
`width/height`如何计算，默认值`content-box`，常用`border-box`，把 border 和 padding 也算上，特别是涉及百分比计算时，更方便

## inline-block 和 float
* `inline-block`需要在一行内显示，排列方向一致时使用
* 文档流默认是从上到下，当需要从左从右排时，就需要 float，需要添加新元素`clear: both`

> 关于 float 属性

float定义了元素向哪个方向浮动，占据一定空间，其余内容围绕该元素排列

关于 clear 属性

规定元素的哪一侧不允许出现其他浮动元素

如果声明为左边或右边清除，会使元素的上外边框边界刚好在该边上浮动元素的下外边距边界之下。

## 选择器

### 优先级及权重
分为 id > class > tag 标签 > 伪类 (权重由 1000 到 0) 四类，计算每个类别中的选择器个数，然后先比较 id 个数，越多越优先，在 id 个数相同的情况下，再比较 class 个数，以此类推。

带有 !important 的优先级最高，都带 !important 的再以之前的顺序计算优先级。

就近原则 inline > internal > external

## (内容)替换元素
* 可替换元素， 渲染时根据元素的标签和属性进行替换再展示内容，源码看不出内容，嵌入内容、表单，如 img video iframe，一般有内在样式和宽高比，独产于 CSS 格式化模型的外部对象。
* 不可替换元素，源码和展示一致，不需要替换。大部分是不可替换元素。
* 区分标准是，内容在渲染时是否要进行替换
* `object-fit` 定义可替换元素如何填充容器

## 外边距折叠
BFC 的特性，不是缺陷
[Mastering margin collapsing - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

## calc
IE10+
[css兼容所有浏览器的宽度计算方法，非calc - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000010806965)

## 坐标、距离
* clientX/Y 
* screenX/Y 
```js
/**
 * 获取鼠标相对于canvas画布的位置
 **/
function getPosition(e) {   
  var rect = e.currentTarget.getBoundingClientRect(), 
    touch,
    po;
  if(this.clientType === 'mobile'){    
    touch = e.touches[0];  
    //console.log(touch);
    po = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
  }else{
    po = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  return po;
}
```

这里我们也可以使用offsetX/Y来获取鼠标相对元素的位置信息，只不过需要注意一点的是，offsetX/Y得到的是相对元素padding box的相对位置，和通过clientX/Y-rect.left/top得到的是相对元素border box得到的相对位置。

* `getBoundingClientRect`和`getClientRects`异同
  - bounding 界限 rectangle 矩形
  -  注意 right 和 bottom 是按左上边计算
  - 这两个函数对block元素得到的结果相同，只不过getClientRects()得到的是一个数组。对于inline元素来说，如果inline元素跨行后，每行都会形成一个DOMRect，因此getClientRects()会得到多个DOMRect的位置大小信息组成的数组。而getBoundingClientRect()会得到包围所有DOMRect的最小矩形的位置大小信息。
[DOM tests - rectangles](https://www.quirksmode.org/dom/tests/rectangles.html)

## z-index
定位元素（非 static）及其后代设置 stack level

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

