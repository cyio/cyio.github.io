(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{654:function(e,t,r){"use strict";r.r(t);var n=r(57),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"serverless"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serverless"}},[e._v("#")]),e._v(" serverless")]),e._v(" "),r("p",[e._v("Serverless 的适用场景")]),e._v(" "),r("ul",[r("li",[e._v("发送通知")]),e._v(" "),r("li",[e._v("WebHook")]),e._v(" "),r("li",[e._v("轻量级 API")]),e._v(" "),r("li",[e._v("物联网")]),e._v(" "),r("li",[e._v("数据统计分析")]),e._v(" "),r("li",[e._v("Trigger 及定时任务")]),e._v(" "),r("li",[e._v("精益创业")]),e._v(" "),r("li",[e._v("Chat 机器人")])]),e._v(" "),r("p",[e._v("问题")]),e._v(" "),r("ul",[r("li",[e._v("静态资源依然存在传统 server")]),e._v(" "),r("li",[e._v("跨域处理")]),e._v(" "),r("li",[e._v("迁移成本高？中间转发")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000019136204",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发函数计算的正确姿势——支持 ES6 语法和 webpack 压缩 - 阿里云栖社区 - SegmentFault 思否"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://juejin.im/post/5d21bd086fb9a07ef63fffb5",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于 Node.js 的轻量级云函数功能实现 - 掘金"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("阿里本地函数调试需要装 docker，坑")]),e._v(" "),r("p",[e._v("腾讯")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如果是node的话，已经可以支持tcf native 来调试，不用docker调试了")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d1c9380f265da1bc94f098e",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端学 serverless 系列——WebApplication 迁移实践 - 掘金"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/weihanli/p/implement-api-gateway-via-tencent-cloud-function.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("借助腾讯云的云函数实现一个极简的 API 网关 - WeihanLi - 博客园"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("API 转发参考")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/WeihanLi/ActivityReservation/blob/dev/ActivityReservation.Clients/ReservationApiFunction/index.ts#L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActivityReservation/index.ts at dev · WeihanLi/ActivityReservation"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("新建云函数，添加触发器")])]),e._v(" "),r("li",[r("p",[e._v("示例代码\n"),r("a",{attrs:{href:"https://github.com/tencentyun/scf-demo-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("tencentyun/scf-demo-repo"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("监控内容更新\n"),r("a",{attrs:{href:"https://www.infoq.cn/article/bzlyqE_7H9e56w5NUWD6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless 实践系列（四）：网站监控脚本的实现-InfoQ"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("静态 + api\n"),r("a",{attrs:{href:"https://www.infoq.cn/article/9IQ0XMLI0-NAdGueu6Nz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless 实践系列（五）：如何将搜索引擎去广告？-InfoQ"),r("OutboundLink")],1)])])]),e._v(" "),r("blockquote",[r("p",[e._v("以一个博客系统为例：前段使用 Vue.js 等框架进行开发，所有的后端逻辑，包括数据库的增删改查，包括某些小功能点的实现，全部用云函数来实现？这样，只需要找一个虚拟空间或者腾讯云的 COS，就可以完成前端的部署，而后端的服务器配置、面对用户激增的服务器运维等，都交给云函数 + 相关产品来实现，这样会大大节约资源，降低成本。")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("查看子账户 api 密钥，用户列表\nhttps://console.cloud.tencent.com/cam")])]),e._v(" "),r("li",[r("p",[e._v("cli 不支持拉取，改用 vscode 扩展，cli 配过信息就不用再配了")])]),e._v(" "),r("li",[r("p",[e._v("cron "),r("code",[e._v("0 0,20,40 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * * *")]),e._v(" "),r("a",{attrs:{href:"https://qqe2.com/cron",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线 Cron 表达式生成器-QQE2.COM 在线工具网"),r("OutboundLink")],1),e._v("\n表达示不能留 ? 号，年要选")])]),e._v(" "),r("li",[r("p",[e._v("命令行中开发，code 只用来调试和部署")])]),e._v(" "),r("li",[r("p",[e._v("调用增强\n"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/583/37316",target:"_blank",rel:"noopener noreferrer"}},[e._v("云函数 Node.js SDK - 开发指南 - 文档中心 - 腾讯云"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/583/11060",target:"_blank",rel:"noopener noreferrer"}},[e._v("云函数 Node.js - 开发指南 - 文档中心 - 腾讯云"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("编辑，可以设置环境变量，调整内存")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("console.log")]),e._v("不要用解构，否则在线调试，打不出来")])]),e._v(" "),r("li",[r("p",[e._v("云函数时间是 utc，建议存 unix，取加 8")])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1537960",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGW，前端新技术赛场：Serverless SSR 技术内幕 - 云+社区 - 腾讯云"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1493846",target:"_blank",rel:"noopener noreferrer"}},[e._v("【腾讯云Serverless】使用云函数快速打造一个智障微信公众号自动回复机器人 - 云+社区 - 腾讯云"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("必须用同步写法，才能返回？")])]),e._v(" "),r("h2",{attrs:{id:"不适合场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不适合场景"}},[e._v("#")]),e._v(" 不适合场景")]),e._v(" "),r("ul",[r("li",[e._v("api 需要长期调用")]),e._v(" "),r("li",[e._v("需要访问境外？")])])])}),[],!1,null,null,null);t.default=o.exports}}]);