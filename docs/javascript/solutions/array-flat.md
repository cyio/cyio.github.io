# 数组扁平化

## 1. flat

flat 指定深度递归合并，默认深度 1，无限深度 Infinite

flat(0) 不做处理

## 2. JSON 转换 + 正则

思路：JSON 序列化，字符串替换中括号，再与中括号拼接，复原
1. 序列化 `"[1,2,[3,[4]]]"`
2. 移除中括号，变成一维 `"1,2,3,4"`
3. 加回首尾中括号
4. 反序列化

优化点：排除开头和结尾的括号

复杂度分析：replace 可能需要 O(n)

```js
const arr = [0, 1, 2, [-3, [4]], 5]
function flat(arr) {
  let res = JSON.stringify(arr)
  res = res.replace(/\[|\]/g, '')
  res = `[${res}]`
  res = JSON.parse(res)
  return res
}
console.log(flat(arr))
```

## 3. 递归

res 需要放在函数外面，不是纯函数

```js
const arr = [1, 2, [3, [4]], 5]
function flat(arr) {
  let res = []
  function inner(arr) {
    for (let i of arr) {
      if (i instanceof Array) {
        inner(i)
      } else {
        res.push(i) // 基础部分
      }
    }
  }
  inner(arr)
  return res
}
flat(arr)
```

## 4. reduce + 递归

```js
const arr = [1, 2, [3, [4]], 5]
const flat = arr => {
  return arr.reduce((pre, cur) => {
    // concat 可以接 value or array，在这里比解构 value 套一层方便
    // return [...pre, ...(Array.isArray(cur) ? flat(cur) : [cur])]
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
const res = flat(arr)

console.log(res)
```

扩展支持深度

concat 会解一层，所以 level = 1 时，不需要走递归
```js
const arr = [1, 2, [3, [4], [[6]]], 5]
function flat(arr, level = 1) {
    return arr.reduce((pre, cur) => {
        return pre.concat(
            Array.isArray(cur) && level > 1
                ? flat(cur, level -= 1)
                : cur
        )
    }, [])
}

// concat 会解一层
let d = [1, 2].concat([3])
console.log(d === [1, 2, 3])
//   const flat = (arr, limit = 1) => {
//     let level = 0
//     return arr.reduce((pre, cur) => {
//       let toConcat
//       if (Array.isArray(cur) && level < limit - 1) {
//         level += 1
//         toConcat = flat(cur, limit)
//       } else {
//         toConcat = cur
//       }

//       return pre.concat(toConcat);
//     }
//     , [])
//   }
const res = flat(arr, Infinity)

console.log(flat(arr, Infinity), arr.flat(Infinity))
console.log(flat(arr), arr.flat())
console.log(flat(arr, 2), arr.flat(2))
```

## 5. toString，字符串转数字是否可靠，应该可靠

```js
const arr = [0, 1, 2, [-3, [4]], 5]
function flat(arr) {
  return arr
    .toString()
    .split(',')
    .map(x => +x)
}
console.log(flat(arr))
```

[JavaScript 专题之数组扁平化 · Issue #36 · mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/36)
[面试官连环追问：数组拍平（扁平化） flat 方法实现](https://juejin.cn/post/6844904025993773063#heading-10)


## 拓展：多维数组最大深度

递归调用，可以用参数保存值

```js
let d = [1, [2, [3, [4]]], [2]]

function depth(arr) {
  let ans = 0
  function inner(arr, count = 0) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      if (Array.isArray(item)) {
        count++
        inner(item, count)
      } else {
        // 递归终止条件：遇到不是数组
        ans = Math.max(count, ans)
      }
    }  
  }
  inner(arr)
  // console.log(depths)
  return ans
}

let e = depth(d)
console.log(e)
```
