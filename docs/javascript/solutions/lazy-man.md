# lazyman

```js

  // quene next chain

  function LazyMan(name) {
    let quene = []
    let _lazyman = {
      next() {
        let fn = quene.shift()
        console.log(fn)
        if (fn) {
          fn()  
        }
      },
      sayHi() {
        quene.push(() => {
          console.log('Hi! This is ', name)
          this.next()
        })
        return this
      },
      eat(arg) {
        quene.push(() => {
          console.log('Eat ' + arg)
          this.next()
        })
        return this
      },
      sleep(wait) {
        quene.push(() => {
          setTimeout(() => {
            console.log('wake up after ', wait)
            this.next()
          }, wait * 1000)
        })
        return this
      },
      sleepFirst(wait) {
        quene.unshift(() => {
          setTimeout(() => {
            console.log('wake up after ', wait)
            this.next()
          }, wait * 1000)
        })
        return this
      },
      
    }

    _lazyman.sayHi() // 不一定先执行，先放到队列

    setTimeout(() => {
      _lazyman.next()
    })

    return _lazyman
  }

  // test
  // LazyMan("kakao")
  // LazyMan("kakao").eat("apple").eat("banana")
  // LazyMan("kakao").sleep(3).eat("apple")
  // LazyMan("kakao").sleepFirst(3).eat("apple")
```

[前端面试中的LazyMan](https://juejin.cn/post/6844903577756893191)
