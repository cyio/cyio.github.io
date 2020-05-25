# 微信开发

接口安全域名，一级二级，后面不需要，可以设置本地测试 IP

指定分享路径，也需要配置？

[微信公众平台测试号](mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
[微信JS-SDK“分享信息设置”API及数字签名生成方法 - 简书](https://www.jianshu.com/p/9f9fa12dd08a)

## 常见错误
1. param is empty:jsApiList 中没有参数
		注意：你需要使用的所有的API都需要已数组元素的形式写入该参数中

2. invalid url domain：无效的域名
		注意：appid和appsecret是否写正确，JS接口安全域名是否正确

3. require subscribe 错误说明你没有订阅该测试号，该错误仅测试号会出现

4. 桌面端先调试，后移动端

## 微信内置浏览器授权
[微信开放文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)
[微信基础和Sandbox | StuQ《Node.js微信开发》](https://i5ting.github.io/wechat-dev-with-nodejs/wechat/init.html)

[OAuth wechat-dev-with-nodejs/oauth.md at ff32253a419a35b9f9bf8842aa973c3e369f2b0a · i5ting/wechat-dev-with-nodejs](https://github.com/i5ting/wechat-dev-with-nodejs/blob/ff32253a419a35b9f9bf8842aa973c3e369f2b0a/wechat/oauth.md)

沙盒测试号 取不到 unionid，需要 微信开放平台 管理中心 绑定公众账号 绑定测试号。依赖 开发者资质认证， 依赖 营业执照。

域名配置，也可以用 IP，但用隧道的好处，是可以非本机访问

订阅号和小程序都可以个人注册，但是开放平台不可以。

[整个教程需要申请微信开发者资质吗？就是用交那个 300 元申请认证吗？ | Laravel China 社区](https://learnku.com/laravel/t/24969)

前端页面，就是重写向到微信页面，取到一次性 code，给后端

natapp 使用参考

[微信授权登录开发的两种方式 - 知乎](https://zhuanlan.zhihu.com/p/104324804)

备用库：
[liangyali/passport-wechat: Passport strategy for authenticating with Wechat](https://github.com/liangyali/passport-wechat)

[微信公众号授权登录和微信网页授权登录 - 简书](https://www.jianshu.com/p/f77c949fc837)

## 二维码扫码登录
测试号，没有 snsapi_login 权限

[准备工作 | 微信开放文档](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)
[第三方登录之WX登录从入门到填坑 - 六道有言 - OSCHINA](https://my.oschina.net/mtdg/blog/3235931/print)

