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
