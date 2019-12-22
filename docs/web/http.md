# HTTP

## 浏览器缓存

- 强缓存，header->max,cache，命中时不发网络请求
- 协商缓存，header->modifier，先发请求，命中 返回 304

  `no-cache` 如果存在合适的验证令牌(ETag)，发起请求，如果资源无变化，304，不下载

  `no-store` 完全不存储

- 刷新，会跳过强缓存，强制刷新，可以连协商缓存也跳过
  [浏览器缓存知识小结及应用 - 流云诸葛 - 博客园](https://www.cnblogs.com/lyzg/p/5125934.html)
  [HTTP 缓存  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn)

## 缓存策略

- For html files, use Cache-Control: no-cache, and Etag.
- For js,css, and image files, set Cache-Control: public, max-age=31536000, no Etag, no Last-Modified settings.

## HTTPS

建立在 SSL/TLS 协议上，采用了公钥加密法，基本过程是：

1. 客户端向服务器端索要并验证公钥。
2. 双方协商生成”对话密钥”。
3. 双方采用”对话密钥”进行加密通信

- cors 跨域处理非简单请求会触发 options，chromuim maxage 上限是 600，即 10 分钟
  [减少 options 请求次数 和 数据量大时前端渲染的处理 - wanwan5856 的博客 - CSDN 博客](https://blog.csdn.net/wanwan5856/article/details/79592681)

## 返回状态码

助记：1-5 / I OR CS

1xx 信息 Information(I)
2xx 成功 OK(O)
3xx 重定向 Redirect(R)
4xx 客户端错误 Client Error(C)
5xx 服务端错误 Server Error(S)

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

## 测试工具

- postman 不支持设置 socks5 代理
- 在线测试 [Hurl.it - Make HTTP requests](https://www.hurl.it/)

## axios

不支持设置 user agent
浏览器不允许，nodejs 应该可以，但 axios 就是不行
https://github.com/axios/axios/issues/1411
https://github.com/axios/axios/issues/1231

计划改用 superagent，理由：

> 之前测试过市面上几乎所有的 request 类型的库，也为 request 库提过一个解决内存泄露的 PR 已经合并。开始以为 axios 很好用，后来发现里面坑很多，记得当时 form-data 只能以 json 形式提交，很多国内的站不支持。后来换成了 superagent，出自 node 界传奇人物 TJ 手笔（现已叛变到 Go 阵营）， 各种问题全部能够通过配置或者使用插件解决，有很多插件上手即用，非常方便，原生支持 promise，兼容前后端，也比 axios 轻量且插件机制非常灵活，比 got 之流直观方便，功能强悍。request 就不多说了，臃肿强大略微麻烦。推荐楼主使用 superagent。或者想要简单点的直接用 isomorphic-fetch 也行。 还可以支持测试环境，直接用 supertest 测试，也是原生 promise，还是很舒服的，自此再也不用 axios 之流了。而且发现 request，axios 这类能做的 superagent 都能做，最后写出的代码是最简单直观的

## SuperAgent

[[译] SuperAgent 中文使用文档 - CNode 技术社区](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)
[好用的 HTTP 模块 SuperAgent - 简书](https://www.jianshu.com/p/98b854322260)

## 服务器工具

自动刷新功能要针对一个目录才行，因此练手项目避免采用文件夹并行，而是使用分支

http-server 简单，支持文件夹浏览，当然也就没自动刷新了
liteserver 基于 browser-sync

## 与 tcp 区别

- tcp 是传输层，http 是跑在 tcp 上的应用层协议

[HTTP/3 的过去、现在和未来-InfoQ](https://www.infoq.cn/article/x80uOvcRyxVYw3KVusUm)

## dns
1. 浏览器 cache
2. 操作系统 cache
3. 路由器 cache
4. ISP 网络运营商 cache - 以上递归查询 - dns 服务器
5. root - 以下 迭代查询
6. 域
7. 权威解析服务器 - 返回 IP

流程：解析-请求-渲染

[DNS 递归/迭代 原理 - kevin.Xiang - 博客园](https://www.cnblogs.com/xiangsikai/p/8438601.html)
