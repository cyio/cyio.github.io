# Node 概念
[[toc]]

## 是什么

> 命名来源，网络节点

跨平台 JS 运行时，异步事件驱动

设计目标：建立可扩展 Web 应用服务

背景：传统基于(多)线程的网络处理效率相对较低（阻塞），而且很难使用（死锁）

几乎没有函数直接操作 IO，避免阻塞

特点和优势：
1. 异步非阻塞 I/O：Node.js 的 I/O 操作采用异步非阻塞的方式，使得程序能够在等待 I/O 操作的同时继续处理其他请求，提高了程序的并发性能。
2. 单线程模型：Node.js 采用单线程模型，不需要为每个请求都创建一个新的线程，使得 Node.js 可以处理大量的并发请求，而不会出现线程切换的开销和资源占用问题。
3. 轻量级和高效性：Node.js 采用模块化设计，使得代码的复用性和可维护性更好，同时它的运行环境比传统的服务器端语言轻量级，可以运行在相对较小的硬件资源上，也能够很好地处理大量的并发请求。
4. 社区生态繁荣

> Node.js 是一个基于 V8 的服务器端运行环境，它的主要优势在于采用了异步非阻塞 I/O 和单线程模型，使得它能够高效地处理大量并发请求，同时还具有轻量级、高效和模块化的特点，适用于构建各种类型的 Web 应用和网络工具。同时，它拥有庞大的社区生态和第三方模块支持，能够帮助开发者快速搭建应用。

