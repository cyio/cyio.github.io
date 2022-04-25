# 事件循环

同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入 Event Queue 。主线程内的任务执行完毕为空，会去 Event Queue 读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。

[HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

## 为什么用单线程

JavaScript 是用于实现网页交互逻辑的，涉及到 dom 操作，如果多个线程同时操作需要做同步互斥的处理，为了简化就设计成了单线程

单线程由于存在阻塞问题，因此需要调度机制来解决

## 支持异步

## 支持优先级（高优插入）

[浏览器和 Node.js 的 EventLoop 为什么这么设计？ - 首席CTO笔记](https://www.shouxicto.com/article/3012.html)

## Nodejs

高性能需求，更复杂

宏任务分为 6 种，Timer 优先

微任务分为 nextTick 和其它微任务，nextTick 优先

```
线程
  事件循环
    任务队列
      宏任务 task
      微任务 job
``` 

流程：
1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码


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


## 微任务

题目：说出执行顺序
```js
process.nextTick(() => console.log(5))

Promise.resolve().then(() => console.log(1))

;(async () => console.log(2))()

;(() => console.log(3))()

setTimeout(() => console.log(4))

// 2 3 5 1 4
```

- L0: nextTick 无论放哪，都会在同步代码和任务间执行
- L1：安排微任务。 完成所有同步 JS 后执行，类型与 L0 相同，排队
- L2：IIFE 后执行。 它是一个异步功能，但仍然同步执行（没有等待！），没有用 return
- L3：一个 IIFE，同步。
- L4：一个任务，所以它将在微任务之后运行。 所以 2-3-5-1-4

**同步代码 -> node nextTick -> 微任务 promise -> 任务 setTimeout**

## 常见误解
1. 任务队列用了 quene？

不是，用的 set，轮询的方法，不同类型任务执行顺序不一样

[What you should know to really understand the Node.js Event Loop | by Daniel Khan | Node.js Collection | Medium](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c)

[前端面试题：说说事件循环机制(满分答案来了) - 山月行的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/4592353/blog/4434384)

[第 10 题：常见异步笔试题，请写出代码的运行结果 · Issue #7 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

[Jake Archibald: In The Loop - JSConf.Asia - YouTube](https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1521s)  
[第 25 题：浏览器和 Node 事件循环的区别 · Issue #26 · Advanced-Frontend/Daily-Interview-Question · GitHub](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/26)



```js
Promise.resolve().then(() => console.log(1))

;(async () => {
 await console.log(6)
 return console.log(2)
})()

;(() => console.log(3))()

setTimeout(() => console.log(4))

process.nextTick(() => console.log(5))

// 6 3 5 1 2 4
```

[事件循环以及浏览器渲染时机 - 简书](https://www.jianshu.com/p/af302f8c388f)
[事件循环是如何影响页面渲染的？ - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1843653)