# CSS 动画
[[toc]]

## 基础

- 弹出框，如播放器

  [fancyBox - Fancy jQuery Lightbox Alternative](http://fancyapps.com/fancybox/#examples)

- 滚动页面时，元素出现动画

  - [Reveal Animations When Scrolling — WOW.js](http://mynameismatthieu.com/WOW/)
  - 加上 wow 后，元素在用户滚动到前隐藏
  - 可以自己写 JS 配合`animate.css`

  ```html
  class="animated wow fadeInDown"
  ```

  [ajlkn/jquery.scrollex: Nifty scroll events for jQuery.](https://github.com/ajlkn/jquery.scrollex)

- 视差滚动
  [Victa/scrolly: Super simple and easy to use parallax plugin for jQuery (THIS PROJECT IS NOT MAINTAINED ANYMORE)](https://github.com/Victa/scrolly)
  ```js
  // Scrolly links.
  $('.scrolly').scrolly({
    speed: 400
  })
  ```

- animation 是缩写属性，类似 background，有几种缩写形式，参看 MDN

  > 会自动插入补间动画

  最简单的`animation: 3s slidein`

  ```
  duration 持续时间
  type 类型 默认 ease 
  delay 延迟开始时间
  iteration-count 循环次数
  direction 方向
  ```

- timing 定时、记时

  `timing-function` 作用于每两个关键帧之间，而不是整个动画。

  `steps` 第一个参数表示补帧数，第二个参数表跳过，可选

  `timing-function: steps(24)`; 人眼中的动画

  `alternate` 交替

[深入理解 CSS3 Animation 帧动画 - 【Aaron】 - 博客园](http://www.cnblogs.com/aaronjs/p/4642015.html)

[css3 animation 属性众妙 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2016/11/28/css3-animation-properties/)

- MDN：CSS 与 JS 动画性能的比较

  在 Firefox 中的对比测试表现是很接近的， 但文档为推荐使用 CSS 给出了另外的理由（GPU 渲染、手机端的表现）

  结论：**尽量使用 CSS transitions/animations**

[CSS and JavaScript animation performance - App Center | MDN](https://developer.mozilla.org/en-US/Apps/Fundamentals/Performance/CSS_JavaScript_animation_performance)

## 实例

- [CSS 变色动画-基础](https://codepen.io/cyio/pen/BKVeNJ)
- [transition 渐变然后复原，animation 不一样](https://codepen.io/cyio/pen/RBXEJm?editors=1100)
- [css 时序错开渐显动画](https://codepen.io/cyio/pen/xxxQwRP?editors=1100)

## 重力陀螺仪

[parallax.js](http://matthew.wagerfield.com/parallax/)

```
<div class="parallax-obj">
  <div class="layer ele-p1" data-depth="1.00"></div>
  <div class="layer ele-p2" data-depth="0.80"></div>
  <div class="layer ele-p3" data-depth="0.30"></div>
  <div class="layer ele-p4" data-depth="0.30"></div>
  <div class="layer ele-p5" data-depth="1.10"></div>
</div>

$(‘.parallax-obj’).parallax()
```

## 背景音乐&音效

- 音乐不宜过长，30s 为佳，而且音乐要加上渐现渐隐效果，方便循环播放
- 体积可以接受的范围是 200K 以下
- iOS 不能自动播放 hack，
  > 通过 new 一张图片，监听一张图片的 onload 事件，结束后回调执行音频播放 audio.play()即可
- 暴露一个音乐关闭/打开的按钮

```
<audio id="audio" src="音乐地址" loop preload="auto" autoplay="true" class="hide"></audio>
```

## 示例

[腾讯 - 托尼托尼研究所](https://tonytony.club/)

[cubic-bezier(.17,.67,.83,.67) ✿ cubic-bezier.com](http://cubic-bezier.com/#.17,.67,.83,.67)

## FPS - 每秒传输帧数

- 若动画表现 fps 大于 60，则超越了人眼能反映的刷新频率；
- 如果 fps 小于 30，则卡顿明显；

## 以下左侧属性都可能会带来性能问题

1. 位移动画

   `top/left/right/bottom => translate3d(x, y, z)`

2. 边框动画

   `border(1px -> 1000px) => scale(0.1) -> (1)`

3. 放大缩小动画

   `zoom(1px -> 10px) => scale(0.9) -> (1)`

4. 图片背景动画

   `background-position => translate(x, y)`

5. 即时显隐动画

   `visibility:hidden -> visible => keyframe(0%(opacity: 0) 1%(opacity: 1))`

6. 飞入飞出屏幕动画

   `translateZ(0px) -> (50px) => scale(1) -> (1.1)`

## 无限旋转动画

```css
.playing {
  animation: rotation 4s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
```

## perspective 3d cube 透视 景深 近大远小

- 相当于人眼感觉的实景，因为我们的屏幕一般是平面的。
- perspective 定义`z=0`平面和用户的距离，`z>0`的元素变大，`z<0`的变小
- 应用景深的元素称为“舞台元素”，舞台元素的所有后代元素都会受影响
- 灭点指的是立体图形各条边的延伸线所产生的相交点，透视点的消失点
- 景深越大，灭点越远，元素的变形越小；
- 景深越小，灭点越近，元素的变形越大；

  [How to Create a CSS Cube](https://davidwalsh.name/css-cube?utm_source=html5weekly&utm_medium=email)

  [CSS3 3D cube](https://codepen.io/jkneb/pen/qJBIl?editors=1000)

  [3D Cube Image Gallery](https://codepen.io/GeorgePark/pen/gegavO)

## 日历翻页倒计时

- 上半片翻下来，跳到下一个数字

[Make a Flippin’ 3D Countdown with CSS & JavaScript | Viget](https://www.viget.com/articles/make-a-flippin-3d-countdown-with-css-and-javascript/)

[FlipClock.js](http://flipclockjs.com/) 需要 jQuery，可以看效果

## flip

```css
.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s opacity ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
```
[SVG 动画精髓](https://www.villainhr.com/page/2017/05/01/SVG%2520%25E5%258A%25A8%25E7%2594%25BB%25E7%25B2%25BE%25E9%25AB%2593)
