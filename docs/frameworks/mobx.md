# Mobx

- autorun 立即执行一次
- reaction(() => data, () => {}) 第一个参数返回观察数据
- when(() => boolean, () => {}) 第一参数返回布尔值，为真时执行一次，然后销毁

[[干货] 使用 Mobx 更好地处理 React 数据 - 知乎专栏](https://zhuanlan.zhihu.com/p/24613915)

## 子组件较多时，如何用 mobx 传递和共享数据

眼下的做法是父子共用一个 store，缺点是相互影响，很多数据需要手动重置

正确的做法是严格从上往下传数据，下级如果要改数据，使用回调

答案是 Provider 和 inject

## mobx-react

- `Observer`是一个组件，应用`observer`到你的组件的匿名区域，接受一个无参数函数，精确返回一个组件
  使用装饰器，不用关注这一点

- `onError`全局错误处理，能避免导致应用崩溃，而是打印到日志

- 哪些组件应该标记为`observer`?
  所有需要渲染可观察数据的组件

- `shouldComponentUpdate`应避免使用，由于 mobx 会默认提供一个高度优化的`shouldComponentUpdate`实现

- `componentWillReact` 是自动的，mobx 的数据变化，就会响应

- `Provider`是一个组件，通过 React 的上下文机制传递 stores 给子组件，而`inject`则是选取 stores
  同时使用`@inject`和`@observer`时，`@inject`写在外面

## 学习 mobx-react-todomvc

- 多了个 todoModal 类，传四个参数，store, id, title, completed
  一些 todo 操作方法，加上与对象转换的方法
- id 随机生成
- 子组件之所以能修改数据，就是从父级传下来不只是某个值，而是包括修改方法的类

