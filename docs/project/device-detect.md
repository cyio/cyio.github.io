# 设备判断

npm install modernizr --save-dev

存在的问题，刚引入判断不出来，需要一定执行时间？

判断依据：
  * ua 正则判断
  * `'ontouchstart' in window`

如何判断是不是在chrome模拟器中？


## 是否是手机设备
1. 
```js
function isMobileDevice() {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
}
```
[One line function to detect mobile devices with JavaScript (Example)](https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript)

2. mobile-js

两种方法都不完全准

## 数据收集
`navigator.deviceMemory`
chrome only 63+

有上下边界，保护用户隐私，0.25-8

`navigator.hardwareConcurrency` CPU 核心数

[监视JavaScript内存](https://trackjs.com/blog/monitoring-javascript-memory/)

### 有效网络类型

4g > 700kbps 可用于高清、实时视频，跟我们平时说的数值有差异


## 设备单位

物理像素密度高的话，就会多于设备物理宽度

window.screen.availHeight 减掉任务栏
window.screen.availTop

### 获取设备绝对宽度
1. window.screen.width * window.devicePixelRatio

  `devicePixelRatio = 物理像素 / CSS pixel` 会受页面 zoom 影响 如，zoom 110% `devicePixelRatio 1.100000023841858`
  告诉浏览器多少个实际像素应当用来绘制一个 CSS 像素
  最好只在移动端用

  CSS pixel 即熟知的`px`，也叫逻辑像素

  resolution pixel density

  dpi 屏幕一般 72-96，打印会更大，与 dpcm、dppx 区别即计算单位差异，后边是厘米、像素

2. 设置了`<meta name="viewport" content="width=device-width"/>`后，可考虑使用`window.innerWidth`
[css - what exactly is device pixel ratio? - Stack Overflow](https://stackoverflow.com/questions/8785643/what-exactly-is-device-pixel-ratio)

[Element size and scrolling](https://javascript.info/size-and-scroll)
offsetParent 最近父元素
offsetWidth/Height 元素自身带上 border
clientTop/Left `outer width - inner width` 相当于 border 宽度，可能包含滚动条 
clientWidth/Height 带 padding，但不含滚动条
scrollWidth/Height 与clientWidth/Height 类似，但包括了滚出区域（看不到）
scrollLeft/scrollTop 滚出区域，惟一可改值
不要用 CSS 获取宽高，有影响因素，不准或取不到
