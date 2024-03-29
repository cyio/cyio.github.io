# 常用方法
[[toc]]

## console

```js
.log
.error // 红色
.info
.warn // 黄色
```

### 子字符串

```js
// 支持子字符串，
// %s string
// %d number
console.log('this is %s %d', 'Jack', 20);
// this is Jack 20
```

## history

> 不能查看用户浏览了哪些页面

```js
history.go(-1) // 向后跳转一页 等价于 history.forward()
history.go(1) // 向前跳转一页，等价于 history.back()
hisroty.go('google.com') // 跳转到包含字符串的页面，若不存在，什么也不做
```

push pop 是 HTML5 新增方法，专用于单页应用，骗用户用的

```js
history.pushState({}, 'Page Title', '/')

// example
window.history.pushState({}, null, replaceUrlParam('to', this.scene));

function replaceUrlParam(paramName, paramValue, url = window.location.href) {
  if (paramValue == null) {
    paramValue = '';
  }
  const pattern = new RegExp(`\\b(${paramName}=).*?(&|#|$)`);
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, `$1${paramValue}$2`);
  }
  url = url.replace(/[?#]$/, '');
  return `${url +
    (url.indexOf('?') > 0 ? '&' : '?') +
    paramName}=${paramValue}`;
}
```

## date

```js
function timeFormat(timestamp) {
  var date = new Date(parseInt(timestamp) * 1000)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minite = date.getMinutes()
  var second = date.getSeconds()
  return year + '年' + month + '月' + day + '日'
  //return year+"."+month+"."+day;
}
```

## 通用的时间函数

[JavaScript date function - php.js](http://phpjs.org/functions/date/)

示例：

```js
date('Y\\年m\\月d\\日', 1062402400)
// "2003年09月01日"

date('m\\月d\\日 l', 1062402400)
// "09月01日 星期一"

date('Y.m.d', this.updated_at)
//  2003.09.01
```

`date`存储的是`value`值，以毫秒（millisecond）为单位，可用`getTime()`获取。

```js
new Date('1970-01-01').getTime()
// 0
new Date('1970-01-02').getTime()
// 86400000
new Date('1970-02-01').getTime()
// 2678400000
new Date('1970-03-01').getTime()
// 5097600000
2678400000 - 86400000
// 2592000000
5097600000 - 2678400000
// 2419200000
86400000 * 30
// 2592000000
86400000 * 28
// 2419200000
aDay = new Date(24 * 60 * 60 * 1000).getTime()
// 86400000
aMonth = new Date(24 * 60 * 60 * 1000 * 30).getTime() // 不同月天数不一样，这里是30天
// 2592000000
anHour = new Date(60 * 60 * 1000).getTime()
// 3600000
aMinute = new Date(60 * 1000).getTime()
// 60000
jsDate = new Date('2016-01-21').getTime() // 日月如为个数，前面的0不可省略
phpDate = new Date('2016-01-21').getTime() / 1000

getFullYear() // getYear()是被废弃的用法
getMonth() // 获取月份(0-11,0代表1月,用的时候记得加上1)
Date.parse(date) // 只能精确到秒，毫秒将用0来代替
```

目前 F7 项目中引入的 date 时间格式化函数，来自 PHP，时间以秒为单位，在用 JS 处理时要注意转换。

[JavaScript time values: dates as milliseconds since 1970-01-01](http://www.2ality.com/2014/02/time-values.html)

[js 时间戳与日期格式之间的互转 - 脑细胞 - SegmentFault](https://segmentfault.com/a/1190000000481753)

[时间单位换算,单位换算,单位转换](http://cn.bestconverter.org/unitconverter_time.php)

[Exact Age Calculator](http://codepen.io/Codeman12323/pen/HqCyw/)

## 倒计时 countdown

给定数字，如果是个位数，前面加 0

## 时区

nodejs 端输入`new Date()`打印出来是标准时区时间，而`getHours()`执行出来是系统环境时区

```js
let dt = new Date()
let hr = dt.getHours() - dt.getTimezoneOffset() / 60
dt.setUTCHours()
```

## location

```js
location.assign('http://baidu.com') // 等价于 location = url
location.replace('http://baidu.com')
```

两个方法都会载入一个新地址，区别是`replace`会抹掉当前页的历史记录（之前的不影响）。

现在浏览器只允许 click 触发的 js 里执行 window.open，避免了恶意弹窗

## map

```js
//Example: Calculate 15% tip on a list of bills and order them
//No keys used
//Reduce simply creates a sorted array

const mapper = item => Math.round(parseFloat(item) * 1.15 * 100) / 100
const reducer = (intermediate, current) => {
  intermediate.push(current)
  return intermediate.sort()
}
let initial = []
const data = '14.22 15.28 19.42 16.80 11.96'.split(' ')
console.log(data.map(mapper).reduce(reducer, initial))
```

[Simple implementation and explanation of Map Reduce using Javascript](https://gist.github.com/johnhenry/5487382)

## math

- 取模/取余/取个位数 %
- `Math.floor(x)`取小于或等于 x 的最大正整数，比如用来取十位数
  - floor ceil 一个地板，一个天花板，一个往小取，一个往大取，正负规则一样
  - `Math.trunc(x)`取整，ES6 新增，仅去掉小数部分
- `Math.sqrt(4)` // square root of 4 is 2
- `3.1415926.toFixed(2)` // 3.14 四舍五入，不传参数时表示 0，即去掉小数部分
- 浮点数(float)计算不精确，可先转换成整数。应用，如价格计算，最好后端返回数据为分，前端更好处理

    ```js
    0.2 +
      0.1(
        // 0.30000000000000004
        0.2 * 10 + 0.1 * 10
      ) /
        10
    // 0.3
    ```

    浮点指的是带有小数的数值，浮点运算即是小数的四则运算
    计算机里没有小数点，只能转换为类似科学计数法的表达方式，有精度限制

    > 通常，取模运算也叫取余运算，它们返回结果都是余数.rem（取余）和 mod（取模）唯一的区别在于： 当 x 和 y 的正负号一样的时候，两个函数结果
    > 是等同的；当 x 和 y 的符号不同时，rem 函数结果的符号和 x 的一样，而 mod 和 y 一样。

### 获取两个值之间的随机数/整数

- 分析：
  - 大于最小值数
  - 但小于最大值
  - 随机性
- 实现：
  - 基数是最小值
  - `Math.random` 包括 0 但不包括 1
  - 结果小数可以用 `floor` 或 `trunc`处理，但不能用 `ceil`，不满足小于最大值

MDN random 上有，不要自己推了

```js
// 获取随机数/整数
// > min  
// min + x < max
// x < max - min
// x = Math.random * (max - min)
function getRandomInt(min, max) {
  // return min + Math.random() * (max - min)
  return Math.floor(min + Math.random() * (max - min))
}
console.log(getRandomInt(2, 5))

// 编写函数fn， 该函数有一个参数n（数字类型），返回值是一个数组，该数组内是n个随机不重复的整数，且整书取值范围是[2, 32]
// 参数 n 不一定是整数
function fn(n) {
  let min = 2
  let max = 32
  let length = max - min + 1
  if (n < 1 || n > length) {
    // 2 到 32 间取，最少是1，最多是 length，可能想象 2 到 32 的整数数组，个数就是 length
    return
  }
  let random
  let set = new Set()
  n = Math.round(n)
  while (set.size < n) {
    random = Math.floor(min + Math.random() * (max - min))
    if (!set.has(random)) {
      set.add(random)
    }
  }
  return [...set]
}
console.log(fn(4))
// 程序模拟抛硬币，计算概率 未指派
function throwCoins(times) {
  let r
  let output = []
  for (let i = 0; i < times; i++) {
    r = getRandomIntInclusive(0, 1)
    if (r === 0) {
      output.push(r)
    }
  }
  console.log('0 出现的概率：' + output.length / times)
}

throwCoins(1000000)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
```

## setTimeout(待执行函数, 毫秒)

- 最好赋给变量
- 取消执行 `clearTimeout(变量名)`

```js
var up = setTimeout(update(), 0)
function update() {
  console.log('updated')
}
clearTimeout(up)

const delay = (t, f) => setTimeout(f, t)
delay(500, () => alert(‘hey!’))
```

- 尽快执行，不能保证，浏览器负责排序
  在 JavaScript 中没有任何代码是立刻执行的，但一旦进程空闲则尽快执行（表面看是立刻执行）。

- 何时加入队列，而非实际执行
  定时器指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码。

- 最佳实践
  ```js
  (function foo() {
      ...
      setTimeout(foo, delay);
  })();
  ```

## switch

- default 位置没有限制
- case 中不写 break 会继续在其它 case 中执行，即使 case 条件并不满足
- 函数中的 return 可以帮助提前返回
- 建议避免 switch 贯穿，凡是有 case 的地方，一律加上 break。

```js
function compare(n, m) {
  switch (n - m) {
    default:
      return 'not equal'
    case 0:
      return 'equal'
  }
}
console.log(compare(2, 3))
```

## `requestAnimationFrame()`

IE10+

```js
// Setup a timer
var timeout

// Listen for resize events
window.addEventListener(
  'scroll',
  function(event) {
    console.log('no debounce')

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function() {
      // Run our scroll functions
      console.log('debounced')
    })
  },
  false
)

// helper
/**
 * Debounce functions for better performance
 * @param  {Function} fn The function to debounce
 */
var debounce = function(fn) {
  // Setup a timer
  var timeout

  // Return a function to run debounced
  return function() {
    // Setup the arguments
    var context = this
    var args = arguments

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function() {
      fn.apply(context, args)
    })
  }
}
```
