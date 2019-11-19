---
title: 跑马灯效果
date: 2016-12-12
description: 
---
# 跑马灯效果

> 结果做完发现需求不是这个，最后用slider纯文字实现
> HTML 中的`marquee`标签在 HTML5 已废弃
> CSS 中的`marquee`也在 CSS3 中被废弃了

因为CSS3有更好的动画来实现。

一、绝对定位方案
```css
/*CSS代码片段*/

/* 定义一个走马灯动画 */

@keyframes marquee {
  0% { left: 100%; }
  50% { left: 0; }
  100% { left: -100%; }
}

.marquee {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.marquee .text {
  display: block;
  width: 200%;
  height: 100%;
  
  position: absolute;
  overflow: hidden;

  -webkit-animation: marquee 6s linear infinite;
  -moz-animation: marquee 4s linear infinite;
  -ms-animation: marquee 4s linear infinite;
  -o-animation: marquee 4s linear infinite;
  animation: marquee 6s linear infinite;
}
```

二、translate方案在微信下不能用，而animation-play-state实现悬浮时动画暂停，移动端也不适用
[css - CSS3 Marquee Effect - Stack Overflow](http://stackoverflow.com/questions/21233033/css3-marquee-effect)

```html
<p class="microsoft marquee"><span>Windows 8 and ...</span></p>
```
```css
.marquee {
    width: 450px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}

.marquee span {
    display: inline-block;
    padding-left: 100%;  /* show the marquee just outside the paragraph */
    animation: marquee 15s linear infinite;
}

.marquee span:hover {
    animation-play-state: paused
}

/* Make it move */
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
```
