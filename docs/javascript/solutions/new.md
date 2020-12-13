# new

```js
var o = new Foo();

// 实际上
// 1. 创建空对象
var o = new Object();
// 2. 原型链继承
o.__proto__ = Foo.prototype;
// 3. 新对象作为 this，执行构造器函数
var res = Foo.call(o);
// 4. 返回处理
res instanceof Object ? res : o;
```

手写
```js
function myNew(fn) {
  let obj = new Object()
  obj.__proto__ = fn.prototype
  let fnRet = fn.call(obj)
  return fnRet instanceof Object ? fnRet : obj
}

function hi() {
  this.a = 'jack'
  // return { b: 'd'}
}

let r = myNew(hi)
console.log(r.a, r.b)
```

考察构造函数原型继承
```js
function Foo() {
  this.a = 'a'
  return { // 如果该函数没有返回对象，则返回this。
    b: 'b',
    c: 'c'
  }
}

Foo.prototype.a = 'x'
Foo.prototype.b = 'y'
Foo.prototype.c = 'z'

let foo = new Foo()
console.log(foo.a)
console.log(foo.b)
console.log(foo.c)
// print: undefined b c
```

```js
function Foo() {
  this.a = 'a' // 后执行，覆盖
}

Foo.prototype.a = 'x' // 先执行
Foo.prototype.b = 'y'
Foo.prototype.c = 'z'

let foo = new Foo()
console.log(foo.a)
console.log(foo.b)
console.log(foo.c)
// print: a y z
```
[继承与原型链 - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[new operator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
