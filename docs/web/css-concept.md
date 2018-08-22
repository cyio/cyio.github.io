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
