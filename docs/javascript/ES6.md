# ES6
[[toc]]

- 新特性：模块 | 类 | 解构赋值 | promise | 构造器 |Proxy | Reflect | 箭头函数 | 模板字符串
- 防止重复声明：ES6 不允许在同一个作用域内用 let 或 const 重复声明同名变量。这对于防止在不同的 js 库中存在重复声明的函数表达式十分有帮助。
- 不再需要仅为了声明变量，而使用立即执行函数以避免全局污染，用大括号配合`let/const`即可
- rest 参数，更便利访问函数参数

[Javascript - ES6 实用技巧](https://github.com/TerryZ/js-develop-skill-summary/blob/master/javascript-es6.md)
[在 ES6 中 改良的 5 个 JavaScript “缺陷” - WEB 前端 - 伯乐在线](http://web.jobbole.com/86210/)

## var let const
var 的问题：变量全局化，变量提升，重复声明，重复赋值

let const 支持块级作用域

const 声明时必须赋值，不可重复声明

### let/var 全局声明有区别

var 存在 window 对象中，而 let 存在声明式环境中（看不到），不影响 window.xxx 的使用，但 var xxx 不行

```js
var mine = 4
window.mine
// 4
mine
// 4

let my = 3
window.my
// undefined
my
// 3

// var 变量提升
var myname = "apple"
function showName(){
  console.log(myname); // undefined
  if (0){
   var myname = "banana" // 声明在函数内提升，但赋值未进行
  }
  console.log(myname); // undefined
}
showName()
```
[块级作用域：var缺陷以及为什么要引入let和const | 浏览器工作原理与实践](https://blog.poetries.top/browser-working-principle/guide/part2/lesson09.html#_1-%25E5%258F%2598%25E9%2587%258F%25E5%25AE%25B9%25E6%2598%2593%25E5%259C%25A8%25E4%25B8%258D%25E8%25A2%25AB%25E5%25AF%259F%25E8%25A7%2589%25E7%259A%2584%25E6%2583%2585%25E5%2586%25B5%25E4%25B8%258B%25E8%25A2%25AB%25E8%25A6%2586%25E7%259B%2596%25E6%258E%2589)

tips:
- let 最好放在 block 最上面，防止过早访问引起抛错
- 显式地声明块级变量，建议把 let 与大括号放在一行

  ```js
  {
    let a = 3,
      b,
      c
  }
  ```

## Map

- 如果 key 是复杂数据类型，需要保存起来，以便 map 操作
    ```js
    let key = [1]

    map.get(key)
    map.delete(key)
    ```

## Set

- Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
- 包括 null 等，用来做去重时，添加的值可能需要做类型判断
- 特殊的对象，继承了对象的方法

## 类 class

- 简化构造函数创建
- `super`(调用父类构造函数)不是必要的，什么情况下写呢？

  如果在`contrustor`中要用`this[props]`

  表示继承的父类、可以传参、可以访问方法

```js
class Animal {
  constructor() {
    this.type = 'animal'
  }
  says(msg) {
    console.log(this.type, ' ', msg)
  }
}
let animal = new Animal()
animal.says('hello') // animal says hello
class Cat extends Animal {
  constructor() {
    super() // 下面使用了 this，如果不写 super 的话会，ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // super 不是必要的，什么情况下写呢？ 如果在 contrustor 中要用 this.props
    this.type = 'cat'
  }
}
let cat = new Cat()
cat.says('world')
```

## 模块

- 特征：
  1.  总是在严格模式下
  2.  有一个顶级域而不是全局域
  3.  能从其他模块导入绑定
  4.  能将绑定导出
- 为什么
  JS 就是把值指给变量，那么如何管理变量呢，函数有作用域，互相不能访问，要共享的话，只能上层（全局）定义变量
  模块能清晰定义如何共享，哪些可访问（模块所用域）

命名冲突时，用`as`关键字重命名模块
随时可以导入导出模块

- 引用时使用完整资源路径
- 默认 defer，可设置 async，inline scrpit 也可以

### 兼容性

- 微信 android 不支持，iOS 因为跟 safari 一样，所以支持
- IE 被放弃了，不支持
- UC android 不支持

[es module vue](https://codepen.io/cyio/pen/mjPzqJ)
[jspm.io - Native ES Modules CDN](https://jspm.io/)

### 导入导出

```js
import First from './First'
import Second from './Second'
;/..../
export { First, Second }

export { default as SomeClass } from './SomeClass'
export { someFunction } from './utils'
export { default as React } from 'react'
```

## 箭头函数

> 箭头函数要实现类似纯函数的效果，必须剔除外部状态。所以当你定义一个箭头函数，在普通函数里常见的this、arguments、caller是统统没有的。
> 没有自己的this，arguments，super或new.target， 没有prototype属性。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
> 引入箭头函数有两个方面的作用：更简短的函数并且不绑定this。


- 当使用箭头函数创建普通对象时，你总是需要将对象包裹在小括号里
- 没有`arguments`，可以使用`...args`
- 不要在最外层或多层嵌套环境下使用箭头函数，涉及 this 操作时，影响作用域识别

```js
// 为与你玩耍的每一个小狗创建一个新的空对象
var chewToys = puppies.map(puppy => {}) // 这样写会报Bug！
var chewToys = puppies.map(puppy => ({})) //

// 属性解构
['1', '22'].map(({'length': len}) => len)
// [1, 2]

['1', '22'].reduce((pre, {length}) => pre + length, 0)
// 3
```

- 箭头函数和普通函数的区别

  1. 箭头函数的 this 就是定义时所在的对象，而不是使用时所在的对象

  2. 箭头函数不能用作构造函数

  3. 箭头函数不能使用 arguments 对象，该对象不存在，但可以使用 rest 对象

- 函数表达式称为 lambda 函数，λ-calculus，演算的意思

```js
'use strict'
// 打印i=几，每隔500毫秒迭代，第一次打印需立刻执行
function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

async function test() {
  for (let i = 0; i < 10; i++) {
    await sleep(500)
    console.log(`i=${i}`)
  }
}

test().then(() => console.log('done'))

// 类版本，props 就是函数参数
class Sleep {
  constructor(props) {
    this.ms = props | 0
  }

  then(resolve, reject) {
    setTimeout(resolve, this.ms)
  }
}

await new Sleep(500)
await new Sleep()
```

class 实际上是函数

不会自动提升，因此使用前需先声明

constructor 只在实例化时被调用

使用 extends 关键字创建子类

与一般函数写法的比较

静态方法只能由未实例化的类调用，常用作工具函数

```js
class Name {}
function Name ()

let func = function(){}
let func = function func(){}

let clsName = class {}
let clsName = class clsName {}
```

### 什么时候不使用

1.  对象方法
2.  有动态上下文的回调

```js
var button = document.getElementById('press')
button.addEventListener('click', () => {
  console.log(this) // Window
})
button.addEventListener('click', function() {
  console.log(this) // button element
})
```

### 什么时候放心用

- this 继承 parent context
- 不关心 this

tips: 始终写上 return，方便增加语句、log

```js
let square = x => {
  console.log(x)
  return x * x
}
```

## 模板字面量

```js
var who = 'world'
var str = `Hello ${who}`
```

## for-of 循环

- 最早，for
- ES5，forEach
- ES6，for-of
  - 支持类数组，字符串，Set，Map
  - 相比于 forEach 支持搭配 break return
  - for-in 为普通对象设计，不适用数组
  - 遍历对象用 for-in，或 Object.keys()
  - `Array.from(obj.keys(), fn)` 转换类数组

```js
// 计算一些数字的均值
export function average(numbers = []) {
  let sum = 0
  for (let item of numbers) {
    sum += item
  }
  return sum / numbers.length
}

// 字符串拼接
var data = [1, 2, 3]

function fn() {
  let ret = ''
  for (let value of data) {
    ret += value
  }
  return ret
}

console.log(fn())
```

## 参数类型

ES6 不支持，用 flow，然后通过 babel plugin 移除

[javascript - Babel: Function parameter types in ES6 - Stack Overflow](https://stackoverflow.com/questions/35916921/babel-function-parameter-types-in-es6)


## symbol

表示独一无二的值，由函数`Symbol()`产生， 可用于对象属性的标识符

对象 key 允许 string or symbol 两种类型

执行`Symbol()`返回，总是 uniq 标识

使用场景：为其它来源的对象，安全的添加属性

不支持 new 调用

全局注册，用 for 查找
```
Symbol('a') === Symbol('a') // false
Symbol.for('a') === Symbol.for('a') // true
```
https://javascript.info/symbol

## 尾调用优化

尾调用，定义：指某个函数的最后一步是调用另一个函数，不做其他操作

优化：只保留内层函数的调用记录，在尾调用之后，程序不需要在堆栈中保留任何有关调用函数的信息

ES6+ 对引擎要求，原因：实现概率 + 性能

仅严格模式可用

堆栈空间要求从 O(n) 减少到 O(1)

[JS尾调用优化](https://ifront.net/article/89421bc6cc90f43fbc27117674d9ea1e)
[什么是尾递归](https://stackoverflow.com/a/33930)

## 临时性死区
```javascript
let x = "outer value";

(function() {
  // 隐式提升 let x
  // Start TDZ for x.
  console.log(x); // 由于内部声明提升，优先访问内部定义。这里提升引用不存在
  let x = "inner value"; // Declaration ends TDZ for x. 
}());
```

[javascript - What is the temporal dead zone? - Stack Overflow](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone)
[20220113-暂时性死区 - 知乎](https://zhuanlan.zhihu.com/p/554566105)

## 可选链语法

在不确定一个对象是否存在的情况下，安全地访问该对象的属性或方法

Node v14及以上支持
Chromium 80及以上

electron v11.3  = node 14 + Chromium 87