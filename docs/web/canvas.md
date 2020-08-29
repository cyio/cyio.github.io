# Canvas

> Canvas 是基于状态的绘制 将状态设置与确定绘制的代码分隔开

## 基础

stroke 描边

## arc 弧形

```js
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = '#000'
ctx.arc(75, 75, 50, 0, 2 * Math.PI) // 优化，把值单独提前声明
ctx.fill() // 实心，空心用 stroke
ctx.closePath()
```

[使用 HTML5 Canvas arc()绘制圆形/圆环-前端开发博客](http://caibaojian.com/html5-canvas-arc.html)
[Canvas es6 class 设置与绘制分离](https://codepen.io/jobsboris27/pen/rOzwLw/?editors=0010)
[Canvas 最佳实践（性能篇） | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2016/02/22/canvas-performance/index.html)
[HTML5 Canvas Cheat Sheet](http://cheatsheetworld.com/programming/html5-canvas-cheat-sheet/)

[Manipulating video using canvas - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
[canvas image/video playground](https://codepen.io/cyio/pen/JjXKmEQ?editors=1011)

## 实用
[blob - Copy image to clipboard using JavaScript - Stack Overflow](https://stackoverflow.com/questions/60400589/copy-image-to-clipboard-using-javascript)
copy 事件只是文字


[选择本地视频，自动生成缩略图 canvas](https://codepen.io/cyio/pen/QWNvvjX?editors=1011)

