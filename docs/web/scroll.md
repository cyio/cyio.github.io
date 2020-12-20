# 滚动

## 基础

- 通用解决方法： [iamdustan/smoothscroll: Scroll Behavior polyfill](https://github.com/iamdustan/smoothscroll)
- 可以从这里查找 jQuery 替代实现，如搜索 scrollTop [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
- W3C 有可运行例子，浏览器兼容性看着清楚 [HTML DOM offsetTop Property](https://www.w3schools.com/jsref/prop_element_offsettop.asp)
- `$0.offsetParent` 离元素最近父级定位元素，offsetTop 是相对于这个值来计算，而不一定是 body 或 window
- scrollHeight 和 scrollWidth，可滚动的绝对宽高，包括隐藏不可见的部分（offset 仅是相对于元素的 width 和 height 不包括隐藏部分）。
- scrollTop 和 scrollLeft: 可滑动的元素（即元素出现滚动条的情况时）内部在 xy 轴上滑动的距离，可为其赋值。
- clientHeight 和 clientWidth：可视区域的宽高（不同浏览器中 clientHeight 和 offsetWidth 有区别）。

```js
window.addEventListener('scroll', () => {
  this.scroll = document.documentElement.scrollTop || document.body.scrollTop
})

target.scrollIntoView({ behavior: 'smooth', block: 'start' })

function throttle(callback, wait, context = this) {
  let timeout = null
  let callbackArgs = null

  const later = () => {
    callback.apply(context, callbackArgs)
    timeout = null
  }

  return (...args) => {
    console.log(args, callback)
    if (!timeout) {
      callbackArgs = args
      timeout = setTimeout(later, wait)
    }
  }
}

/**
 @description 页面垂直平滑滚动到指定滚动高度
*/
const scrollSmoothTo = function(position) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback, element) {
      return setTimeout(callback, 17)
    }
  }
  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 滚动step方法
  const step = function() {
    // 距离目标滚动距离
    const distance = position - scrollTop
    // 目标滚动位置
    scrollTop = scrollTop + distance / 5
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position)
    } else {
      window.scrollTo(0, scrollTop)
      requestAnimationFrame(step)
    }
  }
  step()
}

if (
  typeof window.getComputedStyle(document.body).scrollBehavior == 'undefined'
) {
  // 传统的JS平滑滚动处理代码...
  scrollSmoothTo(0)
}
```

## 导航版块切换

1. 点击切换 navIndex
2. 滚动时切换 navIndex，两者互不影响

```js
// 用一个值记录，会出现前后影响
const navClickedStatus = [0, 0, 0, 0, 0]
const stickyNavHeight = 56

  data() {
    return {
      currentNavIndex: 0,
    };
  },
  methods: {
    handleNavClick(index) {
      navClickedStatus[index] = 1
      setTimeout(() => {
        navClickedStatus[index] = 0
      }, 800)
      this.currentNavIndex = index
      const target = window.document.getElementById(index)
      scrollSmoothTo(target.offsetTop - stickyNavHeight)
    },
    loadSroll() {
      if (navClickedStatus[this.currentNavIndex]) return
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const sections = document.getElementsByClassName('detailsInfoBlock');
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (scrollTop + stickyNavHeight >= sections[i].offsetTop) {
          if (this.currentNavIndex !== i) {
            this.currentNavIndex = i
          }
          break;
        }
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.loadSroll)
  }
```

## 实现

- 滚动条 高度 = 容器高度 / 内容高度 \* 容器高度
- 滚动条位置计算
- 滚动时，内容位置计算

[一文读懂鼠标滚轮事件（wheelEvent） - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000017390159)

要实现一致样式和交互，只能用 JS 实现。单设 CSS，无法解决 Windows。推荐使用 [Grsmto/simplebar: Custom scrollbars vanilla javascript library with native scroll, done simple, lightweight, easy to use and cross-browser.](https://github.com/Grsmto/simplebar)

已经有了新标准，但兼容性很差
[The Current State of Styling Scrollbars | CSS-Tricks](https://css-tricks.com/the-current-state-of-styling-scrollbars/)

## 滚动条替换

需求：Windows 系统原生滚动条较丑，期望全局定制

```less

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  margin-left: 8px;
  border-radius: 8px;
  background-color: hsla(220, 4%, 58%, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background: #bbb;
  }
}
```

## 库
[simplebar/simplebar.js at master · Grsmto/simplebar](https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js)

