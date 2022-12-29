# 深拷贝

优化点：利用 proxy 监听数据变化，仅对变化的属性进行深拷贝（immer，增量）

for in 可以遍历数组

对象循环引用不处理，会导致栈溢出，解决是以 obj 为 key，newObj 为 value，保存到 map。遍历过直接返回

循环引用是指引用自身？

Map => WeakMap

考察点：
- 对象遍历


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
    // 处理循环引用
    if (isObject(data)) {
      if (map.has(data)) return map.get(data)
      map.set(data, res)
    }
    for (let i in data) {
      let cur = data[i]
      // res[i] = Array.isArray(cur) || isObject(cur) ? deepClone(cur, map) : cur
      res[i] = Array.isArray(cur) || isObject(cur)
          ? deepClone(cur, map) 
          : cur
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

[如何写出一个惊艳面试官的深拷贝?](https://juejin.cn/post/6844903929705136141)

structuredClone：navive api, chrome99+
![image.png](https://img.cnb.workers.dev/?url=http://ww2.sinaimg.cn/large/4e5d3ea7ly1h1qa6yfkagj21uo1uotr7.jpg)