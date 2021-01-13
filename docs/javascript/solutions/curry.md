# 柯里化

转换函数，多个参数依次传入
`fn(a)(b)(c) --> fn(a, b, c)`

```js
const add = a => b => c => a + b + c
let r = add(1)(2)(3)
console.log(r)
```

实现 addTwo
```js
  // add2(3) === 5

  function curry(fn, ...arg) {
    return function (...arg2) {
      return fn(...arg, ...arg2)
    }
  }

  const add = (x, y) => x + y

  let addTwo = curry(add, 2)
  console.log(addTwo(3))
```

支持多参

1. 分解为每两个参数合并
2. 合并完成，即递归结束，调用真正函数计算结果

```js
  // 支持多参
  // 两个嵌套函数接收两个参数，递归合并参数

  function curry(func) {
    return function curried(...args) { // 一个可递归调用的函数，接第一个参数
      // console.log({ args })
      if (args.length === func.length) { // 合并后的参数，达到 func 参数数量
        return func.apply(this, args)
      }
      return function(...args2) { // 接第二参数
        // console.log({ args2 })
        return curried.apply(this, args.concat(args2)) // 递归合并参数，concat 优点，可数组可单个值
      }
    }
  }

  function add(x, y, z) {
    return x + y + z
  }

  let addMore = curry(add)
  let r = addMore(3)(2)(4)
  // let r = addMore(3, 2, 4)
  // let r = addMore(3)(2, 4)
  console.log(r)
```
