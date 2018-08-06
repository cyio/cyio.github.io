# 函数

## 调用模式
* 方法调用模式
* 函数调用模式
* 构造器调用模式
* Apply调用模式

```js
// 定义一个对象
var myObject = {
  value: 0,
  // 函数作为属性时称之为方法
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
}

// 函数以方法形式调用时，this指向所属对象
myObject.increment();
document.writeln(myObject.value);

var add = function (a, b) {
  return a + b;
}

// 定义一个double方法（属性）
myObject.double = function () {
  // 解决方法
  var that = this;
  // 定义一个内部函数，并访问外部函数的属性    
  var helper = function () {
    that.value = add(that.value, that.value);
  };
  //以函数的形式调用helper时，this指向全局对象    
  helper(); 
}

//每运行一次value翻倍
myObject.double();
document.writeln(myObject.value);
```

* 未知参数名，只知道位置
```js
function tmp (...args) {
	console.log(args[args.length - 1])
}

tmp(1, 2)
```
