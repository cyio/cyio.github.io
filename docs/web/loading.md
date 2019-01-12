# loading

* 扩展 request ?

[Add Loading Indicators to Your Vue.js Application ― Scotch.io](https://scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application#toc-using-your-http-library)

## dva-loading
* 自动处理 loading 状态
* 该组件仅仅监听异步加载状态，这从它的调用方式就可以看出来`const isLoading = loading.effects['user/query']`，其中`user/query`是 model 中的异步请求方法。
* 如果同时发出若干个异步请求，需求是当所有异步请求都响应才做下一步操作，可以使用 loading.global，该方法监听所有异步请求的状态。
[DVA框架统一处理所有页面的loading状态_javascript技巧_脚本之家](https://www.jb51.net/article/122085.htm)
[model中的reducers、effects、subscriptions应该都怎么理解？ · Issue #802 · dvajs/dva](https://github.com/dvajs/dva/issues/802#issuecomment-352681395)
[关于dva实际应用的一些经验以及疑惑 · Issue #886 · dvajs/dva](https://github.com/dvajs/dva/issues/886)
