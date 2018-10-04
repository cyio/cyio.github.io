# 错误处理

* 什么情况下用 throw，即不满足继续执行条件，继续执行没意义，只会显示更多无用错误，甚至可能是死循环

## 抛出错误

```js
function divide(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    throw new Error("divide(): Both arguments must be numbers.");
  }
  return num1 / num2;
}
```
用 assert 函数进行抽象，简化错误输出
```js
function assert (conditon, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function divide(num1, num2) {
  assert(typeof num1 != "number" || typeof num2 != "number",
    "divide(): Both arguments must be numbers.");
  return num1/num2;
}
```


[前端代码异常日志收集与监控](https://gist.github.com/nevergiveup-j/f8df2b1854492e0f80b6)
[您必须知道的几个Nodejs编码习惯 · GitBook](http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html)
