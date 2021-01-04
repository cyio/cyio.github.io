# 继承

```js
  // 手写组合式继承

  // ES5 寄生组合式继承
  function Parent(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Parent.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Child(name, age, sex) {
    Parent.call(this, name, age)
    this.sex = sex
  }

  Child.prototype = Object.create(Parent.prototype) // 创建父类副本，替代创建父类实例，带来问题是，构造器指向了父类
  Child.prototype.constructor = Child // 修正

  let ch = new Child('jack', 12, 1)
  ch.say()
```


```js
  // ES5 原型链继承
  function Parent(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Parent.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Child(name, age, sex) {
//     Parent.call(this, name, age)
    this.sex = sex
  }

  Child.prototype = new Parent() // new 设置原型指向时，参数未知

//   Child.prototype = Object.create(Parent.prototype)
//   Child.prototype.constructor = Child

  let ch = new Child('jack', 12, 1)
  ch.say()
  // I am undefined
```

```js
  // 手写组合式继承

  // ES5 原型链 + 借用构造函数继承
  // 父类构造函数在设置原型指向 new 时冗余执行一次
  function Parent(name, age) {
    this.name = name
    this.age = age
    console.log('调用一次')
  }
  Parent.prototype.say = function() {
    console.log('I am ' + this.name)
  }

  function Child(name, age, sex) {
    Parent.call(this, name, age)
    this.sex = sex
  }

  Child.prototype = new Parent() // new 设置原型指向时，参数未知

//   Child.prototype = Object.create(Parent.prototype)
//   Child.prototype.constructor = Child

  let ch = new Child('jack', 12, 1)
  ch.say()
  // I am undefined
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

原型链实现继承的本质是重写原型对象

问题：
1. 包含引用类型值的原型属性会被所有实例共享
2. 不能向超类构造函数传参

## 原型式继承
Object.create()

本质是浅复制

## 寄生式继承
基于原型式继承，增加对象

参考《高级程序设计》


[Prototypal inheritance](https://javascript.info/prototype-inheritance)

```js
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
```
属性遮蔽、函数覆盖

