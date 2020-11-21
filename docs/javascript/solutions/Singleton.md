# 单例

特点：一个类只有一个实例

工厂模式：在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

```js
var Singleton = (function(){
  var instance;
  class CreateSingleton { // 需要定义在内部，防止意外调用
    constructor (name) {
      if (instance) return instance;
      this.name = name;
      return instance = this;
    }

    getName() {
      return this.name;
    }
  }
  return CreateSingleton;
})(); // IIFE，CreateSingleton 和 instance 提前生成。如果不用 IIFE，new 时会创建不同 instance

var a = new Singleton('instance1');
// console.log(a.getName()); //输出instance1
var b = new Singleton('instance2');
// console.log(b.getName()); //输出instance1，没有创建出新的实例
console.log(a === b); //输出true
```

[JavaScript设计模式第1篇：单例模式_前端学习 - SegmentFault 思否](https://segmentfault.com/a/1190000021101281)
