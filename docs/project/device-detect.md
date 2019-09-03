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
