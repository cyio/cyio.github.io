# 排序
[[toc]]

## 冒泡排序

1. 相邻元素置换位置，从头到尾
2. 然后从第二个元素开始，重复第一步

空间复杂度 O(n^2)

优化：有序数据可以标记判断，将时间降到 O(n)

```js
  // 1 4 5 2 3
  // 1 4 2 5 3
  // 1 2 4 3 5
  // 1 2 3 4 5
// 了解原理后如何思考，从具体到抽象
// 内部是置换循环，外部是重复循环
// 内循环，减掉已经排好的，当 i 为 1 时，j < arr.length - 1
// 小于等于不动，大于时置换
function bubbleSort(arr) {
  let i, j
  let n = arr.length
  for (i = 0; i < n - 1; i++) { // 注意边界处理
    for (j = i + 1; j < n; j++) {
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


// 优化
function bubbleSort(arr) {
  let i, j
  let n = arr.length
  let isSorted = true // flag
  for (i = 0; i < n - 1; i++) { // 注意边界处理
    for (j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
        isSorted = false
      }
    }
    if (isSorted) {
      break
    }
  }
  return arr
}
```
字符串按长度排序
```js
  function strSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // if (arr[i] > arr[j]) {
        if (arr[i].length > arr[j].length) {
          let tmp = arr[i]
          arr[i] = arr[j]
          arr[j] = tmp
        }
      }
    }
    return arr
  }
  console.log(strSort(['abcd', 'a', 'abc', 'abd']))
  // expect: ["a", "ab", "abc", "abcd"]

  // 快排 [...sort(left), mid, ...sort(right)]
  function strSort(arr) {
    if (arr.length <= 1) return arr

    let left = []
    let right = []
    let midIndex = Math.floor(arr.length / 2)
    let mid = arr[midIndex]


    for (let i = 0; i < arr.length; i++) {
      if (i === midIndex) continue
      if (arr[i].length < mid.length) {
//       if (arr[i] > mid) {
        left.push(arr[i])
      } else (
        right.push(arr[i])
      )
    }
    
    return [...strSort(left), mid, ...strSort(right)]
  }
  console.log(strSort(['abcd', 'a', 'abc', 'abd']))
```

## 选择排序

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

## 快速排序（快排）

快速排序使用分治法（Divide and conquer）策略来把一个序列（list）分为较小和较大的2个子序列，然后递归地排序两个子序列。

1. 找出基准值
2. 递归形式：[...fn(left), pivot, ...fn(right)]

```js
// 先考虑主要功能，再考虑边界情况
// 注意最后数组合并用了递归，结束条件是传入的数组只剩下一个值
// 是否假定了数组没有重复项，如果有重复项如何处理
// 方法1：将 pivot 从中间取出，与剩余比较
// 方法2：将 pivot 从开头pop，与剩余比较
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let left = []
  let right = []
  // let pivot = arr[arr.length - 1]
  // for (let i = 0; i < arr.length - 1; i++) {
  // 改进，不要依赖最后一个值，注意 pivot 表示基准值，还需要提前算下 privotIndex
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0] // splice 返回的是数组
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

## 插入排序

描述：
1. 往前数牌，不断比较移动元素，找到最终插入位置时插入
2. 下一个数

```js
// 将值在数组前插入
// 移除某个位置的值
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++){
    let j = i
    let cur = arr[i]
    while(j > 0 && arr[j - 1] > cur) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = cur
  }
  return arr
}
let result = insertionSort([3, 5, 2, 11, 1, 2, 'abc', 'zfd', 'sad', 'eng'])
console.log(result)
```
[前端开发必会的JS算法之插入排序-码云笔记](https://www.mybj123.com/4925.html)

## 快速选择
分区函数，返回 index
发现小于 k element，与当前区间交换
[Quick Sort and Quick Select - YouTube](https://youtu.be/v-1EGgaTFuw?t=1221)

