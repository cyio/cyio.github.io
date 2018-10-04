# 桌面浏览器兼容

## 国内双核浏览器强制使用Webkit内核渲染页面
```html
<meta name="renderer" content="webkit"> <!-- 360 6.X 以上可识别 -->
<meta name="force-rendering" content="webkit"> <!-- 其他双核可识别 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> <!-- 对于没有自带 IE7 内核的浏览器 强制使用用户已安装的最高版本浏览器渲染, 有Chrome框架的优先使用 -->
```
[360安全浏览器_帮助](http://se.360.cn/v6/help/meta.html)

## 在线兼容测试
* [Browserling - Live interactive cross-browser testing](https://www.browserling.com/browse/ie/9/baidu.com)// 免费只有IE9
* [百度移动云测试中心 | MTC - 流畅 快速 权威](http://mtc.baidu.com/?pname=mymtc&type=webapp)

## Tips
* jQuery 2.x只支持现代浏览器，所以要兼容低版本IE则需要换 1.x 
- IE9开始才支持媒体查询（有BUG）和HTML5新标签，所以需要引入两个JS，添加媒体查询和识别HTML5标签 
* bootstrap3本身就不支持IE低版本，所以在CSS方面也没有做兼容处理 
* 由于bootstrap引入的是normalize.css，缺少对部分HTML5标签的block化重置，导致即使你引入了html5.js，也会有部分标签存在小问题
* 想要兼容IE6 7所花的工作量，就根本没必要用框架了，自己写都更省事……毕竟别人写的东西你还要慢慢去理解，并且发现问题
* [CSS背景图拉伸自适应尺寸，全浏览器兼容 - Chico_Lee的个人空间 - 开源中国社区](http://my.oschina.net/u/555639/blog/419020)

```css
.bg {  
  background: url(http://wyz.67ge.com/wp-content/uploads/qzlogo.jpg);  
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";  
  -moz-background-size: 100% 100%;  
  background-size: 100% 100%;  
}
```
