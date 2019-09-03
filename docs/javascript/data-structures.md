# 数据结构

## 简单数据结构:

- 有序数据结构：栈、队列、链表，有序数据结构省空间（存储空间小）
- 无序数据结构：集合、字典、散列表，无序数据结构省时间（读取时间快）

对于简单数据结构，在 ES 中对应的是数组（ Array ）和对象（ Object ）。可以想一下， 数组的存储是有序的，对象的存储是无序的，但是我要在对象中根据 key 找到一个值是立 即返回的，数组则需要查找的过程。

## 递归

- 递归由基本部分和递归部分组成，基础部分直接定义（即不用递归就能求解），递归部分可以通过参数减小转换为基础部分，递归部分的每一次应用都更接近基础部分，最后一次应用基础部分。
- 一种循环形式，在函数定义内调用自身
- 相似的特征，归纳，递归步骤，常见嵌套循环，外循环递增，内循环递减
- 边界条件
  [谈谈递归](http://io.upyun.com/2016/04/05/recursion/)

```js
// Object 深拷贝
// 注意只要是要求类型是对象，都要把数组和 null 排除下
function deepClone(o1, o2) {
  for (let k in o2) {
    if (
      typeof o2[k] === 'object' &&
      !(o2[k] instanceof Array || o2[k] === null)
    ) {
      if (o2[k] instanceof Array) {
        o1[k] = o2[k]
      } else {
        o1[k] = {}
      }
      deepClone(o1[k], o2[k])
    } else {
      o1[k] = o2[k]
    }
  }
}
let o3 = {
  a: 1,
  b: {
    c: [1, 2],
    d: 'string',
    e: null
  }
}
let o4 = {}
deepClone(o4, o3)
console.log(o4)
// const Arr = [85, 24, 63, 45, 17, 31, 96, 50];
```

### 斐波那契数列

```js
function fib(n) {
  if (n === 1 || n === 2) return n - 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))
```

### 递归解决数据按序请求问题

```js
var ids = [34112, 98325, 68125]
;(function sendRequest() {
  var id = ids.shift()
  if (!id) return console.log('finished')
  $.ajax({ url: '/get', data: { id } }).always(function() {
    //do sth.
    console.log('finished')
    sendRequest()
  })
})()
```

[我接触过的前端数据结构与算法-前端开发博客](http://caibaojian.com/data-structures-and-algorithms.html)

## 处理二维数组

处理二维数组，两层嵌套循环，外循环处理行，内循环处理列（可以反转）

```js
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]

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

## 链表

定义：节点集合，每个节点使用对象引用指向其后继，这个引用叫做链

线性集合，不按照元素的物理顺序排列，而是每个元素有指向，高效插入和移除通过遍历

JS 中数组效率低（实现成了对象，与其它语言有别），除了随机访问，都可以用链表替换一维数组

插入和删除操作展示出高效率，因为只是调整引用指向

缺点是访问慢（如随机）

有哪些操作方法？可以从增删改查来推导

前端没有多少实际用途
[前端应用数据结构：何时使用链表 - 知乎](https://zhuanlan.zhihu.com/p/61935862)

重考察实现
反转链表|交换相邻节点
判断是否有环，硬做 1s | set 判重 | 快慢碰撞


## 排序

### 冒泡排序

相邻元素置换位置

```js
// 了解原理后如何思考，从具体到抽象
// 内部是置换循环，外部是重复循环
// 内循环，减掉已经排好的，当 i 为 1 时，j < arr.length - 1
// 小于等于不动，大于时置换
function bubbleSort(arr) {
  var i, j
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}
let result = bubbleSort([0, 10, 1, 3, 5, 4])
console.log(result)
```

### 选择排序

选择元素置换位置

```js
// 如何在未排序元素中找到最小值
// 外循环的 i 表示当前位置，min 表示最小值的位置
// 内循环只查找最小值，内循环完成后如果最小值位置与当前位置不同，则进行置换
function selectionSort(arr) {
  let i, j, selected, tmp
  for (i = 0; i < arr.length; i++) {
    selected = i
    for (j = i + 1; j < arr.length; j++) {
      if (arr[selected] > arr[j]) {
        selected = j
      }
    }
    if (i !== selected) {
      tmp = arr[selected]
      arr[selected] = arr[i]
      arr[i] = tmp
    }
  }
  return arr
}
let result = selectionSort([3, 1, 2, 5, 4])
console.log(result)
```

### 快速排序（快排）

```js
// 先考虑主要功能，再考虑边界情况
// 注意最后数组合并用了递归，结束条件是传入的数组只剩下一个值
// 是否假定了数组没有重复项，如果有重复项如何处理
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let left = []
  let right = []
  // let pivot = arr[arr.length - 1]
  // for (let i = 0; i < arr.length - 1; i++) {
  // 改进，不要依赖最后一个值，注意 pivot 表示基准值，还需要提前算下 privotIndex
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [85, 24, 63, 45, 17, 31, 96, 50]
console.log(quickSort(arr))
```

### 插入排序

```js
// 将值在数组前插入
// 移除某个位置的值
function insertionSort(arr) {
  let i, j
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        arr.splice(i, 0, arr[j])
        arr.splice(j + 1, 1)
        break
      }
    }
  }
  return arr
}
let result = insertionSort([3, 5, 2, 11, 1, 2, 'abc', 'zfd', 'sad', 'eng'])
console.log(result)
```

### 二分查找

```js
// 二分搜索，对于有序数组查找快
// 如果存在，返回 index，否则返回 -1
// 设置边界时，不需要中间值，因为已经比较过了
function binarySearch(arr, lowerIndex, upperIndex, target) {
  var midIndex
  while (lowerIndex <= upperIndex) {
    midIndex = Math.floor((upperIndex + lowerIndex) / 2)
    var midValue = arr[midIndex]
    if (target > midValue) {
      lowerIndex = midIndex + 1
    } else if (target < midValue) {
      upperIndex = midIndex - 1
    } else {
      return midIndex
    }
  }
  return -1
}
var result = binarySearch([1, 2, 3, 4, 6], 0, 4, 2)
console.log(result)

// 递归写法
// 注意 arr 没有用 slice，作为 Array 原型添加的话，换成 this
function binarySearch(arr, start, end, target) {
  if (start > end || target > arr[end] || target < arr[start]) return -1
  let mid = Math.floor((start + end) / 2)
  if (target < arr[mid]) {
    return binarySearch(arr, start, mid - 1, target)
  } else if (target > arr[mid]) {
    return binarySearch(arr, mid + 1, end, target)
  }
  return mid
}
let result = binarySearch([1, 2, 3, 4, 6], 0, 4, 6)
console.log(result)
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

## Fibonacci number

初始值是 0 1 或 1 1

```js
function fibo(n) {
  if (n <= 1) return n
  // else return fibo(n - 1)+ fibo(n - 2)
  let result
  let fst = 0
  let sed = 1
  let i = 2
  while (i <= n) {
    result = fst + sed
    fst = sed
    sed = result
    i++
  }
  return result
}
console.log(fibo(4))
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
