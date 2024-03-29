---
title: 概念
---

# 概念

- 特权方法：通常用于实现对象的封装和控制访问权限，只允许特定方法修改其私有变量

## 数据类型

JavaScript有七种数据类型，分为两类：

1.  原始类型（Primitive Types）：包括数字（Number）、字符串（String）、布尔值（Boolean）、空值（Null）、未定义值（Undefined）和Symbol（ES6新增）。
    
2.  对象类型（Object Types）：包括对象（Object）、数组（Array）、函数（Function）、日期（Date）、正则表达式（RegExp）等。

## 逻辑值

- `&&` `||`只在必要情况下才会执行右边的值；可用于检测值左测值的有效性
- 运算符优先级排序：`‖ < && < 比较 < 其它`

- 闭包使用场景
  无论什么地方，只要临时需要一些变量，就可以使用私有作用域，如：

```js
function outputNumbers(x) {
  ;(function() {
    // i作为临时变量
    for (var i = 0; i < x; i++) {
      console.log(i)
    }
  })()
}
outputNumbers(4) //0123
```

- JS 里的数值都是用浮点数表示的，所以常用到取整的方法 `parseInt`

- i++ 和 ++i 比较

  - 都是对变量自增(原值增 1)
  - 区别是返回的值不同，i++ 是旧值，即加之前的，++i 是新值，即加之后的值（记忆，变量在前为旧值，在后为新值）

  ```js
  a = 5
  b = 5
  c = ++a
  d = b++
  // abcd 分别是多少
  // 6, 6, 6, 5
  ```

