# Promise

```js
const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'
class MyPromise {
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
    return new MyPromise((resolve, reject) => {
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
let sleep = ms => new MyPromise(r => setTimeout(() => r('sleep done'), ms))
let d = sleep(2000)
  .then(v => console.log(1, v))
  .then(d => console.log(2, d))
```
