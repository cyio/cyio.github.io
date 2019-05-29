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
