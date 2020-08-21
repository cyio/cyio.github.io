# Typescript

> 为了说明静态类型化的好处，由于环境变量中的错字，我仅花了30分钟进行调试 - TJ
https://mobile.twitter.com/tjholowaychuk/status/1276470952059113473

vim 快速 fix，默认根据使用推测（即使推测不准，也省去一些书写）

[基础类型 · TypeScript中文网 · TypeScript——JavaScript的超集](https://www.tslang.cn/docs/handbook/basic-types.html)
[Typescript 高级语法进阶](https://taskhub.work/article/80348744310312960)
[用TypeScript编写React的最佳实践-技术圈](https://jishuin.proginn.com/p/763bfbd2418a)
[TypeScript中高级应用与最佳实践 - 掘金](https://juejin.im/post/6844903904140853255)

Tuple 元组 有组织的数组

## interface 和 type
interface 适合开发库，便于扩展，写业务组件建议用 type 

```js
interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
}
```


## 对象入参
```js
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}
```

## extends
type 也可以扩展

```js
type A = {
    a: number
}

interface AB extends A {
    b: string
}
// 与上一种等价
type TAB = A & {
    b: string
}
```

## 泛型

适用多个类型，保证返回类型一致
```js
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'
```

React.FC 有泛型接口

```
// @ts -check
```
