# 调试与错误处理

## 错误处理

* 什么情况下用 throw，即不满足继续执行条件，继续执行没意义，只会显示更多无用错误，甚至可能是死循环

[前端代码异常日志收集与监控](https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6)
[您必须知道的几个Nodejs编码习惯 · GitBook](http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html)

## 日志收集

### 断言

* 仅不满足条件时打印错误信息
* 可以用来减少 console 打印，仅打印异常
```
let a = 2
console.assert(a === 3, 'a 的值不是 3')
```
### window.onerror
当一个JS运行环境错误（包括语法错误）发生时，一个全局错误事件发生并且唤起 window.error()

当资源加载失败，发生元素上的错误事件，唤起元素上的 onerror()，这些事件不会传播到window。

```js
window.onerror = function(message, source, lineno, colno, error) { ... }
element.onerror = function(event) { ... }

window.onerror = function (errorMsg, url, lineNumber) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
}

```
