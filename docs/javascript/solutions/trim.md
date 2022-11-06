# trim

正则表达式-实现 trim(str)方法，过滤字符串首尾空白

```js
function trim(str) {
  return str.replace(/^\s+|$\s+/g, '')
}
let r = trim(' abc123   ')
console.log(r)
```
