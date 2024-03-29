# React
[[toc]]

## 为什么用

- 名称含义：re hack html
- 传统 web ，要更新一个状态，必须刷新整个页面，而重绘的伤害性体验，是传统 web 无法解决的

  如何追踪变化？如何按需更新？

- 组件化，解决协作，复用问题

  - VirtualDOM：JS 版的 DOM ，高效渲染 DOM（diff） ，允许服务端渲染
  - diff 两个 VirtualDOM 树
  - 改变节点类型，会略过 diff

- 函数就是组件
  - 组件内任意嵌套组件

```js
const c1 = props => <h1 {...props}>hello</h1>

<c1 style={{ color: 'red' }}/>
```

> React 再加上函数式编程技巧，项目可以无往而不利

- 显示和状态分离

  用 stateless 组件来负责显示，class 组件来负责状态和逻辑

## 是什么

最简单的理解，一个组件的[渲染函数](https://www.zhihu.com/search?q=%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A111370024%7D)就是一个基于 state 和 props 的[纯函数](https://www.zhihu.com/search?q=%E7%BA%AF%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A111370024%7D)，state 是自己的，props 是外面来的，任何东西变了就重新渲染一遍，

## 参考

[5 Steps for Learning React Application Development - Telerik Developer Network](http://developer.telerik.com/featured/5-steps-for-learning-react-application-development/)

## Virtual DOM

- 两个前提：JS 高效，DOM 操作慢
- 生成虚拟 DOM 树，更新时对比，用最少的操作更新视图

## state

- state 计算依赖，依赖值

  ```js
  this.setState({ counter: this.state.counter + 1 }) // won't update
  this.setState(previousState => ({ counter: previousState.counter + 1 }))
  ```

- state 可作为 props 向下传递，props 按组件树向下传递，而 state 由组件单独管理和由函数冒泡改变

## 布局总结

1. react 宽度基于 pt 为单位， 可以通过 Dimensions 来获取宽高，PixelRatio 获取密度，如果想使用百分比，可以通过获取屏幕宽度手动计算。
2. 基于 flex 的布局
   1. view 默认宽度为 100%
   2. 水平居中用 alignItems, 垂直居中用 justifyContent
   3. 基于 flex 能够实现现有的网格系统需求，且网格能够各种嵌套无 bug
3. 图片布局
   1. 通过 Image.resizeMode 来适配图片布局，包括 contain, cover, stretch
   2. 默认不设置模式等于 cover 模式
   3. contain 模式自适应宽高，给出高度值即可
   4. cover 铺满容器，但是会做截取
   5. stretch 铺满容器，拉伸
4. 定位
   1. 定位相对于父元素，父元素不用设置 position 也行
   2. padding 设置在 Text 元素上的时候会存在 bug。所有 padding 变成了 marginBottom
5. 文本元素
   1. 文字必须放在 Text 元素里边
   2. Text 元素可以相互嵌套，且存在样式继承关系
   3. numberOfLines 需要放在最外层的 Text 元素上，且虽然截取了文字但是还是会占用空间

## JSX

### 定义

像 XML 的 JavaScript 语法扩展，用于描述包含属性的树状结构

我们只要记住 HTML 只是代码创建 DOM 的一种语法形式，就很容易理解 JSX。而这种使用代码构建界面的方式，完全消除了业务逻辑和界面元素之间的隔阂，让代码更加直观和易于维护。

- 组件(首字母大写)
- HTML 标签(首字母小写)

## 原理

JSX的基本原理是将类似HTML的标记转换为JavaScript对象

### 创建和使用组件

```js
// 创建
var MyComponent = React.createClass({
  /*...*/
})

// 使用
var myElement = <MyComponent someProperty={true} />
ReactDOM.render(myElement, document.getElementById('example'))
```

命名组件解决子组件较多的情况

- 如何使用混合子表达式
- 如何添加注释

特殊属性:

- className 替换 class
- htmlFor 替换 for

可使用点号对象访问方式，构成组件名

```js
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />
}
```

首字母大写才会被解析为用户定义组件，否则会认为是普通 HTML 标签

```js
const components = {
  photo: PhotoStory,
  video: VideoStory
}

function Story(props) {
  const SpecificStory = components[props.storyType]
  return <SpecificStory story={props.story} />
}
```

扩展属性

```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />
}

function App2() {
  const props = { firstName: 'Ben', lastName: 'Hector' }
  return <Greeting {...props} />
}
```

`0`会被渲染，使用逻辑表达式前要确保条件类型是布尔值

```js
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>

<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

## render 中绑定函数提到外面

官方解答，使用箭头函数是 OK 的，在你遇到性能问题之前

[Passing Functions to Components – React](https://reactjs.org/docs/faq-functions.html)

原理：创建新函数，意味着 prop 值每次变化，进而不必要地 re render 子组件

1. 外提箭头函数赋值

```js
handleClick = () => {
  console.log('clickity')
}
```

2. 在构造器中统一绑定

```js
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clickity');
  }
```

3. 解决绑定传参，拆分组件

   [Don't Use Bind When Passing Props](https://daveceddia.com/avoid-bind-when-passing-props/)

## learn

state 每个组件私有

当需要获取多个子组件数据，或两个组件需要相互通讯，state 提升到父组件

受控组件

> 受控”与“非受控”两个概念，区别在于这个组件的状态是否可以被外部修改。一个设计得当的组件应该同时支持“受控”与“非受控”两种形式，即当开发者不控制组件属性时，组件自己管理状态，而当开发者控制组件属性时，组件该由属性控制。而开发一个复杂组件更需要注意这点，以避免只有部分属性受控，使其变成一个半受控组件。
> [受控组件与非受控组件 · 语雀](https://www.yuque.com/ant-design/course/goozth)

不可变数据：

- 跟踪更容易
- 优势，帮助创建 pure components，变化时机 --> 确定重新渲染
- 只有 render，不含私有数据(state)，写成函数组件更简单

  ```js
  const NoStateComp = props => (
    <div onClick={props.onClick}>{props.children}</div>
  )
  ```

- React 元素 对象 一等公民 参数传递

- 动态列表，指定 key，且 key 一般不要用数组索引

- 组合，no 继承

- 大型 webapp 首选

- 组件划分原则，单一职责

- 渲染 UI vs 添加交互

  大量编码 vs 大量细节

- prop vs state

  构建静态版本时，不需要 state

- 小型 vs 大型

  自下而上 vs 自上而下

state 需要定义的最少数据

创建新上层组件理由，需要存放共同 state

- class ==> hook why
  - 组件复用，抽象层嵌套地域
  - 生命周期，不相关逻辑分散
  - class this 理解难度大

## 生命周期

[React lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### componentDidUpdate

- 组件更新后立即调用，首次渲染不调用
- 用于网络请求导致 props 变化等
- 注意，执行操作要有条件，避免死循环

## 组件演化

![image.png](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7ly1gikjo188z2j21q80x8gs0.jpg)

## PropTypes
默认非必须，即允许 null / undefined

## Portal 

脱离父组件的渲染，不受父级布局影响，常用于模态对话框、悬浮菜单

仅影响 DOM 结构，不影响事件、生命周期、组件树

## React.memo vs useMemo
类型，顶层 api，hooks
第二参数，比较函数（是否相等），依赖数组

避免受
```js
const propsAreEqual = (prevProp: any, nextProp: any) => {
  const result = JSON.stringify(prevProp) === JSON.stringify(nextProp);
  return result;
};

React.memo(Comp, propsAreEqual);
```

useMemo 缓存计算值，仅依赖变化时重新计算

## React diff 算法

- 不同元素类型，旧元素卸载，挂载新元素
- 相同类型的 DOM 元素，只更新属性
- 相同类型的 Component 元素，更新 prop
- DOM 子元素遍历比较，顺序发生变化会全部认为 diff，可用 key 显式指明是否是同一元素

[Reconciliation – React](https://reactjs.org/docs/reconciliation.html)
[React的思考（五）- Reconciliation - NO END FOR LEARNING](http://benweizhu.github.io/blog/2018/04/22/deep-thinking-in-react-5/)

不可变数据优势 [入门教程: 认识 React – React](https://zh-hans.reactjs.org/tutorial/tutorial.html#why-immutability-is-important)
- 易于实现复杂特性，如撤销和恢复

## 懒加载

React.lazy 配合 Suspense

suspense 暂停、未确定

- [ ] [React18 并发原理 | promise96319](https://www.qinguanghui.com/articles/react-concurrency#_6-%25E5%25B0%258F%25E7%25BB%2593)

## setState 何时同步、何时异步

与 Vue 原理一样，由于是状态驱动视图，如果 state 短时间内频繁设置，是否要立刻响应渲染呢？当然不是，所以要在一次同步代码执行完、合并更新，在 React 中是等父子组件的内置事件监听器中的 setState 全部执行完。

## nextjs

[[next]]

## streaming

原理就是通过在服务端渲染 React 组件，并将渲染结果以流的形式传输给客户端，从而实现更快的页面加载速度和更好的用户体验

1. 服务端渲染
2. 分块传输
3. 前端渲染，浏览器原生的流解析器

## tic-tac-toe 井字游戏

规则：玩家交替出子，连成直线算赢家，平局

学到什么：
- 组件拆成三层（Game 历史记录-> Board 游戏逻辑-> Square）分别有不同职责
- 如果 JSX 要写很多逻辑，可以拆成一个方法，比如 `list  = history.map(x => <div>x</div>)`
- 什么情况下用 state，什么情况下用普通变量：判断规则，仅用户操作涉及的改变用 state
- 数据结构设计（棋局、历史记录）
- 计算有效直线算法：穷举所有解，用二维数组表示，遍历是否存在满足条件
- 为什么数据不可变，要 slice 一份
[react-tic-tac-toe - CodeSandbox](https://codesandbox.io/s/react-tic-tac-toe-3mqsqt?file=/App.js)