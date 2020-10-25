# Promise
[[toc]]

采用promise可以解决异步编程的逻辑嵌套问题

## 概念
- 状态：pending fulfilled rejected

题目：问数字打印顺序
```js
console.log(1)
new Promise(function(resolve, reject) {
  reject(true)
  window.setTimeout(function() {
    resolve(false)
  }, 0)
}).then(
  function() {
    console.log(3)
  },
  function() {
    console.log(3)
  }
)
console.log(4)
// 1 4 3
```
考察：
- Promise 构造函数是同步执行的（故封装时用 return），then/catch 中的函数是异步执行的。
- Promise 能 reject 又 resolve 吗，实验不能


[unhandled promise rejection - 不忘初心，上下求索。](https://liyaoli.com/2017-06-26/unhandled-promise-rejection.html)

## Promise.all

在使用 promise.all 的时候要注意：业务上没有必然关联的请求比如联动组件这种，一定不要使用 promise.all，否则某个接口有问题，会导致其它正常的接口也拿不到数据

实现：promise  + all resolve count

## async/await

- async function 隐式返回 Promise，显式 return 的内容会包裹于 resolve，在 then 中可以取到
- async 是 Generator 的语法糖和改进

[标准 Async Functions](https://tc39.es/ecmascript-asyncawait/) 搜索 sugar

```js
async function add(x, y) {
  return x + y
}

add(2, 3).then(result => {
  console.log(result) // 5
})
```

- await 后面接 Promise，如果不是会转为 Promise.resolve(value)
- await 只能与 async 配合使用

旧的写法，同步异步代码混在一起时，需要单独做错误处理
用 async/await 只需要在外面处理一次

```js
router.get('/user/:id', async (req, res, next) => {
  try {
    const user = await getUserFromDb({ id: req.params.id })
    res.json(user)
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e)
  }
})
```

[Using Async Await in Express with Node 9 – Alex Bazhenov – Medium](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)

### 错误处理

1. 一般是在 await 外面写 try-catch

```js
try {
  await foo()
} catch (error) {
  // Here, `error` would be an `Error` (with stack trace, etc.).
  // Whereas if you used `throw 400`, it would just be `400`.
  // throw new Error(400);
  // throw 400; no stack trace info
}

$('#btn').on('click', async () => {
  try {
    const user = await getUser('tylermcginnis')
    const weather = await getWeather(user.location)

    updateUI({
      user,
      weather
    })
  } catch (e) {
    showError(e)
  }
})
```

2. rejection 会向上抛，在上层 catch

```js
function get() {
  return {
    then: (resolve, reject) => {
      // resolve(0)
      reject(1)
    }
  }
}
async function main() {
  let r = await get()
  console.log(r) // 不会执行
  // try{
  // let r = await get()
  // console.log(r)
  // }catch(e) {
  // console.error(e)
  // }
}
main().catch(e => console.error('error: ', e))
```

[Async/await](https://javascript.info/async-await)

### await each

- for ... of 可以，forEach 不行，会先打印 nums
- 按序请求可以用 for-await-of
- 并行请求可以用 await Promise.all([])
- 需要 async 配合，可以`(async function(){})()`
  [javascript - Using async/await with a forEach loop - Stack Overflow](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)

```js
function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

async function printNums() {
  const nums = [1, 3, 2]

  // for (let num of nums) {
  nums.forEach(async num => {
    await sleep(200)
    console.log(num)
  })
  // }

  console.log(nums)
}

printNums()

// promise.all 和 map
async function printFiles() {
  const files = await getFilePaths()

  await Promise.all(
    files.map(async file => {
      const contents = await fs.readFile(file, 'utf8')
      console.log(contents)
    })
  )
}
```

[JavaScript Promises: an Introduction  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/primers/promises#javascript_exceptions_and_promises)

## 复杂异步依赖场景
```js
  let finishLoading // resolve fn
  const ready = new Promise(resolve => finishLoading = resolve)

  setTimeout(() => {
    finishLoading() // 可能在某些数据依赖请求完成后调用
  }, 3000)

  ready.then(() => console.log('ready in future'))
```

等待 state 更新的封装
```js
  async forceStateUpdate (state) {
    await new Promise(resolve => this.setState(state, resolve))
  }
```

## race 方法
兼容性：chrome 32+ 不支持 IE10

