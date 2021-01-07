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
