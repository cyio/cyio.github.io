## 300ms延时问题
在移动端的web上存在这样一个问题：你给某个元素绑定上click事件，当你点击这个元素的时候，事件将在300ms之后才得以执行

## fastclick

副作用较多

在chrome上调试的时候，无法点击，解决是切到android设备来调试

```js
+import FastClick from 'fastclick'
 if ('ontouchstart' in window) {
   FastClick.attach(document.body)
 }
```

## hammer-time

手势插件，可兼用于替代 fastclick
[利用hammer.js解决300ms延时 · Issue #77 · youngwind/blog](https://github.com/youngwind/blog/issues/77)
[vuejs/vue-touch at next](https://github.com/vuejs/vue-touch/tree/next)
在 vue 中，用 v-touch 指令替代 v-click，以解决300ms问题

## [GitHub - MeCKodo/vue-tap: vue的tap手势插件](https://github.com/MeCKodo/vue-tap)

可以规避fastclick跟vue click事件冲突的问题.

## docs

Click is delayed on mobile devices for double tap
A major problem with touch on mobile devices today is that the click event is generally delayed by ~300ms in order to recognize the double tap to zoom gesture without sending click events on double tap.  The generally accepted solution is to use a fast-click library (such as FTLabs FastClick) which generates ‘click’ events on touchend.  This has a number of disadvantages including:
  * Threaded scrolling is disabled
  * No way to get touch adjustment
  * No way to get tap supression (i.e. a tap while a fling is in progress should stop the fling, not send a click event).  A Netflix engineer has raised this as a major problem for them

We’ve improved the situation in chrome Android by disabling the click delay for width=device-width sites, and there is ongoing debate for how we might improve it further.

IE10 solution
The -ms-touch-action CSS property lets you specify explicitly whether double tap to zoom is enabled on given elements.  When double tap to zoom is disabled, so is the click delay (eg. see discussion here).  Unfortunately, anything relating to gestures is out of scope for the W3C standard version of pointer events.  Luckily we were able to add ‘manipulation’ (which disables double-tap without disabling pinch-zoom) within these constraints.

[Issues with touch events - Google 文档](https://docs.google.com/document/d/12-HPlSIF7-ISY8TQHtuQ3IqDi-isZVI0Yzv5zwl90VU/edit#heading=h.qwzwdq9jbvjb)
