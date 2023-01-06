# Webpack

一站式解决了所有资源的依赖问题

## why

- 传统 script 引入缺点
  - 全局污染
  - 顺序难保证

- 文件过大：在大型 SPA 里面，如果全部打包成一个文件会导致文件过大，首屏加载速度受影响（code splitting）

## 原理

![500836392-2f1c793a45cbc79e_fix732 (732×399)](https://image-static.segmentfault.com/500/836/500836392-2f1c793a45cbc79e_fix732)

[90行代码实现模块打包器 - SegmentFault 思否](https://segmentfault.com/a/1190000040655590)

[BetaSu/minipack: 📦 现代JS模块打包器的简易实现、详细教学](https://github.com/BetaSu/minipack)

1. 输入 entry.js 输出自执行函数 `IIFE(modules)` 
2. 使用 babel 解析 AST 并记录`import`依赖，有序队列（如何收集依赖？）
3. 使用 babel 转换成 cjs
4. 写入 html

文件，文件依赖，生成依赖图 DAG，打包 bundle

### 工具要解决的三个问题

    1. 处理静态资源如 CSS/images
    2. 打包分拆
    3. 异步加载

### 流程
流程
`code input -> loaders -> plugins -> output`
**loaders** 相当于其它工具中的 **tasks**

entry 从哪开始打包

output 输出到哪

loader 如何转换资源

plugin 如何打包

resolve 如何解析包

[Advanced Webpack](https://presentations.survivejs.com/advanced-webpack/#/?k=edjsgp&_k=esekxp)

### hash 策略

[webpack-文件指纹策略：chunkhash、contenthash 和 hash | 个人博客](https://jkfhto.github.io/2019-10-18/webpack/webpack-%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9%E7%AD%96%E7%95%A5%EF%BC%9Achunkhash%E3%80%81contenthash%E5%92%8Chash/)

## loader

- file-loader 将资源复制过去，然后返回资源路径，一般是图片文件，那别的格式如 mp3 文件怎么办？加到正则即可
- url-loader 小于多少字节时，转换为 base64 内联，支持回退到 file-loader，场景如 icon

## plugin
cache-loader 读写磁盘开销、副作用，仓库已废弃、建议升 v5，默认开启

尽量用 include 显示指定，按需添加

[webpack5新特性一览 · Issue #48 · HolyZheng/holyZheng-blog](https://github.com/HolyZheng/holyZheng-blog/issues/48)

```
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}
```
use 下面的先执行，使用了 compose

## loader 与 plugin 区别

1. 工作阶段不一样，先后关系
loader 是文件级处理，打包前期
plugin 是 bundle/chunk 级处理，打包末尾

2. 职责
loader 转换器，预处理源码
plugin 处理 loader 处理不了的任何事

![P7hTM.png (1227×782)](https://i.stack.imgur.com/P7hTM.png)

## 打包

- 自带分析`webpack --profile --json > stats.json`

vendor 第三方库
common 共用

> With this bundle configuration, you would load your third party libraries, then your common application code, then your page-specific application code.

[How to Reduce Your Vue.JS Bundle Size With Webpack](https://www.jenniferbland.com/how-to-reduce-your-vue-js-bundle-size-with-webpack/)

## 分包 - 提取公共模块

- why:
  - 分离业务代码和第三方库（ vendor ）
  - 按需加载（利用 import() 语法）
- 4.x 内置 SplitChunks
- chunks 类别？async
- 默认规则
- chunks: all, async, and initial 指定哪类包可以优化，initial 同步，all 可用于同步和异步
- 观察下 vendors hash 是否变化，应该保持不变
- 样式如何拆包 scss，官方插件仅把 css 从 js 中提取，多页存在冗余

  [Working with CSS | Vue CLI 3](https://cli.vuejs.org/guide/css.html#automatic-imports)

  - 按上面链接处理不行，打成了 scoped 样式，文件更大了

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      cacheGroups: { // 拆取规则
        vendors: {
          test: /[\\/]node_modules[\\/]/, // node_modules 下引入的包归类为 vendors
          priority: -10 // 优先级
        },
        default: {
          minChunks: 2, // 默认被引用 2 次及以上时拆包
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
```

[SplitChunksPlugin - 默认设置](https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks)

## 构建性能

[构建性能 | webpack 中文文档](https://webpack.docschina.org/guides/build-performance/)

官方文档针对生产和开发环境有分别叙述

### 开发环境

- 是否是增量编译
- 是否利用了内存


渐近升级到 rust 实现的工具：
- babel + Terser -> swc
- js -> esbuild
- webpack -> rollup

https://nextjs.org/blog/next-11-1#adopting-rust-based-swc

方法论：
- 多线程 thread-loader 请仅在耗时的 loader 上使用
- 缓存 构建
- 移除无用代码 tree-shaking 移除未引用代码，依赖 ES6 模块语法
- 并行压缩

loader、plugin 耗时分析 SpeedMeasurePlugin
[探索webpack构建速度提升方法和优化策略](https://juejin.cn/post/6844904084781154318)

### noParse

- 含有 process.env.NODE_ENV 的文件也不要让 webpack noParse。

[Why is my webpack build slow?](https://samsaccone.com/posts/why-is-my-webpack-build-slow.html)

### webpack-cdn-plugin

[webpack 打包优化 - 简书](https://www.jianshu.com/p/86602494dbb7)

异步 import 默认会单独打包

## chunks 含义是什么

[SplitChunksPlugin | webpack](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks)
[vue.js - VueJs + Webpack lazyload modules from ElementUI - Stack Overflow](https://stackoverflow.com/questions/52104217/vuejs-webpack-lazyload-modules-from-elementui)

## runtime

[The Single Runtime Chunk > Webpack Encore: Frontend like a Pro! | SymfonyCasts](https://symfonycasts.com/screencast/webpack-encore/single-runtime-chunk)

## 按需加载
`import { xx } from yy`
这么写，理论上会全局引入 yy

tree-shaking 依赖 ES6 导入导出以精确分析，但有些老库是 ES5 写的

用 babel 转换插件，写法不变，插件进行替换

lodash 支持按方法手动按需引入，但导入比较多时，要写很多行，繁琐

antd 默认对 JS 部分，用 babel plugin 转换成按需引入写法。如果全局引入，会在控制台给出警告。

[快速上手 - Ant Design](https://3x.ant.design/docs/react/getting-started-cn#%25E6%258C%2589%25E9%259C%2580%25E5%258A%25A0%25E8%25BD%25BD)

## 打包分析
```js
  chainWebpack: config => {
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }

    "analyz": "npm_config_report=true npm run build",
```

## Compiler 与 compilation

引擎与一次编译

> The Compiler module of webpack is the main engine that creates a compilation instance with all the options passed through webpack CLI or webpack api or webpack configuration file.

## 参考

[petehunt/webpack-howto](https://github.com/petehunt/webpack-howto)
[Webpack slides](http://www.slideshare.net/ssuser0e4922/webpack-slides-51907869)
[详解前端模块化工具-Webpack | 淡忘~浅思](http://www.ido321.com/1646.html)
[Webpack configuration for Multi Page Application. All you need to start your project | Sergey Kryvets Blog](https://skryvets.com/blog/2018/03/25/webpack-configuration-for-multi-page-application/)

- publicPath
  用于发布时文件路径的设置，是绝对路径
  本地测试，要开服务，然后把服务地址加上

```shell
webpack main.js bundle.js
```

```js
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
}
```

调用：

- `webpack` 开发环境下编译
- `webpack -p` 产品编译及压缩
- `webpack --watch` 开发环境下持续的监听文件变动来进行编译(非常快!)
- `webpack -d` 引入 source maps

```js
resolve: {
  // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
  extensions: ['', '.js', '.json', '.coffee']
}
```

