# CSS 实践

## 不使用 @import
* import 的文件 b 在依赖 a 下载完成后才能下载
* 应该合并，减少下载，或写到 link，实现并行下载
[html - Best way to include CSS? Why use @import? - Stack Overflow](https://stackoverflow.com/questions/10036977/best-way-to-include-css-why-use-import)

## 在iframe中插入CSS
  ```js
  var css = document.createElement("link") 
  css.href = "style.css"; 
  css.rel = "stylesheet"; 
  css.type = "text/css"; 
  frames["frame-id"].document.body.appendChild(css);
  ```

## 未知宽度下的居中
* 方案一，需要父子配合
  ```html
  <div class="wrap">
    <div class="inner">html ： 让 inner 居中</div>
  </div>
  ```
  ```css
  .wrap {
    float: left; /* 自适应内容宽度 */
    position: relative;
    left: 50%; 
  }
  .inner {
    position: relative;
    left: -50%; 
  }
  ```
* 方案二，块宽度未知，绝对定位，偏移50%，加上负的水平变形进行校正
	```css
  .horizontal-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
	```

## 用 flexbox 垂直居中任意元素
  ```css
  html, body {
    height: 100%;
    margin: 0
  }

  body {
    display: flex;
    align-item: center;
  }
  ```

## 对需要水平垂直居中的元素写css:
translate 修正偏差
  ```css
  elem {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

## CSS 性能
  ```css
  // 注意这条代码，会先遍历所有a链接，可能有上千个。
  #social a {}

  // better
  #social .social-link {}
  ```

## 视觉稿中的 px 换算为 rem
  * 以 750px 为例，分成 100 份（单位假定为a）
  * 1a = 7.5px
  * 1rem = 10a = 75px
[em unit explain](http://codepen.io/cyio/pen/BWgamb?editors=1100)
[Vue项目自动转换 px 为 rem，高保真还原设计图 - 掘金](https://juejin.im/post/5a716c4c6fb9a01cb42cac4b)
[在 Vue Cli 3 中使用 px2rem - 简书](https://www.jianshu.com/p/5b8b7cd11fce)

## background-position
  控制背景图的起始点，相对于左上角为原点坐标
  初始值为0%, 0%，也就是原点
  只指定一个值，表示横坐标，纵坐标未指定默认值为50%，而不是说横纵坐标都使用给定的值
  比如 background-position: center 并非指定两个值都为center，而只是指定了第一个值

## background-origin
  根据盒模型，设置不同的定位参考原点
  从内到外有content-box, padding-box, border-box，初始值为padding-box
  当background-attachment为fixed，也就是相对原点变为视口左上角，background-origin无效

## background-attachment
  背景相对于视口的依附处理方式，如fixed则保持于视口中，不随内容滚动，初始值为scroll

## 图片响应占位解决方案
  - 问题：不能给固定高度
  - 利用 padding 处理高度(需给定宽度)

  ```css
	.my-element {
		overflow: hidden;
		position: relative;
	}
	.my-element:after {
		content: "";
		display: block;
		height: 0;
		padding-top: 56.25%; /* Aspect ratio = height divided width times 100 */
	}
  ```

  html - how to give image a dynamic width and height when using bootstrap responsive grid system - Stack Overflow http://stackoverflow.com/questions/23771952/how-to-give-image-a-dynamic-width-and-height-when-using-bootstrap-responsive-gri

  css - Keep div height while the image is loading - Stack Overflow http://stackoverflow.com/questions/21992210/keep-div-height-while-the-image-is-loading

## 如何用CSS画直角梯形？
  - 对外围容器应用斜切 `-webkit-transform: skewX(-10deg)`
  - 然后用margin负值或相对定位，隐藏局部
  - 若梯形内有内容，对内容应用反斜切和反向偏移

## 横向百分比布局有哪些问题？

## 如何渐进地将设计图还原？
  - 抽象公共类
  - 布局拆解，严格按 row-col 来写
  - 没有图片素材时，添加占位图
  - 要不断地拆解问题，我要解决一个怎样的小问题

## 换算问题？以宽度为基准缩放，字体也会缩放吗？

## 线性渐变
  - 0deg 相当于 to top，90deg 相当于 to right
  - color-stop 可有多个，如果不指定百分比位置，则是均匀散开
  - 支持透明度
  - 可以搭配背景图使用
  - 至少定义两种颜色，希望呈现的平稳过渡的颜色
  ```
  background: linear-gradient(to bottom, black 90%, green 95%, yellow);

  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1)), url(https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg) no-repeat;
  background-size: cover;
  ```

## 径向渐变
- 线性渐变是直线渐变，径向是圆形的渐变
- 圆只是一种特殊的椭圆
-径向渐变从圆心点以椭圆形状向外扩散，渐变的实现由两部分组成：椭圆和色标。椭圆部分用来控制径向渐变的位置、大小和形状等。而色标部分包含一个颜色值和一个位置，用来控制渐变的颜色变化
- 中心位置的值，用单词，或者都用 px，不能混用
- 应用：切角，用透明色填充

[css - Multiple gradients and radial gradient with center outside of the element - Stack Overflow](https://stackoverflow.com/a/32859121/5657916)
[Radial Gradient Recipes | CSS-Tricks](https://css-tricks.com/radial-gradient-recipes/)
[css实现平角切角和弧形切角效果 - 小圣贤君的博客 - CSDN博客](https://blog.csdn.net/zhongguohaoshaonian/article/details/77870217)

## CSS变量命名示例
[colors-by-use.md](https://gist.github.com/dbox/e7b206a04d39598e32237b5f1317ef83)

## 布局排列疑难杂症

* 固定宽高区域内，文字一行或多行，保持上下左右居中 http://codepen.io/cyio/pen/dXOzGj/?editors=0100
* 14   - 可以搭配背景图使用                                                                                      │~ CSS控制图片和文字在同一行显示且对齐的3种方法 - jingwhale - 博客园 http://www.cnblogs.com/jingwhale/p/4599327.html

* 样式的位置
理论上可以放到任意位置，但要考虑页面如何载入，通常希望 html 带样式展示，这样就需要把样式放在 body 之前

## 优化

* 推荐使用 BEM 结构，能减少类查找，降低样式计算开销
[缩小样式计算的范围并降低其复杂性  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

## 变量
* 支持回退和设置默认值
* 支持作用域和继承
* CSS 变量提供了 JavaScript 与 CSS 通信的一种途径

[CSS 变量教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
[Everything you need to know about CSS Variables – freeCodeCamp](https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855)

## Grid

新单位 fr - A flexible length 可变长度，一份

grid-column-end: -2; 计数是按边算

grid-column-end: span 2; 相对值，占用两格

grid-column: 4 / 6 缩写语法

只指定头或尾时，只占一格

grid-area: 1/2/4/6 区域简写，row / col

不规则区域，可定义多个 grid-area 解决

## clip-path
[Clippy — CSS clip-path maker](https://bennettfeely.com/clippy/)
