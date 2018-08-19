# 事件

## 事件委托（代理）
* 问题：比如列表，如果列表项挨个绑定，内存消耗大，存在动态绑定删减问题
* 利用冒泡的原理，把事件加到父级上，触发执行效果。

## scroll

scroll 的 event.target 是 document，只能在 window/document 上监听到
