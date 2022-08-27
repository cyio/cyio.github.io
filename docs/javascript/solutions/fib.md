# fib

1. 迭代/动态规划，空间换时间
```js
  // 0, 1, 2, 3, 5
  // 1, 2, 3, 4, 5
   function fib(n){
     const arr = new Array(n + 1).fill(null)
     arr[0] = 0
     arr[1] = 1
     for (let i = 2; i < arr.length; i++){ // 注意循环起点
       arr[i] = arr[i - 1] + arr[i - 2]
     }
     return arr[n]
   }
   console.log(fib(5))
```

2. 省空间优化
3. 递归会超时，需要做尾递归优化 

递归，数据不大时可用，代码简洁直观
```js
var climbStairs = function(n) {
  // 递归会超时
  if (n <= 2) return n
  return climbStairs(n - 1) + climbStairs(n - 2)
};
```

尾递归优化，效率高，牺牲可读性

尾调用 （tail call），应用在递归，叫尾递归

```js
// 本质，依然是 3 个变量
// n 递减，相当于循环控制
// n1 和 n2，即数列中两个滚动值，如第一次迭代初始值 0, 1，第二次迭代 1, 0 + 1，第三次迭代 1, 1 + 1
function fib(n, n1 = 0, n2 = 1) {
  if (n === 0) return n1 // 注意这里返回不是 n，而是 n1

  return fib(n - 1, n2, n1 + n2) // 尾位置
}

console.log(fib(5))

// 0, 1, 1, 2, 3, 5
// 运行过程
// 5 0 1
// 4 1 1
// 3 1 2
// 2 2 3
// 1 3 5
// 0 5 8
```
