* 通用解决方法： [iamdustan/smoothscroll: Scroll Behavior polyfill](https://github.com/iamdustan/smoothscroll)
* 可以从这里查找 jQuery 替代实现，如搜索 scrollTop [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
* W3C 有可运行例子，浏览器兼容性看着清楚 [HTML DOM offsetTop Property](https://www.w3schools.com/jsref/prop_element_offsettop.asp)
* `$0.offsetParent` 离元素最近父级定位元素，offsetTop 是相对于这个值来计算，而不一定是 body 或 window
* scrollHeight和scrollWidth，可滚动的绝对宽高，包括隐藏不可见的部分（offset仅是相对于元素的width和height不包括隐藏部分）。
* scrollTop和scrollLeft: 可滑动的元素（即元素出现滚动条的情况时）内部在xy轴上滑动的距离，可为其赋值。
* clientHeight和clientWidth：可视区域的宽高（不同浏览器中clientHeight和offsetWidth有区别）。

```js
window.addEventListener('scroll', () => {
  this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
});

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
      callbackArgs = args;
      timeout = setTimeout(later, wait);
    }
  }
}

/**
 @description 页面垂直平滑滚动到指定滚动高度
*/
const scrollSmoothTo = function (position) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            return setTimeout(callback, 17);
        };
    }
    // 当前滚动高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 滚动step方法
    const step = function () {
        // 距离目标滚动距离
        const distance = position - scrollTop;
        // 目标滚动位置
        scrollTop = scrollTop + distance / 5;
        if (Math.abs(distance) < 1) {
            window.scrollTo(0, position);
        } else {
            window.scrollTo(0, scrollTop);
            requestAnimationFrame(step);
        }
    };
    step();
};

if (typeof window.getComputedStyle(document.body).scrollBehavior == 'undefined') {
  // 传统的JS平滑滚动处理代码...
  scrollSmoothTo(0);
}
```
