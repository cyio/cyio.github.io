# Vue
[[toc]]

## 与 React 比较

- 相同点：
  - VirtualDOM 性能好
  - 组件化开发
  - 单向数据流
    - 单向数据流中的单向：数据从父组件到子组件这个流向叫单向。
    - 绑定的单双向：View 层与 Model 层之间的映射关系。
- 不同点：

  - vue 双向绑定，react 单向

    > 单向绑定使得数据流也是单向的，对于复杂应用来说，这是实施统一的状态管理（如 redux）的前提。双向绑定在一些需要实时反应用户输入的场合
    > 会非常方便（比如多级联动菜单）。但通常认为复杂应用中这种便利比不上引入状态管理带来的优势。注意，Vue 虽然通过 v-model 支持双向绑定，
    > 但是如果引入了类似 redux 的 vuex，就无法同时使用 v-model。参见[vuex/forms.md at master · vuejs/vuex](https://github.com/vuejs/vuex/blob/master/docs/zh-cn/forms.md)

[React 的单向数据流与 Vue 的双向绑定 - CSDN 博客](https://blog.csdn.net/qq_41206257/article/details/80992085)

## 双向绑定

data -> Watcher -> compile

采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个数据属性的`setter/getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。
具体步骤：

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter
这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 观赛者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个 update()方法
3、待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

[深入响应式原理 — Vue.js](https://cn.vuejs.org/v2/guide/reactivity.html)
[仿 Vue 极简双向绑定](https://codepen.io/cyio/pen/aaboyQ?editors=0010)
[Vue.js 源码解析：深入响应式原理](http://www.infoq.com/cn/articles/Vue.js-code)
[How I built my own vanilla JS alternative to Vue and React | Go Make Things](https://gomakethings.com/how-i-built-my-own-vanilla-js-alternative-to-vue-and-react/)

### proxy 对比 defineProperty
- 代理，而非劫持
- 监听整个对象变化，不再是某个属性（性能）
- 支持数组变更，不再 hack
- 返回新对象，不再遍历修改
- 兼容性：chrome 49+，不支持 IE

[面试官: 实现双向绑定Proxy比defineproperty优劣如何? - 掘金](https://juejin.im/post/6844903601416978439)

## Vue 2

- 只有当实例被创建时 data 中存在的属性才是响应式的
- ~~ready -> mounted~~
- 对 dom 没依赖的操作可放到 created 中，如数据请求
- 学习框架，官方的 examples 一定要 clone 下来看源码，这是对框架特性最好的学习资料
- 要保证文档加载或更新后才执行，需 nextTick
- transition 成组件，应用范围更广，类名变化
- loader 升级 `npm install browser-sync postcss postcss-cssnext postcss-import postcss-nested postcss-pxtorem pug vux vuex weixin-js-sdk--save-dev --cache-min 0`
- 单向数据流，不允许直接修改 props，不要在子组件内部直接修改 props，而需要 emit 事件通知父组件修改

- vue 组件通信 单向 父传子用 props 子传父用事件 emit => on，理解为观察者模式就好了，子组件广播一个事件，然后父组件订阅事件，也可以 watch props

- 非父子之间，用 event hub ，即创建一个全局的空 vue 线程，专门处理事件，触发，监听，卸载

  - [cklmercer/vue-events: Simple event handling for Vue.js](https://github.com/cklmercer/vue-events)

- 复杂应用 => vuex

js 原生通信机制，事件

@click.native

Understanding Components Communication in Vue 2.0 http://taha-sh.com/blog/understanding-components-communication-in-vue-20

## 有待改进

- router children 嵌套，不要全是一级，跳转传参可在 path:id 来配置
- 测试数据，可写成模块
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

- 不支持 v-model
  [nickmessing/babel-plugin-jsx-v-model: JSX Syntactic Sugar Plugin for v-model](https://github.com/nickmessing/babel-plugin-jsx-v-model)

- slot
  [Supported slot from Component's inside? · Issue #19 · vuejs/babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/19#issuecomment-313997180)

```html
<div class="modal-container">
  {this.$slots.default.length
    ? this.$slots.default[0]
    : <h1>Your content here</h1>}
</div>
```

在 vue 里 querySelectorAll 取不到 nodeList
用其它方法取到的是 HTMLcollection，比较特殊，不能直接当数组处理
ES6 提供的了转化方法 Array.from(HTMLcollection)

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

## 学习参考

[Vue 探索与实践 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2017/07/17/The-Exploration-and-Practice-of-Vue/)

## 过滤器 - filter

- 2.x 起，不能在指令中使用，改用 JS 原生 filter，写成计算属性
- 2.x 起，传参数由原来空格变成括号，即普通函数调用形式
- 不像其它方法会转换数据，只是输出给用户看的变了

```js
//global
Vue.filter('filterName', function(value) {
  return // thing to transform
});

//locally, like methods or computed
filters: {
  filterName(value) {
    return // thing to transform
  }
}
```

- 可以串联
- 可以传多个参数

```js
{{ data | filterName(arg1, arg2) }}

// arguments are passed in order after the value
filters: {
  filterName(value, arg1, arg2) {
    return //thing to transform
  }
}
```

- 每次更新都会执行，如果有大量数据且应该是缓存，用 computed

[Edit fiddle - JSFiddle](https://jsfiddle.net/nw5yhLwv/)

## vue-cli webpack 打包

```
app.js/main.js 页面入口
chunck-vender.js vue 框架、模块
chunck-common.js
manifest 异步、script 动态引入
```

[webpack 使用 CommonsChunkPlugin 拆包心得 - 简书](https://www.jianshu.com/p/5a543a0284f6)
[Splitting Bundles with Webpack 4](https://lmiller1990.github.io/electic/posts/splitting_bundles_with_webpack_4.html)
[webpack/examples/common-chunk-and-vendor-chunk at master · webpack/webpack](https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk)
[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
查看完整配置`./node_modules/.bin/vue-cli-service inspect`
偶然编译出错，尝试删除`node_modules/.cache`

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

- 把组件逻辑暴露在 mixin 中
- 有些耦合度高的数据不适用
- 可以是局部，可以是全局
- 生命周期钩子中的代码会合并到组件对应生命周期中

```js
// 设为全局
Vue.mixin({
  mounted() {
    console.log('hello from mixin!')
  }
})

new Vue({
  ...
})
// This console.log would now appear in every component
```

- pure

```js
const toggle = {
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing
    }
  }
}
```

```js
const toggle = {
  data() {
    return {
      isShowing: false
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing
    }
  }
}
```

[Vue 文档中几个易忽视部分的剖析 - 掘金](https://juejin.im/post/5ab3924b6fb9a028db589b57)

## 组件切换数据问题 v-if 和 v-show

如果用`v-show`的话，`mounted`只执行一次，如果希望组件显示时执行，简单解决是改用`v-if`，比较复杂的方法如下：
[vue.js - Trigger code on component v-show=true - Stack Overflow](https://stackoverflow.com/questions/42813594/trigger-code-on-component-v-show-true)

## 动态样式

可以绑定计算属性
[Edit fiddle - JSFiddle](https://jsfiddle.net/Andy0708/8t8902gn/1/?utm_source=website&utm_medium=embed&utm_campaign=8t8902gn)

### 设置当视口变化时，元素总是垂直居中

```js
.container(:style="alignStyle")

  data() {
    return {
      cHeight: document.querySelector('body').clientHeight,
    };
  },
  computed: {
    alignStyle() {
      return {
        marginTop: Number.parseInt((this.cHeight - 576 - 56 - 44) / 2) + 'px'
      }
    },
  },
  mounted() {
    window.onresize = () => {
      this.cHeight = document.querySelector('body').clientHeight
    }
  },
