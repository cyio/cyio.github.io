# Service Worker

- Service workers are generic, event-driven, time-limited script contexts that run at an origin.
- web-worker 为 JS 增加多线程，比如计算量大可以交给 web-worker
- service-worker 是基于 web-worker，主要处理网络请求相关
- 非阻塞式，不能使用同步 XHR 和 localStorage
- 可在后台保持，用来从服务器接收消息，推送给用户
- 不能直接访问 DOM，message 机制通信，跟 chrome 插件一样
- 可编程网络代理
- 只支持 https，避免中间人攻击
- Fetch/Cache APIs

[ServiceWorker Cookbook](https://serviceworke.rs/)
[Smaller HTML Payloads with Service Workers — Philip Walton](https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/)

[Introduction to Service Worker  |  Web  |  Google Developers](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker)
[Service Worker 全面进阶 - 前端的 bigboom - SegmentFault 思否](https://segmentfault.com/a/1190000008050742)

