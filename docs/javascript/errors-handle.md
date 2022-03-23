# 错误处理

[[toc]]

## throw

- 什么情况下用 throw，即不满足继续执行条件，继续执行没意义，只会显示更多无用错误，甚至可能是死循环
- 中断函数执行，抛出一个 exception 对象，包含 name 和 message 两个属性，也可以添加其它的属性
  `try ... catch (e) {console.log(e.name, e.message)}` catch 从句可捕获异常错误

```js
function divide(num1, num2) {
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    throw new Error('divide(): Both arguments must be numbers.')
  }
  return num1 / num2
}
```

可抽象成断言函数，简化错误输出

```js
function assert(conditon, message) {
  if (!condition) {
    throw new Error(message)
  }
}

function divide(num1, num2) {
  assert(
    typeof num1 != 'number' || typeof num2 != 'number',
    'divide(): Both arguments must be numbers.'
  )
  return num1 / num2
}
```

[GlobalEventHandlers.onerror | MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror)
[异常和错误处理  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/console/track-exceptions?hl=zh-cn)
[前端代码异常日志收集与监控](https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6)
[您必须知道的几个 Nodejs 编码习惯 · GitBook](http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html)

## Vue

- `Vue.config.errorHandler`在这里设置上报
- `Vue.config.warnHandler`在 production 会忽略
- `errorCaptured` hook 可以用来做 error-boundary 组件，2.5+ 可用，捕获子孙组件 vue render 错误，捕获不了 click 等事件函数错误

[生产环境部署 — Vue.js](https://cn.vuejs.org/v2/guide/deployment.html#%25E8%25B7%259F%25E8%25B8%25AA%25E8%25BF%2590%25E8%25A1%258C%25E6%2597%25B6%25E9%2594%2599%25E8%25AF%25AF)

[Error handling with Vue.js (a story of rental cars and Destinys Child) | CatchJS](https://catchjs.com/Docs/Vue)

[catchen.me/\_layout.jade at c622f7c49e5b603cb4d768c189e1c2e0436bebcf · CatChen/catchen.me](https://github.com/CatChen/catchen.me/blob/c622f7c49e5b603cb4d768c189e1c2e0436bebcf/public/_layout.jade#L87)

[前端代码异常日志收集与监控 - Barret Lee - 博客园](http://www.cnblogs.com/hustskyking/p/fe-monitor.html)

[前端代码异常监控实战 · Issue #5 · happylindz/blog](https://github.com/happylindz/blog/issues/5)

## Image

1.  在 img 标签上设置 `v-on:error=""`
2.  设置替换图片，要保证替换图片存在，否则可能造成死循环

## Sentry

手动上报
`Sentry.captureMessage('Something went wrong');`

Capturing Events - Docs https://docs.sentry.io/error-reporting/capturing/?platform=javascript

## 错误模拟

- dev tool block，忽略这种情况，意义不大
- mock 500，这种常见，onError 能捕获到

## 实践
```js

    // 监控js错误
    window.onerror = function (msg, _url, line, col, error) {
      // 采用异步的方式,避免阻塞
      setTimeout(() => {}, 0)
      return false;

    // 监控资源加载错误(img,script,css,以及jsonp)
    window.addEventListener('error', (e) => {
    
    window.addEventListener('unhandledrejection', event => {
```

## 1px gif
1. 没有跨域问题，一般这种上报数据，代码要写通用的；（排除ajax）
2. 不会阻塞页面加载，影响用户的体验，只要new Image对象就好了；（排除JS/CSS文件资源方式上报）
3. 在所有图片中，体积最小；（比较PNG/JPG）

## cdn 脚本错误
脚本由于跨域的问题，错误监控拿到的错误信息里面只有Script Error

What the heck is "Script error"? | Product Blog • Sentry https://blog.sentry.io/2016/05/17/what-is-script-error
https://html.spec.whatwg.org/multipage/scripting.html#attr-script-crossorigin
