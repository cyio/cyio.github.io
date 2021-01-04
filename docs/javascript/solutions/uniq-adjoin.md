# 相邻元素去重

- 不相邻的要保留
- 借助中间数组

```js
  // [2, 6, 6, 3, 6, 7]
  // 2 6 x 3

  function uniqAdjoin(arr) {
    let res = [arr[0]]
    let i = 1
    while(i < arr.length) {
      if (arr[i] !== res[res.length - 1]) {
        res.push(arr[i])
      }
      i += 1
    }
    
    console.log(res)
    return res
  }

  uniqAdjoin([2, 6, 6, 3, 6, 7])
```
