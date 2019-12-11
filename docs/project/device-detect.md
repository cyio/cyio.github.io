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

