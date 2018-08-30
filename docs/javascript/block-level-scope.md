# 块级作用域

## 定义
作用域规则，定义了变量查找规则，就像在高楼中查房，先查所在楼层，找不到时到上一层查，直到最顶层即全局作用域。

块级作用域，指的是一个语句结束后其内部变量销毁。

## JS 中的作用域
但是，在JS中，作用域是在函数体内。注意 if 语句不是函数，所以没有单独作用域
```js
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    alert(i);
  }
  alert(i);   // 计数
}
```
重新声明会被忽视，且不会改变它的值。
```js
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    alert(i);
  }
  var i;
  alert(i);   // 计数
}
```

## 模拟
如何解决上述问题呢？用匿名函数模拟块级作用域，变量只在这个大的语句内有效。
这里是一种 hack，因为目的并不是要创建一个函数，只是借助函数生成块级作用域
```js
(funciton(){
  // 块级作用域
})()
```
第一对圆括号是干嘛的？能省略吗？
```js
funciton(){
  // 块级作用域
}()  // 报错
```
因为在JS中 function 作为关键字开头，表示函数，后面不能接圆括号。
```js
var someFunction = funciton(){
  // 块级作用域
}
someFunction();
```
这段代码的含义是创建一个匿名函数，然后将其赋值给变量someFunction

## ES6
大括号内声明的`let const function`，都是块内有效
```js
let i = 1
{
  let i = 2
  console.log(i)
}
console.log(i)
```

## 何时使用
无论在什么地方，只要临时需要一些变量

```js
// 为什么把 var 换成 let，就能正常打印 1-9 了
// 因为 var 没有块级作用域，setTimeout 中的函数是另外一个作用域，执行时 i 已经循环完，打印 10
// 改成 let 后，保持在作用域内有效
for(let i = 0; i < 10; i += 1) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```
