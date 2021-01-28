# 字符串过滤数字加反转

要求多解

```js
let str = 'abc12de3'

// 1. replace
function fn(str) {
  let _str = str.replace(/[0-9]/g, '')
  return _str.split('').reverse().join('')
}
// 2. filter
function fn1(str) {
  let arr = str.split('')
  // split 后都是字符串
  arr = arr.filter(i => {
    // typeof Number(i) !== 'number' // typeof Number('a')  === NaN === 'number'
    // Number(i) !== NaN // NaN === NaN = false
    return isNaN(i)
  })
  return arr.reverse().join('')
}

console.log(fn(str))
console.log(fn1(str))
```