```

## 生命周期

- `beforeDestory`不会在窗口 refresh 或 close 时触发，一般用在路由切换
  ```js
  window.onbeforeunload = function() {
    console.warn('haha') // 要执行的代码
    return '确认离开页面'
  }
  ```

## 大小写

[Prop — Vue.js](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%25E7%259A%2584%25E5%25A4%25A7%25E5%25B0%258F%25E5%2586%2599-camelCase-vs-kebab-case)

## 函数式

无状态，可以无 script，props.itemClick 与上级通信
[Vue Template - CodeSandbox](https://codesandbox.io/s/rwxp7pnklo)

## props

- 自定义验证，接受多种类型

```
validator: prop => typeof prop === 'number' || prop === null,
```

## debug 模板

```js
Vue.prototype.$log = console.log

{
  {
    $log(messaage)
  }
}

{
  {
    ;(function() {
      debugger
    })
  }
}
```

[Debugging Templates in Vue.js](https://vuedose.tips/tips/debugging-templates-in-vue-js/)

## eventBus 全局事件总线

借用 Vue 内部实现了事件模型，其实也可以用第三方库

```js
//文件->event-bus.js

import Vue from 'vue'
export const EventBus = new Vue()
```

使用

```js
import { EventBus } from './event-bus.js'

EventBus.$emit('i-got-clicked', this.clickCount)

EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
})
```

[使用 Vue.js 创建全局事件总线（Global Event Bus ）-pilishen.com,做全球最好的实战教程](http://www.pilishen.com/posts/creating-a-global-event-bus-with-vuejs)

## 生命周期

- CMUD + before
- 子组件后销毁，先挂载

## 热重载

- 编辑`<template>`，重新渲染，保留私有状态
- 编辑`<script>`，销毁重建，created/mounted 都会执行
- 只有在使用**路由**的情况，created 有可能不触发，比如这个组件复用了、没销毁，也没编辑其`<script>`部分

## vue 组件的 data 为啥非要是函数？

> 因此每个实例可以维护一份被返回对象的独立的拷贝

- 实例并不一定需要，官方示例、源码是可以写对象的
- 组件是可复用的 Vue 实例，组件涉及**数据隔离**必须

## watch

- watch 原始类型比较可靠
- array 不需要 deep
- 可以 watch 一个 function
- 容易滥用，watch 不应该用于改变其他状态，而只应该用于产生不触及状态的副作用
- 开始时执行一次 `immediate: true`
- object 属性必须在 data 对象上存在才能让 Vue 转换它(getter/setter)，这样才能让它是响应的。
- 重新赋值可触发
- 只 watch 需要的，否则可能有性能开销问题
- `app.$watch`需要手动注销
- 可以 watch array of objects?

[Vue.js 中 watch 的高级用法 - 掘金](https://juejin.im/post/5ae91fa76fb9a07aa7677543)
[How to Watch Deep Data Structures in Vue (Arrays and Objects) - Michael Thiessen](https://michaelnthiessen.com/how-to-watch-nested-data-vue)

## nextTick

- node 一次事件循环叫 tick
- vue next DOM update cycle 用 promise/MutationObserver 微任务，如果没有可用的微任务特性，回退为宏任务，所以 vue 的 nextTick 是在 setTimeout 前执行
- 比 setTimeout 执行更快

```
process.nextTick(callback)
```

[vue.js - What is nextTick or what does it do in VueJs - Stack Overflow](https://stackoverflow.com/questions/47634258/what-is-nexttick-or-what-does-it-do-in-vuejs)

```js
const copies = callbacks.slice(0) // 复制一个数组，操作不会影响原数组
```

## v-for key 是区分元素是否相同的依据

一般来说，无状态的元素 props 值相同就是相同。此时 key 用 id 用 index 或者不用得到的表现相同，区别只是渲染时有些性能的差异。

有状态的元素包含自己的状态，而 vue 并不知道子元素状态，此时需要用 key 区分。
因为 vdom 渲染出来最后是和上次的 vdom 做 diff 的，如果 diff 出来只有 props 变化，那么就只会修改 props 。

举个例子，比如你交换了 a[0] a[1]，他们都有自己的状态，而他们的 props 没有区别，那么 vue 就根本不会修改元素。但如果你给他们都设置了 id key，那么 vue 知道第一次渲染的 vdom 和 第二次 的 vdom key 发生了变化，从而会交换元素，即使其他属性根本没有发生变化

使用 index 的缺点是，如果使用场景有插值，index 发生变化造成额外渲染

## 异步组件

import Foo from './Foo.vue' 改成 const Foo = () => import('./Foo.vue')

## mock
1. vue cli3 在 devServer 中添加 before 
2. 添加自定义响应返回代码
3. mockjs 增强 mock 能力，可选
[Vue CLI 3 + webpack + Mockjs实现本地数据模拟 - 简书](https://www.jianshu.com/p/fea615354d10)
[Mock Data | vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#mockjs)
[javascript - Node.js - SyntaxError: Unexpected token import - Stack Overflow](https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import)
[Mock 数据](https://umijs.org/zh-CN/docs/mock)
[@babel/register · Babel](https://babeljs.io/docs/en/next/babel-register.html)
[UMI mock 开发中遇到的问题，已经处理的，在这里记录一下。给朋友们一个参考 · Issue #246 · umijs/umi](https://github.com/umijs/umi/issues/246#issuecomment-375225156)
[30 道 Vue 面试题（涵盖入门到精通，自测 Vue 掌握程度） - 哔哩哔哩](https://www.bilibili.com/read/cv3663235/)

Props向下传递，事件向上传递

## computed vs watch
- 模板表达式不便于写复杂计算
- 基于响应式依赖进行缓存，仅响应式依赖改变时才重新求值
- 生成新值挂在 vm 上，而 watch 观测已存在的值
- 依赖变化、且第一次访问时，计算新值，而 watch 数据变化就会执行？
- watch 可执行异步、高性能开销、设置执行频率、设置中间状态
[做面试的不倒翁：浅谈 Vue 中 computed 实现原理](https://juejin.cn/post/6844903678533451783)

## vnode
虚拟节点（节点描述）

## 指令
- 作用：对 DOM 元素进行底层操作
- 内置：v-model v-if v-show
- 自定义：通过注册
- 使用： `v-focus`
- 钩子：bind inserted

## 响应式
问题表现：
有时操作数组或对象后，视图没有更新

原因：有些操作，Vue 检测不到变化

变化检测：
- 数组，通过方法操作如 push 可以检测，非方法不行，如索引赋、改长度
- 对象，需要访问来触发 getter/setter，非访问不行，检测不了增、删

解决：
- Vue.set

## 其它
slot 分发内容，占位替换

动态组件`:is`

