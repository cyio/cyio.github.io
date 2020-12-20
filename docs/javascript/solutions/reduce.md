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
