# Promise

![image.png](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h0hx0nue24j224s17gq8q.jpg)

- 内部定义一个状态，两上值，两个数组
- 提供两个方法设置状态、并依次执行回调数组/链式
- 两个方法传给外部的 fn
- then 后者依赖前者返回值

简版：
- 只考虑 resolve
```js
// let task = new Promise(rFn)
// task.then(res => {})
function Promise(exe) {
  this.state = 'pending'
  this.value = null
  this.cbs = []

  const resolve = value => {
    this.value = value
    this.state = 'fullfilled'
    this.cbs.forEach(cb => cb(value))
  }

  // 省略 reject

  exe(resolve, )
}

Promise.prototype.then = function (cb) {
  return new Promise(resolve => {
    const _cb = value => {
      const ret = cb(value) // 获取返回值，向后传递
      resolve(ret) // 链式关键
    }
    // 省略 reject cb

    if (this.state === 'fulfilled') {
      _cb(this.value)
    } else if (this.state === 'pending') {
      this.cbs.push(_cb)
    }
    // 省略 reject 分支
  })
}

// test
let sleep = ms => new Promise(r => setTimeout(() => r('sleep done'), ms))
let d = sleep(2000)
  .then(v => { console.log(1, v); return v + ' from 1'})
  .then(d => console.log(2, d))
```

```js
const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'
class Promise {
  constructor(executor) {
    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCbs = []
    this.onRejectedCbs = []

    const resolve = value => {
      // 这里不要用 function，会有 this 问题
      if (this.state !== PENDING) return

      this.state = FULFILLED
      this.value = value

      this.onFulfilledCbs.forEach(cb => cb(this.value))
    }

    const reject = reason => {
      if (this.state !== PENDING) return

      this.state = REJECTED
      this.reason = reason

      this.onRejectedCbs.forEach(cb => cb(this.value))
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      const fulfilledCb = value => {
        const _value =
          typeof onFulfilled === 'function' ? onFulfilled(value) : value

        resolve(_value) // 实现 then 的关键 1
      }
      const rejectedCb = reason => {
        const _reason =
          typeof onRejected === 'function' ? onRejected(reason) : reason

        reject(_reason)
      }
      if (this.state === FULFILLED) {
        fulfilledCb(this.value)
      } else if (this.state === REJECTED) {
        rejectedCb(this.reason)
      } else if (this.state === PENDING) {
        this.onFulfilledCbs.push(fulfilledCb) // 实现 then 的关键 2
        this.onRejectedCbs.push(rejectedCb)
      }
    })
  }
}

// test
let sleep = ms => new Promise(r => setTimeout(() => r('sleep done'), ms))
let d = sleep(2000)
  .then(v => { console.log(1, v); return v + ' from 1'})
  .then(d => console.log(2, d))
```
