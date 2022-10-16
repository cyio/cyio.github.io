# lodash

## 源码

node_modules/lodash/lodash.js

自执行
  lodash 对象

`import { xx } from lodash` 引入大对象、解构
`import throttle from lodash/throttle` 引入某个文件

```js
import { throttle } from 'lodash-es';
//or import throttle from 'lodash.throttle'

  methods: {
    throttledMethod: _.throttle(() => {
	  // 在 vue 中找不到 this ?
      console.log('I get fired every two seconds!')
    }, 2000)
  }
```

## throttle
throttle 包装了 debounce，仅设置不同，是否首次执行

isObjectLike 相比 isObject 多了数组

isEqual 深比较
isEmpty 空对象
has 对象有某个属性
get 访问对象、可设默认值
sortBy 集合、对象
union 多数组唯一值
uniq 去重
difference 差集
intersection 交集
times 循环几次
random 在指定范围内获取一个随机值
omit 去掉对象的某些属性
pick 挑选生成新对象，与 omit 相反
sample 随机选择

[Lodash: 10 Javascript Utility Functions That You Should Probably Stop Rewriting | Colin Toh](https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting)

## 使用

