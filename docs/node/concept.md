# concept

## 流 stream

- 一切都是数据流
- 普通开发者一般用不到

```js
var data = fs.readFileSync('/resource.json') //同步方法
```

> 在很多其他编程语言里，就是这么用的。这样做的好处，就是直观，便于人类直线思考。坏处就是，数据（流）大时，必然需要长时间执行，直接 阻塞 进程，整个程序只好停下来等着，这就是 I/O 阻塞 。
> Node.js 因为用了 回调 ，js 代码所在的（主）线程会把一切 回调 扔给后台的线程池去处理，而自己一步到底，所以叫 I/O 非阻塞 。 再直白一些，流，不可能一下子发生或结束，再快也得有个时间差。就像人类社会，始终以时间为单位，这一刻到下一刻，已经发生变化。而 Node.js 严格尊重这个现实，无论是远程访问，还是本地请求，每一个 data 都被分成一段一段数据流（通常是 Buffer 对象）传输。
> 因此，Node.js 里没有简单拷贝的概念，或者说拷贝其实可以通过流来简单实现。
> [您必须知道的几个 Nodejs 编码习惯 · GitBook](http://bitcoin-on-nodejs.ebookchain.org/2-Node.js%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597/4-%25E6%2582%25A8%25E5%25BF%2585%25E9%25A1%25BB%25E7%259F%25A5%25E9%2581%2593%25E7%259A%2584%25E5%2587%25A0%25E4%25B8%25AANodejs%25E7%25BC%2596%25E7%25A0%2581%25E4%25B9%25A0%25E6%2583%25AF.html)

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
