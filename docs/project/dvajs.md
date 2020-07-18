# dvajs

## 概念

- effect 只支持 generator 的写法。async 和 await 可以在 effect 之外用，然后在 effect 里用 yield call 去调。
  - put 用于触发 action
  - call 调用异步
  - select 从 state 取数据
- model state 何时使用，数据逻辑分离，组件共享
- 代码示例 [搭建基于 model 的卡片列表页面 · 语雀](https://www.yuque.com/ant-design/course/dsl8ee#3d56fc89)
- `*`相对于 async，`yield`相当于 await，最常配合 call/put 使用
- model 相当于 vuex
- effects

| 库     | 异步操作    | 同步操作    |       |            |                    |
| ------ | ----------- | ----------- | -     | -          | -                  |
| dva    | effects     | reducers    | *     | yield call | [put, dispatch]{type, payload} |
| vuex   | action      | mutation    | async | await      | FN                 |

- put 相当于 dispatch，只是在 effect 中使用

[使用 model · 语雀](https://www.yuque.com/ant-design/course/abl3ad)
[redux与vuex学习比较 | 杜万福的博客](https://hotwhy.github.io/2018/07/14/redux%E4%B8%8Evuex%E5%AD%A6%E4%B9%A0%E6%AF%94%E8%BE%83/)


## effect 不能用 async

- 因为redux-saga用了generator, dva只是整合了一些react技术栈的最佳实践
- async 是 generator 的语法糖？

[effect 是否支持 async/await 写法？ · Issue #1919 · dvajs/dva](https://github.com/dvajs/dva/issues/1919#issuecomment-471381766)

对于使用者来说，只是名字不一样，没有大的适应曲线

[Is there any plan to rewrite redux-saga using async-await? · Issue #987 · redux-saga/redux-saga](https://github.com/redux-saga/redux-saga/issues/987#issuecomment-301039792)

