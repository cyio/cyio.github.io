# DOM
[toc]

## 遍历
- 关系：父子、相邻，首尾
- 区分 Element (Node) 和 Node，node 包含了 textNode、commentNode、空 等

    childNodes vs children(Element)

- 集合，类数组`for of` `Array.from`

## 性能

简述，为什么 DOM 操作影响性能？
因为某些情况 NodeList 对象是动态的，每次访问 NodeList 对象，都会运行一次查询。

> 理解 DOM 的关键，就是理解 DOM 对性能的影响。DOM 操作往往是 JavaScript 程序中开销最大的部分，而因访问 NodeList 导致的问题
> 为最多。NodeList 对象都是“动态的”，这就意味着每次访问 NodeList 对象，都会运行一次查询。所以应减少对 NodeList 的访问，对 DOM 的操作。

https://developer.mozilla.org/en-US/docs/Web/API/NodeList

### 优化

`document.createDocumentFragment` [DocumentFragment - 简书](https://www.jianshu.com/p/7628670a94e6)

- 文档片段，不属于文档树，用于占位
- 继承了 Node 方法

## API

常用方法：

```js
document.write
document.writeln // 换行
div.getAttribute('title') // 或者 div.title
```

`[ele].insertAdjacentHTML([position], [html])` 邻接插入，比 innerHTML 效率高

## 脚本

- 问题：当用户鼠标移动够快时，积累在 setTimeout 队列里的事件会导致动画效果产生滞后。
  解决：将目标元素与事件绑定，以便清除。

```js
function moveElement (elementID, final_x, final_y, interval) {
    ...
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    ...
    var repeat = "moveElement('"+elementID+"', '"+final_x+"', '"+final_y+"', '"+interval+"')";
    // element.property = value
    elem.movement = setTimeout(repeat, interval);
}
```

- 步进为 1px 时太慢了，如何解决？

```js
// 每次向目标位置移动1px，执行条件是尚未到达
if (xpos < final_x) {
  xpos++
}
```

- 根据距离提高步进，每次前进距离的十分之一，距离小于 10px 时，dist 向上取整，按 1px 步进。

```js
dist = Math.ceil((final_x - xpos) / 10)
xpos = xpos + dist
```

## 注意点

- focus blur 事件只会在 input textaera select 等键盘元素上发生

## 重绘和回流

重绘，样式变化，浏览器重新绘制样式
paint 样式

回流，尺寸、位置、属性变化，浏览器重新渲染部分或全部
flow 布局
性能影响更大

[DOM Performance (Reflow & Repaint) (Summary)](https://gist.github.com/faressoft/36cdd64faae21ed22948b458e6bf04d5)

### 样式计算

- 50% 时间匹配选择器，引起页面或局部重新布局，reflow
- 降低选择器的复杂性；使用以类为中心的方法，例如 BEM。选择器合并，少用选择规则
- 减少必须计算其样式的元素数量，如在 body 上操作，所有后代可能要重算
  [缩小样式计算的范围并降低其复杂性  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)
  [chrome devtools 使用详解——Performance - 掘金](https://juejin.im/post/5c009115f265da612859d8e2)
  [Get Started With Analyzing Runtime Performance  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)

## innerHTML

当读取`innerHTML`时，HTML 已经被解析为 DOM 并丢弃，标签会被转换为小写，有的浏览器还不一样，因此拿不到原始的 HTML

## tag 标签只用小写

多个词用短杠连接，大小写不敏感，内部会转为小写？为了保证转换一致性，最好用小写。Vue 的组件在 HTML 中用的都是小写

## 观察 DOM 更新

DOM- MutationObserver
[MutationObserver Example](https://codepen.io/dayvidwhy/pen/egdZyY?editors=1011)

vue - update

## 页面插入 dom 几种方式

- `createElement`
  ```html
  const div = document.createElement('div') div.innerHTML = `
  <div id="global-page-close" onclick="window.close()">
    <span></span>
    <span></span>
  </div>
  ` document.body.appendChild(div)
  ```
- `document.createDocumentFragment` 不支持 innerHTML

[es6-articles/13 - Creating HTML fragments with Template Literals.md at master · wesbos/es6-articles](https://github.com/wesbos/es6-articles/blob/master/13%2520-%2520Creating%2520HTML%2520fragments%2520with%2520Template%2520Literals.md)

## DOM 选择

![节点关系示意图](http://eloquentjavascript.net/img/html-links.svg)

参考：
[Plain JavaScript - Functions and Helpers](https://plainjs.com/javascript/)
[DOM Enlightenment - Exploring the relationship between JavaScript and the modern HTML DOM](http://domenlightenment.com/)
