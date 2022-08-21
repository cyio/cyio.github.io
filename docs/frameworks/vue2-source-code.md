# Vue 源码学习
[[toc]]

## 源码
从正式发布的第一个版本读 0.01-0.03

> v0.7.0 最低版本

```js
new Vue(options)
  function ViewModel(options)
    new Compiler(this, options)
```
this 表示 vm instance,

核心流程在 compiler.js

Compiler 构造函数，原型扩展方法

有很多连续赋值

初始化元素：setupElement 确定 el，深拷贝 template 并返回 el

partial 类似 slot？
## 学习方法

源码断点
```js
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
```


`Object.defineProperty()`可以为 object 新增或修改属性

通过全局方法`Vue.use()`使用插件

  'component',
  'directive',
  'filter'

Vue 构造函数传递

initMixin 原型继承来扩展

let uid = 0
    vm._uid = uid++

vm this

unwatch 闭包

data 代理，对外接口，劫持 set 警告
prop 只读

for 优化 let i = 0, l = cbs.length

事件注册，可接收数组
      (vm._events[event] || (vm._events[event] = [])).push(fn)

[Vue2.0源码分析：Rollup构建，目录设计和整体流程](https://juejin.cn/post/6888558610923110407)

初始化主线逻辑一目了然

> Vue 实例挂载的实现 | Vue.js 技术揭秘

vnode
create diff patch

isDef isUndef helper 是否定义

observer defineReactive 封装了 Object.defineProperty
对象属性观察者，收集依赖、派发更新

数据是被观察者，setter 订阅的 watcher 触发 update

Dep 是对 Watcher 的管理

初始化、更新两个阶段，diff patch 发生在更新时

Watcher负责收集依赖，清除依赖和通知依赖

虚拟 dom 与实际 dom 解耦，能运行于非浏览器，RN/Weex 原因

diff策略
React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度
策略一（tree diff）：
    Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
策略二（component diff）：
    拥有相同类的两个组件 生成相似的树形结构，
    拥有不同类的两个组件 生成不同的树形结构。
策略三（element diff）：
    对于同一层级的一组子节点，通过唯一 key 区分。

[第 97 题：React 和 Vue 的 diff 时间复杂度从 O(n^3) 优化到 O(n) ，那么 O(n^3) 和 O(n) 是如何计算出来的？ · Issue #151 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/151#issuecomment-510311760)

[传统diff、react优化diff、vue优化diff - 简书](https://www.jianshu.com/p/398e63dc1969)

[解析vue2.0的diff算法 · Issue #2 · aooy/blog](https://github.com/aooy/blog/issues/2)

[虚拟 DOM 到底是什么？](https://juejin.cn/post/6844903870229905422#heading-7)

[关于vue的diff算法 · Issue #7 · YangPengFe1/yunydemo](https://github.com/YangPengFe1/yunydemo/issues/7)

[blog/vue中的diff算法实现[writting..].md at master · isaaxite/blog](https://github.com/isaaxite/blog/blob/master/docs/vue-analysis/vue%25E4%25B8%25AD%25E7%259A%2584diff%25E7%25AE%2597%25E6%25B3%2595%25E5%25AE%259E%25E7%258E%25B0%255Bwritting..%255D.md)

[learnVue/VirtualDOM与diff(Vue实现).MarkDown at master · answershuto/learnVue](https://github.com/answershuto/learnVue/blob/master/docs/VirtualDOM%25E4%25B8%258Ediff(Vue%25E5%25AE%259E%25E7%258E%25B0).MarkDown)

[Vue2.x源码解析系列十：Patch和Diff 算法 · Issue #33 · lihongxun945/myblog](https://github.com/lihongxun945/myblog/issues/33)人

数组观察，改写内部指针 
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods)

src/core/observer/array.js

data
    msg
        __ob__
            id
            subs

Dep.target 目标 watcher，单例，是一时间只能执行一个
watcher 是什么

Dep.target = null
const targetStack = []

obj walk for keys

mountComponent
    new Watcher(vm, updateComponent
        
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
watcher 将自身添加 vm

更新组件方法作为 getter

数据结构 quene

flushSchedulerQueue

一个页面有多个组件，数据变化了，要通知哪个组件更新？挂载某个组件时，作为此时唯一 watcher，访问到某个属性，则将 watcher 添加对属性订阅者

![异步渲染原理](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h0cm1rqqz6j20f009wmys.jpg)
![响应式原理](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h0cm3a0b3vj20eh0h8mzl.jpg)
