# 缓存请求

请实现一个 cacheRequest 方法，保证当使用 Ajax 请求相同资源时，真实网络层中，实际只发出一次请求

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
  if (cache.has(url)) {
    let cur = cache.get(url)
    if (cur.status === 'pending') {
      return cur.req
    }
    return Promise.resolve(cur.res)
  }
  // 无缓存请求
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
        res
      })
      return Promise.resolve(res)
    })
    .catch(err => {
      cache.set(url, {
        status: 'rejected',
        err
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
request('v2').then(r => console.log(r))
```
