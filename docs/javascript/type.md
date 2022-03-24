# 数据类型
[[toc]]

## 数字

```js
Number('0.00') === 0
Number('0') === 0
Number(null) === 0
Number(undefined) === NaN // 没有有效结果
Number([]) === 0
Number({}) === NaN
Number(true) === 1
```

## 逻辑值

0、NaN（Invalid Number）、空字符串（""）、null、undefined 视为 false，其余值视为 true

## 类型判断

- 如果要使用某种数据类型的方法，最好在开始检测数据类型，以免传入不合适的类型导致错误
- 有效值类型用`typeof`，null/undefined 直接用全等`===`，引用类型需要另外方法

```js
// 检测数字
typeof 1 === 'number'

// 检测字符串
typeof '1' === 'string'
typeof new String('a') // object
'1' instanceof String  // false

typeof [1, 2] //"object"   无法区分数组和对象
typeof new Date() // 'object'

// 检测数组
xxx instanceof Array
xxx.constructor === Array

// 严格检测对象，可排除 null Date Math 等
// toString.call 任意 Object 都可以判断
const isObject = (arg) => Object.prototype.toString.call(arg) === '[object Object]';
```

[第 21 题：有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣 | 木易杨前端进阶](https://muyiy.vip/question/js/21.html)

## 类型转换

```js
undefined == null // 两个值转换为 false，结果是 true
```

原始类型，意味着不可变，相等性判断都可以用`===`，而对象可以修改

null 空对象，是特殊原始类型，不能用 typeof 检测出

BigInt

[JavaScript data types and data structures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

Symbol 原子、唯一

```js
'1' + '0' + 0 // 100 字符串拼接
'1' - '0' // 1 减法，转成数字
```
