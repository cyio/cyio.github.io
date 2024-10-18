数组去重、排序

快排变体
```js
const arr = [5, 3, 8, 5, 2, 8, 1, 4];
function processArray(arr) {
    if (arr.length <= 1) return arr
  // 实现代码
  let pivotIndex = Math.floor((arr.length / 2))
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = [], right = [], leftSet = new Set(), rightSet = new Set()
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (value === pivot) {
        continue
    }
    if (value < pivot) {
        if (!leftSet.has(value)) {
            left.push(value)
            leftSet.add(value)
        }
    } else {
        if (!rightSet.has(value)) {
            right.push(value)
            rightSet.add(value)
        }
    }
  }

  return [...processArray(left), pivot, ...processArray(right)]
}

console.log(processArray(arr)); // 输出: [1, 2, 3, 4, 5, 8]
```

**快速排序的时间复杂度**：

- 快速排序在平均情况下的时间复杂度为 **O(n log n)**。这是因为它在每次递归中将数组分成大约相等的两部分，而每次分割都需要遍历整个数组，导致了每次递归的操作次数为 O(n)，而递归的深度为 **log n**。
- 在最坏情况下（如选择的基准总是最大或最小值，导致左右部分极不均衡），快排的时间复杂度会退化为 **O(n²)**，不过这种情况可以通过优化基准选择策略来减少出现的概率（例如随机选择基准）。