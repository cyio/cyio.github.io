# Vue

## Vue 2

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
* 把组件逻辑暴露在mixin中
* 用事件通知prop更新
* 使用umd风格，实现更多支持
    ```
    output: {
      library: 'ComponentName',
      libraryTarget: 'umd'
    }
    ```

## vuex

* Mutations 正如其名，只是用来修改state，只能是同步的纯函数
  Mutations 本质上是一个事件系统，由事件名称和处理函数构成
  Actions通过Mutations来操作state，使用灵活

## 计算缓存 vs Methods

计算属性是基于它的依赖缓存，如果定义的不是响应式依赖，将不会更新
而 method 在页面重新渲染时，总是会执行

[计算属性 - vue.js](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

## 变化检测问题
```js
// 要让新增加的值支持响应更新，需挂到data已存在的属性上，不支持添加新的根级响应式属性
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


