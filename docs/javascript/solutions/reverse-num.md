考虑溢出，比如要求 溢出时返 0

1. 字符串，仅正整数
```js
function main(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''))
    return reversed > Number.MAX_SAFE_INTEGER ? 0 : reversed
}
```


2. 数学计算
```js
function main(num) {
    let reversed = 0;
    while (num !== 0) { // 可以是小数，但不能是 0，0 说明除尽了
        const digit = num % 10; // 取最后一位
        reversed = reversed * 10 + digit; // 逐位提升
        num = Math.trunc(num / 10); // 截断小数
    }
    return reversed;
}

console.log(main(123)); // 输出 321
console.log(main(-123)); // 输出 -321
```