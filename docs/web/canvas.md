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

canvas drawImage
[选择本地视频，自动生成缩略图 canvas](https://codepen.io/cyio/pen/QWNvvjX?editors=1011)

[浅谈 Canvas 渲染引擎 - 知乎](https://zhuanlan.zhihu.com/p/608415829)

## fabric.js

canvas 原生 API 是命令式的
[Introduction to Fabric.js. Part 1. — Fabric.js Javascript Canvas Library](http://fabricjs.com/fabric-intro-part-1#why_fabric)

## PixiJS

复用 WebGL，回退 canvas

## Uint8ClampedArray

`Uint8ClampedArray` 是一种类型化数组（TypedArray），它表示一个包含 8 位无符号整数的固定长度的数组。在这里，我们使用 `Uint8ClampedArray` 来存储每个像素的颜色值。

Clamped 固定的

`const imageData = new Uint8ClampedArray(400 * 400 * 4);`

在这行代码中，我们将图像的宽度和高度都设置为 400 像素，并且每个像素有 4 个颜色通道（红、绿、蓝和透明度）。因此，`400 * 400 * 4` 表示图像数据的总长度，也就是每个像素需要 4 个字节。

## OffscreenCanvas

- 不阻塞主线程
- 也不会被主线程的重任务阻塞

OffscreenCanvas 是 HTML5 新增的功能之一，它允许在后台线程中进行离屏渲染，而无需在主线程中创建和操作 DOM 元素。

OffscreenCanvas 提供了一个类似于 HTMLCanvasElement 的接口，可以在后台线程中进行图形渲染操作。它具有与 Canvas 相似的 2D 和 WebGL 绘图功能，包括绘制图形、绘制图像、使用路径进行绘制、设置样式和变换等。

与传统的 Canvas 不同，OffscreenCanvas 不直接与 DOM 进行交互，而是在离屏上下文中进行绘制操作。这意味着 OffscreenCanvas 不会阻塞主线程，因为它在后台线程中运行。这使得 OffscreenCanvas 特别适用于处理大型、复杂或需要耗时计算的图形任务。

在主线程中，可以通过调用 `transferToImageBitmap` 方法将 OffscreenCanvas 转换为 ImageBitmap 对象，然后将其绘制到主线程中的 Canvas 上。

在 Web Worker 中，可以直接使用 OffscreenCanvas 进行图形渲染操作，而无需访问 DOM 或进行与浏览器交互的操作。这使得 OffscreenCanvas 成为在 Web Worker 中进行图像处理、渲染和计算密集型任务的理想选择。

要注意的是，OffscreenCanvas 并不适用于所有的场景，特别是涉及到与 DOM 元素直接交互的情况。在一些需要直接访问 DOM 或进行用户交互的场景中，仍然需要在主线程中使用传统的 Canvas 元素。

相关API：
transferFromImageBitmap   同步渲染
transferControlToOffscreen 转移控制，不需要额外把数据转回

## 像素级操作

1. 循环中的像素操作：在循环中使用像素级操作可能会导致性能下降。可以考虑使用更高效的方法，如使用 `ctx.fillRect()` 绘制整个 canvas 区域。
    
2. 使用 TypedArray：使用 `Uint8ClampedArray` 或 `Uint8Array` 代替 `ImageData.data` 数组，可以提高性能。这些 TypedArray 可以直接操作像素数据，而不需要通过 `ImageData.data` 进行访问。
    
3. 使用 ImageBitmap：使用 `createImageBitmap()` 方法可以将图像数据转换为 `ImageBitmap` 对象，它可以更高效地进行像素级操作。然后，可以使用 `ctx.drawImage()` 将 `ImageBitmap` 绘制到 canvas 上。
    
4. 使用 web worker：如果需要进行复杂的像素级操作，可以考虑使用 web worker 进行并行计算，以避免阻塞主线程。

```js
const canvas = document.createElement('canvas');
canvas.width = 3840; // 4K 宽度
canvas.height = 2160; // 4K 高度

const ctx = canvas.getContext('2d');

// 假设你有图片的 RGBA 像素数据，存储在一个 Uint8ClampedArray 中
const imageData = new Uint8ClampedArray(width * height * 4); // 替换为实际的像素数据
// 不需要 for 循环填充？

// 创建一个 ImageData 对象，并将像素数据赋值给它
const imgData = new ImageData(imageData, width, height);

// 将 ImageData 绘制到 canvas 上
ctx.putImageData(imgData, 0, 0);

document.body.appendChild(canvas);

```

```js
const imgData = ctx.createImageData(canvas.width, canvas.height);
for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255; // R
    imgData.data[i + 1] = 0; // G
    imgData.data[i + 2] = 0; // B
    imgData.data[i + 3] = 255; // A
}
```

一个4K图有3840x2160个像素点，总共8294400个像素点。

## ImageData

底层像素数据

.data 一维类型化数组，有序 RGBA 数据

https://developer.mozilla.org/en-US/docs/Web/API/ImageData

## node load

方法1：drawImage

方法2：createImageBitmap

```javascript
const data = fs.readFileSync(pathToFile);
const bmp = await createImageBitmap(new Blob([data]));
const {width, height} = bmp;
```