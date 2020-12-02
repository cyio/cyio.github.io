```js
Array.prototype.myReduce = function(fn, initValue) {
  let accum = initValue
  for (let i = 0; i < this.length; i++) {
    accum = fn(accum, this[i], i, this)
  }
  return accum
}
```
