# dvajs

## 概念

* effect 只支持 generator 的写法。async 和 await 可以在 effect 之外用，然后在 effect 里用 yield call 去调。
    - put 用于触发 action
    - call 调用异步
    - select 从 state 取数据

