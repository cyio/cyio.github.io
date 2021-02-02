# 字符逆序/翻转字符串

不能用数组的 reverse，可以逆序遍历

这里练习将循环改写为递归
```js
//   function reverseStr(str) {
//     let ans = ''
//     for (let i = str.length - 1; i > -1; i--) {
//       ans += str[i]
//     }
//     return ans
//   }
  function reverseStr(str){
    if (str.length <= 1) return str
    return reverseStr(str.substr(1)) + str[0]
  }
  console.log(reverseStr('a b cd'))
  // bcd a 
  // cd ba
  // d cba
```

变种，输入整形数字，输出字符串

```js
  function revert(num) {
    let str = String(num)
    if (str.length <= 1) return str
    return str.slice(-1) + revert(str.slice(0, str.length - 1))
  }

  let r = revert('4321')
  console.log(r)
```

[第 99 题：编程算法题 · Issue #153 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/153#issuecomment-508535870)

递归实现 sum
```js
  const sum = arr => {
    if (arr.length === 0) return 0
    return arr.pop() + sum(arr)
  }
  console.log(sum([1, 3, 5]))
```

[递归和动态规划 leetcode/dynamic-programming.md at master · azl397985856/leetcode](https://github.com/azl397985856/leetcode/blob/master/thinkings/dynamic-programming.md)

## 过滤

字符串过滤数字加反转，正则方法
```js
// 字符串可以配合 正则 g 标识，输出所有符合条件的值的数组
let str = 'a1b2ccd'
str.match(/[a-z]/g).reverse().join('')

// or 更好访问捕获分组
let array = [...str.matchAll(regexp)];
```
