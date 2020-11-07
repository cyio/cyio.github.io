# 查找

## 二分查找

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

