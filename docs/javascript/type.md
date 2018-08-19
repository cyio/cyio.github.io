# 数据类型

* 数字
Number("0.00") === 0
Number("0") === 0
Number(null) === 0
Number(undefined) === NaN (没有有效结果)
Number([]) === 0
Number({}) === NaN
Number(true) === 1

* 逻辑值
0、NaN和空字符串("")视为false，其余值视为true

## 类型判断
* 如果要使用某种数据类型的方法，最好在开始检测数据类型，以免传入不合适的类型导致错误
```js
// 检测数字
typeof xxx === "number"
// 检测字符串
typeof xxx === "string"
typeof [1, 2] //"object"   无法区分数组和对象
// 检测数组
xxx instanceof Array
xxx.constructor === Array
```

