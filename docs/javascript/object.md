# 对象

## 定义

* `{ key: value }` {任意字符串: 任意值}
* 对象是属性的容器，其中每个属性都拥有名字和值。属性名可以是包括空字符串在内的任意字符串，属性值可以是任意值
* 一个由空格或连字符，或者以数字开头,或者保留字的属性名，就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用
![](http://wx4.sinaimg.cn/large/4e5d3ea7ly1fcj043tniuj206u06h3yj.jpg)
> 从数据结构的角度来说，映射（Map）跟原本的 Object 非常相似，都是 Key/Value 的键值对结构。但是 Object 有一个让人非常不爽的限制：key 必须是字符串或数字。


## 枚举

* `Object.keys()`与`for-in`的输出顺序一致（会被重新排序），主要区别是后者还会返回原型链中属性（往往不是我们需要的）
```js
for (myvar in obj) {
  // 需确定是对象成员，还是来自原型链
  if (obj.hasOwnProperty(myvar)) {
    ...
  }
}

```
* `Object.getOwnPropertyNames()`与`Object.keys()`的区别是，后者仅可以输出可枚举属性(哪些算不可枚举属性，继承的内置方法fuction，注意前面方法中的own)
简单说是 in 和 own 的区分，前者能取到继承属性

## 调用

* 方法调用，`this`指向所属对象
* 函数调用，`this`指向全局对象(事实上是上面的特例)，嵌套函数时，内部函数的`this` 依然指向全局对象（这是一个设计错误，理应指向外部函数的`this`），解决办法是在外部函数写`var that = this`，所以遇上嵌套函数就需要解决`this`指向，遇上是否需要解决`this`指向就看是不是嵌套函数
* 构造器调用，`this`指向`new`出来的新对象

* 函数总是返回一个值，如果没有指定返回值，则返回`undefined`
  如果函数调用时在前面加上了`new`前缀，且返回值不是一个对象，则返回`this`(该新对象)

### apply 和 call
* apply 这个方法常常被用于转换参数形式以调用函数
  - 每个函数都拥有`this`变量和`arguments`变量，正常来说，调用函数的时候要传递一些逗号分隔的参数，`this` 的取值是由调用的上下文决定的。
  - `apply`方法可以直接显式的确定函数运行时的`this`和`arguments`
* 函数的`call`和`apply`在使用上的最大差异便是一个在首参数后传入各个参数，一个是在首参数后传入一个包含所有参数的数组
* 可用于实现继承

### 创建绑定函数
`bind()`最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的`this`值。JavaScript 新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，希望方法中的`this` 是原来的对象。（比如在回调中传入这个方法。）如果不做特殊处理的话，一般会丢失原来的对象。从原来的函数和原来的对象创建一个绑定函数，则能很漂亮地解决这个问题：

`call apply bind`是相似的，`bind`是 ES5 增加的，即为函数调用精确绑定`this`

[实现 bind 方法，用于不支持ES5的浏览器](https://gist.github.com/cyio/bd17078f271eef9890d048d36ca4a0c4)

```js
// Credit to Douglas Crockford for this bind method
if (!Function.prototype.bind) { // 如果不存在 bind 方法
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") { // bind 方法的调用对象只能是函数，如果不是则抛出异常
      // closest thing possible to the ECMAScript 5 internal IsCallable function​
      throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call (arguments, 1), // 浅复制 bind 的参数，从第 2 个开始到结束 http://stackoverflow.com/a/26618338/5657916
      fToBind = this,
      fNOP = function () { // 新的空函数           
      },
      fBound = function () { // 要返回的函数，用 apply 方法绑定 this
        return fToBind.apply (this instanceof fNOP && oThis // 待返回函数与构造函数原型是否一致，oThis 参数是否存在
          ? this // 直接使用 bind 的调用对象
          : oThis, // 使用指定 this
          aArgs.concat (Array.prototype.slice.call (arguments))); // 合并两个方法的参数
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP ();

    return fBound;
  };
}
```
[JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals | JavaScript is Sexy](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)

bind 借用函数，比如类数组借用数组方法
```js
var mike = {
  name: 'MIKE',
  say: function () {
    console.log(this.name)
  }
}

var joy = {
  name: 'JOY'
}

mike.say() // MIKE
mike.say.bind(joy)() // JOY，this 指向被改成 joy
```

只使用传参功能
```js
var allNumbers = [23, 11, 34, 56];
// Using the apply () method, we can pass the array of numbers:​
console.log(Math.max.apply(null, allNumbers)); // 56
```

## 深拷贝
ES5 递归
ES6 `Object.assign`和`...`扩展符不是深拷贝，如果属性里有对象或数组，拷贝的是引用

`Object.assign`将多个对象复制到目标对象，与其说是复制，更像合并，如果有相同 key， 后边会覆盖前边
```JS
var obj1 = {a: 1}
var obj2 = {a: 3, b: 1}
var merge = Object.assign({}, obj1, obj2)
console.log(merge)
```

纯数据对象的话可以用JSON的接口，MDN 也是这个
```js
let obj_snapshot = JSON.parse(JSON.stringify(obj))
```

可以用lodash的cloneDeep函数。
狠一点就上immutable，facebook官方出的，所有数据都是不可变，不需要深拷贝之类的操作

### Object.assign

参数：(target, source, ...)
注意会改变 target
如果只是想合并 `let merged = Object.assign({}, a, b)`

## 字典
尽量用 Map，其次用
```
const dict = Object.create(null)
```

[Single objects • JavaScript for impatient programmers](https://exploringjs.com/impatient-js/ch_single-objects.html#the-pitfalls-of-using-an-object-as-a-dictionary)

