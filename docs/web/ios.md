# iOS

## IOS调试移动端弹窗遮罩input框focus和click事件失效

移动端的登录窗口绝大多数的做法是点击登录，然后弹出固定定位的遮罩窗口，输入用户名、密码等信息进行登录。
在IOS系统下，当input唤起键盘时，会导致遮罩下层的页面出现滚动和底部空白，这时就会影响到遮罩固定定位的页面显示及交互事件。
解决办法：底层页面在一加载进入的时候就记录scrollTop，当遮罩弹出的input失去焦点时，要触发底层页面的滚动事件，让它滚动到遮罩未弹出时的位置，就可以修复input失效的bug。

```js
const isIOS =
  !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

// fix IOS手机唤起键盘，输入框失去焦点后页面元素点击事件位置偏移
function fixIOSInput() {
  if (!isIOS) return;
  window.scroll(0, 0);
}
```
使用
```
input(@blur="fixIOSInput")
```

## 橡皮筋效果
如果弹窗不滚动，没问题，如果需要滚动，只能把露出的内容隐藏
[zipeijun/vue-bounce: 禁用 iOS 平台橡皮筋效果的 Vue 插件](https://github.com/zipeijun/vue-bounce)

```pug
    toolbar(v-show="!showFullscreenModal") // 规避 ios 下 modal 滚动到底露出 fixed 在底部的 toolbar
```

弹出层与父页面都能滚动时，互相影响，需要处理滚动位置恢复

[全屏弹层（滚动场景）](https://codepen.io/cyio/pen/rNOdEQx)

## x 系列 页面底部元素被虚拟键遮挡

[is iphonex](https://codepen.io/cyio/pen/yvbVjz)

```js
// Iphone X 系列，特征是 ios + 长脸
// 微信内置浏览器，需要加下 innerHeight 的判断？
const isIphoneXSeries = () => {
  if (typeof window !== 'undefined' && window) {
    return (
      /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
    );
  }
  return false;
};
```
[Designing Websites for iPhone X | WebKit](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

官方文档

safari 自动处理，会避开刘海和圆角区域，这些区域会填充页面背景色。大部分网站没有问题

其它网站，如有全宽度的水平导航栏，会被虚拟指示条遮挡

设置`viewport-fit=cover`，使用整个屏幕，自己处理。缺点是，要处理各个方向间距，以及旋转后各个方向间距 变化

[兼容iphone x刘海的正确姿势 - 掘金](https://juejin.im/post/5be95fbef265da61327ed8e0)
[iphone x 系列 安全区域](https://codepen.io/cyio/pen/xxwjKyv)

```
  safari 有工具栏，向下滚动时，隐藏，向上时，出现

  wechat 横 微信栏占用两倍调试，遮挡内容，无法通过 cover + padding-top 解决

  when use cover
    safari 上方无问题 竖 地址栏/网址栏 横 无

    toolbar 横 向下滚 仅展示一半，且遮挡

  safari wechat 测试中表现有时不一致，像是缓存了？
```

结论：如果使用 cover，需要
1. 左右下 设置 padding
2. toolbar 设置 bottom padding


