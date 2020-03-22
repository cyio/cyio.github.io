[微信支付当前页面的URL未注册问题[单页面]_网络_chi1130的博客-CSDN博客](https://blog.csdn.net/chi1130/article/details/99479309)
[vue router 与微信分享失败 - Deskid's Blog](https://deskid.github.io/2018/02/02/2018-02-02-1/)

```js
axios({
      url: window.config.api_url + '/v1/default/weixinjs',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: qs.stringify({
        url: window.location.href
      })
    }).then(response => {
      console.log(response.data)
```
[Encode URL in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/332872/encode-url-in-javascript)
[你过来，悄悄告诉你怎样适配iPhone X？ - 简书](https://www.jianshu.com/p/a1e8c7cf8821)
[JavaScript 判断 iPhone X Series 机型 - 掘金](https://juejin.im/post/5c4bd0b7518825254b5a4daf)
