```js
Function.prototype.mycall = function (context, ...argus) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    const fn = this
    let result = null
 
    context = context || window
    context.fn = fn
    result = context.fn(...argus)
    delete context.fn
     
    return result
}
 
 
Function.prototype.myapply = function (context, ...argus) {
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
```
