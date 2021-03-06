# 递归

- 递归由基本部分和递归部分组成，基础部分直接定义（即不用递归就能求解），递归部分可以通过参数减小转换为基础部分，递归部分的每一次应用都更接近基础部分，最后一次应用基础部分。
- 一种循环形式，在函数定义内调用自身
- 相似的特征，归纳，递归步骤，常见嵌套循环，外循环递增，内循环递减
- 边界条件
  [谈谈递归](http://io.upyun.com/2016/04/05/recursion/)
- 递推公式 + 终止条件
- 去的过程叫 递，回来的过程叫 归，电影院查座位
  ```
  f(1) = 1
  f(n) = f(n - 1) + 1
  ```

## 斐波那契数列

> Fibonacci number

```js
function fib(n) {
  if (n === 1 || n === 2) return n - 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))
```

初始值是 0 1 或 1 1

```js
function fibo(n) {
  if (n <= 1) return n
  // else return fibo(n - 1)+ fibo(n - 2)
  let result
  let fst = 0
  let sed = 1
  let i = 2
  while (i <= n) {
    result = fst + sed
    fst = sed
    sed = result
    i++
  }
  return result
}
console.log(fibo(4))
```

## 递归解决数据按序请求问题

```js
var ids = [34112, 98325, 68125]
;(function sendRequest() {
  var id = ids.shift()
  if (!id) return console.log('finished')
  $.ajax({ url: '/get', data: { id } }).always(function() {
    //do sth.
    console.log('finished')
    sendRequest()
  })
})()
```

[我接触过的前端数据结构与算法-前端开发博客](http://caibaojian.com/data-structures-and-algorithms.html)

## 爬楼梯

走法分两种，即第一步走 1 个台阶或 2 个台阶

n 个台阶走法，等于走一步后两种走法剩余台阶之和

```
f(n) = f(n-1) + f(n-2)

f(2) = 2
f(1) = 1
f(0) = 0 // 无意义
```

代入较小的数枚举验证

> 函数调用会使用栈来保存临时变量。每调用一个函数，都会将临时变量封装 为栈帧压入内存栈，等函数执行完成返回时，才出栈。系统栈或者虚拟机栈空间一般都不大。如果
> 递归求解的数据规模很大，调用层次很深，一直压入栈，就会有堆栈溢出的风险。
> 出自：10 | 递归：如何用三行代码找到“最终推荐人”？

堆栈溢出：限制递归深度

重复计算：memo

转为非递归，本质并没有变

调试递归:

1.打印日志发现，递归值。

2.结合条件断点进行调试。

记忆化递归，时间由 O(n^2) 降到 O(n)

滚动数组，可以将空间由 O(n) 降到 O(1)


