# promise.allSettled

```js
// values = [{ status: 'fulfilled', value: 22 }, { status: 'rejected', value: 'err msg' }]
function allSettled(iterable) {
  let result = []
  let count = 0
  const arr = Array.from(iterable)
  return new Promise(resolve => {
    arr.forEach((item, index) => {
      Promise.resolve(item)
        .then(res => {
          result[index] = { status: 'fulfilled', value: res }
          count += 1
          if (result.length === arr.length) {
            resolve(result)
          }
        })
        .catch(err => {
          result[index] = { status: 'rejected', value: err }
          count += 1
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
