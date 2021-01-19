# 数组扁平化

1. flat

  flat 指定深度递归合并，默认深度 1，无限深度 Infinite

2. 正则

  JSON序列化，字符串替换中括号，再与中括号拼接，复原

  优化点：排除开头和结尾的括号

  ```js
  const arr = [0, 1, 2, [-3, [4]], 5]
  function flat(arr) {
    let res = JSON.stringify(arr)
    res = res.replace(/\[|\]/g, '')
    res = `[${res}]`
    res = JSON.parse(res)
    return res
  }
  console.log(flat(arr))
  ```

3. 递归

  res 需要放在函数外面，不是纯函数
  ```js
  const arr = [1,2, [3, [4]], 5]
  let res = [] // 需要定义在外面
  function flat(arr){
    for (let i of arr) {
      if (i instanceof Array) {
        flat(i)
      } else {
        res.push(i)
      }
    }
  }
  flat(arr)
  console.log(res)
  ```

4. reduce + 递归

  ```js
  const arr = [1, 2, [3, [4]], 5]
  const flatten = arr => {
    return arr.reduce((pre, cur) => {
      // concat 可以接 value or array，在这里比解构 value 要套一层方便
      // return [...pre, ...(Array.isArray(cur) ? flatten(cur) : [cur])]
      return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }
    , [])
  }
  const res = flatten(arr);

  console.log(res)
  ```

  支持深度
  ```js
  const arr = [1, 2, [3, [4], [[6]]], 5]
  const flatten = (arr, limit = 1) => {
    let level = 0
    return arr.reduce((pre, cur) => {
      let toConcat
      if (Array.isArray(cur) && level < limit - 1) {
        level += 1
        toConcat = flatten(cur, limit)
      } else {
        toConcat = cur
      }

      return pre.concat(toConcat);
    }
    , [])
  }
  const res = flatten(arr, Infinity);

  console.log(flatten(arr, Infinity), arr.flat(Infinity))
  console.log(flatten(arr), arr.flat())
  console.log(flatten(arr, 2), arr.flat(2))
  ```

5. toString，字符串转数字是否可靠，应该可靠

  ```js
  const arr = [0, 1, 2, [-3, [4]], 5]
  function flat(arr) {
    return arr.toString().split(',').map(x => +x)
  }
  console.log(flat(arr))
  ```
[JavaScript专题之数组扁平化 · Issue #36 · mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/36)
