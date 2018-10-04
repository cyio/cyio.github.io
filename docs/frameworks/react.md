# React

## 零配置环境
```sh
npm install -g create-react-app
create-react-app hello-world
```

## 为什么用

* 名称含义：re hack html
* 传统 web ，要更新一个状态，必须刷新整个页面，而重绘的伤害性体验，是传统 web 无法解决的
  - 如何追踪变化？如何按需更新？
* 组件化，解决协作，复用问题
  - VirtualDOM JS 版的 DOM ，高效渲染 DOM ，允许 diff ，允许服务端渲染
  - diff 两个 VirtualDOM 树
  - 改变节点类型，会略过 diff 

* 函数就是组件
  - 组件内任意嵌套组件
```js
const c1 = props => <h1 {...props}>hello</h1>

<c1 style={{ color: 'red' }}/>
```
> React 再加上函数式编程技巧，项目可以无往而不利

* 显示和状态分离

    用 stateless 组件来负责显示，class 组件来负责状态和逻辑

## 学习参考

[5 Steps for Learning React Application Development - Telerik Developer Network](http://developer.telerik.com/featured/5-steps-for-learning-react-application-development/)

## Virtual DOM
* 两个前提：JS 高效，DOM 操作慢
* 生成虚拟 ODM 树，对比虚拟 DOM 树，用最少的操作更新视图

## Issues

* state 计算依赖，依赖值
  ```js
  this.setState({ counter: this.state.counter + 1 });   // won't update
  this.setState(previousState => ({ counter: previousState.counter + 1 }));
	this.setState((prevState, props) => ({ counter: prevState.counter + props.addition }));
  ```
* state 可作为 props 向下传递，props 按组件树向下传递，而 state 由组件单独管理和由函数冒泡改变


## 布局总结
  1. react 宽度基于pt为单位， 可以通过 Dimensions 来获取宽高，PixelRatio 获取密度，如果想使用百分比，可以通过获取屏幕宽度手动计算。
  2. 基于flex的布局
    1. view默认宽度为100%
    2. 水平居中用alignItems, 垂直居中用justifyContent
    3. 基于flex能够实现现有的网格系统需求，且网格能够各种嵌套无bug
  3. 图片布局
    1. 通过Image.resizeMode来适配图片布局，包括contain, cover, stretch
    2. 默认不设置模式等于cover模式
    3. contain模式自适应宽高，给出高度值即可
    4. cover铺满容器，但是会做截取
    5. stretch铺满容器，拉伸
  4. 定位
    1. 定位相对于父元素，父元素不用设置position也行
    2. padding 设置在Text元素上的时候会存在bug。所有padding变成了marginBottom
  5. 文本元素
    1. 文字必须放在Text元素里边
    2. Text元素可以相互嵌套，且存在样式继承关系
    3. numberOfLines 需要放在最外层的Text元素上，且虽然截取了文字但是还是会占用空间

## JSX
### 定义

像 XML 的 JavaScript 语法扩展，用于描述包含属性的树状结构

我们只要记住 HTML 只是代码创建DOM的一种语法形式，就很容易理解 JSX。而这种使用代码构建界面的方式，完全消除了业务逻辑和界面元素之间的隔阂，让代码更加直观和易于维护。

* 组件(首字母大写)
* HTML标签(首字母小写)

### 创建和使用组件

```js
// 创建
var MyComponent = React.createClass({/*...*/});

// 使用
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

命名组件解决子组件较多的情况
* 如何使用混合子表达式
* 如何添加注释

特殊属性:
* className 替换 class
* htmlFor 替换 for


* 可使用点号对象访问方式，构成组件名
```js
const MyComponents = {
	DatePicker: function DatePicker(props) {
		return <div>Imagine a {props.color} datepicker here.</div>;
	}
}

function BlueDatePicker() {
	return <MyComponents.DatePicker color="blue" />;
}
```

* 首字母大写才会被解析为用户定义组件，否则会认为是普通 HTML 标签
```js
const components = {
	photo: PhotoStory,
	video: VideoStory
};

function Story(props) {
	const SpecificStory = components[props.storyType];
	return <SpecificStory story={props.story} />;
}
```

* 扩展属性
```js
function App1() {
	return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
	const props = {firstName: 'Ben', lastName: 'Hector'};
	return <Greeting {...props} />;
}
```

* 0 会被渲染，使用逻辑表达式前要确保条件类型是布尔值
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
## Mobx
autorun 立即执行一次
reaction(() => data, () => {}) 第一个参数返回观察数据
when(() => boolean, () => {}) 第一参数返回布尔值，为真时执行一次，然后销毁

[[干货] 使用Mobx更好地处理React数据 - 知乎专栏](https://zhuanlan.zhihu.com/p/24613915)

### 子组件较多时，如何用 mobx 传递和共享数据

眼下的做法是父子共用一个 store，缺点是相互影响，很多数据需要手动重置
正确的做法是严格从上往下传数据，下级如果要改数据，使用回调
答案是 Provider 和 inject

### 选择正确的处理方式

### mobx-react

* `Observer`是一个组件，应用`observer`到你的组件的匿名区域，接受一个无参数函数，精确返回一个组件
使用装饰器，不用关注这一点

* `onError`全局错误处理，能避免导致应用崩溃，而是打印到日志

* 哪些组件应该标记为`observer`?
所有需要渲染可观察数据的组件

* `shouldComponentUpdate`应避免使用，由于 mobx 会默认提供一个高度优化的`shouldComponentUpdate`实现

* `componentWillReact` 是自动的，mobx 的数据变化，就会响应

* `Provider`是一个组件，通过 React 的上下文机制传递 stores 给子组件，而`inject`则是选取 stores
同时使用`@inject`和`@observer`时，`@inject`写在外面

### 学习 mobx-react-todomvc

* 多了个 todoModal 类，传四个参数，store, id, title, completed
  一些 todo 操作方法，加上与对象转换的方法
* id 随机生成
* 子组件之所以能修改数据，就是从父级传下来不只是某个值，而是包括修改方法的类
