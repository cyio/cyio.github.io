# iframe

- 父为 HTTPS，子必须为 HTTPS
- iframe 可能设置防盗链，访问报 403，需要添加泛域名
- 嵌套第三方页面时简便测试，在现成页面插入 DOM
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

[Fallback for Blocked iframes: A (Crude) Solution With Vue.js - DZone Web Dev](https://dzone.com/articles/fallback-for-blocked-iframes-a-crude-solution-with)

- 判断当前页是否是iframe
    ```js
    // 判断当前页是否是iframe
    self == window.top
    // 判断父窗口是否是iframe
    parent==top
    // similar behavior as an HTTP redirect
    window.location.replace("http://stackoverflow.com");

    // similar behavior as clicking on a link
    window.location.href = "http://stackoverflow.com";
    ```

[iframe 错误检测及优化方案 - 简书](https://www.jianshu.com/p/b09333442ded)

