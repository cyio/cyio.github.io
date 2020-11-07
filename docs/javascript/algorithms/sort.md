# 排序

## 冒泡排序

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

## 插入排序

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

