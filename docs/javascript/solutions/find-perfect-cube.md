## 找出完美立方数

> 枚举

只枚举到 N 的立方根，减少遍历

当 N 是 1000 时，遍历 10 次

笨办法也可以数到 1000，看每个数是否是完美立方

```js
function findPerfectCubes(N) {
    let result = [];
    // 计算立方根的上限
    let limit = Math.floor(Math.cbrt(N));
    
    // 枚举 1 到 limit 的整数
    for (let x = 1; x <= limit; x++) {
        let cube = x * x * x;
        if (cube <= N) {
            result.push(cube);
        }
    }
    
    return result;
}

// 测试
console.log(findPerfectCubes(1000));  // 输出: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

```