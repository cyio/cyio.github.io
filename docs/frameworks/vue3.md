# Vue 3
[[toc]]

## ref 与 reactivity

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