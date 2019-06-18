# 分析

## 数据收集
- `unload`中的异步请求会被忽略，同步请求可用但页面`unload`延迟，减慢后续导航
- `sendBeacon`
  - 会自动带上 cookie
  - 开发者工具：请求不在 xhr 中

```js
window.addEventListener('unload', logData, false);

function logData() {
    navigator.sendBeacon("/log", analyticsData);
}
```
