# Promise.finally

- 接收 onFinally cb，返回 promise
- 链式调用，用 then 模拟
- 成功或失败，都要执行


```js
// 简版
Promise.prototype.finally = function(cb){
  return this.then(
    value => Promise.resolve(cb()).then(() => value),
    reason => Promise.resolve(cb()).then(() => Promise.reject(reason))
  )
}

// 为什么要用对象？
Promise.prototype.finally = Promise.prototype.finally || {
  finally (fn) {
    const onFinally = callback => Promise.resolve(fn()).then(callback);
    return this.then(
      result => onFinally(() => result),
      reason => onFinally(() => Promise.reject(reason))
    );
  }
}.finally;
```
https://stackoverflow.com/a/53327815/5657916
