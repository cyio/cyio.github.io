# Vuex
解决组件间的数据共享

* 全局实例注入
```
import store from './store';

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
});
```
* 在`computed`中，用对象展开符展开 store 中的对象
```
    ...mapState({
        userInfo: 'userInfo'
    }),
```

## 何时使用 Vuex
- 先不要用，需要时切换
- 数据需要在多处(如 view 之间)使用？ 官方文档，多个实例间共享
- 哪些数据？首先是隔离外部数据，把外部数据逻辑与视图内变量分离
- 其次是核心数据模型 、接口，避免与页面视图混在一起，方便管理
- store 是保持应用状态的容器，所以里边是有状态的数据
- 组件应该只呈现数据，不处理数据
- 在 React 中有容器和组件的概念。 它没有被 Vue.js 强制执行。 容器只是组件，但它们也可以从 store 获取数据并与 store 交互。 组件就在那里保存数据并渲染它。

> 我们已将应用程序分为三部分。 一部分是业务逻辑，它存在于 store 的 module 内，或者更普遍地存储在 store 内，容器元素负责获取数据并将其填充到呈现组件，这些组件仅用于呈现数据。 这为我们提供了很好的模块化并支持单一责任原则。 它还提供了很好的可测试性，因为你可以自行测试此结构的每个部分。 他们一起将形成某种综合测试。
[大型Vuex应用程序的目录结构 | Fundebug博客](https://blog.fundebug.com/2018/06/12/large-scale-vuex-application-structures/)
[如何构建Vue大型应用 - 掘金](https://juejin.im/post/5cb2dabde51d456e46603e02)
[bailicangdu/vue2-elm: 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用](https://github.com/bailicangdu/vue2-elm)

vuex modules mapGetters
[vuex-namespaced-module-structure/Home.vue at master · igeligel/vuex-namespaced-module-structure](https://github.com/igeligel/vuex-namespaced-module-structure/blob/master/src/views/Home.vue)

## 状态重置

切换路由，组件销毁，vuex 不销毁，state 需重置
场景：与后端交互逻辑写到 vuex，组件只负责对数据进行渲染

> 开发业务前会确认vuex的root module，然后根据子业务功能细粒度到child module。多个root module切换时，若需要保留的state数据，可以通过preserveState将其归档

> 动态装卸的问题的是当异步调用store方法的时候，如果模块已经卸载了的话会报找不到action/mutation错误

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
