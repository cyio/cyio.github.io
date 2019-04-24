# 桌面浏览器兼容

## 国内双核浏览器强制使用 Webkit 内核渲染页面

```html
<!-- 强制Chromium内核，作用于360浏览器、QQ浏览器等国产双核浏览器： -->
<meta name="renderer" content="webkit" />
<!-- 强制Chromium内核，作用于其他双核浏览器： -->
<meta name="force-rendering" content="webkit" />
<!-- 如果有安装 Google Chrome Frame 插件则强制为Chromium内核，否则强制本机支持的最高版本IE内核，作用于IE浏览器： -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

[旧版 Internet Explorer 淘汰行动「极速浏览器普及计划」](https://support.dmeng.net/kill-old-versions-of-ie.html?utm_source=InternalLinks)

## 在线兼容测试

- [Browserling - Live interactive cross-browser testing](https://www.browserling.com/browse/ie/9/baidu.com)// 免费只有 IE9
- [百度移动云测试中心 | MTC - 流畅 快速 权威](http://mtc.baidu.com/?pname=mymtc&type=webapp)

## Tips

- jQuery 2.x 只支持现代浏览器，所以要兼容低版本 IE 则需要换 1.x

* IE9 开始才支持媒体查询（有 BUG）和 HTML5 新标签，所以需要引入两个 JS，添加媒体查询和识别 HTML5 标签

- bootstrap3 本身就不支持 IE 低版本，所以在 CSS 方面也没有做兼容处理
- 由于 bootstrap 引入的是 normalize.css，缺少对部分 HTML5 标签的 block 化重置，导致即使你引入了 html5.js，也会有部分标签存在小问题
- 想要兼容 IE6 7 所花的工作量，就根本没必要用框架了，自己写都更省事……毕竟别人写的东西你还要慢慢去理解，并且发现问题
- [CSS 背景图拉伸自适应尺寸，全浏览器兼容 - Chico_Lee 的个人空间 - 开源中国社区](http://my.oschina.net/u/555639/blog/419020)

```css
.bg {
  background: url(http://wyz.67ge.com/wp-content/uploads/qzlogo.jpg);
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
}
```

## 工具、库、语言特性兼容性

| name                | compatible         |
| ------------------- | ------------------ |
| vue                 | IE9+               |
| axios               | IE10+              |
| flexbox             | IE10+              |
| http2               | EDGE               |
| srcset/sizes        | EDGE               |
| calc                | IE9+               |
| svg                 | IE9+               |
| cloudflare free ssl | not xp IE/Chromium |
| videojs 7           | IE11               |

- cloudflare 的免费 CDN 只适用于支持 SNI 的浏览器。
  [SSL 证书常见错误姿势分析 - 简书](https://www.jianshu.com/p/d443a3c4971d)
  [This site works only in browsers with SNI support – 木瓜园](https://muguayuan.com/2015/2863.html)
- axios 不支持 IE9 跨域请求
  [Vue - ie9 全面兼容方案](https://github.com/TerryZ/js-develop-skill-summary/blob/master/vue-ie9.md)
