## two sum 两个循环，用 map 只循环一次

## 找出唯一数字

```js
// let of 方法本身不提供 index，需要遍历 a.keys 或 a.entries，后者同时可以访问 value
let a = [1, 2, 3, 2, 1]

for (let [index, value] of a.entries()) {
	let copy = a.slice()
	delete copy[index]
	if (!copy.includes(value)) {
		console.log('got it', value)
		break
	}
}
```
