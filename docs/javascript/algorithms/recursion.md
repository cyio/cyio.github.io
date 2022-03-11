# 递归
[toc]

## 概念

![image.png](http://tva1.sinaimg.cn/large/4e5d3ea7ly1gywlbbqi6aj20im07uq39.jpg)
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
[509. 斐波那契数 - 力扣（LeetCode）](https://leetcode-cn.com/problems/fibonacci-number/)

初始值是 0 1 或 1 1

## 数据按序请求

数组+Finally+递归
```js
var ids = [34112, 98325, 68125]
;(function sendRequest() {
  var id = ids.shift()
  if (!id) return console.log('finished') // 终止条件
  $.ajax({ url: '/get', data: { id } }).always(function() {
    //do sth.
    console.log('finished')
    sendRequest() // 递归调用
  })
})()
```

[我接触过的前端数据结构与算法-前端开发博客](http://caibaojian.com/data-structures-and-algorithms.html)

## 爬楼梯

走法分两种，即第一步走 1 个台阶或 2 个台阶

n 个台阶走法，转化为减掉最后一步的台阶走法之和

```
f(n) = f(n-1) + f(n-2)

f(2) = 2
f(1) = 1
f(0) = 0 // 无意义
```

## 堆栈溢出
> 函数调用会使用栈来保存临时变量。每调用一个函数，都会将临时变量封装为栈帧压
> 入内存栈，等函数执行完成返回时，才出栈。系统栈或者虚拟机栈空间一般都不大。如果
> 递归求解的数据规模很大，调用层次很深，一直压入栈，就会有堆栈溢出的风险。
> 出自：10 | 递归：如何用三行代码找到“最终推荐人”？

应对：限制递归深度

## 优化
重复计算：memo

转为非递归，本质并没有变

记忆化递归，时间由 O(n^2) 降到 O(n)

滚动数组，可以将空间由 O(n) 降到 O(1)

## 调试

1. 打印日志发现，递归值。

2. 结合条件断点进行调试。

代入较小的数枚举验证

