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

## 参考

[饿了么的 PWA 升级实践 - 黄玄的博客 | Hux Blog](https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/#%25E5%25A4%259A%25E9%25A1%25B5%25E5%25BA%2594%25E7%2594%25A8vuepwa)
[Lavas | 基于 Vue 的 PWA 完整解决方案](https://lavas.baidu.com/)
[Lavas](https://github.com/lavas-project)
[Beyond SPAs: alternative architectures for your PWA  |  Web  |  Google Developers](https://developers.google.com/web/updates/2018/05/beyond-spa)

Trusted Web Activity

[Why Progressive Web Apps Are The Future of Mobile Web [2019 Research]](https://ymedialabs.com/progressive-web-apps)