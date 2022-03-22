# concept
[[toc]]

## 流 stream

- 一切都是数据流
- 普通开发者一般用不到

```js
var data = fs.readFileSync('/resource.json') //同步方法
```

为什么是流的设计，什么叫 I/O 非阻塞:
> 在很多其他编程语言里，就是这么用的。这样做的好处，就是直观，便于人类直线思考。坏处就是，数据（流）大时，必然需要长时间执行，直接 阻
> 塞 进程，整个程序只好停下来等着，这就是 I/O 阻塞 。
> Node.js 因为用了 回调 ，js 代码所在的（主）线程会把一切 回调 扔给后台的线程池去处理，而自己一步到底，所以叫 I/O 非阻塞 。 再直白一些，流
> ，不可能一下子发生或结束，再快也得有个时间差。就像人类社会，始终以时间为单位，这一刻到下一刻，已经发生变化。而 Node.js 严格尊重这个现实
> ，无论是远程访问，还是本地请求，每一个 data 都被分成一段一段数据流（通常是 Buffer 对象）传输。
> 因此，Node.js 里没有简单拷贝的概念，或者说拷贝其实可以通过流来简单实现。

您必须知道的几个 Nodejs 编码习惯 · GitBook

无法立即释放内存有两种情况，一是全局变量，一是闭包中间函数引用

node 有固定的内存使用上限

使用 Buffer 可以读取超过 V8 内存限制的大文件

Buffer 对象，属于堆外内存，意指不受 V8 分配

V8 的垃圾回收机制，把内存分为新生代和老生代

新生代中的对象存活时间较短，而老生代中的对象存活时间较长或者为常驻对象

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

## 优化

- 避免使用全局变量
  - 变量按作用域树向上查找，开销大
  - 内存不会自动回收

## 回调

Node.js 是单进程的，一般代码在主进程中运行，回调放在事件轮循中处理

## REPL

- 输入多行
  - `.editor`
  - `{}`

## REPL 元命令
提供了以点号（.）开头的元命令 `.help` 查看
`.editor`可输入多行，`^d` 退出

> 单线程异步的Node.js不代表不会阻塞，在主线程做过多的任务可能会导致主线程的卡死，影响整个程序的性能，所以我们要非常小心的处理大量的循环，字符串拼接和浮
> 点运算等cpu密集型任务，合理的利用各种技术把任务丢给子线程或子进程去完成，保持Node.js主线程的畅通。

## 单线程
[Node.js的线程和进程详解 - 知乎](https://zhuanlan.zhihu.com/p/30743785)

单线程事件循环，非阻塞 I/O 回调
主线程 将任务推到共享任务队列
线程池并行处理，有的处理网络请求，有的处理文件 I/O，处理完交给主线程执行回调

缺点
1. 默认不能靠多核 CPU 扩容，可以使用 cluster 或 pm2
2. 持续时间长的计算或 CPU 密集型任务，可冻结事件循环直到完成

可以提高线程池的默认线程数，服务器可能会将线程分配到不同核心去处理

[Node.js - Wikipedia](https://en.wikipedia.org/wiki/Node.js#Threading)

## 高并发
读写冲突十分严重，如何
业务规则：流量摊匀
前端：置灰，避免多次提交
后端：同一个用户，限制次数，风控，滑块，拦截，黑名单
[《吊打面试官》系列 Node.js 全栈秒杀系统 - 云+社区 - 腾讯云](https://cloud.tencent.com/developer/article/1638407)

子进程
child_process
cluster
