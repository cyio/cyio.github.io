
## FileSaver

实现原理，blob + createObjectUrl + a.download

限制：chrome 明确 2G，移动端更小

如果考虑跨浏览器、跨端，安全限制是 500MB

[eligrey/FileSaver.js: An HTML5 saveAs() FileSaver implementation](https://github.com/eligrey/FileSaver.js)
[Web APP/JavaScript 下载大文件解决方案 - 朱文龙的自留地](https://www.zhuwenlong.com/blog/article/5b4886b70a06a868748e10b4)
[jimmywarting/StreamSaver.js: StreamSaver writes stream to the filesystem directly asynchronous](https://github.com/jimmywarting/StreamSaver.js)

七牛云可以追加参数`?attname=xxx`，强制下载
阿里云，有没有这样的策略？

