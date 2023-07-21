# WebWorkers
[toc]

创建线程池，复用多核能力加速计算

> 主线程应当一心一意的执行你的代码，任何在 关键渲染路径 中 不必要的脚本都应当被迁移到 Web Worker 中。

## 适用场景

非核心工作：
- 请求类：缓存、预请求
- 计算类：加密、计算 MD5
- 数据处理：排序、查找
- 预渲染：canvas（new OffscreenCanvas）

## 使用

- 支持内联创建 blob url

简化使用
[GoogleChromeLabs/comlink: Comlink makes WebWorkers enjoyable.](https://github.com/GoogleChromeLabs/comlink)

## 错误处理

```
worker.addEventListener('error', function (event) {
  // ...
});
```

[浅析Web Worker使用技巧及实战场景 - 古兰精 - 博客园](https://www.cnblogs.com/goloving/p/13962441.html)

[2021 Web Worker 现状 - 知乎](https://zhuanlan.zhihu.com/p/393428948)

[michaeltreat/Web-Worker-Demo: JavaScript with more than one thread? WebWorkers!](https://github.com/michaeltreat/Web-Worker-Demo)

[How Partytown's Sync Communication Works - DEV Community](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)

[我们是如何利用 Qwik 和 Partytown 削减掉 页面中 99% 的 JavaScript 的 - 知乎](https://zhuanlan.zhihu.com/p/445122206)

[Mental model - Qwik](https://qwik.builder.io/guide/mental-model)

## 即使一个 worker 线程也可以利用多核处理器加速
