如何渲染大量数据在页面上？

## 虚拟列表

只渲染可视区域

滚动时，计算并更新开始位置和结束位置

### vue-virtual-scroll-list

使用：
resized  item mounted 时触发

场景：
- 有限数据
- 无限加载
- 横向
- 保持状态，如选中
- 聊天室，现成解决方案

原理：
滚动时通过改变 padding 的值来模拟滚动，里面的每一个 item 在滚动时被动态替换

item 固定高度，可以提前计算出总高度 padding =  item-height * 

item 高度不定，padding 初始为 0

源码：
h(type, attrs, children) 函数第三个参数是 children

item 用 _ResizeObserver_ 观测自身，触发 resized 事件

![image.png](http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7cmoka817j215e15sne6.jpg)

virtual-list-item，virtual-list-slot 多组件用 mixin 

结构

Virtual 类，虚拟列表核心计算

updateRange 更新 start/end，触发时机？head/footer resized？

![image.png](http://tva1.sinaimg.cn/large/4e5d3ea7ly1h7co3h80vnj20nq0ben0f.jpg)


https://github.dev/tangbc/vue-virtual-scroll-list

[长列表优化之虚拟列表__Vue.js - VueClub](https://www.vue-js.com/topic/5f9789724590fe0031e5927c)

[javascript - 面试题：渲染十万条数据解决方案_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000041415120)

## 懒加载

触底加载，一直追加，较常用

## 时间分片

一次性渲染是瓶颈，分批渲染