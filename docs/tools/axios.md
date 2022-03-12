# Axios

```js
axios.defaults.validateStatus = function (status) {
  // console.log('store', status)
  return status >= 200 && status < 600
}
```

## 源码

如何兼容 node browser? 使用适配器模式，browser 使用 xhr（存在 xhr），node 使用 http 模块

派发请求 

lib/core/dispatchRequest.js
