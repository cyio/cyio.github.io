# 性能
[toc]

[前端监控体系搭建 | 被删的前端游乐场](https://godbasin.github.io/front-end-playground/front-end-basic/deep-learning/monitor-and-report.html#%25E6%2595%25B0%25E6%258D%25AE%25E6%2594%25B6%25E9%259B%2586)

## Guidelines
1. 审计页面
2. 使用报告找出优化点
3. 一次改变一个点
4. 每次改变后审计，观察效果

[Improving Load Performance - Chrome DevTools 101 - YouTube](https://www.youtube.com/watch?v=5fLW5Q5ODiE)

## 方法论
- 请求
  - 并发
  - 延迟 Script defer
  - 预取
  - head
  - transfer gzipped
  - body 压缩
- 请求与渲染结合
  - 非首屏图片懒加载 | 关键 CSS 拆分内联

[性能为何至关重要  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/why-performance-matters/?hl=zh-cn)

[Front-End Performance Checklist 2019 [PDF, Apple Pages, MS Word] — Smashing Magazine](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)

[狙杀页面卡顿 —— Performance 指北 - 掘金](https://juejin.im/post/5b65105f5188251b134e9778)

## 后台页面
- 使用`visibilityChange`监听器避免在后台执行不必要的工作，如处理视图变化
- `requestAnimationFrame` 批量更新，失焦时不会触发
[Background Tabs in Chrome 57  |  Web  |  Google Developers](https://developers.google.com/web/updates/2017/03/background_tabs)

- 例外，websocket 连接，audio，pinned tabs
```
Try those flags:

automatic tab discarding disabled

only auto-reload visible tabs disabled

throttle expensive background timers disabled
```

> 改善下载时间 保持 JavaScript 包的小巧，特别是对于移动设备。小的 js 包可提高下载速度，降低内存使用率并降低 CPU 成本。 避免只有一个大 
> js 文件;如果单个 js 文件超过~50-100 kB，则将其拆分为单独的较小的 js 文件。 （通过 HTTP / 2 多路复用，可以同时传输多个请求和
> 响应消息，从而减少额外请求的开销。） 在移动设备上，你会希望发送的数据更小，特别是因为网络速度，但也保持低内存使用率。 缩短执行时间 
> 避免使主线程保持忙碌的长任务，并可以推断出页面交互的时间。下载后，脚本执行时间现在是主要成本。 避免使用大型内联脚本（因为它们仍然在
> 主线程上进行了解析和编译）。一个好的经验法则是：如果脚本超过 1 kB，请避免内联（因为 1 kB 也是外部脚本启动时代码缓存的下限）。

[The cost of JavaScript in 2019 · V8](https://v8.dev/blog/cost-of-javascript-2019)
[页面加载性能优化 automate-everything/chapter4.md at master · azl397985856/automate-everything](https://github.com/azl397985856/automate-everything/blob/master/docs/chapter4.md)

## lazy

chrome 默认规则，按优先级加载，依然是尽快拉取
chrome 76 支持浏览器原生懒加载，显式指定加载规则
`auto` 默认
`lazy` 进入视口才加载
`eager` 忽略默认规则
```html
<img loading="lazy">
<iframe loading="lazy"></iframe>
```

## 第三方方案
[听云Browser・实时了解您网站的真实用户体验](https://www.tingyun.com/tingyun_browser.html)

[测速 - 听云Network・国内领先的网站性能监测与优化产品](https://www.tingyun.com/tingyun_network.html)

[Journey to the Content Mesh Part 4: Why Mobile Performance Is Crucial | GatsbyJS](https://www.gatsbyjs.org/blog/2018-10-16-why-mobile-performance-is-crucial/)

## modern 构建
构建两个版本，modern 降低体积，old 兼顾

[Improving Browser Performance 10x - Universe Engineering](https://engineering.universe.com/improving-browser-performance-10x-f9551927dcff)

[lighthouse/authenticated-pages.md at master · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/blob/master/docs/authenticated-pages.md)


[Chrome 中的 First Meaningful Paint - 邹天得 - 博客园](https://www.cnblogs.com/videring/articles/7603864.html)
算法：
a. 首次有效绘制 = 具有最大布局变化的绘制
b. 布局显著性 = 添加的对象数目 / max(1, 页面高度 / 屏幕高度)

用户期待：页面的首屏内容应在1.5秒内加载完成

普通用户期望且能够接受的页面加载时间在 3 秒以内

搜索流量倾斜，3s 红线

[前端加载优化及实践 | 微信开放社区](https://developers.weixin.qq.com/community/develop/article/doc/00062cad124c8867cf380f64156c13)

[杨森 把前端性能监控做到极致 | ITSlide - 专注于PPT幻灯片的分享平台](https://www.itslide.com/slide/244993)

[笔记 前端性能优化原理与实践](https://blog.shipengqi.top/2018/10/29/frontend-performance-optimize/)

FMP  主要内容用户可见 1220ms 99分 基于真实网站数据

[WebPageTest - Website Performance and Optimization Test](https://webpagetest.org/easy)

可链接提供 Image Analysis Results，可压缩比

[Lighthouse v3 Score Weighting [MAKE YOUR OWN COPY] - Google 表格](https://docs.google.com/spreadsheets/d/1Cxzhy5ecqJCucdf1M0iOzM8mIxNc7mmx107o5nj38Eo/edit#gid=0)

可交互时间、速度指标权重更高，FMP 权重最低，比较容易实现

[Performance audits  |  web.dev](https://web.dev/lighthouse-performance)

[以用户为中心的性能指标  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#tracking_fmp_using_hero_elements)

传统指标或单个指标不可靠，Google 定义新指标

Long Tasks API >50 毫秒

100 毫秒内响应用户输入

发生在后，权重大，对用户更重要

PerformanceObserver 观测实际设备

首屏加载时间定义
一般 图片
课件，可操作时间

speedIndex 内容显示速度，综合指标，需要解决一系列问题提升

持续集成、测试关键指标是否合格，低于阈值判定失败

用户关注主要内容的展示和可交互，但浏览器不知道

自定义指标，测量方法
[SpeedCurve | User Timing and Custom Metrics](https://speedcurve.com/blog/user-timing-and-custom-metrics/)

[Navigation Timing Level 2](https://www.w3.org/TR/navigation-timing-2/#performanceentry)

````
<body onload="init()">
````
这里`onload`即`window.onload`，完整 Document 资源加载结束，包括 images, scripts, links and sub-frames

[让偶现Bug无所遁形：贝壳自研时光机如何解决前端行业痛点？-InfoQ](https://www.infoq.cn/article/pqSFIzu9DFuwmg4e51oM?utm_source=rss&utm_medium=article)

> 在衡量 Web 页面性能时，最普遍的做法是通过 YSlow、Lighthouse 等工具对页面进行一次性的诊断分析。诚然这些工具可以检查出诸多页面性能的瓶颈和优化点，但我们依然无法感知并量化用户在访问页面时的具体表现，因为真实场景的页面性能会受到诸多因素的影响，如用户使用的终端类型、服务器响应速度、所在地域 CDN 性能等。

真实用户访问 --> 提取性能指标 --> 数据清洗加工 --> 性能分析监控（监控平台）

高精度时间，小数点后 12 位
`performance.now`单调递增，不受修改系统时间影响

原生 DCL --> FP/FCP --> FMP 算法推导 用户感知


FMP 布局树，布局对象，最大之后的绘制，可见区域 页面高度

> First meaningful paint = Paint that follows biggest layout change
> Biggest layout change means layout with the largest number of LayoutObjectsThatHadNeverHadLayout. In Figure 1, the biggest layout change is at 1.86s, so the next paint (1.907s) is the first meaningful paint.

## FCP

首次内容绘制 (FCP) 是测量[感知加载速度](https://web.dev/user-centric-performance-metrics/#types-of-metrics)的一个以用户为中心的重要指标，因为该项指标会在用户首次在屏幕上看到任何内容时，在页面加载时间轴中标记出相应的点，迅捷的 FCP 有助于让用户确信某些事情正在[进行](https://web.dev/user-centric-performance-metrics/#questions)。

PWA 一般 150-200ms，没有网络开销，加载本地资源、执行JS、渲染

SSR 页面，有网络开销，即使流式加载，理论也会增加 200ms（ping 耗时+服务器处理时间），但由于服务器预渲染比客户端快很多，

## TTFB

首字节时间(TTFB)用于测量服务器的响应能力。是从客户端发起 HTTP 请求到客户端浏览器收到资源的第一个字节所经历的时间。由 socket 连接时间、发送 HTTP 请求所需时间、收到页面第一个字节所需时间组成。

Gzip 压缩会导致 TTFB 提升

大多数服务器的 TTFB 时间都在 50 ms 以下

本地过多 cookie ？每次请求会带上，上传受限，可能增加 TTFB

h2 统计到的 TTFB 值会更高，因为 socket 连接更早？

更好解答 [Is it possible to do HLS streaming over HTTP/2, and will it be better latency-wise than over HTTP/1.1? - Stack Overflow](https://stackoverflow.com/questions/53699584/is-it-possible-to-do-hls-streaming-over-http-2-and-will-it-be-better-latency-wi/53899295#53899295)
h2 优势在大量并行小请求
而视频流是串行请求大的数据块，HTTP1.1 + keep alive 就能满足，且更高效，不需要处理 h2 基于 TCP 的流控制架构

[Stop worrying about Time To First Byte (TTFB)](https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/)
[iis - HTTP/2 has much higher TTFB than HTTP/1.1 - Super User](https://superuser.com/questions/931389/http-2-has-much-higher-ttfb-than-http-1-1)
[Nginx tuning tips: TLS/SSL HTTPS - Improved TTFB/latency](https://haydenjames.io/nginx-tuning-tips-tls-ssl-https-ttfb-latency/)
[《HTTP/2 基础教程》 阅读摘要 - 掘金](https://juejin.im/post/5cb54286e51d456e235d9be6)
[页面加载与API服务响应--- 性能标定与标准 - 知乎](https://zhuanlan.zhihu.com/p/34020557)

可能是分帧，增加了延迟？
[HTTP/2 技术调研和性能分析 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000015030944#item-5-19)

## 4x cpu
仅影响主线程，产生额外线程频繁打断主线程
simulated 与 Applied 区别，不实际节流，推测值

[performance testing - What does 4x slower CPU throttle in Chrome DevTools simulate in terms of hardware? - Stack Overflow](https://stackoverflow.com/questions/50848341/what-does-4x-slower-cpu-throttle-in-chrome-devtools-simulate-in-terms-of-hardwar)

## clear storage
选中，模拟用户首次访问
取消选中，模拟重复访问

## show coverage
按文件，按行分析，红色为未用到

判断是否渲染阻塞资源， show block，刷新，页面是否正常渲染

## main thread
1. performance
2. reload
3. user timing
4. bottom-up

## 不同机器差异

一次优化在一台机器上测，模拟环境，然后在真实环境验证。跨机器标准化可操作性差，影响因素太多。同一台机器，尽量减少影响结果的差异因素。

## 总结
- 先审计再优化
- 一次改一点，隔离变化对性能影响

[Optimize Website Speed With Chrome DevTools  |  Tools for Web Developers](https://developers.google.com/web/tools/chrome-devtools/speed/get-started)
[Lighthouse 测试内幕 - 知乎](https://zhuanlan.zhihu.com/p/91365316)

## 信息流内容页“闪开”

流程上在Webview列表初始化的时候进行详情页资源的预加载，同时针对视图内的信息流列表进行内容页的预渲染，从而在用户点击详情页的时候可以直接从内存中读出HTML，达到闪开的效果。

它将渲染的损耗分摊到了客户端，从而保证渲染不会受高流量访问的影响


## 定位性能问题
问题： 页面滚动不流畅
1. 打开 console - `...` - rendering - Paint flashing
2. 绿色块表示存在性能问题
3. 反复移除内容，直到绿色块消失
4. `fixed` 引起

[Troubleshooting rendering performance issues - YouTube](https://www.youtube.com/watch?v=2vFrZXWiwIc)
[css3 - CSS `will-change` - how to use it, how it works - Stack Overflow](https://stackoverflow.com/questions/26907265/css-will-change-how-to-use-it-how-it-works)

## element-ui
css vendor common 重合
babel 配置隐式 import css
改用 scss import，线开 js split 机制

[Front-End Performance Checklist 2020 [PDF, Apple Pages, MS Word] — Smashing Magazine](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/)

## FPS
理想值 60

收集 FPS list

连续出现3个低于20的 FPS 即可认为网页存在卡顿。

[如何监控网页的卡顿？ - 知乎](https://zhuanlan.zhihu.com/p/39292837)


```js
let hasFocus = document.hasFocus();
removeEventListener('focus', focusListener);
removeEventListener('blur', blurListener);
```
https://github.com/GoogleChromeLabs/squoosh/blob/dev/src/shared/prerendered-app/Intro/blob-anim/index.ts#L337


[前端监控 SDK 的一些技术要点原理分析 - 知乎](https://zhuanlan.zhihu.com/p/420330110)

## 指标

起始时间，是导航开始时间

## 白屏
定义：渲染出第一个字 performance

白屏原因，表现在 SPA 单页应用上，包体积过大，请求、解析耗时长（默认 html 一个 app 标签，等 JS 加载后 mount）

优化思路
1. `app`标签增加 loading 动画，基本没有白屏了
2. 请求：大包拆分，按需加载
3. 解析：SSR/SSG

## 首屏
dom 稳定 MutationObserver
  - body
  - 层级稳定

window.onload or mounted

## 如何让页面加载更快

源码：代码分割，摇树
工程化：压缩、资源优化
网络：缓存、CDN

## 平均帧率

Frame Timing API
[【前端性能】Web 动画帧率（FPS）计算_51CTO博客_动画常用帧率](https://blog.51cto.com/zhangchiworkos/2712114)
firefox 自带？
[Using the Frame Timing API](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API.html)

