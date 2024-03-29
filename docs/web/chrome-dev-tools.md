# Chrome-DevTools
[[toc]]

## debug
- 选项：恢复脚本执行，跳过下一个函数调用，进入函数，跳出当前函数
- 按键，用组合键更好按
- 对断点行，watch 监视表达式，console 打印求值
- scope 值可编辑，不用离开 DevTools 就能看修正效果
- 监视表达式，观察值的变化
- 保存看效果
### 断点类型，最常用的是代码行，还有事件侦听器、异常等

  常用功能：
  - 跳过行（步进）
  - 跳入函数
  - 跳出函数
  - 继续到此（右键）
    ![image.png](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/mw690/4e5d3ea7ly1gu3r6h0a0tj20ph0bugsl.jpg)

[Debugging in the browser](https://javascript.info/debugging-chrome)
[JavaScript debugging reference - Chrome Developers](https://developer.chrome.com/docs/devtools/javascript/reference/)
[Chrome设置断点的各种姿势, js断点调试心得, Chrome DevTools 中调试 JavaScript 入门 - Just Code](https://justcode.ikeepstudying.com/2018/09/chrome%25E8%25AE%25BE%25E7%25BD%25AE%25E6%2596%25AD%25E7%2582%25B9%25E7%259A%2584%25E5%2590%2584%25E7%25A7%258D%25E5%25A7%25BF%25E5%258A%25BF-js%25E6%2596%25AD%25E7%2582%25B9%25E8%25B0%2583%25E8%25AF%2595%25E5%25BF%2583%25E5%25BE%2597-chrome-devtools-%25E4%25B8%25AD%25E8%25B0%2583%25E8%25AF%2595-javascrip/)
[使用断点暂停代码  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints?hl=zh-cn#exceptions)


## console
- console 中打印出 fetch 内容
  ```js
  let a = await fetch()
  await a.json()
  ```

[Chrome 开发者工具中文文档-在线手册-html 中文网](https://www.html.cn/doc/chrome-devtools/)

- 在 console 中复制对象 （比如 echarts 开发）

    1. 在 vue 里
    ```js
      mounted () {
        window.myObject = this.options
      }
    // copy(JSON.stringify(window.myObject))
    ```
    2. `copy(JSON.stringify(myObject))` 缺点是函数会被丢掉

- 可以通过在函数中插入 console.count('执行次数') 来观察重复执行的情况

## network
- 在开启开发工具下，长按刷新按钮出现菜单，Empty Cache And Hard Reload 强制全部请求走网络，模拟新客访问
- 点击截图，查看当时请求状态
- cmd + 点击，同时查看多种资源
- 过滤 `-method:OPTIONS`
- 隐藏来自扩展请求 `-scheme:chrome-extension`
- XAR 导出 录制、然后网络上右键 

    [How to generate a HAR file in Chrome or Firefox - KB254 - In](https://www.inflectra.com/support/knowledgebase/kb254.aspx)
- Replay XHR 重放请求，不必刷新页面

### disable cache

无法取消，解决办法 https://i.stack.imgur.com/RFt6g.png
## playground
可以巧用 snippets 作 playground，快速调试代码

放在 IIFE 里，使代码可反复运行
```js
(async function (){

})()
```

```
copy
open(url)
await fetch(url)
(await fetch(url).status
```

vue render 错误，不好定位，可以定位查看编译后的代码

## code editor
```
Control+M 跳转到匹配括号
Command+D 选中光标所在
Command+U 上个位置
```

[js逆向技巧分享 - 知乎](https://zhuanlan.zhihu.com/p/108207751)

## 强制刷新
1. 浏览器发请求设置 no-cache
2. 清除本地缓存，再请求


## 程序执行
![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/mw690/4e5d3ea7ly1hau3xikctbj20nz0olagw.jpg)

有名函数

Function Call 宏任务
Microtasks 微任务
![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/mw690/4e5d3ea7ly1hau4oxee3ij20ob059myo.jpg)

MutationObserver 也是微任务

![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/large/4e5d3ea7ly1hau4qrn83pj21p40a2jvo.jpg)

rAF 是宏任务

![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/mw690/4e5d3ea7ly1hau4rsncukj21h209m79r.jpg)

[面试必问的异步顺序问题，用 Performance 轻松理清 - 知乎](https://zhuanlan.zhihu.com/p/603691968)

## perf

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7gy1hfoat98ujcj21vg0natv9.jpg)

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7gy1hfoavgmqi2j210i0ps7hz.jpg)

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7gy1hfob0t8j6rj21080q07hl.jpg)

当访问元素的offsetTop属性时，浏览器会进行重排操作。因为offsetTop属性表示元素相对于其offsetParent元素的上边距的像素值，所以在获取offsetTop值之前，浏览器需要确定元素的位置和大小，从而触发重排操作。因此，多次访问m.offsetTop会导致多次重排操作，影响性能。

当 JavaScript 运行时，前一帧中的所有旧布局值都是已知的，可供您查询。因此在帧的开头纯粹的查询没有问题，如果有其它样式修改、再查询，浏览器必须重排布局，以回答最新值。

Now, in order to answer the height question, the browser must _first_ apply the style change (because of adding the `super-big` class), and _then_ run layout. Only then will it be able to return the correct height. This is unnecessary and potentially expensive work.

[Analyze runtime performance - Chrome Developers](https://developer.chrome.com/docs/devtools/performance/#bonus_analyze_the_optimized_version)

main 中竖向，是调用栈

元素越多，CPU 调低，问题越明显 

## 激活态元素定位

```js
setTimeout(() => { debugger }, 3000)
```

执行后，点击触发元素。断点会停住