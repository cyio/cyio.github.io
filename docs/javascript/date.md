# Date

## 日期格式国际标准
use the ISO 8601 standard for dates
YYYY-MM-DD

美国用的是 MMDDYYYY

如果手动拼，要注意用 0 补足位数 ，即 left pad

优点是清楚，易于排序
```js
(new Date()).toISOString().substr(0, 10)
// "2018-10-07"


new Intl.DateTimeFormat('zh-CN').format(new Date)
// "2018/2/26"
```
