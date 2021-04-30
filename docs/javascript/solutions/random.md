# 随机 去重

生成给定区间的随机数
```js
  // 2 5
  function random(lower, higher) {
    // return lower + Math.floor(Math.random * (higher - lower))  // 左闭右开
    return lower + Math.floor(Math.random * (higher - lower + 1)) // 左闭右闭
  }
```

随机生成一个 0 ~ 99 的数，或者数组长度为 n 的随机索引

随机生成 1-5 整数
```js
Math.floor(Math.random() * 100)

Math.floor(Math.random() * arr.length)

Math.floor(Math.random() * (y - x), x)
```

随伪机排序
```js
  function randomArr(arr){
    return arr.sort((a, b) => 0.5 - Math.random())
  }
  let arr = [1, 2, 4, 5, 6]
  randomArr(arr)
  console.log(arr)
```

有一个长度为 100 的数组，如何从中随机挑选 50 个不重复元素，组成一个新的数组？

```js
  // getRandomArrElement([1, 2, 3, 4], 2)
  function getRandomArrElement(arr, count) {
    let ret = []
    while(ret.length < count) {
      let randomIndex = Math.floor(Math.random() * arr.length)
      ret.push(arr.splice(randomIndex, 1)[0])
    }
    return ret
  }

  let r = getRandomArrElement([1, 2, 3, 4], 2)
  console.log(r)
```

洗牌算法
```js
  function rangeRandomIndex(i, j) {
    return Math.floor(i + Math.random() * (j - i))
  }
  function swap(arr, i, j) {
    let tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
  }
  function shuffle(arr) {
    let _arr = [...arr]
    for (let i = 0; i < _arr.length; i++) {
      swap(_arr, i, rangeRandomIndex(i, _arr.length - 1))
    }
    return _arr
  }
  
  random([1, 2, 3])
```
[384. 打乱数组 - 力扣（LeetCode）](https://leetcode-cn.com/problems/shuffle-an-array/)
