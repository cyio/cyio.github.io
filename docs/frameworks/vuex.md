# Vuex
[[toc]]

定位：解决组件间的数据共享

## 基础

- store: state getters mutations action module
- `store` 状态的容器，响应式，当其中状态变化时，相应组件高效更新。不能直接修改（赋值），只能显式地通过`mutations`中定义的方法`commit`
- Mutations 正如其名，只是用来修改 state，只能是同步的纯函数
  Mutations 本质上是一个事件系统，由事件名称和处理函数构成
  Actions 通过 Mutations 来操作 state，使用灵活
- 调用，简单在计算属性中返回即可
- 优点，更明确地状态追踪

## 数据流动过程

> 5步：dispatch 派发 -> action 动作 -> mutations 修改 -> state 状态 -> comp 组件

![vuex.png (701×551)](https://vuex.vuejs.org/vuex.png)


- 全局实例注入

```js
import store from './store'

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```

- 在`computed`中，用对象展开符展开 store 中的对象

```js
    ...mapState({
        userInfo: 'userInfo'
    }),
```

## 何时使用

- 先不要用，需要时切换
- 数据需要在多处(如 view 之间)使用？ 官方文档，多个实例间共享
- 哪些数据？首先是隔离外部数据，把外部数据逻辑与视图内变量分离
- 其次是核心数据模型 、接口，避免与页面视图混在一起，方便管理
- store 是保持应用状态的容器，所以里边是有状态的数据
- 组件应该只呈现数据，不处理数据
- 在 React 中有容器和组件的概念。 它没有被 Vue.js 强制执行。 容器只是组件，但它们也可以从 store 获取数据并与 store 交互。 组件就在那里保存数据并渲染它。

> 我们已将应用程序分为三部分。 一部分是业务逻辑，它存在于 store 的 module 内，或者更普遍地存储在 store 内，容器元素负责获取数据并将其填充
> 到呈现组件，这些组件仅用于呈现数据。 这为我们提供了很好的模块化并支持单一责任原则。 它还提供了很好的可测试性，因为你可以自行测试此结
> 构的每个部分。 他们一起将形成某种综合测试。

[大型 Vuex 应用程序的目录结构 | Fundebug 博客](https://blog.fundebug.com/2018/06/12/large-scale-vuex-application-structures/)

[如何构建 Vue 大型应用 - 掘金](https://juejin.im/post/5cb2dabde51d456e46603e02)

[bailicangdu/vue2-elm: 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用](https://github.com/bailicangdu/vue2-elm)

vuex modules mapGetters
[vuex-namespaced-module-structure/Home.vue at master · igeligel/vuex-namespaced-module-structure](https://github.com/igeligel/vuex-namespaced-module-structure/blob/master/src/views/Home.vue)

## 状态重置

切换路由，组件销毁，vuex 不销毁，state 需重置

场景：与后端交互逻辑写到 vuex，组件只负责对数据进行渲染

> 开发业务前会确认 vuex 的 root module， 然后根据子业务功能细粒度到 child module。多个 root module 切换时，若需要保留的 state 数据，可以通过 preserveState 将其归档

> 动态装卸的问题的是当异步调用 store 方法的时候，如果模块已经卸载了的话会报找不到 action/mutation 错误

[vuejs/vuex-router-sync: Effortlessly keep vue-router and vuex store in sync.](https://github.com/vuejs/vuex-router-sync)

```js
mounted () {
  this.$store.registerModule('pushQuestions', pushQuestionsModule)
}

destroyed () {
  this.$store.unregisterModule('pushQuestions')
}
```

[vuex 闲置状态重置方案 - 掘金](https://juejin.im/post/5a4c8da3f265da43085e6c64)

## 计算缓存 vs Methods

计算属性是基于它的依赖缓存，如果定义的不是响应式依赖，将不会更新
而 method 在页面重新渲染时，总是会执行

[计算属性 - vue.js](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

## 变化检测

要让新增加的值支持响应更新，需挂到 data 已存在的属性上，不支持添加新的根级响应式属性

```js
this.$set(this.someObject, 'b', 2)
```

[深入响应式原理 - vue.js](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A3%B0%E6%98%8E%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7)

### vuex 数组拷贝

```js
computed: {
  league () {
    return store.state.league
  },
  filterItems () {
    let items = this.league.filter(league => league.matches.filter(this.filterMatch).length > 0)
    // deep clone vuex array
    items = items.map((b, idx) => Object.assign({ index: idx }, b))
    return items.map((item, index) => {
      item.matches = item.matches.filter(this.filterMatch)
      return item
    })
  }
},
```

