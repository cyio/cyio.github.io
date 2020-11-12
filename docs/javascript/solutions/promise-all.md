1. 输入可迭代数组，返回有序 resolve values
2. 全部并发完成 resolve
3. 第一个错误发生时，reject

注意点：
- 入参仅要求可遍历，不一定是异步 Promise，所以需要包起来

核心：累计 resolve count，达到 all count 时 resolve

```js
function myAll(arr) {
  return new Promise((resolve, reject) => {
    let values = []
    let resolveCount = 0
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then(value => {
          resolveCount += 1
          values[i] = value
          if (resolveCount === arr.length) {
            resolve(values)
          }
        })
        .catch(e => reject(e))
    }
  })
}

// test
const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
myAll([sleep(1000), sleep(2000)]).then(values => console.log('done: ', values))
myAll([sleep(1000), Promise.reject()]).catch(e => console.log('error'))
```
