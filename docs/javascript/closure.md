# 闭包

## 定义

闭包简单说，是指函数能访问所在(上下文)环境，而函数内部对外部环境来说不可见。（比较接近 MDN ，函数和它声明所在环境的结合）

> 规定了语法分析器解析嵌套函数内的变量时，向其外部作用域查找变量定义。
> 闭包的核心就是内部函数可以引用外部函数的参数和变量，通过返回函数来扩大函数的作用域，
> 有什么用呢，在函数外部引用函数内部变量，可以通过闭包实现。闭包的用处往往是在模块封装的时候。可以将模块内部公有部分暴露出来

> 避免在循环中创建函数，它可能只会带来无谓的计算，还会混淆。

```js
// 写循环时的迭代变量，期望是在循环里的函数中保持，实际访问的是其最终值，如`i < 3`，终值是 3，不是内部的最大值 2
// 本质问题：变量值在跨作用域时，没有保持
var i
for (i = 0; i < nodes.length; i += 1) {
  nodes[i].onclick = function(e) {
    alert(i) // 函数内，又一层作用域，取i要向上一层取，即i的计算终值
    // 要解决这个问题，即保持i，使用外移的高阶函数通过传参绑定i
  }
}

// 正确做法
var badd_the_handlers = function(nodes) {
  // 事件处理函数外移
  var helper = function(i) {
    return function(e) {
      alert(i)
    }
  }
  var i
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = helper(i)
  }
}

input = document.getElementsByTagName('input')
badd_the_handlers(input)

// 另一个例子
var funcs = []
var rt = function(i) {
  // 这里 i 是形式参数
  return function() {
    return i
  }
}
for (let i = 1; i < 10; i++) {
  // ES6 解决是把 var 简单换为 let
  // funcs.push(rt(i)) // ES5 通过函数参数传递，实现跨作用域保持
  funcs.push(function() {
    return i
  })
}

funcs.forEach(function(f) {
  console.log(f()) // 将在打印10数字10次
})
```

[破解前端面试（80% 应聘者不及格系列）：从 闭包说起](https://zhuanlan.zhihu.com/p/25855075?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

## 内存管理

1. 闭包会引起内存泄露？

先问，为什么我们要使用闭包？一种场景是我们主动把变量封闭在闭包中，以便后续调用，这种做法与把变量放到全局作用域对内存的影响是一致的。（所以，不一定）

2. 什么情况下容易出现内存泄漏？

闭包作用域中包含着一些 DOM 节点，由于垃圾回收机制的设计问题，如果对象之间形成循环引用，那么这些对象便无法回收。

3. 如何解决呢？

只需要把循环引用中的变量设为 null，切断引用连接即可。


对象、函数相互持有
[js循环引用引起的内存泄漏示例 - 简书](https://www.jianshu.com/p/a484ceb251ff)


