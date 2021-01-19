# Promise 执行顺序

```js
function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1') // 先于 error 输出，why
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally1'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally2'))
```

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1') // 直接 resolve，结束
})
const promise2 = promise1.then(res => {
  console.log(res) // 没有 resolve，保持 pending
})
console.log('1', promise1);
console.log('2', promise2);
```

[【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理) - osc_4punxmqt的个人空间 - OSCHINA - 中文开源技术交流社区](https://my.oschina.net/u/4365009/blog/3203819)
