# 虚拟列表

> 又名 虚拟滚动

## Why

如何渲染大量数据在页面上？

## 原理

只渲染可视区域

滚动时，计算并更新开始位置和结束位置

## vue-virtual-scroll-list

### 使用：
resized  item mounted 时触发

### 场景：

- 有限数据
- 无限加载
- 横向
- 保持状态，如选中
- 聊天室，现成解决方案

### 原理：

滚动时通过改变 padding 的值来模拟滚动，里面的每一个 item 在滚动时被动态替换

item 固定高度，可以提前计算出总高度 padding =  item-height * 

item 高度不定，padding 初始为 0

### 源码：

h(type, attrs, children) 函数第三个参数是 children

item 用 _ResizeObserver_ 观测自身，触发 resized 事件

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7cmoka817j215e15sne6.jpg)

virtual-list-item，virtual-list-slot 多组件用 mixin 

结构

Virtual 类，虚拟列表核心计算

updateRange 更新 start/end，触发时机？head/footer resized？

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7co3h80vnj20nq0ben0f.jpg)

[长列表优化之虚拟列表__Vue.js - VueClub](https://www.vue-js.com/topic/5f9789724590fe0031e5927c)

[javascript - 面试题：渲染十万条数据解决方案_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000041415120)

[面试题：渲染十万条数据解决方案 | Azhubaby Blog](https://blog.azhubaby.com/2022/02/09/2022-02-09-%25E6%25B8%25B2%25E6%259F%2593%25E5%258D%2581%25E4%25B8%2587%25E6%259D%25A1%25E6%2595%25B0%25E6%258D%25AE%25E8%25A7%25A3%25E5%2586%25B3%25E6%2596%25B9%25E6%25A1%2588/)

## 懒加载

触底加载，一直追加，较常用

## 时间分片

一次性渲染是瓶颈，分批渲染

## vue-virtual-scroller

grid 和 list，有不同组件

问题：
- scrollToItem 只支持 index，只能滚动该元素到屏幕顶部
- 不确定高度：参考 simple-list demo，需要用指定组件对 item 包一下，以计算 item 高度

### 源码

数据：pool

滚动: CSS transform

> 利用 transform 的 translate3d 属性来实现虚拟滚动。这样做的原因是，使用 translate3d 可以触发 GPU 加速，提高滚动的性能。它通过计算列表项的高度，并在滚动时动态地更新 transform 属性，以实现虚拟滚动的效果。

scrollToPosition 计算距离，操作 el.scrollTop
scrollDistance 计算
```js
      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0
      } else {
        scroll = Math.floor(index / gridItems) * this.itemSize
      }
```

### pool 数据丢失 

需要源码打点
[Missing elements after RecycleScroller is displayed · Issue #794 · Akryum/vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller/issues/794#issuecomment-1443121523)
[Space between items in the list is wrong · Issue #749 · Akryum/vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller/issues/749)
## 将元素滚动到可见区域

scrollIntoView
- smooth 有时看起来像卡，用默认值 instant 更好
- block 表示垂直，inline 表示水平，两者默认者不同，注意使用。
- nearest 与父元素最近的边对齐
```
images[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
```
	
## 参考

[前端多数据渲染优化 - Grewer - 博客园](https://www.cnblogs.com/Grewer/p/16084947.html)