# fib

## 递归
```js
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

该算法的时间复杂度为 O(2^n)，因为每次递归调用都会产生两个子问题，所以时间复杂度呈指数级增长。该算法的空间复杂度为 O(n)，因为每次递归调用都需要在栈中保存当前的状态，而栈的最大深度是 n。

### 尾递归优化

递归，数据不大时可用，代码简洁直观

数据大时，递归会超时，需要做尾递归优化 

```js
var climbStairs = function(n) {
  // 递归会超时
  if (n === 1 || n === 2) return n
  return climbStairs(n - 1) + climbStairs(n - 2) // 做了运算，不是尾调用
};

// 尾递归版本
var climbStairs = function(n, n1 = 1, n2 = 1) {
    if (n === 1) return n1
    return climbStairs(n - 1, n1 + n2, n1)
};
```

尾递归优化，效率高，牺牲可读性

尾调用 （tail call），应用在递归，叫尾递归

从后往前调用推导

```js
// 先写 while 形式，更容易推导出尾递归参数怎么传
var fib = function(n) {
    if (n < 2) return n
    let pre1 = 0, pre2 = 1, i = 2, cur
    while(i <= n) {
        cur = pre1 + pre2
        pre1 = pre2
        pre2 = cur
        i++
    }
    return cur
};

// 本质，依然是 3 个变量
// n 递减，相当于循环控制
// pre1 和 pre2，即数列中两个滚动值，如第一次迭代初始值 0, 1，第二次迭代 1, 0 + 1，第三次迭代 1, 1 + 1
var fib = function(n, pre1 = 0, pre2 = 1) {
    if (n === 0) return pre1

    return fib(n - 1, pre2, pre1 + pre2) // 尾位置，运算转移到函数入参
};
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


## 迭代/动态规划

空间换时间

```js
// 0, 1, 2, 3, 5
// 1, 2, 3, 4, 5
function fib(n){
  const arr = [0, 1]
  for (let i = 2; i < n + 1; i++){ // 注意循环起点
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
console.log(fib(5))
```

该算法的时间复杂度为 O(n)，因为只需要遍历一遍数组就能够计算出所有的斐波那契数。该算法的空间复杂度为 O(n)，因为需要一个长度为 n+1 的 dp 数组来保存计算结果。

### 省空间优化

1. memo，更好
2. 只记录前两值
