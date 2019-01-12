# vue-issues

## vue nextTick 指令 v-el
nextTick 解决要等dom显示出来才执行操作
v-el:name this.$els.name

## Vue项目实践

## 日期格式化之阿拉伯数字转中文

导入日期函数
```js
import {date} from 'phpjs'
```

将阿拉伯数字转换为中文
高阶函数，过滤器，数组
星期几的数字作为数组索引取出对应的中文
```
星期{{day | date 'w' | week}}

filters: {
	week: function (value) {
		return ['日', '一', '二', '三', '四', '五', '六'][value]
	}
}
```

## 将 vue data 对象转换为普通对象
```
const newObj = { ...vueObj }
```

## v-for 中过滤、处理数据
* filter 在 vue 2 中移除了
* 直接在 methods 中使用`arr.sort()`等副作用方法，会引起更新，再次执行 v-for，形成死循环
* 可以使用 methods
* 使用 computed，注意用 map 方法拿副本去 sort
[javascript - vue.js filters in v-for - Stack Overflow](https://stackoverflow.com/questions/43574671/vue-js-filters-in-v-for)

## svg
[javascript - Vue Cli 3 is not allowing me to process SVG's in Webpack - Stack Overflow](https://stackoverflow.com/questions/49459262/vue-cli-3-is-not-allowing-me-to-process-svgs-in-webpack)

## 组件原子拆分、合成
* 独立可测试，单一职责，原子化，以便根据业务合成，而不是追求少创建文件。确保可维护，稳定
* 为何“只有一个改变的原因”如此重要呢？因为这样组件的修改就被隔离开来，变得可控了。
* 单一职责限制了组件的体积，也使其聚焦于一件事。这有利于编码，也方便了之后的修改、重用和测试。
* 职责拆分：数据、UI，命名 with
*总结一下开闭原则就是：软件系统的核心逻辑都不应该轻易改变，否则会破坏系统的稳定性和增加测试成本。我们应当建立合适的抽象并统一接口，当业务需要扩展时，我们可以通过增加实体类来完成。
[组件的划分 - 掘金](https://juejin.im/post/5a66fd9d6fb9a01c9332d337)
[[译] 更可靠的 React 组件：单一职责原则-云栖社区-阿里云](https://yq.aliyun.com/articles/617955)
[前端早读课](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651230706&idx=1&sn=e96555bdf9b8251852928f4a3c5193e0)
[前端早读课](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651230683&idx=3&sn=72a870d0c1bede39b5560244495a14c4)
