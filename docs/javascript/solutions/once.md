# once

利用闭包

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
