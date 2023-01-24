# vue-router
[[toc]]

## 路由原理
hash / history

差异：
- 表现：URL 显示，改变范围，历史记录显示
- 行为：
- 原理：[event] hashchange popstate
- history 刷新会发请求，依赖 server 支持
- 兼容性

[深入理解前端中的 hash 和 history 路由 - 知乎](https://zhuanlan.zhihu.com/p/130995492)

## 基础

- 为什么优先使用 router-link，首要原因是，写一次，兼容 history 和 hash 模式
- 跳转常规用法 `router-link.left(tag="div" to="/rule")`
- 模板中返回 `.left(@click="$router.go(-1)")`
- router 非可点击元素，添加事件 `<router-link @mousedown.prevent.native="$router.push(...the path...)"></router-link>`
- history 模式，nginx 需要特殊配置，否则线上访问首页外的页面会 404

  [NGiNX Configuration for Vue-Router in HTML5 Mode · GitHub](https://gist.github.com/szarapka/05ba804dfd1c10ad47bf)

- 导航守卫，就是页面权限处理，作用范围：全局 > 页面 > 组件

单独打包 lazy-load

```
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/index/Home.vue'),
  },
```

## 数据获取时机

有两种，分隔点是导航是否完成

1. 未完成 `beforeRouteEnter (to, from, next)`中的`next`之前

```js
fetch().then(res => {
  next(async vm => {
    vm.post = await res.json()
    vm.hideLoading()
  })
})
```
2. 已完成 `created`或`beforeRouteEnter (to, from, next)`中的`next`里面
   使用后者的情况是，我们需要用到`to from`，比如数据获取需要参数`to.params.id`，需要知道来源页面
   然后在`next`中使用`vm`来代表实例

- 响应是指，改动数据就更新视图。
- data 数据属性
- 实例属性，表达时比数据属性多个美元符号
- slot 插槽，调用组件时供插入内容 ，没有插入内容时供回退显示
- 组件定义

  ```
  .modal-mask
    slot(name='body')
  ```

  组件调用

  ```
    modal
      div(slot='body')
  ```

- 实现简单的路由（页面切换）

```html
// index.html
<body>
  <component :is="currentView"></component>
</body>
```

[Dynamic Components in Vue.js - JSFiddle](https://jsfiddle.net/coligo/mfxb9aeh/)

> 在 Vue 当中，组件被当作是一等公民，所以设计和完成一个 Web App 之前，最好先构思好如何构建各个组件，哪些组件需要被复用到，哪些页面是要切换的。
> 目录，views 页面，components 组件

- 组件通信-通俗

![![img](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1f2lxrgfi2lj20gj0p042z.jpg)组件通信-通俗](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7jw1f2lxrgfi2lj20gj0p042z.jpg)

[稀土掘金：Vue 组件化开发实践](http://gold.xitu.io/entry/55f77eb460b28e6a6f0f4f86)

[Justineo/vue-octicon: Octicon component for Vue.js, using inline SVG.](https://github.com/Justineo/vue-octicon)

- 局部 CSS

  > Vue 文件格式可以支持局部 CSS，只要在`<style>`标签上加上一个 scoped 属性
  > 避免使用，会带来不必要的麻烦，请手动使用命名空间解决

- ~~派发事件`$dispatch`~~
  1. 在当前实例上触发
  2. 向上冒泡触发一个后停止，除非返回 true
  3. 附加参数传给回调

```js
var parent = new Vue()
var child1 = new Vue({ parent: parent })
var child2 = new Vue({ parent: child1 })
var child3 = new Vue({ parent: child2 })

parent.$on('test', function() {
  console.log('parent notified')
})
child1.$on('test', function() {
  console.log('child1 notified')
})
child2.$on('test', function() {
  console.log('child2 notified')
})
child3.$on('test', function() {
  console.log('child3 notified')
})

child3.$dispatch('test')
// -> "child3 notified"
// -> "child2 notified"
```

- ~~广播事件`$broadcast`~~

  1. 广播给全部后代
  2. 各分叉传播时，触发一个后在当前分叉停止，除非返回 true

- 切换 view 导航时，应用状态类
  先定义一个当前 view 的变量
  写一个方法改变 view,支持传参
  点击导航时，调用改变 view 的方法，指定眺到哪个 view
  最后将要应用的状态类与当前 view 变量名绑定，
  实现效果就是，仅当当前 view 激活时应用状态类，其它非激活 view 的类会被移除

- 切换 view 后，手动将页面滚动到顶部

  `window.scrollTo(0, 0) // 这个方法放到改变视图的方法里`

- 向组件传递数据
  prop event slot 三种方式

```html
<my-component :foo="baz" :bar="qux" @event-a="doThis" @event-b="doThat">
  <!-- content -->
  <img slot="icon" src="..." />
  <p slot="main-text">Hello!</p>
</my-component>
```

- vuex 状态共享，页面少时非必要，大型 SPA 必用
- 如果不用 vuex，如何共享状态
  > 把这个状态放到这两个组件共同的父组件中然后通过 prop.sync 来同步这两个组件的这个状态
  > 在这两个组件中都放置这个状态然后通过共同父组件的一个 prop 来在父组件中调用函数执行一个 this.\$dispatch 通知子组件这个状态有改动，借此来同步各个组件中的这个状态。
- 用事件通知 prop 更新
- 使用 UMD 风格，实现更多支持
  ```
  output: {
    library: 'ComponentName',
    libraryTarget: 'umd'
  }
  ```

## 路由懒加载
Vue 异步组件，工厂函数 渲染时才触发

代码分割
```

```

[vue-router原理及其核心功能实现](https://juejin.cn/post/6844904169954869262)

## 如何注入 vue

## route 和 router 的区别

route 是信息，router 是实例（提供方法）

[2022前端面试系列——Vue面试题_51CTO博客_前端面试题2022vue](https://blog.51cto.com/u_14627797/5429177)


## 源码

https://github.dev/vuejs/vue-router
关键代码：install.js router.js

在路径变化时修改响应式数据的值触发页面重新渲染

[超燃｜从0到1手把手带你实现一款Vue-Router - 知乎](https://zhuanlan.zhihu.com/p/453957632)

在 mixin - beforeCreate 中，执行 init
```js
        // 当根组件挂载 _router 时候 我们在根组件上定义了一个_route响应式属性 初始值为 this._router.history.current
        Vue.util.defineReactive(this, '_route', this._router.history.current);
```

init 方法核心逻辑
```js
  // 定义初始化路由方法
  // init方法会接受 根组件实例
  init(app) {
    this.app = app;
    const history = this.history;

    // 路由变化监听函数
    const setupListeners = () => {
      history.setupListeners();
    };

    // 初始化时 首先根据当前页面路径渲染一次页面
    history.transitionTo(history.getCurrentLocation(), setupListeners);

    // 额外定义history.listen方法 传入一个callback
    // 在每次BaseHistory中的current属性改变时 传入最新的值 从而更新 app._route
    // _route 变化触发组件重新渲染？
    history.listen((route) => {
      app._route = route;
    });
  }
   
   // ...
}
// ...
```
访问 alias
```js
export default function install(Vue) {
   //...
   
  // 定义原型$router对象
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._rootRouter._router;
    },
  });

  // 定义原型$route对象
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._rootRouter._route;
    },
  });
  
  // ...
}
```


在 App 入口下，query 不一定能取到，location 可以
```js
created() {

	const { embed } = this.$route.query
	
	console.log(embed, 'log', location.search)
```