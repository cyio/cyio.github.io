# 微信小程序

(学任何东西，官方Demo，文档，一定要放在手边，为什么不能一步一步走)

* 场景：结合原生功能，如扫码，摩拜
* 商业上，获客成本是 App 的 1/5，受益于微信庞大的用户体量，可作为正式产品的精简版，过渡品
* 没有 window，所以用到 window 和 document 的库都不行，如 jQuery 和 zepto
* 多人项目可共用 appid ，可真机调试，体验发布只能一个
* rpx 是 px 的 2 倍，1 个物理像素
* wx:key 警告解决， wx:key="key"
* wxss不支持引用本地资源，避免用 base64，那图只能放线上了
* wxml中配置 data-testid 传递字符串，不支持函数直接传参
* 操作反馈时用 toast，询问行为时用 modal，表单提交后用页面
* 引入 promise [微信小程序 引入es6 promise - 简书](http://www.jianshu.com/p/aeb95c210b3c)
* 小程序的网络请求接口 wx.request()不带 Cookies ，这让传统基于 Cookies 实现的会话管理不再适用
* 不支持HTML、没有Dom。 以前做好的h5页面没法直接用。
* 小程序源码打包后的大小限制为1M，超大传不上去。
* 网络请求单次 wx.request传输的数据最大也是1M。
* 底部工具栏（MINA 框架实现的 tab bar）最多5个 tab
* 小程序页面只能同时打开5个，如果交互流程较长难以支持
* 通过 wx. navigateTo 推入后台的页面最多5层，超过会无法打开新页面。
* 不支持 A 标签，无法打开普通网页。
* 本地缓存数据最大10M
* 尽量使用动态的长度单位rpx（有点类似android里的dpi，类似，不是完全）
* 小程序中是没有Cookie的，为了兼容目前大部分web app 的登录管理是使用cookie的。小程序在请求发送时，客户端可以动态的给请求设置Header发送报文的cookie
* H5中，通过微信授权一般采用url重定向的方式获取code；在小程序中，通过wx.login获取code
* 小程序用storage替代了H5中的localstorage、sessionstorage。storage对每个小程序的大小是10M，支持同步和异步

这种方式一般是在wxml中绑定事件，同时设置需要传递的数据，如果需要传递多个，可以写多个data-[参数]的方式进行传递

```js
<view bindtap="clickMe" data-testId={{testId}}">
    ...
</view>
在js页面中自定义方法clickMe中接收

Page({
    clickMe: function(event) {
        var testId = event.currentTarget.dataset.testid;
        wx.navigateTo({
            url: '../../pages/test/test'
        })
    }
})
```
注意：通过wxml设置data-[参数名]传递参数，[参数名]只能是小写，不能有大写

* 过滤器
```js
Page({
    data: {
        //原始数据
        user : {
            birthday : new Date(),
        },
        // 相当于使用过滤器的表达式
        get userBirthday(){
            return dateFormat(this.user.birthday, 'yyyy-MM-dd');
        },
    },
    ...
```

示例
```xml
<!--index.wxml-->
<view class="container">
    <scroll-view scroll-y="true" bindscrolltolower="loadMore" 
        lower-threshold="10" class="scroll-wrapper" 
        style="height: {{winH}}px;">
        <navigator url="../pic/pic?index={{index}}" wx:key="id"
            hover-class="navigator-hover" wx:for="{{items}}" >
            <view class="scroll-view-item">
                <image src="{{item.img}}_/fw/480"></image>
                <view class="desc-wrap">
                    <text class="desc">{{item.desc}}</text>
                </view>
            </view>
        </navigator>
    </scroll-view>
</view>
```

## wepy

* async/await 使用前要 import 'wepy-async-function'
* app.wpy 为程序入口，在 config 里定义页面
```js
config = {
	pages: [
		'pages/index'
	],
```
* 在函数运行周期之外的函数里去修改数据需要手动调用$apply方法，指的就是异步回调
* 混合，特殊的是 methods，兼容式混合，同名 method 先响应本身，再响应 mixin 中的
* css 类绑定 `:class="{red: num > 55, green: num < 45}`
* 列表 `<repeat for="{{groupList}}" index="index" item="item" key="key">` 

## 学习参考

[JDHot/20161228_The_Birth_Of_JD_wxapp.pdf at master · o2team/JDHot](https://github.com/o2team/JDHot/blob/master/201612/20161228_The_Birth_Of_JD_wxapp.pdf)
[微信小程序跨页面通信解决思路 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2017/01/19/wxapp-event/)

## webview
限制比较多，如 https，域名验证
[关于微信小程序webview的使用 - 个人文章 - SegmentFault](https://segmentfault.com/a/1190000012250564)
第三方页面无法完成业务域名校验

## 域名配置
备案，https，用不了自己和 leancloud 免费的，只能用数据库了

## 不支持过滤器
- ES6 getter 只能操作对象？
- wxs 脚本，相当于原生 JS，不支持 ES6
- 修改原始数据

## 不使用原生的复选框大圆圈
```css
radio, checkbox {
  display: none
}
```

## 客服消息
客服消息弹一个链接，跳到二维码，让用户长按识别二维码去关注服务号

## 下拉刷新跟 toast 配合起来比较好


## 退出小程序
```js
wx.navigateBack({
  delta: 0,
})
```

## 无法监听返回
> 微信官方觉得阻止后退是不合理的，所以不提供该api

## 输入框 input
num 类型会调微信自己的输入框
textarea 默认在键盘上面多个栏
文字与键盘最好保持一定距离
```vue
:show-confirm-bar='false'
cursor-spacing="15" 
```
编译后是这样`show-confirm-bar="{{false}}"`

## tabbar 的非首页中，如果 input/textarea 在屏幕下半区域，弹出软键盘后，顶栏会掉下来
* 设置为首页，就正常，如此 hack，再跳转，痕迹明显
* wx.scrollTop 需要配合改页面高度？
* 最好改设计，转场

## webview
默认会铺满，调第三方页面无法处理返回

## session key 两端不一致
401 请求拦截，重新从服务器获取新的 session key

## 图片优化
* 上 cdn
* 大图片存到 storage

## 全局数据
全局store怎么使用啊 · Issue #89 · Meituan-Dianping/mpvue https://github.com/Meituan-Dianping/mpvue/issues/89#issuecomment-373011661

## 小程序入口二维码
比如某个页面，由于微信返回的是二进制文件流，需要后端转换为前端可展示的图片

## 登录详解
* 获取用户信息组件与 wx.getUserInfo 相比，不受弹框限制
* 推荐按钮组件获取用户信息，未来不再支持 api 方式主动调起
> 小程序中，在页面中加入一个 button 按钮，并将 open-type 属性设置为 getUserInfo 。

[获取用户信息方案介绍 | 微信公众平台 开发者社区](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=c45683ebfa39ce8fe71def0631fad26b&token=60776517&lang=zh_CN)
[小程序•小故事(6)——微信登录能力优化 | 微信公众平台 开发者社区](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=000e2aac1ac838e29aa6c4eaf56409)

## 尺寸单位
iphone 6  1rpx = 0.5px
[教程 | 《小程序开发指南》](https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=000c44c49141887b00864fbba5100a)


## mpvue computed 无法跨页面响应变化
computed 只 mounted 时调用
> vuex是支持的。但是计算属性不支持

## 登陆流程
* 前端获取 code 发给后端换取 skey/token
  执行时机
  - token 不存在
  - checkSession 失效
* 用户微信资料后端存取
  - 只需要用户一次允许授权，相当于一般网站的注册
  - 再次请求授权时，允许即更新资料，拒绝依然能显示
* cookie 传递
	[微信小程序cookie-session问题 | 等英博客](https://www.waitig.com/%25E5%25BE%25AE%25E4%25BF%25A1%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fcookie-session%25E9%2597%25AE%25E9%25A2%2598.html)

## 转发
* 可以判断是否成功
* 判断转发到个人还是群聊，需要执行 wx.share 带上 ticket 参数，res 有 shareTickets 是群聊天
* 只能按页面处理，不支持全局
