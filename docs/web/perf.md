# 性能

[性能为何至关重要  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/why-performance-matters/?hl=zh-cn)
[Front-End Performance Checklist 2019 [PDF, Apple Pages, MS Word] — Smashing Magazine](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)
[狙杀页面卡顿 —— Performance 指北 - 掘金](https://juejin.im/post/5b65105f5188251b134e9778)

# 后台页面
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

> 改善下载时间 保持 JavaScript 包的小巧，特别是对于移动设备。小的 js 包可提高下载速度，降低内存使用率并降低 CPU 成本。 避免只有一个大 js 文件;如果单个 js 文件超过~50-100 kB，则将其拆分为单独的较小的 js 文件。 （通过 HTTP / 2 多路复用，可以同时传输多个请求和响应消息，从而减少额外请求的开销。） 在移动设备上，你会希望发送的数据更小，特别是因为网络速度，但也保持低内存使用率。 缩短执行时间 避免使主线程保持忙碌的长任务，并可以推断出页面交互的时间。下载后，脚本执行时间现在是主要成本。 避免使用大型内联脚本（因为它们仍然在主线程上进行了解析和编译）。一个好的经验法则是：如果脚本超过 1 kB，请避免内联（因为 1 kB 也是外部脚本启动时代码缓存的下限）。

[The cost of JavaScript in 2019 · V8](https://v8.dev/blog/cost-of-javascript-2019)
[页面加载性能优化 automate-everything/chapter4.md at master · azl397985856/automate-everything](https://github.com/azl397985856/automate-everything/blob/master/docs/chapter4.md)

# lazy

chrome 默认规则，按优先级加载，依然是尽快拉取
chrome 76 支持浏览器原生懒加载，显式指定加载规则
`auto` 默认
`lazy` 进入视口才加载
`eager` 忽略默认规则
```html
<img loading=”lazy”>
<iframe loading=”lazy”></iframe>
```

# 商业方案
[听云Browser・实时了解您网站的真实用户体验](https://www.tingyun.com/tingyun_browser.html)
[测速 - 听云Network・国内领先的网站性能监测与优化产品](https://www.tingyun.com/tingyun_network.html)
[Journey to the Content Mesh Part 4: Why Mobile Performance Is Crucial | GatsbyJS](https://www.gatsbyjs.org/blog/2018-10-16-why-mobile-performance-is-crucial/)

# modern 构建
构建两个版本，modern 降低体积，old 兼顾

[Improving Browser Performance 10x - Universe Engineering](https://engineering.universe.com/improving-browser-performance-10x-f9551927dcff)
