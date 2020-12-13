# promise.allSettled

```js
function allSettled(iterable) {
  let result = []
  const arr = Array.from(iterable)
  return new Promise(resolve => {
    arr.forEach(item => {
      Promise.resolve(item)
        .then(res => {
          result.push({ status: 'fulfilled', value: res })
          if (result.length === arr.length) {
            resolve(result)
          }
        })
        .catch(err => {
          result.push({ status: 'rejected', value: err })
          if (result.length === arr.length) {
            resolve(result)
          }
        })
    })
  })
}

let a = Promise.resolve(2)
let b = Promise.reject(3)
let r = allSettled([a, b])
console.log(r)
```
