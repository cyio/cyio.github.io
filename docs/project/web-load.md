# 页面加载顺序

- DOMContentLoaded 事件，初始 DOM 完全加载和解析，无须等待样式、图片和子窗口完成加载。但会等同步 script 执行完(script 可能要等待依赖的 style)。一般比 load 快。会解析 img 标签，但不会等图片下载完成。在 readyState:interactive 后发生
- load 事件，页面完全加载，包括所有依赖。很少用，一般不会等这么久
- onbeforeunload return false 浏览器会询问用户，不允许定制消息
- unload 用户最终离开，这里发 sendBeacon
- readyState/readystatechange 很少用

```js
if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))

document.addEventListener('DOMContentLoaded', t, !1)
```

[Page: DOMContentLoaded, load, beforeunload, unload](https://javascript.info/onload-ondomcontentloaded)
