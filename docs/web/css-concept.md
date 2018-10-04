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


## flex

* display 属性值为flex时，渲染为**块级元素，为 inline-flex 时渲染为行内元素
* 由伸缩容器+伸缩项目构成，支持任意嵌套，内外互不干扰
* justify-content 区别在两头
  space-between 只内部有，两头无
  space-around 两头有，但为半格
  space-evenly 相等

[JS Bin - Collaborative JavaScript Debugging](http://jsbin.com/mesivil/edit?html,css,output)
[移动端全兼容的flexbox速成班 - 前端技术 - 腾讯ISUX](https://isux.tencent.com/flexbox.html)

## （内容）替换元素
* 可替换元素， 渲染时根据元素的标签和属性进行替换再展示内容，源码看不出内容，嵌入内容、表单，如 img video iframe，一般有内在样式和宽高比，独产于 CSS 格式化模型的外部对象。
* 不可替换元素，源码和展示一致，不需要替换。大部分是不可替换元素。
* 区分标准是，内容在渲染时是否要进行替换
* `object-fit` 定义可替换元素如何填充容器
