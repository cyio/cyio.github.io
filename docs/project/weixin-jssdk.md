http://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5

接口安全域名，一级二级，后面不需要，可以设置本地测试 IP
指定分享路径，也需要配置？
[微信公众平台测试号](mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
[微信JS-SDK“分享信息设置”API及数字签名生成方法 - 简书](https://www.jianshu.com/p/9f9fa12dd08a)

## axios 提交时用 formdata 形式
当使用vue-resource或者axios请求后台数据时，vue-resource和axios发送请求携带的数据默认以request payload的形式发送给后台，而一般我们使用的都是form data的形式。
[VUE开发中请求数据遇到的坑 – 前端小筑](http://www.onlyued.com/archives/344)
[vue.js - vue中使用axios的配置 - SegmentFault 思否](https://segmentfault.com/q/1010000009860888)

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
	appWeixin(response.data, '', '我的本香日记·团圆饭', '快来看我们家的团圆饭哦')
})
```
用开发工具看，最下面会有`FORMDATA`

参考这个配置，把 axios 封装下再调用 [Axios的配置 | Hope's Blog](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)

## 常见错误
1. param is empty:jsApiList 中没有参数
		注意：你需要使用的所有的API都需要已数组元素的形式写入该参数中

2. invalid url domain：无效的域名
		注意：appid和appsecret是否写正确，JS接口安全域名是否正确

3. require subscribe 错误说明你没有订阅该测试号，该错误仅测试号会出现

4. 桌面端先调试，后移动端

5. share config 中的 link，必须带有 http 协议，避免手写，用`location.orgin`
