# ajax/http 请求库、工具

## axios

不支持设置 user agent
浏览器不允许，nodejs 应该可以，但 axios 就是不行
https://github.com/axios/axios/issues/1411
https://github.com/axios/axios/issues/1231

计划改用 superagent，理由：

> 之前测试过市面上几乎所有的 request 类型的库，也为 request 库提过一个解决内存泄露的 PR 已经合并。开始以为 axios 很好用，后来发现里面坑很多，记得当时 form-data 只能以 json 形式提交，很多国内的站不支持。后来换成了 superagent，出自 node 界传奇人物 TJ 手笔（现已叛变到 Go 阵营）， 各种问题全部能够通过配置或者使用插件解决，有很多插件上手即用，非常方便，原生支持 promise，兼容前后端，也比 axios 轻量且插件机制非常灵活，比 got 之流直观方便，功能强悍。request 就不多说了，臃肿强大略微麻烦。推荐楼主使用 superagent。或者想要简单点的直接用 isomorphic-fetch 也行。 还可以支持测试环境，直接用 supertest 测试，也是原生 promise，还是很舒服的，自此再也不用 axios 之流了。而且发现 request，axios 这类能做的 superagent 都能做，最后写出的代码是最简单直观的

```js
import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

// use
import { HTTP } from './http-common'
```

- 请求图片
  直接在浏览器打开会提示下载，估计是要返回创建新的 stream
  [javascript - Download an image using Axios and convert it to base64 - Stack Overflow](https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64)

```js
// ctx.body = request(options)
ctx.body = await axios({
  method: 'get',
  url: imgUrl,
  headers: {
    Referer: referrer
  },
  responseType: 'stream'
}).then(response => {
  return response.data
})
```

referrer 作用是识别页面，可以理解不包括 hash。如果需要 hash，可以手动在 headers 中添加 `window.location.href`

## superagent

[[翻译] SuperAgent 中文使用指南(v3.8.0) · Issue #13 · zhaoqize/blog](https://github.com/zhaoqize/blog/issues/13)

- 支持旧的回调方式，用 end
- 支持 retry

与 axios 写法对比

```js
// axios
let data = res.data
console.log(e.response.status, e.response.config)

// superagent
let data = res.body
console.log()
const [foo, bar] = await Promise.all([
  superagent.get('foo'),
  superagent.get('bar')
])
```

Promise 化

```
return new Promise((resolve, reject) => {
  superagent
    .post(params.url)
    .auth(params.auth.username, params.auth.password)
    .send(params.payload)
    .set('Accept', 'application/json')
    .end((error, res) => {
        error ? reject(error) : resolve(res);
    });
});
```

批量 Promise 化

```js
import request from 'superagent'

const withPromiseCallback = (resolve, reject) => (error, response) => {
  if (error) {
    reject({ error })
  } else {
    resolve(response.body)
  }
}

export const fetchSuggestions = search =>
  new Promise((resolve, reject) =>
    request
      .get('/api/auth/get-companies/0/50')
      .type('form')
      .set('Accept', 'application/json')
      .query({
        search
      })
      .end(withPromiseCallback(resolve, reject))
  )

export const fetchInitialInformation = () =>
  new Promise((resolve, reject) =>
    request
      .get('/api/auth/check')
      .set('Accept', 'application/json')
      .end(withPromiseCallback(resolve, reject))
  )
```
## 测试工具

- postman 不支持设置 socks5 代理
- 在线测试 [Hurl.it - Make HTTP requests](https://www.hurl.it/)

### 替代品
insomnia: 基于 Electron
[Kong/insomnia: Cross-platform HTTP and GraphQL Client](https://github.com/Kong/insomnia)

Postwoman 支持 PWA
[Postwoman • A free, fast and beautiful API request builder](https://postwoman.io/)

## 服务器工具

自动刷新功能要针对一个目录才行，因此练手项目避免采用文件夹并行，而是使用分支

http-server 简单，支持文件夹浏览，当然也就没自动刷新了
liteserver 基于 browser-sync

