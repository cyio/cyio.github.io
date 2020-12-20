# call apply

call
```js
  // fn.call(this, 1, 2, 3)
  Function.prototype.myCall = function (oThis){
    if (typeof this !== 'function') throw 'not a function'
    
    let ret
    const context = oThis || window
    const args = [...arguments].slice(1)

    context.fn = this;
    ret = context.fn(...args)
    delete context.fn

    return ret
  }

  // test
  let o = {name: 'jack'}
  function hi(){
    console.log(arguments)
    return this.name
  }
  let r = hi.myCall(o)
  let r1 = hi.call(o)
  console.log(r, r1)
```

apply
```js
  // fn.apply(this, [1, 2])
  Function.prototype.myApply = function (oThis){
    if (typeof this !== 'function') throw 'not a function'
    
    let ret
    const context = oThis || window
    context.fn = this;

    ret = context.fn(...(arguments[1] || []))
    delete context.fn

    return ret
  }

  // test
  let o = {name: 'jack'}
  function hi(){
    console.log(arguments)
    return this.name
  }
  let r = hi.myApply(o, [1, 2])
  let r1 = hi.apply(o, [1, 2])
  console.log(r, r1)
```
