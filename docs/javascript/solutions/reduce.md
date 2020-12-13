# reduce

```js
Array.prototype.myReduce = function(fn, initValue) {
  let accum = initValue
  for (let i = 0; i < this.length; i++) {
    // fn 需要 index
    accum = fn(accum, this[i], i, this)
  }
  // 返回值
  return accum
}
```
