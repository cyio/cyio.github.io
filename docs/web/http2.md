# HTTP2

* 新特性：多路复用的单一长连接、请求优先级、服务器推送
* 1.x 浏览器有同域并发限制，会导致阻塞
* 2 同一连接并发互换
> 在HTTP/2中，客户端向某个域名的服务器请求页面的过程中，只会创建一条TCP连接，即使这页面可能包含上百个资源。而之前的HTTP/1.x一般会创建6-8条TCP连接来请求这100多个资源。单一的连接应该是HTTP2的主要优势，单一的连接能减少TCP握手带来的时延
> HTTP2中用一条单一的长连接，避免了创建多个TCP连接带来的网络开销，提高了吞吐量。

[The http2 protocol · http2 explained](https://http2-explained.haxx.se/content/en/part6.html)


## header 压缩
```
HTTP
  TLS gzip
    TCP
```

一开始 header 和 body 无差别压缩，由于安全原因，云服务禁用了 header 压缩，直到 H2。HPACK 专用算法

`key:value`
静态字典 + Huffman +  动态字典，请求复用时，压缩率可达 99%

[HPACK: the silent killer (feature) of HTTP/2](https://blog.cloudflare.com/hpack-the-silent-killer-feature-of-http-2/)

