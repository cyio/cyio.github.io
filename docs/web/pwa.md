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
