
## FileSaver

实现原理，blob + createObjectUrl + a.download

限制：chrome 明确 2G，移动端更小

如果考虑跨浏览器、跨端，安全限制是 500MB

[eligrey/FileSaver.js: An HTML5 saveAs() FileSaver implementation](https://github.com/eligrey/FileSaver.js)
[Web APP/JavaScript 下载大文件解决方案 - 朱文龙的自留地](https://www.zhuwenlong.com/blog/article/5b4886b70a06a868748e10b4)
[jimmywarting/StreamSaver.js: StreamSaver writes stream to the filesystem directly asynchronous](https://github.com/jimmywarting/StreamSaver.js)

七牛云可以追加参数`?attname=xxx`，强制下载
阿里云，有没有这样的策略？

## 大文件下载暂停

- blob
- range

我们基于 Range 实现了文件的分片下载，浏览器通过 ArrayBuffer 接收。

ArrayBuffer 只读，想要操作要通过 Uint8Array 来合并，之后再转为 ArrayBuffer。

这样就可以通过 URL.createObjectURL 设置为 img 的 src 或者通过 a 标签的 download 属性实现下载了。

[基于 HTTP Range 实现文件分片并发下载！ - 知乎](https://zhuanlan.zhihu.com/p/620113538)

## 大文件上限

受限于硬盘，与内存无关。内存作为临时区，可大可小。

mac 实测同时下载 3 个 2GB 文件，内存占用上升 500MB

浏览器下载文件的实现过程大致如下：

1. 用户在浏览器中点击下载链接或者使用下载功能时，浏览器会向服务器发送一个下载请求。

2. 服务器接收到下载请求后，会将要下载的文件以二进制流的形式发送给浏览器。

3. 浏览器接收到文件数据后，会创建一个临时文件并将数据写入该文件中。

4. 下载完成后，浏览器会弹出一个文件下载对话框，提示用户选择保存文件的位置和文件名。

5. 用户选择保存文件的位置和文件名后，浏览器会将临时文件保存到用户指定的位置，并删除临时文件。

以上是浏览器下载文件的大致实现过程，具体实现方式可能会因浏览器和服务器的不同而有所差异。

### stream 和 buffer 的关系是什么

在 Node.js 中，Stream 和 Buffer 是处理数据的两种不同方式。

Buffer 是一个类似于数组的对象，可以用来存储二进制数据。在 Node.js 中，Buffer 类是一个全局变量，可以直接访问它。

Stream 是一种抽象的数据结构，用于在 Node.js 中处理流式数据。Stream 分为可读流（Readable Stream）和可写流（Writable Stream）。可读流用于从数据源读取数据，可写流用于将数据写入到目标位置。

在使用 Stream 时，经常需要将数据转换为二进制形式进行处理。Buffer 就是一种常用的二进制数据存储方式，因此在 Stream 中经常会使用 Buffer。

例如，在创建可读流时，可以指定编码方式，将读取到的数据转换为字符串形式。如果不指定编码方式，则会返回 Buffer 对象。

```javascript
const fs = require('fs');

// 创建一个可读流，读取 input.txt 文件中的数据
const readStream = fs.createReadStream('input.txt');

// 设置编码方式为 utf8，将读取到的数据转换为字符串
readStream.setEncoding('utf8');

// 读取数据，并将数据写入到控制台中
readStream.on('data', (chunk) => {
  console.log(chunk);
});
```

在上面的代码中，readStream.on() 方法监听了 data 事件，当有数据可读时，会触发该事件，并将读取到的数据作为参数传递给回调函数。由于设置了编码方式为 utf8，因此读取到的数据会被转换为字符串形式。

总之，Stream 和 Buffer 是处理数据的两种不同方式。在 Stream 中经常需要将数据转换为 Buffer 对象进行处理，而在某些情况下也可以直接使用 Buffer 对象来处理数据。

### buffer 能处理多大文件，多大文件应该用 stream

在 Node.js 中，Buffer 一般用于处理小型数据，因为 Buffer 对象需要在内存中分配连续的空间，因此当需要处理大量数据时，会占用大量的内存，可能会导致内存不足的问题。

对于大型数据，应该使用 Stream 来处理。Stream 可以将数据分成小块进行处理，因此可以处理大型数据而不会占用过多的内存。例如，可以使用 fs.createReadStream() 和 fs.createWriteStream() 方法来处理大型文件：