# 扩展符

- 数据类型不一定有效，使用逻辑判断，否则会报错

```js
// 数组不一定有效

let b
let result = [...b || []]
console.log(result)

// 对象不一定有效
// `{...false}` (and undefined/null/etc) is just `{}`.
const shipping = {
  ...defaultAddress,
  ...person && person.address // { ...false } == {}
}
```
