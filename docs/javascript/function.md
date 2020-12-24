# 函数
[[toc]]

## 调用模式

- 方法调用模式
- 函数调用模式
- 构造器调用模式

```js
// 定义一个对象
var myObject = {
  value: 0,
  // 函数作为属性时称之为方法
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1
  }
}

// 函数以方法形式调用时，this指向所属对象
myObject.increment()
document.writeln(myObject.value)

var add = function(a, b) {
  return a + b
}

// 定义一个double方法（属性）
myObject.double = function() {
  // 解决方法
  var that = this
  // 定义一个内部函数，并访问外部函数的属性
  var helper = function() {
    that.value = add(that.value, that.value)
  }
  //以函数的形式调用helper时，this指向全局对象
  helper()
}

//每运行一次value翻倍
myObject.double()
document.writeln(myObject.value)
```

- 未知参数名，只知道位置

```js
function tmp(...args) {
  console.log(args[args.length - 1])
}

tmp(1, 2)
```

## this 指向

- 方法调用，`this`指向所属对象
- 函数调用，`this`指向全局对象(事实上是上面的特例)

    嵌套函数时，内部函数的`this` 依然指向全局对象（这是一个设计错误，理应指向外部函数的`this`），解决办法是在外部函数写`var that = this`，所以遇上嵌套函数就需要解决`this`指向，遇上是否需要解决`this`指向就看是不是嵌套函数

- 构造器调用，`this`指向`new`出来的新对象（注意不是新函数）

- 函数总是返回一个值，如果没有指定返回值，则返回`undefined`
  如果函数调用时在前面加上了`new`前缀，且返回值不是一个对象，则返回`this`(该新对象)

### apply 和 call

- apply 这个方法常常被用于转换参数形式以调用函数
  - 每个函数都拥有`this`变量和`arguments`变量，正常来说，调用函数的时候要传递一些逗号分隔的参数，`this` 的取值是由调用的上下文决定的。
  - `apply`方法可以直接显式的确定函数运行时的`this`和`arguments`
- 函数的`call`和`apply`在使用上的最大差异便是一个在首参数后传入各个参数，一个是在首参数后传入一个包含所有参数的数组
- 可用于实现继承

```js
var allNumbers = [23, 11, 34, 56]
// Using the apply () method, we can pass the array of numbers:​
console.log(Math.max.apply(null, allNumbers)) // 56
// or es6
console.log(Math.max(...allNumbers))
```

### bind

`call apply bind`是相似的，`bind`是 ES5 增加的，可为函数调用固定`this`或参数

不同点在于，bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数

