# 数字格式化

in 1234567890
out 1,234,567,890

相当于实现

```js
var num = 1450068
console.log(num.toLocaleString()) // 1,450,068
```

```js
// slice 逆序，不断更新 str，更容易
function format(num) {
  let str = '' + num
  let n = str.length
  if (n <= 3) return num

  let r = ''

  while (str.length > 3) {
    r = ',' + str.slice(-3) + r
    str = str.slice(0, str.length - 3)
  }
  if (str) {
    r = str + r
  }
  //     console.log(str)

  console.log(r)
  return r
}

format(12)
format(1234)
format(1234567890)
```

```js
// [] '890' '567' '234' '1'
// [] ',890' ',567' ',234' '1'

// 非最后一个添加,
// reverse, join

function format(num) {
  let str = '' + num
  let n = str.length
  if (n <= 3) return num

  let arr = []
  // 如何高效每 3 个分割
  for (let i = n - 1; i >= 0; i = i - 2) {
    //       console.log(i)
    if (i - 2 > 0) {
      arr.push(str.slice(i - 2, i + 1))
    } else {
      arr.push(str.slice(0, i))
    }
  }

  let r = arr.reverse().join(',')
  console.log(r)
  return r
}

format(12)
format(1234)
format(1234567890)
```

```js
// !!! not work
// 1. string 没有 reverse 方法
// 2. splice 由于改变了 str，后续插入位置其实变了
function format(num) {
  let str = '' + num
  //     str = str.reverse()
  let n = str.length
  for (let i = n - 1; i >= 0; i = i - 2) {
    str.splice(i, 0, ',')
  }
  console.log(str)
}

format(1234)
```

[js中进行数字,超大金额(千位符)格式化处理](https://juejin.cn/post/6844904040912912397)

