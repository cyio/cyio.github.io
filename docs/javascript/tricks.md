# 技巧

- 插件库

  [The Vanilla JS Toolkit](https://vanillajstoolkit.com/)

- 建议不要使用`||`来接默认值，因为这样，就不能赋值为 0 了，0 会被当作假值而取默认值。
  ```js
  function setAge(age) {
    this.age = age || 10
    console.log(this.age)
  }
  setAge(0) // 10
  ```
  改进后的代码，只有在 age 为 undefined 时才取默认值。
  ```js
  function setAge(age) {
    this.age = typeof age !== 'undefined' ? age : 10
    console.log(this.age)
  }
  setAge(0) // 0
  ```
  `typeof`的目的是确保不会抛出`ReferenceError`（引用错误）
- bind 的妙用

```js
;['foo', 'bar', 'baz'].filter(RegExp.prototype.test.bind(/a/)) // ["bar", "baz"]
```

- 用`+`号把字符串转成数值（JS 特有，不建议使用）

```js
var string = '500'
var num = +string
```

- 用`!!`将值强制转为布尔值

```js
!!null // false
!!undefined // false
!!'false' // true :(
!!'' // false
```

- sort 方法对数字排序

```js
;[10, 7, 9, 8, 11].sort(function(a, b) {
  return a - b
})
// => [7, 8, 9, 10, 11]
```

- 返回毫秒

```js
;+new Date() // 1259359833574
```

- 数组追加

```js
var a = [4, 5, 6]
var b = [7, 8]

Array.prototype.push.apply(a, b)
console.log(a)
```

- 位数补齐

```js
function PrefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

PrefixInteger(233, 4) // "0233"
```

- 创建指定长度随机字符串

```js
function RandomString(length) {
  var str = ''
  for (
    ;
    str.length < length;
    str += Math.random()
      .toString(36)
      .substr(2)
  );
  return str.substr(0, length)
}

console.log(RandomString(23))
```

- 用`parseInt`解析数字，并求和
- 给输入框添加`keyup`绑定事件
- 用`replace`方法将非数字替换为空
- 提交按钮添加`click`事件，至少一个为空，`alert`提示，否则执行相加操作
- [累加按钮，自加 1](http://fgm.cc/learn/lesson3/03.html)
- 初始值为 0
- `click`一次，将值加 1 并弹出
- 不要只是为了添加一个`console.log`来转换箭头函数，你可以用`||`添加它 然后在以后去掉它
    ```js
    let fn = () => console.log(3) || 2
    console.log(fn()) // 因 console.log 的返回是 undefined，故不影响原函数
    ```

## 从 Object 构建 URL querystring

```js
// build a query string from an object
function buildQuery(data) {
  if (typeof data === 'string') return data

  const query = []

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    }
  }

  return query.join('&')
}
```

[How to build a query string from an object with vanilla JS | Go Make Things](https://gomakethings.com/how-to-build-a-query-string-from-an-object-with-vanilla-js/)
