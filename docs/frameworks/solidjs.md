
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