> nodejs 记得太少，很多学过用过的都该记下来

无法立即释放内存有两种情况，一是全局变量，一是闭包中间函数引用
node 有固定的内存使用上限
使用Buffer可以读取超过V8内存限制的大文件
Buffer对象，属于堆外内存，意指不受V8分配
V8的垃圾回收机制，把内存分为新生代和老生代
新生代中的对象存活时间较短，而老生代中的对象存活时间较长或者为常驻对象

* path.relative(from, to);
获取两路径之间的相对关系

##  stream/buffer/string
无论是处理文件，还是请求远程资源，处理的就是数据流

```js
var fs = require('fs')

var rs = fs.createReadStream('tmp.js')
var chunks = [],
    size = 0;

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
* 避免使用全局变量
  - 变量按作用域树向上查找，开销大
  - 内存不会自动回收

## 回调

Node.js 是单进程的，一般代码在主进程中运行，回调放在事件轮循中处理

## REPL
* 输入多行
  - `.editor`
  - `{}`
