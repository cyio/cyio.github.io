## 对比

CSR 纯 JS 渲染，易于跨终端
SSR 改善所有指标，但会增加开发调试成本（服务器渲染交互）
SSG 只适合静态内容
ISG 增量生成，解决 SSG 问题，但带来其他问题，如定位和缓存
![](../assets/Pasted%20image%2020221228093741.png)

![](../assets/Pasted%20image%2020221227094939.png)
![](../assets/Pasted%20image%2020221227095117.png)

# SSR

[服务端渲染 (SSR) | Vue.js](https://cn.vuejs.org/guide/scaling-up/ssr.html#why-ssr)

[带你五步学会Vue SSR - 掘金](https://juejin.im/post/5bbda9ed5188255c8f06c0dc)

SSR 的 HTML

1. 更快（尤其是当您的JS与广告/分析等竞争时）
2. 更易于抓取和归档
3. 对可能导致JS失败的许多情况（有缺陷的连接，配置错误的公共wifi，adblocker）具有弹性

同构（通用）

- 首屏白屏问题，客户端只负责解析 HTML
- SEO 问题

权衡：
1. 开发限制，如特殊勾子，外部库需要特殊处理
2. 部署要求，app server vs static server
3. 服务端负载，更占用 CPU，高流量需要考虑合理的缓存

挑战：
1. 两次构建
2. 保证正确的资源链接和提示
3. 以通用的方式管理路由、数据获取和状态存储

对于同构应用来说，我们必须实现客户端与服务端的路由、模型组件、数据模型的共享。

后续访问用客户端渲染

## SSR 对性能优化的提升在哪里

预渲染，提升首屏

[有必要使用服务器端渲染(SSR)吗？ - 知乎](https://www.zhihu.com/question/308792091/answer/575636896)

[官网预渲染方案-有道云笔记](https://note.youdao.com/ynoteshare1/index.html?id=9174b59418d987cd810dc058a7b6a121&type=note)

## Vue 注意点

[Vue 3 的服务端与异步数据获取 - V2EX](https://www.v2ex.com/t/845794)

## SSG（预渲染）

好处：
1. 与 SSR 同等的首屏性能
2. 更容易部署，低负载

限制
1. 静态数据

场景：
1. 营销页面
2. 官网、博客

SSR 实时请求、渲染、响应，IDC

SSG 可以放在 CDN，构建时即确定渲染

[预渲染、SSR、SSG、ISR | 悬笔e绝的个人博客](https://www.xuanbiyijue.com/2021/08/17/%E9%A2%84%E6%B8%B2%E6%9F%93%E3%80%81SSR%E3%80%81SSG%E3%80%81ISR/)

[React v18.0 – React Blog](https://reactjs.org/blog/2022/03/29/react-v18.html#gradually-adopting-concurrent-features)

最佳实践是结合

## nextjs 原理

1. 将 pages 的文件编译
2. 编译时根据文件结构顺便把路由配置表生成
3. 请求时根据请求路径去路由表查询结果，最后根据路由动态加载相应的页面文件。
