
# hooks

- hooks 是一种在函数式组件内使用 state 逻辑，消除写 classes 的必要。
- vue 可以结合 mixin 来写无状态的函数式组件。mixin 的缺点是无法消费或使用另一个 mixin。导致链式逻辑难以实现。
- 更清晰定义和共享逻辑、传递 state

[Hooks are coming to Vue.js version 3.0 - LogRocket Blog](https://blog.logrocket.com/hooks-are-coming-to-vue/)
[useHooks~小窍门 - 知乎](https://zhuanlan.zhihu.com/p/66170210)

## useState

use 设置对象或数组时替换， 有别于 class 合并

除非需要替换更新的一类数据，否则都应该分开定义

[Hooks FAQ – React](https://zh-hans.reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)
[React Class features vs. Hooks equivalents • Soluto Engineering Blog](https://blog.solutotlv.com/react-class-to-hooks/)
[无意识设计-复盘 React Hook 的创造过程 · Issue #4 · shanggqm/blog](https://github.com/shanggqm/blog/issues/4)

- 调用限制：

  - 只在 top level 调用 Hooks，而不能在循环、条件或嵌套函数中使用

  - 只在 React 函数组件或自定义 Hooks 中调用，而不能在普通 JS 函数中

- useState 里数据务必为 immutable

```js
        // bad 这样无法触发更新
        setList(list.sort((a, b) => a - b));
        // good 必须传入一个新的对象
        setList(list.slice().sort((a, b) => a - b));
```

### 原理

为函数添加状态，当状态更新时，重新渲染

re-render通常发生在宏任务中

在React中，每次重新渲染组件都会执行函数组件的整个代码块，因此我们需要避免在函数组件中进行昂贵的计算或者网络请求等操作，以免影响性能。

## useEffect

- async 要用 IIFE 包起来
- 组件渲染后执行，不阻塞绘制。`componentDidMount` and `componentDidUpdate`是同步

  [react hooks 踩坑记录 | Code for fun](https://frezc.github.io/2019/03/23/react-hooks-traps/)

- 什么情况下不用？操作 DOM 且每次渲染不一样，DOM 更新后又触发 effect。用户会看到界面闪烁，只有这一种情况需要使用`useLayoutEffect`，执行在 dom 更新后，绘制前

[useEffect vs useLayoutEffect](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)

Fragment 相当于 vue 的 template

加空格方式 `{' '}`

setState 更新回调

1. componentDidUpdate
2. `setState(updater, callback)`

render return 里可直接定义变量`const ChapterName = <h2>{chapterName}</h2>;`

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/mw690/4e5d3ea7ly1hax0i773vcj20vm0l415n.jpg)

### useEffect 滥用

最好的答案就在 React 官方文档内。我们团队把它浓缩成了几个简单的规则：

1.  尽量不用 useEffect。
    
2.  若是组件内部状态（useState/useMemo/useCallback）监听，若非必要，禁止使用useEffect/useLayoutEffect触发副作用，推荐放到onClick这类事件回调中触发副作用。
    
3.  必须使用 lint 生成 hooks 的依赖项，否则需要加注释说明。
    
4.  useEffect 中若使用了资源类操作（接口请求、订阅/事件、localStorage存储等），则务必返回销毁函数。
    
5.  什么时候会用到 useEffect？需要对外部状态有相互影响的逻辑（副作用），才有必要放到useEffect/useLayoutEffect 中。

## 批判

观点：可组合性优于继承

当我们对复杂系统进行抽象时，我们并没有消除复杂性，而是移动了它。

尝试在组件的顶层进行状态更新将导致无限循环。状态更新重新运行组件。这并不意味着 DOM 更新，但它确实意味着另一个状态更新将触发另一个重新运行，这将触发一个状态更新，该状态更新将触发重新运行等等。

当您开始使用 React Context 并开始在父组件中发出更新信号时，事情会变得更加复杂。渲染级联。也许一个组件获取一些数据，一些组件重新安装，然后您再次运行状态更新，延迟了几秒钟。

VDOM 防止无关的 DOM 更新，而不是状态计算。

考虑迁移成本，依然是现实工作选择

[React Is Holding Me Hostage --- React 挟持了我](https://emnudge.dev/blog/react-hostage#memoization)
