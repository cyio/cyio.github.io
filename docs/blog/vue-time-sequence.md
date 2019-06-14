---
title: 使用 vue 做项目开发常见的时序问题
date: 2019-06-11
description:
---
# 使用 vue 做项目开发常见时序问题

时序问题是我们开发过程中经常遇到的问题，比如异步代码执行顺序，组件加载销毁顺序等，涉及时序的代码思考不周，比较容易出 bug，解决起来费时间。本文结合 Vue 中特性，谈下笔者在项目开发中常见问题。

## beforeCreate VS created VS mounted

| beforeCreate | created                | mounted      |
| ------------ | ---------------------- | ------------ |
| 与后台交互   | ...                    | ...          |
|              | 需要访问 props 和 data | 需要访问 DOM |

- 这些生命周期里都可与后台交互，业务代码一般写在 created 中
- beforeCreate 在 vuex/vue-router 中常用

## watch 动态值

我们知道 watch 的执行条件是 watch 的值发生变化。一般是在异步代码执行后赋值，值是有变化的，watch 有效，但当这个值缓存起来（如使用 vuex），组件卸载而再次创建时，值在 watch 前已存在且没有再发生变化，我们期望的 watch 中的代码没有执行。

为解决以上问题，推荐一种笔者使用的代码组织方式，可以明确执行依赖关系

```js
// 确保动态数据绑定回调执行，vue 中使用
function ensureValueBindedFnExecute(key, callback) {
  if (this[key]) {
    callback()
  } else {
    this.$watch(key, value => {
      if (value) {
        callback()
      }
    })
  }
}

  created() {
    ensureValueBindedFnExecute.bind(this)('value', this.toExec)
    // if (this.value) {
      // this.toExec()
    // } else {
      // this.$watch('value', () => {
           // if (this.value) {
              // this.toExec()
           // }
      // })
    // }
  },
```

实际项目中使用 watch 会遇到稍复杂点的情形。笔者在项目中遇到这样一个问题，子组件 watch prop 时发现有时不执行。代码是这样的，子组件在满足开关条件后渲染，父组件有两个并行请求，请求 A 负责开关渲染子组件的条件，请求 B 负责获取要传给子组件的数据，有两种情形。一种情况是，请求 A 先完成，子组件渲染，prop 为 null，请求 B 后完成，prop 赋值发生变化，watch 执行。另一种情况是，请求 B 先完成，父组件准备好子组件需要的数据，请求 A 后完成，子组件渲染，prop 不发生变化，watch 不执行。

总结下，父组件准备好 prop 后渲染子组件，子组件中的 watch 不会触发，因为没有变化。

## 同一个组件，旧实例销毁、新实例创建时的生命周期顺序

在项目中遇到这个场景，以为新实例创建要在旧实例销毁后才会执行。其实不然，新实例创建钩子可能先于旧实例销毁钩子。

```
new created:

old beforeDestroy:
old destroyed:

new mounted
```

## 父子组件、mixins 生命周期顺序

原则：从外到内，再从内到外，mixins 先于当前组件

| created | mounted | beforeDestroy | destroyed | mixins       |
| ------- | ------- | ------------- | --------- | ------------ |
| 外先    | 内先    | 外先          | 内先      | 先于当前组件 |

父子生命周期执行顺序如下：

```
parent created:
child created:

child mounted:
parent mounted:

parent beforeDestory:
child beforeDestroy:

child destroyed
parent destroyed
```
