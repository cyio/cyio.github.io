# 观察者
两个角色：
1. 目标（被观察者）
	  - 维护观察者列表（收集依赖？）
	  - 添加观察者
	  - 通知观察者更新
1. 观察者
	  - 允许传入业务回调
	  - 提供 update 方法供目标调用
	  - update 内执行业务回调

```js
  //   const observerCallback = function() {
  //     console.log('我被通知了')
  //   }
  //   const observer = new Observer(observerCallback)

  //   const subject = new Subject();
  //   subject.addObserver(observer);
  //   subject.notify();

  class Observer {
    constructor(cb) {
      this.cb = cb
    }

    update() {
      this.cb()
    }
  }

  class Subject {
    constructor() {
      this.list = []
    }

    addObserver(observer) {
      this.list.push(observer)
    }

    notify() {
      this.list.forEach(ob=>ob.update())
    }
  }

  const observerCallback = function() {
    console.log('我被通知了')
  }
  const observer = new Observer(observerCallback)

  const subject = new Subject();
  subject.addObserver(observer);
  subject.notify();
```

扩展：Vue 中 Dep 为主，Watcher 为从
[第 29 题：聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的 · Issue #34 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/34#issuecomment-519823665)
[渲染函数的观察者与进阶的数据响应系统 - Vue技术内幕](http://caibaojian.com/vue-design/art/8vue-reactive-dep-watch.html)
