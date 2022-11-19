# reduce

```js
  // []
  // initValue 
  // cb(a, v, index, arr)

  Array.prototype.myReduce = function (cb, initValue){
    let hasInitValue = initValue !== undefined
    if (this.length === 0 && !hasInitValue) throw new Error('error')

    let accum = hasInitValue ? initValue : this[0]
    // let _arr = hasInitValue ? this : this.slice(1)

    for(let i = hasInitValue ? 0 : 1, len = this.length; i < len; i++) {
      accum = cb(accum, this[i], i, this)
    }

    return accum
  }


  let r = [1, 2].myReduce((accum, cur) => accum + cur, 4)
  let r1 = [1, 2].myReduce((accum, cur) => accum + cur)

  console.log(r)
  console.log(r1)
```

实战推导
```js
console.log(
  [1, 2].reduce((pre, cur) => pre + cur)
)
console.log(
  [].reduce((pre, cur) => pre + cur) // TypeError: Reduce of empty array with no initial value
)
// 分析：
// 1. 输入 arr func init，输出 arr
// 2. 默认值可不传

function reduce(arr, func, initValue) {
  let hasInitValue = initValue !== undefined
  if (arr.length === 0 && !hasInitValue) throw new Error('error')
  let cur = hasInitValue ? initValue : arr[0]
  for (let i = hasInitValue ? 0 : 1; i < arr.length; i++) {
    cur = func(cur, arr[i])
  }
  return cur
}

console.log(
  reduce([1, 2], (pre, cur) => pre + cur, 1)
)
console.log(
  reduce([1, 2], (pre, cur) => pre + cur)
)
console.log(
  reduce([], (pre, cur) => pre + cur)
)

```
