// 要求输出全部解

let arr = [1, 2, 2, 3, 4, 7, 8, 9], sum = 10

// 不重复

// 1 -
// 2 -
// 2 -
// 3 -
// 4 -
// 7 3
// 8 2
// 9 1

// map 全输出，时间，O(n)
function twoSum(arr, sum) {
  let map = new Map()
  let ans = []

  for (let i = 0; i < arr.length; i++) {
    let other = sum - arr[i]
    if (map.has(other)) {
      ans.push([arr[i], other])
    } else {
      map.set(arr[i], i)
    }
  }

  return ans
}

// 双指针，时间：O(2/n)
function twoSum2(arr, sum) {
  let l = 0, r = arr.length, ans = []

  while(l < r) {
    let add = arr[l] + arr[r]
    if (add === sum) {
      ans.push([arr[l], arr[r]])
      l++
      if (arr[l] === arr[l - 1]) {
        l++
      }
    } else if (add < sum) {
      l++
    } else {
      r--
    }
  }

  return ans
}

console.log(twoSum(arr, sum))
console.log(twoSum2(arr, sum))

// 变种，输出解的数量
// 顺序不同，[1, 2] [2, 1]
// 枚举，减少枚举时间，比如较大的数在前，j < i, 结果 * 2
// 进一步，map 保存枚举值，直接查询 j
// https://oi-wiki.org/basic/enumerate/ 例题
