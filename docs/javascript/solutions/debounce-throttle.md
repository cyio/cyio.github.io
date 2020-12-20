# 节流 防抖

节流
```js
  function throttle(fn, wait = 0) {
    let tId = null
    return function(){
      if (tId) return

      const context = this
      const args = arguments
      tId = setTimeout(function(){
        // 保持原函数 this 和 参数
        fn.apply(context, args)
        tId = null
      }, wait)
    }
  }

  // test 对比才能看出效果
  window.addEventListener('resize', () => console.log('1'))
  window.addEventListener('resize', throttle(() => console.log('resize'), 400))
```

防抖
```js
  function debounce(fn, wait = 0) {
    let tId = null
    return function() {
      if (tId) {
        clearTimeout(tId)
      }
      const context = this
      const args = arguments
      tId = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }

  // test
  el.addEventListener('input', debounce(() => console.log('input do'), 400))
```
[debounce and throttle](https://codepen.io/cyio/pen/oNzzJOp?editors=1010)
