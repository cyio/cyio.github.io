# 事件

[事件介绍 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

- 现代浏览器默认冒泡，如果不想用，`e.stopPropagation()`
- 如果想捕获，`addEventListener()`第三个参数设为`true`

## 事件委托（代理）

- 问题：比如列表，如果列表项挨个绑定，内存消耗大，存在动态绑定删减问题
- 利用冒泡的原理，把事件加到父级上，触发执行效果。

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
