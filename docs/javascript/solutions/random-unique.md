# 随机 去重

```js
  function randomArr(arr){
    return arr.sort((a, b) => 0.5 - Math.random())
  }
  let r = randomArr([1, 2, 4, 5, 6])
  console.log(r)
```

```js
const uniqueArr = function (arr) {
  return [...new Set(arr)]
}
```
