# 深拷贝

优化点：利用 proxy 监听数据变化，仅对变化的属性进行深拷贝（immer）
```js
// 实现对象深拷贝，考察点：isObject for-in 递归
// 简化，不考虑数组
  let a1 = {
    a: 1,
    b: {
      c: {},
      d: [1, 2],
      e: null
    }
  }

  function shallowClone(obj) {
    let result = {}
    for (let i in obj) {
      result[i] = obj[i]
    }
    return result
  }
  function isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }
  function deepClone(obj) {
    let result = {}
    for (let i in obj) {
      result[i] = isObject(obj[i]) ? deepClone(obj[i]) : obj[i]
    }
    return result
  }

  let a2 = shallowClone(a1)
  let a3 = deepClone(a1)

//   a1.b.c === a2.b.c // true
//   a1.b.c === a3.b.c // expect false
  console.log(a1, a3)
```
