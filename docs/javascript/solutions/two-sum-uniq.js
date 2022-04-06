// 输出全部解，不重复
function twoSum(nums, sum) {
  nums.sort((x, y) => x - y)
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    let other = sum - nums[i]
    let j = i + 1
    while(j < nums.length) {
      if (nums[j] > other) {
        break
      } else if (nums[j] < other) {
        j++
      } else {
        ans.push([nums[i], nums[j]])
        break
      }
    }
  }

  return ans
}

let d = twoSum([1, 2, 3, 2], 4)
console.log(d)