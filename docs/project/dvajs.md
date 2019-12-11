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

| 库     | 异步操作    | 同步操作    |
| ------ | ----------- | ----------- |
| dva    | effects     | reducers    |
| vuex   | action      | mutation    |

[redux与vuex学习比较 | 杜万福的博客](https://hotwhy.github.io/2018/07/14/redux%25E4%25B8%258Evuex%25E5%25AD%25A6%25E4%25B9%25A0%25E6%25AF%2594%25E8%25BE%2583/)

