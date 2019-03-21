# Promise

* Promise 构造函数是同步执行的（故封装时用 return），then/catch 中的函数是异步执行的。
```js
console.log(1);
new Promise(function(resolve, reject) {
  reject(true);
  window.setTimeout(function() {
    resolve(false)
  }, 0)
}).then(function() {
  console.log(2)
}, function() {
  console.log(3)
});
console.log(4);
// 1 4 3
```
[unhandled promise rejection - 不忘初心，上下求索。](https://liyaoli.com/2017-06-26/unhandled-promise-rejection.html)

## Promise.all
在使用promise.all的时候要注意：业务上没有必然关联的请求比如联动组件这种，一定不要使用promise.all，否则某个接口有问题，会导致其它正常的接口也拿不到数据

## async/await

* async 是 Generator 的语法糖和改进
* async function 返回的是 Promise，可以替代 Promise?
```js
async function add (x, y) {
  return x + y
}

add(2,3).then((result) => {
  console.log(result) // 5
})
```
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

### 错误处理
* 一般是在 await 外面写 try-catch
```js
try {
    await foo();
} catch (error) {
    // Here, `error` would be an `Error` (with stack trace, etc.).
    // Whereas if you used `throw 400`, it would just be `400`.
    // throw new Error(400);
    // throw 400; no stack trace info
}

$("#btn").on("click", async () => {
  try {
    const user = await getUser('tylermcginnis')
    const weather = await getWeather(user.location)

    updateUI({
      user,
      weather,
    })
  } catch (e) {
    showError(e)
  }
})
```
* rejection 会向上抛，在上层 catch
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
* for ... of 可以，forEach 不行，会先打印 nums
* 按序请求可以用 for-await-of
* 并行请求可以用 await Promise.all([])
* 需要 async 配合，可以`(async function(){})()`
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
