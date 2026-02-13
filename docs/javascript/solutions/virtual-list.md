# 虚拟列表

> 又名 虚拟滚动

## Why

如何渲染大量数据在页面上？

- **DOM 节点数量** - 5000 个列表项意味着成千上万的 DOM 节点,这会:
    - 占用大量内存
    - 导致页面滚动卡顿
    - 使浏览器的重排/重绘变慢
- **图片资源加载** - 即使列表渲染快,5000 张图片同时加载会:
    - 消耗大量带宽
    - 阻塞浏览器的网络请求队列
    - 导致内存占用暴增
- **初始渲染可能很快,但交互会很慢** - 虽然首次渲染 HTML 结构可能感觉快,但:
    - 滚动时会明显掉帧
    - 任何 DOM 操作都会变慢
    - 浏览器的事件处理会延迟
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
	
## 替代方案 - IntersectionObserver

原因：有些特殊场景，需要解决和维护虚拟列表带来的问题
方案：用 IntersectionObserver 维护一个可见区集合，渲染开销大的限制渲染

我的计划如下：

1. ****引入 IntersectionObserver****: 在组件的 `<script setup>` 部分，我会创建一个 `IntersectionObserver` 实例。它会观察每个图片项的容器。
    
2. ****跟踪可见项****: 当一个图片项进入或离开视口（以及我们设定的缓冲区域）时，`IntersectionObserver` 会通知我们。我会将当前可见项的 ID 添加到一个响应式的 `Set` 集合中进行跟踪。
    
3. ****修改模板****:
    

- - 我会保持 `v-for` 循环遍历整个 `imageList`，这样可以确保滚动条的长度和行为始终正确。
        
    - 在每个列表项内部，我会使用 `v-if` 指令来包裹主要的、渲染开销大的内容（如图片、进度条、复杂的状态等）。
        
    - ﻿`v-if` 的判断条件就是该项的 ID 是否存在于我们上面创建的可见项 `Set` 集合中。
        
    - 对于不在视口中的项目，`v-if` 会失败，此时我们可以渲染一个轻量级的占位符（比如一个有固定高度的 `div` 或者一个低质量的占位图），以保证列表的整体布局稳定，防止滚动时出现跳动。
        

这个方案的好处是：

- ****性能提升显著****: 大大减少了 DOM 元素的数量和复杂度，尤其是昂贵的图片渲染。
    
- ****实现简单****: 相比于手动计算滚动位置和维护虚拟列表，`IntersectionObserver` 更现代、更高效。
    
- ****符合要求****: 完全避免了引入一个“虚拟列表”库，而是使用了浏览器原生能力来达到“仅显示可视区附近图片”的目的。

比较方案：
- 代码 100 行 vs 虚拟列表
- 使用原生滚动定位能力，避免任何计算
- 用虚拟列表，如果有一些特殊依赖元素尺寸的需求，就要侵入组件来实现
https://chatgpt.com/c/69773407-81a0-8333-8851-3b674ca279d5

### IntersectionObserver 为什么高效

> **它把可见性判断从高频 JS 事件中移除，交给浏览器渲染流水线统一、批量、低频地计算，并以声明式方式把结果回调给 JS，从而避免 forced reflow 和 scroll jank。**
### 性能问题本质

1. **scroll 事件触发极其频繁**
    
    - 一次滚动可能触发几十到上百次回调
        
2. **JS 主线程参与布局相关计算**
    
    - `getBoundingClientRect()` 会依赖 layout
        
    - 容易触发 **forced reflow**
        
3. **无法全局合并**
    
    - 100 个元素 = 100 次计算
        
4. **用户代码难以正确节流**
    
    - rAF / throttle 仍然是“近似解法”
        

> 本质：**你在用 JS 模拟浏览器已经知道的信息**

## 参考

[前端多数据渲染优化 - Grewer - 博客园](https://www.cnblogs.com/Grewer/p/16084947.html)