# 跨源（跨域）
[[toc]]

## 定义

翻译问题，实际是跨源
origin = protocol + domain + port

> 出于安全原因，浏览器限制从**脚本内**发起的跨源 HTTP 请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。 这意味着使用
> 这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非使用 CORS 头文件。

1. 服务端设置允许：Access-Control-Allow-Origin
2. jsonp 伪跨域，需要服务端配合
3. 利用 Apache 转发 如何解决 Ajax 跨域请求不到的问题？ - pig pig 的回答 - 知乎
   同源策略和跨域访问 - lg2045 的个人空间 - 开源中国社区
4. gulp 代理插件 gulp-connect-proxy
   浅谈 WEB 跨域的实现（前端向） - vajoy - 博客园
   Javascript 跨域访问解决方案 - 老唐 的专栏 - 博客频道 - CSDN.NET
   ajax 跨域问题解决方案 | w3cboy,最专业的前端开发博客

## 分类

1. 请求跨域 
  a. cors
  b. jsonp
2. 页面跨域 
  a. postMessage
  b. document.domain（不推荐，标准已移除）

## JSONP

由于同源策略的限制，`XmlHttpRequest`只允许请求当前源，`script`标签没有同源限制

~~但是现在浏览器，默认会检查 MIME-type，如 script 请求 json 会被 CORB 拦截~~

```js
import jsonp from 'jsonp-es6'
```

[axios/COOKBOOK.md at master · mzabriskie/axios](https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md#jsonp)
[jsonp跨域资源引起CORB_记忆阁楼 - SegmentFault 思否](https://segmentfault.com/a/1190000018313378)
[Fetch Standard CORB](https://fetch.spec.whatwg.org/#corb)

jsonp 数据结构
```
jsonpcallback({
  "id": 1,
  "room": "main bedroom",
  "items": [ "bed", "chest of drawers" ]
});
```
服务端代码，返回的是一个函数调用，数据作为参数
```java
    //用回调函数名称包裹返回数据
    String result = callback + "(" + jsonData + ")";
    response.getWriter().write(result);
```
客户端代码，请求文件 MIME type 应该是 javascript
```js
function requestJSONP(url) {
  // create script with passed in URL
  var script = document.createElement('script');
  script.src = url;
  script.async = true;
  
  // after the script is loaded (and executed), remove it
  script.onload = function () {
    this.remove();
  };
  
  // insert script tag into the DOM (append to <head>)
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}

var url = "https://api.map.baidu.com/place/v2/search?query=ATM机&tag=银行&region=北京&output=json&ak=F552bedbee2ec8fa6bae7b7a08201&callback=callback";

requestJSONP(url)

var callback = function (data) {
  var json = JSON.stringify(data);
  console.log(json);
};
```

## CORS

服务器通过设置 Access-Control-Allow-Origin 来指定接受哪些域（以下仅用于跨域情况）

- 需要服务器设置支持
- Access-Control-Allow-Origin 有两种情况，一个精确域名或`*`

  如何配置多个，写多条？缓存允许多个访问需要设置`vary`

- ~~Access-Control-Allow-Credentials 表示是否允许发送 cookie，只能是 true，不需要就不要写~~
- Access-Control-Allow-Credentials 读取跨域响应内容限制，客、服均需设置
- cookie 比较敏感，需要两端配合，才能传送，且只能同源，域名要求至少有两个点，localhost 不符合
- 不管是否为跨域请求，ORIGIN 字段总是被发送
- Chrome/Firefox 不允许 https 向 http 发跨域请求，会被拦截

[绕过浏览器 SOP，跨站窃取信息：CORS 配置安全漏洞报告及最佳部署实践 | Jianjun Chen's Homepage](https://www.jianjunchen.com/post/cors%E5%AE%89%E5%85%A8%E9%83%A8%E7%BD%B2%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/#%E4%B8%80-%E8%83%8C%E6%99%AF)

[javascript - Http requests withCredentials what is this and why using it? - Stack Overflow](https://stackoverflow.com/questions/27406994/http-requests-withcredentials-what-is-this-and-why-using-it)

[axios 的 cookie 跨域以及相关配置 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000011811117)

[http - Set-Cookie header has no effect - Stack Overflow](https://stackoverflow.com/questions/46288437/set-cookie-header-has-no-effect)

[ajax 如何带上 cookie - DCloud 问答](https://ask.dcloud.net.cn/article/13372)

[webpack-dev-server 代理解决 cookie 丢失问题 - 掘金](https://juejin.im/post/5a9e6592f265da23870e59eb)

## proxy

- `https://bird.ioliu.cn/v1/?url=`

### React / Vue 设置代理（仅开发模式用）

- `create-react-app`可在 package.json 中设置`proxy: "http://localhost:8080"`，要配合 fetch/ajax 使用
- `vue-cli`创建的可在`config.js/index.js`中设置
- 要代理跨域请求，请求必须指向代理地址（localhost）才 work

```js
dev: {
  // ...
  proxyTable: {
    '/api': {
      target: 'http://localhost:8081',
      // changeOrigin: true // 不是必须？
      pathRewrite: {
        '^/api': '' // 重写接口
      }
    },
    // http://example.com/result/xxxx.mp4
    '/result': {
      target: 'http://example.com',
    }
  },

devServer: {
  ...
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}
```

[Vue-cli proxyTable 解决开发环境的跨域问题 - 简书](http://www.jianshu.com/p/95b2caf7e0da)
[JS 中关于跨域及实现方法 | plainnany](https://plainnany.github.io/2017/08/05/JS%25E4%25B8%25AD%25E5%2585%25B3%25E4%25BA%258E%25E8%25B7%25A8%25E5%259F%259F%25E5%258F%258A%25E5%25AE%259E%25E7%258E%25B0%25E6%2596%25B9%25E6%25B3%2595/)
[使用 vue-axios 和 vue-resource 解决 vue 中调用网易云接口跨域的问题 - 个人文章 - SegmentFault](https://segmentfault.com/a/1190000011072725)
[前端跨域问题及解决方案 · Issue #2 · wengjq/Blog](https://github.com/wengjq/Blog/issues/2)
[由同源策略到前端跨域 | louis blog](http://louiszhai.github.io/2016/01/11/cross-domain/)

## postMessage

- html5 api，页面与 service worker 通信用的就是这个
- 出于安全考虑，需要做 origin 判断
- 窗口是 open/iframe 关系

  [postMessage 可太有用了 - 掘金](https://juejin.im/post/5b8359f351882542ba1dcc31)

  [手记：iframe、postMessage 及其它跨域通信实践 - 作业部落 Cmd Markdown 编辑阅读器](https://www.zybuluo.com/EncyKe/note/516702)

  [Cross-window communication](https://javascript.info/cross-window-communication)

- 用法：

  ```js
  // 父
  $iframeEl.contentWindow.postMessage()

  // 子
  window.parent.postMessage(res, "*");    

  window.addEventListener("message", (event) => {})
  ```
  发送的数据对象会经过 structured clone algorithm ，递归 + 维护一份已访问对象引用 map，避免循环引用。

## 发散：页面通信还有哪些方法
- storage event 作用于 localStorage/sessionStorage 共享的页面

    ```js
    let o = window.open('http://baidu.com')
    o.focus()
    ```
    即使同源，并不能访问或修改 window 下的大部分变量

[Same-origin policy - Web security | MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

