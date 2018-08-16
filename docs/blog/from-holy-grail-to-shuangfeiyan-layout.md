---
title: 从圣杯到双飞燕布局
date: 2015-08-04
description: 本文从零开始，探究两个布局实现过程。
---
# 从圣杯到双飞燕布局

本文从零开始，探究两个布局实现过程。

第一步，先让三个块浮动起来（脱离常规流），并设上相应的宽度。[demo](http://jsbin.com/gexazij/1/edit?html,css,output)

``` css
.main {
  float: left;
  width: 100%;
}

.sub {
  float: left;
  width: 190px;
}

.extra {
  float: left;
  width: 230px;
}
```

第二步，借助margin负边距，实现两个侧栏的定位。
我们需要把sub侧栏定位到上一行的左边，以它自身的左边界为参考线，需向左偏移一个前面兄弟元素的宽度（100%），也就是margin-left:-100%。[demo](http://jsbin.com/gexazij/2/edit?html,css,output)
这时，extra侧栏顶替原sub侧栏的位置，我们需要将它定位的上一行的右边，同样以它自身的左边界为参考线，需向左偏移一个自身的宽度，也就是margin-left:-190px。

第三步，两个侧栏定好位后，main的两边被挡，见[demo](http://jsbin.com/gexazij/3/edit?html,css,output)，这时设定padding修正，[demo](http://jsbin.com/gexazij/4/edit?html,css,output)

``` css
#bd {        
  padding: 0 230px 0 190px;   
 }
```

这时，因为main的宽度和右边界的位置发生了变化，两个侧栏的位置也跟着变了。通过相对定位对两个侧栏的位置进行修正，[demo](http://jsbin.com/gexazij/5/edit?html,css,output)

``` css
.sub {
  position: relative;        
  left: -190px; 
}
.extra {
  position: relative;        
  left: -230px;
}
```

这就是**圣杯布局**。

在第三步时，不使用相对定位，而是给main添加一个子块main-wrapper，并设定左右margin修正其显示。这样做，不会改变其父容器main的宽度和右边界，也就不会影响两个侧栏的定位。[demo](http://jsbin.com/gexazij/6/edit?html,css,output) 
这就是**双飞燕布局**，它不需要再对侧栏进行二次的相对定位。圣杯的两个杯柄变成了自由的燕子。图示：
![双飞燕布局](http://ww2.sinaimg.cn/large/4e5d3ea7gw1eu8p0vwc9uj20lx06jgmj.jpg)

对调extra和main-wrap，[demo](http://jsbin.com/gexazij/7/edit?html,css,output)

``` css
.extra {
  margin-left: -100%;
  position: relative;
  left:190px;
}
```

引用下原作者的总结：

> 优点
> 实现了内容与布局的分离，即Eric提到的Any-Order Columns.
> main部分是自适应宽度的，很容易在定宽布局和流体布局中切换。
> 任何一栏都可以是最高栏，不会出问题。
> 需要的hack非常少（就一个针对ie6的清除浮动hack:_zoom: 1;）
> 在浏览器上的兼容性非常好，IE5.5以上都支持。
> 不足
> main需要添加一个额外的包裹层。

附一个原文的有效链接 [双飞翼布局介绍-始于淘宝UED_慕课问答](http://www.imooc.com/wenda/detail/254035)

基于双飞燕布局的扩展，
两栏布局（移除extra） [demo](http://jsbin.com/gexazij/8/edit?html,css,output)
一个侧栏，上下叠加（为sub设置高度，并设置extra的相对定位top）[demo](http://jsbin.com/gexazij/9/edit?html,css,output)
侧栏在右 [demo](http://jsbin.com/gexazij/10/edit?html,css,output)
上下两栏 [demo](http://jsbin.com/gexazij/11/edit?html,css,output)

最后，自由自在地布局，而不用调整HTML。图：
![](http://ww2.sinaimg.cn/large/4e5d3ea7gw1eur05432k7j20qm0izjst.jpg)
[关于双飞翼布局几个补充布局](http://cyio.github.io/HTML-Practices/%25E5%258F%258C%25E9%25A3%259E%25E7%25BF%25BC%25E5%25B8%2583%25E5%25B1%2580/index.html)

两栏实例：[两栏布局，左侧定宽，右侧伸缩](http://codepen.io/cyio/pen/OWPXro)

需要注意的衍生问题：
* footer 要清除浮动
* 写媒体查询，页面宽度写成定宽时，因为 main 继承父容器的宽度，也要写成绝对值，即页面定宽减去侧栏宽度
