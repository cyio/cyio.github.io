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

## 参考

[5 Steps for Learning React Application Development - Telerik Developer Network](http://developer.telerik.com/featured/5-steps-for-learning-react-application-development/)

## Issues

* state 计算依赖，依赖值
  ```js
  this.setState({ counter: this.state.counter + 1 });   // won't update
  this.setState(previousState => ({ counter: previousState.counter + 1 }));
	this.setState((prevState, props) => ({ counter: prevState.counter + props.addition }));
  ```
* state 可作为 props 向下传递，props 按组件树向下传递，而 state 由组件单独管理和由函数冒泡改变
