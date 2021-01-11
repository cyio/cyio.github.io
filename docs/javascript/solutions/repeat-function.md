# repeat function

for-await
```js
  const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
  function repeatFn(func, times, wait){
    return async function(){
      for (let i = 0; i < times; i++){
        func.apply(null, arguments)
        await sleep(wait)
      }
    }
  }
  const fn = repeatFn(x => console.log(x), 5, 1500)
  fn('hello')
  // alert hello 5 times
```

递归
```js
  function repeat(func, times, wait) {
    let count = times
    return function loop(){
      setTimeout(() => {
        if (count === 0) return
        func.apply(null, arguments)
        count--
        // loop() 会丢参数
        loop.apply(null, arguments)
      }, wait)
    }

  }
  const repeatFunc = repeat(x => console.log(x), 4, 1500)
  repeatFunc('hello')
```
