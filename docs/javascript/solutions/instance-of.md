# instanceOf

判断实例派生关系

语法：obj instanceof constructor

原理：obj 的原型链上，是否存在 constructor 的 prototype

```js
  // walk obj __proto__ 
  function instanceOf(obj, fn) {
    let _obj = Object.create(obj)
    while (_obj.__proto__ !== null) {
      if (_obj.__proto__ === fn.prototype) {
        return true
      }
      _obj = _obj.__proto__
    }
    return false
  }
```
