方案1：字符串操作
```js
let url1 = 'url?a=1&b=2'
// output: {a: 1, b: 2}

function parse(url) {
    let ind = url.search('\\?')
    // 或 let ind = url.search(/\?/); // 使用正则表达式查找 '?'
    let str = url.slice(ind + 1)
    let arr = str.split('&')
    let obj = {}
    console.log(arr)
    arr.forEach(item => {
        let [key, value] = item.split('=')
        obj[key] = value
    })
    return obj
}

let d = parse(url1)
console.log('d', d)

```

方案2：正则匹配