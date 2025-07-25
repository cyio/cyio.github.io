# Typescript

> **你定义了值，TypeScript 自动派生类型，编辑器就能给出“值域 + 错误提示 + 补全建议”三位一体的智能提示体验。**

> TS 关键字：类型、泛型、推导、提示，约束

TypeScript 是一种由微软开发的静态类型语言，它是 JavaScript 的超集。与 JavaScript 不同的是，TypeScript 强制要求变量、函数和对象属性等具有明确的类型，并在编译时检查这些类型，以帮助开发人员在代码编写阶段就发现潜在的问题。

> 为了说明静态类型化的好处，由于环境变量中的错字，我仅花了 30 分钟进行调试 - TJ
> https://mobile.twitter.com/tjholowaychuk/status/1276470952059113473

vim 快速 fix，默认根据使用推测（即使推测不准，也省去一些书写）

[基础类型 · TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/docs/handbook/basic-types.html)

[Typescript 高级语法进阶](https://taskhub.work/article/80348744310312960)

[用 TypeScript 编写 React 的最佳实践-技术圈](https://jishuin.proginn.com/p/763bfbd2418a)

[TypeScript 中高级应用与最佳实践 - 掘金](https://juejin.im/post/6844903904140853255)

Tuple 元组 有组织的数组

08 Record & Dictionary & Many
G

[Adopting Typescript at Scale - Brie Bunge | JSConf Hawaii 2019 - YouTube](https://www.youtube.com/watch?v=P-J9Eg7hJwE)

[ts-migrate/packages/ts-migrate at master · airbnb/ts-migrate](https://github.com/airbnb/ts-migrate/tree/master/packages/ts-migrate)

[ts-migrate: A Tool for Migrating to TypeScript at Scale | by Sergii Rudenko | Airbnb Engineering & Data Science | Aug, 2020 | Medium](https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc)

> TS的ROI（投入回报率）是勾型的。小型且不长久的项目慎入，越是需要多人合作和生命周期越长的项目，回报率越高

[《TypeScript开发实战》总结 - 知乎](https://zhuanlan.zhihu.com/p/82567664)

## 类型注解：冒号

类型注解用于明确变量、函数和对象属性等的类型。在 TypeScript 中，可以使用冒号语法指定类型，例如：

```ts
let myString: string = "Hello, TypeScript!";
function addNumbers(a: number, b: number): number {
  return a + b;
}

```

## interface 和 type

interface 描述对象，定义接口

- 过去区别大，现在区别很小，都可以扩展
- interface 开放，可以覆盖，type 封闭，不能多次声明
- interface 适合开发库，便于扩展，写业务组件建议用 type

https://www.typescriptlang.org/play#example/types-vs-interfaces

```js
interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string,
  color: string
}
```

## extends

type 也可以扩展，用`&`符号

```js
type A = {
  a: number
}

interface AB extends A {
  b: string;
}
// 与上一种等价
type TAB = A & {
  b: string
}
```

## 泛型

泛型是定义时不指定具体类型，使用时传入，保持输入输出类型一致，增强复用和类型安全

作为函数的类型参数，使输入输出类型关联

```js
// 定义，相当于函数，入参是类型约束
function identity<T>(arg: T): T {
  return arg
}
// 使用
let output = identity < string > 'myString' // type of output will be 'string'
let output1 = identity < string > 23 // type of output will be 'string'
```

React.FC 有泛型接口

```
type $TSFixMe = any

// @ts-nocheck

// @ts-ignore

// 没有错误后，会提示移除注释，优于 @ts-ignore
// @ts-expect-error

// tsx
{/* 
  // @ts-ignore */}
```

渐近`nocheck -> expect-error`

[解读 Errors | 深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/error/interpreting.html#%25E7%25AE%2580%25E6%25B4%2581)

## 枚举

枚举可以为一组数值赋予有意义的名称。在 TypeScript 中，可以使用 enum 关键字定义枚举，例如：

```ts
enum Color {
  Red,
  Green,
  Blue
}

let myColor = Color.Red;
console.log(myColor); // 输出 0
```

## 类

类可以用于创建面向对象的代码。在 TypeScript 中，可以使用 class 关键字定义类，例如：

```TS
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
  }
}

let myPerson = new Person("Alice", 30);
myPerson.greet();

```


## 命名空间

命名空间可以用于组织代码并避免全局命名空间冲突。在 TypeScript 中，可以使用 namespace 关键字定义命名空间，例如：

```TS
namespace MyNamespace {
  export function greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

MyNamespace.greet("Alice");

```


## 装饰器

装饰器可以用于修改类、方法或属性的行为。在 TypeScript 中，可以使用 @ 符号指定装饰器，例如：

```TS
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${JSON.stringify(result)}`);
    return result;
  };
}

class MyClass {
  @log
  add(a: number, b: number

```
## case
- JSX element type 'Element[]' is not a constructor function for JSX elements #33487

    React Element 要求是对象，用 Fragment 包下

- TS2322: Type 'Timeout' is not assignable to type 'number'” when running unit tests

    使用 windows.setTimeout 解决

- No index signature with a parameter of type 'string' was found on type 'xxx'

    对象访问下角标限制

    [Index Signatures - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/type-system/index-signatures)

- Object is possibly 'undefined'?

    提示结尾的访问，可能取不到，需要使用`?`

## getter 和 setter 作用

- 实现只读私有变量,不提供 setter
- 条件返回
- 钩子，自定义逻辑
- 参数校验
- 便于 TS 推导

[TypeScript 高级技巧 - 掘金](https://juejin.im/post/6844903863791648782)

private 是 ts 关键字

```js
class Animal {
    private _name = 'ppp'

    get name() {
        return this._name
    }

    set name(val: string) {
        this._name = val
    }
}

let pig = new Animal()
pig.name
pig.name = 'jack'
```
> 子组件需要的参数声明也不具有强制性，参考 React 组件参数传递是具有强约束力并且能静态检测，目前 Vue 仍然是在运行时抛出

## 适合场景

- 持续迭代的复杂项目

[你为什么不使用 TypeScript？ - 知乎](https://www.zhihu.com/question/273619114/answer/1907885114)

## 使用JavaScript与JSDoc注释来模拟TypeScript的类型检查和类型提示功能

VSCode内置了对JSDoc的支持，无需额外配置

VSCode VSCode  10 个最常用技巧
1. 在函数或方法的上方输入`/**`，然后按`Enter`
2. 三段式结构，类型、字段名、注释）：`* @property {string} name - 用户名字`
3. 函数上 hover 提示类型约束

```
变量类型 @type
自定义类型 @typedef
函数描述 @description
枚举 @enum
示例 @example
```


[基于JSDoc实现TypeScript类型安全的实践报告 - 周爱民 - 掘金](https://juejin.cn/post/7310980511453954063)


## 类型断言：从未知类型恢复为精确类型

用来**告诉编译器把某个值断言成指定的类型**，绕过编译器的类型推断或检查。

as

比如 api / JSON.parse 从 any 到 as，特别适合服务端接口用

## 联合类型与交叉类型

`|` 联合，或
`&` and、merge 、交叉

## 字面量类型：值的限制

```js
type Status = 'pending' | 'success' | 'error';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Request = {
  method: HttpMethod;
  status: Status;
};

```


## 自动推导：类型复用

typeof  类型复用，根据已有的数据，保持同步

## 源头类型保障

类型提示、约束
严格类型校验

https://chatgpt.com/share/6882e781-ff90-8008-a70d-881de8b0ac04