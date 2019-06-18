# SVG

> SVG 在既能满足现有图片的功能的前提下，又是矢量图，在可访问性上面也非常不错，并且有利于 SEO 和无障碍，在性能和维护性方面也比 icon font 要出色许多

- SEO 设置 title 与 desc 标签

## 渲染性能

一些效果需要在用户电脑展示时计算

- 浏览器渲染 svg 的性能一般，还不如 png?（两年前描述）
  [Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/help/detail?helptype=code)
- 即使 SVG 图像比光栅等效图像慢，这种差异通常也不会引起注意
  [SVG Guidelines - Mozilla | MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/SVG_Guidelines)

缺点：

- 小程序目前不支持 SVG 标签，仅仅支持加载 SVG 之后 作为 background-image 进行展示，如 background-image: url("data:image/svg+xml.......)，或者 base64 后作为 background-image 的 url。

浏览器渲染 svg 的性能一般，还不如 png。
[Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/help/detail?helptype=code)

[为什么要用 SVG？- svg 与 iconfont、图片多维度对比 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1154360)
[Delivering Octicons with SVG - The GitHub Blog](https://github.blog/2016-02-22-delivering-octicons-with-svg/)

## 对比 iconfont

- hack
- 不支持多色
- 闪动
- 维护麻烦

[Iconfont 字体生成原理及使用技巧 Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/help/article_detail?article_id=1)
