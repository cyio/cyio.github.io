
# SolidJS

语法类似 React，编译 jS over 虚拟 Dom，借鉴 Svelte

granularity 颗粒度

Signal - 状态
Memo - 缓存
Effect - 追踪

基于观察者模式

Vanishing Components 消失的组件，组件只是用来组织代码

仅支持 FunctionComponent 写法

-   React 状态变化后，通过重新执行 Render 函数体响应状态的变化。
-   Solid 状态变化后，通过重新执行用到该状态代码块响应状态的变化。

核心理念：**面向状态驱动而不是面向视图驱动**

createSignal 使用类似 useState
- 可以提到外面
- 不需要手动申明 deps 数组
- 支持条件分支
- 派生状态需要写成函数，不如 react 方便

## signal - 状态

响应式编程，收到信号后更新

不依赖渲染函数，自动追踪依赖，不需要手动声明

借鉴了React Hook的思想，同时也保留了_Vue3_的依赖收集模型

```js
const [count, setCount] = createSignal(0);
const App = () => {
  return <button onClick={() => setCount(count() + 1)}>{count()}</button>;
};
```

基于 MutationObserver

优势


原理
```js
export function createSignal(value) {
  let observed = false;
  let pending = false;
  let observers = [];
  let storedValue = value;

  const check = () => {
    if (observed) {
      if (!pending) {
        pending = true;
        Promise.resolve().then(update);
      }
    }
  };

  const update = () => {
    if (pending && observed) {
      const oldValue = storedValue;
      storedValue = value;
      pending = false;
      observers.forEach((observer) => observer[0](storedValue, oldValue));
      observers = observers.filter((observer) => {
        if (observer[1]) {
          observer[1]();
          return false;
        }
        return true;
      });
    }
  };

  const [get, set] = [() => {
    observed = true;
    check();
    return storedValue;
  }, (newValue) => {
    if (newValue === storedValue) return;
    value = newValue;
    check();
  }];

  set[Symbol.for("solidjs.dev")] = { update };

  return [get, set];
}

```


## 参考

[javascript - 精读《SolidJS》 - 前端精读专栏 - SegmentFault 思否](https://segmentfault.com/a/1190000042392152)

[浅谈前端框架原理 - 前端教程](https://www.pipipi.net/questions/16500.html)

响应式、虚拟DOM、预编译

-   React 属于应用级框架
-   Vue 属于组件级框架
-   Svelte 属于元素级框架

https://github.com/cyio/reactive-framework