# 字符串中的第一个唯一字符

```js
function main(str) {
    let j = 0;
    let i = 0;
    let result = -1;
    while(i < str.length) {
        let char = str[i]
        if (i === 0) {
            j++
        }
        while(j < str.length && str[j] !== char) {
            if (j === str.length - 1) {
                // console.log(i, j)
                result = i
                break
            }
            j++
        }
        if (result !== -1) {
            break
        }
        i++
    }
    return result
}

console.log(main("loveleetcode"))
```

break 只能中断当前一层循环

如果可能用到 index，避免使用 for of，写起来更麻烦