[About | Node.js](https://nodejs.org/en/about/)

Node.js 采用了事件驱动和回调函数两种模型的结合，既可以高效地处理大量并发连接和 I/O 操作，又可以进行异步编程，使得程序的性能和可维护性都得到了提高。

 I/O 操作，例如读取文件、发送网络请求

CPU Work + I/O Work

```js
let nums = 2
for (let i of nums) {
	// cypto compute 串行时间开销 CPU Work 阻塞
	// http request 并行时间开销，I/O 不阻塞
}
```

[The Node.js Event Loop: Not So Single Threaded - YouTube](https://www.youtube.com/watch?v=zphcsoSJMvM)

## Node.js 和 Java 的对比

| 特点     | Node.js                 | Java                        |
| ------ | ----------------------- | --------------------------- |
| 运行环境   | 基于 JavaScript 的服务器端运行环境 | 用于构建跨平台应用的面向对象编程语言          |
| I/O 模型 | 异步非阻塞 I/O，适用于高并发请求      | 同步阻塞 I/O，适用于处理少量连接和高 CPU 计算 |
| 并发处理   | 单线程模型，采用事件驱动编程          | 多线程模型，采用锁和线程间通信             |
| 内存管理   | 采用 V8 引擎和垃圾回收机制         | 采用 JVM 和垃圾回收机制              |
| 生态系统   | 拥有庞大的社区生态和第三方模块支持       | 拥有庞大的开发者社区和各种第三方库和框架        |
| 适用领域   | 适用于构建高并发、实时性要求较高的应用     | 适用于构建大型、稳定、可扩展的企业应用         |
| 性能     | 具有较高的并发处理能力和高效的 I/O 模型  | 可以根据不同的使用场景进行优化             |
| 学习曲线   | 基于 JavaScript，易于学习和上手   | 语言较为复杂，需要学习较多的概念和技术         |
| 开发效率   | 可以快速地开发和迭代产品            | 开发周期较长，需要编写大量的代码和进行较多的测试    |

[[java#Java 实现高并发]]

## 架构

libuv - 跨平台异步 IO 库（事件循环，网络，IO，子进程，线程池）
V8
第三方库

![image.png](https://img.oaker.bid/?url=http://tvax1.sinaimg.cn/large/4e5d3ea7ly1h0wwwoavtbj212c0f70y1.jpg)
![u1O2O.png (1077×420)](https://i.stack.imgur.com/u1O2O.png)
[javascript - Which is correct Node.js architecture? - Stack Overflow](https://stackoverflow.com/questions/36766696/which-is-correct-node-js-architecture)
![1*evOcy9n3vslkDt0Mj8mBYw.jpeg (1024×468)](https://miro.medium.com/max/1400/1*evOcy9n3vslkDt0Mj8mBYw.jpeg)


## libuv

用 C 编写

## V8
C++，可以独立运行，或嵌入 C++ 应用

## 优化

- 避免使用全局变量
  - 变量按作用域树向上查找，开销大
  - 内存不会自动回收

## 非阻塞

什么是阻塞：JS 的执行需要等待非 JS 操作完成

在 Node.js 中，由于 CPU 密集型而不是等待非 JavaScript 操作（如 I/O）而表现出较差的性能的 JavaScript 通常不被称为阻塞。Node.js 标准库中使用 libuv 的同步方法是最常用的阻塞操作。本地模块也可能有阻塞方法。

单线程异步的 Node.js 不代表不会阻塞，在主线程做过多的任务可能会导致主线程的卡死，影响整个程序的性能，所以我们要非常小心地处理大量的循环、字符串拼接和浮点运算等 CPU 密集型任务，合理地利用各种技术把任务丢给子线程或子进程去完成，保持 Node.js 主线程的畅通。

[Overview of Blocking vs Non-Blocking | Node.js](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

## 单线程

[Node.js的线程和进程详解 - 知乎](https://zhuanlan.zhihu.com/p/30743785)

单线程事件循环，非阻塞 I/O 回调

主线程 将任务推到共享任务队列

线程池并行处理，有的处理网络请求，有的处理文件 I/O，处理完交给主线程执行回调

缺点：
1. 默认不能靠多核 CPU 扩容，可以使用 cluster 或 pm2 创建多进程
2. 持续时间长的计算或 CPU 密集型任务，可冻结事件循环直到完成

可以提高线程池的默认线程数，服务器可能会将线程分配到不同核心去处理

[Node.js - Wikipedia](https://en.wikipedia.org/wiki/Node.js#Threading)

与传统 Web 服务相比，优点：避免线程创建、销毁、切换开销

## 高并发

读写冲突十分严重，如何

业务规则：流量摊匀

前端：置灰，避免多次提交

后端：同一个用户，限制次数，风控，滑块，拦截，黑名单

[《吊打面试官》系列 Node.js 全栈秒杀系统 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1638407)

## 用途

一切非 CPU 密集型

## 流 stream

- 一切都是数据流
- 普通开发者一般用不到

```js
var data = fs.readFileSync('/resource.json') //同步方法
```

为什么是流的设计，什么叫 I/O 非阻塞:
> 在很多其他编程语言里，就是这么用的。这样做的好处，就是直观，便于人类直线思考。坏处就是，数据（流）大时，必然需要长时间执行，直接 阻
> 塞 进程，整个程序只好停下来等着，这就是 I/O 阻塞 。
> Node.js 因为用了回调 ，js 代码所在的（主）线程会把一切 回调 扔给后台的线程池去处理，而自己一步到底，所以叫 I/O 非阻塞 。 再直白一些，流
> ，不可能一下子发生或结束，再快也得有个时间差。就像人类社会，始终以时间为单位，这一刻到下一刻，已经发生变化。而 Node.js 严格尊重这个现实
> ，无论是远程访问，还是本地请求，每一个 data 都被分成一段一段数据流（通常是 Buffer 对象）传输。
> 因此，Node.js 里没有简单拷贝的概念，或者说拷贝其实可以通过流来简单实现。


## net

基于 TCP 协议

用于进程间通信和网络通信

## path

- `path.join`正确使用路径分隔符连接
- `path.resolve(from..., to)`把相对路径转换为绝对路径，类似 cd，多个参数是跳转关系
- `path.relative(from, to)` 获取两路径之间的相对关系
- `path.normalize(path)` 转换`\/ ..`

## stream/buffer/string

无论是处理文件，还是请求远程资源，处理的就是数据流

```js
var fs = require('fs')

var rs = fs.createReadStream('tmp.js')
var chunks = [],
  size = 0

rs.on('data', chunk => {
  chunks.push(chunk)
  size += chunk.length
})

rs.on('end', () => {
  var data = Buffer.concat(chunks, size)
  var str = data.toString('utf8')
  console.log(str)
})
```

## interview

1.  什么是 Node.js？它的特点和优势是什么？
2.  如何在 Node.js 中处理异步编程？请谈谈你对回调函数、Promise、async/await 的理解和应用场景。
3.  什么是事件循环？它在 Node.js 中起到了什么作用？
4.  Node.js 的事件驱动模型是怎样的？请谈谈你对事件驱动编程的理解和应用场景。
5.  Node.js 中的模块是什么？请列举 Node.js 中常用的模块，并解释它们的作用。
6.  如何在 Node.js 中使用流（Stream）来处理数据？请简述流的基本概念及其应用场景。
7.  Node.js 如何处理进程和线程？请简述 Node.js 中的进程和线程模型。
8.  请谈谈你对 Express 框架的理解和应用场景。
9.  请谈谈你对 WebSocket 的理解和应用场景，以及如何在 Node.js 中使用 WebSocket。
10.  如何进行 Node.js 应用的部署和运维？请谈谈你对部署和运维的经验和理解。

[ringcrl/node-point: 构建自己的 NodeJS 知识体系](https://github.com/ringcrl/node-point)