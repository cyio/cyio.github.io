# Web 前端安全
[toc]

crypto, TSL/SSL HTTPS XSS

## XSS 跨站脚本攻击
在网页中植入恶意脚本

危害：获取用户 cookie

解决方式：
- HttpOnly
- 内容安全策略

设置 header，做哈希验证
```
content-security-policy: script-src 'sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0='
```
避免使用`eval`

Self-XSS 欺骗用户在控制台运行恶意代码

谷歌翻译的做法，在控制台显示信息警告用户

## CSRF 跨站请求伪造
- 举例，合法调用接口设置 Gmail 转发，获取隐私邮件
- 第三方域名页面，发起合法请求

解决：
- 同源检查 origin/referer
- CSRF Token，如表单提交必须带上 token。原理是攻击者只带 cookie 无法请求成功

[前端安全系列（二）：如何防止CSRF攻击？ - 美团技术团队](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

## 点击劫持（ClickJacking）

X-Frame-Options 防止页面被嵌入恶意利用

[前端安全编码规范 - SegmentFault 思否](https://segmentfault.com/a/1190000037657222)


## 混合内容（http + https）
- 被动 image/media  威胁性低，可访问，但锁、控制台会提示
- 主动 script style iframe flash  拦截

[什么是混合内容？  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)

## cookie 相关

- HttpOnly 只能发请求携带，禁用 JS 读取。服务端设置`Set-Cookie`，减轻 XSS 攻击
- SameSite 减轻 CSRF 攻击
- 会话 cookie，页面关闭时移除
- 常驻 cookie

## Crypto
敏感数据加密保存
