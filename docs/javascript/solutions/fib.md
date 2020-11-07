
动态规划 空间换时间
```js
  // 0, 1, 2, 3, 5
  // 1, 2, 3, 4, 5
   function fib(n){
     const arr = new Array(n + 1).fill(null)
     arr[0] = 0
     arr[1] = 1
     for (let i = 2; i < arr.length; i++){ // 注意循环起点
       arr[i] = arr[i - 1] + arr[i - 2]
     }
     return arr[n]
   }
   console.log(fib(5))
```
