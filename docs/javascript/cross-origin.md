# 跨域

1. 服务端设置允许：Access-Control-Allow-Origin
2. jsonp 伪跨域，需要服务端配合
3. 利用Apache转发 如何解决 Ajax 跨域请求不到的问题？ - pig pig 的回答 - 知乎
   同源策略和跨域访问 - lg2045的个人空间 - 开源中国社区
4. gulp 代理插件 gulp-connect-proxy
浅谈WEB跨域的实现（前端向） - vajoy - 博客园
Javascript跨域访问解决方案 - 老唐 的专栏 - 博客频道 - CSDN.NET
ajax跨域问题解决方案 | w3cboy,最专业的前端开发博客

## JSONP

```js
import jsonp from 'jsonp-es6'
```
[axios/COOKBOOK.md at master · mzabriskie/axios](https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md#jsonp)

## 代理

* `https://bird.ioliu.cn/v1/?url=`

## React / Vue 设置代理（仅开发模式用）

* `create-react-app`可在 package.json 中设置`proxy: "http://localhost:8080"`，要配合 fetch/ajax 使用
* `vue-cli`创建的可在`config.js/index.js`中设置
```js
dev: {
  // ...
	proxyTable: {
		'/api': {
			target: 'http://localhost:8081',
			changeOrigin: true
		}
	},
```
[Vue-cli proxyTable 解决开发环境的跨域问题 - 简书](http://www.jianshu.com/p/95b2caf7e0da)
[JS中关于跨域及实现方法 | plainnany](https://plainnany.github.io/2017/08/05/JS%25E4%25B8%25AD%25E5%2585%25B3%25E4%25BA%258E%25E8%25B7%25A8%25E5%259F%259F%25E5%258F%258A%25E5%25AE%259E%25E7%258E%25B0%25E6%2596%25B9%25E6%25B3%2595/)
[使用vue-axios和vue-resource解决vue中调用网易云接口跨域的问题 - 个人文章 - SegmentFault](https://segmentfault.com/a/1190000011072725)
[前端跨域问题及解决方案 · Issue #2 · wengjq/Blog](https://github.com/wengjq/Blog/issues/2)
[由同源策略到前端跨域 | louis blog](http://louiszhai.github.io/2016/01/11/cross-domain/)
