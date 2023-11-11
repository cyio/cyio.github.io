# Vue 3
[[toc]]

![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/mw690/4e5d3ea7ly1hhzulm48rwj235s1xuqv5.jpg)

## ref 与 reactivity

ref 用于处理简单的响应式值

模板中自动解包（仅顶级）

reactive 深层响应式

问题: reactivity 由于使用 proxy，直接对数组和对象赋值，会失去响应式

解法：
1. 只作为对象子数据使用 `obj = { arr: [] }; obj.arr = []`
2. 清空原数组，重新 push
```js
arr.length = 0 // 清空原数组
arr.push(...res) // 解构然后push进去
```

[我的 composition-api 风格指南 - 掘金](https://juejin.cn/post/7044154218977951758)

问题: 直接解构响应对象，解构出的值会丢失响应性
```js
let { author, title } = book
// fix
let { author, title } = toRefs(book)
```

## 兼容性

不支持 IE11 及其以下，原因不支持 Proxy ，且无法进行 polyfill

官方把资源投向将部分特性下发到 vue 2

## vue2 特性差异

不支持的：
- filter
- v-once

## 应用场景

- 新项目、内部项目，不需要支持 IE11，使用 Vue 3
- 新页面、复杂逻辑重构，Vue 2 + 合成 api
    1. 优势，可以使用大量第三方合成插件
    2. 便于未来升级

https://vuejs.org/guide/extras/composition-api-faq.html#can-i-use-both-apis-together

部分 api 不支持，性能开销，实现差异
[vue2 @vue/composition-api 与 Vue3 的前生今世-技术圈](https://jishuin.proginn.com/p/763bfbd68836)
[关于Vue3实践的一些问题清单 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1893083)

## 合成

Options API 不会放弃和移除，适合小项目

## 对比 Vue2

https://vue3js.cn/interview/vue/vue3_vue2.html

VUE3主要在哪些方面做了性能提升？https://www.jianshu.com/p/ab6741d8ee1c


### proxy 对比 defineProperty

原理：代理，而非劫持，返回新对象，不再遍历修改

优点：
- 性能更优：监听整个对象变化，不再是某个属性，支持新增属性
- 支持数组变更，不再 hack

缺点：
- 兼容性：chrome 49+，不支持 IE

[面试官: 实现双向绑定Proxy比defineproperty优劣如何? - 掘金](https://juejin.im/post/6844903601416978439)


## doc bot

支持中文

https://chatthing.ai/bots/a2625c1a-8012-42dc-b87d-10e3f0196306/

## API 风格

**选项式 API 是在组合式 API 的基础上实现的**

选项式 API：组件实例 为中心，面向对象，对初学者更友好

组合式 API：函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。更灵活，对响应系统理解要求更高，组织和重用能力更强大

[简介 | Vue.js](https://cn.vuejs.org/guide/introduction.html#api-styles)

考虑 react 心智迁移，用组合式

混用示例：[组合式函数 | Vue.js](https://cn.vuejs.org/guide/reusability/composables.html#using-composables-in-options-api)
和 mixin、无渲染组件、React hooks 的对比

## 代码组织

> 面条式代码更容易出现
> 
> **尤雨溪**：新的API理论上会降低代码质量的最低门槛，也可以提升代码质量的最高上限

- 以状态为中心，按功能或职责拆分 hooks
- 入口文件尽量只做组装和应用级生命周期的事情
- 不考虑复用性，也可以 useFunction 写在一个文件中

合适时机再去重构？


[更灵活的代码组织 - 组合式 API 常见问答 | Vue.js](https://cn.vuejs.org/guide/extras/composition-api-faq.html#more-flexible-code-organization)

官方示例：比如文件浏览器，useCreateFolder  data 声明、计算属性聚合在一个函数中

## setup

不能访问 this，需要显式返回模板数据

## Suspense

模板数据等待，自动化

支持两种情况
1. 异步依赖：async setup 顶级 await
2. 异步组件：async component，等拉取 JS bundle

https://codesandbox.io/s/using-suspense-and-async-setup-in-vue-3-forked-yw2q9l?file=/src/components/MyAsyncComponent.vue

高级示例：[Suspense | Vue.js](https://vuejs.org/guide/built-ins/suspense.html#combining-with-other-components)

## Provide

如果用 ref，默认子组件可以修改，解决如下

```js
    const userData = ref({
      username: 'John',
      email: 'john@example.com',
    });

    // 冻结提供的数据对象，使其只读
    provide('userData', Object.freeze(userData.value));
```

## script setup

编译时语法糖

https://www.patterns.dev/vue/script-setup