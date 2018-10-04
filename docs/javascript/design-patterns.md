# 设计模式

## 订阅/发布模式
* 订阅者，数据结构是事件名到事件回调列表的映射，有一个默认事件`any`
* 两个方法，一个是接收，参数是回调和事件名，一个是发出，参数是消息和事件名
    - 接收， 就是写入订阅表，注意事件名存在时，回调列表要 push
    - 发出，遍历调用事件名下的回调
```js
class Event {
  constructor() {
    this.cacheList = new Map()
  }

  on (type, fn) {
    if (!this.cacheList.get(type)) {
      this.cacheList.set(type, [fn]) // 注意这里设置的值是数组
    } else {
      (this.cacheList.get(type)).push(fn)
    }
  }

  emit (type, data) {
    if (!this.cacheList.get(type)) throw('event not found')
    for (let fn of this.cacheList.get(type)) {
      fn(data)
    }
  }
}

let event = new Event();

event.on('click', (data) => console.log(`event data: ${data}`))
event.emit('click', 'hello') // event data: hello
```
[ES6语法实践，用ES6重写《JavaScript Patterns》中的设计模式 - CNode技术社区](https://cnodejs.org/topic/5565b4a77d4c64752effb5dd)

## 策略模式

将不变的部分和变化的部分分隔开来是每个设计模式的主题。
策略模式的目的是把算法的实现和使用进行分离。

至少两部分组成：
一是策略类，策略类封装了具体的算法，并负责具体的算法。
二是环境，类Context接受客户的请求，随后把请求委托给某一个策略类。
```js
// 计算工资
var strategies = {
  "S" : function(salary) {
    return salary * 4;
  },
  "A" : function(salary) {
    return salary * 5;
  },
  "B" : function(salary) {
    return salary * 6;
  }
}

var calculateBonus = function(level, salary) {
  return strategies[level](salary); // Context
}

console.log(calculateBonus('A', 5000));
console.log(calculateBonus('S', 5000));
```

