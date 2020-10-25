# HTTP
[toc]

名词： ETag 文件指纹，如 content hash

## 浏览器缓存

- 强缓存，header -> max, cache，命中时不发网络请求
- 协商缓存，header -> modifier，先发请求，命中 返回 304

  `no-cache` = store + if change 如果存在合适的验证令牌(ETag, )，发起请求，如果资源无变化，304，不下载

  `no-store` 完全不存储，如私密文件

- 刷新，会跳过强缓存，强制刷新，协商缓存也可跳过（协商缓存本身已经是一种避免内容不更新的策略，没必要跳过强刷）

  [浏览器缓存知识小结及应用 - 流云诸葛 - 博客园](https://www.cnblogs.com/lyzg/p/5125934.html)

  [HTTP 缓存  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn)

  [HTTP caching - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)

- 不设置
  - 跳转访问 size 列 显示 disk cache 或请求详情 General 显示 Status Code: 200 OK (from disk cache)
  - 直接打开资源链接，chrome 会在请求头加上`max-age=0`，走协商缓存 显示 304，不需要再接收响应体，节省一些带宽
  - 浏览器缓存策略有差异，所以不需要缓存时，最好显式指定

- 共享代理缓存 VS 私人浏览器缓存

    共享缓存可以存在中间服务器上（只是个概念，如 cdn）

### 缓存最佳策略

- For html files, use Cache-Control: no-cache, and Etag. 协商缓存
- For js,css, and image files, set Cache-Control: public, max-age=31536000, no Etag, no Last-Modified settings. 强缓存，因为新资源 URL 一般有版本

### 缓存有效期计算

```
// freshnessLifetime
if `Cache-control: max-age=N` exist
  = N
else if `Expires` exist
  = Expires - Date
else if `Last-Modified` exist
  = (Date - Last-Modified) / 10

expirationTime = responseTime + freshnessLifetime - currentAge

responseTime 浏览器接收响应时间
currentAge = currentTime - storeTime
```

meta cache-control 不建议用，html4 标准，5 没有

[http - How do we control web page caching, across all browsers? - Stack Overflow](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers)

## HTTPS

建立在 SSL/TLS 协议上，采用了公钥加密法，基本过程是：

1. 客户端向服务器端索要并验证公钥。
2. 双方协商生成”对话密钥”。
3. 双方采用”对话密钥”进行加密通信

CORS 处理非简单请求（如 POST）会触发 options

  [减少 options 请求次数 和 数据量大时前端渲染的处理 - wanwan5856 的博客 - CSDN 博客](https://blog.csdn.net/wanwan5856/article/details/79592681)

简单请求的定义，来自 MDN，不是标准。简单请求要满足一系列条件，如仅使用 CORS 安全 请求头。而需求 prelight 的请求，意味着涉及用户数据

## 返回状态码

助记：1-5 / I OR CS

```
1xx 信息 Information(I)
2xx 成功 OK(O)
3xx 重定向 Redirect(R)
4xx 客户端错误 Client Error(C)
5xx 服务端错误 Server Error(S)
```

pragma 〔计〕杂注,编译指示

交换完连接即关闭，而长连接(HTTP1.1)只有在服务端收到`Connection: close`才会关闭

- 206 - 大文件分块下载时使用
  `curl --header "Range: bytes=500-1000" https://raw.githubusercontent.com/Germey/LaravelGeetest/master/README.md`

## GET 与 POST 区别

对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）； 而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。

## 请描述 cookies、sessionStorage 和 localStorage 的区别?

1. 存储方式：cookies 存储在 http 信息的实体中，http 每次请求都会携带 cookie, cookie 在浏览器和服务器间来回传递， 后两者仅在本地保存
2. 存储大小：cookie 数据不能超过 4k; 后两者要大很多，可以达到 5M
3. 有效期：cookie 在设置的 cookie 有效期之前有效，即使浏览器或窗口关闭；sessionStorage 仅在当前浏览器窗口关闭前有效，不可持久保存；localSorage 始终有效，窗口或浏览器关闭也一直保存，可做持久数据
4. 作用域：cookie、localStorage 在所有的同源窗口中都是共享的；sessionStorage 只能在当前页面使用

sessionStorage
- 刷新或恢复页面（重新打开关闭的标签页）时，session 存在
- 创建一个新的相同 URL 页面，会创建新的 session
- 试验 https://codesandbox.io/s/992th?file=/src/index.js

## http 与 tcp 区别

- tcp 是传输层，http 是跑在 tcp 上的应用层协议

[HTTP/3 的过去、现在和未来-InfoQ](https://www.infoq.cn/article/x80uOvcRyxVYw3KVusUm)

## DNS
1. 浏览器 cache
2. 操作系统 cache
3. 路由器 cache
4. ISP 网络运营商 cache (以上递归查询 - dns 服务器)
5. root (以下 迭代查询)
6. 域
7. 权威解析服务器 - 返回 IP

流程：解析-请求-渲染

递归查询-客户端查一次，迭代查询-客户端反复查
[DNS 递归/迭代 原理 - kevin.Xiang - 博客园](https://www.cnblogs.com/xiangsikai/p/8438601.html)

[第 8 题：说一下 Http 缓存策略，有什么区别，分别解决了什么问题 · Issue #14 · lgwebdream/FE-Interview](https://github.com/lgwebdream/FE-Interview/issues/14#issuecomment-647606369)

