# 找到字符串中所有字母异位词

```js
function main(s, p) {
    let l = 0, r = 0
    let result = []

    let pFeq = {}
    for (let char of p) {
        pFeq[char] = (pFeq[char] || 0) + 1
    }
    let requied = Object.keys(pFeq).length

    let winFeq = {}
    let formed = 0
    while(r < s.length) {
        let char = s[r]
        winFeq[char] = (winFeq[char] || 0) + 1
        if (r - l + 1 > p.length) {
            winFeq[s[l]]--
            l++
        }
        if (pFeq[char] && pFeq[char] === winFeq[char]) {
            formed++
        } else if (formed > 0) { // reset
            formed = 0
            winFeq = {}
        }
        if (formed === requied) {
            result.push(l)
            formed--
        }
        r++
        // console.log(l, r)
    }

    return result
}

// 1. 如何模拟固定长度窗口滑动，需要排序，或每次小范围比对
// 2. 遇到非字符或长度不足，重置。每前进一步，减掉一个字母计数

console.log(main("cbaebabacd", "abc"))
// console.log(minWindow("abab", "ab"))
console.log(main("abab", "ab")); // Output: [0, 1, 2]

```