# trim

正则表达式-实现 trim(str)方法，过滤字符串首尾空白

```js
function trim(str) {
  var reg = /^\s+|\s+$/g

  str = str.replace(reg, '')
  console.log(str)
}
trim(' abc123   ')
```
