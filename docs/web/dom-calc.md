# DOM 计算

## 坐标、距离

- clientX/Y
- screenX/Y

```js
/**
 * 获取鼠标相对于canvas画布的位置
 **/
function getPosition(e) {
  var rect = e.currentTarget.getBoundingClientRect(),
    touch,
    po
  if (this.clientType === 'mobile') {
    touch = e.touches[0]
    //console.log(touch);
    po = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    }
  } else {
    po = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  return po
}
```

这里我们也可以使用 offsetX/Y 来获取鼠标相对元素的位置信息，只不过需要注意一点的是，offsetX/Y 得到的是相对元素 padding box 的相对位置，和通过 clientX/Y-rect.left/top 得到的是相对元素 border box 得到的相对位置。

## `getBoundingClientRect`和`getClientRects`异同

- bounding 界限 rectangle 矩形
- 注意 right 和 bottom 是按左上边计算
- 这两个函数对 block 元素得到的结果相同，只不过 getClientRects()得到的是一个数组。对于 inline 元素来说，如果 inline 元素跨行后，每行都会形成一个 DOMRect，因此 getClientRects()会得到多个 DOMRect 的位置大小信息组成的数组。而 getBoundingClientRect()会得到包围所有 DOMRect 的最小矩形的位置大小信息。
  [DOM tests - rectangles](https://www.quirksmode.org/dom/tests/rectangles.html)
