# Web 前端安全
[[toc]]

crypto, TSL/SSL HTTPS XSS

## XSS 跨站脚本攻击
在网页中植入恶意脚本，输入源有脚本参数、表单提交

危害：获取用户 cookie

解决方式：
- HttpOnly，无法通过 JS 获取 Cookie
- CSP 内容安全策略

设置 header，做哈希验证
```
content-security-policy: script-src 'sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0='
```
避免使用`eval`

Self-XSS 欺骗用户在控制台运行恶意代码

谷歌翻译的做法，在控制台显示信息警告用户

转义为实体字符，正则替换

### DOM 型 XSS（前端关注）

使用 Vue 强转成字符串，不会有问题.

[Vue中是如何防御XSS（注入攻击）的 - SegmentFault 思否 ](https://segmentfault.com/a/1190000039713551)

通用的规则是只要允许执行未过滤的用户提供的内容 (不论作为 HTML、JavaScript 甚至 CSS)，你就可能令自己处于被攻击的境地。这些建议实际上不论使用 Vue 还是别的框架甚至不使用框架，都是成立的。- [安全 — Vue.js](https://cn.vuejs.org/v2/guide/security.html)

[WEB前端安全自查和加固 - Thoughtworks洞见](https://insights.thoughtworks.cn/web-frontend-security/)

[XSS payload DEMO](https://codepen.io/cyio/pen/gOXbZaa)

## CSRF 跨站请求伪造

伪造请求

第三方域名页面，发起合法请求，服务器没有做来源过滤。举例，合法调用接口设置 Gmail 转发，获取隐私邮件

解决：
- 同源检查 origin/referer
- CSRF Token，如表单提交必须带上 token。原理是攻击者只带 cookie 无法请求成功
- 交互验证码（短信炸弹）

[前端安全系列（二）：如何防止CSRF攻击？ - 美团技术团队](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

## 点击劫持（ClickJacking）

X-Frame-Options 防止页面被嵌入恶意利用

[前端安全编码规范 - SegmentFault 思否](https://segmentfault.com/a/1190000037657222)

## HTTP 劫持

内容未加密，页面被插入内容，如弹窗

应对：升级 HTTPS 内容加密

## 混合内容（http + https）
- 被动 image/media  威胁性低，可访问，但锁、控制台会提示
- 主动 script style iframe flash  拦截

[什么是混合内容？  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)

## cookie 相关

- HttpOnly 限制 cookie 只能发请求携带，禁用 JS 读取。服务端设置`Set-Cookie`，减轻 XSS 攻击
- SameSite 减轻 CSRF 攻击
- 会话 cookie（默认），页面关闭时移除
- 常驻 cookie

## Crypto
敏感数据加密保存

## 中间人攻击

[中间人攻击 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%25E4%25B8%25AD%25E9%2597%25B4%25E4%25BA%25BA%25E6%2594%25BB%25E5%2587%25BB)

证书校验

[web-develop/大话WEB安全.md at master · SFLAQiu/web-develop](https://github.com/SFLAQiu/web-develop/blob/master/%25E5%25A4%25A7%25E8%25AF%259DWEB%25E5%25AE%2589%25E5%2585%25A8.md)

