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
## 函数防抖和函数节流
* 函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次

函数防抖的要点，也是需要一个setTimeout来辅助实现。延迟执行需要跑的代码。
如果方法多次触发，则把上次记录的延迟执行代码用clearTimeout清掉，重新开始。
```js
//函数防抖
var timer = false
document.getElementById("debounce").onScroll = function() {
  clearTimeout(timer)  
  timer = setTimeout(function(){
    console.log(‘函数防抖’) 
  }, 300)     
}
```
* 函数节流是指一定时间内js方法只跑一次

函数节流的要点是，声明一个变量当标志位，记录当前代码是否在执行。 
如果空闲，则可以正常触发方法执行。 
如果代码正在执行，则取消这次方法执行，直接return。
```
//函数节流
var canScroll = true;
document.getElementById('throttle').onScroll = function() {
  if (!canScroll) {
    return;
  }
  canScroll = false;
  setTimeout(function(){
    console.log('函数节流');
    canScroll = true;
  },300)       
}
```
