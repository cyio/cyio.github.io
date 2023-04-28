
主打性能，兼容 node/npm 生态

比如服务器请求数、内存占用

本地有很多 node tooling 使用需求，如果能大幅节省内存，也很有意义
```
bunx # replace npx
bun run dev
```

 Bun 没有自己实现 JavaScript 解释器, 用的是 WebKit 的 JavaScriptCore 

而 JavaScriptCore 热身速度比 V8 更快, 完全热身之后两边不见得谁更有优势

[https://twitter.com/jarredsumner/status/1499225725492076544 13](https://twitter.com/jarredsumner/status/1499225725492076544)