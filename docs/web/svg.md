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

## 应用

- 绝大部分场景推荐使用 img 方式
- 预载页面时使用 inline 方式，因为可立即展示

[The Best Way to Embed SVG on HTML (2019)](https://vecta.io/blog/best-way-to-embed-svg)

```css
.icon_no-content {
  width: 119px;
  height: 93px;
  background-image: url('~@/assets/images/no-content.svg');
  background-repeat: no-repeat;
}
```

## 对比 iconfont

- hack
- 不支持多色
- 闪动
- 维护麻烦

[Iconfont 字体生成原理及使用技巧 Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/help/article_detail?article_id=1)

## 处理
- 包含大量对展示无用信息，在线精简 [IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/#/select)
- 本地工具 [svg/svgo: Node.js tool for optimizing SVG files](https://github.com/svg/svgo)
- 在线版 [SVGOMG - SVGO's Missing GUI](https://jakearchibald.github.io/svgomg/)
  能精简 50%-70%
- 设计时，减少路径锚点（控制点）

[SVG精简压缩工具svgo简介和初体验 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)
[SVG 高性能优化清单 - 前端 - 掘金](https://juejin.im/entry/59bf203b6fb9a00a496e51c8)

## 改变颜色
[使用CSS添加SVG背景色](https://edwardvoon.github.io/2018/09/29/Colorizing%2520SVG%2520Backgrounds/)

## 基础

```
arc 弧
rect 矩形
storke 划，击
```

[HTML中嵌入SVG图片的N种方式 - 北月武馆 - SegmentFault 思否](https://segmentfault.com/a/1190000010942431)
[Use React SVG components for icons instead of an icon font · Issue #10353 · ant-design/ant-design](https://github.com/ant-design/ant-design/issues/10353)

## 路径动画

```
line 888
storke-dasharray:888
stroke-dashoffset:888
```
```css
  from {
    stroke-dashoffset: 2242.58740234375;
  }
  to {
    stroke-dashoffset:0;
  }
```

线性渐变
```
svg
  defs
    linearGradient
```
