# Dom 事件
[[toc]]

## 基础
- 事件阶段(eventPhase )：捕获 -> (到达)目标 -> 冒泡
- 现代浏览器默认冒泡，如果不希望这样，`e.stopPropagation()`
- 默认不使用捕获，如果想捕获，`addEventListener()`第三个参数(useCapture)设为`true`
- 冒泡允许我们利用事件委托，避免在每个子节点单独设置事件监听器
    ```
    propagation 传播，传播路径，停止传播
    preventDefault 取消事件
    CustomEvent carry data
    ```
    > 历史，IE 实现成冒泡，NetScape 实现成捕获，后期浏览器都支持了这两种事件机制

[UI Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
[测试事件阻断](https://codepen.io/cyio/pen/BaVozgb)

## 事件委托（代理）

- 问题：比如列表，如果列表项挨个绑定，内存消耗大，存在动态绑定删减问题
- 利用冒泡的原理，把事件加到父级上，触发执行效果。
- 有一个列表页，页面结构是外面一个 BODY， 里面有一万个子 DIV，每个 DIV 里面有一些文字，这些文字都不相同。需求是，点击一个 DIV，要求弹个 alert 框，将 DIV 里的文字显示出来。你会怎么做。
  > 只用给外面的元素（本题是 BODY）添加点击事件，在点击时，可以获取到引发点击事件的源元素（如某 DIV），将这个元素的文本内容弹出来即可。
- documentFragment 一个列表页，需要你往里面插入一千个 DOM，你怎么做？
  > 很多时候，你往页面中加一个 DOM，就会引起页面的重构。如果你使用遍历来逐一添加，每添加一次，页面都会重新渲染一次，这种做法会带来性能的下降。好的方式是把要添加的元素先缓存起来， 要添加时一次性添加。一般会使用 documentFragment 来进行缓存，还有些使用长的字符串（HTML 代码串）来缓存

## scroll

`scroll`的`event.target`是`document`，只能在`window/document`上监听到

## mouseout vs mouseleave

- mouseout 会冒泡，mouseleave 不会
  ```
  parent
    > child
  ```
  1. 鼠标移出 child 会触发
  2. 鼠标从 parent 可见区域移到 child 会触发

[Element: mouseleave event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
[EventListenerOptions/explainer.md at gh-pages · WICG/EventListenerOptions](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)

## mouseenter vs mouseover
- 如果目标包含子元素、且与子元素存在间距, over 会在经过间距时触发
- enter 只关心目标整体，触发一次

## dispatchEvent

- 兼容性很好
- 自定义事件与原生事件同名时，都能接收到，但触发互不影响

```js
$0.addEventListener('hi', (e) => console.log(e))

$0.dispatchEvent(new Event('hi'))

// 支持传递自定义数据
const event = new CustomEvent('build', { detail: elem.dataset.time });
```

```js
  // event loop
  // 同步任务 异步任务
  // 主线程，事件队列（微任务，宏任务）
```

parse HTML => DOMContentLoaded event => loads resources => load event

[javascript - window.onload vs document.onload - Stack Overflow](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)