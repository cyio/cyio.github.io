# React

## 为什么用

- 名称含义：re hack html
- 传统 web ，要更新一个状态，必须刷新整个页面，而重绘的伤害性体验，是传统 web 无法解决的
  - 如何追踪变化？如何按需更新？
- 组件化，解决协作，复用问题

  - VirtualDOM JS 版的 DOM ，高效渲染 DOM ，允许 diff ，允许服务端渲染
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

## 学习参考

[5 Steps for Learning React Application Development - Telerik Developer Network](http://developer.telerik.com/featured/5-steps-for-learning-react-application-development/)

## Virtual DOM

- 两个前提：JS 高效，DOM 操作慢
- 生成虚拟 ODM 树，对比虚拟 DOM 树，用最少的操作更新视图

## Issues

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
