# HTTP
[[toc]]

[Connection management in HTTP/1.x - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x)

名词： ETag 文件指纹，如 content hash

## 浏览器缓存

http cache 设计原则

默认隐式，显式用 cache-control

请求和响应，都能带指令，有冲突时，以更严格为准

两种模型：
1. 过期模型，减少频繁请求网络往返
	Expires
	Cache-Control max-age 优先级高于上者
2. 验证模型，减少带宽开销
	条件请求
	Last-Modified 默认弱验证
	Etag 默认强验证

	建议同时提供 Etag 和 LM
	前者文件一变就变，后者在发生有意义变化时变


启发式过期，慎用，建议明确指定

如何比对 ETag 和 LM，请求时带上之前的，即 If-xxx

流程：是否命中强缓存 -> 是否命中协商缓存

[HTTP/1.1: Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html#sec13.1.5)

- 强缓存`header -> max, cache`命中时不发网络请求
- 协商缓存`header -> modifier`先发请求，命中 返回 304

  `no-cache` = store + if change 如果存在合适的验证令牌(ETag)，发起请求，如果资源无变化，304，不下载

  `no-store` 完全不存储，如私密文件

- 刷新(F5)，跳过强缓存，但是会检查协商缓存（协商缓存本身已经是一种避免内容不更新的策略，没必要跳过强刷）
- 强制刷新(Ctrl + F5)，跳过强缓存和协商缓存

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


### 内存缓存

根据 HTTP 缓存控制头的设置，JavaScript 资源可以在浏览器内存缓存中存储的时间不同。如果资源的缓存策略设置为“no-cache”或“no-store”，则浏览器不会将资源缓存在内存中。如果资源的缓存策略设置为“max-age”或“expires”，则资源可以在浏览器内存缓存中存储一段时间，通常为几分钟到几个小时。

HTTP 响应头中的 age 和 max-age 是用于控制缓存的两个参数，它们有以下区别：

```
age: 11430
alt-svc: quic="218.68.136.42:443"; ma=300; v="44,43,39"
content-encoding: br
content-md5: K4R9wAwG1m3bEjwhE8eZuQ==
content-type: application/javascript
date: Tue, 07 Mar 2023 10:23:00 GMT
etag: "2b847dc00c06d66ddb123c2113c799b9"
expires: Fri, 10 Mar 2023 07:06:09 GMT
last-modified: Tue, 07 Mar 2023 07:06:04 GMT
```

以上信息中有 expires 字段，标记 3 天后失效？

age：表示 HTTP 响应从服务器发送到客户端的时间，即响应的年龄。当客户端收到响应后，会计算出 age 参数值，并与 max-age 进行比较，用于判断响应是否过期。

max-age：表示 HTTP 响应的最大缓存时间（以秒为单位），即客户端可以在这段时间内使用缓存的响应，而不需要向服务器发送新的请求。当客户端请求某个资源时，会先检查缓存中是否存在该资源，并计算出它的 age 值。如果 age 的值小于 max-age，则客户端可以使用缓存的响应，否则需要向服务器发送新的请求。

## HTTPS

建立在 SSL/TLS 协议上，采用了公钥加密法，基本过程是：

1. 客户端向服务器端索要并验证公钥。
2. 双方协商生成”会话密钥”。
3. 双方采用”会话密钥”进行加密通信

数据通信 对称加密
签名 非对称加密

SSL 握手
s => send pubkey => c
c => 生成对称加密 session key ，并用 pubkey 加密 => s 用私钥解密
之后使用对称加密 key 数据传输

[Does SSL and TLS use asymmetric encryption? - Quora](https://www.quora.com/Does-SSL-and-TLS-use-asymmetric-encryption)

## CORS

CORS 处理非简单请求（如 POST）会触发 options


Access-Control-Max-Age 指定 prelight 请求缓存多长时间，这个时间内不再需要发
  [减少 options 请求次数 和 数据量大时前端渲染的处理 - wanwan5856 的博客 - CSDN 博客](https://blog.csdn.net/wanwan5856/article/details/79592681)

简单请求的定义，来自 MDN，不是标准。简单请求要满足一系列条件，如仅使用 CORS 安全 请求头。而需要 prelight 的请求，意味着涉及用户数据

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

- 用途
- 参数形式
- 编码
- 安全性

对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）； 而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。

get 只读，cdn 缓存

post 副作用，需要 web 服务器操作

100 continue 并非 post 必然使用，使用场景是 post/put，发送大量数据场景的请求优化

[When curl sends 100-continue | Georg's Log](https://gms.tf/when-curl-sends-100-continue.html)
[post 相比get 有很多优点，为什么现在的HTTP通信中大多数请求还是使用get？ - 知乎](https://www.zhihu.com/question/31640769)

### get url 长度限制

服务器截断 8kb
IE 2kb
chrome 2MB
firefox 不限制

实测，超过 10kb 可正常请求，地址栏显示省略号
超过 25kb 请求异常

## 请描述 cookies、sessionStorage 和 localStorage 的区别?

1. 存储方式：cookies 存储在 http 信息的实体中，http 每次请求都会携带 cookie, cookie 在浏览器和服务器间来回传递， 后两者仅在本地保存
2. 存储大小：cookie 数据不能超过 4k; 后两者要大很多，可以达到 5M
3. 有效期：cookie 在设置的 cookie 有效期之前有效，即使浏览器或窗口关闭；sessionStorage 仅在当前浏览器窗口关闭前有效，不可持久保存；localSorage 始终有效，窗口或浏览器关闭也一直保存，可做持久数据
4. 作用域：cookie、localStorage 在所有的同源窗口中都是共享的；sessionStorage 只能在当前页面使用

sessionStorage
- 刷新或恢复页面（重新打开关闭的标签页）时，session 存在
- 创建一个新的相同 URL 页面，会创建新的 session
- 试验 https://codesandbox.io/s/992th?file=/src/index.js

sessionStorage, localStorage 存储 size 限制 5MB，各浏览器一致，同步执行，可阻塞主线程
[Storage for the web](https://web.dev/storage-for-the-web/#check)

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

[深入理解浏览器的缓存机制 - 简书](https://www.jianshu.com/p/54cc04190252)

## TCP

TCP 三次握手，建立可靠连接，双边要同步(SYN)和确认(ACK)
```
C -> SYN -> S
C <- SYN-ACK <- S
C -> ACK -> S
```
序列号和确认号的使用允许双方检测丢失或乱序的数据片段

https://www.google.com/search?q=tcp+handshake&oq=tcp+handshake&aqs=chrome..69i57.6609j0j7&sourceid=chrome&ie=UTF-8

四次挥手 Finish
```
C -> FIN -> S
C <- ACK <- S
C <- keep send and FIN <- S
C -> ACK -> S
```
[TCP 4-times close - The Wireshark Wiki](https://wiki.wireshark.org/TCP%25204-times%2520close)

## Etag 和 Last-Modified 区别，使用场景
- 优先级
- 准确性、及时性
- 场景

> Etag nginx 是基于 Last-Modified 和 Content-Length 计算，更新更及时？

## Expires 和 Cache-Control
Expires 要求客户端和服务端的时钟严格同步。 HTTP1.1 引入 Cache-Control来克服Expires头的限制。如果max-age和Expires同时出现，则 max-age 有更高的优先级。

Last-Modified 与 Etag 对比，精确度、分布式部署一致性、性能消耗、优先级
[通过 Node.js 小示例学习浏览器缓存策略](https://mp.weixin.qq.com/s?__biz=MzA4ODUzNTE2Nw==&mid=2451060772&idx=3&sn=3ee0c658dd84a6e481bb3cc14e502a04&chksm=87c42134b0b3a822122a78b3bb676d122c0fbcd280dc9facd0c19e7cbe4b638ab09b283c590d#rd)

## 加密

HTTPS是对称加密还是非对称加密
    HTTPS 在**内容传输**的加密上使用的是对称加密，非对称加密只作用在**证书验证**阶段。

## 幂等性
什么是幂等？一个操作如果具有任意多次执行所产生的影响均与一次执行的影响相同，我们就称之为幂等。

POST 不满足，多次调用创建多个

GET/PUT/DELETE 满足

幂等设计的作用是，允许客户端多次重试，而不产生意外副作用

## 常用 code

304 命中协商缓存，客户端取本地缓存

403 Forbidden 服务端有能力处理，客户端 IP 被封禁

## form-urlencoded

axios 默认将 JS 对象序列化成 JSON，保留原数据类型

form-urlencoded 将所有属性转成字符串，以单一块放到 body 中发出（与 body 搭配使用）

https://axios-http.com/docs/urlencoded

http get 也支持携带 body，各工具也支持，看请求是否携带 data 或 body 字样