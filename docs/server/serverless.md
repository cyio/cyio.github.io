# serverless

Serverless 的适用场景

- 发送通知
- WebHook
- 轻量级 API
- 物联网
- 数据统计分析
- Trigger 及定时任务
- 精益创业
- Chat 机器人

问题
- 静态资源依然存在传统 server
- 跨域处理
- 迁移成本高？中间转发

[开发函数计算的正确姿势——支持 ES6 语法和 webpack 压缩 - 阿里云栖社区 - SegmentFault 思否](https://segmentfault.com/a/1190000019136204)
[基于 Node.js 的轻量级云函数功能实现 - 掘金](https://juejin.im/post/5d21bd086fb9a07ef63fffb5)

阿里本地函数调试需要装 docker，坑


腾讯
- 如果是node的话，已经可以支持tcf native 来调试，不用docker调试了

  [前端学 serverless 系列——WebApplication 迁移实践 - 掘金](https://juejin.im/post/5d1c9380f265da1bc94f098e)

  [借助腾讯云的云函数实现一个极简的 API 网关 - WeihanLi - 博客园](https://www.cnblogs.com/weihanli/p/implement-api-gateway-via-tencent-cloud-function.html)

- API 转发参考

  [ActivityReservation/index.ts at dev · WeihanLi/ActivityReservation](https://github.com/WeihanLi/ActivityReservation/blob/dev/ActivityReservation.Clients/ReservationApiFunction/index.ts#L30)

- 新建云函数，添加触发器
- 示例代码
  [tencentyun/scf-demo-repo](https://github.com/tencentyun/scf-demo-repo)

- 监控内容更新
  [Serverless 实践系列（四）：网站监控脚本的实现-InfoQ](https://www.infoq.cn/article/bzlyqE_7H9e56w5NUWD6)
- 静态 + api
  [Serverless 实践系列（五）：如何将搜索引擎去广告？-InfoQ](https://www.infoq.cn/article/9IQ0XMLI0-NAdGueu6Nz)

> 以一个博客系统为例：前段使用 Vue.js 等框架进行开发，所有的后端逻辑，包括数据库的增删改查，包括某些小功能点的实现，全部用云函数来实现？这样，只需要找一个虚拟空间或者腾讯云的 COS，就可以完成前端的部署，而后端的服务器配置、面对用户激增的服务器运维等，都交给云函数 + 相关产品来实现，这样会大大节约资源，降低成本。

- 查看子账户 api 密钥，用户列表
  https://console.cloud.tencent.com/cam
- cli 不支持拉取，改用 vscode 扩展，cli 配过信息就不用再配了

- cron `0 0,20,40 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * * *`
  [在线 Cron 表达式生成器-QQE2.COM 在线工具网](https://qqe2.com/cron)
  表达示不能留 ? 号，年要选
- 命令行中开发，code 只用来调试和部署
- 调用增强
[云函数 Node.js SDK - 开发指南 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/583/37316)
[云函数 Node.js - 开发指南 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/583/11060)
- 编辑，可以设置环境变量，调整内存
- `console.log`不要用解构，否则在线调试，打不出来
- 云函数时间是 utc，建议存 unix，取加 8

[NGW，前端新技术赛场：Serverless SSR 技术内幕 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1537960)
[【腾讯云Serverless】使用云函数快速打造一个智障微信公众号自动回复机器人 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1493846)
- 必须用同步写法，才能返回？

## 不适合场景
- api 需要长期调用
- 需要访问境外？

