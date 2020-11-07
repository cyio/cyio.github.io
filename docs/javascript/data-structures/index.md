# 数据结构

[[toc]]

## 简单数据结构

- 有序：栈、队列、链表，省空间（存储空间小）
- 无序：集合、字典、散列表，省时间（读取时间快）

对于简单数据结构，在 ES 中对应的是数组（ Array ）和对象（ Object ）。可以想一下， 数组的存储是有序的，对象的存储是无序的，但是我要在对象中根据 key 找到一个值是立即返回的，数组则需要查找的过程。


## 处理二维数组

处理二维数组，两层嵌套循环，外循环处理行，内循环处理列（可以反转）

```js
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89]
]

var total = 0
var average = 0.0

for (var row = 0; row < grades.length; row++) {
  // 总分 遍历累加
  for (var col = 0; col < grades[row].length; col++) {
    total = total + grades[row][col]
  }
  // 均分 总分/科数
  average = (total / grades[row].length).toFixed(2)
  console.log('student ' + 'average: ' + average)
  // 重置
  total = 0
  average = 0.0
}
```

## 阶乘

正整数的阶乘（英语：factorial）是所有小于及等于该数的正整数的积，计为`n!`

```js
// 非递归
function factorial(n) {
  if (n <= 1) return 1
  var result = 1
  while (n > 1) {
    result = n * result
    n--
  }
  return result
}
// function factorial(n) {
// if (n <= 1) return 1
// return n * factorial(n - 1)
// }
console.log(factorial(4))
```

## 数据结构、算法与应用（原书第 2 版）

### 练习 21

```js
// 5->8
// 7->11
// 偶数取余为 0 ，奇数取余为 1
function fn(n) {
  if (n % 2 === 0) return n / 2
  // return fn(3 * n + 1)
  return (3 * n + 1) / 2
}
console.log(fn(5))
console.log(fn(7))
```

### 练习 23

```js
// 最大公约数
// gcd(20, 30) = 20
// gcd(112, 42) = 28
function gcd(x, y) {
  if (y === 0) return x
  return gcd(y, x % y)
}
console.log(gcd(20, 30) === 10)
console.log(gcd(112, 42) === 14)
```
