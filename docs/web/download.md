
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