# 柯里化

多个参数一次传入

```js
  const add = (a) => (b) => (c) => a+b+c
  let r = add(1)(2)(3)
  console.log(r)
```

