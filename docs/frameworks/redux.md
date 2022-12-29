# Redux
[[toc]]

## 基础

> 对于初学者，有大量概念需要记忆

可预测的状态容器

可预测 | 集中管理 | 易于定位 debug

### 概念
```
store
  state
  emit action
  pure reducer

  // 创建 store，绑定 reducer
let store = createStore(counterReducer)
```

介绍了适用场景 Redux is more useful when:，使用前需要思考适用场景
https://redux.js.org/tutorials/essentials/part-1-overview-concepts

action event type "domain/eventName"
Action Creators

dispatch 触发事件

reducer event listener, update state
reducer fn 实现形式不限制，if-else 也可以

getState 获取

selectors alias

### 数据流
单向数据流流程:
- state 描述某一时刻应用条件
- 基于 state 渲染 UI
- 事件触发，state 更新
- 基于新状态 re-render UI 

redux 应用数据流:
- UI 组件仅关心的数据变化时，re-render

https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow

什么时候使用 redux
> Most form state probably shouldn't be kept in Redux.

## 官方 toolkit 
configureStore

slice reducer/action 集合，某个特性

自动生成 action

thunk 转换程序，异步逻辑

createSlice 配置描述，很像 vuex 的 store 文件，内置 immer 库，支持同步写法

手写不可变更新逻辑，意外修改 state，是 redux 使用最常见错误

redux-thunk 中间件

## redux dev tool

- diff 数据项变化
![image.png](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7gy1gj1qyi2thdj20q90d0tat.jpg)

- trace 定位 action 触发位置

## redux-saga library

[Read Me · Redux-Saga](https://redux-saga.js.org/)

saga 专门处理副作用 中间件 Generator

fork 派生 用途 非阻塞任务

最终导出，rootSaga, rootReducer

takeEvery or takeLatest saga 有多个时

[https://github.com/redux-saga/redux-saga-beginner-tutorial](https://gist.github.com/cyio/627a6bbe5a3eb3c43a6630804568c59e)

