# 调试与错误处理

## 错误处理

* 什么情况下用`throw`？不满足继续执行条件，继续执行没意义，只会显示更多无用错误，甚至可能是死循环

[GlobalEventHandlers.onerror | MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)
[异常和错误处理  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/console/track-exceptions?hl=zh-cn)
[前端代码异常日志收集与监控](https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6)
[您必须知道的几个Nodejs编码习惯 · GitBook](http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html)

## 日志收集

### 断言

* 仅不满足条件时打印错误信息
* 可以用来减少`console`打印，仅打印异常
```js
let a = 2
console.assert(a === 3, 'a 的值不是 3')
```
### onerror
当一个 JS 运行环境错误（包括语法错误）发生时，一个全局错误事件发生并且唤起`window.error()`

当资源加载失败，发生元素上的错误事件，唤起元素上的`onerror()`，这些事件不会传播到`window`

```js
window.onerror = function(message, source, lineno, colno, error) { ... }
element.onerror = function(event) { ... }

window.onerror = function (errorMsg, url, lineNumber) {
  alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
}
```

## throw
中断函数执行，抛出一个 exception 对象，包含 name 和 message 两个属性，也可以添加其它的属性
`try ... catch (e) {console.log(e.name, e.message)}` catch 从句可捕获异常错误

## 调试工具
[移动端调试痛点？——送你五款前端开发利器 - 掘金](https://juejin.im/post/5b72e1f66fb9a009d018fb94)


```js
function waitForever() {
  return new Promise(r => {});
}

// Usage:
await waitForever();
```

## Vue
* Vue.config.errorHandler 在这里设置上报
* Vue.config.warnHandler 在 production 会忽略
* errorCaptured hook 可以用来做 error-boundary 组件，2.5+ 可用，捕获子孙组件 vue render 错误，捕获不了 click 等事件函数错误

[生产环境部署 — Vue.js](https://cn.vuejs.org/v2/guide/deployment.html#%25E8%25B7%259F%25E8%25B8%25AA%25E8%25BF%2590%25E8%25A1%258C%25E6%2597%25B6%25E9%2594%2599%25E8%25AF%25AF)

[Error handling with Vue.js (a story of rental cars and Destinys Child) | CatchJS](https://catchjs.com/Docs/Vue)

[用什么代替window.onunhandledrejection来处理不同浏览器中的承诺错误？ - 问答 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/ask/125002/answers/created)

[catchen.me/_layout.jade at c622f7c49e5b603cb4d768c189e1c2e0436bebcf · CatChen/catchen.me](https://github.com/CatChen/catchen.me/blob/c622f7c49e5b603cb4d768c189e1c2e0436bebcf/public/_layout.jade#L87)

[前端代码异常日志收集与监控 - Barret Lee - 博客园](http://www.cnblogs.com/hustskyking/p/fe-monitor.html)

[前端代码异常监控实战 · Issue #5 · happylindz/blog](https://github.com/happylindz/blog/issues/5)

## Image
1. 在 img 标签上设置 `v-on:error=""`
2. 设置替换图片，要保证替换图片存在，否则可能造成死循环
