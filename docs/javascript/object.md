# 对象
[[toc]]

## 定义

- `{ key: value }` {任意字符串: 任意值}

  对象是属性的容器，其中每个属性都拥有名字和值。属性名可以是包括空字符串在内的任意字符串，属性值可以是任意值

- 一个由空格或连字符，或者以数字开头,或者保留字的属性名，就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用
  ![](http://wx4.sinaimg.cn/large/4e5d3ea7ly1fcj043tniuj206u06h3yj.jpg)
  > 从数据结构的角度来说，映射（Map）跟原本的 Object 非常相似，都是 Key/Value 的键值对结构。但是 Object 有一个让人非常不爽的限制：key 必须是字符串或数字。

## 枚举

- `Object.keys()`与`for-in`的输出顺序一致（会被重新排序），主要区别是后者还会返回原型链中属性（往往不是我们需要的）
-  遍历对象 1. for in 2. for of Object.keys(obj)
-  对象本身不是可迭代对象，原型上没有`Symbol(Symbol.iterator)`

```js
for (myvar in obj) {
  // 只能是对象成员，排除原型链
  if (obj.hasOwnProperty(myvar)) {
    ...
  }
}

```

- `Object.getOwnPropertyNames()`与`Object.keys()`的区别是，后者仅可以输出可枚举属性(哪些算不可枚举属性，继承的内置方法 fuction，注意前面方法中的 own)
  简单说是 in 和 own 的区分，前者能取到继承属性

## 深拷贝
数据层级：一层即为浅拷贝，针对引用类型这种深层次数据

ES5 用浅拷贝 + 递归解决

ES6 `Object.assign`和`...`扩展符不会做深拷贝，如果属性里有对象或数组，拷贝的是引用。注意，第一层拷贝并不是引用

```js
const one = { name: 'jack' }
const two = { ...one }
console.log(one === two)

one.child = { name: 'jordan' }
const three = { ...one }
console.log(one.child === three.child)
```

`Object.assign`将多个对象复制到目标对象，与其说是复制，更像合并，如果有相同 key， 后边会覆盖前边

```JS
var obj1 = {a: 1}
var obj2 = {a: 3, b: 1}
var merge = Object.assign({}, obj1, obj2)
console.log(merge)
```

纯数据对象的话可以用 JSON 的接口，MDN 也是这个

```js
let obj_snapshot = JSON.parse(JSON.stringify(obj))
```

可以用 lodash 的 cloneDeep 函数。
狠一点就上 immutable，facebook 官方出的，所有数据都是不可变，不需要深拷贝之类的操作

### JSON.parse(JSON.stringify(obj))
仅处理纯数据，函数不算
[javascript - json.stringify does not process object methods - Stack Overflow](https://stackoverflow.com/questions/18089033/json-stringify-does-not-process-object-methods)


### Object.assign

参数：(target, source, ...)

注意会改变 target

如果只是想合并 `let merged = Object.assign({}, a, b)`

### 场景应用
- 修改对象时，是否会影响原对象，对象只有一层值类型时、不影响
- Echarts 需要复制 JSON 配置到在线 Playground 调试，如何复制

检查数组的严格相等，意味着检查是否有相同内存地址或引用

浅比较，要求 key 相同，值严格相等。场景，如纯函数返回总是新值，React prop 数组传递

useMemo 依赖无变化时，返回旧引用

> “Memoization is an optimization technique used to primarily speed up programs by storing the results of expensive function calls and returning the cached results when the same inputs occur again.”

手写题目：实现深拷贝
  注意点：入参校验、对象判断、层级很深会栈溢出、循环引用、用 for in 遍历纯数据对象是合适的。拷贝时可以用三元表达式
  第一次，isObject 判断后的赋值写错了

[深拷贝的终极探索（99%的人都不知道） - 颜海镜 - SegmentFault 思否](https://segmentfault.com/a/1190000016672263)

## 字典

尽量用 Map，其次用`Object.create`

```
const dict = Object.create(null)
```

[Single objects • JavaScript for impatient programmers](https://exploringjs.com/impatient-js/ch_single-objects.html#the-pitfalls-of-using-an-object-as-a-dictionary)
[Please stop using classes in JavaScript | everyday.codes](https://everyday.codes/javascript/please-stop-using-classes-in-javascript/)
