# 找出出现次数最多元素

1. 次数，用 map
2. 可能有多个并列，输出数组

```js
function findMost(arr) {
  let map = new Map()
  for (let x of arr) {
    let count = (map.get(x) || 0) + 1
    map.set(x, count)
  }

  let maxCount = 0
  let ans = []
  for (let [x, count] of map) {
    if (count > maxCount) {
      maxCount = count
      ans = [x] // 存在新的最大值，重写结果数组
    } else if (count === maxCount) {
      ans.push(x)
    }
  }

  return ans
}

console.log(getMost(['1', '2', '3', '3', '1']))
```
