## 日期区间

* 数组包含连续的15天
* 当天为最后一天

```js
new Date().getDate()
// 6
// getDate 返回日期对象为当月的第几天
// setDate 设置日期对象为当月的第几天，参数为0时，设置为上个月最后一天，负值时指往前的月份

// 采用的方案
dateRange () {
  var targetDate = new Date()
  var dateRange = [+targetDate]
  for (var i = 0; i < 15; i++) {
    dateRange.push(targetDate.setDate(targetDate.getDate() - 1))
  }
  return dateRange
}

// selected 写在data里，动态保持
data {
  selected: window.date('Y-m-d', +new Date() / 1000)
}

// 用字符串截取的方法做格式转换过滤器
// 子字符串有时是成组的
chineseDate (item) {
  const day = +item.substring(8)[0] ? item.substring(8) : item.substring(9)
  const month = +item.substring(5)[0] ? item.substring(5) : item.substring(5)[1]
  return item.substring(0, 4) + '年' + month + '月' + day + '日'
}

// 放弃的死数据方案
dateRange: [
  '2016-07-06',
  '2016-07-07'
]

option(value="{{item}}" v-for="item in dateRange") {{item|chineseDate}}
```
