// 要求输出全部解

let arr = [1, 2, 3, 4, 7, 8, 9], sum = 10

// 不重复

// 1 -
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

