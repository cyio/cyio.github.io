# HTTP 2
[[toc]]

- 新特性：多路复用的单一长连接、请求优先级、服务器推送
- HTTP 1.x 浏览器有同域并发限制，会导致阻塞
- HTTP 2 同一连接并发互换
  > 在 HTTP/2 中，客户端向某个域名的服务器请求页面的过程中，只会创建一条 TCP 连接，即使这页面可能包含上百个资源。而之前的 HTTP/1.x 一般
  > 会创建 6-8 条 TCP 连接来请求这 100 多个资源。单一的连接应该是 HTTP2 的主要优势，单一的连接能减少 TCP 握手带来的时延
  > HTTP2 中用一条单一的长连接，避免了创建多个 TCP 连接带来的网络开销，提高了吞吐量。

[The http2 protocol · http2 explained](https://http2-explained.haxx.se/zh/part6)
[Hypertext Transfer Protocol Version 2 (HTTP/2)](https://httpwg.org/specs/rfc7540.html#intro)

## header 压缩

```
HTTP
  TLS gzip
    TCP
```

一开始 header 和 body 无差别压缩，由于安全原因，云服务禁用了 header 压缩，直到 H2。HPACK 专用算法

`key:value`
静态字典 + Huffman + 动态字典，请求复用时，压缩率可达 99%

[HPACK: the silent killer (feature) of HTTP/2](https://blog.cloudflare.com/hpack-the-silent-killer-feature-of-http-2/)

## 与 HTML 1.1 对比
,html1.x,html2
tcp,一个,复用
cookie,每个请求携带,一个连接
header,无压缩,hpack

