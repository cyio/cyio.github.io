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

  res 需要放在函数外面
  ```js
  const arr = [1,2, [3, [4]], 5]
  let res = []
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
  const flatten = arr=>{
    return arr.reduce((pre,cur)=>{
      return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }
    , [])
  }
  const res = flatten(arr);

  console.log(res)
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
