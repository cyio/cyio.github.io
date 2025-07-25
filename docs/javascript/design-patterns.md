# JavaScript 设计模式

[设计模式目录：22种设计模式](https://refactoringguru.cn/design-patterns/catalog)

## 设计原则

软件模式的产生是为了固化不变的部分，让人类更专注于变化。在软件中大量使用模式（如框架软件）能推动软件发展，因为使用者可以将精力集中在无法用模式解决的应用上。

基于六大设计原则:
*   **单一职责原则 (Single Responsibility Principle - SRP)**：一个类或模块只负责一个功能领域中的相应职责。
*   **开放封闭原则 (Open-Closed Principle - OCP)**：对扩展开放，对修改封闭。
*   **里氏替换原则 (Liskov Substitution Principle - LSP)**：程序里的对象都应该可以被它的子类实例替换而不用更改程序。子类可以扩展父类的功能，但不能改变父类原有的功能。
*   **迪米特法则 (Law of Demeter - LoD)**：最少知识原则，直接交流、减少耦合。
*   **接口隔离原则 (Interface Segregation Principle - ISP)**：使用尽可能小的接口，多个专用的接口比一个通用接口更好。
*   **依赖倒置原则 (Dependency Inversion Principle - DIP)**：面向接口而非面向实现类，高层模块依赖于抽象而非细节，实现反向依赖。

## 设计模式概述

设计模式是程序员之间沟通的加速器，它提供了一套通用的语言来描述软件设计中的常见问题和解决方案。

### 设计模式的特点与分类

*   **目的：** 设计模式旨在解决特定问题，每个模式都有其优缺点，使用时需权衡。
*   **核心：** 控制逻辑集中化。
*   **分类：**
    *   **创建型模式 (Creational Patterns)**：目的在于创建对象，使创建过程配置化，提高灵活性。
    *   **结构型模式 (Structural Patterns)**：处理类或对象的组合，处理功能的组合关系。
    *   **行为型模式 (Behavioral Patterns)**：描述类和对象如何交互以及如何分配职责，实现数据和数据处理分离。

### 重点模式

以下是需要重点理解和记忆的模式：

*   **创建型：** 工厂方法、建造者、单例
*   **结构型：** 适配器、装饰器、享元、代理
*   **行为型：** 职责链、命令、观察者（发布订阅）、策略、模板方法

## 创建型模式

### 工厂方法模式

将创建实例的责任与使用实例的责任分开。使用者无需关心对象的具体生产过程。

*   **简单工厂：** 控制集中化，便于维护。
*   **工厂方法的缺点：** 不完全符合开闭原则。
*   **解决思路：** 工厂方法输出接口，提高灵活性。

### 单例模式

保证一个类只有一个实例，并提供一个全局访问点。

*   **作用：** 确保对象的唯一性、一致性，并优化性能。
*   **核心：** 配置核心化，配置集中管理。

### 建造者模式

将复杂对象的创建逻辑与最终表现分离。它允许你一步一步地创建一个复杂对象。

*   **特点：** 组合过程配置化，创建逻辑集中化。

## 结构型模式

### 适配器模式

通过对象包装，解决接口数据结构不匹配的问题，不改变已有接口，实现协同工作。

*   **使用场景：** 第三方系统对接，隔离外部变化。
*   **本质：** 控制逻辑集中化、变化逻辑集中化，将变化处理成使用不可变的数据。

### 代理模式

为对象提供一个代用品或占位符，以便控制对它的访问。

*   **优点：** 控制访问、延迟加载、权限控制等。
*   **分类：**
    *   **虚拟代理：** 将开销大的对象延迟到真正需要时创建（如图片预加载）。
    *   **保护代理：** 实现权限控制。

### 装饰器模式 (Decorator / Wrapper)

在不改变元对象的基础上，对对象进行包装和扩展。

*   **特点：** 将不同职责的代码装饰合并，不改变原有代码，符合开闭原则。
*   **应用：** 分离业务代码和数据统计代码 (Function.after)，分离表单校验和合并 (Function.before)。

### 享元模式 (Flyweight)

通过共享内部状态相同的对象，减少内存占用，是一种时间换空间的性能优化策略。适用于对象数量庞大且内部状态可共享的场景。

## 行为型模式

### 发布-订阅模式

一种消息传递机制，定义了一种**松耦合**的方式来处理对象之间的通信。发布者将消息发送给消息中心，由消息中心广播给所有订阅该消息的订阅者。

*   **特点：** 数据驱动，数据与逻辑分离，前因后果。
*   **应用：** 事件驱动编程、异步编程、消息队列、MVC、MVVM。

```js
class Event {
  constructor() {
    this.cacheList = new Map()
  }

  on(type, fn) {
    if (!this.cacheList.get(type)) {
      this.cacheList.set(type, [fn]) // 注意这里设置的值是数组
    } else {
      this.cacheList.get(type).push(fn)
    }
  }

  emit(type, data) {
    if (!this.cacheList.get(type)) throw 'event not found'
    for (let fn of this.cacheList.get(type)) {
      fn(data)
    }
  }
}

let event = new Event()

event.on('click', data => console.log(`event data: ${data}`))
event.emit('click', 'hello') // event data: hello
```

[ES6 语法实践，用 ES6 重写《JavaScript Patterns》中的设计模式 - CNode 技术社区](https://cnodejs.org/topic/5565b4a77d4c64752effb5dd)

#### 与观察者模式的区别

*   **观察者模式：** 对象间一对多的依赖关系，被观察者直接通知观察者，耦合度较高。
*   **发布-订阅模式：** 通过消息中心解耦发布者和订阅者，实现松耦合。

### 迭代器模式

[[iterator-pattern]]

### 策略模式

将算法实现和使用分离。策略类封装了具体的算法，环境类接受用户请求并委托给策略类。

*   **特点：** 将不变的部分和变化的部分分隔开来。
*   **组成：** 策略类（封装具体算法）和环境类 (Context)（接受请求并委托给策略类）。

```js
// 计算工资
var strategies = {
  S: function(salary) {
    return salary * 4
  },
  A: function(salary) {
    return salary * 5
  },
  B: function(salary) {
    return salary * 6
  },
}

var calculateBonus = function(level, salary) {
  return strategies[level](salary) // Context
}

console.log(calculateBonus('A', 5000))
console.log(calculateBonus('S', 5000))
```

### 模板方法模式

由抽象父类和具体实现子类组成。父类封装子类的算法框架，子类继承并实现具体步骤。

*   **特点：** 从多个子类中分享共同点，定义算法的骨架。

### 命令模式

将请求封装成对象，从而使你可用不同的请求、队列或日志来参数化客户端，支持可撤销操作。

*   **特点：** 可撤销，支持并发，程序无状态。

### 职责链模式

使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

*   **应用：** 多种支付场景、优惠券处理、库存管理等。

## 其他原则

### 合成复用原则 (Composite Reuse Principle)

尽量使用对象组合，而不是继承来达到复用的目的。

## 代码局部性 (Code Locality)

通常指的是在软件程序中将相关的代码组件放在一起的概念。这种做法旨在改善代码的可读性、可维护性和整体开发效率。通过将相关的代码元素放在一起，开发人员可以更容易地理解和处理逻辑，减少在代码库中导航和理解所需的认知负担。

*   **示例：** 前端 store 相关处理，避免父子组件同时访问和调用，尽量在容器组件处理。
*   **相关原则：**
    *   **单一职责原则：** UI 组件应专注于渲染和交互，不直接管理应用状态。
    *   **数据封装原则：** 避免组件对全局状态的过度依赖，保持数据封装性。
    *   **解耦原则：** 减少组件与特定状态管理工具的耦合。

[Code Locality and the Ability To Navigate – Martin Vysny – First Principles Thinking](https://mvysny.github.io/code-locality-and-ability-to-navigate/)
[前端的设计模式系列-基本原则 | 前端的设计模式系列](https://pattern.windliang.wang/posts/%25E5%2589%258D%25E7%25AB%25AF%25E7%259A%2584%25E8%25AE%25BE%25E8%25AE%25A1%25E6%25A8%25A1%25E5%25BC%258F%25E7%25B3%25BB%25E5%2588%2597-%25E5%259F%25BA%25E6%259C%25AC%25E5%258E%259F%25E5%2588%2599.html)
[Patterns.dev - Modern Web App Design Patterns](https://www.patterns.dev/)


![image.png](https://img.oaker.bid/?url=http://ww2.sinaimg.cn/large/4e5d3ea7ly1h0fkali93yj20f80jmn2b.jpg)