# 事件循环

[HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
分类：

流程：
1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

[Jake Archibald: In The Loop - JSConf.Asia - YouTube](https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1521s)
[第 25 题：浏览器和 Node 事件循环的区别 · Issue #26 · Advanced-Frontend/Daily-Interview-Question · GitHub](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/26)

```js
console.log('a')

setTimeout(function() {
  console.log('b')
  process.nextTick(function() {
    console.log('c')
  })
  new Promise(function(resolve) {
    console.log('d')
    resolve()
  }).then(function() {
    console.log('e')
  })
})
process.nextTick(function() {
  console.log('f')
})
new Promise(function(resolve) {
  console.log('g')
  resolve()
}).then(function() {
  console.log('h')
})
process.nextTick(function() {
    console.log('ff');
})
setTimeout(function() {
  console.log('i')
  process.nextTick(function() {
    console.log('j')
  })
  new Promise(function(resolve) {
    console.log('k')
    resolve()
  }).then(function() {
    console.log('l')
  })
})
```

浏览器 
```
  a, g, f, h,
  b, d, c, e
  i, k, j, l
```
Node 6
```
  a, g, f, h,
  b, d, i, k
  c, j, e, l
```
同级先执行，如两个 nextTick 或两个 then 是同级
[如何解释Event Loop面试官才满意？ - 知乎](https://zhuanlan.zhihu.com/p/72507900)
[Online Node Compiler - Online Node Editor - Online Node IDE - Node Coding Online - Practice Node Online - Execute Node Online - Compile Node Online - Run Node Online](https://www.tutorialspoint.com/execute_nodejs_online.php)
[浏览器 - Event loop - 《前端面试之道》 - 书栈网 · BookStack](https://www.bookstack.cn/read/CS-Interview-Knowledge-Map/spilt.3.Browser-browser-ch.md)

```js
setTimeout(myCallback, 1000);

setTimeout(myCallback, 0); // 等执行栈清空后执行
```
并不表示，1s 后执行，而是 1s 后将 myCallback 添加到事件循环的队列，排队执行

## 常见误解
1. 任务队列用了 quene？
不是，用的 set，轮询的方法，不同类型任务执行顺序不一样

[What you should know to really understand the Node.js Event Loop | by Daniel Khan | Node.js Collection | Medium](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c)

[前端面试题：说说事件循环机制(满分答案来了) - 山月行的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/4592353/blog/4434384)

[第 10 题：常见异步笔试题，请写出代码的运行结果 · Issue #7 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)
