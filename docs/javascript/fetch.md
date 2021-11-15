# fetch

- fetch 相对于旧的 XHR ，主要不同即使用`Promise`
- 完整流程应该先检查状态码，与`callback`写法一致
- 返回的是`stream`，因此用`json()`方法读取是异步的
- 响应类型有三种，`basic cors opaque`，`cors`不设限制时跟`basic`一样

```js
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ q: 1 })
}).then(async res => console.log(await res.json()))

fetch('./api/some.json', { mode: 'cors' })
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      )
      return
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data)
    })
  })
  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  })

// 通过分离 status 和 json 等步骤，简化分支，关注结果
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

fetch('users.json')
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(function(error) {
    console.log('Request failed', error)
  })
```

简写

```js
fetch(url).then(res => res.json().then(console.table))
```

请求重试
```js
export function fetchRetry(url, options, n = 3) {
  return fetch(url, options)
    .then(res => {
      if (n === 1) return console.warn('fetch retry finished')
      return res.status === 403 
        ? fetchRetry(url, options, n - 1) 
        : res
    })
    .catch(error => {
      if (n === 1) throw error
      return fetchRetry(url, options, n - 1)
    })
}
```

## timeout

XMLHttpRequest / axios 默认 0，表示禁用

fetch 不支持， 可以用 race 模拟

[HTTP request timeouts in JavaScript](https://shuheikagawa.com/blog/2017/05/13/http-request-timeouts-in-javascript/)

## 参考

[Introduction to fetch()  |  Web  |  Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

[全面分析前端的网络请求方式](https://mp.weixin.qq.com/s?__biz=Mzg2NDAzMjE5NQ==&mid=2247484098&idx=1&sn=d9b077e093fef88febc36f87dfc15e8d&scene=21#wechat_redirect)
