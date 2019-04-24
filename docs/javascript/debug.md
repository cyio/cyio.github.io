# 调试

## 日志收集

### 断言

- 仅不满足条件时打印错误信息
- 可以用来减少`console`打印，仅打印异常

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

## 调试工具

[移动端调试痛点？——送你五款前端开发利器 - 掘金](https://juejin.im/post/5b72e1f66fb9a009d018fb94)

## 保持等待

```js
function waitForever() {
  return new Promise(r => {});
}

// Usage:
await waitForever();
```
