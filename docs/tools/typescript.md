# Typescript

[[toc]]

> 为了说明静态类型化的好处，由于环境变量中的错字，我仅花了 30 分钟进行调试 - TJ
> https://mobile.twitter.com/tjholowaychuk/status/1276470952059113473

vim 快速 fix，默认根据使用推测（即使推测不准，也省去一些书写）

[基础类型 · TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/docs/handbook/basic-types.html)

[Typescript 高级语法进阶](https://taskhub.work/article/80348744310312960)

[用 TypeScript 编写 React 的最佳实践-技术圈](https://jishuin.proginn.com/p/763bfbd2418a)

[TypeScript 中高级应用与最佳实践 - 掘金](https://juejin.im/post/6844903904140853255)

Tuple 元组 有组织的数组

08 Record & Dictionary & Many
[TypeScript 高级技巧 - 掘金](https://juejin.im/post/6844903863791648782)

[Adopting Typescript at Scale - Brie Bunge | JSConf Hawaii 2019 - YouTube](https://www.youtube.com/watch?v=P-J9Eg7hJwE)

[ts-migrate/packages/ts-migrate at master · airbnb/ts-migrate](https://github.com/airbnb/ts-migrate/tree/master/packages/ts-migrate)

[ts-migrate: A Tool for Migrating to TypeScript at Scale | by Sergii Rudenko | Airbnb Engineering & Data Science | Aug, 2020 | Medium](https://medium.com/airbnb-engineering/ts-migrate-a-tool-for-migrating-to-typescript-at-scale-cd23bfeb5cc)

> TS的ROI（投入回报率）是勾型的。小型且不长久的项目慎入，越是需要多人合作和生命周期越长的项目，回报率越高

[《TypeScript开发实战》总结 - 知乎](https://zhuanlan.zhihu.com/p/82567664)

## interface 和 type

interface 适合开发库，便于扩展，写业务组件建议用 type

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

## 对象入参

```js
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
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

适用多个类型，保证返回类型一致

```js
// 定义，相当于函数，入参是类型约束
function identity<T>(arg: T): T {
  return arg
}
// 使用
let output = identity < string > 'myString' // type of output will be 'string'
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

## 新特性
unknown type 处理第三方库或 API 数据，表示需要检查数据有效性。如，接口字段有多种类型，null/[]

```
  readonly scores: readonly number[];
```
第一个表示不能熏赋值，第二个表示内部不可变

const assertions 不可变数据结构

[6 useful TypeScript 3 features you need to know | Building SPAs](https://www.carlrippon.com/6-useful-typescript-3-features-you-need-to-know/)
