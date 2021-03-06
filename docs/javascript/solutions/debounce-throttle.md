# 节流 防抖

- 如何判断正在执行 tId
- apply 还是 call，arguments => apply
- 注意，内部用匿名函数即可，并不需要递归

节流，正在执行，忽略
```js
  function throttle(fn, wait = 0) {
    let tId = null
    return function(){
      if (tId) return

      // const context = this
      // const args = arguments
      // tId = setTimeout(function(){
      tId = setTimeout(() => {
        // 保持原函数 this 和 参数
        // fn.apply(context, args)
        fn.apply(this, arguments)
        tId = null
      }, wait)
    }
  }

  // test 对比才能看出效果
  let fn = throttle((a) => console.log('resize', a), 400)
  window.addEventListener('resize', () => console.log('1'))
  window.addEventListener('resize', () => { fn('thro arg') })
```

防抖，上一个定时器还未执行，取消掉。重新计时
```js
  function debounce(fn, wait = 0) {
    let tId = null
    return function() {
      if (tId) {
        clearTimeout(tId)
      }

      // const context = this
      // const args = arguments
      // tId = setTimeout(function() {
      tId = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  }

  // test
  el.addEventListener('input', debounce(() => console.log('input do'), 400))
```
[debounce and throttle](https://codepen.io/cyio/pen/oNzzJOp?editors=1010)
