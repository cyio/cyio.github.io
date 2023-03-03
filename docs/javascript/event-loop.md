
# 事件循环

简单说，JS 中替代线程的任务调度机制。

事件循环是一种编程模型，用于处理异步事件和I/O操作。它的核心思想是，程序在一个无限循环中等待事件的发生，一旦有事件发生，就会执行相应的处理程序。

JavaScript 的事件循环（Event Loop）是一种单线程执行模型，用于处理异步事件和回调函数。事件循环机制用于将 JavaScript 代码分成一个个任务，这些任务会被添加到一个任务队列中，并按照特定的顺序执行。事件循环分为同步任务和异步任务两种类型。

同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入 Event Queue 。主线程内的任务执行完毕为空，会去 Event Queue 读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。

[HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

## 特点

  - JS 引擎是单线程的
  - Event Loop 是 javascript 的执行机制
  - 微任务优于宏任务先执行


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

![](https://javascript.info/article/event-loop/eventLoop-full.svg)

## 为什么用单线程

JavaScript 是用于实现网页交互逻辑的，涉及到 dom 操作，如果多个线程同时操作需要做同步互斥的处理，为了简化就设计成了单线程

单线程由于存在阻塞问题，因此需要调度机制来解决

## 支持异步

## 支持优先级（高优插入）

[浏览器和 Node.js 的 EventLoop 为什么这么设计？ - 首席CTO笔记](https://www.shouxicto.com/article/3012.html)

## Node

高性能需求，更复杂

宏任务分为 6 种，Timer 优先

微任务分为 nextTick 和其它微任务，nextTick 优先


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


## 浏览器与 Node 差异

Node.js 也采用了事件循环模型，但是和浏览器中的 JavaScript 事件循环有一些区别。以下是一些主要的差异：

1.  Node.js 中的事件循环是基于 libuv 库实现的，而不是浏览器中的事件循环实现。
2.  在浏览器中，事件循环的主要任务是处理 DOM 事件和执行异步操作，而在 Node.js 中，事件循环的主要任务是处理 I/O 操作。
3.  在 Node.js 中，事件循环会在运行时自动创建一个事件队列，同时提供了一些内置模块，如 fs 和 net 模块，用于处理各种 I/O 操作。
4.  在浏览器中，通过 setTimeout() 和 setInterval() 函数可以向事件队列中添加任务，而在 Node.js 中，可以使用类似 setImmediate()、process.nextTick()、setTimeout() 和 setInterval() 等函数来添加任务。
5.  在 Node.js 中，事件循环可以使用 cluster 模块来创建多个进程，并在这些进程之间共享任务队列，以提高程序的性能和可靠性。

## 宏任务

宏任务 (macrotask) 是指需要在事件循环队列中排队等待执行的任务。通常，宏任务是由浏览器或 Node.js 运行时环境提供的 API 触发的，例如：

1.  setTimeout 和 setInterval
2.  I/O 操作（如文件读取、数据库操作等）
3.  UI 渲染
4.  事件监听器
5.  postMessage 和 MessageChannel

需要注意的是，由于 JavaScript 是单线程执行的，因此在事件循环队列中只有一个宏任务在被执行，其他的任务（包括微任务）都要等待当前宏任务执行完毕之后才能被执行。另外，如果在当前宏任务执行期间触发了新的宏任务，那么它将被加入到事件循环队列的尾部等待执行，而不会中断当前正在执行的宏任务。

## 微任务

以下是 JavaScript 中常见的微任务：

1.  Promise 状态变化时的回调函数 (then, catch, finally)
2.  process.nextTick() (Node.js 环境中)
3.  Object.observe() (已废弃)
4.  MutationObserver (DOM 变化观察器)
5.  queueMicrotask() (在 ECMAScript 2019 标准中引入，可以使用该方法将任务添加到微任务队列中)

需要注意的是，虽然微任务的执行顺序比宏任务的执行顺序更高，但是它们不会打断正在执行的宏任务，只有当宏任务执行完后才会执行微任务队列中的任务。

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

## requestAnimationFrame

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


## 为什么需要事件循环

事件循环是现代编程语言中常用的一种并发处理模型，它的主要作用是处理异步事件和回调函数，以提高程序的性能和响应能力。

传统的编程模型中，通常采用多线程或多进程的方式处理并发任务。这种模型的缺点是线程或进程的创建和销毁需要消耗大量的资源，而且在线程或进程之间的数据共享和同步也非常困难。另外，由于线程或进程数量的限制，这种模型很难扩展到处理大量的并发任务。

相比之下，事件循环模型是一种更加轻量级和高效的并发处理模型。在事件循环模型中，所有任务都在一个单独的线程中运行，通过任务队列来管理任务的执行顺序。当一个任务完成后，事件循环会自动从队列中取出下一个任务进行处理，从而实现任务的异步执行。这种模型不仅能够提高程序的性能和响应能力，而且还可以轻松处理大量的并发任务，因为它不需要创建大量的线程或进程。

另外，事件循环还能够处理很多其他的编程场景，如动画效果、用户输入事件等。在这些场景下，事件循环可以帮助我们实现实时的交互和响应，提高用户体验和应用程序的质量。

因此，事件循环是现代编程语言中非常重要的一个概念，对于提高程序性能和响应能力、处理并发任务、实现实时交互等都具有重要的作用。

## interview

详细说明 Event Loop
https://xie.infoq.cn/article/934dc016b4f65ba60252bb713#:~:text=%E7%BA%A6%2039%20%E5%88%86%E9%92%9F-,%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E%20Event%20loop,-%E4%BC%97%E6%89%80%E5%91%A8%E7%9F%A5%20JS%20%E6%98%AF

## 事件循环阻塞

如果有正在进行的 JS 任务，无论时间长短，渲染就不会进行，对用户交互也会有影响

解决：
1. 长耗时任务分解，通过定时器或者Web Worker等机制分批执行
2. 进度提示
3. 延迟执行：比如创建自定义事件，等事件冒泡在各层完成后，再 dispatch

[Event loop: microtasks and macrotasks](https://javascript.info/event-loop)