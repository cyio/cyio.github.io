# ES6

- 新特性：模块|类|解构赋值|promise|构造器|Proxy|Reflect|箭头函数|模板字符串
- ES6 不允许在同一个作用域内用 let 或 const 重复声明同名变量。这对于防止在不同的 js 库中存在重复声明的函数表达式十分有帮助。
- 不再需要使用立即执行函数以避免全局污染，用大括号配合`let/const`即可
- rest 参数，更便利访问函数参数
- let/var 全局声明有区别，var 存在 window 对象中，而 let 存在声明式环境中（看不到），不影响 window.xxx 的使用，但 var xxx 不行
- let 最好放在 block 最上面，防止过早访问引起抛错
- 显式地声明块级变量，建议把 let 与大括号放在一行

  ```js
  {
    let a = 3,
      b,
      c
  }
  ```

[Javascript - ES6 实用技巧](https://github.com/TerryZ/js-develop-skill-summary/blob/master/javascript-es6.md)
[在 ES6 中 改良的 5 个 JavaScript “缺陷” - WEB 前端 - 伯乐在线](http://web.jobbole.com/86210/)

- 实现模板字符串功能

```js
// 1. 正则匹配出 key，然后字符串替换 2. 字符串可用点号分割成数组 3. shift 出来依次供对象访问
function render(template, context) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    for (let k of key.split('.')) {
      context[key]
    }
    key = key.split('.')
    let result = context
    while (key.length > 0) {
      result = result[key.shift()]
    }
    return result
  })
}
const template = '{{name}}很厉name害，才{{age}}岁，身高{{detail.height}}'
const context = { name: 'jawil', age: '15', detail: { height: '170' } }
console.log(render(template, context))
```

## map 映射

- 如果 key 是复杂数据类型，如`[1]`，无法直接查改删，可以同名。需要遍历或转换为数组

## 类 class

- 简化构造函数创建
- `super`(调用父类构造函数)不是必要的，什么情况下写呢？ 如果在`contrustor`中要用`this[props]`

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
    super() // 下面使用了 this，如果不写 super 的会，ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
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
  2.  有一个项级域而不是全局域
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

微信 android 不支持，iOS 因为跟 safari 一样，所以支持
IE 被放弃了，不支持
UC android 不支持

[es module vue](https://codepen.io/cyio/pen/mjPzqJ)
[jspm.io - Native ES Modules CDN](https://jspm.io/)

### 导入导出

```js
import First from './First'
import Second from './Second'
/..../
export { First, Second }

export {default as SomeClass} from './SomeClass';
export {someFunction} from './utils';
export {default as React} from 'react';
```

## 箭头函数

- 当使用箭头函数创建普通对象时，你总是需要将对象包裹在小括号里
- 没有`arguments`，可以使用`...args`
- 自身没有 this

```js
// 为与你玩耍的每一个小狗创建一个新的空对象
var chewToys = puppies.map(puppy => {}) // 这样写会报Bug！
var chewToys = puppies.map(puppy => ({})) //
```

- 箭头函数和普通函数的区别

箭头函数的 this 就是定义时所在的对象，而不是使用时所在的对象

箭头函数不能用作构造函数，

箭头函数不能使用 arguments 对象，该对象不存在，但可以使用 rest 对象

- 函数表达式称为 lambda 函数，λ-calculus，演算的意思

```js
'use strict'
// 打印i=几，每隔500毫秒迭代，第一次打印需立刻执行
function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function test() {
  for (let i = 0; i < 10; i++) {
    await sleep(500);
    console.log(`i=${i}`);
  }
}

test().then(() => console.log('done'));

// 类版本，props 就是函数参数
class Sleep {
	constructor(props){
		this.ms = props | 0
	}

	then(resolve, reject) {
		setTimeout(resolve, this.ms)
	}
}

await new Sleep(500)
await new Sleep
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

## 模板字面量

- 不支持纯字符串

```js
var who = 'world'
var str = `Hello ${who}`
```

## for-of 循环

- 20 年前，for i++
- ES5， forEach
- ES6， for-of
  - 支持类数组，字符串，Set，Map
  - 相比于 forEach 支持搭配 break return
  - for-in 为普通对象设计，不适用数组
  - 遍历对象用 for-in，或 Object.keys()

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

## Set

- Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
- 包括 null 等，用来做去重时，添加的值可能需要做类型判断
- 特殊的对象，继承了对象的方法