[operators - javascript i++ vs ++i - Stack Overflow](http://stackoverflow.com/questions/6867876/javascript-i-vs-i)

- 关于转换规则

  - JavaScript 会将`0、NaN`和空字符串`''`视为 false，其余值视为 true
  - 使用三字符串运算符，防止意外类型转换的发生

## 函数式编程

核心思想：面向值编程

- 高阶性：函数可作为参数，返回值
- 不可变性
- 回调函数是指令式的，Promise 是函数式的

> 即便 then() 这个方法似乎隐含一些关于操作顺序 – 事实上这只是它的副作用 – 你可以把它想象成叫做 unwrap。Promise 是一个未知值的容器，
> 那么 then 的工作就是从 promise 中把值取出来并交给另一个函数: 它其实是 monad 的 bind 函数。其实上面的代码里没有任何地方提及什么
> 时候这个值是存在的，或事情是按照什么顺序发生的，它只是表达了一些依赖关系在里面: 你必须首先知道那个值是什么，然后才能够把它打印出来。
> 程序的顺序是从值的依赖关系中衍生出来的。

[回调函数是指令式的，Promise 是函数式的：Node 错失的最大机会 | Thinking in Crowd / 鹄思乱想](http://www.thinkingincrowd.me/2013/11/13/callbacks-are-imperative/)

## 声明提升

- 变量仅声明提升（赋值不提升）
- 函数定义提升
- 函数表达式定义不提升 （同变量）

```js
console.log(a)
// VM365:2 Uncaught ReferenceError: a is not defined
```

```js
console.log(a)
var a = 'A'
// VM390:2 undefined
```

分析：
第一个输出`引用错误`，a 未定义

每二个输出`undefined`，a 声明提升，但未赋值，相当于`var a`

```js
ease();
var ease = function(){console.log('ease')}
VM234:2 Uncaught TypeError: ease is not a function(…)(anonymous function) @ VM234:2InjectedScript._evaluateOn @ VM221:875InjectedScript._evaluateAndWrap @ VM221:808InjectedScript.evaluate @ VM221:664
var ease = function(){console.log('try')}
ease();
VM250:3 try
```

分析：
输出`类型错误，ease 不是函数`，var 开头的函数赋值并无特殊之处，同样是声明提升，报错 ease 不是函数。

## IIFE

中文：自执行函数表达式

就是把一个函数的定义放在括号里，然后再紧跟着一个括号。如果那个函数需要参数，就把参数放到第二个括号里，这个函数会立即执行，让这个函数返回一个对象，就是揭示模块模式，模仿块级作用域

```js
;(function(window, document, undefined) {
  // window, document, undefined 成了局部变量，保证不会被意外修改
  // 这里加上 undefined，是因为在老版本JS中，undefined 可以被修改，是个过去时的历史问题
})(window, document)

// 最小化
;(function(a, b, c) {
  console.log(a) // Object window
})(window, document)

// 加上jQuery
;(function($, window, document, undefined) {
  // use $ to refer to jQuery
  // $(document).addClass('test');
})(jQuery, window, document)

// 多环境兼容，相当于 root 是 window/global 的 alias
;(function(root) {})(this)

// 完整，兼容 Node UMD 和 require.js
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof exports === 'object') {
    module.exports = factory
  } else {
    root.MYMODULE = factory()
  }
})(this, function() {
  // 在这里写自己的代码
})

// ES6 ? 现在可以这么写
block: {
  const num = Math.random()
  console.log(num)
  if (num <= 0.5) break block
  console.log('Number is greater than 0.5')
}
console.log('Done!')
```

[What (function (window, document, undefined) {})(window, document); really means @toddmotto](http://toddmotto.com/what-function-window-document-undefined-iife-really-means/)
[JS things I never knew existed](https://air.ghost.io/js-things-i-never-knew-existed/)

替代：
– ES modules
– Blocks with const/let
– A for loop with const/let (creates a new scope for each iteration—no manual scope creation needed)

## 作用域

作用域控制着变量与参数的可见性和生命周期（减少命名冲突，提供自动内存管理）。
作用域的好处是内部函数可以访问定义它们的外部函数的参数和变量（除了 this 和 arguments）。

## 迭代

- continue 应用于 while 或 for 内，结束本次迭代，继续下一次迭代，应用场景是需跳过某个条件
  break 终止迭代

```js
i = 0
n = 0
while (i < 5) {
  i++
  if (i === 3) {
    continue
  }
  n += i
}
// 1 + 2 + 4 + 5
console.log(n) // 12
```

## 模块

### 什么是模块？

提供接口却隐藏状态与实现的函数或对象

### 模块有什么用？

用函数产生模块，摒弃全局变量的使用（只命名一个全局变量，将它作为应用容器）。

### 模块的形式？

- 一个定义了私有变量和函数的的函数
- 利用闭包创建可以访问私有变量和函数的特权函数
- 最后返回这个特权函数，或者把它们保存到一个可访问到的地方

进一步理解：

> 真正的模块化，并不是文本意义上的，而是逻辑意义上的。一个模块应该像一个电路芯片，它有定义良好的输入和输出。实际上一种很好的模块化方法早已经存在，它的名字叫做“函数”。每一个函数都有明确的输入（参数）和输出（返回值），同一个文件里可以包含多个函数，所以你其实根本不需要把代码分开在多个文件或者目录里面，同样可以完成代码的模块化。我可以把代码全都写在同一个文件里，却仍然是非常模块化的代码。

## 私有变量

1. 在构造函数中定义特权方法（实例变量）

```js
function MyObject() {
  // 私有变量和私有函数
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  // 特权方法
  this.publicMethod = function() {
    privateVariable++
    return privateFunction()
  }
}
```

- 构造函数的缺点是针对每个实例都会创建同样一组新方法。用静态私有变量可以避免这个问题。

2. 静态私有变量

```js
;(function() {
  // 私有变量和私有函数
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  // 构造函数
  MyObject = function() {}

  //  公有/特权方法
  MyObject.prototype.publicMethod = function() {
    privateVariable++
    return privateFunction()
  }
})()
```

这个模式创建了一个私有作用域 ，并在其中封装了一个构造函数及相应的方法。

这里的 MyObject 没有用 var 声明，是一个全局变量。

这个模式与在构造函数中定义特权方法的主要区别：

- 私有变量和函数由实例共享
- 所有实例使用同一个函数，因为特权方法是在原型上定义的
- 特权方法，作为一个闭包，总是保存着对包含作用域的引用。

## 构造函数

当任意一个普通函数用于创建一类对象时，它就被称作构造函数，或构造器。

特征：函数内部定义新对象，返回新对象

用处：共享原型、继承

`new` 就是创建新对象，并把构造函数的原型和作用域添加到新对象上。

## 严格模式的特性

- 变量使用前必须先声明
- 函数必须声明在所在作用域的顶层
- 对象属性名唯一
- 要求参数唯一，在函数内部改变`arguments`对象会报错

消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
原来的静默会报异常，如拼写错误
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的 Javascript 做好铺垫。

```js
// 'use strict';

let obj = {
  a: 1
}
for (key in obj) {
  // 启用严格模式后会报错
  console.log(key)
}

// 'use strict'

let o = {
  a: function() {
    var that = this
    a()
    function a() {
      console.log(this) // 值为 global，启用严格模式后，undefined
    }
  }
}
o.a()
```

## 什么时候用 switch

switch 的条件切换只能基于单一变量的值。但 if-else 的条件可以是任意表达式。

一般来说，如果 if 和 else if 分支超过 3 个就可以考虑写成 switch。如果 switch 的分支超过 10 个就可以考虑写成 config，然后专门写一个函数根据 config 来做 mapping。如果需要进行的映射逻辑很复杂，但使用频率很高，可以考虑做一个专门的 rule engine 来处理这件事情， 或者是一门 DSL。


## 特殊布尔值

```js
Boolean(0) // false
Boolean(-1) // true
```

## 解释型语言 VS 编译语言

解释型语言 动态变量类型 隐式解析

[开发做了这么多年，你真的了解 JS 工作机制吗](https://www.infoq.cn/article/E2Vvaa-ZfIrMrjrxtdF9)

## 链式调用

JavaScript operator: Optional chaining operator (?.)
兼容性：不支持 IE，chrome 80 以上，慎用？

如果不确定 babel 是否能处理，可以去检查下
[Babel · The compiler for next generation JavaScript](https://babeljs.io/repl)

@vue/babel-preset-app 目前是接受 stage3 及以下

## 赋值问题
```js
var a = {n: 1}
var b = a
a.x = a = {n: 2}

console.log(a, a.x, b)
```

```js
let x = [1, 2, 3]; 
let y = x; 
let z = [4, 5, 6]; 
y[0] = 10; 
y = z; 
z[1] = 20; 
x[2] = z = 30; 
console.log(x, y, z)
```
混淆点：y 等于最终的 z 吗？不，已经生成了不同的 z

