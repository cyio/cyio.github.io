# 数组 Array

[toc]

## 独有 length 属性

设置更大的 length 值，不会分配更多空间，设置较小的 length 值，会把等于大于新 length 值的属性删掉。

## 查找

```js
const names = ['David', 'Raymond']
names.indexOf('David') // 返回 index，-1 时不存在

names.includes('David')

names.find(name => name !== 'Mike') // 符合条件的第一个，都不符合时返回 undefined
```

## 字符串表示

```js
// 默认连接符是逗号
names.join()
names.toString()
```

## 由已有数组创建新数组

`concat`合并多个数组创建为一个新数组
`splice`截取一个数组的子集创建一个新数组（有副作用，不推荐）

push 把数组参数当作单个元素追加，并返回 length，而 concat 是分别追加，返回新数组，不改变原数组。

```js
arr.push([1, 2])
arr.concat([1, 2])
```

## 添加

`push() unshift()`

## 删除

`shift pop` 转移，取出

- 分别删除并返回数组的第一个和最后一个元素
- 数组为空时不操作，返回 undifined

## 中间插入

```js
let nums = [1, 2, 3, 7, 8, 9]
let insert = [4, 5, 6]
nums.splice(3, 0, insert) // print 1, 2, 3, [Array] ...
nums.splice(3, 0, 4, 5, 6) // print 1, 2, 3, 4, 5, 6 ...
```

## 替换

### 当 replaceValue 是字符串时，美元符有特殊作用

```js
// $$ 转义自身
// $` 和 $' 分别表示searchValue之前和之后的内容`

'firefox'.replace('re', '$`') // "fififox"
```

## 类数组转换

DOM 数组本质上不是 Array，是 NodeList。 你可以通过`Array.prototype.slice.call(nodeList, 0)`把节点全部复制到 Array 再操作。

```js
var $A = function(obj) {
  // 相当于 [].slice.call(obj)
  return Array.prototype.slice.call(obj)
}

// Example usage:
$A(document.getElementsByTagName('li'))

// ES6 新增方法，支持 string/map/set
Array.from(arrayLike)
```

[Array-like Objects in JavaScript | ShiftEleven](https://shifteleven.com/articles/2007/06/28/array-like-objects-in-javascript/)
使用示例： 把 document 等方法获取的节点列表转换成数组，然后用 forEach 等数组方法处理
[A Pen by Wes Bos](http://codepen.io/wesbos/pen/zrLjYq)
[Ditch the [].forEach.call(NodeList) hack](https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/)

## 分解处理（归并）

`array.reduce(处理函数(累加值，当前值)，初始值)`

- 每`reduce`一次，把累加值和当前值作为参数传入处理函数
- 初始值可选，没有时使用数组的第一个值作为初始值，并从第二个值开始累加。**即从第二位开始累加**
- 替代`filter`加`map`，`filter`可以在`reduce`中用`if`替代
- 不好想，最直观把每次运算写下来
- 适用限于关联运算，如` +``* `，其它用途有不明确参数、隐式意图等问题

  ```js
  // values 表示剩余参数，由第一个参数外的的值构成的数组
  // 只有一个参数时，values 是空数组
  const sum = (init = 0, ...values) =>
    values.reduce((acc, value) => acc + value, init)
  const result = sum(1)
  console.log(result)

  // 求和
  // 1. for
  let nums = [1, 2, 3]
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  console.log(total)
  // 2. reduce
  let total = nums.reduce((pre, cur) => pre + cur)
  ```

  ```js
  var x = []
  ;[3, 2, 1].reduce(i => x.push(i))
  console.log(x)
  ```

  注意问的是 x，不是 reduce 结果。注意 push 返回的是 length

[Array methods](https://javascript.info/array-methods)
[The fate of reduce() in Python 3000](https://www.artima.com/weblogs/viewpost.jsp?thread=98196)

## 迭代方法

1. 是想知道是否满足条件，还是需要满足条件的数据？
2. 部分满足，还是全部？
   every() 全真时返回真
   some() 或真
   filter() 真数组，以上是做布尔值判断，与 map 的主要不同
   map() 结果数组
   forEach() 遍历运行指定函数，无返回值，有副作用，不推荐

## 排序

- `arr.sort([compareFunction])` 默认的比较函数会将比较元素视为字符串，所以通常要传入自定义比较函数
- number 上两位数就不准了，需要传入 compare function
- compareFunction(a, b) 要求返回与 0 进行比较，`result > 0` 时，输出`b a`。也就是，默认是升序。
- undefined 总会排到最后，符合预期
- null 需要注意

```js
const arr = [
  {
    name: 'Apple'
  },
  {
    name: 'Google'
  },
  {
    name: 'Baidu'
  }
]
console.log(
  arr.sort(
    (a, b) => a.name > b.name // 字母顺序
  )
)

