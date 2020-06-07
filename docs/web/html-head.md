# html head

## viewport

- viewport 如果没设置，手机会以桌面屏幕宽度渲染，然后缩小页面，导致不易阅读
- 安卓、iOS、APP Webview 在不设置 viewport 情况下的渲染处理有差异，所以最好设上
- lighthouse 会不通过

[Does not have a <meta name="viewport"> tag with width or initial-scale](https://web.dev/viewport/)

```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

