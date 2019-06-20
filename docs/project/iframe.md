# iframe

- 父为 HTTPS，子必须为 HTTPS？
- iframe 可能设置防盗链，访问报 403，需要添加泛域名
- 测试，在现成页面插入 DOM
- `iframe.contentDocument`从开始到页面载入，会变化，需要监听`onload`，跨域 iframe 没有`DOMContentLoaded`，同域通过轮询可尽快查到`contentDocument`出现
- iframe 全屏
  - 嵌套内容需要指定设置允许全屏
  - 如果有多层嵌套，都需要设置
  ```
  iframe(:src="url" width="100%" height="100%" allowfullscreen="allowfullscreen" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0")

  iframe {
    border-width: 0;
    vertical-align: bottom;
  }
  ```

