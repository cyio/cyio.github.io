---
title: JavaScript模具[粗译]
date: 2015-10-04
---
#  JavaScript模具[粗译]

原文：[JavaScript Jigs - Mark Daggett's Blog](http://markdaggett.com/blog/2013/02/18/javascript-jigs/)

> jigs:  模具，夹具

 在某书中，作者用木匠的模具来形容聪明的程序员创建的可复用的模板或代码生成器。

> 木匠用模具，处理了复杂性且减少了出错。手艺人可以更多地关注质量。

 要成为模具，这个解决方案需要是高度专注，并擅长处理某项任务。
 大多数库一开始就是一些模具的集合。
## 自执行函数

``` js
;(function(){
    ...
})();

;!function(){
    ...
}();

;-function(){
    ...
}();

;+function(){
    ...
}();

;~function(){
    ...
}();

// Not Recommended
;void function(){
    ...
}();

// Not Recommended
;delete function(){
    ...
}();
```
## 模块

``` js
;!function(global) {
  var Module = (function() {

    // Mostly Private Variable
    var data = 'secret';

    return {

      bool: true,
      string: 'a string',
      array: [1, 2, 3, 4],
      object: {
        lang: "en-Us"
      },
      getData: function() {
        return data;
      },
      setData: function(value) {
        return (data = value);
      }
    };
  })();

  // expose our module to the global object
  global.Module = Module;

}(this);
```

这个模块注意三点：
1. 它是个闭包函数
2.  初始化添加到全局命名空间
3. 可通过getter和setter访问私有变量data

下面是两段还看不懂的写法：

``` js
// A string representation of an a object similar to what you might get with JSON.
var dataString = '{"foo":"bar"}';

;!function(global, data){

    // the variable name provided is replaced with the evaluated code.
    global[data] = new Function("return" + global[data])()
}(this, "dataString");

// dataString is now Object {foo: "bar"}
```

``` js
;(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

// Usage Examples
// Creates a "named" logging function.

function createLogger(name) {
  return function(event, a, b) {

    // Skip the first argument (event object) but log the name and other args.
    console.log(name, a, b);
  };
}

// Subscribe to the "foo" topic (bind to the "foo" event, no namespace).
$.subscribe('foo', createLogger('foo'));

// Subscribe to the "foo.bar" topic (bind to the "foo" event, "bar" namespace).
$.subscribe('foo.bar', createLogger('foo.bar'));

/*
 * logs:
 * foo 1 2
 * foo.bar 1 2
 * foo.baz 1 2
 */
$.publish('foo', [1, 2]);

/*
 * logs:
 * foo.bar 3 4
 */
$.publish('foo.bar', [3, 4]);
```

