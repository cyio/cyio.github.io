# 概念

* 什么是特权方法
特权方法就是有权访问私有变量和私有函数的公有方法
* 什么是单例
只有一个实例的对象

## 数据类型

ES6 共 7 个
* 6 种原始类型
Undefined Null Number String Symbol Boolean 
快记：UNSB 联合国傻逼 两个n
* object

#### symbol

ES6 新增，表示独一无二的值，由函数 Symbol() 产生
可用于对象属性的标识符

## 闭包
无论什么地方，只要临时需要一些变量，就可以使用私有作用域，如：
```js
function outputNumbers(x){
    (function(){
        // i作为临时变量
        for (var i = 0; i < x; i ++){ 
            console.log(i);
        }
    })()
}
outputNumbers(4); //0123
```

setTimeout("待执行函数", 毫秒)
* 最好赋给变量
* 取消执行 `clearTimeout(变量名)`

```js
var up = setTimeout(update(), 0)
function update() {
    console.log('updated')
}
clearTimeout(up)
```

两个等号 -> 相等
一个等号 -> 赋值

* JS里的数值都是用浮点数表示的，所以常用到取整的方法 `parseInt`

*  i++ 和 ++i 的区别
都是对变量自增(原值增1)，区别是返回的值不同，i++ 是旧值，即加之前的，++i是新值，即加之后的值（记忆，变量在前为旧值，在后为新值）
```js
a = 5;
b = 5;
c = ++a;
d = b++;
// abcd分别是多少
// 6, 6, 6, 5
```
[operators - javascript i++ vs ++i - Stack Overflow](http://stackoverflow.com/questions/6867876/javascript-i-vs-i)

* 关于转换规则
- JavaScript会将0、NaN和空字符串("")视为false，其余值视为true
- 使用三字符串运算符，防止意外类型转换的发生

## 函数式编程
面向值编程，相对于面向对象编程，而不是用函数编程

基于callback的函数返回的那些null值就是基于callback编程之所以艰
难的源头：基于callback的函数什么都不返回，所以难以把它们组装到
一起。没有返回值的函数，执行它仅仅是因为它的副作用 －－ 没有返回
值或副作用的函数就是个黑洞。所以用callback编程天生就是指令式的，
是编写以副作用为主的过程的执行顺序，而不是像函数应用那样把输入
映射到输出。是手工编排控制流，而不是通过定义值之间的关系来解决
问题。因此使编写正确的并发程序变得艰难。

而基于promise的函数与之相反，你总能把函数的结果当作一个与时
间无关的值。在调用基于callback的函数时，在你调用这个函数和它的
callback被调用之间要经过一段时间，而在这段时间里，程序中的任何
地方都找不到表示结果的值。

从基于callback或事件的函数中得到结果基本上就意味着你“要在正确
的时间正确的地点”出现。如果你是在事件已经被触发之后才把事件监听
器绑定上去，或者把callback放错了位置，那上帝也罩不了你，你只能
看着结果从眼前溜走。这对于用Node写HTTP服务器的人来说就像瘟
疫一样。如果你搞错了控制流，那你的程序就只能崩溃。

而Promises与之相反，它不关心时间或者顺序。无论你在promise被
resolve之前还是之后附上监听器，都没关系，你总能从中得到结果值。
因此，返回promises的函数马上就能给你一个表示结果的值，你可以
把它当作一等数据来用，也可以把它传给其它函数。不用等着callback，
也不会错过任何事件。只要你手中握有promise，你就能从中得到结果值。

## 运算法则
```
var a = 1
a += -1 && a *= 2
// 引用错误
// 解决办法是把后面括起来
```

## 节流 rate-limit 
用在事件处理函数上，不让 resize/mousemove/scroll 等事件触发得太快

throttle 以一定间隔多次执行
debounce 只执行一次

## 声明提升

三句话:
> 变量仅声明提升（赋值不提升）
> 函数定义提升
> 函数表达式定义不提升 （同变量）

```js
console.log(a)
VM365:2 Uncaught ReferenceError: a is not defined(…)(anonymous function) @ VM365:2InjectedScript._evaluateOn @ VM297:875InjectedScript._evaluateAndWrap @ VM297:808InjectedScript.evaluate @ VM297:664

console.log(a)
var a = 'A'
VM390:2 undefined
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
(function (window, document, undefined) {
  // window, document, undefined 成了局部变量，保证不会被意外修改
  // 这里加上 undefined，是因为在老版本JS中，undefined 可以被修改，是个过去时的历史问题
})(window, document);

// 最小化
(function (a, b, c) {
  console.log(a); // Object window
})(window, document);

// 加上jQuery 
(function ($, window, document, undefined) {
  // use $ to refer to jQuery
  // $(document).addClass('test');
})(jQuery, window, document);

// 多环境兼容，相当于 root 是 window/global 的 alias
(function (root) {

})(this);

// 完整，兼容 Node UMD 和 require.js
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.MYMODULE = factory();
	}
})(this, function () {
	// 在这里写自己的代码
});

// ES6 ? 现在可以这么写
block: {
	const num = Math.random();
	console.log(num);
	if (num <= 0.5) break block;
	console.log('Number is greater than 0.5');
}
console.log('Done!');
```

[What (function (window, document, undefined) {})(window, document); really means @toddmotto](http://toddmotto.com/what-function-window-document-undefined-iife-really-means/)
[JS things I never knew existed](https://air.ghost.io/js-things-i-never-knew-existed/)

## 作用域

作用域控制着变量与参数的可见性和生命周期（减少命名冲突，提供自动内存管理）。
作用域的好处是内部函数可以访问定义它们的外部函数的参数和变量（除了this和arguments）。

## 迭代

* continue 应用于 while 或 for 内，结束本次迭代，继续下一次迭代，应用场景是需跳过某个条件
break 终止迭代
```js
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i === 3) {
      continue;
   }
   n += i;
}
// 1 + 2 + 4 + 5
console.log(n) // 12
```

## 模块

### 什么是模块？ (需要纠正发音，不是 modal)
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
* 私有变量包括函数的参数、局部变量和在函数内部定义的其他函数。
* 特权方法是指有权访问私有变量和私有函数的公有方法。

1. 在构造函数中定义特权方法（实例变量）
```js
function MyObject () {
    // 私有变量和私有函数
    var privateVariable = 10;
    
    function privateFunction() {
        return false;
    }
    
    // 特权方法
    this.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
}
```

* 构造函数的缺点是针对每个实例都会创建同样一组新方法。用静态私有变量可以避免这个问题。

2. 静态私有变量
```js
(function () {
    // 私有变量和私有函数
    var privateVariable = 10;
    
    function privateFunction() {
        return false;
    }
    
    // 构造函数
    MyObject = function(){
    };
    
    //  公有/特权方法
    MyObject.prototype.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    };
})();
```
这个模式创建了一个私有作用域 ，并在其中封装了一个构造函数及相应的方法。
这里的MyObject没有用var声明，是一个全局变量。
这个模式与在构造函数中定义特权方法的主要区别：
- 私有变量和函数由实例共享
- 所有实例使用同一个函数，因为特权方法是在原型上定义的
- 特权方法，作为一个闭包，总是保存着对包含作用域的引用。

## 构造函数

当任意一个普通函数用于创建一类对象时，它就被称作构造函数，或构造器。一个函数要作为一个真正意义上的构造函数。constructor
特征：函数内部定义新对象，返回新对象
用处：共享原型、继承

`new`就是创建新对象，并把构造函数的原型和作用域添加到新对象上。

## 策略模式

将不变的部分和变化的部分分隔开来是每个设计模式的主题。
策略模式的目的是把算法的实现和使用进行分离。

至少两部分组成：
一是策略类，策略类封装了具体的算法，并负责具体的算法。
二是环境，类Context接受客户的请求，随后把请求委托给某一个策略类。
```js
// 计算工资
var strategies = {
  "S" : function(salary) {
    return salary * 4;
  },
  "A" : function(salary) {
    return salary * 5;
  },
  "B" : function(salary) {
    return salary * 6;
  }
}

var calculateBonus = function(level, salary) {
  return strategies[level](salary); // Context
}

console.log(calculateBonus('A', 5000));
console.log(calculateBonus('S', 5000));
```
