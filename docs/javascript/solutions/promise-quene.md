# Promise 串行

题目不关心返回

## 1. 迭代 for-of + await
```js
async function runPromiseByQueue(tasks) {
  for (let task of tasks) {
    await task();
  }
}
```

## 2. 借用 reduce

```js
function runPromiseByQueue(myPromises) {
  myPromises.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}

const createPromise = (time, id) => () =>
  new Promise(solve =>
    setTimeout(() => {
      console.log("promise", id);
      solve();
    }, time)
  );

runPromiseByQueue([
  createPromise(1000, 1),
  createPromise(1000, 2),
  createPromise(1000, 3)
]);
```
