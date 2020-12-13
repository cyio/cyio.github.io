# repeat function

```js
  const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
  function repeatFn(func, times, wait){
    return async function(){
      for (let i = 0; i < times; i++){
        func.apply(null, arguments)
        await wait
      }
    }
  }
  const fn = repeatFn(alert, 5, 2500)
  fn('hello')
  // alert hello 5 times
```
