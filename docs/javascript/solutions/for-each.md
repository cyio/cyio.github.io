注意点：
- 不能用 bind，因为需要执行，apply 传数组

```js
Array.prototype.myForEach = function (fn, thisArg){
  if (typeof fn !== 'function') throw new Error('not a function')

  for (let i = 0; i < this.length; i++) {
    fn.call(thisArg, this[i], i, this)
  }
}
```
