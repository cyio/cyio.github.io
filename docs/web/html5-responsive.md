# 响应式设计

## 尺寸依据
[Web网页 - 设计尺寸 - 老姜尺寸网ChiCun💎](http://www.chicun.vc/html/web.html)

## 常见效果实现

* 弹出框，如播放器
  [fancyBox - Fancy jQuery Lightbox Alternative](http://fancyapps.com/fancybox/#examples)

* 滚动页面时，元素出现动画
  - [Reveal Animations When Scrolling — WOW.js](http://mynameismatthieu.com/WOW/) 
  - 加上 wow 后，元素在用户滚动到前隐藏
  - 可以自己写 JS 配合`animate.css`
  ```
  class="animated wow fadeInDown"
  ```

	- [ajlkn/jquery.scrollex: Nifty scroll events for jQuery.](https://github.com/ajlkn/jquery.scrollex)

* 视差滚动
  [Victa/scrolly: Super simple and easy to use parallax plugin for jQuery (THIS PROJECT IS NOT MAINTAINED ANYMORE)](https://github.com/Victa/scrolly)
  ```
  // Scrolly links.
    $('.scrolly').scrolly({
      speed: 400
    });
  ```

* 多级菜单
  [ajlkn/jquery.dropotron: Adds multilevel dropdown menus to jQuery.](https://github.com/ajlkn/jquery.dropotron)

## 源码收集

* 首屏视频
  - 按窗口动态设定视频宽高
  - 滚动时停止播放
[www.zigeer.com 自个官网](https://gist.github.com/cyio/35bb90d1e9ea65980994e47f4de25ef4)


*	img srcset explain
  ![](http://wx1.sinaimg.cn/large/4e5d3ea7ly1fji2pprv5rj20m80ciah2.jpg)

## 响应式单位
```
body {
    min-height: 100vh;
    /* some background property like a gradient */
}

// 固定比例 vmin 按最小边算
.aspect-4-3 {
  background-color: #e3e3e3;
  width: 100vmin;
  height: calc((3 / 4) * 100vmin); /* equals to 4:3 a.r. = height: 75vmin; */
}
```
[Maintaining Aspect Ratio using viewport units - CSS](https://codepen.io/AndreusCafe/pen/bmBroR?editors=1100)
[Flexbox Sticky Footer Example](https://codepen.io/hexagoncircle/pen/yvxyPW?editors=0100)
