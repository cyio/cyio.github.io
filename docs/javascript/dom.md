# DOM
## 性能

简述，为什么 DOM 操作影响性能？
因为 NodeList 对象是动态的，每次访问 NodeList 对象，都会运行一次查询。

  > 理解 DOM 的关键，就是理解 DOM 对性能的影响。DOM 操作往往是 JavaScript 程序中开销最大的部分，而因访问 NodeList 导致的问题为最多。NodeList 对象都是“动态的”，这就意味着每次访问 NodeList 对象，都会运行一次查询。所以应减少对 NodeList 的访问，对DOM的操作。

## API
常用方法：
```js
document.write
document.writeln  // 换行
div.getAttribute("title")  // 或者 div.title
```

[ele].insertAdjacentHTML([position], [html]) 邻接插入，比 innerHTML 效率高

## 脚本

* 问题：当用户鼠标移动够快时，积累在 setTimeout 队列里的事件会导致动画效果产生滞后。
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

* 步进为1px时太慢了，如何解决？
```js
// 每次向目标位置移动1px，执行条件是尚未到达
if (xpos < final_x) {
    xpos++;
}
```

* 根据距离提高步进，每次前进距离的十分之一，距离小于10px时，dist向上取整，按1px步进。
```js
dist = Math.ceil((final_x - xpos) / 10);
xpos = xpos + dist;
```

## 注意点
* foucs blur 事件只会在 input textaera select 等键盘元素上发生
