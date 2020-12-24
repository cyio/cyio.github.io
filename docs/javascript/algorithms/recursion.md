# 递归

- 递归由基本部分和递归部分组成，基础部分直接定义（即不用递归就能求解），递归部分可以通过参数减小转换为基础部分，递归部分的每一次应用都更接近基础部分，最后一次应用基础部分。
- 一种循环形式，在函数定义内调用自身
- 相似的特征，归纳，递归步骤，常见嵌套循环，外循环递增，内循环递减
- 边界条件
  [谈谈递归](http://io.upyun.com/2016/04/05/recursion/)
- 递推公式 + 终止条件


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

