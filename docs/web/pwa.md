# PWA

## 可安装
`manifest.json`

## SW

- 需要缓存资源
    - 应用核心 JS CSS
    - 字体
    - 图片
    - 关键 HTTP 请求

## ios 12 支持情况
 still force reload every time app is shown/hidden
 now retain cookies after being reloaded (i.e. login possible)
 forget deep links
 support localStorage
 don't support sessionStorage

 解决：
Switched to localStorage instead of sessionStorage when "standalone" and persist a custom history stack to restore deep links 

[饿了么的 PWA 升级实践 - 黄玄的博客 | Hux Blog](https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/#%25E5%25A4%259A%25E9%25A1%25B5%25E5%25BA%2594%25E7%2594%25A8vuepwa)
[Lavas | 基于 Vue 的 PWA 完整解决方案](https://lavas.baidu.com/)
[Lavas](https://github.com/lavas-project)
[Beyond SPAs: alternative architectures for your PWA  |  Web  |  Google Developers](https://developers.google.com/web/updates/2018/05/beyond-spa)

Trusted Web Activity

[Why Progressive Web Apps Are The Future of Mobile Web [2019 Research]](https://ymedialabs.com/progressive-web-apps)

## 与小程序区别
小、快、轻，应对原生应用弊端，让 web 具有应用能力
两个生态： 开放、封闭

> 传统的 HttpCache，让资源在缓存时性能会很好，而 PWA 是让资源非常可靠地缓存起来，让页面性能一直都很好。

## 激活问题
默认、等待激活，需要等页面关闭，这么设计原因是渐近式

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
