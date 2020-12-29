# Web 安全
crypto, TSL/SSL HTTPS XSS

## Crypto
敏感数据加密保存

## XSS 跨站脚本攻击
在网页中植入恶意脚本

解决方式：内容安全策略

设置 header，做哈希验证
```
content-security-policy: script-src 'sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0='
```
避免使用`eval`

## CSRF 跨站请求伪造
- 举例，合法调用接口设置 Gmail 转发，获取隐私邮件
- 第三方域名页面，发起合法请求

解决：
- 同源检查 origin/referer
- CSRF Token，如表单提交必须带上 token。原理是攻击者只带 cookie 无法请求成功

[前端安全系列（二）：如何防止CSRF攻击？ - 美团技术团队](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
## 中间人攻击
HTTPS

[[面试专题]前端需要知道的web安全知识 - 前端进阶计划 - SegmentFault 思否](https://segmentfault.com/a/1190000010913697#articleHeader5)

## 混合内容（http + https）
- 被动 image/media  威胁性低，可访问，但锁、控制台会提示
- 主动 script style iframe flash  拦截

[什么是混合内容？  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)
