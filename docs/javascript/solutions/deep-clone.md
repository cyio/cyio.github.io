# 深拷贝

优化点：利用 proxy 监听数据变化，仅对变化的属性进行深拷贝（immer）

for in 可以遍历数组

对象循环引用不处理，会导致栈溢出，解决是以 obj 为 key，newObj 为 value，保存到 map。遍历过直接返回

Map => WeakMap
```js
// 实现对象深拷贝，考察点：isObject for-in 递归
// 简化，不考虑数组
  let a1 = {
    a: 1,
    b: {
      c: {},
      d: [1, { e: 1}],
      e: null
    }
  }

  a1.f = a1

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
  function deepClone(data, map = new Map()) {
    let res = Array.isArray(data) ? [] : {}
    if (isObject(data)) {
      if (map.get(data)) return map.get(data)
      map.set(data, res)
    }
    for (let i in data) {
      res[i] = Array.isArray(data[i]) || isObject(data[i]) ? deepClone(data[i], map) : data[i]
    }
    return res
  }

  let a2 = shallowClone(a1)
  let a3 = deepClone(a1)

  console.log('object shallowClone', a1.b.c === a2.b.c)    // expect true
  console.log('object deepClone', a1.b.c === a3.b.c)    // expect false
  console.log('array shallowClone', a1.b.d === a2.b.d)    // expect true
  console.log('array deepClone', a1.b.d === a3.b.d)    // expect false
```

## why WeakMap

Map 由两个数组实现，[keys] [values]

两个问题：
1. set 和 search 是 O(n)
2. 内存泄漏，数组会无限期维护引用，阻止垃圾回收

解决：弱引用，没有引用时，可被垃圾回收
[WeakMap - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
[如何写出一个惊艳面试官的深拷贝?](https://juejin.cn/post/6844903929705136141)
