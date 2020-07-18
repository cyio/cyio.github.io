# vue-issues

## vue nextTick

nextTick 解决要等 dom 后执行操作
比如对有 if 条件渲染的 dom 节点要进行处理

## 日期格式化之阿拉伯数字转中文

导入日期函数

```js
import { date } from 'phpjs'
```

将阿拉伯数字转换为中文
高阶函数，过滤器，数组
星期几的数字作为数组索引取出对应的中文

```js
// 星期{{day | date 'w' | week}}

filters: {
  week: function (value) {
    return ['日', '一', '二', '三', '四', '五', '六'][value]
  }
}
```

## 将 vue data 对象转换为普通对象

```js
const newObj = { ...vueObj }
```

## v-for 中过滤、处理数据

- filter 在 vue 2 中移除了
- 直接在 methods 中使用`arr.sort()`等副作用方法，会引起更新，再次执行 v-for，形成死循环
- 可以使用 methods
- 使用 computed，注意用 map 方法拿副本去 sort
  [javascript - vue.js filters in v-for - Stack Overflow](https://stackoverflow.com/questions/43574671/vue-js-filters-in-v-for)

## svg

[javascript - Vue Cli 3 is not allowing me to process SVG's in Webpack - Stack Overflow](https://stackoverflow.com/questions/49459262/vue-cli-3-is-not-allowing-me-to-process-svgs-in-webpack)

## 组件原子拆分、合成

- 独立可测试，单一职责，原子化，以便根据业务合成，而不是追求少创建文件。确保可维护，稳定
- 为何“只有一个改变的原因”如此重要呢？因为这样组件的修改就被隔离开来，变得可控了。
- 单一职责限制了组件的体积，也使其聚焦于一件事。这有利于编码，也方便了之后的修改、重用和测试。
- 职责拆分：数据、UI，命名 with \*总结一下开闭原则就是：软件系统的核心逻辑都不应该轻易改变，否则会破坏系统的稳定性和增加测试成本。我们应当建立合适的抽象并统一接口，当业务需要扩展时，我们可以通过增加实体类来完成。
  [组件的划分 - 掘金](https://juejin.im/post/5a66fd9d6fb9a01c9332d337)
  [[译] 更可靠的 React 组件：单一职责原则-云栖社区-阿里云](https://yq.aliyun.com/articles/617955)
  [前端早读课](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651230706&idx=1&sn=e96555bdf9b8251852928f4a3c5193e0)
  [前端早读课](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651230683&idx=3&sn=72a870d0c1bede39b5560244495a14c4)

## watch bug

- default 是组件不绑定 prop 的回退
- 数据有变化，watch 一定会触发
- 数据 ready 后渲染子组件，子组件中的 watch 不会触发，因为没为变化，如，两个并行请求，第一个请求完成时渲染子组件，当第二个请求更快完成时，会准备好数据，先于子组件渲染
  ```js
  // watch 元素不一定变化，存在即需要执行
  function ensureWatchVueData(key, callback) {
    if (this[key]) {
      callback()
    } else {
      this.$watch(key, value => {
        if (value) {
          callback()
        }
      })
    }
  }
  ```

## watch object array

- object deep
  ```js
  // 该回调将会在侦听开始之后被立即调用
  d: {
    handler: function (val, oldVal) { /* ... */ }, // 这里 function 不要用箭头函数
    deep: true
  },
  // 或者
  'a.d'() {}
  ```
- array 无法 watch ?
  把数组转字符串存储，用的时候再解析为数组，需要不停来回转换？
  [vue.js - vue watch 数组变化问题 - SegmentFault 思否](https://segmentfault.com/q/1010000010805746)

## 前端编译服务崩溃问题

升级 vue-cli 3 后，在修改 JS 文件，尤其是频繁保存时，服务极易崩溃，可以稳定重现
因为我大部分时间在编辑 vue 文件，感觉不明显，x 同事反映比较突出，严重影响开发效率
崩溃原因： sourcemap 生成、 文件 watch 等功能内存占用大，webpack 部分插件内存泄漏、高内存占用，触及 V8 默认回收上限 1400Mb
解决办法是提升上限，避免触及，需要注意如何正确地添加参数

错误方式（x 同事在 package.json 中添加的）：
`$ vue-cli-service serve --max_old_space_size=4096`
正确方式：

1. [yarn serve - JavaScript heap out of memory crash · Issue #1453 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/issues/1453#issuecomment-430969846)
   `node --max_old_space_size=4096 node_modules/@vue/cli-service/bin/vue-cli-service.js serve --open`
2. [fix: increase Node memory limit to workaround webpack crash, fix #1453 · octref/vue-cli@bb98ef0](https://github.com/octref/vue-cli/commit/bb98ef08874bf07b9a510b23f8d6f94c0afaf01c)
   相关 Issue：
   [Process out of memory - Webpack · Issue #1914 · webpack/webpack](https://github.com/webpack/webpack/issues/1914#issuecomment-392660230)

## 编译慢问题

[feat(compiler): Use a single compiler for multiple plugin instances by jantimon · Pull Request #967 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/pull/967)
[Multiple entry points -> multiple html outputs webpack rebuild very slow · Issue #724 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/issues/724#issuecomment-419885840)

```
npm install html-webpack-plugin@4.0.0-alpha.2
或者
cd node_modules
git clone https://github.com/jantimon/html-webpack-plugin.git
git checkout feature/cache-file-timestamps
```

[build performance · webpack/docs Wiki](https://github.com/webpack/docs/wiki/build-performance)

### vue-cli-service 如何本地配置某个依赖

[neutrinojs/webpack-chain: A chaining API to generate and simplify the modification of Webpack configurations.](https://github.com/neutrinojs/webpack-chain)
webpack 的 stats 配置不能用，选了别的插件
[stats config invalid ? · Issue #2652 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/issues/2652#issuecomment-425632179)

## 解决 iOS 中 fixed 定位，输入时错位的问题

根据 focus 和 blur 的状态添加移除 fixfixed 类
把 position 改为 absolute 是普遍做法，当试了不行，干脆直接隐藏

```css
.fixfixed .ui-header,
.fixfixed .ui-footer {
  /*position: absolute;*/
  display: none;
}
```

```js
methods: {
	inputFocus: function () {
		var body = window.document.getElementsByTagName('body')[0]
		body.className = 'fixfixed'
	},
	inputBlur: function () {
		var body = window.document.getElementsByTagName('body')[0]
		body.className = ''
	}
}
```

## v-for 循环绑定不生效

```js
// not work
  .item(v-for="key of answerKeys" :class="[ key === rightAnswer ? 'right' : 'wrong' ]")

// work
  .item(v-for="key of answerKeys" :class="{ 'right': key === rightAnswer, 'wrong': key !== rightAnswer }")
```

## 异步引入

1. script vue 插件

```js
await Vue.loadScript(scripts[0])
const afterScripts = scripts.slice(1)
return Promise.all(afterScripts.map(url => Vue.loadScript(url)))

scripts.forEach(url => Vue.unloadScript(url))
```

2. import 加 promise，取出？

```js
  Promise.all([
    import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
    import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
  ]).then(([docsearch]) => {
```

[Vue.js 技术揭秘 | 生命周期](https://ustbhuangyi.github.io/vue-analysis/components/lifecycle.html#beforedestroy-destroyed)

## html 中使用相对路径

[html image src require not respecting webpack aliases? · Issue #193 · vuejs/vue-loader](https://github.com/vuejs/vue-loader/issues/193#issuecomment-206510064)

## 动态图片引入

Using Dynamic Static Image URLS in Vue.js
The quick answer, a partially defined path.
`:src="require(`@/assets/cards/\${image}.jpg`)"`
[Dependency Management | webpack](https://webpack.js.org/guides/dependency-management/#require-context)

## spa scroll
[Automatic scroll restoration in Single Page Applications (SPA) — Childhood Cancer Data Lab](https://www.ccdatalab.org/blog/automatic-scroll-restoration-single-page-applications)

## 2.6 Vue.observable
[Vue Template - CodeSandbox](https://codesandbox.io/s/k3kpqz2wz7?file=/src/store.js:24-62)

