# PWA

## 可安装
`manifest.json`

## SW

- 需要缓存资源
    - 应用核心 JS CSS
    - 字体
    - 图片
    - 关键 HTTP 请求

## 与小程序区别

小、快、轻，应对原生应用弊端，让 web 具有应用能力
两个生态： 开放、封闭

> 传统的 HttpCache，让资源在缓存时性能会很好，而 PWA 是让资源非常可靠地缓存起来，让页面性能一直都很好。

## 激活问题

默认等待激活，需要等页面关闭，这么设计原因是渐近式

[How to immediately activate a service worker with vanilla JS | Go Make Things](https://gomakethings.com/how-to-immediately-activate-a-service-worker-with-vanilla-js/)
[vue.js - How to do skipwaiting with register-service-worker in vue app? - Stack Overflow](https://stackoverflow.com/a/56569087/5657916)
```js
// vue.config.js
    pwa: {
        ...
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true
        }
    },
```

[用 Vue 做 PWA （三）：理解生命周期 - AC Dustbin](https://allanchain.github.io/blog/post/vue-pwa-3/)
[VueJs PWA: Notify User about the App Update | skipWaiting ~ 360learntocode](https://www.360learntocode.com/2020/12/vuejs-pwa-notify-user-of-app-update.html)

## 离线包怎么更新？怎么知道需要打开哪个离线包？

后台更新：每次进入一个新页面，异步检查配置文件，是否需要更新。

通过版本号。

* 网页中的主题色设置`<meta name="theme-color" content="#2196F3">`，优先于 manifest.json 中的设置`"theme_color": "#2196F3"`
[使用Service Worker做一个PWA离线网页应用 – 人人网FED博客](https://fed.renren.com/2017/10/04/service-worker/)

## 缓存策略

5 种，常用的是缓存优先和网络优先

监听 fetch 事件

1. 缓存优先——首先查看缓存，当缓存失效时再去访问网络。这一策略适用于资源文件，如字体、样式、图片等

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
```

在上面的代码中，我们首先从缓存中获取资源，如果缓存中没有资源，则从网络获取资源。如果网络请求失败，则返回一个空响应。

2. 网络优先：首先查看网络，当网络失败时应用本地缓存。这一策略适合实时数据，比如获取天气信息的 AJAX 请求。这样每次页面刷新都可以获得最新的天气信息，当离线时会降级到使用本地缓存。并给出离线的提示。

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        return response;
      })
      .catch(function() {
        return caches.match(event.request);
      })
  );
});
```

在上面的代码中，我们首先从网络获取资源，如果网络请求失败，则从缓存中获取资源。如果缓存中也没有资源，则返回一个空响应。

[百度搜索对PWA的探索和初步实践](http://www.infoq.com/cn/articles/exploration-and-practice-of-baidu-search-for-pwa)

### cache-first

https://pwa-demo.glitch.me/

https://developer.chrome.com/docs/workbox/caching-strategies-overview/

## 结合业务

- 体验接近离线应用，提高 xx 率
- 节省公司资源：与常规缓存相比，能减少多少资源请求？
- 技术复杂度和成本：相较 SSR 低

## Issues

离线后只能从入口访问？不能从子页面

### ios 12 支持情况
 still force reload every time app is shown/hidden
 now retain cookies after being reloaded (i.e. login possible)
 forget deep links
 support localStorage
 don't support sessionStorage

 解决：
Switched to localStorage instead of sessionStorage when "standalone" and persist a custom history stack to restore deep links 

## vite-plugin-pwa

vite-plugin-pwa 的原理就是通过 Vite 的插件机制，自动生成 PWA 所需的 Service Worker 和 Web App Manifest 文件，并将其注入到 HTML 文件中，从而实现 PWA 的离线访问和快速加载。

- [x] 用本地环境起 vite 项目，看产出物

## 调试

开启日志

[https://developer.chrome.com/docs/workbox/troubleshooting-and-logging/#without-a-bundler](https://developer.chrome.com/docs/workbox/troubleshooting-and-logging/#without-a-bundler)

webpack 生成配置方法

https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-GenerateSW

## workbox v6 核心方法

1.  precaching：用于在 Service Worker 安装期间缓存静态资源的方法，可以通过配置文件来指定要缓存的文件。【首屏依赖文件，一次性，更新文件，缓存即失效？】
    
2.  routing：用于在 Service Worker 运行期间拦截网络请求并返回缓存响应的方法。可以根据请求的 URL、请求方法和其他条件来匹配请求。【非首屏依赖文件，动态的，资源会很多】
    
3.  strategies：用于定义缓存策略的方法。Workbox 提供了几种常见的缓存策略，如 Cache First、Network First、Stale While Revalidate 等。
    
4.  expiration：用于设置缓存的过期时间的方法。可以根据时间或缓存条目数量来设置过期时间。
    
5.  background sync：用于在离线状态下将数据保存到后台，直到网络恢复时再进行同步的方法。【比如文档场景】
    
6.  workbox-window：用于在 Web 应用程序中获取 Service Worker 注册对象、访问缓存和发送消息的方法。


## api

### precacheAndRoute

revision 为 null，表示根据 URL 来，最佳实践是
1. html 用  revision，由 hash 生成，因为不能改名
2. 其他资源用 hash url

https://developer.chrome.com/docs/workbox/modules/workbox-precaching/

## 参考

[饿了么的 PWA 升级实践 - 黄玄的博客 | Hux Blog](https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/#%25E5%25A4%259A%25E9%25A1%25B5%25E5%25BA%2594%25E7%2594%25A8vuepwa)
[Lavas | 基于 Vue 的 PWA 完整解决方案](https://lavas.baidu.com/)
[Lavas](https://github.com/lavas-project)
[Beyond SPAs: alternative architectures for your PWA  |  Web  |  Google Developers](https://developers.google.com/web/updates/2018/05/beyond-spa)

Trusted Web Activity

[Why Progressive Web Apps Are The Future of Mobile Web [2019 Research]](https://ymedialabs.com/progressive-web-apps)