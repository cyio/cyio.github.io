# 写一个处理加法可能产生精度的函数

- 分别乘以一定倍数相加，再以倍数除掉
- 计算倍数，小数点后的位数

```js
  // 0.1 + 0.2 = 0.3
  function getTimes(a) {
    return a.toString().split('.')[1]?.length || 0
  }

  function floatSum(x, y) {
    let times = Math.max(getTimes(x), getTimes(y))
    let by = 10 ** times
    let sum = (x * by + y * by) / by
    console.log(sum)
    return sum
  }

  floatSum(0.1, 0.2)
  floatSum(1, 0.12)
  // 0.01 + 0.000000002
  // output: 0.010000002000000001
```
