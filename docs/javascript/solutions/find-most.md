# 找出出现次数最多元素

可能有多个并列，输出数组

```js
  function findMost(arr){
    let map = new Map()
    for(let i = 0; i < arr.length; i++) {
      let count = (map.get(arr[i]) || 0) + 1
      map.set(arr[i], count)
    }
    
    let maxCount = 0
    let result = []
    for (let [key, count] of map){
      if (count > maxCount) {
        maxCount = count
        result = [key]
      } else if (count === maxCount) {
        result.push(key)
      }
    }

    return result

  }

  console.log(getMost(['1', '2', '3', '3', '1']))
```
