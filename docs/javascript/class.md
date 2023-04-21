# class

## ES6 中 class 实现原理

在 ES6 中，class 是一种语法糖，它本质上是基于原型和构造函数的实现方式。当我们使用 class 关键字定义一个类时，实际上是在内部使用了 Object.defineProperty() 方法将类中的方法和属性绑定到原型和实例上。

例如，下面是一个使用 class 定义的简单示例：

```
class Person {
  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person('John');
john.sayHello(); // 输出 "Hello, my name is John"
```

在这个例子中，我们定义了一个名为 Person 的类，它有一个构造函数和一个实例方法 sayHello。当我们使用 new 关键字创建一个 Person 的实例时，会自动调用构造函数来初始化实例。而实例方法 sayHello 则被绑定到了 Person 类的原型上，所以所有 Person 的实例都可以访问该方法。

总之，ES6 中的 class 是一种更加直观和易读的定义类的方式，它的本质还是基于原型和构造函数的实现方式。

## super

子类没有写 constructor，会隐式继承超类
```
  constructor(...args) {
    super(...args);
  }
```
[Class inheritance](https://javascript.info/class-inheritance)

## 框架应用

React 和 Vue 的最新版本并没有完全放弃类，而是提供了更加灵活的组件定义方式，同时支持类和函数两种方式。

在 React 16.8 版本中，引入了 Hooks API，使得开发者可以在不使用类的情况下定义组件。Hooks API 提供了一些新的钩子函数，如 useState、useEffect、useContext 等，可以帮助开发者更加方便地管理组件的状态和生命周期。使用 Hooks 的方式可以使得组件代码更加清晰和易于维护，同时也避免了一些类的缺点，如继承和 this 绑定的问题。

在 Vue 3.0 版本中，也增加了对函数式组件的支持。函数式组件是一种更加简单和易于理解的组件定义方式，它不需要像类组件那样继承和实例化，而是直接返回一个渲染函数。这使得组件的代码更加清晰和易于维护，同时也可以提高组件的性能。

总之，React 和 Vue 并没有完全放弃类，而是提供了更加灵活的组件定义方式，使得开发者可以根据项目的实际需求选择合适的方式来定义组件。