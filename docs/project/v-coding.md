## 概述
* 两个页面，项目列表页，任务页
## 数据共享
```js
let store = {
  state: {
    user: {},
    ...
  },
  setUser(data) {
    this.state.user = data
  }
  ...
}
```
## 快照功能
或者叫情景恢复，在v-coding中，期望实现两点需求：
1. 离开时为项目列表，则再次打开时进入项目列表
2. 离开时为某项目的任务页，则再次打开时恢复之

实现思路是用对象存储状态信息，然后存入后台页面的localStorage

``` js
let bg = chrome.extension.getBackgroundPage();

bg.snapshot = {
  view: this.publicState.currentView,
  id: id,
  name: name
}
```
## 数据模型
数据缓存与恢复，组件间数据共享
## 任务组件
使用过滤处理后的数据
```js
filterTodos() {
  const todos = this.todos
  if (!todos) return
  if (this.visibility === 'all') {
    return todos;
  } else if (this.visibility === 'processing') {
    return todos.filter(todo => !todo.status);
  } else {
    return todos.filter(todo => todo.status);
  }
},
```