const arr = [1, 20, 10, 30, 22, 11, 55, 24, 31, 88, 12, 100, 50]
console.log(arr.sort((a, b) => a - b)) // 为什么这里不能写成 a > b，因为返回布尔值，然后布尔值跟 0 比较，false < 0，于是 20 排在 10 前面

// a > b 正确写法
arr.sort((a, b) => {
  if (a < b) return -1
  if (a > b) return 1 // 调换
  if (a === b) return 0
})
```

[How not to sort an array in JavaScript | Phil Nash](https://philna.sh/blog/2019/08/26/how-not-to-sort-an-array-in-javascript/)

## 处理方法分辨

slice 切片，浅复制 {起点，终点(不含)} 可用负数表示倒数（最后一位是 -1，也就是数组中只有一个 0）
splice 拼接，{起点，裁切个数，插入项}，返回裁切内容（会修改原数组，不推荐使用）

- 只写起点，不写剪切个数，会从起点起全部剪切

* slice 详解
  起点和结束点，都可以省略，相当于完整复制
  只有一个参数时，是起点

* 都可以按需返回指定数组的指定范围
* 区别前者是浅复制
* 而后者会修改原数组，相当于剪切
* 后者比前者多个字母 p，拼接/替换的意思

* 对象的属性名必须是字符串，数组的索引在内部也会被转换为字符串，如
  let arr = ['alice']
  arr['0']

## 综合练习

```js
// map
let arr = [1, 2]
const map = (arr, fn) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }
  return newArr
}
console.log(map(arr, x => x * 2))

// filter
let arr = [1, 2, 3, 4, 5]
const filter = (arr, fn) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(filter(arr, x => x % 2 === 1))

// 给定一个数组，求数组里面奇数的平方和
const arr = [1, 2, 3, 4, 5]

const result = arr
  .filter(x => x % 2 !== 0)
  .map(x => x * x)
  .reduce((a, y) => a + y)

console.log(result)

let first = word => word[0]
let words = ['for', 'your', 'information']
console.log(words.map(first).join(''))
```

## 复制 vuex 数组

```js
computed: {
  league () {
    return store.state.league
  },
  filterItems () {
    let items = this.league.filter(league => league.matches.filter(this.filterMatch).length > 0)
    // deep clone vuex array
    items = items.map((b, idx) => Object.assign({ index: idx }, b))
    return items.map((item, index) => {
      item.matches = item.matches.filter(this.filterMatch)
      return item
    })
  }
},
```

## 数组复制的 n 种方法（按性能排序）

```js
const names = ['Jon', 'Jacob', 'Jeff']

const copy1 = names.slice()
const copy2 = [].concat(names)
const copy3 = Object.values(names)
const copy4 = [...names]
const copy5 = Array.of(...names)
const copy6 = JSON.parse(JSON.stringify(names))
const copy7 = names.map(i => i)
const copy8 = Object.assign([], names)
```

## from 数组生成

```js
// 生成 6 - 24，v 初始值是 undefined
Array.from({ length: 19 }, (v, i) => i + 6)
```

## 移动元素位置

```js
let arr = [1, 2, 3, 4]

function move(arr, oldIndex, newIndex) {
  arr = [...arr] // 不改变原数组
  const newValue = arr[newIndex]
  const [oldValue] = arr.splice(oldIndex, 1)
  arr[newIndex - 1] = oldValue
  arr.splice(newIndex - 1, 0, newValue)
  return arr
}
console.log(move(arr, 1, 2))
console.log(arr)
```

## 跳出循环

- 代码简短，用 for 配合 break
- 代码较长，建议定义变量标记
