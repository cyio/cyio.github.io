# bind

```js
  // fn.bind(this, 1, 2)
  // new fn
  // arg concat
  Function.prototype.myBind = function(oThis) {
    // type
    const fn = this
    const oArgs = [...arguments].slice(1)
    return function() {
      fn.apply(oThis, [...oArgs, ...arguments])
    }
  }

  // ES6
  Function.prototype.myBind1 = function(...args) {
    const fn = this
    const oThis = args(0)
    const oArgs = args.slice(1)
    return function() {
      fn.apply(oThis, [...oArgs, ...arguments])
    }
  }

  let user = {
    firstName: 'john',
    say(words, words2) {
      console.log(`hi ${this.firstName} ${words} ${words2}`)
    }
  }
  let sayMyBind = user.say.myBind(user, 'morning')
  let sayBind = user.say.bind(user, 'morning')

  sayMyBind('after')
  sayBind('after')
```

考虑 构造函数
```js
//  Yes, it does work with `new (funcA.bind(thisArg, args))`
// Credit to Douglas Crockford for this bind method
if (!Function.prototype.bind) {
  // 如果不存在 bind 方法
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // bind 方法的调用对象只能是函数，如果不是则抛出异常
      // closest thing possible to the ECMAScript 5 internal IsCallable function​
      throw new TypeError(
        'Function.prototype.bind - what is trying to be bound is not callable'
      )
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), // 浅复制 bind 的参数，从第 2 个开始到结束 http://stackoverflow.com/a/26618338/5657916
      fToBind = this,
      fNOP = function() {}, // no operation 无操作函数
      fBound = function() {
        // 要返回的函数，用 apply 方法绑定 this
        return fToBind.apply(
          this instanceof fNOP && oThis // 待返回函数与构造函数原型是否一致，oThis 参数是否存在
            ? this // 直接使用 bind 的调用对象
            : oThis, // 使用指定 this
          aArgs.concat(Array.prototype.slice.call(arguments))
        ) // 合并两个方法的参数
      } // var end

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()

    return fBound
  }
}
```
