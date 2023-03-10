# 闭包
[[toc]]

> 函数闭包、词法闭包

## 通用语言定义

函数的实例 instance of function

实现上，一个保存**函数**及其**环境**的记录。环境包括自由变量（在函数内部访问环境）和本地变量的映射，创建时即确定。与一般函数区别，在对自由变量的访问。

词法环境，是作用域内所有绑定变量的集合

[Closure (computer programming) - Wikipedia](https://en.wikipedia.org/wiki/Closure_(computer_programming))

## 示例
```js
function makeCounter() {
  let count = 0
  function push() {
    count++
    return count
  }
  return push
}

let x = makeCounter()
x()
x()
x() // 3
```

## JS 中定义

简单说，内部函数能访问外部函数作用域
	- 环境记忆、继续可访问，即使外部函数执行完
	- 函数内部对外部环境来说不可见

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

```

```js
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

```js
// #3
var a = [];
// const fn = (i) => { // lint 会避免同名
//    return () => console.log(i)
// }
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i); // 定义时 capture 的是全局的 i，而 i 是变量，函数执行时 for 运算完成，i 是 10
  };
  // a[i] = fn(i)
}

i = 7
a[6](); // 使用闭包后，返回的函数，直接访问参数 6，而不再是 i
console.log(i)
```

[破解前端面试（80% 应聘者不及格系列）：从 闭包说起](https://zhuanlan.zhihu.com/p/25855075?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

## 应用场景

- 封装变量：使用闭包可以实现变量私有化，避免变量污染全局空间。比如，一个计数器的实现可以使用闭包，使得计数器的值在函数外部无法被修改。
- 回调函数：在异步编程中，回调函数是非常常见的场景。使用闭包可以保存回调函数中的局部变量，确保在回调函数被调用时，局部变量的值不会被释放。
- 为节点循环绑定事件：在循环中为节点绑定事件时，常常需要使用闭包来保存循环变量的值，以避免事件处理函数中使用到错误的变量值。
- react hooks return fn

## 闭包引起的内存问题

-   闭包会常驻内存，会增大内存使用量，因此需要避免滥用闭包，否则会造成内存泄漏。在退出函数之前，应该将不使用的局部变量全部删除。
-   闭包内部可以访问上级作用域，而如果闭包又是异步执行的话，一定要清楚上级作用域都发生了什么，否则代码难以维护。
-   闭包会在父函数外部，改变父函数内部变量的值，如果不清楚闭包的使用规则，就容易导致程序出现难以预料的错误。

1. 闭包会引起内存泄露？

先问，为什么我们要使用闭包？一种场景是我们主动把变量封闭在闭包中，以便后续调用，这种做法与把变量放到全局作用域对内存的影响是一致的。（所以，不一定）

2. 什么情况下容易出现内存泄漏？

闭包作用域中包含着一些 DOM 节点（对象），由于垃圾回收机制的设计问题，如果对象之间形成循环引用，那么这些对象便无法回收（即使 DOM 已移除）。

3. 如何解决呢？

只需要把循环引用中的变量设为 null，切断引用连接即可。


对象、函数相互持有
[js循环引用引起的内存泄漏示例 - 简书](https://www.jianshu.com/p/a484ceb251ff)


## 延伸

> 闭包是一个函数与其所在环境的结合
> In JavaScript, a closure is created every time a function is created. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. [[0]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

函数创建时确定

> 规定了语法分析器解析嵌套函数内的变量时，向其外部作用域查找变量定义。
> 闭包的核心就是内部函数可以引用外部函数的参数和变量，通过返回函数来扩大函数的作用域，
> 有什么用呢，在函数外部引用函数内部变量，可以通过闭包实现。闭包的用处往往是在模块封装的时候。可以将模块内部公有部分暴露出来

> 避免在循环中创建函数，它可能只会带来无谓的计算，还会混淆。

[Variable scope, closure](https://javascript.info/closure)
[A re-introduction to JavaScript (JS tutorial) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
[高赞答案，解释、使用场景最清晰 function - How do JavaScript closures work? - Stack Overflow](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

hold

close over 遮盖、封闭

什么是词法环境：环境记录（变量、参数）和引用记录（作用域链）

[[词法环境]]