[实现 bind 方法，用于不支持 ES5 的浏览器](https://gist.github.com/cyio/bd17078f271eef9890d048d36ca4a0c4)
[Function binding](https://javascript.info/bind)

```js
// Credit to Douglas Crockford for this bind method
if (!Function.prototype.bind) {
  // 如果不存在 bind 方法
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // bind 方法的调用对象只能是函数，如果不是则抛出异常
      // closest thing possible to the ECMAScript 5 internal IsCallable function​
      throw new TypeError(
        'Function.prototype.bind - what is trying to be bound is not callable'
      )
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), // 浅复制 bind 的参数，从第 2 个开始到结束 http://stackoverflow.com/a/26618338/5657916
      fToBind = this,
      fNOP = function() {}, // no operation 无操作函数
      fBound = function() {
        // 要返回的函数，用 apply 方法绑定 this
        return fToBind.apply(
          this instanceof fNOP && oThis // 待返回函数与构造函数原型是否一致，oThis 参数是否存在
            ? this // 直接使用 bind 的调用对象
            : oThis, // 使用指定 this
          aArgs.concat(Array.prototype.slice.call(arguments))
        ) // 合并两个方法的参数
      } // var end

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()

    return fBound
  }
}
```

[JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals | JavaScript is Sexy](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)

bind 借用函数，比如类数组借用数组方法

```js
var mike = {
  name: 'MIKE',
  say: function() {
    console.log(this.name)
  }
}

var joy = {
  name: 'JOY'
}

mike.say() // MIKE
mike.say.bind(joy)() // JOY，this 指向被改成 joy
```
## 防抖和节流 dt
> debounce/throttle

```
50ms
1 - 10ms - 2 - 10ms - 3 - 10ms - 4 - 10ms - 5 - 10ms - 6
debounce ---- 6 //  1 执行后不再点击(空闲)，执行 6，否则会延迟
throttle 1 -- 6 //  1 执行后的后续点击，不影响 6 的执行
```

| 异同         | debounce | throttle |
|--------------|----------|----------|
| 用途         | 延迟、等待     | 过滤     |
| 立刻执行一次 | 否       | 是       |

- 都是为了限制一定时间内执行频率，一般用于减少用户输入引起的函数调用次数
- 从用途上思考，是要延迟、还是过滤
- debounce 一般是用户输入，throttle 一般如 scroll 等浏览器事件
- `_.debounce(fn, true) `过滤意外点击，空闲 m 秒才执行一次，而 throttle 后续事件还是会执行，不会等空闲，而是保证一定频率，m 秒内不超过 n 次
- 提交按钮点击，希望过滤掉误点(短时间内几次)，只执行一次，两个方法都能通过配置参数满足，但不准确符合，建议用一个开始标记解决。只有特定场景有明显区别，比如一直触发，是否需要执行
- throttle 无论触发多频繁，都按照设定频率执行，resize

拿这个例子，各点两次，观察区别 [Underscore.js throttle vs debounce example - JSFiddle - Code Playground](https://jsfiddle.net/missinglink/19e2r2we/)

[js节流与防抖，防止重复提交、防止频繁重复点击_web_xyk的专栏-CSDN博客](https://blog.csdn.net/web_xyk/article/details/80165824)

[lodash's debounce throttle different when submit button click](https://codepen.io/cyio/pen/VwaROLG?editors=1111)

[Debounce vs Throttle: Definitive Visual Guide | Redd Developer](https://redd.one/blog/debounce-vs-throttle)

react hook 中应用，注意不能在 hook 外使用，每次渲染会重生成
[How to Use Debounce and Throttle in React and Abstract them into Hooks](https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/)

1. 函数防抖是只有足够的空闲时间，才执行一次代码
   > bounce 是弹跳抖的意思，debounce 去抖动，平稳

函数防抖的要点，也是需要一个`setTimeout`来辅助实现。延迟执行需要跑的代码。
如果方法多次触发，则把上次记录的延迟执行代码用`clearTimeout`清掉，重新开始。

```js
let timer = false
document.body.onscroll = function() {
  clearTimeout(timer) // 1. 频繁触发则取消 2. 当滚动停止超过 300 MS，即没有新的触发，不清除定时器，预约代码得以执行

  timer = setTimeout(() => {
    console.log('函数防抖', +new Date())
  }, 300)
}
```

2. 函数节流是限制一定时间内最大执行次数

   > throat 喉咙

   > 注意，在满足条件后使用，而不是之前，比如滚动时使用，会导致条件满足延迟

   > 使用场景，如监听滚动计算位置，用户拖拽

函数节流的要点是，声明一个变量当标志位，记录当前代码是否在执行。
如果空闲，则可以正常触发方法执行。
如果代码正在执行，则取消这次方法执行，直接 return。

```js
var canScroll = true
document.getElementById('throttle').onScroll = function() {
  if (!canScroll) {
    return
  }
  console.log('立刻执行一次')
  canScroll = false
  setTimeout(function() {
    console.log('函数节流')
    canScroll = true
  }, 300)
}
```

[浅谈 Underscore.js 中 throttle 和 debounce 的差异 - Coding 博客](https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs)

[通过例子来对比 Debouncing,Throttling，requestAnimationFrame | CSS-Tricks - 众成翻译](https://www.zcfy.cc/article/debouncing-and-throttling-explained-through-examples-css-tricks)

[JavaScript 专题之跟着 underscore 学节流 · Issue #26 · mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/26)

```js
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
const g = n => n + 1
const f = n => n * 2
const h = pipe(
  g,
  f
)
h(20) // 42
```

## 构造函数

作用：生成对象（自定义类型，在当于 JAVA 中的类），动态地声明大量具有类似属性和方法的Javascript对象

所有 JS 函数者有 `prototype`，指向构建函数的原型对象

所有字面量声明的对象，都有`__proto__`

箭头函数，不能作为构造函数，没有`prototype`属性

Object 的原型是 null

Array,String,Date,RegExp 等二级类型，继承自 Object

### 继承
组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

```
Function => Class
new => extends

// 解决子类向父类传递参数问题
parent.call()

super
```
