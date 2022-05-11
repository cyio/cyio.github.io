# Axios

```js
axios.defaults.validateStatus = function (status) {
  // console.log('store', status)
  return status >= 200 && status < 600
}
```

## 源码

核心使用 promise 封装

```js
function request(config) {
  const {
    url = '',
    method = 'get',
    data = {}
  } = config

  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true) // 第三个参数表示是否异步，默认 true
    xhr.onload = function() {
      resolve(xhr.responseText)
    }
    xhr.send(data)
  })
}

// request({ url: '/'}).then(r => console.log(r))
```

如何兼容 node browser? 

使用适配器模式，browser 使用 xhr（判断是否存在 xhr），node 使用 http 模块

派发请求 

lib/core/dispatchRequest.js

[学习 axios 源码整体架构，打造属于自己的请求库 | 若川的博客](https://lxchuan12.gitee.io/axios/#%25E6%258E%25A8%25E8%258D%2590%25E9%2598%2585%25E8%25AF%25BB)