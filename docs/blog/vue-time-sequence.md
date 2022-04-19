---
title: Vue 生命周期几问
date: 2019-06-11
description:
---
# Vue 生命周期几问

时序问题是我们开发过程中经常遇到的问题，比如异步代码执行顺序，组件加载销毁顺序等，涉及时序的代码思考不周，比较容易出 bug，解决起来费时间。本文谈几个 Vue 生命周期常见问题。

## 在哪个生命周期发起数据请求

在哪个生命周期最早能访问 props 和 data？

在哪个生命周期最早能访问 DOM？如何访问？

beforeCreate 可以最早调用接口。但实例未创建，无法访问 data。在 vuex/vue-router 中常用。所以，数据请求一般写在 created 中。

[vue.js - Which VueJS lifecycle hook must Asynchronous HTTP requests be called in? - Stack Overflow](https://stackoverflow.com/questions/49577394/which-vuejs-lifecycle-hook-must-asynchronous-http-requests-be-called-in)

## 同组件新旧实例生命周期顺序

问题：新实例创建时，旧实例完成销毁了吗？

在项目中遇到这个场景，以为新实例创建要在旧实例销毁后才会执行。其实不然，新实例创建钩子可能先于旧实例销毁钩子。

推理：没有必要等旧实例销毁，因为销毁钩子可能存在阻塞。

```
new created:

old beforeDestroy:
old destroyed:

new mounted
```

## 父子组件生命周期顺序

原则：从外到内，再从内到外，遵循洋葱模型。

| created | mounted | beforeDestroy | destroyed | 
| ------- | ------- | ------------- | --------- | 
| 外先    | 内先    | 外先          | 内先      | 

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

## mixins 与组件生命周期

mixins 先于当前组件

[第 78 题：Vue 的父组件和子组件生命周期钩子执行顺序是什么 · Issue #128 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/128#issuecomment-617239786)