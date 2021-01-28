# 发布-订阅
三个角色：
1. 发布者
2. 订阅者
3. 事件调度中心

发布者与订阅者，松耦合

once 执行后即 off 掉

```js
// const e = new Event()
// e.on('hi', (payload) => console.log('click', payload))
// e.emit('hi', 'jack')

class Event {
  events = {} // { type: [] }

  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push(cb)
    // ;(this.events[type] || (this.events[type] = [])).push(cb)
  }

  emit(type, payload) {
    let cbs = this.events[type]
    if (cbs) {
      cbs.forEach(cb => cb(payload))
    }
  }

  off(type, cb) {
    let cbs = this.events[type]
    if (cbs) {
      let index = cbs.findIndex(i => i === cb)
      if (index > -1) {
        cbs.splice(index, 1)
      }
    }
  }

  once(type, cb) {
    let self = this
    function onceCb() {
      self.off(type, onceCb) // 里边不能直接用 this
      cb.apply(self, arguments)
    }
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push(onceCb)
    // ;(this.events[type] || (this.events[type] = [])).push(onceCb)
  }
}

let e = new Event()
let cb = payload => console.log('hi', payload)
let onceCb = payload => console.log('once', payload)
e.on('hi', cb)
e.once('hi', onceCb)
//   e.off('hi', cb)
e.emit('hi', 'jack')
e.emit('is once', 'jack')
e.emit('is once', 'jack')
```

参考：vue/src/core/instance/events.js
[从一道面试题简单谈谈发布订阅和观察者模式_佛系前端 - SegmentFault 思否](https://segmentfault.com/a/1190000021272622)

