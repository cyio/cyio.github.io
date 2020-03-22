# Number

- 除法分母不要为 0

```js
1 / 0 // Infinity
0 / 0 // NaN
```

- 两个错误值
  - isNaN 无法转换成数字
  - Infinity 数字太大
- isNaN() 会尝试将参数转换为数字类型

## 浮点价格计算
彻底解决的方案是用‘分’表示金额。

如果不想改，*100 转换成int再进行计算。
最后的结果再除以100不会有问题。
```js

```
// 精确价格减法计算
function subtract(n, m) {
  return (Number.parseInt(n * 100, 10) - Number.parseInt(m * 100, 10)) / 100
}
