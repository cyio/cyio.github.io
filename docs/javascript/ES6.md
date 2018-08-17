# ES6
## 模块
* 特征：
  1. 总是在严格模式下
  2. 有一个项级域而不是全局域
  3. 能从其他模块导入绑定
  4. 能将绑定导出
* 为什么
JS 就是把值指给变量，那么如何管理变量呢，函数有作用域，互相不能访问，要共享的话，只能上层（全局）定义变量
模块能清晰定义如何共享，哪些可访问（模块所用域）

命名冲突时，用`as`关键字重命名模块
随时可以导入导出模块

* 引用时使用完整资源路径
* 默认 defer，可设置 async，inline scrpit 也可以

### 兼容性
微信 android 不支持，iOS 因为跟 safari 一样，所以支持
IE 被放弃了，不支持
UC android 不支持

[es module vue](https://codepen.io/cyio/pen/mjPzqJ)
[jspm.io - Native ES Modules CDN](https://jspm.io/)
## 箭头函数
* 当使用箭头函数创建普通对象时，你总是需要将对象包裹在小括号里
```js
// 为与你玩耍的每一个小狗创建一个新的空对象
var chewToys = puppies.map(puppy => {});   // 这样写会报Bug！
var chewToys = puppies.map(puppy => ({})); //
```    

## ES5 中的 this 继承问题
```js
{
  ...
  addAll: function addAll(pieces) {
    var self = this;
    _.each(pieces, function (piece) {
      self.add(piece);
    });
  },
  ...
}
```

> 在这里，你希望在内层函数里写的是`this.add(piece)`，不幸的是，内层函数并未从外层函数继承 this 的值。在内层函数里，this 会是 window 或 undefined，临时变量 self 用来将外部的 this 值导入内部函数。（另一种方式是在内部函数上执行`.bind(this)`，两种方法都不甚美观。）

箭头函数内的 this 值继承自外围作用域
```js
// ES6
{
  ...
  addAll: function addAll(pieces) {
    _.each(pieces, piece => this.add(piece));
  },
  ...
}
```

> 在 ES6 的版本中，注意 addAll 方法从它的调用者处获取了 this 值，内部函数是一个箭头函数，所以它继承了外围作用域的 this 值。

结论：箭头函数和 function 要配合使用，无法完全弃用 function

* 函数表达式称为 lambda 函数，λ-calculus，演算的意思

```js
'use strict'
// 打印i=几，每隔500毫秒迭代，第一次打印需立刻执行 
function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function test() {
  for (let i = 0; i < 10; i++) {
    await sleep(500);
    console.log(`i=${i}`);
  }
}

test().then(() => console.log('done'));

// 类版本，props 就是函数参数
class Sleep {
	constructor(props){
		this.ms = props | 0
	}

	then(resolve, reject) {
		setTimeout(resolve, this.ms)
	}
}

await new Sleep(500)
await new Sleep
```

class 实际上是函数
不会自动提升，因此使用前需先声明
constructor 只在实例化时被调用
使用 extends 关键字创建子类
与一般函数写法的比较
静态方法只能由未实例化的类调用，常用作工具函数
```
class Name {}
function Name ()

let func = function(){}
let func = function func(){}

let clsName = class {}
let clsName = class clsName {}
```

模板字面量
* 不支持纯字符串
```js
var who = 'world'; var str = `Hello ${who}`;
```

* fetch 
支持情况：微软家族和苹果家族均不支持，因此尚属早期

## for-of 循环
20年前，for i++
ES5， forEach
ES6， for-of

* 支持类数组，字符串，Set，Map
* 相比于 forEach 支持搭配 break return
* for-in 为普通对象设计，不适用数组
* 遍历对象用 for-in，或 Object.keys()

```js
// 计算一些数字的均值
export function average(numbers=[]) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum / numbers.length;
}

// 字符串拼接
var data = [1, 2, 3]

function fn () {
  let ret = ''
  for (let value of data){
    ret += value 
  }
  return ret
}

console.log(fn())
```

## 花式导入导出

```js
import First from './First'
import Second from './Second'
/..../
export { First, Second }

export {default as SomeClass} from './SomeClass';
export {someFunction} from './utils';
export {default as React} from 'react';
```

## 平行请求 await each
for ... of 可以，forEach 不行，会先打印 nums
[javascript - Using async/await with a forEach loop - Stack Overflow](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)
```js
function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function printNums () {
  const nums = [1, 3, 2]

  // for (let num of nums) {
  nums.forEach(async num => { 
    await sleep(200)
    console.log(num)
  })
  // }

  console.log(nums);
}

printNums()


// promise.all 和 map
async function printFiles () {
  const files = await getFilePaths();

  await Promise.all(files.map(async (file) => {
    const contents = await fs.readFile(file, 'utf8')
    console.log(contents)
  }));
}
```

## async/await

* async function 返回的是 Promise
* await 后面接 Promise，如果不是会转为 Promise.resolve(value)
* await 只能与 async 配合使用

旧的写法，同步异步代码混在一起时，需要单独做错误处理
用 async/await 只需要在外面处理一次
```js
router.get('/user/:id', async (req, res, next) => {
	try {
		const user = await getUserFromDb({ id: req.params.id })
		res.json(user);
	} catch (e) {
		//this will eventually be handled by your error handling middleware
		next(e) 
	}
})
```
[Using Async Await in Express with Node 9 – Alex Bazhenov – Medium](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)
