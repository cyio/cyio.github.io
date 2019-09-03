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
