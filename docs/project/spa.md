# spa

## seo

原则：
- 营销页面 -> 静态
- App（需要登录） -> Vue
- 少数既需要 SPA 强交互性，又对 SEO 和首屏速度有刚性需求 -> SSR

- prerender-spa-plugin

prerender-spa-plugin 预渲染插件的使用说明 - 个人文章 - SegmentFault
等 v3 稳定再说

- vue-meta

选择这个是哪都能托管

google 支持同步 JS ，但我们一般是异步，服务端渲染有点复杂

最佳实践，参考： 
https://vuesion.github.io/docs/en/

react 
Atyantik/react-pwa


> 声明式地将状态映射到DOM——以尽可能少的干扰方式。如果这就是你所需要的，那么你便可以在几分钟内掌握其复杂性。当应用变得更大时，你可能会开始使用组件，但它不一定必须是SPA。对于真正的spa，您可以引入vue-router，但是否使用模块构建系统仍由您决定。最后，对于一个成熟的、模块化的SPA，是否想要使用Vuex管理您的状态，这取决于您自己。

少数既需要 SPA 强交互性，又对 SEO 和首屏速度有刚性需求的场景，这时候同构 SSR 就派上用场了。

> 
如果是 SPA 这种单页面，基本就是把 index.html 部署到 nginx 后，其他打包部署到 CDN ，包括 JSS 、CSS 、图片、字体等。打包内容会用 WebPack 自动加上文件内容哈希码，然后把 Cache - Control 的 max - age 设置成很大，这样能够充分利用浏览器和 HTTP 协议的缓存，又能保证及时更新。
为什么 index.html 不放到 CDN ？因为如果 CDN 缓存清除不好的话，入口文件没有更新就会导致所有的资源都更新不了，这是个很严重的问题。
如果觉得上面的方式首页白屏时间比较长的话，我们会选择 nginx 后端部署 Node.js 做服务端渲染，解决首页白屏时间过长的问题。或者也可以用 Gatsby 、next.js 之类静态生成工具提前生成静态页面，等待首页加载完成之后，再去动态加载其他页面。

[漫极客 CTO 李焱：大前端之路 —— 如何用 Web 技术一统三端开发](https://mp.weixin.qq.com/s?__biz=MzA4NTU2MTg3MQ==&mid=2655161566&idx=1&sn=27f049021a07290a29a597264f4bd02f&chksm=84602bbeb317a2a8c2f417032c103552f263d8bb58b83e6cbbfb10c30f346f134cb6212251a4&mpshare=1&scene=23&srcid=1015hJjSTWiBRA8loQdO9Daj%2523rd)
