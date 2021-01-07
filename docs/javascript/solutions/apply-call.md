# apply call

核心，借用对象调用方法

输出，执行结果

结束后，删除对象方法

```js
Function.prototype.myApply = function (context, ...argus) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    const fn = this
    let result = null
 
    context = context || window
    // argus = argus && argus[0] || []
    context.fn = fn
    result = context.fn(...argus)
    delete context.fn
     
    return result
}

// ES6 简版 apply 与 call 相同
Function.prototype.myApply = function(context = window, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}

let user = {
  firstName: 'john',
  say(words, words2) {
    console.log(`hi ${this.firstName} ${words} ${words2}`)
  }
}
let user1 = { firstName: 'user1' }
user.say.myApply(user1, ['morning'])
user.say.apply(user1, ['morning'])
```
