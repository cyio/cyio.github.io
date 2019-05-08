# 函数

## 调用模式

- 方法调用模式
- 函数调用模式
- 构造器调用模式
- Apply 调用模式

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

## 防抖和节流 debounce/throttle

都是为了限制一定时间内执行频率，一般用于减少用户输入引起的函数调用次数

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
