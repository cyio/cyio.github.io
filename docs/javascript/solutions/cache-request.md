# 缓存请求

请实现一个 cacheRequest 方法，保证当使用 Ajax 请求相同资源时，真实网络层中，实际只发出一次请求

理解题目：
- 异步任务，需要记录请求状态
- 返回应该是 promise，便于 then 调用

思路：
- 单例 map 缓存，key/value 怎么设计
- 请求状态分两种
  - 已经完成，返回结果、promise 包装
  - 请求中，返回请求本身
- 步骤、流程

```js
// 保存 status ajax
// 如果 pending，返回 ajax
// 执行结果，需要 Promise 包装，以便外部 then 调用
function request(url) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve({ [url]: +new Date() })
    }, 400)
  )
}
const cache = new Map()

function cacheRequest(url) {
  // 1. 缓存是否存在、完成、未完成
  if (cache.has(url)) {
    let cur = cache.get(url)
    if (cur.status === 'pending') {
      return cur.req
    }
    return Promise.resolve(cur.result)
  }

  // 2. 新请求、加入缓存
  let req = request(url)
  cache.set(url, {
    status: 'pending',
    req
  })
  // 外部调用时执行
  return req
    .then(res => {
      cache.set(url, {
        status: 'fulfilled',
        result: res
      })
      return Promise.resolve(res) // 此行是否必要？
    })
    .catch(err => {
      cache.set(url, {
        status: 'rejected',
        result: err
      })
      Promise.reject(err)
    })
}

cacheRequest('v1').then(r => console.log(r))
cacheRequest('v1').then(r => console.log(r))
setTimeout(() => {
  cacheRequest('v1').then(r => console.log(r))
}, 500)
console.log(cache)
request('v1').then(r => console.log(r))

// output
// { v1: 1689565577795 }
// { v1: 1689565577795 }
// { v1: 1689565577796 }
// { v1: 1689565577795 }
```
