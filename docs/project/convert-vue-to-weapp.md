## 不兼容

  * slot
  * filter
  * vue-router

## 目录结构特点
* pages 目录
* 每个页面由三部分组成
* 没有 app.vue
* src/pages/live/index 会被编译为 dist/pages/live/live，全局 main.js 中的 export config 要按 dist 写
* 导航只能在下面？

## 数据获取
* 必须用 request ?

## 引入 phpjs 报错

## navigateTo 报 webview id 已存在

## 过滤器 / 模板中不能执行传参函数
不能用 methods 和 computed

## navigateTo 后的页面缓存

别的跳转方法不行
小程序逻辑层没有注销
组件，tabs 切换时会 onHide，页面跳转会 onUnload
逻辑层与视图层不一致，视图层有缓存，触发刷新有延迟

解决：卸载时，手动重置 data 中声明的值
```
  onUnload () {
    this.listItems = []
    this.filterListItems = []
    this.showLoading = true
  }
```
> 这个是可能的，因为页面数据是存在于 js 中，切换页面的时候是会把数据 setData 到 render 进程中，可能有个老数据显示的闪现，目前的解决方式可以在 onHide 的时候重置数据或者加载 loading 动画，在 onShow 的时候加载数和或者取消 loading 动画。
后期考虑可以从底层优化掉闪现的问题。
[同一路由切换时，上一次的页面数据会保留 · Issue #140 · Meituan-Dianping/mpvue](https://github.com/Meituan-Dianping/mpvue/issues/140#issuecomment-374563689)

## 路径获取
```
this.$root.$mp.page.route
```

## v-for 必须要有 index，最好把 key 也写上
```
v-for="(league, leagueIndex) in group" :key="league.id"
```

## 自定义组件
mpvue 暂时不支持小程序的 Component
[mpvue是否能使用echarts？ · Issue #8 · Meituan-Dianping/mpvue](https://github.com/Meituan-Dianping/mpvue/issues/8#issuecomment-372009117)

## created 所有页面会同时触发
小程序本身设计是会在刚打开的时候就初始化所有的 page，所以会直接触发 created 生命周期。
一般不要使用 created，这个地方跟 vue 不一样
