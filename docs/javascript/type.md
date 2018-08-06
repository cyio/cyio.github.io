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

## 转换

```js
// 检测数字
typeof xxx === "number"
// 检测字符串
typeof xxx === "string"
// 检测数组
xxx instanceof Array
```

如果要使用某种数据类型的方法，最好在开始检测数据类型，以免传入不合适的类型导致错误

## 数据判断不严谨
原来是这么写的，数据是数字，存在数据时显示，有什么问题呢？
```js
| {{#if data.score_left3}}
li {{data.score_left3}}
| {{/if}}
```
本地端，无数据时，空。
服务端，无数据显示成了null，而0也会被视作  
![null](http://ww1.sinaimg.cn/large/4e5d3ea7jw1eynp4psv0yj204a03lq34.jpg)

这时尝试去判断undefined
```js
| {{#js_compare "typeof(this.data.score_left3) !== 'undefined' && this.data.score_left3 !== null"}}
li {{data.score_left3}}
| {{/js_compare}}
```


```js
typeof [1, 2]
//"object"   无法区分数组和对象

[1, 2] instanceof Array
//true
```
