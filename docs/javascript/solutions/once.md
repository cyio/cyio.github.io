# once

多次调用，执行一次

利用闭包，缓储 flag 和 result
1. 已经执行过，直接返回 result
2. 否则，执行并返回 result，标记 flag

```js
  function once(fn) {
    let flag = false
    let result
    let self = this

    return function() {
      if (flag) {
        return result
      }

      result = fn.apply(self, arguments)
      flag = true
      return result

    }
  }

  let fn = (x)=>console.log(x)
  let nFn = once(fn)
  nFn(1)
  nFn(2)
```

ES6 Reflect

```ts
function once (fn) {
    let called = false;
    let result
    return (...args) => {
      if (called) {
        return result;
      }
      called = true;
      result = Reflect.apply(fn, this, args);
      return result
    };
  }


function fn (x) {
    console.log('exec: ' + x)
    return x
}
let nFn = once(fn)
nFn(1)
console.log(nFn(2))

```

```js
// 使用 Reflect.apply 调用 greet 函数，并指定 this 值为 person 对象
Reflect.apply(greet, person, ["Alice", 30]);

// 使用 Function.prototype.apply 调用 greet 函数，并指定 this 值为 person 对象
greet.apply(person, ["Alice", 30]);
```