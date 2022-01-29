# 函数合成

优点：
- 组合函数，高阶性
- 没有硬编码，灵活性
- 函数拆分

缺点：
- 性能
- 代码冗余
- 可读性

## 写法 1

```
document.body.innerHTML = '<h1>Hello</h1>'
```

## 写法 2
```js
const compose = (...fns) => {
  return value => fns.reverse()
    .reduce((acc, fn) => fn(acc), value)
}

const write = value => document.write(value)
const createNode = text => {
  return `<h1>${text}<h1>`
}
const setMsg = msg => msg

// 新函数
const pringMsg = compose(
  write,
  createNode,
  setMsg
)

pringMsg('Hello1')
```
