# Vue 多页

* webpack 为多页面分别设置入口 [Entry Points](https://webpack.js.org/concepts/entry-points/#multi-page-application)
[vue多页面开发和打包的正确姿势 - 掘金](https://juejin.im/post/5a8e3f00f265da4e747fc700#heading-1)
[javascript - vue-cli 3.0 多页面 怎么配置？ - SegmentFault 思否](https://segmentfault.com/q/1010000013659421)

## 打包优化
* 多页，每个页面全部资源加起来超过 1.7MB，原因是 vendor js 和 vendor css 加起来就 1.5M
* 为不同页面设置不同 chunks，比如首页可以设置最少的 chunk
* 能用 cdn 的，拆出来使用 cdn
* 客观的数据测量
[vue.js - How to break the js files into chunks in vue cli 3 with webpack performance object? - Stack Overflow](https://stackoverflow.com/a/51817891/5657916)
[blog/2018-07-14-wpk.md at master · wqzwh/blog](https://github.com/wqzwh/blog/blob/master/source/_posts/2018-07-14-wpk.md#webpackprodconfjs)

## 路由
* 使用 vue-router 的问题，如果层级深，需要调用父级



