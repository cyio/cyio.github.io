# 锚点跳转

三个方案：
1. a 标签，需要改造元素，没有动画
2. location.href 加给元素设置 id，URL 锚点跳转，通过 JS 控制，与第一种差不多，不用 a 标签了
3. scrollIntoView 兼容性？

## scrollIntoView

* 传布尔值，是否向顶边界对齐，默认是
* 传对象，block 指定对齐位置，behavior 是否平滑
* 存在离奇卡顿问题，原因未知
[ScrollIntoView Tests](https://codepen.io/fatmedia/pres/aNZavB)
浏览器有基本支持，IE8/Safari 只是不支持`scrollIntoViewOptions`，不能实现平滑滚动
移动端使用可能导致 fixed 元素抖动，替代用 translate

## 如何为滚动添加平滑动画
[A simple solution to a common scrolling problem](https://gist.github.com/WebReflection/ea3e833b4de07d877479)

[vue2.0模拟锚点实现定位 - CSDN博客](https://blog.csdn.net/iceking66/article/details/78211213)
