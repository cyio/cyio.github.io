# Web 安全
crypto, TSL/SSL HTTPS XSS

## Crypto
敏感数据加密保存

## XSS 跨站脚本
在网页中植入恶意脚本
解决方式：内容安全策略
设置 header，做哈希验证
```
content-security-policy: script-src 'sha256-wxWy1+9LmiuOeDwtQyZNmWpT0jqCUikqaqVlJdtdh/0='
```
避免使用`eval`

## CSRF 跨站请求伪造
同源请求

## 中间人攻击
HTTPS

## SQL/NoSQL 注入

## DDOS
* 在服务器上删除未使用的服务，关闭未使用的端口。

[[面试专题]前端需要知道的web安全知识 - 前端进阶计划 - SegmentFault 思否](https://segmentfault.com/a/1190000010913697#articleHeader5)
