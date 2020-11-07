
函数参数有上限，因此 apply array 可能超出限制，可分解处理规避

```js
  function minOfArray(arr) {
    let min = Infinity // 需要初始一个最大值以便后面比较
    const limit = 30000 // 假定

    for (let i = 0; i < arr.length; i += limit) {
      let curMin = Math.min.apply(null, arr.slice(i, i + limit))
      min = Math.min(min, curMin)
    }

    return min
  }
  //   let arr = new Array(2 ** 32 - 1).fill(Math.random() * 100) // browser stuck
  let arr = new Array(2 ** 20).fill(Math.random() * 100)
  //   let res2 = Math.min.apply(null, arr) // when arguments length to 2 ** 17,  chrome throw error 'blank:15 Uncaught RangeError: Maximum call stack size exceeded'
  //   console.log(res2)
  let res1 = minOfArray(arr)
  console.log(res1)
```

source: [Function.prototype.apply() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
