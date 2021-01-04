# 扩展实现 Promise.retry

```js
// 编写代码：手写一个重试函数，retry(fnPromise,count);count重试次数，并返回一个新的promise

// reject 时重试

  function retry(fnPromise, count = 1) {
    const fn = (resolve, reject) => Promise.resolve(fnPromise).then(res => {
        resolve(res)
      }).catch(err => {
        if (count > 0) {
          console.log('retry count: ', count)
          fn(resolve, reject)
          count--
        } else {
          reject(err)
        }
      })
    return new Promise((resolve, reject) => {
      fn(resolve, reject)
    })
  }
  
  retry(Promise.reject('has err'), 3).then(res => console.log(res))
  retry(Promise.resolve('haha'), 3).then(res => console.log(res))

```

while 配合 await，同步写法

```js
// 编写代码：手写一个重试函数，retry(fnPromise,count);count重试次数，并返回一个新的promise

// reject 时重试

  function retry(fnPromise, count = 1) {
    return new Promise(async (resolve, reject) => {
      while(count > 0) {
        try {
          let ret = await Promise.resolve(fnPromise)
          resolve(ret)
          break // count = 0
        } catch (err) {
          if (count === 0) {
            reject(err)
          }
          console.log('retry couont: ', count)
          count--
        }

      }
    })
  }
  
//   retry(Promise.reject('has err'), 3).then(res => console.log(res))
  retry(Promise.resolve('haha'), 3).then(res => console.log(res))
```
