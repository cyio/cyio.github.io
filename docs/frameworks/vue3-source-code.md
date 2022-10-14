# Vue 3 源码学习
[[toc]]

在线源码 https://vscode.dev/github/vuejs/core

## 调试
git clone git@github.com:vuejs/core.git vue3-core

## 目录结构

packages
```
.
├── compiler-core // 编译核心，抽象语法树和渲染桥接实现
├── compiler-dom // Dom 实现
├── compiler-sfc // SFC 单文件组件(.vue)的实现
├── compiler-ssr
├── global.d.ts
├── reactivity // 响应式
├── runtime-core
├── runtime-dom
├── runtime-test
├── server-renderer // 服务端渲染实现
├── shared  // package 之间共享的工具库
├── size-check
├── template-explorer
└── vue // 入口？
```

compiler、runtime 概念区别
compiler 源码到可执行代码，runtime 程序运行时

## 模块关系

```
vue - packages/vue/src/index.ts
    @vue/compiler-dom
        @vue/compiler-core
    @vue/runtime-dom
        @vue/runtime-core
```

## createApp

方法关系：
```
createRenderer
 baseCreateRenderer
   createAppAPI
```

```
// packages/runtime-core/src/renderer.ts
function baseCreateRenderer
  ...
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  }
```

createAppAPI

```
app
  use(plugin: Plugin, ...options: any[]) {
  mixin(mixin: ComponentOptions) {
  component(name: string, component?: Component): any {
  directive(name: string, directive?: Directive) {

  mount(
  unmount() {
  provide(key, value) {
```

    propsCache: new WeakMap(),

## core api - runtime

`packages/runtime-core/src/index.ts`负责将最常用方法、API 导出

defineComponent 类型 util

h - Hyperscript 参数判断，实际调用 createVNode

v-if/v-for 视为 block，可能动态变更

## reactive
![reactive 工作流程](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c884b48e88a643e2b695b3587224b51d~tplv-k3u1fbpfcp-watermark.awebp)

文件结构
```
└── src
    ├── baseHandlers.ts // 基本类型的处理器
    ├── collectionHandlers.ts  // Set Map WeakSet WeckMap的处理器
    ├── computed.ts // 计算属性，同Vue2
    ├── deferredComputed.ts // 计算属性
    ├── dep.ts // 
    ├── effect.ts // reactive 核心，处理依赖收集，依赖更新
    ├── effectScope.ts // 
    ├── index.ts
    ├── operations.ts // 定义依赖收集，依赖更新的类型
    ├── reactive.ts // reactive 入口，内部主要以 Proxy 实现
    └── ref.ts // Proxy 处理不了值类型的响应，Ref 来处理
```

ref 实现
```
ref( 默认深拷贝
  createRef(
    RefImpl(
      toReactive 对象调用 reactive，非对象直接返回
         sObject(value) ? reactive(value) : value
            createReactiveObject(mutableHandlers
                new Proxy
      get 时，触发依赖收集、追踪
        trackEffects
      set 时，触发依赖更新
        triggerEffects
```

> 官方文档：如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。

effect 作为 reactive 的核心，主要负责监听响应式数据的变化，触发监听函数的执行逻辑

> Vue 最独特的特性之一，是其非侵入性的响应性系统。数据模型是被代理的 JavaScript 对象。

原始类型响应式解决方案，转换成对象，增加`.value`，模板访问时自动解套

targetMap 记录 target object/property 和 effect 关系，二层数据结构：
```js
weakmap = {
    targetObject: map = {
        targetProperty: dep<effect array>
    }
}
```

effectStack `push -> run -> pop`

activeEffect 当前运行的 effect

记录依赖关系时，查询 activeEffect

setupResult 是 setup return 的对象

## 讨论点

数据和逻辑聚合

以功能或者职责来组织文件

新的 API 理论上会降低代码质量的最低门槛

setup 作用是为了合成生成物，供外部访问

[vue.js - When to use setup() hook of Vue Composition API - Stack Overflow](https://stackoverflow.com/a/58500917) 

## 参考
[深入响应性原理 | Vue.js](https://v3.cn.vuejs.org/guide/reactivity.html#%25E4%25BB%2580%25E4%25B9%2588%25E6%2598%25AF%25E5%2593%258D%25E5%25BA%2594%25E6%2580%25A7)
[推荐 7 个 Vue2、Vue3 源码解密分析的重磅开源项目 👍 - SegmentFault 思否](https://segmentfault.com/a/1190000039691166)

## shapeFlag

## h & render
h 函数作用 createVNode

```
render(h(xx), container)
```
[vue3有了解过吗？能说说跟vue2的区别吗？vue3和vue2区别详解 - 知乎](https://zhuanlan.zhihu.com/p/526776679)

## 虚拟 DOM 编译时优化

纯运行时 => 编译时

- 静态提升
- 更新类型标记
- 树结构打平

https://cn.vuejs.org/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom

## Fragments
不占位置，只渲染 children
```
 <fragment >
   <ChildA / >
   <ChildB / >
   <ChildC / >
 </fragment>
```
[Fragments in Vue.js - LogRocket Blog](https://blog.logrocket.com/fragments-in-vue-js/)

## defineComponent

defineComponent 本身的功能很简单，但是最主要的功能是为了 ts 下的类型推导。

