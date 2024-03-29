# Leetcode
[[toc]]

## 26. 删除排序数组中的重复项

题意：
1. 就地修改
2. 要求空间占用 O(1)，不能用中间数组

思路：
1. 双指针，慢指针在元素不重复时才移动
  - 重点不是 nums 修改，而是输出 length。结合 length，可以作一次 slice，给出 nums
2. 倒序遍历，当元素重复时，删除当前项
  - 正序剪切，会影响 i。倒序减切掉一个元素，i--，不影响待处理元素（身后）

## 70. 爬楼梯

思路：
1. 记忆化递归

## 121. 买卖股票的最佳时机

题意：
1. 价格不会为负

思路：
1. 模拟抄底，记录到目前为止最低价
1. 如果希望知道哪天买入和卖出，可用双指针，慢指针总是指向最小价格

注意点：
1. 给`Math.max`方法传入太大的数组，会导致超时，解决技巧，遍历时更新最小值
2. 从第 2 个价格开始才能计算价格差，初始化最小价格为第一个价格

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1h5rzgs19a2j214i0cwk04.jpg)

## 3. 无重复字符的最长子串

思路：
1. 滑动窗口
2. 维护一个窗口，窗口右边界从 -1 开始

## 387. 字符串中的第一个唯一字符

思路：
1. 暴力，O(n^2)
2. 两次循环，时间 O(n)
3. 由于 map 中没有存索引，第二次循环还是遍历原数组，以输出索引

## 88. 合并两个有序数组

思路：
1. 双指针，倒序取较大值，当 nums2 取空时，结束。 case 要考虑全，如 p1 == -1 p2 == -1 

## 896. 单调数列

思路：
1. 一次遍历，否定判断，输出一个为真或全部为真

## LCP 06. 拿硬币

公式：`f(x) = x / 2 + x % 2`

## 680. 验证回文字符串 Ⅱ

依赖知识：如何判断回文，1. 反转 2. 双指针 3. 迭代

回文指针末尾，lr 相邻，或 l === r，后者只剩一个字母，满足回文，比不比较都行

贪心算法

## 215. 数组中的第K个最大元素

1. sort 降序后，取第 k - 1 元素 O(nlogn)

## 209. 长度最小的子数组

滑动窗口
1. 右边界移动，直到找到解
2. 找到解，左边界移动

## 1143. 最长公共子序列

dp 使用二维数组记录结果

边界，一侧为空字串

[演示、公式](https://alchemist-al.com/algorithms/longest-common-subsequence)

dp 方程
```js
if (a === b) {
  table[row][col] = table[row - 1][col - 1] + 1;
} else {
  table[row][col] = Math.max(table[row][col - 1], table[row - 1][col]);
}
```

![4e5d3ea7ly1gyr42umo68j20av06ytbt.jpg (391×250)](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7ly1gyr42umo68j20av06ytbt.jpg)

关联题目：583. 两个字符串的删除操作

## 三数之和

1. 暴力 O n^3
2. 双指针 如何做到不重复（有序 + 有两个数字不重复，第三个数字一定不重复，不会出现 [1, 2]，[2, 1]，每个数字开头的解要穷举）

```js
function threeSum(nums, target = 0) {
    // let res = []
    let res: number[][] = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = nums.length - 1
        while(l < r) {
            let other = target - nums[i]
            let sum = nums[l] + nums[r]
            if (sum > other) r--
            if (sum < other) l++
            if (sum === other) {
                res.push([nums[i], nums[l], nums[r]])
                if (l < r && nums[l + 1] === nums[l]) { // 下一个值与当前值相同时，多跳一步
                    l+=2
                } else {
                    l++
                }
            }
        }
    }

    return res
}



console.log(threeSum([-1, -2, 2, -2, 0, 4, 1]))
console.log(threeSum([0, 0, 0, 0]))
```