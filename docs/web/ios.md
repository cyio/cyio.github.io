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
如果弹窗不滚动，没问题，滚动不好处理，尽量规避，如把露出的内容隐藏
[zipeijun/vue-bounce: 禁用 iOS 平台橡皮筋效果的 Vue 插件](https://github.com/zipeijun/vue-bounce)

```pug
    toolbar(v-show="!showFullscreenModal") // 规避 ios 下 modal 滚动到底露底
```
