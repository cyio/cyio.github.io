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

## 浮点数计算

原因：二进制 + 64 位双精度

0.1 的二进制表示，是无限循环的长度

[JavaScript小数精度问题 - Web前端工程师面试题讲解 - YouTube](https://www.youtube.com/watch?v=cI0XQkC9AOc)

解决：
```js
parseFloat((0.1 + 0.2).toFixed(10))
// toFixed 格式化为小数点后 10 位 0.30000...
// parseFloat 解析为有效浮点数，没有了多余的 0
```

### 价格场景
彻底解决的方案是用‘分’表示金额。

如果不想改，`*100`转换成int再进行计算。
最后的结果再除以 100 不会有问题。
```js
// 精确价格减法计算，每次运算都要处理浮点数
function subtract(n, m) {
  return (Number.parseInt(n * 100, 10) - Number.parseInt(m * 100, 10)) / 100
}
```
