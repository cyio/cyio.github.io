# Web 前端安全
[[toc]]

crypto, TSL/SSL HTTPS XSS

## XSS 跨站脚本攻击

在网页中植入恶意脚本，输入源有脚本参数、表单提交

危害：获取用户 cookie

解决方式：
- HttpOnly，无法通过 JS 读、改、删 Cookie
- CSP 内容安全策略

设置 header，做哈希验证
```
content-security-policy: script-src 'sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0='
```
避免使用`eval`

Self-XSS 欺骗用户在控制台运行恶意代码

谷歌翻译的做法，在控制台显示信息警告用户

**转义为实体字符**，正则替换

vue 使用 he 库  (for “HTML entities”)

常规变量、属性，vue 会转义，但 v-html 需要使用者自己保证，避免使用

> 最基本的规则就是只要你允许执行未经无害化处理的、用户提供的内容 (无论是 HTML、JavaScript 还是 CSS)，你就可能面临攻击。

[安全 | Vue.js](https://cn.vuejs.org/guide/best-practices/security.html#potential-dangers)

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

2022 Frontend security in 1 tweet:

1. Use HTTPs
2. Server render
3. Store JWT/token in 'secure', 'samesite', 'httponly' cookie (prevent XSS).
4. Declare content security policy (prevent XSS)
5. Regen cookies when user auths (prevent session fixation)
6. Set short cookie lifetime


## 速查

[HTML5 Security - OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#sandboxed-frames)

[Cross Site Scripting Prevention - OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)


## 源码混淆

源码混淆可以极大的降低你的源码的可读性和可调试性，同时也会在不同程度上带来性能损耗，这也是为什么几乎所有现代前端开发框架（的脚手架）都不直接提供源码混淆的支持，需要开发者自己安排混淆插件。

Facebook完全是依靠服务端的逻辑来防范这些攻击的，几乎不会投入资源去做客户端的加密混淆这种工作。

electron的这套运行逻辑注定其安全性极差，无论你搞再多混淆还是其他花样，你给v8解析的时候你不能让v8不认识，也就是说必定可以搞到源码。 理论上你只要找到v8解析js的函数，在里面下断就可以dump出所有源码，如果觉得这种方法麻烦，现在网上有开源的解包项目，可以直接解包，修改源码再打包。