# 随机 去重

```js
  function randomArr(arr){
    return arr.sort((a, b) => 0.5 - Math.random())
  }
  let r = randomArr([1, 2, 4, 5, 6])
  console.log(r)
```

优先用 set  或 for Map 方法
```js
// 1. set
const uniqueArr = function (arr) {
  return [...new Set(arr)]
}
// 2. for indexof/includes
// 2.1 for Map
  function unique(arr){
    let map = new Map()
    let res = []
    for(let i of arr){
      if (!map.has(i)) {
        map.set(i, 1)
        res.push(i)
      }
    }
    return res
  }
  let r = unique([1, 2, 4, 3, 2, 1, '1', '1'])
  console.log(r)
// 3. sort 相邻元素比对
  function unique(arr){
    let list = arr.sort()
    let res = []
    for(let i = 0, len = list.length; i < len; i++) {
      if (i > 0 && list[i] === list[i - 1]){
        continue
      } 
     
      res.push(list[i])
    }
    return res
  }
  let r = uniq([1, 2, 4, 3, 2, 1, '1', '1'])
  console.log(r)
```
