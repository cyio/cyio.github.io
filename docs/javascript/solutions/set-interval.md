# setInterval

如何拿到最新的 tId 进行清除，解法是用引用？
> setInterval能够保证以固定频率向事件队列放入回调，setTimeout不能保证。两个都不能保证固定的回调执行频率，因为存在主线程阻塞的可能
[第 133 题：用 setTimeout 实现 setInterval，阐述实现的效果与setInterval的差异 · Issue #259 · Advanced-Frontend/Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/259#issuecomment-687007642)

```js
  // setInterval(fn, 3000)

  function mySetInterval(fn, wait) {
    let tId = null
    let self  = this
    function inner(_fn, _wait){
      tId = setTimeout(() => {
        fn.call(self)
        inner(_fn, _wait)
      }, wait)
    }
    inner(fn, wait)

    return tId
  }

  let id = mySetInterval(() => console.log(1), 1000)
  clearTimeout(id)
```

setInterval能够保证以固定频率向事件队列放入回调，setTimeout不能保证。两个都不能保证固定的回调执行频率，因为存在主线程阻塞的可能


改进，加标记并对外提供修改方法，停止运行
```js
  function myInterval(fn, wait) {
    let stop = false
    function inner(){
      if (stop) return
      fn()
      setTimeout(inner, wait)
    }

    setTimeout(inner, wait)
    return function clear(){
      stop = true
    }
  }

  let fn = () => console.log('haha')
  let clear = myInterval(fn, 1000)
  clear()
```

为什么要模拟，解决 setInterval 不准问题


