# 继承
[toc]

```js
  // ES5 原型链继承
  function Super(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Super.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Sub(name, age, sex) {
//     Super.call(this, name, age)
    this.sex = sex
  }

  Sub.prototype = new Super() // new 设置原型指向时，参数未知

//   Sub.prototype = Object.create(Super.prototype)
//   Sub.prototype.constructor = Sub

  let ch = new Sub('jack', 12, 1)
  ch.say() // say 方法在原型链上
  // I am undefined
```

```js
  // 手写组合式继承

  // ES5 原型链 + 借用构造函数继承
  // 父类构造函数在设置原型指向 new 时冗余执行一次
  function Super(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Super.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Sub(name, age, sex) {
    Super.call(this, name, age)
    this.sex = sex
  }

  Sub.prototype = new Super() // new 设置原型指向时，参数未知

//   Sub.prototype = Object.create(Super.prototype)
//   Sub.prototype.constructor = Sub

  let ch = new Sub('jack', 12, 1)
  ch.say()
  // I am undefined
```

```js
  // ES5 寄生组合式继承
  function Super(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Super.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Sub(name, age, sex) {
    Super.call(this, name, age)
    this.sex = sex
  }

  Sub.prototype = Object.create(Super.prototype) // 创建父类副本，替代创建父类实例，带来问题是，构造器指向了父类
  Sub.prototype.constructor = Sub // 修正

  let ch = new Sub('jack', 12, 1)
  ch.say()
```


## 原型链
构造函数、原型、实例的关系
1. 每一个构造函数都有一个原型对象 fn.prototype = object
2. 原型对象都包含一个指向构造函数的指针 obj.__proto__
3. 实例对象都包含一个指向原型对象的内部指针 obj.__proto__

```
实例对象 (内部指针 __proto__)
   --> 构造函数 (prototype)
    --> 原型对象
      --> chain
```

## 原型链继承
形式
```
Sub.prototype = new Super() // new 设置原型指向时，参数未知
```

原型链实现继承的本质是重写原型对象

问题：
1. 包含引用类型值的原型属性会被所有实例共享
2. 不能向超类构造函数传参

解决，借用构造器函数，在子类内部生成自己的属性，不同子类互不干扰

  Sub.prototype = new Super() // new 设置原型指向时，参数未知
## 原型式继承
Object.create()
相当于
```js
function object(o) {
  function F(){} // 临时构造器函数
  F.prototype = o
  return new F()
}
```

本质是浅复制，依然存在引用污染问题

## 寄生式继承
基于原型式继承，增强对象

参考《高级程序设计》


[Prototypal inheritance](https://javascript.info/prototype-inheritance)

```js
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
```
属性遮蔽、函数覆盖

[JS | 前端进阶之道](https://yuchengkai.cn/docs/frontend/#%25E7%25BB%25A7%25E6%2589%25BF)

## 组合继承
原型链 + 借用构造函数

最常用

## 寄生组合式继承
