# 观察者
两个角色：
1. 目标
  - 维护观察者列表
  - 添加观察者
  - 通知观察者更新
2. 观察者
  - 提供 update 方法供目标调用
  - update 内为业务逻辑

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

    addObserver() {
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
