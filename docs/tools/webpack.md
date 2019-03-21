# Webpack

## why
* 传统 script 引入缺点
    - 全局污染
    - 顺序难保证

## 安装
```bash
npm install webpack-dev-server -g
webpack-dev-server --progress --colors
```

`http://localhost:8080/webpack-dev-server/bundle`

配置文件是node.js(CommonJS)模块，使用JavaScript编写

## 工具要解决的三个问题
	- 打包分拆
	- 异步加载
	- 处理静态资源如CSS/images

## 什么是CommonJS模块
每个文件有独立的域，通过导出使之能被引入
```js
  // File1.js
  module.export = 2;

  // File2.js
  var two = require("./File1.js");
  console.log(2 + two); // 4
```

流程
`code -> loaders -> plugins -> output`
**loaders** 相当于其它工具中的 **tasks**

entry 从哪开始打包

output 输出到哪

loader 如何转换资源

plugin 如何打包

resolve  如何解析包

[Advanced Webpack](https://presentations.survivejs.com/advanced-webpack/#/?k=edjsgp&_k=esekxp)

## 上手参考
[petehunt/webpack-howto](https://github.com/petehunt/webpack-howto)
[Webpack slides](http://www.slideshare.net/ssuser0e4922/webpack-slides-51907869)
[详解前端模块化工具-Webpack | 淡忘~浅思](http://www.ido321.com/1646.html)

* publicPath
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
  };
```
调用：

  * `webpack` 开发环境下编译
  * `webpack -p` 产品编译及压缩
  * `webpack --watch` 开发环境下持续的监听文件变动来进行编译(非常快!)
  * `webpack -d` 引入 source maps

  ```js

  resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  }
  ```

## webpack 3.x 升级

* 不再支持自动导入`web_modules`目录下文件
需要在文件 `webpack.base.conf.js` 中添加 alias
```js
resolve: {
	alias: {
	  // ...
		'web_modules': resolve('web_modules')
	}
},

// 引入
import 'web_modules/modernizr'  // must import first
```
参考：[Resolve](https://webpack.js.org/configuration/resolve/#resolve-alias)

## loader
* file-loader 将资源复制过去，然后返回资源路径，一般是图片文件，那别的格式如 mp3 文件怎么办？加到正则即可
* url-loader 小于多少字节时，转换为 base64 内联，支持回退到 file-loader，场景如 icon

## 打包

* 自带分析`webpack --profile --json > stats.json`

vendor 第三方库
common 共用
> 
With this bundle configuration, you would load your third party libraries, then your common application code, then your page-specific application code.

## 分包 - 提取公共模块
* why: 
  - 分离业务代码和第三方库（ vendor ）
  - 按需加载（利用 import() 语法）
* 4.x 内置 SplitChunks
* chunks 类别？async
* 默认规则
* chunks: all, async, and initial 指定哪类包可以优化，initial 同步，all 可用于同步和异步
* 观察下 vendors hash 是否变化，应该保持不变
* 样式是如何拆包 scss，官方插件是把 css 从 js 中提取
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
### noParse
* 含有 process.env.NODE_ENV 的文件也不要让webpack noParse。