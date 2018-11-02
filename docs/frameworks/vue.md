# Vue
## 与 React 比较
* 相同点：
  - VirtualDOM 性能好
  - 组件化开发
  - 单向数据流
    * 单向数据流中的单向：数据从父组件到子组件这个流向叫单向。
    * 绑定的单双向：View 层与 Model 层之间的映射关系。
* 不同点：
    - vue 双向绑定，react 单向
      > 单向绑定使得数据流也是单向的，对于复杂应用来说这是实施统一的状态管理（如redux）的前提。双向绑定在一些需要实时反应用户输入的场合会非常方便（比如多级联动菜单）。但通常认为复杂应用中这种便利比不上引入状态管理带来的优势。注意，Vue 虽然通过 v-model 支持双向绑定，但是如果引入了类似redux的vuex，就无法同时使用 v-model。参见[vuex/forms.md at master · vuejs/vuex](https://github.com/vuejs/vuex/blob/master/docs/zh-cn/forms.md)

[React的单向数据流与Vue的双向绑定 - CSDN博客](https://blog.csdn.net/qq_41206257/article/details/80992085)

## 双向绑定
采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个数据属性的`setter/getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。
具体步骤：

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter
这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个 update()方法
3、待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

[仿Vue极简双向绑定](https://codepen.io/cyio/pen/aaboyQ?editors=0010)
[Vue.js源码解析：深入响应式原理](http://www.infoq.com/cn/articles/Vue.js-code)

## Vue 2

* 只有当实例被创建时 data 中存在的属性才是响应式的
* ready -> mounted
* 对 dom 没依赖的操作可放到 created 中，如数据请求
* 页面内可定义 filters，如果不需要共享的话
* 学习框架，官方的 examples 一定要 clone 下来看源码，这是对框架特性最好的学习资料
* 如果需要对纯 DOM 元素进行底层操作，就会用到自定义指令，可全局可局部
* 要保证文档加载完才执行需 nextTic
* transition 成组件，应用范围更广，类名变化
* loader 升级 `npm install browser-sync postcss  postcss-cssnext  postcss-import  postcss-nested postcss-pxtorem pug vux vuex weixin-js-sdk--save-dev --cache-min 0`
* 单向数据流，不允许直接修改 props，不要在子组件内部直接修改 props，而需要 emit 事件通知父组件修改

* vue 组件通信 单向 父传子用 props 子传父用事件 emit => on，理解为观察者模式就好了，子组件广播一个事件，然后父组件订阅事件，也可以 watch props

* 非父子之间，用 event hub ，即创建一个全局的空 vue 线程，专门处理事件，触发，监听，卸载
  + [cklmercer/vue-events: Simple event handling for Vue.js](https://github.com/cklmercer/vue-events)

* 复杂应用 => vuex

js 原生通信机制，事件

@click.native

Understanding Components Communication in Vue 2.0 http://taha-sh.com/blog/understanding-components-communication-in-vue-20

### vue-router

* 为什么优先使用 router-link，首要原因是，写一次，兼容 history 和 hash 模式
* 跳转常规用法 `router-link.left(tag="div" to="/rule")`
* 模板中返回 `.left(@click="$router.go(-1)")`
* router 非可点击元素，添加事件 `<router-link @mousedown.prevent.native="$router.push(...the path...)"></router-link>`
* history 模式，nginx 需要特殊配置，否则线上访问首页外的页面会 404
[NGiNX Configuration for Vue-Router in HTML5 Mode · GitHub](https://gist.github.com/szarapka/05ba804dfd1c10ad47bf)

#### 数据获取时机
有两种，分隔点是导航是否完成
1. 未完成 `beforeRouteEnter (to, from, next)`中的`next`之前
2. 已完成 `created`或`beforeRouteEnter (to, from, next)`中的`next`里面
使用后者的情况是，我们需要用到`to from`，比如数据获取需要参数`to.params.id`，需要知道来源页面
然后在`next`中使用`vm`来代表实例

## Vue 1

* 响应是指，改动数据就更新视图。
* data 数据属性 
* 实例属性，表达时比数据属性多个美元符号
* methods 钩子（实例方法）
* 绑定表达式，支持全功能JS表达式，一个绑定只能包含单个表达式。
* 过滤器 | pipe
* 指令 前缀v-，加JS表达式，用于判断
```js
<p v-if="greeting">Hello!</p>   // 相当于 if(greeting)
```
* 绑定
  v-bind 参数绑定
```js
<a :href="url"></a>
```
v-on 监听事件
```js
<a @click="doSomething"></a>
```
* 计算属性
```js
var vm = new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

* 双向绑定后，可以由用户手动输入修改数据
* 利用 v-model 和 filter 实现搜索过滤 http://codepen.io/SitePoint/pen/VLdQEW
* slot 插槽，调用组件时供插入内容 ，没有插入内容时供回退显示

  组件定义
    .modal-mask
      slot(name='body')

  组件调用
    modal
      div(slot='body')

* 配置预处理支持，如 jade , sass，[Pre-Processors | Introduction](https://vuejs.github.io/vue-loader/configurations/pre-processors.html)
* 组件间通信 [JS Bin - Collaborative JavaScript Debugging](http://jsbin.com/poninazoku/edit?html,js,output)  
* 如何引入外部资源，比如地图JS，[javascript - webpack external react 时只能使用其全局变量或相对路径怎么办？ - SegmentFault](https://segmentfault.com/q/1010000002720840)  
* 如何引入`node_modules`中的文件
* set remove [Edit fiddle - JSFiddle](http://jsfiddle.net/tianhai/6fLeb/1/)
* 实现简单的路由（页面切换）
```html
// index.html
  <body>
    <component :is="currentView"></component>
```
[Dynamic Components in Vue.js - JSFiddle](https://jsfiddle.net/coligo/mfxb9aeh/)

> 在 Vue 当中，组件被当作是一等公民，所以设计和完成一个 Web App 之前，最好先构思好如何构建各个组件，哪些组建需要被复用到，哪些页面是要切换的。
> 目录，views 页面，components 组件


* 组件通信-通俗

![![img](http://ww4.sinaimg.cn/large/4e5d3ea7jw1f2lxrgfi2lj20gj0p042z.jpg)组件通信-通俗](http://ww4.sinaimg.cn/large/4e5d3ea7jw1f2lxrgfi2lj20gj0p042z.jpg)

[稀土掘金：Vue 组件化开发实践](http://gold.xitu.io/entry/55f77eb460b28e6a6f0f4f86)

[Justineo/vue-octicon: Octicon component for Vue.js, using inline SVG.](https://github.com/Justineo/vue-octicon)

* 局部CSS
> Vue 文件格式可以支持局部 CSS，只要在`<style>`标签上加上一个 scoped 属性
> 避免使用，会带来不必要的麻烦，请手动使用命名空间解决

* 派发事件`$dispatch`
  1. 在当前实例上触发
  2. 向上冒泡触发一个后停止，除非返回 true
  3. 附加参数传给回调

```js
var parent = new Vue()
var child1 = new Vue({ parent: parent })
var child2 = new Vue({ parent: child1 })
var child3 = new Vue({ parent: child2 })

parent.$on('test', function () {
  console.log('parent notified')
})
child1.$on('test', function () {
  console.log('child1 notified')
})
child2.$on('test', function () {
  console.log('child2 notified')
})
child3.$on('test', function () {
  console.log('child3 notified')
})

child3.$dispatch('test')
// -> "child3 notified"
// -> "child2 notified"
```

* 广播事件`$broadcast`
  1. 广播给全部后代
  2. 各分叉传播时，触发一个后在当前分叉停止，除非返回 true

* 切换view导航时，应用状态类
  先定义一个当前view的变量
  写一个方法改变view,支持传参
  点击导航时，调用改变view的方法，指定眺到哪个view
  最后将要应用的状态类与当前view变量名绑定，
  实现效果就是，仅当当前view激活时应用状态类，其它非激活view的类会被移除

* 切换view后，手动将页面滚动到顶部

  `window.scrollTo(0, 0) // 这个方法放到改变视图的方法里`

* 向组件传递数据
  prop event slot 三种方式
```html
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat">
  <!-- content -->
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
```

* vuex 状态共享，页面少时非必要，大型SPA必用
* 如果不用vuex，如何共享状态
  > 把这个状态放到这两个组件共同的父组件中然后通过 prop.sync 来同步这两个组件的这个状态
  > 在这两个组件中都放置这个状态然后通过共同父组件的一个 prop 来在父组件中调用函数执行一个 this.$dispatch 通知子组件这个状态有改动，借此来同步各个组件中的这个状态。
* 用事件通知prop更新
* 使用umd风格，实现更多支持
    ```
    output: {
      library: 'ComponentName',
      libraryTarget: 'umd'
    }
    ```

## vuex
* `store` 状态的容器，响应式，当其中状态变化时，相应组件高效更新。不能直接修改（赋值），只能显式地通过`mutations`中定义的方法`commit` 
* Mutations 正如其名，只是用来修改 state，只能是同步的纯函数
  Mutations 本质上是一个事件系统，由事件名称和处理函数构成
  Actions 通过 Mutations 来操作 state，使用灵活
* 调用，简单在计算属性中返回即可
* 优点，更明确地状态追踪

## 计算缓存 vs Methods

计算属性是基于它的依赖缓存，如果定义的不是响应式依赖，将不会更新
而 method 在页面重新渲染时，总是会执行

[计算属性 - vue.js](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

## 变化检测
要让新增加的值支持响应更新，需挂到data已存在的属性上，不支持添加新的根级响应式属性
```js
this.$set(this.someObject,'b',2)
```

[深入响应式原理 - vue.js](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A3%B0%E6%98%8E%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7)

## 有待改进

  * router children 嵌套，不要全是一级，跳转传参可在 path:id 来配置
  * 测试数据，可写成模块
    ```js
    /**
     * 创建临时数据
     */
    const setpromise = data => {
      return new Promise((resolve, reject) => {
        resolve(data)
      })
    }
    ```

## Vue-JSX

* 不支持 v-model
		[nickmessing/babel-plugin-jsx-v-model: JSX Syntactic Sugar Plugin for v-model](https://github.com/nickmessing/babel-plugin-jsx-v-model)

* slot
[Supported slot from Component's inside? · Issue #19 · vuejs/babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/19#issuecomment-313997180)
```
<div class="modal-container">
	{this.$slots.default.length
		? this.$slots.default[0]
		: <h1>Your content here</h1>} 
</div>
```
在vue里 querySelectorAll 取不到 nodeList
用其它方法取到的是 HTMLcollection，比较特殊，不能直接当数组处理
ES6提供的了转化方法 Array.from(HTMLcollection)

```js
var inputs = window.document.getElementsByTagName('input')
var body = window.document.getElementsByTagName('body')[0]
console.log(body)
Array.from(inputs).forEach(function(item) {
		console.log(item)
})
inputs[x].addEventListener('focus', function() {
		body.style.position = 'fixed'
		console.log(body.style.position)
})
inputs[x].addEventListener('blur', function() {
		body.style.position = 'static'
		console.log(body.style.position)
})
```

## 解决 iOS 中 fixed 定位，输入时错位的问题

根据 focus 和 blur 的状态添加移除 fixfixed 类
把 position 改为 absolute 是普遍做法，当试了不行，干脆直接隐藏

```css
.fixfixed .ui-header, .fixfixed .ui-footer {
	/*position: absolute;*/
	display: none
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

## 学习参考

[Vue 探索与实践 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2017/07/17/The-Exploration-and-Practice-of-Vue/)

## 过滤器 - filter
* 2.x 起，不能在指令中使用，改用 JS 原生 filter，写成计算属性
* 2.x 起，传参数由原来空格变成括号，即普通函数调用形式

[Edit fiddle - JSFiddle](https://jsfiddle.net/nw5yhLwv/)

## vue-cli webpack 打包
```
app.js/main.js 页面入口
chunck-vender.js vue 框架、模块 
chunck-common.js  
manifest 异步、script 动态引入
```
[webpack使用CommonsChunkPlugin拆包心得 - 简书](https://www.jianshu.com/p/5a543a0284f6)
[Splitting Bundles with Webpack 4](https://lmiller1990.github.io/electic/posts/splitting_bundles_with_webpack_4.html)
[vue多页面开发和打包的正确姿势 - 掘金](https://juejin.im/post/5a8e3f00f265da4e747fc700#heading-1)
[webpack/examples/common-chunk-and-vendor-chunk at master · webpack/webpack](https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk)
[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
查看完整配置`./node_modules/.bin/vue-cli-service inspect`
偶然编译出错，尝试删除`node_modules/.cache`

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
[javascript - vue-cli 3.0 多页面 怎么配置？ - SegmentFault 思否](https://segmentfault.com/q/1010000013659421)
webpack 的 stats 配置不能用，选了别的插件
[stats config invalid ? · Issue #2652 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/issues/2652#issuecomment-425632179)

## 打包优化
多页，每个页面全部资源加起来超过 1.7MB，原因是 vendor js 和 vendor css 加起来就 1.5M
[vue.js - How to break the js files into chunks in vue cli 3 with webpack performance object? - Stack Overflow](https://stackoverflow.com/a/51817891/5657916)
[blog/2018-07-14-wpk.md at master · wqzwh/blog](https://github.com/wqzwh/blog/blob/master/source/_posts/2018-07-14-wpk.md#webpackprodconfjs)

## 前端编译服务崩溃问题
升级 vue-cli 3 后，在修改 JS 文件，尤其是频繁保存时，服务极易崩溃，可以稳定重现
因为我大部分时间在编辑 vue 文件，感觉不明显，景帅反映比较突出，严重影响开发效率
崩溃原因： sourcemap 生成、 文件 watch 等功能内存占用大，webpack 部分插件内存泄漏、高内存占用，触及 V8 默认回收上限 1400Mb
解决办法是提升上限，避免触及，需要注意如何正确地添加参数

错误方式（景帅在 package.json 中添加的）：
`$ vue-cli-service serve --max_old_space_size=4096`
正确方式：
1. [yarn serve - JavaScript heap out of memory crash · Issue #1453 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/issues/1453#issuecomment-430969846)
`node --max_old_space_size=4096 node_modules/@vue/cli-service/bin/vue-cli-service.js serve --open`
2. [fix: increase Node memory limit to workaround webpack crash, fix #1453 · octref/vue-cli@bb98ef0](https://github.com/octref/vue-cli/commit/bb98ef08874bf07b9a510b23f8d6f94c0afaf01c)
相关Issue：
[Process out of memory - Webpack · Issue #1914 · webpack/webpack](https://github.com/webpack/webpack/issues/1914#issuecomment-392660230)

## 多页路由
* 使用 vue-router 的问题，如果层级深，需要调用父级

## 单文件拆分
```
<template src="./template.pug" lang="pug"></template>
<script src="./script.js"></script>
<style src="./style.styl" lang="stylus"></style>
```
```
├── app.js
└── component
    ├── item-edit
    └── item-list
        ├── config.json
        ├── index.vue
        ├── script.js
        ├── style.styl
        └── template.pug
```

## mixin
* 把组件逻辑暴露在mixin中
* 有些耦合度高的数据不适用
[Vue文档中几个易忽视部分的剖析 - 掘金](https://juejin.im/post/5ab3924b6fb9a028db589b57)

## 组件切换数据问题 v-if 和 v-show
如果用`v-show`的话，`mounted`只执行一次，如果希望组件显示时执行，简单解决是改用`v-if`，比较复杂的方法如下：
[vue.js - Trigger code on component v-show=true - Stack Overflow](https://stackoverflow.com/questions/42813594/trigger-code-on-component-v-show-true)

## 动态样式
可以绑定计算属性
[Edit fiddle - JSFiddle](https://jsfiddle.net/Andy0708/8t8902gn/1/?utm_source=website&utm_medium=embed&utm_campaign=8t8902gn)
