# Issues

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
