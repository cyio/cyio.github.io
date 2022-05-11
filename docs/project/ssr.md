# SSR

[带你五步学会Vue SSR - 掘金](https://juejin.im/post/5bbda9ed5188255c8f06c0dc)

SSR 的 HTML

1. 更快（尤其是当您的JS与广告/分析等竞争时）
2. 更易于抓取和归档
3. 对可能导致JS失败的许多情况（有缺陷的连接，配置错误的公共wifi，adblocker）具有弹性

同构

- 首屏白屏问题，客户端只负责解析 HTML
- SEO 问题

后续访问用客户端渲染

## SSR 对性能优化的提升在哪里

预渲染，提升首屏

[有必要使用服务器端渲染(SSR)吗？ - 知乎](https://www.zhihu.com/question/308792091/answer/575636896)
[官网预渲染方案-有道云笔记](https://note.youdao.com/ynoteshare1/index.html?id=9174b59418d987cd810dc058a7b6a121&type=note)

## Vue 注意点

[Vue 3 的服务端与异步数据获取 - V2EX](https://www.v2ex.com/t/845794)

## SSG

SSR 实时请求、渲染、响应，IDC

SSG 可以放在 CDN，构建时即确定渲染

[预渲染、SSR、SSG、ISR | 悬笔e绝的个人博客](https://www.xuanbiyijue.com/2021/08/17/%E9%A2%84%E6%B8%B2%E6%9F%93%E3%80%81SSR%E3%80%81SSG%E3%80%81ISR/)

[React v18.0 – React Blog](https://reactjs.org/blog/2022/03/29/react-v18.html#gradually-adopting-concurrent-features)

最佳实践是结合
