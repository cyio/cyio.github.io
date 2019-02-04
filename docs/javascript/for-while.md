# 循环

## 应用
```js
// 计算乘方 power
function pow(base, exponent) {
  let result = base
  for(let i = 0; i < exponent - 1; i++) {
    // result = result * base
    result *= base
  }
  return result
}
console.log(pow(2, 3) === Math.pow(2, 3))

// 假定第一个数是最大值，然后比较更新
function getMax(nums) {
  let arr = Array.from(arguments)
  let max = arr.pop()
  let n
  // for (let i = 0; i < arr.length - 1; i++) {
  while(n = arr.pop()) {
    if (n > max) {
      max = n
    }
  }
  // }
  return max
}
console.log(getMax(-100, -20, 20, -2) === Math.max(-100, -20, 20, -2))
```
