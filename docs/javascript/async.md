# 异步

## Promise
* 模块用法
```js
import axios from 'axios'

export function fetchHtml(url) {
  return new Promise((resolve) => {
    axios.get(url).then(response => resolve(response.data))
  })
}
```
* 在 then 里面处理 error，与在外面 catch 有何区别？
  catch() 即 Promise.prototype.catch(onRejected) 相当于 Promise.prototype.then(undefined, onRejected)
  更方便，能捕获 then 中抛出的错误，比在 then 中处理错误更好
  [示例](https://jsfiddle.net/x9bjmwo2/4/)
* process.nextTick() 与 setTimeout(foo, 0) 差不多，延迟执行

* Promise.all
可以并行请求，也就是说多个请求依赖时，都尽量写成 all 形式
```js
// bad
async function someAsyncFunc() {
  const user = await asyncGetUser();
  const categories = await asyncGetCategories();
  const mapping = await asyncMapUserWithCategory(user, categories);
}

// good
async function someAsyncFunc() {
  const [user, categories] = await Promise.all([
      asyncGetUser(),
      asyncGetCategories()
  ]);
  const mapping = await asyncMapUserWithCategory(user, categories);
}
```
### 参考
[JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/)

