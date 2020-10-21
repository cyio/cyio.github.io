# this
[toc]

## basic

- function 调用时，有隐式参数 this
- function 可以在调用时，改变 this，箭头函数不行，总是定义时 context 所指
- function 作为对象方法调用时，隐式传入对象作为 this

## this 继承

```js
{
  ...
  add: function() {},
  addAll: function addAll(pieces) {
    var self = this;
    _.each(pieces, function (piece) {
      self.add(piece);
    });
  },
  ...
}
```

> 在这里，你希望在内层函数里写的是`this.add(piece)`，不幸的是，内层函数并未从外层函数继承 this 的值。在内层函数里，this 会是 window 或 undefined，
> 临时变量 self 用来将外部的 this 值导入内部函数。（另一种方式是在内部函数上执行`.bind(this)`，两种方法都不甚美观。）

箭头函数内的 this 值继承自外围作用域

```js
// ES6
{
  ...
  addAll: function addAll(pieces) {
    _.each(pieces, piece => this.add(piece));
  },
  ...
}
```

> 在 ES6 的版本中，注意 addAll 方法从它的调用者处获取了 this 值，内部函数是一个箭头函数，所以它继承了外围作用域的 this 值。

结论：箭头函数和 function 要配合使用，无法完全弃用 function
[A different way of understanding `this` in JavaScript](http://2ality.com/2017/12/alternate-this.html)

[函数 · TypeScript中文网 · TypeScript——JavaScript的超集](https://www.tslang.cn/docs/handbook/functions.html)
参看 this和箭头函数 一节，有助理解
> this的值在函数被调用的时候才会指定
> 顶级的非方法式调用会将 this视为window

