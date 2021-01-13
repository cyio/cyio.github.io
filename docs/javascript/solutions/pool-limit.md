# 并发限制

## 简版原理

```js
function get(i) {
  console.log('In ', i)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i * 1000)
      console.log('Out', i, 'Out')
    }, i * 1000)
  })
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let count = 0
function run() {
  if (count < 3 && list.length) {
    count += 1
    get(list.shift()).then(() => {
      count -= 1
      run()
    })
  }
}

for (let i = 0; i < 3; i++) {
  run()
}
```

## 调度器实现
思路：某一任务完成后递归调用
优化点：finally
```js
  class Scheduler {
    list = []
    limit = 2
    doingNum = 0

    // 传入待执行的 Promise
    add(p) {
      this.list.push(p)
    }

    start() {
      for(let i = 0; i < this.limit; i++) {
        this.runNext()
      }
    }

    runNext() {
      if (this.doingNum < this.limit && this.list.length) {
        this.doingNum += 1
        this.list.shift()().then(() => {
          this.doingNum -= 1
          this.runNext()
        })
      }
    }
  }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  let scheduler = new Scheduler()
  const addTask = (time, order) => {
    scheduler.add(() => sleep(time).then(() => console.log(order)))
  }
  // 异步任务模拟
  addTask(1000, 1)
  addTask(500, 2)
  addTask(300, 3)
  addTask(400, 4)
  
  scheduler.start() // 2, 3, 1, 4
```

race 版

[头条前端面试题之 Promise 并发数限制\_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/video/av286259685/)
[sindresorhus/p-limit: Run multiple promise-returning & async functions with limited concurrency](https://github.com/sindresorhus/p-limit)
[sindresorhus/promise-fun: Promise packages, patterns, chat, and tutorials](https://github.com/sindresorhus/promise-fun)
