# 函数合成

```js
const toUpperCase = function(x) { return x.toUpperCase(); };
const hello = function(x) { return 'HELLO, ' + x; };

// const greet = function(x){
    // return hello(toUpperCase(x));
// };

// 合成函数，返回的是函数，真正参数在返回函数中
const compose = (fn1, fn2) => (x => fn1(fn2(x)))
// function compose(fn1, fn2) {
  // return function(x) {
    // return fn1(fn2(x))
  // }
// }
greet = compose(hello, toUpperCase)

let r = greet('kevin');
console.log(r)
```

合成多个
```js
// underscore
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};
```
[JavaScript 函数式编程术语大全-WEB前端开发](https://www.html.cn/archives/7833)
